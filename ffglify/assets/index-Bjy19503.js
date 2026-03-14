(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const To=window,Hi=To.ShadowRoot&&(To.ShadyCSS===void 0||To.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ki=Symbol(),zs=new WeakMap;let Ec=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Ki)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Hi&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=zs.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&zs.set(n,e))}return e}toString(){return this.cssText}};const ha=t=>new Ec(typeof t=="string"?t:t+"",void 0,Ki),We=(t,...e)=>{const n=t.length===1?t[0]:e.reduce(((r,o,a)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1]),t[0]);return new Ec(n,t,Ki)},Gu=(t,e)=>{Hi?t.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const r=document.createElement("style"),o=To.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}))},Is=Hi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return ha(n)})(t):t;var Ba;const jo=window,Os=jo.trustedTypes,Wu=Os?Os.emptyScript:"",Cs=jo.reactiveElementPolyfillSupport,ii={toAttribute(t,e){switch(e){case Boolean:t=t?Wu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},zc=(t,e)=>e!==t&&(e==e||t==t),Ma={attribute:!0,type:String,converter:ii,reflect:!1,hasChanged:zc},si="finalized";let Wn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,r)=>{const o=this._$Ep(r,n);o!==void 0&&(this._$Ev.set(o,r),e.push(o))})),e}static createProperty(e,n=Ma){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(o){const a=this[e];this[n]=o,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ma}static finalize(){if(this.hasOwnProperty(si))return!1;this[si]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of r)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)n.unshift(Is(o))}else e!==void 0&&n.push(Is(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Gu(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)}))}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=Ma){var o;const a=this.constructor._$Ep(e,r);if(a!==void 0&&r.reflect===!0){const i=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:ii).toAttribute(n,r.type);this._$El=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$El=null}}_$AK(e,n){var r;const o=this.constructor,a=o._$Ev.get(e);if(a!==void 0&&this._$El!==a){const i=o.getPropertyOptions(a),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((r=i.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?i.converter:ii;this._$El=a,this[a]=s.fromAttribute(n,i.type),this._$El=null}}requestUpdate(e,n,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||zc)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,a)=>this[a]=o)),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)})),this.update(r)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,r)=>this._$EO(r,this[r],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Wn[si]=!0,Wn.elementProperties=new Map,Wn.elementStyles=[],Wn.shadowRootOptions={mode:"open"},Cs?.({ReactiveElement:Wn}),((Ba=jo.reactiveElementVersions)!==null&&Ba!==void 0?Ba:jo.reactiveElementVersions=[]).push("1.6.3");var Na;const Uo=window,nr=Uo.trustedTypes,Rs=nr?nr.createPolicy("lit-html",{createHTML:t=>t}):void 0,li="$lit$",Zt=`lit$${(Math.random()+"").slice(9)}$`,Ic="?"+Zt,Zu=`<${Ic}>`,wn=document,qo=()=>wn.createComment(""),Br=t=>t===null||typeof t!="object"&&typeof t!="function",Oc=Array.isArray,Hu=t=>Oc(t)||typeof t?.[Symbol.iterator]=="function",Fa=`[ 	
\f\r]`,Er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ts=/-->/g,Ls=/>/g,fn=RegExp(`>|${Fa}(?:([^\\s"'>=/]+)(${Fa}*=${Fa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ds=/'/g,Ps=/"/g,Cc=/^(?:script|style|textarea|title)$/i,Mr=Symbol.for("lit-noChange"),je=Symbol.for("lit-nothing"),Bs=new WeakMap,mn=wn.createTreeWalker(wn,129,null,!1);function Rc(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rs!==void 0?Rs.createHTML(e):e}const Ku=(t,e)=>{const n=t.length-1,r=[];let o,a=e===2?"<svg>":"",i=Er;for(let s=0;s<n;s++){const l=t[s];let f,d,m=-1,h=0;for(;h<l.length&&(i.lastIndex=h,d=i.exec(l),d!==null);)h=i.lastIndex,i===Er?d[1]==="!--"?i=Ts:d[1]!==void 0?i=Ls:d[2]!==void 0?(Cc.test(d[2])&&(o=RegExp("</"+d[2],"g")),i=fn):d[3]!==void 0&&(i=fn):i===fn?d[0]===">"?(i=o??Er,m=-1):d[1]===void 0?m=-2:(m=i.lastIndex-d[2].length,f=d[1],i=d[3]===void 0?fn:d[3]==='"'?Ps:Ds):i===Ps||i===Ds?i=fn:i===Ts||i===Ls?i=Er:(i=fn,o=void 0);const c=i===fn&&t[s+1].startsWith("/>")?" ":"";a+=i===Er?l+Zu:m>=0?(r.push(f),l.slice(0,m)+li+l.slice(m)+Zt+c):l+Zt+(m===-2?(r.push(void 0),s):c)}return[Rc(t,a+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};let ci=class Tc{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let a=0,i=0;const s=e.length-1,l=this.parts,[f,d]=Ku(e,n);if(this.el=Tc.createElement(f,r),mn.currentNode=this.el.content,n===2){const m=this.el.content,h=m.firstChild;h.remove(),m.append(...h.childNodes)}for(;(o=mn.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const m=[];for(const h of o.getAttributeNames())if(h.endsWith(li)||h.startsWith(Zt)){const c=d[i++];if(m.push(h),c!==void 0){const u=o.getAttribute(c.toLowerCase()+li).split(Zt),p=/([.?@])?(.*)/.exec(c);l.push({type:1,index:a,name:p[2],strings:u,ctor:p[1]==="."?Yu:p[1]==="?"?Qu:p[1]==="@"?ed:ma})}else l.push({type:6,index:a})}for(const h of m)o.removeAttribute(h)}if(Cc.test(o.tagName)){const m=o.textContent.split(Zt),h=m.length-1;if(h>0){o.textContent=nr?nr.emptyScript:"";for(let c=0;c<h;c++)o.append(m[c],qo()),mn.nextNode(),l.push({type:2,index:++a});o.append(m[h],qo())}}}else if(o.nodeType===8)if(o.data===Ic)l.push({type:2,index:a});else{let m=-1;for(;(m=o.data.indexOf(Zt,m+1))!==-1;)l.push({type:7,index:a}),m+=Zt.length-1}a++}}static createElement(e,n){const r=wn.createElement("template");return r.innerHTML=e,r}};function rr(t,e,n=t,r){var o,a,i,s;if(e===Mr)return e;let l=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const f=Br(e)?void 0:e._$litDirective$;return l?.constructor!==f&&((a=l?._$AO)===null||a===void 0||a.call(l,!1),f===void 0?l=void 0:(l=new f(t),l._$AT(t,n,r)),r!==void 0?((i=(s=n)._$Co)!==null&&i!==void 0?i:s._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=rr(t,l._$AS(t,e.values),l,r)),e}let Ju=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:o}=this._$AD,a=((n=e?.creationScope)!==null&&n!==void 0?n:wn).importNode(r,!0);mn.currentNode=a;let i=mn.nextNode(),s=0,l=0,f=o[0];for(;f!==void 0;){if(s===f.index){let d;f.type===2?d=new Lc(i,i.nextSibling,this,e):f.type===1?d=new f.ctor(i,f.name,f.strings,this,e):f.type===6&&(d=new td(i,this,e)),this._$AV.push(d),f=o[++l]}s!==f?.index&&(i=mn.nextNode(),s++)}return mn.currentNode=wn,a}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Lc=class Dc{constructor(e,n,r,o){var a;this.type=2,this._$AH=je,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=rr(this,e,n),Br(e)?e===je||e==null||e===""?(this._$AH!==je&&this._$AR(),this._$AH=je):e!==this._$AH&&e!==Mr&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Hu(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==je&&Br(this._$AH)?this._$AA.nextSibling.data=e:this.$(wn.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ci.createElement(Rc(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===a)this._$AH.v(r);else{const i=new Ju(a,this),s=i.u(this.options);i.v(r),this.$(s),this._$AH=i}}_$AC(e){let n=Bs.get(e.strings);return n===void 0&&Bs.set(e.strings,n=new ci(e)),n}T(e){Oc(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const a of e)o===n.length?n.push(r=new Dc(this.k(qo()),this.k(qo()),this,this.options)):r=n[o],r._$AI(a),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},ma=class{constructor(e,n,r,o,a){this.type=1,this._$AH=je,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=je}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,o){const a=this.strings;let i=!1;if(a===void 0)e=rr(this,e,n,0),i=!Br(e)||e!==this._$AH&&e!==Mr,i&&(this._$AH=e);else{const s=e;let l,f;for(e=a[0],l=0;l<a.length-1;l++)f=rr(this,s[r+l],n,l),f===Mr&&(f=this._$AH[l]),i||(i=!Br(f)||f!==this._$AH[l]),f===je?e=je:e!==je&&(e+=(f??"")+a[l+1]),this._$AH[l]=f}i&&!o&&this.j(e)}j(e){e===je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Yu=class extends ma{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===je?void 0:e}};const Xu=nr?nr.emptyScript:"";let Qu=class extends ma{constructor(){super(...arguments),this.type=4}j(e){e&&e!==je?this.element.setAttribute(this.name,Xu):this.element.removeAttribute(this.name)}},ed=class extends ma{constructor(e,n,r,o,a){super(e,n,r,o,a),this.type=5}_$AI(e,n=this){var r;if((e=(r=rr(this,e,n,0))!==null&&r!==void 0?r:je)===Mr)return;const o=this._$AH,a=e===je&&o!==je||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==je&&(o===je||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},td=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){rr(this,e)}};const Ms=Uo.litHtmlPolyfillSupport;Ms?.(ci,Lc),((Na=Uo.litHtmlVersions)!==null&&Na!==void 0?Na:Uo.litHtmlVersions=[]).push("2.8.0");var ja;const Vo=window,or=Vo.trustedTypes,Ns=or?or.createPolicy("lit-html",{createHTML:t=>t}):void 0,fi="$lit$",Ht=`lit$${(Math.random()+"").slice(9)}$`,Pc="?"+Ht,nd=`<${Pc}>`,$n=document,Nr=()=>$n.createComment(""),Fr=t=>t===null||typeof t!="object"&&typeof t!="function",Bc=Array.isArray,rd=t=>Bc(t)||typeof t?.[Symbol.iterator]=="function",Ua=`[ 	
\f\r]`,zr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fs=/-->/g,js=/>/g,un=RegExp(`>|${Ua}(?:([^\\s"'>=/]+)(${Ua}*=${Ua}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Us=/'/g,qs=/"/g,Mc=/^(?:script|style|textarea|title)$/i,od=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Z=od(1),ar=Symbol.for("lit-noChange"),fe=Symbol.for("lit-nothing"),Vs=new WeakMap,_n=$n.createTreeWalker($n,129,null,!1);function Nc(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ns!==void 0?Ns.createHTML(e):e}const ad=(t,e)=>{const n=t.length-1,r=[];let o,a=e===2?"<svg>":"",i=zr;for(let s=0;s<n;s++){const l=t[s];let f,d,m=-1,h=0;for(;h<l.length&&(i.lastIndex=h,d=i.exec(l),d!==null);)h=i.lastIndex,i===zr?d[1]==="!--"?i=Fs:d[1]!==void 0?i=js:d[2]!==void 0?(Mc.test(d[2])&&(o=RegExp("</"+d[2],"g")),i=un):d[3]!==void 0&&(i=un):i===un?d[0]===">"?(i=o??zr,m=-1):d[1]===void 0?m=-2:(m=i.lastIndex-d[2].length,f=d[1],i=d[3]===void 0?un:d[3]==='"'?qs:Us):i===qs||i===Us?i=un:i===Fs||i===js?i=zr:(i=un,o=void 0);const c=i===un&&t[s+1].startsWith("/>")?" ":"";a+=i===zr?l+nd:m>=0?(r.push(f),l.slice(0,m)+fi+l.slice(m)+Ht+c):l+Ht+(m===-2?(r.push(void 0),s):c)}return[Nc(t,a+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class jr{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let a=0,i=0;const s=e.length-1,l=this.parts,[f,d]=ad(e,n);if(this.el=jr.createElement(f,r),_n.currentNode=this.el.content,n===2){const m=this.el.content,h=m.firstChild;h.remove(),m.append(...h.childNodes)}for(;(o=_n.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const m=[];for(const h of o.getAttributeNames())if(h.endsWith(fi)||h.startsWith(Ht)){const c=d[i++];if(m.push(h),c!==void 0){const u=o.getAttribute(c.toLowerCase()+fi).split(Ht),p=/([.?@])?(.*)/.exec(c);l.push({type:1,index:a,name:p[2],strings:u,ctor:p[1]==="."?sd:p[1]==="?"?cd:p[1]==="@"?fd:_a})}else l.push({type:6,index:a})}for(const h of m)o.removeAttribute(h)}if(Mc.test(o.tagName)){const m=o.textContent.split(Ht),h=m.length-1;if(h>0){o.textContent=or?or.emptyScript:"";for(let c=0;c<h;c++)o.append(m[c],Nr()),_n.nextNode(),l.push({type:2,index:++a});o.append(m[h],Nr())}}}else if(o.nodeType===8)if(o.data===Pc)l.push({type:2,index:a});else{let m=-1;for(;(m=o.data.indexOf(Ht,m+1))!==-1;)l.push({type:7,index:a}),m+=Ht.length-1}a++}}static createElement(e,n){const r=$n.createElement("template");return r.innerHTML=e,r}}function ir(t,e,n=t,r){var o,a,i,s;if(e===ar)return e;let l=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const f=Fr(e)?void 0:e._$litDirective$;return l?.constructor!==f&&((a=l?._$AO)===null||a===void 0||a.call(l,!1),f===void 0?l=void 0:(l=new f(t),l._$AT(t,n,r)),r!==void 0?((i=(s=n)._$Co)!==null&&i!==void 0?i:s._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=ir(t,l._$AS(t,e.values),l,r)),e}class id{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:r},parts:o}=this._$AD,a=((n=e?.creationScope)!==null&&n!==void 0?n:$n).importNode(r,!0);_n.currentNode=a;let i=_n.nextNode(),s=0,l=0,f=o[0];for(;f!==void 0;){if(s===f.index){let d;f.type===2?d=new no(i,i.nextSibling,this,e):f.type===1?d=new f.ctor(i,f.name,f.strings,this,e):f.type===6&&(d=new ud(i,this,e)),this._$AV.push(d),f=o[++l]}s!==f?.index&&(i=_n.nextNode(),s++)}return _n.currentNode=$n,a}v(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class no{constructor(e,n,r,o){var a;this.type=2,this._$AH=fe,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ir(this,e,n),Fr(e)?e===fe||e==null||e===""?(this._$AH!==fe&&this._$AR(),this._$AH=fe):e!==this._$AH&&e!==ar&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):rd(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==fe&&Fr(this._$AH)?this._$AA.nextSibling.data=e:this.$($n.createTextNode(e)),this._$AH=e}g(e){var n;const{values:r,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=jr.createElement(Nc(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===a)this._$AH.v(r);else{const i=new id(a,this),s=i.u(this.options);i.v(r),this.$(s),this._$AH=i}}_$AC(e){let n=Vs.get(e.strings);return n===void 0&&Vs.set(e.strings,n=new jr(e)),n}T(e){Bc(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const a of e)o===n.length?n.push(r=new no(this.k(Nr()),this.k(Nr()),this,this.options)):r=n[o],r._$AI(a),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class _a{constructor(e,n,r,o,a){this.type=1,this._$AH=fe,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=fe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,o){const a=this.strings;let i=!1;if(a===void 0)e=ir(this,e,n,0),i=!Fr(e)||e!==this._$AH&&e!==ar,i&&(this._$AH=e);else{const s=e;let l,f;for(e=a[0],l=0;l<a.length-1;l++)f=ir(this,s[r+l],n,l),f===ar&&(f=this._$AH[l]),i||(i=!Fr(f)||f!==this._$AH[l]),f===fe?e=fe:e!==fe&&(e+=(f??"")+a[l+1]),this._$AH[l]=f}i&&!o&&this.j(e)}j(e){e===fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class sd extends _a{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===fe?void 0:e}}const ld=or?or.emptyScript:"";class cd extends _a{constructor(){super(...arguments),this.type=4}j(e){e&&e!==fe?this.element.setAttribute(this.name,ld):this.element.removeAttribute(this.name)}}class fd extends _a{constructor(e,n,r,o,a){super(e,n,r,o,a),this.type=5}_$AI(e,n=this){var r;if((e=(r=ir(this,e,n,0))!==null&&r!==void 0?r:fe)===ar)return;const o=this._$AH,a=e===fe&&o!==fe||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==fe&&(o===fe||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class ud{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ir(this,e)}}const Gs=Vo.litHtmlPolyfillSupport;Gs?.(jr,no),((ja=Vo.litHtmlVersions)!==null&&ja!==void 0?ja:Vo.litHtmlVersions=[]).push("2.8.0");const dd=(t,e,n)=>{var r,o;const a=(r=n?.renderBefore)!==null&&r!==void 0?r:e;let i=a._$litPart$;if(i===void 0){const s=(o=n?.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=i=new no(e.insertBefore(Nr(),s),s,void 0,n??{})}return i._$AI(t),i};var qa,Va;class Nt extends Wn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dd(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ar}}Nt.finalized=!0,Nt._$litElement$=!0,(qa=globalThis.litElementHydrateSupport)===null||qa===void 0||qa.call(globalThis,{LitElement:Nt});const Ws=globalThis.litElementPolyfillSupport;Ws?.({LitElement:Nt});((Va=globalThis.litElementVersions)!==null&&Va!==void 0?Va:globalThis.litElementVersions=[]).push("3.3.3");const tt=t=>e=>typeof e=="function"?((n,r)=>(customElements.define(n,r),r))(t,e):((n,r)=>{const{kind:o,elements:a}=r;return{kind:o,elements:a,finisher(i){customElements.define(n,i)}}})(t,e);const pd=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},hd=(t,e,n)=>{e.constructor.createProperty(n,t)};function qt(t){return(e,n)=>n!==void 0?hd(t,e,n):pd(t,e)}function Ee(t){return qt({...t,state:!0})}const md=({finisher:t,descriptor:e})=>(n,r)=>{var o;if(r===void 0){const a=(o=n.originalKey)!==null&&o!==void 0?o:n.key,i=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(n.key)}:{...n,key:a};return t!=null&&(i.finisher=function(s){t(s,a)}),i}{const a=n.constructor;e!==void 0&&Object.defineProperty(n,r,e(r)),t?.(a,r)}};function ba(t,e){return md({descriptor:n=>({get(){var o,a;return(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}var Ga;((Ga=window.HTMLSlotElement)===null||Ga===void 0?void 0:Ga.prototype.assignedElements)!=null;const Ji=`.la,
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
`;var _d=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,Fc=(t,e,n,r)=>{for(var o=r>1?void 0:r?bd(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&_d(e,n,o),o};let Go=class extends Nt{constructor(){super(...arguments),this.icon=""}render(){return Z`<i class="las ${this.icon}"></i>`}};Go.styles=[ha(Ji),We`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
      }
      i {
        font-size: var(--icon-size, inherit);
        color: var(--icon-color, inherit);
      }
    `];Fc([qt({type:String})],Go.prototype,"icon",2);Go=Fc([tt("ui-icon")],Go);var gd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,mr=(t,e,n,r)=>{for(var o=r>1?void 0:r?yd(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&gd(e,n,o),o};let Qt=class extends Nt{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.square=!1,this.variant="default",this.hasContent=!1}handleSlotChange(t){const n=t.target.assignedNodes({flatten:!0});this.hasContent=n.some(r=>r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&r.textContent?.trim()!=="")}render(){return Z`
      <button
        ?disabled=${this.disabled}
        class="${this.square?"square":""} ${this.variant}"
      >
        ${this.icon?Z`<i class="las ${this.icon}"></i>`:""}
        <span class="${this.hasContent?"":"hidden"}">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
      </button>
    `}};Qt.styles=[ha(Ji),We`
    :host {
      display: inline-block;
      vertical-align: middle;
    }

    button {
      background-color: var(--app-header-bg);
      color: var(--app-text-main);
      border: 1px solid var(--app-border);
      border-radius: 0.375rem; /* 6px */
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      transition: all 0.15s ease-in-out;
      line-height: 1;
      height: 100%;
    }

    /* Square Icon Button */
    button.square {
      padding: 0.5rem;
      aspect-ratio: 1;
    }

    /* Variants */
    button.ghost {
      background-color: transparent;
      border-color: transparent;
      color: var(--app-text-muted);
    }
    button.ghost:hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--app-text-main);
    }

    button.outline {
       background-color: transparent;
       border: 1px solid var(--app-border);
    }
    button.outline:hover {
       background-color: rgba(255, 255, 255, 0.05);
       border-color: var(--app-text-muted);
    }

    /* Primary (Emerald) */
    button.primary {
       background-color: var(--color-emerald-600);
       border: 1px solid var(--color-emerald-600);
       color: white;
       box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    }
    button.primary:hover {
       background-color: var(--color-emerald-700);
       border-color: var(--color-emerald-700);
    }

    /* Default (Solid/White-ish) */
    button:not(.ghost):not(.outline):not(.primary) {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    }
    button:not(.ghost):not(.outline):not(.primary):hover {
       background-color: rgba(255, 255, 255, 0.08);
       border-color: var(--app-text-muted);
    }

    button:active:not(:disabled) {
       transform: translateY(1px);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    i {
      font-size: 1.25em; /* Scale icon relative to text */
    }

    span {
      margin-left: 0.5rem;
    }

    span.hidden {
        display: none;
    }
  `];mr([qt({type:String})],Qt.prototype,"icon",2);mr([qt({type:Boolean})],Qt.prototype,"disabled",2);mr([qt({type:Boolean})],Qt.prototype,"square",2);mr([qt({type:String})],Qt.prototype,"variant",2);mr([Ee()],Qt.prototype,"hasContent",2);Qt=mr([tt("ui-button")],Qt);function me(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error(typeof t=="number"?"[MobX] minified error nr: "+t+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+t)}var vd={};function ga(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:vd}var jc=Object.assign,Wo=Object.getOwnPropertyDescriptor,kt=Object.defineProperty,ro=Object.prototype,ui=[];Object.freeze(ui);var Uc={};Object.freeze(Uc);var xd=typeof Proxy<"u",wd=Object.toString();function qc(){xd||me("Proxy not available")}function Vc(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}var Hn=function(){};function _t(t){return typeof t=="function"}function An(t){var e=typeof t;switch(e){case"string":case"symbol":case"number":return!0}return!1}function ya(t){return t!==null&&typeof t=="object"}function en(t){if(!ya(t))return!1;var e=Object.getPrototypeOf(t);if(e==null)return!0;var n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n.toString()===wd}function Gc(t){var e=t?.constructor;return e?e.name==="GeneratorFunction"||e.displayName==="GeneratorFunction":!1}function va(t,e,n){kt(t,e,{enumerable:!1,writable:!0,configurable:!0,value:n})}function Wc(t,e,n){kt(t,e,{enumerable:!1,writable:!1,configurable:!0,value:n})}function nn(t,e){var n="isMobX"+t;return e.prototype[n]=!0,function(r){return ya(r)&&r[n]===!0}}function _r(t){return t!=null&&Object.prototype.toString.call(t)==="[object Map]"}function $d(t){var e=Object.getPrototypeOf(t),n=Object.getPrototypeOf(e),r=Object.getPrototypeOf(n);return r===null}function Pt(t){return t!=null&&Object.prototype.toString.call(t)==="[object Set]"}var Zc=typeof Object.getOwnPropertySymbols<"u";function Ad(t){var e=Object.keys(t);if(!Zc)return e;var n=Object.getOwnPropertySymbols(t);return n.length?[].concat(e,n.filter(function(r){return ro.propertyIsEnumerable.call(t,r)})):e}var xa=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Zc?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames;function Hc(t){return t===null?null:typeof t=="object"?""+t:t}function Ft(t,e){return ro.hasOwnProperty.call(t,e)}var kd=Object.getOwnPropertyDescriptors||function(e){var n={};return xa(e).forEach(function(r){n[r]=Wo(e,r)}),n};function Xe(t,e){return!!(t&e)}function Qe(t,e,n){return n?t|=e:t&=~e,t}function Zs(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Sd(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,zd(r.key),r)}}function br(t,e,n){return e&&Sd(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Kn(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=Id(t))||e){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kn(){return kn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kn.apply(null,arguments)}function Kc(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,di(t,e)}function di(t,e){return di=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},di(t,e)}function Ed(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function zd(t){var e=Ed(t,"string");return typeof e=="symbol"?e:e+""}function Id(t,e){if(t){if(typeof t=="string")return Zs(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Zs(t,e):void 0}}var $t=Symbol("mobx-stored-annotations");function St(t){function e(n,r){if(ao(r))return t.decorate_20223_(n,r);oo(n,r,t)}return Object.assign(e,t)}function oo(t,e,n){Ft(t,$t)||va(t,$t,kn({},t[$t])),Pd(n)||(t[$t][e]=n)}function Od(t){return Ft(t,$t)||va(t,$t,kn({},t[$t])),t[$t]}function ao(t){return typeof t=="object"&&typeof t.kind=="string"}var ce=Symbol("mobx administration"),rn=(function(){function t(n){n===void 0&&(n="Atom"),this.name_=void 0,this.flags_=0,this.observers_=new Set,this.lastAccessedBy_=0,this.lowestObserverState_=ge.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=n}var e=t.prototype;return e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},e.reportObserved=function(){return pf(this)},e.reportChanged=function(){st(),hf(this),lt()},e.toString=function(){return this.name_},br(t,[{key:"isBeingObserved",get:function(){return Xe(this.flags_,t.isBeingObservedMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isBeingObservedMask_,r)}},{key:"isPendingUnobservation",get:function(){return Xe(this.flags_,t.isPendingUnobservationMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isPendingUnobservationMask_,r)}},{key:"diffValue",get:function(){return Xe(this.flags_,t.diffValueMask_)?1:0},set:function(r){this.flags_=Qe(this.flags_,t.diffValueMask_,r===1)}}])})();rn.isBeingObservedMask_=1;rn.isPendingUnobservationMask_=2;rn.diffValueMask_=4;var Yi=nn("Atom",rn);function Jc(t,e,n){e===void 0&&(e=Hn),n===void 0&&(n=Hn);var r=new rn(t);return e!==Hn&&Mp(r,e),n!==Hn&&xf(r,n),r}function Cd(t,e){return Cf(t,e)}function Rd(t,e){return Object.is?Object.is(t,e):t===e?t!==0||1/t===1/e:t!==t&&e!==e}var Zo={structural:Cd,default:Rd};function Sn(t,e,n){return ns(t)?t:Array.isArray(t)?_e.array(t,{name:n}):en(t)?_e.object(t,void 0,{name:n}):_r(t)?_e.map(t,{name:n}):Pt(t)?_e.set(t,{name:n}):typeof t=="function"&&!sr(t)&&!qr(t)?Gc(t)?lr(t):Ur(n,t):t}function Td(t,e,n){if(t==null||po(t)||uo(t)||on(t)||dt(t))return t;if(Array.isArray(t))return _e.array(t,{name:n,deep:!1});if(en(t))return _e.object(t,void 0,{name:n,deep:!1});if(_r(t))return _e.map(t,{name:n,deep:!1});if(Pt(t))return _e.set(t,{name:n,deep:!1})}function wa(t){return t}function Ld(t,e){return Cf(t,e)?e:t}var Dd="override";function Pd(t){return t.annotationType_===Dd}function io(t,e){return{annotationType_:t,options_:e,make_:Bd,extend_:Md,decorate_20223_:Nd}}function Bd(t,e,n,r){var o;if((o=this.options_)!=null&&o.bound)return this.extend_(t,e,n,!1)===null?0:1;if(r===t.target_)return this.extend_(t,e,n,!1)===null?0:2;if(sr(n.value))return 1;var a=Yc(t,this,e,n,!1);return kt(r,e,a),2}function Md(t,e,n,r){var o=Yc(t,this,e,n);return t.defineProperty_(e,o,r)}function Nd(t,e){var n=e.kind,r=e.name,o=e.addInitializer,a=this,i=function(f){var d,m,h,c;return En((d=(m=a.options_)==null?void 0:m.name)!=null?d:r.toString(),f,(h=(c=a.options_)==null?void 0:c.autoAction)!=null?h:!1)};if(n=="field")return function(l){var f,d=l;return sr(d)||(d=i(d)),(f=a.options_)!=null&&f.bound&&(d=d.bind(this),d.isMobxAction=!0),d};if(n=="method"){var s;return sr(t)||(t=i(t)),(s=this.options_)!=null&&s.bound&&o(function(){var l=this,f=l[r].bind(l);f.isMobxAction=!0,l[r]=f}),t}me("Cannot apply '"+a.annotationType_+"' to '"+String(r)+"' (kind: "+n+"):"+(`
'`+a.annotationType_+"' can only be used on properties with a function value."))}function Fd(t,e,n,r){e.annotationType_,r.value}function Yc(t,e,n,r,o){var a,i,s,l,f,d,m;o===void 0&&(o=X.safeDescriptors),Fd(t,e,n,r);var h=r.value;if((a=e.options_)!=null&&a.bound){var c;h=h.bind((c=t.proxy_)!=null?c:t.target_)}return{value:En((i=(s=e.options_)==null?void 0:s.name)!=null?i:n.toString(),h,(l=(f=e.options_)==null?void 0:f.autoAction)!=null?l:!1,(d=e.options_)!=null&&d.bound?(m=t.proxy_)!=null?m:t.target_:void 0),configurable:o?t.isPlainObject_:!0,enumerable:!1,writable:!o}}function Xc(t,e){return{annotationType_:t,options_:e,make_:jd,extend_:Ud,decorate_20223_:qd}}function jd(t,e,n,r){var o;if(r===t.target_)return this.extend_(t,e,n,!1)===null?0:2;if((o=this.options_)!=null&&o.bound&&(!Ft(t.target_,e)||!qr(t.target_[e]))&&this.extend_(t,e,n,!1)===null)return 0;if(qr(n.value))return 1;var a=Qc(t,this,e,n,!1,!1);return kt(r,e,a),2}function Ud(t,e,n,r){var o,a=Qc(t,this,e,n,(o=this.options_)==null?void 0:o.bound);return t.defineProperty_(e,a,r)}function qd(t,e){var n,r=e.name,o=e.addInitializer;return qr(t)||(t=lr(t)),(n=this.options_)!=null&&n.bound&&o(function(){var a=this,i=a[r].bind(a);i.isMobXFlow=!0,a[r]=i}),t}function Vd(t,e,n,r){e.annotationType_,r.value}function Qc(t,e,n,r,o,a){a===void 0&&(a=X.safeDescriptors),Vd(t,e,n,r);var i=r.value;if(qr(i)||(i=lr(i)),o){var s;i=i.bind((s=t.proxy_)!=null?s:t.target_),i.isMobXFlow=!0}return{value:i,configurable:a?t.isPlainObject_:!0,enumerable:!1,writable:!a}}function Xi(t,e){return{annotationType_:t,options_:e,make_:Gd,extend_:Wd,decorate_20223_:Zd}}function Gd(t,e,n){return this.extend_(t,e,n,!1)===null?0:1}function Wd(t,e,n,r){return Hd(t,this,e,n),t.defineComputedProperty_(e,kn({},this.options_,{get:n.get,set:n.set}),r)}function Zd(t,e){var n=this,r=e.name,o=e.addInitializer;return o(function(){var a=gr(this)[ce],i=kn({},n.options_,{get:t,context:this});i.name||(i.name="ObservableObject."+r.toString()),a.values_.set(r,new bt(i))}),function(){return this[ce].getObservablePropValue_(r)}}function Hd(t,e,n,r){e.annotationType_,r.get}function $a(t,e){return{annotationType_:t,options_:e,make_:Kd,extend_:Jd,decorate_20223_:Yd}}function Kd(t,e,n){return this.extend_(t,e,n,!1)===null?0:1}function Jd(t,e,n,r){var o,a;return Xd(t,this),t.defineObservableProperty_(e,n.value,(o=(a=this.options_)==null?void 0:a.enhancer)!=null?o:Sn,r)}function Yd(t,e){var n=this,r=e.kind,o=e.name,a=new WeakSet;function i(s,l){var f,d,m=gr(s)[ce],h=new Jt(l,(f=(d=n.options_)==null?void 0:d.enhancer)!=null?f:Sn,"ObservableObject."+o.toString(),!1);m.values_.set(o,h),a.add(s)}if(r=="accessor")return{get:function(){return a.has(this)||i(this,t.get.call(this)),this[ce].getObservablePropValue_(o)},set:function(l){return a.has(this)||i(this,l),this[ce].setObservablePropValue_(o,l)},init:function(l){return a.has(this)||i(this,l),l}}}function Xd(t,e,n,r){e.annotationType_}var Qd="true",ep=ef();function ef(t){return{annotationType_:Qd,options_:t,make_:tp,extend_:np,decorate_20223_:rp}}function tp(t,e,n,r){var o,a;if(n.get)return Aa.make_(t,e,n,r);if(n.set){var i=sr(n.set)?n.set:En(e.toString(),n.set);return r===t.target_?t.defineProperty_(e,{configurable:X.safeDescriptors?t.isPlainObject_:!0,set:i})===null?0:2:(kt(r,e,{configurable:!0,set:i}),2)}if(r!==t.target_&&typeof n.value=="function"){var s;if(Gc(n.value)){var l,f=(l=this.options_)!=null&&l.autoBind?lr.bound:lr;return f.make_(t,e,n,r)}var d=(s=this.options_)!=null&&s.autoBind?Ur.bound:Ur;return d.make_(t,e,n,r)}var m=((o=this.options_)==null?void 0:o.deep)===!1?_e.ref:_e;if(typeof n.value=="function"&&(a=this.options_)!=null&&a.autoBind){var h;n.value=n.value.bind((h=t.proxy_)!=null?h:t.target_)}return m.make_(t,e,n,r)}function np(t,e,n,r){var o,a;if(n.get)return Aa.extend_(t,e,n,r);if(n.set)return t.defineProperty_(e,{configurable:X.safeDescriptors?t.isPlainObject_:!0,set:En(e.toString(),n.set)},r);if(typeof n.value=="function"&&(o=this.options_)!=null&&o.autoBind){var i;n.value=n.value.bind((i=t.proxy_)!=null?i:t.target_)}var s=((a=this.options_)==null?void 0:a.deep)===!1?_e.ref:_e;return s.extend_(t,e,n,r)}function rp(t,e){me("'"+this.annotationType_+"' cannot be used as a decorator")}var op="observable",ap="observable.ref",ip="observable.shallow",sp="observable.struct",tf={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(tf);function wo(t){return t||tf}var pi=$a(op),lp=$a(ap,{enhancer:wa}),cp=$a(ip,{enhancer:Td}),fp=$a(sp,{enhancer:Ld}),nf=St(pi);function $o(t){return t.deep===!0?Sn:t.deep===!1?wa:dp(t.defaultDecorator)}function up(t){var e;return t?(e=t.defaultDecorator)!=null?e:ef(t):void 0}function dp(t){var e,n;return t&&(e=(n=t.options_)==null?void 0:n.enhancer)!=null?e:Sn}function rf(t,e,n){if(ao(e))return pi.decorate_20223_(t,e);if(An(e)){oo(t,e,pi);return}return ns(t)?t:en(t)?_e.object(t,e,n):Array.isArray(t)?_e.array(t,e):_r(t)?_e.map(t,e):Pt(t)?_e.set(t,e):typeof t=="object"&&t!==null?t:_e.box(t,e)}jc(rf,nf);var pp={box:function(e,n){var r=wo(n);return new Jt(e,$o(r),r.name,!0,r.equals)},array:function(e,n){var r=wo(n);return(X.useProxies===!1||r.proxy===!1?ih:Jp)(e,$o(r),r.name)},map:function(e,n){var r=wo(n);return new kf(e,$o(r),r.name)},set:function(e,n){var r=wo(n);return new Sf(e,$o(r),r.name)},object:function(e,n,r){return Mn(function(){return jp(X.useProxies===!1||r?.proxy===!1?gr({},r):Zp({},r),e,n)})},ref:St(lp),shallow:St(cp),deep:nf,struct:St(fp)},_e=jc(rf,pp),of="computed",hp="computed.struct",hi=Xi(of),mp=Xi(hp,{equals:Zo.structural}),Aa=function(e,n){if(ao(n))return hi.decorate_20223_(e,n);if(An(n))return oo(e,n,hi);if(en(e))return St(Xi(of,e));var r=en(n)?n:{};return r.get=e,r.name||(r.name=e.name||""),new bt(r)};Object.assign(Aa,hi);Aa.struct=St(mp);var Hs,Ks,Ho=0,_p=1,bp=(Hs=(Ks=Wo(function(){},"name"))==null?void 0:Ks.configurable)!=null?Hs:!1,Js={value:"action",configurable:!0,writable:!1,enumerable:!1};function En(t,e,n,r){n===void 0&&(n=!1);function o(){return af(t,n,e,r||this,arguments)}return o.isMobxAction=!0,o.toString=function(){return e.toString()},bp&&(Js.value=t,kt(o,"name",Js)),o}function af(t,e,n,r,o){var a=gp(t,e);try{return n.apply(r,o)}catch(i){throw a.error_=i,i}finally{yp(a)}}function gp(t,e,n,r){var o=!1,a=0,i=X.trackingDerivation,s=!e||!i;st();var l=X.allowStateChanges;s&&(Bn(),l=Qi(!0));var f=ts(!0),d={runAsAction_:s,prevDerivation_:i,prevAllowStateChanges_:l,prevAllowStateReads_:f,notifySpy_:o,startTime_:a,actionId_:_p++,parentActionId_:Ho};return Ho=d.actionId_,d}function yp(t){Ho!==t.actionId_&&me(30),Ho=t.parentActionId_,t.error_!==void 0&&(X.suppressReactionErrors=!0),es(t.prevAllowStateChanges_),Rr(t.prevAllowStateReads_),lt(),t.runAsAction_&&jt(t.prevDerivation_),X.suppressReactionErrors=!1}function Qi(t){var e=X.allowStateChanges;return X.allowStateChanges=t,e}function es(t){X.allowStateChanges=t}var Jt=(function(t){function e(r,o,a,i,s){var l;return a===void 0&&(a="ObservableValue"),s===void 0&&(s=Zo.default),l=t.call(this,a)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=o,l.name_=a,l.equals=s,l.value_=o(r,void 0,a),l}Kc(e,t);var n=e.prototype;return n.dehanceValue=function(o){return this.dehancer!==void 0?this.dehancer(o):o},n.set=function(o){this.value_,o=this.prepareNewValue_(o),o!==X.UNCHANGED&&this.setNewValue_(o)},n.prepareNewValue_=function(o){if(at(this)){var a=it(this,{object:this,type:Et,newValue:o});if(!a)return X.UNCHANGED;o=a.newValue}return o=this.enhancer(o,this.value_,this.name_),this.equals(this.value_,o)?X.UNCHANGED:o},n.setNewValue_=function(o){var a=this.value_;this.value_=o,this.reportChanged(),pt(this)&&ht(this,{type:Et,object:this,newValue:o,oldValue:a})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(o){return lo(this,o)},n.observe_=function(o,a){return a&&o({observableKind:"value",debugObjectName:this.name_,object:this,type:Et,newValue:this.value_,oldValue:void 0}),co(this,o)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return Hc(this.get())},n[Symbol.toPrimitive]=function(){return this.valueOf()},e})(rn),vp=nn("ObservableValue",Jt),bt=(function(){function t(n){this.dependenciesState_=ge.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.observers_=new Set,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=ge.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Jo(null),this.name_=void 0,this.triggeredBy_=void 0,this.flags_=0,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Ko.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||me(31),this.derivation=n.get,this.name_=n.name||"ComputedValue",n.set&&(this.setter_=En("ComputedValue-setter",n.set)),this.equals_=n.equals||(n.compareStructural||n.struct?Zo.structural:Zo.default),this.scope_=n.context,this.requiresReaction_=n.requiresReaction,this.keepAlive_=!!n.keepAlive}var e=t.prototype;return e.onBecomeStale_=function(){kp(this)},e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},e.get=function(){if(this.isComputing&&me(32,this.name_,this.derivation),X.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)mi(this)&&(this.warnAboutUntrackedRead_(),st(),this.value_=this.computeValue_(!1),lt());else if(pf(this),mi(this)){var r=X.trackingContext;this.keepAlive_&&!r&&(X.trackingContext=this),this.trackAndCompute()&&Ap(this),X.trackingContext=r}var o=this.value_;if(Lo(o))throw o.cause;return o},e.set=function(r){if(this.setter_){this.isRunningSetter&&me(33,this.name_),this.isRunningSetter=!0;try{this.setter_.call(this.scope_,r)}finally{this.isRunningSetter=!1}}else me(34,this.name_)},e.trackAndCompute=function(){var r=this.value_,o=this.dependenciesState_===ge.NOT_TRACKING_,a=this.computeValue_(!0),i=o||Lo(r)||Lo(a)||!this.equals_(r,a);return i&&(this.value_=a),i},e.computeValue_=function(r){this.isComputing=!0;var o=Qi(!1),a;if(r)a=sf(this,this.derivation,this.scope_);else if(X.disableErrorBoundaries===!0)a=this.derivation.call(this.scope_);else try{a=this.derivation.call(this.scope_)}catch(i){a=new Jo(i)}return es(o),this.isComputing=!1,a},e.suspend_=function(){this.keepAlive_||(_i(this),this.value_=void 0)},e.observe_=function(r,o){var a=this,i=!0,s=void 0;return vf(function(){var l=a.get();if(!i||o){var f=Bn();r({observableKind:"computed",debugObjectName:a.name_,type:Et,object:a,newValue:l,oldValue:s}),jt(f)}i=!1,s=l})},e.warnAboutUntrackedRead_=function(){},e.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},e.valueOf=function(){return Hc(this.get())},e[Symbol.toPrimitive]=function(){return this.valueOf()},br(t,[{key:"isComputing",get:function(){return Xe(this.flags_,t.isComputingMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isComputingMask_,r)}},{key:"isRunningSetter",get:function(){return Xe(this.flags_,t.isRunningSetterMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isRunningSetterMask_,r)}},{key:"isBeingObserved",get:function(){return Xe(this.flags_,t.isBeingObservedMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isBeingObservedMask_,r)}},{key:"isPendingUnobservation",get:function(){return Xe(this.flags_,t.isPendingUnobservationMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isPendingUnobservationMask_,r)}},{key:"diffValue",get:function(){return Xe(this.flags_,t.diffValueMask_)?1:0},set:function(r){this.flags_=Qe(this.flags_,t.diffValueMask_,r===1)}}])})();bt.isComputingMask_=1;bt.isRunningSetterMask_=2;bt.isBeingObservedMask_=4;bt.isPendingUnobservationMask_=8;bt.diffValueMask_=16;var so=nn("ComputedValue",bt),ge;(function(t){t[t.NOT_TRACKING_=-1]="NOT_TRACKING_",t[t.UP_TO_DATE_=0]="UP_TO_DATE_",t[t.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",t[t.STALE_=2]="STALE_"})(ge||(ge={}));var Ko;(function(t){t[t.NONE=0]="NONE",t[t.LOG=1]="LOG",t[t.BREAK=2]="BREAK"})(Ko||(Ko={}));var Jo=function(e){this.cause=void 0,this.cause=e};function Lo(t){return t instanceof Jo}function mi(t){switch(t.dependenciesState_){case ge.UP_TO_DATE_:return!1;case ge.NOT_TRACKING_:case ge.STALE_:return!0;case ge.POSSIBLY_STALE_:{for(var e=ts(!0),n=Bn(),r=t.observing_,o=r.length,a=0;a<o;a++){var i=r[a];if(so(i)){if(X.disableErrorBoundaries)i.get();else try{i.get()}catch{return jt(n),Rr(e),!0}if(t.dependenciesState_===ge.STALE_)return jt(n),Rr(e),!0}}return cf(t),jt(n),Rr(e),!1}}}function sf(t,e,n){var r=ts(!0);cf(t),t.newObserving_=new Array(t.runId_===0?100:t.observing_.length),t.unboundDepsCount_=0,t.runId_=++X.runId;var o=X.trackingDerivation;X.trackingDerivation=t,X.inBatch++;var a;if(X.disableErrorBoundaries===!0)a=e.call(n);else try{a=e.call(n)}catch(i){a=new Jo(i)}return X.inBatch--,X.trackingDerivation=o,xp(t),Rr(r),a}function xp(t){for(var e=t.observing_,n=t.observing_=t.newObserving_,r=ge.UP_TO_DATE_,o=0,a=t.unboundDepsCount_,i=0;i<a;i++){var s=n[i];s.diffValue===0&&(s.diffValue=1,o!==i&&(n[o]=s),o++),s.dependenciesState_>r&&(r=s.dependenciesState_)}for(n.length=o,t.newObserving_=null,a=e.length;a--;){var l=e[a];l.diffValue===0&&uf(l,t),l.diffValue=0}for(;o--;){var f=n[o];f.diffValue===1&&(f.diffValue=0,$p(f,t))}r!==ge.UP_TO_DATE_&&(t.dependenciesState_=r,t.onBecomeStale_())}function _i(t){var e=t.observing_;t.observing_=[];for(var n=e.length;n--;)uf(e[n],t);t.dependenciesState_=ge.NOT_TRACKING_}function lf(t){var e=Bn();try{return t()}finally{jt(e)}}function Bn(){var t=X.trackingDerivation;return X.trackingDerivation=null,t}function jt(t){X.trackingDerivation=t}function ts(t){var e=X.allowStateReads;return X.allowStateReads=t,e}function Rr(t){X.allowStateReads=t}function cf(t){if(t.dependenciesState_!==ge.UP_TO_DATE_){t.dependenciesState_=ge.UP_TO_DATE_;for(var e=t.observing_,n=e.length;n--;)e[n].lowestObserverState_=ge.UP_TO_DATE_}}var Do=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0},Po=!0,ff=!1,X=(function(){var t=ga();return t.__mobxInstanceCount>0&&!t.__mobxGlobals&&(Po=!1),t.__mobxGlobals&&t.__mobxGlobals.version!==new Do().version&&(Po=!1),Po?t.__mobxGlobals?(t.__mobxInstanceCount+=1,t.__mobxGlobals.UNCHANGED||(t.__mobxGlobals.UNCHANGED={}),t.__mobxGlobals):(t.__mobxInstanceCount=1,t.__mobxGlobals=new Do):(setTimeout(function(){ff||me(35)},1),new Do)})();function wp(){if((X.pendingReactions.length||X.inBatch||X.isRunningReactions)&&me(36),ff=!0,Po){var t=ga();--t.__mobxInstanceCount===0&&(t.__mobxGlobals=void 0),X=new Do}}function $p(t,e){t.observers_.add(e),t.lowestObserverState_>e.dependenciesState_&&(t.lowestObserverState_=e.dependenciesState_)}function uf(t,e){t.observers_.delete(e),t.observers_.size===0&&df(t)}function df(t){t.isPendingUnobservation===!1&&(t.isPendingUnobservation=!0,X.pendingUnobservations.push(t))}function st(){X.inBatch++}function lt(){if(--X.inBatch===0){mf();for(var t=X.pendingUnobservations,e=0;e<t.length;e++){var n=t[e];n.isPendingUnobservation=!1,n.observers_.size===0&&(n.isBeingObserved&&(n.isBeingObserved=!1,n.onBUO()),n instanceof bt&&n.suspend_())}X.pendingUnobservations=[]}}function pf(t){var e=X.trackingDerivation;return e!==null?(e.runId_!==t.lastAccessedBy_&&(t.lastAccessedBy_=e.runId_,e.newObserving_[e.unboundDepsCount_++]=t,!t.isBeingObserved&&X.trackingContext&&(t.isBeingObserved=!0,t.onBO())),t.isBeingObserved):(t.observers_.size===0&&X.inBatch>0&&df(t),!1)}function hf(t){t.lowestObserverState_!==ge.STALE_&&(t.lowestObserverState_=ge.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===ge.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=ge.STALE_}))}function Ap(t){t.lowestObserverState_!==ge.STALE_&&(t.lowestObserverState_=ge.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===ge.POSSIBLY_STALE_?e.dependenciesState_=ge.STALE_:e.dependenciesState_===ge.UP_TO_DATE_&&(t.lowestObserverState_=ge.UP_TO_DATE_)}))}function kp(t){t.lowestObserverState_===ge.UP_TO_DATE_&&(t.lowestObserverState_=ge.POSSIBLY_STALE_,t.observers_.forEach(function(e){e.dependenciesState_===ge.UP_TO_DATE_&&(e.dependenciesState_=ge.POSSIBLY_STALE_,e.onBecomeStale_())}))}var tn=(function(){function t(n,r,o,a){n===void 0&&(n="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=ge.NOT_TRACKING_,this.runId_=0,this.unboundDepsCount_=0,this.flags_=0,this.isTracing_=Ko.NONE,this.name_=n,this.onInvalidate_=r,this.errorHandler_=o,this.requiresObservable_=a}var e=t.prototype;return e.onBecomeStale_=function(){this.schedule_()},e.schedule_=function(){this.isScheduled||(this.isScheduled=!0,X.pendingReactions.push(this),mf())},e.runReaction_=function(){if(!this.isDisposed){st(),this.isScheduled=!1;var r=X.trackingContext;if(X.trackingContext=this,mi(this)){this.isTrackPending=!0;try{this.onInvalidate_()}catch(o){this.reportExceptionInDerivation_(o)}}X.trackingContext=r,lt()}},e.track=function(r){if(!this.isDisposed){st(),this.isRunning=!0;var o=X.trackingContext;X.trackingContext=this;var a=sf(this,r,void 0);X.trackingContext=o,this.isRunning=!1,this.isTrackPending=!1,this.isDisposed&&_i(this),Lo(a)&&this.reportExceptionInDerivation_(a.cause),lt()}},e.reportExceptionInDerivation_=function(r){var o=this;if(this.errorHandler_){this.errorHandler_(r,this);return}if(X.disableErrorBoundaries)throw r;var a="[mobx] uncaught error in '"+this+"'";X.suppressReactionErrors||console.error(a,r),X.globalReactionErrorHandlers.forEach(function(i){return i(r,o)})},e.dispose=function(){this.isDisposed||(this.isDisposed=!0,this.isRunning||(st(),_i(this),lt()))},e.getDisposer_=function(r){var o=this,a=function i(){o.dispose(),r==null||r.removeEventListener==null||r.removeEventListener("abort",i)};return r==null||r.addEventListener==null||r.addEventListener("abort",a),a[ce]=this,"dispose"in Symbol&&typeof Symbol.dispose=="symbol"&&(a[Symbol.dispose]=a),a},e.toString=function(){return"Reaction["+this.name_+"]"},e.trace=function(r){},br(t,[{key:"isDisposed",get:function(){return Xe(this.flags_,t.isDisposedMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isDisposedMask_,r)}},{key:"isScheduled",get:function(){return Xe(this.flags_,t.isScheduledMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isScheduledMask_,r)}},{key:"isTrackPending",get:function(){return Xe(this.flags_,t.isTrackPendingMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isTrackPendingMask_,r)}},{key:"isRunning",get:function(){return Xe(this.flags_,t.isRunningMask_)},set:function(r){this.flags_=Qe(this.flags_,t.isRunningMask_,r)}},{key:"diffValue",get:function(){return Xe(this.flags_,t.diffValueMask_)?1:0},set:function(r){this.flags_=Qe(this.flags_,t.diffValueMask_,r===1)}}])})();tn.isDisposedMask_=1;tn.isScheduledMask_=2;tn.isTrackPendingMask_=4;tn.isRunningMask_=8;tn.diffValueMask_=16;var Sp=100,bi=function(e){return e()};function mf(){X.inBatch>0||X.isRunningReactions||bi(Ep)}function Ep(){X.isRunningReactions=!0;for(var t=X.pendingReactions,e=0;t.length>0;){++e===Sp&&(console.error("[mobx] cycle in reaction: "+t[0]),t.splice(0));for(var n=t.splice(0),r=0,o=n.length;r<o;r++)n[r].runReaction_()}X.isRunningReactions=!1}var Yo=nn("Reaction",tn);function zp(t){var e=bi;bi=function(r){return t(function(){return e(r)})}}function Tr(){return!1}function Ip(t){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var _f="action",Op="action.bound",bf="autoAction",Cp="autoAction.bound",gf="<unnamed action>",gi=io(_f),Rp=io(Op,{bound:!0}),yi=io(bf,{autoAction:!0}),Tp=io(Cp,{autoAction:!0,bound:!0});function yf(t){var e=function(r,o){if(_t(r))return En(r.name||gf,r,t);if(_t(o))return En(r,o,t);if(ao(o))return(t?yi:gi).decorate_20223_(r,o);if(An(o))return oo(r,o,t?yi:gi);if(An(r))return St(io(t?bf:_f,{name:r,autoAction:t}))};return e}var Oe=yf(!1);Object.assign(Oe,gi);var Ur=yf(!0);Object.assign(Ur,yi);Oe.bound=St(Rp);Ur.bound=St(Tp);function te(t){return af(t.name||gf,!1,t,this,void 0)}function sr(t){return _t(t)&&t.isMobxAction===!0}function vf(t,e){var n,r,o,a;e===void 0&&(e=Uc);var i=(n=(r=e)==null?void 0:r.name)!=null?n:"Autorun",s=!e.scheduler&&!e.delay,l;if(s)l=new tn(i,function(){this.track(m)},e.onError,e.requiresObservable);else{var f=Dp(e),d=!1;l=new tn(i,function(){d||(d=!0,f(function(){d=!1,l.isDisposed||l.track(m)}))},e.onError,e.requiresObservable)}function m(){t(l)}return(o=e)!=null&&(o=o.signal)!=null&&o.aborted||l.schedule_(),l.getDisposer_((a=e)==null?void 0:a.signal)}var Lp=function(e){return e()};function Dp(t){return t.scheduler?t.scheduler:t.delay?function(e){return setTimeout(e,t.delay)}:Lp}var Pp="onBO",Bp="onBUO";function Mp(t,e,n){return wf(Pp,t,e,n)}function xf(t,e,n){return wf(Bp,t,e,n)}function wf(t,e,n,r){var o=vi(e),a=_t(r)?r:n,i=t+"L";return o[i]?o[i].add(a):o[i]=new Set([a]),function(){var s=o[i];s&&(s.delete(a),s.size===0&&delete o[i])}}var Np="never",Wa="always";function Fp(t){t.isolateGlobalState===!0&&wp();var e=t.useProxies;e!==void 0&&(X.useProxies=e===Wa?!0:e===Np?!1:typeof Proxy<"u"),e==="ifavailable"&&(X.verifyProxies=!0);{var n=Wa;X.enforceActions=n,X.allowStateChanges=!(n===!0||n===Wa)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(r){r in t&&(X[r]=!!t[r])}),X.allowStateReads=!X.observableRequiresReaction,t.reactionScheduler&&zp(t.reactionScheduler)}function jp(t,e,n,r){var o=kd(e);return Mn(function(){var a=gr(t,r)[ce];xa(o).forEach(function(i){a.extend_(i,o[i],n&&i in n?n[i]:!0)})}),t}var Up=0;function $f(){this.message="FLOW_CANCELLED"}$f.prototype=Object.create(Error.prototype);var Za=Xc("flow"),qp=Xc("flow.bound",{bound:!0}),lr=Object.assign(function(e,n){if(ao(n))return Za.decorate_20223_(e,n);if(An(n))return oo(e,n,Za);var r=e,o=r.name||"<unnamed flow>",a=function(){var s=this,l=arguments,f=++Up,d=Oe(o+" - runid: "+f+" - init",r).apply(s,l),m,h=void 0,c=new Promise(function(u,p){var _=0;m=p;function b(v){h=void 0;var $;try{$=Oe(o+" - runid: "+f+" - yield "+_++,d.next).call(d,v)}catch(k){return p(k)}y($)}function g(v){h=void 0;var $;try{$=Oe(o+" - runid: "+f+" - yield "+_++,d.throw).call(d,v)}catch(k){return p(k)}y($)}function y(v){if(_t(v?.then)){v.then(y,p);return}return v.done?u(v.value):(h=Promise.resolve(v.value),h.then(b,g))}b(void 0)});return c.cancel=Oe(o+" - runid: "+f+" - cancel",function(){try{h&&Ys(h);var u=d.return(void 0),p=Promise.resolve(u.value);p.then(Hn,Hn),Ys(p),m(new $f)}catch(_){m(_)}}),c};return a.isMobXFlow=!0,a},Za);lr.bound=St(qp);function Ys(t){_t(t.cancel)&&t.cancel()}function qr(t){return t?.isMobXFlow===!0}function Vp(t,e){return t?po(t)||!!t[ce]||Yi(t)||Yo(t)||so(t):!1}function ns(t){return Vp(t)}function Gp(t){if(po(t))return t[ce].ownKeys_();me(38)}function Ao(t,e,n){return t.set(e,n),n}function Zn(t,e){if(t==null||typeof t!="object"||t instanceof Date||!ns(t))return t;if(vp(t)||so(t))return Zn(t.get(),e);if(e.has(t))return e.get(t);if(uo(t)){var n=Ao(e,t,new Array(t.length));return t.forEach(function(i,s){n[s]=Zn(i,e)}),n}if(dt(t)){var r=Ao(e,t,new Set);return t.forEach(function(i){r.add(Zn(i,e))}),r}if(on(t)){var o=Ao(e,t,new Map);return t.forEach(function(i,s){o.set(s,Zn(i,e))}),o}else{var a=Ao(e,t,{});return Gp(t).forEach(function(i){ro.propertyIsEnumerable.call(t,i)&&(a[i]=Zn(t[i],e))}),a}}function Ye(t,e){return Zn(t,new Map)}function Bt(t,e){e===void 0&&(e=void 0),st();try{return t.apply(e)}finally{lt()}}function qn(t){return t[ce]}var Wp={has:function(e,n){return qn(e).has_(n)},get:function(e,n){return qn(e).get_(n)},set:function(e,n,r){var o;return An(n)?(o=qn(e).set_(n,r,!0))!=null?o:!0:!1},deleteProperty:function(e,n){var r;return An(n)?(r=qn(e).delete_(n,!0))!=null?r:!0:!1},defineProperty:function(e,n,r){var o;return(o=qn(e).defineProperty_(n,r))!=null?o:!0},ownKeys:function(e){return qn(e).ownKeys_()},preventExtensions:function(e){me(13)}};function Zp(t,e){var n,r;return qc(),t=gr(t,e),(r=(n=t[ce]).proxy_)!=null?r:n.proxy_=new Proxy(t,Wp)}function at(t){return t.interceptors_!==void 0&&t.interceptors_.length>0}function lo(t,e){var n=t.interceptors_||(t.interceptors_=[]);return n.push(e),Vc(function(){var r=n.indexOf(e);r!==-1&&n.splice(r,1)})}function it(t,e){var n=Bn();try{for(var r=[].concat(t.interceptors_||[]),o=0,a=r.length;o<a&&(e=r[o](e),e&&!e.type&&me(14),!!e);o++);return e}finally{jt(n)}}function pt(t){return t.changeListeners_!==void 0&&t.changeListeners_.length>0}function co(t,e){var n=t.changeListeners_||(t.changeListeners_=[]);return n.push(e),Vc(function(){var r=n.indexOf(e);r!==-1&&n.splice(r,1)})}function ht(t,e){var n=Bn(),r=t.changeListeners_;if(r){r=r.slice();for(var o=0,a=r.length;o<a;o++)r[o](e);jt(n)}}function fo(t,e,n){return Mn(function(){var r,o=gr(t,n)[ce];(r=e)!=null||(e=Od(t)),xa(e).forEach(function(a){return o.make_(a,e[a])})}),t}var Xs="splice",Et="update",Hp=1e4,Kp={get:function(e,n){var r=e[ce];return n===ce?r:n==="length"?r.getArrayLength_():typeof n=="string"&&!isNaN(n)?r.get_(parseInt(n)):Ft(Xo,n)?Xo[n]:e[n]},set:function(e,n,r){var o=e[ce];return n==="length"&&o.setArrayLength_(r),typeof n=="symbol"||isNaN(n)?e[n]=r:o.set_(parseInt(n),r),!0},preventExtensions:function(){me(15)}},rs=(function(){function t(n,r,o,a){n===void 0&&(n="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=o,this.legacyMode_=a,this.atom_=new rn(n),this.enhancer_=function(i,s){return r(i,s,"ObservableArray[..]")}}var e=t.prototype;return e.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},e.dehanceValues_=function(r){return this.dehancer!==void 0&&r.length>0?r.map(this.dehancer):r},e.intercept_=function(r){return lo(this,r)},e.observe_=function(r,o){return o===void 0&&(o=!1),o&&r({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),co(this,r)},e.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},e.setArrayLength_=function(r){(typeof r!="number"||isNaN(r)||r<0)&&me("Out of range: "+r);var o=this.values_.length;if(r!==o)if(r>o){for(var a=new Array(r-o),i=0;i<r-o;i++)a[i]=void 0;this.spliceWithArray_(o,0,a)}else this.spliceWithArray_(r,o-r)},e.updateArrayLength_=function(r,o){r!==this.lastKnownLength_&&me(16),this.lastKnownLength_+=o,this.legacyMode_&&o>0&&Of(r+o+1)},e.spliceWithArray_=function(r,o,a){var i=this;this.atom_;var s=this.values_.length;if(r===void 0?r=0:r>s?r=s:r<0&&(r=Math.max(0,s+r)),arguments.length===1?o=s-r:o==null?o=0:o=Math.max(0,Math.min(o,s-r)),a===void 0&&(a=ui),at(this)){var l=it(this,{object:this.proxy_,type:Xs,index:r,removedCount:o,added:a});if(!l)return ui;o=l.removedCount,a=l.added}if(a=a.length===0?a:a.map(function(m){return i.enhancer_(m,void 0)}),this.legacyMode_){var f=a.length-o;this.updateArrayLength_(s,f)}var d=this.spliceItemsIntoValues_(r,o,a);return(o!==0||a.length!==0)&&this.notifyArraySplice_(r,a,d),this.dehanceValues_(d)},e.spliceItemsIntoValues_=function(r,o,a){if(a.length<Hp){var i;return(i=this.values_).splice.apply(i,[r,o].concat(a))}else{var s=this.values_.slice(r,r+o),l=this.values_.slice(r+o);this.values_.length+=a.length-o;for(var f=0;f<a.length;f++)this.values_[r+f]=a[f];for(var d=0;d<l.length;d++)this.values_[r+a.length+d]=l[d];return s}},e.notifyArrayChildUpdate_=function(r,o,a){var i=!this.owned_&&Tr(),s=pt(this),l=s||i?{observableKind:"array",object:this.proxy_,type:Et,debugObjectName:this.atom_.name_,index:r,newValue:o,oldValue:a}:null;this.atom_.reportChanged(),s&&ht(this,l)},e.notifyArraySplice_=function(r,o,a){var i=!this.owned_&&Tr(),s=pt(this),l=s||i?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:Xs,index:r,removed:a,added:o,removedCount:a.length,addedCount:o.length}:null;this.atom_.reportChanged(),s&&ht(this,l)},e.get_=function(r){if(this.legacyMode_&&r>=this.values_.length){console.warn("[mobx] Out of bounds read: "+r);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[r])},e.set_=function(r,o){var a=this.values_;if(this.legacyMode_&&r>a.length&&me(17,r,a.length),r<a.length){this.atom_;var i=a[r];if(at(this)){var s=it(this,{type:Et,object:this.proxy_,index:r,newValue:o});if(!s)return;o=s.newValue}o=this.enhancer_(o,i);var l=o!==i;l&&(a[r]=o,this.notifyArrayChildUpdate_(r,o,i))}else{for(var f=new Array(r+1-a.length),d=0;d<f.length-1;d++)f[d]=void 0;f[f.length-1]=o,this.spliceWithArray_(a.length,0,f)}},t})();function Jp(t,e,n,r){return n===void 0&&(n="ObservableArray"),r===void 0&&(r=!1),qc(),Mn(function(){var o=new rs(n,e,r,!1);Wc(o.values_,ce,o);var a=new Proxy(o.values_,Kp);return o.proxy_=a,t&&t.length&&o.spliceWithArray_(0,0,t),a})}var Xo={clear:function(){return this.splice(0)},replace:function(e){var n=this[ce];return n.spliceWithArray_(0,n.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];var i=this[ce];switch(arguments.length){case 0:return[];case 1:return i.spliceWithArray_(e);case 2:return i.spliceWithArray_(e,n)}return i.spliceWithArray_(e,n,o)},spliceWithArray:function(e,n,r){return this[ce].spliceWithArray_(e,n,r)},push:function(){for(var e=this[ce],n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e.spliceWithArray_(e.values_.length,0,r),e.values_.length},pop:function(){return this.splice(Math.max(this[ce].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[ce],n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e.spliceWithArray_(0,0,r),e.values_.length},reverse:function(){return X.trackingDerivation&&me(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){X.trackingDerivation&&me(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var n=this[ce],r=n.dehanceValues_(n.values_).indexOf(e);return r>-1?(this.splice(r,1),!0):!1}};ze("at",nt);ze("concat",nt);ze("flat",nt);ze("includes",nt);ze("indexOf",nt);ze("join",nt);ze("lastIndexOf",nt);ze("slice",nt);ze("toString",nt);ze("toLocaleString",nt);ze("toSorted",nt);ze("toSpliced",nt);ze("with",nt);ze("every",gt);ze("filter",gt);ze("find",gt);ze("findIndex",gt);ze("findLast",gt);ze("findLastIndex",gt);ze("flatMap",gt);ze("forEach",gt);ze("map",gt);ze("some",gt);ze("toReversed",gt);ze("reduce",Af);ze("reduceRight",Af);function ze(t,e){typeof Array.prototype[t]=="function"&&(Xo[t]=e(t))}function nt(t){return function(){var e=this[ce];e.atom_.reportObserved();var n=e.dehanceValues_(e.values_);return n[t].apply(n,arguments)}}function gt(t){return function(e,n){var r=this,o=this[ce];o.atom_.reportObserved();var a=o.dehanceValues_(o.values_);return a[t](function(i,s){return e.call(n,i,s,r)})}}function Af(t){return function(){var e=this,n=this[ce];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),o=arguments[0];return arguments[0]=function(a,i,s){return o(a,i,s,e)},r[t].apply(r,arguments)}}var Yp=nn("ObservableArrayAdministration",rs);function uo(t){return ya(t)&&Yp(t[ce])}var Xp={},Kt="add",Qo="delete",kf=(function(){function t(n,r,o){var a=this;r===void 0&&(r=Sn),o===void 0&&(o="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[ce]=Xp,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=r,this.name_=o,_t(Map)||me(18),Mn(function(){a.keysAtom_=Jc("ObservableMap.keys()"),a.data_=new Map,a.hasMap_=new Map,n&&a.merge(n)})}var e=t.prototype;return e.has_=function(r){return this.data_.has(r)},e.has=function(r){var o=this;if(!X.trackingDerivation)return this.has_(r);var a=this.hasMap_.get(r);if(!a){var i=a=new Jt(this.has_(r),wa,"ObservableMap.key?",!1);this.hasMap_.set(r,i),xf(i,function(){return o.hasMap_.delete(r)})}return a.get()},e.set=function(r,o){var a=this.has_(r);if(at(this)){var i=it(this,{type:a?Et:Kt,object:this,newValue:o,name:r});if(!i)return this;o=i.newValue}return a?this.updateValue_(r,o):this.addValue_(r,o),this},e.delete=function(r){var o=this;if(this.keysAtom_,at(this)){var a=it(this,{type:Qo,object:this,name:r});if(!a)return!1}if(this.has_(r)){var i=Tr(),s=pt(this),l=s||i?{observableKind:"map",debugObjectName:this.name_,type:Qo,object:this,oldValue:this.data_.get(r).value_,name:r}:null;return Bt(function(){var f;o.keysAtom_.reportChanged(),(f=o.hasMap_.get(r))==null||f.setNewValue_(!1);var d=o.data_.get(r);d.setNewValue_(void 0),o.data_.delete(r)}),s&&ht(this,l),!0}return!1},e.updateValue_=function(r,o){var a=this.data_.get(r);if(o=a.prepareNewValue_(o),o!==X.UNCHANGED){var i=Tr(),s=pt(this),l=s||i?{observableKind:"map",debugObjectName:this.name_,type:Et,object:this,oldValue:a.value_,name:r,newValue:o}:null;a.setNewValue_(o),s&&ht(this,l)}},e.addValue_=function(r,o){var a=this;this.keysAtom_,Bt(function(){var f,d=new Jt(o,a.enhancer_,"ObservableMap.key",!1);a.data_.set(r,d),o=d.value_,(f=a.hasMap_.get(r))==null||f.setNewValue_(!0),a.keysAtom_.reportChanged()});var i=Tr(),s=pt(this),l=s||i?{observableKind:"map",debugObjectName:this.name_,type:Kt,object:this,name:r,newValue:o}:null;s&&ht(this,l)},e.get=function(r){return this.has(r)?this.dehanceValue_(this.data_.get(r).get()):this.dehanceValue_(void 0)},e.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},e.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},e.values=function(){var r=this,o=this.keys();return Qs({next:function(){var i=o.next(),s=i.done,l=i.value;return{done:s,value:s?void 0:r.get(l)}}})},e.entries=function(){var r=this,o=this.keys();return Qs({next:function(){var i=o.next(),s=i.done,l=i.value;return{done:s,value:s?void 0:[l,r.get(l)]}}})},e[Symbol.iterator]=function(){return this.entries()},e.forEach=function(r,o){for(var a=Kn(this),i;!(i=a()).done;){var s=i.value,l=s[0],f=s[1];r.call(o,f,l,this)}},e.merge=function(r){var o=this;return on(r)&&(r=new Map(r)),Bt(function(){en(r)?Ad(r).forEach(function(a){return o.set(a,r[a])}):Array.isArray(r)?r.forEach(function(a){var i=a[0],s=a[1];return o.set(i,s)}):_r(r)?($d(r)||me(19,r),r.forEach(function(a,i){return o.set(i,a)})):r!=null&&me(20,r)}),this},e.clear=function(){var r=this;Bt(function(){lf(function(){for(var o=Kn(r.keys()),a;!(a=o()).done;){var i=a.value;r.delete(i)}})})},e.replace=function(r){var o=this;return Bt(function(){for(var a=Qp(r),i=new Map,s=!1,l=Kn(o.data_.keys()),f;!(f=l()).done;){var d=f.value;if(!a.has(d)){var m=o.delete(d);if(m)s=!0;else{var h=o.data_.get(d);i.set(d,h)}}}for(var c=Kn(a.entries()),u;!(u=c()).done;){var p=u.value,_=p[0],b=p[1],g=o.data_.has(_);if(o.set(_,b),o.data_.has(_)){var y=o.data_.get(_);i.set(_,y),g||(s=!0)}}if(!s)if(o.data_.size!==i.size)o.keysAtom_.reportChanged();else for(var v=o.data_.keys(),$=i.keys(),k=v.next(),A=$.next();!k.done;){if(k.value!==A.value){o.keysAtom_.reportChanged();break}k=v.next(),A=$.next()}o.data_=i}),this},e.toString=function(){return"[object ObservableMap]"},e.toJSON=function(){return Array.from(this)},e.observe_=function(r,o){return co(this,r)},e.intercept_=function(r){return lo(this,r)},br(t,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Symbol.toStringTag,get:function(){return"Map"}}])})(),on=nn("ObservableMap",kf);function Qs(t){return t[Symbol.toStringTag]="MapIterator",as(t)}function Qp(t){if(_r(t)||on(t))return t;if(Array.isArray(t))return new Map(t);if(en(t)){var e=new Map;for(var n in t)e.set(n,t[n]);return e}else return me(21,t)}var eh={},Sf=(function(){function t(n,r,o){var a=this;r===void 0&&(r=Sn),o===void 0&&(o="ObservableSet"),this.name_=void 0,this[ce]=eh,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=o,_t(Set)||me(22),this.enhancer_=function(i,s){return r(i,s,o)},Mn(function(){a.atom_=Jc(a.name_),n&&a.replace(n)})}var e=t.prototype;return e.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},e.clear=function(){var r=this;Bt(function(){lf(function(){for(var o=Kn(r.data_.values()),a;!(a=o()).done;){var i=a.value;r.delete(i)}})})},e.forEach=function(r,o){for(var a=Kn(this),i;!(i=a()).done;){var s=i.value;r.call(o,s,s,this)}},e.add=function(r){var o=this;if(this.atom_,at(this)){var a=it(this,{type:Kt,object:this,newValue:r});if(!a)return this;r=a.newValue}if(!this.has(r)){Bt(function(){o.data_.add(o.enhancer_(r,void 0)),o.atom_.reportChanged()});var i=!1,s=pt(this),l=s||i?{observableKind:"set",debugObjectName:this.name_,type:Kt,object:this,newValue:r}:null;s&&ht(this,l)}return this},e.delete=function(r){var o=this;if(at(this)){var a=it(this,{type:Qo,object:this,oldValue:r});if(!a)return!1}if(this.has(r)){var i=!1,s=pt(this),l=s||i?{observableKind:"set",debugObjectName:this.name_,type:Qo,object:this,oldValue:r}:null;return Bt(function(){o.atom_.reportChanged(),o.data_.delete(r)}),s&&ht(this,l),!0}return!1},e.has=function(r){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(r))},e.entries=function(){var r=this.values();return el({next:function(){var a=r.next(),i=a.value,s=a.done;return s?{value:void 0,done:s}:{value:[i,i],done:s}}})},e.keys=function(){return this.values()},e.values=function(){this.atom_.reportObserved();var r=this,o=this.data_.values();return el({next:function(){var i=o.next(),s=i.value,l=i.done;return l?{value:void 0,done:l}:{value:r.dehanceValue_(s),done:l}}})},e.intersection=function(r){if(Pt(r)&&!dt(r))return r.intersection(this);var o=new Set(this);return o.intersection(r)},e.union=function(r){if(Pt(r)&&!dt(r))return r.union(this);var o=new Set(this);return o.union(r)},e.difference=function(r){return new Set(this).difference(r)},e.symmetricDifference=function(r){if(Pt(r)&&!dt(r))return r.symmetricDifference(this);var o=new Set(this);return o.symmetricDifference(r)},e.isSubsetOf=function(r){return new Set(this).isSubsetOf(r)},e.isSupersetOf=function(r){return new Set(this).isSupersetOf(r)},e.isDisjointFrom=function(r){if(Pt(r)&&!dt(r))return r.isDisjointFrom(this);var o=new Set(this);return o.isDisjointFrom(r)},e.replace=function(r){var o=this;return dt(r)&&(r=new Set(r)),Bt(function(){Array.isArray(r)?(o.clear(),r.forEach(function(a){return o.add(a)})):Pt(r)?(o.clear(),r.forEach(function(a){return o.add(a)})):r!=null&&me("Cannot initialize set from "+r)}),this},e.observe_=function(r,o){return co(this,r)},e.intercept_=function(r){return lo(this,r)},e.toJSON=function(){return Array.from(this)},e.toString=function(){return"[object ObservableSet]"},e[Symbol.iterator]=function(){return this.values()},br(t,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:Symbol.toStringTag,get:function(){return"Set"}}])})(),dt=nn("ObservableSet",Sf);function el(t){return t[Symbol.toStringTag]="SetIterator",as(t)}var tl=Object.create(null),nl="remove",Ef=(function(){function t(n,r,o,a){r===void 0&&(r=new Map),a===void 0&&(a=ep),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=n,this.values_=r,this.name_=o,this.defaultAnnotation_=a,this.keysAtom_=new rn("ObservableObject.keys"),this.isPlainObject_=en(this.target_)}var e=t.prototype;return e.getObservablePropValue_=function(r){return this.values_.get(r).get()},e.setObservablePropValue_=function(r,o){var a=this.values_.get(r);if(a instanceof bt)return a.set(o),!0;if(at(this)){var i=it(this,{type:Et,object:this.proxy_||this.target_,name:r,newValue:o});if(!i)return null;o=i.newValue}if(o=a.prepareNewValue_(o),o!==X.UNCHANGED){var s=pt(this),l=!1,f=s||l?{type:Et,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:a.value_,name:r,newValue:o}:null;a.setNewValue_(o),s&&ht(this,f)}return!0},e.get_=function(r){return X.trackingDerivation&&!Ft(this.target_,r)&&this.has_(r),this.target_[r]},e.set_=function(r,o,a){return a===void 0&&(a=!1),Ft(this.target_,r)?this.values_.has(r)?this.setObservablePropValue_(r,o):a?Reflect.set(this.target_,r,o):(this.target_[r]=o,!0):this.extend_(r,{value:o,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,a)},e.has_=function(r){if(!X.trackingDerivation)return r in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var o=this.pendingKeys_.get(r);return o||(o=new Jt(r in this.target_,wa,"ObservableObject.key?",!1),this.pendingKeys_.set(r,o)),o.get()},e.make_=function(r,o){if(o===!0&&(o=this.defaultAnnotation_),o!==!1){if(!(r in this.target_)){var a;if((a=this.target_[$t])!=null&&a[r])return;me(1,o.annotationType_,this.name_+"."+r.toString())}for(var i=this.target_;i&&i!==ro;){var s=Wo(i,r);if(s){var l=o.make_(this,r,s,i);if(l===0)return;if(l===1)break}i=Object.getPrototypeOf(i)}ol(this,o,r)}},e.extend_=function(r,o,a,i){if(i===void 0&&(i=!1),a===!0&&(a=this.defaultAnnotation_),a===!1)return this.defineProperty_(r,o,i);var s=a.extend_(this,r,o,i);return s&&ol(this,a,r),s},e.defineProperty_=function(r,o,a){a===void 0&&(a=!1),this.keysAtom_;try{st();var i=this.delete_(r);if(!i)return i;if(at(this)){var s=it(this,{object:this.proxy_||this.target_,name:r,type:Kt,newValue:o.value});if(!s)return null;var l=s.newValue;o.value!==l&&(o=kn({},o,{value:l}))}if(a){if(!Reflect.defineProperty(this.target_,r,o))return!1}else kt(this.target_,r,o);this.notifyPropertyAddition_(r,o.value)}finally{lt()}return!0},e.defineObservableProperty_=function(r,o,a,i){i===void 0&&(i=!1),this.keysAtom_;try{st();var s=this.delete_(r);if(!s)return s;if(at(this)){var l=it(this,{object:this.proxy_||this.target_,name:r,type:Kt,newValue:o});if(!l)return null;o=l.newValue}var f=rl(r),d={configurable:X.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:f.get,set:f.set};if(i){if(!Reflect.defineProperty(this.target_,r,d))return!1}else kt(this.target_,r,d);var m=new Jt(o,a,"ObservableObject.key",!1);this.values_.set(r,m),this.notifyPropertyAddition_(r,m.value_)}finally{lt()}return!0},e.defineComputedProperty_=function(r,o,a){a===void 0&&(a=!1),this.keysAtom_;try{st();var i=this.delete_(r);if(!i)return i;if(at(this)){var s=it(this,{object:this.proxy_||this.target_,name:r,type:Kt,newValue:void 0});if(!s)return null}o.name||(o.name="ObservableObject.key"),o.context=this.proxy_||this.target_;var l=rl(r),f={configurable:X.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(a){if(!Reflect.defineProperty(this.target_,r,f))return!1}else kt(this.target_,r,f);this.values_.set(r,new bt(o)),this.notifyPropertyAddition_(r,void 0)}finally{lt()}return!0},e.delete_=function(r,o){if(o===void 0&&(o=!1),this.keysAtom_,!Ft(this.target_,r))return!0;if(at(this)){var a=it(this,{object:this.proxy_||this.target_,name:r,type:nl});if(!a)return null}try{var i;st();var s=pt(this),l=!1,f=this.values_.get(r),d=void 0;if(!f&&(s||l)){var m;d=(m=Wo(this.target_,r))==null?void 0:m.value}if(o){if(!Reflect.deleteProperty(this.target_,r))return!1}else delete this.target_[r];if(f&&(this.values_.delete(r),f instanceof Jt&&(d=f.value_),hf(f)),this.keysAtom_.reportChanged(),(i=this.pendingKeys_)==null||(i=i.get(r))==null||i.set(r in this.target_),s||l){var h={type:nl,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:d,name:r};s&&ht(this,h)}}finally{lt()}return!0},e.observe_=function(r,o){return co(this,r)},e.intercept_=function(r){return lo(this,r)},e.notifyPropertyAddition_=function(r,o){var a,i=pt(this),s=!1;if(i||s){var l=i||s?{type:Kt,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:r,newValue:o}:null;i&&ht(this,l)}(a=this.pendingKeys_)==null||(a=a.get(r))==null||a.set(!0),this.keysAtom_.reportChanged()},e.ownKeys_=function(){return this.keysAtom_.reportObserved(),xa(this.target_)},e.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},t})();function gr(t,e){var n;if(Ft(t,ce))return t;var r=(n=e?.name)!=null?n:"ObservableObject",o=new Ef(t,new Map,String(r),up(e));return va(t,ce,o),t}var th=nn("ObservableObjectAdministration",Ef);function rl(t){return tl[t]||(tl[t]={get:function(){return this[ce].getObservablePropValue_(t)},set:function(n){return this[ce].setObservablePropValue_(t,n)}})}function po(t){return ya(t)?th(t[ce]):!1}function ol(t,e,n){var r;(r=t.target_[$t])==null||delete r[n]}var nh=If(0),rh=(function(){var t=!1,e={};return Object.defineProperty(e,"0",{set:function(){t=!0}}),Object.create(e)[0]=1,t===!1})(),Ha=0,zf=function(){};function oh(t,e){Object.setPrototypeOf?Object.setPrototypeOf(t.prototype,e):t.prototype.__proto__!==void 0?t.prototype.__proto__=e:t.prototype=e}oh(zf,Array.prototype);var os=(function(t){function e(r,o,a,i){var s;return a===void 0&&(a="ObservableArray"),i===void 0&&(i=!1),s=t.call(this)||this,Mn(function(){var l=new rs(a,o,i,!0);l.proxy_=s,Wc(s,ce,l),r&&r.length&&s.spliceWithArray(0,0,r),rh&&Object.defineProperty(s,"0",nh)}),s}Kc(e,t);var n=e.prototype;return n.concat=function(){this[ce].atom_.reportObserved();for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return Array.prototype.concat.apply(this.slice(),a.map(function(s){return uo(s)?s.slice():s}))},n[Symbol.iterator]=function(){var r=this,o=0;return as({next:function(){return o<r.length?{value:r[o++],done:!1}:{done:!0,value:void 0}}})},br(e,[{key:"length",get:function(){return this[ce].getArrayLength_()},set:function(o){this[ce].setArrayLength_(o)}},{key:Symbol.toStringTag,get:function(){return"Array"}}])})(zf);Object.entries(Xo).forEach(function(t){var e=t[0],n=t[1];e!=="concat"&&va(os.prototype,e,n)});function If(t){return{enumerable:!1,configurable:!0,get:function(){return this[ce].get_(t)},set:function(n){this[ce].set_(t,n)}}}function ah(t){kt(os.prototype,""+t,If(t))}function Of(t){if(t>Ha){for(var e=Ha;e<t+100;e++)ah(e);Ha=t}}Of(1e3);function ih(t,e,n){return new os(t,e,n)}function vi(t,e){if(typeof t=="object"&&t!==null){if(uo(t))return e!==void 0&&me(23),t[ce].atom_;if(dt(t))return t.atom_;if(on(t)){if(e===void 0)return t.keysAtom_;var n=t.data_.get(e)||t.hasMap_.get(e);return n||me(25,e,xi(t)),n}if(po(t)){if(!e)return me(26);var r=t[ce].values_.get(e);return r||me(27,e,xi(t)),r}if(Yi(t)||so(t)||Yo(t))return t}else if(_t(t)&&Yo(t[ce]))return t[ce];me(28)}function sh(t,e){if(t||me(29),Yi(t)||so(t)||Yo(t)||on(t)||dt(t))return t;if(t[ce])return t[ce];me(24,t)}function xi(t,e){var n;if(e!==void 0)n=vi(t,e);else{if(sr(t))return t.name;po(t)||on(t)||dt(t)?n=sh(t):n=vi(t)}return n.name_}function Mn(t){var e=Bn(),n=Qi(!0);st();try{return t()}finally{lt(),es(n),jt(e)}}var al=ro.toString;function Cf(t,e,n){return n===void 0&&(n=-1),wi(t,e,n)}function wi(t,e,n,r,o){if(t===e)return t!==0||1/t===1/e;if(t==null||e==null)return!1;if(t!==t)return e!==e;var a=typeof t;if(a!=="function"&&a!=="object"&&typeof e!="object")return!1;var i=al.call(t);if(i!==al.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:+t==0?1/+t===1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(t)===Symbol.valueOf.call(e);case"[object Map]":case"[object Set]":n>=0&&n++;break}t=il(t),e=il(e);var s=i==="[object Array]";if(!s){if(typeof t!="object"||typeof e!="object")return!1;var l=t.constructor,f=e.constructor;if(l!==f&&!(_t(l)&&l instanceof l&&_t(f)&&f instanceof f)&&"constructor"in t&&"constructor"in e)return!1}if(n===0)return!1;n<0&&(n=-1),r=r||[],o=o||[];for(var d=r.length;d--;)if(r[d]===t)return o[d]===e;if(r.push(t),o.push(e),s){if(d=t.length,d!==e.length)return!1;for(;d--;)if(!wi(t[d],e[d],n-1,r,o))return!1}else{var m=Object.keys(t),h=m.length;if(Object.keys(e).length!==h)return!1;for(var c=0;c<h;c++){var u=m[c];if(!(Ft(e,u)&&wi(t[u],e[u],n-1,r,o)))return!1}}return r.pop(),o.pop(),!0}function il(t){return uo(t)?t.slice():_r(t)||on(t)||Pt(t)||dt(t)?Array.from(t.entries()):t}var sl,lh=((sl=ga().Iterator)==null?void 0:sl.prototype)||{};function as(t){return t[Symbol.iterator]=ch,Object.assign(Object.create(lh),t)}function ch(){return this}["Symbol","Map","Set"].forEach(function(t){var e=ga();typeof e[t]>"u"&&me("MobX requires global '"+t+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:Ip,extras:{getDebugName:xi},$mobx:ce});class Vt extends Nt{constructor(){super(...arguments),this.disposer=null,this.cachedTemplate=null,this.originalRender=null}connectedCallback(){super.connectedCallback(),this.originalRender=this.render.bind(this),this.render=()=>{if(this.cachedTemplate){const r=this.cachedTemplate;return this.cachedTemplate=null,r}this.disposer&&this.disposer();let e=null,n=!0;return this.disposer=vf(()=>{if(this.originalRender)try{const r=this.originalRender();n?e=r:(this.cachedTemplate=r,this.requestUpdate())}catch(r){console.error("Error in MobxLitElement render:",r)}}),n=!1,e}}update(e){super.update(e),e.size>0&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.disposer&&(this.disposer(),this.disposer=null),this.originalRender&&(this.render=this.originalRender,this.originalRender=null)}}var is=Symbol.for("immer-nothing"),Lr=Symbol.for("immer-draftable"),we=Symbol.for("immer-state");function Ue(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var cr=Object.getPrototypeOf;function zn(t){return!!t&&!!t[we]}function zt(t){return t?Rf(t)||Array.isArray(t)||!!t[Lr]||!!t.constructor?.[Lr]||yr(t)||ho(t):!1}var fh=Object.prototype.constructor.toString(),ll=new WeakMap;function Rf(t){if(!t||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);if(e===null||e===Object.prototype)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let r=ll.get(n);return r===void 0&&(r=Function.toString.call(n),ll.set(n,r)),r===fh}function fr(t,e,n=!0){In(t)===0?(n?Reflect.ownKeys(t):Object.keys(t)).forEach(o=>{e(o,t[o],t)}):t.forEach((r,o)=>e(o,r,t))}function In(t){const e=t[we];return e?e.type_:Array.isArray(t)?1:yr(t)?2:ho(t)?3:0}function Vr(t,e){return In(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Ka(t,e){return In(t)===2?t.get(e):t[e]}function Tf(t,e,n){const r=In(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function uh(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function yr(t){return t instanceof Map}function ho(t){return t instanceof Set}function Fe(t){return t.copy_||t.base_}function $i(t,e){if(yr(t))return new Map(t);if(ho(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=Rf(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[we];let o=Reflect.ownKeys(r);for(let a=0;a<o.length;a++){const i=o[a],s=r[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(cr(t),r)}else{const r=cr(t);if(r!==null&&n)return{...t};const o=Object.create(r);return Object.assign(o,t)}}function ss(t,e=!1){return ka(t)||zn(t)||!zt(t)||(In(t)>1&&Object.defineProperties(t,{set:ko,add:ko,clear:ko,delete:ko}),Object.freeze(t),e&&Object.values(t).forEach(n=>ss(n,!0))),t}function dh(){Ue(2)}var ko={value:dh};function ka(t){return t===null||typeof t!="object"?!0:Object.isFrozen(t)}var Ai={};function On(t){const e=Ai[t];return e||Ue(0,t),e}function Lf(t,e){Ai[t]||(Ai[t]=e)}var Gr;function ea(){return Gr}function ph(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function cl(t,e){e&&(On("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function ki(t){Si(t),t.drafts_.forEach(hh),t.drafts_=null}function Si(t){t===Gr&&(Gr=t.parent_)}function fl(t){return Gr=ph(Gr,t)}function hh(t){const e=t[we];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function ul(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[we].modified_&&(ki(e),Ue(4)),zt(t)&&(t=ta(e,t),e.parent_||na(e,t)),e.patches_&&On("Patches").generateReplacementPatches_(n[we].base_,t,e.patches_,e.inversePatches_)):t=ta(e,n,[]),ki(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==is?t:void 0}function ta(t,e,n){if(ka(e))return e;const r=t.immer_.shouldUseStrictIteration(),o=e[we];if(!o)return fr(e,(a,i)=>dl(t,o,e,a,i,n),r),e;if(o.scope_!==t)return e;if(!o.modified_)return na(t,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const a=o.copy_;let i=a,s=!1;o.type_===3&&(i=new Set(a),a.clear(),s=!0),fr(i,(l,f)=>dl(t,o,a,l,f,n,s),r),na(t,a,!1),n&&t.patches_&&On("Patches").generatePatches_(o,n,t.patches_,t.inversePatches_)}return o.copy_}function dl(t,e,n,r,o,a,i){if(o==null||typeof o!="object"&&!i)return;const s=ka(o);if(!(s&&!i)){if(zn(o)){const l=a&&e&&e.type_!==3&&!Vr(e.assigned_,r)?a.concat(r):void 0,f=ta(t,o,l);if(Tf(n,r,f),zn(f))t.canAutoFreeze_=!1;else return}else i&&n.add(o);if(zt(o)&&!s){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1||e&&e.base_&&e.base_[r]===o&&s)return;ta(t,o),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&(yr(n)?n.has(r):Object.prototype.propertyIsEnumerable.call(n,r))&&na(t,o)}}}function na(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&ss(e,n)}function mh(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:ea(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,a=ls;n&&(o=[r],a=Wr);const{revoke:i,proxy:s}=Proxy.revocable(o,a);return r.draft_=s,r.revoke_=i,s}var ls={get(t,e){if(e===we)return t;const n=Fe(t);if(!Vr(n,e))return _h(t,n,e);const r=n[e];return t.finalized_||!zt(r)?r:r===Ja(t.base_,e)?(Ya(t),t.copy_[e]=Zr(r,t)):r},has(t,e){return e in Fe(t)},ownKeys(t){return Reflect.ownKeys(Fe(t))},set(t,e,n){const r=Df(Fe(t),e);if(r?.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const o=Ja(Fe(t),e),a=o?.[we];if(a&&a.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(uh(n,o)&&(n!==void 0||Vr(t.base_,e)))return!0;Ya(t),Dt(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Ja(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Ya(t),Dt(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Fe(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Ue(11)},getPrototypeOf(t){return cr(t.base_)},setPrototypeOf(){Ue(12)}},Wr={};fr(ls,(t,e)=>{Wr[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Wr.deleteProperty=function(t,e){return Wr.set.call(this,t,e,void 0)};Wr.set=function(t,e,n){return ls.set.call(this,t[0],e,n,t[0])};function Ja(t,e){const n=t[we];return(n?Fe(n):t)[e]}function _h(t,e,n){const r=Df(e,n);return r?"value"in r?r.value:r.get?.call(t.draft_):void 0}function Df(t,e){if(!(e in t))return;let n=cr(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=cr(n)}}function Dt(t){t.modified_||(t.modified_=!0,t.parent_&&Dt(t.parent_))}function Ya(t){t.copy_||(t.copy_=$i(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var bh=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const a=n;n=e;const i=this;return function(l=a,...f){return i.produce(l,d=>n.call(this,d,...f))}}typeof n!="function"&&Ue(6),r!==void 0&&typeof r!="function"&&Ue(7);let o;if(zt(e)){const a=fl(this),i=Zr(e,void 0);let s=!0;try{o=n(i),s=!1}finally{s?ki(a):Si(a)}return cl(a,r),ul(o,a)}else if(!e||typeof e!="object"){if(o=n(e),o===void 0&&(o=e),o===is&&(o=void 0),this.autoFreeze_&&ss(o,!0),r){const a=[],i=[];On("Patches").generateReplacementPatches_(e,o,a,i),r(a,i)}return o}else Ue(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(i,...s)=>this.produceWithPatches(i,l=>e(l,...s));let r,o;return[this.produce(e,n,(i,s)=>{r=i,o=s}),r,o]},typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof t?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy),typeof t?.useStrictIteration=="boolean"&&this.setUseStrictIteration(t.useStrictIteration)}createDraft(t){zt(t)||Ue(8),zn(t)&&(t=gh(t));const e=fl(this),n=Zr(t,void 0);return n[we].isManual_=!0,Si(e),n}finishDraft(t,e){const n=t&&t[we];(!n||!n.isManual_)&&Ue(9);const{scope_:r}=n;return cl(r,e),ul(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}setUseStrictIteration(t){this.useStrictIteration_=t}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const o=e[n];if(o.path.length===0&&o.op==="replace"){t=o.value;break}}n>-1&&(e=e.slice(n+1));const r=On("Patches").applyPatches_;return zn(t)?r(t,e):this.produce(t,o=>r(o,e))}};function Zr(t,e){const n=yr(t)?On("MapSet").proxyMap_(t,e):ho(t)?On("MapSet").proxySet_(t,e):mh(t,e);return(e?e.scope_:ea()).drafts_.push(n),n}function gh(t){return zn(t)||Ue(10,t),Pf(t)}function Pf(t){if(!zt(t)||ka(t))return t;const e=t[we];let n,r=!0;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=$i(t,e.scope_.immer_.useStrictShallowCopy_),r=e.scope_.immer_.shouldUseStrictIteration()}else n=$i(t,!0);return fr(n,(o,a)=>{Tf(n,o,Pf(a))},r),e&&(e.finalized_=!1),n}function yh(){const e="replace",r="remove";function o(h,c,u,p){switch(h.type_){case 0:case 2:return i(h,c,u,p);case 1:return a(h,c,u,p);case 3:return s(h,c,u,p)}}function a(h,c,u,p){let{base_:_,assigned_:b}=h,g=h.copy_;g.length<_.length&&([_,g]=[g,_],[u,p]=[p,u]);for(let y=0;y<_.length;y++)if(b[y]&&g[y]!==_[y]){const v=c.concat([y]);u.push({op:e,path:v,value:m(g[y])}),p.push({op:e,path:v,value:m(_[y])})}for(let y=_.length;y<g.length;y++){const v=c.concat([y]);u.push({op:"add",path:v,value:m(g[y])})}for(let y=g.length-1;_.length<=y;--y){const v=c.concat([y]);p.push({op:r,path:v})}}function i(h,c,u,p){const{base_:_,copy_:b}=h;fr(h.assigned_,(g,y)=>{const v=Ka(_,g),$=Ka(b,g),k=y?Vr(_,g)?e:"add":r;if(v===$&&k===e)return;const A=c.concat(g);u.push(k===r?{op:k,path:A}:{op:k,path:A,value:$}),p.push(k==="add"?{op:r,path:A}:k===r?{op:"add",path:A,value:m(v)}:{op:e,path:A,value:m(v)})})}function s(h,c,u,p){let{base_:_,copy_:b}=h,g=0;_.forEach(y=>{if(!b.has(y)){const v=c.concat([g]);u.push({op:r,path:v,value:y}),p.unshift({op:"add",path:v,value:y})}g++}),g=0,b.forEach(y=>{if(!_.has(y)){const v=c.concat([g]);u.push({op:"add",path:v,value:y}),p.unshift({op:r,path:v,value:y})}g++})}function l(h,c,u,p){u.push({op:e,path:[],value:c===is?void 0:c}),p.push({op:e,path:[],value:h})}function f(h,c){return c.forEach(u=>{const{path:p,op:_}=u;let b=h;for(let $=0;$<p.length-1;$++){const k=In(b);let A=p[$];typeof A!="string"&&typeof A!="number"&&(A=""+A),(k===0||k===1)&&(A==="__proto__"||A==="constructor")&&Ue(19),typeof b=="function"&&A==="prototype"&&Ue(19),b=Ka(b,A),typeof b!="object"&&Ue(18,p.join("/"))}const g=In(b),y=d(u.value),v=p[p.length-1];switch(_){case e:switch(g){case 2:return b.set(v,y);case 3:Ue(16);default:return b[v]=y}case"add":switch(g){case 1:return v==="-"?b.push(y):b.splice(v,0,y);case 2:return b.set(v,y);case 3:return b.add(y);default:return b[v]=y}case r:switch(g){case 1:return b.splice(v,1);case 2:return b.delete(v);case 3:return b.delete(u.value);default:return delete b[v]}default:Ue(17,_)}}),h}function d(h){if(!zt(h))return h;if(Array.isArray(h))return h.map(d);if(yr(h))return new Map(Array.from(h.entries()).map(([u,p])=>[u,d(p)]));if(ho(h))return new Set(Array.from(h).map(d));const c=Object.create(cr(h));for(const u in h)c[u]=d(h[u]);return Vr(h,Lr)&&(c[Lr]=h[Lr]),c}function m(h){return zn(h)?d(h):h}Lf("Patches",{applyPatches_:f,generatePatches_:o,generateReplacementPatches_:l})}function vh(){class t extends Map{constructor(l,f){super(),this[we]={type_:2,parent_:f,scope_:f?f.scope_:ea(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:l,draft_:this,isManual_:!1,revoked_:!1}}get size(){return Fe(this[we]).size}has(l){return Fe(this[we]).has(l)}set(l,f){const d=this[we];return i(d),(!Fe(d).has(l)||Fe(d).get(l)!==f)&&(n(d),Dt(d),d.assigned_.set(l,!0),d.copy_.set(l,f),d.assigned_.set(l,!0)),this}delete(l){if(!this.has(l))return!1;const f=this[we];return i(f),n(f),Dt(f),f.base_.has(l)?f.assigned_.set(l,!1):f.assigned_.delete(l),f.copy_.delete(l),!0}clear(){const l=this[we];i(l),Fe(l).size&&(n(l),Dt(l),l.assigned_=new Map,fr(l.base_,f=>{l.assigned_.set(f,!1)}),l.copy_.clear())}forEach(l,f){const d=this[we];Fe(d).forEach((m,h,c)=>{l.call(f,this.get(h),h,this)})}get(l){const f=this[we];i(f);const d=Fe(f).get(l);if(f.finalized_||!zt(d)||d!==f.base_.get(l))return d;const m=Zr(d,f);return n(f),f.copy_.set(l,m),m}keys(){return Fe(this[we]).keys()}values(){const l=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const f=l.next();return f.done?f:{done:!1,value:this.get(f.value)}}}}entries(){const l=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const f=l.next();if(f.done)return f;const d=this.get(f.value);return{done:!1,value:[f.value,d]}}}}[Symbol.iterator](){return this.entries()}}function e(s,l){return new t(s,l)}function n(s){s.copy_||(s.assigned_=new Map,s.copy_=new Map(s.base_))}class r extends Set{constructor(l,f){super(),this[we]={type_:3,parent_:f,scope_:f?f.scope_:ea(),modified_:!1,finalized_:!1,copy_:void 0,base_:l,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return Fe(this[we]).size}has(l){const f=this[we];return i(f),f.copy_?!!(f.copy_.has(l)||f.drafts_.has(l)&&f.copy_.has(f.drafts_.get(l))):f.base_.has(l)}add(l){const f=this[we];return i(f),this.has(l)||(a(f),Dt(f),f.copy_.add(l)),this}delete(l){if(!this.has(l))return!1;const f=this[we];return i(f),a(f),Dt(f),f.copy_.delete(l)||(f.drafts_.has(l)?f.copy_.delete(f.drafts_.get(l)):!1)}clear(){const l=this[we];i(l),Fe(l).size&&(a(l),Dt(l),l.copy_.clear())}values(){const l=this[we];return i(l),a(l),l.copy_.values()}entries(){const l=this[we];return i(l),a(l),l.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(l,f){const d=this.values();let m=d.next();for(;!m.done;)l.call(f,m.value,m.value,this),m=d.next()}}function o(s,l){return new r(s,l)}function a(s){s.copy_||(s.copy_=new Set,s.base_.forEach(l=>{if(zt(l)){const f=Zr(l,s);s.drafts_.set(l,f),s.copy_.add(f)}else s.copy_.add(l)}))}function i(s){s.revoked_&&Ue(3,JSON.stringify(Fe(s)))}Lf("MapSet",{proxyMap_:e,proxySet_:o})}var Ei=new bh,xh=Ei.produce,wh=Ei.setAutoFreeze.bind(Ei);const zi=(t,e)=>e.some(n=>t instanceof n);let pl,hl;function $h(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ah(){return hl||(hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ii=new WeakMap,Xa=new WeakMap,Sa=new WeakMap;function kh(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{n(yn(t.result)),o()},i=()=>{r(t.error),o()};t.addEventListener("success",a),t.addEventListener("error",i)});return Sa.set(e,t),e}function Sh(t){if(Ii.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{n(),o()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)});Ii.set(t,e)}let Oi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ii.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bf(t){Oi=t(Oi)}function Eh(t){return Ah().includes(t)?function(...e){return t.apply(Ci(this),e),yn(this.request)}:function(...e){return yn(t.apply(Ci(this),e))}}function zh(t){return typeof t=="function"?Eh(t):(t instanceof IDBTransaction&&Sh(t),zi(t,$h())?new Proxy(t,Oi):t)}function yn(t){if(t instanceof IDBRequest)return kh(t);if(Xa.has(t))return Xa.get(t);const e=zh(t);return e!==t&&(Xa.set(t,e),Sa.set(e,t)),e}const Ci=t=>Sa.get(t);function Ih(t,e,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const i=indexedDB.open(t,e),s=yn(i);return r&&i.addEventListener("upgradeneeded",l=>{r(yn(i.result),l.oldVersion,l.newVersion,yn(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),o&&l.addEventListener("versionchange",f=>o(f.oldVersion,f.newVersion,f))}).catch(()=>{}),s}const Oh=["get","getKey","getAll","getAllKeys","count"],Ch=["put","add","delete","clear"],Qa=new Map;function ml(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Ch.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Oh.includes(n)))return;const a=async function(i,...s){const l=this.transaction(i,o?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(s.shift())),(await Promise.all([f[n](...s),o&&l.done]))[0]};return Qa.set(e,a),a}Bf(t=>({...t,get:(e,n,r)=>ml(e,n)||t.get(e,n,r),has:(e,n)=>!!ml(e,n)||t.has(e,n)}));const Rh=["continue","continuePrimaryKey","advance"],_l={},Ri=new WeakMap,Mf=new WeakMap,Th={get(t,e){if(!Rh.includes(e))return t[e];let n=_l[e];return n||(n=_l[e]=function(...r){Ri.set(this,Mf.get(this)[e](...r))}),n}};async function*Lh(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;e=e;const n=new Proxy(e,Th);for(Mf.set(n,e),Sa.set(n,Ci(e));e;)yield n,e=await(Ri.get(n)||e.continue()),Ri.delete(n)}function bl(t,e){return e===Symbol.asyncIterator&&zi(t,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&zi(t,[IDBIndex,IDBObjectStore])}Bf(t=>({...t,get(e,n,r){return bl(e,n)?Lh:t.get(e,n,r)},has(e,n){return bl(e,n)||t.has(e,n)}}));class Dh{constructor(){this.resolveFunc=e=>{},this.rejectFunc=e=>{},this.completedField=!1,this.promiseField=new Promise((e,n)=>{this.resolveFunc=e,this.rejectFunc=n}),this.promiseField.finally(()=>{this.completedField=!0})}get completed(){return this.completedField}resolve(e){this.resolveFunc(e)}reject(e){this.rejectFunc(e)}get promise(){return this.promiseField}get callable(){return this.resolveFunc}}const Ti="gemini-3-flash-preview",gl="nano-ffglify",dn="settings",Gt="database_snapshot",ot="input_files",pn="workspaces",Ph=2;class Bh{constructor(){this.dbPromise=null,this.databaseLoaded=new Dh,this._settingsLoaded=!1,typeof indexedDB<"u"&&gl?this.dbPromise=Ih(gl,Ph,{upgrade(e,n){e.objectStoreNames.contains(dn)||e.createObjectStore(dn),e.objectStoreNames.contains(Gt)||e.createObjectStore(Gt),e.objectStoreNames.contains(ot)||e.createObjectStore(ot),e.objectStoreNames.contains(pn)||e.createObjectStore(pn)}}):this.databaseLoaded.resolve()}get settingsLoaded(){return this._settingsLoaded}async runMigrationIfNeeded(){if(this.dbPromise)try{const e=await this.dbPromise,n=await e.get(dn,"localSettings");if(n?.migrationVersion>=2)return;const r=await e.get(Gt,"latest");if(!r){const m={...n||{},migrationVersion:2};await e.put(dn,m,"localSettings");return}const o=crypto.randomUUID(),a=Date.now(),i=r.ir?.meta?.name||"Untitled",s={id:o,name:i,createdAt:a,updatedAt:a},l={...r,savedInputValues:n?.savedInputValues||{}};await e.put(pn,s,o),await e.put(Gt,l,o);const f=await e.getAllKeys(ot);for(const m of f){const h=m;if(h.includes("/"))continue;const c=await e.get(ot,h);c&&(await e.put(ot,c,`${o}/${h}`),await e.delete(ot,h))}await e.delete(Gt,"latest");const d={...n||{},activeWorkspaceId:o,migrationVersion:2};delete d.savedInputValues,await e.put(dn,d,"localSettings"),console.info("[SettingsManager] Migrated v1 data to workspace:",o)}catch(e){console.error("[SettingsManager] Migration error:",e)}}async saveSettings(e){if(!this._settingsLoaded)throw new Error("Attempted to save settings before they were loaded. This would stomp persisted settings with defaults.");if(!this.dbPromise)throw new Error("Database not initialized. Check VITE_DB_NAME.");try{await(await this.dbPromise).put(dn,e,"localSettings")}catch(n){throw console.error("Error saving settings:",n),n}}async loadSettings(){if(!this.dbPromise)throw this._settingsLoaded=!0,new Error("Database not initialized. Check VITE_DB_NAME.");try{const n=await(await this.dbPromise).get(dn,"localSettings")||null;return this._settingsLoaded=!0,n}catch(e){throw this._settingsLoaded=!0,console.error("Error loading settings:",e),e}}async saveDatabase(e,n){if(this.dbPromise)try{await(await this.dbPromise).put(Gt,e,n)}catch(r){console.error("Error saving database snapshot:",r)}}async saveInputFile(e,n,r){if(this.dbPromise)try{await(await this.dbPromise).put(ot,r,`${e}/${n}`)}catch(o){console.error("Error saving input file:",o)}}async loadInputFile(e,n){if(!this.dbPromise)return null;try{return await(await this.dbPromise).get(ot,`${e}/${n}`)||null}catch(r){return console.error("Error loading input file:",r),null}}async loadAllInputFiles(e){const n=new Map;if(!this.dbPromise)return n;try{const r=await this.dbPromise,o=`${e}/`,a=await r.getAllKeys(ot);for(const i of a){const s=i;if(!s.startsWith(o))continue;const l=await r.get(ot,s);l&&n.set(s.slice(o.length),l)}}catch(r){console.error("Error loading input files:",r)}return n}async loadDatabase(e){if(!this.dbPromise)return this.databaseLoaded.resolve(),null;try{const r=await(await this.dbPromise).get(Gt,e);return this.databaseLoaded.resolve(),r||null}catch(n){return console.error("Error loading database snapshot:",n),this.databaseLoaded.resolve(),null}}async listWorkspaces(){if(!this.dbPromise)return[];try{const e=await this.dbPromise,n=await e.getAllKeys(pn),r=[];for(const o of n){const a=await e.get(pn,o);a&&r.push(a)}return r.sort((o,a)=>a.updatedAt-o.updatedAt||a.createdAt-o.createdAt),r}catch(e){return console.error("Error listing workspaces:",e),[]}}async saveWorkspace(e){if(this.dbPromise)try{await(await this.dbPromise).put(pn,e,e.id)}catch(n){console.error("Error saving workspace:",n)}}async deleteWorkspace(e){if(this.dbPromise)try{await(await this.dbPromise).delete(pn,e)}catch(n){console.error("Error deleting workspace:",n)}}async deleteWorkspaceData(e){if(this.dbPromise)try{const n=await this.dbPromise;await n.delete(Gt,e);const r=`${e}/`,o=await n.getAllKeys(ot);for(const a of o)a.startsWith(r)&&await n.delete(ot,a)}catch(n){console.error("Error deleting workspace data:",n)}}}const ye=new Bh,Qn={ir:{version:"1.0.0",meta:{name:"New Shader"},entryPoint:"fn_main_cpu",inputs:[],resources:[],structs:[],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],nodes:[]}]},chat_history:[],savedInputValues:{}};vh();wh(!1);Fp({enforceActions:"always",computedRequiresReaction:!0,reactionRequiresObservable:!1,observableRequiresReaction:!1});class Nf{constructor(e){this.database=_e(e||Qn),this.local=_e({settings:{activeTab:"workspaces",chatOpen:!0,useMockLLM:!1,transportState:"playing",devMode:!1},llmLogs:[],llmBusy:!1,draftChat:"",draftImages:[],activeRewindId:null,selectedEntity:void 0,selectionHistory:[],selectionFuture:[],draftExampleKey:null,validationErrors:[],compilationResult:void 0,workspaces:[]}),fo(this,{database:_e,local:_e}),this.initialized=this.loadSettings().then(()=>this.initPersistence())}async loadSettings(){const e=await ye.loadSettings();e&&this.local.settings&&(e.activeTab==="live"&&(e.activeTab="dashboard"),e.devMode===void 0&&(e.devMode=!1),te(()=>{Object.assign(this.local.settings,e)}))}async initPersistence(){await ye.runMigrationIfNeeded();const e=await ye.listWorkspaces();let n=this.local.settings.activeWorkspaceId;if((!n||!e.find(o=>o.id===n))&&e.length>0&&(n=e[0].id),!n||e.length===0){const o=Date.now(),a=crypto.randomUUID(),i={id:a,name:"New Shader",createdAt:o,updatedAt:o};await ye.saveWorkspace(i),await ye.saveDatabase(JSON.parse(JSON.stringify(Qn)),a),e.push(i),n=a}const r=await ye.loadDatabase(n);te(()=>{if(this.local.workspaces=e,this.local.settings.activeWorkspaceId=n,r){Object.assign(this.database,r);const o=e.find(a=>a.id===n);o&&(o.comment=r.ir?.comment||void 0)}}),ye.saveSettings({...this.local.settings})}}const R=new Nf,Ff=["float","int","bool","float2","float3","float4","int2","int3","int4","float3x3","float4x4","prng","string","texture2d","sampler"],Mh=["float","int","boolean","float2","float3","float4","int2","int3","int4","float3x3","float4x4","prng"];var Ke=(t=>(t.Unknown="unknown",t.RGBA8="rgba8",t.RGBA16F="rgba16f",t.RGBA32F="rgba32f",t.R8="r8",t.R16F="r16f",t.R32F="r32f",t))(Ke||{});const Nh={unknown:0,rgba8:1,rgba16f:2,rgba32f:3,r8:4,r16f:5,r32f:6};Object.entries(Nh).reduce((t,[e,n])=>(t[n]=e,t),{});const Fh={version:"1.0.0",meta:{name:"Simple Noise Generator"},comment:"Animated hash-based noise. Demonstrates builtin_get, input inheritance via var_get, and isOutput flag.",entryPoint:"fn_main_cpu",inputs:[{id:"scale",type:"float",default:10,comment:"Noise frequency scale."}],resources:[{id:"output_tex",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,comment:"Primary display output. mode: 'viewport' follows display size. isOutput: true marks this as the displayed texture.",persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!0}}],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],comment:"CPU entry point: dispatches the noise compute kernel.",nodes:[{id:"get_tex_size",op:"resource_get_size",resource:"output_tex"},{id:"dispatch_noise",op:"cmd_dispatch",func:"fn_noise_gpu",threads:"get_tex_size",comment:"Global inputs (scale) are automatically inherited by the shader."}]},{id:"fn_noise_gpu",type:"shader",inputs:[],outputs:[],localVars:[],comment:"Compute kernel: hash-based noise with time animation.",nodes:[{id:"c_coords",op:"comment",comment:"normalized_global_invocation_id gives float3(gid)/float3(grid_size). Swizzle .xy for UV."},{id:"in_gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"val_scale",op:"var_get",var:"scale",comment:"Global inputs accessed via var_get."},{id:"scaled_uv",op:"math_mul",a:"nuv.xy",b:"val_scale"},{id:"c_anim",op:"comment",comment:"Animate by offsetting UV with builtin time."},{id:"val_time",op:"builtin_get",name:"time"},{id:"time_offset",op:"float2",xy:"val_time"},{id:"uv_animated",op:"math_add",a:"scaled_uv",b:"time_offset"},{id:"c_hash",op:"comment",comment:"Hash-based pseudo-noise: fract(sin(dot(uv, magic)) * 43758.5453)"},{id:"hash_const",op:"float2",x:12.9898,y:78.233},{id:"dot_prod",op:"vec_dot",a:"uv_animated",b:"hash_const"},{id:"sin_res",op:"math_sin",val:"dot_prod"},{id:"noise_raw",op:"math_mul",a:"sin_res",b:43758.5453},{id:"noise_final",op:"math_fract",val:"noise_raw"},{id:"rgba_out",op:"float4",xyz:"noise_final",w:1},{id:"op_store",op:"texture_store",tex:"output_tex",coords:"in_gid.xy",value:"rgba_out"}]}]},jh={version:"1.0.0",meta:{name:"Simple Effect"},comment:"Adjustable grayscale desaturation on an input texture. Demonstrates texture inputs and intensity slider.",entryPoint:"fn_main_cpu",inputs:[{id:"input_visual",type:"texture2d",format:"rgba8",comment:"Input video stream."},{id:"intensity",type:"float",default:1,ui:{min:0,max:1,widget:"slider"},comment:"Desaturation amount: 0 = original, 1 = full grayscale."}],tuningParams:[{id:"lum_weights",type:"float3",default:[.2126,.7152,.0722],comment:"BT.709 luminance coefficients (R, G, B). Tweak for artistic desaturation."}],resources:[{id:"output_tex",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}}],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],nodes:[{id:"size",op:"resource_get_size",resource:"output_tex"},{id:"dispatch",op:"cmd_dispatch",func:"fn_effect_gpu",threads:"size"}]},{id:"fn_effect_gpu",type:"shader",inputs:[],outputs:[],localVars:[],comment:"Compute kernel: per-pixel grayscale desaturation.",nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"color",op:"texture_sample",tex:"input_visual",coords:"nuv.xy"},{id:"c_gray",op:"comment",comment:"Grayscale via perceptual luminance weights (BT.709)."},{id:"lum_coeffs",op:"var_get",var:"lum_weights"},{id:"luma",op:"vec_dot",a:"color.xyz",b:"lum_coeffs"},{id:"gray_vec",op:"float3",xyz:"luma"},{id:"val_intensity",op:"var_get",var:"intensity",comment:"Mix original RGB toward grayscale by intensity."},{id:"final_rgb",op:"math_mix",a:"color.xyz",b:"gray_vec",t:"val_intensity"},{id:"out_color",op:"float4",xyz:"final_rgb",w:1},{id:"store",op:"texture_store",tex:"output_tex",coords:"gid.xy",value:"out_color"}]}]},Uh={version:"1.0.0",meta:{name:"Texture Mixer"},comment:"Blends two texture inputs by an opacity slider. Demonstrates multi-texture input and simple per-pixel math.",entryPoint:"fn_main_cpu",inputs:[{id:"tex_a",type:"texture2d",format:"rgba8",label:"Layer A",comment:"First input texture."},{id:"tex_b",type:"texture2d",format:"rgba8",label:"Layer B",comment:"Second input texture."},{id:"opacity",type:"float",default:.5,ui:{min:0,max:1,widget:"slider"},comment:"Blend factor: 0 = Layer A, 1 = Layer B."}],resources:[{id:"output_mix",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}}],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],nodes:[{id:"size",op:"resource_get_size",resource:"output_mix"},{id:"dispatch",op:"cmd_dispatch",func:"fn_mix_gpu",threads:"size"}]},{id:"fn_mix_gpu",type:"shader",inputs:[],outputs:[],localVars:[],comment:"Compute kernel: per-pixel blend of two textures.",nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"col_a",op:"texture_sample",tex:"tex_a",coords:"nuv.xy"},{id:"col_b",op:"texture_sample",tex:"tex_b",coords:"nuv.xy"},{id:"val_opacity",op:"var_get",var:"opacity"},{id:"mixed",op:"math_mix",a:"col_a",b:"col_b",t:"val_opacity",comment:"Linear blend: mix(A, B, opacity)"},{id:"store",op:"texture_store",tex:"output_mix",coords:"gid.xy",value:"mixed"}]}]},qh={version:"1.0.0",meta:{name:"Animated Raymarcher"},comment:"Animated SDF with smooth blending, Lambert+Blinn-Phong shading, checkerboard floor, and exponential fog. Uses builtin_get(time) for animation.",entryPoint:"fn_main_cpu",inputs:[{id:"scale",type:"float",default:.4,ui:{min:.05,max:1.5,widget:"slider"},comment:"Sphere radius."}],tuningParams:[{id:"orbit_speed",type:"float",default:.7,ui:{min:0,max:3},comment:"Orbital animation speed."},{id:"orbit_radius",type:"float",default:.8,ui:{min:.1,max:2},comment:"Orbit radius in XZ plane."},{id:"bob_speed",type:"float",default:1.3,ui:{min:0,max:5},comment:"Vertical bobbing speed."},{id:"bob_amplitude",type:"float",default:.1,ui:{min:0,max:.5},comment:"Vertical bobbing amplitude."},{id:"bob_offset",type:"float",default:.15,ui:{min:-.5,max:1},comment:"Vertical center offset."},{id:"pulse_speed",type:"float",default:2.5,ui:{min:0,max:10},comment:"Radius pulse frequency."},{id:"pulse_amount",type:"float",default:.3,ui:{min:0,max:1},comment:"Radius pulse amplitude."},{id:"smooth_k",type:"float",default:.4,ui:{min:.01,max:2},comment:"Smooth-min blending radius."},{id:"fog_density",type:"float",default:.15,ui:{min:0,max:1},comment:"Exponential fog density."},{id:"spec_power",type:"float",default:32,ui:{min:1,max:128},comment:"Specular highlight sharpness."},{id:"sphere_color",type:"float3",default:[.9,.45,.2],comment:"Sphere surface color."}],resources:[{id:"output_ray",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}},{id:"sdf_vol",type:"buffer",comment:"32x32x32 SDF volume stored as flat 1D buffer",dataType:"float",size:{mode:"fixed",value:32768},persistence:{retain:!0,clearOnResize:!1,clearEveryFrame:!1,clearValue:4,cpuAccess:!1}}],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],nodes:[{id:"dispatch_evolve",op:"cmd_dispatch",func:"fn_evolve_sdf",threads:[32,32,32],exec_out:"dispatch_render"},{id:"size",op:"resource_get_size",resource:"output_ray"},{id:"dispatch_render",op:"cmd_dispatch",func:"fn_ray_gpu",threads:"size"}]},{id:"fn_evolve_sdf",type:"shader",comment:"Evolve SDF volume: Laplacian diffusion across 6 neighbors for liquid spreading, pulsing sphere stamp, gradual decay.",inputs:[],outputs:[],localVars:[],nodes:[{id:"c_grid",op:"comment",comment:"Convert global_invocation_id to world-space position: (float3(gid) + 0.5) / 16.0 - 1.0 maps [0,31] to [-1,1]."},{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"gid_f",op:"static_cast_float3",val:"gid"},{id:"gid_off",op:"math_add",a:"gid_f",b:.5},{id:"gid_norm",op:"math_div",a:"gid_off",b:16},{id:"world_p",op:"math_sub",a:"gid_norm",b:1},{id:"c_sphere",op:"comment",comment:"Pulsing sphere: radius oscillates with sin(time*2.5), creating periodic expansion/contraction."},{id:"val_time",op:"builtin_get",name:"time"},{id:"v_orbit_speed",op:"var_get",var:"orbit_speed"},{id:"v_orbit_radius",op:"var_get",var:"orbit_radius"},{id:"v_bob_speed",op:"var_get",var:"bob_speed"},{id:"v_bob_amplitude",op:"var_get",var:"bob_amplitude"},{id:"v_bob_offset",op:"var_get",var:"bob_offset"},{id:"v_pulse_speed",op:"var_get",var:"pulse_speed"},{id:"v_pulse_amount",op:"var_get",var:"pulse_amount"},{id:"t_orbit",op:"math_mul",a:"val_time",b:"v_orbit_speed"},{id:"sin_orbit",op:"math_sin",val:"t_orbit"},{id:"cos_orbit",op:"math_cos",val:"t_orbit"},{id:"sc_x",op:"math_mul",a:"sin_orbit",b:"v_orbit_radius"},{id:"sc_z",op:"math_mul",a:"cos_orbit",b:"v_orbit_radius"},{id:"t_bob",op:"math_mul",a:"val_time",b:"v_bob_speed"},{id:"sin_bob",op:"math_sin",val:"t_bob"},{id:"sc_y_wave",op:"math_mul",a:"sin_bob",b:"v_bob_amplitude"},{id:"sc_y",op:"math_add",a:"sc_y_wave",b:"v_bob_offset"},{id:"sphere_center",op:"float3",x:"sc_x",y:"sc_y",z:"sc_z"},{id:"p_sub_c",op:"math_sub",a:"world_p",b:"sphere_center"},{id:"len_psc",op:"vec_length",a:"p_sub_c"},{id:"base_radius",op:"var_get",var:"scale"},{id:"t_pulse",op:"math_mul",a:"val_time",b:"v_pulse_speed"},{id:"sin_pulse",op:"math_sin",val:"t_pulse"},{id:"pulse_mod",op:"math_mul",a:"sin_pulse",b:"v_pulse_amount"},{id:"pulse_fac",op:"math_add",a:.7,b:"pulse_mod"},{id:"sphere_radius",op:"math_mul",a:"base_radius",b:"pulse_fac"},{id:"d_sphere",op:"math_sub",a:"len_psc",b:"sphere_radius"},{id:"c_index",op:"comment",comment:"Flat buffer index via int dot product: dot(gid, int3(1, 32, 1024)). 6 clamped neighbor indices for diffusion."},{id:"strides",op:"int3",x:1,y:32,z:1024},{id:"flat_idx",op:"vec_dot",a:"gid",b:"strides"},{id:"c_nbr",op:"comment",comment:"Clamped neighbor coordinates (int) for 6-connected Laplacian, then dot with strides for flat index."},{id:"gx_m1r",op:"math_sub",a:"gid.x",b:1},{id:"gx_m1",op:"math_max",a:"gx_m1r",b:0},{id:"gx_p1r",op:"math_add",a:"gid.x",b:1},{id:"gx_p1",op:"math_min",a:"gx_p1r",b:31},{id:"gy_m1r",op:"math_sub",a:"gid.y",b:1},{id:"gy_m1",op:"math_max",a:"gy_m1r",b:0},{id:"gy_p1r",op:"math_add",a:"gid.y",b:1},{id:"gy_p1",op:"math_min",a:"gy_p1r",b:31},{id:"gz_m1r",op:"math_sub",a:"gid.z",b:1},{id:"gz_m1",op:"math_max",a:"gz_m1r",b:0},{id:"gz_p1r",op:"math_add",a:"gid.z",b:1},{id:"gz_p1",op:"math_min",a:"gz_p1r",b:31},{id:"nbr_xm",op:"int3",x:"gx_m1",y:"gid.y",z:"gid.z"},{id:"ixm",op:"vec_dot",a:"nbr_xm",b:"strides"},{id:"nbr_xp",op:"int3",x:"gx_p1",y:"gid.y",z:"gid.z"},{id:"ixp",op:"vec_dot",a:"nbr_xp",b:"strides"},{id:"nbr_ym",op:"int3",x:"gid.x",y:"gy_m1",z:"gid.z"},{id:"iym",op:"vec_dot",a:"nbr_ym",b:"strides"},{id:"nbr_yp",op:"int3",x:"gid.x",y:"gy_p1",z:"gid.z"},{id:"iyp",op:"vec_dot",a:"nbr_yp",b:"strides"},{id:"nbr_zm",op:"int3",x:"gid.x",y:"gid.y",z:"gz_m1"},{id:"izm",op:"vec_dot",a:"nbr_zm",b:"strides"},{id:"nbr_zp",op:"int3",x:"gid.x",y:"gid.y",z:"gz_p1"},{id:"izp",op:"vec_dot",a:"nbr_zp",b:"strides"},{id:"c_diffuse",op:"comment",comment:"Load self + 6 neighbors, compute Laplacian diffusion for liquid spreading."},{id:"self_val",op:"buffer_load",buffer:"sdf_vol",index:"flat_idx"},{id:"n_xm",op:"buffer_load",buffer:"sdf_vol",index:"ixm"},{id:"n_xp",op:"buffer_load",buffer:"sdf_vol",index:"ixp"},{id:"n_ym",op:"buffer_load",buffer:"sdf_vol",index:"iym"},{id:"n_yp",op:"buffer_load",buffer:"sdf_vol",index:"iyp"},{id:"n_zm",op:"buffer_load",buffer:"sdf_vol",index:"izm"},{id:"n_zp",op:"buffer_load",buffer:"sdf_vol",index:"izp"},{id:"sum_x",op:"math_add",a:"n_xm",b:"n_xp"},{id:"sum_y",op:"math_add",a:"n_ym",b:"n_yp"},{id:"sum_z",op:"math_add",a:"n_zm",b:"n_zp"},{id:"sum_xy",op:"math_add",a:"sum_x",b:"sum_y"},{id:"sum_all",op:"math_add",a:"sum_xy",b:"sum_z"},{id:"avg_nbr",op:"math_div",a:"sum_all",b:6},{id:"c_noise",op:"comment",comment:"Spatiotemporal hash noise: fract(sin(dot(p*freq + time*drift, magic)) * 43758.5). Two channels for rate modulation + SDF perturbation."},{id:"wp_freq",op:"math_mul",a:"world_p",b:7.3},{id:"time_drift",op:"float3",x:1.7,y:2.3,z:.9},{id:"time_off",op:"math_mul",a:"val_time",b:"time_drift"},{id:"hash_pos",op:"math_add",a:"wp_freq",b:"time_off"},{id:"hash_dir",op:"float3",x:127.1,y:311.7,z:74.7},{id:"hash_dot",op:"vec_dot",a:"hash_pos",b:"hash_dir"},{id:"hash_sin",op:"math_sin",val:"hash_dot"},{id:"hash_sc",op:"math_mul",a:"hash_sin",b:43758.5453},{id:"noise1",op:"math_fract",val:"hash_sc"},{id:"hash_dot2",op:"math_add",a:"hash_dot",b:37,comment:"Second noise channel (offset hash)"},{id:"hash_sin2",op:"math_sin",val:"hash_dot2"},{id:"hash_sc2",op:"math_mul",a:"hash_sin2",b:43758.5453},{id:"noise2",op:"math_fract",val:"hash_sc2"},{id:"c_evolve",op:"comment",comment:"Noisy diffusion: rate 4-16x (noise1), SDF perturbation ±7.5/s (noise2), noisy decay 0.5-4.5/s (noise1) for wispy chaos."},{id:"dt",op:"builtin_get",name:"delta_time"},{id:"lap",op:"math_sub",a:"avg_nbr",b:"self_val"},{id:"noisy_rate",op:"math_mul",a:"noise1",b:12},{id:"rate",op:"math_add",a:4,b:"noisy_rate"},{id:"rate_dt",op:"math_mul",a:"rate",b:"dt"},{id:"lap_step",op:"math_mul",a:"rate_dt",b:"lap"},{id:"diffused",op:"math_add",a:"self_val",b:"lap_step"},{id:"n2_centered",op:"math_sub",a:"noise2",b:.5},{id:"perturb_raw",op:"math_mul",a:"n2_centered",b:15,comment:"±7.5/s direct SDF perturbation — large enough to visibly ripple the surface"},{id:"perturb",op:"math_mul",a:"perturb_raw",b:"dt"},{id:"perturbed",op:"math_add",a:"diffused",b:"perturb"},{id:"noisy_decay",op:"math_mul",a:"noise1",b:4,comment:"Noisy decay [0.5, 4.5]: some areas persist (tendrils), others vanish fast"},{id:"decay_rate",op:"math_add",a:.5,b:"noisy_decay"},{id:"decay_step",op:"math_mul",a:"decay_rate",b:"dt"},{id:"decayed",op:"math_add",a:"perturbed",b:"decay_step"},{id:"stamped",op:"math_min",a:"d_sphere",b:"decayed"},{id:"new_val",op:"math_min",a:"stamped",b:2},{id:"store",op:"buffer_store",buffer:"sdf_vol",index:"flat_idx",value:"new_val"}]},{id:"fn_ray_gpu",type:"shader",comment:"Raymarching kernel: orbiting sphere + ground plane, smin blending, shading, fog.",inputs:[],outputs:[],localVars:[{id:"t",type:"float",initialValue:.01},{id:"hit",type:"float",initialValue:0}],nodes:[{id:"c_setup",op:"comment",comment:"Setup: screen coords, UV, aspect ratio. normalized_global_invocation_id gives [0,1] UV directly."},{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"size",op:"resource_get_size",resource:"output_ray"},{id:"uv_2",op:"math_mul",a:"nuv.xy",b:2},{id:"uv",op:"math_sub",a:"uv_2",b:1},{id:"aspect",op:"math_div",a:"size.x",b:"size.y"},{id:"c_camera",op:"comment",comment:"Camera: slightly elevated, looking down toward scene. uv.y is negated to flip screen-space y (top-down) to world y (up)."},{id:"ro",op:"float3",x:0,y:1,z:-3},{id:"uv_y_flip",op:"math_mul",a:"uv.y",b:-1,comment:"Flip y: screen-down to world-up"},{id:"rd_x",op:"math_mul",a:"uv.x",b:"aspect"},{id:"rd_y",op:"math_sub",a:"uv_y_flip",b:.3},{id:"rd_raw",op:"float3",x:"rd_x",y:"rd_y",z:1.5},{id:"rd",op:"vec_normalize",a:"rd_raw"},{id:"c_anim",op:"comment",comment:"Animation: sphere orbits in xz plane, bobs vertically. Uses builtin time."},{id:"val_time",op:"builtin_get",name:"time"},{id:"v_orbit_speed",op:"var_get",var:"orbit_speed"},{id:"v_orbit_radius",op:"var_get",var:"orbit_radius"},{id:"v_bob_speed",op:"var_get",var:"bob_speed"},{id:"v_bob_amplitude",op:"var_get",var:"bob_amplitude"},{id:"v_bob_offset",op:"var_get",var:"bob_offset"},{id:"t_orbit",op:"math_mul",a:"val_time",b:"v_orbit_speed"},{id:"sin_orbit",op:"math_sin",val:"t_orbit"},{id:"cos_orbit",op:"math_cos",val:"t_orbit"},{id:"sc_x",op:"math_mul",a:"sin_orbit",b:"v_orbit_radius"},{id:"sc_z",op:"math_mul",a:"cos_orbit",b:"v_orbit_radius"},{id:"t_bob",op:"math_mul",a:"val_time",b:"v_bob_speed"},{id:"sin_bob",op:"math_sin",val:"t_bob"},{id:"sc_y_wave",op:"math_mul",a:"sin_bob",b:"v_bob_amplitude"},{id:"sc_y",op:"math_add",a:"sc_y_wave",b:"v_bob_offset"},{id:"sphere_center",op:"float3",x:"sc_x",y:"sc_y",z:"sc_z"},{id:"sphere_radius",op:"var_get",var:"scale"},{id:"k_sm",op:"var_get",var:"smooth_k",comment:"Smooth min blending radius"},{id:"c_march",op:"comment",comment:"Init loop variables and start march (80 steps)."},{id:"t_init",op:"var_set",var:"t",val:.01,exec_out:"hit_init"},{id:"hit_init",op:"var_set",var:"hit",val:0,exec_out:"march_loop"},{id:"march_loop",op:"flow_loop",count:80,exec_body:"body_anchor",exec_completed:"final_store"},{id:"c_sdf",op:"comment",comment:"Loop body: evaluate SDF (sphere + ground plane with smooth min)."},{id:"cur_t",op:"var_get",var:"t"},{id:"cur_ray",op:"math_mul",a:"rd",b:"cur_t"},{id:"cur_p",op:"math_add",a:"ro",b:"cur_ray",comment:"Current point along ray"},{id:"c_vol_lookup",op:"comment",comment:"Trilinear SDF lookup: continuous grid coords centered on voxels, 8-sample interpolation."},{id:"grid_offset",op:"math_add",a:"cur_p",b:1},{id:"grid_scaled",op:"math_mul",a:"grid_offset",b:16},{id:"grid_cont",op:"math_sub",a:"grid_scaled",b:.5,comment:"Center on voxels: voxel i covers [i, i+1), center at i+0.5"},{id:"grid_base",op:"math_floor",val:"grid_cont"},{id:"grid_frac",op:"math_sub",a:"grid_cont",b:"grid_base"},{id:"base_cl",op:"math_clamp",val:"grid_base",min:0,max:31},{id:"grid_next",op:"math_add",a:"grid_base",b:1},{id:"next_cl",op:"math_clamp",val:"grid_next",min:0,max:31},{id:"c_trilin_idx",op:"comment",comment:"Inline swizzles extract x/y/z from base_cl, next_cl, grid_frac for 8 flat indices."},{id:"bz_k",op:"math_mul",a:"base_cl.z",b:1024},{id:"nz_k",op:"math_mul",a:"next_cl.z",b:1024},{id:"by_32",op:"math_mul",a:"base_cl.y",b:32},{id:"ny_32",op:"math_mul",a:"next_cl.y",b:32},{id:"zy_bb",op:"math_add",a:"bz_k",b:"by_32"},{id:"zy_bn",op:"math_add",a:"bz_k",b:"ny_32"},{id:"zy_nb",op:"math_add",a:"nz_k",b:"by_32"},{id:"zy_nn",op:"math_add",a:"nz_k",b:"ny_32"},{id:"i000f",op:"math_add",a:"zy_bb",b:"base_cl.x"},{id:"i000",op:"static_cast_int",val:"i000f"},{id:"i100f",op:"math_add",a:"zy_bb",b:"next_cl.x"},{id:"i100",op:"static_cast_int",val:"i100f"},{id:"i010f",op:"math_add",a:"zy_bn",b:"base_cl.x"},{id:"i010",op:"static_cast_int",val:"i010f"},{id:"i110f",op:"math_add",a:"zy_bn",b:"next_cl.x"},{id:"i110",op:"static_cast_int",val:"i110f"},{id:"i001f",op:"math_add",a:"zy_nb",b:"base_cl.x"},{id:"i001",op:"static_cast_int",val:"i001f"},{id:"i101f",op:"math_add",a:"zy_nb",b:"next_cl.x"},{id:"i101",op:"static_cast_int",val:"i101f"},{id:"i011f",op:"math_add",a:"zy_nn",b:"base_cl.x"},{id:"i011",op:"static_cast_int",val:"i011f"},{id:"i111f",op:"math_add",a:"zy_nn",b:"next_cl.x"},{id:"i111",op:"static_cast_int",val:"i111f"},{id:"c_trilin_lerp",op:"comment",comment:"Load 8 corners and trilinearly interpolate: x lerps, then y, then z."},{id:"c000",op:"buffer_load",buffer:"sdf_vol",index:"i000"},{id:"c100",op:"buffer_load",buffer:"sdf_vol",index:"i100"},{id:"c010",op:"buffer_load",buffer:"sdf_vol",index:"i010"},{id:"c110",op:"buffer_load",buffer:"sdf_vol",index:"i110"},{id:"c001",op:"buffer_load",buffer:"sdf_vol",index:"i001"},{id:"c101",op:"buffer_load",buffer:"sdf_vol",index:"i101"},{id:"c011",op:"buffer_load",buffer:"sdf_vol",index:"i011"},{id:"c111",op:"buffer_load",buffer:"sdf_vol",index:"i111"},{id:"cx00",op:"math_mix",a:"c000",b:"c100",t:"grid_frac.x"},{id:"cx10",op:"math_mix",a:"c010",b:"c110",t:"grid_frac.x"},{id:"cx01",op:"math_mix",a:"c001",b:"c101",t:"grid_frac.x"},{id:"cx11",op:"math_mix",a:"c011",b:"c111",t:"grid_frac.x"},{id:"cxy0",op:"math_mix",a:"cx00",b:"cx10",t:"grid_frac.y"},{id:"cxy1",op:"math_mix",a:"cx01",b:"cx11",t:"grid_frac.y"},{id:"d_vol",op:"math_mix",a:"cxy0",b:"cxy1",t:"grid_frac.z"},{id:"c_edge",op:"comment",comment:"Box SDF clamps volume at grid boundary: max(interpolated, box_sdf) prevents extrusions at edges."},{id:"abs_p",op:"math_abs",val:"cur_p"},{id:"q_edge",op:"math_sub",a:"abs_p",b:1},{id:"qx_pos",op:"math_max",a:"q_edge.x",b:0},{id:"qy_pos",op:"math_max",a:"q_edge.y",b:0},{id:"qz_pos",op:"math_max",a:"q_edge.z",b:0},{id:"q_pos",op:"float3",x:"qx_pos",y:"qy_pos",z:"qz_pos"},{id:"len_q",op:"vec_length",a:"q_pos"},{id:"max_qxy",op:"math_max",a:"q_edge.x",b:"q_edge.y"},{id:"max_qxyz",op:"math_max",a:"max_qxy",b:"q_edge.z"},{id:"q_interior",op:"math_min",a:"max_qxyz",b:0},{id:"d_box",op:"math_add",a:"len_q",b:"q_interior"},{id:"d_sphere",op:"math_max",a:"d_vol",b:"d_box"},{id:"d_plane",op:"math_add",a:"cur_p.y",b:.5,comment:"Ground plane SDF: p.y + 0.5"},{id:"sm_diff",op:"math_sub",a:"d_sphere",b:"d_plane",comment:"Smooth min: h = clamp(0.5 + 0.5*(a-b)/k, 0, 1); mix(a,b,h) - k*h*(1-h)"},{id:"sm_div",op:"math_div",a:"sm_diff",b:"k_sm"},{id:"sm_half",op:"math_mul",a:"sm_div",b:.5},{id:"sm_raw",op:"math_add",a:"sm_half",b:.5},{id:"sm_h",op:"math_clamp",val:"sm_raw",min:0,max:1},{id:"sm_lerp",op:"math_mix",a:"d_sphere",b:"d_plane",t:"sm_h"},{id:"sm_inv",op:"math_sub",a:1,b:"sm_h"},{id:"sm_prod",op:"math_mul",a:"sm_h",b:"sm_inv"},{id:"sm_corr",op:"math_mul",a:"k_sm",b:"sm_prod"},{id:"body_anchor",op:"math_sub",a:"sm_lerp",b:"sm_corr",exec_out:"branch_hit",comment:"Total SDF distance; also exec anchor for loop body"},{id:"is_hit",op:"math_lt",a:"body_anchor",b:.001,comment:"Hit check: distance < threshold"},{id:"branch_hit",op:"flow_branch",cond:"is_hit",exec_true:"set_hit",exec_false:"advance_t"},{id:"set_hit",op:"var_set",var:"hit",val:1},{id:"next_t",op:"math_add",a:"cur_t",b:"body_anchor",comment:"Miss: advance ray by SDF distance"},{id:"advance_t",op:"var_set",var:"t",val:"next_t"},{id:"c_hitpoint",op:"comment",comment:"Post-loop: compute hit point and recompute blend factor for shading."},{id:"final_t",op:"var_get",var:"t"},{id:"hit_ray",op:"math_mul",a:"rd",b:"final_t"},{id:"hit_p",op:"math_add",a:"ro",b:"hit_ray"},{id:"hp_sub_c",op:"math_sub",a:"hit_p",b:"sphere_center",comment:"Recompute distances at hit point for blend factor"},{id:"hp_len",op:"vec_length",a:"hp_sub_c"},{id:"hp_d_sphere",op:"math_sub",a:"hp_len",b:"sphere_radius"},{id:"hp_d_plane",op:"math_add",a:"hit_p.y",b:.5},{id:"bl_diff",op:"math_sub",a:"hp_d_sphere",b:"hp_d_plane",comment:"Blend factor (same smin formula): 0 = sphere, 1 = plane"},{id:"bl_div",op:"math_div",a:"bl_diff",b:"k_sm"},{id:"bl_half",op:"math_mul",a:"bl_div",b:.5},{id:"bl_raw",op:"math_add",a:"bl_half",b:.5},{id:"blend_h",op:"math_clamp",val:"bl_raw",min:0,max:1},{id:"c_normals",op:"comment",comment:"Normals: analytical blend of sphere normal and plane normal by smin factor."},{id:"sphere_norm",op:"vec_normalize",a:"hp_sub_c"},{id:"plane_norm",op:"float3",x:0,y:1,z:0},{id:"blended_norm",op:"math_mix",a:"sphere_norm",b:"plane_norm",t:"blend_h"},{id:"normal",op:"vec_normalize",a:"blended_norm"},{id:"c_surface",op:"comment",comment:"Surface color: warm orange sphere + checkerboard floor, blended by smin proximity."},{id:"sphere_col",op:"var_get",var:"sphere_color"},{id:"floor_x",op:"math_floor",val:"hit_p.x",comment:"Checkerboard: fract((floor(x) + floor(z)) * 0.5) * 2"},{id:"floor_z",op:"math_floor",val:"hit_p.z"},{id:"floor_sum",op:"math_add",a:"floor_x",b:"floor_z"},{id:"floor_half",op:"math_mul",a:"floor_sum",b:.5},{id:"floor_frac",op:"math_fract",val:"floor_half"},{id:"checker",op:"math_mul",a:"floor_frac",b:2},{id:"floor_dark",op:"float3",x:.35,y:.35,z:.4},{id:"floor_light",op:"float3",x:.55,y:.55,z:.6},{id:"floor_col",op:"math_mix",a:"floor_dark",b:"floor_light",t:"checker"},{id:"surface_col",op:"math_mix",a:"sphere_col",b:"floor_col",t:"blend_h"},{id:"c_lighting",op:"comment",comment:"Lighting: Lambert diffuse + Blinn-Phong specular with directional light."},{id:"light_raw",op:"float3",x:.6,y:.8,z:-.4},{id:"light_dir",op:"vec_normalize",a:"light_raw"},{id:"ndotl_raw",op:"vec_dot",a:"normal",b:"light_dir"},{id:"ndotl",op:"math_max",a:"ndotl_raw",b:.05},{id:"neg_rd",op:"math_mul",a:"rd",b:-1,comment:"Specular: half-vector method"},{id:"half_raw",op:"math_add",a:"light_dir",b:"neg_rd"},{id:"half_dir",op:"vec_normalize",a:"half_raw"},{id:"ndoth_raw",op:"vec_dot",a:"normal",b:"half_dir"},{id:"ndoth",op:"math_max",a:"ndoth_raw",b:0},{id:"v_spec_power",op:"var_get",var:"spec_power"},{id:"spec_pow",op:"math_pow",a:"ndoth",b:"v_spec_power"},{id:"specular",op:"math_mul",a:"spec_pow",b:.4},{id:"diff_contrib",op:"math_mul",a:"surface_col",b:"ndotl",comment:"Combine diffuse and specular"},{id:"spec_vec",op:"float3",xyz:"specular"},{id:"lit_color",op:"math_add",a:"diff_contrib",b:"spec_vec"},{id:"c_fog",op:"comment",comment:"Exponential distance fog blending to blue-grey sky."},{id:"v_fog_density",op:"var_get",var:"fog_density"},{id:"neg_fog_density",op:"math_mul",a:"v_fog_density",b:-1},{id:"fog_neg",op:"math_mul",a:"final_t",b:"neg_fog_density"},{id:"fog_fac",op:"math_exp",val:"fog_neg"},{id:"fog_col",op:"float3",x:.55,y:.62,z:.78},{id:"fogged",op:"math_mix",a:"fog_col",b:"lit_color",t:"fog_fac"},{id:"c_output",op:"comment",comment:"Final output: blend hit/miss by hit flag, write to texture."},{id:"did_hit",op:"var_get",var:"hit"},{id:"final_rgb",op:"math_mix",a:"fog_col",b:"fogged",t:"did_hit"},{id:"out_rgba",op:"float4",xyz:"final_rgb",w:1},{id:"final_store",op:"texture_store",tex:"output_ray",coords:"gid.xy",value:"out_rgba"}]}]},Vh={version:"1.0.0",meta:{name:"Particle Simulation"},comment:"Compute-based particle simulation with vertex/fragment rendering. Demonstrates struct-typed buffers, aspect ratio correction, cmd_draw with additive blending, hash noise, branchless selection via math_mix, and per-particle quad generation in vertex shader.",entryPoint:"fn_main_cpu",inputs:[{id:"particle_count",type:"float",default:1e3,ui:{min:1,max:1e6,widget:"slider"},comment:"Number of active particles (max 1M)."}],tuningParams:[{id:"gravity",type:"float",default:.05,ui:{min:0,max:.5},comment:"Gravitational acceleration."},{id:"velocity_spread",type:"float",default:.2,ui:{min:0,max:1},comment:"Initial velocity randomness (±half)."},{id:"lifetime_base",type:"float",default:1,ui:{min:.1,max:5},comment:"Minimum particle lifetime (seconds)."},{id:"lifetime_range",type:"float",default:4,ui:{min:0,max:10},comment:"Additional random lifetime range."},{id:"quad_size",type:"float",default:.01,ui:{min:.001,max:.05},comment:"Particle quad half-size in clip space."},{id:"particle_color",type:"float3",default:[1,.7,.3],comment:"Particle emission color."}],structs:[{id:"Particle",members:[{name:"pos",type:"float2"},{name:"vel",type:"float2"},{name:"lifetime",type:"float"},{name:"age",type:"float"}]},{id:"VertexOutput",members:[{name:"pos",type:"float4",builtin:"position"},{name:"quad_uv",type:"float2",location:0},{name:"age_ratio",type:"float",location:1}]}],resources:[{id:"output_tex",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}},{id:"particles",type:"buffer",comment:"Struct-typed particle buffer: up to 1M Particle structs {pos, vel, lifetime, age}. Starts zeroed so age(0) >= lifetime(0) triggers immediate respawn.",dataType:"Particle",size:{mode:"fixed",value:1e6},persistence:{retain:!0,clearOnResize:!1,clearEveryFrame:!1,cpuAccess:!1}}],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],comment:"CPU entry: dispatch particle simulation (N compute threads), then draw particle quads (N*6 vertices).",nodes:[{id:"pc",op:"var_get",var:"particle_count"},{id:"pc_int",op:"static_cast_int",val:"pc"},{id:"dispatch_sim",op:"cmd_dispatch",func:"fn_simulate_gpu",threads:["pc_int",1,1],exec_out:"draw_particles"},{id:"vert_count_f",op:"math_mul",a:"pc",b:6,comment:"6 vertices per particle (2 triangles per quad)."},{id:"vert_count",op:"static_cast_int",val:"vert_count_f"},{id:"draw_particles",op:"cmd_draw",target:"output_tex",vertex:"fn_vertex",fragment:"fn_fragment",count:"vert_count",pipeline:{topology:"triangle-list",blend:{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}}}]},{id:"fn_simulate_gpu",type:"shader",comment:"Per-particle simulation: load Particle struct, physics with noise drift and aspect correction, branchless dead/alive selection via math_mix, store back. 1 thread per particle.",inputs:[],outputs:[],localVars:[],nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"dt",op:"builtin_get",name:"delta_time"},{id:"time",op:"builtin_get",name:"time"},{id:"gid_x_f",op:"static_cast_float",val:"gid.x",comment:"global_invocation_id is int3; cast to float for hash seed."},{id:"c_aspect",op:"comment",comment:"Aspect ratio from output texture size: scale X velocity so equal magnitude = equal pixel distance."},{id:"os",op:"resource_get_size",resource:"output_tex"},{id:"os_x",op:"static_cast_float",val:"os.x"},{id:"os_y",op:"static_cast_float",val:"os.y"},{id:"aspect",op:"math_div",a:"os_x",b:"os_y"},{id:"inv_aspect",op:"math_div",a:1,b:"aspect"},{id:"c_load",op:"comment",comment:"Load Particle struct from buffer."},{id:"particle",op:"buffer_load",buffer:"particles",index:"gid.x"},{id:"ld_pos",op:"struct_extract",struct:"particle",field:"pos"},{id:"ld_vel",op:"struct_extract",struct:"particle",field:"vel"},{id:"ld_lt",op:"struct_extract",struct:"particle",field:"lifetime"},{id:"ld_age",op:"struct_extract",struct:"particle",field:"age"},{id:"is_dead",op:"math_step",edge:"ld_lt",x:"ld_age",comment:"step(lifetime, age) = 1.0 when dead. step(0,0)=1 so initially all particles respawn."},{id:"c_respawn",op:"comment",comment:"Hash noise for 5 respawn channels: fract(sin(seed + offset) * 43758.5453)."},{id:"seed_base",op:"math_mul",a:"gid_x_f",b:127.1},{id:"seed",op:"math_add",a:"seed_base",b:"time"},{id:"sin_r1",op:"math_sin",val:"seed"},{id:"sc_r1",op:"math_mul",a:"sin_r1",b:43758.5453},{id:"r1",op:"math_fract",val:"sc_r1"},{id:"seed_r2",op:"math_add",a:"seed",b:1},{id:"sin_r2",op:"math_sin",val:"seed_r2"},{id:"sc_r2",op:"math_mul",a:"sin_r2",b:43758.5453},{id:"r2",op:"math_fract",val:"sc_r2"},{id:"seed_r3",op:"math_add",a:"seed",b:2},{id:"sin_r3",op:"math_sin",val:"seed_r3"},{id:"sc_r3",op:"math_mul",a:"sin_r3",b:43758.5453},{id:"r3",op:"math_fract",val:"sc_r3"},{id:"seed_r4",op:"math_add",a:"seed",b:3},{id:"sin_r4",op:"math_sin",val:"seed_r4"},{id:"sc_r4",op:"math_mul",a:"sin_r4",b:43758.5453},{id:"r4",op:"math_fract",val:"sc_r4"},{id:"seed_r5",op:"math_add",a:"seed",b:4},{id:"sin_r5",op:"math_sin",val:"seed_r5"},{id:"sc_r5",op:"math_mul",a:"sin_r5",b:43758.5453},{id:"r5",op:"math_fract",val:"sc_r5"},{id:"v_vel_spread",op:"var_get",var:"velocity_spread"},{id:"v_lt_base",op:"var_get",var:"lifetime_base"},{id:"v_lt_range",op:"var_get",var:"lifetime_range"},{id:"c_resp_val",op:"comment",comment:"Respawn values: random position [0,1], velocity (X scaled by 1/aspect), lifetime."},{id:"r3_c",op:"math_sub",a:"r3",b:.5},{id:"resp_vx_raw",op:"math_mul",a:"r3_c",b:"v_vel_spread"},{id:"resp_vx",op:"math_mul",a:"resp_vx_raw",b:"inv_aspect"},{id:"r4_c",op:"math_sub",a:"r4",b:.5},{id:"resp_vy",op:"math_mul",a:"r4_c",b:"v_vel_spread"},{id:"lt_scale",op:"math_mul",a:"r5",b:"v_lt_range"},{id:"resp_lt",op:"math_add",a:"lt_scale",b:"v_lt_base"},{id:"c_drift",op:"comment",comment:"Drift noise: separate hash family for per-frame velocity perturbation."},{id:"drift_base",op:"math_mul",a:"gid_x_f",b:73.7},{id:"drift_seed",op:"math_add",a:"drift_base",b:"time"},{id:"sin_d1",op:"math_sin",val:"drift_seed"},{id:"sc_d1",op:"math_mul",a:"sin_d1",b:43758.5453},{id:"drift1",op:"math_fract",val:"sc_d1"},{id:"drift_seed2",op:"math_add",a:"drift_seed",b:37},{id:"sin_d2",op:"math_sin",val:"drift_seed2"},{id:"sc_d2",op:"math_mul",a:"sin_d2",b:43758.5453},{id:"drift2",op:"math_fract",val:"sc_d2"},{id:"c_physics",op:"comment",comment:"Euler integration: velocity drift (X scaled by 1/aspect) + gentle gravity, position update."},{id:"dvx_raw",op:"math_sub",a:"drift1",b:.5},{id:"dvx_scaled",op:"math_mul",a:"dvx_raw",b:"inv_aspect"},{id:"dvx",op:"math_mul",a:"dvx_scaled",b:"dt"},{id:"dvy_raw",op:"math_sub",a:"drift2",b:.5},{id:"dvy_drift",op:"math_mul",a:"dvy_raw",b:"dt"},{id:"v_gravity",op:"var_get",var:"gravity"},{id:"gravity_dt",op:"math_mul",a:"v_gravity",b:"dt"},{id:"dvy",op:"math_sub",a:"dvy_drift",b:"gravity_dt"},{id:"alive_vx",op:"math_add",a:"ld_vel.x",b:"dvx"},{id:"alive_vy",op:"math_add",a:"ld_vel.y",b:"dvy"},{id:"vx_dt",op:"math_mul",a:"alive_vx",b:"dt"},{id:"vy_dt",op:"math_mul",a:"alive_vy",b:"dt"},{id:"alive_px",op:"math_add",a:"ld_pos.x",b:"vx_dt"},{id:"alive_py",op:"math_add",a:"ld_pos.y",b:"vy_dt"},{id:"alive_age",op:"math_add",a:"ld_age",b:"dt"},{id:"c_select",op:"comment",comment:"Branchless dead/alive: mix(alive_val, respawn_val, is_dead). Both paths computed unconditionally."},{id:"final_px",op:"math_mix",a:"alive_px",b:"r1",t:"is_dead"},{id:"final_py",op:"math_mix",a:"alive_py",b:"r2",t:"is_dead"},{id:"final_vx",op:"math_mix",a:"alive_vx",b:"resp_vx",t:"is_dead"},{id:"final_vy",op:"math_mix",a:"alive_vy",b:"resp_vy",t:"is_dead"},{id:"final_lt",op:"math_mix",a:"ld_lt",b:"resp_lt",t:"is_dead"},{id:"final_age",op:"math_mix",a:"alive_age",b:0,t:"is_dead"},{id:"final_pos",op:"float2",x:"final_px",y:"final_py"},{id:"final_vel",op:"float2",x:"final_vx",y:"final_vy"},{id:"new_particle",op:"struct_construct",type:"Particle",values:{pos:"final_pos",vel:"final_vel",lifetime:"final_lt",age:"final_age"}},{id:"st_particle",op:"buffer_store",buffer:"particles",index:"gid.x",value:"new_particle"}]},{id:"fn_vertex",type:"shader",comment:"Vertex shader: generates a small quad (2 triangles, 6 verts) per particle. Reads Particle struct from buffer, outputs clip-space position (aspect-corrected) and varyings for fragment shader.",inputs:[{id:"v_idx",type:"int",builtin:"vertex_index"}],outputs:[{id:"out",type:"VertexOutput"}],localVars:[],nodes:[{id:"vi",op:"var_get",var:"v_idx"},{id:"vi_f",op:"static_cast_float",val:"vi"},{id:"c_index",op:"comment",comment:"Decompose vertex_index: particle_index = floor(vi/6), corner = vi % 6."},{id:"pidx_raw",op:"math_div",a:"vi_f",b:6},{id:"pidx_f",op:"math_floor",val:"pidx_raw"},{id:"pidx_i",op:"static_cast_int",val:"pidx_f"},{id:"corner_f",op:"math_mod",a:"vi_f",b:6},{id:"corner_i",op:"static_cast_int",val:"corner_f"},{id:"c_quad",op:"comment",comment:"Quad corner offsets: 6 vertices forming 2 triangles. UV ranges [-1,1]."},{id:"quad_x",op:"array_construct",values:[-1,1,-1,-1,1,1]},{id:"quad_y",op:"array_construct",values:[-1,-1,1,1,-1,1]},{id:"qx",op:"array_extract",array:"quad_x",index:"corner_i"},{id:"qy",op:"array_extract",array:"quad_y",index:"corner_i"},{id:"c_aspect",op:"comment",comment:"Aspect ratio from output_size builtin for square quads."},{id:"os",op:"builtin_get",name:"output_size"},{id:"os_x",op:"static_cast_float",val:"os.x"},{id:"os_y",op:"static_cast_float",val:"os.y"},{id:"aspect",op:"math_div",a:"os_x",b:"os_y"},{id:"inv_aspect",op:"math_div",a:1,b:"aspect"},{id:"c_load",op:"comment",comment:"Load Particle struct from buffer."},{id:"particle",op:"buffer_load",buffer:"particles",index:"pidx_i"},{id:"p_pos",op:"struct_extract",struct:"particle",field:"pos"},{id:"p_lt",op:"struct_extract",struct:"particle",field:"lifetime"},{id:"p_age",op:"struct_extract",struct:"particle",field:"age"},{id:"c_clip",op:"comment",comment:"Convert particle [0,1] position to clip space [-1,1], offset by quad corner (X shrunk by 1/aspect for square quads)."},{id:"cx_raw",op:"math_mul",a:"p_pos.x",b:2},{id:"clip_x",op:"math_sub",a:"cx_raw",b:1},{id:"cy_raw",op:"math_mul",a:"p_pos.y",b:2},{id:"clip_y",op:"math_sub",a:"cy_raw",b:1},{id:"v_quad_size",op:"var_get",var:"quad_size"},{id:"ox_raw",op:"math_mul",a:"qx",b:"v_quad_size"},{id:"ox",op:"math_mul",a:"ox_raw",b:"inv_aspect"},{id:"oy",op:"math_mul",a:"qy",b:"v_quad_size"},{id:"final_x",op:"math_add",a:"clip_x",b:"ox"},{id:"final_y",op:"math_add",a:"clip_y",b:"oy"},{id:"pos",op:"float4",x:"final_x",y:"final_y",z:0,w:1},{id:"quad_uv",op:"float2",x:"qx",y:"qy"},{id:"age_ratio",op:"math_div",a:"p_age",b:"p_lt"},{id:"ret_struct",op:"struct_construct",type:"VertexOutput",values:{pos:"pos",quad_uv:"quad_uv",age_ratio:"age_ratio"}},{id:"ret",op:"func_return",val:"ret_struct"}]},{id:"fn_fragment",type:"shader",comment:"Fragment shader: computes Gaussian falloff from quad UV and age fade. Additive blending accumulates overlapping particle contributions.",inputs:[{id:"in",type:"VertexOutput"}],outputs:[{id:"color",type:"float4"}],localVars:[],nodes:[{id:"get_in",op:"var_get",var:"in"},{id:"uv",op:"struct_extract",struct:"get_in",field:"quad_uv"},{id:"ar",op:"struct_extract",struct:"get_in",field:"age_ratio"},{id:"c_gauss",op:"comment",comment:"Gaussian falloff: exp(-4.5 * dist²) where UV spans [-1,1] across quad. σ≈1px at ~3px quad."},{id:"ux2",op:"math_mul",a:"uv.x",b:"uv.x"},{id:"uy2",op:"math_mul",a:"uv.y",b:"uv.y"},{id:"dist2",op:"math_add",a:"ux2",b:"uy2"},{id:"neg_d2",op:"math_mul",a:"dist2",b:-4.5},{id:"falloff",op:"math_exp",val:"neg_d2"},{id:"c_age",op:"comment",comment:"Age fade: (1 - age_ratio)² — bright at birth, fades to zero at death."},{id:"inv_age",op:"math_sub",a:1,b:"ar"},{id:"brightness",op:"math_mul",a:"inv_age",b:"inv_age"},{id:"fb",op:"math_mul",a:"falloff",b:"brightness"},{id:"particle_col",op:"var_get",var:"particle_color"},{id:"rgb",op:"math_mul",a:"particle_col",b:"fb"},{id:"out_color",op:"float4",xyz:"rgb",w:"fb",comment:"Alpha = combined falloff for softer edges under additive blending."},{id:"ret",op:"func_return",val:"out_color"}]}]},Gh={version:"1.0.0",meta:{name:"RGB Histogram"},comment:"Builds an RGB histogram from an input texture using atomic counters on the GPU, then renders the histogram as an additive overlay in the bottom-right corner using cmd_draw with vertex/fragment shaders. Demonstrates atomic_add for concurrent binning, cmd_copy_buffer to move atomic data into readable buffers, and cmd_draw with blend modes.",entryPoint:"fn_main_cpu",inputs:[{id:"input_visual",type:"texture2d",format:"rgba8",comment:"Input video/image stream."}],structs:[{id:"HistVertex",members:[{name:"pos",type:"float4",builtin:"position"},{name:"color",type:"float4",location:0}]}],resources:[{id:"output_tex",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}},{id:"histogram",type:"atomic_counter",dataType:"int",size:{mode:"fixed",value:768},comment:"256 bins x 3 channels (R: 0-255, G: 256-511, B: 512-767). Cleared each frame by compute kernel.",persistence:{retain:!0,clearOnResize:!1,clearEveryFrame:!1,cpuAccess:!1}},{id:"hist_max",type:"atomic_counter",dataType:"int",size:{mode:"fixed",value:3},comment:"Per-channel max bin count for normalization (R, G, B).",persistence:{retain:!0,clearOnResize:!1,clearEveryFrame:!1,cpuAccess:!1}},{id:"hist_read",type:"buffer",dataType:"int",size:{mode:"fixed",value:768},comment:"Readable copy of histogram for vertex shader. WebGPU vertex shaders require storage read-only, so atomic data is copied here via cmd_copy_buffer.",persistence:{retain:!0,clearOnResize:!1,clearEveryFrame:!1,cpuAccess:!1}},{id:"max_read",type:"buffer",dataType:"int",size:{mode:"fixed",value:3},comment:"Readable copy of hist_max for vertex shader.",persistence:{retain:!0,clearOnResize:!1,clearEveryFrame:!1,cpuAccess:!1}}],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],comment:"Orchestration: clear counters → accumulate histogram + copy input → find max → copy to readable buffers → draw overlay.",nodes:[{id:"clr_hist",op:"cmd_dispatch",func:"fn_clear_hist",threads:[768,1,1],exec_out:"clr_max"},{id:"clr_max",op:"cmd_dispatch",func:"fn_clear_max",threads:[3,1,1],exec_out:"do_accum"},{id:"tex_size",op:"resource_get_size",resource:"output_tex"},{id:"do_accum",op:"cmd_dispatch",func:"fn_accumulate",threads:"tex_size",exec_out:"do_max"},{id:"do_max",op:"cmd_dispatch",func:"fn_find_max",threads:[256,1,1],exec_out:"copy_hist"},{id:"copy_hist",op:"cmd_copy_buffer",src:"histogram",dst:"hist_read",exec_out:"copy_max",comment:"Copy atomic counters to read-only buffers for vertex shader access."},{id:"copy_max",op:"cmd_copy_buffer",src:"hist_max",dst:"max_read",exec_out:"draw_hist"},{id:"draw_hist",op:"cmd_draw",target:"output_tex",vertex:"fn_hist_vertex",fragment:"fn_hist_fragment",count:4608,comment:"256 bins × 3 channels × 6 verts/bar = 4608 vertices.",pipeline:{topology:"triangle-list",loadOp:"load",blend:{color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"},alpha:{srcFactor:"zero",dstFactor:"one",operation:"add"}}}}]},{id:"fn_clear_hist",type:"shader",inputs:[],outputs:[],localVars:[],workgroupSize:[256,1,1],comment:"Zero all 768 histogram bins.",nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"clr",op:"atomic_store",counter:"histogram",index:"gid.x",value:0}]},{id:"fn_clear_max",type:"shader",inputs:[],outputs:[],localVars:[],workgroupSize:[64,1,1],comment:"Zero per-channel max counters.",nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"clr",op:"atomic_store",counter:"hist_max",index:"gid.x",value:0}]},{id:"fn_accumulate",type:"shader",inputs:[],outputs:[],localVars:[],comment:"Per-pixel: sample input, write to output, and atomicAdd to R/G/B histogram bins.",nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"color",op:"texture_sample",tex:"input_visual",coords:"nuv.xy"},{id:"opaque",op:"float4",x:"color.x",y:"color.y",z:"color.z",w:1},{id:"store_px",op:"texture_store",tex:"output_tex",coords:"gid.xy",value:"opaque",exec_out:"add_r"},{id:"c_bin",op:"comment",comment:"Quantize R/G/B to 0-255 and add channel offset for flat layout."},{id:"r_s",op:"math_mul",a:"color.x",b:255},{id:"r_c",op:"math_clamp",val:"r_s",min:0,max:255},{id:"r_f",op:"math_floor",val:"r_c"},{id:"r_i",op:"static_cast_int",val:"r_f"},{id:"add_r",op:"atomic_add",counter:"histogram",index:"r_i",value:1,exec_out:"add_g"},{id:"g_s",op:"math_mul",a:"color.y",b:255},{id:"g_c",op:"math_clamp",val:"g_s",min:0,max:255},{id:"g_off",op:"math_add",a:"g_c",b:256},{id:"g_f",op:"math_floor",val:"g_off"},{id:"g_i",op:"static_cast_int",val:"g_f"},{id:"add_g",op:"atomic_add",counter:"histogram",index:"g_i",value:1,exec_out:"add_b"},{id:"b_s",op:"math_mul",a:"color.z",b:255},{id:"b_c",op:"math_clamp",val:"b_s",min:0,max:255},{id:"b_off",op:"math_add",a:"b_c",b:512},{id:"b_f",op:"math_floor",val:"b_off"},{id:"b_i",op:"static_cast_int",val:"b_f"},{id:"add_b",op:"atomic_add",counter:"histogram",index:"b_i",value:1}]},{id:"fn_find_max",type:"shader",inputs:[],outputs:[],localVars:[],workgroupSize:[256,1,1],comment:"Each of 256 threads reads its R/G/B bins and atomicMax into per-channel max.",nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"gf",op:"static_cast_float",val:"gid.x"},{id:"rv",op:"atomic_load",counter:"histogram",index:"gid.x"},{id:"mr",op:"atomic_max",counter:"hist_max",index:0,value:"rv",exec_out:"mg"},{id:"gi_f",op:"math_add",a:"gf",b:256},{id:"gi",op:"static_cast_int",val:"gi_f"},{id:"gv",op:"atomic_load",counter:"histogram",index:"gi"},{id:"mg",op:"atomic_max",counter:"hist_max",index:1,value:"gv",exec_out:"mb"},{id:"bi_f",op:"math_add",a:"gf",b:512},{id:"bi",op:"static_cast_int",val:"bi_f"},{id:"bv",op:"atomic_load",counter:"histogram",index:"bi"},{id:"mb",op:"atomic_max",counter:"hist_max",index:2,value:"bv"}]},{id:"fn_hist_vertex",type:"shader",comment:"Vertex shader: generates bar quads for 256 bins × 3 channels. Reads histogram counts from int buffer, normalizes by per-channel max, and positions bars in the bottom-right corner of clip space.",inputs:[{id:"v_idx",type:"int",builtin:"vertex_index"}],outputs:[{id:"out",type:"HistVertex"}],localVars:[],nodes:[{id:"vi",op:"var_get",var:"v_idx"},{id:"vi_f",op:"static_cast_float",val:"vi"},{id:"c_decompose",op:"comment",comment:"bar = floor(vi/6) → 0..767, corner = vi%6 → 0..5"},{id:"bar_raw",op:"math_div",a:"vi_f",b:6},{id:"bar_f",op:"math_floor",val:"bar_raw"},{id:"bar_i",op:"static_cast_int",val:"bar_f"},{id:"corner_f",op:"math_mod",a:"vi_f",b:6},{id:"corner_i",op:"static_cast_int",val:"corner_f"},{id:"c_channel",op:"comment",comment:"channel = floor(bar/256) → 0,1,2; bin = bar%256 → 0..255"},{id:"ch_raw",op:"math_div",a:"bar_f",b:256},{id:"ch_f",op:"math_floor",val:"ch_raw"},{id:"ch_i",op:"static_cast_int",val:"ch_f"},{id:"bin_f",op:"math_mod",a:"bar_f",b:256},{id:"c_quad",op:"comment",comment:"Quad offsets: 6 vertices forming 2 triangles."},{id:"qx_arr",op:"array_construct",values:[0,1,0,0,1,1]},{id:"qy_arr",op:"array_construct",values:[0,0,1,1,0,1]},{id:"qx",op:"array_extract",array:"qx_arr",index:"corner_i"},{id:"qy",op:"array_extract",array:"qy_arr",index:"corner_i"},{id:"c_height",op:"comment",comment:"Read histogram count, normalize by per-channel max."},{id:"count",op:"buffer_load",buffer:"hist_read",index:"bar_i"},{id:"count_f",op:"static_cast_float",val:"count"},{id:"max_v",op:"buffer_load",buffer:"max_read",index:"ch_i"},{id:"max_f",op:"static_cast_float",val:"max_v"},{id:"safe_max",op:"math_max",a:"max_f",b:1},{id:"height",op:"math_div",a:"count_f",b:"safe_max"},{id:"c_pos",op:"comment",comment:"Clip-space position: histogram rect x [0.4, 0.98], y [-0.98, -0.5]."},{id:"bx",op:"math_add",a:"bin_f",b:"qx"},{id:"bx_n",op:"math_div",a:"bx",b:256},{id:"bx_s",op:"math_mul",a:"bx_n",b:.58},{id:"cx",op:"math_add",a:"bx_s",b:.4},{id:"h_s",op:"math_mul",a:"height",b:.48},{id:"y_off",op:"math_mul",a:"qy",b:"h_s"},{id:"cy",op:"math_add",a:-.98,b:"y_off"},{id:"pos",op:"float4",x:"cx",y:"cy",z:0,w:1},{id:"c_color",op:"comment",comment:"Channel color: R=(1,0,0), G=(0,1,0), B=(0,0,1) with alpha for blending."},{id:"is_r",op:"math_eq",a:"ch_f",b:0},{id:"is_g",op:"math_eq",a:"ch_f",b:1},{id:"is_b",op:"math_eq",a:"ch_f",b:2},{id:"cr",op:"static_cast_float",val:"is_r"},{id:"cg",op:"static_cast_float",val:"is_g"},{id:"cb",op:"static_cast_float",val:"is_b"},{id:"color",op:"float4",x:"cr",y:"cg",z:"cb",w:.5},{id:"ret",op:"struct_construct",type:"HistVertex",values:{pos:"pos",color:"color"}},{id:"out",op:"func_return",val:"ret"}]},{id:"fn_hist_fragment",type:"shader",comment:"Fragment shader: pass-through of interpolated bar color.",inputs:[{id:"in",type:"HistVertex"}],outputs:[{id:"color",type:"float4"}],localVars:[],nodes:[{id:"vin",op:"var_get",var:"in"},{id:"col",op:"struct_extract",struct:"vin",field:"color"},{id:"ret",op:"func_return",val:"col"}]}]},Wh={version:"1.0.0",meta:{name:"Video Feedback"},comment:"Classic video feedback with whispy noise trails. A persistent texture holds the previous frame, sampled at 3 zoom levels with hash-noise UV offsets. The averaged, decayed feedback is composited with the live input via max, then copied back for the next frame.",entryPoint:"fn_main_cpu",inputs:[{id:"input_visual",type:"texture2d",format:"rgba8",comment:"Live input video stream."}],tuningParams:[{id:"noise_speed",type:"float",default:17.3,ui:{min:0,max:50},comment:"Hash noise animation speed."},{id:"noise_displacement",type:"float",default:.006,ui:{min:0,max:.05},comment:"UV displacement magnitude for whispy trails."},{id:"zoom1",type:"float",default:.996,ui:{min:.95,max:1},comment:"First feedback tap zoom level."},{id:"zoom2",type:"float",default:.992,ui:{min:.95,max:1},comment:"Second feedback tap zoom level."},{id:"zoom3",type:"float",default:.988,ui:{min:.95,max:1},comment:"Third feedback tap zoom level."},{id:"decay",type:"float",default:.317,ui:{min:0,max:.5},comment:"Per-tap decay factor (total = decay * 3 taps)."}],resources:[{id:"output_tex",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}},{id:"feedback_tex",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},comment:"Persistent feedback buffer: retains previous frame content, never cleared per-frame.",persistence:{retain:!0,clearOnResize:!0,clearEveryFrame:!1,cpuAccess:!1}}],structs:[],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],comment:"CPU entry: compute feedback effect, then copy output to feedback texture for next frame.",nodes:[{id:"size",op:"resource_get_size",resource:"output_tex"},{id:"dispatch",op:"cmd_dispatch",func:"fn_feedback",threads:"size",exec_out:"copy"},{id:"copy",op:"cmd_copy_texture",src:"output_tex",dst:"feedback_tex"}]},{id:"fn_feedback",type:"shader",comment:"Compute kernel: 3-tap zoomed feedback with hash noise for whispy trails, composited with live input.",inputs:[],outputs:[],localVars:[],nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"time",op:"builtin_get",name:"time"},{id:"c_noise",op:"comment",comment:"Hash noise for whispy UV offsets: fract(sin(dot(uv, magic) + time*17.3) * 43758.5453). Two channels for x/y displacement."},{id:"h_p1",op:"float2",x:127.1,y:311.7},{id:"h_dot",op:"vec_dot",a:"nuv.xy",b:"h_p1"},{id:"v_noise_speed",op:"var_get",var:"noise_speed"},{id:"h_t",op:"math_mul",a:"time",b:"v_noise_speed"},{id:"h_in",op:"math_add",a:"h_dot",b:"h_t"},{id:"h_sin1",op:"math_sin",val:"h_in"},{id:"h_sc1",op:"math_mul",a:"h_sin1",b:43758.5453},{id:"n1",op:"math_fract",val:"h_sc1"},{id:"h_in2",op:"math_add",a:"h_in",b:37},{id:"h_sin2",op:"math_sin",val:"h_in2"},{id:"h_sc2",op:"math_mul",a:"h_sin2",b:43758.5453},{id:"n2",op:"math_fract",val:"h_sc2"},{id:"n1c",op:"math_sub",a:"n1",b:.5},{id:"n2c",op:"math_sub",a:"n2",b:.5},{id:"v_noise_disp",op:"var_get",var:"noise_displacement"},{id:"nx",op:"math_mul",a:"n1c",b:"v_noise_disp"},{id:"ny",op:"math_mul",a:"n2c",b:"v_noise_disp"},{id:"noise",op:"float2",x:"nx",y:"ny"},{id:"c_taps",op:"comment",comment:"3 taps at increasing zoom levels (0.996, 0.992, 0.988) toward center. Each uses a different noise offset for organic, whispy trail movement."},{id:"cuv",op:"math_sub",a:"nuv.xy",b:.5},{id:"v_zoom1",op:"var_get",var:"zoom1"},{id:"v_zoom2",op:"var_get",var:"zoom2"},{id:"v_zoom3",op:"var_get",var:"zoom3"},{id:"z1",op:"math_mul",a:"cuv",b:"v_zoom1"},{id:"u1r",op:"math_add",a:"z1",b:.5},{id:"u1",op:"math_add",a:"u1r",b:"noise"},{id:"fb1",op:"texture_sample",tex:"feedback_tex",coords:"u1"},{id:"z2",op:"math_mul",a:"cuv",b:"v_zoom2"},{id:"u2r",op:"math_add",a:"z2",b:.5},{id:"neg_noise",op:"math_mul",a:"noise",b:-1},{id:"u2",op:"math_add",a:"u2r",b:"neg_noise"},{id:"fb2",op:"texture_sample",tex:"feedback_tex",coords:"u2"},{id:"z3",op:"math_mul",a:"cuv",b:"v_zoom3"},{id:"u3r",op:"math_add",a:"z3",b:.5},{id:"rot_noise",op:"float2",x:"ny",y:"nx"},{id:"u3",op:"math_add",a:"u3r",b:"rot_noise"},{id:"fb3",op:"texture_sample",tex:"feedback_tex",coords:"u3"},{id:"c_composite",op:"comment",comment:"Average 3 taps with 0.95 total decay (0.317 = 0.95/3). Then take max with input: brighter of feedback trail or live input wins. This naturally fades trails while keeping input crisp."},{id:"sum12",op:"math_add",a:"fb1",b:"fb2"},{id:"sum_all",op:"math_add",a:"sum12",b:"fb3"},{id:"v_decay",op:"var_get",var:"decay"},{id:"fb_avg",op:"math_mul",a:"sum_all",b:"v_decay"},{id:"input_col",op:"texture_sample",tex:"input_visual",coords:"nuv.xy"},{id:"combined",op:"math_max",a:"fb_avg",b:"input_col"},{id:"out",op:"float4",xyz:"combined.xyz",w:1},{id:"store",op:"texture_store",tex:"output_tex",coords:"gid.xy",value:"out"}]}]},Zh={version:"1.0.0",meta:{name:"UV Warp"},comment:"Barrel/pincushion UV distortion controlled by a strength parameter. Negative strength blows outward (fisheye), positive sucks inward. Formula: warped_uv = 0.5 + (uv - 0.5) * max(0.01, 1 + strength * r² * 2).",entryPoint:"fn_main_cpu",inputs:[{id:"input_visual",type:"texture2d",format:"rgba8",comment:"Input video stream."},{id:"strength",type:"float",default:0,ui:{min:-1,max:1,widget:"slider"},comment:"Warp strength: -1 = fisheye (outward), +1 = suck (inward)."}],tuningParams:[{id:"warp_power",type:"float",default:2,ui:{min:.5,max:8},comment:"Quadratic scaling factor for radial warp."},{id:"warp_clamp",type:"float",default:.01,ui:{min:.001,max:.5},comment:"Minimum warp factor (prevents UV inversion)."}],resources:[{id:"output_tex",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}}],structs:[],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],nodes:[{id:"size",op:"resource_get_size",resource:"output_tex"},{id:"dispatch",op:"cmd_dispatch",func:"fn_warp",threads:"size"}]},{id:"fn_warp",type:"shader",comment:"Compute kernel: radial UV warp. At center (offset=0), warp has no effect. Distortion increases quadratically toward edges.",inputs:[],outputs:[],localVars:[],nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"str",op:"var_get",var:"strength"},{id:"c_warp",op:"comment",comment:"Radial warp: offset from center, scale by 1 + strength * r² * 2. Positive strength shrinks offset (inward), negative expands (outward). max(0.01, ...) prevents inversion."},{id:"offset",op:"math_sub",a:"nuv.xy",b:.5},{id:"r2",op:"vec_dot",a:"offset",b:"offset"},{id:"sr2",op:"math_mul",a:"str",b:"r2"},{id:"v_warp_power",op:"var_get",var:"warp_power"},{id:"v_warp_clamp",op:"var_get",var:"warp_clamp"},{id:"sr2x2",op:"math_mul",a:"sr2",b:"v_warp_power"},{id:"warp_raw",op:"math_add",a:1,b:"sr2x2"},{id:"warp",op:"math_max",a:"warp_raw",b:"v_warp_clamp"},{id:"warped_off",op:"math_mul",a:"offset",b:"warp"},{id:"warped_uv",op:"math_add",a:"warped_off",b:.5},{id:"color",op:"texture_sample",tex:"input_visual",coords:"warped_uv"},{id:"out",op:"float4",xyz:"color.xyz",w:1},{id:"store",op:"texture_store",tex:"output_tex",coords:"gid.xy",value:"out"}]}]},Hh=29850,Kh=29671,Jh=16;function yl(t,e,n,r){return[{id:`${t}_lc`,op:"math_sub",a:"cell_x",b:n},{id:`${t}_lr`,op:"math_sub",a:"cell_y",b:r},{id:`${t}_lc_lo`,op:"math_step",edge:0,x:`${t}_lc`},{id:`${t}_lc_hi`,op:"math_step",edge:3,x:`${t}_lc`},{id:`${t}_lc_in`,op:"math_sub",a:`${t}_lc_lo`,b:`${t}_lc_hi`},{id:`${t}_lr_lo`,op:"math_step",edge:0,x:`${t}_lr`},{id:`${t}_lr_hi`,op:"math_step",edge:5,x:`${t}_lr`},{id:`${t}_lr_in`,op:"math_sub",a:`${t}_lr_lo`,b:`${t}_lr_hi`},{id:`${t}_in`,op:"math_mul",a:`${t}_lc_in`,b:`${t}_lr_in`},{id:`${t}_ri3`,op:"math_mul",a:`${t}_lr`,b:3},{id:`${t}_bi`,op:"math_add",a:`${t}_ri3`,b:`${t}_lc`},{id:`${t}_pw`,op:"math_pow",a:2,b:`${t}_bi`},{id:`${t}_dv`,op:"math_div",a:e,b:`${t}_pw`},{id:`${t}_fl`,op:"math_floor",val:`${t}_dv`},{id:`${t}_bit`,op:"math_mod",a:`${t}_fl`,b:2},{id:`${t}_dot`,op:"math_mul",a:`${t}_in`,b:`${t}_bit`}]}function Yh(){return[{id:"tex_size",op:"resource_get_size",resource:"output"},{id:"dim_min",op:"math_min",a:"tex_size.x",b:"tex_size.y"},{id:"cell_target",op:"math_div",a:"dim_min",b:Jh},{id:"cols_raw",op:"math_div",a:"tex_size.x",b:"cell_target"},{id:"rows_raw",op:"math_div",a:"tex_size.y",b:"cell_target"},{id:"cols_r",op:"math_add",a:"cols_raw",b:.5},{id:"rows_r",op:"math_add",a:"rows_raw",b:.5},{id:"cols",op:"math_floor",val:"cols_r"},{id:"rows",op:"math_floor",val:"rows_r"},{id:"half_cols",op:"math_div",a:"cols",b:2},{id:"half_cols_fl",op:"math_floor",val:"half_cols"},{id:"digit_col",op:"math_sub",a:"half_cols_fl",b:1},{id:"half_rows",op:"math_div",a:"rows",b:2},{id:"half_rows_fl",op:"math_floor",val:"half_rows"},{id:"digit_row",op:"math_sub",a:"half_rows_fl",b:2},{id:"s0",op:"buffer_store",buffer:"grid_params",index:0,value:"cols",exec_out:"s1"},{id:"s1",op:"buffer_store",buffer:"grid_params",index:1,value:"rows",exec_out:"s2"},{id:"s2",op:"buffer_store",buffer:"grid_params",index:2,value:"digit_col",exec_out:"s3"},{id:"s3",op:"buffer_store",buffer:"grid_params",index:3,value:"digit_row",exec_out:"dispatch"},{id:"dispatch",op:"cmd_dispatch",func:"fn_render",threads:"tex_size"}]}function Xh(){return[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"time",op:"builtin_get",name:"time"},{id:"number",op:"var_get",var:"u_number"},{id:"cols",op:"buffer_load",buffer:"grid_params",index:0},{id:"rows",op:"buffer_load",buffer:"grid_params",index:1},{id:"digit_col",op:"buffer_load",buffer:"grid_params",index:2},{id:"digit_row",op:"buffer_load",buffer:"grid_params",index:3},{id:"gid_xf",op:"static_cast_float",val:"gid.x"},{id:"gid_yf",op:"static_cast_float",val:"gid.y"},{id:"tex_size",op:"resource_get_size",resource:"output"},{id:"cx_num",op:"math_mul",a:"gid_xf",b:"cols"},{id:"cx_div",op:"math_div",a:"cx_num",b:"tex_size.x"},{id:"cell_x",op:"math_floor",val:"cx_div"},{id:"cy_num",op:"math_mul",a:"gid_yf",b:"rows"},{id:"cy_div",op:"math_div",a:"cy_num",b:"tex_size.y"},{id:"cell_y",op:"math_floor",val:"cy_div"},{id:"left_x",op:"math_sub",a:"gid_xf",b:1},{id:"lcx_num",op:"math_mul",a:"left_x",b:"cols"},{id:"lcx_div",op:"math_div",a:"lcx_num",b:"tex_size.x"},{id:"left_cell",op:"math_floor",val:"lcx_div"},{id:"top_y",op:"math_sub",a:"gid_yf",b:1},{id:"tcy_num",op:"math_mul",a:"top_y",b:"rows"},{id:"tcy_div",op:"math_div",a:"tcy_num",b:"tex_size.y"},{id:"top_cell",op:"math_floor",val:"tcy_div"},{id:"dx",op:"math_sub",a:"cell_x",b:"left_cell"},{id:"dx_abs",op:"math_abs",val:"dx"},{id:"is_vline",op:"math_step",edge:.5,x:"dx_abs"},{id:"dy",op:"math_sub",a:"cell_y",b:"top_cell"},{id:"dy_abs",op:"math_abs",val:"dy"},{id:"is_hline",op:"math_step",edge:.5,x:"dy_abs"},{id:"is_gridline",op:"math_max",a:"is_vline",b:"is_hline"},{id:"gu",op:"math_mul",a:"nuv.x",b:"cols"},{id:"r1_lo",op:"math_step",edge:1,x:"cell_y"},{id:"r1_hi",op:"math_step",edge:2,x:"cell_y"},{id:"is_row1",op:"math_sub",a:"r1_lo",b:"r1_hi"},{id:"gray_row",op:"math_sub",a:"rows",b:2},{id:"gray_row_p1",op:"math_add",a:"gray_row",b:1},{id:"rg_lo",op:"math_step",edge:"gray_row",x:"cell_y"},{id:"rg_hi",op:"math_step",edge:"gray_row_p1",x:"cell_y"},{id:"is_gray_row",op:"math_sub",a:"rg_lo",b:"rg_hi"},{id:"cols_m1",op:"math_sub",a:"cols",b:1},{id:"inset_lo",op:"math_step",edge:1,x:"cell_x"},{id:"inset_hi",op:"math_step",edge:"cols_m1",x:"cell_x"},{id:"is_inset",op:"math_sub",a:"inset_lo",b:"inset_hi"},{id:"is_spectrum",op:"math_mul",a:"is_row1",b:"is_inset"},{id:"is_grayscale",op:"math_mul",a:"is_gray_row",b:"is_inset"},{id:"slant_y",op:"math_mul",a:"nuv.y",b:.5},{id:"slant_t",op:"math_add",a:"nuv.x",b:"slant_y"},{id:"bell_spd",op:"math_mul",a:"time",b:.3},{id:"bell_wrap",op:"math_mod",a:"bell_spd",b:2},{id:"bell_ctr",op:"math_sub",a:"bell_wrap",b:.25},{id:"bell_d",op:"math_sub",a:"slant_t",b:"bell_ctr"},{id:"bell_ds",op:"math_mul",a:"bell_d",b:2},{id:"bell_dc",op:"math_clamp",val:"bell_ds",min:-1,max:1},{id:"bell_rad",op:"math_mul",a:"bell_dc",b:3.14159},{id:"bell_cos",op:"math_cos",val:"bell_rad"},{id:"bell_p1",op:"math_add",a:"bell_cos",b:1},{id:"bell",op:"math_mul",a:"bell_p1",b:.5},{id:"ck_sum",op:"math_add",a:"cell_x",b:"cell_y"},{id:"ck_mod",op:"math_mod",a:"ck_sum",b:2},{id:"checker_full",op:"math_mix",a:.15,b:.65,t:"ck_mod"},{id:"bell_half",op:"math_mul",a:"bell",b:.5},{id:"bell_bias",op:"math_add",a:"bell_half",b:.5},{id:"checker",op:"math_mix",a:.4,b:"checker_full",t:"bell_bias"},{id:"cols_m2",op:"math_sub",a:"cols",b:2},{id:"grad_raw",op:"math_sub",a:"gu",b:1},{id:"grad_div",op:"math_div",a:"grad_raw",b:"cols_m2"},{id:"grad",op:"math_clamp",val:"grad_div",min:0,max:1},{id:"hr_fr",op:"math_fract",val:"grad"},{id:"hr6",op:"math_mul",a:"hr_fr",b:6},{id:"hr3",op:"math_sub",a:"hr6",b:3},{id:"hr_abs",op:"math_abs",val:"hr3"},{id:"hr_sub1",op:"math_sub",a:"hr_abs",b:1},{id:"spec_r",op:"math_clamp",val:"hr_sub1",min:0,max:1},{id:"hg_off",op:"math_add",a:"grad",b:.6667},{id:"hg_fr",op:"math_fract",val:"hg_off"},{id:"hg6",op:"math_mul",a:"hg_fr",b:6},{id:"hg3",op:"math_sub",a:"hg6",b:3},{id:"hg_abs",op:"math_abs",val:"hg3"},{id:"hg_sub1",op:"math_sub",a:"hg_abs",b:1},{id:"spec_g",op:"math_clamp",val:"hg_sub1",min:0,max:1},{id:"hb_off",op:"math_add",a:"grad",b:.3333},{id:"hb_fr",op:"math_fract",val:"hb_off"},{id:"hb6",op:"math_mul",a:"hb_fr",b:6},{id:"hb3",op:"math_sub",a:"hb6",b:3},{id:"hb_abs",op:"math_abs",val:"hb3"},{id:"hb_sub1",op:"math_sub",a:"hb_abs",b:1},{id:"spec_b",op:"math_clamp",val:"hb_sub1",min:0,max:1},{id:"ns1",op:"math_sub",a:1,b:"is_spectrum"},{id:"ns2",op:"math_sub",a:1,b:"is_grayscale"},{id:"not_special",op:"math_mul",a:"ns1",b:"ns2"},{id:"sr",op:"math_mul",a:"is_spectrum",b:"spec_r"},{id:"sg",op:"math_mul",a:"is_spectrum",b:"spec_g"},{id:"sb",op:"math_mul",a:"is_spectrum",b:"spec_b"},{id:"gscale",op:"math_mul",a:"is_grayscale",b:"grad"},{id:"cr",op:"math_mul",a:"not_special",b:"checker"},{id:"gs_cr",op:"math_add",a:"gscale",b:"cr"},{id:"bg_r",op:"math_add",a:"sr",b:"gs_cr"},{id:"bg_g",op:"math_add",a:"sg",b:"gs_cr"},{id:"bg_b",op:"math_add",a:"sb",b:"gs_cr"},{id:"abs_num",op:"math_abs",val:"number"},{id:"mod2",op:"math_mod",a:"abs_num",b:2},{id:"is_odd",op:"math_step",edge:.5,x:"mod2"},...yl("d1",Hh,"digit_col","digit_row"),...yl("d2",Kh,"digit_col","digit_row"),{id:"digit_on",op:"math_mix",a:"d2_dot",b:"d1_dot",t:"is_odd"},{id:"fill",op:"math_mul",a:"is_odd",b:1},{id:"final_r",op:"math_mix",a:"bg_r",b:"fill",t:"digit_on"},{id:"final_g",op:"math_mix",a:"bg_g",b:"fill",t:"digit_on"},{id:"final_b",op:"math_mix",a:"bg_b",b:"fill",t:"digit_on"},{id:"out_r",op:"math_mix",a:"final_r",b:.2,t:"is_gridline"},{id:"out_g",op:"math_mix",a:"final_g",b:.2,t:"is_gridline"},{id:"out_b",op:"math_mix",a:"final_b",b:.2,t:"is_gridline"},{id:"color",op:"float4",x:"out_r",y:"out_g",z:"out_b",w:1},{id:"store",op:"texture_store",tex:"output",coords:"gid.xy",value:"color"}]}const Qh={version:"1.0.0",meta:{name:"Test Card"},comment:"Colour reference: dynamic grid with spectrum row, grayscale row, checkerboard with animated contrast, and dot-matrix digit.",entryPoint:"main",inputs:[{id:"u_number",type:"int",default:1,label:"Number",ui:{min:0,max:99}}],resources:[{id:"output",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!0}},{id:"grid_params",type:"buffer",dataType:"float",size:{mode:"fixed",value:4},persistence:{retain:!1,clearEveryFrame:!1,clearOnResize:!1,cpuAccess:!1}}],structs:[],functions:[{id:"main",type:"cpu",inputs:[],outputs:[],localVars:[],nodes:Yh()},{id:"fn_render",type:"shader",comment:"Test card: spectrum row, grayscale row, checkerboard, single-pixel grid, dot-matrix digit.",inputs:[],outputs:[],localVars:[],nodes:Xh()}]},em={version:"1.0.0",meta:{name:"Sidechannel Cards"},comment:"Demonstrates sidechannel texture inputs. Blits a background texture, then renders up to 4 spinning card quads from optional sidechannel inputs. Unbound sidechannels sample as transparent black, so alpha blending makes them invisible.",entryPoint:"fn_main_cpu",inputs:[{id:"in_bg",type:"texture2d",comment:"Background texture input (blitted to output)."},{id:"in_sc1",type:"texture2d",sidechannel:!0,comment:"Optional sidechannel texture 1."},{id:"in_sc2",type:"texture2d",sidechannel:!0,comment:"Optional sidechannel texture 2."},{id:"in_sc3",type:"texture2d",sidechannel:!0,comment:"Optional sidechannel texture 3."},{id:"in_sc4",type:"texture2d",sidechannel:!0,comment:"Optional sidechannel texture 4."}],tuningParams:[{id:"spin_speed",type:"float",default:1,ui:{min:0,max:5},comment:"Card Y-axis rotation speed."},{id:"card_height",type:"float",default:.6,ui:{min:.1,max:1},comment:"Card height in clip space (full range -1..1)."}],structs:[{id:"CardVarying",members:[{name:"pos",type:"float4",builtin:"position"},{name:"uv",type:"float2",location:0},{name:"quad_id",type:"float",location:1}]}],resources:[{id:"output_tex",type:"texture2d",format:Ke.RGBA8,size:{mode:"viewport"},isOutput:!0,persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}},{id:"card_params",type:"buffer",comment:"CPU→GPU parameter passing: [0]=cos_spin, [1..4]=x_position per card slot. Vertex shaders cannot access CPU builtins like time directly, so the CPU pre-computes and stores here.",dataType:"float",size:{mode:"fixed",value:5},persistence:{retain:!1,clearEveryFrame:!1,clearOnResize:!1,cpuAccess:!1}}],functions:[{id:"fn_main_cpu",type:"cpu",inputs:[],outputs:[],localVars:[],comment:"CPU entry: pre-compute spin + dynamic card positions, dispatch background blit, then draw card quads. Cards are centered based on how many sidechannels are bound.",nodes:[{id:"c_spin",op:"comment",comment:"Pre-compute cos(time * spin_speed) for the vertex shader."},{id:"time",op:"builtin_get",name:"time"},{id:"v_spin",op:"var_get",var:"spin_speed"},{id:"spin_angle",op:"math_mul",a:"time",b:"v_spin"},{id:"cos_spin",op:"math_cos",val:"spin_angle"},{id:"store_spin",op:"buffer_store",buffer:"card_params",index:0,value:"cos_spin",exec_out:"store_pos0"},{id:"c_bound",op:"comment",comment:"Count bound sidechannel textures (branchless: cast bool to float)."},{id:"b1",op:"resource_is_bound",resource:"in_sc1"},{id:"b2",op:"resource_is_bound",resource:"in_sc2"},{id:"b3",op:"resource_is_bound",resource:"in_sc3"},{id:"b4",op:"resource_is_bound",resource:"in_sc4"},{id:"f1",op:"static_cast_float",val:"b1"},{id:"f2",op:"static_cast_float",val:"b2"},{id:"f3",op:"static_cast_float",val:"b3"},{id:"f4",op:"static_cast_float",val:"b4"},{id:"count12",op:"math_add",a:"f1",b:"f2"},{id:"count123",op:"math_add",a:"count12",b:"f3"},{id:"count_all",op:"math_add",a:"count123",b:"f4"},{id:"c_positions",op:"comment",comment:"Dynamic centering: spacing=0.4, start_x = -0.2*(count-1). Cumulative index tracks position of each card in the compacted row."},{id:"spacing",op:"math_add",a:.4,b:0,comment:"Card spacing in clip space."},{id:"count_m1",op:"math_sub",a:"count_all",b:1},{id:"half_span",op:"math_mul",a:"count_m1",b:.2},{id:"start_x",op:"math_mul",a:"half_span",b:-1},{id:"c_cum",op:"comment",comment:"Cumulative indices: cum0=0, cum1=f1, cum2=f1+f2, cum3=f1+f2+f3. Position = (start_x + cumN * spacing) * boundN, or 99 if unbound (offscreen)."},{id:"cum0",op:"math_add",a:0,b:0},{id:"cum1",op:"math_add",a:"cum0",b:"f1"},{id:"cum2",op:"math_add",a:"cum1",b:"f2"},{id:"cum3",op:"math_add",a:"cum2",b:"f3"},{id:"off0",op:"math_mul",a:"cum0",b:"spacing"},{id:"off1",op:"math_mul",a:"cum1",b:"spacing"},{id:"off2",op:"math_mul",a:"cum2",b:"spacing"},{id:"off3",op:"math_mul",a:"cum3",b:"spacing"},{id:"raw_x0",op:"math_add",a:"start_x",b:"off0"},{id:"raw_x1",op:"math_add",a:"start_x",b:"off1"},{id:"raw_x2",op:"math_add",a:"start_x",b:"off2"},{id:"raw_x3",op:"math_add",a:"start_x",b:"off3"},{id:"c_hide",op:"comment",comment:"Move unbound cards offscreen (x=99) so degenerate triangles are not needed."},{id:"pos0_bound",op:"math_mul",a:"raw_x0",b:"f1"},{id:"pos0_hide",op:"math_sub",a:1,b:"f1"},{id:"pos0_offscreen",op:"math_mul",a:"pos0_hide",b:99},{id:"pos0",op:"math_add",a:"pos0_bound",b:"pos0_offscreen"},{id:"pos1_bound",op:"math_mul",a:"raw_x1",b:"f2"},{id:"pos1_hide",op:"math_sub",a:1,b:"f2"},{id:"pos1_offscreen",op:"math_mul",a:"pos1_hide",b:99},{id:"pos1",op:"math_add",a:"pos1_bound",b:"pos1_offscreen"},{id:"pos2_bound",op:"math_mul",a:"raw_x2",b:"f3"},{id:"pos2_hide",op:"math_sub",a:1,b:"f3"},{id:"pos2_offscreen",op:"math_mul",a:"pos2_hide",b:99},{id:"pos2",op:"math_add",a:"pos2_bound",b:"pos2_offscreen"},{id:"pos3_bound",op:"math_mul",a:"raw_x3",b:"f4"},{id:"pos3_hide",op:"math_sub",a:1,b:"f4"},{id:"pos3_offscreen",op:"math_mul",a:"pos3_hide",b:99},{id:"pos3",op:"math_add",a:"pos3_bound",b:"pos3_offscreen"},{id:"store_pos0",op:"buffer_store",buffer:"card_params",index:1,value:"pos0",exec_out:"store_pos1"},{id:"store_pos1",op:"buffer_store",buffer:"card_params",index:2,value:"pos1",exec_out:"store_pos2"},{id:"store_pos2",op:"buffer_store",buffer:"card_params",index:3,value:"pos2",exec_out:"store_pos3"},{id:"store_pos3",op:"buffer_store",buffer:"card_params",index:4,value:"pos3",exec_out:"dispatch_blit"},{id:"size",op:"resource_get_size",resource:"output_tex"},{id:"dispatch_blit",op:"cmd_dispatch",func:"fn_blit_gpu",threads:"size",exec_out:"draw_cards"},{id:"vert_count_f",op:"math_mul",a:4,b:6,comment:"4 quads × 6 vertices per quad."},{id:"vert_count",op:"static_cast_int",val:"vert_count_f"},{id:"draw_cards",op:"cmd_draw",target:"output_tex",vertex:"fn_card_vertex",fragment:"fn_card_fragment",count:"vert_count",pipeline:{loadOp:"load",topology:"triangle-list",blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}}]},{id:"fn_blit_gpu",type:"shader",comment:"Compute kernel: sample background texture at normalized UV, write to output.",inputs:[],outputs:[],localVars:[],nodes:[{id:"gid",op:"builtin_get",name:"global_invocation_id"},{id:"nuv",op:"builtin_get",name:"normalized_global_invocation_id"},{id:"color",op:"texture_sample",tex:"in_bg",coords:"nuv.xy"},{id:"store",op:"texture_store",tex:"output_tex",coords:"gid.xy",value:"color"}]},{id:"fn_card_vertex",type:"shader",comment:"Vertex shader: generates 4 card quads from vertex_index. Position is read from card_params buffer (CPU pre-computes dynamic centering). Y-axis spin effect via cos_spin also from buffer.",inputs:[{id:"v_idx",type:"int",builtin:"vertex_index"}],outputs:[{id:"out",type:"CardVarying"}],localVars:[],nodes:[{id:"vi",op:"var_get",var:"v_idx"},{id:"vi_f",op:"static_cast_float",val:"vi"},{id:"c_decompose",op:"comment",comment:"Decompose vertex_index: quad_id = floor(vi/6), corner = vi % 6."},{id:"pidx_raw",op:"math_div",a:"vi_f",b:6},{id:"pidx_f",op:"math_floor",val:"pidx_raw"},{id:"corner_f",op:"math_mod",a:"vi_f",b:6},{id:"corner_i",op:"static_cast_int",val:"corner_f"},{id:"c_corners",op:"comment",comment:"Quad corner offsets: two triangles (6 vertices) spanning [-1,1]."},{id:"quad_x",op:"array_construct",values:[-1,1,-1,-1,1,1]},{id:"quad_y",op:"array_construct",values:[-1,-1,1,1,-1,1]},{id:"qx",op:"array_extract",array:"quad_x",index:"corner_i"},{id:"qy",op:"array_extract",array:"quad_y",index:"corner_i"},{id:"c_uv",op:"comment",comment:"UV: remap corner [-1,1] to texture coords [0,1], Y flipped for top-left origin."},{id:"qx_p1",op:"math_add",a:"qx",b:1},{id:"uv_x",op:"math_mul",a:"qx_p1",b:.5},{id:"qy_p1",op:"math_add",a:"qy",b:1},{id:"uv_y_raw",op:"math_mul",a:"qy_p1",b:.5},{id:"uv_y",op:"math_sub",a:1,b:"uv_y_raw"},{id:"uv",op:"float2",x:"uv_x",y:"uv_y"},{id:"c_aspect",op:"comment",comment:"Aspect ratio correction for square-looking cards."},{id:"os",op:"builtin_get",name:"output_size"},{id:"os_x",op:"static_cast_float",val:"os.x"},{id:"os_y",op:"static_cast_float",val:"os.y"},{id:"aspect",op:"math_div",a:"os_x",b:"os_y"},{id:"inv_aspect",op:"math_div",a:1,b:"aspect"},{id:"c_position",op:"comment",comment:"Read dynamic X position from card_params buffer (CPU pre-computes centered positions). Index = quad_id + 1."},{id:"buf_idx_f",op:"math_add",a:"pidx_f",b:1},{id:"buf_idx",op:"static_cast_int",val:"buf_idx_f"},{id:"base_x",op:"buffer_load",buffer:"card_params",index:"buf_idx"},{id:"c_spin",op:"comment",comment:"Read pre-computed cos(time * spin_speed) from CPU-side buffer."},{id:"cos_spin",op:"buffer_load",buffer:"card_params",index:0},{id:"c_card_dims",op:"comment",comment:"Card dimensions: ~2:3 aspect ratio, width modulated by spin, corrected for screen aspect."},{id:"v_height",op:"var_get",var:"card_height"},{id:"half_h",op:"math_mul",a:"v_height",b:.5},{id:"half_w_base",op:"math_mul",a:"half_h",b:.667},{id:"half_w_spin",op:"math_mul",a:"half_w_base",b:"cos_spin"},{id:"half_w",op:"math_mul",a:"half_w_spin",b:"inv_aspect"},{id:"ox",op:"math_mul",a:"qx",b:"half_w"},{id:"oy",op:"math_mul",a:"qy",b:"half_h"},{id:"clip_x",op:"math_add",a:"base_x",b:"ox"},{id:"pos",op:"float4",x:"clip_x",y:"oy",z:0,w:1},{id:"ret_struct",op:"struct_construct",type:"CardVarying",values:{pos:"pos",uv:"uv",quad_id:"pidx_f"}},{id:"ret",op:"func_return",val:"ret_struct"}]},{id:"fn_card_fragment",type:"shader",comment:"Fragment shader: selects sidechannel texture based on quad_id via cascading mix/step. Unbound textures sample as (0,0,0,0) — alpha blending makes them invisible.",inputs:[{id:"in",type:"CardVarying"}],outputs:[{id:"color",type:"float4"}],localVars:[],nodes:[{id:"get_in",op:"var_get",var:"in"},{id:"uv",op:"struct_extract",struct:"get_in",field:"uv"},{id:"qid",op:"struct_extract",struct:"get_in",field:"quad_id"},{id:"c_sample",op:"comment",comment:"Sample all 4 sidechannel textures. Unbound ones return (0,0,0,0)."},{id:"c1",op:"texture_sample",tex:"in_sc1",coords:"uv"},{id:"c2",op:"texture_sample",tex:"in_sc2",coords:"uv"},{id:"c3",op:"texture_sample",tex:"in_sc3",coords:"uv"},{id:"c4",op:"texture_sample",tex:"in_sc4",coords:"uv"},{id:"c_select",op:"comment",comment:"Cascading select: step transitions at each quad_id boundary, mix interpolates between adjacent textures."},{id:"s1",op:"math_step",edge:.5,x:"qid"},{id:"s2",op:"math_step",edge:1.5,x:"qid"},{id:"s3",op:"math_step",edge:2.5,x:"qid"},{id:"m1",op:"math_mix",a:"c1",b:"c2",t:"s1"},{id:"m2",op:"math_mix",a:"m1",b:"c3",t:"s2"},{id:"final_color",op:"math_mix",a:"m2",b:"c4",t:"s3"},{id:"ret",op:"func_return",val:"final_color"}]}]},vn={noise_shader:Fh,effect_shader:jh,mixer_shader:Uh,raymarch_shader:qh,particle_shader:Vh,histogram_shader:Gh,feedback_shader:Wh,uv_warp_shader:Zh,test_card_shader:Qh,sidechannel_cards_shader:em};var tm=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,mo=(t,e,n,r)=>{for(var o=nm(e,n),a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=i(e,n,o)||o);return o&&tm(e,n,o),o};yh();class Nn{constructor(e){this.appState=e,this.history=_e([]),this.redoStack=_e([]),fo(this)}record(e,n,r){let o=[],a=[];xh(this.appState.database,r,(s,l)=>{o=s,a=l}),te(()=>{this.applyPatchesToObservable(this.appState.database,o)});const i={id:crypto.randomUUID(),description:e,source:n,patches:o,inversePatches:a,timestamp:Date.now()};te(()=>{this.history.push(i),this.redoStack.length=0})}undo(){const e=this.history.pop();e&&te(()=>{this.applyPatchesToObservable(this.appState.database,e.inversePatches),this.redoStack.push(e)})}redo(){const e=this.redoStack.pop();e&&te(()=>{this.applyPatchesToObservable(this.appState.database,e.patches),this.history.push(e)})}clear(){this.history.length=0,this.redoStack.length=0}rejectLastLLMAction(){for(let e=this.history.length-1;e>=0;e--)if(this.history[e].source==="llm"){if(e===this.history.length-1){this.undo();return}console.warn("Cannot reject older LLM action safely without rebase.");return}}applyPatchesToObservable(e,n){n.forEach(r=>{const{path:o,op:a,value:i}=r;let s=e;for(let f=0;f<o.length-1;f++)s=s[o[f]];const l=o[o.length-1];a==="replace"||a==="add"?s[l]=i:a==="remove"&&(Array.isArray(s)?s.splice(l,1):delete s[l])})}}mo([Oe],Nn.prototype,"record");mo([Oe],Nn.prototype,"undo");mo([Oe],Nn.prototype,"redo");mo([Oe],Nn.prototype,"clear");mo([Oe],Nn.prototype,"rejectLastLLMAction");const Vn=new Nn(R);function q(t,e,n){function r(s,l){if(s._zod||Object.defineProperty(s,"_zod",{value:{def:l,constr:i,traits:new Set},enumerable:!1}),s._zod.traits.has(t))return;s._zod.traits.add(t),e(s,l);const f=i.prototype,d=Object.keys(f);for(let m=0;m<d.length;m++){const h=d[m];h in s||(s[h]=f[h].bind(s))}}const o=n?.Parent??Object;class a extends o{}Object.defineProperty(a,"name",{value:t});function i(s){var l;const f=n?.Parent?new a:this;r(f,s),(l=f._zod).deferred??(l.deferred=[]);for(const d of f._zod.deferred)d();return f}return Object.defineProperty(i,"init",{value:r}),Object.defineProperty(i,Symbol.hasInstance,{value:s=>n?.Parent&&s instanceof n.Parent?!0:s?._zod?.traits?.has(t)}),Object.defineProperty(i,"name",{value:t}),i}class er extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class jf extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}const Uf={};function Cn(t){return Uf}function qf(t){const e=Object.values(t).filter(r=>typeof r=="number");return Object.entries(t).filter(([r,o])=>e.indexOf(+r)===-1).map(([r,o])=>o)}function Li(t,e){return typeof e=="bigint"?e.toString():e}function cs(t){return{get value(){{const e=t();return Object.defineProperty(this,"value",{value:e}),e}}}}function fs(t){return t==null}function us(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function rm(t,e){const n=(t.toString().split(".")[1]||"").length,r=e.toString();let o=(r.split(".")[1]||"").length;if(o===0&&/\d?e-\d?/.test(r)){const l=r.match(/\d?e-(\d?)/);l?.[1]&&(o=Number.parseInt(l[1]))}const a=n>o?n:o,i=Number.parseInt(t.toFixed(a).replace(".","")),s=Number.parseInt(e.toFixed(a).replace(".",""));return i%s/10**a}const vl=Symbol("evaluating");function ke(t,e,n){let r;Object.defineProperty(t,e,{get(){if(r!==vl)return r===void 0&&(r=vl,r=n()),r},set(o){Object.defineProperty(t,e,{value:o})},configurable:!0})}function Fn(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function an(...t){const e={};for(const n of t){const r=Object.getOwnPropertyDescriptors(n);Object.assign(e,r)}return Object.defineProperties({},e)}function xl(t){return JSON.stringify(t)}function om(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Vf="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function ra(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const am=cs(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function Hr(t){if(ra(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(ra(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function Gf(t){return Hr(t)?{...t}:Array.isArray(t)?[...t]:t}const im=new Set(["string","number","symbol"]);function Ea(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function sn(t,e,n){const r=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(r._zod.parent=t),r}function ae(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function sm(t){return Object.keys(t).filter(e=>t[e]._zod.optin==="optional"&&t[e]._zod.optout==="optional")}const lm={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function cm(t,e){const n=t._zod.def,r=n.checks;if(r&&r.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const a=an(t._zod.def,{get shape(){const i={};for(const s in e){if(!(s in n.shape))throw new Error(`Unrecognized key: "${s}"`);e[s]&&(i[s]=n.shape[s])}return Fn(this,"shape",i),i},checks:[]});return sn(t,a)}function fm(t,e){const n=t._zod.def,r=n.checks;if(r&&r.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const a=an(t._zod.def,{get shape(){const i={...t._zod.def.shape};for(const s in e){if(!(s in n.shape))throw new Error(`Unrecognized key: "${s}"`);e[s]&&delete i[s]}return Fn(this,"shape",i),i},checks:[]});return sn(t,a)}function um(t,e){if(!Hr(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const a=t._zod.def.shape;for(const i in e)if(Object.getOwnPropertyDescriptor(a,i)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const o=an(t._zod.def,{get shape(){const a={...t._zod.def.shape,...e};return Fn(this,"shape",a),a}});return sn(t,o)}function dm(t,e){if(!Hr(e))throw new Error("Invalid input to safeExtend: expected a plain object");const n=an(t._zod.def,{get shape(){const r={...t._zod.def.shape,...e};return Fn(this,"shape",r),r}});return sn(t,n)}function pm(t,e){const n=an(t._zod.def,{get shape(){const r={...t._zod.def.shape,...e._zod.def.shape};return Fn(this,"shape",r),r},get catchall(){return e._zod.def.catchall},checks:[]});return sn(t,n)}function hm(t,e,n){const o=e._zod.def.checks;if(o&&o.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const i=an(e._zod.def,{get shape(){const s=e._zod.def.shape,l={...s};if(n)for(const f in n){if(!(f in s))throw new Error(`Unrecognized key: "${f}"`);n[f]&&(l[f]=t?new t({type:"optional",innerType:s[f]}):s[f])}else for(const f in s)l[f]=t?new t({type:"optional",innerType:s[f]}):s[f];return Fn(this,"shape",l),l},checks:[]});return sn(e,i)}function mm(t,e,n){const r=an(e._zod.def,{get shape(){const o=e._zod.def.shape,a={...o};if(n)for(const i in n){if(!(i in a))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(a[i]=new t({type:"nonoptional",innerType:o[i]}))}else for(const i in o)a[i]=new t({type:"nonoptional",innerType:o[i]});return Fn(this,"shape",a),a}});return sn(e,r)}function Jn(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function Wf(t,e){return e.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(t),n})}function So(t){return typeof t=="string"?t:t?.message}function Rn(t,e,n){const r={...t,path:t.path??[]};if(!t.message){const o=So(t.inst?._zod.def?.error?.(t))??So(e?.error?.(t))??So(n.customError?.(t))??So(n.localeError?.(t))??"Invalid input";r.message=o}return delete r.inst,delete r.continue,e?.reportInput||delete r.input,r}function ds(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function Kr(...t){const[e,n,r]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:r}:{...e}}const Zf=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),t.message=JSON.stringify(e,Li,2),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},Hf=q("$ZodError",Zf),Kf=q("$ZodError",Zf,{Parent:Error});function _m(t,e=n=>n.message){const n={},r=[];for(const o of t.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}function bm(t,e=n=>n.message){const n={_errors:[]},r=o=>{for(const a of o.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(i=>r({issues:i}));else if(a.code==="invalid_key")r({issues:a.issues});else if(a.code==="invalid_element")r({issues:a.issues});else if(a.path.length===0)n._errors.push(e(a));else{let i=n,s=0;for(;s<a.path.length;){const l=a.path[s];s===a.path.length-1?(i[l]=i[l]||{_errors:[]},i[l]._errors.push(e(a))):i[l]=i[l]||{_errors:[]},i=i[l],s++}}};return r(t),n}const ps=t=>(e,n,r,o)=>{const a=r?Object.assign(r,{async:!1}):{async:!1},i=e._zod.run({value:n,issues:[]},a);if(i instanceof Promise)throw new er;if(i.issues.length){const s=new(o?.Err??t)(i.issues.map(l=>Rn(l,a,Cn())));throw Vf(s,o?.callee),s}return i.value},hs=t=>async(e,n,r,o)=>{const a=r?Object.assign(r,{async:!0}):{async:!0};let i=e._zod.run({value:n,issues:[]},a);if(i instanceof Promise&&(i=await i),i.issues.length){const s=new(o?.Err??t)(i.issues.map(l=>Rn(l,a,Cn())));throw Vf(s,o?.callee),s}return i.value},za=t=>(e,n,r)=>{const o=r?{...r,async:!1}:{async:!1},a=e._zod.run({value:n,issues:[]},o);if(a instanceof Promise)throw new er;return a.issues.length?{success:!1,error:new(t??Hf)(a.issues.map(i=>Rn(i,o,Cn())))}:{success:!0,data:a.value}},gm=za(Kf),Ia=t=>async(e,n,r)=>{const o=r?Object.assign(r,{async:!0}):{async:!0};let a=e._zod.run({value:n,issues:[]},o);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new t(a.issues.map(i=>Rn(i,o,Cn())))}:{success:!0,data:a.value}},ym=Ia(Kf),vm=t=>(e,n,r)=>{const o=r?Object.assign(r,{direction:"backward"}):{direction:"backward"};return ps(t)(e,n,o)},xm=t=>(e,n,r)=>ps(t)(e,n,r),wm=t=>async(e,n,r)=>{const o=r?Object.assign(r,{direction:"backward"}):{direction:"backward"};return hs(t)(e,n,o)},$m=t=>async(e,n,r)=>hs(t)(e,n,r),Am=t=>(e,n,r)=>{const o=r?Object.assign(r,{direction:"backward"}):{direction:"backward"};return za(t)(e,n,o)},km=t=>(e,n,r)=>za(t)(e,n,r),Sm=t=>async(e,n,r)=>{const o=r?Object.assign(r,{direction:"backward"}):{direction:"backward"};return Ia(t)(e,n,o)},Em=t=>async(e,n,r)=>Ia(t)(e,n,r),zm=/^[cC][^\s-]{8,}$/,Im=/^[0-9a-z]+$/,Om=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Cm=/^[0-9a-vA-V]{20}$/,Rm=/^[A-Za-z0-9]{27}$/,Tm=/^[a-zA-Z0-9_-]{21}$/,Lm=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Dm=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,wl=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Pm=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Bm="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Mm(){return new RegExp(Bm,"u")}const Nm=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Fm=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,jm=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Um=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,qm=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Jf=/^[A-Za-z0-9_-]*$/,Vm=/^\+[1-9]\d{6,14}$/,Yf="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Gm=new RegExp(`^${Yf}$`);function Xf(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Wm(t){return new RegExp(`^${Xf(t)}$`)}function Zm(t){const e=Xf({precision:t.precision}),n=["Z"];t.local&&n.push(""),t.offset&&n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const r=`${e}(?:${n.join("|")})`;return new RegExp(`^${Yf}T(?:${r})$`)}const Hm=t=>{const e=t?`[\\s\\S]{${t?.minimum??0},${t?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},Km=/^-?\d+$/,Jm=/^-?\d+(?:\.\d+)?$/,Ym=/^(?:true|false)$/i,Xm=/^[^A-Z]*$/,Qm=/^[^a-z]*$/,Je=q("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),Qf={number:"number",bigint:"bigint",object:"date"},eu=q("$ZodCheckLessThan",(t,e)=>{Je.init(t,e);const n=Qf[typeof e.value];t._zod.onattach.push(r=>{const o=r._zod.bag,a=(e.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<a&&(e.inclusive?o.maximum=e.value:o.exclusiveMaximum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),tu=q("$ZodCheckGreaterThan",(t,e)=>{Je.init(t,e);const n=Qf[typeof e.value];t._zod.onattach.push(r=>{const o=r._zod.bag,a=(e.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>a&&(e.inclusive?o.minimum=e.value:o.exclusiveMinimum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),e_=q("$ZodCheckMultipleOf",(t,e)=>{Je.init(t,e),t._zod.onattach.push(n=>{var r;(r=n._zod.bag).multipleOf??(r.multipleOf=e.value)}),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%e.value===BigInt(0):rm(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),t_=q("$ZodCheckNumberFormat",(t,e)=>{Je.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),r=n?"int":"number",[o,a]=lm[e.format];t._zod.onattach.push(i=>{const s=i._zod.bag;s.format=e.format,s.minimum=o,s.maximum=a,n&&(s.pattern=Km)}),t._zod.check=i=>{const s=i.value;if(n){if(!Number.isInteger(s)){i.issues.push({expected:r,format:e.format,code:"invalid_type",continue:!1,input:s,inst:t});return}if(!Number.isSafeInteger(s)){s>0?i.issues.push({input:s,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,inclusive:!0,continue:!e.abort}):i.issues.push({input:s,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,inclusive:!0,continue:!e.abort});return}}s<o&&i.issues.push({origin:"number",input:s,code:"too_small",minimum:o,inclusive:!0,inst:t,continue:!e.abort}),s>a&&i.issues.push({origin:"number",input:s,code:"too_big",maximum:a,inclusive:!0,inst:t,continue:!e.abort})}}),n_=q("$ZodCheckMaxLength",(t,e)=>{var n;Je.init(t,e),(n=t._zod.def).when??(n.when=r=>{const o=r.value;return!fs(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{const o=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<o&&(r._zod.bag.maximum=e.maximum)}),t._zod.check=r=>{const o=r.value;if(o.length<=e.maximum)return;const i=ds(o);r.issues.push({origin:i,code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),r_=q("$ZodCheckMinLength",(t,e)=>{var n;Je.init(t,e),(n=t._zod.def).when??(n.when=r=>{const o=r.value;return!fs(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{const o=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>o&&(r._zod.bag.minimum=e.minimum)}),t._zod.check=r=>{const o=r.value;if(o.length>=e.minimum)return;const i=ds(o);r.issues.push({origin:i,code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),o_=q("$ZodCheckLengthEquals",(t,e)=>{var n;Je.init(t,e),(n=t._zod.def).when??(n.when=r=>{const o=r.value;return!fs(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{const o=r._zod.bag;o.minimum=e.length,o.maximum=e.length,o.length=e.length}),t._zod.check=r=>{const o=r.value,a=o.length;if(a===e.length)return;const i=ds(o),s=a>e.length;r.issues.push({origin:i,...s?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort})}}),Oa=q("$ZodCheckStringFormat",(t,e)=>{var n,r;Je.init(t,e),t._zod.onattach.push(o=>{const a=o._zod.bag;a.format=e.format,e.pattern&&(a.patterns??(a.patterns=new Set),a.patterns.add(e.pattern))}),e.pattern?(n=t._zod).check??(n.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:e.format,input:o.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(r=t._zod).check??(r.check=()=>{})}),a_=q("$ZodCheckRegex",(t,e)=>{Oa.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),i_=q("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=Xm),Oa.init(t,e)}),s_=q("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=Qm),Oa.init(t,e)}),l_=q("$ZodCheckIncludes",(t,e)=>{Je.init(t,e);const n=Ea(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${n}`:n);e.pattern=r,t._zod.onattach.push(o=>{const a=o._zod.bag;a.patterns??(a.patterns=new Set),a.patterns.add(r)}),t._zod.check=o=>{o.value.includes(e.includes,e.position)||o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:o.value,inst:t,continue:!e.abort})}}),c_=q("$ZodCheckStartsWith",(t,e)=>{Je.init(t,e);const n=new RegExp(`^${Ea(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{const o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),f_=q("$ZodCheckEndsWith",(t,e)=>{Je.init(t,e);const n=new RegExp(`.*${Ea(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{const o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}}),u_=q("$ZodCheckOverwrite",(t,e)=>{Je.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class d_{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const r=e.split(`
`).filter(i=>i),o=Math.min(...r.map(i=>i.length-i.trimStart().length)),a=r.map(i=>i.slice(o)).map(i=>" ".repeat(this.indent*2)+i);for(const i of a)this.content.push(i)}compile(){const e=Function,n=this?.args,o=[...(this?.content??[""]).map(a=>`  ${a}`)];return new e(...n,o.join(`
`))}}const p_={major:4,minor:3,patch:6},Te=q("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=p_;const r=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&r.unshift(t);for(const o of r)for(const a of o._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const o=(i,s,l)=>{let f=Jn(i),d;for(const m of s){if(m._zod.def.when){if(!m._zod.def.when(i))continue}else if(f)continue;const h=i.issues.length,c=m._zod.check(i);if(c instanceof Promise&&l?.async===!1)throw new er;if(d||c instanceof Promise)d=(d??Promise.resolve()).then(async()=>{await c,i.issues.length!==h&&(f||(f=Jn(i,h)))});else{if(i.issues.length===h)continue;f||(f=Jn(i,h))}}return d?d.then(()=>i):i},a=(i,s,l)=>{if(Jn(i))return i.aborted=!0,i;const f=o(s,r,l);if(f instanceof Promise){if(l.async===!1)throw new er;return f.then(d=>t._zod.parse(d,l))}return t._zod.parse(f,l)};t._zod.run=(i,s)=>{if(s.skipChecks)return t._zod.parse(i,s);if(s.direction==="backward"){const f=t._zod.parse({value:i.value,issues:[]},{...s,skipChecks:!0});return f instanceof Promise?f.then(d=>a(d,i,s)):a(f,i,s)}const l=t._zod.parse(i,s);if(l instanceof Promise){if(s.async===!1)throw new er;return l.then(f=>o(f,r,s))}return o(l,r,s)}}ke(t,"~standard",()=>({validate:o=>{try{const a=gm(t,o);return a.success?{value:a.data}:{issues:a.error?.issues}}catch{return ym(t,o).then(i=>i.success?{value:i.data}:{issues:i.error?.issues})}},vendor:"zod",version:1}))}),ms=q("$ZodString",(t,e)=>{Te.init(t,e),t._zod.pattern=[...t?._zod.bag?.patterns??[]].pop()??Hm(t._zod.bag),t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),Ie=q("$ZodStringFormat",(t,e)=>{Oa.init(t,e),ms.init(t,e)}),h_=q("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=Dm),Ie.init(t,e)}),m_=q("$ZodUUID",(t,e)=>{if(e.version){const r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=wl(r))}else e.pattern??(e.pattern=wl());Ie.init(t,e)}),__=q("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=Pm),Ie.init(t,e)}),b_=q("$ZodURL",(t,e)=>{Ie.init(t,e),t._zod.check=n=>{try{const r=n.value.trim(),o=new URL(r);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(o.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort})),e.normalize?n.value=o.href:n.value=r;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),g_=q("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=Mm()),Ie.init(t,e)}),y_=q("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=Tm),Ie.init(t,e)}),v_=q("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=zm),Ie.init(t,e)}),x_=q("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=Im),Ie.init(t,e)}),w_=q("$ZodULID",(t,e)=>{e.pattern??(e.pattern=Om),Ie.init(t,e)}),$_=q("$ZodXID",(t,e)=>{e.pattern??(e.pattern=Cm),Ie.init(t,e)}),A_=q("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=Rm),Ie.init(t,e)}),k_=q("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=Zm(e)),Ie.init(t,e)}),S_=q("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=Gm),Ie.init(t,e)}),E_=q("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=Wm(e)),Ie.init(t,e)}),z_=q("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=Lm),Ie.init(t,e)}),I_=q("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=Nm),Ie.init(t,e),t._zod.bag.format="ipv4"}),O_=q("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=Fm),Ie.init(t,e),t._zod.bag.format="ipv6",t._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}}),C_=q("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=jm),Ie.init(t,e)}),R_=q("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=Um),Ie.init(t,e),t._zod.check=n=>{const r=n.value.split("/");try{if(r.length!==2)throw new Error;const[o,a]=r;if(!a)throw new Error;const i=Number(a);if(`${i}`!==a)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${o}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}}});function nu(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const T_=q("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=qm),Ie.init(t,e),t._zod.bag.contentEncoding="base64",t._zod.check=n=>{nu(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}});function L_(t){if(!Jf.test(t))return!1;const e=t.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return nu(n)}const D_=q("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=Jf),Ie.init(t,e),t._zod.bag.contentEncoding="base64url",t._zod.check=n=>{L_(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),P_=q("$ZodE164",(t,e)=>{e.pattern??(e.pattern=Vm),Ie.init(t,e)});function B_(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[r]=n;if(!r)return!1;const o=JSON.parse(atob(r));return!("typ"in o&&o?.typ!=="JWT"||!o.alg||e&&(!("alg"in o)||o.alg!==e))}catch{return!1}}const M_=q("$ZodJWT",(t,e)=>{Ie.init(t,e),t._zod.check=n=>{B_(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),ru=q("$ZodNumber",(t,e)=>{Te.init(t,e),t._zod.pattern=t._zod.bag.pattern??Jm,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const o=n.value;if(typeof o=="number"&&!Number.isNaN(o)&&Number.isFinite(o))return n;const a=typeof o=="number"?Number.isNaN(o)?"NaN":Number.isFinite(o)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:o,inst:t,...a?{received:a}:{}}),n}}),N_=q("$ZodNumberFormat",(t,e)=>{t_.init(t,e),ru.init(t,e)}),F_=q("$ZodBoolean",(t,e)=>{Te.init(t,e),t._zod.pattern=Ym,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=!!n.value}catch{}const o=n.value;return typeof o=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:t}),n}}),j_=q("$ZodAny",(t,e)=>{Te.init(t,e),t._zod.parse=n=>n}),U_=q("$ZodUnknown",(t,e)=>{Te.init(t,e),t._zod.parse=n=>n}),q_=q("$ZodNever",(t,e)=>{Te.init(t,e),t._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function $l(t,e,n){t.issues.length&&e.issues.push(...Wf(n,t.issues)),e.value[n]=t.value}const V_=q("$ZodArray",(t,e)=>{Te.init(t,e),t._zod.parse=(n,r)=>{const o=n.value;if(!Array.isArray(o))return n.issues.push({expected:"array",code:"invalid_type",input:o,inst:t}),n;n.value=Array(o.length);const a=[];for(let i=0;i<o.length;i++){const s=o[i],l=e.element._zod.run({value:s,issues:[]},r);l instanceof Promise?a.push(l.then(f=>$l(f,n,i))):$l(l,n,i)}return a.length?Promise.all(a).then(()=>n):n}});function oa(t,e,n,r,o){if(t.issues.length){if(o&&!(n in r))return;e.issues.push(...Wf(n,t.issues))}t.value===void 0?n in r&&(e.value[n]=void 0):e.value[n]=t.value}function ou(t){const e=Object.keys(t.shape);for(const r of e)if(!t.shape?.[r]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${r}": expected a Zod schema`);const n=sm(t.shape);return{...t,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(n)}}function au(t,e,n,r,o,a){const i=[],s=o.keySet,l=o.catchall._zod,f=l.def.type,d=l.optout==="optional";for(const m in e){if(s.has(m))continue;if(f==="never"){i.push(m);continue}const h=l.run({value:e[m],issues:[]},r);h instanceof Promise?t.push(h.then(c=>oa(c,n,m,e,d))):oa(h,n,m,e,d)}return i.length&&n.issues.push({code:"unrecognized_keys",keys:i,input:e,inst:a}),t.length?Promise.all(t).then(()=>n):n}const G_=q("$ZodObject",(t,e)=>{if(Te.init(t,e),!Object.getOwnPropertyDescriptor(e,"shape")?.get){const s=e.shape;Object.defineProperty(e,"shape",{get:()=>{const l={...s};return Object.defineProperty(e,"shape",{value:l}),l}})}const r=cs(()=>ou(e));ke(t._zod,"propValues",()=>{const s=e.shape,l={};for(const f in s){const d=s[f]._zod;if(d.values){l[f]??(l[f]=new Set);for(const m of d.values)l[f].add(m)}}return l});const o=ra,a=e.catchall;let i;t._zod.parse=(s,l)=>{i??(i=r.value);const f=s.value;if(!o(f))return s.issues.push({expected:"object",code:"invalid_type",input:f,inst:t}),s;s.value={};const d=[],m=i.shape;for(const h of i.keys){const c=m[h],u=c._zod.optout==="optional",p=c._zod.run({value:f[h],issues:[]},l);p instanceof Promise?d.push(p.then(_=>oa(_,s,h,f,u))):oa(p,s,h,f,u)}return a?au(d,f,s,l,r.value,t):d.length?Promise.all(d).then(()=>s):s}}),W_=q("$ZodObjectJIT",(t,e)=>{G_.init(t,e);const n=t._zod.parse,r=cs(()=>ou(e)),o=h=>{const c=new d_(["shape","payload","ctx"]),u=r.value,p=y=>{const v=xl(y);return`shape[${v}]._zod.run({ value: input[${v}], issues: [] }, ctx)`};c.write("const input = payload.value;");const _=Object.create(null);let b=0;for(const y of u.keys)_[y]=`key_${b++}`;c.write("const newResult = {};");for(const y of u.keys){const v=_[y],$=xl(y),A=h[y]?._zod?.optout==="optional";c.write(`const ${v} = ${p(y)};`),A?c.write(`
        if (${v}.issues.length) {
          if (${$} in input) {
            payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${$}, ...iss.path] : [${$}]
            })));
          }
        }
        
        if (${v}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${v}.value;
        }
        
      `):c.write(`
        if (${v}.issues.length) {
          payload.issues = payload.issues.concat(${v}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        if (${v}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${v}.value;
        }
        
      `)}c.write("payload.value = newResult;"),c.write("return payload;");const g=c.compile();return(y,v)=>g(h,y,v)};let a;const i=ra,s=!Uf.jitless,f=s&&am.value,d=e.catchall;let m;t._zod.parse=(h,c)=>{m??(m=r.value);const u=h.value;return i(u)?s&&f&&c?.async===!1&&c.jitless!==!0?(a||(a=o(e.shape)),h=a(h,c),d?au([],u,h,c,m,t):h):n(h,c):(h.issues.push({expected:"object",code:"invalid_type",input:u,inst:t}),h)}});function Al(t,e,n,r){for(const a of t)if(a.issues.length===0)return e.value=a.value,e;const o=t.filter(a=>!Jn(a));return o.length===1?(e.value=o[0].value,o[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(a=>a.issues.map(i=>Rn(i,r,Cn())))}),e)}const Z_=q("$ZodUnion",(t,e)=>{Te.init(t,e),ke(t._zod,"optin",()=>e.options.some(o=>o._zod.optin==="optional")?"optional":void 0),ke(t._zod,"optout",()=>e.options.some(o=>o._zod.optout==="optional")?"optional":void 0),ke(t._zod,"values",()=>{if(e.options.every(o=>o._zod.values))return new Set(e.options.flatMap(o=>Array.from(o._zod.values)))}),ke(t._zod,"pattern",()=>{if(e.options.every(o=>o._zod.pattern)){const o=e.options.map(a=>a._zod.pattern);return new RegExp(`^(${o.map(a=>us(a.source)).join("|")})$`)}});const n=e.options.length===1,r=e.options[0]._zod.run;t._zod.parse=(o,a)=>{if(n)return r(o,a);let i=!1;const s=[];for(const l of e.options){const f=l._zod.run({value:o.value,issues:[]},a);if(f instanceof Promise)s.push(f),i=!0;else{if(f.issues.length===0)return f;s.push(f)}}return i?Promise.all(s).then(l=>Al(l,o,t,a)):Al(s,o,t,a)}}),H_=q("$ZodIntersection",(t,e)=>{Te.init(t,e),t._zod.parse=(n,r)=>{const o=n.value,a=e.left._zod.run({value:o,issues:[]},r),i=e.right._zod.run({value:o,issues:[]},r);return a instanceof Promise||i instanceof Promise?Promise.all([a,i]).then(([l,f])=>kl(n,l,f)):kl(n,a,i)}});function Di(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Hr(t)&&Hr(e)){const n=Object.keys(e),r=Object.keys(t).filter(a=>n.indexOf(a)!==-1),o={...t,...e};for(const a of r){const i=Di(t[a],e[a]);if(!i.valid)return{valid:!1,mergeErrorPath:[a,...i.mergeErrorPath]};o[a]=i.data}return{valid:!0,data:o}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let r=0;r<t.length;r++){const o=t[r],a=e[r],i=Di(o,a);if(!i.valid)return{valid:!1,mergeErrorPath:[r,...i.mergeErrorPath]};n.push(i.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function kl(t,e,n){const r=new Map;let o;for(const s of e.issues)if(s.code==="unrecognized_keys"){o??(o=s);for(const l of s.keys)r.has(l)||r.set(l,{}),r.get(l).l=!0}else t.issues.push(s);for(const s of n.issues)if(s.code==="unrecognized_keys")for(const l of s.keys)r.has(l)||r.set(l,{}),r.get(l).r=!0;else t.issues.push(s);const a=[...r].filter(([,s])=>s.l&&s.r).map(([s])=>s);if(a.length&&o&&t.issues.push({...o,keys:a}),Jn(t))return t;const i=Di(e.value,n.value);if(!i.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);return t.value=i.data,t}const K_=q("$ZodEnum",(t,e)=>{Te.init(t,e);const n=qf(e.entries),r=new Set(n);t._zod.values=r,t._zod.pattern=new RegExp(`^(${n.filter(o=>im.has(typeof o)).map(o=>typeof o=="string"?Ea(o):o.toString()).join("|")})$`),t._zod.parse=(o,a)=>{const i=o.value;return r.has(i)||o.issues.push({code:"invalid_value",values:n,input:i,inst:t}),o}}),J_=q("$ZodTransform",(t,e)=>{Te.init(t,e),t._zod.parse=(n,r)=>{if(r.direction==="backward")throw new jf(t.constructor.name);const o=e.transform(n.value,n);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(i=>(n.value=i,n));if(o instanceof Promise)throw new er;return n.value=o,n}});function Sl(t,e){return t.issues.length&&e===void 0?{issues:[],value:void 0}:t}const iu=q("$ZodOptional",(t,e)=>{Te.init(t,e),t._zod.optin="optional",t._zod.optout="optional",ke(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),ke(t._zod,"pattern",()=>{const n=e.innerType._zod.pattern;return n?new RegExp(`^(${us(n.source)})?$`):void 0}),t._zod.parse=(n,r)=>{if(e.innerType._zod.optin==="optional"){const o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(a=>Sl(a,n.value)):Sl(o,n.value)}return n.value===void 0?n:e.innerType._zod.run(n,r)}}),Y_=q("$ZodExactOptional",(t,e)=>{iu.init(t,e),ke(t._zod,"values",()=>e.innerType._zod.values),ke(t._zod,"pattern",()=>e.innerType._zod.pattern),t._zod.parse=(n,r)=>e.innerType._zod.run(n,r)}),X_=q("$ZodNullable",(t,e)=>{Te.init(t,e),ke(t._zod,"optin",()=>e.innerType._zod.optin),ke(t._zod,"optout",()=>e.innerType._zod.optout),ke(t._zod,"pattern",()=>{const n=e.innerType._zod.pattern;return n?new RegExp(`^(${us(n.source)}|null)$`):void 0}),ke(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(n,r)=>n.value===null?n:e.innerType._zod.run(n,r)}),Q_=q("$ZodDefault",(t,e)=>{Te.init(t,e),t._zod.optin="optional",ke(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(r.direction==="backward")return e.innerType._zod.run(n,r);if(n.value===void 0)return n.value=e.defaultValue,n;const o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(a=>El(a,e)):El(o,e)}});function El(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const eb=q("$ZodPrefault",(t,e)=>{Te.init(t,e),t._zod.optin="optional",ke(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>(r.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,r))}),tb=q("$ZodNonOptional",(t,e)=>{Te.init(t,e),ke(t._zod,"values",()=>{const n=e.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,r)=>{const o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(a=>zl(a,t)):zl(o,t)}});function zl(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}const nb=q("$ZodCatch",(t,e)=>{Te.init(t,e),ke(t._zod,"optin",()=>e.innerType._zod.optin),ke(t._zod,"optout",()=>e.innerType._zod.optout),ke(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(r.direction==="backward")return e.innerType._zod.run(n,r);const o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(a=>(n.value=a.value,a.issues.length&&(n.value=e.catchValue({...n,error:{issues:a.issues.map(i=>Rn(i,r,Cn()))},input:n.value}),n.issues=[]),n)):(n.value=o.value,o.issues.length&&(n.value=e.catchValue({...n,error:{issues:o.issues.map(a=>Rn(a,r,Cn()))},input:n.value}),n.issues=[]),n)}}),rb=q("$ZodPipe",(t,e)=>{Te.init(t,e),ke(t._zod,"values",()=>e.in._zod.values),ke(t._zod,"optin",()=>e.in._zod.optin),ke(t._zod,"optout",()=>e.out._zod.optout),ke(t._zod,"propValues",()=>e.in._zod.propValues),t._zod.parse=(n,r)=>{if(r.direction==="backward"){const a=e.out._zod.run(n,r);return a instanceof Promise?a.then(i=>Eo(i,e.in,r)):Eo(a,e.in,r)}const o=e.in._zod.run(n,r);return o instanceof Promise?o.then(a=>Eo(a,e.out,r)):Eo(o,e.out,r)}});function Eo(t,e,n){return t.issues.length?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const ob=q("$ZodReadonly",(t,e)=>{Te.init(t,e),ke(t._zod,"propValues",()=>e.innerType._zod.propValues),ke(t._zod,"values",()=>e.innerType._zod.values),ke(t._zod,"optin",()=>e.innerType?._zod?.optin),ke(t._zod,"optout",()=>e.innerType?._zod?.optout),t._zod.parse=(n,r)=>{if(r.direction==="backward")return e.innerType._zod.run(n,r);const o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(Il):Il(o)}});function Il(t){return t.value=Object.freeze(t.value),t}const ab=q("$ZodCustom",(t,e)=>{Je.init(t,e),Te.init(t,e),t._zod.parse=(n,r)=>n,t._zod.check=n=>{const r=n.value,o=e.fn(r);if(o instanceof Promise)return o.then(a=>Ol(a,n,r,t));Ol(o,n,r,t)}});function Ol(t,e,n,r){if(!t){const o={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(o.params=r._zod.def.params),e.issues.push(Kr(o))}}var Cl;class ib{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const r=n[0];return this._map.set(e,r),r&&typeof r=="object"&&"id"in r&&this._idmap.set(r.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const r={...this.get(n)??{}};delete r.id;const o={...r,...this._map.get(e)};return Object.keys(o).length?o:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function sb(){return new ib}(Cl=globalThis).__zod_globalRegistry??(Cl.__zod_globalRegistry=sb());const Or=globalThis.__zod_globalRegistry;function lb(t,e){return new t({type:"string",...ae(e)})}function cb(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...ae(e)})}function Rl(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...ae(e)})}function fb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...ae(e)})}function ub(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...ae(e)})}function db(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...ae(e)})}function pb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...ae(e)})}function hb(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...ae(e)})}function mb(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...ae(e)})}function _b(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...ae(e)})}function bb(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...ae(e)})}function gb(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...ae(e)})}function yb(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...ae(e)})}function vb(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...ae(e)})}function xb(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...ae(e)})}function wb(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...ae(e)})}function $b(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...ae(e)})}function Ab(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...ae(e)})}function kb(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...ae(e)})}function Sb(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...ae(e)})}function Eb(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...ae(e)})}function zb(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...ae(e)})}function Ib(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...ae(e)})}function Ob(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...ae(e)})}function Cb(t,e){return new t({type:"string",format:"date",check:"string_format",...ae(e)})}function Rb(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...ae(e)})}function Tb(t,e){return new t({type:"string",format:"duration",check:"string_format",...ae(e)})}function Lb(t,e){return new t({type:"number",checks:[],...ae(e)})}function Db(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...ae(e)})}function Pb(t,e){return new t({type:"boolean",...ae(e)})}function Bb(t){return new t({type:"any"})}function Mb(t){return new t({type:"unknown"})}function Nb(t,e){return new t({type:"never",...ae(e)})}function Tl(t,e){return new eu({check:"less_than",...ae(e),value:t,inclusive:!1})}function ei(t,e){return new eu({check:"less_than",...ae(e),value:t,inclusive:!0})}function Ll(t,e){return new tu({check:"greater_than",...ae(e),value:t,inclusive:!1})}function ti(t,e){return new tu({check:"greater_than",...ae(e),value:t,inclusive:!0})}function Dl(t,e){return new e_({check:"multiple_of",...ae(e),value:t})}function su(t,e){return new n_({check:"max_length",...ae(e),maximum:t})}function aa(t,e){return new r_({check:"min_length",...ae(e),minimum:t})}function lu(t,e){return new o_({check:"length_equals",...ae(e),length:t})}function Fb(t,e){return new a_({check:"string_format",format:"regex",...ae(e),pattern:t})}function jb(t){return new i_({check:"string_format",format:"lowercase",...ae(t)})}function Ub(t){return new s_({check:"string_format",format:"uppercase",...ae(t)})}function qb(t,e){return new l_({check:"string_format",format:"includes",...ae(e),includes:t})}function Vb(t,e){return new c_({check:"string_format",format:"starts_with",...ae(e),prefix:t})}function Gb(t,e){return new f_({check:"string_format",format:"ends_with",...ae(e),suffix:t})}function vr(t){return new u_({check:"overwrite",tx:t})}function Wb(t){return vr(e=>e.normalize(t))}function Zb(){return vr(t=>t.trim())}function Hb(){return vr(t=>t.toLowerCase())}function Kb(){return vr(t=>t.toUpperCase())}function Jb(){return vr(t=>om(t))}function Yb(t,e,n){return new t({type:"array",element:e,...ae(n)})}function Xb(t,e,n){return new t({type:"custom",check:"custom",fn:e,...ae(n)})}function Qb(t){const e=eg(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(Kr(r,n.value,e._zod.def));else{const o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=e),o.continue??(o.continue=!e._zod.def.abort),n.issues.push(Kr(o))}},t(n.value,n)));return e}function eg(t,e){const n=new Je({check:"custom",...ae(e)});return n._zod.check=t,n}function cu(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??Or,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,cycles:t?.cycles??"ref",reused:t?.reused??"inline",external:t?.external??void 0}}function qe(t,e,n={path:[],schemaPath:[]}){var r;const o=t._zod.def,a=e.seen.get(t);if(a)return a.count++,n.schemaPath.includes(t)&&(a.cycle=n.path),a.schema;const i={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,i);const s=t._zod.toJSONSchema?.();if(s)i.schema=s;else{const d={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,i.schema,d);else{const h=i.schema,c=e.processors[o.type];if(!c)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);c(t,e,h,d)}const m=t._zod.parent;m&&(i.ref||(i.ref=m),qe(m,e,d),e.seen.get(m).isParent=!0)}const l=e.metadataRegistry.get(t);return l&&Object.assign(i.schema,l),e.io==="input"&&Ze(t)&&(delete i.schema.examples,delete i.schema.default),e.io==="input"&&i.schema._prefault&&((r=i.schema).default??(r.default=i.schema._prefault)),delete i.schema._prefault,e.seen.get(t).schema}function fu(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const r=new Map;for(const i of t.seen.entries()){const s=t.metadataRegistry.get(i[0])?.id;if(s){const l=r.get(s);if(l&&l!==i[0])throw new Error(`Duplicate schema id "${s}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(s,i[0])}}const o=i=>{const s=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const m=t.external.registry.get(i[0])?.id,h=t.external.uri??(u=>u);if(m)return{ref:h(m)};const c=i[1].defId??i[1].schema.id??`schema${t.counter++}`;return i[1].defId=c,{defId:c,ref:`${h("__shared")}#/${s}/${c}`}}if(i[1]===n)return{ref:"#"};const f=`#/${s}/`,d=i[1].schema.id??`__schema${t.counter++}`;return{defId:d,ref:f+d}},a=i=>{if(i[1].schema.$ref)return;const s=i[1],{ref:l,defId:f}=o(i);s.def={...s.schema},f&&(s.defId=f);const d=s.schema;for(const m in d)delete d[m];d.$ref=l};if(t.cycles==="throw")for(const i of t.seen.entries()){const s=i[1];if(s.cycle)throw new Error(`Cycle detected: #/${s.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const i of t.seen.entries()){const s=i[1];if(e===i[0]){a(i);continue}if(t.external){const f=t.external.registry.get(i[0])?.id;if(e!==i[0]&&f){a(i);continue}}if(t.metadataRegistry.get(i[0])?.id){a(i);continue}if(s.cycle){a(i);continue}if(s.count>1&&t.reused==="ref"){a(i);continue}}}function uu(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const r=i=>{const s=t.seen.get(i);if(s.ref===null)return;const l=s.def??s.schema,f={...l},d=s.ref;if(s.ref=null,d){r(d);const h=t.seen.get(d),c=h.schema;if(c.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(l.allOf=l.allOf??[],l.allOf.push(c)):Object.assign(l,c),Object.assign(l,f),i._zod.parent===d)for(const p in l)p==="$ref"||p==="allOf"||p in f||delete l[p];if(c.$ref&&h.def)for(const p in l)p==="$ref"||p==="allOf"||p in h.def&&JSON.stringify(l[p])===JSON.stringify(h.def[p])&&delete l[p]}const m=i._zod.parent;if(m&&m!==d){r(m);const h=t.seen.get(m);if(h?.schema.$ref&&(l.$ref=h.schema.$ref,h.def))for(const c in l)c==="$ref"||c==="allOf"||c in h.def&&JSON.stringify(l[c])===JSON.stringify(h.def[c])&&delete l[c]}t.override({zodSchema:i,jsonSchema:l,path:s.path??[]})};for(const i of[...t.seen.entries()].reverse())r(i[0]);const o={};if(t.target==="draft-2020-12"?o.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?o.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?o.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const i=t.external.registry.get(e)?.id;if(!i)throw new Error("Schema is missing an `id` property");o.$id=t.external.uri(i)}Object.assign(o,n.def??n.schema);const a=t.external?.defs??{};for(const i of t.seen.entries()){const s=i[1];s.def&&s.defId&&(a[s.defId]=s.def)}t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?o.$defs=a:o.definitions=a);try{const i=JSON.parse(JSON.stringify(o));return Object.defineProperty(i,"~standard",{value:{...e["~standard"],jsonSchema:{input:ia(e,"input",t.processors),output:ia(e,"output",t.processors)}},enumerable:!1,writable:!1}),i}catch{throw new Error("Error converting schema to JSON.")}}function Ze(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const r=t._zod.def;if(r.type==="transform")return!0;if(r.type==="array")return Ze(r.element,n);if(r.type==="set")return Ze(r.valueType,n);if(r.type==="lazy")return Ze(r.getter(),n);if(r.type==="promise"||r.type==="optional"||r.type==="nonoptional"||r.type==="nullable"||r.type==="readonly"||r.type==="default"||r.type==="prefault")return Ze(r.innerType,n);if(r.type==="intersection")return Ze(r.left,n)||Ze(r.right,n);if(r.type==="record"||r.type==="map")return Ze(r.keyType,n)||Ze(r.valueType,n);if(r.type==="pipe")return Ze(r.in,n)||Ze(r.out,n);if(r.type==="object"){for(const o in r.shape)if(Ze(r.shape[o],n))return!0;return!1}if(r.type==="union"){for(const o of r.options)if(Ze(o,n))return!0;return!1}if(r.type==="tuple"){for(const o of r.items)if(Ze(o,n))return!0;return!!(r.rest&&Ze(r.rest,n))}return!1}const tg=(t,e={})=>n=>{const r=cu({...n,processors:e});return qe(t,r),fu(r,t),uu(r,t)},ia=(t,e,n={})=>r=>{const{libraryOptions:o,target:a}=r??{},i=cu({...o??{},target:a,io:e,processors:n});return qe(t,i),fu(i,t),uu(i,t)},ng={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},rg=(t,e,n,r)=>{const o=n;o.type="string";const{minimum:a,maximum:i,format:s,patterns:l,contentEncoding:f}=t._zod.bag;if(typeof a=="number"&&(o.minLength=a),typeof i=="number"&&(o.maxLength=i),s&&(o.format=ng[s]??s,o.format===""&&delete o.format,s==="time"&&delete o.format),f&&(o.contentEncoding=f),l&&l.size>0){const d=[...l];d.length===1?o.pattern=d[0].source:d.length>1&&(o.allOf=[...d.map(m=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:m.source}))])}},og=(t,e,n,r)=>{const o=n,{minimum:a,maximum:i,format:s,multipleOf:l,exclusiveMaximum:f,exclusiveMinimum:d}=t._zod.bag;typeof s=="string"&&s.includes("int")?o.type="integer":o.type="number",typeof d=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(o.minimum=d,o.exclusiveMinimum=!0):o.exclusiveMinimum=d),typeof a=="number"&&(o.minimum=a,typeof d=="number"&&e.target!=="draft-04"&&(d>=a?delete o.minimum:delete o.exclusiveMinimum)),typeof f=="number"&&(e.target==="draft-04"||e.target==="openapi-3.0"?(o.maximum=f,o.exclusiveMaximum=!0):o.exclusiveMaximum=f),typeof i=="number"&&(o.maximum=i,typeof f=="number"&&e.target!=="draft-04"&&(f<=i?delete o.maximum:delete o.exclusiveMaximum)),typeof l=="number"&&(o.multipleOf=l)},ag=(t,e,n,r)=>{n.type="boolean"},ig=(t,e,n,r)=>{n.not={}},sg=(t,e,n,r)=>{},lg=(t,e,n,r)=>{},cg=(t,e,n,r)=>{const o=t._zod.def,a=qf(o.entries);a.every(i=>typeof i=="number")&&(n.type="number"),a.every(i=>typeof i=="string")&&(n.type="string"),n.enum=a},fg=(t,e,n,r)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},ug=(t,e,n,r)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},dg=(t,e,n,r)=>{const o=n,a=t._zod.def,{minimum:i,maximum:s}=t._zod.bag;typeof i=="number"&&(o.minItems=i),typeof s=="number"&&(o.maxItems=s),o.type="array",o.items=qe(a.element,e,{...r,path:[...r.path,"items"]})},pg=(t,e,n,r)=>{const o=n,a=t._zod.def;o.type="object",o.properties={};const i=a.shape;for(const f in i)o.properties[f]=qe(i[f],e,{...r,path:[...r.path,"properties",f]});const s=new Set(Object.keys(i)),l=new Set([...s].filter(f=>{const d=a.shape[f]._zod;return e.io==="input"?d.optin===void 0:d.optout===void 0}));l.size>0&&(o.required=Array.from(l)),a.catchall?._zod.def.type==="never"?o.additionalProperties=!1:a.catchall?a.catchall&&(o.additionalProperties=qe(a.catchall,e,{...r,path:[...r.path,"additionalProperties"]})):e.io==="output"&&(o.additionalProperties=!1)},hg=(t,e,n,r)=>{const o=t._zod.def,a=o.inclusive===!1,i=o.options.map((s,l)=>qe(s,e,{...r,path:[...r.path,a?"oneOf":"anyOf",l]}));a?n.oneOf=i:n.anyOf=i},mg=(t,e,n,r)=>{const o=t._zod.def,a=qe(o.left,e,{...r,path:[...r.path,"allOf",0]}),i=qe(o.right,e,{...r,path:[...r.path,"allOf",1]}),s=f=>"allOf"in f&&Object.keys(f).length===1,l=[...s(a)?a.allOf:[a],...s(i)?i.allOf:[i]];n.allOf=l},_g=(t,e,n,r)=>{const o=t._zod.def,a=qe(o.innerType,e,r),i=e.seen.get(t);e.target==="openapi-3.0"?(i.ref=o.innerType,n.nullable=!0):n.anyOf=[a,{type:"null"}]},bg=(t,e,n,r)=>{const o=t._zod.def;qe(o.innerType,e,r);const a=e.seen.get(t);a.ref=o.innerType},gg=(t,e,n,r)=>{const o=t._zod.def;qe(o.innerType,e,r);const a=e.seen.get(t);a.ref=o.innerType,n.default=JSON.parse(JSON.stringify(o.defaultValue))},yg=(t,e,n,r)=>{const o=t._zod.def;qe(o.innerType,e,r);const a=e.seen.get(t);a.ref=o.innerType,e.io==="input"&&(n._prefault=JSON.parse(JSON.stringify(o.defaultValue)))},vg=(t,e,n,r)=>{const o=t._zod.def;qe(o.innerType,e,r);const a=e.seen.get(t);a.ref=o.innerType;let i;try{i=o.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}n.default=i},xg=(t,e,n,r)=>{const o=t._zod.def,a=e.io==="input"?o.in._zod.def.type==="transform"?o.out:o.in:o.out;qe(a,e,r);const i=e.seen.get(t);i.ref=a},wg=(t,e,n,r)=>{const o=t._zod.def;qe(o.innerType,e,r);const a=e.seen.get(t);a.ref=o.innerType,n.readOnly=!0},du=(t,e,n,r)=>{const o=t._zod.def;qe(o.innerType,e,r);const a=e.seen.get(t);a.ref=o.innerType},$g=q("ZodISODateTime",(t,e)=>{k_.init(t,e),Ce.init(t,e)});function Ag(t){return Ob($g,t)}const kg=q("ZodISODate",(t,e)=>{S_.init(t,e),Ce.init(t,e)});function Sg(t){return Cb(kg,t)}const Eg=q("ZodISOTime",(t,e)=>{E_.init(t,e),Ce.init(t,e)});function zg(t){return Rb(Eg,t)}const Ig=q("ZodISODuration",(t,e)=>{z_.init(t,e),Ce.init(t,e)});function Og(t){return Tb(Ig,t)}const Cg=(t,e)=>{Hf.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:n=>bm(t,n)},flatten:{value:n=>_m(t,n)},addIssue:{value:n=>{t.issues.push(n),t.message=JSON.stringify(t.issues,Li,2)}},addIssues:{value:n=>{t.issues.push(...n),t.message=JSON.stringify(t.issues,Li,2)}},isEmpty:{get(){return t.issues.length===0}}})},ft=q("ZodError",Cg,{Parent:Error}),Rg=ps(ft),Tg=hs(ft),Lg=za(ft),Dg=Ia(ft),Pg=vm(ft),Bg=xm(ft),Mg=wm(ft),Ng=$m(ft),Fg=Am(ft),jg=km(ft),Ug=Sm(ft),qg=Em(ft),Le=q("ZodType",(t,e)=>(Te.init(t,e),Object.assign(t["~standard"],{jsonSchema:{input:ia(t,"input"),output:ia(t,"output")}}),t.toJSONSchema=tg(t,{}),t.def=e,t.type=e.type,Object.defineProperty(t,"_def",{value:e}),t.check=(...n)=>t.clone(an(e,{checks:[...e.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),{parent:!0}),t.with=t.check,t.clone=(n,r)=>sn(t,n,r),t.brand=()=>t,t.register=((n,r)=>(n.add(t,r),t)),t.parse=(n,r)=>Rg(t,n,r,{callee:t.parse}),t.safeParse=(n,r)=>Lg(t,n,r),t.parseAsync=async(n,r)=>Tg(t,n,r,{callee:t.parseAsync}),t.safeParseAsync=async(n,r)=>Dg(t,n,r),t.spa=t.safeParseAsync,t.encode=(n,r)=>Pg(t,n,r),t.decode=(n,r)=>Bg(t,n,r),t.encodeAsync=async(n,r)=>Mg(t,n,r),t.decodeAsync=async(n,r)=>Ng(t,n,r),t.safeEncode=(n,r)=>Fg(t,n,r),t.safeDecode=(n,r)=>jg(t,n,r),t.safeEncodeAsync=async(n,r)=>Ug(t,n,r),t.safeDecodeAsync=async(n,r)=>qg(t,n,r),t.refine=(n,r)=>t.check(Cy(n,r)),t.superRefine=n=>t.check(Ry(n)),t.overwrite=n=>t.check(vr(n)),t.optional=()=>Nl(t),t.exactOptional=()=>yy(t),t.nullable=()=>Fl(t),t.nullish=()=>Nl(Fl(t)),t.nonoptional=n=>Ay(t,n),t.array=()=>ln(t),t.or=n=>xr([t,n]),t.and=n=>my(t,n),t.transform=n=>jl(t,by(n)),t.default=n=>xy(t,n),t.prefault=n=>$y(t,n),t.catch=n=>Sy(t,n),t.pipe=n=>jl(t,n),t.readonly=()=>Iy(t),t.describe=n=>{const r=t.clone();return Or.add(r,{description:n}),r},Object.defineProperty(t,"description",{get(){return Or.get(t)?.description},configurable:!0}),t.meta=(...n)=>{if(n.length===0)return Or.get(t);const r=t.clone();return Or.add(r,n[0]),r},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t.apply=n=>n(t),t)),pu=q("_ZodString",(t,e)=>{ms.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(r,o,a)=>rg(t,r,o);const n=t._zod.bag;t.format=n.format??null,t.minLength=n.minimum??null,t.maxLength=n.maximum??null,t.regex=(...r)=>t.check(Fb(...r)),t.includes=(...r)=>t.check(qb(...r)),t.startsWith=(...r)=>t.check(Vb(...r)),t.endsWith=(...r)=>t.check(Gb(...r)),t.min=(...r)=>t.check(aa(...r)),t.max=(...r)=>t.check(su(...r)),t.length=(...r)=>t.check(lu(...r)),t.nonempty=(...r)=>t.check(aa(1,...r)),t.lowercase=r=>t.check(jb(r)),t.uppercase=r=>t.check(Ub(r)),t.trim=()=>t.check(Zb()),t.normalize=(...r)=>t.check(Wb(...r)),t.toLowerCase=()=>t.check(Hb()),t.toUpperCase=()=>t.check(Kb()),t.slugify=()=>t.check(Jb())}),hu=q("ZodString",(t,e)=>{ms.init(t,e),pu.init(t,e),t.email=n=>t.check(cb(Vg,n)),t.url=n=>t.check(hb(Gg,n)),t.jwt=n=>t.check(Ib(iy,n)),t.emoji=n=>t.check(mb(Wg,n)),t.guid=n=>t.check(Rl(Pl,n)),t.uuid=n=>t.check(fb(zo,n)),t.uuidv4=n=>t.check(ub(zo,n)),t.uuidv6=n=>t.check(db(zo,n)),t.uuidv7=n=>t.check(pb(zo,n)),t.nanoid=n=>t.check(_b(Zg,n)),t.guid=n=>t.check(Rl(Pl,n)),t.cuid=n=>t.check(bb(Hg,n)),t.cuid2=n=>t.check(gb(Kg,n)),t.ulid=n=>t.check(yb(Jg,n)),t.base64=n=>t.check(Sb(ry,n)),t.base64url=n=>t.check(Eb(oy,n)),t.xid=n=>t.check(vb(Yg,n)),t.ksuid=n=>t.check(xb(Xg,n)),t.ipv4=n=>t.check(wb(Qg,n)),t.ipv6=n=>t.check($b(ey,n)),t.cidrv4=n=>t.check(Ab(ty,n)),t.cidrv6=n=>t.check(kb(ny,n)),t.e164=n=>t.check(zb(ay,n)),t.datetime=n=>t.check(Ag(n)),t.date=n=>t.check(Sg(n)),t.time=n=>t.check(zg(n)),t.duration=n=>t.check(Og(n))});function de(t){return lb(hu,t)}const Ce=q("ZodStringFormat",(t,e)=>{Ie.init(t,e),pu.init(t,e)}),Vg=q("ZodEmail",(t,e)=>{__.init(t,e),Ce.init(t,e)}),Pl=q("ZodGUID",(t,e)=>{h_.init(t,e),Ce.init(t,e)}),zo=q("ZodUUID",(t,e)=>{m_.init(t,e),Ce.init(t,e)}),Gg=q("ZodURL",(t,e)=>{b_.init(t,e),Ce.init(t,e)}),Wg=q("ZodEmoji",(t,e)=>{g_.init(t,e),Ce.init(t,e)}),Zg=q("ZodNanoID",(t,e)=>{y_.init(t,e),Ce.init(t,e)}),Hg=q("ZodCUID",(t,e)=>{v_.init(t,e),Ce.init(t,e)}),Kg=q("ZodCUID2",(t,e)=>{x_.init(t,e),Ce.init(t,e)}),Jg=q("ZodULID",(t,e)=>{w_.init(t,e),Ce.init(t,e)}),Yg=q("ZodXID",(t,e)=>{$_.init(t,e),Ce.init(t,e)}),Xg=q("ZodKSUID",(t,e)=>{A_.init(t,e),Ce.init(t,e)}),Qg=q("ZodIPv4",(t,e)=>{I_.init(t,e),Ce.init(t,e)}),ey=q("ZodIPv6",(t,e)=>{O_.init(t,e),Ce.init(t,e)}),ty=q("ZodCIDRv4",(t,e)=>{C_.init(t,e),Ce.init(t,e)}),ny=q("ZodCIDRv6",(t,e)=>{R_.init(t,e),Ce.init(t,e)}),ry=q("ZodBase64",(t,e)=>{T_.init(t,e),Ce.init(t,e)}),oy=q("ZodBase64URL",(t,e)=>{D_.init(t,e),Ce.init(t,e)}),ay=q("ZodE164",(t,e)=>{P_.init(t,e),Ce.init(t,e)}),iy=q("ZodJWT",(t,e)=>{M_.init(t,e),Ce.init(t,e)}),_s=q("ZodNumber",(t,e)=>{ru.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(r,o,a)=>og(t,r,o),t.gt=(r,o)=>t.check(Ll(r,o)),t.gte=(r,o)=>t.check(ti(r,o)),t.min=(r,o)=>t.check(ti(r,o)),t.lt=(r,o)=>t.check(Tl(r,o)),t.lte=(r,o)=>t.check(ei(r,o)),t.max=(r,o)=>t.check(ei(r,o)),t.int=r=>t.check(Bl(r)),t.safe=r=>t.check(Bl(r)),t.positive=r=>t.check(Ll(0,r)),t.nonnegative=r=>t.check(ti(0,r)),t.negative=r=>t.check(Tl(0,r)),t.nonpositive=r=>t.check(ei(0,r)),t.multipleOf=(r,o)=>t.check(Dl(r,o)),t.step=(r,o)=>t.check(Dl(r,o)),t.finite=()=>t;const n=t._zod.bag;t.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,t.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,t.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),t.isFinite=!0,t.format=n.format??null});function It(t){return Lb(_s,t)}const sy=q("ZodNumberFormat",(t,e)=>{N_.init(t,e),_s.init(t,e)});function Bl(t){return Db(sy,t)}const mu=q("ZodBoolean",(t,e)=>{F_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>ag(t,n,r)});function _u(t){return Pb(mu,t)}const ly=q("ZodAny",(t,e)=>{j_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>sg()});function ue(){return Bb(ly)}const cy=q("ZodUnknown",(t,e)=>{U_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>lg()});function Ml(){return Mb(cy)}const fy=q("ZodNever",(t,e)=>{q_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>ig(t,n,r)});function uy(t){return Nb(fy,t)}const bu=q("ZodArray",(t,e)=>{V_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>dg(t,n,r,o),t.element=e.element,t.min=(n,r)=>t.check(aa(n,r)),t.nonempty=n=>t.check(aa(1,n)),t.max=(n,r)=>t.check(su(n,r)),t.length=(n,r)=>t.check(lu(n,r)),t.unwrap=()=>t.element});function ln(t,e){return Yb(bu,t,e)}const dy=q("ZodObject",(t,e)=>{W_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>pg(t,n,r,o),ke(t,"shape",()=>e.shape),t.keyof=()=>At(Object.keys(t._zod.def.shape)),t.catchall=n=>t.clone({...t._zod.def,catchall:n}),t.passthrough=()=>t.clone({...t._zod.def,catchall:Ml()}),t.loose=()=>t.clone({...t._zod.def,catchall:Ml()}),t.strict=()=>t.clone({...t._zod.def,catchall:uy()}),t.strip=()=>t.clone({...t._zod.def,catchall:void 0}),t.extend=n=>um(t,n),t.safeExtend=n=>dm(t,n),t.merge=n=>pm(t,n),t.pick=n=>cm(t,n),t.omit=n=>fm(t,n),t.partial=(...n)=>hm(bs,t,n[0]),t.required=(...n)=>mm(yu,t,n[0])});function Dr(t,e){const n={type:"object",shape:t??{},...ae(e)};return new dy(n)}const py=q("ZodUnion",(t,e)=>{Z_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>hg(t,n,r,o),t.options=e.options});function xr(t,e){return new py({type:"union",options:t,...ae(e)})}const hy=q("ZodIntersection",(t,e)=>{H_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>mg(t,n,r,o)});function my(t,e){return new hy({type:"intersection",left:t,right:e})}const Jr=q("ZodEnum",(t,e)=>{K_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(r,o,a)=>cg(t,r,o),t.enum=e.entries,t.options=Object.values(e.entries);const n=new Set(Object.keys(e.entries));t.extract=(r,o)=>{const a={};for(const i of r)if(n.has(i))a[i]=e.entries[i];else throw new Error(`Key ${i} not found in enum`);return new Jr({...e,checks:[],...ae(o),entries:a})},t.exclude=(r,o)=>{const a={...e.entries};for(const i of r)if(n.has(i))delete a[i];else throw new Error(`Key ${i} not found in enum`);return new Jr({...e,checks:[],...ae(o),entries:a})}});function At(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(r=>[r,r])):t;return new Jr({type:"enum",entries:n,...ae(e)})}const _y=q("ZodTransform",(t,e)=>{J_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>ug(t,n),t._zod.parse=(n,r)=>{if(r.direction==="backward")throw new jf(t.constructor.name);n.addIssue=a=>{if(typeof a=="string")n.issues.push(Kr(a,n.value,e));else{const i=a;i.fatal&&(i.continue=!1),i.code??(i.code="custom"),i.input??(i.input=n.value),i.inst??(i.inst=t),n.issues.push(Kr(i))}};const o=e.transform(n.value,n);return o instanceof Promise?o.then(a=>(n.value=a,n)):(n.value=o,n)}});function by(t){return new _y({type:"transform",transform:t})}const bs=q("ZodOptional",(t,e)=>{iu.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>du(t,n,r,o),t.unwrap=()=>t._zod.def.innerType});function Nl(t){return new bs({type:"optional",innerType:t})}const gy=q("ZodExactOptional",(t,e)=>{Y_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>du(t,n,r,o),t.unwrap=()=>t._zod.def.innerType});function yy(t){return new gy({type:"optional",innerType:t})}const gu=q("ZodNullable",(t,e)=>{X_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>_g(t,n,r,o),t.unwrap=()=>t._zod.def.innerType});function Fl(t){return new gu({type:"nullable",innerType:t})}const vy=q("ZodDefault",(t,e)=>{Q_.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>gg(t,n,r,o),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function xy(t,e){return new vy({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():Gf(e)}})}const wy=q("ZodPrefault",(t,e)=>{eb.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>yg(t,n,r,o),t.unwrap=()=>t._zod.def.innerType});function $y(t,e){return new wy({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():Gf(e)}})}const yu=q("ZodNonOptional",(t,e)=>{tb.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>bg(t,n,r,o),t.unwrap=()=>t._zod.def.innerType});function Ay(t,e){return new yu({type:"nonoptional",innerType:t,...ae(e)})}const ky=q("ZodCatch",(t,e)=>{nb.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>vg(t,n,r,o),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function Sy(t,e){return new ky({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}const Ey=q("ZodPipe",(t,e)=>{rb.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>xg(t,n,r,o),t.in=e.in,t.out=e.out});function jl(t,e){return new Ey({type:"pipe",in:t,out:e})}const zy=q("ZodReadonly",(t,e)=>{ob.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>wg(t,n,r,o),t.unwrap=()=>t._zod.def.innerType});function Iy(t){return new zy({type:"readonly",innerType:t})}const Oy=q("ZodCustom",(t,e)=>{ab.init(t,e),Le.init(t,e),t._zod.processJSONSchema=(n,r,o)=>fg(t,n)});function Cy(t,e={}){return Xb(Oy,t,e)}function Ry(t){return Qb(t)}function Ty(t){const e={};for(const[r,o]of Object.entries(t.args)){let a=o.type;(o.refable||o.requiredRef)&&(o.requiredRef?a=de():a=xr([a,de()])),o.optional&&(a=a.optional()),e[r]=a}return Dr(e)}const vu=new Set(["id","op","metadata","comment","const_data","dataType"]),Ly=new Set([...vu,"exec_in","exec_out","exec_true","exec_false","exec_body","exec_completed","next","_next","args","values"]),le=It(),be=It().int(),Bo=_u(),gs=ln(It()).length(2),ys=ln(It()).length(3),ct=ln(It()).length(4),xu=ln(It()).length(9),wu=ln(It()).length(16),Dy=xr([le,be,Bo]),Mt=xr([gs,ys,ct,xu,wu]),$u=xr([xu,wu]),$e=xr([Dy,Mt,$u,ln(ue())]),Py=At(["rgba8","rgba16f","rgba32f","r8","r16f","r32f","unknown"]),Ul=At(["zero","one","src","one-minus-src","src-alpha","one-minus-src-alpha","dst","one-minus-dst","dst-alpha","one-minus-dst-alpha"]),ql=Dr({operation:At(["add","subtract","reverse-subtract","min","max"]).optional(),srcFactor:Ul.optional(),dstFactor:Ul.optional()}),By=Dr({topology:At(["point-list","line-list","line-strip","triangle-list","triangle-strip"]).optional(),cullMode:At(["none","front","back"]).optional(),frontFace:At(["ccw","cw"]).optional(),depthStencil:Dr({format:Py,depthWriteEnabled:_u(),depthCompare:At(["never","less","equal","less-equal","greater","not-equal","greater-equal","always"])}).optional(),blend:Dr({color:ql,alpha:ql}).optional()}),My=Object.keys(Ke).map(t=>`TextureFormat.${t}`),Ny=At(My),Fy={doc:"Create a PRNG state. Optionally provide an explicit seed; if omitted, auto-seeds from thread ID and frame entropy.",args:{seed:{type:It(),doc:"Explicit seed value",refable:!0,optional:!0}}},jy={doc:"Advance PRNG state and produce a random value. Output type defaults to float [0,1]. Supports float, int, float2, float3, float4, int2, int3, int4. For int output, use min/max to specify range.",isExecutable:!0,args:{prng:{type:de(),doc:"Local variable name holding the PRNG state",refType:"var",isIdentifier:!0},type:{type:de(),doc:"Output type: float (default), int, float2, float3, float4, int2, int3, int4",optional:!0,isIdentifier:!0},min:{type:It(),doc:"Minimum value for int range output",refable:!0,optional:!0},max:{type:It(),doc:"Maximum value for int range output",refable:!0,optional:!0}}},wt={doc:"Standard numeric binary math operation. Mixed int/float operands are auto-coerced to float.",args:{a:{type:$e,doc:"First operand",refable:!0,literalTypes:["float","int","float2","float3","float4"]},b:{type:$e,doc:"Second operand",refable:!0,literalTypes:["float","int","float2","float3","float4"]}}},ni={doc:"Standard logic binary operation.",args:{a:{type:$e,doc:"First operand",refable:!0,literalTypes:["bool","float","int"]},b:{type:$e,doc:"Second operand",refable:!0,literalTypes:["bool","float","int"]}}},Io={doc:"Comparison operation with numeric inputs.",args:{a:{type:$e,doc:"First operand",refable:!0,literalTypes:["float","int","float2","float3","float4"]},b:{type:$e,doc:"Second operand",refable:!0,literalTypes:["float","int","float2","float3","float4"]}}},Vl={doc:"Equality comparison operation.",args:{a:{type:$e,doc:"First operand",refable:!0,literalTypes:["float","int","bool","float2","float3","float4"]},b:{type:$e,doc:"Second operand",refable:!0,literalTypes:["float","int","bool","float2","float3","float4"]}}},xe={doc:"Standard numeric unary math operation.",args:{val:{type:$e,doc:"Input value",refable:!0,literalTypes:["float","int","float2","float3","float4"]}}},Uy={doc:"Standard logic unary operation.",args:{val:{type:$e,doc:"Input value",refable:!0,literalTypes:["bool","float","int"]}}},Lt={doc:"Type-casting unary operation. On Metal, float->int uses wrapping for out-of-range values.",args:{val:{type:$e,doc:"Input value",refable:!0,literalTypes:["float","int","bool","string","float2","float3","float4"]}}},qy={doc:"Clamp a value between min and max.",args:{val:{type:$e,doc:"Value to clamp",refable:!0},min:{type:$e,doc:"Minimum value",refable:!0},max:{type:$e,doc:"Maximum value",refable:!0}}},Vy={doc:"Constant literal value. By default, numeric literals are typed as 'float'. Use the optional 'type' field to specify an explicit type (e.g. 'int', 'bool').",args:{val:{type:ue(),doc:"The literal value (scalar, vector, matrix, array, etc.)",literalTypes:["float","int","bool","string","float2","float3","float4","float3x3","float4x4","array","struct"]},type:{type:de().optional(),doc:"Explicit type ('int', 'float', 'bool', 'float2', etc.)",optional:!0,isIdentifier:!0}}},Gy={doc:"Construct a float2. Supports component-group keys: x, y, xy.",args:{x:{type:le,doc:"X",refable:!0,literalTypes:["float","int"],optional:!0},y:{type:le,doc:"Y",refable:!0,literalTypes:["float","int"],optional:!0},xy:{type:ue(),doc:"XY (float2 or scalar broadcast)",refable:!0,optional:!0}}},Wy={doc:"Construct a float3. Supports component-group keys: x, y, z, xy, yz, xyz.",args:{x:{type:le,doc:"X",refable:!0,optional:!0},y:{type:le,doc:"Y",refable:!0,optional:!0},z:{type:le,doc:"Z",refable:!0,optional:!0},xy:{type:ue(),doc:"XY (float2 or scalar broadcast)",refable:!0,optional:!0},yz:{type:ue(),doc:"YZ (float2 or scalar broadcast)",refable:!0,optional:!0},xyz:{type:ue(),doc:"XYZ (float3 or scalar broadcast)",refable:!0,optional:!0}}},Zy={doc:"Construct a float4. Supports component-group keys: x, y, z, w, xy, yz, zw, xyz, yzw, xyzw.",args:{x:{type:le,doc:"X",refable:!0,optional:!0},y:{type:le,doc:"Y",refable:!0,optional:!0},z:{type:le,doc:"Z",refable:!0,optional:!0},w:{type:le,doc:"W",refable:!0,optional:!0},xy:{type:ue(),doc:"XY (float2 or scalar broadcast)",refable:!0,optional:!0},yz:{type:ue(),doc:"YZ (float2 or scalar broadcast)",refable:!0,optional:!0},zw:{type:ue(),doc:"ZW (float2 or scalar broadcast)",refable:!0,optional:!0},xyz:{type:ue(),doc:"XYZ (float3 or scalar broadcast)",refable:!0,optional:!0},yzw:{type:ue(),doc:"YZW (float3 or scalar broadcast)",refable:!0,optional:!0},xyzw:{type:ue(),doc:"XYZW (float4 or scalar broadcast)",refable:!0,optional:!0}}},Hy={doc:"Construct an int2. Supports component-group keys: x, y, xy.",args:{x:{type:be,doc:"X",refable:!0,literalTypes:["int","float"],optional:!0},y:{type:be,doc:"Y",refable:!0,literalTypes:["int","float"],optional:!0},xy:{type:ue(),doc:"XY (int2 or scalar broadcast)",refable:!0,optional:!0}}},Ky={doc:"Construct an int3. Supports component-group keys: x, y, z, xy, yz, xyz.",args:{x:{type:be,doc:"X",refable:!0,optional:!0},y:{type:be,doc:"Y",refable:!0,optional:!0},z:{type:be,doc:"Z",refable:!0,optional:!0},xy:{type:ue(),doc:"XY (int2 or scalar broadcast)",refable:!0,optional:!0},yz:{type:ue(),doc:"YZ (int2 or scalar broadcast)",refable:!0,optional:!0},xyz:{type:ue(),doc:"XYZ (int3 or scalar broadcast)",refable:!0,optional:!0}}},Jy={doc:"Construct an int4. Supports component-group keys: x, y, z, w, xy, yz, zw, xyz, yzw, xyzw.",args:{x:{type:be,doc:"X",refable:!0,optional:!0},y:{type:be,doc:"Y",refable:!0,optional:!0},z:{type:be,doc:"Z",refable:!0,optional:!0},w:{type:be,doc:"W",refable:!0,optional:!0},xy:{type:ue(),doc:"XY (int2 or scalar broadcast)",refable:!0,optional:!0},yz:{type:ue(),doc:"YZ (int2 or scalar broadcast)",refable:!0,optional:!0},zw:{type:ue(),doc:"ZW (int2 or scalar broadcast)",refable:!0,optional:!0},xyz:{type:ue(),doc:"XYZ (int3 or scalar broadcast)",refable:!0,optional:!0},yzw:{type:ue(),doc:"YZW (int3 or scalar broadcast)",refable:!0,optional:!0},xyzw:{type:ue(),doc:"XYZW (int4 or scalar broadcast)",refable:!0,optional:!0}}},Yy={doc:"Swizzle components of a vector. Works on both float and int vectors. Output type preserves the input's element type (e.g. int3.xz -> int2).",args:{vec:{type:Mt,doc:"Input vector (float or int)",refable:!0,literalTypes:["float2","float3","float4"]},channels:{type:de(),doc:"Swizzle mask using xyzw (e.g. 'xyz', 'xz', 'wwww')",literalTypes:["string"],isIdentifier:!0}}},Xy={doc:"Linearly interpolate between two vectors.",args:{a:{type:Mt,doc:"a",refable:!0},b:{type:Mt,doc:"b",refable:!0},t:{type:le,doc:"t",refable:!0}}},Qy={doc:"Draw primitives to a target resource.",isExecutable:!0,cpuOnly:!0,args:{target:{type:de(),doc:"ID of the target resource (e.g. 'screen')",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},vertex:{type:de(),doc:"ID of the vertex shader function",requiredRef:!0,refType:"func",isIdentifier:!0},fragment:{type:de(),doc:"ID of the fragment shader function",requiredRef:!0,refType:"func",isIdentifier:!0},count:{type:be,doc:"Number of vertices/indices to draw",refable:!0},pipeline:{type:By,doc:"Optional render pipeline state",optional:!0}}},ev={doc:"Sample a texture at given coordinates.",args:{tex:{type:de(),doc:"ID of the texture resource",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},coords:{type:Mt,doc:"Coordinates",refable:!0,optional:!0}}},tv={doc:"Load pixel from texture",args:{tex:{type:de(),doc:"Texture",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},coords:{type:gs,doc:"Coords [x, y]",refable:!0}}},nv={doc:"Store pixel to texture",isExecutable:!0,args:{tex:{type:de(),doc:"Texture",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},coords:{type:gs,doc:"Coords [x, y]",refable:!0},value:{type:ct,doc:"Color",refable:!0}}},rv={doc:"Load value from a buffer.",args:{buffer:{type:de(),doc:"ID of the buffer resource",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:be,doc:"Index",refable:!0}}},ov={doc:"Store value to a buffer.",isExecutable:!0,args:{buffer:{type:de(),doc:"ID of the buffer resource",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:be,doc:"Index",refable:!0},value:{type:$e,doc:"Value to store",refable:!0}}},Gl={doc:"Get resource metadata (size or format).",args:{resource:{type:de(),doc:"ID of the resource",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0}}},av={doc:"Check if a resource input is bound (not in default/black state).",args:{resource:{type:de(),doc:"Resource input ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0}}},iv={doc:"Atomically load a value from an atomic counter.",args:{counter:{type:de(),doc:"Atomic counter resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:be,doc:"Element index",refable:!0}}},sv={doc:"Atomically store a value to an atomic counter.",isExecutable:!0,args:{counter:{type:de(),doc:"Atomic counter resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:be,doc:"Element index",refable:!0},value:{type:be,doc:"Value to store",refable:!0}}},Ir={doc:"Atomic read-modify-write operation. Returns the previous value before the operation.",isExecutable:!0,args:{counter:{type:de(),doc:"Atomic counter resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},index:{type:be,doc:"Element index",refable:!0},value:{type:be,doc:"Operand value",refable:!0}}},lv={doc:"3x3 Matrix",args:{m00:{type:le,doc:"m00",optional:!0},m01:{type:le,doc:"m01",optional:!0},m02:{type:le,doc:"m02",optional:!0},m10:{type:le,doc:"m10",optional:!0},m11:{type:le,doc:"m11",optional:!0},m12:{type:le,doc:"m12",optional:!0},m20:{type:le,doc:"m20",optional:!0},m21:{type:le,doc:"m21",optional:!0},m22:{type:le,doc:"m22",optional:!0},cols:{type:ue(),doc:"Column vectors",refable:!0,optional:!0},vals:{type:ue(),doc:"Value array",refable:!0,optional:!0}}},cv={doc:"4x4 Matrix",args:{m00:{type:le,doc:"m00",optional:!0},m01:{type:le,doc:"m01",optional:!0},m02:{type:le,doc:"m02",optional:!0},m03:{type:le,doc:"m03",optional:!0},m10:{type:le,doc:"m10",optional:!0},m11:{type:le,doc:"m11",optional:!0},m12:{type:le,doc:"m12",optional:!0},m13:{type:le,doc:"m13",optional:!0},m20:{type:le,doc:"m20",optional:!0},m21:{type:le,doc:"m21",optional:!0},m22:{type:le,doc:"m22",optional:!0},m23:{type:le,doc:"m23",optional:!0},m30:{type:le,doc:"m30",optional:!0},m31:{type:le,doc:"m31",optional:!0},m32:{type:le,doc:"m32",optional:!0},m33:{type:le,doc:"m33",optional:!0},cols:{type:ue(),doc:"Column vectors",refable:!0,optional:!0},vals:{type:ue(),doc:"Value array",refable:!0,optional:!0}}},fv={doc:"Identity matrix",args:{size:{type:be,doc:"Size (3 or 4)",refable:!0}}},uv={doc:"Matrix multiplication.",args:{a:{type:ue(),doc:"Matrix A",refable:!0},b:{type:ue(),doc:"Matrix B",refable:!0}}},Wl={doc:"Matrix unary operation (transpose, inverse). Note: mat_transpose is not implemented in the standalone MSL generator.",args:{val:{type:ue(),doc:"Input matrix",refable:!0}}},dv={doc:"Construct a quaternion from axis and angle.",args:{axis:{type:ys,doc:"Rotation axis",refable:!0,optional:!0},angle:{type:le,doc:"Rotation angle",refable:!0,optional:!0},x:{type:le,doc:"x",refable:!0,optional:!0},y:{type:le,doc:"y",refable:!0,optional:!0},z:{type:le,doc:"z",refable:!0,optional:!0},w:{type:le,doc:"w",refable:!0,optional:!0}}},pv={doc:"Quaternion multiplication.",args:{a:{type:ct,doc:"Quat A",refable:!0},b:{type:ct,doc:"Quat B",refable:!0}}},hv={doc:"Slerp quats",args:{a:{type:ct,doc:"a",refable:!0},b:{type:ct,doc:"b",refable:!0},t:{type:le,doc:"t",refable:!0}}},mv={doc:"Quat to mat4",args:{q:{type:ct,doc:"q",refable:!0}}},_v={doc:"Rotate vec by quat",args:{v:{type:ys,doc:"vec",refable:!0},q:{type:ct,doc:"q",refable:!0}}},bv={doc:"Alpha-aware premultiplied color blend (NOT a simple lerp). The t parameter is optional and may be unused by some backends.",args:{a:{type:ct,doc:"Source color (RGBA)",refable:!0},b:{type:ct,doc:"Destination color (RGBA)",refable:!0},t:{type:le,doc:"Blend factor (optional, unused in premultiplied blend)",refable:!0,optional:!0}}},gv={doc:"Extract a field from a struct.",args:{struct:{type:ue(),doc:"Struct instance",refable:!0},field:{type:de(),doc:"Field name",literalTypes:["string"],isIdentifier:!0}}},yv={doc:"Set an element in an array. Mutates in-place — the `array` arg should reference a var_get of the array variable, not a pure node.",isExecutable:!0,args:{array:{type:ue(),doc:"Array variable (use var_get ref)",refable:!0,refType:"data"},index:{type:be,doc:"Index",refable:!0},value:{type:ue(),doc:"Value",refable:!0}}},vv={doc:"Extract an element from an array.",args:{array:{type:ue(),doc:"Array",refable:!0,refType:"data"},index:{type:be,doc:"Index",refable:!0}}},Au={position:"float4",vertex_index:"int",instance_index:"int",global_invocation_id:"int3",local_invocation_id:"int3",workgroup_id:"int3",local_invocation_index:"int",num_workgroups:"int3",normalized_global_invocation_id:"float3",frag_coord:"float4",front_facing:"boolean",sample_index:"int",sample_mask:"int",subgroup_invocation_id:"int",subgroup_size:"int",time:"float",delta_time:"float",bpm:"float",beat_number:"float",beat_delta:"float",output_size:"int3",prng_seed:"float"},bn=["time","delta_time","bpm","beat_number","beat_delta","prng_seed"],Cr=At(["position","vertex_index","instance_index","global_invocation_id","local_invocation_id","workgroup_id","local_invocation_index","num_workgroups","normalized_global_invocation_id","frag_coord","front_facing","sample_index","sample_mask","subgroup_invocation_id","subgroup_size","time","delta_time","bpm","beat_number","beat_delta","output_size","prng_seed"]),xv={doc:"Get a GPU/Shader built-in variable. COMPUTE: global_invocation_id (int3, thread position), local_invocation_id (int3), workgroup_id (int3), num_workgroups (int3), normalized_global_invocation_id (float3, UV-like 0..1). VERTEX: vertex_index (int), instance_index (int), position (float4, OUTPUT — set to clip-space pos). FRAGMENT: frag_coord (float4, pixel coords), front_facing (bool), sample_index (int), sample_mask (int). ANY GPU STAGE: output_size (int3, dispatch grid size for compute, render target size for vertex/fragment — use for aspect ratio, UV mapping). TIME (auto-injected into shaders): time (float, seconds), delta_time (float, frame delta), bpm/beat_number/beat_delta (float, music sync).",args:{name:{type:Cr,doc:"Built-in name (see BUILTIN_TYPES for return types)",refType:"builtin",isIdentifier:!0}}},wv={doc:"Set the value of a local variable.",isExecutable:!0,args:{var:{type:de(),doc:"Name of the variable",literalTypes:["string"],refType:"var",isIdentifier:!0},val:{type:ue(),doc:"Value to store",refable:!0}}},$v={doc:"Get the value of a local variable. Resolution order: function inputs first, then localVars, then IR-level global inputs.",args:{var:{type:de(),doc:"Name of the variable",requiredRef:!0,refType:"var",isIdentifier:!0}}},Av={doc:"Loop over a sequence. Use either `count` (iterates 0..count-1) OR `start`+`end` (iterates start..end-1), not both. Access the current index via a `loop_index` node with a matching `tag`.",isExecutable:!0,args:{count:{type:be,doc:"Number of iterations (0..count-1). Mutually exclusive with start/end.",refable:!0,optional:!0},start:{type:be,doc:"Start index (inclusive). Use with end.",refable:!0,optional:!0},end:{type:be,doc:"End index (exclusive). Use with start.",refable:!0,optional:!0},exec_body:{type:de(),doc:"Node ID for loop body",requiredRef:!0,optional:!0,refType:"exec"},exec_completed:{type:de(),doc:"Node ID for after loop",requiredRef:!0,optional:!0,refType:"exec"},tag:{type:de(),doc:"Loop tag — must match the `loop` arg in loop_index nodes to retrieve the current iteration index",optional:!0,refable:!0,isIdentifier:!0}}},mt={math_add:wt,math_sub:wt,math_mul:wt,math_div:wt,math_mod:wt,math_pow:wt,math_min:wt,math_max:wt,math_gt:Io,math_lt:Io,math_ge:Io,math_le:Io,math_eq:Vl,math_neq:Vl,math_atan2:wt,math_and:ni,math_or:ni,math_xor:ni,vec_dot:wt,math_div_scalar:{doc:"Divide by scalar",args:{val:{type:$e,doc:"Value",refable:!0},scalar:{type:le,doc:"Scalar",refable:!0}}},math_abs:xe,math_ceil:xe,math_floor:xe,math_sqrt:xe,math_exp:xe,math_log:xe,math_sin:xe,math_cos:xe,math_tan:xe,math_asin:xe,math_acos:xe,math_atan:xe,math_asinh:xe,math_acosh:xe,math_atanh:xe,math_sinh:xe,math_cosh:xe,math_tanh:xe,math_sign:xe,math_fract:xe,math_trunc:xe,math_round:xe,math_is_nan:xe,math_is_inf:xe,math_is_finite:xe,static_cast_int:Lt,static_cast_float:Lt,static_cast_bool:Lt,static_cast_int2:Lt,static_cast_int3:Lt,static_cast_int4:Lt,static_cast_float2:Lt,static_cast_float3:Lt,static_cast_float4:Lt,math_not:Uy,vec_length:{doc:"Vector length",args:{a:{type:Mt,doc:"Vector",refable:!0}}},vec_normalize:{doc:"Normalize vector",args:{a:{type:Mt,doc:"Vector",refable:!0}}},math_mad:{doc:"a * b + c",args:{a:{type:$e,doc:"a",refable:!0},b:{type:$e,doc:"b",refable:!0},c:{type:$e,doc:"c",refable:!0}}},math_clamp:qy,math_step:{doc:"Step function: returns 0.0 if x < edge, else 1.0. Some backend resolvers use arg keys 'edge' and 'val' instead of 'edge' and 'x'.",args:{edge:{type:$e,doc:"Edge threshold",refable:!0},x:{type:$e,doc:"Input value",refable:!0}}},math_smoothstep:{doc:"Smoothstep function",args:{edge0:{type:$e,doc:"Edge 0",refable:!0},edge1:{type:$e,doc:"Edge 1",refable:!0},x:{type:$e,doc:"x",refable:!0}}},math_mix:{doc:"Linear interpolation",args:{a:{type:$e,doc:"a",refable:!0},b:{type:$e,doc:"b",refable:!0},t:{type:$e,doc:"t",refable:!0}}},literal:Vy,math_pi:{doc:"Pi constant",args:{}},math_e:{doc:"Euler's number constant",args:{}},comment:{doc:"No-op comment node for graph annotation. Produces no value and cannot be referenced by other nodes. Use the node's `comment` field for text.",args:{}},float2:Gy,float3:Wy,float4:Zy,int2:Hy,int3:Ky,int4:Jy,float:{doc:"Float constructor",args:{val:{type:le,doc:"Value",refable:!0}}},int:{doc:"Int constructor",args:{val:{type:be,doc:"Value",refable:!0}}},bool:{doc:"Bool constructor",args:{val:{type:Bo,doc:"Value",refable:!0}}},string:{doc:"String constructor",args:{val:{type:de(),doc:"Value"}}},vec_swizzle:Yy,vec_mix:Xy,vec_get_element:{doc:"Get element from vector or matrix. For matrices, uses flat column-major indexing: index = col * colSize + row (WGSL/MSL emit mat[i/size][i%size]).",args:{vec:{type:Mt,doc:"Vector or Matrix",refable:!0},index:{type:be,doc:"Element index (flat for matrices)",refable:!0}}},vec_set_element:{doc:"Set element in vector or matrix. For matrices, uses flat column-major indexing: index = col * colSize + row.",args:{vec:{type:Mt,doc:"Vector or Matrix",refable:!0},index:{type:be,doc:"Element index (flat for matrices)",refable:!0},value:{type:le,doc:"Value",refable:!0}}},texture_sample:ev,texture_load:tv,texture_store:nv,buffer_load:rv,buffer_store:ov,resource_get_size:Gl,resource_get_format:Gl,resource_is_bound:av,atomic_load:iv,atomic_store:sv,atomic_add:Ir,atomic_sub:Ir,atomic_min:Ir,atomic_max:Ir,atomic_exchange:Ir,prng_make:Fy,prng_next:jy,float3x3:lv,float4x4:cv,mat_identity:fv,mat_mul:uv,mat_transpose:Wl,mat_inverse:Wl,mat_extract:{doc:"Extract element from matrix by col/row. Matrices are column-major: mat[col] returns a column vector in WGSL/MSL.",args:{mat:{type:$u,doc:"Matrix",refable:!0},col:{type:be,doc:"Column index",refable:!0},row:{type:be,doc:"Row index",refable:!0}}},quat:dv,quat_identity:{doc:"Identity quat",args:{}},quat_mul:pv,quat_slerp:hv,quat_to_float4x4:mv,quat_rotate:_v,color_mix:bv,math_flush_subnormal:xe,math_mantissa:xe,math_exponent:xe,math_frexp_mantissa:xe,math_frexp_exponent:xe,math_ldexp:{doc:"ldexp function",args:{val:{type:$e,doc:"Value",refable:!0},exp:{type:$e,doc:"Exponent",refable:!0}}},struct_construct:{doc:"Construct struct. The `values` keys must match the struct's member names exactly.",args:{type:{type:de(),doc:"Struct type ID (must match a struct defined in ir.structs)",refType:"struct",isIdentifier:!0},values:{type:ue(),doc:"Struct fields — keys are member names, values are data refs or literals",optional:!0}}},struct_extract:gv,array_construct:{doc:"Construct a fixed-size typed array. Provide either `values` (elements list) OR `length`+`fill` (uniform fill). Element type is inferred from context or the `type` hint.",args:{values:{type:ln(ue()),doc:"Array elements (determines length)",refable:!0,isArray:!0,optional:!0},type:{type:de(),doc:"Explicit element type (e.g. struct ID for arrays of structs)",optional:!0,refType:"struct",isIdentifier:!0},length:{type:ue(),doc:"Array length (use with fill)",optional:!0,refable:!0},fill:{type:ue(),doc:"Fill value (use with length)",optional:!0,refable:!0}}},array_set:yv,array_extract:vv,array_length:{doc:"Array length",args:{array:{type:ue(),doc:"Array",refable:!0,literalTypes:["array"]}}},cmd_draw:Qy,cmd_dispatch:{doc:"Dispatch compute shader. All function inputs are serialized as flat floats for GPU marshalling (CppMetal backend). CPU-allowed builtins (time, delta_time, bpm, etc.) are auto-injected as extra shader args.",isExecutable:!0,cpuOnly:!0,args:{func:{type:de(),doc:"Shader function ID",requiredRef:!0,refType:"func",isIdentifier:!0},threads:{type:ue(),doc:"Thread counts per dimension (int3, or scalar for 1D). The runtime subdivides into workgroups internally.",optional:!0,refable:!0},args:{type:ue(),doc:"Shader arguments — keys must match function input IDs",optional:!0}}},cmd_resize_resource:{doc:"Resize a resource",isExecutable:!0,cpuOnly:!0,args:{resource:{type:de(),doc:"Resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},size:{type:$e,doc:"New size [w, h] or scalar",refable:!0,literalTypes:["float","int","float2"]},clear:{type:ue(),doc:"Optional clear value",optional:!0}}},cmd_sync_to_cpu:{doc:"Initiate async readback",isExecutable:!0,cpuOnly:!0,args:{resource:{type:de(),doc:"Resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0}}},cmd_wait_cpu_sync:{doc:"Wait for readback completion",isExecutable:!0,cpuOnly:!0,args:{resource:{type:de(),doc:"Resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0}}},cmd_copy_buffer:{doc:"Copy elements from one buffer to another, with optional offset and count.",isExecutable:!0,cpuOnly:!0,args:{src:{type:de(),doc:"Source buffer resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0},dst:{type:de(),doc:"Destination buffer resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},src_offset:{type:be,doc:"Starting element index in source",refable:!0,optional:!0},dst_offset:{type:be,doc:"Starting element index in destination",refable:!0,optional:!0},count:{type:be,doc:"Number of typed elements to copy",refable:!0,optional:!0}}},cmd_copy_texture:{doc:"Copy/blit pixels from one texture to another, with optional scaling and alpha blending.",isExecutable:!0,cpuOnly:!0,args:{src:{type:de(),doc:"Source texture resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0},dst:{type:de(),doc:"Destination texture resource ID",requiredRef:!0,refType:"resource",isIdentifier:!0,isPrimaryResource:!0},src_rect:{type:ct,doc:"Source region [x, y, w, h]",refable:!0,optional:!0},dst_rect:{type:ct,doc:"Destination region [x, y, w, h]",refable:!0,optional:!0},sample:{type:de(),doc:"'nearest' or 'bilinear' — enables scaling",optional:!0,literalTypes:["string"]},alpha:{type:le,doc:"Opacity for compositing (0..1)",refable:!0,optional:!0},normalized:{type:Bo,doc:"If true, rect coords are 0..1 relative to texture dims",optional:!0}}},var_set:wv,var_get:$v,builtin_get:xv,const_get:{doc:"Get a constant, such as the value of an enum by name",args:{name:{type:Ny,doc:"Name",refType:"const"}}},loop_index:{doc:"Get current loop iteration index. The `loop` arg must match the `tag` on the corresponding flow_loop node.",args:{loop:{type:de(),doc:"Loop tag (must match flow_loop's tag)",refable:!0,refType:"loop",isIdentifier:!0}}},flow_branch:{doc:"Branch based on condition",isExecutable:!0,args:{cond:{type:Bo,doc:"Condition",refable:!0},exec_true:{type:de(),doc:"Node ID for true",requiredRef:!0,optional:!0,refType:"exec"},exec_false:{type:de(),doc:"Node ID for false",requiredRef:!0,optional:!0,refType:"exec"}}},flow_loop:Av,call_func:{doc:"Call a function. Parameters are fully typed (float, int, bool, vectors, structs, arrays, matrices) — not just float. The `args` keys must match the target function's input IDs exactly.",isExecutable:!0,args:{func:{type:de(),doc:"Function ID (must match a function defined in ir.functions)",requiredRef:!0,refType:"func",isIdentifier:!0},args:{type:ue(),doc:"Function arguments — keys are input IDs, values are data refs or literals",optional:!0}}},func_return:{doc:"Return from function. Return type is determined by the parent function's outputs[0].type, not inferred from the value.",isExecutable:!0,args:{val:{type:ue(),doc:"Return value (must match function's declared output type)",optional:!0,refable:!0}}}},kv=Object.fromEntries(Object.entries(mt).map(([t,e])=>[t,Ty(e)])),vs=(t,e)=>{const n=["float","float2","float3","float4","int","int2","int3","int4"],r=[];return n.forEach(o=>{let a=o;e==="boolean_vec"&&(a=o==="float"?"boolean":o),r.push({inputs:{a:o,b:o},output:a})}),e==="same"&&["float2","float3","float4"].forEach(o=>{const a=o;r.push({inputs:{a,b:"float"},output:a}),r.push({inputs:{a:"float",b:a},output:a})}),r},Mo=(t,e)=>["float","float2","float3","float4","int","int2","int3","int4"].map(r=>{let o=r;return e==="boolean_vec"&&(o=r==="float"?"boolean":r),{inputs:{val:r},output:o}}),Sv=["math_add","math_sub","math_mul","math_div","math_mod","math_pow","math_min","math_max"],Ev=["math_gt","math_lt","math_ge","math_le","math_eq","math_neq"],zv=["math_sin","math_cos","math_tan","math_asin","math_acos","math_atan","math_sinh","math_cosh","math_tanh","math_sign","math_exp","math_log","math_sqrt","math_abs","math_ceil","math_floor","math_round","math_fract","math_trunc","math_flush_subnormal","math_mantissa","math_exponent","math_frexp_mantissa","math_frexp_exponent"],Ca={math_div_scalar:[{inputs:{val:"float",scalar:"float"},output:"float"},{inputs:{val:"float2",scalar:"float"},output:"float2"},{inputs:{val:"float3",scalar:"float"},output:"float3"},{inputs:{val:"float4",scalar:"float"},output:"float4"}],math_ldexp:[{inputs:{fract:"float",exp:"int"},output:"float"},{inputs:{fract:"float2",exp:"int"},output:"float2"},{inputs:{fract:"float3",exp:"int"},output:"float3"},{inputs:{fract:"float4",exp:"int"},output:"float4"},{inputs:{fract:"float2",exp:"float2"},output:"float2"},{inputs:{fract:"float3",exp:"float3"},output:"float3"},{inputs:{fract:"float4",exp:"float4"},output:"float4"}]};Sv.forEach(t=>Ca[t]=vs(t,"same"));Ev.forEach(t=>Ca[t]=vs(t,"boolean_vec"));zv.forEach(t=>Ca[t]=Mo(t,"same"));const ku={...Ca,math_mad:[{inputs:{a:"float",b:"float",c:"float"},output:"float"},{inputs:{a:"float2",b:"float2",c:"float2"},output:"float2"},{inputs:{a:"float3",b:"float3",c:"float3"},output:"float3"},{inputs:{a:"float3",b:"float3",c:"float3"},output:"float3"},{inputs:{a:"float4",b:"float4",c:"float4"},output:"float4"},{inputs:{a:"float2",b:"float",c:"float"},output:"float2"},{inputs:{a:"float3",b:"float",c:"float"},output:"float3"},{inputs:{a:"float4",b:"float",c:"float"},output:"float4"}],math_clamp:[{inputs:{val:"float",min:"float",max:"float"},output:"float"},{inputs:{val:"float2",min:"float2",max:"float2"},output:"float2"},{inputs:{val:"float3",min:"float3",max:"float3"},output:"float3"},{inputs:{val:"float4",min:"float4",max:"float4"},output:"float4"},{inputs:{val:"float2",min:"float",max:"float"},output:"float2"},{inputs:{val:"float3",min:"float",max:"float"},output:"float3"},{inputs:{val:"float4",min:"float",max:"float"},output:"float4"}],math_is_nan:Mo("math_is_nan","boolean_vec"),math_is_inf:Mo("math_is_inf","boolean_vec"),math_is_finite:Mo("math_is_finite","boolean_vec"),math_atan2:vs("math_atan2","same"),math_and:[{inputs:{a:"boolean",b:"boolean"},output:"boolean"}],math_or:[{inputs:{a:"boolean",b:"boolean"},output:"boolean"}],math_xor:[{inputs:{a:"boolean",b:"boolean"},output:"boolean"}],math_not:[{inputs:{val:"boolean"},output:"boolean"}],static_cast_int:[{inputs:{val:"float"},output:"int"},{inputs:{val:"boolean"},output:"int"}],static_cast_float:[{inputs:{val:"int"},output:"float"},{inputs:{val:"boolean"},output:"float"}],static_cast_bool:[{inputs:{val:"int"},output:"boolean"},{inputs:{val:"float"},output:"boolean"}],static_cast_int2:[{inputs:{val:"float2"},output:"int2"}],static_cast_int3:[{inputs:{val:"float3"},output:"int3"}],static_cast_int4:[{inputs:{val:"float4"},output:"int4"}],static_cast_float2:[{inputs:{val:"float2"},output:"float2"},{inputs:{val:"int2"},output:"float2"}],static_cast_float3:[{inputs:{val:"float3"},output:"float3"},{inputs:{val:"int3"},output:"float3"}],static_cast_float4:[{inputs:{val:"float4"},output:"float4"},{inputs:{val:"int4"},output:"float4"}],float:[{inputs:{val:"float"},output:"float"}],int:[{inputs:{val:"int"},output:"int"}],bool:[{inputs:{val:"boolean"},output:"boolean"}],float2:[{inputs:{x:"float",y:"float"},output:"float2"},{inputs:{"*":"any"},output:"float2"}],float3:[{inputs:{x:"float",y:"float",z:"float"},output:"float3"},{inputs:{"*":"any"},output:"float3"}],float4:[{inputs:{x:"float",y:"float",z:"float",w:"float"},output:"float4"},{inputs:{"*":"any"},output:"float4"}],int2:[{inputs:{x:"int",y:"int"},output:"int2"},{inputs:{"*":"any"},output:"int2"}],int3:[{inputs:{x:"int",y:"int",z:"int"},output:"int3"},{inputs:{"*":"any"},output:"int3"}],int4:[{inputs:{x:"int",y:"int",z:"int",w:"int"},output:"int4"},{inputs:{"*":"any"},output:"int4"}],vec_get_element:[{inputs:{vec:"float2",index:"int"},output:"float"},{inputs:{vec:"float3",index:"int"},output:"float"},{inputs:{vec:"float4",index:"int"},output:"float"},{inputs:{vec:"int2",index:"int"},output:"int"},{inputs:{vec:"int3",index:"int"},output:"int"},{inputs:{vec:"int4",index:"int"},output:"int"},{inputs:{vec:"float3x3",index:"int"},output:"float"},{inputs:{vec:"float4x4",index:"int"},output:"float"}],vec_set_element:[{inputs:{vec:"float2",index:"int",value:"float"},output:"any"},{inputs:{vec:"float3",index:"int",value:"float"},output:"any"},{inputs:{vec:"float4",index:"int",value:"float"},output:"any"},{inputs:{vec:"int2",index:"int",value:"int"},output:"any"},{inputs:{vec:"int3",index:"int",value:"int"},output:"any"},{inputs:{vec:"int4",index:"int",value:"int"},output:"any"},{inputs:{vec:"float3x3",index:"int",value:"float"},output:"any"},{inputs:{vec:"float4x4",index:"int",value:"float"},output:"any"}],vec_swizzle:[{inputs:{vec:"float2",channels:"string"},output:"any"},{inputs:{vec:"float3",channels:"string"},output:"any"},{inputs:{vec:"float4",channels:"string"},output:"any"},{inputs:{vec:"int2",channels:"string"},output:"any"},{inputs:{vec:"int3",channels:"string"},output:"any"},{inputs:{vec:"int4",channels:"string"},output:"any"}],vec_dot:[{inputs:{a:"float2",b:"float2"},output:"float"},{inputs:{a:"float3",b:"float3"},output:"float"},{inputs:{a:"float4",b:"float4"},output:"float"},{inputs:{a:"int2",b:"int2"},output:"int"},{inputs:{a:"int3",b:"int3"},output:"int"},{inputs:{a:"int4",b:"int4"},output:"int"}],vec_mix:[{inputs:{a:"float2",b:"float2",t:"float"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"float"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"float"},output:"float4"},{inputs:{a:"float2",b:"float2",t:"float2"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"float3"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"float4"},output:"float4"}],vec_length:[{inputs:{a:"float2"},output:"float"},{inputs:{a:"float3"},output:"float"},{inputs:{a:"float4"},output:"float"}],vec_normalize:[{inputs:{a:"float2"},output:"float2"},{inputs:{a:"float3"},output:"float3"},{inputs:{a:"float4"},output:"float4"}],literal:[{inputs:{val:"any"},output:"any"},{inputs:{val:"any",type:"string"},output:"any"}],mat_identity:[{inputs:{size:"int"},output:"float4x4"}],float4x4:[{inputs:{"*":"any"},output:"float4x4"}],float3x3:[{inputs:{"*":"any"},output:"float3x3"}],mat_transpose:[{inputs:{val:"any"},output:"any"}],mat_inverse:[{inputs:{val:"any"},output:"any"}],mat_extract:[{inputs:{mat:"any",col:"int",row:"int"},output:"float"}],mat_mul:[{inputs:{a:"float4x4",b:"float4x4"},output:"float4x4"},{inputs:{a:"float3x3",b:"float3x3"},output:"float3x3"},{inputs:{a:"float4x4",b:"float4"},output:"float4"},{inputs:{a:"float3x3",b:"float3"},output:"float3"},{inputs:{a:"float4",b:"float4x4"},output:"float4"},{inputs:{a:"float3",b:"float3x3"},output:"float3"}],math_step:[{inputs:{edge:"float",x:"float"},output:"float"},{inputs:{edge:"float2",x:"float2"},output:"float2"},{inputs:{edge:"float3",x:"float3"},output:"float3"},{inputs:{edge:"float4",x:"float4"},output:"float4"},{inputs:{edge:"float",x:"float2"},output:"float2"},{inputs:{edge:"float",x:"float3"},output:"float3"},{inputs:{edge:"float",x:"float4"},output:"float4"}],math_smoothstep:[{inputs:{edge0:"float",edge1:"float",x:"float"},output:"float"},{inputs:{edge0:"float2",edge1:"float2",x:"float2"},output:"float2"},{inputs:{edge0:"float3",edge1:"float3",x:"float3"},output:"float3"},{inputs:{edge0:"float4",edge1:"float4",x:"float4"},output:"float4"},{inputs:{edge0:"float",edge1:"float",x:"float2"},output:"float2"},{inputs:{edge0:"float",edge1:"float",x:"float3"},output:"float3"},{inputs:{edge0:"float",edge1:"float",x:"float4"},output:"float4"}],math_mix:[{inputs:{a:"float",b:"float",t:"float"},output:"float"},{inputs:{a:"float2",b:"float2",t:"float2"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"float3"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"float4"},output:"float4"},{inputs:{a:"float2",b:"float2",t:"float"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"float"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"float"},output:"float4"},{inputs:{a:"float",b:"float",t:"boolean"},output:"float"},{inputs:{a:"float2",b:"float2",t:"boolean"},output:"float2"},{inputs:{a:"float3",b:"float3",t:"boolean"},output:"float3"},{inputs:{a:"float4",b:"float4",t:"boolean"},output:"float4"}],color_mix:[{inputs:{a:"float4",b:"float4",t:"float"},output:"float4"},{inputs:{a:"float4",b:"float4"},output:"float4"}],math_pi:[{inputs:{},output:"float"}],math_e:[{inputs:{},output:"float"}],comment:[{inputs:{},output:"any"}],quat:[{inputs:{axis:"float3",angle:"float"},output:"float4"},{inputs:{x:"float",y:"float",z:"float",w:"float"},output:"float4"}],quat_identity:[{inputs:{},output:"float4"}],quat_mul:[{inputs:{a:"float4",b:"float4"},output:"float4"}],quat_slerp:[{inputs:{a:"float4",b:"float4",t:"float"},output:"float4"}],quat_rotate:[{inputs:{v:"float3",q:"float4"},output:"float3"}],quat_to_float4x4:[{inputs:{q:"float4"},output:"float4x4"}],struct_extract:[{inputs:{struct:"struct",field:"string"},output:"any"}],const_get:[{inputs:{name:"string"},output:"float"}],buffer_load:[{inputs:{buffer:"string",index:"int"},output:"any"}],buffer_store:[{inputs:{buffer:"string",index:"int",value:"any"},output:"any"}],var_set:[{inputs:{var:"string",val:"any"},output:"any"}],var_get:[{inputs:{var:"string"},output:"any"}],loop_index:[{inputs:{loop:"string"},output:"int"}],builtin_get:Object.entries(Au).map(([t,e])=>({inputs:{name:"string"},output:e})),struct_construct:[{inputs:{type:"string",values:"any"},output:"any"},{inputs:{type:"string","*":"any"},output:"any"},{inputs:{type:"string"},output:"any"}],array_construct:[{inputs:{values:"array"},output:"any"},{inputs:{values:"array",type:"string"},output:"any"},{inputs:{type:"string",length:"int",fill:"any"},output:"any"},{inputs:{type:"string",values:"array"},output:"any"},{inputs:{"*":"any"},output:"any"}],array_set:[{inputs:{array:"any",index:"int",value:"any"},output:"any"}],array_extract:[{inputs:{array:"any",index:"int"},output:"any"}],array_length:[{inputs:{array:"any"},output:"int"}],call_func:[{inputs:{func:"string"},output:"any"},{inputs:{func:"string",args:"any"},output:"any"},{inputs:{func:"string","*":"any"},output:"any"}],func_return:[{inputs:{val:"any"},output:"any"},{inputs:{},output:"any"}],flow_branch:[{inputs:{cond:"boolean"},output:"any"}],flow_loop:[{inputs:{start:"int",end:"int"},output:"any"},{inputs:{count:"int"},output:"any"}],resource_get_size:[{inputs:{resource:"string"},output:"float2"}],resource_get_format:[{inputs:{resource:"string"},output:"int"}],resource_is_bound:[{inputs:{resource:"string"},output:"boolean"}],texture_sample:[{inputs:{tex:"string",coords:"float2"},output:"float4"}],texture_load:[{inputs:{tex:"string",coords:"float2"},output:"float4"}],texture_store:[{inputs:{tex:"string",coords:"float2",value:"float4"},output:"any"}],cmd_dispatch:[{inputs:{func:"string"},output:"any"},{inputs:{func:"string",threads:"float3"},output:"any"},{inputs:{func:"string",threads:"int"},output:"any"},{inputs:{func:"string",threads:"any",args:"any"},output:"any"},{inputs:{func:"string",args:"any"},output:"any"},{inputs:{func:"string","*":"any"},output:"any"}],cmd_resize_resource:[{inputs:{resource:"string",size:"any"},output:"any"},{inputs:{resource:"string",size:"any",clear:"any"},output:"any"}],cmd_draw:[{inputs:{target:"string",vertex:"string",fragment:"string",count:"int",pipeline:"any"},output:"any"},{inputs:{target:"string",vertex:"string",fragment:"string",count:"int"},output:"any"}],cmd_sync_to_cpu:[{inputs:{resource:"string"},output:"any"}],cmd_wait_cpu_sync:[{inputs:{resource:"string"},output:"any"}],cmd_copy_buffer:[{inputs:{src:"string",dst:"string"},output:"any"},{inputs:{src:"string",dst:"string",src_offset:"int",dst_offset:"int",count:"int"},output:"any"},{inputs:{src:"string",dst:"string","*":"any"},output:"any"}],cmd_copy_texture:[{inputs:{src:"string",dst:"string"},output:"any"},{inputs:{src:"string",dst:"string",src_rect:"float4",dst_rect:"float4",sample:"string",alpha:"float",normalized:"boolean"},output:"any"},{inputs:{src:"string",dst:"string","*":"any"},output:"any"}],atomic_load:[{inputs:{counter:"string",index:"int"},output:"int"}],atomic_store:[{inputs:{counter:"string",index:"int",value:"int"},output:"any"}],atomic_add:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],atomic_sub:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],atomic_min:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],atomic_max:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],atomic_exchange:[{inputs:{counter:"string",index:"int",value:"int"},output:"int"}],prng_make:[{inputs:{seed:"float"},output:"any"},{inputs:{seed:"int"},output:"any"},{inputs:{},output:"any"}],prng_next:[{inputs:{prng:"string"},output:"any"},{inputs:{prng:"string",type:"string"},output:"any"},{inputs:{prng:"string",type:"string",min:"float",max:"float"},output:"any"}]};function Iv(t,e,n){const r=t.op,o=mt[r],a=[];if(!o)return{valid:!0,errors:[]};const i=t;for(const[d,m]of Object.entries(o.args)){const h=i[d];if(h===void 0){m.optional||a.push(`Missing required argument '${d}'`);continue}Ov(d,h,m,a,e,n)}const s=["op","id","metadata","type","comment","next","_next","exec_in","exec_out","exec_true","exec_false","exec_body","exec_completed","dataType","const_data"],l=Object.keys(o.args);for(const d of Object.keys(i))s.includes(d)||l.includes(d)||a.push(`Unknown argument(s) '${d}' in operation '${r}'.`);const f=["args","values"];for(const d of f)if(i[d]&&typeof i[d]=="object"&&!Array.isArray(i[d])){if(r==="call_func"||r==="cmd_dispatch"){const h=i.func,c=e?.functions?.find(u=>u.id===h);if(c&&i.args){const u=i.args;for(const[p,_]of Object.entries(u))c.inputs.some(g=>g.id===p)||a.push(`Unknown argument '${p}' in consolidated 'args' for function '${h}'`)}}else if(r==="struct_construct"){const h=i.type,c=e?.structs?.find(u=>u.id===h);if(c&&i.values){const u=i.values;for(const[p,_]of Object.entries(u))c.members.some(b=>b.name===p)||a.push(`Unknown member '${p}' in consolidated 'values' for struct '${h}'`)}}const m=i[d];for(const[h,c]of Object.entries(m))typeof c=="string"&&(e||n)&&(Pi(c,e,n)||a.push(`Argument '${h}' in '${d}' references unknown ID '${c}'`))}else i[d]&&Array.isArray(i[d])&&i[d].forEach((h,c)=>{typeof h=="string"&&(e||n)&&(Pi(h,e,n)||a.push(`Element at index ${c} in '${d}' references unknown ID '${h}'`))});return{valid:a.length===0,errors:a}}function Ov(t,e,n,r,o,a){const i=typeof e=="string",s=Array.isArray(e),l=(d,m="")=>typeof d=="string"&&(n.refable||n.requiredRef)?(o||a)&&!Pi(d,o,a)?(r.push(`Argument '${t}${m}' references unknown ID '${d}'`),!1):!0:!1,f=(d,m="")=>{if(n.requiredRef)return r.push(`Argument '${t}${m}' must be a reference (string), but got ${typeof d}`),!1;if(!n.literalTypes){if(!n.refable&&typeof d=="string"){const c=_=>_ instanceof bs||_ instanceof gu?c(_.unwrap()):_,u=c(n.type);u instanceof hu||u instanceof Jr||r.push(`Argument '${t}${m}' does not support references, but got string '${d}'`)}return!0}const h=Hl(d);return m!==""&&n.literalTypes.some(u=>u.startsWith("float")&&u.length>5)&&(h==="float"||h==="int")||Zl(h,n.literalTypes)?!0:(r.push(`Argument '${t}${m}' has invalid literal type: expected one of [${n.literalTypes.join(", ")}], but got ${h}`),!1)};if(n.requiredRef){n.isArray?s?e.forEach((d,m)=>{l(d,`[${m}]`)||typeof d!="string"&&r.push(`Element at index ${m} in '${t}' must be a reference (string), but got ${typeof d}`)}):r.push(`Argument '${t}' must be an array of references, but got ${typeof e}`):i?l(e):r.push(`Argument '${t}' must be a reference (string), but got ${typeof e}`);return}if(i&&n.refable){l(e);return}if(n.literalTypes){const d=Hl(e);if(Zl(d,n.literalTypes))return}s?e.forEach((d,m)=>{l(d,`[${m}]`)||f(d,`[${m}]`)}):f(e)}function Zl(t,e){return!!(e.includes(t)||t==="int"&&e.includes("float"))}function Hl(t){return typeof t=="number"?Number.isInteger(t)?"int":"float":typeof t=="boolean"?"bool":typeof t=="string"?"string":Array.isArray(t)?t.length===2&&t.every(e=>typeof e=="number")?"float2":t.length===3&&t.every(e=>typeof e=="number")?"float3":t.length===4&&t.every(e=>typeof e=="number")?"float4":t.length===9&&t.every(e=>typeof e=="number")?"float3x3":t.length===16&&t.every(e=>typeof e=="number")?"float4x4":"array":typeof t=="object"&&t!==null?"struct":"unknown"}function Pi(t,e,n){const r=t.includes(".")?t.substring(0,t.indexOf(".")):t;return!!(e?.resources?.some(o=>o.id===r)||e?.inputs?.some(o=>o.id===r)||e?.tuningParams?.some(o=>o.id===r)||n?.localVars?.some(o=>o.id===r)||n?.nodes?.some(o=>o.id===r)||e?.functions?.some(o=>o.id===r)||r==="screen"||n?.inputs?.some(o=>o.id===r))}function Ut(t,e){const n=[],r=new Set(t.nodes.map(h=>h.id)),o=new Set(t.inputs.map(h=>h.id)),a=new Set(t.localVars.map(h=>h.id)),i=new Set(e?.resources?.map(h=>h.id)||[]),s=new Set(e?.inputs?.map(h=>h.id)||[]),l=h=>{if(typeof h!="string"||h.length===0)return!1;const c=h.includes(".")?h.substring(0,h.indexOf(".")):h;return r.has(c)||o.has(c)||a.has(c)||i.has(c)||s.has(c)},f=h=>typeof h=="string"&&h.length>0&&r.has(h),d=h=>mt[h]?.isExecutable??!1;for(const h of t.nodes){const c=mt[h.op];if(c){for(const[p,_]of Object.entries(c.args)){const b=h[p]??(h.args?h.args[p]:void 0);if(b!==void 0&&(_.refable||_.requiredRef)){const g=_.refType||"data";if(g==="exec")f(b)&&d(h.op)&&n.push({from:h.id,portOut:p,to:b,portIn:"exec_in",type:"execution"});else if(g==="data"||g==="var"||g==="func"||g==="resource"){const y=(v,$="")=>{if(l(v)){const k=typeof v=="string"&&v.includes(".")?v.substring(0,v.indexOf(".")):v;n.push({from:k,portOut:"val",to:h.id,portIn:p+$,type:"data"})}};Array.isArray(b)?b.forEach((v,$)=>y(v,`[${$}]`)):y(b)}}}if(h.args!==void 0||h.values!==void 0){const p=new Set(Object.keys(c.args)),_=(b,g)=>{if(b!=null){if(typeof b=="string"){if(l(b)){const y=b.includes(".")?b.substring(0,b.indexOf(".")):b;n.push({from:y,portOut:"val",to:h.id,portIn:g,type:"data"})}}else if(Array.isArray(b))b.forEach((y,v)=>_(y,`${g}[${v}]`));else if(typeof b=="object")for(const[y,v]of Object.entries(b))g===""&&(vu.has(y)||y.startsWith("exec_")||y==="next"||y==="_next")||g===""&&p.has(y)&&y!=="args"&&y!=="values"||_(v,g===""?y:`${g}.${y}`)}};_(h,"")}}if(f(h.exec_in)){const p=t.nodes.find(b=>b.id===h.exec_in);p&&d(p.op)&&(n.find(g=>g.to===h.id&&g.portIn==="exec_in"&&g.type==="execution")||n.push({from:h.exec_in,portOut:"exec_out",to:h.id,portIn:"exec_in",type:"execution"}))}const u=h.next||h._next||h.exec_out;f(u)&&n.push({from:h.id,portOut:"exec_out",to:u,portIn:"exec_in",type:"execution"})}const m=new Set;return n.filter(h=>{const c=`${h.from}:${h.portOut}:${h.to}:${h.portIn}:${h.type}`;return m.has(c)?!1:(m.add(c),!0)})}const Cv=t=>{const e=[],n=new Set([...(t.resources||[]).map(r=>r.id),...(t.inputs||[]).map(r=>r.id),...(t.tuningParams||[]).map(r=>r.id)]);return t.functions.some(r=>r.id===t.entryPoint)||e.push({message:`Entry point '${t.entryPoint}' not found in functions`,severity:"error"}),Rv(t,e),Tv(t,e),Lv(t,e),t.functions.forEach(r=>{Dv(r,t,n,e)}),e},No=(t,e)=>ur(t,e).inferredTypes,ur=(t,e)=>{const n=new Set([...(e.resources||[]).map(l=>l.id),...(e.inputs||[]).map(l=>l.id),...(e.tuningParams||[]).map(l=>l.id)]),r=new Map,o=new Set,a=[],i=Ut(t,e);t.nodes.forEach(l=>{tr(l.id,t,e,r,n,a,i,o)});const s=new Set;for(const l of t.nodes)l.op==="resource_get_size"&&typeof l.resource=="string"&&s.add(l.resource);return{inferredTypes:r,usedBuiltins:o,usedResourceSizes:s}},sa=t=>Cv(t),Kl=(t,e,n,r,o)=>{const a=["x","y","z","w","r","g","b","a"],i=t==="int2"||t==="int3"||t==="int4";if(!i&&!(t==="float2"||t==="float3"||t==="float4"))return o.push({nodeId:n,functionId:r,message:`Cannot swizzle non-vector type '${t}'`,severity:"error"}),"any";let l=0;if(t==="float2"||t==="int2"?l=2:t==="float3"||t==="int3"?l=3:(t==="float4"||t==="int4")&&(l=4),e.length<1||e.length>4)return o.push({nodeId:n,functionId:r,message:`Invalid swizzle mask length '${e}'`,severity:"error"}),"any";for(const m of e){const h=a.indexOf(m);if(h===-1)return o.push({nodeId:n,functionId:r,message:`Invalid swizzle component '${m}'`,severity:"error"}),"any";if(h%4>=l)return o.push({nodeId:n,functionId:r,message:`Swizzle component '${m}' out of bounds for ${t}`,severity:"error"}),"any"}const f=i?"int":"float",d=i?"int":"float";return e.length===1?f:`${d}${e.length}`},tr=(t,e,n,r,o,a,i,s=new Set)=>{const l=e.id;if(r.has(t))return r.get(t);const f=e.nodes.find(k=>k.id===t);if(!f)return"any";r.set(t,"any");const d=ku[f.op];if(!d)return a.push({nodeId:t,functionId:l,message:`Unknown op '${f.op}'`,severity:"error"}),r.set(t,"any"),"any";const m={};i.filter(k=>k.to===t&&k.type==="data").forEach(k=>{let A=tr(k.from,e,n,r,o,a,i,s);const z=k.portIn,O=f[z];if(typeof O=="string"&&O.includes(".")){const L=O.indexOf("."),U=O.substring(L+1);if(U.length>0){if(A==="any"){const S=O.substring(0,L),T=e.localVars?.find(re=>re.id===S),w=e.inputs?.find(re=>re.id===S),F=n.inputs?.find(re=>re.id===S)??n.tuningParams?.find(re=>re.id===S);T?A=T.type:w?A=w.type:F&&(A=F.type)}A=Kl(A,U,t,l,a)}}z.startsWith("args.")?m[z.substring(5)]=A:z.startsWith("values.")?m[z.substring(7)]=A:z.startsWith("values[")?m.values="array":m[z]=A});const c=new Set(["id","op","metadata","exec_in","exec_out","exec_true","exec_false","exec_body","exec_completed","_next","next","args","values","comment","id_var","id_val"]),u=(k,A)=>{if(!m[k]&&A!==void 0){if(Array.isArray(A))A.length===2?m[k]="float2":A.length===3?m[k]="float3":A.length===4?m[k]="float4":A.length===9?m[k]="float3x3":A.length===16?m[k]="float4x4":m[k]="array";else if(typeof A=="number")m[k]="float";else if(typeof A=="boolean")m[k]="boolean";else if(typeof A=="string"){const O=mt[f.op]?.args[k]?.isIdentifier??!1;let L=A,U;const S=A.indexOf(".");S!==-1&&!O&&(L=A.substring(0,S),U=A.substring(S+1));const T=e.nodes.find(J=>J.id===L),w=e.inputs.find(J=>J.id===L),F=e.localVars.find(J=>J.id===L),re=n.inputs?.find(J=>J.id===L)??n.tuningParams?.find(J=>J.id===L);let D;if(T&&!O?(T.op==="comment"&&a.push({nodeId:t,functionId:l,message:`Node '${t}' cannot reference comment node '${L}'`,severity:"error"}),D=tr(L,e,n,r,o,a,i)):w&&!O?D=w.type:F&&!O?D=F.type:re&&!O&&(D=re.type),D!==void 0)if(U){const J=Kl(D,U,t,l,a);m[k]=J}else m[k]=D;else m[k]="string"}}};Object.keys(f).forEach(k=>{c.has(k)||u(k,f[k])}),f.args&&typeof f.args=="object"&&!Array.isArray(f.args)&&Object.entries(f.args).forEach(([k,A])=>u(k,A)),f.values&&typeof f.values=="object"&&(Array.isArray(f.values)?m.values="array":Object.entries(f.values).forEach(([k,A])=>u(k,A)));const p=kv[f.op];if(p){const k={};Object.keys(f).forEach(z=>{c.has(z)||(k[z]=f[z])});const A=p.partial().safeParse(k);A.success||A.error.issues.forEach(z=>{a.push({nodeId:t,functionId:l,message:`Schema Error in '${f.op}': ${z.path.join(".")}: ${z.message}`,severity:"error"})})}let _;const b=(k,A)=>{let z=!0;const O="*"in k.inputs;for(const[L,U]of Object.entries(k.inputs)){if(L==="*")continue;let S=m[L];if(S==="bool"&&(S="boolean"),U==="struct"&&S!=="any"&&n.structs?.some(w=>w.id===S)&&(S="struct"),!S){z=!1;break}if(U!=="any"&&S!=="any"&&U!==S){if(U==="float"&&S==="int"||U==="int"&&S==="float"||A&&(U==="float2"&&S==="int2"||U==="int2"&&S==="float2"||U==="float3"&&S==="int3"||U==="int3"&&S==="float3"||U==="float4"&&S==="int4"||U==="int4"&&S==="float4"))continue;z=!1;break}}return z?!(Object.keys(m).filter(U=>!(U in k.inputs)&&!O).length>0):!1};for(const k of d)if(b(k,!1)){_=k;break}if(!_){for(const k of d)if(b(k,!0)){_=k;break}}if(_&&new Set(["math_add","math_sub","math_mul","math_div","math_mod","math_pow","math_min","math_max","math_atan2","math_gt","math_lt","math_ge","math_le","math_eq","math_neq"]).has(f.op)){const k=m.a,A=m.b;if(k&&A&&k!=="any"&&A!=="any"){const z=L=>/^int[234]$/.test(L),O=L=>/^float[234]$/.test(L);if(z(k)&&O(A)||O(k)&&z(A)){const L=k.replace(/^(float|int)/,"");a.push({nodeId:t,functionId:l,message:`Type mismatch in '${f.op}': cannot implicitly convert between '${k}' and '${A}'. Use static_cast_float${L} or static_cast_int${L}.`,severity:"error"})}}}if(_){if(f.op==="var_set"&&m.val&&m.val!=="any")return r.set(t,m.val),m.val;if(f.op==="builtin_get"){const z=f.name;s.add(z);const O=Au[z];if(O)return r.set(t,O),O}if(f.op==="literal"){const z=f.type;if(z){if(["float","int","boolean","bool","float2","float3","float4","int2","int3","int4","float3x3","float4x4"].includes(z)){const U=z==="bool"?"boolean":z;return r.set(t,U),U}a.push({nodeId:t,functionId:l,message:`Invalid explicit type '${z}' on literal node`,severity:"error"})}const O=f.val;if(typeof O=="number")return r.set(t,"float"),"float";if(typeof O=="boolean")return r.set(t,"boolean"),"boolean"}if(f.op==="mat_identity"){const O=f.size===3?"float3x3":"float4x4";return r.set(t,O),O}if(f.op==="mat_transpose"||f.op==="mat_inverse"){const z=m.val;if(z&&z!=="any")return r.set(t,z),z}if(f.op==="struct_construct"){const z=f.type;if(z)return r.set(t,z),z}if(f.op==="array_construct"){let z=f.type;if(!z){const S=m.fill;if(S&&S!=="any")z=S;else if(Array.isArray(f.values)&&f.values.length>0){const T=f.values[0];typeof T=="string"&&e.nodes.some(w=>w.id===T)?z=tr(T,e,n,r,o,a,i):typeof T=="number"?z="float":typeof T=="boolean"&&(z="boolean")}}z||(z="float");let O=0;Array.isArray(f.values)?O=f.values.length:typeof f.length=="number"&&(O=f.length);let L=z;z==="float"?L="float":z==="int"?L="int":(z==="bool"||z==="boolean")&&(L="bool");const U=`array<${L}, ${O}>`;return r.set(t,U),U}if(f.op==="var_get"){const z=f.var,O=e.localVars.find(w=>w.id===z),L=n.inputs?.find(w=>w.id===z)??n.tuningParams?.find(w=>w.id===z),U=e.inputs.find(w=>w.id===z),T=O?.type||U?.type||L?.type||"float";return r.set(t,T),T}if(f.op==="buffer_load"){const z=f.buffer,L=n.resources?.find(S=>S.id===z)?.dataType||"float";let U=L;return L==="float"?U="float":L==="int"?U="int":L==="bool"||L==="boolean"?U="boolean":L==="float2"?U="float2":L==="float3"?U="float3":L==="float4"?U="float4":L==="float3x3"?U="float3x3":L==="float4x4"&&(U="float4x4"),r.set(t,U),U}if(f.op==="atomic_load"||f.op==="atomic_add"||f.op==="atomic_sub"||f.op==="atomic_min"||f.op==="atomic_max"||f.op==="atomic_exchange")return r.set(t,"int"),"int";if(f.op==="prng_make")return r.set(t,"prng"),"prng";if(f.op==="prng_next"){const z=f.type||"float",O=["float","int","float2","float3","float4","int2","int3","int4"];return O.includes(z)?(r.set(t,z),z):(a.push({nodeId:t,functionId:l,message:`Invalid prng_next output type '${z}'. Valid: ${O.join(", ")}`,severity:"error"}),r.set(t,"float"),"float")}if(f.op==="array_extract"){const z=m.array;if(!z||z==="any")return r.set(t,"any"),"any";if(z.startsWith("array<")){const O=z.match(/^array<(\w+)(?:,\s*\d+)?>/);if(O){const L=O[1];return L==="float"?(r.set(t,"float"),"float"):L==="int"?(r.set(t,"int"),"int"):L==="bool"||L==="boolean"?(r.set(t,"boolean"),"boolean"):(r.set(t,L),L)}}return z==="float2"||z==="float3"||z==="float4"?(r.set(t,"float"),"float"):z==="int2"||z==="int3"||z==="int4"?(r.set(t,"int"),"int"):(r.set(t,"any"),"any")}if(f.op==="struct_extract"){const z=m.struct;if(!z||z==="any")return r.set(t,"any"),"any";const O=n.structs?.find(L=>L.id===z);if(O){const L=f.field,U=O.members.find(S=>S.name===L);if(U){let S=U.type;return S==="float"?S="float":S==="int"&&(S="int"),r.set(t,S),S}}return r.set(t,"any"),"any"}if(f.op==="vec_swizzle"){const z=m.vec,O=f.channels;if(typeof O!="string")return a.push({nodeId:t,functionId:l,message:"Swizzle mask must be a string literal",severity:"error"}),r.set(t,"any"),"any";const L=["x","y","z","w","r","g","b","a"];(O.length<1||O.length>4)&&a.push({nodeId:t,functionId:l,message:`Invalid swizzle mask length '${O}'`,severity:"error"});let U=0;const S=z==="int2"||z==="int3"||z==="int4";if(z==="float2"||z==="int2"?U=2:z==="float3"||z==="int3"?U=3:(z==="float4"||z==="int4")&&(U=4),U>0){for(const re of O){const D=L.indexOf(re);D===-1?a.push({nodeId:t,functionId:l,message:`Invalid swizzle component '${re}'`,severity:"error"}):D%4>=U&&a.push({nodeId:t,functionId:l,message:`Swizzle component '${re}' out of bounds for ${z}`,severity:"error"})}const T=S?"int":"float",w=S?"int":"float",F=O.length===1?T:`${w}${O.length}`;return r.set(t,F),F}}const A={float2:{dim:2,scalarType:"float",outType:"float2"},float3:{dim:3,scalarType:"float",outType:"float3"},float4:{dim:4,scalarType:"float",outType:"float4"},int2:{dim:2,scalarType:"int",outType:"int2"},int3:{dim:3,scalarType:"int",outType:"int3"},int4:{dim:4,scalarType:"int",outType:"int4"}}[f.op];if(A&&_.inputs["*"]!==void 0){const z=["x","y","z","w"],O=[],L=/^[xyzw]+$/;for(const S of Object.keys(m)){if(!L.test(S)){a.push({nodeId:t,functionId:l,message:`Invalid component-group key '${S}' for ${f.op}`,severity:"error"});continue}const T=z.indexOf(S[0]);if(T===-1){a.push({nodeId:t,functionId:l,message:`Invalid component '${S[0]}' in key '${S}'`,severity:"error"});continue}let w=!0;for(let F=0;F<S.length;F++)if(z[T+F]!==S[F]){w=!1;break}if(!w){a.push({nodeId:t,functionId:l,message:`Component-group key '${S}' must be contiguous (e.g. 'xy', 'xyz')`,severity:"error"});continue}O.push({key:S,startIdx:T,count:S.length})}O.sort((S,T)=>S.startIdx-T.startIdx);let U=0;for(const S of O)S.startIdx!==U&&a.push({nodeId:t,functionId:l,message:`Component-group gap or overlap: expected component at index ${U}, got '${S.key}' at index ${S.startIdx}`,severity:"error"}),U=S.startIdx+S.count;U!==A.dim&&a.push({nodeId:t,functionId:l,message:`Component groups cover ${U} components, but ${f.op} requires ${A.dim}`,severity:"error"});for(const S of O){const T=m[S.key];if(!T||T==="any"||T==="float"||T==="int"||T==="boolean")continue;const re={float2:2,float3:3,float4:4,int2:2,int3:3,int4:4}[T];re!==void 0&&re!==S.count&&a.push({nodeId:t,functionId:l,message:`Component-group '${S.key}' expects ${S.count} components, but got ${T} (${re})`,severity:"error"})}return r.set(t,A.outType),A.outType}return r.set(t,_.output),_.output}const y=d[0],v="*"in y.inputs,$=Object.keys(m).filter(k=>!(k in y.inputs)&&!v);$.length>0&&a.push({nodeId:t,functionId:l,message:`Unknown argument(s) '${$.join(", ")}' for op '${f.op}'`,severity:"error"});for(const k of Object.keys(y.inputs))k!=="*"&&(m[k]||a.push({nodeId:t,functionId:l,message:`Missing required argument '${k}' for op '${f.op}'`,severity:"error"}));for(const[k,A]of Object.entries(y.inputs)){const z=m[k];if(z&&A!=="any"&&z!=="any"&&A!==z){if(A==="float"&&z==="int"||A==="int"&&z==="float"||A==="float2"&&z==="int2"||A==="int2"&&z==="float2"||A==="float3"&&z==="int3"||A==="int3"&&z==="float3"||A==="float4"&&z==="int4"||A==="int4"&&z==="float4")continue;a.push({nodeId:t,functionId:l,message:`Type Mismatch at '${k}': expected ${A}, got ${z}`,severity:"error"})}}return r.set(t,"any"),"any"},Yt=(t,e,n,r,o)=>{if(!(Ff.includes(t)||e.structs?.some(i=>i.id===t))){if(t.startsWith("array<")){const i=t.match(/^array<([^,]+),\s*(\d+)?>/);if(!i){n.push({functionId:o,message:`${r}: Invalid array syntax '${t}'. Expected 'array<Type, N>'.`,severity:"error"});return}const s=i[1].trim();Yt(s,e,n,`${r} (array element)`,o);return}if(t.endsWith("[]")){const i=t.substring(0,t.length-2).trim();Yt(i,e,n,`${r} (array element)`,o);return}n.push({functionId:o,message:`${r}: Invalid data type '${t}'. Must be a primitive or defined struct.`,severity:"error"})}},Rv=(t,e)=>{(t.resources||[]).forEach(n=>{if(n.type==="texture2d"){const r=n.format;r?Object.values(Ke).includes(r)||e.push({message:`Texture resource '${n.id}' has invalid format '${r}'`,severity:"error"}):e.push({message:`Texture resource '${n.id}' missing required 'format' property`,severity:"error"});const o=n.sampler;o&&(o.wrap&&!["clamp","repeat","mirror"].includes(o.wrap)&&e.push({message:`Texture resource '${n.id}' has invalid wrap mode '${o.wrap}'`,severity:"error"}),o.filter&&!["nearest","linear"].includes(o.filter)&&e.push({message:`Texture resource '${n.id}' has invalid filter mode '${o.filter}'`,severity:"error"}))}else n.type==="buffer"?n.dataType?Yt(n.dataType,t,e,`Buffer resource '${n.id}'`):e.push({message:`Buffer resource '${n.id}' missing required 'dataType' property`,severity:"error"}):n.type==="atomic_counter"&&n.dataType&&n.dataType!=="int"&&e.push({message:`Atomic counter resource '${n.id}' must have dataType 'int', got '${n.dataType}'`,severity:"error"})})},Tv=(t,e)=>{[...t.inputs||[],...t.tuningParams||[]].forEach(n=>{Yt(n.type,t,e,`Input '${n.id}'`);const r=n.default;if(r!==void 0){let o=typeof r;Array.isArray(r)?r.length===2?o="float2":r.length===3?o="float3":r.length===4?o="float4":r.length===9?o="float3x3":r.length===16?o="float4x4":o="array":o==="number"?o="float":o==="boolean"&&(o="bool");const a=n.type.toLowerCase(),i=d=>d==="boolean"?"bool":d,s=i(a),l=i(o);s===l||s==="float"&&l==="int"||s==="int"&&l==="float"||e.push({message:`Input '${n.id}' default value type mismatch: expected ${n.type}, got ${typeof r=="string"?`"${r}"`:JSON.stringify(r)} (${o})`,severity:"error"})}})},Lv=(t,e)=>{const n=new Set,r=new Set,o=a=>{if(r.has(a)){e.push({message:`Recursive struct definition detected: Cycle involving '${a}'`,severity:"error"});return}if(n.has(a))return;n.add(a),r.add(a);const i=(t.structs||[]).find(s=>s.id===a);if(i)for(const s of i.members)Yt(s.type,t,e,`Struct '${a}' member '${s.name}'`),(t.structs||[]).some(l=>l.id===s.type)&&o(s.type);r.delete(a)};t.structs?.forEach(a=>o(a.id))},Su=(t,e,n=new Set)=>{if(n.has(t))return new Set;n.add(t);const r=e.find(a=>a.id===t);if(!r)return new Set;const o=new Set;for(const a of r.nodes)a.op==="resource_get_size"&&typeof a.resource=="string"&&o.add(a.resource),(a.op==="texture_load"||a.op==="texture_sample"||a.op==="texture_store")&&typeof a.tex=="string"&&o.add(a.tex),(a.op==="buffer_load"||a.op==="buffer_store")&&typeof a.buffer=="string"&&o.add(a.buffer),a.op==="call_func"&&typeof a.func=="string"&&Su(a.func,e,n).forEach(i=>o.add(i));return o},Dv=(t,e,n,r)=>{if(!t||!Array.isArray(t.nodes)){r.push({functionId:t?.id||"unknown",message:"Function definition missing or invalid: nodes array is required",severity:"error"});return}t.workgroupSize!==void 0&&((!Array.isArray(t.workgroupSize)||t.workgroupSize.length!==3||!t.workgroupSize.every(l=>typeof l=="number"&&Number.isInteger(l)&&l>0))&&r.push({functionId:t.id,message:"workgroupSize must be an array of 3 positive integers",severity:"error"}),t.type!=="shader"&&r.push({functionId:t.id,message:"workgroupSize is only meaningful for shader functions",severity:"warning"})),t.inputs.forEach(l=>Yt(l.type,e,r,`Function '${t.id}' input '${l.id}'`,t.id)),t.outputs.forEach(l=>Yt(l.type,e,r,`Function '${t.id}' output '${l.id}'`,t.id)),t.localVars.forEach(l=>Yt(l.type,e,r,`Function '${t.id}' variable '${l.id}'`,t.id));const o=Ut(t,e),a=new Set(t.nodes.map(l=>l.id)),i=new Set([...a,...t.inputs.map(l=>l.id),...t.localVars.map(l=>l.id),...(e.inputs||[]).map(l=>l.id),...(e.tuningParams||[]).map(l=>l.id),...(e.resources||[]).map(l=>l.id)]);o.forEach(l=>{i.has(l.from)||r.push({functionId:t.id,message:`Edge source '${l.from}' not found`,severity:"error"}),a.has(l.to)||r.push({functionId:t.id,message:`Edge target '${l.to}' not found`,severity:"error"})});const s=new Map;t.nodes.forEach(l=>{l.id.includes(".")&&r.push({nodeId:l.id,functionId:t.id,message:`Node ID '${l.id}' contains '.', which conflicts with inline swizzle syntax`,severity:"error"})}),t.nodes.forEach(l=>{const f=Iv(l,e,t);if(f.valid||f.errors.forEach(m=>{r.push({nodeId:l.id,functionId:t.id,message:m,severity:"error"})}),l.op==="var_get"||l.op==="var_set"){const m=l.var,h=t.localVars.some(p=>p.id===m),c=(e.inputs||[]).some(p=>p.id===m)||(e.tuningParams||[]).some(p=>p.id===m),u=t.inputs.some(p=>p.id===m);!h&&!c&&!u&&r.push({nodeId:l.id,functionId:t.id,message:`Variable '${m}' is not defined in local scope, function arguments, or as a global input`,severity:"error"})}if(tr(l.id,t,e,s,n,r,o),l.op==="builtin_get"&&t.type==="cpu"){const m=l.name;bn.includes(m)||r.push({nodeId:l.id,functionId:t.id,message:`GPU Built-in '${m}' is not available in CPU context`,severity:"error"})}if(l.op==="const_get"){const m=l.name;if(!m)return;m.startsWith("TextureFormat.")?m.split(".")[1]in Ke||r.push({nodeId:l.id,functionId:t.id,message:`Invalid TextureFormat constant '${m}'`,severity:"error"}):m&&!m.includes(".")&&r.push({nodeId:l.id,functionId:t.id,message:`Invalid constant name '${m}'`,severity:"error"})}t.type!=="cpu"&&mt[l.op]?.cpuOnly&&r.push({nodeId:l.id,functionId:t.id,message:`Operation '${l.op}' is not allowed in shader functions (must be executed in CPU context)`,severity:"error"});const d=mt[l.op];if(d){let m;for(const[h,c]of Object.entries(d.args))if(c.isPrimaryResource){m=l[h],m===void 0&&l.args&&(m=l.args[h]);break}if(typeof m=="string"&&!n.has(m))r.push({nodeId:l.id,functionId:t.id,message:`Referenced resource '${m}' not found`,severity:"error"});else if(typeof m=="string"){const h=e.resources?.find(u=>u.id===m),c=l.index;if(h&&typeof c=="number"&&(c<0&&r.push({nodeId:l.id,functionId:t.id,message:`Invalid Negative Index: ${c}`,severity:"error"}),h.size.mode==="fixed")){const u=h.size.value;typeof u=="number"&&c>=u&&r.push({nodeId:l.id,functionId:t.id,message:`Static OOB Access: Index ${c} >= Size ${u}`,severity:"error"})}if(l.op.startsWith("atomic_")&&h&&h.type!=="atomic_counter"&&r.push({nodeId:l.id,functionId:t.id,message:`Atomic operation '${l.op}' requires an atomic_counter resource, but '${m}' is a '${h.type}'`,severity:"error"}),l.op==="buffer_store"&&h){const p=(g=>Mh.includes(g)?g:"any")(h.dataType||"float");let _="any";const b=o.find(g=>g.to===l.id&&g.portIn==="value");if(b)_=tr(b.from,t,e,s,n,r,o);else if(l.value!==void 0){const g=l.value;typeof g=="number"?_="float":typeof g=="boolean"?_="boolean":Array.isArray(g)&&(g.length===2?_="float2":g.length===3?_="float3":g.length===4?_="float4":g.length===9?_="float3x3":g.length===16&&(_="float4x4"))}_!=="any"&&p!=="any"&&_!==p&&r.push({nodeId:l.id,functionId:t.id,message:`Type Mismatch in buffer_store: Buffer '${m}' expects '${p}', got '${_}'`,severity:"error"})}}}}),t.type==="cpu"&&t.nodes.forEach(l=>{if(l.op==="cmd_draw"){const f=l.target,d=l.vertex,m=l.fragment;if(!f)return;const h=[d,m].filter(Boolean),c=new Set;for(const u of h)Su(u,e.functions).forEach(p=>c.add(p));c.has(f)&&r.push({nodeId:l.id,functionId:t.id,message:`Render target '${f}' cannot be accessed as a resource in vertex/fragment shaders. Use 'builtin_get output_size' for dimensions.`,severity:"error"})}})};var Pv=Object.defineProperty,Bv=Object.getOwnPropertyDescriptor,wr=(t,e,n,r)=>{for(var o=r>1?void 0:r?Bv(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&Pv(e,n,o),o};class jn{constructor(){this.lastError=null,this.validationErrors=[],this.currentArtifacts=null,this.nextId=0,this.pending=new Map,fo(this),this.worker=new Worker(new URL(""+new URL("compilation-worker-BLW-G5tb.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=e=>{this.handleMessage(e.data)}}async compile(e){this.setLogicValidationErrors([]),this.setLastError(null);const n=this.nextId++;return new Promise(r=>{this.pending.set(n,{resolve:r}),this.worker.postMessage({type:"compile",id:n,ir:Ye(e)})})}swap(e){this.currentArtifacts=e}handleMessage(e){if(e.type==="compiled"){const n=this.pending.get(e.id);n&&(this.pending.delete(e.id),n.resolve(e.artifacts))}else if(e.type==="compile-error"){const n=this.pending.get(e.id);n&&(this.pending.delete(e.id),this.setLogicValidationErrors(e.errors),this.setLastError(e.message),n.resolve(null))}}setLogicValidationErrors(e){this.validationErrors=e}setLastError(e){this.lastError=e}dispose(){this.worker.terminate()}}wr([_e],jn.prototype,"lastError",2);wr([_e],jn.prototype,"validationErrors",2);wr([_e],jn.prototype,"currentArtifacts",2);wr([Oe],jn.prototype,"swap",1);wr([Oe],jn.prototype,"setLogicValidationErrors",1);wr([Oe],jn.prototype,"setLastError",1);var Mv=Object.defineProperty,Nv=Object.getOwnPropertyDescriptor,Ct=(t,e,n,r)=>{for(var o=r>1?void 0:r?Nv(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&Mv(e,n,o),o},He=(t=>(t.Texture="texture",t.Bool="bool",t.Int="int",t.Float="float",t.Float2="float2",t.Float3="float3",t.Float4="float4",t))(He||{});class yt{constructor(){this.transportState="stopped",this.fps=0,this.frameCount=0,this.inputEntries=new Map,this.textureInputIds=[],this.frameId=null,this.canvasTransferred=!1,this.inputSources=new Map,this.compiledResolve=null,this.screenshotResolve=null,fo(this),this.worker=new Worker(new URL(""+new URL("runtime-worker-B2RBR8Rc.js",import.meta.url).href,import.meta.url),{type:"module"}),this.worker.onmessage=e=>{this.handleMessage(e.data)}}async setCompiled(e,n){const r={type:"set-compiled",ir:e.ir,finalInitCode:e.finalInitCode,finalTaskCode:e.finalTaskCode};return this.worker.postMessage(r),new Promise(o=>{this.compiledResolve=o})}attachCanvas(e){if(this.canvasTransferred)return;const n=e.transferControlToOffscreen(),r={type:"set-canvas",canvas:n};this.worker.postMessage(r,[n]),this.canvasTransferred=!0;const o=e.getBoundingClientRect(),a=window.devicePixelRatio||1;this.resizeCanvas(o.width,o.height,a)}resizeCanvas(e,n,r){const o={type:"resize-canvas",width:e,height:n,dpr:r};this.worker.postMessage(o)}play(){this.transportState!=="playing"&&(this.transportState="playing",this.worker.postMessage({type:"play"}),this.startTickLoop())}pause(){this.transportState="paused",this.worker.postMessage({type:"pause"}),this.stopTickLoop()}stop(){this.transportState="stopped",this.frameCount=0,this.worker.postMessage({type:"stop"}),this.stopTickLoop()}step(){this.pause(),this.worker.postMessage({type:"step"})}setInput(e,n){this.worker.postMessage({type:"set-input",id:e,value:n}),te(()=>{const r=this.inputEntries.get(e);r&&(r.currentValue=n)})}setTextureSource(e,n){let r=this.inputSources.get(e);r?(r.videoElement&&(r.videoElement.pause(),r.videoElement.src="",r.videoElement.load(),r.videoElement=void 0),r.loadedBitmap&&(r.loadedBitmap.close(),r.loadedBitmap=void 0),r.source=n,r.isDirty=!0):(r={id:e,source:n,isDirty:!0,isLoading:!1},this.inputSources.set(e,r)),this.loadSourceAndTransfer(r),te(()=>{const o=this.inputEntries.get(e);o&&(o.displayText=typeof n.value=="string"?n.value:n.value.name)})}async resetTextureToTestCard(e){const n=this.inputSources.get(e);n&&(n.videoElement&&(n.videoElement.pause(),n.videoElement.src="",n.videoElement.load()),n.loadedBitmap&&n.loadedBitmap.close(),this.inputSources.delete(e)),this.worker.postMessage({type:"reset-texture-to-test-card",id:e}),te(()=>{const r=this.inputEntries.get(e);r&&(r.displayText=void 0)})}getTextureInputIds(){return this.textureInputIds}async captureScreenshot(){return this.worker.postMessage({type:"capture-screenshot"}),new Promise(e=>{this.screenshotResolve=e})}startTickLoop(){const e=()=>{this.transportState==="playing"&&(this.captureVideoFrames(),this.worker.postMessage({type:"tick",time:performance.now()}),this.frameId=requestAnimationFrame(e))};this.frameId=requestAnimationFrame(e)}captureVideoFrames(){for(const e of this.inputSources.values())if(!(!e.videoElement||e.videoElement.readyState<2||e.videoElement.paused))try{const n=new VideoFrame(e.videoElement),r={type:"set-video-frame",id:e.id,frame:n};this.worker.postMessage(r,[n])}catch{}}stopTickLoop(){this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}handleMessage(e){switch(e.type){case"ready":break;case"compiled-ok":this.applyInputEntries(e.inputEntries),this.compiledResolve&&(this.compiledResolve(!0),this.compiledResolve=null);break;case"compiled-error":console.error("Runtime worker compiled-error:",e.message),this.compiledResolve&&(this.compiledResolve(!1),this.compiledResolve=null);break;case"frame":this.fps=e.fps,this.frameCount=e.frameCount;break;case"error":console.error("Runtime worker error:",e.message);break;case"screenshot":this.screenshotResolve&&(this.screenshotResolve({pixels:e.pixels,width:e.width,height:e.height}),this.screenshotResolve=null);break}}applyInputEntries(e){this.inputEntries.clear(),this.textureInputIds=[];for(const n of e){const r={id:n.id,type:n.type,label:n.label,currentValue:n.currentValue,defaultValue:n.defaultValue,min:n.min,max:n.max,displayText:n.displayText,isTuningParam:n.isTuningParam,isSidechannel:n.isSidechannel};this.inputEntries.set(n.id,r),n.type==="texture"&&this.textureInputIds.push(n.id)}}async loadSourceAndTransfer(e){e.isLoading=!0;try{let n=null;if(e.source.type==="url"){const r=e.source.value;if(r.match(/\.(mp4|webm|ogg|mov)$/i)){const o=this.createVideoElement(r);e.videoElement=o,await new Promise(a=>{o.onloadeddata=()=>a(),o.onerror=()=>a()}),o.readyState>=2&&(n=await createImageBitmap(o))}else{const a=await(await fetch(r)).blob();n=await createImageBitmap(a)}}else{const r=e.source.value;if(r.type.startsWith("video/")){const o=URL.createObjectURL(r),a=this.createVideoElement(o);e.videoElement=a,await new Promise(i=>{a.onloadeddata=()=>i(),a.onerror=()=>i()}),a.readyState>=2&&(n=await createImageBitmap(a))}else n=await createImageBitmap(r)}n&&(e.loadedBitmap=n,this.transferBitmap(e.id,n),e.isDirty=!1)}catch(n){console.error(`Failed to load source for ${e.id}:`,n)}finally{e.isLoading=!1}}transferBitmap(e,n){const r={type:"set-texture-input",id:e,bitmap:n};this.worker.postMessage(r,[n])}createVideoElement(e){const n=document.createElement("video");return n.src=e,n.loop=!0,n.muted=!0,n.autoplay=!0,n.playsInline=!0,n.play(),n}dispose(){this.stopTickLoop();for(const e of this.inputSources.values())e.videoElement&&(e.videoElement.pause(),e.videoElement.src="",e.videoElement.load()),e.loadedBitmap&&e.loadedBitmap.close();this.inputSources.clear(),this.worker.terminate()}}Ct([_e],yt.prototype,"transportState",2);Ct([_e],yt.prototype,"fps",2);Ct([_e],yt.prototype,"frameCount",2);Ct([_e],yt.prototype,"inputEntries",2);Ct([Oe],yt.prototype,"play",1);Ct([Oe],yt.prototype,"pause",1);Ct([Oe],yt.prototype,"stop",1);Ct([Oe],yt.prototype,"step",1);Ct([Oe],yt.prototype,"handleMessage",1);Ct([Oe],yt.prototype,"applyInputEntries",1);let Bi=null;function Fv(t){Bi=t}class jv{constructor(){this.repl=new jn,this.runtime=new yt,this.lastCompiledIRJson=null,this.activeCompileResolver=null,this.activeCompilePromise=null,this.saveInputDebounceTimer=null}get activeWorkspaceId(){return R.local.settings.activeWorkspaceId||""}setActiveTab(e){te(()=>{R.local.settings.activeTab=e}),this.saveSettings()}setDevMode(e){te(()=>{R.local.settings.devMode=e,!e&&["ir","raw_code","state","script","logs"].includes(R.local.settings.activeTab)&&(R.local.settings.activeTab="dashboard")}),this.saveSettings()}setApiKey(e){te(()=>{R.local.settings.apiKey=e}),this.saveSettings()}setLeftPanelCollapsed(e){te(()=>{R.local.settings.leftPanelCollapsed=e}),this.saveSettings()}setLeftPanelWidth(e){te(()=>{R.local.settings.leftPanelWidth=e}),this.saveSettings()}setChatPanelWidth(e){te(()=>{R.local.settings.chatPanelWidth=e}),this.saveSettings()}toggleLeftPanel(e){te(()=>{R.local.settings.activeTab===e&&!R.local.settings.leftPanelCollapsed?R.local.settings.leftPanelCollapsed=!0:(R.local.settings.activeTab=e,R.local.settings.leftPanelCollapsed=!1)}),this.saveSettings()}saveSettings(){ye.settingsLoaded&&ye.saveSettings(Ye(R.local.settings))}saveInputValue(e,n){te(()=>{R.database.savedInputValues||(R.database.savedInputValues={}),R.database.savedInputValues[e]=n}),this.saveInputDebounceTimer&&clearTimeout(this.saveInputDebounceTimer),this.saveInputDebounceTimer=setTimeout(()=>{this.saveDatabaseWithTimestamp(),this.saveInputDebounceTimer=null},300)}async saveInputFile(e,n){const r={name:n.name,mimeType:n.type,blob:n};await ye.saveInputFile(this.activeWorkspaceId,e,r)}async getSavedFileInputIds(){const e=await ye.loadAllInputFiles(this.activeWorkspaceId);return new Set(e.keys())}async restoreSavedInputs(){const e=R.database.savedInputValues,n=this.runtime.inputEntries;if(e)for(const[o,a]of Object.entries(e)){const i=n.get(o);i&&i.type!==He.Texture&&this.runtime.setInput(o,a)}const r=await ye.loadAllInputFiles(this.activeWorkspaceId);for(const[o,a]of r){const i=n.get(o);if(i&&i.type===He.Texture)try{const s=new File([a.blob],a.name,{type:a.mimeType});this.runtime.setTextureSource(o,{type:"file",value:s})}catch(s){console.warn(`Failed to restore saved file for input ${o}:`,s)}}}setChatOpen(e){te(()=>{R.local.settings.chatOpen=e}),this.saveSettings()}toggleMockLLM(e){te(()=>{R.local.settings.useMockLLM=e}),this.saveSettings()}logLLMInteraction(e){console.log("[AppController] Logging LLM Interaction:",e),te(()=>{R.local.llmLogs.unshift(e),R.local.llmLogs.length>50&&(R.local.llmLogs.length=50)})}syncWorkspaceIndex(){const e=R.local.workspaces.find(r=>r.id===this.activeWorkspaceId);if(!e)return;const n=R.database.ir.comment||void 0;return e.comment!==n&&te(()=>{e.comment=n}),e}saveDatabase(){if(!this.activeWorkspaceId)return;this.syncWorkspaceIndex(),ye.saveDatabase(Ye(R.database),this.activeWorkspaceId);const e=R.local.workspaces.find(n=>n.id===this.activeWorkspaceId);e&&ye.saveWorkspace(Ye(e))}saveDatabaseWithTimestamp(){if(!this.activeWorkspaceId){R.local.draftExampleKey&&this.materializeDraft();return}this.syncWorkspaceIndex(),ye.saveDatabase(Ye(R.database),this.activeWorkspaceId);const e=R.local.workspaces.find(n=>n.id===this.activeWorkspaceId);e&&(te(()=>{e.updatedAt=Date.now()}),ye.saveWorkspace(Ye(e)))}async materializeDraft(){const e=R.local.draftExampleKey;if(!e)return;const r=R.database.ir.meta?.name||e,o=await this.createWorkspace(r);te(()=>{R.local.settings.activeWorkspaceId=o,R.local.draftExampleKey=null}),this.saveSettings(),this.syncWorkspaceIndex(),ye.saveDatabase(Ye(R.database),o);const a=R.local.workspaces.find(i=>i.id===o);a&&(te(()=>{a.updatedAt=Date.now()}),ye.saveWorkspace(Ye(a)))}undo(){Vn.undo(),this.saveDatabaseWithTimestamp(),this.performCompile()}redo(){Vn.redo(),this.saveDatabaseWithTimestamp(),this.performCompile()}clearLogs(){te(()=>{R.local.llmLogs.length=0})}setMaxLLMTurns(e){te(()=>{R.local.settings.maxLLMTurns=Math.max(1,Math.min(100,e))}),this.saveSettings()}setLLMModel(e){te(()=>{R.local.settings.llmModel=e||void 0}),this.saveSettings()}setUseZipExport(e){te(()=>{R.local.settings.useZipExport=e}),this.saveSettings()}setLLMBusy(e){te(()=>{R.local.llmBusy=e,e||(R.local.llmStatus=void 0)})}setLLMStatus(e){te(()=>{R.local.llmStatus=e??void 0})}setCompileStatus(e){te(()=>{R.local.compileStatus=e,e==="success"&&(R.local.lastCompileTime=Date.now())})}isIRStale(){return JSON.stringify(R.database.ir)!==this.lastCompiledIRJson}setDraftChat(e){te(()=>{R.local.draftChat=e})}addDraftImage(e){te(()=>{R.local.draftImages.push(e)})}removeDraftImage(e){te(()=>{R.local.draftImages.splice(e,1)})}clearDraftImages(){te(()=>{R.local.draftImages.length=0})}setActiveRewindId(e){te(()=>{R.local.activeRewindId=e})}setSelectedEntity(e,n){te(()=>{R.local.selectionHistory=[],R.local.selectionFuture=[],e?n&&(R.local.selectedEntity={id:e,type:n}):R.local.selectedEntity=void 0})}drillDown(e,n){te(()=>{R.local.selectedEntity&&(R.local.selectionHistory.push(R.local.selectedEntity),R.local.selectionFuture=[]),R.local.selectedEntity={id:e,type:n}})}debugValidateCurrentIR(){console.info("[AppController] Validating IR...");const e=R.database.ir,n=sa(e);return console.log("[Validate] Manual validation found",n.length,"errors"),te(()=>{R.local.validationErrors=n,n.length&&this.setActiveTab("raw_code")}),!n.length}async play(){te(()=>{R.local.settings.transportState="playing"}),this.saveSettings(),await this.ensureCompiled()&&R.local.settings.transportState==="playing"&&this.runtime.play()}pause(){te(()=>{R.local.settings.transportState="paused"}),this.saveSettings(),this.runtime.pause()}stop(){te(()=>{R.local.settings.transportState="stopped"}),this.saveSettings(),this.runtime.stop()}async restoreTransportState(){const e=R.local.settings.transportState;console.info("[AppController] Restoring transport state:",e),e==="playing"?await this.play():e==="paused"?this.runtime.pause():this.runtime.stop()}async compileCurrentIR(){return(await this.performCompile()).compileStatus==="success"}goBack(){te(()=>{const e=R.local.selectionHistory.pop();e?(R.local.selectedEntity&&R.local.selectionFuture.push(R.local.selectedEntity),R.local.selectedEntity=e):(R.local.selectedEntity=void 0,R.local.selectionFuture=[])})}goForward(){te(()=>{const e=R.local.selectionFuture.pop();e&&(R.local.selectedEntity&&R.local.selectionHistory.push(R.local.selectedEntity),R.local.selectedEntity=e)})}rewindToChat(e){const r=R.database.chat_history.find(i=>i.id===e);if(!r)return;if(r.role==="user"&&(r.text&&this.setDraftChat(r.text),this.clearDraftImages(),r.images?.length))for(const i of r.images)this.addDraftImage({...i});let o=0;const a=50;for(;o<a&&R.database.chat_history.some(l=>l.id===e);)this.undo(),o++;this.setActiveRewindId(null)}mutate(e,n,r,o){const a={};return te(()=>{Vn.record(e,n,r),this.saveDatabaseWithTimestamp()}),o?.needsCompile&&(a.compileResult=this.performCompile()),a}async ensureCompiled(){return this.repl.currentArtifacts?!0:this.activeCompilePromise?(await this.activeCompilePromise).compileStatus==="success":await this.compileCurrentIR()}async performCompile(){this.activeCompileResolver&&(this.activeCompileResolver({compileStatus:"timeout"}),this.activeCompileResolver=null);const e=R.database.ir,n=JSON.stringify(e);return n===this.lastCompiledIRJson?(te(()=>{R.local.validationErrors=[]}),this.setCompileStatus("success"),{compileStatus:"success"}):(this.setCompileStatus("compiling"),this.activeCompilePromise=new Promise(async r=>{this.activeCompileResolver=r;const o=setTimeout(()=>{this.activeCompileResolver===r&&(r({compileStatus:"timeout"}),this.activeCompileResolver=null)},1e4),a=await this.repl.compile(e),i=a?[]:Ye(this.repl.validationErrors);if(this.activeCompileResolver===r){if(clearTimeout(o),a){this.repl.swap(a);try{const l=await this.getSavedFileInputIds();await this.runtime.setCompiled(a,l),await this.restoreSavedInputs()}catch(l){console.warn("[AppController] GPU environment not available for live update:",l)}te(()=>{R.local.compilationResult={js:a.taskCode,jsInit:a.initCode,wgsl:a.wgsl},R.local.validationErrors=[]}),this.lastCompiledIRJson=n,this.setCompileStatus("success")}else te(()=>{R.local.validationErrors=i}),this.setCompileStatus("fail");r(a?{compileStatus:"success"}:{compileStatus:"fail",errors:i}),this.activeCompileResolver=null,this.activeCompilePromise=null}}),this.activeCompilePromise)}addChatMessage(e){const n={id:e.id||crypto.randomUUID(),role:e.role||"assistant",text:e.text,type:e.type,data:e.data,images:e.images};te(()=>{Vn.record("New Chat Message",n.role==="user"?"user":"llm",r=>{r.chat_history||(r.chat_history=[]),n.type==="entity_update"&&n.data?.entity?.id&&(r.chat_history=r.chat_history.filter(o=>!(o.type==="entity_update"&&o.data?.entity?.id===n.data.entity.id))),r.chat_history.push(n)}),this.saveDatabaseWithTimestamp()})}clearChatHistory(){this.mutate("Clear chat history","user",e=>{e.chat_history=[]})}async openExample(e){this.saveDatabase(),Bi?.stop(),Vn.clear(),this.runtime.stop();const n=vn[e];if(!n)return;const r=JSON.parse(JSON.stringify({...Qn,ir:n}));te(()=>{Object.keys(R.database).forEach(o=>delete R.database[o]),Object.assign(R.database,r),R.local.validationErrors=[],R.local.compilationResult=void 0,R.local.compileStatus=void 0,R.local.draftChat="",R.local.draftImages=[],R.local.activeRewindId=null,R.local.selectedEntity=void 0,R.local.selectionHistory=[],R.local.selectionFuture=[],R.local.llmBusy=!1,R.local.llmStatus=void 0,R.local.settings.activeWorkspaceId="",R.local.draftExampleKey=e}),this.saveSettings(),this.lastCompiledIRJson=null,this.repl.currentArtifacts=null,await this.restoreTransportState()}async createWorkspace(e){const n=Date.now(),r=crypto.randomUUID(),o={id:r,name:e||"New Shader",createdAt:n,updatedAt:n};return await ye.saveWorkspace(o),await ye.saveDatabase(JSON.parse(JSON.stringify(Qn)),r),te(()=>{R.local.workspaces.unshift(o)}),r}async forkWorkspace(e){const n=R.local.workspaces.find(l=>l.id===e);if(!n)throw new Error("Workspace not found");let r;if(e===this.activeWorkspaceId)r=JSON.parse(JSON.stringify(Ye(R.database)));else{const l=await ye.loadDatabase(e);if(!l)throw new Error("Workspace data not found");r=l}const o=Date.now(),a=crypto.randomUUID(),i={id:a,name:`${n.name} (Fork)`,createdAt:o,updatedAt:o,forkedFrom:{sourceId:e,sourceName:n.name,forkedAt:o}};await ye.saveWorkspace(i),await ye.saveDatabase(r,a);const s=await ye.loadAllInputFiles(e);for(const[l,f]of s)await ye.saveInputFile(a,l,f);return te(()=>{R.local.workspaces.unshift(i)}),a}async importWorkspaceFromIR(e,n){const r=Date.now(),o=crypto.randomUUID(),a=e.meta.name||n,i={id:o,name:a,createdAt:r,updatedAt:r,forkedFrom:{sourceId:"",sourceName:n,forkedAt:r}},s={ir:JSON.parse(JSON.stringify(e)),chat_history:[]};return await ye.saveWorkspace(i),await ye.saveDatabase(s,o),te(()=>{R.local.workspaces.unshift(i)}),await this.switchWorkspace(o),o}async deleteWorkspace(e){if(await ye.deleteWorkspace(e),await ye.deleteWorkspaceData(e),te(()=>{const n=R.local.workspaces.findIndex(r=>r.id===e);n!==-1&&R.local.workspaces.splice(n,1)}),e===this.activeWorkspaceId)if(R.local.workspaces.length>0)await this.switchWorkspace(R.local.workspaces[0].id);else{const n=await this.createWorkspace("New Shader");await this.switchWorkspace(n)}}async renameWorkspace(e,n){const r=R.local.workspaces.find(o=>o.id===e);!r||r.name===n||(te(()=>{r.name=n,r.updatedAt=Date.now()}),await ye.saveWorkspace(Ye(r)))}setWorkspaceComment(e){(R.database.ir.comment||"")!==e&&this.mutate("Update comment","user",r=>{r.ir.comment=e||void 0})}async switchWorkspace(e){if(e===this.activeWorkspaceId)return;this.saveDatabase(),Bi?.stop(),Vn.clear(),this.runtime.stop();const r=await ye.loadDatabase(e)||JSON.parse(JSON.stringify(Qn));te(()=>{Object.keys(R.database).forEach(o=>{delete R.database[o]}),Object.assign(R.database,r),R.local.validationErrors=[],R.local.compilationResult=void 0,R.local.compileStatus=void 0,R.local.draftChat="",R.local.draftImages=[],R.local.activeRewindId=null,R.local.selectedEntity=void 0,R.local.selectionHistory=[],R.local.selectionFuture=[],R.local.llmBusy=!1,R.local.llmStatus=void 0,R.local.settings.activeWorkspaceId=e,R.local.draftExampleKey=null}),this.syncWorkspaceIndex(),this.saveSettings(),this.lastCompiledIRJson=null,this.repl.currentArtifacts=null,await this.restoreTransportState()}}const ne=new jv;var Uv=Object.defineProperty,qv=Object.getOwnPropertyDescriptor,_o=(t,e,n,r)=>{for(var o=r>1?void 0:r?qv(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&Uv(e,n,o),o};let Tn=class extends Vt{constructor(){super(...arguments),this.runtime=null,this.isDragging=!1,this.statsBottom=8,this.canvasAttached=!1,this.resizeObserver=null}updated(t){t.has("runtime")&&this.attachCanvasToRuntime()}firstUpdated(){this.attachCanvasToRuntime(),this.resizeObserver=new ResizeObserver(t=>{for(const e of t)if(e.target===this.canvas&&this.runtime){const n=e.contentRect,r=window.devicePixelRatio||1;this.runtime.resizeCanvas(n.width,n.height,r)}}),this.canvas&&this.resizeObserver.observe(this.canvas)}attachCanvasToRuntime(){this.canvasAttached||!this.runtime||!this.canvas||(this.runtime.attachCanvas(this.canvas),this.canvasAttached=!0)}formatCompileAge(){const t=R.local.lastCompileTime;if(!t)return"";const e=Math.floor((Date.now()-t)/1e3);if(e<30)return"just now";if(e<90)return"1 min ago";const n=Math.floor(e/60);return n<60?`${n} min ago`:"more than an hour ago"}getCompileIndicator(){const t=R.local.compileStatus,e=R.local.validationErrors.filter(n=>n.severity==="error").length;return e>0?`${e} error${e!==1?"s":""}`:t==="compiling"?"compiling…":""}render(){const t=this.formatCompileAge(),e=this.getCompileIndicator(),n=!!this.runtime;return Z`
      <canvas
        data-drop-target
        @dragover=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @drop=${this.handleDrop}
      ></canvas>
      <div class="overlay ${this.isDragging?"active":""}">
        Drop to Load Texture
      </div>
      <div class="stats-bar" style="bottom: ${this.statsBottom}px">
        <span class="stats-text">${this.runtime?.fps.toFixed(1)||0} FPS${t?` · ${t}`:""}${e?` · ${e}`:""}</span>
        ${n?Z`
          <div class="stats-actions">
            <button @click=${()=>this.handleDownload()} title="Download screenshot"><ui-icon icon="la-download"></ui-icon></button>
            <button @click=${()=>this.handleAttachToChat()} title="Attach to chat"><ui-icon icon="la-comment-alt"></ui-icon></button>
          </div>
        `:fe}
      </div>
    `}async captureScreenshotBlob(){if(!this.runtime)return null;const t=await this.runtime.captureScreenshot();if(!t)return null;const{pixels:e,width:n,height:r}=t,o=new ImageData(new Uint8ClampedArray(e),n,r),a=new OffscreenCanvas(n,r),i=a.getContext("2d");return i?(i.putImageData(o,0,0),await a.convertToBlob({type:"image/png"})):null}async handleDownload(){const t=await this.captureScreenshotBlob();if(!t)return;const e=URL.createObjectURL(t),n=document.createElement("a");n.href=e;const r=R.database.ir?.meta?.name||"viewport";n.download=`${r.replace(/[^a-zA-Z0-9_-]/g,"_")}.png`,n.click(),URL.revokeObjectURL(e)}async handleAttachToChat(){const t=await this.captureScreenshotBlob();if(!t)return;const e=new FileReader;e.onload=()=>{const r=e.result.split(",")[1];r&&(ne.addDraftImage({mimeType:"image/png",data:r}),R.local.settings.chatOpen||ne.setChatOpen(!0))},e.readAsDataURL(t)}handleDragOver(t){t.preventDefault(),this.isDragging=!0,t.dataTransfer&&(t.dataTransfer.dropEffect="copy")}handleDragLeave(){this.isDragging=!1}handleDrop(t){t.preventDefault(),this.isDragging=!1;const e=t.dataTransfer?.files[0];if(e&&this.runtime){const n=this.runtime.getTextureInputIds();if(n.length>0){const r=n[0];this.runtime.setTextureSource(r,{type:"file",value:e})}}}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}};Tn.styles=We`
    :host {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
      image-rendering: pixelated;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(16, 185, 129, 0.2);
      border: 2px dashed var(--color-emerald-500);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: bold;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .overlay.active {
      opacity: 1;
    }
    .stats-bar {
      position: absolute;
      left: 0;
      right: 0;
      padding: 0 0;
      display: flex;
      align-items: center;
      font-family: monospace;
      font-size: 10px;
      color: rgba(255, 255, 255, 0.25);
      z-index: 10;
      white-space: nowrap;
      line-height: 18px;
    }
    .stats-text {
      pointer-events: none;
    }
    .stats-actions {
      margin-left: auto;
      display: flex;
      gap: 2px;
      transition: opacity 0.15s;
    }
    .stats-actions button {
      all: unset;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 3px;
      color: rgba(255, 255, 255, 0.25);
      --icon-size: 11px;
    }
    .stats-actions button:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  `;_o([qt({type:Object})],Tn.prototype,"runtime",2);_o([ba("canvas")],Tn.prototype,"canvas",2);_o([Ee()],Tn.prototype,"isDragging",2);_o([Ee()],Tn.prototype,"statsBottom",2);Tn=_o([tt("ui-viewport")],Tn);const Rt=[ha(Ji),We`
  :host {
    --pixel: 1px;
  }
  @media (min-resolution: 2dppx) {
    :host {
      --pixel: 0.5px;
    }
  }

  :host {
    /* Brunch & Bloom Theme Palette */
    --color-emerald-50: #ecfdf5;
    --color-emerald-100: #d1fae5;
    --color-emerald-500: #10b981;
    --color-emerald-600: #059669;
    --color-emerald-700: #047857;

    --color-stone-50: #fafaf9;
    --color-stone-100: #f5f5f4;
    --color-stone-200: #e7e5e4;
    --color-stone-300: #d6d3d1;
    --color-stone-400: #a8a29e;
    --color-stone-500: #78716c;
    --color-stone-600: #57534e;
    --color-stone-800: #292524;
    --color-stone-900: #1c1917;

    --color-rose-50: #fff1f2;
    --color-rose-100: #ffe4e6;
    --color-rose-400: #fb7185;
    --color-rose-500: #f43f5e;
    --color-rose-600: #e11d48;
    --color-rose-700: #be123c;

    --color-amber-500: #f59e0b;
    --color-sky-100: #e0f2fe;
    --color-sky-600: #0284c7;

    --app-bg: #121212; /* Deep dark background */
    --app-header-bg: #1e1e1e;
    --app-text-main: #e0e0e0;
    --app-text-muted: #888888;
    --app-border: #333333;

    --font-serif: "Merriweather", "Georgia", serif;
    --font-sans: "Inter", "Helvetica Neue", sans-serif;
    --font-ui: monospace;

    /* Legacy mapping */
    --app-color1: var(--app-bg);
    --app-text-color1: var(--app-text-main);
  }

  body {
    background-color: var(--app-bg);
    color: var(--app-text-main);
    font-family: var(--font-sans);
  }

  /* Action buttons */
  .action-btn {
    all: unset;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.65rem;
    font-family: var(--font-ui, monospace);
    color: var(--app-text-muted);
    padding: 0.15rem 0.35rem;
    border-radius: 3px;
  }
  .action-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    color: var(--app-text-main);
  }
  .action-btn.disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  /* Utility classes */
  .font-serif { font-family: var(--font-serif); }
  .font-bold { font-weight: 700; }
  .text-xs { font-size: 0.75rem; }
  .text-sm { font-size: 0.875rem; }
  .uppercase { text-transform: uppercase; }
  .tracking-wider { letter-spacing: 0.05em; }
  .rounded-full { border-radius: 9999px; }
  .rounded-2xl { border-radius: 1rem; }
  .rounded-3xl { border-radius: 1.5rem; }
  .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
`];We`
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
`;We`
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
`;var Vv=Object.defineProperty,Gv=Object.getOwnPropertyDescriptor,Eu=(t,e,n,r)=>{for(var o=r>1?void 0:r?Gv(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&Vv(e,n,o),o};let la=class extends Vt{constructor(){super(...arguments),this.showExportPanel=!1,this.outsideClickHandler=t=>{t.composedPath().includes(this)||(this.showExportPanel=!1)}}toggleExportPanel(){this.showExportPanel=!this.showExportPanel,this.showExportPanel?requestAnimationFrame(()=>{window.addEventListener("click",this.outsideClickHandler,!0)}):window.removeEventListener("click",this.outsideClickHandler,!0)}handleExportFFGL(){this.showExportPanel=!1,window.removeEventListener("click",this.outsideClickHandler,!0),this.dispatchEvent(new CustomEvent("download-zip",{bubbles:!0,composed:!0}))}handleExportShader(){this.showExportPanel=!1,window.removeEventListener("click",this.outsideClickHandler,!0),this.dispatchEvent(new CustomEvent("download-shader-json",{bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this.outsideClickHandler,!0)}render(){const t=R.local.workspaces.find(e=>e.id===ne.activeWorkspaceId);return Z`
      <div class="left">
        <span class="app-name">Nano FFGLify</span>
        ${t?Z`<span class="workspace-sep">/</span><span class="workspace-name">${t.name}</span>`:fe}
      </div>

      <div class="center">
        <ui-button icon="la-play" square @click=${()=>ne.play()} .variant=${ne.runtime.transportState==="playing"?"primary":"outline"} title="Play"></ui-button>
        <ui-button icon="la-pause" square @click=${()=>ne.pause()} .variant=${ne.runtime.transportState==="paused"?"primary":"outline"} title="Pause"></ui-button>
        <ui-button icon="la-stop" square @click=${()=>ne.stop()} .variant=${ne.runtime.transportState==="stopped"?"primary":"outline"} title="Stop"></ui-button>
        <ui-button icon="la-step-forward" square @click=${()=>ne.runtime.step()} title="Step"></ui-button>
        <div class="divider"></div>
        <ui-button icon="la-undo" square @click=${()=>ne.undo()} title="Undo"></ui-button>
        <ui-button icon="la-redo" square @click=${()=>ne.redo()} title="Redo"></ui-button>
      </div>

      <div class="right">
        <ui-button icon="la-external-link-alt" variant="ghost" @click=${()=>this.toggleExportPanel()} title="Export">Export</ui-button>
        ${this.showExportPanel?Z`
          <div class="export-panel">
            <div class="export-section">
              <div class="section-title">FFGL Plugin</div>
              <div class="section-desc">Native macOS plugin for Resolume, VDMX, and other VJ software. Unzip and run the .sh script, then copy the .bundle to your plugins folder.</div>
              <button class="section-btn" @click=${()=>this.handleExportFFGL()}>
                <i class="las la-download"></i> Download FFGL
              </button>
            </div>
            <div class="export-section">
              <div class="section-title">Shader</div>
              <div class="section-desc">Portable shader graph as JSON. Share with others, or drag and drop back into Nano FFGLify to import.</div>
              <button class="section-btn" @click=${()=>this.handleExportShader()}>
                <i class="las la-download"></i> Download Shader
              </button>
            </div>
          </div>
        `:fe}
      </div>
    `}};la.styles=[Rt,We`
      :host {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        padding: 0 1rem;
        height: 48px;
        background: var(--app-header-bg);
        border-bottom: 1px solid var(--app-border);
        flex-shrink: 0;
      }

      .left {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: bold;
        font-size: 1rem;
        white-space: nowrap;
        color: var(--app-text-muted);
        min-width: 0;
      }

      .app-name {
        flex-shrink: 0;
      }

      .workspace-name {
        font-weight: normal;
        font-size: 0.85rem;
        opacity: 0.6;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .workspace-sep {
        opacity: 0.3;
        flex-shrink: 0;
      }

      .center {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.25rem;
        position: relative;
      }

      .divider {
        width: 1px;
        height: 24px;
        background: var(--app-border);
        margin: 0 0.25rem;
      }

      .export-panel {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 4px;
        background: var(--app-panel-bg, #1e1e1e);
        border: 1px solid var(--app-border);
        border-radius: 10px;
        padding: 16px;
        z-index: 100;
        width: 280px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .export-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .export-section + .export-section {
        border-top: 1px solid var(--app-border);
        padding-top: 12px;
      }

      .section-title {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--app-text-main);
      }

      .section-desc {
        font-size: 0.75rem;
        color: var(--app-text-muted);
        line-height: 1.4;
      }

      .section-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 6px;
        cursor: pointer;
        color: var(--app-text-main);
        font-size: 0.75rem;
        font-weight: 600;
        font-family: inherit;
        border: 1px solid var(--app-border);
        background: transparent;
        transition: all 0.15s;
        width: 100%;
      }

      .section-btn:hover {
        background: rgba(255, 255, 255, 0.06);
        border-color: var(--app-text-muted);
      }

      .section-btn:active {
        transform: translateY(1px);
      }

      .section-btn i {
        font-size: 1rem;
      }
    `];Eu([Ee()],la.prototype,"showExportPanel",2);la=Eu([tt("ui-title-bar")],la);var Wv=Object.getOwnPropertyDescriptor,Zv=(t,e,n,r)=>{for(var o=r>1?void 0:r?Wv(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=i(o)||o);return o};const Hv=[{id:"workspaces",icon:"la-th-list",label:"Workspaces",devOnly:!1},{id:"dashboard",icon:"la-sliders-h",label:"Dashboard",devOnly:!1},{id:"ir",icon:"la-project-diagram",label:"IR Code",devOnly:!0},{id:"raw_code",icon:"la-code",label:"Raw Code",devOnly:!0},{id:"state",icon:"la-database",label:"State",devOnly:!0},{id:"script",icon:"la-scroll",label:"Script",devOnly:!0},{id:"logs",icon:"la-clipboard-list",label:"LLM Logs",devOnly:!0},{id:"settings",icon:"la-cog",label:"Settings",devOnly:!1}];let Mi=class extends Vt{render(){const t=R.local.settings,e=Hv.filter(o=>!o.devOnly||t.devMode),n=e.filter(o=>o.id!=="settings"),r=e.filter(o=>o.id==="settings");return Z`
      <div class="tabs">
        ${n.map(o=>Z`
          <div
            class="tab ${t.activeTab===o.id?"active":""}"
            title=${o.label}
            @click=${()=>ne.toggleLeftPanel(o.id)}
          >
            <ui-icon icon=${o.icon}></ui-icon>
          </div>
        `)}
        <div class="spacer"></div>
        ${r.map(o=>Z`
          <div
            class="tab ${t.activeTab===o.id?"active":""}"
            title=${o.label}
            @click=${()=>ne.toggleLeftPanel(o.id)}
          >
            <ui-icon icon=${o.icon}></ui-icon>
          </div>
        `)}
      </div>
    `}};Mi.styles=[Rt,We`
      :host {
        display: flex;
        flex-direction: column;
        width: 48px;
        box-sizing: border-box;
        background: #161616;
        border-right: 1px solid var(--app-border);
        flex-shrink: 0;
        overflow: hidden;
      }

      .tabs {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .spacer {
        flex: 1;
      }

      .tab {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.15s, background 0.15s;
        position: relative;
      }

      .tab:hover {
        opacity: 0.8;
        background: rgba(255, 255, 255, 0.05);
      }

      .tab.active {
        opacity: 1;
        background: rgba(255, 255, 255, 0.08);
      }

      .tab.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        bottom: 8px;
        width: 3px;
        background: var(--color-emerald-500);
        border-radius: 0 2px 2px 0;
      }

      ui-icon {
        --icon-size: 1.25rem;
      }
    `];Mi=Zv([tt("ui-nav-bar")],Mi);const Kv=(t,e)=>{const n=[],r=new Map;Ut(t,e);const o=No(t,e),a=(m,h)=>{r.has(m)||r.set(m,[]),r.get(m).push(h)},i=m=>`${t.id}:${m}`,s=m=>`global:${m}`;t.comment&&n.push({indent:0,parts:[{type:"comment",text:`// ${t.comment}`}]});const l=[{type:"keyword",text:"fn"},{type:"separator",text:" "},{type:"ref",text:t.id,refId:s(t.id)}];l.push({type:"separator",text:"("}),t.inputs.forEach((m,h)=>{l.push({type:"ref",text:m.id,refId:i(m.id),dataType:m.type}),l.push({type:"separator",text:": "}),l.push({type:"type",text:m.type}),m.comment&&(l.push({type:"separator",text:" "}),l.push({type:"comment",text:`/* ${m.comment} */`})),h<t.inputs.length-1&&l.push({type:"separator",text:", "})}),l.push({type:"separator",text:")"}),t.outputs.length>0&&(l.push({type:"separator",text:" -> "}),t.outputs.forEach((m,h)=>{l.push({type:"type",text:m.type}),h<t.outputs.length-1&&l.push({type:"separator",text:", "})})),n.push({indent:0,parts:l}),t.localVars.forEach(m=>{const h=[{type:"keyword",text:"var"},{type:"separator",text:" "},{type:"ref",text:m.id,refId:i(m.id),dataType:m.type},{type:"separator",text:": "},{type:"type",text:m.type}];m.initialValue!==void 0&&(h.push({type:"separator",text:" = "}),h.push({type:"literal",text:JSON.stringify(m.initialValue)})),m.comment&&(h.push({type:"separator",text:"  "}),h.push({type:"comment",text:`// ${m.comment}`})),n.push({indent:1,parts:h})}),t.localVars.length>0&&n.push({indent:1,parts:[]});let f=1;const d=new Map;return t.nodes.forEach(m=>{d.has(m.id)&&(f=d.get(m.id),d.delete(m.id));const h=Yv(m,t,e,o,a);m.op==="flow_loop"?(n.push({nodeId:m.id,indent:f,parts:h}),f++,m.exec_completed&&d.set(m.exec_completed,f-1)):m.op==="flow_branch"?(n.push({nodeId:m.id,indent:f,parts:h}),f++,m.exec_false&&d.set(m.exec_false,f-1)):n.push({nodeId:m.id,indent:f,parts:h})}),{id:t.id,lines:n,refs:r}},Jv=t=>{const e=[],n=r=>`global:${r}`;return t.inputs.forEach(r=>{const o=[{type:"keyword",text:"var"},{type:"separator",text:" "},{type:"ref",text:r.id,refId:n(r.id),dataType:r.type},{type:"separator",text:": "},{type:"type",text:r.type}];r.default!==void 0&&(o.push({type:"separator",text:" = "}),o.push({type:"literal",text:JSON.stringify(r.default)})),r.comment&&(o.push({type:"separator",text:"  "}),o.push({type:"comment",text:`// ${r.comment}`})),e.push({indent:0,parts:o})}),t.resources.forEach(r=>{const o=[{type:"keyword",text:"res"},{type:"separator",text:" "},{type:"ref",text:r.id,refId:n(r.id),dataType:r.type},{type:"separator",text:": "},{type:"type",text:r.type}],a=[];if(r.format&&a.push(`format: ${r.format}`),r.size&&(r.size.mode==="fixed"?a.push(`size: [${r.size.value}]`):r.size.mode==="reference"&&a.push(`size: ref(${r.size.ref})`)),a.length>0||r.comment){o.push({type:"separator",text:"  "});let i="";a.length>0&&(i+=`[${a.join(", ")}] `),r.comment&&(i+=r.comment),o.push({type:"comment",text:`// ${i.trim()}`})}e.push({indent:0,parts:o})}),e.length>0&&e.push({indent:0,parts:[]}),e},Yv=(t,e,n,r,o)=>{const a=[],s=!(t.op.startsWith("cmd_")||t.op.startsWith("flow_")||t.op.includes("_store"))&&t.op!=="func_return",l=m=>`${e.id}:${m}`,f=m=>`global:${m}`;if(s){const m=l(t.id),h=r.get(t.id);a.push({type:"ref",text:t.id,refId:m,dataType:h}),h&&(a.push({type:"separator",text:": "}),a.push({type:"type",text:h})),a.push({type:"separator",text:" = "})}a.push({type:"op",text:t.op}),a.push({type:"separator",text:"("});const d=Object.keys(t).filter(m=>!Ly.has(m));return d.forEach((m,h)=>{a.push({type:"keyword",text:m}),a.push({type:"separator",text:": "});const c=t[m];if(typeof c=="string"){const u=e.nodes.some(_=>_.id===c)||e.localVars.some(_=>_.id===c)||e.inputs.some(_=>_.id===c),p=n.inputs.some(_=>_.id===c)||n.resources.some(_=>_.id===c)||n.functions.some(_=>_.id===c);if(u){const _=l(c);a.push({type:"ref",text:c,refId:_}),o(_,t.id)}else if(p){const _=f(c);a.push({type:"ref",text:c,refId:_}),o(_,t.id)}else a.push({type:"literal",text:`"${c}"`})}else a.push({type:"literal",text:JSON.stringify(c)});h<d.length-1&&a.push({type:"separator",text:", "})}),a.push({type:"separator",text:")"}),t.comment&&(a.push({type:"separator",text:"  "}),a.push({type:"comment",text:`// ${t.comment}`})),a};var Xv=Object.defineProperty,Qv=Object.getOwnPropertyDescriptor,bo=(t,e,n,r)=>{for(var o=r>1?void 0:r?Qv(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&Xv(e,n,o),o};let Ln=class extends Nt{constructor(){super(...arguments),this.ir=null,this.analyzedFunctions=[],this.globalLines=[],this.hoveredRefId=null}updated(t){t.has("ir")&&this.ir&&(this.analyzedFunctions=this.ir.functions.map(e=>Kv(e,this.ir)),this.globalLines=Jv(this.ir))}handleRefMouseOver(t){this.hoveredRefId=t}handleRefMouseOut(){this.hoveredRefId=null}render(){return this.ir?Z`
      <div class="globals-block">
        ${this.globalLines.map(t=>this.renderLine(t))}
      </div>
      ${this.analyzedFunctions.map(t=>Z`
        <div class="function-block">
          ${t.lines.map(e=>this.renderLine(e))}
        </div>
      `)}
    `:Z`<div>No IR loaded.</div>`}renderLine(t){return Z`<div class="line indent-${t.indent}">${t.parts.map(e=>this.renderPart(e))}</div>`}renderPart(t){const e=t.refId&&this.hoveredRefId===t.refId;return t.type==="ref"&&t.refId?Z`<span
          class="part part-ref ${e?"highlighted":""}"
          @mouseover=${()=>this.handleRefMouseOver(t.refId)}
          @mouseout=${()=>this.handleRefMouseOut()}
        >${t.text}</span>`:Z`<span class="part part-${t.type}">${t.text}</span>`}};Ln.styles=[...Rt,We`
      :host {
        display: block;
        background: #1e1e1e;
        color: #d4d4d4;
        font-family: 'JetBrains Mono', 'Fira Code', monospace;
        padding: 1rem;
        border-radius: 8px;
        overflow: auto;
        line-height: 1.5;
        font-size: 14px;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
      }

      .line {
        white-space: pre;
        min-height: 1.5em;
        padding: 0 0.5rem;
        border-radius: 4px;
        transition: background-color 0.05s;
      }

      .line:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }

      .part {
        display: inline-block;
      }

      .part-op { color: #569cd6; font-weight: bold; }
      .part-ref {
        color: #9cdcfe;
        cursor: pointer;
        padding: 0 2px;
        border-radius: 3px;
        transition: all 0.05s;
      }
      .part-ref:hover {
        background-color: rgba(156, 220, 254, 0.2);
        text-decoration: underline;
      }
      .part-ref.highlighted {
        background-color: rgba(156, 220, 254, 0.4);
        box-shadow: 0 0 4px rgba(156, 220, 254, 0.6);
      }

      .part-literal { color: #ce9178; }
      .part-keyword { color: #c586c0; }
      .part-separator { color: #808080; }
      .part-type { color: #4ec9b0; font-style: italic; }
      .part-comment { color: #6a9955; }

      .indent-0 { margin-left: 0; }
      .indent-1 { margin-left: 1.5rem; }
      .indent-2 { margin-left: 3rem; }
      .indent-3 { margin-left: 4.5rem; }
      .indent-4 { margin-left: 6rem; }

      .function-block {
        margin-bottom: 2rem;
        border-left: 2px solid rgba(255, 255, 255, 0.1);
        padding-left: 0.5rem;
      }

      .globals-block {
        margin-bottom: 1.5rem;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 4px;
        border-left: 2px solid rgba(156, 220, 254, 0.2);
      }

      .header {
        font-size: 0.9rem;
        color: #888;
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 0.5rem;
      }
    `];bo([qt({type:Object})],Ln.prototype,"ir",2);bo([Ee()],Ln.prototype,"analyzedFunctions",2);bo([Ee()],Ln.prototype,"globalLines",2);bo([Ee()],Ln.prototype,"hoveredRefId",2);Ln=bo([tt("ui-ir-widget")],Ln);var e0=Object.defineProperty,t0=Object.getOwnPropertyDescriptor,Ra=(t,e,n,r)=>{for(var o=r>1?void 0:r?t0(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&e0(e,n,o),o};let dr=class extends Vt{constructor(){super(...arguments),this.runtime=null,this.draggingId=null,this.editingValueId=null}updated(t){if(t.has("editingValueId")&&this.editingValueId){const e=this.shadowRoot?.querySelector(".value-edit");e&&e.focus()}}render(){if(!this.runtime)return Z`<div style="padding: 0.5rem; color: var(--app-text-muted, #888); font-size: 0.8rem;">No runtime active</div>`;const t=Array.from(this.runtime.inputEntries.values());if(t.length===0)return Z`<div style="padding: 1rem; color: var(--app-text-muted, #888); font-size: 0.85rem; text-align: center;">${"♡"} No parameters yet</div>`;const e=t.filter(r=>!r.isTuningParam),n=t.filter(r=>r.isTuningParam);return Z`
      <div class="input-list">
        ${e.map(r=>this.renderInput(r))}
        ${n.length>0?Z`
          <div class="section-heading" style="display:flex;justify-content:space-between;align-items:center;">
            <span class="section-heading-label">Tuning</span>
            <span style="display:flex;gap:0.25rem;">
              <button class="action-btn ${n.some(r=>!this.isDefault(r))?"":"disabled"}"
                @click=${()=>this.handleApplyAllTuning(n)}>
                <ui-icon icon="la-thumbtack" style="--icon-size: 0.65rem;"></ui-icon>
                Apply All
              </button>
              <button class="action-btn ${n.some(r=>!this.isDefault(r))?"":"disabled"}"
                @click=${()=>this.handleResetAll(n)}>
                <ui-icon icon="la-undo" style="--icon-size: 0.65rem;"></ui-icon>
                Reset All
              </button>
            </span>
          </div>
          ${n.map(r=>this.renderInput(r))}
        `:fe}
      </div>
    `}renderInput(t){switch(t.type){case He.Float:case He.Int:return this.renderNumber(t);case He.Bool:return this.renderBool(t);case He.Texture:return this.renderTexture(t);case He.Float2:return this.renderVector(t,2);case He.Float3:return this.renderVector(t,3);case He.Float4:return this.renderVector(t,4);default:return Z`
          <div class="input-item">
            <div class="label">${t.label}</div>
            <div style="color:red; font-size: 10px;">Unsupported ${t.type}</div>
          </div>
        `}}renderNumber(t){const e=t.type===He.Int,n=t.currentValue??0,r=t.min??0,o=t.max??100,a=(n-r)/(o-r)*100,i=!this.isDefault(t),s=this.editingValueId===t.id;return Z`
      <div class="input-item">
        <div class="label-row">
          <span class="label">${t.label}</span>
          <span style="display:flex;align-items:center;gap:0.25rem;">
            ${s?Z`
              <input
                class="value-edit"
                type="number"
                .value=${String(e?n:n.toFixed(3))}
                .step=${e?"1":"0.001"}
                @keydown=${l=>this.handleValueEditKey(l,t)}
                @blur=${l=>this.commitValueEdit(l,t)}
                @focus=${l=>l.target.select()}
              />
            `:Z`
              <span class="value-display" @dblclick=${()=>this.editingValueId=t.id}>${e?n:n.toFixed(3)}</span>
            `}
            <button class="set-default-btn ${i?"":"disabled"}" @click=${()=>this.handleSetDefault(t)} title="Set current value as default">
              <ui-icon icon="la-thumbtack" style="--icon-size: 0.7rem;"></ui-icon>
            </button>
            <button class="reset-btn ${i?"":"disabled"}" @click=${()=>this.handleReset(t)} title="Reset to default">
              <ui-icon icon="la-undo" style="--icon-size: 0.7rem;"></ui-icon>
            </button>
          </span>
        </div>
        <input
          type="range"
          .min=${r}
          .max=${o}
          .step=${e?1:.001}
          .value=${n}
          style="--percent: ${a}%"
          @input=${l=>this.handleUpdate(t.id,e?parseInt(l.target.value):parseFloat(l.target.value))}
        />
      </div>
    `}renderBool(t){const e=!!t.currentValue,n=!this.isDefault(t);return Z`
      <div class="input-item">
        <div class="label-row">
          <span class="label">${t.label}</span>
          <span style="display:flex;align-items:center;gap:0.25rem;">
            <button class="set-default-btn ${n?"":"disabled"}" @click=${()=>this.handleSetDefault(t)} title="Set current value as default">
              <ui-icon icon="la-thumbtack" style="--icon-size: 0.7rem;"></ui-icon>
            </button>
            <button class="reset-btn ${n?"":"disabled"}" @click=${()=>this.handleReset(t)} title="Reset to default">
              <ui-icon icon="la-undo" style="--icon-size: 0.7rem;"></ui-icon>
            </button>
          </span>
        </div>
        <div class="toggle ${e?"active":""}" @click=${()=>this.handleUpdate(t.id,!e)}>
          <div class="toggle-track">
            <div class="toggle-thumb"></div>
          </div>
          <span>${e?"On":"Off"}</span>
        </div>
      </div>
    `}renderTexture(t){const e=!!t.displayText,n=this.draggingId===t.id;return Z`
      <div class="input-item"
        data-drop-target
        @dragover=${r=>this.handleDragOver(r,t.id)}
        @dragleave=${()=>this.draggingId=null}
        @drop=${r=>this.handleDrop(r,t.id)}
      >
        <div class="label-row">
          <span class="label">${t.label}</span>
          <span style="display:flex;align-items:center;gap:0.25rem;">
            ${t.isSidechannel?Z`<span class="sidechannel-chip">sidechannel</span>`:""}
            <button class="reset-btn ${e?"":"disabled"}" @click=${()=>this.handleResetTexture(t)} title="Clear texture">
              <ui-icon icon="la-undo" style="--icon-size: 0.7rem;"></ui-icon>
            </button>
          </span>
        </div>
        <div class="texture-slot ${e?"filled":""} ${n?"dragging":""}">
          ${t.displayText||"Drag & drop image/video..."}
        </div>
      </div>
    `}renderVector(t,e){const n=Array.isArray(t.currentValue)?t.currentValue:[0,0,0,0],r=!this.isDefault(t);return Z`
        <div class="input-item">
            <div class="label-row">
              <span class="label">${t.label}</span>
              <span style="display:flex;align-items:center;gap:0.25rem;">
                <button class="set-default-btn ${r?"":"disabled"}" @click=${()=>this.handleSetDefault(t)} title="Set current value as default">
                  <ui-icon icon="la-thumbtack" style="--icon-size: 0.7rem;"></ui-icon>
                </button>
                <button class="reset-btn ${r?"":"disabled"}" @click=${()=>this.handleReset(t)} title="Reset to default">
                  <ui-icon icon="la-undo" style="--icon-size: 0.7rem;"></ui-icon>
                </button>
              </span>
            </div>
            <div class="vector-row" style="grid-template-columns: repeat(${e}, 1fr)">
                ${[...Array(e)].map((o,a)=>Z`
                    <input
                        type="number"
                        .value=${n[a]??0}
                        @input=${i=>{const s=[...n];s[a]=parseFloat(i.target.value),this.handleUpdate(t.id,s)}}
                    />
                `)}
            </div>
        </div>
    `}isDefault(t){const e=t.currentValue,n=t.defaultValue;return Array.isArray(e)&&Array.isArray(n)?e.length===n.length&&e.every((r,o)=>r===n[o]):e===n}handleReset(t){this.handleUpdate(t.id,t.defaultValue)}handleResetTexture(t){this.runtime&&(this.runtime.resetTextureToTestCard(t.id),ne.saveInputValue(t.id,void 0))}handleResetAll(t){for(const e of t)e.type===He.Texture?e.displayText&&this.handleResetTexture(e):this.isDefault(e)||this.handleUpdate(e.id,e.defaultValue)}handleValueEditKey(t,e){t.key==="Enter"?t.target.blur():t.key==="Escape"&&(this.editingValueId=null)}commitValueEdit(t,e){const n=t.target,r=parseFloat(n.value);if(!isNaN(r)){const a=e.type===He.Int?Math.round(r):r;this.handleUpdate(e.id,a)}this.editingValueId=null}handleSetDefault(t){const e=t.currentValue,n=Array.isArray(e)?[...e]:e;ne.mutate("Set input default","user",r=>{const o=r.ir.inputs?.find(a=>a.id===t.id)??r.ir.tuningParams?.find(a=>a.id===t.id);o&&(o.default=n)}),t.defaultValue=n}handleApplyAllTuning(t){ne.mutate("Apply all tuning defaults","user",e=>{for(const n of t){const r=e.ir.tuningParams?.find(o=>o.id===n.id);r&&(r.default=Array.isArray(n.currentValue)?[...n.currentValue]:n.currentValue)}});for(const e of t)e.defaultValue=Array.isArray(e.currentValue)?[...e.currentValue]:e.currentValue}handleUpdate(t,e){this.runtime&&(this.runtime.setInput(t,e),ne.saveInputValue(t,e))}handleDragOver(t,e){t.preventDefault(),t.stopPropagation(),this.draggingId=e,t.dataTransfer&&(t.dataTransfer.dropEffect="copy")}handleDrop(t,e){t.preventDefault(),t.stopPropagation(),this.draggingId=null;const n=t.dataTransfer?.files[0];n&&this.runtime&&(this.runtime.setTextureSource(e,{type:"file",value:n}),ne.saveInputFile(e,n))}};dr.styles=[...Rt,We`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
      color: #ccc;
      font-size: 0.85rem;
    }

    .input-list {
      display: flex;
      flex-direction: column;
      padding: 0.5rem 0.5rem 50vh;
      gap: 1rem;
    }

    .input-item {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .label {
      color: #aaa;
      font-weight: 500;
    }

    .value-display {
      color: var(--color-emerald-500, #10b981);
      font-family: monospace;
      font-size: 0.7rem;
      background: rgba(16, 185, 129, 0.1);
      padding: 0.1rem 0.3rem;
      border-radius: 2px;
    }

    /* Range/Slider Styles */
    input[type="range"] {
      width: 100%;
      height: 24px; /* Expanded hit area */
      background: transparent; /* Remove default background */
      appearance: none;
      outline: none;
      margin: 0;
      cursor: pointer;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        background: linear-gradient(to right, var(--color-emerald-600) var(--percent, 0%), #333 var(--percent, 0%));
        height: 4px;
        border-radius: 2px;
    }

    input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 12px;
      height: 12px;
      background: var(--color-emerald-500, #10b981);
      border-radius: 50%;
      cursor: pointer;
      margin-top: -4px; /* Center thumb on track (track is 4px, thumb is 12px) */
      transition: transform 0.1s ease, box-shadow 0.2s;
      border: none;
    }

    input[type="range"]::-webkit-slider-thumb:hover {
      transform: scale(1.2);
      box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
    }

    /* Texture Slot Styles */
    .texture-slot {
      border: 1px dashed #444;
      border-radius: 4px;
      padding: 0.6rem;
      background: #222;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.75rem;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
    }

    .texture-slot.dragging {
      border-color: var(--color-emerald-500, #10b981);
      background: rgba(16, 185, 129, 0.1);
      color: #eee;
    }

    .texture-slot:hover {
      border-color: #666;
      background: #2a2a2a;
    }

    .texture-slot.filled {
        color: #ddd;
        border-style: solid;
    }

    .sidechannel-chip {
      font-size: 0.55rem;
      color: #888;
      background: #2a2a2a;
      border: 1px solid #444;
      border-radius: 3px;
      padding: 0.05rem 0.3rem;
      letter-spacing: 0.03em;
    }

    /* Boolean Toggle Styles */
    .toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      user-select: none;
    }

    .toggle-track {
      width: 32px;
      height: 18px;
      background: #333;
      border-radius: 9px;
      position: relative;
      transition: background 0.2s ease;
    }

    .toggle.active .toggle-track {
      background: var(--color-emerald-600, #059669);
    }

    .toggle-thumb {
      width: 14px;
      height: 14px;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .toggle.active .toggle-thumb {
      transform: translateX(14px);
    }

    /* Vector/Color Row */
    .vector-row {
        display: grid;
        gap: 0.25rem;
    }

    .vector-row input {
        background: #222;
        border: 1px solid #333;
        color: var(--color-emerald-500, #10b981);
        font-family: monospace;
        font-size: 0.7rem;
        padding: 0.25rem;
        border-radius: 2px;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
    }
    .vector-row input:focus {
        border-color: var(--color-emerald-500);
        outline: none;
        background: #2a2a2a;
    }

    /* Reset button styles */
    .section-heading {
      color: #777;
      font-size: 0.65rem;
      padding: 0.3rem 0 0 0;
    }

    .section-heading-label {
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .reset-all-row {
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem 0.5rem 0;
    }

    .reset-all-btn {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      border: none;
      background: none;
      color: var(--app-text-muted, #888);
      cursor: pointer;
      font-size: 0.7rem;
      font-family: inherit;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
    }

    .reset-all-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--app-text-main, #ccc);
    }

    .reset-all-btn.disabled {
      color: var(--app-text-muted, #888);
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }


    .reset-btn,
    .set-default-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: none;
      background: none;
      color: var(--app-text-muted, #888);
      cursor: pointer;
      border-radius: 3px;
      padding: 0;
      flex-shrink: 0;
    }

    .reset-btn:hover,
    .set-default-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--app-text-main, #ccc);
    }

    .reset-btn.disabled,
    .set-default-btn.disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }

    .value-display {
      cursor: pointer;
      user-select: none;
      transition: background 0.1s;
    }
    .value-display:hover {
      background: rgba(16, 185, 129, 0.2);
    }

    .value-edit {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid var(--color-emerald-500, #10b981);
      color: var(--color-emerald-500, #10b981);
      font-family: monospace;
      font-size: 0.7rem;
      padding: 0.1rem 0.3rem;
      border-radius: 2px;
      width: 5em;
      outline: none;
    }
  `];Ra([qt({type:Object})],dr.prototype,"runtime",2);Ra([Ee()],dr.prototype,"draggingId",2);Ra([Ee()],dr.prototype,"editingValueId",2);dr=Ra([tt("ui-inspector")],dr);var Ae;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(Ae||(Ae={}));var Jl;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(Jl||(Jl={}));var Yl;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Yl||(Yl={}));const Xl=["user","model","function","system"];var Ql;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Ql||(Ql={}));var ec;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(ec||(ec={}));var tc;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(tc||(tc={}));var nc;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(nc||(nc={}));var Pr;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(Pr||(Pr={}));var rc;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(rc||(rc={}));var oc;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(oc||(oc={}));var ac;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(ac||(ac={}));class Ge extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class Gn extends Ge{constructor(e,n){super(e),this.response=n}}class zu extends Ge{constructor(e,n,r,o){super(e),this.status=n,this.statusText=r,this.errorDetails=o}}class Xt extends Ge{}class Iu extends Ge{}const n0="https://generativelanguage.googleapis.com",r0="v1beta",o0="0.24.1",a0="genai-js";var Dn;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Dn||(Dn={}));class i0{constructor(e,n,r,o,a){this.model=e,this.task=n,this.apiKey=r,this.stream=o,this.requestOptions=a}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||r0;let a=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||n0}/${r}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function s0(t){const e=[];return t?.apiClient&&e.push(t.apiClient),e.push(`${a0}/${o0}`),e.join(" ")}async function l0(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",s0(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(o){throw new Xt(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${o.message}`)}for(const[o,a]of r.entries()){if(o==="x-goog-api-key")throw new Xt(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new Xt(`Header name ${o} can only be set using the apiClient field`);n.append(o,a)}}return n}async function c0(t,e,n,r,o,a){const i=new i0(t,e,n,r,a);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},p0(a)),{method:"POST",headers:await l0(i),body:o})}}async function go(t,e,n,r,o,a={},i=fetch){const{url:s,fetchOptions:l}=await c0(t,e,n,r,o,a);return f0(s,l,i)}async function f0(t,e,n=fetch){let r;try{r=await n(t,e)}catch(o){u0(o,t)}return r.ok||await d0(r,t),r}function u0(t,e){let n=t;throw n.name==="AbortError"?(n=new Iu(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof zu||t instanceof Xt||(n=new Ge(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function d0(t,e){let n="",r;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,r=o.error.details)}catch{}throw new zu(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function p0(t){const e={};if(t?.signal!==void 0||t?.timeout>=0){const n=new AbortController;t?.timeout>=0&&setTimeout(()=>n.abort(),t.timeout),t?.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}function xs(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Fo(t.candidates[0]))throw new Gn(`${Wt(t)}`,t);return h0(t)}else if(t.promptFeedback)throw new Gn(`Text not available. ${Wt(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Fo(t.candidates[0]))throw new Gn(`${Wt(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),ic(t)[0]}else if(t.promptFeedback)throw new Gn(`Function call not available. ${Wt(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Fo(t.candidates[0]))throw new Gn(`${Wt(t)}`,t);return ic(t)}else if(t.promptFeedback)throw new Gn(`Function call not available. ${Wt(t)}`,t)},t}function h0(t){var e,n,r,o;const a=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const i of(o=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||o===void 0?void 0:o.parts)i.text&&a.push(i.text),i.executableCode&&a.push("\n```"+i.executableCode.language+`
`+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&a.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}function ic(t){var e,n,r,o;const a=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const i of(o=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||o===void 0?void 0:o.parts)i.functionCall&&a.push(i.functionCall);if(a.length>0)return a}const m0=[Pr.RECITATION,Pr.SAFETY,Pr.LANGUAGE];function Fo(t){return!!t.finishReason&&m0.includes(t.finishReason)}function Wt(t){var e,n,r;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const a=t.candidates[0];Fo(a)&&(o+=`Candidate was blocked due to ${a.finishReason}`,a.finishMessage&&(o+=`: ${a.finishMessage}`))}return o}function Yr(t){return this instanceof Yr?(this.v=t,this):new Yr(t)}function _0(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,a=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(h){r[h]&&(o[h]=function(c){return new Promise(function(u,p){a.push([h,c,u,p])>1||s(h,c)})})}function s(h,c){try{l(r[h](c))}catch(u){m(a[0][3],u)}}function l(h){h.value instanceof Yr?Promise.resolve(h.value.v).then(f,d):m(a[0][2],h)}function f(h){s("next",h)}function d(h){s("throw",h)}function m(h,c){h(c),a.shift(),a.length&&s(a[0][0],a[0][1])}}const sc=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function b0(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=v0(e),[r,o]=n.tee();return{stream:y0(r),response:g0(o)}}async function g0(t){const e=[],n=t.getReader();for(;;){const{done:r,value:o}=await n.read();if(r)return xs(x0(e));e.push(o)}}function y0(t){return _0(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:o}=yield Yr(n.read());if(o)break;yield yield Yr(xs(r))}})}function v0(t){const e=t.getReader();return new ReadableStream({start(r){let o="";return a();function a(){return e.read().then(({value:i,done:s})=>{if(s){if(o.trim()){r.error(new Ge("Failed to parse stream"));return}r.close();return}o+=i;let l=o.match(sc),f;for(;l;){try{f=JSON.parse(l[1])}catch{r.error(new Ge(`Error parsing JSON response: "${l[1]}"`));return}r.enqueue(f),o=o.substring(l[0].length),l=o.match(sc)}return a()}).catch(i=>{let s=i;throw s.stack=i.stack,s.name==="AbortError"?s=new Iu("Request aborted when reading from the stream"):s=new Ge("Error reading from the stream"),s})}}})}function x0(t){const e=t[t.length-1],n={promptFeedback:e?.promptFeedback};for(const r of t){if(r.candidates){let o=0;for(const a of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=a.citationMetadata,n.candidates[o].groundingMetadata=a.groundingMetadata,n.candidates[o].finishReason=a.finishReason,n.candidates[o].finishMessage=a.finishMessage,n.candidates[o].safetyRatings=a.safetyRatings,a.content&&a.content.parts){n.candidates[o].content||(n.candidates[o].content={role:a.content.role||"user",parts:[]});const i={};for(const s of a.content.parts)s.text&&(i.text=s.text),s.functionCall&&(i.functionCall=s.functionCall),s.executableCode&&(i.executableCode=s.executableCode),s.codeExecutionResult&&(i.codeExecutionResult=s.codeExecutionResult),Object.keys(i).length===0&&(i.text=""),n.candidates[o].content.parts.push(i)}o++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}async function Ou(t,e,n,r){const o=await go(e,Dn.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return b0(o)}async function Cu(t,e,n,r){const a=await(await go(e,Dn.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:xs(a)}}function Ru(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Xr(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return w0(e)}function w0(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,o=!1;for(const a of t)"functionResponse"in a?(n.parts.push(a),o=!0):(e.parts.push(a),r=!0);if(r&&o)throw new Ge("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!o)throw new Ge("No content is provided for sending chat message.");return r?e:n}function $0(t,e){var n;let r={model:e?.model,generationConfig:e?.generationConfig,safetySettings:e?.safetySettings,tools:e?.tools,toolConfig:e?.toolConfig,systemInstruction:e?.systemInstruction,cachedContent:(n=e?.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new Xt("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(o)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const a=Xr(t);r.contents=[a]}return{generateContentRequest:r}}function lc(t){let e;return t.contents?e=t:e={contents:[Xr(t)]},t.systemInstruction&&(e.systemInstruction=Ru(t.systemInstruction)),e}function A0(t){return typeof t=="string"||Array.isArray(t)?{content:Xr(t)}:t}const cc=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],k0={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function S0(t){let e=!1;for(const n of t){const{role:r,parts:o}=n;if(!e&&r!=="user")throw new Ge(`First content should be with role 'user', got ${r}`);if(!Xl.includes(r))throw new Ge(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Xl)}`);if(!Array.isArray(o))throw new Ge("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new Ge("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const s of o)for(const l of cc)l in s&&(a[l]+=1);const i=k0[r];for(const s of cc)if(!i.includes(s)&&a[s]>0)throw new Ge(`Content with role '${r}' can't contain '${s}' part`);e=!0}}function fc(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}const uc="SILENT_ERROR";class E0{constructor(e,n,r,o={}){this.model=n,this.params=r,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r?.history&&(S0(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,o,a,i,s,l;await this._sendPromise;const f=Xr(e),d={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(s=this.params)===null||s===void 0?void 0:s.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,f]},m=Object.assign(Object.assign({},this._requestOptions),n);let h;return this._sendPromise=this._sendPromise.then(()=>Cu(this._apiKey,this.model,d,m)).then(c=>{var u;if(fc(c.response)){this._history.push(f);const p=Object.assign({parts:[],role:"model"},(u=c.response.candidates)===null||u===void 0?void 0:u[0].content);this._history.push(p)}else{const p=Wt(c.response);p&&console.warn(`sendMessage() was unsuccessful. ${p}. Inspect response object for details.`)}h=c}).catch(c=>{throw this._sendPromise=Promise.resolve(),c}),await this._sendPromise,h}async sendMessageStream(e,n={}){var r,o,a,i,s,l;await this._sendPromise;const f=Xr(e),d={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(s=this.params)===null||s===void 0?void 0:s.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,f]},m=Object.assign(Object.assign({},this._requestOptions),n),h=Ou(this._apiKey,this.model,d,m);return this._sendPromise=this._sendPromise.then(()=>h).catch(c=>{throw new Error(uc)}).then(c=>c.response).then(c=>{if(fc(c)){this._history.push(f);const u=Object.assign({},c.candidates[0].content);u.role||(u.role="model"),this._history.push(u)}else{const u=Wt(c);u&&console.warn(`sendMessageStream() was unsuccessful. ${u}. Inspect response object for details.`)}}).catch(c=>{c.message!==uc&&console.error(c)}),h}}async function z0(t,e,n,r){return(await go(e,Dn.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}async function I0(t,e,n,r){return(await go(e,Dn.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function O0(t,e,n,r){const o=n.requests.map(i=>Object.assign(Object.assign({},i),{model:e}));return(await go(e,Dn.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),r)).json()}class dc{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Ru(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const o=lc(e),a=Object.assign(Object.assign({},this._requestOptions),n);return Cu(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},o),a)}async generateContentStream(e,n={}){var r;const o=lc(e),a=Object.assign(Object.assign({},this._requestOptions),n);return Ou(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},o),a)}startChat(e){var n;return new E0(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=$0(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return z0(this.apiKey,this.model,r,o)}async embedContent(e,n={}){const r=A0(e),o=Object.assign(Object.assign({},this._requestOptions),n);return I0(this.apiKey,this.model,r,o)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return O0(this.apiKey,this.model,e,r)}}class C0{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new Ge("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new dc(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new Xt("Cached content must contain a `name` field.");if(!e.model)throw new Xt("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const i of o)if(n?.[i]&&e[i]&&n?.[i]!==e[i]){if(i==="model"){const s=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(s===l)continue}throw new Xt(`Different value for "${i}" specified in modelParams (${n[i]}) and cachedContent (${e[i]})`)}const a=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new dc(this.apiKey,a,r)}}function R0(t){return{name:`replace${t.name}`,description:`Replace the entire ${t.name}. ${t.description}`,parameters:{type:Ae.OBJECT,properties:Ni(t.fields),required:Object.entries(t.fields).filter(([e,n])=>n.required).map(([e])=>e)}}}function T0(t){return{name:`patch${t.name}`,description:`Patch the ${t.name}. Use JSON Patch format.`,parameters:{type:Ae.OBJECT,properties:{patches:{type:Ae.ARRAY,items:{type:Ae.OBJECT,properties:{op:{type:Ae.STRING,enum:["add","remove","replace","move","copy","test"],format:"enum"},path:{type:Ae.STRING,description:"JSON Pointer path (e.g. /label/medium)"},value:{type:Ae.STRING,description:"Value to set (can be JSON object)"}},required:["op","path","value"]}}},required:["patches"]}}}function L0(t,e){const n={},r=[];for(const[o,a]of Object.entries(e.args))n[o]=D0(a),a.optional||r.push(o);return{name:t,description:e.doc,parameters:{type:Ae.OBJECT,properties:n,required:r.length>0?r:void 0}}}function D0(t){const e=[t.doc];if(t.literalTypes&&e.push(`Accepted types: ${t.literalTypes.join(", ")}`),t.refable||t.requiredRef)return e.push("Can be a literal value or a string reference (node ID)."),{type:Ae.STRING,description:e.join(" ")};const n=e.join(" "),r=t.type;return r instanceof Jr?{type:Ae.STRING,format:"enum",enum:r.options,description:n}:r instanceof _s?{type:Ae.NUMBER,description:n}:r instanceof mu?{type:Ae.BOOLEAN,description:n}:r instanceof bu?{type:Ae.ARRAY,items:{type:Ae.STRING},description:n}:{type:Ae.STRING,description:n}}function Ni(t){const e={};for(const[n,r]of Object.entries(t))e[n]={type:P0(r.type),description:r.description},r.enum&&(e[n].enum=r.enum),r.items&&(e[n].items=Ni({item:r.items}).item,r.items.properties&&(e[n].items.required=Object.entries(r.items.properties).filter(([o,a])=>a.required).map(([o])=>o))),r.properties&&(e[n].properties=Ni(r.properties),e[n].required=Object.entries(r.properties).filter(([o,a])=>a.required).map(([o])=>o));return e}function P0(t){switch(t){case"string":return Ae.STRING;case"number":return Ae.NUMBER;case"boolean":return Ae.BOOLEAN;case"array":return Ae.ARRAY;case"object":return Ae.OBJECT;default:return Ae.STRING}}const Tu={hello:[{text:"Hello! I am your WebGPU IR Assistant.",tool_calls:[{name:"final_response",arguments:{text:"I can help you create, modify, and validate shader graphs. What would you like to build today?"}}]}],"do some research":[{text:"I'm looking up the docs for several operations.",tool_calls:[{name:"queryDocs",arguments:{}},{name:"queryDocs",arguments:{op:"texture_store"}},{name:"queryDocs",arguments:{op:"cmd_dispatch"}},{name:"queryDocs",arguments:{op:"math_add"}},{name:"queryDocs",arguments:{op:"math_div"}},{name:"queryDocs",arguments:{op:"call_func"}},{name:"queryDocs",arguments:{op:"builtin_get"}},{name:"queryDocs",arguments:{op:"const_get"}},{name:"final_response",arguments:{text:"Done."}}]}],"create a blur pipeline":[{text:"I'm setting up the blur pipeline for you...",tool_calls:[{name:"replaceIR",arguments:{id:"blur-ir",version:"1.0.0",meta:{name:"Precomputed Blur"},comment:"This is a test pipeline demonstrating resize, generation, and blur phases with dynamic dimensions.",entryPoint:"fn_main_cpu",inputs:[{id:"t_input",type:"texture2d",format:"rgba8",comment:"Source image for blur"},{id:"u_kernel_size",type:"int",default:16,ui:{min:1,max:64,widget:"slider"},comment:"Size of the blur kernel"},{id:"u_brightness",type:"float",default:1,ui:{min:0,max:2,widget:"slider"},comment:"Brightness multiplier"},{id:"u_invert",type:"bool",default:!1,comment:"Invert colors"},{id:"u_color_tint",type:"float4",default:[1,1,1,1],comment:"Color tint"}],structs:[],resources:[{id:"t_output",type:"texture2d",format:"rgba8",size:{mode:"reference",ref:"t_input"},persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1},isOutput:!0},{id:"b_weights",type:"buffer",dataType:"float4",size:{mode:"cpu_driven"},persistence:{retain:!1,clearOnResize:!0,clearEveryFrame:!0,cpuAccess:!1}}],functions:[{id:"fn_main_cpu",type:"cpu",comment:"Main CPU Orchestrator",inputs:[],outputs:[],localVars:[],nodes:[{id:"resize_w",op:"cmd_resize_resource",resource:"b_weights",size:"u_kernel_size"},{id:"out_size",op:"resource_get_size",resource:"t_output"},{id:"out_w",op:"vec_get_element",vec:"out_size",index:0},{id:"out_h",op:"vec_get_element",vec:"out_size",index:1},{id:"cmd_gen",op:"cmd_dispatch",func:"fn_gen_kernel",threads:["u_kernel_size",1,1],exec_in:"resize_w"},{id:"cmd_blur",op:"cmd_dispatch",func:"fn_blur",threads:["out_w","out_h",1],args:{u_kernel_size:"u_kernel_size"},exec_in:"cmd_gen"}]},{id:"fn_gen_kernel",type:"shader",inputs:[],outputs:[],localVars:[],nodes:[{id:"th_id",op:"builtin_get",name:"global_invocation_id"},{id:"idx",op:"vec_get_element",vec:"th_id",index:0},{id:"val",op:"math_mul",a:"idx",b:.0025},{id:"v_val",op:"float4",x:"val",y:"val",z:"val",w:"val"},{id:"store",op:"buffer_store",buffer:"b_weights",index:"idx",value:"v_val"}]},{id:"fn_blur",type:"shader",inputs:[{id:"u_kernel_size",type:"int"}],outputs:[],localVars:[{id:"v_sum",type:"float4",initialValue:[0,0,0,0]}],nodes:[{id:"th_id",op:"builtin_get",name:"global_invocation_id"},{id:"x",op:"vec_get_element",vec:"th_id",index:0},{id:"y",op:"vec_get_element",vec:"th_id",index:1},{id:"coords",op:"float2",x:"x",y:"y"},{id:"size_f",op:"resource_get_size",resource:"t_output"},{id:"width_f",op:"vec_get_element",vec:"size_f",index:0},{id:"height_f",op:"vec_get_element",vec:"size_f",index:1},{id:"f_x",op:"static_cast_float",val:"x"},{id:"f_y",op:"static_cast_float",val:"y"},{id:"mid_x",op:"math_add",a:"f_x",b:.5},{id:"mid_y",op:"math_add",a:"f_y",b:.5},{id:"u",op:"math_div",a:"mid_x",b:"width_f"},{id:"v",op:"math_div",a:"mid_y",b:"height_f"},{id:"uv",op:"float2",x:"u",y:"v"},{id:"loop",op:"flow_loop",start:0,end:"u_kernel_size",exec_body:"accumulate",exec_completed:"store"},{id:"idx_loop",op:"loop_index",loop:"loop"},{id:"size_half",op:"math_div",a:"u_kernel_size",b:2},{id:"idx_offset_i",op:"math_sub",a:"idx_loop",b:"size_half"},{id:"idx_offset_f",op:"static_cast_float",val:"idx_offset_i"},{id:"u_offset_n",op:"math_div",a:"idx_offset_f",b:"width_f"},{id:"u_offset",op:"math_mul",a:"u_offset_n",b:1.8},{id:"v_offset",op:"float2",x:"u_offset",y:0},{id:"sample_uv",op:"math_add",a:"uv",b:"v_offset"},{id:"idx_clamped",op:"math_clamp",val:"idx_loop",min:0,max:15},{id:"weight_val",op:"buffer_load",buffer:"b_weights",index:"idx_clamped"},{id:"sample_col",op:"texture_sample",tex:"t_input",coords:"sample_uv"},{id:"weighted_col",op:"math_mul",a:"sample_col",b:"weight_val"},{id:"curr_sum",op:"var_get",var:"v_sum"},{id:"new_sum",op:"math_add",a:"curr_sum",b:"weighted_col"},{id:"accumulate",op:"var_set",var:"v_sum",val:"new_sum"},{id:"final_color",op:"var_get",var:"v_sum"},{id:"store",op:"texture_store",tex:"t_output",coords:"coords",value:"final_color"}]}]}}]},{tool_calls:[{name:"final_response",arguments:{text:"I've created a precomputed blur pipeline IR document for you."}}]}],"introduce a compile error":{text:"I'll purposely break the compilation by introducing an invalid operation...",tool_calls:[{name:"patchIR",arguments:{patches:[{op:"replace",path:"/functions/1/nodes/2/op",value:"math_broken_op"}]}},{name:"final_response",arguments:{text:"I've introduced a breaking change. Let's see how the system reacts."}}]},"fix the compile error":{text:"Correcting the invalid operation now...",tool_calls:[{name:"patchIR",arguments:{patches:[{op:"replace",path:"/functions/1/nodes/2/op",value:"math_mul"}]}},{name:"final_response",arguments:{text:"The operation has been restored to `math_mul`. Compilation should now succeed."}}]},"how do i use math_add":[{text:"Let me check the documentation for `math_add`...",tool_calls:[{name:"queryDocs",arguments:{op:"math_add"}}]},{tool_calls:[{name:"final_response",arguments:{text:"As shown above, `math_add` takes two parameters 'a' and 'b' and returns their sum. You can use it with both scalar and vector types."}}]}],"change the kernel size to 32":{text:"I've updated the kernel size to 32.",tool_calls:[{name:"patchIR",arguments:{patches:[{op:"replace",path:"/inputs/2/default",value:32}]}},{name:"final_response",arguments:{text:"The kernel size has been successfully updated to 32 in the IR."}}]}},pc=Object.keys(Tu),Fi={name:"IR",description:"The Intermediate Representation document of the shader graph.",fields:{version:{type:"string",description:"IR Version",required:!0},meta:{type:"object",description:"Metadata about the document",required:!0,properties:{name:{type:"string",description:"Name of the shader",required:!0},author:{type:"string",description:"Author name",required:!1},description:{type:"string",description:"Detailed description",required:!1},license:{type:"string",description:"License type",required:!1},debug:{type:"boolean",description:"Enable debug mode",required:!1}}},entryPoint:{type:"string",description:"ID of the root CPU function",required:!0},inputs:{type:"array",description:"Global inputs (uniforms)",required:!1,items:{type:"object",description:"Input definition",properties:{id:{type:"string",description:"Variable name",required:!0},type:{type:"string",description:"Data type",required:!0},label:{type:"string",description:"UI Label",required:!1},comment:{type:"string",description:"Description",required:!1},format:{type:"string",description:"Format hint",required:!1},default:{type:"any_value",description:"Default value",required:!1},ui:{type:"object",description:"UI Hint",required:!1,properties:{min:{type:"number",description:"Minimum value",required:!1},max:{type:"number",description:"Maximum value",required:!1},widget:{type:"string",description:"Widget type",enum:["slider","color_picker","text","toggle","file"],required:!1}}}}}},tuningParams:{type:"array",description:"Tuning parameters: adjustable during development, hardcoded as literals in production builds. NOT exposed as host plugin parameters. Use for internal fine-tuning constants.",required:!1,items:{type:"object",description:"Tuning parameter definition",properties:{id:{type:"string",description:"Variable name",required:!0},type:{type:"string",description:"Data type",required:!0},label:{type:"string",description:"UI Label",required:!1},comment:{type:"string",description:"Description",required:!1},format:{type:"string",description:"Format hint",required:!1},default:{type:"any_value",description:"Default value",required:!1},ui:{type:"object",description:"UI Hint",required:!1,properties:{min:{type:"number",description:"Minimum value",required:!1},max:{type:"number",description:"Maximum value",required:!1},widget:{type:"string",description:"Widget type",enum:["slider","color_picker","text","toggle","file"],required:!1}}}}}},resources:{type:"array",description:"Resource definitions (buffers/textures)",required:!1,items:{type:"object",description:"Resource definition",properties:{id:{type:"string",description:"Resource ID",required:!0},type:{type:"string",description:"buffer or texture2d",required:!0},comment:{type:"string",description:"Description",required:!1},dataType:{type:"string",description:"Data type (for buffers)",required:!1},format:{type:"string",description:"Pixel format (for textures)",required:!1},size:{type:"object",description:"Sizing strategy",required:!0,properties:{mode:{type:"string",description:"fixed, viewport, reference, or cpu_driven",required:!0},value:{type:"number",description:"Fixed size value",required:!1},scale:{type:"number",description:"Viewport scale",required:!1},ref:{type:"string",description:"Reference ID",required:!1}}},isOutput:{type:"boolean",description:"Explicitly mark as an output. The first texture output will be the main output shown in the UI.",required:!1},persistence:{type:"object",description:"Lifecycle rules",required:!0,properties:{retain:{type:"boolean",description:"Retain data across frames",required:!0},clearOnResize:{type:"boolean",description:"Clear on resize",required:!0},clearEveryFrame:{type:"boolean",description:"Clear every frame",required:!0},cpuAccess:{type:"boolean",description:"Allow CPU access",required:!0},clearValue:{type:"any_value",description:"Value to clear to",required:!1}}},sampler:{type:"object",description:"Sampling params",required:!1,properties:{filter:{type:"string",description:"nearest or linear",required:!0},wrap:{type:"string",description:"clamp, repeat, or mirror",required:!0}}},structType:{type:"array",description:"Custom layout members (for buffers)",required:!1,items:{type:"object",description:"Member",properties:{name:{type:"string",description:"Member name",required:!0},type:{type:"string",description:"Data type",required:!0},comment:{type:"string",description:"Description",required:!1},builtin:{type:"string",description:"Builtin annotation",required:!1,enum:Cr.options},location:{type:"number",description:"Location index",required:!1}}}}}}},globals:{type:"array",description:"Global data values",required:!1,items:{type:"object",description:"Global value",properties:{}}},structs:{type:"array",description:"Shared struct definitions",required:!1,items:{type:"object",description:"Struct definition",properties:{id:{type:"string",description:"Name of custom data type, which can be used to reference this struct for resources and variables etc. Structs can contain other structs this way as well.",required:!0},members:{type:"array",description:"Members",required:!0,items:{type:"object",description:"Member",properties:{name:{type:"string",description:"Member name",required:!0},type:{type:"string",description:"Data type",required:!0},comment:{type:"string",description:"Description",required:!1},builtin:{type:"string",description:"Builtin annotation",required:!1,enum:Cr.options},location:{type:"number",description:"Location index",required:!1}}}},comment:{type:"string",description:"Description",required:!1}}}},functions:{type:"array",description:"Function definitions",required:!0,items:{type:"object",description:"Function definition",properties:{id:{type:"string",description:"Unique ID",required:!0},type:{type:"string",description:"cpu or shader",required:!0},comment:{type:"string",description:"Description",required:!1},inputs:{type:"array",description:"Args",required:!0,items:{type:"object",description:"Port",properties:{id:{type:"string",description:"Unique ID",required:!0},type:{type:"string",description:"Data type",required:!0},comment:{type:"string",description:"Description",required:!1},builtin:{type:"string",description:"Builtin annotation",required:!1,enum:Cr.options},location:{type:"number",description:"Location index",required:!1}}}},outputs:{type:"array",description:"Returns",required:!0,items:{type:"object",description:"Port",properties:{id:{type:"string",description:"Unique ID",required:!0},type:{type:"string",description:"Data type",required:!0},comment:{type:"string",description:"Description",required:!1},builtin:{type:"string",description:"Builtin annotation",required:!1,enum:Cr.options},location:{type:"number",description:"Location index",required:!1}}}},localVars:{type:"array",description:"Locals",required:!0,items:{type:"object",description:"Variable",properties:{id:{type:"string",description:"Unique ID",required:!0},type:{type:"string",description:"Data type",required:!0},initialValue:{type:"any_value",description:"Initial value",required:!1},comment:{type:"string",description:"Description",required:!1}}}},nodes:{type:"array",description:"Nodes",required:!0,items:{type:"object",description:"Node",properties:{id:{type:"string",description:"Unique ID",required:!0},op:{type:"string",description:"Op Code",required:!0},comment:{type:"string",description:"Description",required:!1}}}}}}},comment:{type:"string",description:"Optional comment",required:!1}}},B0={IR:Fi};class ws{static buildWorkerSystemInstruction(){return`
## Role: Shader IR Architect
You are a graphics engineer managing a hybrid CPU/GPU shader graph. Your goal is to transform user requests into valid Intermediate Representation (IR) edits.

The graph is split into functions. Functions may be either CPU (\`cpu\`) or GPU (\`shader\`). CPU functions must explicitly invoke GPU functions using \`cmd_dispatch\` or \`cmd_draw\`. In general, use CPU functions to prepare inputs, and GPU functions chained together to perform heavy duty work, using typical graphics pipeline techniques to efficiently leverage compute resources.

Be playful and creative, and explore ideas with the user, but be sure to do your best to fulfill the user's request when specified directly.
Judicially expose input parameters for "tweaking" and "playability". Try to keep existing parameter semantics the same, to prevent the meaning shifting around for the user. It's ok to change them, but ask the user first.

Tone of responses: Make responses feel less like a dusty textbook and more like grabbing a coffee with a senior designer who actually wants the user to succeed. Try to balance being authoritative enough on shader concepts and art direction, yet accessible enough to explain "what is a vector" to a total newbie.

Nodes:

Functions contain nodes. All nodes have an \`id\` property, which allows its output to be referenced by other nodes. All nodes also have an \`op\` property, which must specify one of the built-in ops.

Nodes may also have additional properties, defined per op type. For example, the following node packs the outputs from a node named \`x\` and \`x\` into a \`float2\`.

\`\`\`
{ id: 'coords', op: 'float2', x: 'x', y: 'y' }
\`\`\`

Many node properties can either be literals, or references to other nodes. Check the docs.

Types:

The following primitive types are available: [${Ff.join(", ")}]

Arrays are also available, and may either be fixed or dynamic size. Dynamic sized arrays are only available as global "resources". These translate to GPU buffers. Fixed sized arrays are also allowed for local variables.

Struct types are also available, to define custom types, also critical for defining vertex attributes like "position".

Type Coercion & Math:

- **Implicit Coercion**: You can mix \`int\` and \`float\` in math operations. The system handles the conversion (usually to \`float\`).
- **Vector Broadcasting**: You can operate between a vector and a scalar (e.g., \`vec3 * float\`). The scalar is applied to all components.
- **Strictness**:
  - Booleans are NOT implicitly converted to numbers for math ops. Use \`select\` or explicit casts.
  - Vector dimensions must match (no \`vec2 + vec3\`).
  - Resource operations (like \`buffer_store\`) are strict about types (no storing \`int\` into a \`float\` buffer without a cast).

GPU Pipeline Patterns:

The most common architecture is a CPU "main" function that orchestrates GPU work:

- **Image Effects**: CPU function dispatches a compute shader via \`cmd_dispatch\`. The compute shader reads input textures, writes output texture. Use \`builtin_get output_size\` for render target dimensions.
- **Particle Systems / Simulations**: CPU function first dispatches a compute shader to update simulation state in a buffer, then uses \`cmd_draw\` to render with vertex/fragment shaders. Buffer data persists across frames — no need to re-upload each frame.
- **Multi-Pass**: Chain multiple \`cmd_dispatch\` or \`cmd_draw\` calls in the CPU function. Each pass reads the previous pass's output.

Key patterns:
- Use \`cmd_resize_resource\` to initialize buffers/textures before first use. A clear value fills the resource (e.g., \`{ "op": "cmd_resize_resource", "resource": "particles", "size": 1000, "clear": [0,0,0,0] }\`).
- Struct types define vertex attributes. A buffer with \`dataType\` set to a struct ID stores interleaved vertex data. The vertex shader reads from the buffer via \`buffer_load\`.
- \`cmd_draw\` requires \`target\` (output texture), \`vertex\` and \`fragment\` (shader function IDs), and \`count\` (vertex count). Optional \`pipeline\` controls blend, topology, cull mode.
- Alpha blending is common: \`"pipeline": { "blend": { "color": { "srcFactor": "src-alpha", "dstFactor": "one-minus-src-alpha" }, "alpha": { "srcFactor": "one", "dstFactor": "one-minus-src-alpha" } } }\`

Built-in Variables:

- **Compute stage**: \`global_invocation_id\` (int3) — thread position in dispatch grid. \`normalized_global_invocation_id\` (float3) — UV-like [0..1] coordinates.
- **Vertex stage**: \`vertex_index\` (int), \`instance_index\` (int), \`position\` (float4, output-only — set this to clip-space position).
- **Fragment stage**: \`frag_coord\` (float4) — pixel coordinates.
- **Any GPU stage**: \`output_size\` (int3) — dimensions of the dispatch grid (compute) or render target (vertex/fragment). Use for aspect ratio correction, UV computation, etc.
- **Time builtins**: \`time\` (float, seconds since start), \`delta_time\` (float, seconds since last frame). These are auto-injected into shader args by \`cmd_dispatch\` and \`cmd_draw\` — just use \`builtin_get\` in the shader.

Coordinate Systems:

- **Screen / Texture space**: Pixel (0,0) is the **top-left** corner. X increases rightward, Y increases **downward**. This matches \`global_invocation_id\` and \`texture_store\` coordinates.
- **World / Camera space**: Standard right-handed: +X right, +Y **up**, +Z toward camera. When constructing a camera ray from UV, **negate** the screen-space Y to get world-space Y (i.e. \`rd_y = -uv_y\`).
- **UV space**: Textures are sampled with (0,0) at top-left, (1,1) at bottom-right. To map to centered clip space (−1..1), use: \`uv * 2 − 1\`.

Execution Semantics:

1. **Nodes Categories**:
   - **Executable Nodes**: Side-effect operations (e.g. \`cmd_*\`, \`flow_*\`, \`*_store\`, \`call_func\`, \`var_set\`, \`array_set\`).
     These nodes have execution flow defined by properties like \`exec_in\`, \`exec_out\`, \`exec_true\`, \`exec_false\`, or \`exec_body\`.
   - **Pure Nodes**: Data operations (e.g. \`math_*\`, \`vec_*\`, \`struct_*\`, \`var_get\`).
     These nodes have NO side effects and produce values. They are evaluated primarily via "Pull" from Executable nodes.

2. **Entry Points**: Execution begins at "Entry Nodes". An Entry Node is any Executable Node that has NO incoming execution dependency (e.g. no \`exec_in\` pointing to it, or it's the start of the chain).

3. **Flow (Control Flow)**:
   - The executor maintains a queue of Executable Nodes.
   - Execution proceeds via properties defined in the node's schema:
     - \`exec_in\`: (Input) A reference to a node that must execute *before* this node.
     - \`exec_out\`: (Output) A reference to the node that executes *after* this node (standard sequence).
     - \`exec_true\` / \`exec_false\`: (Output) Branch destinations for \`flow_branch\`.
     - \`exec_body\` / \`exec_completed\`: (Output) Loop body and post-loop destinations for \`flow_loop\`.

4. **Data Resolution (Data Flow)**:
   - Pure nodes are evaluated **lazily** and **synchronously** when an Executable Node (or another Pure node) references their ID in a property.
   - **State Access**: \`var_get\` reads the variable's value *at the moment of evaluation*.
   - This means if \`Executable A\` mutates \`Var X\`, and \`Executable B\` (which runs after A) consumes \`var_get(X)\`, B sees the new value.

5. **Recursion**: Recursive function calls (direct or indirect) are **FORBIDDEN** and must cause a runtime error.

## Operational Strategy
- USE THE DOCS: You do not know the inputs/outputs of specific "ops." Call \`queryDocs\` before introducing or modifying a node to ensure parameter accuracy.
- CHOOSE THE TOOL:
    - Use \`patchIR\` for incremental changes (RFC 6902 syntax).
    - Use \`replaceIR\` for structural overhauls.
- ERROR RECOVERY: If the system returns a "Validation Error" after you perform an action, analyze the error message. It likely indicates a logic error (e.g., type mismatch between nodes or a missing CPU-to-GPU bridge) even if the JSON itself was valid. Fix the error in your next turn.
- USE COMMENTS: The \`comment\` fields within the IR should be used to help keep notes on what and why. Use these like you would in code.
- ENDING THE SESSION: When you are done, call \`final_response\` with a natural language summary.
`.trim()}static buildWorkerUserPrompt(e,n,r,o){const a=e.database.ir,i=n.slice(-20).map(d=>`${d.role.charAt(0).toUpperCase()+d.role.slice(1)}: ${d.text||JSON.stringify(d.data)||"(Action)"} `).join(`
`),s=e.ephemeral.validationErrors;let l;s.length?l=`
CRITICAL: Your last action resulted in a compilation error.
Errors:
${s.map(d=>JSON.stringify(d)).join(`
`)}
Please correct this in your next step.
`.trim():l=`
The current IR is valid and compiling correctly.
`.trim();const f=`
### ACTIVE STATE
${JSON.stringify(a,null,2)}

### VALIDATION FEEDBACK
${l}

### CONVERSATION LOG
${i}

### USER REQUEST
User: ${r}

### AGENT RESPONSE (Thought + Action)
`.trim();return o?.length?[f,...o.map(d=>({inlineData:{mimeType:d.mimeType,data:d.data}}))]:f}}const Xn=class Xn{constructor(e,n){this.appController=e,this.systemInstruction=n,this.genAI=null,this.model=null,this.mockRegistry=new Map,Object.entries(Tu).forEach(([r,o])=>{this.mockRegistry.set(r.toLowerCase(),Array.isArray(o)?o:[o])}),this.tools=[],this.tools.push({name:"final_response",description:"Send the final text response to the user. Always use this to end the turn.",parameters:{type:Ae.OBJECT,properties:{text:{type:Ae.STRING,description:"The response text."}},required:["text"]}}),this.tools.push(R0(Fi)),this.tools.push(T0(Fi)),this.tools.push({name:"queryDocs",description:"Look up documentation for IR operations or example IR documents. Can also list all available operations or examples.",parameters:{type:Ae.OBJECT,properties:{op:{type:Ae.STRING,format:"enum",enum:Object.keys(ku),description:"The name of the operation to look up (e.g., 'math_add')."},example:{type:Ae.STRING,format:"enum",enum:Object.keys(vn),description:"The name of an example IR document to look up (e.g., 'noise_shader')."},list:{type:Ae.STRING,format:"enum",enum:["op","example"],description:"List all available 'op' (operations) or 'example' (IR documents)."}},required:[]}}),this.initializeSDK()}get resolvedApiKey(){return R.local.settings.apiKey||void 0||""}get hasApiKey(){return!!this.resolvedApiKey}initializeSDK(){const e=this.resolvedApiKey;if(!e){console.warn("No API key provided. LLM will not function correctly."),this.genAI=null,this.model=null;return}const n=R.local.settings.llmModel||Ti;this.genAI=new C0(e),this.model=this.genAI.getGenerativeModel({model:n,systemInstruction:this.systemInstruction,tools:[{functionDeclarations:this.tools}]})}reinitialize(e){this.initializeSDK()}setMockRegistry(e){this.mockRegistry.clear(),Object.entries(e).forEach(([n,r])=>{this.mockRegistry.set(n.toLowerCase(),Array.isArray(r)?r:[r])})}async generateResponse(e,n){const r=Date.now(),o=crypto.randomUUID();let a={text:""};const i=!!n?.forceMock,s=n?.maxTurns||25;let l=0;const f=typeof e=="string"?e:e.filter(c=>typeof c=="string").join(`
`);let d;if(i){const u=f.toLowerCase().split(`
`);let p,_=-1;for(const[g,y]of this.mockRegistry.entries()){const v=g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),$=new RegExp(`\\b${v}\\b`,"i");let k=-1;for(let A=u.length-1;A>=0;A--)if($.test(u[A])){k=A;break}k>-1&&k>_&&(_=k,p=y)}const b=p;d={async sendMessage(g){return!b||l>b.length?{text:"[MOCK] No more mock steps or no match found."}:b[l-1]}}}else{if(this.model||this.initializeSDK(),!this.model)return{text:"No API key configured. Please set one in Settings."};console.log("Starting Chat with Gemini...");const c=this.model.startChat({}),u=n?.signal;d={sendMessage:async p=>this.withRetry(async()=>{const b=(await c.sendMessage(p)).response,g=b.text(),y=[],v=b.functionCalls();return v&&v.length>0&&v.forEach($=>{y.push({name:$.name,arguments:$.args})}),{text:g||void 0,tool_calls:y.length>0?y:void 0}},u)}}let m=e,h=!1;try{for(;l<s;){if(n?.signal?.aborted){a.endReason="Stopped.";break}l++;const c=Date.now(),u=await d.sendMessage(m);a=u;const p=Array.isArray(m)?JSON.stringify(m.map(g=>typeof g=="string"?g:g?.inlineData?`[image:${g.inlineData.mimeType}]`:g)):typeof m=="string"?m:JSON.stringify(m);this.appController.logLLMInteraction({id:o,timestamp:Date.now(),turn_index:l,type:"chat",system_instruction_snapshot:this.systemInstruction,prompt_snapshot:p,response_snapshot:JSON.stringify(u),duration_ms:i?0:Date.now()-c,mocked:i});let _;u.tool_calls&&u.tool_calls.length?_=u.tool_calls:_=[{name:"final_response",arguments:{text:u.text}}];let b=!1;if(!n?.executeTool)b=!0,h=!0;else{const g=[];for(const y of _){const v=await n.executeTool(y.name,y.arguments);this.appController.logLLMInteraction({id:o,timestamp:Date.now(),turn_index:l,type:"tool_call",prompt_snapshot:JSON.stringify(y),response_snapshot:JSON.stringify(v),duration_ms:i?0:Date.now()-c,mocked:i}),g.push({functionResponse:{name:y.name,response:v.response}}),(v.end||y.name==="final_response")&&(b=!0,h=!0)}m=g}if(b)break}h||(a.endReason=`Reached maximum turns (${s}).`)}catch(c){if(c?.name==="AbortError"||n?.signal?.aborted)a.endReason="Stopped.";else{console.error("LLM Session Error:",c);const u=c?.toString()??"Unknown error";a={text:"Error during conversation.",endReason:u.includes("503")||u.includes("429")||u.toLowerCase().includes("overloaded")||u.toLowerCase().includes("rate limit")?"The model is currently overloaded. Please try again later.":`Error: ${u}`}}this.appController.logLLMInteraction({id:o,timestamp:Date.now(),turn_index:l,type:"error",system_instruction_snapshot:this.systemInstruction,prompt_snapshot:f,response_snapshot:c?.toString()??"Unknown",duration_ms:Date.now()-r,mocked:i})}return a}async withRetry(e,n){for(let r=0;;r++){if(n?.aborted)throw this.appController.setLLMStatus(null),new DOMException("Aborted","AbortError");try{const o=await(n?Promise.race([e(),new Promise((a,i)=>{n.addEventListener("abort",()=>i(new DOMException("Aborted","AbortError")),{once:!0})})]):e());return this.appController.setLLMStatus(null),o}catch(o){if(o?.name==="AbortError"||n?.aborted)throw this.appController.setLLMStatus(null),new DOMException("Aborted","AbortError");const a=o?.toString()||"";if(!(a.includes("503")||a.includes("429")||a.toLowerCase().includes("overloaded")||a.toLowerCase().includes("rate limit"))||r>=Xn.MAX_RETRIES)throw this.appController.setLLMStatus(null),o;const s=Xn.RETRY_DELAYS,l=s[Math.min(r,s.length-1)];console.warn(`LLM Request failed (attempt ${r+1}). Retrying in ${l/1e3}s...`,o),r>=1&&this.appController.setLLMStatus(`Model is busy, retrying in ${l/1e3}s…`),await new Promise(f=>{const d=setTimeout(f,l);n&&n.addEventListener("abort",()=>{clearTimeout(d),f()},{once:!0})})}}}};Xn.RETRY_DELAYS=[5e3,3e4,6e4],Xn.MAX_RETRIES=5;let ca=Xn;const Qr=new ca(ne,ws.buildWorkerSystemInstruction());var M0=Object.defineProperty,N0=Object.getOwnPropertyDescriptor,$s=(t,e,n,r)=>{for(var o=r>1?void 0:r?N0(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&M0(e,n,o),o};let eo=class extends Vt{constructor(){super(...arguments),this.apiKeyDraft="",this.showKey=!1}connectedCallback(){super.connectedCallback(),this.apiKeyDraft=R.local.settings.apiKey||""}renderToggle(t,e){return Z`
      <div class="toggle ${t?"active":""}" @click=${e}>
        <div class="toggle-track">
          <div class="toggle-thumb"></div>
        </div>
      </div>
    `}handleSaveApiKey(){const t=this.apiKeyDraft.trim();ne.setApiKey(t||void 0),Qr.reinitialize(t)}render(){const t=R.local.settings;return Z`
      <div class="section">
        <h3>LLM</h3>
        <div>
          <div class="setting-label">API Key</div>
          <div class="setting-description"><a href="https://ai.google.dev/gemini-api/docs/api-key" target="_blank">Google Generative AI API key</a></div>
          <div class="api-key-row" style="margin-top: 0.5rem;">
            <input
              .type=${this.showKey?"text":"password"}
              .value=${this.apiKeyDraft}
              @input=${e=>this.apiKeyDraft=e.target.value}
              placeholder="Enter API key..."
            />
            <ui-button icon=${this.showKey?"la-eye-slash":"la-eye"} square @click=${()=>this.showKey=!this.showKey} title="Toggle visibility"></ui-button>
            <ui-button @click=${()=>this.handleSaveApiKey()}>Save</ui-button>
          </div>
        </div>

        <div class="setting-row">
          <div>
            <div class="setting-label">Model</div>
            <div class="setting-description">Default: ${Ti}</div>
          </div>
          <input
            type="text"
            .value=${t.llmModel||""}
            placeholder=${Ti}
            style="width: 200px; padding: 0.3rem; background: #222; color: var(--app-text-main); border: 1px solid var(--app-border); border-radius: 4px; font-family: monospace; font-size: 0.85rem;"
            @change=${e=>{ne.setLLMModel(e.target.value.trim()),Qr.reinitialize()}}
          />
        </div>

        <div class="setting-row">
          <div>
            <div class="setting-label">Max Turns</div>
            <div class="setting-description">Maximum LLM tool-use rounds per message</div>
          </div>
          <input
            type="number"
            .value=${t.maxLLMTurns||25}
            min="1"
            max="100"
            style="width: 60px; padding: 0.3rem; background: #222; color: var(--app-text-main); border: 1px solid var(--app-border); border-radius: 4px; font-family: monospace; font-size: 0.85rem; text-align: center;"
            @change=${e=>ne.setMaxLLMTurns(parseInt(e.target.value)||25)}
          />
        </div>
      </div>

      <div class="section">
        <h3>Debug</h3>
        <div class="setting-row">
          <div>
            <div class="setting-label">Dev Mode</div>
            <div class="setting-description">Show advanced tabs (IR, Raw Code, State, Script, LLM Logs)</div>
          </div>
          ${this.renderToggle(t.devMode,()=>ne.setDevMode(!t.devMode))}
        </div>
        <div class="setting-row">
          <div>
            <div class="setting-label">Use Mock LLM</div>
            <div class="setting-description">Use pre-recorded responses instead of calling the API</div>
          </div>
          ${this.renderToggle(t.useMockLLM,()=>ne.toggleMockLLM(!t.useMockLLM))}
        </div>
        ${t.devMode?Z`
          <div class="setting-row">
            <div>
              <div class="setting-label">Use ZIP Export</div>
              <div class="setting-description">Export FFGL build as ZIP instead of shell script</div>
            </div>
            ${this.renderToggle(!!t.useZipExport,()=>ne.setUseZipExport(!t.useZipExport))}
          </div>
        `:fe}
      </div>
    `}};eo.styles=[Rt,We`
      :host {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0.5rem 50vh;
        overflow-y: auto;
        gap: 1.5rem;
        color: var(--app-text-main);
      }

      h3 {
        margin: 0;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--app-text-muted);
      }

      .setting-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .setting-label {
        font-size: 0.9rem;
      }

      .setting-description {
        font-size: 0.75rem;
        color: var(--app-text-muted);
        margin-top: 0.25rem;
      }

      a {
        color: var(--color-emerald-500);
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }

      .toggle {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        user-select: none;
      }

      .toggle-track {
        width: 36px;
        height: 20px;
        background: #333;
        border-radius: 10px;
        position: relative;
        transition: background 0.2s ease;
        flex-shrink: 0;
      }

      .toggle.active .toggle-track {
        background: var(--color-emerald-600);
      }

      .toggle-thumb {
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .toggle.active .toggle-thumb {
        transform: translateX(16px);
      }

      .api-key-row {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .api-key-row input {
        flex: 1;
        padding: 0.5rem;
        background: #222;
        color: var(--app-text-main);
        border: 1px solid var(--app-border);
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.85rem;
      }

      .api-key-row input:focus {
        outline: none;
        border-color: var(--color-emerald-500);
      }

      .info {
        font-size: 0.8rem;
        color: var(--app-text-muted);
        font-family: monospace;
      }

      .section {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
    `];$s([Ee()],eo.prototype,"apiKeyDraft",2);$s([Ee()],eo.prototype,"showKey",2);eo=$s([tt("ui-settings-panel")],eo);var F0=Object.defineProperty,j0=Object.getOwnPropertyDescriptor,Ta=(t,e,n,r)=>{for(var o=r>1?void 0:r?j0(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&F0(e,n,o),o};function hc(t){const e=Date.now()-t,n=Math.floor(e/1e3);if(n<60)return"just now";const r=Math.floor(n/60);if(r<60)return`${r}m ago`;const o=Math.floor(r/60);if(o<24)return`${o}h ago`;const a=Math.floor(o/24);return a<30?`${a}d ago`:new Date(t).toLocaleDateString()}let pr=class extends Vt{constructor(){super(...arguments),this.editing=null,this.editValue="",this.confirmingDeleteId=null}get busy(){return R.local.llmBusy}async handleCreate(){if(this.busy)return;const t=await ne.createWorkspace();await ne.switchWorkspace(t)}async handleSwitch(t){this.busy||t!==ne.activeWorkspaceId&&await ne.switchWorkspace(t)}async handleFork(t,e){t.stopPropagation(),!this.busy&&await ne.forkWorkspace(e)}handleDeleteClick(t,e){t.stopPropagation(),!this.busy&&(this.confirmingDeleteId=e)}async confirmDelete(t){if(t.stopPropagation(),!this.confirmingDeleteId)return;const e=this.confirmingDeleteId;this.confirmingDeleteId=null,await ne.deleteWorkspace(e)}cancelDelete(t){t.stopPropagation(),this.confirmingDeleteId=null}async handleGoToSource(t,e){t.stopPropagation(),!(this.busy||!R.local.workspaces.some(r=>r.id===e))&&await ne.switchWorkspace(e)}startEdit(t,e,n,r){t.stopPropagation(),this.editing={id:e,field:n},this.editValue=r,this.updateComplete.then(()=>{const o=n==="name"?".edit-input":".edit-textarea",a=this.shadowRoot?.querySelector(o);a&&(a.focus(),(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&a.select())})}async commitEdit(){if(!this.editing)return;const{id:t,field:e}=this.editing,n=this.editValue.trim();this.editing=null,e==="name"?n&&await ne.renameWorkspace(t,n):ne.setWorkspaceComment(n)}cancelEdit(){this.editing=null}handleEditKeydown(t){this.editing?.field==="name"&&t.key==="Enter"?(t.preventDefault(),this.commitEdit()):this.editing?.field==="comment"&&t.key==="Enter"&&(t.metaKey||t.ctrlKey)?(t.preventDefault(),this.commitEdit()):t.key==="Escape"&&this.cancelEdit()}async handleOpenExample(t){this.busy||R.local.draftExampleKey!==t&&await ne.openExample(t)}render(){const t=[...R.local.workspaces].sort((r,o)=>o.updatedAt-r.updatedAt||o.createdAt-r.createdAt),e=ne.activeWorkspaceId,n=R.local.draftExampleKey;return Z`
      <div class="list">
        ${t.map(r=>this.renderEntry(r,e))}
      </div>
      <div class="examples-divider">
        <span>Examples</span>
      </div>
      <div class="examples-list">
        ${Object.entries(vn).map(([r,o])=>Z`
          <div
            class="example-entry ${n===r?"active":""}"
            @click=${()=>this.handleOpenExample(r)}
          >
            <div class="example-name">${o.meta.name||r}</div>
            ${o.comment?Z`
              <div class="example-comment">${o.comment}</div>
            `:fe}
          </div>
        `)}
      </div>
    `}renderEntry(t,e){const n=t.id===e,r=this.confirmingDeleteId===t.id,o=t.forkedFrom?R.local.workspaces.some(l=>l.id===t.forkedFrom.sourceId):!1,a=n?R.database.ir.comment:t.comment,i=this.editing?.id===t.id&&this.editing.field==="name",s=this.editing?.id===t.id&&this.editing.field==="comment";return Z`
      <div
        class="workspace-entry ${n?"active":""}"
        @click=${()=>this.handleSwitch(t.id)}
      >
        <div class="workspace-info">
          ${i?Z`
            <input
              class="edit-input"
              .value=${this.editValue}
              @input=${l=>this.editValue=l.target.value}
              @blur=${()=>this.commitEdit()}
              @keydown=${l=>this.handleEditKeydown(l)}
              @click=${l=>l.stopPropagation()}
            />
          `:Z`
            <div class="workspace-name" @dblclick=${l=>this.startEdit(l,t.id,"name",t.name)}>${t.name}</div>
          `}
          ${s?Z`
            <textarea
              class="edit-textarea"
              .value=${this.editValue}
              @input=${l=>this.editValue=l.target.value}
              @blur=${()=>this.commitEdit()}
              @keydown=${l=>this.handleEditKeydown(l)}
              @click=${l=>l.stopPropagation()}
            ></textarea>
          `:a?Z`
            <div class="workspace-comment" @dblclick=${n?l=>this.startEdit(l,t.id,"comment",a):null}>${a}</div>
          `:n?Z`
            <div class="comment-placeholder" @dblclick=${l=>this.startEdit(l,t.id,"comment","")}>Add description...</div>
          `:fe}
          <div class="workspace-meta">${hc(t.updatedAt)}</div>
          ${t.forkedFrom?Z`
            <div class="fork-info">
              <ui-icon icon="la-code-branch" style="--icon-size: 0.65rem;"></ui-icon>
              from
              <span
                class="fork-source ${o?"":"missing"}"
                title="${o?`Go to "${t.forkedFrom.sourceName}"`:`"${t.forkedFrom.sourceName}" (deleted)`}"
                @click=${o?l=>this.handleGoToSource(l,t.forkedFrom.sourceId):null}
              >${t.forkedFrom.sourceName}</span>
              ${hc(t.forkedFrom.forkedAt)}
            </div>
          `:fe}
        </div>
        ${r?Z`
          <div class="confirm-delete" @click=${l=>l.stopPropagation()}>
            <span class="confirm-label">Delete?</span>
            <button class="confirm-btn yes" @click=${l=>this.confirmDelete(l)}>Yes</button>
            <button class="confirm-btn no" @click=${l=>this.cancelDelete(l)}>No</button>
          </div>
        `:Z`
          <div class="workspace-actions">
            <button class="action-btn" title="Fork" @click=${l=>this.handleFork(l,t.id)}>
              <ui-icon icon="la-code-branch" style="--icon-size: 0.85rem;"></ui-icon>
            </button>
            <button class="action-btn delete" title="Delete" @click=${l=>this.handleDeleteClick(l,t.id)}>
              <ui-icon icon="la-trash" style="--icon-size: 0.85rem;"></ui-icon>
            </button>
          </div>
        `}
      </div>
    `}};pr.styles=[Rt,We`
      :host {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        color: var(--app-text-main);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 0.5rem 0.5rem;
        flex-shrink: 0;
      }

      .list {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 0 0.25rem;
      }

      .workspace-entry {
        display: flex;
        align-items: stretch;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.1s;
        border-left: 3px solid transparent;
        gap: 0.5rem;
      }

      .workspace-entry:hover {
        background: rgba(255, 255, 255, 0.05);
      }

      .workspace-entry.active {
        border-left-color: var(--color-emerald-500);
        background: rgba(255, 255, 255, 0.08);
      }

      .workspace-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .workspace-name {
        font-size: 0.85rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .workspace-entry.active .workspace-name {
        font-weight: bold;
      }

      .workspace-meta {
        font-size: 0.7rem;
        color: var(--app-text-muted);
      }

      .workspace-comment {
        font-size: 0.7rem;
        color: var(--app-text-muted);
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .workspace-entry.active .workspace-comment {
        white-space: pre-wrap;
        overflow: visible;
      }

      .comment-placeholder {
        font-size: 0.7rem;
        color: var(--app-text-muted);
        opacity: 0.3;
        font-style: italic;
      }

      .fork-info {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.65rem;
        color: var(--app-text-muted);
        opacity: 0.8;
      }

      .fork-source {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-style: dotted;
      }

      .fork-source:hover {
        color: var(--app-text-main);
      }

      .fork-source.missing {
        text-decoration: line-through;
        cursor: default;
        opacity: 0.5;
      }

      .workspace-actions {
        display: flex;
        gap: 2px;
        opacity: 0;
        transition: opacity 0.1s;
        flex-shrink: 0;
        align-items: flex-start;
      }

      .workspace-entry:hover .workspace-actions {
        opacity: 1;
      }

      .edit-input {
        font-size: 0.85rem;
        background: #1a1a1a;
        border: 1px solid var(--color-emerald-500);
        color: var(--app-text-main);
        border-radius: 3px;
        padding: 2px 4px;
        outline: none;
        width: 100%;
        font-family: inherit;
      }

      .edit-textarea {
        font-size: 0.7rem;
        background: #1a1a1a;
        border: 1px solid var(--color-emerald-500);
        color: var(--app-text-main);
        border-radius: 3px;
        padding: 2px 4px;
        outline: none;
        width: 100%;
        font-family: inherit;
        resize: vertical;
        min-height: 2.5em;
        field-sizing: content;
      }

      .action-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: none;
        background: none;
        color: var(--app-text-muted);
        cursor: pointer;
        border-radius: 3px;
        font-size: 0.75rem;
        padding: 0;
      }

      .action-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--app-text-main);
      }

      .action-btn.delete:hover {
        color: #f87171;
      }

      .confirm-delete {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        flex-shrink: 0;
      }

      .confirm-label {
        font-size: 0.7rem;
        color: #f87171;
        white-space: nowrap;
      }

      .confirm-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 22px;
        border: 1px solid;
        background: none;
        cursor: pointer;
        border-radius: 3px;
        font-size: 0.65rem;
        padding: 0 0.35rem;
        font-family: inherit;
      }

      .confirm-btn.yes {
        color: #f87171;
        border-color: #f87171;
      }

      .confirm-btn.yes:hover {
        background: rgba(248, 113, 113, 0.15);
      }

      .confirm-btn.no {
        color: var(--app-text-muted);
        border-color: var(--app-border);
      }

      .confirm-btn.no:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .examples-divider {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 1rem 0.5rem 0.5rem;
        color: var(--app-text-muted);
        font-size: 0.7rem;
      }

      .examples-divider::before,
      .examples-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--app-border);
      }

      .examples-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 0 0.25rem 50vh;
      }

      .example-entry {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.1s;
        border-left: 3px solid transparent;
      }

      .example-entry:hover {
        background: rgba(255, 255, 255, 0.05);
      }

      .example-entry.active {
        border-left-color: var(--color-emerald-500);
        background: rgba(255, 255, 255, 0.08);
      }

      .example-name {
        font-size: 0.85rem;
      }

      .example-comment {
        font-size: 0.7rem;
        color: var(--app-text-muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .example-entry.active .example-comment {
        white-space: pre-wrap;
        overflow: visible;
      }
    `];Ta([Ee()],pr.prototype,"editing",2);Ta([Ee()],pr.prototype,"editValue",2);Ta([Ee()],pr.prototype,"confirmingDeleteId",2);pr=Ta([tt("ui-workspace-panel")],pr);var U0=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var a in o)o.hasOwnProperty(a)&&(r[a]=o[a])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),q0=Object.prototype.hasOwnProperty;function ji(t,e){return q0.call(t,e)}function Ui(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)ji(t,o)&&r.push(o);return r}function et(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function qi(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function hn(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function Lu(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function Vi(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(Vi(t[e]))return!0}else if(typeof t=="object"){for(var r=Ui(t),o=r.length,a=0;a<o;a++)if(Vi(t[r[a]]))return!0}}return!1}function mc(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var Du=(function(t){U0(e,t);function e(n,r,o,a,i){var s=this.constructor,l=t.call(this,mc(n,{name:r,index:o,operation:a,tree:i}))||this;return l.name=r,l.index=o,l.operation=a,l.tree=i,Object.setPrototypeOf(l,s.prototype),l.message=mc(n,{name:r,index:o,operation:a,tree:i}),l}return e})(Error),Re=Du,V0=et,Yn={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=fa(n,this.path);r&&(r=et(r));var o=xn(n,{op:"remove",path:this.from}).removed;return xn(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=fa(n,this.from);return xn(n,{op:"add",path:this.path,value:et(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:to(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},G0={add:function(t,e,n){return qi(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:Yn.move,copy:Yn.copy,test:Yn.test,_get:Yn._get};function fa(t,e){if(e=="")return t;var n={op:"_get",path:e};return xn(t,n),n.value}function xn(t,e,n,r,o,a){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=0),n&&(typeof n=="function"?n(e,0,t,e.path):ua(e,0)),e.path===""){var i={newDocument:t};if(e.op==="add")return i.newDocument=e.value,i;if(e.op==="replace")return i.newDocument=e.value,i.removed=t,i;if(e.op==="move"||e.op==="copy")return i.newDocument=fa(t,e.from),e.op==="move"&&(i.removed=t),i;if(e.op==="test"){if(i.test=to(t,e.value),i.test===!1)throw new Re("Test operation failed","TEST_OPERATION_FAILED",a,e,t);return i.newDocument=t,i}else{if(e.op==="remove")return i.removed=t,i.newDocument=null,i;if(e.op==="_get")return e.value=t,i;if(n)throw new Re("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",a,e,t);return i}}else{r||(t=et(t));var s=e.path||"",l=s.split("/"),f=t,d=1,m=l.length,h=void 0,c=void 0,u=void 0;for(typeof n=="function"?u=n:u=ua;;){if(c=l[d],c&&c.indexOf("~")!=-1&&(c=Lu(c)),o&&(c=="__proto__"||c=="prototype"&&d>0&&l[d-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&h===void 0&&(f[c]===void 0?h=l.slice(0,d).join("/"):d==m-1&&(h=e.path),h!==void 0&&u(e,0,t,h)),d++,Array.isArray(f)){if(c==="-")c=f.length;else{if(n&&!qi(c))throw new Re("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",a,e,t);qi(c)&&(c=~~c)}if(d>=m){if(n&&e.op==="add"&&c>f.length)throw new Re("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",a,e,t);var i=G0[e.op].call(e,f,c,t);if(i.test===!1)throw new Re("Test operation failed","TEST_OPERATION_FAILED",a,e,t);return i}}else if(d>=m){var i=Yn[e.op].call(e,f,c,t);if(i.test===!1)throw new Re("Test operation failed","TEST_OPERATION_FAILED",a,e,t);return i}if(f=f[c],n&&d<m&&(!f||typeof f!="object"))throw new Re("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",a,e,t)}}}function La(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new Re("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=et(t));for(var a=new Array(e.length),i=0,s=e.length;i<s;i++)a[i]=xn(t,e[i],n,!0,o,i),t=a[i].newDocument;return a.newDocument=t,a}function W0(t,e,n){var r=xn(t,e);if(r.test===!1)throw new Re("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function ua(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new Re("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(Yn[t.op]){if(typeof t.path!="string")throw new Re("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new Re('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new Re("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new Re("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&Vi(t.value))throw new Re("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,a=r.split("/").length;if(o!==a+1&&o!==a)throw new Re("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new Re("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var i={op:"_get",path:t.from,value:void 0},s=Pu([i],n);if(s&&s.name==="OPERATION_PATH_UNRESOLVABLE")throw new Re("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new Re("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function Pu(t,e,n){try{if(!Array.isArray(t))throw new Re("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)La(et(e),et(t),n||!0);else{n=n||ua;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof Re)return o;throw o}}function to(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,a,i;if(n&&r){if(a=t.length,a!=e.length)return!1;for(o=a;o--!==0;)if(!to(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var s=Object.keys(t);if(a=s.length,a!==Object.keys(e).length)return!1;for(o=a;o--!==0;)if(!e.hasOwnProperty(s[o]))return!1;for(o=a;o--!==0;)if(i=s[o],!to(t[i],e[i]))return!1;return!0}return t!==t&&e!==e}const Z0=Object.freeze(Object.defineProperty({__proto__:null,JsonPatchError:Re,_areEquals:to,applyOperation:xn,applyPatch:La,applyReducer:W0,deepClone:V0,getValueByPointer:fa,validate:Pu,validator:ua},Symbol.toStringTag,{value:"Module"}));var As=new WeakMap,H0=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),K0=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function J0(t){return As.get(t)}function Y0(t,e){return t.observers.get(e)}function X0(t,e){t.observers.delete(e.callback)}function Q0(t,e){e.unobserve()}function ex(t,e){var n=[],r,o=J0(t);if(!o)o=new H0(t),As.set(t,o);else{var a=Y0(o,e);r=a&&a.observer}if(r)return r;if(r={},o.value=et(t),e){r.callback=e,r.next=null;var i=function(){Gi(r)},s=function(){clearTimeout(r.next),r.next=setTimeout(i)};typeof window<"u"&&(window.addEventListener("mouseup",s),window.addEventListener("keyup",s),window.addEventListener("mousedown",s),window.addEventListener("keydown",s),window.addEventListener("change",s))}return r.patches=n,r.object=t,r.unobserve=function(){Gi(r),clearTimeout(r.next),X0(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",s),window.removeEventListener("keyup",s),window.removeEventListener("mousedown",s),window.removeEventListener("keydown",s),window.removeEventListener("change",s))},o.observers.set(e,new K0(e,r)),r}function Gi(t,e){e===void 0&&(e=!1);var n=As.get(t.object);ks(n.value,t.object,t.patches,"",e),t.patches.length&&La(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function ks(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var a=Ui(e),i=Ui(t),s=!1,l=i.length-1;l>=0;l--){var f=i[l],d=t[f];if(ji(e,f)&&!(e[f]===void 0&&d!==void 0&&Array.isArray(e)===!1)){var m=e[f];typeof d=="object"&&d!=null&&typeof m=="object"&&m!=null&&Array.isArray(d)===Array.isArray(m)?ks(d,m,n,r+"/"+hn(f),o):d!==m&&(o&&n.push({op:"test",path:r+"/"+hn(f),value:et(d)}),n.push({op:"replace",path:r+"/"+hn(f),value:et(m)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+hn(f),value:et(d)}),n.push({op:"remove",path:r+"/"+hn(f)}),s=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}))}if(!(!s&&a.length==i.length))for(var l=0;l<a.length;l++){var f=a[l];!ji(t,f)&&e[f]!==void 0&&n.push({op:"add",path:r+"/"+hn(f),value:et(e[f])})}}}function tx(t,e,n){n===void 0&&(n=!1);var r=[];return ks(t,e,r,"",n),r}const nx=Object.freeze(Object.defineProperty({__proto__:null,compare:tx,generate:Gi,observe:ex,unobserve:Q0},Symbol.toStringTag,{value:"Module"}));Object.assign({},Z0,nx,{JsonPatchError:Du,deepClone:et,escapePathComponent:hn,unescapePathComponent:Lu});function Wi(t,e,n,r){if(t==null){e.required&&r.push({field:n,message:`Field '${n}' is required`,severity:"error"});return}if(e.type!=="any"){if(e.type==="any_value"){if(typeof t=="string"||typeof t=="number"||typeof t=="boolean"||Array.isArray(t)&&t.every(o=>typeof o=="number"))return;r.push({field:n,message:`Expected shader value (string, number, bool, or float array) at '${n}', got ${typeof t}`,severity:"error"});return}if(e.type==="array"){if(!Array.isArray(t)){r.push({field:n,message:`Expected array at '${n}'`,severity:"error"});return}e.items&&t.forEach((o,a)=>Wi(o,e.items,`${n}[${a}]`,r))}else if(e.type==="object"){if(typeof t!="object"){r.push({field:n,message:`Expected object at '${n}'`,severity:"error"});return}if(e.properties)for(const[o,a]of Object.entries(e.properties))Wi(t[o],a,`${n}.${o}`,r)}else typeof t!==e.type&&(e.type==="number"&&typeof t=="string"&&!isNaN(Number(t))||e.type==="number"&&Array.isArray(t)||r.push({field:n,message:`Expected ${e.type} at '${n}', got ${typeof t}`,severity:"error"})),e.enum&&!e.enum.includes(t)&&r.push({field:n,message:`Invalid value '${t}'. Expected one of: ${e.enum.join(", ")}`,severity:"error"})}}function _c(t,e,n){const r=[];if(!t)return r.push({field:"root",message:"Entity is null or undefined",severity:"error"}),r;const o=B0[e];if(o)for(const[a,i]of Object.entries(o.fields))Wi(t[a],i,a,r);else console.warn(`No schema definition for ${e}`);return r}class Oo extends Error{}class Bu{constructor(e,n){this.appState=e,this.controller=n}async replaceIR(e){const r="replace";let o=!1,a,i;try{i=this.controller.mutate(`${r} IR`,"llm",f=>{if(f.ir=structuredClone(e),a=_c(f.ir,"IR",f),a.length)throw new Oo},{needsCompile:!0}).compileResult,o=!0}catch(l){if(l instanceof Oo)a??=[];else throw l}let s;return o&&i&&(s=await i),{editApplied:o,message:`IR ${r}`,validationResult:{success:o,errors:a},compileResult:s}}async patchIR(e){const r=e.patches;if(!Array.isArray(r))return{editApplied:!1,message:"patches must be an array"};const o="patch";let a=!1,i,s;try{s=this.controller.mutate("Patch IR","llm",d=>{const m=d.ir;if(m){try{La(m,r),i=_c(d.ir,"IR",d)}catch(h){console.error("Patch Failed:",h),i=[{field:"/",message:`Patch failed: ${h.toString()}`,severity:"error"}]}if(i.length)throw new Oo}},{needsCompile:!0}).compileResult,a=!0}catch(f){if(f instanceof Oo)i??=[];else throw f}let l;return a&&s&&(l=await s),{editApplied:a,message:`IR ${o}`,validationResult:{success:a,errors:i},compileResult:l}}}const rx=new Bu(R,ne);class Mu{constructor(e,n,r,o){this.appController=e,this.appState=n,this.llmManager=r,this.entityManager=o,this.activeAbortController=null}stop(){this.activeAbortController&&(this.activeAbortController.abort(),this.activeAbortController=null)}async handleUserMessage(e,n){this.appController.addChatMessage({role:"user",text:e,images:n?.length?n:void 0}),this.appController.setLLMBusy(!0),this.activeAbortController=new AbortController;try{const r=this.appState.database.chat_history.slice(0,-1),o=ws.buildWorkerUserPrompt({database:this.appState.database,ephemeral:this.appState.local},r,e,n),a=await this.llmManager.generateResponse(o,{forceMock:this.appState.local.settings.useMockLLM,maxTurns:this.appState.local.settings.maxLLMTurns||25,signal:this.activeAbortController.signal,executeTool:async(i,s)=>{console.log("Executing Tool:",i,s);try{const l=await this.executeTool(i,s);return console.log("Done Tool:",i,l),l}catch(l){return console.warn("Error Running Tool:",i,l),{end:!1,response:l?.toString()??"unknown error"}}}});a.endReason&&this.appController.addChatMessage({role:"assistant",text:a.endReason})}catch(r){console.error("LLM Error:",r),this.appController.addChatMessage({role:"assistant",text:"I'm having trouble connecting to the network right now."})}finally{this.activeAbortController=null,this.appController.setLLMBusy(!1)}}async executeTool(e,n){const r=e,o=n;switch(r){case"final_response":{const a=o.text;return a&&this.appController.addChatMessage({role:"assistant",text:a}),{end:!0,response:{success:!0,message:"sent"}}}case"replaceIR":{const a=o,i=await this.entityManager.replaceIR(a),s=a.functions||[],l=s.reduce((m,h)=>m+(h.nodes?.length||0),0),f=s.map(m=>m.id).join(", "),d=i.success?"✓":"✗";return this.appController.addChatMessage({role:"tool-response",text:`${d} replaceIR — ${s.length} function${s.length!==1?"s":""} (${f}), ${l} node${l!==1?"s":""}${i.compileResult?`, compile: ${i.compileResult.compileStatus}`:""}`,type:"entity_update",data:structuredClone(i)}),{end:!1,response:i}}case"patchIR":{const a=o,i=await this.entityManager.patchIR(a),s=a.patches?.length||0,l=i.success?"✓":"✗";return this.appController.addChatMessage({role:"tool-response",text:`${l} patchIR — ${s} edit${s!==1?"s":""}${i.compileResult?`, compile: ${i.compileResult.compileStatus}`:""}`,type:"entity_update",data:structuredClone(i)}),{end:!1,response:i}}case"queryDocs":{const a=o.op,i=o.example,s=o.list;if(i){const l=vn[i];if(!l)return{end:!1,response:{success:!1,message:`Unknown example: ${i}`}};const f={success:!0,message:`Example IR: ${i}`,docsResult:l};return this.appController.addChatMessage({role:"tool-response",text:`queryDocs — example: ${i}`,type:"entity_update",data:structuredClone(f)}),{end:!1,response:f}}if(s==="example"){const l=Object.keys(vn).length,m={success:!0,message:`Available Example IRs:

${Object.entries(vn).map(([h,c])=>{const u=c.meta?.name||"Unnamed",p=c.comment||"";return`- **${h}** (${u})${p?`: ${p}`:""}`}).join(`
`)}`};return this.appController.addChatMessage({role:"tool-response",text:`queryDocs — listed ${l} examples`,type:"text",data:structuredClone(m)}),{end:!1,response:m}}if(s==="op"||!a&&!i&&!s){const l=Object.keys(mt).length,m={success:!0,message:`Available IR Operations:

${Object.entries(mt).map(([h,c])=>`- **${h}**: ${c.doc}`).join(`
`)}`};return this.appController.addChatMessage({role:"tool-response",text:`queryDocs — listed ${l} operations`,type:"text",data:structuredClone(m)}),{end:!1,response:m}}if(a){const l=mt[a];if(!l)return{end:!1,response:{success:!1,message:`Unknown operation: ${a}`}};const f=L0(a,l),d={success:!0,message:`Documentation for ${a}`,docsResult:f};return this.appController.addChatMessage({role:"tool-response",text:`queryDocs — op: ${a}`,type:"entity_update",data:structuredClone(d)}),{end:!1,response:d}}return{end:!1,response:{success:!1,message:"Invalid queryDocs arguments"}}}default:return console.warn("Unknown tool:",r),{end:!1,response:{success:!1,message:`Unknown tool: ${r}`}}}}}const Zi=new Mu(ne,R,Qr,rx);Fv(Zi);function ox(t,e){const n=JSON.parse(JSON.stringify(t)),r=new Nf(n),o=new Nn(r),a=e?.controller||{addChatMessage:()=>{},logLLMInteraction:()=>{},mutate:(f,d,m)=>{o.record(f,d,m)}},i=new Bu(r,a),s=e?.llm||{generateResponse:async()=>({})},l=new Mu(a,r,s,i);return{appState:r,historyManager:o,entityManager:i,chatHandler:l,mockController:a,mockLLM:s}}const bc=`// Intrinsics
const _applyUnary = (v, f) => Array.isArray(v) ? v.map(f) : f(v);
const _applyBinary = (a, b, f) => {
  if (Array.isArray(a) && Array.isArray(b)) return a.map((v, i) => f(v, b[i]));
  if (Array.isArray(a)) return a.map(v => f(v, b));
  if (Array.isArray(b)) return b.map(v => f(a, v));
  return f(a, b);
};
const _vec_dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
const _vec_length = (a) => Math.sqrt(a.reduce((s, v) => s + v * v, 0));
const _vec_normalize = (a) => { const l = _vec_length(a); return l < 1e-10 ? a.map(() => 0) : a.map(v => v / l); };
const _mat_mul = (a, b) => {
  if (a.length === 16 || a.length === 9) {
    const dim = a.length === 16 ? 4 : 3;
    if (b.length === a.length) {
      const out = new Array(dim * dim);
      for (let r = 0; r < dim; r++) for (let c = 0; c < dim; c++) {
        let sum = 0; for (let k = 0; k < dim; k++) sum += a[k * dim + r] * b[c * dim + k];
        out[c * dim + r] = sum;
      }
      return out;
    }
    if (b.length === dim) {
      const out = new Array(dim).fill(0);
      for (let r = 0; r < dim; r++) {
        let sum = 0; for (let c = 0; c < dim; c++) sum += a[c * dim + r] * b[c];
        out[r] = sum;
      }
      return out;
    }
  } else if (b.length === 16 || b.length === 9) {
    // Vector * Matrix (Row Vector)
    const dim = b.length === 16 ? 4 : 3;
    if (a.length === dim) {
      const out = new Array(dim).fill(0);
      for (let c = 0; c < dim; c++) {
        let sum = 0; for (let r = 0; r < dim; r++) sum += a[r] * b[c * dim + r];
        out[c] = sum;
      }
      return out;
    }
  }
  return 0;
};
const _quat_mul = (a, b) => {
  const [ax, ay, az, aw] = a;
  const [bx, by, bz, bw] = b;
  return [
    ax * bw + aw * bx + ay * bz - az * by,
    ay * bw + aw * by + az * bx - ax * bz,
    az * bw + aw * bz + ax * by - ay * bx,
    aw * bw - ax * bx - ay * by - az * bz
  ];
};
const _quat_slerp = (a, b, t) => {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];
  let cosHalfTheta = ax * bx + ay * by + az * bz + aw * bw;
  if (Math.abs(cosHalfTheta) >= 1.0) return a;
  if (cosHalfTheta < 0) { bx = -bx; by = -by; bz = -bz; bw = -bw; cosHalfTheta = -cosHalfTheta; }
  const sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
  if (Math.abs(sinHalfTheta) < 0.001) return [(1 - t) * ax + t * bx, (1 - t) * ay + t * by, (1 - t) * az + t * bz, (1 - t) * aw + t * bw];
  const halfTheta = Math.acos(cosHalfTheta);
  const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
  const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
  return [ax * ratioA + bx * ratioB, ay * ratioA + by * ratioB, az * ratioA + bz * ratioB, aw * ratioA + bw * ratioB];
};
const _quat_to_mat4 = (q) => {
  const x = q[0], y = q[1], z = q[2], w = q[3];
  const x2 = x + x, y2 = y + y, z2 = z + z;
  const xx = x * x2, xy = x * y2, xz = x * z2;
  const yy = y * y2, yz = y * z2, zz = z * z2;
  const wx = w * x2, wy = w * y2, wz = w * z2;
  return [
    1 - (yy + zz), xy + wz, xz - wy, 0,
    xy - wz, 1 - (xx + zz), yz + wx, 0,
    xz + wy, yz - wx, 1 - (xx + yy), 0,
    0, 0, 0, 1
  ];
};
const _prng_hash = (x) => {
  x = x | 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b) | 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b) | 0;
  x = (x ^ (x >>> 16)) | 0;
  return x;
};
const _prng_hash_to_float = (x) => (((_prng_hash(x) | 0) >>> 0) / 4294967295.0);

const _getVar = (ctx, id) => {
  if (ctx.inputs.has(id)) return ctx.inputs.get(id);
  throw new Error("Variable '" + id + "' is not defined");
};

const _buffer_store = (resources, id, idx, val) => {
  const res = resources.get(id);
  if (res && res.data) {
    if (idx < 0 || idx >= res.data.length && idx < 100000) {
      // OOB check omitted for performance in JIT, reliant on validation/tests
    }
    res.data[idx] = val;
    // Mark as dirty on CPU so we know to upload later
    if (!res.flags) res.flags = { cpuDirty: false, gpuDirty: false };
    res.flags.cpuDirty = true;
  }
};

const _buffer_load = (resources, id, idx) => {
  const res = resources.get(id);
  // Throw error on OOB to satisfy conformance checks which emulate WGSL strictness or debug behavior
  if (!res || !res.data) throw new Error("Runtime Error: buffer not found");
  if (idx < 0 || idx >= res.data.length) {
    throw new Error("Runtime Error: buffer_load OOB accessing index " + idx + " of size " + res.data.length);
  }
  return res.data[idx];
};

const _createExecutor = (device, pipelines, precomputedInfos, renderPipelines, resourceInfos = new Map()) => {
  const writeOp = (view, op, val, baseOffset = 0) => {
    if (val === undefined || val === null) return;
    let currentVal = val;
    for (const p of op.path) {
      currentVal = currentVal[p];
      if (currentVal === undefined || currentVal === null) {
        return;
      }
    }

    const offset = baseOffset + op.offset;
    switch (op.op) {
      case 'f32': view.setFloat32(offset, currentVal, true); break;
      case 'i32': view.setInt32(offset, currentVal, true); break;
      case 'u32': view.setUint32(offset, currentVal, true); break;
      case 'vec': {
        const { size, elementType } = op;
        for (let i = 0; i < size; i++) {
          if (elementType === 'i32') view.setInt32(offset + i * 4, currentVal[i], true);
          else if (elementType === 'u32') view.setUint32(offset + i * 4, currentVal[i], true);
          else view.setFloat32(offset + i * 4, currentVal[i], true);
        }
        break;
      }
      case 'mat': {
        const { dim } = op;
        const colStride = dim === 3 ? 16 : dim * 4;
        for (let c = 0; c < dim; c++) {
          const colOffset = offset + c * colStride;
          for (let r = 0; r < dim; r++) {
            view.setFloat32(colOffset + r * 4, currentVal[c * dim + r], true);
          }
        }
        break;
      }
      case 'struct': {
        for (const m of op.members) {
          writeOp(view, m, currentVal, offset);
        }
        break;
      }
      case 'array': {
        const { stride, length, elementOp } = op;
        const count = length === 'runtime' ? currentVal.length : length;
        for (let i = 0; i < count; i++) {
          writeOp(view, elementOp, currentVal[i], offset + i * stride);
        }
        break;
      }
    }
  };

  // Staging buffers for async readbacks
  // Map<ResourceId, { buffer: GPUBuffer, bytesPerRow?: number, type: 'buffer'|'texture' }>
  const activeReadbacks = new Map();

  return {
    async executeShader(funcId, dim, args, resources) {
      const info = precomputedInfos.get(funcId);
      if (!info) throw new Error("Precomputed info not found: " + funcId);
      const pipeline = pipelines.get(funcId);

      const entries = [];
      const normalizedDim = [
        dim[0] || 1,
        dim[1] || 1,
        dim[2] || 1
      ];

      // 1. Inputs
      if (info.inputLayout) {
        const layout = info.inputLayout;
        let requiredSize = layout.totalSize;
        const inputs = { ...args, u_dispatch_size: normalizedDim, output_size: normalizedDim };

        if (layout.hasRuntimeArray && layout.runtimeArray) {
          const arr = inputs[layout.runtimeArray.name];
          if (Array.isArray(arr)) {
            requiredSize = layout.runtimeArray.offset + arr.length * layout.runtimeArray.stride;
          }
        }

        requiredSize = Math.max(Math.ceil(requiredSize / 4) * 4, 16);
        const bufferSize = requiredSize;
        const buffer = new ArrayBuffer(bufferSize);
        const view = new DataView(buffer);

        for (const op of layout.ops) {
          writeOp(view, op, inputs);
        }

        if (layout.runtimeArray) {
          const arr = inputs[layout.runtimeArray.name];
          if (Array.isArray(arr)) {
            const { offset, stride, elementOp } = layout.runtimeArray;
            for (let i = 0; i < arr.length; i++) {
              writeOp(view, elementOp, arr[i], offset + i * stride);
            }
          }
        }

        const inputBuf = device.createBuffer({
          size: bufferSize,
          usage: 128 | 8 // STORAGE | COPY_DST
        });
        device.queue.writeBuffer(inputBuf, 0, buffer);
        entries.push({ binding: info.inputBinding, resource: { buffer: inputBuf } });
      }

      // 2. Resources
      for (const resBind of info.resourceBindings) {
        const state = resources.get(resBind.id);
        if (!state) continue;
        const resInfo = resourceInfos.get(resBind.id);
        _ensureGpuResource(device, state, resInfo);

        // Mark as potentially dirty on GPU since we are computing
        if (!state.flags) state.flags = { cpuDirty: false, gpuDirty: false };
        // We assume write access for storage bindings.
        // Ideally we'd check if it's read-only, but for now be conservative.
        state.flags.gpuDirty = true;

        if (state.def.type === 'texture2d') {
          entries.push({ binding: resBind.binding, resource: state.gpuTexture.createView() });
        } else {
          entries.push({ binding: resBind.binding, resource: { buffer: state.gpuBuffer } });
        }
      }

      const encoder = device.createCommandEncoder();
      const pass = encoder.beginComputePass();
      pass.setPipeline(pipeline);
      if (entries.length > 0) {
        const bindGroup = device.createBindGroup({
          layout: pipeline.getBindGroupLayout(0),
          entries
        });
        pass.setBindGroup(0, bindGroup);
      }
      const wgSize = info.workgroupSize || [16, 16, 1];
      const workgroups = [
        Math.ceil(normalizedDim[0] / wgSize[0]),
        Math.ceil(normalizedDim[1] / wgSize[1]),
        Math.ceil(normalizedDim[2] / wgSize[2])
      ];
      pass.dispatchWorkgroups(workgroups[0], workgroups[1], workgroups[2]);
      pass.end();
      device.queue.submit([encoder.finish()]);
    },

    async executeDraw(targetId, vertexId, fragmentId, count, pipelineDef, resources, args) {
      const key = \`\${vertexId}|\${fragmentId}\`;
      const pipeline = renderPipelines.get(key);
      if (!pipeline) throw new Error("Render pipeline not found: " + key);

      // Use vertex shader info for bindings
      const info = precomputedInfos.get(vertexId);
      if (!info) throw new Error("Precomputed info not found for vertex shader: " + vertexId);

      const targetState = resources.get(targetId);
      if (!targetState) throw new Error("Target resource not found: " + targetId);
      const targetResInfo = resourceInfos.get(targetId);
      _ensureGpuResource(device, targetState, targetResInfo);

      // Target will be written to
      if (!targetState.flags) targetState.flags = { cpuDirty: false, gpuDirty: false };
      targetState.flags.gpuDirty = true;

      const entries = [];

      // Inject output_size for vertex/fragment shaders (render target dimensions)
      const outputSize = [targetState.width, targetState.height, 1];
      const inputArgs = { ...(args || {}), output_size: outputSize };

      // Inputs buffer (global inputs for vertex/fragment shaders)
      if (info.inputLayout && inputArgs) {
        const layout = info.inputLayout;
        let requiredSize = layout.totalSize;

        if (layout.hasRuntimeArray && layout.runtimeArray) {
          const arr = inputArgs[layout.runtimeArray.name];
          if (Array.isArray(arr)) {
            requiredSize = layout.runtimeArray.offset + arr.length * layout.runtimeArray.stride;
          }
        }

        requiredSize = Math.max(Math.ceil(requiredSize / 4) * 4, 16);
        const bufferSize = requiredSize;
        const buffer = new ArrayBuffer(bufferSize);
        const view = new DataView(buffer);

        for (const op of layout.ops) {
          writeOp(view, op, inputArgs);
        }

        if (layout.runtimeArray) {
          const arr = inputArgs[layout.runtimeArray.name];
          if (Array.isArray(arr)) {
            const { offset, stride, elementOp } = layout.runtimeArray;
            for (let i = 0; i < arr.length; i++) {
              writeOp(view, elementOp, arr[i], offset + i * stride);
            }
          }
        }

        const inputBuf = device.createBuffer({
          size: bufferSize,
          usage: 128 | 8 // STORAGE | COPY_DST
        });
        device.queue.writeBuffer(inputBuf, 0, buffer);
        entries.push({ binding: info.inputBinding, resource: { buffer: inputBuf } });
      }

      for (const resBind of info.resourceBindings) {
        if (resBind.id === targetId) continue;
        const state = resources.get(resBind.id);
        if (!state) continue;
        const resInfo = resourceInfos.get(resBind.id);
        _ensureGpuResource(device, state, resInfo);
        if (state.def.type === 'texture2d') {
          entries.push({ binding: resBind.binding, resource: state.gpuTexture.createView() });
        } else {
          entries.push({ binding: resBind.binding, resource: { buffer: state.gpuBuffer } });
        }
      }

      const useLoadOp = pipelineDef.loadOp || 'clear';
      const encoder = device.createCommandEncoder();
      const colorAttachment = {
        view: targetState.gpuTexture.createView(),
        loadOp: useLoadOp,
        storeOp: 'store',
      };
      if (useLoadOp === 'clear') {
        colorAttachment.clearValue = { r: 0, g: 0, b: 0, a: 0 };
      }
      const pass = encoder.beginRenderPass({
        colorAttachments: [colorAttachment]
      });

      pass.setPipeline(pipeline);
      pass.setViewport(0, 0, targetState.width, targetState.height, 0, 1);
      pass.setScissorRect(0, 0, targetState.width, targetState.height);
      if (entries.length > 0) {
        const bindGroup = device.createBindGroup({
          layout: pipeline.getBindGroupLayout(0),
          entries
        });
        pass.setBindGroup(0, bindGroup);
      }
      pass.draw(count);
      pass.end();
      device.queue.submit([encoder.finish()]);
    },

    executeSyncToCpu(resourceId, resources) {
      const state = resources.get(resourceId);
      if (!state) return;
      // Only readback if GPU is dirty
      if (!state.flags || !state.flags.gpuDirty) return;

      const encoder = device.createCommandEncoder();

      if ((state.def.type === 'buffer' || state.def.type === 'atomic_counter') && state.gpuBuffer) {
        const size = state.gpuBuffer.size;
        const staging = device.createBuffer({
          size: size,
          usage: 1 | 8 // MAP_READ | COPY_DST
        });
        encoder.copyBufferToBuffer(state.gpuBuffer, 0, staging, 0, size);
        activeReadbacks.set(resourceId, { staging, type: 'buffer' });
      } else if (state.def.type === 'texture2d' && state.gpuTexture) {
        const bytesPerPixel = 4;
        const bytesPerRow = Math.ceil((state.width * bytesPerPixel) / 256) * 256;
        const staging = device.createBuffer({
          size: bytesPerRow * state.height,
          usage: 1 | 8 // MAP_READ | COPY_DST
        });
        encoder.copyTextureToBuffer(
          { texture: state.gpuTexture },
          { buffer: staging, bytesPerRow },
          [state.width, state.height, 1]
        );
        activeReadbacks.set(resourceId, { staging, type: 'texture', bytesPerRow });
      }

      device.queue.submit([encoder.finish()]);

      // Start async mapping (don't await here)
      const pending = activeReadbacks.get(resourceId);
      if (pending) {
        pending.promise = pending.staging.mapAsync(1);
      }
    },

    async executeWaitCpuSync(resourceId, resources) {
      const pending = activeReadbacks.get(resourceId);
      if (!pending) return; // Maybe already synced or not dirty

      await pending.promise;

      const state = resources.get(resourceId);
      const range = pending.staging.getMappedRange();

      if (pending.type === 'buffer') {
        const info = resourceInfos.get(resourceId);
        const taType = info?.typedArray || 'Float32Array';
        let rawData;
        if (taType === 'Uint32Array') rawData = new Uint32Array(range);
        else if (taType === 'Int32Array') rawData = new Int32Array(range);
        else if (taType === 'Uint8Array') rawData = new Uint8Array(range);
        else rawData = new Float32Array(range);

        const componentCount = info?.componentCount || 1;
        const flatData = Array.from(rawData).slice(0, state.width * componentCount);

        if (componentCount > 1) {
          const structured = [];
          for (let i = 0; i < state.width; i++) {
            structured.push(flatData.slice(i * componentCount, (i + 1) * componentCount));
          }
          state.data = structured;
        } else {
          state.data = flatData;
        }
      } else {
        const bytesPerRow = pending.bytesPerRow;
        const data = new Uint8Array(range);
        const reshaped = [];
        for (let y = 0; y < state.height; y++) {
          const rowStart = y * bytesPerRow;
          for (let x = 0; x < state.width; x++) {
            const start = rowStart + (x * 4);
            reshaped.push(Array.from(data.slice(start, start + 4)).map(v => v / 255.0)); // Normalize to 0-1
          }
        }
        state.data = reshaped;
      }

      pending.staging.unmap();
      pending.staging.destroy();
      activeReadbacks.delete(resourceId);

      if (state.flags) {
        state.flags.gpuDirty = false;
        state.flags.cpuDirty = false;
      }
    },

    executeCopyBuffer(srcId, dstId, srcOffset, dstOffset, count, resources) {
      const src = resources.get(srcId);
      const dst = resources.get(dstId);
      if (!src || !dst) return;

      const srcInfo = resourceInfos.get(srcId);
      const dstInfo = resourceInfos.get(dstId);

      // GPU path: only when GPU resources already exist (from prior dispatch)
      const srcHasGpu = src.gpuBuffer && src.flags && src.flags.gpuDirty;
      const dstHasGpu = dst.gpuBuffer;
      if (srcInfo && dstInfo && (srcHasGpu || dstHasGpu)) {
        _ensureGpuResource(device, src, srcInfo);
        _ensureGpuResource(device, dst, dstInfo);

        if (src.gpuBuffer && dst.gpuBuffer) {
          const srcCC = srcInfo.componentCount || 1;
          const dstCC = dstInfo.componentCount || 1;
          const srcElems = Math.floor(src.gpuBuffer.size / (srcCC * 4));
          const dstElems = Math.floor(dst.gpuBuffer.size / (dstCC * 4));
          const maxFromSrc = srcElems - srcOffset;
          const maxToDst = dstElems - dstOffset;
          let actualCount = Math.min(maxFromSrc, maxToDst);
          if (count !== Infinity && count >= 0) actualCount = Math.min(actualCount, count);
          if (actualCount <= 0) return;

          const srcByteOff = srcOffset * srcCC * 4;
          const dstByteOff = dstOffset * dstCC * 4;
          const byteCount = actualCount * srcCC * 4;

          const encoder = device.createCommandEncoder();
          encoder.copyBufferToBuffer(src.gpuBuffer, srcByteOff, dst.gpuBuffer, dstByteOff, byteCount);
          device.queue.submit([encoder.finish()]);

          if (!dst.flags) dst.flags = { cpuDirty: false, gpuDirty: false };
          dst.flags.gpuDirty = true;
          return;
        }
      }

      // CPU fallback
      if (!src.data || !dst.data) return;
      const srcLen = src.data.length;
      const dstLen = dst.data.length;
      const maxFromSrc = srcLen - srcOffset;
      const maxToDst = dstLen - dstOffset;
      let actualCount = Math.min(maxFromSrc, maxToDst);
      if (count !== Infinity && count >= 0) actualCount = Math.min(actualCount, count);
      for (let i = 0; i < actualCount; i++) {
        dst.data[dstOffset + i] = src.data[srcOffset + i];
      }
    },

    executeCopyTexture(srcId, dstId, srcRect, dstRect, sample, alpha, normalized, resources) {
      const src = resources.get(srcId);
      const dst = resources.get(dstId);
      if (!src || !dst) return;

      const srcInfo = resourceInfos.get(srcId);
      const dstInfo = resourceInfos.get(dstId);

      // Resolve pixel rects
      let sx = 0, sy = 0, sw = src.width, sh = src.height;
      let dx = 0, dy = 0, dw = dst.width, dh = dst.height;
      if (srcRect) {
        if (normalized) {
          sx = Math.floor(srcRect[0] * src.width); sy = Math.floor(srcRect[1] * src.height);
          sw = Math.floor(srcRect[2] * src.width); sh = Math.floor(srcRect[3] * src.height);
        } else {
          sx = Math.floor(srcRect[0]); sy = Math.floor(srcRect[1]);
          sw = Math.floor(srcRect[2]); sh = Math.floor(srcRect[3]);
        }
      }
      if (dstRect) {
        if (normalized) {
          dx = Math.floor(dstRect[0] * dst.width); dy = Math.floor(dstRect[1] * dst.height);
          dw = Math.floor(dstRect[2] * dst.width); dh = Math.floor(dstRect[3] * dst.height);
        } else {
          dx = Math.floor(dstRect[0]); dy = Math.floor(dstRect[1]);
          dw = Math.floor(dstRect[2]); dh = Math.floor(dstRect[3]);
        }
      }

      if (alpha <= 0) return;

      const isSimpleCopy = (sw === dw && sh === dh && alpha >= 1.0);

      // GPU path: only when GPU resources already exist (from prior dispatch)
      const srcHasGpu = src.gpuTexture && src.flags && src.flags.gpuDirty;
      const dstHasGpu = dst.gpuTexture;

      // GPU path: simple blit (no scaling, no alpha blending)
      if (srcInfo && dstInfo && isSimpleCopy && (srcHasGpu || dstHasGpu)) {
        _ensureGpuResource(device, src, srcInfo);
        _ensureGpuResource(device, dst, dstInfo);

        if (src.gpuTexture && dst.gpuTexture) {
          const copyW = Math.min(sw, src.width - sx, dst.width - dx);
          const copyH = Math.min(sh, src.height - sy, dst.height - dy);
          if (copyW <= 0 || copyH <= 0) return;

          const encoder = device.createCommandEncoder();
          encoder.copyTextureToTexture(
            { texture: src.gpuTexture, origin: [sx, sy, 0] },
            { texture: dst.gpuTexture, origin: [dx, dy, 0] },
            [copyW, copyH, 1]
          );
          device.queue.submit([encoder.finish()]);

          if (!dst.flags) dst.flags = { cpuDirty: false, gpuDirty: false };
          dst.flags.gpuDirty = true;
          return;
        }
      }

      // GPU path: complex copy (scaling or alpha < 1.0) via compute shader
      if (srcInfo && dstInfo && !isSimpleCopy && (srcHasGpu || dstHasGpu)) {
        _ensureGpuResource(device, src, srcInfo);
        _ensureGpuResource(device, dst, dstInfo);

        if (src.gpuTexture && dst.gpuTexture) {
          const dstFormat = dstInfo.format || 'rgba8unorm';
          const needsAlphaBlend = alpha < 1.0;
          const sampleMode = (sample === 'bilinear') ? 1 : 0;

          // Get or create the copy compute pipeline
          const pipelineKey = \`__copy_tex_\${dstFormat}\`;
          if (!pipelines.has(pipelineKey)) {
            const shaderCode = \`
struct CopyParams {
  src_rect: vec4<f32>,
  dst_rect: vec4<f32>,
  alpha: f32,
  sample_mode: u32,
  src_dims: vec2<f32>,
}

@group(0) @binding(0) var src_tex: texture_2d<f32>;
@group(0) @binding(1) var orig_dst_tex: texture_2d<f32>;
@group(0) @binding(2) var<uniform> params: CopyParams;
@group(0) @binding(3) var dst_tex: texture_storage_2d<\${dstFormat}, write>;

@compute @workgroup_size(16, 16, 1)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let dst_x = i32(params.dst_rect.x) + i32(gid.x);
  let dst_y = i32(params.dst_rect.y) + i32(gid.y);
  if (gid.x >= u32(params.dst_rect.z) || gid.y >= u32(params.dst_rect.w)) { return; }

  // Map dst pixel to src coordinate
  let u = params.src_rect.x + (f32(gid.x) + 0.5) * params.src_rect.z / params.dst_rect.z;
  let v = params.src_rect.y + (f32(gid.y) + 0.5) * params.src_rect.w / params.dst_rect.w;

  var pixel: vec4<f32>;
  if (params.sample_mode == 1u) {
    // Bilinear sampling
    let tx = u - 0.5;
    let ty = v - 0.5;
    let x0 = i32(floor(tx));
    let y0 = i32(floor(ty));
    let fx = tx - floor(tx);
    let fy = ty - floor(ty);
    let sdims = vec2<i32>(params.src_dims);
    let cx00 = clamp(vec2<i32>(x0, y0), vec2<i32>(0), sdims - vec2<i32>(1));
    let cx10 = clamp(vec2<i32>(x0 + 1, y0), vec2<i32>(0), sdims - vec2<i32>(1));
    let cx01 = clamp(vec2<i32>(x0, y0 + 1), vec2<i32>(0), sdims - vec2<i32>(1));
    let cx11 = clamp(vec2<i32>(x0 + 1, y0 + 1), vec2<i32>(0), sdims - vec2<i32>(1));
    let s00 = textureLoad(src_tex, cx00, 0);
    let s10 = textureLoad(src_tex, cx10, 0);
    let s01 = textureLoad(src_tex, cx01, 0);
    let s11 = textureLoad(src_tex, cx11, 0);
    let top = s00 * (1.0 - fx) + s10 * fx;
    let bot = s01 * (1.0 - fx) + s11 * fx;
    pixel = top * (1.0 - fy) + bot * fy;
  } else {
    // Nearest sampling
    let ix = clamp(i32(floor(u)), 0, i32(params.src_dims.x) - 1);
    let iy = clamp(i32(floor(v)), 0, i32(params.src_dims.y) - 1);
    pixel = textureLoad(src_tex, vec2<i32>(ix, iy), 0);
  }

  if (params.alpha < 1.0) {
    // Porter-Duff source-over compositing
    let existing = textureLoad(orig_dst_tex, vec2<i32>(dst_x, dst_y), 0);
    let srcA = pixel.a * params.alpha;
    let dstA = existing.a;
    let outA = srcA + dstA * (1.0 - srcA);
    var out_color: vec4<f32>;
    if (outA < 1e-5) {
      out_color = vec4<f32>(0.0, 0.0, 0.0, 0.0);
    } else {
      out_color = vec4<f32>(
        (pixel.r * srcA + existing.r * dstA * (1.0 - srcA)) / outA,
        (pixel.g * srcA + existing.g * dstA * (1.0 - srcA)) / outA,
        (pixel.b * srcA + existing.b * dstA * (1.0 - srcA)) / outA,
        outA
      );
    }
    textureStore(dst_tex, vec2<i32>(dst_x, dst_y), out_color);
  } else {
    textureStore(dst_tex, vec2<i32>(dst_x, dst_y), pixel);
  }
}
\`;
            const module = device.createShaderModule({ code: shaderCode });
            const p = device.createComputePipeline({
              layout: 'auto',
              compute: { module, entryPoint: 'main' }
            });
            pipelines.set(pipelineKey, p);
          }
          const copyPipeline = pipelines.get(pipelineKey);

          // Create uniform buffer for CopyParams
          const paramsBuffer = device.createBuffer({ size: 48, usage: 64 | 8 }); // UNIFORM | COPY_DST
          const paramsData = new Float32Array([
            sx, sy, sw, sh,    // src_rect
            dx, dy, dw, dh,    // dst_rect
            alpha, sampleMode, // alpha, sample_mode (u32 reinterpreted)
            src.width, src.height // src_dims
          ]);
          // Correctly write sample_mode as u32
          const paramsView = new DataView(paramsData.buffer);
          paramsView.setUint32(9 * 4, sampleMode, true);
          device.queue.writeBuffer(paramsBuffer, 0, paramsData);

          // For alpha blending, we need the original dst texture content
          let origDstTexture = src.gpuTexture; // dummy, won't be read if alpha >= 1.0
          if (needsAlphaBlend) {
            // Copy current dst to a temp texture for reading
            origDstTexture = device.createTexture({
              size: [dst.width, dst.height, 1],
              format: dstFormat,
              usage: 0x1F // all usages
            });
            const enc = device.createCommandEncoder();
            enc.copyTextureToTexture(
              { texture: dst.gpuTexture },
              { texture: origDstTexture },
              [dst.width, dst.height, 1]
            );
            device.queue.submit([enc.finish()]);
          }

          const bindGroup = device.createBindGroup({
            layout: copyPipeline.getBindGroupLayout(0),
            entries: [
              { binding: 0, resource: src.gpuTexture.createView() },
              { binding: 1, resource: origDstTexture.createView() },
              { binding: 2, resource: { buffer: paramsBuffer } },
              { binding: 3, resource: dst.gpuTexture.createView() }
            ]
          });

          const encoder = device.createCommandEncoder();
          const pass = encoder.beginComputePass();
          pass.setPipeline(copyPipeline);
          pass.setBindGroup(0, bindGroup);
          pass.dispatchWorkgroups(Math.ceil(dw / 16), Math.ceil(dh / 16), 1);
          pass.end();
          device.queue.submit([encoder.finish()]);

          if (needsAlphaBlend) {
            origDstTexture.destroy();
          }
          paramsBuffer.destroy();

          if (!dst.flags) dst.flags = { cpuDirty: false, gpuDirty: false };
          dst.flags.gpuDirty = true;
          return;
        }
      }

      // CPU fallback
      if (!src.data || !dst.data) return;

      const getSrcPixel = (px, py) => {
        const cx = Math.max(0, Math.min(src.width - 1, px));
        const cy = Math.max(0, Math.min(src.height - 1, py));
        const p = src.data[cy * src.width + cx];
        return Array.isArray(p) ? p : [p, 0, 0, 1];
      };

      const sampleBilinear = (u, v) => {
        const tx = u - 0.5, ty = v - 0.5;
        const x0 = Math.floor(tx), y0 = Math.floor(ty);
        const fx = tx - x0, fy = ty - y0;
        const s00 = getSrcPixel(x0, y0);
        const s10 = getSrcPixel(x0 + 1, y0);
        const s01 = getSrcPixel(x0, y0 + 1);
        const s11 = getSrcPixel(x0 + 1, y0 + 1);
        const r = [0, 0, 0, 0];
        for (let c = 0; c < 4; c++) {
          const top = s00[c] * (1 - fx) + s10[c] * fx;
          const bot = s01[c] * (1 - fx) + s11[c] * fx;
          r[c] = top * (1 - fy) + bot * fy;
        }
        return r;
      };

      const needsSampling = sample !== null && (sw !== dw || sh !== dh);

      for (let py = 0; py < dh; py++) {
        for (let px = 0; px < dw; px++) {
          const dstX = dx + px;
          const dstY = dy + py;
          if (dstX < 0 || dstX >= dst.width || dstY < 0 || dstY >= dst.height) continue;

          let pixel;
          if (needsSampling) {
            const srcU = sx + (px + 0.5) * sw / dw;
            const srcV = sy + (py + 0.5) * sh / dh;
            if (sample === 'bilinear') {
              pixel = sampleBilinear(srcU, srcV);
            } else {
              pixel = getSrcPixel(Math.floor(srcU), Math.floor(srcV));
            }
          } else {
            const srcX = sx + Math.min(px, sw - 1);
            const srcY = sy + Math.min(py, sh - 1);
            pixel = getSrcPixel(srcX, srcY);
          }

          const dstIdx = dstY * dst.width + dstX;
          if (alpha >= 1.0) {
            dst.data[dstIdx] = [...pixel];
          } else {
            const existing = dst.data[dstIdx];
            const dstPixel = Array.isArray(existing) ? existing : [existing, 0, 0, 1];
            const srcA = pixel[3] * alpha;
            const dstA = dstPixel[3];
            const outA = srcA + dstA * (1 - srcA);
            const out = [0, 0, 0, outA];
            if (outA < 1e-5) {
              out[0] = out[1] = out[2] = 0;
            } else {
              for (let c = 0; c < 3; c++) {
                out[c] = (pixel[c] * srcA + dstPixel[c] * dstA * (1 - srcA)) / outA;
              }
            }
            dst.data[dstIdx] = out;
          }
        }
      }
    }
  };
};

const _ensureGpuResource = (device, state, info) => {
  if (!info) return;

  if (!state.flags) state.flags = { cpuDirty: true, gpuDirty: false };

  // 1. Create/Resize GPU resource if needed
  if (info.type === 'texture2d') {
    if (!state.gpuTexture || state.gpuTexture.width !== state.width || state.gpuTexture.height !== state.height) {
      if (state.gpuTexture) state.gpuTexture.destroy();
      state.gpuTexture = device.createTexture({
        size: [state.width, state.height, 1],
        format: info.format || 'rgba8unorm',
        usage: 0x1F // RENDER_ATTACHMENT | TEXTURE_BINDING | STORAGE_BINDING | COPY_SRC | COPY_DST
      });
      // New texture needs data
      state.flags.cpuDirty = true;
    }
  } else {
    // Buffer
    const { componentCount } = info;
    const byteSize = state.width * componentCount * 4;
    const alignedSize = Math.max(Math.ceil(byteSize / 4) * 4, 16);

    if (!state.gpuBuffer || state.gpuBuffer.size < alignedSize) {
      const oldBuffer = state.gpuBuffer;
      const preserveGpu = state._preserveGpuOnResize && oldBuffer;
      delete state._preserveGpuOnResize;

      state.gpuBuffer = device.createBuffer({
        size: alignedSize,
        usage: 128 | 8 | 4 // STORAGE | COPY_DST | COPY_SRC
      });

      if (preserveGpu) {
        // GPU-to-GPU copy: preserve existing data across resize
        const encoder = device.createCommandEncoder();
        const copySize = Math.min(oldBuffer.size, alignedSize);
        encoder.copyBufferToBuffer(oldBuffer, 0, state.gpuBuffer, 0, copySize);
        device.queue.submit([encoder.finish()]);
        oldBuffer.destroy();
      } else {
        if (oldBuffer) oldBuffer.destroy();
        state.flags.cpuDirty = true;
      }
    } else {
      // Buffer is large enough — clean up flag if set
      delete state._preserveGpuOnResize;
    }
  }

  // 2. Upload if CPU is dirty
  if (state.flags.cpuDirty && state.data) {
    if (info.type === 'texture2d') {
      const { typedArray, componentCount } = info;
      const flatSize = state.width * state.height * componentCount;
      const raw = typedArray === 'Float32Array' ? new Float32Array(flatSize) : new Uint8Array(flatSize);

      let ptr = 0;
      const src = state.data;

      const push = (v) => {
        if (Array.isArray(v)) {
          for (let i = 0; i < v.length; i++) push(v[i]);
        } else {
          raw[ptr++] = info.typedArray === 'Uint8Array' ? v * 255 : v;
        }
      };

      for (let i = 0; i < src.length; i++) push(src[i]);

      device.queue.writeTexture(
        { texture: state.gpuTexture },
        raw,
        { bytesPerRow: state.width * (typedArray === 'Float32Array' ? 4 : 1) * componentCount },
        { width: state.width, height: state.height }
      );
    } else {
      const { componentCount } = info;
      const flatSize = state.width * componentCount;
      const raw = info.typedArray === 'Float32Array' ? new Float32Array(flatSize) :
        info.typedArray === 'Uint32Array' ? new Uint32Array(flatSize) : new Int32Array(flatSize);

      let ptr = 0;
      const push = (v) => {
        if (Array.isArray(v)) {
          for (let i = 0; i < v.length; i++) push(v[i]);
        } else {
          if (ptr < raw.length) raw[ptr++] = v;
        }
      };

      for (let i = 0; i < state.data.length; i++) push(state.data[i]);
      device.queue.writeBuffer(state.gpuBuffer, 0, raw);
    }
    state.flags.cpuDirty = false;
  }
};
`;class Nu{constructor(e){this.structLayoutCache=new Map,this.structs=new Map(e.map(n=>[n.id.toLowerCase(),n]))}calculateBlockLayout(e,n=!0,r="std430"){let o=[...e];n&&o.sort((d,m)=>{const h=this.isRuntimeArray(d.type),c=this.isRuntimeArray(m.type);if(h&&!c)return 1;if(!h&&c)return-1;const u=this.getAlignment(m.type,r)-this.getAlignment(d.type,r);return u!==0?u:d.id.localeCompare(m.id)});let a=0,i=16;const s=[];for(const d of o){const m=this.getAlignment(d.type,r),h=this.getSize(d.type,r);a=Math.ceil(a/m)*m,s.push({name:d.id,type:d.type,offset:a,size:h,align:m}),a+=h,i=Math.max(i,m)}const l=Math.ceil(a/i)*i,f=o.length>0&&this.isRuntimeArray(o[o.length-1].type);return{fields:s,totalSize:Math.max(16,l),alignment:i,hasRuntimeArray:f}}getStructLayout(e,n="std430"){const r=e.toLowerCase(),o=`${r}:${n}`;if(this.structLayoutCache.has(o))return this.structLayoutCache.get(o);const a=this.structs.get(r);if(!a)return{size:0,alignment:16,members:[]};let i=0,s=n==="std140"?16:0;const l=[];for(const m of a.members){const h=this.getAlignment(m.type,n),c=this.getSize(m.type,n);i=Math.ceil(i/h)*h,l.push({name:m.name,type:m.type,offset:i,size:c,align:h}),i+=c,s=Math.max(s,h)}const d={size:Math.ceil(i/s)*s,alignment:s,members:l};return this.structLayoutCache.set(o,d),d}getAlignment(e,n="std430"){const r=e.toLowerCase();if(["f32","i32","float","int","bool"].some(a=>r===a))return 4;if(r.startsWith("mat")||r.startsWith("float")&&r.includes("x"))return 16;if(["vec2","float2","int2"].some(a=>r.includes(a)))return 8;if(["vec3","vec4","float3","float4","int3","int4","quat"].some(a=>r.includes(a)))return 16;if(r.endsWith("]")||r.startsWith("array<")){if(n==="std140")return 16;let a="float";return r.startsWith("array<")?a=r.substring(6,r.length-1).split(",")[0].trim():a=r.substring(0,r.indexOf("[")),this.getAlignment(a,n)}if(this.structs.get(r)){const a=this.getStructLayout(e,n);return n==="std140"?Math.ceil(a.alignment/16)*16:a.alignment}return 16}getSize(e,n="std430"){const r=e.toLowerCase();if(["f32","i32","float","int","bool"].some(a=>r===a))return 4;if(r.endsWith("]")||r.startsWith("array<")){let a="float",i=0;if(r.startsWith("array<")){const d=r.substring(6,r.length-1).split(",");a=d[0].trim(),i=d.length>1?parseInt(d[1].trim()):0}else a=r.substring(0,r.indexOf("["));const s=this.getSize(a,n),l=this.getAlignment(a,n),f=Math.ceil(s/(n==="std140"?16:l))*(n==="std140"?16:l);return i*f}return r.includes("mat3")||r.includes("float3x3")?48:r.includes("mat4")||r.includes("float4x4")?64:["vec2","float2","int2"].some(a=>r.includes(a))?8:["vec3","float3","int3"].some(a=>r.includes(a))?12:["vec4","float4","int4","quat"].some(a=>r.includes(a))?16:this.structs.get(r)?this.getStructLayout(e,n).size:16}isRuntimeArray(e){const n=e.toLowerCase();return!!(n.includes("[]")||n.startsWith("array<")&&!n.includes(","))}getComponentCount(e){const n=e.toLowerCase();return n.includes("float4")||n.includes("int4")||n==="quat"||n.includes("vec4")?4:n.includes("float3")||n.includes("int3")||n.includes("vec3")?3:n.includes("float2")||n.includes("int2")||n.includes("vec2")?2:n.includes("mat4")?16:n.includes("mat3")?9:(n.includes("[")||n.startsWith("array<"),1)}}const ax=`fn safe_f32_to_i32(v: f32) -> i32 {
  if (v >= 2147483648.0) { return bitcast<i32>(u32(v)); }
  return i32(v);
}
fn get_nan() -> f32 { var u = 0x7fc00000u; return bitcast<f32>(u); }
fn get_inf() -> f32 { var u = 0x7f800000u; return bitcast<f32>(u); }
fn get_neginf() -> f32 { var u = 0xff800000u; return bitcast<f32>(u); }
fn mat4_from_array_i32(arr: array<i32, 16>) -> mat4x4<f32> {
  return mat4x4<f32>(
    f32(arr[0]), f32(arr[1]), f32(arr[2]), f32(arr[3]),
    f32(arr[4]), f32(arr[5]), f32(arr[6]), f32(arr[7]),
    f32(arr[8]), f32(arr[9]), f32(arr[10]), f32(arr[11]),
    f32(arr[12]), f32(arr[13]), f32(arr[14]), f32(arr[15])
  );
}
fn mat3_inverse(m: mat3x3<f32>) -> mat3x3<f32> {
  let a00 = m[0][0]; let a01 = m[0][1]; let a02 = m[0][2];
  let a10 = m[1][0]; let a11 = m[1][1]; let a12 = m[1][2];
  let a20 = m[2][0]; let a21 = m[2][1]; let a22 = m[2][2];
  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a01 + a02 * a21;
  let b21 = a12 * a01 - a02 * a11;
  let det = a00 * b01 + a10 * b11 + a20 * b21;
  if (det == 0.0) { return mat3x3<f32>(0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0); }
  let invDet = 1.0 / det;
  return mat3x3<f32>(
    b01 * invDet,
    (-a22 * a10 + a12 * a20) * invDet,
    (a21 * a10 - a11 * a20) * invDet,
    b11 * invDet,
    (a22 * a00 - a02 * a20) * invDet,
    (-a21 * a00 + a01 * a20) * invDet,
    b21 * invDet,
    (-a12 * a00 + a02 * a10) * invDet,
    (a11 * a00 - a01 * a10) * invDet
  );
}

fn mat4_inverse(m: mat4x4<f32>) -> mat4x4<f32> {
  let a00 = m[0][0]; let a01 = m[0][1]; let a02 = m[0][2]; let a03 = m[0][3];
  let a10 = m[1][0]; let a11 = m[1][1]; let a12 = m[1][2]; let a13 = m[1][3];
  let a20 = m[2][0]; let a21 = m[2][1]; let a22 = m[2][2]; let a23 = m[2][3];
  let a30 = m[3][0]; let a31 = m[3][1]; let a32 = m[3][2]; let a33 = m[3][3];
  let b00 = a00 * a11 - a01 * a10; let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10; let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11; let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30; let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30; let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31; let b11 = a22 * a33 - a23 * a32;
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (det == 0.0) { return mat4x4<f32>(0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0); }
  let invDet = 1.0 / det;
  return mat4x4<f32>(
    (a11 * b11 - a12 * b10 + a13 * b09) * invDet,
    (a02 * b10 - a01 * b11 - a03 * b09) * invDet,
    (a31 * b05 - a32 * b04 + a33 * b03) * invDet,
    (a22 * b04 - a21 * b05 - a23 * b03) * invDet,
    (a12 * b08 - a10 * b11 - a13 * b07) * invDet,
    (a00 * b11 - a02 * b08 + a03 * b07) * invDet,
    (a32 * b02 - a30 * b05 - a33 * b01) * invDet,
    (a20 * b05 - a22 * b02 + a23 * b01) * invDet,
    (a10 * b10 - a11 * b08 + a13 * b06) * invDet,
    (a01 * b08 - a00 * b10 - a03 * b06) * invDet,
    (a30 * b04 - a31 * b02 + a33 * b00) * invDet,
    (a21 * b02 - a20 * b04 - a23 * b00) * invDet,
    (a11 * b07 - a10 * b09 - a12 * b06) * invDet,
    (a00 * b09 - a01 * b07 + a02 * b06) * invDet,
    (a31 * b01 - a30 * b03 - a32 * b00) * invDet,
    (a20 * b03 - a21 * b01 + a22 * b00) * invDet
  );
}
fn is_nan(v: f32) -> bool {
  return (bitcast<u32>(v) & 0x7fffffffu) > 0x7f800000u;
}
fn is_inf(v: f32) -> bool {
  return (bitcast<u32>(v) & 0x7fffffffu) == 0x7f800000u;
}
fn is_finite(v: f32) -> bool {
  return (bitcast<u32>(v) & 0x7fffffffu) < 0x7f800000u;
}
fn is_nan_vec2(v: vec2<f32>) -> vec2<bool> { return (bitcast<vec2<u32>>(v) & vec2<u32>(0x7fffffffu)) > vec2<u32>(0x7f800000u); }
fn is_nan_vec3(v: vec3<f32>) -> vec3<bool> { return (bitcast<vec3<u32>>(v) & vec3<u32>(0x7fffffffu)) > vec3<u32>(0x7f800000u); }
fn is_nan_vec4(v: vec4<f32>) -> vec4<bool> { return (bitcast<vec4<u32>>(v) & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u); }

fn is_inf_vec2(v: vec2<f32>) -> vec2<bool> { return (bitcast<vec2<u32>>(v) & vec2<u32>(0x7fffffffu)) == vec2<u32>(0x7f800000u); }
fn is_inf_vec3(v: vec3<f32>) -> vec3<bool> { return (bitcast<vec3<u32>>(v) & vec3<u32>(0x7fffffffu)) == vec3<u32>(0x7f800000u); }
fn is_inf_vec4(v: vec4<f32>) -> vec4<bool> { return (bitcast<vec4<u32>>(v) & vec4<u32>(0x7fffffffu)) == vec4<u32>(0x7f800000u); }

fn is_finite_vec2(v: vec2<f32>) -> vec2<bool> { return (bitcast<vec2<u32>>(v) & vec2<u32>(0x7fffffffu)) < vec2<u32>(0x7f800000u); }
fn is_finite_vec3(v: vec3<f32>) -> vec3<bool> { return (bitcast<vec3<u32>>(v) & vec3<u32>(0x7fffffffu)) < vec3<u32>(0x7f800000u); }
fn is_finite_vec4(v: vec4<f32>) -> vec4<bool> { return (bitcast<vec4<u32>>(v) & vec4<u32>(0x7fffffffu)) < vec4<u32>(0x7f800000u); }

fn flush_subnormal(v: f32) -> f32 {
  let u = bitcast<u32>(v);
  if ((u & 0x7f800000u) == 0u && (u & 0x007fffffu) != 0u) {
    return 0.0;
  }
  return v;
}
fn get_mantissa(v: f32) -> f32 {
  return frexp(v).fract;
}
fn get_exponent(v: f32) -> f32 {
  return f32(frexp(v).exp);
}

fn quat_from_axis_angle(axis: vec3<f32>, angle: f32) -> vec4<f32> {
  let half_angle = angle * 0.5;
  let s = sin(half_angle);
  let c = cos(half_angle);
  return vec4<f32>(axis * s, c);
}
fn quat_mul(a: vec4<f32>, b: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(
    a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
    a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
    a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
    a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z
  );
}
fn quat_slerp(a: vec4<f32>, b: vec4<f32>, t: f32) -> vec4<f32> {
  let cos_half_theta = dot(a, b);
  if (abs(cos_half_theta) >= 1.0) { return a; }
  let sin_half_theta = sqrt(1.0 - cos_half_theta * cos_half_theta);
  if (abs(sin_half_theta) < 0.001) { return vec4<f32>((1.0 - t) * a + t * b); }
  let half_theta = acos(cos_half_theta);
  let ratio_a = sin((1.0 - t) * half_theta) / sin_half_theta;
  let ratio_b = sin(t * half_theta) / sin_half_theta;
  return ratio_a * a + ratio_b * b;
}
fn quat_rotate(v: vec3<f32>, q: vec4<f32>) -> vec3<f32> {
  let t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}
fn quat_to_mat4(q: vec4<f32>) -> mat4x4<f32> {
  let x2 = q.x + q.x; let y2 = q.y + q.y; let z2 = q.z + q.z;
  let xx = q.x * x2; let xy = q.x * y2; let xz = q.x * z2;
  let yy = q.y * y2; let yz = q.y * z2; let zz = q.z * z2;
  let wx = q.w * x2; let wy = q.w * y2; let wz = q.w * z2;
  return mat4x4<f32>(
    1.0 - (yy + zz), xy + wz, xz - wy, 0.0,
    xy - wz, 1.0 - (xx + zz), yz + wx, 0.0,
    xz + wy, yz - wx, 1.0 - (xx + yy), 0.0,
    0.0, 0.0, 0.0, 1.0
  );
}
fn color_mix_impl(dst: vec4<f32>, src: vec4<f32>) -> vec4<f32> {
  let outA = src.a + dst.a * (1.0 - src.a);
  if (outA < 1e-6) { return vec4<f32>(0.0); }
  return vec4<f32>((src.rgb * src.a + dst.rgb * dst.a * (1.0 - src.a)) / outA, outA);
}

fn _prng_hash(x_in: i32) -> i32 {
  var x = bitcast<u32>(x_in);
  x ^= x >> 16u;
  x *= 0x45d9f3bu;
  x ^= x >> 16u;
  x *= 0x45d9f3bu;
  x ^= x >> 16u;
  return bitcast<i32>(x);
}
fn _prng_hash_to_float(x: i32) -> f32 {
  return f32(bitcast<u32>(_prng_hash(x))) / 4294967295.0;
}
`;class gn{constructor(){this.allUsedBuiltins=new Set}compileFunctions(e,n,r={},o){r.entryPointId=n,o&&(r.fullIr=o);const a=e.find(D=>D.id===n);if(!a)throw new Error(`Entry point function '${n}' not found`);r.entryPointId=n,this.allUsedBuiltins=r.usedBuiltins||new Set,r.usedBuiltins||e.forEach(D=>{D.nodes.forEach(J=>{J.op==="builtin_get"&&this.allUsedBuiltins.add(J.name)})}),this.allUsedBuiltins.has("normalized_global_invocation_id")&&this.allUsedBuiltins.add("global_invocation_id"),e.forEach(D=>{D.nodes.some(J=>J.op==="prng_make")&&this.allUsedBuiltins.add("prng_seed")});const i={version:"1.0",meta:{name:"generated"},entryPoint:n,inputs:[],functions:e,structs:[],...o,resources:Array.from(r.resourceDefs?.values()||o?.resources||[])},s=[],l=[];this.generateStructs(i,s,r);const f=new Set,d=[n];for(;d.length>0;){const D=d.pop();if(f.has(D))continue;f.add(D);const J=e.find(j=>j.id===D);J&&J.nodes.forEach(j=>{j.op==="call_func"&&typeof j.func=="string"&&d.push(j.func)})}const m=new Set,h=new Set,c=new Set,u=e.filter(D=>f.has(D.id));for(const D of u)gn.findUsedResources(D,i).forEach(j=>m.add(j)),D.nodes.forEach(j=>{j.op==="texture_store"&&typeof j.tex=="string"&&h.add(j.tex),(j.op==="texture_sample"||j.op==="texture_load")&&typeof j.tex=="string"&&c.add(j.tex)});if(r.resourceBindings){const D=new Map;r.resourceBindings.forEach((J,j)=>{m.has(j)&&D.set(j,J)}),r.resourceBindings=D}r.storageResources=h,r.sampledResources=c;for(const D of u)this.emitFunction(D,D.id===n,l,r,i,u),l.push("");this.emitTextureSamplers(s,r,i,m);const p=[];p.push('#import "intrinsics.wgsl"'),p.push(""),this.validateRecursion(i.functions||[]),(i.globals&&i.globals.length>0||r.varMap&&r.varMap.size>0)&&(r.globalBufferBinding===void 0&&(r.globalBufferBinding=0),p.push("struct Globals { data: array<f32> }"),p.push(`@group(0) @binding(${r.globalBufferBinding}) var<storage, read_write> b_globals : Globals;`),p.push(""));const b=a.type==="shader"?[...i.inputs||[],...i.tuningParams||[],...a.inputs]:[...i.inputs||[],...i.tuningParams||[]],g=new Map;b.forEach(D=>g.set(D.id,D));const y=Array.from(g.values()),$=r.stage==="fragment"||r.stage==="vertex"?new Set((o?.structs??[]).map(D=>D.id)):void 0,k=y.filter(D=>!D.builtin&&D.type!=="texture2d"&&!r.varMap?.has(D.id)&&!$?.has(D.type));let A;const z=new Nu(o?.structs||[]);if(r.inputBinding!==void 0&&(r.stage==="compute"||k.length>0)){const D=[...k];r.stage==="compute"&&(D.push({id:"u_dispatch_size",type:"vec3<u32>"}),["time","delta_time","bpm","beat_number","beat_delta","prng_seed"].forEach(j=>{this.allUsedBuiltins.has(j)&&D.push({id:j,type:"float"})})),this.allUsedBuiltins.has("output_size")&&D.push({id:"output_size",type:"vec3<i32>"});for(const J of[...i.inputs||[],...i.tuningParams||[]])J.type==="texture2d"&&D.push({id:`tex_bound_${J.id}`,type:"float"});A=z.calculateBlockLayout(D,!0,"std430"),p.push("struct Inputs {");for(const J of A.fields){let j=this.resolveType(J.type);j==="bool"&&(j="u32"),p.push(`  ${J.name} : ${j},`)}p.push("}"),p.push(`@group(0) @binding(${r.inputBinding}) var<storage, read> b_inputs : Inputs;`),p.push("")}const O=new Map;r.resourceBindings&&r.resourceBindings.forEach((D,J)=>{const j=r.resourceDefs?.get(J);if(j?.type==="atomic_counter"){O.set(J,"atomic_counter");const ie=`AtomicBuffer_${J}`;p.push(`struct ${ie} { data: array<atomic<i32>> }`);const M=this.getBufferVar(J);p.push(`@group(0) @binding(${D}) var<storage, read_write> ${M} : ${ie};`)}else if(j?.type==="buffer"||!j){O.set(J,"buffer");const ie=j?.dataType?this.resolveType(j.dataType):"f32",M=`Buffer_${J}`;p.push(`struct ${M} { data: array<${ie}> }`);const B=this.getBufferVar(J),oe=r.stage==="vertex"?"read":"read_write";p.push(`@group(0) @binding(${D}) var<storage, ${oe}> ${B} : ${M};`)}else if(j.type==="texture2d"){O.set(J,"texture2d");const ie=r.storageResources?.has(J),M=r.sampledResources?.has(J);if(ie){let B="rgba8unorm";const oe=j.format;typeof oe=="string"&&(B={rgba8:"rgba8unorm",rgba16f:"rgba16float",rgba32f:"rgba32float",r32f:"r32float"}[oe]||oe);const Q=M?"read_write":"write";p.push(`@group(0) @binding(${D}) var ${J} : texture_storage_2d<${B}, ${Q}>;`)}else p.push(`@group(0) @binding(${D}) var ${J} : texture_2d<f32>;`)}}),r.resourceBindings&&r.resourceBindings.size>0&&p.push("");const L=["global_invocation_id","local_invocation_id","workgroup_id","local_invocation_index","num_workgroups","normalized_global_invocation_id","position","frag_coord","front_facing","sample_index","vertex_index","instance_index"],U={global_invocation_id:"vec3<u32>",local_invocation_id:"vec3<u32>",workgroup_id:"vec3<u32>",local_invocation_index:"u32",num_workgroups:"vec3<u32>",normalized_global_invocation_id:"vec3<f32>",position:"vec4<f32>",frag_coord:"vec4<f32>",front_facing:"bool",sample_index:"u32",vertex_index:"u32",instance_index:"u32"},S={global_invocation_id:"GlobalInvocationID",local_invocation_id:"LocalInvocationID",workgroup_id:"WorkgroupID",local_invocation_index:"LocalInvocationIndex",num_workgroups:"NumWorkgroups",normalized_global_invocation_id:"NormalizedGlobalInvocationID",position:"Position",frag_coord:"FragCoord",front_facing:"FrontFacing",sample_index:"SampleIndex",vertex_index:"VertexIndex",instance_index:"InstanceIndex"};L.forEach(D=>{this.allUsedBuiltins.has(D)&&p.push(`var<private> ${S[D]} : ${U[D]};`)});const w=[...s,...p,...l].join(`
`),F=r.inputBinding!==void 0&&(r.stage==="compute"||k.length>0||this.allUsedBuiltins.has("output_size")),re=r.workgroupSize||(r.stage==="compute"?[16,16,1]:[1,1,1]);return{code:w,imports:{'#import "intrinsics.wgsl"':ax},metadata:{resourceBindings:r.resourceBindings||new Map,resourceTypes:O,inputBinding:F?r.inputBinding:void 0,inputLayout:F&&A?A:void 0,structLayouts:F&&z?Object.fromEntries((o?.structs||[]).map(D=>[D.id,z.getStructLayout(D.id,"std430")])):void 0,workgroupSize:re}}}compile(e,n,r={}){if(r.resourceDefs||(r.resourceDefs=new Map(e.resources.map(a=>[a.id,a])),[...e.inputs,...e.tuningParams||[]].forEach(a=>{a.type==="texture2d"&&(r.resourceDefs.has(a.id)||r.resourceDefs.set(a.id,{...a,type:"texture2d"}))})),r.stage||(r.stage="compute"),r.inputBinding===void 0&&(r.inputBinding=1),!r.resourceBindings){r.resourceBindings=new Map;let a=2;e.resources.forEach(i=>{r.resourceBindings.set(i.id,a++)}),[...e.inputs,...e.tuningParams||[]].forEach(i=>{i.type==="texture2d"&&!r.resourceBindings.has(i.id)&&r.resourceBindings.set(i.id,a++)})}const o=e.functions.find(a=>a.id===n);return o&&(o.workgroupSize?r.workgroupSize=o.workgroupSize:o.metadata&&o.metadata.workgroup_size&&(r.workgroupSize=o.metadata.workgroup_size)),this.compileFunctions(e.functions,n,r,e)}emitTextureSamplers(e,n,r,o){n.resourceDefs&&n.resourceDefs.forEach((a,i)=>{if(o.has(i)&&a.type==="texture2d"){if(!n.sampledResources?.has(i))return;const l=n.storageResources?.has(i),f=a.sampler?.wrap||"clamp",m=(a.sampler?.filter||"nearest")==="linear";if(e.push(`fn sample_${i}(uv: vec2<f32>) -> vec4<f32> {`),e.push(`  let size_f = vec2<f32>(textureDimensions(${i}${l?"":", 0u"}));`),e.push("  let size_i = vec2<i32>(size_f);"),f==="repeat"?e.push("  let p = fract(uv);"):f==="mirror"?e.push("  let p = 1.0 - abs(fract(uv * 0.5) * 2.0 - 1.0);"):e.push("  let p = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));"),m){e.push("  let pixel_coords = p * size_f - 0.5;"),e.push("  let base = vec2<i32>(floor(pixel_coords));"),e.push("  let f = pixel_coords - vec2<f32>(base);");const h=(c,u)=>{const p=c===0&&u===0?"base":`base + vec2<i32>(${c}, ${u})`;return f==="repeat"?`textureLoad(${i}, (${p} % size_i + size_i) % size_i${l?"":", 0u"})`:`textureLoad(${i}, clamp(${p}, vec2<i32>(0), size_i - 1)${l?"":", 0u"})`};e.push(`  let c00 = ${h(0,0)};`),e.push(`  let c10 = ${h(1,0)};`),e.push(`  let c01 = ${h(0,1)};`),e.push(`  let c11 = ${h(1,1)};`),e.push("  return mix(mix(c00, c10, f.x), mix(c01, c11, f.x), f.y);")}else e.push("  let coord = vec2<i32>(floor(p * size_f));"),f==="repeat"?e.push("  let sc = (coord % size_i + size_i) % size_i;"):e.push("  let sc = clamp(coord, vec2<i32>(0), size_i - 1);"),e.push(`  return textureLoad(${i}, sc${l?"":", 0u"});`);e.push("}"),e.push("")}})}generateStructs(e,n,r){for(const o of e.structs??[]){n.push(`struct ${o.id} {`);for(const a of o.members){const i=this.resolveType(a.type);let s="";a.builtin?s+=`@builtin(${a.builtin}) `:r.stage!=="compute"&&a.location!==void 0&&(s+=`@location(${a.location}) `),n.push(`  ${s}${a.name} : ${i},`)}n.push("}"),n.push("")}}emitPlaceholders(e,n,r,o){n.resourceBindings&&n.resourceBindings.forEach((a,i)=>{if(n.resourceDefs?.get(i)?.type==="texture2d"){const l=n.storageResources?.has(i);e.push(`  _ = textureDimensions(${i}${l?"":", 0u"});`)}else{const l=this.getBufferVar(i);e.push(`  _ = &${l}.data;`)}}),r&&n.inputBinding!==void 0&&e.push("  _ = &b_inputs;")}emitFunction(e,n,r,o,a,i){const s=e.inputs.filter(f=>!f.builtin);if(n)if(o.stage==="vertex"){const f=this.resolveType(e.outputs[0]?.type||"vec4<f32>");r.push("@vertex"),r.push(`fn main(@builtin(vertex_index) vertex_index : u32, @builtin(instance_index) instance_index : u32) -> ${f} {`),this.allUsedBuiltins.has("vertex_index")&&r.push("  VertexIndex = vertex_index;"),this.allUsedBuiltins.has("instance_index")&&r.push("  InstanceIndex = instance_index;"),this.emitPlaceholders(r,o,!1,i);for(const d of e.inputs)d.builtin==="vertex_index"?r.push(`  let l_${d.id} = i32(vertex_index);`):d.builtin==="instance_index"&&r.push(`  let l_${d.id} = i32(instance_index);`)}else if(o.stage==="fragment"){const f=[];let d=0;for(const c of e.inputs)if(c.builtin==="frag_coord")f.push("@builtin(frag_coord) fc : vec4<f32>");else if(c.builtin==="front_facing")f.push("@builtin(front_facing) ff : bool");else if(c.builtin==="sample_index")f.push("@builtin(sample_index) si : u32");else if(c.builtin==="position")f.push("@builtin(position) pos : vec4<f32>");else{const p=(a.structs??[]).some(_=>_.id===c.type)?"":`@location(${c.location!==void 0?c.location:d++}) `;f.push(`${p}${c.id} : ${this.resolveType(c.type)}`)}let m="vec4<f32>",h="@location(0)";if(e.outputs.length>0){const c=e.outputs[0];m=this.resolveType(c.type),(a.structs??[]).some(u=>u.id===c.type)?h="":c.location!==void 0&&(h=`@location(${c.location})`)}r.push("@fragment"),r.push(`fn main(${f.join(", ")}) -> ${h} ${m} {`),this.allUsedBuiltins.has("frag_coord")&&r.push("  FragCoord = fc;"),this.allUsedBuiltins.has("front_facing")&&r.push("  FrontFacing = ff;"),this.allUsedBuiltins.has("sample_index")&&r.push("  SampleIndex = si;"),this.allUsedBuiltins.has("position")&&r.push("  Position = pos;"),this.emitPlaceholders(r,o,!1,i);for(const c of e.inputs)c.builtin==="frag_coord"&&r.push(`  let l_${c.id} = fc;`),c.builtin==="front_facing"&&r.push(`  let l_${c.id} = ff;`),c.builtin==="sample_index"&&r.push(`  let l_${c.id} = i32(si);`),c.builtin==="position"&&r.push(`  let l_${c.id} = pos;`)}else{const f=["@builtin(global_invocation_id) gid : vec3<u32>"];this.allUsedBuiltins.has("local_invocation_id")&&f.push("@builtin(local_invocation_id) lid : vec3<u32>"),this.allUsedBuiltins.has("workgroup_id")&&f.push("@builtin(workgroup_id) wid : vec3<u32>"),this.allUsedBuiltins.has("local_invocation_index")&&f.push("@builtin(local_invocation_index) lidx : u32"),this.allUsedBuiltins.has("num_workgroups")&&f.push("@builtin(num_workgroups) nw : vec3<u32>");const d=o.workgroupSize||[16,16,1];r.push(`@compute @workgroup_size(${d[0]}, ${d[1]}, ${d[2]})`),r.push(`fn main(${f.join(", ")}) {`),this.allUsedBuiltins.has("global_invocation_id")&&r.push("  GlobalInvocationID = gid;"),this.allUsedBuiltins.has("local_invocation_id")&&r.push("  LocalInvocationID = lid;"),this.allUsedBuiltins.has("workgroup_id")&&r.push("  WorkgroupID = wid;"),this.allUsedBuiltins.has("local_invocation_index")&&r.push("  LocalInvocationIndex = lidx;"),this.allUsedBuiltins.has("num_workgroups")&&r.push("  NumWorkgroups = nw;"),this.allUsedBuiltins.has("normalized_global_invocation_id")&&r.push("  NormalizedGlobalInvocationID = (vec3<f32>(gid) + 0.5) / vec3<f32>(b_inputs.u_dispatch_size);"),this.emitPlaceholders(r,o,s.length>0,i);for(const m of e.inputs)m.builtin==="global_invocation_id"&&r.push(`  let l_${m.id} = gid;`),m.builtin==="local_invocation_id"&&r.push(`  let l_${m.id} = lid;`),m.builtin==="workgroup_id"&&r.push(`  let l_${m.id} = wid;`),m.builtin==="local_invocation_index"&&r.push(`  let l_${m.id} = lidx;`),m.builtin==="num_workgroups"&&r.push(`  let l_${m.id} = nw;`);o.inputBinding!==void 0&&r.push("  if (any(gid >= b_inputs.u_dispatch_size)) { return; }")}else{const f=e.inputs.map(m=>`${m.id}: ${this.resolveType(m.type)}`).join(", ");let d="void";e.outputs.length===1&&(d=this.resolveType(e.outputs[0].type)),r.push(`fn ${e.id}(${f})${d==="void"?"":" -> "+d} {`)}const l=Ut(e,o.fullIr);this.emitLocalVars(e,r),this.emitBody(e,r,o,new Set,a,l),r.push("}")}emitLocalVars(e,n){for(const r of e.localVars){const o=this.resolveType(r.type);let a="";r.initialValue!==void 0?a=` = ${this.formatLiteral(r.initialValue,r.type)}`:a=` = ${this.formatZero(r.type)}`,n.push(`  var l_${r.id} : ${o}${a};`)}}emitBody(e,n,r,o,a,i){const s=e.nodes.filter(l=>!i.some(f=>f.to===l.id&&f.type==="execution")&&this.isExecutable(l.op,i,l.id));for(const l of s)this.emitChain(l,e,n,r,o,a,i)}isExecutable(e,n,r){return e.startsWith("cmd_")||e.startsWith("flow_")||e==="var_set"||e==="buffer_store"||e==="texture_store"||e==="call_func"||e==="func_return"||e==="array_set"||e==="vec_set_element"||e==="atomic_store"||e==="atomic_add"||e==="atomic_sub"||e==="atomic_min"||e==="atomic_max"||e==="atomic_exchange"||e==="prng_next"?!0:n.some(a=>a.from===r&&a.type==="execution")}emitChain(e,n,r,o,a,i,s){let l=e;for(;l&&!(a.has(l.id)||(a.add(l.id),this.emitNode(l,n,r,o,i,s),l.op==="flow_branch"));){const f=s.find(d=>d.from===l.id&&d.portOut==="exec_out"&&d.type==="execution");l=f?n.nodes.find(d=>d.id===f.to):void 0}}emitNode(e,n,r,o,a,i){if(e.op==="var_set"){const l=e.var,f=this.resolveArg(e,"val",n,o,a,"any",i);if(o.varMap?.has(l)){const d=o.varMap.get(l),m=o.varTypes?.get(l)||"float",h=m.includes("x"),c=this.getComponentCount(m);if(c===1)r.push(`  b_globals.data[${d}] = f32(${f});`);else if(h){const u=c===9?3:4;for(let p=0;p<u;p++)for(let _=0;_<u;_++)r.push(`  b_globals.data[${d+p*u+_}] = f32(${f}[${p}][${_}]);`)}else for(let u=0;u<c;u++)r.push(`  b_globals.data[${d+u}] = f32(${f}[${u}]);`)}else if(n.localVars.some(d=>d.id===l)){const m=n.localVars.find(u=>u.id===l).type||"float",h=o.nodeTypes?.get(e.val)||"float",c=this.wrapCast(f,h,m);r.push(`  l_${l} = ${c};`)}}else if(e.op==="array_set"||e.op==="vec_set_element"){const l=e.array||e.vec;let f="any";if(l){let u=l;const p=n.nodes.find(y=>y.id===l);p&&p.op==="var_get"&&(u=p.var);const _=n.localVars.find(y=>y.id===u),b=n.inputs.find(y=>y.id===u),g=(_?.type||b?.type||"").toLowerCase();g==="int"?f="int":g==="bool"?f="bool":g==="float"&&(f="float")}const d=this.resolveArg(e,"index",n,o,a,"int",i),m=this.resolveArg(e,"value",n,o,a,f,i);let h=l;const c=n.nodes.find(u=>u.id===l);if(c&&c.op==="var_get"&&(h=c.var),o.varMap?.has(h)){const u=o.varMap.get(h);r.push(`  b_globals.data[u32(${u}) + u32(${d})] = f32(${m});`)}else{const u=this.resolveArg(e,e.op==="array_set"?"array":"vec",n,o,a,"any",i);r.push(`  ${u}[u32(${d})] = ${m};`)}}else if(e.op==="buffer_store"){const l=e.buffer,f=this.resolveArg(e,"index",n,o,a,"int",i),d=this.resolveArg(e,"value",n,o,a,"any",i),m=this.getBufferVar(l),c=o.resourceDefs?.get(l)?.dataType;if(c&&(a.structs??[]).some(p=>p.id===c))r.push(`  ${m}.data[u32(${f})] = ${d};`);else{const p=c?this.resolveType(c):"f32";r.push(`  ${m}.data[u32(${f})] = ${p}(${d});`)}}else if(e.op==="atomic_store"){const l=e.counter,f=this.resolveArg(e,"index",n,o,a,"int",i),d=this.resolveArg(e,"value",n,o,a,"int",i),m=this.getBufferVar(l);r.push(`  atomicStore(&${m}.data[u32(${f})], i32(${d}));`)}else if(e.op==="atomic_add"||e.op==="atomic_sub"||e.op==="atomic_min"||e.op==="atomic_max"||e.op==="atomic_exchange"){const l=e.counter,f=this.resolveArg(e,"index",n,o,a,"int",i),d=this.resolveArg(e,"value",n,o,a,"int",i),m=this.getBufferVar(l),h={atomic_add:"atomicAdd",atomic_sub:"atomicSub",atomic_min:"atomicMin",atomic_max:"atomicMax",atomic_exchange:"atomicExchange"};r.push(`  let v_${e.id} = ${h[e.op]}(&${m}.data[u32(${f})], i32(${d}));`)}else if(e.op==="prng_next"){const l=e.prng,f=e.type||"float",m={float:1,int:1,float2:2,float3:3,float4:4,int2:2,int3:3,int4:4}[f]||1,h=f==="int"||f.startsWith("int");if(m===1&&!h)r.push(`  l_${l} = l_${l} + 1;`),r.push(`  let v_${e.id} = _prng_hash_to_float(l_${l});`);else if(m===1&&h){r.push(`  l_${l} = l_${l} + 1;`);const c=e.min!==void 0||i.some(p=>p.to===e.id&&p.portIn==="min"&&p.type==="data"),u=e.max!==void 0||i.some(p=>p.to===e.id&&p.portIn==="max"&&p.type==="data");if(c&&u){const p=this.resolveArg(e,"min",n,o,a,"int",i),_=this.resolveArg(e,"max",n,o,a,"int",i);r.push(`  let v_${e.id} = i32(${p}) + i32(bitcast<u32>(_prng_hash(l_${l})) % u32(i32(${_}) - i32(${p}) + 1));`)}else r.push(`  let v_${e.id} = _prng_hash(l_${l});`)}else{r.push(`  l_${l} = l_${l} + ${m};`);const c=[];for(let p=0;p<m;p++){const _=m-1-p,b=_===0?`l_${l}`:`(l_${l} - ${_})`;c.push(h?`_prng_hash(${b})`:`_prng_hash_to_float(${b})`)}const u=h?`vec${m}<i32>`:`vec${m}<f32>`;r.push(`  let v_${e.id} = ${u}(${c.join(", ")});`)}}else if(e.op==="call_func"){const l=a.functions.find(f=>f.id===e.func);if(l){const f=l.inputs.map(d=>this.resolveArg(e,`args.${d.id}`,n,o,a,"any",i)).join(", ");l.outputs.length>0?r.push(`  let v_${e.id} = ${e.func}(${f});`):r.push(`  ${e.func}(${f});`)}}else if(e.op==="func_return")if(o.entryPointId===n.id&&o.stage==="compute")r.push("  return;");else{const d=e.value!==void 0?"value":"val";r.push(`  return ${this.resolveArg(e,d,n,o,a,"any",i)};`)}else if(e.op==="flow_branch"){const l=this.resolveArg(e,"cond",n,o,a,"bool",i),d=l==="true"||l==="false"||l.includes("==")||l.includes("!=")||l.includes("<")||l.includes(">")||l.includes("&&")||l.includes("||")?l:`${l} != 0.0`;r.push(`  if (${d}) {`);const m=i.find(c=>c.from===e.id&&c.portOut==="exec_true");if(m){const c=n.nodes.find(u=>u.id===m.to);c&&this.emitChain(c,n,r,o,new Set,a,i)}r.push("  } else {");const h=i.find(c=>c.from===e.id&&c.portOut==="exec_false");if(h){const c=n.nodes.find(u=>u.id===h.to);c&&this.emitChain(c,n,r,o,new Set,a,i)}r.push("  }")}else if(e.op==="flow_loop"){const l=`i_${e.id}`;if(e.count!==void 0){const m=this.resolveArg(e,"count",n,o,a,"int",i);r.push(`  for (var ${l} = 0; ${l} < ${m}; ${l}++) {`)}else{const m=this.resolveArg(e,"start",n,o,a,"int",i),h=this.resolveArg(e,"end",n,o,a,"int",i);r.push(`  for (var ${l} = ${m}; ${l} < ${h}; ${l}++) {`)}const f=i.find(m=>m.from===e.id&&m.portOut==="exec_body");if(f){const m=n.nodes.find(h=>h.id===f.to);m&&this.emitChain(m,n,r,o,new Set,a,i)}r.push("  }");const d=i.find(m=>m.from===e.id&&m.portOut==="exec_completed");if(d){const m=n.nodes.find(h=>h.id===d.to);m&&this.emitChain(m,n,r,o,new Set,a,i)}}else if(e.op==="texture_store"){const l=this.resolveArg(e,"coords",n,o,a,"any",i),f=this.resolveArg(e,"value",n,o,a,"any",i);r.push(`  textureStore(${e.tex}, vec2<i32>(${l}), ${f});`)}else if(e.op==="buffer_store"){const l=e.buffer,f=this.resolveArg(e,"index",n,o,a,"int",i),d=this.resolveArg(e,"value",n,o,a,"any",i),m=this.getBufferVar(l),c=o.resourceDefs?.get(l)?.dataType,u=c&&(a.structs??[]).some(p=>p.id===c);if(r.push(`  if (u32(${f}) < arrayLength(&${m}.data)) {`),u)r.push(`    ${m}.data[u32(${f})] = ${d};`);else{const p=c?this.resolveType(c):"f32";r.push(`    ${m}.data[u32(${f})] = ${p}(${d});`)}r.push("  }")}else if(e.op==="cmd_dispatch"){const l=e.func,f=a.functions.find(d=>d.id===l);if(f){const d=f.inputs.map(h=>this.resolveArg(e,`args.${h.id}`,n,o,a,"any",i)).join(", "),m=this.resolveArg(e,"threads",n,o,a,"any",i);r.push(`  // Dispatch: ${l}(${d}) with dim ${m}`),r.push(`  ${l}(${d});`)}}else r.push(`  // Op: ${e.op}`)}getBufferVar(e){if(!e)return"b_unknown";const n=e.trim();return/^[bB]_/.test(n)?n:`b_${n}`}getVariableExpr(e,n,r){if(r.varMap?.has(e)){const i=r.varMap.get(e),s=r.varTypes?.get(e)||"float",l=this.getComponentCount(s);if(s==="bool")return`bool(b_globals.data[${i}])`;if(s==="int")return`bitcast<i32>(u32(b_globals.data[${i}]))`;if(s==="int")return`i32(b_globals.data[${i}])`;if(l===1)return`b_globals.data[${i}]`;if(s==="float2"||s==="vec2<f32>")return`vec2<f32>(b_globals.data[${i}], b_globals.data[${i+1}])`;if(s==="float3"||s==="vec3<f32>")return`vec3<f32>(b_globals.data[${i}], b_globals.data[${i+1}], b_globals.data[${i+2}])`;if(s==="float4"||s==="vec4<f32>")return`vec4<f32>(b_globals.data[${i}], b_globals.data[${i+1}], b_globals.data[${i+2}], b_globals.data[${i+3}])`;if(s==="int2"||s==="vec2<i32>")return`vec2<i32>(i32(b_globals.data[${i}]), i32(b_globals.data[${i+1}]))`;if(s==="int3"||s==="vec3<i32>")return`vec3<i32>(i32(b_globals.data[${i}]), i32(b_globals.data[${i+1}]), i32(b_globals.data[${i+2}]))`;if(s==="int4"||s==="vec4<i32>")return`vec4<i32>(i32(b_globals.data[${i}]), i32(b_globals.data[${i+1}]), i32(b_globals.data[${i+2}]), i32(b_globals.data[${i+3}]))`;if(s==="float3x3"||s==="mat3x3<f32>"){const f=[];for(let d=0;d<9;d++)f.push(`b_globals.data[${i+d}]`);return`mat3x3<f32>(${f.join(", ")})`}if(s==="float4x4"||s==="mat4x4<f32>"){const f=[];for(let d=0;d<16;d++)f.push(`b_globals.data[${i+d}]`);return`mat4x4<f32>(${f.join(", ")})`}if(s.startsWith("array<")){const f=s.match(/,\s*(\d+)>/);if(f){const d=parseInt(f[1]),m=[];for(let h=0;h<d;h++)m.push(`b_globals.data[${i+h}]`);return`array<f32, ${d}>(${m.join(", ")})`}}return`b_globals.data[${i}]`}if(n.localVars.some(i=>i.id===e))return`l_${e}`;const o=n.inputs.find(i=>i.id===e);if(o){if(o.builtin)return`l_${e}`;const i=r.entryPointId===n.id,s=r.stage==="fragment"&&(r.fullIr?.structs??[]).some(l=>l.id===o.type);if(i&&r.inputBinding!==void 0&&!s){const l=`b_inputs.${e}`;return o.type==="bool"?`bool(${l})`:l}return e}const a=r.fullIr?.inputs?.find(i=>i.id===e)??r.fullIr?.tuningParams?.find(i=>i.id===e);if(a&&r.inputBinding!==void 0){const i=`b_inputs.${e}`;return a.type==="bool"?`bool(${i})`:i}return e}resolveArg(e,n,r,o,a,i="float",s){const l=n==="val"||n==="value"?["val","value"]:[n];let f;for(const d of l)if(f=s.find(m=>m.to===e.id&&m.portIn===d&&m.type==="data"),f)break;if(f){const d=r.nodes.find(m=>m.id===f.from);if(d){let m="";for(const h of l){const c=e[h];if(typeof c=="string"&&c.includes(".")){m=c.substring(c.indexOf("."));break}}return d.op==="call_func"||d.op==="atomic_add"||d.op==="atomic_sub"||d.op==="atomic_min"||d.op==="atomic_max"||d.op==="atomic_exchange"||d.op==="prng_next"?`v_${d.id}`+m:d.op==="var_get"?this.getVariableExpr(d.var,r,o)+m:this.compileExpression(d,r,o,a,i,s)+m}}for(const d of l){let m;if(d.includes(".")||d.includes("[")){const h=d.split(/[\.\[\]]/).filter(u=>u!=="");let c=e;for(const u of h){if(c==null)break;c=c[u]}m=c}else m=e[d];if(m!==void 0){if(typeof m=="string"&&m.trim()!==""){const h=m.trim();let c=h,u="";const p=h.indexOf(".");if(p!==-1&&(c=h.substring(0,p),u=h.substring(p)),r.localVars.some(b=>b.id===c)||r.inputs.some(b=>b.id===c)||o.fullIr?.inputs?.some(b=>b.id===c)||o.fullIr?.tuningParams?.some(b=>b.id===c)||o.varMap?.has(c))return this.getVariableExpr(c,r,o)+u;const _=r.nodes.find(b=>b.id===c);if(_&&_.id!==e.id)return this.compileExpression(_,r,o,a,i,s)+u}return this.formatLiteral(m,i||"unknown")}}return this.formatZero(i||"float")}compileExpression(e,n,r,o,a="float",i){if(e.op==="literal")return this.formatLiteral(e.val,e.type||a||"float");if(e.op==="loop_index")return`i_${e.loop}`;if(e.op==="float")return this.resolveArg(e,"val",n,r,o,"float",i);if(e.op==="int")return this.resolveArg(e,"val",n,r,o,"int",i);if(e.op==="bool")return this.resolveArg(e,"val",n,r,o,"bool",i);if(["float2","float3","float4","int2","int3","int4"].includes(e.op)){const s=e.op.startsWith("int"),l=parseInt(e.op.replace(/^(float|int)/,"")),f=s?`vec${l}<i32>`:`vec${l}<f32>`,d=s?"i32":"f32",m=s?"int":"float",h=["x","y","z","w"].slice(0,l),c=this.detectComponentGroups(e,l);if(c){const p=c.map(_=>{const b=this.resolveArg(e,_.key,n,r,o,_.count===1?m:`${m}${_.count}`,i);return _.count===1?b:`${s?`vec${_.count}<i32>`:`vec${_.count}<f32>`}(${b})`});return`${f}(${p.join(", ")})`}const u=h.map(p=>`${d}(${this.resolveArg(e,p,n,r,o,m,i)})`);return`${f}(${u.join(", ")})`}if(e.op==="float3x3"||e.op==="float4x4"){const s=e.vals;if(Array.isArray(s)){const l=s.map(f=>this.formatLiteral(f,"float"));return`${e.op==="float3x3"?"mat3x3<f32>":"mat4x4<f32>"}(${l.join(", ")})`}else if(typeof s=="string"){const l=this.resolveArg(e,"vals",n,r,o,e.op==="float3x3"?"float3x3":"float4x4",i);if(e.op==="float4x4"){const m=r.nodeTypes?.get(s);if(m?.includes("int")||m?.includes("i32"))return`mat4_from_array_i32(${l})`}const f=e.op==="float3x3"?9:16,d=[];for(let m=0;m<f;m++)d.push(`f32(${l}[${m}])`);return`${e.op==="float3x3"?"mat3x3<f32>":"mat4x4<f32>"}(${d.join(", ")})`}}if(e.op==="mat_identity")return(e.size||4)===3?"mat3x3<f32>(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)":"mat4x4<f32>(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0)";if(e.op==="mat_inverse"){const s=this.resolveArg(e,"val",n,r,o,"any",i),l=r.nodeTypes?.get(e.val)||"float4x4";return l==="float3x3"||l==="mat3x3<f32>"?`mat3_inverse(${s})`:`mat4_inverse(${s})`}if(e.op==="mat_transpose")return`transpose(${this.resolveArg(e,"val",n,r,o,"any",i)})`;if(e.op==="static_cast_float")return`f32(${this.resolveArg(e,"val",n,r,o,"float",i)})`;if(e.op==="static_cast_int"){const s=this.resolveArg(e,"val",n,r,o,"any",i),l=e.val,f=typeof l=="string"&&r.nodeTypes?.get(l)||"float";return f==="bool"||f==="boolean"?`i32(${s})`:`safe_f32_to_i32(${s})`}if(e.op==="static_cast_bool")return`bool(${this.resolveArg(e,"val",n,r,o,"any",i)})`;if(e.op==="static_cast_int2")return`vec2<i32>(${this.resolveArg(e,"val",n,r,o,"any",i)})`;if(e.op==="static_cast_int3")return`vec3<i32>(${this.resolveArg(e,"val",n,r,o,"any",i)})`;if(e.op==="static_cast_int4")return`vec4<i32>(${this.resolveArg(e,"val",n,r,o,"any",i)})`;if(e.op==="static_cast_float2")return`vec2<f32>(${this.resolveArg(e,"val",n,r,o,"any",i)})`;if(e.op==="static_cast_float3")return`vec3<f32>(${this.resolveArg(e,"val",n,r,o,"any",i)})`;if(e.op==="static_cast_float4")return`vec4<f32>(${this.resolveArg(e,"val",n,r,o,"any",i)})`;if(e.op==="struct_construct"){const s=e.type,l=o.structs?.find(d=>d.id===s),f=l?l.members.map(d=>this.resolveArg(e,`values.${d.name}`,n,r,o,"any",i)):[];return`${s}(${f.join(", ")})`}if(e.op==="array_construct"){const s=e.values;if(Array.isArray(s)){const u=s.map((_,b)=>this.resolveArg(e,`values[${b}]`,n,r,o,"any",i));if(u.length===0)return"array<f32, 0>()";const p=e.type||r.varTypes?.get(s[0])||"f32";return`array<${this.resolveType(p)}, ${u.length}>(${u.join(", ")})`}const l=e.length||0;let f="f32";const d=e.fill,m=r.nodeTypes?.get(e.id);if(m&&(m.startsWith("array<")||m.includes("["))){const u=m.match(/array<([^,]+),/)||m.match(/^([^\[]+)\[/);u&&(f=u[1])}else e.type?f=e.type:typeof d=="number"&&Number.isInteger(d)?f="i32":(d===!0||d===!1)&&(f="bool");if(f==="i32"||f==="int"){const u=this.resolveArg(e,"fill",n,r,o,"int",i),p=new Array(l).fill(null).map(()=>u);return`array<i32, ${l}>(${p.join(", ")})`}const h=this.resolveArg(e,"fill",n,r,o,f==="bool"?"bool":"float",i),c=new Array(l).fill(null).map(()=>h);return`array<${this.resolveType(f)}, ${l}>(${c.join(", ")})`}if(e.op==="array_length")return`i32(arrayLength(&${this.resolveArg(e,"array",n,r,o,"any",i)}))`;if(e.op==="texture_sample"){const s=e.tex,l=this.resolveArg(e,"coords",n,r,o,"any",i);return`sample_${s}(${l})`}if(e.op==="texture_load"){const s=e.tex,l=this.resolveArg(e,"coords",n,r,o,"any",i),f=r.storageResources?.has(s);return`textureLoad(${s}, vec2<i32>(${l})${f?"":", 0u"})`}if(e.op==="quat"){if(e.x!==void 0)return`vec4<f32>(f32(${this.resolveArg(e,"x",n,r,o,"float",i)}), f32(${this.resolveArg(e,"y",n,r,o,"float",i)}), f32(${this.resolveArg(e,"z",n,r,o,"float",i)}), f32(${this.resolveArg(e,"w",n,r,o,"float",i)}))`;{const l=this.resolveArg(e,"axis",n,r,o,"float3",i),f=this.resolveArg(e,"angle",n,r,o,"float",i);return`quat_from_axis_angle(${l}, ${f})`}}if(e.op==="quat_identity")return"vec4<f32>(0.0, 0.0, 0.0, 1.0)";if(e.op==="quat_mul"){const s=this.resolveArg(e,"a",n,r,o,"float4",i),l=this.resolveArg(e,"b",n,r,o,"float4",i);return`quat_mul(${s}, ${l})`}if(e.op==="quat_slerp"){const s=this.resolveArg(e,"a",n,r,o,"float4",i),l=this.resolveArg(e,"b",n,r,o,"float4",i),f=this.resolveArg(e,"t",n,r,o,"float",i);return`quat_slerp(${s}, ${l}, ${f})`}if(e.op==="quat_rotate"){const s=this.resolveArg(e,"v",n,r,o,"float3",i),l=this.resolveArg(e,"q",n,r,o,"float4",i);return`quat_rotate(${s}, ${l})`}if(e.op==="quat_to_float4x4")return`quat_to_mat4(${this.resolveArg(e,"q",n,r,o,"float4",i)})`;if(e.op==="resource_get_size"){const s=e.resource,l=r.resourceDefs?.get(s);if(l?.type==="texture2d"){const f=r.storageResources?.has(s);return`vec2<f32>(textureDimensions(${s}${f?"":", 0u"}))`}return l?.type==="buffer"?`vec2<f32>(f32(arrayLength(&${this.getBufferVar(s)}.data)), 0.0)`:"vec2<f32>(0.0, 0.0)"}if(e.op==="resource_get_format")return"0.0";if(e.op==="resource_is_bound")return`(b_inputs.tex_bound_${e.resource} > 0.5)`;if(e.op==="buffer_load"){const s=e.buffer,l=this.resolveArg(e,"index",n,r,o,"int",i),f=this.getBufferVar(s),m=r.resourceDefs?.get(s)?.dataType;return m&&(o.structs??[]).some(u=>u.id===m)?`${f}.data[u32(${l})]`:`${m?this.resolveType(m):"f32"}(${f}.data[u32(${l})])`}if(e.op==="atomic_load"){const s=e.counter,l=this.resolveArg(e,"index",n,r,o,"int",i);return`atomicLoad(&${this.getBufferVar(s)}.data[u32(${l})])`}if(e.op==="color_mix")return`color_mix_impl(${this.resolveArg(e,"a",n,r,o,"float4",i)}, ${this.resolveArg(e,"b",n,r,o,"float4",i)})`;if(e.op==="vec_swizzle"){const s=this.resolveArg(e,"vec",n,r,o,"any",i),l=e.channels;return`${s}.${l}`}if(e.op==="vec_get_element"||e.op==="array_extract"){const s=this.resolveArg(e,"vec"in e?"vec":"array",n,r,o,"any",i),l=this.resolveArg(e,"index",n,r,o,"int",i),f=e.vec||e.array;if(f){const d=n.inputs.find(p=>p.id===f),m=n.localVars.find(p=>p.id===f),h=(p,_)=>{const b=p?.get(_);return b&&b!=="any"?b:null};let u=(h(r.nodeTypes,f)||h(r.varTypes,f)||d?.type||m?.type||r.fullIr?.inputs?.find(p=>p.id===f)?.type||r.fullIr?.tuningParams?.find(p=>p.id===f)?.type||"").toLowerCase();if(!u||u==="any"){const p=n.nodes.find(_=>_.id===f);if(p){const _=p.op;_==="float3x3"||_==="mat_identity"&&p.size===3?u="mat3x3<f32>":(_==="float4x4"||_==="mat_inverse"||_==="mat_transpose"||_==="mat_identity"||_==="quat_to_mat4")&&(u="mat4x4<f32>")}}if(u==="float3x3"||u==="mat3x3<f32>")return`(${s})[u32(${l} / 3)][u32(${l} % 3)]`;if(u==="float4x4"||u==="mat4x4<f32>")return`(${s})[u32(${l} / 4)][u32(${l} % 4)]`}return`(${s})[u32(${l})]`}if(e.op==="vec_set_element"||e.op==="array_set"){const s=this.resolveArg(e,"vec"in e?"vec":"array",n,r,o,"any",i),l=this.resolveArg(e,"index",n,r,o,"int",i),f=this.resolveArg(e,"value",n,r,o,"any",i);return`${s}[u32(${l})] = ${f}`}if(e.op==="mat_extract"){const s=this.resolveArg(e,"mat",n,r,o,"any",i),l=this.resolveArg(e,"row",n,r,o,"int",i),f=this.resolveArg(e,"col",n,r,o,"int",i);return`${s}[u32(${f})][u32(${l})]`}if(e.op==="struct_extract"){const s=this.resolveArg(e,"struct",n,r,o,"any",i),l=e.member||e.name||e.field;return l?`${s}.${l}`:`${s}.undefined_member`}if(e.op==="prng_make"){if(e.seed!==void 0||i.some(f=>f.to===e.id&&f.portIn==="seed"&&f.type==="data"))return`_prng_hash(i32(${this.resolveArg(e,"seed",n,r,o,"float",i)}))`;const l=this.hashString(n.id);return r.stage==="compute"?`_prng_hash(i32(b_inputs.prng_seed * 2147483647.0) + ${l} + GlobalInvocationID.x + GlobalInvocationID.y * 65536)`:`_prng_hash(i32(b_inputs.prng_seed * 2147483647.0) + ${l})`}if(e.op==="builtin_get"){const s=e.name,l=r.nodeTypes?.get(e.id)||"float3";let f="gid";if(s==="global_invocation_id"?f="GlobalInvocationID":s==="local_invocation_id"?f="LocalInvocationID":s==="workgroup_id"?f="WorkgroupID":s==="local_invocation_index"?f="LocalInvocationIndex":s==="num_workgroups"?f="NumWorkgroups":s==="normalized_global_invocation_id"?f="NormalizedGlobalInvocationID":s==="frag_coord"?f="FragCoord":s==="front_facing"?f="FrontFacing":s==="position"?f="Position":s==="vertex_index"?f="VertexIndex":s==="instance_index"?f="InstanceIndex":s==="output_size"?f="b_inputs.output_size":["time","delta_time","bpm","beat_number","beat_delta","prng_seed"].includes(s)&&(f=`b_inputs.${s}`),l.startsWith("float")||l==="float"){const d=this.getComponentCount(l);return d===1?`f32(${f})`:`vec${d}<f32>(${f})`}if(l.startsWith("int")||l==="int"){const d=this.getComponentCount(l);return d===1?`i32(${f})`:`vec${d}<i32>(${f})`}return f}return this.isMathOp(e.op)?this.compileMath(e,n,r,o,i,a):"0.0"}isMathOp(e){return e.startsWith("math_")||e.startsWith("vec_")||e.startsWith("quat_")||e.startsWith("mat_")}compileMath(e,n,r,o,a,i="float"){const s=e.op,l=r.nodeTypes?.get(e.id)||"float",f=i==="bool"||i==="boolean",d=!f&&(l.startsWith("float")||l==="float"||l.includes("x")),m=f||l==="boolean"||l==="bool",h=_=>{const b=e[_];let g=(typeof b=="string"?r.nodeTypes?.get(b):null)||"float";if(g==="float2"&&(g="vec2<f32>"),g==="float3"&&(g="vec3<f32>"),g==="float4"&&(g="vec4<f32>"),g==="int2"&&(g="vec2<i32>"),g==="int3"&&(g="vec3<i32>"),g==="int4"&&(g="vec4<i32>"),g==="float"&&typeof b=="string"){const y=n.nodes.find(v=>v.id===b);y&&(y.op==="float2"?g="vec2<f32>":y.op==="float3"?g="vec3<f32>":y.op==="float4"?g="vec4<f32>":y.op==="int2"?g="vec2<i32>":y.op==="int3"?g="vec3<i32>":y.op==="int4"&&(g="vec4<i32>"))}return Array.isArray(b)?`float${b.length}`:g},c=_=>{if(d){const b=this.getComponentCount(l),g=b>1?`vec${b}<f32>(0.0)`:"0.0",y=b>1?`vec${b}<f32>(1.0)`:"1.0";return`select(${g}, ${y}, ${_})`}return _},u=_=>{const b=this.resolveArg(e,_,n,r,o,"any",a),g=h(_);return d&&g==="int"?`f32(${b})`:d&&(g==="vec2<i32>"||g==="int2")?`vec2<f32>(${b})`:d&&(g==="vec3<i32>"||g==="int3")?`vec3<f32>(${b})`:d&&(g==="vec4<i32>"||g==="int4")?`vec4<f32>(${b})`:!d&&!m&&g==="float"?`i32(${b})`:b};if(s==="math_mix"||s==="vec_mix")return`mix(${u("a")}, ${u("b")}, ${u("t")})`;const p=(_,b)=>{const g=u(_),y=h(_),v=this.getComponentCount(y),$=this.getComponentCount(b);return v===1&&$>1?`vec${$}<f32>(${g})`:g};if(s==="math_pi")return"3.14159265";if(s==="math_e")return"2.71828183";if(s==="math_add"||s==="math_sub"||s==="math_div"||s==="math_mod"||s==="math_atan2"){const[_,b]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a);if(s==="math_add")return`(${_} + ${b})`;if(s==="math_sub")return`(${_} - ${b})`;if(s==="math_div"){const g=e.b;return typeof g=="number"&&g===0?"get_inf()":`(${_} / ${b})`}if(s==="math_mod")return`(${_} % ${b})`;if(s==="math_atan2")return`atan2(${_}, ${b})`}if(s==="math_mul"||s==="mat_mul"){const[_,b]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a);return`(${_} * ${b})`}if(s==="math_neg")return`(-${u("val")})`;if(s==="math_abs")return`abs(${u("val")})`;if(s==="math_sin")return`sin(${u("val")})`;if(s==="math_cos")return`cos(${u("val")})`;if(s==="math_tan")return`tan(${u("val")})`;if(s==="math_asin")return`asin(${u("val")})`;if(s==="math_acos")return`acos(${u("val")})`;if(s==="math_atan")return`atan(${u("val")})`;if(s==="math_asinh")return`asinh(${u("val")})`;if(s==="math_acosh")return`acosh(${u("val")})`;if(s==="math_atanh")return`atanh(${u("val")})`;if(s==="math_sinh")return`sinh(${u("val")})`;if(s==="math_cosh")return`cosh(${u("val")})`;if(s==="math_tanh")return`tanh(${u("val")})`;if(e.op==="math_sqrt"){const _=e.val;return typeof _=="number"&&_<0?"get_nan()":`sqrt(${u("val")})`}if(s==="math_exp")return`exp(${u("val")})`;if(s==="math_log"){const _=e.val;return typeof _=="number"&&_<=0?"get_neginf()":`log(${u("val")})`}if(s==="math_pow")return`pow(${u("a")}, ${u("b")})`;if(s==="math_trunc")return`trunc(${u("val")})`;if(s==="math_round")return`round(${u("val")})`;if(s==="math_floor")return`floor(${u("val")})`;if(s==="math_ceil")return`ceil(${u("val")})`;if(s==="math_fract")return`fract(${u("val")})`;if(s==="math_sign")return`sign(${u("val")})`;if(s==="math_min")return`min(${u("a")}, ${u("b")})`;if(s==="math_max")return`max(${u("a")}, ${u("b")})`;if(s==="math_mad"){const _=h("a"),b=h("b"),g=h("c"),y=Math.max(this.getComponentCount(_),this.getComponentCount(b),this.getComponentCount(g)),v=y>1?`vec${y}<f32>`:"float";return`fma(${p("a",v)}, ${p("b",v)}, ${p("c",v)})`}if(s==="math_clamp"){const _=h("val");return h("min"),h("max"),`clamp(${u("val")}, ${p("min",_)}, ${p("max",_)})`}if(s==="math_mix"||s==="vec_mix")return`mix(${u("a")}, ${u("b")}, ${u("t")})`;if(s==="math_step")return`step(${u("edge")}, ${u("x")})`;if(s==="math_smoothstep")return`smoothstep(${u("edge0")}, ${u("edge1")}, ${u("x")})`;if(s==="math_fract")return`fract(${u("val")})`;if(s==="math_trunc")return`trunc(${u("val")})`;if(s==="math_frexp_mantissa"||s==="math_mantissa")return`get_mantissa(${u("val")})`;if(s==="math_frexp_exponent"||s==="math_exponent")return`get_exponent(${u("val")})`;if(s==="math_ldexp")return`ldexp(f32(${this.resolveArg(e,"fract",n,r,o,"float",a)}), i32(${this.resolveArg(e,"exp",n,r,o,"int",a)}))`;if(s==="math_flush_subnormal")return`flush_subnormal(${u("val")})`;if(s==="math_is_nan"){let _=h("val");const b=u("val");return _==="float"&&(b.startsWith("vec")||b.startsWith("bitcast<vec"))&&(b.includes("vec2")&&(_="vec2<f32>"),b.includes("vec3")&&(_="vec3<f32>"),b.includes("vec4")&&(_="vec4<f32>")),_.startsWith("vec2")?c(`is_nan_vec2(${b})`):_.startsWith("vec3")?c(`is_nan_vec3(${b})`):_.startsWith("vec4")?c(`is_nan_vec4(${b})`):c(`is_nan(${b})`)}if(s==="math_is_inf"){let _=h("val");const b=u("val");return _==="float"&&(b.startsWith("vec")||b.startsWith("bitcast<vec"))&&(b.includes("vec2")&&(_="vec2<f32>"),b.includes("vec3")&&(_="vec3<f32>"),b.includes("vec4")&&(_="vec4<f32>")),_.startsWith("vec2")?c(`is_inf_vec2(${b})`):_.startsWith("vec3")?c(`is_inf_vec3(${b})`):_.startsWith("vec4")?c(`is_inf_vec4(${b})`):c(`is_inf(${b})`)}if(s==="math_is_finite"){let _=h("val");const b=u("val");return _==="float"&&(b.startsWith("vec")||b.startsWith("bitcast<vec"))&&(b.includes("vec2")&&(_="vec2<f32>"),b.includes("vec3")&&(_="vec3<f32>"),b.includes("vec4")&&(_="vec4<f32>")),_.startsWith("vec2")?c(`is_finite_vec2(${b})`):_.startsWith("vec3")?c(`is_finite_vec3(${b})`):_.startsWith("vec4")?c(`is_finite_vec4(${b})`):c(`is_finite(${b})`)}if(s==="math_mix"||s==="vec_mix"){const _=h("t");return _==="bool"||_==="boolean"||_.includes("bool")?`select(${u("a")}, ${u("b")}, ${u("t")})`:`mix(${u("a")}, ${u("b")}, ${u("t")})`}return s==="math_gt"?c(`(${u("a")} > ${u("b")})`):s==="math_lt"?c(`(${u("a")} < ${u("b")})`):s==="math_ge"?c(`(${u("a")} >= ${u("b")})`):s==="math_le"?c(`(${u("a")} <= ${u("b")})`):s==="math_eq"?c(`(${u("a")} == ${u("b")})`):s==="math_neq"?c(`(${u("a")} != ${u("b")})`):s==="math_and"?`(${u("a")} && ${u("b")})`:s==="math_or"?`(${u("a")} || ${u("b")})`:s==="math_xor"?`(${u("a")} != ${u("b")})`:s==="math_not"?`(!${u("val")})`:s==="vec_dot"?`dot(${u("a")}, ${u("b")})`:s==="vec_cross"?`cross(${u("a")}, ${u("b")})`:s==="vec_length"?`length(${u("a")})`:s==="vec_normalize"?`normalize(${u("a")})`:s==="vec_distance"?`distance(${u("a")}, ${u("b")})`:s==="vec_reflect"?`reflect(${u("a")}, ${u("b")})`:s==="vec_refract"?`refract(${u("a")}, ${u("b")}, ${this.resolveArg(e,"eta",n,r,o,"float",a)})`:(console.warn(`[WgslGen] compileMath UNHANDLED: ${s}`),"0.0")}resolveType(e){if(e==="float")return"f32";if(e==="int")return"i32";if(e==="int2")return"vec2<i32>";if(e==="int3")return"vec3<i32>";if(e==="int4")return"vec4<i32>";if(e==="bool")return"bool";if(e==="float2")return"vec2<f32>";if(e==="float3")return"vec3<f32>";if(e==="float4")return"vec4<f32>";if(e==="float3x3")return"mat3x3<f32>";if(e==="float4x4")return"mat4x4<f32>";if(e==="prng")return"i32";if(e==="string")throw new Error("Shaders do not support string type");if(e==="texture2d")return"texture_2d<f32>";if(e==="sampler")return"sampler";if(e==="sampler_comparison")return"sampler_comparison";if(e.includes("[")||e.startsWith("array<")){const n=e.match(/(\w+)\[(\d*)\]/);if(n){const o=n[1],a=n[2];return a?`array<${this.resolveType(o)}, ${a}>`:`array<${this.resolveType(o)} > `}const r=e.match(/^array<(.+?)(?:,\s*(\d+))?>$/);if(r){const o=r[1],a=r[2];return a?`array<${this.resolveType(o)}, ${a}>`:`array<${this.resolveType(o)}>`}return e}return e}getComponentCount(e){if(e==="float2"||e==="vec2<f32>"||e==="int2"||e==="vec2<i32>")return 2;if(e==="float3"||e==="vec3<f32>"||e==="int3"||e==="vec3<i32>")return 3;if(e==="float4"||e==="vec4<f32>"||e==="quat"||e==="int4"||e==="vec4<i32>")return 4;if(e==="float3x3"||e==="mat3x3<f32>")return 9;if(e==="float4x4"||e==="mat4x4<f32>")return 16;if(e.startsWith("array<")){const n=e.match(/,\s*(\d+)>/);if(n)return parseInt(n[1])}return 1}resolveCoercedArgs(e,n,r,o,a,i,s){const l=n.map(h=>this.resolveArg(e,h,o,a,i,"any",s));if(!a.nodeTypes)return l;const f=h=>{const c=s.find(_=>_.to===e.id&&_.portIn===h);let u;if(c?u=c.from:u=e[h],typeof u=="number")return Number.isInteger(u)?"int":"float";if(typeof u=="boolean")return"bool";let p;if(typeof u=="string"){if(a.varMap){const _=o.nodes.find(b=>b.id===u);if(_&&_.op==="var_get"){const b=_.var;if(a.varMap.has(b))return a.varTypes?.get(b)||"float"}}if(p=a.nodeTypes?.get(u),!p){const _=o.inputs.find(b=>b.id===u);_&&(p=_.type)}if(!p){const _=o.localVars.find(b=>b.id===u);_&&(p=_.type)}if(!p){const _=i.inputs?.find(b=>b.id===u)??i.tuningParams?.find(b=>b.id===u);_&&(p=_.type)}if(!p){const _=o.nodes.find(b=>b.id===u);_&&(_.op==="loop_index"&&(p="int"),_.op==="array_length"&&(p="int"),_.op==="resource_get_format"&&(p="int"))}if(p==="float"){const _=["math_add","math_sub","math_mul","math_div","math_mod"],b=o.nodes.find(g=>g.id===u);if(b&&_.includes(b.op)){const g=$=>{const k=s.find(z=>z.to===b.id&&z.portIn===$),A=k?k.from:b[$];if(typeof A=="number")return Number.isInteger(A)?"int":"float";if(typeof A=="string"){const z=a.nodeTypes?.get(A);if(z)return z;const O=o.inputs.find(T=>T.id===A);if(O)return O.type;const L=o.localVars.find(T=>T.id===A);if(L)return L.type;const U=i.inputs?.find(T=>T.id===A)??i.tuningParams?.find(T=>T.id===A);if(U)return U.type;const S=o.nodes.find(T=>T.id===A);if(S&&(S.op==="loop_index"||S.op==="array_length"))return"int"}return"float"},y=g("a"),v=g("b");(y==="int"||y==="i32")&&(v==="int"||v==="i32")&&(p="int")}}}return p||"float"},d=n.map(f);let m=l;return r==="float"?m=l.map((h,c)=>{const u=d[c];return u==="int"||u==="i32"||u==="bool"?`f32(${h})`:u==="int2"||u==="vec2<i32>"?`vec2<f32>(${h})`:u==="int3"||u==="vec3<i32>"?`vec3<f32>(${h})`:u==="int4"||u==="vec4<i32>"?`vec4<f32>(${h})`:h}):r==="unify"&&d.some(c=>c.includes("float")||c.includes("f32")||c.includes("mat"))&&(m=l.map((c,u)=>{const p=d[u];return p==="int"||p==="i32"||p==="bool"?`f32(${c})`:p==="int2"||p==="vec2<i32>"?`vec2<f32>(${c})`:p==="int3"||p==="vec3<i32>"?`vec3<f32>(${c})`:p==="int4"||p==="vec4<i32>"?`vec4<f32>(${c})`:c})),m}detectComponentGroups(e,n){const r=["x","y","z","w"],o=["x","y","z","w","xy","yz","zw","xyz","yzw","xyzw"],a=[];for(const i of o)e[i]!==void 0&&i.length>1&&a.push({key:i,startIdx:r.indexOf(i[0]),count:i.length});if(a.length===0)return null;for(let i=0;i<n;i++){const s=r[i];e[s]!==void 0&&!a.some(l=>l.startIdx<=i&&i<l.startIdx+l.count)&&a.push({key:s,startIdx:i,count:1})}return a.sort((i,s)=>i.startIdx-s.startIdx),a}formatLiteral(e,n){if(typeof e=="number"){if(n==="int"||n==="i32")return Math.floor(e).toString();const r=e.toString();return n==="float"||n==="f32"||n.startsWith("vec")||n.startsWith("mat")?r.toLowerCase().includes("e")||r.includes(".")?r:r+".0":r}if(typeof e=="boolean")return e.toString();if(Array.isArray(e)){n.replace("float","f32").replace("int","i32");const r=e.map(o=>this.formatLiteral(o,"float"));return e.length===2?`vec2<f32>(${r.join(", ")})`:e.length===3?`vec3<f32>(${r.join(", ")})`:e.length===4?`vec4<f32>(${r.join(", ")})`:e.length===9?`mat3x3<f32>(${r.join(", ")})`:e.length===16?`mat4x4<f32>(${r.join(", ")})`:`array<f32, ${e.length}>(${r.join(", ")})`}return"0.0"}formatZero(e){const n=this.resolveType(e);return n==="f32"?"0.0":n==="i32"?"0":n==="bool"?"false":n==="vec2<i32>"?"vec2<i32>(0)":n==="vec3<i32>"?"vec3<i32>(0)":n==="vec4<i32>"?"vec4<i32>(0)":n.startsWith("vec")?`${n}(0.0)`:n.startsWith("mat")?`${n}()`:`${n}()`}hashString(e){let n=0;for(let r=0;r<e.length;r++)n=Math.imul(n,31)+e.charCodeAt(r)|0;return n}static findUsedResources(e,n){const r=new Set,o=Array.isArray(n)?n:[...n.resources||[],...n.inputs,...n.tuningParams||[]],a=new Set(o.map(i=>i.id));return e.nodes.forEach(i=>{const s=mt[i.op];if(s){for(const[l,f]of Object.entries(s.args))if(f.refType==="resource"){let d=i[l];d===void 0&&i.args&&(d=i.args[l]),typeof d=="string"&&a.has(d)&&r.add(d)}}}),r}wrapCast(e,n,r){if(n===r||n==="any"||r==="any")return e;const o=this.getComponentCount(n),a=this.getComponentCount(r);return r==="float"?`f32(${e})`:r==="int"?`i32(${e})`:r==="bool"||r==="boolean"?`bool(${e})`:r.startsWith("float")&&a>1&&!r.includes("x")?o===1?`vec${a}<f32>(${e})`:`vec${a}<f32>(${e})`:r==="int2"||r==="vec2<i32>"?`vec2<i32>(${e})`:r==="int3"||r==="vec3<i32>"?`vec3<i32>(${e})`:r==="int4"||r==="vec4<i32>"?`vec4<i32>(${e})`:e}validateRecursion(e){const n=new Map;for(const i of e){const s=i.nodes.filter(l=>l.op==="call_func").map(l=>l.func);n.set(i.id,s)}const r=new Set,o=new Set,a=(i,s)=>{r.add(i),o.add(i),s.push(i);const l=n.get(i)||[];for(const f of l)if(!r.has(f))a(f,s);else if(o.has(f))throw new Error(`Recursion detected|cyclic dependency: ${s.join(" -> ")} -> ${f}`);o.delete(i),s.pop()};for(const i of e)r.has(i.id)||a(i.id,[])}static resolveImports(e){let n=e.code;for(const[r,o]of Object.entries(e.imports))n=n.replace(r,o);return n}}function gc(t,e){const n=new Nu(e),r={workgroupSize:t.workgroupSize,inputBinding:t.inputBinding,resourceBindings:Array.from(t.resourceBindings.entries()).map(([o,a])=>{const i=t.resourceTypes.get(o)||"buffer";return{id:o,binding:a,type:i}})};return t.inputLayout&&(r.inputLayout=ix(t.inputLayout,n)),r}function ix(t,e){const n={totalSize:t.totalSize,hasRuntimeArray:t.hasRuntimeArray,ops:[]};for(const r of t.fields)if(e.isRuntimeArray(r.type)){let o="float";const a=r.type.toLowerCase();a.includes("array<")?o=a.split("<")[1].split(",")[0].trim():o=a.split("[")[0].trim();const i=e.getSize(o,"std430"),s=e.getAlignment(o,"std430"),l=Math.ceil(i/s)*s;n.runtimeArray={name:r.name,offset:r.offset,stride:l,elementType:o,elementOp:da(0,o,[],e)}}else n.ops.push(da(r.offset,r.type,[r.name],e));return n}function da(t,e,n,r){const o=e.toLowerCase();if(["f32","float"].includes(o))return{op:"f32",offset:t,path:n};if(["i32","int"].includes(o))return{op:"i32",offset:t,path:n};if(["u32"].includes(o))return{op:"u32",offset:t,path:n};if(["bool"].includes(o))return{op:"u32",offset:t,path:n};if(o.startsWith("vec")||o.startsWith("float")&&!o.includes("x")&&!o.includes("[")||o.startsWith("int")&&o.length<=4){const i=r.getComponentCount(o),s=o.includes("u32")?"u32":o.includes("int")||o.includes("i32")?"i32":"f32";return{op:"vec",offset:t,path:n,size:i,elementType:s}}if(o.includes("mat")||o.includes("x")){const i=o.includes("3x3")||o.includes("3")?3:4;return{op:"mat",offset:t,path:n,dim:i}}if(o.includes("[")||o.startsWith("array<")){let i="float",s=0;if(o.startsWith("array<")){const m=o.substring(6,o.length-1).split(",");i=m[0].trim(),s=m.length>1?parseInt(m[1].trim()):0}else{const m=o.split("[");i=m[0].trim(),s=parseInt(m[1].split("]")[0])||0}const l=r.getSize(i,"std430"),f=r.getAlignment(i,"std430"),d=Math.ceil(l/f)*f;return{op:"array",offset:t,path:n,length:s,stride:d,elementType:i,elementOp:da(0,i,[],r)}}const a=r.getStructLayout(e,"std430");return{op:"struct",offset:t,path:n,members:a.members.map(i=>da(i.offset,i.type,[i.name],r))}}function Fu(t,e){switch(t){case"float":case"int":case"bool":return 1;case"float2":case"int2":return 2;case"float3":case"int3":return 3;case"float4":case"int4":return 4;case"float3x3":return 9;case"float4x4":return 16;default:{const n=e?.find(r=>r.id===t);return n?n.members.reduce((r,o)=>r+Fu(o.type,e),0):1}}}function yc(t,e){if(t.type==="texture2d"){const n=t.format||"rgba8";let r="rgba8unorm",o="Uint8Array",a=4;return n==="r32f"?(r="r32float",o="Float32Array",a=1):n==="rgba32f"?(r="rgba32float",o="Float32Array",a=4):n==="rgba16f"?(r="rgba16float",o="Float32Array",a=4):n==="r16f"?(r="r16float",o="Float32Array",a=1):n==="r8"&&(r="r8unorm",o="Uint8Array",a=1),{type:"texture2d",componentCount:a,typedArray:o,format:r}}else{const n=t.dataType||"float",r=n.toLowerCase();let o="Float32Array",a=!1,i=1;return e?.find(l=>l.id===n)?i=Fu(n,e):(r.includes("int")&&!r.includes("float")&&(a=!0,r==="bool"?o="Uint32Array":o="Int32Array"),r.includes("2")?i=2:r.includes("3")?i=3:r.includes("4")?i=4:r.includes("mat")&&(r.includes("3x3")?i=9:r.includes("4x4")&&(i=16))),{type:"buffer",componentCount:i,typedArray:o,isInteger:a}}}class sx{constructor(){this.functionAnalysis=new Map}compile(e,n){const r=this.compileToSource(e,n),o=r.replace("require('./intrinsics.js');",bc),a=this.compileInitToSource(e),i=a.replace("require('./intrinsics.js');",bc);try{const s=Object.getPrototypeOf(async function(){}).constructor,l=new s("ctx",o),f=new s("device",i);return{taskCode:r,initCode:a,finalTaskCode:o,finalInitCode:i,task:l,init:f}}catch(s){throw console.error(`JIT Compilation Failed:
`,o),s}}detectComponentGroups(e,n){const r=["x","y","z","w"],o=["x","y","z","w","xy","yz","zw","xyz","yzw","xyzw"],a=[];for(const i of o)e[i]!==void 0&&i.length>1&&a.push({key:i,startIdx:r.indexOf(i[0]),count:i.length});if(a.length===0)return null;for(let i=0;i<n;i++){const s=r[i];e[s]!==void 0&&!a.some(l=>l.startIdx<=i&&i<l.startIdx+l.count)&&a.push({key:s,startIdx:i,count:1})}return a.sort((i,s)=>i.startIdx-s.startIdx),a}hasResult(e){return e.startsWith("math_")||e.startsWith("vec_")||e.startsWith("mat_")||e.startsWith("quat_")?!0:["float","int","bool","literal","loop_index","float2","float3","float4","int2","int3","int4","float3x3","float4x4","mat_mul","mat_extract","static_cast_float","static_cast_int","static_cast_bool","static_cast_int2","static_cast_int3","static_cast_int4","static_cast_float2","static_cast_float3","static_cast_float4","struct_construct","struct_extract","array_construct","array_extract","array_length","array_set","var_get","buffer_load","texture_load","texture_sample","call_func","vec_swizzle","color_mix","vec_get_element","quat","resource_get_size","resource_get_format","resource_is_bound","builtin_get","const_get","atomic_load","atomic_add","atomic_sub","atomic_min","atomic_max","atomic_exchange","prng_make","prng_next"].includes(e)}compileToSource(e,n){this.ir=e,this.functionAnalysis.clear();const r=e.functions;r.forEach(h=>{this.functionAnalysis.set(h.id,ur(h,e))});const o=r.find(h=>h.id===n);if(!o)throw new Error(`Entry point '${n}' not found`);const a=[];a.push('"use strict";'),a.push(`// Compiled Graph starting at: ${o.id}`);const i=(h,c="var")=>{const u=h.replace(/[^a-zA-Z0-9_]/g,"_");return c==="input"?`i_${u}`:c==="func"?`func_${u}`:`v_${u}`},s=h=>`n_${h.replace(/[^a-zA-Z0-9_]/g,"_")}`,l=h=>i(h,"func");this.emitIntrinsicHelpers(a),a.push("");const f=new Set,d=new Set,m=h=>{if(d.has(h))throw new Error(`Recursion detected: ${h}`);if(f.has(h))return;f.add(h),d.add(h);const c=r.find(u=>u.id===h);c&&c.nodes.forEach(u=>{if(u.op==="call_func"&&typeof u.func=="string"){const p=r.find(_=>_.id===u.func);p&&p.type==="cpu"&&m(u.func)}}),d.delete(h)};m(o.id);for(const h of f){const c=r.find(u=>u.id===h);if(c){const u=this.functionAnalysis.get(c.id);this.emitFunction(c,a,i,s,l,r,u.inferredTypes),a.push("")}}a.push("// Entry Point"),a.push("const entryInputs = {};");for(const h of o.inputs)a.push(`entryInputs['${h.id}'] = ctx.inputs.get('${h.id}');`);return a.push(`return await ${l(o.id)}(ctx, entryInputs);`),a.join(`
`)}emitIntrinsicHelpers(e){e.push(`
// Helper to ensure GPU Resource exists (simplistic version)
// In a real app this would call back to a robust resource manager or use a more advanced generated implementation.
// For this JIT, we assume intrinsics.js provides _ensureGpuResource and similar.
require('./intrinsics.js');
`)}compileInitToSource(e){const n=[];n.push('"use strict";'),this.emitIntrinsicHelpers(n);const r=new Map,o=new Map,a=new gn;return e.functions.forEach(i=>{i.nodes.forEach(s=>{if((s.op==="call_func"||s.op==="cmd_dispatch")&&typeof s.func=="string"){const l=e.functions.find(f=>f.id===s.func);if(l&&l.type==="shader"&&!r.has(l.id)){const f=No(l,e),d=a.compile(e,l.id,{stage:"compute",inputBinding:1,nodeTypes:f});r.set(l.id,{code:gn.resolveImports(d),metadata:d.metadata})}}if(s.op==="cmd_draw"){const l=`${s.vertex}|${s.fragment}`;if(!o.has(l)){const f=e.functions.find(_=>_.id===s.vertex),d=e.functions.find(_=>_.id===s.fragment),m=f?No(f,e):void 0,h=d?No(d,e):void 0,c=a.compile(e,s.vertex,{stage:"vertex",inputBinding:1,nodeTypes:m}),u=a.compile(e,s.fragment,{stage:"fragment",inputBinding:1,nodeTypes:h}),p={...c.metadata,resourceBindings:new Map([...c.metadata.resourceBindings,...u.metadata.resourceBindings]),resourceTypes:new Map([...c.metadata.resourceTypes,...u.metadata.resourceTypes])};o.set(l,{vsCode:gn.resolveImports(c),fsCode:gn.resolveImports(u),metadata:p,vertexId:s.vertex,pipelineDef:s.pipeline})}}})}),n.push(`
      const pipelines = new Map(); // id -> GPUComputePipeline
      const renderPipelines = new Map(); // key -> GPURenderPipeline
      const precomputedInfos = new Map(); // id -> precomputedInfo
      const resourceInfos = new Map(); // id -> PrecomputedResourceInfo
    `),n.push("  // Precompute Resource Layouts"),e.resources.forEach(i=>{const s=yc(i,e.structs);n.push(`  resourceInfos.set('${i.id}', ${JSON.stringify(s)});`)}),[...e.inputs,...e.tuningParams||[]].forEach(i=>{if(i.type==="texture2d"){const s=yc({...i,type:"texture2d"},e.structs);n.push(`  resourceInfos.set('${i.id}', ${JSON.stringify(s)});`)}}),n.push(""),n.push("  // Pre-compile Shaders"),r.forEach((i,s)=>{n.push("  {"),n.push(`    const code = ${JSON.stringify(i.code)};`),n.push("    const module = device.createShaderModule({ code });"),n.push("    const pipeline = await device.createComputePipelineAsync({"),n.push("       layout: 'auto',"),n.push("       compute: { module, entryPoint: 'main' }"),n.push("    });"),n.push(`    pipelines.set('${s}', pipeline);`);const l=gc(i.metadata,e.structs||[]);n.push(`    precomputedInfos.set('${s}', ${JSON.stringify(l)});`),n.push("  }")}),o.forEach((i,s)=>{n.push("  {"),n.push(`     const vsCode = ${JSON.stringify(i.vsCode)};`),n.push(`     const fsCode = ${JSON.stringify(i.fsCode)};`),n.push("     const vsModule = device.createShaderModule({ code: vsCode });"),n.push("     const fsModule = device.createShaderModule({ code: fsCode });");const l={format:"rgba8unorm"};i.pipelineDef?.blend&&(l.blend=i.pipelineDef.blend),n.push("     const pipeline = await device.createRenderPipelineAsync({"),n.push("        layout: 'auto',"),n.push("        vertex: { module: vsModule, entryPoint: 'main' },"),n.push(`        fragment: { module: fsModule, entryPoint: 'main', targets: [${JSON.stringify(l)}] }`),n.push("     });"),n.push(`     renderPipelines.set('${s}', pipeline);`);const f=gc(i.metadata,e.structs||[]);n.push(`    precomputedInfos.set('${i.vertexId}', ${JSON.stringify(f)});`),n.push("  }")}),n.push(`
      return _createExecutor(device, pipelines, precomputedInfos, renderPipelines, resourceInfos);
    `),n.join(`
`)}emitFunction(e,n,r,o,a,i,s){n.push(`async function ${a(e.id)} (ctx, args) {
      `);for(const c of e.inputs)n.push(`  let ${r(c.id,"input")} = args['${c.id}']; `);for(const c of e.localVars){let u;if(c.initialValue!==void 0)u=JSON.stringify(c.initialValue);else{const p=c.type?.toLowerCase()||"float";p==="float2"||p==="int2"?u="[0, 0]":p==="float3"||p==="int3"?u="[0, 0, 0]":p==="float4"||p==="int4"?u="[0, 0, 0, 0]":p==="float3x3"?u="[0,0,0,0,0,0,0,0,0]":p==="float4x4"?u="[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]":p==="bool"||p==="boolean"?u="false":u="0"}n.push(`  let ${r(c.id,"var")} = ${u}; `)}const l=Ut(e),f=e.nodes.filter(c=>this.hasResult(c.op));for(const c of f)n.push(`  let ${o(c.id)}; `);const d=new Set,m=c=>{if(d.has(c))return;const u=e.nodes.find(p=>p.id===c);!u||this.isExecutable(u.op,l,u.id)||(d.add(c),l.filter(p=>p.to===c&&p.type==="data").forEach(p=>{m(p.from)}),n.push(`  ${o(u.id)} = ${this.compileExpression(u,e,r,o,a,i,s,!0,m,l)}; `))};n.push("  // Pure Nodes (lazy emission)");const h=e.nodes.filter(c=>!l.some(p=>p.to===c.id&&p.type==="execution")&&this.isExecutable(c.op,l,c.id));for(const c of h)this.emitChain("  ",c,e,n,new Set,r,o,a,i,s,m,l);n.push("  return 0; // Default return"),n.push("}")}isExecutable(e,n,r){return e.startsWith("cmd_")||e.startsWith("flow_")||e==="var_set"||e==="buffer_store"||e==="texture_store"||e==="call_func"||e==="func_return"||e==="array_set"||e==="cmd_resize_resource"||e==="cmd_draw"||e==="cmd_dispatch"||e==="atomic_store"||e==="atomic_add"||e==="atomic_sub"||e==="atomic_min"||e==="atomic_max"||e==="atomic_exchange"||e==="prng_next"?!0:n.some(a=>a.from===r&&a.type==="execution")}emitChain(e,n,r,o,a,i,s,l,f,d,m,h){let c=n;for(;c&&!(a.has(c.id)&&c.op!=="flow_loop");){a.add(c.id),h.filter(p=>p.to===c.id&&p.type==="data").forEach(p=>m(p.from));for(const p in c){if(["id","op","metadata","func","args","dispatch"].includes(p))continue;const _=c[p];typeof _=="string"&&r.nodes.some(b=>b.id===_)&&m(_)}if(this.hasResult(c.op))this.emitNode(e,c,r,o,i,s,l,f,d,m,h);else if(c.op==="flow_branch"){this.emitBranch(e,c,r,o,a,i,s,l,f,d,m,h);return}else if(c.op==="flow_loop"){this.emitLoop(e,c,r,o,a,i,s,l,f,d,m,h);return}else if(c.op==="func_return"){o.push(`${e}return ${this.resolveArg(c,"val",r,i,s,l,f,d,m,h)};`);return}else this.emitNode(e,c,r,o,i,s,l,f,d,m,h);const u=h.find(p=>p.from===c.id&&p.portOut==="exec_out"&&p.type==="execution");c=u?r.nodes.find(p=>p.id===u.to):void 0}}emitBranch(e,n,r,o,a,i,s,l,f,d,m,h){const c=this.resolveArg(n,"cond",r,i,s,l,f,d,m,h);o.push(`${e}if (${c}) {`);const u=h.find(g=>g.from===n.id&&g.portOut==="exec_true"&&g.type==="execution"),p=u?r.nodes.find(g=>g.id===u.to):void 0;p&&this.emitChain(e+"  ",p,r,o,new Set(a),i,s,l,f,d,m,h),o.push(`${e}} else {`);const _=h.find(g=>g.from===n.id&&g.portOut==="exec_false"&&g.type==="execution"),b=_?r.nodes.find(g=>g.id===_.to):void 0;b&&this.emitChain(e+"  ",b,r,o,new Set(a),i,s,l,f,d,m,h),o.push(`${e}}`)}emitLoop(e,n,r,o,a,i,s,l,f,d,m,h){const c=`loop_${n.id.replace(/[^a-zA-Z0-9_]/g,"_")}`;if(n.count!==void 0){const g=this.resolveArg(n,"count",r,i,s,l,f,d,m,h);o.push(`${e}for (let ${c} = 0; ${c} < ${g}; ${c}++) {`)}else{const g=this.resolveArg(n,"start",r,i,s,l,f,d,m,h),y=this.resolveArg(n,"end",r,i,s,l,f,d,m,h);o.push(`${e}for (let ${c} = ${g}; ${c} < ${y}; ${c}++) {`)}const u=h.find(g=>g.from===n.id&&g.portOut==="exec_body"&&g.type==="execution"),p=u?r.nodes.find(g=>g.id===u.to):void 0;p&&this.emitChain(e+"  ",p,r,o,new Set(a),i,s,l,f,d,m,h),o.push(`${e}}`);const _=h.find(g=>g.from===n.id&&g.portOut==="exec_completed"&&g.type==="execution"),b=_?r.nodes.find(g=>g.id===_.to):void 0;b&&this.emitChain(e,b,r,o,a,i,s,l,f,d,m,h)}emitNode(e,n,r,o,a,i,s,l,f,d,m){if(n.op==="cmd_dispatch"){const h=n.func,c=this.resolveArg(n,"threads",r,a,i,s,l,f,d,m);o.push(`${e}await ctx.globals.dispatch('${h}', ${c}, ${this.generateArgsObject(n,r,a,i,s,l,f,d,m)});`)}else if(n.op==="call_func"){const h=n.func,c=l.find(u=>u.id===h);if(c?.type==="shader"){const u=this.resolveArg(n,"threads",r,a,i,s,l,f,d,m);o.push(`${e}await ctx.globals.dispatch('${h}', ${u}, ${this.generateArgsObject(n,r,a,i,s,l,f,d,m)});`)}else c&&o.push(`${e}${i(n.id)} = await ${s(h)}(ctx, ${this.generateArgsObject(n,r,a,i,s,l,f,d,m)});`)}else if(n.op==="cmd_draw"){const h=n.target,c=n.vertex,u=n.fragment,p=this.resolveArg(n,"count",r,a,i,s,l,f,d,m),_=JSON.stringify(n.pipeline||{});o.push(`${e}await ctx.globals.draw('${h}', '${c}', '${u}', ${p}, ${_});`)}else if(n.op==="cmd_resize_resource"){const h=n.resource,c=this.resolveArg(n,"size",r,a,i,s,l,f,d,m),u=p=>m.find(b=>b.to===n.id&&b.portIn===p&&b.type==="data")||n[p]!==void 0?this.resolveArg(n,p,r,a,i,s,l,f,d,m):"undefined";o.push(`${e}ctx.globals.resize('${h}', ${c}, ${u("format")}, ${u("clear")});`)}else if(n.op==="var_set"){const h=this.resolveArg(n,"val",r,a,i,s,l,f,d,m),c=n.var;if(r.localVars.some(u=>u.id===c))o.push(`${e}${a(c,"var")} = ${h};`);else if(r.inputs.some(u=>u.id===c))o.push(`${e}${a(c,"input")} = ${h};`);else throw new Error(`JIT Error: Cannot set undefined variable '${c}'`)}else if(n.op==="cmd_sync_to_cpu"){const h=n.resource;o.push(`${e}ctx.globals.executeSyncToCpu('${h}');`)}else if(n.op==="cmd_wait_cpu_sync"){const h=n.resource;o.push(`${e}await ctx.globals.executeWaitCpuSync('${h}');`)}else if(n.op==="cmd_copy_buffer"){const h=n.src,c=n.dst,u=(g,y)=>m.find($=>$.to===n.id&&$.portIn===g&&$.type==="data")||n[g]!==void 0?this.resolveArg(n,g,r,a,i,s,l,f,d,m):y,p=u("src_offset","0"),_=u("dst_offset","0"),b=u("count","Infinity");o.push(`${e}ctx.globals.copyBuffer('${h}', '${c}', ${p}, ${_}, ${b});`)}else if(n.op==="cmd_copy_texture"){const h=n.src,c=n.dst,u=v=>m.find(k=>k.to===n.id&&k.portIn===v&&k.type==="data")||n[v]!==void 0?this.resolveArg(n,v,r,a,i,s,l,f,d,m):"null",p=u("src_rect"),_=u("dst_rect"),b=n.sample!==void 0?JSON.stringify(n.sample):"null",g=u("alpha")==="null"?"1.0":u("alpha"),y=n.normalized===!0?"true":"false";o.push(`${e}ctx.globals.copyTexture('${h}', '${c}', ${p}, ${_}, ${b}, ${g}, ${y});`)}else if(n.op==="buffer_store"){const h=n.buffer,c=this.resolveArg(n,"index",r,a,i,s,l,f,d,m),u=this.resolveArg(n,"value",r,a,i,s,l,f,d,m);o.push(`${e}{ const _s = ctx.resources.get('${h}'); _s.data[${c}] = ${u}; if (_s.flags) _s.flags.cpuDirty = true; }`)}else if(n.op==="atomic_store"){const h=n.counter,c=this.resolveArg(n,"index",r,a,i,s,l,f,d,m),u=this.resolveArg(n,"value",r,a,i,s,l,f,d,m);o.push(`${e}ctx.resources.get('${h}').data[${c}] = (${u}) | 0;`)}else if(n.op==="texture_store"){const h=n.tex,c=this.resolveArg(n,"coords",r,a,i,s,l,f,d,m),u=this.resolveArg(n,"value",r,a,i,s,l,f,d,m);o.push(`${e}((coords, val) => {
        const res = ctx.resources.get('${h}');
        if (!res) return;
        const x = Math.floor(coords[0]), y = Math.floor(coords[1]);
        if (x >= 0 && x < res.width && y >= 0 && y < res.height) res.data[y * res.width + x] = val;
      })(${c}, ${u});`)}else if(n.op==="prng_next"){const h=n.prng,c=n.type||"float",u=a(h,"var"),_={float:1,int:1,float2:2,float3:3,float4:4,int2:2,int3:3,int4:4}[c]||1,b=c==="int"||c.startsWith("int");if(_===1&&!b)o.push(`${e}${u} = (${u} + 1) | 0;`),o.push(`${e}${i(n.id)} = _prng_hash_to_float(${u});`);else if(_===1&&b){o.push(`${e}${u} = (${u} + 1) | 0;`);const g=n.min!==void 0||m.some(v=>v.to===n.id&&v.portIn==="min"&&v.type==="data"),y=n.max!==void 0||m.some(v=>v.to===n.id&&v.portIn==="max"&&v.type==="data");if(g&&y){const v=this.resolveArg(n,"min",r,a,i,s,l,f,d,m),$=this.resolveArg(n,"max",r,a,i,s,l,f,d,m);o.push(`${e}${i(n.id)} = (Math.trunc(${v}) + (((_prng_hash(${u}) >>> 0) % (Math.trunc(${$}) - Math.trunc(${v}) + 1)) | 0)) | 0;`)}else o.push(`${e}${i(n.id)} = _prng_hash(${u});`)}else{o.push(`${e}${u} = (${u} + ${_}) | 0;`);const g=[];for(let y=0;y<_;y++){const v=_-1-y,$=v>0?`(${u} - ${v}) | 0`:u;b?g.push(`_prng_hash(${$})`):g.push(`_prng_hash_to_float(${$})`)}o.push(`${e}${i(n.id)} = [${g.join(", ")}];`)}}else this.hasResult(n.op)&&o.push(`${e}${i(n.id)} = ${this.compileExpression(n,r,a,i,s,l,f,!0,d,m)};`)}resolveArg(e,n,r,o,a,i,s,l,f,d){const m=d.find(c=>c.to===e.id&&(c.portIn===n||n==="val"&&c.portIn==="value")&&c.type==="data");if(m){const c=r.nodes.find(u=>u.id===m.from);if(c){let u=this.compileExpression(c,r,o,a,i,s,l,!1,f,d);const p=e[n];if(typeof p=="string"&&p.includes(".")){const _=p.substring(p.indexOf(".")+1),b={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},g=[..._].map(y=>b[y]);return g.length===1?`(${u})[${g[0]}]`:`[${g.map(y=>`(${u})[${y}]`).join(", ")}]`}return u}}let h;if(n.includes(".")||n.includes("[")){const c=n.split(/[\.\[\]]/).filter(p=>p!=="");let u=e;for(const p of c){if(u==null)break;u=u[p]}h=u}else h=e[n];if(h!==void 0){const c=u=>{if(typeof u=="string"&&!["var","func","resource","buffer"].includes(n)){let p=u,_;const b=u.indexOf(".");b!==-1&&(p=u.substring(0,b),_=u.substring(b+1));const g=v=>{if(!_)return v;const $={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},k=[..._].map(A=>$[A]);return k.length===1?`(${v})[${k[0]}]`:`[${k.map(A=>`(${v})[${A}]`).join(", ")}]`};if(r.localVars.some(v=>v.id===p))return g(o(p,"var"));if(r.inputs.some(v=>v.id===p))return g(o(p,"input"));if(this.ir?.inputs.some(v=>v.id===p)||this.ir?.tuningParams?.some(v=>v.id===p))return g(`ctx.inputs.get('${p}')`);const y=r.nodes.find(v=>v.id===p);if(y&&y.id!==e.id)return g(this.compileExpression(y,r,o,a,i,s,l,!1,f,d))}return JSON.stringify(u)};return Array.isArray(h)?`[${h.map(u=>c(u)).join(", ")}]`:c(h)}return"0"}compileExpression(e,n,r,o,a,i,s,l=!1,f,d){if(!l&&this.hasResult(e.op))return f(e.id),o(e.id);const m=(u="a")=>this.resolveArg(e,u,n,r,o,a,i,s,f,d),h=(u="b")=>this.resolveArg(e,u,n,r,o,a,i,s,f,d),c=(u="val")=>this.resolveArg(e,u,n,r,o,a,i,s,f,d);switch(e.op){case"var_get":{const u=e.var;return n.localVars.some(p=>p.id===u)?r(u,"var"):n.inputs.some(p=>p.id===u)?r(u,"input"):`((id) => { const v = ctx.inputs.get(id); if (v !== undefined) return v; throw new Error("Variable '" + id + "' is not defined"); })('${u}')`}case"literal":return e.type==="int"?`Math.trunc(${JSON.stringify(e.val)})`:JSON.stringify(e.val);case"loop_index":return`loop_${e.loop.replace(/[^a-zA-Z0-9_]/g,"_")}`;case"buffer_load":{const u=e.buffer,p=m("index");return`((idx) => {
          const res = ctx.resources.get('${u}');
          if (!res) return 0;
          if (idx < 0 || idx >= res.data.length) throw new Error("Runtime Error: buffer_load OOB");
          return res.data[idx];
        })(${p})`}case"atomic_load":{const u=e.counter,p=m("index");return`((idx) => {
          const res = ctx.resources.get('${u}');
          return res ? (res.data[idx] | 0) : 0;
        })(${p})`}case"atomic_add":case"atomic_sub":case"atomic_min":case"atomic_max":case"atomic_exchange":{const u=e.counter,p=m("index"),_=m("value");return`((idx, v) => {
          const res = ctx.resources.get('${u}');
          if (!res) return 0;
          const old = res.data[idx] | 0;
          res.data[idx] = (${{atomic_add:"old + v",atomic_sub:"old - v",atomic_min:"Math.min(old, v)",atomic_max:"Math.max(old, v)",atomic_exchange:"v"}[e.op]}) | 0;
          return old;
        })(${p}, ${_})`}case"texture_load":{const u=e.tex,p=this.resolveArg(e,"coords",n,r,o,a,i,s,f,d);return`((coords) => {
          const res = ctx.resources.get('${u}');
          if (!res) return [0, 0, 0, 0];
          const x = Math.floor(coords[0]), y = Math.floor(coords[1]);
          if (x < 0 || x >= res.width || y < 0 || y >= res.height) return [0, 0, 0, 0];
          return res.data[y * res.width + x] || [0, 0, 0, 0];
        })(${p})`}case"texture_sample":{const u=e.tex,p=this.resolveArg(e,"coords",n,r,o,a,i,s,f,d);return`((uv) => {
          const res = ctx.resources.get('${u}');
          if (!res) return [0, 0, 0, 0];
          const wrap = res.def.sampler?.wrap || 'clamp';
          const filter = res.def.sampler?.filter || 'nearest';

          const applyWrap = (c) => {
            if (wrap === 'repeat') return c - Math.floor(c);
            if (wrap === 'mirror') {
              const m = (c % 2 + 2) % 2;
              return m > 1 ? 2 - m : m;
            }
            return Math.max(0, Math.min(1, c));
          };

          const u = applyWrap(uv[0]);
          const v = applyWrap(uv[1]);
          const w = res.width;
          const h = res.height;

          const getSample = (x, y) => {
             const sx = Math.max(0, Math.min(w - 1, x));
             const sy = Math.max(0, Math.min(h - 1, y));
             const val = res.data[sy * w + sx];
             return val !== undefined ? val : [0, 0, 0, 0];
          };

          if (filter === 'nearest') {
            const x = Math.min(Math.floor(u * w), w - 1);
            const y = Math.min(Math.floor(v * h), h - 1);
            const val = res.data[y * w + x];
            return val !== undefined ? val : [0, 0, 0, 0];
          }

          const tx = u * w - 0.5;
          const ty = v * h - 0.5;
          const x0 = Math.floor(tx);
          const y0 = Math.floor(ty);
          const fx = tx - x0;
          const fy = ty - y0;

          const getWrappedSample = (targetX, targetY) => {
             let sx = targetX;
             let sy = targetY;
             if (wrap === 'clamp') {
                sx = Math.max(0, Math.min(w - 1, sx));
                sy = Math.max(0, Math.min(h - 1, sy));
             } else if (wrap === 'repeat') {
                sx = ((sx % w) + w) % w;
                sy = ((sy % h) + h) % h;
             } else if (wrap === 'mirror') {
                const mx = ((sx % (2 * w)) + (2 * w)) % (2 * w);
                sx = mx >= w ? 2 * w - 1 - mx : mx;
                const my = ((sy % (2 * h)) + (2 * h)) % (2 * h);
                sy = my >= h ? 2 * h - 1 - my : my;
             }
             const val = res.data[sy * w + sx];
             return val !== undefined ? val : [0, 0, 0, 0];
          };

          const s00 = getWrappedSample(x0, y0);
          const s10 = getWrappedSample(x0 + 1, y0);
          const s01 = getWrappedSample(x0, y0 + 1);
          const s11 = getWrappedSample(x0 + 1, y0 + 1);

          const lerp = (a, b, t) => {
             if (Array.isArray(a)) return a.map((v, i) => v * (1 - t) + b[i] * t);
             return a * (1 - t) + b * t;
          };

          const top = lerp(s00, s10, fx);
          const bot = lerp(s01, s11, fx);
          return lerp(top, bot, fy);
        })(${p})`}case"resource_get_size":return`((id) => {
          const res = ctx.resources.get(id);
          if (!res) return [0, 0];
          return res.def.type === 'texture2d' ? [res.width, res.height] : [res.width, 0];
        })('${e.resource}')`;case"resource_get_format":return`((id) => {
          const res = ctx.resources.get(id);
          return res ? (res.def.format || 'rgba8') : 'rgba8';
        })('${e.resource}')`;case"resource_is_bound":return`(ctx.inputs.get('tex_bound_${e.resource}') > 0.5)`;case"math_neg":return`_applyUnary(${c()}, v => -v)`;case"math_abs":return`_applyUnary(${c()}, Math.abs)`;case"math_sign":return`_applyUnary(${c()}, Math.sign)`;case"math_sin":return`_applyUnary(${c()}, Math.sin)`;case"math_cos":return`_applyUnary(${c()}, Math.cos)`;case"math_tan":return`_applyUnary(${c()}, Math.tan)`;case"math_asin":return`_applyUnary(${c()}, Math.asin)`;case"math_acos":return`_applyUnary(${c()}, Math.acos)`;case"math_atan":return`_applyUnary(${c()}, Math.atan)`;case"math_sinh":return`_applyUnary(${c()}, Math.sinh)`;case"math_cosh":return`_applyUnary(${c()}, Math.cosh)`;case"math_tanh":return`_applyUnary(${c()}, Math.tanh)`;case"math_sqrt":return`_applyUnary(${c()}, Math.sqrt)`;case"math_exp":return`_applyUnary(${c()}, Math.exp)`;case"math_log":return`_applyUnary(${c()}, Math.log)`;case"math_ceil":return`_applyUnary(${c()}, Math.ceil)`;case"math_floor":return`_applyUnary(${c()}, Math.floor)`;case"math_trunc":return`_applyUnary(${c()}, Math.trunc)`;case"math_fract":return`_applyUnary(${c()}, v => v - Math.floor(v))`;case"math_is_nan":return`_applyUnary(${c()}, v => isNaN(v) ? 1.0 : 0.0)`;case"math_is_inf":return`_applyUnary(${c()}, v => (!isFinite(v) && !isNaN(v)) ? 1.0 : 0.0)`;case"math_is_finite":return`_applyUnary(${c()}, v => isFinite(v) ? 1.0 : 0.0)`;case"math_flush_subnormal":return`_applyUnary(${c()}, v => Math.abs(v) < 1.17549435e-38 ? 0.0 : v)`;case"math_mantissa":return`_applyUnary(${c()}, v => {
        if (v === 0 || !isFinite(v)) return v;
        const exp = Math.floor(Math.log2(Math.abs(v))) + 1;
        return v * Math.pow(2, -exp);
      })`;case"math_exponent":return`_applyUnary(${c()}, v => {
        if (v === 0 || !isFinite(v)) return 0;
        return Math.floor(Math.log2(Math.abs(v))) + 1;
      })`;case"math_add":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, (x, y) => x + y)`}case"math_sub":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, (x, y) => x - y)`}case"math_mul":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, (x, y) => x * y)`}case"math_div":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d),_=this.getArgType(e,"a",n,s),b=this.getArgType(e,"b",n,s);return(_==="int"||_==="i32")&&(b==="int"||b==="i32")?`_applyBinary(${u}, ${p}, (x, y) => Math.trunc(x / y))`:`_applyBinary(${u}, ${p}, (x, y) => x / y)`}case"math_mod":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, (x, y) => x % y)`}case"math_pow":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, Math.pow)`}case"math_min":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, Math.min)`}case"math_max":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, Math.max)`}case"math_atan2":{const[u,p]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, Math.atan2)`}case"math_clamp":{const u=this.resolveCoercedArgs(e,["val","min","max"],"unify",n,r,o,a,i,s,f,d);return`((v, min, max) => _applyBinary(_applyBinary(v, min, Math.max), max, Math.min))(${u[0]}, ${u[1]}, ${u[2]})`}case"math_mad":{const[u,p,_]=this.resolveCoercedArgs(e,["a","b","c"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(_applyBinary(${u}, ${p}, (x, y) => x * y), ${_}, (x, y) => x + y)`}case"math_mix":{const[u,p,_]=this.resolveCoercedArgs(e,["a","b","t"],"unify",n,r,o,a,i,s,f,d);return`((a, b, t) => _applyBinary(_applyBinary(a, _applyBinary(1, t, (x, y) => x - y), (x, y) => x * y), _applyBinary(b, t, (x, y) => x * y), (x, y) => x + y))(${u}, ${p}, ${_})`}case"math_step":{const[u,p]=this.resolveCoercedArgs(e,["edge","x"],"unify",n,r,o,a,i,s,f,d);return`_applyBinary(${u}, ${p}, (e, x) => x < e ? 0 : 1)`}case"math_smoothstep":{const[u,p,_]=this.resolveCoercedArgs(e,["edge0","edge1","x"],"unify",n,r,o,a,i,s,f,d);return`((v, edge0, edge1) => _applyUnary(_applyBinary(_applyBinary(v, edge0, (x, e) => (x - e)), _applyBinary(edge1, edge0, (e1, e0) => (e1 - e0)), (n, d) => Math.max(0, Math.min(1, n / d))), t => t * t * (3 - 2 * t)))(${_}, ${u}, ${p})`}case"mat_identity":{const u=Number(e.size||4),p=new Array(u*u).fill(0);for(let _=0;_<u;_++)p[_*u+_]=1;return JSON.stringify(p)}case"mat_mul":return`_mat_mul(${m()}, ${h()})`;case"mat_extract":return`(${m()}[${h("index")}])`;case"mat_transpose":return`((m) => {
          const dim = Math.sqrt(m.length);
          const out = new Array(m.length);
          for(let r=0; r<dim; r++) for(let c=0; c<dim; c++) out[c*dim + r] = m[r*dim + c];
          return out;
        })(${m()})`;case"color_mix":{const u=m(),p=h();if(d.find(b=>b.to===e.id&&b.portIn==="t"&&b.type==="data")||e.t!==void 0){const b=this.resolveArg(e,"t",n,r,o,a,i,s,f,d);return`_applyBinary(_applyBinary(${u}, _applyBinary(1, ${b}, (x, y) => x - y), (x, y) => x * y), _applyBinary(${p}, ${b}, (x, y) => x * y), (x, y) => x + y)`}return`((d, s) => {
          if (!Array.isArray(s) || !Array.isArray(d)) return s;
          const out = new Array(4);
          const sa = s[3] === undefined ? 1.0 : s[3];
          const da = d[3] === undefined ? 1.0 : d[3];
          const ra = sa + da * (1 - sa);
          for(let i=0; i<3; i++) out[i] = ra < 1e-6 ? 0 : (s[i]*sa + d[i]*da*(1-sa))/ra;
          out[3] = ra;
          return out;
        })(${u}, ${p})`}case"vec_get_element":return`(${this.resolveArg(e,"vec",n,r,o,a,i,s,f,d)}[${this.resolveArg(e,"index",n,r,o,a,i,s,f,d)}])`;case"vec_mix":{const[u,p,_]=this.resolveCoercedArgs(e,["a","b","t"],"unify",n,r,o,a,i,s,f,d);return`((a, b, t) => _applyBinary(_applyBinary(a, _applyBinary(1, t, (x, y) => x - y), (x, y) => x * y), _applyBinary(b, t, (x, y) => x * y), (x, y) => x + y))(${u}, ${p}, ${_})`}case"math_pi":return"Math.PI";case"math_e":return"Math.E";case"math_gt":return`_applyBinary(${m()}, ${h()}, (x, y) => x > y ? 1.0 : 0.0)`;case"math_lt":return`_applyBinary(${m()}, ${h()}, (x, y) => x < y ? 1.0 : 0.0)`;case"math_ge":return`_applyBinary(${m()}, ${h()}, (x, y) => x >= y ? 1.0 : 0.0)`;case"math_le":return`_applyBinary(${m()}, ${h()}, (x, y) => x <= y ? 1.0 : 0.0)`;case"math_eq":return`_applyBinary(${m()}, ${h()}, (x, y) => x === y ? 1.0 : 0.0)`;case"math_neq":return`_applyBinary(${m()}, ${h()}, (x, y) => x !== y ? 1.0 : 0.0)`;case"math_and":return`_applyBinary(${m()}, ${h()}, (x, y) => (x && y) ? 1.0 : 0.0)`;case"math_or":return`_applyBinary(${m()}, ${h()}, (x, y) => (x || y) ? 1.0 : 0.0)`;case"math_xor":return`_applyBinary(${m()}, ${h()}, (x, y) => (x ^ y) ? 1.0 : 0.0)`;case"math_not":return`_applyUnary(${c()}, v => (!v) ? 1.0 : 0.0)`;case"float":return`Number(${c()})`;case"int":return`Math.trunc(${c()})`;case"bool":return`Boolean(${c()})`;case"static_cast_float":return`Number(${c()})`;case"static_cast_int":return`(${c()} | 0)`;case"mat_inverse":return m("val");case"static_cast_bool":return`Boolean(${c()})`;case"static_cast_int2":case"static_cast_int3":case"static_cast_int4":return`(${c()}).map(v => Math.trunc(v))`;case"static_cast_float2":case"static_cast_float3":case"static_cast_float4":return`(${c()}).map(v => Number(v))`;case"float2":case"float3":case"float4":case"int2":case"int3":case"int4":{const u=e.op.startsWith("int"),p=parseInt(e.op.replace(/^(float|int)/,"")),_=["x","y","z","w"].slice(0,p),b=this.detectComponentGroups(e,p);if(b){const y=[];for(const v of b){const $=m(v.key);v.count===1?y.push(u?`Math.trunc(${$})`:$):y.push(`...((v) => typeof v === 'number' ? Array(${v.count}).fill(${u?"Math.trunc(v)":"v"}) : ${u?"v.map(x => Math.trunc(x))":"v"})(${$})`)}return`[${y.join(", ")}]`}return`[${_.map(y=>u?`Math.trunc(${m(y)})`:m(y)).join(", ")}]`}case"float3x3":case"float4x4":{const u=e.op==="float3x3"?9:16;return e.vals!==void 0||d.some(_=>_.to===e.id&&_.portIn==="vals")?m("vals"):`[${(u===9?["m00","m10","m20","m01","m11","m21","m02","m12","m22"]:["m00","m10","m20","m30","m01","m11","m21","m31","m02","m12","m22","m32","m03","m13","m23","m33"]).map(_=>this.resolveArg(e,_,n,r,o,a,i,s,f,d)).join(", ")}]`}case"vec_dot":return`_vec_dot(${m()}, ${h()})`;case"vec_length":return`_vec_length(${m()})`;case"vec_normalize":return`_vec_normalize(${m()})`;case"vec_swizzle":{const u=this.resolveArg(e,"vec",n,r,o,a,i,s,f,d),p=e.channels||"x",_={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},b=p.split("").map(g=>_[g]);return b.length===1?`${u}[${b[0]}]`:`[${b.map(g=>`${u}[${g}]`).join(", ")}]`}case"struct_construct":{const u=e.type,p=this.ir?.structs?.find(b=>b.id===u);return`{ ${(p?p.members.map(b=>`'${b.name}': ${this.resolveArg(e,`values.${b.name}`,n,r,o,a,i,s,f,d)}`):[]).join(", ")} }`}case"struct_extract":return`(${this.resolveArg(e,"struct",n,r,o,a,i,s,f,d)}['${e.field||e.member}'])`;case"array_construct":{const u=e.values;if(Array.isArray(u))return`[${u.map((g,y)=>this.resolveArg(e,`values[${y}]`,n,r,o,a,i,s,f,d)).join(", ")}]`;const p=this.resolveArg(e,"length",n,r,o,a,i,s,f,d),_=this.resolveArg(e,"fill",n,r,o,a,i,s,f,d);return p!==void 0&&p!=="undefined"?`new Array(${p}).fill(${_??0})`:"[]"}case"array_extract":return`${this.resolveArg(e,"array",n,r,o,a,i,s,f,d)}[${m("index")}]`;case"array_length":return`(${this.resolveArg(e,"array",n,r,o,a,i,s,f,d)}.length)`;case"array_set":return`(${this.resolveArg(e,"array",n,r,o,a,i,s,f,d)}[${m("index")}] = ${c("value")})`;case"quat":return`[${m("x")}, ${m("y")}, ${m("z")}, ${m("w")}]`;case"quat_identity":return"[0, 0, 0, 1]";case"quat_mul":return`_quat_mul(${m()}, ${h()})`;case"quat_rotate":{const u=m("v"),p=m("q");return`((v, q) => {
          const [vx, vy, vz] = v;
          const [qx, qy, qz, qw] = q;
          const ix = qw * vx + qy * vz - qz * vy;
          const iy = qw * vy + qz * vx - qx * vz;
          const iz = qw * vz + qx * vy - qy * vx;
          const iw = -qx * vx - qy * vy - qz * vz;
          return [
            ix * qw + iw * -qx + iy * -qz - iz * -qy,
            iy * qw + iw * -qy + iz * -qx - ix * -qz,
            iz * qw + iw * -qz + ix * -qy - iy * -qx
          ];
        })(${u}, ${p})`}case"quat_slerp":return`_quat_slerp(${m()}, ${h()}, ${this.resolveArg(e,"t",n,r,o,a,i,s,f,d)})`;case"quat_to_float4x4":return`_quat_to_mat4(${this.resolveArg(e,"q",n,r,o,a,i,s,f,d)})`;case"builtin_get":return`ctx.builtins['${e.name}']`;case"prng_make":return e.seed!==void 0||d.some(_=>_.to===e.id&&_.portIn==="seed"&&_.type==="data")?`_prng_hash(Math.trunc(${m("seed")}))`:`_prng_hash((Math.trunc(ctx.builtins['prng_seed'] * 2147483647.0) + ${this.hashString(n.id)}) | 0)`;default:return"0"}}resolveCoercedArgs(e,n,r,o,a,i,s,l,f,d,m){const h=n.map(p=>this.resolveArg(e,p,o,a,i,s,l,f,d,m));if(!f)return h;const c=p=>{const _=e[p];if(typeof _=="string"){const b=f.get(_);if(b)return b;if(o.localVars.some(g=>g.id===_))return o.localVars.find(g=>g.id===_).type;if(o.inputs.some(g=>g.id===_))return o.inputs.find(g=>g.id===_).type}return typeof _=="number"?Number.isInteger(_)?"int":"float":typeof _=="boolean"?"bool":"float"},u=n.map(c);return r==="float"?h.map((p,_)=>{const b=u[_];return b==="int"||b==="i32"||b==="bool"||b==="boolean"||b==="int2"||b==="int3"||b==="int4"?`Number(${p})`:p}):r==="unify"&&u.some(_=>_.includes("float")||_.includes("vec")||_.includes("mat")||_==="f32")?h.map((_,b)=>{const g=u[b];return g==="int"||g==="i32"||g==="bool"||g==="int2"||g==="int3"||g==="int4"?`Number(${_})`:_}):h}getArgType(e,n,r,o){const a=e[n];if(typeof a=="string"){const i=o?.get(a);if(i)return i;const s=r.localVars.find(f=>f.id===a);if(s)return s.type;const l=r.inputs.find(f=>f.id===a);if(l)return l.type}return typeof a=="number"?Number.isInteger(a)?"int":"float":typeof a=="boolean"?"bool":"float"}hashString(e){let n=0;for(let r=0;r<e.length;r++)n=Math.imul(n,31)+e.charCodeAt(r)|0;return n}generateArgsObject(e,n,r,o,a,i,s,l,f){const d=e.func,m=i.find(u=>u.id===d);if(!m)return"{}";const h=[];m.inputs.forEach(u=>{const p=this.resolveArg(e,`args.${u.id}`,n,r,o,a,i,s,l,f);h.push(`'${u.id}': ${p}`)});const c=this.functionAnalysis.get(d);if(c&&m.type==="shader"){const u=["time","delta_time","bpm","beat_number","beat_delta","prng_seed"],p=new Set;c.usedBuiltins.forEach(_=>{u.includes(_)&&(h.push(`'${_}': ctx.builtins['${_}']`),p.add(_))}),!p.has("prng_seed")&&m.nodes.some(_=>_.op==="prng_make")&&h.push("'prng_seed': ctx.builtins['prng_seed']")}if(this.ir)for(const u of[...this.ir.inputs||[],...this.ir.tuningParams||[]])u.type==="texture2d"&&h.push(`'tex_bound_${u.id}': ctx.inputs.get('tex_bound_${u.id}') ?? 0`);return`{ ${h.join(", ")} }`}}var lx=Object.defineProperty,cx=Object.getOwnPropertyDescriptor,$r=(t,e,n,r)=>{for(var o=r>1?void 0:r?cx(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&lx(e,n,o),o};class Un{constructor(){this.lastError=null,this.validationErrors=[],this.currentArtifacts=null,this.cpuJit=new sx,this.wgslGen=new gn,fo(this)}async compile(e){this.setLogicValidationErrors([]),this.setLastError(null);const n=sa(e);if(n.length>0)return this.setLogicValidationErrors(n),this.setLastError("Validation failed"),null;try{const r=this.cpuJit.compile(e,e.entryPoint),o={};return e.functions.forEach(a=>{a.type==="shader"&&(o[a.id]=this.wgslGen.compile(e,a.id).code)}),{ir:e,compiled:r,wgsl:o}}catch(r){return this.setLastError(`Compilation failed: ${r.message}`),console.error(r),null}}swap(e){this.currentArtifacts=e}setLogicValidationErrors(e){this.validationErrors=e}setLastError(e){this.lastError=e}}$r([_e],Un.prototype,"lastError",2);$r([_e],Un.prototype,"validationErrors",2);$r([_e],Un.prototype,"currentArtifacts",2);$r([Oe],Un.prototype,"swap",1);$r([Oe],Un.prototype,"setLogicValidationErrors",1);$r([Oe],Un.prototype,"setLastError",1);async function fx(t,e,n){const r=[];let o=null,a=null;const i=new Un;let s=null,l=null;const f=new Proxy({addChatMessage:h=>{if(o){const c={id:h.id||crypto.randomUUID(),role:h.role||"assistant",text:h.text,type:h.type,data:h.data};te(()=>{o.database.chat_history.push(c)})}},mutate:(h,c,u,p)=>{a&&a.record(h,c,u);const _={};return p?.needsCompile&&(_.compileResult=f.performCompile()),_},ensureCompiled:async()=>i.currentArtifacts?!0:l?(await l).compileStatus==="success":(await f.performCompile()).compileStatus==="success",performCompile:async()=>{const h=o.database.ir,c=JSON.stringify(h);if(c===s)return{compileStatus:"success"};l=(async()=>{const p=sa(h);if(p.length)return te(()=>{o.local.validationErrors=p}),{compileStatus:"fail",errors:p};const _=await i.compile(h);if(_)return i.swap(_),te(()=>{o.local.compilationResult={js:_.compiled.taskCode,jsInit:_.compiled.initCode,wgsl:_.wgsl},o.local.validationErrors=[]}),s=c,{compileStatus:"success"};{const b=Ye(i.validationErrors);return te(()=>{o.local.validationErrors=b}),{compileStatus:"fail",errors:b}}})();const u=await l;return l=null,u},debugValidateCurrentIR:()=>{const h=o.database.ir,c=sa(h);return te(()=>{o.local.validationErrors=c}),!c.length},logLLMInteraction:h=>{r.push(JSON.parse(JSON.stringify(h)))},setActiveTab:h=>{te(()=>{o.local.settings.activeTab=h})},setChatOpen:()=>{},toggleMockLLM:()=>{},undo:()=>{},redo:()=>{},clearLogs:()=>{},setDraftChat:()=>{},setActiveRewindId:()=>{},setSelectedEntity:()=>{},drillDown:()=>{},goBack:()=>{},goForward:()=>{},rewindToChat:()=>{},compileCurrentIR:async()=>(await f.performCompile()).compileStatus==="success"},{get:(h,c)=>c in h?h[c]:()=>{}}),d=new ca(f,ws.buildWorkerSystemInstruction()),m=ox(Qn,{controller:f,llm:d});o=m.appState,a=m.historyManager;for(let h=0;h<t;h++)te(()=>{m.appState.local.settings.useMockLLM=!0}),await m.chatHandler.handleUserMessage(e[h]);return te(()=>{r.length=0,m.appState.local.settings.useMockLLM=n}),await m.chatHandler.handleUserMessage(e[t]),{logs:r,finalState:Ye(m.appState.database)}}var ux=Object.defineProperty,dx=Object.getOwnPropertyDescriptor,Da=(t,e,n,r)=>{for(var o=r>1?void 0:r?dx(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&ux(e,n,o),o};const px={workspaces:"Workspaces",dashboard:"Dashboard",ir:"IR Code",raw_code:"Raw Code",state:"State",script:"Script",logs:"LLM Logs",settings:"Settings"};let hr=class extends Vt{constructor(){super(...arguments),this.scriptLogs=[],this.scriptFinalState=null,this.runningScriptLine=null}formatLogValue(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}async runScript(t){this.runningScriptLine=t,this.scriptLogs=[],this.scriptFinalState=null;try{const e=R.local.settings.useMockLLM,n=await fx(t,pc,e);te(()=>{this.scriptLogs=n.logs,this.scriptFinalState=n.finalState})}catch(e){console.error(e),this.scriptLogs=[{id:"unknown",timestamp:Date.now(),duration_ms:0,type:"error",prompt_snapshot:"",response_snapshot:e?.toString()??"unknown error"}],this.scriptFinalState=void 0}finally{this.runningScriptLine=null}}loadExample(t){ne.mutate("Load Example","user",e=>{e.ir=JSON.parse(JSON.stringify(t))},{needsCompile:!0})}handleResetAll(){const t=ne.runtime;if(t)for(const e of t.inputEntries.values())e.isTuningParam||(e.type===He.Texture?e.displayText&&t.setTextureSource(e.id,void 0):t.setInput(e.id,e.defaultValue))}get anyInputModified(){const t=ne.runtime;if(!t)return!1;for(const e of t.inputEntries.values())if(!e.isTuningParam){if(e.type===He.Texture){if(e.displayText)return!0}else if(e.currentValue!==e.defaultValue)return!0}return!1}render(){const{activeTab:t}=R.local.settings,e=px[t]??t;return Z`
      <div class="panel-header">
        <span class="panel-title">${e}</span>
        <div class="header-actions">
          ${t==="workspaces"?Z`
            <button class="action-btn" @click=${()=>ne.createWorkspace().then(n=>ne.switchWorkspace(n))}>
              <ui-icon icon="la-plus" style="--icon-size: 0.65rem;"></ui-icon>
              New
            </button>
          `:fe}
          ${t==="dashboard"?Z`
            <button class="action-btn ${this.anyInputModified?"":"disabled"}" @click=${()=>this.handleResetAll()} title="Reset all parameters to defaults">
              <ui-icon icon="la-undo" style="--icon-size: 0.65rem;"></ui-icon>
              Reset all
            </button>
          `:fe}
        </div>
      </div>
      <div class="panel-body">
        ${t==="workspaces"?Z`<ui-workspace-panel></ui-workspace-panel>`:fe}
        ${t==="dashboard"?this.renderDashboard():fe}
        ${t==="ir"?this.renderIR():fe}
        ${t==="raw_code"?this.renderRawCode():fe}
        ${t==="state"?this.renderState():fe}
        ${t==="script"?this.renderScript():fe}
        ${t==="logs"?this.renderLogs():fe}
        ${t==="settings"?this.renderSettings():fe}
      </div>
    `}renderDashboard(){return Z`<ui-inspector .runtime=${ne.runtime}></ui-inspector>`}renderIR(){return Z`<ui-ir-widget .ir=${R.database.ir}></ui-ir-widget>`}renderRawCode(){const{validationErrors:t,compilationResult:e}=R.local;return Z`
      <div class="scroll-content">
        <div style="display: flex; gap: 0.5rem;">
          <ui-button @click=${()=>ne.debugValidateCurrentIR()}>Validate</ui-button>
          <ui-button @click=${()=>ne.compileCurrentIR()}>Compile</ui-button>
        </div>
        <h3 class="section-title">Validation Errors</h3>
        ${t.length===0?Z`<p style="margin:0; font-size:0.8rem; color:var(--app-text-muted);">No errors found.</p>`:Z`
          <div>
            ${t.map(n=>Z`
              <div style="color: ${n.severity==="error"?"red":"orange"}; margin-bottom: 0.5rem; font-size: 0.8rem;">
                [${n.severity.toUpperCase()}] ${n.nodeId?Z`Node <strong>${n.nodeId}</strong>: `:""} ${n.message}
              </div>
            `)}
          </div>
        `}

        <h3 class="section-title">Compilation Results</h3>
        ${e?Z`
          <div>
            <h4 style="margin:0.5rem 0 0.25rem; font-size:0.8rem;">JavaScript (CPU Host)</h4>
            <pre style="max-height: 300px;">${e.js}</pre>
            <pre style="max-height: 300px; margin-top:0.5rem;">${e.jsInit}</pre>

            <h4 style="margin:0.75rem 0 0.25rem; font-size:0.8rem;">WGSL (GPU Shaders)</h4>
            ${Object.entries(e.wgsl).map(([n,r])=>Z`
              <div>
                <h5 style="margin:0.5rem 0 0.25rem; color:#666; font-size:0.75rem;">Function: ${n}</h5>
                <pre style="max-height: 300px;">${r}</pre>
              </div>
            `)}
          </div>
        `:Z`<p style="margin:0; font-size:0.8rem; color:var(--app-text-muted);">Not compiled yet.</p>`}
      </div>
    `}renderState(){const{database:t,local:e}=R,n={database:t,local:{...e,llmLogs:`[${e.llmLogs.length} entries hidden]`}};return Z`
      <div class="scroll-content">
        <pre>${JSON.stringify(n,null,2)}</pre>
      </div>
    `}renderScript(){return Z`
      <div class="scroll-content">
        <h3 class="section-title">Examples</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${Object.entries(vn).map(([t,e])=>Z`
            <ui-button @click=${()=>this.loadExample(e)}>
              ${e.meta.name||t}
            </ui-button>
          `)}
        </div>

        <h3 class="section-title">Demo Script Debugger</h3>
        <p style="font-size: 0.75rem; color: var(--app-text-muted); margin:0;">Run script step-by-step in an isolated environment.</p>

        <div>
          ${pc.map((t,e)=>Z`
            <div style="display:flex; align-items:center; margin-bottom:4px; padding:4px; background:${this.runningScriptLine===e?"#444":"transparent"}; border: 1px solid ${this.runningScriptLine===e?"var(--color-emerald-500)":"#333"}; border-radius: 4px;">
              <ui-button ?disabled=${this.runningScriptLine!==null} @click=${()=>this.runScript(e)} style="margin-right:8px">
                ${this.runningScriptLine===e?"Running...":"Run"}
              </ui-button>
              <code style="font-size: 0.7rem;">#${e+1}: ${Array.isArray(t)?t[0].text.substring(0,50)+"...":t}</code>
            </div>
          `)}
        </div>

        ${this.scriptLogs.length>0?Z`
          <h3 class="section-title">Target Step (${this.scriptLogs.length} turns)</h3>
          ${this.scriptLogs.map(t=>Z`
            <div style="border:1px solid #444; padding:0.5rem; border-radius:4px; background: #1a1a1a;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; padding-bottom: 0.25rem; border-bottom: 1px solid #333;">
                <strong style="font-size:0.8rem;">Turn #${t.turn_index||1}</strong>
                <span style="font-size: 0.7rem; color: #888;">${t.duration_ms}ms | Mocked: ${t.mocked}</span>
              </div>
              ${t.system_instruction_snapshot&&t.turn_index===1?Z`
                <div style="margin-bottom: 0.25rem; color: #aaa; font-size: 0.75rem;">System Instruction:</div>
                <pre style="max-height: 150px; font-size: 0.7rem; color: #666;">${this.formatLogValue(t.system_instruction_snapshot)}</pre>
              `:fe}
              <div style="margin-bottom: 0.25rem; color: #aaa; font-size: 0.75rem;">Request:</div>
              <pre style="max-height: 250px;">${this.formatLogValue(t.prompt_snapshot)}</pre>
              <div style="margin-bottom: 0.25rem; color: #aaa; font-size: 0.75rem;">Response:</div>
              <pre style="max-height: 350px; color: var(--color-emerald-500);">${this.formatLogValue(t.response_snapshot)}</pre>
            </div>
          `)}
          ${this.scriptFinalState?Z`
            <h3 class="section-title">Final Isolated State</h3>
            <pre style="font-size:0.7rem; max-height:200px;">${JSON.stringify(this.scriptFinalState,null,2)}</pre>
          `:fe}
        `:fe}
      </div>
    `}renderLogs(){const{llmLogs:t}=R.local;return Z`
      <div class="scroll-content">
        ${t.map(e=>Z`
          <div style="padding-bottom: 0.75rem; border-bottom: 1px solid #333;">
            <div style="font-size:0.7rem; color:#888; margin-bottom: 0.25rem;">
              <strong>ID:</strong> ${e.id} |
              <strong>Turn:</strong> ${e.turn_index||1} |
              <strong>Duration:</strong> ${e.duration_ms}ms |
              <strong>Mocked:</strong> ${e.mocked}
            </div>
            <div style="margin-bottom: 0.25rem; font-size:0.75rem;"><strong>Prompt:</strong></div>
            <pre style="background: rgba(255, 243, 162, 0.06); max-height: 200px;">${this.formatLogValue(e.prompt_snapshot)}</pre>
            <div style="margin-bottom: 0.25rem; font-size:0.75rem;"><strong>Response:</strong></div>
            <pre style="background: #68dcff1e; max-height: 400px;">${this.formatLogValue(e.response_snapshot)}</pre>
          </div>
        `)}
      </div>
    `}renderSettings(){return Z`<ui-settings-panel></ui-settings-panel>`}};hr.styles=[Rt,We`
      :host {
        display: flex;
        flex-direction: column;
        background: var(--app-bg);
        border-right: 1px solid var(--app-border);
        overflow: hidden;
      }

      .panel-header {
        display: flex;
        align-items: center;
        padding: 1.0rem 0.5rem;
        flex-shrink: 0;
      }

      .panel-title {
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--app-text-muted);
      }

      .header-actions {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }


      .panel-body {
        flex: 1;
        overflow: auto;
        display: flex;
        flex-direction: column;
      }

      .scroll-content {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        gap: 0.75rem;
      }

      .section-title {
        margin: 0;
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--app-text-muted);
      }

      pre {
        background: #1a1a1a;
        border: 1px solid var(--app-border);
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        color: #ccc;
        white-space: pre-wrap;
        word-break: break-all;
        overflow: auto;
        margin: 0;
      }

      ui-inspector {
        width: 100%;
        border-left: none;
      }

      ui-ir-widget {
        flex: 1;
      }

      ui-settings-panel {
        flex: 1;
      }
    `];Da([Ee()],hr.prototype,"scriptLogs",2);Da([Ee()],hr.prototype,"scriptFinalState",2);Da([Ee()],hr.prototype,"runningScriptLine",2);hr=Da([tt("ui-left-panel")],hr);var hx=Object.defineProperty,mx=Object.getOwnPropertyDescriptor,cn=(t,e,n,r)=>{for(var o=r>1?void 0:r?mx(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&hx(e,n,o),o};const _x=10*1024*1024;let Ot=class extends Vt{constructor(){super(...arguments),this.rewindConfirmId=null,this.dragOver=!1,this.menuOpen=!1,this.confirmingClear=!1,this.wasPinned=!0}handleStop(){Zi.stop()}handleRewindClick(t){this.rewindConfirmId=t}handleRewindConfirm(){this.rewindConfirmId&&(ne.rewindToChat(this.rewindConfirmId),this.rewindConfirmId=null,this.autoResizeTextarea())}handleRewindCancel(){this.rewindConfirmId=null}toggleMenu(){if(this.menuOpen=!this.menuOpen,this.confirmingClear=!1,this.menuOpen){const t=e=>{e.composedPath().some(r=>r?.classList?.contains("menu-anchor"))||(this.menuOpen=!1,this.confirmingClear=!1,document.removeEventListener("click",t,!0))};requestAnimationFrame(()=>document.addEventListener("click",t,!0))}}handleClearHistory(){if(!this.confirmingClear){this.confirmingClear=!0;return}ne.clearChatHistory(),this.menuOpen=!1,this.confirmingClear=!1}async handleSend(){const t=R.local.draftChat,e=[...R.local.draftImages];!t.trim()&&!e.length||(ne.setDraftChat(""),ne.clearDraftImages(),this.autoResizeTextarea(),requestAnimationFrame(()=>this.chatInput?.focus()),await Zi.handleUserMessage(t,e.length?e:void 0))}handleInput(t){ne.setDraftChat(t.target.value),this.autoResizeTextarea()}handlePaste(t){const e=t.clipboardData?.items;if(e){for(const n of Array.from(e))if(n.type.startsWith("image/")){t.preventDefault();const r=n.getAsFile();r&&this.addImageFromFile(r)}}}autoResizeTextarea(){const t=this.chatInput;t&&(t.style.height="",t.style.height=Math.max(t.scrollHeight,t.offsetHeight)+"px")}handleUploadClick(){this.fileInput?.click()}handleFileSelect(t){const e=t.target;if(e.files){for(const n of Array.from(e.files))this.addImageFromFile(n);e.value=""}}addImageFromFile(t){if(!t.type.startsWith("image/"))return;if(t.size>_x){console.warn(`Skipping ${t.name}: exceeds 10MB limit`);return}const e=new FileReader;e.onload=()=>{const r=e.result.split(",")[1];if(!r)return;const o={mimeType:t.type,data:r};ne.addDraftImage(o)},e.readAsDataURL(t)}handleDragOver(t){t.preventDefault(),t.stopPropagation(),this.dragOver=!0}handleDragLeave(t){t.preventDefault(),t.stopPropagation(),this.dragOver=!1}handleDrop(t){if(t.preventDefault(),t.stopPropagation(),this.dragOver=!1,!!t.dataTransfer?.files)for(const e of Array.from(t.dataTransfer.files))this.addImageFromFile(e)}updated(){this.wasPinned&&this.chatHistory&&(this.chatHistory.scrollTop=this.chatHistory.scrollHeight)}handleScroll(){if(!this.chatHistory)return;const t=this.chatHistory;this.wasPinned=t.scrollHeight-t.scrollTop-t.clientHeight<30}render(){const{chat_history:t}=R.database,{draftChat:e,draftImages:n,llmBusy:r}=R.local;return Z`
      ${this.dragOver?Z`<div class="drop-overlay">Drop images here</div>`:fe}

      <div class="header">
        <span class="header-title">Chat</span>
        <div class="menu-anchor">
          <button class="menu-btn" @click=${()=>this.toggleMenu()} title="Options">
            <ui-icon icon="la-ellipsis-v"></ui-icon>
          </button>
          ${this.menuOpen?Z`
            <div class="dropdown">
              <button class="dropdown-item ${this.confirmingClear?"danger":""}" @click=${()=>this.handleClearHistory()}>
                ${this.confirmingClear?"Confirm clear?":"Clear history"}
              </button>
            </div>
          `:fe}
        </div>
      </div>

      <div class="chat-history"
        data-drop-target
        @scroll=${()=>this.handleScroll()}
        @dragover=${o=>this.handleDragOver(o)}
        @dragleave=${o=>this.handleDragLeave(o)}
        @drop=${o=>this.handleDrop(o)}
      >
        ${t.map(o=>o.role==="user"?Z`
          ${this.rewindConfirmId===o.id?Z`
            <div class="rewind-confirm">
              Rewind to here?
              <ui-button size="small" @click=${()=>this.handleRewindConfirm()}>Rewind</ui-button>
              <ui-button size="small" variant="ghost" @click=${()=>this.handleRewindCancel()}>Cancel</ui-button>
            </div>
          `:fe}
          <div class="msg user">
            ${o.images?.length?Z`
              <div class="msg-images">
                ${o.images.map(a=>Z`
                  <img src="data:${a.mimeType};base64,${a.data}" alt="attached image" />
                `)}
              </div>
            `:fe}
            ${o.text}
            ${r?fe:Z`<span class="rewind-btn" @click=${()=>this.handleRewindClick(o.id)} title="Rewind to this message">\u21ba</span>`}
          </div>
        `:Z`
          <div class="msg ${o.role}">
            ${o.role==="tool-response"?Z`${o.text||o.data?.message||"tool response"}`:o.text}
          </div>
        `)}
        ${r?Z`
          <div class="thinking">
            <div class="thinking-dots"><span></span><span></span><span></span></div>
            ${R.local.llmStatus||"Thinking"}
          </div>
        `:""}
      </div>

      <div class="input-area">
        ${n.length?Z`
          <div class="draft-previews">
            ${n.map((o,a)=>Z`
              <div class="draft-preview">
                <img src="data:${o.mimeType};base64,${o.data}" alt="draft" />
                <button class="remove-btn" @click=${()=>ne.removeDraftImage(a)} title="Remove">\u00d7</button>
              </div>
            `)}
          </div>
        `:fe}
        <div class="input-row">
          <input class="file-input" type="file" accept="image/*" multiple @change=${o=>this.handleFileSelect(o)} />
          <ui-button icon="la-image" square @click=${()=>this.handleUploadClick()} title="Attach image" ?disabled=${r}></ui-button>
          <textarea
            class="chat-input"
            rows="1"
            .value=${e}
            ?disabled=${r}
            @input=${o=>this.handleInput(o)}
            @paste=${o=>this.handlePaste(o)}
            @keydown=${o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this.handleSend())}}
            placeholder=${r?"Waiting for response...":"Type a message..."}
          ></textarea>
          ${r?Z`<ui-button icon="la-stop" square @click=${()=>this.handleStop()} title="Stop"></ui-button>`:Z`<ui-button icon="la-paper-plane" square @click=${()=>this.handleSend()} title="Send"></ui-button>`}
        </div>
      </div>
    `}};Ot.styles=[Rt,We`
      :host {
        display: flex;
        flex-direction: column;
        background: #1a1a1a;
        border-left: 1px solid var(--app-border);
        overflow: hidden;
        position: relative;
      }

      .header {
        display: flex;
        align-items: center;
        padding: 0.75rem 0.5rem;
        flex-shrink: 0;
      }

      .header-title {
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--app-text-muted);
      }

      .menu-anchor {
        margin-left: auto;
        position: relative;
      }
      .menu-btn {
        all: unset;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 3px;
        color: var(--app-text-muted);
        --icon-size: 14px;
      }
      .menu-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        color: var(--app-text-main);
      }
      .dropdown {
        position: absolute;
        right: 0;
        top: 100%;
        margin-top: 2px;
        background: #2a2a2a;
        border: 1px solid #444;
        border-radius: 4px;
        min-width: 140px;
        z-index: 20;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        overflow: hidden;
      }
      .dropdown-item {
        all: unset;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        width: 100%;
        padding: 0.4rem 0.6rem;
        font-size: 0.75rem;
        color: #e0e0e0;
        cursor: pointer;
        box-sizing: border-box;
      }
      .dropdown-item:hover {
        background: rgba(255, 255, 255, 0.08);
      }
      .dropdown-item.danger {
        color: #f87171;
      }

      .chat-history {
        flex: 1;
        overflow-y: auto;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .msg {
        background: #2a2a2a;
        color: #e0e0e0;
        padding: 0.5rem 0.75rem;
        border-radius: 6px;
        max-width: 90%;
        font-size: 0.85rem;
        line-height: 1.4;
        word-break: break-word;
      }
      .msg.user {
        align-self: flex-end;
        background: #0c4a6e;
        position: relative;
        padding-right: 1.75rem;
      }
      .rewind-btn {
        position: absolute;
        right: 0.3rem;
        bottom: 0.3rem;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.25);
        font-size: 1.1rem;
        line-height: 1;
        user-select: none;
        transition: color 0.15s;
      }
      .rewind-btn:hover {
        color: rgba(255, 255, 255, 0.7);
      }
      .rewind-confirm {
        align-self: flex-end;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.75rem;
        color: var(--app-text-muted);
        padding: 0.25rem 0.5rem;
      }
      .msg.assistant {
        align-self: flex-start;
      }
      .msg.tool-response {
        align-self: flex-start;
        font-size: 0.75rem;
        opacity: 0.7;
      }

      .msg-images {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 4px;
      }
      .msg-images img {
        max-width: 200px;
        max-height: 150px;
        border-radius: 4px;
        object-fit: cover;
      }

      .thinking {
        align-self: flex-start;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        font-size: 0.8rem;
        color: var(--app-text-muted);
      }

      .thinking-dots {
        display: flex;
        gap: 3px;
      }

      .thinking-dots span {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--app-text-muted);
        animation: dot-pulse 1.4s ease-in-out infinite;
      }

      .thinking-dots span:nth-child(2) { animation-delay: 0.2s; }
      .thinking-dots span:nth-child(3) { animation-delay: 0.4s; }

      @keyframes dot-pulse {
        0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
        40% { opacity: 1; transform: scale(1); }
      }

      .input-area {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        gap: 0.35rem;
        flex-shrink: 0;
      }

      .draft-previews {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .draft-preview {
        position: relative;
        width: 60px;
        height: 60px;
      }
      .draft-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid #444;
      }
      .draft-preview .remove-btn {
        position: absolute;
        top: -4px;
        right: -4px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #e53e3e;
        color: white;
        border: none;
        font-size: 10px;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }

      .input-row {
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;
      }

      .chat-input {
        flex: 1;
        padding: 0.4rem 0.5rem;
        background: #2a2a2a;
        color: #e0e0e0;
        border: 1px solid #444;
        border-radius: 4px;
        font-size: 0.85rem;
        font-family: inherit;
        resize: none;
        overflow-y: auto;
        max-height: 150px;
        line-height: 1.4;
        box-sizing: border-box;
        height: calc(0.85rem * 1.4 + 0.8rem + 1px);
      }

      .chat-input:focus {
        outline: none;
        border-color: var(--color-emerald-500);
      }

      .file-input {
        display: none;
      }

      .drop-overlay {
        position: absolute;
        inset: 0;
        background: rgba(16, 185, 129, 0.15);
        border: 2px dashed var(--color-emerald-500);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        color: var(--color-emerald-500);
        pointer-events: none;
        z-index: 10;
      }
    `];cn([ba(".chat-history")],Ot.prototype,"chatHistory",2);cn([ba(".chat-input")],Ot.prototype,"chatInput",2);cn([ba(".file-input")],Ot.prototype,"fileInput",2);cn([Ee()],Ot.prototype,"rewindConfirmId",2);cn([Ee()],Ot.prototype,"dragOver",2);cn([Ee()],Ot.prototype,"menuOpen",2);cn([Ee()],Ot.prototype,"confirmingClear",2);Ot=cn([tt("ui-chat-panel")],Ot);var bx=Object.defineProperty,gx=Object.getOwnPropertyDescriptor,ju=(t,e,n,r)=>{for(var o=r>1?void 0:r?gx(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&bx(e,n,o),o};let pa=class extends Nt{constructor(){super(...arguments),this.keyDraft=""}handleSave(){const t=this.keyDraft.trim();t&&(ne.setApiKey(t),Qr.reinitialize(t)),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handleSkip(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){return Z`
      <div class="backdrop" @click=${t=>{t.target===t.currentTarget&&this.handleSkip()}}>
        <div class="dialog">
          <h2>API Key Required</h2>
          <p>Enter your <a href="https://ai.google.dev/gemini-api/docs/api-key" target="_blank">Google Generative AI API key</a> to enable the LLM chat assistant. You can also set this later in Settings.</p>
          <input
            type="password"
            .value=${this.keyDraft}
            @input=${t=>this.keyDraft=t.target.value}
            @keydown=${t=>{t.key==="Enter"&&this.handleSave()}}
            placeholder="Enter API key..."
          />
          <div class="actions">
            <ui-button variant="outline" @click=${()=>this.handleSkip()}>Skip</ui-button>
            <ui-button variant="primary" @click=${()=>this.handleSave()}>Save</ui-button>
          </div>
        </div>
      </div>
    `}};pa.styles=[Rt,We`
      :host {
        display: contents;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .dialog {
        background: #1e1e1e;
        border: 1px solid var(--app-border);
        border-radius: 8px;
        padding: 2rem;
        max-width: 440px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      h2 {
        margin: 0;
        font-size: 1.1rem;
      }

      p {
        margin: 0;
        color: var(--app-text-muted);
        font-size: 0.85rem;
        line-height: 1.5;
      }

      a {
        color: var(--color-emerald-500);
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }

      input {
        width: 100%;
        padding: 0.6rem;
        background: #222;
        color: var(--app-text-main);
        border: 1px solid var(--app-border);
        border-radius: 4px;
        font-family: monospace;
        font-size: 0.85rem;
        box-sizing: border-box;
      }

      input:focus {
        outline: none;
        border-color: var(--color-emerald-500);
      }

      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
      }
    `];ju([Ee()],pa.prototype,"keyDraft",2);pa=ju([tt("ui-api-key-dialog")],pa);var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ro(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ri={exports:{}};var vc;function vx(){return vc||(vc=1,(function(t,e){(function(n){t.exports=n()})(function(){return(function n(r,o,a){function i(f,d){if(!o[f]){if(!r[f]){var m=typeof Ro=="function"&&Ro;if(!d&&m)return m(f,!0);if(s)return s(f,!0);var h=new Error("Cannot find module '"+f+"'");throw h.code="MODULE_NOT_FOUND",h}var c=o[f]={exports:{}};r[f][0].call(c.exports,function(u){var p=r[f][1][u];return i(p||u)},c,c.exports,n,r,o,a)}return o[f].exports}for(var s=typeof Ro=="function"&&Ro,l=0;l<a.length;l++)i(a[l]);return i})({1:[function(n,r,o){var a=n("./utils"),i=n("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(l){for(var f,d,m,h,c,u,p,_=[],b=0,g=l.length,y=g,v=a.getTypeOf(l)!=="string";b<l.length;)y=g-b,m=v?(f=l[b++],d=b<g?l[b++]:0,b<g?l[b++]:0):(f=l.charCodeAt(b++),d=b<g?l.charCodeAt(b++):0,b<g?l.charCodeAt(b++):0),h=f>>2,c=(3&f)<<4|d>>4,u=1<y?(15&d)<<2|m>>6:64,p=2<y?63&m:64,_.push(s.charAt(h)+s.charAt(c)+s.charAt(u)+s.charAt(p));return _.join("")},o.decode=function(l){var f,d,m,h,c,u,p=0,_=0,b="data:";if(l.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var g,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===s.charAt(64)&&y--,l.charAt(l.length-2)===s.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(g=i.uint8array?new Uint8Array(0|y):new Array(0|y);p<l.length;)f=s.indexOf(l.charAt(p++))<<2|(h=s.indexOf(l.charAt(p++)))>>4,d=(15&h)<<4|(c=s.indexOf(l.charAt(p++)))>>2,m=(3&c)<<6|(u=s.indexOf(l.charAt(p++))),g[_++]=f,c!==64&&(g[_++]=d),u!==64&&(g[_++]=m);return g}},{"./support":30,"./utils":32}],2:[function(n,r,o){var a=n("./external"),i=n("./stream/DataWorker"),s=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function f(d,m,h,c,u){this.compressedSize=d,this.uncompressedSize=m,this.crc32=h,this.compression=c,this.compressedContent=u}f.prototype={getContentWorker:function(){var d=new i(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return d.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new i(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(d,m,h){return d.pipe(new s).pipe(new l("uncompressedSize")).pipe(m.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},r.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,o){var a=n("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},o.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,o){var a=n("./utils"),i=(function(){for(var s,l=[],f=0;f<256;f++){s=f;for(var d=0;d<8;d++)s=1&s?3988292384^s>>>1:s>>>1;l[f]=s}return l})();r.exports=function(s,l){return s!==void 0&&s.length?a.getTypeOf(s)!=="string"?(function(f,d,m,h){var c=i,u=h+m;f^=-1;for(var p=h;p<u;p++)f=f>>>8^c[255&(f^d[p])];return-1^f})(0|l,s,s.length,0):(function(f,d,m,h){var c=i,u=h+m;f^=-1;for(var p=h;p<u;p++)f=f>>>8^c[255&(f^d.charCodeAt(p))];return-1^f})(0|l,s,s.length,0):0}},{"./utils":32}],5:[function(n,r,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(n,r,o){var a=null;a=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:a}},{lie:37}],7:[function(n,r,o){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",i=n("pako"),s=n("./utils"),l=n("./stream/GenericWorker"),f=a?"uint8array":"array";function d(m,h){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=h,this.meta={}}o.magic="\b\0",s.inherits(d,l),d.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(f,m.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(h){m.push({data:h,meta:m.meta})}},o.compressWorker=function(m){return new d("Deflate",m)},o.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,o){function a(c,u){var p,_="";for(p=0;p<u;p++)_+=String.fromCharCode(255&c),c>>>=8;return _}function i(c,u,p,_,b,g){var y,v,$=c.file,k=c.compression,A=g!==f.utf8encode,z=s.transformTo("string",g($.name)),O=s.transformTo("string",f.utf8encode($.name)),L=$.comment,U=s.transformTo("string",g(L)),S=s.transformTo("string",f.utf8encode(L)),T=O.length!==$.name.length,w=S.length!==L.length,F="",re="",D="",J=$.dir,j=$.date,ie={crc32:0,compressedSize:0,uncompressedSize:0};u&&!p||(ie.crc32=c.crc32,ie.compressedSize=c.compressedSize,ie.uncompressedSize=c.uncompressedSize);var M=0;u&&(M|=8),A||!T&&!w||(M|=2048);var B=0,oe=0;J&&(B|=16),b==="UNIX"?(oe=798,B|=(function(Y,De){var Ve=Y;return Y||(Ve=De?16893:33204),(65535&Ve)<<16})($.unixPermissions,J)):(oe=20,B|=(function(Y){return 63&(Y||0)})($.dosPermissions)),y=j.getUTCHours(),y<<=6,y|=j.getUTCMinutes(),y<<=5,y|=j.getUTCSeconds()/2,v=j.getUTCFullYear()-1980,v<<=4,v|=j.getUTCMonth()+1,v<<=5,v|=j.getUTCDate(),T&&(re=a(1,1)+a(d(z),4)+O,F+="up"+a(re.length,2)+re),w&&(D=a(1,1)+a(d(U),4)+S,F+="uc"+a(D.length,2)+D);var Q="";return Q+=`
\0`,Q+=a(M,2),Q+=k.magic,Q+=a(y,2),Q+=a(v,2),Q+=a(ie.crc32,4),Q+=a(ie.compressedSize,4),Q+=a(ie.uncompressedSize,4),Q+=a(z.length,2),Q+=a(F.length,2),{fileRecord:m.LOCAL_FILE_HEADER+Q+z+F,dirRecord:m.CENTRAL_FILE_HEADER+a(oe,2)+Q+a(U.length,2)+"\0\0\0\0"+a(B,4)+a(_,4)+z+F+U}}var s=n("../utils"),l=n("../stream/GenericWorker"),f=n("../utf8"),d=n("../crc32"),m=n("../signature");function h(c,u,p,_){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=u,this.zipPlatform=p,this.encodeFileName=_,this.streamFiles=c,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(h,l),h.prototype.push=function(c){var u=c.meta.percent||0,p=this.entriesCount,_=this._sources.length;this.accumulate?this.contentBuffer.push(c):(this.bytesWritten+=c.data.length,l.prototype.push.call(this,{data:c.data,meta:{currentFile:this.currentFile,percent:p?(u+100*(p-_-1))/p:100}}))},h.prototype.openedSource=function(c){this.currentSourceOffset=this.bytesWritten,this.currentFile=c.file.name;var u=this.streamFiles&&!c.file.dir;if(u){var p=i(c,u,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(c){this.accumulate=!1;var u=this.streamFiles&&!c.file.dir,p=i(c,u,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),u)this.push({data:(function(_){return m.DATA_DESCRIPTOR+a(_.crc32,4)+a(_.compressedSize,4)+a(_.uncompressedSize,4)})(c),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var c=this.bytesWritten,u=0;u<this.dirRecords.length;u++)this.push({data:this.dirRecords[u],meta:{percent:100}});var p=this.bytesWritten-c,_=(function(b,g,y,v,$){var k=s.transformTo("string",$(v));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+a(b,2)+a(b,2)+a(g,4)+a(y,4)+a(k.length,2)+k})(this.dirRecords.length,p,c,this.zipComment,this.encodeFileName);this.push({data:_,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(c){this._sources.push(c);var u=this;return c.on("data",function(p){u.processChunk(p)}),c.on("end",function(){u.closedSource(u.previous.streamInfo),u._sources.length?u.prepareNextSource():u.end()}),c.on("error",function(p){u.error(p)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(c){var u=this._sources;if(!l.prototype.error.call(this,c))return!1;for(var p=0;p<u.length;p++)try{u[p].error(c)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var c=this._sources,u=0;u<c.length;u++)c[u].lock()},r.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,o){var a=n("../compressions"),i=n("./ZipFileWorker");o.generateWorker=function(s,l,f){var d=new i(l.streamFiles,f,l.platform,l.encodeFileName),m=0;try{s.forEach(function(h,c){m++;var u=(function(g,y){var v=g||y,$=a[v];if(!$)throw new Error(v+" is not a valid compression method !");return $})(c.options.compression,l.compression),p=c.options.compressionOptions||l.compressionOptions||{},_=c.dir,b=c.date;c._compressWorker(u,p).withStreamInfo("file",{name:h,dir:_,date:b,comment:c.comment||"",unixPermissions:c.unixPermissions,dosPermissions:c.dosPermissions}).pipe(d)}),d.entriesCount=m}catch(h){d.error(h)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,o){function a(){if(!(this instanceof a))return new a;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var i=new a;for(var s in this)typeof this[s]!="function"&&(i[s]=this[s]);return i}}(a.prototype=n("./object")).loadAsync=n("./load"),a.support=n("./support"),a.defaults=n("./defaults"),a.version="3.10.1",a.loadAsync=function(i,s){return new a().loadAsync(i,s)},a.external=n("./external"),r.exports=a},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,o){var a=n("./utils"),i=n("./external"),s=n("./utf8"),l=n("./zipEntries"),f=n("./stream/Crc32Probe"),d=n("./nodejsUtils");function m(h){return new i.Promise(function(c,u){var p=h.decompressed.getContentWorker().pipe(new f);p.on("error",function(_){u(_)}).on("end",function(){p.streamInfo.crc32!==h.decompressed.crc32?u(new Error("Corrupted zip : CRC32 mismatch")):c()}).resume()})}r.exports=function(h,c){var u=this;return c=a.extend(c||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),d.isNode&&d.isStream(h)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",h,!0,c.optimizedBinaryString,c.base64).then(function(p){var _=new l(c);return _.load(p),_}).then(function(p){var _=[i.Promise.resolve(p)],b=p.files;if(c.checkCRC32)for(var g=0;g<b.length;g++)_.push(m(b[g]));return i.Promise.all(_)}).then(function(p){for(var _=p.shift(),b=_.files,g=0;g<b.length;g++){var y=b[g],v=y.fileNameStr,$=a.resolve(y.fileNameStr);u.file($,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:c.createFolders}),y.dir||(u.file($).unsafeOriginalName=v)}return _.zipComment.length&&(u.comment=_.zipComment),u})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,o){var a=n("../utils"),i=n("../stream/GenericWorker");function s(l,f){i.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(f)}a.inherits(s,i),s.prototype._bindStream=function(l){var f=this;(this._stream=l).pause(),l.on("data",function(d){f.push({data:d,meta:{percent:0}})}).on("error",function(d){f.isPaused?this.generatedError=d:f.error(d)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,o){var a=n("readable-stream").Readable;function i(s,l,f){a.call(this,l),this._helper=s;var d=this;s.on("data",function(m,h){d.push(m)||d._helper.pause(),f&&f(h)}).on("error",function(m){d.emit("error",m)}).on("end",function(){d.push(null)})}n("../utils").inherits(i,a),i.prototype._read=function(){this._helper.resume()},r.exports=i},{"../utils":32,"readable-stream":16}],14:[function(n,r,o){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(a,i){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(a,i);if(typeof a=="number")throw new Error('The "data" argument must not be a number');return new Buffer(a,i)},allocBuffer:function(a){if(Buffer.alloc)return Buffer.alloc(a);var i=new Buffer(a);return i.fill(0),i},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&typeof a.on=="function"&&typeof a.pause=="function"&&typeof a.resume=="function"}}},{}],15:[function(n,r,o){function a($,k,A){var z,O=s.getTypeOf(k),L=s.extend(A||{},d);L.date=L.date||new Date,L.compression!==null&&(L.compression=L.compression.toUpperCase()),typeof L.unixPermissions=="string"&&(L.unixPermissions=parseInt(L.unixPermissions,8)),L.unixPermissions&&16384&L.unixPermissions&&(L.dir=!0),L.dosPermissions&&16&L.dosPermissions&&(L.dir=!0),L.dir&&($=b($)),L.createFolders&&(z=_($))&&g.call(this,z,!0);var U=O==="string"&&L.binary===!1&&L.base64===!1;A&&A.binary!==void 0||(L.binary=!U),(k instanceof m&&k.uncompressedSize===0||L.dir||!k||k.length===0)&&(L.base64=!1,L.binary=!0,k="",L.compression="STORE",O="string");var S=null;S=k instanceof m||k instanceof l?k:u.isNode&&u.isStream(k)?new p($,k):s.prepareContent($,k,L.binary,L.optimizedBinaryString,L.base64);var T=new h($,S,L);this.files[$]=T}var i=n("./utf8"),s=n("./utils"),l=n("./stream/GenericWorker"),f=n("./stream/StreamHelper"),d=n("./defaults"),m=n("./compressedObject"),h=n("./zipObject"),c=n("./generate"),u=n("./nodejsUtils"),p=n("./nodejs/NodejsStreamInputAdapter"),_=function($){$.slice(-1)==="/"&&($=$.substring(0,$.length-1));var k=$.lastIndexOf("/");return 0<k?$.substring(0,k):""},b=function($){return $.slice(-1)!=="/"&&($+="/"),$},g=function($,k){return k=k!==void 0?k:d.createFolders,$=b($),this.files[$]||a.call(this,$,null,{dir:!0,createFolders:k}),this.files[$]};function y($){return Object.prototype.toString.call($)==="[object RegExp]"}var v={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function($){var k,A,z;for(k in this.files)z=this.files[k],(A=k.slice(this.root.length,k.length))&&k.slice(0,this.root.length)===this.root&&$(A,z)},filter:function($){var k=[];return this.forEach(function(A,z){$(A,z)&&k.push(z)}),k},file:function($,k,A){if(arguments.length!==1)return $=this.root+$,a.call(this,$,k,A),this;if(y($)){var z=$;return this.filter(function(L,U){return!U.dir&&z.test(L)})}var O=this.files[this.root+$];return O&&!O.dir?O:null},folder:function($){if(!$)return this;if(y($))return this.filter(function(O,L){return L.dir&&$.test(O)});var k=this.root+$,A=g.call(this,k),z=this.clone();return z.root=A.name,z},remove:function($){$=this.root+$;var k=this.files[$];if(k||($.slice(-1)!=="/"&&($+="/"),k=this.files[$]),k&&!k.dir)delete this.files[$];else for(var A=this.filter(function(O,L){return L.name.slice(0,$.length)===$}),z=0;z<A.length;z++)delete this.files[A[z].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function($){var k,A={};try{if((A=s.extend($||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");s.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var z=A.comment||this.comment||"";k=c.generateWorker(this,A,z)}catch(O){(k=new l("error")).error(O)}return new f(k,A.type||"string",A.mimeType)},generateAsync:function($,k){return this.generateInternalStream($).accumulate(k)},generateNodeStream:function($,k){return($=$||{}).type||($.type="nodebuffer"),this.generateInternalStream($).toNodejsStream(k)}};r.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,o){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,o){var a=n("./DataReader");function i(s){a.call(this,s);for(var l=0;l<this.data.length;l++)s[l]=255&s[l]}n("../utils").inherits(i,a),i.prototype.byteAt=function(s){return this.data[this.zero+s]},i.prototype.lastIndexOfSignature=function(s){for(var l=s.charCodeAt(0),f=s.charCodeAt(1),d=s.charCodeAt(2),m=s.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===f&&this.data[h+2]===d&&this.data[h+3]===m)return h-this.zero;return-1},i.prototype.readAndCheckSignature=function(s){var l=s.charCodeAt(0),f=s.charCodeAt(1),d=s.charCodeAt(2),m=s.charCodeAt(3),h=this.readData(4);return l===h[0]&&f===h[1]&&d===h[2]&&m===h[3]},i.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=i},{"../utils":32,"./DataReader":18}],18:[function(n,r,o){var a=n("../utils");function i(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var l,f=0;for(this.checkOffset(s),l=this.index+s-1;l>=this.index;l--)f=(f<<8)+this.byteAt(l);return this.index+=s,f},readString:function(s){return a.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},r.exports=i},{"../utils":32}],19:[function(n,r,o){var a=n("./Uint8ArrayReader");function i(s){a.call(this,s)}n("../utils").inherits(i,a),i.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,o){var a=n("./DataReader");function i(s){a.call(this,s)}n("../utils").inherits(i,a),i.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},i.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},i.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},i.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=i},{"../utils":32,"./DataReader":18}],21:[function(n,r,o){var a=n("./ArrayReader");function i(s){a.call(this,s)}n("../utils").inherits(i,a),i.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,o){var a=n("../utils"),i=n("../support"),s=n("./ArrayReader"),l=n("./StringReader"),f=n("./NodeBufferReader"),d=n("./Uint8ArrayReader");r.exports=function(m){var h=a.getTypeOf(m);return a.checkSupport(h),h!=="string"||i.uint8array?h==="nodebuffer"?new f(m):i.uint8array?new d(a.transformTo("uint8array",m)):new s(a.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,o){var a=n("./GenericWorker"),i=n("../utils");function s(l){a.call(this,"ConvertWorker to "+l),this.destType=l}i.inherits(s,a),s.prototype.processChunk=function(l){this.push({data:i.transformTo(this.destType,l.data),meta:l.meta})},r.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,o){var a=n("./GenericWorker"),i=n("../crc32");function s(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(s,a),s.prototype.processChunk=function(l){this.streamInfo.crc32=i(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,o){var a=n("../utils"),i=n("./GenericWorker");function s(l){i.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}a.inherits(s,i),s.prototype.processChunk=function(l){if(l){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+l.data.length}i.prototype.processChunk.call(this,l)},r.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,o){var a=n("../utils"),i=n("./GenericWorker");function s(l){i.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){f.dataIsReady=!0,f.data=d,f.max=d&&d.length||0,f.type=a.getTypeOf(d),f.isPaused||f._tickAndRepeat()},function(d){f.error(d)})}a.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,f);break;case"uint8array":l=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":l=this.data.slice(this.index,f)}return this.index=f,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,o){function a(i){this.name=i||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(i){this.emit("data",i)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(i){this.emit("error",i)}return!0},error:function(i){return!this.isFinished&&(this.isPaused?this.generatedError=i:(this.isFinished=!0,this.emit("error",i),this.previous&&this.previous.error(i),this.cleanUp()),!0)},on:function(i,s){return this._listeners[i].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(i,s){if(this._listeners[i])for(var l=0;l<this._listeners[i].length;l++)this._listeners[i][l].call(this,s)},pipe:function(i){return i.registerPrevious(this)},registerPrevious:function(i){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=i.streamInfo,this.mergeStreamInfo(),this.previous=i;var s=this;return i.on("data",function(l){s.processChunk(l)}),i.on("end",function(){s.end()}),i.on("error",function(l){s.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var i=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),i=!0),this.previous&&this.previous.resume(),!i},flush:function(){},processChunk:function(i){this.push(i)},withStreamInfo:function(i,s){return this.extraStreamInfo[i]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var i in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,i)&&(this.streamInfo[i]=this.extraStreamInfo[i])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var i="Worker "+this.name;return this.previous?this.previous+" -> "+i:i}},r.exports=a},{}],29:[function(n,r,o){var a=n("../utils"),i=n("./ConvertWorker"),s=n("./GenericWorker"),l=n("../base64"),f=n("../support"),d=n("../external"),m=null;if(f.nodestream)try{m=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(u,p){return new d.Promise(function(_,b){var g=[],y=u._internalType,v=u._outputType,$=u._mimeType;u.on("data",function(k,A){g.push(k),p&&p(A)}).on("error",function(k){g=[],b(k)}).on("end",function(){try{var k=(function(A,z,O){switch(A){case"blob":return a.newBlob(a.transformTo("arraybuffer",z),O);case"base64":return l.encode(z);default:return a.transformTo(A,z)}})(v,(function(A,z){var O,L=0,U=null,S=0;for(O=0;O<z.length;O++)S+=z[O].length;switch(A){case"string":return z.join("");case"array":return Array.prototype.concat.apply([],z);case"uint8array":for(U=new Uint8Array(S),O=0;O<z.length;O++)U.set(z[O],L),L+=z[O].length;return U;case"nodebuffer":return Buffer.concat(z);default:throw new Error("concat : unsupported type '"+A+"'")}})(y,g),$);_(k)}catch(A){b(A)}g=[]}).resume()})}function c(u,p,_){var b=p;switch(p){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=p,this._mimeType=_,a.checkSupport(b),this._worker=u.pipe(new i(b)),u.lock()}catch(g){this._worker=new s("error"),this._worker.error(g)}}c.prototype={accumulate:function(u){return h(this,u)},on:function(u,p){var _=this;return u==="data"?this._worker.on(u,function(b){p.call(_,b.data,b.meta)}):this._worker.on(u,function(){a.delay(p,arguments,_)}),this},resume:function(){return a.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(u){if(a.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},u)}},r.exports=c},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var a=new ArrayBuffer(0);try{o.blob=new Blob([a],{type:"application/zip"}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(a),o.blob=i.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!n("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,o){for(var a=n("./utils"),i=n("./support"),s=n("./nodejsUtils"),l=n("./stream/GenericWorker"),f=new Array(256),d=0;d<256;d++)f[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;f[254]=f[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}o.utf8encode=function(c){return i.nodebuffer?s.newBufferFrom(c,"utf-8"):(function(u){var p,_,b,g,y,v=u.length,$=0;for(g=0;g<v;g++)(64512&(_=u.charCodeAt(g)))==55296&&g+1<v&&(64512&(b=u.charCodeAt(g+1)))==56320&&(_=65536+(_-55296<<10)+(b-56320),g++),$+=_<128?1:_<2048?2:_<65536?3:4;for(p=i.uint8array?new Uint8Array($):new Array($),g=y=0;y<$;g++)(64512&(_=u.charCodeAt(g)))==55296&&g+1<v&&(64512&(b=u.charCodeAt(g+1)))==56320&&(_=65536+(_-55296<<10)+(b-56320),g++),_<128?p[y++]=_:(_<2048?p[y++]=192|_>>>6:(_<65536?p[y++]=224|_>>>12:(p[y++]=240|_>>>18,p[y++]=128|_>>>12&63),p[y++]=128|_>>>6&63),p[y++]=128|63&_);return p})(c)},o.utf8decode=function(c){return i.nodebuffer?a.transformTo("nodebuffer",c).toString("utf-8"):(function(u){var p,_,b,g,y=u.length,v=new Array(2*y);for(p=_=0;p<y;)if((b=u[p++])<128)v[_++]=b;else if(4<(g=f[b]))v[_++]=65533,p+=g-1;else{for(b&=g===2?31:g===3?15:7;1<g&&p<y;)b=b<<6|63&u[p++],g--;1<g?v[_++]=65533:b<65536?v[_++]=b:(b-=65536,v[_++]=55296|b>>10&1023,v[_++]=56320|1023&b)}return v.length!==_&&(v.subarray?v=v.subarray(0,_):v.length=_),a.applyFromCharCode(v)})(c=a.transformTo(i.uint8array?"uint8array":"array",c))},a.inherits(m,l),m.prototype.processChunk=function(c){var u=a.transformTo(i.uint8array?"uint8array":"array",c.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var p=u;(u=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),u.set(p,this.leftOver.length)}else u=this.leftOver.concat(u);this.leftOver=null}var _=(function(g,y){var v;for((y=y||g.length)>g.length&&(y=g.length),v=y-1;0<=v&&(192&g[v])==128;)v--;return v<0||v===0?y:v+f[g[v]]>y?v:y})(u),b=u;_!==u.length&&(i.uint8array?(b=u.subarray(0,_),this.leftOver=u.subarray(_,u.length)):(b=u.slice(0,_),this.leftOver=u.slice(_,u.length))),this.push({data:o.utf8decode(b),meta:c.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=m,a.inherits(h,l),h.prototype.processChunk=function(c){this.push({data:o.utf8encode(c.data),meta:c.meta})},o.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,o){var a=n("./support"),i=n("./base64"),s=n("./nodejsUtils"),l=n("./external");function f(p){return p}function d(p,_){for(var b=0;b<p.length;++b)_[b]=255&p.charCodeAt(b);return _}n("setimmediate"),o.newBlob=function(p,_){o.checkSupport("blob");try{return new Blob([p],{type:_})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(p),b.getBlob(_)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(p,_,b){var g=[],y=0,v=p.length;if(v<=b)return String.fromCharCode.apply(null,p);for(;y<v;)_==="array"||_==="nodebuffer"?g.push(String.fromCharCode.apply(null,p.slice(y,Math.min(y+b,v)))):g.push(String.fromCharCode.apply(null,p.subarray(y,Math.min(y+b,v)))),y+=b;return g.join("")},stringifyByChar:function(p){for(var _="",b=0;b<p.length;b++)_+=String.fromCharCode(p[b]);return _},applyCanBeUsed:{uint8array:(function(){try{return a.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return a.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function h(p){var _=65536,b=o.getTypeOf(p),g=!0;if(b==="uint8array"?g=m.applyCanBeUsed.uint8array:b==="nodebuffer"&&(g=m.applyCanBeUsed.nodebuffer),g)for(;1<_;)try{return m.stringifyByChunk(p,b,_)}catch{_=Math.floor(_/2)}return m.stringifyByChar(p)}function c(p,_){for(var b=0;b<p.length;b++)_[b]=p[b];return _}o.applyFromCharCode=h;var u={};u.string={string:f,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return u.string.uint8array(p).buffer},uint8array:function(p){return d(p,new Uint8Array(p.length))},nodebuffer:function(p){return d(p,s.allocBuffer(p.length))}},u.array={string:h,array:f,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return s.newBufferFrom(p)}},u.arraybuffer={string:function(p){return h(new Uint8Array(p))},array:function(p){return c(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:f,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return s.newBufferFrom(new Uint8Array(p))}},u.uint8array={string:h,array:function(p){return c(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:f,nodebuffer:function(p){return s.newBufferFrom(p)}},u.nodebuffer={string:h,array:function(p){return c(p,new Array(p.length))},arraybuffer:function(p){return u.nodebuffer.uint8array(p).buffer},uint8array:function(p){return c(p,new Uint8Array(p.length))},nodebuffer:f},o.transformTo=function(p,_){if(_=_||"",!p)return _;o.checkSupport(p);var b=o.getTypeOf(_);return u[b][p](_)},o.resolve=function(p){for(var _=p.split("/"),b=[],g=0;g<_.length;g++){var y=_[g];y==="."||y===""&&g!==0&&g!==_.length-1||(y===".."?b.pop():b.push(y))}return b.join("/")},o.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":a.nodebuffer&&s.isBuffer(p)?"nodebuffer":a.uint8array&&p instanceof Uint8Array?"uint8array":a.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(p){if(!a[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(p){var _,b,g="";for(b=0;b<(p||"").length;b++)g+="\\x"+((_=p.charCodeAt(b))<16?"0":"")+_.toString(16).toUpperCase();return g},o.delay=function(p,_,b){setImmediate(function(){p.apply(b||null,_||[])})},o.inherits=function(p,_){function b(){}b.prototype=_.prototype,p.prototype=new b},o.extend=function(){var p,_,b={};for(p=0;p<arguments.length;p++)for(_ in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],_)&&b[_]===void 0&&(b[_]=arguments[p][_]);return b},o.prepareContent=function(p,_,b,g,y){return l.Promise.resolve(_).then(function(v){return a.blob&&(v instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(v))!==-1)&&typeof FileReader<"u"?new l.Promise(function($,k){var A=new FileReader;A.onload=function(z){$(z.target.result)},A.onerror=function(z){k(z.target.error)},A.readAsArrayBuffer(v)}):v}).then(function(v){var $=o.getTypeOf(v);return $?($==="arraybuffer"?v=o.transformTo("uint8array",v):$==="string"&&(y?v=i.decode(v):b&&g!==!0&&(v=(function(k){return d(k,a.uint8array?new Uint8Array(k.length):new Array(k.length))})(v))),v):l.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,o){var a=n("./reader/readerFor"),i=n("./utils"),s=n("./signature"),l=n("./zipEntry"),f=n("./support");function d(m){this.files=[],this.loadOptions=m}d.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(h)+", expected "+i.pretty(m)+")")}},isSignature:function(m,h){var c=this.reader.index;this.reader.setIndex(m);var u=this.reader.readString(4)===h;return this.reader.setIndex(c),u},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),h=f.uint8array?"uint8array":"array",c=i.transformTo(h,m);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,h,c,u=this.zip64EndOfCentralSize-44;0<u;)m=this.reader.readInt(2),h=this.reader.readInt(4),c=this.reader.readData(h),this.zip64ExtensibleData[m]={id:m,length:h,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,h;for(m=0;m<this.files.length;m++)h=this.files[m],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var h=m;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var c=this.centralDirOffset+this.centralDirSize;this.zip64&&(c+=20,c+=12+this.zip64EndOfCentralSize);var u=h-c;if(0<u)this.isSignature(h,s.CENTRAL_FILE_HEADER)||(this.reader.zero=u);else if(u<0)throw new Error("Corrupted zip: missing "+Math.abs(u)+" bytes.")},prepareReader:function(m){this.reader=a(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,o){var a=n("./reader/readerFor"),i=n("./utils"),s=n("./compressedObject"),l=n("./crc32"),f=n("./utf8"),d=n("./compressions"),m=n("./support");function h(c,u){this.options=c,this.loadOptions=u}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(c){var u,p;if(c.skip(22),this.fileNameLength=c.readInt(2),p=c.readInt(2),this.fileName=c.readData(this.fileNameLength),c.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((u=(function(_){for(var b in d)if(Object.prototype.hasOwnProperty.call(d,b)&&d[b].magic===_)return d[b];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,u,c.readData(this.compressedSize))},readCentralPart:function(c){this.versionMadeBy=c.readInt(2),c.skip(2),this.bitFlag=c.readInt(2),this.compressionMethod=c.readString(2),this.date=c.readDate(),this.crc32=c.readInt(4),this.compressedSize=c.readInt(4),this.uncompressedSize=c.readInt(4);var u=c.readInt(2);if(this.extraFieldsLength=c.readInt(2),this.fileCommentLength=c.readInt(2),this.diskNumberStart=c.readInt(2),this.internalFileAttributes=c.readInt(2),this.externalFileAttributes=c.readInt(4),this.localHeaderOffset=c.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");c.skip(u),this.readExtraFields(c),this.parseZIP64ExtraField(c),this.fileComment=c.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var c=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),c==0&&(this.dosPermissions=63&this.externalFileAttributes),c==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var c=a(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=c.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=c.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=c.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=c.readInt(4))}},readExtraFields:function(c){var u,p,_,b=c.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});c.index+4<b;)u=c.readInt(2),p=c.readInt(2),_=c.readData(p),this.extraFields[u]={id:u,length:p,value:_};c.setIndex(b)},handleUTF8:function(){var c=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var u=this.findExtraFieldUnicodePath();if(u!==null)this.fileNameStr=u;else{var p=i.transformTo(c,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var _=this.findExtraFieldUnicodeComment();if(_!==null)this.fileCommentStr=_;else{var b=i.transformTo(c,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var c=this.extraFields[28789];if(c){var u=a(c.value);return u.readInt(1)!==1||l(this.fileName)!==u.readInt(4)?null:f.utf8decode(u.readData(c.length-5))}return null},findExtraFieldUnicodeComment:function(){var c=this.extraFields[25461];if(c){var u=a(c.value);return u.readInt(1)!==1||l(this.fileComment)!==u.readInt(4)?null:f.utf8decode(u.readData(c.length-5))}return null}},r.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,o){function a(u,p,_){this.name=u,this.dir=_.dir,this.date=_.date,this.comment=_.comment,this.unixPermissions=_.unixPermissions,this.dosPermissions=_.dosPermissions,this._data=p,this._dataBinary=_.binary,this.options={compression:_.compression,compressionOptions:_.compressionOptions}}var i=n("./stream/StreamHelper"),s=n("./stream/DataWorker"),l=n("./utf8"),f=n("./compressedObject"),d=n("./stream/GenericWorker");a.prototype={internalStream:function(u){var p=null,_="string";try{if(!u)throw new Error("No output type specified.");var b=(_=u.toLowerCase())==="string"||_==="text";_!=="binarystring"&&_!=="text"||(_="string"),p=this._decompressWorker();var g=!this._dataBinary;g&&!b&&(p=p.pipe(new l.Utf8EncodeWorker)),!g&&b&&(p=p.pipe(new l.Utf8DecodeWorker))}catch(y){(p=new d("error")).error(y)}return new i(p,_,"")},async:function(u,p){return this.internalStream(u).accumulate(p)},nodeStream:function(u,p){return this.internalStream(u||"nodebuffer").toNodejsStream(p)},_compressWorker:function(u,p){if(this._data instanceof f&&this._data.compression.magic===u.magic)return this._data.getCompressedWorker();var _=this._decompressWorker();return this._dataBinary||(_=_.pipe(new l.Utf8EncodeWorker)),f.createWorkerFrom(_,u,p)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof d?this._data:new s(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},c=0;c<m.length;c++)a.prototype[m[c]]=h;r.exports=a},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,o){(function(a){var i,s,l=a.MutationObserver||a.WebKitMutationObserver;if(l){var f=0,d=new l(u),m=a.document.createTextNode("");d.observe(m,{characterData:!0}),i=function(){m.data=f=++f%2}}else if(a.setImmediate||a.MessageChannel===void 0)i="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var p=a.document.createElement("script");p.onreadystatechange=function(){u(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},a.document.documentElement.appendChild(p)}:function(){setTimeout(u,0)};else{var h=new a.MessageChannel;h.port1.onmessage=u,i=function(){h.port2.postMessage(0)}}var c=[];function u(){var p,_;s=!0;for(var b=c.length;b;){for(_=c,c=[],p=-1;++p<b;)_[p]();b=c.length}s=!1}r.exports=function(p){c.push(p)!==1||s||i()}}).call(this,typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,o){var a=n("immediate");function i(){}var s={},l=["REJECTED"],f=["FULFILLED"],d=["PENDING"];function m(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,b!==i&&p(this,b)}function h(b,g,y){this.promise=b,typeof g=="function"&&(this.onFulfilled=g,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function c(b,g,y){a(function(){var v;try{v=g(y)}catch($){return s.reject(b,$)}v===b?s.reject(b,new TypeError("Cannot resolve promise with itself")):s.resolve(b,v)})}function u(b){var g=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof g=="function")return function(){g.apply(b,arguments)}}function p(b,g){var y=!1;function v(A){y||(y=!0,s.reject(b,A))}function $(A){y||(y=!0,s.resolve(b,A))}var k=_(function(){g($,v)});k.status==="error"&&v(k.value)}function _(b,g){var y={};try{y.value=b(g),y.status="success"}catch(v){y.status="error",y.value=v}return y}(r.exports=m).prototype.finally=function(b){if(typeof b!="function")return this;var g=this.constructor;return this.then(function(y){return g.resolve(b()).then(function(){return y})},function(y){return g.resolve(b()).then(function(){throw y})})},m.prototype.catch=function(b){return this.then(null,b)},m.prototype.then=function(b,g){if(typeof b!="function"&&this.state===f||typeof g!="function"&&this.state===l)return this;var y=new this.constructor(i);return this.state!==d?c(y,this.state===f?b:g,this.outcome):this.queue.push(new h(y,b,g)),y},h.prototype.callFulfilled=function(b){s.resolve(this.promise,b)},h.prototype.otherCallFulfilled=function(b){c(this.promise,this.onFulfilled,b)},h.prototype.callRejected=function(b){s.reject(this.promise,b)},h.prototype.otherCallRejected=function(b){c(this.promise,this.onRejected,b)},s.resolve=function(b,g){var y=_(u,g);if(y.status==="error")return s.reject(b,y.value);var v=y.value;if(v)p(b,v);else{b.state=f,b.outcome=g;for(var $=-1,k=b.queue.length;++$<k;)b.queue[$].callFulfilled(g)}return b},s.reject=function(b,g){b.state=l,b.outcome=g;for(var y=-1,v=b.queue.length;++y<v;)b.queue[y].callRejected(g);return b},m.resolve=function(b){return b instanceof this?b:s.resolve(new this(i),b)},m.reject=function(b){var g=new this(i);return s.reject(g,b)},m.all=function(b){var g=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=b.length,v=!1;if(!y)return this.resolve([]);for(var $=new Array(y),k=0,A=-1,z=new this(i);++A<y;)O(b[A],A);return z;function O(L,U){g.resolve(L).then(function(S){$[U]=S,++k!==y||v||(v=!0,s.resolve(z,$))},function(S){v||(v=!0,s.reject(z,S))})}},m.race=function(b){var g=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=b.length,v=!1;if(!y)return this.resolve([]);for(var $=-1,k=new this(i);++$<y;)A=b[$],g.resolve(A).then(function(z){v||(v=!0,s.resolve(k,z))},function(z){v||(v=!0,s.reject(k,z))});var A;return k}},{immediate:36}],38:[function(n,r,o){var a={};(0,n("./lib/utils/common").assign)(a,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=a},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,o){var a=n("./zlib/deflate"),i=n("./utils/common"),s=n("./utils/strings"),l=n("./zlib/messages"),f=n("./zlib/zstream"),d=Object.prototype.toString,m=0,h=-1,c=0,u=8;function p(b){if(!(this instanceof p))return new p(b);this.options=i.assign({level:h,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},b||{});var g=this.options;g.raw&&0<g.windowBits?g.windowBits=-g.windowBits:g.gzip&&0<g.windowBits&&g.windowBits<16&&(g.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var y=a.deflateInit2(this.strm,g.level,g.method,g.windowBits,g.memLevel,g.strategy);if(y!==m)throw new Error(l[y]);if(g.header&&a.deflateSetHeader(this.strm,g.header),g.dictionary){var v;if(v=typeof g.dictionary=="string"?s.string2buf(g.dictionary):d.call(g.dictionary)==="[object ArrayBuffer]"?new Uint8Array(g.dictionary):g.dictionary,(y=a.deflateSetDictionary(this.strm,v))!==m)throw new Error(l[y]);this._dict_set=!0}}function _(b,g){var y=new p(g);if(y.push(b,!0),y.err)throw y.msg||l[y.err];return y.result}p.prototype.push=function(b,g){var y,v,$=this.strm,k=this.options.chunkSize;if(this.ended)return!1;v=g===~~g?g:g===!0?4:0,typeof b=="string"?$.input=s.string2buf(b):d.call(b)==="[object ArrayBuffer]"?$.input=new Uint8Array(b):$.input=b,$.next_in=0,$.avail_in=$.input.length;do{if($.avail_out===0&&($.output=new i.Buf8(k),$.next_out=0,$.avail_out=k),(y=a.deflate($,v))!==1&&y!==m)return this.onEnd(y),!(this.ended=!0);$.avail_out!==0&&($.avail_in!==0||v!==4&&v!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(i.shrinkBuf($.output,$.next_out))):this.onData(i.shrinkBuf($.output,$.next_out)))}while((0<$.avail_in||$.avail_out===0)&&y!==1);return v===4?(y=a.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===m):v!==2||(this.onEnd(m),!($.avail_out=0))},p.prototype.onData=function(b){this.chunks.push(b)},p.prototype.onEnd=function(b){b===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},o.Deflate=p,o.deflate=_,o.deflateRaw=function(b,g){return(g=g||{}).raw=!0,_(b,g)},o.gzip=function(b,g){return(g=g||{}).gzip=!0,_(b,g)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,o){var a=n("./zlib/inflate"),i=n("./utils/common"),s=n("./utils/strings"),l=n("./zlib/constants"),f=n("./zlib/messages"),d=n("./zlib/zstream"),m=n("./zlib/gzheader"),h=Object.prototype.toString;function c(p){if(!(this instanceof c))return new c(p);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},p||{});var _=this.options;_.raw&&0<=_.windowBits&&_.windowBits<16&&(_.windowBits=-_.windowBits,_.windowBits===0&&(_.windowBits=-15)),!(0<=_.windowBits&&_.windowBits<16)||p&&p.windowBits||(_.windowBits+=32),15<_.windowBits&&_.windowBits<48&&(15&_.windowBits)==0&&(_.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var b=a.inflateInit2(this.strm,_.windowBits);if(b!==l.Z_OK)throw new Error(f[b]);this.header=new m,a.inflateGetHeader(this.strm,this.header)}function u(p,_){var b=new c(_);if(b.push(p,!0),b.err)throw b.msg||f[b.err];return b.result}c.prototype.push=function(p,_){var b,g,y,v,$,k,A=this.strm,z=this.options.chunkSize,O=this.options.dictionary,L=!1;if(this.ended)return!1;g=_===~~_?_:_===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof p=="string"?A.input=s.binstring2buf(p):h.call(p)==="[object ArrayBuffer]"?A.input=new Uint8Array(p):A.input=p,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new i.Buf8(z),A.next_out=0,A.avail_out=z),(b=a.inflate(A,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&O&&(k=typeof O=="string"?s.string2buf(O):h.call(O)==="[object ArrayBuffer]"?new Uint8Array(O):O,b=a.inflateSetDictionary(this.strm,k)),b===l.Z_BUF_ERROR&&L===!0&&(b=l.Z_OK,L=!1),b!==l.Z_STREAM_END&&b!==l.Z_OK)return this.onEnd(b),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&b!==l.Z_STREAM_END&&(A.avail_in!==0||g!==l.Z_FINISH&&g!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=s.utf8border(A.output,A.next_out),v=A.next_out-y,$=s.buf2string(A.output,y),A.next_out=v,A.avail_out=z-v,v&&i.arraySet(A.output,A.output,y,v,0),this.onData($)):this.onData(i.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(L=!0)}while((0<A.avail_in||A.avail_out===0)&&b!==l.Z_STREAM_END);return b===l.Z_STREAM_END&&(g=l.Z_FINISH),g===l.Z_FINISH?(b=a.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===l.Z_OK):g!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(A.avail_out=0))},c.prototype.onData=function(p){this.chunks.push(p)},c.prototype.onEnd=function(p){p===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},o.Inflate=c,o.inflate=u,o.inflateRaw=function(p,_){return(_=_||{}).raw=!0,u(p,_)},o.ungzip=u},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,o){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(l){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var d=f.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var m in d)d.hasOwnProperty(m)&&(l[m]=d[m])}}return l},o.shrinkBuf=function(l,f){return l.length===f?l:l.subarray?l.subarray(0,f):(l.length=f,l)};var i={arraySet:function(l,f,d,m,h){if(f.subarray&&l.subarray)l.set(f.subarray(d,d+m),h);else for(var c=0;c<m;c++)l[h+c]=f[d+c]},flattenChunks:function(l){var f,d,m,h,c,u;for(f=m=0,d=l.length;f<d;f++)m+=l[f].length;for(u=new Uint8Array(m),f=h=0,d=l.length;f<d;f++)c=l[f],u.set(c,h),h+=c.length;return u}},s={arraySet:function(l,f,d,m,h){for(var c=0;c<m;c++)l[h+c]=f[d+c]},flattenChunks:function(l){return[].concat.apply([],l)}};o.setTyped=function(l){l?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,i)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,s))},o.setTyped(a)},{}],42:[function(n,r,o){var a=n("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var l=new a.Buf8(256),f=0;f<256;f++)l[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function d(m,h){if(h<65537&&(m.subarray&&s||!m.subarray&&i))return String.fromCharCode.apply(null,a.shrinkBuf(m,h));for(var c="",u=0;u<h;u++)c+=String.fromCharCode(m[u]);return c}l[254]=l[254]=1,o.string2buf=function(m){var h,c,u,p,_,b=m.length,g=0;for(p=0;p<b;p++)(64512&(c=m.charCodeAt(p)))==55296&&p+1<b&&(64512&(u=m.charCodeAt(p+1)))==56320&&(c=65536+(c-55296<<10)+(u-56320),p++),g+=c<128?1:c<2048?2:c<65536?3:4;for(h=new a.Buf8(g),p=_=0;_<g;p++)(64512&(c=m.charCodeAt(p)))==55296&&p+1<b&&(64512&(u=m.charCodeAt(p+1)))==56320&&(c=65536+(c-55296<<10)+(u-56320),p++),c<128?h[_++]=c:(c<2048?h[_++]=192|c>>>6:(c<65536?h[_++]=224|c>>>12:(h[_++]=240|c>>>18,h[_++]=128|c>>>12&63),h[_++]=128|c>>>6&63),h[_++]=128|63&c);return h},o.buf2binstring=function(m){return d(m,m.length)},o.binstring2buf=function(m){for(var h=new a.Buf8(m.length),c=0,u=h.length;c<u;c++)h[c]=m.charCodeAt(c);return h},o.buf2string=function(m,h){var c,u,p,_,b=h||m.length,g=new Array(2*b);for(c=u=0;c<b;)if((p=m[c++])<128)g[u++]=p;else if(4<(_=l[p]))g[u++]=65533,c+=_-1;else{for(p&=_===2?31:_===3?15:7;1<_&&c<b;)p=p<<6|63&m[c++],_--;1<_?g[u++]=65533:p<65536?g[u++]=p:(p-=65536,g[u++]=55296|p>>10&1023,g[u++]=56320|1023&p)}return d(g,u)},o.utf8border=function(m,h){var c;for((h=h||m.length)>m.length&&(h=m.length),c=h-1;0<=c&&(192&m[c])==128;)c--;return c<0||c===0?h:c+l[m[c]]>h?c:h}},{"./common":41}],43:[function(n,r,o){r.exports=function(a,i,s,l){for(var f=65535&a|0,d=a>>>16&65535|0,m=0;s!==0;){for(s-=m=2e3<s?2e3:s;d=d+(f=f+i[l++]|0)|0,--m;);f%=65521,d%=65521}return f|d<<16|0}},{}],44:[function(n,r,o){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,o){var a=(function(){for(var i,s=[],l=0;l<256;l++){i=l;for(var f=0;f<8;f++)i=1&i?3988292384^i>>>1:i>>>1;s[l]=i}return s})();r.exports=function(i,s,l,f){var d=a,m=f+l;i^=-1;for(var h=f;h<m;h++)i=i>>>8^d[255&(i^s[h])];return-1^i}},{}],46:[function(n,r,o){var a,i=n("../utils/common"),s=n("./trees"),l=n("./adler32"),f=n("./crc32"),d=n("./messages"),m=0,h=4,c=0,u=-2,p=-1,_=4,b=2,g=8,y=9,v=286,$=30,k=19,A=2*v+1,z=15,O=3,L=258,U=L+O+1,S=42,T=113,w=1,F=2,re=3,D=4;function J(x,V){return x.msg=d[V],V}function j(x){return(x<<1)-(4<x?9:0)}function ie(x){for(var V=x.length;0<=--V;)x[V]=0}function M(x){var V=x.state,N=V.pending;N>x.avail_out&&(N=x.avail_out),N!==0&&(i.arraySet(x.output,V.pending_buf,V.pending_out,N,x.next_out),x.next_out+=N,V.pending_out+=N,x.total_out+=N,x.avail_out-=N,V.pending-=N,V.pending===0&&(V.pending_out=0))}function B(x,V){s._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,V),x.block_start=x.strstart,M(x.strm)}function oe(x,V){x.pending_buf[x.pending++]=V}function Q(x,V){x.pending_buf[x.pending++]=V>>>8&255,x.pending_buf[x.pending++]=255&V}function Y(x,V){var N,I,E=x.max_chain_length,C=x.strstart,G=x.prev_length,W=x.nice_match,P=x.strstart>x.w_size-U?x.strstart-(x.w_size-U):0,H=x.window,ee=x.w_mask,K=x.prev,se=x.strstart+L,Se=H[C+G-1],he=H[C+G];x.prev_length>=x.good_match&&(E>>=2),W>x.lookahead&&(W=x.lookahead);do if(H[(N=V)+G]===he&&H[N+G-1]===Se&&H[N]===H[C]&&H[++N]===H[C+1]){C+=2,N++;do;while(H[++C]===H[++N]&&H[++C]===H[++N]&&H[++C]===H[++N]&&H[++C]===H[++N]&&H[++C]===H[++N]&&H[++C]===H[++N]&&H[++C]===H[++N]&&H[++C]===H[++N]&&C<se);if(I=L-(se-C),C=se-L,G<I){if(x.match_start=V,W<=(G=I))break;Se=H[C+G-1],he=H[C+G]}}while((V=K[V&ee])>P&&--E!=0);return G<=x.lookahead?G:x.lookahead}function De(x){var V,N,I,E,C,G,W,P,H,ee,K=x.w_size;do{if(E=x.window_size-x.lookahead-x.strstart,x.strstart>=K+(K-U)){for(i.arraySet(x.window,x.window,K,K,0),x.match_start-=K,x.strstart-=K,x.block_start-=K,V=N=x.hash_size;I=x.head[--V],x.head[V]=K<=I?I-K:0,--N;);for(V=N=K;I=x.prev[--V],x.prev[V]=K<=I?I-K:0,--N;);E+=K}if(x.strm.avail_in===0)break;if(G=x.strm,W=x.window,P=x.strstart+x.lookahead,H=E,ee=void 0,ee=G.avail_in,H<ee&&(ee=H),N=ee===0?0:(G.avail_in-=ee,i.arraySet(W,G.input,G.next_in,ee,P),G.state.wrap===1?G.adler=l(G.adler,W,ee,P):G.state.wrap===2&&(G.adler=f(G.adler,W,ee,P)),G.next_in+=ee,G.total_in+=ee,ee),x.lookahead+=N,x.lookahead+x.insert>=O)for(C=x.strstart-x.insert,x.ins_h=x.window[C],x.ins_h=(x.ins_h<<x.hash_shift^x.window[C+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[C+O-1])&x.hash_mask,x.prev[C&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=C,C++,x.insert--,!(x.lookahead+x.insert<O)););}while(x.lookahead<U&&x.strm.avail_in!==0)}function Ve(x,V){for(var N,I;;){if(x.lookahead<U){if(De(x),x.lookahead<U&&V===m)return w;if(x.lookahead===0)break}if(N=0,x.lookahead>=O&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+O-1])&x.hash_mask,N=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),N!==0&&x.strstart-N<=x.w_size-U&&(x.match_length=Y(x,N)),x.match_length>=O)if(I=s._tr_tally(x,x.strstart-x.match_start,x.match_length-O),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=O){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+O-1])&x.hash_mask,N=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else I=s._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(I&&(B(x,!1),x.strm.avail_out===0))return w}return x.insert=x.strstart<O-1?x.strstart:O-1,V===h?(B(x,!0),x.strm.avail_out===0?re:D):x.last_lit&&(B(x,!1),x.strm.avail_out===0)?w:F}function pe(x,V){for(var N,I,E;;){if(x.lookahead<U){if(De(x),x.lookahead<U&&V===m)return w;if(x.lookahead===0)break}if(N=0,x.lookahead>=O&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+O-1])&x.hash_mask,N=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=O-1,N!==0&&x.prev_length<x.max_lazy_match&&x.strstart-N<=x.w_size-U&&(x.match_length=Y(x,N),x.match_length<=5&&(x.strategy===1||x.match_length===O&&4096<x.strstart-x.match_start)&&(x.match_length=O-1)),x.prev_length>=O&&x.match_length<=x.prev_length){for(E=x.strstart+x.lookahead-O,I=s._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-O),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=E&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+O-1])&x.hash_mask,N=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=O-1,x.strstart++,I&&(B(x,!1),x.strm.avail_out===0))return w}else if(x.match_available){if((I=s._tr_tally(x,0,x.window[x.strstart-1]))&&B(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return w}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(I=s._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<O-1?x.strstart:O-1,V===h?(B(x,!0),x.strm.avail_out===0?re:D):x.last_lit&&(B(x,!1),x.strm.avail_out===0)?w:F}function ve(x,V,N,I,E){this.good_length=x,this.max_lazy=V,this.nice_length=N,this.max_chain=I,this.func=E}function Ne(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*A),this.dyn_dtree=new i.Buf16(2*(2*$+1)),this.bl_tree=new i.Buf16(2*(2*k+1)),ie(this.dyn_ltree),ie(this.dyn_dtree),ie(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(z+1),this.heap=new i.Buf16(2*v+1),ie(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),ie(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Pe(x){var V;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=b,(V=x.state).pending=0,V.pending_out=0,V.wrap<0&&(V.wrap=-V.wrap),V.status=V.wrap?S:T,x.adler=V.wrap===2?0:1,V.last_flush=m,s._tr_init(V),c):J(x,u)}function vt(x){var V=Pe(x);return V===c&&(function(N){N.window_size=2*N.w_size,ie(N.head),N.max_lazy_match=a[N.level].max_lazy,N.good_match=a[N.level].good_length,N.nice_match=a[N.level].nice_length,N.max_chain_length=a[N.level].max_chain,N.strstart=0,N.block_start=0,N.lookahead=0,N.insert=0,N.match_length=N.prev_length=O-1,N.match_available=0,N.ins_h=0})(x.state),V}function ut(x,V,N,I,E,C){if(!x)return u;var G=1;if(V===p&&(V=6),I<0?(G=0,I=-I):15<I&&(G=2,I-=16),E<1||y<E||N!==g||I<8||15<I||V<0||9<V||C<0||_<C)return J(x,u);I===8&&(I=9);var W=new Ne;return(x.state=W).strm=x,W.wrap=G,W.gzhead=null,W.w_bits=I,W.w_size=1<<W.w_bits,W.w_mask=W.w_size-1,W.hash_bits=E+7,W.hash_size=1<<W.hash_bits,W.hash_mask=W.hash_size-1,W.hash_shift=~~((W.hash_bits+O-1)/O),W.window=new i.Buf8(2*W.w_size),W.head=new i.Buf16(W.hash_size),W.prev=new i.Buf16(W.w_size),W.lit_bufsize=1<<E+6,W.pending_buf_size=4*W.lit_bufsize,W.pending_buf=new i.Buf8(W.pending_buf_size),W.d_buf=1*W.lit_bufsize,W.l_buf=3*W.lit_bufsize,W.level=V,W.strategy=C,W.method=N,vt(x)}a=[new ve(0,0,0,0,function(x,V){var N=65535;for(N>x.pending_buf_size-5&&(N=x.pending_buf_size-5);;){if(x.lookahead<=1){if(De(x),x.lookahead===0&&V===m)return w;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var I=x.block_start+N;if((x.strstart===0||x.strstart>=I)&&(x.lookahead=x.strstart-I,x.strstart=I,B(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-U&&(B(x,!1),x.strm.avail_out===0))return w}return x.insert=0,V===h?(B(x,!0),x.strm.avail_out===0?re:D):(x.strstart>x.block_start&&(B(x,!1),x.strm.avail_out),w)}),new ve(4,4,8,4,Ve),new ve(4,5,16,8,Ve),new ve(4,6,32,32,Ve),new ve(4,4,16,16,pe),new ve(8,16,32,32,pe),new ve(8,16,128,128,pe),new ve(8,32,128,256,pe),new ve(32,128,258,1024,pe),new ve(32,258,258,4096,pe)],o.deflateInit=function(x,V){return ut(x,V,g,15,8,0)},o.deflateInit2=ut,o.deflateReset=vt,o.deflateResetKeep=Pe,o.deflateSetHeader=function(x,V){return x&&x.state?x.state.wrap!==2?u:(x.state.gzhead=V,c):u},o.deflate=function(x,V){var N,I,E,C;if(!x||!x.state||5<V||V<0)return x?J(x,u):u;if(I=x.state,!x.output||!x.input&&x.avail_in!==0||I.status===666&&V!==h)return J(x,x.avail_out===0?-5:u);if(I.strm=x,N=I.last_flush,I.last_flush=V,I.status===S)if(I.wrap===2)x.adler=0,oe(I,31),oe(I,139),oe(I,8),I.gzhead?(oe(I,(I.gzhead.text?1:0)+(I.gzhead.hcrc?2:0)+(I.gzhead.extra?4:0)+(I.gzhead.name?8:0)+(I.gzhead.comment?16:0)),oe(I,255&I.gzhead.time),oe(I,I.gzhead.time>>8&255),oe(I,I.gzhead.time>>16&255),oe(I,I.gzhead.time>>24&255),oe(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),oe(I,255&I.gzhead.os),I.gzhead.extra&&I.gzhead.extra.length&&(oe(I,255&I.gzhead.extra.length),oe(I,I.gzhead.extra.length>>8&255)),I.gzhead.hcrc&&(x.adler=f(x.adler,I.pending_buf,I.pending,0)),I.gzindex=0,I.status=69):(oe(I,0),oe(I,0),oe(I,0),oe(I,0),oe(I,0),oe(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),oe(I,3),I.status=T);else{var G=g+(I.w_bits-8<<4)<<8;G|=(2<=I.strategy||I.level<2?0:I.level<6?1:I.level===6?2:3)<<6,I.strstart!==0&&(G|=32),G+=31-G%31,I.status=T,Q(I,G),I.strstart!==0&&(Q(I,x.adler>>>16),Q(I,65535&x.adler)),x.adler=1}if(I.status===69)if(I.gzhead.extra){for(E=I.pending;I.gzindex<(65535&I.gzhead.extra.length)&&(I.pending!==I.pending_buf_size||(I.gzhead.hcrc&&I.pending>E&&(x.adler=f(x.adler,I.pending_buf,I.pending-E,E)),M(x),E=I.pending,I.pending!==I.pending_buf_size));)oe(I,255&I.gzhead.extra[I.gzindex]),I.gzindex++;I.gzhead.hcrc&&I.pending>E&&(x.adler=f(x.adler,I.pending_buf,I.pending-E,E)),I.gzindex===I.gzhead.extra.length&&(I.gzindex=0,I.status=73)}else I.status=73;if(I.status===73)if(I.gzhead.name){E=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>E&&(x.adler=f(x.adler,I.pending_buf,I.pending-E,E)),M(x),E=I.pending,I.pending===I.pending_buf_size)){C=1;break}C=I.gzindex<I.gzhead.name.length?255&I.gzhead.name.charCodeAt(I.gzindex++):0,oe(I,C)}while(C!==0);I.gzhead.hcrc&&I.pending>E&&(x.adler=f(x.adler,I.pending_buf,I.pending-E,E)),C===0&&(I.gzindex=0,I.status=91)}else I.status=91;if(I.status===91)if(I.gzhead.comment){E=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>E&&(x.adler=f(x.adler,I.pending_buf,I.pending-E,E)),M(x),E=I.pending,I.pending===I.pending_buf_size)){C=1;break}C=I.gzindex<I.gzhead.comment.length?255&I.gzhead.comment.charCodeAt(I.gzindex++):0,oe(I,C)}while(C!==0);I.gzhead.hcrc&&I.pending>E&&(x.adler=f(x.adler,I.pending_buf,I.pending-E,E)),C===0&&(I.status=103)}else I.status=103;if(I.status===103&&(I.gzhead.hcrc?(I.pending+2>I.pending_buf_size&&M(x),I.pending+2<=I.pending_buf_size&&(oe(I,255&x.adler),oe(I,x.adler>>8&255),x.adler=0,I.status=T)):I.status=T),I.pending!==0){if(M(x),x.avail_out===0)return I.last_flush=-1,c}else if(x.avail_in===0&&j(V)<=j(N)&&V!==h)return J(x,-5);if(I.status===666&&x.avail_in!==0)return J(x,-5);if(x.avail_in!==0||I.lookahead!==0||V!==m&&I.status!==666){var W=I.strategy===2?(function(P,H){for(var ee;;){if(P.lookahead===0&&(De(P),P.lookahead===0)){if(H===m)return w;break}if(P.match_length=0,ee=s._tr_tally(P,0,P.window[P.strstart]),P.lookahead--,P.strstart++,ee&&(B(P,!1),P.strm.avail_out===0))return w}return P.insert=0,H===h?(B(P,!0),P.strm.avail_out===0?re:D):P.last_lit&&(B(P,!1),P.strm.avail_out===0)?w:F})(I,V):I.strategy===3?(function(P,H){for(var ee,K,se,Se,he=P.window;;){if(P.lookahead<=L){if(De(P),P.lookahead<=L&&H===m)return w;if(P.lookahead===0)break}if(P.match_length=0,P.lookahead>=O&&0<P.strstart&&(K=he[se=P.strstart-1])===he[++se]&&K===he[++se]&&K===he[++se]){Se=P.strstart+L;do;while(K===he[++se]&&K===he[++se]&&K===he[++se]&&K===he[++se]&&K===he[++se]&&K===he[++se]&&K===he[++se]&&K===he[++se]&&se<Se);P.match_length=L-(Se-se),P.match_length>P.lookahead&&(P.match_length=P.lookahead)}if(P.match_length>=O?(ee=s._tr_tally(P,1,P.match_length-O),P.lookahead-=P.match_length,P.strstart+=P.match_length,P.match_length=0):(ee=s._tr_tally(P,0,P.window[P.strstart]),P.lookahead--,P.strstart++),ee&&(B(P,!1),P.strm.avail_out===0))return w}return P.insert=0,H===h?(B(P,!0),P.strm.avail_out===0?re:D):P.last_lit&&(B(P,!1),P.strm.avail_out===0)?w:F})(I,V):a[I.level].func(I,V);if(W!==re&&W!==D||(I.status=666),W===w||W===re)return x.avail_out===0&&(I.last_flush=-1),c;if(W===F&&(V===1?s._tr_align(I):V!==5&&(s._tr_stored_block(I,0,0,!1),V===3&&(ie(I.head),I.lookahead===0&&(I.strstart=0,I.block_start=0,I.insert=0))),M(x),x.avail_out===0))return I.last_flush=-1,c}return V!==h?c:I.wrap<=0?1:(I.wrap===2?(oe(I,255&x.adler),oe(I,x.adler>>8&255),oe(I,x.adler>>16&255),oe(I,x.adler>>24&255),oe(I,255&x.total_in),oe(I,x.total_in>>8&255),oe(I,x.total_in>>16&255),oe(I,x.total_in>>24&255)):(Q(I,x.adler>>>16),Q(I,65535&x.adler)),M(x),0<I.wrap&&(I.wrap=-I.wrap),I.pending!==0?c:1)},o.deflateEnd=function(x){var V;return x&&x.state?(V=x.state.status)!==S&&V!==69&&V!==73&&V!==91&&V!==103&&V!==T&&V!==666?J(x,u):(x.state=null,V===T?J(x,-3):c):u},o.deflateSetDictionary=function(x,V){var N,I,E,C,G,W,P,H,ee=V.length;if(!x||!x.state||(C=(N=x.state).wrap)===2||C===1&&N.status!==S||N.lookahead)return u;for(C===1&&(x.adler=l(x.adler,V,ee,0)),N.wrap=0,ee>=N.w_size&&(C===0&&(ie(N.head),N.strstart=0,N.block_start=0,N.insert=0),H=new i.Buf8(N.w_size),i.arraySet(H,V,ee-N.w_size,N.w_size,0),V=H,ee=N.w_size),G=x.avail_in,W=x.next_in,P=x.input,x.avail_in=ee,x.next_in=0,x.input=V,De(N);N.lookahead>=O;){for(I=N.strstart,E=N.lookahead-(O-1);N.ins_h=(N.ins_h<<N.hash_shift^N.window[I+O-1])&N.hash_mask,N.prev[I&N.w_mask]=N.head[N.ins_h],N.head[N.ins_h]=I,I++,--E;);N.strstart=I,N.lookahead=O-1,De(N)}return N.strstart+=N.lookahead,N.block_start=N.strstart,N.insert=N.lookahead,N.lookahead=0,N.match_length=N.prev_length=O-1,N.match_available=0,x.next_in=W,x.input=P,x.avail_in=G,N.wrap=C,c},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,o){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,o){r.exports=function(a,i){var s,l,f,d,m,h,c,u,p,_,b,g,y,v,$,k,A,z,O,L,U,S,T,w,F;s=a.state,l=a.next_in,w=a.input,f=l+(a.avail_in-5),d=a.next_out,F=a.output,m=d-(i-a.avail_out),h=d+(a.avail_out-257),c=s.dmax,u=s.wsize,p=s.whave,_=s.wnext,b=s.window,g=s.hold,y=s.bits,v=s.lencode,$=s.distcode,k=(1<<s.lenbits)-1,A=(1<<s.distbits)-1;e:do{y<15&&(g+=w[l++]<<y,y+=8,g+=w[l++]<<y,y+=8),z=v[g&k];t:for(;;){if(g>>>=O=z>>>24,y-=O,(O=z>>>16&255)===0)F[d++]=65535&z;else{if(!(16&O)){if((64&O)==0){z=v[(65535&z)+(g&(1<<O)-1)];continue t}if(32&O){s.mode=12;break e}a.msg="invalid literal/length code",s.mode=30;break e}L=65535&z,(O&=15)&&(y<O&&(g+=w[l++]<<y,y+=8),L+=g&(1<<O)-1,g>>>=O,y-=O),y<15&&(g+=w[l++]<<y,y+=8,g+=w[l++]<<y,y+=8),z=$[g&A];n:for(;;){if(g>>>=O=z>>>24,y-=O,!(16&(O=z>>>16&255))){if((64&O)==0){z=$[(65535&z)+(g&(1<<O)-1)];continue n}a.msg="invalid distance code",s.mode=30;break e}if(U=65535&z,y<(O&=15)&&(g+=w[l++]<<y,(y+=8)<O&&(g+=w[l++]<<y,y+=8)),c<(U+=g&(1<<O)-1)){a.msg="invalid distance too far back",s.mode=30;break e}if(g>>>=O,y-=O,(O=d-m)<U){if(p<(O=U-O)&&s.sane){a.msg="invalid distance too far back",s.mode=30;break e}if(T=b,(S=0)===_){if(S+=u-O,O<L){for(L-=O;F[d++]=b[S++],--O;);S=d-U,T=F}}else if(_<O){if(S+=u+_-O,(O-=_)<L){for(L-=O;F[d++]=b[S++],--O;);if(S=0,_<L){for(L-=O=_;F[d++]=b[S++],--O;);S=d-U,T=F}}}else if(S+=_-O,O<L){for(L-=O;F[d++]=b[S++],--O;);S=d-U,T=F}for(;2<L;)F[d++]=T[S++],F[d++]=T[S++],F[d++]=T[S++],L-=3;L&&(F[d++]=T[S++],1<L&&(F[d++]=T[S++]))}else{for(S=d-U;F[d++]=F[S++],F[d++]=F[S++],F[d++]=F[S++],2<(L-=3););L&&(F[d++]=F[S++],1<L&&(F[d++]=F[S++]))}break}}break}}while(l<f&&d<h);l-=L=y>>3,g&=(1<<(y-=L<<3))-1,a.next_in=l,a.next_out=d,a.avail_in=l<f?f-l+5:5-(l-f),a.avail_out=d<h?h-d+257:257-(d-h),s.hold=g,s.bits=y}},{}],49:[function(n,r,o){var a=n("../utils/common"),i=n("./adler32"),s=n("./crc32"),l=n("./inffast"),f=n("./inftrees"),d=1,m=2,h=0,c=-2,u=1,p=852,_=592;function b(S){return(S>>>24&255)+(S>>>8&65280)+((65280&S)<<8)+((255&S)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new a.Buf16(320),this.work=new a.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(S){var T;return S&&S.state?(T=S.state,S.total_in=S.total_out=T.total=0,S.msg="",T.wrap&&(S.adler=1&T.wrap),T.mode=u,T.last=0,T.havedict=0,T.dmax=32768,T.head=null,T.hold=0,T.bits=0,T.lencode=T.lendyn=new a.Buf32(p),T.distcode=T.distdyn=new a.Buf32(_),T.sane=1,T.back=-1,h):c}function v(S){var T;return S&&S.state?((T=S.state).wsize=0,T.whave=0,T.wnext=0,y(S)):c}function $(S,T){var w,F;return S&&S.state?(F=S.state,T<0?(w=0,T=-T):(w=1+(T>>4),T<48&&(T&=15)),T&&(T<8||15<T)?c:(F.window!==null&&F.wbits!==T&&(F.window=null),F.wrap=w,F.wbits=T,v(S))):c}function k(S,T){var w,F;return S?(F=new g,(S.state=F).window=null,(w=$(S,T))!==h&&(S.state=null),w):c}var A,z,O=!0;function L(S){if(O){var T;for(A=new a.Buf32(512),z=new a.Buf32(32),T=0;T<144;)S.lens[T++]=8;for(;T<256;)S.lens[T++]=9;for(;T<280;)S.lens[T++]=7;for(;T<288;)S.lens[T++]=8;for(f(d,S.lens,0,288,A,0,S.work,{bits:9}),T=0;T<32;)S.lens[T++]=5;f(m,S.lens,0,32,z,0,S.work,{bits:5}),O=!1}S.lencode=A,S.lenbits=9,S.distcode=z,S.distbits=5}function U(S,T,w,F){var re,D=S.state;return D.window===null&&(D.wsize=1<<D.wbits,D.wnext=0,D.whave=0,D.window=new a.Buf8(D.wsize)),F>=D.wsize?(a.arraySet(D.window,T,w-D.wsize,D.wsize,0),D.wnext=0,D.whave=D.wsize):(F<(re=D.wsize-D.wnext)&&(re=F),a.arraySet(D.window,T,w-F,re,D.wnext),(F-=re)?(a.arraySet(D.window,T,w-F,F,0),D.wnext=F,D.whave=D.wsize):(D.wnext+=re,D.wnext===D.wsize&&(D.wnext=0),D.whave<D.wsize&&(D.whave+=re))),0}o.inflateReset=v,o.inflateReset2=$,o.inflateResetKeep=y,o.inflateInit=function(S){return k(S,15)},o.inflateInit2=k,o.inflate=function(S,T){var w,F,re,D,J,j,ie,M,B,oe,Q,Y,De,Ve,pe,ve,Ne,Pe,vt,ut,x,V,N,I,E=0,C=new a.Buf8(4),G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!S||!S.state||!S.output||!S.input&&S.avail_in!==0)return c;(w=S.state).mode===12&&(w.mode=13),J=S.next_out,re=S.output,ie=S.avail_out,D=S.next_in,F=S.input,j=S.avail_in,M=w.hold,B=w.bits,oe=j,Q=ie,V=h;e:for(;;)switch(w.mode){case u:if(w.wrap===0){w.mode=13;break}for(;B<16;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if(2&w.wrap&&M===35615){C[w.check=0]=255&M,C[1]=M>>>8&255,w.check=s(w.check,C,2,0),B=M=0,w.mode=2;break}if(w.flags=0,w.head&&(w.head.done=!1),!(1&w.wrap)||(((255&M)<<8)+(M>>8))%31){S.msg="incorrect header check",w.mode=30;break}if((15&M)!=8){S.msg="unknown compression method",w.mode=30;break}if(B-=4,x=8+(15&(M>>>=4)),w.wbits===0)w.wbits=x;else if(x>w.wbits){S.msg="invalid window size",w.mode=30;break}w.dmax=1<<x,S.adler=w.check=1,w.mode=512&M?10:12,B=M=0;break;case 2:for(;B<16;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if(w.flags=M,(255&w.flags)!=8){S.msg="unknown compression method",w.mode=30;break}if(57344&w.flags){S.msg="unknown header flags set",w.mode=30;break}w.head&&(w.head.text=M>>8&1),512&w.flags&&(C[0]=255&M,C[1]=M>>>8&255,w.check=s(w.check,C,2,0)),B=M=0,w.mode=3;case 3:for(;B<32;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}w.head&&(w.head.time=M),512&w.flags&&(C[0]=255&M,C[1]=M>>>8&255,C[2]=M>>>16&255,C[3]=M>>>24&255,w.check=s(w.check,C,4,0)),B=M=0,w.mode=4;case 4:for(;B<16;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}w.head&&(w.head.xflags=255&M,w.head.os=M>>8),512&w.flags&&(C[0]=255&M,C[1]=M>>>8&255,w.check=s(w.check,C,2,0)),B=M=0,w.mode=5;case 5:if(1024&w.flags){for(;B<16;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}w.length=M,w.head&&(w.head.extra_len=M),512&w.flags&&(C[0]=255&M,C[1]=M>>>8&255,w.check=s(w.check,C,2,0)),B=M=0}else w.head&&(w.head.extra=null);w.mode=6;case 6:if(1024&w.flags&&(j<(Y=w.length)&&(Y=j),Y&&(w.head&&(x=w.head.extra_len-w.length,w.head.extra||(w.head.extra=new Array(w.head.extra_len)),a.arraySet(w.head.extra,F,D,Y,x)),512&w.flags&&(w.check=s(w.check,F,Y,D)),j-=Y,D+=Y,w.length-=Y),w.length))break e;w.length=0,w.mode=7;case 7:if(2048&w.flags){if(j===0)break e;for(Y=0;x=F[D+Y++],w.head&&x&&w.length<65536&&(w.head.name+=String.fromCharCode(x)),x&&Y<j;);if(512&w.flags&&(w.check=s(w.check,F,Y,D)),j-=Y,D+=Y,x)break e}else w.head&&(w.head.name=null);w.length=0,w.mode=8;case 8:if(4096&w.flags){if(j===0)break e;for(Y=0;x=F[D+Y++],w.head&&x&&w.length<65536&&(w.head.comment+=String.fromCharCode(x)),x&&Y<j;);if(512&w.flags&&(w.check=s(w.check,F,Y,D)),j-=Y,D+=Y,x)break e}else w.head&&(w.head.comment=null);w.mode=9;case 9:if(512&w.flags){for(;B<16;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if(M!==(65535&w.check)){S.msg="header crc mismatch",w.mode=30;break}B=M=0}w.head&&(w.head.hcrc=w.flags>>9&1,w.head.done=!0),S.adler=w.check=0,w.mode=12;break;case 10:for(;B<32;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}S.adler=w.check=b(M),B=M=0,w.mode=11;case 11:if(w.havedict===0)return S.next_out=J,S.avail_out=ie,S.next_in=D,S.avail_in=j,w.hold=M,w.bits=B,2;S.adler=w.check=1,w.mode=12;case 12:if(T===5||T===6)break e;case 13:if(w.last){M>>>=7&B,B-=7&B,w.mode=27;break}for(;B<3;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}switch(w.last=1&M,B-=1,3&(M>>>=1)){case 0:w.mode=14;break;case 1:if(L(w),w.mode=20,T!==6)break;M>>>=2,B-=2;break e;case 2:w.mode=17;break;case 3:S.msg="invalid block type",w.mode=30}M>>>=2,B-=2;break;case 14:for(M>>>=7&B,B-=7&B;B<32;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if((65535&M)!=(M>>>16^65535)){S.msg="invalid stored block lengths",w.mode=30;break}if(w.length=65535&M,B=M=0,w.mode=15,T===6)break e;case 15:w.mode=16;case 16:if(Y=w.length){if(j<Y&&(Y=j),ie<Y&&(Y=ie),Y===0)break e;a.arraySet(re,F,D,Y,J),j-=Y,D+=Y,ie-=Y,J+=Y,w.length-=Y;break}w.mode=12;break;case 17:for(;B<14;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if(w.nlen=257+(31&M),M>>>=5,B-=5,w.ndist=1+(31&M),M>>>=5,B-=5,w.ncode=4+(15&M),M>>>=4,B-=4,286<w.nlen||30<w.ndist){S.msg="too many length or distance symbols",w.mode=30;break}w.have=0,w.mode=18;case 18:for(;w.have<w.ncode;){for(;B<3;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}w.lens[G[w.have++]]=7&M,M>>>=3,B-=3}for(;w.have<19;)w.lens[G[w.have++]]=0;if(w.lencode=w.lendyn,w.lenbits=7,N={bits:w.lenbits},V=f(0,w.lens,0,19,w.lencode,0,w.work,N),w.lenbits=N.bits,V){S.msg="invalid code lengths set",w.mode=30;break}w.have=0,w.mode=19;case 19:for(;w.have<w.nlen+w.ndist;){for(;ve=(E=w.lencode[M&(1<<w.lenbits)-1])>>>16&255,Ne=65535&E,!((pe=E>>>24)<=B);){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if(Ne<16)M>>>=pe,B-=pe,w.lens[w.have++]=Ne;else{if(Ne===16){for(I=pe+2;B<I;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if(M>>>=pe,B-=pe,w.have===0){S.msg="invalid bit length repeat",w.mode=30;break}x=w.lens[w.have-1],Y=3+(3&M),M>>>=2,B-=2}else if(Ne===17){for(I=pe+3;B<I;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}B-=pe,x=0,Y=3+(7&(M>>>=pe)),M>>>=3,B-=3}else{for(I=pe+7;B<I;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}B-=pe,x=0,Y=11+(127&(M>>>=pe)),M>>>=7,B-=7}if(w.have+Y>w.nlen+w.ndist){S.msg="invalid bit length repeat",w.mode=30;break}for(;Y--;)w.lens[w.have++]=x}}if(w.mode===30)break;if(w.lens[256]===0){S.msg="invalid code -- missing end-of-block",w.mode=30;break}if(w.lenbits=9,N={bits:w.lenbits},V=f(d,w.lens,0,w.nlen,w.lencode,0,w.work,N),w.lenbits=N.bits,V){S.msg="invalid literal/lengths set",w.mode=30;break}if(w.distbits=6,w.distcode=w.distdyn,N={bits:w.distbits},V=f(m,w.lens,w.nlen,w.ndist,w.distcode,0,w.work,N),w.distbits=N.bits,V){S.msg="invalid distances set",w.mode=30;break}if(w.mode=20,T===6)break e;case 20:w.mode=21;case 21:if(6<=j&&258<=ie){S.next_out=J,S.avail_out=ie,S.next_in=D,S.avail_in=j,w.hold=M,w.bits=B,l(S,Q),J=S.next_out,re=S.output,ie=S.avail_out,D=S.next_in,F=S.input,j=S.avail_in,M=w.hold,B=w.bits,w.mode===12&&(w.back=-1);break}for(w.back=0;ve=(E=w.lencode[M&(1<<w.lenbits)-1])>>>16&255,Ne=65535&E,!((pe=E>>>24)<=B);){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if(ve&&(240&ve)==0){for(Pe=pe,vt=ve,ut=Ne;ve=(E=w.lencode[ut+((M&(1<<Pe+vt)-1)>>Pe)])>>>16&255,Ne=65535&E,!(Pe+(pe=E>>>24)<=B);){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}M>>>=Pe,B-=Pe,w.back+=Pe}if(M>>>=pe,B-=pe,w.back+=pe,w.length=Ne,ve===0){w.mode=26;break}if(32&ve){w.back=-1,w.mode=12;break}if(64&ve){S.msg="invalid literal/length code",w.mode=30;break}w.extra=15&ve,w.mode=22;case 22:if(w.extra){for(I=w.extra;B<I;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}w.length+=M&(1<<w.extra)-1,M>>>=w.extra,B-=w.extra,w.back+=w.extra}w.was=w.length,w.mode=23;case 23:for(;ve=(E=w.distcode[M&(1<<w.distbits)-1])>>>16&255,Ne=65535&E,!((pe=E>>>24)<=B);){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if((240&ve)==0){for(Pe=pe,vt=ve,ut=Ne;ve=(E=w.distcode[ut+((M&(1<<Pe+vt)-1)>>Pe)])>>>16&255,Ne=65535&E,!(Pe+(pe=E>>>24)<=B);){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}M>>>=Pe,B-=Pe,w.back+=Pe}if(M>>>=pe,B-=pe,w.back+=pe,64&ve){S.msg="invalid distance code",w.mode=30;break}w.offset=Ne,w.extra=15&ve,w.mode=24;case 24:if(w.extra){for(I=w.extra;B<I;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}w.offset+=M&(1<<w.extra)-1,M>>>=w.extra,B-=w.extra,w.back+=w.extra}if(w.offset>w.dmax){S.msg="invalid distance too far back",w.mode=30;break}w.mode=25;case 25:if(ie===0)break e;if(Y=Q-ie,w.offset>Y){if((Y=w.offset-Y)>w.whave&&w.sane){S.msg="invalid distance too far back",w.mode=30;break}De=Y>w.wnext?(Y-=w.wnext,w.wsize-Y):w.wnext-Y,Y>w.length&&(Y=w.length),Ve=w.window}else Ve=re,De=J-w.offset,Y=w.length;for(ie<Y&&(Y=ie),ie-=Y,w.length-=Y;re[J++]=Ve[De++],--Y;);w.length===0&&(w.mode=21);break;case 26:if(ie===0)break e;re[J++]=w.length,ie--,w.mode=21;break;case 27:if(w.wrap){for(;B<32;){if(j===0)break e;j--,M|=F[D++]<<B,B+=8}if(Q-=ie,S.total_out+=Q,w.total+=Q,Q&&(S.adler=w.check=w.flags?s(w.check,re,Q,J-Q):i(w.check,re,Q,J-Q)),Q=ie,(w.flags?M:b(M))!==w.check){S.msg="incorrect data check",w.mode=30;break}B=M=0}w.mode=28;case 28:if(w.wrap&&w.flags){for(;B<32;){if(j===0)break e;j--,M+=F[D++]<<B,B+=8}if(M!==(4294967295&w.total)){S.msg="incorrect length check",w.mode=30;break}B=M=0}w.mode=29;case 29:V=1;break e;case 30:V=-3;break e;case 31:return-4;default:return c}return S.next_out=J,S.avail_out=ie,S.next_in=D,S.avail_in=j,w.hold=M,w.bits=B,(w.wsize||Q!==S.avail_out&&w.mode<30&&(w.mode<27||T!==4))&&U(S,S.output,S.next_out,Q-S.avail_out)?(w.mode=31,-4):(oe-=S.avail_in,Q-=S.avail_out,S.total_in+=oe,S.total_out+=Q,w.total+=Q,w.wrap&&Q&&(S.adler=w.check=w.flags?s(w.check,re,Q,S.next_out-Q):i(w.check,re,Q,S.next_out-Q)),S.data_type=w.bits+(w.last?64:0)+(w.mode===12?128:0)+(w.mode===20||w.mode===15?256:0),(oe==0&&Q===0||T===4)&&V===h&&(V=-5),V)},o.inflateEnd=function(S){if(!S||!S.state)return c;var T=S.state;return T.window&&(T.window=null),S.state=null,h},o.inflateGetHeader=function(S,T){var w;return S&&S.state?(2&(w=S.state).wrap)==0?c:((w.head=T).done=!1,h):c},o.inflateSetDictionary=function(S,T){var w,F=T.length;return S&&S.state?(w=S.state).wrap!==0&&w.mode!==11?c:w.mode===11&&i(1,T,F,0)!==w.check?-3:U(S,T,F,F)?(w.mode=31,-4):(w.havedict=1,h):c},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,o){var a=n("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(d,m,h,c,u,p,_,b){var g,y,v,$,k,A,z,O,L,U=b.bits,S=0,T=0,w=0,F=0,re=0,D=0,J=0,j=0,ie=0,M=0,B=null,oe=0,Q=new a.Buf16(16),Y=new a.Buf16(16),De=null,Ve=0;for(S=0;S<=15;S++)Q[S]=0;for(T=0;T<c;T++)Q[m[h+T]]++;for(re=U,F=15;1<=F&&Q[F]===0;F--);if(F<re&&(re=F),F===0)return u[p++]=20971520,u[p++]=20971520,b.bits=1,0;for(w=1;w<F&&Q[w]===0;w++);for(re<w&&(re=w),S=j=1;S<=15;S++)if(j<<=1,(j-=Q[S])<0)return-1;if(0<j&&(d===0||F!==1))return-1;for(Y[1]=0,S=1;S<15;S++)Y[S+1]=Y[S]+Q[S];for(T=0;T<c;T++)m[h+T]!==0&&(_[Y[m[h+T]]++]=T);if(A=d===0?(B=De=_,19):d===1?(B=i,oe-=257,De=s,Ve-=257,256):(B=l,De=f,-1),S=w,k=p,J=T=M=0,v=-1,$=(ie=1<<(D=re))-1,d===1&&852<ie||d===2&&592<ie)return 1;for(;;){for(z=S-J,L=_[T]<A?(O=0,_[T]):_[T]>A?(O=De[Ve+_[T]],B[oe+_[T]]):(O=96,0),g=1<<S-J,w=y=1<<D;u[k+(M>>J)+(y-=g)]=z<<24|O<<16|L|0,y!==0;);for(g=1<<S-1;M&g;)g>>=1;if(g!==0?(M&=g-1,M+=g):M=0,T++,--Q[S]==0){if(S===F)break;S=m[h+_[T]]}if(re<S&&(M&$)!==v){for(J===0&&(J=re),k+=w,j=1<<(D=S-J);D+J<F&&!((j-=Q[D+J])<=0);)D++,j<<=1;if(ie+=1<<D,d===1&&852<ie||d===2&&592<ie)return 1;u[v=M&$]=re<<24|D<<16|k-p|0}}return M!==0&&(u[k+M]=S-J<<24|64<<16|0),b.bits=re,0}},{"../utils/common":41}],51:[function(n,r,o){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,o){var a=n("../utils/common"),i=0,s=1;function l(E){for(var C=E.length;0<=--C;)E[C]=0}var f=0,d=29,m=256,h=m+1+d,c=30,u=19,p=2*h+1,_=15,b=16,g=7,y=256,v=16,$=17,k=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],O=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],U=new Array(2*(h+2));l(U);var S=new Array(2*c);l(S);var T=new Array(512);l(T);var w=new Array(256);l(w);var F=new Array(d);l(F);var re,D,J,j=new Array(c);function ie(E,C,G,W,P){this.static_tree=E,this.extra_bits=C,this.extra_base=G,this.elems=W,this.max_length=P,this.has_stree=E&&E.length}function M(E,C){this.dyn_tree=E,this.max_code=0,this.stat_desc=C}function B(E){return E<256?T[E]:T[256+(E>>>7)]}function oe(E,C){E.pending_buf[E.pending++]=255&C,E.pending_buf[E.pending++]=C>>>8&255}function Q(E,C,G){E.bi_valid>b-G?(E.bi_buf|=C<<E.bi_valid&65535,oe(E,E.bi_buf),E.bi_buf=C>>b-E.bi_valid,E.bi_valid+=G-b):(E.bi_buf|=C<<E.bi_valid&65535,E.bi_valid+=G)}function Y(E,C,G){Q(E,G[2*C],G[2*C+1])}function De(E,C){for(var G=0;G|=1&E,E>>>=1,G<<=1,0<--C;);return G>>>1}function Ve(E,C,G){var W,P,H=new Array(_+1),ee=0;for(W=1;W<=_;W++)H[W]=ee=ee+G[W-1]<<1;for(P=0;P<=C;P++){var K=E[2*P+1];K!==0&&(E[2*P]=De(H[K]++,K))}}function pe(E){var C;for(C=0;C<h;C++)E.dyn_ltree[2*C]=0;for(C=0;C<c;C++)E.dyn_dtree[2*C]=0;for(C=0;C<u;C++)E.bl_tree[2*C]=0;E.dyn_ltree[2*y]=1,E.opt_len=E.static_len=0,E.last_lit=E.matches=0}function ve(E){8<E.bi_valid?oe(E,E.bi_buf):0<E.bi_valid&&(E.pending_buf[E.pending++]=E.bi_buf),E.bi_buf=0,E.bi_valid=0}function Ne(E,C,G,W){var P=2*C,H=2*G;return E[P]<E[H]||E[P]===E[H]&&W[C]<=W[G]}function Pe(E,C,G){for(var W=E.heap[G],P=G<<1;P<=E.heap_len&&(P<E.heap_len&&Ne(C,E.heap[P+1],E.heap[P],E.depth)&&P++,!Ne(C,W,E.heap[P],E.depth));)E.heap[G]=E.heap[P],G=P,P<<=1;E.heap[G]=W}function vt(E,C,G){var W,P,H,ee,K=0;if(E.last_lit!==0)for(;W=E.pending_buf[E.d_buf+2*K]<<8|E.pending_buf[E.d_buf+2*K+1],P=E.pending_buf[E.l_buf+K],K++,W===0?Y(E,P,C):(Y(E,(H=w[P])+m+1,C),(ee=A[H])!==0&&Q(E,P-=F[H],ee),Y(E,H=B(--W),G),(ee=z[H])!==0&&Q(E,W-=j[H],ee)),K<E.last_lit;);Y(E,y,C)}function ut(E,C){var G,W,P,H=C.dyn_tree,ee=C.stat_desc.static_tree,K=C.stat_desc.has_stree,se=C.stat_desc.elems,Se=-1;for(E.heap_len=0,E.heap_max=p,G=0;G<se;G++)H[2*G]!==0?(E.heap[++E.heap_len]=Se=G,E.depth[G]=0):H[2*G+1]=0;for(;E.heap_len<2;)H[2*(P=E.heap[++E.heap_len]=Se<2?++Se:0)]=1,E.depth[P]=0,E.opt_len--,K&&(E.static_len-=ee[2*P+1]);for(C.max_code=Se,G=E.heap_len>>1;1<=G;G--)Pe(E,H,G);for(P=se;G=E.heap[1],E.heap[1]=E.heap[E.heap_len--],Pe(E,H,1),W=E.heap[1],E.heap[--E.heap_max]=G,E.heap[--E.heap_max]=W,H[2*P]=H[2*G]+H[2*W],E.depth[P]=(E.depth[G]>=E.depth[W]?E.depth[G]:E.depth[W])+1,H[2*G+1]=H[2*W+1]=P,E.heap[1]=P++,Pe(E,H,1),2<=E.heap_len;);E.heap[--E.heap_max]=E.heap[1],(function(he,rt){var Ar,xt,kr,Be,vo,Pa,Tt=rt.dyn_tree,Ss=rt.max_code,Uu=rt.stat_desc.static_tree,qu=rt.stat_desc.has_stree,Vu=rt.stat_desc.extra_bits,Es=rt.stat_desc.extra_base,Sr=rt.stat_desc.max_length,xo=0;for(Be=0;Be<=_;Be++)he.bl_count[Be]=0;for(Tt[2*he.heap[he.heap_max]+1]=0,Ar=he.heap_max+1;Ar<p;Ar++)Sr<(Be=Tt[2*Tt[2*(xt=he.heap[Ar])+1]+1]+1)&&(Be=Sr,xo++),Tt[2*xt+1]=Be,Ss<xt||(he.bl_count[Be]++,vo=0,Es<=xt&&(vo=Vu[xt-Es]),Pa=Tt[2*xt],he.opt_len+=Pa*(Be+vo),qu&&(he.static_len+=Pa*(Uu[2*xt+1]+vo)));if(xo!==0){do{for(Be=Sr-1;he.bl_count[Be]===0;)Be--;he.bl_count[Be]--,he.bl_count[Be+1]+=2,he.bl_count[Sr]--,xo-=2}while(0<xo);for(Be=Sr;Be!==0;Be--)for(xt=he.bl_count[Be];xt!==0;)Ss<(kr=he.heap[--Ar])||(Tt[2*kr+1]!==Be&&(he.opt_len+=(Be-Tt[2*kr+1])*Tt[2*kr],Tt[2*kr+1]=Be),xt--)}})(E,C),Ve(H,Se,E.bl_count)}function x(E,C,G){var W,P,H=-1,ee=C[1],K=0,se=7,Se=4;for(ee===0&&(se=138,Se=3),C[2*(G+1)+1]=65535,W=0;W<=G;W++)P=ee,ee=C[2*(W+1)+1],++K<se&&P===ee||(K<Se?E.bl_tree[2*P]+=K:P!==0?(P!==H&&E.bl_tree[2*P]++,E.bl_tree[2*v]++):K<=10?E.bl_tree[2*$]++:E.bl_tree[2*k]++,H=P,Se=(K=0)===ee?(se=138,3):P===ee?(se=6,3):(se=7,4))}function V(E,C,G){var W,P,H=-1,ee=C[1],K=0,se=7,Se=4;for(ee===0&&(se=138,Se=3),W=0;W<=G;W++)if(P=ee,ee=C[2*(W+1)+1],!(++K<se&&P===ee)){if(K<Se)for(;Y(E,P,E.bl_tree),--K!=0;);else P!==0?(P!==H&&(Y(E,P,E.bl_tree),K--),Y(E,v,E.bl_tree),Q(E,K-3,2)):K<=10?(Y(E,$,E.bl_tree),Q(E,K-3,3)):(Y(E,k,E.bl_tree),Q(E,K-11,7));H=P,Se=(K=0)===ee?(se=138,3):P===ee?(se=6,3):(se=7,4)}}l(j);var N=!1;function I(E,C,G,W){Q(E,(f<<1)+(W?1:0),3),(function(P,H,ee,K){ve(P),oe(P,ee),oe(P,~ee),a.arraySet(P.pending_buf,P.window,H,ee,P.pending),P.pending+=ee})(E,C,G)}o._tr_init=function(E){N||((function(){var C,G,W,P,H,ee=new Array(_+1);for(P=W=0;P<d-1;P++)for(F[P]=W,C=0;C<1<<A[P];C++)w[W++]=P;for(w[W-1]=P,P=H=0;P<16;P++)for(j[P]=H,C=0;C<1<<z[P];C++)T[H++]=P;for(H>>=7;P<c;P++)for(j[P]=H<<7,C=0;C<1<<z[P]-7;C++)T[256+H++]=P;for(G=0;G<=_;G++)ee[G]=0;for(C=0;C<=143;)U[2*C+1]=8,C++,ee[8]++;for(;C<=255;)U[2*C+1]=9,C++,ee[9]++;for(;C<=279;)U[2*C+1]=7,C++,ee[7]++;for(;C<=287;)U[2*C+1]=8,C++,ee[8]++;for(Ve(U,h+1,ee),C=0;C<c;C++)S[2*C+1]=5,S[2*C]=De(C,5);re=new ie(U,A,m+1,h,_),D=new ie(S,z,0,c,_),J=new ie(new Array(0),O,0,u,g)})(),N=!0),E.l_desc=new M(E.dyn_ltree,re),E.d_desc=new M(E.dyn_dtree,D),E.bl_desc=new M(E.bl_tree,J),E.bi_buf=0,E.bi_valid=0,pe(E)},o._tr_stored_block=I,o._tr_flush_block=function(E,C,G,W){var P,H,ee=0;0<E.level?(E.strm.data_type===2&&(E.strm.data_type=(function(K){var se,Se=4093624447;for(se=0;se<=31;se++,Se>>>=1)if(1&Se&&K.dyn_ltree[2*se]!==0)return i;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return s;for(se=32;se<m;se++)if(K.dyn_ltree[2*se]!==0)return s;return i})(E)),ut(E,E.l_desc),ut(E,E.d_desc),ee=(function(K){var se;for(x(K,K.dyn_ltree,K.l_desc.max_code),x(K,K.dyn_dtree,K.d_desc.max_code),ut(K,K.bl_desc),se=u-1;3<=se&&K.bl_tree[2*L[se]+1]===0;se--);return K.opt_len+=3*(se+1)+5+5+4,se})(E),P=E.opt_len+3+7>>>3,(H=E.static_len+3+7>>>3)<=P&&(P=H)):P=H=G+5,G+4<=P&&C!==-1?I(E,C,G,W):E.strategy===4||H===P?(Q(E,2+(W?1:0),3),vt(E,U,S)):(Q(E,4+(W?1:0),3),(function(K,se,Se,he){var rt;for(Q(K,se-257,5),Q(K,Se-1,5),Q(K,he-4,4),rt=0;rt<he;rt++)Q(K,K.bl_tree[2*L[rt]+1],3);V(K,K.dyn_ltree,se-1),V(K,K.dyn_dtree,Se-1)})(E,E.l_desc.max_code+1,E.d_desc.max_code+1,ee+1),vt(E,E.dyn_ltree,E.dyn_dtree)),pe(E),W&&ve(E)},o._tr_tally=function(E,C,G){return E.pending_buf[E.d_buf+2*E.last_lit]=C>>>8&255,E.pending_buf[E.d_buf+2*E.last_lit+1]=255&C,E.pending_buf[E.l_buf+E.last_lit]=255&G,E.last_lit++,C===0?E.dyn_ltree[2*G]++:(E.matches++,C--,E.dyn_ltree[2*(w[G]+m+1)]++,E.dyn_dtree[2*B(C)]++),E.last_lit===E.lit_bufsize-1},o._tr_align=function(E){Q(E,2,3),Y(E,y,U),(function(C){C.bi_valid===16?(oe(C,C.bi_buf),C.bi_buf=0,C.bi_valid=0):8<=C.bi_valid&&(C.pending_buf[C.pending++]=255&C.bi_buf,C.bi_buf>>=8,C.bi_valid-=8)})(E)}},{"../utils/common":41}],53:[function(n,r,o){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,o){(function(a){(function(i,s){if(!i.setImmediate){var l,f,d,m,h=1,c={},u=!1,p=i.document,_=Object.getPrototypeOf&&Object.getPrototypeOf(i);_=_&&_.setTimeout?_:i,l={}.toString.call(i.process)==="[object process]"?function(v){process.nextTick(function(){g(v)})}:(function(){if(i.postMessage&&!i.importScripts){var v=!0,$=i.onmessage;return i.onmessage=function(){v=!1},i.postMessage("","*"),i.onmessage=$,v}})()?(m="setImmediate$"+Math.random()+"$",i.addEventListener?i.addEventListener("message",y,!1):i.attachEvent("onmessage",y),function(v){i.postMessage(m+v,"*")}):i.MessageChannel?((d=new MessageChannel).port1.onmessage=function(v){g(v.data)},function(v){d.port2.postMessage(v)}):p&&"onreadystatechange"in p.createElement("script")?(f=p.documentElement,function(v){var $=p.createElement("script");$.onreadystatechange=function(){g(v),$.onreadystatechange=null,f.removeChild($),$=null},f.appendChild($)}):function(v){setTimeout(g,0,v)},_.setImmediate=function(v){typeof v!="function"&&(v=new Function(""+v));for(var $=new Array(arguments.length-1),k=0;k<$.length;k++)$[k]=arguments[k+1];var A={callback:v,args:$};return c[h]=A,l(h),h++},_.clearImmediate=b}function b(v){delete c[v]}function g(v){if(u)setTimeout(g,0,v);else{var $=c[v];if($){u=!0;try{(function(k){var A=k.callback,z=k.args;switch(z.length){case 0:A();break;case 1:A(z[0]);break;case 2:A(z[0],z[1]);break;case 3:A(z[0],z[1],z[2]);break;default:A.apply(s,z)}})($)}finally{b(v),u=!1}}}}function y(v){v.source===i&&typeof v.data=="string"&&v.data.indexOf(m)===0&&g(+v.data.slice(m.length))}})(typeof self>"u"?a===void 0?this:a:self)}).call(this,typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(ri)),ri.exports}var xx=vx();const wx=yx(xx);class xc{constructor(){this.permissions=new Map,this.zip=new wx}writeFile(e,n){this.zip.file(e,n)}chmod(e,n){const r=typeof n=="string"?parseInt(n,8):n;this.permissions.set(e,r)}registerRemote(e,n,r){}async generateZip(){for(const[n,r]of this.permissions.entries()){const o=this.zip.file(n);o&&(o.unixPermissions=r)}return await this.zip.generateAsync({type:"uint8array",platform:"UNIX",compression:"DEFLATE",compressionOptions:{level:6}})}}class $x{constructor(e){this.inlinedFiles=new Map,this.remoteFiles=new Map,this.permissions=new Map,this.localMode=e?.localMode??!1,this.localBasePath=e?.localBasePath??".",this.buildName=e?.buildName??"NanoFFGL"}registerRemote(e,n,r){this.remoteFiles.set(e,{url:n,localPath:r})}writeFile(e,n){this.remoteFiles.has(e)||(n instanceof Uint8Array?this.inlinedFiles.set(e,new TextDecoder().decode(n)):this.inlinedFiles.set(e,n))}chmod(e,n){this.permissions.set(e,typeof n=="number"?n.toString(8):n)}async generateZip(){return new TextEncoder().encode(await this.generateScript())}async hashContent(e){const n=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",n);return Array.from(new Uint8Array(r)).slice(0,16).map(o=>o.toString(16).padStart(2,"0")).join("")}makeEofMarkerSync(e,n){let r=n;for(;e.includes(r);)r=r+"f";return r}collectDirectories(){const e=new Set,n=r=>{const o=r.split("/");for(let a=1;a<=o.length-1;a++)e.add(o.slice(0,a).join("/"))};for(const r of this.inlinedFiles.keys())n(r);for(const r of this.remoteFiles.keys())n(r);return[...e].sort()}async generateScript(){const e=[];e.push("#!/bin/bash"),e.push("set -e"),e.push(""),e.push(`trap 'echo ""; echo "ERROR: Command failed at line $LINENO: $BASH_COMMAND"; exit 1' ERR`),e.push(""),e.push('SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"'),e.push(`BUILD_NAME="${this.buildName}"`),e.push('BUILD_DIR="$SCRIPT_DIR/${BUILD_NAME}_Build"'),e.push('mkdir -p "$BUILD_DIR"'),e.push('cd "$BUILD_DIR"'),e.push(""),e.push("# Check for Xcode command line tools"),e.push("if ! xcode-select -p &>/dev/null; then"),e.push(`  echo "Error: Xcode Command Line Tools not found. Please install them with 'xcode-select --install'."`),e.push("  exit 1"),e.push("fi"),e.push(""),e.push("# Check for metal compiler"),e.push("if ! xcrun -sdk macosx -find metal &>/dev/null; then"),e.push('  echo "Error: Metal compiler not found. Please ensure Xcode is installed and configured correctly."'),e.push("  exit 1"),e.push("fi"),e.push("");const n=this.collectDirectories();if(n.length>0&&(e.push(`mkdir -p ${n.map(r=>`"${r}"`).join(" ")}`),e.push("")),this.remoteFiles.size>0){const r=[...this.remoteFiles.entries()],o=r.length;e.push(`echo "Downloading ${o} dependencies..."`);for(let a=0;a<r.length;a++){const[i,{url:s,localPath:l}]=r[a],f=i.split("/").pop()||i;if(e.push(`echo "  [${a+1}/${o}] ${f}"`),this.localMode){const d=`${this.localBasePath}/${l}`;e.push(`cp "${d}" "${i}"`)}else e.push(`curl -sfL "${s}" -o "${i}"`)}e.push("")}if(this.inlinedFiles.size>0){e.push('echo "Writing generated code..."'),e.push("");const r=[...this.inlinedFiles.entries()],o=await Promise.all(r.map(([,a])=>this.hashContent(a)));for(let a=0;a<r.length;a++){const[i,s]=r[a],l=this.makeEofMarkerSync(s,o[a]);e.push(`cat <<'${l}' > "${i}"`),e.push(s),e.push(l),e.push("");const f=this.permissions.get(i);f&&(e.push(`chmod ${f} "${i}"`),e.push(""))}}return e.push('echo ""'),e.push('echo "Building plugin..."'),e.push("./build.sh"),e.push(""),e.push('echo "Cleaning up..."'),e.push('cd "$SCRIPT_DIR"'),e.push('rm -rf "$BUILD_DIR"'),e.push("# Remove the .zip the script was extracted from (same name, .sh → .zip)"),e.push('SCRIPT_PATH="$0"'),e.push('ZIP_PATH="${SCRIPT_PATH%.sh}.zip"'),e.push('[ -f "$ZIP_PATH" ] && rm -f "$ZIP_PATH"'),e.push('rm -f "$SCRIPT_PATH"'),e.push(""),e.push('echo ""'),e.push('echo "Done! Plugin built at: $SCRIPT_DIR/${BUILD_NAME}.bundle"'),e.join(`
`)+`
`}}const Ax="modulepreload",kx=function(t,e){return new URL(t,e).href},wc={},Sx=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){let f=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const i=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");o=f(n.map(d=>{if(d=kx(d,r),d in wc)return;wc[d]=!0;const m=d.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(r)for(let u=i.length-1;u>=0;u--){const p=i[u];if(p.href===d&&(!m||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${h}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":Ax,m||(c.as="script"),c.crossOrigin="",c.href=d,l&&c.setAttribute("nonce",l),document.head.appendChild(c),m)return new Promise((u,p)=>{c.addEventListener("load",u),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&a(s.reason);return e().catch(a)})};var $c={};const Ex=()=>{try{return typeof process<"u"&&$c&&$c.CPP_DEBUG}catch{return!1}};class zx{constructor(){this.functionAnalysis=new Map}compile(e,n){this.ir=e,this.functionAnalysis.clear();const r=e.functions,o=r.find(g=>g.id===n);if(!o)throw new Error(`Entry point '${n}' not found`);const a=new Set,i=[],s=new Map;o.type==="shader"&&s.set(n,{func:o,stage:"compute"});const l=g=>{if(i.includes(g))throw new Error(`Recursion detected: ${i.join(" -> ")} -> ${g}`);if(a.has(g))return;const y=r.find(v=>v.id===g);if(!y)throw new Error(`Function '${g}' not found`);if(y.type!=="shader"){a.add(g),i.push(g);for(const v of y.nodes)if(v.op==="call_func"){const $=v.func;$&&l($)}else if(v.op==="cmd_dispatch"){const $=v.func;if($){const k=r.find(A=>A.id===$);k&&k.type==="shader"&&s.set($,{func:k,stage:"compute"})}}else if(v.op==="cmd_draw"){const $=v.vertex,k=v.fragment;if($){const A=r.find(z=>z.id===$);A&&A.type==="shader"&&s.set($,{func:A,stage:"vertex"})}if(k){const A=r.find(z=>z.id===k);A&&A.type==="shader"&&s.set(k,{func:A,stage:"fragment"})}}i.pop()}};l(n);const f=new Map;for(const g of r)if(a.has(g.id)||g.id===n){const y=ur(g,e);f.set(g.id,y.inferredTypes),this.functionAnalysis.set(g.id,y)}for(const[g,y]of s)this.functionAnalysis.has(g)||this.functionAnalysis.set(g,ur(y.func,e));const d=[];if(d.push("// Generated C++ code from IR"),d.push("// Entry point: "+o.id),d.push(""),e.structs&&e.structs.length>0){d.push("// Struct definitions");for(const g of e.structs){d.push(`struct ${this.sanitizeId(g.id,"struct")} {`);for(const y of g.members||[]){const v=this.irTypeToCpp(y.type);d.push(`    ${v} ${this.sanitizeId(y.name,"field")};`)}d.push("};")}d.push("")}for(const g of a){const y=r.find(A=>A.id===g),$=y.outputs&&y.outputs.length>0?this.irTypeToCpp(y.outputs[0].type||"float"):"void",k=this.buildFuncParams(y);d.push(`${$} ${this.sanitizeId(g,"func")}(EvalContext& ctx${k});`)}d.push("");const m=this.getAllResources().map(g=>g.id),h=Array.from(a).reverse();for(const g of h){const y=r.find(v=>v.id===g);this.emitFunction(y,d,r,f),d.push("")}const c=this.sanitizeId(n,"func");if(o.type==="shader"){d.push("// Entry point wrapper for shader harness"),d.push("void func_main(EvalContext& ctx) {"),d.push("    std::vector<float> _shader_args;");for(const g of this.ir.inputs||[]){const y=g.type||"float",v=`ctx.getInput("${g.id}")`;this.emitArgFlattening("    ",v,y,d)}for(const g of this.ir.tuningParams||[]){const y=g.type||"float",v=`ctx.getInput("${g.id}")`;this.emitArgFlattening("    ",v,y,d)}d.push(`    ctx.dispatchShader("${n}", 1, 1, 1, _shader_args);`),d.push("}"),d.push("")}else c!=="func_main"&&(r.find(g=>g.id===n),d.push("// Entry point wrapper for harness"),d.push(`void func_main(EvalContext& ctx) { ${c}(ctx); }`),d.push(""));d.push("#ifdef PLUGIN_CLASS"),d.push("void PLUGIN_CLASS::init_plugin() {");const u=e.inputs.filter(g=>g.type!=="texture2d");u.forEach((g,y)=>{const v=g.label||g.id;let $=g.default!==void 0?g.default:.5;Array.isArray($)&&($=$[0]!==void 0?$[0]:0),d.push(`    SetParamInfo(${y}, "${v}", FF_TYPE_STANDARD, ${this.formatFloat($)});`),g.ui?.min!==void 0&&g.ui?.max!==void 0&&d.push(`    SetParamRange(${y}, ${this.formatFloat(g.ui.min)}, ${this.formatFloat(g.ui.max)});`),d.push(`    { auto* pi = FindParamInfo(${y}); if (pi) pi->defaultFloatVal = ${this.formatFloat($)}; }`),d.push(`    _params[${y}] = ${this.formatFloat($)};`)}),d.push("}"),d.push(""),d.push("void PLUGIN_CLASS::map_params(EvalContext& ctx) {"),u.forEach((g,y)=>{d.push(`    ctx.inputs["${g.id}"] = GetFloatParameter(${y});`)});const p=e.inputs.filter(g=>g.type==="texture2d");for(const g of p){const y=g.sidechannel?"0.0f":"1.0f";d.push(`    ctx.inputs["tex_bound_${g.id}"] = ${y};`)}d.push("}"),d.push(""),d.push("void PLUGIN_CLASS::setup_resources(EvalContext& ctx, ResourceState* outputRes, const std::vector<ResourceState*>& inputRes) {"),d.push("    // 1. Outputs first"),d.push("    ctx.resources.push_back(outputRes);"),d.push("    ctx.isTextureResource.push_back(true);"),d.push("    ctx.texWidths.push_back(outputRes->width);"),d.push("    ctx.texHeights.push_back(outputRes->height);"),d.push(""),d.push("    // 2. Texture inputs second"),d.push("    for (auto* res : inputRes) {"),d.push("        ctx.resources.push_back(res);"),d.push("        ctx.isTextureResource.push_back(true);"),d.push("        ctx.texWidths.push_back(res->width);"),d.push("        ctx.texHeights.push_back(res->height);"),d.push("    }"),d.push(""),d.push("    // 3. Other internal resources last"),e.resources.filter(g=>!g.isOutput).forEach((g,y)=>{d.push(`    ctx.resources.push_back(&_internalResources[${y}]);`);const v=g.type==="texture2d";if(d.push(`    ctx.isTextureResource.push_back(${v});`),d.push(`    ctx.texWidths.push_back(_internalResources[${y}].width);`),d.push(`    ctx.texHeights.push_back(_internalResources[${y}].height);`),g.size!==void 0){let $=0;if(typeof g.size=="number"?$=g.size:g.size&&typeof g.size=="object"&&g.size.mode==="fixed"&&typeof g.size.value=="number"&&($=g.size.value),$>0){let k=1;const A=g.dataType;if(A&&e.structs){const L=e.structs.find(U=>U.id===A);L?k=L.members.reduce((U,S)=>{const T=S.type;return U+(T==="float4"||T==="int4"?4:T==="float3"||T==="int3"?3:T==="float2"||T==="int2"?2:T==="float3x3"?9:T==="float4x4"?16:1)},0):k=A==="float4"?4:A==="float3"?3:A==="float2"?2:1}const z=$*k,O=g.persistence?.clearValue;d.push(`    if (_internalResources[${y}].data.empty()) {`),O!==void 0&&typeof O=="number"?d.push(`        _internalResources[${y}].data.assign(${z}, ${this.formatFloat(O)});`):d.push(`        _internalResources[${y}].data.resize(${z});`),d.push("    }")}}}),d.push("}"),d.push("#endif"),d.push("");const b=Array.from(s.entries()).map(([g,y])=>({id:g,inputs:(y.func.inputs||[]).map(v=>({id:v.id,type:v.type||"float"})),stage:y.stage}));return{code:d.join(`
`),resourceIds:m,shaderFunctions:b}}getAllResources(){return this.ir?[...this.ir.resources.filter(e=>e.isOutput),...this.ir.inputs.filter(e=>e.type==="texture2d"),...(this.ir.tuningParams||[]).filter(e=>e.type==="texture2d"),...this.ir.resources.filter(e=>!e.isOutput)]:[]}collectBufferSizeResources(...e){const n=this.getAllResources(),r=new Set;for(const o of e){const a=this.functionAnalysis.get(o);if(a?.usedResourceSizes)for(const s of a.usedResourceSizes)r.add(s);const i=this.ir?.functions.find(s=>s.id===o);if(i){for(const s of i.nodes)if(s.op==="call_func"&&typeof s.func=="string"){const l=this.functionAnalysis.get(s.func);if(l?.usedResourceSizes)for(const f of l.usedResourceSizes)r.add(f)}}}return[...r].filter(o=>this.ir?.resources.find(a=>a.id===o&&a.type==="buffer")).sort((o,a)=>n.findIndex(i=>i.id===o)-n.findIndex(i=>i.id===a))}buildFuncParams(e){return!e.inputs||e.inputs.length===0?"":", "+e.inputs.map(r=>`${this.irTypeToCpp(r.type||"float")} ${this.sanitizeId(r.id,"input")}`).join(", ")}formatFloat(e){if(typeof e=="boolean")return e?"1.0f":"0.0f";const n=String(e);return n.includes(".")||n.includes("e")||n.includes("E")?n+"f":n+".0f"}sanitizeId(e,n="var"){const r=e.replace(/[^a-zA-Z0-9_]/g,"_");return n==="input"?`i_${r}`:n==="func"?`func_${r}`:n==="struct"?`S_${r}`:n==="field"?`f_${r}`:`v_${r}`}irTypeToCpp(e){switch(e){case"float":case"f32":return"float";case"int":case"i32":return"int";case"prng":return"int";case"bool":return"bool";case"float2":return"std::array<float, 2>";case"float3":return"std::array<float, 3>";case"float4":return"std::array<float, 4>";case"int2":return"std::array<int, 2>";case"int3":return"std::array<int, 3>";case"int4":return"std::array<int, 4>";case"float3x3":return"std::array<float, 9>";case"float4x4":return"std::array<float, 16>";default:const n=e.match(/array<([^,]+),\s*(\d+)>/);return n?`std::array<${this.irTypeToCpp(n[1])}, ${n[2]}>`:this.sanitizeId(e,"struct")}}nodeResId(e){return`n_${e.replace(/[^a-zA-Z0-9_]/g,"_")}`}hashString(e){let n=0;for(let r=0;r<e.length;r++)n=Math.imul(n,31)+e.charCodeAt(r)|0;return n}emitFunction(e,n,r,o){const i=e.outputs&&e.outputs.length>0?this.irTypeToCpp(e.outputs[0].type||"float"):"void",s=this.buildFuncParams(e);n.push(`${i} ${this.sanitizeId(e.id,"func")}(EvalContext& ctx${s}) {`);for(const c of e.localVars){const u=this.irTypeToCpp(c.type||"float");let p;Array.isArray(c.initialValue)?p=`{${c.initialValue.map(_=>this.formatFloat(_)).join(", ")}}`:typeof c.initialValue=="number"?p=this.formatFloat(c.initialValue):c.initialValue!==void 0?p=String(c.initialValue):p="{}",n.push(`    ${u} ${this.sanitizeId(c.id,"var")} = ${p};`)}const l=Ut(e),f=o.get(e.id),d=new Set,m=c=>{if(d.has(c))return;if(!e||!e.nodes)throw console.error(`[CPP] emitPure error: f=${!!e} nodes=${e?.nodes?"ok":"missing"} for nodeId=${c}`),new Error("FunctionDef invalid in emitPure");const u=e.nodes.find(_=>_.id===c);if(!u||this.isExecutable(u.op,l,c))return;d.add(c),l.filter(_=>_.to===c&&_.type==="data").forEach(_=>{m(_.from)});const p=this.compileExpression(u,e,r,!0,m,l,f);n.push(`    auto ${this.nodeResId(u.id)} = ${p};`)},h=e.nodes.filter(c=>!l.some(p=>p.to===c.id&&p.type==="execution")&&this.isExecutable(c.op,l,c.id));for(const c of h)this.emitChain("    ",c,e,n,new Set,r,m,l,f);n.push("}")}hasResult(e){return["float","int","bool","literal","loop_index","float2","float3","float4","float3x3","float4x4","int2","int3","int4","static_cast_float","static_cast_int","static_cast_bool","static_cast_int2","static_cast_int3","static_cast_int4","static_cast_float2","static_cast_float3","static_cast_float4","var_get","buffer_load","vec_swizzle","vec_get_element","call_func","struct_construct","struct_extract","array_construct","array_extract","array_length","resource_get_size","resource_get_format","resource_is_bound","builtin_get","math_pi","math_e","mat_identity","mat_mul","mat_inverse","mat_transpose","quat","quat_identity","quat_mul","quat_rotate","quat_slerp","quat_to_float4x4","color_mix","texture_sample","atomic_load","atomic_add","atomic_sub","atomic_min","atomic_max","atomic_exchange","prng_make","prng_next"].includes(e)||e.startsWith("math_")||e.startsWith("vec_")}isExecutable(e,n,r){return e.startsWith("cmd_")||e.startsWith("flow_")||e==="var_set"||e==="buffer_store"||e==="texture_store"||e==="func_return"||e==="call_func"||e==="array_set"||e==="atomic_store"||e==="atomic_add"||e==="atomic_sub"||e==="atomic_min"||e==="atomic_max"||e==="atomic_exchange"||e==="prng_next"?!0:n.some(a=>a.from===r&&a.type==="execution")}inferCppType(e){switch(e.op){case"float2":return"std::array<float, 2>";case"float3":return"std::array<float, 3>";case"float4":return"std::array<float, 4>";case"int2":return"std::array<int, 2>";case"int3":return"std::array<int, 3>";case"int4":return"std::array<int, 4>";default:return"auto"}}emitChain(e,n,r,o,a,i,s,l,f){let d=n;for(;d&&!a.has(d.id);){a.add(d.id),l.filter(h=>h.to===d.id&&h.type==="data").forEach(h=>s(h.from));for(const h in d){if(["id","op","metadata"].includes(h))continue;const c=d[h];typeof c=="string"&&r.nodes.some(u=>u.id===c)&&s(c)}if(d.op==="flow_branch"){this.emitBranch(e,d,r,o,a,i,s,l,f);return}else if(d.op==="flow_loop"){this.emitLoop(e,d,r,o,a,i,s,l,f);return}else if(d.op==="func_return"){const h=this.resolveArg(d,"val",r,i,s,l,f),c=r.outputs&&r.outputs.length>0;if(h&&h!=="0.0f"){const u=c?r.outputs[0].type||"float":void 0;u&&this.ir?.structs?.some(_=>_.id===u)||o.push(`${e}ctx.setReturnValue(${h});`),c?o.push(`${e}return ${h};`):o.push(`${e}return;`)}else o.push(`${e}return;`);return}else this.emitNode(e,d,r,o,i,s,l,f);const m=l.find(h=>h.from===d.id&&h.portOut==="exec_out"&&h.type==="execution");d=m?r.nodes.find(h=>h.id===m.to):void 0}}emitBranch(e,n,r,o,a,i,s,l,f){const d=this.resolveArg(n,"cond",r,i,s,l,f);o.push(`${e}if (${d}) {`);const m=l.find(p=>p.from===n.id&&p.portOut==="exec_true"&&p.type==="execution"),h=m?r.nodes.find(p=>p.id===m.to):void 0;h&&this.emitChain(e+"    ",h,r,o,new Set(a),i,s,l,f),o.push(`${e}} else {`);const c=l.find(p=>p.from===n.id&&p.portOut==="exec_false"&&p.type==="execution"),u=c?r.nodes.find(p=>p.id===c.to):void 0;u&&this.emitChain(e+"    ",u,r,o,new Set(a),i,s,l,f),o.push(`${e}}`)}emitLoop(e,n,r,o,a,i,s,l,f){const d=`loop_${n.id.replace(/[^a-zA-Z0-9_]/g,"_")}`;if(n.count!==void 0){const p=this.resolveArg(n,"count",r,i,s,l,f);o.push(`${e}for (int ${d} = 0; ${d} < ${p}; ${d}++) {`)}else{const p=this.resolveArg(n,"start",r,i,s,l,f),_=this.resolveArg(n,"end",r,i,s,l,f);o.push(`${e}for (int ${d} = ${p}; ${d} < ${_}; ${d}++) {`)}const m=l.find(p=>p.from===n.id&&p.portOut==="exec_body"&&p.type==="execution"),h=m?r.nodes.find(p=>p.id===m.to):void 0;h&&this.emitChain(e+"    ",h,r,o,new Set(a),i,s,l,f),o.push(`${e}}`);const c=l.find(p=>p.from===n.id&&p.portOut==="exec_completed"&&p.type==="execution"),u=c?r.nodes.find(p=>p.id===c.to):void 0;u&&this.emitChain(e,u,r,o,a,i,s,l,f)}emitNode(e,n,r,o,a,i,s,l){if(n.op==="var_set"){const f=this.resolveArg(n,"val",r,a,i,s,l),d=n.var;o.push(`${e}${this.sanitizeId(d,"var")} = ${f};`)}else if(n.op==="buffer_store"){const f=n.buffer,d=this.resolveArg(n,"index",r,a,i,s,l),m=this.resolveArg(n,"value",r,a,i,s,l),c=this.getAllResources().findIndex(_=>_.id===f),p=this.ir?.resources.find(_=>_.id===f)?.dataType||"float";p==="float4"||p==="float3"||p==="float2"?o.push(`${e}ctx.resources[${c}]->storeVec(${d}, ${m});`):o.push(`${e}ctx.resources[${c}]->data[static_cast<size_t>(${d})] = ${m};`)}else if(n.op==="atomic_store"){const f=n.counter,d=this.resolveArg(n,"index",r,a,i,s,l),m=this.resolveArg(n,"value",r,a,i,s,l),c=this.getAllResources().findIndex(u=>u.id===f);o.push(`${e}ctx.resources[${c}]->data[static_cast<size_t>(${d})] = int_bits_to_float(static_cast<int>(${m}));`)}else if(n.op==="array_set"){const f=s.find(c=>c.to===n.id&&c.portIn==="array"&&c.type==="data");let d;if(f){const c=r.nodes.find(u=>u.id===f.from);c&&c.op==="var_get"&&(d=this.sanitizeId(c.var,"var"))}d||(d=this.resolveArg(n,"array",r,a,i,s,l));const m=this.resolveArg(n,"index",r,a,i,s,l),h=this.resolveArg(n,"value",r,a,i,s,l);o.push(`${e}${d}[static_cast<size_t>(${m})] = ${h};`)}else if(n.op==="cmd_resize_resource"){const f=n.resource,m=this.getAllResources().findIndex(g=>g.id===f),h=this.ir?.resources.find(g=>g.id===f),c=h?.persistence?.clearOnResize??!1,u=h?.dataType,p=u==="float4"?4:u==="float3"?3:u==="float2"?2:1,_=n.clear,b=n.size;if(Array.isArray(b)&&b.length===2){const g=typeof b[0]=="number"?String(b[0]):this.resolveArg(n,"size",r,a,i,s,l)+"[0]",y=typeof b[1]=="number"?String(b[1]):this.resolveArg(n,"size",r,a,i,s,l)+"[1]";if(Array.isArray(_)){const v=_.map($=>this.formatFloat($)).join(", ");o.push(`${e}ctx.resizeResource2DWithClear(${m}, ${g}, ${y}, {${v}});`)}else o.push(`${e}ctx.resizeResource2D(${m}, ${g}, ${y}, ${c?"true":"false"});`)}else{const g=this.resolveArg(n,"size",r,a,i,s,l);o.push(`${e}ctx.resizeResource(${m}, static_cast<int>(${g}), ${p}, ${c?"true":"false"});`)}}else if(n.op==="cmd_copy_buffer"){const f=n.src,d=n.dst,m=this.getAllResources(),h=m.findIndex($=>$.id===f),c=m.findIndex($=>$.id===d),p=this.ir?.resources.find($=>$.id===f)?.dataType,_=p==="float4"?4:p==="float3"?3:p==="float2"?2:1,b=($,k)=>n[$]!==void 0?this.resolveArg(n,$,r,a,i,s,l):k,g=b("src_offset","0"),y=b("dst_offset","0"),v=b("count","-1");o.push(`${e}ctx.copyBuffer(${h}, ${c}, ${_}, static_cast<int>(${g}), static_cast<int>(${y}), static_cast<int>(${v}));`)}else if(n.op==="cmd_copy_texture"){const f=n.src,d=n.dst,m=this.getAllResources(),h=m.findIndex(v=>v.id===f),c=m.findIndex(v=>v.id===d),u=v=>{const $=n[v];if($===void 0)return"-1, -1, -1, -1";if(Array.isArray($))return $.map(A=>this.formatFloat(A)).join(", ");const k=this.resolveArg(n,v,r,a,i,s,l);return`${k}[0], ${k}[1], ${k}[2], ${k}[3]`},p=u("src_rect"),_=u("dst_rect"),b=n.sample==="bilinear"?2:n.sample==="nearest"?1:0,g=n.alpha!==void 0?this.resolveArg(n,"alpha",r,a,i,s,l):"1.0f",y=n.normalized===!0?"true":"false";o.push(`${e}ctx.copyTexture(${h}, ${c}, ${p}, ${_}, ${b}, ${g}, ${y});`)}else if(n.op!=="texture_store"){if(n.op==="cmd_dispatch"){const f=n.func,d=n.threads||[1,1,1];let m,h,c;if(typeof d=="string"){const v=this.resolveArg(n,"threads",r,a,i,s,l);m=`static_cast<int>(${v}[0])`,h=`static_cast<int>(${v}[1])`,c="1"}else Array.isArray(d)?(m=typeof d[0]=="number"?String(d[0]):this.resolveArg({...n,threads:void 0,threads_x:d[0]},"threads_x",r,a,i,s,l),h=typeof d[1]=="number"?String(d[1]):this.resolveArg({...n,threads:void 0,threads_y:d[1]},"threads_y",r,a,i,s,l),c=typeof d[2]=="number"?String(d[2]):this.resolveArg({...n,threads:void 0,threads_z:d[2]},"threads_z",r,a,i,s,l)):(m="1",h="1",c="1");const u=a.find(v=>v.id===f),p=u?.inputs&&u.inputs.length>0,_=!p&&this.ir?.inputs&&(this.ir.inputs.length>0||(this.ir.tuningParams||[]).length>0),b=this.functionAnalysis.get(f),g=b?[...b.usedBuiltins].filter(v=>bn.includes(v)):[];!g.includes("prng_seed")&&u?.nodes.some(v=>v.op==="prng_make")&&g.push("prng_seed");const y=b?b.usedBuiltins.has("output_size"):!1;if(p||_||g.length>0||y){if(o.push(`${e}{`),o.push(`${e}    std::vector<float> _shader_args;`),p)for(const k of u.inputs){let A;if(n.args&&n.args[k.id]){const O=n.args[k.id];A=this.resolveArg({...n,[k.id]:O},k.id,r,a,i,s,l)}else n[k.id]!==void 0?A=this.resolveArg(n,k.id,r,a,i,s,l):A="0.0f";const z=k.type||"float";this.emitArgFlattening(`${e}    `,A,z,o)}else if(_){for(const k of this.ir.inputs){const A=k.type||"float";this.emitGlobalInputFlattening(`${e}    `,k.id,A,o,[])}for(const k of this.ir.tuningParams||[]){const A=k.type||"float";this.emitGlobalInputFlattening(`${e}    `,k.id,A,o,[])}}for(const k of g)o.push(`${e}    _shader_args.push_back(ctx.getInput("${k}"));`);y&&(o.push(`${e}    _shader_args.push_back(static_cast<float>(${m}));`),o.push(`${e}    _shader_args.push_back(static_cast<float>(${h}));`),o.push(`${e}    _shader_args.push_back(static_cast<float>(${c}));`));const v=this.collectBufferSizeResources(f);if(v.length>0){const k=this.getAllResources();for(const A of v){const z=k.findIndex(O=>O.id===A);o.push(`${e}    _shader_args.push_back(static_cast<float>(ctx.resources[${z}]->width));`),o.push(`${e}    _shader_args.push_back(static_cast<float>(ctx.resources[${z}]->height));`)}}const $=[...this.ir?.inputs||[],...this.ir?.tuningParams||[]].filter(k=>k.type==="texture2d");for(const k of $)o.push(`${e}    _shader_args.push_back(ctx.getInput("tex_bound_${k.id}"));`);o.push(`${e}    ctx.dispatchShader("${f}", ${m}, ${h}, ${c}, _shader_args);`),o.push(`${e}}`)}else{const v=this.collectBufferSizeResources(f),$=[...this.ir?.inputs||[],...this.ir?.tuningParams||[]].filter(k=>k.type==="texture2d");if(v.length>0||$.length>0){const k=this.getAllResources();o.push(`${e}{`),o.push(`${e}    std::vector<float> _shader_args;`);for(const A of v){const z=k.findIndex(O=>O.id===A);o.push(`${e}    _shader_args.push_back(static_cast<float>(ctx.resources[${z}]->width));`),o.push(`${e}    _shader_args.push_back(static_cast<float>(ctx.resources[${z}]->height));`)}for(const A of $)o.push(`${e}    _shader_args.push_back(ctx.getInput("tex_bound_${A.id}"));`);o.push(`${e}    ctx.dispatchShader("${f}", ${m}, ${h}, ${c}, _shader_args);`),o.push(`${e}}`)}else o.push(`${e}ctx.dispatchShader("${f}", ${m}, ${h}, ${c});`)}}else if(n.op==="cmd_draw"){const f=n.target,d=n.vertex,m=n.fragment,h=this.resolveArg(n,"count",r,a,i,s,l),c=this.getAllResources(),u=c.findIndex($=>$.id===f),p=this.functionAnalysis.get(d),_=this.functionAnalysis.get(m),b=(p?.usedBuiltins.has("output_size")||_?.usedBuiltins.has("output_size"))??!1,g=this.collectBufferSizeResources(d,m),y=[...this.ir?.inputs||[],...this.ir?.tuningParams||[]],v=y.filter($=>$.type!=="texture2d").length>0;if(v||b||g.length>0){if(o.push(`${e}{`),o.push(`${e}    std::vector<float> _shader_args;`),v)for(const A of y){if(A.type==="texture2d")continue;const z=A.type||"float";this.emitGlobalInputFlattening(`${e}    `,A.id,z,o,[])}b&&(o.push(`${e}    auto& _target_res = ctx.resources[${u}];`),o.push(`${e}    _shader_args.push_back(static_cast<float>(_target_res->width));`),o.push(`${e}    _shader_args.push_back(static_cast<float>(_target_res->height));`),o.push(`${e}    _shader_args.push_back(1.0f);`));for(const A of g){const z=c.findIndex(O=>O.id===A);o.push(`${e}    _shader_args.push_back(static_cast<float>(ctx.resources[${z}]->width));`),o.push(`${e}    _shader_args.push_back(static_cast<float>(ctx.resources[${z}]->height));`)}const $=[...this.ir?.inputs||[],...this.ir?.tuningParams||[]].filter(A=>A.type==="texture2d");for(const A of $)o.push(`${e}    _shader_args.push_back(ctx.getInput("tex_bound_${A.id}"));`);const k=n.pipeline?.loadOp==="load"?"true":"false";o.push(`${e}    ctx.draw(${u}, "${d}", "${m}", static_cast<int>(${h}), _shader_args, ${k});`),o.push(`${e}}`)}else{const $=n.pipeline?.loadOp==="load"?"true":"false";o.push(`${e}ctx.draw(${u}, "${d}", "${m}", static_cast<int>(${h}), {}, ${$});`)}}else if(n.op==="prng_next"){const f=n.prng,d=n.type||"float",h={float:1,int:1,float2:2,float3:3,float4:4,int2:2,int3:3,int4:4}[d]||1,c=d==="int"||d.startsWith("int"),u=this.sanitizeId(f,"var");if(h===1&&!c)o.push(`${e}${u} = ${u} + 1;`),o.push(`${e}float ${this.nodeResId(n.id)} = _prng_hash_to_float(${u});`);else if(h===1&&c){o.push(`${e}${u} = ${u} + 1;`);const p=n.min!==void 0||s.some(b=>b.to===n.id&&b.portIn==="min"&&b.type==="data"),_=n.max!==void 0||s.some(b=>b.to===n.id&&b.portIn==="max"&&b.type==="data");if(p&&_){const b=this.resolveArg(n,"min",r,a,i,s,l),g=this.resolveArg(n,"max",r,a,i,s,l);o.push(`${e}int ${this.nodeResId(n.id)} = static_cast<int>(${b}) + static_cast<int>(static_cast<uint32_t>(_prng_hash(${u})) % static_cast<uint32_t>(static_cast<int>(${g}) - static_cast<int>(${b}) + 1));`)}else o.push(`${e}int ${this.nodeResId(n.id)} = _prng_hash(${u});`)}else{o.push(`${e}${u} = ${u} + ${h};`);const p=c?"int":"float",_=[];for(let b=0;b<h;b++){const g=h-1-b,y=g===0?u:`(${u} - ${g})`;_.push(c?`_prng_hash(${y})`:`_prng_hash_to_float(${y})`)}o.push(`${e}std::array<${p}, ${h}> ${this.nodeResId(n.id)} = {${_.join(", ")}};`)}}else if(this.hasResult(n.op)){const f=this.compileExpression(n,r,a,!0,i,s,l);o.push(`${e}auto ${this.nodeResId(n.id)} = ${f};`)}}}resolveArg(e,n,r,o,a,i,s){const l=i.find(d=>d.to===e.id&&(d.portIn===n||n==="val"&&d.portIn==="value")&&d.type==="data");if(l){const d=r.nodes.find(m=>m.id===l.from);if(d){let m=this.compileExpression(d,r,o,!1,a,i,s);const h=e[n];if(typeof h=="string"&&h.includes(".")){const c=h.substring(h.indexOf(".")+1),u={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},p=[...c].map(g=>u[g]),_=s?.get(d.id)||"",b=typeof _=="string"&&_.startsWith("int")?"int":"float";return p.length===1?`(${m})[${p[0]}]`:`std::array<${b}, ${p.length}>{${p.map(g=>`(${m})[${g}]`).join(", ")}}`}return m}}let f=e[n];if(f!==void 0){if(typeof f=="string"){let d=f,m;const h=f.indexOf(".");h!==-1&&(d=f.substring(0,h),m=f.substring(h+1));const c=(_,b="float")=>{if(!m)return _;const g={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},y=[...m].map(v=>g[v]);return y.length===1?`(${_})[${y[0]}]`:`std::array<${b}, ${y.length}>{${y.map(v=>`(${_})[${v}]`).join(", ")}}`},u=_=>{const b=s?.get(_)||"";if(typeof b=="string"&&b.startsWith("int"))return"int";const g=r.localVars.find(v=>v.id===_);if(g&&typeof g.type=="string"&&g.type.startsWith("int"))return"int";const y=r.inputs.find(v=>v.id===_);return y&&typeof y.type=="string"&&y.type.startsWith("int")?"int":"float"};if(r.localVars.some(_=>_.id===d))return c(this.sanitizeId(d,"var"),u(d));if(r.inputs.some(_=>_.id===d))return c(this.sanitizeId(d,"input"),u(d));if(this.ir?.inputs?.some(_=>_.id===d)||this.ir?.tuningParams?.some(_=>_.id===d)){const _=d,b=this.ir.inputs.find(y=>y.id===_)??this.ir.tuningParams?.find(y=>y.id===_);let g;return b.type==="float2"?g=`std::array<float, 2>{ctx.getInput("${_}_0"), ctx.getInput("${_}_1")}`:b.type==="float3"?g=`std::array<float, 3>{ctx.getInput("${_}_0"), ctx.getInput("${_}_1"), ctx.getInput("${_}_2")}`:b.type==="float4"?g=`std::array<float, 4>{ctx.getInput("${_}_0"), ctx.getInput("${_}_1"), ctx.getInput("${_}_2"), ctx.getInput("${_}_3")}`:b.type==="float4x4"?g=`std::array<float, 16>{${Array.from({length:16},(v,$)=>`ctx.getInput("${_}_${$}")`).join(", ")}}`:b.type==="float3x3"?g=`std::array<float, 9>{${Array.from({length:9},(v,$)=>`ctx.getInput("${_}_${$}")`).join(", ")}}`:g=`ctx.getInput("${_}")`,c(g,"float")}const p=r.nodes.find(_=>_.id===d);if(p&&p.id!==e.id)return c(this.compileExpression(p,r,o,!1,a,i,s),u(d))}if(typeof f=="number")return this.formatFloat(f);if(typeof f=="boolean")return f?"1.0f":"0.0f";if(Array.isArray(f)){const d=f.map(m=>typeof m=="number"?this.formatFloat(m):String(m));return`std::array<float, ${f.length}>{${d.join(", ")}}`}return String(f)}return"0.0f"}detectComponentGroups(e,n){const r=["x","y","z","w"],o=["x","y","z","w","xy","yz","zw","xyz","yzw","xyzw"],a=[];for(const i of o)e[i]!==void 0&&i.length>1&&a.push({key:i,startIdx:r.indexOf(i[0]),count:i.length});if(a.length===0)return null;for(let i=0;i<n;i++){const s=r[i];e[s]!==void 0&&!a.some(l=>l.startIdx<=i&&i<l.startIdx+l.count)&&a.push({key:s,startIdx:i,count:1})}return a.sort((i,s)=>i.startIdx-s.startIdx),a}resolveCoercedArgs(e,n,r,o,a,i,s,l){const f=n.map(m=>this.resolveArg(e,m,o,a,i,s,l));if(!l)return f;const d=n.map(m=>{const h=e[m];return typeof h=="string"&&l.get(h)||"float"});return Ex()&&console.log(`[CPP] resolveCoercedArgs op=${e.op} keys=${n} types=${d} mode=${r}`),r==="float"?f.map((m,h)=>{const c=d[h];return c==="int"||c==="boolean"?`static_cast<float>(${m})`:c==="int2"?`std::array<float, 2>{static_cast<float>(${m}[0]), static_cast<float>(${m}[1])}`:c==="int3"?`std::array<float, 3>{static_cast<float>(${m}[0]), static_cast<float>(${m}[1]), static_cast<float>(${m}[2])}`:c==="int4"?`std::array<float, 4>{static_cast<float>(${m}[0]), static_cast<float>(${m}[1]), static_cast<float>(${m}[2]), static_cast<float>(${m}[3])}`:m}):r==="unify"&&d.some(h=>h.includes("float"))?f.map((h,c)=>{const u=d[c];return u==="int"||u==="boolean"?`static_cast<float>(${h})`:u==="int2"?`std::array<float, 2>{static_cast<float>(${h}[0]), static_cast<float>(${h}[1])}`:u==="int3"?`std::array<float, 3>{static_cast<float>(${h}[0]), static_cast<float>(${h}[1]), static_cast<float>(${h}[2])}`:u==="int4"?`std::array<float, 4>{static_cast<float>(${h}[0]), static_cast<float>(${h}[1]), static_cast<float>(${h}[2]), static_cast<float>(${h}[3])}`:h}):f}compileExpression(e,n,r,o,a,i,s){if(!o&&this.hasResult(e.op))return a(e.id),this.nodeResId(e.id);const l=(c="a")=>this.resolveArg(e,c,n,r,a,i,s),f=(c="b")=>this.resolveArg(e,c,n,r,a,i,s),d=(c="val")=>this.resolveArg(e,c,n,r,a,i,s),m=(c,u)=>{const[p,_]=this.resolveCoercedArgs(e,["a","b"],u,n,r,a,i,s);return`${p} ${c} ${_}`},h=(c,u,p="val")=>{const[_]=this.resolveCoercedArgs(e,[p],u,n,r,a,i,s);return`${c}(${_})`};switch(e.op){case"var_get":{const c=e.var;if(n.localVars.some(u=>u.id===c))return this.sanitizeId(c,"var");if(n.inputs.some(u=>u.id===c))return this.sanitizeId(c,"input");if(this.ir?.inputs?.some(u=>u.id===c)||this.ir?.tuningParams?.some(u=>u.id===c)){const u=this.ir.inputs.find(p=>p.id===c)??this.ir.tuningParams?.find(p=>p.id===c);return u.type==="float2"?`std::array<float, 2>{ctx.getInput("${c}_0"), ctx.getInput("${c}_1")}`:u.type==="float3"?`std::array<float, 3>{ctx.getInput("${c}_0"), ctx.getInput("${c}_1"), ctx.getInput("${c}_2")}`:u.type==="float4"?`std::array<float, 4>{ctx.getInput("${c}_0"), ctx.getInput("${c}_1"), ctx.getInput("${c}_2"), ctx.getInput("${c}_3")}`:u.type==="float4x4"?`std::array<float, 16>{${Array.from({length:16},(_,b)=>`ctx.getInput("${c}_${b}")`).join(", ")}}`:u.type==="float3x3"?`std::array<float, 9>{${Array.from({length:9},(_,b)=>`ctx.getInput("${c}_${b}")`).join(", ")}}`:`ctx.getInput("${c}")`}throw new Error(`Variable '${c}' is not defined`)}case"literal":{const c=e.val,u=e.type;if(u==="int")return`static_cast<int>(${typeof c=="number"?Math.trunc(c):c})`;if(u==="bool"||u==="boolean")return c?"1.0f":"0.0f";if(typeof c=="number")return this.formatFloat(c);if(typeof c=="boolean")return c?"1.0f":"0.0f";if(Array.isArray(c)){const p=c.map(_=>typeof _=="number"?this.formatFloat(_):String(_));return`std::array<float, ${c.length}>{${p.join(", ")}}`}return String(c)}case"loop_index":return`loop_${e.loop.replace(/[^a-zA-Z0-9_]/g,"_")}`;case"buffer_load":{const c=e.buffer,u=l("index");return`ctx.resources[${this.getAllResources().findIndex(b=>b.id===c)}]->data[static_cast<size_t>(${u})]`}case"atomic_load":{const c=e.counter,u=l("index");return`float_bits_to_int(ctx.resources[${this.getAllResources().findIndex(b=>b.id===c)}]->data[static_cast<size_t>(${u})])`}case"atomic_add":case"atomic_sub":case"atomic_min":case"atomic_max":case"atomic_exchange":{const c=e.counter,u=l("index"),p=l("value"),g=`ctx.resources[${this.getAllResources().findIndex(v=>v.id===c)}]->data[static_cast<size_t>(${u})]`,y={atomic_add:`old + static_cast<int>(${p})`,atomic_sub:`old - static_cast<int>(${p})`,atomic_min:`std::min(old, static_cast<int>(${p}))`,atomic_max:`std::max(old, static_cast<int>(${p}))`,atomic_exchange:`static_cast<int>(${p})`};return`([&]() { int old = float_bits_to_int(${g}); ${g} = int_bits_to_float(${y[e.op]}); return old; })()`}case"math_pi":return"3.14159265358979323846f";case"math_e":return"2.71828182845904523536f";case"math_neg":return`(-(${d()}))`;case"math_abs":return h("abs","unify");case"math_sign":return`applyUnary(${d()}, [](float x) -> float { return x > 0.0f ? 1.0f : (x < 0.0f ? -1.0f : 0.0f); })`;case"math_sin":return h("sin","float");case"math_cos":return h("cos","float");case"math_tan":return h("tan","float");case"math_asin":return h("asin","float");case"math_acos":return h("acos","float");case"math_atan":return h("atan","float");case"math_sinh":return h("sinh","float");case"math_cosh":return h("cosh","float");case"math_tanh":return h("tanh","float");case"math_sqrt":return h("sqrt","float");case"math_exp":return h("exp","float");case"math_exp2":return h("exp2","float");case"math_log":return h("log","float");case"math_log2":return h("log2","float");case"math_ceil":return h("ceil","float");case"math_floor":return h("floor","float");case"math_round":return h("round","float");case"math_trunc":return h("trunc","float");case"math_fract":{const c=h("","float","val");return`((${c}) - floor(${c}))`}case"math_add":return`(${m("+","unify")})`;case"math_sub":return`(${m("-","unify")})`;case"math_mul":return`(${m("*","unify")})`;case"math_div":return`(${m("/","unify")})`;case"math_mod":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`fmod(${c}, ${u})`}case"math_pow":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"float",n,r,a,i,s);return`pow(${c}, ${u})`}case"math_min":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`std::min(${c}, ${u})`}case"math_max":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`std::max(${c}, ${u})`}case"math_atan2":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"float",n,r,a,i,s);return`atan2(${c}, ${u})`}case"math_step":{const[c,u]=this.resolveCoercedArgs(e,["edge","x"],"unify",n,r,a,i,s);return`((${u}) >= (${c}) ? 1.0f : 0.0f)`}case"math_smoothstep":{const[c,u,p]=this.resolveCoercedArgs(e,["edge0","edge1","x"],"unify",n,r,a,i,s);return`clamp_val(((${p}) - (${c})) / ((${u}) - (${c})), 0.0f, 1.0f) * (clamp_val(((${p}) - (${c})) / ((${u}) - (${c})), 0.0f, 1.0f) * (3.0f - 2.0f * clamp_val(((${p}) - (${c})) / ((${u}) - (${c})), 0.0f, 1.0f)))`}case"math_mix":case"math_lerp":{const[c,u,p]=this.resolveCoercedArgs(e,["a","b","t"],"unify",n,r,a,i,s);return`([](auto a_, auto b_, auto t_) { return a_ + (b_ - a_) * t_; }(${c}, ${u}, ${p}))`}case"math_clamp":{const[c,u,p]=this.resolveCoercedArgs(e,["val","min","max"],"unify",n,r,a,i,s);return`clamp_val(${c}, ${u}, ${p})`}case"math_mad":{const[c,u,p]=this.resolveCoercedArgs(e,["a","b","c"],"unify",n,r,a,i,s);return`((${c}) * (${u}) + (${p}))`}case"math_select":{const c=this.resolveArg(e,"cond",n,r,a,i,s),[u,p]=this.resolveCoercedArgs(e,["true","false"],"unify",n,r,a,i,s);return`((${c}) != 0.0f ? (${u}) : (${p}))`}case"math_gt":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`applyBinary(${c}, ${u}, [](float x, float y) -> float { return x > y ? 1.0f : 0.0f; })`}case"math_lt":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`applyBinary(${c}, ${u}, [](float x, float y) -> float { return x < y ? 1.0f : 0.0f; })`}case"math_ge":case"math_gte":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`applyBinary(${c}, ${u}, [](float x, float y) -> float { return x >= y ? 1.0f : 0.0f; })`}case"math_le":case"math_lte":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`applyBinary(${c}, ${u}, [](float x, float y) -> float { return x <= y ? 1.0f : 0.0f; })`}case"math_eq":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`applyBinary(${c}, ${u}, [](float x, float y) -> float { return x == y ? 1.0f : 0.0f; })`}case"math_neq":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`applyBinary(${c}, ${u}, [](float x, float y) -> float { return x != y ? 1.0f : 0.0f; })`}case"math_and":return`((${l()}) != 0.0f && (${f()}) != 0.0f ? 1.0f : 0.0f)`;case"math_or":return`((${l()}) != 0.0f || (${f()}) != 0.0f ? 1.0f : 0.0f)`;case"math_xor":return`(((${l()}) != 0.0f) != ((${f()}) != 0.0f) ? 1.0f : 0.0f)`;case"math_not":return`((${d()}) == 0.0f ? 1.0f : 0.0f)`;case"math_is_nan":return`applyUnary(${d()}, [](float x) -> float { return std::isnan(x) ? 1.0f : 0.0f; })`;case"math_is_inf":return`applyUnary(${d()}, [](float x) -> float { return std::isinf(x) ? 1.0f : 0.0f; })`;case"math_is_finite":return`applyUnary(${d()}, [](float x) -> float { return std::isfinite(x) ? 1.0f : 0.0f; })`;case"vec_dot":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`dot(${c}, ${u})`}case"vec_cross":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`cross(${c}, ${u})`}case"vec_length":return`length(${l()})`;case"vec_distance":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,a,i,s);return`distance(${c}, ${u})`}case"vec_normalize":return`normalize(${l()})`;case"vec_faceforward":{const[c,u,p]=this.resolveCoercedArgs(e,["N","I","Nref"],"unify",n,r,a,i,s);return`faceforward(${c}, ${u}, ${p})`}case"vec_reflect":{const[c,u]=this.resolveCoercedArgs(e,["I","N"],"unify",n,r,a,i,s);return`reflect(${c}, ${u})`}case"vec_refract":{const[c,u,p]=this.resolveCoercedArgs(e,["I","N","eta"],"unify",n,r,a,i,s);return`refract(${c}, ${u}, ${p})`}case"math_mantissa":return`([](float x) { int e; return std::frexp(x, &e); }(${d()}))`;case"math_exponent":return`([](float x) { int e; std::frexp(x, &e); return static_cast<float>(e); }(${d()}))`;case"math_flush_subnormal":return`([](float x) { return std::fpclassify(x) == FP_SUBNORMAL ? 0.0f : x; }(${d()}))`;case"float":return`static_cast<float>(${d()})`;case"int":return`static_cast<int>(${d()})`;case"bool":{const c=e.val;return typeof c=="boolean"?c?"true":"false":`(${d()} != 0.0f)`}case"static_cast_float":return`static_cast<float>(${d()})`;case"static_cast_int":return`static_cast<int>(static_cast<int32_t>(static_cast<int64_t>(${d()})))`;case"static_cast_bool":return`((${d()}) != 0.0f ? 1.0f : 0.0f)`;case"static_cast_int2":{const c=d();return`std::array<int, 2>{static_cast<int>(${c}[0]), static_cast<int>(${c}[1])}`}case"static_cast_int3":{const c=d();return`std::array<int, 3>{static_cast<int>(${c}[0]), static_cast<int>(${c}[1]), static_cast<int>(${c}[2])}`}case"static_cast_int4":{const c=d();return`std::array<int, 4>{static_cast<int>(${c}[0]), static_cast<int>(${c}[1]), static_cast<int>(${c}[2]), static_cast<int>(${c}[3])}`}case"static_cast_float2":{const c=d();return`std::array<float, 2>{static_cast<float>(${c}[0]), static_cast<float>(${c}[1])}`}case"static_cast_float3":{const c=d();return`std::array<float, 3>{static_cast<float>(${c}[0]), static_cast<float>(${c}[1]), static_cast<float>(${c}[2])}`}case"static_cast_float4":{const c=d();return`std::array<float, 4>{static_cast<float>(${c}[0]), static_cast<float>(${c}[1]), static_cast<float>(${c}[2]), static_cast<float>(${c}[3])}`}case"float2":case"float3":case"float4":case"int2":case"int3":case"int4":{const c=e.op.startsWith("int"),u=parseInt(e.op.replace(/^(float|int)/,"")),p=c?"int":"float",_=["x","y","z","w"].slice(0,u),b=this.detectComponentGroups(e,u);if(b){const g=[];for(const y of b){const v=l(y.key);if(y.count===1)g.push(c?`static_cast<int>(${v})`:v);else{const $=e[y.key];let k=typeof $=="number"||typeof $=="boolean";if(!k&&typeof $=="string"){const A=$.includes(".")?$.substring(0,$.indexOf(".")):$,z=s?.get(A)||"";k=z==="float"||z==="int"||z==="boolean",$.includes(".")&&(k=$.substring($.indexOf(".")+1).length===1)}if(k)for(let A=0;A<y.count;A++)g.push(c?`static_cast<int>(${v})`:`${v}`);else for(let A=0;A<y.count;A++)g.push(c?`static_cast<int>((${v})[${A}])`:`(${v})[${A}]`)}}return`std::array<${p}, ${u}>{${g.join(", ")}}`}return c?`std::array<int, ${u}>{${_.map(g=>`static_cast<int>(${l(g)})`).join(", ")}}`:`std::array<float, ${u}>{${_.map(g=>l(g)).join(", ")}}`}case"float3x3":{const c=e.vals;return typeof c=="string"?this.resolveArg(e,"vals",n,r,a,i):`std::array<float, 9>{${(c||[]).map(p=>this.formatFloat(p)).join(", ")}}`}case"float4x4":{const c=e.vals;return typeof c=="string"?this.resolveArg(e,"vals",n,r,a,i):`std::array<float, 16>{${(c||[]).map(p=>this.formatFloat(p)).join(", ")}}`}case"vec_mix":{const[c,u,p]=this.resolveCoercedArgs(e,["a","b","t"],"unify",n,r,a,i,s);return`vec_mix_impl(${c}, ${u}, ${p})`}case"vec_swizzle":{const c=this.resolveArg(e,"vec",n,r,a,i),u=e.channels||e.swizzle||"x",p={x:0,y:1,z:2,w:3,r:0,g:1,b:2,a:3},_=u.split("").map($=>p[$]);if(_.length===1)return`${c}[${_[0]}]`;const b=e.vec,g=typeof b=="string"&&s?s.get(b):void 0;return`std::array<${g==="int2"||g==="int3"||g==="int4"?"int":"float"}, ${_.length}>{${_.map($=>`${c}[${$}]`).join(", ")}}`}case"vec_get_element":{const c=this.resolveArg(e,"vec",n,r,a,i),u=this.resolveArg(e,"index",n,r,a,i);return`${c}[static_cast<size_t>(${u})]`}case"color_mix":{const c=l(),u=f();return`([](std::array<float, 4> d, std::array<float, 4> s) -> std::array<float, 4> {
          float sa = s[3], da = d[3];
          float ra = sa + da * (1.0f - sa);
          if (ra < 1e-6f) return {0.0f, 0.0f, 0.0f, 0.0f};
          return {(s[0]*sa + d[0]*da*(1.0f-sa))/ra, (s[1]*sa + d[1]*da*(1.0f-sa))/ra, (s[2]*sa + d[2]*da*(1.0f-sa))/ra, ra};
        }(${c}, ${u}))`}case"mat_identity":return(e.size||4)===3?"std::array<float, 9>{1,0,0, 0,1,0, 0,0,1}":"std::array<float, 16>{1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1}";case"mat_mul":{const c=l(),u=f();return`mat_mul(${c}, ${u})`}case"mat_inverse":return`${d()}`;case"mat_transpose":return`mat_transpose(${d()})`;case"quat":return`std::array<float, 4>{${l("x")}, ${l("y")}, ${l("z")}, ${l("w")}}`;case"quat_identity":return"std::array<float, 4>{0.0f, 0.0f, 0.0f, 1.0f}";case"quat_mul":return`quat_mul(${l()}, ${f()})`;case"quat_rotate":return`quat_rotate(${l("q")}, ${l("v")})`;case"quat_slerp":return`quat_slerp(${l()}, ${f()}, ${l("t")})`;case"quat_to_float4x4":return`quat_to_float4x4(${l("q")})`;case"texture_sample":{const c=e.tex,u=this.ir?.resources.findIndex(z=>z.id===c)??-1,p=this.ir?.resources.find(z=>z.id===c),_=p?.sampler,b={repeat:0,clamp:1,mirror:2},g={nearest:0,linear:1},y=b[_?.wrap??"clamp"]??1,v=g[_?.filter??"nearest"]??0,$=p?.format,k=$==="r32f"||$==="r16f"||$==="r8"?1:4,A=this.resolveArg(e,"coords",n,r,a,i);return`ctx.sampleTexture(${u}, ${A}[0], ${A}[1], ${y}, ${v}, ${k})`}case"call_func":{const c=e.func,u=r.find(g=>g.id===c);if(!u)throw new Error(`C++ Generator: Function '${c}' not found`);const p=[],_=e.args||{};for(const g of u.inputs||[]){const y=_[g.id];y!==void 0?typeof y=="number"?p.push(this.formatFloat(y)):typeof y=="string"?n.nodes.find($=>$.id===y)?(a(y),p.push(this.nodeResId(y))):n.localVars.some($=>$.id===y)?p.push(this.sanitizeId(y,"var")):n.inputs.some($=>$.id===y)?p.push(this.sanitizeId(y,"input")):p.push(y):p.push(String(y)):p.push("0.0f")}const b=p.length>0?", "+p.join(", "):"";return`${this.sanitizeId(c,"func")}(ctx${b})`}case"struct_construct":{const c=e.type,u=this.ir?.structs?.find(g=>g.id===c);if(!u)throw new Error(`C++ Generator: Struct type '${c}' not found`);const p=this.sanitizeId(c,"struct"),_=e.values||{},b=[];for(const g of u.members||[]){const y=_[g.name];y!==void 0?typeof y=="number"?b.push(this.formatFloat(y)):typeof y=="string"?(a(y),b.push(this.nodeResId(y))):b.push(String(y)):b.push("{}")}return`${p}{${b.join(", ")}}`}case"struct_extract":{const c=this.resolveArg(e,"struct",n,r,a,i),u=e.field;return`${c}.${this.sanitizeId(u,"field")}`}case"array_construct":{const c=e.values,u=Array.isArray(c)?c.length:e.length||0,p=e.fill;let _;if(s){const g=s.get(e.id);if(g)if(g==="float2"||g==="float3"||g==="float4")_="float";else{const y=g.match(/array<([^,]+),/);y&&(_=this.irTypeToCpp(y[1]))}}if(Array.isArray(c)){const g=c.map((y,v)=>{if(typeof y=="number")return _==="float"||!_?(_||(_="float"),this.formatFloat(y)):String(_==="int"?Math.floor(y):y);if(typeof y=="string"){a(y);const $=this.nodeResId(y);return _||(_=`decltype(${$})`),$}return String(y)});return _||(_="float"),`std::array<${_}, ${u}>{${g.join(", ")}}`}let b;return p===void 0?(b="0.0f",_||(_="float")):typeof p=="number"?_==="float"?b=this.formatFloat(p):_==="int"?b=String(Math.floor(p)):Number.isInteger(p)?(b=String(p),_="int"):(b=this.formatFloat(p),_="float"):typeof p=="string"?n.nodes.find(y=>y.id===p)?(a(p),b=this.nodeResId(p),_||(_=`decltype(${b})`)):n.localVars.some(y=>y.id===p)?(b=this.sanitizeId(p,"var"),_||(_=`decltype(${b})`)):(b=p,_||(_="float")):(b=String(p),_||(_="float")),`({auto _arr = std::array<${_}, ${u}>{}; for(auto& _e : _arr) _e = ${b}; _arr;})`}case"array_extract":{const c=this.resolveArg(e,"array",n,r,a,i),u=this.resolveArg(e,"index",n,r,a,i);return`${c}[static_cast<size_t>(${u})]`}case"array_length":return`static_cast<int>(${this.resolveArg(e,"array",n,r,a,i)}.size())`;case"resource_get_size":{const c=e.resource,p=this.getAllResources().findIndex(_=>_.id===c);return`std::array<float, 2>{static_cast<float>(ctx.resources[${p}]->width), static_cast<float>(ctx.resources[${p}]->height)}`}case"resource_get_format":{const c=e.resource,u=this.ir?.resources.find(g=>g.id===c),p={unknown:0,rgba8:1,rgba16f:2,rgba32f:3,r8:4,r16f:5,r32f:6},_=u?.format??"rgba8",b=p[_]??0;return`${this.formatFloat(b)}`}case"resource_is_bound":return`(ctx.getInput("tex_bound_${e.resource}") > 0.5f)`;case"builtin_get":{const c=e.name;if(bn.includes(c))return`ctx.getInput("${c}")`;throw new Error(`C++ Generator: GPU Built-in '${c}' is not available in CPU context`)}case"prng_make":return e.seed!==void 0||i.some(p=>p.to===e.id&&p.portIn==="seed"&&p.type==="data")?`_prng_hash(static_cast<int>(${l("seed")}))`:`_prng_hash(static_cast<int>(ctx.getInput("prng_seed") * 2147483647.0f) + ${this.hashString(n.id)})`;default:throw new Error(`C++ Generator: Unsupported op '${e.op}'`)}}emitGlobalInputFlattening(e,n,r,o,a=[]){const i=r.match(/^array<([^,]+),\s*(\d+)>$/);if(i){const l=i[1],f=parseInt(i[2]);for(let d=0;d<f;d++)this.emitGlobalInputFlattening(e,n,l,o,[...a,String(d)]);return}const s=l=>{const f=a.length>0?`${n}_${a.join("_")}${l}`:`${n}${l}`;o.push(`${e}_shader_args.push_back(ctx.getInput("${f}"));`)};if(r==="float4")s("_0"),s("_1"),s("_2"),s("_3");else if(r==="float3")s("_0"),s("_1"),s("_2");else if(r==="float2")s("_0"),s("_1");else if(r==="float4x4")for(let l=0;l<16;l++)s(`_${l}`);else if(r==="float3x3")for(let l=0;l<9;l++)s(`_${l}`);else{const l=a.length>0?`${n}_${a.join("_")}`:n;o.push(`${e}_shader_args.push_back(ctx.getInput("${l}"));`)}}emitArgFlattening(e,n,r,o){const a=this.ir?.structs?.find(f=>f.id===r);if(a){for(const f of a.members)this.emitArgFlattening(e,`${n}.${this.sanitizeId(f.name,"field")}`,f.type,o);return}const i=r.match(/^array<([^,]+),\s*(\d+)>$/);if(i){const f=i[1],d=parseInt(i[2]);for(let m=0;m<d;m++)this.emitArgFlattening(e,`${n}[${m}]`,f,o);return}const s=r.match(/^(.+)\[\]$/);if(s){const f=s[1];o.push(`${e}_shader_args.push_back(static_cast<float>(${n}.size()));`),o.push(`${e}for (const auto& elem : ${n}) {`),this.emitArgFlattening(`${e}  `,"elem",f,o),o.push(`${e}}`);return}const l=r.match(/^array<(.+)>$/);if(l){const f=l[1];o.push(`${e}_shader_args.push_back(static_cast<float>(${n}.size()));`),o.push(`${e}for (const auto& elem : ${n}) {`),this.emitArgFlattening(`${e}  `,"elem",f,o),o.push(`${e}}`);return}if(r==="float4")o.push(`${e}_shader_args.push_back(${n}[0]);`),o.push(`${e}_shader_args.push_back(${n}[1]);`),o.push(`${e}_shader_args.push_back(${n}[2]);`),o.push(`${e}_shader_args.push_back(${n}[3]);`);else if(r==="float3")o.push(`${e}_shader_args.push_back(${n}[0]);`),o.push(`${e}_shader_args.push_back(${n}[1]);`),o.push(`${e}_shader_args.push_back(${n}[2]);`);else if(r==="float2")o.push(`${e}_shader_args.push_back(${n}[0]);`),o.push(`${e}_shader_args.push_back(${n}[1]);`);else if(r==="float4x4")for(let f=0;f<16;f++)o.push(`${e}_shader_args.push_back(${n}[${f}]);`);else if(r==="float3x3")for(let f=0;f<9;f++)o.push(`${e}_shader_args.push_back(${n}[${f}]);`);else r==="int4"?(o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[0]));`),o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[1]));`),o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[2]));`),o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[3]));`)):r==="int3"?(o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[0]));`),o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[1]));`),o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[2]));`)):r==="int2"?(o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[0]));`),o.push(`${e}_shader_args.push_back(static_cast<float>(${n}[1]));`)):r==="int"||r==="boolean"||r==="prng"?o.push(`${e}_shader_args.push_back(static_cast<float>(${n}));`):o.push(`${e}_shader_args.push_back(${n});`)}}var Ac={};const Ix=()=>{try{return typeof process<"u"&&Ac&&Ac.MSL_DEBUG}catch{return!1}};class Ox{constructor(){this.currentBufferSizeVars=new Map}compile(e,n,r={}){this.ir=e;const o=[];r.skipHeader||(o.push("#include <metal_stdlib>"),o.push("using namespace metal;"),o.push(""));const a=e.functions.find(p=>p.id===n);if(!a)throw new Error(`Entry point '${n}' not found`);const i=this.collectFunctions(a,e.functions),s=new Map,l=new Set;for(const p of i){const _=ur(p,e);s.set(p.id,_.inferredTypes),_.usedBuiltins.forEach(b=>l.add(b))}for(const p of i)if(p.nodes.some(_=>_.op==="prng_make")){l.add("prng_seed");break}const f=r.varMap||new Map;let d=0;const m=[...e.inputs||[],...e.tuningParams||[]];if(a.type==="shader"&&a.inputs)for(const p of a.inputs)m.some(_=>_.id===p.id)||m.push(p);m.forEach(p=>{f.has(p.id)||(f.set(p.id,d),d+=this.getTypeFlatSize(p.type))});for(const p of l)bn.includes(p)&&!f.has(p)&&(f.set(p,d),d+=1);for(const p of i){for(const _ of p.localVars||[])f.has(_.id)||(f.set(_.id,d),d+=this.getTypeSize(_.type||"float"));for(const _ of p.nodes)if(_.op==="var_set"){const b=_.var;f.has(b)||(f.set(b,d),d++)}}const h=Math.max(d*4,16),c=r.resourceBindings||new Map;let u=1;for(const p of e.resources||[])p.isOutput&&!c.has(p.id)&&c.set(p.id,u++);for(const p of[...e.inputs||[],...e.tuningParams||[]])p.type==="texture2d"&&!c.has(p.id)&&c.set(p.id,u++);for(const p of e.resources||[])!p.isOutput&&!c.has(p.id)&&c.set(p.id,u++);this.emitStructs(e.structs||[],o),this.emitHelperFunctions(o);for(const p of i)p.id!==n&&this.emitFunction(p,!1,o,i,f,c,s);return this.emitKernel(a,o,i,f,c,r,s),{code:o.join(`
`),metadata:{resourceBindings:c,globalBufferSize:h,varMap:f}}}compileLibrary(e,n,r={}){this.ir=e;const o=[];r.skipHeader||(o.push("#include <metal_stdlib>"),o.push("using namespace metal;"),o.push("")),this.emitHelperFunctions(o),this.emitStructs(e.structs||[],o);const a=new Set,i=r.varMap||new Map,s=r.resourceBindings||new Map;let l=0;if(!r.resourceBindings){let m=1;for(const h of e.resources||[])h.isOutput&&!s.has(h.id)&&s.set(h.id,m++);for(const h of[...e.inputs||[],...e.tuningParams||[]])h.type==="texture2d"&&!s.has(h.id)&&s.set(h.id,m++);for(const h of e.resources||[])!h.isOutput&&!s.has(h.id)&&s.set(h.id,m++)}for(const m of n){const h=e.functions.find(g=>g.id===m);if(!h)continue;const c=this.collectFunctions(h,e.functions),u=new Map,p=new Set;for(const g of c){const y=ur(g,e);u.set(g.id,y.inferredTypes),y.usedBuiltins.forEach(v=>p.add(v))}const _=(h.type==="shader"?h.inputs:[...e.inputs||[],...e.tuningParams||[]])||[];for(const g of _)i.has(g.id)||(i.set(g.id,l),l+=this.getTypeSize(g.type));for(const g of[...e.inputs||[],...e.tuningParams||[]])i.has(g.id)||(i.set(g.id,l),l+=this.getTypeSize(g.type));for(const g of p)bn.includes(g)&&!i.has(g)&&(i.set(g,l),l+=1);for(const g of c){for(const y of g.localVars||[])i.has(y.id)||(i.set(y.id,l),l+=this.getTypeSize(y.type||"float"));for(const y of g.nodes)if(y.op==="var_set"){const v=y.var;i.has(v)||(i.set(v,l),l++)}}for(const g of c)g.id!==m&&!a.has(g.id)&&(this.emitFunction(g,!1,o,c,i,s,u),a.add(g.id));const b=r.stages?.get(m)||"compute";if(b==="vertex"||b==="fragment")this.emitStageFunction(h,b,o,c,s,r,u);else{const g={...r,kernelName:m};this.emitKernel(h,o,c,i,s,g,u)}o.push("")}const f=Math.max(l*4,16),d=o.join(`
`);return(d.includes("kernel void fn_ray_gpu")||d.includes("fn_ray_gpu"))&&(console.log("--- GENERATED MSL (LIBRARY) ---"),console.log(d),console.log("-------------------------------")),{code:d,metadata:{resourceBindings:s,globalBufferSize:f,varMap:i}}}collectFunctions(e,n){const r=new Set,o=[],a=new Set,i=s=>{if(!r.has(s.id)){if(a.has(s.id))throw new Error(`Recursion detected: cyclic dependency involving '${s.id}'`);a.add(s.id);for(const l of s.nodes)if(l.op==="call_func"){const f=l.func;if(f===s.id)throw new Error(`Recursion detected: '${s.id}' calls itself`);const d=n.find(m=>m.id===f);d&&i(d)}a.delete(s.id),r.add(s.id),o.push(s)}};return i(e),o}collectBufferSizeResources(e){const n=new Set;for(const o of e)for(const a of o.nodes)if(a.op==="resource_get_size"&&typeof a.resource=="string"){const i=a.resource,s=this.ir?.resources.find(l=>l.id===i);s&&s.type==="buffer"&&n.add(i)}const r=this.getAllResources();return[...n].sort((o,a)=>r.findIndex(i=>i.id===o)-r.findIndex(i=>i.id===a))}getAllResources(){return this.ir?[...this.ir.resources.filter(e=>e.isOutput),...this.ir.inputs.filter(e=>e.type==="texture2d"),...(this.ir.tuningParams||[]).filter(e=>e.type==="texture2d"),...this.ir.resources.filter(e=>!e.isOutput)]:[]}emitStructs(e,n){if(e.length!==0){n.push("// Struct definitions");for(const r of e){n.push(`struct ${this.sanitizeId(r.id,"struct")} {`);for(const o of r.members||[]){const a=this.irTypeToMsl(o.type),i=o.builtin==="position"?" [[position]]":"";n.push(`    ${a} ${this.sanitizeId(o.name,"field")}${i};`)}n.push("};")}n.push("")}}emitHelperFunctions(e){e.push('#include "msl-intrinsics.incl.h"'),e.push("")}emitFunction(e,n,r,o,a,i,s){const l=e.outputs&&e.outputs.length>0?this.mslFuncType(e.outputs[0].type||"float"):"void",f=this.buildFuncParams(e);r.push(`${l} ${this.sanitizeId(e.id,"func")}(device float* b_globals${f}) {`);const d=Ut(e);this.emitBody(e,r,o,a,i,d,!1,s?.get(e.id)),r.push("}"),r.push("")}emitStageFunction(e,n,r,o,a,i,s){const l=n==="vertex",f=i.kernelName||e.id,d=e.outputs?.[0]?.type?this.irTypeToMsl(e.outputs[0].type):"void",m=[];if(l)m.push("uint vid [[vertex_id]]");else{const v=e.inputs?.[0]?.type;v&&m.push(`${this.irTypeToMsl(v)} stage_in [[stage_in]]`)}const h=[...this.ir?.inputs||[],...this.ir?.tuningParams||[]].filter(v=>v.type!=="texture2d"),c=h.length>0;let u=!1;for(const v of o){for(const $ of v.nodes)if($.op==="builtin_get"&&$.name==="output_size"){u=!0;break}if(u)break}const p=this.collectBufferSizeResources(o);(c||u||p.length>0)&&m.push("constant float* inputs [[buffer(0)]]");for(const[v,$]of a){const k=this.ir?.resources.find(A=>A.id===v)||this.ir?.inputs.find(A=>A.id===v&&A.type==="texture2d")||this.ir?.tuningParams?.find(A=>A.id===v&&A.type==="texture2d");if(k)if("type"in k&&k.type==="buffer"){const A=this.irTypeToMsl(k.dataType||"float"),z=l?"const device":"device";m.push(`${z} ${A}* ${this.sanitizeId(v,"buffer")} [[buffer(${$})]]`)}else m.push(`texture2d<float> ${this.sanitizeId(v)}_tex [[texture(${$})]]`),m.push(`sampler ${this.sanitizeId(v)}_sampler [[sampler(${$})]]`)}if(r.push(`${n} ${d} ${f}(${m.join(", ")}) {`),l){const v=e.inputs?.[0];v&&r.push(`    ${this.irTypeToMsl(v.type)} ${this.sanitizeId(v.id)} = vid;`)}else{const v=e.inputs?.[0];v&&r.push(`    ${this.irTypeToMsl(v.type)} ${this.sanitizeId(v.id)} = stage_in;`)}let _=0;if(c)for(const v of h){const $=v.type||"float",k=this.sanitizeId(v.id);_=this.emitUnpackInput(k,$,_,r)}u&&(r.push(`    int3 v_output_size = int3(int(inputs[${_}]), int(inputs[${_+1}]), int(inputs[${_+2}]));`),_+=3);const b=this.collectBufferSizeResources(o);this.currentBufferSizeVars.clear();for(const v of b){const $=`v_res_size_${this.sanitizeId(v)}`;r.push(`    float2 ${$} = float2(inputs[${_}], inputs[${_+1}]);`),this.currentBufferSizeVars.set(v,$),_+=2}const g=new Map,y=Ut(e);this.emitBody(e,r,o,g,a,y,!1,s?.get(e.id)),r.push("}")}emitKernel(e,n,r,o,a,i,s){n.push("// Kernel entry point");const l=new Set;for(const b of r)for(const g of b.nodes)g.op==="texture_store"&&l.add(g.tex);const f=[],d=[...this.ir?.inputs||[],...this.ir?.tuningParams||[]];if(e.type==="shader"&&e.inputs)for(const b of e.inputs)d.some(g=>g.id===b.id)||d.push(b);const m=(e.type==="shader"||d.length>0)&&d.length>0;f.push("device float* b_globals [[buffer(0)]]");for(const[b,g]of a){const y=this.ir?.resources.find(v=>v.id===b)||this.ir?.inputs.find(v=>v.id===b&&v.type==="texture2d")||this.ir?.tuningParams?.find(v=>v.id===b&&v.type==="texture2d");if(y)if("type"in y&&y.type==="atomic_counter")f.push(`device atomic_int* ${this.sanitizeId(b,"buffer")} [[buffer(${g})]]`);else if("type"in y&&y.type==="buffer"){const v=this.irTypeToMsl(y.dataType||"float");f.push(`device ${v}* ${this.sanitizeId(b,"buffer")} [[buffer(${g})]]`)}else l.has(b)?f.push(`texture2d<float, access::write> ${this.sanitizeId(b)}_tex [[texture(${g})]]`):(f.push(`texture2d<float> ${this.sanitizeId(b)}_tex [[texture(${g})]]`),f.push(`sampler ${this.sanitizeId(b)}_sampler [[sampler(${g})]]`))}let h=!1;for(const b of r){for(const g of b.nodes)if(g.op==="builtin_get"&&g.name==="normalized_global_invocation_id"){h=!0;break}if(h)break}const c=i.kernelName||"main_kernel";n.push(`kernel void ${c}(`),n.push(`    ${f.join(`,
    `)},`),h?(n.push("    uint3 gid [[thread_position_in_grid]],"),n.push("    uint3 tpg [[threads_per_grid]]) {")):n.push("    uint3 gid [[thread_position_in_grid]]) {");let u=!1;for(const b of r){for(const g of b.nodes)if(g.op==="builtin_get"&&g.name==="output_size"){u=!0;break}if(u)break}const p=this.collectBufferSizeResources(r);if(m||u||p.length>0){n.push("    device float* inputs = b_globals;");let b=0;if(m)for(const $ of d){const k=$.type||"float",A=this.sanitizeId($.id);if(b=this.emitUnpackInput(A,k,b,n),b<0)break}const g=new Set;for(const $ of r)for(const k of $.nodes)k.op==="builtin_get"&&g.add(k.name);const y=[...g].filter($=>bn.includes($));b+=y.length,u&&(n.push(`    int3 v_output_size = int3(int(inputs[${b}]), int(inputs[${b+1}]), int(inputs[${b+2}]));`),b+=3),this.currentBufferSizeVars.clear();for(const $ of p){const k=`v_res_size_${this.sanitizeId($)}`;n.push(`    float2 ${k} = float2(inputs[${b}], inputs[${b+1}]);`),this.currentBufferSizeVars.set($,k),b+=2}const v=[...this.ir?.inputs||[],...this.ir?.tuningParams||[]].filter($=>$.type==="texture2d");for(const $ of v){const k=`i_tex_bound_${this.sanitizeId($.id)}`;n.push(`    float ${k} = inputs[${b}];`),b+=1}}else this.currentBufferSizeVars.clear();const _=Ut(e);this.emitBody(e,n,r,o,a,_,!0,s?.get(e.id)),this.emitReadbackEpilogue(e,n,o,"    "),n.push("}")}emitBody(e,n,r,o,a,i,s=!1,l){if((e.localVars||[]).length>0){for(const h of e.localVars)n.push(`    ${this.formatLocalVarDecl(h.id,this.irTypeToMsl(h.type),h.initialValue)};`);n.push("")}const f=new Set,d=h=>this.emitPureNode(h,f,e,n,r,o,a,i,l),m=e.nodes.filter(h=>this.isExecutable(h.op,i,h.id)&&!i.some(c=>c.to===h.id&&c.type==="execution"));for(const h of m)this.emitChain(h,e,n,r,o,a,d,i,s,void 0,void 0,l)}emitPureNode(e,n,r,o,a,i,s,l,f){if(n.has(e))return;const d=r.nodes.find(h=>h.id===e);if(!d)return;const m=this.isExecutable(d.op,l,d.id);if(this.hasResult(d.op)&&!m){const h=u=>this.emitPureNode(u,n,r,o,a,i,s,l,f);for(const u of l)u.to===e&&u.type==="data"&&h(u.from);const c=this.compileExpression(d,r,a,i,s,h,l,f);if(d.op==="array_construct"){let u=d.length||1;Array.isArray(d.values)&&(u=d.values.length);let p="float";if(f){const _=f.get(d.id);if(_){const b=_.match(/array<([^,]+),/);b&&(p=this.irTypeToMsl(b[1].trim()))}}o.push(`    array<${p}, ${u}> ${this.nodeResId(d.id)} = ${c};`)}else o.push(`    auto ${this.nodeResId(d.id)} = ${c};`);n.add(e)}}emitChain(e,n,r,o,a,i,s,l,f=!1,d=new Set,m="    ",h){let c=e;for(;c&&!(d.has(c.id)&&c.op!=="flow_loop");){d.add(c.id);for(const p of l)p.to===c.id&&p.type==="data"&&s(p.from);for(const p in c){if(["id","op","metadata","func","args","threads","in_gid"].includes(p))continue;const _=c[p];typeof _=="string"&&n.nodes.some(b=>b.id===_)&&s(_)}if(c.op==="flow_branch"){this.emitBranch(m,c,n,r,o,a,i,s,l,f,new Set(d),h);return}else if(c.op==="flow_loop"){this.emitLoop(m,c,n,r,o,a,i,s,l,f,new Set(d),h);return}else if(c.op==="func_return"){const p=this.resolveArg(c,"val",n,o,a,i,s,l,h);if(f){const _=c.val;if(typeof _=="string"&&n.localVars?.some(b=>b.id===_)){const b=this.sanitizeId(_,"var");r.push(`${m}${b} = ${p};`)}this.emitReadbackEpilogue(n,r,a,m),r.push(`${m}return;`)}else r.push(`${m}return ${p};`);return}else this.emitNode(m,c,n,r,o,a,i,s,l,h);const u=l.find(p=>p.from===c.id&&p.portOut==="exec_out"&&p.type==="execution");c=u?n.nodes.find(p=>p.id===u.to):void 0}}emitBranch(e,n,r,o,a,i,s,l,f,d,m,h){const c=this.resolveArg(n,"cond",r,a,i,s,l,f,h);o.push(`${e}if (${c}) {`);const u=f.find(g=>g.from===n.id&&g.portOut==="exec_true"&&g.type==="execution"),p=u?r.nodes.find(g=>g.id===u.to):void 0;if(p){const g=new Set,y=v=>this.emitPureNode(v,g,r,o,a,i,s,f,h);this.emitChain(p,r,o,a,i,s,y,f,d,m,e+"    ",h)}o.push(`${e}} else {`);const _=f.find(g=>g.from===n.id&&g.portOut==="exec_false"&&g.type==="execution"),b=_?r.nodes.find(g=>g.id===_.to):void 0;if(b){const g=new Set,y=v=>this.emitPureNode(v,g,r,o,a,i,s,f,h);this.emitChain(b,r,o,a,i,s,y,f,d,m,e+"    ",h)}o.push(`${e}}`)}emitLoop(e,n,r,o,a,i,s,l,f,d,m,h){const c=`loop_${this.sanitizeId(n.id,"var")}`;if(n.count!==void 0){const g=this.resolveArg(n,"count",r,a,i,s,l,f,h);o.push(`${e}for (int ${c} = 0; ${c} < int(${g}); ${c}++) {`)}else{const g=this.resolveArg(n,"start",r,a,i,s,l,f,h),y=this.resolveArg(n,"end",r,a,i,s,l,f,h);o.push(`${e}for (int ${c} = int(${g}); ${c} < int(${y}); ${c}++) {`)}const u=f.find(g=>g.from===n.id&&g.portOut==="exec_body"&&g.type==="execution"),p=u?r.nodes.find(g=>g.id===u.to):void 0;if(p){const g=new Set,y=v=>this.emitPureNode(v,g,r,o,a,i,s,f,h);this.emitChain(p,r,o,a,i,s,y,f,d,m,e+"    ",h)}o.push(`${e}}`);const _=f.find(g=>g.from===n.id&&g.portOut==="exec_completed"&&g.type==="execution"),b=_?r.nodes.find(g=>g.id===_.to):void 0;b&&this.emitChain(b,r,o,a,i,s,l,f,d,m,e,h)}preloadDependencies(e,n,r,o){const a=[e],i=new Set;for(;a.length>0;){const s=a.shift();if(i.has(s))continue;i.add(s);const l=n.nodes.find(u=>u.id===s);if(!l)continue;for(const u of r)u.to===s&&u.type==="data"&&o(u.from);for(const u in l){if(["id","op","metadata","func","args","threads"].includes(u))continue;const p=l[u];typeof p=="string"&&n.nodes.some(_=>_.id===p)&&o(p)}const f=r.find(u=>u.from===s&&u.type==="execution"&&u.portOut==="exec_out");f&&a.push(f.to);const d=r.find(u=>u.from===s&&u.type==="execution"&&u.portOut==="exec_true");d&&a.push(d.to);const m=r.find(u=>u.from===s&&u.type==="execution"&&u.portOut==="exec_false");m&&a.push(m.to);const h=r.find(u=>u.from===s&&u.type==="execution"&&u.portOut==="exec_body");h&&a.push(h.to);const c=r.find(u=>u.from===s&&u.type==="execution"&&u.portOut==="exec_completed");c&&a.push(c.to)}}emitNode(e,n,r,o,a,i,s,l,f,d){if(n.op==="var_set"){const m=n.val,h=n.var,c=this.getVariableExpr(h,r,i),u=typeof m=="string"?r.nodes.find(p=>p.id===m):null;if(u&&u.op==="array_construct"){const p=u.length||1,_=u.fill,b=_!==void 0?String(_):"0";o.push(`${e}for (int _i = 0; _i < ${p}; _i++) ${c}[_i] = ${b};`)}else{const p=this.resolveArg(n,"val",r,a,i,s,l,f,d);o.push(`${e}${c} = ${p};`)}}else if(n.op==="array_set"){const m=this.resolveArg(n,"index",r,a,i,s,l,f,d),h=this.resolveArg(n,"value",r,a,i,s,l,f,d),c=this.resolveArg(n,"array",r,a,i,s,l,f,d);o.push(`${e}${c}[int(${m})] = ${h};`)}else if(n.op==="buffer_store"){const m=n.buffer,h=this.resolveArg(n,"index",r,a,i,s,l,f,d),c=this.resolveArg(n,"value",r,a,i,s,l,f,d),u=this.sanitizeId(m,"buffer");o.push(`${e}${u}[int(${h})] = ${c};`)}else if(n.op==="atomic_store"){const m=n.counter,h=this.resolveArg(n,"index",r,a,i,s,l,f,d),c=this.resolveArg(n,"value",r,a,i,s,l,f,d),u=this.sanitizeId(m,"buffer");o.push(`${e}atomic_store_explicit(&${u}[int(${h})], int(${c}), memory_order_relaxed);`)}else if(n.op==="atomic_add"||n.op==="atomic_sub"||n.op==="atomic_min"||n.op==="atomic_max"||n.op==="atomic_exchange"){const m=n.counter,h=this.resolveArg(n,"index",r,a,i,s,l,f,d),c=this.resolveArg(n,"value",r,a,i,s,l,f,d),u=this.sanitizeId(m,"buffer"),p={atomic_add:"atomic_fetch_add_explicit",atomic_sub:"atomic_fetch_sub_explicit",atomic_min:"atomic_fetch_min_explicit",atomic_max:"atomic_fetch_max_explicit",atomic_exchange:"atomic_exchange_explicit"};o.push(`${e}int ${this.nodeResId(n.id)} = ${p[n.op]}(&${u}[int(${h})], int(${c}), memory_order_relaxed);`)}else if(n.op==="texture_store"){const m=n.tex,h=this.resolveArg(n,"coords",r,a,i,s,l,f,d),c=this.resolveArg(n,"value",r,a,i,s,l,f,d);o.push(`${e}${this.sanitizeId(m)}_tex.write(${c}, uint2(${h}));`)}else if(n.op==="prng_next"){const m=n.prng,h=n.type||"float",u={float:1,int:1,float2:2,float3:3,float4:4,int2:2,int3:3,int4:4}[h]||1,p=h==="int"||h.startsWith("int"),_=this.sanitizeId(m);if(u===1&&!p)o.push(`${e}${_} = ${_} + 1;`),o.push(`${e}float ${this.nodeResId(n.id)} = _prng_hash_to_float(${_});`);else if(u===1&&p){o.push(`${e}${_} = ${_} + 1;`);const b=n.min!==void 0||f.some(y=>y.to===n.id&&y.portIn==="min"&&y.type==="data"),g=n.max!==void 0||f.some(y=>y.to===n.id&&y.portIn==="max"&&y.type==="data");if(b&&g){const y=this.resolveArg(n,"min",r,a,i,s,l,f,d),v=this.resolveArg(n,"max",r,a,i,s,l,f,d);o.push(`${e}int ${this.nodeResId(n.id)} = int(${y}) + int(as_type<uint>(_prng_hash(${_})) % uint(int(${v}) - int(${y}) + 1));`)}else o.push(`${e}int ${this.nodeResId(n.id)} = _prng_hash(${_});`)}else{o.push(`${e}${_} = ${_} + ${u};`);const b=[];for(let y=0;y<u;y++){const v=u-1-y,$=v===0?_:`(${_} - ${v})`;b.push(p?`_prng_hash(${$})`:`_prng_hash_to_float(${$})`)}const g=p?`int${u}`:`float${u}`;o.push(`${e}${g} ${this.nodeResId(n.id)} = ${g}(${b.join(", ")});`)}}else if(this.hasResult(n.op)){const m=this.compileExpression(n,r,a,i,s,l,f,d);o.push(`${e}auto ${this.nodeResId(n.id)} = ${m};`)}else if(this.isExecutable(n.op,f,n.id)){const m=this.compileExpression(n,r,a,i,s,l,f,d);o.push(`${e}${m};`)}}resolveCoercedArgs(e,n,r,o,a,i,s,l,f,d){const m=n.map(c=>this.resolveArg(e,c,o,a,i,s,l,f,d));if(!d)return m;const h=n.map(c=>{const u=e[c];return typeof u=="string"&&d.get(u)||"float"});return Ix()&&console.log(`[MSL] resolveCoercedArgs op=${e.op} keys=${n} types=${h} mode=${r}`),r==="float"?m.map((c,u)=>{const p=h[u];return p==="int"||p==="boolean"?`float(${c})`:p==="int2"?`float2(${c})`:p==="int3"?`float3(${c})`:p==="int4"?`float4(${c})`:c}):r==="unify"&&h.some(u=>u.includes("float"))?m.map((u,p)=>{const _=h[p];return _==="int"||_==="boolean"?`float(${u})`:_==="int2"?`float2(${u})`:_==="int3"?`float3(${u})`:_==="int4"?`float4(${u})`:u}):m}compileExpression(e,n,r,o,a,i,s,l){e.op;const f=(c="a")=>this.resolveArg(e,c,n,r,o,a,i,s,l),d=()=>this.resolveArg(e,"b",n,r,o,a,i,s,l),m=(c,u)=>{const[p,_]=this.resolveCoercedArgs(e,["a","b"],u,n,r,o,a,i,s,l);return`${p} ${c} ${_}`},h=(c,u,p="val")=>{const[_]=this.resolveCoercedArgs(e,[p],u,n,r,o,a,i,s,l);return`${c}(${_})`};switch(e.op){case"literal":{const c=e.type;return c==="int"?`int(${Math.trunc(e.val)})`:c==="bool"||c==="boolean"?e.val?"1.0f":"0.0f":this.formatFloat(e.val)}case"float":return this.formatFloat(e.val);case"int":return`${e.val}`;case"bool":return e.val?"1.0f":"0.0f";case"loop_index":{const c=e.loop;return`loop_${this.sanitizeId(c,"var")}`}case"var_get":{const c=e.var;return this.getVariableExpr(c,n,o)}case"buffer_load":{const c=e.buffer,u=this.resolveArg(e,"index",n,r,o,a,i,s,l);return`${this.sanitizeId(c,"buffer")}[int(${u})]`}case"atomic_load":{const c=e.counter,u=this.resolveArg(e,"index",n,r,o,a,i,s,l);return`atomic_load_explicit(&${this.sanitizeId(c,"buffer")}[int(${u})], memory_order_relaxed)`}case"prng_make":{if(e.seed!==void 0||s.some(b=>b.to===e.id&&b.portIn==="seed"&&b.type==="data"))return`_prng_hash(int(${this.resolveArg(e,"seed",n,r,o,a,i,s,l)}))`;const u=this.hashString(n.id),p=o.get("prng_seed");return`_prng_hash(${p!==void 0?`int(b_globals[${p}] * 2147483647.0f)`:"0"} + ${u} + int(gid.x) + int(gid.y) * 65536)`}case"float2":case"float3":case"float4":case"int2":case"int3":case"int4":{const c=e.op.startsWith("int"),u=parseInt(e.op.replace(/^(float|int)/,"")),p=e.op,_=["x","y","z","w"].slice(0,u),b=this.detectComponentGroups(e,u);if(b){const g=b.map(y=>{const v=f(y.key);return y.count===1?v:`${c?`int${y.count}`:`float${y.count}`}(${v})`});return`${p}(${g.join(", ")})`}return c?`${p}(${_.map(g=>`int(${f(g)})`).join(", ")})`:`${p}(${_.map(g=>f(g)).join(", ")})`}case"quat":{if(e.x!==void 0)return`float4(${f("x")}, ${f("y")}, ${f("z")}, ${f("w")})`;const[u,p]=this.resolveCoercedArgs(e,["axis","angle"],"float",n,r,o,a,i,s,l);return`float4(${u} * sin(${p} * 0.5f), cos(${p} * 0.5f))`}case"quat_identity":return"float4(0.0f, 0.0f, 0.0f, 1.0f)";case"float3x3":{const c=e.vals;if(Array.isArray(c))return`float3x3(${c.map(p=>this.formatFloat(p)).join(", ")})`;if(typeof c=="string"){const u=n.nodes.find(b=>b.id===c);if(u&&u.op==="array_construct"){const b=u.fill!==void 0?u.fill:0;return`float3x3(${new Array(9).fill(this.formatFloat(b)).join(", ")})`}i(c);const p=this.nodeResId(c),_=[];for(let b=0;b<9;b++)_.push(`float(${p}[${b}])`);return`float3x3(${_.join(", ")})`}return"float3x3(1,0,0, 0,1,0, 0,0,1)"}case"float4x4":{const c=e.vals;if(Array.isArray(c))return`float4x4(${c.map(p=>this.formatFloat(p)).join(", ")})`;if(typeof c=="string"){const u=n.nodes.find(b=>b.id===c);if(u&&u.op==="array_construct"){const b=u.fill!==void 0?u.fill:0;return`float4x4(${new Array(16).fill(this.formatFloat(b)).join(", ")})`}i(c);const p=this.nodeResId(c),_=[];for(let b=0;b<16;b++)_.push(`float(${p}[${b}])`);return`float4x4(${_.join(", ")})`}return"float4x4(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)"}case"math_pi":return"3.14159265358979323846f";case"math_e":return"2.71828182845904523536f";case"math_add":return m("+","unify");case"math_mad":return`fma(${f()}, ${d()}, ${f("c")})`;case"math_sub":return m("-","unify");case"math_mul":return m("*","unify");case"math_div":return m("/","unify");case"math_neg":return`(-${f("val")})`;case"math_abs":return h("abs","unify");case"math_sin":return h("sin","float");case"math_cos":return h("cos","float");case"math_tan":return h("tan","float");case"math_asin":return h("asin","float");case"math_acos":return h("acos","float");case"math_atan":return h("atan","float");case"math_atan2":return`atan2(${this.resolveCoercedArgs(e,["a","b"],"float",n,r,o,a,i,s,l).join(", ")})`;case"math_sinh":return h("sinh","float");case"math_cosh":return h("cosh","float");case"math_tanh":return h("tanh","float");case"math_floor":return h("floor","float");case"math_ceil":return h("ceil","float");case"math_round":return h("round","float");case"math_sqrt":return h("sqrt","float");case"math_pow":return`pow(${this.resolveCoercedArgs(e,["a","b"],"float",n,r,o,a,i,s,l).join(", ")})`;case"math_exp":return h("exp","float");case"math_exp2":return`exp2(${f("val")})`;case"math_log":return h("log","float");case"math_log2":return`log2(${f("val")})`;case"math_min":return`min(${this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,l).join(", ")})`;case"math_max":return`max(${this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,l).join(", ")})`;case"math_clamp":{const[c,u,p]=this.resolveCoercedArgs(e,["val","min","max"],"unify",n,r,o,a,i,s,l);return`clamp(${c}, ${u}, ${p})`}case"math_mod":{const[c,u]=this.resolveCoercedArgs(e,["a","b"],"unify",n,r,o,a,i,s,l),p=typeof e.a=="string"?l?.get(e.a):"float";return p&&p==="int"?`(${c} % ${u})`:`fmod(${c}, ${u})`}case"math_fract":return`fract(${this.resolveCoercedArgs(e,["val"],"float",n,r,o,a,i,s,l)[0]})`;case"math_sign":return h("sign","unify");case"math_step":{const[c,u]=this.resolveCoercedArgs(e,["edge","x"],"float",n,r,o,a,i,s,l);return`step(${c}, ${u})`}case"math_smoothstep":{const[c,u,p]=this.resolveCoercedArgs(e,["edge0","edge1","x"],"float",n,r,o,a,i,s,l);return`smoothstep(${c}, ${u}, ${p})`}case"math_mix":return`mix(${this.resolveCoercedArgs(e,["a","b","t"],"float",n,r,o,a,i,s,l).join(", ")})`;case"math_lerp":return`mix(${this.resolveCoercedArgs(e,["a","b","t"],"float",n,r,o,a,i,s,l).join(", ")})`;case"math_trunc":return`trunc(${f("val")})`;case"math_is_nan":return`msl_is_nan(${f("val")})`;case"math_is_inf":return`msl_is_inf(${f("val")})`;case"math_is_finite":return`msl_is_finite(${f("val")})`;case"math_flush_subnormal":return`flush_subnormal(${f("val")})`;case"math_exponent":return`get_exponent(${f("val")})`;case"math_mantissa":return`get_mantissa(${f("val")})`;case"math_eq":return`cmp_eq(${f()}, ${d()})`;case"math_neq":return`cmp_neq(${f()}, ${d()})`;case"math_lt":return`cmp_lt(${f()}, ${d()})`;case"math_lte":case"math_le":return`cmp_lte(${f()}, ${d()})`;case"math_gt":return`cmp_gt(${f()}, ${d()})`;case"math_gte":case"math_ge":return`cmp_gte(${f()}, ${d()})`;case"math_and":return`((${f()} != 0.0f && ${d()} != 0.0f) ? 1.0f : 0.0f)`;case"math_or":return`((${f()} != 0.0f || ${d()} != 0.0f) ? 1.0f : 0.0f)`;case"math_not":return`(${f("val")} == 0.0f ? 1.0f : 0.0f)`;case"math_xor":return`(((${f()} != 0.0f) != (${d()} != 0.0f)) ? 1.0f : 0.0f)`;case"mat_identity":return(e.size||4)===3?"float3x3(1,0,0, 0,1,0, 0,0,1)":"float4x4(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)";case"mat_mul":return`(${f()} * ${d()})`;case"mat_inverse":return`mat_inverse(${f("val")})`;case"quat_mul":return`quat_mul(${f()}, ${d()})`;case"quat_rotate":return`quat_rotate(${f("v")}, ${f("q")})`;case"quat_slerp":return`quat_slerp(${f()}, ${d()}, ${f("t")})`;case"quat_to_float4x4":return`quat_to_mat4(${f("q")})`;case"color_mix":return`color_mix_impl(${f()}, ${d()})`;case"math_select":return`msl_select(${f("false")}, ${f("true")}, ${f("cond")})`;case"vec_dot":{const c=typeof e.a=="string"?l?.get(e.a):void 0;if(c&&(c==="int2"||c==="int3"||c==="int4")){const u=f(),p=d();return c==="int2"?`(${u}.x * ${p}.x + ${u}.y * ${p}.y)`:c==="int3"?`(${u}.x * ${p}.x + ${u}.y * ${p}.y + ${u}.z * ${p}.z)`:`(${u}.x * ${p}.x + ${u}.y * ${p}.y + ${u}.z * ${p}.z + ${u}.w * ${p}.w)`}return`dot(${f()}, ${d()})`}case"vec_length":return`length(${f()})`;case"vec_normalize":return`normalize(${f()})`;case"vec_mix":return`mix(${f()}, ${d()}, ${f("t")})`;case"vec_cross":return`cross(${f()}, ${d()})`;case"vec_distance":return`distance(${f()}, ${d()})`;case"vec_reflect":return`reflect(${f()}, ${f("n")})`;case"vec_swizzle":{const c=this.resolveArg(e,"vec",n,r,o,a,i,s),u=e.channels||e.swizzle||"x";return`${c}.${u}`}case"resource_get_size":{const c=e.resource,u=this.ir?.resources.find(_=>_.id===c)||this.ir?.inputs.find(_=>_.id===c&&_.type==="texture2d")||this.ir?.tuningParams?.find(_=>_.id===c&&_.type==="texture2d");if(u&&u.type==="texture2d"){const _=`${this.sanitizeId(c)}_tex`;return`float2(${_}.get_width(), ${_}.get_height())`}if(this.currentBufferSizeVars.has(c))return this.currentBufferSizeVars.get(c);const p=u&&"size"in u&&typeof u.size=="object"&&"value"in u.size?u.size.value:1;return Array.isArray(p)?`float2(${this.formatFloat(p[0])}, ${this.formatFloat(p[1])})`:typeof p=="number"?`float2(${this.formatFloat(p)}, 1.0f)`:"float2(1.0f, 1.0f)"}case"resource_is_bound":{const c=e.resource;return`(i_tex_bound_${this.sanitizeId(c)} > 0.5f)`}case"vec_get_element":{const c=this.resolveArg(e,"vec",n,r,o,a,i,s),u=this.resolveArg(e,"index",n,r,o,a,i,s),p=e.vec;if(p){const _=n.nodes.find(v=>v.id===p),b=n.localVars?.find(v=>v.id===p),g=_?.op,y=b?.type;if(g==="float3x3"||g==="float4x4"||g==="mat_identity"||g==="mat_inverse"||g==="mat_transpose"||g==="quat_to_float4x4"||y==="float3x3"||y==="float4x4"){const v=g==="float3x3"||y==="float3x3"||g==="mat_identity"&&_?.size===3?3:4;return`${c}[int(${u}) / ${v}][int(${u}) % ${v}]`}}return`${c}[int(${u})]`}case"static_cast_float":{const c=e.val,u=f("val");if(typeof c=="string"){const p=n.nodes.find(_=>_.id===c);if(p){const _=p.op,b=p.channels||p.swizzle;if(_==="float2"||_==="vec_swizzle"&&b?.length===2)return`float2(${u})`;if(_==="float3"||_==="vec_swizzle"&&b?.length===3)return`float3(${u})`;if(_==="float4"||_==="vec_swizzle"&&b?.length===4)return`float4(${u})`}}return`float(${u})`}case"static_cast_int":return`safe_cast_int(${f("val")})`;case"static_cast_int2":return`int2(${f("val")})`;case"static_cast_int3":return`int3(${f("val")})`;case"static_cast_int4":return`int4(${f("val")})`;case"static_cast_float2":return`float2(${f("val")})`;case"static_cast_float3":return`float3(${f("val")})`;case"static_cast_float4":return`float4(${f("val")})`;case"static_cast_bool":return`(${f("val")} != 0.0f ? 1.0f : 0.0f)`;case"struct_construct":{const c=e.type,u=e.values||{},p=(this.ir?.structs??[]).find(b=>b.id===c);if(!p)throw new Error(`MslGenerator: Struct '${c}' not found`);const _=[];for(const b of p.members||[]){const g=u[b.name];g!==void 0?typeof g=="number"?_.push(this.formatFloat(g)):typeof g=="string"?n.nodes.find(v=>v.id===g)?(i(g),_.push(this.nodeResId(g))):_.push(this.getVariableExpr(g,n,o)):_.push(String(g)):_.push("{}")}return`${this.sanitizeId(c,"struct")}{${_.join(", ")}}`}case"struct_extract":{const c=this.resolveArg(e,"struct",n,r,o,a,i,s),u=e.field;return`${c}.${this.sanitizeId(u,"field")}`}case"array_construct":{const c=e.length||1,u=e.values;if(Array.isArray(u)&&u.length>0)return`{ ${u.map(y=>this.formatFloat(Number(y))).join(", ")} }`;const p=e.fill,_=p!==void 0?this.formatFloat(p):"0.0f";return`{ ${new Array(c).fill(_).join(", ")} }`}case"array_extract":{const c=this.resolveArg(e,"array",n,r,o,a,i,s),u=this.resolveArg(e,"index",n,r,o,a,i,s);return`${c}[int(${u})]`}case"array_length":{const c=e.array;return typeof c=="string"&&n.inputs?.some(u=>u.id===c)?`${this.sanitizeId(c)}_len`:"0"}case"call_func":{const c=e.func,u=r.find(_=>_.id===c);if(!u)throw new Error(`MslGenerator: Function '${c}' not found`);const p=["b_globals"];for(const _ of u.inputs||[]){const b=e.args?.[_.id];b!==void 0?typeof b=="number"?p.push(this.formatFloat(b)):typeof b=="string"?n.nodes.find(y=>y.id===b)?(i(b),p.push(this.nodeResId(b))):p.push(this.getVariableExpr(b,n,o)):p.push(String(b)):p.push("0.0f")}return`${this.sanitizeId(c,"func")}(${p.join(", ")})`}case"builtin_get":{const c=e.name;if(c==="global_invocation_id")return"int3(gid)";if(c==="normalized_global_invocation_id")return"(float3(gid) + 0.5) / float3(tpg)";if(c==="output_size")return"v_output_size";if(bn.includes(c)){const u=o.get(c);if(u!==void 0)return`b_globals[${u}]`;throw new Error(`MSL Generator: Builtin '${c}' not allocated in globals buffer`)}throw new Error(`MSL Generator: Unsupported builtin '${c}'`)}case"texture_sample":{const c=e.tex,u=this.resolveArg(e,"coords",n,r,o,a,i,s);return`${this.sanitizeId(c)}_tex.sample(${this.sanitizeId(c)}_sampler, ${u})`}default:throw new Error(`MSL Generator: Unsupported op '${e.op}'`)}}getVariableExpr(e,n,r){if((n.type==="shader"||this.ir?.inputs?.length||this.ir?.tuningParams?.length)&&(n.inputs?.some(a=>a.id===e)||this.ir?.inputs?.some(a=>a.id===e)||this.ir?.tuningParams?.some(a=>a.id===e)))return this.sanitizeId(e);if(n.localVars?.some(a=>a.id===e))return this.sanitizeId(e,"var");const o=r.get(e);return o!==void 0?`b_globals[${o}]`:this.sanitizeId(e,"var")}resolveArg(e,n,r,o,a,i,s,l,f){const d=l.find(h=>h.to===e.id&&(h.portIn===n||n==="val"&&h.portIn==="value")&&h.type==="data");if(d){const h=r.nodes.find(c=>c.id===d.from);if(h){let c="";const u=e[n];return typeof u=="string"&&u.includes(".")&&(c=u.substring(u.indexOf("."))),(h.op==="array_construct"||h.op==="struct_construct")&&e.op!=="array_length"?(s(h.id),this.nodeResId(h.id)+c):this.hasResult(h.op)&&h.op!=="literal"?this.nodeResId(h.id)+c:this.compileExpression(h,r,o,a,i,s,l,f)+c}}const m=e[n];if(m===void 0)return"0.0f";if(typeof m=="number")return this.formatFloat(m);if(typeof m=="boolean")return m?"1.0f":"0.0f";if(Array.isArray(m)){const h=m.length,c=m.map(u=>this.formatFloat(u)).join(", ");return h===2?`float2(${c})`:h===3?`float3(${c})`:h===4?`float4(${c})`:`float${h}(${c})`}if(typeof m=="string"){let h=m,c="";const u=m.indexOf(".");return u!==-1&&(h=m.substring(0,u),c=m.substring(u)),r.nodes.find(_=>_.id===h)?(s(h),this.nodeResId(h)+c):this.getVariableExpr(h,r,a)+c}return String(m)}detectComponentGroups(e,n){const r=["x","y","z","w"],o=["x","y","z","w","xy","yz","zw","xyz","yzw","xyzw"],a=[];for(const i of o)e[i]!==void 0&&i.length>1&&a.push({key:i,startIdx:r.indexOf(i[0]),count:i.length});if(a.length===0)return null;for(let i=0;i<n;i++){const s=r[i];e[s]!==void 0&&!a.some(l=>l.startIdx<=i&&i<l.startIdx+l.count)&&a.push({key:s,startIdx:i,count:1})}return a.sort((i,s)=>i.startIdx-s.startIdx),a}hasResult(e){return["literal","float","int","bool","var_get","buffer_load","builtin_get","float2","float3","float4","int2","int3","int4","float3x3","float4x4","quat","quat_identity","vec_dot","vec_length","vec_normalize","vec_swizzle","vec_get_element","static_cast_float","static_cast_int","static_cast_bool","static_cast_int2","static_cast_int3","static_cast_int4","static_cast_float2","static_cast_float3","static_cast_float4","struct_construct","struct_extract","array_construct","array_extract","array_length","resource_get_size","resource_is_bound","texture_sample","call_func","mat_identity","mat_mul","mat_inverse","quat_mul","quat_rotate","quat_slerp","quat_to_float4x4","color_mix","atomic_load","atomic_add","atomic_sub","atomic_min","atomic_max","atomic_exchange","prng_make","prng_next"].includes(e)||e.startsWith("math_")||e.startsWith("vec_")}isExecutable(e,n,r){return e.startsWith("cmd_")||e.startsWith("flow_")||e==="var_set"||e==="buffer_store"||e==="texture_store"||e==="func_return"||e==="call_func"||e==="array_set"||e==="atomic_store"||e==="atomic_add"||e==="atomic_sub"||e==="atomic_min"||e==="atomic_max"||e==="atomic_exchange"||e==="prng_next"?!0:n.some(a=>a.from===r&&a.type==="execution")}formatFloat(e){const n=e.toString();return!n.includes(".")&&!n.includes("e")&&!n.includes("E")?n+".0f":n+"f"}sanitizeId(e,n="var"){const r=e.replace(/[^a-zA-Z0-9_]/g,"_");return n==="func"?`func_${r}`:n==="struct"?`S_${r}`:n==="field"?`f_${r}`:n==="buffer"?`b_${r}`:`v_${r}`}nodeResId(e){return`n_${e.replace(/[^a-zA-Z0-9_]/g,"_")}`}hashString(e){let n=0;for(let r=0;r<e.length;r++)n=Math.imul(n,31)+e.charCodeAt(r)|0;return n}irTypeToMsl(e){if(!e)return"float";switch(e){case"float":return"float";case"int":return"int";case"bool":return"bool";case"float2":return"float2";case"float3":return"float3";case"float4":case"quat":return"float4";case"int2":return"int2";case"int3":return"int3";case"int4":return"int4";case"prng":return"int";case"float3x3":return"float3x3";case"float4x4":return"float4x4";default:if(e.startsWith("array<")){const n=e.match(/array<([^,]+),\s*(\d+)>/);if(n){const r=this.irTypeToMsl(n[1].trim()),o=n[2];return`__array_${r}_${o}`}return"float"}return this.sanitizeId(e,"struct")}}formatLocalVarDecl(e,n,r){if(n.startsWith("__array_")){const a=n.substring(8),i=a.lastIndexOf("_"),s=a.substring(0,i),l=a.substring(i+1);return`${s} ${this.sanitizeId(e)}[${l}] = {}`}let o="";return Array.isArray(r)?o=` = ${n}(${r.map(a=>this.formatFloat(a)).join(", ")})`:r!==void 0?o=` = ${this.formatFloat(r)}`:o=["float","int","bool","float2","float3","float4","int2","int3","int4","float3x3","float4x4"].includes(n)?` = ${n}(0)`:" = {}",`${n} ${this.sanitizeId(e)}${o}`}getTypeSize(e){return e?this.getTypeFlatSize(e):1}buildFuncParams(e){return!e.inputs||e.inputs.length===0?"":", "+e.inputs.map(n=>`${this.mslFuncType(n.type||"float")} ${this.sanitizeId(n.id,"var")}`).join(", ")}mslFuncType(e){const n=this.irTypeToMsl(e);if(n.startsWith("__array_")){const r=n.substring(8),o=r.lastIndexOf("_"),a=r.substring(0,o),i=r.substring(o+1);return`array<${a}, ${i}>`}return n}getTypeFlatSize(e){switch(e){case"float":case"int":case"bool":case"prng":return 1;case"float2":case"int2":return 2;case"float3":case"int3":return 3;case"float4":case"quat":case"int4":return 4;case"float3x3":return 9;case"float4x4":return 16;default:{const n=this.ir?.structs?.find(o=>o.id===e);if(n)return(n.members||[]).reduce((o,a)=>o+this.getTypeFlatSize(a.type),0);const r=e.match(/array<([^,]+),\s*(\d+)>/);return r?parseInt(r[2])*this.getTypeFlatSize(r[1].trim()):1}}}emitReadbackEpilogue(e,n,r,o){for(const a of e.localVars||[]){const i=r.get(a.id);if(i===void 0)continue;const s=this.sanitizeId(a.id,"var"),l=a.type||"float";if(l.startsWith("array<")||l.includes("["))continue;const f=this.getTypeSize(l);if(f===1)n.push(`${o}b_globals[${i}] = ${s};`);else if(l==="float3x3")for(let d=0;d<3;d++)for(let m=0;m<3;m++)n.push(`${o}b_globals[${i+d*3+m}] = ${s}[${d}][${m}];`);else if(l==="float4x4")for(let d=0;d<4;d++)for(let m=0;m<4;m++)n.push(`${o}b_globals[${i+d*4+m}] = ${s}[${d}][${m}];`);else for(let d=0;d<f;d++)n.push(`${o}b_globals[${i+d}] = ${s}[${d}];`)}}emitInputUnpacking(e,n){let r=0;for(const o of e.inputs||[]){const a=o.type||"float",i=this.sanitizeId(o.id);if(r=this.emitUnpackInput(i,a,r,n),r<0)break}}emitUnpackInput(e,n,r,o){switch(n){case"float":return o.push(`    float ${e} = inputs[${r}];`),r+1;case"int":case"prng":return o.push(`    int ${e} = int(inputs[${r}]);`),r+1;case"bool":return o.push(`    bool ${e} = inputs[${r}] != 0.0f;`),r+1;case"float2":return o.push(`    float2 ${e} = float2(inputs[${r}], inputs[${r+1}]);`),r+2;case"float3":return o.push(`    float3 ${e} = float3(inputs[${r}], inputs[${r+1}], inputs[${r+2}]);`),r+3;case"float4":return o.push(`    float4 ${e} = float4(inputs[${r}], inputs[${r+1}], inputs[${r+2}], inputs[${r+3}]);`),r+4;case"int2":return o.push(`    int2 ${e} = int2(int(inputs[${r}]), int(inputs[${r+1}]));`),r+2;case"int3":return o.push(`    int3 ${e} = int3(int(inputs[${r}]), int(inputs[${r+1}]), int(inputs[${r+2}]));`),r+3;case"int4":return o.push(`    int4 ${e} = int4(int(inputs[${r}]), int(inputs[${r+1}]), int(inputs[${r+2}]), int(inputs[${r+3}]));`),r+4;case"float3x3":{const a=Array.from({length:9},(i,s)=>`inputs[${r+s}]`);return o.push(`    float ${e}[9] = {${a.join(", ")}};`),r+9}case"float4x4":{const a=Array.from({length:16},(i,s)=>`inputs[${r+s}]`);return o.push(`    float ${e}[16] = {${a.join(", ")}};`),r+16}default:{const a=this.ir?.structs?.find(l=>l.id===n);if(a){const l=this.sanitizeId(n,"struct"),f=[];let d=r;for(const m of a.members||[]){const h=m.type;h==="float"?(f.push(`inputs[${d}]`),d+=1):h==="int"?(f.push(`int(inputs[${d}])`),d+=1):h==="float2"?(f.push(`float2(inputs[${d}], inputs[${d+1}])`),d+=2):h==="float3"?(f.push(`float3(inputs[${d}], inputs[${d+1}], inputs[${d+2}])`),d+=3):h==="float4"?(f.push(`float4(inputs[${d}], inputs[${d+1}], inputs[${d+2}], inputs[${d+3}])`),d+=4):h==="int2"?(f.push(`int2(int(inputs[${d}]), int(inputs[${d+1}]))`),d+=2):h==="int3"?(f.push(`int3(int(inputs[${d}]), int(inputs[${d+1}]), int(inputs[${d+2}]))`),d+=3):h==="int4"?(f.push(`int4(int(inputs[${d}]), int(inputs[${d+1}]), int(inputs[${d+2}]), int(inputs[${d+3}]))`),d+=4):(f.push(`inputs[${d}]`),d+=this.getTypeFlatSize(h))}return o.push(`    ${l} ${e} = ${l}{${f.join(", ")}};`),d}const i=n.match(/array<([^,]+),\s*(\d+)>/);if(i){const l=i[1].trim(),f=parseInt(i[2]),d=this.irTypeToMsl(l),m=this.getTypeFlatSize(l),h=this.ir?.structs?.find(c=>c.id===l);if(h){o.push(`    ${d} ${e}[${f}];`);for(let c=0;c<f;c++){let u=0;for(const p of h.members){const _=this.sanitizeId(p.name,"field"),b=p.type;b==="float2"?o.push(`    ${e}[${c}].${_} = float2(inputs[${r+c*m+u}], inputs[${r+c*m+u+1}]);`):b==="float3"?o.push(`    ${e}[${c}].${_} = float3(inputs[${r+c*m+u}], inputs[${r+c*m+u+1}], inputs[${r+c*m+u+2}]);`):b==="float4"?o.push(`    ${e}[${c}].${_} = float4(inputs[${r+c*m+u}], inputs[${r+c*m+u+1}], inputs[${r+c*m+u+2}], inputs[${r+c*m+u+3}]);`):b==="int"?o.push(`    ${e}[${c}].${_} = int(inputs[${r+c*m+u}]);`):b==="int2"?o.push(`    ${e}[${c}].${_} = int2(int(inputs[${r+c*m+u}]), int(inputs[${r+c*m+u+1}]));`):b==="int3"?o.push(`    ${e}[${c}].${_} = int3(int(inputs[${r+c*m+u}]), int(inputs[${r+c*m+u+1}]), int(inputs[${r+c*m+u+2}]));`):b==="int4"?o.push(`    ${e}[${c}].${_} = int4(int(inputs[${r+c*m+u}]), int(inputs[${r+c*m+u+1}]), int(inputs[${r+c*m+u+2}]), int(inputs[${r+c*m+u+3}]));`):o.push(`    ${e}[${c}].${_} = inputs[${r+c*m+u}];`),u+=this.getTypeFlatSize(b)}}}else{const c=Array.from({length:f},(u,p)=>`inputs[${r+p*m}]`);o.push(`    ${d} ${e}[${f}] = {${c.join(", ")}};`)}return r+f*m}const s=n.match(/^(.+)\[\]$/);if(s){const l=s[1].trim();o.push(`    int ${e}_len = int(inputs[${r}]);`);const f=this.ir?.structs?.find(d=>d.id===l);if(f){const d=this.sanitizeId(l,"struct"),m=this.getTypeFlatSize(l);o.push(`    ${d} ${e}[64];`),o.push(`    for (int _i = 0; _i < ${e}_len && _i < 64; _i++) {`);let h=0;for(const c of f.members||[]){const u=c.type,p=this.sanitizeId(c.name,"field");u==="float"?(o.push(`        ${e}[_i].${p} = inputs[${r+1} + _i * ${m} + ${h}];`),h+=1):u==="int"?(o.push(`        ${e}[_i].${p} = int(inputs[${r+1} + _i * ${m} + ${h}]);`),h+=1):u==="float2"?(o.push(`        ${e}[_i].${p} = float2(inputs[${r+1} + _i * ${m} + ${h}], inputs[${r+1} + _i * ${m} + ${h+1}]);`),h+=2):u==="float3"?(o.push(`        ${e}[_i].${p} = float3(inputs[${r+1} + _i * ${m} + ${h}], inputs[${r+1} + _i * ${m} + ${h+1}], inputs[${r+1} + _i * ${m} + ${h+2}]);`),h+=3):u==="float4"?(o.push(`        ${e}[_i].${p} = float4(inputs[${r+1} + _i * ${m} + ${h}], inputs[${r+1} + _i * ${m} + ${h+1}], inputs[${r+1} + _i * ${m} + ${h+2}], inputs[${r+1} + _i * ${m} + ${h+3}]);`),h+=4):u==="int2"?(o.push(`        ${e}[_i].${p} = int2(int(inputs[${r+1} + _i * ${m} + ${h}]), int(inputs[${r+1} + _i * ${m} + ${h+1}]));`),h+=2):u==="int3"?(o.push(`        ${e}[_i].${p} = int3(int(inputs[${r+1} + _i * ${m} + ${h}]), int(inputs[${r+1} + _i * ${m} + ${h+1}]), int(inputs[${r+1} + _i * ${m} + ${h+2}]));`),h+=3):u==="int4"?(o.push(`        ${e}[_i].${p} = int4(int(inputs[${r+1} + _i * ${m} + ${h}]), int(inputs[${r+1} + _i * ${m} + ${h+1}]), int(inputs[${r+1} + _i * ${m} + ${h+2}]), int(inputs[${r+1} + _i * ${m} + ${h+3}]));`),h+=4):(o.push(`        ${e}[_i].${p} = inputs[${r+1} + _i * ${m} + ${h}];`),h+=this.getTypeFlatSize(u))}o.push("    }")}else o.push(`    device float* ${e} = &inputs[${r+1}];`);return-1}return o.push(`    float ${e} = inputs[${r}];`),r+1}}}}const Me={join:(...t)=>t.filter(Boolean).join("/").replace(/\/+/g,"/"),basename:(t,e)=>{const n=t.split("/").pop()||"";return e&&n.endsWith(e)?n.slice(0,-e.length):n},dirname:t=>t.split("/").slice(0,-1).join("/")||"."};function Cx(t,e,n){const r=Me.basename(t,".metal"),o=Me.join(e,`${r}.air`),a=Me.join(e,`${r}.metallib`),s=["xcrun -sdk macosx metal -fno-fast-math",[].map(l=>`-I"${l}"`).join(" "),`-c "${t}" -o "${o}"`].filter(Boolean).join(" ");return[`# Compile Metal Shader: ${r}`,`mkdir -p "${e}"`,s,`xcrun -sdk macosx metallib "${o}" -o "${a}"`]}function Rx(t){const{outputPath:e,paths:n}=t;if(!n)throw new Error("FFGLCompileOptions.paths must be provided");const{ffglSdkDir:r,pluginSource:o,interopSource:a,additionalIncludes:i=[]}=n,s=t.name?t.name.replace(/\s+/g,""):Me.basename(e,".bundle"),l=Me.dirname(e),f=Me.join(l,`${s}.bundle`),d=Me.join(f,"Contents"),m=Me.join(d,"MacOS"),h=Me.join(d,"Resources"),c=Me.join(m,s),u=Me.join(d,"Info.plist"),p=[];p.push(`# Build FFGL Plugin: ${s}`),p.push(`rm -rf "${f}"`),p.push(`mkdir -p "${m}"`),p.push(`mkdir -p "${h}"`);const _=[`"${o}"`,`"${Me.join(r,"ffgl/FFGL.cpp")}"`,`"${Me.join(r,"ffgl/FFGLLog.cpp")}"`,`"${Me.join(r,"ffgl/FFGLThumbnailInfo.cpp")}"`,`"${Me.join(r,"ffgl/FFGLPluginInfo.cpp")}"`,`"${Me.join(r,"ffgl/FFGLPluginInfoData.cpp")}"`,`"${Me.join(r,"ffgl/FFGLPluginManager.cpp")}"`,`"${Me.join(r,"ffgl/FFGLPluginSDK.cpp")}"`,`"${a}"`],b=[`-I"${r}"`,`-I"${Me.join(r,"ffgl")}"`,`-I"${Me.join(r,"ffglex")}"`,`-I"${Me.dirname(a)}"`,...i.map(z=>`-I"${z}"`)].join(" "),y=["Cocoa","OpenGL","Metal","MetalKit","IOSurface","CoreVideo"].map(z=>`-framework ${z}`).join(" "),v=t.textureInputCount??0;let $=0;v===0&&($=1),v===1&&($=0),v>=2&&($=2);const k=["-std=c++17","-x objective-c++","-bundle","-fobjc-arc","-D TARGET_MACOS=1","-D GL_SILENCE_DEPRECATION","-Wl,-exported_symbol,_plugMain","-g",t.name?`-DPLUGIN_NAME='"${t.name}"'`:"",t.pluginId?`-DPLUGIN_CODE='"${t.pluginId}"'`:"",`-DPLUGIN_TYPE=${$}`,`-DMIN_INPUTS=${v}`,`-DMAX_INPUTS=${v}`,`-DINTERNAL_RESOURCE_COUNT=${t.internalResourceCount??0}`].filter(z=>z!=="").join(" ");p.push(`clang++ ${k} ${b} ${y} ${_.join(" ")} -o "${c}"`),p.push(`codesign -s - "${c}"`);const A=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleExecutable</key>
	<string>${s}</string>
	<key>CFBundleIdentifier</key>
	<string>com.nano.${s}</string>
	<key>CFBundleName</key>
	<string>${s}</string>
	<key>CFBundlePackageType</key>
	<string>BNDL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
	<key>CFBundleVersion</key>
	<string>1</string>
</dict>
</plist>`;return p.push(`cat <<EOF > "${u}"
${A}
EOF`),p}function Tx(t){return["#!/bin/bash","set -e","","# Change to the directory where the script is located",'cd "$(dirname "$0")"',"","# Check for Xcode command line tools","if ! xcode-select -p &>/dev/null; then",`  echo "Error: Xcode Command Line Tools not found. Please install them with 'xcode-select --install'."`,"  exit 1","fi","","# Check for metal compiler","if ! xcrun -sdk macosx -find metal &>/dev/null; then",'  echo "Error: Metal compiler not found. Please ensure Xcode is installed and configured correctly."',"  exit 1","fi","",...t].join(`
`)}const Lx="https://raw.githubusercontent.com/resolume/ffgl/master/source/lib/ffgl",Dx="https://raw.githubusercontent.com/nattos/nano-ffglify/main/src/metal",Px="modules/ffgl/source/lib/ffgl",Bx="src/metal",Mx=["FFGL.cpp","FFGL.h","FFGLLib.h","FFGLLog.cpp","FFGLLog.h","FFGLPlatform.h","FFGLPluginInfo.cpp","FFGLPluginInfo.h","FFGLPluginInfoData.cpp","FFGLPluginManager.cpp","FFGLPluginManager.h","FFGLPluginSDK.cpp","FFGLPluginSDK.h","FFGLThumbnailInfo.cpp","FFGLThumbnailInfo.h"],Nx=[{file:"ffgl-plugin.mm",vfsDir:"src"},{file:"InteropTexture.m",vfsDir:"src"},{file:"InteropTexture.h",vfsDir:"src"},{file:"intrinsics.incl.h",vfsDir:"src"},{file:"msl-intrinsics.incl.h",vfsDir:"generated"}];function Fx(t){if(t.registerRemote){for(const e of Mx)t.registerRemote(`ffgl-sdk/ffgl/${e}`,`${Lx}/${e}`,`${Px}/${e}`);for(const{file:e,vfsDir:n}of Nx)t.registerRemote(`${n}/${e}`,`${Dx}/${e}`,`${Bx}/${e}`)}}async function kc(t,e){const{ir:n}=e,{FFGL_ASSETS:r}=await Sx(async()=>{const{FFGL_ASSETS:L}=await import("./ffgl-assets-62uhs_m8.js");return{FFGL_ASSETS:L}},[],import.meta.url),o=r,a=n.meta.name||"NanoFFGL",i=Array.from(a).reduce((L,U)=>Math.imul(31,L)+U.charCodeAt(0)|0,0),s=Math.abs(i).toString(16).slice(-4).toUpperCase().padStart(4,"0"),l=(n.inputs||[]).filter(L=>L.type==="texture2d"&&!L.sidechannel).length,f=(n.resources||[]).filter(L=>!L.isOutput).length,d="ffgl-sdk",m="src",h="generated",c="build";for(const[L,U]of Object.entries(o))L.startsWith("ffgl/")?t.writeFile(`${d}/${L}`,U):L==="msl-intrinsics.incl.h"||t.writeFile(`${m}/${L}`,U);o["msl-intrinsics.incl.h"]&&t.writeFile(`${h}/msl-intrinsics.incl.h`,o["msl-intrinsics.incl.h"]);const u=new zx,{code:p,shaderFunctions:_}=u.compile(n,n.entryPoint);t.writeFile(`${h}/logic.cpp`,p);const b=new Ox,g=new Map;_.forEach(L=>{L.stage&&g.set(L.id,L.stage)});const{code:y}=b.compileLibrary(n,_.map(L=>L.id),{stages:g});t.writeFile(`${h}/shaders.metal`,y);const v=[],$=Cx(`${h}/shaders.metal`,c);v.push(...$);const A=`../${a.replace(/\s+/g,"")}.bundle`,z=Rx({name:a,pluginId:s,textureInputCount:l,internalResourceCount:f,outputPath:A,paths:{ffglSdkDir:d,pluginSource:`${m}/ffgl-plugin.mm`,interopSource:`${m}/InteropTexture.m`,additionalIncludes:[m,h,"."]}});v.push(...z),v.push(`mkdir -p "${A}/Contents/Resources"`),v.push(`cp "${c}/shaders.metallib" "${A}/Contents/Resources/default.metallib"`);const O=Tx(v);t.writeFile("build.sh",O),t.chmod("build.sh","755")}var jx=Object.defineProperty,Ux=Object.getOwnPropertyDescriptor,yo=(t,e,n,r)=>{for(var o=r>1?void 0:r?Ux(e,n):e,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=(r?i(e,n,o):i(o))||o);return r&&o&&jx(e,n,o),o};const oi=300,qx=150,Vx=80,ai=350,Sc=200;let Pn=class extends Vt{constructor(){super(...arguments),this.isGlobalDragging=!1,this.showApiKeyDialog=!1,this.dragLeftWidth=null,this.dragChatWidth=null,this.dragStartX=0,this.dragStartSize=0,this.dragTarget=null,this.onWindowPointerMove=t=>{if(!this.dragTarget)return;const e=t.clientX-this.dragStartX;this.dragTarget==="left"?this.dragLeftWidth=Math.max(0,this.dragStartSize+e):this.dragChatWidth=Math.max(Sc,this.dragStartSize-e)},this.onWindowPointerUp=t=>{window.removeEventListener("pointermove",this.onWindowPointerMove),window.removeEventListener("pointerup",this.onWindowPointerUp),this.classList.remove("dragging");const e=this.shadowRoot?.querySelector(".resize-handle.active");if(e&&e.classList.remove("active"),!!this.dragTarget){if(this.dragTarget==="left"){const n=this.dragLeftWidth??0;n<Vx?ne.setLeftPanelCollapsed(!0):(ne.setLeftPanelCollapsed(!1),ne.setLeftPanelWidth(Math.max(qx,n))),this.dragLeftWidth=null}else{const n=this.dragChatWidth??this.chatWidth;ne.setChatPanelWidth(Math.max(Sc,n)),this.dragChatWidth=null}this.dragTarget=null}},this.handleGlobalDragOver=t=>{t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="copy");const e=t.composedPath().some(n=>n instanceof HTMLElement&&n.hasAttribute("data-drop-target"));this.isGlobalDragging=!e},this.handleGlobalDragLeave=t=>{(t.clientX<=0||t.clientY<=0||t.clientX>=window.innerWidth||t.clientY>=window.innerHeight)&&(this.isGlobalDragging=!1)},this.handleGlobalDrop=t=>{if(t.preventDefault(),this.isGlobalDragging=!1,t.composedPath().some(r=>r instanceof HTMLElement&&r.hasAttribute("data-drop-target")))return;const n=t.dataTransfer?.files[0];if(n)if(n.name.endsWith(".json")||n.type==="application/json")this.handleImportShaderJson(n);else{const r=ne.runtime.getTextureInputIds();r.length>0&&(ne.runtime.setTextureSource(r[0],{type:"file",value:n}),ne.saveInputFile(r[0],n))}}}get leftWidth(){return this.dragLeftWidth??R.local.settings.leftPanelWidth??oi}get chatWidth(){return this.dragChatWidth??R.local.settings.chatPanelWidth??ai}get leftCollapsed(){return!!R.local.settings.leftPanelCollapsed}async firstUpdated(){await R.initialized,await this.runDemoScript(),await ne.restoreTransportState(),Qr.hasApiKey||(this.showApiKeyDialog=!0),window.addEventListener("dragover",this.handleGlobalDragOver,!0),window.addEventListener("dragleave",this.handleGlobalDragLeave),window.addEventListener("drop",this.handleGlobalDrop,!0)}handleResizeStart(t,e){t.preventDefault(),this.dragTarget=e,this.dragStartX=t.clientX,e==="left"?this.dragStartSize=this.leftCollapsed?0:R.local.settings.leftPanelWidth??oi:this.dragStartSize=R.local.settings.chatPanelWidth??ai,t.currentTarget.classList.add("active"),this.classList.add("dragging"),window.addEventListener("pointermove",this.onWindowPointerMove),window.addEventListener("pointerup",this.onWindowPointerUp)}async handleImportShaderJson(t){try{const e=await t.text(),n=JSON.parse(e);if(!n.version||!n.functions){console.error("Invalid shader JSON: missing required fields");return}const r=t.name.replace(/\.json$/i,"");await ne.importWorkspaceFromIR(n,r)}catch(e){console.error("Failed to import shader JSON:",e)}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("dragover",this.handleGlobalDragOver,!0),window.removeEventListener("dragleave",this.handleGlobalDragLeave),window.removeEventListener("drop",this.handleGlobalDrop,!0),window.removeEventListener("pointermove",this.onWindowPointerMove),window.removeEventListener("pointerup",this.onWindowPointerUp)}async runDemoScript(){}async handleDownloadZip(){const t=R.local.settings.useZipExport;try{const e=R.database.ir,n=(e.meta.name||"NanoFFGL").replace(/\s+/g,"_");if(t){const r=new xc;await kc(r,{ir:e});const o=await r.generateZip();this.downloadBlob(o,"application/zip",`${n}_Build.zip`)}else{const r=(e.meta.name||"NanoFFGL").replace(/\s+/g,""),o=new $x({buildName:r});Fx(o),await kc(o,{ir:e});const a=await o.generateZip(),i=new xc;i.writeFile(`${n}.sh`,a),i.chmod(`${n}.sh`,"755");const s=await i.generateZip();this.downloadBlob(s,"application/zip",`${n}.zip`)}}catch(e){console.error("Failed to package plugin:",e)}}downloadBlob(t,e,n){const r=new Blob([t],{type:e}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=n,document.body.appendChild(a),a.click(),setTimeout(()=>{document.body.removeChild(a),URL.revokeObjectURL(o)},100)}handleDownloadShaderJson(){const t=R.database.ir,e=JSON.stringify(t,null,2),n=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r;const a=(t.meta.name||"shader").replace(/\s+/g,"_")+".json";o.download=a,document.body.appendChild(o),o.click(),setTimeout(()=>{document.body.removeChild(o),URL.revokeObjectURL(r)},100)}render(){const t=this.leftCollapsed&&this.dragTarget!=="left",e=this.dragTarget==="left";let n;e?n=Math.max(0,this.dragLeftWidth??0):t?n=0:n=this.dragLeftWidth??R.local.settings.leftPanelWidth??oi;const r=this.dragChatWidth??R.local.settings.chatPanelWidth??ai,a=`48px ${n}px ${t?0:5}px 1fr 5px ${r}px`;return Z`
      ${this.showApiKeyDialog?Z`
        <ui-api-key-dialog @close=${()=>this.showApiKeyDialog=!1}></ui-api-key-dialog>
      `:fe}

      <ui-title-bar @download-zip=${()=>this.handleDownloadZip()} @download-shader-json=${()=>this.handleDownloadShaderJson()}></ui-title-bar>

      <div class="main-area" style="grid-template-columns: ${a}">
        <ui-nav-bar></ui-nav-bar>
        <ui-left-panel></ui-left-panel>
        <div
          class="resize-handle"
          @pointerdown=${i=>this.handleResizeStart(i,"left")}
        ></div>
        <div class="viewport-wrapper">
          <ui-viewport .runtime=${ne.runtime}></ui-viewport>
        </div>
        <div
          class="resize-handle"
          @pointerdown=${i=>this.handleResizeStart(i,"chat")}
        ></div>
        <ui-chat-panel></ui-chat-panel>
      </div>

      <div class="global-drop-zone ${this.isGlobalDragging?"active":""}">
        Drop to Import
      </div>
    `}};Pn.styles=[Rt,We`
      :host {
        display: grid;
        grid-template-rows: auto 1fr;
        height: 100vh;
        width: 100vw;
        background-color: var(--app-bg);
        color: var(--app-text-main);
        font-family: monospace;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
      }

      .main-area {
        display: grid;
        overflow: hidden;
      }

      ui-left-panel {
        overflow: hidden;
      }

      .viewport-wrapper {
        min-width: 0;
        min-height: 0;
        padding: 24px;
        display: flex;
        overflow: hidden;
        background: #111;
      }

      ui-viewport {
        flex: 1;
        min-width: 0;
        min-height: 0;
        aspect-ratio: unset;
        border-radius: 6px;
      }

      .resize-handle {
        width: 5px;
        cursor: col-resize;
        background: transparent;
        position: relative;
        z-index: 10;
        flex-shrink: 0;
      }

      .resize-handle:hover,
      :host(.dragging) .resize-handle.active {
        background: var(--color-emerald-500);
        opacity: 0.4;
      }

      :host(.dragging) .resize-handle.active {
        opacity: 0.6;
      }

      .global-drop-zone {
        position: absolute;
        inset: 0;
        background: rgba(16, 185, 129, 0.1);
        border: 4px dashed var(--color-emerald-500);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .global-drop-zone.active {
        opacity: 1;
      }
    `];yo([Ee()],Pn.prototype,"isGlobalDragging",2);yo([Ee()],Pn.prototype,"showApiKeyDialog",2);yo([Ee()],Pn.prototype,"dragLeftWidth",2);yo([Ee()],Pn.prototype,"dragChatWidth",2);Pn=yo([tt("nano-app")],Pn);
//# sourceMappingURL=index-Bjy19503.js.map
