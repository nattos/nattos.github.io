const t=`////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FFGL.cpp
//
// FreeFrame is an open-source cross-platform real-time video effects plugin system.
// It provides a framework for developing video effects plugins and hosts on Windows,
// Linux and Mac OSX.
//
// FreeFrameGL (FFGL) is an extension to the FreeFrame spec to support video processing
// with OpenGL on Windows, Linux, and Mac OSX.
//
// Copyright (c) 2018 www.freeframe.org
// All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Redistribution and use in source and binary forms, with or without modification,
//	are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in
//    the documentation and/or other materials provided with the
//    distribution.
//  * Neither the name of FreeFrame nor the names of its
//    contributors may be used to endorse or promote products derived
//    from this software without specific prior written permission.
//
//
//	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
//	ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
//	WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//	IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
//	INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
//	BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
//	DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
//	OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
//	OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
//	OF THE POSSIBILITY OF SUCH DAMAGE.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// First version, Marcus Clements (marcus@freeframe.org)
// www.freeframe.org
//
// FreeFrame 1.0 upgrade by Russell Blakeborough
// email: boblists@brightonart.org
//
// FreeFrame 1.0 - 03 upgrade
// and implementation of FreeFrame SDK methods by Gualtiero Volpe
// email: Gualtiero.Volpe@poste.it
//
// FFGL upgrade by Trey Harrison
// email: trey@harrisondigitalmedia.com
//
// FFGL 2.0 by Menno Vink (menno@resolume.com)
// www.resolume.com
// -Removed the old FreeFrame functionality, and thus CPU processing is no longer supported.
// -Completed the FF_TYPE_OPTION parameter type. Plugins can add parameter elements which hosts
//  should use to show a dropdown styled parameter. When one of the options is selected the parameter
//  will get a value equal to that of the option's value.
// -Completed the FF_TYPE_BUFFER parameter type. When this parameter is used it should provide a usage indication
//  which the host can then use to fill that buffer with the requested data. This can be used by plugins to
//  access the host's global fft data for example.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Includes
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#include <memory.h>
#include <assert.h>
#include <array>
#include <algorithm>
#include "FFGLPluginSDK.h"
#include "FFGLThumbnailInfo.h"
#include "FFGLLog.h"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Static and extern variables used in the FreeFrame SDK
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

extern CFFGLPluginInfo* g_CurrPluginInfo;

static CFFGLPlugin* s_pPrototype = nullptr;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FreeFrame SDK default implementation of the FreeFrame global functions.
// Such function are called by the plugMain function, the only function a plugin exposes.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void ValidateContextState();

bool InitGLExts()
{
#if defined( FFGL_WINDOWS )
	static bool triedInit  = false;
	static bool initResult = false;
	if( triedInit )
		return initResult;
	triedInit = true;

	if( glewInit() != GLEW_OK )
		return false;
	initResult = true;
	return initResult;
#else
	return true;
#endif
}

void* getInfo()
{
	return (void*)( g_CurrPluginInfo->GetPluginInfo() );
}
FFResult initialise()
{
	if( g_CurrPluginInfo == NULL )
		return FF_FAIL;

	//Allow the plugin to initialise itself before we do anything with it. This allows it
	//to execute some setup code that it'll only ever need to do once.
	if( FPINITIALISELIBRARY* pInitialise = g_CurrPluginInfo->GetInitialiseMethod() )
	{
		FFResult result = pInitialise();
		if( result != FF_SUCCESS )
			return result;
	}

	if( s_pPrototype == NULL )
	{
		//get the instantiate function pointer
		FPCREATEINSTANCEGL* pInstantiate = g_CurrPluginInfo->GetFactoryMethod();

		//call the instantiate function
		FFResult ret = pInstantiate( &s_pPrototype );

		//make sure the instantiate call worked
		if( ( ret == FF_FAIL ) || ( s_pPrototype == NULL ) )
			return FF_FAIL;

		return FF_SUCCESS;
	}

	return FF_SUCCESS;
}
FFResult deInitialise()
{
	if( g_CurrPluginInfo == NULL )
		return FF_FAIL;

	if( s_pPrototype != NULL )
	{
		delete s_pPrototype;
		s_pPrototype = NULL;
	}

	//Allow the plugin to initialise itself before we do anything with it. This allows it
	//to execute some setup code that it'll only ever need to do once.
	if( FPDEINITIALISELIBRARY* pDeinitialise = g_CurrPluginInfo->GetDeinitialiseMethod() )
		pDeinitialise();

	return FF_SUCCESS;
}
unsigned int getNumParameters()
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return FF_FAIL;
	}

	return s_pPrototype->GetNumParams();
}
char* getParameterName( unsigned int index )
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return NULL;
	}

	return s_pPrototype->GetParamName( index );
}
FFMixed getParameterDefault( unsigned int index )
{
	FFMixed ret;
	ret.UIntValue = FF_FAIL;
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return ret;
	}
	return s_pPrototype->GetParamDefault( index );
}
FFResult getPluginCaps( unsigned int index )
{
	int MinInputs = -1;
	int MaxInputs = -1;

	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return FF_FAIL;
	}

	switch( index )
	{
	case FF_CAP_SET_TIME:
		if( s_pPrototype->IsTimeSupported() )
			return FF_TRUE;
		else
			return FF_FALSE;
	case FF_CAP_MINIMUM_INPUT_FRAMES:
		MinInputs = s_pPrototype->GetMinInputs();
		if( MinInputs < 0 )
			return FF_FALSE;
		return MinInputs;
	case FF_CAP_MAXIMUM_INPUT_FRAMES:
		MaxInputs = s_pPrototype->GetMaxInputs();
		if( MaxInputs < 0 )
			return FF_FALSE;
		return MaxInputs;
	case FF_CAP_TOP_LEFT_TEXTURE_ORIENTATION:
		if( s_pPrototype->IsTopLeftTextureOrientationSupported() )
			return FF_TRUE;
		else
			return FF_FALSE;

	default:
		return FF_FALSE;
	}

	return FF_FAIL;
}
void* getExtendedInfo()
{
	return (void*)( g_CurrPluginInfo->GetPluginExtendedInfo() );
}
unsigned int getParameterType( unsigned int index )
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return FF_FAIL;
	}

	return s_pPrototype->GetParamType( index );
}
void* instantiateGL( const FFGLViewportStruct* pGLViewport )
{
	if( g_CurrPluginInfo == NULL || pGLViewport == NULL )
		return (void*)FF_FAIL;

	// If the plugin is not initialized, initialize it
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();

		if( ( dwRet == FF_FAIL ) || ( s_pPrototype == NULL ) )
			return (void*)FF_FAIL;
	}

	//get the instantiate function pointer
	FPCREATEINSTANCEGL* pInstantiate = g_CurrPluginInfo->GetFactoryMethod();

	CFFGLPlugin* pInstance = NULL;

	//call the instantiate function
	FFResult dwRet = pInstantiate( &pInstance );

	//make sure the instantiate call worked
	if( ( dwRet == FF_FAIL ) || ( pInstance == NULL ) )
		return (void*)FF_FAIL;

	pInstance->m_pPlugin = pInstance;

	// Initializing instance with default values
	for( unsigned int i = 0; i < s_pPrototype->GetNumParams(); ++i )
	{
		unsigned int pType = s_pPrototype->GetParamType( i );
		FFMixed pDefault   = s_pPrototype->GetParamDefault( i );
		if( pType == FF_TYPE_TEXT || pType == FF_TYPE_FILE )
			dwRet = pInstance->SetTextParameter( i, (const char*)pDefault.PointerValue );
		else
			dwRet = pInstance->SetFloatParameter( i, *(float*)&pDefault.UIntValue );

		//#ifdef FFGLTEXTFIX

		//    int type = s_pPrototype->GetParamType(i);
		//
		//    switch( type )
		//    {
		//      case FF_TYPE_TEXT:
		//		SetParameterStruct ParamStruct;
		//		ParamStruct.NewParameterValue = pDefault;
		//        dwRet = pInstance->SetParameter(&ParamStruct);
		//        break;
		//      case FF_TYPE_BUFFER:
		//        {
		//          /*int n = s_pPrototype->GetNumParamElements(DWORD(i));
		//          float * buf = new float[n];
		//          for( int i = 0; i < n; i++ )
		//            buf[i] = 0.0f; // TODO: use parameter default?
		//          ParamStruct.NewParameterValue = (DWORD)buf;
		//          dwRet = pInstance->SetParameter(&ParamStruct);
		//          delete [] buf;*/
		//        }
		//        break;
		//		default:
		//         memcpy(&ParamStruct.NewParameterValue, pValue, 4);
		//         dwRet = pInstance->SetParameter(&ParamStruct);
		//         break;
		//
		//    }

		if( dwRet == FF_FAIL )
		{
			//SetParameter failed, delete the instance
			delete pInstance;
			return (void*)FF_FAIL;
		}
	}

	if( !InitGLExts() )
		return (void*)FF_FAIL;

	//The host should pass us a context in it's default state.
	ValidateContextState();
	//call the InitGL method
	if( pInstance->InitGL( pGLViewport ) != FF_SUCCESS )
	{
		//InitGL failed, delete the instance
		pInstance->DeInitGL();
		//The plugin should return the context to it's default state.
		ValidateContextState();
		delete pInstance;

		return (void*)FF_FAIL;
	}
	else
	{
		//The plugin should return the context to it's default state.
		ValidateContextState();
		return pInstance;
	}
}
FFResult processGL( CFFGLPlugin* pPlugObj, ProcessOpenGLStruct* pogls )
{
	if( pPlugObj != NULL )
	{
		if( pogls != NULL )
		{
			// make sure Connect has been called
			if( !pPlugObj->m_isConnected )
			{
				pPlugObj->Connect();
				pPlugObj->m_isConnected = true;
			}

			//The host should pass us a context in it's default state.
			ValidateContextState();
			FFResult result = pPlugObj->ProcessOpenGL( pogls );
			//The plugin should return the context to it's default state.
			ValidateContextState();
			return result;
		}
		else
		{
			return FF_FAIL;
		}
	}
	else
	{
		return FF_FAIL;
	}
}
FFResult deInstantiateGL( void* instanceID )
{
	CFFGLPlugin* p = (CFFGLPlugin*)instanceID;

	if( p != NULL )
	{
		// Disconnect if necessary
		if( p->m_isConnected )
		{
			p->Disconnect();
			p->m_isConnected = false;
		}

		//The host should pass us a context in it's default state.
		ValidateContextState();
		p->DeInitGL();
		//The plugin should return the context to it's default state.
		ValidateContextState();
		delete p;

		return FF_SUCCESS;
	}

	return FF_FAIL;
}
FFUInt32 getNumParameterElements( unsigned int index, CFFGLPlugin* pPlugObj = nullptr )
{
	if( pPlugObj == nullptr )
	{
		if( s_pPrototype == nullptr )
		{
			FFResult dwRet = initialise();
			if( dwRet == FF_FAIL )
				return FF_FAIL;
		}
		pPlugObj = s_pPrototype;
	}

	return pPlugObj->GetNumParamElements( index );
}
char* getParameterElementName( unsigned int paramIndex, unsigned int elementIndex, CFFGLPlugin* pPlugObj = nullptr )
{
	if( pPlugObj == nullptr )
	{
		if( s_pPrototype == nullptr )
		{
			FFResult dwRet = initialise();
			if( dwRet == FF_FAIL )
				return nullptr;
		}
		pPlugObj = s_pPrototype;
	}

	return pPlugObj->GetParamElementName( paramIndex, elementIndex );
}
FFMixed getParameterElementValue( unsigned int paramIndex, unsigned int elementIndex, CFFGLPlugin* pPlugObj = nullptr )
{
	FFMixed ret;
	ret.UIntValue = FF_FAIL;
	if( pPlugObj == nullptr )
	{
		if( s_pPrototype == nullptr )
		{
			FFResult dwRet = initialise();
			if( dwRet == FF_FAIL )
				return ret;
		}
		pPlugObj = s_pPrototype;
	}

	return pPlugObj->GetParamElementDefault( paramIndex, elementIndex );
}
FFUInt32 GetNumElementSeparators( unsigned int paramIndex )
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return 0;
	}
	return s_pPrototype->GetNumElementSeparators( paramIndex );
}
FFUInt32 GetElementSeparatorElementIndex( unsigned int paramIndex, unsigned int separatorIndex )
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return -1;
	}
	return s_pPrototype->GetElementSeparatorElementIndex( paramIndex, separatorIndex );
}
FFUInt32 getParameterUsage( unsigned int index )
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return FF_FAIL;
	}

	return s_pPrototype->GetParamUsage( index );
}
const char* getPluginShortName()
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return NULL;
	}

	const char* shortName = s_pPrototype->GetShortName();
	if( shortName == NULL )
		return NULL;

	return shortName;
}
FFMixed getParamRange( FFMixed input )
{
	FFMixed ret;
	ret.UIntValue = FF_FAIL;
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return ret;
	}
	ret.UIntValue = FF_SUCCESS;

	GetRangeStruct* getRange = (GetRangeStruct*)input.PointerValue;

	RangeStruct range = s_pPrototype->GetParamRange( getRange->parameterNumber );
	getRange->range   = range;
	return ret;
}
void writeStringToHostBuffer( const std::string& stringToWrite, StringBufferStruct& hostBuffer )
{
	size_t numToCopy = std::min( (size_t)hostBuffer.maxToWrite, stringToWrite.length() );
	memcpy( hostBuffer.address, stringToWrite.c_str(), numToCopy );
}
FFMixed getParamGroup( FFMixed input )
{
	FFMixed ret;
	ret.UIntValue = FF_FAIL;

	GetStringStructTag* getStringStruct = reinterpret_cast< GetStringStructTag* >( input.PointerValue );
	if( getStringStruct == nullptr || getStringStruct->stringBuffer.maxToWrite == 0 )
		return ret;

	if( s_pPrototype == nullptr )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return ret;
	}

	std::string paramGroup = s_pPrototype->GetParamGroup( getStringStruct->parameterNumber );
	writeStringToHostBuffer( paramGroup, getStringStruct->stringBuffer );

	ret.UIntValue = FF_SUCCESS;
	return ret;
}
FFMixed getParamDisplayName( void* instanceID, FFMixed input )
{
	FFMixed ret;
	ret.UIntValue               = FF_FAIL;
	CFFGLPlugin* pluginInstance = (CFFGLPlugin*)instanceID;
	if( pluginInstance == nullptr )
		return ret;

	GetStringStructTag* getStringStruct = reinterpret_cast< GetStringStructTag* >( input.PointerValue );
	if( getStringStruct == nullptr || getStringStruct->stringBuffer.maxToWrite == 0 )
		return ret;

	std::string displayName = pluginInstance->GetParamDisplayName( getStringStruct->parameterNumber );
	writeStringToHostBuffer( displayName, getStringStruct->stringBuffer );

	ret.UIntValue = FF_SUCCESS;
	return ret;
}
FFUInt32 getThumbnail( GetThumbnailStruct& getStruct )
{
	CFFGLThumbnailInfo* thumbnailInfo = CFFGLThumbnailInfo::GetInstance();
	//It's possible that this plugin doesn't have an embedded thumbnail.
	if( thumbnailInfo == nullptr )
	{
		getStruct.width  = 0;
		getStruct.height = 0;
		//There's no thumbnail available. Use same error code as old plugins that didn't support this feature
		//to make implementation on the host easier (fail = no thumbnail, success = thumbnail is available)
		return FF_FAIL;
	}

	getStruct.width  = thumbnailInfo->GetWidth();
	getStruct.height = thumbnailInfo->GetHeight();
	if( getStruct.rgbaPixelBuffer != nullptr )
		memcpy( getStruct.rgbaPixelBuffer, thumbnailInfo->GetPixels(), getStruct.width * getStruct.height * 4 );

	return FF_SUCCESS;
}
FFUInt32 getNumFileParameterExtensions( unsigned int index )
{
	if( s_pPrototype == nullptr )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return FF_FAIL;
	}

	return s_pPrototype->GetNumFileParamExtensions( index );
}
char* getFileParameterExtension( unsigned int paramIndex, unsigned int extensionIndex )
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return NULL;
	}

	return s_pPrototype->GetFileParamExtension( paramIndex, extensionIndex );
}
FFUInt32 getDefaultParameterVisibility( unsigned int index )
{
	if( s_pPrototype == NULL )
	{
		FFResult dwRet = initialise();
		if( dwRet == FF_FAIL )
			return FF_FAIL;
	}

	return s_pPrototype->GetParamVisibility( index );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementation of plugMain, the one and only exposed function
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#if defined( FFGL_WINDOWS )
extern "C" __declspec( dllexport ) FFMixed __stdcall plugMain( FFUInt32 functionCode, FFMixed inputValue, FFInstanceID instanceID )
#elif defined( FFGL_MACOS ) || defined( FFGL_LINUX )
#pragma message "Compiling plugMain for macOS/Linux with extern C"
extern "C" __attribute__( ( used ) ) __attribute__( ( visibility( "default" ) ) ) FFMixed plugMain( FFUInt32 functionCode, FFMixed inputValue, FFInstanceID instanceID )
#endif
{
	FFMixed retval;
	retval.UIntValue = FF_FAIL;

	// declare pPlugObj - pointer to this instance
	CFFGLPlugin* pPlugObj;

	// typecast DWORD into pointer to a CFFGLPlugin
	pPlugObj = (CFFGLPlugin*)instanceID;

	switch( functionCode )
	{
	case FF_GET_INFO:
		retval.PointerValue = (PluginInfoStruct*)getInfo();
		break;
	case FF_INITIALISE_V2:
		retval.UIntValue = initialise();
		break;
	case FF_DEINITIALISE:
		retval.UIntValue = deInitialise();
		break;
	case FF_GET_NUM_PARAMETERS:
		retval.UIntValue = getNumParameters();
		break;
	case FF_GET_PARAMETER_NAME:
		retval.PointerValue = getParameterName( inputValue.UIntValue );
		break;
	case FF_GET_PARAMETER_DEFAULT:
		retval = getParameterDefault( inputValue.UIntValue );
		break;
	case FF_GET_PARAMETER_DISPLAY:
		if( pPlugObj != NULL )
			retval.PointerValue = pPlugObj->GetParameterDisplay( inputValue.UIntValue );
		else
			retval.PointerValue = (char*)FF_FAIL;
		break;
	case FF_SET_PARAMETER:
		if( pPlugObj != NULL )
		{
			const SetParameterStruct& setParameterStruct = *reinterpret_cast< const SetParameterStruct* >( inputValue.PointerValue );
			unsigned int paramType                       = getParameterType( setParameterStruct.ParameterNumber );
			if( paramType == FF_TYPE_TEXT || paramType == FF_TYPE_FILE )
			{
				retval.UIntValue = pPlugObj->SetTextParameter( setParameterStruct.ParameterNumber,
															   (const char*)setParameterStruct.NewParameterValue.PointerValue );
			}
			else
			{
				retval.UIntValue = pPlugObj->SetFloatParameter( setParameterStruct.ParameterNumber,
																*(float*)&setParameterStruct.NewParameterValue.UIntValue );
			}
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}
		break;
	case FF_GET_PARAMETER:
		if( pPlugObj != NULL )
		{
			unsigned int paramType = getParameterType( inputValue.UIntValue );
			if( paramType == FF_TYPE_TEXT || paramType == FF_TYPE_FILE )
			{
				retval.PointerValue = pPlugObj->GetTextParameter( inputValue.UIntValue );
			}
			else
			{
				float fValue     = pPlugObj->GetFloatParameter( inputValue.UIntValue );
				retval.UIntValue = *(FFUInt32*)&fValue;
			}
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}
		break;
	case FF_GET_PLUGIN_CAPS:
		retval.UIntValue = getPluginCaps( inputValue.UIntValue );
		break;
	case FF_ENABLE_PLUGIN_CAP:
		if( pPlugObj != NULL )
		{
			switch( inputValue.UIntValue )
			{
			case FF_CAP_TOP_LEFT_TEXTURE_ORIENTATION:
				if( getPluginCaps( FF_CAP_TOP_LEFT_TEXTURE_ORIENTATION ) == FF_TRUE )
				{
					pPlugObj->HostEnabledTopLeftTextures();
				}
				else
				{
					//The host is trying to enable a capability that the plugin doesn't support, so return failure.
					retval.UIntValue = FF_FAIL;
				}
				break;
			default:
				//This is not a changable capability, so return failure.
				retval.UIntValue = FF_FAIL;
				break;
			}
		}
		else
		{
			//Capabilities need to be enabled on specific plugin instances, there's no instance so we return failure.
			retval.UIntValue = FF_FAIL;
		}
		break;
	case FF_GET_EXTENDED_INFO:
		retval.PointerValue = getExtendedInfo();
		break;
	case FF_GET_PARAMETER_TYPE:
		retval.UIntValue = getParameterType( inputValue.UIntValue );
		break;
	case FF_GET_INPUT_STATUS:
		if( pPlugObj != NULL )
			retval.UIntValue = pPlugObj->GetInputStatus( inputValue.UIntValue );
		else
			retval.UIntValue = FF_FAIL;
		break;
	case FF_PROCESS_OPENGL:
		retval.UIntValue = processGL( pPlugObj, (ProcessOpenGLStruct*)inputValue.PointerValue );
		break;
	case FF_INSTANTIATE_GL:
		retval.PointerValue = instantiateGL( (const FFGLViewportStruct*)inputValue.PointerValue );
		break;
	case FF_DEINSTANTIATE_GL:
		if( pPlugObj != NULL )
			retval.UIntValue = deInstantiateGL( pPlugObj );
		else
			retval.UIntValue = FF_FAIL;
		break;
	case FF_SET_TIME:
		if( pPlugObj != NULL )
		{
			double* inputTime = (double*)inputValue.PointerValue;
			if( inputTime != NULL )
				retval.UIntValue = pPlugObj->SetTime( *inputTime );
			else
				retval.UIntValue = FF_FAIL;
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}
		break;
	case FF_CONNECT:
		if( pPlugObj != NULL )
		{
			retval.UIntValue = pPlugObj->Connect();
			if( retval.UIntValue == FF_SUCCESS )
				pPlugObj->m_isConnected = true;
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}
		break;
	case FF_DISCONNECT:
		if( pPlugObj != NULL )
		{
			retval.UIntValue = pPlugObj->Disconnect();
			if( retval.UIntValue == FF_SUCCESS )
				pPlugObj->m_isConnected = false;
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}
		break;
	case FF_RESIZE:
		if( pPlugObj != NULL )
		{
			retval.UIntValue = pPlugObj->Resize( (const FFGLViewportStruct*)inputValue.PointerValue );
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}
		break;
	case FF_GET_NUM_PARAMETER_ELEMENTS:
		retval.UIntValue = getNumParameterElements( inputValue.UIntValue, pPlugObj );
		break;
	case FF_GET_PARAMETER_ELEMENT_NAME: {
		const GetParameterElementNameStruct* arguments = (const GetParameterElementNameStruct*)inputValue.PointerValue;
		retval.PointerValue                            = getParameterElementName( arguments->ParameterNumber, arguments->ElementNumber, pPlugObj );
		break;
	}
	case FF_GET_PARAMETER_ELEMENT_VALUE: {
		const GetParameterElementValueStruct* arguments = (const GetParameterElementValueStruct*)inputValue.PointerValue;
		retval                                          = getParameterElementValue( arguments->ParameterNumber, arguments->ElementNumber, pPlugObj );
		break;
	}
	case FF_GET_NUM_ELEMENT_SEPARATORS: {
		retval.UIntValue = GetNumElementSeparators( inputValue.UIntValue );
		break;
	}
	case FF_GET_SEPARATOR_ELEMENT_INDEX: {
		const GetSeparatorElementIndexStructTag* arguments = (const GetSeparatorElementIndexStructTag*)inputValue.PointerValue;
		retval.UIntValue                                   = GetElementSeparatorElementIndex( arguments->ParameterNumber, arguments->SeparatorIndex );
		break;
	}
	case FF_SET_PARAMETER_ELEMENT_VALUE:
		if( pPlugObj != NULL )
		{
			const SetParameterElementValueStruct* arguments = (const SetParameterElementValueStruct*)inputValue.PointerValue;
			retval.UIntValue                                = pPlugObj->SetParamElementValue( arguments->ParameterNumber, arguments->ElementNumber, *(float*)&arguments->NewParameterValue.UIntValue );
		}
		break;
	case FF_GET_PARAMETER_USAGE:
		retval.UIntValue = getParameterUsage( inputValue.UIntValue );
		break;
	case FF_GET_PLUGIN_SHORT_NAME:
		retval.PointerValue = (void*)getPluginShortName();
		break;
	case FF_SET_BEATINFO:
		if( pPlugObj != NULL )
		{
			const SetBeatinfoStruct* beatInfo = reinterpret_cast< const SetBeatinfoStruct* >( inputValue.PointerValue );
			float bpm                         = *(float*)&beatInfo->bpm;
			float barPhase                    = *(float*)&beatInfo->barPhase;
			pPlugObj->SetBeatInfo( bpm, barPhase );
			retval.UIntValue = FF_SUCCESS;
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}

		break;
	case FF_SET_HOSTINFO:
		if( pPlugObj != NULL )
		{
			const SetHostinfoStructTag* hostInfo = reinterpret_cast< const SetHostinfoStructTag* >( inputValue.PointerValue );
			pPlugObj->SetHostInfo( hostInfo->name, hostInfo->version );
			retval.UIntValue = FF_SUCCESS;
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}

		break;

	case FF_SET_SAMPLERATE:
		if( pPlugObj != NULL )
		{
			pPlugObj->SetSampleRate( inputValue.UIntValue );
			retval.UIntValue = FF_SUCCESS;
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}

		break;
	case FF_GET_RANGE:
		retval = getParamRange( inputValue );
		break;
	case FF_GET_PARAM_GROUP:
		retval = getParamGroup( inputValue );
		break;
	case FF_GET_PARAM_DISPLAY_NAME:
		retval = getParamDisplayName( pPlugObj, inputValue );
		break;

	case FF_GET_THUMBNAIL:
		if( inputValue.PointerValue != nullptr )
			retval.UIntValue = getThumbnail( *reinterpret_cast< GetThumbnailStruct* >( inputValue.PointerValue ) );
		else
			retval.UIntValue = FF_FAIL;
		break;

	case FF_GET_NUM_FILE_PARAMETER_EXTENSIONS:
		retval.UIntValue = getNumFileParameterExtensions( inputValue.UIntValue );
		break;
	case FF_GET_FILE_PARAMETER_EXTENSION: {
		const GetFileParameterExtensionStruct* arguments = reinterpret_cast< const GetFileParameterExtensionStruct* >( inputValue.PointerValue );
		retval.PointerValue                              = getFileParameterExtension( arguments->ParameterNumber, arguments->ExtensionNumber );
		break;
	}

	case FF_GET_PRAMETER_VISIBILITY: {
		if( pPlugObj != nullptr )
			retval.UIntValue = pPlugObj->GetParamVisibility( inputValue.UIntValue );
		else
			retval.UIntValue = getDefaultParameterVisibility( inputValue.UIntValue );
		break;
	}

	case FF_GET_PARAMETER_EVENTS: {
		GetParamEventsStruct& eventsBuffer = *reinterpret_cast< GetParamEventsStruct* >( inputValue.PointerValue );
		//Events orignate from plugin instances so if no instance exists for this request we cannot fullfill it.
		if( pPlugObj != nullptr )
		{
			FFUInt32 numPendingEvents = pPlugObj->GetNumPendingParamEvents();
			//Hosts are allowed to query the number of events that are pending by passing in a nullptr for the events buffer.
			//In that case we're outputting the number of pending events in the numEvents field and dont try to write any events into the event buffer.
			if( eventsBuffer.events == nullptr )
			{
				eventsBuffer.numEvents = numPendingEvents;
				retval.UIntValue       = FF_SUCCESS;
			}
			else
			{
				//The host has provided a buffer to write events in to. We'll be writing our events into the buffer and output the
				//number of events we've written in there.
				eventsBuffer.numEvents = pPlugObj->ConsumeParamEvents( eventsBuffer.events, eventsBuffer.numEvents );
				retval.UIntValue       = FF_SUCCESS;
			}
		}
		else
		{
			retval.UIntValue = FF_FAIL;
		}
		break;
	}

	//Previously used function codes that are no longer supported:
	//case FF_INITIALISE:
	/**
	 * We're dropping the old FFGL 1.6 and lower initialise here. FFGL 2.0 removed old stuff and made support for newer stuff mandatory
	 * so hosts need a way to know they cannot use this plugin if they're dependant on the old behaviour. If the host isn't dependant on the old
	 * behaviour it will have to update to build using the FFGL 2.0 sdk and instead invoke the initialise_v2 opcode. This way
	 * the plugin and host both agree that it's okay not to support the old behaviour.
	 */
	//case FF_INSTANTIATE:
	//case FF_DEINSTANTIATE:
	//case FF_PROCESSFRAME:
	//case FF_PROCESSFRAMECOPY:
	default:
		retval.UIntValue = FF_FAIL;
		break;
	}

	return retval;
}

#if defined( FFGL_WINDOWS )
extern "C" __declspec( dllexport ) void __stdcall SetLogCallback( PFNLog logCallback )
#elif defined( FFGL_MACOS ) || defined( FFGL_LINUX )
void SetLogCallback( PFNLog logCallback )
#endif
{
	FFGLLog::SetLogCallback( logCallback );
}

/**
 * The FFGL host provides us with a context in the default state. We have to return a context in the default
 * state back to the host. In previous FFGL versions this was also the convention, but it was never actually checked.
 * Since previous FFGL versions were based on OpenGL 1.0 the host had the ability to isolate these state changes
 * so that it'll stay unaffected by what a plugin does. Due to the move to OpenGL 4.1 the host no longer has this ability
 * so it becomes extra important to enforce this convention. The problem when plugins dont restore the state is that
 * the host's rendering may be affected. For example if the plugin keeps a VBO bound but the hosts renders something assuming
 * no vbo is bound, it'll start fetching from the plugin's vbo.
 */
void ValidateContextState()
{
#if defined( FFGL_DEBUG )
	GLint glInt[ 4 ];
	GLboolean glBool[ 4 ];

	//Please use the ScopedShaderBinding to automatically unbind your shaders.
	glGetIntegerv( GL_CURRENT_PROGRAM, glInt );
	assert( glInt[ 0 ] == 0 );

	//Please use the ScopedSamplerActivation to automatically return the active sampler to the default state.
	glGetIntegerv( GL_ACTIVE_TEXTURE, glInt );
	assert( glInt[ 0 ] == GL_TEXTURE0 );

	struct TextureType
	{
		GLenum target;
		GLenum binding;
	};
	const std::array< TextureType, 11 > TEXTURE_TYPES = {
		TextureType{ GL_TEXTURE_1D, GL_TEXTURE_BINDING_1D },
		TextureType{ GL_TEXTURE_2D, GL_TEXTURE_BINDING_2D },
		TextureType{ GL_TEXTURE_3D, GL_TEXTURE_BINDING_3D },
		TextureType{ GL_TEXTURE_1D_ARRAY, GL_TEXTURE_BINDING_1D_ARRAY },
		TextureType{ GL_TEXTURE_2D_ARRAY, GL_TEXTURE_BINDING_2D_ARRAY },
		TextureType{ GL_TEXTURE_RECTANGLE, GL_TEXTURE_BINDING_RECTANGLE },
		TextureType{ GL_TEXTURE_CUBE_MAP, GL_TEXTURE_BINDING_CUBE_MAP },
		TextureType{ GL_TEXTURE_CUBE_MAP_ARRAY, GL_TEXTURE_BINDING_CUBE_MAP_ARRAY },
		TextureType{ GL_TEXTURE_BUFFER, GL_TEXTURE_BINDING_BUFFER },
		TextureType{ GL_TEXTURE_2D_MULTISAMPLE, GL_TEXTURE_BINDING_2D_MULTISAMPLE },
		TextureType{ GL_TEXTURE_2D_MULTISAMPLE_ARRAY, GL_TEXTURE_BINDING_2D_MULTISAMPLE_ARRAY }
	};
	GLint numSamplers;
	glGetIntegerv( GL_MAX_TEXTURE_IMAGE_UNITS, &numSamplers );
	for( const auto& pair : TEXTURE_TYPES )
	{
		for( GLint sampler = 0; sampler < numSamplers; ++sampler )
		{
			glActiveTexture( GL_TEXTURE0 + sampler );
			//Please use the ScopedTextureBinding to automatically unbind textures after you're done with them.
			glGetIntegerv( pair.binding, glInt );
			assert( glInt[ 0 ] == 0 );
		}
	}
	glActiveTexture( GL_TEXTURE0 );

	//Please use the ScopedVBOBinding to automatically unbind your vertex buffers.
	glGetIntegerv( GL_ARRAY_BUFFER_BINDING, glInt );
	assert( glInt[ 0 ] == 0 );

	//Uncommonly used bindings. You can use the ScopedBufferBinding base class for these.
	//glGetIntegerv( GL_COPY_READ_BUFFER_BINDING, glInt );
	//assert( glInt[ 0 ] == 0 );
	//glGetIntegerv( GL_COPY_WRITE_BUFFER_BINDING, glInt );
	//assert( glInt[ 0 ] == 0 );
	glGetIntegerv( GL_DRAW_INDIRECT_BUFFER_BINDING, glInt );
	assert( glInt[ 0 ] == 0 );
	glGetIntegerv( GL_PIXEL_PACK_BUFFER_BINDING, glInt );
	assert( glInt[ 0 ] == 0 );
	glGetIntegerv( GL_PIXEL_UNPACK_BUFFER_BINDING, glInt );
	assert( glInt[ 0 ] == 0 );
	glGetIntegerv( GL_TRANSFORM_FEEDBACK_BUFFER_BINDING, glInt );
	assert( glInt[ 0 ] == 0 );

	//Please use the ScopedIBOBinding to automatically unbind your index buffers.
	glGetIntegerv( GL_ELEMENT_ARRAY_BUFFER_BINDING, glInt );
	assert( glInt[ 0 ] == 0 );

	//Please use the ScopedUBOBinding to automatically unbind your uniform buffers.
	glGetIntegerv( GL_UNIFORM_BUFFER_BINDING, glInt );
	assert( glInt[ 0 ] == 0 );

	//Please use the ScopedVAOBinding to automatically unbind your vertex array objects.
	glGetIntegerv( GL_VERTEX_ARRAY_BINDING, glInt );
	assert( glInt[ 0 ] == 0 );

	//We have no scoped bindings for the render state. You need to manually return these to the context default state.
	glGetIntegerv( GL_POLYGON_MODE, glInt );
	assert( glInt[ 0 ] == GL_FILL );

	assert( glIsEnabled( GL_CULL_FACE ) == GL_FALSE );
	glGetIntegerv( GL_FRONT_FACE, glInt );
	assert( glInt[ 0 ] == GL_CCW );

	assert( glIsEnabled( GL_BLEND ) == GL_FALSE );

	glGetIntegerv( GL_BLEND_EQUATION_RGB, glInt );
	assert( glInt[ 0 ] == GL_FUNC_ADD );
	glGetIntegerv( GL_BLEND_EQUATION_ALPHA, glInt );
	assert( glInt[ 0 ] == GL_FUNC_ADD );

	glGetIntegerv( GL_BLEND_SRC_RGB, glInt );
	assert( glInt[ 0 ] == GL_ONE );
	glGetIntegerv( GL_BLEND_SRC_ALPHA, glInt );
	assert( glInt[ 0 ] == GL_ONE );
	glGetIntegerv( GL_BLEND_DST_RGB, glInt );
	assert( glInt[ 0 ] == GL_ZERO );
	glGetIntegerv( GL_BLEND_DST_ALPHA, glInt );
	assert( glInt[ 0 ] == GL_ZERO );

	glGetBooleanv( GL_DEPTH_WRITEMASK, glBool );
	assert( glBool[ 0 ] == GL_TRUE );

	assert( glIsEnabled( GL_DEPTH_TEST ) == GL_FALSE );
	glGetIntegerv( GL_DEPTH_FUNC, glInt );
	assert( glInt[ 0 ] == GL_LESS );

	glGetBooleanv( GL_COLOR_WRITEMASK, glBool );
	assert( glBool[ 0 ] == GL_TRUE );
	assert( glBool[ 1 ] == GL_TRUE );
	assert( glBool[ 2 ] == GL_TRUE );
	assert( glBool[ 3 ] == GL_TRUE );
#endif
}
`,n=`////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FFGL.h
//
// FreeFrame is an open-source cross-platform real-time video effects plugin system.
// It provides a framework for developing video effects plugins and hosts on Windows,
// Linux and Mac OSX.
//
// Copyright (c) 2018 www.freeframe.org
// All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Redistribution and use in source and binary forms, with or without modification,
//	are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in
//    the documentation and/or other materials provided with the
//    distribution.
//  * Neither the name of FreeFrame nor the names of its
//    contributors may be used to endorse or promote products derived
//    from this software without specific prior written permission.
//
//
//	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
//	ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
//	WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//	IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
//	INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
//	BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
//	DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
//	OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
//	OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
//	OF THE POSSIBILITY OF SUCH DAMAGE.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// First version, Marcus Clements (marcus@freeframe.org)
// www.freeframe.org
//
// FreeFrame 1.0 upgrade by Pete Warden
// www.petewarden.com
//
// FreeFrame 1.0 - 03 upgrade by Gualtiero Volpe
// Gualtiero.Volpe@poste.it
//
// #ifdef tweaks for FreeFrameGL upgrade by Trey Harrison
// www.harrisondigitalmedia.com
//
// FFGL 1.0 by Trey Harrison
// www.harrisondigitalmedia.com
//
// FFGL 2.0 by Menno Vink (menno@resolume.com)
// www.resolume.com
// -Removed the old FreeFrame functionality, and thus CPU processing is no longer supported.
// -Completed the FF_TYPE_OPTION parameter type. Plugins can add parameter elements which hosts
//  should use to show a dropdown styled parameter. When one of the options is selected the parameter
//  will get a value equal to that of the option's value.
// -Completed the FF_TYPE_BUFFER parameter type. When this parameter is used it should provide a usage indication
//  which the host can then use to fill that buffer with the requested data. This can be used by plugins to
//  access the host's global fft data for example.
//
// FFGL 2.1 by Menno Vink (menno@resolume.com)
// www.resolume.com
// -Added support for embedded thumbnails.
// -Reintroduction of RAII bindings to help protect the host's context state.
// -Added file parameters
//
// FFGL 2.2 by Menno Vink (menno@resolume.com)
// www.resolume.com
// -Added context state validation in debug builds. This provides plugin developers hints on which context state they need to restore.
// -Removed default DllMain implementation so that plugins may implement it without changing the ffgl library.
// -File parameters now accept an initial value just like text parameters.
//  (This requires Resolume 7.2 for it to be picked up)
// -Added support for grouping parameters together. Set a parameter's group with SetParamGroup,
//  any cosecutive params with the same group will be listed under the same collapsable region
//  (This requires Resolume 7.3.0 for it to be picked up)
// -Added support for top-left texture orientation. Hosts that are rendering with the top-left texture orientation currently need to flip
//  both inputs and the output every frame. A plugin can now inform the host that it supports the top-left orientation by setting supportTopLeftTextureOrientation to true.
//  If the host wants to use it then it'll inform the plugin, which can query if it should use top-left or bottom-left using the GetTextureOrientation function.
//  (This requires Resolume 7.3.1 for it to be picked up)
// -Added support for hooking into the host's logging system from the plugin, enabling a plugin's log messages to be interleaved with the host's messages in the host's log file.
//  (This requires Resolume 7.3.1 for it to be picked up)
//
// FFGL 2.3 by Menno Vink (menno@resolume.com)
// www.resolume.com
// -Added support for dynamic parameter display names.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#ifndef __FFGL2_H__
#define __FFGL2_H__

//////////////////////////////////////////////////////////////////////////////////////
// Includes
/////////////////////////////////////////////////////////////////////////////////////
#include "FFGLPlatform.h"

//include the appropriate OpenGL headers for the compiler

#if defined( FFGL_WINDOWS )
#ifndef WIN32_LEAN_AND_MEAN
#define WIN32_LEAN_AND_MEAN//Exclude rarely-used stuff from Windows headers
#endif
//Defines to prevent windows.h from making all kinds of defines which may conflict with actual user code.
#define NOGDICAPMASKS
#define NOVIRTUALKEYCODES
#define NOWINMESSAGES
#define NOWINSTYLES
#define NOSYSMETRICS
#define NOMENUS
#define NOICONS
#define NOKEYSTATES
#define NOSYSCOMMANDS
#define NORASTEROPS
#define NOSHOWWINDOW
#define OEMRESOURCE
#define NOATOM
#define NOCLIPBOARD
#define NOCOLOR
#define NOCTLMGR
#define NODRAWTEXT
//#define NOGDI        //We need wingdi because it defines wglGetProcAddress
#define NOKERNEL
#define NOUSER
#define NONLS
#define NOMB
#define NOMEMMGR
#define NOMETAFILE
#ifdef NOMINMAX
#define KEEP_NOMINMAX
#else
#define NOMINMAX
#endif
#define NOMSG
#define NOOPENFILE
#define NOSCROLL
#define NOSERVICE
#define NOSOUND
#define NOTEXTMETRIC
#define NOWH
#define NOWINOFFSETS
#define NOCOMM
#define NOKANJI
#define NOHELP
#define NOPROFILER
#define NODEFERWINDOWPOS
#define NOMCX
//Defines to prevent WinUser.h from making all kinds of defines which may conflict with actual user code.
#define NOAPISET
#define NOUSER
#define NORESOURCE
#define NOSCROLL
#define NOSHOWWINDOW
#define NOVIRTUALKEYCODES
#define NOWH
#define NODESKTOP
#define NOWINDOWSTATION
#define NOSECURITY
#define NOMSG
#define NOWINOFFSETS
#define NOWINMESSAGES
#define NONCMESSAGES
#define NOKEYSTATES
#define NOTRACKMOUSEEVENT
#define NOWINSTYLES
#define NOCLIPBOARD
#define NOMSG
#define NODEFERWINDOWPOS
#define NOCTLMGR
#define NOMSG
#define NOCLIPBOARD
#define NOMSG
#define NOSYSMETRICS
#define NOMENUS
#define NODRAWTEXT
#define NOSCROLL
#define NOMB
#define NOCOLOR
#define NOWINOFFSETS
#define NOWH
#define NOMENUS
#define NOSYSCOMMANDS
#define NOICONS
#define NOCTLMGR
#define NOWINSTYLES
#define NOWINMESSAGES
#define NOWINMESSAGES
#define NOMSG
#define NOWINMESSAGES
#define NOWINSTYLES
#define NOWINSTYLES
#define NOWINMESSAGES
#define NOWINSTYLES
#define NOWINMESSAGES
#define NOMDI
#define NOMSG
#define NOHELP
#define NOSYSPARAMSINFO
#define NOWINABLE
#define NO_STATE_FLAGS
#include <windows.h>
//If this include cannot be found you may have created a new project but did not add the glew property page yet.
//Go to the Property Manager window (usually docked with the Solution Explorer) and add {root}/deps/glew.props.
#include <GL/glew.h>
#undef NOGDICAPMASKS
#undef NOVIRTUALKEYCODES
#undef NOWINMESSAGES
#undef NOWINSTYLES
#undef NOSYSMETRICS
#undef NOMENUS
#undef NOICONS
#undef NOKEYSTATES
#undef NOSYSCOMMANDS
#undef NORASTEROPS
#undef NOSHOWWINDOW
#undef OEMRESOURCE
#undef NOATOM
#undef NOCLIPBOARD
#undef NOCOLOR
#undef NOCTLMGR
#undef NODRAWTEXT
//#undef NOGDI
#undef NOKERNEL
#undef NOUSER
#undef NONLS
#undef NOMB
#undef NOMEMMGR
#undef NOMETAFILE
#ifndef KEEP_NOMINMAX
#undef NOMINMAX
#endif
#undef NOMSG
#undef NOOPENFILE
#undef NOSCROLL
#undef NOSERVICE
#undef NOSOUND
#undef NOTEXTMETRIC
#undef NOWH
#undef NOWINOFFSETS
#undef NOCOMM
#undef NOKANJI
#undef NOHELP
#undef NOPROFILER
#undef NODEFERWINDOWPOS
#undef NOMCX
#undef NOAPISET
#undef NOUSER
#undef NORESOURCE
#undef NOSCROLL
#undef NOSHOWWINDOW
#undef NOVIRTUALKEYCODES
#undef NOWH
#undef NODESKTOP
#undef NOWINDOWSTATION
#undef NOSECURITY
#undef NOMSG
#undef NOWINOFFSETS
#undef NOWINMESSAGES
#undef NONCMESSAGES
#undef NOKEYSTATES
#undef NOTRACKMOUSEEVENT
#undef NOWINSTYLES
#undef NOCLIPBOARD
#undef NOMSG
#undef NODEFERWINDOWPOS
#undef NOCTLMGR
#undef NOMSG
#undef NOCLIPBOARD
#undef NOMSG
#undef NOSYSMETRICS
#undef NOMENUS
#undef NODRAWTEXT
#undef NOSCROLL
#undef NOMB
#undef NOCOLOR
#undef NOWINOFFSETS
#undef NOWH
#undef NOMENUS
#undef NOSYSCOMMANDS
#undef NOICONS
#undef NOCTLMGR
#undef NOWINSTYLES
#undef NOWINMESSAGES
#undef NOWINMESSAGES
#undef NOMSG
#undef NOWINMESSAGES
#undef NOWINSTYLES
#undef NOWINSTYLES
#undef NOWINMESSAGES
#undef NOWINSTYLES
#undef NOWINMESSAGES
#undef NOMDI
#undef NOMSG
#undef NOHELP
#undef NOSYSPARAMSINFO
#undef NOWINABLE
#undef NO_STATE_FLAGS
typedef unsigned __int16 FFUInt16;
typedef unsigned __int32 FFUInt32;
typedef unsigned __int64 FFUInt64;
#else
#if defined( FFGL_MACOS )
#include <OpenGL/gl3.h>
#elif defined( FFGL_LINUX )
#include <GL/glew.h>
#else
#error define this for your OS
#endif

extern "C" {
#include <string.h>
#include <stdlib.h>
#include <stdint.h>

typedef uint16_t FFUInt16;
typedef uint32_t FFUInt32;
typedef uint64_t FFUInt64;
#endif

// Function codes
static const FFUInt32 FF_GET_INFO                          = 0;
static const FFUInt32 FF_INITIALISE_V2                     = 34;
static const FFUInt32 FF_DEINITIALISE                      = 2;
static const FFUInt32 FF_GET_NUM_PARAMETERS                = 4;
static const FFUInt32 FF_GET_PARAMETER_NAME                = 5;
static const FFUInt32 FF_GET_PARAMETER_DEFAULT             = 6;
static const FFUInt32 FF_GET_PARAMETER_DISPLAY             = 7;
static const FFUInt32 FF_SET_PARAMETER                     = 8;
static const FFUInt32 FF_GET_PARAMETER                     = 9;
static const FFUInt32 FF_GET_PLUGIN_CAPS                   = 10;
static const FFUInt32 FF_ENABLE_PLUGIN_CAP                 = 49;
static const FFUInt32 FF_GET_EXTENDED_INFO                 = 13;
static const FFUInt32 FF_GET_PARAMETER_TYPE                = 15;
static const FFUInt32 FF_GET_INPUT_STATUS                  = 16;
static const FFUInt32 FF_PROCESS_OPENGL                    = 17;
static const FFUInt32 FF_INSTANTIATE_GL                    = 18;
static const FFUInt32 FF_DEINSTANTIATE_GL                  = 19;
static const FFUInt32 FF_SET_TIME                          = 20;
static const FFUInt32 FF_CONNECT                           = 21;
static const FFUInt32 FF_DISCONNECT                        = 22;
static const FFUInt32 FF_RESIZE                            = 23;
static const FFUInt32 FF_GET_NUM_PARAMETER_ELEMENTS        = 31;
static const FFUInt32 FF_GET_PARAMETER_ELEMENT_NAME        = 35;
static const FFUInt32 FF_GET_PARAMETER_ELEMENT_VALUE       = 36;
static const FFUInt32 FF_SET_PARAMETER_ELEMENT_VALUE       = 37;
static const FFUInt32 FF_GET_PARAMETER_USAGE               = 32;
static const FFUInt32 FF_GET_PLUGIN_SHORT_NAME             = 33;
static const FFUInt32 FF_SET_BEATINFO                      = 38;
static const FFUInt32 FF_SET_HOSTINFO                      = 39;
static const FFUInt32 FF_SET_SAMPLERATE                    = 40;
static const FFUInt32 FF_GET_RANGE                         = 41;
static const FFUInt32 FF_GET_PARAM_GROUP                   = 50;
static const FFUInt32 FF_GET_PARAM_DISPLAY_NAME            = 51;
static const FFUInt32 FF_GET_THUMBNAIL                     = 42;
static const FFUInt32 FF_GET_NUM_FILE_PARAMETER_EXTENSIONS = 43;
static const FFUInt32 FF_GET_FILE_PARAMETER_EXTENSION      = 44;
static const FFUInt32 FF_GET_PRAMETER_VISIBILITY           = 45;
static const FFUInt32 FF_GET_PARAMETER_EVENTS              = 46;
static const FFUInt32 FF_GET_NUM_ELEMENT_SEPARATORS        = 47;
static const FFUInt32 FF_GET_SEPARATOR_ELEMENT_INDEX       = 48;
//Next ID = 52

//Previously used function codes that are no longer in use. Should prevent using
//these numbers for new function codes.
//static const FFUInt32 FF_INITIALISE            = 1;
//static const FFUInt32 FF_PROCESSFRAME          = 3;
//static const FFUInt32 FF_INSTANTIATE           = 11;
//static const FFUInt32 FF_DEINSTANTIATE         = 12;
//static const FFUInt32 FF_PROCESSFRAMECOPY      = 14;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FreeFrame defines
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
enum : FFUInt32
{
	FF_SUCCESS = 0,
	FF_FAIL    = 0xFFFFFFFF
};
typedef FFUInt32 FFResult;

// Return values
static const FFUInt32 FF_TRUE        = 1;
static const FFUInt32 FF_FALSE       = 0;
static const FFUInt32 FF_SUPPORTED   = 1;
static const FFUInt32 FF_UNSUPPORTED = 0;

// Plugin types
static const FFUInt32 FF_EFFECT = 0;
static const FFUInt32 FF_SOURCE = 1;
static const FFUInt32 FF_MIXER  = 2;

// Plugin capabilities
static const FFUInt32 FF_CAP_SET_TIME                     = 5;
static const FFUInt32 FF_CAP_MINIMUM_INPUT_FRAMES         = 10;
static const FFUInt32 FF_CAP_MAXIMUM_INPUT_FRAMES         = 11;
static const FFUInt32 FF_CAP_TOP_LEFT_TEXTURE_ORIENTATION = 16;
//Previously used capability codes that are no longer in use. New codes should prevent using
//these numbers for new capability codes.
//static const FFUInt32 FF_CAP_16BITVIDEO         = 0;
//static const FFUInt32 FF_CAP_24BITVIDEO         = 1;
//static const FFUInt32 FF_CAP_32BITVIDEO         = 2;
//static const FFUInt32 FF_CAP_PROCESSFRAMECOPY   = 3;
//static const FFUInt32 FF_CAP_PROCESSOPENGL      = 4;
//static const FFUInt32 FF_CAP_COPYORINPLACE      = 15;

// Old return values that were used for the FF_CAP_COPYORINPLACE capability.
//static const FFUInt32 FF_CAP_PREFER_NONE    = 0;
//static const FFUInt32 FF_CAP_PREFER_INPLACE = 1;
//static const FFUInt32 FF_CAP_PREFER_COPY    = 2;
//static const FFUInt32 FF_CAP_PREFER_BOTH    = 3;

// Parameter types
static const FFUInt32 FF_TYPE_BOOLEAN    = 0;
static const FFUInt32 FF_TYPE_EVENT      = 1;
static const FFUInt32 FF_TYPE_RED        = 2;
static const FFUInt32 FF_TYPE_GREEN      = 3;
static const FFUInt32 FF_TYPE_BLUE       = 4;
static const FFUInt32 FF_TYPE_XPOS       = 5;
static const FFUInt32 FF_TYPE_YPOS       = 6;
static const FFUInt32 FF_TYPE_STANDARD   = 10;
static const FFUInt32 FF_TYPE_OPTION     = 11;
static const FFUInt32 FF_TYPE_BUFFER     = 12;
static const FFUInt32 FF_TYPE_INTEGER    = 13;
static const FFUInt32 FF_TYPE_FILE       = 14;
static const FFUInt32 FF_TYPE_TEXT       = 100;
static const FFUInt32 FF_TYPE_HUE        = 200;
static const FFUInt32 FF_TYPE_SATURATION = 201;
static const FFUInt32 FF_TYPE_BRIGHTNESS = 202;
static const FFUInt32 FF_TYPE_ALPHA      = 203;

// Input status
static const FFUInt32 FF_INPUT_NOTINUSE = 0;
static const FFUInt32 FF_INPUT_INUSE    = 1;

// Parameter usages
static const FFUInt32 FF_USAGE_STANDARD = 0;
static const FFUInt32 FF_USAGE_FFT      = 1;

// Parameter events flags
static const FFUInt64 FF_EVENT_FLAG_VISIBILITY   = 0x01;//A parameter's visibility changed.
static const FFUInt64 FF_EVENT_FLAG_DISPLAY_NAME = 0x02;//A parameter's displayname changed.
static const FFUInt64 FF_EVENT_FLAG_VALUE        = 0x04;//A parameter's current value changed.
static const FFUInt64 FF_EVENT_FLAG_ELEMENTS     = 0x08;//An option parameter's elements changed.
//Not supported yet, but possibly in the future we would like these events as well:
//static const FFUInt64 FF_EVENT_FLAG_DEFAULT_VALUE = 0x??; //A parameter's default value changed.
//static const FFUInt64 FF_EVENT_FLAG_RANGE         = 0x??; //A parameter's range has been changed.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FreeFrame Types
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

typedef union FFMixed
{
	FFUInt32 UIntValue;
	void* PointerValue;
} FFMixed;

typedef void* FFInstanceID;

// PluginInfoStruct
typedef struct PluginInfoStructTag
{
	FFUInt32 APIMajorVersion;
	FFUInt32 APIMinorVersion;
	char PluginUniqueID[ 4 ];// 4 chars uniqueID - not null terminated
	char PluginName[ 16 ];   // 16 chars plugin friendly name - not null terminated
	FFUInt32 PluginType;     // Effect or source
} PluginInfoStruct;

// PluginExtendedInfoStruct
typedef struct PluginExtendedInfoStructTag
{
	FFUInt32 PluginMajorVersion;
	FFUInt32 PluginMinorVersion;
	const char* Description;
	const char* About;
	FFUInt32 FreeFrameExtendedDataSize;
	void* FreeFrameExtendedDataBlock;
} PluginExtendedInfoStruct;

// SetParameterStruct
typedef struct SetParameterStructTag
{
	FFUInt32 ParameterNumber;
	FFMixed NewParameterValue;
} SetParameterStruct;

// SetBeatinfoStruct
typedef struct SetBeatinfoStructTag
{
	float bpm;
	float barPhase;
} SetBeatinfoStruct;

// SetHostinfoStruct
typedef struct SetHostinfoStructTag
{
	const char* name;
	const char* version;
} SetHostinfoStruct;

typedef struct RangeStructTag
{
	float min;
	float max;
} RangeStruct;

typedef struct GetRangeStructTag
{
	FFUInt32 parameterNumber;
	RangeStruct range;
} GetRangeStruct;

// String buffer structure used to enable the host to provide a string buffer into which the plugin can copy string data.
typedef struct StringBufferStructTag
{
	char* address;
	FFUInt32 maxToWrite;//!< The maximum number of characters to write into the buffer. excluding terminating nul, plugins will not automatically write the nul terminator.
} StringBufferStruct;
typedef struct GetStringStructTag
{
	FFUInt32 parameterNumber;
	StringBufferStruct stringBuffer;
} GetStringStruct;

/**
 *
 */
typedef struct GetThumbnailStructTag
{
	FFUInt32 width; //!< Used as output parameter (plugin -> host), contains the width of the thumbnail in number of pixels.
	FFUInt32 height;//!< Used as output parameter (plugin -> host), contains the height of the thumbnail in number of pixels.

	void* rgbaPixelBuffer;//!< Host provided location of where the thumbnails rgba pixels should be written. May be nullptr if the host is just querying the thumbnail size, which it needs to calculate minimum buffer size.
} GetThumbnailStruct;

//FFGLViewportStruct (for InstantiateGL)
typedef struct FFGLViewportStructTag
{
	GLuint x, y, width, height;
} FFGLViewportStruct;

//FFGLTextureStruct (for ProcessOpenGLStruct)
typedef struct FFGLTextureStructTag
{
	FFUInt32 Width, Height;
	FFUInt32 HardwareWidth, HardwareHeight;
	GLuint Handle;//the actual texture handle, from glGenTextures()
} FFGLTextureStruct;

// ProcessOpenGLStruct
typedef struct ProcessOpenGLStructTag
{
	FFUInt32 numInputTextures;
	FFGLTextureStruct** inputTextures;

	//if the host calls ProcessOpenGL with a framebuffer object actively bound
	//(as is the case when the host is capturing the plugins output to an offscreen texture)
	//the host must provide the GL handle to its EXT_framebuffer_object
	//so that the plugin can restore that binding if the plugin
	//makes use of its own FBO's for intermediate rendering
	GLuint HostFBO;
} ProcessOpenGLStruct;

// GetParameterElementNameStruct
typedef struct GetParameterElementNameStructTag
{
	FFUInt32 ParameterNumber;
	FFUInt32 ElementNumber;
} GetParameterElementNameStruct;

// GetParameterElementValueStruct
typedef struct GetParameterElementValueStructTag
{
	FFUInt32 ParameterNumber;
	FFUInt32 ElementNumber;
} GetParameterElementValueStruct;

// SetParameterElementValueStruct
typedef struct SetParameterElementValueStructTag
{
	FFUInt32 ParameterNumber;
	FFUInt32 ElementNumber;
	FFMixed NewParameterValue;
} SetParameterElementValueStruct;

// GetSeparatorElementIndexStruct
typedef struct GetSeparatorElementIndexStructTag
{
	FFUInt32 ParameterNumber;
	FFUInt32 SeparatorIndex;
} GetSeparatorElementIndexStruct;

// GetFileParameterExtensionStruct
typedef struct GetFileParameterExtensionStructTag
{
	FFUInt32 ParameterNumber;
	FFUInt32 ExtensionNumber;
} GetFileParameterExtensionStruct;

typedef struct ParamEventStructTag
{
	FFUInt32 ParameterNumber;//!< The ID of the parameter that fired the event.
	FFUInt64 eventFlags;     //!< Flags containing all events that the parameter fired since last event consume. A combination of FF_EVENT_FLAG_ flags.
} ParamEventStruct;
typedef struct GetParamEventsStructTag
{
	FFUInt32 numEvents;      //!< The number of events in the events buffer.
	ParamEventStruct* events;//!< Buffer into which the plugin will write it's pending events.
} GetParamEventsStruct;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function prototypes
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// plugMain - The one and only exposed function
// parameters:
//  functionCode - tells the plugin which function is being called
//  inputValue - 32-bit parameter or architecture specific pointer to parameter structure (eg 64 bits on x64)
//  instanceID - the id of the instance on which you want to invoke the functionCode
//
// PLUGIN DEVELOPERS:  you shouldn't need to change this function
//
// All parameters are cast as untyped pointers and cast to appropriate
// types here
//
// All return values are cast to untyped pointers here before return to
// the host
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#if defined( FFGL_WINDOWS )
typedef void( __stdcall* PFNLog )( char* cStr );

typedef __declspec( dllimport ) FFMixed( __stdcall* FF_Main_FuncPtr )( FFUInt32, FFMixed, FFInstanceID );
typedef __declspec( dllimport ) void( __stdcall* FF_SetLogCallback_FuncPtr )( PFNLog );

extern "C" __declspec( dllexport ) FFMixed __stdcall plugMain( FFUInt32 functionCode, FFMixed inputValue, FFInstanceID instanceID );
extern "C" __declspec( dllexport ) void __stdcall SetLogCallback( PFNLog logCallback );
#else

//linux and Mac OSX share these
typedef void ( *PFNLog )( char* cStr );

typedef FFMixed ( *FF_Main_FuncPtr )( FFUInt32, FFMixed, FFInstanceID );
typedef void ( *FF_SetLogCallback_FuncPtr )( PFNLog );

FFMixed plugMain( FFUInt32 functionCode, FFMixed inputValue, FFInstanceID instanceID );
void SetLogCallback( PFNLog logCallback );
#endif

#if !defined( FFGL_WINDOWS )
}//extern "C"
#endif

#endif
`,e=`////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FFGLLib.h
//
// FreeFrame is an open-source cross-platform real-time video effects plugin system.
// It provides a framework for developing video effects plugins and hosts on Windows,
// Linux and Mac OSX.
//
// Copyright (c) 2006 www.freeframe.org
// All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FFGLLib.h by Trey Harrison
// www.harrisondigitalmedia.com
//
// Last modified: Oct 01 2018 by Menno Vink
// email:menno@resolume.com
// -Changed GLdouble to GLfloat
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Redistribution and use in source and binary forms, with or without modification,
//	are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in
//    the documentation and/or other materials provided with the
//    distribution.
//  * Neither the name of FreeFrame nor the names of its
//    contributors may be used to endorse or promote products derived
//    from this software without specific prior written permission.
//
//
//	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
//	ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
//	WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//	IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
//	INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
//	BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
//	DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
//	OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
//	OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
//	OF THE POSSIBILITY OF SUCH DAMAGE.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#ifndef __FFGLLIB_H__
#define __FFGLLIB_H__

//FFGLTexCoords
typedef struct FFGLTexCoordsTag
{
	GLfloat s, t;
} FFGLTexCoords;

//helper function to return the s,t,r coordinate
//that cooresponds to the width,height,depth of the used
//portion of the texture
inline FFGLTexCoords GetMaxGLTexCoords( FFGLTextureStruct t )
{
	FFGLTexCoords texCoords;

	//the texture may only occupy a portion
	//of the allocated hardware texture memory

	//normalized (0..1) S and T coords
	texCoords.s = ( (GLfloat)t.Width ) / (GLfloat)t.HardwareWidth;
	texCoords.t = ( (GLfloat)t.Height ) / (GLfloat)t.HardwareHeight;

	return texCoords;
}

#endif
`,r=`#include "FFGLLog.h"

static PFNLog s_logCallback = nullptr;

void FFGLLog::SetLogCallback( PFNLog logCallback )
{
	s_logCallback = logCallback;
}
void FFGLLog::LogToHost( const char* cStr )
{
	if( s_logCallback != nullptr && cStr != nullptr )
		s_logCallback( const_cast< char* >( cStr ) );
}`,a=`#pragma once
#include "FFGL.h"

class FFGLLog
{
public:
	static void SetLogCallback( PFNLog logCallback );
	static void LogToHost( const char* cStr );
};`,i=`#pragma once

#if defined( _WIN32 ) || defined( _WIN64 )
#	define FFGL_WINDOWS
#elif defined( __linux__ )
#	define FFGL_LINUX
#elif defined( __APPLE__ )
#	include <TargetConditionals.h>
#	include <AvailabilityMacros.h>
#	if TARGET_OS_MAC
#		define FFGL_MACOS
#	else
#		error "We dont support building for anything other than a mac"
#	endif
#else
#	error "No Platform defined"
#endif

#if defined( _DEBUG ) || defined( DEBUG )
#	define FFGL_DEBUG
#endif
`,s=`//
// Copyright (c) 2004 - InfoMus Lab - DIST - University of Genova
//
// InfoMus Lab (Laboratorio di Informatica Musicale)
// DIST - University of Genova
//
// http://www.infomus.dist.unige.it
// news://infomus.dist.unige.it
// mailto:staff@infomus.dist.unige.it
//
// Developer: Gualtiero Volpe
// mailto:volpe@infomus.dist.unige.it
//
// Last modified: 2004-11-10
//

#include "FFGLPluginInfo.h"
#include <assert.h>
#include <stdlib.h>
#include <memory.h>

extern CFFGLPluginInfo* g_CurrPluginInfo;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CFFGLPluginInfo constructor and destructor
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

CFFGLPluginInfo::CFFGLPluginInfo( FPCREATEINSTANCEGL* pCreateInstance, const char* pchUniqueID, const char* pchPluginName, unsigned int dwAPIMajorVersion, unsigned int dwAPIMinorVersion, unsigned int dwPluginMajorVersion, unsigned int dwPluginMinorVersion, unsigned int dwPluginType, const char* pchDescription, const char* pchAbout, unsigned int dwFreeFrameExtendedDataSize, const void* pFreeFrameExtendedDataBlock, FPINITIALISELIBRARY* initialiseLibrary, FPDEINITIALISELIBRARY* deinitialiseLibrary ) :
	about( pchAbout ),
	description( pchDescription ),
	m_initialiseLibrary( initialiseLibrary ),
	m_deinitialiseLibrary( deinitialiseLibrary )
{
	//This FFGL SDK is intended for developing plugins based on the FFGL 2.0 specification. Please
	//update your plugin code to use FFGL 2.0.
	assert( dwAPIMajorVersion >= 2 );

	m_pCreateInstance = pCreateInstance;

	// Filling PluginInfoStruct
	m_PluginInfo.APIMajorVersion = dwAPIMajorVersion;
	m_PluginInfo.APIMinorVersion = dwAPIMinorVersion;

	bool bEndFound = false;
	for( int i = 0; ( i < 16 ) && ( !bEndFound ); ++i )
	{
		if( pchPluginName[ i ] == 0 )
			bEndFound = true;
		( m_PluginInfo.PluginName )[ i ] = ( bEndFound ) ? 0 : pchPluginName[ i ];
	}

	bEndFound = false;
	for( int j = 0; ( j < 4 ) && ( !bEndFound ); ++j )
	{
		if( pchUniqueID[ j ] == 0 )
			bEndFound = true;
		( m_PluginInfo.PluginUniqueID )[ j ] = ( bEndFound ) ? 0 : pchUniqueID[ j ];
	}

	m_PluginInfo.PluginType = dwPluginType;

	// Filling PluginExtendedInfoStruct
	m_PluginExtendedInfo.About              = about.c_str();
	m_PluginExtendedInfo.Description        = description.c_str();
	m_PluginExtendedInfo.PluginMajorVersion = dwPluginMajorVersion;
	m_PluginExtendedInfo.PluginMinorVersion = dwPluginMinorVersion;
	if( ( dwFreeFrameExtendedDataSize > 0 ) && ( pFreeFrameExtendedDataBlock != NULL ) )
	{
		memcpy( m_PluginExtendedInfo.FreeFrameExtendedDataBlock, pFreeFrameExtendedDataBlock, dwFreeFrameExtendedDataSize );
		m_PluginExtendedInfo.FreeFrameExtendedDataSize = dwFreeFrameExtendedDataSize;
	}
	else
	{
		m_PluginExtendedInfo.FreeFrameExtendedDataBlock = NULL;
		m_PluginExtendedInfo.FreeFrameExtendedDataSize  = 0;
	}

	g_CurrPluginInfo = this;
}

CFFGLPluginInfo::~CFFGLPluginInfo()
{
	//No need to free the strings anymore, we've moved their ownership into the std::string classes.
	//free( m_PluginExtendedInfo.About );
	//free( m_PluginExtendedInfo.Description );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CFFGLPluginInfo methods
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const PluginInfoStruct* CFFGLPluginInfo::GetPluginInfo() const
{
	return &m_PluginInfo;
}

const PluginExtendedInfoStruct* CFFGLPluginInfo::GetPluginExtendedInfo() const
{
	return &m_PluginExtendedInfo;
}

FPCREATEINSTANCEGL* CFFGLPluginInfo::GetFactoryMethod() const
{
	return m_pCreateInstance;
}

FPINITIALISELIBRARY* CFFGLPluginInfo::GetInitialiseMethod() const
{
	return m_initialiseLibrary;
}
FPDEINITIALISELIBRARY* CFFGLPluginInfo::GetDeinitialiseMethod() const
{
	return m_deinitialiseLibrary;
}`,o=`//\r
// Copyright (c) 2004 - InfoMus Lab - DIST - University of Genova\r
//\r
// InfoMus Lab (Laboratorio di Informatica Musicale)\r
// DIST - University of Genova\r
//\r
// http://www.infomus.dist.unige.it\r
// news://infomus.dist.unige.it\r
// mailto:staff@infomus.dist.unige.it\r
//\r
// Developer: Gualtiero Volpe\r
// mailto:volpe@infomus.dist.unige.it\r
//\r
// Developer: Trey Harrison\r
// www.harrisondigitalmedia.com\r
//\r
// Last modified: Oct. 26 2006\r
//\r
\r
#ifndef FFGLPLUGININFO_STANDARD\r
#define FFGLPLUGININFO_STANDARD\r
#include <string>\r
\r
#include "FFGL.h"\r
\r
#if defined( FFGL_MACOS )\r
//there is no need for __stdcall on mac, so this will eliminate any\r
//usage of it\r
#define __stdcall\r
#endif\r
\r
#if defined( FFGL_LINUX )\r
#define __stdcall\r
#endif\r
\r
//FPCREATEINSTANCEGL is a pointer to a function that creates FFGL plugins\r
//in this SDK, all FFGL plugins must derive from CFFGLPlugin\r
typedef FFResult __stdcall FPCREATEINSTANCEGL( class CFFGLPlugin** ppOutInstance );\r
\r
//Function pointer signature that matches the function that can be set to receive a plugin library\r
//initialisation callback.\r
typedef FFResult __stdcall FPINITIALISELIBRARY();\r
//Function pointer signature that matches the function that can be set to receive a plugin library\r
//deinitialisation callback.\r
typedef void __stdcall FPDEINITIALISELIBRARY();\r
\r
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
/// \\class		CFFGLPluginInfo\r
///	\\brief		CFFGLPluginInfo manages static information concerning a plugin name, version, and description.\r
/// \\author		Gualtiero Volpe\r
/// \\date		20041110\r
/// \\version	1.0.0.2\r
///\r
/// The CFFGLPluginInfo class manages static information related to a FreeFrameGL plugin. Examples are the name of\r
/// the plugin, its unique identifier, its type (either source or effect), the current version, the version of\r
/// the FreeFrame API the plugin refers to, a short description of the plugin, information about the developer(s)\r
/// and possible copyright. In other words, this class stores the information required by the FreeFrame getInfo\r
/// and getExtendedInfo global functions.\r
/// The CFFGLPluginInfo class is also involved in the process of creating an instance of the subclass implementing\r
/// a plugin: it stores a pointer to the factory method of the plugin subclass, which is called when the plugin\r
/// object needs to be instantiated. The FreeFrame SDK keeps a prototype instance of the plugin in order to be able\r
/// to access information on the plugin at any time. The effectively working instance is created at the time the\r
/// plugin is instantiated by the host.\r
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
class CFFGLPluginInfo\r
{\r
public:\r
	/// The constructor of CFFGLPluginInfo receives through its parameters the information that needs\r
	/// to be stored.\r
	///\r
	/// \\param	pCreateInstance					A pointer to the factory method of the subclass implementing\r
	///											the plugin.\r
	/// \\param	pchUniqueID						A string representing the unique identificator of the plugin.\r
	///											According to the FreeFrame specification, it must be a not null\r
	///											terminated string of 4 1-byte ASCII characters. Longer strings will\r
	///											be truncated at the 4th character.\r
	/// \\param	pchPluginName					A string containing the name of the plugin. According to the\r
	///											FreeFrame specification, it must be a not null terminated string\r
	///											of 16 1-byte ASCII characters. Longer strings will be truncated at\r
	///											the 16th character.\r
	/// \\param	dwAPIMajorVersion				The major version number of the FreeFrame API employed by the plugin.\r
	///											It is the number before the decimal point in the API version number.\r
	/// \\param	dwAPIMinorVersion				The minor version number of the FreeFrame API employed by the plugin.\r
	///											It is the number after the decimal point in the API version number.\r
	/// \\param	dwPluginMajorVersion			The major version number of the plugin. It is the number before\r
	///											the decimal point in the plugin version number.\r
	/// \\param	dwPluginMinorVersion			The minor version number of the plugin. It is the number after\r
	///											the decimal point in the plugin version number.\r
	/// \\param	dwPluginType					The type of the plugin. According to the FreeFrame specification,\r
	///											it should be 0 in case of effect plugins and 1 in case of source\r
	///											plugins.\r
	/// \\param	pchDescription					A string providing a short description of what the plugin does.\r
	/// \\param	pchAbout						A string providing information on the developer(s) of the plugin,\r
	///											their possible company, and possible copyright information.\r
	/// \\param	dwFreeFrameExtendedDataSize		Size in bytes of the FreeFrame ExtendedDataBlock, or 0 if not\r
	///											provided by plugin. Extended Data Bloks are not yet exploited\r
	///											in the current version of the FreeFrame specification (1.0).\r
	///											Therefore, at the moment the default value (0) should be used\r
	///											for this parameter.\r
	/// \\param	pFreeFrameExtendedDataBlock		32-bit pointer to a FreeFrame ExtendedDataBlock, Extended\r
	///											Data Bloks are not yet expolited by the FreeFrame specification\r
	///											version 1.0. Therefore, at the moment the default value (NULL)\r
	///											should be used for this parameter\r
	CFFGLPluginInfo(\r
		FPCREATEINSTANCEGL* pCreateInstance,\r
		const char* pchUniqueID,\r
		const char* pchPluginName,\r
		unsigned int dwAPIMajorVersion,\r
		unsigned int dwAPIMinorVersion,\r
		unsigned int dwPluginMajorVersion,\r
		unsigned int dwPluginMinorVersion,\r
		unsigned int dwPluginType,\r
		const char* pchDescription,\r
		const char* pchAbout,\r
		unsigned int dwFreeFrameExtendedDataSize   = 0,\r
		const void* pFreeFrameExtendedDataBlock    = nullptr,\r
		FPINITIALISELIBRARY* initialiseLibrary     = nullptr,\r
		FPDEINITIALISELIBRARY* deinitialiseLibrary = nullptr );\r
\r
	/// The standard destructor of CFFGLPluginInfo.\r
	~CFFGLPluginInfo();\r
\r
	/// This method returns a pointer to a PluginInfoStruct as defined in FreeFrame.h. Such structure\r
	/// contains information on the plugin name and type, its unique identifier, and the version of the\r
	/// FreeFrame API it uses.\r
	///\r
	/// \\return		A pointer to a PluginInfoStruct containing information on the plugin. For further\r
	///				information on the definition of PluginInfoStruct see the header file FreeFrame.h and\r
	///				the FreeFrame specification version 1.0.\r
	const PluginInfoStruct* GetPluginInfo() const;\r
\r
	/// This method returns a pointer to a PluginExtendedInfoStruct (for further information see\r
	/// FreeFrame.h and the FreeFrame specification). A PluginExtendedInfoStruct contains information on\r
	/// the plugin version, a short description of the plugin, and information about the developer(s) and\r
	/// possible copyright issues.\r
	///\r
	/// \\return		A pointer to a PluginExtendedInfoStruct containing information on the plugin.\r
	///				For further information on the definition PluginExtendedInfoStruct see the header file\r
	///				FreeFrame.h and the FreeFrame specification version 1.0.\r
	const PluginExtendedInfoStruct* GetPluginExtendedInfo() const;\r
\r
	/// This method returns a pointer to the factory method of the subclass implementing the plugin. It is\r
	///	called by the FreeFrame SDK when creating a new instance of the plugin.\r
	///\r
	/// \\return		A pointer to the factory method of the plugin subclass.\r
	FPCREATEINSTANCEGL* GetFactoryMethod() const;\r
\r
	/// Returns a pointer to the plugin specific library initialisation function. It is called by the\r
	/// FreeFrame SDK when the host tells the library to initialise itself.\r
	FPINITIALISELIBRARY* GetInitialiseMethod() const;\r
	/// Returns a pointer to the plugin specific library deinitialisation function. It is called by the\r
	/// FreeFrame SDK when the host tells the library to deinitialise itself.\r
	FPDEINITIALISELIBRARY* GetDeinitialiseMethod() const;\r
\r
private:\r
	// Structures containing information about the plugin\r
	PluginInfoStruct m_PluginInfo;\r
	PluginExtendedInfoStruct m_PluginExtendedInfo;\r
\r
	std::string about;      //!< Owner over the about string for which we've set the pointer in the m_PluginExtendedInfo.\r
	std::string description;//!< Owner over the description string for which we've set the pointer in the m_PluginExtendedInfo.\r
\r
	// Pointer to the factory method of the plugin subclass\r
	FPCREATEINSTANCEGL* m_pCreateInstance;\r
\r
	FPINITIALISELIBRARY* m_initialiseLibrary;\r
	FPDEINITIALISELIBRARY* m_deinitialiseLibrary;\r
};\r
\r
/**\r
 * This utility function can be used as factory function in your CFFGLPluginInfo structure.\r
 * This way you dont need to specify a factory function in each plugin you make but you can just\r
 * instantiate this template function with your plugin's type and you're done.\r
 */\r
template< typename PluginType >\r
FFResult __stdcall PluginFactory( CFFGLPlugin** ppOutInstance )\r
{\r
	*ppOutInstance = new PluginType();\r
	if( *ppOutInstance != nullptr )\r
		return FF_SUCCESS;\r
	return FF_FAIL;\r
}\r
\r
#endif\r
`,l=`//\r
// FFGLPluginInfoData.cpp\r
//\r
// Usually you do not need to edit this file!\r
//\r
\r
#include "FFGLPluginInfo.h"\r
\r
//////////////////////////////////////////////////////////////////\r
// Information about the plugin\r
//////////////////////////////////////////////////////////////////\r
\r
CFFGLPluginInfo* g_CurrPluginInfo = NULL;\r
`,u=`//\r
// Copyright (c) 2004 - InfoMus Lab - DIST - University of Genova\r
//\r
// InfoMus Lab (Laboratorio di Informatica Musicale)\r
// DIST - University of Genova\r
//\r
// http://www.infomus.dist.unige.it\r
// news://infomus.dist.unige.it\r
// mailto:staff@infomus.dist.unige.it\r
//\r
// Developer: Gualtiero Volpe\r
// mailto:volpe@infomus.dist.unige.it\r
//\r
// Modified: Oct 25 2006 by Trey Harrison\r
// email:trey@harrisondigitalmedia.com\r
//\r
// Last modified: Oct 01 2018 by Menno Vink\r
// email:menno@resolume.com\r
\r
#include "FFGLPluginManager.h"\r
#include "FFGLPluginSDK.h"\r
\r
#include <stdlib.h>\r
#include <memory.h>\r
#include <algorithm>\r
\r
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// CFFGLPluginManager constructor and destructor\r
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
CFFGLPluginManager::CFFGLPluginManager( bool supportTopLeftTextureOrientation ) :\r
	m_iMinInputs( 0 ),\r
	m_iMaxInputs( 0 ),\r
	m_timeSupported( true ),\r
	m_topLeftTextureOrientationSupported( supportTopLeftTextureOrientation ),\r
	textureOrientation( TextureOrientation::BOTTOM_LEFT )\r
{\r
}\r
CFFGLPluginManager::~CFFGLPluginManager()\r
{\r
}\r
\r
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// CFFGLPluginManager methods\r
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
unsigned int CFFGLPluginManager::GetMinInputs() const\r
{\r
	return m_iMinInputs;\r
}\r
unsigned int CFFGLPluginManager::GetMaxInputs() const\r
{\r
	return m_iMaxInputs;\r
}\r
\r
bool CFFGLPluginManager::IsTimeSupported() const\r
{\r
	return m_timeSupported;\r
}\r
bool CFFGLPluginManager::IsTopLeftTextureOrientationSupported() const\r
{\r
	return m_topLeftTextureOrientationSupported;\r
}\r
void CFFGLPluginManager::HostEnabledTopLeftTextures()\r
{\r
	textureOrientation = TextureOrientation::TOP_LEFT;\r
}\r
\r
unsigned int CFFGLPluginManager::GetNumParams() const\r
{\r
	return static_cast< unsigned int >( params.size() );\r
}\r
char* CFFGLPluginManager::GetParamName( unsigned int dwIndex )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return nullptr;\r
\r
	//Legacy ffgl interface, we shouldn't return a pointer to a string managed by us\r
	//because the host has no guarantee that the pointer will remain valid for as long as it wants.\r
	//We should instead copy to a string buffer owned by the host.\r
	return const_cast< char* >( paramInfo->name.c_str() );\r
}\r
unsigned int CFFGLPluginManager::GetParamType( unsigned int dwIndex ) const\r
{\r
	const ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return FF_FAIL;\r
\r
	return paramInfo->dwType;\r
}\r
unsigned int CFFGLPluginManager::GetParamUsage( unsigned int dwIndex ) const\r
{\r
	const ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return FF_FAIL;\r
\r
	return paramInfo->usage;\r
}\r
FFMixed CFFGLPluginManager::GetParamDefault( unsigned int dwIndex ) const\r
{\r
	FFMixed result;\r
	result.UIntValue           = FF_FAIL;\r
	const ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return result;\r
\r
	if( GetParamType( dwIndex ) == FF_TYPE_TEXT || GetParamType( dwIndex ) == FF_TYPE_FILE )\r
		result.PointerValue = (void*)paramInfo->defaultStringVal.c_str();\r
	else\r
		result.UIntValue = *(FFUInt32*)&paramInfo->defaultFloatVal;\r
\r
	return result;\r
}\r
FFUInt32 CFFGLPluginManager::GetParamVisibility( unsigned int dwIndex ) const\r
{\r
	const ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	return paramInfo != nullptr ? paramInfo->visibleInUI : FF_FAIL;\r
}\r
\r
unsigned int CFFGLPluginManager::GetNumParamElements( unsigned int dwIndex ) const\r
{\r
	const ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return FF_FAIL;\r
\r
	return (unsigned int)paramInfo->elements.size();\r
}\r
char* CFFGLPluginManager::GetParamElementName( unsigned int dwIndex, unsigned int elIndex )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return nullptr;\r
\r
	if( elIndex >= paramInfo->elements.size() )\r
		return nullptr;\r
\r
	/**\r
	 * Have to const-cast here because ffgl is implemented using a single interface function and thus we cannot differentiate\r
	 * between constant and non constant pointers. This is also a problem of returning a pointer to our string rather than outputting\r
	 * our string into the caller's buffer.\r
	 */\r
	return const_cast< char* >( paramInfo->elements[ elIndex ].name.c_str() );\r
}\r
FFMixed CFFGLPluginManager::GetParamElementDefault( unsigned int dwIndex, unsigned int elIndex ) const\r
{\r
	FFMixed result;\r
	result.UIntValue           = FF_FAIL;\r
	const ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return result;\r
	if( elIndex >= paramInfo->elements.size() )\r
		return result;\r
\r
	result.UIntValue = *(unsigned int*)&paramInfo->elements[ elIndex ].value;\r
\r
	return result;\r
}\r
FFUInt32 CFFGLPluginManager::SetParamElementValue( unsigned int dwIndex, unsigned int elIndex, float newValue )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return FF_FAIL;\r
\r
	if( elIndex >= paramInfo->elements.size() )\r
		return FF_FAIL;\r
\r
	paramInfo->elements[ elIndex ].value = newValue;\r
	return FF_SUCCESS;\r
}\r
FFUInt32 CFFGLPluginManager::GetNumElementSeparators( unsigned int dwIndex )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	return paramInfo != nullptr ? static_cast< FFUInt32 >( paramInfo->elementSeparators.size() ) : 0;\r
}\r
FFUInt32 CFFGLPluginManager::GetElementSeparatorElementIndex( unsigned int dwIndex, unsigned int separatorIndex )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo != nullptr && separatorIndex < paramInfo->elementSeparators.size() )\r
		return paramInfo->elementSeparators[ separatorIndex ].beforeIndex;\r
	else\r
		return -1;\r
}\r
\r
unsigned int CFFGLPluginManager::GetNumFileParamExtensions( unsigned int index ) const\r
{\r
	const ParamInfo* paramInfo = FindParamInfo( index );\r
	if( paramInfo == nullptr )\r
		return 0;\r
\r
	return (unsigned int)paramInfo->supportedExtensions.size();\r
}\r
char* CFFGLPluginManager::GetFileParamExtension( unsigned int paramIndex, unsigned int extensionIndex ) const\r
{\r
	const ParamInfo* paramInfo = FindParamInfo( paramIndex );\r
	if( paramInfo == nullptr )\r
		return nullptr;\r
\r
	if( extensionIndex >= paramInfo->supportedExtensions.size() )\r
		return nullptr;\r
\r
	/**\r
	 * Have to const-cast here because ffgl is implemented using a single interface function and thus we cannot differentiate\r
	 * between constant and non constant pointers. This is also a problem of returning a pointer to our string rather than outputting\r
	 * our string into the caller's buffer.\r
	 */\r
	return const_cast< char* >( paramInfo->supportedExtensions[ extensionIndex ].c_str() );\r
}\r
\r
RangeStruct CFFGLPluginManager::GetParamRange( unsigned int dwIndex )\r
{\r
	RangeStruct result   = { 0, 1 };\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo )\r
		result = paramInfo->range;\r
	return result;\r
}\r
std::string CFFGLPluginManager::GetParamGroup( unsigned int dwIndex )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	return paramInfo != nullptr ? paramInfo->groupName : std::string();\r
}\r
std::string CFFGLPluginManager::GetParamDisplayName( unsigned int dwIndex )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	return paramInfo != nullptr ? paramInfo->displayName : std::string();\r
}\r
\r
FFUInt32 CFFGLPluginManager::GetNumPendingParamEvents() const\r
{\r
	FFUInt32 numPendingEvents = 0;\r
	for( const ParamInfo& param : params )\r
	{\r
		if( param.pendingEventFlags != 0 )\r
			numPendingEvents++;\r
	}\r
	return numPendingEvents;\r
}\r
FFUInt32 CFFGLPluginManager::ConsumeParamEvents( ParamEventStruct* events, FFUInt32 maxNumEvents )\r
{\r
	FFUInt32 numEventsConsumed = 0;\r
	for( size_t index = 0; index < params.size() && numEventsConsumed < maxNumEvents; ++index )\r
	{\r
		if( params[ index ].pendingEventFlags != 0 )\r
		{\r
			events[ numEventsConsumed ].ParameterNumber = params[ index ].ID;\r
			events[ numEventsConsumed ].eventFlags      = params[ index ].pendingEventFlags;\r
			params[ index ].pendingEventFlags           = 0;\r
			numEventsConsumed++;\r
		}\r
	}\r
	return numEventsConsumed;\r
}\r
\r
void CFFGLPluginManager::SetMinInputs( unsigned int iMinInputs )\r
{\r
	m_iMinInputs = iMinInputs;\r
}\r
void CFFGLPluginManager::SetMaxInputs( unsigned int iMaxInputs )\r
{\r
	m_iMaxInputs = iMaxInputs;\r
}\r
\r
void CFFGLPluginManager::SetTimeSupported( bool supported )\r
{\r
	m_timeSupported = supported;\r
}\r
\r
void CFFGLPluginManager::SetParamInfo( unsigned int paramID, const char* pchName, unsigned int pType, float fDefaultValue )\r
{\r
	ParamInfo pInfo;\r
	pInfo.ID = paramID;\r
\r
	pInfo.elements.resize( 1 );\r
	pInfo.usage = 0;\r
	pInfo.name  = pchName;\r
\r
	pInfo.dwType = pType;\r
	if( pType == FF_TYPE_STANDARD )\r
	{\r
		if( fDefaultValue > 1.0 )\r
			fDefaultValue = 1.0;\r
		if( fDefaultValue < 0.0 )\r
			fDefaultValue = 0.0;\r
	}\r
\r
	pInfo.defaultFloatVal = fDefaultValue;\r
	params.push_back( pInfo );\r
}\r
void CFFGLPluginManager::SetParamInfo( unsigned int paramID, const char* pchName, unsigned int pType, bool bDefaultValue )\r
{\r
	ParamInfo pInfo;\r
	pInfo.ID   = paramID;\r
	pInfo.name = pchName;\r
\r
	pInfo.dwType          = pType;\r
	pInfo.defaultFloatVal = bDefaultValue ? 1.0f : 0.0f;\r
	params.push_back( pInfo );\r
}\r
void CFFGLPluginManager::SetParamInfo( unsigned int dwIndex, const char* pchName, unsigned int dwType, const char* pchDefaultValue )\r
{\r
	ParamInfo pInfo;\r
	pInfo.ID = dwIndex;\r
\r
	pInfo.elements.resize( 1 );\r
	pInfo.usage = 0;\r
	pInfo.name  = pchName;\r
\r
	pInfo.dwType           = dwType;\r
	pInfo.defaultStringVal = pchDefaultValue;\r
	params.push_back( pInfo );\r
}\r
\r
void CFFGLPluginManager::SetBufferParamInfo( unsigned int paramID, const char* pchName, unsigned int numElements, unsigned int usage )\r
{\r
	ParamInfo pInfo;\r
	pInfo.ID = paramID;\r
\r
	pInfo.elements.resize( numElements );\r
	pInfo.usage = usage;\r
	pInfo.name  = pchName;\r
\r
	pInfo.dwType = FF_TYPE_BUFFER;\r
\r
	pInfo.defaultFloatVal = 0.0f;\r
	params.push_back( pInfo );\r
}\r
void CFFGLPluginManager::SetOptionParamInfo( unsigned int pIndex, const char* pchName, unsigned int numElements, float defaultValue )\r
{\r
	ParamInfo pInfo;\r
	pInfo.ID = pIndex;\r
\r
	pInfo.elements.resize( numElements );\r
	pInfo.usage = FF_USAGE_STANDARD;\r
	pInfo.name  = pchName;\r
\r
	pInfo.dwType = FF_TYPE_OPTION;\r
\r
	pInfo.defaultFloatVal = defaultValue;\r
	params.push_back( pInfo );\r
}\r
void CFFGLPluginManager::SetParamElementInfo( unsigned int paramID, unsigned int elementIndex, const char* elementName, float elementValue )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( paramID );\r
	if( paramInfo == nullptr )\r
		return;\r
\r
	if( elementIndex >= paramInfo->elements.size() )\r
		return;\r
\r
	paramInfo->elements[ elementIndex ].name  = elementName;\r
	paramInfo->elements[ elementIndex ].value = elementValue;\r
}\r
\r
void CFFGLPluginManager::AddElementSeparator( unsigned int paramID, unsigned int beforeElementIndex )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( paramID );\r
	if( paramInfo == nullptr )\r
		return;\r
\r
	paramInfo->elementSeparators.push_back( ParamInfo::ElementSeparator{ beforeElementIndex } );\r
}\r
\r
void CFFGLPluginManager::SetFileParamInfo( unsigned int index, const char* pchName, std::vector< std::string > supportedExtensions, const char* defaultFile )\r
{\r
	ParamInfo pInfo;\r
	pInfo.ID   = index;\r
	pInfo.name = pchName;\r
\r
	pInfo.dwType = FF_TYPE_FILE;\r
\r
	pInfo.usage = 0;\r
\r
	pInfo.supportedExtensions = std::move( supportedExtensions );\r
	pInfo.defaultStringVal    = defaultFile;\r
	params.push_back( pInfo );\r
}\r
\r
void CFFGLPluginManager::SetParamVisibility( unsigned int paramID, bool shouldBeVisible, bool raiseEvent )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( paramID );\r
	if( paramInfo == nullptr )\r
		return;\r
\r
	bool wasVisible        = paramInfo->visibleInUI;\r
	paramInfo->visibleInUI = shouldBeVisible;\r
	if( raiseEvent && wasVisible != shouldBeVisible )\r
		paramInfo->pendingEventFlags |= FF_EVENT_FLAG_VISIBILITY;\r
}\r
void CFFGLPluginManager::SetParamRange( unsigned int paramID, float min, float max )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( paramID );\r
	if( paramInfo != nullptr )\r
		paramInfo->range = { min, max };\r
}\r
void CFFGLPluginManager::SetParamGroup( unsigned int dwIndex, std::string newGroupName )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo != nullptr )\r
		paramInfo->groupName = newGroupName;\r
}\r
void CFFGLPluginManager::SetParamDisplayName( unsigned int paramID, std::string newDisplayName, bool raiseEvent )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( paramID );\r
	if( paramInfo == nullptr )\r
		return;\r
\r
	std::string previousDisplayName = std::move( paramInfo->displayName );\r
	paramInfo->displayName          = std::move( newDisplayName );\r
	if( raiseEvent && previousDisplayName != paramInfo->displayName )\r
		paramInfo->pendingEventFlags |= FF_EVENT_FLAG_DISPLAY_NAME;\r
}\r
\r
void CFFGLPluginManager::SetParamElements( unsigned int dwIndex, std::vector< std::string > newElements, const std::vector< float >& elementValues, bool raiseEvent )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( dwIndex );\r
	if( paramInfo == nullptr )\r
		return;\r
	if( paramInfo->dwType != FF_TYPE_OPTION )\r
		return;\r
	if( newElements.size() != elementValues.size() )\r
		return;\r
\r
	paramInfo->elements.resize( newElements.size() );\r
	for( size_t index = 0, num = newElements.size(); index < num; ++index )\r
	{\r
		paramInfo->elements[ index ].name = std::move( newElements[ index ] );\r
		paramInfo->elements[ index ].value = elementValues[ index ];\r
	}\r
	if( raiseEvent )\r
		paramInfo->pendingEventFlags |= FF_EVENT_FLAG_ELEMENTS;\r
}\r
\r
void CFFGLPluginManager::RaiseParamEvent( unsigned int paramID, FFUInt64 eventToRaise )\r
{\r
	ParamInfo* paramInfo = FindParamInfo( paramID );\r
	if( paramInfo != nullptr )\r
		paramInfo->pendingEventFlags |= eventToRaise;\r
}\r
\r
CFFGLPluginManager::ParamInfo* CFFGLPluginManager::FindParamInfo( unsigned int ID )\r
{\r
	for( ParamInfo& param : params )\r
	{\r
		if( param.ID == ID )\r
			return &param;\r
	}\r
\r
	return nullptr;\r
}\r
const CFFGLPluginManager::ParamInfo* CFFGLPluginManager::FindParamInfo( unsigned int ID ) const\r
{\r
	for( const ParamInfo& param : params )\r
	{\r
		if( param.ID == ID )\r
			return &param;\r
	}\r
\r
	return nullptr;\r
}\r
CFFGLPluginManager::TextureOrientation CFFGLPluginManager::GetTextureOrientation() const\r
{\r
	return textureOrientation;\r
}\r
`,d=`//
// Copyright (c) 2004 - InfoMus Lab - DIST - University of Genova
//
// InfoMus Lab (Laboratorio di Informatica Musicale)
// DIST - University of Genova
//
// http://www.infomus.dist.unige.it
// news://infomus.dist.unige.it
// mailto:staff@infomus.dist.unige.it
//
// Developer: Gualtiero Volpe
// mailto:volpe@infomus.dist.unige.it
//
// Developer: Trey Harrison
// www.harrisondigitalmedia.com
//
// Last modified: October 26 2006
//

#ifndef FFGLPLUGINMANAGER_STANDARD
#define FFGLPLUGINMANAGER_STANDARD
#include <vector>
#include <string>

#include "FFGL.h"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// \\class		CFFGLPluginManager
///	\\brief		CFFGLPluginManager manages information concerning a plugin inputs, parameters, and capabilities.
/// \\authors	Gualtiero Volpe, Menno Vink (menno@resolume.com)
/// \\version	2.0.0
///
/// The CFFGLPluginManager class is the base class for FreeFrameGL plugins developed with the FreeFrameGL SDK since it provides
/// them with methods for automatically manage information concerning plugin inputs, paramaters, and capabilities.
/// Examples of information managed by this class are the number of inputs and parameters of a plugin; the name, type and
/// default value of each parameter.
/// Plugins developed with the FFGL SDK (and thus having this class as base class) should call the protected methods
/// of this class in order to specify the information related to their inputs and parameters. These calls
/// are usually done while constructing the plugin subclass. Plugins subclasses should also call methods of this class in
/// order to get information about the images they are going to process (i.e., their width and height).
/// The default implementations of the FFGL global functions call the public methods of this class in order to
/// return to the host information about a plugin.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class CFFGLPluginManager
{
public:
	/// The standard destructor of CFFGLPluginManager.
	virtual ~CFFGLPluginManager();

	/// This method returns the minimum number of inputs the host must provide.
	/// It is usually called by the default implementations of the FreeFrame global functions.
	///
	/// \\return		The minimum number of inputs the host must provide.
	unsigned int GetMinInputs() const;
	/// This method returns the maximum number of inputs the plugin can receive.
	/// It is usually called by the default implementations of the FreeFrame global functions.
	///
	/// \\return		The maximum number of inputs the plugin can receive.
	unsigned int GetMaxInputs() const;

	/// This method is called by the host to determine whether the plugin supports the SetTime function.
	bool IsTimeSupported() const;
	/// This method is called by the host to determine whether or not the plugin supports top left texture orientations.
	/// Some hosts may use top-left texture orientations internally. By default plugins use bottom left. If the host wants
	/// to call those plugins it first needs to flip the inputs on the y-axis, and then when the plugin has run the host needs
	/// to flip the output as well. This takes some time, so if the plugin reports that it supports top-left orientations the
	/// host may do this so that it doesn't have to do the texture flipping.
	bool IsTopLeftTextureOrientationSupported() const;
	/// This methos is called by the host to tell the plugin that the host will be providing textures oriented at the top-left.
	/// The host is only allowed to do this if this plugin supports the top-left orientation. This function just toggles the internal
	/// textureOrientation variable so that the plugin implementation may query it and see that it can use the top-left orientation.
	/// There's no guarantee that a host will actually ever call this. Hosts that are using bottom-left orientation internally will probably
	/// never even query the support, let alone enable it.
	void HostEnabledTopLeftTextures();

	/// This method returns how may parameters the plugin has.
	/// It is usually called by the default implementations of the FreeFrame global functions.
	///
	/// \\return		The number of parameters of the plugin.
	unsigned int GetNumParams() const;
	/// This method returns the name of the plugin parameter whose index is passed as parameter
	/// to the method. It is usually called by the default implementations of the FreeFrame global functions.
	///
	/// \\param	dwIndex		The index of the plugin parameter whose name is queried.
	///						It should be in the range [0, Number of plugin parameters).
	/// \\return				The name of the plugin parameter whose index is passed to the method.
	///						The return value is a pointer to an array of 16 1-byte ASCII characters,
	///						not null terminated (see FreeFrame specification). NULL is returned on error.
	char* GetParamName( unsigned int index );
	/// This method is called to know the type of the plugin parameter whose index is passed as parameter
	/// to the method. It is usually called by the default implementations of the FreeFrame global functions.
	///
	/// \\param	dwIndex		The index of the plugin parameter whose name is queried.
	///						It should be in the range [0, Number of plugin parameters).
	/// \\return				The type of the plugin parameter whose index is passed as parameter to the method.
	///						Codes for allowed parameter types are defined in FreeFrame.h.
	///						In case of error, FF_FAIL is returned.
	unsigned int GetParamType( unsigned int index ) const;
	/// This method is called to know the usage of a plugin parameter
	/// For example a float buffer that expects a spectrum, will return FF_USAGE_FFT
	/// By default parameters will return 0 as FF_USAGE_STANDARD.
	/// In case parameter is an array, it will return the number of elements in the array.
	/// \\param	dwIndex		The index of the plugin parameter whose name is queried.
	///						It should be in the range [0, Number of plugin parameters).
	/// \\return				The type of the plugin parameter whose index is passed as parameter to the method.
	///						Codes for allowed parameter types are defined in FreeFrame.h.
	///						In case of error, FF_FAIL is returned.
	unsigned int GetParamUsage( unsigned int dwIndex ) const;
	/// This method is called to get the default value of the plugin parameter whose index is passed as parameter
	/// to the method. It is usually called by the default implementations of the FreeFrame global functions.
	///
	/// \\param	dwIndex		The index of the plugin parameter whose name is queried.
	///						It should be in the range [0, Number of plugin parameters).
	/// \\return				The default value of the plugin parameter whose index is passed as parameter to the method.
	///						The return value should be cast either to a char* in case of text parameters or to a float*
	///						in any other case. In case of error, NULL is returned.
	FFMixed GetParamDefault( unsigned int dwIndex ) const;
	/// Get the visibility status of a certain parameter.
	///
	/// \\param dwIndex		The index of the plugin parameter whose visibility state is queried.
	///						It should be in the range [0, Number of plugin parameters).
	/// \\return				This returns 1 if the parameter is supposed to be visible or 0 when it needs to be invisible.
	///						If the parameter at dwIndex doesn't exist this returns FF_FAIL
	FFUInt32 GetParamVisibility( unsigned int dwIndex ) const;

	/// This method is called to know the number of elements of the plugin parameter whose index is passed as parameter
	/// to the method. It is usually called by the default implementations of the FreeFrame global functions.
	/// By default parameters will return 1.
	/// In case parameter is an array, it will return the number of elements in the array.
	/// \\param	dwIndex		The index of the plugin parameter whose name is queried.
	///						It should be in the range [0, Number of plugin parameters).
	/// \\return				The type of the plugin parameter whose index is passed as parameter to the method.
	///						Codes for allowed parameter types are defined in FreeFrame.h.
	///						In case of error, FF_FAIL is returned.
	unsigned int GetNumParamElements( unsigned int dwIndex ) const;
	/// Get the name of an element for a parameter that can have elements (eg FF_TYPE_OPTION and FF_TYPE_BUFFER)
	/// The host may use this name to display that element on the screen. For example an OPTION's element
	/// will most likely be show as a dropdown option, which when pressed will cause the param's value to change
	/// to that element's default value.
	///
	/// \\param	dwIndex		The index of the plugin parameter which contains the element for which
	///						the name is being queried.
	///						It should be in the range[0, Number of plugin parameters).
	///	\\param	elIndex		The index of the element whose name is queried.
	///						It should be in the range [0, parameter.Number of elements).
	///	\\return				The name of the parameter's element whose indices are passed to the method.
	///						The return value is a pointer to a null terminated c string of ASCII characters.
	///						In case of error, NULL is returned.
	char* GetParamElementName( unsigned int dwIndex, unsigned int elIndex );
	/// Get the default value of an element for a parameter whose elements default values have any effect (eg FF_TYPE_OPTION)
	/// The host will use this value to set the param to this specific value when that option is chosen.
	///
	/// \\param	dwIndex		The index of the plugin parameter which contains the element for which
	///						the default value is being queried.
	///						It should be in the range[0, Number of plugin parameters).
	///	\\param	elIndex		The index of the element whose default value is queried.
	///						It should be in the range [0, parameter.Number of elements).
	///	\\return				The default value of the parameter's element whose indices are passed to the method.
	///						The return value should be cast either to a float*.
	///						In case of error, NULL is returned.
	FFMixed GetParamElementDefault( unsigned int dwIndex, unsigned int elIndex ) const;
	/// Set the value of an element for a parameter whose elements values can change (eg FF_TYPE_BUFFER)
	/// The host will use this to change the contents of a parameter's elements, which the plugin can then use
	/// depending on what the buffer is used for.
	///
	/// \\param	dwIndex		The index of the plugin parameter which contains the element for which
	///						the value is to be changed.
	///						It should be in the range[0, Number of plugin parameters).
	///	\\param	elIndex		The index of the element whose value is to be  changed.
	///						It should be in the range [0, parameter.Number of elements).
	///	\\return				FFGL result indicating if setting the value succeeded. Setting a value might fail
	///						if either of the provided indices is out of range. FF_SUCCESS on success, FF_FAIL otherwise.
	FFUInt32 SetParamElementValue( unsigned int dwIndex, unsigned int elIndex, float newValue );
	/// Get the number of element separators a parameter may have. Calling this only makes sense for FF_TYPE_OPTION parameters
	/// as those are the only parameters which can contain separatable elements.
	///
	/// \\param	dwIndex		The index of the plugin parameter fir which you want to get the number of separators.
	/// \\return				The number of separators in this parameter. This returns 0 if the parameter doesn't exist, doesn't support
	///						separators or just if it doesn't happen to have any.
	FFUInt32 GetNumElementSeparators( unsigned int dwIndex );
	/// Get the index of the element before which a paremeter's separator should be shown.
	///
	/// \\param dwIndex		The index of the plugin parameter from which to get the separator's element index.
	///						It should be in the range [0, Number of plugin parameters).
	/// \\separatorIndex		The index of the separator for which to get the element index.
	///						It should be in the range [0, GetNumElementSeparators).
	/// \\return				The element index before which a separator should be shown. This will return -1 in case of
	///						an error (eg dwIndex or separatorIndex out of range).
	FFUInt32 GetElementSeparatorElementIndex( unsigned int dwIndex, unsigned int separatorIndex );

	unsigned int GetNumFileParamExtensions( unsigned int index ) const;
	char* GetFileParamExtension( unsigned int paramIndex, unsigned int extensionIndex ) const;

	RangeStruct GetParamRange( unsigned int index );
	std::string GetParamGroup( unsigned int dwIndex );
	std::string GetParamDisplayName( unsigned int dwIndex );

	/// Get the number of parameter events that are currently pending.
	FFUInt32 GetNumPendingParamEvents() const;
	/// Consumes currently pending parameter events.
	/// This function loops over the currently pending parameter events and writes out ParamEventStructs into the passed in events buffer.
	/// It then resets the events that it has consumed so that the next consume call will not return the same events.
	///
	/// \\param events		The buffer into which param events should be written.
	/// \\param maxNumEvents	The maximum number of events that should be consumed.
	/// \\return				The number of events that were consumed. This may be smaller than maxNumEvents when there aren't any more pending events.
	FFUInt32 ConsumeParamEvents( ParamEventStruct* events, FFUInt32 maxNumEvents );

protected:
	/// The standard constructor of CFFGLPluginManager.
	///
	/// \\param	supportTopLeftTextureOrientation		Enables support for textures with the top-left orientation. These textures have the left top-most texel at the uv
	///													coordinate 0, 0. Some hosts use top-left orientation internally, for those hosts it's faster if the plugin also uses the
	///													top-left orientation as that prevents the host from having to flip inputs and outputs on the y axis.
	///													Note that this flag only request's the support, usage of the orientation is not guaranteed. If the host intends to use
	///													top-left orientations it first checks if the plugin supports it, and when it does it tells the plugin that it will be using it.
	///													So in the implementation of your plugin you should access the textureOrientation variable to see if the host has enabled it.
	///													If the host hasn't enabled it you must make sure you match the host's texture orientation which is bottom-left for uv coordinate 0, 0.
	///
	/// \\remark	Notice that the CFFGLPluginManager constructor is a protected member function, i.e., nor CFFGLPluginManager
	///		objects nor CFreeFramePlugin objects should be created directly, but only objects of the subclasses
	///			implementing specific plugins should be instantiated.
	CFFGLPluginManager( bool supportTopLeftTextureOrientation = false );

	/// This method is called by a plugin subclass, derived from this class, to indicate the minimum number
	/// of inputs the host must provide. This method is usually called when a plugin object is instantiated
	/// (i.e., in the plugin subclass constructor).
	///
	/// \\param	iMinInputs	The plugin subclass should set it to the minimum number of inputs
	///						the host must provide.
	void SetMinInputs( unsigned int iMinInputs );
	/// This method is called by a plugin subclass, derived from this class, to indicate the maximum number
	/// of inputs the plugin can receive. This method is usually called when a plugin object is instantiated
	/// (i.e., in the plugin subclass constructor).
	///
	/// \\param	iMaxInputs	The plugin subclass should set it to the maximum number of inputs the plugin
	///						can receive.
	void SetMaxInputs( unsigned int iMaxInputs );

	/// This method is called by a plugin subclass, derived from this class, to indicate whether the
	/// SetTime function is supported
	///
	/// \\param	supported	The plugin indicates whether it supports the SetTime function by passing true or false (1 or 0)
	void SetTimeSupported( bool supported );

	/// This method is called by a plugin subclass, derived from this class, to specify name, type, and default
	/// value of the plugin parameter whose index is passed as parameter to the method. This method is usually
	/// called when a plugin object is instantiated (i.e., in the plugin subclass contructor). This version of
	/// the SetParamInfo function (DefaultValue of type float) should be called for all types of plugin parameters
	/// except for text, boolean, and event parameters.
	///
	/// \\param	dwIndex			Index of the plugin parameter whose data are specified.
	///							It should be in the range [0, Number of plugin parameters).
	/// \\param	pchName			A string containing the name of the plugin parameter.
	///							According to the FreeFrame specification it should be at most 16 1-byte ASCII
	///							characters long. Longer strings will be truncated at the 16th character.
	/// \\param	dwType			The type of the plugin parameter. Codes for allowed types are defined in FreeFrame.h.
	/// \\param	fDefaultValue	The default value of the plugin parameter. According to the FreeFrame
	///							specification it must be a float in the range [0, 1].
	void SetParamInfo( unsigned int index, const char* pchName, unsigned int type, float fDefaultValue );
	/// This method is called by a plugin subclass, derived from this class, to specify name, type, and default
	/// value of the plugin parameter whose index is passed as parameter to the method. This method is usually
	/// called when a plugin object is instantiated (i.e., in the plugin subclass contructor). This version of
	/// the SetParamInfo function (DefaultValue of type bool) should be called for plugin parameters of type
	/// boolean or event.
	///
	/// \\param	dwIndex			Index of the plugin parameter whose data are specified.
	///							It should be in the range [0, Number of plugin parameters).
	/// \\param	pchName			A string containing the name of the plugin parameter.
	///							According to the FreeFrame specification it should be at most 16 1-byte ASCII
	///							characters long. Longer strings will be truncated at the 16th character.
	/// \\param	dwType			The type of the plugin parameter. Codes for allowed types are defined in FreeFrame.h.
	/// \\param	bDefaultValue	The boolean default value of the plugin parameter.
	void SetParamInfo( unsigned int index, const char* pchName, unsigned int type, bool bDefaultValue );
	/// This method is called by a plugin subclass, derived from this class, to specify name, type, and default
	/// value of the plugin parameter whose index is passed as parameter to the method. This method is usually
	/// called when a plugin object is instantiated (i.e., in the plugin subclass contructor). This version of
	/// the SetParamInfo function (DefaultValue of type char*) should be called for plugin parameters of type text.
	///
	/// \\param	dwIndex			Index of the plugin parameter whose data are specified.
	///							It should be in the range [0, Number of plugin parameters).
	/// \\param	pchName			A string containing the name of the plugin parameter.
	///							According to the FreeFrame specification it should be at most 16 1-byte ASCII
	///							characters long. Longer strings will be truncated at the 16th character.
	/// \\param	dwType			The type of the plugin parameter. Codes for allowed types are defined in FreeFrame.h.
	/// \\param	pchDefaultValue	A string to be used as the default value of the plugin parameter.
	void SetParamInfo( unsigned int index, const char* pchName, unsigned int type, const char* pchDefaultValue );

	/// This method is called by a plugin subclass, derived from this class, to specify name, type, and default
	/// value of the plugin parameter whose index is passed as parameter to the method. This method is usually
	/// called when a plugin object is instantiated (i.e., in the plugin subclass contructor). This version of
	/// the SetParamInfo function (DefaultValue of type float) should be called for all types of plugin parameters
	/// except for text, boolean, and event parameters.
	///
	/// \\param	dwIndex			Index of the plugin parameter whose data are specified.
	///							It should be in the range [0, Number of plugin parameters).
	/// \\param	pchName			A string containing the name of the plugin parameter.
	///							According to the FreeFrame specification it should be at most 16 1-byte ASCII
	///							characters long. Longer strings will be truncated at the 16th character.
	/// \\param	numElements		Number of elements of this parameter ( array )
	/// \\param	usage			Usage of this parameter,
	void SetBufferParamInfo( unsigned int dwIndex, const char* pchName, unsigned int numElements, unsigned int usage );
	/// This method is called by a plugin subclass, derived from this class, to specify name, type, and default
	/// value of the plugin parameter whose index is passed as parameter to the method. This method is usually
	/// called when a plugin object is instantiated (i.e., in the plugin subclass contructor). This version of
	/// the SetParamInfo function (DefaultValue of type float) should be called for all types of plugin parameters
	/// except for text, boolean, and event parameters.
	///
	/// \\param	dwIndex			Index of the plugin parameter whose data are specified.
	///							It should be in the range [0, Number of plugin parameters).
	/// \\param	pchName			A string containing the name of the plugin parameter.
	///							According to the FreeFrame specification it should be at most 16 1-byte ASCII
	///							characters long. Longer strings will be truncated at the 16th character.
	/// \\param	numElements		Number of elements of this parameter ( array )
	void SetOptionParamInfo( unsigned int dwIndex, const char* pchName, unsigned int numElements, float defaultValue );
	void SetParamElementInfo( unsigned int paramID, unsigned int elementIndex, const char* elementName, float elementValue );
	/// Request the host to add a separator in front of an option parameter's element.
	/// Most hosts will show option parameters as a drop down, when doing this it's sometimes usefull to
	/// have categories in the dropdown. These separators can be used to create those categories.
	///
	/// \\param	paramID				The index of the option parameter which contains the element for which
	///								the value is to be changed.
	///								It should be the id of an option parameter.
	///	\\param	beforeElementIndex	The index of the element before which the separator should be shown.
	///								It should be in the range [0, parameter.Number of elements).
	void AddElementSeparator( unsigned int paramID, unsigned int beforeElementIndex );

	void SetFileParamInfo( unsigned int index, const char* pchName, std::vector< std::string > supportedExtensions, const char* defaultFile );

	/// Sets whether or not a parameter should be visible in the host's ui.
	///
	/// \\param paramID			Index of the parameter whose visibility has to be changed.
	/// \\param shouldBeVisible	True if the parameter should be visible in the ui, false otherwise.
	/// \\param raiseEvent                Whether or not this function should automatically raise a visibility change event. Stateful hosts (ie Resolume)
	///                         require you to raise the event in order for them to pick up the visiblity change. You'd probably pass false here during
	///                         initialization of your parameters and true when you're changing visibility on the fly.
	void SetParamVisibility( unsigned int paramID, bool shouldBeVisible, bool raiseEvent );
	void SetParamRange( unsigned int index, float min, float max );
	void SetParamGroup( unsigned int dwIndex, std::string newGroupName );
	/// Change the name that a host should show as a param's name.
	///
	/// \\param paramID                     Index of the parameter whose display name has to be changed.
	/// \\param newDisplayName     The new name that should be displayed. If this is empty the host will revert to the original name.
	/// \\param raiseEvent              Whether or not a display name change event should be fired to make stateful hosts pick up the change.
	///                        Probably you want to pass false during initialization and true when changing a display name while the plugin is running.
	void SetParamDisplayName( unsigned int paramID, std::string newDisplayName, bool raiseEvent );

	void SetParamElements( unsigned int dwIndex, std::vector< std::string > newElements, const std::vector< float >& elementValues, bool raiseEvent );

	/// Raises an event flag on a certain parameter. Calling this will store the event as being a pending event
	/// untill the host decides to consume the event and handles it. Raising an event multiple times before the host
	/// consumes them will only output a single event to the host. This is okay because the expected host's response
	/// is to query the parameter's state again, so if it has updated twice then handling the event once after both updates
	/// will still result in the host querying the correct state.
	///
	/// \\param paramID			Index of the parameter for which you want the event to be raised.
	/// \\param eventToRaise		The event flag to raise for the parameter. This has to be one of the FF_EVENT_FLAG_ flags.
	void RaiseParamEvent( unsigned int paramID, FFUInt64 eventToRaise );

protected:
	// Structure for keeping information about each plugin parameter
	struct ParamInfo
	{
		ParamInfo() :
			range{ 0, 1 }
		{
		}

		unsigned int ID;        //!< The id is used to represent this parameter in communication between host and plugin.
		std::string name;       //!< The name is shown by the host to the user to identify this plugin. It may also be used by the host for parameter serialization.
		std::string displayName;//!< Override for the name shown by the host. Params should retain the same names for serialization, but display names can change as those aren't used for identification.
		unsigned int dwType;

		// extra parameters
		struct Element
		{
			std::string name;
			float value = 0.0f;
		};
		std::vector< Element > elements;
		struct ElementSeparator
		{
			unsigned int beforeIndex;
		};
		std::vector< ElementSeparator > elementSeparators;
		unsigned int usage;

		bool visibleInUI = true;
		RangeStruct range;

		float defaultFloatVal = 0.0f;
		std::string defaultStringVal;
		std::vector< std::string > supportedExtensions;//!< The extensions this parameter supports. Only used if dwType is FF_TYPE_FILE.

		FFUInt64 pendingEventFlags = 0;//!< Event flags for events that are pending for the current parameter.
		std::string groupName;         //!< Name for the param group this param is a member of. Empty for ungrouped.
	};
	enum class TextureOrientation
	{
		BOTTOM_LEFT,
		TOP_LEFT
	};

	ParamInfo* FindParamInfo( unsigned int ID );
	const ParamInfo* FindParamInfo( unsigned int ID ) const;
	/// Get the current texture orientation. Plugin subclasses that support the top-left texture orientation will call this
	/// to know if the top-left orientation has been enabled by the host.
	TextureOrientation GetTextureOrientation() const;

private:
	std::vector< ParamInfo > params;

	// Inputs
	int m_iMinInputs;
	int m_iMaxInputs;

	bool m_timeSupported;                           //!< Whether or not this plugin supports having it's time set.
	const bool m_topLeftTextureOrientationSupported;//!< Whether or not this plugin supports input/output textures with the top-left orientation rather than OpenGL's standard bottom-right.
	TextureOrientation textureOrientation;          //!< The texture orientation the host/plugin have agreed to use. By default plugins use OpenGL's bottom_left standard.
};

#endif
`,f=`#if !defined( _CRT_SECURE_NO_WARNINGS )
#define _CRT_SECURE_NO_WARNINGS
#endif
//
// Copyright (c) 2004 - InfoMus Lab - DIST - University of Genova
//
// InfoMus Lab (Laboratorio di Informatica Musicale)
// DIST - University of Genova
//
// http://www.infomus.dist.unige.it
// news://infomus.dist.unige.it
// mailto:staff@infomus.dist.unige.it
//
// Developer: Gualtiero Volpe
// mailto:volpe@infomus.dist.unige.it
//
// Developer: Trey Harrison
// mailto:trey@treyharrison.com
//
// Last modified: Oct. 26 2006
//

#include "FFGLPluginSDK.h"
#include <stdio.h>
#include <memory.h>
#include <algorithm>

// Buffer used by the default implementation of getParameterDisplay
static char s_DisplayValue[ 16 ];

////////////////////////////////////////////////////////
// CFFGLPlugin constructor and destructor
////////////////////////////////////////////////////////

CFFGLPlugin::CFFGLPlugin( bool supportTopLeftTextureOrientation ) :
	CFFGLPluginManager( supportTopLeftTextureOrientation ),
	bpm( 120.0f ),
	barPhase( 0.0f )
{
}

CFFGLPlugin::~CFFGLPlugin()
{
}

////////////////////////////////////////////////////////
// Default implementation of CFFGLPlugin methods
////////////////////////////////////////////////////////

char* CFFGLPlugin::GetParameterDisplay( unsigned int index )
{
	unsigned int pType = m_pPlugin->GetParamType( index );
	if( pType != FF_FAIL )
	{
		if( pType == FF_TYPE_TEXT || pType == FF_TYPE_FILE )
		{
			return m_pPlugin->GetTextParameter( index );
		}
		else
		{
			std::string stringValue = std::to_string( m_pPlugin->GetFloatParameter( index ) );
			memset( s_DisplayValue, 0, sizeof( s_DisplayValue ) );
			memcpy( s_DisplayValue, stringValue.c_str(), std::min( sizeof( s_DisplayValue ), stringValue.length() ) );
			return s_DisplayValue;
		}
	}
	return NULL;
}

FFResult CFFGLPlugin::SetFloatParameter( unsigned int index, float value )
{
	return FF_FAIL;
}

FFResult CFFGLPlugin::SetTextParameter( unsigned int index, const char* value )
{
	return FF_FAIL;
}

float CFFGLPlugin::GetFloatParameter( unsigned int index )
{
	return 0.0;
}

char* CFFGLPlugin::GetTextParameter( unsigned int index )
{
	return (char*)FF_FAIL;
}

FFResult CFFGLPlugin::GetInputStatus( unsigned int index )
{
	if( index >= GetMaxInputs() )
		return FF_FAIL;
	return FF_INPUT_INUSE;
}

void CFFGLPlugin::SetBeatInfo( float bpm, float barPhase )
{
	this->bpm      = bpm;
	this->barPhase = barPhase;
}

void CFFGLPlugin::SetHostInfo( const char* hostname, const char* version )
{
	hostInfos.name    = hostname;
	hostInfos.version = version;
}

void CFFGLPlugin::SetSampleRate( unsigned int _sampleRate )
{
	sampleRate = _sampleRate;
}
`,c=`//
// Copyright (c) 2004 - InfoMus Lab - DIST - University of Genova
//
// InfoMus Lab (Laboratorio di Informatica Musicale)
// DIST - University of Genova
//
// http://www.infomus.dist.unige.it
// news://infomus.dist.unige.it
// mailto:staff@infomus.dist.unige.it
//
// Developer: Gualtiero Volpe
// mailto:volpe@infomus.dist.unige.it
//
// Developer: Trey Harrison
// www.harrisondigitalmedia.com
//
// Last modified: October 26 2006
//

#ifndef FFGLPLUGINSDK_STANDARD
#define FFGLPLUGINSDK_STANDARD

#include "FFGLPluginManager.h"
#include "FFGLPluginInfo.h"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// \\class		CFFGLPlugin
///	\\brief		CFFGLPlugin is the base class for all FreeFrameGL plugins developed with the FreeFrameGL SDK.
/// \\author		Gualtiero Volpe
/// \\version	1.0.0.2
///
/// The CFFGLPlugin class is the base class for every FreeFrameGL plugins developed with the FreeFrameGL SDK.
/// It is derived from CFFGLPluginManager, so that most of the plugin management and communication with the host
/// can be transparently handled through the default implementations of the methods of CFFGLPluginManager.
/// While CFFGLPluginManager is used by the global FreeFrame methods, CFFGLPlugin provides a default implementation
/// of the instance specific FreeFrame functions. Note that CFFGLPlugin methods are virtual methods: any given
/// FreeFrameGL plugin developed with the FreeFrameGL SDK will be a derived class of CFFGLPlugin and will have to
/// provide a custom implementation of most of such methods. Except for CFFGLPlugin::GetParameterDisplay and
/// CFFGLPlugin::GetInputStatus, all the default methods of CFFGLPlugin just return FF_FAIL: every derived
/// plugin is responsible of providing its specific implementation of such default methods.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class CFFGLPlugin : public CFFGLPluginManager
{
public:
	/// The standard destructor of CFFGLPlugin.
	virtual ~CFFGLPlugin();

	/// Default implementation of the FFGL InitGL instance specific function. This function allocates
	/// the OpenGL resources the plugin needs during its lifetime
	///
	/// \\param		vp Pointer to a FFGLViewportStruct structure (see the definition in FFGL.h and
	///						the description in the FFGL specification).
	/// \\return		The default implementation always returns FF_SUCCESS.
	///						A custom implementation must be provided by every specific plugin that allocates
	///           any OpenGL resources
	virtual FFResult InitGL( const FFGLViewportStruct* vp )
	{
		currentViewport = *vp;
		return FF_SUCCESS;
	}

	/// Default implementation of the FFGL DeInitGL instance specific function. This function frees
	/// any OpenGL resources the plugin has allocated
	///
	/// \\return		The default implementation always returns FF_SUCCESS.
	///						A custom implementation must be provided by every specific plugin that allocates
	///           any OpenGL resources
	virtual FFResult DeInitGL()
	{
		return FF_SUCCESS;
	}

	/// Default implementation of the FreeFrame getParameterDisplay instance specific function. It provides a string
	/// to display as the value of the plugin parameter whose index is passed as parameter to the method. This default
	/// implementation just returns the string representation of the float value of the plugin parameter. A custom
	/// implementation may be provided by every specific plugin.
	///
	/// \\param		dwIndex		The index of the parameter whose display value is queried.
	///							It should be in the range [0, Number of plugin parameters).
	/// \\return					The display value of the plugin parameter or NULL in case of error
	virtual char* GetParameterDisplay( unsigned int index );

	//Added the following to obscure the casting to FFMixed from implementations. Could/should also deal with other paramter types
	//in a similar way
	virtual FFResult SetFloatParameter( unsigned int index, float value );
	virtual FFResult SetTextParameter( unsigned int index, const char* value );
	virtual float GetFloatParameter( unsigned int index );
	virtual char* GetTextParameter( unsigned int index );

	void SetParamInfof( unsigned int index, const char* pchName, unsigned int type )
	{
		SetParamInfo( index, pchName, type, GetFloatParameter( index ) );
	}
	/// Default implementation of the FFGL ProcessOpenGL instance specific function. This function processes
	/// the input texture(s) by
	///
	/// \\param		pOpenGLData to a ProcessOpenGLStruct structure (see the definition in FFGL.h and
	///						the description in the FFGL specification).
	/// \\return		The default implementation always returns FF_FAIL.
	///						A custom implementation must be provided by every specific plugin.
	virtual FFResult ProcessOpenGL( ProcessOpenGLStruct* pOpenGLData )
	{
		return FF_FAIL;
	}

	/// Default implementation of the FFGL SetTime instance specific function
	///
	/// \\param		pOpenGLData to a ProcessOpenGLStruct structure (see the definition in FFGL.h and
	///						the description in the FFGL specification).
	/// \\return		The default implementation always returns FF_FAIL.
	///						A custom implementation must be provided by every specific plugin.
	virtual FFResult SetTime( double time )
	{
		hostTime = time;
		return FF_SUCCESS;
	}

	virtual void SetBeatInfo( float bpm, float barPhase );

	virtual void SetHostInfo( const char* hostname, const char* version );

	virtual void SetSampleRate( unsigned int sampleRate );

	/// Default implementation of the FreeFrame getInputStatus instance specific function. This function is called
	/// to know whether a given input is currently in use. For the default implementation every input is always in use.
	/// A custom implementation may be provided by every specific plugin.
	///
	/// \\param		dwIndex		The index of the input whose status is queried.
	///							It should be in the range [Minimum number of inputs, Maximum number of inputs).
	/// \\return					The default implementation always returns FF_FF_INPUT_INUSE or FF_FAIL if the index
	///							is out of range. A custom implementation may be provided by every specific plugin.
	virtual FFResult GetInputStatus( unsigned int index );

	////////////////////////////////////////////////////////////////////////////
	/// Returns the short name of the plugin
	virtual const char* GetShortName()
	{
		return 0;
	}

	/// Default implementation of the FFGL Connect instance specific function.
	/// Used to setup plugin when it is activated.
	/// Will get automatically called if necessary before ProcessGL
	/// \\return		The default implementation always returns FF_SUCCESS.
	virtual unsigned int Connect()
	{
		return FF_SUCCESS;
	}

	/// Default implementation of the FFGL Disconnect instance specific function.
	/// Automatically gets called if necessary before DeInitGL
	/// \\return		The default implementation always returns FF_SUCCESS.
	virtual unsigned int Disconnect()
	{
		return FF_SUCCESS;
	}

	/// Called when plugin viewport size is changed
	/// \\param		vp Pointer to a FFGLViewportStruct structure (see the definition in FFGL.h and
	///				the description in the FFGL specification).
	/// \\return		The default implementation always returns FF_SUCCESS.
	virtual unsigned int Resize( const FFGLViewportStruct* vp )
	{
		currentViewport = *vp;
		return FF_SUCCESS;
	}

	/// This flag indicates that Connect has been called by the host, or automatically called by FFGL
	bool m_isConnected;

	/// The only public data field CFFGLPlugin contains is m_pPlugin, a pointer to the plugin instance.
	/// Subclasses may use this pointer for self-referencing (e.g., a plugin may pass this pointer to external modules,
	/// so that they can use it for calling the plugin methods).
	CFFGLPlugin* m_pPlugin;

protected:
	/// The only protected function of CFFGLPlugin is its constructor. In fact, nor CFFGLPluginManager objects nor
	/// CFFGLPlugin objects should be created directly, but only objects of the subclasses implementing specific
	/// plugins should be instantiated. Moreover, subclasses should define and provide a factory method to be used by
	/// the FreeFrame SDK for instantiating plugin objects.
	CFFGLPlugin( bool supportTopLeftTextureOrientation = false );

	FFGLViewportStruct currentViewport;
	float bpm;
	float barPhase;

	struct HostInfo
	{
		std::string name;
		std::string version;
	} hostInfos;
	double hostTime;
	int sampleRate;
};

#endif
`,m=`#include "FFGLThumbnailInfo.h"
//#include <assert.h>
//#include <stdlib.h>
//#include <memory.h>

static CFFGLThumbnailInfo* instance = nullptr;

CFFGLColor::CFFGLColor() :
	rgba( 0 )
{
}
CFFGLColor::CFFGLColor( FFUInt32 rgba ) :
	rgba( rgba )
{
}
CFFGLColor::CFFGLColor( unsigned char r, unsigned char g, unsigned char b, unsigned char a ) :
	rgba( 0 )
{
	rgba |= FFUInt32( r ) << 24;
	rgba |= FFUInt32( g ) << 16;
	rgba |= FFUInt32( b ) << 8;
	rgba |= FFUInt32( a ) << 0;
}

CFFGLThumbnailInfo* CFFGLThumbnailInfo::GetInstance()
{
	return instance;
}

CFFGLThumbnailInfo::CFFGLThumbnailInfo( FFUInt32 width, FFUInt32 height, std::vector< CFFGLColor > ownedPixels ) :
	width( width ), height( height ), ownedPixels( std::move( ownedPixels ) )
{
	this->ownedPixels.resize( width * height );
	//Technically the vector's data doesn't have to be in contiguous memory, but for all stl implementations we know it is so
	//we can just do this.
	pixelData = this->ownedPixels.data();
	instance  = this;
}
CFFGLThumbnailInfo::CFFGLThumbnailInfo( FFUInt32 width, FFUInt32 height, const CFFGLColor* pixelData ) :
	width( width ), height( height ), pixelData( pixelData )
{
	instance = this;
}

FFUInt32 CFFGLThumbnailInfo::GetWidth() const
{
	return width;
}
FFUInt32 CFFGLThumbnailInfo::GetHeight() const
{
	return height;
}
const CFFGLColor* CFFGLThumbnailInfo::GetPixels() const
{
	return pixelData;
}
`,p=`////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FFGLThumbnailInfo.h
//
// FreeFrame is an open-source cross-platform real-time video effects plugin system.
// It provides a framework for developing video effects plugins and hosts on Windows,
// Linux and Mac OSX.
//
// Copyright (c) 2018 www.freeframe.org
// All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Redistribution and use in source and binary forms, with or without modification,
//	are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//  * Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in
//    the documentation and/or other materials provided with the
//    distribution.
//  * Neither the name of FreeFrame nor the names of its
//    contributors may be used to endorse or promote products derived
//    from this software without specific prior written permission.
//
//
//	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
//	ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
//	WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//	IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
//	INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
//	BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
//	DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
//	OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
//	OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
//	OF THE POSSIBILITY OF SUCH DAMAGE.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// First version, Menno Vink (menno@resolume.com)
// www.resolume.com
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

#ifndef FFGLTHUMBNAILINFO_STANDARD
#define FFGLTHUMBNAILINFO_STANDARD
#include <vector>
#include "FFGL.h"

struct CFFGLColor
{
	/// Creates a new Color that's automatically initialized to transparent black.
	CFFGLColor();
	/// Creates a new color from an unsigned integer that contains the data for all the channels.
	/// The unsigned integer needs to be in the 0xRRGGBBAA format. This means that the Red channel
	/// needs to be the most significant byte, then green, then blue and alpha is the least significant byte.
	CFFGLColor( FFUInt32 rgba );
	/// Creates a color where you can specify the color channel's values seperately without having to manually
	/// handle the order of the RGBA channels.
	CFFGLColor( unsigned char r, unsigned char g, unsigned char b, unsigned char a );

	FFUInt32 rgba;//!< 1 byte for each channel. Red is MSB while Alpha is LSB. (0xRRGGBBAA)
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// \\class		CFFGLThumbnailInfo
/// \\brief		CFFGLThumbnailInfo manages static information concerning a plugin's thumbnail.
/// \\author		Menno Vink (menno@resolume.com)
/// \\date		2019-08-29
///
/// The CFFGLThumbnailInfo class manages static information related to a FreeFrameGL plugin's thumbnail.
/// If you want to expose an embedded thumbnail inside your plugin you should declare a static instance of this class.
/// Then when a host that supports embedded thumbnails asks the plugin for it's thumbnail the static instance
/// is accessed and the embedded plugin is  returned to the host.
/// As far as thumbnail size goes, it's the plugin that gets to decide what size of thumbnail it wants to provide.
/// When a host gets a thumbnail at a size different than the thumbnail size that it wants it's up to the host to determine how to go from the
/// plugin's thumbnail's size to the size of the thumbnail that the host wants to show.
/// Thumbnails have their origin as top-left. So the first pixel color is the most top left pixel, the second pixel is the next pixel on the row, so a one pixel to the right.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class CFFGLThumbnailInfo
{
public:
	static CFFGLThumbnailInfo* GetInstance();

	/// This constructor can be used when you're generating a vector of colors over which you want to move ownership over
	/// into this thumbnail info instance. This may be usefull when you have a function to generate the thumbnail because you
	/// can use the function's return value to provide the thumbnail's colors.
	///
	/// \\param width		The width of the thumbnail in number of pixels.
	/// \\param height		The height of the thumbnail in number of pixels.
	/// \\param ownedPixels	A vector of colors representing the thumbnail pixels' colors. This vector is expected to be width*height in size.
	CFFGLThumbnailInfo( FFUInt32 width, FFUInt32 height, std::vector< CFFGLColor > ownedPixels );
	/// This constructor can be used when you've got a static array of color values representing the thumbnail's colors.
	/// This may be usefull when you've got a plain array of rgba colors that you want to use as thumbnail without having to copy their ownership
	/// over into this thumbnail info instance.
	///
	/// \\param width		The width of the thumbnail in number of pixels.
	/// \\param height		The height of the thumbnail in number of pixels.
	/// \\param ownedPixels	A vector of colors representing the thumbnail pixels' colors. This vector is expected to be width*height in size.
	CFFGLThumbnailInfo( FFUInt32 width, FFUInt32 height, const CFFGLColor* pixelData );

	/// Get the width of the thumbnail in number of pixels.
	FFUInt32 GetWidth() const;
	/// Get the height of the thumbnail in number of pixels.
	FFUInt32 GetHeight() const;
	/// Gets the thumbnail's pixel colors. This is a contiguous array of colors at the size of width * height;
	const CFFGLColor* GetPixels() const;

private:
	FFUInt32 width;                       //!< Width of the thumbnail in number of pixels.
	FFUInt32 height;                      //!< Height of the thumbnail in number of pixels.
	std::vector< CFFGLColor > ownedPixels;//!< Array of thumbnail data owned by this instance.
	const CFFGLColor* pixelData;          //!< A pointer to the array of thumbnail pixel data. The thumbnail's colors will be read from this array.
};

#endif
`,F=`
#include <array>
#include <cmath>
#include <dlfcn.h>
#include <iostream>
#include <map>
#include <memory>
#include <sstream>
#include <string>
#include <thread>
#include <unordered_map>
#include <vector>

extern "C" {
void RegisterMetalTextureForGL(unsigned int glHandle, void *mtlTexturePtr);
}

#import <CoreVideo/CoreVideo.h>
#import <Foundation/Foundation.h>
#import <Metal/Metal.h>
#import <MetalKit/MetalKit.h>

#import "InteropTexture.h"
#include <FFGL.h>
#include <FFGLLib.h>
#include <FFGLPluginSDK.h>

// =====================
// Custom OpenGL Helpers (Replacing ffglex)
// =====================

namespace native_gl {

struct ScopedFBO {
  GLint original;
  ScopedFBO() { glGetIntegerv(GL_FRAMEBUFFER_BINDING, &original); }
  ScopedFBO(GLuint fbo) : ScopedFBO() {
    glBindFramebuffer(GL_FRAMEBUFFER, fbo);
  }
  ~ScopedFBO() { glBindFramebuffer(GL_FRAMEBUFFER, (GLuint)original); }
};

// Function Pointers for VAO
typedef void (*GenVertexArraysPtr)(GLsizei, GLuint *);
typedef void (*BindVertexArrayPtr)(GLuint);
typedef void (*DeleteVertexArraysPtr)(GLsizei, const GLuint *);
typedef void (*EnableVertexAttribArrayPtr)(GLuint);
typedef void (*VertexAttribPointerPtr)(GLuint, GLint, GLenum, GLboolean,
                                       GLsizei, const GLvoid *);

static GenVertexArraysPtr glGenVertexArraysFunc = nullptr;
static BindVertexArrayPtr glBindVertexArrayFunc = nullptr;
static DeleteVertexArraysPtr glDeleteVertexArraysFunc = nullptr;
static EnableVertexAttribArrayPtr glEnableVertexAttribArrayFunc = nullptr;
static VertexAttribPointerPtr glVertexAttribPointerFunc = nullptr;

void InitGLFuncs() {
  if (!glGenVertexArraysFunc) {
    glGenVertexArraysFunc =
        (GenVertexArraysPtr)dlsym(RTLD_DEFAULT, "glGenVertexArrays");
    // Fallback to APPLE if needed? No, Core Profile should have standard.
    if (!glGenVertexArraysFunc)
      glGenVertexArraysFunc =
          (GenVertexArraysPtr)dlsym(RTLD_DEFAULT, "glGenVertexArraysAPPLE");
  }
  if (!glBindVertexArrayFunc) {
    glBindVertexArrayFunc =
        (BindVertexArrayPtr)dlsym(RTLD_DEFAULT, "glBindVertexArray");
    if (!glBindVertexArrayFunc)
      glBindVertexArrayFunc =
          (BindVertexArrayPtr)dlsym(RTLD_DEFAULT, "glBindVertexArrayAPPLE");
  }
  if (!glDeleteVertexArraysFunc) {
    glDeleteVertexArraysFunc =
        (DeleteVertexArraysPtr)dlsym(RTLD_DEFAULT, "glDeleteVertexArrays");
    if (!glDeleteVertexArraysFunc)
      glDeleteVertexArraysFunc = (DeleteVertexArraysPtr)dlsym(
          RTLD_DEFAULT, "glDeleteVertexArraysAPPLE");
  }

  // Dynamic load attribute functions too, just in case linking is broken
  if (!glEnableVertexAttribArrayFunc) {
    glEnableVertexAttribArrayFunc = (EnableVertexAttribArrayPtr)dlsym(
        RTLD_DEFAULT, "glEnableVertexAttribArray");
    if (!glEnableVertexAttribArrayFunc)
      glEnableVertexAttribArrayFunc = (EnableVertexAttribArrayPtr)dlsym(
          RTLD_DEFAULT, "glEnableVertexAttribArrayARB");
  }
  if (!glVertexAttribPointerFunc) {
    glVertexAttribPointerFunc =
        (VertexAttribPointerPtr)dlsym(RTLD_DEFAULT, "glVertexAttribPointer");
    if (!glVertexAttribPointerFunc)
      glVertexAttribPointerFunc = (VertexAttribPointerPtr)dlsym(
          RTLD_DEFAULT, "glVertexAttribPointerARB");
  }

}

struct ScopedShader {
  GLint original;
  ScopedShader() { glGetIntegerv(GL_CURRENT_PROGRAM, &original); }
  ScopedShader(GLuint program) : ScopedShader() { glUseProgram(program); }
  ~ScopedShader() { glUseProgram((GLuint)original); }
};

struct ScopedTexture {
  GLenum target;
  GLint original;
  ScopedTexture(GLenum t, GLuint tex) : target(t) {
    if (t == GL_TEXTURE_2D)
      glGetIntegerv(GL_TEXTURE_BINDING_2D, &original);
    else
      glGetIntegerv(GL_TEXTURE_BINDING_RECTANGLE, &original);
    glBindTexture(t, tex);
  }
  ~ScopedTexture() { glBindTexture(target, (GLuint)original); }
};

struct ScopedSampler {
  GLint active;
  ScopedSampler(int unit) {
    glGetIntegerv(GL_ACTIVE_TEXTURE, &active);
    glActiveTexture(GL_TEXTURE0 + unit);
  }
  ~ScopedSampler() { glActiveTexture((GLenum)active); }
};

class GLShader {
public:
  GLuint program = 0;
  bool Compile(const char *vs, const char *fs) {
    GLuint v = glCreateShader(GL_VERTEX_SHADER);
    glShaderSource(v, 1, &vs, NULL);
    glCompileShader(v);

    GLuint f = glCreateShader(GL_FRAGMENT_SHADER);
    glShaderSource(f, 1, &fs, NULL);
    glCompileShader(f);

    program = glCreateProgram();
    glAttachShader(program, v);
    glAttachShader(program, f);

    glBindAttribLocation(program, 0, "vPos");
    glBindAttribLocation(program, 1, "vTex");

    glLinkProgram(program);

    glDeleteShader(v);
    glDeleteShader(f);

    GLint status;
    glGetProgramiv(program, GL_LINK_STATUS, &status);
    if (status != GL_TRUE) {
    }
    return status == GL_TRUE;
  }
  void SetInt(const char *name, int val) {
    glUniform1i(glGetUniformLocation(program, name), val);
  }
  void SetFloat(const char *name, float val) {
    glUniform1f(glGetUniformLocation(program, name), val);
  }
  void SetVec2(const char *name, float v1, float v2) {
    glUniform2f(glGetUniformLocation(program, name), v1, v2);
  }
  void Free() {
    if (program)
      glDeleteProgram(program);
    program = 0;
  }
};

class GLQuad {
  GLuint vao = 0, vbo = 0;

public:
  void Initialise() {
    InitGLFuncs(); // Ensure pointers are loaded

    // V coords flipped (0→1, 1→0) to correct Metal↔OpenGL IOSurface coordinate mismatch
    float verts[] = {-1, -1, 0, 1, 1, -1, 1, 1, 1, 1, 1, 0, -1, 1, 0, 0};

    if (glGenVertexArraysFunc) {
      glGenVertexArraysFunc(1, &vao);
    } else {
    }

    if (vao == 0) {
      return;
    }

    glGenBuffers(1, &vbo);

    if (glBindVertexArrayFunc)
      glBindVertexArrayFunc(vao);

    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, sizeof(verts), verts, GL_STATIC_DRAW);
    if (glEnableVertexAttribArrayFunc)
      glEnableVertexAttribArrayFunc(0);
    else
      glEnableVertexAttribArray(0);

    if (glVertexAttribPointerFunc)
      glVertexAttribPointerFunc(0, 2, GL_FLOAT, GL_FALSE, 4 * 4, 0);
    else
      glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 4 * 4, 0);

    if (glEnableVertexAttribArrayFunc)
      glEnableVertexAttribArrayFunc(1);
    else
      glEnableVertexAttribArray(1);

    if (glVertexAttribPointerFunc)
      glVertexAttribPointerFunc(1, 2, GL_FLOAT, GL_FALSE, 4 * 4, (void *)8);
    else
      glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 4 * 4, (void *)8);

    if (glBindVertexArrayFunc)
      glBindVertexArrayFunc(0);
  }
  void Draw() {
    if (vao == 0)
      return;
    if (glBindVertexArrayFunc) {
      glBindVertexArrayFunc(vao);
      glDrawArrays(GL_TRIANGLE_FAN, 0, 4);
      glBindVertexArrayFunc(0);
    }
  }
  void Free() {
    if (vao && glDeleteVertexArraysFunc)
      glDeleteVertexArraysFunc(1, &vao);
    if (vbo)
      glDeleteBuffers(1, &vbo);
    vao = vbo = 0;
  }
};

} // namespace native_gl

#ifndef PLUGIN_NAME
#define PLUGIN_NAME "NanoFFGL"
#endif
#ifndef PLUGIN_CODE
#define PLUGIN_CODE "NANO"
#endif
#ifndef PLUGIN_TYPE
#define PLUGIN_TYPE FF_EFFECT
#endif
#ifndef MIN_INPUTS
#define MIN_INPUTS 1
#endif
#ifndef MAX_INPUTS
#define MAX_INPUTS 1
#endif

#include "intrinsics.incl.h"

// Forward declarations of generated functions
void func_main(EvalContext &ctx);

static const char _blitFromRectVertexShaderCode[] = R"(#version 410 core
uniform vec2 MaxUV;

layout(location = 0) in vec4 vPosition;
layout(location = 1) in vec2 vUV;

out vec2 uv;

void main() {
  gl_Position = vPosition;
  uv = vUV;
  uv = uv * MaxUV;
}
)";

static const char _blitFromRectFragmentShaderCode[] = R"(#version 410 core
uniform sampler2DRect InputTexture;

in vec2 uv;

out vec4 fragColor;

void main() {
  fragColor = texture(InputTexture, uv);
}
)";

static const char _blitFromTex2DVertexShaderCode[] = R"(#version 410 core
uniform vec2 MaxUV;

layout(location = 0) in vec4 vPosition;
layout(location = 1) in vec2 vUV;

out vec2 uv;

void main() {
  gl_Position = vPosition;
  uv = vUV;
  uv = uv * MaxUV;
}
)";

static const char _blitFromTex2DFragmentShaderCode[] = R"(#version 410 core
uniform sampler2D InputTexture;

in vec2 uv;

out vec4 fragColor;

void main() {
  fragColor = texture(InputTexture, uv);
}
)";

inline FFGLTexCoords GetMaxGLTexCoords2D(const FFGLTextureStruct &t) {
  FFGLTexCoords texCoords;
  texCoords.s = (GLfloat)t.Width / (GLfloat)t.HardwareWidth;
  texCoords.t = (GLfloat)t.Height / (GLfloat)t.HardwareHeight;
  return texCoords;
}

inline FFGLTexCoords GetMaxGLTexCoordsRect(const FFGLTextureStruct &t) {
  FFGLTexCoords texCoords;
  texCoords.s = (GLfloat)t.Width;
  texCoords.t = (GLfloat)t.Height;
  return texCoords;
}

class NanoPlugin : public CFFGLPlugin {
public:
  void init_plugin();
  void map_params(EvalContext &ctx);
  void setup_resources(EvalContext &ctx, ResourceState *outputRes,
                       const std::vector<ResourceState *> &inputRes);

public:
  NanoPlugin() : CFFGLPlugin() {
    // Explicitly initialize hostTime (FFGL SDK does NOT guarantee initialization)
    hostTime = 0.0;

    SetMinInputs(MIN_INPUTS);
    SetMaxInputs(MAX_INPUTS);

    init_plugin();

#ifdef INTERNAL_RESOURCE_COUNT
    _internalResources.resize(INTERNAL_RESOURCE_COUNT);
#endif

    _device = MTLCreateSystemDefaultDevice();
    _commandQueue = [_device newCommandQueue];

    // Note: InteropTexture no longer is an ObjC class bundle reference, so we
    // can't bundleForClass But we still need the default.metallib. It should be
    // in the main bundle.
    NSBundle *bundle = [NSBundle mainBundle];
    // Or if we need the bundle corresponding to the plugin, we might need a
    // different approach if we aren't using a class But since this code runs
    // INSIDE the bundle, mainBundle might be the host app? Usually [NSBundle
    // bundleForClass:[self class]] works if NanoPlugin was an ObjC class, but
    // it's C++. We can use dladdr to find the bundle.

    Dl_info info;
    // Use func_main as a symbol reference since PluginInfo is not yet defined
    if (dladdr((const void *)&func_main, &info)) {
      bundle = [NSBundle
          bundleWithPath:[[NSString stringWithUTF8String:info.dli_fname]
                             stringByDeletingLastPathComponent]];
      NSString *execPath = [NSString stringWithUTF8String:info.dli_fname];
      NSString *bundlePath = [[[execPath stringByDeletingLastPathComponent]
          stringByDeletingLastPathComponent] stringByDeletingLastPathComponent];
      bundle = [NSBundle bundleWithPath:bundlePath];
    }

    NSError *error = nil;
    _library = [_device newDefaultLibraryWithBundle:bundle error:&error];
    if (!_library) {
      NSURL *libUrl = [bundle URLForResource:@"default"
                               withExtension:@"metallib"];
      if (libUrl) {
        _library = [_device newLibraryWithURL:libUrl error:&error];
      }
    }
  }

  ~NanoPlugin() {
    _blitShader.Free();
    _blitShader2D.Free();
    _screenQuad.Free();
  }

  FFResult InitGL(const FFGLViewportStruct *vp) override {
    _currentViewport = *vp;
    bool ok1 = _blitShader.Compile(_blitFromRectVertexShaderCode,
                                   _blitFromRectFragmentShaderCode);
    bool ok2 = _blitShader2D.Compile(_blitFromTex2DVertexShaderCode,
                                     _blitFromTex2DFragmentShaderCode);
    _screenQuad.Initialise();

    return CFFGLPlugin::InitGL(vp);
  }

  FFResult DeInitGL() override {
    _blitShader.Free();
    _blitShader2D.Free();
    _screenQuad.Free();
    _inputInterops.clear();
    _interopTexture.reset();
    return FF_SUCCESS;
  }

  FFResult Resize(const FFGLViewportStruct *vp) override {
    _currentViewport = *vp;
    return CFFGLPlugin::Resize(vp);
  }

  FFResult ProcessOpenGL(ProcessOpenGLStruct *pGL) override {
    if (pGL->numInputTextures < 1 && PLUGIN_TYPE != FF_SOURCE) {
      return FF_SUCCESS;
    }

    // Use current viewport size for internal output orchestration
    unsigned int targetWidth = _currentViewport.width;
    unsigned int targetHeight = _currentViewport.height;

    // Updated: using C++ unique_ptr instead of ObjC alloc init
    if (!_interopTexture || _interopTexture->getWidth() != targetWidth ||
        _interopTexture->getHeight() != targetHeight) {
      _interopTexture = std::make_unique<InteropTexture>(
          _device, [NSOpenGLContext currentContext], true,
          MTLPixelFormatBGRA8Unorm, targetWidth, targetHeight);
    }

    // Force HostFBO binding if provided
    glBindFramebuffer(GL_FRAMEBUFFER,
                      pGL->HostFBO); // AGGRESSIVE STATE RESET for blitting
    glDisable(GL_DEPTH_TEST);
    glDisable(GL_CULL_FACE);
    glDisable(GL_BLEND);
    glDisable(GL_SCISSOR_TEST); // Ensure we draw to full FBO
    glDisable(GL_STENCIL_TEST);
    glDepthMask(GL_FALSE);
    glColorMask(GL_TRUE, GL_TRUE, GL_TRUE, GL_TRUE);

    // 1. Manage input interops using ACTIVE dimensions to avoid stretch
    if (_inputInterops.size() < pGL->numInputTextures) {
      _inputInterops.resize(pGL->numInputTextures);
    }
    for (unsigned int i = 0; i < pGL->numInputTextures && i < MAX_INPUTS; ++i) {
      if (pGL->inputTextures[i] != nullptr) {
        const auto *pInput = pGL->inputTextures[i];

        // Use ACTIVE width/height for our internal Metal processing
        unsigned int activeW = pInput->Width;
        unsigned int activeH = pInput->Height;

        if (!_inputInterops[i] || _inputInterops[i]->getWidth() != activeW ||
            _inputInterops[i]->getHeight() != activeH) {
          _inputInterops[i] = std::make_unique<InteropTexture>(
              _device, [NSOpenGLContext currentContext], true,
              MTLPixelFormatBGRA8Unorm, activeW, activeH);
        }

        // Blit host -> interop (1:1 active area)
        {
          GLenum target = GL_TEXTURE_RECTANGLE;
          // Intelligent Target Detection:
          if (pInput->HardwareWidth > pInput->Width ||
              pInput->HardwareHeight > pInput->Height) {
            target = GL_TEXTURE_2D;
          }

          auto &activeShader =
              (target == GL_TEXTURE_2D) ? _blitShader2D : _blitShader;

          native_gl::ScopedFBO fboBinding(_inputInterops[i]->getOpenGLFBO());
          native_gl::ScopedShader shaderBinding(activeShader.program);
          native_gl::ScopedSampler activateSampler(0);
          native_gl::ScopedTexture textureBinding(target, pInput->Handle);

          glTexParameteri(target, GL_TEXTURE_MIN_FILTER,
                          GL_LINEAR); // Use Linear for quality
          glTexParameteri(target, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

          activeShader.SetInt("InputTexture", 0);

          FFGLTexCoords maxCoords;
          if (target == GL_TEXTURE_2D) {
            maxCoords = GetMaxGLTexCoords2D(*pInput);
          } else {
            maxCoords = GetMaxGLTexCoordsRect(*pInput);
          }
          activeShader.SetVec2("MaxUV", maxCoords.s, maxCoords.t);

          glDisable(GL_BLEND);
          _screenQuad.Draw();
        }
      }
    }
    glFlush();

    EvalContext ctx;
    ctx.initMetal(_device, _commandQueue, _library);
    map_params(ctx);

    ResourceState outputState;
    outputState.width = targetWidth;
    outputState.height = targetHeight;
    outputState.isExternal = true;
    outputState.externalTexture = _interopTexture->getMetalTexture();

    std::vector<std::unique_ptr<ResourceState>> inputStates;
    std::vector<ResourceState *> inputPtrs;
    for (unsigned int i = 0; i < pGL->numInputTextures && i < MAX_INPUTS; ++i) {
      if (_inputInterops[i] != nullptr) {
        auto inputState = std::make_unique<ResourceState>();
        inputState->width = _inputInterops[i]->getWidth();
        inputState->height = _inputInterops[i]->getHeight();
        inputState->isExternal = true;
        inputState->externalTexture = _inputInterops[i]->getMetalTexture();
        inputPtrs.push_back(inputState.get());
        inputStates.push_back(std::move(inputState));
      }
    }

    setup_resources(ctx, &outputState, inputPtrs);

    // Inject time builtins from FFGL host
    // FFGL hostTime is in milliseconds — convert to seconds
    double currentHostTime = hostTime / 1000.0;
    if (!_timeInitialized) {
      _startHostTime = currentHostTime;
      _prevHostTime = currentHostTime;
      _timeInitialized = true;
    }
    double rawDelta = currentHostTime - _prevHostTime;
    // Clamp delta_time to prevent diffusion explosion from time jumps
    double clampedDelta = std::max(0.0, std::min(rawDelta, 0.1));
    ctx.inputs["time"] = static_cast<float>(currentHostTime - _startHostTime);
    ctx.inputs["delta_time"] = static_cast<float>(clampedDelta);
    _prevHostTime = currentHostTime;

    func_main(ctx);
    ctx.blitStagingToExternal();

    // Blit IOSurface output to host FBO
    {
      GLint prevReadFBO = 0, prevDrawFBO = 0;
      glGetIntegerv(GL_READ_FRAMEBUFFER_BINDING, &prevReadFBO);
      glGetIntegerv(GL_DRAW_FRAMEBUFFER_BINDING, &prevDrawFBO);

      glBindFramebuffer(GL_READ_FRAMEBUFFER, _interopTexture->getOpenGLFBO());
      glBindFramebuffer(GL_DRAW_FRAMEBUFFER, pGL->HostFBO);
      // Source Y is flipped: IOSurface has Metal's top-left origin, GL expects bottom-left.
      glBlitFramebuffer(
          0, targetHeight, targetWidth, 0,
          0, 0, targetWidth, targetHeight,
          GL_COLOR_BUFFER_BIT, GL_NEAREST);

      glBindFramebuffer(GL_READ_FRAMEBUFFER, prevReadFBO);
      glBindFramebuffer(GL_DRAW_FRAMEBUFFER, prevDrawFBO);
    }

    return FF_SUCCESS;
  }

  FFResult SetFloatParameter(unsigned int index, float value) override {
    _params[index] = value;
    return FF_SUCCESS;
  }

  float GetFloatParameter(unsigned int index) override {
    return _params[index];
  }

  FFResult SetTextParameter(unsigned int index, const char *value) override {
    return FF_SUCCESS;
  }

  char *GetTextParameter(unsigned int index) override { return (char *)""; }

private:
  id<MTLDevice> _device;
  id<MTLCommandQueue> _commandQueue;
  id<MTLLibrary> _library;
  std::unique_ptr<InteropTexture> _interopTexture;
  FFGLViewportStruct _currentViewport = {0, 0, 640, 480};

  std::map<unsigned int, float> _params;

  native_gl::GLShader _blitShader;
  native_gl::GLShader _blitShader2D;
  native_gl::GLQuad _screenQuad;

  std::vector<std::unique_ptr<InteropTexture>> _inputInterops;

  std::vector<ResourceState> _internalResources;

  double _startHostTime = 0;
  double _prevHostTime = 0;
  bool _timeInitialized = false;
};

// Include generated code
#define PLUGIN_CLASS NanoPlugin
#include "generated/logic.cpp"
#undef PLUGIN_CLASS

static CFFGLPluginInfo PluginInfo(PluginFactory<NanoPlugin>, PLUGIN_CODE,
                                  PLUGIN_NAME,
                                  2, // API Major
                                  1, // API Minor
                                  1, // Plugin Major
                                  0, // Plugin Minor
                                  PLUGIN_TYPE, "Nano FFGL Plugin", "Nano FFGL");
`,h=`/*
Implemenation of class representing a texture shared between OpenGL and Metal
*/
#import "InteropTexture.h"
#include <iostream>

typedef struct AAPLTextureFormatInfo {
  int cvPixelFormat;
  MTLPixelFormat mtlFormat;
  GLuint glInternalFormat;
  GLuint glFormat;
  GLuint glType;
} AAPLTextureFormatInfo;

// Table of equivalent formats across CoreVideo, Metal, and OpenGL
static const AAPLTextureFormatInfo AAPLInteropFormatTable[] = {
    // Core Video Pixel Format,               Metal Pixel Format,            GL
    // internalformat, GL format,   GL type
    {kCVPixelFormatType_32BGRA, MTLPixelFormatBGRA8Unorm, GL_RGBA, GL_BGRA_EXT,
     GL_UNSIGNED_INT_8_8_8_8_REV},
#if TARGET_IOS
    {kCVPixelFormatType_32BGRA, MTLPixelFormatBGRA8Unorm_sRGB, GL_RGBA,
     GL_BGRA_EXT, GL_UNSIGNED_INT_8_8_8_8_REV},
#else
    {kCVPixelFormatType_ARGB2101010LEPacked, MTLPixelFormatBGR10A2Unorm,
     GL_RGB10_A2, GL_BGRA, GL_UNSIGNED_INT_2_10_10_10_REV},
    {kCVPixelFormatType_32BGRA, MTLPixelFormatBGRA8Unorm_sRGB, GL_SRGB8_ALPHA8,
     GL_BGRA, GL_UNSIGNED_INT_8_8_8_8_REV},
    {kCVPixelFormatType_64RGBAHalf, MTLPixelFormatRGBA16Float, GL_RGBA, GL_RGBA,
     GL_HALF_FLOAT},
#endif
};

static const NSUInteger AAPLNumInteropFormats =
    sizeof(AAPLInteropFormatTable) / sizeof(AAPLTextureFormatInfo);

const AAPLTextureFormatInfo *const
textureFormatInfoFromMetalPixelFormat(MTLPixelFormat pixelFormat) {
  for (int i = 0; i < AAPLNumInteropFormats; i++) {
    if (pixelFormat == AAPLInteropFormatTable[i].mtlFormat) {
      return &AAPLInteropFormatTable[i];
    }
  }
  return NULL;
}

InteropTexture::InteropTexture(id<MTLDevice> mtlDevice,
                               PlatformGLContext *glContext,
                               bool createOpenGLFBO,
                               MTLPixelFormat mtlPixelFormat, int width,
                               int height)
    : _metalDevice(mtlDevice), _openGLContext(glContext),
      _createOpenGLFBO(createOpenGLFBO), _width(width), _height(height) {
  _formatInfo = textureFormatInfoFromMetalPixelFormat(mtlPixelFormat);
  if (!_formatInfo) {
    std::cerr << "Metal Format supplied not supported in this sample"
              << std::endl;
    return;
  }

  _CGLPixelFormat = _openGLContext.pixelFormat.CGLPixelFormatObj;

  NSDictionary *cvBufferProperties = @{
    (__bridge NSString *)kCVPixelBufferOpenGLCompatibilityKey : @YES,
    (__bridge NSString *)kCVPixelBufferMetalCompatibilityKey : @YES,
    (__bridge NSString *)kCVPixelBufferIOSurfaceOpenGLFBOCompatibilityKey :
        @YES, // Important for FBO
    (__bridge NSString *)
    kCVPixelBufferIOSurfaceOpenGLTextureCompatibilityKey : @YES,
  };

  CVReturn cvret = CVPixelBufferCreate(
      kCFAllocatorDefault, width, height, _formatInfo->cvPixelFormat,
      (__bridge CFDictionaryRef)cvBufferProperties, &_CVPixelBuffer);

  if (cvret != kCVReturnSuccess) {
    std::cerr << "Failed to create CVPixelBuffer: " << cvret << std::endl;
    return;
  }

  createGLTexture();
  createMetalTexture();
}

InteropTexture::~InteropTexture() {
  if (_openGLFBO) {
    glDeleteFramebuffers(1, &_openGLFBO);
  }

  if (_metalTexture) {
    _metalTexture =
        nil; // ARC will handle this? Yes for ObjC properties, but raw pointers?
             // Wait, members are id<MTLTexture>, so ARC handles them.
  }

  // Release CoreVideo resources explicitly!
  if (_CVMTLTexture)
    CFRelease(_CVMTLTexture);
  if (_CVMTLTextureCache)
    CFRelease(_CVMTLTextureCache);

  if (_CVGLTexture)
    CFRelease(_CVGLTexture);
  if (_CVGLTextureCache)
    CFRelease(_CVGLTextureCache);

  if (_CVPixelBuffer)
    CVPixelBufferRelease(_CVPixelBuffer);
}

/**
 On macOS, create an OpenGL texture and retrieve an OpenGL texture name using
 the following steps, and as annotated in the code listings below:
 */
void InteropTexture::createGLTexture() {
  CVReturn cvret;
  // 1. Create an OpenGL CoreVideo texture cache from the pixel buffer.
  cvret = CVOpenGLTextureCacheCreate(kCFAllocatorDefault, nil,
                                     _openGLContext.CGLContextObj,
                                     _CGLPixelFormat, nil, &_CVGLTextureCache);

  if (cvret != kCVReturnSuccess) {
    std::cerr << "Failed to create OpenGL Texture Cache" << std::endl;
    return;
  }

  // 2. Create a CVPixelBuffer-backed OpenGL texture image from the texture
  // cache.
  cvret = CVOpenGLTextureCacheCreateTextureFromImage(
      kCFAllocatorDefault, _CVGLTextureCache, _CVPixelBuffer, nil,
      &_CVGLTexture);

  if (cvret != kCVReturnSuccess) {
    std::cerr << "Failed to create OpenGL Texture From Image" << std::endl;
    return;
  }

  // 3. Get an OpenGL texture name from the CVPixelBuffer-backed OpenGL texture
  // image.
  _openGLTexture = CVOpenGLTextureGetName(_CVGLTexture);

  if (_createOpenGLFBO) {
    GLint previousDrawFboID;
    GLint previosReadFboID;
    glGetIntegerv(GL_DRAW_FRAMEBUFFER_BINDING, &previousDrawFboID);
    glGetIntegerv(GL_READ_FRAMEBUFFER_BINDING, &previosReadFboID);

    glGenFramebuffers(1, &_openGLFBO);
    glBindFramebuffer(GL_FRAMEBUFFER, _openGLFBO);
    glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0,
                           GL_TEXTURE_RECTANGLE, _openGLTexture, 0);

    glBindFramebuffer(GL_DRAW_FRAMEBUFFER, previousDrawFboID);
    glBindFramebuffer(GL_READ_FRAMEBUFFER, previosReadFboID);
  }
}

/**
 Create a Metal texture from the CoreVideo pixel buffer using the following
 steps, and as annotated in the code listings below:
 */
void InteropTexture::createMetalTexture() {
  CVReturn cvret;
  // 1. Create a Metal Core Video texture cache from the pixel buffer.
  cvret = CVMetalTextureCacheCreate(kCFAllocatorDefault, nil, _metalDevice, nil,
                                    &_CVMTLTextureCache);

  if (cvret != kCVReturnSuccess) {
    std::cerr << "Failed to create Metal texture cache" << std::endl;
    return;
  }

  // 2. Create a CoreVideo pixel buffer backed Metal texture image from the
  // texture cache.

  cvret = CVMetalTextureCacheCreateTextureFromImage(
      kCFAllocatorDefault, _CVMTLTextureCache, _CVPixelBuffer, nil,
      _formatInfo->mtlFormat, _width, _height, 0, &_CVMTLTexture);

  if (cvret != kCVReturnSuccess) {
    std::cerr << "Failed to create CoreVideo Metal texture from image"
              << std::endl;
    return;
  }

  // 3. Get a Metal texture using the CoreVideo Metal texture reference.
  _metalTexture = CVMetalTextureGetTexture(_CVMTLTexture);

  if (!_metalTexture) {
    std::cerr << "Failed to create Metal texture CoreVideo Metal Texture"
              << std::endl;
  }
}
`,g=`/*
Implemenation of class representing a texture shared between OpenGL and Metal
*/

#pragma once

#import <CoreVideo/CoreVideo.h>
#import <Foundation/Foundation.h>
#import <Metal/Metal.h>
#import <OpenGL/OpenGL.h>
#import <OpenGL/gl.h>
#import <OpenGL/gl3.h>

#import <AppKit/AppKit.h>
#define PlatformGLContext NSOpenGLContext

struct AAPLTextureFormatInfo;

class InteropTexture {
public:
  InteropTexture(id<MTLDevice> mtlDevice, PlatformGLContext *glContext,
                 bool createOpenGLFBO, MTLPixelFormat mtlPixelFormat, int width,
                 int height);
  ~InteropTexture();

  id<MTLTexture> getMetalTexture() const { return _metalTexture; }
  GLuint getOpenGLTexture() const { return _openGLTexture; }
  GLuint getOpenGLFBO() const { return _openGLFBO; }
  int getWidth() const { return _width; }
  int getHeight() const { return _height; }

private:
  void createGLTexture();
  void createMetalTexture();

  id<MTLDevice> _metalDevice = nil;
  PlatformGLContext *_openGLContext = nil;

  int _width;
  int _height;
  bool _createOpenGLFBO;

  id<MTLTexture> _metalTexture = nil;
  GLuint _openGLTexture = 0;
  GLuint _openGLFBO = 0;

  // Internal resources
  const AAPLTextureFormatInfo *_formatInfo = nullptr;
  CVPixelBufferRef _CVPixelBuffer = nullptr;
  CVMetalTextureRef _CVMTLTexture = nullptr;
  CVMetalTextureCacheRef _CVMTLTextureCache = nullptr;

  CVOpenGLTextureCacheRef _CVGLTextureCache = nullptr;
  CVOpenGLTextureRef _CVGLTexture = nullptr;
  CGLPixelFormatObj _CGLPixelFormat = nullptr;
};
`,I=`
// Bit-cast helpers for packing int32 into float32 storage (preserves bit pattern).
// Used by atomic counters: CPU stores int bits as float, GPU reads via atomic_int*.
inline float int_bits_to_float(int v) { float f; std::memcpy(&f, &v, 4); return f; }
inline int float_bits_to_int(float f) { int v; std::memcpy(&v, &f, 4); return v; }

// PRNG hash (lowbias32)
inline int _prng_hash(int x_in) {
  uint32_t x = static_cast<uint32_t>(x_in);
  x ^= x >> 16u;
  x *= 0x45d9f3bu;
  x ^= x >> 16u;
  x *= 0x45d9f3bu;
  x ^= x >> 16u;
  return static_cast<int>(x);
}
inline float _prng_hash_to_float(int x) {
  return static_cast<float>(static_cast<uint32_t>(_prng_hash(x))) / 4294967295.0f;
}

template <typename T, typename F> inline auto applyUnary(T val, F fn) {
  return fn(val);
}

template <typename T, size_t N, typename F>
inline std::array<T, N> applyUnary(const std::array<T, N> &val, F fn) {
  std::array<T, N> result;
  for (size_t i = 0; i < N; ++i)
    result[i] = fn(val[i]);
  return result;
}

template <typename T, typename F> inline auto applyBinary(T a, T b, F fn) {
  return fn(a, b);
}

template <typename T, size_t N, typename F>
inline std::array<T, N> applyBinary(const std::array<T, N> &a,
                                    const std::array<T, N> &b, F fn) {
  std::array<T, N> result;
  for (size_t i = 0; i < N; ++i)
    result[i] = fn(a[i], b[i]);
  return result;
}

template <typename T, size_t N, typename F>
inline std::array<T, N> applyBinary(const std::array<T, N> &a, T b, F fn) {
  std::array<T, N> result;
  for (size_t i = 0; i < N; ++i)
    result[i] = fn(a[i], b);
  return result;
}

template <typename T, size_t N, typename F>
inline std::array<T, N> applyBinary(T a, const std::array<T, N> &b, F fn) {
  std::array<T, N> result;
  for (size_t i = 0; i < N; ++i)
    result[i] = fn(a, b[i]);
  return result;
}

template <typename T, size_t N>
inline T vec_dot(const std::array<T, N> &a, const std::array<T, N> &b) {
  T sum = 0;
  for (size_t i = 0; i < N; ++i)
    sum += a[i] * b[i];
  return sum;
}

template <typename T, size_t N> inline T vec_length(const std::array<T, N> &v) {
  return std::sqrt(vec_dot(v, v));
}

template <typename T, size_t N>
inline std::array<T, N> vec_normalize(const std::array<T, N> &v) {
  T len = vec_length(v);
  std::array<T, N> result;
  for (size_t i = 0; i < N; ++i)
    result[i] = len > 0 ? v[i] / len : 0;
  return result;
}

// Element-wise math function overloads for std::array
#define DEFINE_ELEMENTWISE_UNARY(NAME, FN)                                     \\
  template <typename T, size_t N>                                              \\
  inline std::array<T, N> NAME(const std::array<T, N> &v) {                    \\
    std::array<T, N> result;                                                   \\
    for (size_t i = 0; i < N; ++i)                                             \\
      result[i] = FN(v[i]);                                                    \\
    return result;                                                             \\
  }

#define DEFINE_ELEMENTWISE_BINARY(NAME, FN)                                    \\
  template <typename T, size_t N>                                              \\
  inline std::array<T, N> NAME(const std::array<T, N> &a,                      \\
                               const std::array<T, N> &b) {                    \\
    std::array<T, N> result;                                                   \\
    for (size_t i = 0; i < N; ++i)                                             \\
      result[i] = FN(a[i], b[i]);                                              \\
    return result;                                                             \\
  }                                                                            \\
  template <typename T, size_t N>                                              \\
  inline std::array<T, N> NAME(const std::array<T, N> &a, T b) {               \\
    std::array<T, N> result;                                                   \\
    for (size_t i = 0; i < N; ++i)                                             \\
      result[i] = FN(a[i], b);                                                 \\
    return result;                                                             \\
  }                                                                            \\
  template <typename T, size_t N>                                              \\
  inline std::array<T, N> NAME(T a, const std::array<T, N> &b) {               \\
    std::array<T, N> result;                                                   \\
    for (size_t i = 0; i < N; ++i)                                             \\
      result[i] = FN(a, b[i]);                                                 \\
    return result;                                                             \\
  }

namespace elem {
DEFINE_ELEMENTWISE_UNARY(abs, std::abs)
DEFINE_ELEMENTWISE_UNARY(sin, std::sin)
DEFINE_ELEMENTWISE_UNARY(cos, std::cos)
DEFINE_ELEMENTWISE_UNARY(tan, std::tan)
DEFINE_ELEMENTWISE_UNARY(asin, std::asin)
DEFINE_ELEMENTWISE_UNARY(acos, std::acos)
DEFINE_ELEMENTWISE_UNARY(atan, std::atan)
DEFINE_ELEMENTWISE_UNARY(sinh, std::sinh)
DEFINE_ELEMENTWISE_UNARY(cosh, std::cosh)
DEFINE_ELEMENTWISE_UNARY(tanh, std::tanh)
DEFINE_ELEMENTWISE_UNARY(sqrt, std::sqrt)
DEFINE_ELEMENTWISE_UNARY(exp, std::exp)
DEFINE_ELEMENTWISE_UNARY(exp2, std::exp2)
DEFINE_ELEMENTWISE_UNARY(log, std::log)
DEFINE_ELEMENTWISE_UNARY(log2, std::log2)
DEFINE_ELEMENTWISE_UNARY(ceil, std::ceil)
DEFINE_ELEMENTWISE_UNARY(floor, std::floor)
DEFINE_ELEMENTWISE_UNARY(round, std::round)
DEFINE_ELEMENTWISE_UNARY(trunc, std::trunc)

DEFINE_ELEMENTWISE_BINARY(fmod, std::fmod)
DEFINE_ELEMENTWISE_BINARY(pow, std::pow)
DEFINE_ELEMENTWISE_BINARY(min, std::min)
DEFINE_ELEMENTWISE_BINARY(max, std::max)
DEFINE_ELEMENTWISE_BINARY(atan2, std::atan2)
} // namespace elem

// re-export into global namespace for simpler generated code
using elem::abs;
using elem::acos;
using elem::asin;
using elem::atan;
using elem::atan2;
using elem::ceil;
using elem::cos;
using elem::cosh;
using elem::exp;
using elem::exp2;
using elem::floor;
using elem::fmod;
using elem::log;
using elem::log2;
using elem::max;
using elem::min;
using elem::pow;
using elem::round;
using elem::sin;
using elem::sinh;
using elem::sqrt;
using elem::tan;
using elem::tanh;
using elem::trunc;

// Common vector aliases
template <typename T, size_t N>
inline T dot(const std::array<T, N> &a, const std::array<T, N> &b) {
  return vec_dot(a, b);
}

template <typename T, size_t N> inline T length(const std::array<T, N> &v) {
  return vec_length(v);
}

template <typename T, size_t N>
inline std::array<T, N> normalize(const std::array<T, N> &v) {
  return vec_normalize(v);
}

template <typename T, size_t N>
inline T distance(const std::array<T, N> &a, const std::array<T, N> &b) {
  return length(applyBinary(a, b, [](T x, T y) { return x - y; }));
}

template <typename T, size_t N>
inline std::array<T, N> cross(const std::array<T, N> &a,
                              const std::array<T, N> &b) {
  static_assert(N == 3, "Cross product only defined for 3-component vectors");
  return {a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2],
          a[0] * b[1] - a[1] * b[0]};
}

template <typename T, size_t N>
inline std::array<T, N> reflect(const std::array<T, N> &i,
                                const std::array<T, N> &n) {
  T d = 2 * vec_dot(i, n);
  std::array<T, N> result;
  for (size_t k = 0; k < N; ++k)
    result[k] = i[k] - d * n[k];
  return result;
}

// Matrix multiplication helpers
template <size_t R, size_t C, size_t K>
inline std::array<float, R * C>
mat_mul_impl(const std::array<float, R * K> &a,
             const std::array<float, K * C> &b) {
  std::array<float, R * C> result = {};
  for (size_t r = 0; r < R; ++r)
    for (size_t c = 0; c < C; ++c)
      for (size_t k = 0; k < K; ++k)
        result[r * C + c] += a[r * K + k] * b[k * C + c];
  return result;
}

// mat3x3 * mat3x3
inline std::array<float, 9> mat_mul(const std::array<float, 9> &a,
                                    const std::array<float, 9> &b) {
  return mat_mul_impl<3, 3, 3>(a, b);
}
// mat4x4 * mat4x4
inline std::array<float, 16> mat_mul(const std::array<float, 16> &a,
                                     const std::array<float, 16> &b) {
  return mat_mul_impl<4, 4, 4>(a, b);
}
// mat3x3 * vec3
inline std::array<float, 3> mat_mul(const std::array<float, 9> &m,
                                    const std::array<float, 3> &v) {
  std::array<float, 3> r = {};
  for (size_t i = 0; i < 3; ++i)
    for (size_t j = 0; j < 3; ++j)
      r[i] += m[j * 3 + i] * v[j]; // column-major: M[row,col] = m[col*3+row]
  return r;
}
// mat4x4 * vec4
inline std::array<float, 4> mat_mul(const std::array<float, 16> &m,
                                    const std::array<float, 4> &v) {
  std::array<float, 4> r = {};
  for (size_t i = 0; i < 4; ++i)
    for (size_t j = 0; j < 4; ++j)
      r[i] += m[j * 4 + i] * v[j]; // column-major: M[row,col] = m[col*4+row]
  return r;
}
// vec4 * mat4x4 (pre-multiplication)
inline std::array<float, 4> mat_mul(const std::array<float, 4> &v,
                                    const std::array<float, 16> &m) {
  std::array<float, 4> r = {};
  for (size_t i = 0; i < 4; ++i)
    for (size_t j = 0; j < 4; ++j)
      r[i] += v[j] * m[j * 4 + i];
  return r;
}

// Vector mix: a + (b - a) * t (scalar t)
template <typename T, size_t N>
inline std::array<T, N> vec_mix_impl(const std::array<T, N> &a,
                                     const std::array<T, N> &b, T t) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] + (b[i] - a[i]) * t;
  return r;
}
// Vector mix: a + (b - a) * t (vector t, element-wise)
template <typename T, size_t N>
inline std::array<T, N> vec_mix_impl(const std::array<T, N> &a,
                                     const std::array<T, N> &b,
                                     const std::array<T, N> &t) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] + (b[i] - a[i]) * t[i];
  return r;
}

// Matrix transpose
inline std::array<float, 9> mat_transpose(const std::array<float, 9> &m) {
  return {m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]};
}
inline std::array<float, 16> mat_transpose(const std::array<float, 16> &m) {
  return {m[0], m[4], m[8],  m[12], m[1], m[5], m[9],  m[13],
          m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]};
}

// Quaternion operations (xyzw layout)
inline std::array<float, 4> quat_mul(const std::array<float, 4> &a,
                                     const std::array<float, 4> &b) {
  float x1 = a[0], y1 = a[1], z1 = a[2], w1 = a[3];
  float x2 = b[0], y2 = b[1], z2 = b[2], w2 = b[3];
  return {w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2,
          w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2,
          w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2,
          w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2};
}

inline std::array<float, 3> quat_rotate(const std::array<float, 4> &q,
                                        const std::array<float, 3> &v) {
  float qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  float vx = v[0], vy = v[1], vz = v[2];
  float tx = 2.0f * (qy * vz - qz * vy);
  float ty = 2.0f * (qz * vx - qx * vz);
  float tz = 2.0f * (qx * vy - qy * vx);
  return {vx + qw * tx + (qy * tz - qz * ty),
          vy + qw * ty + (qz * tx - qx * tz),
          vz + qw * tz + (qx * ty - qy * tx)};
}

inline std::array<float, 4> quat_slerp(const std::array<float, 4> &a,
                                       const std::array<float, 4> &b_in,
                                       float t) {
  float ax = a[0], ay = a[1], az = a[2], aw = a[3];
  float bx = b_in[0], by = b_in[1], bz = b_in[2], bw = b_in[3];
  float cosHalfTheta = ax * bx + ay * by + az * bz + aw * bw;
  if (std::abs(cosHalfTheta) >= 1.0f)
    return a;
  if (cosHalfTheta < 0.0f) {
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
    cosHalfTheta = -cosHalfTheta;
  }
  float sinHalfTheta = std::sqrt(1.0f - cosHalfTheta * cosHalfTheta);
  if (std::abs(sinHalfTheta) < 0.001f) {
    return {ax * 0.5f + bx * 0.5f, ay * 0.5f + by * 0.5f, az * 0.5f + bz * 0.5f,
            aw * 0.5f + bw * 0.5f};
  }
  float halfTheta = std::acos(cosHalfTheta);
  float ratioA = std::sin((1.0f - t) * halfTheta) / sinHalfTheta;
  float ratioB = std::sin(t * halfTheta) / sinHalfTheta;
  return {ax * ratioA + bx * ratioB, ay * ratioA + by * ratioB,
          az * ratioA + bz * ratioB, aw * ratioA + bw * ratioB};
}

inline std::array<float, 16> quat_to_float4x4(const std::array<float, 4> &q) {
  float x = q[0], y = q[1], z = q[2], w = q[3];
  float x2 = x + x, y2 = y + y, z2 = z + z;
  float xx = x * x2, xy = x * y2, xz = x * z2;
  float yy = y * y2, yz = y * z2, zz = z * z2;
  float wx = w * x2, wy = w * y2, wz = w * z2;
  return {1 - (yy + zz),
          xy + wz,
          xz - wy,
          0,
          xy - wz,
          1 - (xx + zz),
          yz + wx,
          0,
          xz + wy,
          yz - wx,
          1 - (xx + yy),
          0,
          0,
          0,
          0,
          1};
}

// Arithmetic operator overloads for std::array (broadcasting)
template <typename T, size_t N>
inline std::array<T, N> operator+(const std::array<T, N> &a,
                                  const std::array<T, N> &b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] + b[i];
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator-(const std::array<T, N> &a,
                                  const std::array<T, N> &b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] - b[i];
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator*(const std::array<T, N> &a,
                                  const std::array<T, N> &b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] * b[i];
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator/(const std::array<T, N> &a,
                                  const std::array<T, N> &b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] / b[i];
  return r;
}
// Scalar broadcasting: array op scalar
template <typename T, size_t N>
inline std::array<T, N> operator+(const std::array<T, N> &a, T b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] + b;
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator-(const std::array<T, N> &a, T b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] - b;
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator*(const std::array<T, N> &a, T b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] * b;
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator/(const std::array<T, N> &a, T b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a[i] / b;
  return r;
}
// Scalar broadcasting: scalar op array
template <typename T, size_t N>
inline std::array<T, N> operator+(T a, const std::array<T, N> &b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a + b[i];
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator-(T a, const std::array<T, N> &b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a - b[i];
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator*(T a, const std::array<T, N> &b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a * b[i];
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> operator/(T a, const std::array<T, N> &b) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = a / b[i];
  return r;
}
// Unary negation
template <typename T, size_t N>
inline std::array<T, N> operator-(const std::array<T, N> &a) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = -a[i];
  return r;
}

// Clamp helper (works for scalars and arrays with broadcasting)
inline float clamp_val(float v, float lo, float hi) {
  return std::max(lo, std::min(hi, v));
}
template <typename T, size_t N>
inline std::array<T, N> clamp_val(const std::array<T, N> &v, T lo, T hi) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = std::max(lo, std::min(hi, v[i]));
  return r;
}
template <typename T, size_t N>
inline std::array<T, N> clamp_val(const std::array<T, N> &v,
                                  const std::array<T, N> &lo,
                                  const std::array<T, N> &hi) {
  std::array<T, N> r;
  for (size_t i = 0; i < N; ++i)
    r[i] = std::max(lo[i], std::min(hi[i], v[i]));
  return r;
}

// Resource state structure
struct ResourceState {
  std::vector<float> data;
  size_t width = 0;
  size_t height = 0;
  bool isExternal = false;
  id<MTLTexture> externalTexture = nil;
  id<MTLBuffer> retainedMetalBuffer = nil;   // Persistent GPU buffer across frames
  id<MTLTexture> retainedStagingTexture = nil; // Cached staging texture for external textures

  // Store a vector at the given index (vec stored as contiguous floats)
  template <size_t N>
  void storeVec(size_t idx, const std::array<float, N> &vec) {
    if (isExternal)
      return;
    size_t base = idx * N;
    if (base + N > data.size())
      data.resize(base + N);
    for (size_t i = 0; i < N; ++i)
      data[base + i] = vec[i];
  }

  // Load a vector from the given index
  template <size_t N> std::array<float, N> loadVec(size_t idx) const {
    if (isExternal)
      return;
    std::array<float, N> result = {};
    size_t base = idx * N;
    for (size_t i = 0; i < N && base + i < data.size(); ++i) {
      result[i] = data[base + i];
    }
    return result;
  }
};

// Context passed to generated code - includes Metal dispatch support
struct EvalContext {
  std::vector<ResourceState *> resources;

  // IR global inputs (for input inheritance)
  std::unordered_map<std::string, float> inputs;

  // Metal infrastructure
  id<MTLDevice> device = nil;
  id<MTLLibrary> library = nil;
  id<MTLCommandQueue> commandQueue = nil;
  std::unordered_map<std::string, id<MTLComputePipelineState>> pipelines;
  std::vector<id<MTLBuffer>> metalBuffers;

  // Texture support
  std::vector<bool> isTextureResource;
  std::vector<int> texWidths;
  std::vector<int> texHeights;
  std::vector<id<MTLTexture>> metalTextures;

  // Staging textures: for external (IOSurface-backed) textures that may lack
  // MTLTextureUsageShaderWrite, we create internal staging textures with full
  // usage and blit results to the external texture after GPU work completes.
  std::vector<id<MTLTexture>> stagingTextures;

  // Sampler configuration per texture: 0=repeat, 1=clamp
  std::vector<int> texWrapModes;
  std::vector<id<MTLSamplerState>> metalSamplers;

  // Deferred synchronization support
  id<MTLCommandBuffer> pendingCmdBuffer = nil;

  void waitForPendingCommands() {
    if (pendingCmdBuffer) {
      [pendingCmdBuffer waitUntilCompleted];
      pendingCmdBuffer = nil;
    }
    blitStagingToExternal();
    syncFromMetal();
  }

  // Copy staging texture contents to external (IOSurface-backed) textures.
  // This is needed because IOSurface textures may lack ShaderWrite usage,
  // so we render into a staging texture and blit the result.
  void blitStagingToExternal() {
    bool needsBlit = false;
    for (size_t i = 0; i < resources.size(); ++i) {
      if (i < stagingTextures.size() && stagingTextures[i] != nil &&
          resources[i]->isExternal && resources[i]->externalTexture) {
        needsBlit = true;
        break;
      }
    }
    if (!needsBlit) return;

    id<MTLCommandBuffer> cmdBuffer = [commandQueue commandBuffer];
    id<MTLBlitCommandEncoder> blit = [cmdBuffer blitCommandEncoder];
    for (size_t i = 0; i < resources.size(); ++i) {
      if (i < stagingTextures.size() && stagingTextures[i] != nil &&
          resources[i]->isExternal && resources[i]->externalTexture) {
        int w = stagingTextures[i].width;
        int h = stagingTextures[i].height;
        [blit copyFromTexture:stagingTextures[i]
                  sourceSlice:0
                  sourceLevel:0
                 sourceOrigin:MTLOriginMake(0, 0, 0)
                   sourceSize:MTLSizeMake(w, h, 1)
                    toTexture:resources[i]->externalTexture
             destinationSlice:0
             destinationLevel:0
            destinationOrigin:MTLOriginMake(0, 0, 0)];
      }
    }
    [blit endEncoding];
    [cmdBuffer commit];
    [cmdBuffer waitUntilScheduled];
  }

  ResourceState *getResource(size_t idx) {
    return idx < resources.size() ? resources[idx] : nullptr;
  }

  // Action log (resize, dispatch, etc.)
  struct LogAction {
    std::string type;
    std::string target;
    int width = 0;
    int height = 0;
  };
  std::vector<LogAction> actionLog;

  // Return value storage (for func_return)
  std::vector<float> returnValue;

  void setReturnValue(float val) { returnValue = {val}; }
  void setReturnValue(int val) { returnValue = {static_cast<float>(val)}; }

  template <size_t N> void setReturnValue(const std::array<float, N> &val) {
    returnValue.assign(val.begin(), val.end());
  }

  template <size_t N> void setReturnValue(const std::array<int, N> &val) {
    returnValue.resize(N);
    for (size_t i = 0; i < N; i++) returnValue[i] = static_cast<float>(val[i]);
  }

  void resizeResource(size_t idx, int newSize, int stride, bool clearData) {
    if (idx < resources.size()) {
      auto *res = resources[idx];
      if (res->isExternal)
        return;
      res->width = static_cast<size_t>(newSize);
      res->height = 1;
      size_t totalFloats =
          static_cast<size_t>(newSize) * static_cast<size_t>(stride);
      size_t newByteSize = totalFloats * sizeof(float);

      // GPU-to-GPU buffer copy when a retained GPU buffer exists
      if (res->retainedMetalBuffer != nil && device != nil) {
        id<MTLBuffer> newBuffer = resizeGpuBuffer(res->retainedMetalBuffer, newByteSize, clearData);
        res->retainedMetalBuffer = newBuffer;
        if (!metalBuffers.empty() && idx < metalBuffers.size()) {
          metalBuffers[idx] = newBuffer;
        }
      } else {
        metalBuffers.clear(); // Force syncToMetal() on next dispatch
      }

      // Always keep CPU data sized correctly (for metadata, syncFromMetal)
      if (clearData) {
        res->data.assign(totalFloats, 0.0f);
      } else {
        res->data.resize(totalFloats, 0.0f);
      }
      actionLog.push_back({"resize", "", newSize, 1});
    }
  }

  void resizeResource2D(size_t idx, int w, int h, bool clearData) {
    if (idx < resources.size()) {
      auto *res = resources[idx];
      if (res->isExternal)
        return;
      res->width = static_cast<size_t>(w);
      res->height = static_cast<size_t>(h);
      size_t total = static_cast<size_t>(w) * static_cast<size_t>(h);
      // For textures, RGBA = 4 floats per pixel
      bool isTex = idx < isTextureResource.size() && isTextureResource[idx];
      if (isTex)
        total *= 4;
      size_t newByteSize = total * sizeof(float);

      // GPU-to-GPU buffer copy when a retained GPU buffer exists
      if (res->retainedMetalBuffer != nil && device != nil) {
        id<MTLBuffer> newBuffer = resizeGpuBuffer(res->retainedMetalBuffer, newByteSize, clearData);
        res->retainedMetalBuffer = newBuffer;
        if (!metalBuffers.empty() && idx < metalBuffers.size()) {
          metalBuffers[idx] = newBuffer;
        }
      } else {
        metalBuffers.clear(); // Force syncToMetal() on next dispatch
      }

      // Always keep CPU data sized correctly (for metadata, syncFromMetal)
      if (clearData) {
        res->data.assign(total, 0.0f);
      } else {
        res->data.resize(total, 0.0f);
      }
      actionLog.push_back({"resize", "", w, h});
    }
  }

  void resizeResource2DWithClear(size_t idx, int w, int h,
                                 std::initializer_list<float> clearVal) {
    if (idx < resources.size()) {
      auto *res = resources[idx];
      res->width = static_cast<size_t>(w);
      res->height = static_cast<size_t>(h);
      size_t total = static_cast<size_t>(w) * static_cast<size_t>(h);
      bool isTex = idx < isTextureResource.size() && isTextureResource[idx];
      size_t elemSize = isTex ? 4 : 1;
      std::vector<float> pattern(clearVal);
      // Pad pattern to elemSize if needed
      while (pattern.size() < elemSize)
        pattern.push_back(0.0f);
      res->data.resize(total * elemSize);
      for (size_t i = 0; i < total; ++i) {
        for (size_t j = 0; j < elemSize && j < pattern.size(); ++j) {
          res->data[i * elemSize + j] = pattern[j];
        }
      }

      // CPU pattern data is authoritative — upload from CPU
      if (res->retainedMetalBuffer != nil && device != nil) {
        size_t byteSize = res->data.size() * sizeof(float);
        id<MTLBuffer> newBuffer =
            [device newBufferWithBytes:res->data.data()
                                length:std::max(byteSize, (size_t)sizeof(float))
                               options:MTLResourceStorageModeShared];
        res->retainedMetalBuffer = newBuffer;
        if (!metalBuffers.empty() && idx < metalBuffers.size()) {
          metalBuffers[idx] = newBuffer;
        }
      } else {
        metalBuffers.clear(); // Force syncToMetal() on next dispatch
      }
      actionLog.push_back({"resize", "", w, h});
    }
  }

  // Copy elements between buffers. stride = floats per typed element.
  // count = -1 means copy as many as fit.
  void copyBuffer(size_t srcIdx, size_t dstIdx, int stride, int srcOffset, int dstOffset, int count) {
    if (srcIdx >= resources.size() || dstIdx >= resources.size()) return;
    auto *srcRes = resources[srcIdx];
    auto *dstRes = resources[dstIdx];

    // GPU path: use Metal blit when Metal buffers exist
    if (!metalBuffers.empty() && srcIdx < metalBuffers.size() && dstIdx < metalBuffers.size()
        && metalBuffers[srcIdx] != nil && metalBuffers[dstIdx] != nil) {
      int srcElems = static_cast<int>(metalBuffers[srcIdx].length / (stride * sizeof(float)));
      int dstElems = static_cast<int>(metalBuffers[dstIdx].length / (stride * sizeof(float)));
      int maxFromSrc = srcElems - srcOffset;
      int maxToDst = dstElems - dstOffset;
      int actualCount = std::min(maxFromSrc, maxToDst);
      if (count >= 0) actualCount = std::min(actualCount, count);
      if (actualCount <= 0) return;
      size_t srcByteOff = srcOffset * stride * sizeof(float);
      size_t dstByteOff = dstOffset * stride * sizeof(float);
      size_t byteCount = actualCount * stride * sizeof(float);
      id<MTLCommandBuffer> cmdBuf = [commandQueue commandBuffer];
      id<MTLBlitCommandEncoder> blit = [cmdBuf blitCommandEncoder];
      [blit copyFromBuffer:metalBuffers[srcIdx] sourceOffset:srcByteOff
                  toBuffer:metalBuffers[dstIdx] destinationOffset:dstByteOff size:byteCount];
      [blit endEncoding];
      [cmdBuf commit];
      pendingCmdBuffer = cmdBuf;
      return;
    }

    // CPU fallback
    int srcElems = static_cast<int>(srcRes->data.size()) / stride;
    int dstElems = static_cast<int>(dstRes->data.size()) / stride;
    int maxFromSrc = srcElems - srcOffset;
    int maxToDst = dstElems - dstOffset;
    int actualCount = std::min(maxFromSrc, maxToDst);
    if (count >= 0) actualCount = std::min(actualCount, count);
    if (actualCount <= 0) return;
    for (int i = 0; i < actualCount; i++) {
      for (int j = 0; j < stride; j++) {
        dstRes->data[(dstOffset + i) * stride + j] = srcRes->data[(srcOffset + i) * stride + j];
      }
    }
  }

  // Sync a single Metal texture's data into the resource's CPU data vector.
  void syncTextureToData(size_t idx) {
    if (idx >= metalTextures.size() || metalTextures[idx] == nil) return;
    auto *res = resources[idx];
    int w = static_cast<int>(res->width);
    int h = static_cast<int>(res->height);
    size_t bytesPerRow = w * 4; // RGBA8 = 4 bytes per pixel
    std::vector<uint8_t> bytes(w * h * 4);
    MTLRegion region = MTLRegionMake2D(0, 0, w, h);
    [metalTextures[idx] getBytes:bytes.data()
                     bytesPerRow:bytesPerRow
                      fromRegion:region
                     mipmapLevel:0];
    res->data.resize(w * h * 4);
    for (size_t j = 0; j < bytes.size(); ++j) {
      res->data[j] = bytes[j] / 255.0f;
    }
  }

  // Sync a single resource's CPU data vector back to its Metal texture.
  void syncDataToTexture(size_t idx) {
    if (idx >= metalTextures.size() || metalTextures[idx] == nil) return;
    auto *res = resources[idx];
    int w = static_cast<int>(res->width);
    int h = static_cast<int>(res->height);
    size_t pixelCount = w * h;
    if (res->data.size() < pixelCount * 4) return;
    std::vector<uint8_t> bytes(pixelCount * 4);
    for (size_t j = 0; j < pixelCount * 4; ++j) {
      float v = std::max(0.0f, std::min(1.0f, res->data[j]));
      bytes[j] = static_cast<uint8_t>(v * 255.0f + 0.5f);
    }
    MTLRegion region = MTLRegionMake2D(0, 0, w, h);
    [metalTextures[idx] replaceRegion:region
                          mipmapLevel:0
                            withBytes:bytes.data()
                          bytesPerRow:w * 4];
  }

  // Copy/blit pixels between textures.
  // sampleMode: 0=direct, 1=nearest, 2=bilinear
  // Rects: sx, sy, sw, sh, dx, dy, dw, dh (-1 = use full texture dimension)
  void copyTexture(size_t srcIdx, size_t dstIdx,
                   float sx, float sy, float sw, float sh,
                   float dx, float dy, float dw, float dh,
                   int sampleMode, float alpha, bool normalized) {
    if (srcIdx >= resources.size() || dstIdx >= resources.size()) return;
    auto *srcRes = resources[srcIdx];
    auto *dstRes = resources[dstIdx];
    int srcW = static_cast<int>(srcRes->width);
    int srcH = static_cast<int>(srcRes->height);
    int dstW = static_cast<int>(dstRes->width);
    int dstH = static_cast<int>(dstRes->height);

    // Resolve rects
    int isx, isy, isw, ish, idx_, idy, idw, idh;
    if (sx < 0) { isx = 0; isy = 0; isw = srcW; ish = srcH; }
    else if (normalized) {
      isx = static_cast<int>(floorf(sx * srcW));
      isy = static_cast<int>(floorf(sy * srcH));
      isw = static_cast<int>(floorf(sw * srcW));
      ish = static_cast<int>(floorf(sh * srcH));
    } else {
      isx = static_cast<int>(floorf(sx)); isy = static_cast<int>(floorf(sy));
      isw = static_cast<int>(floorf(sw)); ish = static_cast<int>(floorf(sh));
    }
    if (dx < 0) { idx_ = 0; idy = 0; idw = dstW; idh = dstH; }
    else if (normalized) {
      idx_ = static_cast<int>(floorf(dx * dstW));
      idy = static_cast<int>(floorf(dy * dstH));
      idw = static_cast<int>(floorf(dw * dstW));
      idh = static_cast<int>(floorf(dh * dstH));
    } else {
      idx_ = static_cast<int>(floorf(dx)); idy = static_cast<int>(floorf(dy));
      idw = static_cast<int>(floorf(dw)); idh = static_cast<int>(floorf(dh));
    }

    if (alpha <= 0.0f) return;

    bool isSimpleCopy = (isw == idw && ish == idh && alpha >= 1.0f && sampleMode == 0);

    // GPU path: simple copy via Metal blit (no scaling, no alpha)
    if (isSimpleCopy && !metalTextures.empty()
        && srcIdx < metalTextures.size() && dstIdx < metalTextures.size()
        && metalTextures[srcIdx] != nil && metalTextures[dstIdx] != nil) {
      int copyW = std::min({isw, srcW - isx, dstW - idx_});
      int copyH = std::min({ish, srcH - isy, dstH - idy});
      if (copyW <= 0 || copyH <= 0) return;
      id<MTLCommandBuffer> cmdBuf = [commandQueue commandBuffer];
      id<MTLBlitCommandEncoder> blit = [cmdBuf blitCommandEncoder];
      [blit copyFromTexture:metalTextures[srcIdx] sourceSlice:0 sourceLevel:0
               sourceOrigin:MTLOriginMake(isx, isy, 0)
                 sourceSize:MTLSizeMake(copyW, copyH, 1)
                  toTexture:metalTextures[dstIdx] destinationSlice:0 destinationLevel:0
           destinationOrigin:MTLOriginMake(idx_, idy, 0)];
      [blit endEncoding];
      [cmdBuf commit];
      pendingCmdBuffer = cmdBuf;
      return;
    }

    // Complex case with Metal textures: wait for GPU, sync textures to CPU, do CPU copy, sync back
    if (!isSimpleCopy && !metalTextures.empty()
        && srcIdx < metalTextures.size() && dstIdx < metalTextures.size()
        && metalTextures[srcIdx] != nil && metalTextures[dstIdx] != nil) {
      if (pendingCmdBuffer) { [pendingCmdBuffer waitUntilCompleted]; pendingCmdBuffer = nil; }
      syncTextureToData(srcIdx);
      syncTextureToData(dstIdx);
      // Fall through to CPU sampling/compositing code below, then sync back
    }

    auto getSrcPixel = [&](int px, int py) -> std::array<float, 4> {
      int cx = std::max(0, std::min(srcW - 1, px));
      int cy = std::max(0, std::min(srcH - 1, py));
      size_t off = (cy * srcW + cx) * 4;
      if (off + 3 < srcRes->data.size()) {
        return {srcRes->data[off], srcRes->data[off+1], srcRes->data[off+2], srcRes->data[off+3]};
      }
      return {0, 0, 0, 0};
    };

    auto sampleBilinear = [&](float u, float v) -> std::array<float, 4> {
      float tx = u - 0.5f, ty = v - 0.5f;
      int x0 = static_cast<int>(floorf(tx)), y0 = static_cast<int>(floorf(ty));
      float fx = tx - x0, fy = ty - y0;
      auto s00 = getSrcPixel(x0, y0);
      auto s10 = getSrcPixel(x0+1, y0);
      auto s01 = getSrcPixel(x0, y0+1);
      auto s11 = getSrcPixel(x0+1, y0+1);
      std::array<float, 4> r;
      for (int c = 0; c < 4; c++) {
        float top = s00[c] * (1-fx) + s10[c] * fx;
        float bot = s01[c] * (1-fx) + s11[c] * fx;
        r[c] = top * (1-fy) + bot * fy;
      }
      return r;
    };

    bool needsSampling = sampleMode > 0 && (isw != idw || ish != idh);

    for (int py = 0; py < idh; py++) {
      for (int px = 0; px < idw; px++) {
        int dstX = idx_ + px;
        int dstY = idy + py;
        if (dstX < 0 || dstX >= dstW || dstY < 0 || dstY >= dstH) continue;

        std::array<float, 4> pixel;
        if (needsSampling) {
          float srcU = isx + (px + 0.5f) * isw / idw;
          float srcV = isy + (py + 0.5f) * ish / idh;
          if (sampleMode == 2) {
            pixel = sampleBilinear(srcU, srcV);
          } else {
            pixel = getSrcPixel(static_cast<int>(floorf(srcU)), static_cast<int>(floorf(srcV)));
          }
        } else {
          int srcX = isx + std::min(px, isw - 1);
          int srcY = isy + std::min(py, ish - 1);
          pixel = getSrcPixel(srcX, srcY);
        }

        size_t dstOff = (dstY * dstW + dstX) * 4;
        if (dstOff + 3 >= dstRes->data.size()) continue;

        if (alpha >= 1.0f) {
          dstRes->data[dstOff]   = pixel[0];
          dstRes->data[dstOff+1] = pixel[1];
          dstRes->data[dstOff+2] = pixel[2];
          dstRes->data[dstOff+3] = pixel[3];
        } else {
          float srcA = pixel[3] * alpha;
          float dA = dstRes->data[dstOff+3];
          float outA = srcA + dA * (1.0f - srcA);
          if (outA < 1e-5f) {
            dstRes->data[dstOff] = dstRes->data[dstOff+1] = dstRes->data[dstOff+2] = 0.0f;
          } else {
            for (int c = 0; c < 3; c++) {
              dstRes->data[dstOff+c] = (pixel[c] * srcA + dstRes->data[dstOff+c] * dA * (1.0f - srcA)) / outA;
            }
          }
          dstRes->data[dstOff+3] = outA;
        }
      }
    }

    // If we synced from Metal textures for complex copy, write result back
    if (!isSimpleCopy && !metalTextures.empty()
        && dstIdx < metalTextures.size() && metalTextures[dstIdx] != nil) {
      syncDataToTexture(dstIdx);
    }
  }

  float getInput(const std::string &name) {
    auto it = inputs.find(name);
    if (it != inputs.end())
      return it->second;
    return 0.0f;
  }

  // Create a new Metal buffer and optionally blit old data into it (GPU-to-GPU copy).
  // Serial queue ordering ensures the blit executes after any pending dispatch.
  id<MTLBuffer> resizeGpuBuffer(id<MTLBuffer> oldBuffer, size_t newByteSize, bool clearData) {
    size_t safeSize = std::max(newByteSize, (size_t)sizeof(float));
    id<MTLBuffer> newBuffer = [device newBufferWithLength:safeSize
                                                  options:MTLResourceStorageModeShared];
    if (!clearData && oldBuffer != nil && oldBuffer.length > 0 && newByteSize > 0) {
      size_t copySize = std::min((size_t)oldBuffer.length, newByteSize);
      id<MTLCommandBuffer> cmdBuf = [commandQueue commandBuffer];
      id<MTLBlitCommandEncoder> blit = [cmdBuf blitCommandEncoder];
      [blit copyFromBuffer:oldBuffer sourceOffset:0
                  toBuffer:newBuffer destinationOffset:0
                      size:copySize];
      [blit endEncoding];
      [cmdBuf commit];
      pendingCmdBuffer = cmdBuf;
    }
    return newBuffer;
  }

  // CPU-side texture sampling (for CPU functions that sample textures directly)
  // wrapMode: 0=repeat, 1=clamp, 2=mirror
  // filterMode: 0=nearest, 1=linear
  // elemStride: number of floats per texel (1 for R32F, 4 for RGBA8)
  std::array<float, 4> sampleTexture(size_t resIdx, float u, float v,
                                     int wrapMode, int filterMode,
                                     int elemStride) {
    if (resIdx >= resources.size())
      return {0, 0, 0, 0};
    auto *res = resources[resIdx];
    int w = static_cast<int>(res->width);
    int h = static_cast<int>(res->height);
    if (w <= 0 || h <= 0)
      return {0, 0, 0, 0};

    auto applyWrap = [](float coord, int mode) -> float {
      if (mode == 1) { // clamp
        return std::max(0.0f, std::min(1.0f, coord));
      } else if (mode == 2) { // mirror
        float c = fmod(coord, 2.0f);
        if (c < 0)
          c += 2.0f;
        return c > 1.0f ? 2.0f - c : c;
      } else { // repeat
        return coord - floorf(coord);
      }
    };

    auto getSample = [&](int x, int y) -> std::array<float, 4> {
      // Apply wrap in pixel space
      if (wrapMode == 1) { // clamp
        x = std::max(0, std::min(w - 1, x));
        y = std::max(0, std::min(h - 1, y));
      } else if (wrapMode == 0) { // repeat
        x = ((x % w) + w) % w;
        y = ((y % h) + h) % h;
      } else if (wrapMode == 2) { // mirror
        int mx = ((x % (2 * w)) + (2 * w)) % (2 * w);
        x = mx >= w ? 2 * w - 1 - mx : mx;
        int my = ((y % (2 * h)) + (2 * h)) % (2 * h);
        y = my >= h ? 2 * h - 1 - my : my;
      }
      size_t idx = y * w + x;
      std::array<float, 4> result = {0, 0, 0, 1};
      size_t base = idx * elemStride;
      for (int i = 0; i < elemStride && i < 4 && base + i < res->data.size();
           ++i) {
        result[i] = res->data[base + i];
      }
      // For single-channel textures, replicate to RGB
      if (elemStride == 1) {
        result[1] = result[0];
        result[2] = result[0];
        result[3] = 1.0f;
      }
      return result;
    };

    float wu = applyWrap(u, wrapMode);
    float wv = applyWrap(v, wrapMode);

    if (filterMode == 0) { // nearest
      int x = std::min(static_cast<int>(wu * w), w - 1);
      int y = std::min(static_cast<int>(wv * h), h - 1);
      return getSample(x, y);
    } else { // linear (bilinear)
      float tx = wu * w - 0.5f;
      float ty = wv * h - 0.5f;
      int x0 = static_cast<int>(floorf(tx));
      int y0 = static_cast<int>(floorf(ty));
      float fx = tx - x0;
      float fy = ty - y0;

      auto s00 = getSample(x0, y0);
      auto s10 = getSample(x0 + 1, y0);
      auto s01 = getSample(x0, y0 + 1);
      auto s11 = getSample(x0 + 1, y0 + 1);

      std::array<float, 4> result;
      for (int i = 0; i < 4; ++i) {
        float r0 = s00[i] * (1 - fx) + s10[i] * fx;
        float r1 = s01[i] * (1 - fx) + s11[i] * fx;
        result[i] = r0 * (1 - fy) + r1 * fy;
      }
      return result;
    }
  }

  // Initialize Metal if not already done
  void initMetal(id<MTLDevice> existingDevice,
                 id<MTLCommandQueue> existingQueue,
                 id<MTLLibrary> existingLib = nil) {
    device = existingDevice;
    commandQueue = existingQueue;
    library = existingLib;
  }

  // Get or create pipeline for a shader function
  id<MTLComputePipelineState> getPipeline(const std::string &funcName) {
    auto it = pipelines.find(funcName);
    if (it != pipelines.end())
      return it->second;

    NSString *name = [NSString stringWithUTF8String:funcName.c_str()];
    id<MTLFunction> func = [library newFunctionWithName:name];
    if (!func) {
      std::cerr << "Shader function not found: " << funcName << std::endl;
      return nil;
    }

    NSError *error = nil;
    id<MTLComputePipelineState> pipeline =
        [device newComputePipelineStateWithFunction:func error:&error];
    if (!pipeline) {
      std::cerr << "Failed to create pipeline: "
                << (error ? [[error localizedDescription] UTF8String]
                          : "unknown")
                << std::endl;
      return nil;
    }

    pipelines[funcName] = pipeline;
    return pipeline;
  }

  // Sync CPU data to Metal buffers and textures
  void syncToMetal() {
    metalBuffers.clear();
    metalTextures.clear();
    metalTextures.resize(resources.size(), nil);
    stagingTextures.clear();
    stagingTextures.resize(resources.size(), nil);
    metalSamplers.clear();
    metalSamplers.resize(resources.size(), nil);

    for (size_t i = 0; i < resources.size(); ++i) {
      auto *res = resources[i];
      if (i < isTextureResource.size() && isTextureResource[i]) {
        if (res->isExternal && res->externalTexture) {
          // External (IOSurface-backed) textures may lack ShaderWrite usage.
          // Create a staging texture with full usage for compute/render work,
          // then blit to the external texture after GPU commands complete.
          int w = res->externalTexture.width;
          int h = res->externalTexture.height;
          // Reuse cached staging texture if dimensions match
          if (res->retainedStagingTexture != nil &&
              (int)res->retainedStagingTexture.width == w &&
              (int)res->retainedStagingTexture.height == h) {
            metalTextures[i] = res->retainedStagingTexture;
            stagingTextures[i] = res->retainedStagingTexture;
          } else {
            MTLTextureDescriptor *desc = [[MTLTextureDescriptor alloc] init];
            desc.textureType = MTLTextureType2D;
            desc.pixelFormat = res->externalTexture.pixelFormat;
            desc.width = w;
            desc.height = h;
            desc.usage = MTLTextureUsageShaderWrite | MTLTextureUsageShaderRead |
                         MTLTextureUsageRenderTarget;
            desc.storageMode = MTLStorageModeShared;
            id<MTLTexture> staging = [device newTextureWithDescriptor:desc];
            metalTextures[i] = staging;
            stagingTextures[i] = staging;
            res->retainedStagingTexture = staging;
          }
        } else {
          // Create a Metal texture for texture resources
          MTLTextureDescriptor *desc = [[MTLTextureDescriptor alloc] init];
          desc.textureType = MTLTextureType2D;
          desc.pixelFormat = MTLPixelFormatRGBA8Unorm;
          desc.width = texWidths[i];
          desc.height = texHeights[i];
          desc.usage = MTLTextureUsageShaderWrite | MTLTextureUsageShaderRead |
                       MTLTextureUsageRenderTarget;
          desc.storageMode = MTLStorageModeShared;
          id<MTLTexture> texture = [device newTextureWithDescriptor:desc];
          metalTextures[i] = texture;

          // Upload pre-populated texture data if available (float RGBA -> RGBA8
          // bytes)
          if (!res->data.empty()) {
            int w = texWidths[i];
            int h = texHeights[i];
            size_t pixelCount = w * h;
            if (res->data.size() >= pixelCount * 4) {
              std::vector<uint8_t> bytes(pixelCount * 4);
              for (size_t j = 0; j < pixelCount * 4; ++j) {
                float v = std::max(0.0f, std::min(1.0f, res->data[j]));
                bytes[j] = static_cast<uint8_t>(v * 255.0f + 0.5f);
              }
              MTLRegion region = MTLRegionMake2D(0, 0, w, h);
              [texture replaceRegion:region
                         mipmapLevel:0
                           withBytes:bytes.data()
                         bytesPerRow:w * 4];
            }
          }
        }

        // Create sampler for this texture (needed for both internal and
        // external)
        MTLSamplerDescriptor *samplerDesc = [[MTLSamplerDescriptor alloc] init];
        samplerDesc.minFilter = MTLSamplerMinMagFilterNearest;
        samplerDesc.magFilter = MTLSamplerMinMagFilterNearest;
        int wrapMode = (i < texWrapModes.size()) ? texWrapModes[i] : 0;
        if (wrapMode == 1) {
          samplerDesc.sAddressMode = MTLSamplerAddressModeClampToEdge;
          samplerDesc.tAddressMode = MTLSamplerAddressModeClampToEdge;
        } else {
          samplerDesc.sAddressMode = MTLSamplerAddressModeRepeat;
          samplerDesc.tAddressMode = MTLSamplerAddressModeRepeat;
        }
        metalSamplers[i] = [device newSamplerStateWithDescriptor:samplerDesc];

        // Create a dummy buffer placeholder to keep indices aligned
        float dummy = 0;
        metalBuffers.push_back([device
            newBufferWithBytes:&dummy
                        length:sizeof(float)
                       options:MTLResourceStorageModeShared]);
      } else {
        // Safety check: invalidate retained buffer if size doesn't match
        if (res->retainedMetalBuffer != nil) {
          size_t expectedSize = res->data.size() * sizeof(float);
          if (res->retainedMetalBuffer.length != expectedSize) {
            res->retainedMetalBuffer = nil;
          }
        }
        if (res->retainedMetalBuffer != nil) {
          // Reuse persistent GPU buffer (data stays on GPU across frames)
          metalBuffers.push_back(res->retainedMetalBuffer);
        } else {
          size_t byteSize = res->data.size() * sizeof(float);
          id<MTLBuffer> buffer =
              [device newBufferWithBytes:res->data.data()
                                  length:byteSize
                                 options:MTLResourceStorageModeShared];
          metalBuffers.push_back(buffer);
          res->retainedMetalBuffer = buffer;
        }
        metalTextures.push_back(nil);
      }
    }

    // Blit external input textures into their staging textures so shaders
    // can read input data. (Output textures are written by shaders and
    // blitted back to external in blitStagingToExternal.)
    blitExternalToStaging();
  }

  // Copy external (IOSurface) input textures into staging textures before
  // shader execution, so shaders can read input data with full access.
  void blitExternalToStaging() {
    bool needsBlit = false;
    for (size_t i = 0; i < resources.size(); ++i) {
      if (i < stagingTextures.size() && stagingTextures[i] != nil &&
          resources[i]->isExternal && resources[i]->externalTexture) {
        needsBlit = true;
        break;
      }
    }
    if (!needsBlit) return;

    id<MTLCommandBuffer> cmdBuffer = [commandQueue commandBuffer];
    id<MTLBlitCommandEncoder> blit = [cmdBuffer blitCommandEncoder];
    for (size_t i = 0; i < resources.size(); ++i) {
      if (i < stagingTextures.size() && stagingTextures[i] != nil &&
          resources[i]->isExternal && resources[i]->externalTexture) {
        int w = resources[i]->externalTexture.width;
        int h = resources[i]->externalTexture.height;
        [blit copyFromTexture:resources[i]->externalTexture
                  sourceSlice:0
                  sourceLevel:0
                 sourceOrigin:MTLOriginMake(0, 0, 0)
                   sourceSize:MTLSizeMake(w, h, 1)
                    toTexture:stagingTextures[i]
             destinationSlice:0
             destinationLevel:0
            destinationOrigin:MTLOriginMake(0, 0, 0)];
      }
    }
    [blit endEncoding];
    [cmdBuffer commit];
  }

  // Sync Metal buffers and textures back to CPU
  void syncFromMetal() {
    for (size_t i = 0; i < resources.size(); ++i) {
      if (resources[i]->isExternal) continue;
      if (i < metalTextures.size() && metalTextures[i] != nil) {
        // Read back texture data as RGBA8 bytes, convert to floats
        int w = texWidths[i];
        int h = texHeights[i];
        size_t bytesPerRow = w * 4; // RGBA8 = 4 bytes per pixel
        std::vector<uint8_t> bytes(w * h * 4);
        MTLRegion region = MTLRegionMake2D(0, 0, w, h);
        [metalTextures[i] getBytes:bytes.data()
                       bytesPerRow:bytesPerRow
                        fromRegion:region
                       mipmapLevel:0];
        // Convert RGBA8 bytes to float (0.0-1.0 range)
        resources[i]->data.resize(w * h * 4);
        for (size_t j = 0; j < bytes.size(); ++j) {
          resources[i]->data[j] = bytes[j] / 255.0f;
        }
      } else if (i < metalBuffers.size()) {
        float *ptr = (float *)[metalBuffers[i] contents];
        size_t count = resources[i]->data.size();
        for (size_t j = 0; j < count; ++j) {
          resources[i]->data[j] = ptr[j];
        }
      }
    }
  }

  // Dispatch a compute shader (no args version)
  void dispatchShader(const char *funcName, int dimX, int dimY, int dimZ) {
    dispatchShaderImpl(funcName, dimX, dimY, dimZ, nullptr, 0);
  }

  // Dispatch with args (initializer list)
  void dispatchShader(const char *funcName, int dimX, int dimY, int dimZ,
                      std::initializer_list<float> args) {
    std::vector<float> argsVec(args);
    dispatchShaderImpl(funcName, dimX, dimY, dimZ, argsVec.data(),
                       argsVec.size());
  }

  // Dispatch with args (vector - used for complex type marshalling)
  void dispatchShader(const char *funcName, int dimX, int dimY, int dimZ,
                      const std::vector<float> &args) {
    dispatchShaderImpl(funcName, dimX, dimY, dimZ,
                       const_cast<float *>(args.data()), args.size());
  }

  void dispatchShaderImpl(const char *funcName, int dimX, int dimY, int dimZ,
                          float *args, size_t argCount) {
    id<MTLComputePipelineState> pipeline = getPipeline(funcName);
    if (!pipeline)
      return;

    // Sync CPU data to GPU if not done yet
    if (metalBuffers.empty()) {
      syncToMetal();
    }

    id<MTLCommandBuffer> cmdBuffer = [commandQueue commandBuffer];
    id<MTLComputeCommandEncoder> encoder = [cmdBuffer computeCommandEncoder];
    [encoder setComputePipelineState:pipeline];

    // Bind uniform buffer with args (binding 0)
    if (argCount > 0) {
      id<MTLBuffer> argsBuffer =
          [device newBufferWithBytes:args
                              length:argCount * sizeof(float)
                             options:MTLResourceStorageModeShared];
      [encoder setBuffer:argsBuffer offset:0 atIndex:0];
    } else {
      // Empty uniform buffer
      float dummy = 0;
      id<MTLBuffer> argsBuffer =
          [device newBufferWithBytes:&dummy
                              length:sizeof(float)
                             options:MTLResourceStorageModeShared];
      [encoder setBuffer:argsBuffer offset:0 atIndex:0];
    }

    // Bind resource buffers, textures, and samplers (starting at binding 1)
    // Always use metalTextures (which are staging textures for external resources)
    for (size_t i = 0; i < resources.size(); ++i) {
      if (i < metalTextures.size() && metalTextures[i] != nil) {
        [encoder setTexture:metalTextures[i] atIndex:i + 1];
        if (i < metalSamplers.size() && metalSamplers[i] != nil) {
          [encoder setSamplerState:metalSamplers[i] atIndex:i + 1];
        }
      } else if (i < metalBuffers.size()) {
        [encoder setBuffer:metalBuffers[i] offset:0 atIndex:i + 1];
      }
    }

    MTLSize gridSize = MTLSizeMake(dimX, dimY, dimZ);
    NSUInteger w = pipeline.threadExecutionWidth;
    NSUInteger h = pipeline.maxTotalThreadsPerThreadgroup / w;
    MTLSize threadGroupSize = MTLSizeMake(w, h, 1);
    [encoder dispatchThreads:gridSize threadsPerThreadgroup:threadGroupSize];
    [encoder endEncoding];

    [cmdBuffer commit];
    pendingCmdBuffer = cmdBuffer;
  }

  // Draw call (render pipeline)
  void draw(size_t targetIdx, const char *vsFunc, const char *fsFunc,
            int vertexCount,
            const std::vector<float> &args = {},
            bool loadExisting = false) {
    if (metalBuffers.empty()) {
      syncToMetal();
    }

    if (targetIdx >= metalTextures.size() || metalTextures[targetIdx] == nil) {
      std::cerr << "Draw target texture not found for index " << targetIdx
                << std::endl;
      return;
    }

    MTLRenderPipelineDescriptor *pipelineDesc =
        [[MTLRenderPipelineDescriptor alloc] init];
    pipelineDesc.colorAttachments[0].pixelFormat =
        metalTextures[targetIdx].pixelFormat;

    NSString *vsName = [NSString stringWithUTF8String:vsFunc];
    NSString *fsName = [NSString stringWithUTF8String:fsFunc];

    pipelineDesc.vertexFunction = [library newFunctionWithName:vsName];
    pipelineDesc.fragmentFunction = [library newFunctionWithName:fsName];

    if (!pipelineDesc.vertexFunction || !pipelineDesc.fragmentFunction) {
      std::cerr << "Failed to load shaders for draw: " << vsFunc << ", "
                << fsFunc << std::endl;
      return;
    }

    NSError *error = nil;
    id<MTLRenderPipelineState> pipelineState =
        [device newRenderPipelineStateWithDescriptor:pipelineDesc error:&error];
    if (!pipelineState) {
      std::cerr << "Failed to create render pipeline state: "
                << (error ? [[error localizedDescription] UTF8String]
                          : "unknown")
                << std::endl;
      return;
    }

    MTLRenderPassDescriptor *passDesc =
        [MTLRenderPassDescriptor renderPassDescriptor];
    passDesc.colorAttachments[0].texture = metalTextures[targetIdx];
    passDesc.colorAttachments[0].loadAction = loadExisting ? MTLLoadActionLoad : MTLLoadActionClear;
    if (!loadExisting) {
      passDesc.colorAttachments[0].clearColor =
          MTLClearColorMake(0, 0, 0, 0); // Clear to transparent black
    }
    passDesc.colorAttachments[0].storeAction = MTLStoreActionStore;

    id<MTLCommandBuffer> cmdBuffer = [commandQueue commandBuffer];
    id<MTLRenderCommandEncoder> encoder =
        [cmdBuffer renderCommandEncoderWithDescriptor:passDesc];
    [encoder setRenderPipelineState:pipelineState];

    // Bind global inputs buffer at binding 0 (shared with vertex/fragment)
    if (!args.empty()) {
      id<MTLBuffer> argsBuffer =
          [device newBufferWithBytes:args.data()
                              length:args.size() * sizeof(float)
                             options:MTLResourceStorageModeShared];
      [encoder setVertexBuffer:argsBuffer offset:0 atIndex:0];
      [encoder setFragmentBuffer:argsBuffer offset:0 atIndex:0];
    }

    // Bind resources (buffers and textures) to both vertex and fragment stages
    // Always use metalTextures (staging textures for external resources)
    for (size_t i = 0; i < resources.size(); ++i) {
      if (i < metalTextures.size() && metalTextures[i] != nil) {
        [encoder setVertexTexture:metalTextures[i] atIndex:i + 1];
        [encoder setFragmentTexture:metalTextures[i] atIndex:i + 1];
        if (i < metalSamplers.size() && metalSamplers[i] != nil) {
          [encoder setVertexSamplerState:metalSamplers[i] atIndex:i + 1];
          [encoder setFragmentSamplerState:metalSamplers[i] atIndex:i + 1];
        }
      } else if (i < metalBuffers.size()) {
        [encoder setVertexBuffer:metalBuffers[i] offset:0 atIndex:i + 1];
        [encoder setFragmentBuffer:metalBuffers[i] offset:0 atIndex:i + 1];
      }
    }

    [encoder drawPrimitives:MTLPrimitiveTypeTriangle
                vertexStart:0
                vertexCount:vertexCount];
    [encoder endEncoding];

    [cmdBuffer commit];
    pendingCmdBuffer = cmdBuffer;
  }
};
`,T=`// MSL Intrinsics for nano-ffglify
// Safe division, comparison, select, NaN/Inf, casting, matrix, quaternion, color helpers
// NOTE: The including file must provide <metal_stdlib> and 'using namespace metal;'

// Safe division
inline float safe_div(float a, float b) { return b != 0.0f ? a / b : 0.0f; }
inline float2 safe_div(float2 a, float b) { return b != 0.0f ? a / b : float2(0.0f); }
inline float3 safe_div(float3 a, float b) { return b != 0.0f ? a / b : float3(0.0f); }
inline float4 safe_div(float4 a, float b) { return b != 0.0f ? a / b : float4(0.0f); }
inline float2 safe_div(float2 a, float2 b) { return float2(safe_div(a.x, b.x), safe_div(a.y, b.y)); }
inline float3 safe_div(float3 a, float3 b) { return float3(safe_div(a.x, b.x), safe_div(a.y, b.y), safe_div(a.z, b.z)); }
inline float4 safe_div(float4 a, float4 b) { return float4(safe_div(a.x, b.x), safe_div(a.y, b.y), safe_div(a.z, b.z), safe_div(a.w, b.w)); }

// Comparison helpers — overloaded for scalar and vector types
inline float cmp_eq(float a, float b) { return a == b ? 1.0f : 0.0f; }
inline float2 cmp_eq(float2 a, float2 b) { return select(float2(0.0f), float2(1.0f), a == b); }
inline float3 cmp_eq(float3 a, float3 b) { return select(float3(0.0f), float3(1.0f), a == b); }
inline float4 cmp_eq(float4 a, float4 b) { return select(float4(0.0f), float4(1.0f), a == b); }
inline float cmp_neq(float a, float b) { return a != b ? 1.0f : 0.0f; }
inline float2 cmp_neq(float2 a, float2 b) { return select(float2(0.0f), float2(1.0f), a != b); }
inline float3 cmp_neq(float3 a, float3 b) { return select(float3(0.0f), float3(1.0f), a != b); }
inline float4 cmp_neq(float4 a, float4 b) { return select(float4(0.0f), float4(1.0f), a != b); }
inline float cmp_lt(float a, float b) { return a < b ? 1.0f : 0.0f; }
inline float2 cmp_lt(float2 a, float2 b) { return select(float2(0.0f), float2(1.0f), a < b); }
inline float3 cmp_lt(float3 a, float3 b) { return select(float3(0.0f), float3(1.0f), a < b); }
inline float4 cmp_lt(float4 a, float4 b) { return select(float4(0.0f), float4(1.0f), a < b); }
inline float cmp_lte(float a, float b) { return a <= b ? 1.0f : 0.0f; }
inline float2 cmp_lte(float2 a, float2 b) { return select(float2(0.0f), float2(1.0f), a <= b); }
inline float3 cmp_lte(float3 a, float3 b) { return select(float3(0.0f), float3(1.0f), a <= b); }
inline float4 cmp_lte(float4 a, float4 b) { return select(float4(0.0f), float4(1.0f), a <= b); }
inline float cmp_gt(float a, float b) { return a > b ? 1.0f : 0.0f; }
inline float2 cmp_gt(float2 a, float2 b) { return select(float2(0.0f), float2(1.0f), a > b); }
inline float3 cmp_gt(float3 a, float3 b) { return select(float3(0.0f), float3(1.0f), a > b); }
inline float4 cmp_gt(float4 a, float4 b) { return select(float4(0.0f), float4(1.0f), a > b); }
inline float cmp_gte(float a, float b) { return a >= b ? 1.0f : 0.0f; }
inline float2 cmp_gte(float2 a, float2 b) { return select(float2(0.0f), float2(1.0f), a >= b); }
inline float3 cmp_gte(float3 a, float3 b) { return select(float3(0.0f), float3(1.0f), a >= b); }
inline float4 cmp_gte(float4 a, float4 b) { return select(float4(0.0f), float4(1.0f), a >= b); }

// Select helper — overloaded for scalar and vector types
inline float msl_select(float f, float t, float cond) { return cond != 0.0f ? t : f; }
inline float2 msl_select(float2 f, float2 t, float cond) { return cond != 0.0f ? t : f; }
inline float3 msl_select(float3 f, float3 t, float cond) { return cond != 0.0f ? t : f; }
inline float4 msl_select(float4 f, float4 t, float cond) { return cond != 0.0f ? t : f; }
inline float2 msl_select(float2 f, float2 t, float2 cond) { return select(f, t, cond != 0.0f); }
inline float3 msl_select(float3 f, float3 t, float3 cond) { return select(f, t, cond != 0.0f); }
inline float4 msl_select(float4 f, float4 t, float4 cond) { return select(f, t, cond != 0.0f); }

// NaN/Inf/Finite helpers — overloaded for scalar and vector
inline float msl_is_nan(float v) { return isnan(v) ? 1.0f : 0.0f; }
inline float2 msl_is_nan(float2 v) { return select(float2(0.0f), float2(1.0f), isnan(v)); }
inline float3 msl_is_nan(float3 v) { return select(float3(0.0f), float3(1.0f), isnan(v)); }
inline float4 msl_is_nan(float4 v) { return select(float4(0.0f), float4(1.0f), isnan(v)); }
inline float msl_is_inf(float v) { return isinf(v) ? 1.0f : 0.0f; }
inline float2 msl_is_inf(float2 v) { return select(float2(0.0f), float2(1.0f), isinf(v)); }
inline float3 msl_is_inf(float3 v) { return select(float3(0.0f), float3(1.0f), isinf(v)); }
inline float4 msl_is_inf(float4 v) { return select(float4(0.0f), float4(1.0f), isinf(v)); }
inline float msl_is_finite(float v) { return (!isnan(v) && !isinf(v)) ? 1.0f : 0.0f; }
inline float2 msl_is_finite(float2 v) { return select(float2(0.0f), float2(1.0f), !isnan(v) && !isinf(v)); }
inline float3 msl_is_finite(float3 v) { return select(float3(0.0f), float3(1.0f), !isnan(v) && !isinf(v)); }
inline float4 msl_is_finite(float4 v) { return select(float4(0.0f), float4(1.0f), !isnan(v) && !isinf(v)); }

// Safe int cast (handles overflow with two's complement wrapping)
inline int safe_cast_int(float v) {
  if (v >= 2147483648.0f) return int(v - 4294967296.0f);
  if (v < -2147483648.0f) return int(v + 4294967296.0f);
  return int(v);
}

// Flush subnormal helper
inline float flush_subnormal(float v) { return (v != 0.0f && abs(v) < 1.175494e-38f) ? 0.0f : v; }

// Exponent/mantissa helpers (IEEE 754)
inline float get_exponent(float v) {
  if (v == 0.0f) return 0.0f;
  int exp_val; frexp(v, exp_val);
  return float(exp_val);
}
inline float get_mantissa(float v) {
  if (v == 0.0f) return 0.0f;
  int exp_val; return frexp(v, exp_val);
}

// Matrix inverse (4x4)
inline float4x4 mat_inverse(float4x4 m) {
  float4 c0 = m[0], c1 = m[1], c2 = m[2], c3 = m[3];
  float4 r0, r1, r2, r3;
  r0.x = c1.y*c2.z*c3.w - c1.y*c2.w*c3.z - c2.y*c1.z*c3.w + c2.y*c1.w*c3.z + c3.y*c1.z*c2.w - c3.y*c1.w*c2.z;
  r0.y = -c0.y*c2.z*c3.w + c0.y*c2.w*c3.z + c2.y*c0.z*c3.w - c2.y*c0.w*c3.z - c3.y*c0.z*c2.w + c3.y*c0.w*c2.z;
  r0.z = c0.y*c1.z*c3.w - c0.y*c1.w*c3.z - c1.y*c0.z*c3.w + c1.y*c0.w*c3.z + c3.y*c0.z*c1.w - c3.y*c0.w*c1.z;
  r0.w = -c0.y*c1.z*c2.w + c0.y*c1.w*c2.z + c1.y*c0.z*c2.w - c1.y*c0.w*c2.z - c2.y*c0.z*c1.w + c2.y*c0.w*c1.z;
  float det = c0.x*r0.x + c1.x*r0.y + c2.x*r0.z + c3.x*r0.w;
  if (abs(det) < 1e-10) return m;
  float invDet = 1.0f / det;
  r1.x = -c1.x*c2.z*c3.w + c1.x*c2.w*c3.z + c2.x*c1.z*c3.w - c2.x*c1.w*c3.z - c3.x*c1.z*c2.w + c3.x*c1.w*c2.z;
  r1.y = c0.x*c2.z*c3.w - c0.x*c2.w*c3.z - c2.x*c0.z*c3.w + c2.x*c0.w*c3.z + c3.x*c0.z*c2.w - c3.x*c0.w*c2.z;
  r1.z = -c0.x*c1.z*c3.w + c0.x*c1.w*c3.z + c1.x*c0.z*c3.w - c1.x*c0.w*c3.z - c3.x*c0.z*c1.w + c3.x*c0.w*c1.z;
  r1.w = c0.x*c1.z*c2.w - c0.x*c1.w*c2.z - c1.x*c0.z*c2.w + c1.x*c0.w*c2.z + c2.x*c0.z*c1.w - c2.x*c0.w*c1.z;
  r2.x = c1.x*c2.y*c3.w - c1.x*c2.w*c3.y - c2.x*c1.y*c3.w + c2.x*c1.w*c3.y + c3.x*c1.y*c2.w - c3.x*c1.w*c2.y;
  r2.y = -c0.x*c2.y*c3.w + c0.x*c2.w*c3.y + c2.x*c0.y*c3.w - c2.x*c0.w*c3.y - c3.x*c0.y*c2.w + c3.x*c0.w*c2.y;
  r2.z = c0.x*c1.y*c3.w - c0.x*c1.w*c3.y - c1.x*c0.y*c3.w + c1.x*c0.w*c3.y + c3.x*c0.y*c1.w - c3.x*c0.w*c1.y;
  r2.w = -c0.x*c1.y*c2.w + c0.x*c1.w*c2.y + c1.x*c0.y*c2.w - c1.x*c0.w*c2.y - c2.x*c0.y*c1.w + c2.x*c0.w*c1.y;
  r3.x = -c1.x*c2.y*c3.z + c1.x*c2.z*c3.y + c2.x*c1.y*c3.z - c2.x*c1.z*c3.y - c3.x*c1.y*c2.z + c3.x*c1.z*c2.y;
  r3.y = c0.x*c2.y*c3.z - c0.x*c2.z*c3.y - c2.x*c0.y*c3.z + c2.x*c0.z*c3.y + c3.x*c0.y*c2.z - c3.x*c0.z*c2.y;
  r3.z = -c0.x*c1.y*c3.z + c0.x*c1.z*c3.y + c1.x*c0.y*c3.z - c1.x*c0.z*c3.y - c3.x*c0.y*c1.z + c3.x*c0.z*c1.y;
  r3.w = c0.x*c1.y*c2.z - c0.x*c1.z*c2.y - c1.x*c0.y*c2.z + c1.x*c0.z*c2.y + c2.x*c0.y*c1.z - c2.x*c0.z*c1.y;
  return float4x4(r0*invDet, r1*invDet, r2*invDet, r3*invDet);
}

// Quaternion helpers (w,x,y,z = q.w,q.x,q.y,q.z ; stored as float4(x,y,z,w))
inline float4 quat_mul(float4 a, float4 b) {
  return float4(a.w*b.x + a.x*b.w + a.y*b.z - a.z*b.y,
                a.w*b.y - a.x*b.z + a.y*b.w + a.z*b.x,
                a.w*b.z + a.x*b.y - a.y*b.x + a.z*b.w,
                a.w*b.w - a.x*b.x - a.y*b.y - a.z*b.z);
}
inline float3 quat_rotate(float3 v, float4 q) {
  float3 u = q.xyz; float s = q.w;
  return 2.0f*dot(u,v)*u + (s*s - dot(u,u))*v + 2.0f*s*cross(u,v);
}
inline float4 quat_slerp(float4 a, float4 b, float t) {
  float d = dot(a, b);
  if (d < 0.0f) { b = -b; d = -d; }
  if (d > 0.9995f) return normalize(mix(a, b, t));
  float theta = acos(clamp(d, -1.0f, 1.0f));
  float sn = sin(theta);
  return (sin((1.0f-t)*theta)/sn)*a + (sin(t*theta)/sn)*b;
}
inline float4x4 quat_to_mat4(float4 q) {
  float x=q.x, y=q.y, z=q.z, w=q.w;
  return float4x4(
    float4(1-2*(y*y+z*z), 2*(x*y+w*z), 2*(x*z-w*y), 0),
    float4(2*(x*y-w*z), 1-2*(x*x+z*z), 2*(y*z+w*x), 0),
    float4(2*(x*z+w*y), 2*(y*z-w*x), 1-2*(x*x+y*y), 0),
    float4(0, 0, 0, 1));
}

// PRNG hash (lowbias32)
inline int _prng_hash(int x_in) {
  uint x = as_type<uint>(x_in);
  x ^= x >> 16u;
  x *= 0x45d9f3bu;
  x ^= x >> 16u;
  x *= 0x45d9f3bu;
  x ^= x >> 16u;
  return as_type<int>(x);
}
inline float _prng_hash_to_float(int x) {
  return float(as_type<uint>(_prng_hash(x))) / 4294967295.0f;
}

// Color mix (alpha-over compositing: dst=a, src=b)
inline float4 color_mix_impl(float4 dst, float4 src) {
  float outA = src.w + dst.w * (1.0f - src.w);
  if (outA < 1e-6f) return float4(0.0f);
  float3 rgb = (src.xyz * src.w + dst.xyz * dst.w * (1.0f - src.w)) / outA;
  return float4(rgb, outA);
}
`,_={"ffgl/FFGL.cpp":t,"ffgl/FFGL.h":n,"ffgl/FFGLLib.h":e,"ffgl/FFGLLog.cpp":r,"ffgl/FFGLLog.h":a,"ffgl/FFGLPlatform.h":i,"ffgl/FFGLPluginInfo.cpp":s,"ffgl/FFGLPluginInfo.h":o,"ffgl/FFGLPluginInfoData.cpp":l,"ffgl/FFGLPluginManager.cpp":u,"ffgl/FFGLPluginManager.h":d,"ffgl/FFGLPluginSDK.cpp":f,"ffgl/FFGLPluginSDK.h":c,"ffgl/FFGLThumbnailInfo.cpp":m,"ffgl/FFGLThumbnailInfo.h":p,"ffgl-plugin.mm":F,"InteropTexture.m":h,"InteropTexture.h":g,"intrinsics.incl.h":I,"msl-intrinsics.incl.h":T};export{_ as FFGL_ASSETS};
//# sourceMappingURL=ffgl-assets-62uhs_m8.js.map
