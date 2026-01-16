(function(){"use strict";/*!
 * ONNX Runtime Web v1.23.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var un=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,wm=Object.getOwnPropertyNames,$m=Object.prototype.hasOwnProperty,xm=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),H=(e,t)=>()=>(e&&(t=e(e=0)),t),Cr=(e,t)=>{for(var i in t)un(e,i,{get:t[i],enumerable:!0})},Tm=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of wm(t))!$m.call(e,a)&&a!==i&&un(e,a,{get:()=>t[a],enumerable:!(r=vm(t,a))||r.enumerable});return e},Hr=e=>Tm(un({},"__esModule",{value:!0}),e),Gr,Wt,Qt,Ko,Yo,Zo=H(()=>{Gr=new Map,Wt=[],Qt=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Gr.get(e);if(r===void 0)Gr.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let a=Wt.indexOf(e);a!==-1&&Wt.splice(a,1);for(let s=0;s<Wt.length;s++)if(Gr.get(Wt[s]).priority<=i){Wt.splice(s,0,e);return}Wt.push(e)}return}throw new TypeError("not a valid backend")},Ko=async e=>{let t=Gr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Yo=async e=>{let t=e.executionProviders||[],i=t.map(p=>typeof p=="string"?p:p.name),r=i.length===0?Wt:i,a,s=[],o=new Set;for(let p of r){let f=await Ko(p);typeof f=="string"?s.push({name:p,err:f}):(a||(a=f),a===f&&o.add(p))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:f}of s)i.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${f}`);let u=t.filter(p=>o.has(typeof p=="string"?p:p.name));return[a,new Proxy(e,{get:(p,f)=>f==="executionProviders"?u:Reflect.get(p,f)})]}}),Sm=H(()=>{Zo()}),Xo,Cm=H(()=>{Xo="1.23.2"}),ln,qe,Qo=H(()=>{Cm(),ln="warning",qe={wasm:{},webgl:{},webgpu:{},versions:{common:Xo},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ln=e}},get logLevel(){return ln}},Object.defineProperty(qe,"logLevel",{enumerable:!0})}),Ce,km=H(()=>{Qo(),Ce=qe}),Jo,eu,Em=H(()=>{Jo=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let o=t?.format!==void 0?t.format:"RGB",u=t?.norm,p,f;u===void 0||u.mean===void 0?p=[255,255,255,255]:typeof u.mean=="number"?p=[u.mean,u.mean,u.mean,u.mean]:(p=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(p[3]=u.mean[3])),u===void 0||u.bias===void 0?f=[0,0,0,0]:typeof u.bias=="number"?f=[u.bias,u.bias,u.bias,u.bias]:(f=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(f[3]=u.bias[3]));let m=s*a,g=0,y=m,w=m*2,x=-1;o==="RGBA"?(g=0,y=m,w=m*2,x=m*3):o==="RGB"?(g=0,y=m,w=m*2):o==="RBG"&&(g=0,w=m,y=m*2);for(let T=0;T<s;T++)for(let I=0;I<a;I++){let C=(e.data[g++]-f[0])*p[0],v=(e.data[y++]-f[1])*p[1],z=(e.data[w++]-f[2])*p[2],E=x===-1?255:(e.data[x++]-f[3])*p[3];r.fillStyle="rgba("+C+","+v+","+z+","+E+")",r.fillRect(I,T,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},eu=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let a,s,o;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],o=e.dims[3]):(a=e.dims[3],s=e.dims[2],o=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t?.norm,f,m;p===void 0||p.mean===void 0?f=[255,255,255,255]:typeof p.mean=="number"?f=[p.mean,p.mean,p.mean,p.mean]:(f=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(f[3]=p.mean[3])),p===void 0||p.bias===void 0?m=[0,0,0,0]:typeof p.bias=="number"?m=[p.bias,p.bias,p.bias,p.bias]:(m=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(m[3]=p.bias[3]));let g=s*a;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!=="RGBA"||o===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,w=0,x=1,T=2,I=3,C=0,v=g,z=g*2,E=-1;u==="RGBA"?(C=0,v=g,z=g*2,E=g*3):u==="RGB"?(C=0,v=g,z=g*2):u==="RBG"&&(C=0,z=g,v=g*2),r=i.createImageData(a,s);for(let O=0;O<s*a;w+=y,x+=y,T+=y,I+=y,O++)r.data[w]=(e.data[C++]-m[0])*f[0],r.data[x]=(e.data[v++]-m[1])*f[1],r.data[T]=(e.data[z++]-m[2])*f[2],r.data[I]=E===-1?255:(e.data[E++]-m[3])*f[3]}else throw new Error("Can not access image data");return r}}),Hi,tu,ru,iu,au,nu,Im=H(()=>{pn(),Hi=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,a=t.norm??{mean:255,bias:0},s,o;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?o=[a.bias,a.bias,a.bias,a.bias]:o=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",f=i*r,m=p==="RGBA"?new Float32Array(f*4):new Float32Array(f*3),g=4,y=0,w=1,x=2,T=3,I=0,C=f,v=f*2,z=-1;u==="RGB"&&(g=3,y=0,w=1,x=2,T=-1),p==="RGBA"?z=f*3:p==="RBG"?(I=0,v=f,C=f*2):p==="BGR"&&(v=0,C=f,I=f*2);for(let E=0;E<f;E++,y+=g,x+=g,w+=g,T+=g)m[I++]=(e[y]+o[0])/s[0],m[C++]=(e[w]+o[1])/s[1],m[v++]=(e[x]+o[2])/s[2],z!==-1&&T!==-1&&(m[z++]=(e[T]+o[3])/s[3]);return p==="RGBA"?new Qe("float32",m,[1,4,i,r]):new Qe("float32",m,[1,3,i,r])},tu=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",o,u=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},f=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(i){let m=p();m.width=e.width,m.height=e.height;let g=f(m);if(g!=null){let y=e.height,w=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,w=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=y,u.width=w}else u.tensorFormat="RGBA",u.height=y,u.width=w;g.drawImage(e,0,0),o=g.getImageData(0,0,w,y).data}else throw new Error("Can not access image data")}else if(r){let m,g;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(m=t.resizedHeight,g=t.resizedWidth):(m=e.height,g=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=m,u.width=g,t!==void 0){let y=p();y.width=g,y.height=m;let w=f(y);if(w!=null)w.putImageData(e,0,0),o=w.getImageData(0,0,g,m).data;else throw new Error("Can not access image data")}else o=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=p();m.width=e.width,m.height=e.height;let g=f(m);if(g!=null){let y=e.height,w=e.width;return g.drawImage(e,0,0,w,y),o=g.getImageData(0,0,w,y).data,u.height=y,u.width=w,Hi(o,u)}else throw new Error("Can not access image data")}else{if(s)return new Promise((m,g)=>{let y=p(),w=f(y);if(!e||!w)return g();let x=new Image;x.crossOrigin="Anonymous",x.src=e,x.onload=()=>{y.width=x.width,y.height=x.height,w.drawImage(x,0,0,y.width,y.height);let T=w.getImageData(0,0,y.width,y.height);u.height=y.height,u.width=y.width,m(Hi(T.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(o!==void 0)return Hi(o,u);throw new Error("Input data provided is not supported - aborted tensor creation")},ru=(e,t)=>{let{width:i,height:r,download:a,dispose:s}=t,o=[1,r,i,4];return new Qe({location:"texture",type:"float32",texture:e,dims:o,download:a,dispose:s})},iu=(e,t)=>{let{dataType:i,dims:r,download:a,dispose:s}=t;return new Qe({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:a,dispose:s})},au=(e,t)=>{let{dataType:i,dims:r,download:a,dispose:s}=t;return new Qe({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:a,dispose:s})},nu=(e,t,i)=>new Qe({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})}),Jt,Kr,dn,su,Am=H(()=>{Jt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Kr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),dn=!1,su=()=>{if(!dn){dn=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,r=typeof i<"u"&&i.from;e&&(Jt.set("int64",BigInt64Array),Kr.set(BigInt64Array,"int64")),t&&(Jt.set("uint64",BigUint64Array),Kr.set(BigUint64Array,"uint64")),r?(Jt.set("float16",i),Kr.set(i,"float16")):Jt.set("float16",Uint16Array)}}}),ou,uu,zm=H(()=>{pn(),ou=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},uu=(e,t)=>{switch(e.location){case"cpu":return new Qe(e.type,e.data,t);case"cpu-pinned":return new Qe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Qe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Qe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Qe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Qe,pn=H(()=>{Em(),Im(),Am(),zm(),Qe=class{constructor(e,t,i){su();let r,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,a=e.dims,e.location){case"cpu-pinned":{let o=Jt.get(r);if(!o)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof o))throw new TypeError(`buffer should be of type ${o.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let o,u;if(typeof e=="string")if(r=e,u=i,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");o=t}else{let p=Jt.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?o=p.from(t,BigInt):o=p.from(t)}else if(t instanceof p)o=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")o=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&p!==Uint16Array)o=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${p}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")r="string",o=e;else if(p==="boolean")r="bool",o=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",o=Uint8Array.from(e);else{let p=Kr.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=p,o=e}if(u===void 0)u=[o.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=o,this.dataLocation="cpu"}let s=ou(a);if(this.cpuData&&s!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=a,this.size=s}static async fromImage(e,t){return tu(e,t)}static fromTexture(e,t){return ru(e,t)}static fromGpuBuffer(e,t){return iu(e,t)}static fromMLTensor(e,t){return au(e,t)}static fromPinnedBuffer(e,t,i){return nu(e,t,i)}toDataURL(e){return Jo(this,e)}toImageData(e){return eu(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return uu(this,e)}}}),pt,lu=H(()=>{pn(),pt=Qe}),Yr,cn,ct,nt,Lt,qt,du=H(()=>{Qo(),Yr=(e,t)=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},cn=(e,t)=>{let i=new Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let a=0;a<i.length;a++){if(r&&!i[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${i[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Yr("CPU",s);return}i[a].includes("TRACE_FUNC")&&(r=!0)}},ct=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||cn("BEGIN",e)},nt=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||cn("END",e)},Lt=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||console.time(`ORT::${e}`)},qt=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||console.timeEnd(`ORT::${e}`)}}),pu,Om=H(()=>{Zo(),lu(),du(),pu=class ym{constructor(t){this.handler=t}async run(t,i,r){ct(),Lt("InferenceSession.run");let a={},s={};if(typeof t!="object"||t===null||t instanceof pt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let o=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof pt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");o=!1;for(let f of i){if(typeof f!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(f)===-1)throw new RangeError(`'fetches' contains invalid output name: ${f}.`);a[f]=null}if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let f=!1,m=Object.getOwnPropertyNames(i);for(let g of this.outputNames)if(m.indexOf(g)!==-1){let y=i[g];(y===null||y instanceof pt)&&(f=!0,o=!1,a[g]=y)}if(f){if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else s=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let f of this.inputNames)if(typeof t[f]>"u")throw new Error(`input '${f}' is missing in 'feeds'.`);if(o)for(let f of this.outputNames)a[f]=null;let u=await this.handler.run(t,a,s),p={};for(let f in u)if(Object.hasOwnProperty.call(u,f)){let m=u[f];m instanceof pt?p[f]=m:p[f]=new pt(m.type,m.data,m.dims)}return qt("InferenceSession.run"),nt(),p}async release(){return this.handler.dispose()}static async create(t,i,r,a){ct(),Lt("InferenceSession.create");let s,o={};if(typeof t=="string"){if(s=t,typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof i=="object"&&i!==null)o=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let m=t,g=0,y=t.byteLength;if(typeof i=="object"&&i!==null)o=i;else if(typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(y=t.byteLength-g,typeof r=="number"){if(y=r,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||g+y>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-g}].`);if(typeof a=="object"&&a!==null)o=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(m,g,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,p]=await Yo(o),f=await u.createInferenceSessionHandler(s,p);return qt("InferenceSession.create"),nt(),new ym(f)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),fn,Rm=H(()=>{Om(),fn=pu}),Mm=H(()=>{}),Pm=H(()=>{}),Bm=H(()=>{}),Dm=H(()=>{}),cu={};Cr(cu,{InferenceSession:()=>fn,TRACE:()=>Yr,TRACE_EVENT_BEGIN:()=>Lt,TRACE_EVENT_END:()=>qt,TRACE_FUNC_BEGIN:()=>ct,TRACE_FUNC_END:()=>nt,Tensor:()=>pt,env:()=>Ce,registerBackend:()=>Qt});var st=H(()=>{Sm(),km(),Rm(),lu(),Mm(),Pm(),du(),Bm(),Dm()}),hn=H(()=>{}),fu={};Cr(fu,{default:()=>hu});var mn,gn,hu,Fm=H(()=>{Kh(),er(),xn(),mn="ort-wasm-proxy-worker",gn=globalThis.self?.name===mn,gn&&(self.onmessage=e=>{let{type:t,in:i}=e.data;try{switch(t){case"init-wasm":Cn(i.wasm).then(()=>{Ds(i).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{let{epName:r,env:a}=i;Fs(a,r).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:r}=i,a=pa(r);postMessage({type:t,out:a});break}case"create":{let{model:r,options:a}=i;Us(r,a).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":Ws(i),postMessage({type:t});break;case"run":{let{sessionId:r,inputIndices:a,inputs:s,outputIndices:o,options:u}=i;qs(r,a,s,o,new Array(o.length).fill(null),u).then(p=>{p.some(f=>f[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:p},js([...s,...p]))},p=>{postMessage({type:t,err:p})});break}case"end-profiling":Vs(i),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}}),hu=gn?null:e=>new Worker(e??Je,{type:"module",name:mn})}),mu={};Cr(mu,{default:()=>gu});var _n,gu,_u,Nm=H(()=>{_n=async function(e={}){var t,i,r=e,a=new Promise((n,d)=>{t=n,i=d}),s=typeof window=="object",o=typeof WorkerGlobalScope<"u",u=o&&self.name?.startsWith("em-pthread");r.mountExternalData=(n,d)=>{n.startsWith("./")&&(n=n.substring(2)),(r.Fb||(r.Fb=new Map)).set(n,d)},r.unmountExternalData=()=>{delete r.Fb};var p=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let f=n=>async(...d)=>{try{if(r.Gb)throw Error("Session already started");let h=r.Gb={ec:d[0],errors:[]},_=await n(...d);if(r.Gb!==h)throw Error("Session mismatch");r.Kb?.flush();let $=h.errors;if(0<$.length){let k=await Promise.all($);if(k=k.filter(l=>l),0<k.length)throw Error(k.join(`
`))}return _}finally{r.Gb=null}};r.jsepInit=(n,d)=>{if(n==="webgpu"){[r.Kb,r.Vb,r.Zb,r.Lb,r.Yb,r.Ab,r.$b,r.bc,r.Wb,r.Xb,r.ac]=d;let h=r.Kb;r.jsepRegisterBuffer=(_,$,k,l)=>h.registerBuffer(_,$,k,l),r.jsepGetBuffer=_=>h.getBuffer(_),r.jsepCreateDownloader=(_,$,k)=>h.createDownloader(_,$,k),r.jsepOnCreateSession=_=>{h.onCreateSession(_)},r.jsepOnReleaseSession=_=>{h.onReleaseSession(_)},r.jsepOnRunStart=_=>h.onRunStart(_),r.cc=(_,$)=>{h.upload(_,$)}}else if(n==="webnn"){let h=d[0];[r.oc,r.Ob,r.webnnEnsureTensor,r.Pb,r.webnnDownloadTensor,r.nc,r.webnnEnableTraceEvent]=d.slice(1),r.webnnReleaseTensorId=r.Ob,r.webnnUploadTensor=r.Pb,r.webnnRegisterMLContext=r.nc,r.webnnOnRunStart=_=>h.onRunStart(_),r.webnnOnRunEnd=h.onRunEnd.bind(h),r.webnnOnReleaseSession=_=>{h.onReleaseSession(_)},r.webnnCreateMLTensorDownloader=(_,$)=>h.createMLTensorDownloader(_,$),r.webnnRegisterMLTensor=(_,$,k,l)=>h.registerMLTensor(_,$,k,l),r.webnnCreateMLContext=_=>h.createMLContext(_),r.webnnRegisterMLConstant=(_,$,k,l,c,b)=>h.registerMLConstant(_,$,k,l,c,r.Fb,b),r.webnnRegisterGraphInput=h.registerGraphInput.bind(h),r.webnnIsGraphInput=h.isGraphInput.bind(h),r.webnnRegisterGraphOutput=h.registerGraphOutput.bind(h),r.webnnIsGraphOutput=h.isGraphOutput.bind(h),r.webnnCreateTemporaryTensor=h.createTemporaryTensor.bind(h),r.webnnIsGraphInputOutputTypeSupported=h.isGraphInputOutputTypeSupported.bind(h)}};let m=()=>{let n=(d,h,_)=>(...$)=>{let k=dt,l=h?.();$=d(...$);let c=h?.();return l!==c&&(d=c,_(l),h=_=null),dt!=k?new Promise((b,S)=>{Ei={resolve:b,reject:S}}):$};(()=>{for(let d of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])r[d]=n(r[d],()=>r[d],h=>r[d]=h)})(),f!==void 0&&(r._OrtRun=f(r._OrtRun),r._OrtRunWithBinding=f(r._OrtRunWithBinding)),m=void 0};r.asyncInit=()=>{m?.()};var g,y,w=(n,d)=>{throw d},x=self.location.href,T="";if(s||o){try{T=new URL(".",x).href}catch{}o&&(y=n=>{var d=new XMLHttpRequest;return d.open("GET",n,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),g=async n=>{if(ye(n))return new Promise((h,_)=>{var $=new XMLHttpRequest;$.open("GET",n,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?h($.response):_($.status)},$.onerror=_,$.send(null)});var d=await fetch(n,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)}}var I,C,v,z,E,O,M,B,U,q,K,J,re,ue,Z,de=console.log.bind(console),ee=console.error.bind(console),Y=de,le=ee,Q=!1,ye=n=>n.startsWith("file://");function N(){return C.buffer!=E.buffer&&Pe(),E}function G(){return C.buffer!=E.buffer&&Pe(),O}function se(){return C.buffer!=E.buffer&&Pe(),M}function he(){return C.buffer!=E.buffer&&Pe(),B}function V(){return C.buffer!=E.buffer&&Pe(),U}function fe(){return C.buffer!=E.buffer&&Pe(),q}function ut(){return C.buffer!=E.buffer&&Pe(),K}function ke(){return C.buffer!=E.buffer&&Pe(),ue}if(u){let n=function(d){try{var h=d.data,_=h.Db;if(_==="load"){let $=[];self.onmessage=k=>$.push(k),self.startWorker=()=>{postMessage({Db:"loaded"});for(let k of $)n(k);self.onmessage=n};for(let k of h.Sb)r[k]&&!r[k].proxy||(r[k]=(...l)=>{postMessage({Db:"callHandler",Rb:k,args:l})},k=="print"&&(Y=r[k]),k=="printErr"&&(le=r[k]));C=h.kc,Pe(),Z(h.lc)}else if(_==="run"){Qs(h.Bb),Ui(h.Bb,0,0,1,0,0),gi(),It(h.Bb),Ee||(Ka(),Ee=!0);try{Js(h.hc,h.Jb)}catch($){if($!="unwind")throw $}}else h.target!=="setimmediate"&&(_==="checkMailbox"?Ee&&Pr():_&&(le(`worker: received unknown command ${_}`),le(h)))}catch($){throw Ya(),$}};var Ee=!1;self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=n}function Pe(){var n=C.buffer;r.HEAP8=E=new Int8Array(n),M=new Int16Array(n),r.HEAPU8=O=new Uint8Array(n),B=new Uint16Array(n),r.HEAP32=U=new Int32Array(n),r.HEAPU32=q=new Uint32Array(n),K=new Float32Array(n),ue=new Float64Array(n),J=new BigInt64Array(n),re=new BigUint64Array(n)}function We(){u?startWorker(r):W.Da()}var je,Ke=0,Bt=null;function ma(){if(--Ke==0&&Bt){var n=Bt;Bt=null,n()}}function St(n){throw le(n="Aborted("+n+")"),Q=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),i(n),n}function ga(){return{a:{L:Ga,Aa:Ha,b:yi,$:bi,A:wa,pa:$a,X:Ye,Z:Dt,qa:kt,na:fr,ga:Yt,ma:ve,J:xa,Y:rt,V:vi,oa:Et,W:wi,va:eo,E:Sa,Q:to,O:ro,D:Si,v:Ca,s:io,P:ao,z:Mr,R:lo,ja:Ea,T:Ia,aa:yr,M:po,F:Aa,ia:It,sa:za,r:co,Ca:fo,w:mo,o:go,m:Pa,c:Ti,Ba:yo,n:bo,j:$o,u:xo,p:To,f:So,t:Co,l:Ai,e:ko,k:Eo,h:Io,g:Ao,d:zo,da:zi,ea:Oo,fa:Ro,ba:Na,ca:Ua,N:Wa,xa:Po,ua:Do,i:Fo,C:No,G:Uo,ta:Bo,x:Wo,ra:Fr,U:Lo,q:Mo,y:qa,K:qo,S:Vo,za:jo,ya:Ho,ka:Ur,la:at,_:hi,B:Be,I:Bi,ha:Di,H:Fi,a:C,wa:ci}}}class di{name="ExitStatus";constructor(d){this.message=`Program terminated with exit(${d})`,this.status=d}}var _a=n=>{n.terminate(),n.onmessage=()=>{}},pi=[],ya=n=>{Xe.length==0&&(Ct(),_i(Xe[0]));var d=Xe.pop();if(!d)return 6;Se.push(d),tt[n.Bb]=d,d.Bb=n.Bb;var h={Db:"run",hc:n.fc,Jb:n.Jb,Bb:n.Bb};return d.postMessage(h,n.Nb),0},bt=0,Te=(n,d,...h)=>{for(var _=2*h.length,$=qi(),k=Li(8*_),l=k>>>3,c=0;c<h.length;c++){var b=h[c];typeof b=="bigint"?(J[l+2*c]=1n,J[l+2*c+1]=b):(J[l+2*c]=0n,ke()[l+2*c+1>>>0]=b)}return n=Za(n,0,_,k,d),jr($),n};function ci(n){if(u)return Te(0,1,n);if(z=n,!(0<bt)){for(var d of Se)_a(d);for(d of Xe)_a(d);Xe=[],Se=[],tt={},Q=!0}w(0,new di(n))}function fi(n){if(u)return Te(1,0,n);hi(n)}var hi=n=>{if(z=n,u)throw fi(n),"unwind";ci(n)},Xe=[],Se=[],ze=[],tt={},mi=n=>{var d=n.Bb;delete tt[d],Xe.push(n),Se.splice(Se.indexOf(n),1),n.Bb=0,Xa(d)};function gi(){ze.forEach(n=>n())}var _i=n=>new Promise(d=>{n.onmessage=$=>{var k=($=$.data).Db;if($.Hb&&$.Hb!=qr()){var l=tt[$.Hb];l?l.postMessage($,$.Nb):le(`Internal error! Worker sent a message "${k}" to target pthread ${$.Hb}, but that thread no longer exists!`)}else k==="checkMailbox"?Pr():k==="spawnThread"?ya($):k==="cleanupThread"?mi(tt[$.ic]):k==="loaded"?(n.loaded=!0,d(n)):$.target==="setimmediate"?n.postMessage($):k==="callHandler"?r[$.Rb](...$.args):k&&le(`worker sent an unknown command ${k}`)},n.onerror=$=>{throw le(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var h,_=[];for(h of[])r.propertyIsEnumerable(h)&&_.push(h);n.postMessage({Db:"load",Sb:_,kc:C,lc:v})});function Ct(){var n=new Worker((()=>{let d=URL;return self.location.href>"file:"&&self.location.href<"file;"?new d("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Xe.push(n)}var Qs=n=>{Pe();var d=fe()[n+52>>>2>>>0];n=fe()[n+56>>>2>>>0],en(d,d-n),jr(d)},Js=(n,d)=>{bt=0,n=tn(n,d),0<bt?z=n:Wi(n)};class Kt{constructor(d){this.Ib=d-24}}function yi(n,d,h){var _=new Kt(n>>>=0);throw d>>>=0,h>>>=0,fe()[_.Ib+16>>>2>>>0]=0,fe()[_.Ib+4>>>2>>>0]=d,fe()[_.Ib+8>>>2>>>0]=h,n}function cr(n,d,h,_){return u?Te(2,1,n,d,h,_):bi(n,d,h,_)}function bi(n,d,h,_){if(n>>>=0,h>>>=0,_>>>=0,p===void 0)return 6;var $=[];return u&&$.length===0?cr(n,d>>>=0,h,_):(n={fc:h,Bb:n,Jb:_,Nb:$},u?(n.Db="spawnThread",postMessage(n,$),0):ya(n))}var ba=typeof TextDecoder<"u"?new TextDecoder:void 0,va=(n,d=0,h=NaN)=>{var _=(d>>>=0)+h;for(h=d;n[h]&&!(h>=_);)++h;if(16<h-d&&n.buffer&&ba)return ba.decode(n.buffer instanceof ArrayBuffer?n.subarray(d,h):n.slice(d,h));for(_="";d<h;){var $=n[d++];if(128&$){var k=63&n[d++];if((224&$)==192)_+=String.fromCharCode((31&$)<<6|k);else{var l=63&n[d++];65536>($=(240&$)==224?(15&$)<<12|k<<6|l:(7&$)<<18|k<<12|l<<6|63&n[d++])?_+=String.fromCharCode($):($-=65536,_+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else _+=String.fromCharCode($)}return _},Fe=(n,d)=>(n>>>=0)?va(G(),n,d):"";function wa(n,d,h){return u?Te(3,1,n,d,h):0}function $a(n,d){if(u)return Te(4,1,n,d)}function Ye(n,d){if(u)return Te(5,1,n,d)}function Dt(n,d,h){if(u)return Te(6,1,n,d,h)}function kt(n,d,h){return u?Te(7,1,n,d,h):0}function fr(n,d){if(u)return Te(8,1,n,d)}function Yt(n,d,h){if(u)return Te(9,1,n,d,h)}function ve(n,d,h,_){if(u)return Te(10,1,n,d,h,_)}function xa(n,d,h,_){if(u)return Te(11,1,n,d,h,_)}function rt(n,d,h,_){if(u)return Te(12,1,n,d,h,_)}function vi(n){if(u)return Te(13,1,n)}function Et(n,d){if(u)return Te(14,1,n,d)}function wi(n,d,h){if(u)return Te(15,1,n,d,h)}var Ta,eo=()=>St(""),lt=n=>{for(var d="";G()[n>>>0];)d+=Ta[G()[n++>>>0]];return d},hr={},mr={},Ft=r.BindingError=class extends Error{constructor(n){super(n),this.name="BindingError"}};function vt(n,d,h={}){return(function(_,$,k={}){var l=$.name;if(!_)throw new Ft(`type "${l}" must have a positive integer typeid pointer`);if(mr.hasOwnProperty(_)){if(k.Tb)return;throw new Ft(`Cannot register type '${l}' twice`)}mr[_]=$,hr.hasOwnProperty(_)&&($=hr[_],delete hr[_],$.forEach(c=>c()))})(n,d,h)}var $i=(n,d,h)=>{switch(d){case 1:return h?_=>N()[_>>>0]:_=>G()[_>>>0];case 2:return h?_=>se()[_>>>1>>>0]:_=>he()[_>>>1>>>0];case 4:return h?_=>V()[_>>>2>>>0]:_=>fe()[_>>>2>>>0];case 8:return h?_=>J[_>>>3]:_=>re[_>>>3];default:throw new TypeError(`invalid integer width (${d}): ${n}`)}};function Sa(n,d,h){h>>>=0,vt(n>>>=0,{name:d=lt(d>>>0),fromWireType:_=>_,toWireType:function(_,$){if(typeof $!="bigint"&&typeof $!="number")throw $=$===null?"null":(_=typeof $)=="object"||_==="array"||_==="function"?$.toString():""+$,new TypeError(`Cannot convert "${$}" to ${this.name}`);return typeof $=="number"&&($=BigInt($)),$},Cb:wt,readValueFromPointer:$i(d,h,d.indexOf("u")==-1),Eb:null})}var wt=8;function to(n,d,h,_){vt(n>>>=0,{name:d=lt(d>>>0),fromWireType:function($){return!!$},toWireType:function($,k){return k?h:_},Cb:wt,readValueFromPointer:function($){return this.fromWireType(G()[$>>>0])},Eb:null})}var xi=[],$t=[];function Ti(n){9<(n>>>=0)&&--$t[n+1]==0&&($t[n]=void 0,xi.push(n))}var Ne=n=>{if(!n)throw new Ft(`Cannot use deleted val. handle = ${n}`);return $t[n]},He=n=>{switch(n){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=xi.pop()||$t.length;return $t[d]=n,$t[d+1]=1,d}};function zr(n){return this.fromWireType(fe()[n>>>2>>>0])}var gr={name:"emscripten::val",fromWireType:n=>{var d=Ne(n);return Ti(n),d},toWireType:(n,d)=>He(d),Cb:wt,readValueFromPointer:zr,Eb:null};function ro(n){return vt(n>>>0,gr)}var Or=(n,d)=>{switch(d){case 4:return function(h){return this.fromWireType(ut()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(ke()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${n}`)}};function Si(n,d,h){h>>>=0,vt(n>>>=0,{name:d=lt(d>>>0),fromWireType:_=>_,toWireType:(_,$)=>$,Cb:wt,readValueFromPointer:Or(d,h),Eb:null})}function Ca(n,d,h,_,$){if(n>>>=0,h>>>=0,d=lt(d>>>0),$===-1&&($=4294967295),$=c=>c,_===0){var k=32-8*h;$=c=>c<<k>>>k}var l=d.includes("unsigned")?function(c,b){return b>>>0}:function(c,b){return b};vt(n,{name:d,fromWireType:$,toWireType:l,Cb:wt,readValueFromPointer:$i(d,h,_!==0),Eb:null})}function io(n,d,h){function _(k){var l=fe()[k>>>2>>>0];return k=fe()[k+4>>>2>>>0],new $(N().buffer,k,l)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];vt(n>>>=0,{name:h=lt(h>>>0),fromWireType:_,Cb:wt,readValueFromPointer:_},{Tb:!0})}var Nt=(n,d,h)=>{var _=G();if(d>>>=0,0<h){var $=d;h=d+h-1;for(var k=0;k<n.length;++k){var l=n.charCodeAt(k);if(55296<=l&&57343>=l&&(l=65536+((1023&l)<<10)|1023&n.charCodeAt(++k)),127>=l){if(d>=h)break;_[d++>>>0]=l}else{if(2047>=l){if(d+1>=h)break;_[d++>>>0]=192|l>>6}else{if(65535>=l){if(d+2>=h)break;_[d++>>>0]=224|l>>12}else{if(d+3>=h)break;_[d++>>>0]=240|l>>18,_[d++>>>0]=128|l>>12&63}_[d++>>>0]=128|l>>6&63}_[d++>>>0]=128|63&l}}_[d>>>0]=0,n=d-$}else n=0;return n},Ci=n=>{for(var d=0,h=0;h<n.length;++h){var _=n.charCodeAt(h);127>=_?d++:2047>=_?d+=2:55296<=_&&57343>=_?(d+=4,++h):d+=3}return d};function ao(n,d){vt(n>>>=0,{name:d=lt(d>>>0),fromWireType:function(h){for(var _,$=fe()[h>>>2>>>0],k=h+4,l=k,c=0;c<=$;++c){var b=k+c;c!=$&&G()[b>>>0]!=0||(l=Fe(l,b-l),_===void 0?_=l:(_+="\0",_+=l),l=b+1)}return xt(h),_},toWireType:function(h,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var $=typeof _=="string";if(!($||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new Ft("Cannot pass non-string to std::string");var k=$?Ci(_):_.length,l=Vr(4+k+1),c=l+4;return fe()[l>>>2>>>0]=k,$?Nt(_,c,k+1):G().set(_,c>>>0),h!==null&&h.push(xt,l),l},Cb:wt,readValueFromPointer:zr,Eb(h){xt(h)}})}var ka=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ki=(n,d)=>{for(var h=n>>1,_=h+d/2;!(h>=_)&&he()[h>>>0];)++h;if(32<(h<<=1)-n&&ka)return ka.decode(G().slice(n,h));for(h="",_=0;!(_>=d/2);++_){var $=se()[n+2*_>>>1>>>0];if($==0)break;h+=String.fromCharCode($)}return h},no=(n,d,h)=>{if(h??=2147483647,2>h)return 0;var _=d;h=(h-=2)<2*n.length?h/2:n.length;for(var $=0;$<h;++$){var k=n.charCodeAt($);se()[d>>>1>>>0]=k,d+=2}return se()[d>>>1>>>0]=0,d-_},so=n=>2*n.length,oo=(n,d)=>{for(var h=0,_="";!(h>=d/4);){var $=V()[n+4*h>>>2>>>0];if($==0)break;++h,65536<=$?($-=65536,_+=String.fromCharCode(55296|$>>10,56320|1023&$)):_+=String.fromCharCode($)}return _},Rr=(n,d,h)=>{if(d>>>=0,h??=2147483647,4>h)return 0;var _=d;h=_+h-4;for(var $=0;$<n.length;++$){var k=n.charCodeAt($);if(55296<=k&&57343>=k&&(k=65536+((1023&k)<<10)|1023&n.charCodeAt(++$)),V()[d>>>2>>>0]=k,(d+=4)+4>h)break}return V()[d>>>2>>>0]=0,d-_},uo=n=>{for(var d=0,h=0;h<n.length;++h){var _=n.charCodeAt(h);55296<=_&&57343>=_&&++h,d+=4}return d};function Mr(n,d,h){if(n>>>=0,d>>>=0,h=lt(h>>>=0),d===2)var _=ki,$=no,k=so,l=c=>he()[c>>>1>>>0];else d===4&&(_=oo,$=Rr,k=uo,l=c=>fe()[c>>>2>>>0]);vt(n,{name:h,fromWireType:c=>{for(var b,S=fe()[c>>>2>>>0],A=c+4,R=0;R<=S;++R){var P=c+4+R*d;R!=S&&l(P)!=0||(A=_(A,P-A),b===void 0?b=A:(b+="\0",b+=A),A=P+d)}return xt(c),b},toWireType:(c,b)=>{if(typeof b!="string")throw new Ft(`Cannot pass non-string to C++ string type ${h}`);var S=k(b),A=Vr(4+S+d);return fe()[A>>>2>>>0]=S/d,$(b,A+4,S+d),c!==null&&c.push(xt,A),A},Cb:wt,readValueFromPointer:zr,Eb(c){xt(c)}})}function lo(n,d){vt(n>>>=0,{Ub:!0,name:d=lt(d>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function Ea(n){Ui(n>>>0,!o,1,!s,131072,!1),gi()}var Oe=n=>{if(!Q)try{if(n(),!(0<bt))try{u?Wi(z):hi(z)}catch(d){d instanceof di||d=="unwind"||w(0,d)}}catch(d){d instanceof di||d=="unwind"||w(0,d)}};function It(n){n>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(V(),n>>>2,n).value.then(Pr),n+=128,Atomics.store(V(),n>>>2,1))}var Pr=()=>{var n=qr();n&&(It(n),Oe(Ja))};function Ia(n,d){(n>>>=0)==d>>>0?setTimeout(Pr):u?postMessage({Hb:n,Db:"checkMailbox"}):(n=tt[n])&&n.postMessage({Db:"checkMailbox"})}var _r=[];function yr(n,d,h,_,$){for(d>>>=0,_/=2,_r.length=_,h=$>>>0>>>3,$=0;$<_;$++)_r[$]=J[h+2*$]?J[h+2*$+1]:ke()[h+2*$+1>>>0];return(d?Wr[d]:ja[n])(..._r)}var po=()=>{bt=0};function Aa(n){n>>>=0,u?postMessage({Db:"cleanupThread",ic:n}):mi(tt[n])}function za(n){}var br=(n,d)=>{var h=mr[n];if(h===void 0)throw n=Lr(n),h=lt(n),xt(n),new Ft(`${d} has unknown type ${h}`);return h},Oa=(n,d,h)=>{var _=[];return n=n.toWireType(_,h),_.length&&(fe()[d>>>2>>>0]=He(_)),n};function co(n,d,h){return d>>>=0,h>>>=0,n=Ne(n>>>0),d=br(d,"emval::as"),Oa(d,h,n)}function fo(n,d){return d>>>=0,n=Ne(n>>>0),(d=br(d,"emval::as")).toWireType(null,n)}var vr=n=>{try{n()}catch(d){St(d)}},At=0,dt=null,Ra=0,wr=[],it={},Br={},Le=0,Ei=null,ho=[];function Ma(n){return(function(d){if(!Q){if(At===0){var h=!1,_=!1;d(($=0)=>{if(!Q&&(Ra=$,h=!0,_)){At=2,vr(()=>nn(dt)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),$=!1;try{var k=(function(){var b=V()[dt+8>>>2>>>0];return b=W[Br[b]],--bt,b()})()}catch(b){k=b,$=!0}var l=!1;if(!dt){var c=Ei;c&&(Ei=null,($?c.reject:c.resolve)(k),l=!0)}if($&&!l)throw k}}),_=!0,h||(At=1,dt=(function(){var $=Vr(65548),k=$+12;fe()[$>>>2>>>0]=k,fe()[$+4>>>2>>>0]=k+65536,k=wr[0];var l=it[k];return l===void 0&&(l=Le++,it[k]=l,Br[l]=k),k=l,V()[$+8>>>2>>>0]=k,$})(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),vr(()=>rn(dt)))}else At===2?(At=0,vr(sn),xt(dt),dt=null,ho.forEach(Oe)):St(`invalid state: ${At}`);return Ra}})(d=>{n().then(d)})}function mo(n){return n>>>=0,Ma(async()=>{var d=await Ne(n);return He(d)})}var Dr=[];function go(n,d,h,_){return h>>>=0,_>>>=0,(n=Dr[n>>>0])(null,d=Ne(d>>>0),h,_)}var _o={},$r=n=>{var d=_o[n];return d===void 0?lt(n):d};function Pa(n,d,h,_,$){return h>>>=0,_>>>=0,$>>>=0,(n=Dr[n>>>0])(d=Ne(d>>>0),d[h=$r(h)],_,$)}function yo(n,d){return d>>>=0,(n=Ne(n>>>0))==Ne(d)}var Ii=()=>typeof globalThis=="object"?globalThis:Function("return this")();function bo(n){return(n>>>=0)==0?He(Ii()):(n=$r(n),He(Ii()[n]))}var vo=n=>{var d=Dr.length;return Dr.push(n),d},wo=(n,d)=>{for(var h=Array(n),_=0;_<n;++_)h[_]=br(fe()[d+4*_>>>2>>>0],`parameter ${_}`);return h};function $o(n,d,h){var _=(d=wo(n,d>>>0)).shift();n--;var $=`return function (obj, func, destructorsRef, args) {
`,k=0,l=[];h===0&&l.push("obj");for(var c=["retType"],b=[_],S=0;S<n;++S)l.push(`arg${S}`),c.push(`argType${S}`),b.push(d[S]),$+=`  var arg${S} = argType${S}.readValueFromPointer(args${k?"+"+k:""});
`,k+=d[S].Cb;return $+=`  var rv = ${h===1?"new func":"func.call"}(${l.join(", ")});
`,_.Ub||(c.push("emval_returnValue"),b.push(Oa),$+=`  return emval_returnValue(retType, destructorsRef, rv);
`),n=new Function(...c,$+`};
`)(...b),h=`methodCaller<(${d.map(A=>A.name).join(", ")}) => ${_.name}>`,vo(Object.defineProperty(n,"name",{value:h}))}function xo(n){return n=$r(n>>>0),He(r[n])}function To(n,d){return d>>>=0,n=Ne(n>>>0),d=Ne(d),He(n[d])}function So(n){9<(n>>>=0)&&($t[n+1]+=1)}function Co(){return He([])}function Ai(n){n=Ne(n>>>0);for(var d=Array(n.length),h=0;h<n.length;h++)d[h]=n[h];return He(d)}function ko(n){return He($r(n>>>0))}function Eo(){return He({})}function Io(n){for(var d=Ne(n>>>=0);d.length;){var h=d.pop();d.pop()(h)}Ti(n)}function Ao(n,d,h){d>>>=0,h>>>=0,n=Ne(n>>>0),d=Ne(d),h=Ne(h),n[d]=h}function zo(n,d){return d>>>=0,n=(n=br(n>>>0,"_emval_take_value")).readValueFromPointer(d),He(n)}function zi(n,d){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),d>>>=0,n=new Date(1e3*n),V()[d>>>2>>>0]=n.getUTCSeconds(),V()[d+4>>>2>>>0]=n.getUTCMinutes(),V()[d+8>>>2>>>0]=n.getUTCHours(),V()[d+12>>>2>>>0]=n.getUTCDate(),V()[d+16>>>2>>>0]=n.getUTCMonth(),V()[d+20>>>2>>>0]=n.getUTCFullYear()-1900,V()[d+24>>>2>>>0]=n.getUTCDay(),n=(n.getTime()-Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,V()[d+28>>>2>>>0]=n}var Ba=n=>n%4==0&&(n%100!=0||n%400==0),Da=[0,31,60,91,121,152,182,213,244,274,305,335],Fa=[0,31,59,90,120,151,181,212,243,273,304,334];function Oo(n,d){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),d>>>=0,n=new Date(1e3*n),V()[d>>>2>>>0]=n.getSeconds(),V()[d+4>>>2>>>0]=n.getMinutes(),V()[d+8>>>2>>>0]=n.getHours(),V()[d+12>>>2>>>0]=n.getDate(),V()[d+16>>>2>>>0]=n.getMonth(),V()[d+20>>>2>>>0]=n.getFullYear()-1900,V()[d+24>>>2>>>0]=n.getDay();var h=(Ba(n.getFullYear())?Da:Fa)[n.getMonth()]+n.getDate()-1|0;V()[d+28>>>2>>>0]=h,V()[d+36>>>2>>>0]=-60*n.getTimezoneOffset(),h=new Date(n.getFullYear(),6,1).getTimezoneOffset();var _=new Date(n.getFullYear(),0,1).getTimezoneOffset();n=0|(h!=_&&n.getTimezoneOffset()==Math.min(_,h)),V()[d+32>>>2>>>0]=n}function Ro(n){n>>>=0;var d=new Date(V()[n+20>>>2>>>0]+1900,V()[n+16>>>2>>>0],V()[n+12>>>2>>>0],V()[n+8>>>2>>>0],V()[n+4>>>2>>>0],V()[n>>>2>>>0],0),h=V()[n+32>>>2>>>0],_=d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset(),k=new Date(d.getFullYear(),0,1).getTimezoneOffset(),l=Math.min(k,$);return 0>h?V()[n+32>>>2>>>0]=+($!=k&&l==_):0<h!=(l==_)&&($=Math.max(k,$),d.setTime(d.getTime()+6e4*((0<h?l:$)-_))),V()[n+24>>>2>>>0]=d.getDay(),h=(Ba(d.getFullYear())?Da:Fa)[d.getMonth()]+d.getDate()-1|0,V()[n+28>>>2>>>0]=h,V()[n>>>2>>>0]=d.getSeconds(),V()[n+4>>>2>>>0]=d.getMinutes(),V()[n+8>>>2>>>0]=d.getHours(),V()[n+12>>>2>>>0]=d.getDate(),V()[n+16>>>2>>>0]=d.getMonth(),V()[n+20>>>2>>>0]=d.getYear(),n=d.getTime(),BigInt(isNaN(n)?-1:n/1e3)}function Na(n,d,h,_,$,k,l){return u?Te(16,1,n,d,h,_,$,k,l):-52}function Ua(n,d,h,_,$,k){if(u)return Te(17,1,n,d,h,_,$,k)}var xr={},Mo=()=>performance.timeOrigin+performance.now();function Wa(n,d){if(u)return Te(18,1,n,d);if(xr[n]&&(clearTimeout(xr[n].id),delete xr[n]),!d)return 0;var h=setTimeout(()=>{delete xr[n],Oe(()=>Qa(n,performance.timeOrigin+performance.now()))},d);return xr[n]={id:h,rc:d},0}function Po(n,d,h,_){n>>>=0,d>>>=0,h>>>=0,_>>>=0;var $=new Date().getFullYear(),k=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var l=Math.max(k,$);fe()[n>>>2>>>0]=60*l,V()[d>>>2>>>0]=+(k!=$),n=(d=c=>{var b=Math.abs(c);return`UTC${0<=c?"-":"+"}${String(Math.floor(b/60)).padStart(2,"0")}${String(b%60).padStart(2,"0")}`})(k),d=d($),$<k?(Nt(n,h,17),Nt(d,_,17)):(Nt(n,_,17),Nt(d,h,17))}var Bo=()=>Date.now();function Do(n,d,h){return 0<=n&&3>=n?(n===0?n=Date.now():n=performance.timeOrigin+performance.now(),J[h>>>0>>>3]=BigInt(Math.round(1e6*n)),0):28}var Oi=[],La=(n,d)=>{Oi.length=0;for(var h;h=G()[n++>>>0];){var _=h!=105;d+=(_&=h!=112)&&d%8?4:0,Oi.push(h==112?fe()[d>>>2>>>0]:h==106?J[d>>>3]:h==105?V()[d>>>2>>>0]:ke()[d>>>3>>>0]),d+=_?8:4}return Oi};function Fo(n,d,h){return n>>>=0,d=La(d>>>0,h>>>0),Wr[n](...d)}function No(n,d,h){return n>>>=0,d=La(d>>>0,h>>>0),Wr[n](...d)}var Uo=()=>{};function Wo(n,d){return le(Fe(n>>>0,d>>>0))}var Fr=()=>{throw bt+=1,"unwind"};function Lo(){return 4294901760}var qa=()=>navigator.hardwareConcurrency;function qo(){return St("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Vo(n){n>>>=0;var d=G().length;if(n<=d||4294901760<n)return!1;for(var h=1;4>=h;h*=2){var _=d*(1+.2/h);_=Math.min(_,n+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(n,_)/65536))-C.buffer.byteLength+65535)/65536|0;try{C.grow(_),Pe();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}var Nr=()=>(St("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Tr={},Ri=n=>{n.forEach(d=>{Nr()})};function jo(){var n=Error().stack.toString().split(`
`);return n[0]=="Error"&&n.shift(),Ri(n),Tr.Mb=Nr(),Tr.dc=n,Tr.Mb}function Ho(n,d,h){if(n>>>=0,d>>>=0,Tr.Mb==n)var _=Tr.dc;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),Ri(_);for(var $=3;_[$]&&Nr()!=n;)++$;for(n=0;n<h&&_[n+$];++n)V()[d+4*n>>>2>>>0]=Nr();return n}var Mi,Sr={},Pi=()=>{if(!Mi){var n,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(n in Sr)Sr[n]===void 0?delete d[n]:d[n]=Sr[n];var h=[];for(n in d)h.push(`${n}=${d[n]}`);Mi=h}return Mi};function Ur(n,d){if(u)return Te(19,1,n,d);n>>>=0,d>>>=0;var h,_=0,$=0;for(h of Pi()){var k=d+_;fe()[n+$>>>2>>>0]=k,_+=Nt(h,k,1/0)+1,$+=4}return 0}function at(n,d){if(u)return Te(20,1,n,d);n>>>=0,d>>>=0;var h=Pi();for(var _ of(fe()[n>>>2>>>0]=h.length,n=0,h))n+=Ci(_)+1;return fe()[d>>>2>>>0]=n,0}function Be(n){return u?Te(21,1,n):52}function Bi(n,d,h,_){return u?Te(22,1,n,d,h,_):52}function Di(n,d,h,_){return u?Te(23,1,n,d,h,_):70}var Va=[null,[],[]];function Fi(n,d,h,_){if(u)return Te(24,1,n,d,h,_);d>>>=0,h>>>=0,_>>>=0;for(var $=0,k=0;k<h;k++){var l=fe()[d>>>2>>>0],c=fe()[d+4>>>2>>>0];d+=8;for(var b=0;b<c;b++){var S=n,A=G()[l+b>>>0],R=Va[S];A===0||A===10?((S===1?Y:le)(va(R)),R.length=0):R.push(A)}$+=c}return fe()[_>>>2>>>0]=$,0}u||(function(){for(var n=r.numThreads-1;n--;)Ct();pi.push(()=>{Ke++,(function(d){u?d():Promise.all(Xe.map(_i)).then(d)})(()=>ma())})})();for(var Ni=Array(256),Zt=0;256>Zt;++Zt)Ni[Zt]=String.fromCharCode(Zt);Ta=Ni,$t.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>$t.length/2-5-xi.length,u||(C=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Pe()),r.wasmBinary&&(I=r.wasmBinary),r.stackSave=()=>qi(),r.stackRestore=n=>jr(n),r.stackAlloc=n=>Li(n),r.setValue=function(n,d,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":N()[n>>>0]=d;break;case"i16":se()[n>>>1>>>0]=d;break;case"i32":V()[n>>>2>>>0]=d;break;case"i64":J[n>>>3]=BigInt(d);break;case"float":ut()[n>>>2>>>0]=d;break;case"double":ke()[n>>>3>>>0]=d;break;case"*":fe()[n>>>2>>>0]=d;break;default:St(`invalid type for setValue: ${h}`)}},r.getValue=function(n,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return N()[n>>>0];case"i16":return se()[n>>>1>>>0];case"i32":return V()[n>>>2>>>0];case"i64":return J[n>>>3];case"float":return ut()[n>>>2>>>0];case"double":return ke()[n>>>3>>>0];case"*":return fe()[n>>>2>>>0];default:St(`invalid type for getValue: ${d}`)}},r.UTF8ToString=Fe,r.stringToUTF8=Nt,r.lengthBytesUTF8=Ci;var ja=[ci,fi,cr,wa,$a,Ye,Dt,kt,fr,Yt,ve,xa,rt,vi,Et,wi,Na,Ua,Wa,Ur,at,Be,Bi,Di,Fi],Wr={893836:(n,d,h,_,$)=>{if(r===void 0||!r.Fb)return 1;if((n=Fe(Number(n>>>0))).startsWith("./")&&(n=n.substring(2)),!(n=r.Fb.get(n)))return 2;if(d=Number(d>>>0),h=Number(h>>>0),_=Number(_>>>0),d+h>n.byteLength)return 3;try{let k=n.subarray(d,d+h);switch($){case 0:G().set(k,_>>>0);break;case 1:r.mc?r.mc(_,k):r.cc(_,k);break;default:return 4}return 0}catch{return 4}},894660:(n,d,h)=>{r.Pb(n,G().subarray(d>>>0,d+h>>>0))},894724:()=>r.oc(),894766:n=>{r.Ob(n)},894803:()=>{r.Wb()},894834:()=>{r.Xb()},894863:()=>{r.ac()},894888:n=>r.Vb(n),894921:n=>r.Zb(n),894953:(n,d,h)=>{r.Lb(Number(n),Number(d),Number(h),!0)},895016:(n,d,h)=>{r.Lb(Number(n),Number(d),Number(h))},895073:()=>typeof wasmOffsetConverter<"u",895130:n=>{r.Ab("Abs",n,void 0)},895181:n=>{r.Ab("Neg",n,void 0)},895232:n=>{r.Ab("Floor",n,void 0)},895285:n=>{r.Ab("Ceil",n,void 0)},895337:n=>{r.Ab("Reciprocal",n,void 0)},895395:n=>{r.Ab("Sqrt",n,void 0)},895447:n=>{r.Ab("Exp",n,void 0)},895498:n=>{r.Ab("Erf",n,void 0)},895549:n=>{r.Ab("Sigmoid",n,void 0)},895604:(n,d,h)=>{r.Ab("HardSigmoid",n,{alpha:d,beta:h})},895683:n=>{r.Ab("Log",n,void 0)},895734:n=>{r.Ab("Sin",n,void 0)},895785:n=>{r.Ab("Cos",n,void 0)},895836:n=>{r.Ab("Tan",n,void 0)},895887:n=>{r.Ab("Asin",n,void 0)},895939:n=>{r.Ab("Acos",n,void 0)},895991:n=>{r.Ab("Atan",n,void 0)},896043:n=>{r.Ab("Sinh",n,void 0)},896095:n=>{r.Ab("Cosh",n,void 0)},896147:n=>{r.Ab("Asinh",n,void 0)},896200:n=>{r.Ab("Acosh",n,void 0)},896253:n=>{r.Ab("Atanh",n,void 0)},896306:n=>{r.Ab("Tanh",n,void 0)},896358:n=>{r.Ab("Not",n,void 0)},896409:(n,d,h)=>{r.Ab("Clip",n,{min:d,max:h})},896478:n=>{r.Ab("Clip",n,void 0)},896530:(n,d)=>{r.Ab("Elu",n,{alpha:d})},896588:n=>{r.Ab("Gelu",n,void 0)},896640:n=>{r.Ab("Relu",n,void 0)},896692:(n,d)=>{r.Ab("LeakyRelu",n,{alpha:d})},896756:(n,d)=>{r.Ab("ThresholdedRelu",n,{alpha:d})},896826:(n,d)=>{r.Ab("Cast",n,{to:d})},896884:n=>{r.Ab("Add",n,void 0)},896935:n=>{r.Ab("Sub",n,void 0)},896986:n=>{r.Ab("Mul",n,void 0)},897037:n=>{r.Ab("Div",n,void 0)},897088:n=>{r.Ab("Pow",n,void 0)},897139:n=>{r.Ab("Equal",n,void 0)},897192:n=>{r.Ab("Greater",n,void 0)},897247:n=>{r.Ab("GreaterOrEqual",n,void 0)},897309:n=>{r.Ab("Less",n,void 0)},897361:n=>{r.Ab("LessOrEqual",n,void 0)},897420:(n,d,h,_,$)=>{r.Ab("ReduceMean",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},897595:(n,d,h,_,$)=>{r.Ab("ReduceMax",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},897769:(n,d,h,_,$)=>{r.Ab("ReduceMin",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},897943:(n,d,h,_,$)=>{r.Ab("ReduceProd",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},898118:(n,d,h,_,$)=>{r.Ab("ReduceSum",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},898292:(n,d,h,_,$)=>{r.Ab("ReduceL1",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},898465:(n,d,h,_,$)=>{r.Ab("ReduceL2",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},898638:(n,d,h,_,$)=>{r.Ab("ReduceLogSum",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},898815:(n,d,h,_,$)=>{r.Ab("ReduceSumSquare",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},898995:(n,d,h,_,$)=>{r.Ab("ReduceLogSumExp",n,{keepDims:!!d,noopWithEmptyAxes:!!h,axes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},899175:n=>{r.Ab("Where",n,void 0)},899228:(n,d,h)=>{r.Ab("Transpose",n,{perm:d?Array.from(V().subarray(Number(d)>>>0,Number(h)>>>0)):[]})},899352:(n,d,h,_)=>{r.Ab("DepthToSpace",n,{blocksize:d,mode:Fe(h),format:_?"NHWC":"NCHW"})},899485:(n,d,h,_)=>{r.Ab("DepthToSpace",n,{blocksize:d,mode:Fe(h),format:_?"NHWC":"NCHW"})},899618:(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j)=>{r.Ab("ConvTranspose",n,{format:b?"NHWC":"NCHW",autoPad:d,dilations:[h],group:_,kernelShape:[$],pads:[k,l],strides:[c],wIsConst:()=>!!N()[S>>>0],outputPadding:A?Array.from(V().subarray(Number(A)>>>0,Number(R)>>>0)):[],outputShape:P?Array.from(V().subarray(Number(P)>>>0,Number(D)>>>0)):[],activation:Fe(j)})},900051:(n,d,h,_,$,k,l,c,b,S,A,R,P,D)=>{r.Ab("ConvTranspose",n,{format:c?"NHWC":"NCHW",autoPad:d,dilations:Array.from(V().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:_,kernelShape:Array.from(V().subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from(V().subarray(Number(k)>>>0,4+(Number(k)>>>0)>>>0)),strides:Array.from(V().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),wIsConst:()=>!!N()[b>>>0],outputPadding:S?Array.from(V().subarray(Number(S)>>>0,Number(A)>>>0)):[],outputShape:R?Array.from(V().subarray(Number(R)>>>0,Number(P)>>>0)):[],activation:Fe(D)})},900712:(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j)=>{r.Ab("ConvTranspose",n,{format:b?"NHWC":"NCHW",autoPad:d,dilations:[h],group:_,kernelShape:[$],pads:[k,l],strides:[c],wIsConst:()=>!!N()[S>>>0],outputPadding:A?Array.from(V().subarray(Number(A)>>>0,Number(R)>>>0)):[],outputShape:P?Array.from(V().subarray(Number(P)>>>0,Number(D)>>>0)):[],activation:Fe(j)})},901145:(n,d,h,_,$,k,l,c,b,S,A,R,P,D)=>{r.Ab("ConvTranspose",n,{format:c?"NHWC":"NCHW",autoPad:d,dilations:Array.from(V().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:_,kernelShape:Array.from(V().subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from(V().subarray(Number(k)>>>0,4+(Number(k)>>>0)>>>0)),strides:Array.from(V().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),wIsConst:()=>!!N()[b>>>0],outputPadding:S?Array.from(V().subarray(Number(S)>>>0,Number(A)>>>0)):[],outputShape:R?Array.from(V().subarray(Number(R)>>>0,Number(P)>>>0)):[],activation:Fe(D)})},901806:(n,d)=>{r.Ab("GlobalAveragePool",n,{format:d?"NHWC":"NCHW"})},901897:(n,d,h,_,$,k,l,c,b,S,A,R,P,D)=>{r.Ab("AveragePool",n,{format:D?"NHWC":"NCHW",auto_pad:d,ceil_mode:h,count_include_pad:_,storage_order:$,dilations:k?Array.from(V().subarray(Number(k)>>>0,Number(l)>>>0)):[],kernel_shape:c?Array.from(V().subarray(Number(c)>>>0,Number(b)>>>0)):[],pads:S?Array.from(V().subarray(Number(S)>>>0,Number(A)>>>0)):[],strides:R?Array.from(V().subarray(Number(R)>>>0,Number(P)>>>0)):[]})},902376:(n,d)=>{r.Ab("GlobalAveragePool",n,{format:d?"NHWC":"NCHW"})},902467:(n,d,h,_,$,k,l,c,b,S,A,R,P,D)=>{r.Ab("AveragePool",n,{format:D?"NHWC":"NCHW",auto_pad:d,ceil_mode:h,count_include_pad:_,storage_order:$,dilations:k?Array.from(V().subarray(Number(k)>>>0,Number(l)>>>0)):[],kernel_shape:c?Array.from(V().subarray(Number(c)>>>0,Number(b)>>>0)):[],pads:S?Array.from(V().subarray(Number(S)>>>0,Number(A)>>>0)):[],strides:R?Array.from(V().subarray(Number(R)>>>0,Number(P)>>>0)):[]})},902946:(n,d)=>{r.Ab("GlobalMaxPool",n,{format:d?"NHWC":"NCHW"})},903033:(n,d,h,_,$,k,l,c,b,S,A,R,P,D)=>{r.Ab("MaxPool",n,{format:D?"NHWC":"NCHW",auto_pad:d,ceil_mode:h,count_include_pad:_,storage_order:$,dilations:k?Array.from(V().subarray(Number(k)>>>0,Number(l)>>>0)):[],kernel_shape:c?Array.from(V().subarray(Number(c)>>>0,Number(b)>>>0)):[],pads:S?Array.from(V().subarray(Number(S)>>>0,Number(A)>>>0)):[],strides:R?Array.from(V().subarray(Number(R)>>>0,Number(P)>>>0)):[]})},903508:(n,d)=>{r.Ab("GlobalMaxPool",n,{format:d?"NHWC":"NCHW"})},903595:(n,d,h,_,$,k,l,c,b,S,A,R,P,D)=>{r.Ab("MaxPool",n,{format:D?"NHWC":"NCHW",auto_pad:d,ceil_mode:h,count_include_pad:_,storage_order:$,dilations:k?Array.from(V().subarray(Number(k)>>>0,Number(l)>>>0)):[],kernel_shape:c?Array.from(V().subarray(Number(c)>>>0,Number(b)>>>0)):[],pads:S?Array.from(V().subarray(Number(S)>>>0,Number(A)>>>0)):[],strides:R?Array.from(V().subarray(Number(R)>>>0,Number(P)>>>0)):[]})},904070:(n,d,h,_,$)=>{r.Ab("Gemm",n,{alpha:d,beta:h,transA:_,transB:$})},904174:n=>{r.Ab("MatMul",n,void 0)},904228:(n,d,h,_)=>{r.Ab("ArgMax",n,{keepDims:!!d,selectLastIndex:!!h,axis:_})},904336:(n,d,h,_)=>{r.Ab("ArgMin",n,{keepDims:!!d,selectLastIndex:!!h,axis:_})},904444:(n,d)=>{r.Ab("Softmax",n,{axis:d})},904507:(n,d)=>{r.Ab("Concat",n,{axis:d})},904567:(n,d,h,_,$)=>{r.Ab("Split",n,{axis:d,numOutputs:h,splitSizes:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},904723:n=>{r.Ab("Expand",n,void 0)},904777:(n,d)=>{r.Ab("Gather",n,{axis:Number(d)})},904848:(n,d)=>{r.Ab("GatherElements",n,{axis:Number(d)})},904927:(n,d)=>{r.Ab("GatherND",n,{batch_dims:Number(d)})},905006:(n,d,h,_,$,k,l,c,b,S,A)=>{r.Ab("Resize",n,{antialias:d,axes:h?Array.from(V().subarray(Number(h)>>>0,Number(_)>>>0)):[],coordinateTransformMode:Fe($),cubicCoeffA:k,excludeOutside:l,extrapolationValue:c,keepAspectRatioPolicy:Fe(b),mode:Fe(S),nearestMode:Fe(A)})},905368:(n,d,h,_,$,k,l)=>{r.Ab("Slice",n,{starts:d?Array.from(V().subarray(Number(d)>>>0,Number(h)>>>0)):[],ends:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[],axes:k?Array.from(V().subarray(Number(k)>>>0,Number(l)>>>0)):[]})},905632:n=>{r.Ab("Tile",n,void 0)},905684:(n,d,h)=>{r.Ab("InstanceNormalization",n,{epsilon:d,format:h?"NHWC":"NCHW"})},905798:(n,d,h)=>{r.Ab("InstanceNormalization",n,{epsilon:d,format:h?"NHWC":"NCHW"})},905912:n=>{r.Ab("Range",n,void 0)},905965:(n,d)=>{r.Ab("Einsum",n,{equation:Fe(d)})},906046:(n,d,h,_,$)=>{r.Ab("Pad",n,{mode:d,value:h,pads:_?Array.from(V().subarray(Number(_)>>>0,Number($)>>>0)):[]})},906189:(n,d,h,_,$,k)=>{r.Ab("BatchNormalization",n,{epsilon:d,momentum:h,spatial:!!$,trainingMode:!!_,format:k?"NHWC":"NCHW"})},906358:(n,d,h,_,$,k)=>{r.Ab("BatchNormalization",n,{epsilon:d,momentum:h,spatial:!!$,trainingMode:!!_,format:k?"NHWC":"NCHW"})},906527:(n,d,h)=>{r.Ab("CumSum",n,{exclusive:Number(d),reverse:Number(h)})},906624:(n,d,h)=>{r.Ab("DequantizeLinear",n,{axis:d,blockSize:h})},906714:(n,d,h,_,$)=>{r.Ab("GridSample",n,{align_corners:d,mode:Fe(h),padding_mode:Fe(_),format:$?"NHWC":"NCHW"})},906884:(n,d,h,_,$)=>{r.Ab("GridSample",n,{align_corners:d,mode:Fe(h),padding_mode:Fe(_),format:$?"NHWC":"NCHW"})},907054:(n,d)=>{r.Ab("ScatterND",n,{reduction:Fe(d)})},907139:(n,d,h,_,$,k,l,c,b)=>{r.Ab("Attention",n,{numHeads:d,isUnidirectional:h,maskFilterValue:_,scale:$,doRotary:k,qkvHiddenSizes:l?Array.from(V().subarray(Number(c)>>>0,Number(c)+l>>>0)):[],pastPresentShareBuffer:!!b})},907411:n=>{r.Ab("BiasAdd",n,void 0)},907466:n=>{r.Ab("BiasSplitGelu",n,void 0)},907527:n=>{r.Ab("FastGelu",n,void 0)},907583:(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X)=>{r.Ab("Conv",n,{format:R?"NHWC":"NCHW",auto_pad:d,dilations:h?Array.from(V().subarray(Number(h)>>>0,Number(_)>>>0)):[],group:$,kernel_shape:k?Array.from(V().subarray(Number(k)>>>0,Number(l)>>>0)):[],pads:c?Array.from(V().subarray(Number(c)>>>0,Number(b)>>>0)):[],strides:S?Array.from(V().subarray(Number(S)>>>0,Number(A)>>>0)):[],w_is_const:()=>!!N()[Number(P)>>>0],activation:Fe(D),activation_params:j?Array.from(ut().subarray(Number(j)>>>0,Number(X)>>>0)):[]})},908167:n=>{r.Ab("Gelu",n,void 0)},908219:(n,d,h,_,$,k,l,c,b)=>{r.Ab("GroupQueryAttention",n,{numHeads:d,kvNumHeads:h,scale:_,softcap:$,doRotary:k,rotaryInterleaved:l,smoothSoftmax:c,localWindowSize:b})},908436:(n,d,h,_)=>{r.Ab("LayerNormalization",n,{axis:d,epsilon:h,simplified:!!_})},908547:(n,d,h,_)=>{r.Ab("LayerNormalization",n,{axis:d,epsilon:h,simplified:!!_})},908658:(n,d,h,_,$,k)=>{r.Ab("MatMulNBits",n,{k:d,n:h,accuracyLevel:_,bits:$,blockSize:k})},908785:(n,d,h,_,$,k)=>{r.Ab("MultiHeadAttention",n,{numHeads:d,isUnidirectional:h,maskFilterValue:_,scale:$,doRotary:k})},908944:(n,d)=>{r.Ab("QuickGelu",n,{alpha:d})},909008:(n,d,h,_,$)=>{r.Ab("RotaryEmbedding",n,{interleaved:!!d,numHeads:h,rotaryEmbeddingDim:_,scale:$})},909147:(n,d,h)=>{r.Ab("SkipLayerNormalization",n,{epsilon:d,simplified:!!h})},909249:(n,d,h)=>{r.Ab("SkipLayerNormalization",n,{epsilon:d,simplified:!!h})},909351:(n,d,h,_)=>{r.Ab("GatherBlockQuantized",n,{gatherAxis:d,quantizeAxis:h,blockSize:_})},909472:n=>{r.$b(n)},909506:(n,d)=>r.bc(Number(n),Number(d),r.Gb.ec,r.Gb.errors)};function Ha(n,d,h){return Ma(async()=>{await r.Yb(Number(n),Number(d),Number(h))})}function Ga(){return typeof wasmOffsetConverter<"u"}var W=await(async function(){function n(_,$){return W=_.exports,W=(function(){var k=W,l={};for(let[c,b]of Object.entries(k))l[c]=typeof b=="function"?(...S)=>{wr.push(c);try{return b(...S)}finally{Q||(wr.pop(),dt&&At===1&&wr.length===0&&(At=0,bt+=1,vr(an),typeof Fibers<"u"&&Fibers.sc()))}}:b;return l})(),W=(function(){var k=W,l=b=>S=>b(S)>>>0,c=b=>()=>b()>>>0;return(k=Object.assign({},k)).Ea=l(k.Ea),k.gb=c(k.gb),k.ib=l(k.ib),k.tb=l(k.tb),k.ub=c(k.ub),k.__cxa_get_exception_ptr=l(k.__cxa_get_exception_ptr),k})(),ze.push(W.jb),v=$,ma(),W}Ke++;var d=ga();if(r.instantiateWasm)return new Promise(_=>{r.instantiateWasm(d,($,k)=>{_(n($,k))})});if(u)return new Promise(_=>{Z=$=>{var k=new WebAssembly.Instance($,ga());_(n(k,$))}});je??=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",T):T+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",self.location.href).href;try{var h=await(async function(_){var $=je;if(!I&&typeof WebAssembly.instantiateStreaming=="function"&&!ye($))try{var k=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,_)}catch(l){le(`wasm streaming compile failed: ${l}`),le("falling back to ArrayBuffer instantiation")}return(async function(l,c){try{var b=await(async function(S){if(!I)try{var A=await g(S);return new Uint8Array(A)}catch{}if(S==je&&I)S=new Uint8Array(I);else{if(!y)throw"both async and sync fetching of the wasm failed";S=y(S)}return S})(l);return await WebAssembly.instantiate(b,c)}catch(S){le(`failed to asynchronously prepare wasm: ${S}`),St(S)}})($,_)})(d);return n(h.instance,h.module)}catch(_){return i(_),Promise.reject(_)}})(),Lr=n=>(Lr=W.Ea)(n),Ka=()=>(Ka=W.Fa)();r._OrtInit=(n,d)=>(r._OrtInit=W.Ga)(n,d),r._OrtGetLastError=(n,d)=>(r._OrtGetLastError=W.Ha)(n,d),r._OrtCreateSessionOptions=(n,d,h,_,$,k,l,c,b,S)=>(r._OrtCreateSessionOptions=W.Ia)(n,d,h,_,$,k,l,c,b,S),r._OrtAppendExecutionProvider=(n,d,h,_,$)=>(r._OrtAppendExecutionProvider=W.Ja)(n,d,h,_,$),r._OrtAddFreeDimensionOverride=(n,d,h)=>(r._OrtAddFreeDimensionOverride=W.Ka)(n,d,h),r._OrtAddSessionConfigEntry=(n,d,h)=>(r._OrtAddSessionConfigEntry=W.La)(n,d,h),r._OrtReleaseSessionOptions=n=>(r._OrtReleaseSessionOptions=W.Ma)(n),r._OrtCreateSession=(n,d,h)=>(r._OrtCreateSession=W.Na)(n,d,h),r._OrtReleaseSession=n=>(r._OrtReleaseSession=W.Oa)(n),r._OrtGetInputOutputCount=(n,d,h)=>(r._OrtGetInputOutputCount=W.Pa)(n,d,h),r._OrtGetInputOutputMetadata=(n,d,h,_)=>(r._OrtGetInputOutputMetadata=W.Qa)(n,d,h,_),r._OrtFree=n=>(r._OrtFree=W.Ra)(n),r._OrtCreateTensor=(n,d,h,_,$,k)=>(r._OrtCreateTensor=W.Sa)(n,d,h,_,$,k),r._OrtGetTensorData=(n,d,h,_,$)=>(r._OrtGetTensorData=W.Ta)(n,d,h,_,$),r._OrtReleaseTensor=n=>(r._OrtReleaseTensor=W.Ua)(n),r._OrtCreateRunOptions=(n,d,h,_)=>(r._OrtCreateRunOptions=W.Va)(n,d,h,_),r._OrtAddRunConfigEntry=(n,d,h)=>(r._OrtAddRunConfigEntry=W.Wa)(n,d,h),r._OrtReleaseRunOptions=n=>(r._OrtReleaseRunOptions=W.Xa)(n),r._OrtCreateBinding=n=>(r._OrtCreateBinding=W.Ya)(n),r._OrtBindInput=(n,d,h)=>(r._OrtBindInput=W.Za)(n,d,h),r._OrtBindOutput=(n,d,h,_)=>(r._OrtBindOutput=W._a)(n,d,h,_),r._OrtClearBoundOutputs=n=>(r._OrtClearBoundOutputs=W.$a)(n),r._OrtReleaseBinding=n=>(r._OrtReleaseBinding=W.ab)(n),r._OrtRunWithBinding=(n,d,h,_,$)=>(r._OrtRunWithBinding=W.bb)(n,d,h,_,$),r._OrtRun=(n,d,h,_,$,k,l,c)=>(r._OrtRun=W.cb)(n,d,h,_,$,k,l,c),r._OrtEndProfiling=n=>(r._OrtEndProfiling=W.db)(n),r._JsepOutput=(n,d,h)=>(r._JsepOutput=W.eb)(n,d,h),r._JsepGetNodeName=n=>(r._JsepGetNodeName=W.fb)(n);var qr=()=>(qr=W.gb)(),xt=r._free=n=>(xt=r._free=W.hb)(n),Vr=r._malloc=n=>(Vr=r._malloc=W.ib)(n),Ui=(n,d,h,_,$,k)=>(Ui=W.kb)(n,d,h,_,$,k),Ya=()=>(Ya=W.lb)(),Za=(n,d,h,_,$)=>(Za=W.mb)(n,d,h,_,$),Xa=n=>(Xa=W.nb)(n),Wi=n=>(Wi=W.ob)(n),Qa=(n,d)=>(Qa=W.pb)(n,d),Ja=()=>(Ja=W.qb)(),en=(n,d)=>(en=W.rb)(n,d),jr=n=>(jr=W.sb)(n),Li=n=>(Li=W.tb)(n),qi=()=>(qi=W.ub)(),tn=r.dynCall_ii=(n,d)=>(tn=r.dynCall_ii=W.vb)(n,d);r.dynCall_vii=(n,d,h)=>(r.dynCall_vii=W.dynCall_vii)(n,d,h),r.dynCall_iiiii=(n,d,h,_,$)=>(r.dynCall_iiiii=W.dynCall_iiiii)(n,d,h,_,$),r.dynCall_iii=(n,d,h)=>(r.dynCall_iii=W.dynCall_iii)(n,d,h),r.dynCall_iiiiii=(n,d,h,_,$,k)=>(r.dynCall_iiiiii=W.dynCall_iiiiii)(n,d,h,_,$,k),r.dynCall_iiiiiiii=(n,d,h,_,$,k,l,c)=>(r.dynCall_iiiiiiii=W.dynCall_iiiiiiii)(n,d,h,_,$,k,l,c),r.dynCall_iiiiiii=(n,d,h,_,$,k,l)=>(r.dynCall_iiiiiii=W.dynCall_iiiiiii)(n,d,h,_,$,k,l),r.dynCall_vi=(n,d)=>(r.dynCall_vi=W.dynCall_vi)(n,d),r.dynCall_iiii=(n,d,h,_)=>(r.dynCall_iiii=W.dynCall_iiii)(n,d,h,_),r.dynCall_i=n=>(r.dynCall_i=W.dynCall_i)(n),r.dynCall_viiiiiiii=(n,d,h,_,$,k,l,c,b)=>(r.dynCall_viiiiiiii=W.dynCall_viiiiiiii)(n,d,h,_,$,k,l,c,b),r.dynCall_viii=(n,d,h,_)=>(r.dynCall_viii=W.dynCall_viii)(n,d,h,_),r.dynCall_viijj=(n,d,h,_,$)=>(r.dynCall_viijj=W.dynCall_viijj)(n,d,h,_,$),r.dynCall_viiiiii=(n,d,h,_,$,k,l)=>(r.dynCall_viiiiii=W.dynCall_viiiiii)(n,d,h,_,$,k,l),r.dynCall_viiii=(n,d,h,_,$)=>(r.dynCall_viiii=W.dynCall_viiii)(n,d,h,_,$),r.dynCall_viiiii=(n,d,h,_,$,k)=>(r.dynCall_viiiii=W.dynCall_viiiii)(n,d,h,_,$,k),r.dynCall_vfiii=(n,d,h,_,$)=>(r.dynCall_vfiii=W.dynCall_vfiii)(n,d,h,_,$),r.dynCall_viiiiff=(n,d,h,_,$,k,l)=>(r.dynCall_viiiiff=W.dynCall_viiiiff)(n,d,h,_,$,k,l),r.dynCall_viiiiiff=(n,d,h,_,$,k,l,c)=>(r.dynCall_viiiiiff=W.dynCall_viiiiiff)(n,d,h,_,$,k,l,c),r.dynCall_ffff=(n,d,h,_)=>(r.dynCall_ffff=W.dynCall_ffff)(n,d,h,_),r.dynCall_viiff=(n,d,h,_,$)=>(r.dynCall_viiff=W.dynCall_viiff)(n,d,h,_,$),r.dynCall_fffffff=(n,d,h,_,$,k,l)=>(r.dynCall_fffffff=W.dynCall_fffffff)(n,d,h,_,$,k,l),r.dynCall_jjjjjjj=(n,d,h,_,$,k,l)=>(r.dynCall_jjjjjjj=W.dynCall_jjjjjjj)(n,d,h,_,$,k,l),r.dynCall_jjjjjj=(n,d,h,_,$,k)=>(r.dynCall_jjjjjj=W.dynCall_jjjjjj)(n,d,h,_,$,k),r.dynCall_iijjii=(n,d,h,_,$,k)=>(r.dynCall_iijjii=W.dynCall_iijjii)(n,d,h,_,$,k),r.dynCall_viiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P,D)=>(r.dynCall_viiiiiiiiiiiii=W.dynCall_viiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P,D),r.dynCall_viiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A)=>(r.dynCall_viiiiiiiiii=W.dynCall_viiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A),r.dynCall_viiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R)=>(r.dynCall_viiiiiiiiiii=W.dynCall_viiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R),r.dynCall_viiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P)=>(r.dynCall_viiiiiiiiiiii=W.dynCall_viiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P),r.dynCall_viiiiiiiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne,ge,Re)=>(r.dynCall_viiiiiiiiiiiiiiiiii=W.dynCall_viiiiiiiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne,ge,Re),r.dynCall_viiiiiiiii=(n,d,h,_,$,k,l,c,b,S)=>(r.dynCall_viiiiiiiii=W.dynCall_viiiiiiiii)(n,d,h,_,$,k,l,c,b,S),r.dynCall_viiiiiiiiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne,ge,Re,Ie)=>(r.dynCall_viiiiiiiiiiiiiiiiiii=W.dynCall_viiiiiiiiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne,ge,Re,Ie),r.dynCall_viiiiiii=(n,d,h,_,$,k,l,c)=>(r.dynCall_viiiiiii=W.dynCall_viiiiiii)(n,d,h,_,$,k,l,c),r.dynCall_viiiiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X)=>(r.dynCall_viiiiiiiiiiiiiii=W.dynCall_viiiiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X),r.dynCall_jiji=(n,d,h,_)=>(r.dynCall_jiji=W.dynCall_jiji)(n,d,h,_),r.dynCall_v=n=>(r.dynCall_v=W.dynCall_v)(n),r.dynCall_iidiiii=(n,d,h,_,$,k,l)=>(r.dynCall_iidiiii=W.dynCall_iidiiii)(n,d,h,_,$,k,l),r.dynCall_iiiiiiiii=(n,d,h,_,$,k,l,c,b)=>(r.dynCall_iiiiiiiii=W.dynCall_iiiiiiiii)(n,d,h,_,$,k,l,c,b),r.dynCall_iiij=(n,d,h,_)=>(r.dynCall_iiij=W.dynCall_iiij)(n,d,h,_),r.dynCall_iiiiiiiiii=(n,d,h,_,$,k,l,c,b,S)=>(r.dynCall_iiiiiiiiii=W.dynCall_iiiiiiiiii)(n,d,h,_,$,k,l,c,b,S),r.dynCall_iiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P)=>(r.dynCall_iiiiiiiiiiiii=W.dynCall_iiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P),r.dynCall_iiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A)=>(r.dynCall_iiiiiiiiiii=W.dynCall_iiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A),r.dynCall_ji=(n,d)=>(r.dynCall_ji=W.dynCall_ji)(n,d),r.dynCall_iijii=(n,d,h,_,$)=>(r.dynCall_iijii=W.dynCall_iijii)(n,d,h,_,$),r.dynCall_vij=(n,d,h)=>(r.dynCall_vij=W.dynCall_vij)(n,d,h),r.dynCall_viiijii=(n,d,h,_,$,k,l)=>(r.dynCall_viiijii=W.dynCall_viiijii)(n,d,h,_,$,k,l),r.dynCall_viijiiiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne,ge)=>(r.dynCall_viijiiiiiiiiiiiiii=W.dynCall_viijiiiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne,ge),r.dynCall_viiiji=(n,d,h,_,$,k)=>(r.dynCall_viiiji=W.dynCall_viiiji)(n,d,h,_,$,k),r.dynCall_fiii=(n,d,h,_)=>(r.dynCall_fiii=W.dynCall_fiii)(n,d,h,_),r.dynCall_viijii=(n,d,h,_,$,k)=>(r.dynCall_viijii=W.dynCall_viijii)(n,d,h,_,$,k),r.dynCall_viij=(n,d,h,_)=>(r.dynCall_viij=W.dynCall_viij)(n,d,h,_),r.dynCall_jiij=(n,d,h,_)=>(r.dynCall_jiij=W.dynCall_jiij)(n,d,h,_),r.dynCall_fi=(n,d)=>(r.dynCall_fi=W.dynCall_fi)(n,d),r.dynCall_fii=(n,d,h)=>(r.dynCall_fii=W.dynCall_fii)(n,d,h),r.dynCall_jii=(n,d,h)=>(r.dynCall_jii=W.dynCall_jii)(n,d,h),r.dynCall_dii=(n,d,h)=>(r.dynCall_dii=W.dynCall_dii)(n,d,h),r.dynCall_fiiii=(n,d,h,_,$)=>(r.dynCall_fiiii=W.dynCall_fiiii)(n,d,h,_,$),r.dynCall_fif=(n,d,h)=>(r.dynCall_fif=W.dynCall_fif)(n,d,h),r.dynCall_jfi=(n,d,h)=>(r.dynCall_jfi=W.dynCall_jfi)(n,d,h),r.dynCall_viiiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j)=>(r.dynCall_viiiiiiiiiiiiii=W.dynCall_viiiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j),r.dynCall_viiiiiiiiiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne,ge,Re,Ie,_e)=>(r.dynCall_viiiiiiiiiiiiiiiiiiii=W.dynCall_viiiiiiiiiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne,ge,Re,Ie,_e),r.dynCall_viiiiiiiiiiiiiiii=(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne)=>(r.dynCall_viiiiiiiiiiiiiiii=W.dynCall_viiiiiiiiiiiiiiii)(n,d,h,_,$,k,l,c,b,S,A,R,P,D,j,X,ne),r.dynCall_iif=(n,d,h)=>(r.dynCall_iif=W.dynCall_iif)(n,d,h),r.dynCall_jiiii=(n,d,h,_,$)=>(r.dynCall_jiiii=W.dynCall_jiiii)(n,d,h,_,$),r.dynCall_jiii=(n,d,h,_)=>(r.dynCall_jiii=W.dynCall_jiii)(n,d,h,_),r.dynCall_viif=(n,d,h,_)=>(r.dynCall_viif=W.dynCall_viif)(n,d,h,_),r.dynCall_viiij=(n,d,h,_,$)=>(r.dynCall_viiij=W.dynCall_viiij)(n,d,h,_,$),r.dynCall_viiiijii=(n,d,h,_,$,k,l,c)=>(r.dynCall_viiiijii=W.dynCall_viiiijii)(n,d,h,_,$,k,l,c),r.dynCall_iiiiij=(n,d,h,_,$,k)=>(r.dynCall_iiiiij=W.dynCall_iiiiij)(n,d,h,_,$,k),r.dynCall_iiiiid=(n,d,h,_,$,k)=>(r.dynCall_iiiiid=W.dynCall_iiiiid)(n,d,h,_,$,k),r.dynCall_iiiiijj=(n,d,h,_,$,k,l)=>(r.dynCall_iiiiijj=W.dynCall_iiiiijj)(n,d,h,_,$,k,l),r.dynCall_iiiiiijj=(n,d,h,_,$,k,l,c)=>(r.dynCall_iiiiiijj=W.dynCall_iiiiiijj)(n,d,h,_,$,k,l,c);var rn=n=>(rn=W.wb)(n),an=()=>(an=W.xb)(),nn=n=>(nn=W.yb)(n),sn=()=>(sn=W.zb)();return(function n(){if(0<Ke)Bt=n;else if(u)t(r),We();else{for(;0<pi.length;)pi.shift()(r);0<Ke?Bt=n:(r.calledRun=!0,Q||(We(),t(r)))}})(),r.PTR_SIZE=4,a},gu=_n,_u=globalThis.self?.name?.startsWith("em-pthread"),_u&&_n()}),yn,bn,yu,Je,bu,Gi,vu,wu,vn,$u,wn,xu,$n,Tu,xn=H(()=>{hn(),yn=typeof location>"u"?void 0:location.origin,bn=self.location.href>"file:"&&self.location.href<"file;",yu=()=>{{if(bn){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,yn).href}return self.location.href}},Je=yu(),bu=()=>{if(Je&&!Je.startsWith("blob:"))return Je.substring(0,Je.lastIndexOf("/")+1)},Gi=(e,t)=>{try{let i=t??Je;return(i?new URL(e,i):new URL(e)).origin===yn}catch{return!1}},vu=(e,t)=>{let i=t??Je;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},wu=(e,t)=>`${t??"./"}${e}`,vn=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},$u=async e=>(await import(e)).default,wn=(Fm(),Hr(fu)).default,xu=async()=>{if(!Je)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Gi(Je))return[void 0,wn()];let e=await vn(Je);return[e,wn(e)]},$n=(Nm(),Hr(mu)).default,Tu=async(e,t,i,r)=>{let a=$n&&!(e||t);if(a)if(Je)a=Gi(Je);else if(r&&!i)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,$n];{let s="ort-wasm-simd-threaded.jsep.mjs",o=e??vu(s,t),u=i&&o&&!Gi(o,t),p=u?await vn(o):o??wu(s,t);return[u?p:void 0,await $u(p)]}}}),Tn,Ki,Zr,Sn,Su,Cu,ku,Cn,xe,er=H(()=>{xn(),Ki=!1,Zr=!1,Sn=!1,Su=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Cu=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ku=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Cn=async e=>{if(Ki)return Promise.resolve();if(Zr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Sn)throw new Error("previous call to 'initializeWebAssembly()' failed.");Zr=!0;let t=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ku())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Cu())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=Su();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,o=a?.mjs,u=o?.href??o,p=a?.wasm,f=p?.href??p,m=e.wasmBinary,[g,y]=await Tu(u,s,i>1,!!m||!!f),w=!1,x=[];if(t>0&&x.push(new Promise(T=>{setTimeout(()=>{w=!0,T()},t)})),x.push(new Promise((T,I)=>{let C={numThreads:i};if(m)C.wasmBinary=m;else if(f||s)C.locateFile=v=>f??s+v;else if(u&&u.indexOf("blob:")!==0)C.locateFile=v=>new URL(v,u).href;else if(g){let v=bu();v&&(C.locateFile=z=>v+z)}y(C).then(v=>{Zr=!1,Ki=!0,Tn=v,T(),g&&URL.revokeObjectURL(g)},v=>{Zr=!1,Sn=!0,I(v)})})),await Promise.race(x),w)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},xe=()=>{if(Ki&&Tn)return Tn;throw new Error("WebAssembly is not initialized yet.")}}),ft,Yi,$e,kn=H(()=>{er(),ft=(e,t)=>{let i=xe(),r=i.lengthBytesUTF8(e)+1,a=i._malloc(r);return i.stringToUTF8(e,a,r),t.push(a),a},Yi=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([a,s])=>{let o=t?t+a:a;if(typeof s=="object")Yi(s,o+".",i,r);else if(typeof s=="string"||typeof s=="number")r(o,s.toString());else if(typeof s=="boolean")r(o,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},$e=e=>{let t=xe(),i=t.stackSave();try{let r=t.PTR_SIZE,a=t.stackAlloc(2*r);t._OrtGetLastError(a,a+r);let s=Number(t.getValue(a,r===4?"i32":"i64")),o=t.getValue(a+r,"*"),u=o?t.UTF8ToString(o):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(i)}}}),Eu,Um=H(()=>{er(),kn(),Eu=e=>{let t=xe(),i=0,r=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let s=0;return e?.tag!==void 0&&(s=ft(e.tag,r)),i=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),i===0&&$e("Can't create run options."),e?.extra!==void 0&&Yi(e.extra,"",new WeakSet,(o,u)=>{let p=ft(o,r),f=ft(u,r);t._OrtAddRunConfigEntry(i,p,f)!==0&&$e(`Can't set a run config entry: ${o} - ${u}.`)}),[i,r]}catch(s){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(o=>t._free(o)),s}}}),Iu,Au,zu,Xr,Ou,Ru,Wm=H(()=>{er(),kn(),Iu=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Au=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},zu=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Xr=(e,t,i,r)=>{let a=ft(t,r),s=ft(i,r);xe()._OrtAddSessionConfigEntry(e,a,s)!==0&&$e(`Can't set a session config entry: ${t} - ${i}.`)},Ou=async(e,t,i)=>{for(let r of t){let a=typeof r=="string"?r:r.name,s=[];switch(a){case"webnn":if(a="WEBNN",typeof r!="string"){let m=r?.deviceType;m&&Xr(e,"deviceType",m,i)}break;case"webgpu":if(a="JS",typeof r!="string"){let m=r;if(m?.preferredLayout){if(m.preferredLayout!=="NCHW"&&m.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${m.preferredLayout}`);Xr(e,"preferredLayout",m.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=ft(a,i),u=s.length,p=0,f=0;if(u>0){p=xe()._malloc(u*xe().PTR_SIZE),i.push(p),f=xe()._malloc(u*xe().PTR_SIZE),i.push(f);for(let m=0;m<u;m++)xe().setValue(p+m*xe().PTR_SIZE,s[m][0],"*"),xe().setValue(f+m*xe().PTR_SIZE,s[m][1],"*")}await xe()._OrtAppendExecutionProvider(e,o,p,f,u)!==0&&$e(`Can't append execution provider: ${a}.`)}},Ru=async e=>{let t=xe(),i=0,r=[],a=e||{};zu(a);try{let s=Iu(a.graphOptimizationLevel??"all"),o=Au(a.executionMode??"sequential"),u=typeof a.logId=="string"?ft(a.logId,r):0,p=a.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log severity level is not valid: ${p}`);let f=a.logVerbosityLevel??0;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log verbosity level is not valid: ${f}`);let m=typeof a.optimizedModelFilePath=="string"?ft(a.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,o,!!a.enableProfiling,0,u,p,f,m),i===0&&$e("Can't create session options."),a.executionProviders&&await Ou(i,a.executionProviders,r),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Xr(i,"enableGraphCapture",a.enableGraphCapture.toString(),r)}if(a.freeDimensionOverrides)for(let[g,y]of Object.entries(a.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(`free dimension override value must be a non-negative integer: ${y}`);let w=ft(g,r);t._OrtAddFreeDimensionOverride(i,w,y)!==0&&$e(`Can't set a free dimension override: ${g} - ${y}.`)}return a.extra!==void 0&&Yi(a.extra,"",new WeakSet,(g,y)=>{Xr(i,g,y,r)}),[i,r]}catch(s){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&$e("Can't release session options."),r.forEach(o=>t._free(o)),s}}}),tr,Ot,rr,Zi,Xi,En,In,An,oe=H(()=>{tr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ot=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},rr=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return i>0?Math.ceil(r*i):void 0},Zi=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Xi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},En=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",In=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",An=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),zn,Mu=H(()=>{hn(),zn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(r)}catch(u){if(u instanceof RangeError){let p=Math.ceil(r/65536);s=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw u}let o=0;for(;;){let{done:u,value:p}=await a.read();if(u)break;let f=p.byteLength;new Uint8Array(s,o,f).set(p),o+=f}return new Uint8Array(s,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Pu,Bu,Du,Fu,On,Nu,me,Rt=H(()=>{oe(),Pu=["V","I","W","E","F"],Bu=(e,t)=>{console.log(`[${Pu[e]},${new Date().toISOString()}]${t}`)},On=(e,t)=>{Du=e,Fu=t},Nu=(e,t)=>{let i=Xi(e),r=Xi(Du);i>=r&&Bu(i,typeof t=="function"?t():t)},me=(...e)=>{Fu&&Nu(...e)}}),Uu,kr,F,Qi,Wu,Lu,qu,pe=H(()=>{Uu=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},kr=class{static calcShape(e,t,i=!1){let r=e.length,a=t.length;if(r===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),o=new Array(s);if(i){if(r<2||a<2)return;let u=Uu.calcMatMulShape([e[r-2],e[r-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[o[s-2],o[s-1]]=u}for(let u=i?3:1;u<=s;u++){let p=r-u<0?1:e[r-u],f=a-u<0?1:t[a-u];if(p!==f&&p>1&&f>1)return;let m=Math.max(p,f);if(p&&f)o[s-u]=Math.max(p,f);else{if(m>1)return;o[s-u]=0}}return o}static isValidBroadcast(e,t){let i=e.length,r=t.length;if(i>r)return!1;for(let a=1;a<=i;a++)if(e[i-a]!==1&&e[i-a]!==t[r-a])return!1;return!0}},F=class on{static size(t){return on.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let a=new Array(r),s=r-1;for(;s>=0;){if(t[s]%i===0){a[s]=t[s]/i;break}if(i%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,i/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return on.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return on.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let a=1;for(let s=i;s<r;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let a=i-3;a>=0;--a)r[a]=r[a+1]*t[a+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((a,s)=>a+i[s]+i[s+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,a)=>r===i[a])}},Qi=class ji{static adjustPoolAttributes(t,i,r,a,s,o){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<i.length-2;u++)u>=r.length?r.push(i[u+2]):r[u]=i[u+2];for(let u=0;u<r.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<r.length;u++)if(u<s.length){if(s[u]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let u=0;u<r.length*2;u++)if(u<o.length){if(o[u]<0)throw new Error("pad should be greater than or equal to 1")}else o.push(0);for(let u=0;u<r.length;u++){if(r[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(o[u]>=r[u]||o[u+r.length]>=r[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,a,s,o,u){if(u){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let p=0;p<t.length-2;p++)ji.adjustPadAndReturnShape(t[p+(o?1:2)],i[p],r[p],a[p],s,p,p+t.length-2,u)}}static computePoolOutputShape(t,i,r,a,s,o,u){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let p=[i[0],i[1]];return ji.computeShapeHelper(t,i,p,r,a,s,o,u),p}static computeConvOutputShape(t,i,r,a,s,o,u){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],i[0]];return ji.computeShapeHelper(!1,t,p,r,a,s,o,u),p}static computeShapeHelper(t,i,r,a,s,o,u,p){if(t)for(let f=0;f<i.length-2;f++)r.push(1);else for(let f=0;f<i.length-2;f++)r.push(ji.adjustPadAndReturnShape(i[f+2],a[f],s[f],o[f],u,f,f+i.length-2,p))}static adjustPadAndReturnShape(t,i,r,a,s,o,u,p){let f=r*(a-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return s[o]=0,s[u]=0,Math.floor((t-f)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+i-1)/i-1)*i+a-t;return s[o]=Math.floor(p==="SAME_LOWER"?(m+1)/2:m/2),s[u]=m-s[o],Math.floor((t+m-a)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[o]+s[u]-f)/i+1)}},Wu=class{static getShapeOfGemmResult(e,t,i,r,a){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let s,o,u;t?(s=e[1],o=e[0]):(s=e[0],o=e[1]);let p=-1;if(r?(u=i[0],p=1):(u=i[1],p=0),i[p]!==o)throw new Error("dimension mismatch");if(s<=0||u<=0||o<=0)throw new Error("invalid shape specified");if(a&&!kr.isValidBroadcast(a,[s,u]))throw new Error("gemm: invalid bias shape for broadcast");return[s,u,o]}},Lu=-34028234663852886e22,qu=34028234663852886e22}),Rn,Vu=H(()=>{oe(),Rn=(e,t)=>new(Zi(t))(e)}),Mn,Pn,Bn,ju,Dn,Hu,Fn,Nn,Un,Gu,Ku,Lm=H(()=>{oe(),Rt(),Mn=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Pn=(e,t)=>{if(t==="int32")return e;let i=Mn.get(t);if(!i)throw new Error(`WebNN backend does not support data type: ${t}`);let r=i/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let a=e.byteLength/r,s=new(Zi(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let o=new Int32Array(a);for(let u=0;u<a;u++){let p=s[u];if(p>2147483647n||p<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");o[u]=Number(p)}return new Uint8Array(o.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let o=Int32Array.from(s,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Bn=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,i);switch(t){case"int64":{let a=BigInt64Array.from(r,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(r,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(r.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(r,Number);return new Uint8Array(a.buffer)}case"uint8":{if(r.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(r,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},ju=1,Dn=()=>ju++,Hu=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Fn=(e,t)=>{let i=Mn.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,a)=>r*a)*i/8):0},Nn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:i,tensor:r,dataType:a,shape:s,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=i,this.mlTensor=r,this.dataType=a,this.tensorShape=s,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Fn(this.dataType,this.tensorShape)}destroy(){me("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),i=Bn(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(i);return}else return i.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,i){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===i.length&&this.tensorShape.every((r,a)=>r===i[a])}setIsDataConverted(e){this.isDataConverted=e}},Un=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,i,r){let a=this.tensorManager.getMLContext(e),s;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(s=Hu.get(t),!s||!a.opSupportLimits().input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);me("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,i))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Fn(t,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,i,o,!0,!0,s),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Pn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else me("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Bn(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Gu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Dn();return this.tensorTrackersById.set(e,new Un(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,i,r,a){me("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${i}, shape: ${r}, copyOld: ${a}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,i,r,a)}upload(e,t){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(t)}async download(e,t){me("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,i,r){let a=this.getMLContext(e),s=Dn(),o=new Nn({sessionId:e,context:a,tensor:t,dataType:i,shape:r});return this.tensorTrackersById.set(s,new Un(this,o)),this.externalTensors.add(o),s}async getCachedTensor(e,t,i,r,a,s,o){let u=this.getMLContext(e);for(let[f,m]of this.freeTensors.entries())if(m.canReuseTensor(u,t,i)){me("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${i}`);let g=this.freeTensors.splice(f,1)[0];return g.sessionId=e,g}me("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:""} shape: ${i}}`);let p=await u.createTensor({dataType:o??t,shape:i,dimensions:i,usage:r,writable:a,readable:s});return new Nn({sessionId:e,context:u,tensor:p,dataType:t,shape:i,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ku=(...e)=>new Gu(...e)}),Qr,Yu,Zu,qm=H(()=>{oe(),er(),Vu(),Lm(),Rt(),Qr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Yu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((a,s)=>a===r[s]&&e[a]===t[a])},Zu=class{constructor(e){this.tensorManager=Ku(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,On(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){me("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){me("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let i of t)me("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let i=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(i=>Yu(i.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let i=this.sessionIdsByMLContext.get(t);i||(i=new Set,this.sessionIdsByMLContext.set(t,i)),i.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(t);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(a=>a.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){me("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,i,r,a){let s=Qr.get(i);if(!s)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,r,a)}async createTemporaryTensor(e,t,i){me("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${i}}`);let r=Qr.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,r,i,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!xe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");me("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let i=await this.tensorManager.download(e);return Rn(i,t)}}registerMLTensor(e,t,i,r){let a=Qr.get(i);if(!a)throw new Error(`Unsupported ONNX data type: ${i}`);let s=this.tensorManager.registerTensor(e,t,a,r);return me("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${r}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,i,r,a,s,o=!1){if(!s)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let p=s.get(u);if(!p)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+i>p.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let f=p.slice(t,t+i).buffer,m;switch(a.dataType){case"float32":m=new Float32Array(f);break;case"float16":m=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(f):new Uint16Array(f);break;case"int32":m=new Int32Array(f);break;case"uint32":m=new Uint32Array(f);break;case"int64":if(o){let g=Pn(new Uint8Array(f),"int64");m=new Int32Array(g.buffer),a.dataType="int32"}else m=new BigInt64Array(f);break;case"uint64":m=new BigUint64Array(f);break;case"int8":m=new Int8Array(f);break;case"int4":case"uint4":case"uint8":m=new Uint8Array(f);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return me("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${o?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),r.constant(a,m)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let i=this.sessionGraphInputs.get(e);return i?i.includes(t):!1}isGraphOutput(e,t){let i=this.sessionGraphOutputs.get(e);return i?i.includes(t):!1}isGraphInputOutputTypeSupported(e,t,i=!0){let r=this.mlContextBySessionId.get(e),a=Qr.get(tr(t));return typeof a>"u"?!1:i?!!r?.opSupportLimits().input.dataTypes.includes(a):!!r?.opSupportLimits().output.dataTypes.includes(a)}flush(){}}}),Wn=H(()=>{}),Ln,Ji,ea,Xu,Qu,qn,Vn,Ju,el,Vm=H(()=>{Rt(),Wn(),Ln=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ji=[],ea=e=>Math.ceil(Number(e)/16)*16,Xu=e=>{for(let t=0;t<Ji.length;t++){let i=Ji[t];if(e<=i)return i}return Math.ceil(e/16)*16},Qu=1,qn=()=>Qu++,Vn=async(e,t,i,r)=>{let a=ea(i),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(r){let p=r();return p.set(new Uint8Array(u,0,i)),p}else return new Uint8Array(u.slice(0,i))}finally{s.destroy()}},Ju=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ln)Ji.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let i=t.buffer,r=t.byteOffset,a=t.byteLength,s=ea(a),o=this.storageCache.get(e);if(!o)throw new Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),p=u.getMappedRange();new Uint8Array(p).set(new Uint8Array(i,r,a)),u.unmap();let f=this.backend.device.createCommandEncoder();f.copyBufferToBuffer(u,0,o.gpuData.buffer,0,s),this.backend.device.queue.submit([f.finish()]),u.destroy(),me("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=ea(i.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(i.gpuData.buffer,0,r.gpuData.buffer,0,a)}registerExternalBuffer(e,t,i){let r;if(i){if(r=i[0],e===i[1])return me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=qn();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),me("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=Xu(e),r,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(i);u?u.length>0?r=u.pop():r=this.backend.device.createBuffer({size:i,usage:t}):r=this.backend.device.createBuffer({size:i,usage:t})}else r=this.backend.device.createBuffer({size:i,usage:t});let o={id:qn(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),me("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(t);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return me("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,t){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await Vn(this.backend,i.gpuData.buffer,i.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ln.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(me("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},el=(...e)=>new Ju(...e)}),tl,we,De=H(()=>{tl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},we=e=>new tl(e)}),Er,ta,Ue,Ge,ae,Me,jn,Ir,Vt,ie,Jr,L,te,rl,Hn,il,al,ce=H(()=>{oe(),pe(),Er=64,ta=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ue=(e,t=1)=>{let i=ta(e,t);return typeof i=="string"?i:i[0]},Ge=(e,t=1)=>{let i=ta(e,t);return typeof i=="string"?i:i[1]},ae=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:F.computeStrides(i)})}),t},Me=e=>e%4===0?4:e%2===0?2:1,jn=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,Ir=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,Vt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ie=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,Jr=(e,t,i,r,a)=>{let s=typeof i=="number",o=s?i:i.length,u=[...new Array(o).keys()],p=o<2?"u32":o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,f=ta(t,a),m=typeof f=="string"?f:f[1],g=typeof f=="string"?f:f[0],y={indices:p,value:m,storage:g,tensor:t},w=N=>typeof N=="string"?N:`${N}u`,x={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},T=s?"uniforms.":"",I=`${T}${e}_shape`,C=`${T}${e}_strides`,v="";for(let N=0;N<o-1;N++)v+=`
    let dim${N} = current / ${ie(C,N,o)};
    let rest${N} = current % ${ie(C,N,o)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;v+=`indices[${o-1}] = current;`;let z=o<2?"":`
  fn o2i_${e}(offset: u32) -> ${y.indices} {
    var indices: ${y.indices};
    var current = offset;
    ${v}
    return indices;
  }`,E=N=>(x.offsetToIndices=!0,o<2?N:`o2i_${e}(${N})`),O=[];if(o>=2)for(let N=o-1;N>=0;N--)O.push(`${ie(C,N,o)} * (indices[${N}])`);let M=o<2?"":`
  fn i2o_${e}(indices: ${y.indices}) -> u32 {
    return ${O.join("+")};
  }`,B=N=>(x.indicesToOffset=!0,o<2?N:`i2o_${e}(${N})`),U=(...N)=>o===0?"0u":`${y.indices}(${N.map(w).join(",")})`,q=(N,G)=>o<2?`${N}`:`${ie(N,G,o)}`,K=(N,G,se)=>o<2?`${N}=${se};`:`${ie(N,G,o)}=${se};`,J={},re=(N,G)=>{x.broadcastedIndicesToOffset=!0;let se=`${G.name}broadcastedIndicesTo${e}Offset`;if(se in J)return`${se}(${N})`;let he=[];for(let V=o-1;V>=0;V--){let fe=G.indicesGet("outputIndices",V+G.rank-o);he.push(`${q(C,V)} * (${fe} % ${q(I,V)})`)}return J[se]=`fn ${se}(outputIndices: ${G.type.indices}) -> u32 {
             return ${he.length>0?he.join("+"):"0u"};
           }`,`${se}(${N})`},ue=(N,G)=>(()=>{if(y.storage===y.value)return`${e}[${N}]=${G};`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${G}), select(0u, 0xFFFFFFFFu, ${G} < 0));`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${G}), 0u);`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${G}));`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),Z=N=>(()=>{if(y.storage===y.value)return`${e}[${N}]`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`i32(${e}[${N}].x)`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`u32(${e}[${N}].x)`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),de=o<2?"":`
  fn get_${e}ByIndices(indices: ${y.indices}) -> ${m} {
    return ${Z(`i2o_${e}(indices)`)};
  }`,ee=o<2?"":(()=>{let N=u.map(se=>`d${se}: u32`).join(", "),G=u.map(se=>`d${se}`).join(", ");return`
  fn get_${e}(${N}) -> ${m} {
    return get_${e}ByIndices(${U(G)});
  }`})(),Y=(...N)=>{if(N.length!==o)throw new Error(`indices length must be ${o}`);let G=N.map(w).join(",");return o===0?Z("0u"):o===1?Z(G[0]):(x.get=!0,x.getByIndices=!0,x.indicesToOffset=!0,`get_${e}(${G})`)},le=N=>o<2?Z(N):(x.getByIndices=!0,x.indicesToOffset=!0,`get_${e}ByIndices(${N})`),Q=o<2?"":`
  fn set_${e}ByIndices(indices: ${y.indices}, value: ${m}) {
    ${ue(`i2o_${e}(indices)`,"value")}
  }`,ye=o<2?"":(()=>{let N=u.map(se=>`d${se}: u32`).join(", "),G=u.map(se=>`d${se}`).join(", ");return`
  fn set_${e}(${N}, value: ${m}) {
    set_${e}ByIndices(${U(G)}, value);
  }`})();return{impl:()=>{let N=[],G=!1;return x.offsetToIndices&&(N.push(z),G=!0),x.indicesToOffset&&(N.push(M),G=!0),x.broadcastedIndicesToOffset&&(Object.values(J).forEach(se=>N.push(se)),G=!0),x.set&&(N.push(ye),G=!0),x.setByIndices&&(N.push(Q),G=!0),x.get&&(N.push(ee),G=!0),x.getByIndices&&(N.push(de),G=!0),!s&&G&&N.unshift(`const ${I} = ${y.indices}(${i.join(",")});`,`const ${C} = ${y.indices}(${F.computeStrides(i).join(",")});`),N.join(`
`)},type:y,offsetToIndices:E,indicesToOffset:B,broadcastedIndicesToOffset:re,indices:U,indicesGet:q,indicesSet:K,set:(...N)=>{if(N.length!==o+1)throw new Error(`indices length must be ${o}`);let G=N[o];if(typeof G!="string")throw new Error("value must be string");let se=N.slice(0,o).map(w).join(",");return o===0?ue("0u",G):o===1?ue(se[0],G):(x.set=!0,x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}(${se}, ${G})`)},setByOffset:ue,setByIndices:(N,G)=>o<2?ue(N,G):(x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${G});`),get:Y,getByOffset:Z,getByIndices:le,usage:r,name:e,strides:C,shape:I,rank:o}},L=(e,t,i,r=1)=>Jr(e,t,i,"input",r),te=(e,t,i,r=1)=>Jr(e,t,i,"output",r),rl=(e,t,i)=>Jr(e,t,i,"atomicOutput",1),Hn=(e,t,i,r=1)=>Jr(e,t,i,"internal",r),il=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Er){let t=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*i*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*i*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${i}, ${r})
  fn main(${s}) {
    ${o}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${i}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,i=1){return this.uniforms.push({name:e,type:t,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:i,length:r}of this.uniforms)if(r&&r>4)i==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${i}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${i}>, ${Math.ceil(r/4)}>`);else{let a=r==null||r===1?i:`vec${r}<${i}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},al=(e,t)=>new il(e,t)}),nl,Gn,sl,ol,ul,ll,et,dl,pl,jt=H(()=>{oe(),pe(),De(),ce(),nl=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Gn=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),sl=(e,t)=>F.sortBasedOnPerm(e,Gn(e.length,t)),ol=(e,t,i,r)=>{let a=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},ul=(e,t)=>{let i=[],r=[];for(let a=0;a<e.length;++a)e[a]!==1&&i.push(e[a]),e[t[a]]!==1&&r.push(t[a]);return{newShape:i,newPerm:r}},ll=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},et=(e,t)=>{let i=e.dataType,r=e.dims.length,a=Gn(r,t),s=sl(e.dims,a),o=e.dims,u=s,p=r<2||ll(a,e.dims),f;if(p)return f=x=>{let T=L("input",i,o,4),I=te("output",i,u,4);return`
  ${x.registerUniform("output_size","u32").declareVariables(T,I)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let x=F.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(x/64/4)},programUniforms:[{type:12,data:Math.ceil(x/4)}]}},getShaderSource:f};let{newShape:m,newPerm:g}=ul(e.dims,a),y=F.areEqual(g,[2,3,1]),w=F.areEqual(g,[3,1,2]);if(m.length===2||y||w){o=y?[m[0],m[1]*m[2]]:w?[m[0]*m[1],m[2]]:m,u=[o[1],o[0]];let x=16;return f=T=>{let I=L("a",i,o.length),C=te("output",i,u.length);return`
  ${T.registerUniform("output_size","u32").declareVariables(I,C)}
  var<workgroup> tile : array<array<${C.type.value}, ${x+1}>, ${x}>;
  ${T.mainStart([x,x,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${x} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${x}u + local_id.x;
    let input_row = workgroup_id_x * ${x}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${I.getByIndices(`${I.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${x}u + local_id.x;
    let output_row = workgroup_id_y * ${x}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${C.setByIndices(`${C.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let T=F.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/x),y:Math.ceil(u[0]/x)},programUniforms:[{type:12,data:T},...ae(o,u)]}},getShaderSource:f}}return f=x=>{let T=L("a",i,o.length),I=te("output",i,u.length);return`
  ${x.registerUniform("output_size","u32").declareVariables(T,I)}

  ${ol(a,r,T,I)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${I.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${I.setByOffset("global_idx",T.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let x=F.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ae(o,u)]}},getShaderSource:f}},dl=(e,t)=>{nl(e.inputs,t.perm),e.compute(et(e.inputs[0],t.perm))},pl=e=>we({perm:e.perm})}),cl,fl,hl,ml,gl,_l,yl,bl,vl,wl,ht,$l,xl,Tl,Sl,Cl,kl,El,Il,Al,zl,jm=H(()=>{oe(),pe(),ce(),Yn(),jt(),cl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},fl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},hl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ml={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},gl=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},_l=(e,t)=>{let i=[],r=e.length;for(let s=0;s<r;s++)t.indexOf(s)===-1&&i.push(e[s]);let a=t.map(s=>e[s]);return[i,a]},yl=(e,t)=>{let i=e.length+t.length,r=[],a=0;for(let s=0;s<i;s++)t.indexOf(s)===-1?r.push(e[a++]):r.push(1);return r},bl=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},vl=(e,t)=>{let i=[];if(!bl(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},wl=(e,t,i,r,a,s,o)=>{let u=i[0].dims,p=F.size(s),f=F.size(o),m=L("_A",i[0].dataType,u),g=te("output",a,s),y=64;p===1&&(y=256);let w=`
          var<workgroup> aBestValues : array<f32, ${y}>;
       `,x=T=>`
        ${T.registerUniform("reduceSize","u32").declareVariables(m,g)}
        ${w}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${T.mainStart(y)}

          let outputIndex = global_idx / ${y};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${hl[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${y}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${cl[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${y}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${fl[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${r==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${ml[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${y}`,inputDependencies:["type"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:p},programUniforms:[{type:12,data:f}]})}},ht=(e,t,i,r)=>{let a=e.inputs.length===1?i:Kn(e.inputs,i),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((w,x)=>x));let o=F.normalizeAxes(s,e.inputs[0].dims.length),u=o,p=e.inputs[0],f=vl(u,e.inputs[0].dims.length);f.length>0&&(p=e.compute(et(e.inputs[0],f),{inputs:[0],outputs:[-1]})[0],u=gl(u.length,p.dims.length));let[m,g]=_l(p.dims,u),y=m;a.keepDims&&(y=yl(m,o)),e.compute(wl(t,a.cacheKey,[p],r,e.inputs[0].dataType,y,g),{inputs:[p]})},$l=(e,t)=>{ht(e,"ReduceMeanShared",t,"mean")},xl=(e,t)=>{ht(e,"ReduceL1Shared",t,"l1")},Tl=(e,t)=>{ht(e,"ReduceL2Shared",t,"l2")},Sl=(e,t)=>{ht(e,"ReduceLogSumExpShared",t,"logSumExp")},Cl=(e,t)=>{ht(e,"ReduceMaxShared",t,"max")},kl=(e,t)=>{ht(e,"ReduceMinShared",t,"min")},El=(e,t)=>{ht(e,"ReduceProdShared",t,"prod")},Il=(e,t)=>{ht(e,"ReduceSumShared",t,"sum")},Al=(e,t)=>{ht(e,"ReduceSumSquareShared",t,"sumSquare")},zl=(e,t)=>{ht(e,"ReduceLogSumShared",t,"logSum")}}),mt,Ol,ra,Kn,gt,Rl,Ml,Pl,Bl,Dl,Fl,Nl,Ul,Wl,Ll,_t,ql,Vl,jl,Hl,Gl,Kl,Yl,Zl,Xl,Ql,Yn=H(()=>{oe(),pe(),De(),ce(),jm(),mt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ol=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ra=(e,t,i,r,a,s,o=!1,u=!1)=>{let p=[],f=i[0].dims,m=f.length,g=F.normalizeAxes(a,m),y=!u&&g.length===0;f.forEach((T,I)=>{y||g.indexOf(I)>=0?o&&p.push(1):p.push(T)});let w=p.length,x=F.size(p);return{name:e,shaderCache:t,getShaderSource:T=>{let I=[],C=L("_A",i[0].dataType,m),v=te("output",s,w),z=r(C,v,g),E=z[2];for(let O=0,M=0;O<m;O++)y||g.indexOf(O)>=0?(o&&M++,E=`for(var j${O}: u32 = 0; j${O} < ${f[O]}; j${O}++) {
                  ${z[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${C.indicesSet("input_indices",O,`j${O}`)}
                  ${E}
                }`):(I.push(`${C.indicesSet("input_indices",O,v.indicesGet("output_indices",M))};`),M++);return`

        ${T.registerUniform("output_size","u32").declareVariables(C,v)}

        ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${C.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${I.join(`
`)}
          ${z[0]}       // init ops for reduce max/min
          ${z[1]}
          ${E}
          ${z[3]}
          ${z.length===4?v.setByOffset("global_idx","value"):z.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ae(f,p)]})}},Kn=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),we({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},gt=(e,t,i,r)=>{let a=e.inputs,s=a.length===1?i:Kn(a,i);e.compute(ra(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?Ol:r,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Rl=(e,t)=>{mt(e.inputs),gt(e,"ReduceLogSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},Ml=(e,t)=>{mt(e.inputs),gt(e,"ReduceL1",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},Pl=(e,t)=>{mt(e.inputs),gt(e,"ReduceL2",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Bl=(e,t)=>{mt(e.inputs),gt(e,"ReduceLogSumExp",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},Dl=(e,t)=>{mt(e.inputs),gt(e,"ReduceMax",t,(i,r,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(i.indicesSet("input_indices",o,0));return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},Fl=(e,t)=>{mt(e.inputs),gt(e,"ReduceMean",t,(i,r,a)=>{let s=1;for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&(s*=e.inputs[0].dims[o]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${s});`]})},Nl=(e,t)=>{mt(e.inputs),gt(e,"ReduceMin",t,(i,r,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},Ul=(e,t)=>{mt(e.inputs),gt(e,"ReduceProd",t,(i,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},Wl=(e,t)=>{mt(e.inputs),gt(e,"ReduceSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},Ll=(e,t)=>{mt(e.inputs),gt(e,"ReduceSumSquare",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},_t=(e,t,i)=>{if(t.length===0)return i;let r=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?r*=e[s]:a*=e[s];return a<32&&r>1024},ql=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fl(e,t):$l(e,t)},Vl=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ml(e,t):xl(e,t)},jl=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pl(e,t):Tl(e,t)},Hl=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bl(e,t):Sl(e,t)},Gl=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dl(e,t):Cl(e,t)},Kl=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nl(e,t):kl(e,t)},Yl=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ul(e,t):El(e,t)},Zl=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wl(e,t):Il(e,t)},Xl=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ll(e,t):Al(e,t)},Ql=(e,t)=>{_t(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rl(e,t):zl(e,t)}}),Zn,Jl,ed,Xn,Hm=H(()=>{oe(),De(),Yn(),Zn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Jl=(e,t)=>{Zn(e.inputs);let i=(r,a,s)=>{let o=[];for(let u=0;u<r.rank;u++)(s.indexOf(u)>=0||s.length===0)&&o.push(`input_indices[${u}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ra("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},ed=(e,t)=>{Zn(e.inputs);let i=(r,a,s)=>{let o=[];for(let u=0;u<r.rank;u++)(s.indexOf(u)>=0||s.length===0)&&o.push(`input_indices[${u}] = 0;`);return[`${o.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(ra("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Xn=e=>we(e)}),td,ia,rd,id,ad,ei,nd,sd,Qn=H(()=>{oe(),pe(),Wn(),ce(),td=(e,t)=>{let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4],u=e[5];if(o&&u)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let p=i.dims[0],f=i.dims[1],m=i.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=a.dims[0]/3,y=g,w=y;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let z of t.qkvHiddenSizes)if(z%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=t.qkvHiddenSizes[0],y=t.qkvHiddenSizes[1],w=t.qkvHiddenSizes[2]}let x=f;if(g!==y)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==g+y+w)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let T=0;if(o){if(y!==w)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(o.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(o.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(o.dims[1]!==p)throw new Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==y/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(T=o.dims[3])}let I=x+T,C=-1,v=0;if(s)throw new Error("Mask not supported");if(o)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:T,kvSequenceLength:x,totalSequenceLength:I,maxSequenceLength:C,inputHiddenSize:m,hiddenSize:g,vHiddenSize:w,headSize:Math.floor(g/t.numHeads),vHeadSize:Math.floor(w/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ia=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,rd=(e,t,i,r,a,s,o,u)=>{let p=Me(o?1:s),f=64,m=s/p;m<f&&(f=32);let g=Math.ceil(s/p/f),y=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:m},{type:12,data:g}],w=Ue(e.dataType,p),x=Ge(1,p),T=["type"];o&&T.push("type"),u&&T.push("type");let I=C=>{let v=te("x",e.dataType,e.dims,p),z=[v],E=o?L("seq_lens",o.dataType,o.dims):void 0;E&&z.push(E);let O=u?L("total_sequence_length_input",u.dataType,u.dims):void 0;O&&z.push(O);let M=Ge(e.dataType),B=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${f}>;
  var<workgroup> thread_sum: array<f32, ${f}>;
  ${C.registerUniforms(B).declareVariables(...z)}
  ${C.mainStart([f,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ia(E,O,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${f}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${x}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${x}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(p){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${f}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${x}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${x}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(p){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${p}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${f}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${v.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${x}(x[offset + i]);
        x[offset + i] = ${v.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${v.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${f};${w};${p}`,inputDependencies:T},getShaderSource:I,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*i},programUniforms:y})}},id=(e,t,i,r,a,s,o,u,p)=>{let f=o+s.kvSequenceLength,m=[s.batchSize,s.numHeads,s.sequenceLength,f],g=e>1&&r,y=s.kvNumHeads?s.kvNumHeads:s.numHeads,w=g?[s.batchSize,y,f,s.headSize]:void 0,x=s.nReps?s.nReps:1,T=s.scale===0?1/Math.sqrt(s.headSize):s.scale,I=Me(s.headSize),C=s.headSize/I,v=12,z={x:Math.ceil(f/v),y:Math.ceil(s.sequenceLength/v),z:s.batchSize*s.numHeads},E=[{type:12,data:s.sequenceLength},{type:12,data:C},{type:12,data:f},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:T},{type:12,data:o},{type:12,data:s.kvSequenceLength},{type:12,data:x}],O=g&&r&&F.size(r.dims)>0,M=["type","type"];O&&M.push("type"),a&&M.push("type"),u&&M.push("type"),p&&M.push("type");let B=[{dims:m,dataType:t.dataType,gpuDataType:0}];g&&B.push({dims:w,dataType:t.dataType,gpuDataType:0});let U=q=>{let K=L("q",t.dataType,t.dims,I),J=L("key",i.dataType,i.dims,I),re=[K,J];if(O){let Q=L("past_key",r.dataType,r.dims,I);re.push(Q)}a&&re.push(L("attention_bias",a.dataType,a.dims));let ue=u?L("seq_lens",u.dataType,u.dims):void 0;ue&&re.push(ue);let Z=p?L("total_sequence_length_input",p.dataType,p.dims):void 0;Z&&re.push(Z);let de=te("output",t.dataType,m),ee=[de];g&&ee.push(te("present_key",t.dataType,w,I));let Y=Ge(1,I),le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;

  var<workgroup> tileQ: array<${K.type.storage}, ${v*v}>;
  var<workgroup> tileK: array<${K.type.storage}, ${v*v}>;
  ${q.registerUniforms(le).declareVariables(...re,...ee)}
  ${q.mainStart([v,v,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${x===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${x===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ia(ue,Z,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&g?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${g?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${O&&g?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${g?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(I){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${I}`)}})()};
        output[outputIdx] = ${de.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${I};${a!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:B,dispatchGroup:z,programUniforms:E}),getShaderSource:U}},ad=(e,t,i,r,a,s,o=void 0,u=void 0)=>{let p=s+a.kvSequenceLength,f=a.nReps?a.nReps:1,m=a.vHiddenSize*f,g=e>1&&r,y=a.kvNumHeads?a.kvNumHeads:a.numHeads,w=g?[a.batchSize,y,p,a.headSize]:void 0,x=[a.batchSize,a.sequenceLength,m],T=12,I={x:Math.ceil(a.vHeadSize/T),y:Math.ceil(a.sequenceLength/T),z:a.batchSize*a.numHeads},C=[{type:12,data:a.sequenceLength},{type:12,data:p},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:m},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:f}],v=g&&r&&F.size(r.dims)>0,z=["type","type"];v&&z.push("type"),o&&z.push("type"),u&&z.push("type");let E=[{dims:x,dataType:t.dataType,gpuDataType:0}];g&&E.push({dims:w,dataType:t.dataType,gpuDataType:0});let O=M=>{let B=L("probs",t.dataType,t.dims),U=L("v",i.dataType,i.dims),q=[B,U];v&&q.push(L("past_value",r.dataType,r.dims));let K=o?L("seq_lens",o.dataType,o.dims):void 0;o&&q.push(K);let J=u?L("total_sequence_length_input",u.dataType,u.dims):void 0;u&&q.push(J);let re=[te("output",t.dataType,x)];g&&re.push(te("present_value",t.dataType,w));let ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${T}u;
  var<workgroup> tileQ: array<${B.type.value}, ${T*T}>;
  var<workgroup> tileV: array<${B.type.value}, ${T*T}>;
  ${M.registerUniforms(ue).declareVariables(...q,...re)}
  ${M.mainStart([T,T,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${f===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${f===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ia(K,J,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${v&&g?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${g?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${B.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${v&&g?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${g?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:E,dispatchGroup:I,programUniforms:C}),getShaderSource:O}},ei=(e,t,i,r,a,s,o,u,p,f,m=void 0,g=void 0)=>{let y=Math.min(e.outputCount,1+(o?1:0)+(u?1:0)),w=y>1?f.pastSequenceLength:0,x=w+f.kvSequenceLength,T=p&&F.size(p.dims)>0?p:void 0,I=[t,i];y>1&&o&&F.size(o.dims)>0&&I.push(o),T&&I.push(T),m&&I.push(m),g&&I.push(g);let C=e.compute(id(y,t,i,o,T,f,w,m,g),{inputs:I,outputs:y>1?[-1,1]:[-1]})[0];e.compute(rd(C,f.batchSize,f.numHeads,w,f.sequenceLength,x,m,g),{inputs:m&&g?[C,m,g]:[C],outputs:[]});let v=[C,r];y>1&&u&&F.size(u.dims)>0&&v.push(u),m&&v.push(m),g&&v.push(g),e.compute(ad(y,C,r,u,f,w,m,g),{inputs:v,outputs:y>1?[0,2]:[0]})},nd=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,o=12,u={x:Math.ceil(t.headSize/o),y:Math.ceil(t.sequenceLength/o),z:t.batchSize*t.numHeads},p=[e.inputs[0],e.inputs[1],e.inputs[2]],f=[{type:12,data:r},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],m=g=>{let y=te("output_q",p[0].dataType,i),w=te("output_k",p[0].dataType,i),x=te("output_v",p[0].dataType,i),T=L("input",p[0].dataType,p[0].dims),I=L("weight",p[1].dataType,p[1].dims),C=L("bias",p[2].dataType,p[2].dims),v=T.type.storage,z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${o}u;
  var<workgroup> tileInput: array<${v}, ${o*o}>;
  var<workgroup> tileWeightQ: array<${v}, ${o*o}>;
  var<workgroup> tileWeightK: array<${v}, ${o*o}>;
  var<workgroup> tileWeightV: array<${v}, ${o*o}>;
  ${g.registerUniforms(z).declareVariables(T,I,C,y,w,x)}
  ${g.mainStart([o,o,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${v}(0);
    var valueK = ${v}(0);
    var valueV = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:f}),getShaderSource:m},{inputs:p,outputs:[-1,-1,-1]})},sd=(e,t)=>{let i=td(e.inputs,t),[r,a,s]=nd(e,i);return ei(e,r,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),od,ud,ld,dd,Gm=H(()=>{st(),oe(),pe(),De(),ce(),od=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,a,s)=>{let o=a.length;if(o!==r.length)throw new Error(`${s}: num dimensions != ${o}`);a.forEach((u,p)=>{if(u!==r[p])throw new Error(`${s}: dim[${p}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},ud=(e,t)=>{let{epsilon:i,spatial:r,format:a}=t,s=e[0].dims,o=r?Me(s[s.length-1]):1,u=a==="NHWC"&&s.length>1?o:1,p=F.size(s)/o,f=r,m=f?s.length:s,g=L("x",e[0].dataType,e[0].dims,o),y=L("scale",e[1].dataType,e[1].dims,u),w=L("bias",e[2].dataType,e[2].dims,u),x=L("inputMean",e[3].dataType,e[3].dims,u),T=L("inputVar",e[4].dataType,e[4].dims,u),I=te("y",e[0].dataType,m,o),C=()=>{let z="";if(r)z=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${o}`:"outputIndices[1]"};`;else if(a==="NCHW")z=`
            ${I.indicesSet("outputIndices","0","0")}
            let cOffset = ${I.indicesToOffset("outputIndices")};`;else{z=`var cIndices = ${y.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let E=1;E<y.rank;E++)z+=`cIndices[${E}] = outputIndices[${E}];`;z+=`let cOffset = ${y.indicesToOffset("cIndices")};`}return z},v=z=>`
  const epsilon = ${i};
  ${z.registerUniform("outputSize","u32").declareVariables(g,y,w,x,T,I)}
  ${z.mainStart()}
  ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${I.offsetToIndices(`global_idx * ${o}`)};
    ${C()}
    let scale = ${y.getByOffset("cOffset")};
    let bias = ${w.getByOffset("cOffset")};
    let inputMean = ${x.getByOffset("cOffset")};
    let inputVar = ${T.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${I.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:f?["rank","type","type","type","type"]:void 0},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f?[{type:12,data:p},...ae(s)]:[{type:12,data:p}]})}},ld=e=>we(e),dd=(e,t)=>{let{inputs:i,outputCount:r}=e,a=ld({...t,outputCount:r});if(Ce.webgpu.validateInputContent&&od(i,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(ud(i,a))}}),pd,cd,fd,Km=H(()=>{pe(),ce(),pd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},cd=e=>{let t=e[0].dims,i=e[0].dims[2],r=F.size(t)/4,a=e[0].dataType,s=L("input",a,t,4),o=L("bias",a,[i],4),u=L("residual",a,t,4),p=te("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:f=>`
  const channels = ${i}u / 4;
  ${f.declareVariables(s,o,u,p)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${s.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${p.setByOffset("global_idx","value")}
  }`}},fd=e=>{pd(e.inputs),e.compute(cd(e.inputs))}}),hd,be,md,gd,_d,yd,bd,vd,wd,$d,xd,Td,Sd,Cd,kd,Ed,ti,Id,aa,Ad,zd,Od,Rd,Md,Pd,Bd,Dd,Fd,Nd,Ud,Wd,Ld,qd,Vd,jd,Jn,Hd,es,ts,Gd,Kd,Yd,Zd,Xd,Qd,rs=H(()=>{oe(),pe(),De(),ce(),hd=(e,t,i,r,a,s,o)=>{let u=Math.ceil(t/4),p="";typeof a=="string"?p=`${a}(a)`:p=a("a");let f=L("inputData",i,[u],4),m=te("outputData",r,[u],4),g=[{name:"vec_size",type:"u32"}];return o&&g.push(...o),`
      ${e.registerUniforms(g).declareVariables(f,m)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${f.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",p)}
  }`},be=(e,t,i,r,a,s=e.dataType,o,u)=>{let p=[{type:12,data:Math.ceil(F.size(e.dims)/4)}];return o&&p.push(...o),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:f=>hd(f,F.size(e.dims),e.dataType,s,i,r,u),getRunData:f=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(F.size(f[0].dims)/64/4)},programUniforms:p})}},md=e=>{e.compute(be(e.inputs[0],"Abs","abs"))},gd=e=>{e.compute(be(e.inputs[0],"Acos","acos"))},_d=e=>{e.compute(be(e.inputs[0],"Acosh","acosh"))},yd=e=>{e.compute(be(e.inputs[0],"Asin","asin"))},bd=e=>{e.compute(be(e.inputs[0],"Asinh","asinh"))},vd=e=>{e.compute(be(e.inputs[0],"Atan","atan"))},wd=e=>{e.compute(be(e.inputs[0],"Atanh","atanh"))},$d=e=>we(e),xd=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(be(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},Td=e=>{let t,i,r=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return we({min:t,max:i})},Sd=(e,t)=>{let i=t||Td(e.inputs),r=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Cd=e=>{e.compute(be(e.inputs[0],"Ceil","ceil"))},kd=e=>{e.compute(be(e.inputs[0],"Cos","cos"))},Ed=e=>{e.compute(be(e.inputs[0],"Cosh","cosh"))},ti=e=>we(e),Id=(e,t)=>{let i=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},aa=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Ad=e=>{let t=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,aa(t)))},zd=e=>{e.compute(be(e.inputs[0],"Exp","exp"))},Od=e=>{e.compute(be(e.inputs[0],"Floor","floor"))},Rd=e=>{let t=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,aa(t)))},Md=(e,t)=>{let i=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},Pd=e=>{e.compute(be(e.inputs[0],"Not",t=>`!${t}`))},Bd=e=>{e.compute(be(e.inputs[0],"Neg",t=>`-${t}`))},Dd=e=>{e.compute(be(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Fd=e=>{let t=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},Nd=e=>{e.compute(be(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Ud=e=>we(e),Wd=(e,t)=>{let i=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},Ld=e=>{e.compute(be(e.inputs[0],"Sin","sin"))},qd=e=>{e.compute(be(e.inputs[0],"Sinh","sinh"))},Vd=e=>{e.compute(be(e.inputs[0],"Sqrt","sqrt"))},jd=e=>{e.compute(be(e.inputs[0],"Tan","tan"))},Jn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Hd=e=>{e.compute(be(e.inputs[0],"Tanh",Jn))},es=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Jn("v")};
}
`,ts=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Gd=e=>{let t=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"FastGelu",ts,es(t),void 0,e.inputs[0].dataType))},Kd=(e,t)=>{let i=Ge(e.inputs[0].dataType);return e.compute(be(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},Yd=e=>{e.compute(be(e.inputs[0],"Log","log"))},Zd=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Xd=e=>`quick_gelu_impl(${e})`,Qd=(e,t)=>{let i=Ge(e.inputs[0].dataType);e.compute(be(e.inputs[0],"QuickGelu",Xd,Zd(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Jd,ep,tp,Ym=H(()=>{pe(),ce(),rs(),Jd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ep=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=L("input",e[0].dataType,e[0].dims,4),r=L("bias",e[0].dataType,[e[0].dims[2]],4),a=te("output",e[0].dataType,t,4),s=F.size(t)/4,o=Ue(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(i,r,a)}

  ${aa(o)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},tp=e=>{Jd(e.inputs),e.compute(ep(e.inputs))}}),rp,ip,yt,ap,np,sp,op,up,lp,dp,pp,cp,fp,Zm=H(()=>{oe(),pe(),ce(),rp=(e,t,i,r,a,s,o,u,p,f,m,g)=>{let y,w;typeof u=="string"?y=w=(v,z)=>`${u}((${v}),(${z}))`:typeof u=="function"?y=w=u:(y=u.scalar,w=u.vector);let x=te("outputData",m,r.length,4),T=L("aData",p,t.length,4),I=L("bData",f,i.length,4),C;if(a)if(s){let v=F.size(t)===1,z=F.size(i)===1,E=t.length>0&&t[t.length-1]%4===0,O=i.length>0&&i[i.length-1]%4===0;v||z?C=x.setByOffset("global_idx",w(v?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"),z?`${I.type.value}(${I.getByOffset("0")}.x)`:I.getByOffset("global_idx"))):C=`
            let outputIndices = ${x.offsetToIndices("global_idx * 4u")};
            let offsetA = ${T.broadcastedIndicesToOffset("outputIndices",x)};
            let offsetB = ${I.broadcastedIndicesToOffset("outputIndices",x)};
            ${x.setByOffset("global_idx",w(o||E?T.getByOffset("offsetA / 4u"):`${T.type.value}(${T.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||O?I.getByOffset("offsetB / 4u"):`${I.type.value}(${I.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else C=x.setByOffset("global_idx",w(T.getByOffset("global_idx"),I.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let v=(z,E,O="")=>{let M=`aData[indexA${E}][componentA${E}]`,B=`bData[indexB${E}][componentB${E}]`;return`
            let outputIndices${E} = ${x.offsetToIndices(`global_idx * 4u + ${E}u`)};
            let offsetA${E} = ${T.broadcastedIndicesToOffset(`outputIndices${E}`,x)};
            let offsetB${E} = ${I.broadcastedIndicesToOffset(`outputIndices${E}`,x)};
            let indexA${E} = offsetA${E} / 4u;
            let indexB${E} = offsetB${E} / 4u;
            let componentA${E} = offsetA${E} % 4u;
            let componentB${E} = offsetB${E} % 4u;
            ${z}[${E}] = ${O}(${y(M,B)});
          `};m===9?C=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:C=`
            ${v("outputData[global_idx]",0)}
            ${v("outputData[global_idx]",1)}
            ${v("outputData[global_idx]",2)}
            ${v("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(T,I,x)}

        ${g??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${C}
      }`},ip=(e,t,i,r,a,s,o=i.dataType)=>{let u=i.dims.map(T=>Number(T)??1),p=r.dims.map(T=>Number(T)??1),f=!F.areEqual(u,p),m=u,g=F.size(u),y=!1,w=!1,x=[f];if(f){let T=kr.calcShape(u,p,!1);if(!T)throw new Error("Can't perform binary op on the given tensors");m=T.slice(),g=F.size(m);let I=F.size(u)===1,C=F.size(p)===1,v=u.length>0&&u[u.length-1]%4===0,z=p.length>0&&p[p.length-1]%4===0;x.push(I),x.push(C),x.push(v),x.push(z);let E=1;for(let O=1;O<m.length;O++){let M=u[u.length-O],B=p[p.length-O];if(M===B)E*=M;else break}E%4===0?(w=!0,y=!0):(I||C||v||z)&&(y=!0)}else y=!0;return x.push(y),{name:e,shaderCache:{hint:t+x.map(T=>T.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:T=>rp(T,u,p,m,y,f,w,a,i.dataType,r.dataType,o,s),getRunData:()=>({outputs:[{dims:m,dataType:o}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(F.size(m)/4)},...ae(u,p,m)]})}},yt=(e,t,i,r,a,s)=>{e.compute(ip(t,a??"",e.inputs[0],e.inputs[1],i,r,s))},ap=e=>{yt(e,"Add",(t,i)=>`${t}+${i}`)},np=e=>{yt(e,"Div",(t,i)=>`${t}/${i}`)},sp=e=>{yt(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},op=e=>{yt(e,"Mul",(t,i)=>`${t}*${i}`)},up=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;yt(e,"Pow",{scalar:(i,r)=>`pow_custom(${i},${r})`,vector:(i,r)=>`pow_vector_custom(${i},${r})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},lp=e=>{yt(e,"Sub",(t,i)=>`${t}-${i}`)},dp=e=>{yt(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},pp=e=>{yt(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},cp=e=>{yt(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},fp=e=>{yt(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),hp,mp,gp,_p,yp,bp,Xm=H(()=>{oe(),pe(),De(),ce(),hp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],a=r.dataType,s=r.dims.length;e.forEach((o,u)=>{if(u!==i){if(o.dataType!==a)throw new Error("input tensors should be one type");if(o.dims.length!==s)throw new Error("input tensors should have the same shape");o.dims.forEach((p,f)=>{if(f!==t&&p!==r.dims[f])throw new Error("non concat dimensions must match")})}})},mp=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,gp=(e,t)=>{let i=e.length,r=[];for(let a=0;a<i;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));i===1?r.push(s):a===0?r.push(`if (inputIndex == ${a}u) { ${s} }`):a===i-1?r.push(`else { ${s} }`):r.push(`else if (inputIndex == ${a}) { ${s} }`)}return r.join(`
`)},_p=(e,t,i,r)=>{let a=F.size(i),s=new Array(e.length),o=new Array(e.length),u=0,p=[],f=[],m=[{type:12,data:a}];for(let T=0;T<e.length;++T)u+=e[T].dims[t],s[T]=u,f.push(e[T].dims.length),o[T]=L(`input${T}`,r,f[T]),p.push("rank"),m.push({type:12,data:s[T]});for(let T=0;T<e.length;++T)m.push(...ae(e[T].dims));m.push(...ae(i));let g=te("output",r,i.length),y=g.indicesGet("indices",t),w=Array.from(Array(s.length).keys()).map(T=>`uniforms.sizeInConcatAxis${T}`).join(","),x=T=>`

  ${(()=>{T.registerUniform("outputSize","u32");for(let I=0;I<e.length;I++)T.registerUniform(`sizeInConcatAxis${I}`,"u32");return T.declareVariables(...o,g)})()}

  ${mp(s.length,w)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${y});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${w});
      ${y} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${gp(o,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:m}),getShaderSource:x}},yp=(e,t)=>{let i=e.inputs,r=i[0].dims,a=F.normalizeAxis(t.axis,r.length);hp(i,a);let s=r.slice();s[a]=i.reduce((u,p)=>u+(p.dims.length>a?p.dims[a]:0),0);let o=i.filter(u=>F.size(u.dims)>0);e.compute(_p(o,a,s,i[0].dataType),{inputs:o})},bp=e=>we({axis:e.axis})}),ir,ar,nr,is,sr=H(()=>{oe(),pe(),ir=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ar=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},nr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},is=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[i,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=e?.activation_params||[Lu,qu];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=e?.activation_params||[.01];return{activation:t,alpha:i}}return{activation:t}}}),Ve,vp,as=H(()=>{Ve=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},vp=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),wp,Qm=H(()=>{wp=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ri,ns,ss=H(()=>{oe(),pe(),ce(),sr(),ri=(e,t,i,r,a)=>{let s=r-i;return`
      ${Array.from({length:i}).map((o,u)=>`
      if (${ie(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,ie(a,u+s,r))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},ns=(e,t,i,r,a=!1,s)=>{let o=e[0].dims,u=e[1].dims,p=o[o.length-2],f=u[u.length-1],m=o[o.length-1],g=Me(f),y=Me(m),w=Me(p),x=F.size(i)/g/w,T=e.length>2,I=r?r.slice(0,-2):i.slice(0,-2),C=[F.size(I),p,f],v=[{type:12,data:x},{type:12,data:p},{type:12,data:f},{type:12,data:m}];ar(t,v),v.push(...ae(I,o,u)),T&&v.push(...ae(e[2].dims)),v.push(...ae(C));let z=E=>{let O=Hn("batch_dims",e[0].dataType,I.length),M=L("a",e[0].dataType,o.length,y),B=L("b",e[1].dataType,u.length,g),U=te("output",e[0].dataType,C.length,g),q=Ue(U.type.tensor),K=ir(t,U.type.value,q),J=[M,B],re="";if(T){let de=a?g:1;J.push(L("bias",e[2].dataType,e[2].dims.length,de)),re=`${a?`value += bias[col / ${de}];`:`value += ${U.type.value}(bias[row + i]);`}`}let ue=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];nr(t,ue);let Z=()=>{let de=`var a_data: ${M.type.value};`;for(let ee=0;ee<y;ee++)de+=`
              let b_data${ee} = b[(b_offset + (k + ${ee}) * uniforms.N + col) / ${g}];`;for(let ee=0;ee<w;ee++){de+=`a_data = a[(a_offset + (row + ${ee}) * uniforms.K + k) / ${y}];`;for(let Y=0;Y<y;Y++)de+=`
            values[${ee}] = fma(${B.type.value}(a_data${y===1?"":`[${Y}]`}), b_data${Y}, values[${ee}]);
`}return de};return`
  ${E.registerUniforms(ue).registerInternalVariables(O).declareVariables(...J,U)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${w};
    let row = (index1 % stride1) * ${w};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${ri("a_indices",M,M.rank-2,O.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${B.type.indices};
    ${ri("b_indices",B,B.rank-2,O.rank,"batch_indices")}
    ${B.indicesSet("b_indices",B.rank-2,0)}
    ${B.indicesSet("b_indices",B.rank-1,0)}
    let b_offset = ${B.indicesToOffset("b_indices")};
    var values: array<${U.type.value}, ${w}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${y}) {
      ${Z()}
    }
    for (var i = 0u; i < ${w}u; i++) {
      var value = values[i];
      ${re}
      ${K}
      let cur_indices = ${U.type.indices}(batch, row + i, col);
      let offset = ${U.indicesToOffset("cur_indices")};
      ${U.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${g};${y};${w};${a}`,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:v}),getShaderSource:z}}}),$p,xp,os,us,Tp,ls,Sp,na,ds=H(()=>{oe(),pe(),ce(),sr(),ss(),as(),$p=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,xp=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,os=(e,t,i="f32",r,a=!1,s=32,o=!1,u=32)=>{let p=t[1]*e[1],f=t[0]*e[0],m=a?p:s,g=a?s:p,y=m/t[0],w=s/t[1];if(!((a&&y===4&&e[1]===4||!a&&(y===3||y===4))&&m%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${y} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${y} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${y}<${i}>, ${m/y}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${f/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${y};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${p};

  let num_tiles = ${o?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${w};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${$p(a,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${y===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${xp(a,y)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},us=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Tp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ls=(e,t,i="f32",r,a=!1,s=32,o=!1,u=32,p=!1)=>{let f=e[1]*t[1],m=e[0]*t[0],g=a?f:s,y=a?s:f;if(!(y%t[1]===0&&g%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${y} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let w=y/t[1],x=g/t[0],T=s/t[1],I=p?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${f};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${y}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          ${us(a,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${f};

let tileRowA = i32(localId.y) * ${w};
let tileColA = i32(localId.x) * ${x};
let tileRowB = i32(localId.y) * ${T};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${x}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${us(a,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${T}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Tp(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${g}>, ${y}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${m}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${I}
  }
`},Sp=(e,t,i,r,a=!1)=>{let[s,o,u,p]=r,f=Ue(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ve(e,f)} {
      var value = ${Ve(e,f)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${ri("aIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ve(e,f)} {
      var value = ${Ve(e,f)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${ri("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ve(e,f)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ve(e,f)}(bias[row])`};`:""}
        ${i}
        ${p.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},na=(e,t,i,r,a=!1,s)=>{let o=e[0].dims,u=e[1].dims,p=o.slice(0,-2),f=u.slice(0,-2),m=r?r.slice(0,-2):i.slice(0,-2),g=F.size(m),y=o[o.length-2],w=o[o.length-1],x=u[u.length-1],T=w%4===0&&x%4===0,I=y<=8?[4,1,1]:[4,4,1],C=[8,8,1],v=[Math.ceil(x/C[0]/I[0]),Math.ceil(y/C[1]/I[1]),Math.ceil(g/C[2]/I[2])],z=T?4:1,E=[...p,y,w/z],O=E.length,M=[...f,w,x/z],B=M.length,U=[g,y,x/z],q=[{type:6,data:y},{type:6,data:x},{type:6,data:w}];ar(t,q),q.push(...ae(m,E,M));let K=["rank","rank"],J=e.length>2;J&&(q.push(...ae(e[2].dims)),K.push("rank")),q.push(...ae(U));let re=ue=>{let Z=m.length,de=Hn("batchDims",e[0].dataType,Z,1),ee=Ue(e[0].dataType),Y=L("a",e[0].dataType,O,z),le=L("b",e[1].dataType,B,z),Q=te("result",e[0].dataType,U.length,z),ye=[Y,le];if(J){let V=a?z:1;ye.push(L("bias",e[2].dataType,e[2].dims.length,V))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];nr(t,N);let G=Ue(Q.type.tensor),se=ir(t,Q.type.value,G),he=Sp(z,J,se,[de,Y,le,Q],a);return`
  ${ue.registerUniforms(N).registerInternalVariables(de).declareVariables(...ye,Q)}
  ${he}
  ${T?os(I,C,ee,de):ls(I,C,ee,de)}
                   `};return{name:"MatMul",shaderCache:{hint:`${I};${t.activation};${T};${a}`,inputDependencies:K},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:q}),getShaderSource:re}}}),Cp,kp,Jm=H(()=>{oe(),Rt(),ce(),sr(),as(),Qm(),ds(),Cp=(e,t,i,r,a=!1,s,o=4,u=4,p=4,f="f32")=>{let m=q=>{switch(q){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${f}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},g=q=>{switch(q){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},y=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,w=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,x=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",T=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",I=e?"row":"col",C=e?"col":"row",v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${I} / outWidth;
    let outCol = ${I} % outWidth;

    let WRow = ${C} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${C} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${C} % inChannels;
    var resData = ${Ve(o,f)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${x} && xCol >= 0 && xCol < ${T}) {
      ${y}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(o)}
    }
    return resData;`,z=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Ve(o,f)}(0.0);`:r&&i?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Ve(o,f)}(0.0);`,E=e?r&&i?g(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g(u)}
    }
    return ${Ve(u,f)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${g(u)}
    }
    return ${Ve(u,f)}(0.0);`,O=Ve(p,f),M=Ve(e?o:u,f),B=Ve(e?u:o,f),U=ir(s,O,f);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?z:E}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${B} {
      ${e?E:z}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${p};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${w}
      ${vp(a)}
      ${U}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},kp=(e,t,i,r,a,s,o,u,p)=>{let f=t.format==="NHWC",m=f?e[0].dims[3]:e[0].dims[1],g=i[0],y=f?i[2]:i[3],w=f?i[1]:i[2],x=f?i[3]:i[1],T=f&&(m%4===0||m%3===0)&&x%4===0,I=f?x:y*w,C=f?y*w:x,v=[8,8,1],z=r<=8?[4,1,1]:[4,4,1],E=[Math.ceil(I/v[0]/z[0]),Math.ceil(C/v[1]/z[1]),Math.ceil(g/v[2]/z[2])];me("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${E}`);let O=T?f&&m%4!==0?3:4:1,M=v[1]*z[1],B=v[0]*z[0],U=Math.max(v[0]*O,v[1]),q=r%M===0,K=a%B===0,J=s%U===0,re=T?[O,4,4]:[1,1,1],ue=[{type:6,data:r},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ar(t,ue),ue.push(...ae(e[0].dims,e[1].dims));let Z=["rank","rank"];o&&(ue.push(...ae(e[2].dims)),Z.push("rank")),ue.push(...ae(i));let de=ee=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];nr(t,Y);let le=T?4:1,Q=Ue(e[0].dataType),ye=`
      fn setOutputAtIndex(flatIndex : i32, value : ${T?`vec4<${Q}>`:Q}) {
        result[flatIndex] = ${T?`vec4<${Q}>`:Q}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${T?`vec4<${Q}>`:Q}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${T?"/ 4":""}, value);
      }`,N=L("x",e[0].dataType,e[0].dims.length,O===3?1:O),G=L("w",e[1].dataType,e[1].dims.length,le),se=[N,G],he=te("result",e[0].dataType,i.length,le);if(o){let V=L("bias",e[2].dataType,e[2].dims.length,le);se.push(V),ye+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${T?`vec4<${Q}>`:Q} {
          return bias[coords.${f?"w":"y"}${T?"/ 4":""}];
        }`}return`
        ${wp("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ee.registerUniforms(Y).declareVariables(...se,he)}
        ${ye}
        ${Cp(f,q,K,J,o,t,re[0],re[1],re[2],Q)}
        ${T?os(z,v,Q,void 0,!f,U):ls(z,v,Q,void 0,!f,U,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${O};${T};${q};${K};${J};${M};${B};${U}`,inputDependencies:Z},getRunData:()=>({outputs:[{dims:p?p(i):i,dataType:e[0].dataType}],dispatchGroup:{x:E[0],y:E[1],z:E[2]},programUniforms:ue}),getShaderSource:de}}}),Ep,ps,ii,Ip,cs,Ap,zp,Op,eg=H(()=>{oe(),Rt(),pe(),ce(),sr(),as(),Ep=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},ps=e=>typeof e=="number"?[e,e,e]:e,ii=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ip=(e,t,i,r=1)=>{let a=ii(t,r);return Math.floor((e[0]*(i-1)-i+a)/2)},cs=(e,t,i,r,a)=>{a==null&&(a=Ip(e,t[0],r[0]));let s=[0,0,0,i];for(let o=0;o<3;o++)e[o]+2*a>=t[o]&&(s[o]=Math.trunc((e[o]-t[o]+2*a)/r[o]+1));return s},Ap=(e,t,i,r,a,s,o,u,p,f)=>{let m,g,y,w;if(e==="VALID"&&(e=0),typeof e=="number"){m={top:e,bottom:e,left:e,right:e,front:e,back:e};let x=cs([t,i,r,1],[u,p,f],1,[a,s,o],e);g=x[0],y=x[1],w=x[2]}else if(Array.isArray(e)){if(!e.every((T,I,C)=>T===C[0]))throw Error(`Unsupported padding parameter: ${e}`);m={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let x=cs([t,i,r,1],[u,p,f],1,[a,s,o],e[0]);g=x[0],y=x[1],w=x[2]}else if(e==="SAME_UPPER"){g=Math.ceil(t/a),y=Math.ceil(i/s),w=Math.ceil(r/o);let x=(g-1)*a+u-t,T=(y-1)*s+p-i,I=(w-1)*o+f-r,C=Math.floor(x/2),v=x-C,z=Math.floor(T/2),E=T-z,O=Math.floor(I/2),M=I-O;m={top:z,bottom:E,left:O,right:M,front:C,back:v}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:m,outDepth:g,outHeight:y,outWidth:w}},zp=(e,t,i,r,a,s=!1,o="channelsLast")=>{let u,p,f,m,g;if(o==="channelsLast")[u,p,f,m,g]=e;else if(o==="channelsFirst")[u,g,p,f,m]=e;else throw new Error(`Unknown dataFormat ${o}`);let[y,,w,x,T]=t,[I,C,v]=ps(i),[z,E,O]=ps(r),M=ii(w,z),B=ii(x,E),U=ii(T,O),{padInfo:q,outDepth:K,outHeight:J,outWidth:re}=Ap(a,p,f,m,I,C,v,M,B,U),ue=s?y*g:y,Z=[0,0,0,0,0];return o==="channelsFirst"?Z=[u,ue,K,J,re]:o==="channelsLast"&&(Z=[u,K,J,re,ue]),{batchSize:u,dataFormat:o,inDepth:p,inHeight:f,inWidth:m,inChannels:g,outDepth:K,outHeight:J,outWidth:re,outChannels:ue,padInfo:q,strideDepth:I,strideHeight:C,strideWidth:v,filterDepth:w,filterHeight:x,filterWidth:T,effectiveFilterDepth:M,effectiveFilterHeight:B,effectiveFilterWidth:U,dilationDepth:z,dilationHeight:E,dilationWidth:O,inShape:e,outShape:Z,filterShape:t}},Op=(e,t,i,r,a,s)=>{let o=s==="channelsLast";o?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],p={x:i.map((I,C)=>C)},f=[Math.ceil(Ep(p.x.map(I=>i[I]))/u[0]),1,1];me("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${f}`);let m=1,g=F.size(i),y=[{type:12,data:g},{type:12,data:r},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];ar(t,y),y.push(...ae(e[0].dims,e[1].dims));let w=["rank","rank"],x=e.length===3;x&&(y.push(...ae(e[2].dims)),w.push("rank")),y.push(...ae(i));let T=I=>{let C=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];nr(t,C);let v=1,z=Ue(e[0].dataType),E=L("x",e[0].dataType,e[0].dims.length,m),O=L("W",e[1].dataType,e[1].dims.length,v),M=[E,O],B=te("result",e[0].dataType,i.length,v),U="";if(x){let J=L("bias",e[2].dataType,e[2].dims.length,v);M.push(J),U+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${z} {
          return bias[${o?ie("coords",4,5):ie("coords",1,5)}];
        }`}let q=Ve(m,z),K=ir(t,q,z);return`
            ${U}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${O.getByIndices("aIndices")};
            }
          ${I.registerUniforms(C).declareVariables(...M,B)}
          ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${B.offsetToIndices("global_idx")};
              let batch = ${ie("coords",0,E.rank)};
              let d2 = ${o?ie("coords",E.rank-1,E.rank):ie("coords",1,E.rank)};
              let xFRCCorner = vec3<u32>(${o?ie("coords",1,E.rank):ie("coords",2,E.rank)},
              ${o?ie("coords",2,E.rank):ie("coords",3,E.rank)},
              ${o?ie("coords",3,E.rank):ie("coords",4,E.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?ie("uniforms.x_shape",1,E.rank):ie("uniforms.x_shape",2,E.rank)};
              let xShapeZ = ${o?ie("uniforms.x_shape",2,E.rank):ie("uniforms.x_shape",3,E.rank)};
              let xShapeW = ${o?ie("uniforms.x_shape",3,E.rank):ie("uniforms.x_shape",4,E.rank)};
              let xShapeU = ${o?ie("uniforms.x_shape",4,E.rank):ie("uniforms.x_shape",1,E.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${x?"value = value + getBiasByOutputCoords(coords)":""};
              ${K}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${o};${m};${x}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:f[0],y:f[1],z:f[2]},programUniforms:y}),getShaderSource:T}}}),Rp,Mp,tg=H(()=>{oe(),pe(),ce(),sr(),Rp=(e,t,i,r)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",o=e[0].dims,u=e[1].dims,p=t.format==="NHWC",f=p?i[3]:i[1],m=f/t.group,g=p&&m>=4?Me(f):1,y=F.size(i)/g,w=[{type:12,data:y},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:m}];ar(t,w),w.push(...ae(o,[u[0],u[1],u[2],u[3]/g]));let x=a?["rank","rank","rank"]:["rank","rank"];w.push(...ae([i[0],i[1],i[2],i[3]/g]));let T=I=>{let C=te("output",e[0].dataType,i.length,g),v=Ue(C.type.tensor),z=ir(t,C.type.value,v),E=L("x",e[0].dataType,o.length),O=L("w",e[1].dataType,u.length,g),M=[E,O];a&&M.push(L("b",e[2].dataType,e[2].dims,g));let B=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];nr(t,B);let U=p?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${E.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${O.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${E.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${O.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${I.registerUniforms(B).declareVariables(...M,C)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${C.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${p?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${p?1:2}], outputIndices[${p?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${p?2:1}];

    var value: ${C.type.value} = ${C.type.value}(0);
    ${U}
    ${s}
    ${z}
    ${C.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${g}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:w}),getShaderSource:T}},Mp=(e,t,i,r)=>{let a=e.length>2,s=Me(i[3]),o=Me(i[2]),u=F.size(i)/s/o,p=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],f=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],m=[i[0],i[1],i[2],i[3]/s],g=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ar(t,g),g.push(...ae(p,f,m));let y=(o-1)*t.strides[1]+f[1],w=x=>{let T=te("output",e[0].dataType,m.length,s),I=Ue(T.type.tensor),C=ir(t,T.type.value,I),v=L("x",e[0].dataType,p.length,s),z=L("w",e[1].dataType,f.length,s),E=[v,z];a&&E.push(L("b",e[2].dataType,e[2].dims,s));let O=a?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return nr(t,M),`
  ${x.registerUniforms(M).declareVariables(...E,T)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${v.type.value}, ${y}>;
    var values: array<${T.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${f[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${y}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${v.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${v.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${f[1]}; w_width++) {
          let w_val = ${z.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${O}
      ${C}
      ${T.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${o};${y};${f[0]};${f[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:g}),getShaderSource:w}}}),Pp,sa,Bp,oa,fs,hs,Dp,Fp,ms,rg=H(()=>{pe(),Jm(),eg(),ds(),tg(),sr(),ss(),jt(),Pp=(e,t,i,r,a,s)=>{let o=e[0],u=e.slice(s?1:2,s?3:4),p=u.length,f=t[0],m=t.slice(2).map((y,w)=>y+(y-1)*(i[w]-1)),g=u.map((y,w)=>y+r[w]+r[w+p]).map((y,w)=>Math.floor((y-m[w]+a[w])/a[w]));return g.splice(0,0,o),g.splice(s?3:1,0,f),g},sa=[2,3,1,0],Bp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},oa=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let s=2;s<t[1].dims.length;++s)i[s-2]===0&&(i[s-2]=t[1].dims[s]);let r=e.pads.slice();Qi.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:i,pads:r}),a},fs=e=>{let t=is(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,o=e.kernel_shape,u=e.pads,p=e.strides,f=e.w_is_const();return{autoPad:r,format:i,dilations:a,group:s,kernelShape:o,pads:u,strides:p,wIsConst:f,...t,cacheKey:`${e.format};${t.activation};`}},hs=(e,t,i,r)=>{let a=i.format==="NHWC",s=Pp(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,a);if(i.group!==1){let M=[t[0]];if(a){let B=e.kernelCustomData.wT??e.compute(et(t[1],sa),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=B),M.push(B)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Mp(M,i,s,r),{inputs:M}):e.compute(Rp(M,i,s,r),{inputs:M});return}let o=t.length===3,u=t[0].dims[a?1:2],p=t[0].dims[a?2:3],f=t[0].dims[a?3:1],m=t[1].dims[2],g=t[1].dims[3],y=s[a?1:2],w=s[a?2:3],x=s[a?3:1],T=a&&m===u&&g===p&&i.pads[0]===0&&i.pads[1]===0;if(T||m===1&&g===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let M=s[0],B,U,q,K=[];if(a){let ue=e.kernelCustomData.wT??e.compute(et(t[1],sa),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ue),T){let Z=u*p*f;B=t[0].reshape([1,M,Z]),U=ue.reshape([1,Z,x]),q=[1,M,x]}else B=t[0].reshape([M,u*p,f]),U=ue.reshape([1,f,x]),q=[M,y*w,x];K.push(B),K.push(U)}else B=t[0].reshape([M,f,u*p]),U=t[1].reshape([1,x,f]),q=[M,x,y*w],K.push(U),K.push(B);o&&K.push(t[2]);let J=q[2],re=K[0].dims[K[0].dims.length-1];J<8&&re<8?e.compute(ns(K,i,s,q,a,r),{inputs:K}):e.compute(na(K,i,s,q,a,r),{inputs:K});return}let I=!0,C=e.kernelCustomData.wT??e.compute(et(t[1],sa),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C);let v=[t[0],C];o&&v.push(t[2]);let z=a?y*w:x,E=a?x:y*w,O=m*g*f;e.compute(kp(v,i,s,z,E,O,o,I,r),{inputs:v})},Dp=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),o=[1].concat(t.dilations),u=[1].concat(t.kernelShape),p=oa({...t,pads:a,strides:s,dilations:o,kernelShape:u},r);hs(e,r,p,f=>i?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},Fp=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",a=oa(i,t),s=i.autoPad==="NOTSET"?i.pads:i.autoPad,o=zp(t[0].dims,t[1].dims,i.strides,i.dilations,s,!1,r);e.compute(Op(t,a,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},ms=(e,t)=>{if(Bp(e.inputs,t),e.inputs[0].dims.length===3)Dp(e,t);else if(e.inputs[0].dims.length===5)Fp(e,e.inputs,t);else{let i=oa(t,e.inputs);hs(e,e.inputs,i)}}}),Np,ig=H(()=>{oe(),Rt(),pe(),ce(),Np=(e,t,i)=>{let r=e.length>2,a=t.outputShape,s=t.format==="NHWC",o=t.group,u=e[1].dims,p=u[2]/o,f=u[3],m=s?Me(p):1,g=s&&f===1&&p>=4,y=g?Math.floor(p/4)*4:Math.floor(p/m)*m,w=p-y,x=s?Me(f):1,T=s?f===1?m:x:1,I=F.size(a)/x,C=[Math.ceil(I/64),1,1];me("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${C}`);let v=["rank","rank"],z=[t.strides[0],t.strides[1]],E=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],O=[t.dilations[0],t.dilations[1]],M=[E[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),E[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],B=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],U=[{type:12,data:I},{type:12,data:z},{type:12,data:E},{type:12,data:O},{type:12,data:M},{type:6,data:B},{type:12,data:y},{type:12,data:p},{type:12,data:f},...ae(e[0].dims,e[1].dims)];r&&(U.push(...ae(e[2].dims)),v.push("rank")),U.push(...ae(a));let q=K=>{let J=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:z.length},{name:"filter_dims",type:"u32",length:E.length},{name:"dilations",type:"u32",length:E.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:B.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],re=Ue(e[0].dataType),ue=s?1:2,Z=s?2:3,de=s?3:1,ee=L("W",e[1].dataType,e[1].dims.length,T),Y=L("Dy",e[0].dataType,e[0].dims.length,m),le=[Y,ee];r&&le.push(L("bias",e[2].dataType,[a[de]].length,x));let Q=te("result",e[0].dataType,a.length,x),ye=()=>{let se="";if(g)m===4?se+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${ee.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:m===2?se+=`
          dotProd = dotProd + dot(vec4<${re}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${re}>(${ee.getByOffset("w_offset")}, ${ee.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:m===1&&(se+=`
          dotProd = dotProd + dot(vec4<${re}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${re}>(${ee.getByOffset("w_offset")}, ${ee.getByOffset("w_offset + 1u")}, ${ee.getByOffset("w_offset + 2u")}, ${ee.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(se+=`
                  let xValue = ${s?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,m===1)se+=`
          let w_offset = ${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ee.getByOffset(`w_offset / ${T}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let he=0;he<m;he++)se+=`
            let wValue${he} = ${ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${he}, wOutChannel)`)} / ${T}`)};
            dotProd = dotProd + xValue[${he}] * wValue${he};`;return se},N=()=>{if(w===0)return"";if(!g)throw new Error(`packInputAs4 ${g} is not true.`);let se="";if(m===1){se+="dotProd = dotProd";for(let he=0;he<w;he++)se+=`
            + ${Y.getByOffset(`x_offset + ${he}`)} * ${ee.getByOffset(`w_offset + ${he}`)}`;se+=";"}else if(m===2){if(w!==2)throw new Error(`Invalid inputChannelsRemainder ${w}.`);se+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${ee.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return se},G=`
            let outputIndices = ${Q.offsetToIndices(`global_idx * ${x}`)};
            let batch = ${Q.indicesGet("outputIndices",0)};
            let d1 = ${Q.indicesGet("outputIndices",de)};
            let r = ${Q.indicesGet("outputIndices",ue)};
            let c = ${Q.indicesGet("outputIndices",Z)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${re}(dyRCorner) + ${re}(wR)) / ${re}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${re}(uniforms.Dy_shape[${ue}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${re}(dyCCorner) + ${re}(wC)) / ${re}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${re}(uniforms.Dy_shape[${Z}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${g?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m};
                var w_offset = ${ee.indicesToOffset(`${ee.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${T};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${g?4:m}) {
                  ${ye()}
                  inputChannel = inputChannel + ${g?4:m};
                }
                ${N()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${x}]`:""};
            ${Q.setByOffset("global_idx","value")};
          `;return`
    ${K.registerUniforms(J).declareVariables(...le,Q)}
      ${K.mainStart()}
      ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${G}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${m}${T}${x}${g}${w}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:C[0],y:C[1],z:C[2]},outputs:[{dims:i?i(a):a,dataType:e[0].dataType}],programUniforms:U}),getShaderSource:q}}}),Up,Wp,Lp,gs,qp,Vp,_s,jp,Hp,ag=H(()=>{ig(),sr(),jt(),Up=(e,t,i,r,a,s)=>(e-1)*t+i+(r-1)*a+1-s,Wp=(e,t,i,r,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=s,i[a]=e-s):t==="SAME_LOWER"&&(i[r]=e-s,i[a]=s)},Lp=(e,t,i,r,a,s,o,u,p,f)=>{let m=e.length-2,g=f.length===0;p.length<m&&p.push(...Array(m-p.length).fill(0));let y=e[0],w=t[u?3:1]*a;for(let x=0,T=e.length-m-(u?1:0);x<m;++x,++T){let I=e[T],C=g?I*o[x]:f[x],v=Up(I,o[x],s[x],t[T],i[x],C);Wp(v,r,s,x,x+m),g&&f.push(o[x]*(I-1)+p[x]+(t[T]-1)*i[x]+1-s[x]-s[x+m])}f.splice(0,0,y),f.splice(u?3:1,0,w)},gs=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((g,y)=>g*y,1)===0){i.length=0;for(let g=2;g<t[1].dims.length;++g)i.push(t[1].dims[g])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),o=e.outputPadding.slice(),u=t[0].dims,p=e.dilations.slice();if(p.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;p=new Array(g).fill(1)}let f=e.strides.slice();if(f.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;f=new Array(g).fill(1)}Lp(u,i,p,e.autoPad,e.group,a,f,r,o,s);let m=Object.assign({},e);return Object.assign(m,{kernelShape:i,pads:a,outputPadding:o,outputShape:s,dilations:p,strides:f}),m},qp=e=>{let t=is(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group,o=e.kernelShape,u=e.pads,p=e.strides,f=e.wIsConst(),m=e.outputPadding,g=e.outputShape;return{autoPad:r,format:i,dilations:a,group:s,kernelShape:o,outputPadding:m,outputShape:g,pads:u,strides:p,wIsConst:f,...t,cacheKey:`${e.format};${t.activation};`}},Vp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((o,u)=>o+u,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((o,u)=>o+u,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((o,u)=>o+u,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((o,u)=>o+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},_s=(e,t,i,r)=>{let a=e.kernelCustomData.wT??e.compute(et(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(Np(s,i,r),{inputs:s})},jp=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],o=[1].concat(o),s=[1].concat(s),a=[1].concat(a);let p=t.outputPadding;p=[0].concat(p);let f=gs({...t,pads:u,strides:o,dilations:s,kernelShape:a,outputPadding:p},r);_s(e,r,f,m=>i?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},Hp=(e,t)=>{if(Vp(e.inputs,t),e.inputs[0].dims.length===3)jp(e,t);else{let i=gs(t,e.inputs);_s(e,e.inputs,i)}}}),Gp,Kp,Yp,ng=H(()=>{oe(),pe(),De(),ce(),Gp=(e,t,i,r)=>{let a=F.size(t),s=t.length,o=L("input",e,s),u=te("output",e,s),p=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),f=F.normalizeAxis(p,s),m=g=>{let y=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,w=ie("uniforms.input_shape","uniforms.axis",s),x=r.reverse?y+(r.exclusive?" + 1":""):"0",T=r.reverse?w:y+(r.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,u)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${x};
                  let last : i32 = ${T};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:f},...ae(t,t)]}),getShaderSource:m}},Kp=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,a=e.inputs[1];e.compute(Gp(r,i,a,t),{inputs:[0]})},Yp=e=>{let t=e.exclusive===1,i=e.reverse===1;return we({exclusive:t,reverse:i})}}),Zp,Xp,Qp,Jp,ec,sg=H(()=>{oe(),pe(),De(),ce(),Zp=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Xp=(e,t,i,r)=>{let a=[];a.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let s=0;s<t;++s)a.push(i.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},Qp=(e,t)=>{let i,r,a,s,o,u,p=t.format==="NHWC",f=t.blocksize,m=t.mode==="DCR";p?([i,r,a,s]=e.dims,o=m?[i,r,a,f,f,s/f**2]:[i,r,a,s/f**2,f,f],u=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=m?[i,f,f,s/f**2,r,a]:[i,s/f**2,f,f,r,a],u=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=e.reshape(o),y=g.dims.length,w=e.dataType,x=L("a",w,y),T=te("output",w,y),I=C=>`
  ${C.registerUniform("output_size","u32").declareVariables(x,T)}

  ${Xp(u,y,x,T)}

  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${T.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${T.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:C=>{let v=p?[i,r*f,a*f,s/f**2]:[i,s/f**2,r*f,a*f],z=F.size(v),E=g.dims,O=F.sortBasedOnPerm(E,u);return{outputs:[{dims:v,dataType:C[0].dataType}],dispatchGroup:{x:Math.ceil(z/64)},programUniforms:[{type:12,data:z},...ae(E,O)]}},getShaderSource:I}},Jp=(e,t)=>{Zp(e.inputs),e.compute(Qp(e.inputs[0],t))},ec=e=>we({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ua,ai,ys,tc,rc,ic,ac,bs,nc,sc,oc,og=H(()=>{oe(),pe(),De(),ce(),ua="[a-zA-Z]|\\.\\.\\.",ai="("+ua+")+",ys="^"+ai+"$",tc="("+ai+",)*"+ai,rc="^"+tc+"$",ic=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let i=this.symbolToIndices.get(e);i===void 0?i=[t]:i.push(t),this.symbolToIndices.set(e,i)}},ac=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,r]=t.includes("->")?t.split("->",2):[t,""];if(!i.match(RegExp(rc)))throw new Error("Invalid LHS term");if(i.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(ys)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,o,s);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!r.match(RegExp(ai)))throw new Error("Invalid RHS");r.match(RegExp(ua,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,i){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(i)}else r={count:1,dimValue:t,inputIndices:[i]};this.symbolToInfo.set(e,r)}processTerm(e,t,i,r=-1){let a=i.length,s=!1,o=[],u=0;if(!e.match(RegExp(ys))&&!t&&e!=="")throw new Error("Invalid LHS term");let p=e.match(RegExp(ua,"g")),f=new ic(r);return p?.forEach((m,g)=>{if(m==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let y=a-p.length+1;if(y<0)throw new Error("Ellipsis out of bounds");if(o=i.slice(u,u+y),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw new Error("Ellipsis must be specified in the LHS");for(let w=0;w<o.length;w++){let x=String.fromCharCode(48+w);f.addSymbol(x,g+w),this.addSymbol(x,i[u++],r)}}else f.addSymbol(m,g+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(m,i[u++],r)}),f}},bs=e=>e+"_max",nc=(e,t,i,r)=>{let a=e.map(f=>f.length).map((f,m)=>L(`input${m}`,t,f)),s=F.size(r),o=te("output",t,r.length),u=[...i.symbolToInfo.keys()].filter(f=>!i.rhs.symbolToIndices.has(f)),p=f=>{let m=[],g="var prod = 1.0;",y="var sum = 0.0;",w="sum += prod;",x=[],T=[],I=[],C=[],v=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((E,O)=>{if(i.rhs.symbolToIndices.has(O)){let M=i.rhs.symbolToIndices.get(O)?.[0];M!==void 0&&i.lhs.forEach((B,U)=>{if(E.inputIndices.includes(U)){let q=B.symbolToIndices.get(O);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(K=>{m.push(`${a[U].indicesSet(`input${U}Indices`,K,o.indicesGet("outputIndices",M))}`)})}})}else i.lhs.forEach((M,B)=>{if(E.inputIndices.includes(B)){let U=M.symbolToIndices.get(O);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(q=>{x.push(`${a[B].indicesSet(`input${B}Indices`,q,`${O}`)}`)}),C.push(`prod *= ${a[B].getByIndices(`input${B}Indices`)};`)}}),T.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${bs(O)}; ${O}++) {`),I.push("}")});let z=v?[...m,`let sum = ${a.map((E,O)=>E.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...m,y,...T,...x,g,...C,w,...I];return`
            ${f.registerUniforms(u.map(E=>({name:`${bs(E)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,o)}

            ${f.mainStart()}
            ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${a.map((E,O)=>`var input${O}Indices: ${a[O].type.indices};`).join(`
`)}
            ${z.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let f=u.filter(g=>i.symbolToInfo.has(g)).map(g=>({type:12,data:i.symbolToInfo.get(g)?.dimValue||0}));f.push({type:12,data:s});let m=e.map((g,y)=>[...ae(g)]).reduce((g,y)=>g.concat(y),f);return m.push(...ae(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:m}},getShaderSource:p}},sc=(e,t)=>{let i=new ac(e.inputs,t.equation),r=i.outputDims,a=e.inputs.map((s,o)=>s.dims);e.compute(nc(a,e.inputs[0].dataType,i,r))},oc=e=>{let t=e.equation.replace(/\s+/g,"");return we({equation:t})}}),uc,vs,lc,dc,pc,ug=H(()=>{oe(),pe(),ce(),uc=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,a=t.length<i.length?0:t.length-i.length;for(;r<i.length&&a<t.length;++r,++a)if(i[r]!==t[a]&&i[r]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},vs=(e,t)=>{let i=e.length-t.length,r=[];for(let a=0;a<i;++a)r.push(e[a]);for(let a=0;a<t.length;++a)r.push(t[a]===1?e[a+i]:t[a]);return r},lc=(e,t)=>e.length>t.length?vs(e,t):vs(t,e),dc=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=lc(t,i),a=e[0].dataType,s=a===9||F.size(t)===1,o=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=s||r.length>0&&r[r.length-1]%4===0?4:1,p=Math.ceil(F.size(r)/u),f=g=>{let y=L("input",a,t.length,o),w=te("output",a,r.length,u),x;if(a===9){let T=(I,C,v="")=>`
          let outputIndices${C} = ${w.offsetToIndices(`outputOffset + ${C}u`)};
          let offset${C} = ${y.broadcastedIndicesToOffset(`outputIndices${C}`,w)};
          let index${C} = offset${C} / 4u;
          let component${C} = offset${C} % 4u;
          ${I}[${C}] = ${v}(${y.getByOffset(`index${C}`)}[component${C}]);
        `;x=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${T("data",0,"u32")}
        ${T("data",1,"u32")}
        ${T("data",2,"u32")}
        ${T("data",3,"u32")}
        ${w.setByOffset("global_idx","data")}
      }`}else x=`
        let outputIndices = ${w.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${y.broadcastedIndicesToOffset("outputIndices",w)};
        let data = ${w.type.value}(${y.getByOffset(`inputOffset / ${o}`)});
        ${w.setByOffset("global_idx","data")}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(y,w)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${x}`},m=[{type:12,data:p},...ae(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${o}${u}`,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m})}},pc=e=>{uc(e.inputs),e.compute(dc(e.inputs),{inputs:[0]})}}),cc,fc,lg=H(()=>{oe(),pe(),ce(),rs(),cc=e=>{let t=e[0].dataType,i=F.size(e[0].dims),r=F.size(e[1].dims),a=r%4===0,s=o=>{let u=L("x",t,[1],4),p=L("bias",t,[1],4),f=te("y",t,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=w=>`
      let bias${w}_offset: u32 = (global_idx * 4 + ${w}) % uniforms.bias_size;
      let bias${w} = ${p.getByOffset(`bias${w}_offset / 4`)}[bias${w}_offset % 4];`,y=a?`
      let bias = ${p.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${o.registerUniforms(m).declareVariables(u,p,f)}

    ${es(Ge(t))}

    ${o.mainStart(Er)}
      ${o.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${y}
      let x_in = x + bias;
      ${f.setByOffset("global_idx",ts("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:o=>({outputs:[{dims:o[0].dims,dataType:o[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/Er/4)}})}},fc=e=>{e.inputs.length<2||F.size(e.inputs[1].dims)===0?Gd(e):e.compute(cc(e.inputs))}}),hc,mc,gc,_c,dg=H(()=>{oe(),pe(),De(),ce(),hc=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},mc=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i.length,s=F.normalizeAxis(t.axis,a),o=i.slice(0);o.splice(s,1,...r);let u=i[s],p=e[0].dataType===9?4:1,f=Math.ceil(F.size(o)/p),m=[{type:12,data:f},{type:6,data:u},{type:12,data:s},...ae(e[0].dims,e[1].dims,o)],g=y=>{let w=L("data",e[0].dataType,e[0].dims.length,p),x=L("inputIndices",e[1].dataType,e[1].dims.length),T=te("output",e[0].dataType,o.length,p),I=v=>{let z=r.length,E=`var indicesIndices${v}  = ${x.type.indices}(0);`;for(let O=0;O<z;O++)E+=`${z>1?`indicesIndices${v}[${O}]`:`indicesIndices${v}`} = ${o.length>1?`outputIndices${v}[uniforms.axis + ${O}]`:`outputIndices${v}`};`;E+=`
          var idx${v} = ${x.getByIndices(`indicesIndices${v}`)};
          if (idx${v} < 0) {
            idx${v} = idx${v} + uniforms.axisDimLimit;
          }
          var dataIndices${v} : ${w.type.indices};
        `;for(let O=0,M=0;O<a;O++)O===s?(E+=`${a>1?`dataIndices${v}[${O}]`:`dataIndices${v}`} = u32(idx${v});`,M+=z):(E+=`${a>1?`dataIndices${v}[${O}]`:`dataIndices${v}`} = ${o.length>1?`outputIndices${v}[${M}]`:`outputIndices${v}`};`,M++);return E},C;if(e[0].dataType===9){let v=(z,E,O="")=>`
          let outputIndices${E} = ${T.offsetToIndices(`outputOffset + ${E}u`)};
          ${I(E)};
          let offset${E} = ${w.indicesToOffset(`dataIndices${E}`)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${z}[${E}] = ${O}(${w.getByOffset(`index${E}`)}[component${E}]);
        `;C=`
        let outputOffset = global_idx * ${p};
        var value = vec4<u32>(0);
        ${v("value",0,"u32")}
        ${v("value",1,"u32")}
        ${v("value",2,"u32")}
        ${v("value",3,"u32")}
        ${T.setByOffset("global_idx","value")}
      `}else C=`
      let outputIndices = ${T.offsetToIndices("global_idx")};
      ${I("")};
      let value = ${w.getByIndices("dataIndices")};
      ${T.setByOffset("global_idx","value")};
      `;return`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(w,x,T)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${C}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:g}},gc=e=>we({axis:e.axis}),_c=(e,t)=>{let i=e.inputs;hc(i),e.compute(mc(e.inputs,t))}}),yc,bc,vc,pg=H(()=>{oe(),pe(),ce(),yc=(e,t,i,r,a,s,o,u,p)=>{let f=[{type:12,data:s},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:o},{type:12,data:u},{type:12,data:p}],m=[s];f.push(...ae(t.dims,m));let g=y=>{let w=L("indices_data",t.dataType,t.dims.length),x=te("input_slice_offsets_data",12,1,1),T=[w,x],I=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${y.registerUniforms(I).declareVariables(...T)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}),getShaderSource:g},{inputs:[t],outputs:[-1]})[0]},bc=(e,t)=>{let i=e.inputs,r=i[0].dims,a=i[0].dataType,s=i[1].dims,o=s[s.length-1],u=F.sizeToDimension(s,s.length-1),p=F.sizeFromDimension(r,t.batchDims+o),f=F.sizeToDimension(r,t.batchDims),m=F.sizeFromDimension(r,t.batchDims),g=u/f,y=new Array(o),w=p;for(let E=0;E<o;++E)y[o-1-E]=w,w*=r[t.batchDims+o-1-E];let x=yc(e,i[1],y,t.batchDims,r,u,g,m,o),T=t.batchDims+o;if(T>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let I=s.slice(0,-1).concat(r.slice(T)),C=F.size(I),v=[{type:12,data:C},{type:12,data:p},...ae(i[0].dims,x.dims,I)],z=E=>{let O=L("data",i[0].dataType,i[0].dims.length),M=L("slice_offsets",12,x.dims.length),B=te("output",i[0].dataType,I.length);return`
          ${E.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,M,B)}
            ${E.mainStart()}
            ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:I,dataType:a}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:v}),getShaderSource:z},{inputs:[i[0],x]})},vc=e=>({batchDims:e.batch_dims,cacheKey:""})}),wc,$c,xc,Tc,cg=H(()=>{oe(),pe(),De(),ce(),wc=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=F.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,a=e[0],s=e[2],o=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((u,p)=>p===i?Math.ceil(u/r)===s.dims[p]:u===s.dims[p]).reduce((u,p)=>u&&p,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==s.dims.length||!o.dims.map((u,p)=>u===s.dims[p]).reduce((u,p)=>u&&p,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},$c=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i.length,s=F.normalizeAxis(t.gatherAxis,a),o=F.normalizeAxis(t.quantizeAxis,a),u=i.slice(0);u.splice(s,1,...r);let p=F.size(u),f=e[2].dataType,m=e[0].dataType===22,g=[{type:12,data:p},{type:12,data:o},{type:12,data:s},{type:12,data:t.blockSize},...ae(...e.map((w,x)=>w.dims),u)],y=w=>{let x=L("data",e[0].dataType,e[0].dims.length),T=L("inputIndices",e[1].dataType,e[1].dims.length),I=L("scales",e[2].dataType,e[2].dims.length),C=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=te("output",f,u.length),z=[x,T,I];C&&z.push(C);let E=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${w.registerUniforms(E).declareVariables(...z,v)}
        ${w.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${T.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${T.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${x.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${x.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${T.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[s]};
        }
        ${x.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${x.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${x.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${x.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${I.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${I.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${I.getByIndices("scale_indices")};
        ${C?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${C.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${C.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ge(f)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((w,x)=>x!==1).map(w=>w.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(w,x)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:f}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:g}),getShaderSource:y}},xc=(e,t)=>{let i=e.inputs;wc(i,t),e.compute($c(e.inputs,t))},Tc=e=>we({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Sc,Cc,kc,Ec,fg=H(()=>{oe(),pe(),De(),ce(),Sc=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Cc=(e,t)=>{let i=e[0].dims,r=e[0].dataType,a=i.length,s=e[1].dims,o=e[1].dataType,u=F.normalizeAxis(t.axis,a),p=i[u],f=s.slice(0),m=F.size(f),g=L("input",r,a),y=L("indicesInput",o,s.length),w=te("output",r,f.length),x=[{type:12,data:m},{type:6,data:p},{type:12,data:u}];return x.push(...ae(i,s,f)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:x}),getShaderSource:T=>`
      ${T.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,w)}
      ${T.mainStart()}
      ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${w.offsetToIndices("global_idx")};

      var idx = ${y.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${w.setByOffset("global_idx","value")};
  }`}},kc=e=>we({axis:e.axis}),Ec=(e,t)=>{let i=e.inputs;Sc(i),e.compute(Cc(e.inputs,t))}}),Ic,Ac,zc,Oc,hg=H(()=>{oe(),pe(),ce(),Ic=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Ac=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[a,s,o]=Wu.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),u=[a,s];if(!u)throw new Error("Can't use gemm on the given tensors");let p=16,f=Math.ceil(s/p),m=Math.ceil(a/p),g=!0,y=F.size(u),w=[{type:12,data:g?f:y},{type:12,data:a},{type:12,data:s},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],x=["type","type"];e.length===3&&(w.push(...ae(e[2].dims)),x.push("rank")),w.push(...ae(u));let T=C=>{let v="";t.transA&&t.transB?v="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?v="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?v="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(v="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let z=t.alpha===1?"":"value *= uniforms.alpha;",E=L("a",e[0].dataType,e[0].dims),O=L("b",e[1].dataType,e[1].dims),M=E.type.value,B=null,U=[E,O];e.length===3&&(B=L("c",e[2].dataType,e[2].dims.length),U.push(B));let q=te("output",e[0].dataType,u.length);U.push(q);let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${C.registerUniforms(K).declareVariables(...U)}

  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${v}
    }

    ${z}
    ${B!=null?`let cOffset = ${B.broadcastedIndicesToOffset("vec2(m, n)",q)}; value += ${M}(uniforms.beta) * ${B.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},I=C=>{let v=L("a",e[0].dataType,e[0].dims),z=L("b",e[1].dataType,e[1].dims),E=null,O=[v,z];e.length===3&&(E=L("c",e[2].dataType,e[2].dims.length),O.push(E));let M=te("output",e[0].dataType,u.length);O.push(M);let B=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],U="",q="";t.transA&&t.transB?(q=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,U="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(q=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,U="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(q=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,U="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(q=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,U="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let K=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${C.registerUniforms(B).declareVariables(...O)}
  var<workgroup> tile_a: array<array<${v.type.storage}, ${p}>, ${p}>;
  var<workgroup> tile_b: array<array<${z.type.storage}, ${p}>, ${p}>;
  ${C.mainStart([p,p,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${p};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${p};
    let num_tiles = (uniforms.K - 1) / ${p} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${q}
      k_start = k_start + ${p};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${p}; k++) {
        ${U}
      }
      workgroupBarrier();
    }

    ${K}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${E!=null?`let cOffset = ${E.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${E.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return g?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:f*m},programUniforms:w}),getShaderSource:I}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:w}),getShaderSource:T}},zc=e=>{let t=e.transA,i=e.transB,r=e.alpha,a=e.beta;return{transA:t,transB:i,alpha:r,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Oc=(e,t)=>{Ic(e.inputs),e.compute(Ac(e.inputs,t))}}),Tt,Mt,or,ur,Rc,Mc,Pc,Bc,Dc,Fc,Nc,Uc,Wc,Lc,mg=H(()=>{oe(),pe(),De(),ce(),[Tt,Mt,or,ur]=[0,1,2,3],Rc=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Mc=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Pc=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Bc=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Dc=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Fc=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Tt}] = batch;
     indices[${Mt}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${or}] = u32(r);
            indices[${ur}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${or}] = u32(clamp(r, 0, H - 1));
          indices[${ur}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${or}] = gs_reflect(r, border[1], border[3]);
          indices[${ur}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Nc=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Tt}], indices[${Mt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Tt}], indices[${Mt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Tt}], indices[${Mt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Tt}], indices[${Mt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Tt}], indices[${Mt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Tt}], indices[${Mt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Uc=(e,t)=>{let i=L("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=L("grid",e[1].dataType,r.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Tt,Mt,or,ur]=[0,3,1,2]);let o=te("output",e[0].dataType,s.length),u=i.type.value,p=F.size(s),f=[{type:12,data:p},...ae(e[0].dims,r,s)],m=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(i,a,o)}
  ${Mc}
  ${Pc(u)}
  ${Bc(t)}
  ${Dc(t)}
  ${Fc(i,u,t)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${or}]);
      let W_in = i32(uniforms.x_shape[${ur}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Tt}], indices[${or}], indices[${ur}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Nc(o,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:g=>{let y=F.size(s);return{outputs:[{dims:s,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:f}},getShaderSource:m}},Wc=(e,t)=>{Rc(e.inputs),e.compute(Uc(e.inputs,t))},Lc=e=>we({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ze,qc,Vc,ws,jc,ni,Hc,Gc=H(()=>{oe(),pe(),De(),Wn(),Qn(),ce(),jt(),Ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,qc=(e,t)=>{let i=e[0],r=Ze(e,1),a=Ze(e,2),s=Ze(e,3),o=Ze(e,4),u=Ze(e,5),p=Ze(e,6),f=Ze(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=i.dims[0],g=i.dims[1],y=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],w=g,x=0,T=0,I=Math.floor(y/t.numHeads);if(p&&f&&F.size(p.dims)&&F.size(f.dims)){if(p.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(p.dims[0]!==m||p.dims[1]!==t.numHeads||p.dims[3]!==I)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[0]!==m||f.dims[1]!==t.numHeads||f.dims[3]!==I)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[2]!==f.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(f.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');x=p.dims[2],T=p.dims[2]}else if(p&&F.size(p.dims)||f&&F.size(f.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let C;if(r&&F.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');C=2,w=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==I)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');C=5,w=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==I)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');C=0,w=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');C=3}if(s&&F.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let v=x+w,z=0;if(o&&F.size(o.dims)>0){z=8;let B=o.dims;throw B.length===1?B[0]===m?z=1:B[0]===3*m+2&&(z=3):B.length===2&&B[0]===m&&B[1]===v&&(z=5),z===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let E=!1,O=y;if(a&&F.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(w!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=a.dims[2]}else{if(w!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=a.dims[1]*a.dims[3],E=!0}}let M=!1;if(o&&F.size(o.dims)>0)throw new Error("Key padding mask is not supported");if(u&&F.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==m||u.dims[1]!==t.numHeads||u.dims[2]!==g||u.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:x,kvSequenceLength:w,totalSequenceLength:v,maxSequenceLength:T,inputHiddenSize:0,hiddenSize:y,vHiddenSize:O,headSize:I,vHeadSize:Math.floor(O/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:z,scale:t.scale,broadcastResPosBias:M,passPastInKv:E,qkvFormat:C}},Vc=e=>we({...e}),ws=we({perm:[0,2,1,3]}),jc=(e,t,i,r,a,s,o)=>{let u=[r,a,s],p=F.size(u),f=[{type:12,data:p},{type:12,data:o},{type:12,data:s}],m=g=>{let y=te("qkv_with_bias",t.dataType,u),w=L("qkv",t.dataType,u),x=L("bias",i.dataType,u),T=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms(T).declareVariables(w,x,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:m},{inputs:[t,i],outputs:[-1]})[0]},ni=(e,t,i,r,a,s,o,u)=>{let p=s;if(o&&F.size(o.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return p=jc(e,s,o,t,r,i*a,u),p=p.reshape([t,r,i,a]),i===1||r===1?p:e.compute(et(p,ws.perm),{inputs:[p],outputs:[-1]})[0]}else return s.dims.length===3&&(p=s.reshape([t,r,i,a])),i===1||r===1?p:e.compute(et(p,ws.perm),{inputs:[p],outputs:[-1]})[0]},Hc=(e,t)=>{let i=qc(e.inputs,t),r=e.inputs[0],a=Ze(e.inputs,1),s=Ze(e.inputs,2),o=Ze(e.inputs,3),u=Ze(e.inputs,4),p=Ze(e.inputs,5),f=Ze(e.inputs,6),m=Ze(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let g=a&&s&&a.dims.length===4&&s.dims.length===4,y=ni(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,o,0);if(g)return ei(e,y,a,s,u,void 0,f,m,p,i);if(!a||!s)throw new Error("key and value must be provided");let w=ni(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,a,o,i.hiddenSize),x=ni(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,s,o,2*i.hiddenSize);ei(e,y,w,x,u,void 0,f,m,p,i)}}),Kc,Yc,Zc,Xc,$s,Qc,Jc,ef=H(()=>{oe(),pe(),De(),ce(),Kc=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Yc=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>i.push(Number(a))),r=i.length),we({numOutputs:r,axis:t.axis,splitSizes:i})},Zc=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ie("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Xc=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let a=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(a):r===0?i.push(`if (output_number == ${r}u) { ${a} }`):r===t-1?i.push(`else { ${a} }`):i.push(`else if (output_number == ${r}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},$s=(e,t)=>{let i=e[0].dims,r=F.size(i),a=e[0].dataType,s=F.normalizeAxis(t.axis,i.length),o=new Array(t.numOutputs),u=L("input",a,i.length),p=new Array(t.numOutputs),f=[],m=[],g=0,y=[{type:12,data:r}];for(let x=0;x<t.numOutputs;x++){g+=t.splitSizes[x],p[x]=g;let T=i.slice();T[s]=t.splitSizes[x],m.push(T),o[x]=te(`output${x}`,a,T.length),f.push({dims:m[x],dataType:e[0].dataType})}y.push({type:12,data:p},...ae(i,...m));let w=x=>`
  ${x.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",p.length).declareVariables(u,...o)}
  ${Zc(p.length)}
  ${Xc(o)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ie("uniforms.size_in_split_axis","output_number - 1u",p.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:f,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Qc=(e,t)=>{Kc(e.inputs);let i=e.inputs.length===1?t:Yc(e.inputs,t);e.compute($s(e.inputs,i),{inputs:[0]})},Jc=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return we({axis:t,numOutputs:r,splitSizes:i})}}),tf,la,rf,af=H(()=>{oe(),pe(),De(),ce(),tf=(e,t)=>{let[i,r,a,s]=e,{numHeads:o,rotaryEmbeddingDim:u}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!F.areEqual(r.dims,[])&&!F.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!F.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&o===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let p=i.dims[0],f=i.dims[i.dims.length-2],m=a.dims[0],g=F.sizeFromDimension(i.dims,1)/f,y=u===0?a.dims[1]*2:g/o;if(u>y)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(p!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(f!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(y/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(f>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},la=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:a,scale:s}=t,o=e[0].dims[0],u=F.sizeFromDimension(e[0].dims,1),p=e[0].dims[e[0].dims.length-2],f=u/p,m=e[2].dims[1],g=a===0?m*2:f/r,y=new Array(o,p,f/g,g-m),w=F.computeStrides(y),x=[{type:1,data:s},{type:12,data:y},{type:12,data:w},...e[0].dims.length===3?new Array({type:12,data:[u,f,g,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,g,p*g,1]}):[],...ae(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],T=I=>{let C=L("input",e[0].dataType,e[0].dims.length),v=L("position_ids",e[1].dataType,e[1].dims.length),z=L("cos_cache",e[2].dataType,e[2].dims.length),E=L("sin_cache",e[3].dataType,e[3].dims.length),O=te("output",e[0].dataType,e[0].dims.length);return I.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:y.length},{name:"global_strides",type:"u32",length:w.length},{name:"input_output_strides",type:"u32",length:w.length}]),`
        ${I.declareVariables(C,v,z,E,O)}

        ${I.mainStart(Er)}
          let half_rotary_emb_dim = uniforms.${z.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${v.broadcastedIndicesToOffset("bsnh.xy",te("",v.type.tensor,2))};
            let position_id =
                u32(${v.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${C.getByOffset("i")} * ${z.get("position_id","bsnh[3]")} -
                ${C.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${C.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} +
                ${C.getByOffset("j")} * ${z.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",C.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:we({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:T,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(y)/Er)},programUniforms:x})}},rf=(e,t)=>{tf(e.inputs,t),e.compute(la(e.inputs,t))}}),nf,sf,xs,of,uf,gg=H(()=>{De(),oe(),Qn(),Gc(),ef(),jt(),af(),ce(),nf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],a=e[2],s=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,p=i.dims[0],f=i.dims[1],m=i.dims.length===3?u?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],g=f,y=0,w=!r||r.dims.length===0,x=Math.floor(w?m/(t.numHeads+2*t.kvNumHeads):m/t.numHeads);w&&(m=x*t.numHeads);let T=s&&s.dims.length!==0,I=o&&o.dims.length!==0;if(T&&s.dims.length===4&&s.dims[0]===p&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===x)throw new Error("BSNH pastKey/pastValue is not supported");if(T&&I){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(o.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=s.dims[2]}else if(T||I)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let C=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');g=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');C=3}let v=0,z=!1,E=t.kvNumHeads?x*t.kvNumHeads:m;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(g!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(g!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],z=!0}}let O=e.length>4?e[5]:void 0;if(O&&O.dims.length!==1&&O.dims[0]!==p)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:p,sequenceLength:f,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:m,vHiddenSize:E,headSize:x,vHeadSize:Math.floor(E/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:z,qkvFormat:C}},sf=we({perm:[0,2,1,3]}),xs=(e,t,i)=>{let r=t,a=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,a,i.headSize]),r=e.compute(et(r,sf.perm),{inputs:[r],outputs:[-1]})[0]),r},of=(e,t,i,r)=>{let a=7,s=["type","type"],o=[e*t],u=e*t,p=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],f=m=>{let g=L("seq_lens",i.dataType,i.dims),y=L("total_seq_lens",r.dataType,r.dims),w=te("pos_ids",a,o),x=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${m.registerUniforms(x).declareVariables(g,y,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${y.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${g.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${w.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${w.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${w.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:f}},uf=(e,t)=>{let i=nf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,p=e.inputs.length>4?e.inputs[5]:void 0,f=e.inputs.length>5?e.inputs[6]:void 0,m=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=we({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,m*i.headSize,m*i.headSize]}),[y,w,x]=!a&&!s?e.compute($s([r],g),{inputs:[r],outputs:[-1,-1,-1]}):[r,a,s],T,I;if(t.doRotary){let E=e.compute(of(i.batchSize,i.sequenceLength,p,f),{inputs:[p,f],outputs:[-1]})[0],O=e.inputs[7],M=e.inputs[8],B=we({interleaved:t.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),U=[y,E,O,M],q=[-1];T=e.compute(la(U,B),{inputs:U,outputs:q})[0],U.splice(0,1,w);let K=we({interleaved:t.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});I=e.compute(la(U,K),{inputs:U,outputs:q})[0]}let C=ni(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,t.doRotary?T:y,void 0,0),v=xs(e,t.doRotary?I:w,i),z=xs(e,x,i);ei(e,C,v,z,void 0,void 0,o,u,void 0,i,p,f)}}),Ts,lf,df,pf,_g=H(()=>{oe(),pe(),jt(),ce(),Ts=(e,t,i,r,a,s,o,u)=>{let p=Me(s),f=p===1?"f32":`vec${p}f`,m=p===1?"vec2f":`mat2x${p}f`,g=a*o,y=64;g===1&&(y=256);let w=[a,o,s/p],x=[a,o,2],T=["rank","type","type"],I=[];I.push(...ae(w,x));let C=v=>{let z=L("x",t.dataType,3,p),E=L("scale",i.dataType,i.dims),O=L("bias",r.dataType,r.dims),M=te("output",1,3,2),B=[z,E,O,M];return`
  var<workgroup> workgroup_shared : array<${m}, ${y}>;
  const workgroup_size = ${y}u;
  ${v.declareVariables(...B)}
  ${v.mainStart(y)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${f}(0);
    var squared_sum = ${f}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${f}(${z.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${m}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Vt("workgroup_shared[0][0]",p)} / f32(hight * ${p});
      let squared_sum_final = ${Vt("workgroup_shared[0][1]",p)} / f32(hight * ${p});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${p};${u};${y}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:x,dataType:1}],dispatchGroup:{x:g},programUniforms:I}),getShaderSource:C},{inputs:[t,i,r],outputs:[-1]})[0]},lf=(e,t,i)=>{let r=t[0].dims,a=r,s=2,o=r[0],u=r[1],p=F.sizeFromDimension(r,s),f=Me(p),m=F.size(a)/f,g=Ts(e,t[0],t[1],t[2],o,p,u,i.epsilon),y=[o,u,p/f],w=[o,u],x=["type","none"],T=I=>{let C=L("x",t[0].dataType,y.length,f),v=L("scale_shift",1,w.length,2),z=te("output",t[0].dataType,y.length,f),E=[C,v,z];return`
  ${I.registerUniform("output_size","u32").declareVariables(...E)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${z.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${v.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${C.getByOffset("global_idx")} * ${z.type.value}(scale_shift.x) + ${z.type.value}(scale_shift.y);
      ${z.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${f}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ae(y,w,y)]}),getShaderSource:T},{inputs:[t[0],g]})},df=(e,t,i)=>{let r=t[0].dims,a=r,s=r[0],o=r[r.length-1],u=F.sizeFromDimension(r,1)/o,p=Me(o),f=F.size(a)/p,m=[{type:12,data:u},{type:12,data:Math.floor(o/p)}],g=["type","type"],y=!1,w=[0,r.length-1];for(let C=0;C<r.length-2;C++)y=y||r[C+1]!==1,w.push(C+1);y=y&&r[r.length-1]!==1;let x=y?e.compute(et(e.inputs[0],w),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(C,v)=>r[w[v]])),T=Ts(e,x,t[1],t[2],s,u,o,i.epsilon),I=C=>{let v=Ue(t[0].dataType),z=p===1?"vec2f":`mat${p}x2f`,E=B=>{let U=B===0?"x":"y",q=p===1?"f32":`vec${p}f`;switch(p){case 1:return`${v}(${q}(scale.${U}))`;case 2:return`vec2<${v}>(${q}(scale[0].${U}, scale[1].${U}))`;case 4:return`vec4<${v}>(${q}(scale[0].${U}, scale[1].${U}, scale[2].${U}, scale[3].${U}))`;default:throw new Error(`Not supported compoents ${p}`)}},O=L("input",t[0].dataType,t[0].dims,p),M=te("output",t[0].dataType,a,p);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${z}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${C.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${E(0)}, ${E(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${p}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:I},{inputs:[t[0],T]})},pf=(e,t)=>{t.format==="NHWC"?df(e,e.inputs,t):lf(e,e.inputs,t)}}),cf,ff,hf,yg=H(()=>{oe(),pe(),ce(),cf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},ff=(e,t,i)=>{let r=t.simplified,a=e[0].dims,s=e[1],o=!r&&e[2],u=a,p=F.normalizeAxis(t.axis,a.length),f=F.sizeToDimension(a,p),m=F.sizeFromDimension(a,p),g=F.size(s.dims),y=o?F.size(o.dims):0;if(g!==m||o&&y!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${y}`);let w=[];for(let O=0;O<a.length;++O)O<p?w.push(a[O]):w.push(1);let x=Me(m),T=["type","type"],I=[{type:12,data:f},{type:1,data:m},{type:12,data:Math.floor(m/x)},{type:1,data:t.epsilon}];o&&T.push("type");let C=i>1,v=i>2,z=O=>{let M=Ue(e[0].dataType),B=[L("x",e[0].dataType,e[0].dims,x),L("scale",s.dataType,s.dims,x)];o&&B.push(L("bias",o.dataType,o.dims,x)),B.push(te("output",e[0].dataType,u,x)),C&&B.push(te("mean_data_output",1,w)),v&&B.push(te("inv_std_output",1,w));let U=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(U).declareVariables(...B)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${jn("f32",x)};
    var mean_square_vector = ${jn("f32",x)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Ir(M,x,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Vt("mean_vector",x)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Vt("mean_square_vector",x)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Ir(M,x,"x[j + offset]")};
      let f32scale = ${Ir(M,x,"scale[j]")};
      output[j + offset] = ${B[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${Ir(M,x,"bias[j]")}`:""}
      );
    }

    ${C?"mean_data_output[global_idx] = mean":""};
    ${v?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},E=[{dims:u,dataType:e[0].dataType}];return C&&E.push({dims:w,dataType:1}),v&&E.push({dims:w,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${x};${i};${r}`,inputDependencies:T},getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(f/64)},programUniforms:I}),getShaderSource:z}},hf=(e,t)=>{cf(e.inputs),e.compute(ff(e.inputs,t,e.outputCount))}}),mf,gf,bg=H(()=>{pe(),ss(),ds(),mf=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},gf=e=>{mf(e.inputs);let t=kr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(ns(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=F.size(e.inputs[0].dims.slice(0,-2)),o=F.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&o===1){let u=e.inputs[0].reshape([1,s,r]),p=e.inputs[1].reshape([1,r,i]),f=[1,s,i],m=[u,p];e.compute(na(m,{activation:""},t,f),{inputs:m})}else e.compute(na(e.inputs,{activation:""},t))}}}),_f,yf,bf,vf,wf,vg=H(()=>{oe(),pe(),De(),ce(),_f=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,o=e[1];if(!F.areEqual(o.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(F.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let p=e[3].dims,f=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(F.size(p)!==f)throw new Error("zeroPoints input size error.")}},yf=(e,t)=>{let i=e[0].dims,r=i.length,a=i[r-2],s=t.k,o=t.n,u=i.slice(0,r-2),p=F.size(u),f=e[1].dims[2]/4,m=e[0].dataType,g=Me(t.k),y=Me(f),w=Me(o),x=u.concat([a,o]),T=a>1&&o/w%2===0?2:1,I=F.size(x)/w/T,C=64,v=[],z=[p,a,s/g],E=F.convertShape(e[1].dims).slice();E.splice(-1,1,f/y),v.push(...ae(z)),v.push(...ae(E)),v.push(...ae(e[2].dims)),e.length===4&&v.push(...ae(F.convertShape(e[3].dims)));let O=[p,a,o/w];v.push(...ae(O));let M=B=>{let U=z.length,q=L("a",e[0].dataType,U,g),K=L("b",12,E.length,y),J=L("scales",e[2].dataType,e[2].dims.length),re=[q,K,J],ue=e.length===4?L("zero_points",12,e[3].dims.length):void 0;ue&&re.push(ue);let Z=O.length,de=te("output",e[0].dataType,Z,w),ee=Ue(e[0].dataType),Y=(()=>{switch(g){case 1:return`array<${ee}, 8>`;case 2:return`mat4x2<${ee}>`;case 4:return`mat2x4<${ee}>`;default:throw new Error(`${g}-component is not supported.`)}})(),le=()=>{let N=`
          // reuse a data
            var input_offset = ${q.indicesToOffset(`${q.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Y};
            for (var j: u32 = 0; j < ${8/g}; j++) {
              a_data[j] = ${q.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let G=0;G<w*T;G++)N+=`
            b_value = ${y===1?`b${G}_data`:`b${G}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Y}(${Array.from({length:4},(se,he)=>`${ee}(b_value_lower[${he}]), ${ee}(b_value_upper[${he}])`).join(", ")});
            b_dequantized_values = ${g===1?`${Y}(${Array.from({length:8},(se,he)=>`(b_quantized_values[${he}] - ${ue?`zero_point${G}`:"zero_point"}) * scale${G}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${ue?`zero_point${G}`:"zero_point"}`).join(",")})) * scale${G};`};
            workgroup_shared[local_id.x * ${T} + ${Math.floor(G/w)}]${w>1?`[${G%w}]`:""} += ${Array.from({length:8/g},(se,he)=>`${g===1?`a_data[${he}] * b_dequantized_values[${he}]`:`dot(a_data[${he}], b_dequantized_values[${he}])`}`).join(" + ")};
          `;return N},Q=()=>{let N=`
            var col_index = col * ${w};
            ${ue?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ee}(8);`}
            `;for(let G=0;G<w*T;G++)N+=`
            let scale${G} = ${J.getByOffset("col_index * nBlocksPerCol + block")};
            ${ue?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ue.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${G} = ${ee}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return N},ye=()=>{let N=`col_index = col * ${w};`;for(let G=0;G<w*T;G++)N+=`
            let b${G}_data = ${K.getByIndices(`${K.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return N+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,N};return`
        var<workgroup> workgroup_shared: array<${de.type.value}, ${T*C}>;
        ${B.declareVariables(...re,de)}
        ${B.mainStart([C,1,1])}
          let output_indices = ${de.offsetToIndices(`(global_idx / ${C}) * ${T}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${C}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/g};
            ${Q()}
            for (var word: u32 = 0; word < ${f}; word += ${y}) {
              ${ye()}
              for (var i: u32 = 0; i < ${y}; i++) {
                ${le()}
                word_offset += ${8/g};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${T}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${C}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${T};
            }
            ${de.setByIndices(`${de.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${g};${y};${w};${T};${C}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:x,dataType:m}],dispatchGroup:{x:I},programUniforms:v}),getShaderSource:M}},bf=(e,t)=>{let i=e[0].dims,r=i.length,a=i[r-2],s=t.k,o=t.n,u=i.slice(0,r-2),p=F.size(u),f=e[1].dims[2]/4,m=e[0].dataType,g=Me(t.k),y=Me(f),w=u.concat([a,o]),x=128,T=o%8===0?8:o%4===0?4:1,I=x/T,C=I*y*8,v=C/g,z=C/t.blockSize,E=F.size(w)/T,O=[],M=[p,a,s/g],B=F.convertShape(e[1].dims).slice();B.splice(-1,1,f/y),O.push(...ae(M)),O.push(...ae(B)),O.push(...ae(e[2].dims)),e.length===4&&O.push(...ae(F.convertShape(e[3].dims)));let U=[p,a,o];O.push(...ae(U));let q=K=>{let J=M.length,re=L("a",e[0].dataType,J,g),ue=L("b",12,B.length,y),Z=L("scales",e[2].dataType,e[2].dims.length),de=[re,ue,Z],ee=e.length===4?L("zero_points",12,e[3].dims.length):void 0;ee&&de.push(ee);let Y=U.length,le=te("output",e[0].dataType,Y),Q=Ue(e[0].dataType),ye=()=>{switch(g){case 1:return`
          let a_data0 = vec4<${Q}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Q}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Q}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Q}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${g}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${re.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${le.type.value}, ${I}>, ${T}>;
        ${K.declareVariables(...de,le)}
        ${K.mainStart([I,T,1])}
          let output_indices = ${le.offsetToIndices(`workgroup_index * ${T}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${z} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += ${x})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${re.getByIndices(`${re.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${re.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${z} + local_id.x;
            ${ee?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Q}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Q}(8);`}
            let scale = ${Z.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ue.getByIndices(`${ue.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/g};
            for (var i: u32 = 0; i < ${y}; i++) {
              ${ye()}
              let b_value = ${y===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Q}>(${Array.from({length:4},(N,G)=>`${Q}(b_value_lower[${G}]), ${Q}(b_value_upper[${G}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Q}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(N,G)=>`${`dot(a_data${G}, b_dequantized_values[${G}])`}`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${T}) {
            var output_value: ${le.type.value} = ${le.type.value}(0);
            for (var b = 0u; b < ${I}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${le.setByIndices(`${le.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${g};${y};${I};${T}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:m}],dispatchGroup:{x:E},programUniforms:O}),getShaderSource:q}},vf=(e,t)=>{_f(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(bf(e.inputs,t)):e.compute(yf(e.inputs,t))},wf=e=>we(e)}),$f,xf,Tf,Sf,Cf,kf,Ef,If,Af,wg=H(()=>{oe(),pe(),ce(),$f=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},xf=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
            k = i32(${e.indicesGet("indices",a)}) - ${ie("uniforms.pads",a,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ie("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${ie("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Tf=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ie("uniforms.pads",a,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ie("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ie("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ie("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Sf=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ie("uniforms.pads",a,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ie("uniforms.x_shape",a,t)})) {
                  k = i32(${ie("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${ie("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Cf=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${ie("uniforms.pads",a,i)};
                if (k < 0)  {
                  k += i32(${ie("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${ie("uniforms.x_shape",a,t)})) {
                  k -= i32(${ie("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${ie("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},kf=(e,t,i)=>{switch(i.mode){case 0:return xf(e,t,i.pads.length);case 1:return Tf(e,t,i.pads.length);case 2:return Sf(e,t,i.pads.length);case 3:return Cf(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Ef=(e,t)=>{let i=F.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,a=F.size(i),s=[{type:12,data:a},{type:6,data:t.pads}],o=e.length>=3&&e[2].data;t.mode===0&&s.push({type:o?e[2].dataType:1,data:t.value}),s.push(...ae(e[0].dims,i));let u=["rank"],p=f=>{let m=te("output",e[0].dataType,i.length),g=L("x",e[0].dataType,r.length),y=g.type.value,w=kf(m,r.length,t),x=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&x.push({name:"constant_value",type:o?y:"f32"}),`
            ${f.registerUniforms(x).declareVariables(g,m)}
            ${f.mainStart()}
            ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${y}(0);
            ${w}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${o}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(i)/64)},programUniforms:s}),getShaderSource:p}},If=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let p=0;p<u.length;p++)s[Number(u[p])]=Number(i[p]),s[Number(u[p])+a]=Number(i[p+u.length])}else i.forEach((u,p)=>s[Number(p)]=Number(u));let o=[];return s.forEach(u=>o.push(u)),{mode:t.mode,value:r,pads:o}}else return t},Af=(e,t)=>{$f(e.inputs);let i=If(e.inputs,t);e.compute(Ef(e.inputs,i),{inputs:[0]})}}),si,Ss,Cs,ks,Es,zf,Of,Is,As,Rf,Mf,zs,Pf,Bf,Os,Df,Ff,Nf,Uf,$g=H(()=>{st(),oe(),pe(),ce(),si=e=>{if(Ce.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ss=(e,t,i)=>{let r=t.format==="NHWC",a=e.dims.slice();r&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),o=t.kernelShape.slice(),u=t.strides.slice(),p=s?t.dilations.slice():[],f=t.pads.slice();Qi.adjustPoolAttributes(i,a,o,u,p,f);let m=Qi.computePoolOutputShape(i,a,u,p,o,f,t.autoPad),g=Object.assign({},t);s?Object.assign(g,{kernelShape:o,strides:u,pads:f,dilations:p,cacheKey:t.cacheKey}):Object.assign(g,{kernelShape:o,strides:u,pads:f,cacheKey:t.cacheKey});let y=m.slice();return y.push(y.splice(1,1)[0]),[g,r?y:m]},Cs=(e,t)=>{let i=t.format==="NHWC",r=F.size(e),a=F.size(t.kernelShape),s=[{type:12,data:r},{type:12,data:a}],o=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],p=t.strides[t.strides.length-1],f=t.pads[t.pads.length/2-1],m=t.pads[t.pads.length-1],g=!!(f+m);s.push({type:12,data:u},{type:12,data:p},{type:12,data:f},{type:12,data:m}),o.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let y=!1;if(t.kernelShape.length===2){let w=t.kernelShape[t.kernelShape.length-2],x=t.strides[t.strides.length-2],T=t.pads[t.pads.length/2-2],I=t.pads[t.pads.length-2];y=!!(T+I),s.push({type:12,data:w},{type:12,data:x},{type:12,data:T},{type:12,data:I}),o.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,o,!0,g,y]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=F.computeStrides(t.kernelShape);s.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let p=t.pads.reduce((f,m)=>f+m);return[s,o,!!p,!1,!1]}},ks=(e,t,i,r,a,s,o,u,p,f,m,g)=>{let y=a.format==="NHWC",w=t.type.value,x=te("output",t.type.tensor,r);if(a.kernelShape.length<=2){let T="",I="",C="",v=i-(y?2:1);if(m?T=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${v}] < 0 || xIndices[${v}]
                      >= uniforms.x_shape[${v}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:T=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let z=i-(y?3:2);g?I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${z}] = indices[${z}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${z}] < 0 || xIndices[${z}] >= uniforms.x_shape[${z}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${z}] = indices[${z}] * uniforms.sh - uniforms.phStart + j;
                `,C=`
              }
            `}return`
            ${e.registerUniforms(p).declareVariables(t,x)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${x.offsetToIndices("global_idx")};
              var xIndices = ${x.offsetToIndices("global_idx")};

              var value = ${w}(${u});
              var pad = 0;
              ${I}
              ${T}
              ${C}
              ${o}

              output[global_idx] = value;
            }`}else{if(y)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let T=a.kernelShape.length,I=a.pads.length,C="";return f?C=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:C=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(p).declareVariables(t,x)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${x.offsetToIndices("global_idx")};
              var xIndices = ${x.offsetToIndices("global_idx")};

              var offsets: array<u32, ${T}>;

              var value = ${w}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${T-1}u; j++) {
                  offsets[j] = offset / ${ie("uniforms.kernelStrides","j",T)};
                  offset -= offsets[j] * ${ie("uniforms.kernelStrides","j",T)};
                }
                offsets[${T-1}] = offset;

                isPad = false;
                for (var j = ${i-T}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${ie("uniforms.strides",`j - ${i-T}u`,T)}
                    + offsets[j - ${i-T}u] - ${ie("uniforms.pads","j - 2u",I)};
                  ${C}
              }
              ${o}

              output[global_idx] = value;
            }`}},Es=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,zf=e=>`${Es(e)};${e.countIncludePad}`,Of=e=>`${Es(e)};${e.storageOrder};${e.dilations}`,Is=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),As=(e,t,i,r)=>{let[a,s]=Ss(t,r,i),o=L("x",t.dataType,t.dims.length),u=o.type.value,p="value += x_val;",f="";a.countIncludePad?f+=`value /= ${u}(uniforms.kernelSize);`:f+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[m,g,y,w,x]=Cs(s,a);m.push(...ae(t.dims,s));let T=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${y};${w};${x}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(s)/64)},programUniforms:m}),getShaderSource:I=>ks(I,o,t.dims.length,s.length,a,p,f,0,g,y,w,x)}},Rf=e=>{let t=e.count_include_pad!==0,i=Is(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:zf(r)}},Mf=(e,t)=>{si(e.inputs),e.compute(As("AveragePool",e.inputs[0],!1,t))},zs={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Pf=e=>{let t=e.format;return{format:t,...zs,cacheKey:t}},Bf=(e,t)=>{si(e.inputs),e.compute(As("GlobalAveragePool",e.inputs[0],!0,t))},Os=(e,t,i,r)=>{let[a,s]=Ss(t,r,i),o=`
      value = max(x_val, value);
    `,u="",p=L("x",t.dataType,t.dims.length),f=["rank"],[m,g,y,w,x]=Cs(s,a);return m.push(...ae(t.dims,s)),{name:e,shaderCache:{hint:`${r.cacheKey};${y};${w};${x}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(s)/64)},programUniforms:m}),getShaderSource:T=>ks(T,p,t.dims.length,s.length,a,o,u,t.dataType===10?-65504:-1e5,g,y,w,x)}},Df=(e,t)=>{si(e.inputs),e.compute(Os("MaxPool",e.inputs[0],!1,t))},Ff=e=>{let t=e.storage_order,i=e.dilations,r=Is(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:i,...r,cacheKey:""};return{...a,cacheKey:Of(a)}},Nf=e=>{let t=e.format;return{format:t,...zs,cacheKey:t}},Uf=(e,t)=>{si(e.inputs),e.compute(Os("GlobalMaxPool",e.inputs[0],!0,t))}}),Wf,Lf,qf,Vf,xg=H(()=>{oe(),pe(),De(),ce(),Wf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Lf=(e,t)=>{let i=F.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,a=r===3,s=e[0].dims,o=e[1].dataType,u=F.size(s),p=r===3||r===2,f=p?[Math.ceil(F.size(e[0].dims)/4)]:e[0].dims,m=e[1].dims,g=e.length>2?e[2]:void 0,y=g?p?[Math.ceil(F.size(g.dims)/4)]:g.dims:void 0,w=m.length===0||m.length===1&&m[0]===1,x=w===!1&&m.length===1,T=Me(u),I=w&&(!p||T===4),C=I?T:1,v=I&&!p?T:1,z=L("input",p?12:r,f.length,v),E=L("scale",o,m.length),O=g?L("zero_point",p?12:r,y.length):void 0,M=te("output",o,s.length,C),B=[z,E];O&&B.push(O);let U=[f,m];g&&U.push(y);let q=[{type:12,data:u/C},{type:12,data:i},{type:12,data:t.blockSize},...ae(...U,s)],K=J=>{let re=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${J.registerUniforms(re).declareVariables(...B,M)}
      ${J.mainStart()}
          ${J.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${p?`
            let input = ${z.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${C===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${z.getByOffset("global_idx")};`};

          // Set scale input
          ${w?`let scale_value= ${E.getByOffset("0")}`:x?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${E.getByOffset("scale_index")};`:`
            var scale_indices: ${E.type.indices} = output_indices;
            let index = ${E.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${E.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${E.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${O?w?p?`
                let zero_point_input = ${O.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${O.getByOffset("0")}`:x?p?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:p?`
                let zero_point_offset = ${E.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${p?a?"i32":"u32":z.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:K,getRunData:()=>({outputs:[{dims:s,dataType:o}],dispatchGroup:{x:Math.ceil(u/C/64),y:1,z:1},programUniforms:q})}},qf=(e,t)=>{Wf(e.inputs,t),e.compute(Lf(e.inputs,t))},Vf=e=>we({axis:e.axis,blockSize:e.blockSize})}),jf,Hf,Gf,Tg=H(()=>{st(),oe(),ce(),jf=(e,t,i)=>{let r=e===t,a=e<t&&i<0,s=e>t&&i>0;if(r||a||s)throw new Error("Range these inputs' contents are invalid.")},Hf=(e,t,i,r)=>{let a=Math.abs(Math.ceil((t-e)/i)),s=[a],o=a,u=[{type:12,data:o},{type:r,data:e},{type:r,data:i},...ae(s)],p=f=>{let m=te("output",r,s.length),g=m.type.value,y=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${f.registerUniforms(y).declareVariables(m)}
        ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:p,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u})}},Gf=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ce.webgpu.validateInputContent&&jf(t,i,r),e.compute(Hf(t,i,r,e.inputs[0].dataType),{inputs:[]})}}),Kf,Yf,Zf,Xf,Sg=H(()=>{oe(),pe(),De(),ce(),Kf=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${i}));`:`
              ${a}bitcast<${r}>(oldValue) + (${i})${s}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${i}));`:`
                ${a}max(bitcast<f32>(oldValue), (${i}))${s}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${a}min(bitcast<${r}>(oldValue), (${i}))${s}`;case"mul":return`${a}(bitcast<${r}>(oldValue) * (${i}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Yf=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i,s=1,o=Math.ceil(F.sizeToDimension(r,r.length-1)/s),u=r[r.length-1],p=F.sizeFromDimension(i,u),f=[{type:12,data:o},{type:12,data:u},{type:12,data:p},...ae(e[1].dims,e[2].dims,a)],m=g=>{let y=L("indices",e[1].dataType,e[1].dims.length),w=L("updates",e[2].dataType,e[2].dims.length,s),x=t.reduction!=="none"&&t.reduction!==""?rl("output",e[0].dataType,a.length):te("output",e[0].dataType,a.length,s);return`
      ${g.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,w,x)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Kf(t.reduction,"output[data_offset + i]","value",x.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:m}},Zf=e=>we({reduction:e.reduction}),Xf=(e,t)=>{e.compute(Yf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Qf,Jf,eh,Rs,th,rh,ih,ah,nh,sh,oh,uh,Ms,lh,dh,ph,ch,fh,hh,mh,Cg=H(()=>{oe(),pe(),De(),ce(),Qf=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Jf=(e,t,i)=>{t.every(a=>a>=0&&a<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((a,s)=>r[a]=e[s]),r},eh=(e,t,i,r,a,s)=>{let[o,u,p]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],f=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(m=>s.push(m));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(m=>r.push(m)),r.length!==0&&r.length!==f&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Qf(r,t),t.axes.length>0&&Jf(r,t.axes,f).forEach((m,g)=>r[g]=m)}if(p>0&&e.length>p&&e[p].dims.length===1&&e[p].dims[0]>0&&(e[p].getBigInt64Array().forEach(m=>a.push(Number(m))),a.length!==0&&a.length!==f&&i>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof a<"u"&&r.length>0&&a.length>f)throw new Error("Resize requires only of scales or sizes to be specified")},Rs=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,th=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Rs("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Rs("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",rh=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ih=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),a=e.length===0?r:e.slice();return t.length>0?(t.forEach((s,o)=>{r[s]=a[o],r[o+i]=a[t.length+o]}),r):a},ah=(e,t,i,r)=>{let a=[];if(i.length>0)if(r.length>0){if(e.forEach(s=>a.push(s)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((s,o)=>a[s]=i[o])}else i.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,o)=>Math.round(s*t[o]))}return a},nh=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return i.axes.length>0?(i.axes.forEach(s=>t[s]=r),i.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(r,0,t.length),a.forEach((s,o)=>a[o]=Math.round(s*t[o]))),a},sh=(e,t,i,r,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ie("uniforms.scales","i",r)};
        var roi_low = ${ie("uniforms.roi","i",a)};
        var roi_hi = ${ie("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ie("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ie("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,oh=(e,t,i,r,a,s,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ie("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ie("uniforms.roi","i",s)};
          var roi_hi = ${ie("uniforms.roi",`i + ${i.length}`,s)};
          var input_shape_i = ${ie("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${ie("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,uh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ie("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ms=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",lh=(e,t,i,r,a)=>{let[s,o,u,p]=i.length===2?[-1,0,1,-1]:[0,2,3,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(row, ${i[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${i[u]} - 1))`)};
      ${Ms(e,p,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${f} = originalIndices[${o}];
      var col:${f} = originalIndices[${u}];
      ${r?`if (row < 0 || row > (${i[o]} - 1) || col < 0 || col > (${i[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${i[o]} - 1));
      col = max(0, min(col, ${i[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${f} = getInputValue(batch, channel, row1, col1);
      var x12: ${f} = getInputValue(batch, channel, row1, col2);
      var x21: ${f} = getInputValue(batch, channel, row2, col1);
      var x22: ${f} = getInputValue(batch, channel, row2, col2);
      var dx1: ${f} = abs(row - ${f}(row1));
      var dx2: ${f} = abs(${f}(row2) - row);
      var dy1: ${f} = abs(col - ${f}(col1));
      var dy2: ${f} = abs(${f}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},dh=(e,t,i,r,a,s,o,u,p,f)=>{let m=i.length===2,[g,y]=m?[0,1]:[2,3],w=e.type.value,x=T=>{let I=T===g?"row":"col";return`
      fn ${I}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${w} {
        var output_index = ${t.indicesGet("output_indices",T)};
        var originalIdx: ${w} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[T]},
        ${r[T]}, ${i[T]}, ${s[T]}, ${s[T]} + ${i.length});
        var fractOriginalIdx: ${w} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${i[T]} - 1))) {
          return ${p};
        }
        var data: array<${w}, 4> = array<${w}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${I}: ${w} = originalIdx + ${w}(i);
          if (${I} < 0 || ${I} >= ${i[T]}) {
            ${f?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${p};`:`${I} = max(0, min(${I}, ${i[T]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",T,`u32(${I})`)};
          data[i + 1] = ${T===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${x(g)};
    ${x(y)};
  fn getCubicInterpolationCoefs(s: ${w}) -> array<${w}, 4> {
    var absS = abs(s);
    var coeffs: array<${w}, 4> = array<${w}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${w} = 1.0 - absS;
    var twoMinusAbsS: ${w} = 2.0 - absS;
    var onePlusAbsS: ${w} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${w}, 4>, coefs: array<${w}, 4>) -> ${w} {
    var coefsSum: ${w} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${w} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},ph=(e,t,i,r,a)=>{let[s,o,u,p,f]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",o,`max(0, min(depth, ${i[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${i[u]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(width, ${i[p]} - 1))`)};
      ${Ms(e,f,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${m} = originalIndices[${o}];
      var height:${m} = originalIndices[${u}];
      var width:${m} = originalIndices[${p}];
      ${r?`if (depth < 0 || depth > (${i[o]} - 1) || height < 0 || height > (${i[u]} - 1) || width < 0 || (width > ${i[p]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${i[o]} - 1));
      height = max(0, min(height, ${i[u]} - 1));
      width = max(0, min(width, ${i[p]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${f}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${m} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${m} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${m} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${m} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${m} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${m} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${m} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${m} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${m} = abs(depth - ${m}(depth1));
      var dx2: ${m} = abs(${m}(depth2) - depth);
      var dy1: ${m} = abs(height - ${m}(height1));
      var dy2: ${m} = abs(${m}(height2) - height);
      var dz1: ${m} = abs(width - ${m}(width1));
      var dz2: ${m} = abs(${m}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},ch=(e,t,i,r,a,s)=>{let o=e.dims,u=ih(s,t.axes,o.length),p=ah(o,r,a,t.axes),f=r.slice();r.length===0&&(f=o.map((v,z)=>v===0?1:p[z]/v),t.keepAspectRatioPolicy!=="stretch"&&(p=nh(o,f,t)));let m=te("output",e.dataType,p.length),g=L("input",e.dataType,o.length),y=F.size(p),w=o.length===p.length&&o.every((v,z)=>v===p[z]),x=t.coordinateTransformMode==="tf_crop_and_resize",T=t.extrapolationValue,I=g.type.value,C=v=>`
      ${w?"":`
      ${th(t.coordinateTransformMode,I)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${uh(g,o)};
              ${rh(t.nearestMode,i,I)};
              ${oh(g,m,o,p,f.length,u.length,x)};
              `;case"linear":return`
              ${sh(m,o,p,f.length,u.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${lh(g,m,o,x,T)}`;if(o.length===3||o.length===5)return`${ph(g,m,o,x,T)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(o.length===2||o.length===4)return`${dh(g,m,o,p,f,u,t.cubicCoeffA,x,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${v.registerUniform("output_size","u32").registerUniform("scales","f32",f.length).registerUniform("roi","f32",u.length).declareVariables(g,m)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${w?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${o.length===2||o.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${f.length>0?t.mode==="cubic"?f:f.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${w}|${t.mode==="nearest"?o.length:o}`,inputDependencies:["rank"]},getShaderSource:C,getRunData:()=>({outputs:[{dims:p,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},{type:1,data:f},{type:1,data:u},...ae(o,p)]})}},fh=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},hh=(e,t)=>{let i=[],r=[],a=[],s=fh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");eh(e.inputs,t,s,i,r,a),e.compute(ch(e.inputs[0],t,s,i,r,a),{inputs:[0]})},mh=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,o=e.extrapolationValue,u=e.keepAspectRatioPolicy,p=e.mode,f=e.nearestMode===""?"simple":e.nearestMode;return we({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:a,excludeOutside:s,extrapolationValue:o,keepAspectRatioPolicy:u,mode:p,nearestMode:f})}}),gh,_h,yh,kg=H(()=>{oe(),pe(),ce(),gh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let o=e[3];if(o.dims.length!==1)throw new Error("Beta must be 1D");if(o.dims[o.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let o=e[4];if(o.dims.length!==1)throw new Error("Bias must be 1D");if(o.dims[o.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},_h=(e,t,i,r)=>{let a=t.simplified,s=e[0].dims,o=F.size(s),u=s,p=o,f=s.slice(-1)[0],m=r?s.slice(0,-1).concat(1):[],g=!a&&e.length>3,y=e.length>4,w=r&&i>1,x=r&&i>2,T=i>3,I=64,C=Me(f),v=[{type:12,data:p},{type:12,data:C},{type:12,data:f},{type:1,data:t.epsilon}],z=O=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],B=[L("x",e[0].dataType,e[0].dims,C),L("skip",e[1].dataType,e[1].dims,C),L("gamma",e[2].dataType,e[2].dims,C)];g&&B.push(L("beta",e[3].dataType,e[3].dims,C)),y&&B.push(L("bias",e[4].dataType,e[4].dims,C)),B.push(te("output",e[0].dataType,u,C)),w&&B.push(te("mean_output",1,m)),x&&B.push(te("inv_std_output",1,m)),T&&B.push(te("input_skip_bias_sum",e[0].dataType,u,C));let U=Ue(e[0].dataType),q=Ue(1,C);return`

      ${O.registerUniforms(M).declareVariables(...B)}
      var<workgroup> sum_shared : array<${q}, ${I}>;
      var<workgroup> sum_squared_shared : array<${q}, ${I}>;

      ${O.mainStart([I,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${I};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${I};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${I-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${y?"bias[offset1d + i]":U+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${T?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Ir(U,C,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${I};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Vt("sum",C)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Vt("square_sum",C)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${w?"mean_output[global_idx] = mean;":""}
        ${x?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${U}(mean)`}) *
            ${U}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},E=[{dims:u,dataType:e[0].dataType}];return i>1&&E.push({dims:m,dataType:1}),i>2&&E.push({dims:m,dataType:1}),i>3&&E.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${C};${w};${x};${T}`,inputDependencies:e.map((O,M)=>"type")},getShaderSource:z,getRunData:()=>({outputs:E,dispatchGroup:{x:Math.ceil(p/f)},programUniforms:v})}},yh=(e,t)=>{gh(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(_h(e.inputs,t,e.outputCount,!1),{outputs:i})}}),bh,oi,vh,Ps,wh,$h,xh,Th,Eg=H(()=>{oe(),pe(),De(),ce(),bh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},oi=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},vh=(e,t)=>{if(e.length>1){let i=oi(e,1),r=oi(e,2),a=oi(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),we({starts:i,ends:r,axes:a})}else return t},Ps=(e,t,i,r,a)=>{let s=e;return e<0&&(s+=i[r[t]]),a[t]<0?Math.max(0,Math.min(s,i[r[t]]-1)):Math.max(0,Math.min(s,i[r[t]]))},wh=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${ie("uniforms.input_shape","i",i.length)};
            let steps_i = ${ie("uniforms.steps","i",i.length)};
            let signs_i = ${ie("uniforms.signs","i",i.length)};
            let starts_i = ${ie("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,$h=(e,t)=>{let i=e[0].dims,r=F.size(i),a=t.axes.length>0?F.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],s=oi(e,4);s.forEach(C=>C!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let o=t.starts.map((C,v)=>Ps(C,v,i,a,s)),u=t.ends.map((C,v)=>Ps(C,v,i,a,s));if(a.length!==o.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==i.length)for(let C=0;C<i.length;++C)a.includes(C)||(o.splice(C,0,0),u.splice(C,0,i[C]),s.splice(C,0,1));let p=s.map(C=>Math.sign(C));s.forEach((C,v,z)=>{if(C<0){let E=(u[v]-o[v])/C,O=o[v],M=O+E*s[v];o[v]=M,u[v]=O,z[v]=-C}});let f=i.slice(0);a.forEach((C,v)=>{f[C]=Math.ceil((u[C]-o[C])/s[C])});let m={dims:f,dataType:e[0].dataType},g=te("output",e[0].dataType,f.length),y=L("input",e[0].dataType,e[0].dims.length),w=F.size(f),x=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:p.length},{name:"steps",type:"u32",length:s.length}],T=[{type:12,data:w},{type:12,data:o},{type:6,data:p},{type:12,data:s},...ae(e[0].dims,f)],I=C=>`
      ${C.registerUniforms(x).declareVariables(y,g)}
        ${wh(y,g,i)}
        ${C.mainStart()}
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",y.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${p.length}_${o.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:I,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:T})}},xh=(e,t)=>{bh(e.inputs,t);let i=vh(e.inputs,t);e.compute($h(e.inputs,i),{inputs:[0]})},Th=e=>{let t=e.starts,i=e.ends,r=e.axes;return we({starts:t,ends:i,axes:r})}}),Sh,Ch,kh,Eh,Ig=H(()=>{oe(),pe(),De(),jt(),ce(),Sh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ch=(e,t)=>{let i=e.inputs[0],r=i.dims,a=F.size(r),s=r.length,o=F.normalizeAxis(t.axis,s),u=o<r.length-1,p,f=[];u?(f=Array.from({length:s},(B,U)=>U),f[o]=s-1,f[s-1]=o,p=e.compute(et(i,f),{inputs:[i],outputs:[-1]})[0]):p=i;let m=p.dims,g=m[s-1],y=a/g,w=Me(g),x=g/w,T=64;y===1&&(T=256);let I=(B,U)=>U===4?`max(max(${B}.x, ${B}.y), max(${B}.z, ${B}.w))`:U===2?`max(${B}.x, ${B}.y)`:U===3?`max(max(${B}.x, ${B}.y), ${B}.z)`:B,C=L("x",p.dataType,p.dims,w),v=te("result",p.dataType,p.dims,w),z=C.type.value,E=Ue(p.dataType)==="f32"?`var threadMax = ${z}(-3.402823e+38f);`:`var threadMax = ${z}(-65504.0h);`,O=B=>`
      var<workgroup> rowMaxShared : ${z};
      var<workgroup> rowSumShared : ${z};
      var<workgroup> threadShared : array<${z}, ${T}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${z} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${z}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${B.registerUniform("packedCols","i32").declareVariables(C,v)}
      ${B.mainStart(T)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${T};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${E}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${z}(${I("threadShared[0]",w)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${z}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${z}(${Vt("threadShared[0]",w)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${z}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${w};${T}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:p.dataType}],dispatchGroup:{x:y},programUniforms:[{type:6,data:x}]}),getShaderSource:O},{inputs:[p],outputs:[u?-1:0]})[0];u&&e.compute(et(M,f),{inputs:[M]})},kh=(e,t)=>{Sh(e.inputs),Ch(e,t)},Eh=e=>we({axis:e.axis})}),Bs,Ih,Ah,zh,Oh,Ag=H(()=>{oe(),pe(),ce(),Bs=e=>Array.from(e.getBigInt64Array(),Number),Ih=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Bs(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Ah=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},zh=(e,t)=>{let i=e[0].dims,r=t??Bs(e[1]),a=Ah(i,r),s=F.size(a),o=e[0].dataType,u=L("input",o,i.length),p=te("output",o,a.length),f=m=>`
      const inputShape = ${u.indices(...i)};
      ${m.registerUniform("output_size","u32").declareVariables(u,p)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${p.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${p.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${p.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ae(e[0].dims,a)]}),getShaderSource:f}},Oh=e=>{Ih(e.inputs),e.compute(zh(e.inputs),{inputs:[0]})}}),Rh,Mh,Ph,zg=H(()=>{oe(),pe(),ce(),Rh=(e,t,i,r,a)=>{let s=te("output_data",a,i.length,4),o=L("a_data",t[1].dataType,t[1].dims.length,4),u=L("b_data",t[2].dataType,t[2].dims.length,4),p=L("c_data",t[0].dataType,t[0].dims.length,4),f,m=(g,y,w)=>`select(${y}, ${g}, ${w})`;if(!r)f=s.setByOffset("global_idx",m(o.getByOffset("global_idx"),u.getByOffset("global_idx"),p.getByOffset("global_idx")));else{let g=(y,w,x="")=>{let T=`a_data[index_a${w}][component_a${w}]`,I=`b_data[index_b${w}][component_b${w}]`,C=`bool(c_data[index_c${w}] & (0xffu << (component_c${w} * 8)))`;return`
            let output_indices${w} = ${s.offsetToIndices(`global_idx * 4u + ${w}u`)};
            let offset_a${w} = ${o.broadcastedIndicesToOffset(`output_indices${w}`,s)};
            let offset_b${w} = ${u.broadcastedIndicesToOffset(`output_indices${w}`,s)};
            let offset_c${w} = ${p.broadcastedIndicesToOffset(`output_indices${w}`,s)};
            let index_a${w} = offset_a${w} / 4u;
            let index_b${w} = offset_b${w} / 4u;
            let index_c${w} = offset_c${w} / 4u;
            let component_a${w} = offset_a${w} % 4u;
            let component_b${w} = offset_b${w} % 4u;
            let component_c${w} = offset_c${w} % 4u;
            ${y}[${w}] = ${x}(${m(T,I,C)});
          `};a===9?f=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:f=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(p,o,u,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${f}
      }`},Mh=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,a=e[1].dataType,s=!(F.areEqual(t,i)&&F.areEqual(i,r)),o=t,u=F.size(t);if(s){let f=kr.calcShape(kr.calcShape(t,i,!1),r,!1);if(!f)throw new Error("Can't perform where op on the given tensors");o=f,u=F.size(o)}let p=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:f=>Rh(f,e,o,s,a),getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:p},...ae(r,t,i,o)]})}},Ph=e=>{e.compute(Mh(e.inputs))}}),Bh,Og=H(()=>{Hm(),Qn(),Gm(),Km(),Ym(),Zm(),Xm(),rg(),ag(),ng(),sg(),og(),ug(),lg(),dg(),pg(),cg(),fg(),hg(),mg(),gg(),_g(),yg(),bg(),vg(),Gc(),wg(),$g(),xg(),Tg(),Sg(),Yn(),Cg(),af(),kg(),Eg(),Ig(),ef(),Ag(),jt(),rs(),zg(),Bh=new Map([["Abs",[md]],["Acos",[gd]],["Acosh",[_d]],["Add",[ap]],["ArgMax",[ed,Xn]],["ArgMin",[Jl,Xn]],["Asin",[yd]],["Asinh",[bd]],["Atan",[vd]],["Atanh",[wd]],["Attention",[sd]],["AveragePool",[Mf,Rf]],["BatchNormalization",[dd]],["BiasAdd",[fd]],["BiasSplitGelu",[tp]],["Cast",[xd,$d]],["Ceil",[Cd]],["Clip",[Sd]],["Concat",[yp,bp]],["Conv",[ms,fs]],["ConvTranspose",[Hp,qp]],["Cos",[kd]],["Cosh",[Ed]],["CumSum",[Kp,Yp]],["DepthToSpace",[Jp,ec]],["DequantizeLinear",[qf,Vf]],["Div",[np]],["Einsum",[sc,oc]],["Elu",[Id,ti]],["Equal",[sp]],["Erf",[Ad]],["Exp",[zd]],["Expand",[pc]],["FastGelu",[fc]],["Floor",[Od]],["FusedConv",[ms,fs]],["Gather",[_c,gc]],["GatherElements",[Ec,kc]],["GatherBlockQuantized",[xc,Tc]],["GatherND",[bc,vc]],["Gelu",[Rd]],["Gemm",[Oc,zc]],["GlobalAveragePool",[Bf,Pf]],["GlobalMaxPool",[Uf,Nf]],["Greater",[dp]],["GreaterOrEqual",[cp]],["GridSample",[Wc,Lc]],["GroupQueryAttention",[uf]],["HardSigmoid",[Wd,Ud]],["InstanceNormalization",[pf]],["LayerNormalization",[hf]],["LeakyRelu",[Md,ti]],["Less",[pp]],["LessOrEqual",[fp]],["Log",[Yd]],["MatMul",[gf]],["MatMulNBits",[vf,wf]],["MaxPool",[Df,Ff]],["Mul",[op]],["MultiHeadAttention",[Hc,Vc]],["Neg",[Bd]],["Not",[Pd]],["Pad",[Af]],["Pow",[up]],["QuickGelu",[Qd,ti]],["Range",[Gf]],["Reciprocal",[Dd]],["ReduceMin",[Kl]],["ReduceMean",[ql]],["ReduceMax",[Gl]],["ReduceSum",[Zl]],["ReduceProd",[Yl]],["ReduceL1",[Vl]],["ReduceL2",[jl]],["ReduceLogSum",[Ql]],["ReduceLogSumExp",[Hl]],["ReduceSumSquare",[Xl]],["Relu",[Fd]],["Resize",[hh,mh]],["RotaryEmbedding",[rf]],["ScatterND",[Xf,Zf]],["Sigmoid",[Nd]],["Sin",[Ld]],["Sinh",[qd]],["Slice",[xh,Th]],["SkipLayerNormalization",[yh]],["Split",[Qc,Jc]],["Sqrt",[Vd]],["Softmax",[kh,Eh]],["Sub",[lp]],["Tan",[jd]],["Tanh",[Hd]],["ThresholdedRelu",[Kd,ti]],["Tile",[Oh]],["Transpose",[dl,pl]],["Where",[Ph]]])}),Dh,Rg=H(()=>{st(),Rt(),ce(),Dh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,i,r,a){ct(e.programInfo.name);let s=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let f of t)u.push({binding:u.length,resource:{buffer:f.buffer}});for(let f of i)u.push({binding:u.length,resource:{buffer:f.buffer}});a&&u.push({binding:u.length,resource:a});let p=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let f={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:p,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(f)}o.setPipeline(e.computePipeline),o.setBindGroup(0,p),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),nt(e.programInfo.name)}dispose(){}build(e,t){ct(e.name);let i=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(f=>{i.features.has(f.feature)&&r.push(`enable ${f.extension};`)});let a=al(t,this.backend.device.limits),s=e.getShaderSource(a),o=`${r.join(`
`)}
${a.additionalImplementations}
${s}`,u=i.createShaderModule({code:o,label:e.name});me("verbose",()=>`[WebGPU] ${e.name} shader code: ${o}`);let p=i.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return nt(e.name),{programInfo:e,computePipeline:p,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&i<=a&&r<=a)return[t,i,r];let s=t*i*r,o=Math.ceil(Math.sqrt(s));if(o>a){if(o=Math.ceil(Math.cbrt(s)),o>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}else return[o,o,1]}}}),Fh={};Cr(Fh,{WebGpuBackend:()=>Lh});var Nh,Uh,Wh,Lh,Mg=H(()=>{st(),oe(),Rt(),Vu(),Vm(),Og(),Rg(),Nh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let a=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${a}`);break}case"rank":{let s=e[r].dims.length;i.push(`${a};${s}`);break}case"dims":{let s=e[r].dims.join(",");i.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},Uh=(e,t,i)=>{let r=e.name;return e.shaderCache?.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${Nh(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,r},Wh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Lh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let i=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},a=s=>t.features.has(s)&&i.push(s)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(r),this.adapterInfo=new Wh(t.info||await t.requestAdapterInfo()),this.gpuDataManager=el(this),this.programManager=new Dh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,On(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ct(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let r=0;r<t.length/2;r++){let a=i[r],s=a.kernelId,o=this.kernels.get(s),u=o.kernelType,p=o.kernelName,f=a.programName,m=a.inputTensorViews,g=a.outputTensorViews,y=t[r*2],w=t[r*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let x=Number(y-this.queryTimeBase),T=Number(w-this.queryTimeBase);if(!Number.isSafeInteger(x)||!Number.isSafeInteger(T))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:m.map(I=>({dims:I.dims,dataType:Ot(I.dataType)})),outputsMetadata:g.map(I=>({dims:I.dims,dataType:Ot(I.dataType)})),kernelId:s,kernelType:u,kernelName:p,programName:f,startTime:x,endTime:T});else{let I="";m.forEach((v,z)=>{I+=`input[${z}]: [${v.dims}] | ${Ot(v.dataType)}, `});let C="";g.forEach((v,z)=>{C+=`output[${z}]: [${v.dims}] | ${Ot(v.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${p}|${f}" ${I}${C}start time: ${x} ns, execution time: ${T-x} ns`)}Yr("GPU",`${f}::${y}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),nt()}run(e,t,i,r,a,s){ct(e.name);let o=[];for(let v=0;v<t.length;++v){let z=t[v].data;if(z===0)continue;let E=this.gpuDataManager.get(z);if(!E)throw new Error(`no GPU data for input: ${z}`);o.push(E)}let{outputs:u,dispatchGroup:p,programUniforms:f}=e.getRunData(t),m=i.length===0?u.map((v,z)=>z):i;if(m.length!==u.length)throw new Error(`Output size ${m.length} must be equal to ${u.length}.`);let g=[],y=[];for(let v=0;v<u.length;++v){if(!Number.isInteger(m[v])||m[v]<-3||m[v]>=s)throw new Error(`Invalid output index: ${m[v]}`);if(m[v]===-3)continue;let z=m[v]===-1,E=m[v]===-2,O=z||E?a(u[v].dataType,u[v].dims):r(m[v],u[v].dataType,u[v].dims);if(g.push(O),O.data===0)continue;let M=this.gpuDataManager.get(O.data);if(!M)throw new Error(`no GPU data for output: ${O.data}`);if(z&&this.temporaryData.push(M),E){let B=this.kernelPersistentData.get(this.currentKernelId);B||(B=[],this.kernelPersistentData.set(this.currentKernelId,B)),B.push(M)}y.push(M)}if(o.length!==t.length||y.length!==g.length){if(y.length===0)return nt(e.name),g;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let w;if(f){let v=0,z=[];f.forEach(B=>{let U=typeof B.data=="number"?[B.data]:B.data;if(U.length===0)return;let q=B.type===10?2:4,K,J;B.type===10?(J=U.length>4?16:U.length>2?8:U.length*q,K=U.length>4?16:q*U.length):(J=U.length<=2?U.length*q:16,K=16),v=Math.ceil(v/J)*J,z.push(v);let re=B.type===10?8:4;v+=U.length>4?Math.ceil(U.length/re)*K:U.length*q});let E=16;v=Math.ceil(v/E)*E;let O=new ArrayBuffer(v);f.forEach((B,U)=>{let q=z[U],K=typeof B.data=="number"?[B.data]:B.data;if(B.type===6)new Int32Array(O,q,K.length).set(K);else if(B.type===12)new Uint32Array(O,q,K.length).set(K);else if(B.type===10)new Uint16Array(O,q,K.length).set(K);else if(B.type===1)new Float32Array(O,q,K.length).set(K);else throw new Error(`Unsupported uniform type: ${Ot(B.type)}`)});let M=this.gpuDataManager.create(v,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,O,0,v),this.gpuDataManager.release(M.id),w={offset:0,size:v,buffer:M.buffer}}let x=this.programManager.normalizeDispatchGroupSize(p),T=x[1]===1&&x[2]===1,I=Uh(e,t,T),C=this.programManager.getArtifact(I);if(C||(C=this.programManager.build(e,x),this.programManager.setArtifact(I,C),me("info",()=>`[artifact] key: ${I}, programName: ${e.name}`)),f&&C.uniformVariablesInfo){if(f.length!==C.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${C.uniformVariablesInfo.length}, got ${f.length} in program "${C.programInfo.name}".`);for(let v=0;v<f.length;v++){let z=f[v],E=z.type,O=typeof z.data=="number"?1:z.data.length,[M,B]=C.uniformVariablesInfo[v];if(E!==M||O!==B)throw new Error(`Uniform variable ${v} mismatch: expect type ${M} with size ${B}, got type ${E} with size ${O} in program "${C.programInfo.name}".`)}}if(me("info",()=>`[ProgramManager] run "${e.name}" (key=${I}) with ${x[0]}x${x[1]}x${x[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let v={kernelId:this.currentKernelId,programName:C.programInfo.name,inputTensorViews:t,outputTensorViews:g};this.pendingKernels.push(v),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(v)}return this.programManager.run(C,o,y,x,w),nt(e.name),g}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,i,r){let a=Bh.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:r,kernelEntry:a[0],attributes:[a[1],i]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let i of t)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,i){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let a=r.kernelType,s=r.kernelName,o=r.kernelEntry,u=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),me("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let p=this.env.debug;this.temporaryData=[];try{return p&&this.device.pushErrorScope("validation"),o(t,u[1]),0}catch(f){return i.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${f}`)),1}finally{p&&i.push(this.device.popErrorScope().then(f=>f?`GPU validation error for kernel "[${a}] ${s}": ${f.message}`:null));for(let f of this.temporaryData)this.gpuDataManager.release(f.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,i,r){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),o=this.gpuDataManager.registerExternalBuffer(i,r,s);return a.set(t,[o,i]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,i){return async()=>{let r=await Vn(this,e,t);return Rn(r.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){me("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){me("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){me("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let r=0;r<i;r++){let a=this.getComputePassEncoder(),s=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),qh={};Cr(qh,{init:()=>jh});var da,Vh,jh,Pg=H(()=>{oe(),Rt(),pe(),qm(),da=class bm{constructor(t,i,r,a){this.module=t,this.dataType=i,this.data=r,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(F.size(t)!==F.size(this.dims))throw new Error("Invalid new shape");return new bm(this.module,this.dataType,this.data,t)}},Vh=class{constructor(e,t,i){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,a=i/e.PTR_SIZE,s=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*a++,s));let o=Number(e.getValue(r*a++,s));this.outputCount=Number(e.getValue(r*a++,s)),this.customDataOffset=Number(e.getValue(r*a++,"*")),this.customDataSize=Number(e.getValue(r*a++,s));let u=[];for(let p=0;p<o;p++){let f=Number(e.getValue(r*a++,s)),m=Number(e.getValue(r*a++,"*")),g=Number(e.getValue(r*a++,s)),y=[];for(let w=0;w<g;w++)y.push(Number(e.getValue(r*a++,s)));u.push(new da(e,f,m,y))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let i=t?.inputs?.map(o=>typeof o=="number"?this.inputs[o]:o)??this.inputs,r=t?.outputs??[],a=(o,u,p)=>new da(this.module,u,this.output(o,p),p),s=(o,u)=>{let p=rr(o,u);if(!p)throw new Error(`Unsupported data type: ${o}`);let f=p>0?this.backend.gpuDataManager.create(p).id:0;return new da(this.module,o,f,u)};return this.backend.run(e,i,r,a,s,this.outputCount)}output(e,t){let i=this.module.stackSave();try{let r=this.module.PTR_SIZE,a=r===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*r);this.module.setValue(s,t.length,a);for(let o=0;o<t.length;o++)this.module.setValue(s+r*(o+1),t[o],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(i)}}},jh=async(e,t,i,r)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(Mg(),Hr(Fh)).WebGpuBackend,o=new s;await o.initialize(i,r),a("webgpu",[o,u=>o.alloc(Number(u)),u=>o.free(u),(u,p,f,m=!1)=>{if(m)me("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(p)}, size=${Number(f)}`),o.memcpy(Number(u),Number(p));else{me("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(p)}, size=${Number(f)}`);let g=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(f));o.upload(Number(p),g)}},async(u,p,f)=>{me("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${p}, size=${f}`),await o.download(Number(u),()=>t.HEAPU8.subarray(Number(p)>>>0,Number(p+f)>>>0))},(u,p,f)=>o.createKernel(u,Number(p),f,t.UTF8ToString(t._JsepGetNodeName(Number(p)))),u=>o.releaseKernel(u),(u,p,f,m)=>{me("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${f}, kernel=${u}, contextDataOffset=${p}`);let g=new Vh(t,o,Number(p));return o.computeKernel(Number(u),g,m)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let s=new Zu(i);a("webnn",[s,()=>s.reserveTensorId(),o=>s.releaseTensorId(o),async(o,u,p,f,m)=>s.ensureTensor(o,u,p,f,m),(o,u)=>{s.uploadTensor(o,u)},async(o,u)=>s.downloadTensor(o,u),(o,u)=>s.registerMLContext(o,u),!!i.trace])}}}),Hh,Ds,Fs,Ht,Gh,Ns,pa,Us,Ws,Ls,qs,Vs,js,Kh=H(()=>{st(),Um(),Wm(),oe(),er(),kn(),Mu(),Hh=(e,t)=>{xe()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},Ds=async e=>{Hh(e.wasm.numThreads,Xi(e.logLevel))},Fs=async(e,t)=>{xe().asyncInit?.();let i=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let r=e.webgpu.powerPreference;if(r!==void 0&&r!=="low-power"&&r!=="high-performance")throw new Error(`Invalid powerPreference setting: "${r}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:r,forceFallbackAdapter:a}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let r=(Pg(),Hr(qh)).init;t==="webgpu"&&await r("webgpu",xe(),e,i),t==="webnn"&&await r("webnn",xe(),e)}},Ht=new Map,Gh=e=>{let t=xe(),i=t.stackSave();try{let r=t.PTR_SIZE,a=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,a,a+r)!==0&&$e("Can't get session input/output count.");let s=r===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+r,s))]}finally{t.stackRestore(i)}},Ns=(e,t)=>{let i=xe(),r=i.stackSave(),a=0;try{let s=i.PTR_SIZE,o=i.stackAlloc(2*s);i._OrtGetInputOutputMetadata(e,t,o,o+s)!==0&&$e("Can't get session input/output metadata.");let u=Number(i.getValue(o,"*"));a=Number(i.getValue(o+s,"*"));let p=i.HEAP32[a/4];if(p===0)return[u,0];let f=i.HEAPU32[a/4+1],m=[];for(let g=0;g<f;g++){let y=Number(i.getValue(a+8+g*s,"*"));m.push(y!==0?i.UTF8ToString(y):Number(i.getValue(a+8+(g+f)*s,"*")))}return[u,p,m]}finally{i.stackRestore(r),a!==0&&i._OrtFree(a)}},pa=e=>{let t=xe(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},Us=async(e,t)=>{let i,r,a=xe();Array.isArray(e)?[i,r]=e:e.buffer===a.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=pa(e);let s=0,o=0,u=0,p=[],f=[],m=[];try{if([o,p]=await Ru(t),t?.externalData&&a.mountExternalData){let E=[];for(let O of t.externalData){let M=typeof O=="string"?O:O.path;E.push(zn(typeof O=="string"?O:O.data).then(B=>{a.mountExternalData(M,B)}))}await Promise.all(E)}for(let E of t?.executionProviders??[])if((typeof E=="string"?E:E.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof E!="string"){let O=E,M=O?.context,B=O?.gpuDevice,U=O?.deviceType,q=O?.powerPreference;M?a.currentContext=M:B?a.currentContext=await a.webnnCreateMLContext(B):a.currentContext=await a.webnnCreateMLContext({deviceType:U,powerPreference:q})}else a.currentContext=await a.webnnCreateMLContext();break}s=await a._OrtCreateSession(i,r,o),a.webgpuOnCreateSession?.(s),s===0&&$e("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[g,y]=Gh(s),w=!!t?.enableGraphCapture,x=[],T=[],I=[],C=[],v=[];for(let E=0;E<g;E++){let[O,M,B]=Ns(s,E);O===0&&$e("Can't get an input name."),f.push(O);let U=a.UTF8ToString(O);x.push(U),I.push(M===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:Ot(M),shape:B})}for(let E=0;E<y;E++){let[O,M,B]=Ns(s,E+g);O===0&&$e("Can't get an output name."),m.push(O);let U=a.UTF8ToString(O);T.push(U),C.push(M===0?{name:U,isTensor:!1}:{name:U,isTensor:!0,type:Ot(M),shape:B});{if(w&&t?.preferredOutputLocation===void 0){v.push("gpu-buffer");continue}let q=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[U]??"cpu",K=a.webnnIsGraphOutput;if(q==="cpu"&&K&&K(s,U)){v.push("ml-tensor-cpu-output");continue}if(q!=="cpu"&&q!=="cpu-pinned"&&q!=="gpu-buffer"&&q!=="ml-tensor")throw new Error(`Not supported preferred output location: ${q}.`);if(w&&q!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${q}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);v.push(q)}}let z=null;return v.some(E=>E==="gpu-buffer"||E==="ml-tensor"||E==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(s),u===0&&$e("Can't create IO binding."),z={handle:u,outputPreferredLocations:v,outputPreferredLocationsEncoded:v.map(E=>E==="ml-tensor-cpu-output"?"ml-tensor":E).map(E=>An(E))}),Ht.set(s,[s,f,m,z,w,!1]),[s,x,T,I,C]}catch(g){throw f.forEach(y=>a._OrtFree(y)),m.forEach(y=>a._OrtFree(y)),u!==0&&a._OrtReleaseBinding(u)!==0&&$e("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&$e("Can't release session."),g}finally{a._free(i),o!==0&&a._OrtReleaseSessionOptions(o)!==0&&$e("Can't release session options."),p.forEach(g=>a._free(g)),a.unmountExternalData?.()}},Ws=e=>{let t=xe(),i=Ht.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,a,s,o,u]=i;o&&(u&&t._OrtClearBoundOutputs(o.handle)!==0&&$e("Can't clear bound outputs."),t._OrtReleaseBinding(o.handle)!==0&&$e("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(r)!==0&&$e("Can't release session."),Ht.delete(e)},Ls=async(e,t,i,r,a,s,o=!1)=>{if(!e){t.push(0);return}let u=xe(),p=u.PTR_SIZE,f=e[0],m=e[1],g=e[3],y=g,w,x;if(f==="string"&&(g==="gpu-buffer"||g==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&g!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(g==="gpu-buffer"){let C=e[2].gpuBuffer;x=rr(tr(f),m);{let v=u.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');w=v(r,s,C,x)}}else if(g==="ml-tensor"){let C=e[2].mlTensor;x=rr(tr(f),m);let v=u.webnnRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');w=v(r,C,tr(f),m)}else{let C=e[2];if(Array.isArray(C)){x=p*C.length,w=u._malloc(x),i.push(w);for(let v=0;v<C.length;v++){if(typeof C[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);u.setValue(w+v*p,ft(C[v],i),"*")}}else{let v=u.webnnIsGraphInput,z=u.webnnIsGraphOutput;if(f!=="string"&&v&&z){let E=u.UTF8ToString(a);if(v(r,E)||z(r,E)){let O=tr(f);x=rr(O,m),y="ml-tensor";let M=u.webnnCreateTemporaryTensor,B=u.webnnUploadTensor;if(!M||!B)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let U=await M(r,O,m);B(U,new Uint8Array(C.buffer,C.byteOffset,C.byteLength)),w=U}else x=C.byteLength,w=u._malloc(x),i.push(w),u.HEAPU8.set(new Uint8Array(C.buffer,C.byteOffset,x),w)}else x=C.byteLength,w=u._malloc(x),i.push(w),u.HEAPU8.set(new Uint8Array(C.buffer,C.byteOffset,x),w)}}let T=u.stackSave(),I=u.stackAlloc(4*m.length);try{m.forEach((v,z)=>u.setValue(I+z*p,v,p===4?"i32":"i64"));let C=u._OrtCreateTensor(tr(f),w,x,I,m.length,An(y));C===0&&$e(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push(C)}finally{u.stackRestore(T)}},qs=async(e,t,i,r,a,s)=>{let o=xe(),u=o.PTR_SIZE,p=Ht.get(e);if(!p)throw new Error(`cannot run inference. invalid session id: ${e}`);let f=p[0],m=p[1],g=p[2],y=p[3],w=p[4],x=p[5],T=t.length,I=r.length,C=0,v=[],z=[],E=[],O=[],M=o.stackSave(),B=o.stackAlloc(T*u),U=o.stackAlloc(T*u),q=o.stackAlloc(I*u),K=o.stackAlloc(I*u);try{[C,v]=Eu(s),Lt("wasm prepareInputOutputTensor");for(let Z=0;Z<T;Z++)await Ls(i[Z],z,O,e,m[t[Z]],t[Z],w);for(let Z=0;Z<I;Z++)await Ls(a[Z],E,O,e,g[r[Z]],T+r[Z],w);qt("wasm prepareInputOutputTensor");for(let Z=0;Z<T;Z++)o.setValue(B+Z*u,z[Z],"*"),o.setValue(U+Z*u,m[t[Z]],"*");for(let Z=0;Z<I;Z++)o.setValue(q+Z*u,E[Z],"*"),o.setValue(K+Z*u,g[r[Z]],"*");if(y&&!x){let{handle:Z,outputPreferredLocations:de,outputPreferredLocationsEncoded:ee}=y;if(m.length!==T)throw new Error(`input count from feeds (${T}) is expected to be always equal to model's input count (${m.length}).`);Lt("wasm bindInputsOutputs");for(let Y=0;Y<T;Y++){let le=t[Y];await o._OrtBindInput(Z,m[le],z[Y])!==0&&$e(`Can't bind input[${Y}] for session=${e}.`)}for(let Y=0;Y<I;Y++){let le=r[Y];a[Y]?.[3]?o._OrtBindOutput(Z,g[le],E[Y],0)!==0&&$e(`Can't bind pre-allocated output[${Y}] for session=${e}.`):o._OrtBindOutput(Z,g[le],0,ee[le])!==0&&$e(`Can't bind output[${Y}] to ${de[Y]} for session=${e}.`)}qt("wasm bindInputsOutputs"),Ht.set(e,[f,m,g,y,w,!0])}o.jsepOnRunStart?.(f),o.webnnOnRunStart?.(f);let J;y?J=await o._OrtRunWithBinding(f,y.handle,I,q,C):J=await o._OrtRun(f,U,B,T,K,I,q,C),J!==0&&$e("failed to call OrtRun().");let re=[],ue=[];Lt("wasm ProcessOutputTensor");for(let Z=0;Z<I;Z++){let de=Number(o.getValue(q+Z*u,"*"));if(de===E[Z]){re.push(a[Z]);continue}let ee=o.stackSave(),Y=o.stackAlloc(4*u),le=!1,Q,ye=0;try{o._OrtGetTensorData(de,Y,Y+u,Y+2*u,Y+3*u)!==0&&$e(`Can't access output tensor data on index ${Z}.`);let N=u===4?"i32":"i64",G=Number(o.getValue(Y,N));ye=o.getValue(Y+u,"*");let se=o.getValue(Y+u*2,"*"),he=Number(o.getValue(Y+u*3,N)),V=[];for(let ke=0;ke<he;ke++)V.push(Number(o.getValue(se+ke*u,N)));o._OrtFree(se)!==0&&$e("Can't free memory for tensor dims.");let fe=V.reduce((ke,Ee)=>ke*Ee,1);Q=Ot(G);let ut=y?.outputPreferredLocations[r[Z]];if(Q==="string"){if(ut==="gpu-buffer"||ut==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ke=[];for(let Ee=0;Ee<fe;Ee++){let Pe=o.getValue(ye+Ee*u,"*"),We=o.getValue(ye+(Ee+1)*u,"*"),je=Ee===fe-1?void 0:We-Pe;ke.push(o.UTF8ToString(Pe,je))}re.push([Q,V,ke,"cpu"])}else if(ut==="gpu-buffer"&&fe>0){let ke=o.jsepGetBuffer;if(!ke)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ee=ke(ye),Pe=rr(G,fe);if(Pe===void 0||!En(Q))throw new Error(`Unsupported data type: ${Q}`);le=!0,re.push([Q,V,{gpuBuffer:Ee,download:o.jsepCreateDownloader(Ee,Pe,Q),dispose:()=>{o._OrtReleaseTensor(de)!==0&&$e("Can't release tensor.")}},"gpu-buffer"])}else if(ut==="ml-tensor"&&fe>0){let ke=o.webnnEnsureTensor,Ee=o.webnnIsGraphInputOutputTypeSupported;if(!ke||!Ee)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(rr(G,fe)===void 0||!In(Q))throw new Error(`Unsupported data type: ${Q}`);if(!Ee(e,Q,!1))throw new Error(`preferredLocation "ml-tensor" for ${Q} output is not supported by current WebNN Context.`);let Pe=await ke(e,ye,G,V,!1);le=!0,re.push([Q,V,{mlTensor:Pe,download:o.webnnCreateMLTensorDownloader(ye,Q),dispose:()=>{o.webnnReleaseTensorId(ye),o._OrtReleaseTensor(de)}},"ml-tensor"])}else if(ut==="ml-tensor-cpu-output"&&fe>0){let ke=o.webnnCreateMLTensorDownloader(ye,Q)(),Ee=re.length;le=!0,ue.push((async()=>{let Pe=[Ee,await ke];return o.webnnReleaseTensorId(ye),o._OrtReleaseTensor(de),Pe})()),re.push([Q,V,[],"cpu"])}else{let ke=Zi(Q),Ee=new ke(fe);new Uint8Array(Ee.buffer,Ee.byteOffset,Ee.byteLength).set(o.HEAPU8.subarray(ye,ye+Ee.byteLength)),re.push([Q,V,Ee,"cpu"])}}finally{o.stackRestore(ee),Q==="string"&&ye&&o._free(ye),le||o._OrtReleaseTensor(de)}}y&&!w&&(o._OrtClearBoundOutputs(y.handle)!==0&&$e("Can't clear bound outputs."),Ht.set(e,[f,m,g,y,w,!1]));for(let[Z,de]of await Promise.all(ue))re[Z][2]=de;return qt("wasm ProcessOutputTensor"),re}finally{o.webnnOnRunEnd?.(f),o.stackRestore(M),z.forEach(J=>o._OrtReleaseTensor(J)),E.forEach(J=>o._OrtReleaseTensor(J)),O.forEach(J=>o._free(J)),C!==0&&o._OrtReleaseRunOptions(C),v.forEach(J=>o._free(J))}},Vs=e=>{let t=xe(),i=Ht.get(e);if(!i)throw new Error("invalid session id");let r=i[0],a=t._OrtEndProfiling(r);a===0&&$e("Can't get an profile file name."),t._OrtFree(a)},js=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),Gt,ot,Ar,ui,li,ca,Hs,fa,lr,dr,Yh,Zh,Xh,Qh,Jh,em,tm,rm,im=H(()=>{st(),Kh(),er(),xn(),Gt=()=>!!Ce.wasm.proxy&&typeof document<"u",Ar=!1,ui=!1,li=!1,fa=new Map,lr=(e,t)=>{let i=fa.get(e);i?i.push(t):fa.set(e,[t])},dr=()=>{if(Ar||!ui||li||!ot)throw new Error("worker not ready")},Yh=e=>{switch(e.data.type){case"init-wasm":Ar=!1,e.data.err?(li=!0,Hs[1](e.data.err)):(ui=!0,Hs[0]()),ca&&(URL.revokeObjectURL(ca),ca=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=fa.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Zh=async()=>{if(!ui){if(Ar)throw new Error("multiple calls to 'initWasm()' detected.");if(li)throw new Error("previous call to 'initWasm()' failed.");if(Ar=!0,Gt())return new Promise((e,t)=>{ot?.terminate(),xu().then(([i,r])=>{try{ot=r,ot.onerror=s=>t(s),ot.onmessage=Yh,Hs=[e,t];let a={type:"init-wasm",in:Ce};!a.in.wasm.wasmPaths&&(i||bn)&&(a.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",self.location.href).href}),ot.postMessage(a),ca=i}catch(a){t(a)}},t)});try{await Cn(Ce.wasm),await Ds(Ce),ui=!0}catch(e){throw li=!0,e}finally{Ar=!1}}},Xh=async e=>{if(Gt())return dr(),new Promise((t,i)=>{lr("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:Ce}};ot.postMessage(r)});await Fs(Ce,e)},Qh=async e=>Gt()?(dr(),new Promise((t,i)=>{lr("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};ot.postMessage(r,[e.buffer])})):pa(e),Jh=async(e,t)=>{if(Gt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return dr(),new Promise((i,r)=>{lr("create",[i,r]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),ot.postMessage(a,s)})}else return Us(e,t)},em=async e=>{if(Gt())return dr(),new Promise((t,i)=>{lr("release",[t,i]);let r={type:"release",in:e};ot.postMessage(r)});Ws(e)},tm=async(e,t,i,r,a,s)=>{if(Gt()){if(i.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return dr(),new Promise((o,u)=>{lr("run",[o,u]);let p=i,f={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:r,options:s}};ot.postMessage(f,js(p))})}else return qs(e,t,i,r,a,s)},rm=async e=>{if(Gt())return dr(),new Promise((t,i)=>{lr("end-profiling",[t,i]);let r={type:"end-profiling",in:e};ot.postMessage(r)});Vs(e)}}),Gs,am,nm,Bg=H(()=>{st(),im(),oe(),hn(),Mu(),Gs=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},am=e=>{switch(e[3]){case"cpu":return new pt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!En(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:a}=e[2];return pt.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:a})}case"ml-tensor":{let t=e[0];if(!In(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:a}=e[2];return pt.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},nm=class{async fetchModelAndCopyToWasmMemory(e){return Qh(await zn(e))}async loadModel(e,t){ct();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Jh(i,t),nt()}async dispose(){return em(this.sessionId)}async run(e,t,i){ct();let r=[],a=[];Object.entries(e).forEach(g=>{let y=g[0],w=g[1],x=this.inputNames.indexOf(y);if(x===-1)throw new Error(`invalid input '${y}'`);r.push(w),a.push(x)});let s=[],o=[];Object.entries(t).forEach(g=>{let y=g[0],w=g[1],x=this.outputNames.indexOf(y);if(x===-1)throw new Error(`invalid output '${y}'`);s.push(w),o.push(x)});let u=r.map((g,y)=>Gs(g,()=>`input "${this.inputNames[a[y]]}"`)),p=s.map((g,y)=>g?Gs(g,()=>`output "${this.outputNames[o[y]]}"`):null),f=await tm(this.sessionId,a,u,o,p,i),m={};for(let g=0;g<f.length;g++)m[this.outputNames[o[g]]]=s[g]??am(f[g]);return nt(),m}startProfiling(){}endProfiling(){rm(this.sessionId)}}}),sm={};Cr(sm,{OnnxruntimeWebAssemblyBackend:()=>Ys,initializeFlags:()=>Ks,wasmBackend:()=>om});var Ks,Ys,om,Dg=H(()=>{st(),im(),Bg(),Ks=()=>{(typeof Ce.wasm.initTimeout!="number"||Ce.wasm.initTimeout<0)&&(Ce.wasm.initTimeout=0);let e=Ce.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ce.wasm.simd=!1),typeof Ce.wasm.proxy!="boolean"&&(Ce.wasm.proxy=!1),typeof Ce.wasm.trace!="boolean"&&(Ce.wasm.trace=!1),typeof Ce.wasm.numThreads!="number"||!Number.isInteger(Ce.wasm.numThreads)||Ce.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ce.wasm.numThreads=1;else{let t=typeof navigator>"u"?xm("node:os").cpus().length:navigator.hardwareConcurrency;Ce.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ys=class{async init(e){Ks(),await Zh(),await Xh(e)}async createInferenceSessionHandler(e,t){let i=new nm;return await i.loadModel(e,t),i}},om=new Ys});st(),st(),st();var Fg="1.23.2",Ng=cu;{let e=(Dg(),Hr(sm)).wasmBackend;Qt("webgpu",e,5),Qt("webnn",e,5),Qt("cpu",e,10),Qt("wasm",e,10)}Object.defineProperty(Ce.versions,"web",{value:Fg,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var um=Object.freeze({__proto__:null,get InferenceSession(){return fn},get TRACE(){return Yr},get TRACE_EVENT_BEGIN(){return Lt},get TRACE_EVENT_END(){return qt},get TRACE_FUNC_BEGIN(){return ct},get TRACE_FUNC_END(){return nt},get Tensor(){return pt},default:Ng,get env(){return Ce},get registerBackend(){return Qt}});const{env:Ug,InferenceSession:lm}=um;Ug.wasm.wasmPaths="/";class Wg{constructor(){this.featureExtractorSession=null,this.mainModelSession=null,this._isReady=!1}get isReady(){return this._isReady}async loadModels(t,i){if(this.isReady){console.log("Models are already loaded.");return}console.log("Loading models...");try{console.log("Loading main model with WebGPU support...");const r=await lm.create(i,{executionProviders:["webgpu","wasm"],graphOptimizationLevel:"all"});console.log("Loading feature extractor with CPU (WASM) support...");const a=await lm.create(t,{executionProviders:["wasm"],graphOptimizationLevel:"all"});this.featureExtractorSession=a,this.mainModelSession=r,this._isReady=!0,console.log("Models loaded successfully.")}catch(r){throw console.error(`Failed to load models: ${r}`),r}}getFeatureExtractor(){if(!this.featureExtractorSession)throw new Error("Feature extractor model is not loaded.");return this.featureExtractorSession}getMainModel(){if(!this.mainModelSession)throw new Error("Main model is not loaded.");return this.mainModelSession}}const Zs=16e3,dm=5,pm=3,Lg=64,qg=2048,cm=512,fm=128,hm=80,Vg=220;async function jg(e={}){var t;(function(){function l(D){D=D.split("-")[0];for(var j=D.split(".").slice(0,3);j.length<3;)j.push("00");return j=j.map((X,ne,ge)=>X.padStart(2,"0")),j.join("")}var c=D=>[D/1e4|0,(D/100|0)%100,D%100].join("."),b=2147483647,S=typeof process<"u"&&process?.versions?.node?l(process.versions.node):b;if(S<16e4)throw new Error(`This emscripten-generated code requires node v${c(16e4)} (detected v${c(S)})`);var A=typeof navigator<"u"&&navigator?.userAgent?.includes("Safari/")&&navigator.userAgent.match(/Version\/(\d+\.?\d*\.?\d*)/)?l(navigator.userAgent.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]):b;if(A<15e4)throw new Error(`This emscripten-generated code requires Safari v${c(15e4)} (detected v${A})`);var R=typeof navigator<"u"&&navigator?.userAgent?.match(/Firefox\/(\d+(?:\.\d+)?)/)?parseFloat(navigator.userAgent.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]):b;if(R<79)throw new Error(`This emscripten-generated code requires Firefox v79 (detected v${R})`);var P=typeof navigator<"u"&&navigator?.userAgent?.match(/Chrome\/(\d+(?:\.\d+)?)/)?parseFloat(navigator.userAgent.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]):b;if(P<85)throw new Error(`This emscripten-generated code requires Chrome v85 (detected v${P})`)})();var i=e,r=!!globalThis.window,a=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer",o=!r&&!s&&!a;if(s){const{createRequire:l}=await Promise.resolve().then(function(){return Xg});var u=l(self.location.href)}var p=self.location.href,f="";function m(l){return i.locateFile?i.locateFile(l,f):f+l}var g,y;if(s){if(!(globalThis.process?.versions?.node&&globalThis.process?.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var w=u("fs");p.startsWith("file:")&&(f=u("path").dirname(u("url").fileURLToPath(p))+"/"),y=c=>{c=z(c)?new URL(c):c;var b=w.readFileSync(c);return v(Buffer.isBuffer(b)),b},g=async(c,b=!0)=>{c=z(c)?new URL(c):c;var S=w.readFileSync(c,b?void 0:"utf8");return v(b?Buffer.isBuffer(S):typeof S=="string"),S},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(!o)if(r||a){try{f=new URL(".",p).href}catch{}if(!(globalThis.window||globalThis.WorkerGlobalScope))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");a&&(y=l=>{var c=new XMLHttpRequest;return c.open("GET",l,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),g=async l=>{if(z(l))return new Promise((b,S)=>{var A=new XMLHttpRequest;A.open("GET",l,!0),A.responseType="arraybuffer",A.onload=()=>{if(A.status==200||A.status==0&&A.response){b(A.response);return}S(A.status)},A.onerror=S,A.send(null)});var c=await fetch(l,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw new Error(c.status+" : "+c.url)}}else throw new Error("environment detection error");var x=console.log.bind(console),T=console.error.bind(console);v(!o,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var I;globalThis.WebAssembly||T("no native wasm support detected");var C=!1;function v(l,c){l||We("Assertion failed"+(c?": "+c:""))}var z=l=>l.startsWith("file://");function E(){var l=Ur();v((l&3)==0),l==0&&(l+=4),N[l>>2]=34821223,N[l+4>>2]=2310721022,N[0]=1668509029}function O(){if(!C){var l=Ur();l==0&&(l+=4);var c=N[l>>2],b=N[l+4>>2];(c!=34821223||b!=2310721022)&&We(`Stack overflow! Stack cookie has been overwritten at ${Xe(l)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Xe(b)} ${Xe(c)}`),N[0]!=1668509029&&We("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class M extends Error{}class B extends M{constructor(c){super(c),this.excPtr=c;const b=Ri(c);this.name=b[0],this.message=b[1]}}(()=>{var l=new Int16Array(1),c=new Int8Array(l.buffer);l[0]=25459,(c[0]!==115||c[1]!==99)&&We("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)")})();function U(l){Object.getOwnPropertyDescriptor(i,l)||Object.defineProperty(i,l,{configurable:!0,set(){We(`Attempt to set \`Module.${l}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function q(l){return()=>v(!1,`call to '${l}' via reference taken before Wasm module initialization`)}function K(l){Object.getOwnPropertyDescriptor(i,l)&&We(`\`Module.${l}\` was supplied but \`${l}\` not included in INCOMING_MODULE_JS_API`)}function J(l){return l==="FS_createPath"||l==="FS_createDataFile"||l==="FS_createPreloadedFile"||l==="FS_preloadFile"||l==="FS_unlink"||l==="addRunDependency"||l==="FS_createLazyFile"||l==="FS_createDevice"||l==="removeRunDependency"}function re(l){ue(l)}function ue(l){Object.getOwnPropertyDescriptor(i,l)||Object.defineProperty(i,l,{configurable:!0,get(){var c=`'${l}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;J(l)&&(c+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),We(c)}})}var Z,de,ee,Y,le,Q,ye,N,G,se,he,V,fe=!1;function ut(){var l=W.buffer;ee=new Int8Array(l),le=new Int16Array(l),Y=new Uint8Array(l),Q=new Uint16Array(l),ye=new Int32Array(l),N=new Uint32Array(l),i.HEAPF32=G=new Float32Array(l),se=new Float64Array(l),he=new BigInt64Array(l),V=new BigUint64Array(l)}v(globalThis.Int32Array&&globalThis.Float64Array&&Int32Array.prototype.subarray&&Int32Array.prototype.set,"JS engine does not provide full typed array support");function ke(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)hi(i.preRun.shift());U("preRun"),bt(fi)}function Ee(){v(!fe),fe=!0,O(),k.__wasm_call_ctors()}function Pe(){if(O(),i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)ci(i.postRun.shift());U("postRun"),bt(Te)}function We(l){i.onAbort?.(l),l="Aborted("+l+")",T(l),C=!0;var c=new WebAssembly.RuntimeError(l);throw de?.(c),c}var je={error(){We("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init(){je.error()},createDataFile(){je.error()},createPreloadedFile(){je.error()},createLazyFile(){je.error()},open(){je.error()},mkdev(){je.error()},registerDevice(){je.error()},analyzePath(){je.error()},ErrnoError(){je.error()}};function Ke(l,c){return(...b)=>{v(fe,`native function \`${l}\` called before runtime initialization`);var S=k[l];return v(S,`exported native function \`${l}\` not found`),v(b.length<=c,`native function \`${l}\` called with ${b.length} args but expects ${c}`),S(...b)}}var Bt;function ma(){return i.locateFile?m("audio_to_clock_wasm.wasm"):new URL("/assets/audio_to_clock_wasm-ktEWSCUd.wasm",self.location.href).href}function St(l){if(l==Bt&&I)return new Uint8Array(I);if(y)return y(l);throw"both async and sync fetching of the wasm failed"}async function ga(l){if(!I)try{var c=await g(l);return new Uint8Array(c)}catch{}return St(l)}async function di(l,c){try{var b=await ga(l),S=await WebAssembly.instantiate(b,c);return S}catch(A){T(`failed to asynchronously prepare wasm: ${A}`),z(l)&&T(`warning: Loading from a file URI (${l}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),We(A)}}async function _a(l,c,b){if(!l&&!z(c)&&!s)try{var S=fetch(c,{credentials:"same-origin"}),A=await WebAssembly.instantiateStreaming(S,b);return A}catch(R){T(`wasm streaming compile failed: ${R}`),T("falling back to ArrayBuffer instantiation")}return di(c,b)}function pi(){var l={env:qr,wasi_snapshot_preview1:qr};return l}async function ya(){function l(P,D){return k=P.exports,Ka(k),ut(),k}var c=i;function b(P){return v(i===c,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),c=null,l(P.instance)}var S=pi();if(i.instantiateWasm)return new Promise((P,D)=>{try{i.instantiateWasm(S,(j,X)=>{P(l(j,X))})}catch(j){T(`Module.instantiateWasm callback failed with error: ${j}`),D(j)}});Bt??=ma();var A=await _a(I,Bt,S),R=b(A);return R}var bt=l=>{for(;l.length>0;)l.shift()(i)},Te=[],ci=l=>Te.push(l),fi=[],hi=l=>fi.push(l),Xe=l=>(v(typeof l=="number",`ptrToString expects a number, got ${typeof l}`),l>>>=0,"0x"+l.toString(16).padStart(8,"0")),Se=l=>Va(l),ze=()=>Ni(),tt=l=>{tt.shown||={},tt.shown[l]||(tt.shown[l]=1,s&&(l="warning: "+l),T(l))},mi=globalThis.TextDecoder&&new TextDecoder,gi=(l,c,b,S)=>{var A=c+b;if(S)return A;for(;l[c]&&!(c>=A);)++c;return c},_i=(l,c=0,b,S)=>{var A=gi(l,c,b,S);if(A-c>16&&l.buffer&&mi)return mi.decode(l.subarray(c,A));for(var R="";c<A;){var P=l[c++];if(!(P&128)){R+=String.fromCharCode(P);continue}var D=l[c++]&63;if((P&224)==192){R+=String.fromCharCode((P&31)<<6|D);continue}var j=l[c++]&63;if((P&240)==224?P=(P&15)<<12|D<<6|j:((P&248)!=240&&tt("Invalid UTF-8 leading byte "+Xe(P)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),P=(P&7)<<18|D<<12|j<<6|l[c++]&63),P<65536)R+=String.fromCharCode(P);else{var X=P-65536;R+=String.fromCharCode(55296|X>>10,56320|X&1023)}}return R},Ct=(l,c,b)=>(v(typeof l=="number",`UTF8ToString expects a number (got ${typeof l})`),l?_i(Y,l,c,b):""),Qs=(l,c,b,S)=>We(`Assertion failed: ${Ct(l)}, at: `+[c?Ct(c):"unknown filename",b,S?Ct(S):"unknown function"]),Js=l=>{var c=new yi(l);return c.get_caught()||c.set_caught(!0),c.set_rethrown(!1),Zt(l),Ga(l)},Kt=0;class yi{constructor(c){this.excPtr=c,this.ptr=c-24}set_type(c){N[this.ptr+4>>2]=c}get_type(){return N[this.ptr+4>>2]}set_destructor(c){N[this.ptr+8>>2]=c}get_destructor(){return N[this.ptr+8>>2]}set_caught(c){c=c?1:0,ee[this.ptr+12]=c}get_caught(){return ee[this.ptr+12]!=0}set_rethrown(c){c=c?1:0,ee[this.ptr+13]=c}get_rethrown(){return ee[this.ptr+13]!=0}init(c,b){this.set_adjusted_ptr(0),this.set_type(c),this.set_destructor(b)}set_adjusted_ptr(c){N[this.ptr+16>>2]=c}get_adjusted_ptr(){return N[this.ptr+16>>2]}}var cr=l=>Bi(l),bi=l=>{var c=Kt?.excPtr;if(!c)return cr(0),0;var b=new yi(c);b.set_adjusted_ptr(c);var S=b.get_type();if(!S)return cr(0),c;for(var A of l){if(A===0||A===S)break;var R=b.ptr+16;if(Ha(A,S,R))return cr(A),c}return cr(S),c},ba=()=>bi([]),va=l=>bi([l]),Fe=(l,c,b)=>{var S=new yi(l);throw S.init(c,b),Kt=new B(l),Kt},wa=l=>{throw Kt||(Kt=new B(l)),Kt},$a=()=>We("native code called abort()"),Ye=l=>{for(var c="";;){var b=Y[l++];if(!b)return c;c+=String.fromCharCode(b)}},Dt={},kt={},fr={},Yt=class extends Error{constructor(c){super(c),this.name="BindingError"}},ve=l=>{throw new Yt(l)};function xa(l,c,b={}){var S=c.name;if(l||ve(`type "${S}" must have a positive integer typeid pointer`),kt.hasOwnProperty(l)){if(b.ignoreDuplicateRegistrations)return;ve(`Cannot register type '${S}' twice`)}if(kt[l]=c,delete fr[l],Dt.hasOwnProperty(l)){var A=Dt[l];delete Dt[l],A.forEach(R=>R())}}function rt(l,c,b={}){return xa(l,c,b)}var vi=(l,c,b)=>{switch(c){case 1:return b?S=>ee[S]:S=>Y[S];case 2:return b?S=>le[S>>1]:S=>Q[S>>1];case 4:return b?S=>ye[S>>2]:S=>N[S>>2];case 8:return b?S=>he[S>>3]:S=>V[S>>3];default:throw new TypeError(`invalid integer width (${c}): ${l}`)}},Et=l=>{if(l===null)return"null";var c=typeof l;return c==="object"||c==="array"||c==="function"?l.toString():""+l},wi=(l,c,b,S)=>{if(c<b||c>S)throw new TypeError(`Passing a number "${Et(c)}" from JS side to C/C++ side to an argument of type "${l}", which is outside the valid range [${b}, ${S}]!`)},Ta=(l,c,b,S,A)=>{c=Ye(c);const R=S===0n;let P=D=>D;if(R){const D=b*8;P=j=>BigInt.asUintN(D,j),A=P(A)}rt(l,{name:c,fromWireType:P,toWireType:(D,j)=>{if(typeof j=="number")j=BigInt(j);else if(typeof j!="bigint")throw new TypeError(`Cannot convert "${Et(j)}" to ${this.name}`);return wi(c,j,S,A),j},readValueFromPointer:vi(c,b,!R),destructorFunction:null})},eo=(l,c,b,S)=>{c=Ye(c),rt(l,{name:c,fromWireType:function(A){return!!A},toWireType:function(A,R){return R?b:S},readValueFromPointer:function(A){return this.fromWireType(Y[A])},destructorFunction:null})},lt=l=>({count:l.count,deleteScheduled:l.deleteScheduled,preservePointerOnDelete:l.preservePointerOnDelete,ptr:l.ptr,ptrType:l.ptrType,smartPtr:l.smartPtr,smartPtrType:l.smartPtrType}),hr=l=>{function c(b){return b.$$.ptrType.registeredClass.name}ve(c(l)+" instance already deleted")},mr=!1,Ft=l=>{},vt=l=>{l.smartPtr?l.smartPtrType.rawDestructor(l.smartPtr):l.ptrType.registeredClass.rawDestructor(l.ptr)},$i=l=>{l.count.value-=1;var c=l.count.value===0;c&&vt(l)},Sa=(l,c,b)=>{if(c===b)return l;if(b.baseClass===void 0)return null;var S=Sa(l,c,b.baseClass);return S===null?null:b.downcast(S)},wt={},to={},xi=(l,c)=>{for(c===void 0&&ve("ptr should not be undefined");l.baseClass;)c=l.upcast(c),l=l.baseClass;return c},$t=(l,c)=>(c=xi(l,c),to[c]),Ti=class extends Error{constructor(c){super(c),this.name="InternalError"}},Ne=l=>{throw new Ti(l)},He=(l,c)=>{(!c.ptrType||!c.ptr)&&Ne("makeClassHandle requires ptr and ptrType");var b=!!c.smartPtrType,S=!!c.smartPtr;return b!==S&&Ne("Both smartPtrType and smartPtr must be specified"),c.count={value:1},gr(Object.create(l,{$$:{value:c,writable:!0}}))};function zr(l){var c=this.getPointee(l);if(!c)return this.destructor(l),null;var b=$t(this.registeredClass,c);if(b!==void 0){if(b.$$.count.value===0)return b.$$.ptr=c,b.$$.smartPtr=l,b.clone();var S=b.clone();return this.destructor(l),S}function A(){return this.isSmartPointer?He(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:c,smartPtrType:this,smartPtr:l}):He(this.registeredClass.instancePrototype,{ptrType:this,ptr:l})}var R=this.registeredClass.getActualType(c),P=wt[R];if(!P)return A.call(this);var D;this.isConst?D=P.constPointerType:D=P.pointerType;var j=Sa(c,this.registeredClass,D.registeredClass);return j===null?A.call(this):this.isSmartPointer?He(D.registeredClass.instancePrototype,{ptrType:D,ptr:j,smartPtrType:this,smartPtr:l}):He(D.registeredClass.instancePrototype,{ptrType:D,ptr:j})}var gr=l=>globalThis.FinalizationRegistry?(mr=new FinalizationRegistry(c=>{console.warn(c.leakWarning),$i(c.$$)}),gr=c=>{var b=c.$$,S=!!b.smartPtr;if(S){var A={$$:b},R=b.ptrType.registeredClass,P=new Error(`Embind found a leaked C++ instance ${R.name} <${Xe(b.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(P,zr),A.leakWarning=P.stack.replace(/^Error: /,""),mr.register(c,A,c)}return c},Ft=c=>mr.unregister(c),gr(l)):(gr=c=>c,l),ro=()=>{let l=Or.prototype;Object.assign(l,{isAliasOf(b){if(!(this instanceof Or)||!(b instanceof Or))return!1;var S=this.$$.ptrType.registeredClass,A=this.$$.ptr;b.$$=b.$$;for(var R=b.$$.ptrType.registeredClass,P=b.$$.ptr;S.baseClass;)A=S.upcast(A),S=S.baseClass;for(;R.baseClass;)P=R.upcast(P),R=R.baseClass;return S===R&&A===P},clone(){if(this.$$.ptr||hr(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var b=gr(Object.create(Object.getPrototypeOf(this),{$$:{value:lt(this.$$)}}));return b.$$.count.value+=1,b.$$.deleteScheduled=!1,b},delete(){this.$$.ptr||hr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ve("Object already scheduled for deletion"),Ft(this),$i(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||hr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ve("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const c=Symbol.dispose;c&&(l[c]=l.delete)};function Or(){}var Si=(l,c)=>Object.defineProperty(c,"name",{value:l}),Ca=(l,c,b)=>{if(l[c].overloadTable===void 0){var S=l[c];l[c]=function(...A){return l[c].overloadTable.hasOwnProperty(A.length)||ve(`Function '${b}' called with an invalid number of arguments (${A.length}) - expects one of (${l[c].overloadTable})!`),l[c].overloadTable[A.length].apply(this,A)},l[c].overloadTable=[],l[c].overloadTable[S.argCount]=S}},io=(l,c,b)=>{i.hasOwnProperty(l)?(ve(`Cannot register public name '${l}' twice`),Ca(i,l,l),i[l].overloadTable.hasOwnProperty(b)&&ve(`Cannot register multiple overloads of a function with the same number of arguments (${b})!`),i[l].overloadTable[b]=c):(i[l]=c,i[l].argCount=b)},Nt=48,Ci=57,ao=l=>{v(typeof l=="string"),l=l.replace(/[^a-zA-Z0-9_]/g,"$");var c=l.charCodeAt(0);return c>=Nt&&c<=Ci?`_${l}`:l};function ka(l,c,b,S,A,R,P,D){this.name=l,this.constructor=c,this.instancePrototype=b,this.rawDestructor=S,this.baseClass=A,this.getActualType=R,this.upcast=P,this.downcast=D,this.pureVirtualFunctions=[]}var ki=(l,c,b)=>{for(;c!==b;)c.upcast||ve(`Expected null or instance of ${b.name}, got an instance of ${c.name}`),l=c.upcast(l),c=c.baseClass;return l};function no(l,c){if(c===null)return this.isReference&&ve(`null is not a valid ${this.name}`),0;c.$$||ve(`Cannot pass "${Et(c)}" as a ${this.name}`),c.$$.ptr||ve(`Cannot pass deleted object as a pointer of type ${this.name}`);var b=c.$$.ptrType.registeredClass,S=ki(c.$$.ptr,b,this.registeredClass);return S}function so(l,c){var b;if(c===null)return this.isReference&&ve(`null is not a valid ${this.name}`),this.isSmartPointer?(b=this.rawConstructor(),l!==null&&l.push(this.rawDestructor,b),b):0;(!c||!c.$$)&&ve(`Cannot pass "${Et(c)}" as a ${this.name}`),c.$$.ptr||ve(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&c.$$.ptrType.isConst&&ve(`Cannot convert argument of type ${c.$$.smartPtrType?c.$$.smartPtrType.name:c.$$.ptrType.name} to parameter type ${this.name}`);var S=c.$$.ptrType.registeredClass;if(b=ki(c.$$.ptr,S,this.registeredClass),this.isSmartPointer)switch(c.$$.smartPtr===void 0&&ve("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:c.$$.smartPtrType===this?b=c.$$.smartPtr:ve(`Cannot convert argument of type ${c.$$.smartPtrType?c.$$.smartPtrType.name:c.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:b=c.$$.smartPtr;break;case 2:if(c.$$.smartPtrType===this)b=c.$$.smartPtr;else{var A=c.clone();b=this.rawShare(b,Le.toHandle(()=>A.delete())),l!==null&&l.push(this.rawDestructor,b)}break;default:ve("Unsupporting sharing policy")}return b}function oo(l,c){if(c===null)return this.isReference&&ve(`null is not a valid ${this.name}`),0;c.$$||ve(`Cannot pass "${Et(c)}" as a ${this.name}`),c.$$.ptr||ve(`Cannot pass deleted object as a pointer of type ${this.name}`),c.$$.ptrType.isConst&&ve(`Cannot convert argument of type ${c.$$.ptrType.name} to parameter type ${this.name}`);var b=c.$$.ptrType.registeredClass,S=ki(c.$$.ptr,b,this.registeredClass);return S}function Rr(l){return this.fromWireType(N[l>>2])}var uo=()=>{Object.assign(Mr.prototype,{getPointee(l){return this.rawGetPointee&&(l=this.rawGetPointee(l)),l},destructor(l){this.rawDestructor?.(l)},readValueFromPointer:Rr,fromWireType:zr})};function Mr(l,c,b,S,A,R,P,D,j,X,ne){this.name=l,this.registeredClass=c,this.isReference=b,this.isConst=S,this.isSmartPointer=A,this.pointeeType=R,this.sharingPolicy=P,this.rawGetPointee=D,this.rawConstructor=j,this.rawShare=X,this.rawDestructor=ne,!A&&c.baseClass===void 0?S?(this.toWireType=no,this.destructorFunction=null):(this.toWireType=oo,this.destructorFunction=null):this.toWireType=so}var lo=(l,c,b)=>{i.hasOwnProperty(l)||Ne("Replacing nonexistent public symbol"),i[l].overloadTable!==void 0&&b!==void 0||(i[l]=c,i[l].argCount=b)},Ea=[],Oe=l=>{var c=Ea[l];return c||(Ea[l]=c=Lr.get(l)),v(Lr.get(l)==c,"JavaScript-side Wasm function table mirror is out of date!"),c},It=(l,c,b=!1)=>{v(!b,"Async bindings are only supported with JSPI."),l=Ye(l);function S(){var R=Oe(c);return R}var A=S();return typeof A!="function"&&ve(`unknown function pointer with signature ${l}: ${c}`),A};class Pr extends Error{}var Ia=l=>{var c=Pi(l),b=Ye(c);return at(c),b},_r=(l,c)=>{var b=[],S={};function A(R){if(!S[R]&&!kt[R]){if(fr[R]){fr[R].forEach(A);return}b.push(R),S[R]=!0}}throw c.forEach(A),new Pr(`${l}: `+b.map(Ia).join([", "]))},yr=(l,c,b)=>{l.forEach(D=>fr[D]=c);function S(D){var j=b(D);j.length!==l.length&&Ne("Mismatched type converter count");for(var X=0;X<l.length;++X)rt(l[X],j[X])}var A=new Array(c.length),R=[],P=0;c.forEach((D,j)=>{kt.hasOwnProperty(D)?A[j]=kt[D]:(R.push(D),Dt.hasOwnProperty(D)||(Dt[D]=[]),Dt[D].push(()=>{A[j]=kt[D],++P,P===R.length&&S(A)}))}),R.length===0&&S(A)},po=(l,c,b,S,A,R,P,D,j,X,ne,ge,Re)=>{ne=Ye(ne),R=It(A,R),D&&=It(P,D),X&&=It(j,X),Re=It(ge,Re);var Ie=ao(ne);io(Ie,function(){_r(`Cannot construct ${ne} due to unbound types`,[S])}),yr([l,c,b],S?[S]:[],_e=>{_e=_e[0];var Ae,Xt;S?(Ae=_e.registeredClass,Xt=Ae.instancePrototype):Xt=Or.prototype;var Ut=Si(ne,function(...Go){if(Object.getPrototypeOf(this)!==Vi)throw new Yt(`Use 'new' to construct ${ne}`);if(zt.constructor_body===void 0)throw new Yt(`${ne} has no accessible constructor`);var _m=zt.constructor_body[Go.length];if(_m===void 0)throw new Yt(`Tried to invoke ctor of ${ne} with invalid number of parameters (${Go.length}) - expected (${Object.keys(zt.constructor_body).toString()}) parameters instead!`);return _m.apply(this,Go)}),Vi=Object.create(Xt,{constructor:{value:Ut}});Ut.prototype=Vi;var zt=new ka(ne,Ut,Vi,Re,Ae,R,D,X);zt.baseClass&&(zt.baseClass.__derivedClasses??=[],zt.baseClass.__derivedClasses.push(zt));var Qg=new Mr(ne,zt,!0,!1,!1),mm=new Mr(ne+"*",zt,!1,!1,!1),gm=new Mr(ne+" const*",zt,!1,!0,!1);return wt[l]={pointerType:mm,constPointerType:gm},lo(Ie,Ut),[Qg,mm,gm]})},Aa=(l,c)=>{for(var b=[],S=0;S<l;S++)b.push(N[c+S*4>>2]);return b},za=l=>{for(;l.length;){var c=l.pop(),b=l.pop();b(c)}};function br(l){for(var c=1;c<l.length;++c)if(l[c]!==null&&l[c].destructorFunction===void 0)return!0;return!1}function Oa(l,c,b,S,A){if(l<c||l>b){var R=c==b?c:`${c} to ${b}`;A(`function ${S} called with ${l} arguments, expected ${R}`)}}function co(l,c,b,S){var A=br(l),R=l.length-2,P=[],D=["fn"];c&&D.push("thisWired");for(var j=0;j<R;++j)P.push(`arg${j}`),D.push(`arg${j}Wired`);P=P.join(","),D=D.join(",");var X=`return function (${P}) {
`;X+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,A&&(X+=`var destructors = [];
`);var ne=A?"destructors":"null",ge=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];c&&(X+=`var thisWired = toClassParamWire(${ne}, this);
`);for(var j=0;j<R;++j){var Re=`toArg${j}Wire`;X+=`var arg${j}Wired = ${Re}(${ne}, arg${j});
`,ge.push(Re)}if(X+=(b||S?"var rv = ":"")+`invoker(${D});
`,A)X+=`runDestructors(destructors);
`;else for(var j=c?1:2;j<l.length;++j){var Ie=j===1?"thisWired":"arg"+(j-2)+"Wired";l[j].destructorFunction!==null&&(X+=`${Ie}_dtor(${Ie});
`,ge.push(`${Ie}_dtor`))}return b&&(X+=`var ret = fromRetWire(rv);
return ret;
`),X+=`}
`,ge.push("checkArgCount","minArgs","maxArgs"),X=`if (arguments.length !== ${ge.length}){ throw new Error(humanName + "Expected ${ge.length} closure arguments " + arguments.length + " given."); }
${X}`,new Function(ge,X)}function fo(l){for(var c=l.length-2,b=l.length-1;b>=2&&l[b].optional;--b)c--;return c}function vr(l,c,b,S,A,R){var P=c.length;P<2&&ve("argTypes array size mismatch! Must at least get return value and 'this' types!"),v(!R,"Async bindings are only supported with JSPI.");for(var D=c[1]!==null&&b!==null,j=br(c),X=!c[0].isVoid,ne=P-2,ge=fo(c),Re=c[0],Ie=c[1],_e=[l,ve,S,A,za,Re.fromWireType.bind(Re),Ie?.toWireType.bind(Ie)],Ae=2;Ae<P;++Ae){var Xt=c[Ae];_e.push(Xt.toWireType.bind(Xt))}if(!j)for(var Ae=D?1:2;Ae<c.length;++Ae)c[Ae].destructorFunction!==null&&_e.push(c[Ae].destructorFunction);_e.push(Oa,ge,ne);var Vi=co(c,D,X,R)(..._e);return Si(l,Vi)}var At=(l,c,b,S,A,R)=>{v(c>0);var P=Aa(c,b);A=It(S,A),yr([],[l],D=>{D=D[0];var j=`constructor ${D.name}`;if(D.registeredClass.constructor_body===void 0&&(D.registeredClass.constructor_body=[]),D.registeredClass.constructor_body[c-1]!==void 0)throw new Yt(`Cannot register multiple constructors with identical number of parameters (${c-1}) for class '${D.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return D.registeredClass.constructor_body[c-1]=()=>{_r(`Cannot construct ${D.name} due to unbound types`,P)},yr([],P,X=>(X.splice(1,0,null),D.registeredClass.constructor_body[c-1]=vr(j,X,null,A,R),[])),[]})},dt=l=>{l=l.trim();const c=l.indexOf("(");return c===-1?l:(v(l.endsWith(")"),"Parentheses for argument names should match."),l.slice(0,c))},Ra=(l,c,b,S,A,R,P,D,j,X)=>{var ne=Aa(b,S);c=Ye(c),c=dt(c),R=It(A,R,j),yr([],[l],ge=>{ge=ge[0];var Re=`${ge.name}.${c}`;c.startsWith("@@")&&(c=Symbol[c.substring(2)]),D&&ge.registeredClass.pureVirtualFunctions.push(c);function Ie(){_r(`Cannot call ${Re} due to unbound types`,ne)}var _e=ge.registeredClass.instancePrototype,Ae=_e[c];return Ae===void 0||Ae.overloadTable===void 0&&Ae.className!==ge.name&&Ae.argCount===b-2?(Ie.argCount=b-2,Ie.className=ge.name,_e[c]=Ie):(Ca(_e,c,Re),_e[c].overloadTable[b-2]=Ie),yr([],ne,Xt=>{var Ut=vr(Re,Xt,ge,R,P,j);return _e[c].overloadTable===void 0?(Ut.argCount=b-2,_e[c]=Ut):_e[c].overloadTable[b-2]=Ut,[]}),[]})},wr=[],it=[0,1,,1,null,1,!0,1,!1,1],Br=l=>{l>9&&--it[l+1]===0&&(v(it[l]!==void 0,"Decref for unallocated handle."),it[l]=void 0,wr.push(l))},Le={toValue:l=>(l||ve(`Cannot use deleted val. handle = ${l}`),v(l===2||it[l]!==void 0&&l%2===0,`invalid handle: ${l}`),it[l]),toHandle:l=>{switch(l){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const c=wr.pop()||it.length;return it[c]=l,it[c+1]=1,c}}}},Ei={name:"emscripten::val",fromWireType:l=>{var c=Le.toValue(l);return Br(l),c},toWireType:(l,c)=>Le.toHandle(c),readValueFromPointer:Rr,destructorFunction:null},ho=l=>rt(l,Ei),Ma=(l,c)=>{switch(c){case 4:return function(b){return this.fromWireType(G[b>>2])};case 8:return function(b){return this.fromWireType(se[b>>3])};default:throw new TypeError(`invalid float width (${c}): ${l}`)}},mo=(l,c,b)=>{c=Ye(c),rt(l,{name:c,fromWireType:S=>S,toWireType:(S,A)=>{if(typeof A!="number"&&typeof A!="boolean")throw new TypeError(`Cannot convert ${Et(A)} to ${this.name}`);return A},readValueFromPointer:Ma(c,b),destructorFunction:null})},Dr=(l,c,b,S,A)=>{c=Ye(c);const R=S===0;let P=j=>j;if(R){var D=32-8*b;P=j=>j<<D>>>D,A=P(A)}rt(l,{name:c,fromWireType:P,toWireType:(j,X)=>{if(typeof X!="number"&&typeof X!="boolean")throw new TypeError(`Cannot convert "${Et(X)}" to ${c}`);return wi(c,X,S,A),X},readValueFromPointer:vi(c,b,S!==0),destructorFunction:null})},go=(l,c,b)=>{var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],A=S[c];function R(P){var D=N[P>>2],j=N[P+4>>2];return new A(ee.buffer,j,D)}b=Ye(b),rt(l,{name:b,fromWireType:R,readValueFromPointer:R},{ignoreDuplicateRegistrations:!0})},_o=(l,c,b,S)=>{if(v(typeof l=="string",`stringToUTF8Array expects a string (got ${typeof l})`),!(S>0))return 0;for(var A=b,R=b+S-1,P=0;P<l.length;++P){var D=l.codePointAt(P);if(D<=127){if(b>=R)break;c[b++]=D}else if(D<=2047){if(b+1>=R)break;c[b++]=192|D>>6,c[b++]=128|D&63}else if(D<=65535){if(b+2>=R)break;c[b++]=224|D>>12,c[b++]=128|D>>6&63,c[b++]=128|D&63}else{if(b+3>=R)break;D>1114111&&tt("Invalid Unicode code point "+Xe(D)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),c[b++]=240|D>>18,c[b++]=128|D>>12&63,c[b++]=128|D>>6&63,c[b++]=128|D&63,P++}}return c[b]=0,b-A},$r=(l,c,b)=>(v(typeof b=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),_o(l,Y,c,b)),Pa=l=>{for(var c=0,b=0;b<l.length;++b){var S=l.charCodeAt(b);S<=127?c++:S<=2047?c+=2:S>=55296&&S<=57343?(c+=4,++b):c+=3}return c},yo=(l,c)=>{c=Ye(c),rt(l,{name:c,fromWireType(b){var S=N[b>>2],A=b+4,R;return R=Ct(A,S,!0),at(b),R},toWireType(b,S){S instanceof ArrayBuffer&&(S=new Uint8Array(S));var A,R=typeof S=="string";R||ArrayBuffer.isView(S)&&S.BYTES_PER_ELEMENT==1||ve("Cannot pass non-string to std::string"),R?A=Pa(S):A=S.length;var P=Sr(4+A+1),D=P+4;return N[P>>2]=A,R?$r(S,D,A+1):Y.set(S,D),b!==null&&b.push(at,P),P},readValueFromPointer:Rr,destructorFunction(b){at(b)}})},Ii=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,bo=(l,c,b)=>{v(l%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");var S=l>>1,A=gi(Q,S,c/2,b);if(A-S>16&&Ii)return Ii.decode(Q.subarray(S,A));for(var R="",P=S;P<A;++P){var D=Q[P];R+=String.fromCharCode(D)}return R},vo=(l,c,b)=>{if(v(c%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),v(typeof b=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),b??=2147483647,b<2)return 0;b-=2;for(var S=c,A=b<l.length*2?b/2:l.length,R=0;R<A;++R){var P=l.charCodeAt(R);le[c>>1]=P,c+=2}return le[c>>1]=0,c-S},wo=l=>l.length*2,$o=(l,c,b)=>{v(l%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var S="",A=l>>2,R=0;!(R>=c/4);R++){var P=N[A+R];if(!P&&!b)break;S+=String.fromCodePoint(P)}return S},xo=(l,c,b)=>{if(v(c%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),v(typeof b=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),b??=2147483647,b<4)return 0;for(var S=c,A=S+b-4,R=0;R<l.length;++R){var P=l.codePointAt(R);if(P>65535&&R++,ye[c>>2]=P,c+=4,c+4>A)break}return ye[c>>2]=0,c-S},To=l=>{for(var c=0,b=0;b<l.length;++b){var S=l.codePointAt(b);S>65535&&b++,c+=4}return c},So=(l,c,b)=>{b=Ye(b);var S,A,R;c===2?(S=bo,A=vo,R=wo):(v(c===4,"only 2-byte and 4-byte strings are currently supported"),S=$o,A=xo,R=To),rt(l,{name:b,fromWireType:P=>{var D=N[P>>2],j=S(P+4,D*c,!0);return at(P),j},toWireType:(P,D)=>{typeof D!="string"&&ve(`Cannot pass non-string to C++ string type ${b}`);var j=R(D),X=Sr(4+j+c);return N[X>>2]=j/c,A(D,X+4,j+c),P!==null&&P.push(at,X),X},readValueFromPointer:Rr,destructorFunction(P){at(P)}})},Co=(l,c)=>{c=Ye(c),rt(l,{isVoid:!0,name:c,fromWireType:()=>{},toWireType:(b,S)=>{}})},Ai=[],ko=l=>{var c=Ai.length;return Ai.push(l),c},Eo=(l,c)=>{var b=kt[l];return b===void 0&&ve(`${c} has unknown type ${Ia(l)}`),b},Io=(l,c)=>{for(var b=new Array(l),S=0;S<l;++S)b[S]=Eo(N[c+S*4>>2],`parameter ${S}`);return b},Ao=(l,c,b)=>{var S=[],A=l(S,b);return S.length&&(N[c>>2]=Le.toHandle(S)),A},zo={},zi=l=>{var c=zo[l];return c===void 0?Ye(l):c},Ba=(l,c,b)=>{var S=8,[A,...R]=Io(l,c),P=A.toWireType.bind(A),D=R.map(Ie=>Ie.readValueFromPointer.bind(Ie));l--;var j={toValue:Le.toValue},X=D.map((Ie,_e)=>{var Ae=`argFromPtr${_e}`;return j[Ae]=Ie,`${Ae}(args${_e?"+"+_e*S:""})`}),ne;switch(b){case 0:ne="toValue(handle)";break;case 2:ne="new (toValue(handle))";break;case 3:ne="";break;case 1:j.getStringOrSymbol=zi,ne="toValue(handle)[getStringOrSymbol(methodName)]";break}ne+=`(${X})`,A.isVoid||(j.toReturnWire=P,j.emval_returnValue=Ao,ne=`return emval_returnValue(toReturnWire, destructorsRef, ${ne})`),ne=`return function (handle, methodName, destructorsRef, args) {
  ${ne}
  }`;var ge=new Function(Object.keys(j),ne)(...Object.values(j)),Re=`methodCaller<(${R.map(Ie=>Ie.name)}) => ${A.name}>`;return ko(Si(Re,ge))},Da=l=>l?(l=zi(l),Le.toHandle(globalThis[l])):Le.toHandle(globalThis),Fa=(l,c)=>(l=Le.toValue(l),c=Le.toValue(c),Le.toHandle(l[c])),Oo=l=>{l>9&&(it[l+1]+=1)},Ro=(l,c,b,S,A)=>Ai[l](c,b,S,A),Na=()=>Le.toHandle([]),Ua=l=>Le.toHandle(zi(l)),xr=()=>Le.toHandle({}),Mo=l=>{var c=Le.toValue(l);za(c),Br(l)},Wa=(l,c,b)=>{l=Le.toValue(l),c=Le.toValue(c),b=Le.toValue(b),l[c]=b},Po=l=>{We(`Cannot enlarge memory arrays to size ${l} bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ${ee.length}, (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0`)},Bo=l=>{Y.length,l>>>=0,Po(l)},Do=l=>{We("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")};function Oi(l,c,b,S){return 70}var La=[null,[],[]],Fo=(l,c)=>{var b=La[l];v(b),c===0||c===10?((l===1?x:T)(_i(b)),b.length=0):b.push(c)},No=(l,c,b,S)=>{for(var A=0,R=0;R<b;R++){var P=N[c>>2],D=N[c+4>>2];c+=8;for(var j=0;j<D;j++)Fo(l,Y[P+j]);A+=D}return N[S>>2]=A,0},Uo=l=>{var c=i["_"+l];return v(c,"Cannot call unknown function "+l+", make sure it is exported"),c},Wo=(l,c)=>{v(l.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ee.set(l,c)},Fr=l=>Fi(l),Lo=l=>{var c=Pa(l)+1,b=Fr(c);return $r(l,b,c),b},qa=(l,c,b,S,A)=>{var R={string:_e=>{var Ae=0;return _e!=null&&_e!==0&&(Ae=Lo(_e)),Ae},array:_e=>{var Ae=Fr(_e.length);return Wo(_e,Ae),Ae}};function P(_e){return c==="string"?Ct(_e):c==="boolean"?!!_e:_e}var D=Uo(l),j=[],X=0;if(v(c!=="array",'Return type should not be "array".'),S)for(var ne=0;ne<S.length;ne++){var ge=R[b[ne]];ge?(X===0&&(X=ze()),j[ne]=ge(S[ne])):j[ne]=S[ne]}var Re=D(...j);function Ie(_e){return X!==0&&Se(X),P(_e)}return Re=Ie(Re),Re},qo=(l,c,b,S)=>(...A)=>qa(l,c,b,A),Vo=l=>Zt(l),Nr=l=>ja(l),Tr=l=>{var c=ze(),b=Fr(4),S=Fr(4);Wr(l,b,S);var A=N[b>>2],R=N[S>>2],P=Ct(A);at(A);var D;return R&&(D=Ct(R),at(R)),Se(c),[P,D]},Ri=l=>Tr(l);ro(),uo(),v(it.length===10);{if(i.noExitRuntime&&i.noExitRuntime,i.print&&(x=i.print),i.printErr&&(T=i.printErr),i.wasmBinary&&(I=i.wasmBinary),i.FS_createDataFile=je.createDataFile,i.FS_createPreloadedFile=je.createPreloadedFile,Mi(),i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,v(typeof i.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),v(typeof i.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),v(typeof i.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),v(typeof i.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),v(typeof i.read>"u","Module.read option was removed"),v(typeof i.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),v(typeof i.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),v(typeof i.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),v(typeof i.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),v(typeof i.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),v(typeof i.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),v(typeof i.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),v(typeof i.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.shift()();U("preInit")}i.ccall=qa,i.cwrap=qo;var jo=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","exitJS","getHeapMax","growMemory","withStackSave","strError","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","readEmAsmArgs","jstoi_q","getExecutableName","autoResumeAudioContext","getDynCaller","dynCall","handleException","keepRuntimeAlive","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asyncLoad","asmjsMangle","alignMemory","mmapAlloc","HandleAllocator","getUniqueRunDependency","addRunDependency","removeRunDependency","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","intArrayFromString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","getEnvStrings","checkWasiClock","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","initRandomFill","randomFill","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","isLeapYear","ydayFromDate","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_createPreloadedFile","FS_preloadFile","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","allocateUTF8","allocateUTF8OnStack","demangle","stackTrace","getNativeTypeSize","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","enumReadValueFromPointer","setDelayFunction","validateThis","count_emval_handles"];jo.forEach(re);var Ho=["run","out","err","callMain","abort","wasmExports","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","createNamedFunction","ptrToString","abortOnCannotGrowMemory","ENV","ERRNO_CODES","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","wasmTable","wasmMemory","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","flush_NO_FILESYSTEM","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","SYSCALLS","preloadPlugins","FS_stdin_getChar_buffer","FS_unlink","FS_createPath","FS_createDevice","FS_readFile","FS","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_createDataFile","FS_forceLoadFile","FS_createLazyFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","MEMFS","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Ho.forEach(ue),i.incrementExceptionRefcount=Vo,i.decrementExceptionRefcount=Nr,i.getExceptionMessage=Ri;function Mi(){K("fetchSettings")}var Sr=i._malloc=q("_malloc"),Pi=q("___getTypeName"),Ur=q("_emscripten_stack_get_end"),at=i._free=q("_free"),Be=q("_setThrew"),Bi=q("__emscripten_tempret_set"),Di=q("_emscripten_stack_init"),Va=q("__emscripten_stack_restore"),Fi=q("__emscripten_stack_alloc"),Ni=q("_emscripten_stack_get_current"),Zt=q("___cxa_increment_exception_refcount"),ja=q("___cxa_decrement_exception_refcount"),Wr=q("___get_exception_message"),Ha=q("___cxa_can_catch"),Ga=q("___cxa_get_exception_ptr"),W=q("wasmMemory"),Lr=q("wasmTable");function Ka(l){v(l.__cxa_free_exception,"missing Wasm export: __cxa_free_exception"),v(l.malloc,"missing Wasm export: malloc"),Sr=i._malloc=Ke("malloc",1),v(l.__getTypeName,"missing Wasm export: __getTypeName"),Pi=Ke("__getTypeName",1),v(l.fflush,"missing Wasm export: fflush"),v(l.emscripten_stack_get_end,"missing Wasm export: emscripten_stack_get_end"),Ur=l.emscripten_stack_get_end,v(l.emscripten_stack_get_base,"missing Wasm export: emscripten_stack_get_base"),l.emscripten_stack_get_base,v(l.strerror,"missing Wasm export: strerror"),v(l.free,"missing Wasm export: free"),at=i._free=Ke("free",1),v(l.setThrew,"missing Wasm export: setThrew"),Be=Ke("setThrew",2),v(l._emscripten_tempret_set,"missing Wasm export: _emscripten_tempret_set"),Bi=Ke("_emscripten_tempret_set",1),v(l.emscripten_stack_init,"missing Wasm export: emscripten_stack_init"),Di=l.emscripten_stack_init,v(l.emscripten_stack_get_free,"missing Wasm export: emscripten_stack_get_free"),l.emscripten_stack_get_free,v(l._emscripten_stack_restore,"missing Wasm export: _emscripten_stack_restore"),Va=l._emscripten_stack_restore,v(l._emscripten_stack_alloc,"missing Wasm export: _emscripten_stack_alloc"),Fi=l._emscripten_stack_alloc,v(l.emscripten_stack_get_current,"missing Wasm export: emscripten_stack_get_current"),Ni=l.emscripten_stack_get_current,v(l.__cxa_increment_exception_refcount,"missing Wasm export: __cxa_increment_exception_refcount"),Zt=Ke("__cxa_increment_exception_refcount",1),v(l.__cxa_decrement_exception_refcount,"missing Wasm export: __cxa_decrement_exception_refcount"),ja=Ke("__cxa_decrement_exception_refcount",1),v(l.__get_exception_message,"missing Wasm export: __get_exception_message"),Wr=Ke("__get_exception_message",3),v(l.__cxa_can_catch,"missing Wasm export: __cxa_can_catch"),Ha=Ke("__cxa_can_catch",3),v(l.__cxa_get_exception_ptr,"missing Wasm export: __cxa_get_exception_ptr"),Ga=Ke("__cxa_get_exception_ptr",1),v(l.memory,"missing Wasm export: memory"),W=l.memory,v(l.__indirect_function_table,"missing Wasm export: __indirect_function_table"),Lr=l.__indirect_function_table}var qr={__assert_fail:Qs,__cxa_begin_catch:Js,__cxa_find_matching_catch_2:ba,__cxa_find_matching_catch_3:va,__cxa_throw:Fe,__resumeException:wa,_abort_js:$a,_embind_register_bigint:Ta,_embind_register_bool:eo,_embind_register_class:po,_embind_register_class_constructor:At,_embind_register_class_function:Ra,_embind_register_emval:ho,_embind_register_float:mo,_embind_register_integer:Dr,_embind_register_memory_view:go,_embind_register_std_string:yo,_embind_register_std_wstring:So,_embind_register_void:Co,_emval_create_invoker:Ba,_emval_decref:Br,_emval_get_global:Da,_emval_get_property:Fa,_emval_incref:Oo,_emval_invoke:Ro,_emval_new_array:Na,_emval_new_cstring:Ua,_emval_new_object:xr,_emval_run_destructors:Mo,_emval_set_property:Wa,emscripten_resize_heap:Bo,fd_close:Do,fd_seek:Oi,fd_write:No,invoke_di:jr,invoke_diid:Ja,invoke_ii:en,invoke_iii:xt,invoke_iiii:Za,invoke_iiiii:Ui,invoke_iiiiii:Vr,invoke_iiiiiii:an,invoke_iiiiiiii:rn,invoke_iiiiiiiii:Li,invoke_iiiiiiiiii:tn,invoke_v:d,invoke_vi:Wi,invoke_vii:Ya,invoke_viidi:Xa,invoke_viii:Qa,invoke_viiid:sn,invoke_viiii:qi,invoke_viiiii:nn,invoke_viiiiiiii:n};function xt(l,c,b){var S=ze();try{return Oe(l)(c,b)}catch(A){if(Se(S),!(A instanceof M))throw A;Be(1,0)}}function Vr(l,c,b,S,A,R){var P=ze();try{return Oe(l)(c,b,S,A,R)}catch(D){if(Se(P),!(D instanceof M))throw D;Be(1,0)}}function Ui(l,c,b,S,A){var R=ze();try{return Oe(l)(c,b,S,A)}catch(P){if(Se(R),!(P instanceof M))throw P;Be(1,0)}}function Ya(l,c,b){var S=ze();try{Oe(l)(c,b)}catch(A){if(Se(S),!(A instanceof M))throw A;Be(1,0)}}function Za(l,c,b,S){var A=ze();try{return Oe(l)(c,b,S)}catch(R){if(Se(A),!(R instanceof M))throw R;Be(1,0)}}function Xa(l,c,b,S,A){var R=ze();try{Oe(l)(c,b,S,A)}catch(P){if(Se(R),!(P instanceof M))throw P;Be(1,0)}}function Wi(l,c){var b=ze();try{Oe(l)(c)}catch(S){if(Se(b),!(S instanceof M))throw S;Be(1,0)}}function Qa(l,c,b,S){var A=ze();try{Oe(l)(c,b,S)}catch(R){if(Se(A),!(R instanceof M))throw R;Be(1,0)}}function Ja(l,c,b,S){var A=ze();try{return Oe(l)(c,b,S)}catch(R){if(Se(A),!(R instanceof M))throw R;Be(1,0)}}function en(l,c){var b=ze();try{return Oe(l)(c)}catch(S){if(Se(b),!(S instanceof M))throw S;Be(1,0)}}function jr(l,c){var b=ze();try{return Oe(l)(c)}catch(S){if(Se(b),!(S instanceof M))throw S;Be(1,0)}}function Li(l,c,b,S,A,R,P,D,j){var X=ze();try{return Oe(l)(c,b,S,A,R,P,D,j)}catch(ne){if(Se(X),!(ne instanceof M))throw ne;Be(1,0)}}function qi(l,c,b,S,A){var R=ze();try{Oe(l)(c,b,S,A)}catch(P){if(Se(R),!(P instanceof M))throw P;Be(1,0)}}function tn(l,c,b,S,A,R,P,D,j,X){var ne=ze();try{return Oe(l)(c,b,S,A,R,P,D,j,X)}catch(ge){if(Se(ne),!(ge instanceof M))throw ge;Be(1,0)}}function rn(l,c,b,S,A,R,P,D){var j=ze();try{return Oe(l)(c,b,S,A,R,P,D)}catch(X){if(Se(j),!(X instanceof M))throw X;Be(1,0)}}function an(l,c,b,S,A,R,P){var D=ze();try{return Oe(l)(c,b,S,A,R,P)}catch(j){if(Se(D),!(j instanceof M))throw j;Be(1,0)}}function nn(l,c,b,S,A,R){var P=ze();try{Oe(l)(c,b,S,A,R)}catch(D){if(Se(P),!(D instanceof M))throw D;Be(1,0)}}function sn(l,c,b,S,A){var R=ze();try{Oe(l)(c,b,S,A)}catch(P){if(Se(R),!(P instanceof M))throw P;Be(1,0)}}function n(l,c,b,S,A,R,P,D,j){var X=ze();try{Oe(l)(c,b,S,A,R,P,D,j)}catch(ne){if(Se(X),!(ne instanceof M))throw ne;Be(1,0)}}function d(l){var c=ze();try{Oe(l)()}catch(b){if(Se(c),!(b instanceof M))throw b;Be(1,0)}}var h;function _(){Di(),E()}function $(){_(),ke();function l(){v(!h),h=!0,i.calledRun=!0,!C&&(Ee(),Z?.(i),i.onRuntimeInitialized?.(),U("onRuntimeInitialized"),v(!i._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Pe())}i.setStatus?(i.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>i.setStatus(""),1),l()},1)):l(),O()}var k;k=await ya(),$(),fe?t=i:t=new Promise((l,c)=>{Z=l,de=c});for(const l of Object.keys(i))l in e||Object.defineProperty(e,l,{configurable:!0,get(){We(`Access to module property ('${l}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return t}class Hg{constructor(){this.resolveFunc=t=>{},this.rejectFunc=t=>{},this.completedField=!1,this.promiseField=new Promise((t,i)=>{this.resolveFunc=t,this.rejectFunc=i}),this.promiseField.finally(()=>{this.completedField=!0})}get completed(){return this.completedField}resolve(t){this.resolveFunc(t)}reject(t){this.rejectFunc(t)}get promise(){return this.promiseField}get callable(){return this.resolveFunc}}class Gg{constructor(){this.head=Promise.resolve()}async push(t){const i=new Hg;return this.head=this.head.then(async()=>{i.resolve(await t())}).catch(r=>{i.reject(r)}),i.promise}}class Kg{constructor(t){this.taskQueue=new Gg,this.latestTimestamp=0,this.config=t,this.initWasm()}async initWasm(){try{this.config.onStatusUpdated?.({message:"Initializing WASM...",isError:!1}),this.wasmInstance=await jg(),this.audioToClock=new this.wasmInstance.AudioToClock(this.config,(t,i)=>{this.config.onStatusUpdated?.({message:t,isError:i})},t=>{this.config.onExternalClockAdjusted?.(t)},t=>{this.config.onDebugDataExported?.(t)},async t=>{const i=await this.config.runFeatureExtractor(t);this.resolveFeatureExtractor(i)},(t,i,r)=>{this.config.runBpmPhasePredictor(t,i,r).then(a=>this.resolveBpmPhasePredictor(a))}),this.timerInterval=setInterval(()=>this.audioToClock.tick(this.latestTimestamp),(this.config.externalClockControllerConfig?.updateInterval??1/30)*1e3),this.config.onStatusUpdated?.({message:"WASM module loaded.",isError:!1})}catch(t){console.error(t),this.config.onStatusUpdated?.({message:"Failed to load WASM module.",isError:!0})}}addAudio(t,i,r){this.latestTimestamp=i;const a=t.length;a!==0&&this.taskQueue.push(async()=>{if(!this.wasmInstance||!this.audioToClock)return;const s=t[0].length,o=a*s,u=new Float32Array(o);for(let f=0;f<a;f++)u.set(t[f],f*s);const p=this.wasmInstance._malloc(o*Float32Array.BYTES_PER_ELEMENT);this.wasmInstance.HEAPF32.set(u,p/Float32Array.BYTES_PER_ELEMENT),await this.audioToClock.addAudio(p,a,s,i,r),this.wasmInstance._free(p)})}resync(t){this.audioToClock&&this.audioToClock.resync(!!t)}resetHardSync(){this.audioToClock&&this.audioToClock.resetHardSync()}setForceExportAllDebugData(t){this.audioToClock&&this.audioToClock.setForceExportAllDebugData(t)}setRunning(t){t?!this.timerInterval&&this.audioToClock&&(this.timerInterval=setInterval(()=>this.audioToClock.tick(this.latestTimestamp),(this.config.externalClockControllerConfig?.updateInterval??1/30)*1e3)):this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=void 0)}async resolveFeatureExtractor(t){if(!this.wasmInstance||!this.audioToClock)return;const i=t.odf,r=t.spec,a=this.wasmInstance._malloc(i.length*Float32Array.BYTES_PER_ELEMENT);this.wasmInstance.HEAPF32.set(i,a/Float32Array.BYTES_PER_ELEMENT);const s=this.wasmInstance._malloc(r.length*Float32Array.BYTES_PER_ELEMENT);this.wasmInstance.HEAPF32.set(r,s/Float32Array.BYTES_PER_ELEMENT),this.audioToClock.resolveFeatureExtractor(a,i.length,s,r.length),this.wasmInstance._free(a),this.wasmInstance._free(s)}async resolveBpmPhasePredictor(t){this.audioToClock?.resolveBpmPhasePredictor(t)}stop(){clearInterval(this.timerInterval)}}const Yg=Kg,{Tensor:Xs}=um,Zg=Yg;let Pt=null,pr,ha=null;self.onmessage=async e=>{const{type:t,payload:i}=e.data;if(t==="init"){const{featureExtractorUrl:r,bpmPhaseModelUrl:a,audioToClockConfig:s}=i,o=new Wg;await o.loadModels(r,a);const u=Math.floor(dm*Zs/Lg)+1,p=Math.floor(dm*Zs/cm)+1,f={...s,inferenceConfig:{hopSamples:cm,maxHopsPerStep:8,odfFrames:u,specFrames:p,inferenceInterval:1,targetSampleRate:Zs,specSliceFraction:.25,lookbehindSamples:qg/2,delayCompensation:.05,exportDebugData:s.exportAllDebugData,...s.inferenceConfig},stabilizerConfig:{exportDebugData:s.exportAllDebugData,...s.stabilizerConfig},externalClockControllerConfig:{exportDebugData:s.exportAllDebugData,...s.externalClockControllerConfig},runFeatureExtractor:async g=>{const y=new Xs("float32",g,[1,g.length]),w={[o.getFeatureExtractor().inputNames[0]]:y},x=await o.getFeatureExtractor().run(w),T=x[o.getFeatureExtractor().outputNames[0]],I=x[o.getFeatureExtractor().outputNames[1]];return{odf:T.data,spec:I.data}},runBpmPhasePredictor:async(g,y,w)=>{const x=new Xs("float32",g,[1,pm,g.length/pm|0]),T=new Xs("float32",y,[1,fm,y.length/fm|0]),I={odf_input:x,spec_input:T},z=(await o.getMainModel().run(I))[o.getMainModel().outputNames[0]].data,E=z[0],O=z[1],B=z[2]*(Vg-hm)+hm,U=Math.atan2(O,E),q=Math.sqrt(E*E+O*O);return{bpm:B,phase:U,phaseMagnitude:q,inputTime:w,phaseX:E,phaseY:O,debugData:{}}},onStatusUpdated:g=>{self.postMessage({type:"status",payload:g})},onExternalClockAdjusted:g=>{self.postMessage({type:"clock",payload:g}),Pt&&Pt.postMessage({type:"CLOCK_UPDATE",bpm:g.bpm,phase:g.phase,timestamp:g.timestamp,kind:g.type})},onDebugDataExported:g=>{self.postMessage({type:"debug",payload:g}),Pt&&g.externalClock&&Pt.postMessage({type:"CLOCK_STREAM",data:g.externalClock})}};pr=new Zg(f),self.postMessage({type:"ready"})}else if(t==="addAudio")pr?.addAudio(i.buffer,i.currentTime,i.sampleRate);else if(t==="resync"){const r=i;pr?.resync(r),r&&Pt&&Pt.postMessage({type:"CLOCK_HARD_SYNC"})}else if(t==="resetHardSync")pr?.resetHardSync();else if(t==="setForceExportAllDebugData")pr?.setForceExportAllDebugData(i);else if(t==="setRunning")pr?.setRunning(i);else if(t==="connectAudioPort"){const r=i;ha&&(ha.close(),ha.onmessage=null),ha=r,r.onmessage=a=>{const{type:s,payload:o}=a.data;s==="audio"&&pr?.addAudio(o.buffer,o.currentTime,o.sampleRate)}}else if(t==="connectEventPort"){const r=i;Pt&&Pt.close(),Pt=r}};var Xg=Object.freeze({__proto__:null})})();
//# sourceMappingURL=audio_to_clock.worker-BR5OHneo.js.map
