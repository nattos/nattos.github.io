const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/editor.main-BYMwXTeF.js","assets/editor-Dvl_Svmm.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=window,jc=gs.ShadowRoot&&(gs.ShadyCSS===void 0||gs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hc=Symbol(),Lf=new WeakMap;let Zd=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Hc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(jc&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Lf.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Lf.set(t,e))}return e}toString(){return this.cssText}};const qc=i=>new Zd(typeof i=="string"?i:i+"",void 0,Hc),Se=(i,...e)=>{const t=i.length===1?i[0]:e.reduce(((n,o,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1]),i[0]);return new Zd(t,i,Hc)},Rb=(i,e)=>{jc?i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{const n=document.createElement("style"),o=gs.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)}))},Rf=jc?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return qc(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ea;const _s=window,Nf=_s.trustedTypes,Nb=Nf?Nf.emptyScript:"",$f=_s.reactiveElementPolyfillSupport,ml={toAttribute(i,e){switch(e){case Boolean:i=i?Nb:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},eu=(i,e)=>e!==i&&(e==e||i==i),Pa={attribute:!0,type:String,converter:ml,reflect:!1,hasChanged:eu},bl="finalized";let Ui=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const o=this._$Ep(n,t);o!==void 0&&(this._$Ev.set(o,n),e.push(o))})),e}static createProperty(e,t=Pa){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pa}static finalize(){if(this.hasOwnProperty(bl))return!1;this[bl]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of n)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(Rf(o))}else e!==void 0&&t.push(Rf(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((t=>t(this)))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Rb(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Pa){var o;const r=this.constructor._$Ep(e,n);if(r!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:ml).toAttribute(t,n.type);this._$El=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var n;const o=this.constructor,r=o._$Ev.get(e);if(r!==void 0&&this._$El!==r){const s=o.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:ml;this._$El=r,this[r]=a.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||eu)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,r)=>this[r]=o)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)})),this.update(n)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach((n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((t,n)=>this._$EO(n,this[n],t))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ui[bl]=!0,Ui.elementProperties=new Map,Ui.elementStyles=[],Ui.shadowRootOptions={mode:"open"},$f?.({ReactiveElement:Ui}),((Ea=_s.reactiveElementVersions)!==null&&Ea!==void 0?Ea:_s.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ta;const Ms=window,so=Ms.trustedTypes,Bf=so?so.createPolicy("lit-html",{createHTML:i=>i}):void 0,yl="$lit$",jn=`lit$${(Math.random()+"").slice(9)}$`,tu="?"+jn,$b=`<${tu}>`,Ci=document,Qo=()=>Ci.createComment(""),Zo=i=>i===null||typeof i!="object"&&typeof i!="function",nu=Array.isArray,Bb=i=>nu(i)||typeof i?.[Symbol.iterator]=="function",Da=`[ 	
\f\r]`,Do=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vf=/-->/g,Ff=/>/g,hi=RegExp(`>|${Da}(?:([^\\s"'>=/]+)(${Da}*=${Da}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zf=/'/g,jf=/"/g,iu=/^(?:script|style|textarea|title)$/i,ou=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=ou(1),dt=ou(2),Xn=Symbol.for("lit-noChange"),ze=Symbol.for("lit-nothing"),Hf=new WeakMap,yi=Ci.createTreeWalker(Ci,129,null,!1);function ru(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bf!==void 0?Bf.createHTML(e):e}const Vb=(i,e)=>{const t=i.length-1,n=[];let o,r=e===2?"<svg>":"",s=Do;for(let a=0;a<t;a++){const l=i[a];let c,f,h=-1,d=0;for(;d<l.length&&(s.lastIndex=d,f=s.exec(l),f!==null);)d=s.lastIndex,s===Do?f[1]==="!--"?s=Vf:f[1]!==void 0?s=Ff:f[2]!==void 0?(iu.test(f[2])&&(o=RegExp("</"+f[2],"g")),s=hi):f[3]!==void 0&&(s=hi):s===hi?f[0]===">"?(s=o??Do,h=-1):f[1]===void 0?h=-2:(h=s.lastIndex-f[2].length,c=f[1],s=f[3]===void 0?hi:f[3]==='"'?jf:zf):s===jf||s===zf?s=hi:s===Vf||s===Ff?s=Do:(s=hi,o=void 0);const u=s===hi&&i[a+1].startsWith("/>")?" ":"";r+=s===Do?l+$b:h>=0?(n.push(c),l.slice(0,h)+yl+l.slice(h)+jn+u):l+jn+(h===-2?(n.push(void 0),a):u)}return[ru(i,r+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class er{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,s=0;const a=e.length-1,l=this.parts,[c,f]=Vb(e,t);if(this.el=er.createElement(c,n),yi.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=yi.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const d of o.getAttributeNames())if(d.endsWith(yl)||d.startsWith(jn)){const u=f[s++];if(h.push(d),u!==void 0){const p=o.getAttribute(u.toLowerCase()+yl).split(jn),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:g[2],strings:p,ctor:g[1]==="."?zb:g[1]==="?"?Hb:g[1]==="@"?qb:aa})}else l.push({type:6,index:r})}for(const d of h)o.removeAttribute(d)}if(iu.test(o.tagName)){const h=o.textContent.split(jn),d=h.length-1;if(d>0){o.textContent=so?so.emptyScript:"";for(let u=0;u<d;u++)o.append(h[u],Qo()),yi.nextNode(),l.push({type:2,index:++r});o.append(h[d],Qo())}}}else if(o.nodeType===8)if(o.data===tu)l.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(jn,h+1))!==-1;)l.push({type:7,index:r}),h+=jn.length-1}r++}}static createElement(e,t){const n=Ci.createElement("template");return n.innerHTML=e,n}}function ao(i,e,t=i,n){var o,r,s,a;if(e===Xn)return e;let l=n!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[n]:t._$Cl;const c=Zo(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((r=l?._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((s=(a=t)._$Co)!==null&&s!==void 0?s:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=ao(i,l._$AS(i,e.values),l,n)),e}class Fb{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:o}=this._$AD,r=((t=e?.creationScope)!==null&&t!==void 0?t:Ci).importNode(n,!0);yi.currentNode=r;let s=yi.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let f;c.type===2?f=new Mo(s,s.nextSibling,this,e):c.type===1?f=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(f=new Wb(s,this,e)),this._$AV.push(f),c=o[++l]}a!==c?.index&&(s=yi.nextNode(),a++)}return yi.currentNode=Ci,r}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Mo{constructor(e,t,n,o){var r;this.type=2,this._$AH=ze,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cp=(r=o?.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ao(this,e,t),Zo(e)?e===ze||e==null||e===""?(this._$AH!==ze&&this._$AR(),this._$AH=ze):e!==this._$AH&&e!==Xn&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Bb(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ze&&Zo(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ci.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:o}=e,r=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=er.createElement(ru(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(n);else{const s=new Fb(r,this),a=s.u(this.options);s.v(n),this.$(a),this._$AH=s}}_$AC(e){let t=Hf.get(e.strings);return t===void 0&&Hf.set(e.strings,t=new er(e)),t}T(e){nu(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new Mo(this.k(Qo()),this.k(Qo()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class aa{constructor(e,t,n,o,r){this.type=1,this._$AH=ze,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ze}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){const r=this.strings;let s=!1;if(r===void 0)e=ao(this,e,t,0),s=!Zo(e)||e!==this._$AH&&e!==Xn,s&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=ao(this,a[n+l],t,l),c===Xn&&(c=this._$AH[l]),s||(s=!Zo(c)||c!==this._$AH[l]),c===ze?e=ze:e!==ze&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===ze?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class zb extends aa{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ze?void 0:e}}const jb=so?so.emptyScript:"";class Hb extends aa{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ze?this.element.setAttribute(this.name,jb):this.element.removeAttribute(this.name)}}class qb extends aa{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){var n;if((e=(n=ao(this,e,t,0))!==null&&n!==void 0?n:ze)===Xn)return;const o=this._$AH,r=e===ze&&o!==ze||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==ze&&(o===ze||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Wb{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ao(this,e)}}const Ub={I:Mo},qf=Ms.litHtmlPolyfillSupport;qf?.(er,Mo),((Ta=Ms.litHtmlVersions)!==null&&Ta!==void 0?Ta:Ms.litHtmlVersions=[]).push("2.8.0");const Gb=(i,e,t)=>{var n,o;const r=(n=t?.renderBefore)!==null&&n!==void 0?n:e;let s=r._$litPart$;if(s===void 0){const a=(o=t?.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=s=new Mo(e.insertBefore(Qo(),a),a,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var La,Ra;let Dt=class extends Ui{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gb(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Xn}};Dt.finalized=!0,Dt._$litElement$=!0,(La=globalThis.litElementHydrateSupport)===null||La===void 0||La.call(globalThis,{LitElement:Dt});const Wf=globalThis.litElementPolyfillSupport;Wf?.({LitElement:Dt});((Ra=globalThis.litElementVersions)!==null&&Ra!==void 0?Ra:globalThis.litElementVersions=[]).push("3.3.3");function ne(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];throw new Error(typeof i=="number"?"[MobX] minified error nr: "+i+(t.length?" "+t.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+i)}var Yb={};function la(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:Yb}var su=Object.assign,Is=Object.getOwnPropertyDescriptor,cn=Object.defineProperty,wr=Object.prototype,vl=[];Object.freeze(vl);var Wc={};Object.freeze(Wc);var Kb=typeof Proxy<"u",Xb=Object.toString();function au(){Kb||ne("Proxy not available")}function lu(i){var e=!1;return function(){if(!e)return e=!0,i.apply(this,arguments)}}var Ki=function(){};function Wt(i){return typeof i=="function"}function Ai(i){var e=typeof i;switch(e){case"string":case"symbol":case"number":return!0}return!1}function ca(i){return i!==null&&typeof i=="object"}function Pn(i){if(!ca(i))return!1;var e=Object.getPrototypeOf(i);if(e==null)return!0;var t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t.toString()===Xb}function cu(i){var e=i?.constructor;return e?e.name==="GeneratorFunction"||e.displayName==="GeneratorFunction":!1}function xr(i,e,t){cn(i,e,{enumerable:!1,writable:!0,configurable:!0,value:t})}function fu(i,e,t){cn(i,e,{enumerable:!1,writable:!1,configurable:!0,value:t})}function ii(i,e){var t="isMobX"+i;return e.prototype[t]=!0,function(n){return ca(n)&&n[t]===!0}}function Io(i){return i!=null&&Object.prototype.toString.call(i)==="[object Map]"}function Jb(i){var e=Object.getPrototypeOf(i),t=Object.getPrototypeOf(e),n=Object.getPrototypeOf(t);return n===null}function xn(i){return i!=null&&Object.prototype.toString.call(i)==="[object Set]"}var hu=typeof Object.getOwnPropertySymbols<"u";function Qb(i){var e=Object.keys(i);if(!hu)return e;var t=Object.getOwnPropertySymbols(i);return t.length?[].concat(e,t.filter(function(n){return wr.propertyIsEnumerable.call(i,n)})):e}var lo=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:hu?function(i){return Object.getOwnPropertyNames(i).concat(Object.getOwnPropertySymbols(i))}:Object.getOwnPropertyNames;function du(i){return i===null?null:typeof i=="object"?""+i:i}function Mn(i,e){return wr.hasOwnProperty.call(i,e)}var Zb=Object.getOwnPropertyDescriptors||function(e){var t={};return lo(e).forEach(function(n){t[n]=Is(e,n)}),t};function mt(i,e){return!!(i&e)}function bt(i,e,t){return t?i|=e:i&=~e,i}function Uf(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function e0(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n0(n.key),n)}}function Oo(i,e,t){return e&&e0(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function Xi(i,e){var t=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t)return(t=t.call(i)).next.bind(t);if(Array.isArray(i)||(t=i0(i))||e){t&&(i=t);var n=0;return function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _i(){return _i=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},_i.apply(null,arguments)}function uu(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,wl(i,e)}function wl(i,e){return wl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},wl(i,e)}function t0(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}function n0(i){var e=t0(i,"string");return typeof e=="symbol"?e:e+""}function i0(i,e){if(i){if(typeof i=="string")return Uf(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Uf(i,e):void 0}}var ln=Symbol("mobx-stored-annotations");function fn(i){function e(t,n){if(kr(n))return i.decorate_20223_(t,n);Sr(t,n,i)}return Object.assign(e,i)}function Sr(i,e,t){Mn(i,ln)||xr(i,ln,_i({},i[ln])),f0(t)||(i[ln][e]=t)}function o0(i){return Mn(i,ln)||xr(i,ln,_i({},i[ln])),i[ln]}function kr(i){return typeof i=="object"&&typeof i.kind=="string"}var W=Symbol("mobx administration"),oi=(function(){function i(t){t===void 0&&(t="Atom"),this.name_=void 0,this.flags_=0,this.observers_=new Set,this.lastAccessedBy_=0,this.lowestObserverState_=oe.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=t}var e=i.prototype;return e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(n){return n()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(n){return n()})},e.reportObserved=function(){return Eu(this)},e.reportChanged=function(){Et(),Pu(this),Pt()},e.toString=function(){return this.name_},Oo(i,[{key:"isBeingObserved",get:function(){return mt(this.flags_,i.isBeingObservedMask_)},set:function(n){this.flags_=bt(this.flags_,i.isBeingObservedMask_,n)}},{key:"isPendingUnobservation",get:function(){return mt(this.flags_,i.isPendingUnobservationMask_)},set:function(n){this.flags_=bt(this.flags_,i.isPendingUnobservationMask_,n)}},{key:"diffValue",get:function(){return mt(this.flags_,i.diffValueMask_)?1:0},set:function(n){this.flags_=bt(this.flags_,i.diffValueMask_,n===1)}}])})();oi.isBeingObservedMask_=1;oi.isPendingUnobservationMask_=2;oi.diffValueMask_=4;var Uc=ii("Atom",oi);function pu(i,e,t){e===void 0&&(e=Ki),t===void 0&&(t=Ki);var n=new oi(i);return e!==Ki&&uy(n,e),t!==Ki&&Vu(n,t),n}function r0(i,e){return Xu(i,e)}function s0(i,e){return Object.is?Object.is(i,e):i===e?i!==0||1/i===1/e:i!==i&&e!==e}var co={structural:r0,default:s0};function Mi(i,e,t){return Kc(i)?i:Array.isArray(i)?F.array(i,{name:t}):Pn(i)?F.object(i,void 0,{name:t}):Io(i)?F.map(i,{name:t}):xn(i)?F.set(i,{name:t}):typeof i=="function"&&!fo(i)&&!nr(i)?cu(i)?ho(i):tr(t,i):i}function a0(i,e,t){if(i==null||Or(i)||Ir(i)||ri(i)||jt(i))return i;if(Array.isArray(i))return F.array(i,{name:t,deep:!1});if(Pn(i))return F.object(i,void 0,{name:t,deep:!1});if(Io(i))return F.map(i,{name:t,deep:!1});if(xn(i))return F.set(i,{name:t,deep:!1})}function fa(i){return i}function l0(i,e){return Xu(i,e)?e:i}var c0="override";function f0(i){return i.annotationType_===c0}function Cr(i,e){return{annotationType_:i,options_:e,make_:h0,extend_:d0,decorate_20223_:u0}}function h0(i,e,t,n){var o;if((o=this.options_)!=null&&o.bound)return this.extend_(i,e,t,!1)===null?0:1;if(n===i.target_)return this.extend_(i,e,t,!1)===null?0:2;if(fo(t.value))return 1;var r=gu(i,this,e,t,!1);return cn(n,e,r),2}function d0(i,e,t,n){var o=gu(i,this,e,t);return i.defineProperty_(e,o,n)}function u0(i,e){var t=e.kind,n=e.name,o=e.addInitializer,r=this,s=function(c){var f,h,d,u;return Ii((f=(h=r.options_)==null?void 0:h.name)!=null?f:n.toString(),c,(d=(u=r.options_)==null?void 0:u.autoAction)!=null?d:!1)};if(t=="field")return function(l){var c,f=l;return fo(f)||(f=s(f)),(c=r.options_)!=null&&c.bound&&(f=f.bind(this),f.isMobxAction=!0),f};if(t=="method"){var a;return fo(i)||(i=s(i)),(a=this.options_)!=null&&a.bound&&o(function(){var l=this,c=l[n].bind(l);c.isMobxAction=!0,l[n]=c}),i}ne("Cannot apply '"+r.annotationType_+"' to '"+String(n)+"' (kind: "+t+"):"+(`
'`+r.annotationType_+"' can only be used on properties with a function value."))}function p0(i,e,t,n){e.annotationType_,n.value}function gu(i,e,t,n,o){var r,s,a,l,c,f,h;o===void 0&&(o=R.safeDescriptors),p0(i,e,t,n);var d=n.value;if((r=e.options_)!=null&&r.bound){var u;d=d.bind((u=i.proxy_)!=null?u:i.target_)}return{value:Ii((s=(a=e.options_)==null?void 0:a.name)!=null?s:t.toString(),d,(l=(c=e.options_)==null?void 0:c.autoAction)!=null?l:!1,(f=e.options_)!=null&&f.bound?(h=i.proxy_)!=null?h:i.target_:void 0),configurable:o?i.isPlainObject_:!0,enumerable:!1,writable:!o}}function mu(i,e){return{annotationType_:i,options_:e,make_:g0,extend_:m0,decorate_20223_:b0}}function g0(i,e,t,n){var o;if(n===i.target_)return this.extend_(i,e,t,!1)===null?0:2;if((o=this.options_)!=null&&o.bound&&(!Mn(i.target_,e)||!nr(i.target_[e]))&&this.extend_(i,e,t,!1)===null)return 0;if(nr(t.value))return 1;var r=bu(i,this,e,t,!1,!1);return cn(n,e,r),2}function m0(i,e,t,n){var o,r=bu(i,this,e,t,(o=this.options_)==null?void 0:o.bound);return i.defineProperty_(e,r,n)}function b0(i,e){var t,n=e.name,o=e.addInitializer;return nr(i)||(i=ho(i)),(t=this.options_)!=null&&t.bound&&o(function(){var r=this,s=r[n].bind(r);s.isMobXFlow=!0,r[n]=s}),i}function y0(i,e,t,n){e.annotationType_,n.value}function bu(i,e,t,n,o,r){r===void 0&&(r=R.safeDescriptors),y0(i,e,t,n);var s=n.value;if(nr(s)||(s=ho(s)),o){var a;s=s.bind((a=i.proxy_)!=null?a:i.target_),s.isMobXFlow=!0}return{value:s,configurable:r?i.isPlainObject_:!0,enumerable:!1,writable:!r}}function Gc(i,e){return{annotationType_:i,options_:e,make_:v0,extend_:w0,decorate_20223_:x0}}function v0(i,e,t){return this.extend_(i,e,t,!1)===null?0:1}function w0(i,e,t,n){return S0(i,this,e,t),i.defineComputedProperty_(e,_i({},this.options_,{get:t.get,set:t.set}),n)}function x0(i,e){var t=this,n=e.name,o=e.addInitializer;return o(function(){var r=Vi(this)[W],s=_i({},t.options_,{get:i,context:this});s.name||(s.name="ObservableObject."+n.toString()),r.values_.set(n,new Ut(s))}),function(){return this[W].getObservablePropValue_(n)}}function S0(i,e,t,n){e.annotationType_,n.get}function ha(i,e){return{annotationType_:i,options_:e,make_:k0,extend_:C0,decorate_20223_:A0}}function k0(i,e,t){return this.extend_(i,e,t,!1)===null?0:1}function C0(i,e,t,n){var o,r;return _0(i,this),i.defineObservableProperty_(e,t.value,(o=(r=this.options_)==null?void 0:r.enhancer)!=null?o:Mi,n)}function A0(i,e){var t=this,n=e.kind,o=e.name,r=new WeakSet;function s(a,l){var c,f,h=Vi(a)[W],d=new Kn(l,(c=(f=t.options_)==null?void 0:f.enhancer)!=null?c:Mi,"ObservableObject."+o.toString(),!1);h.values_.set(o,d),r.add(a)}if(n=="accessor")return{get:function(){return r.has(this)||s(this,i.get.call(this)),this[W].getObservablePropValue_(o)},set:function(l){return r.has(this)||s(this,l),this[W].setObservablePropValue_(o,l)},init:function(l){return r.has(this)||s(this,l),l}}}function _0(i,e,t,n){e.annotationType_}var M0="true",I0=yu();function yu(i){return{annotationType_:M0,options_:i,make_:O0,extend_:E0,decorate_20223_:P0}}function O0(i,e,t,n){var o,r;if(t.get)return Tn.make_(i,e,t,n);if(t.set){var s=fo(t.set)?t.set:Ii(e.toString(),t.set);return n===i.target_?i.defineProperty_(e,{configurable:R.safeDescriptors?i.isPlainObject_:!0,set:s})===null?0:2:(cn(n,e,{configurable:!0,set:s}),2)}if(n!==i.target_&&typeof t.value=="function"){var a;if(cu(t.value)){var l,c=(l=this.options_)!=null&&l.autoBind?ho.bound:ho;return c.make_(i,e,t,n)}var f=(a=this.options_)!=null&&a.autoBind?tr.bound:tr;return f.make_(i,e,t,n)}var h=((o=this.options_)==null?void 0:o.deep)===!1?F.ref:F;if(typeof t.value=="function"&&(r=this.options_)!=null&&r.autoBind){var d;t.value=t.value.bind((d=i.proxy_)!=null?d:i.target_)}return h.make_(i,e,t,n)}function E0(i,e,t,n){var o,r;if(t.get)return Tn.extend_(i,e,t,n);if(t.set)return i.defineProperty_(e,{configurable:R.safeDescriptors?i.isPlainObject_:!0,set:Ii(e.toString(),t.set)},n);if(typeof t.value=="function"&&(o=this.options_)!=null&&o.autoBind){var s;t.value=t.value.bind((s=i.proxy_)!=null?s:i.target_)}var a=((r=this.options_)==null?void 0:r.deep)===!1?F.ref:F;return a.extend_(i,e,t,n)}function P0(i,e){ne("'"+this.annotationType_+"' cannot be used as a decorator")}var T0="observable",D0="observable.ref",L0="observable.shallow",R0="observable.struct",vu={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(vu);function Fr(i){return i||vu}var xl=ha(T0),N0=ha(D0,{enhancer:fa}),$0=ha(L0,{enhancer:a0}),B0=ha(R0,{enhancer:l0}),wu=fn(xl);function zr(i){return i.deep===!0?Mi:i.deep===!1?fa:F0(i.defaultDecorator)}function V0(i){var e;return i?(e=i.defaultDecorator)!=null?e:yu(i):void 0}function F0(i){var e,t;return i&&(e=(t=i.options_)==null?void 0:t.enhancer)!=null?e:Mi}function xu(i,e,t){if(kr(e))return xl.decorate_20223_(i,e);if(Ai(e)){Sr(i,e,xl);return}return Kc(i)?i:Pn(i)?F.object(i,e,t):Array.isArray(i)?F.array(i,e):Io(i)?F.map(i,e):xn(i)?F.set(i,e):typeof i=="object"&&i!==null?i:F.box(i,e)}su(xu,wu);var z0={box:function(e,t){var n=Fr(t);return new Kn(e,zr(n),n.name,!0,n.equals)},array:function(e,t){var n=Fr(t);return(R.useProxies===!1||n.proxy===!1?Ly:Cy)(e,zr(n),n.name)},map:function(e,t){var n=Fr(t);return new qu(e,zr(n),n.name)},set:function(e,t){var n=Fr(t);return new Wu(e,zr(n),n.name)},object:function(e,t,n){return si(function(){return zu(R.useProxies===!1||n?.proxy===!1?Vi({},n):xy({},n),e,t)})},ref:fn(N0),shallow:fn($0),deep:wu,struct:fn(B0)},F=su(xu,z0),Su="computed",j0="computed.struct",Sl=Gc(Su),H0=Gc(j0,{equals:co.structural}),Tn=function(e,t){if(kr(t))return Sl.decorate_20223_(e,t);if(Ai(t))return Sr(e,t,Sl);if(Pn(e))return fn(Gc(Su,e));var n=Pn(t)?t:{};return n.get=e,n.name||(n.name=e.name||""),new Ut(n)};Object.assign(Tn,Sl);Tn.struct=fn(H0);var Gf,Yf,Os=0,q0=1,W0=(Gf=(Yf=Is(function(){},"name"))==null?void 0:Yf.configurable)!=null?Gf:!1,Kf={value:"action",configurable:!0,writable:!1,enumerable:!1};function Ii(i,e,t,n){t===void 0&&(t=!1);function o(){return ku(i,t,e,n||this,arguments)}return o.isMobxAction=!0,o.toString=function(){return e.toString()},W0&&(Kf.value=i,cn(o,"name",Kf)),o}function ku(i,e,t,n,o){var r=U0(i,e);try{return t.apply(n,o)}catch(s){throw r.error_=s,s}finally{G0(r)}}function U0(i,e,t,n){var o=!1,r=0,s=R.trackingDerivation,a=!e||!s;Et();var l=R.allowStateChanges;a&&(Ni(),l=da(!0));var c=Yc(!0),f={runAsAction_:a,prevDerivation_:s,prevAllowStateChanges_:l,prevAllowStateReads_:c,notifySpy_:o,startTime_:r,actionId_:q0++,parentActionId_:Os};return Os=f.actionId_,f}function G0(i){Os!==i.actionId_&&ne(30),Os=i.parentActionId_,i.error_!==void 0&&(R.suppressReactionErrors=!0),ua(i.prevAllowStateChanges_),Wo(i.prevAllowStateReads_),Pt(),i.runAsAction_&&In(i.prevDerivation_),R.suppressReactionErrors=!1}function Y0(i,e){var t=da(i);try{return e()}finally{ua(t)}}function da(i){var e=R.allowStateChanges;return R.allowStateChanges=i,e}function ua(i){R.allowStateChanges=i}var Kn=(function(i){function e(n,o,r,s,a){var l;return r===void 0&&(r="ObservableValue"),a===void 0&&(a=co.default),l=i.call(this,r)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=o,l.name_=r,l.equals=a,l.value_=o(n,void 0,r),l}uu(e,i);var t=e.prototype;return t.dehanceValue=function(o){return this.dehancer!==void 0?this.dehancer(o):o},t.set=function(o){this.value_,o=this.prepareNewValue_(o),o!==R.UNCHANGED&&this.setNewValue_(o)},t.prepareNewValue_=function(o){if(Mt(this)){var r=It(this,{object:this,type:hn,newValue:o});if(!r)return R.UNCHANGED;o=r.newValue}return o=this.enhancer(o,this.value_,this.name_),this.equals(this.value_,o)?R.UNCHANGED:o},t.setNewValue_=function(o){var r=this.value_;this.value_=o,this.reportChanged(),Ht(this)&&qt(this,{type:hn,object:this,newValue:o,oldValue:r})},t.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},t.intercept_=function(o){return _r(this,o)},t.observe_=function(o,r){return r&&o({observableKind:"value",debugObjectName:this.name_,object:this,type:hn,newValue:this.value_,oldValue:void 0}),Mr(this,o)},t.raw=function(){return this.value_},t.toJSON=function(){return this.get()},t.toString=function(){return this.name_+"["+this.value_+"]"},t.valueOf=function(){return du(this.get())},t[Symbol.toPrimitive]=function(){return this.valueOf()},e})(oi),K0=ii("ObservableValue",Kn),Ut=(function(){function i(t){this.dependenciesState_=oe.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.observers_=new Set,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=oe.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Ps(null),this.name_=void 0,this.triggeredBy_=void 0,this.flags_=0,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Es.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,t.get||ne(31),this.derivation=t.get,this.name_=t.name||"ComputedValue",t.set&&(this.setter_=Ii("ComputedValue-setter",t.set)),this.equals_=t.equals||(t.compareStructural||t.struct?co.structural:co.default),this.scope_=t.context,this.requiresReaction_=t.requiresReaction,this.keepAlive_=!!t.keepAlive}var e=i.prototype;return e.onBecomeStale_=function(){ey(this)},e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(n){return n()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(n){return n()})},e.get=function(){if(this.isComputing&&ne(32,this.name_,this.derivation),R.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)kl(this)&&(this.warnAboutUntrackedRead_(),Et(),this.value_=this.computeValue_(!1),Pt());else if(Eu(this),kl(this)){var n=R.trackingContext;this.keepAlive_&&!n&&(R.trackingContext=this),this.trackAndCompute()&&Z0(this),R.trackingContext=n}var o=this.value_;if(ms(o))throw o.cause;return o},e.set=function(n){if(this.setter_){this.isRunningSetter&&ne(33,this.name_),this.isRunningSetter=!0;try{this.setter_.call(this.scope_,n)}finally{this.isRunningSetter=!1}}else ne(34,this.name_)},e.trackAndCompute=function(){var n=this.value_,o=this.dependenciesState_===oe.NOT_TRACKING_,r=this.computeValue_(!0),s=o||ms(n)||ms(r)||!this.equals_(n,r);return s&&(this.value_=r),s},e.computeValue_=function(n){this.isComputing=!0;var o=da(!1),r;if(n)r=Cu(this,this.derivation,this.scope_);else if(R.disableErrorBoundaries===!0)r=this.derivation.call(this.scope_);else try{r=this.derivation.call(this.scope_)}catch(s){r=new Ps(s)}return ua(o),this.isComputing=!1,r},e.suspend_=function(){this.keepAlive_||(Cl(this),this.value_=void 0)},e.observe_=function(n,o){var r=this,s=!0,a=void 0;return $u(function(){var l=r.get();if(!s||o){var c=Ni();n({observableKind:"computed",debugObjectName:r.name_,type:hn,object:r,newValue:l,oldValue:a}),In(c)}s=!1,a=l})},e.warnAboutUntrackedRead_=function(){},e.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},e.valueOf=function(){return du(this.get())},e[Symbol.toPrimitive]=function(){return this.valueOf()},Oo(i,[{key:"isComputing",get:function(){return mt(this.flags_,i.isComputingMask_)},set:function(n){this.flags_=bt(this.flags_,i.isComputingMask_,n)}},{key:"isRunningSetter",get:function(){return mt(this.flags_,i.isRunningSetterMask_)},set:function(n){this.flags_=bt(this.flags_,i.isRunningSetterMask_,n)}},{key:"isBeingObserved",get:function(){return mt(this.flags_,i.isBeingObservedMask_)},set:function(n){this.flags_=bt(this.flags_,i.isBeingObservedMask_,n)}},{key:"isPendingUnobservation",get:function(){return mt(this.flags_,i.isPendingUnobservationMask_)},set:function(n){this.flags_=bt(this.flags_,i.isPendingUnobservationMask_,n)}},{key:"diffValue",get:function(){return mt(this.flags_,i.diffValueMask_)?1:0},set:function(n){this.flags_=bt(this.flags_,i.diffValueMask_,n===1)}}])})();Ut.isComputingMask_=1;Ut.isRunningSetterMask_=2;Ut.isBeingObservedMask_=4;Ut.isPendingUnobservationMask_=8;Ut.diffValueMask_=16;var Ar=ii("ComputedValue",Ut),oe;(function(i){i[i.NOT_TRACKING_=-1]="NOT_TRACKING_",i[i.UP_TO_DATE_=0]="UP_TO_DATE_",i[i.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",i[i.STALE_=2]="STALE_"})(oe||(oe={}));var Es;(function(i){i[i.NONE=0]="NONE",i[i.LOG=1]="LOG",i[i.BREAK=2]="BREAK"})(Es||(Es={}));var Ps=function(e){this.cause=void 0,this.cause=e};function ms(i){return i instanceof Ps}function kl(i){switch(i.dependenciesState_){case oe.UP_TO_DATE_:return!1;case oe.NOT_TRACKING_:case oe.STALE_:return!0;case oe.POSSIBLY_STALE_:{for(var e=Yc(!0),t=Ni(),n=i.observing_,o=n.length,r=0;r<o;r++){var s=n[r];if(Ar(s)){if(R.disableErrorBoundaries)s.get();else try{s.get()}catch{return In(t),Wo(e),!0}if(i.dependenciesState_===oe.STALE_)return In(t),Wo(e),!0}}return _u(i),In(t),Wo(e),!1}}}function Cu(i,e,t){var n=Yc(!0);_u(i),i.newObserving_=new Array(i.runId_===0?100:i.observing_.length),i.unboundDepsCount_=0,i.runId_=++R.runId;var o=R.trackingDerivation;R.trackingDerivation=i,R.inBatch++;var r;if(R.disableErrorBoundaries===!0)r=e.call(t);else try{r=e.call(t)}catch(s){r=new Ps(s)}return R.inBatch--,R.trackingDerivation=o,X0(i),Wo(n),r}function X0(i){for(var e=i.observing_,t=i.observing_=i.newObserving_,n=oe.UP_TO_DATE_,o=0,r=i.unboundDepsCount_,s=0;s<r;s++){var a=t[s];a.diffValue===0&&(a.diffValue=1,o!==s&&(t[o]=a),o++),a.dependenciesState_>n&&(n=a.dependenciesState_)}for(t.length=o,i.newObserving_=null,r=e.length;r--;){var l=e[r];l.diffValue===0&&Iu(l,i),l.diffValue=0}for(;o--;){var c=t[o];c.diffValue===1&&(c.diffValue=0,Q0(c,i))}n!==oe.UP_TO_DATE_&&(i.dependenciesState_=n,i.onBecomeStale_())}function Cl(i){var e=i.observing_;i.observing_=[];for(var t=e.length;t--;)Iu(e[t],i);i.dependenciesState_=oe.NOT_TRACKING_}function Au(i){var e=Ni();try{return i()}finally{In(e)}}function Ni(){var i=R.trackingDerivation;return R.trackingDerivation=null,i}function In(i){R.trackingDerivation=i}function Yc(i){var e=R.allowStateReads;return R.allowStateReads=i,e}function Wo(i){R.allowStateReads=i}function _u(i){if(i.dependenciesState_!==oe.UP_TO_DATE_){i.dependenciesState_=oe.UP_TO_DATE_;for(var e=i.observing_,t=e.length;t--;)e[t].lowestObserverState_=oe.UP_TO_DATE_}}var bs=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0},ys=!0,Mu=!1,R=(function(){var i=la();return i.__mobxInstanceCount>0&&!i.__mobxGlobals&&(ys=!1),i.__mobxGlobals&&i.__mobxGlobals.version!==new bs().version&&(ys=!1),ys?i.__mobxGlobals?(i.__mobxInstanceCount+=1,i.__mobxGlobals.UNCHANGED||(i.__mobxGlobals.UNCHANGED={}),i.__mobxGlobals):(i.__mobxInstanceCount=1,i.__mobxGlobals=new bs):(setTimeout(function(){Mu||ne(35)},1),new bs)})();function J0(){if((R.pendingReactions.length||R.inBatch||R.isRunningReactions)&&ne(36),Mu=!0,ys){var i=la();--i.__mobxInstanceCount===0&&(i.__mobxGlobals=void 0),R=new bs}}function Q0(i,e){i.observers_.add(e),i.lowestObserverState_>e.dependenciesState_&&(i.lowestObserverState_=e.dependenciesState_)}function Iu(i,e){i.observers_.delete(e),i.observers_.size===0&&Ou(i)}function Ou(i){i.isPendingUnobservation===!1&&(i.isPendingUnobservation=!0,R.pendingUnobservations.push(i))}function Et(){R.inBatch++}function Pt(){if(--R.inBatch===0){Tu();for(var i=R.pendingUnobservations,e=0;e<i.length;e++){var t=i[e];t.isPendingUnobservation=!1,t.observers_.size===0&&(t.isBeingObserved&&(t.isBeingObserved=!1,t.onBUO()),t instanceof Ut&&t.suspend_())}R.pendingUnobservations=[]}}function Eu(i){var e=R.trackingDerivation;return e!==null?(e.runId_!==i.lastAccessedBy_&&(i.lastAccessedBy_=e.runId_,e.newObserving_[e.unboundDepsCount_++]=i,!i.isBeingObserved&&R.trackingContext&&(i.isBeingObserved=!0,i.onBO())),i.isBeingObserved):(i.observers_.size===0&&R.inBatch>0&&Ou(i),!1)}function Pu(i){i.lowestObserverState_!==oe.STALE_&&(i.lowestObserverState_=oe.STALE_,i.observers_.forEach(function(e){e.dependenciesState_===oe.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=oe.STALE_}))}function Z0(i){i.lowestObserverState_!==oe.STALE_&&(i.lowestObserverState_=oe.STALE_,i.observers_.forEach(function(e){e.dependenciesState_===oe.POSSIBLY_STALE_?e.dependenciesState_=oe.STALE_:e.dependenciesState_===oe.UP_TO_DATE_&&(i.lowestObserverState_=oe.UP_TO_DATE_)}))}function ey(i){i.lowestObserverState_===oe.UP_TO_DATE_&&(i.lowestObserverState_=oe.POSSIBLY_STALE_,i.observers_.forEach(function(e){e.dependenciesState_===oe.UP_TO_DATE_&&(e.dependenciesState_=oe.POSSIBLY_STALE_,e.onBecomeStale_())}))}var Dn=(function(){function i(t,n,o,r){t===void 0&&(t="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=oe.NOT_TRACKING_,this.runId_=0,this.unboundDepsCount_=0,this.flags_=0,this.isTracing_=Es.NONE,this.name_=t,this.onInvalidate_=n,this.errorHandler_=o,this.requiresObservable_=r}var e=i.prototype;return e.onBecomeStale_=function(){this.schedule_()},e.schedule_=function(){this.isScheduled||(this.isScheduled=!0,R.pendingReactions.push(this),Tu())},e.runReaction_=function(){if(!this.isDisposed){Et(),this.isScheduled=!1;var n=R.trackingContext;if(R.trackingContext=this,kl(this)){this.isTrackPending=!0;try{this.onInvalidate_()}catch(o){this.reportExceptionInDerivation_(o)}}R.trackingContext=n,Pt()}},e.track=function(n){if(!this.isDisposed){Et(),this.isRunning=!0;var o=R.trackingContext;R.trackingContext=this;var r=Cu(this,n,void 0);R.trackingContext=o,this.isRunning=!1,this.isTrackPending=!1,this.isDisposed&&Cl(this),ms(r)&&this.reportExceptionInDerivation_(r.cause),Pt()}},e.reportExceptionInDerivation_=function(n){var o=this;if(this.errorHandler_){this.errorHandler_(n,this);return}if(R.disableErrorBoundaries)throw n;var r="[mobx] uncaught error in '"+this+"'";R.suppressReactionErrors||console.error(r,n),R.globalReactionErrorHandlers.forEach(function(s){return s(n,o)})},e.dispose=function(){this.isDisposed||(this.isDisposed=!0,this.isRunning||(Et(),Cl(this),Pt()))},e.getDisposer_=function(n){var o=this,r=function s(){o.dispose(),n==null||n.removeEventListener==null||n.removeEventListener("abort",s)};return n==null||n.addEventListener==null||n.addEventListener("abort",r),r[W]=this,"dispose"in Symbol&&typeof Symbol.dispose=="symbol"&&(r[Symbol.dispose]=r),r},e.toString=function(){return"Reaction["+this.name_+"]"},e.trace=function(n){},Oo(i,[{key:"isDisposed",get:function(){return mt(this.flags_,i.isDisposedMask_)},set:function(n){this.flags_=bt(this.flags_,i.isDisposedMask_,n)}},{key:"isScheduled",get:function(){return mt(this.flags_,i.isScheduledMask_)},set:function(n){this.flags_=bt(this.flags_,i.isScheduledMask_,n)}},{key:"isTrackPending",get:function(){return mt(this.flags_,i.isTrackPendingMask_)},set:function(n){this.flags_=bt(this.flags_,i.isTrackPendingMask_,n)}},{key:"isRunning",get:function(){return mt(this.flags_,i.isRunningMask_)},set:function(n){this.flags_=bt(this.flags_,i.isRunningMask_,n)}},{key:"diffValue",get:function(){return mt(this.flags_,i.diffValueMask_)?1:0},set:function(n){this.flags_=bt(this.flags_,i.diffValueMask_,n===1)}}])})();Dn.isDisposedMask_=1;Dn.isScheduledMask_=2;Dn.isTrackPendingMask_=4;Dn.isRunningMask_=8;Dn.diffValueMask_=16;var ty=100,Al=function(e){return e()};function Tu(){R.inBatch>0||R.isRunningReactions||Al(ny)}function ny(){R.isRunningReactions=!0;for(var i=R.pendingReactions,e=0;i.length>0;){++e===ty&&(console.error("[mobx] cycle in reaction: "+i[0]),i.splice(0));for(var t=i.splice(0),n=0,o=t.length;n<o;n++)t[n].runReaction_()}R.isRunningReactions=!1}var Ts=ii("Reaction",Dn);function iy(i){var e=Al;Al=function(n){return i(function(){return e(n)})}}function Uo(){return!1}function oy(i){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var Du="action",ry="action.bound",Lu="autoAction",sy="autoAction.bound",Ru="<unnamed action>",_l=Cr(Du),ay=Cr(ry,{bound:!0}),Ml=Cr(Lu,{autoAction:!0}),ly=Cr(sy,{autoAction:!0,bound:!0});function Nu(i){var e=function(n,o){if(Wt(n))return Ii(n.name||Ru,n,i);if(Wt(o))return Ii(n,o,i);if(kr(o))return(i?Ml:_l).decorate_20223_(n,o);if(Ai(o))return Sr(n,o,i?Ml:_l);if(Ai(n))return fn(Cr(i?Lu:Du,{name:n,autoAction:i}))};return e}var q=Nu(!1);Object.assign(q,_l);var tr=Nu(!0);Object.assign(tr,Ml);q.bound=fn(ay);tr.bound=fn(ly);function Y(i){return ku(i.name||Ru,!1,i,this,void 0)}function fo(i){return Wt(i)&&i.isMobxAction===!0}function $u(i,e){var t,n,o,r;e===void 0&&(e=Wc);var s=(t=(n=e)==null?void 0:n.name)!=null?t:"Autorun",a=!e.scheduler&&!e.delay,l;if(a)l=new Dn(s,function(){this.track(h)},e.onError,e.requiresObservable);else{var c=Bu(e),f=!1;l=new Dn(s,function(){f||(f=!0,c(function(){f=!1,l.isDisposed||l.track(h)}))},e.onError,e.requiresObservable)}function h(){i(l)}return(o=e)!=null&&(o=o.signal)!=null&&o.aborted||l.schedule_(),l.getDisposer_((r=e)==null?void 0:r.signal)}var cy=function(e){return e()};function Bu(i){return i.scheduler?i.scheduler:i.delay?function(e){return setTimeout(e,i.delay)}:cy}function un(i,e,t){var n,o,r;t===void 0&&(t=Wc);var s=(n=t.name)!=null?n:"Reaction",a=q(s,t.onError?fy(t.onError,e):e),l=!t.scheduler&&!t.delay,c=Bu(t),f=!0,h=!1,d,u=t.compareStructural?co.structural:t.equals||co.default,p=new Dn(s,function(){f||l?g():h||(h=!0,c(g))},t.onError,t.requiresObservable);function g(){if(h=!1,!p.isDisposed){var m=!1,b=d;p.track(function(){var y=Y0(!1,function(){return i(p)});m=f||!u(d,y),d=y}),(f&&t.fireImmediately||!f&&m)&&a(d,b,p),f=!1}}return(o=t)!=null&&(o=o.signal)!=null&&o.aborted||p.schedule_(),p.getDisposer_((r=t)==null?void 0:r.signal)}function fy(i,e){return function(){try{return e.apply(this,arguments)}catch(t){i.call(this,t)}}}var hy="onBO",dy="onBUO";function uy(i,e,t){return Fu(hy,i,e,t)}function Vu(i,e,t){return Fu(dy,i,e,t)}function Fu(i,e,t,n){var o=Il(e),r=Wt(n)?n:t,s=i+"L";return o[s]?o[s].add(r):o[s]=new Set([r]),function(){var a=o[s];a&&(a.delete(r),a.size===0&&delete o[s])}}var py="never",Na="always";function gy(i){i.isolateGlobalState===!0&&J0();var e=i.useProxies;e!==void 0&&(R.useProxies=e===Na?!0:e===py?!1:typeof Proxy<"u"),e==="ifavailable"&&(R.verifyProxies=!0);{var t=Na;R.enforceActions=t,R.allowStateChanges=!(t===!0||t===Na)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(n){n in i&&(R[n]=!!i[n])}),R.allowStateReads=!R.observableRequiresReaction,i.reactionScheduler&&iy(i.reactionScheduler)}function zu(i,e,t,n){var o=Zb(e);return si(function(){var r=Vi(i,n)[W];lo(o).forEach(function(s){r.extend_(s,o[s],t&&s in t?t[s]:!0)})}),i}var my=0;function ju(){this.message="FLOW_CANCELLED"}ju.prototype=Object.create(Error.prototype);var $a=mu("flow"),by=mu("flow.bound",{bound:!0}),ho=Object.assign(function(e,t){if(kr(t))return $a.decorate_20223_(e,t);if(Ai(t))return Sr(e,t,$a);var n=e,o=n.name||"<unnamed flow>",r=function(){var a=this,l=arguments,c=++my,f=q(o+" - runid: "+c+" - init",n).apply(a,l),h,d=void 0,u=new Promise(function(p,g){var m=0;h=g;function b(v){d=void 0;var C;try{C=q(o+" - runid: "+c+" - yield "+m++,f.next).call(f,v)}catch(S){return g(S)}x(C)}function y(v){d=void 0;var C;try{C=q(o+" - runid: "+c+" - yield "+m++,f.throw).call(f,v)}catch(S){return g(S)}x(C)}function x(v){if(Wt(v?.then)){v.then(x,g);return}return v.done?p(v.value):(d=Promise.resolve(v.value),d.then(b,y))}b(void 0)});return u.cancel=q(o+" - runid: "+c+" - cancel",function(){try{d&&Xf(d);var p=f.return(void 0),g=Promise.resolve(p.value);g.then(Ki,Ki),Xf(g),h(new ju)}catch(m){h(m)}}),u};return r.isMobXFlow=!0,r},$a);ho.bound=fn(by);function Xf(i){Wt(i.cancel)&&i.cancel()}function nr(i){return i?.isMobXFlow===!0}function yy(i,e){return i?Or(i)||!!i[W]||Uc(i)||Ts(i)||Ar(i):!1}function Kc(i){return yy(i)}function vy(i){if(Or(i))return i[W].ownKeys_();ne(38)}function jr(i,e,t){return i.set(e,t),t}function Gi(i,e){if(i==null||typeof i!="object"||i instanceof Date||!Kc(i))return i;if(K0(i)||Ar(i))return Gi(i.get(),e);if(e.has(i))return e.get(i);if(Ir(i)){var t=jr(e,i,new Array(i.length));return i.forEach(function(s,a){t[a]=Gi(s,e)}),t}if(jt(i)){var n=jr(e,i,new Set);return i.forEach(function(s){n.add(Gi(s,e))}),n}if(ri(i)){var o=jr(e,i,new Map);return i.forEach(function(s,a){o.set(a,Gi(s,e))}),o}else{var r=jr(e,i,{});return vy(i).forEach(function(s){wr.propertyIsEnumerable.call(i,s)&&(r[s]=Gi(i[s],e))}),r}}function vi(i,e){return Gi(i,new Map)}function Sn(i,e){e===void 0&&(e=void 0),Et();try{return i.apply(e)}finally{Pt()}}function Hi(i){return i[W]}var wy={has:function(e,t){return Hi(e).has_(t)},get:function(e,t){return Hi(e).get_(t)},set:function(e,t,n){var o;return Ai(t)?(o=Hi(e).set_(t,n,!0))!=null?o:!0:!1},deleteProperty:function(e,t){var n;return Ai(t)?(n=Hi(e).delete_(t,!0))!=null?n:!0:!1},defineProperty:function(e,t,n){var o;return(o=Hi(e).defineProperty_(t,n))!=null?o:!0},ownKeys:function(e){return Hi(e).ownKeys_()},preventExtensions:function(e){ne(13)}};function xy(i,e){var t,n;return au(),i=Vi(i,e),(n=(t=i[W]).proxy_)!=null?n:t.proxy_=new Proxy(i,wy)}function Mt(i){return i.interceptors_!==void 0&&i.interceptors_.length>0}function _r(i,e){var t=i.interceptors_||(i.interceptors_=[]);return t.push(e),lu(function(){var n=t.indexOf(e);n!==-1&&t.splice(n,1)})}function It(i,e){var t=Ni();try{for(var n=[].concat(i.interceptors_||[]),o=0,r=n.length;o<r&&(e=n[o](e),e&&!e.type&&ne(14),!!e);o++);return e}finally{In(t)}}function Ht(i){return i.changeListeners_!==void 0&&i.changeListeners_.length>0}function Mr(i,e){var t=i.changeListeners_||(i.changeListeners_=[]);return t.push(e),lu(function(){var n=t.indexOf(e);n!==-1&&t.splice(n,1)})}function qt(i,e){var t=Ni(),n=i.changeListeners_;if(n){n=n.slice();for(var o=0,r=n.length;o<r;o++)n[o](e);In(t)}}function $i(i,e,t){return si(function(){var n,o=Vi(i,t)[W];(n=e)!=null||(e=o0(i)),lo(e).forEach(function(r){return o.make_(r,e[r])})}),i}var Ba=Symbol("mobx-keys");function Bi(i,e,t){return Pn(i)?zu(i,i,e,t):(si(function(){var n=Vi(i,t)[W];if(!i[Ba]){var o=Object.getPrototypeOf(i),r=new Set([].concat(lo(i),lo(o)));r.delete("constructor"),r.delete(W),xr(o,Ba,r)}i[Ba].forEach(function(s){return n.make_(s,e&&s in e?e[s]:!0)})}),i)}var Jf="splice",hn="update",Sy=1e4,ky={get:function(e,t){var n=e[W];return t===W?n:t==="length"?n.getArrayLength_():typeof t=="string"&&!isNaN(t)?n.get_(parseInt(t)):Mn(Ds,t)?Ds[t]:e[t]},set:function(e,t,n){var o=e[W];return t==="length"&&o.setArrayLength_(n),typeof t=="symbol"||isNaN(t)?e[t]=n:o.set_(parseInt(t),n),!0},preventExtensions:function(){ne(15)}},Xc=(function(){function i(t,n,o,r){t===void 0&&(t="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=o,this.legacyMode_=r,this.atom_=new oi(t),this.enhancer_=function(s,a){return n(s,a,"ObservableArray[..]")}}var e=i.prototype;return e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.dehanceValues_=function(n){return this.dehancer!==void 0&&n.length>0?n.map(this.dehancer):n},e.intercept_=function(n){return _r(this,n)},e.observe_=function(n,o){return o===void 0&&(o=!1),o&&n({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),Mr(this,n)},e.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},e.setArrayLength_=function(n){(typeof n!="number"||isNaN(n)||n<0)&&ne("Out of range: "+n);var o=this.values_.length;if(n!==o)if(n>o){for(var r=new Array(n-o),s=0;s<n-o;s++)r[s]=void 0;this.spliceWithArray_(o,0,r)}else this.spliceWithArray_(n,o-n)},e.updateArrayLength_=function(n,o){n!==this.lastKnownLength_&&ne(16),this.lastKnownLength_+=o,this.legacyMode_&&o>0&&Ku(n+o+1)},e.spliceWithArray_=function(n,o,r){var s=this;this.atom_;var a=this.values_.length;if(n===void 0?n=0:n>a?n=a:n<0&&(n=Math.max(0,a+n)),arguments.length===1?o=a-n:o==null?o=0:o=Math.max(0,Math.min(o,a-n)),r===void 0&&(r=vl),Mt(this)){var l=It(this,{object:this.proxy_,type:Jf,index:n,removedCount:o,added:r});if(!l)return vl;o=l.removedCount,r=l.added}if(r=r.length===0?r:r.map(function(h){return s.enhancer_(h,void 0)}),this.legacyMode_){var c=r.length-o;this.updateArrayLength_(a,c)}var f=this.spliceItemsIntoValues_(n,o,r);return(o!==0||r.length!==0)&&this.notifyArraySplice_(n,r,f),this.dehanceValues_(f)},e.spliceItemsIntoValues_=function(n,o,r){if(r.length<Sy){var s;return(s=this.values_).splice.apply(s,[n,o].concat(r))}else{var a=this.values_.slice(n,n+o),l=this.values_.slice(n+o);this.values_.length+=r.length-o;for(var c=0;c<r.length;c++)this.values_[n+c]=r[c];for(var f=0;f<l.length;f++)this.values_[n+r.length+f]=l[f];return a}},e.notifyArrayChildUpdate_=function(n,o,r){var s=!this.owned_&&Uo(),a=Ht(this),l=a||s?{observableKind:"array",object:this.proxy_,type:hn,debugObjectName:this.atom_.name_,index:n,newValue:o,oldValue:r}:null;this.atom_.reportChanged(),a&&qt(this,l)},e.notifyArraySplice_=function(n,o,r){var s=!this.owned_&&Uo(),a=Ht(this),l=a||s?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:Jf,index:n,removed:r,added:o,removedCount:r.length,addedCount:o.length}:null;this.atom_.reportChanged(),a&&qt(this,l)},e.get_=function(n){if(this.legacyMode_&&n>=this.values_.length){console.warn("[mobx] Out of bounds read: "+n);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[n])},e.set_=function(n,o){var r=this.values_;if(this.legacyMode_&&n>r.length&&ne(17,n,r.length),n<r.length){this.atom_;var s=r[n];if(Mt(this)){var a=It(this,{type:hn,object:this.proxy_,index:n,newValue:o});if(!a)return;o=a.newValue}o=this.enhancer_(o,s);var l=o!==s;l&&(r[n]=o,this.notifyArrayChildUpdate_(n,o,s))}else{for(var c=new Array(n+1-r.length),f=0;f<c.length-1;f++)c[f]=void 0;c[c.length-1]=o,this.spliceWithArray_(r.length,0,c)}},i})();function Cy(i,e,t,n){return t===void 0&&(t="ObservableArray"),n===void 0&&(n=!1),au(),si(function(){var o=new Xc(t,e,n,!1);fu(o.values_,W,o);var r=new Proxy(o.values_,ky);return o.proxy_=r,i&&i.length&&o.spliceWithArray_(0,0,i),r})}var Ds={clear:function(){return this.splice(0)},replace:function(e){var t=this[W];return t.spliceWithArray_(0,t.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];var s=this[W];switch(arguments.length){case 0:return[];case 1:return s.spliceWithArray_(e);case 2:return s.spliceWithArray_(e,t)}return s.spliceWithArray_(e,t,o)},spliceWithArray:function(e,t,n){return this[W].spliceWithArray_(e,t,n)},push:function(){for(var e=this[W],t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.spliceWithArray_(e.values_.length,0,n),e.values_.length},pop:function(){return this.splice(Math.max(this[W].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[W],t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.spliceWithArray_(0,0,n),e.values_.length},reverse:function(){return R.trackingDerivation&&ne(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){R.trackingDerivation&&ne(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var t=this[W],n=t.dehanceValues_(t.values_).indexOf(e);return n>-1?(this.splice(n,1),!0):!1}};be("at",xt);be("concat",xt);be("flat",xt);be("includes",xt);be("indexOf",xt);be("join",xt);be("lastIndexOf",xt);be("slice",xt);be("toString",xt);be("toLocaleString",xt);be("toSorted",xt);be("toSpliced",xt);be("with",xt);be("every",Xt);be("filter",Xt);be("find",Xt);be("findIndex",Xt);be("findLast",Xt);be("findLastIndex",Xt);be("flatMap",Xt);be("forEach",Xt);be("map",Xt);be("some",Xt);be("toReversed",Xt);be("reduce",Hu);be("reduceRight",Hu);function be(i,e){typeof Array.prototype[i]=="function"&&(Ds[i]=e(i))}function xt(i){return function(){var e=this[W];e.atom_.reportObserved();var t=e.dehanceValues_(e.values_);return t[i].apply(t,arguments)}}function Xt(i){return function(e,t){var n=this,o=this[W];o.atom_.reportObserved();var r=o.dehanceValues_(o.values_);return r[i](function(s,a){return e.call(t,s,a,n)})}}function Hu(i){return function(){var e=this,t=this[W];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_),o=arguments[0];return arguments[0]=function(r,s,a){return o(r,s,a,e)},n[i].apply(n,arguments)}}var Ay=ii("ObservableArrayAdministration",Xc);function Ir(i){return ca(i)&&Ay(i[W])}var _y={},qn="add",Ls="delete",qu=(function(){function i(t,n,o){var r=this;n===void 0&&(n=Mi),o===void 0&&(o="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[W]=_y,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=n,this.name_=o,Wt(Map)||ne(18),si(function(){r.keysAtom_=pu("ObservableMap.keys()"),r.data_=new Map,r.hasMap_=new Map,t&&r.merge(t)})}var e=i.prototype;return e.has_=function(n){return this.data_.has(n)},e.has=function(n){var o=this;if(!R.trackingDerivation)return this.has_(n);var r=this.hasMap_.get(n);if(!r){var s=r=new Kn(this.has_(n),fa,"ObservableMap.key?",!1);this.hasMap_.set(n,s),Vu(s,function(){return o.hasMap_.delete(n)})}return r.get()},e.set=function(n,o){var r=this.has_(n);if(Mt(this)){var s=It(this,{type:r?hn:qn,object:this,newValue:o,name:n});if(!s)return this;o=s.newValue}return r?this.updateValue_(n,o):this.addValue_(n,o),this},e.delete=function(n){var o=this;if(this.keysAtom_,Mt(this)){var r=It(this,{type:Ls,object:this,name:n});if(!r)return!1}if(this.has_(n)){var s=Uo(),a=Ht(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:Ls,object:this,oldValue:this.data_.get(n).value_,name:n}:null;return Sn(function(){var c;o.keysAtom_.reportChanged(),(c=o.hasMap_.get(n))==null||c.setNewValue_(!1);var f=o.data_.get(n);f.setNewValue_(void 0),o.data_.delete(n)}),a&&qt(this,l),!0}return!1},e.updateValue_=function(n,o){var r=this.data_.get(n);if(o=r.prepareNewValue_(o),o!==R.UNCHANGED){var s=Uo(),a=Ht(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:hn,object:this,oldValue:r.value_,name:n,newValue:o}:null;r.setNewValue_(o),a&&qt(this,l)}},e.addValue_=function(n,o){var r=this;this.keysAtom_,Sn(function(){var c,f=new Kn(o,r.enhancer_,"ObservableMap.key",!1);r.data_.set(n,f),o=f.value_,(c=r.hasMap_.get(n))==null||c.setNewValue_(!0),r.keysAtom_.reportChanged()});var s=Uo(),a=Ht(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:qn,object:this,name:n,newValue:o}:null;a&&qt(this,l)},e.get=function(n){return this.has(n)?this.dehanceValue_(this.data_.get(n).get()):this.dehanceValue_(void 0)},e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},e.values=function(){var n=this,o=this.keys();return Qf({next:function(){var s=o.next(),a=s.done,l=s.value;return{done:a,value:a?void 0:n.get(l)}}})},e.entries=function(){var n=this,o=this.keys();return Qf({next:function(){var s=o.next(),a=s.done,l=s.value;return{done:a,value:a?void 0:[l,n.get(l)]}}})},e[Symbol.iterator]=function(){return this.entries()},e.forEach=function(n,o){for(var r=Xi(this),s;!(s=r()).done;){var a=s.value,l=a[0],c=a[1];n.call(o,c,l,this)}},e.merge=function(n){var o=this;return ri(n)&&(n=new Map(n)),Sn(function(){Pn(n)?Qb(n).forEach(function(r){return o.set(r,n[r])}):Array.isArray(n)?n.forEach(function(r){var s=r[0],a=r[1];return o.set(s,a)}):Io(n)?(Jb(n)||ne(19,n),n.forEach(function(r,s){return o.set(s,r)})):n!=null&&ne(20,n)}),this},e.clear=function(){var n=this;Sn(function(){Au(function(){for(var o=Xi(n.keys()),r;!(r=o()).done;){var s=r.value;n.delete(s)}})})},e.replace=function(n){var o=this;return Sn(function(){for(var r=My(n),s=new Map,a=!1,l=Xi(o.data_.keys()),c;!(c=l()).done;){var f=c.value;if(!r.has(f)){var h=o.delete(f);if(h)a=!0;else{var d=o.data_.get(f);s.set(f,d)}}}for(var u=Xi(r.entries()),p;!(p=u()).done;){var g=p.value,m=g[0],b=g[1],y=o.data_.has(m);if(o.set(m,b),o.data_.has(m)){var x=o.data_.get(m);s.set(m,x),y||(a=!0)}}if(!a)if(o.data_.size!==s.size)o.keysAtom_.reportChanged();else for(var v=o.data_.keys(),C=s.keys(),S=v.next(),k=C.next();!S.done;){if(S.value!==k.value){o.keysAtom_.reportChanged();break}S=v.next(),k=C.next()}o.data_=s}),this},e.toString=function(){return"[object ObservableMap]"},e.toJSON=function(){return Array.from(this)},e.observe_=function(n,o){return Mr(this,n)},e.intercept_=function(n){return _r(this,n)},Oo(i,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Symbol.toStringTag,get:function(){return"Map"}}])})(),ri=ii("ObservableMap",qu);function Qf(i){return i[Symbol.toStringTag]="MapIterator",Qc(i)}function My(i){if(Io(i)||ri(i))return i;if(Array.isArray(i))return new Map(i);if(Pn(i)){var e=new Map;for(var t in i)e.set(t,i[t]);return e}else return ne(21,i)}var Iy={},Wu=(function(){function i(t,n,o){var r=this;n===void 0&&(n=Mi),o===void 0&&(o="ObservableSet"),this.name_=void 0,this[W]=Iy,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=o,Wt(Set)||ne(22),this.enhancer_=function(s,a){return n(s,a,o)},si(function(){r.atom_=pu(r.name_),t&&r.replace(t)})}var e=i.prototype;return e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.clear=function(){var n=this;Sn(function(){Au(function(){for(var o=Xi(n.data_.values()),r;!(r=o()).done;){var s=r.value;n.delete(s)}})})},e.forEach=function(n,o){for(var r=Xi(this),s;!(s=r()).done;){var a=s.value;n.call(o,a,a,this)}},e.add=function(n){var o=this;if(this.atom_,Mt(this)){var r=It(this,{type:qn,object:this,newValue:n});if(!r)return this;n=r.newValue}if(!this.has(n)){Sn(function(){o.data_.add(o.enhancer_(n,void 0)),o.atom_.reportChanged()});var s=!1,a=Ht(this),l=a||s?{observableKind:"set",debugObjectName:this.name_,type:qn,object:this,newValue:n}:null;a&&qt(this,l)}return this},e.delete=function(n){var o=this;if(Mt(this)){var r=It(this,{type:Ls,object:this,oldValue:n});if(!r)return!1}if(this.has(n)){var s=!1,a=Ht(this),l=a||s?{observableKind:"set",debugObjectName:this.name_,type:Ls,object:this,oldValue:n}:null;return Sn(function(){o.atom_.reportChanged(),o.data_.delete(n)}),a&&qt(this,l),!0}return!1},e.has=function(n){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(n))},e.entries=function(){var n=this.values();return Zf({next:function(){var r=n.next(),s=r.value,a=r.done;return a?{value:void 0,done:a}:{value:[s,s],done:a}}})},e.keys=function(){return this.values()},e.values=function(){this.atom_.reportObserved();var n=this,o=this.data_.values();return Zf({next:function(){var s=o.next(),a=s.value,l=s.done;return l?{value:void 0,done:l}:{value:n.dehanceValue_(a),done:l}}})},e.intersection=function(n){if(xn(n)&&!jt(n))return n.intersection(this);var o=new Set(this);return o.intersection(n)},e.union=function(n){if(xn(n)&&!jt(n))return n.union(this);var o=new Set(this);return o.union(n)},e.difference=function(n){return new Set(this).difference(n)},e.symmetricDifference=function(n){if(xn(n)&&!jt(n))return n.symmetricDifference(this);var o=new Set(this);return o.symmetricDifference(n)},e.isSubsetOf=function(n){return new Set(this).isSubsetOf(n)},e.isSupersetOf=function(n){return new Set(this).isSupersetOf(n)},e.isDisjointFrom=function(n){if(xn(n)&&!jt(n))return n.isDisjointFrom(this);var o=new Set(this);return o.isDisjointFrom(n)},e.replace=function(n){var o=this;return jt(n)&&(n=new Set(n)),Sn(function(){Array.isArray(n)?(o.clear(),n.forEach(function(r){return o.add(r)})):xn(n)?(o.clear(),n.forEach(function(r){return o.add(r)})):n!=null&&ne("Cannot initialize set from "+n)}),this},e.observe_=function(n,o){return Mr(this,n)},e.intercept_=function(n){return _r(this,n)},e.toJSON=function(){return Array.from(this)},e.toString=function(){return"[object ObservableSet]"},e[Symbol.iterator]=function(){return this.values()},Oo(i,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:Symbol.toStringTag,get:function(){return"Set"}}])})(),jt=ii("ObservableSet",Wu);function Zf(i){return i[Symbol.toStringTag]="SetIterator",Qc(i)}var eh=Object.create(null),th="remove",Uu=(function(){function i(t,n,o,r){n===void 0&&(n=new Map),r===void 0&&(r=I0),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=t,this.values_=n,this.name_=o,this.defaultAnnotation_=r,this.keysAtom_=new oi("ObservableObject.keys"),this.isPlainObject_=Pn(this.target_)}var e=i.prototype;return e.getObservablePropValue_=function(n){return this.values_.get(n).get()},e.setObservablePropValue_=function(n,o){var r=this.values_.get(n);if(r instanceof Ut)return r.set(o),!0;if(Mt(this)){var s=It(this,{type:hn,object:this.proxy_||this.target_,name:n,newValue:o});if(!s)return null;o=s.newValue}if(o=r.prepareNewValue_(o),o!==R.UNCHANGED){var a=Ht(this),l=!1,c=a||l?{type:hn,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:r.value_,name:n,newValue:o}:null;r.setNewValue_(o),a&&qt(this,c)}return!0},e.get_=function(n){return R.trackingDerivation&&!Mn(this.target_,n)&&this.has_(n),this.target_[n]},e.set_=function(n,o,r){return r===void 0&&(r=!1),Mn(this.target_,n)?this.values_.has(n)?this.setObservablePropValue_(n,o):r?Reflect.set(this.target_,n,o):(this.target_[n]=o,!0):this.extend_(n,{value:o,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,r)},e.has_=function(n){if(!R.trackingDerivation)return n in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var o=this.pendingKeys_.get(n);return o||(o=new Kn(n in this.target_,fa,"ObservableObject.key?",!1),this.pendingKeys_.set(n,o)),o.get()},e.make_=function(n,o){if(o===!0&&(o=this.defaultAnnotation_),o!==!1){if(!(n in this.target_)){var r;if((r=this.target_[ln])!=null&&r[n])return;ne(1,o.annotationType_,this.name_+"."+n.toString())}for(var s=this.target_;s&&s!==wr;){var a=Is(s,n);if(a){var l=o.make_(this,n,a,s);if(l===0)return;if(l===1)break}s=Object.getPrototypeOf(s)}ih(this,o,n)}},e.extend_=function(n,o,r,s){if(s===void 0&&(s=!1),r===!0&&(r=this.defaultAnnotation_),r===!1)return this.defineProperty_(n,o,s);var a=r.extend_(this,n,o,s);return a&&ih(this,r,n),a},e.defineProperty_=function(n,o,r){r===void 0&&(r=!1),this.keysAtom_;try{Et();var s=this.delete_(n);if(!s)return s;if(Mt(this)){var a=It(this,{object:this.proxy_||this.target_,name:n,type:qn,newValue:o.value});if(!a)return null;var l=a.newValue;o.value!==l&&(o=_i({},o,{value:l}))}if(r){if(!Reflect.defineProperty(this.target_,n,o))return!1}else cn(this.target_,n,o);this.notifyPropertyAddition_(n,o.value)}finally{Pt()}return!0},e.defineObservableProperty_=function(n,o,r,s){s===void 0&&(s=!1),this.keysAtom_;try{Et();var a=this.delete_(n);if(!a)return a;if(Mt(this)){var l=It(this,{object:this.proxy_||this.target_,name:n,type:qn,newValue:o});if(!l)return null;o=l.newValue}var c=nh(n),f={configurable:R.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:c.get,set:c.set};if(s){if(!Reflect.defineProperty(this.target_,n,f))return!1}else cn(this.target_,n,f);var h=new Kn(o,r,"ObservableObject.key",!1);this.values_.set(n,h),this.notifyPropertyAddition_(n,h.value_)}finally{Pt()}return!0},e.defineComputedProperty_=function(n,o,r){r===void 0&&(r=!1),this.keysAtom_;try{Et();var s=this.delete_(n);if(!s)return s;if(Mt(this)){var a=It(this,{object:this.proxy_||this.target_,name:n,type:qn,newValue:void 0});if(!a)return null}o.name||(o.name="ObservableObject.key"),o.context=this.proxy_||this.target_;var l=nh(n),c={configurable:R.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(r){if(!Reflect.defineProperty(this.target_,n,c))return!1}else cn(this.target_,n,c);this.values_.set(n,new Ut(o)),this.notifyPropertyAddition_(n,void 0)}finally{Pt()}return!0},e.delete_=function(n,o){if(o===void 0&&(o=!1),this.keysAtom_,!Mn(this.target_,n))return!0;if(Mt(this)){var r=It(this,{object:this.proxy_||this.target_,name:n,type:th});if(!r)return null}try{var s;Et();var a=Ht(this),l=!1,c=this.values_.get(n),f=void 0;if(!c&&(a||l)){var h;f=(h=Is(this.target_,n))==null?void 0:h.value}if(o){if(!Reflect.deleteProperty(this.target_,n))return!1}else delete this.target_[n];if(c&&(this.values_.delete(n),c instanceof Kn&&(f=c.value_),Pu(c)),this.keysAtom_.reportChanged(),(s=this.pendingKeys_)==null||(s=s.get(n))==null||s.set(n in this.target_),a||l){var d={type:th,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:f,name:n};a&&qt(this,d)}}finally{Pt()}return!0},e.observe_=function(n,o){return Mr(this,n)},e.intercept_=function(n){return _r(this,n)},e.notifyPropertyAddition_=function(n,o){var r,s=Ht(this),a=!1;if(s||a){var l=s||a?{type:qn,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:n,newValue:o}:null;s&&qt(this,l)}(r=this.pendingKeys_)==null||(r=r.get(n))==null||r.set(!0),this.keysAtom_.reportChanged()},e.ownKeys_=function(){return this.keysAtom_.reportObserved(),lo(this.target_)},e.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},i})();function Vi(i,e){var t;if(Mn(i,W))return i;var n=(t=e?.name)!=null?t:"ObservableObject",o=new Uu(i,new Map,String(n),V0(e));return xr(i,W,o),i}var Oy=ii("ObservableObjectAdministration",Uu);function nh(i){return eh[i]||(eh[i]={get:function(){return this[W].getObservablePropValue_(i)},set:function(t){return this[W].setObservablePropValue_(i,t)}})}function Or(i){return ca(i)?Oy(i[W]):!1}function ih(i,e,t){var n;(n=i.target_[ln])==null||delete n[t]}var Ey=Yu(0),Py=(function(){var i=!1,e={};return Object.defineProperty(e,"0",{set:function(){i=!0}}),Object.create(e)[0]=1,i===!1})(),Va=0,Gu=function(){};function Ty(i,e){Object.setPrototypeOf?Object.setPrototypeOf(i.prototype,e):i.prototype.__proto__!==void 0?i.prototype.__proto__=e:i.prototype=e}Ty(Gu,Array.prototype);var Jc=(function(i){function e(n,o,r,s){var a;return r===void 0&&(r="ObservableArray"),s===void 0&&(s=!1),a=i.call(this)||this,si(function(){var l=new Xc(r,o,s,!0);l.proxy_=a,fu(a,W,l),n&&n.length&&a.spliceWithArray(0,0,n),Py&&Object.defineProperty(a,"0",Ey)}),a}uu(e,i);var t=e.prototype;return t.concat=function(){this[W].atom_.reportObserved();for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return Array.prototype.concat.apply(this.slice(),r.map(function(a){return Ir(a)?a.slice():a}))},t[Symbol.iterator]=function(){var n=this,o=0;return Qc({next:function(){return o<n.length?{value:n[o++],done:!1}:{done:!0,value:void 0}}})},Oo(e,[{key:"length",get:function(){return this[W].getArrayLength_()},set:function(o){this[W].setArrayLength_(o)}},{key:Symbol.toStringTag,get:function(){return"Array"}}])})(Gu);Object.entries(Ds).forEach(function(i){var e=i[0],t=i[1];e!=="concat"&&xr(Jc.prototype,e,t)});function Yu(i){return{enumerable:!1,configurable:!0,get:function(){return this[W].get_(i)},set:function(t){this[W].set_(i,t)}}}function Dy(i){cn(Jc.prototype,""+i,Yu(i))}function Ku(i){if(i>Va){for(var e=Va;e<i+100;e++)Dy(e);Va=i}}Ku(1e3);function Ly(i,e,t){return new Jc(i,e,t)}function Il(i,e){if(typeof i=="object"&&i!==null){if(Ir(i))return e!==void 0&&ne(23),i[W].atom_;if(jt(i))return i.atom_;if(ri(i)){if(e===void 0)return i.keysAtom_;var t=i.data_.get(e)||i.hasMap_.get(e);return t||ne(25,e,Ol(i)),t}if(Or(i)){if(!e)return ne(26);var n=i[W].values_.get(e);return n||ne(27,e,Ol(i)),n}if(Uc(i)||Ar(i)||Ts(i))return i}else if(Wt(i)&&Ts(i[W]))return i[W];ne(28)}function Ry(i,e){if(i||ne(29),Uc(i)||Ar(i)||Ts(i)||ri(i)||jt(i))return i;if(i[W])return i[W];ne(24,i)}function Ol(i,e){var t;if(e!==void 0)t=Il(i,e);else{if(fo(i))return i.name;Or(i)||ri(i)||jt(i)?t=Ry(i):t=Il(i)}return t.name_}function si(i){var e=Ni(),t=da(!0);Et();try{return i()}finally{Pt(),ua(t),In(e)}}var oh=wr.toString;function Xu(i,e,t){return t===void 0&&(t=-1),El(i,e,t)}function El(i,e,t,n,o){if(i===e)return i!==0||1/i===1/e;if(i==null||e==null)return!1;if(i!==i)return e!==e;var r=typeof i;if(r!=="function"&&r!=="object"&&typeof e!="object")return!1;var s=oh.call(i);if(s!==oh.call(e))return!1;switch(s){case"[object RegExp]":case"[object String]":return""+i==""+e;case"[object Number]":return+i!=+i?+e!=+e:+i==0?1/+i===1/e:+i==+e;case"[object Date]":case"[object Boolean]":return+i==+e;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(i)===Symbol.valueOf.call(e);case"[object Map]":case"[object Set]":t>=0&&t++;break}i=rh(i),e=rh(e);var a=s==="[object Array]";if(!a){if(typeof i!="object"||typeof e!="object")return!1;var l=i.constructor,c=e.constructor;if(l!==c&&!(Wt(l)&&l instanceof l&&Wt(c)&&c instanceof c)&&"constructor"in i&&"constructor"in e)return!1}if(t===0)return!1;t<0&&(t=-1),n=n||[],o=o||[];for(var f=n.length;f--;)if(n[f]===i)return o[f]===e;if(n.push(i),o.push(e),a){if(f=i.length,f!==e.length)return!1;for(;f--;)if(!El(i[f],e[f],t-1,n,o))return!1}else{var h=Object.keys(i),d=h.length;if(Object.keys(e).length!==d)return!1;for(var u=0;u<d;u++){var p=h[u];if(!(Mn(e,p)&&El(i[p],e[p],t-1,n,o)))return!1}}return n.pop(),o.pop(),!0}function rh(i){return Ir(i)?i.slice():Io(i)||ri(i)||xn(i)||jt(i)?Array.from(i.entries()):i}var sh,Ny=((sh=la().Iterator)==null?void 0:sh.prototype)||{};function Qc(i){return i[Symbol.iterator]=$y,Object.assign(Object.create(Ny),i)}function $y(){return this}["Symbol","Map","Set"].forEach(function(i){var e=la();typeof e[i]>"u"&&ne("MobX requires global '"+i+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:oy,extras:{getDebugName:Ol},$mobx:W});class ct extends Dt{constructor(){super(...arguments),this.disposer=null,this.cachedTemplate=null,this.originalRender=null}connectedCallback(){super.connectedCallback(),this.originalRender=this.render.bind(this),this.render=()=>{if(this.cachedTemplate){const n=this.cachedTemplate;return this.cachedTemplate=null,n}this.disposer&&this.disposer();let e=null,t=!0;return this.disposer=$u(()=>{if(this.originalRender)try{const n=this.originalRender();t?e=n:(this.cachedTemplate=n,this.requestUpdate())}catch(n){console.error("Error in MobxLitElement render:",n)}}),t=!1,e}}update(e){super.update(e),e.size>0&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.disposer&&(this.disposer(),this.disposer=null),this.originalRender&&(this.render=this.originalRender,this.originalRender=null)}}var Ju=Symbol.for("immer-nothing"),ah=Symbol.for("immer-draftable"),ae=Symbol.for("immer-state");function Ot(i,...e){throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`)}var ir=Object.getPrototypeOf;function uo(i){return!!i&&!!i[ae]}function Ln(i){return i?Qu(i)||Array.isArray(i)||!!i[ah]||!!i.constructor?.[ah]||Er(i)||ga(i):!1}var By=Object.prototype.constructor.toString(),lh=new WeakMap;function Qu(i){if(!i||typeof i!="object")return!1;const e=Object.getPrototypeOf(i);if(e===null||e===Object.prototype)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(t===Object)return!0;if(typeof t!="function")return!1;let n=lh.get(t);return n===void 0&&(n=Function.toString.call(t),lh.set(t,n)),n===By}function or(i,e,t=!0){pa(i)===0?(t?Reflect.ownKeys(i):Object.keys(i)).forEach(o=>{e(o,i[o],i)}):i.forEach((n,o)=>e(o,n,i))}function pa(i){const e=i[ae];return e?e.type_:Array.isArray(i)?1:Er(i)?2:ga(i)?3:0}function Pl(i,e){return pa(i)===2?i.has(e):Object.prototype.hasOwnProperty.call(i,e)}function Zu(i,e,t){const n=pa(i);n===2?i.set(e,t):n===3?i.add(t):i[e]=t}function Vy(i,e){return i===e?i!==0||1/i===1/e:i!==i&&e!==e}function Er(i){return i instanceof Map}function ga(i){return i instanceof Set}function Ve(i){return i.copy_||i.base_}function Tl(i,e){if(Er(i))return new Map(i);if(ga(i))return new Set(i);if(Array.isArray(i))return Array.prototype.slice.call(i);const t=Qu(i);if(e===!0||e==="class_only"&&!t){const n=Object.getOwnPropertyDescriptors(i);delete n[ae];let o=Reflect.ownKeys(n);for(let r=0;r<o.length;r++){const s=o[r],a=n[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:i[s]})}return Object.create(ir(i),n)}else{const n=ir(i);if(n!==null&&t)return{...i};const o=Object.create(n);return Object.assign(o,i)}}function Zc(i,e=!1){return ma(i)||uo(i)||!Ln(i)||(pa(i)>1&&Object.defineProperties(i,{set:Hr,add:Hr,clear:Hr,delete:Hr}),Object.freeze(i),e&&Object.values(i).forEach(t=>Zc(t,!0))),i}function Fy(){Ot(2)}var Hr={value:Fy};function ma(i){return i===null||typeof i!="object"?!0:Object.isFrozen(i)}var Dl={};function Oi(i){const e=Dl[i];return e||Ot(0,i),e}function zy(i,e){Dl[i]||(Dl[i]=e)}var rr;function Rs(){return rr}function jy(i,e){return{drafts_:[],parent_:i,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ch(i,e){e&&(Oi("Patches"),i.patches_=[],i.inversePatches_=[],i.patchListener_=e)}function Ll(i){Rl(i),i.drafts_.forEach(Hy),i.drafts_=null}function Rl(i){i===rr&&(rr=i.parent_)}function fh(i){return rr=jy(rr,i)}function Hy(i){const e=i[ae];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function hh(i,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return i!==void 0&&i!==t?(t[ae].modified_&&(Ll(e),Ot(4)),Ln(i)&&(i=Ns(e,i),e.parent_||$s(e,i)),e.patches_&&Oi("Patches").generateReplacementPatches_(t[ae].base_,i,e.patches_,e.inversePatches_)):i=Ns(e,t,[]),Ll(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),i!==Ju?i:void 0}function Ns(i,e,t){if(ma(e))return e;const n=i.immer_.shouldUseStrictIteration(),o=e[ae];if(!o)return or(e,(r,s)=>dh(i,o,e,r,s,t),n),e;if(o.scope_!==i)return e;if(!o.modified_)return $s(i,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const r=o.copy_;let s=r,a=!1;o.type_===3&&(s=new Set(r),r.clear(),a=!0),or(s,(l,c)=>dh(i,o,r,l,c,t,a),n),$s(i,r,!1),t&&i.patches_&&Oi("Patches").generatePatches_(o,t,i.patches_,i.inversePatches_)}return o.copy_}function dh(i,e,t,n,o,r,s){if(o==null||typeof o!="object"&&!s)return;const a=ma(o);if(!(a&&!s)){if(uo(o)){const l=r&&e&&e.type_!==3&&!Pl(e.assigned_,n)?r.concat(n):void 0,c=Ns(i,o,l);if(Zu(t,n,c),uo(c))i.canAutoFreeze_=!1;else return}else s&&t.add(o);if(Ln(o)&&!a){if(!i.immer_.autoFreeze_&&i.unfinalizedDrafts_<1||e&&e.base_&&e.base_[n]===o&&a)return;Ns(i,o),(!e||!e.scope_.parent_)&&typeof n!="symbol"&&(Er(t)?t.has(n):Object.prototype.propertyIsEnumerable.call(t,n))&&$s(i,o)}}}function $s(i,e,t=!1){!i.parent_&&i.immer_.autoFreeze_&&i.canAutoFreeze_&&Zc(e,t)}function qy(i,e){const t=Array.isArray(i),n={type_:t?1:0,scope_:e?e.scope_:Rs(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:i,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,r=ef;t&&(o=[n],r=sr);const{revoke:s,proxy:a}=Proxy.revocable(o,r);return n.draft_=a,n.revoke_=s,a}var ef={get(i,e){if(e===ae)return i;const t=Ve(i);if(!Pl(t,e))return Wy(i,t,e);const n=t[e];return i.finalized_||!Ln(n)?n:n===Fa(i.base_,e)?(za(i),i.copy_[e]=ar(n,i)):n},has(i,e){return e in Ve(i)},ownKeys(i){return Reflect.ownKeys(Ve(i))},set(i,e,t){const n=ep(Ve(i),e);if(n?.set)return n.set.call(i.draft_,t),!0;if(!i.modified_){const o=Fa(Ve(i),e),r=o?.[ae];if(r&&r.base_===t)return i.copy_[e]=t,i.assigned_[e]=!1,!0;if(Vy(t,o)&&(t!==void 0||Pl(i.base_,e)))return!0;za(i),wn(i)}return i.copy_[e]===t&&(t!==void 0||e in i.copy_)||Number.isNaN(t)&&Number.isNaN(i.copy_[e])||(i.copy_[e]=t,i.assigned_[e]=!0),!0},deleteProperty(i,e){return Fa(i.base_,e)!==void 0||e in i.base_?(i.assigned_[e]=!1,za(i),wn(i)):delete i.assigned_[e],i.copy_&&delete i.copy_[e],!0},getOwnPropertyDescriptor(i,e){const t=Ve(i),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&{writable:!0,configurable:i.type_!==1||e!=="length",enumerable:n.enumerable,value:t[e]}},defineProperty(){Ot(11)},getPrototypeOf(i){return ir(i.base_)},setPrototypeOf(){Ot(12)}},sr={};or(ef,(i,e)=>{sr[i]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});sr.deleteProperty=function(i,e){return sr.set.call(this,i,e,void 0)};sr.set=function(i,e,t){return ef.set.call(this,i[0],e,t,i[0])};function Fa(i,e){const t=i[ae];return(t?Ve(t):i)[e]}function Wy(i,e,t){const n=ep(e,t);return n?"value"in n?n.value:n.get?.call(i.draft_):void 0}function ep(i,e){if(!(e in i))return;let t=ir(i);for(;t;){const n=Object.getOwnPropertyDescriptor(t,e);if(n)return n;t=ir(t)}}function wn(i){i.modified_||(i.modified_=!0,i.parent_&&wn(i.parent_))}function za(i){i.copy_||(i.copy_=Tl(i.base_,i.scope_.immer_.useStrictShallowCopy_))}var Uy=class{constructor(i){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,t,n)=>{if(typeof e=="function"&&typeof t!="function"){const r=t;t=e;const s=this;return function(l=r,...c){return s.produce(l,f=>t.call(this,f,...c))}}typeof t!="function"&&Ot(6),n!==void 0&&typeof n!="function"&&Ot(7);let o;if(Ln(e)){const r=fh(this),s=ar(e,void 0);let a=!0;try{o=t(s),a=!1}finally{a?Ll(r):Rl(r)}return ch(r,n),hh(o,r)}else if(!e||typeof e!="object"){if(o=t(e),o===void 0&&(o=e),o===Ju&&(o=void 0),this.autoFreeze_&&Zc(o,!0),n){const r=[],s=[];Oi("Patches").generateReplacementPatches_(e,o,r,s),n(r,s)}return o}else Ot(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(s,...a)=>this.produceWithPatches(s,l=>e(l,...a));let n,o;return[this.produce(e,t,(s,a)=>{n=s,o=a}),n,o]},typeof i?.autoFreeze=="boolean"&&this.setAutoFreeze(i.autoFreeze),typeof i?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(i.useStrictShallowCopy),typeof i?.useStrictIteration=="boolean"&&this.setUseStrictIteration(i.useStrictIteration)}createDraft(i){Ln(i)||Ot(8),uo(i)&&(i=Gy(i));const e=fh(this),t=ar(i,void 0);return t[ae].isManual_=!0,Rl(e),t}finishDraft(i,e){const t=i&&i[ae];(!t||!t.isManual_)&&Ot(9);const{scope_:n}=t;return ch(n,e),hh(void 0,n)}setAutoFreeze(i){this.autoFreeze_=i}setUseStrictShallowCopy(i){this.useStrictShallowCopy_=i}setUseStrictIteration(i){this.useStrictIteration_=i}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(i,e){let t;for(t=e.length-1;t>=0;t--){const o=e[t];if(o.path.length===0&&o.op==="replace"){i=o.value;break}}t>-1&&(e=e.slice(t+1));const n=Oi("Patches").applyPatches_;return uo(i)?n(i,e):this.produce(i,o=>n(o,e))}};function ar(i,e){const t=Er(i)?Oi("MapSet").proxyMap_(i,e):ga(i)?Oi("MapSet").proxySet_(i,e):qy(i,e);return(e?e.scope_:Rs()).drafts_.push(t),t}function Gy(i){return uo(i)||Ot(10,i),tp(i)}function tp(i){if(!Ln(i)||ma(i))return i;const e=i[ae];let t,n=!0;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=Tl(i,e.scope_.immer_.useStrictShallowCopy_),n=e.scope_.immer_.shouldUseStrictIteration()}else t=Tl(i,!0);return or(t,(o,r)=>{Zu(t,o,tp(r))},n),e&&(e.finalized_=!1),t}function Yy(){class i extends Map{constructor(l,c){super(),this[ae]={type_:2,parent_:c,scope_:c?c.scope_:Rs(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:l,draft_:this,isManual_:!1,revoked_:!1}}get size(){return Ve(this[ae]).size}has(l){return Ve(this[ae]).has(l)}set(l,c){const f=this[ae];return s(f),(!Ve(f).has(l)||Ve(f).get(l)!==c)&&(t(f),wn(f),f.assigned_.set(l,!0),f.copy_.set(l,c),f.assigned_.set(l,!0)),this}delete(l){if(!this.has(l))return!1;const c=this[ae];return s(c),t(c),wn(c),c.base_.has(l)?c.assigned_.set(l,!1):c.assigned_.delete(l),c.copy_.delete(l),!0}clear(){const l=this[ae];s(l),Ve(l).size&&(t(l),wn(l),l.assigned_=new Map,or(l.base_,c=>{l.assigned_.set(c,!1)}),l.copy_.clear())}forEach(l,c){const f=this[ae];Ve(f).forEach((h,d,u)=>{l.call(c,this.get(d),d,this)})}get(l){const c=this[ae];s(c);const f=Ve(c).get(l);if(c.finalized_||!Ln(f)||f!==c.base_.get(l))return f;const h=ar(f,c);return t(c),c.copy_.set(l,h),h}keys(){return Ve(this[ae]).keys()}values(){const l=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const c=l.next();return c.done?c:{done:!1,value:this.get(c.value)}}}}entries(){const l=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const c=l.next();if(c.done)return c;const f=this.get(c.value);return{done:!1,value:[c.value,f]}}}}[Symbol.iterator](){return this.entries()}}function e(a,l){return new i(a,l)}function t(a){a.copy_||(a.assigned_=new Map,a.copy_=new Map(a.base_))}class n extends Set{constructor(l,c){super(),this[ae]={type_:3,parent_:c,scope_:c?c.scope_:Rs(),modified_:!1,finalized_:!1,copy_:void 0,base_:l,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return Ve(this[ae]).size}has(l){const c=this[ae];return s(c),c.copy_?!!(c.copy_.has(l)||c.drafts_.has(l)&&c.copy_.has(c.drafts_.get(l))):c.base_.has(l)}add(l){const c=this[ae];return s(c),this.has(l)||(r(c),wn(c),c.copy_.add(l)),this}delete(l){if(!this.has(l))return!1;const c=this[ae];return s(c),r(c),wn(c),c.copy_.delete(l)||(c.drafts_.has(l)?c.copy_.delete(c.drafts_.get(l)):!1)}clear(){const l=this[ae];s(l),Ve(l).size&&(r(l),wn(l),l.copy_.clear())}values(){const l=this[ae];return s(l),r(l),l.copy_.values()}entries(){const l=this[ae];return s(l),r(l),l.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(l,c){const f=this.values();let h=f.next();for(;!h.done;)l.call(c,h.value,h.value,this),h=f.next()}}function o(a,l){return new n(a,l)}function r(a){a.copy_||(a.copy_=new Set,a.base_.forEach(l=>{if(Ln(l)){const c=ar(l,a);a.drafts_.set(l,c),a.copy_.add(c)}else a.copy_.add(l)}))}function s(a){a.revoked_&&Ot(3,JSON.stringify(Ve(a)))}zy("MapSet",{proxyMap_:e,proxySet_:o})}var Nl=new Uy,ja=Nl.produce,Ky=Nl.setAutoFreeze.bind(Nl),lr=(i=>(i.Auto="auto",i.Show="show",i.Hide="hide",i))(lr||{});class Xy{constructor(){this.nodes=new Map}register(e){this.nodes.set(e.id,e)}get(e){return this.nodes.get(e)?.definition}getNodeType(e){return this.nodes.get(e)}getAllNodeTypes(){return this.nodes.values()}}const ee=new Xy;Yy();Ky(!1);gy({enforceActions:"always",computedRequiresReaction:!0,reactionRequiresObservable:!1,observableRequiresReaction:!1});const zo=i=>`${i}-${crypto.randomUUID()}`;class Jy{constructor(e,t){this.controller=e,this.callbacks=t}applyAgain(e){e&&(this.callbacks.apply=e),this.controller.updateLongEdit(this)}cancel(){this.controller.cancelLongEdit(this)}accept(){this.controller.acceptLongEdit(this)}get isActive(){return this.controller.activeLongEdit===this}}function np(i){const e=new Map,t=new Map;for(const n of Object.values(i.nodes))e.set(n.id,[]),t.set(n.id,[]);for(const n of Object.values(i.connections))e.get(n.fromNodeId)?.push(n.id),t.get(n.toNodeId)?.push(n.id);return{outgoingConnections:e,incomingConnections:t}}class Qy{constructor(e){this.undoStack=[],this.redoStack=[],this.isTransactionActive=!1,this.bufferedMutations=[],this.draftState=null,this.activeLongEdit=null,this.longEditMutations=[],this.isLongEditApplying=!1,this.compiledGraphDirtyListeners=[],this.configChangeListeners=[],this.inputUpdateListeners=[],this.graphResetListeners=[],this.inferredTypesUpdateListeners=[];const t=e||{nodes:{},connections:{}};this.currentState={graph:{inner:t,auxiliary:np(t)}},this.observableState=F(this.currentState),$i(this,{observableState:F,undoStack:F,redoStack:F,canUndo:Tn,canRedo:Tn})}setMetricsProvider(e){this.metricsProvider=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}getState(){return this.isTransactionActive&&this.draftState?this.draftState:this.currentState}onCompiledGraphDirty(e){return this.compiledGraphDirtyListeners.push(e),()=>{this.compiledGraphDirtyListeners=this.compiledGraphDirtyListeners.filter(t=>t!==e)}}onConfigChange(e){return this.configChangeListeners.push(e),()=>{this.configChangeListeners=this.configChangeListeners.filter(t=>t!==e)}}onInputUpdate(e){return this.inputUpdateListeners.push(e),()=>{this.inputUpdateListeners=this.inputUpdateListeners.filter(t=>t!==e)}}onGraphReset(e){return this.graphResetListeners.push(e),()=>{this.graphResetListeners=this.graphResetListeners.filter(t=>t!==e)}}onInferredTypesUpdate(e){return this.inferredTypesUpdateListeners.push(e),()=>{this.inferredTypesUpdateListeners=this.inferredTypesUpdateListeners.filter(t=>t!==e)}}dispatch(e,t=!1){if(e.length===0)return;if(this.isTransactionActive){this.bufferedMutations.push(...e),this.applyMutations(this.draftState,e);return}if(this.isLongEditApplying){this.applyMutationsToObservable(e),this.longEditMutations.push(...e),this.notifyListeners(e);return}if(this.activeLongEdit){if(this.longEditMutations.length>0){const r=this.createInverse(this.longEditMutations);this.applyMutationsToObservable(r)}const o=ja(this.currentState,r=>{this.applyMutations(r,e)});if(o!==this.currentState&&(this.currentState=o,this.applyMutationsToObservable(e),!t)){const r=e.filter(s=>s.type!=="graph.updateInferredTypes");if(r.length>0){const s=this.createInverse(r);Y(()=>{this.undoStack.push(s),this.redoStack=[]})}}this.longEditMutations=[],this.isLongEditApplying=!0;try{this.activeLongEdit.callbacks.apply(this)}finally{this.isLongEditApplying=!1}this.notifyListeners(e);return}const n=ja(this.currentState,o=>{this.applyMutations(o,e)});if(n!==this.currentState&&(this.currentState=n,this.applyMutationsToObservable(e),!t)){const o=e.filter(r=>r.type!=="graph.updateInferredTypes");if(o.length>0){const r=this.createInverse(o);Y(()=>{this.undoStack.push(r),this.redoStack=[]})}}this.notifyListeners(e)}notifyListeners(e){let t=!1;const n=new Set,o=[];for(const r of e)switch(r.type){case"node.create":case"node.delete":case"connection.create":case"connection.delete":case"connection.setPorts":case"graph.recompile":t=!0;break;case"graph.configUpdate":r.nodeIds.forEach(a=>n.add(a));break;case"graph.inputUpdate":o.push({nodeId:r.nodeId,inputs:r.inputs});break;case"node.setConfig":const s=Object.keys(r.to);s.length===1&&s[0]==="values"&&r.to.values?o.push({nodeId:r.nodeId,inputs:r.to.values}):r.to.typeId?t=!0:(("regionX"in r.to||"regionY"in r.to||"width"in r.to||"height"in r.to||"visibility"in r.to)&&(t=!0),n.add(r.nodeId));break;case"node.move":if(!t){const a=this.currentState.graph.inner,l=Object.values(a.nodes).filter(c=>{const f=ee.get(c.config.typeId);return f&&f.getRegion});if(l.length>0)for(const c of r.moves){const f=(p,g)=>{for(const m of l){if(m.id===c.nodeId)continue;const y=ee.get(m.config.typeId).getRegion(m.config),x=m.x+y.x,v=m.y+y.y,C=x+y.width,S=v+y.height;if(p>=x&&p<C&&g>=v&&g<S)return m.id}return null},h=f(c.from.x,c.from.y),d=f(c.to.x,c.to.y);if(h!==d){t=!0;break}const u=ee.get(a.nodes[c.nodeId]?.config.typeId);if(u&&u.getRegion){const p=u.getRegion(a.nodes[c.nodeId].config),g=(m,b,y,x)=>m>=y&&m<y+p.width&&b>=x&&b<x+p.height;for(const m of Object.values(a.nodes)){if(m.id===c.nodeId)continue;const b=g(m.x,m.y,c.from.x+p.x,c.from.y+p.y),y=g(m.x,m.y,c.to.x+p.x,c.to.y+p.y);if(b!==y){t=!0;break}}}if(t)break}}break}if(t)for(const r of this.compiledGraphDirtyListeners)try{r()}catch(s){console.error(s)}if(n.size>0){const r=Array.from(n);for(const s of this.configChangeListeners)try{s(r)}catch(a){console.error(a)}}if(o.length>0)for(const r of this.inputUpdateListeners)try{r(o)}catch(s){console.error(s)}for(const r of e)if(r.type==="graph.updateInferredTypes"){for(const s of this.inferredTypesUpdateListeners)try{s(r.inferredTypes)}catch(a){console.error(a)}break}}transaction(e){this.isTransactionActive=!0,this.bufferedMutations=[],this.draftState=JSON.parse(JSON.stringify(this.currentState,(t,n)=>n instanceof Map||n instanceof Set?Array.from(n.entries()):n)),this.draftState&&(this.draftState.graph.auxiliary.incomingConnections=new Map(this.draftState.graph.auxiliary.incomingConnections),this.draftState.graph.auxiliary.outgoingConnections=new Map(this.draftState.graph.auxiliary.outgoingConnections));try{e(this);const t=[...this.bufferedMutations];this.isTransactionActive=!1,this.bufferedMutations=[],this.draftState=null,this.dispatch(t)}catch(t){throw this.isTransactionActive=!1,this.bufferedMutations=[],this.draftState=null,t}}beginLongEdit(e){this.activeLongEdit&&this.activeLongEdit.cancel();const t=new Jy(this,e);return this.activeLongEdit=t,this.updateLongEdit(t),t}updateLongEdit(e){if(this.activeLongEdit===e){if(this.longEditMutations.length>0){const t=this.createInverse(this.longEditMutations);this.applyMutationsToObservable(t),this.longEditMutations=[]}this.isLongEditApplying=!0;try{e.callbacks.apply(this)}finally{this.isLongEditApplying=!1}}}cancelLongEdit(e){if(this.activeLongEdit===e){if(this.longEditMutations.length>0){const t=this.createInverse(this.longEditMutations);this.applyMutationsToObservable(t),this.longEditMutations=[]}this.activeLongEdit=null,e.callbacks.cancel&&e.callbacks.cancel(),e.callbacks.complete&&e.callbacks.complete()}}acceptLongEdit(e){if(this.activeLongEdit!==e)return;const t=[...this.longEditMutations],n=ja(this.currentState,r=>{this.applyMutations(r,t)});this.currentState=n;const o=this.createInverse(t);Y(()=>{this.undoStack.push(o),this.redoStack=[]}),this.activeLongEdit=null,this.longEditMutations=[],e.callbacks.accept&&e.callbacks.accept(),e.callbacks.complete&&e.callbacks.complete()}createNode(e,t,n,o){const r=o?.id||zo("node"),{id:s,...a}=o||{},l=ee.getNodeType(e),c={};if(l?.definition.kind==="primitive"){const h=l.definition.configType;if(h&&h.kind==="record"){const d=h.fields||{};for(const[u,p]of Object.entries(d))p&&typeof p=="object"&&"defaultValue"in p&&(c[u]=p.defaultValue)}}const f={id:r,x:t,y:n,config:{typeId:e,name:"#",values:{},...c,...a}};return this.dispatch([{type:"node.create",node:f},{type:"graph.recompile"}]),f}deleteNode(e){const t=this.getState(),n=t.graph.inner.nodes[e];if(!n)return;const o=[];for(const r of Object.values(t.graph.inner.connections))(r.fromNodeId===e||r.toNodeId===e)&&o.push({type:"connection.delete",connection:r});o.push({type:"node.delete",node:n}),o.push({type:"graph.recompile"}),this.dispatch(o)}createConnection(e,t,n,o){const r={id:zo("conn"),fromNodeId:e,fromPort:t,toNodeId:n,toPort:o};return this.dispatch([{type:"connection.create",connection:r},{type:"graph.recompile"}]),r}deleteConnection(e){const t=this.getState().graph.inner.connections[e];t&&this.dispatch([{type:"connection.delete",connection:t},{type:"graph.recompile"}])}duplicateNodes(e,t={x:0,y:0}){const n=this.getState(),o=[],r=new Map,s=[];for(const l of e){const c=n.graph.inner.nodes[l];if(!c)continue;const f=zo("node");o.push(f),r.set(l,f);const h={...c,id:f,x:c.x+t.x,y:c.y+t.y,config:JSON.parse(JSON.stringify(c.config))};s.push({type:"node.create",node:h})}const a=Object.values(n.graph.inner.connections).filter(l=>e.includes(l.fromNodeId)&&e.includes(l.toNodeId));for(const l of a){const c=r.get(l.fromNodeId),f=r.get(l.toNodeId);if(c&&f){const h={id:zo("conn"),fromNodeId:c,fromPort:l.fromPort,toNodeId:f,toPort:l.toPort};s.push({type:"connection.create",connection:h})}}return s.length>0&&(s.push({type:"graph.recompile"}),this.dispatch(s)),o}calculateConstrainedMove(e,t,n){const o=this.getState();let r=t,s=n;const a=e.map(c=>o.graph.inner.nodes[c]).filter(c=>!!c);if(a.some(c=>c.config.typeId==="io.input"||c.config.typeId==="io.output"))r=0;else for(const c of a){const f=c.x+r;f<0?r=0-c.x:f>50&&(r=50-c.x)}return{dx:r,dy:s}}moveNodes(e,t,n){const o=this.getState(),r=new Map,s=[],a=(f,h,d)=>{s.push({id:f,dx:h,dy:d});const u=o.graph.inner.nodes[f];if(u){const p=ee.getNodeType(u.config.typeId),g=p?.getChildren?p.getChildren(u,o.graph.inner.nodes):[];for(const m of g)a(m,h,d)}};for(const f of e)o.graph.inner.nodes[f]&&a(f,t,n);let l=0;for(;s.length>0&&l<5e3;){const f=s.shift();if(l++,r.has(f.id))continue;const h=o.graph.inner.nodes[f.id];if(!h)continue;const d={x:h.x,y:h.y},u={x:h.x+f.dx,y:h.y+f.dy};r.set(f.id,{nodeId:f.id,from:d,to:u});for(const p of Object.values(o.graph.inner.nodes)){if(p.id===f.id||r.has(p.id))continue;const g=ee.getNodeType(p.config.typeId);if(g?.getRegion){const m=g.getRegion(p.config),b=this.metricsProvider?this.metricsProvider.isRegionCollapsed(p.id):m.visibility===lr.Hide;if(m&&b){const y=p.x+(m.x||0),x=p.y+(m.y||0);u.x>=y&&u.x<y+m.width&&u.y>=x&&u.y<x+m.height&&a(p.id,f.dx,f.dy)}}p.x===u.x&&p.y===u.y&&a(p.id,f.dx,f.dy)}}const c=Array.from(r.values()).map(f=>({nodeId:f.nodeId,from:f.from,to:f.to}));this.dispatch([{type:"node.move",moves:c}])}insertSpace(e,t,n=1){const o=this.getState(),r=[];for(const s of Object.values(o.graph.inner.nodes))(e==="x"&&s.x>t||e==="y"&&s.y>t)&&r.push(s.id);r.length>0&&this.moveNodes(r,e==="x"?n:0,e==="y"?n:0)}setNodeConfig(e,t,n={}){const o=this.getState(),r={},s={},a=o.graph.inner.nodes[e];if(a){for(const l in t)if(Object.prototype.hasOwnProperty.call(t,l)){const c=t[l],f=a.config[l];c!==f&&(r[l]=f,s[l]=c)}}Object.keys(s).length>0&&this.dispatch([{type:"node.setConfig",nodeId:e,from:r,to:s}],n.skipHistory)}commitConfigHistory(e,t,n){const o={type:"node.setConfig",nodeId:e,from:n,to:t};Y(()=>{this.undoStack.push([o]),this.redoStack=[]})}setConnectionPorts(e,t){const o=this.getState().graph.inner.connections[e];if(!o)return;const r={fromPort:o.fromPort,toPort:o.toPort},s={fromPort:t.fromPort??o.fromPort,toPort:t.toPort??o.toPort};this.dispatch([{type:"connection.setPorts",connectionId:e,from:r,to:s},{type:"graph.recompile"}])}setConnectionConfig(e,t){}clear(){const e=this.getState(),t=[];for(const n of Object.values(e.graph.inner.connections))t.push({type:"connection.delete",connection:n});for(const n of Object.values(e.graph.inner.nodes))t.push({type:"node.delete",node:n});t.push({type:"graph.recompile"}),this.dispatch(t);for(const n of this.graphResetListeners)try{n()}catch(o){console.error(o)}}loadGraph(e){this.clear();const t=[];for(const n of Object.values(e.nodes))t.push({type:"node.create",node:n});for(const n of Object.values(e.connections))t.push({type:"connection.create",connection:n});t.push({type:"graph.recompile"}),e.inferredNodeTypes&&t.push({type:"graph.updateInferredTypes",inferredTypes:e.inferredNodeTypes}),this.dispatch(t),Y(()=>{this.undoStack=[],this.redoStack=[]})}undo(){let e;if(Y(()=>{e=this.undoStack.pop()}),e){const t=this.createInverse(e);Y(()=>{this.redoStack.push(t)}),this.dispatch(e,!0)}}redo(){let e;if(Y(()=>{e=this.redoStack.pop()}),e){const t=this.createInverse(e);Y(()=>{this.undoStack.push(t)}),this.dispatch(e,!0)}}applyMutations(e,t){for(const n of t)switch(n.type){case"node.create":e.graph.inner.nodes[n.node.id]=n.node,e.graph.auxiliary.outgoingConnections.set(n.node.id,[]),e.graph.auxiliary.incomingConnections.set(n.node.id,[]);break;case"node.delete":delete e.graph.inner.nodes[n.node.id],e.graph.auxiliary.outgoingConnections.delete(n.node.id),e.graph.auxiliary.incomingConnections.delete(n.node.id),e.graph.inner.inferredNodeTypes&&delete e.graph.inner.inferredNodeTypes[n.node.id];break;case"connection.create":e.graph.inner.connections[n.connection.id]=n.connection,e.graph.auxiliary.outgoingConnections.get(n.connection.fromNodeId)?.push(n.connection.id),e.graph.auxiliary.incomingConnections.get(n.connection.toNodeId)?.push(n.connection.id);break;case"connection.delete":const o=n.connection;delete e.graph.inner.connections[o.id];const r=e.graph.auxiliary.outgoingConnections.get(o.fromNodeId);if(r){const a=r.indexOf(o.id);a>-1&&r.splice(a,1)}const s=e.graph.auxiliary.incomingConnections.get(o.toNodeId);if(s){const a=s.indexOf(o.id);a>-1&&s.splice(a,1)}break;case"node.move":for(const a of n.moves)e.graph.inner.nodes[a.nodeId]&&(e.graph.inner.nodes[a.nodeId].x=a.to.x,e.graph.inner.nodes[a.nodeId].y=a.to.y);break;case"node.setConfig":e.graph.inner.nodes[n.nodeId]&&(e.graph.inner.nodes[n.nodeId].config={...e.graph.inner.nodes[n.nodeId].config,...n.to});break;case"connection.setPorts":e.graph.inner.connections[n.connectionId]&&(n.to.fromPort!==void 0&&(e.graph.inner.connections[n.connectionId].fromPort=n.to.fromPort),n.to.toPort!==void 0&&(e.graph.inner.connections[n.connectionId].toPort=n.to.toPort));break;case"graph.recompile":break;case"graph.configUpdate":break;case"graph.inputUpdate":break;case"graph.updateInferredTypes":e.graph.inner.inferredNodeTypes=n.inferredTypes;break}}applyMutationsToObservable(e){Y(()=>{this.applyMutations(this.observableState,e)})}createInverse(e){const t=[];for(const n of e)switch(n.type){case"node.create":t.push({type:"node.delete",node:n.node});break;case"node.delete":t.push({type:"node.create",node:n.node});break;case"connection.create":t.push({type:"connection.delete",connection:n.connection});break;case"connection.delete":t.push({type:"connection.create",connection:n.connection});break;case"node.move":t.push({type:"node.move",moves:n.moves.map(r=>({...r,from:r.to,to:r.from}))});break;case"node.setConfig":t.push({type:"node.setConfig",nodeId:n.nodeId,from:n.to,to:n.from});break;case"connection.setPorts":t.push({type:"connection.setPorts",connectionId:n.connectionId,from:n.to,to:n.from});break;case"connection.setConfig":t.push({type:"connection.setConfig",connectionId:n.connectionId,from:n.to,to:n.from});break;case"graph.recompile":t.push({type:"graph.recompile"});break;case"graph.configUpdate":t.push({type:"graph.configUpdate",nodeIds:n.nodeIds});break;case"graph.inputUpdate":const o=e.find(r=>r.type==="node.setConfig"&&r.nodeId===r.nodeId);o&&o.from&&o.from.values?t.push({type:"graph.inputUpdate",nodeId:n.nodeId,inputs:o.from.values}):t.push({type:"graph.configUpdate",nodeIds:[n.nodeId]});break;default:console.warn(`Inverse for mutation type ${n.type} not implemented.`);break}return t.reverse()}}const $l=(i,e)=>e.some(t=>i instanceof t);let uh,ph;function Zy(){return uh||(uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ev(){return ph||(ph=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bl=new WeakMap,Ha=new WeakMap,ba=new WeakMap;function tv(i){const e=new Promise((t,n)=>{const o=()=>{i.removeEventListener("success",r),i.removeEventListener("error",s)},r=()=>{t(xi(i.result)),o()},s=()=>{n(i.error),o()};i.addEventListener("success",r),i.addEventListener("error",s)});return ba.set(e,i),e}function nv(i){if(Bl.has(i))return;const e=new Promise((t,n)=>{const o=()=>{i.removeEventListener("complete",r),i.removeEventListener("error",s),i.removeEventListener("abort",s)},r=()=>{t(),o()},s=()=>{n(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",r),i.addEventListener("error",s),i.addEventListener("abort",s)});Bl.set(i,e)}let Vl={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Bl.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ip(i){Vl=i(Vl)}function iv(i){return ev().includes(i)?function(...e){return i.apply(Fl(this),e),xi(this.request)}:function(...e){return xi(i.apply(Fl(this),e))}}function ov(i){return typeof i=="function"?iv(i):(i instanceof IDBTransaction&&nv(i),$l(i,Zy())?new Proxy(i,Vl):i)}function xi(i){if(i instanceof IDBRequest)return tv(i);if(Ha.has(i))return Ha.get(i);const e=ov(i);return e!==i&&(Ha.set(i,e),ba.set(e,i)),e}const Fl=i=>ba.get(i);function rv(i,e,{blocked:t,upgrade:n,blocking:o,terminated:r}={}){const s=indexedDB.open(i,e),a=xi(s);return n&&s.addEventListener("upgradeneeded",l=>{n(xi(s.result),l.oldVersion,l.newVersion,xi(s.transaction),l)}),t&&s.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),o&&l.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const sv=["get","getKey","getAll","getAllKeys","count"],av=["put","add","delete","clear"],qa=new Map;function gh(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,o=av.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(o||sv.includes(t)))return;const r=async function(s,...a){const l=this.transaction(s,o?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),o&&l.done]))[0]};return qa.set(e,r),r}ip(i=>({...i,get:(e,t,n)=>gh(e,t)||i.get(e,t,n),has:(e,t)=>!!gh(e,t)||i.has(e,t)}));const lv=["continue","continuePrimaryKey","advance"],mh={},zl=new WeakMap,op=new WeakMap,cv={get(i,e){if(!lv.includes(e))return i[e];let t=mh[e];return t||(t=mh[e]=function(...n){zl.set(this,op.get(this)[e](...n))}),t}};async function*fv(...i){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...i)),!e)return;e=e;const t=new Proxy(e,cv);for(op.set(t,e),ba.set(t,Fl(e));e;)yield t,e=await(zl.get(t)||e.continue()),zl.delete(t)}function bh(i,e){return e===Symbol.asyncIterator&&$l(i,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&$l(i,[IDBIndex,IDBObjectStore])}ip(i=>({...i,get(e,t,n){return bh(e,t)?fv:i.get(e,t,n)},has(e,t){return bh(e,t)||i.has(e,t)}}));const hv="nano-repatch-settings",qr="settings",dv=1;class uv{constructor(){this.dbPromise=null,typeof indexedDB<"u"&&typeof IDBRequest<"u"&&(this.dbPromise=rv(hv,dv,{upgrade(e){e.objectStoreNames.contains(qr)||e.createObjectStore(qr)}}))}async saveSettings(e){if(this.dbPromise)try{await(await this.dbPromise).put(qr,e,"localSettings")}catch(t){console.error("Error saving settings:",t)}}async loadSettings(){if(!this.dbPromise)return null;try{return await(await this.dbPromise).get(qr,"localSettings")||null}catch(e){return console.error("Error loading settings:",e),null}}}const yh=new uv,tf=80,rp=16,vn=24,vh=24,pv=16,gv=8,sp=8,ap=3,vs=tf,jl=tf*2+rp,Bs=tf*3+rp*2,ue=Bs-pv*2,mv=38,wh=-9,Wa=0,bv=6,xh=3;function cr(i,e){return i.alwaysShowInputEditor?!0:!(e||i.suppressInputEditor)}function yv(i){return 26+i*24+12}function Hl(i,e,t,n,o){if(o&&(o.typeId==="io.input"||o.typeId==="io.output"||o.typeId==="resolume.input"||o.typeId==="resolume.output"))return"pill";let r=!1;for(const s of i){const a=t.has(s.name);if(cr(s,a)){r=!0;break}}return!r&&!n?i.length<=1&&e.length<=1?"minimal":"compressed":"normal"}function vv(i,e,t,n,o){if(!i)return 80;let r=e?.inputs||[],s=e?.outputs||[];n&&(r=n),o&&(s=o);let a=0;r.forEach(p=>{const g=t.has(p.name);let m=24;(p.alwaysShowInputEditor||!g&&!p.suppressInputEditor)&&(e?.getInputEditorHeight?m=e.getInputEditorHeight(i,p.name):i.config.typeId==="debug.scope"&&p.name==="value"&&(m=96)),a+=m});const l=s.length*24,c=Math.max(a,l,24);let h=e?.getBodyHeight?.(i)||0;h===0&&(e?.renderBody||e?.ui?.body)&&(h=96);let d=!1;for(const p of r){const g=t.has(p.name);if(p.alwaysShowInputEditor||!g&&!p.suppressInputEditor){d=!0;break}}const u=h>0;return!d&&!u&&r.length<=1&&s.length<=1?80:i&&(i.config.typeId==="io.input"||i.config.typeId==="io.output"||i.config.typeId==="resolume.input"||i.config.typeId==="resolume.output")?40:24+c+8+h}var wv=Object.defineProperty,xv=Object.getOwnPropertyDescriptor,$e=(i,e,t,n)=>{for(var o=xv(e,t),r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(e,t,o)||o);return o&&wv(e,t,o),o};class Re{constructor(e){this.appController=e,this.observableState=F({selection:new Map,queuedSelection:new Set,lastGroupSelection:null,inflightPortConnectionOperation:null,loadedSubgraphs:new Map,compiledNodeConfigs:new Map,wireLayout:{wires:{},segments:[]},layoutVersion:0,inferredNodeTypes:new Map,effectiveNodeTypes:new Map,viewport:{x:0,y:0,w:0,h:0},dragPreview:null,clipboard:null,gridMetrics:{cells:new Map,columns:new Map,columnWidths:new Map,rows:new Map,rowOffsets:new Map,colOffsets:new Map,boundingBox:{width:0,height:0},regions:new Map},localSettings:{showDebugValues:!1,activeTab:null,enableResolumeIO:!1,beatSyncResolumeControlEnabled:!1,areRegionsExpanded:!0,beatSyncAudioDeviceId:null,beatSyncSystemEnabled:!1,beatSyncHardSyncEnabled:!1,beatSyncResyncMidiMapping:null},isDraggingSelection:!1,altKeyPressed:!1}),$i(this),this.layoutWorker=new Worker(new URL("/assets/wire-layout.worker-80sQ2dZk.js",import.meta.url),{type:"module"}),this.layoutWorker.onmessage=t=>{const{type:n,layout:o}=t.data;n==="LAYOUT_RESULT"&&Y(()=>{this.observableState.wireLayout=o,this.observableState.layoutVersion++})},this.settingsLoaded=this.loadSettings()}initializeInferredTypes(e){e.inner.inferredNodeTypes&&Y(()=>{for(const[t,n]of Object.entries(e.inner.inferredNodeTypes))this.observableState.inferredNodeTypes.set(t,n),this.recomputeEffectivePorts(t,e.inner.nodes[t]?.config.typeId)})}updateInferredTypes(e,t){for(const[n,o]of Object.entries(e)){this.observableState.inferredNodeTypes.set(n,o);const r=t(n);r&&this.recomputeEffectivePorts(n,r)}}recomputeEffectivePorts(e,t){if(!t)return;const n=ee.getNodeType(t),o=this.observableState.inferredNodeTypes.get(e);let r=n?.inputs?[...n.inputs]:[],s=n?.outputs?[...n.outputs]:[];if(o&&o.outputs&&o.outputs.kind==="record"&&o.outputs.fields){const a=o.outputs.fields;Object.keys(a).length>0&&(s=Object.entries(a).map(([l,c])=>{const f=n?.outputs?.find(h=>h.name===l);return{name:l,type:c,description:f?.description||l,...f}}))}if(o&&o.inputs&&o.inputs.kind==="record"&&o.inputs.fields){const a=o.inputs.fields;Object.keys(a).length>0?r=Object.entries(a).map(([l,c])=>{const f=n?.inputs?.find(h=>h.name===l);return c?{name:l,type:c,description:f?.description||l,defaultValue:c.defaultValue??f?.defaultValue,...f}:(console.warn(`[LocalController] Inferred input '${l}' for node '${e}' has undefined type.`),{name:l,type:{kind:"atomic",type:"any"},description:f?.description||l,defaultValue:f?.defaultValue,...f})}):r=[]}n?.inputs&&r.sort((a,l)=>{const c=n.inputs.findIndex(h=>h.name===a.name),f=n.inputs.findIndex(h=>h.name===l.name);return c!==-1&&f!==-1?c-f:c!==-1?-1:f!==-1?1:0}),this.observableState.effectiveNodeTypes.set(e,{inputs:r,outputs:s})}async loadSettings(){const e=await yh.loadSettings();e&&Y(()=>{this.observableState.localSettings={...this.observableState.localSettings,...e}})}saveSettings(){yh.saveSettings(vi(this.observableState.localSettings))}updateWireLayout(e){const{nodes:t,connections:n}=e.inner;this.updateGridMetrics(e);const o=this.observableState.gridMetrics.boundingBox.width,r=l=>l.config.typeId==="io.input"||l.config.typeId==="resolume.input"?-1:l.config.typeId==="io.output"||l.config.typeId==="resolume.output"?Math.max(o+ap,sp):l.x,s=Object.values(t).map(l=>{let c=1;const f=this.observableState.effectiveNodeTypes.get(l.id);if(f)c=Math.max(f.inputs.length,f.outputs.length);else{const h=ee.getNodeType(l.config.typeId);if(h){const d=h.inputs?.length||0,u=h.outputs?.length||0;c=Math.max(d,u)}}return{x:r(l),y:l.y,height:c+1}}),a=Object.values(n).map(l=>{const c=t[l.fromNodeId],f=t[l.toNodeId];if(!c||!f)return null;let h=1,d=1;const u=(C,S,k)=>{const _=this.observableState.effectiveNodeTypes.get(C.id);if(!_){const T=ee.getNodeType(C.config.typeId),P=k?T?.inputs:T?.outputs;if(P){const z=P.findIndex(V=>V.name===S);if(z!==-1)return z}const O=parseInt(S,10);return isNaN(O)?-1:O}return(k?_.inputs:_.outputs).findIndex(T=>T.name===S)},p=u(c,l.fromPort.toString(),!1),g=u(f,l.toPort.toString(),!0),m=C=>{const S=this.observableState.gridMetrics.rows.get(C.y)||80,k=this.observableState.gridMetrics.cells.get(`${C.x},${C.y}`),_=k?k.height:80;return S>_?(S-_)/2:0},b=m(c),y=m(f);return h=(p===-1?0:p)+Math.round((b+23)/24),d=(g===-1?0:g)+Math.round((y+23)/24),{id:l.id,start:{x:r(c),y:c.y},end:{x:r(f),y:f.y},fromPort:l.fromPort.toString(),toPort:l.toPort.toString(),startOffset:h,endOffset:d}}).filter(l=>l!==null);this.layoutWorker.postMessage({type:"LAYOUT_REQUEST",wires:a,options:{obstacles:s}})}updateGridMetrics(e){const{nodes:t,connections:n}=e.inner,o={cells:new Map,columns:new Map,columnWidths:new Map,rows:new Map,rowOffsets:new Map,colOffsets:new Map,boundingBox:{width:0,height:0},regions:new Map},r=new Map,s=new Map,a=new Map,l=p=>(r.has(p)||r.set(p,{regionCount:0,collapsedCount:0,contentCount:0}),r.get(p)),c=p=>(s.has(p)||s.set(p,{regionCount:0,collapsedCount:0,contentCount:0}),s.get(p)),f=new Map;let h=0,d=0;Object.values(t).forEach(p=>{p.config.typeId!=="io.output"&&p.config.typeId!=="resolume.output"&&(p.x>h&&(h=p.x),p.y>d&&(d=p.y));const g=ee.getNodeType(p.config.typeId);if(g?.getRegion){const m=g.getRegion(p.config);if(m){const b=p.x+(m.x??0),y=p.y+(m.y??0),{width:x,height:v}=m,C=m.visibility===lr.Hide||m.visibility===lr.Auto&&!this.observableState.localSettings.areRegionsExpanded;f.set(p.id,{x:b,y,width:x,height:v,isCollapsed:C});const S=b+x-1,k=y+v-1;S>h&&(h=S),k>d&&(d=k);for(let _=b;_<b+x;_++){const M=c(_);for(let T=y;T<y+v;T++){if(_===p.x&&T===p.y)continue;const P=l(T);P.regionCount++,M.regionCount++,C&&(P.collapsedCount++,M.collapsedCount++,a.has(T)||a.set(T,new Set),a.get(T).add(_))}}}}}),o.boundingBox={width:h,height:d},o.regions=f,Object.values(t).forEach(p=>{a.get(p.y)?.has(p.x)||(l(p.y).contentCount++,c(p.x).contentCount++)});const u=new Map;Object.values(n).forEach(p=>{u.has(p.toNodeId)||u.set(p.toNodeId,new Set),u.get(p.toNodeId).add(p.toPort.toString())}),Object.values(t).forEach(p=>{const g=p.x,m=p.y,b=`${g},${m}`,y=ee.getNodeType(p.config.typeId),x=this.observableState.effectiveNodeTypes.get(p.id);let v=x?.inputs||(y?.inputs?[...y.inputs]:[]),C=x?.outputs||(y?.outputs?[...y.outputs]:[]);const S=u.get(p.id)||new Set,k=!!(y?.renderBody||y?.ui?.body),_=Hl(v,C,S,k,p.config);let M=Bs;const T=!!y?.getRegion;p.config.width&&!T?M=p.config.width:_==="minimal"?M=vs:_==="compressed"||_==="pill"?M=jl:M=Bs;const P=a.get(p.y)?.has(p.x),O=vv(p,y,S,v,C);o.cells.set(b,{width:M,height:O,visualState:_,portInputCount:v.length,portOutputCount:C.length,isHidden:P});const z=o.columnWidths.get(g)||0;M>z&&o.columnWidths.set(g,M);const V=o.columns.get(g)||"minimal";_==="normal"?o.columns.set(g,"normal"):_==="compressed"&&V!=="normal"?o.columns.set(g,"compressed"):_==="minimal"&&!o.columns.has(g)&&o.columns.set(g,"minimal");const H=o.rows.get(m)||0;O>H&&o.rows.set(m,O)});try{const p=Math.max(...Array.from(o.rows.keys()),...Array.from(r.keys()),-1);for(let y=0;y<=p;y++){const x=r.get(y);let v=!1;x&&x.contentCount===0&&x.regionCount>0&&x.regionCount===x.collapsedCount&&(v=!0),v&&o.rows.set(y,0)}const g=Math.max(...Array.from(o.columnWidths.keys()),...Array.from(s.keys()),-1);for(let y=0;y<=g;y++){const x=s.get(y);let v=!1;x&&x.contentCount===0&&x.regionCount>0&&x.regionCount===x.collapsedCount&&(v=!0),v&&o.columnWidths.set(y,0)}let m=16;for(let y=0;y<=p;y++){o.rowOffsets.set(y,m);let x=o.rows.get(y);x===void 0&&(x=80);const v=x>0?16:0;m+=x+v}let b=96;for(let y=0;y<=g;y++){o.colOffsets.set(y,b);let x=o.columnWidths.get(y);x===void 0&&(x=80);const v=x>0?16:0;b+=x+v}}catch(p){console.error("Error calculating rowOffsets",p)}this.observableState.gridMetrics=o}defineSelectable(e){return this.observableState.queuedSelection.has(e.path)&&(this.observableState.queuedSelection.delete(e.path),Y(()=>{this.observableState.selection.set(e.path,e)})),this.observableState.selection.has(e.path)&&Y(()=>{this.observableState.selection.set(e.path,e)}),{select:q(()=>{this.observableState.selection.clear(),this.observableState.selection.set(e.path,e)})}}queueSelectPaths(e,t=!1){t||(this.observableState.selection.clear(),this.observableState.queuedSelection.clear());for(const n of e)this.observableState.selection.has(n)||this.observableState.queuedSelection.add(n)}setQueuedSelection(e){this.observableState.queuedSelection.clear();for(const t of e)this.observableState.queuedSelection.add(t)}setInflightPortConnectionOperation(e){this.observableState.inflightPortConnectionOperation=e}loadSubgraph(e,t){this.observableState.loadedSubgraphs.set(e,t)}setShowDebugValues(e){this.observableState.localSettings.showDebugValues=e,this.saveSettings()}setActiveTab(e){this.observableState.localSettings.activeTab=e,this.saveSettings()}setEnableResolumeIO(e){this.observableState.localSettings.enableResolumeIO=e,this.saveSettings()}toggleRegionExpansion(){this.observableState.localSettings.areRegionsExpanded=!this.observableState.localSettings.areRegionsExpanded,this.saveSettings(),this.updateGridMetrics(this.appController.observableState.graph)}setLastGroupSelection(e){this.observableState.lastGroupSelection=e}setViewport(e,t,n,o){this.observableState.viewport={x:e,y:t,w:n,h:o}}setDragPreview(e){this.observableState.dragPreview=e}setLoadedSubgraphs(e){this.observableState.loadedSubgraphs=e}setIsDraggingSelection(e){this.observableState.isDraggingSelection=e}setAltKeyPressed(e){this.observableState.altKeyPressed!==e&&(this.observableState.altKeyPressed=e)}getViewportCenterGridCoordinates(){const{viewport:e}=this.observableState;if(!e||e.w===0||e.h===0)return{x:5,y:5};e.x+e.w/2;const t=e.y+e.h/2;let n=0;for(const[r,s]of this.observableState.gridMetrics.rowOffsets){if(s>t){n=Math.max(0,r-1);break}n=r}const o=Math.max(0,...this.observableState.gridMetrics.rowOffsets.keys());if(n>=o){const r=this.observableState.gridMetrics.rowOffsets.get(o)||16,s=this.observableState.gridMetrics.rows.get(o)||80,a=r+s;if(t>a){const l=t-a,f=Math.floor(l/96)+1;n=o+f}}return{x:5,y:n}}copyToClipboard(){const e=this.appController.getState(),t=this.observableState.selection;if(t.size===0)return;const n=[];for(const[s]of t)e.graph.inner.nodes[s]&&n.push(s);if(n.length===0)return;const o=n.map(s=>e.graph.inner.nodes[s]),r=Object.values(e.graph.inner.connections).filter(s=>n.includes(s.fromNodeId)&&n.includes(s.toNodeId));this.observableState.clipboard={nodes:JSON.parse(JSON.stringify(o)),connections:JSON.parse(JSON.stringify(r))}}findFreeSpace(e,t){const n=this.appController.getState().graph.inner.nodes;let o=t,r=0;const s=50;for(;r<s;){if(!Object.values(n).some(l=>l.x===e&&l.y===o))return{x:e,y:o};o++,r++}return{x:e,y:t}}getGridCellFromPixels(e,t){const{rowOffsets:n,colOffsets:o,rows:r,columnWidths:s}=this.observableState.gridMetrics;let a=0;const l=Math.max(...Array.from(r.keys()),-1);for(let h=0;h<=l;h++){const d=n.get(h)??0,u=r.get(h)??80,p=u>0?16:0;if(t>=d&&t<d+u+p){a=h;break}if(h===l&&t>=d+u+p){const g=t-(d+u+p);a=l+1+Math.floor(g/96)}}let c=0;const f=Math.max(...Array.from(s.keys()),-1);if(e<96)c=0;else{let h=!1;for(let d=0;d<=f;d++){const u=o.get(d)??0,p=s.get(d)??80,g=p>0?16:0;if(e>=u&&e<u+p+g){c=d,h=!0;break}}if(!h){const d=o.get(f)??96,u=s.get(f)??80,p=d+u+16;if(e>=p){const g=e-p;c=f+1+Math.floor(g/96)}}}return{x:c,y:a}}}$e([q],Re.prototype,"updateInferredTypes");$e([q],Re.prototype,"recomputeEffectivePorts");$e([q],Re.prototype,"updateWireLayout");$e([q],Re.prototype,"updateGridMetrics");$e([q],Re.prototype,"queueSelectPaths");$e([q],Re.prototype,"setQueuedSelection");$e([q],Re.prototype,"setInflightPortConnectionOperation");$e([q],Re.prototype,"loadSubgraph");$e([q],Re.prototype,"setShowDebugValues");$e([q],Re.prototype,"setActiveTab");$e([q],Re.prototype,"setEnableResolumeIO");$e([q],Re.prototype,"toggleRegionExpansion");$e([q],Re.prototype,"setLastGroupSelection");$e([q],Re.prototype,"setViewport");$e([q],Re.prototype,"setDragPreview");$e([q],Re.prototype,"setLoadedSubgraphs");$e([q],Re.prototype,"setIsDraggingSelection");$e([q],Re.prototype,"setAltKeyPressed");$e([q],Re.prototype,"copyToClipboard");class Sv{constructor(){this.nodes=new Map,this.ctx=new(window.AudioContext||window.webkitAudioContext),this.nodes.set("destination",this.ctx.destination),this.ctx.onstatechange=()=>{this.onStateChange?.(this.ctx.state)}}resume(){this.ctx.state==="suspended"&&this.ctx.resume()}get state(){return this.ctx.state}clear(){for(const e of this.nodes.values())try{if(e.disconnect(),e.stop)try{e.stop()}catch{}}catch(t){console.warn("Error clearing audio node:",t)}this.nodes.clear(),this.nodes.set("destination",this.ctx.destination)}execute(e){for(const t of e)try{switch(t.type){case"clear":{this.clear();break}case"createOscillator":{const n=this.ctx.createOscillator();n.onended=()=>{this.nodes.delete(t.id)},this.nodes.set(t.id,n);break}case"createGain":{this.nodes.set(t.id,this.ctx.createGain());break}case"createBiquadFilter":{this.nodes.set(t.id,this.ctx.createBiquadFilter());break}case"connect":{const n=this.nodes.get(t.sourceId),o=this.nodes.get(t.destId);n&&o&&n.connect(o);break}case"disconnect":{const n=this.nodes.get(t.sourceId);n&&n.disconnect();break}case"start":{const n=this.nodes.get(t.id);if(n){const o=this.ctx.currentTime;n.start(o+t.time)}break}case"stop":{const n=this.nodes.get(t.id);if(n){const o=this.ctx.currentTime;n.stop(o+t.time)}break}case"setParamValue":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].setValueAtTime(t.value,o+t.time)}break}case"linearRampToValueAtTime":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].linearRampToValueAtTime(t.value,o+t.time)}break}case"exponentialRampToValueAtTime":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].exponentialRampToValueAtTime(t.value,o+t.time)}break}case"setTargetAtTime":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].setTargetAtTime(t.target,o+t.startTime,t.timeConstant)}break}case"cancelScheduledValues":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].cancelScheduledValues(o+t.time)}break}case"setNodeProperty":{const n=this.nodes.get(t.id);n&&(n[t.property]=t.value);break}case"dispose":{const n=this.nodes.get(t.id);n&&(n.disconnect(),this.nodes.delete(t.id));break}}}catch(n){console.error("AudioRenderer error:",n,t)}}}var kv=Object.defineProperty,Cv=Object.getOwnPropertyDescriptor,$n=(i,e,t,n)=>{for(var o=n>1?void 0:n?Cv(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&kv(e,t,o),o};class mn{constructor(){this.devices=new Map,this.selectedDeviceIds=new Set,this.recentEvents=[],this.activeNotes=new Map,this.ccValues=new Map,$i(this)}addDevice(e){this.devices.set(e.id,e)}removeDevice(e){this.devices.delete(e),this.selectedDeviceIds.delete(e)}toggleDeviceSelection(e){this.selectedDeviceIds.has(e)?this.selectedDeviceIds.delete(e):this.selectedDeviceIds.add(e)}addEvent(e){this.recentEvents.unshift(e),this.recentEvents.length>20&&this.recentEvents.pop();const t=`${e.deviceId}:${e.channel}`;e.type==="note_on"?this.activeNotes.set(`${t}:${e.note}`,e.velocity):e.type==="note_off"?this.activeNotes.delete(`${t}:${e.note}`):e.type==="cc"&&this.ccValues.set(`${t}:${e.cc}`,e.value)}}$n([F],mn.prototype,"devices",2);$n([F],mn.prototype,"selectedDeviceIds",2);$n([F.shallow],mn.prototype,"recentEvents",2);$n([F],mn.prototype,"activeNotes",2);$n([F],mn.prototype,"ccValues",2);$n([q],mn.prototype,"addDevice",1);$n([q],mn.prototype,"removeDevice",1);$n([q],mn.prototype,"toggleDeviceSelection",1);$n([q],mn.prototype,"addEvent",1);class Av{constructor(){this.state=new mn,this.midiAccess=null,this.listeners=new Set,this.init()}async init(){if(!navigator.requestMIDIAccess){console.warn("Web MIDI API not supported in this browser.");return}try{this.midiAccess=await navigator.requestMIDIAccess(),this.updateDevices(),this.midiAccess&&(this.midiAccess.onstatechange=()=>{this.updateDevices()})}catch(e){console.error("Failed to access Web MIDI API:",e)}}onMidiEvent(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}dispatchEvent(e){this.listeners.forEach(t=>t(e))}updateDevices(){if(!this.midiAccess||!this.midiAccess)return;Array.from(this.midiAccess.inputs.values()).forEach(t=>{const n={id:t.id,name:t.name||`Unknown Device ${t.id}`,manufacturer:t.manufacturer||"",state:t.state,connection:t.connection};this.state.addDevice(n),t.onmidimessage=o=>this.handleMidiMessage(o,t.id)})}handleMidiMessage(e,t){if(this.state.selectedDeviceIds.size>0&&!this.state.selectedDeviceIds.has(t))return;const n=e.data;if(!n||n.length<2)return;const o=n[0],r=o>>4,s=(o&15)+1,a=n[1],l=n.length>2?n[2]:0;let c=null;if(r===9){const f=l;f>0?c={deviceId:t,channel:s,type:"note_on",note:a,velocity:f/127,time:Date.now()}:c={deviceId:t,channel:s,type:"note_off",note:a,velocity:0,time:Date.now()}}else r===8?c={deviceId:t,channel:s,type:"note_off",note:a,velocity:0,time:Date.now()}:r===11&&(c={deviceId:t,channel:s,type:"cc",cc:a,value:l,time:Date.now()});c&&(this.state.addEvent(c),this.dispatchEvent(c))}}const kn=new Av,_v="modulepreload",Mv=function(i){return"/"+i},Sh={},Oe=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=l(t.map(c=>{if(c=Mv(c),c in Sh)return;Sh[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":_v,f||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),f)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};class Iv{constructor(e){this.onStatusUpdated=e.onStatusUpdated,this.onExternalClockAdjusted=e.onExternalClockAdjusted,this.onDebugDataExported=e.onDebugDataExported,this.worker=new Worker(new URL("/assets/audio_to_clock.worker-DfoDBUBB.js",import.meta.url),{type:"module"}),this.worker.onmessage=t=>{const{type:n,payload:o}=t.data;n==="ready"?this.onStatusUpdated?.({message:"Ready",isError:!1}):n==="status"?this.onStatusUpdated?.(o):n==="clock"?this.onExternalClockAdjusted?.(o):n==="debug"&&this.onDebugDataExported?.(o)},this.worker.postMessage({type:"init",payload:{featureExtractorUrl:e.featureExtractorUrl,bpmPhaseModelUrl:e.bpmPhaseModelUrl,audioToClockConfig:{exportAllDebugData:e.exportAllDebugData,inferenceConfig:e.inferenceConfig,stabilizerConfig:e.stabilizerConfig,externalClockControllerConfig:e.externalClockControllerConfig}}})}addAudio(e,t,n){this.worker.postMessage({type:"addAudio",payload:{buffer:e,currentTime:t,sampleRate:n}})}resync(e){this.worker.postMessage({type:"resync",payload:!!e})}resetHardSync(){this.worker.postMessage({type:"resetHardSync"})}setForceExportAllDebugData(e){this.worker.postMessage({type:"setForceExportAllDebugData",payload:e})}connectAudioPort(e){this.worker.postMessage({type:"connectAudioPort",payload:e},[e])}setRunning(e){this.worker.postMessage({type:"setRunning",payload:e})}connectEventPort(e){this.worker.postMessage({type:"connectEventPort",payload:e},[e])}}function Wr(i,e){const t=e-i.lastUpdateTime,n=60/i.bpm,o=t/n*2*Math.PI;let r=i.phase+o;return Math.atan2(Math.sin(r),Math.cos(r))}function ql(i,e){const t=e-i.lastUpdateTime,n=60/i.bpm,o=t/n;return i.barPhase+o}class Ov{constructor(){this.activeStream=null,this.activeDeviceId=null,this._audioContext=null,this._sourceNode=null}get stream(){return this.activeStream}get context(){return this._audioContext||(this._audioContext=new AudioContext),this._audioContext}get sourceNode(){return this._sourceNode}get deviceId(){return this.activeDeviceId}async enumerateDevices(){try{return(await navigator.mediaDevices.enumerateDevices()).filter(t=>t.kind==="audioinput"&&t.deviceId)}catch(e){return console.error("Error enumerating devices",e),[]}}async requestPermissions(){try{return(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(t=>t.stop()),!0}catch(e){return console.error("Permission denied or error:",e),!1}}async startStream(e){const t=this.context;if(t.state==="suspended")try{await t.resume()}catch(o){console.warn("Failed to resume AudioContext:",o)}if(this.activeDeviceId===e&&this.activeStream?.active&&this._sourceNode)return t;this.stopStream();const n={audio:{deviceId:{exact:e},autoGainControl:!1,noiseSuppression:!1,echoCancellation:!1,channelCount:1}};try{this.activeStream=await navigator.mediaDevices.getUserMedia(n)}catch(o){console.warn(`Exact deviceId constraint failed for ${e}, trying fallback...`,o);const r={audio:{deviceId:e,autoGainControl:!1,noiseSuppression:!1,echoCancellation:!1,channelCount:1}};this.activeStream=await navigator.mediaDevices.getUserMedia(r)}return this.activeDeviceId=e,this._sourceNode=t.createMediaStreamSource(this.activeStream),t}stopStream(){this._sourceNode?.disconnect(),this._sourceNode=null,this.activeStream&&(this.activeStream.getTracks().forEach(e=>e.stop()),this.activeStream=null),this.activeDeviceId=null}}var Ev=Object.defineProperty,Pv=Object.getOwnPropertyDescriptor,se=(i,e,t,n)=>{for(var o=n>1?void 0:n?Pv(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&Ev(e,t,o),o};class re{constructor(e,t,n,o){this.localController=e,this.connectToExecutor=t,this.onResolumeSettingsChanged=n,this.onBeatSyncStateChanged=o,this.loadingMessage="Waiting to initialize...",this.predictedBpm=0,this.bestBpm=0,this.bestBarPhase=0,this.externalBpm=0,this.audioDevices=[],this.isMicActive=!1,this.selectedDeviceId=null,this.overallConfidence=0,this.bestTrajectoryWeight=0,this.bpmVariance=0,this.debugDataEnabled=!1,this.displayQuantizedBeat=0,this.lastResyncTime=0,this.lastInferenceUpdate=null,this.lastStabilizerUpdate=null,this.lastExternalClockUpdate=null,this.lastExternalClockEvent=null,this.rollingWaveformBuffer=null,this.audioCaptureNode=null,this.micSource=null,this.inputManager=new Ov,this.isMidiMappingActive=!1,this.midiListenerDisposer=null,$i(this),setTimeout(()=>{this.initialize()},1e3)}get audioContextInstance(){return this.inputManager.context}get localControllerInstance(){return this.localController}async initialize(){this.loadingMessage="Loading models...";const e=new MessageChannel;this.connectToExecutor&&this.connectToExecutor(e.port1);const t=this.localController.observableState.localSettings.beatSyncResolumeControlEnabled;this.onResolumeSettingsChanged(t),this.onBeatSyncStateChanged(this.isMicActive),this.setupMidiListener(),this.audioToClock=new Iv({featureExtractorUrl:"models/mel25/feature_extractor_fp32.onnx",bpmPhaseModelUrl:"models/mel25/main_model_fp32.onnx",stabilizerConfig:{exportDebugData:!0},externalClockControllerConfig:{exportDebugData:!0},exportAllDebugData:this.debugDataEnabled,onStatusUpdated:o=>{Y(()=>{this.loadingMessage=o.message})},onExternalClockAdjusted:o=>{Y(()=>{o.bpm&&(this.externalBpm=o.bpm)})},onDebugDataExported:o=>this.handleDebugData(o)}),this.audioToClock.connectEventPort(e.port2);const n=this.inputManager.context;try{const{default:o}=await Oe(async()=>{const{default:l}=await import("./audio-capture.worklet-BujC5PMq.js");return{default:l}},[]);await n.audioWorklet.addModule(o),await this.enumerateDevices();const r=this.localController.observableState.localSettings.beatSyncAudioDeviceId,s=this.localController.observableState.localSettings.beatSyncSystemEnabled,a=this.audioDevices.some(l=>l.deviceId===r);s&&(r&&a?await this.startMic(r):r?(console.warn(`[BeatSync] Saved audio device ${r} not found. Auto-connect validation failed.`),this.audioDevices.length>0&&await this.startMic(this.audioDevices[0].deviceId)):this.audioDevices.length>0&&await this.startMic(this.audioDevices[0].deviceId))}catch(o){console.error("Failed to load audio worklet module",o)}}setDebugDataEnabled(e){this.debugDataEnabled=e,this.audioToClock?.setForceExportAllDebugData(e)}get isHardSync(){return this.localController.observableState.localSettings.beatSyncHardSyncEnabled}setHardSync(e){this.localController.observableState.localSettings.beatSyncHardSyncEnabled=e,this.localController.saveSettings()}resync(){this.audioToClock?.resync(this.isHardSync),Y(()=>{this.lastResyncTime=Date.now()})}setResolumeControlEnabled(e){this.localController.observableState.localSettings.beatSyncResolumeControlEnabled=e,this.localController.saveSettings(),this.onResolumeSettingsChanged(e)}get midiMapping(){return this.localController.observableState.localSettings.beatSyncResyncMidiMapping}toggleMidiDoLearn(){this.isMidiMappingActive=!this.isMidiMappingActive}clearMidiMapping(){this.localController.observableState.localSettings.beatSyncResyncMidiMapping=null,this.localController.saveSettings(),this.isMidiMappingActive=!1}setupMidiListener(){this.midiListenerDisposer=kn.onMidiEvent(e=>{if(this.isMidiMappingActive){Y(()=>{let o=null;e.type==="note_on"?o={channel:e.channel,type:"note",index:e.note}:e.type==="cc"&&(o={channel:e.channel,type:"cc",index:e.cc}),o&&(this.localController.observableState.localSettings.beatSyncResyncMidiMapping=o,this.localController.saveSettings(),this.isMidiMappingActive=!1)});return}const t=this.midiMapping;if(!t)return;let n=!1;t.type==="note"&&e.type==="note_on"?e.channel===t.channel&&e.note===t.index&&(n=!0):t.type==="cc"&&e.type==="cc"&&e.channel===t.channel&&e.cc===t.index&&e.value>0&&(n=!0),n&&this.resync()})}handleDebugData(e){if(e.inference&&(this.predictedBpm=e.inference.bpm,this.lastInferenceUpdate=e.inference),e.stabilizer){this.lastStabilizerUpdate=e.stabilizer;const t=e.stabilizer.bestTrajectory;t&&(this.bestBpm=t.bpm,this.bestBarPhase=t.barPhase),this.bpmVariance=e.stabilizer.bpmVariance,this.bestTrajectoryWeight=t?t.weight:0}if(e.externalClock){this.lastExternalClockUpdate=e.externalClock;const t=this.inputManager.context.currentTime||0,n=ql(e.externalClock,t);this.displayQuantizedBeat=Math.floor(n)%4}e.externalClockEvent&&(this.lastExternalClockEvent=e.externalClockEvent)}async enumerateDevices(){const e=await this.inputManager.enumerateDevices();Y(()=>{this.audioDevices=e})}async requestPermissions(){await this.inputManager.requestPermissions()?await this.enumerateDevices():Y(()=>{this.loadingMessage="Permission denied. Please allow microphone access."})}async startMic(e){if(this.selectedDeviceId===e&&this.isMicActive){await this.stopMic();return}this.isMicActive&&await this.stopMic();const t=this.inputManager.context;t.state==="suspended"&&t.resume().catch(n=>console.warn("[BeatSync] Auto-resume failed (waiting for gesture):",n));try{await this.inputManager.startStream(e);const n=this.inputManager.sourceNode;if(!n)throw new Error("No source node available after startStream");Y(()=>{this.isMicActive=!0,this.selectedDeviceId=e,this.localController.observableState.localSettings.beatSyncAudioDeviceId=e,this.localController.saveSettings()}),this.onBeatSyncStateChanged(!0),this.setupAudioGraph(n)}catch(n){console.error("Error starting mic stream:",n),Y(()=>{this.loadingMessage="Error accessing microphone."})}}get systemEnabled(){return this.localController.observableState.localSettings.beatSyncSystemEnabled}setSystemEnabled(e){if(this.localController.observableState.localSettings.beatSyncSystemEnabled=e,this.localController.saveSettings(),e){const n=this.localController.observableState.localSettings.beatSyncAudioDeviceId||(this.audioDevices.length>0?this.audioDevices[0].deviceId:null);n?this.startMic(n):Y(()=>{this.loadingMessage="No audio devices found."})}else this.stopMic()}async stopMic(){this.micSource?.disconnect(),this.audioCaptureNode?.disconnect(),this.audioToClock?.setRunning(!1),this.micSource=null,this.audioCaptureNode=null,this.inputManager.stopStream(),Y(()=>{this.isMicActive=!1,this.selectedDeviceId=null,this.rollingWaveformBuffer=null}),this.onBeatSyncStateChanged(!1)}setupAudioGraph(e){const t=this.inputManager.context;this.micSource=e;const n=new AudioWorkletNode(t,"audio-capture-processor"),o=new MessageChannel;n.port.postMessage({type:"init",port:o.port1},[o.port1]),this.audioToClock?.connectAudioPort(o.port2),this.audioCaptureNode=n,e.connect(n),n.connect(t.destination),this.audioToClock?.setRunning(!0)}async resumeAudio(){const e=this.inputManager.context;if(e.state==="suspended")try{await e.resume()}catch(t){console.warn("[BeatSync] Resume failed:",t)}}dispose(){this.stopMic()}}se([F],re.prototype,"loadingMessage",2);se([F],re.prototype,"predictedBpm",2);se([F],re.prototype,"bestBpm",2);se([F],re.prototype,"bestBarPhase",2);se([F],re.prototype,"externalBpm",2);se([F],re.prototype,"audioDevices",2);se([F],re.prototype,"isMicActive",2);se([F],re.prototype,"selectedDeviceId",2);se([F],re.prototype,"overallConfidence",2);se([F],re.prototype,"bestTrajectoryWeight",2);se([F],re.prototype,"bpmVariance",2);se([F],re.prototype,"debugDataEnabled",2);se([F],re.prototype,"displayQuantizedBeat",2);se([F],re.prototype,"lastResyncTime",2);se([F.ref],re.prototype,"lastInferenceUpdate",2);se([F.ref],re.prototype,"lastStabilizerUpdate",2);se([F.ref],re.prototype,"lastExternalClockUpdate",2);se([F.ref],re.prototype,"lastExternalClockEvent",2);se([F],re.prototype,"rollingWaveformBuffer",2);se([q],re.prototype,"setDebugDataEnabled",1);se([q],re.prototype,"setHardSync",1);se([q],re.prototype,"setResolumeControlEnabled",1);se([F],re.prototype,"isMidiMappingActive",2);se([q],re.prototype,"toggleMidiDoLearn",1);se([q],re.prototype,"clearMidiMapping",1);se([q],re.prototype,"handleDebugData",1);se([q],re.prototype,"enumerateDevices",1);se([q],re.prototype,"requestPermissions",1);se([q],re.prototype,"startMic",1);se([q],re.prototype,"setSystemEnabled",1);se([q],re.prototype,"stopMic",1);var Tv=Object.defineProperty,Eo=(i,e,t,n)=>{for(var o=void 0,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(e,t,o)||o);return o&&Tv(e,t,o),o};const kh=60;class Fi{constructor(e,t){this.appController=e,this.localController=t,this.outputs=new Map,this.inputs=new Map,this.uiStates=new Map,this.stats={nodeCount:0,executionTime:0},this.isRealtimeGraph=!1,this.frame=0,this.nodeRepository=ee,this.realtimeNodeCache=new Map,this.hasLoadedGraph=!1,this.pendingDirtyNodeIds=new Set,this.audioRenderer=new Sv,this.lastMidiEventTime=0,this.lastInferredTypesJson="",this.virtualInputMappings={},this.outputRemappings={},this.stepScheduled=!1,this.lastStepTime=0,this.midiEventBuffer=[],this.beatSyncManager=new re(t,n=>this.connectExecutorToBeatSync(n),n=>this.sendResolumeSettings(n),n=>this.sendBeatSyncState(n)),$i(this),this.compilerWorker=new Worker(new URL("/assets/compiler.worker-Bo2AcOGZ.js",import.meta.url),{type:"module"}),this.executorWorker=new Worker(new URL("/assets/executor.worker-Bpnohyn6.js",import.meta.url),{type:"module"}),this.setupWorkerListeners(),this.appController.onCompiledGraphDirty(()=>{this.recompileAndRun()}),this.appController.onGraphReset(()=>{this.hasLoadedGraph=!1}),this.appController.onConfigChange(n=>{this.updateNodeConfigsAndRealtimeStatus(n)}),this.appController.onInputUpdate(n=>{this.handleInputUpdates(n)}),un(()=>({ccVersion:kn.state.ccValues.size+Array.from(kn.state.ccValues.values()).reduce((n,o)=>n+o,0),cc:new Map(kn.state.ccValues),notes:new Map(kn.state.activeNotes)}),({cc:n,notes:o})=>{const r=new Map;for(const[a,l]of n)r.set(a,l);for(const[a,l]of o)r.set(a,l);const s={type:"MIDI_UPDATE",values:r,events:[]};this.executorWorker.postMessage(s)},{delay:16}),kn.onMidiEvent(n=>{this.midiEventBuffer.push(n)}),un(()=>this.localController.observableState.selection.size,n=>{n>0&&this.audioRenderer.state==="suspended"&&this.audioRenderer.resume()}),this.audioRenderer.onStateChange=n=>{this.executorWorker.postMessage({type:"UPDATE_AUDIO_STATE",state:n})},setTimeout(()=>{this.executorWorker.postMessage({type:"UPDATE_AUDIO_STATE",state:this.audioRenderer.state})},100)}resumeAudio(){this.audioRenderer.state==="suspended"&&this.audioRenderer.resume(),this.beatSyncManager.resumeAudio()}sendResolumeControl(e){const t={type:"RESOLUME_CONTROL",action:e};this.executorWorker.postMessage(t)}sendResolumeParameter(e,t){const n={type:"RESOLUME_SET_VALUE",path:e,value:t};this.executorWorker.postMessage(n)}sendResolumeSettings(e){const t={type:"RESOLUME_SETTINGS",enabled:e};this.executorWorker.postMessage(t)}sendBeatSyncState(e){const t={type:"BEAT_SYNC_STATE",isActive:e};this.executorWorker.postMessage(t)}connectExecutorToBeatSync(e){const t={type:"CONNECT_AUX_PORT",port:e};this.executorWorker.postMessage(t,[e])}sendNodeMessage(e,t){const n={type:"NODE_MESSAGE",nodeId:e,message:t};this.executorWorker.postMessage(n)}setupWorkerListeners(){this.compilerWorker.onmessage=e=>{const t=e.data;t.type==="GRAPH_COMPILED"?this.handleGraphCompiled(t):t.type==="CONFIGS_COMPILED"&&this.handleConfigsCompiled(t)},this.executorWorker.onmessage=e=>{const t=e.data;t.type==="EXECUTION_UPDATE"?this.handleExecutionUpdate(t):t.type==="INFERRED_TYPES"&&this.handleInferredTypes(t)}}handleInferredTypes(e){if(e.inferredNodeTypes){const t=JSON.stringify(e.inferredNodeTypes);if(t===this.lastInferredTypesJson)return;this.lastInferredTypesJson=t,this.localController.updateInferredTypes(e.inferredNodeTypes,n=>this.appController.observableState.graph.inner.nodes[n]?.config.typeId)}}handleGraphCompiled(e){this.virtualInputMappings=e.virtualInputMappings||{},this.outputRemappings=e.outputRemappings||{},Y(()=>{this.outputs.clear(),this.inputs.clear(),this.uiStates.clear()});const t={type:"INIT_GRAPH",graph:e.graph,inferredNodeTypes:e.inferredTypes,isRecompilation:this.hasLoadedGraph,dirtyNodeIds:Array.from(this.pendingDirtyNodeIds),nodeMetadata:e.nodeMetadata,idMap:e.idMap};this.pendingDirtyNodeIds.clear(),this.hasLoadedGraph=!0,this.executorWorker.postMessage(t),e.inferredTypes&&this.localController.updateInferredTypes(e.inferredTypes,n=>this.appController.observableState.graph.inner.nodes[n]?.config.typeId),Y(()=>{for(const[n,o]of Object.entries(e.graph.nodes))o.defaultConfig&&this.localController.observableState.compiledNodeConfigs.set(n,o.defaultConfig)}),this.checkRealtimeStatus(),this.updateLoopState()}handleConfigsCompiled(e){Y(()=>{for(const[t,n]of Object.entries(e.configs)){this.localController.observableState.compiledNodeConfigs.set(t,n);const o={type:"UPDATE_CONFIG",nodeId:t,config:n,isRealtime:!1};this.executorWorker.postMessage(o)}}),this.checkRealtimeStatus(),this.updateLoopState()}handleExecutionUpdate(e){Y(()=>{if(e.outputs instanceof Map)for(const[t,n]of e.outputs.entries())this.outputs.set(t,n);else for(const[t,n]of Object.entries(e.outputs))this.outputs.set(t,n);if(e.inputs)if(e.inputs instanceof Map)for(const[t,n]of e.inputs.entries())this.inputs.set(t,n);else for(const[t,n]of Object.entries(e.inputs))this.inputs.set(t,n);if(e.uiOutputs)if(e.uiOutputs instanceof Map)for(const[t,n]of e.uiOutputs.entries())this.uiStates.set(t,n);else for(const[t,n]of Object.entries(e.uiOutputs))this.uiStates.set(t,n);this.stats=e.stats,this.frame++}),e.audioCommands&&this.audioRenderer.execute(e.audioCommands)}updateNodeConfigsAndRealtimeStatus(e){const t=this.appController.observableState,n=[],o=e?e.map(r=>t.graph.inner.nodes[r]).filter(r=>!!r):Object.values(t.graph.inner.nodes);for(const r of o){const s=vi(r.config);n.push({id:r.id,typeId:r.config.typeId,config:s});const a=this.virtualInputMappings[r.id];if(a){const l=s.values||{};for(const[c,f]of Object.entries(a)){const h=l[c];h!==void 0&&n.push({id:f,typeId:"io.input",config:{values:{0:h}}})}}}if(n.length>0){const r=n.filter(s=>this.nodeRepository.getNodeType(s.typeId)?.shouldRecompileOnConfigChange?.(s.config)??!1);if(r.length>0){for(const s of r)this.pendingDirtyNodeIds.add(s.id);this.recompileAndRun()}else this.compilerWorker.postMessage({type:"COMPILE_CONFIGS",nodes:n})}}checkRealtimeStatus(){const e=this.appController.observableState,t=this.localController.observableState.compiledNodeConfigs;for(const n of Object.values(e.graph.inner.nodes)){const o=t.get(n.id)??vi(n.config),{typeId:r}=n.config,s=this.nodeRepository.getNodeType(r);if(!s)continue;const a=s.definition.isRealtime?.(o)??!1;this.realtimeNodeCache.set(n.id,a)}}updateLoopState(){let e=!1;for(const t of this.realtimeNodeCache.values())if(t){e=!0;break}if(this.isRealtimeGraph!==e){Y(()=>{this.isRealtimeGraph=e});const t={type:"CONTROL",action:e?"START":"STOP",frameRate:kh};this.executorWorker.postMessage(t)}this.isRealtimeGraph||this.scheduleStep()}handleInputUpdates(e){for(const t of e){const n={type:"UPDATE_INPUT",name:t.nodeId,value:JSON.parse(JSON.stringify(t.inputs))};this.executorWorker.postMessage(n);const o=this.virtualInputMappings[t.nodeId];if(o)for(const[r,s]of Object.entries(t.inputs)){const a=o[r];if(a){const l={type:"UPDATE_INPUT",name:a,value:{value:s}};this.executorWorker.postMessage(l)}}}this.isRealtimeGraph||this.scheduleStep()}scheduleStep(){if(this.stepScheduled)return;const t=performance.now()-this.lastStepTime,n=1e3/kh;t>=n?this.performStep():(this.stepScheduled=!0,setTimeout(()=>{this.performStep(),this.stepScheduled=!1},n-t))}performStep(){if(this.lastStepTime=performance.now(),this.midiEventBuffer.length>0){const t=this.midiEventBuffer;this.midiEventBuffer=[];const n={type:"MIDI_UPDATE",values:new Map,events:t};this.executorWorker.postMessage(n)}const e={type:"CONTROL",action:"STEP"};this.executorWorker.postMessage(e)}recompileAndRun(){const e=this.appController.observableState,t=this.localController.observableState.loadedSubgraphs,n={type:"COMPILE_GRAPH",state:vi(e),subgraphs:Object.fromEntries(vi(t))};this.compilerWorker.postMessage(n)}}Eo([F],Fi.prototype,"outputs");Eo([F],Fi.prototype,"inputs");Eo([F],Fi.prototype,"uiStates");Eo([F],Fi.prototype,"stats");Eo([F],Fi.prototype,"isRealtimeGraph");Eo([F],Fi.prototype,"frame");var Dv=Object.defineProperty,Lv=Object.getOwnPropertyDescriptor,bn=(i,e,t,n)=>{for(var o=n>1?void 0:n?Lv(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&Dv(e,t,o),o};const Ua="nano-repatch-db",qi="handles",Ch="workspace-handle";class Jt{constructor(e,t){this.appController=e,this.localController=t,this.currentDirHandle=null,this.files=[],this.currentGraphId=null,this.isWaitingForPermission=!1,$i(this),this.init(),un(()=>vi(this.appController.observableState.graph.inner),()=>{this.saveCurrentGraph()},{delay:1e3})}async init(){await this.initDB();const e=await this.loadHandle();if(e){Y(()=>{this.currentDirHandle=e});try{await e.queryPermission({mode:"readwrite"})==="granted"&&await this.refreshFiles()}catch(o){console.warn("Failed to query permission on init",o)}}const n=new URLSearchParams(window.location.search).get("graph");if(n)if(Y(()=>{this.currentGraphId=n}),e)try{await e.queryPermission({mode:"readwrite"})!=="granted"?Y(()=>{this.isWaitingForPermission=!0}):await this.openFile(n)}catch(o){console.warn("Failed to query permission for graph load",o)}else Y(()=>{this.isWaitingForPermission=!0})}initDB(){return new Promise((e,t)=>{const n=indexedDB.open(Ua,1);n.onupgradeneeded=o=>{const r=o.target.result;r.objectStoreNames.contains(qi)||r.createObjectStore(qi)},n.onsuccess=()=>e(),n.onerror=()=>t(n.error)})}async saveHandle(e){return new Promise((t,n)=>{const o=indexedDB.open(Ua,1);o.onsuccess=r=>{const a=r.target.result.transaction(qi,"readwrite");a.objectStore(qi).put(e,Ch),a.oncomplete=()=>t(),a.onerror=()=>n(a.error)}})}async loadHandle(){return new Promise((e,t)=>{const n=indexedDB.open(Ua,1);n.onsuccess=o=>{const l=o.target.result.transaction(qi,"readonly").objectStore(qi).get(Ch);l.onsuccess=()=>e(l.result||null),l.onerror=()=>t(l.error)},n.onerror=()=>t(n.error)})}async openFolder(){try{console.log("Calling showDirectoryPicker");const e=await window.showDirectoryPicker({mode:"readwrite"});Y(()=>{this.currentDirHandle=e}),await this.saveHandle(e),await this.refreshFiles(),Y(()=>{this.isWaitingForPermission=!1})}catch(e){console.error("Error opening folder:",e)}}async refreshFiles(){if(!this.currentDirHandle||await this.currentDirHandle.queryPermission({mode:"readwrite"})!=="granted"&&await this.currentDirHandle.requestPermission({mode:"readwrite"})!=="granted")return;const t=[],n=async(o,r="")=>{for await(const[s,a]of o.entries())a.kind==="file"&&s.endsWith(".json")?t.push({name:r+s,handle:a}):a.kind==="directory"&&(s.startsWith(".")||await n(a,r+s+"/"))};await n(this.currentDirHandle),Y(()=>{this.files=t.sort((o,r)=>o.name.localeCompare(r.name))}),this.currentGraphId&&await this.openFile(this.currentGraphId),this.loadAllSubgraphs()}async loadAllSubgraphs(){if(!this.currentDirHandle)return;const e=new Map;await Promise.all(this.files.map(async t=>{try{const o=await(await t.handle.getFile()).text(),r=JSON.parse(o),s={inner:r,auxiliary:np(r)},a=t.name.replace(".json","").replace(/\//g,".");e.set(a,s)}catch(n){console.warn(`Failed to load subgraph ${t.name}`,n)}})),this.localController?.setLoadedSubgraphs(e)}async openFile(e){if(!this.currentDirHandle)return;const t=this.files.find(n=>n.name===e);if(!t){try{const n=await this.getFileHandleByPath(e,!1);await this.loadFileHandle(n,e)}catch(n){console.error(`File ${e} not found`,n)}return}await this.loadFileHandle(t.handle,e)}async loadFileHandle(e,t){const o=await(await e.getFile()).text();try{const r=JSON.parse(o);this.appController.loadGraph(r),Y(()=>{this.currentGraphId=t});const s=new URL(window.location.href);s.searchParams.set("graph",t),window.history.replaceState({},"",s.toString())}catch(r){console.error("Error parsing graph JSON:",r)}}async getFileHandleByPath(e,t=!1){if(!this.currentDirHandle)throw new Error("No directory handle");const n=e.split("/"),o=n.pop();let r=this.currentDirHandle;for(const s of n)t?r=await r.getDirectoryHandle(s,{create:!0}):r=await r.getDirectoryHandle(s);return r.getFileHandle(o,{create:t})}async saveCurrentGraph(){if(!this.currentDirHandle||!this.currentGraphId)return;const e=this.appController.getState().graph.inner,t=JSON.stringify(e,null,2);try{let n;const o=this.files.find(s=>s.name===this.currentGraphId);o?n=o.handle:n=await this.getFileHandleByPath(this.currentGraphId,!0);const r=await n.createWritable();await r.write(t),await r.close(),this.loadAllSubgraphs()}catch(n){console.error("Error saving graph:",n)}}async createNewGraph(e){if(!this.currentDirHandle)return;if(e.endsWith(".json")||(e+=".json"),this.files.some(n=>n.name===e))throw new Error("File already exists");const t={nodes:{},connections:{}};try{const o=await(await this.getFileHandleByPath(e,!0)).createWritable();await o.write(JSON.stringify(t,null,2)),await o.close(),await this.refreshFiles(),await this.openFile(e)}catch(n){throw console.error("Error creating new graph:",n),n}}}bn([F],Jt.prototype,"currentDirHandle",2);bn([F],Jt.prototype,"files",2);bn([F],Jt.prototype,"currentGraphId",2);bn([F],Jt.prototype,"isWaitingForPermission",2);bn([q],Jt.prototype,"openFolder",1);bn([q],Jt.prototype,"refreshFiles",1);bn([q],Jt.prototype,"loadAllSubgraphs",1);bn([q],Jt.prototype,"openFile",1);bn([q],Jt.prototype,"saveCurrentGraph",1);bn([q],Jt.prototype,"createNewGraph",1);class Jn{constructor(e,t,n){this.id=e.id,this.name=n||e.name||"Untitled",this.type=e.valuetype||"unknown",this.value=e.value;const o=t.endsWith("/")?"":"/",r=this.name.toLowerCase().replace(/[^a-z0-9]+/g,"_");this.path=`${t}${o}${r}`,Bi(this)}update(e){this.value=e}}class ya{constructor(e,t){this.params=[],this.id=e.id,this.name=e.name?.value||e.display_name||`Effect ${e.id}`,this.path=`${t}/effects/${e.id}`,Bi(this),this.parse(e)}parse(e){if(e.params)for(const[t,n]of Object.entries(e.params))fr(n)&&this.params.push(new Jn(n,this.path,t));for(const[t,n]of Object.entries(e))t!=="params"&&fr(n)&&this.params.push(new Jn(n,this.path,t))}}class lp{constructor(e,t,n){this.params=[],this.effects=[],this.id=e.id,this.name=e.name?.value||`Clip ${n+1}`,this.path=`${t}/clips/${n+1}`,e.thumbnail?.path&&(this.thumbnail=e.thumbnail.path),Bi(this),this.parse(e)}parse(e){const t=(n,o)=>{for(const[r,s]of Object.entries(n))r==="effects"&&Array.isArray(s)?s.forEach(a=>this.effects.push(new ya(a,o))):fr(s)?this.params.push(new Jn(s,o,r)):typeof s=="object"&&s!==null&&!Array.isArray(s)&&t(s,`${o}/${r}`)};t(e,this.path)}}class cp{constructor(e,t,n){this.clips=[],this.params=[],this.effects=[],this.id=e.id,this.name=e.name?.value||`Layer ${n+1}`,this.path=`${t}/layers/${n+1}`,Bi(this),this.parse(e)}parse(e){e.clips&&Array.isArray(e.clips)&&(this.clips=e.clips.map((n,o)=>new lp(n,this.path,o)));const t=(n,o)=>{for(const[r,s]of Object.entries(n))r!=="clips"&&(r==="effects"&&Array.isArray(s)?s.forEach(a=>this.effects.push(new ya(a,o))):fr(s)?this.params.push(new Jn(s,o,r)):typeof s=="object"&&s!==null&&!Array.isArray(s)&&t(s,`${o}/${r}`))};t(e,this.path)}}class fp{constructor(){this.layers=[],this.params=[],this.effects=[],this.path="/composition",Bi(this)}load(e){this.layers=[],this.params=[],this.effects=[],e.layers&&Array.isArray(e.layers)&&(this.layers=e.layers.map((n,o)=>new cp(n,this.path,o)));const t=(n,o)=>{for(const[r,s]of Object.entries(n))r==="layers"||r==="decks"||(r==="effects"&&Array.isArray(s)?s.forEach(a=>this.effects.push(new ya(a,o))):fr(s)?this.params.push(new Jn(s,o,r)):typeof s=="object"&&s!==null&&!Array.isArray(s)&&t(s,`${o}/${r}`))};t(e,this.path)}}function fr(i){return typeof i=="object"&&i!==null&&"valuetype"in i&&"id"in i}class Rv{constructor(e){let t=e?.baseUrl??"http://127.0.0.1:8080",n=e?.customFetch,o=e?.customWebSocket??WebSocket;t.endsWith("/")&&(t=t.slice(0,-1)),this.apiBaseUrl=`${t}/api/v1`,this.customFetch=n,this.WebSocket=o}async request(e,t){try{const n=`${this.apiBaseUrl}${e}`,o=await(this.customFetch??fetch)(n,t);if(!o.ok)throw new Error(`API request failed: ${o.status} ${o.statusText}`);return o.status===204?void 0:await o.json()}catch(n){throw console.error("[RealResolumeApiClient] Error in request:",n),n}}getProductInfo(){return this.request("/product")}connectWebSocket(e,t,n){const o=this.apiBaseUrl.replace(/^http/,"ws"),r=new this.WebSocket(o);return r.onmessage=s=>{try{const a=JSON.parse(s.data);e(a)}catch(a){console.error("[RealResolumeApiClient] Error parsing message:",a)}},t&&(r.onerror=t),n&&(r.onclose=n),r.onopen=()=>console.log("[RealResolumeApiClient] Connection established."),{send:s=>{r.readyState===r.OPEN?r.send(JSON.stringify(s)):console.warn("[RealResolumeApiClient] WebSocket is not open. Message not sent:",s)},close:()=>r.close(),get readyState(){return r.readyState}}}}class Nv{constructor(e){this.ws=null,this.isConnecting=!1,this.parameterMap=new Map,this.subscriptions=new Map,this.client=e?.client??new Rv,this.state=new fp,Bi(this)}subscribe(e,t,n){this.subscriptions.has(e)||this.subscriptions.set(e,new Map),this.subscriptions.get(e).set(t,n);const o=this.getParameter(e);o&&this.ws?(this.sendSubscription(o),n&&n(o.value)):console.log(`[ResolumeManager] Queued subscription for ${e} (Connected: ${!!this.ws}, Param found: ${!!o})`)}sendSubscription(e){this.ws&&this.ws.send({action:"subscribe",parameter:`/parameter/by-id/${e.id}`})}unsubscribe(e,t){const n=this.subscriptions.get(e);n&&(n.delete(t),n.size===0&&this.subscriptions.delete(e))}async connect(){if(!(this.isConnected||this.isConnecting)){this.isConnecting=!0,console.log("[ResolumeManager] Connecting...");try{const e=await this.client.getProductInfo();console.log(`[ResolumeManager] Connected to ${e.name} v${e.major}.${e.minor}`),this.ws=this.client.connectWebSocket(t=>this.handleMessage(t),t=>console.error("[ResolumeManager] WS Error:",t),()=>{console.log("[ResolumeManager] WS Closed"),this.isConnecting=!1})}catch(e){console.error("[ResolumeManager] Connection failed:",e),this.isConnecting=!1}}}get isConnected(){return!!this.ws}disconnect(){this.ws&&(this.ws.close(),this.ws=null)}handleMessage(e){if(e.layers&&e.decks)console.log("[ResolumeManager] Received initial state"),this.state.load(e),this.rebuildParameterMap();else if(e.type==="parameter_update"){const t=this.findParameterById(e.id);if(t){t.update(e.value);const n=this.subscriptions.get(t.path);n&&n.forEach(o=>{o&&o(e.value)})}}}rebuildParameterMap(){this.parameterMap.clear();const e=t=>{t instanceof Jn&&this.parameterMap.set(t.path,t);for(const n in t){const o=t[n];Array.isArray(o)?o.forEach(e):typeof o=="object"&&o!==null&&(o instanceof Jn||o.constructor.name.startsWith("Resolume"))&&e(o)}};e(this.state),console.log(`[ResolumeManager] Indexed ${this.parameterMap.size} parameters`);for(const[t,n]of this.subscriptions.entries()){const o=this.parameterMap.get(t);o&&(console.log(`[ResolumeManager] Resubscribing to ${t}`),this.sendSubscription(o),n.forEach(r=>{r&&r(o.value)}))}}findParameterById(e){for(const t of this.parameterMap.values())if(t.id===e)return t}getParameter(e){return this.parameterMap.get(e)}setValue(e,t){const n=this.getParameter(e);n&&this.ws&&this.ws.send({action:"set",parameter:`/parameter/by-id/${n.id}`,id:n.id,value:t})}}const pt=new Nv,j=new Qy,E=new Re(j);j.setMetricsProvider({isRegionCollapsed:i=>E.observableState.gridMetrics.regions.get(i)?.isCollapsed??!1});const _e=new Fi(j,E),mi=new Jt(j,E);E.settingsLoaded.then(()=>{E.observableState.localSettings.enableResolumeIO&&(pt.connect(),_e.sendResolumeControl("connect"))});un(()=>vi(j.observableState.graph.inner),()=>{E.updateWireLayout(j.observableState.graph)},{fireImmediately:!0,delay:50});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:o,elements:r}=n;return{kind:o,elements:r,finisher(s){customElements.define(t,s)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $v=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Bv=(i,e,t)=>{e.constructor.createProperty(t,i)};function U(i){return(e,t)=>t!==void 0?Bv(i,e,t):$v(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(i){return U({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vv=({finisher:i,descriptor:e})=>(t,n)=>{var o;if(n===void 0){const r=(o=t.originalKey)!==null&&o!==void 0?o:t.key,s=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return i!=null&&(s.finisher=function(a){i(a,r)}),s}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i?.(r,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bt(i,e){return Vv({descriptor:t=>({get(){var o,r;return(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ga;((Ga=window.HTMLSlotElement)===null||Ga===void 0?void 0:Ga.prototype.assignedElements)!=null;const hp=`.la,
.las,
.lar,
.lal,
.lad,
.lab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1; }

.la-lg {
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -.0667em; }

.la-xs {
  font-size: .75em; }

.la-sm {
  font-size: .875em; }

.la-1x {
  font-size: 1em; }

.la-2x {
  font-size: 2em; }

.la-3x {
  font-size: 3em; }

.la-4x {
  font-size: 4em; }

.la-5x {
  font-size: 5em; }

.la-6x {
  font-size: 6em; }

.la-7x {
  font-size: 7em; }

.la-8x {
  font-size: 8em; }

.la-9x {
  font-size: 9em; }

.la-10x {
  font-size: 10em; }

.la-fw {
  text-align: center;
  width: 1.25em; }

.la-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0; }
  .la-ul > li {
    position: relative; }

.la-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit; }

.la-border {
  border: solid 0.08em #eee;
  border-radius: .1em;
  padding: .2em .25em .15em; }

.la-pull-left {
  float: left; }

.la-pull-right {
  float: right; }

.la.la-pull-left,
.las.la-pull-left,
.lar.la-pull-left,
.lal.la-pull-left,
.lab.la-pull-left {
  margin-right: .3em; }

.la.la-pull-right,
.las.la-pull-right,
.lar.la-pull-right,
.lal.la-pull-right,
.lab.la-pull-right {
  margin-left: .3em; }

.la-spin {
  -webkit-animation: la-spin 2s infinite linear;
          animation: la-spin 2s infinite linear; }

.la-pulse {
  -webkit-animation: la-spin 1s infinite steps(8);
          animation: la-spin 1s infinite steps(8); }

@-webkit-keyframes la-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes la-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

.la-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg); }

.la-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg); }

.la-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg); }

.la-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1); }

.la-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1); }

.la-flip-both, .la-flip-horizontal.la-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1); }

:root .la-rotate-90,
:root .la-rotate-180,
:root .la-rotate-270,
:root .la-flip-horizontal,
:root .la-flip-vertical,
:root .la-flip-both {
  -webkit-filter: none;
          filter: none; }

.la-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em; }

.la-stack-1x,
.la-stack-2x {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%; }

.la-stack-1x {
  line-height: inherit; }

.la-stack-2x {
  font-size: 2em; }

.la-inverse {
  color: #fff; }

/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
readers do not read off random characters that represent icons */
.la-500px:before {
  content: "\\f26e"; }

.la-accessible-icon:before {
  content: "\\f368"; }

.la-accusoft:before {
  content: "\\f369"; }

.la-acquisitions-incorporated:before {
  content: "\\f6af"; }

.la-ad:before {
  content: "\\f641"; }

.la-address-book:before {
  content: "\\f2b9"; }

.la-address-card:before {
  content: "\\f2bb"; }

.la-adjust:before {
  content: "\\f042"; }

.la-adn:before {
  content: "\\f170"; }

.la-adobe:before {
  content: "\\f778"; }

.la-adversal:before {
  content: "\\f36a"; }

.la-affiliatetheme:before {
  content: "\\f36b"; }

.la-air-freshener:before {
  content: "\\f5d0"; }

.la-airbnb:before {
  content: "\\f834"; }

.la-algolia:before {
  content: "\\f36c"; }

.la-align-center:before {
  content: "\\f037"; }

.la-align-justify:before {
  content: "\\f039"; }

.la-align-left:before {
  content: "\\f036"; }

.la-align-right:before {
  content: "\\f038"; }

.la-alipay:before {
  content: "\\f642"; }

.la-allergies:before {
  content: "\\f461"; }

.la-amazon:before {
  content: "\\f270"; }

.la-amazon-pay:before {
  content: "\\f42c"; }

.la-ambulance:before {
  content: "\\f0f9"; }

.la-american-sign-language-interpreting:before {
  content: "\\f2a3"; }

.la-amilia:before {
  content: "\\f36d"; }

.la-anchor:before {
  content: "\\f13d"; }

.la-android:before {
  content: "\\f17b"; }

.la-angellist:before {
  content: "\\f209"; }

.la-angle-double-down:before {
  content: "\\f103"; }

.la-angle-double-left:before {
  content: "\\f100"; }

.la-angle-double-right:before {
  content: "\\f101"; }

.la-angle-double-up:before {
  content: "\\f102"; }

.la-angle-down:before {
  content: "\\f107"; }

.la-angle-left:before {
  content: "\\f104"; }

.la-angle-right:before {
  content: "\\f105"; }

.la-angle-up:before {
  content: "\\f106"; }

.la-angry:before {
  content: "\\f556"; }

.la-angrycreative:before {
  content: "\\f36e"; }

.la-angular:before {
  content: "\\f420"; }

.la-ankh:before {
  content: "\\f644"; }

.la-app-store:before {
  content: "\\f36f"; }

.la-app-store-ios:before {
  content: "\\f370"; }

.la-apper:before {
  content: "\\f371"; }

.la-apple:before {
  content: "\\f179"; }

.la-apple-alt:before {
  content: "\\f5d1"; }

.la-apple-pay:before {
  content: "\\f415"; }

.la-archive:before {
  content: "\\f187"; }

.la-archway:before {
  content: "\\f557"; }

.la-arrow-alt-circle-down:before {
  content: "\\f358"; }

.la-arrow-alt-circle-left:before {
  content: "\\f359"; }

.la-arrow-alt-circle-right:before {
  content: "\\f35a"; }

.la-arrow-alt-circle-up:before {
  content: "\\f35b"; }

.la-arrow-circle-down:before {
  content: "\\f0ab"; }

.la-arrow-circle-left:before {
  content: "\\f0a8"; }

.la-arrow-circle-right:before {
  content: "\\f0a9"; }

.la-arrow-circle-up:before {
  content: "\\f0aa"; }

.la-arrow-down:before {
  content: "\\f063"; }

.la-arrow-left:before {
  content: "\\f060"; }

.la-arrow-right:before {
  content: "\\f061"; }

.la-arrow-up:before {
  content: "\\f062"; }

.la-arrows-alt:before {
  content: "\\f0b2"; }

.la-arrows-alt-h:before {
  content: "\\f337"; }

.la-arrows-alt-v:before {
  content: "\\f338"; }

.la-artstation:before {
  content: "\\f77a"; }

.la-assistive-listening-systems:before {
  content: "\\f2a2"; }

.la-asterisk:before {
  content: "\\f069"; }

.la-asymmetrik:before {
  content: "\\f372"; }

.la-at:before {
  content: "\\f1fa"; }

.la-atlas:before {
  content: "\\f558"; }

.la-atlassian:before {
  content: "\\f77b"; }

.la-atom:before {
  content: "\\f5d2"; }

.la-audible:before {
  content: "\\f373"; }

.la-audio-description:before {
  content: "\\f29e"; }

.la-autoprefixer:before {
  content: "\\f41c"; }

.la-avianex:before {
  content: "\\f374"; }

.la-aviato:before {
  content: "\\f421"; }

.la-award:before {
  content: "\\f559"; }

.la-aws:before {
  content: "\\f375"; }

.la-baby:before {
  content: "\\f77c"; }

.la-baby-carriage:before {
  content: "\\f77d"; }

.la-backspace:before {
  content: "\\f55a"; }

.la-backward:before {
  content: "\\f04a"; }

.la-bacon:before {
  content: "\\f7e5"; }

.la-balance-scale:before {
  content: "\\f24e"; }

.la-balance-scale-left:before {
  content: "\\f515"; }

.la-balance-scale-right:before {
  content: "\\f516"; }

.la-ban:before {
  content: "\\f05e"; }

.la-band-aid:before {
  content: "\\f462"; }

.la-bandcamp:before {
  content: "\\f2d5"; }

.la-barcode:before {
  content: "\\f02a"; }

.la-bars:before {
  content: "\\f0c9"; }

.la-baseball-ball:before {
  content: "\\f433"; }

.la-basketball-ball:before {
  content: "\\f434"; }

.la-bath:before {
  content: "\\f2cd"; }

.la-battery-empty:before {
  content: "\\f244"; }

.la-battery-full:before {
  content: "\\f240"; }

.la-battery-half:before {
  content: "\\f242"; }

.la-battery-quarter:before {
  content: "\\f243"; }

.la-battery-three-quarters:before {
  content: "\\f241"; }

.la-battle-net:before {
  content: "\\f835"; }

.la-bed:before {
  content: "\\f236"; }

.la-beer:before {
  content: "\\f0fc"; }

.la-behance:before {
  content: "\\f1b4"; }

.la-behance-square:before {
  content: "\\f1b5"; }

.la-bell:before {
  content: "\\f0f3"; }

.la-bell-slash:before {
  content: "\\f1f6"; }

.la-bezier-curve:before {
  content: "\\f55b"; }

.la-bible:before {
  content: "\\f647"; }

.la-bicycle:before {
  content: "\\f206"; }

.la-biking:before {
  content: "\\f84a"; }

.la-bimobject:before {
  content: "\\f378"; }

.la-binoculars:before {
  content: "\\f1e5"; }

.la-biohazard:before {
  content: "\\f780"; }

.la-birthday-cake:before {
  content: "\\f1fd"; }

.la-bitbucket:before {
  content: "\\f171"; }

.la-bitcoin:before {
  content: "\\f379"; }

.la-bity:before {
  content: "\\f37a"; }

.la-black-tie:before {
  content: "\\f27e"; }

.la-blackberry:before {
  content: "\\f37b"; }

.la-blender:before {
  content: "\\f517"; }

.la-blender-phone:before {
  content: "\\f6b6"; }

.la-blind:before {
  content: "\\f29d"; }

.la-blog:before {
  content: "\\f781"; }

.la-blogger:before {
  content: "\\f37c"; }

.la-blogger-b:before {
  content: "\\f37d"; }

.la-bluetooth:before {
  content: "\\f293"; }

.la-bluetooth-b:before {
  content: "\\f294"; }

.la-bold:before {
  content: "\\f032"; }

.la-bolt:before {
  content: "\\f0e7"; }

.la-bomb:before {
  content: "\\f1e2"; }

.la-bone:before {
  content: "\\f5d7"; }

.la-bong:before {
  content: "\\f55c"; }

.la-book:before {
  content: "\\f02d"; }

.la-book-dead:before {
  content: "\\f6b7"; }

.la-book-medical:before {
  content: "\\f7e6"; }

.la-book-open:before {
  content: "\\f518"; }

.la-book-reader:before {
  content: "\\f5da"; }

.la-bookmark:before {
  content: "\\f02e"; }

.la-bootstrap:before {
  content: "\\f836"; }

.la-border-all:before {
  content: "\\f84c"; }

.la-border-none:before {
  content: "\\f850"; }

.la-border-style:before {
  content: "\\f853"; }

.la-bowling-ball:before {
  content: "\\f436"; }

.la-box:before {
  content: "\\f466"; }

.la-box-open:before {
  content: "\\f49e"; }

.la-boxes:before {
  content: "\\f468"; }

.la-braille:before {
  content: "\\f2a1"; }

.la-brain:before {
  content: "\\f5dc"; }

.la-bread-slice:before {
  content: "\\f7ec"; }

.la-briefcase:before {
  content: "\\f0b1"; }

.la-briefcase-medical:before {
  content: "\\f469"; }

.la-broadcast-tower:before {
  content: "\\f519"; }

.la-broom:before {
  content: "\\f51a"; }

.la-brush:before {
  content: "\\f55d"; }

.la-btc:before {
  content: "\\f15a"; }

.la-buffer:before {
  content: "\\f837"; }

.la-bug:before {
  content: "\\f188"; }

.la-building:before {
  content: "\\f1ad"; }

.la-bullhorn:before {
  content: "\\f0a1"; }

.la-bullseye:before {
  content: "\\f140"; }

.la-burn:before {
  content: "\\f46a"; }

.la-buromobelexperte:before {
  content: "\\f37f"; }

.la-bus:before {
  content: "\\f207"; }

.la-bus-alt:before {
  content: "\\f55e"; }

.la-business-time:before {
  content: "\\f64a"; }

.la-buy-n-large:before {
  content: "\\f8a6"; }

.la-buysellads:before {
  content: "\\f20d"; }

.la-calculator:before {
  content: "\\f1ec"; }

.la-calendar:before {
  content: "\\f133"; }

.la-calendar-alt:before {
  content: "\\f073"; }

.la-calendar-check:before {
  content: "\\f274"; }

.la-calendar-day:before {
  content: "\\f783"; }

.la-calendar-minus:before {
  content: "\\f272"; }

.la-calendar-plus:before {
  content: "\\f271"; }

.la-calendar-times:before {
  content: "\\f273"; }

.la-calendar-week:before {
  content: "\\f784"; }

.la-camera:before {
  content: "\\f030"; }

.la-camera-retro:before {
  content: "\\f083"; }

.la-campground:before {
  content: "\\f6bb"; }

.la-canadian-maple-leaf:before {
  content: "\\f785"; }

.la-candy-cane:before {
  content: "\\f786"; }

.la-cannabis:before {
  content: "\\f55f"; }

.la-capsules:before {
  content: "\\f46b"; }

.la-car:before {
  content: "\\f1b9"; }

.la-car-alt:before {
  content: "\\f5de"; }

.la-car-battery:before {
  content: "\\f5df"; }

.la-car-crash:before {
  content: "\\f5e1"; }

.la-car-side:before {
  content: "\\f5e4"; }

.la-caret-down:before {
  content: "\\f0d7"; }

.la-caret-left:before {
  content: "\\f0d9"; }

.la-caret-right:before {
  content: "\\f0da"; }

.la-caret-square-down:before {
  content: "\\f150"; }

.la-caret-square-left:before {
  content: "\\f191"; }

.la-caret-square-right:before {
  content: "\\f152"; }

.la-caret-square-up:before {
  content: "\\f151"; }

.la-caret-up:before {
  content: "\\f0d8"; }

.la-carrot:before {
  content: "\\f787"; }

.la-cart-arrow-down:before {
  content: "\\f218"; }

.la-cart-plus:before {
  content: "\\f217"; }

.la-cash-register:before {
  content: "\\f788"; }

.la-cat:before {
  content: "\\f6be"; }

.la-cc-amazon-pay:before {
  content: "\\f42d"; }

.la-cc-amex:before {
  content: "\\f1f3"; }

.la-cc-apple-pay:before {
  content: "\\f416"; }

.la-cc-diners-club:before {
  content: "\\f24c"; }

.la-cc-discover:before {
  content: "\\f1f2"; }

.la-cc-jcb:before {
  content: "\\f24b"; }

.la-cc-mastercard:before {
  content: "\\f1f1"; }

.la-cc-paypal:before {
  content: "\\f1f4"; }

.la-cc-stripe:before {
  content: "\\f1f5"; }

.la-cc-visa:before {
  content: "\\f1f0"; }

.la-centercode:before {
  content: "\\f380"; }

.la-centos:before {
  content: "\\f789"; }

.la-certificate:before {
  content: "\\f0a3"; }

.la-chair:before {
  content: "\\f6c0"; }

.la-chalkboard:before {
  content: "\\f51b"; }

.la-chalkboard-teacher:before {
  content: "\\f51c"; }

.la-charging-station:before {
  content: "\\f5e7"; }

.la-chart-area:before {
  content: "\\f1fe"; }

.la-chart-bar:before {
  content: "\\f080"; }

.la-chart-line:before {
  content: "\\f201"; }

.la-chart-pie:before {
  content: "\\f200"; }

.la-check:before {
  content: "\\f00c"; }

.la-check-circle:before {
  content: "\\f058"; }

.la-check-double:before {
  content: "\\f560"; }

.la-check-square:before {
  content: "\\f14a"; }

.la-cheese:before {
  content: "\\f7ef"; }

.la-chess:before {
  content: "\\f439"; }

.la-chess-bishop:before {
  content: "\\f43a"; }

.la-chess-board:before {
  content: "\\f43c"; }

.la-chess-king:before {
  content: "\\f43f"; }

.la-chess-knight:before {
  content: "\\f441"; }

.la-chess-pawn:before {
  content: "\\f443"; }

.la-chess-queen:before {
  content: "\\f445"; }

.la-chess-rook:before {
  content: "\\f447"; }

.la-chevron-circle-down:before {
  content: "\\f13a"; }

.la-chevron-circle-left:before {
  content: "\\f137"; }

.la-chevron-circle-right:before {
  content: "\\f138"; }

.la-chevron-circle-up:before {
  content: "\\f139"; }

.la-chevron-down:before {
  content: "\\f078"; }

.la-chevron-left:before {
  content: "\\f053"; }

.la-chevron-right:before {
  content: "\\f054"; }

.la-chevron-up:before {
  content: "\\f077"; }

.la-child:before {
  content: "\\f1ae"; }

.la-chrome:before {
  content: "\\f268"; }

.la-chromecast:before {
  content: "\\f838"; }

.la-church:before {
  content: "\\f51d"; }

.la-circle:before {
  content: "\\f111"; }

.la-circle-notch:before {
  content: "\\f1ce"; }

.la-city:before {
  content: "\\f64f"; }

.la-clinic-medical:before {
  content: "\\f7f2"; }

.la-clipboard:before {
  content: "\\f328"; }

.la-clipboard-check:before {
  content: "\\f46c"; }

.la-clipboard-list:before {
  content: "\\f46d"; }

.la-clock:before {
  content: "\\f017"; }

.la-clone:before {
  content: "\\f24d"; }

.la-closed-captioning:before {
  content: "\\f20a"; }

.la-cloud:before {
  content: "\\f0c2"; }

.la-cloud-download-alt:before {
  content: "\\f381"; }

.la-cloud-meatball:before {
  content: "\\f73b"; }

.la-cloud-moon:before {
  content: "\\f6c3"; }

.la-cloud-moon-rain:before {
  content: "\\f73c"; }

.la-cloud-rain:before {
  content: "\\f73d"; }

.la-cloud-showers-heavy:before {
  content: "\\f740"; }

.la-cloud-sun:before {
  content: "\\f6c4"; }

.la-cloud-sun-rain:before {
  content: "\\f743"; }

.la-cloud-upload-alt:before {
  content: "\\f382"; }

.la-cloudscale:before {
  content: "\\f383"; }

.la-cloudsmith:before {
  content: "\\f384"; }

.la-cloudversify:before {
  content: "\\f385"; }

.la-cocktail:before {
  content: "\\f561"; }

.la-code:before {
  content: "\\f121"; }

.la-code-branch:before {
  content: "\\f126"; }

.la-codepen:before {
  content: "\\f1cb"; }

.la-codiepie:before {
  content: "\\f284"; }

.la-coffee:before {
  content: "\\f0f4"; }

.la-cog:before {
  content: "\\f013"; }

.la-cogs:before {
  content: "\\f085"; }

.la-coins:before {
  content: "\\f51e"; }

.la-columns:before {
  content: "\\f0db"; }

.la-comment:before {
  content: "\\f075"; }

.la-comment-alt:before {
  content: "\\f27a"; }

.la-comment-dollar:before {
  content: "\\f651"; }

.la-comment-dots:before {
  content: "\\f4ad"; }

.la-comment-medical:before {
  content: "\\f7f5"; }

.la-comment-slash:before {
  content: "\\f4b3"; }

.la-comments:before {
  content: "\\f086"; }

.la-comments-dollar:before {
  content: "\\f653"; }

.la-compact-disc:before {
  content: "\\f51f"; }

.la-compass:before {
  content: "\\f14e"; }

.la-compress:before {
  content: "\\f066"; }

.la-compress-arrows-alt:before {
  content: "\\f78c"; }

.la-concierge-bell:before {
  content: "\\f562"; }

.la-confluence:before {
  content: "\\f78d"; }

.la-connectdevelop:before {
  content: "\\f20e"; }

.la-contao:before {
  content: "\\f26d"; }

.la-cookie:before {
  content: "\\f563"; }

.la-cookie-bite:before {
  content: "\\f564"; }

.la-copy:before {
  content: "\\f0c5"; }

.la-copyright:before {
  content: "\\f1f9"; }

.la-cotton-bureau:before {
  content: "\\f89e"; }

.la-couch:before {
  content: "\\f4b8"; }

.la-cpanel:before {
  content: "\\f388"; }

.la-creative-commons:before {
  content: "\\f25e"; }

.la-creative-commons-by:before {
  content: "\\f4e7"; }

.la-creative-commons-nc:before {
  content: "\\f4e8"; }

.la-creative-commons-nc-eu:before {
  content: "\\f4e9"; }

.la-creative-commons-nc-jp:before {
  content: "\\f4ea"; }

.la-creative-commons-nd:before {
  content: "\\f4eb"; }

.la-creative-commons-pd:before {
  content: "\\f4ec"; }

.la-creative-commons-pd-alt:before {
  content: "\\f4ed"; }

.la-creative-commons-remix:before {
  content: "\\f4ee"; }

.la-creative-commons-sa:before {
  content: "\\f4ef"; }

.la-creative-commons-sampling:before {
  content: "\\f4f0"; }

.la-creative-commons-sampling-plus:before {
  content: "\\f4f1"; }

.la-creative-commons-share:before {
  content: "\\f4f2"; }

.la-creative-commons-zero:before {
  content: "\\f4f3"; }

.la-credit-card:before {
  content: "\\f09d"; }

.la-critical-role:before {
  content: "\\f6c9"; }

.la-crop:before {
  content: "\\f125"; }

.la-crop-alt:before {
  content: "\\f565"; }

.la-cross:before {
  content: "\\f654"; }

.la-crosshairs:before {
  content: "\\f05b"; }

.la-crow:before {
  content: "\\f520"; }

.la-crown:before {
  content: "\\f521"; }

.la-crutch:before {
  content: "\\f7f7"; }

.la-css3:before {
  content: "\\f13c"; }

.la-css3-alt:before {
  content: "\\f38b"; }

.la-cube:before {
  content: "\\f1b2"; }

.la-cubes:before {
  content: "\\f1b3"; }

.la-cut:before {
  content: "\\f0c4"; }

.la-cuttlefish:before {
  content: "\\f38c"; }

.la-d-and-d:before {
  content: "\\f38d"; }

.la-d-and-d-beyond:before {
  content: "\\f6ca"; }

.la-dashcube:before {
  content: "\\f210"; }

.la-database:before {
  content: "\\f1c0"; }

.la-deaf:before {
  content: "\\f2a4"; }

.la-delicious:before {
  content: "\\f1a5"; }

.la-democrat:before {
  content: "\\f747"; }

.la-deploydog:before {
  content: "\\f38e"; }

.la-deskpro:before {
  content: "\\f38f"; }

.la-desktop:before {
  content: "\\f108"; }

.la-dev:before {
  content: "\\f6cc"; }

.la-deviantart:before {
  content: "\\f1bd"; }

.la-dharmachakra:before {
  content: "\\f655"; }

.la-dhl:before {
  content: "\\f790"; }

.la-diagnoses:before {
  content: "\\f470"; }

.la-diaspora:before {
  content: "\\f791"; }

.la-dice:before {
  content: "\\f522"; }

.la-dice-d20:before {
  content: "\\f6cf"; }

.la-dice-d6:before {
  content: "\\f6d1"; }

.la-dice-five:before {
  content: "\\f523"; }

.la-dice-four:before {
  content: "\\f524"; }

.la-dice-one:before {
  content: "\\f525"; }

.la-dice-six:before {
  content: "\\f526"; }

.la-dice-three:before {
  content: "\\f527"; }

.la-dice-two:before {
  content: "\\f528"; }

.la-digg:before {
  content: "\\f1a6"; }

.la-digital-ocean:before {
  content: "\\f391"; }

.la-digital-tachograph:before {
  content: "\\f566"; }

.la-directions:before {
  content: "\\f5eb"; }

.la-discord:before {
  content: "\\f392"; }

.la-discourse:before {
  content: "\\f393"; }

.la-divide:before {
  content: "\\f529"; }

.la-dizzy:before {
  content: "\\f567"; }

.la-dna:before {
  content: "\\f471"; }

.la-dochub:before {
  content: "\\f394"; }

.la-docker:before {
  content: "\\f395"; }

.la-dog:before {
  content: "\\f6d3"; }

.la-dollar-sign:before {
  content: "\\f155"; }

.la-dolly:before {
  content: "\\f472"; }

.la-dolly-flatbed:before {
  content: "\\f474"; }

.la-donate:before {
  content: "\\f4b9"; }

.la-door-closed:before {
  content: "\\f52a"; }

.la-door-open:before {
  content: "\\f52b"; }

.la-dot-circle:before {
  content: "\\f192"; }

.la-dove:before {
  content: "\\f4ba"; }

.la-download:before {
  content: "\\f019"; }

.la-draft2digital:before {
  content: "\\f396"; }

.la-drafting-compass:before {
  content: "\\f568"; }

.la-dragon:before {
  content: "\\f6d5"; }

.la-draw-polygon:before {
  content: "\\f5ee"; }

.la-dribbble:before {
  content: "\\f17d"; }

.la-dribbble-square:before {
  content: "\\f397"; }

.la-dropbox:before {
  content: "\\f16b"; }

.la-drum:before {
  content: "\\f569"; }

.la-drum-steelpan:before {
  content: "\\f56a"; }

.la-drumstick-bite:before {
  content: "\\f6d7"; }

.la-drupal:before {
  content: "\\f1a9"; }

.la-dumbbell:before {
  content: "\\f44b"; }

.la-dumpster:before {
  content: "\\f793"; }

.la-dumpster-fire:before {
  content: "\\f794"; }

.la-dungeon:before {
  content: "\\f6d9"; }

.la-dyalog:before {
  content: "\\f399"; }

.la-earlybirds:before {
  content: "\\f39a"; }

.la-ebay:before {
  content: "\\f4f4"; }

.la-edge:before {
  content: "\\f282"; }

.la-edit:before {
  content: "\\f044"; }

.la-egg:before {
  content: "\\f7fb"; }

.la-eject:before {
  content: "\\f052"; }

.la-elementor:before {
  content: "\\f430"; }

.la-ellipsis-h:before {
  content: "\\f141"; }

.la-ellipsis-v:before {
  content: "\\f142"; }

.la-ello:before {
  content: "\\f5f1"; }

.la-ember:before {
  content: "\\f423"; }

.la-empire:before {
  content: "\\f1d1"; }

.la-envelope:before {
  content: "\\f0e0"; }

.la-envelope-open:before {
  content: "\\f2b6"; }

.la-envelope-open-text:before {
  content: "\\f658"; }

.la-envelope-square:before {
  content: "\\f199"; }

.la-envira:before {
  content: "\\f299"; }

.la-equals:before {
  content: "\\f52c"; }

.la-eraser:before {
  content: "\\f12d"; }

.la-erlang:before {
  content: "\\f39d"; }

.la-ethereum:before {
  content: "\\f42e"; }

.la-ethernet:before {
  content: "\\f796"; }

.la-etsy:before {
  content: "\\f2d7"; }

.la-euro-sign:before {
  content: "\\f153"; }

.la-evernote:before {
  content: "\\f839"; }

.la-exchange-alt:before {
  content: "\\f362"; }

.la-exclamation:before {
  content: "\\f12a"; }

.la-exclamation-circle:before {
  content: "\\f06a"; }

.la-exclamation-triangle:before {
  content: "\\f071"; }

.la-expand:before {
  content: "\\f065"; }

.la-expand-arrows-alt:before {
  content: "\\f31e"; }

.la-expeditedssl:before {
  content: "\\f23e"; }

.la-external-link-alt:before {
  content: "\\f35d"; }

.la-external-link-square-alt:before {
  content: "\\f360"; }

.la-eye:before {
  content: "\\f06e"; }

.la-eye-dropper:before {
  content: "\\f1fb"; }

.la-eye-slash:before {
  content: "\\f070"; }

.la-facebook:before {
  content: "\\f09a"; }

.la-facebook-f:before {
  content: "\\f39e"; }

.la-facebook-messenger:before {
  content: "\\f39f"; }

.la-facebook-square:before {
  content: "\\f082"; }

.la-fan:before {
  content: "\\f863"; }

.la-fantasy-flight-games:before {
  content: "\\f6dc"; }

.la-fast-backward:before {
  content: "\\f049"; }

.la-fast-forward:before {
  content: "\\f050"; }

.la-fax:before {
  content: "\\f1ac"; }

.la-feather:before {
  content: "\\f52d"; }

.la-feather-alt:before {
  content: "\\f56b"; }

.la-fedex:before {
  content: "\\f797"; }

.la-fedora:before {
  content: "\\f798"; }

.la-female:before {
  content: "\\f182"; }

.la-fighter-jet:before {
  content: "\\f0fb"; }

.la-figma:before {
  content: "\\f799"; }

.la-file:before {
  content: "\\f15b"; }

.la-file-alt:before {
  content: "\\f15c"; }

.la-file-archive:before {
  content: "\\f1c6"; }

.la-file-audio:before {
  content: "\\f1c7"; }

.la-file-code:before {
  content: "\\f1c9"; }

.la-file-contract:before {
  content: "\\f56c"; }

.la-file-csv:before {
  content: "\\f6dd"; }

.la-file-download:before {
  content: "\\f56d"; }

.la-file-excel:before {
  content: "\\f1c3"; }

.la-file-export:before {
  content: "\\f56e"; }

.la-file-image:before {
  content: "\\f1c5"; }

.la-file-import:before {
  content: "\\f56f"; }

.la-file-invoice:before {
  content: "\\f570"; }

.la-file-invoice-dollar:before {
  content: "\\f571"; }

.la-file-medical:before {
  content: "\\f477"; }

.la-file-medical-alt:before {
  content: "\\f478"; }

.la-file-pdf:before {
  content: "\\f1c1"; }

.la-file-powerpoint:before {
  content: "\\f1c4"; }

.la-file-prescription:before {
  content: "\\f572"; }

.la-file-signature:before {
  content: "\\f573"; }

.la-file-upload:before {
  content: "\\f574"; }

.la-file-video:before {
  content: "\\f1c8"; }

.la-file-word:before {
  content: "\\f1c2"; }

.la-fill:before {
  content: "\\f575"; }

.la-fill-drip:before {
  content: "\\f576"; }

.la-film:before {
  content: "\\f008"; }

.la-filter:before {
  content: "\\f0b0"; }

.la-fingerprint:before {
  content: "\\f577"; }

.la-fire:before {
  content: "\\f06d"; }

.la-fire-alt:before {
  content: "\\f7e4"; }

.la-fire-extinguisher:before {
  content: "\\f134"; }

.la-firefox:before {
  content: "\\f269"; }

.la-first-aid:before {
  content: "\\f479"; }

.la-first-order:before {
  content: "\\f2b0"; }

.la-first-order-alt:before {
  content: "\\f50a"; }

.la-firstdraft:before {
  content: "\\f3a1"; }

.la-fish:before {
  content: "\\f578"; }

.la-fist-raised:before {
  content: "\\f6de"; }

.la-flag:before {
  content: "\\f024"; }

.la-flag-checkered:before {
  content: "\\f11e"; }

.la-flag-usa:before {
  content: "\\f74d"; }

.la-flask:before {
  content: "\\f0c3"; }

.la-flickr:before {
  content: "\\f16e"; }

.la-flipboard:before {
  content: "\\f44d"; }

.la-flushed:before {
  content: "\\f579"; }

.la-fly:before {
  content: "\\f417"; }

.la-folder:before {
  content: "\\f07b"; }

.la-folder-minus:before {
  content: "\\f65d"; }

.la-folder-open:before {
  content: "\\f07c"; }

.la-folder-plus:before {
  content: "\\f65e"; }

.la-font:before {
  content: "\\f031"; }

.la-font-awesome:before {
  content: "\\f2b4"; }

.la-font-awesome-alt:before {
  content: "\\f35c"; }

.la-font-awesome-flag:before {
  content: "\\f425"; }

.la-font-awesome-logo-full:before {
  content: "\\f4e6"; }

.la-fonticons:before {
  content: "\\f280"; }

.la-fonticons-fi:before {
  content: "\\f3a2"; }

.la-football-ball:before {
  content: "\\f44e"; }

.la-fort-awesome:before {
  content: "\\f286"; }

.la-fort-awesome-alt:before {
  content: "\\f3a3"; }

.la-forumbee:before {
  content: "\\f211"; }

.la-forward:before {
  content: "\\f04e"; }

.la-foursquare:before {
  content: "\\f180"; }

.la-free-code-camp:before {
  content: "\\f2c5"; }

.la-freebsd:before {
  content: "\\f3a4"; }

.la-frog:before {
  content: "\\f52e"; }

.la-frown:before {
  content: "\\f119"; }

.la-frown-open:before {
  content: "\\f57a"; }

.la-fulcrum:before {
  content: "\\f50b"; }

.la-funnel-dollar:before {
  content: "\\f662"; }

.la-futbol:before {
  content: "\\f1e3"; }

.la-galactic-republic:before {
  content: "\\f50c"; }

.la-galactic-senate:before {
  content: "\\f50d"; }

.la-gamepad:before {
  content: "\\f11b"; }

.la-gas-pump:before {
  content: "\\f52f"; }

.la-gavel:before {
  content: "\\f0e3"; }

.la-gem:before {
  content: "\\f3a5"; }

.la-genderless:before {
  content: "\\f22d"; }

.la-get-pocket:before {
  content: "\\f265"; }

.la-gg:before {
  content: "\\f260"; }

.la-gg-circle:before {
  content: "\\f261"; }

.la-ghost:before {
  content: "\\f6e2"; }

.la-gift:before {
  content: "\\f06b"; }

.la-gifts:before {
  content: "\\f79c"; }

.la-git:before {
  content: "\\f1d3"; }

.la-git-alt:before {
  content: "\\f841"; }

.la-git-square:before {
  content: "\\f1d2"; }

.la-github:before {
  content: "\\f09b"; }

.la-github-alt:before {
  content: "\\f113"; }

.la-github-square:before {
  content: "\\f092"; }

.la-gitkraken:before {
  content: "\\f3a6"; }

.la-gitlab:before {
  content: "\\f296"; }

.la-gitter:before {
  content: "\\f426"; }

.la-glass-cheers:before {
  content: "\\f79f"; }

.la-glass-martini:before {
  content: "\\f000"; }

.la-glass-martini-alt:before {
  content: "\\f57b"; }

.la-glass-whiskey:before {
  content: "\\f7a0"; }

.la-glasses:before {
  content: "\\f530"; }

.la-glide:before {
  content: "\\f2a5"; }

.la-glide-g:before {
  content: "\\f2a6"; }

.la-globe:before {
  content: "\\f0ac"; }

.la-globe-africa:before {
  content: "\\f57c"; }

.la-globe-americas:before {
  content: "\\f57d"; }

.la-globe-asia:before {
  content: "\\f57e"; }

.la-globe-europe:before {
  content: "\\f7a2"; }

.la-gofore:before {
  content: "\\f3a7"; }

.la-golf-ball:before {
  content: "\\f450"; }

.la-goodreads:before {
  content: "\\f3a8"; }

.la-goodreads-g:before {
  content: "\\f3a9"; }

.la-google:before {
  content: "\\f1a0"; }

.la-google-drive:before {
  content: "\\f3aa"; }

.la-google-play:before {
  content: "\\f3ab"; }

.la-google-plus:before {
  content: "\\f2b3"; }

.la-google-plus-g:before {
  content: "\\f0d5"; }

.la-google-plus-square:before {
  content: "\\f0d4"; }

.la-google-wallet:before {
  content: "\\f1ee"; }

.la-gopuram:before {
  content: "\\f664"; }

.la-graduation-cap:before {
  content: "\\f19d"; }

.la-gratipay:before {
  content: "\\f184"; }

.la-grav:before {
  content: "\\f2d6"; }

.la-greater-than:before {
  content: "\\f531"; }

.la-greater-than-equal:before {
  content: "\\f532"; }

.la-grimace:before {
  content: "\\f57f"; }

.la-grin:before {
  content: "\\f580"; }

.la-grin-alt:before {
  content: "\\f581"; }

.la-grin-beam:before {
  content: "\\f582"; }

.la-grin-beam-sweat:before {
  content: "\\f583"; }

.la-grin-hearts:before {
  content: "\\f584"; }

.la-grin-squint:before {
  content: "\\f585"; }

.la-grin-squint-tears:before {
  content: "\\f586"; }

.la-grin-stars:before {
  content: "\\f587"; }

.la-grin-tears:before {
  content: "\\f588"; }

.la-grin-tongue:before {
  content: "\\f589"; }

.la-grin-tongue-squint:before {
  content: "\\f58a"; }

.la-grin-tongue-wink:before {
  content: "\\f58b"; }

.la-grin-wink:before {
  content: "\\f58c"; }

.la-grip-horizontal:before {
  content: "\\f58d"; }

.la-grip-lines:before {
  content: "\\f7a4"; }

.la-grip-lines-vertical:before {
  content: "\\f7a5"; }

.la-grip-vertical:before {
  content: "\\f58e"; }

.la-gripfire:before {
  content: "\\f3ac"; }

.la-grunt:before {
  content: "\\f3ad"; }

.la-guitar:before {
  content: "\\f7a6"; }

.la-gulp:before {
  content: "\\f3ae"; }

.la-h-square:before {
  content: "\\f0fd"; }

.la-hacker-news:before {
  content: "\\f1d4"; }

.la-hacker-news-square:before {
  content: "\\f3af"; }

.la-hackerrank:before {
  content: "\\f5f7"; }

.la-hamburger:before {
  content: "\\f805"; }

.la-hammer:before {
  content: "\\f6e3"; }

.la-hamsa:before {
  content: "\\f665"; }

.la-hand-holding:before {
  content: "\\f4bd"; }

.la-hand-holding-heart:before {
  content: "\\f4be"; }

.la-hand-holding-usd:before {
  content: "\\f4c0"; }

.la-hand-lizard:before {
  content: "\\f258"; }

.la-hand-middle-finger:before {
  content: "\\f806"; }

.la-hand-paper:before {
  content: "\\f256"; }

.la-hand-peace:before {
  content: "\\f25b"; }

.la-hand-point-down:before {
  content: "\\f0a7"; }

.la-hand-point-left:before {
  content: "\\f0a5"; }

.la-hand-point-right:before {
  content: "\\f0a4"; }

.la-hand-point-up:before {
  content: "\\f0a6"; }

.la-hand-pointer:before {
  content: "\\f25a"; }

.la-hand-rock:before {
  content: "\\f255"; }

.la-hand-scissors:before {
  content: "\\f257"; }

.la-hand-spock:before {
  content: "\\f259"; }

.la-hands:before {
  content: "\\f4c2"; }

.la-hands-helping:before {
  content: "\\f4c4"; }

.la-handshake:before {
  content: "\\f2b5"; }

.la-hanukiah:before {
  content: "\\f6e6"; }

.la-hard-hat:before {
  content: "\\f807"; }

.la-hashtag:before {
  content: "\\f292"; }

.la-hat-cowboy:before {
  content: "\\f8c0"; }

.la-hat-cowboy-side:before {
  content: "\\f8c1"; }

.la-hat-wizard:before {
  content: "\\f6e8"; }

.la-haykal:before {
  content: "\\f666"; }

.la-hdd:before {
  content: "\\f0a0"; }

.la-heading:before {
  content: "\\f1dc"; }

.la-headphones:before {
  content: "\\f025"; }

.la-headphones-alt:before {
  content: "\\f58f"; }

.la-headset:before {
  content: "\\f590"; }

.la-heart:before {
  content: "\\f004"; }

.la-heart-broken:before {
  content: "\\f7a9"; }

.la-heartbeat:before {
  content: "\\f21e"; }

.la-helicopter:before {
  content: "\\f533"; }

.la-highlighter:before {
  content: "\\f591"; }

.la-hiking:before {
  content: "\\f6ec"; }

.la-hippo:before {
  content: "\\f6ed"; }

.la-hips:before {
  content: "\\f452"; }

.la-hire-a-helper:before {
  content: "\\f3b0"; }

.la-history:before {
  content: "\\f1da"; }

.la-hockey-puck:before {
  content: "\\f453"; }

.la-holly-berry:before {
  content: "\\f7aa"; }

.la-home:before {
  content: "\\f015"; }

.la-hooli:before {
  content: "\\f427"; }

.la-hornbill:before {
  content: "\\f592"; }

.la-horse:before {
  content: "\\f6f0"; }

.la-horse-head:before {
  content: "\\f7ab"; }

.la-hospital:before {
  content: "\\f0f8"; }

.la-hospital-alt:before {
  content: "\\f47d"; }

.la-hospital-symbol:before {
  content: "\\f47e"; }

.la-hot-tub:before {
  content: "\\f593"; }

.la-hotdog:before {
  content: "\\f80f"; }

.la-hotel:before {
  content: "\\f594"; }

.la-hotjar:before {
  content: "\\f3b1"; }

.la-hourglass:before {
  content: "\\f254"; }

.la-hourglass-end:before {
  content: "\\f253"; }

.la-hourglass-half:before {
  content: "\\f252"; }

.la-hourglass-start:before {
  content: "\\f251"; }

.la-house-damage:before {
  content: "\\f6f1"; }

.la-houzz:before {
  content: "\\f27c"; }

.la-hryvnia:before {
  content: "\\f6f2"; }

.la-html5:before {
  content: "\\f13b"; }

.la-hubspot:before {
  content: "\\f3b2"; }

.la-i-cursor:before {
  content: "\\f246"; }

.la-ice-cream:before {
  content: "\\f810"; }

.la-icicles:before {
  content: "\\f7ad"; }

.la-icons:before {
  content: "\\f86d"; }

.la-id-badge:before {
  content: "\\f2c1"; }

.la-id-card:before {
  content: "\\f2c2"; }

.la-id-card-alt:before {
  content: "\\f47f"; }

.la-igloo:before {
  content: "\\f7ae"; }

.la-image:before {
  content: "\\f03e"; }

.la-images:before {
  content: "\\f302"; }

.la-imdb:before {
  content: "\\f2d8"; }

.la-inbox:before {
  content: "\\f01c"; }

.la-indent:before {
  content: "\\f03c"; }

.la-industry:before {
  content: "\\f275"; }

.la-infinity:before {
  content: "\\f534"; }

.la-info:before {
  content: "\\f129"; }

.la-info-circle:before {
  content: "\\f05a"; }

.la-instagram:before {
  content: "\\f16d"; }

.la-intercom:before {
  content: "\\f7af"; }

.la-internet-explorer:before {
  content: "\\f26b"; }

.la-invision:before {
  content: "\\f7b0"; }

.la-ioxhost:before {
  content: "\\f208"; }

.la-italic:before {
  content: "\\f033"; }

.la-itch-io:before {
  content: "\\f83a"; }

.la-itunes:before {
  content: "\\f3b4"; }

.la-itunes-note:before {
  content: "\\f3b5"; }

.la-java:before {
  content: "\\f4e4"; }

.la-jedi:before {
  content: "\\f669"; }

.la-jedi-order:before {
  content: "\\f50e"; }

.la-jenkins:before {
  content: "\\f3b6"; }

.la-jira:before {
  content: "\\f7b1"; }

.la-joget:before {
  content: "\\f3b7"; }

.la-joint:before {
  content: "\\f595"; }

.la-joomla:before {
  content: "\\f1aa"; }

.la-journal-whills:before {
  content: "\\f66a"; }

.la-js:before {
  content: "\\f3b8"; }

.la-js-square:before {
  content: "\\f3b9"; }

.la-jsfiddle:before {
  content: "\\f1cc"; }

.la-kaaba:before {
  content: "\\f66b"; }

.la-kaggle:before {
  content: "\\f5fa"; }

.la-key:before {
  content: "\\f084"; }

.la-keybase:before {
  content: "\\f4f5"; }

.la-keyboard:before {
  content: "\\f11c"; }

.la-keycdn:before {
  content: "\\f3ba"; }

.la-khanda:before {
  content: "\\f66d"; }

.la-kickstarter:before {
  content: "\\f3bb"; }

.la-kickstarter-k:before {
  content: "\\f3bc"; }

.la-kiss:before {
  content: "\\f596"; }

.la-kiss-beam:before {
  content: "\\f597"; }

.la-kiss-wink-heart:before {
  content: "\\f598"; }

.la-kiwi-bird:before {
  content: "\\f535"; }

.la-korvue:before {
  content: "\\f42f"; }

.la-landmark:before {
  content: "\\f66f"; }

.la-language:before {
  content: "\\f1ab"; }

.la-laptop:before {
  content: "\\f109"; }

.la-laptop-code:before {
  content: "\\f5fc"; }

.la-laptop-medical:before {
  content: "\\f812"; }

.la-laravel:before {
  content: "\\f3bd"; }

.la-lastfm:before {
  content: "\\f202"; }

.la-lastfm-square:before {
  content: "\\f203"; }

.la-laugh:before {
  content: "\\f599"; }

.la-laugh-beam:before {
  content: "\\f59a"; }

.la-laugh-squint:before {
  content: "\\f59b"; }

.la-laugh-wink:before {
  content: "\\f59c"; }

.la-layer-group:before {
  content: "\\f5fd"; }

.la-leaf:before {
  content: "\\f06c"; }

.la-leanpub:before {
  content: "\\f212"; }

.la-lemon:before {
  content: "\\f094"; }

.la-less:before {
  content: "\\f41d"; }

.la-less-than:before {
  content: "\\f536"; }

.la-less-than-equal:before {
  content: "\\f537"; }

.la-level-down-alt:before {
  content: "\\f3be"; }

.la-level-up-alt:before {
  content: "\\f3bf"; }

.la-life-ring:before {
  content: "\\f1cd"; }

.la-lightbulb:before {
  content: "\\f0eb"; }

.la-line:before {
  content: "\\f3c0"; }

.la-link:before {
  content: "\\f0c1"; }

.la-linkedin:before {
  content: "\\f08c"; }

.la-linkedin-in:before {
  content: "\\f0e1"; }

.la-linode:before {
  content: "\\f2b8"; }

.la-linux:before {
  content: "\\f17c"; }

.la-lira-sign:before {
  content: "\\f195"; }

.la-list:before {
  content: "\\f03a"; }

.la-list-alt:before {
  content: "\\f022"; }

.la-list-ol:before {
  content: "\\f0cb"; }

.la-list-ul:before {
  content: "\\f0ca"; }

.la-location-arrow:before {
  content: "\\f124"; }

.la-lock:before {
  content: "\\f023"; }

.la-lock-open:before {
  content: "\\f3c1"; }

.la-long-arrow-alt-down:before {
  content: "\\f309"; }

.la-long-arrow-alt-left:before {
  content: "\\f30a"; }

.la-long-arrow-alt-right:before {
  content: "\\f30b"; }

.la-long-arrow-alt-up:before {
  content: "\\f30c"; }

.la-low-vision:before {
  content: "\\f2a8"; }

.la-luggage-cart:before {
  content: "\\f59d"; }

.la-lyft:before {
  content: "\\f3c3"; }

.la-magento:before {
  content: "\\f3c4"; }

.la-magic:before {
  content: "\\f0d0"; }

.la-magnet:before {
  content: "\\f076"; }

.la-mail-bulk:before {
  content: "\\f674"; }

.la-mailchimp:before {
  content: "\\f59e"; }

.la-male:before {
  content: "\\f183"; }

.la-mandalorian:before {
  content: "\\f50f"; }

.la-map:before {
  content: "\\f279"; }

.la-map-marked:before {
  content: "\\f59f"; }

.la-map-marked-alt:before {
  content: "\\f5a0"; }

.la-map-marker:before {
  content: "\\f041"; }

.la-map-marker-alt:before {
  content: "\\f3c5"; }

.la-map-pin:before {
  content: "\\f276"; }

.la-map-signs:before {
  content: "\\f277"; }

.la-markdown:before {
  content: "\\f60f"; }

.la-marker:before {
  content: "\\f5a1"; }

.la-mars:before {
  content: "\\f222"; }

.la-mars-double:before {
  content: "\\f227"; }

.la-mars-stroke:before {
  content: "\\f229"; }

.la-mars-stroke-h:before {
  content: "\\f22b"; }

.la-mars-stroke-v:before {
  content: "\\f22a"; }

.la-mask:before {
  content: "\\f6fa"; }

.la-mastodon:before {
  content: "\\f4f6"; }

.la-maxcdn:before {
  content: "\\f136"; }

.la-mdb:before {
  content: "\\f8ca"; }

.la-medal:before {
  content: "\\f5a2"; }

.la-medapps:before {
  content: "\\f3c6"; }

.la-medium:before {
  content: "\\f23a"; }

.la-medium-m:before {
  content: "\\f3c7"; }

.la-medkit:before {
  content: "\\f0fa"; }

.la-medrt:before {
  content: "\\f3c8"; }

.la-meetup:before {
  content: "\\f2e0"; }

.la-megaport:before {
  content: "\\f5a3"; }

.la-meh:before {
  content: "\\f11a"; }

.la-meh-blank:before {
  content: "\\f5a4"; }

.la-meh-rolling-eyes:before {
  content: "\\f5a5"; }

.la-memory:before {
  content: "\\f538"; }

.la-mendeley:before {
  content: "\\f7b3"; }

.la-menorah:before {
  content: "\\f676"; }

.la-mercury:before {
  content: "\\f223"; }

.la-meteor:before {
  content: "\\f753"; }

.la-microchip:before {
  content: "\\f2db"; }

.la-microphone:before {
  content: "\\f130"; }

.la-microphone-alt:before {
  content: "\\f3c9"; }

.la-microphone-alt-slash:before {
  content: "\\f539"; }

.la-microphone-slash:before {
  content: "\\f131"; }

.la-microscope:before {
  content: "\\f610"; }

.la-microsoft:before {
  content: "\\f3ca"; }

.la-minus:before {
  content: "\\f068"; }

.la-minus-circle:before {
  content: "\\f056"; }

.la-minus-square:before {
  content: "\\f146"; }

.la-mitten:before {
  content: "\\f7b5"; }

.la-mix:before {
  content: "\\f3cb"; }

.la-mixcloud:before {
  content: "\\f289"; }

.la-mizuni:before {
  content: "\\f3cc"; }

.la-mobile:before {
  content: "\\f10b"; }

.la-mobile-alt:before {
  content: "\\f3cd"; }

.la-modx:before {
  content: "\\f285"; }

.la-monero:before {
  content: "\\f3d0"; }

.la-money-bill:before {
  content: "\\f0d6"; }

.la-money-bill-alt:before {
  content: "\\f3d1"; }

.la-money-bill-wave:before {
  content: "\\f53a"; }

.la-money-bill-wave-alt:before {
  content: "\\f53b"; }

.la-money-check:before {
  content: "\\f53c"; }

.la-money-check-alt:before {
  content: "\\f53d"; }

.la-monument:before {
  content: "\\f5a6"; }

.la-moon:before {
  content: "\\f186"; }

.la-mortar-pestle:before {
  content: "\\f5a7"; }

.la-mosque:before {
  content: "\\f678"; }

.la-motorcycle:before {
  content: "\\f21c"; }

.la-mountain:before {
  content: "\\f6fc"; }

.la-mouse:before {
  content: "\\f8cc"; }

.la-mouse-pointer:before {
  content: "\\f245"; }

.la-mug-hot:before {
  content: "\\f7b6"; }

.la-music:before {
  content: "\\f001"; }

.la-napster:before {
  content: "\\f3d2"; }

.la-neos:before {
  content: "\\f612"; }

.la-network-wired:before {
  content: "\\f6ff"; }

.la-neuter:before {
  content: "\\f22c"; }

.la-newspaper:before {
  content: "\\f1ea"; }

.la-nimblr:before {
  content: "\\f5a8"; }

.la-node:before {
  content: "\\f419"; }

.la-node-js:before {
  content: "\\f3d3"; }

.la-not-equal:before {
  content: "\\f53e"; }

.la-notes-medical:before {
  content: "\\f481"; }

.la-npm:before {
  content: "\\f3d4"; }

.la-ns8:before {
  content: "\\f3d5"; }

.la-nutritionix:before {
  content: "\\f3d6"; }

.la-object-group:before {
  content: "\\f247"; }

.la-object-ungroup:before {
  content: "\\f248"; }

.la-odnoklassniki:before {
  content: "\\f263"; }

.la-odnoklassniki-square:before {
  content: "\\f264"; }

.la-oil-can:before {
  content: "\\f613"; }

.la-old-republic:before {
  content: "\\f510"; }

.la-om:before {
  content: "\\f679"; }

.la-opencart:before {
  content: "\\f23d"; }

.la-openid:before {
  content: "\\f19b"; }

.la-opera:before {
  content: "\\f26a"; }

.la-optin-monster:before {
  content: "\\f23c"; }

.la-orcid:before {
  content: "\\f8d2"; }

.la-osi:before {
  content: "\\f41a"; }

.la-otter:before {
  content: "\\f700"; }

.la-outdent:before {
  content: "\\f03b"; }

.la-page4:before {
  content: "\\f3d7"; }

.la-pagelines:before {
  content: "\\f18c"; }

.la-pager:before {
  content: "\\f815"; }

.la-paint-brush:before {
  content: "\\f1fc"; }

.la-paint-roller:before {
  content: "\\f5aa"; }

.la-palette:before {
  content: "\\f53f"; }

.la-palfed:before {
  content: "\\f3d8"; }

.la-pallet:before {
  content: "\\f482"; }

.la-paper-plane:before {
  content: "\\f1d8"; }

.la-paperclip:before {
  content: "\\f0c6"; }

.la-parachute-box:before {
  content: "\\f4cd"; }

.la-paragraph:before {
  content: "\\f1dd"; }

.la-parking:before {
  content: "\\f540"; }

.la-passport:before {
  content: "\\f5ab"; }

.la-pastafarianism:before {
  content: "\\f67b"; }

.la-paste:before {
  content: "\\f0ea"; }

.la-patreon:before {
  content: "\\f3d9"; }

.la-pause:before {
  content: "\\f04c"; }

.la-pause-circle:before {
  content: "\\f28b"; }

.la-paw:before {
  content: "\\f1b0"; }

.la-paypal:before {
  content: "\\f1ed"; }

.la-peace:before {
  content: "\\f67c"; }

.la-pen:before {
  content: "\\f304"; }

.la-pen-alt:before {
  content: "\\f305"; }

.la-pen-fancy:before {
  content: "\\f5ac"; }

.la-pen-nib:before {
  content: "\\f5ad"; }

.la-pen-square:before {
  content: "\\f14b"; }

.la-pencil-alt:before {
  content: "\\f303"; }

.la-pencil-ruler:before {
  content: "\\f5ae"; }

.la-penny-arcade:before {
  content: "\\f704"; }

.la-people-carry:before {
  content: "\\f4ce"; }

.la-pepper-hot:before {
  content: "\\f816"; }

.la-percent:before {
  content: "\\f295"; }

.la-percentage:before {
  content: "\\f541"; }

.la-periscope:before {
  content: "\\f3da"; }

.la-person-booth:before {
  content: "\\f756"; }

.la-phabricator:before {
  content: "\\f3db"; }

.la-phoenix-framework:before {
  content: "\\f3dc"; }

.la-phoenix-squadron:before {
  content: "\\f511"; }

.la-phone:before {
  content: "\\f095"; }

.la-phone-alt:before {
  content: "\\f879"; }

.la-phone-slash:before {
  content: "\\f3dd"; }

.la-phone-square:before {
  content: "\\f098"; }

.la-phone-square-alt:before {
  content: "\\f87b"; }

.la-phone-volume:before {
  content: "\\f2a0"; }

.la-photo-video:before {
  content: "\\f87c"; }

.la-php:before {
  content: "\\f457"; }

.la-pied-piper:before {
  content: "\\f2ae"; }

.la-pied-piper-alt:before {
  content: "\\f1a8"; }

.la-pied-piper-hat:before {
  content: "\\f4e5"; }

.la-pied-piper-pp:before {
  content: "\\f1a7"; }

.la-piggy-bank:before {
  content: "\\f4d3"; }

.la-pills:before {
  content: "\\f484"; }

.la-pinterest:before {
  content: "\\f0d2"; }

.la-pinterest-p:before {
  content: "\\f231"; }

.la-pinterest-square:before {
  content: "\\f0d3"; }

.la-pizza-slice:before {
  content: "\\f818"; }

.la-place-of-worship:before {
  content: "\\f67f"; }

.la-plane:before {
  content: "\\f072"; }

.la-plane-arrival:before {
  content: "\\f5af"; }

.la-plane-departure:before {
  content: "\\f5b0"; }

.la-play:before {
  content: "\\f04b"; }

.la-play-circle:before {
  content: "\\f144"; }

.la-playstation:before {
  content: "\\f3df"; }

.la-plug:before {
  content: "\\f1e6"; }

.la-plus:before {
  content: "\\f067"; }

.la-plus-circle:before {
  content: "\\f055"; }

.la-plus-square:before {
  content: "\\f0fe"; }

.la-podcast:before {
  content: "\\f2ce"; }

.la-poll:before {
  content: "\\f681"; }

.la-poll-h:before {
  content: "\\f682"; }

.la-poo:before {
  content: "\\f2fe"; }

.la-poo-storm:before {
  content: "\\f75a"; }

.la-poop:before {
  content: "\\f619"; }

.la-portrait:before {
  content: "\\f3e0"; }

.la-pound-sign:before {
  content: "\\f154"; }

.la-power-off:before {
  content: "\\f011"; }

.la-pray:before {
  content: "\\f683"; }

.la-praying-hands:before {
  content: "\\f684"; }

.la-prescription:before {
  content: "\\f5b1"; }

.la-prescription-bottle:before {
  content: "\\f485"; }

.la-prescription-bottle-alt:before {
  content: "\\f486"; }

.la-print:before {
  content: "\\f02f"; }

.la-procedures:before {
  content: "\\f487"; }

.la-product-hunt:before {
  content: "\\f288"; }

.la-project-diagram:before {
  content: "\\f542"; }

.la-pushed:before {
  content: "\\f3e1"; }

.la-puzzle-piece:before {
  content: "\\f12e"; }

.la-python:before {
  content: "\\f3e2"; }

.la-qq:before {
  content: "\\f1d6"; }

.la-qrcode:before {
  content: "\\f029"; }

.la-question:before {
  content: "\\f128"; }

.la-question-circle:before {
  content: "\\f059"; }

.la-quidditch:before {
  content: "\\f458"; }

.la-quinscape:before {
  content: "\\f459"; }

.la-quora:before {
  content: "\\f2c4"; }

.la-quote-left:before {
  content: "\\f10d"; }

.la-quote-right:before {
  content: "\\f10e"; }

.la-quran:before {
  content: "\\f687"; }

.la-r-project:before {
  content: "\\f4f7"; }

.la-radiation:before {
  content: "\\f7b9"; }

.la-radiation-alt:before {
  content: "\\f7ba"; }

.la-rainbow:before {
  content: "\\f75b"; }

.la-random:before {
  content: "\\f074"; }

.la-raspberry-pi:before {
  content: "\\f7bb"; }

.la-ravelry:before {
  content: "\\f2d9"; }

.la-react:before {
  content: "\\f41b"; }

.la-reacteurope:before {
  content: "\\f75d"; }

.la-readme:before {
  content: "\\f4d5"; }

.la-rebel:before {
  content: "\\f1d0"; }

.la-receipt:before {
  content: "\\f543"; }

.la-record-vinyl:before {
  content: "\\f8d9"; }

.la-recycle:before {
  content: "\\f1b8"; }

.la-red-river:before {
  content: "\\f3e3"; }

.la-reddit:before {
  content: "\\f1a1"; }

.la-reddit-alien:before {
  content: "\\f281"; }

.la-reddit-square:before {
  content: "\\f1a2"; }

.la-redhat:before {
  content: "\\f7bc"; }

.la-redo:before {
  content: "\\f01e"; }

.la-redo-alt:before {
  content: "\\f2f9"; }

.la-registered:before {
  content: "\\f25d"; }

.la-remove-format:before {
  content: "\\f87d"; }

.la-renren:before {
  content: "\\f18b"; }

.la-reply:before {
  content: "\\f3e5"; }

.la-reply-all:before {
  content: "\\f122"; }

.la-replyd:before {
  content: "\\f3e6"; }

.la-republican:before {
  content: "\\f75e"; }

.la-researchgate:before {
  content: "\\f4f8"; }

.la-resolving:before {
  content: "\\f3e7"; }

.la-restroom:before {
  content: "\\f7bd"; }

.la-retweet:before {
  content: "\\f079"; }

.la-rev:before {
  content: "\\f5b2"; }

.la-ribbon:before {
  content: "\\f4d6"; }

.la-ring:before {
  content: "\\f70b"; }

.la-road:before {
  content: "\\f018"; }

.la-robot:before {
  content: "\\f544"; }

.la-rocket:before {
  content: "\\f135"; }

.la-rocketchat:before {
  content: "\\f3e8"; }

.la-rockrms:before {
  content: "\\f3e9"; }

.la-route:before {
  content: "\\f4d7"; }

.la-rss:before {
  content: "\\f09e"; }

.la-rss-square:before {
  content: "\\f143"; }

.la-ruble-sign:before {
  content: "\\f158"; }

.la-ruler:before {
  content: "\\f545"; }

.la-ruler-combined:before {
  content: "\\f546"; }

.la-ruler-horizontal:before {
  content: "\\f547"; }

.la-ruler-vertical:before {
  content: "\\f548"; }

.la-running:before {
  content: "\\f70c"; }

.la-rupee-sign:before {
  content: "\\f156"; }

.la-sad-cry:before {
  content: "\\f5b3"; }

.la-sad-tear:before {
  content: "\\f5b4"; }

.la-safari:before {
  content: "\\f267"; }

.la-salesforce:before {
  content: "\\f83b"; }

.la-sass:before {
  content: "\\f41e"; }

.la-satellite:before {
  content: "\\f7bf"; }

.la-satellite-dish:before {
  content: "\\f7c0"; }

.la-save:before {
  content: "\\f0c7"; }

.la-schlix:before {
  content: "\\f3ea"; }

.la-school:before {
  content: "\\f549"; }

.la-screwdriver:before {
  content: "\\f54a"; }

.la-scribd:before {
  content: "\\f28a"; }

.la-scroll:before {
  content: "\\f70e"; }

.la-sd-card:before {
  content: "\\f7c2"; }

.la-search:before {
  content: "\\f002"; }

.la-search-dollar:before {
  content: "\\f688"; }

.la-search-location:before {
  content: "\\f689"; }

.la-search-minus:before {
  content: "\\f010"; }

.la-search-plus:before {
  content: "\\f00e"; }

.la-searchengin:before {
  content: "\\f3eb"; }

.la-seedling:before {
  content: "\\f4d8"; }

.la-sellcast:before {
  content: "\\f2da"; }

.la-sellsy:before {
  content: "\\f213"; }

.la-server:before {
  content: "\\f233"; }

.la-servicestack:before {
  content: "\\f3ec"; }

.la-shapes:before {
  content: "\\f61f"; }

.la-share:before {
  content: "\\f064"; }

.la-share-alt:before {
  content: "\\f1e0"; }

.la-share-alt-square:before {
  content: "\\f1e1"; }

.la-share-square:before {
  content: "\\f14d"; }

.la-shekel-sign:before {
  content: "\\f20b"; }

.la-shield-alt:before {
  content: "\\f3ed"; }

.la-ship:before {
  content: "\\f21a"; }

.la-shipping-fast:before {
  content: "\\f48b"; }

.la-shirtsinbulk:before {
  content: "\\f214"; }

.la-shoe-prints:before {
  content: "\\f54b"; }

.la-shopping-bag:before {
  content: "\\f290"; }

.la-shopping-basket:before {
  content: "\\f291"; }

.la-shopping-cart:before {
  content: "\\f07a"; }

.la-shopware:before {
  content: "\\f5b5"; }

.la-shower:before {
  content: "\\f2cc"; }

.la-shuttle-van:before {
  content: "\\f5b6"; }

.la-sign:before {
  content: "\\f4d9"; }

.la-sign-in-alt:before {
  content: "\\f2f6"; }

.la-sign-language:before {
  content: "\\f2a7"; }

.la-sign-out-alt:before {
  content: "\\f2f5"; }

.la-signal:before {
  content: "\\f012"; }

.la-signature:before {
  content: "\\f5b7"; }

.la-sim-card:before {
  content: "\\f7c4"; }

.la-simplybuilt:before {
  content: "\\f215"; }

.la-sistrix:before {
  content: "\\f3ee"; }

.la-sitemap:before {
  content: "\\f0e8"; }

.la-sith:before {
  content: "\\f512"; }

.la-skating:before {
  content: "\\f7c5"; }

.la-sketch:before {
  content: "\\f7c6"; }

.la-skiing:before {
  content: "\\f7c9"; }

.la-skiing-nordic:before {
  content: "\\f7ca"; }

.la-skull:before {
  content: "\\f54c"; }

.la-skull-crossbones:before {
  content: "\\f714"; }

.la-skyatlas:before {
  content: "\\f216"; }

.la-skype:before {
  content: "\\f17e"; }

.la-slack:before {
  content: "\\f198"; }

.la-slack-hash:before {
  content: "\\f3ef"; }

.la-slash:before {
  content: "\\f715"; }

.la-sleigh:before {
  content: "\\f7cc"; }

.la-sliders-h:before {
  content: "\\f1de"; }

.la-slideshare:before {
  content: "\\f1e7"; }

.la-smile:before {
  content: "\\f118"; }

.la-smile-beam:before {
  content: "\\f5b8"; }

.la-smile-wink:before {
  content: "\\f4da"; }

.la-smog:before {
  content: "\\f75f"; }

.la-smoking:before {
  content: "\\f48d"; }

.la-smoking-ban:before {
  content: "\\f54d"; }

.la-sms:before {
  content: "\\f7cd"; }

.la-snapchat:before {
  content: "\\f2ab"; }

.la-snapchat-ghost:before {
  content: "\\f2ac"; }

.la-snapchat-square:before {
  content: "\\f2ad"; }

.la-snowboarding:before {
  content: "\\f7ce"; }

.la-snowflake:before {
  content: "\\f2dc"; }

.la-snowman:before {
  content: "\\f7d0"; }

.la-snowplow:before {
  content: "\\f7d2"; }

.la-socks:before {
  content: "\\f696"; }

.la-solar-panel:before {
  content: "\\f5ba"; }

.la-sort:before {
  content: "\\f0dc"; }

.la-sort-alpha-down:before {
  content: "\\f15d"; }

.la-sort-alpha-down-alt:before {
  content: "\\f881"; }

.la-sort-alpha-up:before {
  content: "\\f15e"; }

.la-sort-alpha-up-alt:before {
  content: "\\f882"; }

.la-sort-amount-down:before {
  content: "\\f160"; }

.la-sort-amount-down-alt:before {
  content: "\\f884"; }

.la-sort-amount-up:before {
  content: "\\f161"; }

.la-sort-amount-up-alt:before {
  content: "\\f885"; }

.la-sort-down:before {
  content: "\\f0dd"; }

.la-sort-numeric-down:before {
  content: "\\f162"; }

.la-sort-numeric-down-alt:before {
  content: "\\f886"; }

.la-sort-numeric-up:before {
  content: "\\f163"; }

.la-sort-numeric-up-alt:before {
  content: "\\f887"; }

.la-sort-up:before {
  content: "\\f0de"; }

.la-soundcloud:before {
  content: "\\f1be"; }

.la-sourcetree:before {
  content: "\\f7d3"; }

.la-spa:before {
  content: "\\f5bb"; }

.la-space-shuttle:before {
  content: "\\f197"; }

.la-speakap:before {
  content: "\\f3f3"; }

.la-speaker-deck:before {
  content: "\\f83c"; }

.la-spell-check:before {
  content: "\\f891"; }

.la-spider:before {
  content: "\\f717"; }

.la-spinner:before {
  content: "\\f110"; }

.la-splotch:before {
  content: "\\f5bc"; }

.la-spotify:before {
  content: "\\f1bc"; }

.la-spray-can:before {
  content: "\\f5bd"; }

.la-square:before {
  content: "\\f0c8"; }

.la-square-full:before {
  content: "\\f45c"; }

.la-square-root-alt:before {
  content: "\\f698"; }

.la-squarespace:before {
  content: "\\f5be"; }

.la-stack-exchange:before {
  content: "\\f18d"; }

.la-stack-overflow:before {
  content: "\\f16c"; }

.la-stackpath:before {
  content: "\\f842"; }

.la-stamp:before {
  content: "\\f5bf"; }

.la-star:before {
  content: "\\f005"; }

.la-star-and-crescent:before {
  content: "\\f699"; }

.la-star-half:before {
  content: "\\f089"; }

.la-star-half-alt:before {
  content: "\\f5c0"; }

.la-star-of-david:before {
  content: "\\f69a"; }

.la-star-of-life:before {
  content: "\\f621"; }

.la-staylinked:before {
  content: "\\f3f5"; }

.la-steam:before {
  content: "\\f1b6"; }

.la-steam-square:before {
  content: "\\f1b7"; }

.la-steam-symbol:before {
  content: "\\f3f6"; }

.la-step-backward:before {
  content: "\\f048"; }

.la-step-forward:before {
  content: "\\f051"; }

.la-stethoscope:before {
  content: "\\f0f1"; }

.la-sticker-mule:before {
  content: "\\f3f7"; }

.la-sticky-note:before {
  content: "\\f249"; }

.la-stop:before {
  content: "\\f04d"; }

.la-stop-circle:before {
  content: "\\f28d"; }

.la-stopwatch:before {
  content: "\\f2f2"; }

.la-store:before {
  content: "\\f54e"; }

.la-store-alt:before {
  content: "\\f54f"; }

.la-strava:before {
  content: "\\f428"; }

.la-stream:before {
  content: "\\f550"; }

.la-street-view:before {
  content: "\\f21d"; }

.la-strikethrough:before {
  content: "\\f0cc"; }

.la-stripe:before {
  content: "\\f429"; }

.la-stripe-s:before {
  content: "\\f42a"; }

.la-stroopwafel:before {
  content: "\\f551"; }

.la-studiovinari:before {
  content: "\\f3f8"; }

.la-stumbleupon:before {
  content: "\\f1a4"; }

.la-stumbleupon-circle:before {
  content: "\\f1a3"; }

.la-subscript:before {
  content: "\\f12c"; }

.la-subway:before {
  content: "\\f239"; }

.la-suitcase:before {
  content: "\\f0f2"; }

.la-suitcase-rolling:before {
  content: "\\f5c1"; }

.la-sun:before {
  content: "\\f185"; }

.la-superpowers:before {
  content: "\\f2dd"; }

.la-superscript:before {
  content: "\\f12b"; }

.la-supple:before {
  content: "\\f3f9"; }

.la-surprise:before {
  content: "\\f5c2"; }

.la-suse:before {
  content: "\\f7d6"; }

.la-swatchbook:before {
  content: "\\f5c3"; }

.la-swift:before {
  content: "\\f8e1"; }

.la-swimmer:before {
  content: "\\f5c4"; }

.la-swimming-pool:before {
  content: "\\f5c5"; }

.la-symfony:before {
  content: "\\f83d"; }

.la-synagogue:before {
  content: "\\f69b"; }

.la-sync:before {
  content: "\\f021"; }

.la-sync-alt:before {
  content: "\\f2f1"; }

.la-syringe:before {
  content: "\\f48e"; }

.la-table:before {
  content: "\\f0ce"; }

.la-table-tennis:before {
  content: "\\f45d"; }

.la-tablet:before {
  content: "\\f10a"; }

.la-tablet-alt:before {
  content: "\\f3fa"; }

.la-tablets:before {
  content: "\\f490"; }

.la-tachometer-alt:before {
  content: "\\f3fd"; }

.la-tag:before {
  content: "\\f02b"; }

.la-tags:before {
  content: "\\f02c"; }

.la-tape:before {
  content: "\\f4db"; }

.la-tasks:before {
  content: "\\f0ae"; }

.la-taxi:before {
  content: "\\f1ba"; }

.la-teamspeak:before {
  content: "\\f4f9"; }

.la-teeth:before {
  content: "\\f62e"; }

.la-teeth-open:before {
  content: "\\f62f"; }

.la-telegram:before {
  content: "\\f2c6"; }

.la-telegram-plane:before {
  content: "\\f3fe"; }

.la-temperature-high:before {
  content: "\\f769"; }

.la-temperature-low:before {
  content: "\\f76b"; }

.la-tencent-weibo:before {
  content: "\\f1d5"; }

.la-tenge:before {
  content: "\\f7d7"; }

.la-terminal:before {
  content: "\\f120"; }

.la-text-height:before {
  content: "\\f034"; }

.la-text-width:before {
  content: "\\f035"; }

.la-th:before {
  content: "\\f00a"; }

.la-th-large:before {
  content: "\\f009"; }

.la-th-list:before {
  content: "\\f00b"; }

.la-the-red-yeti:before {
  content: "\\f69d"; }

.la-theater-masks:before {
  content: "\\f630"; }

.la-themeco:before {
  content: "\\f5c6"; }

.la-themeisle:before {
  content: "\\f2b2"; }

.la-thermometer:before {
  content: "\\f491"; }

.la-thermometer-empty:before {
  content: "\\f2cb"; }

.la-thermometer-full:before {
  content: "\\f2c7"; }

.la-thermometer-half:before {
  content: "\\f2c9"; }

.la-thermometer-quarter:before {
  content: "\\f2ca"; }

.la-thermometer-three-quarters:before {
  content: "\\f2c8"; }

.la-think-peaks:before {
  content: "\\f731"; }

.la-thumbs-down:before {
  content: "\\f165"; }

.la-thumbs-up:before {
  content: "\\f164"; }

.la-thumbtack:before {
  content: "\\f08d"; }

.la-ticket-alt:before {
  content: "\\f3ff"; }

.la-times:before {
  content: "\\f00d"; }

.la-times-circle:before {
  content: "\\f057"; }

.la-tint:before {
  content: "\\f043"; }

.la-tint-slash:before {
  content: "\\f5c7"; }

.la-tired:before {
  content: "\\f5c8"; }

.la-toggle-off:before {
  content: "\\f204"; }

.la-toggle-on:before {
  content: "\\f205"; }

.la-toilet:before {
  content: "\\f7d8"; }

.la-toilet-paper:before {
  content: "\\f71e"; }

.la-toolbox:before {
  content: "\\f552"; }

.la-tools:before {
  content: "\\f7d9"; }

.la-tooth:before {
  content: "\\f5c9"; }

.la-torah:before {
  content: "\\f6a0"; }

.la-torii-gate:before {
  content: "\\f6a1"; }

.la-tractor:before {
  content: "\\f722"; }

.la-trade-federation:before {
  content: "\\f513"; }

.la-trademark:before {
  content: "\\f25c"; }

.la-traffic-light:before {
  content: "\\f637"; }

.la-train:before {
  content: "\\f238"; }

.la-tram:before {
  content: "\\f7da"; }

.la-transgender:before {
  content: "\\f224"; }

.la-transgender-alt:before {
  content: "\\f225"; }

.la-trash:before {
  content: "\\f1f8"; }

.la-trash-alt:before {
  content: "\\f2ed"; }

.la-trash-restore:before {
  content: "\\f829"; }

.la-trash-restore-alt:before {
  content: "\\f82a"; }

.la-tree:before {
  content: "\\f1bb"; }

.la-trello:before {
  content: "\\f181"; }

.la-tripadvisor:before {
  content: "\\f262"; }

.la-trophy:before {
  content: "\\f091"; }

.la-truck:before {
  content: "\\f0d1"; }

.la-truck-loading:before {
  content: "\\f4de"; }

.la-truck-monster:before {
  content: "\\f63b"; }

.la-truck-moving:before {
  content: "\\f4df"; }

.la-truck-pickup:before {
  content: "\\f63c"; }

.la-tshirt:before {
  content: "\\f553"; }

.la-tty:before {
  content: "\\f1e4"; }

.la-tumblr:before {
  content: "\\f173"; }

.la-tumblr-square:before {
  content: "\\f174"; }

.la-tv:before {
  content: "\\f26c"; }

.la-twitch:before {
  content: "\\f1e8"; }

.la-twitter:before {
  content: "\\f099"; }

.la-twitter-square:before {
  content: "\\f081"; }

.la-typo3:before {
  content: "\\f42b"; }

.la-uber:before {
  content: "\\f402"; }

.la-ubuntu:before {
  content: "\\f7df"; }

.la-uikit:before {
  content: "\\f403"; }

.la-umbraco:before {
  content: "\\f8e8"; }

.la-umbrella:before {
  content: "\\f0e9"; }

.la-umbrella-beach:before {
  content: "\\f5ca"; }

.la-underline:before {
  content: "\\f0cd"; }

.la-undo:before {
  content: "\\f0e2"; }

.la-undo-alt:before {
  content: "\\f2ea"; }

.la-uniregistry:before {
  content: "\\f404"; }

.la-universal-access:before {
  content: "\\f29a"; }

.la-university:before {
  content: "\\f19c"; }

.la-unlink:before {
  content: "\\f127"; }

.la-unlock:before {
  content: "\\f09c"; }

.la-unlock-alt:before {
  content: "\\f13e"; }

.la-untappd:before {
  content: "\\f405"; }

.la-upload:before {
  content: "\\f093"; }

.la-ups:before {
  content: "\\f7e0"; }

.la-usb:before {
  content: "\\f287"; }

.la-user:before {
  content: "\\f007"; }

.la-user-alt:before {
  content: "\\f406"; }

.la-user-alt-slash:before {
  content: "\\f4fa"; }

.la-user-astronaut:before {
  content: "\\f4fb"; }

.la-user-check:before {
  content: "\\f4fc"; }

.la-user-circle:before {
  content: "\\f2bd"; }

.la-user-clock:before {
  content: "\\f4fd"; }

.la-user-cog:before {
  content: "\\f4fe"; }

.la-user-edit:before {
  content: "\\f4ff"; }

.la-user-friends:before {
  content: "\\f500"; }

.la-user-graduate:before {
  content: "\\f501"; }

.la-user-injured:before {
  content: "\\f728"; }

.la-user-lock:before {
  content: "\\f502"; }

.la-user-md:before {
  content: "\\f0f0"; }

.la-user-minus:before {
  content: "\\f503"; }

.la-user-ninja:before {
  content: "\\f504"; }

.la-user-nurse:before {
  content: "\\f82f"; }

.la-user-plus:before {
  content: "\\f234"; }

.la-user-secret:before {
  content: "\\f21b"; }

.la-user-shield:before {
  content: "\\f505"; }

.la-user-slash:before {
  content: "\\f506"; }

.la-user-tag:before {
  content: "\\f507"; }

.la-user-tie:before {
  content: "\\f508"; }

.la-user-times:before {
  content: "\\f235"; }

.la-users:before {
  content: "\\f0c0"; }

.la-users-cog:before {
  content: "\\f509"; }

.la-usps:before {
  content: "\\f7e1"; }

.la-ussunnah:before {
  content: "\\f407"; }

.la-utensil-spoon:before {
  content: "\\f2e5"; }

.la-utensils:before {
  content: "\\f2e7"; }

.la-vaadin:before {
  content: "\\f408"; }

.la-vector-square:before {
  content: "\\f5cb"; }

.la-venus:before {
  content: "\\f221"; }

.la-venus-double:before {
  content: "\\f226"; }

.la-venus-mars:before {
  content: "\\f228"; }

.la-viacoin:before {
  content: "\\f237"; }

.la-viadeo:before {
  content: "\\f2a9"; }

.la-viadeo-square:before {
  content: "\\f2aa"; }

.la-vial:before {
  content: "\\f492"; }

.la-vials:before {
  content: "\\f493"; }

.la-viber:before {
  content: "\\f409"; }

.la-video:before {
  content: "\\f03d"; }

.la-video-slash:before {
  content: "\\f4e2"; }

.la-vihara:before {
  content: "\\f6a7"; }

.la-vimeo:before {
  content: "\\f40a"; }

.la-vimeo-square:before {
  content: "\\f194"; }

.la-vimeo-v:before {
  content: "\\f27d"; }

.la-vine:before {
  content: "\\f1ca"; }

.la-vk:before {
  content: "\\f189"; }

.la-vnv:before {
  content: "\\f40b"; }

.la-voicemail:before {
  content: "\\f897"; }

.la-volleyball-ball:before {
  content: "\\f45f"; }

.la-volume-down:before {
  content: "\\f027"; }

.la-volume-mute:before {
  content: "\\f6a9"; }

.la-volume-off:before {
  content: "\\f026"; }

.la-volume-up:before {
  content: "\\f028"; }

.la-vote-yea:before {
  content: "\\f772"; }

.la-vr-cardboard:before {
  content: "\\f729"; }

.la-vuejs:before {
  content: "\\f41f"; }

.la-walking:before {
  content: "\\f554"; }

.la-wallet:before {
  content: "\\f555"; }

.la-warehouse:before {
  content: "\\f494"; }

.la-water:before {
  content: "\\f773"; }

.la-wave-square:before {
  content: "\\f83e"; }

.la-waze:before {
  content: "\\f83f"; }

.la-weebly:before {
  content: "\\f5cc"; }

.la-weibo:before {
  content: "\\f18a"; }

.la-weight:before {
  content: "\\f496"; }

.la-weight-hanging:before {
  content: "\\f5cd"; }

.la-weixin:before {
  content: "\\f1d7"; }

.la-whatsapp:before {
  content: "\\f232"; }

.la-whatsapp-square:before {
  content: "\\f40c"; }

.la-wheelchair:before {
  content: "\\f193"; }

.la-whmcs:before {
  content: "\\f40d"; }

.la-wifi:before {
  content: "\\f1eb"; }

.la-wikipedia-w:before {
  content: "\\f266"; }

.la-wind:before {
  content: "\\f72e"; }

.la-window-close:before {
  content: "\\f410"; }

.la-window-maximize:before {
  content: "\\f2d0"; }

.la-window-minimize:before {
  content: "\\f2d1"; }

.la-window-restore:before {
  content: "\\f2d2"; }

.la-windows:before {
  content: "\\f17a"; }

.la-wine-bottle:before {
  content: "\\f72f"; }

.la-wine-glass:before {
  content: "\\f4e3"; }

.la-wine-glass-alt:before {
  content: "\\f5ce"; }

.la-wix:before {
  content: "\\f5cf"; }

.la-wizards-of-the-coast:before {
  content: "\\f730"; }

.la-wolf-pack-battalion:before {
  content: "\\f514"; }

.la-won-sign:before {
  content: "\\f159"; }

.la-wordpress:before {
  content: "\\f19a"; }

.la-wordpress-simple:before {
  content: "\\f411"; }

.la-wpbeginner:before {
  content: "\\f297"; }

.la-wpexplorer:before {
  content: "\\f2de"; }

.la-wpforms:before {
  content: "\\f298"; }

.la-wpressr:before {
  content: "\\f3e4"; }

.la-wrench:before {
  content: "\\f0ad"; }

.la-x-ray:before {
  content: "\\f497"; }

.la-xbox:before {
  content: "\\f412"; }

.la-xing:before {
  content: "\\f168"; }

.la-xing-square:before {
  content: "\\f169"; }

.la-y-combinator:before {
  content: "\\f23b"; }

.la-yahoo:before {
  content: "\\f19e"; }

.la-yammer:before {
  content: "\\f840"; }

.la-yandex:before {
  content: "\\f413"; }

.la-yandex-international:before {
  content: "\\f414"; }

.la-yarn:before {
  content: "\\f7e3"; }

.la-yelp:before {
  content: "\\f1e9"; }

.la-yen-sign:before {
  content: "\\f157"; }

.la-yin-yang:before {
  content: "\\f6ad"; }

.la-yoast:before {
  content: "\\f2b1"; }

.la-youtube:before {
  content: "\\f167"; }

.la-youtube-square:before {
  content: "\\f431"; }

.la-zhihu:before {
  content: "\\f63f"; }

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; }

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto; }
@font-face {
  font-family: 'Line Awesome Brands';
  font-style: normal;
  font-weight: normal;
  font-display: auto;
  src: url("../fonts/la-brands-400.eot");
  src: url("../fonts/la-brands-400.eot?#iefix") format("embedded-opentype"), url("../fonts/la-brands-400.woff2") format("woff2"), url("../fonts/la-brands-400.woff") format("woff"), url("../fonts/la-brands-400.ttf") format("truetype"), url("../fonts/la-brands-400.svg#lineawesome") format("svg"); }

.lab {
  font-family: 'Line Awesome Brands'; }
@font-face {
  font-family: 'Line Awesome Free';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: url("../fonts/la-regular-400.eot");
  src: url("../fonts/la-regular-400.eot?#iefix") format("embedded-opentype"), url("../fonts/la-regular-400.woff2") format("woff2"), url("../fonts/la-regular-400.woff") format("woff"), url("../fonts/la-regular-400.ttf") format("truetype"), url("../fonts/la-regular-400.svg#lineawesome") format("svg"); }

.lar {
  font-family: 'Line Awesome Free';
  font-weight: 400; }
@font-face {
  font-family: 'Line Awesome Free';
  font-style: normal;
  font-weight: 900;
  font-display: auto;
  src: url("../fonts/la-solid-900.eot");
  src: url("../fonts/la-solid-900.eot?#iefix") format("embedded-opentype"), url("../fonts/la-solid-900.woff2") format("woff2"), url("../fonts/la-solid-900.woff") format("woff"), url("../fonts/la-solid-900.ttf") format("truetype"), url("../fonts/la-solid-900.svg#lineawesome") format("svg"); }

.la,
.las {
  font-family: 'Line Awesome Free';
  font-weight: 900; }

.la.la-glass:before {
  content: "\\f000"; }

.la.la-meetup {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-star-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-star-o:before {
  content: "\\f005"; }

.la.la-remove:before {
  content: "\\f00d"; }

.la.la-close:before {
  content: "\\f00d"; }

.la.la-gear:before {
  content: "\\f013"; }

.la.la-trash-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-trash-o:before {
  content: "\\f2ed"; }

.la.la-file-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-o:before {
  content: "\\f15b"; }

.la.la-clock-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-clock-o:before {
  content: "\\f017"; }

.la.la-arrow-circle-o-down {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-arrow-circle-o-down:before {
  content: "\\f358"; }

.la.la-arrow-circle-o-up {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-arrow-circle-o-up:before {
  content: "\\f35b"; }

.la.la-play-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-play-circle-o:before {
  content: "\\f144"; }

.la.la-repeat:before {
  content: "\\f01e"; }

.la.la-rotate-right:before {
  content: "\\f01e"; }

.la.la-refresh:before {
  content: "\\f021"; }

.la.la-list-alt {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-dedent:before {
  content: "\\f03b"; }

.la.la-video-camera:before {
  content: "\\f03d"; }

.la.la-picture-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-picture-o:before {
  content: "\\f03e"; }

.la.la-photo {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-photo:before {
  content: "\\f03e"; }

.la.la-image {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-image:before {
  content: "\\f03e"; }

.la.la-pencil:before {
  content: "\\f303"; }

.la.la-map-marker:before {
  content: "\\f3c5"; }

.la.la-pencil-square-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-pencil-square-o:before {
  content: "\\f044"; }

.la.la-share-square-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-share-square-o:before {
  content: "\\f14d"; }

.la.la-check-square-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-check-square-o:before {
  content: "\\f14a"; }

.la.la-arrows:before {
  content: "\\f0b2"; }

.la.la-times-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-times-circle-o:before {
  content: "\\f057"; }

.la.la-check-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-check-circle-o:before {
  content: "\\f058"; }

.la.la-mail-forward:before {
  content: "\\f064"; }

.la.la-eye {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-eye-slash {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-warning:before {
  content: "\\f071"; }

.la.la-calendar:before {
  content: "\\f073"; }

.la.la-arrows-v:before {
  content: "\\f338"; }

.la.la-arrows-h:before {
  content: "\\f337"; }

.la.la-bar-chart {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-bar-chart:before {
  content: "\\f080"; }

.la.la-bar-chart-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-bar-chart-o:before {
  content: "\\f080"; }

.la.la-twitter-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-facebook-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-gears:before {
  content: "\\f085"; }

.la.la-thumbs-o-up {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-thumbs-o-up:before {
  content: "\\f164"; }

.la.la-thumbs-o-down {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-thumbs-o-down:before {
  content: "\\f165"; }

.la.la-heart-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-heart-o:before {
  content: "\\f004"; }

.la.la-sign-out:before {
  content: "\\f2f5"; }

.la.la-linkedin-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-linkedin-square:before {
  content: "\\f08c"; }

.la.la-thumb-tack:before {
  content: "\\f08d"; }

.la.la-external-link:before {
  content: "\\f35d"; }

.la.la-sign-in:before {
  content: "\\f2f6"; }

.la.la-github-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-lemon-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-lemon-o:before {
  content: "\\f094"; }

.la.la-square-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-square-o:before {
  content: "\\f0c8"; }

.la.la-bookmark-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-bookmark-o:before {
  content: "\\f02e"; }

.la.la-twitter {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-facebook {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-facebook:before {
  content: "\\f39e"; }

.la.la-facebook-f {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-facebook-f:before {
  content: "\\f39e"; }

.la.la-github {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-credit-card {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-feed:before {
  content: "\\f09e"; }

.la.la-hdd-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hdd-o:before {
  content: "\\f0a0"; }

.la.la-hand-o-right {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-o-right:before {
  content: "\\f0a4"; }

.la.la-hand-o-left {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-o-left:before {
  content: "\\f0a5"; }

.la.la-hand-o-up {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-o-up:before {
  content: "\\f0a6"; }

.la.la-hand-o-down {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-o-down:before {
  content: "\\f0a7"; }

.la.la-arrows-alt:before {
  content: "\\f31e"; }

.la.la-group:before {
  content: "\\f0c0"; }

.la.la-chain:before {
  content: "\\f0c1"; }

.la.la-scissors:before {
  content: "\\f0c4"; }

.la.la-files-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-files-o:before {
  content: "\\f0c5"; }

.la.la-floppy-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-floppy-o:before {
  content: "\\f0c7"; }

.la.la-navicon:before {
  content: "\\f0c9"; }

.la.la-reorder:before {
  content: "\\f0c9"; }

.la.la-pinterest {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-pinterest-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-google-plus-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-google-plus {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-google-plus:before {
  content: "\\f0d5"; }

.la.la-money {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-money:before {
  content: "\\f3d1"; }

.la.la-unsorted:before {
  content: "\\f0dc"; }

.la.la-sort-desc:before {
  content: "\\f0dd"; }

.la.la-sort-asc:before {
  content: "\\f0de"; }

.la.la-linkedin {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-linkedin:before {
  content: "\\f0e1"; }

.la.la-rotate-left:before {
  content: "\\f0e2"; }

.la.la-legal:before {
  content: "\\f0e3"; }

.la.la-tachometer:before {
  content: "\\f3fd"; }

.la.la-dashboard:before {
  content: "\\f3fd"; }

.la.la-comment-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-comment-o:before {
  content: "\\f075"; }

.la.la-comments-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-comments-o:before {
  content: "\\f086"; }

.la.la-flash:before {
  content: "\\f0e7"; }

.la.la-clipboard {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-paste {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-paste:before {
  content: "\\f328"; }

.la.la-lightbulb-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-lightbulb-o:before {
  content: "\\f0eb"; }

.la.la-exchange:before {
  content: "\\f362"; }

.la.la-cloud-download:before {
  content: "\\f381"; }

.la.la-cloud-upload:before {
  content: "\\f382"; }

.la.la-bell-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-bell-o:before {
  content: "\\f0f3"; }

.la.la-cutlery:before {
  content: "\\f2e7"; }

.la.la-file-text-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-text-o:before {
  content: "\\f15c"; }

.la.la-building-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-building-o:before {
  content: "\\f1ad"; }

.la.la-hospital-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hospital-o:before {
  content: "\\f0f8"; }

.la.la-tablet:before {
  content: "\\f3fa"; }

.la.la-mobile:before {
  content: "\\f3cd"; }

.la.la-mobile-phone:before {
  content: "\\f3cd"; }

.la.la-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-circle-o:before {
  content: "\\f111"; }

.la.la-mail-reply:before {
  content: "\\f3e5"; }

.la.la-github-alt {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-folder-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-folder-o:before {
  content: "\\f07b"; }

.la.la-folder-open-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-folder-open-o:before {
  content: "\\f07c"; }

.la.la-smile-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-smile-o:before {
  content: "\\f118"; }

.la.la-frown-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-frown-o:before {
  content: "\\f119"; }

.la.la-meh-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-meh-o:before {
  content: "\\f11a"; }

.la.la-keyboard-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-keyboard-o:before {
  content: "\\f11c"; }

.la.la-flag-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-flag-o:before {
  content: "\\f024"; }

.la.la-mail-reply-all:before {
  content: "\\f122"; }

.la.la-star-half-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-star-half-o:before {
  content: "\\f089"; }

.la.la-star-half-empty {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-star-half-empty:before {
  content: "\\f089"; }

.la.la-star-half-full {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-star-half-full:before {
  content: "\\f089"; }

.la.la-code-fork:before {
  content: "\\f126"; }

.la.la-chain-broken:before {
  content: "\\f127"; }

.la.la-shield:before {
  content: "\\f3ed"; }

.la.la-calendar-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-calendar-o:before {
  content: "\\f133"; }

.la.la-maxcdn {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-html5 {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-css3 {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-ticket:before {
  content: "\\f3ff"; }

.la.la-minus-square-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-minus-square-o:before {
  content: "\\f146"; }

.la.la-level-up:before {
  content: "\\f3bf"; }

.la.la-level-down:before {
  content: "\\f3be"; }

.la.la-pencil-square:before {
  content: "\\f14b"; }

.la.la-external-link-square:before {
  content: "\\f360"; }

.la.la-compass {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-caret-square-o-down {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-caret-square-o-down:before {
  content: "\\f150"; }

.la.la-toggle-down {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-toggle-down:before {
  content: "\\f150"; }

.la.la-caret-square-o-up {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-caret-square-o-up:before {
  content: "\\f151"; }

.la.la-toggle-up {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-toggle-up:before {
  content: "\\f151"; }

.la.la-caret-square-o-right {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-caret-square-o-right:before {
  content: "\\f152"; }

.la.la-toggle-right {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-toggle-right:before {
  content: "\\f152"; }

.la.la-eur:before {
  content: "\\f153"; }

.la.la-euro:before {
  content: "\\f153"; }

.la.la-gbp:before {
  content: "\\f154"; }

.la.la-usd:before {
  content: "\\f155"; }

.la.la-dollar:before {
  content: "\\f155"; }

.la.la-inr:before {
  content: "\\f156"; }

.la.la-rupee:before {
  content: "\\f156"; }

.la.la-jpy:before {
  content: "\\f157"; }

.la.la-cny:before {
  content: "\\f157"; }

.la.la-rmb:before {
  content: "\\f157"; }

.la.la-yen:before {
  content: "\\f157"; }

.la.la-rub:before {
  content: "\\f158"; }

.la.la-ruble:before {
  content: "\\f158"; }

.la.la-rouble:before {
  content: "\\f158"; }

.la.la-krw:before {
  content: "\\f159"; }

.la.la-won:before {
  content: "\\f159"; }

.la.la-btc {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-bitcoin {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-bitcoin:before {
  content: "\\f15a"; }

.la.la-file-text:before {
  content: "\\f15c"; }

.la.la-sort-alpha-asc:before {
  content: "\\f15d"; }

.la.la-sort-alpha-desc:before {
  content: "\\f881"; }

.la.la-sort-amount-asc:before {
  content: "\\f160"; }

.la.la-sort-amount-desc:before {
  content: "\\f884"; }

.la.la-sort-numeric-asc:before {
  content: "\\f162"; }

.la.la-sort-numeric-desc:before {
  content: "\\f886"; }

.la.la-youtube-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-youtube {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-xing {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-xing-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-youtube-play {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-youtube-play:before {
  content: "\\f167"; }

.la.la-dropbox {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-stack-overflow {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-instagram {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-flickr {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-adn {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-bitbucket {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-bitbucket-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-bitbucket-square:before {
  content: "\\f171"; }

.la.la-tumblr {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-tumblr-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-long-arrow-down:before {
  content: "\\f309"; }

.la.la-long-arrow-up:before {
  content: "\\f30c"; }

.la.la-long-arrow-left:before {
  content: "\\f30a"; }

.la.la-long-arrow-right:before {
  content: "\\f30b"; }

.la.la-apple {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-windows {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-android {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-linux {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-dribbble {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-skype {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-foursquare {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-trello {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-gratipay {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-gittip {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-gittip:before {
  content: "\\f184"; }

.la.la-sun-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-sun-o:before {
  content: "\\f185"; }

.la.la-moon-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-moon-o:before {
  content: "\\f186"; }

.la.la-vk {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-weibo {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-renren {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-pagelines {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-stack-exchange {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-arrow-circle-o-right {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-arrow-circle-o-right:before {
  content: "\\f35a"; }

.la.la-arrow-circle-o-left {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-arrow-circle-o-left:before {
  content: "\\f359"; }

.la.la-caret-square-o-left {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-caret-square-o-left:before {
  content: "\\f191"; }

.la.la-toggle-left {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-toggle-left:before {
  content: "\\f191"; }

.la.la-dot-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-dot-circle-o:before {
  content: "\\f192"; }

.la.la-vimeo-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-try:before {
  content: "\\f195"; }

.la.la-turkish-lira:before {
  content: "\\f195"; }

.la.la-plus-square-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-plus-square-o:before {
  content: "\\f0fe"; }

.la.la-slack {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wordpress {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-openid {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-institution:before {
  content: "\\f19c"; }

.la.la-bank:before {
  content: "\\f19c"; }

.la.la-mortar-board:before {
  content: "\\f19d"; }

.la.la-yahoo {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-google {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-reddit {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-reddit-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-stumbleupon-circle {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-stumbleupon {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-delicious {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-digg {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-pied-piper-pp {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-pied-piper-alt {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-drupal {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-joomla {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-spoon:before {
  content: "\\f2e5"; }

.la.la-behance {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-behance-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-steam {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-steam-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-automobile:before {
  content: "\\f1b9"; }

.la.la-cab:before {
  content: "\\f1ba"; }

.la.la-envelope-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-envelope-o:before {
  content: "\\f0e0"; }

.la.la-deviantart {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-soundcloud {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-file-pdf-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-pdf-o:before {
  content: "\\f1c1"; }

.la.la-file-word-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-word-o:before {
  content: "\\f1c2"; }

.la.la-file-excel-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-excel-o:before {
  content: "\\f1c3"; }

.la.la-file-powerpoint-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-powerpoint-o:before {
  content: "\\f1c4"; }

.la.la-file-image-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-image-o:before {
  content: "\\f1c5"; }

.la.la-file-photo-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-photo-o:before {
  content: "\\f1c5"; }

.la.la-file-picture-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-picture-o:before {
  content: "\\f1c5"; }

.la.la-file-archive-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-archive-o:before {
  content: "\\f1c6"; }

.la.la-file-zip-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-zip-o:before {
  content: "\\f1c6"; }

.la.la-file-audio-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-audio-o:before {
  content: "\\f1c7"; }

.la.la-file-sound-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-sound-o:before {
  content: "\\f1c7"; }

.la.la-file-video-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-video-o:before {
  content: "\\f1c8"; }

.la.la-file-movie-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-movie-o:before {
  content: "\\f1c8"; }

.la.la-file-code-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-file-code-o:before {
  content: "\\f1c9"; }

.la.la-vine {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-codepen {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-jsfiddle {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-life-ring {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-life-bouy {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-life-bouy:before {
  content: "\\f1cd"; }

.la.la-life-buoy {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-life-buoy:before {
  content: "\\f1cd"; }

.la.la-life-saver {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-life-saver:before {
  content: "\\f1cd"; }

.la.la-support {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-support:before {
  content: "\\f1cd"; }

.la.la-circle-o-notch:before {
  content: "\\f1ce"; }

.la.la-rebel {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-ra {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-ra:before {
  content: "\\f1d0"; }

.la.la-resistance {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-resistance:before {
  content: "\\f1d0"; }

.la.la-empire {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-ge {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-ge:before {
  content: "\\f1d1"; }

.la.la-git-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-git {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-hacker-news {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-y-combinator-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-y-combinator-square:before {
  content: "\\f1d4"; }

.la.la-yc-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-yc-square:before {
  content: "\\f1d4"; }

.la.la-tencent-weibo {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-qq {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-weixin {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wechat {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wechat:before {
  content: "\\f1d7"; }

.la.la-send:before {
  content: "\\f1d8"; }

.la.la-paper-plane-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-paper-plane-o:before {
  content: "\\f1d8"; }

.la.la-send-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-send-o:before {
  content: "\\f1d8"; }

.la.la-circle-thin {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-circle-thin:before {
  content: "\\f111"; }

.la.la-header:before {
  content: "\\f1dc"; }

.la.la-sliders:before {
  content: "\\f1de"; }

.la.la-futbol-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-futbol-o:before {
  content: "\\f1e3"; }

.la.la-soccer-ball-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-soccer-ball-o:before {
  content: "\\f1e3"; }

.la.la-slideshare {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-twitch {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-yelp {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-newspaper-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-newspaper-o:before {
  content: "\\f1ea"; }

.la.la-paypal {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-google-wallet {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-cc-visa {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-cc-mastercard {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-cc-discover {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-cc-amex {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-cc-paypal {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-cc-stripe {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-bell-slash-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-bell-slash-o:before {
  content: "\\f1f6"; }

.la.la-trash:before {
  content: "\\f2ed"; }

.la.la-copyright {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-eyedropper:before {
  content: "\\f1fb"; }

.la.la-area-chart:before {
  content: "\\f1fe"; }

.la.la-pie-chart:before {
  content: "\\f200"; }

.la.la-line-chart:before {
  content: "\\f201"; }

.la.la-lastfm {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-lastfm-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-ioxhost {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-angellist {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-cc {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-cc:before {
  content: "\\f20a"; }

.la.la-ils:before {
  content: "\\f20b"; }

.la.la-shekel:before {
  content: "\\f20b"; }

.la.la-sheqel:before {
  content: "\\f20b"; }

.la.la-meanpath {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-meanpath:before {
  content: "\\f2b4"; }

.la.la-buysellads {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-connectdevelop {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-dashcube {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-forumbee {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-leanpub {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-sellsy {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-shirtsinbulk {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-simplybuilt {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-skyatlas {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-diamond {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-diamond:before {
  content: "\\f3a5"; }

.la.la-intersex:before {
  content: "\\f224"; }

.la.la-facebook-official {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-facebook-official:before {
  content: "\\f09a"; }

.la.la-pinterest-p {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-whatsapp {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-hotel:before {
  content: "\\f236"; }

.la.la-viacoin {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-medium {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-y-combinator {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-yc {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-yc:before {
  content: "\\f23b"; }

.la.la-optin-monster {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-opencart {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-expeditedssl {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-battery-4:before {
  content: "\\f240"; }

.la.la-battery:before {
  content: "\\f240"; }

.la.la-battery-3:before {
  content: "\\f241"; }

.la.la-battery-2:before {
  content: "\\f242"; }

.la.la-battery-1:before {
  content: "\\f243"; }

.la.la-battery-0:before {
  content: "\\f244"; }

.la.la-object-group {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-object-ungroup {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-sticky-note-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-sticky-note-o:before {
  content: "\\f249"; }

.la.la-cc-jcb {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-cc-diners-club {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-clone {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hourglass-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hourglass-o:before {
  content: "\\f254"; }

.la.la-hourglass-1:before {
  content: "\\f251"; }

.la.la-hourglass-2:before {
  content: "\\f252"; }

.la.la-hourglass-3:before {
  content: "\\f253"; }

.la.la-hand-rock-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-rock-o:before {
  content: "\\f255"; }

.la.la-hand-grab-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-grab-o:before {
  content: "\\f255"; }

.la.la-hand-paper-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-paper-o:before {
  content: "\\f256"; }

.la.la-hand-stop-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-stop-o:before {
  content: "\\f256"; }

.la.la-hand-scissors-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-scissors-o:before {
  content: "\\f257"; }

.la.la-hand-lizard-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-lizard-o:before {
  content: "\\f258"; }

.la.la-hand-spock-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-spock-o:before {
  content: "\\f259"; }

.la.la-hand-pointer-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-pointer-o:before {
  content: "\\f25a"; }

.la.la-hand-peace-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-hand-peace-o:before {
  content: "\\f25b"; }

.la.la-registered {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-creative-commons {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-gg {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-gg-circle {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-tripadvisor {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-odnoklassniki {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-odnoklassniki-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-get-pocket {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wikipedia-w {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-safari {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-chrome {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-firefox {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-opera {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-internet-explorer {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-television:before {
  content: "\\f26c"; }

.la.la-contao {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-500px {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-amazon {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-calendar-plus-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-calendar-plus-o:before {
  content: "\\f271"; }

.la.la-calendar-minus-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-calendar-minus-o:before {
  content: "\\f272"; }

.la.la-calendar-times-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-calendar-times-o:before {
  content: "\\f273"; }

.la.la-calendar-check-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-calendar-check-o:before {
  content: "\\f274"; }

.la.la-map-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-map-o:before {
  content: "\\f279"; }

.la.la-commenting:before {
  content: "\\f4ad"; }

.la.la-commenting-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-commenting-o:before {
  content: "\\f4ad"; }

.la.la-houzz {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-vimeo {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-vimeo:before {
  content: "\\f27d"; }

.la.la-black-tie {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-fonticons {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-reddit-alien {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-edge {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-credit-card-alt:before {
  content: "\\f09d"; }

.la.la-codiepie {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-modx {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-fort-awesome {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-usb {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-product-hunt {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-mixcloud {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-scribd {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-pause-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-pause-circle-o:before {
  content: "\\f28b"; }

.la.la-stop-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-stop-circle-o:before {
  content: "\\f28d"; }

.la.la-bluetooth {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-bluetooth-b {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-gitlab {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wpbeginner {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wpforms {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-envira {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wheelchair-alt {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wheelchair-alt:before {
  content: "\\f368"; }

.la.la-question-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-question-circle-o:before {
  content: "\\f059"; }

.la.la-volume-control-phone:before {
  content: "\\f2a0"; }

.la.la-asl-interpreting:before {
  content: "\\f2a3"; }

.la.la-deafness:before {
  content: "\\f2a4"; }

.la.la-hard-of-hearing:before {
  content: "\\f2a4"; }

.la.la-glide {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-glide-g {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-signing:before {
  content: "\\f2a7"; }

.la.la-viadeo {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-viadeo-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-snapchat {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-snapchat-ghost {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-snapchat-square {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-pied-piper {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-first-order {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-yoast {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-themeisle {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-google-plus-official {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-google-plus-official:before {
  content: "\\f2b3"; }

.la.la-google-plus-circle {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-google-plus-circle:before {
  content: "\\f2b3"; }

.la.la-font-awesome {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-fa {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-fa:before {
  content: "\\f2b4"; }

.la.la-handshake-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-handshake-o:before {
  content: "\\f2b5"; }

.la.la-envelope-open-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-envelope-open-o:before {
  content: "\\f2b6"; }

.la.la-linode {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-address-book-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-address-book-o:before {
  content: "\\f2b9"; }

.la.la-vcard:before {
  content: "\\f2bb"; }

.la.la-address-card-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-address-card-o:before {
  content: "\\f2bb"; }

.la.la-vcard-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-vcard-o:before {
  content: "\\f2bb"; }

.la.la-user-circle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-user-circle-o:before {
  content: "\\f2bd"; }

.la.la-user-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-user-o:before {
  content: "\\f007"; }

.la.la-id-badge {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-drivers-license:before {
  content: "\\f2c2"; }

.la.la-id-card-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-id-card-o:before {
  content: "\\f2c2"; }

.la.la-drivers-license-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-drivers-license-o:before {
  content: "\\f2c2"; }

.la.la-quora {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-free-code-camp {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-telegram {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-thermometer-4:before {
  content: "\\f2c7"; }

.la.la-thermometer:before {
  content: "\\f2c7"; }

.la.la-thermometer-3:before {
  content: "\\f2c8"; }

.la.la-thermometer-2:before {
  content: "\\f2c9"; }

.la.la-thermometer-1:before {
  content: "\\f2ca"; }

.la.la-thermometer-0:before {
  content: "\\f2cb"; }

.la.la-bathtub:before {
  content: "\\f2cd"; }

.la.la-s15:before {
  content: "\\f2cd"; }

.la.la-window-maximize {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-window-restore {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-times-rectangle:before {
  content: "\\f410"; }

.la.la-window-close-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-window-close-o:before {
  content: "\\f410"; }

.la.la-times-rectangle-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-times-rectangle-o:before {
  content: "\\f410"; }

.la.la-bandcamp {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-grav {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-etsy {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-imdb {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-ravelry {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-eercast {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-eercast:before {
  content: "\\f2da"; }

.la.la-snowflake-o {
  font-family: 'Line Awesome Free';
  font-weight: 400; }

.la.la-snowflake-o:before {
  content: "\\f2dc"; }

.la.la-superpowers {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-wpexplorer {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }

.la.la-spotify {
  font-family: 'Line Awesome Brands';
  font-weight: 400; }
`,Qt=[qc(hp),Se`
  :host {
    --pixel: 1px;
  }
  @media (min-resolution: 2dppx) {
    :host {
      --pixel: 0.5px;
    }
  }

  :host {
    --app-color1: #FFFACD;
    --app-color2: #D87093;
    --app-color3: #444444;
    --app-hi-color1: #ff4500;
    --app-hi-color2: #4169E1;
    --app-hi-color3: #FF8C00;
    --app-hi-color4: #FFDA63;
    --app-text-color1: #EAEAEA; /* Slightly brighter text for contrast */
    --app-text-color2: #B0B0B0;
    /* Saturated Dark Backgrounds (Deep Indigo/Slate) */
    --app-bg-color1: #121418;
    --app-bg-color2: #1a1d24;

    /* Semantic Theme Variables */
    --bg-color: var(--app-bg-color1);
    /* Gel Panels: Dark, tinted, semi-transparent */
    --panel-bg: rgba(26, 29, 36, 0.85);
    --panel-header-bg: rgba(26, 29, 36, 0.95);

    /* Gel Nodes: More transparent, distinct tint akin to a neutral density gel */
    --node-bg: rgba(20, 24, 30, 0.65);
    /* Crisp, glass-edge border */
    --node-border: rgba(255, 255, 255, 0.15);

    --text-color: var(--app-text-color1);
    --text-muted: var(--app-text-color2);
    --border-color: #555;
    --accent-color: var(--app-hi-color1);
    --selection-color: rgba(255, 69, 0, 0.2); /* app-hi-color1 with opacity */
    --selection-border: rgba(255, 69, 0, 0.6); /* app-hi-color1 with opacity */
    --port-color: #444; /* Dimmer for better contrast against dark nodes */
    --port-hover: #555;
    --port-connected: #4caf50; /* Softer green */
    --input-bg: #444;
    --button-bg: rgba(0, 0, 0, 0.2); /* Darker transparent to sit on gels */
    --button-hover: rgba(255, 255, 255, 0.05);
    --button-active: rgba(255, 255, 255, 0.1);

    /* Grid Layout Variables */
    --grid-unit: 80px;
    --grid-gap: 16px;
    --grid-line-color: rgba(255, 255, 255, 0.15);
    --row-height: 24px;
    --header-height: 24px;
    --node-padding-x: 16px;
    --node-padding-y: 8px;
    --node-content-width: 240px; /* NODE_WIDTH_NORMAL - 2*PADDING */

    color: var(--app-text-color2);
    font-family: Questrial, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  input[type="text"], input[type="number"], select {
    background: var(--input-bg);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 4px;
    padding: 4px 8px;
    font-family: inherit;
    font-size: 14px;
  }

  input:focus, select:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  .ui-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .ui-list-item {
    padding: 8px;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    border: 1px solid transparent;
  }

  .ui-list-item:hover {
    background-color: var(--button-hover);
  }

  .ui-list-item.selected {
    background-color: var(--selection-color);
    border: 1px solid var(--selection-border);
    color: var(--text-color);
  }

  /* Step Sequence Visualization */
  .step-seq-viz {
    display: inline-flex;
    gap: 1px;
    height: 14px;
    align-items: flex-end;
    background: rgba(0,0,0,0.3);
    padding: 2px;
    border-radius: 3px;
    vertical-align: middle;
  }

  .step-seq-viz .step {
    width: 6px;
    border-radius: 1px;
    min-height: 2px;
  }

  .step-seq-viz .step.hold {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: -1px; /* Connect visually */
    padding-right: 1px;
    z-index: 1;
  }


  /* Unified Chip Styles */
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background-color: var(--button-bg);
    border-radius: 12px;
    font-size: 0.9em;
    cursor: pointer;
    border: 1px solid transparent;
    color: var(--text-muted);
  }

  /* Interactive States */
  .chip:hover {
    background-color: var(--button-hover);
    color: var(--text-color);
    border-color: var(--border-color);
  }

  .chip.selected {
    background-color: var(--selection-color);
    border-color: var(--selection-border);
    color: var(--text-color);
  }

  .chip.disconnected {
    opacity: 0.5;
    text-decoration: line-through;
  }

  /* Code/Value Variant (Monospace, Compact) */
  .chip.code {
    padding: 2px 6px;
    border-radius: 4px; /* More square for code */
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px; /* Smaller font */
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #444;
    color: #ddd;
    gap: 4px;
    height: auto;
  }

  /* Type Colors for Code Chips */
  .chip.code.vector {
    background: rgba(42, 63, 74, 0.6);
    color: #8dc1e3;
    border-color: #3a5f7a;
  }

  .chip.code.struct {
    background: rgba(58, 42, 74, 0.6);
    color: #c18de3;
    border-color: #5f3a7a;
  }

  .chip.code.midi {
    background: rgba(74, 58, 42, 0.6);
    color: #e3c18d;
    border-color: #7a5f3a;
  }

  .chip.code.midi-stream {
    background: rgba(42, 74, 58, 0.6);
    color: #8de3c1;
    border-color: #3a7a5f;
  }

  .chip.code.sequence {
    background: rgba(50, 50, 50, 0.6);
    color: #aaa;
    border-color: #555;
  }

  .chip.code.cached {
    border-style: dashed;
  }

  :host([hidden]) {
    display: none !important;
  }
`],Fv=Se`
  :host {
    display: block;
    width: 100%;
    height: 100%;
    background: var(--node-bg, #222);
    border: 1px solid var(--node-border, #444);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    user-select: none;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  path {
    vector-effect: non-scaling-stroke;
  }

  .grid-pattern, .grid {
    stroke: var(--grid-color, rgba(255, 255, 255, 0.05));
    stroke-width: 1;
  }

  .axis-line, .zero-line {
    stroke: var(--border-color, rgba(255, 255, 255, 0.3));
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }
`,zv=Se`
  @keyframes flash-activation {
    0% {
        background-color: var(--button-bg);
        border-color: var(--app-hi-color1);
        box-shadow: 0 0 5px var(--selection-color);
    }
    100% {
        border-color: var(--border-color);
        box-shadow: none;
    }
  }

  .flashing {
    animation: flash-activation 0.2s ease-out forwards;
  }
`,fe={kind:"atomic",type:"number",defaultValue:0},jv={kind:"atomic",type:"string",defaultValue:""},we={kind:"atomic",type:"any"};function Xe(i,e){if(i==null)return i;if(e.kind==="atomic")return i&&typeof i=="object"&&"kind"in i&&i.kind==="atomic"?i.value:i;if(e.kind==="array")return Array.isArray(i)?i.map(t=>Xe(t,e.element)):[];if(e.kind==="record"){if(typeof i=="object"){if("fields"in i){const n=i,o={};for(const[r,s]of Object.entries(e.fields))r in n.fields&&(o[r]=Xe(n.fields[r],s));return o}const t={};for(const[n,o]of Object.entries(e.fields))n in i&&(t[n]=Xe(i[n],o));return t}return i}return i}function Zi(i,e){if(i==null||e.kind==="atomic")return i;if(e.kind==="array")return Array.isArray(i)?i.map(n=>Zi(n,e.element)):(console.error("toStructor array fail: not array",i),[]);if(e.kind==="record"){const t={};for(const[n,o]of Object.entries(e.fields))i[n]!==void 0&&(t[n]=Zi(i[n],o));return{fields:t}}return i}function Be(i){const e={kind:"record",fields:i.config||{}},t={kind:"record",fields:i.outputs};return{id:i.id,kind:"primitive",metadata:i.metadata,inputs:i.inputs,outputs:i.outputs,configType:e,isRealtime:i.isRealtime,onMessage:i.onMessage,getDisplayLabel:i.getDisplayLabel,subgraphExpansionTag:i.subgraphExpansionTag,getChildren:i.getChildren,getRegion:i.getRegion,cycleBreakingPorts:i.cycleBreakingPorts,consolidate:i.consolidate?(n,o,r,s)=>{const a=Xe(o,e),l={},c=n.fields||{};for(const[f,h]of Object.entries(i.inputs||{}))c[f]!==void 0&&(l[f]=Xe(c[f],h));i.consolidate(l,a,r,s)}:void 0,computeBackwardPorts:i.computeBackwardPorts,computeForwardPorts:(n,o,r,s)=>i.computeForwardPorts?i.computeForwardPorts(n,o,r,s):{inputs:{kind:"record",fields:i.inputs||{}},outputs:t},shouldRecompileOnConfigChange:(n,o)=>i.shouldRecompileOnConfigChange?i.shouldRecompileOnConfigChange(n,o):!1,compileConfig:i.compileConfig,ui:i.ui,createState:i.createState,execute:(n,o,r)=>{const s=Xe(o,e);let a;if(i.createState){const g=r.nodeId||`${i.id}-${JSON.stringify(o)}`;r.nodeState.has(g)||r.nodeState.set(g,i.createState(s,r)),a=r.nodeState.get(g)}let l=n;if(i.autoBroadcast&&i.inputs){const g={outputs:{},reshape:i.reshape??"none"},m=typeof i.autoBroadcast=="object"?i.autoBroadcast:{};if(s&&typeof s=="object"&&"autoBroadcast"in s){const x=s.autoBroadcast;x&&typeof x=="object"&&Object.assign(m,x)}for(const[x,v]of Object.entries(i.inputs)){const C=v.kind==="array",S=m[x],k=C?"collect":{reduce:"first"},_=S&&"combine"in S?S.combine:k;g.outputs[x]={fromFields:[x],combine:_??void 0}}const y=r.broadcast(g,n).apply(x=>{const v={};for(const[S,k]of Object.entries(i.inputs))if(g.outputs[S]?.combine==="collect"&&Array.isArray(x[S])){const M=x[S].map(P=>{if(Array.isArray(P)&&P.length>0&&Array.isArray(P[0])&&k.kind==="array"&&k.element.kind==="record")return P.map(V=>Xe(V,k.element));const O=k.element?.kind==="array",z=Array.isArray(P)&&P.length>0&&Array.isArray(P[0]);return O&&!z?Xe(P,k.element):Xe(P,k)}),T=k.element?.kind==="array";M.length===1&&Array.isArray(M[0])&&!T?v[S]=M[0]:v[S]=M}else{const M=x[S],T=k.element?.kind==="array",P=Array.isArray(M)&&M.length>0&&Array.isArray(M[0]);let O;k.kind==="array"&&T&&!P?O=Xe(M,k.element):O=Xe(M,k),v[S]=O!==void 0?O:k.defaultValue}return i.execute(v,s,r,a)});if(Array.isArray(y))if(y.length>0){const x={},v=y[0];for(const S of Object.keys(v))x[S]=[];for(const S of y)for(const[k,_]of Object.entries(S))x[k]&&x[k].push(_);const C={};for(const[S,k]of Object.entries(x)){const _=i.outputs[S]||i.dynamicOutputType;_&&(C[S]=Zi(k,{kind:"array",element:_,size:y.length}))}return{fields:C}}else return{fields:{}};else{let x=y,v;x&&typeof x=="object"&&"outputs"in x&&("ui"in x||Object.keys(x).length===2)&&("outputs"in i.outputs||(v=x.ui,x=x.outputs));const C=new Set([...Object.keys(i.outputs),...Object.keys(x)]),S={};for(const _ of C){const M=i.outputs[_]||i.dynamicOutputType;M&&x[_]!==void 0&&(S[_]=Zi(x[_],M))}const k={fields:S};return v!==void 0?{outputs:k,ui:v}:k}}else if(i.inputs&&Object.keys(i.inputs).length>0){const g={};for(const[m,b]of Object.entries(i.inputs))n.fields&&n.fields[m]!==void 0?g[m]=Xe(n.fields[m],b):b.defaultValue!==void 0&&(g[m]=b.defaultValue);l=g}let f=i.execute(l,s,r,a),h;f&&typeof f=="object"&&"outputs"in f&&("ui"in f||Object.keys(f).length===2)&&("outputs"in i.outputs||(h=f.ui,f=f.outputs));const d={},u=f;if(u){const g=new Set([...Object.keys(i.outputs),...Object.keys(u)]);for(const m of g){const b=i.outputs[m]||i.dynamicOutputType;b&&u[m]!==void 0&&(d[m]=Zi(u[m],b))}}const p={fields:d};return h!==void 0?{outputs:p,ui:h}:p}}}function Hv(i,e,t){const n={outputs:{},reshape:"none"};for(const[a,l]of Object.entries(e))n.outputs[a]={fromFields:l.source?Array.isArray(l.source)?l.source:[l.source]:[a],combine:l.combine??{reduce:"first"}};const r=i.broadcast(n,t).apply(a=>a),s={};if(Array.isArray(r)){for(const a of Object.keys(e))s[a]=[];for(const a of r)for(const l of Object.keys(e))s[l].push(a[l])}else for(const a of Object.keys(e))s[a]=r[a];for(const[a,l]of Object.entries(e))if(l.type)if(l.combine==="collect"){const c=s[a];Array.isArray(c)?s[a]=c.map(f=>Xe(f,l.type)):s[a]=Xe(c,l.type)}else{const c=s[a];Array.isArray(c)?s[a]=c.map(f=>Xe(f,l.type)):s[a]=Xe(c,l.type)}return s}function Ie(i,e,t,n="binary"){return Be({id:i,metadata:e,inputs:n==="binary"?{a:fe,b:fe}:{a:fe},outputs:{result:fe},autoBroadcast:!0,reshape:"vector",execute:(r,s,a)=>{if(n==="binary"){const{a:l,b:c}=r;return{result:t(l,c)}}else{const{a:l}=r;return{result:t(l,0)}}}})}function nf(i){if(i.length===0)return we;const e=i[0];if(i.every(r=>r.kind===e.kind&&(r.kind==="atomic"?r.type===e.type:!0)))return e;if(i.some(r=>r.kind==="atomic"&&r.type==="string"))return we;const n=i.some(r=>r.kind==="atomic"&&r.type==="number"),o=i.some(r=>r.kind==="atomic"&&r.type==="boolean");return n||o?fe:we}function Q(i){const e={};for(const[o,r]of Object.entries(i.inputs||{}))if("kind"in r)e[o]=r;else if("type"in r){const s=r,a=s.type,l=s.allowMultiConnection?{kind:"array",size:"dynamic",element:a}:a;e[o]={...l,redirect:s.redirect,defaultValue:"defaultValue"in s?s.defaultValue:a.defaultValue}}const t={};for(const[o,r]of Object.entries(i.outputs||{}))"kind"in r?t[o]=r:"type"in r&&(t[o]=r.type);return{...Be({...i,autoBroadcast:i.autoBroadcast,inputs:e,outputs:t,compileConfig:(o,r)=>i.compileConfig?i.compileConfig(o):o,computeForwardPorts:(o,r,s,a)=>i.computeForwardPorts?i.computeForwardPorts(o,r,s,a):{inputs:{kind:"record",fields:e},outputs:{kind:"record",fields:t}},computeBackwardPorts:(o,r,s)=>i.computeBackwardPorts?i.computeBackwardPorts(o,r,s):{inputRequirements:{kind:"record",fields:{}}},onMessage:i.onMessage,config:i.config}),ui:i.ui,version:i.version||"1.0.0",displayName:i.displayName||i.id,aliases:i.aliases,compileConfig:i.compileConfig,loadCompileDeps:i.loadCompileDeps,getDisplayLabel:i.getDisplayLabel,subgraphExpansionTag:i.subgraphExpansionTag,extendedInputs:i.inputs,extendedOutputs:i.outputs,inspectInputs:i.inspectInputs,shouldRecompileOnConfigChange:i.shouldRecompileOnConfigChange,getChildren:i.getChildren,getRegion:i.getRegion}}function I(i){const e=i.extendedInputs||i.inputs||{},t=Object.entries(e).map(([s,a])=>{const l="type"in a&&typeof a.type=="object"&&"kind"in a.type,c=l?a.type:a;return{name:s,type:c,description:l?a.description:void 0,defaultValue:l?a.defaultValue:void 0,range:l?a.range:void 0,step:l?a.step:void 0,suppressInputEditor:l?a.suppressInputEditor:c.kind==="atomic"&&c.type==="any"?!0:void 0,alwaysShowInputEditor:l?a.alwaysShowInputEditor:void 0,suppressLabel:l?a.suppressLabel:void 0,redirect:l?a.redirect:void 0,allowMultiConnection:l?a.allowMultiConnection:void 0}}),n=i.extendedOutputs||i.outputs||{},o=Object.entries(n).map(([s,a])=>{const l="type"in a&&typeof a.type=="object"&&"kind"in a.type,c=l?a.type:a;return{name:s,type:c,description:l?a.description:void 0,suppressLabel:l?a.suppressLabel:void 0}}),r={id:i.id,version:i.version||"1.0.0",displayName:i.displayName||i.id,aliases:i.aliases,definition:i,inputs:t,outputs:o,compileConfig:i.compileConfig,getDisplayLabel:i.getDisplayLabel,inspectInputs:i.inspectInputs,shouldRecompileOnConfigChange:i.shouldRecompileOnConfigChange,getChildren:i.getChildren,getRegion:i.getRegion};r.ui=i.ui,ee.register(r)}function Ah(i,e){const t=i.name,n=i.typeId;if(!e)return!t||t==="#"?n:t&&t.includes("#")?t.replace(/#/g,n):t;const o=!t||t==="#",r=t&&t.includes("#");if(o){if(e.getDisplayLabel){const s=e.getDisplayLabel(i);if(s)return s}return e.displayName}if(r){const s=e.getDisplayLabel?e.getDisplayLabel(i):e.displayName;return t.replace(/#/g,s||e.displayName)}return t}var B=(i=>(i.IO="IO",i.Math="Math",i.Logic="Logic",i.Data="Data",i.Functional="Functional",i.Core="Core",i.Custom="Custom",i.Utility="Utility",i.Debug="Debug",i))(B||{});const dp={kind:"record",fields:{domain:{kind:"array",element:fe,size:2},range:{kind:"array",element:fe,size:2},segments:{kind:"array",element:{kind:"record",fields:{id:{kind:"atomic",type:"string"},weight:fe,curve:{kind:"record",fields:{type:{kind:"atomic",type:"string"},value:{...fe,optional:!0},points:{kind:"array",element:{kind:"record",fields:{x:fe,y:fe}},optional:!0,size:"dynamic"}}}}},size:"dynamic"},envelopeNodes:{kind:"array",element:{kind:"record",fields:{id:{kind:"atomic",type:"string"},x:fe,y:fe}},optional:!0,size:"dynamic"}},hint:"curve"},up=(i,e)=>{const t=i.value,n=i.easing;if(!n||!n.segments||n.segments.length===0)return{result:t};const{domain:o,range:r,segments:s}=n,[a,l]=o,[c,f]=r;let h=(t-a)/(l-a);h=Math.max(0,Math.min(1,h));const d=s.reduce((S,k)=>S+k.weight,0)||1;let u=0,p=s[s.length-1],g=0,m=0;for(const S of s){const k=S.weight/d;if(h>=u&&h<=u+k){p=S,g=u,m=k;break}u+=k}const b=(h-g)/m;let y=0;const x=p.curve,v=x.type==="step"?x.value??2:1;switch(x.type){case"exponential":const S=Math.pow(10,-(x.value??0));y=Math.pow(b,S);break;case"linear":y=b;break;case"step":v<=1?y=0:y=Math.floor(b*v)/(v-1),b>=.999&&(y=1);break;case"sin":y=-(Math.cos(Math.PI*b)-1)/2;break;case"quad":y=b*b;break;case"points":if(x.points&&x.points.length>0){const k=x.points;if(b<=k[0].x)y=k[0].y;else if(b>=k[k.length-1].x)y=k[k.length-1].y;else for(let _=0;_<k.length-1;_++){const M=k[_],T=k[_+1];if(b>=M.x&&b<=T.x){const P=(b-M.x)/(T.x-M.x);y=M.y+P*(T.y-M.y);break}}}else y=b;break;default:y=b}return{result:c+y*(f-c)}},pp=Q({id:"curve.ease",version:"1.0.0",displayName:"Curve Ease",metadata:{category:B.Math,keywords:["curve","ease","envelope","shape"],description:"Applies a custom curve easing to the input value."},inputs:{value:{type:fe,description:"Input value (0-1)",defaultValue:0},easing:{type:{...dp,optional:!0},description:"Easing Curve Configuration",suppressInputEditor:!0}},outputs:{result:fe},autoBroadcast:!0,inspectInputs:!0,compileConfig:i=>({fields:{easing:i?.easing??{domain:[0,1],range:[0,1],segments:[{id:"s1",weight:1,curve:{type:"exponential",value:0}}]}},untagged:[]}),execute:up}),gp=Q({id:"curve.ease4",version:"1.0.0",displayName:"Curve Ease 4",metadata:{category:B.Math,keywords:["curve","ease","envelope","shape","multi"],description:"Applies a custom 4-segment curve easing to the input value."},inputs:{value:{type:fe,description:"Input value (0-1)",defaultValue:0},easing:{type:{...dp,optional:!0},description:"Easing Curve Configuration",suppressInputEditor:!0,defaultValue:{domain:[0,1],range:[0,1],segments:[{id:"s1",weight:1,curve:{type:"exponential",value:.5}},{id:"s2",weight:1,curve:{type:"exponential",value:0}},{id:"s3",weight:1,curve:{type:"exponential",value:-.5}},{id:"s4",weight:1,curve:{type:"exponential",value:-1}}]}}},outputs:{result:fe},autoBroadcast:!0,inspectInputs:!0,compileConfig:i=>({fields:{easing:i?.easing??{domain:[0,1],range:[0,1],segments:[{id:"s1",weight:1,curve:{type:"exponential",value:.5}},{id:"s2",weight:1,curve:{type:"exponential",value:0}},{id:"s3",weight:1,curve:{type:"exponential",value:-.5}},{id:"s4",weight:1,curve:{type:"exponential",value:-1}}]}},untagged:[]}),execute:up});I(pp);I(gp);const qv=(i,e,t,n)=>{const o=i.value??0,r=e?.config;if(!r||!r.envelopeNodes||r.envelopeNodes.length<2||!r.segments)return{result:o};const s=r.envelopeNodes,a=r.segments||[],l=s[0],c=s[s.length-1];if(o<=l.x)return{result:l.y};if(o>=c.x)return{result:c.y};let f=n.lastSegmentIndex||0;if(f>=s.length-1||o<s[f].x||o>=s[f+1].x){for(let b=0;b<s.length-1;b++)if(o>=s[b].x&&o<s[b+1].x){f=b;break}}n.lastSegmentIndex=f;const h=s[f],d=s[f+1],u=a[f],p=(o-h.x)/(d.x-h.x);let g=p;if(u&&u.curve){const b=u.curve.type||"linear",y=u.curve.value||0;if(b==="linear")g=p;else if(b==="exponential"){const x=Math.pow(10,-(y??0)),v=Math.max(0,p);g=Math.pow(v,x)}}return{result:h.y+(d.y-h.y)*g}},mp=Q({id:"curve.env",version:"1.0.0",displayName:"Curve Envelope",metadata:{category:"Curve",keywords:["envelope","automation","ramp"],description:"User-editable curve envelope"},inputs:{value:{type:fe,description:"Input value (0-1)",defaultValue:0}},outputs:{result:{type:fe,description:"Output value"}},config:{config:{kind:"atomic",type:"any",defaultValue:{}}},inspectInputs:!0,createState:()=>({lastSegmentIndex:0}),autoBroadcast:!0,compileConfig:i=>({config:i.config??i.curveData??i.values?.config??{domain:[0,1],range:[0,1],envelopeNodes:[{id:"n1",x:0,y:0},{id:"n2",x:1,y:1}],segments:[{id:"s1",weight:1,curve:{type:"linear"}}]}}),execute:qv});I(mp);const Wv={value:{type:fe,defaultValue:0},start:{type:fe,defaultValue:0},end:{type:fe,defaultValue:1,optional:!0},length:{type:fe,defaultValue:1,optional:!0}},Wl=Q({id:"curve.crop",version:"1.0.0",displayName:"Curve Crop",metadata:{category:"Curve",keywords:["crop","slice","remap","linear"],description:"Linear mapping from 0-1 to start-end range."},config:{mode:{kind:"atomic",type:"string",defaultValue:"start-end"}},computeForwardPorts:(i,e,t)=>{const n=e.mode||"start-end",o={value:{...fe,description:"Input value (0-1)",defaultValue:0},start:{...fe,description:"Output at 0",defaultValue:0}};return n==="start-length"?o.length={...fe,description:"Length of crop",defaultValue:1}:o.end={...fe,description:"Output at 1",defaultValue:1},{inputs:{kind:"record",fields:o},outputs:{kind:"record",fields:{result:fe}}}},inputs:Wv,outputs:{result:{type:fe}},ui:{inspector:{fields:[{type:"tab-bar",label:"Mode",path:"mode",options:[{label:"Start / End",value:"start-end"},{label:"Start / Length",value:"start-length"}]}]}},compileConfig:i=>({mode:i.mode||"start-end"}),autoBroadcast:!0,inspectInputs:!0,execute:(i,e,t)=>{const n=e.mode||"start-end",o=i.start??0,r=i.value??0;let s;if(n==="start-length"){const c=i.length??1;s=o+c}else s=i.end??1;s<o&&(s=o);let a=0;const l=s-o;if(l<1e-6)a=r>=o?1:0;else{const c=(r-o)/l;a=Math.max(0,Math.min(1,c))}return{outputs:{result:a},ui:{start:o,end:s}}},shouldRecompileOnConfigChange:i=>!0});I(Wl);const w={kind:"atomic",type:"number",defaultValue:0},_h={kind:"atomic",type:"string"},bp={kind:"atomic",type:"boolean"},xe={kind:"atomic",type:"any"},yp={kind:"atomic",type:"string",options:["time","beats"],defaultValue:"time"},Uv={kind:"record",fields:{type:_h,channel:w,deviceId:{..._h,optional:!0},time:{...w,optional:!0},note:{...w,optional:!0},velocity:{...w,optional:!0},cc:{...w,optional:!0},value:{...w,optional:!0}},hint:"midi"},J={kind:"array",size:"dynamic",element:Uv,hint:"midi-stream"},of={kind:"array",element:w,size:4,hint:"float4"},Mh={kind:"record",fields:{note:w,velocity:w},untagged:[]};({...Mh},{...Mh});const Gv={kind:"record",fields:{noteIndex:xe,velocity:w,hold:bp},untagged:[]},Ze={kind:"array",size:"dynamic",element:Gv,hint:"step-sequence"},rf=Q({id:"debug.scope",version:"1.0.0",displayName:"Scope",metadata:{category:B.Debug,keywords:["debug","scope","chart","visualize"],description:"Visualizes input values over time."},inputs:{value:{type:w,suppressLabel:!0,alwaysShowInputEditor:!0}},outputs:{value:w},config:{},inspectInputs:!0,execute:i=>({value:i.value}),compileConfig:i=>({})});I(rf);I(rf);class Yv{execute(e,t){if(!e.rootId)return null;const n=new Map,o=r=>{if(n.has(r))return n.get(r);const s=e.nodes[r];if(!s)throw new Error(`Missing node ${r}`);const a=s.inputs.map(c=>o(c));let l;switch(s.op){case"const":l=s.params.value;break;case"input":l=t[s.params.key]!==void 0?t[s.params.key]:globalThis[s.params.key];break;case"add":l=a[0]+a[1];break;case"sub":l=a[0]-a[1];break;case"mul":l=a[0]*a[1];break;case"div":l=a[0]/a[1];break;case"prop":if(a[0]===void 0||a[0]===null)throw new Error(`Cannot access property '${s.params.key}' of undefined`);l=a[0][s.params.key];break;case"struct":l={},s.params.keys.forEach((c,f)=>{l[c]=a[f]});break;default:throw new Error(`Unknown op: ${s.op}`)}return n.set(r,l),l};return o(e.rootId)}}let Vs=null;const Kv=new Yv,Ya=new Map;function Ih(i){if(Ya.has(i))return Ya.get(i);if(!Vs)return console.warn("Expression Compiler not loaded yet. Returning empty graph."),{nodes:{},rootId:null};try{const e=Vs.compiler.compile(i);return Ya.set(i,e),e}catch(e){return console.error("Compilation failed:",e),{nodes:{},rootId:null}}}const Xv=[{type:"string",label:"Expression",path:"code",placeholder:"e.g. sin(time) * 0.5"}],vp=Q({id:"logic.expression",version:"1.0.0",displayName:"Expression",metadata:{category:B.Logic,keywords:["expression","math","script","code"],description:"Evaluates a mathematical expression."},inputs:{},config:{code:jv,graph:we},outputs:{result:we},autoBroadcast:!1,ui:{inspector:{fields:Xv}},loadCompileDeps:async()=>{if(!Vs){const i=await Oe(()=>import("./expr-compiler-D9w4n4rZ.js"),[]);Vs={compiler:new i.GraphCompiler}}},compileConfig:i=>{const e=i.code||"",t=Ih(e);return{code:e,graph:t}},computeForwardPorts:(i,e)=>{const t=e.code||"",n=Ih(t),o=new Set;for(const s of Object.values(n.nodes))s.op==="input"&&o.add(s.params.key);const r=Array.from(o).map(s=>[s,{...w,description:`Variable ${s}`}]);return{inputs:{kind:"record",fields:Object.fromEntries(r)},outputs:{kind:"record",fields:{result:{...xe,description:"Result"}}}}},execute:(i,e,t)=>{const n=e.graph;if(!n||!n.rootId)return{result:0};const o={...i};try{return{result:Kv.execute(n,o.fields||o)}}catch(r){return console.error("Execution failed:",r),{result:null}}}});I(vp);const Jv=Q({id:"gen.sawtooth",version:"1.0.0",displayName:"Sawtooth",metadata:{category:"Oscillator",keywords:["oscillator","sawtooth","ramp","lfo","generator"],description:"Generates a linear sawtooth wave (0.0 to 1.0) at the given frequency."},inputs:{freq:{type:w,defaultValue:1,range:[0,60],description:"Frequency in Hz"}},outputs:{out:w},autoBroadcast:!0,isRealtime:()=>!0,createState:()=>({phase:0}),execute:(i,e,t,n)=>{const o=i.freq,r=t.clock.dt;return o>=60-1e-6?{out:Math.random()}:(n.phase+=r*o,n.phase-=Math.floor(n.phase),{out:n.phase})}});I(Jv);const qe={IDLE:0,ATTACK:1,DECAY:2,SUSTAIN:3,RELEASE:4},Ul=Q({id:"gen.adsr",version:"1.0.0",displayName:"ADSR",metadata:{category:"Envelope",keywords:["envelope","adsr","modulation"],description:"Attack-Decay-Sustain-Release envelope generator triggered by MIDI."},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},inputs:{stream:{type:J,description:"MIDI Stream",allowMultiConnection:!0},attack:{type:w,defaultValue:.1,range:[0,5],description:"Attack Time (s)"},decay:{type:w,defaultValue:1,range:[0,5],description:"Decay Time (s)"},sustain:{type:w,defaultValue:.7,range:[0,1],description:"Sustain Level (0-1)"},release:{type:w,defaultValue:1,range:[0,5],description:"Release Time (s)"}},config:{mode:{kind:"atomic",type:"string",defaultValue:"D"}},ui:{inspector:{fields:[{label:"Mode",path:"mode",type:"tab-bar",options:[{label:"ADSR",value:"ADSR"},{label:"ADS",value:"ADS"},{label:"D",value:"D"}]}]}},compileConfig:i=>({mode:i.mode||i.values?.mode||"D"}),computeForwardPorts:(i,e)=>{const t=e.mode||"D",n={stream:J};return t==="ADSR"?(n.attack=w,n.decay=w,n.sustain=w,n.release=w):t==="ADS"?(n.attack=w,n.decay=w,n.sustain=w):t==="D"&&(n.decay=w),{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{value:w}}}},outputs:{value:{type:w,description:"Envelope Value (0-1)"}},isRealtime:()=>!0,shouldRecompileOnConfigChange:i=>!0,createState:()=>({phase:qe.IDLE,value:0,time:0,activeNotes:0}),execute:(i,e,t,n)=>{const o=t.clock.dt,r=e.mode||"D",s=i.stream;let a=0,l=0,c=0,f=0;if(r==="D"?(a=0,l=Math.max(0,i.decay??.1),c=0,f=l):r==="ADS"?(a=Math.max(0,i.attack??.1),l=Math.max(0,i.decay??.1),c=Math.max(0,Math.min(1,i.sustain??.7)),f=l):(a=Math.max(0,i.attack??.1),l=Math.max(0,i.decay??.1),c=Math.max(0,Math.min(1,i.sustain??.7)),f=Math.max(0,i.release??.5)),Array.isArray(s))for(const h of s)h.type==="note_on"&&(h.velocity??0)>0?(n.activeNotes++,n.activeNotes===1&&(n.phase=qe.ATTACK,n.value=0,n.time=0,a<=0&&(n.value=1,n.phase=qe.DECAY,n.time=0,l<=0&&(n.value=c,n.phase=qe.SUSTAIN)))):(h.type==="note_off"||h.type==="note_on"&&(h.velocity??0)===0)&&(n.activeNotes=Math.max(0,n.activeNotes-1));switch(n.activeNotes===0&&n.phase!==qe.IDLE&&n.phase!==qe.RELEASE&&(n.phase=qe.RELEASE,n.time=0),n.phase){case qe.IDLE:n.value=0,n.time=0;break;case qe.ATTACK:n.time+=o,n.value+=1/Math.max(.001,a)*o,n.value>=1&&(n.value=1,n.phase=qe.DECAY,n.time=0,l<=0&&(n.value=c,n.phase=qe.SUSTAIN));break;case qe.DECAY:n.time+=o,n.value-=(1-c)/Math.max(.001,l)*o,n.value<=c&&(n.value=c,n.phase=qe.SUSTAIN,n.time=0);break;case qe.SUSTAIN:n.time+=o,n.value=c;break;case qe.RELEASE:n.time+=o,f<=0?(n.value=0,n.phase=qe.IDLE,n.time=0):(n.value-=1/f*o,n.value<=0&&(n.value=0,n.phase=qe.IDLE,n.time=0));break}return{outputs:{value:Math.max(0,Math.min(1,n.value))},ui:{value:n.value,phase:n.phase,time:n.time}}},inspectInputs:!0});I(Ul);function Qv(i){let o=i;return{next:()=>(o=(1103515245*o+12345)%2147483648,o/2147483647)}}const Zv=Q({id:"math.random",version:"1.1.0",displayName:"Random",metadata:{category:"Math",keywords:["random","stochastic","noise","seed","white"],description:"Generates a random number (0-1). Supports on-trigger or free-run modes."},inputs:{trigger:{type:J,description:"Trigger Signal",allowMultiConnection:!0}},config:{seed:{kind:"atomic",type:"number",defaultValue:12345},mode:{kind:"atomic",type:"string",defaultValue:"on-trigger"}},outputs:{value:{type:w,description:"Random Value"}},autoBroadcast:{trigger:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:[{type:"tab-bar",label:"Mode",path:"mode",options:[{label:"On Trigger",value:"on-trigger"},{label:"Free Run",value:"free-run"}],default:"on-trigger"},{type:"number",label:"Seed",path:"seed",default:12345}]}},compileConfig:i=>({mode:i.mode||i.values?.mode||"on-trigger",seed:i.seed||i.values?.seed||12345}),computeForwardPorts:(i,e)=>{const t=e.mode||"on-trigger",n={};return t==="on-trigger"&&(n.trigger={type:J,description:"Trigger Signal",allowMultiConnection:!0}),{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{value:w}}}},isRealtime:i=>i.mode==="free-run",shouldRecompileOnConfigChange:i=>!0,createState:i=>{const t=i?.seed||12345,n=Qv(t);return{generator:n,currentValue:n.next()}},execute:(i,e,t,n)=>{const o=e.mode||"on-trigger",r=i.trigger;if(o==="free-run")n.currentValue=n.generator.next();else if(Array.isArray(r))for(const s of r)s.type==="note_on"&&(s.velocity??0)>0&&(n.currentValue=n.generator.next());return{value:n.currentValue}}});I(Zv);const ew=[{type:"string",label:"Device ID",path:"deviceId",placeholder:"Optional Device ID"}],tw=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"CC",path:"cc",min:0,max:127,step:1},{type:"string",label:"Device ID",path:"deviceId",placeholder:"Optional Device ID"}],nw=Q({id:"midi.input",version:"1.0.0",displayName:"MIDI Input",metadata:{category:B.IO,keywords:["midi","input","source"],description:"Reads raw MIDI messages from a specific device."},inputs:{},config:{deviceId:{kind:"atomic",type:"string",optional:!0}},outputs:{stream:J},ui:{inspector:{fields:ew}},isRealtime:()=>!0,execute:(i,e,t)=>{const n=t.midi?.events,o=e.deviceId;return n&&o?{stream:n.filter(s=>s.deviceId===o)}:{stream:n||[]}},compileConfig:i=>({deviceId:i.deviceId})}),iw=Q({id:"midi.cc.input",version:"1.0.0",displayName:"MIDI CC Input",metadata:{category:B.IO,keywords:["midi","cc","input"],description:"Reads a MIDI CC value directly from the environment."},inputs:{},config:{channel:w,cc:w,deviceId:{kind:"atomic",type:"string",optional:!0}},outputs:{value:w},ui:{inspector:{fields:tw}},isRealtime:()=>!0,execute:(i,e,t)=>{const n=e.channel||1,o=e.cc||0;e.deviceId;const r=`${n}:${o}`;return{value:t.midi?.values.get(r)??0}},compileConfig:i=>({channel:i.channel??1,cc:i.cc??0,deviceId:i.deviceId})});I(nw);I(iw);const ow=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"CC",path:"cc",min:0,max:127,step:1}],rw=Q({id:"midi.cc",version:"1.0.0",displayName:"MIDI CC",metadata:{category:B.IO,keywords:["midi","cc","control change"],description:"Reads MIDI Control Change messages from a stream."},inputs:{stream:{type:J,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{channel:w,cc:w},outputs:{value:w},ui:{inspector:{fields:ow}},createState:()=>({value:0}),execute:(i,e,t,n)=>{const o=e.channel||1,r=e.cc||0,s=i.stream||[];if(s&&Array.isArray(s))for(const a of s)a.type==="cc"&&a.channel===o&&a.cc===r&&(n.value=a.value??0);return{value:n.value}},compileConfig:i=>({channel:i.channel??1,cc:i.cc??0})});I(rw);const sw=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"Note",path:"note",min:0,max:127,step:1}],aw=Q({id:"midi.note",version:"1.0.0",displayName:"MIDI Note",metadata:{category:B.IO,keywords:["midi","note","keyboard"],description:"Reads MIDI Note messages from a stream."},inputs:{stream:{type:J,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{channel:w,note:w},outputs:{note:{kind:"atomic",type:"number",optional:!0},velocity:w,gate:w},ui:{inspector:{fields:sw}},createState:()=>({velocity:0,gate:0}),execute:(i,e,t,n)=>{const o=e.channel||1,r=e.note||60,s=i.stream||[];if(s&&Array.isArray(s))for(const a of s)a.channel===o&&(a.type==="note_on"&&a.note===r?(n.velocity=a.velocity??0,n.gate=1):a.type==="note_off"&&a.note===r&&(n.gate=0));return{note:n.gate?r:null,velocity:n.velocity,gate:n.gate}},compileConfig:i=>({channel:i.channel??1,note:i.note??60})});I(aw);const lw=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"Root Note",path:"rootNote",min:0,max:127,step:1},{type:"select",label:"Priority",path:"priority",options:[{label:"Last Note",value:"last"},{label:"Low Note",value:"low"},{label:"High Note",value:"high"}]}],cw=Q({id:"midi.to_mono",version:"1.0.0",displayName:"MIDI to Mono",metadata:{category:B.IO,keywords:["midi","mono","converter"],description:"Converts a polyphonic MIDI stream to a monophonic note signal."},inputs:{stream:{type:J,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{channel:w,rootNote:w,priority:{kind:"atomic",type:"string",optional:!0}},outputs:{note:{kind:"atomic",type:"number",optional:!0},velocity:w,gate:w,frequency:w},ui:{inspector:{fields:lw}},createState:()=>({activeNotes:[],gate:0}),execute:(i,e,t,n)=>{const o=e.channel||1,r=e.rootNote??60,s=i.stream||[];if(n.activeNotes||(n.activeNotes=[]),s&&Array.isArray(s))for(const l of s)l.channel===o&&(l.type==="note_on"?(n.activeNotes=n.activeNotes.filter(c=>c.note!==l.note),n.activeNotes.push({note:l.note,velocity:l.velocity??0})):l.type==="note_off"&&(n.activeNotes=n.activeNotes.filter(c=>c.note!==l.note)));const a=n.activeNotes.length>0?n.activeNotes[n.activeNotes.length-1]:null;if(a){n.gate=1;const l=a.note-r,c=440*Math.pow(2,(a.note-69)/12);return{note:l,velocity:a.velocity,gate:1,frequency:c}}else return n.gate=0,{note:null,velocity:0,gate:0,frequency:0}},compileConfig:i=>({channel:i.channel??1,rootNote:i.rootNote??60,priority:i.priority??"last"})});I(cw);const fw=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"Note",path:"note",min:0,max:127,step:1}],hw=Q({id:"midi.filter",version:"1.0.0",displayName:"MIDI Filter",metadata:{category:B.IO,keywords:["midi","filter","note"],description:"Filters MIDI events, allowing only specific Note On/Off messages through."},inputs:{stream:{type:J,allowMultiConnection:!0},channel:{type:w,description:"MIDI Channel (1-16)",defaultValue:1},note:{type:w,description:"Note Number (0-127)",defaultValue:60}},config:{},outputs:{stream:J},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:fw}},execute:(i,e)=>{const t=i.channel??1,n=i.note??60,o=i.stream||[],r=[];if(o&&Array.isArray(o))for(const s of o)s.channel===t&&(s.type==="note_on"||s.type==="note_off")&&s.note===n&&r.push(s);return{stream:r}},compileConfig:i=>({channel:i.channel??1,note:i.note??60})});I(hw);const dw=Q({id:"midi.pitch",version:"1.0.0",displayName:"MIDI Pitch",metadata:{category:B.IO,keywords:["midi","pitch","transpose","shift"],description:"Transposes MIDI Note events by a specified amount."},inputs:{stream:{type:J,allowMultiConnection:!0},pitch:{type:w,description:"Pitch shift amount (semitones)",defaultValue:0,range:[-24,24]}},config:{},outputs:{stream:J},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},execute:(i,e)=>{const t=i.pitch??0,n=i.stream||[];return!n||!Array.isArray(n)?{stream:[]}:{stream:n.map(r=>{if(r.type==="note_on"||r.type==="note_off"){const s=Math.max(0,Math.min(127,Math.floor(r.note+t)));return{...r,note:s}}return r})}},compileConfig:i=>({pitch:i.pitch??0})});I(dw);const Gl=Q({id:"midi.trigger",version:"1.0.0",displayName:"MIDI Trigger",metadata:{category:B.IO,keywords:["midi","trigger","bang","button"],description:"Manually sends a Middle C Note On/Off pair when triggered."},inputs:{trigger:{type:w,description:"Trigger Signal",suppressInputEditor:!0}},config:{pitch:{...w,defaultValue:60},velocity:{...w,defaultValue:1,range:[0,1]},trigger:w},outputs:{stream:J},createState:()=>({lastTrigger:0,initialized:!1}),execute:(i,e,t,n)=>{const o=e.pitch||60,r=e.velocity||1,s=i.trigger||0;t.clock.dt;const a=[];return n.initialized?(s>n.lastTrigger&&(a.push({type:"note_on",channel:1,note:o,velocity:r,deviceId:"virtual",time:0}),a.push({type:"note_off",channel:1,note:o,velocity:0,deviceId:"virtual",time:0}),t.markSelfDirty&&t.markSelfDirty()),n.lastTrigger=s,{stream:a}):(n.lastTrigger=s,n.initialized=!0,{stream:a})},compileConfig:i=>({pitch:i.pitch??60,velocity:i.velocity??1,trigger:i.trigger}),ui:{inspector:{fields:[{type:"button",label:"Trigger",path:"trigger",text:"Bang"},{type:"number",label:"Pitch",path:"pitch",min:0,max:127,step:1,default:60},{type:"number",label:"Velocity",path:"velocity",min:0,max:1,step:.01,default:1}]}}});I(Gl);const uw=Q({id:"midi.merge",version:"1.0.0",displayName:"MIDI Merge",metadata:{category:B.IO,keywords:["midi","merge","combine","mix"],description:"Merges multiple MIDI streams into one using auto-broadcast."},inputs:{stream:{type:J,description:"Input Streams",allowMultiConnection:!0}},outputs:{stream:J},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{},execute:(i,e,t)=>({stream:i.stream||[]}),compileConfig:()=>({})});I(uw);const pw=Q({id:"midi.select",version:"1.0.0",displayName:"MIDI Select",metadata:{category:B.IO,keywords:["midi","select","router","switch","demux"],description:"Routes MIDI events to different ports based on note pitch."},inputs:{stream:{type:J,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{count:{...w,defaultValue:4},root:{...w,defaultValue:60},skip:{...w,defaultValue:1}},outputs:{},dynamicOutputType:J,isRealtime:()=>!0,computeForwardPorts:(i,e,t)=>{const n=e.count||4,o={};for(let r=0;r<n;r++)o[r.toString()]={...J,hint:"midi-stream",description:`Offset ${r}`};return o.rem={...J,hint:"midi-stream",description:"Remainder"},{inputs:{kind:"record",fields:{stream:J}},outputs:{kind:"record",fields:o}}},shouldRecompileOnConfigChange:i=>!0,execute:(i,e,t)=>{const n=i.stream||[],o=e.count||4,r=e.root||60,s=e.skip||1,a={};for(let l=0;l<o;l++)a[l.toString()]=[];if(a.rem=[],n&&Array.isArray(n)){for(const l of n)if(l.type==="note_on"||l.type==="note_off"){const c=l.note-r;if(c>=0&&c%s===0){const f=c/s;if(f>=0&&f<o){a[f.toString()].push(l);continue}}a.rem.push(l)}}return{...a}},compileConfig:i=>({count:i.count??4,root:i.root??60,skip:i.skip??1}),ui:{inspector:{fields:[{type:"number",label:"Output Count",path:"count",min:1,max:128,step:1,default:4},{type:"number",label:"Root Note",path:"root",min:0,max:127,step:1,default:60},{type:"number",label:"Skip (Semitones)",path:"skip",min:1,max:24,step:1,default:1}]}}});I(pw);const gw=Q({id:"midi.onchange",version:"1.0.0",displayName:"MIDI On Change",metadata:{category:B.IO,keywords:["midi","trigger","change","delta"],description:"Triggers a note when input value changes."},inputs:{value:{type:we,description:"Input Value"}},config:{rootNote:{...w,defaultValue:60}},outputs:{stream:J},ui:{inspector:{fields:[{type:"number",label:"Root Note",path:"rootNote",min:0,max:127,step:1,default:60}]}},isRealtime:()=>!0,createState:()=>({lastValue:void 0}),execute:(i,e,t,n)=>{const o=i.value,r=e.rootNote??60,s=[];let a=!1;return typeof o=="number"&&typeof n.lastValue=="number"?Math.abs(o-n.lastValue)>1e-5&&(a=!0):o!==n.lastValue&&(a=!0),a?(s.push({type:"note_on",note:r,velocity:1,channel:1,time:0,deviceId:"onchange"}),s.push({type:"note_off",note:r,velocity:0,channel:1,time:0,deviceId:"onchange"}),n.lastValue=o):n.lastValue===void 0&&o!==void 0&&(n.lastValue=o),{stream:s}},compileConfig:i=>({rootNote:i.rootNote??60})});I(gw);const wp={};for(let i=1;i<=16;i++)wp[`w${i}`]={type:w,defaultValue:1,optional:!0,description:`Weight ${i}`};const mw=Q({id:"midi.onrange",version:"1.0.0",displayName:"MIDI On Range",metadata:{category:B.IO,keywords:["midi","trigger","range","zone"],description:"Triggers notes based on value position in weighted zones."},inputs:{value:{type:w,description:"Input Value"},start:{type:w,defaultValue:0},end:{type:w,defaultValue:1},...wp},config:{rootNote:{...w,defaultValue:60,description:"Root Note"},zoneCount:{...w,defaultValue:1,description:"Number of Zones"},noteSkip:{...w,defaultValue:1}},outputs:{stream:J},ui:{inspector:{fields:[{type:"number",label:"Root Note",path:"rootNote",min:0,max:127,step:1,default:60},{type:"number",label:"Zone Count",path:"zoneCount",min:1,max:16,step:1,default:1},{type:"number",label:"Note Skip",path:"noteSkip",min:1,max:12,step:1,default:1}]}},isRealtime:()=>!0,createState:()=>({activeZoneIndex:null}),computeForwardPorts:(i,e)=>{const t=e.zoneCount??1,n={value:{...w},start:{...w,defaultValue:0},end:{...w,defaultValue:1}};if(t>1)for(let o=1;o<=t;o++)n[`w${o}`]={...w,defaultValue:1,description:`Weight ${o}`};return{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{stream:J}}}},shouldRecompileOnConfigChange:()=>!0,execute:(i,e,t,n)=>{const o=i.value??0,r=i.start??0,s=i.end??1,a=e.rootNote??60,l=e.zoneCount??1,c=e.noteSkip??1;let f=r,h=s;h<f&&(h=r,f=s);const d=[];if(o>=f&&o<=h){let u=0;if(l>1){const p=[];let g=0;for(let m=1;m<=l;m++){let y=i[`w${m}`];y&&typeof y=="object"&&"value"in y&&(y=y.value),y=y??1,typeof y!="number"&&(y=1),p.push(y),g+=y}if(g<=0)u=0;else{const m=h-f,y=(m===0?0:(o-f)/m)*g;let x=0;for(let v=0;v<l;v++)if(x+=p[v],y<=x){u=v;break}u>=l&&(u=l-1)}}else u=0;if(n.activeZoneIndex===null){const p=a+u*c;d.push({type:"note_on",note:p,velocity:1,channel:1,time:0,deviceId:"onrange"}),n.activeZoneIndex=u}else if(n.activeZoneIndex!==u){const p=a+n.activeZoneIndex*c;d.push({type:"note_off",note:p,velocity:0,channel:1,time:0,deviceId:"onrange"});const g=a+u*c;d.push({type:"note_on",note:g,velocity:1,channel:1,time:0,deviceId:"onrange"}),n.activeZoneIndex=u}}else if(n.activeZoneIndex!==null){const u=a+n.activeZoneIndex*c;d.push({type:"note_off",note:u,velocity:0,channel:1,time:0,deviceId:"onrange"}),n.activeZoneIndex=null}return{stream:d}},compileConfig:i=>({rootNote:i.rootNote??60,zoneCount:i.zoneCount??1,noteSkip:i.noteSkip??1})});I(mw);const xp={type:"tab-bar",label:"Mode",path:"mode",options:[{label:"Time",value:"time"},{label:"Beats",value:"beats"}],default:"time"},bw={type:"tab-bar",label:"Beat Denom",path:"beatDenom",options:[{label:"1/64",value:.015625},{label:"1/32",value:.03125},{label:"1/16",value:.0625},{label:"1/8",value:.125},{label:"1/4",value:.25},{label:"1/2",value:.5},{label:"1/1",value:1}],default:.25},yw=[xp],vw=Q({id:"midi.delay",version:"1.0.0",displayName:"MIDI Delay",metadata:{category:B.Utility,keywords:["midi","delay","time","beats"],description:"Delays MIDI events by a specified duration."},inputs:{stream:{type:J,allowMultiConnection:!0},duration:{...w,defaultValue:.25}},config:{mode:{...yp,defaultValue:"time"}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},outputs:{stream:J},ui:{inspector:{fields:yw}},isRealtime:()=>!0,createState:()=>({queue:[]}),execute:(i,e,t,n)=>{const o=i.stream||[],r=i.duration||0,s=e.mode||"time";let a=0;if(s==="beats"?a=t.clock.beat:a=t.time||0,n.queue||(n.queue=[]),o&&Array.isArray(o))for(const f of o)n.queue.push({event:f,releaseTime:a+r});const l=[],c=[];for(const f of n.queue)f.releaseTime<=a?l.push(f.event):c.push(f);return n.queue=c,{stream:l}},compileConfig:i=>({mode:i.mode??"time"})});I(vw);const ww=Q({id:"midi.istrigger",version:"1.0.0",displayName:"MIDI Is Trigger",metadata:{category:B.Logic,keywords:["midi","check","trigger","gate"],description:"Outputs 1 if the stream contains any Note On event, 0 otherwise."},inputs:{stream:{type:J,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},outputs:{result:w},createState:()=>({}),execute:(i,e,t,n)=>{const o=i.stream||[];let r=0;if(o&&Array.isArray(o)){for(const s of o)if(s.type==="note_on"){r=1;break}}return{result:r}}});I(ww);const xw=[xp,bw,{type:"number",label:"Note",path:"note",min:0,max:127,default:60}],Sw=Q({id:"midi.metronome",version:"1.0.0",displayName:"Metronome",metadata:{category:B.Utility,keywords:["midi","metronome","clock","beat","trigger"],description:"Generates MIDI note events at regular intervals."},inputs:{duration:{...w,defaultValue:1,description:"Interval duration (seconds or beats)",min:0,max:4}},config:{mode:{...yp,defaultValue:"time"},beatDenom:{...w,defaultValue:.25},note:{...w,defaultValue:60}},outputs:{stream:J},ui:{inspector:{fields:xw}},isRealtime:()=>!0,createState:()=>({lastTriggerTime:-99999,noteActive:!1}),execute:(i,e,t,n)=>{const o=i.duration||1,r=e.mode||"time",s=e.beatDenom||.25,a=e.note||60;let l=0,c=o;r==="beats"?(l=t.clock.beat,c=Math.round(o)*s*4,c<=0&&(c=s)):l=t.time||0;const f=[];if(n.lastTriggerTime===-99999)return n.lastTriggerTime=l,{stream:[]};const h=n.lastTriggerTime,d=Math.floor(h/c),p=Math.floor(l/c)-d;for(let g=1;g<=p;g++)f.push({type:"note_on",deviceId:"metronome",channel:1,note:a,velocity:1,time:0}),f.push({type:"note_off",deviceId:"metronome",channel:1,note:a,velocity:0,time:0});return n.lastTriggerTime=l,{stream:f}},compileConfig:i=>({mode:i.mode??"time",beatDenom:i.beatDenom??.25,note:i.note??60})});I(Sw);const kw=Q({id:"time.time",version:"1.0.0",displayName:"Time",metadata:{category:B.Utility,keywords:["time","seconds","clock"],description:"Outputs the current execution time in seconds."},inputs:{},outputs:{time:w,delta:w},isRealtime:()=>!0,execute:(i,e,t)=>({time:t.time||0,delta:t.clock.dt||0})}),Cw=Q({id:"time.beat",version:"1.0.0",displayName:"Beat",metadata:{category:B.Utility,keywords:["beat","bar","clock","tempo"],description:"Outputs the current beat number."},inputs:{},outputs:{beat:w,delta:w},isRealtime:()=>!0,createState:()=>({lastBeat:-1}),execute:(i,e,t,n)=>{const o=t.clock.beat||0;let r=0;return n.lastBeat>=0&&(r=o-n.lastBeat),n.lastBeat=o,{beat:o,delta:r}}});I(kw);I(Cw);const Fs={kind:"atomic",type:"number"},Ka=16,Aw=[{type:"number",label:"Target Note",path:"targetNote"}],_w=Q({id:"nicepattern.rhythmic_generator",version:"1.0.0",displayName:"Rhythmic Generator",metadata:{category:"NicePattern",keywords:["rhythm","generator","sequence","euclidean"],description:"Generates a rhythmic sequence based on density."},config:{targetNote:w},inputs:{density:{...w,defaultValue:.5}},outputs:{seq_out:Ze},ui:{inspector:{fields:Aw}},execute:(i,e,t)=>{const n=e.targetNote||60,o=i.density??.5,r=[],s=Math.round(o*Ka);for(let a=0;a<Ka;a++)a*s%Ka<s?r.push({noteIndex:n,velocity:1,hold:!1}):r.push({noteIndex:null,velocity:0,hold:!1});return{seq_out:r}},compileConfig:i=>({targetNote:i.targetNote??60})});I(_w);class zs{constructor(e){this.state=e}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}nextRange(e,t){return Math.floor(this.next()*(t-e+1))+e}}const Mw=16,Iw=[{type:"number",label:"Min Note",path:"minNote"},{type:"number",label:"Max Note",path:"maxNote"},{type:"number",label:"Seed",path:"seed"}],Ow=Q({id:"nicepattern.chaos_generator",version:"1.0.0",displayName:"Chaos Generator",metadata:{category:"NicePattern",keywords:["chaos","random","generator","sequence","stochastic"],description:"Generates a random sequence of notes."},config:{minNote:w,maxNote:w,seed:w},inputs:{density:{...w,defaultValue:.5}},outputs:{seq_out:Ze},ui:{inspector:{fields:Iw}},execute:(i,e,t)=>{const{minNote:n,maxNote:o,seed:r}=e,s=i.density??.5,a=new zs(r??12345),l=[];for(let c=0;c<Mw;c++)if(a.next()<s){const f=a.nextRange(n||60,o||60);l.push({noteIndex:f,velocity:a.next()*.5+.5,hold:!1})}else l.push({noteIndex:null,velocity:0,hold:!1});return{seq_out:l}},compileConfig:i=>({minNote:i.minNote??60,maxNote:i.maxNote??60,seed:i.seed??12345})});I(Ow);class Pr{constructor(e){this.config=e,this.output=0,this.lastActive=!1}update(e,t,n){let r=e.noteIndex!==null&&e.noteIndex!==void 0;if(r){let s=!1;this.lastActive?n&&!e.hold&&(this.onRelease(),s=!0):s=!0,s&&this.onTrigger(e.velocity,e.noteIndex)}else this.lastActive&&this.onRelease();this.process(r,e,t),this.lastActive=r}forceRelease(){this.onRelease(),this.lastActive=!1,this.output=0}getValue(){return this.output}}class Ew extends Pr{onTrigger(e,t){this.output=e}onRelease(){this.output=0}process(e){e&&this.output===0&&(this.output=1)}previewSequence(e,t){return e.map(n=>n.noteIndex!==null&&n.noteIndex!==void 0?n.velocity:0)}}class Pw extends Pr{constructor(e,t=.96){super(e),this.decayRate=.96,this.decayRate=t}onTrigger(e,t){this.output=e}onRelease(){this.output=0}process(e,t){e&&(this.output*=this.decayRate)}previewSequence(e,t){const n=[];let o=0,r=!1;for(const s of e){const a=s.noteIndex!==null&&s.noteIndex!==void 0;a&&!r?o=s.velocity:!a&&r&&(o=0),a&&(o*=this.decayRate),n.push(o),r=a}return n}}class Tw extends Pr{constructor(){super(...arguments),this.phase=0,this.duty=.5,this.freq=.2}onTrigger(e,t){this.duty=.5}onRelease(){}process(e,t,n){if(!e){this.output*=.85;return}this.duty*=.98,this.phase+=this.freq,this.phase>1&&(this.phase-=1),this.output=this.phase<this.duty?1:0}previewSequence(e,t){const n=[];let o=0,r=0,s=.5,a=!1;for(const l of e){const c=l.noteIndex!==null&&l.noteIndex!==void 0;c&&!a&&(s=.5),c?(s*=.98,r+=this.freq,r>1&&(r-=1),o=r<s?1:0):o*=.85,n.push(o),a=c}return n}}class Dw extends Pr{onTrigger(e,t){}onRelease(){this.output*=.85}process(e){e?this.output=Math.random():this.output*=.85}previewSequence(e,t){const n=[];let o=0,r=!1;const a=(l=>()=>{l|=0,l=l+1831565813|0;var c=Math.imul(l^l>>>15,1|l);return c=c+Math.imul(c^c>>>7,61|c)^c,((c^c>>>14)>>>0)/4294967296})(12345);for(const l of e){const c=l.noteIndex!==null&&l.noteIndex!==void 0;!c&&r&&(o*=.85),c?o=a():o*=.85,n.push(o),r=c}return n}}class Xa extends Pr{constructor(e,t,n){super(e),this.osc=null,this.gain=null,this.filter=null,this.ctx=t,this.frequency=n??440}get audioContext(){return this.ctx}set audioContext(e){this.ctx=e}safeParam(e,t,n){if(Number.isFinite(t)&&Number.isFinite(n))try{e.setValueAtTime(t,n)}catch{}}initVoice(e,t){if(!this.ctx||this.ctx.state==="suspended")return;this.cleanup(),this.osc=this.ctx.createOscillator(),this.gain=this.ctx.createGain(),this.filter=this.ctx.createBiquadFilter();const n=Number.isFinite(this.frequency)&&this.frequency>0?this.frequency:440;this.safeParam(this.osc.frequency,n,e),this.filter.type="lowpass";const o=800+t*2e3;this.safeParam(this.filter.frequency,o,e),this.safeParam(this.gain.gain,0,e);try{this.gain.gain.linearRampToValueAtTime(t,e+.005),this.gain.gain.setTargetAtTime(0,e+.005,.1)}catch{}this.osc.connect(this.filter),this.filter.connect(this.gain),this.gain.connect(this.ctx.destination),this.osc.start(e)}retirePreviousVoice(e){if(!this.osc||!this.gain||!this.filter)return;const t=this.osc,n=this.gain,o=this.filter;this.osc=null,this.gain=null,this.filter=null;try{try{n.gain.cancelAndHoldAtTime(e)}catch{n.gain.cancelScheduledValues(e),this.safeParam(n.gain,n.gain.value,e)}n.gain.linearRampToValueAtTime(0,e+.005);const s=e+.005+.01;t.stop(s),t.onended=()=>{t.disconnect(),o.disconnect(),n.disconnect(),t.dispose?.(),o.dispose?.(),n.dispose?.()}}catch{t.disconnect(),o.disconnect(),n.disconnect()}}cleanup(){this.retirePreviousVoice(this.ctx?.currentTime??0)}onTrigger(e,t){if(this.ctx?.state!=="suspended"){if(t!=null){const n=440*Math.pow(2,(t-69)/12);Number.isFinite(n)&&(this.frequency=n)}this.initVoice(this.ctx?.currentTime??0,e)}}onRelease(){if(this.ctx?.state!=="suspended"&&this.gain){const e=this.ctx?.currentTime??0;try{this.gain.gain.cancelAndHoldAtTime(e)}catch{this.gain.gain.cancelScheduledValues(e),this.safeParam(this.gain.gain,this.gain.gain.value,e)}try{this.gain.gain.linearRampToValueAtTime(0,e+.005)}catch{}if(this.osc)try{this.osc.stop(e+.01)}catch{}}}process(e,t){e&&t.hold&&this.osc}previewSequence(e,t){const n=[];let o=!1;for(const r of e){const s=r.noteIndex!==null&&r.noteIndex!==void 0;s&&!o?n.push(r.velocity):n.push(0),o=s}return n}}function va(i,e,t){return Q({id:i,version:"1.0.0",displayName:e,metadata:{category:"NicePattern",keywords:["layer","effect","modifier"],description:`Layer node: ${e}`},config:{},inputs:{midi_in:{type:J,description:"Input MIDI stream",allowMultiConnection:!0},prev_layer:{type:Fs,description:"Previous layer output"}},outputs:{out:Fs},autoBroadcast:{midi_in:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:[]}},isRealtime:()=>!0,createState:(n,o)=>({layer:new t({}),lastActive:!1,activeVelocity:0,activeNote:null}),execute:(n,o,r,s)=>{const a=s.layer,l=n.midi_in||[];for(const d of l)d.type==="note_on"?(s.lastActive=!0,s.activeVelocity=d.velocity,s.activeNote=d.note):d.type==="note_off"&&s.activeNote===d.note&&(s.lastActive=!1,s.activeNote=null);const c={noteIndex:s.lastActive?s.activeNote??60:null,velocity:s.activeVelocity,hold:!1},f=l.some(d=>d.type==="note_on");return a.update(c,r.clock.dt,f),{out:a.getValue()}},compileConfig:n=>({})})}const Lw=va("nicepattern.gate_layer","Gate Layer",Ew),Rw=va("nicepattern.exp_layer","Exponential Layer",Pw),Nw=va("nicepattern.pwm_layer","PWM Layer",Tw),$w=va("nicepattern.noise_layer","Noise Layer",Dw);I(Lw);I(Rw);I(Nw);I($w);const Bw=Q({id:"nicepattern.tone_synth_layer",version:"1.0.0",displayName:"Tone Synth Layer",metadata:{category:"NicePattern",keywords:["synth","audio","sound","tone"],description:"Simple synthesizer layer using Tone.js."},config:{},inputs:{midi_in:{type:J,description:"Input MIDI stream",allowMultiConnection:!0},prev_layer:{type:Fs,description:"Previous layer output"}},outputs:{out:Fs},autoBroadcast:{midi_in:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:[]}},isRealtime:()=>!0,createState:(i,e)=>({layer:new Xa({}),lastActive:!1,lastActiveNote:null,activeVelocity:0,contextId:""}),execute:(i,e,t,n)=>{const o=t.audio?.context;n.layer||(n.layer=new Xa({})),o&&n.contextId!==o.contextId&&(n.layer=new Xa({}),n.contextId=o.contextId);const r=n.layer,s=i.midi_in||[];let a=!1;for(const f of s)f.type==="note_on"?(n.lastActive=!0,n.lastActiveNote=f.note,n.activeVelocity=f.velocity,a=!0):f.type==="note_off"&&n.lastActiveNote===f.note&&(n.lastActive=!1,n.lastActiveNote=null);const l={noteIndex:n.lastActive?n.lastActiveNote:null,velocity:n.activeVelocity,hold:!1};return r.audioContext||(t.audio?.context?r.audioContext=t.audio.context:typeof window<"u"&&(r.audioContext=new(window.AudioContext||window.webkitAudioContext))),r.update(l,t.clock.dt,a),{out:r.getValue()}},compileConfig:i=>({})});I(Bw);function Sp(i){if(i===1)return[[0]];const e=Sp(i/2),t=[];for(let n=0;n<e.length;n++)t.push([...e[n],...e[n]]);for(let n=0;n<e.length;n++)t.push([...e[n],...e[n].map(o=>1-o)]);return t}function Oh(i){let e=0;for(let t=0;t<i.length-1;t++)i[t]!==i[t+1]&&e++;return e}function Vw(i,e){const t=Sp(8).sort((a,l)=>Oh(a)-Oh(l));t[0]=[1,1,1,1,1,1,1,1];const n=[0,1,2,3,4,5,6,7],o=new zs(e);for(let a=n.length-1;a>0;a--){const l=o.nextRange(0,a);[n[a],n[l]]=[n[l],n[a]]}const r=Math.max(2,Math.min(8,i));return t.slice(0,r).map(a=>{const l=new Array(8);for(let c=0;c<8;c++)l[c]=a[n[c]];return l})}const Fw=[{type:"number",label:"Seed",path:"seed",step:1}],zw=Q({id:"nicepattern.orthomod",version:"1.0.0",displayName:"Orthomod",metadata:{category:"NicePattern",keywords:["envelope","modulation","orthogonal","hadamard"],description:"Orthogonal code-based envelope generator."},config:{seed:w},inputs:{midi_in:{type:J,description:"Trigger Input",allowMultiConnection:!0},decay:{type:w,defaultValue:1.2,description:"Decay Time (s)",range:[0,4],step:.01},curve:{type:w,defaultValue:1.5,description:"Response Curve",range:[.1,4],step:.1},relcurve:{type:w,defaultValue:12,description:"Release Curve",range:[.1,20],step:.1},resolution:{type:w,defaultValue:8,range:[2,8],step:1,description:"Codebook Size"},manual_phase:{type:w,defaultValue:-1,description:"Manual Phase Override (0-1)",suppressInputEditor:!0}},outputs:{env:{type:w,description:"Envelope Output (0-1)"},vec:{type:of,description:"Channel Values [c1, c2, c3, c4]"},ch1:{type:w,description:"Channel 1"},ch2:{type:w,description:"Channel 2"},ch3:{type:w,description:"Channel 3"},ch4:{type:w,description:"Channel 4"}},autoBroadcast:{midi_in:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:Fw}},isRealtime:()=>!0,createState:()=>({linearEnv:0,gateOpen:!1,active:!1,codes:[],lastSeed:-1,lastResolution:-1,currentEffectiveCurve:1.5,phase:0}),execute:(i,e,t,n)=>{const o=t.clock.dt;n.phase+=o;const r=n.phase,s=i.decay,a=typeof s=="number"&&Number.isFinite(s)?Math.max(.001,s):1.2,l=i.curve,c=typeof l=="number"&&Number.isFinite(l)?Math.max(.001,l):1.5,f=i.relcurve,h=typeof f=="number"&&Number.isFinite(f)?Math.max(.1,f):12,d=i.resolution,u=typeof d=="number"&&Number.isFinite(d)?Math.floor(Math.max(2,Math.min(8,d))):8,p=e.seed??12345,g=i.manual_phase,m=typeof g=="number"&&Number.isFinite(g)?g:-1;(p!==n.lastSeed||u!==n.lastResolution)&&(n.codes=Vw(u,p),n.lastSeed=p,n.lastResolution=u);const b=(i.midi_in||[]).flat();for(const H of b)H.type==="note_on"?(n.linearEnv=1,n.gateOpen=!0,n.active=!0):H.type==="note_off"&&(n.gateOpen=!1);let y=0;m>=0?(n.linearEnv=Math.max(0,Math.min(1,m)),n.active=!0,n.currentEffectiveCurve=1):(n.active&&(n.linearEnv-=o/Math.max(.01,a),n.linearEnv<=0&&(n.linearEnv=0,n.active=!1)),!n.gateOpen&&n.active?n.currentEffectiveCurve=h:n.currentEffectiveCurve=c);const x=Math.max(0,n.linearEnv),v=n.currentEffectiveCurve;y=Math.pow(x,v),Number.isNaN(y)&&(y=0);let C=1-y;C=Math.max(0,Math.min(.999,C));const S=n.codes.length,k=Math.floor(C*S),_=n.codes[k]||n.codes[0],M=15,T=r*M%1>.5?1:0,P=Math.abs(Math.sin(r*M*Math.PI*2)),O=[0,0,0,0],z=[0,0,0,0];if(n.active)for(let H=0;H<4;H++){const ge=_[H*2]||0,Pe=_[H*2+1]||0;let ke=0;ge===0&&Pe===0?ke=0:ge===1&&Pe===1?ke=1:ge===1&&Pe===0?ke=T:ge===0&&Pe===1&&(ke=P),z[H]=ke,O[H]=ke*y,Number.isNaN(O[H])&&(O[H]=0)}const V=H=>Number.isFinite(H)?H:0;return{outputs:{env:V(y),vec:O.map(V),ch1:V(O[0]),ch2:V(O[1]),ch3:V(O[2]),ch4:V(O[3])},ui:{codes:n.codes,env:V(y),vec:O.map(V),rawVec:n.active?z.map(V):[0,0,0,0],activeCodeIndex:k,gate:n.gateOpen?1:0}}},compileConfig:i=>({seed:i?.seed??12345})});I(zw);const jw=()=>({initialized:!1,contextId:"",masterGain:null,voices:[],lastRoot:-1}),Hw=Q({id:"nicepattern.tone4",version:"1.0.0",displayName:"Tone 4",metadata:{category:"NicePattern",keywords:["synth","additive","oscillator","audio"],description:"4-voice additive synth driven by vector input."},inputs:{vec:{type:of,description:"Modulation Vector [c1, c2, c3, c4]"},root:{type:w,defaultValue:60,description:"Root Note (MIDI)",range:[0,127]},gain:{type:w,defaultValue:.5,description:"Master Volume"}},outputs:{},isRealtime:()=>!0,createState:jw,execute:(i,e,t,n)=>{const o=t.audio?.context;if(!o||o.state==="suspended")return{};const r=o.currentTime;if(!n.initialized||n.contextId!==o.contextId){n.masterGain=o.createGain(),n?.masterGain?.connect(o.destination);const d=[1,1.5,2,3],u=["square","sawtooth","triangle","sine"];n.voices=d.map((p,g)=>{const m=o.createOscillator(),b=o.createGain();return m.type=u[g],m.connect(b),b.connect(n.masterGain),m.start(r),b.gain.setValueAtTime(0,r),{osc:m,gain:b,freqRatio:p,wave:u[g]}}),n.initialized=!0,n.contextId=o.contextId,n.lastRoot=-1}const s=Math.max(0,Math.min(1,i.gain??.5));n.masterGain&&n.masterGain.gain.setTargetAtTime(s,r,.05);const a=i.root,l=typeof a=="number"&&Number.isFinite(a)?Math.floor(Math.max(0,Math.min(127,a))):69,c=440*Math.pow(2,(l-69)/12);Math.abs(c-n.lastRoot)>.01&&(n.voices.forEach(d=>{n.lastRoot===-1?d.osc.frequency.setValueAtTime(c*d.freqRatio,r):d.osc.frequency.setTargetAtTime(c*d.freqRatio,r,.05)}),n.lastRoot=c);const f=i.vec,h=Array.isArray(f)&&f.length===4?f:[0,0,0,0];return n.voices.forEach((d,u)=>{const p=Math.max(0,Math.min(1,h[u]??0));d.gain.gain.setTargetAtTime(p,r,.02)}),{}}});I(Hw);const We={gravity:800,magnetEpsilon:50,physicsRate:120,solverSteps:16,sphereCount:16,magnetRange:800,height:600};class Eh{constructor(e,t,n,o,r,s){this.id=e,this.radius=6+s.next()*8,this.mass=this.radius,this.restLength=20+Math.pow(s.next(),2)*150;const a=t*.1,l=t-a*2;this.x=a+l/(r-1)*o,this.y=n-this.restLength,this.vx=0,this.vy=0,this.isLatched=!1,this.tensionRatio=0,this.currentSpringForce=0,this.currentMagForce=0}update(e,t,n,o,r){this.currentMagForce=0,this.currentSpringForce=0,this.tensionRatio=0;const a=(t-this.restLength-this.y)*r.springK,c=r.gravity*this.mass+a;this.currentSpringForce=Math.max(0,c);const f=u=>{if(u>=We.magnetRange)return 0;const p=We.magnetEpsilon/(u*u+We.magnetEpsilon);return r.magnetStrength*p},h=f(0);if(o){const u=this.y-this.radius-n;if(this.isLatched||u<=2)if(h>c){this.isLatched=!0,this.y=n+this.radius,this.vy=0,this.currentMagForce=h,this.tensionRatio=Math.max(0,Math.min(1,c/h));return}else this.isLatched=!1}else this.isLatched=!1;let d=c;if(o&&!this.isLatched){const u=Math.max(0,this.y-this.radius-n),p=-f(u);this.currentMagForce=Math.abs(p),d+=p}this.vy+=d/this.mass*e,this.vy*=r.damping,this.y+=this.vy*e,this.y+this.radius>t&&(this.y=t-this.radius,this.vy*=-.5),this.y-this.radius<n&&(this.y=n+this.radius,o?this.vy<0&&(this.vy=0):this.vy*=-.6)}}const qw=[{type:"number",label:"Seed",path:"seed",step:1,min:0,max:999999}],Ww=Q({id:"nicepattern.magneto",version:"1.0.0",displayName:"Magneto",metadata:{category:"NicePattern",keywords:["envelope","physics","magnet","modulator"],description:"Physics-based magnetic envelope generator."},config:{seed:{...w,defaultValue:1337}},inputs:{midi_in:{type:J,description:"Trigger Input",allowMultiConnection:!0},attack:{type:w,defaultValue:.2,range:[.01,2],step:.01,description:"Attack Time (s)"},decay:{type:w,defaultValue:.25,range:[.01,2],step:.01,description:"Decay Time (s)"},sustain:{type:w,defaultValue:.6,range:[0,1],step:.01,description:"Sustain Level (0-1)"},release:{type:w,defaultValue:.3,range:[.01,5],step:.01,description:"Release Time (s)"},peak:{type:w,defaultValue:.9,range:[.1,1],step:.01,description:"Peak Level (0-1, inverted)"},mag_flux:{type:w,defaultValue:2e6,range:[1e5,4e6],step:1e4,description:"Magnet Strength"},spring_k:{type:w,defaultValue:25e3,range:[1e3,5e4],step:100,description:"Spring Stiffness"},damping:{type:w,defaultValue:.999,range:[.9,1],step:.001,description:"Damping Factor"}},outputs:{env:{type:w,description:"Envelope Output (Tension)"},vec:of,ch1:{type:w,description:"Channel 1 (Tension)"},ch2:{type:w,description:"Channel 2 (Extension)"},ch3:{type:w,description:"Channel 3 (Spring Force)"},ch4:{type:w,description:"Channel 4 (Mag Force)"}},autoBroadcast:{midi_in:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:qw}},isRealtime:()=>!0,createState:()=>{const i=[],t=We.height,n=new zs(1337);for(let o=0;o<We.sphereCount;o++)i.push(new Eh(o,600,t,o,We.sphereCount,n));return{spheres:i,plateY:40,phase:"IDLE",sustainProgress:0,accumulator:0,lastGate:!1,isTouchingSim:!1,touchY:0}},onMessage:(i,e)=>{e.type==="manual_interaction"&&(i.isTouchingSim=e.active,typeof e.y=="number"&&(i.touchY=e.y))},execute:(i,e,t,n)=>{const o=t.clock.dt,r=i.midi_in||[];let s=n.lastGate;for(const te of r)te.type==="note_on"?s=!0:te.type==="note_off"&&(s=!1);const a=Math.max(.005,i.attack??.2),l=Math.max(.005,i.decay??.25),c=i.sustain??.6,f=Math.max(.005,i.release??.3),h=i.peak??.9,d=e.seed??1337,u=i.mag_flux??2e6,p=i.spring_k??25e3,g=i.damping??.999;if(n.currentSeed!==d||n.spheres.length===0){n.currentSeed=d;const te=new zs(d);n.spheres=[];const D=600,X=We.height;for(let me=0;me<We.sphereCount;me++)n.spheres.push(new Eh(me,D,X,me,We.sphereCount,te))}const m=We.height,b=m*.95,y=m*.1,x=40,v=y+h*(b-y),C=y+c*(b-y),S=Math.min(1,.05/Math.max(.001,a)),k=Math.min(1,.02/Math.max(.001,l)),_=Math.min(1,.02/Math.max(.001,f));s&&!n.lastGate?(n.phase="ATTACK",n.sustainProgress=0):!s&&n.lastGate&&(n.phase="RELEASE",n.sustainProgress=0),n.lastGate=s,n.accumulator+=o;const M=1/We.physicsRate;let T=!1,P=0;for(;n.accumulator>=M&&P<5;){n.accumulator-=M,P++;let te=x,D=_;n.isTouchingSim?(n.phase="MANUAL",T=!0,te=n.touchY,te=Math.max(x,Math.min(b,te)),D=S,n.sustainProgress=0):s?((n.phase==="IDLE"||n.phase==="RELEASE"||n.phase==="MANUAL")&&(n.phase==="MANUAL"?n.phase="ATTACK":(n.phase="ATTACK",n.sustainProgress=0)),n.phase==="ATTACK"?(te=v,D=S,Math.abs(n.plateY-v)<10&&(n.phase="DECAY")):n.phase==="DECAY"?(te=C,D=k,Math.abs(n.plateY-C)<5&&(n.phase="SUSTAIN")):n.phase==="SUSTAIN"&&(te=C,D=.1,n.sustainProgress+=(1-n.sustainProgress)*2*M),T=!0):(n.phase="RELEASE",te=x,D=_,Math.abs(n.plateY-x)<15?(T=!1,n.phase="IDLE"):T=!0);const X=te-n.plateY;n.plateY+=X*D;const me=M/We.solverSteps,Ce={gravity:We.gravity,springK:p,magnetStrength:u,damping:g};for(let Ae=0;Ae<We.solverSteps;Ae++)n.spheres.forEach(Ke=>{Ke.update(me,m,n.plateY,T,Ce)})}n.accumulator>M&&(n.accumulator=0);let O=0,z=0,V=0,H=0,ge=0;n.spheres.forEach(te=>{te.isLatched&&(ge++,O+=te.tensionRatio);const D=Math.max(0,m-te.restLength-te.y);z+=D,V+=te.currentSpringForce,H+=te.currentMagForce});const Pe=ge>0?O/ge:0,ke=Math.min(1,z/(m*We.sphereCount*.4)),At=We.sphereCount*p*m*.3,fi=We.sphereCount*u,He=Math.min(1,V/At),ce=Math.min(1,H/fi),it=[Pe,ke,He,ce],ht={plateY:n.plateY,phase:n.phase,sustainProgress:n.sustainProgress,spheres:n.spheres.map(te=>({x:te.x,y:te.y,r:te.radius,l:te.isLatched,t:te.tensionRatio})),adsr:{attack:a,decay:l,sustain:c,release:f,peak:h},seed:d};return{outputs:{env:Pe,vec:it,ch1:Pe,ch2:ke,ch3:He,ch4:ce},ui:ht}},compileConfig:i=>({seed:i?.seed??1337})});I(Ww);const Ja=16,Uw=Q({id:"seq.tomidi",version:"1.0.0",displayName:"To MIDI",metadata:{category:"Sequence",keywords:["pattern","sequencer","combiner","event","midi"],description:"Converts sequence(s) into a MIDI stream."},config:{},inputs:{seq_in:{type:Ze,description:"Input sequence(s)",allowMultiConnection:!0}},outputs:{midi_out:J},autoBroadcast:!0,reshape:"none",isRealtime:()=>!0,createState:()=>({sequenceStates:new Map}),execute:(i,e,t,n)=>{let r=i.seq_in||[];r.length===1&&Array.isArray(r[0])&&r[0].length>0&&Array.isArray(r[0][0])&&(r=r[0]);const s=[],c=(Math.floor(t.clock.beat*4)%Ja+Ja)%Ja,f=new Set;r.forEach((h,d)=>f.add(d)),n.sequenceStates.forEach((h,d)=>f.add(d));for(const h of f){const d=r[h];n.sequenceStates.has(h)||n.sequenceStates.set(h,{lastStepIndex:-1,lastNoteIndex:null,lastHold:!1,activeNotes:new Map});const u=n.sequenceStates.get(h);if(!d&&u.lastNoteIndex===null){n.sequenceStates.delete(h);continue}let p={noteIndex:null,velocity:0,hold:!1};if(d&&d[c]&&(p=d[c]),c!==u.lastStepIndex||!d||p.noteIndex!==u.lastNoteIndex){const g=u.lastNoteIndex,m=u.lastHold,b=p.noteIndex!==null&&p.noteIndex!==void 0,y=b&&p.noteIndex===g,x=g!==null&&(!y||!m),v=b&&(!y||!m);x&&g!==null&&(s.push({type:"note_off",note:g,velocity:0,channel:1,deviceId:"tomidi",time:0}),u.activeNotes.delete(g),u.lastNoteIndex=null,u.lastHold=!1),v&&p.noteIndex!==null?(s.push({type:"note_on",note:p.noteIndex,velocity:p.velocity,channel:1,deviceId:"tomidi",time:0}),u.activeNotes.set(p.noteIndex,p.velocity),u.lastNoteIndex=p.noteIndex,u.lastHold=p.hold):y&&m&&(u.lastHold=p.hold),u.lastStepIndex=c}}return{midi_out:s}}});I(Uw);const Gw=Q({id:"seq.sequencer",version:"1.0.0",displayName:"Sequencer",metadata:{category:"Sequence",keywords:["sequencer","step","pattern"],description:"16-step sequencer."},config:{sequence:{kind:"array",size:16,element:{kind:"record",fields:{noteIndex:w,velocity:w,hold:{kind:"atomic",type:"boolean"}}}}},inputs:{},outputs:{seq_out:Ze},ui:{},compileConfig:i=>{const e=Array(16).fill({noteIndex:null,velocity:0,hold:!1});return{sequence:i?.values?.sequence??e}},createState:()=>({currentStepIndex:0}),isRealtime:()=>!1,execute:(i,e,t,n)=>{const o=Array(16).fill({noteIndex:null,velocity:0,hold:!1});return{outputs:{seq_out:e.sequence||o},ui:{currentStepIndex:n.currentStepIndex}}}});I(Gw);const Yw=Q({id:"seq.oneshot",version:"1.0.0",displayName:"One Shot",metadata:{category:"Sequence",keywords:["player","trigger","oneshot","envelope"],description:"Plays a sequence once upon trigger."},config:{},autoBroadcast:{seq_in:{combine:{reduce:"first"}},trigger:{combine:{reduce:"flatten"}}},reshape:"none",inputs:{seq_in:{type:Ze,description:"Input sequence"},trigger:{type:J,description:"Trigger",allowMultiConnection:!0},duration:{type:w,defaultValue:4,description:"Duration (s)"}},outputs:{midi_out:J},isRealtime:()=>!0,createState:()=>({isPlaying:!1,startTime:0,lastStepIndex:-1,lastNoteIndex:null,lastHold:!1,activeNotes:new Map}),execute:(i,e,t,n)=>{const o=i.trigger||[];let r=!1;for(const g of o)if(g&&g.type==="note_on"&&g.velocity>0){r=!0;break}const s=t.audio?.context?.currentTime??0;r&&(n.isPlaying=!0,n.startTime=s);const a=i.seq_in||[],l=[];if(!n.isPlaying||!a||a.length===0)return n.lastNoteIndex!==null&&(l.push({type:"note_off",note:n.lastNoteIndex,velocity:0,channel:1,time:0,deviceId:"oneshot"}),n.lastNoteIndex=null,n.lastHold=!1),n.activeNotes.size>0&&n.activeNotes.clear(),{midi_out:l};const c=Math.max(.001,i.duration??4),h=(s-n.startTime)/c;if(h>=1)return n.isPlaying=!1,n.lastNoteIndex!==null&&(l.push({type:"note_off",note:n.lastNoteIndex,velocity:0,channel:1,time:0,deviceId:"oneshot"}),n.lastNoteIndex=null,n.lastHold=!1),{midi_out:l};const d=a.length,u=Math.floor(h*d);let p={noteIndex:null,velocity:0,hold:!1};if(a[u]&&(p=a[u]),u!==n.lastStepIndex||p.noteIndex!==n.lastNoteIndex){const g=n.lastNoteIndex,m=n.lastHold,b=p.noteIndex!==null,y=b&&p.noteIndex===g,x=g!==null&&(!y||!m),v=b&&(!y||!m);x&&g!==null&&(l.push({type:"note_off",note:g,velocity:0,channel:1,time:0,deviceId:"oneshot"}),n.activeNotes.delete(g),n.lastNoteIndex=null,n.lastHold=!1),v&&p.noteIndex!==null?(l.push({type:"note_on",note:p.noteIndex,velocity:p.velocity,channel:1,time:0,deviceId:"oneshot"}),n.activeNotes.set(p.noteIndex,p.velocity),n.lastNoteIndex=p.noteIndex,n.lastHold=p.hold):y&&m&&(n.lastHold=p.hold),n.lastStepIndex=u}return{midi_out:l}}}),Kw=Q({id:"seq.scan",version:"1.0.0",displayName:"Scan Sequence",metadata:{category:"Sequence",keywords:["player","scan","scrub"],description:"Plays a sequence by scanning through positions."},config:{},autoBroadcast:{seq_in:{combine:{reduce:"first"}}},reshape:"none",inputs:{seq_in:{type:Ze,description:"Input sequence"},pos:{type:w,defaultValue:0,description:"Position (0-1)"}},outputs:{midi_out:J},isRealtime:()=>!0,createState:()=>({lastStepIndex:-1,lastNoteIndex:null,lastHold:!1,activeNotes:new Map}),execute:(i,e,t,n)=>{const o=i.seq_in||[],r=i.pos??0,s=[];if(!o||o.length===0||r>=1||r<0)return n.lastNoteIndex!==null&&(s.push({type:"note_off",note:n.lastNoteIndex,velocity:0,channel:1,time:0,deviceId:"scan"}),n.lastNoteIndex=null,n.lastHold=!1),{midi_out:s};const a=o.length,l=Math.floor(r*a);let c={noteIndex:null,velocity:0,hold:!1};if(o[l]&&(c=o[l]),l!==n.lastStepIndex||c.noteIndex!==n.lastNoteIndex){const f=n.lastNoteIndex,h=n.lastHold,d=c.noteIndex!==null,u=d&&c.noteIndex===f,p=f!==null&&(!u||!h),g=d&&(!u||!h);p&&f!==null&&(s.push({type:"note_off",note:f,velocity:0,channel:1,time:0,deviceId:"scan"}),n.lastNoteIndex=null,n.lastHold=!1),g&&c.noteIndex!==null?(s.push({type:"note_on",note:c.noteIndex,velocity:c.velocity,channel:1,time:0,deviceId:"scan"}),n.lastNoteIndex=c.noteIndex,n.lastHold=c.hold):u&&h&&(n.lastHold=c.hold),n.lastStepIndex=l}return{midi_out:s}}});I(Yw);I(Kw);const Xw=Q({id:"seq.crop",version:"1.0.0",displayName:"Crop Sequence",metadata:{category:"Sequence",keywords:["modifier","crop","slice"],description:"Mutes steps outside the specified range."},config:{mode:{kind:"atomic",type:"string",defaultValue:"start-end"}},autoBroadcast:{seq_in:{combine:{reduce:"first"}}},inputs:{seq_in:{type:Ze,description:"Input sequence"},start:{type:w,defaultValue:0},end:{type:w,defaultValue:1,optional:!0},length:{type:w,defaultValue:1,optional:!0}},outputs:{seq_out:Ze},ui:{inspector:{fields:[{type:"tab-bar",label:"Mode",path:"mode",options:[{label:"Start / End",value:"start-end"},{label:"Start / Length",value:"start-length"}]}]}},computeForwardPorts:(i,e)=>{const t=e.mode||"start-end",n={seq_in:Ze,start:{...w,defaultValue:0}};return t==="start-length"?n.length={...w,defaultValue:1}:n.end={...w,defaultValue:1},{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{seq_out:Ze}}}},shouldRecompileOnConfigChange:()=>!0,compileConfig:i=>({mode:i.mode||"start-end"}),execute:(i,e)=>{const t=i.seq_in||[],n=e.mode||"start-end",o=t.map(l=>({...l})),r=i.start??0;let s=1;if(n==="start-length"){const l=i.length??1;s=r+l}else s=i.end??1;s<r&&(s=r);const a=o.length;for(let l=0;l<a;l++){const c=l/a;(c<r||c>=s)&&(o[l].noteIndex=null,o[l].velocity=0,o[l].hold=!1)}return{seq_out:o}}}),Jw=Q({id:"seq.fill",version:"1.0.0",displayName:"Fill Sequence",metadata:{category:"Sequence",keywords:["generator","fill","range"],description:"Generates a sequence where steps inside the specified range are ON."},config:{mode:{kind:"atomic",type:"string",defaultValue:"start-length"},count:{...w,defaultValue:16}},inputs:{start:{type:w,defaultValue:0},end:{type:w,defaultValue:1,optional:!0},length:{type:w,defaultValue:.5,optional:!0}},outputs:{seq_out:Ze},ui:{inspector:{fields:[{type:"tab-bar",label:"Mode",path:"mode",options:[{label:"Start / End",value:"start-end"},{label:"Start / Length",value:"start-length"}],default:"start-length"},{type:"number",label:"Step Count",path:"count",min:1,max:128,step:1,default:16}]}},computeForwardPorts:(i,e)=>{const t=e.mode||"start-length",n={start:{...w,defaultValue:0}};return t==="start-length"?n.length={...w,defaultValue:.5}:n.end={...w,defaultValue:1},{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{seq_out:Ze}}}},shouldRecompileOnConfigChange:()=>!0,compileConfig:i=>({mode:i.mode||"start-length",count:i.count??16}),execute:(i,e)=>{const t=e.count??16,n=e.mode||"start-length",o=[];for(let s=0;s<t;s++)o.push({noteIndex:null,velocity:0,hold:!1});const r=i.start??0;if(n==="start-length"){const s=i.length??.5,a=Math.round(s*t),l=Math.floor(r*t);for(let c=0;c<a;c++){const f=l+c;f>=0&&f<t&&(o[f]={noteIndex:60,velocity:1,hold:!1})}}else{const s=i.end??1;let a=r,l=s;l<a&&(l=a);for(let c=0;c<t;c++){const f=c/t;f>=a&&f<l&&(o[c]={noteIndex:60,velocity:1,hold:!1})}}return{seq_out:o}}});I(Xw);I(Jw);const eo={noteIndex:null,velocity:0,hold:!1},po=i=>i.noteIndex!==null&&i.noteIndex!==void 0,wa=(i,e,t,n)=>Q({id:`seq.${i}`,version:"1.0.0",displayName:e,metadata:{category:"Sequence",keywords:["logic",i,"binary"],description:t},config:{},inputs:{inputs:{type:Ze,description:"Sequences",allowMultiConnection:!0}},outputs:{seq_out:Ze},execute:o=>{const r=o.inputs||[];if(r.length===0)return{seq_out:[]};let s=0;if(r.forEach(l=>s=Math.max(s,l.length)),s===0)return{seq_out:[]};const a=[];for(let l=0;l<s;l++){let c={...eo};const f=r[0];f.length>0?c={...f[l%f.length]}:c={...eo};for(let h=1;h<r.length;h++){const d=r[h],u=d.length>0?d[l%d.length]:eo;c=n(c,u)}a.push(c)}return{seq_out:a}}}),Qw=wa("xor","Sequence XOR","XORs multiple sequences.",(i,e)=>{const t=po(i),n=po(e);return t!==n?n?e:i:{...eo}}),Zw=wa("sub","Sequence Subtract","Subtracts subsequent sequences from the first.",(i,e)=>po(e)?{...eo}:i),e1=wa("and","Sequence AND","Output active only if both inputs active.",(i,e)=>po(i)&&po(e)?e:{...eo}),t1=wa("or","Sequence OR","Output active if any input active.",(i,e)=>po(e)?e:i),n1=Q({id:"seq.negate",version:"1.0.0",displayName:"Sequence Negate",metadata:{category:"Sequence",keywords:["logic","not","invert"],description:"Inverts sequence activity."},config:{},autoBroadcast:{seq_in:{combine:{reduce:"first"}}},inputs:{seq_in:{type:Ze}},outputs:{seq_out:Ze},execute:i=>({seq_out:(i.seq_in||[]).map(n=>{const o={...n};return o.noteIndex!==null?(o.noteIndex=null,o.velocity=0,o.hold=!1):(o.noteIndex=60,o.velocity=1,o.hold=!1),o})})});I(Qw);I(Zw);I(e1);I(t1);I(n1);const kp=Ie("math.add",{category:B.Math,keywords:["sum","plus"],description:"Adds a and b."},(i,e)=>i+e);I({version:"1.0.0",...kp,displayName:"Add",aliases:["plus","sum"],extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Sum"}}});const Cp=Ie("math.subtract",{category:B.Math,keywords:["minus","difference"],description:"Subtracts b from a."},(i,e)=>i-e);I({version:"1.0.0",...Cp,displayName:"Subtract",aliases:["minus","difference"],extendedInputs:{a:{type:w,description:"Minuend"},b:{type:w,description:"Subtrahend"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Ap=Ie("math.multiply",{category:B.Math,keywords:["times","product"],description:"Multiplies a and b."},(i,e)=>i*e);I({version:"1.0.0",...Ap,displayName:"Multiply",aliases:["times","product"],extendedInputs:{a:{type:w,description:"Factor A"},b:{type:w,description:"Factor B"}},extendedOutputs:{result:{type:w,description:"Product"}}});const _p=Ie("math.divide",{category:B.Math,keywords:["div","quotient"],description:"Divides a by b."},(i,e)=>i/e);I({version:"1.0.0",..._p,displayName:"Divide",aliases:["div","quotient"],extendedInputs:{a:{type:w,description:"Dividend"},b:{type:w,description:"Divisor"}},extendedOutputs:{result:{type:w,description:"Quotient"}}});const Mp=Ie("math.pow",{category:B.Math,keywords:["power","exponent"],description:"Raises a to the power of b."},(i,e)=>Math.pow(i,e));I({version:"1.0.0",...Mp,displayName:"Power",extendedInputs:{a:{type:w,description:"Base"},b:{type:w,description:"Exponent"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Ip=Ie("math.min",{category:B.Math,keywords:["minimum","smallest"],description:"Returns the smaller of a and b."},(i,e)=>Math.min(i,e));I({version:"1.0.0",...Ip,displayName:"Min",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Minimum"}}});const Op=Ie("math.max",{category:B.Math,keywords:["maximum","largest"],description:"Returns the larger of a and b."},(i,e)=>Math.max(i,e));I({version:"1.0.0",...Op,displayName:"Max",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Maximum"}}});const Ep=Be({id:"math.fmod",metadata:{category:B.Math,keywords:["modulo","remainder"],description:"Floating point modulo operation."},inputs:{dividend:w,divisor:w},outputs:{div:w,mod:w},autoBroadcast:!0,execute:(i,e,t)=>{const{dividend:n,divisor:o}=i,r=Math.floor(n/o),s=n%o;return{div:r,mod:s}}});I({version:"1.0.0",...Ep,displayName:"FMod",extendedInputs:{dividend:{type:w,description:"Dividend"},divisor:{type:w,description:"Divisor",defaultValue:1,range:[0,10]}},extendedOutputs:{div:{type:w,description:"The integer division result."},mod:{type:w,description:"The remainder."}}});const Pp=Ie("logic.and",{category:B.Logic,keywords:["boolean","&&"],description:"Logical AND (1 if both non-zero, else 0)."},(i,e)=>i!==0&&e!==0?1:0);I({version:"1.0.0",...Pp,displayName:"AND",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Tp=Ie("logic.or",{category:B.Logic,keywords:["boolean","||"],description:"Logical OR (1 if either non-zero, else 0)."},(i,e)=>i!==0||e!==0?1:0);I({version:"1.0.0",...Tp,displayName:"OR",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Dp=Ie("logic.xor",{category:B.Logic,keywords:["boolean","^"],description:"Logical XOR (1 if different truthiness, else 0)."},(i,e)=>i!==0!=(e!==0)?1:0);I({version:"1.0.0",...Dp,displayName:"XOR",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Lp=Ie("logic.equals",{category:B.Logic,keywords:["==","equality"],description:"Returns 1 if a equals b, else 0."},(i,e)=>i===e?1:0);I({version:"1.0.0",...Lp,displayName:"Equals",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Rp=Ie("logic.greater_than",{category:B.Logic,keywords:[">","gt"],description:"Returns 1 if a > b, else 0."},(i,e)=>i>e?1:0);I({version:"1.0.0",...Rp,displayName:"Greater Than",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Np=Ie("logic.less_than",{category:B.Logic,keywords:["<","lt"],description:"Returns 1 if a < b, else 0."},(i,e)=>i<e?1:0);I({version:"1.0.0",...Np,displayName:"Less Than",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const i1=Object.freeze(Object.defineProperty({__proto__:null,primitive_add:kp,primitive_and:Pp,primitive_divide:_p,primitive_equals:Lp,primitive_fmod:Ep,primitive_greater_than:Rp,primitive_less_than:Np,primitive_max:Op,primitive_min:Ip,primitive_multiply:Ap,primitive_or:Tp,primitive_pow:Mp,primitive_subtract:Cp,primitive_xor:Dp},Symbol.toStringTag,{value:"Module"})),$p=Ie("math.abs",{category:B.Math,keywords:["absolute","magnitude"],description:"Returns the absolute value of a."},i=>Math.abs(i),"unary");I({version:"1.0.0",...$p,displayName:"Abs",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Absolute Value"}}});const Bp=Ie("math.negate",{category:B.Math,keywords:["negative","invert"],description:"Negates a."},i=>-i,"unary");I({version:"1.0.0",...Bp,displayName:"Negate",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Negated Value"}}});const Vp=Ie("math.ceil",{category:B.Math,keywords:["ceiling","round up"],description:"Rounds a up to the nearest integer."},i=>Math.ceil(i),"unary");I({version:"1.0.0",...Vp,displayName:"Ceil",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Ceiling"}}});const Fp=Ie("math.floor",{category:B.Math,keywords:["floor","round down"],description:"Rounds a down to the nearest integer."},i=>Math.floor(i),"unary");I({version:"1.0.0",...Fp,displayName:"Floor",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Floor"}}});const zp=Ie("math.round",{category:B.Math,keywords:["round","nearest"],description:"Rounds a to the nearest integer."},i=>Math.round(i),"unary");I({version:"1.0.0",...zp,displayName:"Round",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Rounded Value"}}});const jp=Ie("math.sin",{category:B.Math,keywords:["sine"],description:"Returns the sine of a (radians)."},i=>Math.sin(i),"unary");I({version:"1.0.0",...jp,displayName:"Sin",extendedInputs:{a:{type:w,description:"Value (Radians)"}},extendedOutputs:{result:{type:w,description:"Sine"}}});const Hp=Ie("math.cos",{category:B.Math,keywords:["cosine"],description:"Returns the cosine of a (radians)."},i=>Math.cos(i),"unary");I({version:"1.0.0",...Hp,displayName:"Cos",extendedInputs:{a:{type:w,description:"Value (Radians)"}},extendedOutputs:{result:{type:w,description:"Cosine"}}});const qp=Ie("math.tan",{category:B.Math,keywords:["tangent"],description:"Returns the tangent of a (radians)."},i=>Math.tan(i),"unary");I({version:"1.0.0",...qp,displayName:"Tan",extendedInputs:{a:{type:w,description:"Value (Radians)"}},extendedOutputs:{result:{type:w,description:"Tangent"}}});const Wp=Ie("math.sqrt",{category:B.Math,keywords:["square root"],description:"Returns the square root of a."},i=>Math.sqrt(i),"unary");I({version:"1.0.0",...Wp,displayName:"Sqrt",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Square Root"}}});const Up=Ie("logic.not",{category:B.Logic,keywords:["!","invert"],description:"Logical NOT (1 if zero, 0 if non-zero)."},i=>i===0?1:0,"unary");I({version:"1.0.0",...Up,displayName:"NOT",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Result"}}});const o1=Object.freeze(Object.defineProperty({__proto__:null,primitive_abs:$p,primitive_ceil:Vp,primitive_cos:Hp,primitive_floor:Fp,primitive_negate:Bp,primitive_not:Up,primitive_round:zp,primitive_sin:jp,primitive_sqrt:Wp,primitive_tan:qp},Symbol.toStringTag,{value:"Module"})),St=(i,e,t,n=B.Math)=>{const o=Be({id:i,metadata:{category:n,description:`Apply ${i.split(".").pop()} to all inputs.`},inputs:{values:{kind:"array",element:xe,size:"dynamic",allowMultiConnection:!0}},outputs:{result:w},computeForwardPorts:(r,s,a)=>{const l=r.fields.values;let c=w;if(l&&l.kind==="array"){const f=l.element;(f.kind==="array"||f.kind==="record")&&(c=f)}return{inputs:{kind:"record",fields:{values:l}},outputs:{kind:"record",fields:{result:c}}}},execute:r=>{const s=r.values;if(!s||s.length===0)return{result:0};const a=s[0],l=Array.isArray(a);let c=!1,f=[];if(!l&&typeof a=="object"&&a!==null&&typeof a.x=="number"&&typeof a.y=="number"&&(c=!0,f=["x","y"],typeof a.z=="number"&&f.push("z"),typeof a.w=="number"&&f.push("w")),l||c||typeof a=="number"){const h=l?a.length:c?f.length:1,d=new Array(h);for(let u=0;u<h;u++){let p=l?a[u]:c?a[f[u]]:a;for(let g=1;g<s.length;g++){const m=s[g];let b;if(Array.isArray(m))b=m[u]??0;else if(typeof m=="object"&&m!==null&&"x"in m){const y=f[u];b=m[y],b===void 0&&(b=0)}else b=m;p=t(p,b)}d[u]=p}if(c){const u={};return f.forEach((p,g)=>u[p]=d[g]),{result:u}}else if(!l)return{result:d[0]};return{result:d}}else return{result:0}}});return I({version:"1.0.0",...o,displayName:e,extendedInputs:{values:{type:{kind:"array",element:w,size:"dynamic"},description:"Values to process.",suppressInputEditor:!0,suppressLabel:!0,allowMultiConnection:!0}},extendedOutputs:{result:{type:w,description:"Result"}}}),o},r1=St("math.all.add","Sum All",(i,e)=>i+e),s1=St("math.all.subtract","Subtract All",(i,e)=>i-e),a1=St("math.all.multiply","Multiply All",(i,e)=>i*e),l1=St("math.all.divide","Divide All",(i,e)=>i/e),c1=St("math.all.pow","Power All",(i,e)=>Math.pow(i,e)),f1=St("math.all.min","Min All",(i,e)=>Math.min(i,e)),h1=St("math.all.max","Max All",(i,e)=>Math.max(i,e)),d1=St("logic.all.and","AND All",(i,e)=>i&&e?1:0,B.Logic),u1=St("logic.all.or","OR All",(i,e)=>i||e?1:0,B.Logic),p1=St("logic.all.xor","XOR All",(i,e)=>!!i!=!!e?1:0,B.Logic),g1=St("logic.all.equals","Equals All",(i,e)=>i===e?1:0,B.Logic),m1=St("logic.all.greater_than","Greater Than All",(i,e)=>i>e?1:0,B.Logic),b1=St("logic.all.less_than","Less Than All",(i,e)=>i<e?1:0,B.Logic),y1=Object.freeze(Object.defineProperty({__proto__:null,primitive_all_add:r1,primitive_all_and:d1,primitive_all_divide:l1,primitive_all_equals:g1,primitive_all_greater_than:m1,primitive_all_less_than:b1,primitive_all_max:h1,primitive_all_min:f1,primitive_all_multiply:a1,primitive_all_or:u1,primitive_all_pow:c1,primitive_all_subtract:s1,primitive_all_xor:p1},Symbol.toStringTag,{value:"Module"})),Gp=Be({id:"math.pi",metadata:{category:B.Math,keywords:["pi","constant"],description:"Returns the value of Pi."},inputs:{},outputs:{result:w},execute:()=>({result:Math.PI})});I({version:"1.0.0",...Gp,displayName:"Pi",extendedOutputs:{result:{type:w,description:"Pi"}}});const Yp=Be({id:"math.e",metadata:{category:B.Math,keywords:["e","euler","constant"],description:"Returns the value of Euler's number."},inputs:{},outputs:{result:w},execute:()=>({result:Math.E})});I({version:"1.0.0",...Yp,displayName:"E",extendedOutputs:{result:{type:w,description:"Euler's Number"}}});const v1=Object.freeze(Object.defineProperty({__proto__:null,primitive_e:Yp,primitive_pi:Gp},Symbol.toStringTag,{value:"Module"})),Kp=Be({id:"math.clamp",metadata:{category:B.Math,keywords:["limit","range"],description:"Clamps a value between a minimum and maximum."},inputs:{value:w,min:{...w,defaultValue:0},max:{...w,defaultValue:1}},outputs:{result:w},autoBroadcast:{value:{combine:"collect"},min:{combine:"collect"},max:{combine:"collect"}},reshape:"vector",execute:i=>{const{value:e,min:t,max:n}=i;return{result:Math.max(t,Math.min(e,n))}}});I({version:"1.0.0",...Kp,displayName:"Clamp",extendedInputs:{value:{type:w,description:"Value to clamp."},min:{type:w,description:"Minimum value.",defaultValue:0,range:[0,1]},max:{type:w,description:"Maximum value.",defaultValue:1,range:[0,1]}},extendedOutputs:{value:{type:w,description:"The clamped value."}}});const Xp=Be({id:"math.lerp",metadata:{category:B.Math,keywords:["lerp","mix","interpolate"],description:"Linear interpolation between a and b."},inputs:{a:w,b:w,t:w},config:{clamp:{kind:"atomic",type:"boolean",optional:!0}},outputs:{result:w},autoBroadcast:!0,execute:(i,e)=>{const{a:t,b:n,t:o}=i,r=e.clamp!==!1,s=t+(n-t)*o;return{result:r?Math.max(Math.min(s,Math.max(t,n)),Math.min(t,n)):s}}});I({version:"1.0.0",...Xp,displayName:"Lerp",extendedInputs:{a:{type:w,description:"Start Value"},b:{type:w,description:"End Value"},t:{type:w,description:"Interpolant (0-1)"}},extendedOutputs:{result:{type:w,description:"Interpolated Value"}},compileConfig:i=>({fields:{clamp:i.clamp??!0},untagged:[]})});const Jp=Be({id:"math.map",metadata:{category:B.Math,keywords:["map","remap","range"],description:"Maps a value from one range to another."},inputs:{value:w,inMin:w,inMax:w,outMin:w,outMax:w},outputs:{result:w},autoBroadcast:!0,execute:i=>{const{value:e,inMin:t,inMax:n,outMin:o,outMax:r}=i;return{result:o+(e-t)*(r-o)/(n-t)}}});I({version:"1.0.0",...Jp,displayName:"Map",extendedInputs:{value:{type:w,description:"Input Value"},inMin:{type:w,description:"Input Min",defaultValue:0},inMax:{type:w,description:"Input Max",defaultValue:1},outMin:{type:w,description:"Output Min",defaultValue:0},outMax:{type:w,description:"Output Max",defaultValue:1}},extendedOutputs:{result:{type:w,description:"Mapped Value"}}});const w1=Object.freeze(Object.defineProperty({__proto__:null,primitive_clamp:Kp,primitive_lerp:Xp,primitive_map:Jp},Symbol.toStringTag,{value:"Module"}));function x1(i){if(!i)return;const e=i.type;if(!(!e||e==="any")){if(e==="float")return{kind:"atomic",type:"number"};if(e==="string")return{kind:"atomic",type:"string"};if(e.startsWith("float")){const t=parseInt(e.slice(5));if(!isNaN(t))return{kind:"array",size:t,element:{kind:"atomic",type:"number"}}}}}const Qp={kind:"record",fields:{name:{kind:"atomic",type:"string"},type:xe}},Zp={id:"io.input",kind:"primitive",metadata:{category:B.IO,keywords:["source","in"],description:"Graph input node."},configType:Qp,ui:{inspector:{fields:[{type:"structor-type",label:"Type",path:"type",default:"float"},{type:"string",label:"Name",path:"name"}]}},computeForwardPorts:(i,e,t)=>{let n=i.fields.value;if(!n){const o=x1(e);o&&(n=o)}return n||(n={kind:"atomic",type:"number"}),{inputs:{kind:"record",fields:{value:{kind:"atomic",type:"number"}}},outputs:{kind:"record",fields:{value:n}}}},execute:(i,e,t)=>{const o=e?.fields?.name??"value";return{fields:{value:i.fields[o]!==void 0?i.fields[o]:i.fields.value}}}};I({version:"1.0.0",...Zp,displayName:"Input",aliases:["in","source"],extendedOutputs:{value:{type:xe,description:"The input value.",suppressInputEditor:!0,suppressLabel:!0}},compileConfig:i=>{const e=Zi(i,Qp);return i.values&&(e.values=i.values),e}});const S1=Object.freeze(Object.defineProperty({__proto__:null,primitive_input:Zp},Symbol.toStringTag,{value:"Module"})),eg={id:"io.output",kind:"primitive",metadata:{category:B.IO,keywords:["sink","out"],description:"Graph output node."},computeForwardPorts:(i,e,t)=>{const n=i.fields.value||{kind:"atomic",type:"any"};return{inputs:{kind:"record",fields:{value:n}},outputs:{kind:"record",fields:{value:n}}}},execute:(i,e,t)=>({fields:{value:i.fields.value}})};I({version:"1.0.0",...eg,displayName:"Output",aliases:["out","sink"],extendedInputs:{value:{type:xe,description:"The output value.",suppressInputEditor:!0,suppressLabel:!0}},extendedOutputs:{value:{type:xe,description:"The graph output value.",suppressInputEditor:!0,suppressLabel:!0}}});const k1=Object.freeze(Object.defineProperty({__proto__:null,primitive_output:eg},Symbol.toStringTag,{value:"Module"}));function C1(i){if(!i)return;const e=i.type;if(!(!e||e==="any")){if(e==="float")return{kind:"atomic",type:"number"};if(e==="string")return{kind:"atomic",type:"string"};if(e.startsWith("float")){const t=parseInt(e.slice(5));if(!isNaN(t))return{kind:"array",size:t,element:{kind:"atomic",type:"number"}}}}}function Yl(i,e,t,n){if(!i||!i.includes("#"))return i;let o="";return t===1?o=n==="input"?"in":"out":t<=4?o=["x","y","z","w"][e]:o=e.toString(),i.replace(/#/g,o)}const sf=(i,e,t)=>{const o=t.loadedSubgraphs;if(!o)return{inputs:{kind:"record",fields:{}},outputs:{kind:"record",fields:{}}};const r=e.subgraphId,s=o.get(r);if(s){const a=Object.values(s.inner.nodes),l={},c=a.filter(d=>d.config.typeId==="io.input"||d.config.typeId==="input").sort((d,u)=>d.y-u.y);c.forEach((d,u)=>{let p=d.config.name||"value";p=Yl(p,u,c.length,"input");const g=C1(d.config);l[p]=g||{kind:"atomic",type:"any"}});const f={},h=a.filter(d=>d.config.typeId==="io.output"||d.config.typeId==="output").sort((d,u)=>d.y-u.y);return h.forEach((d,u)=>{let p=d.config.name||"value";p=Yl(p,u,h.length,"output"),f[p]={kind:"atomic",type:"any"}}),{inputs:{kind:"record",fields:l},outputs:{kind:"record",fields:f}}}return{inputs:{kind:"record",fields:{}},outputs:{kind:"record",fields:{}}}},tg=Be({id:"core.subgraph",subgraphExpansionTag:"inline",metadata:{category:B.Core,keywords:["nested","graph"],description:"Executes a nested subgraph."},config:{subgraphId:{kind:"atomic",type:"string"}},inputs:{},outputs:{},ui:{inspector:{fields:[{type:"string",label:"Subgraph ID",path:"subgraphId"}]}},getDisplayLabel:i=>{if(i.subgraphId){const e=i.subgraphId.split(".");return e[e.length-1]}},computeForwardPorts:sf,execute:(i,e,t)=>({fields:{}})});I({version:"1.0.0",...tg,displayName:"Subgraph"});const A1=Object.freeze(Object.defineProperty({__proto__:null,computeSubgraphPorts:sf,primitive_subgraph:tg,resolvePortName:Yl},Symbol.toStringTag,{value:"Module"})),ng=Be({id:"core.thensubgraph",subgraphExpansionTag:"onTrigger",metadata:{category:B.Core,keywords:["nested","graph","conditional","midi","trigger"],description:"Executes a nested subgraph when a MIDI Note On event is received."},config:{subgraphId:{kind:"atomic",type:"string"}},inputs:{midi_in:J},outputs:{},ui:{inspector:{fields:[{type:"string",label:"Subgraph ID",path:"subgraphId"}]}},getDisplayLabel:i=>{if(i.subgraphId){const e=i.subgraphId.split(".");return`OnNote: ${e[e.length-1]}`}return"OnNote"},computeForwardPorts:((i,e,t)=>{const n=sf(i,e,t);return{inputs:{kind:"record",fields:{...n.inputs.fields,midi_in:J}},outputs:n.outputs}}),execute:(i,e,t)=>{const n=i.midi_in||[],o=Array.isArray(n)?n:[];let r=!1;for(const s of o)if(s.type==="note_on"&&(s.velocity??0)>0){r=!0;break}return r&&t.executeSubgraph&&t.executeSubgraph("onTrigger"),{fields:{}}}});I(ng);const _1=Object.freeze(Object.defineProperty({__proto__:null,primitive_thensubgraph:ng},Symbol.toStringTag,{value:"Module"})),ig=Be({id:"core.pack",metadata:{category:B.Core,keywords:["pack","record","struct","vector"],description:"Packs inputs into a record or vector."},config:{targetType:{kind:"atomic",type:"string",defaultValue:"infer"}},inputs:{},outputs:{result:xe},ui:{inspector:{fields:[{type:"tab-bar",label:"Target Type",path:"targetType",options:[{label:"Infer",value:"infer"},{label:"float2",value:"float2"},{label:"float3",value:"float3"},{label:"float4",value:"float4"}]}]}},computeBackwardPorts:(i,e,t)=>{const n=e?.targetType||"infer";let o=null;if(n==="infer"){const s=i.fields.result;s&&s.kind==="record"&&(s.fields.x&&s.fields.y&&s.fields.z&&s.fields.w?o="float4":s.fields.x&&s.fields.y&&s.fields.z?o="float3":s.fields.x&&s.fields.y&&(o="float2"))}else o=n;const r={kind:"record",fields:{}};return o==="float4"?r.fields={x:w,y:w,z:w,w}:o==="float3"?r.fields={x:w,y:w,z:w}:o==="float2"&&(r.fields={x:w,y:w}),{inputRequirements:r,backwardMetadata:{inferredType:o}}},computeForwardPorts:(i,e,t,n)=>{const o=e,r=o?.targetType||o?.fields?.targetType||"infer";let s=r!=="infer"?r:n?.inferredType||"float2";const a={},l={};return["float2","float3","float4"].includes(s)||(s="float2"),s==="float4"?(a.x=w,a.y=w,a.z=w,a.w=w,l.result={kind:"array",size:4,element:w,hint:"float4"}):s==="float3"?(a.x=w,a.y=w,a.z=w,l.result={kind:"array",size:3,element:w,hint:"float3"}):(a.x=w,a.y=w,l.result={kind:"array",size:2,element:w,hint:"float2"}),{inputs:{kind:"record",fields:a},outputs:{kind:"record",fields:l}}},shouldRecompileOnConfigChange:(i,e)=>i?.targetType!==e?.targetType,execute:(i,e)=>{const t=i?.fields||{};let n=e?.targetType||"infer";return n==="infer"&&(t.w!==void 0?n="float4":t.z!==void 0?n="float3":t.y!==void 0&&t.x!==void 0?n="float2":n="record"),n==="float4"?{result:[t.x??0,t.y??0,t.z??0,t.w??0]}:n==="float3"?{result:[t.x??0,t.y??0,t.z??0]}:n==="float2"?{result:[t.x??0,t.y??0]}:{result:{fields:t}}}});I({version:"1.0.0",...ig,displayName:"Pack",extendedOutputs:{result:{type:xe,description:"Record"}}});const M1=Object.freeze(Object.defineProperty({__proto__:null,primitive_pack:ig},Symbol.toStringTag,{value:"Module"})),og=Be({id:"core.unpack",metadata:{category:B.Core,keywords:["unpack","destructure","split"],description:"Unpacks a record or fixed-length vector into outputs."},config:{},inputs:{record:xe},computeForwardPorts:(i,e,t)=>{const n=i.fields.record;let o={};if(n){if(n.kind==="record")o=n.fields;else if(n.kind==="array"&&typeof n.size=="number"&&n.size<=16){const r=n.size;if(r===2)o.x=n.element,o.y=n.element;else if(r===3)o.x=n.element,o.y=n.element,o.z=n.element;else if(r===4)o.x=n.element,o.y=n.element,o.z=n.element,o.w=n.element;else for(let s=0;s<r;s++)o[s.toString()]=n.element}}return{inputs:{kind:"record",fields:{record:n||xe}},outputs:{kind:"record",fields:o}}},outputs:{},dynamicOutputType:xe,execute:i=>{let e=i.record;if(!e)return{};if(Array.isArray(e)&&e.length===1&&typeof e[0]=="object"&&e[0]!==null){const t=e[0];("x"in t||"fields"in t||Object.keys(t).length>0)&&(e=t)}if(Array.isArray(e)){const t=e.length,n={};if(t===2)n.x=e[0],n.y=e[1];else if(t===3)n.x=e[0],n.y=e[1],n.z=e[2];else if(t===4)n.x=e[0],n.y=e[1],n.z=e[2],n.w=e[3];else for(let o=0;o<t;o++)o<16&&(n[o.toString()]=e[o]);return n}return typeof e=="object"&&e!==null?"fields"in e?e.fields:e:{}}});I({version:"1.0.0",...og,displayName:"Unpack",extendedInputs:{record:{type:xe,description:"Record to unpack"}}});const I1=Object.freeze(Object.defineProperty({__proto__:null,primitive_unpack:og},Symbol.toStringTag,{value:"Module"}));function rg(i){return i&&i.kind==="array"&&i.element?.kind==="record"?"midi":"primitive"}function sg(i,e){if(e==="primitive")if(Array.isArray(i)){for(const t of i)if(t)return!0;return!1}else return!!i;else{const t=i||[];if(Array.isArray(t)){for(const n of t)if(n&&n.type==="note_on"&&(n.velocity??0)>0)return!0}return!1}}const ag=Be({id:"core.ifthen",subgraphExpansionTag:"onTrigger",metadata:{category:B.Core,keywords:["group","conditional","spatial","if","then"],description:"Spatially groups nodes and executes them when a MIDI Note On event is received."},config:{width:{kind:"atomic",type:"number",defaultValue:3},height:{kind:"atomic",type:"number",defaultValue:3},regionX:{kind:"atomic",type:"number",defaultValue:0,optional:!0},regionY:{kind:"atomic",type:"number",defaultValue:0,optional:!0},visibility:{kind:"atomic",type:"string",defaultValue:"auto",optional:!0},mode:{kind:"atomic",type:"string",defaultValue:"midi",optional:!0}},inputs:{midi_in:J},outputs:{},ui:{inspector:{fields:[{type:"number",label:"Width",path:"width",min:1,step:1},{type:"number",label:"Height",path:"height",min:1,step:1},{type:"number",label:"Region X (Offset)",path:"regionX",step:1},{type:"number",label:"Region Y (Offset)",path:"regionY",step:1},{type:"tab-bar",label:"Visibility",path:"visibility",options:[{label:"Auto",value:"auto"},{label:"Show",value:"show"},{label:"Hide",value:"hide"}],default:"auto"}]}},getDisplayLabel:()=>"IfThen",getRegion:i=>({x:i.regionX??0,y:i.regionY??0,width:i.width??1,height:i.height??1,visibility:i.visibility||lr.Show}),getChildren:(i,e)=>{const t=[],n=i.config,o=n.regionX??0,r=n.regionY??0,s=n.width??1,a=n.height??1,l=i.x+o,c=i.y+r,f=l+s,h=c+a;for(const d of Object.values(e))d.id!==i.id&&d.x>=l&&d.x<f&&d.y>=c&&d.y<h&&t.push(d.id);return t},execute:(i,e,t)=>{const n=e.mode||"midi",o=i.midi_in;return sg(o,n)&&t.executeSubgraph&&t.executeSubgraph("onTrigger"),{fields:{}}},computeForwardPorts:(i,e,t)=>{const n=i.fields.midi_in;let o="midi",r=J;return n&&(o=rg(n),o==="primitive"&&(r=n)),{inputs:{kind:"record",fields:{midi_in:r}},outputs:{kind:"record",fields:{}},forwardMetadata:{mode:o}}},compileConfig:(i,e)=>({fields:{...i,mode:e?.mode||"midi"}})});I(ag);const O1=Object.freeze(Object.defineProperty({__proto__:null,primitive_ifthen:ag},Symbol.toStringTag,{value:"Module"}));function lg(i){return typeof i=="number"?w:typeof i=="string"?{kind:"atomic",type:"string"}:typeof i=="boolean"?{kind:"atomic",type:"boolean"}:Array.isArray(i)?{kind:"array",element:i.length>0?lg(i[0]):xe,size:i.length}:xe}const cg={id:"data.literal",kind:"primitive",metadata:{category:B.Data,keywords:["value","constant"],description:"Outputs a constant value."},configType:{kind:"atomic",type:"any"},computeForwardPorts:(i,e,t)=>({inputs:{kind:"record",fields:{}},outputs:{kind:"record",fields:{value:lg(e)}}}),execute:(i,e,t)=>({fields:{value:e&&typeof e=="object"&&"value"in e?e.value:e}})};I({version:"1.0.0",...cg,displayName:"Literal",extendedOutputs:{value:{type:xe,description:"The literal value."}},compileConfig:i=>i?.literal?.value??0});const E1=Object.freeze(Object.defineProperty({__proto__:null,primitive_literal:cg},Symbol.toStringTag,{value:"Module"})),fg=Be({id:"util.hub",metadata:{category:B.Utility,keywords:["hub","reroute"],description:"Passes input to output."},inputs:{value:xe},outputs:{value:xe},autoBroadcast:!0,execute:i=>({value:i.value})});I({version:"1.0.0",...fg,displayName:"Hub",extendedInputs:{value:{type:xe,description:"Input",suppressInputEditor:!0,suppressLabel:!0}},extendedOutputs:{value:{type:xe,description:"Output",suppressLabel:!0}}});const hg=Be({id:"data.float",metadata:{category:B.Data,keywords:["float","number","slider"],description:"Float value with slider."},inputs:{value:w},outputs:{value:w},autoBroadcast:!0,execute:i=>({value:i.value})});I({version:"1.0.0",...hg,displayName:"Float",extendedInputs:{value:{type:w,description:"Value",defaultValue:0}},extendedOutputs:{value:{type:w,description:"Value"}},compileConfig:i=>({values:{value:i.value??0},fields:{},untagged:[]})});const P1=Object.freeze(Object.defineProperty({__proto__:null,primitive_float:hg,primitive_hub:fg},Symbol.toStringTag,{value:"Module"})),dg={id:"functional.apply",kind:"primitive",metadata:{category:B.Functional,keywords:["call","invoke"],description:"Applies a functor to an input value."},computeForwardPorts:(i,e,t)=>{const n=i.fields.functor;return{inputs:i,outputs:{kind:"record",fields:{result:n?n.output:{kind:"atomic",type:"any"}}}}},execute:(i,e,t)=>{const n=i.fields.functor,o=i.fields.input;return{fields:{result:n(o)}}}};I({version:"1.0.0",...dg,displayName:"Apply Functor",extendedInputs:{functor:{type:{kind:"functor",input:xe,output:xe},description:"The functor to apply."},value:{type:xe,description:"The value to apply the functor to."}},extendedOutputs:{result:{type:xe,description:"The result of the functor application."}}});const T1=Object.freeze(Object.defineProperty({__proto__:null,primitive_apply:dg},Symbol.toStringTag,{value:"Module"})),ug=Be({id:"logic.select",metadata:{category:B.Logic,keywords:["switch","case","mux","conditional","select"],description:"Selects an output value from multiple inputs based on a control value."},inputs:{},config:{count:{kind:"atomic",type:"number",defaultValue:2},mode:{kind:"atomic",type:"string",defaultValue:"value"},base:{kind:"atomic",type:"number",defaultValue:0,optional:!0},step:{kind:"atomic",type:"number",defaultValue:1,optional:!0}},outputs:{result:we},autoBroadcast:!1,computeForwardPorts:(i,e,t)=>{const n=e.fields,o=n.count||2,r=n.mode||"value",s={value:w},a=[];for(let c=0;c<o;c++)if(r==="range"){const f=`val_${c}`;s[f]={...w,description:`Case ${c+1} Value`},i.fields&&i.fields[f]&&a.push(i.fields[f])}else r==="value"?(s[`match_${c}`]={...w,description:`Case ${c+1} Match`},s[`val_${c}`]={...w,description:`Case ${c+1} Value`},i.fields&&i.fields[`val_${c}`]&&a.push(i.fields[`val_${c}`])):r==="zone"&&(s[`threshold_${c}`]={...w,description:`Case ${c+1} Threshold`},s[`val_${c}`]={...w,description:`Case ${c+1} Value`},i.fields&&i.fields[`val_${c}`]&&a.push(i.fields[`val_${c}`]));const l=nf(a);return{inputs:{kind:"record",fields:s},outputs:{kind:"record",fields:{result:l}}}},compileConfig:i=>({fields:{count:i.count||2,mode:i.mode||"value",base:i.base||0,step:i.step||1}}),shouldRecompileOnConfigChange:(i,e)=>{const t=i,n=e;return t.count!==n?.count||t.mode!==n?.mode},execute:(i,e,t)=>{const n=e.count??2,o=e.mode??"value",r=e.base??0,s=e.step??1,a={value:{type:w}};for(let d=0;d<n;d++){const u=`val_${d}`;a[u]={type:we},o==="value"?a[`match_${d}`]={type:w}:o==="zone"&&(a[`threshold_${d}`]={type:w})}const l=Hv(t,a,i),c=l.value??0;let f=-1;if(o==="range")if(s===0)f=0;else{const d=Math.round((c-r)/s);f=Math.max(0,Math.min(n-1,d))}else if(o==="value")for(let u=0;u<n;u++){const p=l[`match_${u}`]??u+1;if(Math.abs(c-p)<1e-4){f=u;break}}else if(o==="zone")for(let d=0;d<n;d++){const u=l[`threshold_${d}`]??1/0;if(c<=u){f=d;break}}let h=0;return f!==-1?h=l[`val_${f}`]??0:h=0,{result:h}}});I({version:"1.0.0",...ug,displayName:"Select",extendedInputs:{value:{type:w,description:"Control Value"}},extendedOutputs:{result:{type:we,description:"Selected Value"}},ui:{inspector:{fields:[{type:"number",label:"Count",path:"count",min:2,max:32,step:1,default:2},{type:"tab-bar",label:"Mode",path:"mode",default:"value",options:[{label:"Value (Match)",value:"value"},{label:"Range (Index)",value:"range"},{label:"Zone (Threshold)",value:"zone"}]},{type:"number",label:"Base Index",path:"base",step:1,default:0,visible:i=>i.mode==="range"},{type:"number",label:"Step Size",path:"step",step:1,default:1,visible:i=>i.mode==="range"}]}}});const D1=Object.freeze(Object.defineProperty({__proto__:null,logic_select:ug},Symbol.toStringTag,{value:"Module"})),pg=Be({id:"logic.latch",metadata:{category:B.Logic,keywords:["latch","sample","hold","trigger","store"],description:"Stores and outputs a value when the trigger condition is met."},config:{initMode:{kind:"atomic",type:"string",defaultValue:"auto"},mode:{kind:"atomic",type:"string",defaultValue:"midi",optional:!0}},inputs:{condition:J,value:we,init:we},outputs:{result:we},autoBroadcast:!1,createState:()=>({currentValue:void 0,initialized:!1}),computeForwardPorts:(i,e,t)=>{const o=e.fields.initMode||"auto",r=(i.fields||i).condition,s=rg(r),a=(i.fields||i).value||we;let l=(i.fields||i).init||we;o==="auto"&&(l=a);const c=nf([a,l]),f={condition:r||J,value:a};return o==="manual"&&(f.init=l),{inputs:{kind:"record",fields:f},outputs:{kind:"record",fields:{result:c}},forwardMetadata:{mode:s}}},compileConfig:(i,e)=>({fields:{initMode:i.initMode||"auto",mode:e?.mode||"midi"}}),shouldRecompileOnConfigChange:(i,e)=>{const t=i,n=e;return t.initMode!==n?.initMode},execute:(i,e,t,n)=>{const o=i.condition,r=i.value,s=i.init,a=e.mode||"midi",l=e.initMode||"auto";sg(o,a)&&(n.currentValue=r,n.initialized=!0);let c=n.currentValue;return n.initialized||(l==="auto"&&(c=r),n.initialized||(n.currentValue=l==="auto"?r:s,n.initialized=!0,c=n.currentValue)),{result:c}}});I({version:"1.0.0",...pg,inputs:{},displayName:"Latch",extendedInputs:{condition:{type:J,description:"Trigger"},value:{type:we,description:"Value to Latch"},init:{type:we,description:"Initial Value"}},extendedOutputs:{result:{type:we,description:"Latched Value"}},ui:{inspector:{fields:[{type:"tab-bar",label:"Init Mode",path:"initMode",default:"auto",options:[{label:"Auto (Use Value)",value:"auto"},{label:"Manual",value:"manual"}]}]}}});const L1=Object.freeze(Object.defineProperty({__proto__:null,logic_latch:pg},Symbol.toStringTag,{value:"Module"})),gg=Be({id:"logic.delay",metadata:{category:B.Logic,keywords:["delay","z-1","feedback","memory","prev"],description:"Outputs the value from the previous frame (z⁻¹)."},config:{initMode:{kind:"atomic",type:"string",defaultValue:"auto"}},inputs:{value:we,init:we},outputs:{result:we},autoBroadcast:!1,isRealtime:()=>!0,createState:()=>({storedValue:void 0,initialized:!1}),computeForwardPorts:(i,e,t)=>{const o=e.fields.initMode||"auto",r=(i.fields||i).value||we;let s=(i.fields||i).init||we;o==="auto"&&(s=r);const a=nf([r,s]),l={value:r};return o==="manual"&&(l.init=s),{inputs:{kind:"record",fields:l},outputs:{kind:"record",fields:{result:a}}}},compileConfig:(i,e)=>({fields:{initMode:i.initMode||"auto"}}),shouldRecompileOnConfigChange:(i,e)=>{const t=i,n=e;return t.initMode!==n?.initMode},cycleBreakingPorts:["value"],execute:(i,e,t,n)=>{const o=i.init,r=e.initMode||"auto";let s;return n.initialized?s=n.storedValue:(r==="auto"?s=i.value:s=o,n.initialized=!0),i.value!==void 0&&(n.storedValue=i.value),{result:s}},consolidate:(i,e,t,n)=>{i.value!==void 0&&(n.storedValue=i.value),n.initialized=!0}});I({version:"1.0.0",...gg,inputs:{},displayName:"Delay",extendedInputs:{value:{type:we,description:"Input Value"},init:{type:we,description:"Initial Value"}},extendedOutputs:{result:{type:we,description:"Delayed Value"}},ui:{inspector:{fields:[{type:"tab-bar",label:"Init Mode",path:"initMode",default:"auto",options:[{label:"Auto (Use Value)",value:"auto"},{label:"Manual",value:"manual"}]}]}}});const R1=Object.freeze(Object.defineProperty({__proto__:null,logic_delay:gg},Symbol.toStringTag,{value:"Module"})),N1=[i1,o1,y1,v1,w1,S1,k1,A1,_1,M1,I1,O1,E1,P1,T1,D1,L1,R1];N1.flatMap(i=>Object.values(i).filter(e=>typeof e=="object"&&e!==null&&"kind"in e&&e.kind==="primitive"));I({...pp,ui:{body:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveBodyRenderer),getBodyHeight:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveBodyHeight),inspector:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveInspectorRenderer)}});I({...gp,ui:{body:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveBodyRenderer),getBodyHeight:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveBodyHeight),inspector:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveInspectorRenderer)}});I({...mp,ui:{body:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveEnvBodyRenderer),getBodyHeight:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveEnvBodyHeight),inspector:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveInspectorRenderer)}});I({...Wl,ui:{...Wl.ui,body:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveCropBodyRenderer),getBodyHeight:()=>Oe(()=>import("./nodes.ui-DbFwxdUq.js"),[]).then(i=>i.CurveCropBodyHeight)}});I({...rf,ui:{inputEditor:()=>Oe(()=>import("./nodes.ui-BHhMWERa.js"),[]).then(i=>i.DebugScopeInputEditor),getInputEditorHeight:()=>Promise.resolve(()=>100)}});I({...vp,ui:{inspector:()=>Oe(()=>import("./nodes.ui-ClnNyCkW.js"),[]).then(i=>i.ExpressionInspectorRenderer)}});var Kl=(i=>(i.NoChange="NoChange",i.UserAction="UserAction",i.Programmatic="Programmatic",i))(Kl||{});class rn{constructor(e,t,n){this.element=t,this.callbacks=n,this.isDisposed=!1,this.initialThresholdReached=!1,this.pointerId=e.pointerId,this.moveFunc=this.onPointerMove.bind(this),this.upFunc=this.onPointerUp.bind(this),this.cancelFunc=this.onPointerCancel.bind(this),window.addEventListener("pointermove",this.moveFunc),window.addEventListener("pointerup",this.upFunc),window.addEventListener("pointercancel",this.cancelFunc),this.startX=e.clientX,this.startY=e.clientY,this.callbacks.callMoveImmediately&&(this.element.setPointerCapture(this.pointerId),this.initialThresholdReached=!0,this.moveFunc(e))}onPointerMove(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];if(!this.initialThresholdReached){const n=Math.abs(t[0])+Math.abs(t[1]),o=this.callbacks.threshold??5;n>o&&(this.element.setPointerCapture(this.pointerId),this.initialThresholdReached=!0)}this.initialThresholdReached&&this.callbacks?.move?.(e,t)}onPointerUp(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];this.callbacks.callMoveBeforeDone&&this.callbacks?.move?.(e,t),this.initialThresholdReached?this.callbacks?.accept?.(e,t):this.callbacks?.cancel?.("NoChange"),this.callbacks?.complete?.(),this.finishDispose()}onPointerCancel(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];this.callbacks.callMoveBeforeDone&&this.callbacks?.move?.(e,t),this.callbacks?.cancel?.("UserAction"),this.callbacks?.complete?.(),this.finishDispose()}dispose(){this.isDisposed||(this.callbacks?.cancel?.("Programmatic"),this.callbacks?.complete?.(),this.finishDispose())}finishDispose(){this.isDisposed||(this.isDisposed=!0,this.element.releasePointerCapture(this.pointerId),window.removeEventListener("pointermove",this.moveFunc),window.removeEventListener("pointerup",this.upFunc),window.removeEventListener("pointercancel",this.cancelFunc))}}var $1=Object.defineProperty,B1=Object.getOwnPropertyDescriptor,kt=(i,e,t,n)=>{for(var o=n>1?void 0:n?B1(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&$1(e,t,o),o};let at=class extends ct{constructor(){super(),this.tick=0,this.history=[],this.smoothedRange=1,this.smoothedAnchor=0,this.isSigned=!1,this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1,this.selectedNodeId=null,this.hoveredNodeId=null,$i(this)}updated(i){if((i.has("value")||i.has("tick"))&&this.value!==void 0){this.history.push(this.value);const e=this.config?.historySize||100;this.history.length>e&&this.history.shift(),this.config?.mode==="scope"&&this.config.autoRange&&this.updateAdaptiveRange(),this.requestUpdate()}}updateAdaptiveRange(){if(this.history.length===0)return;const i=this.history;let e=i[0],t=i[0],n=!1;for(const f of i)f<e&&(e=f),f>t&&(t=f),f<0&&(n=!0);n&&(this.isSigned=!0);const o=1.2;let r=1,s=0;if(this.isSigned){const f=(e+t)/2,h=t-e,d=Math.max(h*o,.001),u=Math.pow(2,Math.ceil(Math.log2(d))),p=u,g=Math.round(f/p)*p;r=u,s=g;const m=s-r/2,b=s+r/2;(e<m||t>b)&&(r*=2)}else if(e>=-1e-4&&t<=1+1e-4)r=1,s=0;else{const h=Math.max(t-e,.001);let d=Math.pow(2,Math.ceil(Math.log2(h*o))),u=Math.floor(e/d)*d;u+d<t&&(d*=2,u=Math.floor(e/d)*d),r=d,s=u}r>this.smoothedRange?this.smoothedRange=r:(this.smoothedRange=this.smoothedRange*.95+r*.05,Math.abs(this.smoothedRange-r)<.01&&(this.smoothedRange=r));const a=this.getDisplayAnchor(),l=this.getDisplayRange();let c=!1;if(this.isSigned){const h=a-l*.9/2,d=a+l*.9/2;e>=h&&t<=d&&(c=!0)}else{const f=a,h=a+l*.9;e>=f&&t<=h&&(c=!0)}c?this.smoothedAnchor=this.smoothedAnchor*.99+s*.01:(this.smoothedAnchor=this.smoothedAnchor*.8+s*.2,Math.abs(this.smoothedAnchor-s)<.01&&(this.smoothedAnchor=s))}getDisplayRange(){return Math.pow(2,Math.ceil(Math.log2(this.smoothedRange)))}getDisplayAnchor(){const i=this.getDisplayRange();return Math.round(this.smoothedAnchor/i)*i}get totalWeight(){return this.config?.segments?.reduce((i,e)=>i+e.weight,0)||1}get segmentLayout(){if(!this.config||!this.config.segments)return[];const i=ue;let e=0;const t=this.totalWeight;return this.config.segments.map((n,o)=>{const r=n.weight/t*i,s={segment:n,index:o,startX:e,endX:e+r,width:r};return e+=r,s})}get pathData(){if(!this.config)return"";if(this.config.envelopeNodes&&this.config.envelopeNodes.length>0)return this.getEnvelopePathData();if(this.config.mode==="scope"){const l=this.history,c=ue,f=96,h=this.config.historySize||100,d=this.config.autoRange?this.getDisplayRange():(this.config.range?.[1]??1)-(this.config.range?.[0]??0),u=this.config.autoRange?this.getDisplayAnchor():this.config.range?.[0]??0;let p,g;this.config.autoRange?this.isSigned?(p=u-d/2,g=u+d/2):(p=u,g=u+d):(p=this.config.range?.[0]??0,g=this.config.range?.[1]??1);const m=y=>{const x=(y-p)/(g-p);return f-Math.max(0,Math.min(1,x))*f},b=l.map((y,x)=>{const v=x/(h-1)*c,C=m(y);return`${v},${C}`});return b.length>0?`M ${b.join(" L ")}`:""}const{domain:i,range:e}=this.config;if(!i||!e)return"";const[t,n]=e,o=96,r=(l,c,f)=>(l-c)/(f-c),s=[],a=20;if(this.segmentLayout.forEach(l=>{const{segment:c,startX:f,endX:h}=l;let d=1;c.curve.type==="exponential"&&(d=Math.pow(10,-(c.curve.value??0)));const u=c.curve.type==="step"?c.curve.value??2:1;if(c.curve.type==="points"&&c.curve.points){c.curve.points.forEach(p=>{const g=p.x,m=t+p.y*(n-t),b=f+g*(h-f),y=o-r(m,t,n)*o;s.push([b,y])});return}for(let p=0;p<=a;p++){const g=p/a;let m=0;switch(c.curve.type){case"exponential":m=Math.pow(g,d);break;case"linear":m=g;break;case"step":u<=1?m=0:m=Math.floor(g*u)/(u-1),g>=.999&&(m=1);break;case"sin":m=-(Math.cos(Math.PI*g)-1)/2;break;case"quad":m=g*g;break;default:m=g}const b=t+m*(n-t),y=f+g*(h-f),x=o-r(b,t,n)*o;s.push([y,x])}}),s.length>0){const l=s[0];l[0]>.001&&s.unshift([0,l[1]]);const c=ue,f=s[s.length-1];f[0]<c-.001&&s.push([c,f[1]])}return`M ${s.map(l=>l.join(",")).join(" L ")}`}handlePointerDown(i){if(!this.config?.interactive)return;const e=this.getBoundingClientRect(),t=i.clientX-e.left,n=e.width,o=e.height,r=this.segmentLayout,s=10;let a=-1;for(let l=0;l<r.length-1;l++){const c=r[l].endX;if(Math.abs(t-c)<s){a=l;break}}if(a!==-1&&this.config.onSegmentResize){const l=r[a].width;this.config.onInteractionStart&&this.config.onInteractionStart(),new rn(i,this,{move:(c,f)=>{const h=l+f[0],d=this.totalWeight/n,u=h*d;u>0&&this.config?.onSegmentResize&&this.config.onSegmentResize(a,u)},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}});return}if(this.config.onSegmentChange){const l=r.find(c=>t>=c.startX&&t<=c.endX);if(l&&l.segment.curve.type==="exponential"){this.config.onInteractionStart&&this.config.onInteractionStart(),new rn(i,this,{move:(c,f)=>{const h=this.getBoundingClientRect(),d=c.clientY-h.top,g=1-2*(Math.max(0,Math.min(o,d))/o);this.config?.onSegmentChange&&this.config.onSegmentChange(l.segment.id,"value",g)},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}});return}}if(this.config.envelopeNodes&&this.config.segments){const l=t/n,c=i.clientY-e.top,[f,h]=this.config.range||[0,1],d=f+(o-c)/o*(h-f),u=this.evaluateEnvelopeAt(l),p=10/o*(h-f);if(Math.abs(d-u)<p){const{envelopeNodes:g}=this.config;let m=-1;for(let b=0;b<g.length-1;b++)if(l>=g[b].x&&l<=g[b+1].x){m=b;break}if(m!==-1){i.altKey?this.startCurveBend(i,m):this.startSegmentDrag(i,m);return}}}}evaluateCurve(i){if(!this.config||!this.config.segments)return 0;const{range:e,segments:t}=this.config,[n,o]=e||[0,1],r=this.totalWeight,s=i*r;let a=0,l=t[t.length-1],c=0;for(const g of t){if(s>=a&&s<=a+g.weight){l=g,c=a;break}a+=g.weight}const f=l.weight,h=(s-c)/f;let d=0;const u=l.curve,p=u.type==="step"?u.value??2:1;switch(u.type){case"exponential":const g=Math.pow(10,-(u.value??0));d=Math.pow(h,g);break;case"linear":d=h;break;case"step":p<=1?d=0:d=Math.floor(h*p)/(p-1),h>=.999&&(d=1);break;case"sin":d=-(Math.cos(Math.PI*h)-1)/2;break;case"quad":d=h*h;break;case"points":if(u.points&&u.points.length>0){const m=u.points;if(h<=m[0].x)d=m[0].y;else if(h>=m[m.length-1].x)d=m[m.length-1].y;else for(let b=0;b<m.length-1;b++){const y=m[b],x=m[b+1];if(h>=y.x&&h<=x.x){const v=(h-y.x)/(x.x-y.x);d=y.y+v*(x.y-y.y);break}}}else d=h;break;default:d=h}return n+d*(o-n)}handlePointerMove(i){if(!this.config?.interactive)return;if(this.style.cursor="default",this.config.envelopeNodes&&this.config.segments){const s=this.getBoundingClientRect(),a=i.clientX-s.left,l=i.clientY-s.top,c=s.height,f=s.width,[h,d]=this.config.range||[0,1],u=a/f,p=h+(c-l)/c*(d-h),g=this.evaluateEnvelopeAt(u),m=10/c*(d-h);if(Math.abs(p-g)<m){this.style.cursor="ns-resize",Y(()=>{this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1});return}}const e=this.getBoundingClientRect(),t=i.clientX-e.left,n=this.segmentLayout;this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1;const o=10;for(let s=0;s<n.length-1;s++){const a=n[s].endX;if(Math.abs(t-a)<o){Y(()=>{this.hoveredSplitIndex=s,this.hoveredSegmentIndex=-1}),this.style.cursor="col-resize";return}}const r=n.findIndex(s=>t>=s.startX&&t<=s.endX);r!==-1&&Y(()=>{this.hoveredSegmentIndex=r})}handlePointerLeave(){this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1}getEnvelopePathData(){if(!this.config||!this.config.envelopeNodes||!this.config.segments)return"";const{envelopeNodes:i,segments:e,range:t}=this.config,[n,o]=t||[0,1],r=ue,s=96,a=f=>f*r,l=f=>s-(f-n)/(o-n)*s,c=[];for(let f=0;f<i.length-1;f++){const h=i[f],d=i[f+1],u=e[f];a(h.x);const p=20;let g="linear",m=0;u&&(g=u.curve.type,m=u.curve.value??0);for(let b=0;b<p;b++){const y=b/p;let x=0;switch(g){case"exponential":const S=Math.pow(10,-m);x=Math.pow(y,S);break;case"linear":x=y;break;case"step":const k=m;k<=1?x=0:x=Math.floor(y*k)/(k-1),y>=.999&&(x=1);break;case"sin":x=-(Math.cos(Math.PI*y)-1)/2;break;case"quad":x=y*y;break;default:x=y}const v=h.y+x*(d.y-h.y),C=h.x+y*(d.x-h.x);c.push([a(C),l(v)])}}if(i.length>0){const f=i[i.length-1];c.push([a(f.x),l(f.y)])}return c.length>0&&(c[0][0]>.001&&c.unshift([0,c[0][1]]),c[c.length-1][0]<r-.001&&c.push([r,c[c.length-1][1]])),`M ${c.map(f=>f.join(",")).join(" L ")}`}renderEnvelopeNodes(i,e,t){if(!this.config?.envelopeNodes)return"";const n=r=>i-(r-e)/(t-e)*i,o=r=>r*ue;return this.config.envelopeNodes.map(r=>{const s=o(r.x),a=n(r.y),l=r.id===this.selectedNodeId,c=r.id===this.hoveredNodeId;return dt`
            <g class="envelope-node"
               style="cursor: pointer;"
               @pointerdown=${f=>this.handleNodePointerDown(f,r)}
               @dblclick=${f=>this.handleNodeDoubleClick(f,r)}
               @pointerover=${()=>Y(()=>this.hoveredNodeId=r.id)}
               @pointerout=${()=>Y(()=>this.hoveredNodeId=null)}
            >
                <circle cx="${s}" cy="${a}" r="${c||l?6:4}"
                        fill="${l?"#fff":"var(--accent-color)"}"
                        stroke="black" stroke-width="1" />

                <!-- Expanded hit area -->
                <circle cx="${s}" cy="${a}" r="12" fill="red" fill-opacity="0" style="pointer-events: all;" />
            </g>
        `})}startCurveBend(i,e){const t=this.config?.segments;if(!t||!t)return;const o=t[e].curve.value||0;this.config?.onInteractionStart&&this.config.onInteractionStart(),new rn(i,this,{move:(r,s)=>{const a=r.shiftKey?100:50,l=-s[1]/a,c=o+l,f=[...this.config?.segments||[]];f[e]={...f[e],curve:{...f[e].curve,value:c}},f[e].curve.type==="linear"&&(f[e].curve.type="exponential"),this.config?.onEnvelopeChange&&this.config.envelopeNodes&&this.config.onEnvelopeChange(this.config.envelopeNodes,f)},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}})}startSegmentDrag(i,e){const t=this.config?.envelopeNodes;if(!t||!t)return;const n=t[e],o=t[e+1],r=n.x,s=n.y,a=o.x,l=o.y;new rn(i,this,{move:(c,f)=>{const h=this.getBoundingClientRect();h.width;const d=h.height,[u,p]=this.config?.range||[0,1];let g=0,m=-(f[1]/d)*(p-u);c.shiftKey&&(m*=.1),s+m<u&&(m=u-s),s+m>p&&(m=p-s),l+m<u&&(m=u-l),l+m>p&&(m=p-l);const b=[...t];b[e]={...b[e],x:r+g,y:s+m},b[e+1]={...b[e+1],x:a+g,y:l+m},this.config?.onEnvelopeChange&&this.config.onEnvelopeChange(b,this.config.segments||[])}})}handleNodePointerDown(i,e){if(i.stopPropagation(),i.preventDefault(),Y(()=>{this.selectedNodeId=e.id}),!this.config?.interactive||!this.config.envelopeNodes)return;const t=this.config.envelopeNodes.map(l=>({...l})),n=(this.config.segments||[]).map(l=>({...l,curve:{...l.curve}})),o=e.id,r=t.find(l=>l.id===o),s=r.x,a=r.y;this.config.onInteractionStart&&this.config.onInteractionStart(),new rn(i,this,{move:(l,c)=>{const f=this.getBoundingClientRect(),h=f.width,d=f.height,[u,p]=this.config?.range||[0,1],[g,m]=[u,p];let b=c[0]/h,y=-(c[1]/d)*(m-g);l.shiftKey&&(b*=.1,y*=.1);let x=s+b,v=a+y;if(v=Math.max(g,Math.min(m,v)),l.altKey){x=Math.max(0,Math.min(1,x));const C=t.filter(k=>k.id===o?!0:x>s?!(k.x>s&&k.x<=x):!(k.x>=x&&k.x<s)).map(k=>k.id===o?{...k,x,y:v}:k);C.sort((k,_)=>k.x-_.x);const S=[];for(let k=0;k<C.length-1;k++){const _=C[k],M=t.findIndex(T=>T.id===_.id);M!==-1&&M<n.length?S.push(n[M]):S.push({id:`s-gen-${Math.random()}`,weight:1,curve:{type:"linear",value:0}})}this.config?.onEnvelopeChange&&this.config.onEnvelopeChange(C,S)}else{const C=t.findIndex(O=>O.id===o),S=t[C-1],k=t[C+1],_=S?S.x:0,M=k?k.x:1,T=Math.max(_,Math.min(M,x)),P=t.map(O=>O.id===o?{...O,x:T,y:v}:O);this.config?.onEnvelopeChange&&this.config.onEnvelopeChange(P,n)}},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}})}render(){if(!this.config)return A``;const i=96;if(this.config.mode==="scope"){const r=this.config.autoRange?this.getDisplayRange():(this.config.range?.[1]??1)-(this.config.range?.[0]??0),s=this.config.autoRange?this.getDisplayAnchor():this.config.range?.[0]??0;let a,l;this.config.autoRange?this.isSigned?(a=s-r/2,l=s+r/2):(a=s,l=s+r):(a=this.config.range?.[0]??0,l=this.config.range?.[1]??1);const c=d=>{const u=(d-a)/(l-a);return i-Math.max(0,Math.min(1,u))*i},f=c(0),h=[];if(this.config.showGrid){const d=Math.max(Math.abs(a),Math.abs(l)),u=Math.ceil(Math.log2(d)),p=Math.floor(Math.log2(r))-4;for(let g=p;g<=u;g++){const m=Math.pow(2,g);m<=l&&m>=a&&h.push(c(m)),-m<=l&&-m>=a&&h.push(c(-m))}}return A`
          <svg viewBox="0 0 ${ue} 96" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid-x" width="24" height="96" patternUnits="userSpaceOnUse">
                        <path d="M 0 0 L 0 96" fill="none" class="grid-pattern" />
                    </pattern>
                    <pattern id="hash-pattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--accent-color)" stroke-width="4" opacity="0.1" />
                    </pattern>
                    ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?dt`
                        <clipPath id="clip-left">
                            <rect x="0" y="0" width="${this.config.cursor*ue}" height="96" />
                        </clipPath>
                        <clipPath id="clip-right">
                            <rect x="${this.config.cursor*ue}" y="0" width="${ue-this.config.cursor*ue}" height="96" />
                        </clipPath>
                    `:""}
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-x)" />
                ${h.map(d=>dt`<line class="grid" x1="0" y1="${d}" x2="${ue}" y2="${d}" />`)}
                <line class="zero-line" x1="0" y1="${f}" x2="${ue}" y2="${f}" />

                <!-- Curve Fills -->
                ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?this.pathData?dt`
                    <!-- Left (Solid) -->
                    <path d="${this.pathData} L ${ue} ${i} L 0 ${i} Z"
                          fill="var(--accent-color)" fill-opacity="0.2"
                          clip-path="url(#clip-left)" />

                    <!-- Right (Hashed) -->
                    <path d="${this.pathData} L ${ue} ${i} L 0 ${i} Z"
                          fill="url(#hash-pattern)"
                          clip-path="url(#clip-right)" />
                `:"":this.pathData?dt`
                    <!-- Default Fill if no cursor -->
                    <path d="${this.pathData} L ${ue} ${i} L 0 ${i} Z"
                          fill="var(--accent-color)" fill-opacity="0.1" />
                `:""}

                <!-- Curve Stroke -->
                <path class="curve" d="${this.pathData}" fill="none" stroke="#00ff88" stroke-width="2" vector-effect="non-scaling-stroke" />
          </svg>
        `}const e=this.segmentLayout,t=10,[n,o]=this.config.range||[0,1];return A`
            <svg viewBox="0 0 ${ue} 96" preserveAspectRatio="none"
                @pointerdown=${r=>this.handlePointerDown(r)}
                @pointermove=${r=>this.handlePointerMove(r)}
                @pointerleave=${()=>this.handlePointerLeave()}
                @dblclick=${r=>this.handleDoubleClick(r)}
            >
                <defs>
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" class="grid-pattern" />
                    </pattern>
                    <pattern id="hash-pattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--accent-color)" stroke-width="4" opacity="0.1" />
                    </pattern>
                    ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?dt`
                        <clipPath id="clip-left">
                            <rect x="0" y="0" width="${this.config.cursor*ue}" height="96" />
                        </clipPath>
                        <clipPath id="clip-right">
                            <rect x="${this.config.cursor*ue}" y="0" width="${ue-this.config.cursor*ue}" height="96" />
                        </clipPath>
                    `:""}
                    <linearGradient id="curveGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="var(--accent-color)" stop-opacity="0.2" />
                        <stop offset="100%" stop-color="var(--accent-color)" stop-opacity="0.0" />
                    </linearGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#grid)" />

                <!-- Axis Lines -->
                <line class="axis-line" x1="0" y1="${i/2}" x2="${ue}" y2="${i/2}" />

                <!-- Axis Lines -->
                <line class="axis-line" x1="0" y1="${i/2}" x2="${ue}" y2="${i/2}" />

                <!-- Segments (for non-envelope mode) -->
                ${this.config.envelopeNodes?"":e.map(r=>{const{segment:s,startX:a,endX:l}=r,c=r.index===this.hoveredSegmentIndex,f=r.index===this.hoveredSplitIndex;let h=0,d=!1;return s.curve.type==="exponential"&&(h=(1-(s.curve.value??0))/2*i,d=!0),dt`
                            <!-- Hover Highlight -->
                            ${c&&this.config?.interactive?dt`
                                <rect x="${a}" y="0" width="${l-a}" height="${i}"
                                    fill="var(--accent-color)" fill-opacity="0.05" pointer-events="none" />
                            `:""}

                            <!-- Segment Separator (if not last) -->
                            ${r.index<e.length-1?dt`
                                <line class="split-handle" x1="${l}" y1="0" x2="${l}" y2="${i}"
                                    style="${f?"opacity: 1; stroke-width: 2; stroke: var(--accent-color);":""}" />
                                <!-- Visual target matches resizeThreshold * 2 -->
                                <rect class="split-handle-target" x="${l-t}" y="0" width="${t*2}" height="${i}" />
                            `:""}

                            <!-- Parameter Handle -->
                            ${this.config?.interactive&&d?dt`
                                <g class="parameter-control">
                                    <!-- Vertical Sheer Bar (Fill from bottom) -->
                                    <rect class="parameter-bg" x="${a}" y="${h}" width="${l-a}" height="${i-h}" />

                                    <!-- Horizontal Solid Line -->
                                    <line class="parameter-line" x1="${a}" y1="${h}" x2="${l}" y2="${h}" />
                                </g>
                            `:""}
                        `})}

                <!-- Curve Fills -->
                ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?dt`
                    <!-- Left (Solid) -->
                    <path d="${this.pathData} L ${ue} ${i} L 0 ${i} Z"
                          fill="var(--accent-color)" fill-opacity="0.2"
                          clip-path="url(#clip-left)" />

                    <!-- Right (Hashed) -->
                    <path d="${this.pathData} L ${ue} ${i} L 0 ${i} Z"
                          fill="url(#hash-pattern)"
                          clip-path="url(#clip-right)" />
                `:dt`
                    <!-- Default Fill if no cursor -->
                    <path d="${this.pathData} L ${ue} ${i} L 0 ${i} Z"
                          fill="var(--accent-color)" fill-opacity="0.1" />
                `}

                <!-- Curve Stroke -->
                <path class="curve" d="${this.pathData}" fill="none" />

                <!-- Envelope Nodes (Render ON TOP) -->
                ${this.config.envelopeNodes?this.renderEnvelopeNodes(i,n,o):""}


                <!-- Cursor -->
                ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?(()=>{const r=this.config.cursor*ue,s=this.evaluateCurve(this.config.cursor),[a,l]=this.config.range||[0,1],c=(s-a)/(l-a),f=i-Math.max(0,Math.min(1,c))*i;return dt`
                        <line x1="${r}" y1="0" x2="${r}" y2="96" stroke="white" stroke-width="1" />
                        <circle cx="${r}" cy="${f}" r="3" fill="white" />
                    `})():""}
            </svg>
        `}evaluateEnvelopeAt(i){if(!this.config||!this.config.envelopeNodes||!this.config.segments)return 0;const{envelopeNodes:e,segments:t}=this.config;for(let n=0;n<e.length-1;n++){const o=e[n],r=e[n+1];if(i>=o.x&&i<=r.x){const s=t[n],a=r.x-o.x;if(a<=1e-6)return o.y;const l=(i-o.x)/a;let c=0;const f=s.curve;switch(f.type){case"exponential":const h=Math.pow(10,-(f.value??0));c=Math.pow(l,h);break;case"linear":c=l;break;case"step":const d=f.value??2;d<=1?c=0:c=Math.floor(l*d)/(d-1),l>=.999&&(c=1);break;case"sin":c=-(Math.cos(Math.PI*l)-1)/2;break;case"quad":c=l*l;break;default:c=l}return o.y+c*(r.y-o.y)}}return 0}handleNodeDoubleClick(i,e){if(!this.config?.interactive||!this.config.envelopeNodes)return;i.stopPropagation(),i.preventDefault();const{envelopeNodes:t}=this.config;if(e.id===t[0].id||e.id===t[t.length-1].id)return;const n=t.findIndex(s=>s.id===e.id);if(n===-1)return;const o=[...t];o.splice(n,1);const r=[...this.config.segments||[]];r.length>=n&&r.splice(n,1),this.config.onEnvelopeChange&&this.config.onEnvelopeChange(o,r)}handleDoubleClick(i){if(i.stopPropagation(),!this.config?.interactive||!this.config.envelopeNodes||!this.config.segments)return;const e=this.getBoundingClientRect(),t=i.clientX-e.left,n=i.clientY-e.top,o=e.width,r=e.height,s=t/o,[a,l]=this.config.range||[0,1],c=a+(r-n)/r*(l-a),f=this.evaluateEnvelopeAt(s),d=10/r*(l-a),{envelopeNodes:u,segments:p}=this.config;let g=-1;for(let _=0;_<u.length-1;_++)if(s>=u[_].x&&s<=u[_+1].x){g=_+1;break}if(g===-1)return;const m=Math.abs(c-f)<d;if(m&&i.altKey){let _=-1;for(let M=0;M<u.length-1;M++)if(s>=u[M].x&&s<=u[M+1].x){_=M;break}if(_!==-1){const M=[...p];M[_]={...M[_],curve:{type:"linear",value:0}},this.config.onEnvelopeChange&&this.config.onEnvelopeChange(u,M);return}}const b=m?f:c,y={id:`n - ${Date.now()} `,x:s,y:b},x=[...u];x.splice(g,0,y);const v=[...p],S={...v[g-1],id:`s - ${Date.now()} -A`},k={id:`s - ${Date.now()} -B`,weight:1,curve:{type:"linear"}};v.splice(g-1,1,S,k),this.config.onEnvelopeChange&&this.config.onEnvelopeChange(x,v)}};at.styles=[Fv,Se`
      :host {
        height: 96px;
        --grid-color: rgba(255, 255, 255, 0.05);
        --grid-size: 24px;
      }
      path.curve {
        fill: none;
        stroke: var(--accent-color, #ff4500);
        stroke-width: 2;
        pointer-events: none;
      }
      .parameter-control {
        cursor: ns-resize;
      }
      .parameter-bg {
        fill: var(--accent-color, #ff4500);
        opacity: 0.05;
      }
      .parameter-control:hover .parameter-bg {
        opacity: 0.15;
      }
      .parameter-line {
        stroke: var(--accent-color, #ff4500);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        opacity: 0.6;
      }
      .parameter-control:hover .parameter-line {
        opacity: 1;
        stroke-width: 2;
      }
      .split-handle {
        stroke: var(--text-muted, #aaa);
        stroke-width: 1;
        stroke-dasharray: 2 2;
        vector-effect: non-scaling-stroke;
        opacity: 0.5;
        cursor: col-resize;
      }
      .split-handle-target {
        fill: transparent;
        cursor: col-resize;
      }
      .split-handle-target:hover {
        fill: rgba(255, 255, 255, 0.1);
      }
    `];kt([U({attribute:!1})],at.prototype,"config",2);kt([U({type:Number})],at.prototype,"value",2);kt([U({type:Number})],at.prototype,"tick",2);kt([Tn],at.prototype,"totalWeight",1);kt([Tn],at.prototype,"segmentLayout",1);kt([Tn],at.prototype,"pathData",1);kt([F],at.prototype,"hoveredSegmentIndex",2);kt([F],at.prototype,"hoveredSplitIndex",2);kt([F],at.prototype,"selectedNodeId",2);kt([F],at.prototype,"hoveredNodeId",2);kt([q],at.prototype,"handlePointerMove",1);kt([q],at.prototype,"handlePointerLeave",1);at=kt([Ee("graph-widget")],at);const V1=async()=>(i,e)=>{const t=i.config.values||{},n=i.config.mode||t.mode||"D",o=Math.max(.001,t.attack??.1),r=Math.max(.001,t.decay??1),s=Math.max(0,Math.min(1,t.sustain??.7));let a=Math.max(.001,t.release??1);(n==="D"||n==="ADS")&&(a=r);const l=.3;let c=o,f=r,h=s;n==="D"&&(c=0,h=0);const d=c+f+l+a,u=Math.max(1,d),p=c/u,g=f/u,m=l/u,b=a/u;let y=[],x=[];n==="D"?(y=[{id:"peak",x:0,y:1},{id:"end",x:g,y:0}],x=[{id:"decay",weight:1,curve:{type:"linear"}}]):n==="ADS"?(y=[{id:"start",x:0,y:0},{id:"peak",x:p,y:1},{id:"sustain",x:p+g,y:h},{id:"release",x:p+g+m,y:h},{id:"end",x:p+g+m+b,y:0}],x=[{id:"attack",weight:1,curve:{type:"linear"}},{id:"decay",weight:1,curve:{type:"linear"}},{id:"hold",weight:1,curve:{type:"linear"}},{id:"release",weight:1,curve:{type:"linear"}}]):(y=[{id:"start",x:0,y:0},{id:"peak",x:p,y:1},{id:"sustain",x:p+g,y:h},{id:"release",x:p+g+m,y:h},{id:"end",x:p+g+m+b,y:0}],x=[{id:"attack",weight:1,curve:{type:"linear"}},{id:"decay",weight:1,curve:{type:"linear"}},{id:"hold",weight:1,curve:{type:"linear"}},{id:"release",weight:1,curve:{type:"linear"}}]);const v={mode:"curve",domain:[0,1],range:[0,1],envelopeNodes:y,segments:x,interactive:!0,onEnvelopeChange:(S,k)=>{S.sort((T,P)=>T.x-P.x);const _={},M=(T,P)=>(P.x-T.x)*u;if(n==="D"){const T=M(S[0],S[1]);_.decay=parseFloat(Math.max(.001,T).toFixed(3))}else if(n==="ADS"){const T=M(S[0],S[1]),P=M(S[1],S[2]),O=S[2].y;_.attack=parseFloat(Math.max(.001,T).toFixed(3)),_.decay=parseFloat(Math.max(.001,P).toFixed(3)),_.sustain=parseFloat(O.toFixed(3))}else{const T=M(S[0],S[1]),P=M(S[1],S[2]),O=M(S[3],S[4]),z=S[2].y;_.attack=parseFloat(Math.max(.001,T).toFixed(3)),_.decay=parseFloat(Math.max(.001,P).toFixed(3)),_.sustain=parseFloat(z.toFixed(3)),_.release=parseFloat(Math.max(.001,O).toFixed(3))}j.setNodeConfig(i.id,{...i.config.values,..._})}},C=_e.uiStates.get(i.id);if(C&&typeof C.phase=="number"){const{phase:S,time:k,value:_}=C;let M=0;n==="D"?_>0?v.cursor=g*(1-_):S===0?v.cursor=void 0:v.cursor=g:(S===1?M=k:S===2?M=c+k:S===3?M=c+f+k%l:S===4?M=c+f+l+k:M=-1,M>=0?v.cursor=Math.min(1,M/u):v.cursor=void 0)}return A`<graph-widget .config=${v} .value=${void 0} style="width: 100%; height: 100%; min-height: 96px;"></graph-widget>`};I({...Ul,ui:{...Ul.ui,body:V1,getBodyHeight:async()=>i=>120}});I({...Gl,ui:{...Gl.ui,body:()=>Oe(()=>import("./nodes.ui-C2LtZTtn.js"),[]).then(i=>i.MidiTriggerBodyRenderer),getBodyHeight:()=>Oe(()=>import("./nodes.ui-C2LtZTtn.js"),[]).then(i=>i.MidiTriggerBodyHeight)}});function F1(){const i=ee.getNodeType("nicepattern.magneto");i&&(i.ui={...i.ui||{},body:()=>Oe(()=>import("./magneto-editor-67PDQltL.js"),[]).then(t=>t.MagnetoEditorRenderer),getBodyHeight:()=>Promise.resolve(()=>272)});const e=ee.getNodeType("nicepattern.orthomod");e&&(e.ui={...e.ui||{},body:()=>Oe(()=>import("./orthomod-editor-C917s4ie.js"),[]).then(t=>t.OrthomodEditorRenderer),getBodyHeight:()=>Promise.resolve(()=>260)})}F1();function z1(){const i=ee.getNodeType("seq.sequencer");i&&(i.ui={...i.ui||{},body:()=>Oe(()=>import("./sequencer-editor-CSEXh6i8.js"),[]).then(e=>e.SequencerEditorRenderer),getBodyHeight:()=>Promise.resolve(()=>2*vn)})}z1();var j1=Object.getOwnPropertyDescriptor,H1=(i,e,t,n)=>{for(var o=n>1?void 0:n?j1(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(o)||o);return o};let Xl=class extends ct{render(){return _e.beatSyncManager.isMicActive?A`
      <div class="bpm-display" title="Detected BPM">
          ${_e.beatSyncManager.bestBpm.toFixed(1)}
      </div>
    `:null}};Xl.styles=Se`
    :host {
      display: block;
    }

    .bpm-display {
      font-size: 9px;
      color: var(--accent-color);
      /* background: rgba(255, 255, 255, 0.1); */
      border: 1px solid var(--accent-color);
      border-radius: 4px;
      padding: 2px 0;
      width: 32px;
      text-align: center;
      margin-top: -6px;
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: clip;
      cursor: default;
      font-family: 'JetBrains Mono', monospace;
    }
  `;Xl=H1([Ee("bpm-display")],Xl);var q1=Object.defineProperty,W1=Object.getOwnPropertyDescriptor,af=(i,e,t,n)=>{for(var o=n>1?void 0:n?W1(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&q1(e,t,o),o};let hr=class extends ct{constructor(){super(...arguments),this.activeTab=null,this.beatSyncDisposer=null}firstUpdated(){this.beatSyncDisposer=un(()=>({beat:_e.beatSyncManager.displayQuantizedBeat,active:_e.beatSyncManager.isMicActive}),({beat:i,active:e})=>{this.beatSyncIcon&&(e?this.beatSyncIcon.style.transform=`rotate(${i*90}deg)`:this.beatSyncIcon.style.transform="none")},{fireImmediately:!0})}disconnectedCallback(){super.disconnectedCallback(),this.beatSyncDisposer&&(this.beatSyncDisposer(),this.beatSyncDisposer=null)}render(){return A`
      <div
        class="icon ${this.activeTab==="workspace"?"active":""}"
        @click=${()=>this.switchTab("workspace")}
        title="Workspace"
      >
        <i class="la la-folder-open" style="font-size: 20px;"></i>
      </div>

      <div
        class="icon ${this.activeTab==="io"?"active":""}"
        @click=${()=>this.switchTab("io")}
        title="I/O"
      >
        <i class="la la-exchange-alt" style="font-size: 20px;"></i>
      </div>

      <div
        class="icon ${this.activeTab==="debug"?"active":""}"
        @click=${()=>this.switchTab("debug")}
        title="Debug"
      >
        <i class="la la-bug" style="font-size: 20px;"></i>
      </div>

      <div
        id="beatsync-icon"
        class="icon ${this.activeTab==="beatsync"?"active":""} ${_e.beatSyncManager.isMicActive?"running":""}"
        @click=${()=>this.switchTab("beatsync")}
        title="Audio Beat Sync"
      >
        <i class="la la-clock-o" style="font-size: 20px;"></i>
      </div>
      <bpm-display></bpm-display>

      <div class="spacer"></div>

      <div class="branding" title="nano-repatch">
        <i class="la la-microchip" style="font-size: 16px; color: #fff; transform: rotate(90deg);"></i>
        <span class="branding-text">nano-repatch</span>
      </div>
    `}switchTab(i){this.dispatchEvent(new CustomEvent("switch-tab",{detail:{tab:i},bubbles:!0,composed:!0}))}};hr.styles=[Qt,Se`
    :host {
      display: flex;
      flex-direction: column;
      width: 50px;
      background-color: var(--panel-bg);
      border-right: 1px solid var(--border-color);
      height: 100%;
      align-items: center;
      padding-top: 10px;
    }

    .icon {
      width: 32px;
      height: 32px;
      margin-bottom: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: var(--text-muted);
      transition: all 0.05s;
    }

    .icon:hover {
      background-color: var(--button-hover);
      color: var(--text-color);
    }

    .icon.active {
      background-color: var(--button-active);
      color: var(--accent-color);
      border-left: 3px solid var(--accent-color);
    }

    .icon.running {
      color: var(--accent-color);
    }

    svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .spacer {
      flex: 1;
    }

    .icon.disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }
    .branding {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 20px 0;
      opacity: 0.4;
      transition: opacity 0.05s;
      cursor: default;
    }

    .branding:hover {
      opacity: 0.8;
    }

    .branding-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      letter-spacing: 1px;
      color: #fff;
      font-weight: 500;
    }
  `];af([U({type:String})],hr.prototype,"activeTab",2);af([Bt("#beatsync-icon i")],hr.prototype,"beatSyncIcon",2);hr=af([Ee("app-sidebar")],hr);var U1=Object.defineProperty,G1=Object.getOwnPropertyDescriptor,xa=(i,e,t,n)=>{for(var o=n>1?void 0:n?G1(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&U1(e,t,o),o};let go=class extends Dt{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.hasContent=!1}handleSlotChange(i){const t=i.target.assignedNodes({flatten:!0});this.hasContent=t.some(n=>n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!=="")}render(){return A`
      <button ?disabled=${this.disabled}>
        ${this.icon?A`<i class="las ${this.icon}"></i>`:""}
        <span class="${this.hasContent?"":"hidden"}">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
      </button>
    `}};go.styles=[qc(hp),Se`
    :host {
      display: inline-block;
    }

    button {
      background-color: var(--button-bg);
      color: var(--text-color);
      border: 1px solid var(--border-color);
      border-radius: 4px;
      padding: 8px 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    button:hover:not(:disabled) {
      background-color: var(--button-hover);
    }

    button:active:not(:disabled) {
      background-color: var(--button-active);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    i {
      font-size: 16px;
    }

    span {
      margin-left: 8px;
    }

    span.hidden {
        display: none;
    }
  `];xa([U({type:String})],go.prototype,"icon",2);xa([U({type:Boolean})],go.prototype,"disabled",2);xa([nt()],go.prototype,"hasContent",2);go=xa([Ee("ui-button")],go);var Y1=Object.defineProperty,K1=Object.getOwnPropertyDescriptor,mg=(i,e,t,n)=>{for(var o=n>1?void 0:n?K1(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&Y1(e,t,o),o};let js=class extends Dt{constructor(){super(...arguments),this.title=""}render(){return A`
      <header>
        <span>${this.title}</span>
        <slot name="header-actions"></slot>
      </header>
      <div class="content">
        <slot></slot>
      </div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    `}};js.styles=[...Qt,Se`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--panel-bg);
        color: var(--text-color);
        overflow: hidden;
      }

      header {
        background-color: var(--panel-header-bg);
        padding: 10px;
        font-weight: bold;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .content {
        flex-grow: 1;
        overflow-y: auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .actions {
        padding: 10px;
        border-top: 1px solid var(--border-color);
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
      }
    `];mg([U({type:String})],js.prototype,"title",2);js=mg([Ee("ui-panel")],js);var X1=Object.defineProperty,J1=Object.getOwnPropertyDescriptor,lf=(i,e,t,n)=>{for(var o=n>1?void 0:n?J1(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&X1(e,t,o),o};let dr=class extends ct{constructor(){super(...arguments),this.isCreatingGraph=!1,this.newGraphName=""}render(){const{files:i,currentGraphId:e}=mi;return A`
      <ui-panel title="Workspace">
        <ui-button slot="header-actions" icon="la-sync" @click=${()=>mi.refreshFiles()} title="Refresh"></ui-button>

        <div class="ui-list">
          ${i.map(t=>A`
            <div
              class="ui-list-item ${t.name===e?"selected":""}"
              @click=${()=>mi.openFile(t.name)}
            >
              <div style="display: flex; align-items: center; gap: 8px;">
                <i class="la la-file file-icon"></i>
                <span>${t.name}</span>
              </div>
            </div>
          `)}
        </div>

        <div slot="actions" style="display: flex; gap: 5px; width: 100%;">
          ${this.isCreatingGraph?A`
            <div class="input-group">
              <input
                type="text"
                .value=${this.newGraphName}
                @input=${t=>this.newGraphName=t.target.value}
                @keydown=${this.handleNewGraphKeydown}
                placeholder="Graph Name"
                autofocus
              />
              <ui-button icon="la-check" @click=${this.confirmNewGraph}></ui-button>
              <ui-button icon="la-times" @click=${this.cancelNewGraph}></ui-button>
            </div>
          `:A`
            <ui-button icon="la-folder-open" @click=${()=>mi.openFolder()}>Open Folder</ui-button>
            <ui-button icon="la-plus" @click=${()=>{this.isCreatingGraph=!0,this.newGraphName=""}}>New Graph</ui-button>
          `}
        </div>
      </ui-panel>
    `}async confirmNewGraph(){if(this.newGraphName)try{const i=this.newGraphName.replace(/\./g,"/");await mi.createNewGraph(i),this.isCreatingGraph=!1,this.newGraphName=""}catch(i){alert("Failed to create graph: "+i)}}cancelNewGraph(){this.isCreatingGraph=!1,this.newGraphName=""}handleNewGraphKeydown(i){i.key==="Enter"?this.confirmNewGraph():i.key==="Escape"&&this.cancelNewGraph(),i.stopPropagation()}};dr.styles=[...Qt,Se`
      :host {
        display: block;
        height: 100%;
      }

      .file-icon {
        font-size: 1.2em;
      }

      .input-group {
        display: flex;
        gap: 5px;
        align-items: center;
        width: 100%;
      }

      .input-group input {
        flex: 1;
        background: var(--input-bg);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        padding: 6px;
        border-radius: 4px;
        min-width: 0;
      }
      .empty-state {
        padding: 20px;
        text-align: center;
        color: #888;
        font-size: 12px;
      }
  `];lf([nt()],dr.prototype,"isCreatingGraph",2);lf([nt()],dr.prototype,"newGraphName",2);dr=lf([Ee("workspace-panel")],dr);var Q1=Object.defineProperty,Z1=Object.getOwnPropertyDescriptor,bg=(i,e,t,n)=>{for(var o=n>1?void 0:n?Z1(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&Q1(e,t,o),o};let Hs=class extends ct{constructor(){super(...arguments),this.target=null,this.activeSubscriptions=new Set,this.handleParameterUpdate=i=>{}}updated(i){i.has("target")&&this.updateSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this.clearSubscriptions()}clearSubscriptions(){for(const i of this.activeSubscriptions)pt.unsubscribe(i,this);this.activeSubscriptions.clear()}updateSubscriptions(){if(this.clearSubscriptions(),!this.target)return;const i=[];this.collectParameters(this.target,i);for(const e of i)pt.subscribe(e.path,this,this.handleParameterUpdate),this.activeSubscriptions.add(e.path)}collectParameters(i,e){if(i instanceof Jn){e.push(i);return}i.params&&Array.isArray(i.params)&&i.params.forEach(t=>this.collectParameters(t,e)),i.effects&&Array.isArray(i.effects)&&i.effects.forEach(t=>this.collectParameters(t,e))}render(){return this.target?this.target instanceof fp?this.renderComposition(this.target):this.target instanceof cp?this.renderLayer(this.target):this.target instanceof lp?this.renderClip(this.target):this.target instanceof ya?this.renderEffect(this.target):A``:A``}renderComposition(i){return A`
      <div class="inspector-section">
        <h3>Composition</h3>
        <div class="parameters">
          ${i.params.map(e=>this.renderParameter(e))}
        </div>
      </div>
      ${this.renderEffects(i.effects)}
    `}renderLayer(i){return A`
      <div class="inspector-section">
        <h3>${i.name}</h3>
        <div class="parameters">
          ${i.params.map(e=>this.renderParameter(e))}
        </div>
      </div>
      ${this.renderEffects(i.effects)}
    `}renderClip(i){return A`
      <div class="inspector-section">
        <h3>${i.name}</h3>
        ${i.thumbnail?A`<img class="thumbnail" src="http://127.0.0.1:8080${i.thumbnail}">`:""}
        <div class="parameters">
          ${i.params.map(e=>this.renderParameter(e))}
        </div>
      </div>
      ${this.renderEffects(i.effects)}
    `}renderEffect(i){return A`
      <div class="inspector-section">
        <h3>${i.name}</h3>
        <div class="parameters">
          ${i.params.map(e=>this.renderParameter(e))}
        </div>
      </div>
    `}renderEffects(i){return i.length===0?"":A`
      <div class="effects-section">
        ${i.map(e=>A`
          <details open>
            <summary>${e.name}</summary>
            <div class="parameters">
              ${e.params.map(t=>this.renderParameter(t))}
            </div>
          </details>
        `)}
      </div>
    `}renderParameter(i){let e=A`<span class="value">${i.value}</span>`;switch(i.type){case"ParamRange":e=this.renderRange(i);break;case"ParamBoolean":e=this.renderBoolean(i);break;case"ParamChoice":e=this.renderChoice(i);break;case"ParamColor":e=this.renderColor(i);break;case"ParamEvent":e=this.renderEvent(i);break;case"ParamString":case"ParamText":e=this.renderString(i);break}return A`
      <div
        class="parameter-row"
        draggable="true"
        @dragstart=${t=>this.handleDragStart(t,i)}
        @dblclick=${t=>this.handleDoubleClick(t,i)}
      >
        <span class="label" title="${i.path}">${i.name}</span>
        ${e}
      </div>
    `}handleDoubleClick(i,e){const{x:t,y:n}=E.getViewportCenterGridCoordinates(),o=E.findFreeSpace(t,n);j.createNode("resolume.output",o.x,o.y,{path:e.path})}renderRange(i){const e=typeof i.value=="number"?Math.min(100,Math.max(0,i.value*100)):0;return A`
      <div class="range-control">
        <div class="range-track">
          <div class="range-fill" style="width: ${e}%"></div>
        </div>
        <span class="range-value">${Number(i.value).toFixed(2)}</span>
      </div>
    `}renderBoolean(i){return A`
      <div class="boolean-control ${i.value?"active":""}">
        ${i.value?"On":"Off"}
      </div>
    `}renderChoice(i){return A`
      <div class="choice-control">
        ${i.value} <span class="dropdown-arrow">▼</span>
      </div>
    `}renderColor(i){return A`
      <div class="color-control">
        <div class="color-preview" style="background-color: ${i.value}"></div>
        <span class="color-value">${i.value}</span>
      </div>
    `}renderEvent(i){return A`
      <button class="event-button">Trigger</button>
    `}renderString(i){return A`<span class="value string-value">${i.value}</span>`}handleDragStart(i,e){i.dataTransfer&&(i.dataTransfer.setData("application/json",JSON.stringify({type:"resolume:parameter",path:e.path,name:e.name})),i.dataTransfer.effectAllowed="copy")}};Hs.styles=[Se`
      :host {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 11px;
        color: #ddd;
        background-color: transparent;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
      }

      h3 {
        margin: 0;
        padding: 4px 8px;
        background-color: #2d5e4c; /* Teal header */
        color: #fff;
        font-size: 11px;
        font-weight: bold;
        text-transform: uppercase;
        border-bottom: 1px solid #1a1a1a;
        display: flex;
        align-items: center;
      }

      h3::before {
        content: '▼';
        font-size: 8px;
        margin-right: 6px;
        opacity: 0.8;
      }

      .inspector-section {
        margin-bottom: 2px;
      }

      .parameters {
        padding: 4px 0;
        background-color: #262626;
      }

      .parameter-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2px 8px;
        min-height: 18px;
      }

      .parameter-row:hover {
        background-color: #333;
      }

      .label {
        color: #aaa;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 10px;
      }

      .value {
        color: #40a0ff; /* Blue for values */
        font-family: monospace;
      }

      .effects-section h4 {
        margin: 0;
        padding: 4px 8px;
        background-color: #2d5e4c;
        color: #fff;
        font-size: 11px;
        font-weight: normal;
        cursor: pointer;
      }

      details {
        background-color: #262626;
        margin-bottom: 1px;
      }

      summary {
        padding: 4px 8px;
        cursor: pointer;
        background-color: #333;
        color: #eee;
        font-weight: bold;
        list-style: none;
      }

      summary::-webkit-details-marker {
        display: none;
      }

      summary::before {
        content: '▶';
        font-size: 8px;
        margin-right: 6px;
        display: inline-block;
      }

      details[open] summary::before {
        transform: rotate(90deg);
      }

      details[open] summary {
        background-color: #2d5e4c;
      }

      img.thumbnail {
        width: 100%;
        height: auto;
        display: block;
        border-bottom: 1px solid #444;
      }

      /* Rich Controls */
      .range-control {
        flex: 2;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .range-track {
        flex: 1;
        height: 4px;
        background-color: #444;
        border-radius: 2px;
        position: relative;
        overflow: hidden;
      }

      .range-fill {
        height: 100%;
        background-color: #40a080; /* Teal accent */
      }

      .range-value {
        font-family: monospace;
        color: #40a0ff;
        width: 40px;
        text-align: right;
      }

      .boolean-control {
        padding: 2px 8px;
        background-color: #333;
        border-radius: 2px;
        cursor: pointer;
        font-size: 10px;
        text-transform: uppercase;
      }

      .boolean-control.active {
        background-color: #40a080;
        color: #fff;
      }

      .choice-control {
        background-color: #333;
        padding: 2px 6px;
        border-radius: 2px;
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
      }

      .dropdown-arrow {
        font-size: 8px;
        opacity: 0.7;
      }

      .color-control {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .color-preview {
        width: 12px;
        height: 12px;
        border-radius: 2px;
        border: 1px solid #555;
      }

      .event-button {
        background-color: #444;
        border: none;
        color: #ddd;
        padding: 2px 8px;
        border-radius: 2px;
        cursor: pointer;
        font-size: 10px;
      }

      .event-button:hover {
        background-color: #555;
      }

      .event-button:active {
        background-color: #40a080;
      }
    `];bg([U({attribute:!1})],Hs.prototype,"target",2);Hs=bg([Ee("resolume-inspector")],Hs);class Qa{constructor(e){this.target=e}get path(){return this.target.path}renderInspectorContent(){return A`<resolume-inspector .target=${this.target}></resolume-inspector>`}}var ex=Object.getOwnPropertyDescriptor,tx=(i,e,t,n)=>{for(var o=n>1?void 0:n?ex(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(o)||o);return o};let Jl=class extends ct{render(){return A`
      <div class="tab-header">I/O Devices</div>
      <div class="container">
        <div class="section">
          <div class="section-header">Resolume Arena</div>
          <div class="resolume-status">
            <div class="status ${pt.isConnected?"connected":""}"></div>
            <span>${pt.isConnected?"Connected":"Disconnected"}</span>
            <ui-button
              @click=${this.toggleResolume}
              ?disabled=${pt.isConnected}
              icon="la-plug"
            >
              ${pt.isConnected?"Connected":"Connect"}
            </ui-button>
          </div>
          ${pt.isConnected?this.renderResolumeContent():""}
        </div>

        <div class="section midi-section">
          <div class="section-header">MIDI Devices</div>
          ${this.renderMidiSection()}
        </div>
      </div>
    `}toggleResolume(){pt.isConnected?(pt.disconnect(),_e.sendResolumeControl("disconnect"),E.setEnableResolumeIO(!1)):(pt.connect().then(()=>{E.setEnableResolumeIO(pt.isConnected)}),_e.sendResolumeControl("connect"))}renderResolumeContent(){const i=pt.state,e=E.observableState.selection;let t;for(const n of i.layers)if(e.has(n.path)){t=n;break}if(!t)for(const n of i.layers){for(const o of n.clips)if(e.has(o.path)){t=n;break}if(t)break}return A`
      <div class="resolume-container">
        <div class="ui-list">
          <div
            class="ui-list-item ${e.has(i.path)?"selected":""}"
            @click=${()=>E.defineSelectable(new Qa(i)).select()}
          >
            <strong>Composition</strong>
          </div>

          ${i.layers.map(n=>{const o=i.layers.indexOf(n)+1,r=n.name.replace("#",o.toString());return A`
              <div
                class="ui-list-item ${e.has(n.path)?"selected":""}"
                @click=${()=>E.defineSelectable(new Qa(n)).select()}
              >
                ${r}
              </div>
            `})}
        </div>

        ${t?A`
          <div class="clips-grid">
            ${t.clips.map(n=>this.renderClipCard(n))}
          </div>
        `:""}
      </div>
    `}renderClipCard(i){const e=E.observableState.selection.has(i.path),t=i.thumbnail?`http://127.0.0.1:8080${i.thumbnail}`:"";return A`
      <div
        class="clip-card ${e?"selected":""}"
        @click=${()=>E.defineSelectable(new Qa(i)).select()}
      >
        <div class="clip-thumb" style="background-image: url('${t}')"></div>
        <div class="clip-name">${i.name}</div>
      </div>
    `}renderMidiSection(){const{state:i}=kn;return A`
      <div class="midi-devices">
        ${Array.from(i.devices.values()).map(e=>this.renderDevice(e))}
      </div>
      <div class="midi-events">
        ${i.recentEvents.map(e=>this.renderMidiEvent(e))}
      </div>
    `}renderDevice(i){const e=kn.state.selectedDeviceIds.has(i.id);return A`
      <div
        class="chip ${e?"selected":""} ${i.state==="disconnected"?"disconnected":""}"
        @click=${()=>kn.state.toggleDeviceSelection(i.id)}
      >
        ${i.name}
      </div>
    `}renderMidiEvent(i){const e=i.type==="cc"?`CC ${i.cc}`:`Note ${i.note}`,t=i.type==="note_off"?"Off":i.type==="note_on"?"On":i.value;return A`
      <div
        class="event-card"
        draggable="true"
        @dragstart=${n=>this.handleMidiDragStart(n,i)}
      >
        <div class="event-info">
          <span class="event-type">Ch ${i.channel}</span>
          <span>${e}</span>
        </div>
        <div class="event-value">${t}</div>
      </div>
    `}handleMidiDragStart(i,e){if(!i.dataTransfer)return;let t="",n={};e.type==="cc"?(t="midi_cc",n={channel:e.channel,cc:e.cc,deviceId:e.deviceId}):(t="midi_note",n={channel:e.channel,note:e.note,deviceId:e.deviceId}),i.dataTransfer.setData("application/json",JSON.stringify({type:t,config:n})),i.dataTransfer.effectAllowed="copy"}};Jl.styles=[...Qt,Se`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--panel-bg);
        overflow: hidden;
      }

      .tab-header {
        padding: 10px 15px;
        font-weight: bold;
        font-size: 1.1em;
        border-bottom: 1px solid var(--border-color);
        background-color: var(--panel-header-bg);
        flex-shrink: 0;
      }

      .container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 20px;
        flex: 1;
        overflow-y: auto;
      }

      .section {
        display: flex;
        flex-direction: column;
      }

      .section-header {
        font-weight: bold;
        margin-bottom: 10px;
        border-bottom: 1px solid var(--border-color);
        padding: 5px 15px;
        color: var(--text-muted);
      }

      .resolume-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .composition-list {
        flex: 0 0 250px;
        border-right: 1px solid var(--border-color);
        overflow-y: auto;
        padding-right: 10px;
      }

      .clips-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;
        align-content: start;
        padding: 5px;
        border-top: 1px solid var(--border-color);
        margin-top: 10px;
        padding-top: 15px;
      }

      .list-item {
        padding: 8px;
        cursor: pointer;
        border-radius: 4px;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .list-item:hover {
        background-color: var(--button-hover);
      }

      .list-item.selected {
        background-color: var(--selection-color);
        border: 1px solid var(--selection-border);
        color: var(--text-color);
      }

      .clip-card {
        background-color: var(--input-bg);
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        aspect-ratio: 4/3;
        border: 2px solid transparent;
      }

      .clip-card:hover {
        border-color: var(--text-muted);
      }

      .clip-card.selected {
        border-color: var(--accent-color);
      }

      .clip-thumb {
        flex: 1;
        background-color: #000;
        background-size: cover;
        background-position: center;
      }

      .clip-name {
        padding: 5px;
        font-size: 0.8em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: rgba(0,0,0,0.5);
      }

      .resolume-status {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        padding: 0 15px;
      }

      .status {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #555;
      }

      .status.connected {
        background-color: var(--port-connected);
        box-shadow: 0 0 5px var(--port-connected);
      }

      .midi-section {
        flex: 0 0 auto;
        border-top: 1px solid var(--border-color);
        padding-top: 20px;
        margin-top: 10px;
      }

      .midi-devices {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 10px;
        padding: 0 15px;
      }



      .midi-events {
        display: flex;
        flex-direction: column;
        gap: 5px;
        max-height: 200px;
        overflow-y: auto;
        padding: 0 15px;
      }

      .event-card {
        background-color: var(--input-bg);
        padding: 8px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: grab;
        border: 1px solid transparent;
      }

      .event-card:hover {
        border-color: var(--border-color);
      }

      .event-info {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .event-type {
        font-size: 0.8em;
        color: var(--text-muted);
        background-color: rgba(0,0,0,0.2);
        padding: 2px 4px;
        border-radius: 3px;
      }

      .event-value {
        font-family: monospace;
        font-weight: bold;
      }
    `];Jl=tx([Ee("io-tab")],Jl);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yg={ATTRIBUTE:1,CHILD:2},vg=i=>(...e)=>({_$litDirective$:i,values:e});let wg=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=vg(class extends wg{constructor(i){var e;if(super(i),i.type!==yg.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter((e=>i[e])).join(" ")+" "}update(i,[e]){var t,n;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((r=>r!==""))));for(const r in e)e[r]&&!(!((t=this.nt)===null||t===void 0)&&t.has(r))&&this.it.add(r);return this.render(e)}const o=i.element.classList;this.it.forEach((r=>{r in e||(o.remove(r),this.it.delete(r))}));for(const r in e){const s=!!e[r];s===this.it.has(r)||!((n=this.nt)===null||n===void 0)&&n.has(r)||(s?(o.add(r),this.it.add(r)):(o.remove(r),this.it.delete(r)))}return Xn}});function xg(i){return i?i.kind==="record"&&i.hint||i.kind==="array"&&i.hint?i.hint:i.kind==="atomic"?i.type:i.kind==="array"?`${xg(i.element)}[]`:i.kind==="record"?"record":i.kind:"unknown"}function Ql(i,e,t){return i==null?A`<span class=${zt({chip:!0,code:!0,...t?.extraClasses})}>null</span>`:e?.kind==="record"&&e.hint==="midi"?A`<span class=${zt({chip:!0,code:!0,midi:!0,...t?.extraClasses})}>${Sg(i)}</span>`:e?.kind==="array"&&e.hint==="midi-stream"?nx(i,t):e?.kind==="array"&&e.hint==="step-sequence"?ix(i,t):typeof i=="number"?A`<span class=${zt({chip:!0,code:!0,...t?.extraClasses})}>${i.toFixed(4)}</span>`:typeof i=="string"?A`<span class=${zt({chip:!0,code:!0,...t?.extraClasses})}>"${i}"</span>`:Array.isArray(i)?A`<span class=${zt({chip:!0,code:!0,vector:!0,...t?.extraClasses})}>vector(${i.length})</span>`:typeof i=="object"?A`<span class=${zt({chip:!0,code:!0,struct:!0,...t?.extraClasses})}>struct</span>`:A`<span class=${zt({chip:!0,code:!0,...t?.extraClasses})}>${String(i)}</span>`}function cf(i){if(i&&typeof i=="object"&&"fields"in i){const e={};for(const[t,n]of Object.entries(i.fields))e[t]=cf(n);return e}return i}function Sg(i){const e=cf(i);if(e.type==="cc")return`cc${e.cc}:${(e.value/127).toFixed(2)}`;if(e.type==="note_on")return`${Lo(e.note)}:on`;if(e.type==="note_off")return`${Lo(e.note)}:off`;const t=e.status&240;return t===176?`cc${e.data1}:${(e.data2/127).toFixed(2)}`:t===144?e.data2>0?`${Lo(e.data1)}:on`:`${Lo(e.data1)}:off`:t===128?`${Lo(e.data1)}:off`:`midi(${e.type||(t?t.toString(16):"?")})`}function Lo(i){const e=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],t=Math.floor(i/12)-1;return`${e[i%12]}${t}`}function nx(i,e){if(!i||i.length===0)return A`<span class=${zt({chip:!0,code:!0,"midi-stream":!0,empty:!0,...e?.extraClasses})}>[]</span>`;const t=i.slice(-3).map(Sg).join(", ");return A`<span class=${zt({chip:!0,code:!0,"midi-stream":!0,...e?.extraClasses})}>[${t}]</span>`}function ix(i,e){if(!i||!Array.isArray(i))return A`<span class=${zt({chip:!0,...e?.extraClasses})}>invalid seq</span>`;const t=i.map((n,o)=>{const r=cf(n),s=r.noteIndex!==null&&r.noteIndex!==void 0,a=r.velocity??0,l=r.hold,c=s?Math.max(20,a*100):100;return A`
      <div class="step ${s?"active":""} ${l?"hold":""}"
           style="
             height: ${s?c:20}%;
             background-color: ${s?"var(--accent-color)":"rgba(255, 255, 255, 0.1)"};
             opacity: ${s?1:.5};
           "
           title="Step ${o}: ${s?`Note ${r.noteIndex}, Vel ${a.toFixed(2)}`:"Rest"}"
      ></div>
    `});return A`
    <div class="step-seq-viz">
      ${t}
    </div>
  `}var ox=Object.getOwnPropertyDescriptor,rx=(i,e,t,n)=>{for(var o=n>1?void 0:n?ox(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(o)||o);return o};let Zl=class extends ct{constructor(){super(...arguments),this.midiCache=new Map}render(){const i=_e.stats,e=Array.from(_e.outputs.entries());return A`
      <div class="header" style="display: flex; justify-content: space-between; align-items: center;">
        <span>Debug Output</span>
        <label style="display: flex; align-items: center; cursor: pointer; font-size: 10px; text-transform: none; color: #888; user-select: none;">
          <input
            type="checkbox"
            .checked=${E.observableState.localSettings.showDebugValues}
            @change=${t=>E.setShowDebugValues(t.target.checked)}
            style="margin-right: 4px;"
          >
          Show on Graph
        </label>
      </div>
      <div class="stats">
        Last Update: ${i.nodeCount} nodes in ${i.executionTime.toFixed(2)}ms
      </div>
      <div class="output-list">
        ${e.map(([t,n])=>this.renderNodeOutput(t,n))}
      </div>
    `}renderNodeOutput(i,e){let t=i,n="";i.endsWith("-virtual-value")&&(t=i.replace("-virtual-value",""),n=" (Virtual)");const o=j.getState().graph.inner.nodes[t],r=o?ee.get(o.config.typeId):void 0;r&&r.kind==="primitive"&&ee.get(o.config.typeId);const s=o?ee.getNodeType(o.config.typeId):void 0,a=o?o.config.name||o.config.typeId:i,l=o?o.config.typeId:"Unknown";return A`
      <div class="node-item">
        <div class="node-header">
          <span class="node-name">${a}${n}</span>
          <span class="node-type">${l}</span>
        </div>
        ${this.renderValues(e,s,t)}
      </div>
    `}renderValues(i,e,t){if(!i)return A`<div class="value-row"><span class="chip code">null</span></div>`;const n=[];if(i.fields)for(const[o,r]of Object.entries(i.fields)){let s;if(t){const c=E.observableState.inferredNodeTypes.get(t);c&&c.outputs&&c.outputs.kind==="record"&&c.outputs.fields&&o in c.outputs.fields&&(s=c.outputs.fields[o])}if(!s&&e&&e.outputs){const c=e.outputs.find(f=>f.name===o);c&&(s=c.type)}let a=r,l=!1;if(s?.kind==="array"&&s.hint==="midi-stream"&&t){const c=`${t}:${o}`,f=r;if(f&&f.length>0)this.midiCache.set(c,f);else{const h=this.midiCache.get(c);h&&(a=h,l=!0)}}n.push(A`
          <div class="value-row">
            <span class="field-name">${o}:</span>
            <span class="type-hint">${xg(s)}</span>
            ${Ql(a,s,{extraClasses:{cached:l}})}
          </div>
        `)}return i.untagged&&Array.isArray(i.untagged)&&i.untagged.forEach((o,r)=>{n.push(A`
          <div class="value-row">
            <span class="field-name">[${r}]:</span>
            ${Ql(o)}
          </div>
        `)}),n.length===0?A`<div class="value-row" style="color: #666; font-style: italic;">No output</div>`:n}};Zl.styles=[Qt,Se`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--panel-bg);
        color: var(--text-color);
        font-family: 'Inter', sans-serif;
        overflow: hidden;
      }

      .header {
        padding: 10px;
        background-color: var(--panel-header-bg);
        border-bottom: 1px solid var(--border-color);
        font-size: 12px;
        font-weight: 600;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .stats {
        padding: 10px;
        font-size: 12px;
        color: var(--text-muted);
        border-bottom: 1px solid var(--border-color);
      }

      .output-list {
        flex: 1;
        overflow-y: auto;
        padding: 10px;
      }

      .node-item {
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid #333;
      }

      .node-item:last-child {
        border-bottom: none;
      }

      .node-header {
        display: flex;
        align-items: center;
        margin-bottom: 6px;
      }

      .node-name {
        font-weight: 600;
        color: #eee;
        font-size: 13px;
        margin-right: 8px;
      }

      .node-type {
        font-size: 11px;
        color: #666;
        background: #1e1e1e;
        padding: 2px 6px;
        border-radius: 4px;
      }

      .value-row {
        display: flex;
        align-items: center;
        margin-top: 4px;
        font-size: 12px;
      }

      .field-name {
        color: #888;
        margin-right: 6px;
        min-width: 40px;
      }

      .field-name {
        color: #888;
        margin-right: 6px;
        min-width: 40px;
      }

      .type-hint {
        font-size: 10px;
        color: #555;
        margin-right: 6px;
        font-family: 'JetBrains Mono', monospace;
      }
    `];Zl=rx([Ee("debug-tab")],Zl);function Ro(i,e,t){return i*(1-t)+e*t}function Ur(i){return Math.max(0,Math.min(1,i))}const Gr={lcenter:.4,lrange:.1,scenter:.8,srange:.1};function qs(i,e){const t=Gr.lcenter,n=Gr.lrange,o=Gr.scenter,r=Gr.srange,s=sx(i)*22695477+1|0,a=(s>>0&255|0)/255,l=(s>>8&255|0)/255,c=(s>>16&255|0)/255,f=1/6,h=Ur(1-Math.abs(a-f)*4),d=2/3,u=Ur(1-Math.abs(a-d)*8);let p=a,g=Ur(Ro(o-r,o+r,l)),m=Ur(Ro(t-n,t+n,c));return m=Ro(m,m*m,h*.25),m=Ro(m,Math.sqrt(m),u*.25),g=Ro(g,Math.sqrt(g),h),`hsl(${(p*360).toFixed(0)} ${(g*100).toFixed(0)} ${(m*100).toFixed(0)})`}function sx(i){let e=0;for(let t=0,n=i.length;t<n;t++){let o=i.charCodeAt(t);e=(e<<5)-e+o,e|=0}return e}function ax(i,e){if(i===void 0)return e;const t=parseFloat(i);return Number.isNaN(t)?e:t}function lx(i){const e=i.composedPath()[0]||i.target;return e?e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable:!1}let ec=[],kg=[];(()=>{let i="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e=>e?parseInt(e,36):1);for(let e=0,t=0;e<i.length;e++)(e%2?kg:ec).push(t=t+i[e])})();function cx(i){if(i<768)return!1;for(let e=0,t=ec.length;;){let n=e+t>>1;if(i<ec[n])t=n;else if(i>=kg[n])e=n+1;else return!0;if(e==t)return!1}}function Ph(i){return i>=127462&&i<=127487}const Th=8205;function fx(i,e,t=!0,n=!0){return(t?Cg:hx)(i,e,n)}function Cg(i,e,t){if(e==i.length)return e;e&&Ag(i.charCodeAt(e))&&_g(i.charCodeAt(e-1))&&e--;let n=Za(i,e);for(e+=Dh(n);e<i.length;){let o=Za(i,e);if(n==Th||o==Th||t&&cx(o))e+=Dh(o),n=o;else if(Ph(o)){let r=0,s=e-2;for(;s>=0&&Ph(Za(i,s));)r++,s-=2;if(r%2==0)break;e+=2}else break}return e}function hx(i,e,t){for(;e>0;){let n=Cg(i,e-2,t);if(n<e)return n;e--}return 0}function Za(i,e){let t=i.charCodeAt(e);if(!_g(t)||e+1==i.length)return t;let n=i.charCodeAt(e+1);return Ag(n)?(t-55296<<10)+(n-56320)+65536:t}function Ag(i){return i>=56320&&i<57344}function _g(i){return i>=55296&&i<56320}function Dh(i){return i<65536?1:2}class ie{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,n){[e,t]=mo(this,e,t);let o=[];return this.decompose(0,e,o,2),n.length&&n.decompose(0,n.length,o,3),this.decompose(t,this.length,o,1),sn.from(o,this.length-(t-e)+n.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=mo(this,e,t);let n=[];return this.decompose(e,t,n,0),sn.from(n,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),n=this.length-this.scanIdentical(e,-1),o=new Go(this),r=new Go(e);for(let s=t,a=t;;){if(o.next(s),r.next(s),s=0,o.lineBreak!=r.lineBreak||o.done!=r.done||o.value!=r.value)return!1;if(a+=o.value.length,o.done||a>=n)return!0}}iter(e=1){return new Go(this,e)}iterRange(e,t=this.length){return new Mg(this,e,t)}iterLines(e,t){let n;if(e==null)n=this.iter();else{t==null&&(t=this.lines+1);let o=this.line(e).from;n=this.iterRange(o,Math.max(o,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new Ig(n)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?ie.empty:e.length<=32?new Te(e):sn.from(Te.split(e,[]))}}class Te extends ie{constructor(e,t=dx(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,n,o){for(let r=0;;r++){let s=this.text[r],a=o+s.length;if((t?n:a)>=e)return new ux(o,a,n,s);o=a+1,n++}}decompose(e,t,n,o){let r=e<=0&&t>=this.length?this:new Te(Lh(this.text,e,t),Math.min(t,this.length)-Math.max(0,e));if(o&1){let s=n.pop(),a=ws(r.text,s.text.slice(),0,r.length);if(a.length<=32)n.push(new Te(a,s.length+r.length));else{let l=a.length>>1;n.push(new Te(a.slice(0,l)),new Te(a.slice(l)))}}else n.push(r)}replace(e,t,n){if(!(n instanceof Te))return super.replace(e,t,n);[e,t]=mo(this,e,t);let o=ws(this.text,ws(n.text,Lh(this.text,0,e)),t),r=this.length+n.length-(t-e);return o.length<=32?new Te(o,r):sn.from(Te.split(o,[]),r)}sliceString(e,t=this.length,n=`
`){[e,t]=mo(this,e,t);let o="";for(let r=0,s=0;r<=t&&s<this.text.length;s++){let a=this.text[s],l=r+a.length;r>e&&s&&(o+=n),e<l&&t>r&&(o+=a.slice(Math.max(0,e-r),t-r)),r=l+1}return o}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(e,t){let n=[],o=-1;for(let r of e)n.push(r),o+=r.length+1,n.length==32&&(t.push(new Te(n,o)),n=[],o=-1);return o>-1&&t.push(new Te(n,o)),t}}class sn extends ie{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let n of e)this.lines+=n.lines}lineInner(e,t,n,o){for(let r=0;;r++){let s=this.children[r],a=o+s.length,l=n+s.lines-1;if((t?l:a)>=e)return s.lineInner(e,t,n,o);o=a+1,n=l+1}}decompose(e,t,n,o){for(let r=0,s=0;s<=t&&r<this.children.length;r++){let a=this.children[r],l=s+a.length;if(e<=l&&t>=s){let c=o&((s<=e?1:0)|(l>=t?2:0));s>=e&&l<=t&&!c?n.push(a):a.decompose(e-s,t-s,n,c)}s=l+1}}replace(e,t,n){if([e,t]=mo(this,e,t),n.lines<this.lines)for(let o=0,r=0;o<this.children.length;o++){let s=this.children[o],a=r+s.length;if(e>=r&&t<=a){let l=s.replace(e-r,t-r,n),c=this.lines-s.lines+l.lines;if(l.lines<c>>4&&l.lines>c>>6){let f=this.children.slice();return f[o]=l,new sn(f,this.length-(t-e)+n.length)}return super.replace(r,a,l)}r=a+1}return super.replace(e,t,n)}sliceString(e,t=this.length,n=`
`){[e,t]=mo(this,e,t);let o="";for(let r=0,s=0;r<this.children.length&&s<=t;r++){let a=this.children[r],l=s+a.length;s>e&&r&&(o+=n),e<l&&t>s&&(o+=a.sliceString(e-s,t-s,n)),s=l+1}return o}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(e,t){if(!(e instanceof sn))return 0;let n=0,[o,r,s,a]=t>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;o+=t,r+=t){if(o==s||r==a)return n;let l=this.children[o],c=e.children[r];if(l!=c)return n+l.scanIdentical(c,t);n+=l.length+1}}static from(e,t=e.reduce((n,o)=>n+o.length+1,-1)){let n=0;for(let u of e)n+=u.lines;if(n<32){let u=[];for(let p of e)p.flatten(u);return new Te(u,t)}let o=Math.max(32,n>>5),r=o<<1,s=o>>1,a=[],l=0,c=-1,f=[];function h(u){let p;if(u.lines>r&&u instanceof sn)for(let g of u.children)h(g);else u.lines>s&&(l>s||!l)?(d(),a.push(u)):u instanceof Te&&l&&(p=f[f.length-1])instanceof Te&&u.lines+p.lines<=32?(l+=u.lines,c+=u.length+1,f[f.length-1]=new Te(p.text.concat(u.text),p.length+1+u.length)):(l+u.lines>o&&d(),l+=u.lines,c+=u.length+1,f.push(u))}function d(){l!=0&&(a.push(f.length==1?f[0]:sn.from(f,c)),c=-1,l=f.length=0)}for(let u of e)h(u);return d(),a.length==1?a[0]:new sn(a,t)}}ie.empty=new Te([""],0);function dx(i){let e=-1;for(let t of i)e+=t.length+1;return e}function ws(i,e,t=0,n=1e9){for(let o=0,r=0,s=!0;r<i.length&&o<=n;r++){let a=i[r],l=o+a.length;l>=t&&(l>n&&(a=a.slice(0,n-o)),o<t&&(a=a.slice(t-o)),s?(e[e.length-1]+=a,s=!1):e.push(a)),o=l+1}return e}function Lh(i,e,t){return ws(i,[""],e,t)}class Go{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[t>0?1:(e instanceof Te?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let n=this.nodes.length-1,o=this.nodes[n],r=this.offsets[n],s=r>>1,a=o instanceof Te?o.text.length:o.children.length;if(s==(t>0?a:0)){if(n==0)return this.done=!0,this.value="",this;t>0&&this.offsets[n-1]++,this.nodes.pop(),this.offsets.pop()}else if((r&1)==(t>0?0:1)){if(this.offsets[n]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(o instanceof Te){let l=o.text[s+(t<0?-1:0)];if(this.offsets[n]+=t,l.length>Math.max(0,e))return this.value=e==0?l:t>0?l.slice(e):l.slice(0,l.length-e),this;e-=l.length}else{let l=o.children[s+(t<0?-1:0)];e>l.length?(e-=l.length,this.offsets[n]+=t):(t<0&&this.offsets[n]--,this.nodes.push(l),this.offsets.push(t>0?1:(l instanceof Te?l.text.length:l.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class Mg{constructor(e,t,n){this.value="",this.done=!1,this.cursor=new Go(e,t>n?-1:1),this.pos=t>n?e.length:0,this.from=Math.min(t,n),this.to=Math.max(t,n)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let n=t<0?this.pos-this.from:this.to-this.pos;e>n&&(e=n),n-=e;let{value:o}=this.cursor.next(e);return this.pos+=(o.length+e)*t,this.value=o.length<=n?o:t<0?o.slice(o.length-n):o.slice(0,n),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class Ig{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:t,lineBreak:n,value:o}=this.inner.next(e);return t&&this.afterBreak?(this.value="",this.afterBreak=!1):t?(this.done=!0,this.value=""):n?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=o,this.afterBreak=!1),this}get lineBreak(){return!1}}typeof Symbol<"u"&&(ie.prototype[Symbol.iterator]=function(){return this.iter()},Go.prototype[Symbol.iterator]=Mg.prototype[Symbol.iterator]=Ig.prototype[Symbol.iterator]=function(){return this});class ux{constructor(e,t,n,o){this.from=e,this.to=t,this.number=n,this.text=o}get length(){return this.to-this.from}}function mo(i,e,t){return e=Math.max(0,Math.min(i.length,e)),[e,Math.max(e,Math.min(i.length,t))]}function rt(i,e,t=!0,n=!0){return fx(i,e,t,n)}function px(i){return i>=56320&&i<57344}function gx(i){return i>=55296&&i<56320}function pi(i,e){let t=i.charCodeAt(e);if(!gx(t)||e+1==i.length)return t;let n=i.charCodeAt(e+1);return px(n)?(t-55296<<10)+(n-56320)+65536:t}function mx(i){return i<=65535?String.fromCharCode(i):(i-=65536,String.fromCharCode((i>>10)+55296,(i&1023)+56320))}function Yi(i){return i<65536?1:2}const tc=/\r\n?|\n/;var yt=(function(i){return i[i.Simple=0]="Simple",i[i.TrackDel=1]="TrackDel",i[i.TrackBefore=2]="TrackBefore",i[i.TrackAfter=3]="TrackAfter",i})(yt||(yt={}));class On{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t+1];e+=n<0?this.sections[t]:n}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,n=0,o=0;t<this.sections.length;){let r=this.sections[t++],s=this.sections[t++];s<0?(e(n,o,r),o+=r):o+=s,n+=r}}iterChangedRanges(e,t=!1){nc(this,e,t)}get invertedDesc(){let e=[];for(let t=0;t<this.sections.length;){let n=this.sections[t++],o=this.sections[t++];o<0?e.push(n,o):e.push(o,n)}return new On(e)}composeDesc(e){return this.empty?e:e.empty?this:Og(this,e)}mapDesc(e,t=!1){return e.empty?this:ic(this,e,t)}mapPos(e,t=-1,n=yt.Simple){let o=0,r=0;for(let s=0;s<this.sections.length;){let a=this.sections[s++],l=this.sections[s++],c=o+a;if(l<0){if(c>e)return r+(e-o);r+=a}else{if(n!=yt.Simple&&c>=e&&(n==yt.TrackDel&&o<e&&c>e||n==yt.TrackBefore&&o<e||n==yt.TrackAfter&&c>e))return null;if(c>e||c==e&&t<0&&!a)return e==o||t<0?r:r+l;r+=l}o=c}if(e>o)throw new RangeError(`Position ${e} is out of range for changeset of length ${o}`);return r}touchesRange(e,t=e){for(let n=0,o=0;n<this.sections.length&&o<=t;){let r=this.sections[n++],s=this.sections[n++],a=o+r;if(s>=0&&o<=t&&a>=e)return o<e&&a>t?"cover":!0;o=a}return!1}toString(){let e="";for(let t=0;t<this.sections.length;){let n=this.sections[t++],o=this.sections[t++];e+=(e?" ":"")+n+(o>=0?":"+o:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(t=>typeof t!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new On(e)}static create(e){return new On(e)}}class Fe extends On{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return nc(this,(t,n,o,r,s)=>e=e.replace(o,o+(n-t),s),!1),e}mapDesc(e,t=!1){return ic(this,e,t,!0)}invert(e){let t=this.sections.slice(),n=[];for(let o=0,r=0;o<t.length;o+=2){let s=t[o],a=t[o+1];if(a>=0){t[o]=a,t[o+1]=s;let l=o>>1;for(;n.length<l;)n.push(ie.empty);n.push(s?e.slice(r,r+s):ie.empty)}r+=s}return new Fe(t,n)}compose(e){return this.empty?e:e.empty?this:Og(this,e,!0)}map(e,t=!1){return e.empty?this:ic(this,e,t,!0)}iterChanges(e,t=!1){nc(this,e,t)}get desc(){return On.create(this.sections)}filter(e){let t=[],n=[],o=[],r=new ur(this);e:for(let s=0,a=0;;){let l=s==e.length?1e9:e[s++];for(;a<l||a==l&&r.len==0;){if(r.done)break e;let f=Math.min(r.len,l-a);Je(o,f,-1);let h=r.ins==-1?-1:r.off==0?r.ins:0;Je(t,f,h),h>0&&Wn(n,t,r.text),r.forward(f),a+=f}let c=e[s++];for(;a<c;){if(r.done)break e;let f=Math.min(r.len,c-a);Je(t,f,-1),Je(o,f,r.ins==-1?-1:r.off==0?r.ins:0),r.forward(f),a+=f}}return{changes:new Fe(t,n),filtered:On.create(o)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t],o=this.sections[t+1];o<0?e.push(n):o==0?e.push([n]):e.push([n].concat(this.inserted[t>>1].toJSON()))}return e}static of(e,t,n){let o=[],r=[],s=0,a=null;function l(f=!1){if(!f&&!o.length)return;s<t&&Je(o,t-s,-1);let h=new Fe(o,r);a=a?a.compose(h.map(a)):h,o=[],r=[],s=0}function c(f){if(Array.isArray(f))for(let h of f)c(h);else if(f instanceof Fe){if(f.length!=t)throw new RangeError(`Mismatched change set length (got ${f.length}, expected ${t})`);l(),a=a?a.compose(f.map(a)):f}else{let{from:h,to:d=h,insert:u}=f;if(h>d||h<0||d>t)throw new RangeError(`Invalid change range ${h} to ${d} (in doc of length ${t})`);let p=u?typeof u=="string"?ie.of(u.split(n||tc)):u:ie.empty,g=p.length;if(h==d&&g==0)return;h<s&&l(),h>s&&Je(o,h-s,-1),Je(o,d-h,g),Wn(r,o,p),s=d}}return c(e),l(!a),a}static empty(e){return new Fe(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let t=[],n=[];for(let o=0;o<e.length;o++){let r=e[o];if(typeof r=="number")t.push(r,-1);else{if(!Array.isArray(r)||typeof r[0]!="number"||r.some((s,a)=>a&&typeof s!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(r.length==1)t.push(r[0],0);else{for(;n.length<o;)n.push(ie.empty);n[o]=ie.of(r.slice(1)),t.push(r[0],n[o].length)}}}return new Fe(t,n)}static createSet(e,t){return new Fe(e,t)}}function Je(i,e,t,n=!1){if(e==0&&t<=0)return;let o=i.length-2;o>=0&&t<=0&&t==i[o+1]?i[o]+=e:o>=0&&e==0&&i[o]==0?i[o+1]+=t:n?(i[o]+=e,i[o+1]+=t):i.push(e,t)}function Wn(i,e,t){if(t.length==0)return;let n=e.length-2>>1;if(n<i.length)i[i.length-1]=i[i.length-1].append(t);else{for(;i.length<n;)i.push(ie.empty);i.push(t)}}function nc(i,e,t){let n=i.inserted;for(let o=0,r=0,s=0;s<i.sections.length;){let a=i.sections[s++],l=i.sections[s++];if(l<0)o+=a,r+=a;else{let c=o,f=r,h=ie.empty;for(;c+=a,f+=l,l&&n&&(h=h.append(n[s-2>>1])),!(t||s==i.sections.length||i.sections[s+1]<0);)a=i.sections[s++],l=i.sections[s++];e(o,c,r,f,h),o=c,r=f}}}function ic(i,e,t,n=!1){let o=[],r=n?[]:null,s=new ur(i),a=new ur(e);for(let l=-1;;){if(s.done&&a.len||a.done&&s.len)throw new Error("Mismatched change set lengths");if(s.ins==-1&&a.ins==-1){let c=Math.min(s.len,a.len);Je(o,c,-1),s.forward(c),a.forward(c)}else if(a.ins>=0&&(s.ins<0||l==s.i||s.off==0&&(a.len<s.len||a.len==s.len&&!t))){let c=a.len;for(Je(o,a.ins,-1);c;){let f=Math.min(s.len,c);s.ins>=0&&l<s.i&&s.len<=f&&(Je(o,0,s.ins),r&&Wn(r,o,s.text),l=s.i),s.forward(f),c-=f}a.next()}else if(s.ins>=0){let c=0,f=s.len;for(;f;)if(a.ins==-1){let h=Math.min(f,a.len);c+=h,f-=h,a.forward(h)}else if(a.ins==0&&a.len<f)f-=a.len,a.next();else break;Je(o,c,l<s.i?s.ins:0),r&&l<s.i&&Wn(r,o,s.text),l=s.i,s.forward(s.len-f)}else{if(s.done&&a.done)return r?Fe.createSet(o,r):On.create(o);throw new Error("Mismatched change set lengths")}}}function Og(i,e,t=!1){let n=[],o=t?[]:null,r=new ur(i),s=new ur(e);for(let a=!1;;){if(r.done&&s.done)return o?Fe.createSet(n,o):On.create(n);if(r.ins==0)Je(n,r.len,0,a),r.next();else if(s.len==0&&!s.done)Je(n,0,s.ins,a),o&&Wn(o,n,s.text),s.next();else{if(r.done||s.done)throw new Error("Mismatched change set lengths");{let l=Math.min(r.len2,s.len),c=n.length;if(r.ins==-1){let f=s.ins==-1?-1:s.off?0:s.ins;Je(n,l,f,a),o&&f&&Wn(o,n,s.text)}else s.ins==-1?(Je(n,r.off?0:r.len,l,a),o&&Wn(o,n,r.textBit(l))):(Je(n,r.off?0:r.len,s.off?0:s.ins,a),o&&!s.off&&Wn(o,n,s.text));a=(r.ins>l||s.ins>=0&&s.len>l)&&(a||n.length>c),r.forward2(l),s.forward(l)}}}}class ur{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?ie.empty:e[t]}textBit(e){let{inserted:t}=this.set,n=this.i-2>>1;return n>=t.length&&!e?ie.empty:t[n].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class wi{constructor(e,t,n){this.from=e,this.to=t,this.flags=n}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}get goalColumn(){let e=this.flags>>6;return e==16777215?void 0:e}map(e,t=-1){let n,o;return this.empty?n=o=e.mapPos(this.from,t):(n=e.mapPos(this.from,1),o=e.mapPos(this.to,-1)),n==this.from&&o==this.to?this:new wi(n,o,this.flags)}extend(e,t=e){if(e<=this.anchor&&t>=this.anchor)return N.range(e,t);let n=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return N.range(this.anchor,n)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return N.range(e.anchor,e.head)}static create(e,t,n){return new wi(e,t,n)}}class N{constructor(e,t){this.ranges=e,this.mainIndex=t}map(e,t=-1){return e.empty?this:N.create(this.ranges.map(n=>n.map(e,t)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let n=0;n<this.ranges.length;n++)if(!this.ranges[n].eq(e.ranges[n],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new N([this.main],0)}addRange(e,t=!0){return N.create([e].concat(this.ranges),t?0:this.mainIndex+1)}replaceRange(e,t=this.mainIndex){let n=this.ranges.slice();return n[t]=e,N.create(n,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new N(e.ranges.map(t=>wi.fromJSON(t)),e.main)}static single(e,t=e){return new N([N.range(e,t)],0)}static create(e,t=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let n=0,o=0;o<e.length;o++){let r=e[o];if(r.empty?r.from<=n:r.from<n)return N.normalized(e.slice(),t);n=r.to}return new N(e,t)}static cursor(e,t=0,n,o){return wi.create(e,e,(t==0?0:t<0?8:16)|(n==null?7:Math.min(6,n))|(o??16777215)<<6)}static range(e,t,n,o){let r=(n??16777215)<<6|(o==null?7:Math.min(6,o));return t<e?wi.create(t,e,48|r):wi.create(e,t,(t>e?8:0)|r)}static normalized(e,t=0){let n=e[t];e.sort((o,r)=>o.from-r.from),t=e.indexOf(n);for(let o=1;o<e.length;o++){let r=e[o],s=e[o-1];if(r.empty?r.from<=s.to:r.from<s.to){let a=s.from,l=Math.max(r.to,s.to);o<=t&&t--,e.splice(--o,2,r.anchor>r.head?N.range(l,a):N.range(a,l))}}return new N(e,t)}}function Eg(i,e){for(let t of i.ranges)if(t.to>e)throw new RangeError("Selection points outside of document")}let ff=0;class G{constructor(e,t,n,o,r){this.combine=e,this.compareInput=t,this.compare=n,this.isStatic=o,this.id=ff++,this.default=e([]),this.extensions=typeof r=="function"?r(this):r}get reader(){return this}static define(e={}){return new G(e.combine||(t=>t),e.compareInput||((t,n)=>t===n),e.compare||(e.combine?(t,n)=>t===n:hf),!!e.static,e.enables)}of(e){return new xs([],this,0,e)}compute(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new xs(e,this,1,t)}computeN(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new xs(e,this,2,t)}from(e,t){return t||(t=n=>n),this.compute([e],n=>t(n.field(e)))}}function hf(i,e){return i==e||i.length==e.length&&i.every((t,n)=>t===e[n])}class xs{constructor(e,t,n,o){this.dependencies=e,this.facet=t,this.type=n,this.value=o,this.id=ff++}dynamicSlot(e){var t;let n=this.value,o=this.facet.compareInput,r=this.id,s=e[r]>>1,a=this.type==2,l=!1,c=!1,f=[];for(let h of this.dependencies)h=="doc"?l=!0:h=="selection"?c=!0:(((t=e[h.id])!==null&&t!==void 0?t:1)&1)==0&&f.push(e[h.id]);return{create(h){return h.values[s]=n(h),1},update(h,d){if(l&&d.docChanged||c&&(d.docChanged||d.selection)||oc(h,f)){let u=n(h);if(a?!Rh(u,h.values[s],o):!o(u,h.values[s]))return h.values[s]=u,1}return 0},reconfigure:(h,d)=>{let u,p=d.config.address[r];if(p!=null){let g=Us(d,p);if(this.dependencies.every(m=>m instanceof G?d.facet(m)===h.facet(m):m instanceof ai?d.field(m,!1)==h.field(m,!1):!0)||(a?Rh(u=n(h),g,o):o(u=n(h),g)))return h.values[s]=g,0}else u=n(h);return h.values[s]=u,1}}}}function Rh(i,e,t){if(i.length!=e.length)return!1;for(let n=0;n<i.length;n++)if(!t(i[n],e[n]))return!1;return!0}function oc(i,e){let t=!1;for(let n of e)Yo(i,n)&1&&(t=!0);return t}function bx(i,e,t){let n=t.map(l=>i[l.id]),o=t.map(l=>l.type),r=n.filter(l=>!(l&1)),s=i[e.id]>>1;function a(l){let c=[];for(let f=0;f<n.length;f++){let h=Us(l,n[f]);if(o[f]==2)for(let d of h)c.push(d);else c.push(h)}return e.combine(c)}return{create(l){for(let c of n)Yo(l,c);return l.values[s]=a(l),1},update(l,c){if(!oc(l,r))return 0;let f=a(l);return e.compare(f,l.values[s])?0:(l.values[s]=f,1)},reconfigure(l,c){let f=oc(l,n),h=c.config.facets[e.id],d=c.facet(e);if(h&&!f&&hf(t,h))return l.values[s]=d,0;let u=a(l);return e.compare(u,d)?(l.values[s]=d,0):(l.values[s]=u,1)}}}const Yr=G.define({static:!0});class ai{constructor(e,t,n,o,r){this.id=e,this.createF=t,this.updateF=n,this.compareF=o,this.spec=r,this.provides=void 0}static define(e){let t=new ai(ff++,e.create,e.update,e.compare||((n,o)=>n===o),e);return e.provide&&(t.provides=e.provide(t)),t}create(e){let t=e.facet(Yr).find(n=>n.field==this);return(t?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:n=>(n.values[t]=this.create(n),1),update:(n,o)=>{let r=n.values[t],s=this.updateF(r,o);return this.compareF(r,s)?0:(n.values[t]=s,1)},reconfigure:(n,o)=>{let r=n.facet(Yr),s=o.facet(Yr),a;return(a=r.find(l=>l.field==this))&&a!=s.find(l=>l.field==this)?(n.values[t]=a.create(n),1):o.config.address[this.id]!=null?(n.values[t]=o.field(this),0):(n.values[t]=this.create(n),1)}}}init(e){return[this,Yr.of({field:this,create:e})]}get extension(){return this}}const bi={lowest:4,low:3,default:2,high:1,highest:0};function No(i){return e=>new Pg(e,i)}const Sa={highest:No(bi.highest),high:No(bi.high),default:No(bi.default),low:No(bi.low),lowest:No(bi.lowest)};class Pg{constructor(e,t){this.inner=e,this.prec=t}}class ka{of(e){return new rc(this,e)}reconfigure(e){return ka.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class rc{constructor(e,t){this.compartment=e,this.inner=t}}class Ws{constructor(e,t,n,o,r,s){for(this.base=e,this.compartments=t,this.dynamicSlots=n,this.address=o,this.staticValues=r,this.facets=s,this.statusTemplate=[];this.statusTemplate.length<n.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(e,t,n){let o=[],r=Object.create(null),s=new Map;for(let d of yx(e,t,s))d instanceof ai?o.push(d):(r[d.facet.id]||(r[d.facet.id]=[])).push(d);let a=Object.create(null),l=[],c=[];for(let d of o)a[d.id]=c.length<<1,c.push(u=>d.slot(u));let f=n?.config.facets;for(let d in r){let u=r[d],p=u[0].facet,g=f&&f[d]||[];if(u.every(m=>m.type==0))if(a[p.id]=l.length<<1|1,hf(g,u))l.push(n.facet(p));else{let m=p.combine(u.map(b=>b.value));l.push(n&&p.compare(m,n.facet(p))?n.facet(p):m)}else{for(let m of u)m.type==0?(a[m.id]=l.length<<1|1,l.push(m.value)):(a[m.id]=c.length<<1,c.push(b=>m.dynamicSlot(b)));a[p.id]=c.length<<1,c.push(m=>bx(m,p,u))}}let h=c.map(d=>d(a));return new Ws(e,s,h,a,l,r)}}function yx(i,e,t){let n=[[],[],[],[],[]],o=new Map;function r(s,a){let l=o.get(s);if(l!=null){if(l<=a)return;let c=n[l].indexOf(s);c>-1&&n[l].splice(c,1),s instanceof rc&&t.delete(s.compartment)}if(o.set(s,a),Array.isArray(s))for(let c of s)r(c,a);else if(s instanceof rc){if(t.has(s.compartment))throw new RangeError("Duplicate use of compartment in extensions");let c=e.get(s.compartment)||s.inner;t.set(s.compartment,c),r(c,a)}else if(s instanceof Pg)r(s.inner,s.prec);else if(s instanceof ai)n[a].push(s),s.provides&&r(s.provides,a);else if(s instanceof xs)n[a].push(s),s.facet.extensions&&r(s.facet.extensions,bi.default);else{let c=s.extension;if(!c)throw new Error(`Unrecognized extension value in extension set (${s}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);r(c,a)}}return r(i,bi.default),n.reduce((s,a)=>s.concat(a))}function Yo(i,e){if(e&1)return 2;let t=e>>1,n=i.status[t];if(n==4)throw new Error("Cyclic dependency between fields and/or facets");if(n&2)return n;i.status[t]=4;let o=i.computeSlot(i,i.config.dynamicSlots[t]);return i.status[t]=2|o}function Us(i,e){return e&1?i.config.staticValues[e>>1]:i.values[e>>1]}const Tg=G.define(),sc=G.define({combine:i=>i.some(e=>e),static:!0}),Dg=G.define({combine:i=>i.length?i[0]:void 0,static:!0}),Lg=G.define(),Rg=G.define(),Ng=G.define(),$g=G.define({combine:i=>i.length?i[0]:!1});class zi{constructor(e,t){this.type=e,this.value=t}static define(){return new vx}}class vx{of(e){return new zi(this,e)}}class wx{constructor(e){this.map=e}of(e){return new Me(this,e)}}class Me{constructor(e,t){this.type=e,this.value=t}map(e){let t=this.type.map(this.value,e);return t===void 0?void 0:t==this.value?this:new Me(this.type,t)}is(e){return this.type==e}static define(e={}){return new wx(e.map||(t=>t))}static mapEffects(e,t){if(!e.length)return e;let n=[];for(let o of e){let r=o.map(t);r&&n.push(r)}return n}}Me.reconfigure=Me.define();Me.appendConfig=Me.define();class et{constructor(e,t,n,o,r,s){this.startState=e,this.changes=t,this.selection=n,this.effects=o,this.annotations=r,this.scrollIntoView=s,this._doc=null,this._state=null,n&&Eg(n,t.newLength),r.some(a=>a.type==et.time)||(this.annotations=r.concat(et.time.of(Date.now())))}static create(e,t,n,o,r,s){return new et(e,t,n,o,r,s)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let t=this.annotation(et.userEvent);return!!(t&&(t==e||t.length>e.length&&t.slice(0,e.length)==e&&t[e.length]=="."))}}et.time=zi.define();et.userEvent=zi.define();et.addToHistory=zi.define();et.remote=zi.define();function xx(i,e){let t=[];for(let n=0,o=0;;){let r,s;if(n<i.length&&(o==e.length||e[o]>=i[n]))r=i[n++],s=i[n++];else if(o<e.length)r=e[o++],s=e[o++];else return t;!t.length||t[t.length-1]<r?t.push(r,s):t[t.length-1]<s&&(t[t.length-1]=s)}}function Bg(i,e,t){var n;let o,r,s;return t?(o=e.changes,r=Fe.empty(e.changes.length),s=i.changes.compose(e.changes)):(o=e.changes.map(i.changes),r=i.changes.mapDesc(e.changes,!0),s=i.changes.compose(o)),{changes:s,selection:e.selection?e.selection.map(r):(n=i.selection)===null||n===void 0?void 0:n.map(o),effects:Me.mapEffects(i.effects,o).concat(Me.mapEffects(e.effects,r)),annotations:i.annotations.length?i.annotations.concat(e.annotations):e.annotations,scrollIntoView:i.scrollIntoView||e.scrollIntoView}}function ac(i,e,t){let n=e.selection,o=to(e.annotations);return e.userEvent&&(o=o.concat(et.userEvent.of(e.userEvent))),{changes:e.changes instanceof Fe?e.changes:Fe.of(e.changes||[],t,i.facet(Dg)),selection:n&&(n instanceof N?n:N.single(n.anchor,n.head)),effects:to(e.effects),annotations:o,scrollIntoView:!!e.scrollIntoView}}function Vg(i,e,t){let n=ac(i,e.length?e[0]:{},i.doc.length);e.length&&e[0].filter===!1&&(t=!1);for(let r=1;r<e.length;r++){e[r].filter===!1&&(t=!1);let s=!!e[r].sequential;n=Bg(n,ac(i,e[r],s?n.changes.newLength:i.doc.length),s)}let o=et.create(i,n.changes,n.selection,n.effects,n.annotations,n.scrollIntoView);return kx(t?Sx(o):o)}function Sx(i){let e=i.startState,t=!0;for(let o of e.facet(Lg)){let r=o(i);if(r===!1){t=!1;break}Array.isArray(r)&&(t=t===!0?r:xx(t,r))}if(t!==!0){let o,r;if(t===!1)r=i.changes.invertedDesc,o=Fe.empty(e.doc.length);else{let s=i.changes.filter(t);o=s.changes,r=s.filtered.mapDesc(s.changes).invertedDesc}i=et.create(e,o,i.selection&&i.selection.map(r),Me.mapEffects(i.effects,r),i.annotations,i.scrollIntoView)}let n=e.facet(Rg);for(let o=n.length-1;o>=0;o--){let r=n[o](i);r instanceof et?i=r:Array.isArray(r)&&r.length==1&&r[0]instanceof et?i=r[0]:i=Vg(e,to(r),!1)}return i}function kx(i){let e=i.startState,t=e.facet(Ng),n=i;for(let o=t.length-1;o>=0;o--){let r=t[o](i);r&&Object.keys(r).length&&(n=Bg(n,ac(e,r,i.changes.newLength),!0))}return n==i?i:et.create(e,i.changes,i.selection,n.effects,n.annotations,n.scrollIntoView)}const Cx=[];function to(i){return i==null?Cx:Array.isArray(i)?i:[i]}var An=(function(i){return i[i.Word=0]="Word",i[i.Space=1]="Space",i[i.Other=2]="Other",i})(An||(An={}));const Ax=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let lc;try{lc=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function _x(i){if(lc)return lc.test(i);for(let e=0;e<i.length;e++){let t=i[e];if(/\w/.test(t)||t>""&&(t.toUpperCase()!=t.toLowerCase()||Ax.test(t)))return!0}return!1}function Mx(i){return e=>{if(!/\S/.test(e))return An.Space;if(_x(e))return An.Word;for(let t=0;t<i.length;t++)if(e.indexOf(i[t])>-1)return An.Word;return An.Other}}class le{constructor(e,t,n,o,r,s){this.config=e,this.doc=t,this.selection=n,this.values=o,this.status=e.statusTemplate.slice(),this.computeSlot=r,s&&(s._state=this);for(let a=0;a<this.config.dynamicSlots.length;a++)Yo(this,a<<1);this.computeSlot=null}field(e,t=!0){let n=this.config.address[e.id];if(n==null){if(t)throw new RangeError("Field is not present in this state");return}return Yo(this,n),Us(this,n)}update(...e){return Vg(this,e,!0)}applyTransaction(e){let t=this.config,{base:n,compartments:o}=t;for(let a of e.effects)a.is(ka.reconfigure)?(t&&(o=new Map,t.compartments.forEach((l,c)=>o.set(c,l)),t=null),o.set(a.value.compartment,a.value.extension)):a.is(Me.reconfigure)?(t=null,n=a.value):a.is(Me.appendConfig)&&(t=null,n=to(n).concat(a.value));let r;t?r=e.startState.values.slice():(t=Ws.resolve(n,o,this),r=new le(t,this.doc,this.selection,t.dynamicSlots.map(()=>null),(l,c)=>c.reconfigure(l,this),null).values);let s=e.startState.facet(sc)?e.newSelection:e.newSelection.asSingle();new le(t,e.newDoc,s,r,(a,l)=>l.update(a,e),e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:N.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,n=e(t.ranges[0]),o=this.changes(n.changes),r=[n.range],s=to(n.effects);for(let a=1;a<t.ranges.length;a++){let l=e(t.ranges[a]),c=this.changes(l.changes),f=c.map(o);for(let d=0;d<a;d++)r[d]=r[d].map(f);let h=o.mapDesc(c,!0);r.push(l.range.map(h)),o=o.compose(f),s=Me.mapEffects(s,f).concat(Me.mapEffects(to(l.effects),h))}return{changes:o,selection:N.create(r,t.mainIndex),effects:s}}changes(e=[]){return e instanceof Fe?e:Fe.of(e,this.doc.length,this.facet(le.lineSeparator))}toText(e){return ie.of(e.split(this.facet(le.lineSeparator)||tc))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(Yo(this,t),Us(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let n in e){let o=e[n];o instanceof ai&&this.config.address[o.id]!=null&&(t[n]=o.spec.toJSON(this.field(e[n]),this))}return t}static fromJSON(e,t={},n){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let o=[];if(n){for(let r in n)if(Object.prototype.hasOwnProperty.call(e,r)){let s=n[r],a=e[r];o.push(s.init(l=>s.spec.fromJSON(a,l)))}}return le.create({doc:e.doc,selection:N.fromJSON(e.selection),extensions:t.extensions?o.concat([t.extensions]):o})}static create(e={}){let t=Ws.resolve(e.extensions||[],new Map),n=e.doc instanceof ie?e.doc:ie.of((e.doc||"").split(t.staticFacet(le.lineSeparator)||tc)),o=e.selection?e.selection instanceof N?e.selection:N.single(e.selection.anchor,e.selection.head):N.single(0);return Eg(o,n.length),t.staticFacet(sc)||(o=o.asSingle()),new le(t,n,o,t.dynamicSlots.map(()=>null),(r,s)=>s.create(r),null)}get tabSize(){return this.facet(le.tabSize)}get lineBreak(){return this.facet(le.lineSeparator)||`
`}get readOnly(){return this.facet($g)}phrase(e,...t){for(let n of this.facet(le.phrases))if(Object.prototype.hasOwnProperty.call(n,e)){e=n[e];break}return t.length&&(e=e.replace(/\$(\$|\d*)/g,(n,o)=>{if(o=="$")return"$";let r=+(o||1);return!r||r>t.length?n:t[r-1]})),e}languageDataAt(e,t,n=-1){let o=[];for(let r of this.facet(Tg))for(let s of r(this,t,n))Object.prototype.hasOwnProperty.call(s,e)&&o.push(s[e]);return o}charCategorizer(e){return Mx(this.languageDataAt("wordChars",e).join(""))}wordAt(e){let{text:t,from:n,length:o}=this.doc.lineAt(e),r=this.charCategorizer(e),s=e-n,a=e-n;for(;s>0;){let l=rt(t,s,!1);if(r(t.slice(l,s))!=An.Word)break;s=l}for(;a<o;){let l=rt(t,a);if(r(t.slice(a,l))!=An.Word)break;a=l}return s==a?null:N.range(s+n,a+n)}}le.allowMultipleSelections=sc;le.tabSize=G.define({combine:i=>i.length?i[0]:4});le.lineSeparator=Dg;le.readOnly=$g;le.phrases=G.define({compare(i,e){let t=Object.keys(i),n=Object.keys(e);return t.length==n.length&&t.every(o=>i[o]==e[o])}});le.languageData=Tg;le.changeFilter=Lg;le.transactionFilter=Rg;le.transactionExtender=Ng;ka.reconfigure=Me.define();function Ix(i,e,t={}){let n={};for(let o of i)for(let r of Object.keys(o)){let s=o[r],a=n[r];if(a===void 0)n[r]=s;else if(!(a===s||s===void 0))if(Object.hasOwnProperty.call(t,r))n[r]=t[r](a,s);else throw new Error("Config merge conflict for field "+r)}for(let o in e)n[o]===void 0&&(n[o]=e[o]);return n}class Ei{eq(e){return this==e}range(e,t=e){return cc.create(e,t,this)}}Ei.prototype.startSide=Ei.prototype.endSide=0;Ei.prototype.point=!1;Ei.prototype.mapMode=yt.TrackDel;let cc=class Fg{constructor(e,t,n){this.from=e,this.to=t,this.value=n}static create(e,t,n){return new Fg(e,t,n)}};function fc(i,e){return i.from-e.from||i.value.startSide-e.value.startSide}class df{constructor(e,t,n,o){this.from=e,this.to=t,this.value=n,this.maxPoint=o}get length(){return this.to[this.to.length-1]}findIndex(e,t,n,o=0){let r=n?this.to:this.from;for(let s=o,a=r.length;;){if(s==a)return s;let l=s+a>>1,c=r[l]-e||(n?this.value[l].endSide:this.value[l].startSide)-t;if(l==s)return c>=0?s:a;c>=0?a=l:s=l+1}}between(e,t,n,o){for(let r=this.findIndex(t,-1e9,!0),s=this.findIndex(n,1e9,!1,r);r<s;r++)if(o(this.from[r]+e,this.to[r]+e,this.value[r])===!1)return!1}map(e,t){let n=[],o=[],r=[],s=-1,a=-1;for(let l=0;l<this.value.length;l++){let c=this.value[l],f=this.from[l]+e,h=this.to[l]+e,d,u;if(f==h){let p=t.mapPos(f,c.startSide,c.mapMode);if(p==null||(d=u=p,c.startSide!=c.endSide&&(u=t.mapPos(f,c.endSide),u<d)))continue}else if(d=t.mapPos(f,c.startSide),u=t.mapPos(h,c.endSide),d>u||d==u&&c.startSide>0&&c.endSide<=0)continue;(u-d||c.endSide-c.startSide)<0||(s<0&&(s=d),c.point&&(a=Math.max(a,u-d)),n.push(c),o.push(d-s),r.push(u-s))}return{mapped:n.length?new df(o,r,n,a):null,pos:s}}}class ve{constructor(e,t,n,o){this.chunkPos=e,this.chunk=t,this.nextLayer=n,this.maxPoint=o}static create(e,t,n,o){return new ve(e,t,n,o)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:t=[],sort:n=!1,filterFrom:o=0,filterTo:r=this.length}=e,s=e.filter;if(t.length==0&&!s)return this;if(n&&(t=t.slice().sort(fc)),this.isEmpty)return t.length?ve.of(t):this;let a=new zg(this,null,-1).goto(0),l=0,c=[],f=new Gs;for(;a.value||l<t.length;)if(l<t.length&&(a.from-t[l].from||a.startSide-t[l].value.startSide)>=0){let h=t[l++];f.addInner(h.from,h.to,h.value)||c.push(h)}else a.rangeIndex==1&&a.chunkIndex<this.chunk.length&&(l==t.length||this.chunkEnd(a.chunkIndex)<t[l].from)&&(!s||o>this.chunkEnd(a.chunkIndex)||r<this.chunkPos[a.chunkIndex])&&f.addChunk(this.chunkPos[a.chunkIndex],this.chunk[a.chunkIndex])?a.nextChunk():((!s||o>a.to||r<a.from||s(a.from,a.to,a.value))&&(f.addInner(a.from,a.to,a.value)||c.push(cc.create(a.from,a.to,a.value))),a.next());return f.finishInner(this.nextLayer.isEmpty&&!c.length?ve.empty:this.nextLayer.update({add:c,filter:s,filterFrom:o,filterTo:r}))}map(e){if(e.empty||this.isEmpty)return this;let t=[],n=[],o=-1;for(let s=0;s<this.chunk.length;s++){let a=this.chunkPos[s],l=this.chunk[s],c=e.touchesRange(a,a+l.length);if(c===!1)o=Math.max(o,l.maxPoint),t.push(l),n.push(e.mapPos(a));else if(c===!0){let{mapped:f,pos:h}=l.map(a,e);f&&(o=Math.max(o,f.maxPoint),t.push(f),n.push(h))}}let r=this.nextLayer.map(e);return t.length==0?r:new ve(n,t,r||ve.empty,o)}between(e,t,n){if(!this.isEmpty){for(let o=0;o<this.chunk.length;o++){let r=this.chunkPos[o],s=this.chunk[o];if(t>=r&&e<=r+s.length&&s.between(r,e-r,t-r,n)===!1)return}this.nextLayer.between(e,t,n)}}iter(e=0){return pr.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return pr.from(e).goto(t)}static compare(e,t,n,o,r=-1){let s=e.filter(h=>h.maxPoint>0||!h.isEmpty&&h.maxPoint>=r),a=t.filter(h=>h.maxPoint>0||!h.isEmpty&&h.maxPoint>=r),l=Nh(s,a,n),c=new $o(s,l,r),f=new $o(a,l,r);n.iterGaps((h,d,u)=>$h(c,h,f,d,u,o)),n.empty&&n.length==0&&$h(c,0,f,0,0,o)}static eq(e,t,n=0,o){o==null&&(o=999999999);let r=e.filter(f=>!f.isEmpty&&t.indexOf(f)<0),s=t.filter(f=>!f.isEmpty&&e.indexOf(f)<0);if(r.length!=s.length)return!1;if(!r.length)return!0;let a=Nh(r,s),l=new $o(r,a,0).goto(n),c=new $o(s,a,0).goto(n);for(;;){if(l.to!=c.to||!hc(l.active,c.active)||l.point&&(!c.point||!l.point.eq(c.point)))return!1;if(l.to>o)return!0;l.next(),c.next()}}static spans(e,t,n,o,r=-1){let s=new $o(e,null,r).goto(t),a=t,l=s.openStart;for(;;){let c=Math.min(s.to,n);if(s.point){let f=s.activeForPoint(s.to),h=s.pointFrom<t?f.length+1:s.point.startSide<0?f.length:Math.min(f.length,l);o.point(a,c,s.point,f,h,s.pointRank),l=Math.min(s.openEnd(c),f.length)}else c>a&&(o.span(a,c,s.active,l),l=s.openEnd(c));if(s.to>n)return l+(s.point&&s.to>n?1:0);a=s.to,s.next()}}static of(e,t=!1){let n=new Gs;for(let o of e instanceof cc?[e]:t?Ox(e):e)n.add(o.from,o.to,o.value);return n.finish()}static join(e){if(!e.length)return ve.empty;let t=e[e.length-1];for(let n=e.length-2;n>=0;n--)for(let o=e[n];o!=ve.empty;o=o.nextLayer)t=new ve(o.chunkPos,o.chunk,t,Math.max(o.maxPoint,t.maxPoint));return t}}ve.empty=new ve([],[],null,-1);function Ox(i){if(i.length>1)for(let e=i[0],t=1;t<i.length;t++){let n=i[t];if(fc(e,n)>0)return i.slice().sort(fc);e=n}return i}ve.empty.nextLayer=ve.empty;class Gs{finishChunk(e){this.chunks.push(new df(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,n){this.addInner(e,t,n)||(this.nextLayer||(this.nextLayer=new Gs)).add(e,t,n)}addInner(e,t,n){let o=e-this.lastTo||n.startSide-this.last.endSide;if(o<=0&&(e-this.lastFrom||n.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return o<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=n,this.lastFrom=e,this.lastTo=t,this.value.push(n),n.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let n=t.value.length-1;return this.last=t.value[n],this.lastFrom=t.from[n]+e,this.lastTo=t.to[n]+e,!0}finish(){return this.finishInner(ve.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=ve.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}}function Nh(i,e,t){let n=new Map;for(let r of i)for(let s=0;s<r.chunk.length;s++)r.chunk[s].maxPoint<=0&&n.set(r.chunk[s],r.chunkPos[s]);let o=new Set;for(let r of e)for(let s=0;s<r.chunk.length;s++){let a=n.get(r.chunk[s]);a!=null&&(t?t.mapPos(a):a)==r.chunkPos[s]&&!t?.touchesRange(a,a+r.chunk[s].length)&&o.add(r.chunk[s])}return o}class zg{constructor(e,t,n,o=0){this.layer=e,this.skip=t,this.minPoint=n,this.rank=o}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,n){for(;this.chunkIndex<this.layer.chunk.length;){let o=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(o)||this.layer.chunkEnd(this.chunkIndex)<e||o.maxPoint<this.minPoint))break;this.chunkIndex++,n=!1}if(this.chunkIndex<this.layer.chunk.length){let o=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!n||this.rangeIndex<o)&&this.setRangeIndex(o)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],n=e+t.from[this.rangeIndex];if(this.from=n,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class pr{constructor(e){this.heap=e}static from(e,t=null,n=-1){let o=[];for(let r=0;r<e.length;r++)for(let s=e[r];!s.isEmpty;s=s.nextLayer)s.maxPoint>=n&&o.push(new zg(s,t,n,r));return o.length==1?o[0]:new pr(o)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let n of this.heap)n.goto(e,t);for(let n=this.heap.length>>1;n>=0;n--)el(this.heap,n);return this.next(),this}forward(e,t){for(let n of this.heap)n.forward(e,t);for(let n=this.heap.length>>1;n>=0;n--)el(this.heap,n);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),el(this.heap,0)}}}function el(i,e){for(let t=i[e];;){let n=(e<<1)+1;if(n>=i.length)break;let o=i[n];if(n+1<i.length&&o.compare(i[n+1])>=0&&(o=i[n+1],n++),t.compare(o)<0)break;i[n]=t,i[e]=o,e=n}}class $o{constructor(e,t,n){this.minPoint=n,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=pr.from(e,t,n)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){Kr(this.active,e),Kr(this.activeTo,e),Kr(this.activeRank,e),this.minActive=Bh(this.active,this.activeTo)}addActive(e){let t=0,{value:n,to:o,rank:r}=this.cursor;for(;t<this.activeRank.length&&(r-this.activeRank[t]||o-this.activeTo[t])>0;)t++;Xr(this.active,t,n),Xr(this.activeTo,t,o),Xr(this.activeRank,t,r),e&&Xr(e,t,this.cursor.from),this.minActive=Bh(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let n=this.openStart<0?[]:null;for(;;){let o=this.minActive;if(o>-1&&(this.activeTo[o]-this.cursor.from||this.active[o].endSide-this.cursor.startSide)<0){if(this.activeTo[o]>e){this.to=this.activeTo[o],this.endSide=this.active[o].endSide;break}this.removeActive(o),n&&Kr(n,o)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let r=this.cursor.value;if(!r.point)this.addActive(n),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=r,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=r.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(n){this.openStart=0;for(let o=n.length-1;o>=0&&n[o]<e;o--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let n=this.active.length-1;n>=0&&!(this.activeRank[n]<this.pointRank);n--)(this.activeTo[n]>e||this.activeTo[n]==e&&this.active[n].endSide>=this.point.endSide)&&t.push(this.active[n]);return t.reverse()}openEnd(e){let t=0;for(let n=this.activeTo.length-1;n>=0&&this.activeTo[n]>e;n--)t++;return t}}function $h(i,e,t,n,o,r){i.goto(e),t.goto(n);let s=n+o,a=n,l=n-e;for(;;){let c=i.to+l-t.to,f=c||i.endSide-t.endSide,h=f<0?i.to+l:t.to,d=Math.min(h,s);if(i.point||t.point?i.point&&t.point&&(i.point==t.point||i.point.eq(t.point))&&hc(i.activeForPoint(i.to),t.activeForPoint(t.to))||r.comparePoint(a,d,i.point,t.point):d>a&&!hc(i.active,t.active)&&r.compareRange(a,d,i.active,t.active),h>s)break;(c||i.openEnd!=t.openEnd)&&r.boundChange&&r.boundChange(h),a=h,f<=0&&i.next(),f>=0&&t.next()}}function hc(i,e){if(i.length!=e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!=e[t]&&!i[t].eq(e[t]))return!1;return!0}function Kr(i,e){for(let t=e,n=i.length-1;t<n;t++)i[t]=i[t+1];i.pop()}function Xr(i,e,t){for(let n=i.length-1;n>=e;n--)i[n+1]=i[n];i[e]=t}function Bh(i,e){let t=-1,n=1e9;for(let o=0;o<e.length;o++)(e[o]-n||i[o].endSide-i[t].endSide)<0&&(t=o,n=e[o]);return t}function uf(i,e,t=i.length){let n=0;for(let o=0;o<t&&o<i.length;)i.charCodeAt(o)==9?(n+=e-n%e,o++):(n++,o=rt(i,o));return n}function Ex(i,e,t,n){for(let o=0,r=0;;){if(r>=e)return o;if(o==i.length)break;r+=i.charCodeAt(o)==9?t-r%t:1,o=rt(i,o)}return i.length}const dc="ͼ",Vh=typeof Symbol>"u"?"__"+dc:Symbol.for(dc),uc=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),Fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};class bo{constructor(e,t){this.rules=[];let{finish:n}=t||{};function o(s){return/^@/.test(s)?[s]:s.split(/,\s*/)}function r(s,a,l,c){let f=[],h=/^@(\w+)\b/.exec(s[0]),d=h&&h[1]=="keyframes";if(h&&a==null)return l.push(s[0]+";");for(let u in a){let p=a[u];if(/&/.test(u))r(u.split(/,\s*/).map(g=>s.map(m=>g.replace(/&/,m))).reduce((g,m)=>g.concat(m)),p,l);else if(p&&typeof p=="object"){if(!h)throw new RangeError("The value of a property ("+u+") should be a primitive value.");r(o(u),p,f,d)}else p!=null&&f.push(u.replace(/_.*/,"").replace(/[A-Z]/g,g=>"-"+g.toLowerCase())+": "+p+";")}(f.length||d)&&l.push((n&&!h&&!c?s.map(n):s).join(", ")+" {"+f.join(" ")+"}")}for(let s in e)r(o(s),e[s],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=Fh[Vh]||1;return Fh[Vh]=e+1,dc+e.toString(36)}static mount(e,t,n){let o=e[uc],r=n&&n.nonce;o?r&&o.setNonce(r):o=new Px(e,r),o.mount(Array.isArray(t)?t:[t],e)}}let zh=new Map;class Px{constructor(e,t){let n=e.ownerDocument||e,o=n.defaultView;if(!e.head&&e.adoptedStyleSheets&&o.CSSStyleSheet){let r=zh.get(n);if(r)return e[uc]=r;this.sheet=new o.CSSStyleSheet,zh.set(n,this)}else this.styleTag=n.createElement("style"),t&&this.styleTag.setAttribute("nonce",t);this.modules=[],e[uc]=this}mount(e,t){let n=this.sheet,o=0,r=0;for(let s=0;s<e.length;s++){let a=e[s],l=this.modules.indexOf(a);if(l<r&&l>-1&&(this.modules.splice(l,1),r--,l=-1),l==-1){if(this.modules.splice(r++,0,a),n)for(let c=0;c<a.rules.length;c++)n.insertRule(a.rules[c],o++)}else{for(;r<l;)o+=this.modules[r++].rules.length;o+=a.rules.length,r++}}if(n)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{let s="";for(let l=0;l<this.modules.length;l++)s+=this.modules[l].getRules()+`
`;this.styleTag.textContent=s;let a=t.head||t;this.styleTag.parentNode!=a&&a.insertBefore(this.styleTag,a.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}var Qn={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},gr={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},Tx=typeof navigator<"u"&&/Mac/.test(navigator.platform),Dx=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for(var Ge=0;Ge<10;Ge++)Qn[48+Ge]=Qn[96+Ge]=String(Ge);for(var Ge=1;Ge<=24;Ge++)Qn[Ge+111]="F"+Ge;for(var Ge=65;Ge<=90;Ge++)Qn[Ge]=String.fromCharCode(Ge+32),gr[Ge]=String.fromCharCode(Ge);for(var tl in Qn)gr.hasOwnProperty(tl)||(gr[tl]=Qn[tl]);function Lx(i){var e=Tx&&i.metaKey&&i.shiftKey&&!i.ctrlKey&&!i.altKey||Dx&&i.shiftKey&&i.key&&i.key.length==1||i.key=="Unidentified",t=!e&&i.key||(i.shiftKey?gr:Qn)[i.keyCode]||i.key||"Unidentified";return t=="Esc"&&(t="Escape"),t=="Del"&&(t="Delete"),t=="Left"&&(t="ArrowLeft"),t=="Up"&&(t="ArrowUp"),t=="Right"&&(t="ArrowRight"),t=="Down"&&(t="ArrowDown"),t}let ot=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},pc=typeof document<"u"?document:{documentElement:{style:{}}};const gc=/Edge\/(\d+)/.exec(ot.userAgent),jg=/MSIE \d/.test(ot.userAgent),mc=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ot.userAgent),Ca=!!(jg||mc||gc),jh=!Ca&&/gecko\/(\d+)/i.test(ot.userAgent),nl=!Ca&&/Chrome\/(\d+)/.exec(ot.userAgent),Rx="webkitFontSmoothing"in pc.documentElement.style,bc=!Ca&&/Apple Computer/.test(ot.vendor),Hh=bc&&(/Mobile\/\w+/.test(ot.userAgent)||ot.maxTouchPoints>2);var $={mac:Hh||/Mac/.test(ot.platform),windows:/Win/.test(ot.platform),linux:/Linux|X11/.test(ot.platform),ie:Ca,ie_version:jg?pc.documentMode||6:mc?+mc[1]:gc?+gc[1]:0,gecko:jh,gecko_version:jh?+(/Firefox\/(\d+)/.exec(ot.userAgent)||[0,0])[1]:0,chrome:!!nl,chrome_version:nl?+nl[1]:0,ios:Hh,android:/Android\b/.test(ot.userAgent),webkit_version:Rx?+(/\bAppleWebKit\/(\d+)/.exec(ot.userAgent)||[0,0])[1]:0,safari:bc,safari_version:bc?+(/\bVersion\/(\d+(\.\d+)?)/.exec(ot.userAgent)||[0,0])[1]:0,tabSize:pc.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};function mr(i){let e;return i.nodeType==11?e=i.getSelection?i:i.ownerDocument:e=i,e.getSelection()}function yc(i,e){return e?i==e||i.contains(e.nodeType!=1?e.parentNode:e):!1}function Ss(i,e){if(!e.anchorNode)return!1;try{return yc(i,e.anchorNode)}catch{return!1}}function yo(i){return i.nodeType==3?Ti(i,0,i.nodeValue.length).getClientRects():i.nodeType==1?i.getClientRects():[]}function Ko(i,e,t,n){return t?qh(i,e,t,n,-1)||qh(i,e,t,n,1):!1}function Pi(i){for(var e=0;;e++)if(i=i.previousSibling,!i)return e}function Ys(i){return i.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName)}function qh(i,e,t,n,o){for(;;){if(i==t&&e==n)return!0;if(e==(o<0?0:pn(i))){if(i.nodeName=="DIV")return!1;let r=i.parentNode;if(!r||r.nodeType!=1)return!1;e=Pi(i)+(o<0?0:1),i=r}else if(i.nodeType==1){if(i=i.childNodes[e+(o<0?-1:0)],i.nodeType==1&&i.contentEditable=="false")return!1;e=o<0?pn(i):0}else return!1}}function pn(i){return i.nodeType==3?i.nodeValue.length:i.childNodes.length}function Tr(i,e){let t=e?i.left:i.right;return{left:t,right:t,top:i.top,bottom:i.bottom}}function Nx(i){let e=i.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:i.innerWidth,top:0,bottom:i.innerHeight}}function Hg(i,e){let t=e.width/i.offsetWidth,n=e.height/i.offsetHeight;return(t>.995&&t<1.005||!isFinite(t)||Math.abs(e.width-i.offsetWidth)<1)&&(t=1),(n>.995&&n<1.005||!isFinite(n)||Math.abs(e.height-i.offsetHeight)<1)&&(n=1),{scaleX:t,scaleY:n}}function $x(i,e,t,n,o,r,s,a){let l=i.ownerDocument,c=l.defaultView||window;for(let f=i,h=!1;f&&!h;)if(f.nodeType==1){let d,u=f==l.body,p=1,g=1;if(u)d=Nx(c);else{if(/^(fixed|sticky)$/.test(getComputedStyle(f).position)&&(h=!0),f.scrollHeight<=f.clientHeight&&f.scrollWidth<=f.clientWidth){f=f.assignedSlot||f.parentNode;continue}let y=f.getBoundingClientRect();({scaleX:p,scaleY:g}=Hg(f,y)),d={left:y.left,right:y.left+f.clientWidth*p,top:y.top,bottom:y.top+f.clientHeight*g}}let m=0,b=0;if(o=="nearest")e.top<d.top?(b=e.top-(d.top+s),t>0&&e.bottom>d.bottom+b&&(b=e.bottom-d.bottom+s)):e.bottom>d.bottom&&(b=e.bottom-d.bottom+s,t<0&&e.top-b<d.top&&(b=e.top-(d.top+s)));else{let y=e.bottom-e.top,x=d.bottom-d.top;b=(o=="center"&&y<=x?e.top+y/2-x/2:o=="start"||o=="center"&&t<0?e.top-s:e.bottom-x+s)-d.top}if(n=="nearest"?e.left<d.left?(m=e.left-(d.left+r),t>0&&e.right>d.right+m&&(m=e.right-d.right+r)):e.right>d.right&&(m=e.right-d.right+r,t<0&&e.left<d.left+m&&(m=e.left-(d.left+r))):m=(n=="center"?e.left+(e.right-e.left)/2-(d.right-d.left)/2:n=="start"==a?e.left-r:e.right-(d.right-d.left)+r)-d.left,m||b)if(u)c.scrollBy(m,b);else{let y=0,x=0;if(b){let v=f.scrollTop;f.scrollTop+=b/g,x=(f.scrollTop-v)*g}if(m){let v=f.scrollLeft;f.scrollLeft+=m/p,y=(f.scrollLeft-v)*p}e={left:e.left-y,top:e.top-x,right:e.right-y,bottom:e.bottom-x},y&&Math.abs(y-m)<1&&(n="nearest"),x&&Math.abs(x-b)<1&&(o="nearest")}if(u)break;(e.top<d.top||e.bottom>d.bottom||e.left<d.left||e.right>d.right)&&(e={left:Math.max(e.left,d.left),right:Math.min(e.right,d.right),top:Math.max(e.top,d.top),bottom:Math.min(e.bottom,d.bottom)}),f=f.assignedSlot||f.parentNode}else if(f.nodeType==11)f=f.host;else break}function Bx(i){let e=i.ownerDocument,t,n;for(let o=i.parentNode;o&&!(o==e.body||t&&n);)if(o.nodeType==1)!n&&o.scrollHeight>o.clientHeight&&(n=o),!t&&o.scrollWidth>o.clientWidth&&(t=o),o=o.assignedSlot||o.parentNode;else if(o.nodeType==11)o=o.host;else break;return{x:t,y:n}}class Vx{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:n}=e;this.set(t,Math.min(e.anchorOffset,t?pn(t):0),n,Math.min(e.focusOffset,n?pn(n):0))}set(e,t,n,o){this.anchorNode=e,this.anchorOffset=t,this.focusNode=n,this.focusOffset=o}}let gi=null;$.safari&&$.safari_version>=26&&(gi=!1);function qg(i){if(i.setActive)return i.setActive();if(gi)return i.focus(gi);let e=[];for(let t=i;t&&(e.push(t,t.scrollTop,t.scrollLeft),t!=t.ownerDocument);t=t.parentNode);if(i.focus(gi==null?{get preventScroll(){return gi={preventScroll:!0},!0}}:void 0),!gi){gi=!1;for(let t=0;t<e.length;){let n=e[t++],o=e[t++],r=e[t++];n.scrollTop!=o&&(n.scrollTop=o),n.scrollLeft!=r&&(n.scrollLeft=r)}}}let Wh;function Ti(i,e,t=e){let n=Wh||(Wh=document.createRange());return n.setEnd(i,t),n.setStart(i,e),n}function no(i,e,t,n){let o={key:e,code:e,keyCode:t,which:t,cancelable:!0};n&&({altKey:o.altKey,ctrlKey:o.ctrlKey,shiftKey:o.shiftKey,metaKey:o.metaKey}=n);let r=new KeyboardEvent("keydown",o);r.synthetic=!0,i.dispatchEvent(r);let s=new KeyboardEvent("keyup",o);return s.synthetic=!0,i.dispatchEvent(s),r.defaultPrevented||s.defaultPrevented}function Fx(i){for(;i;){if(i&&(i.nodeType==9||i.nodeType==11&&i.host))return i;i=i.assignedSlot||i.parentNode}return null}function Wg(i){for(;i.attributes.length;)i.removeAttributeNode(i.attributes[0])}function zx(i,e){let t=e.focusNode,n=e.focusOffset;if(!t||e.anchorNode!=t||e.anchorOffset!=n)return!1;for(n=Math.min(n,pn(t));;)if(n){if(t.nodeType!=1)return!1;let o=t.childNodes[n-1];o.contentEditable=="false"?n--:(t=o,n=pn(t))}else{if(t==i)return!0;n=Pi(t),t=t.parentNode}}function Ug(i){return i.scrollTop>Math.max(1,i.scrollHeight-i.clientHeight-4)}function Gg(i,e){for(let t=i,n=e;;){if(t.nodeType==3&&n>0)return{node:t,offset:n};if(t.nodeType==1&&n>0){if(t.contentEditable=="false")return null;t=t.childNodes[n-1],n=pn(t)}else if(t.parentNode&&!Ys(t))n=Pi(t),t=t.parentNode;else return null}}function Yg(i,e){for(let t=i,n=e;;){if(t.nodeType==3&&n<t.nodeValue.length)return{node:t,offset:n};if(t.nodeType==1&&n<t.childNodes.length){if(t.contentEditable=="false")return null;t=t.childNodes[n],n=0}else if(t.parentNode&&!Ys(t))n=Pi(t)+1,t=t.parentNode;else return null}}class Qe{constructor(e,t,n=!0){this.node=e,this.offset=t,this.precise=n}static before(e,t){return new Qe(e.parentNode,Pi(e),t)}static after(e,t){return new Qe(e.parentNode,Pi(e)+1,t)}}const pf=[];class he{constructor(){this.parent=null,this.dom=null,this.flags=2}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e){let t=this.posAtStart;for(let n of this.children){if(n==e)return t;t+=n.length+n.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}sync(e,t){if(this.flags&2){let n=this.dom,o=null,r;for(let s of this.children){if(s.flags&7){if(!s.dom&&(r=o?o.nextSibling:n.firstChild)){let a=he.get(r);(!a||!a.parent&&a.canReuseDOM(s))&&s.reuseDOM(r)}s.sync(e,t),s.flags&=-8}if(r=o?o.nextSibling:n.firstChild,t&&!t.written&&t.node==n&&r!=s.dom&&(t.written=!0),s.dom.parentNode==n)for(;r&&r!=s.dom;)r=Uh(r);else n.insertBefore(s.dom,r);o=s.dom}for(r=o?o.nextSibling:n.firstChild,r&&t&&t.node==n&&(t.written=!0);r;)r=Uh(r)}else if(this.flags&1)for(let n of this.children)n.flags&7&&(n.sync(e,t),n.flags&=-8)}reuseDOM(e){}localPosFromDOM(e,t){let n;if(e==this.dom)n=this.dom.childNodes[t];else{let o=pn(e)==0?0:t==0?-1:1;for(;;){let r=e.parentNode;if(r==this.dom)break;o==0&&r.firstChild!=r.lastChild&&(e==r.firstChild?o=-1:o=1),e=r}o<0?n=e:n=e.nextSibling}if(n==this.dom.firstChild)return 0;for(;n&&!he.get(n);)n=n.nextSibling;if(!n)return this.length;for(let o=0,r=0;;o++){let s=this.children[o];if(s.dom==n)return r;r+=s.length+s.breakAfter}}domBoundsAround(e,t,n=0){let o=-1,r=-1,s=-1,a=-1;for(let l=0,c=n,f=n;l<this.children.length;l++){let h=this.children[l],d=c+h.length;if(c<e&&d>t)return h.domBoundsAround(e,t,c);if(d>=e&&o==-1&&(o=l,r=c),c>t&&h.dom.parentNode==this.dom){s=l,a=f;break}f=d,c=d+h.breakAfter}return{from:r,to:a<0?n+this.length:a,startDOM:(o?this.children[o-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:s<this.children.length&&s>=0?this.children[s].dom:null}}markDirty(e=!1){this.flags|=2,this.markParentsDirty(e)}markParentsDirty(e){for(let t=this.parent;t;t=t.parent){if(e&&(t.flags|=2),t.flags&1)return;t.flags|=1,e=!1}}setParent(e){this.parent!=e&&(this.parent=e,this.flags&7&&this.markParentsDirty(!0))}setDOM(e){this.dom!=e&&(this.dom&&(this.dom.cmView=null),this.dom=e,e.cmView=this)}get rootView(){for(let e=this;;){let t=e.parent;if(!t)return e;e=t}}replaceChildren(e,t,n=pf){this.markDirty();for(let o=e;o<t;o++){let r=this.children[o];r.parent==this&&n.indexOf(r)<0&&r.destroy()}n.length<250?this.children.splice(e,t-e,...n):this.children=[].concat(this.children.slice(0,e),n,this.children.slice(t));for(let o=0;o<n.length;o++)n[o].setParent(this)}ignoreMutation(e){return!1}ignoreEvent(e){return!1}childCursor(e=this.length){return new Kg(this.children,e,this.children.length)}childPos(e,t=1){return this.childCursor().findPos(e,t)}toString(){let e=this.constructor.name.replace("View","");return e+(this.children.length?"("+this.children.join()+")":this.length?"["+(e=="Text"?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(e){return e.cmView}get isEditable(){return!0}get isWidget(){return!1}get isHidden(){return!1}merge(e,t,n,o,r,s){return!1}become(e){return!1}canReuseDOM(e){return e.constructor==this.constructor&&!((this.flags|e.flags)&8)}getSide(){return 0}destroy(){for(let e of this.children)e.parent==this&&e.destroy();this.parent=null}}he.prototype.breakAfter=0;function Uh(i){let e=i.nextSibling;return i.parentNode.removeChild(i),e}class Kg{constructor(e,t,n){this.children=e,this.pos=t,this.i=n,this.off=0}findPos(e,t=1){for(;;){if(e>this.pos||e==this.pos&&(t>0||this.i==0||this.children[this.i-1].breakAfter))return this.off=e-this.pos,this;let n=this.children[--this.i];this.pos-=n.length+n.breakAfter}}}function Xg(i,e,t,n,o,r,s,a,l){let{children:c}=i,f=c.length?c[e]:null,h=r.length?r[r.length-1]:null,d=h?h.breakAfter:s;if(!(e==n&&f&&!s&&!d&&r.length<2&&f.merge(t,o,r.length?h:null,t==0,a,l))){if(n<c.length){let u=c[n];u&&(o<u.length||u.breakAfter&&h?.breakAfter)?(e==n&&(u=u.split(o),o=0),!d&&h&&u.merge(0,o,h,!0,0,l)?r[r.length-1]=u:((o||u.children.length&&!u.children[0].length)&&u.merge(0,o,null,!1,0,l),r.push(u))):u?.breakAfter&&(h?h.breakAfter=1:s=1),n++}for(f&&(f.breakAfter=s,t>0&&(!s&&r.length&&f.merge(t,f.length,r[0],!1,a,0)?f.breakAfter=r.shift().breakAfter:(t<f.length||f.children.length&&f.children[f.children.length-1].length==0)&&f.merge(t,f.length,null,!1,a,0),e++));e<n&&r.length;)if(c[n-1].become(r[r.length-1]))n--,r.pop(),l=r.length?0:a;else if(c[e].become(r[0]))e++,r.shift(),a=r.length?0:l;else break;!r.length&&e&&n<c.length&&!c[e-1].breakAfter&&c[n].merge(0,0,c[e-1],!1,a,l)&&e--,(e<n||r.length)&&i.replaceChildren(e,n,r)}}function Jg(i,e,t,n,o,r){let s=i.childCursor(),{i:a,off:l}=s.findPos(t,1),{i:c,off:f}=s.findPos(e,-1),h=e-t;for(let d of n)h+=d.length;i.length+=h,Xg(i,c,f,a,l,n,0,o,r)}const jx=256;class Gt extends he{constructor(e){super(),this.text=e}get length(){return this.text.length}createDOM(e){this.setDOM(e||document.createTextNode(this.text))}sync(e,t){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(t&&t.node==this.dom&&(t.written=!0),this.dom.nodeValue=this.text)}reuseDOM(e){e.nodeType==3&&this.createDOM(e)}merge(e,t,n){return this.flags&8||n&&(!(n instanceof Gt)||this.length-(t-e)+n.length>jx||n.flags&8)?!1:(this.text=this.text.slice(0,e)+(n?n.text:"")+this.text.slice(t),this.markDirty(),!0)}split(e){let t=new Gt(this.text.slice(e));return this.text=this.text.slice(0,e),this.markDirty(),t.flags|=this.flags&8,t}localPosFromDOM(e,t){return e==this.dom?t:t?this.text.length:0}domAtPos(e){return new Qe(this.dom,e)}domBoundsAround(e,t,n){return{from:n,to:n+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(e,t){return Hx(this.dom,e,t)}}class Rn extends he{constructor(e,t=[],n=0){super(),this.mark=e,this.children=t,this.length=n;for(let o of t)o.setParent(this)}setAttrs(e){if(Wg(e),this.mark.class&&(e.className=this.mark.class),this.mark.attrs)for(let t in this.mark.attrs)e.setAttribute(t,this.mark.attrs[t]);return e}canReuseDOM(e){return super.canReuseDOM(e)&&!((this.flags|e.flags)&8)}reuseDOM(e){e.nodeName==this.mark.tagName.toUpperCase()&&(this.setDOM(e),this.flags|=6)}sync(e,t){this.dom?this.flags&4&&this.setAttrs(this.dom):this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),super.sync(e,t)}merge(e,t,n,o,r,s){return n&&(!(n instanceof Rn&&n.mark.eq(this.mark))||e&&r<=0||t<this.length&&s<=0)?!1:(Jg(this,e,t,n?n.children.slice():[],r-1,s-1),this.markDirty(),!0)}split(e){let t=[],n=0,o=-1,r=0;for(let a of this.children){let l=n+a.length;l>e&&t.push(n<e?a.split(e-n):a),o<0&&n>=e&&(o=r),n=l,r++}let s=this.length-e;return this.length=e,o>-1&&(this.children.length=o,this.markDirty()),new Rn(this.mark,t,s)}domAtPos(e){return Qg(this,e)}coordsAt(e,t){return em(this,e,t)}}function Hx(i,e,t){let n=i.nodeValue.length;e>n&&(e=n);let o=e,r=e,s=0;e==0&&t<0||e==n&&t>=0?$.chrome||$.gecko||(e?(o--,s=1):r<n&&(r++,s=-1)):t<0?o--:r<n&&r++;let a=Ti(i,o,r).getClientRects();if(!a.length)return null;let l=a[(s?s<0:t>=0)?0:a.length-1];return $.safari&&!s&&l.width==0&&(l=Array.prototype.find.call(a,c=>c.width)||l),s?Tr(l,s<0):l||null}class Un extends he{static create(e,t,n){return new Un(e,t,n)}constructor(e,t,n){super(),this.widget=e,this.length=t,this.side=n,this.prevWidget=null}split(e){let t=Un.create(this.widget,this.length-e,this.side);return this.length-=e,t}sync(e){(!this.dom||!this.widget.updateDOM(this.dom,e))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(e)),this.widget.editable||(this.dom.contentEditable="false"))}getSide(){return this.side}merge(e,t,n,o,r,s){return n&&(!(n instanceof Un)||!this.widget.compare(n.widget)||e>0&&r<=0||t<this.length&&s<=0)?!1:(this.length=e+(n?n.length:0)+(this.length-t),!0)}become(e){return e instanceof Un&&e.side==this.side&&this.widget.constructor==e.widget.constructor?(this.widget.compare(e.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,this.length=e.length,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get overrideDOMText(){if(this.length==0)return ie.empty;let e=this;for(;e.parent;)e=e.parent;let{view:t}=e,n=t&&t.state.doc,o=this.posAtStart;return n?n.slice(o,o+this.length):ie.empty}domAtPos(e){return(this.length?e==0:this.side>0)?Qe.before(this.dom):Qe.after(this.dom,e==this.length)}domBoundsAround(){return null}coordsAt(e,t){let n=this.widget.coordsAt(this.dom,e,t);if(n)return n;let o=this.dom.getClientRects(),r=null;if(!o.length)return null;let s=this.side?this.side<0:e>0;for(let a=s?o.length-1:0;r=o[a],!(e>0?a==0:a==o.length-1||r.top<r.bottom);a+=s?-1:1);return Tr(r,!s)}get isEditable(){return!1}get isWidget(){return!0}get isHidden(){return this.widget.isHidden}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}}class vo extends he{constructor(e){super(),this.side=e}get length(){return 0}merge(){return!1}become(e){return e instanceof vo&&e.side==this.side}split(){return new vo(this.side)}sync(){if(!this.dom){let e=document.createElement("img");e.className="cm-widgetBuffer",e.setAttribute("aria-hidden","true"),this.setDOM(e)}}getSide(){return this.side}domAtPos(e){return this.side>0?Qe.before(this.dom):Qe.after(this.dom)}localPosFromDOM(){return 0}domBoundsAround(){return null}coordsAt(e){return this.dom.getBoundingClientRect()}get overrideDOMText(){return ie.empty}get isHidden(){return!0}}Gt.prototype.children=Un.prototype.children=vo.prototype.children=pf;function Qg(i,e){let t=i.dom,{children:n}=i,o=0;for(let r=0;o<n.length;o++){let s=n[o],a=r+s.length;if(!(a==r&&s.getSide()<=0)){if(e>r&&e<a&&s.dom.parentNode==t)return s.domAtPos(e-r);if(e<=r)break;r=a}}for(let r=o;r>0;r--){let s=n[r-1];if(s.dom.parentNode==t)return s.domAtPos(s.length)}for(let r=o;r<n.length;r++){let s=n[r];if(s.dom.parentNode==t)return s.domAtPos(0)}return new Qe(t,0)}function Zg(i,e,t){let n,{children:o}=i;t>0&&e instanceof Rn&&o.length&&(n=o[o.length-1])instanceof Rn&&n.mark.eq(e.mark)?Zg(n,e.children[0],t-1):(o.push(e),e.setParent(i)),i.length+=e.length}function em(i,e,t){let n=null,o=-1,r=null,s=-1;function a(c,f){for(let h=0,d=0;h<c.children.length&&d<=f;h++){let u=c.children[h],p=d+u.length;p>=f&&(u.children.length?a(u,f-d):(!r||r.isHidden&&(t>0||Wx(r,u)))&&(p>f||d==p&&u.getSide()>0)?(r=u,s=f-d):(d<f||d==p&&u.getSide()<0&&!u.isHidden)&&(n=u,o=f-d)),d=p}}a(i,e);let l=(t<0?n:r)||n||r;return l?l.coordsAt(Math.max(0,l==n?o:s),t):qx(i)}function qx(i){let e=i.dom.lastChild;if(!e)return i.dom.getBoundingClientRect();let t=yo(e);return t[t.length-1]||null}function Wx(i,e){let t=i.coordsAt(0,1),n=e.coordsAt(0,1);return t&&n&&n.top<t.bottom}function vc(i,e){for(let t in i)t=="class"&&e.class?e.class+=" "+i.class:t=="style"&&e.style?e.style+=";"+i.style:e[t]=i[t];return e}const Gh=Object.create(null);function Ks(i,e,t){if(i==e)return!0;i||(i=Gh),e||(e=Gh);let n=Object.keys(i),o=Object.keys(e);if(n.length-(t&&n.indexOf(t)>-1?1:0)!=o.length-(t&&o.indexOf(t)>-1?1:0))return!1;for(let r of n)if(r!=t&&(o.indexOf(r)==-1||i[r]!==e[r]))return!1;return!0}function wc(i,e,t){let n=!1;if(e)for(let o in e)t&&o in t||(n=!0,o=="style"?i.style.cssText="":i.removeAttribute(o));if(t)for(let o in t)e&&e[o]==t[o]||(n=!0,o=="style"?i.style.cssText=t[o]:i.setAttribute(o,t[o]));return n}function Ux(i){let e=Object.create(null);for(let t=0;t<i.attributes.length;t++){let n=i.attributes[t];e[n.name]=n.value}return e}class Aa{eq(e){return!1}updateDOM(e,t){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,n){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var dn=(function(i){return i[i.Text=0]="Text",i[i.WidgetBefore=1]="WidgetBefore",i[i.WidgetAfter=2]="WidgetAfter",i[i.WidgetRange=3]="WidgetRange",i})(dn||(dn={}));class Ne extends Ei{constructor(e,t,n,o){super(),this.startSide=e,this.endSide=t,this.widget=n,this.spec=o}get heightRelevant(){return!1}static mark(e){return new Dr(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),n=!!e.block;return t+=n&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new Zn(e,t,t,n,e.widget||null,!1)}static replace(e){let t=!!e.block,n,o;if(e.isBlockGap)n=-5e8,o=4e8;else{let{start:r,end:s}=tm(e,t);n=(r?t?-3e8:-1:5e8)-1,o=(s?t?2e8:1:-6e8)+1}return new Zn(e,n,o,t,e.widget||null,!0)}static line(e){return new Lr(e)}static set(e,t=!1){return ve.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}Ne.none=ve.empty;class Dr extends Ne{constructor(e){let{start:t,end:n}=tm(e);super(t?-1:5e8,n?1:-6e8,null,e),this.tagName=e.tagName||"span",this.class=e.class||"",this.attrs=e.attributes||null}eq(e){var t,n;return this==e||e instanceof Dr&&this.tagName==e.tagName&&(this.class||((t=this.attrs)===null||t===void 0?void 0:t.class))==(e.class||((n=e.attrs)===null||n===void 0?void 0:n.class))&&Ks(this.attrs,e.attrs,"class")}range(e,t=e){if(e>=t)throw new RangeError("Mark decorations may not be empty");return super.range(e,t)}}Dr.prototype.point=!1;class Lr extends Ne{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof Lr&&this.spec.class==e.spec.class&&Ks(this.spec.attributes,e.spec.attributes)}range(e,t=e){if(t!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,t)}}Lr.prototype.mapMode=yt.TrackBefore;Lr.prototype.point=!0;class Zn extends Ne{constructor(e,t,n,o,r,s){super(t,n,r,e),this.block=o,this.isReplace=s,this.mapMode=o?t<=0?yt.TrackBefore:yt.TrackAfter:yt.TrackDel}get type(){return this.startSide!=this.endSide?dn.WidgetRange:this.startSide<=0?dn.WidgetBefore:dn.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof Zn&&Gx(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&t!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,t)}}Zn.prototype.point=!0;function tm(i,e=!1){let{inclusiveStart:t,inclusiveEnd:n}=i;return t==null&&(t=i.inclusive),n==null&&(n=i.inclusive),{start:t??e,end:n??e}}function Gx(i,e){return i==e||!!(i&&e&&i.compare(e))}function ks(i,e,t,n=0){let o=t.length-1;o>=0&&t[o]+n>=i?t[o]=Math.max(t[o],e):t.push(i,e)}class De extends he{constructor(){super(...arguments),this.children=[],this.length=0,this.prevAttrs=void 0,this.attrs=null,this.breakAfter=0}merge(e,t,n,o,r,s){if(n){if(!(n instanceof De))return!1;this.dom||n.transferDOM(this)}return o&&this.setDeco(n?n.attrs:null),Jg(this,e,t,n?n.children.slice():[],r,s),!0}split(e){let t=new De;if(t.breakAfter=this.breakAfter,this.length==0)return t;let{i:n,off:o}=this.childPos(e);o&&(t.append(this.children[n].split(o),0),this.children[n].merge(o,this.children[n].length,null,!1,0,0),n++);for(let r=n;r<this.children.length;r++)t.append(this.children[r],0);for(;n>0&&this.children[n-1].length==0;)this.children[--n].destroy();return this.children.length=n,this.markDirty(),this.length=e,t}transferDOM(e){this.dom&&(this.markDirty(),e.setDOM(this.dom),e.prevAttrs=this.prevAttrs===void 0?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(e){Ks(this.attrs,e)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=e)}append(e,t){Zg(this,e,t)}addLineDeco(e){let t=e.spec.attributes,n=e.spec.class;t&&(this.attrs=vc(t,this.attrs||{})),n&&(this.attrs=vc({class:n},this.attrs||{}))}domAtPos(e){return Qg(this,e)}reuseDOM(e){e.nodeName=="DIV"&&(this.setDOM(e),this.flags|=6)}sync(e,t){var n;this.dom?this.flags&4&&(Wg(this.dom),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0):(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),this.prevAttrs!==void 0&&(wc(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(e,t);let o=this.dom.lastChild;for(;o&&he.get(o)instanceof Rn;)o=o.lastChild;if(!o||!this.length||o.nodeName!="BR"&&((n=he.get(o))===null||n===void 0?void 0:n.isEditable)==!1&&(!$.ios||!this.children.some(r=>r instanceof Gt))){let r=document.createElement("BR");r.cmIgnore=!0,this.dom.appendChild(r)}}measureTextSize(){if(this.children.length==0||this.length>20)return null;let e=0,t;for(let n of this.children){if(!(n instanceof Gt)||/[^ -~]/.test(n.text))return null;let o=yo(n.dom);if(o.length!=1)return null;e+=o[0].width,t=o[0].height}return e?{lineHeight:this.dom.getBoundingClientRect().height,charWidth:e/this.length,textHeight:t}:null}coordsAt(e,t){let n=em(this,e,t);if(!this.children.length&&n&&this.parent){let{heightOracle:o}=this.parent.view.viewState,r=n.bottom-n.top;if(Math.abs(r-o.lineHeight)<2&&o.textHeight<r){let s=(r-o.textHeight)/2;return{top:n.top+s,bottom:n.bottom-s,left:n.left,right:n.left}}}return n}become(e){return e instanceof De&&this.children.length==0&&e.children.length==0&&Ks(this.attrs,e.attrs)&&this.breakAfter==e.breakAfter}covers(){return!0}static find(e,t){for(let n=0,o=0;n<e.children.length;n++){let r=e.children[n],s=o+r.length;if(s>=t){if(r instanceof De)return r;if(s>t)break}o=s+r.breakAfter}return null}}class En extends he{constructor(e,t,n){super(),this.widget=e,this.length=t,this.deco=n,this.breakAfter=0,this.prevWidget=null}merge(e,t,n,o,r,s){return n&&(!(n instanceof En)||!this.widget.compare(n.widget)||e>0&&r<=0||t<this.length&&s<=0)?!1:(this.length=e+(n?n.length:0)+(this.length-t),!0)}domAtPos(e){return e==0?Qe.before(this.dom):Qe.after(this.dom,e==this.length)}split(e){let t=this.length-e;this.length=e;let n=new En(this.widget,t,this.deco);return n.breakAfter=this.breakAfter,n}get children(){return pf}sync(e){(!this.dom||!this.widget.updateDOM(this.dom,e))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(e)),this.widget.editable||(this.dom.contentEditable="false"))}get overrideDOMText(){return this.parent?this.parent.view.state.doc.slice(this.posAtStart,this.posAtEnd):ie.empty}domBoundsAround(){return null}become(e){return e instanceof En&&e.widget.constructor==this.widget.constructor?(e.widget.compare(this.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,this.length=e.length,this.deco=e.deco,this.breakAfter=e.breakAfter,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get isEditable(){return!1}get isWidget(){return!0}coordsAt(e,t){let n=this.widget.coordsAt(this.dom,e,t);return n||(this.widget instanceof xc?null:Tr(this.dom.getBoundingClientRect(),this.length?e==0:t<=0))}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}covers(e){let{startSide:t,endSide:n}=this.deco;return t==n?!1:e<0?t<0:n>0}}class xc extends Aa{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}class Xo{constructor(e,t,n,o){this.doc=e,this.pos=t,this.end=n,this.disallowBlockEffectsFor=o,this.content=[],this.curLine=null,this.breakAtStart=0,this.pendingBuffer=0,this.bufferMarks=[],this.atCursorPos=!0,this.openStart=-1,this.openEnd=-1,this.text="",this.textOff=0,this.cursor=e.iter(),this.skip=t}posCovered(){if(this.content.length==0)return!this.breakAtStart&&this.doc.lineAt(this.pos).from!=this.pos;let e=this.content[this.content.length-1];return!(e.breakAfter||e instanceof En&&e.deco.endSide<0)}getLine(){return this.curLine||(this.content.push(this.curLine=new De),this.atCursorPos=!0),this.curLine}flushBuffer(e=this.bufferMarks){this.pendingBuffer&&(this.curLine.append(Jr(new vo(-1),e),e.length),this.pendingBuffer=0)}addBlockWidget(e){this.flushBuffer(),this.curLine=null,this.content.push(e)}finish(e){this.pendingBuffer&&e<=this.bufferMarks.length?this.flushBuffer():this.pendingBuffer=0,!this.posCovered()&&!(e&&this.content.length&&this.content[this.content.length-1]instanceof En)&&this.getLine()}buildText(e,t,n){for(;e>0;){if(this.textOff==this.text.length){let{value:s,lineBreak:a,done:l}=this.cursor.next(this.skip);if(this.skip=0,l)throw new Error("Ran out of text content when drawing inline views");if(a){this.posCovered()||this.getLine(),this.content.length?this.content[this.content.length-1].breakAfter=1:this.breakAtStart=1,this.flushBuffer(),this.curLine=null,this.atCursorPos=!0,e--;continue}else this.text=s,this.textOff=0}let o=Math.min(this.text.length-this.textOff,e),r=Math.min(o,512);this.flushBuffer(t.slice(t.length-n)),this.getLine().append(Jr(new Gt(this.text.slice(this.textOff,this.textOff+r)),t),n),this.atCursorPos=!0,this.textOff+=r,e-=r,n=o<=r?0:t.length}}span(e,t,n,o){this.buildText(t-e,n,o),this.pos=t,this.openStart<0&&(this.openStart=o)}point(e,t,n,o,r,s){if(this.disallowBlockEffectsFor[s]&&n instanceof Zn){if(n.block)throw new RangeError("Block decorations may not be specified via plugins");if(t>this.doc.lineAt(this.pos).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}let a=t-e;if(n instanceof Zn)if(n.block)n.startSide>0&&!this.posCovered()&&this.getLine(),this.addBlockWidget(new En(n.widget||wo.block,a,n));else{let l=Un.create(n.widget||wo.inline,a,a?0:n.startSide),c=this.atCursorPos&&!l.isEditable&&r<=o.length&&(e<t||n.startSide>0),f=!l.isEditable&&(e<t||r>o.length||n.startSide<=0),h=this.getLine();this.pendingBuffer==2&&!c&&!l.isEditable&&(this.pendingBuffer=0),this.flushBuffer(o),c&&(h.append(Jr(new vo(1),o),r),r=o.length+Math.max(0,r-o.length)),h.append(Jr(l,o),r),this.atCursorPos=f,this.pendingBuffer=f?e<t||r>o.length?1:2:0,this.pendingBuffer&&(this.bufferMarks=o.slice())}else this.doc.lineAt(this.pos).from==this.pos&&this.getLine().addLineDeco(n);a&&(this.textOff+a<=this.text.length?this.textOff+=a:(this.skip+=a-(this.text.length-this.textOff),this.text="",this.textOff=0),this.pos=t),this.openStart<0&&(this.openStart=r)}static build(e,t,n,o,r){let s=new Xo(e,t,n,r);return s.openEnd=ve.spans(o,t,n,s),s.openStart<0&&(s.openStart=s.openEnd),s.finish(s.openEnd),s}}function Jr(i,e){for(let t of e)i=new Rn(t,[i],i.length);return i}class wo extends Aa{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}wo.inline=new wo("span");wo.block=new wo("div");var Le=(function(i){return i[i.LTR=0]="LTR",i[i.RTL=1]="RTL",i})(Le||(Le={}));const Di=Le.LTR,gf=Le.RTL;function nm(i){let e=[];for(let t=0;t<i.length;t++)e.push(1<<+i[t]);return e}const Yx=nm("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),Kx=nm("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),Sc=Object.create(null),en=[];for(let i of["()","[]","{}"]){let e=i.charCodeAt(0),t=i.charCodeAt(1);Sc[e]=t,Sc[t]=-e}function im(i){return i<=247?Yx[i]:1424<=i&&i<=1524?2:1536<=i&&i<=1785?Kx[i-1536]:1774<=i&&i<=2220?4:8192<=i&&i<=8204?256:64336<=i&&i<=65023?4:1}const Xx=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class Gn{get dir(){return this.level%2?gf:Di}constructor(e,t,n){this.from=e,this.to=t,this.level=n}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,n,o){let r=-1;for(let s=0;s<e.length;s++){let a=e[s];if(a.from<=t&&a.to>=t){if(a.level==n)return s;(r<0||(o!=0?o<0?a.from<t:a.to>t:e[r].level>a.level))&&(r=s)}}if(r<0)throw new RangeError("Index out of range");return r}}function om(i,e){if(i.length!=e.length)return!1;for(let t=0;t<i.length;t++){let n=i[t],o=e[t];if(n.from!=o.from||n.to!=o.to||n.direction!=o.direction||!om(n.inner,o.inner))return!1}return!0}const pe=[];function Jx(i,e,t,n,o){for(let r=0;r<=n.length;r++){let s=r?n[r-1].to:e,a=r<n.length?n[r].from:t,l=r?256:o;for(let c=s,f=l,h=l;c<a;c++){let d=im(i.charCodeAt(c));d==512?d=f:d==8&&h==4&&(d=16),pe[c]=d==4?2:d,d&7&&(h=d),f=d}for(let c=s,f=l,h=l;c<a;c++){let d=pe[c];if(d==128)c<a-1&&f==pe[c+1]&&f&24?d=pe[c]=f:pe[c]=256;else if(d==64){let u=c+1;for(;u<a&&pe[u]==64;)u++;let p=c&&f==8||u<t&&pe[u]==8?h==1?1:8:256;for(let g=c;g<u;g++)pe[g]=p;c=u-1}else d==8&&h==1&&(pe[c]=1);f=d,d&7&&(h=d)}}}function Qx(i,e,t,n,o){let r=o==1?2:1;for(let s=0,a=0,l=0;s<=n.length;s++){let c=s?n[s-1].to:e,f=s<n.length?n[s].from:t;for(let h=c,d,u,p;h<f;h++)if(u=Sc[d=i.charCodeAt(h)])if(u<0){for(let g=a-3;g>=0;g-=3)if(en[g+1]==-u){let m=en[g+2],b=m&2?o:m&4?m&1?r:o:0;b&&(pe[h]=pe[en[g]]=b),a=g;break}}else{if(en.length==189)break;en[a++]=h,en[a++]=d,en[a++]=l}else if((p=pe[h])==2||p==1){let g=p==o;l=g?0:1;for(let m=a-3;m>=0;m-=3){let b=en[m+2];if(b&2)break;if(g)en[m+2]|=2;else{if(b&4)break;en[m+2]|=4}}}}}function Zx(i,e,t,n){for(let o=0,r=n;o<=t.length;o++){let s=o?t[o-1].to:i,a=o<t.length?t[o].from:e;for(let l=s;l<a;){let c=pe[l];if(c==256){let f=l+1;for(;;)if(f==a){if(o==t.length)break;f=t[o++].to,a=o<t.length?t[o].from:e}else if(pe[f]==256)f++;else break;let h=r==1,d=(f<e?pe[f]:n)==1,u=h==d?h?1:2:n;for(let p=f,g=o,m=g?t[g-1].to:i;p>l;)p==m&&(p=t[--g].from,m=g?t[g-1].to:i),pe[--p]=u;l=f}else r=c,l++}}}function kc(i,e,t,n,o,r,s){let a=n%2?2:1;if(n%2==o%2)for(let l=e,c=0;l<t;){let f=!0,h=!1;if(c==r.length||l<r[c].from){let g=pe[l];g!=a&&(f=!1,h=g==16)}let d=!f&&a==1?[]:null,u=f?n:n+1,p=l;e:for(;;)if(c<r.length&&p==r[c].from){if(h)break e;let g=r[c];if(!f)for(let m=g.to,b=c+1;;){if(m==t)break e;if(b<r.length&&r[b].from==m)m=r[b++].to;else{if(pe[m]==a)break e;break}}if(c++,d)d.push(g);else{g.from>l&&s.push(new Gn(l,g.from,u));let m=g.direction==Di!=!(u%2);Cc(i,m?n+1:n,o,g.inner,g.from,g.to,s),l=g.to}p=g.to}else{if(p==t||(f?pe[p]!=a:pe[p]==a))break;p++}d?kc(i,l,p,n+1,o,d,s):l<p&&s.push(new Gn(l,p,u)),l=p}else for(let l=t,c=r.length;l>e;){let f=!0,h=!1;if(!c||l>r[c-1].to){let g=pe[l-1];g!=a&&(f=!1,h=g==16)}let d=!f&&a==1?[]:null,u=f?n:n+1,p=l;e:for(;;)if(c&&p==r[c-1].to){if(h)break e;let g=r[--c];if(!f)for(let m=g.from,b=c;;){if(m==e)break e;if(b&&r[b-1].to==m)m=r[--b].from;else{if(pe[m-1]==a)break e;break}}if(d)d.push(g);else{g.to<l&&s.push(new Gn(g.to,l,u));let m=g.direction==Di!=!(u%2);Cc(i,m?n+1:n,o,g.inner,g.from,g.to,s),l=g.from}p=g.from}else{if(p==e||(f?pe[p-1]!=a:pe[p-1]==a))break;p--}d?kc(i,p,l,n+1,o,d,s):p<l&&s.push(new Gn(p,l,u)),l=p}}function Cc(i,e,t,n,o,r,s){let a=e%2?2:1;Jx(i,o,r,n,a),Qx(i,o,r,n,a),Zx(o,r,n,a),kc(i,o,r,e,t,n,s)}function eS(i,e,t){if(!i)return[new Gn(0,0,e==gf?1:0)];if(e==Di&&!t.length&&!Xx.test(i))return rm(i.length);if(t.length)for(;i.length>pe.length;)pe[pe.length]=256;let n=[],o=e==Di?0:1;return Cc(i,o,o,t,0,i.length,n),n}function rm(i){return[new Gn(0,i,0)]}let sm="";function tS(i,e,t,n,o){var r;let s=n.head-i.from,a=Gn.find(e,s,(r=n.bidiLevel)!==null&&r!==void 0?r:-1,n.assoc),l=e[a],c=l.side(o,t);if(s==c){let d=a+=o?1:-1;if(d<0||d>=e.length)return null;l=e[a=d],s=l.side(!o,t),c=l.side(o,t)}let f=rt(i.text,s,l.forward(o,t));(f<l.from||f>l.to)&&(f=c),sm=i.text.slice(Math.min(s,f),Math.max(s,f));let h=a==(o?e.length-1:0)?null:e[a+(o?1:-1)];return h&&f==c&&h.level+(o?0:1)<l.level?N.cursor(h.side(!o,t)+i.from,h.forward(o,t)?1:-1,h.level):N.cursor(f+i.from,l.forward(o,t)?-1:1,l.level)}function nS(i,e,t){for(let n=e;n<t;n++){let o=im(i.charCodeAt(n));if(o==1)return Di;if(o==2||o==4)return gf}return Di}const am=G.define(),lm=G.define(),cm=G.define(),fm=G.define(),Ac=G.define(),hm=G.define(),dm=G.define(),mf=G.define(),bf=G.define(),um=G.define({combine:i=>i.some(e=>e)}),iS=G.define({combine:i=>i.some(e=>e)}),pm=G.define();class io{constructor(e,t="nearest",n="nearest",o=5,r=5,s=!1){this.range=e,this.y=t,this.x=n,this.yMargin=o,this.xMargin=r,this.isSnapshot=s}map(e){return e.empty?this:new io(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new io(N.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Qr=Me.define({map:(i,e)=>i.map(e)}),gm=Me.define();function vt(i,e,t){let n=i.facet(fm);n.length?n[0](e):window.onerror&&window.onerror(String(e),t,void 0,void 0,e)||(t?console.error(t+":",e):console.error(e))}const Cn=G.define({combine:i=>i.length?i[0]:!0});let oS=0;const Ji=G.define({combine(i){return i.filter((e,t)=>{for(let n=0;n<t;n++)if(i[n].plugin==e.plugin)return!1;return!0})}});class Nn{constructor(e,t,n,o,r){this.id=e,this.create=t,this.domEventHandlers=n,this.domEventObservers=o,this.baseExtensions=r(this),this.extension=this.baseExtensions.concat(Ji.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(Ji.of({plugin:this,arg:e}))}static define(e,t){const{eventHandlers:n,eventObservers:o,provide:r,decorations:s}=t||{};return new Nn(oS++,e,n,o,a=>{let l=[];return s&&l.push(br.of(c=>{let f=c.plugin(a);return f?s(f):Ne.none})),r&&l.push(r(a)),l})}static fromClass(e,t){return Nn.define((n,o)=>new e(n,o),t)}}class il{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(this.value){if(this.mustUpdate){let t=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(t)}catch(n){if(vt(t.state,n,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){vt(e.state,t,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var t;if(!((t=this.value)===null||t===void 0)&&t.destroy)try{this.value.destroy()}catch(n){vt(e.state,n,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const mm=G.define(),yf=G.define(),br=G.define(),bm=G.define(),Rr=G.define(),ym=G.define();function Yh(i,e){let t=i.state.facet(ym);if(!t.length)return t;let n=t.map(r=>r instanceof Function?r(i):r),o=[];return ve.spans(n,e.from,e.to,{point(){},span(r,s,a,l){let c=r-e.from,f=s-e.from,h=o;for(let d=a.length-1;d>=0;d--,l--){let u=a[d].spec.bidiIsolate,p;if(u==null&&(u=nS(e.text,c,f)),l>0&&h.length&&(p=h[h.length-1]).to==c&&p.direction==u)p.to=f,h=p.inner;else{let g={from:c,to:f,direction:u,inner:[]};h.push(g),h=g.inner}}}}),o}const vm=G.define();function vf(i){let e=0,t=0,n=0,o=0;for(let r of i.state.facet(vm)){let s=r(i);s&&(s.left!=null&&(e=Math.max(e,s.left)),s.right!=null&&(t=Math.max(t,s.right)),s.top!=null&&(n=Math.max(n,s.top)),s.bottom!=null&&(o=Math.max(o,s.bottom)))}return{left:e,right:t,top:n,bottom:o}}const jo=G.define();class Lt{constructor(e,t,n,o){this.fromA=e,this.toA=t,this.fromB=n,this.toB=o}join(e){return new Lt(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let t=e.length,n=this;for(;t>0;t--){let o=e[t-1];if(!(o.fromA>n.toA)){if(o.toA<n.fromA)break;n=n.join(o),e.splice(t-1,1)}}return e.splice(t,0,n),e}static extendWithRanges(e,t){if(t.length==0)return e;let n=[];for(let o=0,r=0,s=0,a=0;;o++){let l=o==e.length?null:e[o],c=s-a,f=l?l.fromB:1e9;for(;r<t.length&&t[r]<f;){let h=t[r],d=t[r+1],u=Math.max(a,h),p=Math.min(f,d);if(u<=p&&new Lt(u+c,p+c,u,p).addToSet(n),d>f)break;r+=2}if(!l)return n;new Lt(l.fromA,l.toA,l.fromB,l.toB).addToSet(n),s=l.toA,a=l.toB}}}class Xs{constructor(e,t,n){this.view=e,this.state=t,this.transactions=n,this.flags=0,this.startState=e.state,this.changes=Fe.empty(this.startState.doc.length);for(let r of n)this.changes=this.changes.compose(r.changes);let o=[];this.changes.iterChangedRanges((r,s,a,l)=>o.push(new Lt(r,s,a,l))),this.changedRanges=o}static create(e,t,n){return new Xs(e,t,n)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}class Kh extends he{get length(){return this.view.state.doc.length}constructor(e){super(),this.view=e,this.decorations=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.markedForComposition=new Set,this.editContextFormatting=Ne.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.setDOM(e.contentDOM),this.children=[new De],this.children[0].setParent(this),this.updateDeco(),this.updateInner([new Lt(0,0,0,e.state.doc.length)],0,null)}update(e){var t;let n=e.changedRanges;this.minWidth>0&&n.length&&(n.every(({fromA:c,toA:f})=>f<this.minWidthFrom||c>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let o=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(!((t=this.domChanged)===null||t===void 0)&&t.newSel?o=this.domChanged.newSel.head:!hS(e.changes,this.hasComposition)&&!e.selectionSet&&(o=e.state.selection.main.head));let r=o>-1?sS(this.view,e.changes,o):null;if(this.domChanged=null,this.hasComposition){this.markedForComposition.clear();let{from:c,to:f}=this.hasComposition;n=new Lt(c,f,e.changes.mapPos(c,-1),e.changes.mapPos(f,1)).addToSet(n.slice())}this.hasComposition=r?{from:r.range.fromB,to:r.range.toB}:null,($.ie||$.chrome)&&!r&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let s=this.decorations,a=this.updateDeco(),l=cS(s,a,e.changes);return n=Lt.extendWithRanges(n,l),!(this.flags&7)&&n.length==0?!1:(this.updateInner(n,e.startState.doc.length,r),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t,n){this.view.viewState.mustMeasureContent=!0,this.updateChildren(e,t,n);let{observer:o}=this.view;o.ignore(()=>{this.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let s=$.chrome||$.ios?{node:o.selectionRange.focusNode,written:!1}:void 0;this.sync(this.view,s),this.flags&=-8,s&&(s.written||o.selectionRange.focusNode!=s.node)&&(this.forceSelection=!0),this.dom.style.height=""}),this.markedForComposition.forEach(s=>s.flags&=-9);let r=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let s of this.children)s instanceof En&&s.widget instanceof xc&&r.push(s.dom);o.updateGaps(r)}updateChildren(e,t,n){let o=n?n.range.addToSet(e.slice()):e,r=this.childCursor(t);for(let s=o.length-1;;s--){let a=s>=0?o[s]:null;if(!a)break;let{fromA:l,toA:c,fromB:f,toB:h}=a,d,u,p,g;if(n&&n.range.fromB<h&&n.range.toB>f){let v=Xo.build(this.view.state.doc,f,n.range.fromB,this.decorations,this.dynamicDecorationMap),C=Xo.build(this.view.state.doc,n.range.toB,h,this.decorations,this.dynamicDecorationMap);u=v.breakAtStart,p=v.openStart,g=C.openEnd;let S=this.compositionView(n);C.breakAtStart?S.breakAfter=1:C.content.length&&S.merge(S.length,S.length,C.content[0],!1,C.openStart,0)&&(S.breakAfter=C.content[0].breakAfter,C.content.shift()),v.content.length&&S.merge(0,0,v.content[v.content.length-1],!0,0,v.openEnd)&&v.content.pop(),d=v.content.concat(S).concat(C.content)}else({content:d,breakAtStart:u,openStart:p,openEnd:g}=Xo.build(this.view.state.doc,f,h,this.decorations,this.dynamicDecorationMap));let{i:m,off:b}=r.findPos(c,1),{i:y,off:x}=r.findPos(l,-1);Xg(this,y,x,m,b,d,u,p,g)}n&&this.fixCompositionDOM(n)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let n of t.effects)n.is(gm)&&(this.editContextFormatting=n.value)}compositionView(e){let t=new Gt(e.text.nodeValue);t.flags|=8;for(let{deco:o}of e.marks)t=new Rn(o,[t],t.length);let n=new De;return n.append(t,0),n}fixCompositionDOM(e){let t=(r,s)=>{s.flags|=8|(s.children.some(l=>l.flags&7)?1:0),this.markedForComposition.add(s);let a=he.get(r);a&&a!=s&&(a.dom=null),s.setDOM(r)},n=this.childPos(e.range.fromB,1),o=this.children[n.i];t(e.line,o);for(let r=e.marks.length-1;r>=-1;r--)n=o.childPos(n.off,1),o=o.children[n.i],t(r>=0?e.marks[r].node:e.text,o)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let n=this.view.root.activeElement,o=n==this.dom,r=!o&&!(this.view.state.facet(Cn)||this.dom.tabIndex>-1)&&Ss(this.dom,this.view.observer.selectionRange)&&!(n&&this.dom.contains(n));if(!(o||t||r))return;let s=this.forceSelection;this.forceSelection=!1;let a=this.view.state.selection.main,l=this.moveToLine(this.domAtPos(a.anchor)),c=a.empty?l:this.moveToLine(this.domAtPos(a.head));if($.gecko&&a.empty&&!this.hasComposition&&rS(l)){let h=document.createTextNode("");this.view.observer.ignore(()=>l.node.insertBefore(h,l.node.childNodes[l.offset]||null)),l=c=new Qe(h,0),s=!0}let f=this.view.observer.selectionRange;(s||!f.focusNode||(!Ko(l.node,l.offset,f.anchorNode,f.anchorOffset)||!Ko(c.node,c.offset,f.focusNode,f.focusOffset))&&!this.suppressWidgetCursorChange(f,a))&&(this.view.observer.ignore(()=>{$.android&&$.chrome&&this.dom.contains(f.focusNode)&&fS(f.focusNode,this.dom)&&(this.dom.blur(),this.dom.focus({preventScroll:!0}));let h=mr(this.view.root);if(h)if(a.empty){if($.gecko){let d=aS(l.node,l.offset);if(d&&d!=3){let u=(d==1?Gg:Yg)(l.node,l.offset);u&&(l=new Qe(u.node,u.offset))}}h.collapse(l.node,l.offset),a.bidiLevel!=null&&h.caretBidiLevel!==void 0&&(h.caretBidiLevel=a.bidiLevel)}else if(h.extend){h.collapse(l.node,l.offset);try{h.extend(c.node,c.offset)}catch{}}else{let d=document.createRange();a.anchor>a.head&&([l,c]=[c,l]),d.setEnd(c.node,c.offset),d.setStart(l.node,l.offset),h.removeAllRanges(),h.addRange(d)}r&&this.view.root.activeElement==this.dom&&(this.dom.blur(),n&&n.focus())}),this.view.observer.setSelectionRange(l,c)),this.impreciseAnchor=l.precise?null:new Qe(f.anchorNode,f.anchorOffset),this.impreciseHead=c.precise?null:new Qe(f.focusNode,f.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&Ko(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,n=mr(e.root),{anchorNode:o,anchorOffset:r}=e.observer.selectionRange;if(!n||!t.empty||!t.assoc||!n.modify)return;let s=De.find(this,t.head);if(!s)return;let a=s.posAtStart;if(t.head==a||t.head==a+s.length)return;let l=this.coordsAt(t.head,-1),c=this.coordsAt(t.head,1);if(!l||!c||l.bottom>c.top)return;let f=this.domAtPos(t.head+t.assoc);n.collapse(f.node,f.offset),n.modify("move",t.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let h=e.observer.selectionRange;e.docView.posFromDOM(h.anchorNode,h.anchorOffset)!=t.from&&n.collapse(o,r)}moveToLine(e){let t=this.dom,n;if(e.node!=t)return e;for(let o=e.offset;!n&&o<t.childNodes.length;o++){let r=he.get(t.childNodes[o]);r instanceof De&&(n=r.domAtPos(0))}for(let o=e.offset-1;!n&&o>=0;o--){let r=he.get(t.childNodes[o]);r instanceof De&&(n=r.domAtPos(r.length))}return n?new Qe(n.node,n.offset,!0):e}nearest(e){for(let t=e;t;){let n=he.get(t);if(n&&n.rootView==this)return n;t=t.parentNode}return null}posFromDOM(e,t){let n=this.nearest(e);if(!n)throw new RangeError("Trying to find position for a DOM position outside of the document");return n.localPosFromDOM(e,t)+n.posAtStart}domAtPos(e){let{i:t,off:n}=this.childCursor().findPos(e,-1);for(;t<this.children.length-1;){let o=this.children[t];if(n<o.length||o instanceof De)break;t++,n=0}return this.children[t].domAtPos(n)}coordsAt(e,t){let n=null,o=0;for(let r=this.length,s=this.children.length-1;s>=0;s--){let a=this.children[s],l=r-a.breakAfter,c=l-a.length;if(l<e)break;if(c<=e&&(c<e||a.covers(-1))&&(l>e||a.covers(1))&&(!n||a instanceof De&&!(n instanceof De&&t>=0)))n=a,o=c;else if(n&&c==e&&l==e&&a instanceof En&&Math.abs(t)<2){if(a.deco.startSide<0)break;s&&(n=null)}r=c}return n?n.coordsAt(e-o,t):null}coordsForChar(e){let{i:t,off:n}=this.childPos(e,1),o=this.children[t];if(!(o instanceof De))return null;for(;o.children.length;){let{i:a,off:l}=o.childPos(n,1);for(;;a++){if(a==o.children.length)return null;if((o=o.children[a]).length)break}n=l}if(!(o instanceof Gt))return null;let r=rt(o.text,n);if(r==n)return null;let s=Ti(o.dom,n,r).getClientRects();for(let a=0;a<s.length;a++){let l=s[a];if(a==s.length-1||l.top<l.bottom&&l.left<l.right)return l}return null}measureVisibleLineHeights(e){let t=[],{from:n,to:o}=e,r=this.view.contentDOM.clientWidth,s=r>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,a=-1,l=this.view.textDirection==Le.LTR;for(let c=0,f=0;f<this.children.length;f++){let h=this.children[f],d=c+h.length;if(d>o)break;if(c>=n){let u=h.dom.getBoundingClientRect();if(t.push(u.height),s){let p=h.dom.lastChild,g=p?yo(p):[];if(g.length){let m=g[g.length-1],b=l?m.right-u.left:u.right-m.left;b>a&&(a=b,this.minWidth=r,this.minWidthFrom=c,this.minWidthTo=d)}}}c=d+h.breakAfter}return t}textDirectionAt(e){let{i:t}=this.childPos(e,1);return getComputedStyle(this.children[t].dom).direction=="rtl"?Le.RTL:Le.LTR}measureTextSize(){for(let r of this.children)if(r instanceof De){let s=r.measureTextSize();if(s)return s}let e=document.createElement("div"),t,n,o;return e.className="cm-line",e.style.width="99999px",e.style.position="absolute",e.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.dom.appendChild(e);let r=yo(e.firstChild)[0];t=e.getBoundingClientRect().height,n=r?r.width/27:7,o=r?r.height:t,e.remove()}),{lineHeight:t,charWidth:n,textHeight:o}}childCursor(e=this.length){let t=this.children.length;return t&&(e-=this.children[--t].length),new Kg(this.children,e,t)}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let n=0,o=0;;o++){let r=o==t.viewports.length?null:t.viewports[o],s=r?r.from-1:this.length;if(s>n){let a=(t.lineBlockAt(s).bottom-t.lineBlockAt(n).top)/this.view.scaleY;e.push(Ne.replace({widget:new xc(a),block:!0,inclusive:!0,isBlockGap:!0}).range(n,s))}if(!r)break;n=r.to+1}return Ne.set(e)}updateDeco(){let e=1,t=this.view.state.facet(br).map(r=>(this.dynamicDecorationMap[e++]=typeof r=="function")?r(this.view):r),n=!1,o=this.view.state.facet(bm).map((r,s)=>{let a=typeof r=="function";return a&&(n=!0),a?r(this.view):r});for(o.length&&(this.dynamicDecorationMap[e++]=n,t.push(ve.join(o))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;return this.decorations}scrollIntoView(e){if(e.isSnapshot){let c=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=c.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let c of this.view.state.facet(pm))try{if(c(this.view,e.range,e))return!0}catch(f){vt(this.view.state,f,"scroll handler")}let{range:t}=e,n=this.coordsAt(t.head,t.empty?t.assoc:t.head>t.anchor?-1:1),o;if(!n)return;!t.empty&&(o=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(n={left:Math.min(n.left,o.left),top:Math.min(n.top,o.top),right:Math.max(n.right,o.right),bottom:Math.max(n.bottom,o.bottom)});let r=vf(this.view),s={left:n.left-r.left,top:n.top-r.top,right:n.right+r.right,bottom:n.bottom+r.bottom},{offsetWidth:a,offsetHeight:l}=this.view.scrollDOM;$x(this.view.scrollDOM,s,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,a),-a),Math.max(Math.min(e.yMargin,l),-l),this.view.textDirection==Le.LTR)}lineHasWidget(e){let{i:t}=this.childCursor().findPos(e);if(t==this.children.length)return!1;let n=o=>o instanceof Un||o.children.some(n);return n(this.children[t])}}function rS(i){return i.node.nodeType==1&&i.node.firstChild&&(i.offset==0||i.node.childNodes[i.offset-1].contentEditable=="false")&&(i.offset==i.node.childNodes.length||i.node.childNodes[i.offset].contentEditable=="false")}function wm(i,e){let t=i.observer.selectionRange;if(!t.focusNode)return null;let n=Gg(t.focusNode,t.focusOffset),o=Yg(t.focusNode,t.focusOffset),r=n||o;if(o&&n&&o.node!=n.node){let a=he.get(o.node);if(!a||a instanceof Gt&&a.text!=o.node.nodeValue)r=o;else if(i.docView.lastCompositionAfterCursor){let l=he.get(n.node);!l||l instanceof Gt&&l.text!=n.node.nodeValue||(r=o)}}if(i.docView.lastCompositionAfterCursor=r!=n,!r)return null;let s=e-r.offset;return{from:s,to:s+r.node.nodeValue.length,node:r.node}}function sS(i,e,t){let n=wm(i,t);if(!n)return null;let{node:o,from:r,to:s}=n,a=o.nodeValue;if(/[\n\r]/.test(a)||i.state.doc.sliceString(n.from,n.to)!=a)return null;let l=e.invertedDesc,c=new Lt(l.mapPos(r),l.mapPos(s),r,s),f=[];for(let h=o.parentNode;;h=h.parentNode){let d=he.get(h);if(d instanceof Rn)f.push({node:h,deco:d.mark});else{if(d instanceof De||h.nodeName=="DIV"&&h.parentNode==i.contentDOM)return{range:c,text:o,marks:f,line:h};if(h!=i.contentDOM)f.push({node:h,deco:new Dr({inclusive:!0,attributes:Ux(h),tagName:h.tagName.toLowerCase()})});else return null}}}function aS(i,e){return i.nodeType!=1?0:(e&&i.childNodes[e-1].contentEditable=="false"?1:0)|(e<i.childNodes.length&&i.childNodes[e].contentEditable=="false"?2:0)}let lS=class{constructor(){this.changes=[]}compareRange(e,t){ks(e,t,this.changes)}comparePoint(e,t){ks(e,t,this.changes)}boundChange(e){ks(e,e,this.changes)}};function cS(i,e,t){let n=new lS;return ve.compare(i,e,t,n),n.changes}function fS(i,e){for(let t=i;t&&t!=e;t=t.assignedSlot||t.parentNode)if(t.nodeType==1&&t.contentEditable=="false")return!0;return!1}function hS(i,e){let t=!1;return e&&i.iterChangedRanges((n,o)=>{n<e.to&&o>e.from&&(t=!0)}),t}function dS(i,e,t=1){let n=i.charCategorizer(e),o=i.doc.lineAt(e),r=e-o.from;if(o.length==0)return N.cursor(e);r==0?t=1:r==o.length&&(t=-1);let s=r,a=r;t<0?s=rt(o.text,r,!1):a=rt(o.text,r);let l=n(o.text.slice(s,a));for(;s>0;){let c=rt(o.text,s,!1);if(n(o.text.slice(c,s))!=l)break;s=c}for(;a<o.length;){let c=rt(o.text,a);if(n(o.text.slice(a,c))!=l)break;a=c}return N.range(s+o.from,a+o.from)}function uS(i,e){return e.left>i?e.left-i:Math.max(0,i-e.right)}function pS(i,e){return e.top>i?e.top-i:Math.max(0,i-e.bottom)}function ol(i,e){return i.top<e.bottom-1&&i.bottom>e.top+1}function Xh(i,e){return e<i.top?{top:e,left:i.left,right:i.right,bottom:i.bottom}:i}function Jh(i,e){return e>i.bottom?{top:i.top,left:i.left,right:i.right,bottom:e}:i}function _c(i,e,t){let n,o,r,s,a=!1,l,c,f,h;for(let p=i.firstChild;p;p=p.nextSibling){let g=yo(p);for(let m=0;m<g.length;m++){let b=g[m];o&&ol(o,b)&&(b=Xh(Jh(b,o.bottom),o.top));let y=uS(e,b),x=pS(t,b);if(y==0&&x==0)return p.nodeType==3?Qh(p,e,t):_c(p,e,t);(!n||s>x||s==x&&r>y)&&(n=p,o=b,r=y,s=x,a=y?e<b.left?m>0:m<g.length-1:!0),y==0?t>b.bottom&&(!f||f.bottom<b.bottom)?(l=p,f=b):t<b.top&&(!h||h.top>b.top)&&(c=p,h=b):f&&ol(f,b)?f=Jh(f,b.bottom):h&&ol(h,b)&&(h=Xh(h,b.top))}}if(f&&f.bottom>=t?(n=l,o=f):h&&h.top<=t&&(n=c,o=h),!n)return{node:i,offset:0};let d=Math.max(o.left,Math.min(o.right,e));if(n.nodeType==3)return Qh(n,d,t);if(a&&n.contentEditable!="false")return _c(n,d,t);let u=Array.prototype.indexOf.call(i.childNodes,n)+(e>=(o.left+o.right)/2?1:0);return{node:i,offset:u}}function Qh(i,e,t){let n=i.nodeValue.length,o=-1,r=1e9,s=0;for(let a=0;a<n;a++){let l=Ti(i,a,a+1).getClientRects();for(let c=0;c<l.length;c++){let f=l[c];if(f.top==f.bottom)continue;s||(s=e-f.left);let h=(f.top>t?f.top-t:t-f.bottom)-1;if(f.left-1<=e&&f.right+1>=e&&h<r){let d=e>=(f.left+f.right)/2,u=d;if($.chrome||$.gecko){let p=Ti(i,a).getBoundingClientRect();Math.abs(p.left-f.right)<.1&&(u=!d)}if(h<=0)return{node:i,offset:a+(u?1:0)};o=a+(u?1:0),r=h}}}return{node:i,offset:o>-1?o:s>0?i.nodeValue.length:0}}function xm(i,e,t,n=-1){var o,r;let s=i.contentDOM.getBoundingClientRect(),a=s.top+i.viewState.paddingTop,l,{docHeight:c}=i.viewState,{x:f,y:h}=e,d=h-a;if(d<0)return 0;if(d>c)return i.state.doc.length;for(let v=i.viewState.heightOracle.textHeight/2,C=!1;l=i.elementAtHeight(d),l.type!=dn.Text;)for(;d=n>0?l.bottom+v:l.top-v,!(d>=0&&d<=c);){if(C)return t?null:0;C=!0,n=-n}h=a+d;let u=l.from;if(u<i.viewport.from)return i.viewport.from==0?0:t?null:Zh(i,s,l,f,h);if(u>i.viewport.to)return i.viewport.to==i.state.doc.length?i.state.doc.length:t?null:Zh(i,s,l,f,h);let p=i.dom.ownerDocument,g=i.root.elementFromPoint?i.root:p,m=g.elementFromPoint(f,h);m&&!i.contentDOM.contains(m)&&(m=null),m||(f=Math.max(s.left+1,Math.min(s.right-1,f)),m=g.elementFromPoint(f,h),m&&!i.contentDOM.contains(m)&&(m=null));let b,y=-1;if(m&&((o=i.docView.nearest(m))===null||o===void 0?void 0:o.isEditable)!=!1){if(p.caretPositionFromPoint){let v=p.caretPositionFromPoint(f,h);v&&({offsetNode:b,offset:y}=v)}else if(p.caretRangeFromPoint){let v=p.caretRangeFromPoint(f,h);v&&({startContainer:b,startOffset:y}=v)}b&&(!i.contentDOM.contains(b)||$.safari&&gS(b,y,f)||$.chrome&&mS(b,y,f))&&(b=void 0),b&&(y=Math.min(pn(b),y))}if(!b||!i.docView.dom.contains(b)){let v=De.find(i.docView,u);if(!v)return d>l.top+l.height/2?l.to:l.from;({node:b,offset:y}=_c(v.dom,f,h))}let x=i.docView.nearest(b);if(!x)return null;if(x.isWidget&&((r=x.dom)===null||r===void 0?void 0:r.nodeType)==1){let v=x.dom.getBoundingClientRect();return e.y<v.top||e.y<=v.bottom&&e.x<=(v.left+v.right)/2?x.posAtStart:x.posAtEnd}else return x.localPosFromDOM(b,y)+x.posAtStart}function Zh(i,e,t,n,o){let r=Math.round((n-e.left)*i.defaultCharacterWidth);if(i.lineWrapping&&t.height>i.defaultLineHeight*1.5){let a=i.viewState.heightOracle.textHeight,l=Math.floor((o-t.top-(i.defaultLineHeight-a)*.5)/a);r+=l*i.viewState.heightOracle.lineLength}let s=i.state.sliceDoc(t.from,t.to);return t.from+Ex(s,r,i.state.tabSize)}function Sm(i,e,t){let n,o=i;if(i.nodeType!=3||e!=(n=i.nodeValue.length))return!1;for(;;){let r=o.nextSibling;if(r){if(r.nodeName=="BR")break;return!1}else{let s=o.parentNode;if(!s||s.nodeName=="DIV")break;o=s}}return Ti(i,n-1,n).getBoundingClientRect().right>t}function gS(i,e,t){return Sm(i,e,t)}function mS(i,e,t){if(e!=0)return Sm(i,e,t);for(let o=i;;){let r=o.parentNode;if(!r||r.nodeType!=1||r.firstChild!=o)return!1;if(r.classList.contains("cm-line"))break;o=r}let n=i.nodeType==1?i.getBoundingClientRect():Ti(i,0,Math.max(i.nodeValue.length,1)).getBoundingClientRect();return t-n.left>5}function bS(i,e,t){let n=i.lineBlockAt(e);if(Array.isArray(n.type)){let o;for(let r of n.type){if(r.from>e)break;if(!(r.to<e)){if(r.from<e&&r.to>e)return r;(!o||r.type==dn.Text&&(o.type!=r.type||(t<0?r.from<e:r.to>e)))&&(o=r)}}return o||n}return n}function yS(i,e,t,n){let o=bS(i,e.head,e.assoc||-1),r=!n||o.type!=dn.Text||!(i.lineWrapping||o.widgetLineBreaks)?null:i.coordsAtPos(e.assoc<0&&e.head>o.from?e.head-1:e.head);if(r){let s=i.dom.getBoundingClientRect(),a=i.textDirectionAt(o.from),l=i.posAtCoords({x:t==(a==Le.LTR)?s.right-1:s.left+1,y:(r.top+r.bottom)/2});if(l!=null)return N.cursor(l,t?-1:1)}return N.cursor(t?o.to:o.from,t?-1:1)}function ed(i,e,t,n){let o=i.state.doc.lineAt(e.head),r=i.bidiSpans(o),s=i.textDirectionAt(o.from);for(let a=e,l=null;;){let c=tS(o,r,s,a,t),f=sm;if(!c){if(o.number==(t?i.state.doc.lines:1))return a;f=`
`,o=i.state.doc.line(o.number+(t?1:-1)),r=i.bidiSpans(o),c=i.visualLineSide(o,!t)}if(l){if(!l(f))return a}else{if(!n)return c;l=n(f)}a=c}}function vS(i,e,t){let n=i.state.charCategorizer(e),o=n(t);return r=>{let s=n(r);return o==An.Space&&(o=s),o==s}}function wS(i,e,t,n){let o=e.head,r=t?1:-1;if(o==(t?i.state.doc.length:0))return N.cursor(o,e.assoc);let s=e.goalColumn,a,l=i.contentDOM.getBoundingClientRect(),c=i.coordsAtPos(o,e.assoc||-1),f=i.documentTop;if(c)s==null&&(s=c.left-l.left),a=r<0?c.top:c.bottom;else{let u=i.viewState.lineBlockAt(o);s==null&&(s=Math.min(l.right-l.left,i.defaultCharacterWidth*(o-u.from))),a=(r<0?u.top:u.bottom)+f}let h=l.left+s,d=n??i.viewState.heightOracle.textHeight>>1;for(let u=0;;u+=10){let p=a+(d+u)*r,g=xm(i,{x:h,y:p},!1,r);if(p<l.top||p>l.bottom||(r<0?g<o:g>o)){let m=i.docView.coordsForChar(g),b=!m||p<m.top?-1:1;return N.cursor(g,b,void 0,s)}}}function Jo(i,e,t){for(;;){let n=0;for(let o of i)o.between(e-1,e+1,(r,s,a)=>{if(e>r&&e<s){let l=n||t||(e-r<s-e?-1:1);e=l<0?r:s,n=l}});if(!n)return e}}function km(i,e){let t=null;for(let n=0;n<e.ranges.length;n++){let o=e.ranges[n],r=null;if(o.empty){let s=Jo(i,o.from,0);s!=o.from&&(r=N.cursor(s,-1))}else{let s=Jo(i,o.from,-1),a=Jo(i,o.to,1);(s!=o.from||a!=o.to)&&(r=N.range(o.from==o.anchor?s:a,o.from==o.head?s:a))}r&&(t||(t=e.ranges.slice()),t[n]=r)}return t?N.create(t,e.mainIndex):e}function rl(i,e,t){let n=Jo(i.state.facet(Rr).map(o=>o(i)),t.from,e.head>t.from?-1:1);return n==t.from?t:N.cursor(n,n<t.from?1:-1)}const Ho="￿";class xS{constructor(e,t){this.points=e,this.text="",this.lineSeparator=t.facet(le.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=Ho}readRange(e,t){if(!e)return this;let n=e.parentNode;for(let o=e;;){this.findPointBefore(n,o);let r=this.text.length;this.readNode(o);let s=o.nextSibling;if(s==t)break;let a=he.get(o),l=he.get(s);(a&&l?a.breakAfter:(a?a.breakAfter:Ys(o))||Ys(s)&&(o.nodeName!="BR"||o.cmIgnore)&&this.text.length>r)&&!kS(s,t)&&this.lineBreak(),o=s}return this.findPointBefore(n,t),this}readTextNode(e){let t=e.nodeValue;for(let n of this.points)n.node==e&&(n.pos=this.text.length+Math.min(n.offset,t.length));for(let n=0,o=this.lineSeparator?null:/\r\n?|\n/g;;){let r=-1,s=1,a;if(this.lineSeparator?(r=t.indexOf(this.lineSeparator,n),s=this.lineSeparator.length):(a=o.exec(t))&&(r=a.index,s=a[0].length),this.append(t.slice(n,r<0?t.length:r)),r<0)break;if(this.lineBreak(),s>1)for(let l of this.points)l.node==e&&l.pos>this.text.length&&(l.pos-=s-1);n=r+s}}readNode(e){if(e.cmIgnore)return;let t=he.get(e),n=t&&t.overrideDOMText;if(n!=null){this.findPointInside(e,n.length);for(let o=n.iter();!o.next().done;)o.lineBreak?this.lineBreak():this.append(o.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName=="BR"?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let n of this.points)n.node==e&&e.childNodes[n.offset]==t&&(n.pos=this.text.length)}findPointInside(e,t){for(let n of this.points)(e.nodeType==3?n.node==e:e.contains(n.node))&&(n.pos=this.text.length+(SS(e,n.node,n.offset)?t:0))}}function SS(i,e,t){for(;;){if(!e||t<pn(e))return!1;if(e==i)return!0;t=Pi(e)+1,e=e.parentNode}}function kS(i,e){let t;for(;!(i==e||!i);i=i.nextSibling){let n=he.get(i);if(!(n?.isWidget||i.cmIgnore))return!1;n&&(t||(t=[])).push(n)}if(t)for(let n of t){let o=n.overrideDOMText;if(o?.length)return!1}return!0}class td{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}}class CS{constructor(e,t,n,o){this.typeOver=o,this.bounds=null,this.text="",this.domChanged=t>-1;let{impreciseHead:r,impreciseAnchor:s}=e.docView;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=e.docView.domBoundsAround(t,n,0))){let a=r||s?[]:_S(e),l=new xS(a,e.state);l.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=l.text,this.newSel=MS(a,this.bounds.from)}else{let a=e.observer.selectionRange,l=r&&r.node==a.focusNode&&r.offset==a.focusOffset||!yc(e.contentDOM,a.focusNode)?e.state.selection.main.head:e.docView.posFromDOM(a.focusNode,a.focusOffset),c=s&&s.node==a.anchorNode&&s.offset==a.anchorOffset||!yc(e.contentDOM,a.anchorNode)?e.state.selection.main.anchor:e.docView.posFromDOM(a.anchorNode,a.anchorOffset),f=e.viewport;if(($.ios||$.chrome)&&e.state.selection.main.empty&&l!=c&&(f.from>0||f.to<e.state.doc.length)){let h=Math.min(l,c),d=Math.max(l,c),u=f.from-h,p=f.to-d;(u==0||u==1||h==0)&&(p==0||p==-1||d==e.state.doc.length)&&(l=0,c=e.state.doc.length)}e.inputState.composing>-1&&e.state.selection.ranges.length>1?this.newSel=e.state.selection.replaceRange(N.range(c,l)):this.newSel=N.single(c,l)}}}function Cm(i,e){let t,{newSel:n}=e,o=i.state.selection.main,r=i.inputState.lastKeyTime>Date.now()-100?i.inputState.lastKeyCode:-1;if(e.bounds){let{from:s,to:a}=e.bounds,l=o.from,c=null;(r===8||$.android&&e.text.length<a-s)&&(l=o.to,c="end");let f=Am(i.state.doc.sliceString(s,a,Ho),e.text,l-s,c);f&&($.chrome&&r==13&&f.toB==f.from+2&&e.text.slice(f.from,f.toB)==Ho+Ho&&f.toB--,t={from:s+f.from,to:s+f.toA,insert:ie.of(e.text.slice(f.from,f.toB).split(Ho))})}else n&&(!i.hasFocus&&i.state.facet(Cn)||n.main.eq(o))&&(n=null);if(!t&&!n)return!1;if(!t&&e.typeOver&&!o.empty&&n&&n.main.empty?t={from:o.from,to:o.to,insert:i.state.doc.slice(o.from,o.to)}:($.mac||$.android)&&t&&t.from==t.to&&t.from==o.head-1&&/^\. ?$/.test(t.insert.toString())&&i.contentDOM.getAttribute("autocorrect")=="off"?(n&&t.insert.length==2&&(n=N.single(n.main.anchor-1,n.main.head-1)),t={from:t.from,to:t.to,insert:ie.of([t.insert.toString().replace("."," ")])}):t&&t.from>=o.from&&t.to<=o.to&&(t.from!=o.from||t.to!=o.to)&&o.to-o.from-(t.to-t.from)<=4?t={from:o.from,to:o.to,insert:i.state.doc.slice(o.from,t.from).append(t.insert).append(i.state.doc.slice(t.to,o.to))}:i.state.doc.lineAt(o.from).to<o.to&&i.docView.lineHasWidget(o.to)&&i.inputState.insertingTextAt>Date.now()-50?t={from:o.from,to:o.to,insert:i.state.toText(i.inputState.insertingText)}:$.chrome&&t&&t.from==t.to&&t.from==o.head&&t.insert.toString()==`
 `&&i.lineWrapping&&(n&&(n=N.single(n.main.anchor-1,n.main.head-1)),t={from:o.from,to:o.to,insert:ie.of([" "])}),t)return wf(i,t,n,r);if(n&&!n.main.eq(o)){let s=!1,a="select";return i.inputState.lastSelectionTime>Date.now()-50&&(i.inputState.lastSelectionOrigin=="select"&&(s=!0),a=i.inputState.lastSelectionOrigin,a=="select.pointer"&&(n=km(i.state.facet(Rr).map(l=>l(i)),n))),i.dispatch({selection:n,scrollIntoView:s,userEvent:a}),!0}else return!1}function wf(i,e,t,n=-1){if($.ios&&i.inputState.flushIOSKey(e))return!0;let o=i.state.selection.main;if($.android&&(e.to==o.to&&(e.from==o.from||e.from==o.from-1&&i.state.sliceDoc(e.from,o.from)==" ")&&e.insert.length==1&&e.insert.lines==2&&no(i.contentDOM,"Enter",13)||(e.from==o.from-1&&e.to==o.to&&e.insert.length==0||n==8&&e.insert.length<e.to-e.from&&e.to>o.head)&&no(i.contentDOM,"Backspace",8)||e.from==o.from&&e.to==o.to+1&&e.insert.length==0&&no(i.contentDOM,"Delete",46)))return!0;let r=e.insert.toString();i.inputState.composing>=0&&i.inputState.composing++;let s,a=()=>s||(s=AS(i,e,t));return i.state.facet(hm).some(l=>l(i,e.from,e.to,r,a))||i.dispatch(a()),!0}function AS(i,e,t){let n,o=i.state,r=o.selection.main,s=-1;if(e.from==e.to&&e.from<r.from||e.from>r.to){let l=e.from<r.from?-1:1,c=l<0?r.from:r.to,f=Jo(o.facet(Rr).map(h=>h(i)),c,l);e.from==f&&(s=f)}if(s>-1)n={changes:e,selection:N.cursor(e.from+e.insert.length,-1)};else if(e.from>=r.from&&e.to<=r.to&&e.to-e.from>=(r.to-r.from)/3&&(!t||t.main.empty&&t.main.from==e.from+e.insert.length)&&i.inputState.composing<0){let l=r.from<e.from?o.sliceDoc(r.from,e.from):"",c=r.to>e.to?o.sliceDoc(e.to,r.to):"";n=o.replaceSelection(i.state.toText(l+e.insert.sliceString(0,void 0,i.state.lineBreak)+c))}else{let l=o.changes(e),c=t&&t.main.to<=l.newLength?t.main:void 0;if(o.selection.ranges.length>1&&(i.inputState.composing>=0||i.inputState.compositionPendingChange)&&e.to<=r.to+10&&e.to>=r.to-10){let f=i.state.sliceDoc(e.from,e.to),h,d=t&&wm(i,t.main.head);if(d){let p=e.insert.length-(e.to-e.from);h={from:d.from,to:d.to-p}}else h=i.state.doc.lineAt(r.head);let u=r.to-e.to;n=o.changeByRange(p=>{if(p.from==r.from&&p.to==r.to)return{changes:l,range:c||p.map(l)};let g=p.to-u,m=g-f.length;if(i.state.sliceDoc(m,g)!=f||g>=h.from&&m<=h.to)return{range:p};let b=o.changes({from:m,to:g,insert:e.insert}),y=p.to-r.to;return{changes:b,range:c?N.range(Math.max(0,c.anchor+y),Math.max(0,c.head+y)):p.map(b)}})}else n={changes:l,selection:c&&o.selection.replaceRange(c)}}let a="input.type";return(i.composing||i.inputState.compositionPendingChange&&i.inputState.compositionEndedAt>Date.now()-50)&&(i.inputState.compositionPendingChange=!1,a+=".compose",i.inputState.compositionFirstChange&&(a+=".start",i.inputState.compositionFirstChange=!1)),o.update(n,{userEvent:a,scrollIntoView:!0})}function Am(i,e,t,n){let o=Math.min(i.length,e.length),r=0;for(;r<o&&i.charCodeAt(r)==e.charCodeAt(r);)r++;if(r==o&&i.length==e.length)return null;let s=i.length,a=e.length;for(;s>0&&a>0&&i.charCodeAt(s-1)==e.charCodeAt(a-1);)s--,a--;if(n=="end"){let l=Math.max(0,r-Math.min(s,a));t-=s+l-r}if(s<r&&i.length<e.length){let l=t<=r&&t>=s?r-t:0;r-=l,a=r+(a-s),s=r}else if(a<r){let l=t<=r&&t>=a?r-t:0;r-=l,s=r+(s-a),a=r}return{from:r,toA:s,toB:a}}function _S(i){let e=[];if(i.root.activeElement!=i.contentDOM)return e;let{anchorNode:t,anchorOffset:n,focusNode:o,focusOffset:r}=i.observer.selectionRange;return t&&(e.push(new td(t,n)),(o!=t||r!=n)&&e.push(new td(o,r))),e}function MS(i,e){if(i.length==0)return null;let t=i[0].pos,n=i.length==2?i[1].pos:t;return t>-1&&n>-1?N.single(t+e,n+e):null}class IS{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,$.safari&&e.contentDOM.addEventListener("input",()=>null),$.gecko&&qS(e.contentDOM.ownerDocument)}handleEvent(e){!NS(this.view,e)||this.ignoreDuringComposition(e)||e.type=="keydown"&&this.keydown(e)||(this.view.updateState!=0?Promise.resolve().then(()=>this.runHandlers(e.type,e)):this.runHandlers(e.type,e))}runHandlers(e,t){let n=this.handlers[e];if(n){for(let o of n.observers)o(this.view,t);for(let o of n.handlers){if(t.defaultPrevented)break;if(o(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=OS(e),n=this.handlers,o=this.view.contentDOM;for(let r in t)if(r!="scroll"){let s=!t[r].handlers.length,a=n[r];a&&s!=!a.handlers.length&&(o.removeEventListener(r,this.handleEvent),a=null),a||o.addEventListener(r,this.handleEvent,{passive:s})}for(let r in n)r!="scroll"&&!t[r]&&o.removeEventListener(r,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Mm.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),$.android&&$.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;let t;return $.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&((t=_m.find(n=>n.keyCode==e.keyCode))&&!e.ctrlKey||ES.indexOf(e.key)>-1&&e.ctrlKey&&!e.shiftKey)?(this.pendingIOSKey=t||e,setTimeout(()=>this.flushIOSKey(),250),!0):(e.keyCode!=229&&this.view.observer.forceFlush(),!1)}flushIOSKey(e){let t=this.pendingIOSKey;return!t||t.key=="Enter"&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,no(this.view.contentDOM,t.key,t.keyCode,t instanceof KeyboardEvent?t:void 0))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:$.safari&&!$.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function nd(i,e){return(t,n)=>{try{return e.call(i,n,t)}catch(o){vt(t.state,o)}}}function OS(i){let e=Object.create(null);function t(n){return e[n]||(e[n]={observers:[],handlers:[]})}for(let n of i){let o=n.spec,r=o&&o.plugin.domEventHandlers,s=o&&o.plugin.domEventObservers;if(r)for(let a in r){let l=r[a];l&&t(a).handlers.push(nd(n.value,l))}if(s)for(let a in s){let l=s[a];l&&t(a).observers.push(nd(n.value,l))}}for(let n in Yt)t(n).handlers.push(Yt[n]);for(let n in Nt)t(n).observers.push(Nt[n]);return e}const _m=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],ES="dthko",Mm=[16,17,18,20,91,92,224,225],Zr=6;function es(i){return Math.max(0,i)*.7+8}function PS(i,e){return Math.max(Math.abs(i.clientX-e.clientX),Math.abs(i.clientY-e.clientY))}class TS{constructor(e,t,n,o){this.view=e,this.startEvent=t,this.style=n,this.mustSelect=o,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=Bx(e.contentDOM),this.atoms=e.state.facet(Rr).map(s=>s(e));let r=e.contentDOM.ownerDocument;r.addEventListener("mousemove",this.move=this.move.bind(this)),r.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(le.allowMultipleSelections)&&DS(e,t),this.dragging=RS(e,t)&&Em(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&PS(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,n=0,o=0,r=0,s=this.view.win.innerWidth,a=this.view.win.innerHeight;this.scrollParents.x&&({left:o,right:s}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:r,bottom:a}=this.scrollParents.y.getBoundingClientRect());let l=vf(this.view);e.clientX-l.left<=o+Zr?t=-es(o-e.clientX):e.clientX+l.right>=s-Zr&&(t=es(e.clientX-s)),e.clientY-l.top<=r+Zr?n=-es(r-e.clientY):e.clientY+l.bottom>=a-Zr&&(n=es(e.clientY-a)),this.setScrollSpeed(t,n)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:t}=this,n=km(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!n.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:n,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(t=>t.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function DS(i,e){let t=i.state.facet(am);return t.length?t[0](e):$.mac?e.metaKey:e.ctrlKey}function LS(i,e){let t=i.state.facet(lm);return t.length?t[0](e):$.mac?!e.altKey:!e.ctrlKey}function RS(i,e){let{main:t}=i.state.selection;if(t.empty)return!1;let n=mr(i.root);if(!n||n.rangeCount==0)return!0;let o=n.getRangeAt(0).getClientRects();for(let r=0;r<o.length;r++){let s=o[r];if(s.left<=e.clientX&&s.right>=e.clientX&&s.top<=e.clientY&&s.bottom>=e.clientY)return!0}return!1}function NS(i,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let t=e.target,n;t!=i.contentDOM;t=t.parentNode)if(!t||t.nodeType==11||(n=he.get(t))&&n.ignoreEvent(e))return!1;return!0}const Yt=Object.create(null),Nt=Object.create(null),Im=$.ie&&$.ie_version<15||$.ios&&$.webkit_version<604;function $S(i){let e=i.dom.parentNode;if(!e)return;let t=e.appendChild(document.createElement("textarea"));t.style.cssText="position: fixed; left: -10000px; top: 10px",t.focus(),setTimeout(()=>{i.focus(),t.remove(),Om(i,t.value)},50)}function _a(i,e,t){for(let n of i.facet(e))t=n(t,i);return t}function Om(i,e){e=_a(i.state,mf,e);let{state:t}=i,n,o=1,r=t.toText(e),s=r.lines==t.selection.ranges.length;if(Mc!=null&&t.selection.ranges.every(l=>l.empty)&&Mc==r.toString()){let l=-1;n=t.changeByRange(c=>{let f=t.doc.lineAt(c.from);if(f.from==l)return{range:c};l=f.from;let h=t.toText((s?r.line(o++).text:e)+t.lineBreak);return{changes:{from:f.from,insert:h},range:N.cursor(c.from+h.length)}})}else s?n=t.changeByRange(l=>{let c=r.line(o++);return{changes:{from:l.from,to:l.to,insert:c.text},range:N.cursor(l.from+c.length)}}):n=t.replaceSelection(r);i.dispatch(n,{userEvent:"input.paste",scrollIntoView:!0})}Nt.scroll=i=>{i.inputState.lastScrollTop=i.scrollDOM.scrollTop,i.inputState.lastScrollLeft=i.scrollDOM.scrollLeft};Yt.keydown=(i,e)=>(i.inputState.setSelectionOrigin("select"),e.keyCode==27&&i.inputState.tabFocusMode!=0&&(i.inputState.tabFocusMode=Date.now()+2e3),!1);Nt.touchstart=(i,e)=>{i.inputState.lastTouchTime=Date.now(),i.inputState.setSelectionOrigin("select.pointer")};Nt.touchmove=i=>{i.inputState.setSelectionOrigin("select.pointer")};Yt.mousedown=(i,e)=>{if(i.observer.flush(),i.inputState.lastTouchTime>Date.now()-2e3)return!1;let t=null;for(let n of i.state.facet(cm))if(t=n(i,e),t)break;if(!t&&e.button==0&&(t=FS(i,e)),t){let n=!i.hasFocus;i.inputState.startMouseSelection(new TS(i,e,t,n)),n&&i.observer.ignore(()=>{qg(i.contentDOM);let r=i.root.activeElement;r&&!r.contains(i.contentDOM)&&r.blur()});let o=i.inputState.mouseSelection;if(o)return o.start(e),o.dragging===!1}else i.inputState.setSelectionOrigin("select.pointer");return!1};function id(i,e,t,n){if(n==1)return N.cursor(e,t);if(n==2)return dS(i.state,e,t);{let o=De.find(i.docView,e),r=i.state.doc.lineAt(o?o.posAtEnd:e),s=o?o.posAtStart:r.from,a=o?o.posAtEnd:r.to;return a<i.state.doc.length&&a==r.to&&a++,N.range(s,a)}}let od=(i,e,t)=>e>=t.top&&e<=t.bottom&&i>=t.left&&i<=t.right;function BS(i,e,t,n){let o=De.find(i.docView,e);if(!o)return 1;let r=e-o.posAtStart;if(r==0)return 1;if(r==o.length)return-1;let s=o.coordsAt(r,-1);if(s&&od(t,n,s))return-1;let a=o.coordsAt(r,1);return a&&od(t,n,a)?1:s&&s.bottom>=n?-1:1}function rd(i,e){let t=i.posAtCoords({x:e.clientX,y:e.clientY},!1);return{pos:t,bias:BS(i,t,e.clientX,e.clientY)}}const VS=$.ie&&$.ie_version<=11;let sd=null,ad=0,ld=0;function Em(i){if(!VS)return i.detail;let e=sd,t=ld;return sd=i,ld=Date.now(),ad=!e||t>Date.now()-400&&Math.abs(e.clientX-i.clientX)<2&&Math.abs(e.clientY-i.clientY)<2?(ad+1)%3:1}function FS(i,e){let t=rd(i,e),n=Em(e),o=i.state.selection;return{update(r){r.docChanged&&(t.pos=r.changes.mapPos(t.pos),o=o.map(r.changes))},get(r,s,a){let l=rd(i,r),c,f=id(i,l.pos,l.bias,n);if(t.pos!=l.pos&&!s){let h=id(i,t.pos,t.bias,n),d=Math.min(h.from,f.from),u=Math.max(h.to,f.to);f=d<f.from?N.range(d,u):N.range(u,d)}return s?o.replaceRange(o.main.extend(f.from,f.to)):a&&n==1&&o.ranges.length>1&&(c=zS(o,l.pos))?c:a?o.addRange(f):N.create([f])}}}function zS(i,e){for(let t=0;t<i.ranges.length;t++){let{from:n,to:o}=i.ranges[t];if(n<=e&&o>=e)return N.create(i.ranges.slice(0,t).concat(i.ranges.slice(t+1)),i.mainIndex==t?0:i.mainIndex-(i.mainIndex>t?1:0))}return null}Yt.dragstart=(i,e)=>{let{selection:{main:t}}=i.state;if(e.target.draggable){let o=i.docView.nearest(e.target);if(o&&o.isWidget){let r=o.posAtStart,s=r+o.length;(r>=t.to||s<=t.from)&&(t=N.range(r,s))}}let{inputState:n}=i;return n.mouseSelection&&(n.mouseSelection.dragging=!0),n.draggedContent=t,e.dataTransfer&&(e.dataTransfer.setData("Text",_a(i.state,bf,i.state.sliceDoc(t.from,t.to))),e.dataTransfer.effectAllowed="copyMove"),!1};Yt.dragend=i=>(i.inputState.draggedContent=null,!1);function cd(i,e,t,n){if(t=_a(i.state,mf,t),!t)return;let o=i.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:r}=i.inputState,s=n&&r&&LS(i,e)?{from:r.from,to:r.to}:null,a={from:o,insert:t},l=i.state.changes(s?[s,a]:a);i.focus(),i.dispatch({changes:l,selection:{anchor:l.mapPos(o,-1),head:l.mapPos(o,1)},userEvent:s?"move.drop":"input.drop"}),i.inputState.draggedContent=null}Yt.drop=(i,e)=>{if(!e.dataTransfer)return!1;if(i.state.readOnly)return!0;let t=e.dataTransfer.files;if(t&&t.length){let n=Array(t.length),o=0,r=()=>{++o==t.length&&cd(i,e,n.filter(s=>s!=null).join(i.state.lineBreak),!1)};for(let s=0;s<t.length;s++){let a=new FileReader;a.onerror=r,a.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(a.result)||(n[s]=a.result),r()},a.readAsText(t[s])}return!0}else{let n=e.dataTransfer.getData("Text");if(n)return cd(i,e,n,!0),!0}return!1};Yt.paste=(i,e)=>{if(i.state.readOnly)return!0;i.observer.flush();let t=Im?null:e.clipboardData;return t?(Om(i,t.getData("text/plain")||t.getData("text/uri-list")),!0):($S(i),!1)};function jS(i,e){let t=i.dom.parentNode;if(!t)return;let n=t.appendChild(document.createElement("textarea"));n.style.cssText="position: fixed; left: -10000px; top: 10px",n.value=e,n.focus(),n.selectionEnd=e.length,n.selectionStart=0,setTimeout(()=>{n.remove(),i.focus()},50)}function HS(i){let e=[],t=[],n=!1;for(let o of i.selection.ranges)o.empty||(e.push(i.sliceDoc(o.from,o.to)),t.push(o));if(!e.length){let o=-1;for(let{from:r}of i.selection.ranges){let s=i.doc.lineAt(r);s.number>o&&(e.push(s.text),t.push({from:s.from,to:Math.min(i.doc.length,s.to+1)})),o=s.number}n=!0}return{text:_a(i,bf,e.join(i.lineBreak)),ranges:t,linewise:n}}let Mc=null;Yt.copy=Yt.cut=(i,e)=>{let{text:t,ranges:n,linewise:o}=HS(i.state);if(!t&&!o)return!1;Mc=o?t:null,e.type=="cut"&&!i.state.readOnly&&i.dispatch({changes:n,scrollIntoView:!0,userEvent:"delete.cut"});let r=Im?null:e.clipboardData;return r?(r.clearData(),r.setData("text/plain",t),!0):(jS(i,t),!1)};const Pm=zi.define();function Tm(i,e){let t=[];for(let n of i.facet(dm)){let o=n(i,e);o&&t.push(o)}return t.length?i.update({effects:t,annotations:Pm.of(!0)}):null}function Dm(i){setTimeout(()=>{let e=i.hasFocus;if(e!=i.inputState.notifiedFocused){let t=Tm(i.state,e);t?i.dispatch(t):i.update([])}},10)}Nt.focus=i=>{i.inputState.lastFocusTime=Date.now(),!i.scrollDOM.scrollTop&&(i.inputState.lastScrollTop||i.inputState.lastScrollLeft)&&(i.scrollDOM.scrollTop=i.inputState.lastScrollTop,i.scrollDOM.scrollLeft=i.inputState.lastScrollLeft),Dm(i)};Nt.blur=i=>{i.observer.clearSelectionRange(),Dm(i)};Nt.compositionstart=Nt.compositionupdate=i=>{i.observer.editContext||(i.inputState.compositionFirstChange==null&&(i.inputState.compositionFirstChange=!0),i.inputState.composing<0&&(i.inputState.composing=0))};Nt.compositionend=i=>{i.observer.editContext||(i.inputState.composing=-1,i.inputState.compositionEndedAt=Date.now(),i.inputState.compositionPendingKey=!0,i.inputState.compositionPendingChange=i.observer.pendingRecords().length>0,i.inputState.compositionFirstChange=null,$.chrome&&$.android?i.observer.flushSoon():i.inputState.compositionPendingChange?Promise.resolve().then(()=>i.observer.flush()):setTimeout(()=>{i.inputState.composing<0&&i.docView.hasComposition&&i.update([])},50))};Nt.contextmenu=i=>{i.inputState.lastContextMenu=Date.now()};Yt.beforeinput=(i,e)=>{var t,n;if((e.inputType=="insertText"||e.inputType=="insertCompositionText")&&(i.inputState.insertingText=e.data,i.inputState.insertingTextAt=Date.now()),e.inputType=="insertReplacementText"&&i.observer.editContext){let r=(t=e.dataTransfer)===null||t===void 0?void 0:t.getData("text/plain"),s=e.getTargetRanges();if(r&&s.length){let a=s[0],l=i.posAtDOM(a.startContainer,a.startOffset),c=i.posAtDOM(a.endContainer,a.endOffset);return wf(i,{from:l,to:c,insert:i.state.toText(r)},null),!0}}let o;if($.chrome&&$.android&&(o=_m.find(r=>r.inputType==e.inputType))&&(i.observer.delayAndroidKey(o.key,o.keyCode),o.key=="Backspace"||o.key=="Delete")){let r=((n=window.visualViewport)===null||n===void 0?void 0:n.height)||0;setTimeout(()=>{var s;(((s=window.visualViewport)===null||s===void 0?void 0:s.height)||0)>r+10&&i.hasFocus&&(i.contentDOM.blur(),i.focus())},100)}return $.ios&&e.inputType=="deleteContentForward"&&i.observer.flushSoon(),$.safari&&e.inputType=="insertText"&&i.inputState.composing>=0&&setTimeout(()=>Nt.compositionend(i,e),20),!1};const fd=new Set;function qS(i){fd.has(i)||(fd.add(i),i.addEventListener("copy",()=>{}),i.addEventListener("cut",()=>{}))}const hd=["pre-wrap","normal","pre-line","break-spaces"];let xo=!1;function dd(){xo=!1}class WS{constructor(e){this.lineWrapping=e,this.doc=ie.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let n=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(n+=Math.max(0,Math.ceil((t-e-n*this.lineLength*.5)/this.lineLength))),this.lineHeight*n}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return hd.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let n=0;n<e.length;n++){let o=e[n];o<0?n++:this.heightSamples[Math.floor(o*10)]||(t=!0,this.heightSamples[Math.floor(o*10)]=!0)}return t}refresh(e,t,n,o,r,s){let a=hd.indexOf(e)>-1,l=Math.round(t)!=Math.round(this.lineHeight)||this.lineWrapping!=a;if(this.lineWrapping=a,this.lineHeight=t,this.charWidth=n,this.textHeight=o,this.lineLength=r,l){this.heightSamples={};for(let c=0;c<s.length;c++){let f=s[c];f<0?c++:this.heightSamples[Math.floor(f*10)]=!0}}return l}}class US{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}}class an{constructor(e,t,n,o,r){this.from=e,this.length=t,this.top=n,this.height=o,this._content=r}get type(){return typeof this._content=="number"?dn.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof Zn?this._content.widget:null}get widgetLineBreaks(){return typeof this._content=="number"?this._content:0}join(e){let t=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new an(this.from,this.length+e.length,this.top,this.height+e.height,t)}}var ye=(function(i){return i[i.ByPos=0]="ByPos",i[i.ByHeight=1]="ByHeight",i[i.ByPosNoHeight=2]="ByPosNoHeight",i})(ye||(ye={}));const Cs=.001;class st{constructor(e,t,n=2){this.length=e,this.height=t,this.flags=n}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>Cs&&(xo=!0),this.height=e)}replace(e,t,n){return st.of(n)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,n,o){let r=this,s=n.doc;for(let a=o.length-1;a>=0;a--){let{fromA:l,toA:c,fromB:f,toB:h}=o[a],d=r.lineAt(l,ye.ByPosNoHeight,n.setDoc(t),0,0),u=d.to>=c?d:r.lineAt(c,ye.ByPosNoHeight,n,0,0);for(h+=u.to-c,c=u.to;a>0&&d.from<=o[a-1].toA;)l=o[a-1].fromA,f=o[a-1].fromB,a--,l<d.from&&(d=r.lineAt(l,ye.ByPosNoHeight,n,0,0));f+=d.from-l,l=d.from;let p=xf.build(n.setDoc(s),e,f,h);r=Js(r,r.replace(l,c,p))}return r.updateHeight(n,0)}static empty(){return new gt(0,0)}static of(e){if(e.length==1)return e[0];let t=0,n=e.length,o=0,r=0;for(;;)if(t==n)if(o>r*2){let a=e[t-1];a.break?e.splice(--t,1,a.left,null,a.right):e.splice(--t,1,a.left,a.right),n+=1+a.break,o-=a.size}else if(r>o*2){let a=e[n];a.break?e.splice(n,1,a.left,null,a.right):e.splice(n,1,a.left,a.right),n+=2+a.break,r-=a.size}else break;else if(o<r){let a=e[t++];a&&(o+=a.size)}else{let a=e[--n];a&&(r+=a.size)}let s=0;return e[t-1]==null?(s=1,t--):e[t]==null&&(s=1,n++),new GS(st.of(e.slice(0,t)),s,st.of(e.slice(n)))}}function Js(i,e){return i==e?i:(i.constructor!=e.constructor&&(xo=!0),e)}st.prototype.size=1;class Lm extends st{constructor(e,t,n){super(e,t),this.deco=n}blockAt(e,t,n,o){return new an(o,this.length,n,this.height,this.deco||0)}lineAt(e,t,n,o,r){return this.blockAt(0,n,o,r)}forEachLine(e,t,n,o,r,s){e<=r+this.length&&t>=r&&s(this.blockAt(0,n,o,r))}updateHeight(e,t=0,n=!1,o){return o&&o.from<=t&&o.more&&this.setHeight(o.heights[o.index++]),this.outdated=!1,this}toString(){return`block(${this.length})`}}class gt extends Lm{constructor(e,t){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0}blockAt(e,t,n,o){return new an(o,this.length,n,this.height,this.breaks)}replace(e,t,n){let o=n[0];return n.length==1&&(o instanceof gt||o instanceof Ue&&o.flags&4)&&Math.abs(this.length-o.length)<10?(o instanceof Ue?o=new gt(o.length,this.height):o.height=this.height,this.outdated||(o.outdated=!1),o):st.of(n)}updateHeight(e,t=0,n=!1,o){return o&&o.from<=t&&o.more?this.setHeight(o.heights[o.index++]):(n||this.outdated)&&this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class Ue extends st{constructor(e){super(e,0)}heightMetrics(e,t){let n=e.doc.lineAt(t).number,o=e.doc.lineAt(t+this.length).number,r=o-n+1,s,a=0;if(e.lineWrapping){let l=Math.min(this.height,e.lineHeight*r);s=l/r,this.length>r+1&&(a=(this.height-l)/(this.length-r-1))}else s=this.height/r;return{firstLine:n,lastLine:o,perLine:s,perChar:a}}blockAt(e,t,n,o){let{firstLine:r,lastLine:s,perLine:a,perChar:l}=this.heightMetrics(t,o);if(t.lineWrapping){let c=o+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-n)/this.height))*this.length)),f=t.doc.lineAt(c),h=a+f.length*l,d=Math.max(n,e-h/2);return new an(f.from,f.length,d,h,0)}else{let c=Math.max(0,Math.min(s-r,Math.floor((e-n)/a))),{from:f,length:h}=t.doc.line(r+c);return new an(f,h,n+a*c,a,0)}}lineAt(e,t,n,o,r){if(t==ye.ByHeight)return this.blockAt(e,n,o,r);if(t==ye.ByPosNoHeight){let{from:u,to:p}=n.doc.lineAt(e);return new an(u,p-u,0,0,0)}let{firstLine:s,perLine:a,perChar:l}=this.heightMetrics(n,r),c=n.doc.lineAt(e),f=a+c.length*l,h=c.number-s,d=o+a*h+l*(c.from-r-h);return new an(c.from,c.length,Math.max(o,Math.min(d,o+this.height-f)),f,0)}forEachLine(e,t,n,o,r,s){e=Math.max(e,r),t=Math.min(t,r+this.length);let{firstLine:a,perLine:l,perChar:c}=this.heightMetrics(n,r);for(let f=e,h=o;f<=t;){let d=n.doc.lineAt(f);if(f==e){let p=d.number-a;h+=l*p+c*(e-r-p)}let u=l+c*d.length;s(new an(d.from,d.length,h,u,0)),h+=u,f=d.to+1}}replace(e,t,n){let o=this.length-t;if(o>0){let r=n[n.length-1];r instanceof Ue?n[n.length-1]=new Ue(r.length+o):n.push(null,new Ue(o-1))}if(e>0){let r=n[0];r instanceof Ue?n[0]=new Ue(e+r.length):n.unshift(new Ue(e-1),null)}return st.of(n)}decomposeLeft(e,t){t.push(new Ue(e-1),null)}decomposeRight(e,t){t.push(null,new Ue(this.length-e-1))}updateHeight(e,t=0,n=!1,o){let r=t+this.length;if(o&&o.from<=t+this.length&&o.more){let s=[],a=Math.max(t,o.from),l=-1;for(o.from>t&&s.push(new Ue(o.from-t-1).updateHeight(e,t));a<=r&&o.more;){let f=e.doc.lineAt(a).length;s.length&&s.push(null);let h=o.heights[o.index++];l==-1?l=h:Math.abs(h-l)>=Cs&&(l=-2);let d=new gt(f,h);d.outdated=!1,s.push(d),a+=f+1}a<=r&&s.push(null,new Ue(r-a).updateHeight(e,a));let c=st.of(s);return(l<0||Math.abs(c.height-this.height)>=Cs||Math.abs(l-this.heightMetrics(e,t).perLine)>=Cs)&&(xo=!0),Js(this,c)}else(n||this.outdated)&&(this.setHeight(e.heightForGap(t,t+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class GS extends st{constructor(e,t,n){super(e.length+t+n.length,e.height+n.height,t|(e.outdated||n.outdated?2:0)),this.left=e,this.right=n,this.size=e.size+n.size}get break(){return this.flags&1}blockAt(e,t,n,o){let r=n+this.left.height;return e<r?this.left.blockAt(e,t,n,o):this.right.blockAt(e,t,r,o+this.left.length+this.break)}lineAt(e,t,n,o,r){let s=o+this.left.height,a=r+this.left.length+this.break,l=t==ye.ByHeight?e<s:e<a,c=l?this.left.lineAt(e,t,n,o,r):this.right.lineAt(e,t,n,s,a);if(this.break||(l?c.to<a:c.from>a))return c;let f=t==ye.ByPosNoHeight?ye.ByPosNoHeight:ye.ByPos;return l?c.join(this.right.lineAt(a,f,n,s,a)):this.left.lineAt(a,f,n,o,r).join(c)}forEachLine(e,t,n,o,r,s){let a=o+this.left.height,l=r+this.left.length+this.break;if(this.break)e<l&&this.left.forEachLine(e,t,n,o,r,s),t>=l&&this.right.forEachLine(e,t,n,a,l,s);else{let c=this.lineAt(l,ye.ByPos,n,o,r);e<c.from&&this.left.forEachLine(e,c.from-1,n,o,r,s),c.to>=e&&c.from<=t&&s(c),t>c.to&&this.right.forEachLine(c.to+1,t,n,a,l,s)}}replace(e,t,n){let o=this.left.length+this.break;if(t<o)return this.balanced(this.left.replace(e,t,n),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-o,t-o,n));let r=[];e>0&&this.decomposeLeft(e,r);let s=r.length;for(let a of n)r.push(a);if(e>0&&ud(r,s-1),t<this.length){let a=r.length;this.decomposeRight(t,r),ud(r,a)}return st.of(r)}decomposeLeft(e,t){let n=this.left.length;if(e<=n)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(n++,e>=n&&t.push(null)),e>n&&this.right.decomposeLeft(e-n,t)}decomposeRight(e,t){let n=this.left.length,o=n+this.break;if(e>=o)return this.right.decomposeRight(e-o,t);e<n&&this.left.decomposeRight(e,t),this.break&&e<o&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?st.of(this.break?[e,null,t]:[e,t]):(this.left=Js(this.left,e),this.right=Js(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,n=!1,o){let{left:r,right:s}=this,a=t+r.length+this.break,l=null;return o&&o.from<=t+r.length&&o.more?l=r=r.updateHeight(e,t,n,o):r.updateHeight(e,t,n),o&&o.from<=a+s.length&&o.more?l=s=s.updateHeight(e,a,n,o):s.updateHeight(e,a,n),l?this.balanced(r,s):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function ud(i,e){let t,n;i[e]==null&&(t=i[e-1])instanceof Ue&&(n=i[e+1])instanceof Ue&&i.splice(e-1,3,new Ue(t.length+1+n.length))}const YS=5;class xf{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let n=Math.min(t,this.lineEnd),o=this.nodes[this.nodes.length-1];o instanceof gt?o.length+=n-this.pos:(n>this.pos||!this.isCovered)&&this.nodes.push(new gt(n-this.pos,-1)),this.writtenTo=n,t>n&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,n){if(e<t||n.heightRelevant){let o=n.widget?n.widget.estimatedHeight:0,r=n.widget?n.widget.lineBreaks:0;o<0&&(o=this.oracle.lineHeight);let s=t-e;n.block?this.addBlock(new Lm(s,o,n)):(s||r||o>=YS)&&this.addLineDeco(o,r,s)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new gt(this.pos-e,-1)),this.writtenTo=this.pos}blankContent(e,t){let n=new Ue(t-e);return this.oracle.doc.lineAt(e).to==t&&(n.flags|=4),n}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof gt)return e;let t=new gt(0,-1);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,n){let o=this.ensureLine();o.length+=n,o.collapsed+=n,o.widgetHeight=Math.max(o.widgetHeight,e),o.breaks+=t,this.writtenTo=this.pos=this.pos+n}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof gt)&&!this.isCovered?this.nodes.push(new gt(0,-1)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let n=e;for(let o of this.nodes)o instanceof gt&&o.updateHeight(this.oracle,n),n+=o?o.length:1;return this.nodes}static build(e,t,n,o){let r=new xf(n,e);return ve.spans(t,n,o,r,0),r.finish(n)}}function KS(i,e,t){let n=new XS;return ve.compare(i,e,t,n,0),n.changes}class XS{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,n,o){(e<t||n&&n.heightRelevant||o&&o.heightRelevant)&&ks(e,t,this.changes,5)}}function JS(i,e){let t=i.getBoundingClientRect(),n=i.ownerDocument,o=n.defaultView||window,r=Math.max(0,t.left),s=Math.min(o.innerWidth,t.right),a=Math.max(0,t.top),l=Math.min(o.innerHeight,t.bottom);for(let c=i.parentNode;c&&c!=n.body;)if(c.nodeType==1){let f=c,h=window.getComputedStyle(f);if((f.scrollHeight>f.clientHeight||f.scrollWidth>f.clientWidth)&&h.overflow!="visible"){let d=f.getBoundingClientRect();r=Math.max(r,d.left),s=Math.min(s,d.right),a=Math.max(a,d.top),l=Math.min(c==i.parentNode?o.innerHeight:l,d.bottom)}c=h.position=="absolute"||h.position=="fixed"?f.offsetParent:f.parentNode}else if(c.nodeType==11)c=c.host;else break;return{left:r-t.left,right:Math.max(r,s)-t.left,top:a-(t.top+e),bottom:Math.max(a,l)-(t.top+e)}}function QS(i){let e=i.getBoundingClientRect(),t=i.ownerDocument.defaultView||window;return e.left<t.innerWidth&&e.right>0&&e.top<t.innerHeight&&e.bottom>0}function ZS(i,e){let t=i.getBoundingClientRect();return{left:0,right:t.right-t.left,top:e,bottom:t.bottom-(t.top+e)}}class sl{constructor(e,t,n,o){this.from=e,this.to=t,this.size=n,this.displaySize=o}static same(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let o=e[n],r=t[n];if(o.from!=r.from||o.to!=r.to||o.size!=r.size)return!1}return!0}draw(e,t){return Ne.replace({widget:new ek(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}}class ek extends Aa{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class pd{constructor(e){this.state=e,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scrollTop=0,this.scrolledToBottom=!1,this.scaleX=1,this.scaleY=1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=gd,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=Le.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let t=e.facet(yf).some(n=>typeof n!="function"&&n.class=="cm-lineWrapping");this.heightOracle=new WS(t),this.stateDeco=e.facet(br).filter(n=>typeof n!="function"),this.heightMap=st.empty().applyChanges(this.stateDeco,ie.empty,this.heightOracle.setDoc(e.doc),[new Lt(0,0,0,e.doc.length)]);for(let n=0;n<2&&(this.viewport=this.getViewport(0,null),!!this.updateForViewport());n++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Ne.set(this.lineGaps.map(n=>n.draw(this,!1))),this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let n=0;n<=1;n++){let o=n?t.head:t.anchor;if(!e.some(({from:r,to:s})=>o>=r&&o<=s)){let{from:r,to:s}=this.lineBlockAt(o);e.push(new ts(r,s))}}return this.viewports=e.sort((n,o)=>n.from-o.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?gd:new Sf(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(qo(e,this.scaler))})}update(e,t=null){this.state=e.state;let n=this.stateDeco;this.stateDeco=this.state.facet(br).filter(f=>typeof f!="function");let o=e.changedRanges,r=Lt.extendWithRanges(o,KS(n,this.stateDeco,e?e.changes:Fe.empty(this.state.doc.length))),s=this.heightMap.height,a=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollTop);dd(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),r),(this.heightMap.height!=s||xo)&&(e.flags|=2),a?(this.scrollAnchorPos=e.changes.mapPos(a.from,-1),this.scrollAnchorHeight=a.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=s);let l=r.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<l.from||t.range.head>l.to)||!this.viewportIsAppropriate(l))&&(l=this.getViewport(0,t));let c=l.from!=this.viewport.from||l.to!=this.viewport.to;this.viewport=l,e.flags|=this.updateForViewport(),(c||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&e.selectionSet&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(iS)&&(this.mustEnforceCursorAssoc=!0)}measure(e){let t=e.contentDOM,n=window.getComputedStyle(t),o=this.heightOracle,r=n.whiteSpace;this.defaultTextDirection=n.direction=="rtl"?Le.RTL:Le.LTR;let s=this.heightOracle.mustRefreshForWrapping(r),a=t.getBoundingClientRect(),l=s||this.mustMeasureContent||this.contentDOMHeight!=a.height;this.contentDOMHeight=a.height,this.mustMeasureContent=!1;let c=0,f=0;if(a.width&&a.height){let{scaleX:v,scaleY:C}=Hg(t,a);(v>.005&&Math.abs(this.scaleX-v)>.005||C>.005&&Math.abs(this.scaleY-C)>.005)&&(this.scaleX=v,this.scaleY=C,c|=16,s=l=!0)}let h=(parseInt(n.paddingTop)||0)*this.scaleY,d=(parseInt(n.paddingBottom)||0)*this.scaleY;(this.paddingTop!=h||this.paddingBottom!=d)&&(this.paddingTop=h,this.paddingBottom=d,c|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(o.lineWrapping&&(l=!0),this.editorWidth=e.scrollDOM.clientWidth,c|=16);let u=e.scrollDOM.scrollTop*this.scaleY;this.scrollTop!=u&&(this.scrollAnchorHeight=-1,this.scrollTop=u),this.scrolledToBottom=Ug(e.scrollDOM);let p=(this.printing?ZS:JS)(t,this.paddingTop),g=p.top-this.pixelViewport.top,m=p.bottom-this.pixelViewport.bottom;this.pixelViewport=p;let b=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(b!=this.inView&&(this.inView=b,b&&(l=!0)),!this.inView&&!this.scrollTarget&&!QS(e.dom))return 0;let y=a.width;if((this.contentDOMWidth!=y||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=a.width,this.editorHeight=e.scrollDOM.clientHeight,c|=16),l){let v=e.docView.measureVisibleLineHeights(this.viewport);if(o.mustRefreshForHeights(v)&&(s=!0),s||o.lineWrapping&&Math.abs(y-this.contentDOMWidth)>o.charWidth){let{lineHeight:C,charWidth:S,textHeight:k}=e.docView.measureTextSize();s=C>0&&o.refresh(r,C,S,k,Math.max(5,y/S),v),s&&(e.docView.minWidth=0,c|=16)}g>0&&m>0?f=Math.max(g,m):g<0&&m<0&&(f=Math.min(g,m)),dd();for(let C of this.viewports){let S=C.from==this.viewport.from?v:e.docView.measureVisibleLineHeights(C);this.heightMap=(s?st.empty().applyChanges(this.stateDeco,ie.empty,this.heightOracle,[new Lt(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(o,0,s,new US(C.from,S))}xo&&(c|=2)}let x=!this.viewportIsAppropriate(this.viewport,f)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return x&&(c&2&&(c|=this.updateScaler()),this.viewport=this.getViewport(f,this.scrollTarget),c|=this.updateForViewport()),(c&2||x)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(s?[]:this.lineGaps,e)),c|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),c}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let n=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),o=this.heightMap,r=this.heightOracle,{visibleTop:s,visibleBottom:a}=this,l=new ts(o.lineAt(s-n*1e3,ye.ByHeight,r,0,0).from,o.lineAt(a+(1-n)*1e3,ye.ByHeight,r,0,0).to);if(t){let{head:c}=t.range;if(c<l.from||c>l.to){let f=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),h=o.lineAt(c,ye.ByPos,r,0,0),d;t.y=="center"?d=(h.top+h.bottom)/2-f/2:t.y=="start"||t.y=="nearest"&&c<l.from?d=h.top:d=h.bottom-f,l=new ts(o.lineAt(d-1e3/2,ye.ByHeight,r,0,0).from,o.lineAt(d+f+1e3/2,ye.ByHeight,r,0,0).to)}}return l}mapViewport(e,t){let n=t.mapPos(e.from,-1),o=t.mapPos(e.to,1);return new ts(this.heightMap.lineAt(n,ye.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(o,ye.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},n=0){if(!this.inView)return!0;let{top:o}=this.heightMap.lineAt(e,ye.ByPos,this.heightOracle,0,0),{bottom:r}=this.heightMap.lineAt(t,ye.ByPos,this.heightOracle,0,0),{visibleTop:s,visibleBottom:a}=this;return(e==0||o<=s-Math.max(10,Math.min(-n,250)))&&(t==this.state.doc.length||r>=a+Math.max(10,Math.min(n,250)))&&o>s-2*1e3&&r<a+2*1e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let n=[];for(let o of e)t.touchesRange(o.from,o.to)||n.push(new sl(t.mapPos(o.from),t.mapPos(o.to),o.size,o.displaySize));return n}ensureLineGaps(e,t){let n=this.heightOracle.lineWrapping,o=n?1e4:2e3,r=o>>1,s=o<<1;if(this.defaultTextDirection!=Le.LTR&&!n)return[];let a=[],l=(f,h,d,u)=>{if(h-f<r)return;let p=this.state.selection.main,g=[p.from];p.empty||g.push(p.to);for(let b of g)if(b>f&&b<h){l(f,b-10,d,u),l(b+10,h,d,u);return}let m=nk(e,b=>b.from>=d.from&&b.to<=d.to&&Math.abs(b.from-f)<r&&Math.abs(b.to-h)<r&&!g.some(y=>b.from<y&&b.to>y));if(!m){if(h<d.to&&t&&n&&t.visibleRanges.some(x=>x.from<=h&&x.to>=h)){let x=t.moveToLineBoundary(N.cursor(h),!1,!0).head;x>f&&(h=x)}let b=this.gapSize(d,f,h,u),y=n||b<2e6?b:2e6;m=new sl(f,h,b,y)}a.push(m)},c=f=>{if(f.length<s||f.type!=dn.Text)return;let h=tk(f.from,f.to,this.stateDeco);if(h.total<s)return;let d=this.scrollTarget?this.scrollTarget.range.head:null,u,p;if(n){let g=o/this.heightOracle.lineLength*this.heightOracle.lineHeight,m,b;if(d!=null){let y=is(h,d),x=((this.visibleBottom-this.visibleTop)/2+g)/f.height;m=y-x,b=y+x}else m=(this.visibleTop-f.top-g)/f.height,b=(this.visibleBottom-f.top+g)/f.height;u=ns(h,m),p=ns(h,b)}else{let g=h.total*this.heightOracle.charWidth,m=o*this.heightOracle.charWidth,b=0;if(g>2e6)for(let S of e)S.from>=f.from&&S.from<f.to&&S.size!=S.displaySize&&S.from*this.heightOracle.charWidth+b<this.pixelViewport.left&&(b=S.size-S.displaySize);let y=this.pixelViewport.left+b,x=this.pixelViewport.right+b,v,C;if(d!=null){let S=is(h,d),k=((x-y)/2+m)/g;v=S-k,C=S+k}else v=(y-m)/g,C=(x+m)/g;u=ns(h,v),p=ns(h,C)}u>f.from&&l(f.from,u,f,h),p<f.to&&l(p,f.to,f,h)};for(let f of this.viewportLines)Array.isArray(f.type)?f.type.forEach(c):c(f);return a}gapSize(e,t,n,o){let r=is(o,n)-is(o,t);return this.heightOracle.lineWrapping?e.height*r:o.total*this.heightOracle.charWidth*r}updateLineGaps(e){sl.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=Ne.set(e.map(t=>t.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let n=[];ve.spans(t,this.viewport.from,this.viewport.to,{span(r,s){n.push({from:r,to:s})},point(){}},20);let o=0;if(n.length!=this.visibleRanges.length)o=12;else for(let r=0;r<n.length&&!(o&8);r++){let s=this.visibleRanges[r],a=n[r];(s.from!=a.from||s.to!=a.to)&&(o|=4,e&&e.mapPos(s.from,-1)==a.from&&e.mapPos(s.to,1)==a.to||(o|=8))}return this.visibleRanges=n,o}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||qo(this.heightMap.lineAt(e,ye.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||qo(this.heightMap.lineAt(this.scaler.fromDOM(e),ye.ByHeight,this.heightOracle,0,0),this.scaler)}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return qo(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class ts{constructor(e,t){this.from=e,this.to=t}}function tk(i,e,t){let n=[],o=i,r=0;return ve.spans(t,i,e,{span(){},point(s,a){s>o&&(n.push({from:o,to:s}),r+=s-o),o=a}},20),o<e&&(n.push({from:o,to:e}),r+=e-o),{total:r,ranges:n}}function ns({total:i,ranges:e},t){if(t<=0)return e[0].from;if(t>=1)return e[e.length-1].to;let n=Math.floor(i*t);for(let o=0;;o++){let{from:r,to:s}=e[o],a=s-r;if(n<=a)return r+n;n-=a}}function is(i,e){let t=0;for(let{from:n,to:o}of i.ranges){if(e<=o){t+=e-n;break}t+=o-n}return t/i.total}function nk(i,e){for(let t of i)if(e(t))return t}const gd={toDOM(i){return i},fromDOM(i){return i},scale:1,eq(i){return i==this}};class Sf{constructor(e,t,n){let o=0,r=0,s=0;this.viewports=n.map(({from:a,to:l})=>{let c=t.lineAt(a,ye.ByPos,e,0,0).top,f=t.lineAt(l,ye.ByPos,e,0,0).bottom;return o+=f-c,{from:a,to:l,top:c,bottom:f,domTop:0,domBottom:0}}),this.scale=(7e6-o)/(t.height-o);for(let a of this.viewports)a.domTop=s+(a.top-r)*this.scale,s=a.domBottom=a.domTop+(a.bottom-a.top),r=a.bottom}toDOM(e){for(let t=0,n=0,o=0;;t++){let r=t<this.viewports.length?this.viewports[t]:null;if(!r||e<r.top)return o+(e-n)*this.scale;if(e<=r.bottom)return r.domTop+(e-r.top);n=r.bottom,o=r.domBottom}}fromDOM(e){for(let t=0,n=0,o=0;;t++){let r=t<this.viewports.length?this.viewports[t]:null;if(!r||e<r.domTop)return n+(e-o)/this.scale;if(e<=r.domBottom)return r.top+(e-r.domTop);n=r.bottom,o=r.domBottom}}eq(e){return e instanceof Sf?this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((t,n)=>t.from==e.viewports[n].from&&t.to==e.viewports[n].to):!1}}function qo(i,e){if(e.scale==1)return i;let t=e.toDOM(i.top),n=e.toDOM(i.bottom);return new an(i.from,i.length,t,n-t,Array.isArray(i._content)?i._content.map(o=>qo(o,e)):i._content)}const os=G.define({combine:i=>i.join(" ")}),Ic=G.define({combine:i=>i.indexOf(!0)>-1}),Oc=bo.newName(),Rm=bo.newName(),Nm=bo.newName(),$m={"&light":"."+Rm,"&dark":"."+Nm};function Ec(i,e,t){return new bo(e,{finish(n){return/&/.test(n)?n.replace(/&\w*/,o=>{if(o=="&")return i;if(!t||!t[o])throw new RangeError(`Unsupported selector: ${o}`);return t[o]}):i+" "+n}})}const ik=Ec("."+Oc,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},$m),ok={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},al=$.ie&&$.ie_version<=11;class rk{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new Vx,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let n of t)this.queue.push(n);($.ie&&$.ie_version<=11||$.ios&&e.composing)&&t.some(n=>n.type=="childList"&&n.removedNodes.length||n.type=="characterData"&&n.oldValue.length>n.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&$.android&&e.constructor.EDIT_CONTEXT!==!1&&!($.chrome&&$.chrome_version<126)&&(this.editContext=new ak(e),e.state.facet(Cn)&&(e.contentDOM.editContext=this.editContext.editContext)),al&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),typeof ResizeObserver=="function"&&(this.resizeScroll=new ResizeObserver(()=>{var t;((t=this.view.docView)===null||t===void 0?void 0:t.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t.length>0&&t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(t=>{t.length>0&&t[t.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type=="change"||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,n)=>t!=e[n]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:n}=this,o=this.selectionRange;if(n.state.facet(Cn)?n.root.activeElement!=this.dom:!Ss(this.dom,o))return;let r=o.anchorNode&&n.docView.nearest(o.anchorNode);if(r&&r.ignoreEvent(e)){t||(this.selectionChanged=!1);return}($.ie&&$.ie_version<=11||$.android&&$.chrome)&&!n.state.selection.main.empty&&o.focusNode&&Ko(o.focusNode,o.focusOffset,o.anchorNode,o.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=mr(e.root);if(!t)return!1;let n=$.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&sk(this.view,t)||t;if(!n||this.selectionRange.eq(n))return!1;let o=Ss(this.dom,n);return o&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&zx(this.dom,n)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(n),o&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let n=this.dom;n;)if(n.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==n?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(n),n=n.assignedSlot||n.parentNode;else if(n.nodeType==11)n=n.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let n of this.scrollTargets)n.removeEventListener("scroll",this.onScroll);for(let n of this.scrollTargets=t)n.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,ok),al&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),al&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){var n;if(!this.delayedAndroidKey){let o=()=>{let r=this.delayedAndroidKey;r&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=r.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&r.force&&no(this.dom,r.key,r.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(o)}(!this.delayedAndroidKey||e=="Enter")&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!(!((n=this.delayedAndroidKey)===null||n===void 0)&&n.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,n=-1,o=!1;for(let r of e){let s=this.readMutation(r);s&&(s.typeOver&&(o=!0),t==-1?{from:t,to:n}=s:(t=Math.min(s.from,t),n=Math.max(s.to,n)))}return{from:t,to:n,typeOver:o}}readChange(){let{from:e,to:t,typeOver:n}=this.processRecords(),o=this.selectionChanged&&Ss(this.dom,this.selectionRange);if(e<0&&!o)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let r=new CS(this.view,e,t,n);return this.view.docView.domChanged={newSel:r.newSel?r.newSel.main:null},r}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let n=this.view.state,o=Cm(this.view,t);return this.view.state==n&&(t.domChanged||t.newSel&&!t.newSel.main.eq(this.view.state.selection.main))&&this.view.update([]),o}readMutation(e){let t=this.view.docView.nearest(e.target);if(!t||t.ignoreMutation(e))return null;if(t.markDirty(e.type=="attributes"),e.type=="attributes"&&(t.flags|=4),e.type=="childList"){let n=md(t,e.previousSibling||e.target.previousSibling,-1),o=md(t,e.nextSibling||e.target.nextSibling,1);return{from:n?t.posAfter(n):t.posAtStart,to:o?t.posBefore(o):t.posAtEnd,typeOver:!1}}else return e.type=="characterData"?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Cn)!=e.state.facet(Cn)&&(e.view.contentDOM.editContext=e.state.facet(Cn)?this.editContext.editContext:null))}destroy(){var e,t,n;this.stop(),(e=this.intersection)===null||e===void 0||e.disconnect(),(t=this.gapIntersection)===null||t===void 0||t.disconnect(),(n=this.resizeScroll)===null||n===void 0||n.disconnect();for(let o of this.scrollTargets)o.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function md(i,e,t){for(;e;){let n=he.get(e);if(n&&n.parent==i)return n;let o=e.parentNode;e=o!=i.dom?o:t>0?e.nextSibling:e.previousSibling}return null}function bd(i,e){let t=e.startContainer,n=e.startOffset,o=e.endContainer,r=e.endOffset,s=i.docView.domAtPos(i.state.selection.main.anchor);return Ko(s.node,s.offset,o,r)&&([t,n,o,r]=[o,r,t,n]),{anchorNode:t,anchorOffset:n,focusNode:o,focusOffset:r}}function sk(i,e){if(e.getComposedRanges){let o=e.getComposedRanges(i.root)[0];if(o)return bd(i,o)}let t=null;function n(o){o.preventDefault(),o.stopImmediatePropagation(),t=o.getTargetRanges()[0]}return i.contentDOM.addEventListener("beforeinput",n,!0),i.dom.ownerDocument.execCommand("indent"),i.contentDOM.removeEventListener("beforeinput",n,!0),t?bd(i,t):null}class ak{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=n=>{let o=e.state.selection.main,{anchor:r,head:s}=o,a=this.toEditorPos(n.updateRangeStart),l=this.toEditorPos(n.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:n.updateRangeStart,editorBase:a,drifted:!1});let c=l-a>n.text.length;a==this.from&&r<this.from?a=r:l==this.to&&r>this.to&&(l=r);let f=Am(e.state.sliceDoc(a,l),n.text,(c?o.from:o.to)-a,c?"end":null);if(!f){let d=N.single(this.toEditorPos(n.selectionStart),this.toEditorPos(n.selectionEnd));d.main.eq(o)||e.dispatch({selection:d,userEvent:"select"});return}let h={from:f.from+a,to:f.toA+a,insert:ie.of(n.text.slice(f.from,f.toB).split(`
`))};if(($.mac||$.android)&&h.from==s-1&&/^\. ?$/.test(n.text)&&e.contentDOM.getAttribute("autocorrect")=="off"&&(h={from:a,to:l,insert:ie.of([n.text.replace("."," ")])}),this.pendingContextChange=h,!e.state.readOnly){let d=this.to-this.from+(h.to-h.from+h.insert.length);wf(e,h,N.single(this.toEditorPos(n.selectionStart,d),this.toEditorPos(n.selectionEnd,d)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),h.from<h.to&&!h.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,n.updateRangeStart-1),Math.min(t.text.length,n.updateRangeStart+1)))&&this.handlers.compositionend(n)},this.handlers.characterboundsupdate=n=>{let o=[],r=null;for(let s=this.toEditorPos(n.rangeStart),a=this.toEditorPos(n.rangeEnd);s<a;s++){let l=e.coordsForChar(s);r=l&&new DOMRect(l.left,l.top,l.right-l.left,l.bottom-l.top)||r||new DOMRect,o.push(r)}t.updateCharacterBounds(n.rangeStart,o)},this.handlers.textformatupdate=n=>{let o=[];for(let r of n.getTextFormats()){let s=r.underlineStyle,a=r.underlineThickness;if(!/none/i.test(s)&&!/none/i.test(a)){let l=this.toEditorPos(r.rangeStart),c=this.toEditorPos(r.rangeEnd);if(l<c){let f=`text-decoration: underline ${/^[a-z]/.test(s)?s+" ":s=="Dashed"?"dashed ":s=="Squiggle"?"wavy ":""}${/thin/i.test(a)?1:2}px`;o.push(Ne.mark({attributes:{style:f}}).range(l,c))}}}e.dispatch({effects:gm.of(Ne.set(o))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:n}=this.composing;this.composing=null,n&&this.reset(e.state)}};for(let n in this.handlers)t.addEventListener(n,this.handlers[n]);this.measureReq={read:n=>{this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());let o=mr(n.root);o&&o.rangeCount&&this.editContext.updateSelectionBounds(o.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,n=!1,o=this.pendingContextChange;return e.changes.iterChanges((r,s,a,l,c)=>{if(n)return;let f=c.length-(s-r);if(o&&s>=o.to)if(o.from==r&&o.to==s&&o.insert.eq(c)){o=this.pendingContextChange=null,t+=f,this.to+=f;return}else o=null,this.revertPending(e.state);if(r+=t,s+=t,s<=this.from)this.from+=f,this.to+=f;else if(r<this.to){if(r<this.from||s>this.to||this.to-this.from+c.length>3e4){n=!0;return}this.editContext.updateText(this.toContextPos(r),this.toContextPos(s),c.toString()),this.to+=f}t+=f}),o&&!n&&this.revertPending(e.state),!n}update(e){let t=this.pendingContextChange,n=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(n.from,n.to)&&e.transactions.some(o=>!o.isUserEvent("input.type")&&o.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,n=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),o=this.toContextPos(t.head);(this.editContext.selectionStart!=n||this.editContext.selectionEnd!=o)&&this.editContext.updateSelection(n,o)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>1e4*3)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let n=this.composing;return n&&n.drifted?n.editorBase+(e-n.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}}class K{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){var t;this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:n}=e;this.dispatchTransactions=e.dispatchTransactions||n&&(o=>o.forEach(r=>n(r,this)))||(o=>this.update(o)),this.dispatch=this.dispatch.bind(this),this._root=e.root||Fx(e.parent)||document,this.viewState=new pd(e.state||le.create(e)),e.scrollTo&&e.scrollTo.is(Qr)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(Ji).map(o=>new il(o));for(let o of this.plugins)o.update(this);this.observer=new rk(this),this.inputState=new IS(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Kh(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),!((t=document.fonts)===null||t===void 0)&&t.ready&&document.fonts.ready.then(()=>this.requestMeasure())}dispatch(...e){let t=e.length==1&&e[0]instanceof et?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let t=!1,n=!1,o,r=this.state;for(let d of e){if(d.startState!=r)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");r=d.state}if(this.destroyed){this.viewState.state=r;return}let s=this.hasFocus,a=0,l=null;e.some(d=>d.annotation(Pm))?(this.inputState.notifiedFocused=s,a=1):s!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=s,l=Tm(r,s),l||(a=1));let c=this.observer.delayedAndroidKey,f=null;if(c?(this.observer.clearDelayedAndroidKey(),f=this.observer.readChange(),(f&&!this.state.doc.eq(r.doc)||!this.state.selection.eq(r.selection))&&(f=null)):this.observer.clear(),r.facet(le.phrases)!=this.state.facet(le.phrases))return this.setState(r);o=Xs.create(this,r,e),o.flags|=a;let h=this.viewState.scrollTarget;try{this.updateState=2;for(let d of e){if(h&&(h=h.map(d.changes)),d.scrollIntoView){let{main:u}=d.state.selection;h=new io(u.empty?u:N.cursor(u.head,u.head>u.anchor?-1:1))}for(let u of d.effects)u.is(Qr)&&(h=u.value.clip(this.state))}this.viewState.update(o,h),this.bidiCache=Qs.update(this.bidiCache,o.changes),o.empty||(this.updatePlugins(o),this.inputState.update(o)),t=this.docView.update(o),this.state.facet(jo)!=this.styleModules&&this.mountStyles(),n=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(t,e.some(d=>d.isUserEvent("select.pointer")))}finally{this.updateState=0}if(o.startState.facet(os)!=o.state.facet(os)&&(this.viewState.mustMeasureContent=!0),(t||n||h||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),t&&this.docViewUpdate(),!o.empty)for(let d of this.state.facet(Ac))try{d(o)}catch(u){vt(this.state,u,"update listener")}(l||f)&&Promise.resolve().then(()=>{l&&this.state==l.startState&&this.dispatch(l),f&&!Cm(this,f)&&c.force&&no(this.contentDOM,c.key,c.keyCode)})}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let n of this.plugins)n.destroy(this);this.viewState=new pd(e),this.plugins=e.facet(Ji).map(n=>new il(n)),this.pluginMap.clear();for(let n of this.plugins)n.update(this);this.docView.destroy(),this.docView=new Kh(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(Ji),n=e.state.facet(Ji);if(t!=n){let o=[];for(let r of n){let s=t.indexOf(r);if(s<0)o.push(new il(r));else{let a=this.plugins[s];a.mustUpdate=e,o.push(a)}}for(let r of this.plugins)r.mustUpdate!=e&&r.destroy(this);this.plugins=o,this.pluginMap.clear()}else for(let o of this.plugins)o.mustUpdate=e;for(let o=0;o<this.plugins.length;o++)this.plugins[o].update(this);t!=n&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(n){vt(this.state,n,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,n=this.scrollDOM,o=n.scrollTop*this.scaleY,{scrollAnchorPos:r,scrollAnchorHeight:s}=this.viewState;Math.abs(o-this.viewState.scrollTop)>1&&(s=-1),this.viewState.scrollAnchorHeight=-1;try{for(let a=0;;a++){if(s<0)if(Ug(n))r=-1,s=this.viewState.heightMap.height;else{let u=this.viewState.scrollAnchorAt(o);r=u.from,s=u.top}this.updateState=1;let l=this.viewState.measure(this);if(!l&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(a>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let c=[];l&4||([this.measureRequests,c]=[c,this.measureRequests]);let f=c.map(u=>{try{return u.read(this)}catch(p){return vt(this.state,p),yd}}),h=Xs.create(this,this.state,[]),d=!1;h.flags|=l,t?t.flags|=l:t=h,this.updateState=2,h.empty||(this.updatePlugins(h),this.inputState.update(h),this.updateAttrs(),d=this.docView.update(h),d&&this.docViewUpdate());for(let u=0;u<c.length;u++)if(f[u]!=yd)try{let p=c[u];p.write&&p.write(f[u],this)}catch(p){vt(this.state,p)}if(d&&this.docView.updateSelection(!0),!h.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,s=-1;continue}else{let p=(r<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(r).top)-s;if(p>1||p<-1){o=o+p,n.scrollTop=o/this.scaleY,s=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let a of this.state.facet(Ac))a(t)}get themeClasses(){return Oc+" "+(this.state.facet(Ic)?Nm:Rm)+" "+this.state.facet(os)}updateAttrs(){let e=vd(this,mm,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),t={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(Cn)?"true":"false",class:"cm-content",style:`${$.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(t["aria-readonly"]="true"),vd(this,yf,t);let n=this.observer.ignore(()=>{let o=wc(this.contentDOM,this.contentAttrs,t),r=wc(this.dom,this.editorAttrs,e);return o||r});return this.editorAttrs=e,this.contentAttrs=t,n}showAnnouncements(e){let t=!0;for(let n of e)for(let o of n.effects)if(o.is(K.announce)){t&&(this.announceDOM.textContent=""),t=!1;let r=this.announceDOM.appendChild(document.createElement("div"));r.textContent=o.value}}mountStyles(){this.styleModules=this.state.facet(jo);let e=this.state.facet(K.cspNonce);bo.mount(this.root,this.styleModules.concat(ik).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(n=>n.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,n){return rl(this,e,ed(this,e,t,n))}moveByGroup(e,t){return rl(this,e,ed(this,e,t,n=>vS(this,e.head,n)))}visualLineSide(e,t){let n=this.bidiSpans(e),o=this.textDirectionAt(e.from),r=n[t?n.length-1:0];return N.cursor(r.side(t,o)+e.from,r.forward(!t,o)?1:-1)}moveToLineBoundary(e,t,n=!0){return yS(this,e,t,n)}moveVertically(e,t,n){return rl(this,e,wS(this,e,t,n))}domAtPos(e){return this.docView.domAtPos(e)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){return this.readMeasured(),xm(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let n=this.docView.coordsAt(e,t);if(!n||n.left==n.right)return n;let o=this.state.doc.lineAt(e),r=this.bidiSpans(o),s=r[Gn.find(r,e-o.from,-1,t)];return Tr(n,s.dir==Le.LTR==t>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(um)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>lk)return rm(e.length);let t=this.textDirectionAt(e.from),n;for(let r of this.bidiCache)if(r.from==e.from&&r.dir==t&&(r.fresh||om(r.isolates,n=Yh(this,e))))return r.order;n||(n=Yh(this,e));let o=eS(e.text,t,n);return this.bidiCache.push(new Qs(e.from,e.to,t,n,!0,o)),o}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||$.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{qg(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return Qr.of(new io(typeof e=="number"?N.cursor(e):e,t.y,t.x,t.yMargin,t.xMargin))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,n=this.viewState.scrollAnchorAt(e);return Qr.of(new io(N.cursor(n.from),"start","start",n.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e=="boolean"?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return Nn.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return Nn.define(()=>({}),{eventObservers:e})}static theme(e,t){let n=bo.newName(),o=[os.of(n),jo.of(Ec(`.${n}`,e))];return t&&t.dark&&o.push(Ic.of(!0)),o}static baseTheme(e){return Sa.lowest(jo.of(Ec("."+Oc,e,$m)))}static findFromDOM(e){var t;let n=e.querySelector(".cm-content"),o=n&&he.get(n)||he.get(e);return((t=o?.rootView)===null||t===void 0?void 0:t.view)||null}}K.styleModule=jo;K.inputHandler=hm;K.clipboardInputFilter=mf;K.clipboardOutputFilter=bf;K.scrollHandler=pm;K.focusChangeEffect=dm;K.perLineTextDirection=um;K.exceptionSink=fm;K.updateListener=Ac;K.editable=Cn;K.mouseSelectionStyle=cm;K.dragMovesSelection=lm;K.clickAddsSelectionRange=am;K.decorations=br;K.outerDecorations=bm;K.atomicRanges=Rr;K.bidiIsolatedRanges=ym;K.scrollMargins=vm;K.darkTheme=Ic;K.cspNonce=G.define({combine:i=>i.length?i[0]:""});K.contentAttributes=yf;K.editorAttributes=mm;K.lineWrapping=K.contentAttributes.of({class:"cm-lineWrapping"});K.announce=Me.define();const lk=4096,yd={};class Qs{constructor(e,t,n,o,r,s){this.from=e,this.to=t,this.dir=n,this.isolates=o,this.fresh=r,this.order=s}static update(e,t){if(t.empty&&!e.some(r=>r.fresh))return e;let n=[],o=e.length?e[e.length-1].dir:Le.LTR;for(let r=Math.max(0,e.length-10);r<e.length;r++){let s=e[r];s.dir==o&&!t.touchesRange(s.from,s.to)&&n.push(new Qs(t.mapPos(s.from,1),t.mapPos(s.to,-1),s.dir,s.isolates,!1,s.order))}return n}}function vd(i,e,t){for(let n=i.state.facet(e),o=n.length-1;o>=0;o--){let r=n[o],s=typeof r=="function"?r(i):r;s&&vc(s,t)}return t}const ck=$.mac?"mac":$.windows?"win":$.linux?"linux":"key";function fk(i,e){const t=i.split(/-(?!$)/);let n=t[t.length-1];n=="Space"&&(n=" ");let o,r,s,a;for(let l=0;l<t.length-1;++l){const c=t[l];if(/^(cmd|meta|m)$/i.test(c))a=!0;else if(/^a(lt)?$/i.test(c))o=!0;else if(/^(c|ctrl|control)$/i.test(c))r=!0;else if(/^s(hift)?$/i.test(c))s=!0;else if(/^mod$/i.test(c))e=="mac"?a=!0:r=!0;else throw new Error("Unrecognized modifier name: "+c)}return o&&(n="Alt-"+n),r&&(n="Ctrl-"+n),a&&(n="Meta-"+n),s&&(n="Shift-"+n),n}function rs(i,e,t){return e.altKey&&(i="Alt-"+i),e.ctrlKey&&(i="Ctrl-"+i),e.metaKey&&(i="Meta-"+i),t!==!1&&e.shiftKey&&(i="Shift-"+i),i}const hk=Sa.default(K.domEventHandlers({keydown(i,e){return gk(dk(e.state),i,e,"editor")}})),kf=G.define({enables:hk}),wd=new WeakMap;function dk(i){let e=i.facet(kf),t=wd.get(e);return t||wd.set(e,t=pk(e.reduce((n,o)=>n.concat(o),[]))),t}let Hn=null;const uk=4e3;function pk(i,e=ck){let t=Object.create(null),n=Object.create(null),o=(s,a)=>{let l=n[s];if(l==null)n[s]=a;else if(l!=a)throw new Error("Key binding "+s+" is used both as a regular binding and as a multi-stroke prefix")},r=(s,a,l,c,f)=>{var h,d;let u=t[s]||(t[s]=Object.create(null)),p=a.split(/ (?!$)/).map(b=>fk(b,e));for(let b=1;b<p.length;b++){let y=p.slice(0,b).join(" ");o(y,!0),u[y]||(u[y]={preventDefault:!0,stopPropagation:!1,run:[x=>{let v=Hn={view:x,prefix:y,scope:s};return setTimeout(()=>{Hn==v&&(Hn=null)},uk),!0}]})}let g=p.join(" ");o(g,!1);let m=u[g]||(u[g]={preventDefault:!1,stopPropagation:!1,run:((d=(h=u._any)===null||h===void 0?void 0:h.run)===null||d===void 0?void 0:d.slice())||[]});l&&m.run.push(l),c&&(m.preventDefault=!0),f&&(m.stopPropagation=!0)};for(let s of i){let a=s.scope?s.scope.split(" "):["editor"];if(s.any)for(let c of a){let f=t[c]||(t[c]=Object.create(null));f._any||(f._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:h}=s;for(let d in f)f[d].run.push(u=>h(u,Pc))}let l=s[e]||s.key;if(l)for(let c of a)r(c,l,s.run,s.preventDefault,s.stopPropagation),s.shift&&r(c,"Shift-"+l,s.shift,s.preventDefault,s.stopPropagation)}return t}let Pc=null;function gk(i,e,t,n){Pc=e;let o=Lx(e),r=pi(o,0),s=Yi(r)==o.length&&o!=" ",a="",l=!1,c=!1,f=!1;Hn&&Hn.view==t&&Hn.scope==n&&(a=Hn.prefix+" ",Mm.indexOf(e.keyCode)<0&&(c=!0,Hn=null));let h=new Set,d=m=>{if(m){for(let b of m.run)if(!h.has(b)&&(h.add(b),b(t)))return m.stopPropagation&&(f=!0),!0;m.preventDefault&&(m.stopPropagation&&(f=!0),c=!0)}return!1},u=i[n],p,g;return u&&(d(u[a+rs(o,e,!s)])?l=!0:s&&(e.altKey||e.metaKey||e.ctrlKey)&&!($.windows&&e.ctrlKey&&e.altKey)&&!($.mac&&e.altKey&&!(e.ctrlKey||e.metaKey))&&(p=Qn[e.keyCode])&&p!=o?(d(u[a+rs(p,e,!0)])||e.shiftKey&&(g=gr[e.keyCode])!=o&&g!=p&&d(u[a+rs(g,e,!1)]))&&(l=!0):s&&e.shiftKey&&d(u[a+rs(o,e,!0)])&&(l=!0),!l&&d(u._any)&&(l=!0)),c&&(l=!0),l&&f&&e.stopPropagation(),Pc=null,l}class mk extends Aa{constructor(e){super(),this.content=e}toDOM(e){let t=document.createElement("span");return t.className="cm-placeholder",t.style.pointerEvents="none",t.appendChild(typeof this.content=="string"?document.createTextNode(this.content):typeof this.content=="function"?this.content(e):this.content.cloneNode(!0)),t.setAttribute("aria-hidden","true"),t}coordsAt(e){let t=e.firstChild?yo(e.firstChild):[];if(!t.length)return null;let n=window.getComputedStyle(e.parentNode),o=Tr(t[0],n.direction!="rtl"),r=parseInt(n.lineHeight);return o.bottom-o.top>r*1.5?{left:o.left,right:o.right,top:o.top,bottom:o.top+r}:o}ignoreEvent(){return!1}}function bk(i){let e=Nn.fromClass(class{constructor(t){this.view=t,this.placeholder=i?Ne.set([Ne.widget({widget:new mk(i),side:1}).range(0)]):Ne.none}get decorations(){return this.view.state.doc.length?Ne.none:this.placeholder}},{decorations:t=>t.decorations});return typeof i=="string"?[e,K.contentAttributes.of({"aria-placeholder":i})]:e}const ss="-10000px";class yk{constructor(e,t,n,o){this.facet=t,this.createTooltipView=n,this.removeTooltipView=o,this.input=e.state.facet(t),this.tooltips=this.input.filter(s=>s);let r=null;this.tooltipViews=this.tooltips.map(s=>r=n(s,r))}update(e,t){var n;let o=e.state.facet(this.facet),r=o.filter(l=>l);if(o===this.input){for(let l of this.tooltipViews)l.update&&l.update(e);return!1}let s=[],a=t?[]:null;for(let l=0;l<r.length;l++){let c=r[l],f=-1;if(c){for(let h=0;h<this.tooltips.length;h++){let d=this.tooltips[h];d&&d.create==c.create&&(f=h)}if(f<0)s[l]=this.createTooltipView(c,l?s[l-1]:null),a&&(a[l]=!!c.above);else{let h=s[l]=this.tooltipViews[f];a&&(a[l]=t[f]),h.update&&h.update(e)}}}for(let l of this.tooltipViews)s.indexOf(l)<0&&(this.removeTooltipView(l),(n=l.destroy)===null||n===void 0||n.call(l));return t&&(a.forEach((l,c)=>t[c]=l),t.length=a.length),this.input=o,this.tooltips=r,this.tooltipViews=s,!0}}function vk(i){let e=i.dom.ownerDocument.documentElement;return{top:0,left:0,bottom:e.clientHeight,right:e.clientWidth}}const ll=G.define({combine:i=>{var e,t,n;return{position:$.ios?"absolute":((e=i.find(o=>o.position))===null||e===void 0?void 0:e.position)||"fixed",parent:((t=i.find(o=>o.parent))===null||t===void 0?void 0:t.parent)||null,tooltipSpace:((n=i.find(o=>o.tooltipSpace))===null||n===void 0?void 0:n.tooltipSpace)||vk}}}),xd=new WeakMap,Bm=Nn.fromClass(class{constructor(i){this.view=i,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1;let e=i.state.facet(ll);this.position=e.position,this.parent=e.parent,this.classes=i.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver=typeof ResizeObserver=="function"?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new yk(i,Vm,(t,n)=>this.createTooltip(t,n),t=>{this.resizeObserver&&this.resizeObserver.unobserve(t.dom),t.dom.remove()}),this.above=this.manager.tooltips.map(t=>!!t.above),this.intersectionObserver=typeof IntersectionObserver=="function"?new IntersectionObserver(t=>{Date.now()>this.lastTransaction-50&&t.length>0&&t[t.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),i.win.addEventListener("resize",this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement("div"),this.container.style.position="relative",this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect();for(let i of this.manager.tooltipViews)this.intersectionObserver.observe(i.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(i){i.transactions.length&&(this.lastTransaction=Date.now());let e=this.manager.update(i,this.above);e&&this.observeIntersection();let t=e||i.geometryChanged,n=i.state.facet(ll);if(n.position!=this.position&&!this.madeAbsolute){this.position=n.position;for(let o of this.manager.tooltipViews)o.dom.style.position=this.position;t=!0}if(n.parent!=this.parent){this.parent&&this.container.remove(),this.parent=n.parent,this.createContainer();for(let o of this.manager.tooltipViews)this.container.appendChild(o.dom);t=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses);t&&this.maybeMeasure()}createTooltip(i,e){let t=i.create(this.view),n=e?e.dom:null;if(t.dom.classList.add("cm-tooltip"),i.arrow&&!t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")){let o=document.createElement("div");o.className="cm-tooltip-arrow",t.dom.appendChild(o)}return t.dom.style.position=this.position,t.dom.style.top=ss,t.dom.style.left="0px",this.container.insertBefore(t.dom,n),t.mount&&t.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(t.dom),t}destroy(){var i,e,t;this.view.win.removeEventListener("resize",this.measureSoon);for(let n of this.manager.tooltipViews)n.dom.remove(),(i=n.destroy)===null||i===void 0||i.call(n);this.parent&&this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(t=this.intersectionObserver)===null||t===void 0||t.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let i=1,e=1,t=!1;if(this.position=="fixed"&&this.manager.tooltipViews.length){let{dom:r}=this.manager.tooltipViews[0];if($.safari){let s=r.getBoundingClientRect();t=Math.abs(s.top+1e4)>1||Math.abs(s.left)>1}else t=!!r.offsetParent&&r.offsetParent!=this.container.ownerDocument.body}if(t||this.position=="absolute")if(this.parent){let r=this.parent.getBoundingClientRect();r.width&&r.height&&(i=r.width/this.parent.offsetWidth,e=r.height/this.parent.offsetHeight)}else({scaleX:i,scaleY:e}=this.view.viewState);let n=this.view.scrollDOM.getBoundingClientRect(),o=vf(this.view);return{visible:{left:n.left+o.left,top:n.top+o.top,right:n.right-o.right,bottom:n.bottom-o.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((r,s)=>{let a=this.manager.tooltipViews[s];return a.getCoords?a.getCoords(r.pos):this.view.coordsAtPos(r.pos)}),size:this.manager.tooltipViews.map(({dom:r})=>r.getBoundingClientRect()),space:this.view.state.facet(ll).tooltipSpace(this.view),scaleX:i,scaleY:e,makeAbsolute:t}}writeMeasure(i){var e;if(i.makeAbsolute){this.madeAbsolute=!0,this.position="absolute";for(let a of this.manager.tooltipViews)a.dom.style.position="absolute"}let{visible:t,space:n,scaleX:o,scaleY:r}=i,s=[];for(let a=0;a<this.manager.tooltips.length;a++){let l=this.manager.tooltips[a],c=this.manager.tooltipViews[a],{dom:f}=c,h=i.pos[a],d=i.size[a];if(!h||l.clip!==!1&&(h.bottom<=Math.max(t.top,n.top)||h.top>=Math.min(t.bottom,n.bottom)||h.right<Math.max(t.left,n.left)-.1||h.left>Math.min(t.right,n.right)+.1)){f.style.top=ss;continue}let u=l.arrow?c.dom.querySelector(".cm-tooltip-arrow"):null,p=u?7:0,g=d.right-d.left,m=(e=xd.get(c))!==null&&e!==void 0?e:d.bottom-d.top,b=c.offset||xk,y=this.view.textDirection==Le.LTR,x=d.width>n.right-n.left?y?n.left:n.right-d.width:y?Math.max(n.left,Math.min(h.left-(u?14:0)+b.x,n.right-g)):Math.min(Math.max(n.left,h.left-g+(u?14:0)-b.x),n.right-g),v=this.above[a];!l.strictSide&&(v?h.top-m-p-b.y<n.top:h.bottom+m+p+b.y>n.bottom)&&v==n.bottom-h.bottom>h.top-n.top&&(v=this.above[a]=!v);let C=(v?h.top-n.top:n.bottom-h.bottom)-p;if(C<m&&c.resize!==!1){if(C<this.view.defaultLineHeight){f.style.top=ss;continue}xd.set(c,m),f.style.height=(m=C)/r+"px"}else f.style.height&&(f.style.height="");let S=v?h.top-m-p-b.y:h.bottom+p+b.y,k=x+g;if(c.overlap!==!0)for(let _ of s)_.left<k&&_.right>x&&_.top<S+m&&_.bottom>S&&(S=v?_.top-m-2-p:_.bottom+p+2);if(this.position=="absolute"?(f.style.top=(S-i.parent.top)/r+"px",Sd(f,(x-i.parent.left)/o)):(f.style.top=S/r+"px",Sd(f,x/o)),u){let _=h.left+(y?b.x:-b.x)-(x+14-7);u.style.left=_/o+"px"}c.overlap!==!0&&s.push({left:x,top:S,right:k,bottom:S+m}),f.classList.toggle("cm-tooltip-above",v),f.classList.toggle("cm-tooltip-below",!v),c.positioned&&c.positioned(i.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let i of this.manager.tooltipViews)i.dom.style.top=ss}},{eventObservers:{scroll(){this.maybeMeasure()}}});function Sd(i,e){let t=parseInt(i.style.left,10);(isNaN(t)||Math.abs(e-t)>1)&&(i.style.left=e+"px")}const wk=K.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:"border-box"},"&light .cm-tooltip":{border:"1px solid #bbb",backgroundColor:"#f5f5f5"},"&light .cm-tooltip-section:not(:first-child)":{borderTop:"1px solid #bbb"},"&dark .cm-tooltip":{backgroundColor:"#333338",color:"white"},".cm-tooltip-arrow":{height:"7px",width:"14px",position:"absolute",zIndex:-1,overflow:"hidden","&:before, &:after":{content:"''",position:"absolute",width:0,height:0,borderLeft:"7px solid transparent",borderRight:"7px solid transparent"},".cm-tooltip-above &":{bottom:"-7px","&:before":{borderTop:"7px solid #bbb"},"&:after":{borderTop:"7px solid #f5f5f5",bottom:"1px"}},".cm-tooltip-below &":{top:"-7px","&:before":{borderBottom:"7px solid #bbb"},"&:after":{borderBottom:"7px solid #f5f5f5",top:"1px"}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:"#333338",borderBottomColor:"#333338"},"&:after":{borderTopColor:"transparent",borderBottomColor:"transparent"}}}),xk={x:0,y:0},Vm=G.define({enables:[Bm,wk]});function Fm(i,e){let t=i.plugin(Bm);if(!t)return null;let n=t.manager.tooltips.indexOf(e);return n<0?null:t.manager.tooltipViews[n]}class So extends Ei{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}So.prototype.elementClass="";So.prototype.toDOM=void 0;So.prototype.mapMode=yt.TrackBefore;So.prototype.startSide=So.prototype.endSide=-1;So.prototype.point=!0;const Sk=1024;let kk=0;class cl{constructor(e,t){this.from=e,this.to=t}}class de{constructor(e={}){this.id=kk++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=e.combine||null}add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof e!="function"&&(e=$t.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}}de.closedBy=new de({deserialize:i=>i.split(" ")});de.openedBy=new de({deserialize:i=>i.split(" ")});de.group=new de({deserialize:i=>i.split(" ")});de.isolate=new de({deserialize:i=>{if(i&&i!="rtl"&&i!="ltr"&&i!="auto")throw new RangeError("Invalid value for isolate: "+i);return i||"auto"}});de.contextHash=new de({perNode:!0});de.lookAhead=new de({perNode:!0});de.mounted=new de({perNode:!0});class Zs{constructor(e,t,n){this.tree=e,this.overlay=t,this.parser=n}static get(e){return e&&e.props&&e.props[de.mounted.id]}}const Ck=Object.create(null);class $t{constructor(e,t,n,o=0){this.name=e,this.props=t,this.id=n,this.flags=o}static define(e){let t=e.props&&e.props.length?Object.create(null):Ck,n=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(e.name==null?8:0),o=new $t(e.name||"",t,e.id,n);if(e.props){for(let r of e.props)if(Array.isArray(r)||(r=r(o)),r){if(r[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");t[r[0].id]=r[1]}}return o}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e=="string"){if(this.name==e)return!0;let t=this.prop(de.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let o of n.split(" "))t[o]=e[n];return n=>{for(let o=n.prop(de.group),r=-1;r<(o?o.length:0);r++){let s=t[r<0?n.name:o[r]];if(s)return s}}}}$t.none=new $t("",Object.create(null),0,8);const as=new WeakMap,kd=new WeakMap;var Ye;(function(i){i[i.ExcludeBuffers=1]="ExcludeBuffers",i[i.IncludeAnonymous=2]="IncludeAnonymous",i[i.IgnoreMounts=4]="IgnoreMounts",i[i.IgnoreOverlays=8]="IgnoreOverlays"})(Ye||(Ye={}));class tt{constructor(e,t,n,o,r){if(this.type=e,this.children=t,this.positions=n,this.length=o,this.props=null,r&&r.length){this.props=Object.create(null);for(let[s,a]of r)this.props[typeof s=="number"?s:s.id]=a}}toString(){let e=Zs.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let n of this.children){let o=n.toString();o&&(t&&(t+=","),t+=o)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(e=0){return new Dc(this.topNode,e)}cursorAt(e,t=0,n=0){let o=as.get(this)||this.topNode,r=new Dc(o);return r.moveTo(e,t),as.set(this,r._tree),r}get topNode(){return new Rt(this,0,0,null)}resolve(e,t=0){let n=yr(as.get(this)||this.topNode,e,t,!1);return as.set(this,n),n}resolveInner(e,t=0){let n=yr(kd.get(this)||this.topNode,e,t,!0);return kd.set(this,n),n}resolveStack(e,t=0){return Mk(this,e,t)}iterate(e){let{enter:t,leave:n,from:o=0,to:r=this.length}=e,s=e.mode||0,a=(s&Ye.IncludeAnonymous)>0;for(let l=this.cursor(s|Ye.IncludeAnonymous);;){let c=!1;if(l.from<=r&&l.to>=o&&(!a&&l.type.isAnonymous||t(l)!==!1)){if(l.firstChild())continue;c=!0}for(;c&&n&&(a||!l.type.isAnonymous)&&n(l),!l.nextSibling();){if(!l.parent())return;c=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(e={}){return this.children.length<=8?this:_f($t.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,o)=>new tt(this.type,t,n,o,this.propValues),e.makeTree||((t,n,o)=>new tt($t.none,t,n,o)))}static build(e){return Ik(e)}}tt.empty=new tt($t.none,[],[],0);class Cf{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new Cf(this.buffer,this.index)}}class ei{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return $t.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}childString(e){let t=this.buffer[e],n=this.buffer[e+3],o=this.set.types[t],r=o.name;if(/\W/.test(r)&&!o.isError&&(r=JSON.stringify(r)),e+=4,n==e)return r;let s=[];for(;e<n;)s.push(this.childString(e)),e=this.buffer[e+3];return r+"("+s.join(",")+")"}findChild(e,t,n,o,r){let{buffer:s}=this,a=-1;for(let l=e;l!=t&&!(zm(r,o,s[l+1],s[l+2])&&(a=l,n>0));l=s[l+3]);return a}slice(e,t,n){let o=this.buffer,r=new Uint16Array(t-e),s=0;for(let a=e,l=0;a<t;){r[l++]=o[a++],r[l++]=o[a++]-n;let c=r[l++]=o[a++]-n;r[l++]=o[a++]-e,s=Math.max(s,c)}return new ei(r,s,this.set)}}function zm(i,e,t,n){switch(i){case-2:return t<e;case-1:return n>=e&&t<e;case 0:return t<e&&n>e;case 1:return t<=e&&n>e;case 2:return n>e;case 4:return!0}}function yr(i,e,t,n){for(var o;i.from==i.to||(t<1?i.from>=e:i.from>e)||(t>-1?i.to<=e:i.to<e);){let s=!n&&i instanceof Rt&&i.index<0?null:i.parent;if(!s)return i;i=s}let r=n?0:Ye.IgnoreOverlays;if(n)for(let s=i,a=s.parent;a;s=a,a=s.parent)s instanceof Rt&&s.index<0&&((o=a.enter(e,t,r))===null||o===void 0?void 0:o.from)!=s.from&&(i=a);for(;;){let s=i.enter(e,t,r);if(!s)return i;i=s}}class jm{cursor(e=0){return new Dc(this,e)}getChild(e,t=null,n=null){let o=Cd(this,e,t,n);return o.length?o[0]:null}getChildren(e,t=null,n=null){return Cd(this,e,t,n)}resolve(e,t=0){return yr(this,e,t,!1)}resolveInner(e,t=0){return yr(this,e,t,!0)}matchContext(e){return Tc(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let o=t.lastChild;if(!o||o.to!=t.to)break;o.type.isError&&o.from==o.to?(n=t,t=o.prevSibling):t=o}return n}get node(){return this}get next(){return this.parent}}class Rt extends jm{constructor(e,t,n,o){super(),this._tree=e,this.from=t,this.index=n,this._parent=o}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,n,o,r=0){for(let s=this;;){for(let{children:a,positions:l}=s._tree,c=t>0?a.length:-1;e!=c;e+=t){let f=a[e],h=l[e]+s.from;if(zm(o,n,h,h+f.length)){if(f instanceof ei){if(r&Ye.ExcludeBuffers)continue;let d=f.findChild(0,f.buffer.length,t,n-h,o);if(d>-1)return new Yn(new Ak(s,f,e,h),null,d)}else if(r&Ye.IncludeAnonymous||!f.type.isAnonymous||Af(f)){let d;if(!(r&Ye.IgnoreMounts)&&(d=Zs.get(f))&&!d.overlay)return new Rt(d.tree,h,e,s);let u=new Rt(f,h,e,s);return r&Ye.IncludeAnonymous||!u.type.isAnonymous?u:u.nextChild(t<0?f.children.length-1:0,t,n,o)}}}if(r&Ye.IncludeAnonymous||!s.type.isAnonymous||(s.index>=0?e=s.index+t:e=t<0?-1:s._parent._tree.children.length,s=s._parent,!s))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(e,t,n=0){let o;if(!(n&Ye.IgnoreOverlays)&&(o=Zs.get(this._tree))&&o.overlay){let r=e-this.from;for(let{from:s,to:a}of o.overlay)if((t>0?s<=r:s<r)&&(t<0?a>=r:a>r))return new Rt(o.tree,o.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,n)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function Cd(i,e,t,n){let o=i.cursor(),r=[];if(!o.firstChild())return r;if(t!=null){for(let s=!1;!s;)if(s=o.type.is(t),!o.nextSibling())return r}for(;;){if(n!=null&&o.type.is(n))return r;if(o.type.is(e)&&r.push(o.node),!o.nextSibling())return n==null?r:[]}}function Tc(i,e,t=e.length-1){for(let n=i;t>=0;n=n.parent){if(!n)return!1;if(!n.type.isAnonymous){if(e[t]&&e[t]!=n.name)return!1;t--}}return!0}class Ak{constructor(e,t,n,o){this.parent=e,this.buffer=t,this.index=n,this.start=o}}class Yn extends jm{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(e,t,n){let{buffer:o}=this.context,r=o.findChild(this.index+4,o.buffer[this.index+3],e,t-this.context.start,n);return r<0?null:new Yn(this.context,this,r)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(e,t,n=0){if(n&Ye.ExcludeBuffers)return null;let{buffer:o}=this.context,r=o.findChild(this.index+4,o.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return r<0?null:new Yn(this.context,this,r)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new Yn(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new Yn(this.context,this._parent,e.findChild(t,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,o=this.index+4,r=n.buffer[this.index+3];if(r>o){let s=n.buffer[this.index+1];e.push(n.slice(o,r,s)),t.push(0)}return new tt(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function Hm(i){if(!i.length)return null;let e=0,t=i[0];for(let r=1;r<i.length;r++){let s=i[r];(s.from>t.from||s.to<t.to)&&(t=s,e=r)}let n=t instanceof Rt&&t.index<0?null:t.parent,o=i.slice();return n?o[e]=n:o.splice(e,1),new _k(o,t)}class _k{constructor(e,t){this.heads=e,this.node=t}get next(){return Hm(this.heads)}}function Mk(i,e,t){let n=i.resolveInner(e,t),o=null;for(let r=n instanceof Rt?n:n.context.parent;r;r=r.parent)if(r.index<0){let s=r.parent;(o||(o=[n])).push(s.resolve(e,t)),r=s}else{let s=Zs.get(r.tree);if(s&&s.overlay&&s.overlay[0].from<=e&&s.overlay[s.overlay.length-1].to>=e){let a=new Rt(s.tree,s.overlay[0].from+r.from,-1,r);(o||(o=[n])).push(yr(a,e,t,!1))}}return o?Hm(o):n}class Dc{get name(){return this.type.name}constructor(e,t=0){if(this.mode=t,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,e instanceof Rt)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let n=e._parent;n;n=n._parent)this.stack.unshift(n.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:o}=this.buffer;return this.type=t||o.set.types[o.buffer[e]],this.from=n+o.buffer[e+1],this.to=n+o.buffer[e+2],!0}yield(e){return e?e instanceof Rt?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:o}=this.buffer,r=o.findChild(this.index+4,o.buffer[this.index+3],e,t-this.buffer.start,n);return r<0?!1:(this.stack.push(this.index),this.yieldBuf(r))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&Ye.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&Ye.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&Ye.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let o=n<0?0:this.stack[n]+4;if(this.index!=o)return this.yieldBuf(t.findChild(o,this.index,-1,0,4))}else{let o=t.buffer[this.index+3];if(o<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(o)}return n<0?this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode)):!1}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:o}=this;if(o){if(e>0){if(this.index<o.buffer.buffer.length)return!1}else for(let r=0;r<this.index;r++)if(o.buffer.buffer[r+3]<this.index)return!1;({index:t,parent:n}=o)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let r=t+e,s=e<0?-1:n._tree.children.length;r!=s;r+=e){let a=n._tree.children[r];if(this.mode&Ye.IncludeAnonymous||a instanceof ei||!a.type.isAnonymous||Af(a))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)e:for(let o=this.index,r=this.stack.length;r>=0;){for(let s=e;s;s=s._parent)if(s.index==o){if(o==this.index)return s;t=s,n=r+1;break e}o=this.stack[--r]}for(let o=n;o<this.stack.length;o++)t=new Yn(this.buffer,t,this.stack[o]);return this.bufferNode=new Yn(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let o=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(o=!0)}for(;;){if(o&&t&&t(this),o=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,o=!0}}}matchContext(e){if(!this.buffer)return Tc(this.node.parent,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let o=e.length-1,r=this.stack.length-1;o>=0;r--){if(r<0)return Tc(this._tree,e,o);let s=n[t.buffer[this.stack[r]]];if(!s.isAnonymous){if(e[o]&&e[o]!=s.name)return!1;o--}}return!0}}function Af(i){return i.children.some(e=>e instanceof ei||!e.type.isAnonymous||Af(e))}function Ik(i){var e;let{buffer:t,nodeSet:n,maxBufferLength:o=Sk,reused:r=[],minRepeatType:s=n.types.length}=i,a=Array.isArray(t)?new Cf(t,t.length):t,l=n.types,c=0,f=0;function h(C,S,k,_,M,T){let{id:P,start:O,end:z,size:V}=a,H=f,ge=c;if(V<0)if(a.next(),V==-1){let He=r[P];k.push(He),_.push(O-C);return}else if(V==-3){c=P;return}else if(V==-4){f=P;return}else throw new RangeError(`Unrecognized record size: ${V}`);let Pe=l[P],ke,At,fi=O-C;if(z-O<=o&&(At=m(a.pos-S,M))){let He=new Uint16Array(At.size-At.skip),ce=a.pos-At.size,it=He.length;for(;a.pos>ce;)it=b(At.start,He,it);ke=new ei(He,z-At.start,n),fi=At.start-C}else{let He=a.pos-V;a.next();let ce=[],it=[],ht=P>=s?P:-1,te=0,D=z;for(;a.pos>He;)ht>=0&&a.id==ht&&a.size>=0?(a.end<=D-o&&(p(ce,it,O,te,a.end,D,ht,H,ge),te=ce.length,D=a.end),a.next()):T>2500?d(O,He,ce,it):h(O,He,ce,it,ht,T+1);if(ht>=0&&te>0&&te<ce.length&&p(ce,it,O,te,O,D,ht,H,ge),ce.reverse(),it.reverse(),ht>-1&&te>0){let X=u(Pe,ge);ke=_f(Pe,ce,it,0,ce.length,0,z-O,X,X)}else ke=g(Pe,ce,it,z-O,H-z,ge)}k.push(ke),_.push(fi)}function d(C,S,k,_){let M=[],T=0,P=-1;for(;a.pos>S;){let{id:O,start:z,end:V,size:H}=a;if(H>4)a.next();else{if(P>-1&&z<P)break;P<0&&(P=V-o),M.push(O,z,V),T++,a.next()}}if(T){let O=new Uint16Array(T*4),z=M[M.length-2];for(let V=M.length-3,H=0;V>=0;V-=3)O[H++]=M[V],O[H++]=M[V+1]-z,O[H++]=M[V+2]-z,O[H++]=H;k.push(new ei(O,M[2]-z,n)),_.push(z-C)}}function u(C,S){return(k,_,M)=>{let T=0,P=k.length-1,O,z;if(P>=0&&(O=k[P])instanceof tt){if(!P&&O.type==C&&O.length==M)return O;(z=O.prop(de.lookAhead))&&(T=_[P]+O.length+z)}return g(C,k,_,M,T,S)}}function p(C,S,k,_,M,T,P,O,z){let V=[],H=[];for(;C.length>_;)V.push(C.pop()),H.push(S.pop()+k-M);C.push(g(n.types[P],V,H,T-M,O-T,z)),S.push(M-k)}function g(C,S,k,_,M,T,P){if(T){let O=[de.contextHash,T];P=P?[O].concat(P):[O]}if(M>25){let O=[de.lookAhead,M];P=P?[O].concat(P):[O]}return new tt(C,S,k,_,P)}function m(C,S){let k=a.fork(),_=0,M=0,T=0,P=k.end-o,O={size:0,start:0,skip:0};e:for(let z=k.pos-C;k.pos>z;){let V=k.size;if(k.id==S&&V>=0){O.size=_,O.start=M,O.skip=T,T+=4,_+=4,k.next();continue}let H=k.pos-V;if(V<0||H<z||k.start<P)break;let ge=k.id>=s?4:0,Pe=k.start;for(k.next();k.pos>H;){if(k.size<0)if(k.size==-3||k.size==-4)ge+=4;else break e;else k.id>=s&&(ge+=4);k.next()}M=Pe,_+=V,T+=ge}return(S<0||_==C)&&(O.size=_,O.start=M,O.skip=T),O.size>4?O:void 0}function b(C,S,k){let{id:_,start:M,end:T,size:P}=a;if(a.next(),P>=0&&_<s){let O=k;if(P>4){let z=a.pos-(P-4);for(;a.pos>z;)k=b(C,S,k)}S[--k]=O,S[--k]=T-C,S[--k]=M-C,S[--k]=_}else P==-3?c=_:P==-4&&(f=_);return k}let y=[],x=[];for(;a.pos>0;)h(i.start||0,i.bufferStart||0,y,x,-1,0);let v=(e=i.length)!==null&&e!==void 0?e:y.length?x[0]+y[0].length:0;return new tt(l[i.topID],y.reverse(),x.reverse(),v)}const Ad=new WeakMap;function As(i,e){if(!i.isAnonymous||e instanceof ei||e.type!=i)return 1;let t=Ad.get(e);if(t==null){t=1;for(let n of e.children){if(n.type!=i||!(n instanceof tt)){t=1;break}t+=As(i,n)}Ad.set(e,t)}return t}function _f(i,e,t,n,o,r,s,a,l){let c=0;for(let p=n;p<o;p++)c+=As(i,e[p]);let f=Math.ceil(c*1.5/8),h=[],d=[];function u(p,g,m,b,y){for(let x=m;x<b;){let v=x,C=g[x],S=As(i,p[x]);for(x++;x<b;x++){let k=As(i,p[x]);if(S+k>=f)break;S+=k}if(x==v+1){if(S>f){let k=p[v];u(k.children,k.positions,0,k.children.length,g[v]+y);continue}h.push(p[v])}else{let k=g[x-1]+p[x-1].length-C;h.push(_f(i,p,g,v,x,C,k,null,l))}d.push(C+y-r)}}return u(e,t,n,o,0),(a||l)(h,d,s)}class Si{constructor(e,t,n,o,r=!1,s=!1){this.from=e,this.to=t,this.tree=n,this.offset=o,this.open=(r?1:0)|(s?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(e,t=[],n=!1){let o=[new Si(0,e.length,e,0,!1,n)];for(let r of t)r.to>e.length&&o.push(r);return o}static applyChanges(e,t,n=128){if(!t.length)return e;let o=[],r=1,s=e.length?e[0]:null;for(let a=0,l=0,c=0;;a++){let f=a<t.length?t[a]:null,h=f?f.fromA:1e9;if(h-l>=n)for(;s&&s.from<h;){let d=s;if(l>=d.from||h<=d.to||c){let u=Math.max(d.from,l)-c,p=Math.min(d.to,h)-c;d=u>=p?null:new Si(u,p,d.tree,d.offset+c,a>0,!!f)}if(d&&o.push(d),s.to>h)break;s=r<e.length?e[r++]:null}if(!f)break;l=f.toA,c=f.toA-f.toB}return o}}class Ok{startParse(e,t,n){return typeof e=="string"&&(e=new Ek(e)),n=n?n.length?n.map(o=>new cl(o.from,o.to)):[new cl(0,0)]:[new cl(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let o=this.startParse(e,t,n);for(;;){let r=o.advance();if(r)return r}}}class Ek{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}}new de({perNode:!0});let Pk=0;class _t{constructor(e,t,n,o){this.name=e,this.set=t,this.base=n,this.modified=o,this.id=Pk++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(e,t){let n=typeof e=="string"?e:"?";if(e instanceof _t&&(t=e),t?.base)throw new Error("Can not derive from a modified tag");let o=new _t(n,[],null,[]);if(o.set.push(o),t)for(let r of t.set)o.set.push(r);return o}static defineModifier(e){let t=new ea(e);return n=>n.modified.indexOf(t)>-1?n:ea.get(n.base||n,n.modified.concat(t).sort((o,r)=>o.id-r.id))}}let Tk=0;class ea{constructor(e){this.name=e,this.instances=[],this.id=Tk++}static get(e,t){if(!t.length)return e;let n=t[0].instances.find(a=>a.base==e&&Dk(t,a.modified));if(n)return n;let o=[],r=new _t(e.name,o,e,t);for(let a of t)a.instances.push(r);let s=Lk(t);for(let a of e.set)if(!a.modified.length)for(let l of s)o.push(ea.get(a,l));return r}}function Dk(i,e){return i.length==e.length&&i.every((t,n)=>t==e[n])}function Lk(i){let e=[[]];for(let t=0;t<i.length;t++)for(let n=0,o=e.length;n<o;n++)e.push(e[n].concat(i[t]));return e.sort((t,n)=>n.length-t.length)}function Rk(i){let e=Object.create(null);for(let t in i){let n=i[t];Array.isArray(n)||(n=[n]);for(let o of t.split(" "))if(o){let r=[],s=2,a=o;for(let h=0;;){if(a=="..."&&h>0&&h+3==o.length){s=1;break}let d=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!d)throw new RangeError("Invalid path: "+o);if(r.push(d[0]=="*"?"":d[0][0]=='"'?JSON.parse(d[0]):d[0]),h+=d[0].length,h==o.length)break;let u=o[h++];if(h==o.length&&u=="!"){s=0;break}if(u!="/")throw new RangeError("Invalid path: "+o);a=o.slice(h)}let l=r.length-1,c=r[l];if(!c)throw new RangeError("Invalid path: "+o);let f=new ta(n,s,l>0?r.slice(0,l):null);e[c]=f.sort(e[c])}}return Nk.add(e)}const Nk=new de({combine(i,e){let t,n,o;for(;i||e;){if(!i||e&&i.depth>=e.depth?(o=e,e=e.next):(o=i,i=i.next),t&&t.mode==o.mode&&!o.context&&!t.context)continue;let r=new ta(o.tags,o.mode,o.context);t?t.next=r:n=r,t=r}return n}});class ta{constructor(e,t,n,o){this.tags=e,this.mode=t,this.context=n,this.next=o}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}}ta.empty=new ta([],2,null);function $k(i,e){let t=Object.create(null);for(let r of i)if(!Array.isArray(r.tag))t[r.tag.id]=r.class;else for(let s of r.tag)t[s.id]=r.class;let{scope:n,all:o=null}={};return{style:r=>{let s=o;for(let a of r)for(let l of a.set){let c=t[l.id];if(c){s=s?s+" "+c:c;break}}return s},scope:n}}const L=_t.define,ls=L(),Fn=L(),_d=L(Fn),Md=L(Fn),zn=L(),cs=L(zn),fl=L(zn),on=L(),di=L(on),tn=L(),nn=L(),Lc=L(),Bo=L(Lc),fs=L(),Z={comment:ls,lineComment:L(ls),blockComment:L(ls),docComment:L(ls),name:Fn,variableName:L(Fn),typeName:_d,tagName:L(_d),propertyName:Md,attributeName:L(Md),className:L(Fn),labelName:L(Fn),namespace:L(Fn),macroName:L(Fn),literal:zn,string:cs,docString:L(cs),character:L(cs),attributeValue:L(cs),number:fl,integer:L(fl),float:L(fl),bool:L(zn),regexp:L(zn),escape:L(zn),color:L(zn),url:L(zn),keyword:tn,self:L(tn),null:L(tn),atom:L(tn),unit:L(tn),modifier:L(tn),operatorKeyword:L(tn),controlKeyword:L(tn),definitionKeyword:L(tn),moduleKeyword:L(tn),operator:nn,derefOperator:L(nn),arithmeticOperator:L(nn),logicOperator:L(nn),bitwiseOperator:L(nn),compareOperator:L(nn),updateOperator:L(nn),definitionOperator:L(nn),typeOperator:L(nn),controlOperator:L(nn),punctuation:Lc,separator:L(Lc),bracket:Bo,angleBracket:L(Bo),squareBracket:L(Bo),paren:L(Bo),brace:L(Bo),content:on,heading:di,heading1:L(di),heading2:L(di),heading3:L(di),heading4:L(di),heading5:L(di),heading6:L(di),contentSeparator:L(on),list:L(on),quote:L(on),emphasis:L(on),strong:L(on),link:L(on),monospace:L(on),strikethrough:L(on),inserted:L(),deleted:L(),changed:L(),invalid:L(),meta:fs,documentMeta:L(fs),annotation:L(fs),processingInstruction:L(fs),definition:_t.defineModifier("definition"),constant:_t.defineModifier("constant"),function:_t.defineModifier("function"),standard:_t.defineModifier("standard"),local:_t.defineModifier("local"),special:_t.defineModifier("special")};for(let i in Z){let e=Z[i];e instanceof _t&&(e.name=i)}$k([{tag:Z.link,class:"tok-link"},{tag:Z.heading,class:"tok-heading"},{tag:Z.emphasis,class:"tok-emphasis"},{tag:Z.strong,class:"tok-strong"},{tag:Z.keyword,class:"tok-keyword"},{tag:Z.atom,class:"tok-atom"},{tag:Z.bool,class:"tok-bool"},{tag:Z.url,class:"tok-url"},{tag:Z.labelName,class:"tok-labelName"},{tag:Z.inserted,class:"tok-inserted"},{tag:Z.deleted,class:"tok-deleted"},{tag:Z.literal,class:"tok-literal"},{tag:Z.string,class:"tok-string"},{tag:Z.number,class:"tok-number"},{tag:[Z.regexp,Z.escape,Z.special(Z.string)],class:"tok-string2"},{tag:Z.variableName,class:"tok-variableName"},{tag:Z.local(Z.variableName),class:"tok-variableName tok-local"},{tag:Z.definition(Z.variableName),class:"tok-variableName tok-definition"},{tag:Z.special(Z.variableName),class:"tok-variableName2"},{tag:Z.definition(Z.propertyName),class:"tok-propertyName tok-definition"},{tag:Z.typeName,class:"tok-typeName"},{tag:Z.namespace,class:"tok-namespace"},{tag:Z.className,class:"tok-className"},{tag:Z.macroName,class:"tok-macroName"},{tag:Z.propertyName,class:"tok-propertyName"},{tag:Z.operator,class:"tok-operator"},{tag:Z.comment,class:"tok-comment"},{tag:Z.meta,class:"tok-meta"},{tag:Z.invalid,class:"tok-invalid"},{tag:Z.punctuation,class:"tok-punctuation"}]);var hl;const hs=new de,Bk=new de;class _n{constructor(e,t,n=[],o=""){this.data=e,this.name=o,le.prototype.hasOwnProperty("tree")||Object.defineProperty(le.prototype,"tree",{get(){return ko(this)}}),this.parser=t,this.extension=[Ao.of(this),le.languageData.of((r,s,a)=>{let l=Id(r,s,a),c=l.type.prop(hs);if(!c)return[];let f=r.facet(c),h=l.type.prop(Bk);if(h){let d=l.resolve(s-l.from,a);for(let u of h)if(u.test(d,r)){let p=r.facet(u.facet);return u.type=="replace"?p:p.concat(f)}}return f})].concat(n)}isActiveAt(e,t,n=-1){return Id(e,t,n).type.prop(hs)==this.data}findRegions(e){let t=e.facet(Ao);if(t?.data==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let n=[],o=(r,s)=>{if(r.prop(hs)==this.data){n.push({from:s,to:s+r.length});return}let a=r.prop(de.mounted);if(a){if(a.tree.prop(hs)==this.data){if(a.overlay)for(let l of a.overlay)n.push({from:l.from+s,to:l.to+s});else n.push({from:s,to:s+r.length});return}else if(a.overlay){let l=n.length;if(o(a.tree,a.overlay[0].from+s),n.length>l)return}}for(let l=0;l<r.children.length;l++){let c=r.children[l];c instanceof tt&&o(c,r.positions[l]+s)}};return o(ko(e),0),n}get allowsNesting(){return!0}}_n.setState=Me.define();function Id(i,e,t){let n=i.facet(Ao),o=ko(i).topNode;if(!n||n.allowsNesting)for(let r=o;r;r=r.enter(e,t,Ye.ExcludeBuffers))r.type.isTop&&(o=r);return o}function ko(i){let e=i.field(_n.state,!1);return e?e.tree:tt.empty}class Vk{constructor(e){this.doc=e,this.cursorPos=0,this.string="",this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let n=this.cursorPos-this.string.length;return e<n||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-n,t-n)}}let Vo=null;class na{constructor(e,t,n=[],o,r,s,a,l){this.parser=e,this.state=t,this.fragments=n,this.tree=o,this.treeLen=r,this.viewport=s,this.skipped=a,this.scheduleOn=l,this.parse=null,this.tempSkipped=[]}static create(e,t,n){return new na(e,t,[],tt.empty,0,n,[],null)}startParse(){return this.parser.startParse(new Vk(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=tt.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{var n;if(typeof e=="number"){let o=Date.now()+e;e=()=>Date.now()>o}for(this.parse||(this.parse=this.startParse()),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let o=this.parse.advance();if(o)if(this.fragments=this.withoutTempSkipped(Si.addTree(o,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=(n=this.parse.stoppedAt)!==null&&n!==void 0?n:this.state.doc.length,this.tree=o,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0;if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(Si.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=Vo;Vo=this;try{return e()}finally{Vo=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=Od(e,t.from,t.to);return e}changes(e,t){let{fragments:n,tree:o,treeLen:r,viewport:s,skipped:a}=this;if(this.takeTree(),!e.empty){let l=[];if(e.iterChangedRanges((c,f,h,d)=>l.push({fromA:c,toA:f,fromB:h,toB:d})),n=Si.applyChanges(n,l),o=tt.empty,r=0,s={from:e.mapPos(s.from,-1),to:e.mapPos(s.to,1)},this.skipped.length){a=[];for(let c of this.skipped){let f=e.mapPos(c.from,1),h=e.mapPos(c.to,-1);f<h&&a.push({from:f,to:h})}}}return new na(this.parser,t,n,o,r,s,a,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let n=0;n<this.skipped.length;n++){let{from:o,to:r}=this.skipped[n];o<e.to&&r>e.from&&(this.fragments=Od(this.fragments,o,r),this.skipped.splice(n--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends Ok{createParse(t,n,o){let r=o[0].from,s=o[o.length-1].to;return{parsedPos:r,advance(){let l=Vo;if(l){for(let c of o)l.tempSkipped.push(c);e&&(l.scheduleOn=l.scheduleOn?Promise.all([l.scheduleOn,e]):e)}return this.parsedPos=s,new tt($t.none,[],[],s-r)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return Vo}}function Od(i,e,t){return Si.applyChanges(i,[{fromA:e,toA:t,fromB:e,toB:t}])}class Co{constructor(e){this.context=e,this.tree=e.tree}apply(e){if(!e.docChanged&&this.tree==this.context.tree)return this;let t=this.context.changes(e.changes,e.state),n=this.context.treeLen==e.startState.doc.length?void 0:Math.max(e.changes.mapPos(this.context.treeLen),t.viewport.to);return t.work(20,n)||t.takeTree(),new Co(t)}static init(e){let t=Math.min(3e3,e.doc.length),n=na.create(e.facet(Ao).parser,e,{from:0,to:t});return n.work(20,t)||n.takeTree(),new Co(n)}}_n.state=ai.define({create:Co.init,update(i,e){for(let t of e.effects)if(t.is(_n.setState))return t.value;return e.startState.facet(Ao)!=e.state.facet(Ao)?Co.init(e.state):i.apply(e)}});let qm=i=>{let e=setTimeout(()=>i(),500);return()=>clearTimeout(e)};typeof requestIdleCallback<"u"&&(qm=i=>{let e=-1,t=setTimeout(()=>{e=requestIdleCallback(i,{timeout:400})},100);return()=>e<0?clearTimeout(t):cancelIdleCallback(e)});const dl=typeof navigator<"u"&&(!((hl=navigator.scheduling)===null||hl===void 0)&&hl.isInputPending)?()=>navigator.scheduling.isInputPending():null,Fk=Nn.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(_n.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(_n.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=qm(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:n,viewport:{to:o}}=this.view,r=n.field(_n.state);if(r.tree==r.context.tree&&r.context.isDone(o+1e5))return;let s=Date.now()+Math.min(this.chunkBudget,100,e&&!dl?Math.max(25,e.timeRemaining()-5):1e9),a=r.context.treeLen<o&&n.doc.length>o+1e3,l=r.context.work(()=>dl&&dl()||Date.now()>s,o+(a?0:1e5));this.chunkBudget-=Date.now()-t,(l||this.chunkBudget<=0)&&(r.context.takeTree(),this.view.dispatch({effects:_n.setState.of(new Co(r.context))})),this.chunkBudget>0&&!(l&&!a)&&this.scheduleWork(),this.checkAsyncSchedule(r.context)}checkAsyncSchedule(e){e.scheduleOn&&(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(t=>vt(this.view.state,t)).then(()=>this.workScheduled--),e.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Ao=G.define({combine(i){return i.length?i[0]:null},enables:i=>[_n.state,Fk,K.contentAttributes.compute([i],e=>{let t=e.facet(i);return t&&t.name?{"data-language":t.name}:{}})]}),zk=G.define(),Wm=G.define({combine:i=>{if(!i.length)return"  ";let e=i[0];if(!e||/\S/.test(e)||Array.from(e).some(t=>t!=e[0]))throw new Error("Invalid indent unit: "+JSON.stringify(i[0]));return e}});function Rc(i){let e=i.facet(Wm);return e.charCodeAt(0)==9?i.tabSize*e.length:e.length}function Ed(i,e){let t="",n=i.tabSize,o=i.facet(Wm)[0];if(o=="	"){for(;e>=n;)t+="	",e-=n;o=" "}for(let r=0;r<e;r++)t+=o;return t}function jk(i,e){i instanceof le&&(i=new Mf(i));for(let n of i.state.facet(zk)){let o=n(i,e);if(o!==void 0)return o}let t=ko(i.state);return t.length>=e?qk(i,t,e):null}class Mf{constructor(e,t={}){this.state=e,this.options=t,this.unit=Rc(e)}lineAt(e,t=1){let n=this.state.doc.lineAt(e),{simulateBreak:o,simulateDoubleBreak:r}=this.options;return o!=null&&o>=n.from&&o<=n.to?r&&o==e?{text:"",from:e}:(t<0?o<e:o<=e)?{text:n.text.slice(o-n.from),from:o}:{text:n.text.slice(0,o-n.from),from:n.from}:n}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return"";let{text:n,from:o}=this.lineAt(e,t);return n.slice(e-o,Math.min(n.length,e+100-o))}column(e,t=1){let{text:n,from:o}=this.lineAt(e,t),r=this.countColumn(n,e-o),s=this.options.overrideIndentation?this.options.overrideIndentation(o):-1;return s>-1&&(r+=s-this.countColumn(n,n.search(/\S|$/))),r}countColumn(e,t=e.length){return uf(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:n,from:o}=this.lineAt(e,t),r=this.options.overrideIndentation;if(r){let s=r(o);if(s>-1)return s}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const Hk=new de;function qk(i,e,t){let n=e.resolveStack(t),o=e.resolveInner(t,-1).resolve(t,0).enterUnfinishedNodesBefore(t);if(o!=n.node){let r=[];for(let s=o;s&&!(s.from<n.node.from||s.to>n.node.to||s.from==n.node.from&&s.type==n.node.type);s=s.parent)r.push(s);for(let s=r.length-1;s>=0;s--)n={node:r[s],next:n}}return Um(n,i,t)}function Um(i,e,t){for(let n=i;n;n=n.next){let o=Uk(n.node);if(o)return o(If.create(e,t,n))}return 0}function Wk(i){return i.pos==i.options.simulateBreak&&i.options.simulateDoubleBreak}function Uk(i){let e=i.type.prop(Hk);if(e)return e;let t=i.firstChild,n;if(t&&(n=t.type.prop(de.closedBy))){let o=i.lastChild,r=o&&n.indexOf(o.name)>-1;return s=>Xk(s,!0,1,void 0,r&&!Wk(s)?o.from:void 0)}return i.parent==null?Gk:null}function Gk(){return 0}class If extends Mf{constructor(e,t,n){super(e.state,e.options),this.base=e,this.pos=t,this.context=n}get node(){return this.context.node}static create(e,t,n){return new If(e,t,n)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let n=e.resolve(t.from);for(;n.parent&&n.parent.from==n.from;)n=n.parent;if(Yk(n,e))break;t=this.state.doc.lineAt(n.from)}return this.lineIndent(t.from)}continue(){return Um(this.context.next,this.base,this.pos)}}function Yk(i,e){for(let t=e;t;t=t.parent)if(i==t)return!0;return!1}function Kk(i){let e=i.node,t=e.childAfter(e.from),n=e.lastChild;if(!t)return null;let o=i.options.simulateBreak,r=i.state.doc.lineAt(t.from),s=o==null||o<=r.from?r.to:Math.min(r.to,o);for(let a=t.to;;){let l=e.childAfter(a);if(!l||l==n)return null;if(!l.type.isSkipped){if(l.from>=s)return null;let c=/^ */.exec(r.text.slice(t.to-r.from))[0].length;return{from:t.from,to:t.to+c}}a=l.to}}function Xk(i,e,t,n,o){let r=i.textAfter,s=r.match(/^\s*/)[0].length,a=n&&r.slice(s,s+n.length)==n||o==i.pos+s,l=Kk(i);return l?a?i.column(l.from):i.column(l.to):i.baseIndent+(a?0:i.unit*t)}const Jk=Object.create(null),Pd=[$t.none],Td=[],Dd=Object.create(null),Qk=Object.create(null);for(let[i,e]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])Qk[i]=Zk(Jk,e);function ul(i,e){Td.indexOf(i)>-1||(Td.push(i),console.warn(e))}function Zk(i,e){let t=[];for(let a of e.split(" ")){let l=[];for(let c of a.split(".")){let f=i[c]||Z[c];f?typeof f=="function"?l.length?l=l.map(f):ul(c,`Modifier ${c} used at start of tag`):l.length?ul(c,`Tag ${c} used as modifier`):l=Array.isArray(f)?f:[f]:ul(c,`Unknown highlighting tag ${c}`)}for(let c of l)t.push(c)}if(!t.length)return 0;let n=e.replace(/ /g,"_"),o=n+" "+t.map(a=>a.id),r=Dd[o];if(r)return r.id;let s=Dd[o]=$t.define({id:Pd.length,name:n,props:[Rk({[n]:t})]});return Pd.push(s),s.id}Le.RTL,Le.LTR;class Gm{constructor(e,t,n,o){this.state=e,this.pos=t,this.explicit=n,this.view=o,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=ko(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),o=t.text.slice(n-t.from,this.pos-t.from),r=o.search(Ym(e,!1));return r<0?null:{from:n+r,to:this.pos,text:o.slice(r)}}get aborted(){return this.abortListeners==null}addEventListener(e,t,n){e=="abort"&&this.abortListeners&&(this.abortListeners.push(t),n&&n.onDocChange&&(this.abortOnDocChange=!0))}}function Ld(i){let e=Object.keys(i).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function eC(i){let e=Object.create(null),t=Object.create(null);for(let{label:o}of i){e[o[0]]=!0;for(let r=1;r<o.length;r++)t[o[r]]=!0}let n=Ld(e)+Ld(t)+"*$";return[new RegExp("^"+n),new RegExp(n)]}function tC(i){let e=i.map(o=>typeof o=="string"?{label:o}:o),[t,n]=e.every(o=>/^\w+$/.test(o.label))?[/\w*$/,/\w+$/]:eC(e);return o=>{let r=o.matchBefore(n);return r||o.explicit?{from:r?r.from:o.pos,options:e,validFor:t}:null}}class Rd{constructor(e,t,n,o){this.completion=e,this.source=t,this.match=n,this.score=o}}function ki(i){return i.selection.main.from}function Ym(i,e){var t;let{source:n}=i,o=e&&n[0]!="^",r=n[n.length-1]!="$";return!o&&!r?i:new RegExp(`${o?"^":""}(?:${n})${r?"$":""}`,(t=i.flags)!==null&&t!==void 0?t:i.ignoreCase?"i":"")}const Km=zi.define();function nC(i,e,t,n){let{main:o}=i.selection,r=t-o.from,s=n-o.from;return{...i.changeByRange(a=>{if(a!=o&&t!=n&&i.sliceDoc(a.from+r,a.from+s)!=i.sliceDoc(t,n))return{range:a};let l=i.toText(e);return{changes:{from:a.from+r,to:n==o.from?a.to:a.from+s,insert:l},range:N.cursor(a.from+r+l.length)}}),scrollIntoView:!0,userEvent:"input.complete"}}const Nd=new WeakMap;function iC(i){if(!Array.isArray(i))return i;let e=Nd.get(i);return e||Nd.set(i,e=tC(i)),e}const ia=Me.define(),vr=Me.define();class oC{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let n=pi(e,t),o=Yi(n);this.chars.push(n);let r=e.slice(t,t+o),s=r.toUpperCase();this.folded.push(pi(s==r?r.toLowerCase():s,0)),t+=o}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:o,precise:r,byWord:s}=this;if(t.length==1){let y=pi(e,0),x=Yi(y),v=x==e.length?0:-100;if(y!=t[0])if(y==n[0])v+=-200;else return null;return this.ret(v,[0,x])}let a=e.indexOf(this.pattern);if(a==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let l=t.length,c=0;if(a<0){for(let y=0,x=Math.min(e.length,200);y<x&&c<l;){let v=pi(e,y);(v==t[c]||v==n[c])&&(o[c++]=y),y+=Yi(v)}if(c<l)return null}let f=0,h=0,d=!1,u=0,p=-1,g=-1,m=/[a-z]/.test(e),b=!0;for(let y=0,x=Math.min(e.length,200),v=0;y<x&&h<l;){let C=pi(e,y);a<0&&(f<l&&C==t[f]&&(r[f++]=y),u<l&&(C==t[u]||C==n[u]?(u==0&&(p=y),g=y+1,u++):u=0));let S,k=C<255?C>=48&&C<=57||C>=97&&C<=122?2:C>=65&&C<=90?1:0:(S=mx(C))!=S.toLowerCase()?1:S!=S.toUpperCase()?2:0;(!y||k==1&&m||v==0&&k!=0)&&(t[h]==C||n[h]==C&&(d=!0)?s[h++]=y:s.length&&(b=!1)),v=k,y+=Yi(C)}return h==l&&s[0]==0&&b?this.result(-100+(d?-200:0),s,e):u==l&&p==0?this.ret(-200-e.length+(g==e.length?0:-100),[0,g]):a>-1?this.ret(-700-e.length,[a,a+this.pattern.length]):u==l?this.ret(-900-e.length,[p,g]):h==l?this.result(-100+(d?-200:0)+-700+(b?0:-1100),s,e):t.length==2?null:this.result((o[0]?-700:0)+-200+-1100,o,e)}result(e,t,n){let o=[],r=0;for(let s of t){let a=s+(this.astral?Yi(pi(n,s)):1);r&&o[r-1]==s?o[r-1]=a:(o[r++]=s,o[r++]=a)}return this.ret(e-n.length,o)}}class rC{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),n=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return n==null?null:(this.matched=[0,t.length],this.score=n+(e.length==this.pattern.length?0:-100),this)}}const je=G.define({combine(i){return Ix(i,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>"",optionClass:()=>"",aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:sC,filterStrict:!1,compareCompletions:(e,t)=>(e.sortText||e.label).localeCompare(t.sortText||t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>$d(e(n),t(n)),optionClass:(e,t)=>n=>$d(e(n),t(n)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function $d(i,e){return i?e?i+" "+e:i:e}function sC(i,e,t,n,o,r){let s=i.textDirection==Le.RTL,a=s,l=!1,c="top",f,h,d=e.left-o.left,u=o.right-e.right,p=n.right-n.left,g=n.bottom-n.top;if(a&&d<Math.min(p,u)?a=!1:!a&&u<Math.min(p,d)&&(a=!0),p<=(a?d:u))f=Math.max(o.top,Math.min(t.top,o.bottom-g))-e.top,h=Math.min(400,a?d:u);else{l=!0,h=Math.min(400,(s?e.right:o.right-e.left)-30);let y=o.bottom-e.bottom;y>=g||y>e.top?f=t.bottom-e.top:(c="bottom",f=e.bottom-t.top)}let m=(e.bottom-e.top)/r.offsetHeight,b=(e.right-e.left)/r.offsetWidth;return{style:`${c}: ${f/m}px; max-width: ${h/b}px`,class:"cm-completionInfo-"+(l?s?"left-narrow":"right-narrow":a?"left":"right")}}function aC(i){let e=i.addToOptions.slice();return i.icons&&e.push({render(t){let n=document.createElement("div");return n.classList.add("cm-completionIcon"),t.type&&n.classList.add(...t.type.split(/\s+/g).map(o=>"cm-completionIcon-"+o)),n.setAttribute("aria-hidden","true"),n},position:20}),e.push({render(t,n,o,r){let s=document.createElement("span");s.className="cm-completionLabel";let a=t.displayLabel||t.label,l=0;for(let c=0;c<r.length;){let f=r[c++],h=r[c++];f>l&&s.appendChild(document.createTextNode(a.slice(l,f)));let d=s.appendChild(document.createElement("span"));d.appendChild(document.createTextNode(a.slice(f,h))),d.className="cm-completionMatchedText",l=h}return l<a.length&&s.appendChild(document.createTextNode(a.slice(l))),s},position:50},{render(t){if(!t.detail)return null;let n=document.createElement("span");return n.className="cm-completionDetail",n.textContent=t.detail,n},position:80}),e.sort((t,n)=>t.position-n.position).map(t=>t.render)}function pl(i,e,t){if(i<=t)return{from:0,to:i};if(e<0&&(e=0),e<=i>>1){let o=Math.floor(e/t);return{from:o*t,to:(o+1)*t}}let n=Math.floor((i-e)/t);return{from:i-(n+1)*t,to:i-n*t}}class lC{constructor(e,t,n){this.view=e,this.stateField=t,this.applyCompletion=n,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:l=>this.placeInfo(l),key:this},this.space=null,this.currentClass="";let o=e.state.field(t),{options:r,selected:s}=o.open,a=e.state.facet(je);this.optionContent=aC(a),this.optionClass=a.optionClass,this.tooltipClass=a.tooltipClass,this.range=pl(r.length,s,a.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.updateTooltipClass(e.state),this.dom.addEventListener("mousedown",l=>{let{options:c}=e.state.field(t).open;for(let f=l.target,h;f&&f!=this.dom;f=f.parentNode)if(f.nodeName=="LI"&&(h=/-(\d+)$/.exec(f.id))&&+h[1]<c.length){this.applyCompletion(e,c[+h[1]]),l.preventDefault();return}}),this.dom.addEventListener("focusout",l=>{let c=e.state.field(this.stateField,!1);c&&c.tooltip&&e.state.facet(je).closeOnBlur&&l.relatedTarget!=e.contentDOM&&e.dispatch({effects:vr.of(null)})}),this.showOptions(r,o.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){var t;let n=e.state.field(this.stateField),o=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),n!=o){let{options:r,selected:s,disabled:a}=n.open;(!o.open||o.open.options!=r)&&(this.range=pl(r.length,s,e.state.facet(je).maxRenderedOptions),this.showOptions(r,n.id)),this.updateSel(),a!=((t=o.open)===null||t===void 0?void 0:t.disabled)&&this.dom.classList.toggle("cm-tooltip-autocomplete-disabled",!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let n of this.currentClass.split(" "))n&&this.dom.classList.remove(n);for(let n of t.split(" "))n&&this.dom.classList.add(n);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;(t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=pl(t.options.length,t.selected,this.view.state.facet(je).maxRenderedOptions),this.showOptions(t.options,e.id));let n=this.updateSelectedOption(t.selected);if(n){this.destroyInfo();let{completion:o}=t.options[t.selected],{info:r}=o;if(!r)return;let s=typeof r=="string"?document.createTextNode(r):r(o);if(!s)return;"then"in s?s.then(a=>{a&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(a,o)}).catch(a=>vt(this.view.state,a,"completion info")):(this.addInfoPane(s,o),n.setAttribute("aria-describedby",this.info.id))}}addInfoPane(e,t){this.destroyInfo();let n=this.info=document.createElement("div");if(n.className="cm-tooltip cm-completionInfo",n.id="cm-completionInfo-"+Math.floor(Math.random()*65535).toString(16),e.nodeType!=null)n.appendChild(e),this.infoDestroy=null;else{let{dom:o,destroy:r}=e;n.appendChild(o),this.infoDestroy=r||null}this.dom.appendChild(n),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,o=this.range.from;n;n=n.nextSibling,o++)n.nodeName!="LI"||!n.id?o--:o==e?n.hasAttribute("aria-selected")||(n.setAttribute("aria-selected","true"),t=n):n.hasAttribute("aria-selected")&&(n.removeAttribute("aria-selected"),n.removeAttribute("aria-describedby"));return t&&fC(this.list,t),t}measureInfo(){let e=this.dom.querySelector("[aria-selected]");if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),o=e.getBoundingClientRect(),r=this.space;if(!r){let s=this.dom.ownerDocument.documentElement;r={left:0,top:0,right:s.clientWidth,bottom:s.clientHeight}}return o.top>Math.min(r.bottom,t.bottom)-10||o.bottom<Math.max(r.top,t.top)+10?null:this.view.state.facet(je).positionInfo(this.view,t,o,n,r,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className="cm-tooltip cm-completionInfo "+(e.class||"")):this.info.style.cssText="top: -1e6px")}createListBox(e,t,n){const o=document.createElement("ul");o.id=t,o.setAttribute("role","listbox"),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-label",this.view.state.phrase("Completions")),o.addEventListener("mousedown",s=>{s.target==o&&s.preventDefault()});let r=null;for(let s=n.from;s<n.to;s++){let{completion:a,match:l}=e[s],{section:c}=a;if(c){let d=typeof c=="string"?c:c.name;if(d!=r&&(s>n.from||n.from==0))if(r=d,typeof c!="string"&&c.header)o.appendChild(c.header(c));else{let u=o.appendChild(document.createElement("completion-section"));u.textContent=d}}const f=o.appendChild(document.createElement("li"));f.id=t+"-"+s,f.setAttribute("role","option");let h=this.optionClass(a);h&&(f.className=h);for(let d of this.optionContent){let u=d(a,this.view.state,this.view,l);u&&f.appendChild(u)}}return n.from&&o.classList.add("cm-completionListIncompleteTop"),n.to<e.length&&o.classList.add("cm-completionListIncompleteBottom"),o}destroyInfo(){this.info&&(this.infoDestroy&&this.infoDestroy(),this.info.remove(),this.info=null)}destroy(){this.destroyInfo()}}function cC(i,e){return t=>new lC(t,i,e)}function fC(i,e){let t=i.getBoundingClientRect(),n=e.getBoundingClientRect(),o=t.height/i.offsetHeight;n.top<t.top?i.scrollTop-=(t.top-n.top)/o:n.bottom>t.bottom&&(i.scrollTop+=(n.bottom-t.bottom)/o)}function Bd(i){return(i.boost||0)*100+(i.apply?10:0)+(i.info?5:0)+(i.type?1:0)}function hC(i,e){let t=[],n=null,o=null,r=f=>{t.push(f);let{section:h}=f.completion;if(h){n||(n=[]);let d=typeof h=="string"?h:h.name;n.some(u=>u.name==d)||n.push(typeof h=="string"?{name:d}:h)}},s=e.facet(je);for(let f of i)if(f.hasResult()){let h=f.result.getMatch;if(f.result.filter===!1)for(let d of f.result.options)r(new Rd(d,f.source,h?h(d):[],1e9-t.length));else{let d=e.sliceDoc(f.from,f.to),u,p=s.filterStrict?new rC(d):new oC(d);for(let g of f.result.options)if(u=p.match(g.label)){let m=g.displayLabel?h?h(g,u.matched):[]:u.matched,b=u.score+(g.boost||0);if(r(new Rd(g,f.source,m,b)),typeof g.section=="object"&&g.section.rank==="dynamic"){let{name:y}=g.section;o||(o=Object.create(null)),o[y]=Math.max(b,o[y]||-1e9)}}}}if(n){let f=Object.create(null),h=0,d=(u,p)=>(u.rank==="dynamic"&&p.rank==="dynamic"?o[p.name]-o[u.name]:0)||(typeof u.rank=="number"?u.rank:1e9)-(typeof p.rank=="number"?p.rank:1e9)||(u.name<p.name?-1:1);for(let u of n.sort(d))h-=1e5,f[u.name]=h;for(let u of t){let{section:p}=u.completion;p&&(u.score+=f[typeof p=="string"?p:p.name])}}let a=[],l=null,c=s.compareCompletions;for(let f of t.sort((h,d)=>d.score-h.score||c(h.completion,d.completion))){let h=f.completion;!l||l.label!=h.label||l.detail!=h.detail||l.type!=null&&h.type!=null&&l.type!=h.type||l.apply!=h.apply||l.boost!=h.boost?a.push(f):Bd(f.completion)>Bd(l)&&(a[a.length-1]=f),l=f.completion}return a}class Qi{constructor(e,t,n,o,r,s){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=o,this.selected=r,this.disabled=s}setSelected(e,t){return e==this.selected||e>=this.options.length?this:new Qi(this.options,Vd(t,e),this.tooltip,this.timestamp,e,this.disabled)}static build(e,t,n,o,r,s){if(o&&!s&&e.some(c=>c.isPending))return o.setDisabled();let a=hC(e,t);if(!a.length)return o&&e.some(c=>c.isPending)?o.setDisabled():null;let l=t.facet(je).selectOnOpen?0:-1;if(o&&o.selected!=l&&o.selected!=-1){let c=o.options[o.selected].completion;for(let f=0;f<a.length;f++)if(a[f].completion==c){l=f;break}}return new Qi(a,Vd(n,l),{pos:e.reduce((c,f)=>f.hasResult()?Math.min(c,f.from):c,1e8),create:bC,above:r.aboveCursor},o?o.timestamp:Date.now(),l,!1)}map(e){return new Qi(this.options,this.attrs,{...this.tooltip,pos:e.mapPos(this.tooltip.pos)},this.timestamp,this.selected,this.disabled)}setDisabled(){return new Qi(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}}class oa{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new oa(gC,"cm-ac-"+Math.floor(Math.random()*2e6).toString(36),null)}update(e){let{state:t}=e,n=t.facet(je),r=(n.override||t.languageDataAt("autocomplete",ki(t)).map(iC)).map(l=>(this.active.find(f=>f.source==l)||new Tt(l,this.active.some(f=>f.state!=0)?1:0)).update(e,n));r.length==this.active.length&&r.every((l,c)=>l==this.active[c])&&(r=this.active);let s=this.open,a=e.effects.some(l=>l.is(Of));s&&e.docChanged&&(s=s.map(e.changes)),e.selection||r.some(l=>l.hasResult()&&e.changes.touchesRange(l.from,l.to))||!dC(r,this.active)||a?s=Qi.build(r,t,this.id,s,n,a):s&&s.disabled&&!r.some(l=>l.isPending)&&(s=null),!s&&r.every(l=>!l.isPending)&&r.some(l=>l.hasResult())&&(r=r.map(l=>l.hasResult()?new Tt(l.source,0):l));for(let l of e.effects)l.is(Jm)&&(s=s&&s.setSelected(l.value,this.id));return r==this.active&&s==this.open?this:new oa(r,this.id,s)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?uC:pC}}function dC(i,e){if(i==e)return!0;for(let t=0,n=0;;){for(;t<i.length&&!i[t].hasResult();)t++;for(;n<e.length&&!e[n].hasResult();)n++;let o=t==i.length,r=n==e.length;if(o||r)return o==r;if(i[t++].result!=e[n++].result)return!1}}const uC={"aria-autocomplete":"list"},pC={};function Vd(i,e){let t={"aria-autocomplete":"list","aria-haspopup":"listbox","aria-controls":i};return e>-1&&(t["aria-activedescendant"]=i+"-"+e),t}const gC=[];function Xm(i,e){if(i.isUserEvent("input.complete")){let n=i.annotation(Km);if(n&&e.activateOnCompletion(n))return 12}let t=i.isUserEvent("input.type");return t&&e.activateOnTyping?5:t?1:i.isUserEvent("delete.backward")?2:i.selection?8:i.docChanged?16:0}class Tt{constructor(e,t,n=!1){this.source=e,this.state=t,this.explicit=n}hasResult(){return!1}get isPending(){return this.state==1}update(e,t){let n=Xm(e,t),o=this;(n&8||n&16&&this.touches(e))&&(o=new Tt(o.source,0)),n&4&&o.state==0&&(o=new Tt(this.source,1)),o=o.updateFor(e,n);for(let r of e.effects)if(r.is(ia))o=new Tt(o.source,1,r.value);else if(r.is(vr))o=new Tt(o.source,0);else if(r.is(Of))for(let s of r.value)s.source==o.source&&(o=s);return o}updateFor(e,t){return this.map(e.changes)}map(e){return this}touches(e){return e.changes.touchesRange(ki(e.state))}}class oo extends Tt{constructor(e,t,n,o,r,s){super(e,3,t),this.limit=n,this.result=o,this.from=r,this.to=s}hasResult(){return!0}updateFor(e,t){var n;if(!(t&3))return this.map(e.changes);let o=this.result;o.map&&!e.changes.empty&&(o=o.map(o,e.changes));let r=e.changes.mapPos(this.from),s=e.changes.mapPos(this.to,1),a=ki(e.state);if(a>s||!o||t&2&&(ki(e.startState)==this.from||a<this.limit))return new Tt(this.source,t&4?1:0);let l=e.changes.mapPos(this.limit);return mC(o.validFor,e.state,r,s)?new oo(this.source,this.explicit,l,o,r,s):o.update&&(o=o.update(o,r,s,new Gm(e.state,a,!1)))?new oo(this.source,this.explicit,l,o,o.from,(n=o.to)!==null&&n!==void 0?n:ki(e.state)):new Tt(this.source,1,this.explicit)}map(e){return e.empty?this:(this.result.map?this.result.map(this.result,e):this.result)?new oo(this.source,this.explicit,e.mapPos(this.limit),this.result,e.mapPos(this.from),e.mapPos(this.to,1)):new Tt(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}}function mC(i,e,t,n){if(!i)return!1;let o=e.sliceDoc(t,n);return typeof i=="function"?i(o,t,n,e):Ym(i,!0).test(o)}const Of=Me.define({map(i,e){return i.map(t=>t.map(e))}}),Jm=Me.define(),ft=ai.define({create(){return oa.start()},update(i,e){return i.update(e)},provide:i=>[Vm.from(i,e=>e.tooltip),K.contentAttributes.from(i,e=>e.attrs)]});function Ef(i,e){const t=e.completion.apply||e.completion.label;let n=i.state.field(ft).active.find(o=>o.source==e.source);return n instanceof oo?(typeof t=="string"?i.dispatch({...nC(i.state,t,n.from,n.to),annotations:Km.of(e.completion)}):t(i,e.completion,n.from,n.to),!0):!1}const bC=cC(ft,Ef);function ds(i,e="option"){return t=>{let n=t.state.field(ft,!1);if(!n||!n.open||n.open.disabled||Date.now()-n.open.timestamp<t.state.facet(je).interactionDelay)return!1;let o=1,r;e=="page"&&(r=Fm(t,n.open.tooltip))&&(o=Math.max(2,Math.floor(r.dom.offsetHeight/r.dom.querySelector("li").offsetHeight)-1));let{length:s}=n.open.options,a=n.open.selected>-1?n.open.selected+o*(i?1:-1):i?0:s-1;return a<0?a=e=="page"?0:s-1:a>=s&&(a=e=="page"?s-1:0),t.dispatch({effects:Jm.of(a)}),!0}}const Nc=i=>{let e=i.state.field(ft,!1);return i.state.readOnly||!e||!e.open||e.open.selected<0||e.open.disabled||Date.now()-e.open.timestamp<i.state.facet(je).interactionDelay?!1:Ef(i,e.open.options[e.open.selected])},ro=i=>i.state.field(ft,!1)?(i.dispatch({effects:ia.of(!0)}),!0):!1,Qm=i=>{let e=i.state.field(ft,!1);return!e||!e.active.some(t=>t.state!=0)?!1:(i.dispatch({effects:vr.of(null)}),!0)};class yC{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}}const vC=50,wC=1e3,xC=Nn.fromClass(class{constructor(i){this.view=i,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let e of i.state.field(ft).active)e.isPending&&this.startQuery(e)}update(i){let e=i.state.field(ft),t=i.state.facet(je);if(!i.selectionSet&&!i.docChanged&&i.startState.field(ft)==e)return;let n=i.transactions.some(r=>{let s=Xm(r,t);return s&8||(r.selection||r.docChanged)&&!(s&3)});for(let r=0;r<this.running.length;r++){let s=this.running[r];if(n||s.context.abortOnDocChange&&i.docChanged||s.updates.length+i.transactions.length>vC&&Date.now()-s.time>wC){for(let a of s.context.abortListeners)try{a()}catch(l){vt(this.view.state,l)}s.context.abortListeners=null,this.running.splice(r--,1)}else s.updates.push(...i.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),i.transactions.some(r=>r.effects.some(s=>s.is(ia)))&&(this.pendingStart=!0);let o=this.pendingStart?50:t.activateOnTypingDelay;if(this.debounceUpdate=e.active.some(r=>r.isPending&&!this.running.some(s=>s.active.source==r.source))?setTimeout(()=>this.startUpdate(),o):-1,this.composing!=0)for(let r of i.transactions)r.isUserEvent("input.type")?this.composing=2:this.composing==2&&r.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:i}=this.view,e=i.field(ft);for(let t of e.active)t.isPending&&!this.running.some(n=>n.active.source==t.source)&&this.startQuery(t);this.running.length&&e.open&&e.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(je).updateSyncTime))}startQuery(i){let{state:e}=this.view,t=ki(e),n=new Gm(e,t,i.explicit,this.view),o=new yC(i,n);this.running.push(o),Promise.resolve(i.source(n)).then(r=>{o.context.aborted||(o.done=r||null,this.scheduleAccept())},r=>{this.view.dispatch({effects:vr.of(null)}),vt(this.view.state,r)})}scheduleAccept(){this.running.every(i=>i.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(je).updateSyncTime))}accept(){var i;this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(je),n=this.view.state.field(ft);for(let o=0;o<this.running.length;o++){let r=this.running[o];if(r.done===void 0)continue;if(this.running.splice(o--,1),r.done){let a=ki(r.updates.length?r.updates[0].startState:this.view.state),l=Math.min(a,r.done.from+(r.active.explicit?0:1)),c=new oo(r.active.source,r.active.explicit,l,r.done,r.done.from,(i=r.done.to)!==null&&i!==void 0?i:a);for(let f of r.updates)c=c.update(f,t);if(c.hasResult()){e.push(c);continue}}let s=n.active.find(a=>a.source==r.active.source);if(s&&s.isPending)if(r.done==null){let a=new Tt(r.active.source,0);for(let l of r.updates)a=a.update(l,t);a.isPending||e.push(a)}else this.startQuery(s)}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:Of.of(e)})}},{eventHandlers:{blur(i){let e=this.view.state.field(ft,!1);if(e&&e.tooltip&&this.view.state.facet(je).closeOnBlur){let t=e.open&&Fm(this.view,e.open.tooltip);(!t||!t.dom.contains(i.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:vr.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:ia.of(!1)}),20),this.composing=0}}}),SC=typeof navigator=="object"&&/Win/.test(navigator.platform),kC=Sa.highest(K.domEventHandlers({keydown(i,e){let t=e.state.field(ft,!1);if(!t||!t.open||t.open.disabled||t.open.selected<0||i.key.length>1||i.ctrlKey&&!(SC&&i.altKey)||i.metaKey)return!1;let n=t.open.options[t.open.selected],o=t.active.find(s=>s.source==n.source),r=n.completion.commitCharacters||o.result.commitCharacters;return r&&r.indexOf(i.key)>-1&&Ef(e,n),!1}})),CC=K.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box",whiteSpace:"pre-line"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),Zm=new class extends Ei{};Zm.startSide=1;Zm.endSide=-1;function AC(i={}){return[kC,ft,je.of(i),xC,_C,CC]}const eb=[{key:"Ctrl-Space",run:ro},{mac:"Alt-`",run:ro},{mac:"Alt-i",run:ro},{key:"Escape",run:Qm},{key:"ArrowDown",run:ds(!0)},{key:"ArrowUp",run:ds(!1)},{key:"PageDown",run:ds(!0,"page")},{key:"PageUp",run:ds(!1,"page")},{key:"Enter",run:Nc}],_C=Sa.highest(kf.computeN([je],i=>i.facet(je).defaultKeymap?[eb]:[]));function Pf(i,e){return N.create(i.ranges.map(e),i.mainIndex)}function ji(i,e){return i.update({selection:e,scrollIntoView:!0,userEvent:"select"})}function Bn({state:i,dispatch:e},t){let n=Pf(i.selection,t);return n.eq(i.selection,!0)?!1:(e(ji(i,n)),!0)}function Ma(i,e){return N.cursor(e?i.to:i.from)}function tb(i,e){return Bn(i,t=>t.empty?i.moveByChar(t,e):Ma(t,e))}function Vt(i){return i.textDirectionAt(i.state.selection.main.head)==Le.LTR}const nb=i=>tb(i,!Vt(i)),ib=i=>tb(i,Vt(i));function ob(i,e){return Bn(i,t=>t.empty?i.moveByGroup(t,e):Ma(t,e))}const MC=i=>ob(i,!Vt(i)),IC=i=>ob(i,Vt(i));function rb(i,e){return Bn(i,t=>{if(!t.empty)return Ma(t,e);let n=i.moveVertically(t,e);return n.head!=t.head?n:i.moveToLineBoundary(t,e)})}const sb=i=>rb(i,!1),ab=i=>rb(i,!0);function lb(i){let e=i.scrollDOM.clientHeight<i.scrollDOM.scrollHeight-2,t=0,n=0,o;if(e){for(let r of i.state.facet(K.scrollMargins)){let s=r(i);s?.top&&(t=Math.max(s?.top,t)),s?.bottom&&(n=Math.max(s?.bottom,n))}o=i.scrollDOM.clientHeight-t-n}else o=(i.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:t,marginBottom:n,selfScroll:e,height:Math.max(i.defaultLineHeight,o-5)}}function cb(i,e){let t=lb(i),{state:n}=i,o=Pf(n.selection,s=>s.empty?i.moveVertically(s,e,t.height):Ma(s,e));if(o.eq(n.selection))return!1;let r;if(t.selfScroll){let s=i.coordsAtPos(n.selection.main.head),a=i.scrollDOM.getBoundingClientRect(),l=a.top+t.marginTop,c=a.bottom-t.marginBottom;s&&s.top>l&&s.bottom<c&&(r=K.scrollIntoView(o.main.head,{y:"start",yMargin:s.top-l}))}return i.dispatch(ji(n,o),{effects:r}),!0}const Fd=i=>cb(i,!1),$c=i=>cb(i,!0);function li(i,e,t){let n=i.lineBlockAt(e.head),o=i.moveToLineBoundary(e,t);if(o.head==e.head&&o.head!=(t?n.to:n.from)&&(o=i.moveToLineBoundary(e,t,!1)),!t&&o.head==n.from&&n.length){let r=/^\s*/.exec(i.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length;r&&e.head!=n.from+r&&(o=N.cursor(n.from+r))}return o}const OC=i=>Bn(i,e=>li(i,e,!0)),EC=i=>Bn(i,e=>li(i,e,!1)),PC=i=>Bn(i,e=>li(i,e,!Vt(i))),TC=i=>Bn(i,e=>li(i,e,Vt(i))),DC=i=>Bn(i,e=>N.cursor(i.lineBlockAt(e.head).from,1)),LC=i=>Bn(i,e=>N.cursor(i.lineBlockAt(e.head).to,-1));function yn(i,e){let t=Pf(i.state.selection,n=>{let o=e(n);return N.range(n.anchor,o.head,o.goalColumn,o.bidiLevel||void 0)});return t.eq(i.state.selection)?!1:(i.dispatch(ji(i.state,t)),!0)}function fb(i,e){return yn(i,t=>i.moveByChar(t,e))}const hb=i=>fb(i,!Vt(i)),db=i=>fb(i,Vt(i));function ub(i,e){return yn(i,t=>i.moveByGroup(t,e))}const RC=i=>ub(i,!Vt(i)),NC=i=>ub(i,Vt(i));function pb(i,e){return yn(i,t=>i.moveVertically(t,e))}const gb=i=>pb(i,!1),mb=i=>pb(i,!0);function bb(i,e){return yn(i,t=>i.moveVertically(t,e,lb(i).height))}const zd=i=>bb(i,!1),jd=i=>bb(i,!0),$C=i=>yn(i,e=>li(i,e,!0)),BC=i=>yn(i,e=>li(i,e,!1)),VC=i=>yn(i,e=>li(i,e,!Vt(i))),FC=i=>yn(i,e=>li(i,e,Vt(i))),zC=i=>yn(i,e=>N.cursor(i.lineBlockAt(e.head).from)),jC=i=>yn(i,e=>N.cursor(i.lineBlockAt(e.head).to)),Hd=({state:i,dispatch:e})=>(e(ji(i,{anchor:0})),!0),qd=({state:i,dispatch:e})=>(e(ji(i,{anchor:i.doc.length})),!0),Wd=({state:i,dispatch:e})=>(e(ji(i,{anchor:i.selection.main.anchor,head:0})),!0),Ud=({state:i,dispatch:e})=>(e(ji(i,{anchor:i.selection.main.anchor,head:i.doc.length})),!0),HC=({state:i,dispatch:e})=>(e(i.update({selection:{anchor:0,head:i.doc.length},userEvent:"select"})),!0);function Nr(i,e){if(i.state.readOnly)return!1;let t="delete.selection",{state:n}=i,o=n.changeByRange(r=>{let{from:s,to:a}=r;if(s==a){let l=e(r);l<s?(t="delete.backward",l=us(i,l,!1)):l>s&&(t="delete.forward",l=us(i,l,!0)),s=Math.min(s,l),a=Math.max(a,l)}else s=us(i,s,!1),a=us(i,a,!0);return s==a?{range:r}:{changes:{from:s,to:a},range:N.cursor(s,s<r.head?-1:1)}});return o.changes.empty?!1:(i.dispatch(n.update(o,{scrollIntoView:!0,userEvent:t,effects:t=="delete.selection"?K.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function us(i,e,t){if(i instanceof K)for(let n of i.state.facet(K.atomicRanges).map(o=>o(i)))n.between(e,e,(o,r)=>{o<e&&r>e&&(e=t?r:o)});return e}const yb=(i,e,t)=>Nr(i,n=>{let o=n.from,{state:r}=i,s=r.doc.lineAt(o),a,l;if(t&&!e&&o>s.from&&o<s.from+200&&!/[^ \t]/.test(a=s.text.slice(0,o-s.from))){if(a[a.length-1]=="	")return o-1;let c=uf(a,r.tabSize),f=c%Rc(r)||Rc(r);for(let h=0;h<f&&a[a.length-1-h]==" ";h++)o--;l=o}else l=rt(s.text,o-s.from,e,e)+s.from,l==o&&s.number!=(e?r.doc.lines:1)?l+=e?1:-1:!e&&/[\ufe00-\ufe0f]/.test(s.text.slice(l-s.from,o-s.from))&&(l=rt(s.text,l-s.from,!1,!1)+s.from);return l}),Bc=i=>yb(i,!1,!0),vb=i=>yb(i,!0,!1),wb=(i,e)=>Nr(i,t=>{let n=t.head,{state:o}=i,r=o.doc.lineAt(n),s=o.charCategorizer(n);for(let a=null;;){if(n==(e?r.to:r.from)){n==t.head&&r.number!=(e?o.doc.lines:1)&&(n+=e?1:-1);break}let l=rt(r.text,n-r.from,e)+r.from,c=r.text.slice(Math.min(n,l)-r.from,Math.max(n,l)-r.from),f=s(c);if(a!=null&&f!=a)break;(c!=" "||n!=t.head)&&(a=f),n=l}return n}),xb=i=>wb(i,!1),qC=i=>wb(i,!0),WC=i=>Nr(i,e=>{let t=i.lineBlockAt(e.head).to;return e.head<t?t:Math.min(i.state.doc.length,e.head+1)}),UC=i=>Nr(i,e=>{let t=i.moveToLineBoundary(e,!1).head;return e.head>t?t:Math.max(0,e.head-1)}),GC=i=>Nr(i,e=>{let t=i.moveToLineBoundary(e,!0).head;return e.head<t?t:Math.min(i.state.doc.length,e.head+1)}),YC=({state:i,dispatch:e})=>{if(i.readOnly)return!1;let t=i.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:ie.of(["",""])},range:N.cursor(n.from)}));return e(i.update(t,{scrollIntoView:!0,userEvent:"input"})),!0},KC=({state:i,dispatch:e})=>{if(i.readOnly)return!1;let t=i.changeByRange(n=>{if(!n.empty||n.from==0||n.from==i.doc.length)return{range:n};let o=n.from,r=i.doc.lineAt(o),s=o==r.from?o-1:rt(r.text,o-r.from,!1)+r.from,a=o==r.to?o+1:rt(r.text,o-r.from,!0)+r.from;return{changes:{from:s,to:a,insert:i.doc.slice(o,a).append(i.doc.slice(s,o))},range:N.cursor(a)}});return t.changes.empty?!1:(e(i.update(t,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function XC(i,e){if(/\(\)|\[\]|\{\}/.test(i.sliceDoc(e-1,e+1)))return{from:e,to:e};let t=ko(i).resolveInner(e),n=t.childBefore(e),o=t.childAfter(e),r;return n&&o&&n.to<=e&&o.from>=e&&(r=n.type.prop(de.closedBy))&&r.indexOf(o.name)>-1&&i.doc.lineAt(n.to).from==i.doc.lineAt(o.from).from&&!/\S/.test(i.sliceDoc(n.to,o.from))?{from:n.to,to:o.from}:null}const Gd=JC(!1);function JC(i){return({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(o=>{let{from:r,to:s}=o,a=e.doc.lineAt(r),l=!i&&r==s&&XC(e,r);i&&(r=s=(s<=a.to?a:e.doc.lineAt(s)).to);let c=new Mf(e,{simulateBreak:r,simulateDoubleBreak:!!l}),f=jk(c,r);for(f==null&&(f=uf(/^\s*/.exec(e.doc.lineAt(r).text)[0],e.tabSize));s<a.to&&/\s/.test(a.text[s-a.from]);)s++;l?{from:r,to:s}=l:r>a.from&&r<a.from+100&&!/\S/.test(a.text.slice(0,r))&&(r=a.from);let h=["",Ed(e,f)];return l&&h.push(Ed(e,c.lineIndent(a.from,-1))),{changes:{from:r,to:s,insert:ie.of(h)},range:N.cursor(r+1+h[1].length)}});return t(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}const QC=[{key:"Ctrl-b",run:nb,shift:hb,preventDefault:!0},{key:"Ctrl-f",run:ib,shift:db},{key:"Ctrl-p",run:sb,shift:gb},{key:"Ctrl-n",run:ab,shift:mb},{key:"Ctrl-a",run:DC,shift:zC},{key:"Ctrl-e",run:LC,shift:jC},{key:"Ctrl-d",run:vb},{key:"Ctrl-h",run:Bc},{key:"Ctrl-k",run:WC},{key:"Ctrl-Alt-h",run:xb},{key:"Ctrl-o",run:YC},{key:"Ctrl-t",run:KC},{key:"Ctrl-v",run:$c}],ZC=[{key:"ArrowLeft",run:nb,shift:hb,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:MC,shift:RC,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:PC,shift:VC,preventDefault:!0},{key:"ArrowRight",run:ib,shift:db,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:IC,shift:NC,preventDefault:!0},{mac:"Cmd-ArrowRight",run:TC,shift:FC,preventDefault:!0},{key:"ArrowUp",run:sb,shift:gb,preventDefault:!0},{mac:"Cmd-ArrowUp",run:Hd,shift:Wd},{mac:"Ctrl-ArrowUp",run:Fd,shift:zd},{key:"ArrowDown",run:ab,shift:mb,preventDefault:!0},{mac:"Cmd-ArrowDown",run:qd,shift:Ud},{mac:"Ctrl-ArrowDown",run:$c,shift:jd},{key:"PageUp",run:Fd,shift:zd},{key:"PageDown",run:$c,shift:jd},{key:"Home",run:EC,shift:BC,preventDefault:!0},{key:"Mod-Home",run:Hd,shift:Wd},{key:"End",run:OC,shift:$C,preventDefault:!0},{key:"Mod-End",run:qd,shift:Ud},{key:"Enter",run:Gd,shift:Gd},{key:"Mod-a",run:HC},{key:"Backspace",run:Bc,shift:Bc,preventDefault:!0},{key:"Delete",run:vb,preventDefault:!0},{key:"Mod-Backspace",mac:"Alt-Backspace",run:xb,preventDefault:!0},{key:"Mod-Delete",mac:"Alt-Delete",run:qC,preventDefault:!0},{mac:"Mod-Backspace",run:UC,preventDefault:!0},{mac:"Mod-Delete",run:GC,preventDefault:!0}].concat(QC.map(i=>({mac:i.key,run:i.run,shift:i.shift})));var eA=Object.defineProperty,tA=Object.getOwnPropertyDescriptor,Po=(i,e,t,n)=>{for(var o=n>1?void 0:n?tA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&eA(e,t,o),o};let ti=class extends Dt{constructor(){super(...arguments),this.value="",this.placeholder="Type to search...",this.autofocus=!1,this.originalValue="",this.lastPreviewedId=null}firstUpdated(){this.initEditor()}initEditor(){if(!this.editorContainer)return;const i=K.theme({"&":{color:"#eee",backgroundColor:"#222"},".cm-content":{caretColor:"#fff"},"&.cm-focused .cm-cursor":{borderLeftColor:"#fff"},"&.cm-focused .cm-selectionBackground, ::selection":{backgroundColor:"#444"},".cm-gutters":{backgroundColor:"#222",color:"#ddd",border:"none"},".cm-tooltip":{backgroundColor:"#333",color:"#eee",border:"1px solid #555",position:"fixed",zIndex:"99999"},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:"#444",color:"#fff"}}},{dark:!0});this.originalValue=this.value;const e=[i,kf.of([{key:"Tab",run:n=>(Nc(n)||this.dispatchCommit(n.state.doc.toString()),!0)},{key:"Enter",run:n=>(Nc(n)||this.dispatchCommit(n.state.doc.toString()),!0)},{key:"Escape",run:()=>(this.dispatchEvent(new CustomEvent("cancel")),!0)},...eb,...ZC]),bk(this.placeholder),K.updateListener.of(n=>{if(n.docChanged&&(this.value=n.state.doc.toString(),this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.catalog&&n.transactions.some(r=>r.isUserEvent("input")||r.isUserEvent("delete")))){const r=this.catalog.search(this.value);let s=null;if(r.length>0){const a=r[0];a.type==="node"&&a.id&&(s=a.id)}s?(this.lastPreviewedId=s,this.dispatchEvent(new CustomEvent("preview-type",{detail:s}))):this.lastPreviewedId?this.dispatchEvent(new CustomEvent("preview-type",{detail:this.lastPreviewedId})):this.dispatchEvent(new CustomEvent("preview-type",{detail:this.value})),ro(this.editorView)}})];this.catalog&&e.push(AC({override:[this.completionSource.bind(this)],icons:!1,defaultKeymap:!1,optionClass:n=>n.type==="no-suggestion"?"no-suggestion-option":""}));const t=le.create({doc:this.value,extensions:e});if(this.editorView=new K({state:t,parent:this.editorContainer}),this.autofocus&&(this.editorView.focus(),this.editorView.dispatch({selection:{anchor:0,head:this.value.length}}),this.catalog&&ro(this.editorView)),this.catalog&&this.value){const n=this.catalog.search(this.value);n.length>0&&n[0].type==="node"&&n[0].id===this.value&&(this.lastPreviewedId=this.value)}this.editorView.contentDOM.addEventListener("blur",()=>{this.dispatchCommit(this.editorView.state.doc.toString())})}updated(i){if(i.has("value")&&this.editorView){if(this.lastPreviewedId&&this.value===this.lastPreviewedId)return;const e=this.editorView.state.doc.toString();e!==this.value&&this.editorView.dispatch({changes:{from:0,to:e.length,insert:this.value}})}}completionSource(i){if(!this.catalog)return null;const e=i.state.doc.toString();let t=this.catalog.search(e);return t.length===0?{from:0,options:[{label:"No suggestions",type:"no-suggestion",apply:n=>{this.dispatchCommit(n.state.doc.toString(),!1)}}],filter:!1}:{from:0,options:t.map(n=>({label:n.label,detail:n.detail,type:n.type,apply:(o,r,s,a)=>{const l=n.value;if(n.type==="node"){const c=n.id;this.dispatchCommit(c,!0)}else o.dispatch({changes:{from:s,to:a,insert:l},selection:{anchor:s+l.length}}),setTimeout(()=>{ro(o)},0)},boost:n.boost})),filter:!1}}commit(){this.dispatchCommit(this.editorView?.state.doc.toString()||this.value)}dispatchCommit(i,e=!1){if(this.editorView&&Qm(this.editorView),!e&&this.catalog)if(this.lastPreviewedId)i=this.lastPreviewedId;else{const t=this.catalog.search(i);t.length>0&&t[0].type==="node"&&t[0].id===i||(i="util.hub")}this.dispatchEvent(new CustomEvent("commit",{detail:i}))}render(){return A`<div id="editor"></div>`}};ti.styles=Se`
    :host {
      display: block;
      position: relative;
      width: 100%;
      font-family: 'Inter', sans-serif;
    }

    #editor {
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
    }

    /* CodeMirror Overrides */
    .cm-editor {
      height: 100%;
    }
    .cm-scroller {
      overflow: auto;
    }
    .cm-content {
      padding: 8px;
      font-family: inherit;
      font-size: 14px;
    }
    .cm-line {
      padding: 0;
    }

    /* Autocomplete Popup Styling */
    .cm-tooltip-autocomplete {
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .cm-completionLabel {
      font-weight: 500;
    }

    .cm-completionDetail {
      font-style: italic;
      color: #666;
      margin-left: 8px;
    }

    .no-suggestion-option {
        color: #888;
        font-style: italic;
        pointer-events: none;
    }
  `;Po([U({type:Object})],ti.prototype,"catalog",2);Po([U({type:String})],ti.prototype,"value",2);Po([U({type:String})],ti.prototype,"placeholder",2);Po([U({type:Boolean})],ti.prototype,"autofocus",2);Po([Bt("#editor")],ti.prototype,"editorContainer",2);ti=Po([Ee("smart-input")],ti);var nA=Object.defineProperty,iA=Object.getOwnPropertyDescriptor,Vn=(i,e,t,n)=>{for(var o=n>1?void 0:n?iA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&nA(e,t,o),o};let Kt=class extends Dt{constructor(){super(...arguments),this.value=0,this.min=0,this.max=1,this.step=.01,this.defaultValue=0,this.isDragging=!1,this.isEditing=!1,this.tempValue="",this.startValue=0,this.rect=null,this.dragOp=null}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this.handleHostKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleHostKeyDown),this.dragOp?.dispose()}render(){if(this.isEditing)return A`
        <input
          type="text"
          .value=${this.tempValue}
          @input=${this.handleInput}
          @keydown=${this.handleInputKeyDown}
          @blur=${this.commitEdit}
        />
      `;let i=0;return Number.isFinite(this.min)&&Number.isFinite(this.max)&&this.max>this.min&&(i=(Math.max(this.min,Math.min(this.max,this.value))-this.min)/(this.max-this.min)*100),A`
      <div class="bar" style="width: ${i}%"></div>
      <div
        class="value-display"
        @pointerdown=${this.handlePointerDown}
        @dblclick=${this.handleDoubleClick}
      >
        ${this.formatValue(this.value)}
      </div>
    `}formatValue(i){if(typeof i!="number"||isNaN(i))return"0";if(Number.isInteger(this.step))return i.toString();const e=this.step.toString().split(".")[1]?.length||0;return i.toFixed(e)}handlePointerDown(i){if(i.button===0){if(i.detail===2){this.handleDoubleClick();return}this.startValue=this.value,this.rect=this.getBoundingClientRect(),this.isDragging=!1,this.dragOp=new rn(i,this,{threshold:0,move:(e,t)=>{this.updateValueFromDelta(e,t[0]),this.isDragging||(this.isDragging=!0,this.setAttribute("dragging",""))},accept:()=>{this.isDragging&&this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.cleanupDrag(),this.focus()},cancel:e=>{(e===Kl.UserAction||e===Kl.Programmatic)&&(this.value=this.startValue,this.dispatchEvent(new CustomEvent("change",{detail:this.value}))),this.cleanupDrag()}})}}updateValueFromDelta(i,e){let t=this.value;if(i.shiftKey){const r=this.max-this.min;if(!Number.isFinite(r))t=this.startValue+e*.1*this.step;else{const s=this.rect?.width||100,a=e/s*r*.1;t=this.startValue+a}}else if(this.rect&&Number.isFinite(this.min)&&Number.isFinite(this.max)){const r=i.clientX-this.rect.left,s=Math.max(0,Math.min(1,r/this.rect.width));t=this.min+s*(this.max-this.min)}else t=this.startValue+e*this.step;const n=this.step.toString().split(".")[1]?.length||0,o=Math.pow(10,n);t=Math.round(t*o)/o,i.ctrlKey||(t=Math.max(this.min,Math.min(this.max,t))),t!==this.value&&(this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:this.value})))}cleanupDrag(){this.removeAttribute("dragging"),this.isDragging=!1,this.rect=null,this.dragOp=null}async handleHostKeyDown(i){if(!this.isEditing)if(/^[0-9.\-]$/.test(i.key)||i.key==="Enter"){this.isEditing=!0,this.tempValue=i.key==="Enter"?this.value.toString():i.key,i.preventDefault(),await this.updateComplete;const e=this.shadowRoot?.querySelector("input");e&&(e.focus(),i.key==="Enter"?e.select():e.selectionStart=e.selectionEnd=e.value.length)}else(i.key==="Backspace"||i.key==="Delete")&&(this.value=this.defaultValue,this.dispatchEvent(new CustomEvent("change",{detail:this.value})))}async handleDoubleClick(i){i?.stopPropagation(),this.isEditing=!0,this.tempValue=this.value.toString(),await this.updateComplete;const e=this.shadowRoot?.querySelector("input");e&&(e.focus(),e.select())}handleInput(i){this.tempValue=i.target.value}handleInputKeyDown(i){i.key==="Enter"?(this.commitEdit(),i.stopPropagation()):i.key==="Escape"&&(this.isEditing=!1,this.focus(),i.stopPropagation()),i.stopPropagation()}commitEdit(){if(this.tempValue.trim()==="")this.value=this.defaultValue,this.dispatchEvent(new CustomEvent("change",{detail:this.value}));else{const i=parseFloat(this.tempValue);isNaN(i)||(this.value=i,this.dispatchEvent(new CustomEvent("change",{detail:this.value})))}this.isEditing=!1,this.focus()}};Kt.styles=Se`
    :host {
      display: inline-block;
      user-select: none;
      cursor: ew-resize;
      position: relative;
      min-width: 40px;
      height: 22px;
      line-height: 22px;
      font-family: var(--font-family, sans-serif);
      font-size: 12px;
      color: var(--text-color, #ccc);
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid var(--selection-border, rgba(255, 69, 0, 0.5));
      border-radius: 2px;
      box-sizing: border-box;
      touch-action: none;
      overflow: hidden;
    }

    :host(:hover) {
      border-color: var(--accent-color, #ff4500);
      background: rgba(0, 0, 0, 0.3);
    }

    :host([dragging]) {
      border-color: var(--accent-color, #ff4500);
      color: var(--accent-color, #ff4500);
      /* background: var(--selection-color, rgba(255, 69, 0, 0.1)); Remove full background on drag */
    }

    :host(:focus) {
      border-color: var(--accent-color, #ff4500);
      outline: none;
    }

    .bar {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      /* Slanted hashed pattern with thin blue lines */
      background-image: repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent 3px,
        var(--selection-color, rgba(255, 69, 0, 0.1)) 3px,
        var(--selection-color, rgba(255, 69, 0, 0.1)) 4px
      );
      background-size: 22px 22px; /* Explicit size to ensure right-anchoring works */
      background-position: 100% 0; /* Anchor to right edge */
      pointer-events: none;
      z-index: 0;
      border-right: 1px solid var(--accent-color, #ff4500); /* Vertical line */
    }

    :host([dragging]) .bar {
      background-color: var(--selection-color, rgba(255, 69, 0, 0.1));
      border-right-width: 3px; /* Thicker on drag */
      opacity: 1;
    }

    .value-display {
      position: relative;
      z-index: 1;
      padding: 0 4px;
      text-align: center;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    input {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      border: none;
      background: var(--input-bg, #222);
      color: var(--text-color, #fff);
      font-family: inherit;
      font-size: inherit;
      padding: 0 4px;
      margin: 0;
      outline: none;
      text-align: center;
    }
  `;Vn([U({type:Number})],Kt.prototype,"value",2);Vn([U({type:Number})],Kt.prototype,"min",2);Vn([U({type:Number})],Kt.prototype,"max",2);Vn([U({type:Number})],Kt.prototype,"step",2);Vn([U({type:Number})],Kt.prototype,"defaultValue",2);Vn([nt()],Kt.prototype,"isDragging",2);Vn([nt()],Kt.prototype,"isEditing",2);Vn([nt()],Kt.prototype,"tempValue",2);Kt=Vn([Ee("scalar-slider")],Kt);class Sb{constructor(e,t){this.repository=e,this.subgraphProvider=t}search(e){const t=[],n=e.toLowerCase();if(n.endsWith("."))return this.getDrillDownResults(e.slice(0,-1));const o=Array.from(this.repository.getAllNodeTypes()),r=new Set,s=new Set,l=(this.subgraphProvider?this.subgraphProvider():[]).filter(c=>c.includes("/")).map(c=>{const h=c.replace(".json","").replace(/\//g,".");return{id:h,displayName:h.split(".").pop()}});for(const c of o){const f=c.id.split(".");f.length>1&&r.add(f[0]),c.definition.metadata?.category&&s.add(c.definition.metadata.category)}for(const c of l){const f=c.id.split(".");f.length>1&&r.add(f[0])}for(const c of r)c.toLowerCase().includes(n)&&t.push({label:c,type:"namespace",value:c+".",detail:"Namespace",boost:20});for(const c of s)c.toLowerCase().includes(n)&&t.push({label:c,type:"category",value:c+".",detail:"Category",boost:15});for(const c of o){let f=0;const h=c.id.toLowerCase(),d=c.displayName.toLowerCase(),u=(c.aliases||[]).map(p=>p.toLowerCase());h===n?f+=10:h.startsWith(n)?f+=5:h.includes(n)&&(f+=1),d===n?f+=5:d.startsWith(n)?f+=3:d.includes(n)&&(f+=1);for(const p of u)p===n?f+=5:p.startsWith(n)?f+=3:p.includes(n)&&(f+=1);f>0&&t.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:c.id,boost:f})}for(const c of l){let f=0;c.id.toLowerCase();const h=c.displayName.toLowerCase(),d=c.id;d===n?f+=12:d.startsWith(n)?f+=6:d.includes(n)&&(f+=2),h===n?f+=6:h.startsWith(n)?f+=4:h.includes(n)&&(f+=2),f>0&&t.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:"Subgraph",boost:f})}return t.sort((c,f)=>{const h=(f.boost||0)-(c.boost||0);return h!==0?h:c.value.length-f.value.length})}getDrillDownResults(e){const t=Array.from(this.repository.getAllNodeTypes()),n=[],o=new Set,r=e.toLowerCase(),a=(this.subgraphProvider?this.subgraphProvider():[]).filter(c=>c.includes("/")).map(c=>{const h=c.replace(".json","").replace(/\//g,".");return{id:h,displayName:h.split(".").pop()}}),l=[...t.map(c=>({id:c.id,displayName:c.displayName,category:c.definition.metadata?.category,isSubgraph:!1})),...a.map(c=>({id:c.id,displayName:c.displayName,category:void 0,isSubgraph:!0}))];for(const c of l){const f=c.id,h=c.category||"";let d=!1;if(f.toLowerCase().startsWith(r+".")&&(d=!0),d)n.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:c.isSubgraph?"Subgraph":c.id,boost:1}),h&&!o.has(h)&&(r.includes(h.toLowerCase())||(n.push({label:h,type:"category",value:e+"."+h+".",detail:"Category",boost:2}),o.add(h)));else{const u=r.split(".");if(u.length===2&&!c.isSubgraph){const p=u[0],g=u[1];f.toLowerCase().startsWith(p+".")&&h.toLowerCase()===g&&n.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:c.id,boost:1})}else u.length===1&&!c.isSubgraph&&h.toLowerCase()===r&&n.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:c.id,boost:1})}}return n}}class oA{constructor(e,t,n){this.host=e,this.appController=t,this.localController=n}handlePointerDown(e){e.stopPropagation();const t=e.composedPath();if(t.some(r=>{const s=r;return s.classList?s.tagName?.toLowerCase()==="graph-port"||s.classList.contains("virtual-inputs-container")||s.tagName?.toLowerCase()==="input"||s.tagName?.toLowerCase()==="select"||s.tagName?.toLowerCase()==="smart-input"||s.tagName?.toLowerCase()==="scalar-slider":!1})&&!t.some(r=>r.tagName==="GRAPH-PORT"))return;this.localController.observableState.selection.has(this.host.node.id)||this.localController.queueSelectPaths([this.host.node.id],e.shiftKey||e.ctrlKey||e.metaKey),this.localController.setAltKeyPressed(e.altKey),this.localController.setIsDraggingSelection(!0);const o=this.host.getRootNode()?.host;new rn(e,this.host.element,{move:(r,s)=>{if(this.localController.setAltKeyPressed(r.altKey),this.host.addDragTransform(s[0],s[1]),o){const a=this.host.getBoundingClientRect(),l=o.getBoundingClientRect(),c=40;let f=a.left+a.width/2;s[0]<0?f=a.left+c:s[0]>0&&(f=a.right-c);let h=a.top+a.height/2;s[1]<0?h=a.top+c:s[1]>0&&(h=a.bottom-c);const d=f-l.left+o.scrollLeft,u=h-l.top+o.scrollTop,p=this.localController.getGridCellFromPixels(d,u);this.localController.setDragPreview({x:p.x,y:p.y,w:1,h:1})}},accept:(r,s)=>{this.localController.setDragPreview(null),this.localController.setIsDraggingSelection(!1),this.handleDragAccept(r,s,o)},cancel:()=>{this.localController.setDragPreview(null),this.localController.setIsDraggingSelection(!1),this.host.clearDragTransform()}})}handleDragAccept(e,t,n){if(!n)return;if(e.altKey){const b=[],y=this.localController.observableState.selection;for(const[ge]of y)this.appController.getState().graph.inner.nodes[ge]&&b.push(ge);const x=this.host.getBoundingClientRect(),v=n.getBoundingClientRect(),C=40;let S=x.left+x.width/2;t[0]<0?S=x.left+C:t[0]>0&&(S=x.right-C);let k=x.top+x.height/2;t[1]<0?k=x.top+C:t[1]>0&&(k=x.bottom-C);const _=S-v.left+n.scrollLeft,M=k-v.top+n.scrollTop,T=this.localController.getGridCellFromPixels(_,M),P=this.host.node.x,O=this.host.node.y,z=T.x-P,V=T.y-O,H=this.appController.duplicateNodes(b,{x:z,y:V});this.host.clearDragTransform(),this.localController.queueSelectPaths(H);return}const o=this.host.getBoundingClientRect(),r=n.getBoundingClientRect(),s=40;let a=o.left+o.width/2;t[0]<0?a=o.left+s:t[0]>0&&(a=o.right-s);let l=o.top+o.height/2;t[1]<0?l=o.top+s:t[1]>0&&(l=o.bottom-s);const c=a-r.left+n.scrollLeft,f=l-r.top+n.scrollTop,h=this.localController.getGridCellFromPixels(c,f),d=h.x-this.host.node.x,u=h.y-this.host.node.y,p=Array.from(this.localController.observableState.selection.keys()).filter(b=>b.startsWith("node-")),{dx:g,dy:m}=this.appController.calculateConstrainedMove(p,d,u);this.appController.moveNodes(p,g,m),this.host.clearDragTransform(),this.host.setDragState(!0),setTimeout(()=>this.host.setDragState(!1),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:rA}=Ub,Yd=()=>document.createComment(""),Fo=(i,e,t)=>{var n;const o=i._$AA.parentNode,r=e===void 0?i._$AB:e._$AA;if(t===void 0){const s=o.insertBefore(Yd(),r),a=o.insertBefore(Yd(),r);t=new rA(s,a,i,i.options)}else{const s=t._$AB.nextSibling,a=t._$AM,l=a!==i;if(l){let c;(n=t._$AQ)===null||n===void 0||n.call(t,i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==a._$AU&&t._$AP(c)}if(s!==r||l){let c=t._$AA;for(;c!==s;){const f=c.nextSibling;o.insertBefore(c,r),c=f}}}return t},ui=(i,e,t=i)=>(i._$AI(e,t),i),sA={},aA=(i,e=sA)=>i._$AH=e,lA=i=>i._$AH,gl=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA;const n=i._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kd=(i,e,t)=>{const n=new Map;for(let o=e;o<=t;o++)n.set(i[o],o);return n},Vc=vg(class extends wg{constructor(i){if(super(i),i.type!==yg.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const o=[],r=[];let s=0;for(const a of i)o[s]=n?n(a,s):s,r[s]=t(a,s),s++;return{values:r,keys:o}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,n]){var o;const r=lA(i),{values:s,keys:a}=this.ct(e,t,n);if(!Array.isArray(r))return this.ut=a,s;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let f,h,d=0,u=r.length-1,p=0,g=s.length-1;for(;d<=u&&p<=g;)if(r[d]===null)d++;else if(r[u]===null)u--;else if(l[d]===a[p])c[p]=ui(r[d],s[p]),d++,p++;else if(l[u]===a[g])c[g]=ui(r[u],s[g]),u--,g--;else if(l[d]===a[g])c[g]=ui(r[d],s[g]),Fo(i,c[g+1],r[d]),d++,g--;else if(l[u]===a[p])c[p]=ui(r[u],s[p]),Fo(i,r[d],r[u]),u--,p++;else if(f===void 0&&(f=Kd(a,p,g),h=Kd(l,d,u)),f.has(l[d]))if(f.has(l[u])){const m=h.get(a[p]),b=m!==void 0?r[m]:null;if(b===null){const y=Fo(i,r[d]);ui(y,s[p]),c[p]=y}else c[p]=ui(b,s[p]),Fo(i,r[d],b),r[m]=null;p++}else gl(r[u]),u--;else gl(r[d]),d++;for(;p<=g;){const m=Fo(i,c[g+1]);ui(m,s[p]),c[p++]=m}for(;d<=u;){const m=r[d++];m!==null&&gl(m)}return this.ut=a,aA(i,c),Xn}}),cA=24,fA=24;function hA(i,e){if(i!=="io.input"||e.length!==1)return!1;const t=e[0];return t.type.kind==="atomic"&&t.type.type==="number"}function kb(i,e,t,n,o){if(e==="in"){const r=t.find(s=>s.name===i);if(r){if(r.suppressLabel)return!0;const s=o.has(r.name);if(cr(r,s))return!0}}if(e==="out"){const r=n.find(a=>a.name===i);if(r&&r.suppressLabel)return!0;const s=n.findIndex(a=>a.name===i);if(s!==-1&&s<t.length){const a=t[s],l=o.has(a.name);if(cr(a,l))return!0}}return!1}function dA(i,e,t,n,o,r){return Vc(e,s=>s.name,(s,a)=>{const l=o?11:cA+a*fA;return A`
            <div class="port-wrapper" style="top: ${l}px; position: absolute; right: 0;">
              ${r(s.name)}
              <graph-port
                .nodeId=${i}
                .name=${s.name}
                type="out"
                .description=${s.description||""}
                ?hideLabel="${o?!0:kb(s.name,"out",t,e,n)}"
              ></graph-port>
            </div>
          `})}var uA=Object.defineProperty,pA=Object.getOwnPropertyDescriptor,To=(i,e,t,n)=>{for(var o=n>1?void 0:n?pA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&uA(e,t,o),o};let ni=class extends ct{constructor(){super(...arguments),this.description="",this.hideLabel=!1}handlePointerDown(i){if(i.button!==0)return;i.stopPropagation(),E.observableState.inflightPortConnectionOperation||E.setInflightPortConnectionOperation({nodeId:this.nodeId,port:this.name,type:this.type})}handlePointerUp(i){i.stopPropagation();const e=E.observableState.inflightPortConnectionOperation;if(e)if(e.nodeId!==this.nodeId&&e.type!==this.type){const t=e.type==="out"?e:{nodeId:this.nodeId,port:this.name,type:this.type},n=e.type==="in"?e:{nodeId:this.nodeId,port:this.name,type:this.type};j.createConnection(t.nodeId,t.port,n.nodeId,n.port),E.setInflightPortConnectionOperation(null)}else e.nodeId===this.nodeId&&(e.port,this.name)}render(){const{inflightPortConnectionOperation:i}=E.observableState,e=i?.type===this.type&&i?.port===this.name&&i?.nodeId===this.nodeId;return A`
      ${this.type==="out"&&this.name!=="0"&&!this.hideLabel?A`<div class="port-label">${this.name}</div>`:""}
      <div
        class="port ${this.type}-port ${e?"connecting":""}"
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        title="${this.description}"
      ></div>
      ${this.type==="in"&&this.name&&!this.hideLabel?A`<div class="port-label">${this.name}</div>`:""}
    `}};ni.styles=Se`
    :host {
      display: flex;
      align-items: center;
      height: var(--row-height, 24px);
    }

    .port {
      width: 15px;
      height: 15px;
      background-color: var(--port-color);
      border-radius: 50%;
      cursor: pointer;
      z-index: 10;
      position: relative; /* Ensure pseudo-element positioning */
    }

    .port::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -4px;
        right: -4px;
        bottom: -6px;
    }

    .port:hover {
      background-color: var(--port-hover);
      transform: scale(1.2);
    }

    .port.connecting {
      background-color: var(--port-connected);
      box-shadow: 0 0 5px var(--port-connected);
    }

    .port-label {
      font-size: 0.7em;
      white-space: nowrap;
      color: var(--text-muted);
      padding: 0 ${bv}px;
    }
  `;To([U({type:String})],ni.prototype,"nodeId",2);To([U({type:String,reflect:!0})],ni.prototype,"name",2);To([U({type:String,reflect:!0})],ni.prototype,"type",2);To([U({type:String})],ni.prototype,"description",2);To([U({type:Boolean})],ni.prototype,"hideLabel",2);ni=To([Ee("graph-port")],ni);var gA=Object.defineProperty,mA=Object.getOwnPropertyDescriptor,Ct=(i,e,t,n)=>{for(var o=n>1?void 0:n?mA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&gA(e,t,o),o};let lt=class extends ct{constructor(){super(...arguments),this.incomingConnections=[],this.isQueued=!1,this.x=0,this.y=0,this.gridColumn="",this.gridRow="",this.parentZIndex=100,this.catalog=new Sb(ee,()=>mi.files.map(i=>i.name)),this.loadedBodyRenderer=null,this.loadedInspectorRenderer=null,this.loadedInputEditorRenderer=null,this.hasRequestedBodyLoad=!1,this.hasRequestedInspectorLoad=!1,this.hasRequestedInputEditorLoad=!1,this.editingField=null,this.typeLongEdit=null,this.sliderLongEdit=null,this.activeSliderPort=null,this.interaction=new oA({element:this,get node(){return this.element.node},getRootNode:()=>this.getRootNode(),getBoundingClientRect:()=>this.getBoundingClientRect(),addDragTransform:(i,e)=>{this.style.transform=`translate(${i}px, ${e}px)`},clearDragTransform:()=>{this.style.transform=""},setDragState:i=>{i?this.dataset.dragged="true":delete this.dataset.dragged}},j,E),this.debugDisposer=null,this.currentTypeId=null}renderDebugValue(i){if(!E.observableState.localSettings.showDebugValues)return null;const e=_e.outputs.get(this.node.id);if(!e)return null;let t,n;const o=ee.getNodeType(this.node.config.typeId);if(e.fields&&i in e.fields){t=e.fields[i];const r=E.observableState.inferredNodeTypes.get(this.node.id);if(r&&r.outputs&&r.outputs.kind==="record"&&r.outputs.fields&&i in r.outputs.fields&&(n=r.outputs.fields[i]),!n&&o&&o.outputs){const s=o.outputs.find(a=>a.name===i);s&&(n=s.type)}}else if(i===""&&e.untagged&&e.untagged.length>0)t=e.untagged[0];else{const r=_e.outputRemappings[this.node.id];if(r&&r[i]){const s=r[i],a=_e.outputs.get(s);a&&a.fields&&"value"in a.fields&&(t=a.fields.value)}}return t===void 0?null:A`<div class="debug-chip-wrapper">${Ql(t,n)}</div>`}handlePointerUp(i){const{inflightPortConnectionOperation:e}=E.observableState;if(e&&e.nodeId!==this.node.id){const t=ee.getNodeType(this.node.config.typeId);let n=null,o=null;if(e.type==="out"){E.observableState.inferredNodeTypes.get(this.node.id);const r=t?.inputs||[];r.length>0&&(n=r[0].name,o="in")}else{const r=t?.outputs||[];r.length>0&&(n=r[0].name,o="out")}if(n&&o){i.stopPropagation(),e.type==="out"?j.createConnection(e.nodeId,e.port,this.node.id,n):j.createConnection(this.node.id,n,e.nodeId,e.port),E.setInflightPortConnectionOperation(null);return}}}handlePointerDown(i){this.interaction.handlePointerDown(i)}handleClick(i){if(i.composedPath().some(s=>{const a=s;return a.classList?a.tagName?.toLowerCase()==="graph-port"||a.classList.contains("virtual-inputs-container")||a.tagName?.toLowerCase()==="input"||a.tagName?.toLowerCase()==="select"||a.tagName?.toLowerCase()==="smart-input"||a.tagName?.toLowerCase()==="scalar-slider":!1})||this.dataset.dragged)return;const n=E.observableState.selection,o=n.has(this.node.id),r=Array.from(n.keys()).filter(s=>s.startsWith("node-")).length;o&&r>1?E.setLastGroupSelection(new Set(n.keys())):i.detail===1&&E.setLastGroupSelection(null),E.queueSelectPaths([this.node.id],i.shiftKey||i.ctrlKey||i.metaKey)}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.handlePointerDown),this.addEventListener("pointerup",this.handlePointerUp),this.addEventListener("click",this.handleClick),this.debugDisposer=un(()=>[E.observableState.localSettings.showDebugValues,_e.outputs.get(this.node.id)],()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerdown",this.handlePointerDown),this.removeEventListener("pointerup",this.handlePointerUp),this.removeEventListener("click",this.handleClick),this.debugDisposer&&(this.debugDisposer(),this.debugDisposer=null)}handleTypeChange(i){const e=i.target;j.setNodeConfig(this.node.id,{typeId:e.value})}handleSmartTypeChange(i){const e=i.detail;this.typeLongEdit?(this.typeLongEdit.applyAgain(t=>{t.setNodeConfig(this.node.id,{typeId:e})}),this.typeLongEdit.accept(),this.typeLongEdit=null):j.setNodeConfig(this.node.id,{typeId:e})}handleSmartTypePreview(i){const e=i.detail;let t=e,n={};!ee.getNodeType(e)&&e.includes(".")&&(t="core.subgraph",n={subgraphId:e}),this.typeLongEdit?this.typeLongEdit.applyAgain(o=>{o.setNodeConfig(this.node.id,{typeId:t,...n})}):this.typeLongEdit=j.beginLongEdit({apply:o=>{o.setNodeConfig(this.node.id,{typeId:t,...n})},cancel:()=>{this.typeLongEdit=null}})}handleSmartTypeCancel(i){this.typeLongEdit&&(this.typeLongEdit.cancel(),this.typeLongEdit=null),this.editingField=null}handleNameChange(i){const e=i.target;j.setNodeConfig(this.node.id,{name:e.value})}handleVirtualInputChange(i,e){const t=i.target,n=ax(t.value)??0;if(i.type==="input")!this.sliderLongEdit||this.activeSliderPort!==e?(this.sliderLongEdit&&this.sliderLongEdit.cancel(),this.activeSliderPort=e,this.sliderLongEdit=j.beginLongEdit({apply:o=>{const r=o.getState().graph.inner.nodes[this.node.id];r&&o.setNodeConfig(this.node.id,{values:{...r.config.values||{},[e]:n}})},cancel:()=>{this.sliderLongEdit=null,this.activeSliderPort=null}})):this.sliderLongEdit.applyAgain(o=>{const r=o.getState().graph.inner.nodes[this.node.id];r&&o.setNodeConfig(this.node.id,{values:{...r.config.values||{},[e]:n}})});else if(i.type==="change")if(this.sliderLongEdit)this.sliderLongEdit.accept(),this.sliderLongEdit=null,this.activeSliderPort=null;else{const o=j.getState().graph.inner.nodes[this.node.id];o&&j.setNodeConfig(this.node.id,{values:{...o.config.values||{},[e]:n}})}}handleDoubleClick(i,e){e.stopPropagation(),this.editingField=i}handleEditCommit(i,e){const t=e.detail;if(i==="name")j.setNodeConfig(this.node.id,{name:t});else{let n=t,o={};!ee.getNodeType(t)&&t.includes(".")&&(n="core.subgraph",o={subgraphId:t}),j.setNodeConfig(this.node.id,{typeId:n,...o})}this.editingField=null}handleEditCancel(){this.editingField=null}renderInspectorContent(){const i=ee.getNodeType(this.node.config.typeId),e=t=>j.setNodeConfig(this.node.id,t);return A`
      <h3>Inspector</h3>
      <div class="field">
        <label>Name:</label>
        <input type="text" .value=${this.node.config.name||""} @change=${this.handleNameChange.bind(this)} />
      </div>
      <div class="field">
        <label>Type:</label>
        <smart-input
            .catalog=${this.catalog}
            .value=${this.node.config.typeId}
            @commit=${this.handleSmartTypeChange.bind(this)}
            @preview-type=${this.handleSmartTypePreview.bind(this)}
            @cancel=${this.handleSmartTypeCancel.bind(this)}
        ></smart-input>
      </div>
      ${i?.renderInspector?i.renderInspector(this.node,e):""}
    `}async loadUI(){const i=ee.getNodeType(this.node.config.typeId);if(!(!i||!i.ui)){if(i.ui.body&&!this.loadedBodyRenderer&&!this.hasRequestedBodyLoad){this.hasRequestedBodyLoad=!0;try{const e=await i.ui.body();this.loadedBodyRenderer=e,i.renderBody||(i.renderBody=e)}catch(e){console.error("Failed to load body renderer",e)}}if(i.ui.body&&!this.loadedBodyRenderer&&!this.hasRequestedBodyLoad){this.hasRequestedBodyLoad=!0;try{const e=await i.ui.body();this.loadedBodyRenderer=e,i.renderBody||(i.renderBody=e)}catch(e){console.error("Failed to load body renderer",e)}}if(i.ui.getBodyHeight&&!i.getBodyHeight)try{const e=await i.ui.getBodyHeight();i.getBodyHeight=e}catch(e){console.error("Failed to load getBodyHeight",e)}if(i.ui.inspector&&!this.loadedInspectorRenderer&&!this.hasRequestedInspectorLoad){this.hasRequestedInspectorLoad=!0;try{if(typeof i.ui.inspector=="function"){const e=await i.ui.inspector();this.loadedInspectorRenderer=e,i.renderInspector||(i.renderInspector=e)}else{const{createGenericInspector:e}=await Oe(async()=>{const{createGenericInspector:o}=await import("./generic-inspector-BfbkSon5.js");return{createGenericInspector:o}},[]),t=i.ui.inspector,n=e(t.fields);this.loadedInspectorRenderer=n,i.renderInspector||(i.renderInspector=n)}}catch(e){console.error("Failed to load inspector renderer",e)}}if(i.ui.inputEditor&&!this.loadedInputEditorRenderer&&!this.hasRequestedInputEditorLoad){this.hasRequestedInputEditorLoad=!0;try{const e=await i.ui.inputEditor();if(this.loadedInputEditorRenderer=e,i.renderInputEditor||(i.renderInputEditor=e),i.ui.getInputEditorHeight){const t=await i.ui.getInputEditorHeight();i.getInputEditorHeight||(i.getInputEditorHeight=t)}}catch(e){console.error("Failed to load input editor renderer",e)}}this.requestUpdate()}}updated(i){if(this.node&&this.node.config.typeId!==this.currentTypeId&&(this.currentTypeId=this.node.config.typeId,this.loadedBodyRenderer=null,this.loadedInspectorRenderer=null,this.loadedInputEditorRenderer=null,this.hasRequestedBodyLoad=!1,this.hasRequestedInspectorLoad=!1,this.hasRequestedInputEditorLoad=!1,this.loadUI()),this.node){this.dataset.id=this.node.id,this.style.gridColumn=this.gridColumn,this.style.gridRow=this.gridRow,this.style.zIndex=this.parentZIndex.toString();const e=ee.getNodeType(this.node.config.typeId),t=E.observableState.effectiveNodeTypes.get(this.node.id);let n=[],o=[];t?(n=t.inputs,o=t.outputs):e&&(n=[...e.inputs||[]],o=[...e.outputs||[]]);const r=this.incomingConnections||j.observableState.graph.auxiliary.incomingConnections.get(this.node.id)||[],s=new Set(r.map(p=>{const g=j.observableState.graph.inner.connections[p];return g?g.toPort:null}).filter(p=>p!==null)),a=!!(e?.renderBody||this.loadedBodyRenderer);let l="normal";l=Hl(n,o,s,a,this.node.config),this.dataset.state=l;let c=0;n.forEach(p=>{const g=s.has(p.name);let m=vn;if(cr(p,g)){const b=e?.getInputEditorHeight?.(this.node,p.name);b&&(m=Math.max(vn,b))}c+=m});const f=o.length*vn,h=e?.getBodyHeight?.(this.node)||0,d=Math.max(c,f,vn);let u=vh+d+gv+h;l==="minimal"&&(u=80),this.style.height=`${u}px`,e||setTimeout(()=>this.requestUpdate(),200)}}render(){const{selection:i,inflightPortConnectionOperation:e,queuedSelection:t}=E.observableState,n=i.has(this.node.id);this.isQueued,e&&(e.nodeId,this.node.id),this.toggleAttribute("selected",n),E.defineSelectable({path:this.node.id,renderInspectorContent:()=>this.renderInspectorContent()});const o=ee.getNodeType(this.node.config.typeId),r=E.observableState.effectiveNodeTypes.get(this.node.id);let s=[],a=[],l=this.node.config.typeId;r?(s=r.inputs,a=r.outputs,l=Ah(this.node.config,o)):o&&(s=[...o.inputs||[]],a=[...o.outputs||[]],l=Ah(this.node.config,o));const c=j.observableState.graph.auxiliary.incomingConnections.get(this.node.id)||[],f=new Set(c.map(v=>{const C=j.observableState.graph.inner.connections[v];return C?C.toPort:null}).filter(v=>v!==null)),h=this.isQueued,d=qs(this.node.config.typeId),u=!!(o?.renderBody||this.loadedBodyRenderer),p=Hl(s,a,f,u,this.node.config);this.dataset.state=p;const g=p==="pill";let m=g?11:vh;const b=[],y=[];s.forEach((v,C)=>{const S=f.has(v.name);let k=vn;if(b.push(A`
        <div class="port-wrapper" style="top: ${m}px; position: absolute; left: 0; height: ${vn}px;">
          <graph-port
            .nodeId=${this.node.id}
            .name=${v.name}
            type="in"
            .description=${v.description||""}
            ?hideLabel="${g?!0:kb(v.name,"in",s,a,f)}"
          ></graph-port>
        </div>
      `),cr(v,S)){const _=o?.getInputEditorHeight?.(this.node,v.name);_&&(k=Math.max(vn,_));let M;if(o?.renderInputEditor&&(M=o.renderInputEditor(this.node,v.name,{handleVirtualInputChange:this.handleVirtualInputChange.bind(this)})),!M){let T=this.node.config.values&&this.node.config.values[v.name];T===void 0&&this.node.config[v.name]!==void 0&&(T=this.node.config[v.name]);const P=T!==void 0?T:v.defaultValue!==void 0?v.defaultValue:v.type.defaultValue!==void 0?v.type.defaultValue:"",O=v.type.kind==="atomic"&&v.type.type==="number",z=a[C]?.name||"";M=A`
                <div class="virtual-input-field-wrapper" style="height: var(--row-height);">
                  <div class="slider-label" title="${v.name}">${v.name}</div>
                  ${O?A`
                          <scalar-slider
                            .min=${v.range?.[0]??0}
                            .max=${v.range?.[1]??1}
                            .step=${v.step??(v.range?(v.range[1]-v.range[0])/100:.01)}
                            .value=${P}
                            .defaultValue=${v.defaultValue??Math.max(v.range?.[0]??0,Math.min(v.range?.[1]??1,0))}
                            @input=${V=>this.handleVirtualInputChange(V,v.name)}
                            @change=${V=>this.handleVirtualInputChange(V,v.name)}
                            id="${this.node.id}-${v.name}-virtual-input"
                            class="virtual-input-field"
                            title="${v.description}"
                          ></scalar-slider>
                        `:v.type.kind==="atomic"&&v.type.type==="string"?A`
                          <input
                            id="${this.node.id}-${v.name}-virtual-input"
                            type="text"
                            .value=${P.toString()}
                            @input=${V=>this.handleVirtualInputChange(V,v.name)}
                            @change=${V=>this.handleVirtualInputChange(V,v.name)}
                            class="virtual-input-field"
                            title="${v.description}"
                          />
                        `:A`
                          <div class="virtual-input-field" style="color: var(--text-muted); font-size: 10px; padding: 0 5px;">
                            ${v.type.hint||(v.type.kind==="atomic"?v.type.type:v.type.kind)}
                          </div>
                        `}
                    <div class="slider-label" title="${z}">${z}</div>
                  </div>
          `}M&&y.push(A`
            <div style="top: ${m}px; position: absolute; width: 100%; height: ${k}px; display: flex; align-items: center;">
              ${M}
            </div>
          `)}m+=k});const x=`transform: translate(0, 0); width: 100%; height: 100%; --node-accent-color: ${d};`;return A`
      <div
        class="node ${n?"selected":""} ${h?"queued":""} ${hA(this.node.config.typeId,s)?"has-io-slider":""}"
        style="${x}"
        data-state="${p}"
      >
        <div class="ports-wrapper">
          <div class="inputs">
            ${b}
          </div>
          <div class="outputs">
            ${dA(this.node.id,a,s,f,g,v=>this.renderDebugValue(v))}
          </div>
        </div>
        <div class="node-main-content">
          <div class="node-title ${this.editingField?"editing":""}">
            <div class="editable-label-wrapper name ${this.editingField==="name"?"editing":""}">
              <span
                @dblclick=${v=>this.handleDoubleClick("name",v)}
                style="display: block; overflow: hidden; text-overflow: ellipsis; visibility: ${this.editingField==="name"?"hidden":"visible"};"
              >
                ${l||this.node.config.name}
              </span>
              ${this.editingField==="name"?A`
                <smart-input
                  .value=${this.node.config.name||l}
                  .autofocus=${!0}
                  @commit=${v=>this.handleEditCommit("name",v)}
                  @cancel=${this.handleEditCancel}
                  style="position: absolute; top: -6px; left: -8px; min-width: 150px; min-height: 24px; width: calc(100% + 8px); height: calc(100% + 4px); z-index: 100;"
                ></smart-input>
              `:""}
            </div>

            <div class="editable-label-wrapper type ${this.editingField==="type"?"editing":""}">
              <span
                class="node-type-id"
                @dblclick=${v=>this.handleDoubleClick("type",v)}
                style="visibility: ${this.editingField==="type"?"hidden":"visible"};"
              >
                ${this.node.config.typeId==="core.subgraph"&&this.node.config.subgraphId?this.node.config.subgraphId:this.node.config.typeId}
              </span>
              ${this.editingField==="type"?A`
                <smart-input
                  .catalog=${this.catalog}
                  .value=${this.node.config.typeId==="core.subgraph"&&this.node.config.subgraphId?this.node.config.subgraphId:this.node.config.typeId}
                  .autofocus=${!0}
                  @commit=${v=>this.handleEditCommit("type",v)}
                  @preview-type=${this.handleSmartTypePreview.bind(this)}
                  @cancel=${this.handleEditCancel}
                  style="position: absolute; top: -6px; left: -8px; min-width: 150px; min-height: 24px; width: calc(100% + 8px); height: calc(100% + 4px); z-index: 100;"
                ></smart-input>
              `:""}
            </div>
          </div>
          <div class="virtual-inputs-container">
            ${y}
            <div style="top: ${m}px; position: absolute; width: 100%; height: ${o?.getBodyHeight?.(this.node)||0}px; pointer-events: auto; touch-action: none;">
              ${o?.renderBody?.(this.node,{handleVirtualInputChange:this.handleVirtualInputChange.bind(this)})||""}
            </div>
          </div>
        </div>
      </div>
    `}};lt.styles=[...Qt,Se`
    :host {
      display: flex;
      flex-direction: column;
      background-color: var(--node-bg);
      border-radius: 10px;
      /* width: 120px; Removed fixed width to allow state-based sizing */
      min-height: 80px;
      color: var(--text-color);
      cursor: grab;
      position: relative;
      border: 2px solid transparent;
      box-sizing: border-box;
      transition: width 0.2s, height 0.2s, border-radius 0.2s;
      justify-self: center;
      align-self: center;
    }

    :host([data-state="normal"]) {
      width: ${Bs}px;
    }

    :host([data-state="compressed"]) {
      width: ${jl}px;
    }

    :host([data-state="minimal"]) {
      width: ${vs}px;
      height: ${vs}px;
      border-radius: 50%;
      min-height: ${vs}px;
    }

    :host([data-state="minimal"]) .node {
      border-radius: 50%;
    }

    :host([data-state="pill"]) {
      width: 80px;
      height: 40px;
      min-height: 40px;
      background: transparent; /* Let internal pill handle bg */
    }

    :host([data-state="minimal"]) .node-title,
    :host([data-state="pill"]) .node-title {
      font-size: 0.7em;
      text-align: center;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0;
      overflow: visible; /* Allow edit box to show */
      white-space: normal; /* Allow wrapping if needed, though usually short */
    }

    :host([data-state="minimal"]) smart-input {
      text-align: left;
      font-size: 14px;
      font-weight: normal;
    }

    :host([data-state="minimal"]) .editable-label-wrapper.name {
      font-weight: bold;
      overflow: visible;
      justify-content: center;
    }

    :host([data-state="minimal"]) .editable-label-wrapper.type {
      font-size: 0.8em;
      opacity: 0.7;
      overflow: visible;
      justify-content: center;
    }

    /* Minimal Mode: Hide port labels */
    :host([data-state="minimal"]) .port-label {
      display: none;
    }

    /* IO Slider Styling */
    .has-io-slider .node-title {
      margin-top: -18px; /* Move title block up */
    }

    .has-io-slider .editable-label-wrapper.name {
      place-content: center;
    }

    .has-io-slider .editable-label-wrapper.type {
      position: absolute;
      bottom: 2px;
    }

    /* Hide redundant labels */
    .has-io-slider .port-label,
    .has-io-slider .slider-label {
      display: none !important;
    }

    .has-io-slider .virtual-inputs-container {
      width: calc(100% - 16px);
      margin-left: -5px;
    }

    .node {
      position: absolute;
      background-color: var(--node-bg);
      border-radius: 8px;
      /* "Clear Gel" shadow: darker, tighter drop shadow + subtle rim light */
      box-shadow: 0 4px 15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      user-select: none;
      border: 1px solid var(--node-border);
      border-left: ${xh}px solid var(--node-accent-color, var(--node-border));
      box-sizing: border-box;
    }



    :host([selected]) {
      border-color: var(--accent-color);
      box-shadow: 0 0 10px var(--selection-color);
    }

    .node-main-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 5px 0;
    }

    .node-title {
      font-weight: bold;
      margin: 2px 0;
      width: calc(100% - 19px);
      display: flex;
      align-items: baseline;
      gap: 6px;
      white-space: nowrap;
      white-space: nowrap;
      white-space: nowrap;
      overflow: hidden;
      padding: 0 var(--node-padding-x); /* Align with port labels */
      cursor: crosshair; /* Hint at interaction */
    }

    .node-title.editing {
      overflow: visible;
    }

    .editable-label-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .editable-label-wrapper.name {
      flex-grow: 1;
      overflow: hidden;
      min-width: 30px;
    }
    .editable-label-wrapper.name.editing {
      overflow: visible;
    }

    .editable-label-wrapper.type {
      flex-shrink: 0;
    }
    .editable-label-wrapper.type.editing {
      overflow: visible;
    }

    .node-type-id {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7em;
      color: var(--text-muted, #888);
      font-weight: normal;
      flex-shrink: 0;
    }

    .ports-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      pointer-events: none; /* Allow clicks to pass through to node-main-content */
      z-index: 10; /* Ensure ports render above custom editors */
    }

    .inputs, .outputs {
      display: flex;
      flex-direction: column;
      justify-content: flex-start; /* Stack from top */
      padding: 5px 0;
      pointer-events: all; /* Re-enable pointer events for ports */
      gap: 0; /* No gap, use fixed height */
      top: 0px;
    }

    .inputs {
      align-items: flex-start;
      position: relative;
      left: ${wh}px; /* Move pips out to hang off node */
    }

    .outputs {
      align-items: flex-end;
      position: relative;
      right: ${wh}px; /* Move pips out */
    }

    .virtual-inputs-container {
      position: absolute;
      top: 0;
      left: calc(var(--node-padding-x) - ${xh}px - 1px);
      width: ${ue}px;
      display: flex;
      flex-direction: column;
      pointer-events: none;
      z-index: 5;
    }

    .virtual-input-field-wrapper {
      display: flex;
      flex-direction: row; /* Horizontal layout for labels + slider */
      align-items: center;
      width: 100%;
      height: var(--row-height); /* Match port height */
      justify-content: space-between;
      pointer-events: auto;
    }

    .slider-label {
      width: ${mv}px;
      font-size: 0.7em;
      color: var(--text-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
      box-sizing: border-box;
    }

    .slider-label:first-child {
      text-align: left;
      padding-left: ${Wa}px;
    }

    .slider-label:last-child {
      text-align: right;
      padding-right: ${Wa}px;
    }

    .virtual-input-field {
      flex-grow: 1; /* Fill remaining space */
      width: auto; /* Let flex handle width */
      padding: 0;
      margin: 0 ${Wa}px;
      /* height: ${vn}px; Removed to allow slider to be 22px */
    }

    /* Pill Style for IO Nodes */
    :host([data-io-type="input"]) {
      .ports-wrapper .inputs {
        visibility: hidden;
      }
    }

    /* Output Port Styling override for Pill */

    .debug-chip-wrapper {
      position: absolute;
      left: 100%; /* Position to the right of the port (outside) */
      margin-left: 8px;
      pointer-events: none;
      z-index: 10;
      white-space: nowrap;
    }


    /* Styles for chips returned by formatValue */

  `];Ct([U({attribute:!1})],lt.prototype,"node",2);Ct([U({attribute:!1})],lt.prototype,"incomingConnections",2);Ct([U({type:Boolean})],lt.prototype,"isQueued",2);Ct([U({type:Number})],lt.prototype,"x",2);Ct([U({type:Number})],lt.prototype,"y",2);Ct([U({type:String})],lt.prototype,"gridColumn",2);Ct([U({type:String})],lt.prototype,"gridRow",2);Ct([U({type:Number})],lt.prototype,"parentZIndex",2);Ct([nt()],lt.prototype,"loadedBodyRenderer",2);Ct([nt()],lt.prototype,"loadedInspectorRenderer",2);Ct([nt()],lt.prototype,"loadedInputEditorRenderer",2);Ct([nt()],lt.prototype,"editingField",2);lt=Ct([Ee("graph-node")],lt);class bA{constructor(e){this.ctx=e}render(e){return e.map(t=>{const r=Math.floor(t.y/32),s=t.y%32,a=this.ctx.gridMetrics.rows.get(r)!==void 0?this.ctx.gridMetrics.rows.get(r):80,l=this.ctx.gridMetrics.rowOffsets.get(r)??16+r*96;let c=8;s<31?c=16+s*24:c=a!==void 0&&a>0?a+9:9;const f=l+c;let h="#888",d;if(t.wireId){const D=this.ctx.connections[t.wireId];if(D){h=qs(`${D.fromPort}-${D.toPort}`);const X=this.ctx.nodes[D.fromNodeId],me=this.ctx.nodes[D.toNodeId];if(X&&me){const Ce=this.getAbsolutePortY(X,D.fromPort.toString(),!1),Ae=this.getAbsolutePortY(me,D.toPort.toString(),!0),Ke=f,Ft=12,Vr=t.type==="start",Oa=t.type==="end";Vr&&Ce!==void 0?d=Ce:Oa&&Ae!==void 0?d=Ae:Ce!==void 0&&Math.abs(Ke-Ce)<=Ft?d=Ce:Ae!==void 0&&Math.abs(Ke-Ae)<=Ft&&(d=Ae)}}}const u=this.ctx.selection.has(t.wireId),p=h,g=t.x+2;let m=0,b=0;const y=r*2+2;s<31?(m=y,b=16+s*24):(m=y+1,b=9);let x=0;if(d!==void 0){const D=s===31,X=this.ctx.gridMetrics.rowOffsets.get(r);if(X!==void 0)D?x=X+(a||80):x=X;else{const Ce=16+r*96;x=D?Ce+80:Ce}const me=d-f;Math.abs(me)<3&&(b=d-1-x)}if(t.laneH&&t.totalHLanes&&t.totalHLanes>1){const X=(t.laneH-(t.totalHLanes+1)/2)*4;b+=X}let v=0;if(t.laneV&&t.totalVLanes&&t.totalVLanes>1){const X=(t.laneV-(t.totalVLanes+1)/2)*4;v+=X}const C=b,S=0,k=0;let _=`grid-column: ${g} / span ${t.length}; grid-row: ${m} / span 1; position: relative; width: 100%; height: 100%;`,M=0,T=0;if(t.wireId){const D=this.ctx.connections[t.wireId];if(D){const X=this.ctx.nodes[D.fromNodeId],me=this.ctx.nodes[D.toNodeId];if(X&&me){const Ce=X.x*2+1,Ae=me.x*2+1,Ke=X.y*2+2,Ft=me.y*2+2,Vr=m,Oa=Math.abs(Vr-Ke)<1,_b=Math.abs(Vr-Ft)<1,Mb=this.ctx.gridMetrics.rowOffsets.get(X.y)??16+X.y*96,Ib=this.ctx.gridMetrics.rowOffsets.get(me.y)??16+me.y*96,Tf=this.getAbsolutePortY(X,D.fromPort.toString(),!1),Df=this.getAbsolutePortY(me,D.toPort.toString(),!0),Ob=Tf!==void 0?Tf-Mb:-999,Eb=Df!==void 0?Df-Ib:-999,Pb=Math.abs(C-Ob)<10,Tb=Math.abs(C-Eb)<10,Db=X&&t.x===Ce+1&&Oa&&Pb,Lb=me&&t.x===Ae-1&&_b&&Tb;Db&&(M=0),Lb&&(T=0)}}}const P=(D,X)=>{if(D!==void 0)return X?D===31?8:0:D===-1?0:D<31?15+D*24:D===31?a!==void 0&&a>0?a+8:0:8},O=s===31,z=P(t.clipTopRem,O),V=P(t.clipBotRem,O),H=(D="")=>A`<div class="wire-line h" style="position: absolute; height: 2px; top: 0; transform: translateY(${b}px); --wire-color: ${p}; ${D}"></div>`,ge=()=>{let D="0",X="100%";return z!==void 0?(D=`${z}px`,V!==void 0?X=`${V-z}px`:X=`calc(100% - ${z}px)`):V!==void 0&&(X=`${V}px`),A`<div class="wire-line vertical" style="position: absolute; width: 2px; height: ${X}; left: calc(50% - 1px); top: ${D}; transform: translateX(${v}px); --wire-color: ${p};"></div>`},Pe=D=>A`<div class="wire-line h" style="position: absolute; height: 2px; top: 0; transform: translateY(${b}px); --wire-color: ${p}; left: calc(50% + ${v}px); width: calc(50% - ${v}px - ${D}px);"></div>`,ke=D=>A`<div class="wire-line h" style="position: absolute; height: 2px; top: 0; transform: translateY(${b}px); --wire-color: ${p}; left: ${D}px; width: calc(50% + ${v}px - ${D}px);"></div>`,At=()=>{let D="0",X=b;return z!==void 0&&(D=`${z}px`,X=b-z+2),A`<div class="wire-line vertical" style="position: absolute; width: 2px; height: ${X}px; left: calc(50% - 1px); top: ${D}; transform: translateX(${v}px); --wire-color: ${p};"></div>`},fi=()=>{let D=`calc(100% - ${b}px)`;return V!==void 0&&(D=`${V-b+3}px`),A`<div class="wire-line vertical" style="position: absolute; width: 2px; height: ${D}; left: calc(50% - 1px); top: ${b}px; transform: translateX(${v}px); --wire-color: ${p};"></div>`},He=(D,X)=>Math.min(D,7);let ce=A``;const it=D=>{if(d===void 0)return null;const X=d-f;if(Math.abs(X)<3)return null;const me=b,Ce=d-x,Ae=Math.min(me,Ce),Ke=Math.abs(me-Ce);return A`<div class="wire-line vertical jog" style="position: absolute; width: 2px; height: ${Ke}px; left: ${D?"0":"calc(100% - 2px)"}; top: ${Ae}px; --wire-color: ${p};"></div>`};if(t.type==="h")ce=H(`width: calc(100% - ${M+T}px); left: ${M}px;`);else if(t.type==="v")ce=ge();else if(t.type==="start"){const D=it(!1),X=(t.x-1)/2,me=this.ctx.gridMetrics.columnWidths.get(X)||272;let Ce=272;if(t.wireId){const Ae=this.ctx.connections[t.wireId];if(Ae){const Ke=this.ctx.nodes[Ae.fromNodeId];if(Ke){const Ft=this.ctx.gridMetrics.cells.get(`${Ke.x},${Ke.y}`);Ft&&(Ce=Ft.width)}}}if(me>Ce){const Ae=Ce/2;ce=A`${D}${H(`left: calc(50% + ${Ae}px); width: calc(50% - ${Ae}px);`)}`}else D?ce=D:ce=A``}else if(t.type==="end"){const D=it(!0),X=(t.x-1)/2,me=this.ctx.gridMetrics.columnWidths.get(X)||272;let Ce=272;if(t.wireId){const Ae=this.ctx.connections[t.wireId];if(Ae){const Ke=this.ctx.nodes[Ae.toNodeId];if(Ke){const Ft=this.ctx.gridMetrics.cells.get(`${Ke.x},${Ke.y}`);Ft&&(Ce=Ft.width)}}}if(me>Ce){const Ae=Ce/2;ce=A`${D}${H(`left: 0; width: calc(50% - ${Ae}px);`)}`}else D?ce=D:ce=A``}else if(t.type==="ctl"){const D=He(T);ce=A`${Pe(D)}${fi()}`}else if(t.type==="ctr"){const D=He(M);ce=A`${ke(D)}${fi()}`}else if(t.type==="cbl"){const D=He(T);ce=A`${Pe(D)}${At()}`}else if(t.type==="cbr"){const D=He(M);ce=A`${ke(D)}${At()}`}const ht=t.type==="start"||t.type==="end",te=ht?"pointer-events: none !important;":"";return A`
                <div class="wire-segment ${t.type} ${u?"selected":""}"
                     id="${t.id}"
                     data-wire-id="${t.wireId}"
                     data-jog="${S}"
                     data-wire-level="${C}"
                     data-port-level="${k}"
                     style="${_} ${te}"
                     @click=${D=>{ht||(D.stopPropagation(),this.ctx.onWireClick(t.wireId,D))}}
                     @dblclick=${D=>{ht||(D.stopPropagation(),this.ctx.onWireDblClick(t.wireId,D))}}
                >
                    ${ce}
                </div>
            `})}getAbsolutePortY(e,t,n){let o=-1;const r=ee.getNodeType(e.config.typeId),s=this.ctx.effectiveNodeTypes?.get(e.id);let a;if(s?(a=n?s.inputs:s.outputs,o=a.findIndex(p=>p.name===t)):(a=n?r?.inputs:r?.outputs,a&&Array.isArray(a)&&(o=a.findIndex(p=>p.name===t))),o===-1){if(a){const p=parseInt(t,10);!isNaN(p)&&p>=0&&p<a.length&&(o=p)}o===-1&&!isNaN(parseInt(t,10))&&(o=parseInt(t,10))}if(o===-1)return;const l=this.ctx.gridMetrics.rowOffsets.get(e.y);if(l===void 0)return;const c=this.ctx.gridMetrics.rows.get(e.y)||80,f=`${e.x},${e.y}`,h=this.ctx.gridMetrics.cells.get(f),d=h?h.height:80;let u=0;return c>d&&(u=(c-d)/2),e.config.typeId==="io.input"||e.config.typeId==="io.output"||e.config.typeId==="resolume.input"||e.config.typeId==="resolume.output"?l+u+20:l+u+yv(o)}}class yA{constructor(e){this.appController=e,this.popup=null,this.longEdit=null,Bi(this)}startCreation(e,t,n,o,r,s){const a=zo("node");this.longEdit=this.appController.beginLongEdit({apply:l=>{l.createNode(r,n,o,{id:a})},cancel:()=>{this.longEdit=null}}),this.popup={x:e,y:t,gridX:n,gridY:o,initialValue:r,nodeId:a,isNew:!0,connectionId:s}}updatePreview(e){if(!this.popup)return;let t=e,n={};!ee.getNodeType(e)&&e.includes(".")&&(t="core.subgraph",n={subgraphId:e});const o=r=>{if(this.popup.isNew?r.createNode(t,this.popup.gridX,this.popup.gridY,{id:this.popup.nodeId,...n}):r.setNodeConfig(this.popup.nodeId,{typeId:t,...n}),this.popup.connectionId){const s=this.popup.connectionId,a=this.appController.observableState.graph.inner.connections[s];if(a){const l=ee.getNodeType(e),c=l?.inputs?.[0]?.name||"in",f=l?.outputs?.[0]?.name||"out";r.deleteConnection(s),r.createConnection(a.fromNodeId,a.fromPort,this.popup.nodeId,c),r.createConnection(this.popup.nodeId,f,a.toNodeId,a.toPort)}}};this.longEdit?this.longEdit.applyAgain(o):this.longEdit=this.appController.beginLongEdit({apply:o,cancel:()=>{this.longEdit=null}})}commit(){this.longEdit&&(this.longEdit.accept&&this.longEdit.accept(),this.longEdit=null),this.popup=null}cancel(){this.longEdit&&(this.longEdit.cancel(),this.longEdit=null),this.popup=null}}class vA{constructor(e){this.host=e,this.isAdditive=!1}start(e){const t=this.host.element.getBoundingClientRect(),{scrollLeft:n,scrollTop:o}=this.host.getScrollState(),r=e.clientX-t.left+n,s=e.clientY-t.top+o;this.isAdditive=!!(e.shiftKey||e.ctrlKey||e.metaKey);let a="";new rn(e,this.host.element,{move:(l,c)=>{const{scrollLeft:f,scrollTop:h}=this.host.getScrollState(),d=l.clientX-t.left+f,u=l.clientY-t.top+h,p=Math.min(r,d),g=Math.min(s,u),m=Math.abs(d-r),b=Math.abs(u-s);this.host.setSelectionBox({x:p,y:g,w:m,h:b});const y=[];this.host.getNodes().forEach(C=>{const S=C.getBoundingClientRect(),k=S.left-t.left+f,_=S.top-t.top+h;if(p<k+S.width&&p+m>k&&g<_+S.height&&g+b>_){const M=C.dataset.id;M&&y.push(M)}}),y.sort();const v=y.join(",");v!==a&&(this.host.onSelectionChange(y,this.isAdditive),a=v)},accept:()=>{this.host.setSelectionBox(null)},cancel:()=>{this.host.setSelectionBox(null),this.host.onSelectionChange([],!1)}})}}class wA{constructor(e,t,n,o,r,s){this.host=e,this.appController=t,this.localController=n,this.runtimeManager=o,this.selectionManager=r,this.popupManager=s}handlePointerDown(e){this.host.closePopup(),this.runtimeManager.resumeAudio();const t=e.composedPath(),n=t.some(f=>f.tagName==="GRAPH-NODE"),o=t.some(f=>f.tagName==="GRAPH-CONNECTION"),r=t.some(f=>f.classList?.contains("wire-segment"));if(n||o||r)return;const s=t.find(f=>f.classList?.contains("region-box")),a=t.find(f=>f.classList?.contains("border-rail")),l=t.find(f=>f.classList?.contains("resize-handle")),c=(f,h)=>{const d=`region-${f}`;this.localController.observableState.selection.has(d)||(!h.shiftKey&&!h.metaKey&&!h.ctrlKey?this.localController.queueSelectPaths([d],!1):this.localController.queueSelectPaths([d],!0))};if(l||a){const f=l||a,h=f.dataset.nodeId,d=f.dataset.handle||f.dataset.rail,u=this.appController.observableState.graph.inner.nodes[h];if(!u)return;c(h,e);const p=ee.getNodeType(u.config.typeId),g=p?.getRegion?p.getRegion(u.config):{width:1,height:1,x:0,y:0},m=g.width,b=g.height,y=g.x||0,x=g.y||0,v=e.clientX,C=e.clientY;new rn(e,this.host.element,{move:S=>{const k=S.clientX-v,_=S.clientY-C,M=Math.round(k/96),T=Math.round(_/48);let P=m,O=b,z=y,V=x;if((d==="e"||d==="se")&&(P=Math.max(1,m+M)),d==="w"){const ge=m-1,Pe=-(u.x+y),ke=Math.min(Math.max(M,Pe),ge);P=m-ke,z=y+ke}if((d==="s"||d==="se")&&(O=Math.max(1,b+T)),d==="n"){const ge=b-1,Pe=-(u.y+x),ke=Math.min(Math.max(T,Pe),ge);O=b-ke,V=x+ke}const H={};P!==u.config.width&&(H.width=P),O!==u.config.height&&(H.height=O),z!==u.config.regionX&&(H.regionX=z),V!==u.config.regionY&&(H.regionY=V),Object.keys(H).length>0&&this.appController.setNodeConfig(h,H,{skipHistory:!0})},accept:()=>{const S=this.appController.observableState.graph.inner.nodes[h];if(S){const k={width:m,height:b,regionX:y,regionY:x},_={width:S.config.width,height:S.config.height,regionX:S.config.regionX||0,regionY:S.config.regionY||0};(_.width!==k.width||_.height!==k.height||_.regionX!==k.regionX||_.regionY!==k.regionY)&&this.appController.commitConfigHistory(h,k,_)}}});return}if(s){const f=s.dataset.regionNodeId,h=this.appController.observableState.graph.inner.nodes[f];if(!h)return;const d=ee.getNodeType(h.config.typeId),u=d?.getRegion?d.getRegion(h.config):{x:0,y:0},p=u.x||0,g=u.y||0,m=e.clientX,b=e.clientY,y={regionX:p,regionY:g};new rn(e,this.host.element,{move:x=>{const v=x.clientX-m,C=x.clientY-b,S=Math.round(v/96),k=Math.round(C/48),_=p+S,M=g+k;h.x+_<0||h.y+M<0||(_!==h.config.regionX||M!==h.config.regionY)&&this.appController.setNodeConfig(f,{regionX:_,regionY:M},{skipHistory:!0})},accept:()=>{const x=this.appController.observableState.graph.inner.nodes[f];if(x){const v={regionX:x.config.regionX||0,regionY:x.config.regionY||0};(v.regionX!==y.regionX||v.regionY!==y.regionY)&&this.appController.commitConfigHistory(f,y,v)}}});return}this.selectionManager.start(e)}handleDblClick(e){const t=e.composedPath(),n=t[0];if(n.classList.contains("cell")){if(n.classList.contains("node-cell")){const r=n.dataset.x,s=parseInt(n.dataset.y||"0");let a="util.hub",l=0;if(r==="output"?(a="io.output",l=20):r==="input"?(a="io.input",l=0):l=parseInt(r||"0"),Object.values(this.appController.observableState.graph.inner.nodes).some(b=>b.x===l&&b.y===s))return;const h=n.getBoundingClientRect(),d=this.host.getBoundingClientRect(),{scrollLeft:u,scrollTop:p}=this.host.getScrollState(),g=h.left-d.left+u,m=h.top-d.top+p-40;this.popupManager.startCreation(g,m,l,s,a)}return}const o=t.find(r=>r.nodeName==="GRAPH-NODE");if(o){const r=o.getAttribute("data-id")||o.dataset?.id;r&&this.handleNodeDeletion(r)}}handleNodeDeletion(e){const t=this.localController.observableState.lastGroupSelection;if(t&&t.has(e)){const o=Array.from(t).filter(r=>r.startsWith("node-"));this.appController.transaction(()=>{o.forEach(r=>this.appController.deleteNode(r))}),this.localController.setLastGroupSelection(null);return}const n=this.appController.observableState.graph.inner.nodes[e];if(n){const o=Object.values(this.appController.observableState.graph.inner.connections),r=ee.getNodeType(n.config.typeId),s=r?.inputs?.[0]?.name,a=r?.outputs?.[0]?.name;if(s&&a){const l=o.filter(f=>f.toNodeId===e&&f.toPort===s),c=o.filter(f=>f.fromNodeId===e&&f.fromPort===a);if(l.length===1&&c.length===1){const f=l[0],h=c[0];this.appController.transaction(d=>{d.deleteNode(e),d.createConnection(f.fromNodeId,f.fromPort,h.toNodeId,h.toPort)});return}}}this.appController.deleteNode(e)}}var xA=Object.defineProperty,SA=Object.getOwnPropertyDescriptor,$r=(i,e,t,n)=>{for(var o=n>1?void 0:n?SA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&xA(e,t,o),o};let Li=class extends ct{constructor(){super(),this.selectionBox=null,this.popupManager=new yA(j),this.selectionInteraction=new vA({element:this,getScrollState:()=>({scrollLeft:this.scrollLeft,scrollTop:this.scrollTop}),getNodes:()=>Array.from(this.shadowRoot?.querySelectorAll("graph-node")||[]),setSelectionBox:i=>{this.selectionBox=i},onSelectionChange:(i,e)=>{e?E.setQueuedSelection(i):E.queueSelectPaths(i,!1)}}),this.inputLogic=new wA({element:this,getScrollState:()=>({scrollLeft:this.scrollLeft,scrollTop:this.scrollTop}),getBoundingClientRect:()=>this.getBoundingClientRect(),closePopup:()=>{this.popupManager.commit()}},j,E,_e,this.selectionInteraction,this.popupManager),this.pendingWireInsert=null,this.catalog=new Sb(ee,()=>mi.files.map(i=>i.name)),this.clientWidth=0,this.regionSelectables=new Map,this.activeTool="select",this.ghostTarget=null,this._pointerMoveHandler=null,this._pointerUpHandler=null,this._keyDownHandler=null,this.disposers=[],this.connectionSelectables=new Map,this.resizeObserver=new ResizeObserver(i=>{for(const e of i)this.clientWidth=e.contentRect.width,this.updateViewport()}),un(()=>E.observableState.selection.keys(),()=>{this.pendingWireInsert&&!E.observableState.selection.has(this.pendingWireInsert.wireId)&&(this.pendingWireInsert=null),this.requestUpdate()})}handlePointerDown(i){this.pendingWireInsert=null,this.inputLogic.handlePointerDown(i)}handleDblClick(i){this.inputLogic.handleDblClick(i)}handleConnectionDelete(i){j.deleteConnection(i.detail.connectionId)}handleScroll(i){const e=i.target;this.scrollLeft=e.scrollLeft,this.scrollTop=e.scrollTop,this.updateViewport()}updateViewport(){E.setViewport(this.scrollLeft||0,this.scrollTop||0,this.clientWidth||this.offsetWidth,this.clientHeight||this.offsetHeight)}updated(i){super.updated(i),this.registerRegionSelectables()}registerRegionSelectables(){const i=j.observableState.graph.inner.nodes;for(const e of Object.values(i))if(ee.getNodeType(e.config.typeId)?.getRegion){const n=`region-${e.id}`;let o=this.regionSelectables.get(n);o||(o={path:n},this.regionSelectables.set(n,o)),E.observableState.queuedSelection.has(n)&&E.defineSelectable(o)}}addDisposer(i){this.disposers.push(i)}connectedCallback(){super.connectedCallback(),this.addDisposer(un(()=>E.observableState.inflightPortConnectionOperation,i=>{i?(requestAnimationFrame(()=>{const e=this.shadowRoot?.querySelector(`graph-node[data-id="${i.nodeId}"]`),t=this.shadowRoot?.querySelector("#ghost-wire-line");if(e&&t){const n=e.getBoundingClientRect(),o=this.getBoundingClientRect(),r=n.left-o.left+this.scrollLeft,s=n.top-o.top+this.scrollTop,a=this.getNodePortY(i.nodeId,i.port,i.type==="in");let l=r;i.type==="out"&&(l+=n.width);const c=s+a-8;t.setAttribute("x1",String(l)),t.setAttribute("y1",String(c)),t.setAttribute("x2",String(l)),t.setAttribute("y2",String(c))}}),this._pointerMoveHandler||(this._pointerMoveHandler=e=>{const t=this.shadowRoot?.querySelector("#ghost-wire-line");if(t){const n=this.getBoundingClientRect(),o=e.clientX-n.left+this.scrollLeft,r=e.clientY-n.top+this.scrollTop;t.setAttribute("x2",String(o)),t.setAttribute("y2",String(r))}},this.addEventListener("pointermove",this._pointerMoveHandler)),this._pointerUpHandler||(this._pointerUpHandler=e=>{E.setInflightPortConnectionOperation(null),this.ghostTarget=null},this.addEventListener("pointerup",this._pointerUpHandler)),this._keyDownHandler||(this._keyDownHandler=this.handleKeyDown.bind(this),window.addEventListener("keydown",this._keyDownHandler))):(this._pointerMoveHandler&&(this.removeEventListener("pointermove",this._pointerMoveHandler),this._pointerMoveHandler=null),this._pointerUpHandler&&(this.removeEventListener("pointerup",this._pointerUpHandler),this._pointerUpHandler=null),this.ghostTarget=null)},{fireImmediately:!0})),this._keyDownHandler||(this._keyDownHandler=this.handleKeyDown.bind(this),window.addEventListener("keydown",this._keyDownHandler)),this.addEventListener("pointerdown",this.handlePointerDown),this.addEventListener("dblclick",this.handleDblClick),this.addEventListener("connection-delete",this.handleConnectionDelete),this.addEventListener("scroll",this.handleScroll),this.resizeObserver.observe(this),this.clientWidth=this.offsetWidth,this.addEventListener("dragover",this.handleDragOver),this.addEventListener("drop",this.handleDrop)}disconnectedCallback(){super.disconnectedCallback(),this.disposers.forEach(i=>i()),this.disposers=[],this.removeEventListener("pointerdown",this.handlePointerDown),this.removeEventListener("dblclick",this.handleDblClick),this.removeEventListener("connection-delete",this.handleConnectionDelete),this.removeEventListener("scroll",this.handleScroll),this.removeEventListener("dragover",this.handleDragOver),this.removeEventListener("drop",this.handleDrop),this._keyDownHandler&&(window.removeEventListener("keydown",this._keyDownHandler),this._keyDownHandler=null),this.resizeObserver.disconnect()}handleDragOver(i){i.preventDefault(),i.dataTransfer.dropEffect="copy"}handleDrop(i){i.preventDefault();const t=i.composedPath().find(n=>n.classList?.contains("node-cell"));if(t){const n=parseInt(t.dataset.x||"0"),o=parseInt(t.dataset.y||"0"),r=i.dataTransfer?.getData("application/json");if(r)try{const s=JSON.parse(r);if(s.type==="resolume:parameter"){let a="resolume.input",l=n;const c=t.dataset.x;c==="output"?(a="resolume.output",l=20):(l=parseInt(c||"0"),l===0&&(a="resolume.input"));const f=j.createNode(a,l,o,{path:s.path});E.queueSelectPaths([f.id])}}catch(s){console.error(s)}}}handleKeyDown(i){if(!this.popupManager.popup&&!lx(i)){if(i.key==="a"&&!i.ctrlKey&&!i.metaKey&&!i.altKey&&!i.shiftKey){E.toggleRegionExpansion(),i.preventDefault();return}if(this.pendingWireInsert&&i.key.length===1&&/[a-zA-Z0-9]/.test(i.key)&&!i.ctrlKey&&!i.metaKey&&!i.altKey){const{gridX:e,gridY:t}=this.pendingWireInsert;if(e!==-1){if(!j.observableState.graph.inner.connections[this.pendingWireInsert.wireId]){this.pendingWireInsert=null;return}const o=i.key,r=this.pendingWireInsert.wireId;this.popupManager.startCreation(this.pendingWireInsert.x,this.pendingWireInsert.y-40,e,t,o,r),this.pendingWireInsert=null}}}}renderPendingWirePip(){if(!this.pendingWireInsert)return null;const{x:i,y:e,wireId:t}=this.pendingWireInsert;if(!E.observableState.selection.has(t))return null;let o="var(--accent-color)";const s=j.observableState.graph.inner.connections[t];s&&(o=qs(`${s.fromPort}-${s.toPort}`));const a=this.pendingWireInsert.orientation||"vertical";return A`<div class="wire-insert-pip ${a}"
                     style="left: ${i}px; top: ${e}px; --pip-color: ${o};"></div>`}onWireClick(i,e){E.queueSelectPaths([i],e.shiftKey||e.ctrlKey||e.metaKey);const t=this.getBoundingClientRect(),n=e.clientX-t.left+this.scrollLeft,o=e.clientY-t.top+this.scrollTop,r=this.shadowRoot?.querySelectorAll(".cell");let s=1/0,a=n,l=o,c=-1,f=-1;r?.forEach(g=>{const m=g.getBoundingClientRect(),b=m.left-t.left+this.scrollLeft+m.width/2,y=m.top-t.top+this.scrollTop+m.height/2,x=Math.sqrt(Math.pow(n-b,2)+Math.pow(o-y,2));if(x<s){s=x,a=b,l=y;const v=g.dataset;v.x!==void 0&&v.y!==void 0&&(c=v.x==="output"?20:parseInt(v.x),f=parseInt(v.y))}});const d=e.target.getBoundingClientRect(),p=d.width>d.height?"vertical":"horizontal";this.pendingWireInsert={x:a,y:l,gridX:c,gridY:f,wireId:i,orientation:p},this.requestUpdate()}getRowHeight(i){return E.observableState?.gridMetrics?E.observableState.gridMetrics.rows.get(i)??80:80}getColWidth(i){return E.observableState?.gridMetrics?E.observableState.gridMetrics.columnWidths.get(i)??80:80}getNodePortY(i,e,t){const n=j.observableState.graph.inner.nodes[i];if(!n)return 40;const o=ee.getNodeType(n.config.typeId),r=E.observableState.effectiveNodeTypes.get(i);let s=t?o?.inputs||[]:o?.outputs||[];r&&(s=t?r.inputs:r.outputs);const a=s.findIndex(l=>l.name===e);return a===-1?40:32+a*24+12}getConnectionSelectable(i){return this.connectionSelectables.has(i)||this.connectionSelectables.set(i,{path:i,renderInspectorContent:()=>this.renderConnectionInspector(i)}),this.connectionSelectables.get(i)}renderConnectionInspector(i){const e=j.observableState.graph.inner.connections[i];if(e)return A`
              <h3>Connection</h3>
              <div class="field">
                  <label>From Port:</label>
                  <input
                      data-testid="from-port-input"
                      type="text"
                      .value=${e.fromPort.toString()}
                      @input=${t=>{const n=t.target;j.setConnectionPorts(e.id,{fromPort:n.value})}}
                  />
              </div>
              <div class="field">
                  <label>To Port:</label>
                  <input
                      data-testid="to-port-input"
                      type="text"
                      .value=${e.toPort.toString()}
                      @input=${t=>{const n=t.target;j.setConnectionPorts(e.id,{toPort:n.value})}}
                  />
              </div>
          `}renderGridCells(){const{nodes:i}=j.observableState.graph.inner,e=[],{boundingBox:t}=E.observableState.gridMetrics,n=t.width,o=t.height,r=Math.max(o+3,12),s=Math.max(n+3,8);for(let a=0;a<r;a++){const l=this.getRowHeight(a);e.push(A`<div class="cell node-cell" data-x="input" data-y="${a}" style="grid-column: 1; grid-row: ${2*a+2}; height: ${l}px;"></div>`),e.push(A`<div class="cell gap-cell gap-h" data-x="input" style="grid-column: 1; grid-row: ${2*a+3};"></div>`)}for(let a=0;a<=s;a++){const l=2*a+3;for(let c=0;c<r;c++){const f=2*c+2,h=this.getRowHeight(c),d=this.getColWidth(a),u=a===s,p=u?"output":a.toString();e.push(A`<div class="cell node-cell" data-x="${p}" data-y="${c}" style="grid-column: ${l}; grid-row: ${f}; height: ${h}px; width: ${d}px;"></div>`);const g=u?"output":void 0,m=h>0?16:0,b=m>0?"":"display: none;";e.push(A`<div class="cell gap-cell gap-h" data-x="${g}" style="grid-column: ${l}; grid-row: ${f+1}; width: ${d}px; height: ${m}px; overflow: hidden; ${b}"></div>`);let y=16;a>0&&(y=this.getColWidth(a-1)>0?16:0);const x=y>0?"":"display: none;";e.push(A`<div class="cell gap-cell gap-v" style="grid-column: ${l-1}; grid-row: ${f}; height: ${h}px; width: ${y}px; overflow: hidden; ${x}"></div>`);const v=y>0&&m>0?"":"display: none;";e.push(A`<div class="cell gap-cell gap-c" style="grid-column: ${l-1}; grid-row: ${f+1}; width: ${y}px; height: ${m}px; overflow: hidden; ${v}"></div>`)}}return e}renderGhostWire(){const i=E.observableState.inflightPortConnectionOperation;return A`
        <svg id="ghost-wire-svg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; overflow: visible; display: ${i?"block":"none"};">
            <line id="ghost-wire-line" x1="0" y1="0" x2="0" y2="0" stroke="rgba(255, 255, 255, 0.5)" stroke-width="2" stroke-dasharray="4" />
        </svg>
    `}render(){const{nodes:i,connections:e}=j.observableState.graph.inner;Object.values(e).forEach(u=>{E.defineSelectable({path:u.id,renderInspectorContent:()=>A`
                <h3>Connection</h3>
                <div class="field">
                    <label>From Port:</label>
                    <input
                        type="text"
                        .value=${u.fromPort.toString()}
                        @input=${p=>{const g=p.target;j.setConnectionPorts(u.id,{fromPort:g.value})}}
                    />
                </div>
                <div class="field">
                    <label>To Port:</label>
                    <input
                        type="text"
                        .value=${u.toPort.toString()}
                        @input=${p=>{const g=p.target;j.setConnectionPorts(u.id,{toPort:g.value})}}
                    />
                </div>
            `})});let t=0;for(const u of Object.values(i)){if(u.config.typeId==="io.output"||u.config.typeId==="resolume.output")continue;let p=u.x;const g=ee.getNodeType(u.config.typeId);if(g?.getRegion){const m=g.getRegion(u.config);m&&(p=u.x+m.width-1)}p>t&&(t=p)}const n=Math.max(t+ap,sp),o=2*n+3,r="minmax(80px, auto)",s="var(--grid-gap, 16px)",a=[];a.push(`[input] ${r}`),a.push(`[gap-start] ${s}`);for(let u=0;u<n;u++){const p=this.getColWidth(u),g=p>0?16:0;a.push(`[node] ${p}px`),a.push(`[gap] ${g}px`)}a.push("[output] minmax(80px, auto)");const l=a.join(" "),c=[];c.push("[gap-top] var(--grid-gap, 16px)");let f=0;for(const u of Object.values(i)){let p=u.y;const g=ee.getNodeType(u.config.typeId);if(g?.getRegion){const m=g.getRegion(u.config);m&&(p=u.y+m.height-1)}p>f&&(f=p)}const h=Math.max(12,f+1);for(let u=0;u<h;u++){const p=this.getRowHeight(u),g=p>0?16:0;c.push(`[node] minmax(${p}px, auto)`),c.push(`[gap] ${g}px`)}const d=c.join(" ");return A`
      ${this.renderGhostWire()}
      ${this.renderPendingWirePip()}
      ${this.selectionBox?A`
        <div class="selection-box" style="left: ${this.selectionBox.x}px; top: ${this.selectionBox.y}px; width: ${this.selectionBox.w}px; height: ${this.selectionBox.h}px;"></div>
      `:""}

      ${this.popupManager.popup?A`
        <div class="popup-container" style="left: ${this.popupManager.popup.x}px; top: ${this.popupManager.popup.y}px;">
            <smart-input
                .catalog=${this.catalog}
                .value=${this.popupManager.popup.initialValue}
                .autofocus=${!0}
                @commit=${u=>{this.popupManager.updatePreview(u.detail),this.popupManager.commit()}}
                @preview-type=${u=>this.popupManager.updatePreview(u.detail)}
                @cancel=${()=>this.popupManager.cancel()}
            ></smart-input>
        </div>
      `:""}

      <div class="grid-container" tabindex="-1" style="grid-template-columns: ${l}; grid-template-rows: ${d};">
        ${this.renderGridCells()}


    ${Object.values(e).map(u=>{const p=this.getConnectionSelectable(u.id);return E.defineSelectable(p),""})}

        ${(()=>{const u={nodes:i,connections:e,gridMetrics:E.observableState.gridMetrics,inferredNodeTypes:E.observableState.inferredNodeTypes,effectiveNodeTypes:E.observableState.effectiveNodeTypes,incomingConnections:j.observableState.graph.auxiliary.incomingConnections,selection:E.observableState.selection,onWireClick:this.onWireClick.bind(this),onWireDblClick:(m,b)=>{this.pendingWireInsert&&this.pendingWireInsert.wireId===m&&(this.pendingWireInsert=null),this.dispatchEvent(new CustomEvent("connection-delete",{detail:{connectionId:m}}))}},p=new bA(u),g=E.observableState.wireLayout.segments||[];return p.render(g)})()}




    ${this.renderRegions()}
    ${Vc(Object.values(i),u=>u.id,u=>this.renderGraphNode(u,o))}
    ${this.renderGhosts(o)}
    ${this.renderDragPreview(o)}
      </div>
    `}renderDragPreview(i){const e=E.observableState.dragPreview;if(!e)return"";const t=2*e.x+3,n=2*e.y+2;return A`
      <div class="drag-preview" style="grid-column: ${t}; grid-row: ${n}; min-height: 80px;"></div>
    `}renderGhosts(i){const{selection:e,isDraggingSelection:t,altKeyPressed:n}=E.observableState;if(!t||!n)return"";const o=[];for(const[r]of e){const s=j.observableState.graph.inner.nodes[r];s&&(E.observableState.gridMetrics.cells.get(`${s.x},${s.y}`)?.isHidden||o.push(s))}return Vc(o,r=>r.id+"-ghost",r=>{const s=j.observableState.graph.auxiliary.incomingConnections.get(r.id)||[];let a=0,l;r.config.typeId==="io.input"||r.config.typeId==="resolume.input"?(a=1,l="input"):r.config.typeId==="io.output"||r.config.typeId==="resolume.output"?(a=i,l="output"):a=2*r.x+3;const c=2*r.y+2,f=`${a} / span 1`,h=`${c}`;return A`
        <graph-node
          .node=${r}
          .incomingConnections=${s}
          .isQueued=${!1}
          .x=${r.x}
          .y=${r.y}
          .gridColumn=${f}
          .gridRow=${h}
          .parentZIndex=${90}
          data-io-type=${l||""}
          data-id=${r.id+"-ghost"}
          style="grid-column: ${f}; grid-row: ${h}; opacity: 0.5; filter: grayscale(1); pointer-events: none;"
        ></graph-node>
      `})}renderRegions(){const{nodes:i}=j.observableState.graph.inner,e=[],t=E.observableState.gridMetrics.regions;for(const n of Object.values(i)){const o=t.get(n.id);if(o){const r=o.x,s=o.y,a=o.width,l=o.height,c=2*r+3,f=2*s+2;let h=1;for(let v=a-1;v>=0;v--)if(this.getColWidth(r+v)>0){h=v+1;break}const d=Math.max(1,2*h-1);let u=1;for(let v=l-1;v>=0;v--)if(this.getRowHeight(s+v)>0){u=v+1;break}const p=Math.max(1,2*u-1),g=`region-${n.id}`,m=E.observableState.selection.has(g);let b=!1;if(a>1){for(let v=r;v<r+a;v++)if(v!==n.x&&this.getColWidth(v)>0){b=!0;break}}if(!b&&l>1){for(let v=s;v<s+l;v++)if(v!==n.y&&this.getRowHeight(v)>0){b=!0;break}}if(!b)continue;let y=qs(n.config.name||n.config.typeId);const x=o.isCollapsed;x&&(y="var(--grid-line-color)"),e.push(A`
            <div class="region-box ${m?"selected":""} ${x?"collapsed":""}"
                 data-region-node-id="${n.id}"
                 style="
              grid-column: ${c} / span ${d};
              grid-row: ${f} / span ${p};
              background-color: ${m?y+"22":y+"11"};
              --region-color: ${y};
            ">
              <!-- Render Rails and Handles ONLY if not collapsed -->
              ${x?A`
                 <!-- Collapsed Region Border (Static) -->
                 <div style="position: absolute; inset: 0; pointer-events: none; border: 2px dashed ${y}; border-radius: 8px;"></div>
              `:A`
                <div class="border-rail n" data-rail="n" data-node-id="${n.id}" style="border-top: ${m?"4px":"2px"} dashed ${y};"></div>
                <div class="border-rail s" data-rail="s" data-node-id="${n.id}" style="border-bottom: ${m?"4px":"2px"} dashed ${y};"></div>
                <div class="border-rail w" data-rail="w" data-node-id="${n.id}" style="border-left: ${m?"4px":"2px"} dashed ${y};"></div>
                <div class="border-rail e" data-rail="e" data-node-id="${n.id}" style="border-right: ${m?"4px":"2px"} dashed ${y};"></div>

                <div class="resize-handle e" data-handle="e" data-node-id="${n.id}"></div>
                <div class="resize-handle s" data-handle="s" data-node-id="${n.id}"></div>
                <div class="resize-handle se" data-handle="se" data-node-id="${n.id}"></div>
              `}
            </div>
          `)}}return e}renderGraphNode(i,e){const t=E.observableState.queuedSelection.has(i.id),n=j.observableState.graph.auxiliary.incomingConnections.get(i.id)||[];let o=0,r;i.config.typeId==="io.input"||i.config.typeId==="resolume.input"?(o=1,r="input"):i.config.typeId==="io.output"||i.config.typeId==="resolume.output"?(o=e,r="output"):o=2*i.x+3;const s=2*i.y+2,a=1,l=E.observableState.selection.has(i.id),f=E.observableState.gridMetrics.cells.get(`${i.x},${i.y}`)?.isHidden;return A`
            <graph-node
              .node=${i}
              .incomingConnections=${n}
              .isQueued=${t}
              .x=${i.x}
              .y=${i.y}
              .gridColumn=${`${o} / span ${a}`}
              .gridRow=${`${s}`}
              .parentZIndex=${l?110:100}
              data-io-type=${r||""}
              data-id=${i.id}
              ?hidden=${f}
            ></graph-node>
          `}};Li.styles=[...Qt,Se`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      user-select: none;
      background-color: var(--bg-color);
    }

    .grid-container {
      display: grid;
      /*
        Col 1: Input
        Col 2: Gap
        Col 3: Node 1
        Col 4: Gap
        ...
        Col 2*12+1: Node 12
        Col 2*12+2: Gap
        Col 2*12+3: Output
      */
      grid-template-columns:
        [input] minmax(80px, auto)
        [gap-start] var(--grid-gap, 16px)
        repeat(12, [node] auto [gap] minmax(0, auto))
        [output] minmax(80px, auto);

      grid-template-rows:
        [gap-top] var(--grid-gap, 16px)
        repeat(12, [node] minmax(0, auto) [gap] var(--grid-gap, 16px));

      /* Revert: Don't force 24px auto-rows */
      /* grid-auto-rows: 24px; */

      min-width: 100%;
      justify-content: start;
      align-content: start;
      /* min-height: 100%; Removed to prevent row stretching */
      gap: 0;
      position: relative;
      align-content: start;
      justify-content: start; /* CRITICAL: Prevent auto tracks from expanding to fill width */
      outline: none;
    }

    .selection-box {
      position: absolute;
      background-color: var(--selection-color);
      border: 1px solid var(--selection-border);
      pointer-events: none;
      z-index: 200;
    }

    .cell {
      /* background-color: rgba(255, 255, 255, 0.05); */
      border-radius: 4px;
      pointer-events: auto;
      box-sizing: border-box;
    }

    /* Region Visualization */
    .region-box {
      border-radius: 8px;
      z-index: 5;
      opacity: 0.8;
      margin: -4px; /* Expand slightly to encompass nodes */
      position: relative;
      cursor: move;
    }

    .region-box.selected {
      pointer-events: auto; /* Block clicks only if selected (for moving) */
    }

    .region-box:not(.selected) {
      pointer-events: none;
    }

    /* Collapsed Region (Read-Only) */
    .region-box.collapsed {
      pointer-events: none !important;
      cursor: default;
    }

    /* Resize Rails */
    .border-rail {
      position: absolute;
      pointer-events: auto;
    }

    .border-rail.n { top: 0; left: 0; right: 0; height: 6px; cursor: row-resize; }
    .border-rail.s { bottom: 0; left: 0; right: 0; height: 6px; cursor: row-resize; }
    .border-rail.w { top: 0; bottom: 0; left: 0; width: 6px; cursor: col-resize; }
    .border-rail.e { top: 0; bottom: 0; right: 0; width: 6px; cursor: col-resize; }

    /* Resize Handles (Corners) */
    .resize-handle {
      position: absolute;
      pointer-events: auto;
      z-index: 10;
    }

    .resize-handle.e { top: 50%; right: -8px; transform: translateY(-50%); width: 16px; height: 32px; cursor: col-resize; }
    .resize-handle.s { left: 50%; bottom: -8px; transform: translateX(-50%); height: 16px; width: 32px; cursor: row-resize; }
    .resize-handle.se { right: -8px; bottom: -8px; width: 24px; height: 24px; cursor: nwse-resize; z-index: 11; }

    .cell.node-cell {
      /* background-color: rgba(255, 255, 255, 0.05); */
      /* border: 1px dashed rgba(255, 255, 255, 0.15); */
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Force centering override */
    .cell.node-cell > graph-node {
        align-self: center;
        justify-self: center; /* For Grid situations */
        margin: auto;
    }

    .cell.gap-cell {
      position: relative;
    }

    .cell.gap-h::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      border-bottom: 1px dashed var(--grid-line-color);
    }

    .cell.gap-v::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      border-left: 1px dashed var(--grid-line-color);
    }

    .wire-segment {
        position: absolute;
        inset: 0;
        pointer-events: none !important;
        z-index: 10;
        margin: auto;
        cursor: pointer;
    }

    /* Sticky IO Columns */
    .cell[data-x="input"],
    .cell[data-x="output"] {
      position: sticky;
      z-index: 90; /* Above wires (10), below nodes (100) */
      background-color: var(--bg-color); /* Opaque background */
      /* Ensure full coverage of the track */
      width: 100%;
      height: 100%;
      overflow: visible; /* Allow pseudo-elements to extend */
    }

    /* Extend Input Column to the right (half gap) */
    .cell[data-x="input"]::before {
      content: '';
      position: absolute;
      top: 0;
      right: -8px; /* extend 8px into the 16px gap */
      bottom: 0;
      width: 8px;
      background-color: var(--bg-color);
      border-right: 1px dashed rgba(255,255,255,0.1);
    }

    /* Extend Output Column to the left (half gap) */
    .cell[data-x="output"]::before {
      content: '';
      position: absolute;
      top: 0;
      left: -8px; /* extend 8px into the 16px gap */
      bottom: 0;
      width: 8px;
      background-color: var(--bg-color);
      border-left: 1px dashed rgba(255,255,255,0.1);
    }

    /* Remove old borders */
    .cell[data-x="input"] {
      left: 0;
    }

    .cell[data-x="output"] {
      right: 0;
    }

    /* Sticky Nodes */
    graph-node[data-io-type="input"],
    graph-node[data-io-type="output"] {
      position: sticky;
      z-index: 110; /* Above regular nodes (100) and cells (90) */
    }

    graph-node[data-io-type="input"] {
      left: 4px; /* Slight offset from edge */
    }

    graph-node[data-io-type="output"] {
      right: 4px;
    }

    /* Separators already handled by ::before extensions above */



    .wire-segment::after {
        content: '';
        position: absolute;
        background: transparent; /* Debug: cyan to see hitboxes if needed */
        inset: -8px; /* 16px extra girth, total 18px+ */
        z-index: 11;
        cursor: pointer;
    }

    .wire-hitbox {
        /* Legacy / Unused? */
        position: absolute;
        inset: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 20;
    }

    .wire-line {
        position: relative; /* Relative to hitbox */
        background-color: var(--wire-color, #888);
    }

    .wire-segment.selected {
        z-index: 20;
    }

    /* Fatter wire rendering for selected state by manipulating children or SVG if present.
       Since we use border/background logic in wire-renderer:
       The wire itself is the Div or its children.
    */
    .wire-segment.selected > .wire-line {
         /* Lazy Fatter Strategy: Negative margin + Border */
         /* This effectively expands the box by 1px on all sides without layout shift */
         margin: -1px;
         border: 1px solid var(--wire-color);
         background-color: var(--wire-color) !important;
         z-index: 21;
    }

    /* Old Style Insert Marker: Two Slanted Lines (//) */
    .wire-insert-pip {
        position: absolute;
        width: 14px;
        height: 14px;
        background: transparent;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1000;
    }

    .wire-insert-pip::before,
    .wire-insert-pip::after {
        content: '';
        position: absolute;
        top: -2px; /* Extend slightly beyond wire */
        bottom: -2px;
        width: 2px;
        background-color: var(--pip-color, var(--accent-color));
        transform: skewX(-20deg);
    }

    .wire-insert-pip::before {
        left: 3px;
    }

    .wire-insert-pip::after {
        right: 3px;
    }

    /* Orientation adjustment if needed */
    .wire-insert-pip.vertical {
        /* On vertical wire, we might want lines to cross horizontally?
           "//" usually means cut perpendicular.
           If wire is vertical | , cut should be = or // rotated?
           Let's stick to standard // orientation regardless, strictly visual marker.
        */
    }
    .wire-hitbox[style*="width: 6px"] .wire-line {
        width: 1px;
        height: 100%;
    }

    /* Horizontal Line in Hitbox */
    .wire-hitbox[style*="height: 6px"] .wire-line {
        width: 100%;
        height: 1px;
    }

    /* Vertical Line in Hitbox */
    .wire-hitbox[style*="width: 6px"] .wire-line {
        width: 2px;
        height: 100%;
    }
    .wire-hitbox[style*="width: 6px"] .wire-line {
        width: 1px;
        height: 100%;
    }

    .wire-segment.h .wire-line {
        height: 1px;
        width: 100%;
        top: 50%;
    }

    .wire-segment.v .wire-line {
        width: 1px;
        height: 100%;
        left: 50%;
    }

    /* Corners - simple approach: Two lines? Or SVG inside div?
       User said "DO NOT construct an SVG to connect up paths", but using a static small SVG icon for a corner is standard?
       Or use borders.
    */
    .wire-corner {
        width: 50%;
        height: 50%;
        border: 1px solid var(--wire-color, #888);
        position: absolute;
        box-sizing: border-box;
    }
    /* TR: Bottom-Left Border? No.
       TR goes from Left (Horizontal) to Bottom (Vertical).
       So it occupies bottom-left quadrant?
       Wait, typical corner TR:
       Right and Top.
       My types: CornerTR meant "top-right of the L"?
       If coming from Left -> Down. That's a "7".
       Visual center is pivot.
       Line from Left-Center to Center.
       Line from Center to Bottom-Center.

       Let's just use two vars/divs for corners if pure DOM.
    */

    .wire-segment.tr .wire-line.h { width: 50%; left: 0; top: 50%; }
    .wire-segment.tr .wire-line.v { height: 50%; left: 50%; top: 50%; }

    .wire-segment.tl .wire-line.h { width: 50%; right: 0; top: 50%; }
    .wire-segment.tl .wire-line.v { height: 50%; left: 50%; top: 50%; }

    .wire-segment.br .wire-line.h { width: 50%; left: 0; top: 50%; }
    .wire-segment.br .wire-line.v { height: 50%; left: 50%; bottom: 50%; }

    .wire-segment.bl .wire-line.h { width: 50%; right: 0; top: 50%; }
    .wire-segment.bl .wire-line.v { height: 50%; left: 50%; bottom: 50%; }

    .cell.gap-c::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
    }

    .cell.gap-c::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      border-left: 1px dashed rgba(255, 255, 255, 0.15);
    }

    /* Hit area for easier clicking */
    /* Hit area for easier clicking */
    /* Hit area attached to the visible lines themselves */
    .wire-line {
        pointer-events: auto !important;
        cursor: pointer;
    }

    .drag-preview {
      /* Slanted hashed pattern */
      background-image: repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent 3px,
        var(--selection-color, rgba(255, 69, 0, 0.1)) 3px,
        var(--selection-color, rgba(255, 69, 0, 0.1)) 4px
      );
      border-radius: 8px;
      pointer-events: none;
      z-index: 0;
      opacity: 0.8;
      /* Ensure it fills the grid cell */
      width: 100%;
      height: 100%;
    }

    .wire-line::after {
      content: '';
      position: absolute;
      inset: -8px; /* Hitbox extrusion */
      pointer-events: auto !important;
      z-index: 20;
    }

    .popup-container {
        position: absolute;
        z-index: 1000;
        background: white;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
  `];$r([nt()],Li.prototype,"selectionBox",2);$r([nt()],Li.prototype,"pendingWireInsert",2);$r([U({attribute:!1})],Li.prototype,"clientWidth",2);$r([U({type:String})],Li.prototype,"activeTool",2);Li=$r([Ee("graph-grid")],Li);var kA=Object.defineProperty,CA=Object.getOwnPropertyDescriptor,ci=(i,e,t,n)=>{for(var o=n>1?void 0:n?CA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&kA(e,t,o),o};let gn=class extends Dt{constructor(){super(...arguments),this.label="",this.value="",this.type="text",this.placeholder=""}handleInput(i){const e=i.target;this.value=e.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return A`
      ${this.label?A`<label>${this.label}</label>`:""}
      <input
        .type=${this.type}
        .value=${this.value}
        .placeholder=${this.placeholder}
        .min=${this.min?.toString()||""}
        .max=${this.max?.toString()||""}
        .step=${this.step?.toString()||""}
        @input=${this.handleInput}
      />
    `}};gn.styles=[...Qt,Se`
      :host {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }

      label {
        font-size: 0.8em;
        color: var(--text-muted);
      }

      input {
        background-color: var(--input-bg);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        padding: 6px;
        border-radius: 4px;
        font-family: inherit;
        font-size: 1em;
        width: 100%;
        box-sizing: border-box;
      }

      input:focus {
        outline: none;
        border-color: var(--accent-color);
      }
    `];ci([U({type:String})],gn.prototype,"label",2);ci([U({type:String})],gn.prototype,"value",2);ci([U({type:String})],gn.prototype,"type",2);ci([U({type:String})],gn.prototype,"placeholder",2);ci([U({type:Number})],gn.prototype,"min",2);ci([U({type:Number})],gn.prototype,"max",2);ci([U({type:Number})],gn.prototype,"step",2);gn=ci([Ee("ui-input")],gn);var AA=Object.getOwnPropertyDescriptor,_A=(i,e,t,n)=>{for(var o=n>1?void 0:n?AA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(o)||o);return o};let Fc=class extends ct{render(){const i=E.observableState.selection,e=i.size>0;return A`
      <div class="header">
        <ui-button
          id="region-toggle-btn"
          icon=${E.observableState.localSettings.areRegionsExpanded?"la-compress":"la-expand"}
          @click=${()=>E.toggleRegionExpansion()}
          title=${E.observableState.localSettings.areRegionsExpanded?"Collapse Auto Regions":"Expand Auto Regions"}
        ></ui-button>
        <ui-button
          id="undo-btn"
          icon="la-undo"
          ?disabled=${!j.canUndo}
          @click=${()=>j.undo()}
        ></ui-button>
        <ui-button
          id="redo-btn"
          icon="la-redo"
          ?disabled=${!j.canRedo}
          @click=${()=>j.redo()}
        ></ui-button>
      </div>
      <div class="content">
        ${e?i.size>1?A`<div style="color: #ccc; text-align: center; margin-top: 20px;">${i.size} nodes selected</div>`:Array.from(i.values()).map(t=>t.renderInspectorContent?t.renderInspectorContent():""):A`
          <div style="color: #666; text-align: center; margin-top: 50px;">
            Select a node to inspect
          </div>
        `}
      </div>
    `}};Fc.styles=[...Qt,Se`
    :host {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: calc(var(--node-content-width) + 40px); /* Content + 2*20px padding */
      max-height: 80vh;
      background-color: var(--panel-bg);
      color: var(--text-color);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      z-index: 255;
    }

    .header {
      padding: 10px;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      background-color: var(--panel-header-bg);
      border-radius: 8px 8px 0 0;
    }

    .content {
      padding: 20px;
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .field {
      margin-bottom: 0;
    }
  `];Fc=_A([Ee("inspector-popup")],Fc);var MA=Object.getOwnPropertyDescriptor,IA=(i,e,t,n)=>{for(var o=n>1?void 0:n?MA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(o)||o);return o};let zc=class extends ct{render(){return A`
      <graph-grid></graph-grid>
      <inspector-popup></inspector-popup>
    `}};zc.styles=Se`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      position: relative;
      user-select: none;
    }

    graph-grid {
      width: 100%;
      height: 100%;
    }
  `;zc=IA([Ee("graph-editor")],zc);const Xd=6,Jd=1,OA=2.5,ps=600,ut=5,Wi=5,Qd=5;class EA{constructor(e,t){this.rollingWaveformBuffer=null,this.externalClockSample=null,this.stabilizerSample=null,this.inferenceSample=null,this.latestPhase=0,this.latestBpm=0,this.latestMagnitude=0,this.lastPredictionTime=0,this.phaseHistory=[],this.bpmHistory=[],this.bestTrajPhaseHistory=[],this.externalClockHistory=[],this.lastPhase=0,this.lastBarPhase=0,this.phaseMarkPassTime=-1,this.barMarkPassTime=[-1,-1,-1,-1],this.lastBestTrajectoryId=-1,this.trajectorySwitchTime=-1,this.lastBestTrajectoryPhase=0,this.trajectoryMarkPassTime=-1,this.bpmGraphPrevBpmCenter=120,this.canvases=e,this.audioContext=t}get bpmGraphCenterBpm(){return this.bpmGraphPrevBpmCenter}get hasAudioContext(){return!!this.audioContext}setAudioContext(e){this.audioContext=e}updateExternalClock(e){this.externalClockSample=e}updateStabilizer(e){this.stabilizerSample=e}updateInference(e){this.inferenceSample=e,this.latestPhase=e.phase,this.latestBpm=e.bpm,this.latestMagnitude=e.phaseMagnitude,this.lastPredictionTime=e.inputTime}updateRollingWaveform(e){this.rollingWaveformBuffer=e}addExternalClockHistory(e){const t=this.externalClockHistory.at(-1);let n=e.phase,o=e.bpm;if(e.phase===void 0&&t){const s=(e.timestamp-t.timestamp)*t.bpm/60*2*Math.PI;n=t.phase+s}e.bpm===void 0&&t&&(o=t.bpm),n??=0,o??=120,this.externalClockHistory.push({...e,bpm:o,phase:n}),this.externalClockHistory.length>ps&&this.externalClockHistory.shift()}updateVisualizations(e,t,n){if(!this.audioContext)return;this.canvases.mainWaveformCanvas&&this.rollingWaveformBuffer&&this.drawWaveform(this.canvases.mainWaveformCanvas.getContext("2d"),this.rollingWaveformBuffer,"#ff4500");const o=this.inferenceSample?.odfWindow;this.canvases.odfCanvas&&o&&this.drawOdf(this.canvases.odfCanvas.getContext("2d"),o);const r=this.inferenceSample?.specWindow;this.canvases.specCanvas&&r&&this.drawSpectrogram(this.canvases.specCanvas.getContext("2d"),r);const s=this.audioContext.currentTime,a=s-this.lastPredictionTime;if(this.latestBpm>0){const f=60/this.latestBpm,h=a/f*2*Math.PI;let d=this.latestPhase+h;d=Math.atan2(Math.sin(d),Math.cos(d)),this.lastPhase>0&&d<=0&&(this.phaseMarkPassTime=s),this.lastPhase=d,this.phaseHistory.push({value:d,timestamp:s}),this.phaseHistory.length>ps&&this.phaseHistory.shift(),this.canvases.phaseClockCanvas&&this.drawRawPhaseClock(d,this.latestMagnitude,this.phaseHistory.map(u=>u.value),s)}const l=this.stabilizerSample?.trajectories??[],c=this.stabilizerSample?.bestTrajectory??null;if(c&&c.id!==this.lastBestTrajectoryId&&(this.trajectorySwitchTime=s,this.lastBestTrajectoryId=c.id,this.lastBestTrajectoryPhase=0),this.canvases.trajectoryClockCanvas&&this.drawTrajectories(this.canvases.trajectoryClockCanvas.getContext("2d"),l,c,s),c){this.bpmHistory.push({value:e,timestamp:s}),this.bpmHistory.length>ps&&this.bpmHistory.shift();const f=this.externalClockSample?ql(this.externalClockSample,s):0,h=(Math.floor(f)%4+4)%4,d=Math.floor(this.lastBarPhase)%4,u=Wr(c,s),p=ql(c,s);h!==d&&(this.barMarkPassTime[h]=s),this.canvases.barClockCanvas&&this.drawBarPhaseClock(f,p,s),this.lastBarPhase=f;const g=Math.floor(this.lastBestTrajectoryPhase/(2*Math.PI));Math.floor(u/(2*Math.PI))>g&&(this.trajectoryMarkPassTime=s),this.lastBestTrajectoryPhase=u,this.bestTrajPhaseHistory.push({value:u,timestamp:s}),this.bestTrajPhaseHistory.length>ps&&this.bestTrajPhaseHistory.shift()}else this.canvases.barClockCanvas&&this.drawBarPhaseClock(0,0,s),this.lastBarPhase=0,this.lastBestTrajectoryPhase=0;this.canvases.bpmGraphCanvas&&this.drawBpmGraph(e),this.canvases.phaseGraphCanvas&&this.drawPhaseGraph(c)}drawBpmGraph(e){const t=this.canvases.bpmGraphCanvas.getContext("2d"),n=t.canvas;t.clearRect(0,0,n.width,n.height);const o=n.width/2;t.strokeStyle="#444",t.beginPath(),t.moveTo(o,0),t.lineTo(o,n.height),t.stroke();const r=this.audioContext.currentTime,s=this.bpmHistory.at(-1)?.value??this.bpmGraphPrevBpmCenter,a=Math.round(s/Jd)*Jd;Math.abs(this.bpmGraphPrevBpmCenter-a)>OA&&(this.bpmGraphPrevBpmCenter=a);const l=this.bpmGraphPrevBpmCenter,c=l-Xd*.5,f=l+Xd*.5;if(this.bpmHistory.length>0){t.strokeStyle="#1ed760",t.beginPath();let d=!0;for(let u=this.bpmHistory.length-1;u>=0;u--){const p=this.bpmHistory[u],g=r-p.timestamp;if(g>ut)break;const b=(p.value-c)/(f-c),y=o-g/ut*o,x=(1-b)*n.height;d?(t.moveTo(y,x),d=!1):t.lineTo(y,x)}t.stroke()}if(this.externalClockHistory.length>0){t.strokeStyle="#ff00ff",t.beginPath();let d;for(let p=this.externalClockHistory.length-1;p>=0;p--){const g=this.externalClockHistory[p],m=r-g.timestamp;if(m>ut)break;const y=(g.bpm-c)/(f-c),x=o-m/ut*o,v=(1-y)*n.height;d===void 0?t.moveTo(x,v):(t.lineTo(x,d),t.lineTo(x,v)),d=v}const u=this.externalClockHistory[this.externalClockHistory.length-1];if(u){const p=r-u.timestamp,g=o-p/ut*o,b=(1-(u.bpm-c)/(f-c))*n.height;t.moveTo(g,b),t.lineTo(o,b)}t.stroke()}if(e>0){const u=(1-(e-c)/(f-c))*n.height;t.strokeStyle="red",t.beginPath(),t.moveTo(o,u),t.lineTo(n.width,u),t.stroke()}const h=this.externalClockSample?.scheduledBpmCorrection;if(this.externalClockSample&&this.externalClockSample.bpm>0){t.strokeStyle="orange",t.setLineDash([5,5]),t.beginPath();const d=(1-(this.externalClockSample.bpm-c)/(f-c))*n.height;if(t.moveTo(o,d),h){const p=h.time-r;if(p>0&&p<Wi){const g=o+p/Wi*o;t.lineTo(g,d);const b=(1-(h.bpm-c)/(f-c))*n.height;t.lineTo(g,b),t.lineTo(n.width,b),t.stroke(),t.strokeStyle="yellow",t.setLineDash([2,3]),t.beginPath(),t.moveTo(g,0),t.lineTo(g,n.height)}else t.lineTo(n.width,d)}else t.lineTo(n.width,d);t.stroke(),t.setLineDash([])}this.drawSyncMarkers(t,r)}drawPhaseGraph(e){const t=this.canvases.phaseGraphCanvas.getContext("2d"),n=t.canvas;t.clearRect(0,0,n.width,n.height);const o=n.width/2;t.strokeStyle="#444",t.beginPath(),t.moveTo(o,0),t.lineTo(o,n.height),t.stroke();const r=this.audioContext.currentTime;if(this.bestTrajPhaseHistory.length>0){t.strokeStyle="#1ed760",t.beginPath();let a=!0;for(let l=this.bestTrajPhaseHistory.length-1;l>=0;l--){const c=this.bestTrajPhaseHistory[l],f=r-c.timestamp;if(f>ut)break;const d=(c.value/(2*Math.PI)%1+1)%1,u=o-f/ut*o,p=(1-d)*n.height;a?(t.moveTo(u,p),a=!1):t.lineTo(u,p)}t.stroke()}if(this.externalClockHistory.length>0){t.strokeStyle="#ff00ff",t.beginPath();let a=0;for(let c=0;c<this.externalClockHistory.length;c++){if(r-this.externalClockHistory[c].timestamp<ut){a=c>0?c-1:0;break}a=c}let l=!0;for(let c=0;c<o;c++){const f=(o-c)/o*ut,h=r-f;for(;a+1<this.externalClockHistory.length&&this.externalClockHistory[a+1].timestamp<=h;)a++;const d=this.externalClockHistory[a],p=(h-d.timestamp)*d.bpm/60*2*Math.PI,b=(1-((d.phase+p)/(2*Math.PI)%1+1)%1)*n.height;l?(t.moveTo(c,b),l=!1):t.lineTo(c,b)}t.stroke()}const s=this.externalClockHistory.at(-1);if(s&&this.externalClockSample){t.strokeStyle="orange",t.setLineDash([5,5]),t.beginPath();const a=this.externalClockSample.scheduledBpmCorrection,l=a?.time,c=this.externalClockSample.bpm,f=s.phase+(r-s.timestamp)*s.bpm/60*2*Math.PI;let h=!0;for(let d=o;d<n.width;d++){const u=(d-o)/o*Wi,p=r+u;let g;if(l&&p>=l){const x=l-r,v=p-l;g=(x*c+v*a.bpm)/60*2*Math.PI}else g=u*c/60*2*Math.PI;const y=(1-((f+g)/(2*Math.PI)%1+1)%1)*n.height;if(h){const v=(1-(f/(2*Math.PI)%1+1)%1)*n.height;t.moveTo(o,v),h=!1}t.lineTo(d,y)}if(t.stroke(),t.setLineDash([]),l){const d=l-r;if(d>0&&d<Wi){const u=o+d/Wi*o;t.strokeStyle="yellow",t.setLineDash([2,3]),t.beginPath(),t.moveTo(u,0),t.lineTo(u,n.height),t.stroke(),t.setLineDash([])}}}if(e){t.strokeStyle="#1ed760",t.setLineDash([5,5]),t.beginPath();let a=!0;for(let l=o;l<n.width;l++){const c=(l-o)/o*Wi,f=r+c,u=(1-(Wr(e,f)/(2*Math.PI)%1+1)%1)*n.height;if(a){const m=(1-(Wr(e,r)/(2*Math.PI)%1+1)%1)*n.height;t.moveTo(o,m),a=!1}else t.lineTo(l,u)}t.stroke(),t.setLineDash([])}this.drawSyncMarkers(t,r)}drawSyncMarkers(e,t){const n=e.canvas,o=n.width/2;e.fillStyle="yellow";for(const r of this.externalClockHistory){if(r.type!=="nudge")continue;const s=t-r.timestamp;if(s>=0&&s<ut){const a=o-s/ut*o;e.beginPath(),e.arc(a,n.height-5,5,0,2*Math.PI),e.fill()}}e.fillStyle="cyan";for(const r of this.externalClockHistory){if(r.type!=="sync")continue;const s=t-r.timestamp;if(s>=0&&s<ut){const a=o-s/ut*o;e.beginPath(),e.arc(a,n.height-5,5,0,2*Math.PI),e.fill()}}}drawBarPhaseClock(e,t,n){const o=this.canvases.barClockCanvas.getContext("2d"),r=o.canvas,s=r.width/2,a=r.height/2,l=Math.min(s,a)*.9;o.clearRect(0,0,r.width,r.height);const c=n-this.trajectorySwitchTime;let f=0;c>=0&&c<1&&(f=1-c,f=Math.pow(f,4)),o.beginPath(),o.strokeStyle=`rgba(${20*(1-f)+255*f}, ${20*(1-f)+0}, ${20*(1-f)+0}, 1.0)`,o.lineWidth=2,o.arc(s,a,l,0,2*Math.PI),o.stroke();const h=Math.max(2,l*.1),d=l*.3,u=1.5,p=8;o.lineWidth=h;for(let y=0;y<4;y++){const x=n-this.barMarkPassTime[y];let v=0;x>=0&&x<u&&(v=(u-x)/u,v=Math.pow(v,p));const C=y/4*2*Math.PI-Math.PI/2,S=s+l*Math.cos(C),k=a+l*Math.sin(C),_=s+(l-d)*Math.cos(C),M=a+(l-d)*Math.sin(C);o.beginPath(),o.moveTo(S,k),o.lineTo(_,M),o.strokeStyle=`rgba(${20*(1-v)+0}, ${20*(1-v)+255*v}, ${20*(1-v)+0}, ${.5+v*.5})`,o.stroke()}o.lineWidth=2;const g=l*.9,m=t%4/4*2*Math.PI-Math.PI/2;o.beginPath(),o.strokeStyle="red",o.lineWidth=3,o.moveTo(s,a),o.lineTo(s+g*Math.cos(m),a+g*Math.sin(m)),o.stroke();const b=e%4/4*2*Math.PI-Math.PI/2;o.beginPath(),o.strokeStyle="#ff00ff",o.lineWidth=3,o.moveTo(s,a),o.lineTo(s+g*Math.cos(b),a+g*Math.sin(b)),o.stroke()}drawTrajectories(e,t,n,o){const r=e.canvas,s=r.width/2,a=r.height/2,l=Math.min(s,a)*.9;e.clearRect(0,0,r.width,r.height);const c=o-this.trajectorySwitchTime;let f=0;c>=0&&c<1&&(f=1-c,f=Math.pow(f,4)),e.beginPath(),e.strokeStyle=`rgba(${20*(1-f)+255*f}, ${20*(1-f)+0}, ${20*(1-f)+0}, 1.0)`,e.lineWidth=2,e.arc(s,a,l,0,2*Math.PI),e.stroke();const h=o-this.trajectoryMarkPassTime;let d=0;const u=1.5;h>=0&&h<u&&(d=(u-h)/u,d=Math.pow(d,8)),e.beginPath(),e.fillStyle=`rgba(${20*(1-d)+0}, ${20*(1-d)+255*d}, ${20*(1-d)+0}, ${.5+d*.5})`,e.arc(s,a-l,5+15*d,0,2*Math.PI),e.fill(),t.forEach(g=>{const m=n?g.id===n.id:!1,b=Math.min(1,.2+g.weight/10);e.strokeStyle=m?`rgba(255, 0, 0, ${b})`:`rgba(255, 255, 255, ${b*.1*Math.atan(g.weight)})`,e.lineWidth=m?3:2;const y=l*.9,x=Wr(g,this.audioContext.currentTime)-Math.PI/2,v=s+y*Math.cos(x),C=a+y*Math.sin(x);e.beginPath(),e.moveTo(s,a),e.lineTo(v,C),e.stroke()})}drawRawPhaseClock(e,t,n,o){const r=this.canvases.phaseClockCanvas.getContext("2d"),s=r.canvas,a=s.width/2,l=s.height/2,c=Math.min(a,l)*.9;r.clearRect(0,0,s.width,s.height);const f=o-this.trajectorySwitchTime;let h=0;f>=0&&f<1&&(h=1-f,h=Math.pow(h,4)),r.beginPath(),r.strokeStyle=`rgba(${20*(1-h)+255*h}, ${20*(1-h)+0}, ${20*(1-h)+0}, 1.0)`,r.lineWidth=2,r.arc(a,l,c,0,2*Math.PI),r.stroke();const d=o-this.phaseMarkPassTime;let u=0;d>=0&&d<1&&(u=1-d),r.beginPath(),r.fillStyle=`rgba(29, 185, 84, ${.5+u*.5})`,r.arc(a,l-c,5,0,2*Math.PI),r.fill(),n.slice(-32).forEach((x,v)=>{if(v===n.length-1)return;const C=.1+v/n.length*.4;r.strokeStyle=`rgba(255, 255, 255, ${C})`,r.lineWidth=2;const S=c*.9,k=x-Math.PI/2,_=a+S*Math.cos(k),M=l+S*Math.sin(k);r.beginPath(),r.moveTo(a,l),r.lineTo(_,M),r.stroke()});const p=c*.9,g=e-Math.PI/2,m=a+p*Math.cos(g),b=l+p*Math.sin(g);r.beginPath(),r.strokeStyle="red",r.lineWidth=3,r.moveTo(a,l),r.lineTo(m,b),r.stroke();const y=t*c;r.beginPath(),r.strokeStyle="#1ed760",r.lineWidth=2,r.arc(a,l,y,0,2*Math.PI),r.stroke()}drawOdf(e,t){const n=e.canvas;if(e.clearRect(0,0,n.width,n.height),!t||t.length===0)return;const o=t.length,r=t[0].length,s=["#ff4500","#1ed760","#007bff"];for(let a=0;a<o;a++){e.beginPath(),e.strokeStyle=s[a%s.length],e.lineWidth=1;const l=t[a];let c=0;for(let h=0;h<r;h++)l[h]>c&&(c=l[h]);const f=n.width/(r>1?r-1:1);for(let h=0;h<r;h++){const d=l[h],u=c>0?d/c:0,p=h*f,g=(1-u)*n.height;h===0?e.moveTo(p,g):e.lineTo(p,g)}e.stroke()}if(this.latestBpm>0){const a=60/this.latestBpm,l=this.audioContext.currentTime,c=-this.latestPhase/(2*Math.PI)*a,f=l+c;e.strokeStyle="rgba(255, 255, 255, 0.7)",e.lineWidth=1;const h=l-Qd;let d=f;for(;d>h;)d-=a;for(d+=a;d<l;){const u=l-d,p=n.width-u/Qd*n.width;p>=0&&p<=n.width&&(e.beginPath(),e.moveTo(p,0),e.lineTo(p,n.height),e.stroke()),d+=a}}}drawSpectrogram(e,t){const n=e.canvas;if(e.clearRect(0,0,n.width,n.height),!t||t.length===0)return;const o=t.length,r=t[0].length,s=e.createImageData(r,o),a=s.data;let l=1/0,c=-1/0;for(let u=0;u<o;u++)for(let p=0;p<r;p++){const g=t[u][p];g<l&&(l=g),g>c&&(c=g)}const f=c-l;for(let u=0;u<o;u++)for(let p=0;p<r;p++){const g=t[u][p],m=f>0?(g-l)/f:0,b=Math.floor(m*255),y=((o-1-u)*r+p)*4;a[y]=b,a[y+1]=b,a[y+2]=b,a[y+3]=255}const h=document.createElement("canvas");h.width=r,h.height=o,h.getContext("2d").putImageData(s,0,0),e.imageSmoothingEnabled=!1,e.drawImage(h,0,0,n.width,n.height)}drawWaveform(e,t,n="#1db954"){const o=e.canvas,{width:r,height:s}=o;e.clearRect(0,0,r,s),e.beginPath(),e.strokeStyle=n,e.lineWidth=1;const a=t.length,l=Math.floor(a/r),c=s/2;for(let f=0;f<r;f++){const h=f*l,d=h+l;let u=0,p=0;for(let b=h;b<d;b++){const y=t[b];y<u&&(u=y),y>p&&(p=y)}const g=(1-u*.5)*c,m=(1-p*.5)*c;e.moveTo(f,g),e.lineTo(f,m)}e.stroke()}}var PA=Object.defineProperty,TA=Object.getOwnPropertyDescriptor,Ia=(i,e,t,n)=>{for(var o=n>1?void 0:n?TA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&PA(e,t,o),o};let _o=class extends Dt{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1}select(i){this.disabled||this.value!==i&&(this.value=i,this.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0,composed:!0})))}render(){return A`
      ${this.options.map(i=>A`
        <div
          class="option ${this.value===i.value?"active":""} ${this.disabled?"disabled":""}"
          @click=${()=>this.select(i.value)}
        >
          ${i.label}
        </div>
      `)}
    `}};_o.styles=Se`
    :host {
      display: inline-flex;
      background-color: rgba(0, 0, 0, 0.2);
      border: 1px solid var(--border-color);
      border-radius: 4px;
      padding: 2px;
      gap: 2px;
      user-select: none;
    }

    .option {
      flex: 1;
      text-align: center;
      padding: 4px 12px;
      font-size: 11px;
      cursor: pointer;
      border-radius: 2px;
      color: var(--text-muted);
      border: 1px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }

    .option:hover:not(.active):not(.disabled) {
      background-color: var(--button-hover);
      color: var(--text-color);
    }

    .option.active {
      background-color: var(--selection-color);
      border-color: var(--selection-border);
      color: var(--text-color);
      text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
      font-weight: 500;
    }

    .option.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  `;Ia([U({type:String})],_o.prototype,"value",2);Ia([U({type:Array})],_o.prototype,"options",2);Ia([U({type:Boolean})],_o.prototype,"disabled",2);_o=Ia([Ee("ui-option-bar")],_o);var DA=Object.defineProperty,LA=Object.getOwnPropertyDescriptor,Zt=(i,e,t,n)=>{for(var o=n>1?void 0:n?LA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&DA(e,t,o),o};let wt=class extends ct{constructor(){super(...arguments),this.isDeviceListOpen=!1,this.resizeObserver=null,this.animationFrameId=null,this.loopDisposer=null,this.resyncDisposer=null}async firstUpdated(){this.visualizer=new EA({mainWaveformCanvas:this.mainWaveformCanvas,odfCanvas:this.odfCanvas,specCanvas:this.specCanvas,phaseClockCanvas:this.phaseClockCanvas,barClockCanvas:this.barClockCanvas,trajectoryClockCanvas:this.trajectoryClockCanvas,bpmGraphCanvas:this.bpmGraphCanvas,phaseGraphCanvas:this.phaseGraphCanvas}),this.setupResizeObserver(),_e.beatSyncManager.isMicActive&&this.animationFrameId===null&&this.animationLoop()}setupResizeObserver(){this.resizeObserver=new ResizeObserver(e=>{for(const t of e){const n=t.target,{width:o}=t.contentRect,r=window.devicePixelRatio||1,s=o,a=n.clientHeight;n.width!==Math.round(s*r)&&(n.width=Math.round(s*r)),n.height!==Math.round(a*r)&&(n.height=Math.round(a*r))}}),[this.mainWaveformCanvas,this.odfCanvas,this.specCanvas,this.bpmGraphCanvas,this.phaseGraphCanvas].forEach(e=>{e&&this.resizeObserver?.observe(e)})}connectedCallback(){super.connectedCallback(),_e.beatSyncManager.setDebugDataEnabled(!0),this.loopDisposer=un(()=>_e.beatSyncManager.isMicActive,i=>{i&&this.animationFrameId===null&&this.visualizer&&this.animationLoop()}),this.resyncDisposer=un(()=>_e.beatSyncManager.lastResyncTime,()=>{if(this.resyncBtn){this.resyncBtn.classList.remove("flashing"),this.resyncBtn.offsetWidth,this.resyncBtn.classList.add("flashing");const i=()=>{this.resyncBtn.classList.remove("flashing"),this.resyncBtn.removeEventListener("animationend",i)};this.resyncBtn.addEventListener("animationend",i)}})}disconnectedCallback(){super.disconnectedCallback(),_e.beatSyncManager.setDebugDataEnabled(!1),this.loopDisposer&&(this.loopDisposer(),this.loopDisposer=null),this.resyncDisposer&&(this.resyncDisposer(),this.resyncDisposer=null),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver?.disconnect()}animationLoop(){const i=_e.beatSyncManager;if(!i.isMicActive){this.animationFrameId=null;return}!this.visualizer.hasAudioContext&&i.audioContextInstance&&this.visualizer.setAudioContext(i.audioContextInstance),i.lastInferenceUpdate&&this.visualizer.updateInference(i.lastInferenceUpdate),i.lastStabilizerUpdate&&this.visualizer.updateStabilizer(i.lastStabilizerUpdate),i.lastExternalClockUpdate&&this.visualizer.updateExternalClock(i.lastExternalClockUpdate),i.lastExternalClockEvent&&this.visualizer.addExternalClockHistory(i.lastExternalClockEvent),i.rollingWaveformBuffer&&this.visualizer.updateRollingWaveform(i.rollingWaveformBuffer),this.visualizer.updateVisualizations(i.bestBpm,i.overallConfidence,i.bestTrajectoryWeight),this.animationFrameId=requestAnimationFrame(()=>this.animationLoop())}renderMidiMapping(i){const e=i.midiMapping;if(!e)return null;let t="";return e.type==="note"?t=`Note ${e.index} (Ch${e.channel})`:t=`CC ${e.index} (Ch${e.channel})`,A`
      <span
        class="midi-mapping-label chip"
        @dblclick=${()=>i.clearMidiMapping()}
        title="Double click to clear"
      >
        ${t}
      </span>
    `}render(){const i=_e.beatSyncManager,{audioDevices:e,selectedDeviceId:t,isMicActive:n,systemEnabled:o,externalBpm:r,bestBpm:s,bestBarPhase:a,predictedBpm:l,overallConfidence:c,bpmVariance:f,bestTrajectoryWeight:h}=i,d=e.find(p=>p.deviceId===t),u=d?d.label||`Microphone ${d.deviceId.slice(0,5)}...`:"Select Input";return A`
      <div class="header">
        <div class="title">Audio Beat Sync</div>

        <div class="header-row">
            <!-- System Toggle -->
            <ui-option-bar
                .value=${o?"On":"Off"}
                .options=${[{label:"Off",value:"Off"},{label:"On",value:"On"}]}
                @change=${p=>i.setSystemEnabled(p.detail.value==="On")}
            ></ui-option-bar>

            <!-- Device Selector Chip -->
            <div
                class="chip ${n&&o?"selected":""} ${this.isDeviceListOpen?"active":""}"
                style="cursor: pointer; min-width: 150px; justify-content: space-between;"
                @click=${()=>{this.isDeviceListOpen=!this.isDeviceListOpen}}
            >
                <div style="display: flex; align-items: center; gap: 6px;">
                    <i class="la ${n?"la-microphone":"la-microphone-slash"}"></i>
                    ${u}
                </div>
                <i class="la ${this.isDeviceListOpen?"la-angle-up":"la-angle-down"}"></i>
            </div>

            <div style="flex: 1"></div>

             <!-- Resolume Toggle -->
             <ui-option-bar
                .value=${i.localControllerInstance.observableState.localSettings.beatSyncResolumeControlEnabled?"On":"Off"}
                .options=${[{label:"Resolume Off",value:"Off"},{label:"Resolume On",value:"On"}]}
                @change=${p=>i.setResolumeControlEnabled(p.detail.value==="On")}
            ></ui-option-bar>
        </div>

        <!-- Inline Device List -->
        ${this.isDeviceListOpen?A`
            <div class="inline-device-list">
                ${e.map(p=>A`
                    <div
                        class="chip ${t===p.deviceId?"selected":""}"
                        @click=${()=>{i.startMic(p.deviceId),this.isDeviceListOpen=!1}}
                    >
                        ${p.label||`Microphone ${p.deviceId.slice(0,5)}...`}
                    </div>
                `)}
                ${e.length===0?A`<div>No Inputs</div>`:""}
                <div class="chip" @click=${()=>i.requestPermissions()}>
                        <i class="la la-unlock"></i> Request Access
                </div>
            </div>
        `:""}

        <div class="controls-row">
             <button class="action-button resync-btn" @pointerdown=${()=>i.resync()}>
                <i class="la la-sync"></i> Resync
             </button>

             <div class="controls-right-col">
                <ui-option-bar
                    .value=${i.isHardSync?"Hard":"Soft"}
                    .options=${[{label:"Soft",value:"Soft"},{label:"Hard",value:"Hard"}]}
                    @change=${p=>i.setHardSync(p.detail.value==="Hard")}
                ></ui-option-bar>

                <div class="midi-mapping-controls">
                    <button
                      class="midi-learn-btn ${zt({pulsing:i.isMidiMappingActive})}"
                      @click=${()=>i.toggleMidiDoLearn()}
                      title=${i.isMidiMappingActive?"Listening for MIDI...":"Click to map MIDI"}
                    >
                      MIDI
                    </button>
                    ${this.renderMidiMapping(i)}
                </div>
             </div>
        </div>
      </div>

      <div class="monitor-section">
        <div class="viz-container">
            <div class="viz-text-summaries">
                <div><b>SEND BPM:</b> ${r.toFixed(1)}</div>
                <div><b>Best BPM:</b> ${s.toFixed(1)}</div>
                <div><b>Bar Phase:</b> ${a.toFixed(1)}</div>
                <div><b>Raw BPM:</b> ${l.toFixed(1)}</div>
                <div><b>Confidence:</b> ${c.toFixed(2)}</div>
                <div><b>BPM Variance:</b> ${f.toFixed(2)}</div>
                <div><b>Traj. Weight:</b> ${h.toFixed(2)}</div>
            </div>

            <div class="viz-clocks">
                <div class="viz-column">
                  <canvas id="barClock" class="clock-graph" width="160" height="160"></canvas>
                  <label>Bar Phase</label>
                </div>
                <div class="viz-column">
                  <canvas id="trajectoryClock" class="clock-graph" width="160" height="160"></canvas>
                  <label>Trajectories</label>
                </div>
                <div class="viz-column">
                  <canvas id="phaseClock" class="clock-graph" width="160" height="160"></canvas>
                  <label>Raw Phase</label>
                </div>
            </div>
        </div>

        <div class="graph-container">
            <label class="graph-label top right">${(this.visualizer?.bpmGraphCenterBpm+3).toFixed(1)}</label>
            <label class="graph-label middle right">${r.toFixed(1)}</label>
            <label class="graph-label bottom right">${(this.visualizer?.bpmGraphCenterBpm-3).toFixed(1)}</label>
            <canvas id="bpmGraph" class="large-graph" width="600" height="80"></canvas>
            <label>BPM Predictions</label>
        </div>

        <div class="graph-container">
            <canvas id="phaseGraph" class="large-graph" width="600" height="80"></canvas>
            <label>Phase Predictions</label>
        </div>

        <div class="graph-container">
            <canvas id="odfGraph" class="large-graph" width="600" height="80"></canvas>
            <label>ODF Features</label>
        </div>

        <div class="graph-container">
             <canvas id="specGraph" class="large-graph" width="600" height="80"></canvas>
             <canvas id="mainWaveform" class="large-graph" width="600" height="80"></canvas>
             <label>Input Spectrogram & Waveform</label>
        </div>
      </div>
    `}};wt.styles=[Qt,zv,Se`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: var(--bg-color);
        color: var(--text-color);
        overflow-y: auto;
        overflow-x: hidden;
      }


      .header {
        padding: 12px 20px;
        background-color: var(--panel-header-bg);
        border-bottom: 1px solid var(--border-color);
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .header-row {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
      }

      .controls-row {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }

      /* Inline Device List */
      .inline-device-list {
         margin-top: 12px;
         display: flex;
         flex-wrap: wrap;
         gap: 8px;
         padding: 12px;
         background: var(--bg-color); /* Slightly darker/lighter background to distinguish? */
         border: 1px solid var(--border-color);
         border-radius: 4px;
      }

      .title {
        font-size: 1.2em;
        font-weight: bold;
        color: var(--text-color);
        margin: 0;
      }

      .content {
        padding: 0; /* Clear old padding */
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
      }

      .monitor-section {
         padding: 16px;
         display: flex;
         flex-direction: column;
         gap: 20px;
         box-sizing: border-box;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        align-items: flex-start;
      }

      .viz-container {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        align-items: flex-start;
      }

      .viz-clocks {
         display: flex;
         gap: 12px;
      }

      .viz-column {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .viz-text-summaries {
        min-width: 180px;
        background-color: var(--panel-bg);
        padding: 15px;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9em;
      }

      .viz-text-summaries div {
        margin-bottom: 4px;
      }

      canvas {
        background-color: #282828;
        border-radius: 4px;
        border: 1px solid var(--border-color);
      }

      label {
        margin-top: 5px;
        margin-bottom: 2px;
        font-size: 12px;
        color: var(--text-muted);
        text-align: center;
        width: 100%;
        display: block;
      }

      .graph-container {
        position: relative;
        width: 100%;
        max-width: 100%; /* Was 800px */
      }

      .large-graph {
        width: 100%;
        height: 80px; /* Was 100px */
      }

      .clock-graph {
        width: 80px;
        height: 80px;
      }

      .waveform-wrapper {
        position: relative;
        width: 100%;
        max-width: 100%;
      }

      .graph-label {
        position: absolute;
        font-size: 10px;
        color: #b3b3b3;
        pointer-events: none;
      }
      .graph-label.top { top: 4px; }
      .graph-label.middle { top: 50%; transform: translateY(-50%); }
      .graph-label.bottom { bottom: 4px; }
      .graph-label.right { right: 4px; }

      .status-message {
        margin-top: 10px;
        font-size: 0.9em;
        color: var(--accent-color);
        opacity: 0.8;
      }



      .action-button {
        padding: 6px 12px;
        background-color: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        color: var(--text-color);
        cursor: pointer;
        font-size: 0.9em;
      }

      .action-button:hover {
        background-color: var(--button-hover);
      }
      .resync-btn.large {
        height: 60px;
        font-size: 16px;
        font-weight: bold;
        background: var(--accent-color);
        color: white;
        border: none;
        margin-bottom: 8px;
        width: 100%;
        display: block;
      }

      .midi-mapping-controls {
         display: flex;
         align-items: center;
         gap: 8px;
      }

      .controls-right-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-left: 12px;
          align-items: flex-start;
      }

      .controls-row {
          display: flex;
          align-items: center;
      }

      .resync-btn {
        height: 100%;
        min-height: 52px;
        font-size: 1.1em;
        font-weight: bold;
        padding: 0 16px;
      }

      .midi-learn-btn {
        background: transparent;
        border: 1px solid var(--text-color);
        color: var(--text-color);
        font-size: 10px;
        padding: 2px 6px;
        cursor: pointer;
        border-radius: 4px;
        opacity: 0.7;
      }

      .midi-learn-btn:hover {
        opacity: 1.0;
        background: rgba(255,255,255,0.1);
      }

      .midi-learn-btn.pulsing {
        animation: pulse-red 1s infinite;
        border-color: #ff4444;
        color: #ff4444;
        opacity: 1;
      }

      .midi-mapping-label {
        font-size: 10px;
        background: rgba(255,255,255,0.1);
        padding: 2px 6px;
        border-radius: 4px;
        cursor: pointer;
      }

      @keyframes pulse-red {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
    `];Zt([Bt("#mainWaveform")],wt.prototype,"mainWaveformCanvas",2);Zt([Bt("#odfGraph")],wt.prototype,"odfCanvas",2);Zt([Bt("#specGraph")],wt.prototype,"specCanvas",2);Zt([Bt("#phaseClock")],wt.prototype,"phaseClockCanvas",2);Zt([Bt("#barClock")],wt.prototype,"barClockCanvas",2);Zt([Bt("#trajectoryClock")],wt.prototype,"trajectoryClockCanvas",2);Zt([Bt("#bpmGraph")],wt.prototype,"bpmGraphCanvas",2);Zt([Bt("#phaseGraph")],wt.prototype,"phaseGraphCanvas",2);Zt([Bt(".resync-btn")],wt.prototype,"resyncBtn",2);Zt([nt()],wt.prototype,"isDeviceListOpen",2);wt=Zt([Ee("beat-sync-view")],wt);var RA=Object.defineProperty,NA=Object.getOwnPropertyDescriptor,Cb=(i,e,t,n)=>{for(var o=n>1?void 0:n?NA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&RA(e,t,o),o};let ra=class extends ct{constructor(){super(...arguments),this.activeTab="workspace"}connectedCallback(){super.connectedCallback(),this.activeTab=E.observableState.localSettings.activeTab}render(){return A`
      <app-sidebar
        .activeTab=${E.observableState.localSettings.activeTab}
        @switch-tab=${this.handleSwitchTab}
      ></app-sidebar>

      <div class="panels">
        ${E.observableState.localSettings.activeTab?A`
          <div class="sidebar-panel">
            ${this.renderActivePanel()}
          </div>
        `:""}

        <div class="editor-container">
          <graph-editor></graph-editor>
        </div>
      </div>
    `}renderActivePanel(){switch(E.observableState.localSettings.activeTab){case"workspace":return A`<workspace-panel></workspace-panel>`;case"io":return A`<io-tab></io-tab>`;case"debug":return A`<debug-tab></debug-tab>`;case"beatsync":return A`<beat-sync-view></beat-sync-view>`;default:return null}}handleSwitchTab(i){const e=i.detail.tab;E.observableState.localSettings.activeTab===e?E.setActiveTab(null):E.setActiveTab(e)}};ra.styles=Se`
    :host {
      display: flex;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: #1e1e1e;
      color: #ccc;
    }

    app-sidebar {
      flex: 0 0 auto;
      z-index: 10;
    }

    .panels {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    .sidebar-panel {
      flex: 0 0 auto;
      width: 300px;
      border-right: 1px solid #333;
      background: #252526;
      display: flex;
      flex-direction: column;
    }

    .editor-container {
      flex: 1;
      position: relative;
      overflow: hidden;
    }

    graph-editor {
      width: 100%;
      height: 100%;
    }
  `;Cb([nt()],ra.prototype,"activeTab",2);ra=Cb([Ee("workspace-layout")],ra);var $A=Object.defineProperty,BA=Object.getOwnPropertyDescriptor,Br=(i,e,t,n)=>{for(var o=n>1?void 0:n?BA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&$A(e,t,o),o};self.MonacoEnvironment={getWorker:function(i,e){return e==="json"?new Worker(new URL("/assets/json.worker-CbPvaBPT.js",import.meta.url),{type:"module"}):e==="css"||e==="scss"||e==="less"?new Worker(new URL("/assets/css.worker-BL6kSyU1.js",import.meta.url),{type:"module"}):e==="html"||e==="handlebars"||e==="razor"?new Worker(new URL("/assets/html.worker-BJUDQ4P_.js",import.meta.url),{type:"module"}):e==="typescript"||e==="javascript"?new Worker(new URL("/assets/ts.worker-BU8T4Yx4.js",import.meta.url),{type:"module"}):new Worker(new URL("/assets/editor.worker-BDzEcYpU.js",import.meta.url),{type:"module"})}};let Ri=class extends Dt{constructor(){super(...arguments),this.value="",this.language="typescript",this.isLoading=!0,this.editor=null,this.monacoModule=null}render(){return A`
      <div id="container"></div>
      ${this.isLoading?A`<div class="loading">Loading Editor...</div>`:""}
    `}async firstUpdated(){if(this.container)try{if(this.monacoModule=await Oe(()=>import("./editor.main-BYMwXTeF.js").then(i=>i.b),__vite__mapDeps([0,1])),this.isLoading=!1,!this.isConnected)return;this.editor=this.monacoModule.editor.create(this.container,{value:this.value,language:this.language,theme:"vs-dark",minimap:{enabled:!1},automaticLayout:!0,scrollBeyondLastLine:!1}),this.editor.onDidChangeModelContent(()=>{const i=this.editor?.getValue()||"";this.value=i,this.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0,composed:!0}))})}catch(i){console.error("Failed to load Monaco Editor:",i),this.isLoading=!1}}updated(i){i.has("value")&&this.editor&&this.editor.getValue()!==this.value&&this.editor.setValue(this.value)}disconnectedCallback(){super.disconnectedCallback(),this.editor?.dispose()}};Ri.styles=Se`
    :host {
      display: block;
      width: 100%;
      height: 300px; /* Default height */
      border: 1px solid #ccc;
      position: relative;
    }
    #container {
      width: 100%;
      height: 100%;
    }
    .loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.5);
      color: white;
      z-index: 10;
    }
  `;Br([U({type:String})],Ri.prototype,"value",2);Br([U({type:String})],Ri.prototype,"language",2);Br([Bt("#container")],Ri.prototype,"container",2);Br([nt()],Ri.prototype,"isLoading",2);Ri=Br([Ee("monaco-editor-wrapper")],Ri);var VA=Object.defineProperty,FA=Object.getOwnPropertyDescriptor,Ab=(i,e,t,n)=>{for(var o=n>1?void 0:n?FA(e,t):e,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&VA(e,t,o),o};let sa=class extends ct{constructor(){super(...arguments),this.isReady=!1}async connectedCallback(){super.connectedCallback(),await E.settingsLoaded,this.isReady=!0}render(){return this.isReady?A`
      <workspace-layout></workspace-layout>
    `:null}};sa.styles=[Qt,Se`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      color: var(--app-text-color1);
      background-color: var(--app-bg-color1);
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      overflow: hidden;
    }
`];Ab([nt()],sa.prototype,"isReady",2);sa=Ab([Ee("nano-repatch")],sa);export{ct as M,rn as P,vn as R,Oe as _,j as a,qc as b,Bt as c,ee as d,Ee as e,nt as f,Se as i,U as n,_e as r,Dt as s,vi as t,A as x};
//# sourceMappingURL=index-NSZ1S18S.js.map
