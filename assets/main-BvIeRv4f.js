const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/builder-C0dqNj5S.js","assets/stdlib-aBcQoNak.js","assets/codegen-wgsl-CST6uU3w.js","assets/nodes.ui-BaZRT1ph.js","assets/nodes.ui-D7LHLugG.js","assets/nodes.ui-dTlYe2bo.js","assets/nodes.ui-C4JwC42u.js","assets/magneto-editor-Bv5dVaBT.js","assets/orthomod-editor-DTOO9nkv.js","assets/sequencer-editor-7TyDEX8C.js","assets/generic-inspector-DVnL9dLT.js","assets/editor.main-D9a-OtFd.js","assets/editor-Dvl_Svmm.css"])))=>i.map(i=>d[i]);
import{c as Fu,o as j,m as Wn,a as zi,r as W,t as En,b as U,d as qt,e as jn,f as ka,i as pe,n as H,g as Xe,s as Sn,x as M,h as ke,D as rl,M as it,j as rt,T as Zc,k as Vu,l as zu}from"./stdlib-aBcQoNak.js";var ef=Symbol.for("immer-nothing"),al=Symbol.for("immer-draftable"),ie=Symbol.for("immer-state");function vt(i,...e){throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`)}var Hi=Object.getPrototypeOf;function ai(i){return!!i&&!!i[ie]}function nn(i){return i?tf(i)||Array.isArray(i)||!!i[al]||!!i.constructor?.[al]||so(i)||Ss(i):!1}var Hu=Object.prototype.constructor.toString(),ll=new WeakMap;function tf(i){if(!i||typeof i!="object")return!1;const e=Object.getPrototypeOf(i);if(e===null||e===Object.prototype)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(t===Object)return!0;if(typeof t!="function")return!1;let n=ll.get(t);return n===void 0&&(n=Function.toString.call(t),ll.set(t,n)),n===Hu}function qi(i,e,t=!0){xs(i)===0?(t?Reflect.ownKeys(i):Object.keys(i)).forEach(o=>{e(o,i[o],i)}):i.forEach((n,o)=>e(o,n,i))}function xs(i){const e=i[ie];return e?e.type_:Array.isArray(i)?1:so(i)?2:Ss(i)?3:0}function dr(i,e){return xs(i)===2?i.has(e):Object.prototype.hasOwnProperty.call(i,e)}function nf(i,e,t){const n=xs(i);n===2?i.set(e,t):n===3?i.add(t):i[e]=t}function qu(i,e){return i===e?i!==0||1/i===1/e:i!==i&&e!==e}function so(i){return i instanceof Map}function Ss(i){return i instanceof Set}function Ne(i){return i.copy_||i.base_}function ur(i,e){if(so(i))return new Map(i);if(Ss(i))return new Set(i);if(Array.isArray(i))return Array.prototype.slice.call(i);const t=tf(i);if(e===!0||e==="class_only"&&!t){const n=Object.getOwnPropertyDescriptors(i);delete n[ie];let o=Reflect.ownKeys(n);for(let s=0;s<o.length;s++){const r=o[s],a=n[r];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[r]={configurable:!0,writable:!0,enumerable:a.enumerable,value:i[r]})}return Object.create(Hi(i),n)}else{const n=Hi(i);if(n!==null&&t)return{...i};const o=Object.create(n);return Object.assign(o,i)}}function Ca(i,e=!1){return ks(i)||ai(i)||!nn(i)||(xs(i)>1&&Object.defineProperties(i,{set:go,add:go,clear:go,delete:go}),Object.freeze(i),e&&Object.values(i).forEach(t=>Ca(t,!0))),i}function Wu(){vt(2)}var go={value:Wu};function ks(i){return i===null||typeof i!="object"?!0:Object.isFrozen(i)}var pr={};function $n(i){const e=pr[i];return e||vt(0,i),e}function ju(i,e){pr[i]||(pr[i]=e)}var Wi;function Ko(){return Wi}function Uu(i,e){return{drafts_:[],parent_:i,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function cl(i,e){e&&($n("Patches"),i.patches_=[],i.inversePatches_=[],i.patchListener_=e)}function gr(i){mr(i),i.drafts_.forEach(Gu),i.drafts_=null}function mr(i){i===Wi&&(Wi=i.parent_)}function fl(i){return Wi=Uu(Wi,i)}function Gu(i){const e=i[ie];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function hl(i,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return i!==void 0&&i!==t?(t[ie].modified_&&(gr(e),vt(4)),nn(i)&&(i=Xo(e,i),e.parent_||Jo(e,i)),e.patches_&&$n("Patches").generateReplacementPatches_(t[ie].base_,i,e.patches_,e.inversePatches_)):i=Xo(e,t,[]),gr(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),i!==ef?i:void 0}function Xo(i,e,t){if(ks(e))return e;const n=i.immer_.shouldUseStrictIteration(),o=e[ie];if(!o)return qi(e,(s,r)=>dl(i,o,e,s,r,t),n),e;if(o.scope_!==i)return e;if(!o.modified_)return Jo(i,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const s=o.copy_;let r=s,a=!1;o.type_===3&&(r=new Set(s),s.clear(),a=!0),qi(r,(l,c)=>dl(i,o,s,l,c,t,a),n),Jo(i,s,!1),t&&i.patches_&&$n("Patches").generatePatches_(o,t,i.patches_,i.inversePatches_)}return o.copy_}function dl(i,e,t,n,o,s,r){if(o==null||typeof o!="object"&&!r)return;const a=ks(o);if(!(a&&!r)){if(ai(o)){const l=s&&e&&e.type_!==3&&!dr(e.assigned_,n)?s.concat(n):void 0,c=Xo(i,o,l);if(nf(t,n,c),ai(c))i.canAutoFreeze_=!1;else return}else r&&t.add(o);if(nn(o)&&!a){if(!i.immer_.autoFreeze_&&i.unfinalizedDrafts_<1||e&&e.base_&&e.base_[n]===o&&a)return;Xo(i,o),(!e||!e.scope_.parent_)&&typeof n!="symbol"&&(so(t)?t.has(n):Object.prototype.propertyIsEnumerable.call(t,n))&&Jo(i,o)}}}function Jo(i,e,t=!1){!i.parent_&&i.immer_.autoFreeze_&&i.canAutoFreeze_&&Ca(e,t)}function Yu(i,e){const t=Array.isArray(i),n={type_:t?1:0,scope_:e?e.scope_:Ko(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:i,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,s=Ma;t&&(o=[n],s=ji);const{revoke:r,proxy:a}=Proxy.revocable(o,s);return n.draft_=a,n.revoke_=r,a}var Ma={get(i,e){if(e===ie)return i;const t=Ne(i);if(!dr(t,e))return Ku(i,t,e);const n=t[e];return i.finalized_||!nn(n)?n:n===$s(i.base_,e)?(Fs(i),i.copy_[e]=Ui(n,i)):n},has(i,e){return e in Ne(i)},ownKeys(i){return Reflect.ownKeys(Ne(i))},set(i,e,t){const n=of(Ne(i),e);if(n?.set)return n.set.call(i.draft_,t),!0;if(!i.modified_){const o=$s(Ne(i),e),s=o?.[ie];if(s&&s.base_===t)return i.copy_[e]=t,i.assigned_[e]=!1,!0;if(qu(t,o)&&(t!==void 0||dr(i.base_,e)))return!0;Fs(i),Xt(i)}return i.copy_[e]===t&&(t!==void 0||e in i.copy_)||Number.isNaN(t)&&Number.isNaN(i.copy_[e])||(i.copy_[e]=t,i.assigned_[e]=!0),!0},deleteProperty(i,e){return $s(i.base_,e)!==void 0||e in i.base_?(i.assigned_[e]=!1,Fs(i),Xt(i)):delete i.assigned_[e],i.copy_&&delete i.copy_[e],!0},getOwnPropertyDescriptor(i,e){const t=Ne(i),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&{writable:!0,configurable:i.type_!==1||e!=="length",enumerable:n.enumerable,value:t[e]}},defineProperty(){vt(11)},getPrototypeOf(i){return Hi(i.base_)},setPrototypeOf(){vt(12)}},ji={};qi(Ma,(i,e)=>{ji[i]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ji.deleteProperty=function(i,e){return ji.set.call(this,i,e,void 0)};ji.set=function(i,e,t){return Ma.set.call(this,i[0],e,t,i[0])};function $s(i,e){const t=i[ie];return(t?Ne(t):i)[e]}function Ku(i,e,t){const n=of(e,t);return n?"value"in n?n.value:n.get?.call(i.draft_):void 0}function of(i,e){if(!(e in i))return;let t=Hi(i);for(;t;){const n=Object.getOwnPropertyDescriptor(t,e);if(n)return n;t=Hi(t)}}function Xt(i){i.modified_||(i.modified_=!0,i.parent_&&Xt(i.parent_))}function Fs(i){i.copy_||(i.copy_=ur(i.base_,i.scope_.immer_.useStrictShallowCopy_))}var Xu=class{constructor(i){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,t,n)=>{if(typeof e=="function"&&typeof t!="function"){const s=t;t=e;const r=this;return function(l=s,...c){return r.produce(l,f=>t.call(this,f,...c))}}typeof t!="function"&&vt(6),n!==void 0&&typeof n!="function"&&vt(7);let o;if(nn(e)){const s=fl(this),r=Ui(e,void 0);let a=!0;try{o=t(r),a=!1}finally{a?gr(s):mr(s)}return cl(s,n),hl(o,s)}else if(!e||typeof e!="object"){if(o=t(e),o===void 0&&(o=e),o===ef&&(o=void 0),this.autoFreeze_&&Ca(o,!0),n){const s=[],r=[];$n("Patches").generateReplacementPatches_(e,o,s,r),n(s,r)}return o}else vt(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(r,...a)=>this.produceWithPatches(r,l=>e(l,...a));let n,o;return[this.produce(e,t,(r,a)=>{n=r,o=a}),n,o]},typeof i?.autoFreeze=="boolean"&&this.setAutoFreeze(i.autoFreeze),typeof i?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(i.useStrictShallowCopy),typeof i?.useStrictIteration=="boolean"&&this.setUseStrictIteration(i.useStrictIteration)}createDraft(i){nn(i)||vt(8),ai(i)&&(i=Ju(i));const e=fl(this),t=Ui(i,void 0);return t[ie].isManual_=!0,mr(e),t}finishDraft(i,e){const t=i&&i[ie];(!t||!t.isManual_)&&vt(9);const{scope_:n}=t;return cl(n,e),hl(void 0,n)}setAutoFreeze(i){this.autoFreeze_=i}setUseStrictShallowCopy(i){this.useStrictShallowCopy_=i}setUseStrictIteration(i){this.useStrictIteration_=i}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(i,e){let t;for(t=e.length-1;t>=0;t--){const o=e[t];if(o.path.length===0&&o.op==="replace"){i=o.value;break}}t>-1&&(e=e.slice(t+1));const n=$n("Patches").applyPatches_;return ai(i)?n(i,e):this.produce(i,o=>n(o,e))}};function Ui(i,e){const t=so(i)?$n("MapSet").proxyMap_(i,e):Ss(i)?$n("MapSet").proxySet_(i,e):Yu(i,e);return(e?e.scope_:Ko()).drafts_.push(t),t}function Ju(i){return ai(i)||vt(10,i),sf(i)}function sf(i){if(!nn(i)||ks(i))return i;const e=i[ie];let t,n=!0;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=ur(i,e.scope_.immer_.useStrictShallowCopy_),n=e.scope_.immer_.shouldUseStrictIteration()}else t=ur(i,!0);return qi(t,(o,s)=>{nf(t,o,sf(s))},n),e&&(e.finalized_=!1),t}function Qu(){class i extends Map{constructor(l,c){super(),this[ie]={type_:2,parent_:c,scope_:c?c.scope_:Ko(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:l,draft_:this,isManual_:!1,revoked_:!1}}get size(){return Ne(this[ie]).size}has(l){return Ne(this[ie]).has(l)}set(l,c){const f=this[ie];return r(f),(!Ne(f).has(l)||Ne(f).get(l)!==c)&&(t(f),Xt(f),f.assigned_.set(l,!0),f.copy_.set(l,c),f.assigned_.set(l,!0)),this}delete(l){if(!this.has(l))return!1;const c=this[ie];return r(c),t(c),Xt(c),c.base_.has(l)?c.assigned_.set(l,!1):c.assigned_.delete(l),c.copy_.delete(l),!0}clear(){const l=this[ie];r(l),Ne(l).size&&(t(l),Xt(l),l.assigned_=new Map,qi(l.base_,c=>{l.assigned_.set(c,!1)}),l.copy_.clear())}forEach(l,c){const f=this[ie];Ne(f).forEach((h,d,u)=>{l.call(c,this.get(d),d,this)})}get(l){const c=this[ie];r(c);const f=Ne(c).get(l);if(c.finalized_||!nn(f)||f!==c.base_.get(l))return f;const h=Ui(f,c);return t(c),c.copy_.set(l,h),h}keys(){return Ne(this[ie]).keys()}values(){const l=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const c=l.next();return c.done?c:{done:!1,value:this.get(c.value)}}}}entries(){const l=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const c=l.next();if(c.done)return c;const f=this.get(c.value);return{done:!1,value:[c.value,f]}}}}[Symbol.iterator](){return this.entries()}}function e(a,l){return new i(a,l)}function t(a){a.copy_||(a.assigned_=new Map,a.copy_=new Map(a.base_))}class n extends Set{constructor(l,c){super(),this[ie]={type_:3,parent_:c,scope_:c?c.scope_:Ko(),modified_:!1,finalized_:!1,copy_:void 0,base_:l,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return Ne(this[ie]).size}has(l){const c=this[ie];return r(c),c.copy_?!!(c.copy_.has(l)||c.drafts_.has(l)&&c.copy_.has(c.drafts_.get(l))):c.base_.has(l)}add(l){const c=this[ie];return r(c),this.has(l)||(s(c),Xt(c),c.copy_.add(l)),this}delete(l){if(!this.has(l))return!1;const c=this[ie];return r(c),s(c),Xt(c),c.copy_.delete(l)||(c.drafts_.has(l)?c.copy_.delete(c.drafts_.get(l)):!1)}clear(){const l=this[ie];r(l),Ne(l).size&&(s(l),Xt(l),l.copy_.clear())}values(){const l=this[ie];return r(l),s(l),l.copy_.values()}entries(){const l=this[ie];return r(l),s(l),l.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(l,c){const f=this.values();let h=f.next();for(;!h.done;)l.call(c,h.value,h.value,this),h=f.next()}}function o(a,l){return new n(a,l)}function s(a){a.copy_||(a.copy_=new Set,a.base_.forEach(l=>{if(nn(l)){const c=Ui(l,a);a.drafts_.set(l,c),a.copy_.add(c)}else a.copy_.add(l)}))}function r(a){a.revoked_&&vt(3,JSON.stringify(Ne(a)))}ju("MapSet",{proxyMap_:e,proxySet_:o})}var br=new Xu,Vs=br.produce,Zu=br.setAutoFreeze.bind(br),Gi=(i=>(i.Auto="auto",i.Show="show",i.Hide="hide",i))(Gi||{});class ep{constructor(){this.nodes=new Map}register(e){this.nodes.set(e.id,e)}get(e){return this.nodes.get(e)?.definition}getNodeType(e){return this.nodes.get(e)}getAllNodeTypes(){return this.nodes.values()}}const Q=new ep;Qu();Zu(!1);Fu({enforceActions:"always",computedRequiresReaction:!0,reactionRequiresObservable:!1,observableRequiresReaction:!1});const Oi=i=>`${i}-${crypto.randomUUID()}`;class tp{constructor(e,t){this.controller=e,this.callbacks=t}applyAgain(e){e&&(this.callbacks.apply=e),this.controller.updateLongEdit(this)}cancel(){this.controller.cancelLongEdit(this)}accept(){this.controller.acceptLongEdit(this)}get isActive(){return this.controller.activeLongEdit===this}}function rf(i){const e=new Map,t=new Map;for(const n of Object.values(i.nodes))e.set(n.id,[]),t.set(n.id,[]);for(const n of Object.values(i.connections))e.get(n.fromNodeId)?.push(n.id),t.get(n.toNodeId)?.push(n.id);return{outgoingConnections:e,incomingConnections:t}}class np{constructor(e){this.undoStack=[],this.redoStack=[],this.isTransactionActive=!1,this.bufferedMutations=[],this.draftState=null,this.activeLongEdit=null,this.longEditMutations=[],this.isLongEditApplying=!1,this.compiledGraphDirtyListeners=[],this.configChangeListeners=[],this.inputUpdateListeners=[],this.graphResetListeners=[],this.inferredTypesUpdateListeners=[];const t=e||{nodes:{},connections:{}};this.currentState={graph:{inner:t,auxiliary:rf(t)}},this.observableState=j(this.currentState),Wn(this,{observableState:j,undoStack:j,redoStack:j,canUndo:zi,canRedo:zi})}setMetricsProvider(e){this.metricsProvider=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}getState(){return this.isTransactionActive&&this.draftState?this.draftState:this.currentState}onCompiledGraphDirty(e){return this.compiledGraphDirtyListeners.push(e),()=>{this.compiledGraphDirtyListeners=this.compiledGraphDirtyListeners.filter(t=>t!==e)}}onConfigChange(e){return this.configChangeListeners.push(e),()=>{this.configChangeListeners=this.configChangeListeners.filter(t=>t!==e)}}onInputUpdate(e){return this.inputUpdateListeners.push(e),()=>{this.inputUpdateListeners=this.inputUpdateListeners.filter(t=>t!==e)}}onGraphReset(e){return this.graphResetListeners.push(e),()=>{this.graphResetListeners=this.graphResetListeners.filter(t=>t!==e)}}onInferredTypesUpdate(e){return this.inferredTypesUpdateListeners.push(e),()=>{this.inferredTypesUpdateListeners=this.inferredTypesUpdateListeners.filter(t=>t!==e)}}dispatch(e,t=!1){if(e.length===0)return;if(this.isTransactionActive){this.bufferedMutations.push(...e),this.applyMutations(this.draftState,e);return}if(this.isLongEditApplying){this.applyMutationsToObservable(e),this.longEditMutations.push(...e),this.notifyListeners(e);return}if(this.activeLongEdit){if(this.longEditMutations.length>0){const s=this.createInverse(this.longEditMutations);this.applyMutationsToObservable(s)}const o=Vs(this.currentState,s=>{this.applyMutations(s,e)});if(o!==this.currentState&&(this.currentState=o,this.applyMutationsToObservable(e),!t)){const s=e.filter(r=>r.type!=="graph.updateInferredTypes");if(s.length>0){const r=this.createInverse(s);W(()=>{this.undoStack.push(r),this.redoStack=[]})}}this.longEditMutations=[],this.isLongEditApplying=!0;try{this.activeLongEdit.callbacks.apply(this)}finally{this.isLongEditApplying=!1}this.notifyListeners(e);return}const n=Vs(this.currentState,o=>{this.applyMutations(o,e)});if(n!==this.currentState&&(this.currentState=n,this.applyMutationsToObservable(e),!t)){const o=e.filter(s=>s.type!=="graph.updateInferredTypes");if(o.length>0){const s=this.createInverse(o);W(()=>{this.undoStack.push(s),this.redoStack=[]})}}this.notifyListeners(e)}notifyListeners(e){let t=!1;const n=new Set,o=[];for(const s of e)switch(s.type){case"node.create":case"node.delete":case"connection.create":case"connection.delete":case"connection.setPorts":case"graph.recompile":t=!0;break;case"graph.configUpdate":s.nodeIds.forEach(a=>n.add(a));break;case"graph.inputUpdate":o.push({nodeId:s.nodeId,inputs:s.inputs});break;case"node.setConfig":const r=Object.keys(s.to);r.length===1&&r[0]==="values"&&s.to.values?o.push({nodeId:s.nodeId,inputs:s.to.values}):s.to.typeId?t=!0:(("regionX"in s.to||"regionY"in s.to||"width"in s.to||"height"in s.to||"visibility"in s.to)&&(t=!0),n.add(s.nodeId));break;case"node.move":if(!t){const a=this.currentState.graph.inner,l=Object.values(a.nodes).filter(c=>{const f=Q.get(c.config.typeId);return f&&f.getRegion});if(l.length>0)for(const c of s.moves){const f=(p,g)=>{for(const m of l){if(m.id===c.nodeId)continue;const y=Q.get(m.config.typeId).getRegion(m.config),x=m.x+y.x,v=m.y+y.y,C=x+y.width,k=v+y.height;if(p>=x&&p<C&&g>=v&&g<k)return m.id}return null},h=f(c.from.x,c.from.y),d=f(c.to.x,c.to.y);if(h!==d){t=!0;break}const u=Q.get(a.nodes[c.nodeId]?.config.typeId);if(u&&u.getRegion){const p=u.getRegion(a.nodes[c.nodeId].config),g=(m,b,y,x)=>m>=y&&m<y+p.width&&b>=x&&b<x+p.height;for(const m of Object.values(a.nodes)){if(m.id===c.nodeId)continue;const b=g(m.x,m.y,c.from.x+p.x,c.from.y+p.y),y=g(m.x,m.y,c.to.x+p.x,c.to.y+p.y);if(b!==y){t=!0;break}}}if(t)break}}break}if(t)for(const s of this.compiledGraphDirtyListeners)try{s()}catch(r){console.error(r)}if(n.size>0){const s=Array.from(n);for(const r of this.configChangeListeners)try{r(s)}catch(a){console.error(a)}}if(o.length>0)for(const s of this.inputUpdateListeners)try{s(o)}catch(r){console.error(r)}for(const s of e)if(s.type==="graph.updateInferredTypes"){for(const r of this.inferredTypesUpdateListeners)try{r(s.inferredTypes)}catch(a){console.error(a)}break}}transaction(e){this.isTransactionActive=!0,this.bufferedMutations=[],this.draftState=JSON.parse(JSON.stringify(this.currentState,(t,n)=>n instanceof Map||n instanceof Set?Array.from(n.entries()):n)),this.draftState&&(this.draftState.graph.auxiliary.incomingConnections=new Map(this.draftState.graph.auxiliary.incomingConnections),this.draftState.graph.auxiliary.outgoingConnections=new Map(this.draftState.graph.auxiliary.outgoingConnections));try{e(this);const t=[...this.bufferedMutations];this.isTransactionActive=!1,this.bufferedMutations=[],this.draftState=null,this.dispatch(t)}catch(t){throw this.isTransactionActive=!1,this.bufferedMutations=[],this.draftState=null,t}}beginLongEdit(e){this.activeLongEdit&&this.activeLongEdit.cancel();const t=new tp(this,e);return this.activeLongEdit=t,this.updateLongEdit(t),t}updateLongEdit(e){if(this.activeLongEdit===e){if(this.longEditMutations.length>0){const t=this.createInverse(this.longEditMutations);this.applyMutationsToObservable(t),this.longEditMutations=[]}this.isLongEditApplying=!0;try{e.callbacks.apply(this)}finally{this.isLongEditApplying=!1}}}cancelLongEdit(e){if(this.activeLongEdit===e){if(this.longEditMutations.length>0){const t=this.createInverse(this.longEditMutations);this.applyMutationsToObservable(t),this.longEditMutations=[]}this.activeLongEdit=null,e.callbacks.cancel&&e.callbacks.cancel(),e.callbacks.complete&&e.callbacks.complete()}}acceptLongEdit(e){if(this.activeLongEdit!==e)return;const t=[...this.longEditMutations],n=Vs(this.currentState,s=>{this.applyMutations(s,t)});this.currentState=n;const o=this.createInverse(t);W(()=>{this.undoStack.push(o),this.redoStack=[]}),this.activeLongEdit=null,this.longEditMutations=[],e.callbacks.accept&&e.callbacks.accept(),e.callbacks.complete&&e.callbacks.complete()}createNode(e,t,n,o){const s=o?.id||Oi("node"),{id:r,...a}=o||{},l=Q.getNodeType(e),c={};if(l?.definition.kind==="primitive"){const h=l.definition.configType;if(h&&h.kind==="record"){const d=h.fields||{};for(const[u,p]of Object.entries(d))p&&typeof p=="object"&&"defaultValue"in p&&(c[u]=p.defaultValue)}}const f={id:s,x:t,y:n,config:{typeId:e,name:"#",values:{},...c,...a}};return this.dispatch([{type:"node.create",node:f},{type:"graph.recompile"}]),f}deleteNode(e){const t=this.getState(),n=t.graph.inner.nodes[e];if(!n)return;const o=[];for(const s of Object.values(t.graph.inner.connections))(s.fromNodeId===e||s.toNodeId===e)&&o.push({type:"connection.delete",connection:s});o.push({type:"node.delete",node:n}),o.push({type:"graph.recompile"}),this.dispatch(o)}createConnection(e,t,n,o){const s={id:Oi("conn"),fromNodeId:e,fromPort:t,toNodeId:n,toPort:o};return this.dispatch([{type:"connection.create",connection:s},{type:"graph.recompile"}]),s}deleteConnection(e){const t=this.getState().graph.inner.connections[e];t&&this.dispatch([{type:"connection.delete",connection:t},{type:"graph.recompile"}])}duplicateNodes(e,t={x:0,y:0}){const n=this.getState(),o=[],s=new Map,r=[];for(const l of e){const c=n.graph.inner.nodes[l];if(!c)continue;const f=Oi("node");o.push(f),s.set(l,f);const h={...c,id:f,x:c.x+t.x,y:c.y+t.y,config:JSON.parse(JSON.stringify(c.config))};r.push({type:"node.create",node:h})}const a=Object.values(n.graph.inner.connections).filter(l=>e.includes(l.fromNodeId)&&e.includes(l.toNodeId));for(const l of a){const c=s.get(l.fromNodeId),f=s.get(l.toNodeId);if(c&&f){const h={id:Oi("conn"),fromNodeId:c,fromPort:l.fromPort,toNodeId:f,toPort:l.toPort};r.push({type:"connection.create",connection:h})}}return r.length>0&&(r.push({type:"graph.recompile"}),this.dispatch(r)),o}calculateConstrainedMove(e,t,n){const o=this.getState();let s=t,r=n;const a=e.map(c=>o.graph.inner.nodes[c]).filter(c=>!!c);if(a.some(c=>c.config.typeId==="io.input"||c.config.typeId==="io.output"))s=0;else for(const c of a){const f=c.x+s;f<0?s=0-c.x:f>50&&(s=50-c.x)}return{dx:s,dy:r}}moveNodes(e,t,n){const o=this.getState(),s=new Map,r=[],a=(f,h,d)=>{r.push({id:f,dx:h,dy:d});const u=o.graph.inner.nodes[f];if(u){const p=Q.getNodeType(u.config.typeId),g=p?.getChildren?p.getChildren(u,o.graph.inner.nodes):[];for(const m of g)a(m,h,d)}};for(const f of e)o.graph.inner.nodes[f]&&a(f,t,n);let l=0;for(;r.length>0&&l<5e3;){const f=r.shift();if(l++,s.has(f.id))continue;const h=o.graph.inner.nodes[f.id];if(!h)continue;const d={x:h.x,y:h.y},u={x:h.x+f.dx,y:h.y+f.dy};s.set(f.id,{nodeId:f.id,from:d,to:u});for(const p of Object.values(o.graph.inner.nodes)){if(p.id===f.id||s.has(p.id))continue;const g=Q.getNodeType(p.config.typeId);if(g?.getRegion){const m=g.getRegion(p.config),b=this.metricsProvider?this.metricsProvider.isRegionCollapsed(p.id):m.visibility===Gi.Hide;if(m&&b){const y=p.x+(m.x||0),x=p.y+(m.y||0);u.x>=y&&u.x<y+m.width&&u.y>=x&&u.y<x+m.height&&a(p.id,f.dx,f.dy)}}p.x===u.x&&p.y===u.y&&a(p.id,f.dx,f.dy)}}const c=Array.from(s.values()).map(f=>({nodeId:f.nodeId,from:f.from,to:f.to}));this.dispatch([{type:"node.move",moves:c}])}insertSpace(e,t,n=1){const o=this.getState(),s=[];for(const r of Object.values(o.graph.inner.nodes))(e==="x"&&r.x>t||e==="y"&&r.y>t)&&s.push(r.id);s.length>0&&this.moveNodes(s,e==="x"?n:0,e==="y"?n:0)}setNodeConfig(e,t,n={}){const o=this.getState(),s={},r={},a=o.graph.inner.nodes[e];if(a){for(const l in t)if(Object.prototype.hasOwnProperty.call(t,l)){const c=t[l],f=a.config[l];c!==f&&(s[l]=f,r[l]=c)}}Object.keys(r).length>0&&this.dispatch([{type:"node.setConfig",nodeId:e,from:s,to:r}],n.skipHistory)}commitConfigHistory(e,t,n){const o={type:"node.setConfig",nodeId:e,from:n,to:t};W(()=>{this.undoStack.push([o]),this.redoStack=[]})}setConnectionPorts(e,t){const o=this.getState().graph.inner.connections[e];if(!o)return;const s={fromPort:o.fromPort,toPort:o.toPort},r={fromPort:t.fromPort??o.fromPort,toPort:t.toPort??o.toPort};this.dispatch([{type:"connection.setPorts",connectionId:e,from:s,to:r},{type:"graph.recompile"}])}setConnectionConfig(e,t){}clear(){const e=this.getState(),t=[];for(const n of Object.values(e.graph.inner.connections))t.push({type:"connection.delete",connection:n});for(const n of Object.values(e.graph.inner.nodes))t.push({type:"node.delete",node:n});t.push({type:"graph.recompile"}),this.dispatch(t);for(const n of this.graphResetListeners)try{n()}catch(o){console.error(o)}}loadGraph(e){this.clear();const t=[];for(const n of Object.values(e.nodes))t.push({type:"node.create",node:n});for(const n of Object.values(e.connections))t.push({type:"connection.create",connection:n});t.push({type:"graph.recompile"}),e.inferredNodeTypes&&t.push({type:"graph.updateInferredTypes",inferredTypes:e.inferredNodeTypes}),this.dispatch(t),W(()=>{this.undoStack=[],this.redoStack=[]})}undo(){let e;if(W(()=>{e=this.undoStack.pop()}),e){const t=this.createInverse(e);W(()=>{this.redoStack.push(t)}),this.dispatch(e,!0)}}redo(){let e;if(W(()=>{e=this.redoStack.pop()}),e){const t=this.createInverse(e);W(()=>{this.undoStack.push(t)}),this.dispatch(e,!0)}}applyMutations(e,t){for(const n of t)switch(n.type){case"node.create":e.graph.inner.nodes[n.node.id]=n.node,e.graph.auxiliary.outgoingConnections.set(n.node.id,[]),e.graph.auxiliary.incomingConnections.set(n.node.id,[]);break;case"node.delete":delete e.graph.inner.nodes[n.node.id],e.graph.auxiliary.outgoingConnections.delete(n.node.id),e.graph.auxiliary.incomingConnections.delete(n.node.id),e.graph.inner.inferredNodeTypes&&delete e.graph.inner.inferredNodeTypes[n.node.id];break;case"connection.create":e.graph.inner.connections[n.connection.id]=n.connection,e.graph.auxiliary.outgoingConnections.get(n.connection.fromNodeId)?.push(n.connection.id),e.graph.auxiliary.incomingConnections.get(n.connection.toNodeId)?.push(n.connection.id);break;case"connection.delete":const o=n.connection;delete e.graph.inner.connections[o.id];const s=e.graph.auxiliary.outgoingConnections.get(o.fromNodeId);if(s){const a=s.indexOf(o.id);a>-1&&s.splice(a,1)}const r=e.graph.auxiliary.incomingConnections.get(o.toNodeId);if(r){const a=r.indexOf(o.id);a>-1&&r.splice(a,1)}break;case"node.move":for(const a of n.moves)e.graph.inner.nodes[a.nodeId]&&(e.graph.inner.nodes[a.nodeId].x=a.to.x,e.graph.inner.nodes[a.nodeId].y=a.to.y);break;case"node.setConfig":e.graph.inner.nodes[n.nodeId]&&(e.graph.inner.nodes[n.nodeId].config={...e.graph.inner.nodes[n.nodeId].config,...n.to});break;case"connection.setPorts":e.graph.inner.connections[n.connectionId]&&(n.to.fromPort!==void 0&&(e.graph.inner.connections[n.connectionId].fromPort=n.to.fromPort),n.to.toPort!==void 0&&(e.graph.inner.connections[n.connectionId].toPort=n.to.toPort));break;case"graph.recompile":break;case"graph.configUpdate":break;case"graph.inputUpdate":break;case"graph.updateInferredTypes":e.graph.inner.inferredNodeTypes=n.inferredTypes;break}}applyMutationsToObservable(e){W(()=>{this.applyMutations(this.observableState,e)})}createInverse(e){const t=[];for(const n of e)switch(n.type){case"node.create":t.push({type:"node.delete",node:n.node});break;case"node.delete":t.push({type:"node.create",node:n.node});break;case"connection.create":t.push({type:"connection.delete",connection:n.connection});break;case"connection.delete":t.push({type:"connection.create",connection:n.connection});break;case"node.move":t.push({type:"node.move",moves:n.moves.map(s=>({...s,from:s.to,to:s.from}))});break;case"node.setConfig":t.push({type:"node.setConfig",nodeId:n.nodeId,from:n.to,to:n.from});break;case"connection.setPorts":t.push({type:"connection.setPorts",connectionId:n.connectionId,from:n.to,to:n.from});break;case"connection.setConfig":t.push({type:"connection.setConfig",connectionId:n.connectionId,from:n.to,to:n.from});break;case"graph.recompile":t.push({type:"graph.recompile"});break;case"graph.configUpdate":t.push({type:"graph.configUpdate",nodeIds:n.nodeIds});break;case"graph.inputUpdate":const o=e.find(s=>s.type==="node.setConfig"&&s.nodeId===s.nodeId);o&&o.from&&o.from.values?t.push({type:"graph.inputUpdate",nodeId:n.nodeId,inputs:o.from.values}):t.push({type:"graph.configUpdate",nodeIds:[n.nodeId]});break;default:console.warn(`Inverse for mutation type ${n.type} not implemented.`);break}return t.reverse()}}const yr=(i,e)=>e.some(t=>i instanceof t);let ul,pl;function ip(){return ul||(ul=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function op(){return pl||(pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vr=new WeakMap,zs=new WeakMap,Cs=new WeakMap;function sp(i){const e=new Promise((t,n)=>{const o=()=>{i.removeEventListener("success",s),i.removeEventListener("error",r)},s=()=>{t(Rn(i.result)),o()},r=()=>{n(i.error),o()};i.addEventListener("success",s),i.addEventListener("error",r)});return Cs.set(e,i),e}function rp(i){if(vr.has(i))return;const e=new Promise((t,n)=>{const o=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",r),i.removeEventListener("abort",r)},s=()=>{t(),o()},r=()=>{n(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",s),i.addEventListener("error",r),i.addEventListener("abort",r)});vr.set(i,e)}let wr={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return vr.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rn(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function af(i){wr=i(wr)}function ap(i){return op().includes(i)?function(...e){return i.apply(xr(this),e),Rn(this.request)}:function(...e){return Rn(i.apply(xr(this),e))}}function lp(i){return typeof i=="function"?ap(i):(i instanceof IDBTransaction&&rp(i),yr(i,ip())?new Proxy(i,wr):i)}function Rn(i){if(i instanceof IDBRequest)return sp(i);if(zs.has(i))return zs.get(i);const e=lp(i);return e!==i&&(zs.set(i,e),Cs.set(e,i)),e}const xr=i=>Cs.get(i);function cp(i,e,{blocked:t,upgrade:n,blocking:o,terminated:s}={}){const r=indexedDB.open(i,e),a=Rn(r);return n&&r.addEventListener("upgradeneeded",l=>{n(Rn(r.result),l.oldVersion,l.newVersion,Rn(r.transaction),l)}),t&&r.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),o&&l.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fp=["get","getKey","getAll","getAllKeys","count"],hp=["put","add","delete","clear"],Hs=new Map;function gl(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Hs.get(e))return Hs.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,o=hp.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(o||fp.includes(t)))return;const s=async function(r,...a){const l=this.transaction(r,o?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),o&&l.done]))[0]};return Hs.set(e,s),s}af(i=>({...i,get:(e,t,n)=>gl(e,t)||i.get(e,t,n),has:(e,t)=>!!gl(e,t)||i.has(e,t)}));const dp=["continue","continuePrimaryKey","advance"],ml={},Sr=new WeakMap,lf=new WeakMap,up={get(i,e){if(!dp.includes(e))return i[e];let t=ml[e];return t||(t=ml[e]=function(...n){Sr.set(this,lf.get(this)[e](...n))}),t}};async function*pp(...i){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...i)),!e)return;e=e;const t=new Proxy(e,up);for(lf.set(t,e),Cs.set(t,xr(e));e;)yield t,e=await(Sr.get(t)||e.continue()),Sr.delete(t)}function bl(i,e){return e===Symbol.asyncIterator&&yr(i,[IDBIndex,IDBObjectStore,IDBCursor])||e==="iterate"&&yr(i,[IDBIndex,IDBObjectStore])}af(i=>({...i,get(e,t,n){return bl(e,t)?pp:i.get(e,t,n)},has(e,t){return bl(e,t)||i.has(e,t)}}));const gp="nano-repatch-settings",mo="settings",mp=1;class bp{constructor(){this.dbPromise=null,typeof indexedDB<"u"&&typeof IDBRequest<"u"&&(this.dbPromise=cp(gp,mp,{upgrade(e){e.objectStoreNames.contains(mo)||e.createObjectStore(mo)}}))}async saveSettings(e){if(this.dbPromise)try{await(await this.dbPromise).put(mo,e,"localSettings")}catch(t){console.error("Error saving settings:",t)}}async loadSettings(){if(!this.dbPromise)return null;try{return await(await this.dbPromise).get(mo,"localSettings")||null}catch(e){return console.error("Error loading settings:",e),null}}}const yl=new bp,Aa=80,cf=16,Kt=24,vl=24,yp=16,vp=8,ff=8,hf=3,Ho=Aa,kr=Aa*2+cf,Qo=Aa*3+cf*2,ce=Qo-yp*2,wp=38,wl=-9,qs=0,xp=6,xl=3;function Yi(i,e){return i.alwaysShowInputEditor?!0:!(e||i.suppressInputEditor)}function Sp(i){return 26+i*24+12}function Cr(i,e,t,n,o){if(o&&(o.typeId==="io.input"||o.typeId==="io.output"||o.typeId==="resolume.input"||o.typeId==="resolume.output"))return"pill";let s=!1;for(const r of i){const a=t.has(r.name);if(Yi(r,a)){s=!0;break}}return!s&&!n?i.length<=1&&e.length<=1?"minimal":"compressed":"normal"}function kp(i,e,t,n,o){if(!i)return 80;let s=e?.inputs||[],r=e?.outputs||[];n&&(s=n),o&&(r=o);let a=0;s.forEach(p=>{const g=t.has(p.name);let m=24;(p.alwaysShowInputEditor||!g&&!p.suppressInputEditor)&&(e?.getInputEditorHeight?m=e.getInputEditorHeight(i,p.name):i.config.typeId==="debug.scope"&&p.name==="value"&&(m=96)),a+=m});const l=r.length*24,c=Math.max(a,l,24);let h=e?.getBodyHeight?.(i)||0;h===0&&(e?.renderBody||e?.ui?.body)&&(h=96);let d=!1;for(const p of s){const g=t.has(p.name);if(p.alwaysShowInputEditor||!g&&!p.suppressInputEditor){d=!0;break}}const u=h>0;return!d&&!u&&s.length<=1&&r.length<=1?80:i&&(i.config.typeId==="io.input"||i.config.typeId==="io.output"||i.config.typeId==="resolume.input"||i.config.typeId==="resolume.output")?40:24+c+8+h}var Cp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,Le=(i,e,t,n)=>{for(var o=Mp(e,t),s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=r(e,t,o)||o);return o&&Cp(e,t,o),o};class Te{constructor(e){this.appController=e,this.observableState=j({selection:new Map,queuedSelection:new Set,lastGroupSelection:null,inflightPortConnectionOperation:null,loadedSubgraphs:new Map,nodeUIStates:new Map,compiledNodeConfigs:new Map,wireLayout:{wires:{},segments:[]},layoutVersion:0,inferredNodeTypes:new Map,effectiveNodeTypes:new Map,viewport:{x:0,y:0,w:0,h:0},dragPreview:null,clipboard:null,gridMetrics:{cells:new Map,columns:new Map,columnWidths:new Map,rows:new Map,rowOffsets:new Map,colOffsets:new Map,boundingBox:{width:0,height:0},regions:new Map},localSettings:{showDebugValues:!1,activeTab:null,enableResolumeIO:!1,beatSyncResolumeControlEnabled:!1,areRegionsExpanded:!0,beatSyncAudioDeviceId:null,beatSyncSystemEnabled:!1,beatSyncHardSyncEnabled:!1,beatSyncResyncMidiMapping:null},isDraggingSelection:!1,altKeyPressed:!1}),Wn(this),this.layoutWorker=new Worker(new URL("/assets/wire-layout.worker-80sQ2dZk.js",import.meta.url),{type:"module"}),this.layoutWorker.onmessage=t=>{const{type:n,layout:o}=t.data;n==="LAYOUT_RESULT"&&W(()=>{this.observableState.wireLayout=o,this.observableState.layoutVersion++})},this.settingsLoaded=this.loadSettings()}initializeInferredTypes(e){e.inner.inferredNodeTypes&&W(()=>{for(const[t,n]of Object.entries(e.inner.inferredNodeTypes))this.observableState.inferredNodeTypes.set(t,n),this.recomputeEffectivePorts(t,e.inner.nodes[t]?.config.typeId)})}updateInferredTypes(e,t){for(const[n,o]of Object.entries(e)){this.observableState.inferredNodeTypes.set(n,o);const s=t(n);s&&this.recomputeEffectivePorts(n,s)}}recomputeEffectivePorts(e,t){if(!t)return;const n=Q.getNodeType(t),o=this.observableState.inferredNodeTypes.get(e);let s=n?.inputs?[...n.inputs]:[],r=n?.outputs?[...n.outputs]:[];if(o&&o.outputs&&o.outputs.kind==="record"&&o.outputs.fields){const a=o.outputs.fields;Object.keys(a).length>0&&(r=Object.entries(a).map(([l,c])=>{const f=n?.outputs?.find(h=>h.name===l);return{name:l,type:c,description:f?.description||l,...f}}))}if(o&&o.inputs&&o.inputs.kind==="record"&&o.inputs.fields){const a=o.inputs.fields;Object.keys(a).length>0?s=Object.entries(a).map(([l,c])=>{const f=n?.inputs?.find(h=>h.name===l);return c?{name:l,type:c,description:f?.description||l,defaultValue:c.defaultValue??f?.defaultValue,...f}:(console.warn(`[LocalController] Inferred input '${l}' for node '${e}' has undefined type.`),{name:l,type:{kind:"atomic",type:"any"},description:f?.description||l,defaultValue:f?.defaultValue,...f})}):s=[]}n?.inputs&&s.sort((a,l)=>{const c=n.inputs.findIndex(h=>h.name===a.name),f=n.inputs.findIndex(h=>h.name===l.name);return c!==-1&&f!==-1?c-f:c!==-1?-1:f!==-1?1:0}),this.observableState.effectiveNodeTypes.set(e,{inputs:s,outputs:r})}async loadSettings(){const e=await yl.loadSettings();e&&W(()=>{this.observableState.localSettings={...this.observableState.localSettings,...e}})}saveSettings(){yl.saveSettings(En(this.observableState.localSettings))}updateWireLayout(e){const{nodes:t,connections:n}=e.inner;this.updateGridMetrics(e);const o=this.observableState.gridMetrics.boundingBox.width,s=l=>l.config.typeId==="io.input"||l.config.typeId==="resolume.input"?-1:l.config.typeId==="io.output"||l.config.typeId==="resolume.output"?Math.max(o+hf,ff):l.x,r=Object.values(t).map(l=>{let c=1;const f=this.observableState.effectiveNodeTypes.get(l.id);if(f)c=Math.max(f.inputs.length,f.outputs.length);else{const h=Q.getNodeType(l.config.typeId);if(h){const d=h.inputs?.length||0,u=h.outputs?.length||0;c=Math.max(d,u)}}return{x:s(l),y:l.y,height:c+1}}),a=Object.values(n).map(l=>{const c=t[l.fromNodeId],f=t[l.toNodeId];if(!c||!f)return null;let h=1,d=1;const u=(C,k,S)=>{const A=this.observableState.effectiveNodeTypes.get(C.id);if(!A){const O=Q.getNodeType(C.config.typeId),L=S?O?.inputs:O?.outputs;if(L){const F=L.findIndex($=>$.name===k);if(F!==-1)return F}const D=parseInt(k,10);return isNaN(D)?-1:D}return(S?A.inputs:A.outputs).findIndex(O=>O.name===k)},p=u(c,l.fromPort.toString(),!1),g=u(f,l.toPort.toString(),!0),m=C=>{const k=this.observableState.gridMetrics.rows.get(C.y)||80,S=this.observableState.gridMetrics.cells.get(`${C.x},${C.y}`),A=S?S.height:80;return k>A?(k-A)/2:0},b=m(c),y=m(f);return h=(p===-1?0:p)+Math.round((b+23)/24),d=(g===-1?0:g)+Math.round((y+23)/24),{id:l.id,start:{x:s(c),y:c.y},end:{x:s(f),y:f.y},fromPort:l.fromPort.toString(),toPort:l.toPort.toString(),startOffset:h,endOffset:d}}).filter(l=>l!==null);this.layoutWorker.postMessage({type:"LAYOUT_REQUEST",wires:a,options:{obstacles:r}})}updateGridMetrics(e){const{nodes:t,connections:n}=e.inner,o={cells:new Map,columns:new Map,columnWidths:new Map,rows:new Map,rowOffsets:new Map,colOffsets:new Map,boundingBox:{width:0,height:0},regions:new Map},s=new Map,r=new Map,a=new Map,l=p=>(s.has(p)||s.set(p,{regionCount:0,collapsedCount:0,contentCount:0}),s.get(p)),c=p=>(r.has(p)||r.set(p,{regionCount:0,collapsedCount:0,contentCount:0}),r.get(p)),f=new Map;let h=0,d=0;Object.values(t).forEach(p=>{p.config.typeId!=="io.output"&&p.config.typeId!=="resolume.output"&&(p.x>h&&(h=p.x),p.y>d&&(d=p.y));const g=Q.getNodeType(p.config.typeId);if(g?.getRegion){const m=g.getRegion(p.config);if(m){const b=p.x+(m.x??0),y=p.y+(m.y??0),{width:x,height:v}=m,C=m.visibility===Gi.Hide||m.visibility===Gi.Auto&&!this.observableState.localSettings.areRegionsExpanded;f.set(p.id,{x:b,y,width:x,height:v,isCollapsed:C});const k=b+x-1,S=y+v-1;k>h&&(h=k),S>d&&(d=S);for(let A=b;A<b+x;A++){const I=c(A);for(let O=y;O<y+v;O++){if(A===p.x&&O===p.y)continue;const L=l(O);L.regionCount++,I.regionCount++,C&&(L.collapsedCount++,I.collapsedCount++,a.has(O)||a.set(O,new Set),a.get(O).add(A))}}}}}),o.boundingBox={width:h,height:d},o.regions=f,Object.values(t).forEach(p=>{a.get(p.y)?.has(p.x)||(l(p.y).contentCount++,c(p.x).contentCount++)});const u=new Map;Object.values(n).forEach(p=>{u.has(p.toNodeId)||u.set(p.toNodeId,new Set),u.get(p.toNodeId).add(p.toPort.toString())}),Object.values(t).forEach(p=>{const g=p.x,m=p.y,b=`${g},${m}`,y=Q.getNodeType(p.config.typeId),x=this.observableState.effectiveNodeTypes.get(p.id);let v=x?.inputs||(y?.inputs?[...y.inputs]:[]),C=x?.outputs||(y?.outputs?[...y.outputs]:[]);const k=u.get(p.id)||new Set,S=!!(y?.renderBody||y?.ui?.body),A=Cr(v,C,k,S,p.config);let I=Qo;const O=!!y?.getRegion;p.config.width&&!O?I=p.config.width:A==="minimal"?I=Ho:A==="compressed"||A==="pill"?I=kr:I=Qo;const L=a.get(p.y)?.has(p.x),D=kp(p,y,k,v,C);o.cells.set(b,{width:I,height:D,visualState:A,portInputCount:v.length,portOutputCount:C.length,isHidden:L});const F=o.columnWidths.get(g)||0;I>F&&o.columnWidths.set(g,I);const $=o.columns.get(g)||"minimal";A==="normal"?o.columns.set(g,"normal"):A==="compressed"&&$!=="normal"?o.columns.set(g,"compressed"):A==="minimal"&&!o.columns.has(g)&&o.columns.set(g,"minimal");const z=o.rows.get(m)||0;D>z&&o.rows.set(m,D)});try{const p=Math.max(...Array.from(o.rows.keys()),...Array.from(s.keys()),-1);for(let y=0;y<=p;y++){const x=s.get(y);let v=!1;x&&x.contentCount===0&&x.regionCount>0&&x.regionCount===x.collapsedCount&&(v=!0),v&&o.rows.set(y,0)}const g=Math.max(...Array.from(o.columnWidths.keys()),...Array.from(r.keys()),-1);for(let y=0;y<=g;y++){const x=r.get(y);let v=!1;x&&x.contentCount===0&&x.regionCount>0&&x.regionCount===x.collapsedCount&&(v=!0),v&&o.columnWidths.set(y,0)}let m=16;for(let y=0;y<=p;y++){o.rowOffsets.set(y,m);let x=o.rows.get(y);x===void 0&&(x=80);const v=x>0?16:0;m+=x+v}let b=96;for(let y=0;y<=g;y++){o.colOffsets.set(y,b);let x=o.columnWidths.get(y);x===void 0&&(x=80);const v=x>0?16:0;b+=x+v}}catch(p){console.error("Error calculating rowOffsets",p)}this.observableState.gridMetrics=o}defineSelectable(e){return this.observableState.queuedSelection.has(e.path)&&(this.observableState.queuedSelection.delete(e.path),W(()=>{this.observableState.selection.set(e.path,e)})),this.observableState.selection.has(e.path)&&W(()=>{this.observableState.selection.set(e.path,e)}),{select:U(()=>{this.observableState.selection.clear(),this.observableState.selection.set(e.path,e)})}}queueSelectPaths(e,t=!1){t||(this.observableState.selection.clear(),this.observableState.queuedSelection.clear());for(const n of e)this.observableState.selection.has(n)||this.observableState.queuedSelection.add(n)}setQueuedSelection(e){this.observableState.queuedSelection.clear();for(const t of e)this.observableState.queuedSelection.add(t)}setInflightPortConnectionOperation(e){this.observableState.inflightPortConnectionOperation=e}loadSubgraph(e,t){this.observableState.loadedSubgraphs.set(e,t)}setShowDebugValues(e){this.observableState.localSettings.showDebugValues=e,this.saveSettings()}setActiveTab(e){this.observableState.localSettings.activeTab=e,this.saveSettings()}setEnableResolumeIO(e){this.observableState.localSettings.enableResolumeIO=e,this.saveSettings()}toggleRegionExpansion(){this.observableState.localSettings.areRegionsExpanded=!this.observableState.localSettings.areRegionsExpanded,this.saveSettings(),this.updateGridMetrics(this.appController.observableState.graph)}setLastGroupSelection(e){this.observableState.lastGroupSelection=e}setViewport(e,t,n,o){this.observableState.viewport={x:e,y:t,w:n,h:o}}setDragPreview(e){this.observableState.dragPreview=e}setLoadedSubgraphs(e){this.observableState.loadedSubgraphs=e}setIsDraggingSelection(e){this.observableState.isDraggingSelection=e}setAltKeyPressed(e){this.observableState.altKeyPressed!==e&&(this.observableState.altKeyPressed=e)}updateUIState(e,t){this.observableState.nodeUIStates.has(e)||this.observableState.nodeUIStates.set(e,{});const n=this.observableState.nodeUIStates.get(e);t(n)}getViewportCenterGridCoordinates(){const{viewport:e}=this.observableState;if(!e||e.w===0||e.h===0)return{x:5,y:5};e.x+e.w/2;const t=e.y+e.h/2;let n=0;for(const[s,r]of this.observableState.gridMetrics.rowOffsets){if(r>t){n=Math.max(0,s-1);break}n=s}const o=Math.max(0,...this.observableState.gridMetrics.rowOffsets.keys());if(n>=o){const s=this.observableState.gridMetrics.rowOffsets.get(o)||16,r=this.observableState.gridMetrics.rows.get(o)||80,a=s+r;if(t>a){const l=t-a,f=Math.floor(l/96)+1;n=o+f}}return{x:5,y:n}}copyToClipboard(){const e=this.appController.getState(),t=this.observableState.selection;if(t.size===0)return;const n=[];for(const[r]of t)e.graph.inner.nodes[r]&&n.push(r);if(n.length===0)return;const o=n.map(r=>e.graph.inner.nodes[r]),s=Object.values(e.graph.inner.connections).filter(r=>n.includes(r.fromNodeId)&&n.includes(r.toNodeId));this.observableState.clipboard={nodes:JSON.parse(JSON.stringify(o)),connections:JSON.parse(JSON.stringify(s))}}findFreeSpace(e,t){const n=this.appController.getState().graph.inner.nodes;let o=t,s=0;const r=50;for(;s<r;){if(!Object.values(n).some(l=>l.x===e&&l.y===o))return{x:e,y:o};o++,s++}return{x:e,y:t}}getGridCellFromPixels(e,t){const{rowOffsets:n,colOffsets:o,rows:s,columnWidths:r}=this.observableState.gridMetrics;let a=0;const l=Math.max(...Array.from(s.keys()),-1);for(let h=0;h<=l;h++){const d=n.get(h)??0,u=s.get(h)??80,p=u>0?16:0;if(t>=d&&t<d+u+p){a=h;break}if(h===l&&t>=d+u+p){const g=t-(d+u+p);a=l+1+Math.floor(g/96)}}let c=0;const f=Math.max(...Array.from(r.keys()),-1);if(e<96)c=0;else{let h=!1;for(let d=0;d<=f;d++){const u=o.get(d)??0,p=r.get(d)??80,g=p>0?16:0;if(e>=u&&e<u+p+g){c=d,h=!0;break}}if(!h){const d=o.get(f)??96,u=r.get(f)??80,p=d+u+16;if(e>=p){const g=e-p;c=f+1+Math.floor(g/96)}}}return{x:c,y:a}}}Le([U],Te.prototype,"updateInferredTypes");Le([U],Te.prototype,"recomputeEffectivePorts");Le([U],Te.prototype,"updateWireLayout");Le([U],Te.prototype,"updateGridMetrics");Le([U],Te.prototype,"queueSelectPaths");Le([U],Te.prototype,"setQueuedSelection");Le([U],Te.prototype,"setInflightPortConnectionOperation");Le([U],Te.prototype,"loadSubgraph");Le([U],Te.prototype,"setShowDebugValues");Le([U],Te.prototype,"setActiveTab");Le([U],Te.prototype,"setEnableResolumeIO");Le([U],Te.prototype,"toggleRegionExpansion");Le([U],Te.prototype,"setLastGroupSelection");Le([U],Te.prototype,"setViewport");Le([U],Te.prototype,"setDragPreview");Le([U],Te.prototype,"setLoadedSubgraphs");Le([U],Te.prototype,"setIsDraggingSelection");Le([U],Te.prototype,"setAltKeyPressed");Le([U],Te.prototype,"updateUIState");Le([U],Te.prototype,"copyToClipboard");class Ap{constructor(){this.nodes=new Map,this.ctx=new(window.AudioContext||window.webkitAudioContext),this.nodes.set("destination",this.ctx.destination),this.ctx.onstatechange=()=>{this.onStateChange?.(this.ctx.state)}}resume(){this.ctx.state==="suspended"&&this.ctx.resume()}get state(){return this.ctx.state}clear(){for(const e of this.nodes.values())try{if(e.disconnect(),e.stop)try{e.stop()}catch{}}catch(t){console.warn("Error clearing audio node:",t)}this.nodes.clear(),this.nodes.set("destination",this.ctx.destination)}execute(e){for(const t of e)try{switch(t.type){case"clear":{this.clear();break}case"createOscillator":{const n=this.ctx.createOscillator();n.onended=()=>{this.nodes.delete(t.id)},this.nodes.set(t.id,n);break}case"createGain":{this.nodes.set(t.id,this.ctx.createGain());break}case"createBiquadFilter":{this.nodes.set(t.id,this.ctx.createBiquadFilter());break}case"connect":{const n=this.nodes.get(t.sourceId),o=this.nodes.get(t.destId);n&&o&&n.connect(o);break}case"disconnect":{const n=this.nodes.get(t.sourceId);n&&n.disconnect();break}case"start":{const n=this.nodes.get(t.id);if(n){const o=this.ctx.currentTime;n.start(o+t.time)}break}case"stop":{const n=this.nodes.get(t.id);if(n){const o=this.ctx.currentTime;n.stop(o+t.time)}break}case"setParamValue":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].setValueAtTime(t.value,o+t.time)}break}case"linearRampToValueAtTime":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].linearRampToValueAtTime(t.value,o+t.time)}break}case"exponentialRampToValueAtTime":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].exponentialRampToValueAtTime(t.value,o+t.time)}break}case"setTargetAtTime":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].setTargetAtTime(t.target,o+t.startTime,t.timeConstant)}break}case"cancelScheduledValues":{const n=this.nodes.get(t.id);if(n&&n[t.param]){const o=this.ctx.currentTime;n[t.param].cancelScheduledValues(o+t.time)}break}case"setNodeProperty":{const n=this.nodes.get(t.id);n&&(n[t.property]=t.value);break}case"dispose":{const n=this.nodes.get(t.id);n&&(n.disconnect(),this.nodes.delete(t.id));break}}}catch(n){console.error("AudioRenderer error:",n,t)}}}var Ip=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,rn=(i,e,t,n)=>{for(var o=n>1?void 0:n?Tp(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Ip(e,t,o),o};class Ut{constructor(){this.devices=new Map,this.selectedDeviceIds=new Set,this.recentEvents=[],this.activeNotes=new Map,this.ccValues=new Map,Wn(this)}addDevice(e){this.devices.set(e.id,e)}removeDevice(e){this.devices.delete(e),this.selectedDeviceIds.delete(e)}toggleDeviceSelection(e){this.selectedDeviceIds.has(e)?this.selectedDeviceIds.delete(e):this.selectedDeviceIds.add(e)}addEvent(e){this.recentEvents.push(e),this.recentEvents.length>128&&this.recentEvents.shift();const t=`${e.deviceId}:${e.channel}`;e.type==="note_on"?this.activeNotes.set(`${t}:${e.note}`,e.velocity):e.type==="note_off"?this.activeNotes.delete(`${t}:${e.note}`):e.type==="cc"&&this.ccValues.set(`${t}:${e.cc}`,e.value)}}rn([j],Ut.prototype,"devices",2);rn([j],Ut.prototype,"selectedDeviceIds",2);rn([j.shallow],Ut.prototype,"recentEvents",2);rn([j],Ut.prototype,"activeNotes",2);rn([j],Ut.prototype,"ccValues",2);rn([U],Ut.prototype,"addDevice",1);rn([U],Ut.prototype,"removeDevice",1);rn([U],Ut.prototype,"toggleDeviceSelection",1);rn([U],Ut.prototype,"addEvent",1);class Dp{constructor(){this.state=new Ut,this.midiAccess=null,this.listeners=new Set,this.initializationPromise=null}async ensureInitialized(){return this.initializationPromise?this.initializationPromise:(this.initializationPromise=this.init(),this.initializationPromise)}async init(){if(!navigator.requestMIDIAccess){console.warn("Web MIDI API not supported in this browser.");return}try{this.midiAccess=await navigator.requestMIDIAccess(),this.updateDevices(),this.midiAccess&&(this.midiAccess.onstatechange=()=>{this.updateDevices()})}catch(e){console.error("Failed to access Web MIDI API:",e)}}onMidiEvent(e,t){return t?.skipPermissionCheck||this.ensureInitialized(),this.listeners.add(e),()=>{this.listeners.delete(e)}}dispatchEvent(e){this.listeners.forEach(t=>t(e))}updateDevices(){if(!this.midiAccess)return;Array.from(this.midiAccess.inputs.values()).forEach(t=>{const n={id:t.id,name:t.name||`Unknown Device ${t.id}`,manufacturer:t.manufacturer||"",state:t.state,connection:t.connection};this.state.addDevice(n),t.onmidimessage=o=>this.handleMidiMessage(o,t.id)})}handleMidiMessage(e,t){if(this.state.selectedDeviceIds.size>0&&!this.state.selectedDeviceIds.has(t))return;const n=e.data;if(!n||n.length<2)return;const o=n[0],s=o>>4,r=(o&15)+1,a=n[1],l=n.length>2?n[2]:0;let c=null;if(s===9){const f=l;f>0?c={deviceId:t,channel:r,type:"note_on",note:a,velocity:f/127,time:Date.now()}:c={deviceId:t,channel:r,type:"note_off",note:a,velocity:0,time:Date.now()}}else s===8?c={deviceId:t,channel:r,type:"note_off",note:a,velocity:0,time:Date.now()}:s===11&&(c={deviceId:t,channel:r,type:"cc",cc:a,value:l,time:Date.now()});c&&(this.state.addEvent(c),this.dispatchEvent(c))}}const ft=new Dp,Pp="modulepreload",Lp=function(i){return"/"+i},Sl={},Me=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=r?.nonce||r?.getAttribute("nonce");o=l(t.map(c=>{if(c=Lp(c),c in Sl)return;Sl[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":Pp,f||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),f)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};class Op{constructor(e){this.onStatusUpdated=e.onStatusUpdated,this.onExternalClockAdjusted=e.onExternalClockAdjusted,this.onDebugDataExported=e.onDebugDataExported,this.worker=new Worker(new URL("/assets/audio_to_clock.worker-DfoDBUBB.js",import.meta.url),{type:"module"}),this.worker.onmessage=t=>{const{type:n,payload:o}=t.data;n==="ready"?this.onStatusUpdated?.({message:"Ready",isError:!1}):n==="status"?this.onStatusUpdated?.(o):n==="clock"?this.onExternalClockAdjusted?.(o):n==="debug"&&this.onDebugDataExported?.(o)},this.worker.postMessage({type:"init",payload:{featureExtractorUrl:e.featureExtractorUrl,bpmPhaseModelUrl:e.bpmPhaseModelUrl,audioToClockConfig:{exportAllDebugData:e.exportAllDebugData,inferenceConfig:e.inferenceConfig,stabilizerConfig:e.stabilizerConfig,externalClockControllerConfig:e.externalClockControllerConfig}}})}addAudio(e,t,n){this.worker.postMessage({type:"addAudio",payload:{buffer:e,currentTime:t,sampleRate:n}})}resync(e){this.worker.postMessage({type:"resync",payload:!!e})}resetHardSync(){this.worker.postMessage({type:"resetHardSync"})}setForceExportAllDebugData(e){this.worker.postMessage({type:"setForceExportAllDebugData",payload:e})}connectAudioPort(e){this.worker.postMessage({type:"connectAudioPort",payload:e},[e])}setRunning(e){this.worker.postMessage({type:"setRunning",payload:e})}connectEventPort(e){this.worker.postMessage({type:"connectEventPort",payload:e},[e])}}function bo(i,e){const t=e-i.lastUpdateTime,n=60/i.bpm,o=t/n*2*Math.PI;let s=i.phase+o;return Math.atan2(Math.sin(s),Math.cos(s))}function Mr(i,e){const t=e-i.lastUpdateTime,n=60/i.bpm,o=t/n;return i.barPhase+o}class Ep{constructor(){this.activeStream=null,this.activeDeviceId=null,this._audioContext=null,this._sourceNode=null}get stream(){return this.activeStream}get context(){return this._audioContext||(this._audioContext=new AudioContext),this._audioContext}get sourceNode(){return this._sourceNode}get deviceId(){return this.activeDeviceId}async enumerateDevices(){try{return(await navigator.mediaDevices.enumerateDevices()).filter(t=>t.kind==="audioinput"&&t.deviceId)}catch(e){return console.error("Error enumerating devices",e),[]}}async requestPermissions(){try{return(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(t=>t.stop()),!0}catch(e){return console.error("Permission denied or error:",e),!1}}async startStream(e){const t=this.context;if(t.state==="suspended")try{await t.resume()}catch(o){console.warn("Failed to resume AudioContext:",o)}if(this.activeDeviceId===e&&this.activeStream?.active&&this._sourceNode)return t;this.stopStream();const n={audio:{deviceId:{exact:e},autoGainControl:!1,noiseSuppression:!1,echoCancellation:!1,channelCount:1}};try{this.activeStream=await navigator.mediaDevices.getUserMedia(n)}catch(o){console.warn(`Exact deviceId constraint failed for ${e}, trying fallback...`,o);const s={audio:{deviceId:e,autoGainControl:!1,noiseSuppression:!1,echoCancellation:!1,channelCount:1}};this.activeStream=await navigator.mediaDevices.getUserMedia(s)}return this.activeDeviceId=e,this._sourceNode=t.createMediaStreamSource(this.activeStream),t}stopStream(){this._sourceNode?.disconnect(),this._sourceNode=null,this.activeStream&&(this.activeStream.getTracks().forEach(e=>e.stop()),this.activeStream=null),this.activeDeviceId=null}}var Np=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,ne=(i,e,t,n)=>{for(var o=n>1?void 0:n?Rp(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Np(e,t,o),o};class te{constructor(e,t,n,o){this.localController=e,this.connectToExecutor=t,this.onResolumeSettingsChanged=n,this.onBeatSyncStateChanged=o,this.loadingMessage="Waiting to initialize...",this.predictedBpm=0,this.bestBpm=0,this.bestBarPhase=0,this.externalBpm=0,this.audioDevices=[],this.isMicActive=!1,this.selectedDeviceId=null,this.overallConfidence=0,this.bestTrajectoryWeight=0,this.bpmVariance=0,this.debugDataEnabled=!1,this.displayQuantizedBeat=0,this.lastResyncTime=0,this.lastInferenceUpdate=null,this.lastStabilizerUpdate=null,this.lastExternalClockUpdate=null,this.lastExternalClockEvent=null,this.rollingWaveformBuffer=null,this.audioCaptureNode=null,this.micSource=null,this.inputManager=new Ep,this.isMidiMappingActive=!1,this.midiListenerDisposer=null,Wn(this),setTimeout(()=>{this.initialize()},1e3)}get audioContextInstance(){return this.inputManager.context}get localControllerInstance(){return this.localController}async initialize(){this.loadingMessage="Loading models...";const e=new MessageChannel;this.connectToExecutor&&this.connectToExecutor(e.port1);const t=this.localController.observableState.localSettings.beatSyncResolumeControlEnabled;this.onResolumeSettingsChanged(t),this.onBeatSyncStateChanged(this.isMicActive),this.setupMidiListener(),this.audioToClock=new Op({featureExtractorUrl:"models/mel25/feature_extractor_fp32.onnx",bpmPhaseModelUrl:"models/mel25/main_model_fp32.onnx",stabilizerConfig:{exportDebugData:!0},externalClockControllerConfig:{exportDebugData:!0},exportAllDebugData:this.debugDataEnabled,onStatusUpdated:o=>{W(()=>{this.loadingMessage=o.message})},onExternalClockAdjusted:o=>{W(()=>{o.bpm&&(this.externalBpm=o.bpm)})},onDebugDataExported:o=>this.handleDebugData(o)}),this.audioToClock.connectEventPort(e.port2);const n=this.inputManager.context;try{const{default:o}=await Me(async()=>{const{default:l}=await import("./audio-capture.worklet-BujC5PMq.js");return{default:l}},[]);await n.audioWorklet.addModule(o),await this.enumerateDevices();const s=this.localController.observableState.localSettings.beatSyncAudioDeviceId,r=this.localController.observableState.localSettings.beatSyncSystemEnabled,a=this.audioDevices.some(l=>l.deviceId===s);r&&(s&&a?await this.startMic(s):s?(console.warn(`[BeatSync] Saved audio device ${s} not found. Auto-connect validation failed.`),this.audioDevices.length>0&&await this.startMic(this.audioDevices[0].deviceId)):this.audioDevices.length>0&&await this.startMic(this.audioDevices[0].deviceId))}catch(o){console.error("Failed to load audio worklet module",o)}}setDebugDataEnabled(e){this.debugDataEnabled=e,this.audioToClock?.setForceExportAllDebugData(e)}get isHardSync(){return this.localController.observableState.localSettings.beatSyncHardSyncEnabled}setHardSync(e){this.localController.observableState.localSettings.beatSyncHardSyncEnabled=e,this.localController.saveSettings()}resync(){this.audioToClock?.resync(this.isHardSync),W(()=>{this.lastResyncTime=Date.now()})}setResolumeControlEnabled(e){this.localController.observableState.localSettings.beatSyncResolumeControlEnabled=e,this.localController.saveSettings(),this.onResolumeSettingsChanged(e)}get midiMapping(){return this.localController.observableState.localSettings.beatSyncResyncMidiMapping}toggleMidiDoLearn(){this.isMidiMappingActive=!this.isMidiMappingActive,this.isMidiMappingActive&&ft.ensureInitialized()}clearMidiMapping(){this.localController.observableState.localSettings.beatSyncResyncMidiMapping=null,this.localController.saveSettings(),this.isMidiMappingActive=!1}setupMidiListener(){this.midiListenerDisposer=ft.onMidiEvent(e=>{if(this.isMidiMappingActive){W(()=>{let o=null;e.type==="note_on"?o={channel:e.channel,type:"note",index:e.note}:e.type==="cc"&&(o={channel:e.channel,type:"cc",index:e.cc}),o&&(this.localController.observableState.localSettings.beatSyncResyncMidiMapping=o,this.localController.saveSettings(),this.isMidiMappingActive=!1)});return}const t=this.midiMapping;if(!t)return;let n=!1;t.type==="note"&&e.type==="note_on"?e.channel===t.channel&&e.note===t.index&&(n=!0):t.type==="cc"&&e.type==="cc"&&e.channel===t.channel&&e.cc===t.index&&e.value>0&&(n=!0),n&&this.resync()},{skipPermissionCheck:!0}),this.midiMapping&&ft.ensureInitialized()}handleDebugData(e){if(e.inference&&(this.predictedBpm=e.inference.bpm,this.lastInferenceUpdate=e.inference),e.stabilizer){this.lastStabilizerUpdate=e.stabilizer;const t=e.stabilizer.bestTrajectory;t&&(this.bestBpm=t.bpm,this.bestBarPhase=t.barPhase),this.bpmVariance=e.stabilizer.bpmVariance,this.bestTrajectoryWeight=t?t.weight:0}if(e.externalClock){this.lastExternalClockUpdate=e.externalClock;const t=this.inputManager.context.currentTime||0,n=Mr(e.externalClock,t);this.displayQuantizedBeat=Math.floor(n)%4}e.externalClockEvent&&(this.lastExternalClockEvent=e.externalClockEvent)}async enumerateDevices(){const e=await this.inputManager.enumerateDevices();W(()=>{this.audioDevices=e})}async requestPermissions(){await this.inputManager.requestPermissions()?await this.enumerateDevices():W(()=>{this.loadingMessage="Permission denied. Please allow microphone access."})}async startMic(e){if(this.selectedDeviceId===e&&this.isMicActive){await this.stopMic();return}this.isMicActive&&await this.stopMic();const t=this.inputManager.context;t.state==="suspended"&&t.resume().catch(n=>console.warn("[BeatSync] Auto-resume failed (waiting for gesture):",n));try{await this.inputManager.startStream(e);const n=this.inputManager.sourceNode;if(!n)throw new Error("No source node available after startStream");W(()=>{this.isMicActive=!0,this.selectedDeviceId=e,this.localController.observableState.localSettings.beatSyncAudioDeviceId=e,this.localController.saveSettings()}),this.onBeatSyncStateChanged(!0),this.setupAudioGraph(n)}catch(n){console.error("Error starting mic stream:",n),W(()=>{this.loadingMessage="Error accessing microphone."})}}get systemEnabled(){return this.localController.observableState.localSettings.beatSyncSystemEnabled}setSystemEnabled(e){if(this.localController.observableState.localSettings.beatSyncSystemEnabled=e,this.localController.saveSettings(),e){const n=this.localController.observableState.localSettings.beatSyncAudioDeviceId||(this.audioDevices.length>0?this.audioDevices[0].deviceId:null);n?this.startMic(n):W(()=>{this.loadingMessage="No audio devices found."})}else this.stopMic()}async stopMic(){this.micSource?.disconnect(),this.audioCaptureNode?.disconnect(),this.audioToClock?.setRunning(!1),this.micSource=null,this.audioCaptureNode=null,this.inputManager.stopStream(),W(()=>{this.isMicActive=!1,this.selectedDeviceId=null,this.rollingWaveformBuffer=null}),this.onBeatSyncStateChanged(!1)}setupAudioGraph(e){const t=this.inputManager.context;this.micSource=e;const n=new AudioWorkletNode(t,"audio-capture-processor"),o=new MessageChannel;n.port.postMessage({type:"init",port:o.port1},[o.port1]),this.audioToClock?.connectAudioPort(o.port2),this.audioCaptureNode=n,e.connect(n),n.connect(t.destination),this.audioToClock?.setRunning(!0)}async resumeAudio(){const e=this.inputManager.context;if(e.state==="suspended")try{await e.resume()}catch(t){console.warn("[BeatSync] Resume failed:",t)}}dispose(){this.stopMic()}}ne([j],te.prototype,"loadingMessage",2);ne([j],te.prototype,"predictedBpm",2);ne([j],te.prototype,"bestBpm",2);ne([j],te.prototype,"bestBarPhase",2);ne([j],te.prototype,"externalBpm",2);ne([j],te.prototype,"audioDevices",2);ne([j],te.prototype,"isMicActive",2);ne([j],te.prototype,"selectedDeviceId",2);ne([j],te.prototype,"overallConfidence",2);ne([j],te.prototype,"bestTrajectoryWeight",2);ne([j],te.prototype,"bpmVariance",2);ne([j],te.prototype,"debugDataEnabled",2);ne([j],te.prototype,"displayQuantizedBeat",2);ne([j],te.prototype,"lastResyncTime",2);ne([j.ref],te.prototype,"lastInferenceUpdate",2);ne([j.ref],te.prototype,"lastStabilizerUpdate",2);ne([j.ref],te.prototype,"lastExternalClockUpdate",2);ne([j.ref],te.prototype,"lastExternalClockEvent",2);ne([j],te.prototype,"rollingWaveformBuffer",2);ne([U],te.prototype,"setDebugDataEnabled",1);ne([U],te.prototype,"setHardSync",1);ne([U],te.prototype,"setResolumeControlEnabled",1);ne([j],te.prototype,"isMidiMappingActive",2);ne([U],te.prototype,"toggleMidiDoLearn",1);ne([U],te.prototype,"clearMidiMapping",1);ne([U],te.prototype,"handleDebugData",1);ne([U],te.prototype,"enumerateDevices",1);ne([U],te.prototype,"requestPermissions",1);ne([U],te.prototype,"startMic",1);ne([U],te.prototype,"setSystemEnabled",1);ne([U],te.prototype,"stopMic",1);var Bp=Object.defineProperty,Si=(i,e,t,n)=>{for(var o=void 0,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=r(e,t,o)||o);return o&&Bp(e,t,o),o};const kl=60;class Un{constructor(e,t){this.appController=e,this.localController=t,this.outputs=new Map,this.inputs=new Map,this.uiStates=new Map,this.stats={nodeCount:0,executionTime:0},this.isRealtimeGraph=!1,this.frame=0,this.nodeRepository=Q,this.realtimeNodeCache=new Map,this.hasLoadedGraph=!1,this.pendingDirtyNodeIds=new Set,this.audioRenderer=new Ap,this.lastMidiEventTime=0,this.lastInferredTypesJson="",this.virtualInputMappings={},this.outputRemappings={},this.stepScheduled=!1,this.lastStepTime=0,this.midiEventBuffer=[],this.beatSyncManager=new te(t,n=>this.connectExecutorToBeatSync(n),n=>this.sendResolumeSettings(n),n=>this.sendBeatSyncState(n)),Wn(this),this.compilerWorker=new Worker(new URL("/assets/compiler.worker-DXaGLi0n.js",import.meta.url),{type:"module"}),this.executorWorker=new Worker(new URL("/assets/executor.worker-DThpn5af.js",import.meta.url),{type:"module"}),this.setupWorkerListeners(),this.appController.onCompiledGraphDirty(()=>{this.recompileAndRun()}),this.appController.onGraphReset(()=>{this.hasLoadedGraph=!1}),this.appController.onConfigChange(n=>{this.updateNodeConfigsAndRealtimeStatus(n)}),this.appController.onInputUpdate(n=>{this.handleInputUpdates(n)}),qt(()=>({ccVersion:ft.state.ccValues.size+Array.from(ft.state.ccValues.values()).reduce((n,o)=>n+o,0),cc:new Map(ft.state.ccValues),notes:new Map(ft.state.activeNotes)}),({cc:n,notes:o})=>{const s=new Map;for(const[a,l]of n)s.set(a,l);for(const[a,l]of o)s.set(a,l);const r={type:"MIDI_UPDATE",values:s,events:[]};this.executorWorker.postMessage(r)},{delay:16}),ft.onMidiEvent(n=>{this.midiEventBuffer.push(n)},{skipPermissionCheck:!0}),qt(()=>this.localController.observableState.selection.size,n=>{n>0&&this.audioRenderer.state==="suspended"&&this.audioRenderer.resume()}),this.audioRenderer.onStateChange=n=>{this.executorWorker.postMessage({type:"UPDATE_AUDIO_STATE",state:n})},setTimeout(()=>{this.executorWorker.postMessage({type:"UPDATE_AUDIO_STATE",state:this.audioRenderer.state})},100)}resumeAudio(){this.audioRenderer.state==="suspended"&&this.audioRenderer.resume(),this.beatSyncManager.resumeAudio()}sendResolumeControl(e){const t={type:"RESOLUME_CONTROL",action:e};this.executorWorker.postMessage(t)}sendResolumeParameter(e,t){const n={type:"RESOLUME_SET_VALUE",path:e,value:t};this.executorWorker.postMessage(n)}sendResolumeSettings(e){const t={type:"RESOLUME_SETTINGS",enabled:e};this.executorWorker.postMessage(t)}sendBeatSyncState(e){const t={type:"BEAT_SYNC_STATE",isActive:e};this.executorWorker.postMessage(t)}connectExecutorToBeatSync(e){const t={type:"CONNECT_AUX_PORT",port:e};this.executorWorker.postMessage(t,[e])}sendNodeMessage(e,t){const n={type:"NODE_MESSAGE",nodeId:e,message:t};this.executorWorker.postMessage(n)}setupWorkerListeners(){this.compilerWorker.onmessage=e=>{const t=e.data;t.type==="GRAPH_COMPILED"?this.handleGraphCompiled(t):t.type==="CONFIGS_COMPILED"&&this.handleConfigsCompiled(t)},this.executorWorker.onmessage=e=>{const t=e.data;t.type==="EXECUTION_UPDATE"?this.handleExecutionUpdate(t):t.type==="INFERRED_TYPES"&&this.handleInferredTypes(t)}}handleInferredTypes(e){if(e.inferredNodeTypes){const t=JSON.stringify(e.inferredNodeTypes);if(t===this.lastInferredTypesJson)return;this.lastInferredTypesJson=t,this.localController.updateInferredTypes(e.inferredNodeTypes,n=>this.appController.observableState.graph.inner.nodes[n]?.config.typeId)}}handleGraphCompiled(e){e.usesMidi&&ft.ensureInitialized(),this.virtualInputMappings=e.virtualInputMappings||{},this.outputRemappings=e.outputRemappings||{},W(()=>{this.outputs.clear(),this.inputs.clear(),this.uiStates.clear()});const t={type:"INIT_GRAPH",graph:e.graph,inferredNodeTypes:e.inferredTypes,isRecompilation:this.hasLoadedGraph,dirtyNodeIds:Array.from(this.pendingDirtyNodeIds),nodeMetadata:e.nodeMetadata,idMap:e.idMap};this.pendingDirtyNodeIds.clear(),this.hasLoadedGraph=!0,this.executorWorker.postMessage(t),e.inferredTypes&&this.localController.updateInferredTypes(e.inferredTypes,n=>this.appController.observableState.graph.inner.nodes[n]?.config.typeId),W(()=>{for(const[n,o]of Object.entries(e.graph.nodes))o.defaultConfig&&(this.localController.observableState.compiledNodeConfigs.set(n,o.defaultConfig),this.syncUIState(n,o.defaultConfig))}),this.checkRealtimeStatus(),this.updateLoopState()}handleConfigsCompiled(e){W(()=>{for(const[t,n]of Object.entries(e.configs)){this.localController.observableState.compiledNodeConfigs.set(t,n),this.syncUIState(t,n);const o={type:"UPDATE_CONFIG",nodeId:t,config:n,isRealtime:!1};this.executorWorker.postMessage(o)}}),this.checkRealtimeStatus(),this.updateLoopState()}handleExecutionUpdate(e){W(()=>{if(e.outputs instanceof Map)for(const[t,n]of e.outputs.entries())this.outputs.set(t,n);else for(const[t,n]of Object.entries(e.outputs))this.outputs.set(t,n);if(e.inputs)if(e.inputs instanceof Map)for(const[t,n]of e.inputs.entries())this.inputs.set(t,n);else for(const[t,n]of Object.entries(e.inputs))this.inputs.set(t,n);if(e.uiOutputs)if(e.uiOutputs instanceof Map)for(const[t,n]of e.uiOutputs.entries())this.uiStates.set(t,n);else for(const[t,n]of Object.entries(e.uiOutputs))this.uiStates.set(t,n);this.stats=e.stats,this.frame++}),e.audioCommands&&this.audioRenderer.execute(e.audioCommands)}updateNodeConfigsAndRealtimeStatus(e){const t=this.appController.observableState,n=[],o=e?e.map(s=>t.graph.inner.nodes[s]).filter(s=>!!s):Object.values(t.graph.inner.nodes);for(const s of o){const r=En(s.config);n.push({id:s.id,typeId:s.config.typeId,config:r});const a=this.virtualInputMappings[s.id];if(a){const l=r.values||{};for(const[c,f]of Object.entries(a)){const h=l[c];h!==void 0&&n.push({id:f,typeId:"io.input",config:{values:{0:h}}})}}}if(n.length>0){const s=n.filter(r=>this.nodeRepository.getNodeType(r.typeId)?.shouldRecompileOnConfigChange?.(r.config)??!1);if(s.length>0){for(const r of s)this.pendingDirtyNodeIds.add(r.id);this.recompileAndRun()}else this.compilerWorker.postMessage({type:"COMPILE_CONFIGS",nodes:n})}}checkRealtimeStatus(){const e=this.appController.observableState,t=this.localController.observableState.compiledNodeConfigs;for(const n of Object.values(e.graph.inner.nodes)){const o=t.get(n.id)??En(n.config),{typeId:s}=n.config,r=this.nodeRepository.getNodeType(s);if(!r)continue;const a=r.definition.isRealtime?.(o)??!1;this.realtimeNodeCache.set(n.id,a)}}updateLoopState(){let e=!1;for(const t of this.realtimeNodeCache.values())if(t){e=!0;break}if(this.isRealtimeGraph!==e){W(()=>{this.isRealtimeGraph=e});const t={type:"CONTROL",action:e?"START":"STOP",frameRate:kl};this.executorWorker.postMessage(t)}this.isRealtimeGraph||this.scheduleStep()}handleInputUpdates(e){for(const t of e){const n={type:"UPDATE_INPUT",name:t.nodeId,value:JSON.parse(JSON.stringify(t.inputs))};this.executorWorker.postMessage(n);const o=this.virtualInputMappings[t.nodeId];if(o)for(const[s,r]of Object.entries(t.inputs)){const a=o[s];if(a){const l={type:"UPDATE_INPUT",name:a,value:{value:r}};this.executorWorker.postMessage(l)}}}this.isRealtimeGraph||this.scheduleStep()}scheduleStep(){if(this.stepScheduled)return;const t=performance.now()-this.lastStepTime,n=1e3/kl;t>=n?this.performStep():(this.stepScheduled=!0,setTimeout(()=>{this.performStep(),this.stepScheduled=!1},n-t))}performStep(){if(this.lastStepTime=performance.now(),this.midiEventBuffer.length>0){const t=this.midiEventBuffer;this.midiEventBuffer=[];const n={type:"MIDI_UPDATE",values:new Map,events:t};this.executorWorker.postMessage(n)}const e={type:"CONTROL",action:"STEP"};this.executorWorker.postMessage(e)}recompileAndRun(){const e=this.appController.observableState,t=this.localController.observableState.loadedSubgraphs,n={type:"COMPILE_GRAPH",state:En(e),subgraphs:Object.fromEntries(En(t))};this.compilerWorker.postMessage(n)}syncUIState(e,t){const n=this.appController.observableState.graph.inner.nodes[e];if(n){const o=this.nodeRepository.getNodeType(n.config.typeId);o&&o.syncUIFromCompiledConfig&&this.localController.updateUIState(e,s=>{o.syncUIFromCompiledConfig(t,s)})}}}Si([j],Un.prototype,"outputs");Si([j],Un.prototype,"inputs");Si([j],Un.prototype,"uiStates");Si([j],Un.prototype,"stats");Si([j],Un.prototype,"isRealtimeGraph");Si([j],Un.prototype,"frame");var _p=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,Gt=(i,e,t,n)=>{for(var o=n>1?void 0:n?$p(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&_p(e,t,o),o};const Ws="nano-repatch-db",Kn="handles",Cl="workspace-handle";class Lt{constructor(e,t){this.appController=e,this.localController=t,this.currentDirHandle=null,this.files=[],this.currentGraphId=null,this.isWaitingForPermission=!1,Wn(this),this.init(),qt(()=>En(this.appController.observableState.graph.inner),()=>{this.saveCurrentGraph()},{delay:1e3})}async init(){await this.initDB();const e=await this.loadHandle();if(e){W(()=>{this.currentDirHandle=e});try{await e.queryPermission({mode:"readwrite"})==="granted"&&await this.refreshFiles()}catch(o){console.warn("Failed to query permission on init",o)}}const n=new URLSearchParams(window.location.search).get("graph");if(n)if(W(()=>{this.currentGraphId=n}),e)try{await e.queryPermission({mode:"readwrite"})!=="granted"?W(()=>{this.isWaitingForPermission=!0}):await this.openFile(n)}catch(o){console.warn("Failed to query permission for graph load",o)}else W(()=>{this.isWaitingForPermission=!0})}initDB(){return new Promise((e,t)=>{const n=indexedDB.open(Ws,1);n.onupgradeneeded=o=>{const s=o.target.result;s.objectStoreNames.contains(Kn)||s.createObjectStore(Kn)},n.onsuccess=()=>e(),n.onerror=()=>t(n.error)})}async saveHandle(e){return new Promise((t,n)=>{const o=indexedDB.open(Ws,1);o.onsuccess=s=>{const a=s.target.result.transaction(Kn,"readwrite");a.objectStore(Kn).put(e,Cl),a.oncomplete=()=>t(),a.onerror=()=>n(a.error)}})}async loadHandle(){return new Promise((e,t)=>{const n=indexedDB.open(Ws,1);n.onsuccess=o=>{const l=o.target.result.transaction(Kn,"readonly").objectStore(Kn).get(Cl);l.onsuccess=()=>e(l.result||null),l.onerror=()=>t(l.error)},n.onerror=()=>t(n.error)})}async openFolder(){try{console.log("Calling showDirectoryPicker");const e=await window.showDirectoryPicker({mode:"readwrite"});W(()=>{this.currentDirHandle=e}),await this.saveHandle(e),await this.refreshFiles(),W(()=>{this.isWaitingForPermission=!1})}catch(e){console.error("Error opening folder:",e)}}async refreshFiles(){if(!this.currentDirHandle||await this.currentDirHandle.queryPermission({mode:"readwrite"})!=="granted"&&await this.currentDirHandle.requestPermission({mode:"readwrite"})!=="granted")return;const t=[],n=async(o,s="")=>{for await(const[r,a]of o.entries())a.kind==="file"&&r.endsWith(".json")?t.push({name:s+r,handle:a}):a.kind==="directory"&&(r.startsWith(".")||await n(a,s+r+"/"))};await n(this.currentDirHandle),W(()=>{this.files=t.sort((o,s)=>o.name.localeCompare(s.name))}),this.currentGraphId&&await this.openFile(this.currentGraphId),this.loadAllSubgraphs()}async loadAllSubgraphs(){if(!this.currentDirHandle)return;const e=new Map;await Promise.all(this.files.map(async t=>{try{const o=await(await t.handle.getFile()).text(),s=JSON.parse(o),r={inner:s,auxiliary:rf(s)},a=t.name.replace(".json","").replace(/\//g,".");e.set(a,r)}catch(n){console.warn(`Failed to load subgraph ${t.name}`,n)}})),this.localController?.setLoadedSubgraphs(e)}async openFile(e){if(!this.currentDirHandle)return;const t=this.files.find(n=>n.name===e);if(!t){try{const n=await this.getFileHandleByPath(e,!1);await this.loadFileHandle(n,e)}catch(n){console.error(`File ${e} not found`,n)}return}await this.loadFileHandle(t.handle,e)}async loadFileHandle(e,t){const o=await(await e.getFile()).text();try{const s=JSON.parse(o);this.appController.loadGraph(s),W(()=>{this.currentGraphId=t});const r=new URL(window.location.href);r.searchParams.set("graph",t),window.history.replaceState({},"",r.toString())}catch(s){console.error("Error parsing graph JSON:",s)}}async getFileHandleByPath(e,t=!1){if(!this.currentDirHandle)throw new Error("No directory handle");const n=e.split("/"),o=n.pop();let s=this.currentDirHandle;for(const r of n)t?s=await s.getDirectoryHandle(r,{create:!0}):s=await s.getDirectoryHandle(r);return s.getFileHandle(o,{create:t})}async saveCurrentGraph(){if(!this.currentDirHandle||!this.currentGraphId)return;const e=this.appController.getState().graph.inner,t=JSON.stringify(e,null,2);try{let n;const o=this.files.find(r=>r.name===this.currentGraphId);o?n=o.handle:n=await this.getFileHandleByPath(this.currentGraphId,!0);const s=await n.createWritable();await s.write(t),await s.close(),this.loadAllSubgraphs()}catch(n){console.error("Error saving graph:",n)}}async createNewGraph(e){if(!this.currentDirHandle)return;if(e.endsWith(".json")||(e+=".json"),this.files.some(n=>n.name===e))throw new Error("File already exists");const t={nodes:{},connections:{}};try{const o=await(await this.getFileHandleByPath(e,!0)).createWritable();await o.write(JSON.stringify(t,null,2)),await o.close(),await this.refreshFiles(),await this.openFile(e)}catch(n){throw console.error("Error creating new graph:",n),n}}}Gt([j],Lt.prototype,"currentDirHandle",2);Gt([j],Lt.prototype,"files",2);Gt([j],Lt.prototype,"currentGraphId",2);Gt([j],Lt.prototype,"isWaitingForPermission",2);Gt([U],Lt.prototype,"openFolder",1);Gt([U],Lt.prototype,"refreshFiles",1);Gt([U],Lt.prototype,"loadAllSubgraphs",1);Gt([U],Lt.prototype,"openFile",1);Gt([U],Lt.prototype,"saveCurrentGraph",1);Gt([U],Lt.prototype,"createNewGraph",1);class mn{constructor(e,t,n){this.id=e.id,this.name=n||e.name||"Untitled",this.type=e.valuetype||"unknown",this.value=e.value;const o=t.endsWith("/")?"":"/",s=this.name.toLowerCase().replace(/[^a-z0-9]+/g,"_");this.path=`${t}${o}${s}`,jn(this)}update(e){this.value=e}}class Ms{constructor(e,t){this.params=[],this.id=e.id,this.name=e.name?.value||e.display_name||`Effect ${e.id}`,this.path=`${t}/effects/${e.id}`,jn(this),this.parse(e)}parse(e){if(e.params)for(const[t,n]of Object.entries(e.params))Ki(n)&&this.params.push(new mn(n,this.path,t));for(const[t,n]of Object.entries(e))t!=="params"&&Ki(n)&&this.params.push(new mn(n,this.path,t))}}class df{constructor(e,t,n){this.params=[],this.effects=[],this.id=e.id,this.name=e.name?.value||`Clip ${n+1}`,this.path=`${t}/clips/${n+1}`,e.thumbnail?.path&&(this.thumbnail=e.thumbnail.path),jn(this),this.parse(e)}parse(e){const t=(n,o)=>{for(const[s,r]of Object.entries(n))s==="effects"&&Array.isArray(r)?r.forEach(a=>this.effects.push(new Ms(a,o))):Ki(r)?this.params.push(new mn(r,o,s)):typeof r=="object"&&r!==null&&!Array.isArray(r)&&t(r,`${o}/${s}`)};t(e,this.path)}}class uf{constructor(e,t,n){this.clips=[],this.params=[],this.effects=[],this.id=e.id,this.name=e.name?.value||`Layer ${n+1}`,this.path=`${t}/layers/${n+1}`,jn(this),this.parse(e)}parse(e){e.clips&&Array.isArray(e.clips)&&(this.clips=e.clips.map((n,o)=>new df(n,this.path,o)));const t=(n,o)=>{for(const[s,r]of Object.entries(n))s!=="clips"&&(s==="effects"&&Array.isArray(r)?r.forEach(a=>this.effects.push(new Ms(a,o))):Ki(r)?this.params.push(new mn(r,o,s)):typeof r=="object"&&r!==null&&!Array.isArray(r)&&t(r,`${o}/${s}`))};t(e,this.path)}}class pf{constructor(){this.layers=[],this.params=[],this.effects=[],this.path="/composition",jn(this)}load(e){this.layers=[],this.params=[],this.effects=[],e.layers&&Array.isArray(e.layers)&&(this.layers=e.layers.map((n,o)=>new uf(n,this.path,o)));const t=(n,o)=>{for(const[s,r]of Object.entries(n))s==="layers"||s==="decks"||(s==="effects"&&Array.isArray(r)?r.forEach(a=>this.effects.push(new Ms(a,o))):Ki(r)?this.params.push(new mn(r,o,s)):typeof r=="object"&&r!==null&&!Array.isArray(r)&&t(r,`${o}/${s}`))};t(e,this.path)}}function Ki(i){return typeof i=="object"&&i!==null&&"valuetype"in i&&"id"in i}class Fp{constructor(e){let t=e?.baseUrl??"http://127.0.0.1:8080",n=e?.customFetch,o=e?.customWebSocket??WebSocket;t.endsWith("/")&&(t=t.slice(0,-1)),this.apiBaseUrl=`${t}/api/v1`,this.customFetch=n,this.WebSocket=o}async request(e,t){try{const n=`${this.apiBaseUrl}${e}`,o=await(this.customFetch??fetch)(n,t);if(!o.ok)throw new Error(`API request failed: ${o.status} ${o.statusText}`);return o.status===204?void 0:await o.json()}catch(n){throw console.error("[RealResolumeApiClient] Error in request:",n),n}}getProductInfo(){return this.request("/product")}connectWebSocket(e,t,n){const o=this.apiBaseUrl.replace(/^http/,"ws"),s=new this.WebSocket(o);return s.onmessage=r=>{try{const a=JSON.parse(r.data);e(a)}catch(a){console.error("[RealResolumeApiClient] Error parsing message:",a)}},t&&(s.onerror=t),n&&(s.onclose=n),s.onopen=()=>console.log("[RealResolumeApiClient] Connection established."),{send:r=>{s.readyState===s.OPEN?s.send(JSON.stringify(r)):console.warn("[RealResolumeApiClient] WebSocket is not open. Message not sent:",r)},close:()=>s.close(),get readyState(){return s.readyState}}}}class Vp{constructor(e){this.ws=null,this.isConnecting=!1,this.parameterMap=new Map,this.subscriptions=new Map,this.client=e?.client??new Fp,this.state=new pf,jn(this)}subscribe(e,t,n){this.subscriptions.has(e)||this.subscriptions.set(e,new Map),this.subscriptions.get(e).set(t,n);const o=this.getParameter(e);o&&this.ws?(this.sendSubscription(o),n&&n(o.value)):console.log(`[ResolumeManager] Queued subscription for ${e} (Connected: ${!!this.ws}, Param found: ${!!o})`)}sendSubscription(e){this.ws&&this.ws.send({action:"subscribe",parameter:`/parameter/by-id/${e.id}`})}unsubscribe(e,t){const n=this.subscriptions.get(e);n&&(n.delete(t),n.size===0&&this.subscriptions.delete(e))}async connect(){if(!(this.isConnected||this.isConnecting)){this.isConnecting=!0,console.log("[ResolumeManager] Connecting...");try{const e=await this.client.getProductInfo();console.log(`[ResolumeManager] Connected to ${e.name} v${e.major}.${e.minor}`),this.ws=this.client.connectWebSocket(t=>this.handleMessage(t),t=>console.error("[ResolumeManager] WS Error:",t),()=>{console.log("[ResolumeManager] WS Closed"),this.isConnecting=!1})}catch(e){console.error("[ResolumeManager] Connection failed:",e),this.isConnecting=!1}}}get isConnected(){return!!this.ws}disconnect(){this.ws&&(this.ws.close(),this.ws=null)}handleMessage(e){if(e.layers&&e.decks)console.log("[ResolumeManager] Received initial state"),this.state.load(e),this.rebuildParameterMap();else if(e.type==="parameter_update"){const t=this.findParameterById(e.id);if(t){t.update(e.value);const n=this.subscriptions.get(t.path);n&&n.forEach(o=>{o&&o(e.value)})}}}rebuildParameterMap(){this.parameterMap.clear();const e=t=>{t instanceof mn&&this.parameterMap.set(t.path,t);for(const n in t){const o=t[n];Array.isArray(o)?o.forEach(e):typeof o=="object"&&o!==null&&(o instanceof mn||o.constructor.name.startsWith("Resolume"))&&e(o)}};e(this.state),console.log(`[ResolumeManager] Indexed ${this.parameterMap.size} parameters`);for(const[t,n]of this.subscriptions.entries()){const o=this.parameterMap.get(t);o&&(console.log(`[ResolumeManager] Resubscribing to ${t}`),this.sendSubscription(o),n.forEach(s=>{s&&s(o.value)}))}}findParameterById(e){for(const t of this.parameterMap.values())if(t.id===e)return t}getParameter(e){return this.parameterMap.get(e)}setValue(e,t){const n=this.getParameter(e);n&&this.ws&&this.ws.send({action:"set",parameter:`/parameter/by-id/${n.id}`,id:n.id,value:t})}}const lt=new Vp,V=new np,P=new Te(V);V.setMetricsProvider({isRegionCollapsed:i=>P.observableState.gridMetrics.regions.get(i)?.isCollapsed??!1});const xe=new Un(V,P),Ln=new Lt(V,P);P.settingsLoaded.then(()=>{P.observableState.localSettings.enableResolumeIO&&(lt.connect(),xe.sendResolumeControl("connect"))});qt(()=>En(V.observableState.graph.inner),()=>{P.updateWireLayout(V.observableState.graph)},{fireImmediately:!0,delay:50});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zp=({finisher:i,descriptor:e})=>(t,n)=>{var o;if(n===void 0){const s=(o=t.originalKey)!==null&&o!==void 0?o:t.key,r=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(r.finisher=function(a){i(a,s)}),r}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i?.(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ot(i,e){return zp({descriptor:t=>({get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}const Ia=`.la,
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
`,Et=[ka(Ia),pe`
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
    --font-size-xs: 10px;
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
`],Hp=pe`
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
`,qp=pe`
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
`;var Wp=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,As=(i,e,t,n)=>{for(var o=n>1?void 0:n?jp(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Wp(e,t,o),o};let li=class extends Sn{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.hasContent=!1}handleSlotChange(i){const t=i.target.assignedNodes({flatten:!0});this.hasContent=t.some(n=>n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE&&n.textContent?.trim()!=="")}render(){return M`
      <button ?disabled=${this.disabled}>
        ${this.icon?M`<i class="las ${this.icon}"></i>`:""}
        <span class="${this.hasContent?"":"hidden"}">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
      </button>
    `}};li.styles=[ka(Ia),pe`
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
  `];As([H({type:String})],li.prototype,"icon",2);As([H({type:Boolean})],li.prototype,"disabled",2);As([Xe()],li.prototype,"hasContent",2);li=As([ke("ui-button")],li);var Up=Object.defineProperty,Gp=Object.getOwnPropertyDescriptor,gf=(i,e,t,n)=>{for(var o=n>1?void 0:n?Gp(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Up(e,t,o),o};let Zo=class extends Sn{constructor(){super(...arguments),this.icon=""}render(){return M`<i class="las ${this.icon}"></i>`}};Zo.styles=[ka(Ia),pe`
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
    `];gf([H({type:String})],Zo.prototype,"icon",2);Zo=gf([ke("ui-icon")],Zo);const re={kind:"atomic",type:"number",defaultValue:0},Ta={kind:"atomic",type:"string",defaultValue:""},be={kind:"atomic",type:"any"};function We(i,e){if(i==null)return i;if(e.kind==="atomic")return i&&typeof i=="object"&&"kind"in i&&i.kind==="atomic"?i.value:i;if(e.kind==="array")return Array.isArray(i)?i.map(t=>We(t,e.element)):[];if(e.kind==="record"){if(typeof i=="object"){if("fields"in i){const n=i,o={};for(const[s,r]of Object.entries(e.fields))s in n.fields&&(o[s]=We(n.fields[s],r));return o}const t={};for(const[n,o]of Object.entries(e.fields))n in i&&(t[n]=We(i[n],o));return t}return i}return i}function ei(i,e){if(i==null||e.kind==="atomic")return i;if(e.kind==="array")return Array.isArray(i)?i.map(n=>ei(n,e.element)):(console.error("toStructor array fail: not array",i),[]);if(e.kind==="record"){const t={};for(const[n,o]of Object.entries(e.fields))i[n]!==void 0&&(t[n]=ei(i[n],o));return{fields:t}}return i}function Ee(i){const e={kind:"record",fields:i.config||{}},t={kind:"record",fields:i.outputs};return{id:i.id,kind:"primitive",metadata:i.metadata,inputs:i.inputs,outputs:i.outputs,configType:e,isRealtime:i.isRealtime,onMessage:i.onMessage,getDisplayLabel:i.getDisplayLabel,subgraphExpansionTag:i.subgraphExpansionTag,getChildren:i.getChildren,getRegion:i.getRegion,cycleBreakingPorts:i.cycleBreakingPorts,consolidate:i.consolidate?(n,o,s,r)=>{const a=We(o,e),l={},c=n.fields||{};for(const[f,h]of Object.entries(i.inputs||{}))c[f]!==void 0&&(l[f]=We(c[f],h));i.consolidate(l,a,s,r)}:void 0,computeBackwardPorts:i.computeBackwardPorts,computeForwardPorts:(n,o,s,r)=>i.computeForwardPorts?i.computeForwardPorts(n,o,s,r):{inputs:{kind:"record",fields:i.inputs||{}},outputs:t},shouldRecompileOnConfigChange:(n,o)=>i.shouldRecompileOnConfigChange?i.shouldRecompileOnConfigChange(n,o):!1,compileConfig:i.compileConfig,ui:i.ui,createState:i.createState,execute:(n,o,s)=>{const r=We(o,e);let a;if(i.createState){const g=s.nodeId||`${i.id}-${JSON.stringify(o)}`;s.nodeState.has(g)||s.nodeState.set(g,i.createState(r,s)),a=s.nodeState.get(g)}let l=n;if(i.autoBroadcast&&i.inputs){const g={outputs:{},reshape:i.reshape??"none"},m=typeof i.autoBroadcast=="object"?i.autoBroadcast:{};if(r&&typeof r=="object"&&"autoBroadcast"in r){const x=r.autoBroadcast;x&&typeof x=="object"&&Object.assign(m,x)}for(const[x,v]of Object.entries(i.inputs)){const C=v.kind==="array",k=m[x],S=C?"collect":{reduce:"first"},A=k&&"combine"in k?k.combine:S;g.outputs[x]={fromFields:[x],combine:A??void 0}}const y=s.broadcast(g,n).apply(x=>{const v={};for(const[k,S]of Object.entries(i.inputs))if(g.outputs[k]?.combine==="collect"&&Array.isArray(x[k])){const I=x[k].map(L=>{if(Array.isArray(L)&&L.length>0&&Array.isArray(L[0])&&S.kind==="array"&&S.element.kind==="record")return L.map($=>We($,S.element));const D=S.element?.kind==="array",F=Array.isArray(L)&&L.length>0&&Array.isArray(L[0]);return D&&!F?We(L,S.element):We(L,S)}),O=S.element?.kind==="array";I.length===1&&Array.isArray(I[0])&&!O?v[k]=I[0]:v[k]=I}else{const I=x[k],O=S.element?.kind==="array",L=Array.isArray(I)&&I.length>0&&Array.isArray(I[0]);let D;S.kind==="array"&&O&&!L?D=We(I,S.element):D=We(I,S),v[k]=D!==void 0?D:S.defaultValue}return i.execute(v,r,s,a)});if(Array.isArray(y))if(y.length>0){const x={},v=y[0];for(const k of Object.keys(v))x[k]=[];for(const k of y)for(const[S,A]of Object.entries(k))x[S]&&x[S].push(A);const C={};for(const[k,S]of Object.entries(x)){const A=i.outputs[k]||i.dynamicOutputType;A&&(C[k]=ei(S,{kind:"array",element:A,size:y.length}))}return{fields:C}}else return{fields:{}};else{let x=y,v;x&&typeof x=="object"&&"outputs"in x&&("ui"in x||Object.keys(x).length===2)&&("outputs"in i.outputs||(v=x.ui,x=x.outputs));const C=new Set([...Object.keys(i.outputs),...Object.keys(x)]),k={};for(const A of C){const I=i.outputs[A]||i.dynamicOutputType;I&&x[A]!==void 0&&(k[A]=ei(x[A],I))}const S={fields:k};return v!==void 0?{outputs:S,ui:v}:S}}else if(i.inputs&&Object.keys(i.inputs).length>0){const g={};for(const[m,b]of Object.entries(i.inputs))n.fields&&n.fields[m]!==void 0?g[m]=We(n.fields[m],b):b.defaultValue!==void 0&&(g[m]=b.defaultValue);l=g}let f=i.execute(l,r,s,a),h;f&&typeof f=="object"&&"outputs"in f&&("ui"in f||Object.keys(f).length===2)&&("outputs"in i.outputs||(h=f.ui,f=f.outputs));const d={},u=f;if(u){const g=new Set([...Object.keys(i.outputs),...Object.keys(u)]);for(const m of g){const b=i.outputs[m]||i.dynamicOutputType;b&&u[m]!==void 0&&(d[m]=ei(u[m],b))}}const p={fields:d};return h!==void 0?{outputs:p,ui:h}:p}}}function Yp(i,e,t){const n={outputs:{},reshape:"none"};for(const[a,l]of Object.entries(e))n.outputs[a]={fromFields:l.source?Array.isArray(l.source)?l.source:[l.source]:[a],combine:l.combine??{reduce:"first"}};const s=i.broadcast(n,t).apply(a=>a),r={};if(Array.isArray(s)){for(const a of Object.keys(e))r[a]=[];for(const a of s)for(const l of Object.keys(e))r[l].push(a[l])}else for(const a of Object.keys(e))r[a]=s[a];for(const[a,l]of Object.entries(e))if(l.type)if(l.combine==="collect"){const c=r[a];Array.isArray(c)?r[a]=c.map(f=>We(f,l.type)):r[a]=We(c,l.type)}else{const c=r[a];Array.isArray(c)?r[a]=c.map(f=>We(f,l.type)):r[a]=We(c,l.type)}return r}function Ce(i,e,t,n="binary"){return Ee({id:i,metadata:e,inputs:n==="binary"?{a:re,b:re}:{a:re},outputs:{result:re},autoBroadcast:!0,reshape:"vector",execute:(s,r,a)=>{if(n==="binary"){const{a:l,b:c}=s;return{result:t(l,c)}}else{const{a:l}=s;return{result:t(l,0)}}}})}function Da(i){if(i.length===0)return be;const e=i[0];if(i.every(s=>s.kind===e.kind&&(s.kind==="atomic"?s.type===e.type:!0)))return e;if(i.some(s=>s.kind==="atomic"&&s.type==="string"))return be;const n=i.some(s=>s.kind==="atomic"&&s.type==="number"),o=i.some(s=>s.kind==="atomic"&&s.type==="boolean");return n||o?re:be}function Y(i){const e={};for(const[o,s]of Object.entries(i.inputs||{}))if("kind"in s)e[o]=s;else if("type"in s){const r=s,a=r.type,l=r.allowMultiConnection?{kind:"array",size:"dynamic",element:a}:a;e[o]={...l,redirect:r.redirect,defaultValue:"defaultValue"in r?r.defaultValue:a.defaultValue}}const t={};for(const[o,s]of Object.entries(i.outputs||{}))"kind"in s?t[o]=s:"type"in s&&(t[o]=s.type);return{...Ee({...i,autoBroadcast:i.autoBroadcast,inputs:e,outputs:t,compileConfig:(o,s)=>i.compileConfig?i.compileConfig(o,s):o,computeForwardPorts:(o,s,r,a)=>i.computeForwardPorts?i.computeForwardPorts(o,s,r,a):{inputs:{kind:"record",fields:e},outputs:{kind:"record",fields:t}},computeBackwardPorts:(o,s,r)=>i.computeBackwardPorts?i.computeBackwardPorts(o,s,r):{inputRequirements:{kind:"record",fields:{}}},onMessage:i.onMessage,config:i.config}),ui:i.ui,version:i.version||"1.0.0",displayName:i.displayName||i.id,aliases:i.aliases,compileConfig:i.compileConfig,loadCompileDeps:i.loadCompileDeps,getDisplayLabel:i.getDisplayLabel,subgraphExpansionTag:i.subgraphExpansionTag,extendedInputs:i.inputs,extendedOutputs:i.outputs,inspectInputs:i.inspectInputs,shouldRecompileOnConfigChange:i.shouldRecompileOnConfigChange,getChildren:i.getChildren,getRegion:i.getRegion,usesMidiDeviceIO:i.usesMidiDeviceIO,syncUIFromCompiledConfig:i.syncUIFromCompiledConfig}}function T(i){const e=i.extendedInputs||i.inputs||{},t=Object.entries(e).map(([r,a])=>{const l="type"in a&&typeof a.type=="object"&&"kind"in a.type,c=l?a.type:a;return{name:r,type:c,description:l?a.description:void 0,defaultValue:l?a.defaultValue:void 0,range:l?a.range:void 0,step:l?a.step:void 0,suppressInputEditor:l?a.suppressInputEditor:c.kind==="atomic"&&c.type==="any"?!0:void 0,alwaysShowInputEditor:l?a.alwaysShowInputEditor:void 0,suppressLabel:l?a.suppressLabel:void 0,redirect:l?a.redirect:void 0,allowMultiConnection:l?a.allowMultiConnection:void 0}}),n=i.extendedOutputs||i.outputs||{},o=Object.entries(n).map(([r,a])=>{const l="type"in a&&typeof a.type=="object"&&"kind"in a.type,c=l?a.type:a;return{name:r,type:c,description:l?a.description:void 0,suppressLabel:l?a.suppressLabel:void 0}}),s={id:i.id,version:i.version||"1.0.0",displayName:i.displayName||i.id,aliases:i.aliases,definition:i,inputs:t,outputs:o,compileConfig:i.compileConfig,getDisplayLabel:i.getDisplayLabel,inspectInputs:i.inspectInputs,shouldRecompileOnConfigChange:i.shouldRecompileOnConfigChange,getChildren:i.getChildren,getRegion:i.getRegion,syncUIFromCompiledConfig:i.syncUIFromCompiledConfig};s.ui=i.ui,Q.register(s)}function Ml(i,e){const t=i.name,n=i.typeId;if(!e)return!t||t==="#"?n:t&&t.includes("#")?t.replace(/#/g,n):t;const o=!t||t==="#",s=t&&t.includes("#");if(o){if(e.getDisplayLabel){const r=e.getDisplayLabel(i);if(r)return r}return e.displayName}if(s){const r=e.getDisplayLabel?e.getDisplayLabel(i):e.displayName;return t.replace(/#/g,r||e.displayName)}return t}var B=(i=>(i.IO="IO",i.Math="Math",i.Logic="Logic",i.Data="Data",i.Functional="Functional",i.Core="Core",i.Custom="Custom",i.Utility="Utility",i.Debug="Debug",i))(B||{});const mf={kind:"record",fields:{domain:{kind:"array",element:re,size:2},range:{kind:"array",element:re,size:2},segments:{kind:"array",element:{kind:"record",fields:{id:{kind:"atomic",type:"string"},weight:re,curve:{kind:"record",fields:{type:{kind:"atomic",type:"string"},value:{...re,optional:!0},points:{kind:"array",element:{kind:"record",fields:{x:re,y:re}},optional:!0,size:"dynamic"}}}}},size:"dynamic"},envelopeNodes:{kind:"array",element:{kind:"record",fields:{id:{kind:"atomic",type:"string"},x:re,y:re}},optional:!0,size:"dynamic"}},hint:"curve"},bf=(i,e)=>{const t=i.value,n=i.easing;if(!n||!n.segments||n.segments.length===0)return{result:t};const{domain:o,range:s,segments:r}=n,[a,l]=o,[c,f]=s;let h=(t-a)/(l-a);h=Math.max(0,Math.min(1,h));const d=r.reduce((k,S)=>k+S.weight,0)||1;let u=0,p=r[r.length-1],g=0,m=0;for(const k of r){const S=k.weight/d;if(h>=u&&h<=u+S){p=k,g=u,m=S;break}u+=S}const b=(h-g)/m;let y=0;const x=p.curve,v=x.type==="step"?x.value??2:1;switch(x.type){case"exponential":const k=Math.pow(10,-(x.value??0));y=Math.pow(b,k);break;case"linear":y=b;break;case"step":v<=1?y=0:y=Math.floor(b*v)/(v-1),b>=.999&&(y=1);break;case"sin":y=-(Math.cos(Math.PI*b)-1)/2;break;case"quad":y=b*b;break;case"points":if(x.points&&x.points.length>0){const S=x.points;if(b<=S[0].x)y=S[0].y;else if(b>=S[S.length-1].x)y=S[S.length-1].y;else for(let A=0;A<S.length-1;A++){const I=S[A],O=S[A+1];if(b>=I.x&&b<=O.x){const L=(b-I.x)/(O.x-I.x);y=I.y+L*(O.y-I.y);break}}}else y=b;break;default:y=b}return{result:c+y*(f-c)}},yf=Y({id:"curve.ease",version:"1.0.0",displayName:"Curve Ease",metadata:{category:B.Math,keywords:["curve","ease","envelope","shape"],description:"Applies a custom curve easing to the input value."},inputs:{value:{type:re,description:"Input value (0-1)",defaultValue:0},easing:{type:{...mf,optional:!0},description:"Easing Curve Configuration",suppressInputEditor:!0}},outputs:{result:re},autoBroadcast:!0,inspectInputs:!0,compileConfig:i=>({fields:{easing:i?.easing??{domain:[0,1],range:[0,1],segments:[{id:"s1",weight:1,curve:{type:"exponential",value:0}}]}},untagged:[]}),execute:bf}),vf=Y({id:"curve.ease4",version:"1.0.0",displayName:"Curve Ease 4",metadata:{category:B.Math,keywords:["curve","ease","envelope","shape","multi"],description:"Applies a custom 4-segment curve easing to the input value."},inputs:{value:{type:re,description:"Input value (0-1)",defaultValue:0},easing:{type:{...mf,optional:!0},description:"Easing Curve Configuration",suppressInputEditor:!0,defaultValue:{domain:[0,1],range:[0,1],segments:[{id:"s1",weight:1,curve:{type:"exponential",value:.5}},{id:"s2",weight:1,curve:{type:"exponential",value:0}},{id:"s3",weight:1,curve:{type:"exponential",value:-.5}},{id:"s4",weight:1,curve:{type:"exponential",value:-1}}]}}},outputs:{result:re},autoBroadcast:!0,inspectInputs:!0,compileConfig:i=>({fields:{easing:i?.easing??{domain:[0,1],range:[0,1],segments:[{id:"s1",weight:1,curve:{type:"exponential",value:.5}},{id:"s2",weight:1,curve:{type:"exponential",value:0}},{id:"s3",weight:1,curve:{type:"exponential",value:-.5}},{id:"s4",weight:1,curve:{type:"exponential",value:-1}}]}},untagged:[]}),execute:bf});T(yf);T(vf);const Kp=(i,e,t,n)=>{const o=i.value??0,s=e?.config;if(!s||!s.envelopeNodes||s.envelopeNodes.length<2||!s.segments)return{result:o};const r=s.envelopeNodes,a=s.segments||[],l=r[0],c=r[r.length-1];if(o<=l.x)return{result:l.y};if(o>=c.x)return{result:c.y};let f=n.lastSegmentIndex||0;if(f>=r.length-1||o<r[f].x||o>=r[f+1].x){for(let b=0;b<r.length-1;b++)if(o>=r[b].x&&o<r[b+1].x){f=b;break}}n.lastSegmentIndex=f;const h=r[f],d=r[f+1],u=a[f],p=(o-h.x)/(d.x-h.x);let g=p;if(u&&u.curve){const b=u.curve.type||"linear",y=u.curve.value||0;if(b==="linear")g=p;else if(b==="exponential"){const x=Math.pow(10,-(y??0)),v=Math.max(0,p);g=Math.pow(v,x)}}return{result:h.y+(d.y-h.y)*g}},wf=Y({id:"curve.env",version:"1.0.0",displayName:"Curve Envelope",metadata:{category:"Curve",keywords:["envelope","automation","ramp"],description:"User-editable curve envelope"},inputs:{value:{type:re,description:"Input value (0-1)",defaultValue:0}},outputs:{result:{type:re,description:"Output value"}},config:{config:{kind:"atomic",type:"any",defaultValue:{}}},inspectInputs:!0,createState:()=>({lastSegmentIndex:0}),autoBroadcast:!0,compileConfig:i=>({config:i.config??i.curveData??i.values?.config??{domain:[0,1],range:[0,1],envelopeNodes:[{id:"n1",x:0,y:0},{id:"n2",x:1,y:1}],segments:[{id:"s1",weight:1,curve:{type:"linear"}}]}}),execute:Kp});T(wf);const Xp={value:{type:re,defaultValue:0},start:{type:re,defaultValue:0},end:{type:re,defaultValue:1,optional:!0},length:{type:re,defaultValue:1,optional:!0}},Ar=Y({id:"curve.crop",version:"1.0.0",displayName:"Curve Crop",metadata:{category:"Curve",keywords:["crop","slice","remap","linear"],description:"Linear mapping from 0-1 to start-end range."},config:{mode:{kind:"atomic",type:"string",defaultValue:"start-end"}},computeForwardPorts:(i,e,t)=>{const n=e.mode||"start-end",o={value:{...re,description:"Input value (0-1)",defaultValue:0},start:{...re,description:"Output at 0",defaultValue:0}};return n==="start-length"?o.length={...re,description:"Length of crop",defaultValue:1}:o.end={...re,description:"Output at 1",defaultValue:1},{inputs:{kind:"record",fields:o},outputs:{kind:"record",fields:{result:re}}}},inputs:Xp,outputs:{result:{type:re}},ui:{inspector:{fields:[{type:"tab-bar",label:"Mode",path:"mode",options:[{label:"Start / End",value:"start-end"},{label:"Start / Length",value:"start-length"}]}]}},compileConfig:i=>({mode:i.mode||"start-end"}),autoBroadcast:!0,inspectInputs:!0,execute:(i,e,t)=>{const n=e.mode||"start-end",o=i.start??0,s=i.value??0;let r;if(n==="start-length"){const c=i.length??1;r=o+c}else r=i.end??1;r<o&&(r=o);let a=0;const l=r-o;if(l<1e-6)a=s>=o?1:0;else{const c=(s-o)/l;a=Math.max(0,Math.min(1,c))}return{outputs:{result:a},ui:{start:o,end:r}}},shouldRecompileOnConfigChange:i=>!0});T(Ar);const w={kind:"atomic",type:"number",defaultValue:0},Al={kind:"atomic",type:"string"},xf={kind:"atomic",type:"boolean"},he={kind:"atomic",type:"any"},Sf={kind:"atomic",type:"string",options:["time","beats"],defaultValue:"time"},Jp={kind:"record",fields:{type:Al,channel:w,deviceId:{...Al,optional:!0},time:{...w,optional:!0},note:{...w,optional:!0},velocity:{...w,optional:!0},cc:{...w,optional:!0},value:{...w,optional:!0}},hint:"midi"},X={kind:"array",size:"dynamic",element:Jp,hint:"midi-stream"},Pa={kind:"array",element:w,size:4,hint:"float4"},Il={kind:"record",fields:{note:w,velocity:w},untagged:[]};({...Il},{...Il});const Qp={kind:"record",fields:{noteIndex:he,velocity:w,hold:xf},untagged:[]},Ge={kind:"array",size:"dynamic",element:Qp,hint:"step-sequence"},La=Y({id:"debug.scope",version:"1.0.0",displayName:"Scope",metadata:{category:B.Debug,keywords:["debug","scope","chart","visualize"],description:"Visualizes input values over time."},inputs:{value:{type:w,suppressLabel:!0,alwaysShowInputEditor:!0}},outputs:{value:w},config:{},inspectInputs:!0,execute:i=>({value:i.value}),compileConfig:i=>({})});T(La);T(La);let yo=null;const Zp=[{type:"string",label:"Expression",path:"code",placeholder:"e.g. sin(time) * 0.5"}],kf=Y({id:"logic.expression",version:"2.0.0",displayName:"Expression",metadata:{category:B.Logic,keywords:["expression","math","script","code"],description:"Evaluates a mathematical expression (V2)."},inputs:{},config:{jsCode:{...Ta,optional:!0},inputs:{kind:"record",fields:{},optional:!0},outputs:{kind:"record",fields:{},optional:!0},diagnostics:{kind:"atomic",type:"any",optional:!0}},outputs:{result:be},autoBroadcast:!1,ui:{inspector:{fields:Zp}},loadCompileDeps:async()=>{yo||(yo={buildCode:(await Me(()=>import("./builder-C0dqNj5S.js"),__vite__mapDeps([0,1,2]))).buildCode})},shouldRecompileOnConfigChange:i=>!0,compileConfig:(i,e)=>{const t=i.code||"",n=`expr_v2_1:${t}`;if(e&&e.compileCache&&e.compileCache.has(n))return e.compileCache.get(n);if(!yo)return{jsCode:void 0,diagnostics:[{message:"Compiler not loaded. Please wait...",severity:rl.Warning,source:"system"}],inputs:{},outputs:{}};try{const o=yo.buildCode({code:t,emitJS:!0,autoInputs:!0,containerMode:"expression-like"}),s=o.diagnostics.some(c=>c.severity==="error"),r={};for(const[c,f]of Object.entries(o.inputs)){let h=he;f.kind==="primitive"&&f.name==="number"&&(h=w),r[c]={...h,description:`Variable ${c}`}}const a={result:{...he,description:"Result"}},l={jsCode:s?void 0:o.outJS?.code,diagnostics:o.diagnostics,inputs:r,outputs:a};return e&&e.compileCache&&e.compileCache.set(n,l),l}catch(o){return{jsCode:void 0,diagnostics:[{message:`Internal Compiler Error: ${o}`,severity:rl.Error,source:"compiler"}],inputs:{},outputs:{}}}},computeForwardPorts:(i,e)=>{const t=e&&e.inputs?e.inputs:{},n=e&&e.outputs?e.outputs:{result:he};return{inputs:{kind:"record",fields:t},outputs:{kind:"record",fields:n}}},createState:()=>({}),syncUIFromCompiledConfig:(i,e)=>{e.diagnostics=i.diagnostics||[],e.jsCode=i.jsCode},execute:(i,e,t,n)=>{if(!e.jsCode)return{result:0};if(!n)return{result:0};if(n.lastCode!==e.jsCode||!n.runner)try{const o=e.jsCode.replace(/module\.exports\s*=\s*{\s*compute\s*};?;?/,"return compute;"),s=new Function(o);n.runner=s(),n.lastCode=e.jsCode}catch(o){return console.error("Failed to compile runner:",o),{result:null}}try{const o=i.fields?i.fields:i;return{result:n.runner(o)}}catch(o){return console.error("Runtime error:",o),{result:null}}}});T(kf);const eg=Y({id:"gen.sawtooth",version:"1.0.0",displayName:"Sawtooth",metadata:{category:"Oscillator",keywords:["oscillator","sawtooth","ramp","lfo","generator"],description:"Generates a linear sawtooth wave (0.0 to 1.0) at the given frequency."},inputs:{freq:{type:w,defaultValue:1,range:[0,60],description:"Frequency in Hz"}},outputs:{out:w},autoBroadcast:!0,isRealtime:()=>!0,createState:()=>({phase:0}),execute:(i,e,t,n)=>{const o=i.freq,s=t.clock.dt;return o>=60-1e-6?{out:Math.random()}:(n.phase+=s*o,n.phase-=Math.floor(n.phase),{out:n.phase})}});T(eg);const $e={IDLE:0,ATTACK:1,DECAY:2,SUSTAIN:3,RELEASE:4},Ir=Y({id:"gen.adsr",version:"1.0.0",displayName:"ADSR",metadata:{category:"Envelope",keywords:["envelope","adsr","modulation"],description:"Attack-Decay-Sustain-Release envelope generator triggered by MIDI."},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},inputs:{stream:{type:X,description:"MIDI Stream",allowMultiConnection:!0},attack:{type:w,defaultValue:.1,range:[0,5],description:"Attack Time (s)"},decay:{type:w,defaultValue:1,range:[0,5],description:"Decay Time (s)"},sustain:{type:w,defaultValue:.7,range:[0,1],description:"Sustain Level (0-1)"},release:{type:w,defaultValue:1,range:[0,5],description:"Release Time (s)"}},config:{mode:{kind:"atomic",type:"string",defaultValue:"D"}},ui:{inspector:{fields:[{label:"Mode",path:"mode",type:"tab-bar",options:[{label:"ADSR",value:"ADSR"},{label:"ADS",value:"ADS"},{label:"D",value:"D"}]}]}},compileConfig:i=>({mode:i.mode||i.values?.mode||"D"}),computeForwardPorts:(i,e)=>{const t=e.mode||"D",n={stream:X};return t==="ADSR"?(n.attack=w,n.decay=w,n.sustain=w,n.release=w):t==="ADS"?(n.attack=w,n.decay=w,n.sustain=w):t==="D"&&(n.decay=w),{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{value:w}}}},outputs:{value:{type:w,description:"Envelope Value (0-1)"}},isRealtime:()=>!0,shouldRecompileOnConfigChange:i=>!0,createState:()=>({phase:$e.IDLE,value:0,time:0,activeNotes:0}),execute:(i,e,t,n)=>{const o=t.clock.dt,s=e.mode||"D",r=i.stream;let a=0,l=0,c=0,f=0;if(s==="D"?(a=0,l=Math.max(0,i.decay??.1),c=0,f=l):s==="ADS"?(a=Math.max(0,i.attack??.1),l=Math.max(0,i.decay??.1),c=Math.max(0,Math.min(1,i.sustain??.7)),f=l):(a=Math.max(0,i.attack??.1),l=Math.max(0,i.decay??.1),c=Math.max(0,Math.min(1,i.sustain??.7)),f=Math.max(0,i.release??.5)),Array.isArray(r))for(const h of r)h.type==="note_on"&&(h.velocity??0)>0?(n.activeNotes++,n.activeNotes===1&&(n.phase=$e.ATTACK,n.value=0,n.time=0,a<=0&&(n.value=1,n.phase=$e.DECAY,n.time=0,l<=0&&(n.value=c,n.phase=$e.SUSTAIN)))):(h.type==="note_off"||h.type==="note_on"&&(h.velocity??0)===0)&&(n.activeNotes=Math.max(0,n.activeNotes-1));switch(n.activeNotes===0&&n.phase!==$e.IDLE&&n.phase!==$e.RELEASE&&(n.phase=$e.RELEASE,n.time=0),n.phase){case $e.IDLE:n.value=0,n.time=0;break;case $e.ATTACK:n.time+=o,n.value+=1/Math.max(.001,a)*o,n.value>=1&&(n.value=1,n.phase=$e.DECAY,n.time=0,l<=0&&(n.value=c,n.phase=$e.SUSTAIN));break;case $e.DECAY:n.time+=o,n.value-=(1-c)/Math.max(.001,l)*o,n.value<=c&&(n.value=c,n.phase=$e.SUSTAIN,n.time=0);break;case $e.SUSTAIN:n.time+=o,n.value=c;break;case $e.RELEASE:n.time+=o,f<=0?(n.value=0,n.phase=$e.IDLE,n.time=0):(n.value-=1/f*o,n.value<=0&&(n.value=0,n.phase=$e.IDLE,n.time=0));break}return{outputs:{value:Math.max(0,Math.min(1,n.value))},ui:{value:n.value,phase:n.phase,time:n.time}}},inspectInputs:!0});T(Ir);function tg(i){let o=i;return{next:()=>(o=(1103515245*o+12345)%2147483648,o/2147483647)}}const ng=Y({id:"math.random",version:"1.1.0",displayName:"Random",metadata:{category:"Math",keywords:["random","stochastic","noise","seed","white"],description:"Generates a random number (0-1). Supports on-trigger or free-run modes."},inputs:{trigger:{type:X,description:"Trigger Signal",allowMultiConnection:!0}},config:{seed:{kind:"atomic",type:"number",defaultValue:12345},mode:{kind:"atomic",type:"string",defaultValue:"on-trigger"}},outputs:{value:{type:w,description:"Random Value"}},autoBroadcast:{trigger:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:[{type:"tab-bar",label:"Mode",path:"mode",options:[{label:"On Trigger",value:"on-trigger"},{label:"Free Run",value:"free-run"}],default:"on-trigger"},{type:"number",label:"Seed",path:"seed",default:12345}]}},compileConfig:i=>({mode:i.mode||i.values?.mode||"on-trigger",seed:i.seed||i.values?.seed||12345}),computeForwardPorts:(i,e)=>{const t=e.mode||"on-trigger",n={};return t==="on-trigger"&&(n.trigger={type:X,description:"Trigger Signal",allowMultiConnection:!0}),{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{value:w}}}},isRealtime:i=>i.mode==="free-run",shouldRecompileOnConfigChange:i=>!0,createState:i=>{const t=i?.seed||12345,n=tg(t);return{generator:n,currentValue:n.next()}},execute:(i,e,t,n)=>{const o=e.mode||"on-trigger",s=i.trigger;if(o==="free-run")n.currentValue=n.generator.next();else if(Array.isArray(s))for(const r of s)r.type==="note_on"&&(r.velocity??0)>0&&(n.currentValue=n.generator.next());return{value:n.currentValue}}});T(ng);const ig=[{type:"string",label:"Device ID",path:"deviceId",placeholder:"Optional Device ID"}],og=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"CC",path:"cc",min:0,max:127,step:1},{type:"string",label:"Device ID",path:"deviceId",placeholder:"Optional Device ID"}],sg=Y({id:"midi.input",version:"1.0.0",displayName:"MIDI Input",metadata:{category:B.IO,keywords:["midi","input","source"],description:"Reads raw MIDI messages from a specific device."},inputs:{},config:{deviceId:{kind:"atomic",type:"string",optional:!0}},outputs:{stream:X},ui:{inspector:{fields:ig}},isRealtime:()=>!0,usesMidiDeviceIO:()=>!0,execute:(i,e,t)=>{const n=t.midi?.events,o=e.deviceId;return n&&o?{stream:n.filter(r=>r.deviceId===o)}:{stream:n||[]}},compileConfig:i=>({deviceId:i.deviceId})}),rg=Y({id:"midi.cc.input",version:"1.0.0",displayName:"MIDI CC Input",metadata:{category:B.IO,keywords:["midi","cc","input"],description:"Reads a MIDI CC value directly from the environment."},inputs:{},config:{channel:w,cc:w,deviceId:{kind:"atomic",type:"string",optional:!0}},outputs:{value:w},ui:{inspector:{fields:og}},isRealtime:()=>!0,usesMidiDeviceIO:()=>!0,execute:(i,e,t)=>{const n=e.channel||1,o=e.cc||0;e.deviceId;const s=`${n}:${o}`;return{value:t.midi?.values.get(s)??0}},compileConfig:i=>({channel:i.channel??1,cc:i.cc??0,deviceId:i.deviceId})});T(sg);T(rg);const ag=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"CC",path:"cc",min:0,max:127,step:1}],lg=Y({id:"midi.cc",version:"1.0.0",displayName:"MIDI CC",metadata:{category:B.IO,keywords:["midi","cc","control change"],description:"Reads MIDI Control Change messages from a stream."},inputs:{stream:{type:X,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{channel:w,cc:w},outputs:{value:w},ui:{inspector:{fields:ag}},createState:()=>({value:0}),execute:(i,e,t,n)=>{const o=e.channel||1,s=e.cc||0,r=i.stream||[];if(r&&Array.isArray(r))for(const a of r)a.type==="cc"&&a.channel===o&&a.cc===s&&(n.value=a.value??0);return{value:n.value}},compileConfig:i=>({channel:i.channel??1,cc:i.cc??0})});T(lg);const cg=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"Note",path:"note",min:0,max:127,step:1}],fg=Y({id:"midi.note",version:"1.0.0",displayName:"MIDI Note",metadata:{category:B.IO,keywords:["midi","note","keyboard"],description:"Reads MIDI Note messages from a stream."},inputs:{stream:{type:X,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{channel:w,note:w},outputs:{note:{kind:"atomic",type:"number",optional:!0},velocity:w,gate:w},ui:{inspector:{fields:cg}},createState:()=>({velocity:0,gate:0}),execute:(i,e,t,n)=>{const o=e.channel||1,s=e.note||60,r=i.stream||[];if(r&&Array.isArray(r))for(const a of r)a.channel===o&&(a.type==="note_on"&&a.note===s?(n.velocity=a.velocity??0,n.gate=1):a.type==="note_off"&&a.note===s&&(n.gate=0));return{note:n.gate?s:null,velocity:n.velocity,gate:n.gate}},compileConfig:i=>({channel:i.channel??1,note:i.note??60})});T(fg);const hg=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"Root Note",path:"rootNote",min:0,max:127,step:1},{type:"select",label:"Priority",path:"priority",options:[{label:"Last Note",value:"last"},{label:"Low Note",value:"low"},{label:"High Note",value:"high"}]}],dg=Y({id:"midi.to_mono",version:"1.0.0",displayName:"MIDI to Mono",metadata:{category:B.IO,keywords:["midi","mono","converter"],description:"Converts a polyphonic MIDI stream to a monophonic note signal."},inputs:{stream:{type:X,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{channel:w,rootNote:w,priority:{kind:"atomic",type:"string",optional:!0}},outputs:{note:{kind:"atomic",type:"number",optional:!0},velocity:w,gate:w,frequency:w},ui:{inspector:{fields:hg}},createState:()=>({activeNotes:[],gate:0}),execute:(i,e,t,n)=>{const o=e.channel||1,s=e.rootNote??60,r=i.stream||[];if(n.activeNotes||(n.activeNotes=[]),r&&Array.isArray(r))for(const l of r)l.channel===o&&(l.type==="note_on"?(n.activeNotes=n.activeNotes.filter(c=>c.note!==l.note),n.activeNotes.push({note:l.note,velocity:l.velocity??0})):l.type==="note_off"&&(n.activeNotes=n.activeNotes.filter(c=>c.note!==l.note)));const a=n.activeNotes.length>0?n.activeNotes[n.activeNotes.length-1]:null;if(a){n.gate=1;const l=a.note-s,c=440*Math.pow(2,(a.note-69)/12);return{note:l,velocity:a.velocity,gate:1,frequency:c}}else return n.gate=0,{note:null,velocity:0,gate:0,frequency:0}},compileConfig:i=>({channel:i.channel??1,rootNote:i.rootNote??60,priority:i.priority??"last"})});T(dg);const ug=[{type:"number",label:"Channel",path:"channel",min:1,max:16,step:1},{type:"number",label:"Note",path:"note",min:0,max:127,step:1}],pg=Y({id:"midi.filter",version:"1.0.0",displayName:"MIDI Filter",metadata:{category:B.IO,keywords:["midi","filter","note"],description:"Filters MIDI events, allowing only specific Note On/Off messages through."},inputs:{stream:{type:X,allowMultiConnection:!0},channel:{type:w,description:"MIDI Channel (1-16)",defaultValue:1},note:{type:w,description:"Note Number (0-127)",defaultValue:60}},config:{},outputs:{stream:X},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:ug}},execute:(i,e)=>{const t=i.channel??1,n=i.note??60,o=i.stream||[],s=[];if(o&&Array.isArray(o))for(const r of o)r.channel===t&&(r.type==="note_on"||r.type==="note_off")&&r.note===n&&s.push(r);return{stream:s}},compileConfig:i=>({channel:i.channel??1,note:i.note??60})});T(pg);const gg=Y({id:"midi.pitch",version:"1.0.0",displayName:"MIDI Pitch",metadata:{category:B.IO,keywords:["midi","pitch","transpose","shift"],description:"Transposes MIDI Note events by a specified amount."},inputs:{stream:{type:X,allowMultiConnection:!0},pitch:{type:w,description:"Pitch shift amount (semitones)",defaultValue:0,range:[-24,24]}},config:{},outputs:{stream:X},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},execute:(i,e)=>{const t=i.pitch??0,n=i.stream||[];return!n||!Array.isArray(n)?{stream:[]}:{stream:n.map(s=>{if(s.type==="note_on"||s.type==="note_off"){const r=Math.max(0,Math.min(127,Math.floor(s.note+t)));return{...s,note:r}}return s})}},compileConfig:i=>({pitch:i.pitch??0})});T(gg);const Tr=Y({id:"midi.trigger",version:"1.0.0",displayName:"MIDI Trigger",metadata:{category:B.IO,keywords:["midi","trigger","bang","button"],description:"Manually sends a Middle C Note On/Off pair when triggered."},inputs:{trigger:{type:w,description:"Trigger Signal",suppressInputEditor:!0}},config:{pitch:{...w,defaultValue:60},velocity:{...w,defaultValue:1,range:[0,1]},trigger:w},outputs:{stream:X},createState:()=>({lastTrigger:0,initialized:!1}),execute:(i,e,t,n)=>{const o=e.pitch||60,s=e.velocity||1,r=i.trigger||0;t.clock.dt;const a=[];return n.initialized?(r>n.lastTrigger&&(a.push({type:"note_on",channel:1,note:o,velocity:s,deviceId:"virtual",time:0}),a.push({type:"note_off",channel:1,note:o,velocity:0,deviceId:"virtual",time:0}),t.markSelfDirty&&t.markSelfDirty()),n.lastTrigger=r,{stream:a}):(n.lastTrigger=r,n.initialized=!0,{stream:a})},compileConfig:i=>({pitch:i.pitch??60,velocity:i.velocity??1,trigger:i.trigger}),ui:{inspector:{fields:[{type:"button",label:"Trigger",path:"trigger",text:"Bang"},{type:"number",label:"Pitch",path:"pitch",min:0,max:127,step:1,default:60},{type:"number",label:"Velocity",path:"velocity",min:0,max:1,step:.01,default:1}]}}});T(Tr);const mg=Y({id:"midi.merge",version:"1.0.0",displayName:"MIDI Merge",metadata:{category:B.IO,keywords:["midi","merge","combine","mix"],description:"Merges multiple MIDI streams into one using auto-broadcast."},inputs:{stream:{type:X,description:"Input Streams",allowMultiConnection:!0}},outputs:{stream:X},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{},execute:(i,e,t)=>({stream:i.stream||[]}),compileConfig:()=>({})});T(mg);const bg=Y({id:"midi.select",version:"1.0.0",displayName:"MIDI Select",metadata:{category:B.IO,keywords:["midi","select","router","switch","demux"],description:"Routes MIDI events to different ports based on note pitch."},inputs:{stream:{type:X,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},config:{count:{...w,defaultValue:4},root:{...w,defaultValue:60},skip:{...w,defaultValue:1}},outputs:{},dynamicOutputType:X,isRealtime:()=>!0,computeForwardPorts:(i,e,t)=>{const n=e.count||4,o={};for(let s=0;s<n;s++)o[s.toString()]={...X,hint:"midi-stream",description:`Offset ${s}`};return o.rem={...X,hint:"midi-stream",description:"Remainder"},{inputs:{kind:"record",fields:{stream:X}},outputs:{kind:"record",fields:o}}},shouldRecompileOnConfigChange:i=>!0,execute:(i,e,t)=>{const n=i.stream||[],o=e.count||4,s=e.root||60,r=e.skip||1,a={};for(let l=0;l<o;l++)a[l.toString()]=[];if(a.rem=[],n&&Array.isArray(n)){for(const l of n)if(l.type==="note_on"||l.type==="note_off"){const c=l.note-s;if(c>=0&&c%r===0){const f=c/r;if(f>=0&&f<o){a[f.toString()].push(l);continue}}a.rem.push(l)}}return{...a}},compileConfig:i=>({count:i.count??4,root:i.root??60,skip:i.skip??1}),ui:{inspector:{fields:[{type:"number",label:"Output Count",path:"count",min:1,max:128,step:1,default:4},{type:"number",label:"Root Note",path:"root",min:0,max:127,step:1,default:60},{type:"number",label:"Skip (Semitones)",path:"skip",min:1,max:24,step:1,default:1}]}}});T(bg);const yg=Y({id:"midi.onchange",version:"1.0.0",displayName:"MIDI On Change",metadata:{category:B.IO,keywords:["midi","trigger","change","delta"],description:"Triggers a note when input value changes."},inputs:{value:{type:be,description:"Input Value"}},config:{rootNote:{...w,defaultValue:60}},outputs:{stream:X},ui:{inspector:{fields:[{type:"number",label:"Root Note",path:"rootNote",min:0,max:127,step:1,default:60}]}},isRealtime:()=>!0,createState:()=>({lastValue:void 0}),execute:(i,e,t,n)=>{const o=i.value,s=e.rootNote??60,r=[];let a=!1;return typeof o=="number"&&typeof n.lastValue=="number"?Math.abs(o-n.lastValue)>1e-5&&(a=!0):o!==n.lastValue&&(a=!0),a?(r.push({type:"note_on",note:s,velocity:1,channel:1,time:0,deviceId:"onchange"}),r.push({type:"note_off",note:s,velocity:0,channel:1,time:0,deviceId:"onchange"}),n.lastValue=o):n.lastValue===void 0&&o!==void 0&&(n.lastValue=o),{stream:r}},compileConfig:i=>({rootNote:i.rootNote??60})});T(yg);const Cf={};for(let i=1;i<=16;i++)Cf[`w${i}`]={type:w,defaultValue:1,optional:!0,description:`Weight ${i}`};const vg=Y({id:"midi.onrange",version:"1.0.0",displayName:"MIDI On Range",metadata:{category:B.IO,keywords:["midi","trigger","range","zone"],description:"Triggers notes based on value position in weighted zones."},inputs:{value:{type:w,description:"Input Value"},start:{type:w,defaultValue:0},end:{type:w,defaultValue:1},...Cf},config:{rootNote:{...w,defaultValue:60,description:"Root Note"},zoneCount:{...w,defaultValue:1,description:"Number of Zones"},noteSkip:{...w,defaultValue:1}},outputs:{stream:X},ui:{inspector:{fields:[{type:"number",label:"Root Note",path:"rootNote",min:0,max:127,step:1,default:60},{type:"number",label:"Zone Count",path:"zoneCount",min:1,max:16,step:1,default:1},{type:"number",label:"Note Skip",path:"noteSkip",min:1,max:12,step:1,default:1}]}},isRealtime:()=>!0,createState:()=>({activeZoneIndex:null}),computeForwardPorts:(i,e)=>{const t=e.zoneCount??1,n={value:{...w},start:{...w,defaultValue:0},end:{...w,defaultValue:1}};if(t>1)for(let o=1;o<=t;o++)n[`w${o}`]={...w,defaultValue:1,description:`Weight ${o}`};return{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{stream:X}}}},shouldRecompileOnConfigChange:()=>!0,execute:(i,e,t,n)=>{const o=i.value??0,s=i.start??0,r=i.end??1,a=e.rootNote??60,l=e.zoneCount??1,c=e.noteSkip??1;let f=s,h=r;h<f&&(h=s,f=r);const d=[];if(o>=f&&o<=h){let u=0;if(l>1){const p=[];let g=0;for(let m=1;m<=l;m++){let y=i[`w${m}`];y&&typeof y=="object"&&"value"in y&&(y=y.value),y=y??1,typeof y!="number"&&(y=1),p.push(y),g+=y}if(g<=0)u=0;else{const m=h-f,y=(m===0?0:(o-f)/m)*g;let x=0;for(let v=0;v<l;v++)if(x+=p[v],y<=x){u=v;break}u>=l&&(u=l-1)}}else u=0;if(n.activeZoneIndex===null){const p=a+u*c;d.push({type:"note_on",note:p,velocity:1,channel:1,time:0,deviceId:"onrange"}),n.activeZoneIndex=u}else if(n.activeZoneIndex!==u){const p=a+n.activeZoneIndex*c;d.push({type:"note_off",note:p,velocity:0,channel:1,time:0,deviceId:"onrange"});const g=a+u*c;d.push({type:"note_on",note:g,velocity:1,channel:1,time:0,deviceId:"onrange"}),n.activeZoneIndex=u}}else if(n.activeZoneIndex!==null){const u=a+n.activeZoneIndex*c;d.push({type:"note_off",note:u,velocity:0,channel:1,time:0,deviceId:"onrange"}),n.activeZoneIndex=null}return{stream:d}},compileConfig:i=>({rootNote:i.rootNote??60,zoneCount:i.zoneCount??1,noteSkip:i.noteSkip??1})});T(vg);const Mf={type:"tab-bar",label:"Mode",path:"mode",options:[{label:"Time",value:"time"},{label:"Beats",value:"beats"}],default:"time"},wg={type:"tab-bar",label:"Beat Denom",path:"beatDenom",options:[{label:"1/64",value:.015625},{label:"1/32",value:.03125},{label:"1/16",value:.0625},{label:"1/8",value:.125},{label:"1/4",value:.25},{label:"1/2",value:.5},{label:"1/1",value:1}],default:.25},xg=[Mf],Sg=Y({id:"midi.delay",version:"1.0.0",displayName:"MIDI Delay",metadata:{category:B.Utility,keywords:["midi","delay","time","beats"],description:"Delays MIDI events by a specified duration."},inputs:{stream:{type:X,allowMultiConnection:!0},duration:{...w,defaultValue:.25}},config:{mode:{...Sf,defaultValue:"time"}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},outputs:{stream:X},ui:{inspector:{fields:xg}},isRealtime:()=>!0,createState:()=>({queue:[]}),execute:(i,e,t,n)=>{const o=i.stream||[],s=i.duration||0,r=e.mode||"time";let a=0;if(r==="beats"?a=t.clock.beat:a=t.time||0,n.queue||(n.queue=[]),o&&Array.isArray(o))for(const f of o)n.queue.push({event:f,releaseTime:a+s});const l=[],c=[];for(const f of n.queue)f.releaseTime<=a?l.push(f.event):c.push(f);return n.queue=c,{stream:l}},compileConfig:i=>({mode:i.mode??"time"})});T(Sg);const kg=Y({id:"midi.istrigger",version:"1.0.0",displayName:"MIDI Is Trigger",metadata:{category:B.Logic,keywords:["midi","check","trigger","gate"],description:"Outputs 1 if the stream contains any Note On event, 0 otherwise."},inputs:{stream:{type:X,allowMultiConnection:!0}},autoBroadcast:{stream:{combine:{reduce:"flatten"}}},outputs:{result:w},createState:()=>({}),execute:(i,e,t,n)=>{const o=i.stream||[];let s=0;if(o&&Array.isArray(o)){for(const r of o)if(r.type==="note_on"){s=1;break}}return{result:s}}});T(kg);const Cg=[Mf,wg,{type:"number",label:"Note",path:"note",min:0,max:127,default:60}],Mg=Y({id:"midi.metronome",version:"1.0.0",displayName:"Metronome",metadata:{category:B.Utility,keywords:["midi","metronome","clock","beat","trigger"],description:"Generates MIDI note events at regular intervals."},inputs:{duration:{...w,defaultValue:1,description:"Interval duration (seconds or beats)",min:0,max:4}},config:{mode:{...Sf,defaultValue:"time"},beatDenom:{...w,defaultValue:.25},note:{...w,defaultValue:60}},outputs:{stream:X},ui:{inspector:{fields:Cg}},isRealtime:()=>!0,createState:()=>({lastTriggerTime:-99999,noteActive:!1}),execute:(i,e,t,n)=>{const o=i.duration||1,s=e.mode||"time",r=e.beatDenom||.25,a=e.note||60;let l=0,c=o;s==="beats"?(l=t.clock.beat,c=Math.round(o)*r*4,c<=0&&(c=r)):l=t.time||0;const f=[];if(n.lastTriggerTime===-99999)return n.lastTriggerTime=l,{stream:[]};const h=n.lastTriggerTime,d=Math.floor(h/c),p=Math.floor(l/c)-d;for(let g=1;g<=p;g++)f.push({type:"note_on",deviceId:"metronome",channel:1,note:a,velocity:1,time:0}),f.push({type:"note_off",deviceId:"metronome",channel:1,note:a,velocity:0,time:0});return n.lastTriggerTime=l,{stream:f}},compileConfig:i=>({mode:i.mode??"time",beatDenom:i.beatDenom??.25,note:i.note??60})});T(Mg);const Ag=Y({id:"time.time",version:"1.0.0",displayName:"Time",metadata:{category:B.Utility,keywords:["time","seconds","clock"],description:"Outputs the current execution time in seconds."},inputs:{},outputs:{time:w,delta:w},isRealtime:()=>!0,execute:(i,e,t)=>({time:t.time||0,delta:t.clock.dt||0})}),Ig=Y({id:"time.beat",version:"1.0.0",displayName:"Beat",metadata:{category:B.Utility,keywords:["beat","bar","clock","tempo"],description:"Outputs the current beat number."},inputs:{},outputs:{beat:w,delta:w},isRealtime:()=>!0,createState:()=>({lastBeat:-1}),execute:(i,e,t,n)=>{const o=t.clock.beat||0;let s=0;return n.lastBeat>=0&&(s=o-n.lastBeat),n.lastBeat=o,{beat:o,delta:s}}});T(Ag);T(Ig);const es={kind:"atomic",type:"number"},js=16,Tg=[{type:"number",label:"Target Note",path:"targetNote"}],Dg=Y({id:"nicepattern.rhythmic_generator",version:"1.0.0",displayName:"Rhythmic Generator",metadata:{category:"NicePattern",keywords:["rhythm","generator","sequence","euclidean"],description:"Generates a rhythmic sequence based on density."},config:{targetNote:w},inputs:{density:{...w,defaultValue:.5}},outputs:{seq_out:Ge},ui:{inspector:{fields:Tg}},execute:(i,e,t)=>{const n=e.targetNote||60,o=i.density??.5,s=[],r=Math.round(o*js);for(let a=0;a<js;a++)a*r%js<r?s.push({noteIndex:n,velocity:1,hold:!1}):s.push({noteIndex:null,velocity:0,hold:!1});return{seq_out:s}},compileConfig:i=>({targetNote:i.targetNote??60})});T(Dg);class ts{constructor(e){this.state=e}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}nextRange(e,t){return Math.floor(this.next()*(t-e+1))+e}}const Pg=16,Lg=[{type:"number",label:"Min Note",path:"minNote"},{type:"number",label:"Max Note",path:"maxNote"},{type:"number",label:"Seed",path:"seed"}],Og=Y({id:"nicepattern.chaos_generator",version:"1.0.0",displayName:"Chaos Generator",metadata:{category:"NicePattern",keywords:["chaos","random","generator","sequence","stochastic"],description:"Generates a random sequence of notes."},config:{minNote:w,maxNote:w,seed:w},inputs:{density:{...w,defaultValue:.5}},outputs:{seq_out:Ge},ui:{inspector:{fields:Lg}},execute:(i,e,t)=>{const{minNote:n,maxNote:o,seed:s}=e,r=i.density??.5,a=new ts(s??12345),l=[];for(let c=0;c<Pg;c++)if(a.next()<r){const f=a.nextRange(n||60,o||60);l.push({noteIndex:f,velocity:a.next()*.5+.5,hold:!1})}else l.push({noteIndex:null,velocity:0,hold:!1});return{seq_out:l}},compileConfig:i=>({minNote:i.minNote??60,maxNote:i.maxNote??60,seed:i.seed??12345})});T(Og);class ro{constructor(e){this.config=e,this.output=0,this.lastActive=!1}update(e,t,n){let s=e.noteIndex!==null&&e.noteIndex!==void 0;if(s){let r=!1;this.lastActive?n&&!e.hold&&(this.onRelease(),r=!0):r=!0,r&&this.onTrigger(e.velocity,e.noteIndex)}else this.lastActive&&this.onRelease();this.process(s,e,t),this.lastActive=s}forceRelease(){this.onRelease(),this.lastActive=!1,this.output=0}getValue(){return this.output}}class Eg extends ro{onTrigger(e,t){this.output=e}onRelease(){this.output=0}process(e){e&&this.output===0&&(this.output=1)}previewSequence(e,t){return e.map(n=>n.noteIndex!==null&&n.noteIndex!==void 0?n.velocity:0)}}class Ng extends ro{constructor(e,t=.96){super(e),this.decayRate=.96,this.decayRate=t}onTrigger(e,t){this.output=e}onRelease(){this.output=0}process(e,t){e&&(this.output*=this.decayRate)}previewSequence(e,t){const n=[];let o=0,s=!1;for(const r of e){const a=r.noteIndex!==null&&r.noteIndex!==void 0;a&&!s?o=r.velocity:!a&&s&&(o=0),a&&(o*=this.decayRate),n.push(o),s=a}return n}}class Rg extends ro{constructor(){super(...arguments),this.phase=0,this.duty=.5,this.freq=.2}onTrigger(e,t){this.duty=.5}onRelease(){}process(e,t,n){if(!e){this.output*=.85;return}this.duty*=.98,this.phase+=this.freq,this.phase>1&&(this.phase-=1),this.output=this.phase<this.duty?1:0}previewSequence(e,t){const n=[];let o=0,s=0,r=.5,a=!1;for(const l of e){const c=l.noteIndex!==null&&l.noteIndex!==void 0;c&&!a&&(r=.5),c?(r*=.98,s+=this.freq,s>1&&(s-=1),o=s<r?1:0):o*=.85,n.push(o),a=c}return n}}class Bg extends ro{onTrigger(e,t){}onRelease(){this.output*=.85}process(e){e?this.output=Math.random():this.output*=.85}previewSequence(e,t){const n=[];let o=0,s=!1;const a=(l=>()=>{l|=0,l=l+1831565813|0;var c=Math.imul(l^l>>>15,1|l);return c=c+Math.imul(c^c>>>7,61|c)^c,((c^c>>>14)>>>0)/4294967296})(12345);for(const l of e){const c=l.noteIndex!==null&&l.noteIndex!==void 0;!c&&s&&(o*=.85),c?o=a():o*=.85,n.push(o),s=c}return n}}class Us extends ro{constructor(e,t,n){super(e),this.osc=null,this.gain=null,this.filter=null,this.ctx=t,this.frequency=n??440}get audioContext(){return this.ctx}set audioContext(e){this.ctx=e}safeParam(e,t,n){if(Number.isFinite(t)&&Number.isFinite(n))try{e.setValueAtTime(t,n)}catch{}}initVoice(e,t){if(!this.ctx||this.ctx.state==="suspended")return;this.cleanup(),this.osc=this.ctx.createOscillator(),this.gain=this.ctx.createGain(),this.filter=this.ctx.createBiquadFilter();const n=Number.isFinite(this.frequency)&&this.frequency>0?this.frequency:440;this.safeParam(this.osc.frequency,n,e),this.filter.type="lowpass";const o=800+t*2e3;this.safeParam(this.filter.frequency,o,e),this.safeParam(this.gain.gain,0,e);try{this.gain.gain.linearRampToValueAtTime(t,e+.005),this.gain.gain.setTargetAtTime(0,e+.005,.1)}catch{}this.osc.connect(this.filter),this.filter.connect(this.gain),this.gain.connect(this.ctx.destination),this.osc.start(e)}retirePreviousVoice(e){if(!this.osc||!this.gain||!this.filter)return;const t=this.osc,n=this.gain,o=this.filter;this.osc=null,this.gain=null,this.filter=null;try{try{n.gain.cancelAndHoldAtTime(e)}catch{n.gain.cancelScheduledValues(e),this.safeParam(n.gain,n.gain.value,e)}n.gain.linearRampToValueAtTime(0,e+.005);const r=e+.005+.01;t.stop(r),t.onended=()=>{t.disconnect(),o.disconnect(),n.disconnect(),t.dispose?.(),o.dispose?.(),n.dispose?.()}}catch{t.disconnect(),o.disconnect(),n.disconnect()}}cleanup(){this.retirePreviousVoice(this.ctx?.currentTime??0)}onTrigger(e,t){if(this.ctx?.state!=="suspended"){if(t!=null){const n=440*Math.pow(2,(t-69)/12);Number.isFinite(n)&&(this.frequency=n)}this.initVoice(this.ctx?.currentTime??0,e)}}onRelease(){if(this.ctx?.state!=="suspended"&&this.gain){const e=this.ctx?.currentTime??0;try{this.gain.gain.cancelAndHoldAtTime(e)}catch{this.gain.gain.cancelScheduledValues(e),this.safeParam(this.gain.gain,this.gain.gain.value,e)}try{this.gain.gain.linearRampToValueAtTime(0,e+.005)}catch{}if(this.osc)try{this.osc.stop(e+.01)}catch{}}}process(e,t){e&&t.hold&&this.osc}previewSequence(e,t){const n=[];let o=!1;for(const s of e){const r=s.noteIndex!==null&&s.noteIndex!==void 0;r&&!o?n.push(s.velocity):n.push(0),o=r}return n}}function Is(i,e,t){return Y({id:i,version:"1.0.0",displayName:e,metadata:{category:"NicePattern",keywords:["layer","effect","modifier"],description:`Layer node: ${e}`},config:{},inputs:{midi_in:{type:X,description:"Input MIDI stream",allowMultiConnection:!0},prev_layer:{type:es,description:"Previous layer output"}},outputs:{out:es},autoBroadcast:{midi_in:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:[]}},isRealtime:()=>!0,createState:(n,o)=>({layer:new t({}),lastActive:!1,activeVelocity:0,activeNote:null}),execute:(n,o,s,r)=>{const a=r.layer,l=n.midi_in||[];for(const d of l)d.type==="note_on"?(r.lastActive=!0,r.activeVelocity=d.velocity,r.activeNote=d.note):d.type==="note_off"&&r.activeNote===d.note&&(r.lastActive=!1,r.activeNote=null);const c={noteIndex:r.lastActive?r.activeNote??60:null,velocity:r.activeVelocity,hold:!1},f=l.some(d=>d.type==="note_on");return a.update(c,s.clock.dt,f),{out:a.getValue()}},compileConfig:n=>({})})}const _g=Is("nicepattern.gate_layer","Gate Layer",Eg),$g=Is("nicepattern.exp_layer","Exponential Layer",Ng),Fg=Is("nicepattern.pwm_layer","PWM Layer",Rg),Vg=Is("nicepattern.noise_layer","Noise Layer",Bg);T(_g);T($g);T(Fg);T(Vg);const zg=Y({id:"nicepattern.tone_synth_layer",version:"1.0.0",displayName:"Tone Synth Layer",metadata:{category:"NicePattern",keywords:["synth","audio","sound","tone"],description:"Simple synthesizer layer using Tone.js."},config:{},inputs:{midi_in:{type:X,description:"Input MIDI stream",allowMultiConnection:!0},prev_layer:{type:es,description:"Previous layer output"}},outputs:{out:es},autoBroadcast:{midi_in:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:[]}},isRealtime:()=>!0,createState:(i,e)=>({layer:new Us({}),lastActive:!1,lastActiveNote:null,activeVelocity:0,contextId:""}),execute:(i,e,t,n)=>{const o=t.audio?.context;n.layer||(n.layer=new Us({})),o&&n.contextId!==o.contextId&&(n.layer=new Us({}),n.contextId=o.contextId);const s=n.layer,r=i.midi_in||[];let a=!1;for(const f of r)f.type==="note_on"?(n.lastActive=!0,n.lastActiveNote=f.note,n.activeVelocity=f.velocity,a=!0):f.type==="note_off"&&n.lastActiveNote===f.note&&(n.lastActive=!1,n.lastActiveNote=null);const l={noteIndex:n.lastActive?n.lastActiveNote:null,velocity:n.activeVelocity,hold:!1};return s.audioContext||(t.audio?.context?s.audioContext=t.audio.context:typeof window<"u"&&(s.audioContext=new(window.AudioContext||window.webkitAudioContext))),s.update(l,t.clock.dt,a),{out:s.getValue()}},compileConfig:i=>({})});T(zg);function Af(i){if(i===1)return[[0]];const e=Af(i/2),t=[];for(let n=0;n<e.length;n++)t.push([...e[n],...e[n]]);for(let n=0;n<e.length;n++)t.push([...e[n],...e[n].map(o=>1-o)]);return t}function Tl(i){let e=0;for(let t=0;t<i.length-1;t++)i[t]!==i[t+1]&&e++;return e}function Hg(i,e){const t=Af(8).sort((a,l)=>Tl(a)-Tl(l));t[0]=[1,1,1,1,1,1,1,1];const n=[0,1,2,3,4,5,6,7],o=new ts(e);for(let a=n.length-1;a>0;a--){const l=o.nextRange(0,a);[n[a],n[l]]=[n[l],n[a]]}const s=Math.max(2,Math.min(8,i));return t.slice(0,s).map(a=>{const l=new Array(8);for(let c=0;c<8;c++)l[c]=a[n[c]];return l})}const qg=[{type:"number",label:"Seed",path:"seed",step:1}],Wg=Y({id:"nicepattern.orthomod",version:"1.0.0",displayName:"Orthomod",metadata:{category:"NicePattern",keywords:["envelope","modulation","orthogonal","hadamard"],description:"Orthogonal code-based envelope generator."},config:{seed:w},inputs:{midi_in:{type:X,description:"Trigger Input",allowMultiConnection:!0},decay:{type:w,defaultValue:1.2,description:"Decay Time (s)",range:[0,4],step:.01},curve:{type:w,defaultValue:1.5,description:"Response Curve",range:[.1,4],step:.1},relcurve:{type:w,defaultValue:12,description:"Release Curve",range:[.1,20],step:.1},resolution:{type:w,defaultValue:8,range:[2,8],step:1,description:"Codebook Size"},manual_phase:{type:w,defaultValue:-1,description:"Manual Phase Override (0-1)",suppressInputEditor:!0}},outputs:{env:{type:w,description:"Envelope Output (0-1)"},vec:{type:Pa,description:"Channel Values [c1, c2, c3, c4]"},ch1:{type:w,description:"Channel 1"},ch2:{type:w,description:"Channel 2"},ch3:{type:w,description:"Channel 3"},ch4:{type:w,description:"Channel 4"}},autoBroadcast:{midi_in:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:qg}},isRealtime:()=>!0,createState:()=>({linearEnv:0,gateOpen:!1,active:!1,codes:[],lastSeed:-1,lastResolution:-1,currentEffectiveCurve:1.5,phase:0}),execute:(i,e,t,n)=>{const o=t.clock.dt;n.phase+=o;const s=n.phase,r=i.decay,a=typeof r=="number"&&Number.isFinite(r)?Math.max(.001,r):1.2,l=i.curve,c=typeof l=="number"&&Number.isFinite(l)?Math.max(.001,l):1.5,f=i.relcurve,h=typeof f=="number"&&Number.isFinite(f)?Math.max(.1,f):12,d=i.resolution,u=typeof d=="number"&&Number.isFinite(d)?Math.floor(Math.max(2,Math.min(8,d))):8,p=e.seed??12345,g=i.manual_phase,m=typeof g=="number"&&Number.isFinite(g)?g:-1;(p!==n.lastSeed||u!==n.lastResolution)&&(n.codes=Hg(u,p),n.lastSeed=p,n.lastResolution=u);const b=(i.midi_in||[]).flat();for(const z of b)z.type==="note_on"?(n.linearEnv=1,n.gateOpen=!0,n.active=!0):z.type==="note_off"&&(n.gateOpen=!1);let y=0;m>=0?(n.linearEnv=Math.max(0,Math.min(1,m)),n.active=!0,n.currentEffectiveCurve=1):(n.active&&(n.linearEnv-=o/Math.max(.01,a),n.linearEnv<=0&&(n.linearEnv=0,n.active=!1)),!n.gateOpen&&n.active?n.currentEffectiveCurve=h:n.currentEffectiveCurve=c);const x=Math.max(0,n.linearEnv),v=n.currentEffectiveCurve;y=Math.pow(x,v),Number.isNaN(y)&&(y=0);let C=1-y;C=Math.max(0,Math.min(.999,C));const k=n.codes.length,S=Math.floor(C*k),A=n.codes[S]||n.codes[0],I=15,O=s*I%1>.5?1:0,L=Math.abs(Math.sin(s*I*Math.PI*2)),D=[0,0,0,0],F=[0,0,0,0];if(n.active)for(let z=0;z<4;z++){const de=A[z*2]||0,Ae=A[z*2+1]||0;let ye=0;de===0&&Ae===0?ye=0:de===1&&Ae===1?ye=1:de===1&&Ae===0?ye=O:de===0&&Ae===1&&(ye=L),F[z]=ye,D[z]=ye*y,Number.isNaN(D[z])&&(D[z]=0)}const $=z=>Number.isFinite(z)?z:0;return{outputs:{env:$(y),vec:D.map($),ch1:$(D[0]),ch2:$(D[1]),ch3:$(D[2]),ch4:$(D[3])},ui:{codes:n.codes,env:$(y),vec:D.map($),rawVec:n.active?F.map($):[0,0,0,0],activeCodeIndex:S,gate:n.gateOpen?1:0}}},compileConfig:i=>({seed:i?.seed??12345})});T(Wg);const jg=()=>({initialized:!1,contextId:"",masterGain:null,voices:[],lastRoot:-1}),Ug=Y({id:"nicepattern.tone4",version:"1.0.0",displayName:"Tone 4",metadata:{category:"NicePattern",keywords:["synth","additive","oscillator","audio"],description:"4-voice additive synth driven by vector input."},inputs:{vec:{type:Pa,description:"Modulation Vector [c1, c2, c3, c4]"},root:{type:w,defaultValue:60,description:"Root Note (MIDI)",range:[0,127]},gain:{type:w,defaultValue:.5,description:"Master Volume"}},outputs:{},isRealtime:()=>!0,createState:jg,execute:(i,e,t,n)=>{const o=t.audio?.context;if(!o||o.state==="suspended")return{};const s=o.currentTime;if(!n.initialized||n.contextId!==o.contextId){n.masterGain=o.createGain(),n?.masterGain?.connect(o.destination);const d=[1,1.5,2,3],u=["square","sawtooth","triangle","sine"];n.voices=d.map((p,g)=>{const m=o.createOscillator(),b=o.createGain();return m.type=u[g],m.connect(b),b.connect(n.masterGain),m.start(s),b.gain.setValueAtTime(0,s),{osc:m,gain:b,freqRatio:p,wave:u[g]}}),n.initialized=!0,n.contextId=o.contextId,n.lastRoot=-1}const r=Math.max(0,Math.min(1,i.gain??.5));n.masterGain&&n.masterGain.gain.setTargetAtTime(r,s,.05);const a=i.root,l=typeof a=="number"&&Number.isFinite(a)?Math.floor(Math.max(0,Math.min(127,a))):69,c=440*Math.pow(2,(l-69)/12);Math.abs(c-n.lastRoot)>.01&&(n.voices.forEach(d=>{n.lastRoot===-1?d.osc.frequency.setValueAtTime(c*d.freqRatio,s):d.osc.frequency.setTargetAtTime(c*d.freqRatio,s,.05)}),n.lastRoot=c);const f=i.vec,h=Array.isArray(f)&&f.length===4?f:[0,0,0,0];return n.voices.forEach((d,u)=>{const p=Math.max(0,Math.min(1,h[u]??0));d.gain.gain.setTargetAtTime(p,s,.02)}),{}}});T(Ug);const Fe={gravity:800,magnetEpsilon:50,physicsRate:120,solverSteps:16,sphereCount:16,magnetRange:800,height:600};class Dl{constructor(e,t,n,o,s,r){this.id=e,this.radius=6+r.next()*8,this.mass=this.radius,this.restLength=20+Math.pow(r.next(),2)*150;const a=t*.1,l=t-a*2;this.x=a+l/(s-1)*o,this.y=n-this.restLength,this.vx=0,this.vy=0,this.isLatched=!1,this.tensionRatio=0,this.currentSpringForce=0,this.currentMagForce=0}update(e,t,n,o,s){this.currentMagForce=0,this.currentSpringForce=0,this.tensionRatio=0;const a=(t-this.restLength-this.y)*s.springK,c=s.gravity*this.mass+a;this.currentSpringForce=Math.max(0,c);const f=u=>{if(u>=Fe.magnetRange)return 0;const p=Fe.magnetEpsilon/(u*u+Fe.magnetEpsilon);return s.magnetStrength*p},h=f(0);if(o){const u=this.y-this.radius-n;if(this.isLatched||u<=2)if(h>c){this.isLatched=!0,this.y=n+this.radius,this.vy=0,this.currentMagForce=h,this.tensionRatio=Math.max(0,Math.min(1,c/h));return}else this.isLatched=!1}else this.isLatched=!1;let d=c;if(o&&!this.isLatched){const u=Math.max(0,this.y-this.radius-n),p=-f(u);this.currentMagForce=Math.abs(p),d+=p}this.vy+=d/this.mass*e,this.vy*=s.damping,this.y+=this.vy*e,this.y+this.radius>t&&(this.y=t-this.radius,this.vy*=-.5),this.y-this.radius<n&&(this.y=n+this.radius,o?this.vy<0&&(this.vy=0):this.vy*=-.6)}}const Gg=[{type:"number",label:"Seed",path:"seed",step:1,min:0,max:999999}],Yg=Y({id:"nicepattern.magneto",version:"1.0.0",displayName:"Magneto",metadata:{category:"NicePattern",keywords:["envelope","physics","magnet","modulator"],description:"Physics-based magnetic envelope generator."},config:{seed:{...w,defaultValue:1337}},inputs:{midi_in:{type:X,description:"Trigger Input",allowMultiConnection:!0},attack:{type:w,defaultValue:.2,range:[.01,2],step:.01,description:"Attack Time (s)"},decay:{type:w,defaultValue:.25,range:[.01,2],step:.01,description:"Decay Time (s)"},sustain:{type:w,defaultValue:.6,range:[0,1],step:.01,description:"Sustain Level (0-1)"},release:{type:w,defaultValue:.3,range:[.01,5],step:.01,description:"Release Time (s)"},peak:{type:w,defaultValue:.9,range:[.1,1],step:.01,description:"Peak Level (0-1, inverted)"},mag_flux:{type:w,defaultValue:2e6,range:[1e5,4e6],step:1e4,description:"Magnet Strength"},spring_k:{type:w,defaultValue:25e3,range:[1e3,5e4],step:100,description:"Spring Stiffness"},damping:{type:w,defaultValue:.999,range:[.9,1],step:.001,description:"Damping Factor"}},outputs:{env:{type:w,description:"Envelope Output (Tension)"},vec:Pa,ch1:{type:w,description:"Channel 1 (Tension)"},ch2:{type:w,description:"Channel 2 (Extension)"},ch3:{type:w,description:"Channel 3 (Spring Force)"},ch4:{type:w,description:"Channel 4 (Mag Force)"}},autoBroadcast:{midi_in:{combine:{reduce:"flatten"}}},ui:{inspector:{fields:Gg}},isRealtime:()=>!0,createState:()=>{const i=[],t=Fe.height,n=new ts(1337);for(let o=0;o<Fe.sphereCount;o++)i.push(new Dl(o,600,t,o,Fe.sphereCount,n));return{spheres:i,plateY:40,phase:"IDLE",sustainProgress:0,accumulator:0,lastGate:!1,isTouchingSim:!1,touchY:0}},onMessage:(i,e)=>{e.type==="manual_interaction"&&(i.isTouchingSim=e.active,typeof e.y=="number"&&(i.touchY=e.y))},execute:(i,e,t,n)=>{const o=t.clock.dt,s=i.midi_in||[];let r=n.lastGate;for(const Z of s)Z.type==="note_on"?r=!0:Z.type==="note_off"&&(r=!1);const a=Math.max(.005,i.attack??.2),l=Math.max(.005,i.decay??.25),c=i.sustain??.6,f=Math.max(.005,i.release??.3),h=i.peak??.9,d=e.seed??1337,u=i.mag_flux??2e6,p=i.spring_k??25e3,g=i.damping??.999;if(n.currentSeed!==d||n.spheres.length===0){n.currentSeed=d;const Z=new ts(d);n.spheres=[];const E=600,K=Fe.height;for(let ue=0;ue<Fe.sphereCount;ue++)n.spheres.push(new Dl(ue,E,K,ue,Fe.sphereCount,Z))}const m=Fe.height,b=m*.95,y=m*.1,x=40,v=y+h*(b-y),C=y+c*(b-y),k=Math.min(1,.05/Math.max(.001,a)),S=Math.min(1,.02/Math.max(.001,l)),A=Math.min(1,.02/Math.max(.001,f));r&&!n.lastGate?(n.phase="ATTACK",n.sustainProgress=0):!r&&n.lastGate&&(n.phase="RELEASE",n.sustainProgress=0),n.lastGate=r,n.accumulator+=o;const I=1/Fe.physicsRate;let O=!1,L=0;for(;n.accumulator>=I&&L<5;){n.accumulator-=I,L++;let Z=x,E=A;n.isTouchingSim?(n.phase="MANUAL",O=!0,Z=n.touchY,Z=Math.max(x,Math.min(b,Z)),E=k,n.sustainProgress=0):r?((n.phase==="IDLE"||n.phase==="RELEASE"||n.phase==="MANUAL")&&(n.phase==="MANUAL"?n.phase="ATTACK":(n.phase="ATTACK",n.sustainProgress=0)),n.phase==="ATTACK"?(Z=v,E=k,Math.abs(n.plateY-v)<10&&(n.phase="DECAY")):n.phase==="DECAY"?(Z=C,E=S,Math.abs(n.plateY-C)<5&&(n.phase="SUSTAIN")):n.phase==="SUSTAIN"&&(Z=C,E=.1,n.sustainProgress+=(1-n.sustainProgress)*2*I),O=!0):(n.phase="RELEASE",Z=x,E=A,Math.abs(n.plateY-x)<15?(O=!1,n.phase="IDLE"):O=!0);const K=Z-n.plateY;n.plateY+=K*E;const ue=I/Fe.solverSteps,ve={gravity:Fe.gravity,springK:p,magnetStrength:u,damping:g};for(let we=0;we<Fe.solverSteps;we++)n.spheres.forEach(qe=>{qe.update(ue,m,n.plateY,O,ve)})}n.accumulator>I&&(n.accumulator=0);let D=0,F=0,$=0,z=0,de=0;n.spheres.forEach(Z=>{Z.isLatched&&(de++,D+=Z.tensionRatio);const E=Math.max(0,m-Z.restLength-Z.y);F+=E,$+=Z.currentSpringForce,z+=Z.currentMagForce});const Ae=de>0?D/de:0,ye=Math.min(1,F/(m*Fe.sphereCount*.4)),bt=Fe.sphereCount*p*m*.3,An=Fe.sphereCount*u,_e=Math.min(1,$/bt),se=Math.min(1,z/An),Je=[Ae,ye,_e,se],st={plateY:n.plateY,phase:n.phase,sustainProgress:n.sustainProgress,spheres:n.spheres.map(Z=>({x:Z.x,y:Z.y,r:Z.radius,l:Z.isLatched,t:Z.tensionRatio})),adsr:{attack:a,decay:l,sustain:c,release:f,peak:h},seed:d};return{outputs:{env:Ae,vec:Je,ch1:Ae,ch2:ye,ch3:_e,ch4:se},ui:st}},compileConfig:i=>({seed:i?.seed??1337})});T(Yg);const Gs=16,Kg=Y({id:"seq.tomidi",version:"1.0.0",displayName:"To MIDI",metadata:{category:"Sequence",keywords:["pattern","sequencer","combiner","event","midi"],description:"Converts sequence(s) into a MIDI stream."},config:{},inputs:{seq_in:{type:Ge,description:"Input sequence(s)",allowMultiConnection:!0}},outputs:{midi_out:X},autoBroadcast:!0,reshape:"none",isRealtime:()=>!0,createState:()=>({sequenceStates:new Map}),execute:(i,e,t,n)=>{let s=i.seq_in||[];s.length===1&&Array.isArray(s[0])&&s[0].length>0&&Array.isArray(s[0][0])&&(s=s[0]);const r=[],c=(Math.floor(t.clock.beat*4)%Gs+Gs)%Gs,f=new Set;s.forEach((h,d)=>f.add(d)),n.sequenceStates.forEach((h,d)=>f.add(d));for(const h of f){const d=s[h];n.sequenceStates.has(h)||n.sequenceStates.set(h,{lastStepIndex:-1,lastNoteIndex:null,lastHold:!1,activeNotes:new Map});const u=n.sequenceStates.get(h);if(!d&&u.lastNoteIndex===null){n.sequenceStates.delete(h);continue}let p={noteIndex:null,velocity:0,hold:!1};if(d&&d[c]&&(p=d[c]),c!==u.lastStepIndex||!d||p.noteIndex!==u.lastNoteIndex){const g=u.lastNoteIndex,m=u.lastHold,b=p.noteIndex!==null&&p.noteIndex!==void 0,y=b&&p.noteIndex===g,x=g!==null&&(!y||!m),v=b&&(!y||!m);x&&g!==null&&(r.push({type:"note_off",note:g,velocity:0,channel:1,deviceId:"tomidi",time:0}),u.activeNotes.delete(g),u.lastNoteIndex=null,u.lastHold=!1),v&&p.noteIndex!==null?(r.push({type:"note_on",note:p.noteIndex,velocity:p.velocity,channel:1,deviceId:"tomidi",time:0}),u.activeNotes.set(p.noteIndex,p.velocity),u.lastNoteIndex=p.noteIndex,u.lastHold=p.hold):y&&m&&(u.lastHold=p.hold),u.lastStepIndex=c}}return{midi_out:r}}});T(Kg);const Xg=Y({id:"seq.sequencer",version:"1.0.0",displayName:"Sequencer",metadata:{category:"Sequence",keywords:["sequencer","step","pattern"],description:"16-step sequencer."},config:{sequence:{kind:"array",size:16,element:{kind:"record",fields:{noteIndex:w,velocity:w,hold:{kind:"atomic",type:"boolean"}}}}},inputs:{},outputs:{seq_out:Ge},ui:{},compileConfig:i=>{const e=Array(16).fill({noteIndex:null,velocity:0,hold:!1});return{sequence:i?.values?.sequence??e}},createState:()=>({currentStepIndex:0}),isRealtime:()=>!1,execute:(i,e,t,n)=>{const o=Array(16).fill({noteIndex:null,velocity:0,hold:!1});return{outputs:{seq_out:e.sequence||o},ui:{currentStepIndex:n.currentStepIndex}}}});T(Xg);const Jg=Y({id:"seq.oneshot",version:"1.0.0",displayName:"One Shot",metadata:{category:"Sequence",keywords:["player","trigger","oneshot","envelope"],description:"Plays a sequence once upon trigger."},config:{},autoBroadcast:{seq_in:{combine:{reduce:"first"}},trigger:{combine:{reduce:"flatten"}}},reshape:"none",inputs:{seq_in:{type:Ge,description:"Input sequence"},trigger:{type:X,description:"Trigger",allowMultiConnection:!0},duration:{type:w,defaultValue:4,description:"Duration (s)"}},outputs:{midi_out:X},isRealtime:()=>!0,createState:()=>({isPlaying:!1,startTime:0,lastStepIndex:-1,lastNoteIndex:null,lastHold:!1,activeNotes:new Map}),execute:(i,e,t,n)=>{const o=i.trigger||[];let s=!1;for(const g of o)if(g&&g.type==="note_on"&&g.velocity>0){s=!0;break}const r=t.audio?.context?.currentTime??0;s&&(n.isPlaying=!0,n.startTime=r);const a=i.seq_in||[],l=[];if(!n.isPlaying||!a||a.length===0)return n.lastNoteIndex!==null&&(l.push({type:"note_off",note:n.lastNoteIndex,velocity:0,channel:1,time:0,deviceId:"oneshot"}),n.lastNoteIndex=null,n.lastHold=!1),n.activeNotes.size>0&&n.activeNotes.clear(),{midi_out:l};const c=Math.max(.001,i.duration??4),h=(r-n.startTime)/c;if(h>=1)return n.isPlaying=!1,n.lastNoteIndex!==null&&(l.push({type:"note_off",note:n.lastNoteIndex,velocity:0,channel:1,time:0,deviceId:"oneshot"}),n.lastNoteIndex=null,n.lastHold=!1),{midi_out:l};const d=a.length,u=Math.floor(h*d);let p={noteIndex:null,velocity:0,hold:!1};if(a[u]&&(p=a[u]),u!==n.lastStepIndex||p.noteIndex!==n.lastNoteIndex){const g=n.lastNoteIndex,m=n.lastHold,b=p.noteIndex!==null,y=b&&p.noteIndex===g,x=g!==null&&(!y||!m),v=b&&(!y||!m);x&&g!==null&&(l.push({type:"note_off",note:g,velocity:0,channel:1,time:0,deviceId:"oneshot"}),n.activeNotes.delete(g),n.lastNoteIndex=null,n.lastHold=!1),v&&p.noteIndex!==null?(l.push({type:"note_on",note:p.noteIndex,velocity:p.velocity,channel:1,time:0,deviceId:"oneshot"}),n.activeNotes.set(p.noteIndex,p.velocity),n.lastNoteIndex=p.noteIndex,n.lastHold=p.hold):y&&m&&(n.lastHold=p.hold),n.lastStepIndex=u}return{midi_out:l}}}),Qg=Y({id:"seq.scan",version:"1.0.0",displayName:"Scan Sequence",metadata:{category:"Sequence",keywords:["player","scan","scrub"],description:"Plays a sequence by scanning through positions."},config:{},autoBroadcast:{seq_in:{combine:{reduce:"first"}}},reshape:"none",inputs:{seq_in:{type:Ge,description:"Input sequence"},pos:{type:w,defaultValue:0,description:"Position (0-1)"}},outputs:{midi_out:X},isRealtime:()=>!0,createState:()=>({lastStepIndex:-1,lastNoteIndex:null,lastHold:!1,activeNotes:new Map}),execute:(i,e,t,n)=>{const o=i.seq_in||[],s=i.pos??0,r=[];if(!o||o.length===0||s>=1||s<0)return n.lastNoteIndex!==null&&(r.push({type:"note_off",note:n.lastNoteIndex,velocity:0,channel:1,time:0,deviceId:"scan"}),n.lastNoteIndex=null,n.lastHold=!1),{midi_out:r};const a=o.length,l=Math.floor(s*a);let c={noteIndex:null,velocity:0,hold:!1};if(o[l]&&(c=o[l]),l!==n.lastStepIndex||c.noteIndex!==n.lastNoteIndex){const f=n.lastNoteIndex,h=n.lastHold,d=c.noteIndex!==null,u=d&&c.noteIndex===f,p=f!==null&&(!u||!h),g=d&&(!u||!h);p&&f!==null&&(r.push({type:"note_off",note:f,velocity:0,channel:1,time:0,deviceId:"scan"}),n.lastNoteIndex=null,n.lastHold=!1),g&&c.noteIndex!==null?(r.push({type:"note_on",note:c.noteIndex,velocity:c.velocity,channel:1,time:0,deviceId:"scan"}),n.lastNoteIndex=c.noteIndex,n.lastHold=c.hold):u&&h&&(n.lastHold=c.hold),n.lastStepIndex=l}return{midi_out:r}}});T(Jg);T(Qg);const Zg=Y({id:"seq.crop",version:"1.0.0",displayName:"Crop Sequence",metadata:{category:"Sequence",keywords:["modifier","crop","slice"],description:"Mutes steps outside the specified range."},config:{mode:{kind:"atomic",type:"string",defaultValue:"start-end"}},autoBroadcast:{seq_in:{combine:{reduce:"first"}}},inputs:{seq_in:{type:Ge,description:"Input sequence"},start:{type:w,defaultValue:0},end:{type:w,defaultValue:1,optional:!0},length:{type:w,defaultValue:1,optional:!0}},outputs:{seq_out:Ge},ui:{inspector:{fields:[{type:"tab-bar",label:"Mode",path:"mode",options:[{label:"Start / End",value:"start-end"},{label:"Start / Length",value:"start-length"}]}]}},computeForwardPorts:(i,e)=>{const t=e.mode||"start-end",n={seq_in:Ge,start:{...w,defaultValue:0}};return t==="start-length"?n.length={...w,defaultValue:1}:n.end={...w,defaultValue:1},{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{seq_out:Ge}}}},shouldRecompileOnConfigChange:()=>!0,compileConfig:i=>({mode:i.mode||"start-end"}),execute:(i,e)=>{const t=i.seq_in||[],n=e.mode||"start-end",o=t.map(l=>({...l})),s=i.start??0;let r=1;if(n==="start-length"){const l=i.length??1;r=s+l}else r=i.end??1;r<s&&(r=s);const a=o.length;for(let l=0;l<a;l++){const c=l/a;(c<s||c>=r)&&(o[l].noteIndex=null,o[l].velocity=0,o[l].hold=!1)}return{seq_out:o}}}),em=Y({id:"seq.fill",version:"1.0.0",displayName:"Fill Sequence",metadata:{category:"Sequence",keywords:["generator","fill","range"],description:"Generates a sequence where steps inside the specified range are ON."},config:{mode:{kind:"atomic",type:"string",defaultValue:"start-length"},count:{...w,defaultValue:16}},inputs:{start:{type:w,defaultValue:0},end:{type:w,defaultValue:1,optional:!0},length:{type:w,defaultValue:.5,optional:!0}},outputs:{seq_out:Ge},ui:{inspector:{fields:[{type:"tab-bar",label:"Mode",path:"mode",options:[{label:"Start / End",value:"start-end"},{label:"Start / Length",value:"start-length"}],default:"start-length"},{type:"number",label:"Step Count",path:"count",min:1,max:128,step:1,default:16}]}},computeForwardPorts:(i,e)=>{const t=e.mode||"start-length",n={start:{...w,defaultValue:0}};return t==="start-length"?n.length={...w,defaultValue:.5}:n.end={...w,defaultValue:1},{inputs:{kind:"record",fields:n},outputs:{kind:"record",fields:{seq_out:Ge}}}},shouldRecompileOnConfigChange:()=>!0,compileConfig:i=>({mode:i.mode||"start-length",count:i.count??16}),execute:(i,e)=>{const t=e.count??16,n=e.mode||"start-length",o=[];for(let r=0;r<t;r++)o.push({noteIndex:null,velocity:0,hold:!1});const s=i.start??0;if(n==="start-length"){const r=i.length??.5,a=Math.round(r*t),l=Math.floor(s*t);for(let c=0;c<a;c++){const f=l+c;f>=0&&f<t&&(o[f]={noteIndex:60,velocity:1,hold:!1})}}else{const r=i.end??1;let a=s,l=r;l<a&&(l=a);for(let c=0;c<t;c++){const f=c/t;f>=a&&f<l&&(o[c]={noteIndex:60,velocity:1,hold:!1})}}return{seq_out:o}}});T(Zg);T(em);const ti={noteIndex:null,velocity:0,hold:!1},ci=i=>i.noteIndex!==null&&i.noteIndex!==void 0,Ts=(i,e,t,n)=>Y({id:`seq.${i}`,version:"1.0.0",displayName:e,metadata:{category:"Sequence",keywords:["logic",i,"binary"],description:t},config:{},inputs:{inputs:{type:Ge,description:"Sequences",allowMultiConnection:!0}},outputs:{seq_out:Ge},execute:o=>{const s=o.inputs||[];if(s.length===0)return{seq_out:[]};let r=0;if(s.forEach(l=>r=Math.max(r,l.length)),r===0)return{seq_out:[]};const a=[];for(let l=0;l<r;l++){let c={...ti};const f=s[0];f.length>0?c={...f[l%f.length]}:c={...ti};for(let h=1;h<s.length;h++){const d=s[h],u=d.length>0?d[l%d.length]:ti;c=n(c,u)}a.push(c)}return{seq_out:a}}}),tm=Ts("xor","Sequence XOR","XORs multiple sequences.",(i,e)=>{const t=ci(i),n=ci(e);return t!==n?n?e:i:{...ti}}),nm=Ts("sub","Sequence Subtract","Subtracts subsequent sequences from the first.",(i,e)=>ci(e)?{...ti}:i),im=Ts("and","Sequence AND","Output active only if both inputs active.",(i,e)=>ci(i)&&ci(e)?e:{...ti}),om=Ts("or","Sequence OR","Output active if any input active.",(i,e)=>ci(e)?e:i),sm=Y({id:"seq.negate",version:"1.0.0",displayName:"Sequence Negate",metadata:{category:"Sequence",keywords:["logic","not","invert"],description:"Inverts sequence activity."},config:{},autoBroadcast:{seq_in:{combine:{reduce:"first"}}},inputs:{seq_in:{type:Ge}},outputs:{seq_out:Ge},execute:i=>({seq_out:(i.seq_in||[]).map(n=>{const o={...n};return o.noteIndex!==null?(o.noteIndex=null,o.velocity=0,o.hold=!1):(o.noteIndex=60,o.velocity=1,o.hold=!1),o})})});T(tm);T(nm);T(im);T(om);T(sm);const rm=[{type:"string",label:"Path",path:"path",placeholder:"/composition/..."}],am=Y({id:"resolume.input",version:"1.0.0",displayName:"Resolume Input",metadata:{category:B.IO,keywords:["resolume","arena","parameter","read"],description:"Reads a parameter value from Resolume Arena."},inputs:{},config:{path:Ta},outputs:{value:{type:w,suppressLabel:!0}},autoBroadcast:!1,isRealtime:()=>!0,ui:{inspector:{fields:rm}},getDisplayLabel:i=>{if(!i.path)return;const e=i.path.split("/");return e[e.length-1]||i.path},createState:(i,e)=>{const t={value:0,unsubscribe:()=>{},currentPath:i.path,callback:o=>{}};t.callback=o=>{t.value=o};const n=e.resolume;return i.path&&n&&(n.subscribe(i.path,t.callback,t.callback),t.unsubscribe=()=>n.unsubscribe(i.path,t.callback)),t},execute:(i,e,t,n)=>{if(e.path!==n.currentPath){n.currentPath&&n.unsubscribe(),n.currentPath=e.path;const o=t.resolume;e.path&&o&&(o.subscribe(e.path,n.callback),n.unsubscribe=()=>o.unsubscribe(e.path,n.callback))}return{value:n?.value??0}},compileConfig:i=>({path:i.path??""})});T(am);const lm={kind:"atomic",type:"any"},cm=[{type:"string",label:"Path",path:"path",placeholder:"/composition/..."}],fm=Y({id:"resolume.output",version:"1.0.0",displayName:"Resolume Output",metadata:{category:B.IO,keywords:["resolume","arena","parameter","write"],description:"Writes a value to a Resolume Arena parameter."},inputs:{value:{type:lm,suppressInputEditor:!0,suppressLabel:!0}},config:{path:Ta},outputs:{},autoBroadcast:!0,ui:{inspector:{fields:cm}},getDisplayLabel:i=>{if(!i.path)return;const e=i.path.split("/");return e[e.length-1]||i.path},createState:(i,e)=>({lastValue:void 0}),execute:(i,e,t,n)=>{if(e.path&&i.value!==void 0){const o=i.value,s=n.lastValue;let r=!1;typeof o=="number"&&typeof s=="number"?Math.abs(o-s)>1e-5&&(r=!0):o!==s&&(r=!0);const a=t.resolume;r&&a&&(a.setValue(e.path,o),n.lastValue=o)}return{}},compileConfig:i=>({path:i.path??""})});T(fm);const If=Ce("math.add",{category:B.Math,keywords:["sum","plus"],description:"Adds a and b."},(i,e)=>i+e);T({version:"1.0.0",...If,displayName:"Add",aliases:["plus","sum"],extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Sum"}}});const Tf=Ce("math.subtract",{category:B.Math,keywords:["minus","difference"],description:"Subtracts b from a."},(i,e)=>i-e);T({version:"1.0.0",...Tf,displayName:"Subtract",aliases:["minus","difference"],extendedInputs:{a:{type:w,description:"Minuend"},b:{type:w,description:"Subtrahend"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Df=Ce("math.multiply",{category:B.Math,keywords:["times","product"],description:"Multiplies a and b."},(i,e)=>i*e);T({version:"1.0.0",...Df,displayName:"Multiply",aliases:["times","product"],extendedInputs:{a:{type:w,description:"Factor A"},b:{type:w,description:"Factor B"}},extendedOutputs:{result:{type:w,description:"Product"}}});const Pf=Ce("math.divide",{category:B.Math,keywords:["div","quotient"],description:"Divides a by b."},(i,e)=>i/e);T({version:"1.0.0",...Pf,displayName:"Divide",aliases:["div","quotient"],extendedInputs:{a:{type:w,description:"Dividend"},b:{type:w,description:"Divisor"}},extendedOutputs:{result:{type:w,description:"Quotient"}}});const Lf=Ce("math.pow",{category:B.Math,keywords:["power","exponent"],description:"Raises a to the power of b."},(i,e)=>Math.pow(i,e));T({version:"1.0.0",...Lf,displayName:"Power",extendedInputs:{a:{type:w,description:"Base"},b:{type:w,description:"Exponent"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Of=Ce("math.min",{category:B.Math,keywords:["minimum","smallest"],description:"Returns the smaller of a and b."},(i,e)=>Math.min(i,e));T({version:"1.0.0",...Of,displayName:"Min",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Minimum"}}});const Ef=Ce("math.max",{category:B.Math,keywords:["maximum","largest"],description:"Returns the larger of a and b."},(i,e)=>Math.max(i,e));T({version:"1.0.0",...Ef,displayName:"Max",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Maximum"}}});const Nf=Ee({id:"math.fmod",metadata:{category:B.Math,keywords:["modulo","remainder"],description:"Floating point modulo operation."},inputs:{dividend:w,divisor:w},outputs:{div:w,mod:w},autoBroadcast:!0,execute:(i,e,t)=>{const{dividend:n,divisor:o}=i,s=Math.floor(n/o),r=n%o;return{div:s,mod:r}}});T({version:"1.0.0",...Nf,displayName:"FMod",extendedInputs:{dividend:{type:w,description:"Dividend"},divisor:{type:w,description:"Divisor",defaultValue:1,range:[0,10]}},extendedOutputs:{div:{type:w,description:"The integer division result."},mod:{type:w,description:"The remainder."}}});const Rf=Ce("logic.and",{category:B.Logic,keywords:["boolean","&&"],description:"Logical AND (1 if both non-zero, else 0)."},(i,e)=>i!==0&&e!==0?1:0);T({version:"1.0.0",...Rf,displayName:"AND",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Bf=Ce("logic.or",{category:B.Logic,keywords:["boolean","||"],description:"Logical OR (1 if either non-zero, else 0)."},(i,e)=>i!==0||e!==0?1:0);T({version:"1.0.0",...Bf,displayName:"OR",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const _f=Ce("logic.xor",{category:B.Logic,keywords:["boolean","^"],description:"Logical XOR (1 if different truthiness, else 0)."},(i,e)=>i!==0!=(e!==0)?1:0);T({version:"1.0.0",..._f,displayName:"XOR",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const $f=Ce("logic.equals",{category:B.Logic,keywords:["==","equality"],description:"Returns 1 if a equals b, else 0."},(i,e)=>i===e?1:0);T({version:"1.0.0",...$f,displayName:"Equals",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Ff=Ce("logic.greater_than",{category:B.Logic,keywords:[">","gt"],description:"Returns 1 if a > b, else 0."},(i,e)=>i>e?1:0);T({version:"1.0.0",...Ff,displayName:"Greater Than",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const Vf=Ce("logic.less_than",{category:B.Logic,keywords:["<","lt"],description:"Returns 1 if a < b, else 0."},(i,e)=>i<e?1:0);T({version:"1.0.0",...Vf,displayName:"Less Than",extendedInputs:{a:{type:w,description:"Value A"},b:{type:w,description:"Value B"}},extendedOutputs:{result:{type:w,description:"Result"}}});const hm=Object.freeze(Object.defineProperty({__proto__:null,primitive_add:If,primitive_and:Rf,primitive_divide:Pf,primitive_equals:$f,primitive_fmod:Nf,primitive_greater_than:Ff,primitive_less_than:Vf,primitive_max:Ef,primitive_min:Of,primitive_multiply:Df,primitive_or:Bf,primitive_pow:Lf,primitive_subtract:Tf,primitive_xor:_f},Symbol.toStringTag,{value:"Module"})),zf=Ce("math.abs",{category:B.Math,keywords:["absolute","magnitude"],description:"Returns the absolute value of a."},i=>Math.abs(i),"unary");T({version:"1.0.0",...zf,displayName:"Abs",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Absolute Value"}}});const Hf=Ce("math.negate",{category:B.Math,keywords:["negative","invert"],description:"Negates a."},i=>-i,"unary");T({version:"1.0.0",...Hf,displayName:"Negate",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Negated Value"}}});const qf=Ce("math.ceil",{category:B.Math,keywords:["ceiling","round up"],description:"Rounds a up to the nearest integer."},i=>Math.ceil(i),"unary");T({version:"1.0.0",...qf,displayName:"Ceil",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Ceiling"}}});const Wf=Ce("math.floor",{category:B.Math,keywords:["floor","round down"],description:"Rounds a down to the nearest integer."},i=>Math.floor(i),"unary");T({version:"1.0.0",...Wf,displayName:"Floor",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Floor"}}});const jf=Ce("math.round",{category:B.Math,keywords:["round","nearest"],description:"Rounds a to the nearest integer."},i=>Math.round(i),"unary");T({version:"1.0.0",...jf,displayName:"Round",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Rounded Value"}}});const Uf=Ce("math.sin",{category:B.Math,keywords:["sine"],description:"Returns the sine of a (radians)."},i=>Math.sin(i),"unary");T({version:"1.0.0",...Uf,displayName:"Sin",extendedInputs:{a:{type:w,description:"Value (Radians)"}},extendedOutputs:{result:{type:w,description:"Sine"}}});const Gf=Ce("math.cos",{category:B.Math,keywords:["cosine"],description:"Returns the cosine of a (radians)."},i=>Math.cos(i),"unary");T({version:"1.0.0",...Gf,displayName:"Cos",extendedInputs:{a:{type:w,description:"Value (Radians)"}},extendedOutputs:{result:{type:w,description:"Cosine"}}});const Yf=Ce("math.tan",{category:B.Math,keywords:["tangent"],description:"Returns the tangent of a (radians)."},i=>Math.tan(i),"unary");T({version:"1.0.0",...Yf,displayName:"Tan",extendedInputs:{a:{type:w,description:"Value (Radians)"}},extendedOutputs:{result:{type:w,description:"Tangent"}}});const Kf=Ce("math.sqrt",{category:B.Math,keywords:["square root"],description:"Returns the square root of a."},i=>Math.sqrt(i),"unary");T({version:"1.0.0",...Kf,displayName:"Sqrt",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Square Root"}}});const Xf=Ce("logic.not",{category:B.Logic,keywords:["!","invert"],description:"Logical NOT (1 if zero, 0 if non-zero)."},i=>i===0?1:0,"unary");T({version:"1.0.0",...Xf,displayName:"NOT",extendedInputs:{a:{type:w,description:"Value"}},extendedOutputs:{result:{type:w,description:"Result"}}});const dm=Object.freeze(Object.defineProperty({__proto__:null,primitive_abs:zf,primitive_ceil:qf,primitive_cos:Gf,primitive_floor:Wf,primitive_negate:Hf,primitive_not:Xf,primitive_round:jf,primitive_sin:Uf,primitive_sqrt:Kf,primitive_tan:Yf},Symbol.toStringTag,{value:"Module"})),pt=(i,e,t,n=B.Math)=>{const o=Ee({id:i,metadata:{category:n,description:`Apply ${i.split(".").pop()} to all inputs.`},inputs:{values:{kind:"array",element:he,size:"dynamic",allowMultiConnection:!0}},outputs:{result:w},computeForwardPorts:(s,r,a)=>{const l=s.fields.values;let c=w;if(l&&l.kind==="array"){const f=l.element;(f.kind==="array"||f.kind==="record")&&(c=f)}return{inputs:{kind:"record",fields:{values:l}},outputs:{kind:"record",fields:{result:c}}}},execute:s=>{const r=s.values;if(!r||r.length===0)return{result:0};const a=r[0],l=Array.isArray(a);let c=!1,f=[];if(!l&&typeof a=="object"&&a!==null&&typeof a.x=="number"&&typeof a.y=="number"&&(c=!0,f=["x","y"],typeof a.z=="number"&&f.push("z"),typeof a.w=="number"&&f.push("w")),l||c||typeof a=="number"){const h=l?a.length:c?f.length:1,d=new Array(h);for(let u=0;u<h;u++){let p=l?a[u]:c?a[f[u]]:a;for(let g=1;g<r.length;g++){const m=r[g];let b;if(Array.isArray(m))b=m[u]??0;else if(typeof m=="object"&&m!==null&&"x"in m){const y=f[u];b=m[y],b===void 0&&(b=0)}else b=m;p=t(p,b)}d[u]=p}if(c){const u={};return f.forEach((p,g)=>u[p]=d[g]),{result:u}}else if(!l)return{result:d[0]};return{result:d}}else return{result:0}}});return T({version:"1.0.0",...o,displayName:e,extendedInputs:{values:{type:{kind:"array",element:w,size:"dynamic"},description:"Values to process.",suppressInputEditor:!0,suppressLabel:!0,allowMultiConnection:!0}},extendedOutputs:{result:{type:w,description:"Result"}}}),o},um=pt("math.all.add","Sum All",(i,e)=>i+e),pm=pt("math.all.subtract","Subtract All",(i,e)=>i-e),gm=pt("math.all.multiply","Multiply All",(i,e)=>i*e),mm=pt("math.all.divide","Divide All",(i,e)=>i/e),bm=pt("math.all.pow","Power All",(i,e)=>Math.pow(i,e)),ym=pt("math.all.min","Min All",(i,e)=>Math.min(i,e)),vm=pt("math.all.max","Max All",(i,e)=>Math.max(i,e)),wm=pt("logic.all.and","AND All",(i,e)=>i&&e?1:0,B.Logic),xm=pt("logic.all.or","OR All",(i,e)=>i||e?1:0,B.Logic),Sm=pt("logic.all.xor","XOR All",(i,e)=>!!i!=!!e?1:0,B.Logic),km=pt("logic.all.equals","Equals All",(i,e)=>i===e?1:0,B.Logic),Cm=pt("logic.all.greater_than","Greater Than All",(i,e)=>i>e?1:0,B.Logic),Mm=pt("logic.all.less_than","Less Than All",(i,e)=>i<e?1:0,B.Logic),Am=Object.freeze(Object.defineProperty({__proto__:null,primitive_all_add:um,primitive_all_and:wm,primitive_all_divide:mm,primitive_all_equals:km,primitive_all_greater_than:Cm,primitive_all_less_than:Mm,primitive_all_max:vm,primitive_all_min:ym,primitive_all_multiply:gm,primitive_all_or:xm,primitive_all_pow:bm,primitive_all_subtract:pm,primitive_all_xor:Sm},Symbol.toStringTag,{value:"Module"})),Jf=Ee({id:"math.pi",metadata:{category:B.Math,keywords:["pi","constant"],description:"Returns the value of Pi."},inputs:{},outputs:{result:w},execute:()=>({result:Math.PI})});T({version:"1.0.0",...Jf,displayName:"Pi",extendedOutputs:{result:{type:w,description:"Pi"}}});const Qf=Ee({id:"math.e",metadata:{category:B.Math,keywords:["e","euler","constant"],description:"Returns the value of Euler's number."},inputs:{},outputs:{result:w},execute:()=>({result:Math.E})});T({version:"1.0.0",...Qf,displayName:"E",extendedOutputs:{result:{type:w,description:"Euler's Number"}}});const Im=Object.freeze(Object.defineProperty({__proto__:null,primitive_e:Qf,primitive_pi:Jf},Symbol.toStringTag,{value:"Module"})),Zf=Ee({id:"math.clamp",metadata:{category:B.Math,keywords:["limit","range"],description:"Clamps a value between a minimum and maximum."},inputs:{value:w,min:{...w,defaultValue:0},max:{...w,defaultValue:1}},outputs:{result:w},autoBroadcast:{value:{combine:"collect"},min:{combine:"collect"},max:{combine:"collect"}},reshape:"vector",execute:i=>{const{value:e,min:t,max:n}=i;return{result:Math.max(t,Math.min(e,n))}}});T({version:"1.0.0",...Zf,displayName:"Clamp",extendedInputs:{value:{type:w,description:"Value to clamp."},min:{type:w,description:"Minimum value.",defaultValue:0,range:[0,1]},max:{type:w,description:"Maximum value.",defaultValue:1,range:[0,1]}},extendedOutputs:{value:{type:w,description:"The clamped value."}}});const eh=Ee({id:"math.lerp",metadata:{category:B.Math,keywords:["lerp","mix","interpolate"],description:"Linear interpolation between a and b."},inputs:{a:w,b:w,t:w},config:{clamp:{kind:"atomic",type:"boolean",optional:!0}},outputs:{result:w},autoBroadcast:!0,execute:(i,e)=>{const{a:t,b:n,t:o}=i,s=e.clamp!==!1,r=t+(n-t)*o;return{result:s?Math.max(Math.min(r,Math.max(t,n)),Math.min(t,n)):r}}});T({version:"1.0.0",...eh,displayName:"Lerp",extendedInputs:{a:{type:w,description:"Start Value"},b:{type:w,description:"End Value"},t:{type:w,description:"Interpolant (0-1)"}},extendedOutputs:{result:{type:w,description:"Interpolated Value"}},compileConfig:i=>({fields:{clamp:i.clamp??!0},untagged:[]})});const th=Ee({id:"math.map",metadata:{category:B.Math,keywords:["map","remap","range"],description:"Maps a value from one range to another."},inputs:{value:w,inMin:w,inMax:w,outMin:w,outMax:w},outputs:{result:w},autoBroadcast:!0,execute:i=>{const{value:e,inMin:t,inMax:n,outMin:o,outMax:s}=i;return{result:o+(e-t)*(s-o)/(n-t)}}});T({version:"1.0.0",...th,displayName:"Map",extendedInputs:{value:{type:w,description:"Input Value"},inMin:{type:w,description:"Input Min",defaultValue:0},inMax:{type:w,description:"Input Max",defaultValue:1},outMin:{type:w,description:"Output Min",defaultValue:0},outMax:{type:w,description:"Output Max",defaultValue:1}},extendedOutputs:{result:{type:w,description:"Mapped Value"}}});const Tm=Object.freeze(Object.defineProperty({__proto__:null,primitive_clamp:Zf,primitive_lerp:eh,primitive_map:th},Symbol.toStringTag,{value:"Module"}));function Dm(i){if(!i)return;const e=i.type;if(!(!e||e==="any")){if(e==="float")return{kind:"atomic",type:"number"};if(e==="string")return{kind:"atomic",type:"string"};if(e.startsWith("float")){const t=parseInt(e.slice(5));if(!isNaN(t))return{kind:"array",size:t,element:{kind:"atomic",type:"number"}}}}}const nh={kind:"record",fields:{name:{kind:"atomic",type:"string"},type:he}},ih={id:"io.input",kind:"primitive",metadata:{category:B.IO,keywords:["source","in"],description:"Graph input node."},configType:nh,ui:{inspector:{fields:[{type:"structor-type",label:"Type",path:"type",default:"float"},{type:"string",label:"Name",path:"name"}]}},computeForwardPorts:(i,e,t)=>{let n=i.fields.value;if(!n){const o=Dm(e);o&&(n=o)}return n||(n={kind:"atomic",type:"number"}),{inputs:{kind:"record",fields:{value:{kind:"atomic",type:"number"}}},outputs:{kind:"record",fields:{value:n}}}},execute:(i,e,t)=>{const o=e?.fields?.name??"value";return{fields:{value:i.fields[o]!==void 0?i.fields[o]:i.fields.value}}}};T({version:"1.0.0",...ih,displayName:"Input",aliases:["in","source"],extendedOutputs:{value:{type:he,description:"The input value.",suppressInputEditor:!0,suppressLabel:!0}},compileConfig:i=>{const e=ei(i,nh);return i.values&&(e.values=i.values),e}});const Pm=Object.freeze(Object.defineProperty({__proto__:null,primitive_input:ih},Symbol.toStringTag,{value:"Module"})),oh={id:"io.output",kind:"primitive",metadata:{category:B.IO,keywords:["sink","out"],description:"Graph output node."},computeForwardPorts:(i,e,t)=>{const n=i.fields.value||{kind:"atomic",type:"any"};return{inputs:{kind:"record",fields:{value:n}},outputs:{kind:"record",fields:{value:n}}}},execute:(i,e,t)=>({fields:{value:i.fields.value}})};T({version:"1.0.0",...oh,displayName:"Output",aliases:["out","sink"],extendedInputs:{value:{type:he,description:"The output value.",suppressInputEditor:!0,suppressLabel:!0}},extendedOutputs:{value:{type:he,description:"The graph output value.",suppressInputEditor:!0,suppressLabel:!0}}});const Lm=Object.freeze(Object.defineProperty({__proto__:null,primitive_output:oh},Symbol.toStringTag,{value:"Module"}));function Om(i){if(!i)return;const e=i.type;if(!(!e||e==="any")){if(e==="float")return{kind:"atomic",type:"number"};if(e==="string")return{kind:"atomic",type:"string"};if(e.startsWith("float")){const t=parseInt(e.slice(5));if(!isNaN(t))return{kind:"array",size:t,element:{kind:"atomic",type:"number"}}}}}function Dr(i,e,t,n){if(!i||!i.includes("#"))return i;let o="";return t===1?o=n==="input"?"in":"out":t<=4?o=["x","y","z","w"][e]:o=e.toString(),i.replace(/#/g,o)}const Oa=(i,e,t)=>{const o=t.loadedSubgraphs;if(!o)return{inputs:{kind:"record",fields:{}},outputs:{kind:"record",fields:{}}};const s=e.subgraphId,r=o.get(s);if(r){const a=Object.values(r.inner.nodes),l={},c=a.filter(d=>d.config.typeId==="io.input"||d.config.typeId==="input").sort((d,u)=>d.y-u.y);c.forEach((d,u)=>{let p=d.config.name||"value";p=Dr(p,u,c.length,"input");const g=Om(d.config);l[p]=g||{kind:"atomic",type:"any"}});const f={},h=a.filter(d=>d.config.typeId==="io.output"||d.config.typeId==="output").sort((d,u)=>d.y-u.y);return h.forEach((d,u)=>{let p=d.config.name||"value";p=Dr(p,u,h.length,"output"),f[p]={kind:"atomic",type:"any"}}),{inputs:{kind:"record",fields:l},outputs:{kind:"record",fields:f}}}return{inputs:{kind:"record",fields:{}},outputs:{kind:"record",fields:{}}}},sh=Ee({id:"core.subgraph",subgraphExpansionTag:"inline",metadata:{category:B.Core,keywords:["nested","graph"],description:"Executes a nested subgraph."},config:{subgraphId:{kind:"atomic",type:"string"}},inputs:{},outputs:{},ui:{inspector:{fields:[{type:"string",label:"Subgraph ID",path:"subgraphId"}]}},getDisplayLabel:i=>{if(i.subgraphId){const e=i.subgraphId.split(".");return e[e.length-1]}},computeForwardPorts:Oa,execute:(i,e,t)=>({fields:{}})});T({version:"1.0.0",...sh,displayName:"Subgraph"});const Em=Object.freeze(Object.defineProperty({__proto__:null,computeSubgraphPorts:Oa,primitive_subgraph:sh,resolvePortName:Dr},Symbol.toStringTag,{value:"Module"})),rh=Ee({id:"core.thensubgraph",subgraphExpansionTag:"onTrigger",metadata:{category:B.Core,keywords:["nested","graph","conditional","midi","trigger"],description:"Executes a nested subgraph when a MIDI Note On event is received."},config:{subgraphId:{kind:"atomic",type:"string"}},inputs:{midi_in:X},outputs:{},ui:{inspector:{fields:[{type:"string",label:"Subgraph ID",path:"subgraphId"}]}},getDisplayLabel:i=>{if(i.subgraphId){const e=i.subgraphId.split(".");return`OnNote: ${e[e.length-1]}`}return"OnNote"},computeForwardPorts:((i,e,t)=>{const n=Oa(i,e,t);return{inputs:{kind:"record",fields:{...n.inputs.fields,midi_in:X}},outputs:n.outputs}}),execute:(i,e,t)=>{const n=i.midi_in||[],o=Array.isArray(n)?n:[];let s=!1;for(const r of o)if(r.type==="note_on"&&(r.velocity??0)>0){s=!0;break}return s&&t.executeSubgraph&&t.executeSubgraph("onTrigger"),{fields:{}}}});T(rh);const Nm=Object.freeze(Object.defineProperty({__proto__:null,primitive_thensubgraph:rh},Symbol.toStringTag,{value:"Module"})),ah=Ee({id:"core.pack",metadata:{category:B.Core,keywords:["pack","record","struct","vector"],description:"Packs inputs into a record or vector."},config:{targetType:{kind:"atomic",type:"string",defaultValue:"infer"}},inputs:{},outputs:{result:he},ui:{inspector:{fields:[{type:"tab-bar",label:"Target Type",path:"targetType",options:[{label:"Infer",value:"infer"},{label:"float2",value:"float2"},{label:"float3",value:"float3"},{label:"float4",value:"float4"}]}]}},computeBackwardPorts:(i,e,t)=>{const n=e?.targetType||"infer";let o=null;if(n==="infer"){const r=i.fields.result;r&&r.kind==="record"&&(r.fields.x&&r.fields.y&&r.fields.z&&r.fields.w?o="float4":r.fields.x&&r.fields.y&&r.fields.z?o="float3":r.fields.x&&r.fields.y&&(o="float2"))}else o=n;const s={kind:"record",fields:{}};return o==="float4"?s.fields={x:w,y:w,z:w,w}:o==="float3"?s.fields={x:w,y:w,z:w}:o==="float2"&&(s.fields={x:w,y:w}),{inputRequirements:s,backwardMetadata:{inferredType:o}}},computeForwardPorts:(i,e,t,n)=>{const o=e,s=o?.targetType||o?.fields?.targetType||"infer";let r=s!=="infer"?s:n?.inferredType||"float2";const a={},l={};return["float2","float3","float4"].includes(r)||(r="float2"),r==="float4"?(a.x=w,a.y=w,a.z=w,a.w=w,l.result={kind:"array",size:4,element:w,hint:"float4"}):r==="float3"?(a.x=w,a.y=w,a.z=w,l.result={kind:"array",size:3,element:w,hint:"float3"}):(a.x=w,a.y=w,l.result={kind:"array",size:2,element:w,hint:"float2"}),{inputs:{kind:"record",fields:a},outputs:{kind:"record",fields:l}}},shouldRecompileOnConfigChange:(i,e)=>i?.targetType!==e?.targetType,execute:(i,e)=>{const t=i?.fields||{};let n=e?.targetType||"infer";return n==="infer"&&(t.w!==void 0?n="float4":t.z!==void 0?n="float3":t.y!==void 0&&t.x!==void 0?n="float2":n="record"),n==="float4"?{result:[t.x??0,t.y??0,t.z??0,t.w??0]}:n==="float3"?{result:[t.x??0,t.y??0,t.z??0]}:n==="float2"?{result:[t.x??0,t.y??0]}:{result:{fields:t}}}});T({version:"1.0.0",...ah,displayName:"Pack",extendedOutputs:{result:{type:he,description:"Record"}}});const Rm=Object.freeze(Object.defineProperty({__proto__:null,primitive_pack:ah},Symbol.toStringTag,{value:"Module"})),lh=Ee({id:"core.unpack",metadata:{category:B.Core,keywords:["unpack","destructure","split"],description:"Unpacks a record or fixed-length vector into outputs."},config:{},inputs:{record:he},computeForwardPorts:(i,e,t)=>{const n=i.fields.record;let o={};if(n){if(n.kind==="record")o=n.fields;else if(n.kind==="array"&&typeof n.size=="number"&&n.size<=16){const s=n.size;if(s===2)o.x=n.element,o.y=n.element;else if(s===3)o.x=n.element,o.y=n.element,o.z=n.element;else if(s===4)o.x=n.element,o.y=n.element,o.z=n.element,o.w=n.element;else for(let r=0;r<s;r++)o[r.toString()]=n.element}}return{inputs:{kind:"record",fields:{record:n||he}},outputs:{kind:"record",fields:o}}},outputs:{},dynamicOutputType:he,execute:i=>{let e=i.record;if(!e)return{};if(Array.isArray(e)&&e.length===1&&typeof e[0]=="object"&&e[0]!==null){const t=e[0];("x"in t||"fields"in t||Object.keys(t).length>0)&&(e=t)}if(Array.isArray(e)){const t=e.length,n={};if(t===2)n.x=e[0],n.y=e[1];else if(t===3)n.x=e[0],n.y=e[1],n.z=e[2];else if(t===4)n.x=e[0],n.y=e[1],n.z=e[2],n.w=e[3];else for(let o=0;o<t;o++)o<16&&(n[o.toString()]=e[o]);return n}return typeof e=="object"&&e!==null?"fields"in e?e.fields:e:{}}});T({version:"1.0.0",...lh,displayName:"Unpack",extendedInputs:{record:{type:he,description:"Record to unpack"}}});const Bm=Object.freeze(Object.defineProperty({__proto__:null,primitive_unpack:lh},Symbol.toStringTag,{value:"Module"}));function ch(i){return i&&i.kind==="array"&&i.element?.kind==="record"?"midi":"primitive"}function fh(i,e){if(e==="primitive")if(Array.isArray(i)){for(const t of i)if(t)return!0;return!1}else return!!i;else{const t=i||[];if(Array.isArray(t)){for(const n of t)if(n&&n.type==="note_on"&&(n.velocity??0)>0)return!0}return!1}}const hh=Ee({id:"core.ifthen",subgraphExpansionTag:"onTrigger",metadata:{category:B.Core,keywords:["group","conditional","spatial","if","then"],description:"Spatially groups nodes and executes them when a MIDI Note On event is received."},config:{width:{kind:"atomic",type:"number",defaultValue:3},height:{kind:"atomic",type:"number",defaultValue:3},regionX:{kind:"atomic",type:"number",defaultValue:0,optional:!0},regionY:{kind:"atomic",type:"number",defaultValue:0,optional:!0},visibility:{kind:"atomic",type:"string",defaultValue:"auto",optional:!0},mode:{kind:"atomic",type:"string",defaultValue:"midi",optional:!0}},inputs:{midi_in:X},outputs:{},ui:{inspector:{fields:[{type:"number",label:"Width",path:"width",min:1,step:1},{type:"number",label:"Height",path:"height",min:1,step:1},{type:"number",label:"Region X (Offset)",path:"regionX",step:1},{type:"number",label:"Region Y (Offset)",path:"regionY",step:1},{type:"tab-bar",label:"Visibility",path:"visibility",options:[{label:"Auto",value:"auto"},{label:"Show",value:"show"},{label:"Hide",value:"hide"}],default:"auto"}]}},getDisplayLabel:()=>"IfThen",getRegion:i=>({x:i.regionX??0,y:i.regionY??0,width:i.width??1,height:i.height??1,visibility:i.visibility||Gi.Show}),getChildren:(i,e)=>{const t=[],n=i.config,o=n.regionX??0,s=n.regionY??0,r=n.width??1,a=n.height??1,l=i.x+o,c=i.y+s,f=l+r,h=c+a;for(const d of Object.values(e))d.id!==i.id&&d.x>=l&&d.x<f&&d.y>=c&&d.y<h&&t.push(d.id);return t},execute:(i,e,t)=>{const n=e.mode||"midi",o=i.midi_in;return fh(o,n)&&t.executeSubgraph&&t.executeSubgraph("onTrigger"),{fields:{}}},computeForwardPorts:(i,e,t)=>{const n=i.fields.midi_in;let o="midi",s=X;return n&&(o=ch(n),o==="primitive"&&(s=n)),{inputs:{kind:"record",fields:{midi_in:s}},outputs:{kind:"record",fields:{}},forwardMetadata:{mode:o}}},compileConfig:(i,e)=>{const t=e?.metadata;return{fields:{...i,mode:t?.mode||"midi"}}}});T(hh);const _m=Object.freeze(Object.defineProperty({__proto__:null,primitive_ifthen:hh},Symbol.toStringTag,{value:"Module"}));function dh(i){return typeof i=="number"?w:typeof i=="string"?{kind:"atomic",type:"string"}:typeof i=="boolean"?{kind:"atomic",type:"boolean"}:Array.isArray(i)?{kind:"array",element:i.length>0?dh(i[0]):he,size:i.length}:he}const uh={id:"data.literal",kind:"primitive",metadata:{category:B.Data,keywords:["value","constant"],description:"Outputs a constant value."},configType:{kind:"atomic",type:"any"},computeForwardPorts:(i,e,t)=>({inputs:{kind:"record",fields:{}},outputs:{kind:"record",fields:{value:dh(e)}}}),execute:(i,e,t)=>({fields:{value:e&&typeof e=="object"&&"value"in e?e.value:e}})};T({version:"1.0.0",...uh,displayName:"Literal",extendedOutputs:{value:{type:he,description:"The literal value."}},compileConfig:i=>i?.literal?.value??0});const $m=Object.freeze(Object.defineProperty({__proto__:null,primitive_literal:uh},Symbol.toStringTag,{value:"Module"})),ph=Ee({id:"util.hub",metadata:{category:B.Utility,keywords:["hub","reroute"],description:"Passes input to output."},inputs:{value:he},outputs:{value:he},autoBroadcast:!0,execute:i=>({value:i.value})});T({version:"1.0.0",...ph,displayName:"Hub",extendedInputs:{value:{type:he,description:"Input",suppressInputEditor:!0,suppressLabel:!0}},extendedOutputs:{value:{type:he,description:"Output",suppressLabel:!0}}});const gh=Ee({id:"data.float",metadata:{category:B.Data,keywords:["float","number","slider"],description:"Float value with slider."},inputs:{value:w},outputs:{value:w},autoBroadcast:!0,execute:i=>({value:i.value})});T({version:"1.0.0",...gh,displayName:"Float",extendedInputs:{value:{type:w,description:"Value",defaultValue:0}},extendedOutputs:{value:{type:w,description:"Value"}},compileConfig:i=>({values:{value:i.value??0},fields:{},untagged:[]})});const Fm=Object.freeze(Object.defineProperty({__proto__:null,primitive_float:gh,primitive_hub:ph},Symbol.toStringTag,{value:"Module"})),mh={id:"functional.apply",kind:"primitive",metadata:{category:B.Functional,keywords:["call","invoke"],description:"Applies a functor to an input value."},computeForwardPorts:(i,e,t)=>{const n=i.fields.functor;return{inputs:i,outputs:{kind:"record",fields:{result:n?n.output:{kind:"atomic",type:"any"}}}}},execute:(i,e,t)=>{const n=i.fields.functor,o=i.fields.input;return{fields:{result:n(o)}}}};T({version:"1.0.0",...mh,displayName:"Apply Functor",extendedInputs:{functor:{type:{kind:"functor",input:he,output:he},description:"The functor to apply."},value:{type:he,description:"The value to apply the functor to."}},extendedOutputs:{result:{type:he,description:"The result of the functor application."}}});const Vm=Object.freeze(Object.defineProperty({__proto__:null,primitive_apply:mh},Symbol.toStringTag,{value:"Module"})),bh=Ee({id:"logic.select",metadata:{category:B.Logic,keywords:["switch","case","mux","conditional","select"],description:"Selects an output value from multiple inputs based on a control value."},inputs:{},config:{count:{kind:"atomic",type:"number",defaultValue:2},mode:{kind:"atomic",type:"string",defaultValue:"value"},base:{kind:"atomic",type:"number",defaultValue:0,optional:!0},step:{kind:"atomic",type:"number",defaultValue:1,optional:!0}},outputs:{result:be},autoBroadcast:!1,computeForwardPorts:(i,e,t)=>{const n=e.fields,o=n.count||2,s=n.mode||"value",r={value:w},a=[];for(let c=0;c<o;c++)if(s==="range"){const f=`val_${c}`;r[f]={...w,description:`Case ${c+1} Value`},i.fields&&i.fields[f]&&a.push(i.fields[f])}else s==="value"?(r[`match_${c}`]={...w,description:`Case ${c+1} Match`},r[`val_${c}`]={...w,description:`Case ${c+1} Value`},i.fields&&i.fields[`val_${c}`]&&a.push(i.fields[`val_${c}`])):s==="zone"&&(r[`threshold_${c}`]={...w,description:`Case ${c+1} Threshold`},r[`val_${c}`]={...w,description:`Case ${c+1} Value`},i.fields&&i.fields[`val_${c}`]&&a.push(i.fields[`val_${c}`]));const l=Da(a);return{inputs:{kind:"record",fields:r},outputs:{kind:"record",fields:{result:l}}}},compileConfig:i=>({fields:{count:i.count||2,mode:i.mode||"value",base:i.base||0,step:i.step||1}}),shouldRecompileOnConfigChange:(i,e)=>{const t=i,n=e;return t.count!==n?.count||t.mode!==n?.mode},execute:(i,e,t)=>{const n=e.count??2,o=e.mode??"value",s=e.base??0,r=e.step??1,a={value:{type:w}};for(let d=0;d<n;d++){const u=`val_${d}`;a[u]={type:be},o==="value"?a[`match_${d}`]={type:w}:o==="zone"&&(a[`threshold_${d}`]={type:w})}const l=Yp(t,a,i),c=l.value??0;let f=-1;if(o==="range")if(r===0)f=0;else{const d=Math.round((c-s)/r);f=Math.max(0,Math.min(n-1,d))}else if(o==="value")for(let u=0;u<n;u++){const p=l[`match_${u}`]??u+1;if(Math.abs(c-p)<1e-4){f=u;break}}else if(o==="zone")for(let d=0;d<n;d++){const u=l[`threshold_${d}`]??1/0;if(c<=u){f=d;break}}let h=0;return f!==-1?h=l[`val_${f}`]??0:h=0,{result:h}}});T({version:"1.0.0",...bh,displayName:"Select",extendedInputs:{value:{type:w,description:"Control Value"}},extendedOutputs:{result:{type:be,description:"Selected Value"}},ui:{inspector:{fields:[{type:"number",label:"Count",path:"count",min:2,max:32,step:1,default:2},{type:"tab-bar",label:"Mode",path:"mode",default:"value",options:[{label:"Value (Match)",value:"value"},{label:"Range (Index)",value:"range"},{label:"Zone (Threshold)",value:"zone"}]},{type:"number",label:"Base Index",path:"base",step:1,default:0,visible:i=>i.mode==="range"},{type:"number",label:"Step Size",path:"step",step:1,default:1,visible:i=>i.mode==="range"}]}}});const zm=Object.freeze(Object.defineProperty({__proto__:null,logic_select:bh},Symbol.toStringTag,{value:"Module"})),yh=Ee({id:"logic.latch",metadata:{category:B.Logic,keywords:["latch","sample","hold","trigger","store"],description:"Stores and outputs a value when the trigger condition is met."},config:{initMode:{kind:"atomic",type:"string",defaultValue:"auto"},mode:{kind:"atomic",type:"string",defaultValue:"midi",optional:!0}},inputs:{condition:X,value:be,init:be},outputs:{result:be},autoBroadcast:!1,createState:()=>({currentValue:void 0,initialized:!1}),computeForwardPorts:(i,e,t)=>{const o=e.fields.initMode||"auto",s=(i.fields||i).condition,r=ch(s),a=(i.fields||i).value||be;let l=(i.fields||i).init||be;o==="auto"&&(l=a);const c=Da([a,l]),f={condition:s||X,value:a};return o==="manual"&&(f.init=l),{inputs:{kind:"record",fields:f},outputs:{kind:"record",fields:{result:c}},forwardMetadata:{mode:r}}},compileConfig:(i,e)=>({fields:{initMode:i.initMode||"auto",mode:e?.mode||"midi"}}),shouldRecompileOnConfigChange:(i,e)=>{const t=i,n=e;return t.initMode!==n?.initMode},execute:(i,e,t,n)=>{const o=i.condition,s=i.value,r=i.init,a=e.mode||"midi",l=e.initMode||"auto";fh(o,a)&&(n.currentValue=s,n.initialized=!0);let c=n.currentValue;return n.initialized||(l==="auto"&&(c=s),n.initialized||(n.currentValue=l==="auto"?s:r,n.initialized=!0,c=n.currentValue)),{result:c}}});T({version:"1.0.0",...yh,inputs:{},displayName:"Latch",extendedInputs:{condition:{type:X,description:"Trigger"},value:{type:be,description:"Value to Latch"},init:{type:be,description:"Initial Value"}},extendedOutputs:{result:{type:be,description:"Latched Value"}},ui:{inspector:{fields:[{type:"tab-bar",label:"Init Mode",path:"initMode",default:"auto",options:[{label:"Auto (Use Value)",value:"auto"},{label:"Manual",value:"manual"}]}]}}});const Hm=Object.freeze(Object.defineProperty({__proto__:null,logic_latch:yh},Symbol.toStringTag,{value:"Module"})),vh=Ee({id:"logic.delay",metadata:{category:B.Logic,keywords:["delay","z-1","feedback","memory","prev"],description:"Outputs the value from the previous frame (z⁻¹)."},config:{initMode:{kind:"atomic",type:"string",defaultValue:"auto"}},inputs:{value:be,init:be},outputs:{result:be},autoBroadcast:!1,isRealtime:()=>!0,createState:()=>({storedValue:void 0,initialized:!1}),computeForwardPorts:(i,e,t)=>{const o=e.fields.initMode||"auto",s=(i.fields||i).value||be;let r=(i.fields||i).init||be;o==="auto"&&(r=s);const a=Da([s,r]),l={value:s};return o==="manual"&&(l.init=r),{inputs:{kind:"record",fields:l},outputs:{kind:"record",fields:{result:a}}}},compileConfig:(i,e)=>({fields:{initMode:i.initMode||"auto"}}),shouldRecompileOnConfigChange:(i,e)=>{const t=i,n=e;return t.initMode!==n?.initMode},cycleBreakingPorts:["value"],execute:(i,e,t,n)=>{const o=i.init,s=e.initMode||"auto";let r;return n.initialized?r=n.storedValue:(s==="auto"?r=i.value:r=o,n.initialized=!0),i.value!==void 0&&(n.storedValue=i.value),{result:r}},consolidate:(i,e,t,n)=>{i.value!==void 0&&(n.storedValue=i.value),n.initialized=!0}});T({version:"1.0.0",...vh,inputs:{},displayName:"Delay",extendedInputs:{value:{type:be,description:"Input Value"},init:{type:be,description:"Initial Value"}},extendedOutputs:{result:{type:be,description:"Delayed Value"}},ui:{inspector:{fields:[{type:"tab-bar",label:"Init Mode",path:"initMode",default:"auto",options:[{label:"Auto (Use Value)",value:"auto"},{label:"Manual",value:"manual"}]}]}}});const qm=Object.freeze(Object.defineProperty({__proto__:null,logic_delay:vh},Symbol.toStringTag,{value:"Module"})),Wm=[hm,dm,Am,Im,Tm,Pm,Lm,Em,Nm,Rm,Bm,_m,$m,Fm,Vm,zm,Hm,qm];Wm.flatMap(i=>Object.values(i).filter(e=>typeof e=="object"&&e!==null&&"kind"in e&&e.kind==="primitive"));T({...yf,ui:{body:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveBodyRenderer),getBodyHeight:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveBodyHeight),inspector:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveInspectorRenderer)}});T({...vf,ui:{body:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveBodyRenderer),getBodyHeight:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveBodyHeight),inspector:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveInspectorRenderer)}});T({...wf,ui:{body:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveEnvBodyRenderer),getBodyHeight:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveEnvBodyHeight),inspector:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveInspectorRenderer)}});T({...Ar,ui:{...Ar.ui,body:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveCropBodyRenderer),getBodyHeight:()=>Me(()=>import("./nodes.ui-BaZRT1ph.js"),__vite__mapDeps([3,1])).then(i=>i.CurveCropBodyHeight)}});T({...La,ui:{inputEditor:()=>Me(()=>import("./nodes.ui-D7LHLugG.js"),__vite__mapDeps([4,1])).then(i=>i.DebugScopeInputEditor),getInputEditorHeight:()=>Promise.resolve(()=>100)}});T({...kf,ui:{inspector:()=>Me(()=>import("./nodes.ui-dTlYe2bo.js"),__vite__mapDeps([5,1])).then(i=>i.ExpressionInspectorRenderer)}});var Pr=(i=>(i.NoChange="NoChange",i.UserAction="UserAction",i.Programmatic="Programmatic",i))(Pr||{});class Ft{constructor(e,t,n){this.element=t,this.callbacks=n,this.isDisposed=!1,this.initialThresholdReached=!1,this.pointerId=e.pointerId,this.moveFunc=this.onPointerMove.bind(this),this.upFunc=this.onPointerUp.bind(this),this.cancelFunc=this.onPointerCancel.bind(this),window.addEventListener("pointermove",this.moveFunc),window.addEventListener("pointerup",this.upFunc),window.addEventListener("pointercancel",this.cancelFunc),this.startX=e.clientX,this.startY=e.clientY,this.callbacks.callMoveImmediately&&(this.element.setPointerCapture(this.pointerId),this.initialThresholdReached=!0,this.moveFunc(e))}onPointerMove(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];if(!this.initialThresholdReached){const n=Math.abs(t[0])+Math.abs(t[1]),o=this.callbacks.threshold??5;n>o&&(this.element.setPointerCapture(this.pointerId),this.initialThresholdReached=!0)}this.initialThresholdReached&&this.callbacks?.move?.(e,t)}onPointerUp(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];this.callbacks.callMoveBeforeDone&&this.callbacks?.move?.(e,t),this.initialThresholdReached?this.callbacks?.accept?.(e,t):this.callbacks?.cancel?.("NoChange"),this.callbacks?.complete?.(),this.finishDispose()}onPointerCancel(e){if(this.isDisposed||e.pointerId!==this.pointerId)return;const t=[e.clientX-this.startX,e.clientY-this.startY];this.callbacks.callMoveBeforeDone&&this.callbacks?.move?.(e,t),this.callbacks?.cancel?.("UserAction"),this.callbacks?.complete?.(),this.finishDispose()}dispose(){this.isDisposed||(this.callbacks?.cancel?.("Programmatic"),this.callbacks?.complete?.(),this.finishDispose())}finishDispose(){this.isDisposed||(this.isDisposed=!0,this.element.releasePointerCapture(this.pointerId),window.removeEventListener("pointermove",this.moveFunc),window.removeEventListener("pointerup",this.upFunc),window.removeEventListener("pointercancel",this.cancelFunc))}}var jm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,gt=(i,e,t,n)=>{for(var o=n>1?void 0:n?Um(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&jm(e,t,o),o};let tt=class extends it{constructor(){super(),this.tick=0,this.history=[],this.smoothedRange=1,this.smoothedAnchor=0,this.isSigned=!1,this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1,this.selectedNodeId=null,this.hoveredNodeId=null,Wn(this)}updated(i){if((i.has("value")||i.has("tick"))&&this.value!==void 0){this.history.push(this.value);const e=this.config?.historySize||100;this.history.length>e&&this.history.shift(),this.config?.mode==="scope"&&this.config.autoRange&&this.updateAdaptiveRange(),this.requestUpdate()}}updateAdaptiveRange(){if(this.history.length===0)return;const i=this.history;let e=i[0],t=i[0],n=!1;for(const f of i)f<e&&(e=f),f>t&&(t=f),f<0&&(n=!0);n&&(this.isSigned=!0);const o=1.2;let s=1,r=0;if(this.isSigned){const f=(e+t)/2,h=t-e,d=Math.max(h*o,.001),u=Math.pow(2,Math.ceil(Math.log2(d))),p=u,g=Math.round(f/p)*p;s=u,r=g;const m=r-s/2,b=r+s/2;(e<m||t>b)&&(s*=2)}else if(e>=-1e-4&&t<=1+1e-4)s=1,r=0;else{const h=Math.max(t-e,.001);let d=Math.pow(2,Math.ceil(Math.log2(h*o))),u=Math.floor(e/d)*d;u+d<t&&(d*=2,u=Math.floor(e/d)*d),s=d,r=u}s>this.smoothedRange?this.smoothedRange=s:(this.smoothedRange=this.smoothedRange*.95+s*.05,Math.abs(this.smoothedRange-s)<.01&&(this.smoothedRange=s));const a=this.getDisplayAnchor(),l=this.getDisplayRange();let c=!1;if(this.isSigned){const h=a-l*.9/2,d=a+l*.9/2;e>=h&&t<=d&&(c=!0)}else{const f=a,h=a+l*.9;e>=f&&t<=h&&(c=!0)}c?this.smoothedAnchor=this.smoothedAnchor*.99+r*.01:(this.smoothedAnchor=this.smoothedAnchor*.8+r*.2,Math.abs(this.smoothedAnchor-r)<.01&&(this.smoothedAnchor=r))}getDisplayRange(){return Math.pow(2,Math.ceil(Math.log2(this.smoothedRange)))}getDisplayAnchor(){const i=this.getDisplayRange();return Math.round(this.smoothedAnchor/i)*i}get totalWeight(){return this.config?.segments?.reduce((i,e)=>i+e.weight,0)||1}get segmentLayout(){if(!this.config||!this.config.segments)return[];const i=ce;let e=0;const t=this.totalWeight;return this.config.segments.map((n,o)=>{const s=n.weight/t*i,r={segment:n,index:o,startX:e,endX:e+s,width:s};return e+=s,r})}get pathData(){if(!this.config)return"";if(this.config.envelopeNodes&&this.config.envelopeNodes.length>0)return this.getEnvelopePathData();if(this.config.mode==="scope"){const l=this.history,c=ce,f=96,h=this.config.historySize||100,d=this.config.autoRange?this.getDisplayRange():(this.config.range?.[1]??1)-(this.config.range?.[0]??0),u=this.config.autoRange?this.getDisplayAnchor():this.config.range?.[0]??0;let p,g;this.config.autoRange?this.isSigned?(p=u-d/2,g=u+d/2):(p=u,g=u+d):(p=this.config.range?.[0]??0,g=this.config.range?.[1]??1);const m=y=>{const x=(y-p)/(g-p);return f-Math.max(0,Math.min(1,x))*f},b=l.map((y,x)=>{const v=x/(h-1)*c,C=m(y);return`${v},${C}`});return b.length>0?`M ${b.join(" L ")}`:""}const{domain:i,range:e}=this.config;if(!i||!e)return"";const[t,n]=e,o=96,s=(l,c,f)=>(l-c)/(f-c),r=[],a=20;if(this.segmentLayout.forEach(l=>{const{segment:c,startX:f,endX:h}=l;let d=1;c.curve.type==="exponential"&&(d=Math.pow(10,-(c.curve.value??0)));const u=c.curve.type==="step"?c.curve.value??2:1;if(c.curve.type==="points"&&c.curve.points){c.curve.points.forEach(p=>{const g=p.x,m=t+p.y*(n-t),b=f+g*(h-f),y=o-s(m,t,n)*o;r.push([b,y])});return}for(let p=0;p<=a;p++){const g=p/a;let m=0;switch(c.curve.type){case"exponential":m=Math.pow(g,d);break;case"linear":m=g;break;case"step":u<=1?m=0:m=Math.floor(g*u)/(u-1),g>=.999&&(m=1);break;case"sin":m=-(Math.cos(Math.PI*g)-1)/2;break;case"quad":m=g*g;break;default:m=g}const b=t+m*(n-t),y=f+g*(h-f),x=o-s(b,t,n)*o;r.push([y,x])}}),r.length>0){const l=r[0];l[0]>.001&&r.unshift([0,l[1]]);const c=ce,f=r[r.length-1];f[0]<c-.001&&r.push([c,f[1]])}return`M ${r.map(l=>l.join(",")).join(" L ")}`}handlePointerDown(i){if(!this.config?.interactive)return;const e=this.getBoundingClientRect(),t=i.clientX-e.left,n=e.width,o=e.height,s=this.segmentLayout,r=10;let a=-1;for(let l=0;l<s.length-1;l++){const c=s[l].endX;if(Math.abs(t-c)<r){a=l;break}}if(a!==-1&&this.config.onSegmentResize){const l=s[a].width;this.config.onInteractionStart&&this.config.onInteractionStart(),new Ft(i,this,{move:(c,f)=>{const h=l+f[0],d=this.totalWeight/n,u=h*d;u>0&&this.config?.onSegmentResize&&this.config.onSegmentResize(a,u)},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}});return}if(this.config.onSegmentChange){const l=s.find(c=>t>=c.startX&&t<=c.endX);if(l&&l.segment.curve.type==="exponential"){this.config.onInteractionStart&&this.config.onInteractionStart(),new Ft(i,this,{move:(c,f)=>{const h=this.getBoundingClientRect(),d=c.clientY-h.top,g=1-2*(Math.max(0,Math.min(o,d))/o);this.config?.onSegmentChange&&this.config.onSegmentChange(l.segment.id,"value",g)},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}});return}}if(this.config.envelopeNodes&&this.config.segments){const l=t/n,c=i.clientY-e.top,[f,h]=this.config.range||[0,1],d=f+(o-c)/o*(h-f),u=this.evaluateEnvelopeAt(l),p=10/o*(h-f);if(Math.abs(d-u)<p){const{envelopeNodes:g}=this.config;let m=-1;for(let b=0;b<g.length-1;b++)if(l>=g[b].x&&l<=g[b+1].x){m=b;break}if(m!==-1){i.altKey?this.startCurveBend(i,m):this.startSegmentDrag(i,m);return}}}}evaluateCurve(i){if(!this.config||!this.config.segments)return 0;const{range:e,segments:t}=this.config,[n,o]=e||[0,1],s=this.totalWeight,r=i*s;let a=0,l=t[t.length-1],c=0;for(const g of t){if(r>=a&&r<=a+g.weight){l=g,c=a;break}a+=g.weight}const f=l.weight,h=(r-c)/f;let d=0;const u=l.curve,p=u.type==="step"?u.value??2:1;switch(u.type){case"exponential":const g=Math.pow(10,-(u.value??0));d=Math.pow(h,g);break;case"linear":d=h;break;case"step":p<=1?d=0:d=Math.floor(h*p)/(p-1),h>=.999&&(d=1);break;case"sin":d=-(Math.cos(Math.PI*h)-1)/2;break;case"quad":d=h*h;break;case"points":if(u.points&&u.points.length>0){const m=u.points;if(h<=m[0].x)d=m[0].y;else if(h>=m[m.length-1].x)d=m[m.length-1].y;else for(let b=0;b<m.length-1;b++){const y=m[b],x=m[b+1];if(h>=y.x&&h<=x.x){const v=(h-y.x)/(x.x-y.x);d=y.y+v*(x.y-y.y);break}}}else d=h;break;default:d=h}return n+d*(o-n)}handlePointerMove(i){if(!this.config?.interactive)return;if(this.style.cursor="default",this.config.envelopeNodes&&this.config.segments){const r=this.getBoundingClientRect(),a=i.clientX-r.left,l=i.clientY-r.top,c=r.height,f=r.width,[h,d]=this.config.range||[0,1],u=a/f,p=h+(c-l)/c*(d-h),g=this.evaluateEnvelopeAt(u),m=10/c*(d-h);if(Math.abs(p-g)<m){this.style.cursor="ns-resize",W(()=>{this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1});return}}const e=this.getBoundingClientRect(),t=i.clientX-e.left,n=this.segmentLayout;this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1;const o=10;for(let r=0;r<n.length-1;r++){const a=n[r].endX;if(Math.abs(t-a)<o){W(()=>{this.hoveredSplitIndex=r,this.hoveredSegmentIndex=-1}),this.style.cursor="col-resize";return}}const s=n.findIndex(r=>t>=r.startX&&t<=r.endX);s!==-1&&W(()=>{this.hoveredSegmentIndex=s})}handlePointerLeave(){this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1}getEnvelopePathData(){if(!this.config||!this.config.envelopeNodes||!this.config.segments)return"";const{envelopeNodes:i,segments:e,range:t}=this.config,[n,o]=t||[0,1],s=ce,r=96,a=f=>f*s,l=f=>r-(f-n)/(o-n)*r,c=[];for(let f=0;f<i.length-1;f++){const h=i[f],d=i[f+1],u=e[f];a(h.x);const p=20;let g="linear",m=0;u&&(g=u.curve.type,m=u.curve.value??0);for(let b=0;b<p;b++){const y=b/p;let x=0;switch(g){case"exponential":const k=Math.pow(10,-m);x=Math.pow(y,k);break;case"linear":x=y;break;case"step":const S=m;S<=1?x=0:x=Math.floor(y*S)/(S-1),y>=.999&&(x=1);break;case"sin":x=-(Math.cos(Math.PI*y)-1)/2;break;case"quad":x=y*y;break;default:x=y}const v=h.y+x*(d.y-h.y),C=h.x+y*(d.x-h.x);c.push([a(C),l(v)])}}if(i.length>0){const f=i[i.length-1];c.push([a(f.x),l(f.y)])}return c.length>0&&(c[0][0]>.001&&c.unshift([0,c[0][1]]),c[c.length-1][0]<s-.001&&c.push([s,c[c.length-1][1]])),`M ${c.map(f=>f.join(",")).join(" L ")}`}renderEnvelopeNodes(i,e,t){if(!this.config?.envelopeNodes)return"";const n=s=>i-(s-e)/(t-e)*i,o=s=>s*ce;return this.config.envelopeNodes.map(s=>{const r=o(s.x),a=n(s.y),l=s.id===this.selectedNodeId,c=s.id===this.hoveredNodeId;return rt`
            <g class="envelope-node"
               style="cursor: pointer;"
               @pointerdown=${f=>this.handleNodePointerDown(f,s)}
               @dblclick=${f=>this.handleNodeDoubleClick(f,s)}
               @pointerover=${()=>W(()=>this.hoveredNodeId=s.id)}
               @pointerout=${()=>W(()=>this.hoveredNodeId=null)}
            >
                <circle cx="${r}" cy="${a}" r="${c||l?6:4}"
                        fill="${l?"#fff":"var(--accent-color)"}"
                        stroke="black" stroke-width="1" />

                <!-- Expanded hit area -->
                <circle cx="${r}" cy="${a}" r="12" fill="red" fill-opacity="0" style="pointer-events: all;" />
            </g>
        `})}startCurveBend(i,e){const t=this.config?.segments;if(!t||!t)return;const o=t[e].curve.value||0;this.config?.onInteractionStart&&this.config.onInteractionStart(),new Ft(i,this,{move:(s,r)=>{const a=s.shiftKey?100:50,l=-r[1]/a,c=o+l,f=[...this.config?.segments||[]];f[e]={...f[e],curve:{...f[e].curve,value:c}},f[e].curve.type==="linear"&&(f[e].curve.type="exponential"),this.config?.onEnvelopeChange&&this.config.envelopeNodes&&this.config.onEnvelopeChange(this.config.envelopeNodes,f)},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}})}startSegmentDrag(i,e){const t=this.config?.envelopeNodes;if(!t||!t)return;const n=t[e],o=t[e+1],s=n.x,r=n.y,a=o.x,l=o.y;new Ft(i,this,{move:(c,f)=>{const h=this.getBoundingClientRect();h.width;const d=h.height,[u,p]=this.config?.range||[0,1];let g=0,m=-(f[1]/d)*(p-u);c.shiftKey&&(m*=.1),r+m<u&&(m=u-r),r+m>p&&(m=p-r),l+m<u&&(m=u-l),l+m>p&&(m=p-l);const b=[...t];b[e]={...b[e],x:s+g,y:r+m},b[e+1]={...b[e+1],x:a+g,y:l+m},this.config?.onEnvelopeChange&&this.config.onEnvelopeChange(b,this.config.segments||[])}})}handleNodePointerDown(i,e){if(i.stopPropagation(),i.preventDefault(),W(()=>{this.selectedNodeId=e.id}),!this.config?.interactive||!this.config.envelopeNodes)return;const t=this.config.envelopeNodes.map(l=>({...l})),n=(this.config.segments||[]).map(l=>({...l,curve:{...l.curve}})),o=e.id,s=t.find(l=>l.id===o),r=s.x,a=s.y;this.config.onInteractionStart&&this.config.onInteractionStart(),new Ft(i,this,{move:(l,c)=>{const f=this.getBoundingClientRect(),h=f.width,d=f.height,[u,p]=this.config?.range||[0,1],[g,m]=[u,p];let b=c[0]/h,y=-(c[1]/d)*(m-g);l.shiftKey&&(b*=.1,y*=.1);let x=r+b,v=a+y;if(v=Math.max(g,Math.min(m,v)),l.altKey){x=Math.max(0,Math.min(1,x));const C=t.filter(S=>S.id===o?!0:x>r?!(S.x>r&&S.x<=x):!(S.x>=x&&S.x<r)).map(S=>S.id===o?{...S,x,y:v}:S);C.sort((S,A)=>S.x-A.x);const k=[];for(let S=0;S<C.length-1;S++){const A=C[S],I=t.findIndex(O=>O.id===A.id);I!==-1&&I<n.length?k.push(n[I]):k.push({id:`s-gen-${Math.random()}`,weight:1,curve:{type:"linear",value:0}})}this.config?.onEnvelopeChange&&this.config.onEnvelopeChange(C,k)}else{const C=t.findIndex(D=>D.id===o),k=t[C-1],S=t[C+1],A=k?k.x:0,I=S?S.x:1,O=Math.max(A,Math.min(I,x)),L=t.map(D=>D.id===o?{...D,x:O,y:v}:D);this.config?.onEnvelopeChange&&this.config.onEnvelopeChange(L,n)}},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}})}render(){if(!this.config)return M``;const i=96;if(this.config.mode==="scope"){const s=this.config.autoRange?this.getDisplayRange():(this.config.range?.[1]??1)-(this.config.range?.[0]??0),r=this.config.autoRange?this.getDisplayAnchor():this.config.range?.[0]??0;let a,l;this.config.autoRange?this.isSigned?(a=r-s/2,l=r+s/2):(a=r,l=r+s):(a=this.config.range?.[0]??0,l=this.config.range?.[1]??1);const c=d=>{const u=(d-a)/(l-a);return i-Math.max(0,Math.min(1,u))*i},f=c(0),h=[];if(this.config.showGrid){const d=Math.max(Math.abs(a),Math.abs(l)),u=Math.ceil(Math.log2(d)),p=Math.floor(Math.log2(s))-4;for(let g=p;g<=u;g++){const m=Math.pow(2,g);m<=l&&m>=a&&h.push(c(m)),-m<=l&&-m>=a&&h.push(c(-m))}}return M`
          <svg viewBox="0 0 ${ce} 96" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid-x" width="24" height="96" patternUnits="userSpaceOnUse">
                        <path d="M 0 0 L 0 96" fill="none" class="grid-pattern" />
                    </pattern>
                    <pattern id="hash-pattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--accent-color)" stroke-width="4" opacity="0.1" />
                    </pattern>
                    ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?rt`
                        <clipPath id="clip-left">
                            <rect x="0" y="0" width="${this.config.cursor*ce}" height="96" />
                        </clipPath>
                        <clipPath id="clip-right">
                            <rect x="${this.config.cursor*ce}" y="0" width="${ce-this.config.cursor*ce}" height="96" />
                        </clipPath>
                    `:""}
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-x)" />
                ${h.map(d=>rt`<line class="grid" x1="0" y1="${d}" x2="${ce}" y2="${d}" />`)}
                <line class="zero-line" x1="0" y1="${f}" x2="${ce}" y2="${f}" />

                <!-- Curve Fills -->
                ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?this.pathData?rt`
                    <!-- Left (Solid) -->
                    <path d="${this.pathData} L ${ce} ${i} L 0 ${i} Z"
                          fill="var(--accent-color)" fill-opacity="0.2"
                          clip-path="url(#clip-left)" />

                    <!-- Right (Hashed) -->
                    <path d="${this.pathData} L ${ce} ${i} L 0 ${i} Z"
                          fill="url(#hash-pattern)"
                          clip-path="url(#clip-right)" />
                `:"":this.pathData?rt`
                    <!-- Default Fill if no cursor -->
                    <path d="${this.pathData} L ${ce} ${i} L 0 ${i} Z"
                          fill="var(--accent-color)" fill-opacity="0.1" />
                `:""}

                <!-- Curve Stroke -->
                <path class="curve" d="${this.pathData}" fill="none" stroke="#00ff88" stroke-width="2" vector-effect="non-scaling-stroke" />
          </svg>
        `}const e=this.segmentLayout,t=10,[n,o]=this.config.range||[0,1];return M`
            <svg viewBox="0 0 ${ce} 96" preserveAspectRatio="none"
                @pointerdown=${s=>this.handlePointerDown(s)}
                @pointermove=${s=>this.handlePointerMove(s)}
                @pointerleave=${()=>this.handlePointerLeave()}
                @dblclick=${s=>this.handleDoubleClick(s)}
            >
                <defs>
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" class="grid-pattern" />
                    </pattern>
                    <pattern id="hash-pattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--accent-color)" stroke-width="4" opacity="0.1" />
                    </pattern>
                    ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?rt`
                        <clipPath id="clip-left">
                            <rect x="0" y="0" width="${this.config.cursor*ce}" height="96" />
                        </clipPath>
                        <clipPath id="clip-right">
                            <rect x="${this.config.cursor*ce}" y="0" width="${ce-this.config.cursor*ce}" height="96" />
                        </clipPath>
                    `:""}
                    <linearGradient id="curveGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="var(--accent-color)" stop-opacity="0.2" />
                        <stop offset="100%" stop-color="var(--accent-color)" stop-opacity="0.0" />
                    </linearGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#grid)" />

                <!-- Axis Lines -->
                <line class="axis-line" x1="0" y1="${i/2}" x2="${ce}" y2="${i/2}" />

                <!-- Axis Lines -->
                <line class="axis-line" x1="0" y1="${i/2}" x2="${ce}" y2="${i/2}" />

                <!-- Segments (for non-envelope mode) -->
                ${this.config.envelopeNodes?"":e.map(s=>{const{segment:r,startX:a,endX:l}=s,c=s.index===this.hoveredSegmentIndex,f=s.index===this.hoveredSplitIndex;let h=0,d=!1;return r.curve.type==="exponential"&&(h=(1-(r.curve.value??0))/2*i,d=!0),rt`
                            <!-- Hover Highlight -->
                            ${c&&this.config?.interactive?rt`
                                <rect x="${a}" y="0" width="${l-a}" height="${i}"
                                    fill="var(--accent-color)" fill-opacity="0.05" pointer-events="none" />
                            `:""}

                            <!-- Segment Separator (if not last) -->
                            ${s.index<e.length-1?rt`
                                <line class="split-handle" x1="${l}" y1="0" x2="${l}" y2="${i}"
                                    style="${f?"opacity: 1; stroke-width: 2; stroke: var(--accent-color);":""}" />
                                <!-- Visual target matches resizeThreshold * 2 -->
                                <rect class="split-handle-target" x="${l-t}" y="0" width="${t*2}" height="${i}" />
                            `:""}

                            <!-- Parameter Handle -->
                            ${this.config?.interactive&&d?rt`
                                <g class="parameter-control">
                                    <!-- Vertical Sheer Bar (Fill from bottom) -->
                                    <rect class="parameter-bg" x="${a}" y="${h}" width="${l-a}" height="${i-h}" />

                                    <!-- Horizontal Solid Line -->
                                    <line class="parameter-line" x1="${a}" y1="${h}" x2="${l}" y2="${h}" />
                                </g>
                            `:""}
                        `})}

                <!-- Curve Fills -->
                ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?rt`
                    <!-- Left (Solid) -->
                    <path d="${this.pathData} L ${ce} ${i} L 0 ${i} Z"
                          fill="var(--accent-color)" fill-opacity="0.2"
                          clip-path="url(#clip-left)" />

                    <!-- Right (Hashed) -->
                    <path d="${this.pathData} L ${ce} ${i} L 0 ${i} Z"
                          fill="url(#hash-pattern)"
                          clip-path="url(#clip-right)" />
                `:rt`
                    <!-- Default Fill if no cursor -->
                    <path d="${this.pathData} L ${ce} ${i} L 0 ${i} Z"
                          fill="var(--accent-color)" fill-opacity="0.1" />
                `}

                <!-- Curve Stroke -->
                <path class="curve" d="${this.pathData}" fill="none" />

                <!-- Envelope Nodes (Render ON TOP) -->
                ${this.config.envelopeNodes?this.renderEnvelopeNodes(i,n,o):""}


                <!-- Cursor -->
                ${this.config?.cursor!==void 0&&this.config.cursor>=0&&this.config.cursor<=1?(()=>{const s=this.config.cursor*ce,r=this.evaluateCurve(this.config.cursor),[a,l]=this.config.range||[0,1],c=(r-a)/(l-a),f=i-Math.max(0,Math.min(1,c))*i;return rt`
                        <line x1="${s}" y1="0" x2="${s}" y2="96" stroke="white" stroke-width="1" />
                        <circle cx="${s}" cy="${f}" r="3" fill="white" />
                    `})():""}
            </svg>
        `}evaluateEnvelopeAt(i){if(!this.config||!this.config.envelopeNodes||!this.config.segments)return 0;const{envelopeNodes:e,segments:t}=this.config;for(let n=0;n<e.length-1;n++){const o=e[n],s=e[n+1];if(i>=o.x&&i<=s.x){const r=t[n],a=s.x-o.x;if(a<=1e-6)return o.y;const l=(i-o.x)/a;let c=0;const f=r.curve;switch(f.type){case"exponential":const h=Math.pow(10,-(f.value??0));c=Math.pow(l,h);break;case"linear":c=l;break;case"step":const d=f.value??2;d<=1?c=0:c=Math.floor(l*d)/(d-1),l>=.999&&(c=1);break;case"sin":c=-(Math.cos(Math.PI*l)-1)/2;break;case"quad":c=l*l;break;default:c=l}return o.y+c*(s.y-o.y)}}return 0}handleNodeDoubleClick(i,e){if(!this.config?.interactive||!this.config.envelopeNodes)return;i.stopPropagation(),i.preventDefault();const{envelopeNodes:t}=this.config;if(e.id===t[0].id||e.id===t[t.length-1].id)return;const n=t.findIndex(r=>r.id===e.id);if(n===-1)return;const o=[...t];o.splice(n,1);const s=[...this.config.segments||[]];s.length>=n&&s.splice(n,1),this.config.onEnvelopeChange&&this.config.onEnvelopeChange(o,s)}handleDoubleClick(i){if(i.stopPropagation(),!this.config?.interactive||!this.config.envelopeNodes||!this.config.segments)return;const e=this.getBoundingClientRect(),t=i.clientX-e.left,n=i.clientY-e.top,o=e.width,s=e.height,r=t/o,[a,l]=this.config.range||[0,1],c=a+(s-n)/s*(l-a),f=this.evaluateEnvelopeAt(r),d=10/s*(l-a),{envelopeNodes:u,segments:p}=this.config;let g=-1;for(let A=0;A<u.length-1;A++)if(r>=u[A].x&&r<=u[A+1].x){g=A+1;break}if(g===-1)return;const m=Math.abs(c-f)<d;if(m&&i.altKey){let A=-1;for(let I=0;I<u.length-1;I++)if(r>=u[I].x&&r<=u[I+1].x){A=I;break}if(A!==-1){const I=[...p];I[A]={...I[A],curve:{type:"linear",value:0}},this.config.onEnvelopeChange&&this.config.onEnvelopeChange(u,I);return}}const b=m?f:c,y={id:`n - ${Date.now()} `,x:r,y:b},x=[...u];x.splice(g,0,y);const v=[...p],k={...v[g-1],id:`s - ${Date.now()} -A`},S={id:`s - ${Date.now()} -B`,weight:1,curve:{type:"linear"}};v.splice(g-1,1,k,S),this.config.onEnvelopeChange&&this.config.onEnvelopeChange(x,v)}};tt.styles=[Hp,pe`
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
    `];gt([H({attribute:!1})],tt.prototype,"config",2);gt([H({type:Number})],tt.prototype,"value",2);gt([H({type:Number})],tt.prototype,"tick",2);gt([zi],tt.prototype,"totalWeight",1);gt([zi],tt.prototype,"segmentLayout",1);gt([zi],tt.prototype,"pathData",1);gt([j],tt.prototype,"hoveredSegmentIndex",2);gt([j],tt.prototype,"hoveredSplitIndex",2);gt([j],tt.prototype,"selectedNodeId",2);gt([j],tt.prototype,"hoveredNodeId",2);gt([U],tt.prototype,"handlePointerMove",1);gt([U],tt.prototype,"handlePointerLeave",1);tt=gt([ke("graph-widget")],tt);const Gm=async()=>(i,e)=>{const t=i.config.values||{},n=i.config.mode||t.mode||"D",o=Math.max(.001,t.attack??.1),s=Math.max(.001,t.decay??1),r=Math.max(0,Math.min(1,t.sustain??.7));let a=Math.max(.001,t.release??1);(n==="D"||n==="ADS")&&(a=s);const l=.3;let c=o,f=s,h=r;n==="D"&&(c=0,h=0);const d=c+f+l+a,u=Math.max(1,d),p=c/u,g=f/u,m=l/u,b=a/u;let y=[],x=[];n==="D"?(y=[{id:"peak",x:0,y:1},{id:"end",x:g,y:0}],x=[{id:"decay",weight:1,curve:{type:"linear"}}]):n==="ADS"?(y=[{id:"start",x:0,y:0},{id:"peak",x:p,y:1},{id:"sustain",x:p+g,y:h},{id:"release",x:p+g+m,y:h},{id:"end",x:p+g+m+b,y:0}],x=[{id:"attack",weight:1,curve:{type:"linear"}},{id:"decay",weight:1,curve:{type:"linear"}},{id:"hold",weight:1,curve:{type:"linear"}},{id:"release",weight:1,curve:{type:"linear"}}]):(y=[{id:"start",x:0,y:0},{id:"peak",x:p,y:1},{id:"sustain",x:p+g,y:h},{id:"release",x:p+g+m,y:h},{id:"end",x:p+g+m+b,y:0}],x=[{id:"attack",weight:1,curve:{type:"linear"}},{id:"decay",weight:1,curve:{type:"linear"}},{id:"hold",weight:1,curve:{type:"linear"}},{id:"release",weight:1,curve:{type:"linear"}}]);const v={mode:"curve",domain:[0,1],range:[0,1],envelopeNodes:y,segments:x,interactive:!0,onEnvelopeChange:(k,S)=>{k.sort((O,L)=>O.x-L.x);const A={},I=(O,L)=>(L.x-O.x)*u;if(n==="D"){const O=I(k[0],k[1]);A.decay=parseFloat(Math.max(.001,O).toFixed(3))}else if(n==="ADS"){const O=I(k[0],k[1]),L=I(k[1],k[2]),D=k[2].y;A.attack=parseFloat(Math.max(.001,O).toFixed(3)),A.decay=parseFloat(Math.max(.001,L).toFixed(3)),A.sustain=parseFloat(D.toFixed(3))}else{const O=I(k[0],k[1]),L=I(k[1],k[2]),D=I(k[3],k[4]),F=k[2].y;A.attack=parseFloat(Math.max(.001,O).toFixed(3)),A.decay=parseFloat(Math.max(.001,L).toFixed(3)),A.sustain=parseFloat(F.toFixed(3)),A.release=parseFloat(Math.max(.001,D).toFixed(3))}V.setNodeConfig(i.id,{...i.config.values,...A})}},C=xe.uiStates.get(i.id);if(C&&typeof C.phase=="number"){const{phase:k,time:S,value:A}=C;let I=0;n==="D"?A>0?v.cursor=g*(1-A):k===0?v.cursor=void 0:v.cursor=g:(k===1?I=S:k===2?I=c+S:k===3?I=c+f+S%l:k===4?I=c+f+l+S:I=-1,I>=0?v.cursor=Math.min(1,I/u):v.cursor=void 0)}return M`<graph-widget .config=${v} .value=${void 0} style="width: 100%; height: 100%; min-height: 96px;"></graph-widget>`};T({...Ir,ui:{...Ir.ui,body:Gm,getBodyHeight:async()=>i=>120}});T({...Tr,ui:{...Tr.ui,body:()=>Me(()=>import("./nodes.ui-C4JwC42u.js"),__vite__mapDeps([6,1])).then(i=>i.MidiTriggerBodyRenderer),getBodyHeight:()=>Me(()=>import("./nodes.ui-C4JwC42u.js"),__vite__mapDeps([6,1])).then(i=>i.MidiTriggerBodyHeight)}});function Ym(){const i=Q.getNodeType("nicepattern.magneto");i&&(i.ui={...i.ui||{},body:()=>Me(()=>import("./magneto-editor-Bv5dVaBT.js"),__vite__mapDeps([7,1])).then(t=>t.MagnetoEditorRenderer),getBodyHeight:()=>Promise.resolve(()=>272)});const e=Q.getNodeType("nicepattern.orthomod");e&&(e.ui={...e.ui||{},body:()=>Me(()=>import("./orthomod-editor-DTOO9nkv.js"),__vite__mapDeps([8,1])).then(t=>t.OrthomodEditorRenderer),getBodyHeight:()=>Promise.resolve(()=>260)})}Ym();function Km(){const i=Q.getNodeType("seq.sequencer");i&&(i.ui={...i.ui||{},body:()=>Me(()=>import("./sequencer-editor-7TyDEX8C.js"),__vite__mapDeps([9,1])).then(e=>e.SequencerEditorRenderer),getBodyHeight:()=>Promise.resolve(()=>2*Kt)})}Km();var Xm=Object.getOwnPropertyDescriptor,Jm=(i,e,t,n)=>{for(var o=n>1?void 0:n?Xm(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=r(o)||o);return o};let Lr=class extends it{render(){return xe.beatSyncManager.isMicActive?M`
      <div class="bpm-display" title="Detected BPM">
          ${xe.beatSyncManager.bestBpm.toFixed(1)}
      </div>
    `:null}};Lr.styles=pe`
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
  `;Lr=Jm([ke("bpm-display")],Lr);var Qm=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,Ea=(i,e,t,n)=>{for(var o=n>1?void 0:n?Zm(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Qm(e,t,o),o};let Xi=class extends it{constructor(){super(...arguments),this.activeTab=null,this.beatSyncDisposer=null}firstUpdated(){this.beatSyncDisposer=qt(()=>({beat:xe.beatSyncManager.displayQuantizedBeat,active:xe.beatSyncManager.isMicActive}),({beat:i,active:e})=>{this.beatSyncIcon&&(e?this.beatSyncIcon.style.transform=`rotate(${i*90}deg)`:this.beatSyncIcon.style.transform="none")},{fireImmediately:!0})}disconnectedCallback(){super.disconnectedCallback(),this.beatSyncDisposer&&(this.beatSyncDisposer(),this.beatSyncDisposer=null)}render(){return M`
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
        class="icon ${this.activeTab==="beatsync"?"active":""} ${xe.beatSyncManager.isMicActive?"running":""}"
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
    `}switchTab(i){this.dispatchEvent(new CustomEvent("switch-tab",{detail:{tab:i},bubbles:!0,composed:!0}))}};Xi.styles=[Et,pe`
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
  `];Ea([H({type:String})],Xi.prototype,"activeTab",2);Ea([Ot("#beatsync-icon i")],Xi.prototype,"beatSyncIcon",2);Xi=Ea([ke("app-sidebar")],Xi);var eb=Object.defineProperty,tb=Object.getOwnPropertyDescriptor,wh=(i,e,t,n)=>{for(var o=n>1?void 0:n?tb(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&eb(e,t,o),o};let ns=class extends Sn{constructor(){super(...arguments),this.title=""}render(){return M`
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
    `}};ns.styles=[...Et,pe`
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
    `];wh([H({type:String})],ns.prototype,"title",2);ns=wh([ke("ui-panel")],ns);var nb=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,Na=(i,e,t,n)=>{for(var o=n>1?void 0:n?ib(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&nb(e,t,o),o};let Ji=class extends it{constructor(){super(...arguments),this.isCreatingGraph=!1,this.newGraphName=""}render(){const{files:i,currentGraphId:e}=Ln;return M`
      <ui-panel title="Workspace">
        <ui-button slot="header-actions" icon="la-sync" @click=${()=>Ln.refreshFiles()} title="Refresh"></ui-button>

        <div class="ui-list">
          ${i.map(t=>M`
            <div
              class="ui-list-item ${t.name===e?"selected":""}"
              @click=${()=>Ln.openFile(t.name)}
            >
              <div style="display: flex; align-items: center; gap: 8px;">
                <i class="la la-file file-icon"></i>
                <span>${t.name}</span>
              </div>
            </div>
          `)}
        </div>

        <div slot="actions" style="display: flex; gap: 5px; width: 100%;">
          ${this.isCreatingGraph?M`
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
          `:M`
            <ui-button icon="la-folder-open" @click=${()=>Ln.openFolder()}>Open Folder</ui-button>
            <ui-button icon="la-plus" @click=${()=>{this.isCreatingGraph=!0,this.newGraphName=""}}>New Graph</ui-button>
          `}
        </div>
      </ui-panel>
    `}async confirmNewGraph(){if(this.newGraphName)try{const i=this.newGraphName.replace(/\./g,"/");await Ln.createNewGraph(i),this.isCreatingGraph=!1,this.newGraphName=""}catch(i){alert("Failed to create graph: "+i)}}cancelNewGraph(){this.isCreatingGraph=!1,this.newGraphName=""}handleNewGraphKeydown(i){i.key==="Enter"?this.confirmNewGraph():i.key==="Escape"&&this.cancelNewGraph(),i.stopPropagation()}};Ji.styles=[...Et,pe`
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
  `];Na([Xe()],Ji.prototype,"isCreatingGraph",2);Na([Xe()],Ji.prototype,"newGraphName",2);Ji=Na([ke("workspace-panel")],Ji);var ob=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,xh=(i,e,t,n)=>{for(var o=n>1?void 0:n?sb(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&ob(e,t,o),o};let is=class extends it{constructor(){super(...arguments),this.target=null,this.activeSubscriptions=new Set,this.handleParameterUpdate=i=>{}}updated(i){i.has("target")&&this.updateSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this.clearSubscriptions()}clearSubscriptions(){for(const i of this.activeSubscriptions)lt.unsubscribe(i,this);this.activeSubscriptions.clear()}updateSubscriptions(){if(this.clearSubscriptions(),!this.target)return;const i=[];this.collectParameters(this.target,i);for(const e of i)lt.subscribe(e.path,this,this.handleParameterUpdate),this.activeSubscriptions.add(e.path)}collectParameters(i,e){if(i instanceof mn){e.push(i);return}i.params&&Array.isArray(i.params)&&i.params.forEach(t=>this.collectParameters(t,e)),i.effects&&Array.isArray(i.effects)&&i.effects.forEach(t=>this.collectParameters(t,e))}render(){return this.target?this.target instanceof pf?this.renderComposition(this.target):this.target instanceof uf?this.renderLayer(this.target):this.target instanceof df?this.renderClip(this.target):this.target instanceof Ms?this.renderEffect(this.target):M``:M``}renderComposition(i){return M`
      <div class="inspector-section">
        <h3>Composition</h3>
        <div class="parameters">
          ${i.params.map(e=>this.renderParameter(e))}
        </div>
      </div>
      ${this.renderEffects(i.effects)}
    `}renderLayer(i){return M`
      <div class="inspector-section">
        <h3>${i.name}</h3>
        <div class="parameters">
          ${i.params.map(e=>this.renderParameter(e))}
        </div>
      </div>
      ${this.renderEffects(i.effects)}
    `}renderClip(i){return M`
      <div class="inspector-section">
        <h3>${i.name}</h3>
        ${i.thumbnail?M`<img class="thumbnail" src="http://127.0.0.1:8080${i.thumbnail}">`:""}
        <div class="parameters">
          ${i.params.map(e=>this.renderParameter(e))}
        </div>
      </div>
      ${this.renderEffects(i.effects)}
    `}renderEffect(i){return M`
      <div class="inspector-section">
        <h3>${i.name}</h3>
        <div class="parameters">
          ${i.params.map(e=>this.renderParameter(e))}
        </div>
      </div>
    `}renderEffects(i){return i.length===0?"":M`
      <div class="effects-section">
        ${i.map(e=>M`
          <details open>
            <summary>${e.name}</summary>
            <div class="parameters">
              ${e.params.map(t=>this.renderParameter(t))}
            </div>
          </details>
        `)}
      </div>
    `}renderParameter(i){let e=M`<span class="value">${i.value}</span>`;switch(i.type){case"ParamRange":e=this.renderRange(i);break;case"ParamBoolean":e=this.renderBoolean(i);break;case"ParamChoice":e=this.renderChoice(i);break;case"ParamColor":e=this.renderColor(i);break;case"ParamEvent":e=this.renderEvent(i);break;case"ParamString":case"ParamText":e=this.renderString(i);break}return M`
      <div
        class="parameter-row"
        draggable="true"
        @dragstart=${t=>this.handleDragStart(t,i)}
        @dblclick=${t=>this.handleDoubleClick(t,i)}
      >
        <span class="label" title="${i.path}">${i.name}</span>
        ${e}
      </div>
    `}handleDoubleClick(i,e){const{x:t,y:n}=P.getViewportCenterGridCoordinates(),o=P.findFreeSpace(t,n);V.createNode("resolume.output",o.x,o.y,{path:e.path})}renderRange(i){const e=typeof i.value=="number"?Math.min(100,Math.max(0,i.value*100)):0;return M`
      <div class="range-control">
        <div class="range-track">
          <div class="range-fill" style="width: ${e}%"></div>
        </div>
        <span class="range-value">${Number(i.value).toFixed(2)}</span>
      </div>
    `}renderBoolean(i){return M`
      <div class="boolean-control ${i.value?"active":""}">
        ${i.value?"On":"Off"}
      </div>
    `}renderChoice(i){return M`
      <div class="choice-control">
        ${i.value} <span class="dropdown-arrow">▼</span>
      </div>
    `}renderColor(i){return M`
      <div class="color-control">
        <div class="color-preview" style="background-color: ${i.value}"></div>
        <span class="color-value">${i.value}</span>
      </div>
    `}renderEvent(i){return M`
      <button class="event-button">Trigger</button>
    `}renderString(i){return M`<span class="value string-value">${i.value}</span>`}handleDragStart(i,e){i.dataTransfer&&(i.dataTransfer.setData("application/json",JSON.stringify({type:"resolume:parameter",path:e.path,name:e.name})),i.dataTransfer.effectAllowed="copy")}};is.styles=[pe`
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
    `];xh([H({attribute:!1})],is.prototype,"target",2);is=xh([ke("resolume-inspector")],is);class Ys{constructor(e){this.target=e}get path(){return this.target.path}renderInspectorContent(){return M`<resolume-inspector .target=${this.target}></resolume-inspector>`}}var rb=Object.getOwnPropertyDescriptor,ab=(i,e,t,n)=>{for(var o=n>1?void 0:n?rb(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=r(o)||o);return o};let Or=class extends it{render(){return M`
      <div class="tab-header">I/O Devices</div>
      <div class="container">
        <div class="section">
          <div class="section-header">Resolume Arena</div>
          <div class="resolume-status">
            <div class="status ${lt.isConnected?"connected":""}"></div>
            <span>${lt.isConnected?"Connected":"Disconnected"}</span>
            <ui-button
              @click=${this.toggleResolume}
              ?disabled=${lt.isConnected}
              icon="la-plug"
            >
              ${lt.isConnected?"Connected":"Connect"}
            </ui-button>
          </div>
          ${lt.isConnected?this.renderResolumeContent():""}
        </div>

        <div class="section midi-section">
          <div class="section-header">MIDI Devices</div>
          ${this.renderMidiSection()}
        </div>
      </div>
    `}toggleResolume(){lt.isConnected?(lt.disconnect(),xe.sendResolumeControl("disconnect"),P.setEnableResolumeIO(!1)):(lt.connect().then(()=>{P.setEnableResolumeIO(lt.isConnected)}),xe.sendResolumeControl("connect"))}renderResolumeContent(){const i=lt.state,e=P.observableState.selection;let t;for(const n of i.layers)if(e.has(n.path)){t=n;break}if(!t)for(const n of i.layers){for(const o of n.clips)if(e.has(o.path)){t=n;break}if(t)break}return M`
      <div class="resolume-container">
        <div class="ui-list">
          <div
            class="ui-list-item ${e.has(i.path)?"selected":""}"
            @click=${()=>P.defineSelectable(new Ys(i)).select()}
          >
            <strong>Composition</strong>
          </div>

          ${i.layers.map(n=>{const o=i.layers.indexOf(n)+1,s=n.name.replace("#",o.toString());return M`
              <div
                class="ui-list-item ${e.has(n.path)?"selected":""}"
                @click=${()=>P.defineSelectable(new Ys(n)).select()}
              >
                ${s}
              </div>
            `})}
        </div>

        ${t?M`
          <div class="clips-grid">
            ${t.clips.map(n=>this.renderClipCard(n))}
          </div>
        `:""}
      </div>
    `}renderClipCard(i){const e=P.observableState.selection.has(i.path),t=i.thumbnail?`http://127.0.0.1:8080${i.thumbnail}`:"";return M`
      <div
        class="clip-card ${e?"selected":""}"
        @click=${()=>P.defineSelectable(new Ys(i)).select()}
      >
        <div class="clip-thumb" style="background-image: url('${t}')"></div>
        <div class="clip-name">${i.name}</div>
      </div>
    `}connectedCallback(){super.connectedCallback(),ft.ensureInitialized()}renderMidiSection(){const{state:i}=ft,e=new Map;i.recentEvents.forEach(n=>{let o=n.type,s=0;n.type==="note_on"||n.type==="note_off"?(o="note",s=n.note):n.type==="cc"&&(o="cc",s=n.cc);const r=`${n.deviceId}-${n.channel}-${o}-${s}`;e.has(r)&&e.delete(r),e.set(r,n)});const t=Array.from(e.values()).reverse();return M`
      <div class="midi-devices">
        ${Array.from(i.devices.values()).map(n=>this.renderDevice(n))}
      </div>
      <div class="midi-events">
        ${t.map(n=>this.renderMidiEvent(n))}
      </div>
    `}renderDevice(i){const e=ft.state.selectedDeviceIds.has(i.id);return M`
      <div
        class="chip ${e?"selected":""} ${i.state==="disconnected"?"disconnected":""}"
        @click=${()=>ft.state.toggleDeviceSelection(i.id)}
      >
        ${i.name}
      </div>
    `}renderMidiEvent(i){const e=i.type==="cc"?`CC ${i.cc}`:`Note ${i.note}`,t=i.type==="note_off"?"Off":i.type==="note_on"?"On":i.value;return M`
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
    `}handleMidiDragStart(i,e){if(!i.dataTransfer)return;let t="",n={};e.type==="cc"?(t="midi_cc",n={channel:e.channel,cc:e.cc,deviceId:e.deviceId}):(t="midi_note",n={channel:e.channel,note:e.note,deviceId:e.deviceId}),i.dataTransfer.setData("application/json",JSON.stringify({type:t,config:n})),i.dataTransfer.effectAllowed="copy"}};Or.styles=[...Et,pe`
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
        padding: 0 15px;
      }

      .event-card {
        padding: 8px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: grab;
        border: 1px solid var(--input-bg);
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
    `];Or=ab([ke("io-tab")],Or);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sh={ATTRIBUTE:1,CHILD:2},kh=i=>(...e)=>({_$litDirective$:i,values:e});let Ch=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=kh(class extends Ch{constructor(i){var e;if(super(i),i.type!==Sh.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter((e=>i[e])).join(" ")+" "}update(i,[e]){var t,n;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((s=>s!==""))));for(const s in e)e[s]&&!(!((t=this.nt)===null||t===void 0)&&t.has(s))&&this.it.add(s);return this.render(e)}const o=i.element.classList;this.it.forEach((s=>{s in e||(o.remove(s),this.it.delete(s))}));for(const s in e){const r=!!e[s];r===this.it.has(s)||!((n=this.nt)===null||n===void 0)&&n.has(s)||(r?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return Zc}});function Mh(i){return i?i.kind==="record"&&i.hint||i.kind==="array"&&i.hint?i.hint:i.kind==="atomic"?i.type:i.kind==="array"?`${Mh(i.element)}[]`:i.kind==="record"?"record":i.kind:"unknown"}function Er(i,e,t){return i==null?M`<span class=${It({chip:!0,code:!0,...t?.extraClasses})}>null</span>`:e?.kind==="record"&&e.hint==="midi"?M`<span class=${It({chip:!0,code:!0,midi:!0,...t?.extraClasses})}>${Ah(i)}</span>`:e?.kind==="array"&&e.hint==="midi-stream"?lb(i,t):e?.kind==="array"&&e.hint==="step-sequence"?cb(i,t):typeof i=="number"?M`<span class=${It({chip:!0,code:!0,...t?.extraClasses})}>${i.toFixed(4)}</span>`:typeof i=="string"?M`<span class=${It({chip:!0,code:!0,...t?.extraClasses})}>"${i}"</span>`:Array.isArray(i)?M`<span class=${It({chip:!0,code:!0,vector:!0,...t?.extraClasses})}>vector(${i.length})</span>`:typeof i=="object"?M`<span class=${It({chip:!0,code:!0,struct:!0,...t?.extraClasses})}>struct</span>`:M`<span class=${It({chip:!0,code:!0,...t?.extraClasses})}>${String(i)}</span>`}function Ra(i){if(i&&typeof i=="object"&&"fields"in i){const e={};for(const[t,n]of Object.entries(i.fields))e[t]=Ra(n);return e}return i}function Ah(i){const e=Ra(i);if(e.type==="cc")return`cc${e.cc}:${(e.value/127).toFixed(2)}`;if(e.type==="note_on")return`${Mi(e.note)}:on`;if(e.type==="note_off")return`${Mi(e.note)}:off`;const t=e.status&240;return t===176?`cc${e.data1}:${(e.data2/127).toFixed(2)}`:t===144?e.data2>0?`${Mi(e.data1)}:on`:`${Mi(e.data1)}:off`:t===128?`${Mi(e.data1)}:off`:`midi(${e.type||(t?t.toString(16):"?")})`}function Mi(i){const e=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"],t=Math.floor(i/12)-1;return`${e[i%12]}${t}`}function lb(i,e){if(!i||i.length===0)return M`<span class=${It({chip:!0,code:!0,"midi-stream":!0,empty:!0,...e?.extraClasses})}>[]</span>`;const t=i.slice(-3).map(Ah).join(", ");return M`<span class=${It({chip:!0,code:!0,"midi-stream":!0,...e?.extraClasses})}>[${t}]</span>`}function cb(i,e){if(!i||!Array.isArray(i))return M`<span class=${It({chip:!0,...e?.extraClasses})}>invalid seq</span>`;const t=i.map((n,o)=>{const s=Ra(n),r=s.noteIndex!==null&&s.noteIndex!==void 0,a=s.velocity??0,l=s.hold,c=r?Math.max(20,a*100):100;return M`
      <div class="step ${r?"active":""} ${l?"hold":""}"
           style="
             height: ${r?c:20}%;
             background-color: ${r?"var(--accent-color)":"rgba(255, 255, 255, 0.1)"};
             opacity: ${r?1:.5};
           "
           title="Step ${o}: ${r?`Note ${s.noteIndex}, Vel ${a.toFixed(2)}`:"Rest"}"
      ></div>
    `});return M`
    <div class="step-seq-viz">
      ${t}
    </div>
  `}var fb=Object.getOwnPropertyDescriptor,hb=(i,e,t,n)=>{for(var o=n>1?void 0:n?fb(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=r(o)||o);return o};let Nr=class extends it{constructor(){super(...arguments),this.midiCache=new Map}render(){const i=xe.stats,e=Array.from(xe.outputs.entries());return M`
      <div class="header" style="display: flex; justify-content: space-between; align-items: center;">
        <span>Debug Output</span>
        <label style="display: flex; align-items: center; cursor: pointer; font-size: 10px; text-transform: none; color: #888; user-select: none;">
          <input
            type="checkbox"
            .checked=${P.observableState.localSettings.showDebugValues}
            @change=${t=>P.setShowDebugValues(t.target.checked)}
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
    `}renderNodeOutput(i,e){let t=i,n="";i.endsWith("-virtual-value")&&(t=i.replace("-virtual-value",""),n=" (Virtual)");const o=V.getState().graph.inner.nodes[t],s=o?Q.get(o.config.typeId):void 0;s&&s.kind==="primitive"&&Q.get(o.config.typeId);const r=o?Q.getNodeType(o.config.typeId):void 0,a=o?o.config.name||o.config.typeId:i,l=o?o.config.typeId:"Unknown";return M`
      <div class="node-item">
        <div class="node-header">
          <span class="node-name">${a}${n}</span>
          <span class="node-type">${l}</span>
        </div>
        ${this.renderValues(e,r,t)}
      </div>
    `}renderValues(i,e,t){if(!i)return M`<div class="value-row"><span class="chip code">null</span></div>`;const n=[];if(i.fields)for(const[o,s]of Object.entries(i.fields)){let r;if(t){const c=P.observableState.inferredNodeTypes.get(t);c&&c.outputs&&c.outputs.kind==="record"&&c.outputs.fields&&o in c.outputs.fields&&(r=c.outputs.fields[o])}if(!r&&e&&e.outputs){const c=e.outputs.find(f=>f.name===o);c&&(r=c.type)}let a=s,l=!1;if(r?.kind==="array"&&r.hint==="midi-stream"&&t){const c=`${t}:${o}`,f=s;if(f&&f.length>0)this.midiCache.set(c,f);else{const h=this.midiCache.get(c);h&&(a=h,l=!0)}}n.push(M`
          <div class="value-row">
            <span class="field-name">${o}:</span>
            <span class="type-hint">${Mh(r)}</span>
            ${Er(a,r,{extraClasses:{cached:l}})}
          </div>
        `)}return i.untagged&&Array.isArray(i.untagged)&&i.untagged.forEach((o,s)=>{n.push(M`
          <div class="value-row">
            <span class="field-name">[${s}]:</span>
            ${Er(o)}
          </div>
        `)}),n.length===0?M`<div class="value-row" style="color: #666; font-style: italic;">No output</div>`:n}};Nr.styles=[Et,pe`
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
    `];Nr=hb([ke("debug-tab")],Nr);function Ai(i,e,t){return i*(1-t)+e*t}function vo(i){return Math.max(0,Math.min(1,i))}const wo={lcenter:.4,lrange:.1,scenter:.8,srange:.1};function os(i,e){const t=wo.lcenter,n=wo.lrange,o=wo.scenter,s=wo.srange,r=db(i)*22695477+1|0,a=(r>>0&255|0)/255,l=(r>>8&255|0)/255,c=(r>>16&255|0)/255,f=1/6,h=vo(1-Math.abs(a-f)*4),d=2/3,u=vo(1-Math.abs(a-d)*8);let p=a,g=vo(Ai(o-s,o+s,l)),m=vo(Ai(t-n,t+n,c));return m=Ai(m,m*m,h*.25),m=Ai(m,Math.sqrt(m),u*.25),g=Ai(g,Math.sqrt(g),h),`hsl(${(p*360).toFixed(0)} ${(g*100).toFixed(0)} ${(m*100).toFixed(0)})`}function db(i){let e=0;for(let t=0,n=i.length;t<n;t++){let o=i.charCodeAt(t);e=(e<<5)-e+o,e|=0}return e}function ub(i,e){if(i===void 0)return e;const t=parseFloat(i);return Number.isNaN(t)?e:t}function pb(i){const e=i.composedPath();for(const t of e){const n=t;if(n.tagName&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable||n.tagName==="MONACO-EDITOR-WRAPPER"))return!0}return!1}let Rr=[],Ih=[];(()=>{let i="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(e=>e?parseInt(e,36):1);for(let e=0,t=0;e<i.length;e++)(e%2?Ih:Rr).push(t=t+i[e])})();function gb(i){if(i<768)return!1;for(let e=0,t=Rr.length;;){let n=e+t>>1;if(i<Rr[n])t=n;else if(i>=Ih[n])e=n+1;else return!0;if(e==t)return!1}}function Pl(i){return i>=127462&&i<=127487}const Ll=8205;function mb(i,e,t=!0,n=!0){return(t?Th:bb)(i,e,n)}function Th(i,e,t){if(e==i.length)return e;e&&Dh(i.charCodeAt(e))&&Ph(i.charCodeAt(e-1))&&e--;let n=Ks(i,e);for(e+=Ol(n);e<i.length;){let o=Ks(i,e);if(n==Ll||o==Ll||t&&gb(o))e+=Ol(o),n=o;else if(Pl(o)){let s=0,r=e-2;for(;r>=0&&Pl(Ks(i,r));)s++,r-=2;if(s%2==0)break;e+=2}else break}return e}function bb(i,e,t){for(;e>0;){let n=Th(i,e-2,t);if(n<e)return n;e--}return 0}function Ks(i,e){let t=i.charCodeAt(e);if(!Ph(t)||e+1==i.length)return t;let n=i.charCodeAt(e+1);return Dh(n)?(t-55296<<10)+(n-56320)+65536:t}function Dh(i){return i>=56320&&i<57344}function Ph(i){return i>=55296&&i<56320}function Ol(i){return i<65536?1:2}class ee{lineAt(e){if(e<0||e>this.length)throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,n){[e,t]=fi(this,e,t);let o=[];return this.decompose(0,e,o,2),n.length&&n.decompose(0,n.length,o,3),this.decompose(t,this.length,o,1),Vt.from(o,this.length-(t-e)+n.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=fi(this,e,t);let n=[];return this.decompose(e,t,n,0),Vt.from(n,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),n=this.length-this.scanIdentical(e,-1),o=new Bi(this),s=new Bi(e);for(let r=t,a=t;;){if(o.next(r),s.next(r),r=0,o.lineBreak!=s.lineBreak||o.done!=s.done||o.value!=s.value)return!1;if(a+=o.value.length,o.done||a>=n)return!0}}iter(e=1){return new Bi(this,e)}iterRange(e,t=this.length){return new Lh(this,e,t)}iterLines(e,t){let n;if(e==null)n=this.iter();else{t==null&&(t=this.lines+1);let o=this.line(e).from;n=this.iterRange(o,Math.max(o,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new Oh(n)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(e){if(e.length==0)throw new RangeError("A document must have at least one line");return e.length==1&&!e[0]?ee.empty:e.length<=32?new Ie(e):Vt.from(Ie.split(e,[]))}}class Ie extends ee{constructor(e,t=yb(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,n,o){for(let s=0;;s++){let r=this.text[s],a=o+r.length;if((t?n:a)>=e)return new vb(o,a,n,r);o=a+1,n++}}decompose(e,t,n,o){let s=e<=0&&t>=this.length?this:new Ie(El(this.text,e,t),Math.min(t,this.length)-Math.max(0,e));if(o&1){let r=n.pop(),a=qo(s.text,r.text.slice(),0,s.length);if(a.length<=32)n.push(new Ie(a,r.length+s.length));else{let l=a.length>>1;n.push(new Ie(a.slice(0,l)),new Ie(a.slice(l)))}}else n.push(s)}replace(e,t,n){if(!(n instanceof Ie))return super.replace(e,t,n);[e,t]=fi(this,e,t);let o=qo(this.text,qo(n.text,El(this.text,0,e)),t),s=this.length+n.length-(t-e);return o.length<=32?new Ie(o,s):Vt.from(Ie.split(o,[]),s)}sliceString(e,t=this.length,n=`
`){[e,t]=fi(this,e,t);let o="";for(let s=0,r=0;s<=t&&r<this.text.length;r++){let a=this.text[r],l=s+a.length;s>e&&r&&(o+=n),e<l&&t>s&&(o+=a.slice(Math.max(0,e-s),t-s)),s=l+1}return o}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(e,t){let n=[],o=-1;for(let s of e)n.push(s),o+=s.length+1,n.length==32&&(t.push(new Ie(n,o)),n=[],o=-1);return o>-1&&t.push(new Ie(n,o)),t}}class Vt extends ee{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let n of e)this.lines+=n.lines}lineInner(e,t,n,o){for(let s=0;;s++){let r=this.children[s],a=o+r.length,l=n+r.lines-1;if((t?l:a)>=e)return r.lineInner(e,t,n,o);o=a+1,n=l+1}}decompose(e,t,n,o){for(let s=0,r=0;r<=t&&s<this.children.length;s++){let a=this.children[s],l=r+a.length;if(e<=l&&t>=r){let c=o&((r<=e?1:0)|(l>=t?2:0));r>=e&&l<=t&&!c?n.push(a):a.decompose(e-r,t-r,n,c)}r=l+1}}replace(e,t,n){if([e,t]=fi(this,e,t),n.lines<this.lines)for(let o=0,s=0;o<this.children.length;o++){let r=this.children[o],a=s+r.length;if(e>=s&&t<=a){let l=r.replace(e-s,t-s,n),c=this.lines-r.lines+l.lines;if(l.lines<c>>4&&l.lines>c>>6){let f=this.children.slice();return f[o]=l,new Vt(f,this.length-(t-e)+n.length)}return super.replace(s,a,l)}s=a+1}return super.replace(e,t,n)}sliceString(e,t=this.length,n=`
`){[e,t]=fi(this,e,t);let o="";for(let s=0,r=0;s<this.children.length&&r<=t;s++){let a=this.children[s],l=r+a.length;r>e&&s&&(o+=n),e<l&&t>r&&(o+=a.sliceString(e-r,t-r,n)),r=l+1}return o}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(e,t){if(!(e instanceof Vt))return 0;let n=0,[o,s,r,a]=t>0?[0,0,this.children.length,e.children.length]:[this.children.length-1,e.children.length-1,-1,-1];for(;;o+=t,s+=t){if(o==r||s==a)return n;let l=this.children[o],c=e.children[s];if(l!=c)return n+l.scanIdentical(c,t);n+=l.length+1}}static from(e,t=e.reduce((n,o)=>n+o.length+1,-1)){let n=0;for(let u of e)n+=u.lines;if(n<32){let u=[];for(let p of e)p.flatten(u);return new Ie(u,t)}let o=Math.max(32,n>>5),s=o<<1,r=o>>1,a=[],l=0,c=-1,f=[];function h(u){let p;if(u.lines>s&&u instanceof Vt)for(let g of u.children)h(g);else u.lines>r&&(l>r||!l)?(d(),a.push(u)):u instanceof Ie&&l&&(p=f[f.length-1])instanceof Ie&&u.lines+p.lines<=32?(l+=u.lines,c+=u.length+1,f[f.length-1]=new Ie(p.text.concat(u.text),p.length+1+u.length)):(l+u.lines>o&&d(),l+=u.lines,c+=u.length+1,f.push(u))}function d(){l!=0&&(a.push(f.length==1?f[0]:Vt.from(f,c)),c=-1,l=f.length=0)}for(let u of e)h(u);return d(),a.length==1?a[0]:new Vt(a,t)}}ee.empty=new Ie([""],0);function yb(i){let e=-1;for(let t of i)e+=t.length+1;return e}function qo(i,e,t=0,n=1e9){for(let o=0,s=0,r=!0;s<i.length&&o<=n;s++){let a=i[s],l=o+a.length;l>=t&&(l>n&&(a=a.slice(0,n-o)),o<t&&(a=a.slice(t-o)),r?(e[e.length-1]+=a,r=!1):e.push(a)),o=l+1}return e}function El(i,e,t){return qo(i,[""],e,t)}class Bi{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value="",this.nodes=[e],this.offsets=[t>0?1:(e instanceof Ie?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let n=this.nodes.length-1,o=this.nodes[n],s=this.offsets[n],r=s>>1,a=o instanceof Ie?o.text.length:o.children.length;if(r==(t>0?a:0)){if(n==0)return this.done=!0,this.value="",this;t>0&&this.offsets[n-1]++,this.nodes.pop(),this.offsets.pop()}else if((s&1)==(t>0?0:1)){if(this.offsets[n]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(o instanceof Ie){let l=o.text[r+(t<0?-1:0)];if(this.offsets[n]+=t,l.length>Math.max(0,e))return this.value=e==0?l:t>0?l.slice(e):l.slice(0,l.length-e),this;e-=l.length}else{let l=o.children[r+(t<0?-1:0)];e>l.length?(e-=l.length,this.offsets[n]+=t):(t<0&&this.offsets[n]--,this.nodes.push(l),this.offsets.push(t>0?1:(l instanceof Ie?l.text.length:l.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}}class Lh{constructor(e,t,n){this.value="",this.done=!1,this.cursor=new Bi(e,t>n?-1:1),this.pos=t>n?e.length:0,this.from=Math.min(t,n),this.to=Math.max(t,n)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value="",this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let n=t<0?this.pos-this.from:this.to-this.pos;e>n&&(e=n),n-=e;let{value:o}=this.cursor.next(e);return this.pos+=(o.length+e)*t,this.value=o.length<=n?o:t<0?o.slice(o.length-n):o.slice(0,n),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=""}}class Oh{constructor(e){this.inner=e,this.afterBreak=!0,this.value="",this.done=!1}next(e=0){let{done:t,lineBreak:n,value:o}=this.inner.next(e);return t&&this.afterBreak?(this.value="",this.afterBreak=!1):t?(this.done=!0,this.value=""):n?this.afterBreak?this.value="":(this.afterBreak=!0,this.next()):(this.value=o,this.afterBreak=!1),this}get lineBreak(){return!1}}typeof Symbol<"u"&&(ee.prototype[Symbol.iterator]=function(){return this.iter()},Bi.prototype[Symbol.iterator]=Lh.prototype[Symbol.iterator]=Oh.prototype[Symbol.iterator]=function(){return this});class vb{constructor(e,t,n,o){this.from=e,this.to=t,this.number=n,this.text=o}get length(){return this.to-this.from}}function fi(i,e,t){return e=Math.max(0,Math.min(i.length,e)),[e,Math.max(e,Math.min(i.length,t))]}function Ze(i,e,t=!0,n=!0){return mb(i,e,t,n)}function wb(i){return i>=56320&&i<57344}function xb(i){return i>=55296&&i<56320}function Dn(i,e){let t=i.charCodeAt(e);if(!xb(t)||e+1==i.length)return t;let n=i.charCodeAt(e+1);return wb(n)?(t-55296<<10)+(n-56320)+65536:t}function Sb(i){return i<=65535?String.fromCharCode(i):(i-=65536,String.fromCharCode((i>>10)+55296,(i&1023)+56320))}function Jn(i){return i<65536?1:2}const Br=/\r\n?|\n/;var ht=(function(i){return i[i.Simple=0]="Simple",i[i.TrackDel=1]="TrackDel",i[i.TrackBefore=2]="TrackBefore",i[i.TrackAfter=3]="TrackAfter",i})(ht||(ht={}));class en{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t+1];e+=n<0?this.sections[t]:n}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,n=0,o=0;t<this.sections.length;){let s=this.sections[t++],r=this.sections[t++];r<0?(e(n,o,s),o+=s):o+=r,n+=s}}iterChangedRanges(e,t=!1){_r(this,e,t)}get invertedDesc(){let e=[];for(let t=0;t<this.sections.length;){let n=this.sections[t++],o=this.sections[t++];o<0?e.push(n,o):e.push(o,n)}return new en(e)}composeDesc(e){return this.empty?e:e.empty?this:Eh(this,e)}mapDesc(e,t=!1){return e.empty?this:$r(this,e,t)}mapPos(e,t=-1,n=ht.Simple){let o=0,s=0;for(let r=0;r<this.sections.length;){let a=this.sections[r++],l=this.sections[r++],c=o+a;if(l<0){if(c>e)return s+(e-o);s+=a}else{if(n!=ht.Simple&&c>=e&&(n==ht.TrackDel&&o<e&&c>e||n==ht.TrackBefore&&o<e||n==ht.TrackAfter&&c>e))return null;if(c>e||c==e&&t<0&&!a)return e==o||t<0?s:s+l;s+=l}o=c}if(e>o)throw new RangeError(`Position ${e} is out of range for changeset of length ${o}`);return s}touchesRange(e,t=e){for(let n=0,o=0;n<this.sections.length&&o<=t;){let s=this.sections[n++],r=this.sections[n++],a=o+s;if(r>=0&&o<=t&&a>=e)return o<e&&a>t?"cover":!0;o=a}return!1}toString(){let e="";for(let t=0;t<this.sections.length;){let n=this.sections[t++],o=this.sections[t++];e+=(e?" ":"")+n+(o>=0?":"+o:"")}return e}toJSON(){return this.sections}static fromJSON(e){if(!Array.isArray(e)||e.length%2||e.some(t=>typeof t!="number"))throw new RangeError("Invalid JSON representation of ChangeDesc");return new en(e)}static create(e){return new en(e)}}class Re extends en{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw new RangeError("Applying change set to a document with the wrong length");return _r(this,(t,n,o,s,r)=>e=e.replace(o,o+(n-t),r),!1),e}mapDesc(e,t=!1){return $r(this,e,t,!0)}invert(e){let t=this.sections.slice(),n=[];for(let o=0,s=0;o<t.length;o+=2){let r=t[o],a=t[o+1];if(a>=0){t[o]=a,t[o+1]=r;let l=o>>1;for(;n.length<l;)n.push(ee.empty);n.push(r?e.slice(s,s+r):ee.empty)}s+=r}return new Re(t,n)}compose(e){return this.empty?e:e.empty?this:Eh(this,e,!0)}map(e,t=!1){return e.empty?this:$r(this,e,t,!0)}iterChanges(e,t=!1){_r(this,e,t)}get desc(){return en.create(this.sections)}filter(e){let t=[],n=[],o=[],s=new Qi(this);e:for(let r=0,a=0;;){let l=r==e.length?1e9:e[r++];for(;a<l||a==l&&s.len==0;){if(s.done)break e;let f=Math.min(s.len,l-a);je(o,f,-1);let h=s.ins==-1?-1:s.off==0?s.ins:0;je(t,f,h),h>0&&dn(n,t,s.text),s.forward(f),a+=f}let c=e[r++];for(;a<c;){if(s.done)break e;let f=Math.min(s.len,c-a);je(t,f,-1),je(o,f,s.ins==-1?-1:s.off==0?s.ins:0),s.forward(f),a+=f}}return{changes:new Re(t,n),filtered:en.create(o)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t],o=this.sections[t+1];o<0?e.push(n):o==0?e.push([n]):e.push([n].concat(this.inserted[t>>1].toJSON()))}return e}static of(e,t,n){let o=[],s=[],r=0,a=null;function l(f=!1){if(!f&&!o.length)return;r<t&&je(o,t-r,-1);let h=new Re(o,s);a=a?a.compose(h.map(a)):h,o=[],s=[],r=0}function c(f){if(Array.isArray(f))for(let h of f)c(h);else if(f instanceof Re){if(f.length!=t)throw new RangeError(`Mismatched change set length (got ${f.length}, expected ${t})`);l(),a=a?a.compose(f.map(a)):f}else{let{from:h,to:d=h,insert:u}=f;if(h>d||h<0||d>t)throw new RangeError(`Invalid change range ${h} to ${d} (in doc of length ${t})`);let p=u?typeof u=="string"?ee.of(u.split(n||Br)):u:ee.empty,g=p.length;if(h==d&&g==0)return;h<r&&l(),h>r&&je(o,h-r,-1),je(o,d-h,g),dn(s,o,p),r=d}}return c(e),l(!a),a}static empty(e){return new Re(e?[e,-1]:[],[])}static fromJSON(e){if(!Array.isArray(e))throw new RangeError("Invalid JSON representation of ChangeSet");let t=[],n=[];for(let o=0;o<e.length;o++){let s=e[o];if(typeof s=="number")t.push(s,-1);else{if(!Array.isArray(s)||typeof s[0]!="number"||s.some((r,a)=>a&&typeof r!="string"))throw new RangeError("Invalid JSON representation of ChangeSet");if(s.length==1)t.push(s[0],0);else{for(;n.length<o;)n.push(ee.empty);n[o]=ee.of(s.slice(1)),t.push(s[0],n[o].length)}}}return new Re(t,n)}static createSet(e,t){return new Re(e,t)}}function je(i,e,t,n=!1){if(e==0&&t<=0)return;let o=i.length-2;o>=0&&t<=0&&t==i[o+1]?i[o]+=e:o>=0&&e==0&&i[o]==0?i[o+1]+=t:n?(i[o]+=e,i[o+1]+=t):i.push(e,t)}function dn(i,e,t){if(t.length==0)return;let n=e.length-2>>1;if(n<i.length)i[i.length-1]=i[i.length-1].append(t);else{for(;i.length<n;)i.push(ee.empty);i.push(t)}}function _r(i,e,t){let n=i.inserted;for(let o=0,s=0,r=0;r<i.sections.length;){let a=i.sections[r++],l=i.sections[r++];if(l<0)o+=a,s+=a;else{let c=o,f=s,h=ee.empty;for(;c+=a,f+=l,l&&n&&(h=h.append(n[r-2>>1])),!(t||r==i.sections.length||i.sections[r+1]<0);)a=i.sections[r++],l=i.sections[r++];e(o,c,s,f,h),o=c,s=f}}}function $r(i,e,t,n=!1){let o=[],s=n?[]:null,r=new Qi(i),a=new Qi(e);for(let l=-1;;){if(r.done&&a.len||a.done&&r.len)throw new Error("Mismatched change set lengths");if(r.ins==-1&&a.ins==-1){let c=Math.min(r.len,a.len);je(o,c,-1),r.forward(c),a.forward(c)}else if(a.ins>=0&&(r.ins<0||l==r.i||r.off==0&&(a.len<r.len||a.len==r.len&&!t))){let c=a.len;for(je(o,a.ins,-1);c;){let f=Math.min(r.len,c);r.ins>=0&&l<r.i&&r.len<=f&&(je(o,0,r.ins),s&&dn(s,o,r.text),l=r.i),r.forward(f),c-=f}a.next()}else if(r.ins>=0){let c=0,f=r.len;for(;f;)if(a.ins==-1){let h=Math.min(f,a.len);c+=h,f-=h,a.forward(h)}else if(a.ins==0&&a.len<f)f-=a.len,a.next();else break;je(o,c,l<r.i?r.ins:0),s&&l<r.i&&dn(s,o,r.text),l=r.i,r.forward(r.len-f)}else{if(r.done&&a.done)return s?Re.createSet(o,s):en.create(o);throw new Error("Mismatched change set lengths")}}}function Eh(i,e,t=!1){let n=[],o=t?[]:null,s=new Qi(i),r=new Qi(e);for(let a=!1;;){if(s.done&&r.done)return o?Re.createSet(n,o):en.create(n);if(s.ins==0)je(n,s.len,0,a),s.next();else if(r.len==0&&!r.done)je(n,0,r.ins,a),o&&dn(o,n,r.text),r.next();else{if(s.done||r.done)throw new Error("Mismatched change set lengths");{let l=Math.min(s.len2,r.len),c=n.length;if(s.ins==-1){let f=r.ins==-1?-1:r.off?0:r.ins;je(n,l,f,a),o&&f&&dn(o,n,r.text)}else r.ins==-1?(je(n,s.off?0:s.len,l,a),o&&dn(o,n,s.textBit(l))):(je(n,s.off?0:s.len,r.off?0:r.ins,a),o&&!r.off&&dn(o,n,r.text));a=(s.ins>l||r.ins>=0&&r.len>l)&&(a||n.length>c),s.forward2(l),r.forward(l)}}}}class Qi{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?ee.empty:e[t]}textBit(e){let{inserted:t}=this.set,n=this.i-2>>1;return n>=t.length&&!e?ee.empty:t[n].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}}class Nn{constructor(e,t,n){this.from=e,this.to=t,this.flags=n}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}get goalColumn(){let e=this.flags>>6;return e==16777215?void 0:e}map(e,t=-1){let n,o;return this.empty?n=o=e.mapPos(this.from,t):(n=e.mapPos(this.from,1),o=e.mapPos(this.to,-1)),n==this.from&&o==this.to?this:new Nn(n,o,this.flags)}extend(e,t=e){if(e<=this.anchor&&t>=this.anchor)return R.range(e,t);let n=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return R.range(this.anchor,n)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!="number"||typeof e.head!="number")throw new RangeError("Invalid JSON representation for SelectionRange");return R.range(e.anchor,e.head)}static create(e,t,n){return new Nn(e,t,n)}}class R{constructor(e,t){this.ranges=e,this.mainIndex=t}map(e,t=-1){return e.empty?this:R.create(this.ranges.map(n=>n.map(e,t)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let n=0;n<this.ranges.length;n++)if(!this.ranges[n].eq(e.ranges[n],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new R([this.main],0)}addRange(e,t=!0){return R.create([e].concat(this.ranges),t?0:this.mainIndex+1)}replaceRange(e,t=this.mainIndex){let n=this.ranges.slice();return n[t]=e,R.create(n,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(e){if(!e||!Array.isArray(e.ranges)||typeof e.main!="number"||e.main>=e.ranges.length)throw new RangeError("Invalid JSON representation for EditorSelection");return new R(e.ranges.map(t=>Nn.fromJSON(t)),e.main)}static single(e,t=e){return new R([R.range(e,t)],0)}static create(e,t=0){if(e.length==0)throw new RangeError("A selection needs at least one range");for(let n=0,o=0;o<e.length;o++){let s=e[o];if(s.empty?s.from<=n:s.from<n)return R.normalized(e.slice(),t);n=s.to}return new R(e,t)}static cursor(e,t=0,n,o){return Nn.create(e,e,(t==0?0:t<0?8:16)|(n==null?7:Math.min(6,n))|(o??16777215)<<6)}static range(e,t,n,o){let s=(n??16777215)<<6|(o==null?7:Math.min(6,o));return t<e?Nn.create(t,e,48|s):Nn.create(e,t,(t>e?8:0)|s)}static normalized(e,t=0){let n=e[t];e.sort((o,s)=>o.from-s.from),t=e.indexOf(n);for(let o=1;o<e.length;o++){let s=e[o],r=e[o-1];if(s.empty?s.from<=r.to:s.from<r.to){let a=r.from,l=Math.max(s.to,r.to);o<=t&&t--,e.splice(--o,2,s.anchor>s.head?R.range(l,a):R.range(a,l))}}return new R(e,t)}}function Nh(i,e){for(let t of i.ranges)if(t.to>e)throw new RangeError("Selection points outside of document")}let Ba=0;class q{constructor(e,t,n,o,s){this.combine=e,this.compareInput=t,this.compare=n,this.isStatic=o,this.id=Ba++,this.default=e([]),this.extensions=typeof s=="function"?s(this):s}get reader(){return this}static define(e={}){return new q(e.combine||(t=>t),e.compareInput||((t,n)=>t===n),e.compare||(e.combine?(t,n)=>t===n:_a),!!e.static,e.enables)}of(e){return new Wo([],this,0,e)}compute(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new Wo(e,this,1,t)}computeN(e,t){if(this.isStatic)throw new Error("Can't compute a static facet");return new Wo(e,this,2,t)}from(e,t){return t||(t=n=>n),this.compute([e],n=>t(n.field(e)))}}function _a(i,e){return i==e||i.length==e.length&&i.every((t,n)=>t===e[n])}class Wo{constructor(e,t,n,o){this.dependencies=e,this.facet=t,this.type=n,this.value=o,this.id=Ba++}dynamicSlot(e){var t;let n=this.value,o=this.facet.compareInput,s=this.id,r=e[s]>>1,a=this.type==2,l=!1,c=!1,f=[];for(let h of this.dependencies)h=="doc"?l=!0:h=="selection"?c=!0:(((t=e[h.id])!==null&&t!==void 0?t:1)&1)==0&&f.push(e[h.id]);return{create(h){return h.values[r]=n(h),1},update(h,d){if(l&&d.docChanged||c&&(d.docChanged||d.selection)||Fr(h,f)){let u=n(h);if(a?!Nl(u,h.values[r],o):!o(u,h.values[r]))return h.values[r]=u,1}return 0},reconfigure:(h,d)=>{let u,p=d.config.address[s];if(p!=null){let g=rs(d,p);if(this.dependencies.every(m=>m instanceof q?d.facet(m)===h.facet(m):m instanceof kn?d.field(m,!1)==h.field(m,!1):!0)||(a?Nl(u=n(h),g,o):o(u=n(h),g)))return h.values[r]=g,0}else u=n(h);return h.values[r]=u,1}}}}function Nl(i,e,t){if(i.length!=e.length)return!1;for(let n=0;n<i.length;n++)if(!t(i[n],e[n]))return!1;return!0}function Fr(i,e){let t=!1;for(let n of e)_i(i,n)&1&&(t=!0);return t}function kb(i,e,t){let n=t.map(l=>i[l.id]),o=t.map(l=>l.type),s=n.filter(l=>!(l&1)),r=i[e.id]>>1;function a(l){let c=[];for(let f=0;f<n.length;f++){let h=rs(l,n[f]);if(o[f]==2)for(let d of h)c.push(d);else c.push(h)}return e.combine(c)}return{create(l){for(let c of n)_i(l,c);return l.values[r]=a(l),1},update(l,c){if(!Fr(l,s))return 0;let f=a(l);return e.compare(f,l.values[r])?0:(l.values[r]=f,1)},reconfigure(l,c){let f=Fr(l,n),h=c.config.facets[e.id],d=c.facet(e);if(h&&!f&&_a(t,h))return l.values[r]=d,0;let u=a(l);return e.compare(u,d)?(l.values[r]=d,0):(l.values[r]=u,1)}}}const xo=q.define({static:!0});class kn{constructor(e,t,n,o,s){this.id=e,this.createF=t,this.updateF=n,this.compareF=o,this.spec=s,this.provides=void 0}static define(e){let t=new kn(Ba++,e.create,e.update,e.compare||((n,o)=>n===o),e);return e.provide&&(t.provides=e.provide(t)),t}create(e){let t=e.facet(xo).find(n=>n.field==this);return(t?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:n=>(n.values[t]=this.create(n),1),update:(n,o)=>{let s=n.values[t],r=this.updateF(s,o);return this.compareF(s,r)?0:(n.values[t]=r,1)},reconfigure:(n,o)=>{let s=n.facet(xo),r=o.facet(xo),a;return(a=s.find(l=>l.field==this))&&a!=r.find(l=>l.field==this)?(n.values[t]=a.create(n),1):o.config.address[this.id]!=null?(n.values[t]=o.field(this),0):(n.values[t]=this.create(n),1)}}}init(e){return[this,xo.of({field:this,create:e})]}get extension(){return this}}const On={lowest:4,low:3,default:2,high:1,highest:0};function Ii(i){return e=>new Rh(e,i)}const Ds={highest:Ii(On.highest),high:Ii(On.high),default:Ii(On.default),low:Ii(On.low),lowest:Ii(On.lowest)};class Rh{constructor(e,t){this.inner=e,this.prec=t}}class Ps{of(e){return new Vr(this,e)}reconfigure(e){return Ps.reconfigure.of({compartment:this,extension:e})}get(e){return e.config.compartments.get(this)}}class Vr{constructor(e,t){this.compartment=e,this.inner=t}}class ss{constructor(e,t,n,o,s,r){for(this.base=e,this.compartments=t,this.dynamicSlots=n,this.address=o,this.staticValues=s,this.facets=r,this.statusTemplate=[];this.statusTemplate.length<n.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(e,t,n){let o=[],s=Object.create(null),r=new Map;for(let d of Cb(e,t,r))d instanceof kn?o.push(d):(s[d.facet.id]||(s[d.facet.id]=[])).push(d);let a=Object.create(null),l=[],c=[];for(let d of o)a[d.id]=c.length<<1,c.push(u=>d.slot(u));let f=n?.config.facets;for(let d in s){let u=s[d],p=u[0].facet,g=f&&f[d]||[];if(u.every(m=>m.type==0))if(a[p.id]=l.length<<1|1,_a(g,u))l.push(n.facet(p));else{let m=p.combine(u.map(b=>b.value));l.push(n&&p.compare(m,n.facet(p))?n.facet(p):m)}else{for(let m of u)m.type==0?(a[m.id]=l.length<<1|1,l.push(m.value)):(a[m.id]=c.length<<1,c.push(b=>m.dynamicSlot(b)));a[p.id]=c.length<<1,c.push(m=>kb(m,p,u))}}let h=c.map(d=>d(a));return new ss(e,r,h,a,l,s)}}function Cb(i,e,t){let n=[[],[],[],[],[]],o=new Map;function s(r,a){let l=o.get(r);if(l!=null){if(l<=a)return;let c=n[l].indexOf(r);c>-1&&n[l].splice(c,1),r instanceof Vr&&t.delete(r.compartment)}if(o.set(r,a),Array.isArray(r))for(let c of r)s(c,a);else if(r instanceof Vr){if(t.has(r.compartment))throw new RangeError("Duplicate use of compartment in extensions");let c=e.get(r.compartment)||r.inner;t.set(r.compartment,c),s(c,a)}else if(r instanceof Rh)s(r.inner,r.prec);else if(r instanceof kn)n[a].push(r),r.provides&&s(r.provides,a);else if(r instanceof Wo)n[a].push(r),r.facet.extensions&&s(r.facet.extensions,On.default);else{let c=r.extension;if(!c)throw new Error(`Unrecognized extension value in extension set (${r}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);s(c,a)}}return s(i,On.default),n.reduce((r,a)=>r.concat(a))}function _i(i,e){if(e&1)return 2;let t=e>>1,n=i.status[t];if(n==4)throw new Error("Cyclic dependency between fields and/or facets");if(n&2)return n;i.status[t]=4;let o=i.computeSlot(i,i.config.dynamicSlots[t]);return i.status[t]=2|o}function rs(i,e){return e&1?i.config.staticValues[e>>1]:i.values[e>>1]}const Bh=q.define(),zr=q.define({combine:i=>i.some(e=>e),static:!0}),_h=q.define({combine:i=>i.length?i[0]:void 0,static:!0}),$h=q.define(),Fh=q.define(),Vh=q.define(),zh=q.define({combine:i=>i.length?i[0]:!1});class Gn{constructor(e,t){this.type=e,this.value=t}static define(){return new Mb}}class Mb{of(e){return new Gn(this,e)}}class Ab{constructor(e){this.map=e}of(e){return new Se(this,e)}}class Se{constructor(e,t){this.type=e,this.value=t}map(e){let t=this.type.map(this.value,e);return t===void 0?void 0:t==this.value?this:new Se(this.type,t)}is(e){return this.type==e}static define(e={}){return new Ab(e.map||(t=>t))}static mapEffects(e,t){if(!e.length)return e;let n=[];for(let o of e){let s=o.map(t);s&&n.push(s)}return n}}Se.reconfigure=Se.define();Se.appendConfig=Se.define();class Ye{constructor(e,t,n,o,s,r){this.startState=e,this.changes=t,this.selection=n,this.effects=o,this.annotations=s,this.scrollIntoView=r,this._doc=null,this._state=null,n&&Nh(n,t.newLength),s.some(a=>a.type==Ye.time)||(this.annotations=s.concat(Ye.time.of(Date.now())))}static create(e,t,n,o,s,r){return new Ye(e,t,n,o,s,r)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(e){let t=this.annotation(Ye.userEvent);return!!(t&&(t==e||t.length>e.length&&t.slice(0,e.length)==e&&t[e.length]=="."))}}Ye.time=Gn.define();Ye.userEvent=Gn.define();Ye.addToHistory=Gn.define();Ye.remote=Gn.define();function Ib(i,e){let t=[];for(let n=0,o=0;;){let s,r;if(n<i.length&&(o==e.length||e[o]>=i[n]))s=i[n++],r=i[n++];else if(o<e.length)s=e[o++],r=e[o++];else return t;!t.length||t[t.length-1]<s?t.push(s,r):t[t.length-1]<r&&(t[t.length-1]=r)}}function Hh(i,e,t){var n;let o,s,r;return t?(o=e.changes,s=Re.empty(e.changes.length),r=i.changes.compose(e.changes)):(o=e.changes.map(i.changes),s=i.changes.mapDesc(e.changes,!0),r=i.changes.compose(o)),{changes:r,selection:e.selection?e.selection.map(s):(n=i.selection)===null||n===void 0?void 0:n.map(o),effects:Se.mapEffects(i.effects,o).concat(Se.mapEffects(e.effects,s)),annotations:i.annotations.length?i.annotations.concat(e.annotations):e.annotations,scrollIntoView:i.scrollIntoView||e.scrollIntoView}}function Hr(i,e,t){let n=e.selection,o=ni(e.annotations);return e.userEvent&&(o=o.concat(Ye.userEvent.of(e.userEvent))),{changes:e.changes instanceof Re?e.changes:Re.of(e.changes||[],t,i.facet(_h)),selection:n&&(n instanceof R?n:R.single(n.anchor,n.head)),effects:ni(e.effects),annotations:o,scrollIntoView:!!e.scrollIntoView}}function qh(i,e,t){let n=Hr(i,e.length?e[0]:{},i.doc.length);e.length&&e[0].filter===!1&&(t=!1);for(let s=1;s<e.length;s++){e[s].filter===!1&&(t=!1);let r=!!e[s].sequential;n=Hh(n,Hr(i,e[s],r?n.changes.newLength:i.doc.length),r)}let o=Ye.create(i,n.changes,n.selection,n.effects,n.annotations,n.scrollIntoView);return Db(t?Tb(o):o)}function Tb(i){let e=i.startState,t=!0;for(let o of e.facet($h)){let s=o(i);if(s===!1){t=!1;break}Array.isArray(s)&&(t=t===!0?s:Ib(t,s))}if(t!==!0){let o,s;if(t===!1)s=i.changes.invertedDesc,o=Re.empty(e.doc.length);else{let r=i.changes.filter(t);o=r.changes,s=r.filtered.mapDesc(r.changes).invertedDesc}i=Ye.create(e,o,i.selection&&i.selection.map(s),Se.mapEffects(i.effects,s),i.annotations,i.scrollIntoView)}let n=e.facet(Fh);for(let o=n.length-1;o>=0;o--){let s=n[o](i);s instanceof Ye?i=s:Array.isArray(s)&&s.length==1&&s[0]instanceof Ye?i=s[0]:i=qh(e,ni(s),!1)}return i}function Db(i){let e=i.startState,t=e.facet(Vh),n=i;for(let o=t.length-1;o>=0;o--){let s=t[o](i);s&&Object.keys(s).length&&(n=Hh(n,Hr(e,s,i.changes.newLength),!0))}return n==i?i:Ye.create(e,i.changes,i.selection,n.effects,n.annotations,n.scrollIntoView)}const Pb=[];function ni(i){return i==null?Pb:Array.isArray(i)?i:[i]}var Qt=(function(i){return i[i.Word=0]="Word",i[i.Space=1]="Space",i[i.Other=2]="Other",i})(Qt||(Qt={}));const Lb=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;let qr;try{qr=new RegExp("[\\p{Alphabetic}\\p{Number}_]","u")}catch{}function Ob(i){if(qr)return qr.test(i);for(let e=0;e<i.length;e++){let t=i[e];if(/\w/.test(t)||t>""&&(t.toUpperCase()!=t.toLowerCase()||Lb.test(t)))return!0}return!1}function Eb(i){return e=>{if(!/\S/.test(e))return Qt.Space;if(Ob(e))return Qt.Word;for(let t=0;t<i.length;t++)if(e.indexOf(i[t])>-1)return Qt.Word;return Qt.Other}}class oe{constructor(e,t,n,o,s,r){this.config=e,this.doc=t,this.selection=n,this.values=o,this.status=e.statusTemplate.slice(),this.computeSlot=s,r&&(r._state=this);for(let a=0;a<this.config.dynamicSlots.length;a++)_i(this,a<<1);this.computeSlot=null}field(e,t=!0){let n=this.config.address[e.id];if(n==null){if(t)throw new RangeError("Field is not present in this state");return}return _i(this,n),rs(this,n)}update(...e){return qh(this,e,!0)}applyTransaction(e){let t=this.config,{base:n,compartments:o}=t;for(let a of e.effects)a.is(Ps.reconfigure)?(t&&(o=new Map,t.compartments.forEach((l,c)=>o.set(c,l)),t=null),o.set(a.value.compartment,a.value.extension)):a.is(Se.reconfigure)?(t=null,n=a.value):a.is(Se.appendConfig)&&(t=null,n=ni(n).concat(a.value));let s;t?s=e.startState.values.slice():(t=ss.resolve(n,o,this),s=new oe(t,this.doc,this.selection,t.dynamicSlots.map(()=>null),(l,c)=>c.reconfigure(l,this),null).values);let r=e.startState.facet(zr)?e.newSelection:e.newSelection.asSingle();new oe(t,e.newDoc,r,s,(a,l)=>l.update(a,e),e)}replaceSelection(e){return typeof e=="string"&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:R.cursor(t.from+e.length)}))}changeByRange(e){let t=this.selection,n=e(t.ranges[0]),o=this.changes(n.changes),s=[n.range],r=ni(n.effects);for(let a=1;a<t.ranges.length;a++){let l=e(t.ranges[a]),c=this.changes(l.changes),f=c.map(o);for(let d=0;d<a;d++)s[d]=s[d].map(f);let h=o.mapDesc(c,!0);s.push(l.range.map(h)),o=o.compose(f),r=Se.mapEffects(r,f).concat(Se.mapEffects(ni(l.effects),h))}return{changes:o,selection:R.create(s,t.mainIndex),effects:r}}changes(e=[]){return e instanceof Re?e:Re.of(e,this.doc.length,this.facet(oe.lineSeparator))}toText(e){return ee.of(e.split(this.facet(oe.lineSeparator)||Br))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(_i(this,t),rs(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let n in e){let o=e[n];o instanceof kn&&this.config.address[o.id]!=null&&(t[n]=o.spec.toJSON(this.field(e[n]),this))}return t}static fromJSON(e,t={},n){if(!e||typeof e.doc!="string")throw new RangeError("Invalid JSON representation for EditorState");let o=[];if(n){for(let s in n)if(Object.prototype.hasOwnProperty.call(e,s)){let r=n[s],a=e[s];o.push(r.init(l=>r.spec.fromJSON(a,l)))}}return oe.create({doc:e.doc,selection:R.fromJSON(e.selection),extensions:t.extensions?o.concat([t.extensions]):o})}static create(e={}){let t=ss.resolve(e.extensions||[],new Map),n=e.doc instanceof ee?e.doc:ee.of((e.doc||"").split(t.staticFacet(oe.lineSeparator)||Br)),o=e.selection?e.selection instanceof R?e.selection:R.single(e.selection.anchor,e.selection.head):R.single(0);return Nh(o,n.length),t.staticFacet(zr)||(o=o.asSingle()),new oe(t,n,o,t.dynamicSlots.map(()=>null),(s,r)=>r.create(s),null)}get tabSize(){return this.facet(oe.tabSize)}get lineBreak(){return this.facet(oe.lineSeparator)||`
`}get readOnly(){return this.facet(zh)}phrase(e,...t){for(let n of this.facet(oe.phrases))if(Object.prototype.hasOwnProperty.call(n,e)){e=n[e];break}return t.length&&(e=e.replace(/\$(\$|\d*)/g,(n,o)=>{if(o=="$")return"$";let s=+(o||1);return!s||s>t.length?n:t[s-1]})),e}languageDataAt(e,t,n=-1){let o=[];for(let s of this.facet(Bh))for(let r of s(this,t,n))Object.prototype.hasOwnProperty.call(r,e)&&o.push(r[e]);return o}charCategorizer(e){return Eb(this.languageDataAt("wordChars",e).join(""))}wordAt(e){let{text:t,from:n,length:o}=this.doc.lineAt(e),s=this.charCategorizer(e),r=e-n,a=e-n;for(;r>0;){let l=Ze(t,r,!1);if(s(t.slice(l,r))!=Qt.Word)break;r=l}for(;a<o;){let l=Ze(t,a);if(s(t.slice(a,l))!=Qt.Word)break;a=l}return r==a?null:R.range(r+n,a+n)}}oe.allowMultipleSelections=zr;oe.tabSize=q.define({combine:i=>i.length?i[0]:4});oe.lineSeparator=_h;oe.readOnly=zh;oe.phrases=q.define({compare(i,e){let t=Object.keys(i),n=Object.keys(e);return t.length==n.length&&t.every(o=>i[o]==e[o])}});oe.languageData=Bh;oe.changeFilter=$h;oe.transactionFilter=Fh;oe.transactionExtender=Vh;Ps.reconfigure=Se.define();function Nb(i,e,t={}){let n={};for(let o of i)for(let s of Object.keys(o)){let r=o[s],a=n[s];if(a===void 0)n[s]=r;else if(!(a===r||r===void 0))if(Object.hasOwnProperty.call(t,s))n[s]=t[s](a,r);else throw new Error("Config merge conflict for field "+s)}for(let o in e)n[o]===void 0&&(n[o]=e[o]);return n}class Fn{eq(e){return this==e}range(e,t=e){return Wr.create(e,t,this)}}Fn.prototype.startSide=Fn.prototype.endSide=0;Fn.prototype.point=!1;Fn.prototype.mapMode=ht.TrackDel;let Wr=class Wh{constructor(e,t,n){this.from=e,this.to=t,this.value=n}static create(e,t,n){return new Wh(e,t,n)}};function jr(i,e){return i.from-e.from||i.value.startSide-e.value.startSide}class $a{constructor(e,t,n,o){this.from=e,this.to=t,this.value=n,this.maxPoint=o}get length(){return this.to[this.to.length-1]}findIndex(e,t,n,o=0){let s=n?this.to:this.from;for(let r=o,a=s.length;;){if(r==a)return r;let l=r+a>>1,c=s[l]-e||(n?this.value[l].endSide:this.value[l].startSide)-t;if(l==r)return c>=0?r:a;c>=0?a=l:r=l+1}}between(e,t,n,o){for(let s=this.findIndex(t,-1e9,!0),r=this.findIndex(n,1e9,!1,s);s<r;s++)if(o(this.from[s]+e,this.to[s]+e,this.value[s])===!1)return!1}map(e,t){let n=[],o=[],s=[],r=-1,a=-1;for(let l=0;l<this.value.length;l++){let c=this.value[l],f=this.from[l]+e,h=this.to[l]+e,d,u;if(f==h){let p=t.mapPos(f,c.startSide,c.mapMode);if(p==null||(d=u=p,c.startSide!=c.endSide&&(u=t.mapPos(f,c.endSide),u<d)))continue}else if(d=t.mapPos(f,c.startSide),u=t.mapPos(h,c.endSide),d>u||d==u&&c.startSide>0&&c.endSide<=0)continue;(u-d||c.endSide-c.startSide)<0||(r<0&&(r=d),c.point&&(a=Math.max(a,u-d)),n.push(c),o.push(d-r),s.push(u-r))}return{mapped:n.length?new $a(o,s,n,a):null,pos:r}}}class me{constructor(e,t,n,o){this.chunkPos=e,this.chunk=t,this.nextLayer=n,this.maxPoint=o}static create(e,t,n,o){return new me(e,t,n,o)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(e){let{add:t=[],sort:n=!1,filterFrom:o=0,filterTo:s=this.length}=e,r=e.filter;if(t.length==0&&!r)return this;if(n&&(t=t.slice().sort(jr)),this.isEmpty)return t.length?me.of(t):this;let a=new jh(this,null,-1).goto(0),l=0,c=[],f=new as;for(;a.value||l<t.length;)if(l<t.length&&(a.from-t[l].from||a.startSide-t[l].value.startSide)>=0){let h=t[l++];f.addInner(h.from,h.to,h.value)||c.push(h)}else a.rangeIndex==1&&a.chunkIndex<this.chunk.length&&(l==t.length||this.chunkEnd(a.chunkIndex)<t[l].from)&&(!r||o>this.chunkEnd(a.chunkIndex)||s<this.chunkPos[a.chunkIndex])&&f.addChunk(this.chunkPos[a.chunkIndex],this.chunk[a.chunkIndex])?a.nextChunk():((!r||o>a.to||s<a.from||r(a.from,a.to,a.value))&&(f.addInner(a.from,a.to,a.value)||c.push(Wr.create(a.from,a.to,a.value))),a.next());return f.finishInner(this.nextLayer.isEmpty&&!c.length?me.empty:this.nextLayer.update({add:c,filter:r,filterFrom:o,filterTo:s}))}map(e){if(e.empty||this.isEmpty)return this;let t=[],n=[],o=-1;for(let r=0;r<this.chunk.length;r++){let a=this.chunkPos[r],l=this.chunk[r],c=e.touchesRange(a,a+l.length);if(c===!1)o=Math.max(o,l.maxPoint),t.push(l),n.push(e.mapPos(a));else if(c===!0){let{mapped:f,pos:h}=l.map(a,e);f&&(o=Math.max(o,f.maxPoint),t.push(f),n.push(h))}}let s=this.nextLayer.map(e);return t.length==0?s:new me(n,t,s||me.empty,o)}between(e,t,n){if(!this.isEmpty){for(let o=0;o<this.chunk.length;o++){let s=this.chunkPos[o],r=this.chunk[o];if(t>=s&&e<=s+r.length&&r.between(s,e-s,t-s,n)===!1)return}this.nextLayer.between(e,t,n)}}iter(e=0){return Zi.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return Zi.from(e).goto(t)}static compare(e,t,n,o,s=-1){let r=e.filter(h=>h.maxPoint>0||!h.isEmpty&&h.maxPoint>=s),a=t.filter(h=>h.maxPoint>0||!h.isEmpty&&h.maxPoint>=s),l=Rl(r,a,n),c=new Ti(r,l,s),f=new Ti(a,l,s);n.iterGaps((h,d,u)=>Bl(c,h,f,d,u,o)),n.empty&&n.length==0&&Bl(c,0,f,0,0,o)}static eq(e,t,n=0,o){o==null&&(o=999999999);let s=e.filter(f=>!f.isEmpty&&t.indexOf(f)<0),r=t.filter(f=>!f.isEmpty&&e.indexOf(f)<0);if(s.length!=r.length)return!1;if(!s.length)return!0;let a=Rl(s,r),l=new Ti(s,a,0).goto(n),c=new Ti(r,a,0).goto(n);for(;;){if(l.to!=c.to||!Ur(l.active,c.active)||l.point&&(!c.point||!l.point.eq(c.point)))return!1;if(l.to>o)return!0;l.next(),c.next()}}static spans(e,t,n,o,s=-1){let r=new Ti(e,null,s).goto(t),a=t,l=r.openStart;for(;;){let c=Math.min(r.to,n);if(r.point){let f=r.activeForPoint(r.to),h=r.pointFrom<t?f.length+1:r.point.startSide<0?f.length:Math.min(f.length,l);o.point(a,c,r.point,f,h,r.pointRank),l=Math.min(r.openEnd(c),f.length)}else c>a&&(o.span(a,c,r.active,l),l=r.openEnd(c));if(r.to>n)return l+(r.point&&r.to>n?1:0);a=r.to,r.next()}}static of(e,t=!1){let n=new as;for(let o of e instanceof Wr?[e]:t?Rb(e):e)n.add(o.from,o.to,o.value);return n.finish()}static join(e){if(!e.length)return me.empty;let t=e[e.length-1];for(let n=e.length-2;n>=0;n--)for(let o=e[n];o!=me.empty;o=o.nextLayer)t=new me(o.chunkPos,o.chunk,t,Math.max(o.maxPoint,t.maxPoint));return t}}me.empty=new me([],[],null,-1);function Rb(i){if(i.length>1)for(let e=i[0],t=1;t<i.length;t++){let n=i[t];if(jr(e,n)>0)return i.slice().sort(jr);e=n}return i}me.empty.nextLayer=me.empty;class as{finishChunk(e){this.chunks.push(new $a(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,n){this.addInner(e,t,n)||(this.nextLayer||(this.nextLayer=new as)).add(e,t,n)}addInner(e,t,n){let o=e-this.lastTo||n.startSide-this.last.endSide;if(o<=0&&(e-this.lastFrom||n.startSide-this.last.startSide)<0)throw new Error("Ranges must be added sorted by `from` position and `startSide`");return o<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=n,this.lastFrom=e,this.lastTo=t,this.value.push(n),n.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let n=t.value.length-1;return this.last=t.value[n],this.lastFrom=t.from[n]+e,this.lastTo=t.to[n]+e,!0}finish(){return this.finishInner(me.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=me.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}}function Rl(i,e,t){let n=new Map;for(let s of i)for(let r=0;r<s.chunk.length;r++)s.chunk[r].maxPoint<=0&&n.set(s.chunk[r],s.chunkPos[r]);let o=new Set;for(let s of e)for(let r=0;r<s.chunk.length;r++){let a=n.get(s.chunk[r]);a!=null&&(t?t.mapPos(a):a)==s.chunkPos[r]&&!t?.touchesRange(a,a+s.chunk[r].length)&&o.add(s.chunk[r])}return o}class jh{constructor(e,t,n,o=0){this.layer=e,this.skip=t,this.minPoint=n,this.rank=o}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,n){for(;this.chunkIndex<this.layer.chunk.length;){let o=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(o)||this.layer.chunkEnd(this.chunkIndex)<e||o.maxPoint<this.minPoint))break;this.chunkIndex++,n=!1}if(this.chunkIndex<this.layer.chunk.length){let o=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!n||this.rangeIndex<o)&&this.setRangeIndex(o)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],n=e+t.from[this.rangeIndex];if(this.from=n,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}}class Zi{constructor(e){this.heap=e}static from(e,t=null,n=-1){let o=[];for(let s=0;s<e.length;s++)for(let r=e[s];!r.isEmpty;r=r.nextLayer)r.maxPoint>=n&&o.push(new jh(r,t,n,s));return o.length==1?o[0]:new Zi(o)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let n of this.heap)n.goto(e,t);for(let n=this.heap.length>>1;n>=0;n--)Xs(this.heap,n);return this.next(),this}forward(e,t){for(let n of this.heap)n.forward(e,t);for(let n=this.heap.length>>1;n>=0;n--)Xs(this.heap,n);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),Xs(this.heap,0)}}}function Xs(i,e){for(let t=i[e];;){let n=(e<<1)+1;if(n>=i.length)break;let o=i[n];if(n+1<i.length&&o.compare(i[n+1])>=0&&(o=i[n+1],n++),t.compare(o)<0)break;i[n]=t,i[e]=o,e=n}}class Ti{constructor(e,t,n){this.minPoint=n,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Zi.from(e,t,n)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){So(this.active,e),So(this.activeTo,e),So(this.activeRank,e),this.minActive=_l(this.active,this.activeTo)}addActive(e){let t=0,{value:n,to:o,rank:s}=this.cursor;for(;t<this.activeRank.length&&(s-this.activeRank[t]||o-this.activeTo[t])>0;)t++;ko(this.active,t,n),ko(this.activeTo,t,o),ko(this.activeRank,t,s),e&&ko(e,t,this.cursor.from),this.minActive=_l(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let n=this.openStart<0?[]:null;for(;;){let o=this.minActive;if(o>-1&&(this.activeTo[o]-this.cursor.from||this.active[o].endSide-this.cursor.startSide)<0){if(this.activeTo[o]>e){this.to=this.activeTo[o],this.endSide=this.active[o].endSide;break}this.removeActive(o),n&&So(n,o)}else if(this.cursor.value)if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let s=this.cursor.value;if(!s.point)this.addActive(n),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=s,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=s.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}else{this.to=this.endSide=1e9;break}}if(n){this.openStart=0;for(let o=n.length-1;o>=0&&n[o]<e;o--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let n=this.active.length-1;n>=0&&!(this.activeRank[n]<this.pointRank);n--)(this.activeTo[n]>e||this.activeTo[n]==e&&this.active[n].endSide>=this.point.endSide)&&t.push(this.active[n]);return t.reverse()}openEnd(e){let t=0;for(let n=this.activeTo.length-1;n>=0&&this.activeTo[n]>e;n--)t++;return t}}function Bl(i,e,t,n,o,s){i.goto(e),t.goto(n);let r=n+o,a=n,l=n-e;for(;;){let c=i.to+l-t.to,f=c||i.endSide-t.endSide,h=f<0?i.to+l:t.to,d=Math.min(h,r);if(i.point||t.point?i.point&&t.point&&(i.point==t.point||i.point.eq(t.point))&&Ur(i.activeForPoint(i.to),t.activeForPoint(t.to))||s.comparePoint(a,d,i.point,t.point):d>a&&!Ur(i.active,t.active)&&s.compareRange(a,d,i.active,t.active),h>r)break;(c||i.openEnd!=t.openEnd)&&s.boundChange&&s.boundChange(h),a=h,f<=0&&i.next(),f>=0&&t.next()}}function Ur(i,e){if(i.length!=e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!=e[t]&&!i[t].eq(e[t]))return!1;return!0}function So(i,e){for(let t=e,n=i.length-1;t<n;t++)i[t]=i[t+1];i.pop()}function ko(i,e,t){for(let n=i.length-1;n>=e;n--)i[n+1]=i[n];i[e]=t}function _l(i,e){let t=-1,n=1e9;for(let o=0;o<e.length;o++)(e[o]-n||i[o].endSide-i[t].endSide)<0&&(t=o,n=e[o]);return t}function Fa(i,e,t=i.length){let n=0;for(let o=0;o<t&&o<i.length;)i.charCodeAt(o)==9?(n+=e-n%e,o++):(n++,o=Ze(i,o));return n}function Bb(i,e,t,n){for(let o=0,s=0;;){if(s>=e)return o;if(o==i.length)break;s+=i.charCodeAt(o)==9?t-s%t:1,o=Ze(i,o)}return i.length}const Gr="ͼ",$l=typeof Symbol>"u"?"__"+Gr:Symbol.for(Gr),Yr=typeof Symbol>"u"?"__styleSet"+Math.floor(Math.random()*1e8):Symbol("styleSet"),Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};class hi{constructor(e,t){this.rules=[];let{finish:n}=t||{};function o(r){return/^@/.test(r)?[r]:r.split(/,\s*/)}function s(r,a,l,c){let f=[],h=/^@(\w+)\b/.exec(r[0]),d=h&&h[1]=="keyframes";if(h&&a==null)return l.push(r[0]+";");for(let u in a){let p=a[u];if(/&/.test(u))s(u.split(/,\s*/).map(g=>r.map(m=>g.replace(/&/,m))).reduce((g,m)=>g.concat(m)),p,l);else if(p&&typeof p=="object"){if(!h)throw new RangeError("The value of a property ("+u+") should be a primitive value.");s(o(u),p,f,d)}else p!=null&&f.push(u.replace(/_.*/,"").replace(/[A-Z]/g,g=>"-"+g.toLowerCase())+": "+p+";")}(f.length||d)&&l.push((n&&!h&&!c?r.map(n):r).join(", ")+" {"+f.join(" ")+"}")}for(let r in e)s(o(r),e[r],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=Fl[$l]||1;return Fl[$l]=e+1,Gr+e.toString(36)}static mount(e,t,n){let o=e[Yr],s=n&&n.nonce;o?s&&o.setNonce(s):o=new _b(e,s),o.mount(Array.isArray(t)?t:[t],e)}}let Vl=new Map;class _b{constructor(e,t){let n=e.ownerDocument||e,o=n.defaultView;if(!e.head&&e.adoptedStyleSheets&&o.CSSStyleSheet){let s=Vl.get(n);if(s)return e[Yr]=s;this.sheet=new o.CSSStyleSheet,Vl.set(n,this)}else this.styleTag=n.createElement("style"),t&&this.styleTag.setAttribute("nonce",t);this.modules=[],e[Yr]=this}mount(e,t){let n=this.sheet,o=0,s=0;for(let r=0;r<e.length;r++){let a=e[r],l=this.modules.indexOf(a);if(l<s&&l>-1&&(this.modules.splice(l,1),s--,l=-1),l==-1){if(this.modules.splice(s++,0,a),n)for(let c=0;c<a.rules.length;c++)n.insertRule(a.rules[c],o++)}else{for(;s<l;)o+=this.modules[s++].rules.length;o+=a.rules.length,s++}}if(n)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{let r="";for(let l=0;l<this.modules.length;l++)r+=this.modules[l].getRules()+`
`;this.styleTag.textContent=r;let a=t.head||t;this.styleTag.parentNode!=a&&a.insertBefore(this.styleTag,a.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute("nonce")!=e&&this.styleTag.setAttribute("nonce",e)}}var bn={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},eo={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},$b=typeof navigator<"u"&&/Mac/.test(navigator.platform),Fb=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for(var ze=0;ze<10;ze++)bn[48+ze]=bn[96+ze]=String(ze);for(var ze=1;ze<=24;ze++)bn[ze+111]="F"+ze;for(var ze=65;ze<=90;ze++)bn[ze]=String.fromCharCode(ze+32),eo[ze]=String.fromCharCode(ze);for(var Js in bn)eo.hasOwnProperty(Js)||(eo[Js]=bn[Js]);function Vb(i){var e=$b&&i.metaKey&&i.shiftKey&&!i.ctrlKey&&!i.altKey||Fb&&i.shiftKey&&i.key&&i.key.length==1||i.key=="Unidentified",t=!e&&i.key||(i.shiftKey?eo:bn)[i.keyCode]||i.key||"Unidentified";return t=="Esc"&&(t="Escape"),t=="Del"&&(t="Delete"),t=="Left"&&(t="ArrowLeft"),t=="Up"&&(t="ArrowUp"),t=="Right"&&(t="ArrowRight"),t=="Down"&&(t="ArrowDown"),t}let Qe=typeof navigator<"u"?navigator:{userAgent:"",vendor:"",platform:""},Kr=typeof document<"u"?document:{documentElement:{style:{}}};const Xr=/Edge\/(\d+)/.exec(Qe.userAgent),Uh=/MSIE \d/.test(Qe.userAgent),Jr=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Qe.userAgent),Ls=!!(Uh||Jr||Xr),zl=!Ls&&/gecko\/(\d+)/i.test(Qe.userAgent),Qs=!Ls&&/Chrome\/(\d+)/.exec(Qe.userAgent),zb="webkitFontSmoothing"in Kr.documentElement.style,Qr=!Ls&&/Apple Computer/.test(Qe.vendor),Hl=Qr&&(/Mobile\/\w+/.test(Qe.userAgent)||Qe.maxTouchPoints>2);var _={mac:Hl||/Mac/.test(Qe.platform),windows:/Win/.test(Qe.platform),linux:/Linux|X11/.test(Qe.platform),ie:Ls,ie_version:Uh?Kr.documentMode||6:Jr?+Jr[1]:Xr?+Xr[1]:0,gecko:zl,gecko_version:zl?+(/Firefox\/(\d+)/.exec(Qe.userAgent)||[0,0])[1]:0,chrome:!!Qs,chrome_version:Qs?+Qs[1]:0,ios:Hl,android:/Android\b/.test(Qe.userAgent),webkit_version:zb?+(/\bAppleWebKit\/(\d+)/.exec(Qe.userAgent)||[0,0])[1]:0,safari:Qr,safari_version:Qr?+(/\bVersion\/(\d+(\.\d+)?)/.exec(Qe.userAgent)||[0,0])[1]:0,tabSize:Kr.documentElement.style.tabSize!=null?"tab-size":"-moz-tab-size"};function to(i){let e;return i.nodeType==11?e=i.getSelection?i:i.ownerDocument:e=i,e.getSelection()}function Zr(i,e){return e?i==e||i.contains(e.nodeType!=1?e.parentNode:e):!1}function jo(i,e){if(!e.anchorNode)return!1;try{return Zr(i,e.anchorNode)}catch{return!1}}function di(i){return i.nodeType==3?zn(i,0,i.nodeValue.length).getClientRects():i.nodeType==1?i.getClientRects():[]}function $i(i,e,t,n){return t?ql(i,e,t,n,-1)||ql(i,e,t,n,1):!1}function Vn(i){for(var e=0;;e++)if(i=i.previousSibling,!i)return e}function ls(i){return i.nodeType==1&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(i.nodeName)}function ql(i,e,t,n,o){for(;;){if(i==t&&e==n)return!0;if(e==(o<0?0:Wt(i))){if(i.nodeName=="DIV")return!1;let s=i.parentNode;if(!s||s.nodeType!=1)return!1;e=Vn(i)+(o<0?0:1),i=s}else if(i.nodeType==1){if(i=i.childNodes[e+(o<0?-1:0)],i.nodeType==1&&i.contentEditable=="false")return!1;e=o<0?Wt(i):0}else return!1}}function Wt(i){return i.nodeType==3?i.nodeValue.length:i.childNodes.length}function ao(i,e){let t=e?i.left:i.right;return{left:t,right:t,top:i.top,bottom:i.bottom}}function Hb(i){let e=i.visualViewport;return e?{left:0,right:e.width,top:0,bottom:e.height}:{left:0,right:i.innerWidth,top:0,bottom:i.innerHeight}}function Gh(i,e){let t=e.width/i.offsetWidth,n=e.height/i.offsetHeight;return(t>.995&&t<1.005||!isFinite(t)||Math.abs(e.width-i.offsetWidth)<1)&&(t=1),(n>.995&&n<1.005||!isFinite(n)||Math.abs(e.height-i.offsetHeight)<1)&&(n=1),{scaleX:t,scaleY:n}}function qb(i,e,t,n,o,s,r,a){let l=i.ownerDocument,c=l.defaultView||window;for(let f=i,h=!1;f&&!h;)if(f.nodeType==1){let d,u=f==l.body,p=1,g=1;if(u)d=Hb(c);else{if(/^(fixed|sticky)$/.test(getComputedStyle(f).position)&&(h=!0),f.scrollHeight<=f.clientHeight&&f.scrollWidth<=f.clientWidth){f=f.assignedSlot||f.parentNode;continue}let y=f.getBoundingClientRect();({scaleX:p,scaleY:g}=Gh(f,y)),d={left:y.left,right:y.left+f.clientWidth*p,top:y.top,bottom:y.top+f.clientHeight*g}}let m=0,b=0;if(o=="nearest")e.top<d.top?(b=e.top-(d.top+r),t>0&&e.bottom>d.bottom+b&&(b=e.bottom-d.bottom+r)):e.bottom>d.bottom&&(b=e.bottom-d.bottom+r,t<0&&e.top-b<d.top&&(b=e.top-(d.top+r)));else{let y=e.bottom-e.top,x=d.bottom-d.top;b=(o=="center"&&y<=x?e.top+y/2-x/2:o=="start"||o=="center"&&t<0?e.top-r:e.bottom-x+r)-d.top}if(n=="nearest"?e.left<d.left?(m=e.left-(d.left+s),t>0&&e.right>d.right+m&&(m=e.right-d.right+s)):e.right>d.right&&(m=e.right-d.right+s,t<0&&e.left<d.left+m&&(m=e.left-(d.left+s))):m=(n=="center"?e.left+(e.right-e.left)/2-(d.right-d.left)/2:n=="start"==a?e.left-s:e.right-(d.right-d.left)+s)-d.left,m||b)if(u)c.scrollBy(m,b);else{let y=0,x=0;if(b){let v=f.scrollTop;f.scrollTop+=b/g,x=(f.scrollTop-v)*g}if(m){let v=f.scrollLeft;f.scrollLeft+=m/p,y=(f.scrollLeft-v)*p}e={left:e.left-y,top:e.top-x,right:e.right-y,bottom:e.bottom-x},y&&Math.abs(y-m)<1&&(n="nearest"),x&&Math.abs(x-b)<1&&(o="nearest")}if(u)break;(e.top<d.top||e.bottom>d.bottom||e.left<d.left||e.right>d.right)&&(e={left:Math.max(e.left,d.left),right:Math.min(e.right,d.right),top:Math.max(e.top,d.top),bottom:Math.min(e.bottom,d.bottom)}),f=f.assignedSlot||f.parentNode}else if(f.nodeType==11)f=f.host;else break}function Wb(i){let e=i.ownerDocument,t,n;for(let o=i.parentNode;o&&!(o==e.body||t&&n);)if(o.nodeType==1)!n&&o.scrollHeight>o.clientHeight&&(n=o),!t&&o.scrollWidth>o.clientWidth&&(t=o),o=o.assignedSlot||o.parentNode;else if(o.nodeType==11)o=o.host;else break;return{x:t,y:n}}class jb{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:n}=e;this.set(t,Math.min(e.anchorOffset,t?Wt(t):0),n,Math.min(e.focusOffset,n?Wt(n):0))}set(e,t,n,o){this.anchorNode=e,this.anchorOffset=t,this.focusNode=n,this.focusOffset=o}}let Pn=null;_.safari&&_.safari_version>=26&&(Pn=!1);function Yh(i){if(i.setActive)return i.setActive();if(Pn)return i.focus(Pn);let e=[];for(let t=i;t&&(e.push(t,t.scrollTop,t.scrollLeft),t!=t.ownerDocument);t=t.parentNode);if(i.focus(Pn==null?{get preventScroll(){return Pn={preventScroll:!0},!0}}:void 0),!Pn){Pn=!1;for(let t=0;t<e.length;){let n=e[t++],o=e[t++],s=e[t++];n.scrollTop!=o&&(n.scrollTop=o),n.scrollLeft!=s&&(n.scrollLeft=s)}}}let Wl;function zn(i,e,t=e){let n=Wl||(Wl=document.createRange());return n.setEnd(i,t),n.setStart(i,e),n}function ii(i,e,t,n){let o={key:e,code:e,keyCode:t,which:t,cancelable:!0};n&&({altKey:o.altKey,ctrlKey:o.ctrlKey,shiftKey:o.shiftKey,metaKey:o.metaKey}=n);let s=new KeyboardEvent("keydown",o);s.synthetic=!0,i.dispatchEvent(s);let r=new KeyboardEvent("keyup",o);return r.synthetic=!0,i.dispatchEvent(r),s.defaultPrevented||r.defaultPrevented}function Ub(i){for(;i;){if(i&&(i.nodeType==9||i.nodeType==11&&i.host))return i;i=i.assignedSlot||i.parentNode}return null}function Kh(i){for(;i.attributes.length;)i.removeAttributeNode(i.attributes[0])}function Gb(i,e){let t=e.focusNode,n=e.focusOffset;if(!t||e.anchorNode!=t||e.anchorOffset!=n)return!1;for(n=Math.min(n,Wt(t));;)if(n){if(t.nodeType!=1)return!1;let o=t.childNodes[n-1];o.contentEditable=="false"?n--:(t=o,n=Wt(t))}else{if(t==i)return!0;n=Vn(t),t=t.parentNode}}function Xh(i){return i.scrollTop>Math.max(1,i.scrollHeight-i.clientHeight-4)}function Jh(i,e){for(let t=i,n=e;;){if(t.nodeType==3&&n>0)return{node:t,offset:n};if(t.nodeType==1&&n>0){if(t.contentEditable=="false")return null;t=t.childNodes[n-1],n=Wt(t)}else if(t.parentNode&&!ls(t))n=Vn(t),t=t.parentNode;else return null}}function Qh(i,e){for(let t=i,n=e;;){if(t.nodeType==3&&n<t.nodeValue.length)return{node:t,offset:n};if(t.nodeType==1&&n<t.childNodes.length){if(t.contentEditable=="false")return null;t=t.childNodes[n],n=0}else if(t.parentNode&&!ls(t))n=Vn(t)+1,t=t.parentNode;else return null}}class Ue{constructor(e,t,n=!0){this.node=e,this.offset=t,this.precise=n}static before(e,t){return new Ue(e.parentNode,Vn(e),t)}static after(e,t){return new Ue(e.parentNode,Vn(e)+1,t)}}const Va=[];class ae{constructor(){this.parent=null,this.dom=null,this.flags=2}get overrideDOMText(){return null}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e){let t=this.posAtStart;for(let n of this.children){if(n==e)return t;t+=n.length+n.breakAfter}throw new RangeError("Invalid child in posBefore")}posAfter(e){return this.posBefore(e)+e.length}sync(e,t){if(this.flags&2){let n=this.dom,o=null,s;for(let r of this.children){if(r.flags&7){if(!r.dom&&(s=o?o.nextSibling:n.firstChild)){let a=ae.get(s);(!a||!a.parent&&a.canReuseDOM(r))&&r.reuseDOM(s)}r.sync(e,t),r.flags&=-8}if(s=o?o.nextSibling:n.firstChild,t&&!t.written&&t.node==n&&s!=r.dom&&(t.written=!0),r.dom.parentNode==n)for(;s&&s!=r.dom;)s=jl(s);else n.insertBefore(r.dom,s);o=r.dom}for(s=o?o.nextSibling:n.firstChild,s&&t&&t.node==n&&(t.written=!0);s;)s=jl(s)}else if(this.flags&1)for(let n of this.children)n.flags&7&&(n.sync(e,t),n.flags&=-8)}reuseDOM(e){}localPosFromDOM(e,t){let n;if(e==this.dom)n=this.dom.childNodes[t];else{let o=Wt(e)==0?0:t==0?-1:1;for(;;){let s=e.parentNode;if(s==this.dom)break;o==0&&s.firstChild!=s.lastChild&&(e==s.firstChild?o=-1:o=1),e=s}o<0?n=e:n=e.nextSibling}if(n==this.dom.firstChild)return 0;for(;n&&!ae.get(n);)n=n.nextSibling;if(!n)return this.length;for(let o=0,s=0;;o++){let r=this.children[o];if(r.dom==n)return s;s+=r.length+r.breakAfter}}domBoundsAround(e,t,n=0){let o=-1,s=-1,r=-1,a=-1;for(let l=0,c=n,f=n;l<this.children.length;l++){let h=this.children[l],d=c+h.length;if(c<e&&d>t)return h.domBoundsAround(e,t,c);if(d>=e&&o==-1&&(o=l,s=c),c>t&&h.dom.parentNode==this.dom){r=l,a=f;break}f=d,c=d+h.breakAfter}return{from:s,to:a<0?n+this.length:a,startDOM:(o?this.children[o-1].dom.nextSibling:null)||this.dom.firstChild,endDOM:r<this.children.length&&r>=0?this.children[r].dom:null}}markDirty(e=!1){this.flags|=2,this.markParentsDirty(e)}markParentsDirty(e){for(let t=this.parent;t;t=t.parent){if(e&&(t.flags|=2),t.flags&1)return;t.flags|=1,e=!1}}setParent(e){this.parent!=e&&(this.parent=e,this.flags&7&&this.markParentsDirty(!0))}setDOM(e){this.dom!=e&&(this.dom&&(this.dom.cmView=null),this.dom=e,e.cmView=this)}get rootView(){for(let e=this;;){let t=e.parent;if(!t)return e;e=t}}replaceChildren(e,t,n=Va){this.markDirty();for(let o=e;o<t;o++){let s=this.children[o];s.parent==this&&n.indexOf(s)<0&&s.destroy()}n.length<250?this.children.splice(e,t-e,...n):this.children=[].concat(this.children.slice(0,e),n,this.children.slice(t));for(let o=0;o<n.length;o++)n[o].setParent(this)}ignoreMutation(e){return!1}ignoreEvent(e){return!1}childCursor(e=this.length){return new Zh(this.children,e,this.children.length)}childPos(e,t=1){return this.childCursor().findPos(e,t)}toString(){let e=this.constructor.name.replace("View","");return e+(this.children.length?"("+this.children.join()+")":this.length?"["+(e=="Text"?this.text:this.length)+"]":"")+(this.breakAfter?"#":"")}static get(e){return e.cmView}get isEditable(){return!0}get isWidget(){return!1}get isHidden(){return!1}merge(e,t,n,o,s,r){return!1}become(e){return!1}canReuseDOM(e){return e.constructor==this.constructor&&!((this.flags|e.flags)&8)}getSide(){return 0}destroy(){for(let e of this.children)e.parent==this&&e.destroy();this.parent=null}}ae.prototype.breakAfter=0;function jl(i){let e=i.nextSibling;return i.parentNode.removeChild(i),e}class Zh{constructor(e,t,n){this.children=e,this.pos=t,this.i=n,this.off=0}findPos(e,t=1){for(;;){if(e>this.pos||e==this.pos&&(t>0||this.i==0||this.children[this.i-1].breakAfter))return this.off=e-this.pos,this;let n=this.children[--this.i];this.pos-=n.length+n.breakAfter}}}function ed(i,e,t,n,o,s,r,a,l){let{children:c}=i,f=c.length?c[e]:null,h=s.length?s[s.length-1]:null,d=h?h.breakAfter:r;if(!(e==n&&f&&!r&&!d&&s.length<2&&f.merge(t,o,s.length?h:null,t==0,a,l))){if(n<c.length){let u=c[n];u&&(o<u.length||u.breakAfter&&h?.breakAfter)?(e==n&&(u=u.split(o),o=0),!d&&h&&u.merge(0,o,h,!0,0,l)?s[s.length-1]=u:((o||u.children.length&&!u.children[0].length)&&u.merge(0,o,null,!1,0,l),s.push(u))):u?.breakAfter&&(h?h.breakAfter=1:r=1),n++}for(f&&(f.breakAfter=r,t>0&&(!r&&s.length&&f.merge(t,f.length,s[0],!1,a,0)?f.breakAfter=s.shift().breakAfter:(t<f.length||f.children.length&&f.children[f.children.length-1].length==0)&&f.merge(t,f.length,null,!1,a,0),e++));e<n&&s.length;)if(c[n-1].become(s[s.length-1]))n--,s.pop(),l=s.length?0:a;else if(c[e].become(s[0]))e++,s.shift(),a=s.length?0:l;else break;!s.length&&e&&n<c.length&&!c[e-1].breakAfter&&c[n].merge(0,0,c[e-1],!1,a,l)&&e--,(e<n||s.length)&&i.replaceChildren(e,n,s)}}function td(i,e,t,n,o,s){let r=i.childCursor(),{i:a,off:l}=r.findPos(t,1),{i:c,off:f}=r.findPos(e,-1),h=e-t;for(let d of n)h+=d.length;i.length+=h,ed(i,c,f,a,l,n,0,o,s)}const Yb=256;class Tt extends ae{constructor(e){super(),this.text=e}get length(){return this.text.length}createDOM(e){this.setDOM(e||document.createTextNode(this.text))}sync(e,t){this.dom||this.createDOM(),this.dom.nodeValue!=this.text&&(t&&t.node==this.dom&&(t.written=!0),this.dom.nodeValue=this.text)}reuseDOM(e){e.nodeType==3&&this.createDOM(e)}merge(e,t,n){return this.flags&8||n&&(!(n instanceof Tt)||this.length-(t-e)+n.length>Yb||n.flags&8)?!1:(this.text=this.text.slice(0,e)+(n?n.text:"")+this.text.slice(t),this.markDirty(),!0)}split(e){let t=new Tt(this.text.slice(e));return this.text=this.text.slice(0,e),this.markDirty(),t.flags|=this.flags&8,t}localPosFromDOM(e,t){return e==this.dom?t:t?this.text.length:0}domAtPos(e){return new Ue(this.dom,e)}domBoundsAround(e,t,n){return{from:n,to:n+this.length,startDOM:this.dom,endDOM:this.dom.nextSibling}}coordsAt(e,t){return Kb(this.dom,e,t)}}class on extends ae{constructor(e,t=[],n=0){super(),this.mark=e,this.children=t,this.length=n;for(let o of t)o.setParent(this)}setAttrs(e){if(Kh(e),this.mark.class&&(e.className=this.mark.class),this.mark.attrs)for(let t in this.mark.attrs)e.setAttribute(t,this.mark.attrs[t]);return e}canReuseDOM(e){return super.canReuseDOM(e)&&!((this.flags|e.flags)&8)}reuseDOM(e){e.nodeName==this.mark.tagName.toUpperCase()&&(this.setDOM(e),this.flags|=6)}sync(e,t){this.dom?this.flags&4&&this.setAttrs(this.dom):this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),super.sync(e,t)}merge(e,t,n,o,s,r){return n&&(!(n instanceof on&&n.mark.eq(this.mark))||e&&s<=0||t<this.length&&r<=0)?!1:(td(this,e,t,n?n.children.slice():[],s-1,r-1),this.markDirty(),!0)}split(e){let t=[],n=0,o=-1,s=0;for(let a of this.children){let l=n+a.length;l>e&&t.push(n<e?a.split(e-n):a),o<0&&n>=e&&(o=s),n=l,s++}let r=this.length-e;return this.length=e,o>-1&&(this.children.length=o,this.markDirty()),new on(this.mark,t,r)}domAtPos(e){return nd(this,e)}coordsAt(e,t){return od(this,e,t)}}function Kb(i,e,t){let n=i.nodeValue.length;e>n&&(e=n);let o=e,s=e,r=0;e==0&&t<0||e==n&&t>=0?_.chrome||_.gecko||(e?(o--,r=1):s<n&&(s++,r=-1)):t<0?o--:s<n&&s++;let a=zn(i,o,s).getClientRects();if(!a.length)return null;let l=a[(r?r<0:t>=0)?0:a.length-1];return _.safari&&!r&&l.width==0&&(l=Array.prototype.find.call(a,c=>c.width)||l),r?ao(l,r<0):l||null}class un extends ae{static create(e,t,n){return new un(e,t,n)}constructor(e,t,n){super(),this.widget=e,this.length=t,this.side=n,this.prevWidget=null}split(e){let t=un.create(this.widget,this.length-e,this.side);return this.length-=e,t}sync(e){(!this.dom||!this.widget.updateDOM(this.dom,e))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(e)),this.widget.editable||(this.dom.contentEditable="false"))}getSide(){return this.side}merge(e,t,n,o,s,r){return n&&(!(n instanceof un)||!this.widget.compare(n.widget)||e>0&&s<=0||t<this.length&&r<=0)?!1:(this.length=e+(n?n.length:0)+(this.length-t),!0)}become(e){return e instanceof un&&e.side==this.side&&this.widget.constructor==e.widget.constructor?(this.widget.compare(e.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,this.length=e.length,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get overrideDOMText(){if(this.length==0)return ee.empty;let e=this;for(;e.parent;)e=e.parent;let{view:t}=e,n=t&&t.state.doc,o=this.posAtStart;return n?n.slice(o,o+this.length):ee.empty}domAtPos(e){return(this.length?e==0:this.side>0)?Ue.before(this.dom):Ue.after(this.dom,e==this.length)}domBoundsAround(){return null}coordsAt(e,t){let n=this.widget.coordsAt(this.dom,e,t);if(n)return n;let o=this.dom.getClientRects(),s=null;if(!o.length)return null;let r=this.side?this.side<0:e>0;for(let a=r?o.length-1:0;s=o[a],!(e>0?a==0:a==o.length-1||s.top<s.bottom);a+=r?-1:1);return ao(s,!r)}get isEditable(){return!1}get isWidget(){return!0}get isHidden(){return this.widget.isHidden}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}}class ui extends ae{constructor(e){super(),this.side=e}get length(){return 0}merge(){return!1}become(e){return e instanceof ui&&e.side==this.side}split(){return new ui(this.side)}sync(){if(!this.dom){let e=document.createElement("img");e.className="cm-widgetBuffer",e.setAttribute("aria-hidden","true"),this.setDOM(e)}}getSide(){return this.side}domAtPos(e){return this.side>0?Ue.before(this.dom):Ue.after(this.dom)}localPosFromDOM(){return 0}domBoundsAround(){return null}coordsAt(e){return this.dom.getBoundingClientRect()}get overrideDOMText(){return ee.empty}get isHidden(){return!0}}Tt.prototype.children=un.prototype.children=ui.prototype.children=Va;function nd(i,e){let t=i.dom,{children:n}=i,o=0;for(let s=0;o<n.length;o++){let r=n[o],a=s+r.length;if(!(a==s&&r.getSide()<=0)){if(e>s&&e<a&&r.dom.parentNode==t)return r.domAtPos(e-s);if(e<=s)break;s=a}}for(let s=o;s>0;s--){let r=n[s-1];if(r.dom.parentNode==t)return r.domAtPos(r.length)}for(let s=o;s<n.length;s++){let r=n[s];if(r.dom.parentNode==t)return r.domAtPos(0)}return new Ue(t,0)}function id(i,e,t){let n,{children:o}=i;t>0&&e instanceof on&&o.length&&(n=o[o.length-1])instanceof on&&n.mark.eq(e.mark)?id(n,e.children[0],t-1):(o.push(e),e.setParent(i)),i.length+=e.length}function od(i,e,t){let n=null,o=-1,s=null,r=-1;function a(c,f){for(let h=0,d=0;h<c.children.length&&d<=f;h++){let u=c.children[h],p=d+u.length;p>=f&&(u.children.length?a(u,f-d):(!s||s.isHidden&&(t>0||Jb(s,u)))&&(p>f||d==p&&u.getSide()>0)?(s=u,r=f-d):(d<f||d==p&&u.getSide()<0&&!u.isHidden)&&(n=u,o=f-d)),d=p}}a(i,e);let l=(t<0?n:s)||n||s;return l?l.coordsAt(Math.max(0,l==n?o:r),t):Xb(i)}function Xb(i){let e=i.dom.lastChild;if(!e)return i.dom.getBoundingClientRect();let t=di(e);return t[t.length-1]||null}function Jb(i,e){let t=i.coordsAt(0,1),n=e.coordsAt(0,1);return t&&n&&n.top<t.bottom}function ea(i,e){for(let t in i)t=="class"&&e.class?e.class+=" "+i.class:t=="style"&&e.style?e.style+=";"+i.style:e[t]=i[t];return e}const Ul=Object.create(null);function cs(i,e,t){if(i==e)return!0;i||(i=Ul),e||(e=Ul);let n=Object.keys(i),o=Object.keys(e);if(n.length-(t&&n.indexOf(t)>-1?1:0)!=o.length-(t&&o.indexOf(t)>-1?1:0))return!1;for(let s of n)if(s!=t&&(o.indexOf(s)==-1||i[s]!==e[s]))return!1;return!0}function ta(i,e,t){let n=!1;if(e)for(let o in e)t&&o in t||(n=!0,o=="style"?i.style.cssText="":i.removeAttribute(o));if(t)for(let o in t)e&&e[o]==t[o]||(n=!0,o=="style"?i.style.cssText=t[o]:i.setAttribute(o,t[o]));return n}function Qb(i){let e=Object.create(null);for(let t=0;t<i.attributes.length;t++){let n=i.attributes[t];e[n.name]=n.value}return e}class Os{eq(e){return!1}updateDOM(e,t){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,n){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}}var Ht=(function(i){return i[i.Text=0]="Text",i[i.WidgetBefore=1]="WidgetBefore",i[i.WidgetAfter=2]="WidgetAfter",i[i.WidgetRange=3]="WidgetRange",i})(Ht||(Ht={}));class Oe extends Fn{constructor(e,t,n,o){super(),this.startSide=e,this.endSide=t,this.widget=n,this.spec=o}get heightRelevant(){return!1}static mark(e){return new lo(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),n=!!e.block;return t+=n&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new yn(e,t,t,n,e.widget||null,!1)}static replace(e){let t=!!e.block,n,o;if(e.isBlockGap)n=-5e8,o=4e8;else{let{start:s,end:r}=sd(e,t);n=(s?t?-3e8:-1:5e8)-1,o=(r?t?2e8:1:-6e8)+1}return new yn(e,n,o,t,e.widget||null,!0)}static line(e){return new co(e)}static set(e,t=!1){return me.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}}Oe.none=me.empty;class lo extends Oe{constructor(e){let{start:t,end:n}=sd(e);super(t?-1:5e8,n?1:-6e8,null,e),this.tagName=e.tagName||"span",this.class=e.class||"",this.attrs=e.attributes||null}eq(e){var t,n;return this==e||e instanceof lo&&this.tagName==e.tagName&&(this.class||((t=this.attrs)===null||t===void 0?void 0:t.class))==(e.class||((n=e.attrs)===null||n===void 0?void 0:n.class))&&cs(this.attrs,e.attrs,"class")}range(e,t=e){if(e>=t)throw new RangeError("Mark decorations may not be empty");return super.range(e,t)}}lo.prototype.point=!1;class co extends Oe{constructor(e){super(-2e8,-2e8,null,e)}eq(e){return e instanceof co&&this.spec.class==e.spec.class&&cs(this.spec.attributes,e.spec.attributes)}range(e,t=e){if(t!=e)throw new RangeError("Line decoration ranges must be zero-length");return super.range(e,t)}}co.prototype.mapMode=ht.TrackBefore;co.prototype.point=!0;class yn extends Oe{constructor(e,t,n,o,s,r){super(t,n,s,e),this.block=o,this.isReplace=r,this.mapMode=o?t<=0?ht.TrackBefore:ht.TrackAfter:ht.TrackDel}get type(){return this.startSide!=this.endSide?Ht.WidgetRange:this.startSide<=0?Ht.WidgetBefore:Ht.WidgetAfter}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(e){return e instanceof yn&&Zb(this.widget,e.widget)&&this.block==e.block&&this.startSide==e.startSide&&this.endSide==e.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw new RangeError("Invalid range for replacement decoration");if(!this.isReplace&&t!=e)throw new RangeError("Widget decorations can only have zero-length ranges");return super.range(e,t)}}yn.prototype.point=!0;function sd(i,e=!1){let{inclusiveStart:t,inclusiveEnd:n}=i;return t==null&&(t=i.inclusive),n==null&&(n=i.inclusive),{start:t??e,end:n??e}}function Zb(i,e){return i==e||!!(i&&e&&i.compare(e))}function Uo(i,e,t,n=0){let o=t.length-1;o>=0&&t[o]+n>=i?t[o]=Math.max(t[o],e):t.push(i,e)}class De extends ae{constructor(){super(...arguments),this.children=[],this.length=0,this.prevAttrs=void 0,this.attrs=null,this.breakAfter=0}merge(e,t,n,o,s,r){if(n){if(!(n instanceof De))return!1;this.dom||n.transferDOM(this)}return o&&this.setDeco(n?n.attrs:null),td(this,e,t,n?n.children.slice():[],s,r),!0}split(e){let t=new De;if(t.breakAfter=this.breakAfter,this.length==0)return t;let{i:n,off:o}=this.childPos(e);o&&(t.append(this.children[n].split(o),0),this.children[n].merge(o,this.children[n].length,null,!1,0,0),n++);for(let s=n;s<this.children.length;s++)t.append(this.children[s],0);for(;n>0&&this.children[n-1].length==0;)this.children[--n].destroy();return this.children.length=n,this.markDirty(),this.length=e,t}transferDOM(e){this.dom&&(this.markDirty(),e.setDOM(this.dom),e.prevAttrs=this.prevAttrs===void 0?this.attrs:this.prevAttrs,this.prevAttrs=void 0,this.dom=null)}setDeco(e){cs(this.attrs,e)||(this.dom&&(this.prevAttrs=this.attrs,this.markDirty()),this.attrs=e)}append(e,t){id(this,e,t)}addLineDeco(e){let t=e.spec.attributes,n=e.spec.class;t&&(this.attrs=ea(t,this.attrs||{})),n&&(this.attrs=ea({class:n},this.attrs||{}))}domAtPos(e){return nd(this,e)}reuseDOM(e){e.nodeName=="DIV"&&(this.setDOM(e),this.flags|=6)}sync(e,t){var n;this.dom?this.flags&4&&(Kh(this.dom),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0):(this.setDOM(document.createElement("div")),this.dom.className="cm-line",this.prevAttrs=this.attrs?null:void 0),this.prevAttrs!==void 0&&(ta(this.dom,this.prevAttrs,this.attrs),this.dom.classList.add("cm-line"),this.prevAttrs=void 0),super.sync(e,t);let o=this.dom.lastChild;for(;o&&ae.get(o)instanceof on;)o=o.lastChild;if(!o||!this.length||o.nodeName!="BR"&&((n=ae.get(o))===null||n===void 0?void 0:n.isEditable)==!1&&(!_.ios||!this.children.some(s=>s instanceof Tt))){let s=document.createElement("BR");s.cmIgnore=!0,this.dom.appendChild(s)}}measureTextSize(){if(this.children.length==0||this.length>20)return null;let e=0,t;for(let n of this.children){if(!(n instanceof Tt)||/[^ -~]/.test(n.text))return null;let o=di(n.dom);if(o.length!=1)return null;e+=o[0].width,t=o[0].height}return e?{lineHeight:this.dom.getBoundingClientRect().height,charWidth:e/this.length,textHeight:t}:null}coordsAt(e,t){let n=od(this,e,t);if(!this.children.length&&n&&this.parent){let{heightOracle:o}=this.parent.view.viewState,s=n.bottom-n.top;if(Math.abs(s-o.lineHeight)<2&&o.textHeight<s){let r=(s-o.textHeight)/2;return{top:n.top+r,bottom:n.bottom-r,left:n.left,right:n.left}}}return n}become(e){return e instanceof De&&this.children.length==0&&e.children.length==0&&cs(this.attrs,e.attrs)&&this.breakAfter==e.breakAfter}covers(){return!0}static find(e,t){for(let n=0,o=0;n<e.children.length;n++){let s=e.children[n],r=o+s.length;if(r>=t){if(s instanceof De)return s;if(r>t)break}o=r+s.breakAfter}return null}}class tn extends ae{constructor(e,t,n){super(),this.widget=e,this.length=t,this.deco=n,this.breakAfter=0,this.prevWidget=null}merge(e,t,n,o,s,r){return n&&(!(n instanceof tn)||!this.widget.compare(n.widget)||e>0&&s<=0||t<this.length&&r<=0)?!1:(this.length=e+(n?n.length:0)+(this.length-t),!0)}domAtPos(e){return e==0?Ue.before(this.dom):Ue.after(this.dom,e==this.length)}split(e){let t=this.length-e;this.length=e;let n=new tn(this.widget,t,this.deco);return n.breakAfter=this.breakAfter,n}get children(){return Va}sync(e){(!this.dom||!this.widget.updateDOM(this.dom,e))&&(this.dom&&this.prevWidget&&this.prevWidget.destroy(this.dom),this.prevWidget=null,this.setDOM(this.widget.toDOM(e)),this.widget.editable||(this.dom.contentEditable="false"))}get overrideDOMText(){return this.parent?this.parent.view.state.doc.slice(this.posAtStart,this.posAtEnd):ee.empty}domBoundsAround(){return null}become(e){return e instanceof tn&&e.widget.constructor==this.widget.constructor?(e.widget.compare(this.widget)||this.markDirty(!0),this.dom&&!this.prevWidget&&(this.prevWidget=this.widget),this.widget=e.widget,this.length=e.length,this.deco=e.deco,this.breakAfter=e.breakAfter,!0):!1}ignoreMutation(){return!0}ignoreEvent(e){return this.widget.ignoreEvent(e)}get isEditable(){return!1}get isWidget(){return!0}coordsAt(e,t){let n=this.widget.coordsAt(this.dom,e,t);return n||(this.widget instanceof na?null:ao(this.dom.getBoundingClientRect(),this.length?e==0:t<=0))}destroy(){super.destroy(),this.dom&&this.widget.destroy(this.dom)}covers(e){let{startSide:t,endSide:n}=this.deco;return t==n?!1:e<0?t<0:n>0}}class na extends Os{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement("div");return e.className="cm-gap",this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+"px",!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}}class Fi{constructor(e,t,n,o){this.doc=e,this.pos=t,this.end=n,this.disallowBlockEffectsFor=o,this.content=[],this.curLine=null,this.breakAtStart=0,this.pendingBuffer=0,this.bufferMarks=[],this.atCursorPos=!0,this.openStart=-1,this.openEnd=-1,this.text="",this.textOff=0,this.cursor=e.iter(),this.skip=t}posCovered(){if(this.content.length==0)return!this.breakAtStart&&this.doc.lineAt(this.pos).from!=this.pos;let e=this.content[this.content.length-1];return!(e.breakAfter||e instanceof tn&&e.deco.endSide<0)}getLine(){return this.curLine||(this.content.push(this.curLine=new De),this.atCursorPos=!0),this.curLine}flushBuffer(e=this.bufferMarks){this.pendingBuffer&&(this.curLine.append(Co(new ui(-1),e),e.length),this.pendingBuffer=0)}addBlockWidget(e){this.flushBuffer(),this.curLine=null,this.content.push(e)}finish(e){this.pendingBuffer&&e<=this.bufferMarks.length?this.flushBuffer():this.pendingBuffer=0,!this.posCovered()&&!(e&&this.content.length&&this.content[this.content.length-1]instanceof tn)&&this.getLine()}buildText(e,t,n){for(;e>0;){if(this.textOff==this.text.length){let{value:r,lineBreak:a,done:l}=this.cursor.next(this.skip);if(this.skip=0,l)throw new Error("Ran out of text content when drawing inline views");if(a){this.posCovered()||this.getLine(),this.content.length?this.content[this.content.length-1].breakAfter=1:this.breakAtStart=1,this.flushBuffer(),this.curLine=null,this.atCursorPos=!0,e--;continue}else this.text=r,this.textOff=0}let o=Math.min(this.text.length-this.textOff,e),s=Math.min(o,512);this.flushBuffer(t.slice(t.length-n)),this.getLine().append(Co(new Tt(this.text.slice(this.textOff,this.textOff+s)),t),n),this.atCursorPos=!0,this.textOff+=s,e-=s,n=o<=s?0:t.length}}span(e,t,n,o){this.buildText(t-e,n,o),this.pos=t,this.openStart<0&&(this.openStart=o)}point(e,t,n,o,s,r){if(this.disallowBlockEffectsFor[r]&&n instanceof yn){if(n.block)throw new RangeError("Block decorations may not be specified via plugins");if(t>this.doc.lineAt(this.pos).to)throw new RangeError("Decorations that replace line breaks may not be specified via plugins")}let a=t-e;if(n instanceof yn)if(n.block)n.startSide>0&&!this.posCovered()&&this.getLine(),this.addBlockWidget(new tn(n.widget||pi.block,a,n));else{let l=un.create(n.widget||pi.inline,a,a?0:n.startSide),c=this.atCursorPos&&!l.isEditable&&s<=o.length&&(e<t||n.startSide>0),f=!l.isEditable&&(e<t||s>o.length||n.startSide<=0),h=this.getLine();this.pendingBuffer==2&&!c&&!l.isEditable&&(this.pendingBuffer=0),this.flushBuffer(o),c&&(h.append(Co(new ui(1),o),s),s=o.length+Math.max(0,s-o.length)),h.append(Co(l,o),s),this.atCursorPos=f,this.pendingBuffer=f?e<t||s>o.length?1:2:0,this.pendingBuffer&&(this.bufferMarks=o.slice())}else this.doc.lineAt(this.pos).from==this.pos&&this.getLine().addLineDeco(n);a&&(this.textOff+a<=this.text.length?this.textOff+=a:(this.skip+=a-(this.text.length-this.textOff),this.text="",this.textOff=0),this.pos=t),this.openStart<0&&(this.openStart=s)}static build(e,t,n,o,s){let r=new Fi(e,t,n,s);return r.openEnd=me.spans(o,t,n,r),r.openStart<0&&(r.openStart=r.openEnd),r.finish(r.openEnd),r}}function Co(i,e){for(let t of e)i=new on(t,[i],i.length);return i}class pi extends Os{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}}pi.inline=new pi("span");pi.block=new pi("div");var Pe=(function(i){return i[i.LTR=0]="LTR",i[i.RTL=1]="RTL",i})(Pe||(Pe={}));const Hn=Pe.LTR,za=Pe.RTL;function rd(i){let e=[];for(let t=0;t<i.length;t++)e.push(1<<+i[t]);return e}const e0=rd("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),t0=rd("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),ia=Object.create(null),Rt=[];for(let i of["()","[]","{}"]){let e=i.charCodeAt(0),t=i.charCodeAt(1);ia[e]=t,ia[t]=-e}function ad(i){return i<=247?e0[i]:1424<=i&&i<=1524?2:1536<=i&&i<=1785?t0[i-1536]:1774<=i&&i<=2220?4:8192<=i&&i<=8204?256:64336<=i&&i<=65023?4:1}const n0=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;class pn{get dir(){return this.level%2?za:Hn}constructor(e,t,n){this.from=e,this.to=t,this.level=n}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,n,o){let s=-1;for(let r=0;r<e.length;r++){let a=e[r];if(a.from<=t&&a.to>=t){if(a.level==n)return r;(s<0||(o!=0?o<0?a.from<t:a.to>t:e[s].level>a.level))&&(s=r)}}if(s<0)throw new RangeError("Index out of range");return s}}function ld(i,e){if(i.length!=e.length)return!1;for(let t=0;t<i.length;t++){let n=i[t],o=e[t];if(n.from!=o.from||n.to!=o.to||n.direction!=o.direction||!ld(n.inner,o.inner))return!1}return!0}const fe=[];function i0(i,e,t,n,o){for(let s=0;s<=n.length;s++){let r=s?n[s-1].to:e,a=s<n.length?n[s].from:t,l=s?256:o;for(let c=r,f=l,h=l;c<a;c++){let d=ad(i.charCodeAt(c));d==512?d=f:d==8&&h==4&&(d=16),fe[c]=d==4?2:d,d&7&&(h=d),f=d}for(let c=r,f=l,h=l;c<a;c++){let d=fe[c];if(d==128)c<a-1&&f==fe[c+1]&&f&24?d=fe[c]=f:fe[c]=256;else if(d==64){let u=c+1;for(;u<a&&fe[u]==64;)u++;let p=c&&f==8||u<t&&fe[u]==8?h==1?1:8:256;for(let g=c;g<u;g++)fe[g]=p;c=u-1}else d==8&&h==1&&(fe[c]=1);f=d,d&7&&(h=d)}}}function o0(i,e,t,n,o){let s=o==1?2:1;for(let r=0,a=0,l=0;r<=n.length;r++){let c=r?n[r-1].to:e,f=r<n.length?n[r].from:t;for(let h=c,d,u,p;h<f;h++)if(u=ia[d=i.charCodeAt(h)])if(u<0){for(let g=a-3;g>=0;g-=3)if(Rt[g+1]==-u){let m=Rt[g+2],b=m&2?o:m&4?m&1?s:o:0;b&&(fe[h]=fe[Rt[g]]=b),a=g;break}}else{if(Rt.length==189)break;Rt[a++]=h,Rt[a++]=d,Rt[a++]=l}else if((p=fe[h])==2||p==1){let g=p==o;l=g?0:1;for(let m=a-3;m>=0;m-=3){let b=Rt[m+2];if(b&2)break;if(g)Rt[m+2]|=2;else{if(b&4)break;Rt[m+2]|=4}}}}}function s0(i,e,t,n){for(let o=0,s=n;o<=t.length;o++){let r=o?t[o-1].to:i,a=o<t.length?t[o].from:e;for(let l=r;l<a;){let c=fe[l];if(c==256){let f=l+1;for(;;)if(f==a){if(o==t.length)break;f=t[o++].to,a=o<t.length?t[o].from:e}else if(fe[f]==256)f++;else break;let h=s==1,d=(f<e?fe[f]:n)==1,u=h==d?h?1:2:n;for(let p=f,g=o,m=g?t[g-1].to:i;p>l;)p==m&&(p=t[--g].from,m=g?t[g-1].to:i),fe[--p]=u;l=f}else s=c,l++}}}function oa(i,e,t,n,o,s,r){let a=n%2?2:1;if(n%2==o%2)for(let l=e,c=0;l<t;){let f=!0,h=!1;if(c==s.length||l<s[c].from){let g=fe[l];g!=a&&(f=!1,h=g==16)}let d=!f&&a==1?[]:null,u=f?n:n+1,p=l;e:for(;;)if(c<s.length&&p==s[c].from){if(h)break e;let g=s[c];if(!f)for(let m=g.to,b=c+1;;){if(m==t)break e;if(b<s.length&&s[b].from==m)m=s[b++].to;else{if(fe[m]==a)break e;break}}if(c++,d)d.push(g);else{g.from>l&&r.push(new pn(l,g.from,u));let m=g.direction==Hn!=!(u%2);sa(i,m?n+1:n,o,g.inner,g.from,g.to,r),l=g.to}p=g.to}else{if(p==t||(f?fe[p]!=a:fe[p]==a))break;p++}d?oa(i,l,p,n+1,o,d,r):l<p&&r.push(new pn(l,p,u)),l=p}else for(let l=t,c=s.length;l>e;){let f=!0,h=!1;if(!c||l>s[c-1].to){let g=fe[l-1];g!=a&&(f=!1,h=g==16)}let d=!f&&a==1?[]:null,u=f?n:n+1,p=l;e:for(;;)if(c&&p==s[c-1].to){if(h)break e;let g=s[--c];if(!f)for(let m=g.from,b=c;;){if(m==e)break e;if(b&&s[b-1].to==m)m=s[--b].from;else{if(fe[m-1]==a)break e;break}}if(d)d.push(g);else{g.to<l&&r.push(new pn(g.to,l,u));let m=g.direction==Hn!=!(u%2);sa(i,m?n+1:n,o,g.inner,g.from,g.to,r),l=g.from}p=g.from}else{if(p==e||(f?fe[p-1]!=a:fe[p-1]==a))break;p--}d?oa(i,p,l,n+1,o,d,r):p<l&&r.push(new pn(p,l,u)),l=p}}function sa(i,e,t,n,o,s,r){let a=e%2?2:1;i0(i,o,s,n,a),o0(i,o,s,n,a),s0(o,s,n,a),oa(i,o,s,e,t,n,r)}function r0(i,e,t){if(!i)return[new pn(0,0,e==za?1:0)];if(e==Hn&&!t.length&&!n0.test(i))return cd(i.length);if(t.length)for(;i.length>fe.length;)fe[fe.length]=256;let n=[],o=e==Hn?0:1;return sa(i,o,o,t,0,i.length,n),n}function cd(i){return[new pn(0,i,0)]}let fd="";function a0(i,e,t,n,o){var s;let r=n.head-i.from,a=pn.find(e,r,(s=n.bidiLevel)!==null&&s!==void 0?s:-1,n.assoc),l=e[a],c=l.side(o,t);if(r==c){let d=a+=o?1:-1;if(d<0||d>=e.length)return null;l=e[a=d],r=l.side(!o,t),c=l.side(o,t)}let f=Ze(i.text,r,l.forward(o,t));(f<l.from||f>l.to)&&(f=c),fd=i.text.slice(Math.min(r,f),Math.max(r,f));let h=a==(o?e.length-1:0)?null:e[a+(o?1:-1)];return h&&f==c&&h.level+(o?0:1)<l.level?R.cursor(h.side(!o,t)+i.from,h.forward(o,t)?1:-1,h.level):R.cursor(f+i.from,l.forward(o,t)?-1:1,l.level)}function l0(i,e,t){for(let n=e;n<t;n++){let o=ad(i.charCodeAt(n));if(o==1)return Hn;if(o==2||o==4)return za}return Hn}const hd=q.define(),dd=q.define(),ud=q.define(),pd=q.define(),ra=q.define(),gd=q.define(),md=q.define(),Ha=q.define(),qa=q.define(),bd=q.define({combine:i=>i.some(e=>e)}),c0=q.define({combine:i=>i.some(e=>e)}),yd=q.define();class oi{constructor(e,t="nearest",n="nearest",o=5,s=5,r=!1){this.range=e,this.y=t,this.x=n,this.yMargin=o,this.xMargin=s,this.isSnapshot=r}map(e){return e.empty?this:new oi(this.range.map(e),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(e){return this.range.to<=e.doc.length?this:new oi(R.cursor(e.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}}const Mo=Se.define({map:(i,e)=>i.map(e)}),vd=Se.define();function dt(i,e,t){let n=i.facet(pd);n.length?n[0](e):window.onerror&&window.onerror(String(e),t,void 0,void 0,e)||(t?console.error(t+":",e):console.error(e))}const Jt=q.define({combine:i=>i.length?i[0]:!0});let f0=0;const Qn=q.define({combine(i){return i.filter((e,t)=>{for(let n=0;n<t;n++)if(i[n].plugin==e.plugin)return!1;return!0})}});class sn{constructor(e,t,n,o,s){this.id=e,this.create=t,this.domEventHandlers=n,this.domEventObservers=o,this.baseExtensions=s(this),this.extension=this.baseExtensions.concat(Qn.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(Qn.of({plugin:this,arg:e}))}static define(e,t){const{eventHandlers:n,eventObservers:o,provide:s,decorations:r}=t||{};return new sn(f0++,e,n,o,a=>{let l=[];return r&&l.push(no.of(c=>{let f=c.plugin(a);return f?r(f):Oe.none})),s&&l.push(s(a)),l})}static fromClass(e,t){return sn.define((n,o)=>new e(n,o),t)}}class Zs{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(this.value){if(this.mustUpdate){let t=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(t)}catch(n){if(dt(t.state,n,"CodeMirror plugin crashed"),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}}else if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){dt(e.state,t,"CodeMirror plugin crashed"),this.deactivate()}return this}destroy(e){var t;if(!((t=this.value)===null||t===void 0)&&t.destroy)try{this.value.destroy()}catch(n){dt(e.state,n,"CodeMirror plugin crashed")}}deactivate(){this.spec=this.value=null}}const wd=q.define(),Wa=q.define(),no=q.define(),xd=q.define(),fo=q.define(),Sd=q.define();function Gl(i,e){let t=i.state.facet(Sd);if(!t.length)return t;let n=t.map(s=>s instanceof Function?s(i):s),o=[];return me.spans(n,e.from,e.to,{point(){},span(s,r,a,l){let c=s-e.from,f=r-e.from,h=o;for(let d=a.length-1;d>=0;d--,l--){let u=a[d].spec.bidiIsolate,p;if(u==null&&(u=l0(e.text,c,f)),l>0&&h.length&&(p=h[h.length-1]).to==c&&p.direction==u)p.to=f,h=p.inner;else{let g={from:c,to:f,direction:u,inner:[]};h.push(g),h=g.inner}}}}),o}const kd=q.define();function ja(i){let e=0,t=0,n=0,o=0;for(let s of i.state.facet(kd)){let r=s(i);r&&(r.left!=null&&(e=Math.max(e,r.left)),r.right!=null&&(t=Math.max(t,r.right)),r.top!=null&&(n=Math.max(n,r.top)),r.bottom!=null&&(o=Math.max(o,r.bottom)))}return{left:e,right:t,top:n,bottom:o}}const Ei=q.define();class xt{constructor(e,t,n,o){this.fromA=e,this.toA=t,this.fromB=n,this.toB=o}join(e){return new xt(Math.min(this.fromA,e.fromA),Math.max(this.toA,e.toA),Math.min(this.fromB,e.fromB),Math.max(this.toB,e.toB))}addToSet(e){let t=e.length,n=this;for(;t>0;t--){let o=e[t-1];if(!(o.fromA>n.toA)){if(o.toA<n.fromA)break;n=n.join(o),e.splice(t-1,1)}}return e.splice(t,0,n),e}static extendWithRanges(e,t){if(t.length==0)return e;let n=[];for(let o=0,s=0,r=0,a=0;;o++){let l=o==e.length?null:e[o],c=r-a,f=l?l.fromB:1e9;for(;s<t.length&&t[s]<f;){let h=t[s],d=t[s+1],u=Math.max(a,h),p=Math.min(f,d);if(u<=p&&new xt(u+c,p+c,u,p).addToSet(n),d>f)break;s+=2}if(!l)return n;new xt(l.fromA,l.toA,l.fromB,l.toB).addToSet(n),r=l.toA,a=l.toB}}}class fs{constructor(e,t,n){this.view=e,this.state=t,this.transactions=n,this.flags=0,this.startState=e.state,this.changes=Re.empty(this.startState.doc.length);for(let s of n)this.changes=this.changes.compose(s.changes);let o=[];this.changes.iterChangedRanges((s,r,a,l)=>o.push(new xt(s,r,a,l))),this.changedRanges=o}static create(e,t,n){return new fs(e,t,n)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}}class Yl extends ae{get length(){return this.view.state.doc.length}constructor(e){super(),this.view=e,this.decorations=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.markedForComposition=new Set,this.editContextFormatting=Oe.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.setDOM(e.contentDOM),this.children=[new De],this.children[0].setParent(this),this.updateDeco(),this.updateInner([new xt(0,0,0,e.state.doc.length)],0,null)}update(e){var t;let n=e.changedRanges;this.minWidth>0&&n.length&&(n.every(({fromA:c,toA:f})=>f<this.minWidthFrom||c>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let o=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(!((t=this.domChanged)===null||t===void 0)&&t.newSel?o=this.domChanged.newSel.head:!b0(e.changes,this.hasComposition)&&!e.selectionSet&&(o=e.state.selection.main.head));let s=o>-1?d0(this.view,e.changes,o):null;if(this.domChanged=null,this.hasComposition){this.markedForComposition.clear();let{from:c,to:f}=this.hasComposition;n=new xt(c,f,e.changes.mapPos(c,-1),e.changes.mapPos(f,1)).addToSet(n.slice())}this.hasComposition=s?{from:s.range.fromB,to:s.range.toB}:null,(_.ie||_.chrome)&&!s&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let r=this.decorations,a=this.updateDeco(),l=g0(r,a,e.changes);return n=xt.extendWithRanges(n,l),!(this.flags&7)&&n.length==0?!1:(this.updateInner(n,e.startState.doc.length,s),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t,n){this.view.viewState.mustMeasureContent=!0,this.updateChildren(e,t,n);let{observer:o}=this.view;o.ignore(()=>{this.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+"px",this.dom.style.flexBasis=this.minWidth?this.minWidth+"px":"";let r=_.chrome||_.ios?{node:o.selectionRange.focusNode,written:!1}:void 0;this.sync(this.view,r),this.flags&=-8,r&&(r.written||o.selectionRange.focusNode!=r.node)&&(this.forceSelection=!0),this.dom.style.height=""}),this.markedForComposition.forEach(r=>r.flags&=-9);let s=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let r of this.children)r instanceof tn&&r.widget instanceof na&&s.push(r.dom);o.updateGaps(s)}updateChildren(e,t,n){let o=n?n.range.addToSet(e.slice()):e,s=this.childCursor(t);for(let r=o.length-1;;r--){let a=r>=0?o[r]:null;if(!a)break;let{fromA:l,toA:c,fromB:f,toB:h}=a,d,u,p,g;if(n&&n.range.fromB<h&&n.range.toB>f){let v=Fi.build(this.view.state.doc,f,n.range.fromB,this.decorations,this.dynamicDecorationMap),C=Fi.build(this.view.state.doc,n.range.toB,h,this.decorations,this.dynamicDecorationMap);u=v.breakAtStart,p=v.openStart,g=C.openEnd;let k=this.compositionView(n);C.breakAtStart?k.breakAfter=1:C.content.length&&k.merge(k.length,k.length,C.content[0],!1,C.openStart,0)&&(k.breakAfter=C.content[0].breakAfter,C.content.shift()),v.content.length&&k.merge(0,0,v.content[v.content.length-1],!0,0,v.openEnd)&&v.content.pop(),d=v.content.concat(k).concat(C.content)}else({content:d,breakAtStart:u,openStart:p,openEnd:g}=Fi.build(this.view.state.doc,f,h,this.decorations,this.dynamicDecorationMap));let{i:m,off:b}=s.findPos(c,1),{i:y,off:x}=s.findPos(l,-1);ed(this,y,x,m,b,d,u,p,g)}n&&this.fixCompositionDOM(n)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let n of t.effects)n.is(vd)&&(this.editContextFormatting=n.value)}compositionView(e){let t=new Tt(e.text.nodeValue);t.flags|=8;for(let{deco:o}of e.marks)t=new on(o,[t],t.length);let n=new De;return n.append(t,0),n}fixCompositionDOM(e){let t=(s,r)=>{r.flags|=8|(r.children.some(l=>l.flags&7)?1:0),this.markedForComposition.add(r);let a=ae.get(s);a&&a!=r&&(a.dom=null),r.setDOM(s)},n=this.childPos(e.range.fromB,1),o=this.children[n.i];t(e.line,o);for(let s=e.marks.length-1;s>=-1;s--)n=o.childPos(n.off,1),o=o.children[n.i],t(s>=0?e.marks[s].node:e.text,o)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let n=this.view.root.activeElement,o=n==this.dom,s=!o&&!(this.view.state.facet(Jt)||this.dom.tabIndex>-1)&&jo(this.dom,this.view.observer.selectionRange)&&!(n&&this.dom.contains(n));if(!(o||t||s))return;let r=this.forceSelection;this.forceSelection=!1;let a=this.view.state.selection.main,l=this.moveToLine(this.domAtPos(a.anchor)),c=a.empty?l:this.moveToLine(this.domAtPos(a.head));if(_.gecko&&a.empty&&!this.hasComposition&&h0(l)){let h=document.createTextNode("");this.view.observer.ignore(()=>l.node.insertBefore(h,l.node.childNodes[l.offset]||null)),l=c=new Ue(h,0),r=!0}let f=this.view.observer.selectionRange;(r||!f.focusNode||(!$i(l.node,l.offset,f.anchorNode,f.anchorOffset)||!$i(c.node,c.offset,f.focusNode,f.focusOffset))&&!this.suppressWidgetCursorChange(f,a))&&(this.view.observer.ignore(()=>{_.android&&_.chrome&&this.dom.contains(f.focusNode)&&m0(f.focusNode,this.dom)&&(this.dom.blur(),this.dom.focus({preventScroll:!0}));let h=to(this.view.root);if(h)if(a.empty){if(_.gecko){let d=u0(l.node,l.offset);if(d&&d!=3){let u=(d==1?Jh:Qh)(l.node,l.offset);u&&(l=new Ue(u.node,u.offset))}}h.collapse(l.node,l.offset),a.bidiLevel!=null&&h.caretBidiLevel!==void 0&&(h.caretBidiLevel=a.bidiLevel)}else if(h.extend){h.collapse(l.node,l.offset);try{h.extend(c.node,c.offset)}catch{}}else{let d=document.createRange();a.anchor>a.head&&([l,c]=[c,l]),d.setEnd(c.node,c.offset),d.setStart(l.node,l.offset),h.removeAllRanges(),h.addRange(d)}s&&this.view.root.activeElement==this.dom&&(this.dom.blur(),n&&n.focus())}),this.view.observer.setSelectionRange(l,c)),this.impreciseAnchor=l.precise?null:new Ue(f.anchorNode,f.anchorOffset),this.impreciseHead=c.precise?null:new Ue(f.focusNode,f.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&$i(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,n=to(e.root),{anchorNode:o,anchorOffset:s}=e.observer.selectionRange;if(!n||!t.empty||!t.assoc||!n.modify)return;let r=De.find(this,t.head);if(!r)return;let a=r.posAtStart;if(t.head==a||t.head==a+r.length)return;let l=this.coordsAt(t.head,-1),c=this.coordsAt(t.head,1);if(!l||!c||l.bottom>c.top)return;let f=this.domAtPos(t.head+t.assoc);n.collapse(f.node,f.offset),n.modify("move",t.assoc<0?"forward":"backward","lineboundary"),e.observer.readSelectionRange();let h=e.observer.selectionRange;e.docView.posFromDOM(h.anchorNode,h.anchorOffset)!=t.from&&n.collapse(o,s)}moveToLine(e){let t=this.dom,n;if(e.node!=t)return e;for(let o=e.offset;!n&&o<t.childNodes.length;o++){let s=ae.get(t.childNodes[o]);s instanceof De&&(n=s.domAtPos(0))}for(let o=e.offset-1;!n&&o>=0;o--){let s=ae.get(t.childNodes[o]);s instanceof De&&(n=s.domAtPos(s.length))}return n?new Ue(n.node,n.offset,!0):e}nearest(e){for(let t=e;t;){let n=ae.get(t);if(n&&n.rootView==this)return n;t=t.parentNode}return null}posFromDOM(e,t){let n=this.nearest(e);if(!n)throw new RangeError("Trying to find position for a DOM position outside of the document");return n.localPosFromDOM(e,t)+n.posAtStart}domAtPos(e){let{i:t,off:n}=this.childCursor().findPos(e,-1);for(;t<this.children.length-1;){let o=this.children[t];if(n<o.length||o instanceof De)break;t++,n=0}return this.children[t].domAtPos(n)}coordsAt(e,t){let n=null,o=0;for(let s=this.length,r=this.children.length-1;r>=0;r--){let a=this.children[r],l=s-a.breakAfter,c=l-a.length;if(l<e)break;if(c<=e&&(c<e||a.covers(-1))&&(l>e||a.covers(1))&&(!n||a instanceof De&&!(n instanceof De&&t>=0)))n=a,o=c;else if(n&&c==e&&l==e&&a instanceof tn&&Math.abs(t)<2){if(a.deco.startSide<0)break;r&&(n=null)}s=c}return n?n.coordsAt(e-o,t):null}coordsForChar(e){let{i:t,off:n}=this.childPos(e,1),o=this.children[t];if(!(o instanceof De))return null;for(;o.children.length;){let{i:a,off:l}=o.childPos(n,1);for(;;a++){if(a==o.children.length)return null;if((o=o.children[a]).length)break}n=l}if(!(o instanceof Tt))return null;let s=Ze(o.text,n);if(s==n)return null;let r=zn(o.dom,n,s).getClientRects();for(let a=0;a<r.length;a++){let l=r[a];if(a==r.length-1||l.top<l.bottom&&l.left<l.right)return l}return null}measureVisibleLineHeights(e){let t=[],{from:n,to:o}=e,s=this.view.contentDOM.clientWidth,r=s>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,a=-1,l=this.view.textDirection==Pe.LTR;for(let c=0,f=0;f<this.children.length;f++){let h=this.children[f],d=c+h.length;if(d>o)break;if(c>=n){let u=h.dom.getBoundingClientRect();if(t.push(u.height),r){let p=h.dom.lastChild,g=p?di(p):[];if(g.length){let m=g[g.length-1],b=l?m.right-u.left:u.right-m.left;b>a&&(a=b,this.minWidth=s,this.minWidthFrom=c,this.minWidthTo=d)}}}c=d+h.breakAfter}return t}textDirectionAt(e){let{i:t}=this.childPos(e,1);return getComputedStyle(this.children[t].dom).direction=="rtl"?Pe.RTL:Pe.LTR}measureTextSize(){for(let s of this.children)if(s instanceof De){let r=s.measureTextSize();if(r)return r}let e=document.createElement("div"),t,n,o;return e.className="cm-line",e.style.width="99999px",e.style.position="absolute",e.textContent="abc def ghi jkl mno pqr stu",this.view.observer.ignore(()=>{this.dom.appendChild(e);let s=di(e.firstChild)[0];t=e.getBoundingClientRect().height,n=s?s.width/27:7,o=s?s.height:t,e.remove()}),{lineHeight:t,charWidth:n,textHeight:o}}childCursor(e=this.length){let t=this.children.length;return t&&(e-=this.children[--t].length),new Zh(this.children,e,t)}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let n=0,o=0;;o++){let s=o==t.viewports.length?null:t.viewports[o],r=s?s.from-1:this.length;if(r>n){let a=(t.lineBlockAt(r).bottom-t.lineBlockAt(n).top)/this.view.scaleY;e.push(Oe.replace({widget:new na(a),block:!0,inclusive:!0,isBlockGap:!0}).range(n,r))}if(!s)break;n=s.to+1}return Oe.set(e)}updateDeco(){let e=1,t=this.view.state.facet(no).map(s=>(this.dynamicDecorationMap[e++]=typeof s=="function")?s(this.view):s),n=!1,o=this.view.state.facet(xd).map((s,r)=>{let a=typeof s=="function";return a&&(n=!0),a?s(this.view):s});for(o.length&&(this.dynamicDecorationMap[e++]=n,t.push(me.join(o))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;return this.decorations}scrollIntoView(e){if(e.isSnapshot){let c=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=c.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let c of this.view.state.facet(yd))try{if(c(this.view,e.range,e))return!0}catch(f){dt(this.view.state,f,"scroll handler")}let{range:t}=e,n=this.coordsAt(t.head,t.empty?t.assoc:t.head>t.anchor?-1:1),o;if(!n)return;!t.empty&&(o=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(n={left:Math.min(n.left,o.left),top:Math.min(n.top,o.top),right:Math.max(n.right,o.right),bottom:Math.max(n.bottom,o.bottom)});let s=ja(this.view),r={left:n.left-s.left,top:n.top-s.top,right:n.right+s.right,bottom:n.bottom+s.bottom},{offsetWidth:a,offsetHeight:l}=this.view.scrollDOM;qb(this.view.scrollDOM,r,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,a),-a),Math.max(Math.min(e.yMargin,l),-l),this.view.textDirection==Pe.LTR)}lineHasWidget(e){let{i:t}=this.childCursor().findPos(e);if(t==this.children.length)return!1;let n=o=>o instanceof un||o.children.some(n);return n(this.children[t])}}function h0(i){return i.node.nodeType==1&&i.node.firstChild&&(i.offset==0||i.node.childNodes[i.offset-1].contentEditable=="false")&&(i.offset==i.node.childNodes.length||i.node.childNodes[i.offset].contentEditable=="false")}function Cd(i,e){let t=i.observer.selectionRange;if(!t.focusNode)return null;let n=Jh(t.focusNode,t.focusOffset),o=Qh(t.focusNode,t.focusOffset),s=n||o;if(o&&n&&o.node!=n.node){let a=ae.get(o.node);if(!a||a instanceof Tt&&a.text!=o.node.nodeValue)s=o;else if(i.docView.lastCompositionAfterCursor){let l=ae.get(n.node);!l||l instanceof Tt&&l.text!=n.node.nodeValue||(s=o)}}if(i.docView.lastCompositionAfterCursor=s!=n,!s)return null;let r=e-s.offset;return{from:r,to:r+s.node.nodeValue.length,node:s.node}}function d0(i,e,t){let n=Cd(i,t);if(!n)return null;let{node:o,from:s,to:r}=n,a=o.nodeValue;if(/[\n\r]/.test(a)||i.state.doc.sliceString(n.from,n.to)!=a)return null;let l=e.invertedDesc,c=new xt(l.mapPos(s),l.mapPos(r),s,r),f=[];for(let h=o.parentNode;;h=h.parentNode){let d=ae.get(h);if(d instanceof on)f.push({node:h,deco:d.mark});else{if(d instanceof De||h.nodeName=="DIV"&&h.parentNode==i.contentDOM)return{range:c,text:o,marks:f,line:h};if(h!=i.contentDOM)f.push({node:h,deco:new lo({inclusive:!0,attributes:Qb(h),tagName:h.tagName.toLowerCase()})});else return null}}}function u0(i,e){return i.nodeType!=1?0:(e&&i.childNodes[e-1].contentEditable=="false"?1:0)|(e<i.childNodes.length&&i.childNodes[e].contentEditable=="false"?2:0)}let p0=class{constructor(){this.changes=[]}compareRange(e,t){Uo(e,t,this.changes)}comparePoint(e,t){Uo(e,t,this.changes)}boundChange(e){Uo(e,e,this.changes)}};function g0(i,e,t){let n=new p0;return me.compare(i,e,t,n),n.changes}function m0(i,e){for(let t=i;t&&t!=e;t=t.assignedSlot||t.parentNode)if(t.nodeType==1&&t.contentEditable=="false")return!0;return!1}function b0(i,e){let t=!1;return e&&i.iterChangedRanges((n,o)=>{n<e.to&&o>e.from&&(t=!0)}),t}function y0(i,e,t=1){let n=i.charCategorizer(e),o=i.doc.lineAt(e),s=e-o.from;if(o.length==0)return R.cursor(e);s==0?t=1:s==o.length&&(t=-1);let r=s,a=s;t<0?r=Ze(o.text,s,!1):a=Ze(o.text,s);let l=n(o.text.slice(r,a));for(;r>0;){let c=Ze(o.text,r,!1);if(n(o.text.slice(c,r))!=l)break;r=c}for(;a<o.length;){let c=Ze(o.text,a);if(n(o.text.slice(a,c))!=l)break;a=c}return R.range(r+o.from,a+o.from)}function v0(i,e){return e.left>i?e.left-i:Math.max(0,i-e.right)}function w0(i,e){return e.top>i?e.top-i:Math.max(0,i-e.bottom)}function er(i,e){return i.top<e.bottom-1&&i.bottom>e.top+1}function Kl(i,e){return e<i.top?{top:e,left:i.left,right:i.right,bottom:i.bottom}:i}function Xl(i,e){return e>i.bottom?{top:i.top,left:i.left,right:i.right,bottom:e}:i}function aa(i,e,t){let n,o,s,r,a=!1,l,c,f,h;for(let p=i.firstChild;p;p=p.nextSibling){let g=di(p);for(let m=0;m<g.length;m++){let b=g[m];o&&er(o,b)&&(b=Kl(Xl(b,o.bottom),o.top));let y=v0(e,b),x=w0(t,b);if(y==0&&x==0)return p.nodeType==3?Jl(p,e,t):aa(p,e,t);(!n||r>x||r==x&&s>y)&&(n=p,o=b,s=y,r=x,a=y?e<b.left?m>0:m<g.length-1:!0),y==0?t>b.bottom&&(!f||f.bottom<b.bottom)?(l=p,f=b):t<b.top&&(!h||h.top>b.top)&&(c=p,h=b):f&&er(f,b)?f=Xl(f,b.bottom):h&&er(h,b)&&(h=Kl(h,b.top))}}if(f&&f.bottom>=t?(n=l,o=f):h&&h.top<=t&&(n=c,o=h),!n)return{node:i,offset:0};let d=Math.max(o.left,Math.min(o.right,e));if(n.nodeType==3)return Jl(n,d,t);if(a&&n.contentEditable!="false")return aa(n,d,t);let u=Array.prototype.indexOf.call(i.childNodes,n)+(e>=(o.left+o.right)/2?1:0);return{node:i,offset:u}}function Jl(i,e,t){let n=i.nodeValue.length,o=-1,s=1e9,r=0;for(let a=0;a<n;a++){let l=zn(i,a,a+1).getClientRects();for(let c=0;c<l.length;c++){let f=l[c];if(f.top==f.bottom)continue;r||(r=e-f.left);let h=(f.top>t?f.top-t:t-f.bottom)-1;if(f.left-1<=e&&f.right+1>=e&&h<s){let d=e>=(f.left+f.right)/2,u=d;if(_.chrome||_.gecko){let p=zn(i,a).getBoundingClientRect();Math.abs(p.left-f.right)<.1&&(u=!d)}if(h<=0)return{node:i,offset:a+(u?1:0)};o=a+(u?1:0),s=h}}}return{node:i,offset:o>-1?o:r>0?i.nodeValue.length:0}}function Md(i,e,t,n=-1){var o,s;let r=i.contentDOM.getBoundingClientRect(),a=r.top+i.viewState.paddingTop,l,{docHeight:c}=i.viewState,{x:f,y:h}=e,d=h-a;if(d<0)return 0;if(d>c)return i.state.doc.length;for(let v=i.viewState.heightOracle.textHeight/2,C=!1;l=i.elementAtHeight(d),l.type!=Ht.Text;)for(;d=n>0?l.bottom+v:l.top-v,!(d>=0&&d<=c);){if(C)return t?null:0;C=!0,n=-n}h=a+d;let u=l.from;if(u<i.viewport.from)return i.viewport.from==0?0:t?null:Ql(i,r,l,f,h);if(u>i.viewport.to)return i.viewport.to==i.state.doc.length?i.state.doc.length:t?null:Ql(i,r,l,f,h);let p=i.dom.ownerDocument,g=i.root.elementFromPoint?i.root:p,m=g.elementFromPoint(f,h);m&&!i.contentDOM.contains(m)&&(m=null),m||(f=Math.max(r.left+1,Math.min(r.right-1,f)),m=g.elementFromPoint(f,h),m&&!i.contentDOM.contains(m)&&(m=null));let b,y=-1;if(m&&((o=i.docView.nearest(m))===null||o===void 0?void 0:o.isEditable)!=!1){if(p.caretPositionFromPoint){let v=p.caretPositionFromPoint(f,h);v&&({offsetNode:b,offset:y}=v)}else if(p.caretRangeFromPoint){let v=p.caretRangeFromPoint(f,h);v&&({startContainer:b,startOffset:y}=v)}b&&(!i.contentDOM.contains(b)||_.safari&&x0(b,y,f)||_.chrome&&S0(b,y,f))&&(b=void 0),b&&(y=Math.min(Wt(b),y))}if(!b||!i.docView.dom.contains(b)){let v=De.find(i.docView,u);if(!v)return d>l.top+l.height/2?l.to:l.from;({node:b,offset:y}=aa(v.dom,f,h))}let x=i.docView.nearest(b);if(!x)return null;if(x.isWidget&&((s=x.dom)===null||s===void 0?void 0:s.nodeType)==1){let v=x.dom.getBoundingClientRect();return e.y<v.top||e.y<=v.bottom&&e.x<=(v.left+v.right)/2?x.posAtStart:x.posAtEnd}else return x.localPosFromDOM(b,y)+x.posAtStart}function Ql(i,e,t,n,o){let s=Math.round((n-e.left)*i.defaultCharacterWidth);if(i.lineWrapping&&t.height>i.defaultLineHeight*1.5){let a=i.viewState.heightOracle.textHeight,l=Math.floor((o-t.top-(i.defaultLineHeight-a)*.5)/a);s+=l*i.viewState.heightOracle.lineLength}let r=i.state.sliceDoc(t.from,t.to);return t.from+Bb(r,s,i.state.tabSize)}function Ad(i,e,t){let n,o=i;if(i.nodeType!=3||e!=(n=i.nodeValue.length))return!1;for(;;){let s=o.nextSibling;if(s){if(s.nodeName=="BR")break;return!1}else{let r=o.parentNode;if(!r||r.nodeName=="DIV")break;o=r}}return zn(i,n-1,n).getBoundingClientRect().right>t}function x0(i,e,t){return Ad(i,e,t)}function S0(i,e,t){if(e!=0)return Ad(i,e,t);for(let o=i;;){let s=o.parentNode;if(!s||s.nodeType!=1||s.firstChild!=o)return!1;if(s.classList.contains("cm-line"))break;o=s}let n=i.nodeType==1?i.getBoundingClientRect():zn(i,0,Math.max(i.nodeValue.length,1)).getBoundingClientRect();return t-n.left>5}function k0(i,e,t){let n=i.lineBlockAt(e);if(Array.isArray(n.type)){let o;for(let s of n.type){if(s.from>e)break;if(!(s.to<e)){if(s.from<e&&s.to>e)return s;(!o||s.type==Ht.Text&&(o.type!=s.type||(t<0?s.from<e:s.to>e)))&&(o=s)}}return o||n}return n}function C0(i,e,t,n){let o=k0(i,e.head,e.assoc||-1),s=!n||o.type!=Ht.Text||!(i.lineWrapping||o.widgetLineBreaks)?null:i.coordsAtPos(e.assoc<0&&e.head>o.from?e.head-1:e.head);if(s){let r=i.dom.getBoundingClientRect(),a=i.textDirectionAt(o.from),l=i.posAtCoords({x:t==(a==Pe.LTR)?r.right-1:r.left+1,y:(s.top+s.bottom)/2});if(l!=null)return R.cursor(l,t?-1:1)}return R.cursor(t?o.to:o.from,t?-1:1)}function Zl(i,e,t,n){let o=i.state.doc.lineAt(e.head),s=i.bidiSpans(o),r=i.textDirectionAt(o.from);for(let a=e,l=null;;){let c=a0(o,s,r,a,t),f=fd;if(!c){if(o.number==(t?i.state.doc.lines:1))return a;f=`
`,o=i.state.doc.line(o.number+(t?1:-1)),s=i.bidiSpans(o),c=i.visualLineSide(o,!t)}if(l){if(!l(f))return a}else{if(!n)return c;l=n(f)}a=c}}function M0(i,e,t){let n=i.state.charCategorizer(e),o=n(t);return s=>{let r=n(s);return o==Qt.Space&&(o=r),o==r}}function A0(i,e,t,n){let o=e.head,s=t?1:-1;if(o==(t?i.state.doc.length:0))return R.cursor(o,e.assoc);let r=e.goalColumn,a,l=i.contentDOM.getBoundingClientRect(),c=i.coordsAtPos(o,e.assoc||-1),f=i.documentTop;if(c)r==null&&(r=c.left-l.left),a=s<0?c.top:c.bottom;else{let u=i.viewState.lineBlockAt(o);r==null&&(r=Math.min(l.right-l.left,i.defaultCharacterWidth*(o-u.from))),a=(s<0?u.top:u.bottom)+f}let h=l.left+r,d=n??i.viewState.heightOracle.textHeight>>1;for(let u=0;;u+=10){let p=a+(d+u)*s,g=Md(i,{x:h,y:p},!1,s);if(p<l.top||p>l.bottom||(s<0?g<o:g>o)){let m=i.docView.coordsForChar(g),b=!m||p<m.top?-1:1;return R.cursor(g,b,void 0,r)}}}function Vi(i,e,t){for(;;){let n=0;for(let o of i)o.between(e-1,e+1,(s,r,a)=>{if(e>s&&e<r){let l=n||t||(e-s<r-e?-1:1);e=l<0?s:r,n=l}});if(!n)return e}}function Id(i,e){let t=null;for(let n=0;n<e.ranges.length;n++){let o=e.ranges[n],s=null;if(o.empty){let r=Vi(i,o.from,0);r!=o.from&&(s=R.cursor(r,-1))}else{let r=Vi(i,o.from,-1),a=Vi(i,o.to,1);(r!=o.from||a!=o.to)&&(s=R.range(o.from==o.anchor?r:a,o.from==o.head?r:a))}s&&(t||(t=e.ranges.slice()),t[n]=s)}return t?R.create(t,e.mainIndex):e}function tr(i,e,t){let n=Vi(i.state.facet(fo).map(o=>o(i)),t.from,e.head>t.from?-1:1);return n==t.from?t:R.cursor(n,n<t.from?1:-1)}const Ni="￿";class I0{constructor(e,t){this.points=e,this.text="",this.lineSeparator=t.facet(oe.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=Ni}readRange(e,t){if(!e)return this;let n=e.parentNode;for(let o=e;;){this.findPointBefore(n,o);let s=this.text.length;this.readNode(o);let r=o.nextSibling;if(r==t)break;let a=ae.get(o),l=ae.get(r);(a&&l?a.breakAfter:(a?a.breakAfter:ls(o))||ls(r)&&(o.nodeName!="BR"||o.cmIgnore)&&this.text.length>s)&&!D0(r,t)&&this.lineBreak(),o=r}return this.findPointBefore(n,t),this}readTextNode(e){let t=e.nodeValue;for(let n of this.points)n.node==e&&(n.pos=this.text.length+Math.min(n.offset,t.length));for(let n=0,o=this.lineSeparator?null:/\r\n?|\n/g;;){let s=-1,r=1,a;if(this.lineSeparator?(s=t.indexOf(this.lineSeparator,n),r=this.lineSeparator.length):(a=o.exec(t))&&(s=a.index,r=a[0].length),this.append(t.slice(n,s<0?t.length:s)),s<0)break;if(this.lineBreak(),r>1)for(let l of this.points)l.node==e&&l.pos>this.text.length&&(l.pos-=r-1);n=s+r}}readNode(e){if(e.cmIgnore)return;let t=ae.get(e),n=t&&t.overrideDOMText;if(n!=null){this.findPointInside(e,n.length);for(let o=n.iter();!o.next().done;)o.lineBreak?this.lineBreak():this.append(o.value)}else e.nodeType==3?this.readTextNode(e):e.nodeName=="BR"?e.nextSibling&&this.lineBreak():e.nodeType==1&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let n of this.points)n.node==e&&e.childNodes[n.offset]==t&&(n.pos=this.text.length)}findPointInside(e,t){for(let n of this.points)(e.nodeType==3?n.node==e:e.contains(n.node))&&(n.pos=this.text.length+(T0(e,n.node,n.offset)?t:0))}}function T0(i,e,t){for(;;){if(!e||t<Wt(e))return!1;if(e==i)return!0;t=Vn(e)+1,e=e.parentNode}}function D0(i,e){let t;for(;!(i==e||!i);i=i.nextSibling){let n=ae.get(i);if(!(n?.isWidget||i.cmIgnore))return!1;n&&(t||(t=[])).push(n)}if(t)for(let n of t){let o=n.overrideDOMText;if(o?.length)return!1}return!0}class ec{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}}class P0{constructor(e,t,n,o){this.typeOver=o,this.bounds=null,this.text="",this.domChanged=t>-1;let{impreciseHead:s,impreciseAnchor:r}=e.docView;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=e.docView.domBoundsAround(t,n,0))){let a=s||r?[]:O0(e),l=new I0(a,e.state);l.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=l.text,this.newSel=E0(a,this.bounds.from)}else{let a=e.observer.selectionRange,l=s&&s.node==a.focusNode&&s.offset==a.focusOffset||!Zr(e.contentDOM,a.focusNode)?e.state.selection.main.head:e.docView.posFromDOM(a.focusNode,a.focusOffset),c=r&&r.node==a.anchorNode&&r.offset==a.anchorOffset||!Zr(e.contentDOM,a.anchorNode)?e.state.selection.main.anchor:e.docView.posFromDOM(a.anchorNode,a.anchorOffset),f=e.viewport;if((_.ios||_.chrome)&&e.state.selection.main.empty&&l!=c&&(f.from>0||f.to<e.state.doc.length)){let h=Math.min(l,c),d=Math.max(l,c),u=f.from-h,p=f.to-d;(u==0||u==1||h==0)&&(p==0||p==-1||d==e.state.doc.length)&&(l=0,c=e.state.doc.length)}e.inputState.composing>-1&&e.state.selection.ranges.length>1?this.newSel=e.state.selection.replaceRange(R.range(c,l)):this.newSel=R.single(c,l)}}}function Td(i,e){let t,{newSel:n}=e,o=i.state.selection.main,s=i.inputState.lastKeyTime>Date.now()-100?i.inputState.lastKeyCode:-1;if(e.bounds){let{from:r,to:a}=e.bounds,l=o.from,c=null;(s===8||_.android&&e.text.length<a-r)&&(l=o.to,c="end");let f=Dd(i.state.doc.sliceString(r,a,Ni),e.text,l-r,c);f&&(_.chrome&&s==13&&f.toB==f.from+2&&e.text.slice(f.from,f.toB)==Ni+Ni&&f.toB--,t={from:r+f.from,to:r+f.toA,insert:ee.of(e.text.slice(f.from,f.toB).split(Ni))})}else n&&(!i.hasFocus&&i.state.facet(Jt)||n.main.eq(o))&&(n=null);if(!t&&!n)return!1;if(!t&&e.typeOver&&!o.empty&&n&&n.main.empty?t={from:o.from,to:o.to,insert:i.state.doc.slice(o.from,o.to)}:(_.mac||_.android)&&t&&t.from==t.to&&t.from==o.head-1&&/^\. ?$/.test(t.insert.toString())&&i.contentDOM.getAttribute("autocorrect")=="off"?(n&&t.insert.length==2&&(n=R.single(n.main.anchor-1,n.main.head-1)),t={from:t.from,to:t.to,insert:ee.of([t.insert.toString().replace("."," ")])}):t&&t.from>=o.from&&t.to<=o.to&&(t.from!=o.from||t.to!=o.to)&&o.to-o.from-(t.to-t.from)<=4?t={from:o.from,to:o.to,insert:i.state.doc.slice(o.from,t.from).append(t.insert).append(i.state.doc.slice(t.to,o.to))}:i.state.doc.lineAt(o.from).to<o.to&&i.docView.lineHasWidget(o.to)&&i.inputState.insertingTextAt>Date.now()-50?t={from:o.from,to:o.to,insert:i.state.toText(i.inputState.insertingText)}:_.chrome&&t&&t.from==t.to&&t.from==o.head&&t.insert.toString()==`
 `&&i.lineWrapping&&(n&&(n=R.single(n.main.anchor-1,n.main.head-1)),t={from:o.from,to:o.to,insert:ee.of([" "])}),t)return Ua(i,t,n,s);if(n&&!n.main.eq(o)){let r=!1,a="select";return i.inputState.lastSelectionTime>Date.now()-50&&(i.inputState.lastSelectionOrigin=="select"&&(r=!0),a=i.inputState.lastSelectionOrigin,a=="select.pointer"&&(n=Id(i.state.facet(fo).map(l=>l(i)),n))),i.dispatch({selection:n,scrollIntoView:r,userEvent:a}),!0}else return!1}function Ua(i,e,t,n=-1){if(_.ios&&i.inputState.flushIOSKey(e))return!0;let o=i.state.selection.main;if(_.android&&(e.to==o.to&&(e.from==o.from||e.from==o.from-1&&i.state.sliceDoc(e.from,o.from)==" ")&&e.insert.length==1&&e.insert.lines==2&&ii(i.contentDOM,"Enter",13)||(e.from==o.from-1&&e.to==o.to&&e.insert.length==0||n==8&&e.insert.length<e.to-e.from&&e.to>o.head)&&ii(i.contentDOM,"Backspace",8)||e.from==o.from&&e.to==o.to+1&&e.insert.length==0&&ii(i.contentDOM,"Delete",46)))return!0;let s=e.insert.toString();i.inputState.composing>=0&&i.inputState.composing++;let r,a=()=>r||(r=L0(i,e,t));return i.state.facet(gd).some(l=>l(i,e.from,e.to,s,a))||i.dispatch(a()),!0}function L0(i,e,t){let n,o=i.state,s=o.selection.main,r=-1;if(e.from==e.to&&e.from<s.from||e.from>s.to){let l=e.from<s.from?-1:1,c=l<0?s.from:s.to,f=Vi(o.facet(fo).map(h=>h(i)),c,l);e.from==f&&(r=f)}if(r>-1)n={changes:e,selection:R.cursor(e.from+e.insert.length,-1)};else if(e.from>=s.from&&e.to<=s.to&&e.to-e.from>=(s.to-s.from)/3&&(!t||t.main.empty&&t.main.from==e.from+e.insert.length)&&i.inputState.composing<0){let l=s.from<e.from?o.sliceDoc(s.from,e.from):"",c=s.to>e.to?o.sliceDoc(e.to,s.to):"";n=o.replaceSelection(i.state.toText(l+e.insert.sliceString(0,void 0,i.state.lineBreak)+c))}else{let l=o.changes(e),c=t&&t.main.to<=l.newLength?t.main:void 0;if(o.selection.ranges.length>1&&(i.inputState.composing>=0||i.inputState.compositionPendingChange)&&e.to<=s.to+10&&e.to>=s.to-10){let f=i.state.sliceDoc(e.from,e.to),h,d=t&&Cd(i,t.main.head);if(d){let p=e.insert.length-(e.to-e.from);h={from:d.from,to:d.to-p}}else h=i.state.doc.lineAt(s.head);let u=s.to-e.to;n=o.changeByRange(p=>{if(p.from==s.from&&p.to==s.to)return{changes:l,range:c||p.map(l)};let g=p.to-u,m=g-f.length;if(i.state.sliceDoc(m,g)!=f||g>=h.from&&m<=h.to)return{range:p};let b=o.changes({from:m,to:g,insert:e.insert}),y=p.to-s.to;return{changes:b,range:c?R.range(Math.max(0,c.anchor+y),Math.max(0,c.head+y)):p.map(b)}})}else n={changes:l,selection:c&&o.selection.replaceRange(c)}}let a="input.type";return(i.composing||i.inputState.compositionPendingChange&&i.inputState.compositionEndedAt>Date.now()-50)&&(i.inputState.compositionPendingChange=!1,a+=".compose",i.inputState.compositionFirstChange&&(a+=".start",i.inputState.compositionFirstChange=!1)),o.update(n,{userEvent:a,scrollIntoView:!0})}function Dd(i,e,t,n){let o=Math.min(i.length,e.length),s=0;for(;s<o&&i.charCodeAt(s)==e.charCodeAt(s);)s++;if(s==o&&i.length==e.length)return null;let r=i.length,a=e.length;for(;r>0&&a>0&&i.charCodeAt(r-1)==e.charCodeAt(a-1);)r--,a--;if(n=="end"){let l=Math.max(0,s-Math.min(r,a));t-=r+l-s}if(r<s&&i.length<e.length){let l=t<=s&&t>=r?s-t:0;s-=l,a=s+(a-r),r=s}else if(a<s){let l=t<=s&&t>=a?s-t:0;s-=l,r=s+(r-a),a=s}return{from:s,toA:r,toB:a}}function O0(i){let e=[];if(i.root.activeElement!=i.contentDOM)return e;let{anchorNode:t,anchorOffset:n,focusNode:o,focusOffset:s}=i.observer.selectionRange;return t&&(e.push(new ec(t,n)),(o!=t||s!=n)&&e.push(new ec(o,s))),e}function E0(i,e){if(i.length==0)return null;let t=i[0].pos,n=i.length==2?i[1].pos:t;return t>-1&&n>-1?R.single(t+e,n+e):null}class N0{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.lastTouchTime=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.pendingIOSKey=void 0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText="",this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,_.safari&&e.contentDOM.addEventListener("input",()=>null),_.gecko&&X0(e.contentDOM.ownerDocument)}handleEvent(e){!H0(this.view,e)||this.ignoreDuringComposition(e)||e.type=="keydown"&&this.keydown(e)||(this.view.updateState!=0?Promise.resolve().then(()=>this.runHandlers(e.type,e)):this.runHandlers(e.type,e))}runHandlers(e,t){let n=this.handlers[e];if(n){for(let o of n.observers)o(this.view,t);for(let o of n.handlers){if(t.defaultPrevented)break;if(o(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=R0(e),n=this.handlers,o=this.view.contentDOM;for(let s in t)if(s!="scroll"){let r=!t[s].handlers.length,a=n[s];a&&r!=!a.handlers.length&&(o.removeEventListener(s,this.handleEvent),a=null),a||o.addEventListener(s,this.handleEvent,{passive:r})}for(let s in n)s!="scroll"&&!t[s]&&o.removeEventListener(s,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Ld.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),_.android&&_.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;let t;return _.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&((t=Pd.find(n=>n.keyCode==e.keyCode))&&!e.ctrlKey||B0.indexOf(e.key)>-1&&e.ctrlKey&&!e.shiftKey)?(this.pendingIOSKey=t||e,setTimeout(()=>this.flushIOSKey(),250),!0):(e.keyCode!=229&&this.view.observer.forceFlush(),!1)}flushIOSKey(e){let t=this.pendingIOSKey;return!t||t.key=="Enter"&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,ii(this.view.contentDOM,t.key,t.keyCode,t instanceof KeyboardEvent?t:void 0))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:_.safari&&!_.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}}function tc(i,e){return(t,n)=>{try{return e.call(i,n,t)}catch(o){dt(t.state,o)}}}function R0(i){let e=Object.create(null);function t(n){return e[n]||(e[n]={observers:[],handlers:[]})}for(let n of i){let o=n.spec,s=o&&o.plugin.domEventHandlers,r=o&&o.plugin.domEventObservers;if(s)for(let a in s){let l=s[a];l&&t(a).handlers.push(tc(n.value,l))}if(r)for(let a in r){let l=r[a];l&&t(a).observers.push(tc(n.value,l))}}for(let n in Dt)t(n).handlers.push(Dt[n]);for(let n in kt)t(n).observers.push(kt[n]);return e}const Pd=[{key:"Backspace",keyCode:8,inputType:"deleteContentBackward"},{key:"Enter",keyCode:13,inputType:"insertParagraph"},{key:"Enter",keyCode:13,inputType:"insertLineBreak"},{key:"Delete",keyCode:46,inputType:"deleteContentForward"}],B0="dthko",Ld=[16,17,18,20,91,92,224,225],Ao=6;function Io(i){return Math.max(0,i)*.7+8}function _0(i,e){return Math.max(Math.abs(i.clientX-e.clientX),Math.abs(i.clientY-e.clientY))}class $0{constructor(e,t,n,o){this.view=e,this.startEvent=t,this.style=n,this.mustSelect=o,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=Wb(e.contentDOM),this.atoms=e.state.facet(fo).map(r=>r(e));let s=e.contentDOM.ownerDocument;s.addEventListener("mousemove",this.move=this.move.bind(this)),s.addEventListener("mouseup",this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(oe.allowMultipleSelections)&&F0(e,t),this.dragging=z0(e,t)&&Nd(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&_0(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,n=0,o=0,s=0,r=this.view.win.innerWidth,a=this.view.win.innerHeight;this.scrollParents.x&&({left:o,right:r}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:s,bottom:a}=this.scrollParents.y.getBoundingClientRect());let l=ja(this.view);e.clientX-l.left<=o+Ao?t=-Io(o-e.clientX):e.clientX+l.right>=r-Ao&&(t=Io(e.clientX-r)),e.clientY-l.top<=s+Ao?n=-Io(s-e.clientY):e.clientY+l.bottom>=a-Ao&&(n=Io(e.clientY-a)),this.setScrollSpeed(t,n)}up(e){this.dragging==null&&this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener("mousemove",this.move),e.removeEventListener("mouseup",this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:t}=this,n=Id(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!n.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:n,userEvent:"select.pointer"}),this.mustSelect=!1}update(e){e.transactions.some(t=>t.isUserEvent("input.type"))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}}function F0(i,e){let t=i.state.facet(hd);return t.length?t[0](e):_.mac?e.metaKey:e.ctrlKey}function V0(i,e){let t=i.state.facet(dd);return t.length?t[0](e):_.mac?!e.altKey:!e.ctrlKey}function z0(i,e){let{main:t}=i.state.selection;if(t.empty)return!1;let n=to(i.root);if(!n||n.rangeCount==0)return!0;let o=n.getRangeAt(0).getClientRects();for(let s=0;s<o.length;s++){let r=o[s];if(r.left<=e.clientX&&r.right>=e.clientX&&r.top<=e.clientY&&r.bottom>=e.clientY)return!0}return!1}function H0(i,e){if(!e.bubbles)return!0;if(e.defaultPrevented)return!1;for(let t=e.target,n;t!=i.contentDOM;t=t.parentNode)if(!t||t.nodeType==11||(n=ae.get(t))&&n.ignoreEvent(e))return!1;return!0}const Dt=Object.create(null),kt=Object.create(null),Od=_.ie&&_.ie_version<15||_.ios&&_.webkit_version<604;function q0(i){let e=i.dom.parentNode;if(!e)return;let t=e.appendChild(document.createElement("textarea"));t.style.cssText="position: fixed; left: -10000px; top: 10px",t.focus(),setTimeout(()=>{i.focus(),t.remove(),Ed(i,t.value)},50)}function Es(i,e,t){for(let n of i.facet(e))t=n(t,i);return t}function Ed(i,e){e=Es(i.state,Ha,e);let{state:t}=i,n,o=1,s=t.toText(e),r=s.lines==t.selection.ranges.length;if(la!=null&&t.selection.ranges.every(l=>l.empty)&&la==s.toString()){let l=-1;n=t.changeByRange(c=>{let f=t.doc.lineAt(c.from);if(f.from==l)return{range:c};l=f.from;let h=t.toText((r?s.line(o++).text:e)+t.lineBreak);return{changes:{from:f.from,insert:h},range:R.cursor(c.from+h.length)}})}else r?n=t.changeByRange(l=>{let c=s.line(o++);return{changes:{from:l.from,to:l.to,insert:c.text},range:R.cursor(l.from+c.length)}}):n=t.replaceSelection(s);i.dispatch(n,{userEvent:"input.paste",scrollIntoView:!0})}kt.scroll=i=>{i.inputState.lastScrollTop=i.scrollDOM.scrollTop,i.inputState.lastScrollLeft=i.scrollDOM.scrollLeft};Dt.keydown=(i,e)=>(i.inputState.setSelectionOrigin("select"),e.keyCode==27&&i.inputState.tabFocusMode!=0&&(i.inputState.tabFocusMode=Date.now()+2e3),!1);kt.touchstart=(i,e)=>{i.inputState.lastTouchTime=Date.now(),i.inputState.setSelectionOrigin("select.pointer")};kt.touchmove=i=>{i.inputState.setSelectionOrigin("select.pointer")};Dt.mousedown=(i,e)=>{if(i.observer.flush(),i.inputState.lastTouchTime>Date.now()-2e3)return!1;let t=null;for(let n of i.state.facet(ud))if(t=n(i,e),t)break;if(!t&&e.button==0&&(t=U0(i,e)),t){let n=!i.hasFocus;i.inputState.startMouseSelection(new $0(i,e,t,n)),n&&i.observer.ignore(()=>{Yh(i.contentDOM);let s=i.root.activeElement;s&&!s.contains(i.contentDOM)&&s.blur()});let o=i.inputState.mouseSelection;if(o)return o.start(e),o.dragging===!1}else i.inputState.setSelectionOrigin("select.pointer");return!1};function nc(i,e,t,n){if(n==1)return R.cursor(e,t);if(n==2)return y0(i.state,e,t);{let o=De.find(i.docView,e),s=i.state.doc.lineAt(o?o.posAtEnd:e),r=o?o.posAtStart:s.from,a=o?o.posAtEnd:s.to;return a<i.state.doc.length&&a==s.to&&a++,R.range(r,a)}}let ic=(i,e,t)=>e>=t.top&&e<=t.bottom&&i>=t.left&&i<=t.right;function W0(i,e,t,n){let o=De.find(i.docView,e);if(!o)return 1;let s=e-o.posAtStart;if(s==0)return 1;if(s==o.length)return-1;let r=o.coordsAt(s,-1);if(r&&ic(t,n,r))return-1;let a=o.coordsAt(s,1);return a&&ic(t,n,a)?1:r&&r.bottom>=n?-1:1}function oc(i,e){let t=i.posAtCoords({x:e.clientX,y:e.clientY},!1);return{pos:t,bias:W0(i,t,e.clientX,e.clientY)}}const j0=_.ie&&_.ie_version<=11;let sc=null,rc=0,ac=0;function Nd(i){if(!j0)return i.detail;let e=sc,t=ac;return sc=i,ac=Date.now(),rc=!e||t>Date.now()-400&&Math.abs(e.clientX-i.clientX)<2&&Math.abs(e.clientY-i.clientY)<2?(rc+1)%3:1}function U0(i,e){let t=oc(i,e),n=Nd(e),o=i.state.selection;return{update(s){s.docChanged&&(t.pos=s.changes.mapPos(t.pos),o=o.map(s.changes))},get(s,r,a){let l=oc(i,s),c,f=nc(i,l.pos,l.bias,n);if(t.pos!=l.pos&&!r){let h=nc(i,t.pos,t.bias,n),d=Math.min(h.from,f.from),u=Math.max(h.to,f.to);f=d<f.from?R.range(d,u):R.range(u,d)}return r?o.replaceRange(o.main.extend(f.from,f.to)):a&&n==1&&o.ranges.length>1&&(c=G0(o,l.pos))?c:a?o.addRange(f):R.create([f])}}}function G0(i,e){for(let t=0;t<i.ranges.length;t++){let{from:n,to:o}=i.ranges[t];if(n<=e&&o>=e)return R.create(i.ranges.slice(0,t).concat(i.ranges.slice(t+1)),i.mainIndex==t?0:i.mainIndex-(i.mainIndex>t?1:0))}return null}Dt.dragstart=(i,e)=>{let{selection:{main:t}}=i.state;if(e.target.draggable){let o=i.docView.nearest(e.target);if(o&&o.isWidget){let s=o.posAtStart,r=s+o.length;(s>=t.to||r<=t.from)&&(t=R.range(s,r))}}let{inputState:n}=i;return n.mouseSelection&&(n.mouseSelection.dragging=!0),n.draggedContent=t,e.dataTransfer&&(e.dataTransfer.setData("Text",Es(i.state,qa,i.state.sliceDoc(t.from,t.to))),e.dataTransfer.effectAllowed="copyMove"),!1};Dt.dragend=i=>(i.inputState.draggedContent=null,!1);function lc(i,e,t,n){if(t=Es(i.state,Ha,t),!t)return;let o=i.posAtCoords({x:e.clientX,y:e.clientY},!1),{draggedContent:s}=i.inputState,r=n&&s&&V0(i,e)?{from:s.from,to:s.to}:null,a={from:o,insert:t},l=i.state.changes(r?[r,a]:a);i.focus(),i.dispatch({changes:l,selection:{anchor:l.mapPos(o,-1),head:l.mapPos(o,1)},userEvent:r?"move.drop":"input.drop"}),i.inputState.draggedContent=null}Dt.drop=(i,e)=>{if(!e.dataTransfer)return!1;if(i.state.readOnly)return!0;let t=e.dataTransfer.files;if(t&&t.length){let n=Array(t.length),o=0,s=()=>{++o==t.length&&lc(i,e,n.filter(r=>r!=null).join(i.state.lineBreak),!1)};for(let r=0;r<t.length;r++){let a=new FileReader;a.onerror=s,a.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(a.result)||(n[r]=a.result),s()},a.readAsText(t[r])}return!0}else{let n=e.dataTransfer.getData("Text");if(n)return lc(i,e,n,!0),!0}return!1};Dt.paste=(i,e)=>{if(i.state.readOnly)return!0;i.observer.flush();let t=Od?null:e.clipboardData;return t?(Ed(i,t.getData("text/plain")||t.getData("text/uri-list")),!0):(q0(i),!1)};function Y0(i,e){let t=i.dom.parentNode;if(!t)return;let n=t.appendChild(document.createElement("textarea"));n.style.cssText="position: fixed; left: -10000px; top: 10px",n.value=e,n.focus(),n.selectionEnd=e.length,n.selectionStart=0,setTimeout(()=>{n.remove(),i.focus()},50)}function K0(i){let e=[],t=[],n=!1;for(let o of i.selection.ranges)o.empty||(e.push(i.sliceDoc(o.from,o.to)),t.push(o));if(!e.length){let o=-1;for(let{from:s}of i.selection.ranges){let r=i.doc.lineAt(s);r.number>o&&(e.push(r.text),t.push({from:r.from,to:Math.min(i.doc.length,r.to+1)})),o=r.number}n=!0}return{text:Es(i,qa,e.join(i.lineBreak)),ranges:t,linewise:n}}let la=null;Dt.copy=Dt.cut=(i,e)=>{let{text:t,ranges:n,linewise:o}=K0(i.state);if(!t&&!o)return!1;la=o?t:null,e.type=="cut"&&!i.state.readOnly&&i.dispatch({changes:n,scrollIntoView:!0,userEvent:"delete.cut"});let s=Od?null:e.clipboardData;return s?(s.clearData(),s.setData("text/plain",t),!0):(Y0(i,t),!1)};const Rd=Gn.define();function Bd(i,e){let t=[];for(let n of i.facet(md)){let o=n(i,e);o&&t.push(o)}return t.length?i.update({effects:t,annotations:Rd.of(!0)}):null}function _d(i){setTimeout(()=>{let e=i.hasFocus;if(e!=i.inputState.notifiedFocused){let t=Bd(i.state,e);t?i.dispatch(t):i.update([])}},10)}kt.focus=i=>{i.inputState.lastFocusTime=Date.now(),!i.scrollDOM.scrollTop&&(i.inputState.lastScrollTop||i.inputState.lastScrollLeft)&&(i.scrollDOM.scrollTop=i.inputState.lastScrollTop,i.scrollDOM.scrollLeft=i.inputState.lastScrollLeft),_d(i)};kt.blur=i=>{i.observer.clearSelectionRange(),_d(i)};kt.compositionstart=kt.compositionupdate=i=>{i.observer.editContext||(i.inputState.compositionFirstChange==null&&(i.inputState.compositionFirstChange=!0),i.inputState.composing<0&&(i.inputState.composing=0))};kt.compositionend=i=>{i.observer.editContext||(i.inputState.composing=-1,i.inputState.compositionEndedAt=Date.now(),i.inputState.compositionPendingKey=!0,i.inputState.compositionPendingChange=i.observer.pendingRecords().length>0,i.inputState.compositionFirstChange=null,_.chrome&&_.android?i.observer.flushSoon():i.inputState.compositionPendingChange?Promise.resolve().then(()=>i.observer.flush()):setTimeout(()=>{i.inputState.composing<0&&i.docView.hasComposition&&i.update([])},50))};kt.contextmenu=i=>{i.inputState.lastContextMenu=Date.now()};Dt.beforeinput=(i,e)=>{var t,n;if((e.inputType=="insertText"||e.inputType=="insertCompositionText")&&(i.inputState.insertingText=e.data,i.inputState.insertingTextAt=Date.now()),e.inputType=="insertReplacementText"&&i.observer.editContext){let s=(t=e.dataTransfer)===null||t===void 0?void 0:t.getData("text/plain"),r=e.getTargetRanges();if(s&&r.length){let a=r[0],l=i.posAtDOM(a.startContainer,a.startOffset),c=i.posAtDOM(a.endContainer,a.endOffset);return Ua(i,{from:l,to:c,insert:i.state.toText(s)},null),!0}}let o;if(_.chrome&&_.android&&(o=Pd.find(s=>s.inputType==e.inputType))&&(i.observer.delayAndroidKey(o.key,o.keyCode),o.key=="Backspace"||o.key=="Delete")){let s=((n=window.visualViewport)===null||n===void 0?void 0:n.height)||0;setTimeout(()=>{var r;(((r=window.visualViewport)===null||r===void 0?void 0:r.height)||0)>s+10&&i.hasFocus&&(i.contentDOM.blur(),i.focus())},100)}return _.ios&&e.inputType=="deleteContentForward"&&i.observer.flushSoon(),_.safari&&e.inputType=="insertText"&&i.inputState.composing>=0&&setTimeout(()=>kt.compositionend(i,e),20),!1};const cc=new Set;function X0(i){cc.has(i)||(cc.add(i),i.addEventListener("copy",()=>{}),i.addEventListener("cut",()=>{}))}const fc=["pre-wrap","normal","pre-line","break-spaces"];let gi=!1;function hc(){gi=!1}class J0{constructor(e){this.lineWrapping=e,this.doc=ee.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let n=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(n+=Math.max(0,Math.ceil((t-e-n*this.lineLength*.5)/this.lineLength))),this.lineHeight*n}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return fc.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let n=0;n<e.length;n++){let o=e[n];o<0?n++:this.heightSamples[Math.floor(o*10)]||(t=!0,this.heightSamples[Math.floor(o*10)]=!0)}return t}refresh(e,t,n,o,s,r){let a=fc.indexOf(e)>-1,l=Math.round(t)!=Math.round(this.lineHeight)||this.lineWrapping!=a;if(this.lineWrapping=a,this.lineHeight=t,this.charWidth=n,this.textHeight=o,this.lineLength=s,l){this.heightSamples={};for(let c=0;c<r.length;c++){let f=r[c];f<0?c++:this.heightSamples[Math.floor(f*10)]=!0}}return l}}class Q0{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}}class zt{constructor(e,t,n,o,s){this.from=e,this.length=t,this.top=n,this.height=o,this._content=s}get type(){return typeof this._content=="number"?Ht.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof yn?this._content.widget:null}get widgetLineBreaks(){return typeof this._content=="number"?this._content:0}join(e){let t=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(e._content)?e._content:[e]);return new zt(this.from,this.length+e.length,this.top,this.height+e.height,t)}}var ge=(function(i){return i[i.ByPos=0]="ByPos",i[i.ByHeight=1]="ByHeight",i[i.ByPosNoHeight=2]="ByPosNoHeight",i})(ge||(ge={}));const Go=.001;class et{constructor(e,t,n=2){this.length=e,this.height=t,this.flags=n}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>Go&&(gi=!0),this.height=e)}replace(e,t,n){return et.of(n)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,n,o){let s=this,r=n.doc;for(let a=o.length-1;a>=0;a--){let{fromA:l,toA:c,fromB:f,toB:h}=o[a],d=s.lineAt(l,ge.ByPosNoHeight,n.setDoc(t),0,0),u=d.to>=c?d:s.lineAt(c,ge.ByPosNoHeight,n,0,0);for(h+=u.to-c,c=u.to;a>0&&d.from<=o[a-1].toA;)l=o[a-1].fromA,f=o[a-1].fromB,a--,l<d.from&&(d=s.lineAt(l,ge.ByPosNoHeight,n,0,0));f+=d.from-l,l=d.from;let p=Ga.build(n.setDoc(r),e,f,h);s=hs(s,s.replace(l,c,p))}return s.updateHeight(n,0)}static empty(){return new ct(0,0)}static of(e){if(e.length==1)return e[0];let t=0,n=e.length,o=0,s=0;for(;;)if(t==n)if(o>s*2){let a=e[t-1];a.break?e.splice(--t,1,a.left,null,a.right):e.splice(--t,1,a.left,a.right),n+=1+a.break,o-=a.size}else if(s>o*2){let a=e[n];a.break?e.splice(n,1,a.left,null,a.right):e.splice(n,1,a.left,a.right),n+=2+a.break,s-=a.size}else break;else if(o<s){let a=e[t++];a&&(o+=a.size)}else{let a=e[--n];a&&(s+=a.size)}let r=0;return e[t-1]==null?(r=1,t--):e[t]==null&&(r=1,n++),new Z0(et.of(e.slice(0,t)),r,et.of(e.slice(n)))}}function hs(i,e){return i==e?i:(i.constructor!=e.constructor&&(gi=!0),e)}et.prototype.size=1;class $d extends et{constructor(e,t,n){super(e,t),this.deco=n}blockAt(e,t,n,o){return new zt(o,this.length,n,this.height,this.deco||0)}lineAt(e,t,n,o,s){return this.blockAt(0,n,o,s)}forEachLine(e,t,n,o,s,r){e<=s+this.length&&t>=s&&r(this.blockAt(0,n,o,s))}updateHeight(e,t=0,n=!1,o){return o&&o.from<=t&&o.more&&this.setHeight(o.heights[o.index++]),this.outdated=!1,this}toString(){return`block(${this.length})`}}class ct extends $d{constructor(e,t){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0}blockAt(e,t,n,o){return new zt(o,this.length,n,this.height,this.breaks)}replace(e,t,n){let o=n[0];return n.length==1&&(o instanceof ct||o instanceof Ve&&o.flags&4)&&Math.abs(this.length-o.length)<10?(o instanceof Ve?o=new ct(o.length,this.height):o.height=this.height,this.outdated||(o.outdated=!1),o):et.of(n)}updateHeight(e,t=0,n=!1,o){return o&&o.from<=t&&o.more?this.setHeight(o.heights[o.index++]):(n||this.outdated)&&this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`}}class Ve extends et{constructor(e){super(e,0)}heightMetrics(e,t){let n=e.doc.lineAt(t).number,o=e.doc.lineAt(t+this.length).number,s=o-n+1,r,a=0;if(e.lineWrapping){let l=Math.min(this.height,e.lineHeight*s);r=l/s,this.length>s+1&&(a=(this.height-l)/(this.length-s-1))}else r=this.height/s;return{firstLine:n,lastLine:o,perLine:r,perChar:a}}blockAt(e,t,n,o){let{firstLine:s,lastLine:r,perLine:a,perChar:l}=this.heightMetrics(t,o);if(t.lineWrapping){let c=o+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-n)/this.height))*this.length)),f=t.doc.lineAt(c),h=a+f.length*l,d=Math.max(n,e-h/2);return new zt(f.from,f.length,d,h,0)}else{let c=Math.max(0,Math.min(r-s,Math.floor((e-n)/a))),{from:f,length:h}=t.doc.line(s+c);return new zt(f,h,n+a*c,a,0)}}lineAt(e,t,n,o,s){if(t==ge.ByHeight)return this.blockAt(e,n,o,s);if(t==ge.ByPosNoHeight){let{from:u,to:p}=n.doc.lineAt(e);return new zt(u,p-u,0,0,0)}let{firstLine:r,perLine:a,perChar:l}=this.heightMetrics(n,s),c=n.doc.lineAt(e),f=a+c.length*l,h=c.number-r,d=o+a*h+l*(c.from-s-h);return new zt(c.from,c.length,Math.max(o,Math.min(d,o+this.height-f)),f,0)}forEachLine(e,t,n,o,s,r){e=Math.max(e,s),t=Math.min(t,s+this.length);let{firstLine:a,perLine:l,perChar:c}=this.heightMetrics(n,s);for(let f=e,h=o;f<=t;){let d=n.doc.lineAt(f);if(f==e){let p=d.number-a;h+=l*p+c*(e-s-p)}let u=l+c*d.length;r(new zt(d.from,d.length,h,u,0)),h+=u,f=d.to+1}}replace(e,t,n){let o=this.length-t;if(o>0){let s=n[n.length-1];s instanceof Ve?n[n.length-1]=new Ve(s.length+o):n.push(null,new Ve(o-1))}if(e>0){let s=n[0];s instanceof Ve?n[0]=new Ve(e+s.length):n.unshift(new Ve(e-1),null)}return et.of(n)}decomposeLeft(e,t){t.push(new Ve(e-1),null)}decomposeRight(e,t){t.push(null,new Ve(this.length-e-1))}updateHeight(e,t=0,n=!1,o){let s=t+this.length;if(o&&o.from<=t+this.length&&o.more){let r=[],a=Math.max(t,o.from),l=-1;for(o.from>t&&r.push(new Ve(o.from-t-1).updateHeight(e,t));a<=s&&o.more;){let f=e.doc.lineAt(a).length;r.length&&r.push(null);let h=o.heights[o.index++];l==-1?l=h:Math.abs(h-l)>=Go&&(l=-2);let d=new ct(f,h);d.outdated=!1,r.push(d),a+=f+1}a<=s&&r.push(null,new Ve(s-a).updateHeight(e,a));let c=et.of(r);return(l<0||Math.abs(c.height-this.height)>=Go||Math.abs(l-this.heightMetrics(e,t).perLine)>=Go)&&(gi=!0),hs(this,c)}else(n||this.outdated)&&(this.setHeight(e.heightForGap(t,t+this.length)),this.outdated=!1);return this}toString(){return`gap(${this.length})`}}class Z0 extends et{constructor(e,t,n){super(e.length+t+n.length,e.height+n.height,t|(e.outdated||n.outdated?2:0)),this.left=e,this.right=n,this.size=e.size+n.size}get break(){return this.flags&1}blockAt(e,t,n,o){let s=n+this.left.height;return e<s?this.left.blockAt(e,t,n,o):this.right.blockAt(e,t,s,o+this.left.length+this.break)}lineAt(e,t,n,o,s){let r=o+this.left.height,a=s+this.left.length+this.break,l=t==ge.ByHeight?e<r:e<a,c=l?this.left.lineAt(e,t,n,o,s):this.right.lineAt(e,t,n,r,a);if(this.break||(l?c.to<a:c.from>a))return c;let f=t==ge.ByPosNoHeight?ge.ByPosNoHeight:ge.ByPos;return l?c.join(this.right.lineAt(a,f,n,r,a)):this.left.lineAt(a,f,n,o,s).join(c)}forEachLine(e,t,n,o,s,r){let a=o+this.left.height,l=s+this.left.length+this.break;if(this.break)e<l&&this.left.forEachLine(e,t,n,o,s,r),t>=l&&this.right.forEachLine(e,t,n,a,l,r);else{let c=this.lineAt(l,ge.ByPos,n,o,s);e<c.from&&this.left.forEachLine(e,c.from-1,n,o,s,r),c.to>=e&&c.from<=t&&r(c),t>c.to&&this.right.forEachLine(c.to+1,t,n,a,l,r)}}replace(e,t,n){let o=this.left.length+this.break;if(t<o)return this.balanced(this.left.replace(e,t,n),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-o,t-o,n));let s=[];e>0&&this.decomposeLeft(e,s);let r=s.length;for(let a of n)s.push(a);if(e>0&&dc(s,r-1),t<this.length){let a=s.length;this.decomposeRight(t,s),dc(s,a)}return et.of(s)}decomposeLeft(e,t){let n=this.left.length;if(e<=n)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(n++,e>=n&&t.push(null)),e>n&&this.right.decomposeLeft(e-n,t)}decomposeRight(e,t){let n=this.left.length,o=n+this.break;if(e>=o)return this.right.decomposeRight(e-o,t);e<n&&this.left.decomposeRight(e,t),this.break&&e<o&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?et.of(this.break?[e,null,t]:[e,t]):(this.left=hs(this.left,e),this.right=hs(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,n=!1,o){let{left:s,right:r}=this,a=t+s.length+this.break,l=null;return o&&o.from<=t+s.length&&o.more?l=s=s.updateHeight(e,t,n,o):s.updateHeight(e,t,n),o&&o.from<=a+r.length&&o.more?l=r=r.updateHeight(e,a,n,o):r.updateHeight(e,a,n),l?this.balanced(s,r):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?" ":"-")+this.right}}function dc(i,e){let t,n;i[e]==null&&(t=i[e-1])instanceof Ve&&(n=i[e+1])instanceof Ve&&i.splice(e-1,3,new Ve(t.length+1+n.length))}const ey=5;class Ga{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let n=Math.min(t,this.lineEnd),o=this.nodes[this.nodes.length-1];o instanceof ct?o.length+=n-this.pos:(n>this.pos||!this.isCovered)&&this.nodes.push(new ct(n-this.pos,-1)),this.writtenTo=n,t>n&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,n){if(e<t||n.heightRelevant){let o=n.widget?n.widget.estimatedHeight:0,s=n.widget?n.widget.lineBreaks:0;o<0&&(o=this.oracle.lineHeight);let r=t-e;n.block?this.addBlock(new $d(r,o,n)):(r||s||o>=ey)&&this.addLineDeco(o,s,r)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new ct(this.pos-e,-1)),this.writtenTo=this.pos}blankContent(e,t){let n=new Ve(t-e);return this.oracle.doc.lineAt(e).to==t&&(n.flags|=4),n}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof ct)return e;let t=new ct(0,-1);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos=this.pos+e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,n){let o=this.ensureLine();o.length+=n,o.collapsed+=n,o.widgetHeight=Math.max(o.widgetHeight,e),o.breaks+=t,this.writtenTo=this.pos=this.pos+n}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof ct)&&!this.isCovered?this.nodes.push(new ct(0,-1)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let n=e;for(let o of this.nodes)o instanceof ct&&o.updateHeight(this.oracle,n),n+=o?o.length:1;return this.nodes}static build(e,t,n,o){let s=new Ga(n,e);return me.spans(t,n,o,s,0),s.finish(n)}}function ty(i,e,t){let n=new ny;return me.compare(i,e,t,n,0),n.changes}class ny{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,n,o){(e<t||n&&n.heightRelevant||o&&o.heightRelevant)&&Uo(e,t,this.changes,5)}}function iy(i,e){let t=i.getBoundingClientRect(),n=i.ownerDocument,o=n.defaultView||window,s=Math.max(0,t.left),r=Math.min(o.innerWidth,t.right),a=Math.max(0,t.top),l=Math.min(o.innerHeight,t.bottom);for(let c=i.parentNode;c&&c!=n.body;)if(c.nodeType==1){let f=c,h=window.getComputedStyle(f);if((f.scrollHeight>f.clientHeight||f.scrollWidth>f.clientWidth)&&h.overflow!="visible"){let d=f.getBoundingClientRect();s=Math.max(s,d.left),r=Math.min(r,d.right),a=Math.max(a,d.top),l=Math.min(c==i.parentNode?o.innerHeight:l,d.bottom)}c=h.position=="absolute"||h.position=="fixed"?f.offsetParent:f.parentNode}else if(c.nodeType==11)c=c.host;else break;return{left:s-t.left,right:Math.max(s,r)-t.left,top:a-(t.top+e),bottom:Math.max(a,l)-(t.top+e)}}function oy(i){let e=i.getBoundingClientRect(),t=i.ownerDocument.defaultView||window;return e.left<t.innerWidth&&e.right>0&&e.top<t.innerHeight&&e.bottom>0}function sy(i,e){let t=i.getBoundingClientRect();return{left:0,right:t.right-t.left,top:e,bottom:t.bottom-(t.top+e)}}class nr{constructor(e,t,n,o){this.from=e,this.to=t,this.size=n,this.displaySize=o}static same(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let o=e[n],s=t[n];if(o.from!=s.from||o.to!=s.to||o.size!=s.size)return!1}return!0}draw(e,t){return Oe.replace({widget:new ry(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}}class ry extends Os{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement("div");return this.vertical?e.style.height=this.size+"px":(e.style.width=this.size+"px",e.style.height="2px",e.style.display="inline-block"),e}get estimatedHeight(){return this.vertical?this.size:-1}}class uc{constructor(e){this.state=e,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scrollTop=0,this.scrolledToBottom=!1,this.scaleX=1,this.scaleY=1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=pc,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=Pe.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let t=e.facet(Wa).some(n=>typeof n!="function"&&n.class=="cm-lineWrapping");this.heightOracle=new J0(t),this.stateDeco=e.facet(no).filter(n=>typeof n!="function"),this.heightMap=et.empty().applyChanges(this.stateDeco,ee.empty,this.heightOracle.setDoc(e.doc),[new xt(0,0,0,e.doc.length)]);for(let n=0;n<2&&(this.viewport=this.getViewport(0,null),!!this.updateForViewport());n++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=Oe.set(this.lineGaps.map(n=>n.draw(this,!1))),this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let n=0;n<=1;n++){let o=n?t.head:t.anchor;if(!e.some(({from:s,to:r})=>o>=s&&o<=r)){let{from:s,to:r}=this.lineBlockAt(o);e.push(new To(s,r))}}return this.viewports=e.sort((n,o)=>n.from-o.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?pc:new Ya(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Ri(e,this.scaler))})}update(e,t=null){this.state=e.state;let n=this.stateDeco;this.stateDeco=this.state.facet(no).filter(f=>typeof f!="function");let o=e.changedRanges,s=xt.extendWithRanges(o,ty(n,this.stateDeco,e?e.changes:Re.empty(this.state.doc.length))),r=this.heightMap.height,a=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollTop);hc(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),s),(this.heightMap.height!=r||gi)&&(e.flags|=2),a?(this.scrollAnchorPos=e.changes.mapPos(a.from,-1),this.scrollAnchorHeight=a.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=r);let l=s.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<l.from||t.range.head>l.to)||!this.viewportIsAppropriate(l))&&(l=this.getViewport(0,t));let c=l.from!=this.viewport.from||l.to!=this.viewport.to;this.viewport=l,e.flags|=this.updateForViewport(),(c||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&e.selectionSet&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(c0)&&(this.mustEnforceCursorAssoc=!0)}measure(e){let t=e.contentDOM,n=window.getComputedStyle(t),o=this.heightOracle,s=n.whiteSpace;this.defaultTextDirection=n.direction=="rtl"?Pe.RTL:Pe.LTR;let r=this.heightOracle.mustRefreshForWrapping(s),a=t.getBoundingClientRect(),l=r||this.mustMeasureContent||this.contentDOMHeight!=a.height;this.contentDOMHeight=a.height,this.mustMeasureContent=!1;let c=0,f=0;if(a.width&&a.height){let{scaleX:v,scaleY:C}=Gh(t,a);(v>.005&&Math.abs(this.scaleX-v)>.005||C>.005&&Math.abs(this.scaleY-C)>.005)&&(this.scaleX=v,this.scaleY=C,c|=16,r=l=!0)}let h=(parseInt(n.paddingTop)||0)*this.scaleY,d=(parseInt(n.paddingBottom)||0)*this.scaleY;(this.paddingTop!=h||this.paddingBottom!=d)&&(this.paddingTop=h,this.paddingBottom=d,c|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(o.lineWrapping&&(l=!0),this.editorWidth=e.scrollDOM.clientWidth,c|=16);let u=e.scrollDOM.scrollTop*this.scaleY;this.scrollTop!=u&&(this.scrollAnchorHeight=-1,this.scrollTop=u),this.scrolledToBottom=Xh(e.scrollDOM);let p=(this.printing?sy:iy)(t,this.paddingTop),g=p.top-this.pixelViewport.top,m=p.bottom-this.pixelViewport.bottom;this.pixelViewport=p;let b=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(b!=this.inView&&(this.inView=b,b&&(l=!0)),!this.inView&&!this.scrollTarget&&!oy(e.dom))return 0;let y=a.width;if((this.contentDOMWidth!=y||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=a.width,this.editorHeight=e.scrollDOM.clientHeight,c|=16),l){let v=e.docView.measureVisibleLineHeights(this.viewport);if(o.mustRefreshForHeights(v)&&(r=!0),r||o.lineWrapping&&Math.abs(y-this.contentDOMWidth)>o.charWidth){let{lineHeight:C,charWidth:k,textHeight:S}=e.docView.measureTextSize();r=C>0&&o.refresh(s,C,k,S,Math.max(5,y/k),v),r&&(e.docView.minWidth=0,c|=16)}g>0&&m>0?f=Math.max(g,m):g<0&&m<0&&(f=Math.min(g,m)),hc();for(let C of this.viewports){let k=C.from==this.viewport.from?v:e.docView.measureVisibleLineHeights(C);this.heightMap=(r?et.empty().applyChanges(this.stateDeco,ee.empty,this.heightOracle,[new xt(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(o,0,r,new Q0(C.from,k))}gi&&(c|=2)}let x=!this.viewportIsAppropriate(this.viewport,f)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return x&&(c&2&&(c|=this.updateScaler()),this.viewport=this.getViewport(f,this.scrollTarget),c|=this.updateForViewport()),(c&2||x)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(r?[]:this.lineGaps,e)),c|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),c}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let n=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),o=this.heightMap,s=this.heightOracle,{visibleTop:r,visibleBottom:a}=this,l=new To(o.lineAt(r-n*1e3,ge.ByHeight,s,0,0).from,o.lineAt(a+(1-n)*1e3,ge.ByHeight,s,0,0).to);if(t){let{head:c}=t.range;if(c<l.from||c>l.to){let f=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),h=o.lineAt(c,ge.ByPos,s,0,0),d;t.y=="center"?d=(h.top+h.bottom)/2-f/2:t.y=="start"||t.y=="nearest"&&c<l.from?d=h.top:d=h.bottom-f,l=new To(o.lineAt(d-1e3/2,ge.ByHeight,s,0,0).from,o.lineAt(d+f+1e3/2,ge.ByHeight,s,0,0).to)}}return l}mapViewport(e,t){let n=t.mapPos(e.from,-1),o=t.mapPos(e.to,1);return new To(this.heightMap.lineAt(n,ge.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(o,ge.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},n=0){if(!this.inView)return!0;let{top:o}=this.heightMap.lineAt(e,ge.ByPos,this.heightOracle,0,0),{bottom:s}=this.heightMap.lineAt(t,ge.ByPos,this.heightOracle,0,0),{visibleTop:r,visibleBottom:a}=this;return(e==0||o<=r-Math.max(10,Math.min(-n,250)))&&(t==this.state.doc.length||s>=a+Math.max(10,Math.min(n,250)))&&o>r-2*1e3&&s<a+2*1e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let n=[];for(let o of e)t.touchesRange(o.from,o.to)||n.push(new nr(t.mapPos(o.from),t.mapPos(o.to),o.size,o.displaySize));return n}ensureLineGaps(e,t){let n=this.heightOracle.lineWrapping,o=n?1e4:2e3,s=o>>1,r=o<<1;if(this.defaultTextDirection!=Pe.LTR&&!n)return[];let a=[],l=(f,h,d,u)=>{if(h-f<s)return;let p=this.state.selection.main,g=[p.from];p.empty||g.push(p.to);for(let b of g)if(b>f&&b<h){l(f,b-10,d,u),l(b+10,h,d,u);return}let m=ly(e,b=>b.from>=d.from&&b.to<=d.to&&Math.abs(b.from-f)<s&&Math.abs(b.to-h)<s&&!g.some(y=>b.from<y&&b.to>y));if(!m){if(h<d.to&&t&&n&&t.visibleRanges.some(x=>x.from<=h&&x.to>=h)){let x=t.moveToLineBoundary(R.cursor(h),!1,!0).head;x>f&&(h=x)}let b=this.gapSize(d,f,h,u),y=n||b<2e6?b:2e6;m=new nr(f,h,b,y)}a.push(m)},c=f=>{if(f.length<r||f.type!=Ht.Text)return;let h=ay(f.from,f.to,this.stateDeco);if(h.total<r)return;let d=this.scrollTarget?this.scrollTarget.range.head:null,u,p;if(n){let g=o/this.heightOracle.lineLength*this.heightOracle.lineHeight,m,b;if(d!=null){let y=Po(h,d),x=((this.visibleBottom-this.visibleTop)/2+g)/f.height;m=y-x,b=y+x}else m=(this.visibleTop-f.top-g)/f.height,b=(this.visibleBottom-f.top+g)/f.height;u=Do(h,m),p=Do(h,b)}else{let g=h.total*this.heightOracle.charWidth,m=o*this.heightOracle.charWidth,b=0;if(g>2e6)for(let k of e)k.from>=f.from&&k.from<f.to&&k.size!=k.displaySize&&k.from*this.heightOracle.charWidth+b<this.pixelViewport.left&&(b=k.size-k.displaySize);let y=this.pixelViewport.left+b,x=this.pixelViewport.right+b,v,C;if(d!=null){let k=Po(h,d),S=((x-y)/2+m)/g;v=k-S,C=k+S}else v=(y-m)/g,C=(x+m)/g;u=Do(h,v),p=Do(h,C)}u>f.from&&l(f.from,u,f,h),p<f.to&&l(p,f.to,f,h)};for(let f of this.viewportLines)Array.isArray(f.type)?f.type.forEach(c):c(f);return a}gapSize(e,t,n,o){let s=Po(o,n)-Po(o,t);return this.heightOracle.lineWrapping?e.height*s:o.total*this.heightOracle.charWidth*s}updateLineGaps(e){nr.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=Oe.set(e.map(t=>t.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let n=[];me.spans(t,this.viewport.from,this.viewport.to,{span(s,r){n.push({from:s,to:r})},point(){}},20);let o=0;if(n.length!=this.visibleRanges.length)o=12;else for(let s=0;s<n.length&&!(o&8);s++){let r=this.visibleRanges[s],a=n[s];(r.from!=a.from||r.to!=a.to)&&(o|=4,e&&e.mapPos(r.from,-1)==a.from&&e.mapPos(r.to,1)==a.to||(o|=8))}return this.visibleRanges=n,o}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||Ri(this.heightMap.lineAt(e,ge.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||Ri(this.heightMap.lineAt(this.scaler.fromDOM(e),ge.ByHeight,this.heightOracle,0,0),this.scaler)}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return Ri(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}}class To{constructor(e,t){this.from=e,this.to=t}}function ay(i,e,t){let n=[],o=i,s=0;return me.spans(t,i,e,{span(){},point(r,a){r>o&&(n.push({from:o,to:r}),s+=r-o),o=a}},20),o<e&&(n.push({from:o,to:e}),s+=e-o),{total:s,ranges:n}}function Do({total:i,ranges:e},t){if(t<=0)return e[0].from;if(t>=1)return e[e.length-1].to;let n=Math.floor(i*t);for(let o=0;;o++){let{from:s,to:r}=e[o],a=r-s;if(n<=a)return s+n;n-=a}}function Po(i,e){let t=0;for(let{from:n,to:o}of i.ranges){if(e<=o){t+=e-n;break}t+=o-n}return t/i.total}function ly(i,e){for(let t of i)if(e(t))return t}const pc={toDOM(i){return i},fromDOM(i){return i},scale:1,eq(i){return i==this}};class Ya{constructor(e,t,n){let o=0,s=0,r=0;this.viewports=n.map(({from:a,to:l})=>{let c=t.lineAt(a,ge.ByPos,e,0,0).top,f=t.lineAt(l,ge.ByPos,e,0,0).bottom;return o+=f-c,{from:a,to:l,top:c,bottom:f,domTop:0,domBottom:0}}),this.scale=(7e6-o)/(t.height-o);for(let a of this.viewports)a.domTop=r+(a.top-s)*this.scale,r=a.domBottom=a.domTop+(a.bottom-a.top),s=a.bottom}toDOM(e){for(let t=0,n=0,o=0;;t++){let s=t<this.viewports.length?this.viewports[t]:null;if(!s||e<s.top)return o+(e-n)*this.scale;if(e<=s.bottom)return s.domTop+(e-s.top);n=s.bottom,o=s.domBottom}}fromDOM(e){for(let t=0,n=0,o=0;;t++){let s=t<this.viewports.length?this.viewports[t]:null;if(!s||e<s.domTop)return n+(e-o)/this.scale;if(e<=s.domBottom)return s.top+(e-s.domTop);n=s.bottom,o=s.domBottom}}eq(e){return e instanceof Ya?this.scale==e.scale&&this.viewports.length==e.viewports.length&&this.viewports.every((t,n)=>t.from==e.viewports[n].from&&t.to==e.viewports[n].to):!1}}function Ri(i,e){if(e.scale==1)return i;let t=e.toDOM(i.top),n=e.toDOM(i.bottom);return new zt(i.from,i.length,t,n-t,Array.isArray(i._content)?i._content.map(o=>Ri(o,e)):i._content)}const Lo=q.define({combine:i=>i.join(" ")}),ca=q.define({combine:i=>i.indexOf(!0)>-1}),fa=hi.newName(),Fd=hi.newName(),Vd=hi.newName(),zd={"&light":"."+Fd,"&dark":"."+Vd};function ha(i,e,t){return new hi(e,{finish(n){return/&/.test(n)?n.replace(/&\w*/,o=>{if(o=="&")return i;if(!t||!t[o])throw new RangeError(`Unsupported selector: ${o}`);return t[o]}):i+" "+n}})}const cy=ha("."+fa,{"&":{position:"relative !important",boxSizing:"border-box","&.cm-focused":{outline:"1px dotted #212121"},display:"flex !important",flexDirection:"column"},".cm-scroller":{display:"flex !important",alignItems:"flex-start !important",fontFamily:"monospace",lineHeight:1.4,height:"100%",overflowX:"auto",position:"relative",zIndex:0,overflowAnchor:"none"},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:"block",whiteSpace:"pre",wordWrap:"normal",boxSizing:"border-box",minHeight:"100%",padding:"4px 0",outline:"none","&[contenteditable=true]":{WebkitUserModify:"read-write-plaintext-only"}},".cm-lineWrapping":{whiteSpace_fallback:"pre-wrap",whiteSpace:"break-spaces",wordBreak:"break-word",overflowWrap:"anywhere",flexShrink:1},"&light .cm-content":{caretColor:"black"},"&dark .cm-content":{caretColor:"white"},".cm-line":{display:"block",padding:"0 2px 0 6px"},".cm-layer":{position:"absolute",left:0,top:0,contain:"size style","& > *":{position:"absolute"}},"&light .cm-selectionBackground":{background:"#d9d9d9"},"&dark .cm-selectionBackground":{background:"#222"},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#d7d4f0"},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:"#233"},".cm-cursorLayer":{pointerEvents:"none"},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:"steps(1) cm-blink 1.2s infinite"},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:"1.2px solid black",marginLeft:"-0.6px",pointerEvents:"none"},".cm-cursor":{display:"none"},"&dark .cm-cursor":{borderLeftColor:"#ddd"},".cm-dropCursor":{position:"absolute"},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:"block"},".cm-iso":{unicodeBidi:"isolate"},".cm-announced":{position:"fixed",top:"-10000px"},"@media print":{".cm-announced":{display:"none"}},"&light .cm-activeLine":{backgroundColor:"#cceeff44"},"&dark .cm-activeLine":{backgroundColor:"#99eeff33"},"&light .cm-specialChar":{color:"red"},"&dark .cm-specialChar":{color:"#f78"},".cm-gutters":{flexShrink:0,display:"flex",height:"100%",boxSizing:"border-box",zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#6c6c6c",border:"0px solid #ddd","&.cm-gutters-before":{borderRightWidth:"1px"},"&.cm-gutters-after":{borderLeftWidth:"1px"}},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"},".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"},".cm-dialog":{padding:"2px 19px 4px 6px",position:"relative","& label":{fontSize:"80%"}},".cm-dialog-close":{position:"absolute",top:"3px",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",fontSize:"14px",padding:"0"},".cm-tab":{display:"inline-block",overflow:"hidden",verticalAlign:"bottom"},".cm-widgetBuffer":{verticalAlign:"text-top",height:"1em",width:0,display:"inline"},".cm-placeholder":{color:"#888",display:"inline-block",verticalAlign:"top",userSelect:"none"},".cm-highlightSpace":{backgroundImage:"radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",backgroundPosition:"center"},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:"auto 100%",backgroundPosition:"right 90%",backgroundRepeat:"no-repeat"},".cm-trailingSpace":{backgroundColor:"#ff332255"},".cm-button":{verticalAlign:"middle",color:"inherit",fontSize:"70%",padding:".2em 1em",borderRadius:"1px"},"&light .cm-button":{backgroundImage:"linear-gradient(#eff1f5, #d9d9df)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#b4b4b4, #d0d3d6)"}},"&dark .cm-button":{backgroundImage:"linear-gradient(#393939, #111)",border:"1px solid #888","&:active":{backgroundImage:"linear-gradient(#111, #333)"}},".cm-textfield":{verticalAlign:"middle",color:"inherit",fontSize:"70%",border:"1px solid silver",padding:".2em .5em"},"&light .cm-textfield":{backgroundColor:"white"},"&dark .cm-textfield":{border:"1px solid #555",backgroundColor:"inherit"}},zd),fy={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},ir=_.ie&&_.ie_version<=11;class hy{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new jb,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let n of t)this.queue.push(n);(_.ie&&_.ie_version<=11||_.ios&&e.composing)&&t.some(n=>n.type=="childList"&&n.removedNodes.length||n.type=="characterData"&&n.oldValue.length>n.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&_.android&&e.constructor.EDIT_CONTEXT!==!1&&!(_.chrome&&_.chrome_version<126)&&(this.editContext=new uy(e),e.state.facet(Jt)&&(e.contentDOM.editContext=this.editContext.editContext)),ir&&(this.onCharData=t=>{this.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia("print")),typeof ResizeObserver=="function"&&(this.resizeScroll=new ResizeObserver(()=>{var t;((t=this.view.docView)===null||t===void 0?void 0:t.lastUpdate)<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(t=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),t.length>0&&t[t.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent("Event")))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(t=>{t.length>0&&t[t.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent("Event"))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers("scroll",e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type=="change"||!e.type)&&!e.matches||(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,n)=>t!=e[n]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:n}=this,o=this.selectionRange;if(n.state.facet(Jt)?n.root.activeElement!=this.dom:!jo(this.dom,o))return;let s=o.anchorNode&&n.docView.nearest(o.anchorNode);if(s&&s.ignoreEvent(e)){t||(this.selectionChanged=!1);return}(_.ie&&_.ie_version<=11||_.android&&_.chrome)&&!n.state.selection.main.empty&&o.focusNode&&$i(o.focusNode,o.focusOffset,o.anchorNode,o.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=to(e.root);if(!t)return!1;let n=_.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&dy(this.view,t)||t;if(!n||this.selectionRange.eq(n))return!1;let o=jo(this.dom,n);return o&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&Gb(this.dom,n)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(n),o&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let n=this.dom;n;)if(n.nodeType==1)!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==n?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(n),n=n.assignedSlot||n.parentNode;else if(n.nodeType==11)n=n.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let n of this.scrollTargets)n.removeEventListener("scroll",this.onScroll);for(let n of this.scrollTargets=t)n.addEventListener("scroll",this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,fy),ir&&this.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),ir&&this.dom.removeEventListener("DOMCharacterDataModified",this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){var n;if(!this.delayedAndroidKey){let o=()=>{let s=this.delayedAndroidKey;s&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=s.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&s.force&&ii(this.dom,s.key,s.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(o)}(!this.delayedAndroidKey||e=="Enter")&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!(!((n=this.delayedAndroidKey)===null||n===void 0)&&n.force)})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,n=-1,o=!1;for(let s of e){let r=this.readMutation(s);r&&(r.typeOver&&(o=!0),t==-1?{from:t,to:n}=r:(t=Math.min(r.from,t),n=Math.max(r.to,n)))}return{from:t,to:n,typeOver:o}}readChange(){let{from:e,to:t,typeOver:n}=this.processRecords(),o=this.selectionChanged&&jo(this.dom,this.selectionRange);if(e<0&&!o)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let s=new P0(this.view,e,t,n);return this.view.docView.domChanged={newSel:s.newSel?s.newSel.main:null},s}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.readChange();if(!t)return this.view.requestMeasure(),!1;let n=this.view.state,o=Td(this.view,t);return this.view.state==n&&(t.domChanged||t.newSel&&!t.newSel.main.eq(this.view.state.selection.main))&&this.view.update([]),o}readMutation(e){let t=this.view.docView.nearest(e.target);if(!t||t.ignoreMutation(e))return null;if(t.markDirty(e.type=="attributes"),e.type=="attributes"&&(t.flags|=4),e.type=="childList"){let n=gc(t,e.previousSibling||e.target.previousSibling,-1),o=gc(t,e.nextSibling||e.target.nextSibling,1);return{from:n?t.posAfter(n):t.posAtStart,to:o?t.posBefore(o):t.posAtEnd,typeOver:!1}}else return e.type=="characterData"?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener("resize",this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener("change",this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener("beforeprint",this.onPrint),e.addEventListener("scroll",this.onScroll),e.document.addEventListener("selectionchange",this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener("change",this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener("beforeprint",this.onPrint),e.document.removeEventListener("selectionchange",this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(Jt)!=e.state.facet(Jt)&&(e.view.contentDOM.editContext=e.state.facet(Jt)?this.editContext.editContext:null))}destroy(){var e,t,n;this.stop(),(e=this.intersection)===null||e===void 0||e.disconnect(),(t=this.gapIntersection)===null||t===void 0||t.disconnect(),(n=this.resizeScroll)===null||n===void 0||n.disconnect();for(let o of this.scrollTargets)o.removeEventListener("scroll",this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}}function gc(i,e,t){for(;e;){let n=ae.get(e);if(n&&n.parent==i)return n;let o=e.parentNode;e=o!=i.dom?o:t>0?e.nextSibling:e.previousSibling}return null}function mc(i,e){let t=e.startContainer,n=e.startOffset,o=e.endContainer,s=e.endOffset,r=i.docView.domAtPos(i.state.selection.main.anchor);return $i(r.node,r.offset,o,s)&&([t,n,o,s]=[o,s,t,n]),{anchorNode:t,anchorOffset:n,focusNode:o,focusOffset:s}}function dy(i,e){if(e.getComposedRanges){let o=e.getComposedRanges(i.root)[0];if(o)return mc(i,o)}let t=null;function n(o){o.preventDefault(),o.stopImmediatePropagation(),t=o.getTargetRanges()[0]}return i.contentDOM.addEventListener("beforeinput",n,!0),i.dom.ownerDocument.execCommand("indent"),i.contentDOM.removeEventListener("beforeinput",n,!0),t?mc(i,t):null}class uy{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=n=>{let o=e.state.selection.main,{anchor:s,head:r}=o,a=this.toEditorPos(n.updateRangeStart),l=this.toEditorPos(n.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:n.updateRangeStart,editorBase:a,drifted:!1});let c=l-a>n.text.length;a==this.from&&s<this.from?a=s:l==this.to&&s>this.to&&(l=s);let f=Dd(e.state.sliceDoc(a,l),n.text,(c?o.from:o.to)-a,c?"end":null);if(!f){let d=R.single(this.toEditorPos(n.selectionStart),this.toEditorPos(n.selectionEnd));d.main.eq(o)||e.dispatch({selection:d,userEvent:"select"});return}let h={from:f.from+a,to:f.toA+a,insert:ee.of(n.text.slice(f.from,f.toB).split(`
`))};if((_.mac||_.android)&&h.from==r-1&&/^\. ?$/.test(n.text)&&e.contentDOM.getAttribute("autocorrect")=="off"&&(h={from:a,to:l,insert:ee.of([n.text.replace("."," ")])}),this.pendingContextChange=h,!e.state.readOnly){let d=this.to-this.from+(h.to-h.from+h.insert.length);Ua(e,h,R.single(this.toEditorPos(n.selectionStart,d),this.toEditorPos(n.selectionEnd,d)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),h.from<h.to&&!h.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,n.updateRangeStart-1),Math.min(t.text.length,n.updateRangeStart+1)))&&this.handlers.compositionend(n)},this.handlers.characterboundsupdate=n=>{let o=[],s=null;for(let r=this.toEditorPos(n.rangeStart),a=this.toEditorPos(n.rangeEnd);r<a;r++){let l=e.coordsForChar(r);s=l&&new DOMRect(l.left,l.top,l.right-l.left,l.bottom-l.top)||s||new DOMRect,o.push(s)}t.updateCharacterBounds(n.rangeStart,o)},this.handlers.textformatupdate=n=>{let o=[];for(let s of n.getTextFormats()){let r=s.underlineStyle,a=s.underlineThickness;if(!/none/i.test(r)&&!/none/i.test(a)){let l=this.toEditorPos(s.rangeStart),c=this.toEditorPos(s.rangeEnd);if(l<c){let f=`text-decoration: underline ${/^[a-z]/.test(r)?r+" ":r=="Dashed"?"dashed ":r=="Squiggle"?"wavy ":""}${/thin/i.test(a)?1:2}px`;o.push(Oe.mark({attributes:{style:f}}).range(l,c))}}}e.dispatch({effects:vd.of(Oe.set(o))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:n}=this.composing;this.composing=null,n&&this.reset(e.state)}};for(let n in this.handlers)t.addEventListener(n,this.handlers[n]);this.measureReq={read:n=>{this.editContext.updateControlBounds(n.contentDOM.getBoundingClientRect());let o=to(n.root);o&&o.rangeCount&&this.editContext.updateSelectionBounds(o.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,n=!1,o=this.pendingContextChange;return e.changes.iterChanges((s,r,a,l,c)=>{if(n)return;let f=c.length-(r-s);if(o&&r>=o.to)if(o.from==s&&o.to==r&&o.insert.eq(c)){o=this.pendingContextChange=null,t+=f,this.to+=f;return}else o=null,this.revertPending(e.state);if(s+=t,r+=t,r<=this.from)this.from+=f,this.to+=f;else if(s<this.to){if(s<this.from||r>this.to||this.to-this.from+c.length>3e4){n=!0;return}this.editContext.updateText(this.toContextPos(s),this.toContextPos(r),c.toString()),this.to+=f}t+=f}),o&&!n&&this.revertPending(e.state),!n}update(e){let t=this.pendingContextChange,n=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(n.from,n.to)&&e.transactions.some(o=>!o.isUserEvent("input.type")&&o.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,n=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),o=this.toContextPos(t.head);(this.editContext.selectionStart!=n||this.editContext.selectionEnd!=o)&&this.editContext.updateSelection(n,o)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>1e4*3)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let n=this.composing;return n&&n.drifted?n.editorBase+(e-n.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}}class G{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){var t;this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.contentDOM=document.createElement("div"),this.scrollDOM=document.createElement("div"),this.scrollDOM.tabIndex=-1,this.scrollDOM.className="cm-scroller",this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement("div"),this.announceDOM.className="cm-announced",this.announceDOM.setAttribute("aria-live","polite"),this.dom=document.createElement("div"),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:n}=e;this.dispatchTransactions=e.dispatchTransactions||n&&(o=>o.forEach(s=>n(s,this)))||(o=>this.update(o)),this.dispatch=this.dispatch.bind(this),this._root=e.root||Ub(e.parent)||document,this.viewState=new uc(e.state||oe.create(e)),e.scrollTo&&e.scrollTo.is(Mo)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(Qn).map(o=>new Zs(o));for(let o of this.plugins)o.update(this);this.observer=new hy(this),this.inputState=new N0(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Yl(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),!((t=document.fonts)===null||t===void 0)&&t.ready&&document.fonts.ready.then(()=>this.requestMeasure())}dispatch(...e){let t=e.length==1&&e[0]instanceof Ye?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(e){if(this.updateState!=0)throw new Error("Calls to EditorView.update are not allowed while an update is in progress");let t=!1,n=!1,o,s=this.state;for(let d of e){if(d.startState!=s)throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");s=d.state}if(this.destroyed){this.viewState.state=s;return}let r=this.hasFocus,a=0,l=null;e.some(d=>d.annotation(Rd))?(this.inputState.notifiedFocused=r,a=1):r!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=r,l=Bd(s,r),l||(a=1));let c=this.observer.delayedAndroidKey,f=null;if(c?(this.observer.clearDelayedAndroidKey(),f=this.observer.readChange(),(f&&!this.state.doc.eq(s.doc)||!this.state.selection.eq(s.selection))&&(f=null)):this.observer.clear(),s.facet(oe.phrases)!=this.state.facet(oe.phrases))return this.setState(s);o=fs.create(this,s,e),o.flags|=a;let h=this.viewState.scrollTarget;try{this.updateState=2;for(let d of e){if(h&&(h=h.map(d.changes)),d.scrollIntoView){let{main:u}=d.state.selection;h=new oi(u.empty?u:R.cursor(u.head,u.head>u.anchor?-1:1))}for(let u of d.effects)u.is(Mo)&&(h=u.value.clip(this.state))}this.viewState.update(o,h),this.bidiCache=ds.update(this.bidiCache,o.changes),o.empty||(this.updatePlugins(o),this.inputState.update(o)),t=this.docView.update(o),this.state.facet(Ei)!=this.styleModules&&this.mountStyles(),n=this.updateAttrs(),this.showAnnouncements(e),this.docView.updateSelection(t,e.some(d=>d.isUserEvent("select.pointer")))}finally{this.updateState=0}if(o.startState.facet(Lo)!=o.state.facet(Lo)&&(this.viewState.mustMeasureContent=!0),(t||n||h||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),t&&this.docViewUpdate(),!o.empty)for(let d of this.state.facet(ra))try{d(o)}catch(u){dt(this.state,u,"update listener")}(l||f)&&Promise.resolve().then(()=>{l&&this.state==l.startState&&this.dispatch(l),f&&!Td(this,f)&&c.force&&ii(this.contentDOM,c.key,c.keyCode)})}setState(e){if(this.updateState!=0)throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let n of this.plugins)n.destroy(this);this.viewState=new uc(e),this.plugins=e.facet(Qn).map(n=>new Zs(n)),this.pluginMap.clear();for(let n of this.plugins)n.update(this);this.docView.destroy(),this.docView=new Yl(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(Qn),n=e.state.facet(Qn);if(t!=n){let o=[];for(let s of n){let r=t.indexOf(s);if(r<0)o.push(new Zs(s));else{let a=this.plugins[r];a.mustUpdate=e,o.push(a)}}for(let s of this.plugins)s.mustUpdate!=e&&s.destroy(this);this.plugins=o,this.pluginMap.clear()}else for(let o of this.plugins)o.mustUpdate=e;for(let o=0;o<this.plugins.length;o++)this.plugins[o].update(this);t!=n&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(n){dt(this.state,n,"doc view update listener")}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,n=this.scrollDOM,o=n.scrollTop*this.scaleY,{scrollAnchorPos:s,scrollAnchorHeight:r}=this.viewState;Math.abs(o-this.viewState.scrollTop)>1&&(r=-1),this.viewState.scrollAnchorHeight=-1;try{for(let a=0;;a++){if(r<0)if(Xh(n))s=-1,r=this.viewState.heightMap.height;else{let u=this.viewState.scrollAnchorAt(o);s=u.from,r=u.top}this.updateState=1;let l=this.viewState.measure(this);if(!l&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(a>5){console.warn(this.measureRequests.length?"Measure loop restarted more than 5 times":"Viewport failed to stabilize");break}let c=[];l&4||([this.measureRequests,c]=[c,this.measureRequests]);let f=c.map(u=>{try{return u.read(this)}catch(p){return dt(this.state,p),bc}}),h=fs.create(this,this.state,[]),d=!1;h.flags|=l,t?t.flags|=l:t=h,this.updateState=2,h.empty||(this.updatePlugins(h),this.inputState.update(h),this.updateAttrs(),d=this.docView.update(h),d&&this.docViewUpdate());for(let u=0;u<c.length;u++)if(f[u]!=bc)try{let p=c[u];p.write&&p.write(f[u],this)}catch(p){dt(this.state,p)}if(d&&this.docView.updateSelection(!0),!h.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight)if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,r=-1;continue}else{let p=(s<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(s).top)-r;if(p>1||p<-1){o=o+p,n.scrollTop=o/this.scaleY,r=-1;continue}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let a of this.state.facet(ra))a(t)}get themeClasses(){return fa+" "+(this.state.facet(ca)?Vd:Fd)+" "+this.state.facet(Lo)}updateAttrs(){let e=yc(this,wd,{class:"cm-editor"+(this.hasFocus?" cm-focused ":" ")+this.themeClasses}),t={spellcheck:"false",autocorrect:"off",autocapitalize:"off",writingsuggestions:"false",translate:"no",contenteditable:this.state.facet(Jt)?"true":"false",class:"cm-content",style:`${_.tabSize}: ${this.state.tabSize}`,role:"textbox","aria-multiline":"true"};this.state.readOnly&&(t["aria-readonly"]="true"),yc(this,Wa,t);let n=this.observer.ignore(()=>{let o=ta(this.contentDOM,this.contentAttrs,t),s=ta(this.dom,this.editorAttrs,e);return o||s});return this.editorAttrs=e,this.contentAttrs=t,n}showAnnouncements(e){let t=!0;for(let n of e)for(let o of n.effects)if(o.is(G.announce)){t&&(this.announceDOM.textContent=""),t=!1;let s=this.announceDOM.appendChild(document.createElement("div"));s.textContent=o.value}}mountStyles(){this.styleModules=this.state.facet(Ei);let e=this.state.facet(G.cspNonce);hi.mount(this.root,this.styleModules.concat(cy).reverse(),e?{nonce:e}:void 0)}readMeasured(){if(this.updateState==2)throw new Error("Reading the editor layout isn't allowed during an update");this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(n=>n.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,n){return tr(this,e,Zl(this,e,t,n))}moveByGroup(e,t){return tr(this,e,Zl(this,e,t,n=>M0(this,e.head,n)))}visualLineSide(e,t){let n=this.bidiSpans(e),o=this.textDirectionAt(e.from),s=n[t?n.length-1:0];return R.cursor(s.side(t,o)+e.from,s.forward(!t,o)?1:-1)}moveToLineBoundary(e,t,n=!0){return C0(this,e,t,n)}moveVertically(e,t,n){return tr(this,e,A0(this,e,t,n))}domAtPos(e){return this.docView.domAtPos(e)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){return this.readMeasured(),Md(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let n=this.docView.coordsAt(e,t);if(!n||n.left==n.right)return n;let o=this.state.doc.lineAt(e),s=this.bidiSpans(o),r=s[pn.find(s,e-o.from,-1,t)];return ao(n,r.dir==Pe.LTR==t>0)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(bd)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>py)return cd(e.length);let t=this.textDirectionAt(e.from),n;for(let s of this.bidiCache)if(s.from==e.from&&s.dir==t&&(s.fresh||ld(s.isolates,n=Gl(this,e))))return s.order;n||(n=Gl(this,e));let o=r0(e.text,t,n);return this.bidiCache.push(new ds(e.from,e.to,t,n,!0,o)),o}get hasFocus(){var e;return(this.dom.ownerDocument.hasFocus()||_.safari&&((e=this.inputState)===null||e===void 0?void 0:e.lastContextMenu)>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Yh(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return Mo.of(new oi(typeof e=="number"?R.cursor(e):e,t.y,t.x,t.yMargin,t.xMargin))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,n=this.viewState.scrollAnchorAt(e);return Mo.of(new oi(R.cursor(n.from),"start","start",n.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e=="boolean"?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return sn.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return sn.define(()=>({}),{eventObservers:e})}static theme(e,t){let n=hi.newName(),o=[Lo.of(n),Ei.of(ha(`.${n}`,e))];return t&&t.dark&&o.push(ca.of(!0)),o}static baseTheme(e){return Ds.lowest(Ei.of(ha("."+fa,e,zd)))}static findFromDOM(e){var t;let n=e.querySelector(".cm-content"),o=n&&ae.get(n)||ae.get(e);return((t=o?.rootView)===null||t===void 0?void 0:t.view)||null}}G.styleModule=Ei;G.inputHandler=gd;G.clipboardInputFilter=Ha;G.clipboardOutputFilter=qa;G.scrollHandler=yd;G.focusChangeEffect=md;G.perLineTextDirection=bd;G.exceptionSink=pd;G.updateListener=ra;G.editable=Jt;G.mouseSelectionStyle=ud;G.dragMovesSelection=dd;G.clickAddsSelectionRange=hd;G.decorations=no;G.outerDecorations=xd;G.atomicRanges=fo;G.bidiIsolatedRanges=Sd;G.scrollMargins=kd;G.darkTheme=ca;G.cspNonce=q.define({combine:i=>i.length?i[0]:""});G.contentAttributes=Wa;G.editorAttributes=wd;G.lineWrapping=G.contentAttributes.of({class:"cm-lineWrapping"});G.announce=Se.define();const py=4096,bc={};class ds{constructor(e,t,n,o,s,r){this.from=e,this.to=t,this.dir=n,this.isolates=o,this.fresh=s,this.order=r}static update(e,t){if(t.empty&&!e.some(s=>s.fresh))return e;let n=[],o=e.length?e[e.length-1].dir:Pe.LTR;for(let s=Math.max(0,e.length-10);s<e.length;s++){let r=e[s];r.dir==o&&!t.touchesRange(r.from,r.to)&&n.push(new ds(t.mapPos(r.from,1),t.mapPos(r.to,-1),r.dir,r.isolates,!1,r.order))}return n}}function yc(i,e,t){for(let n=i.state.facet(e),o=n.length-1;o>=0;o--){let s=n[o],r=typeof s=="function"?s(i):s;r&&ea(r,t)}return t}const gy=_.mac?"mac":_.windows?"win":_.linux?"linux":"key";function my(i,e){const t=i.split(/-(?!$)/);let n=t[t.length-1];n=="Space"&&(n=" ");let o,s,r,a;for(let l=0;l<t.length-1;++l){const c=t[l];if(/^(cmd|meta|m)$/i.test(c))a=!0;else if(/^a(lt)?$/i.test(c))o=!0;else if(/^(c|ctrl|control)$/i.test(c))s=!0;else if(/^s(hift)?$/i.test(c))r=!0;else if(/^mod$/i.test(c))e=="mac"?a=!0:s=!0;else throw new Error("Unrecognized modifier name: "+c)}return o&&(n="Alt-"+n),s&&(n="Ctrl-"+n),a&&(n="Meta-"+n),r&&(n="Shift-"+n),n}function Oo(i,e,t){return e.altKey&&(i="Alt-"+i),e.ctrlKey&&(i="Ctrl-"+i),e.metaKey&&(i="Meta-"+i),t!==!1&&e.shiftKey&&(i="Shift-"+i),i}const by=Ds.default(G.domEventHandlers({keydown(i,e){return xy(yy(e.state),i,e,"editor")}})),Ka=q.define({enables:by}),vc=new WeakMap;function yy(i){let e=i.facet(Ka),t=vc.get(e);return t||vc.set(e,t=wy(e.reduce((n,o)=>n.concat(o),[]))),t}let hn=null;const vy=4e3;function wy(i,e=gy){let t=Object.create(null),n=Object.create(null),o=(r,a)=>{let l=n[r];if(l==null)n[r]=a;else if(l!=a)throw new Error("Key binding "+r+" is used both as a regular binding and as a multi-stroke prefix")},s=(r,a,l,c,f)=>{var h,d;let u=t[r]||(t[r]=Object.create(null)),p=a.split(/ (?!$)/).map(b=>my(b,e));for(let b=1;b<p.length;b++){let y=p.slice(0,b).join(" ");o(y,!0),u[y]||(u[y]={preventDefault:!0,stopPropagation:!1,run:[x=>{let v=hn={view:x,prefix:y,scope:r};return setTimeout(()=>{hn==v&&(hn=null)},vy),!0}]})}let g=p.join(" ");o(g,!1);let m=u[g]||(u[g]={preventDefault:!1,stopPropagation:!1,run:((d=(h=u._any)===null||h===void 0?void 0:h.run)===null||d===void 0?void 0:d.slice())||[]});l&&m.run.push(l),c&&(m.preventDefault=!0),f&&(m.stopPropagation=!0)};for(let r of i){let a=r.scope?r.scope.split(" "):["editor"];if(r.any)for(let c of a){let f=t[c]||(t[c]=Object.create(null));f._any||(f._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:h}=r;for(let d in f)f[d].run.push(u=>h(u,da))}let l=r[e]||r.key;if(l)for(let c of a)s(c,l,r.run,r.preventDefault,r.stopPropagation),r.shift&&s(c,"Shift-"+l,r.shift,r.preventDefault,r.stopPropagation)}return t}let da=null;function xy(i,e,t,n){da=e;let o=Vb(e),s=Dn(o,0),r=Jn(s)==o.length&&o!=" ",a="",l=!1,c=!1,f=!1;hn&&hn.view==t&&hn.scope==n&&(a=hn.prefix+" ",Ld.indexOf(e.keyCode)<0&&(c=!0,hn=null));let h=new Set,d=m=>{if(m){for(let b of m.run)if(!h.has(b)&&(h.add(b),b(t)))return m.stopPropagation&&(f=!0),!0;m.preventDefault&&(m.stopPropagation&&(f=!0),c=!0)}return!1},u=i[n],p,g;return u&&(d(u[a+Oo(o,e,!r)])?l=!0:r&&(e.altKey||e.metaKey||e.ctrlKey)&&!(_.windows&&e.ctrlKey&&e.altKey)&&!(_.mac&&e.altKey&&!(e.ctrlKey||e.metaKey))&&(p=bn[e.keyCode])&&p!=o?(d(u[a+Oo(p,e,!0)])||e.shiftKey&&(g=eo[e.keyCode])!=o&&g!=p&&d(u[a+Oo(g,e,!1)]))&&(l=!0):r&&e.shiftKey&&d(u[a+Oo(o,e,!0)])&&(l=!0),!l&&d(u._any)&&(l=!0)),c&&(l=!0),l&&f&&e.stopPropagation(),da=null,l}class Sy extends Os{constructor(e){super(),this.content=e}toDOM(e){let t=document.createElement("span");return t.className="cm-placeholder",t.style.pointerEvents="none",t.appendChild(typeof this.content=="string"?document.createTextNode(this.content):typeof this.content=="function"?this.content(e):this.content.cloneNode(!0)),t.setAttribute("aria-hidden","true"),t}coordsAt(e){let t=e.firstChild?di(e.firstChild):[];if(!t.length)return null;let n=window.getComputedStyle(e.parentNode),o=ao(t[0],n.direction!="rtl"),s=parseInt(n.lineHeight);return o.bottom-o.top>s*1.5?{left:o.left,right:o.right,top:o.top,bottom:o.top+s}:o}ignoreEvent(){return!1}}function ky(i){let e=sn.fromClass(class{constructor(t){this.view=t,this.placeholder=i?Oe.set([Oe.widget({widget:new Sy(i),side:1}).range(0)]):Oe.none}get decorations(){return this.view.state.doc.length?Oe.none:this.placeholder}},{decorations:t=>t.decorations});return typeof i=="string"?[e,G.contentAttributes.of({"aria-placeholder":i})]:e}const Eo="-10000px";class Cy{constructor(e,t,n,o){this.facet=t,this.createTooltipView=n,this.removeTooltipView=o,this.input=e.state.facet(t),this.tooltips=this.input.filter(r=>r);let s=null;this.tooltipViews=this.tooltips.map(r=>s=n(r,s))}update(e,t){var n;let o=e.state.facet(this.facet),s=o.filter(l=>l);if(o===this.input){for(let l of this.tooltipViews)l.update&&l.update(e);return!1}let r=[],a=t?[]:null;for(let l=0;l<s.length;l++){let c=s[l],f=-1;if(c){for(let h=0;h<this.tooltips.length;h++){let d=this.tooltips[h];d&&d.create==c.create&&(f=h)}if(f<0)r[l]=this.createTooltipView(c,l?r[l-1]:null),a&&(a[l]=!!c.above);else{let h=r[l]=this.tooltipViews[f];a&&(a[l]=t[f]),h.update&&h.update(e)}}}for(let l of this.tooltipViews)r.indexOf(l)<0&&(this.removeTooltipView(l),(n=l.destroy)===null||n===void 0||n.call(l));return t&&(a.forEach((l,c)=>t[c]=l),t.length=a.length),this.input=o,this.tooltips=s,this.tooltipViews=r,!0}}function My(i){let e=i.dom.ownerDocument.documentElement;return{top:0,left:0,bottom:e.clientHeight,right:e.clientWidth}}const or=q.define({combine:i=>{var e,t,n;return{position:_.ios?"absolute":((e=i.find(o=>o.position))===null||e===void 0?void 0:e.position)||"fixed",parent:((t=i.find(o=>o.parent))===null||t===void 0?void 0:t.parent)||null,tooltipSpace:((n=i.find(o=>o.tooltipSpace))===null||n===void 0?void 0:n.tooltipSpace)||My}}}),wc=new WeakMap,Hd=sn.fromClass(class{constructor(i){this.view=i,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1;let e=i.state.facet(or);this.position=e.position,this.parent=e.parent,this.classes=i.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver=typeof ResizeObserver=="function"?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new Cy(i,qd,(t,n)=>this.createTooltip(t,n),t=>{this.resizeObserver&&this.resizeObserver.unobserve(t.dom),t.dom.remove()}),this.above=this.manager.tooltips.map(t=>!!t.above),this.intersectionObserver=typeof IntersectionObserver=="function"?new IntersectionObserver(t=>{Date.now()>this.lastTransaction-50&&t.length>0&&t[t.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),i.win.addEventListener("resize",this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement("div"),this.container.style.position="relative",this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect();for(let i of this.manager.tooltipViews)this.intersectionObserver.observe(i.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(i){i.transactions.length&&(this.lastTransaction=Date.now());let e=this.manager.update(i,this.above);e&&this.observeIntersection();let t=e||i.geometryChanged,n=i.state.facet(or);if(n.position!=this.position&&!this.madeAbsolute){this.position=n.position;for(let o of this.manager.tooltipViews)o.dom.style.position=this.position;t=!0}if(n.parent!=this.parent){this.parent&&this.container.remove(),this.parent=n.parent,this.createContainer();for(let o of this.manager.tooltipViews)this.container.appendChild(o.dom);t=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses);t&&this.maybeMeasure()}createTooltip(i,e){let t=i.create(this.view),n=e?e.dom:null;if(t.dom.classList.add("cm-tooltip"),i.arrow&&!t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")){let o=document.createElement("div");o.className="cm-tooltip-arrow",t.dom.appendChild(o)}return t.dom.style.position=this.position,t.dom.style.top=Eo,t.dom.style.left="0px",this.container.insertBefore(t.dom,n),t.mount&&t.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(t.dom),t}destroy(){var i,e,t;this.view.win.removeEventListener("resize",this.measureSoon);for(let n of this.manager.tooltipViews)n.dom.remove(),(i=n.destroy)===null||i===void 0||i.call(n);this.parent&&this.container.remove(),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),(t=this.intersectionObserver)===null||t===void 0||t.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let i=1,e=1,t=!1;if(this.position=="fixed"&&this.manager.tooltipViews.length){let{dom:s}=this.manager.tooltipViews[0];if(_.safari){let r=s.getBoundingClientRect();t=Math.abs(r.top+1e4)>1||Math.abs(r.left)>1}else t=!!s.offsetParent&&s.offsetParent!=this.container.ownerDocument.body}if(t||this.position=="absolute")if(this.parent){let s=this.parent.getBoundingClientRect();s.width&&s.height&&(i=s.width/this.parent.offsetWidth,e=s.height/this.parent.offsetHeight)}else({scaleX:i,scaleY:e}=this.view.viewState);let n=this.view.scrollDOM.getBoundingClientRect(),o=ja(this.view);return{visible:{left:n.left+o.left,top:n.top+o.top,right:n.right-o.right,bottom:n.bottom-o.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((s,r)=>{let a=this.manager.tooltipViews[r];return a.getCoords?a.getCoords(s.pos):this.view.coordsAtPos(s.pos)}),size:this.manager.tooltipViews.map(({dom:s})=>s.getBoundingClientRect()),space:this.view.state.facet(or).tooltipSpace(this.view),scaleX:i,scaleY:e,makeAbsolute:t}}writeMeasure(i){var e;if(i.makeAbsolute){this.madeAbsolute=!0,this.position="absolute";for(let a of this.manager.tooltipViews)a.dom.style.position="absolute"}let{visible:t,space:n,scaleX:o,scaleY:s}=i,r=[];for(let a=0;a<this.manager.tooltips.length;a++){let l=this.manager.tooltips[a],c=this.manager.tooltipViews[a],{dom:f}=c,h=i.pos[a],d=i.size[a];if(!h||l.clip!==!1&&(h.bottom<=Math.max(t.top,n.top)||h.top>=Math.min(t.bottom,n.bottom)||h.right<Math.max(t.left,n.left)-.1||h.left>Math.min(t.right,n.right)+.1)){f.style.top=Eo;continue}let u=l.arrow?c.dom.querySelector(".cm-tooltip-arrow"):null,p=u?7:0,g=d.right-d.left,m=(e=wc.get(c))!==null&&e!==void 0?e:d.bottom-d.top,b=c.offset||Iy,y=this.view.textDirection==Pe.LTR,x=d.width>n.right-n.left?y?n.left:n.right-d.width:y?Math.max(n.left,Math.min(h.left-(u?14:0)+b.x,n.right-g)):Math.min(Math.max(n.left,h.left-g+(u?14:0)-b.x),n.right-g),v=this.above[a];!l.strictSide&&(v?h.top-m-p-b.y<n.top:h.bottom+m+p+b.y>n.bottom)&&v==n.bottom-h.bottom>h.top-n.top&&(v=this.above[a]=!v);let C=(v?h.top-n.top:n.bottom-h.bottom)-p;if(C<m&&c.resize!==!1){if(C<this.view.defaultLineHeight){f.style.top=Eo;continue}wc.set(c,m),f.style.height=(m=C)/s+"px"}else f.style.height&&(f.style.height="");let k=v?h.top-m-p-b.y:h.bottom+p+b.y,S=x+g;if(c.overlap!==!0)for(let A of r)A.left<S&&A.right>x&&A.top<k+m&&A.bottom>k&&(k=v?A.top-m-2-p:A.bottom+p+2);if(this.position=="absolute"?(f.style.top=(k-i.parent.top)/s+"px",xc(f,(x-i.parent.left)/o)):(f.style.top=k/s+"px",xc(f,x/o)),u){let A=h.left+(y?b.x:-b.x)-(x+14-7);u.style.left=A/o+"px"}c.overlap!==!0&&r.push({left:x,top:k,right:S,bottom:k+m}),f.classList.toggle("cm-tooltip-above",v),f.classList.toggle("cm-tooltip-below",!v),c.positioned&&c.positioned(i.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let i of this.manager.tooltipViews)i.dom.style.top=Eo}},{eventObservers:{scroll(){this.maybeMeasure()}}});function xc(i,e){let t=parseInt(i.style.left,10);(isNaN(t)||Math.abs(e-t)>1)&&(i.style.left=e+"px")}const Ay=G.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:"border-box"},"&light .cm-tooltip":{border:"1px solid #bbb",backgroundColor:"#f5f5f5"},"&light .cm-tooltip-section:not(:first-child)":{borderTop:"1px solid #bbb"},"&dark .cm-tooltip":{backgroundColor:"#333338",color:"white"},".cm-tooltip-arrow":{height:"7px",width:"14px",position:"absolute",zIndex:-1,overflow:"hidden","&:before, &:after":{content:"''",position:"absolute",width:0,height:0,borderLeft:"7px solid transparent",borderRight:"7px solid transparent"},".cm-tooltip-above &":{bottom:"-7px","&:before":{borderTop:"7px solid #bbb"},"&:after":{borderTop:"7px solid #f5f5f5",bottom:"1px"}},".cm-tooltip-below &":{top:"-7px","&:before":{borderBottom:"7px solid #bbb"},"&:after":{borderBottom:"7px solid #f5f5f5",top:"1px"}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:"#333338",borderBottomColor:"#333338"},"&:after":{borderTopColor:"transparent",borderBottomColor:"transparent"}}}),Iy={x:0,y:0},qd=q.define({enables:[Hd,Ay]});function Wd(i,e){let t=i.plugin(Hd);if(!t)return null;let n=t.manager.tooltips.indexOf(e);return n<0?null:t.manager.tooltipViews[n]}class mi extends Fn{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}}mi.prototype.elementClass="";mi.prototype.toDOM=void 0;mi.prototype.mapMode=ht.TrackBefore;mi.prototype.startSide=mi.prototype.endSide=-1;mi.prototype.point=!0;const Ty=1024;let Dy=0;class sr{constructor(e,t){this.from=e,this.to=t}}class le{constructor(e={}){this.id=Dy++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=e.combine||null}add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof e!="function"&&(e=Ct.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}}le.closedBy=new le({deserialize:i=>i.split(" ")});le.openedBy=new le({deserialize:i=>i.split(" ")});le.group=new le({deserialize:i=>i.split(" ")});le.isolate=new le({deserialize:i=>{if(i&&i!="rtl"&&i!="ltr"&&i!="auto")throw new RangeError("Invalid value for isolate: "+i);return i||"auto"}});le.contextHash=new le({perNode:!0});le.lookAhead=new le({perNode:!0});le.mounted=new le({perNode:!0});class us{constructor(e,t,n){this.tree=e,this.overlay=t,this.parser=n}static get(e){return e&&e.props&&e.props[le.mounted.id]}}const Py=Object.create(null);class Ct{constructor(e,t,n,o=0){this.name=e,this.props=t,this.id=n,this.flags=o}static define(e){let t=e.props&&e.props.length?Object.create(null):Py,n=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(e.name==null?8:0),o=new Ct(e.name||"",t,e.id,n);if(e.props){for(let s of e.props)if(Array.isArray(s)||(s=s(o)),s){if(s[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");t[s[0].id]=s[1]}}return o}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e=="string"){if(this.name==e)return!0;let t=this.prop(le.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let o of n.split(" "))t[o]=e[n];return n=>{for(let o=n.prop(le.group),s=-1;s<(o?o.length:0);s++){let r=t[s<0?n.name:o[s]];if(r)return r}}}}Ct.none=new Ct("",Object.create(null),0,8);const No=new WeakMap,Sc=new WeakMap;var He;(function(i){i[i.ExcludeBuffers=1]="ExcludeBuffers",i[i.IncludeAnonymous=2]="IncludeAnonymous",i[i.IgnoreMounts=4]="IgnoreMounts",i[i.IgnoreOverlays=8]="IgnoreOverlays"})(He||(He={}));class Ke{constructor(e,t,n,o,s){if(this.type=e,this.children=t,this.positions=n,this.length=o,this.props=null,s&&s.length){this.props=Object.create(null);for(let[r,a]of s)this.props[typeof r=="number"?r:r.id]=a}}toString(){let e=us.get(this);if(e&&!e.overlay)return e.tree.toString();let t="";for(let n of this.children){let o=n.toString();o&&(t&&(t+=","),t+=o)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?"("+t+")":""):t}cursor(e=0){return new pa(this.topNode,e)}cursorAt(e,t=0,n=0){let o=No.get(this)||this.topNode,s=new pa(o);return s.moveTo(e,t),No.set(this,s._tree),s}get topNode(){return new St(this,0,0,null)}resolve(e,t=0){let n=io(No.get(this)||this.topNode,e,t,!1);return No.set(this,n),n}resolveInner(e,t=0){let n=io(Sc.get(this)||this.topNode,e,t,!0);return Sc.set(this,n),n}resolveStack(e,t=0){return Ey(this,e,t)}iterate(e){let{enter:t,leave:n,from:o=0,to:s=this.length}=e,r=e.mode||0,a=(r&He.IncludeAnonymous)>0;for(let l=this.cursor(r|He.IncludeAnonymous);;){let c=!1;if(l.from<=s&&l.to>=o&&(!a&&l.type.isAnonymous||t(l)!==!1)){if(l.firstChild())continue;c=!0}for(;c&&n&&(a||!l.type.isAnonymous)&&n(l),!l.nextSibling();){if(!l.parent())return;c=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(e={}){return this.children.length<=8?this:Qa(Ct.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,o)=>new Ke(this.type,t,n,o,this.propValues),e.makeTree||((t,n,o)=>new Ke(Ct.none,t,n,o)))}static build(e){return Ny(e)}}Ke.empty=new Ke(Ct.none,[],[],0);class Xa{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new Xa(this.buffer,this.index)}}class vn{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return Ct.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(",")}childString(e){let t=this.buffer[e],n=this.buffer[e+3],o=this.set.types[t],s=o.name;if(/\W/.test(s)&&!o.isError&&(s=JSON.stringify(s)),e+=4,n==e)return s;let r=[];for(;e<n;)r.push(this.childString(e)),e=this.buffer[e+3];return s+"("+r.join(",")+")"}findChild(e,t,n,o,s){let{buffer:r}=this,a=-1;for(let l=e;l!=t&&!(jd(s,o,r[l+1],r[l+2])&&(a=l,n>0));l=r[l+3]);return a}slice(e,t,n){let o=this.buffer,s=new Uint16Array(t-e),r=0;for(let a=e,l=0;a<t;){s[l++]=o[a++],s[l++]=o[a++]-n;let c=s[l++]=o[a++]-n;s[l++]=o[a++]-e,r=Math.max(r,c)}return new vn(s,r,this.set)}}function jd(i,e,t,n){switch(i){case-2:return t<e;case-1:return n>=e&&t<e;case 0:return t<e&&n>e;case 1:return t<=e&&n>e;case 2:return n>e;case 4:return!0}}function io(i,e,t,n){for(var o;i.from==i.to||(t<1?i.from>=e:i.from>e)||(t>-1?i.to<=e:i.to<e);){let r=!n&&i instanceof St&&i.index<0?null:i.parent;if(!r)return i;i=r}let s=n?0:He.IgnoreOverlays;if(n)for(let r=i,a=r.parent;a;r=a,a=r.parent)r instanceof St&&r.index<0&&((o=a.enter(e,t,s))===null||o===void 0?void 0:o.from)!=r.from&&(i=a);for(;;){let r=i.enter(e,t,s);if(!r)return i;i=r}}class Ud{cursor(e=0){return new pa(this,e)}getChild(e,t=null,n=null){let o=kc(this,e,t,n);return o.length?o[0]:null}getChildren(e,t=null,n=null){return kc(this,e,t,n)}resolve(e,t=0){return io(this,e,t,!1)}resolveInner(e,t=0){return io(this,e,t,!0)}matchContext(e){return ua(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let o=t.lastChild;if(!o||o.to!=t.to)break;o.type.isError&&o.from==o.to?(n=t,t=o.prevSibling):t=o}return n}get node(){return this}get next(){return this.parent}}class St extends Ud{constructor(e,t,n,o){super(),this._tree=e,this.from=t,this.index=n,this._parent=o}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,t,n,o,s=0){for(let r=this;;){for(let{children:a,positions:l}=r._tree,c=t>0?a.length:-1;e!=c;e+=t){let f=a[e],h=l[e]+r.from;if(jd(o,n,h,h+f.length)){if(f instanceof vn){if(s&He.ExcludeBuffers)continue;let d=f.findChild(0,f.buffer.length,t,n-h,o);if(d>-1)return new gn(new Ly(r,f,e,h),null,d)}else if(s&He.IncludeAnonymous||!f.type.isAnonymous||Ja(f)){let d;if(!(s&He.IgnoreMounts)&&(d=us.get(f))&&!d.overlay)return new St(d.tree,h,e,r);let u=new St(f,h,e,r);return s&He.IncludeAnonymous||!u.type.isAnonymous?u:u.nextChild(t<0?f.children.length-1:0,t,n,o)}}}if(s&He.IncludeAnonymous||!r.type.isAnonymous||(r.index>=0?e=r.index+t:e=t<0?-1:r._parent._tree.children.length,r=r._parent,!r))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(e,t,n=0){let o;if(!(n&He.IgnoreOverlays)&&(o=us.get(this._tree))&&o.overlay){let s=e-this.from;for(let{from:r,to:a}of o.overlay)if((t>0?r<=s:r<s)&&(t<0?a>=s:a>s))return new St(o.tree,o.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,t,n)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function kc(i,e,t,n){let o=i.cursor(),s=[];if(!o.firstChild())return s;if(t!=null){for(let r=!1;!r;)if(r=o.type.is(t),!o.nextSibling())return s}for(;;){if(n!=null&&o.type.is(n))return s;if(o.type.is(e)&&s.push(o.node),!o.nextSibling())return n==null?s:[]}}function ua(i,e,t=e.length-1){for(let n=i;t>=0;n=n.parent){if(!n)return!1;if(!n.type.isAnonymous){if(e[t]&&e[t]!=n.name)return!1;t--}}return!0}class Ly{constructor(e,t,n,o){this.parent=e,this.buffer=t,this.index=n,this.start=o}}class gn extends Ud{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(e,t,n){let{buffer:o}=this.context,s=o.findChild(this.index+4,o.buffer[this.index+3],e,t-this.context.start,n);return s<0?null:new gn(this.context,this,s)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(e,t,n=0){if(n&He.ExcludeBuffers)return null;let{buffer:o}=this.context,s=o.findChild(this.index+4,o.buffer[this.index+3],t>0?1:-1,e-this.context.start,t);return s<0?null:new gn(this.context,this,s)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context,t=e.buffer[this.index+3];return t<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new gn(this.context,this._parent,t):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,t=this._parent?this._parent.index+4:0;return this.index==t?this.externalSibling(-1):new gn(this.context,this._parent,e.findChild(t,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,o=this.index+4,s=n.buffer[this.index+3];if(s>o){let r=n.buffer[this.index+1];e.push(n.slice(o,s,r)),t.push(0)}return new Ke(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function Gd(i){if(!i.length)return null;let e=0,t=i[0];for(let s=1;s<i.length;s++){let r=i[s];(r.from>t.from||r.to<t.to)&&(t=r,e=s)}let n=t instanceof St&&t.index<0?null:t.parent,o=i.slice();return n?o[e]=n:o.splice(e,1),new Oy(o,t)}class Oy{constructor(e,t){this.heads=e,this.node=t}get next(){return Gd(this.heads)}}function Ey(i,e,t){let n=i.resolveInner(e,t),o=null;for(let s=n instanceof St?n:n.context.parent;s;s=s.parent)if(s.index<0){let r=s.parent;(o||(o=[n])).push(r.resolve(e,t)),s=r}else{let r=us.get(s.tree);if(r&&r.overlay&&r.overlay[0].from<=e&&r.overlay[r.overlay.length-1].to>=e){let a=new St(r.tree,r.overlay[0].from+s.from,-1,s);(o||(o=[n])).push(io(a,e,t,!1))}}return o?Gd(o):n}class pa{get name(){return this.type.name}constructor(e,t=0){if(this.mode=t,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,e instanceof St)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let n=e._parent;n;n=n._parent)this.stack.unshift(n.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:o}=this.buffer;return this.type=t||o.set.types[o.buffer[e]],this.from=n+o.buffer[e+1],this.to=n+o.buffer[e+2],!0}yield(e){return e?e instanceof St?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:o}=this.buffer,s=o.findChild(this.index+4,o.buffer[this.index+3],e,t-this.buffer.start,n);return s<0?!1:(this.stack.push(this.index),this.yieldBuf(s))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&He.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&He.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&He.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let o=n<0?0:this.stack[n]+4;if(this.index!=o)return this.yieldBuf(t.findChild(o,this.index,-1,0,4))}else{let o=t.buffer[this.index+3];if(o<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(o)}return n<0?this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode)):!1}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:o}=this;if(o){if(e>0){if(this.index<o.buffer.buffer.length)return!1}else for(let s=0;s<this.index;s++)if(o.buffer.buffer[s+3]<this.index)return!1;({index:t,parent:n}=o)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let s=t+e,r=e<0?-1:n._tree.children.length;s!=r;s+=e){let a=n._tree.children[s];if(this.mode&He.IncludeAnonymous||a instanceof vn||!a.type.isAnonymous||Ja(a))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)e:for(let o=this.index,s=this.stack.length;s>=0;){for(let r=e;r;r=r._parent)if(r.index==o){if(o==this.index)return r;t=r,n=s+1;break e}o=this.stack[--s]}for(let o=n;o<this.stack.length;o++)t=new gn(this.buffer,t,this.stack[o]);return this.bufferNode=new gn(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let o=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(o=!0)}for(;;){if(o&&t&&t(this),o=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,o=!0}}}matchContext(e){if(!this.buffer)return ua(this.node.parent,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let o=e.length-1,s=this.stack.length-1;o>=0;s--){if(s<0)return ua(this._tree,e,o);let r=n[t.buffer[this.stack[s]]];if(!r.isAnonymous){if(e[o]&&e[o]!=r.name)return!1;o--}}return!0}}function Ja(i){return i.children.some(e=>e instanceof vn||!e.type.isAnonymous||Ja(e))}function Ny(i){var e;let{buffer:t,nodeSet:n,maxBufferLength:o=Ty,reused:s=[],minRepeatType:r=n.types.length}=i,a=Array.isArray(t)?new Xa(t,t.length):t,l=n.types,c=0,f=0;function h(C,k,S,A,I,O){let{id:L,start:D,end:F,size:$}=a,z=f,de=c;if($<0)if(a.next(),$==-1){let _e=s[L];S.push(_e),A.push(D-C);return}else if($==-3){c=L;return}else if($==-4){f=L;return}else throw new RangeError(`Unrecognized record size: ${$}`);let Ae=l[L],ye,bt,An=D-C;if(F-D<=o&&(bt=m(a.pos-k,I))){let _e=new Uint16Array(bt.size-bt.skip),se=a.pos-bt.size,Je=_e.length;for(;a.pos>se;)Je=b(bt.start,_e,Je);ye=new vn(_e,F-bt.start,n),An=bt.start-C}else{let _e=a.pos-$;a.next();let se=[],Je=[],st=L>=r?L:-1,Z=0,E=F;for(;a.pos>_e;)st>=0&&a.id==st&&a.size>=0?(a.end<=E-o&&(p(se,Je,D,Z,a.end,E,st,z,de),Z=se.length,E=a.end),a.next()):O>2500?d(D,_e,se,Je):h(D,_e,se,Je,st,O+1);if(st>=0&&Z>0&&Z<se.length&&p(se,Je,D,Z,D,E,st,z,de),se.reverse(),Je.reverse(),st>-1&&Z>0){let K=u(Ae,de);ye=Qa(Ae,se,Je,0,se.length,0,F-D,K,K)}else ye=g(Ae,se,Je,F-D,z-F,de)}S.push(ye),A.push(An)}function d(C,k,S,A){let I=[],O=0,L=-1;for(;a.pos>k;){let{id:D,start:F,end:$,size:z}=a;if(z>4)a.next();else{if(L>-1&&F<L)break;L<0&&(L=$-o),I.push(D,F,$),O++,a.next()}}if(O){let D=new Uint16Array(O*4),F=I[I.length-2];for(let $=I.length-3,z=0;$>=0;$-=3)D[z++]=I[$],D[z++]=I[$+1]-F,D[z++]=I[$+2]-F,D[z++]=z;S.push(new vn(D,I[2]-F,n)),A.push(F-C)}}function u(C,k){return(S,A,I)=>{let O=0,L=S.length-1,D,F;if(L>=0&&(D=S[L])instanceof Ke){if(!L&&D.type==C&&D.length==I)return D;(F=D.prop(le.lookAhead))&&(O=A[L]+D.length+F)}return g(C,S,A,I,O,k)}}function p(C,k,S,A,I,O,L,D,F){let $=[],z=[];for(;C.length>A;)$.push(C.pop()),z.push(k.pop()+S-I);C.push(g(n.types[L],$,z,O-I,D-O,F)),k.push(I-S)}function g(C,k,S,A,I,O,L){if(O){let D=[le.contextHash,O];L=L?[D].concat(L):[D]}if(I>25){let D=[le.lookAhead,I];L=L?[D].concat(L):[D]}return new Ke(C,k,S,A,L)}function m(C,k){let S=a.fork(),A=0,I=0,O=0,L=S.end-o,D={size:0,start:0,skip:0};e:for(let F=S.pos-C;S.pos>F;){let $=S.size;if(S.id==k&&$>=0){D.size=A,D.start=I,D.skip=O,O+=4,A+=4,S.next();continue}let z=S.pos-$;if($<0||z<F||S.start<L)break;let de=S.id>=r?4:0,Ae=S.start;for(S.next();S.pos>z;){if(S.size<0)if(S.size==-3||S.size==-4)de+=4;else break e;else S.id>=r&&(de+=4);S.next()}I=Ae,A+=$,O+=de}return(k<0||A==C)&&(D.size=A,D.start=I,D.skip=O),D.size>4?D:void 0}function b(C,k,S){let{id:A,start:I,end:O,size:L}=a;if(a.next(),L>=0&&A<r){let D=S;if(L>4){let F=a.pos-(L-4);for(;a.pos>F;)S=b(C,k,S)}k[--S]=D,k[--S]=O-C,k[--S]=I-C,k[--S]=A}else L==-3?c=A:L==-4&&(f=A);return S}let y=[],x=[];for(;a.pos>0;)h(i.start||0,i.bufferStart||0,y,x,-1,0);let v=(e=i.length)!==null&&e!==void 0?e:y.length?x[0]+y[0].length:0;return new Ke(l[i.topID],y.reverse(),x.reverse(),v)}const Cc=new WeakMap;function Yo(i,e){if(!i.isAnonymous||e instanceof vn||e.type!=i)return 1;let t=Cc.get(e);if(t==null){t=1;for(let n of e.children){if(n.type!=i||!(n instanceof Ke)){t=1;break}t+=Yo(i,n)}Cc.set(e,t)}return t}function Qa(i,e,t,n,o,s,r,a,l){let c=0;for(let p=n;p<o;p++)c+=Yo(i,e[p]);let f=Math.ceil(c*1.5/8),h=[],d=[];function u(p,g,m,b,y){for(let x=m;x<b;){let v=x,C=g[x],k=Yo(i,p[x]);for(x++;x<b;x++){let S=Yo(i,p[x]);if(k+S>=f)break;k+=S}if(x==v+1){if(k>f){let S=p[v];u(S.children,S.positions,0,S.children.length,g[v]+y);continue}h.push(p[v])}else{let S=g[x-1]+p[x-1].length-C;h.push(Qa(i,p,g,v,x,C,S,null,l))}d.push(C+y-s)}}return u(e,t,n,o,0),(a||l)(h,d,r)}class Bn{constructor(e,t,n,o,s=!1,r=!1){this.from=e,this.to=t,this.tree=n,this.offset=o,this.open=(s?1:0)|(r?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(e,t=[],n=!1){let o=[new Bn(0,e.length,e,0,!1,n)];for(let s of t)s.to>e.length&&o.push(s);return o}static applyChanges(e,t,n=128){if(!t.length)return e;let o=[],s=1,r=e.length?e[0]:null;for(let a=0,l=0,c=0;;a++){let f=a<t.length?t[a]:null,h=f?f.fromA:1e9;if(h-l>=n)for(;r&&r.from<h;){let d=r;if(l>=d.from||h<=d.to||c){let u=Math.max(d.from,l)-c,p=Math.min(d.to,h)-c;d=u>=p?null:new Bn(u,p,d.tree,d.offset+c,a>0,!!f)}if(d&&o.push(d),r.to>h)break;r=s<e.length?e[s++]:null}if(!f)break;l=f.toA,c=f.toA-f.toB}return o}}class Ry{startParse(e,t,n){return typeof e=="string"&&(e=new By(e)),n=n?n.length?n.map(o=>new sr(o.from,o.to)):[new sr(0,0)]:[new sr(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let o=this.startParse(e,t,n);for(;;){let s=o.advance();if(s)return s}}}class By{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}}new le({perNode:!0});let _y=0;class yt{constructor(e,t,n,o){this.name=e,this.set=t,this.base=n,this.modified=o,this.id=_y++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(e,t){let n=typeof e=="string"?e:"?";if(e instanceof yt&&(t=e),t?.base)throw new Error("Can not derive from a modified tag");let o=new yt(n,[],null,[]);if(o.set.push(o),t)for(let s of t.set)o.set.push(s);return o}static defineModifier(e){let t=new ps(e);return n=>n.modified.indexOf(t)>-1?n:ps.get(n.base||n,n.modified.concat(t).sort((o,s)=>o.id-s.id))}}let $y=0;class ps{constructor(e){this.name=e,this.instances=[],this.id=$y++}static get(e,t){if(!t.length)return e;let n=t[0].instances.find(a=>a.base==e&&Fy(t,a.modified));if(n)return n;let o=[],s=new yt(e.name,o,e,t);for(let a of t)a.instances.push(s);let r=Vy(t);for(let a of e.set)if(!a.modified.length)for(let l of r)o.push(ps.get(a,l));return s}}function Fy(i,e){return i.length==e.length&&i.every((t,n)=>t==e[n])}function Vy(i){let e=[[]];for(let t=0;t<i.length;t++)for(let n=0,o=e.length;n<o;n++)e.push(e[n].concat(i[t]));return e.sort((t,n)=>n.length-t.length)}function zy(i){let e=Object.create(null);for(let t in i){let n=i[t];Array.isArray(n)||(n=[n]);for(let o of t.split(" "))if(o){let s=[],r=2,a=o;for(let h=0;;){if(a=="..."&&h>0&&h+3==o.length){r=1;break}let d=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!d)throw new RangeError("Invalid path: "+o);if(s.push(d[0]=="*"?"":d[0][0]=='"'?JSON.parse(d[0]):d[0]),h+=d[0].length,h==o.length)break;let u=o[h++];if(h==o.length&&u=="!"){r=0;break}if(u!="/")throw new RangeError("Invalid path: "+o);a=o.slice(h)}let l=s.length-1,c=s[l];if(!c)throw new RangeError("Invalid path: "+o);let f=new gs(n,r,l>0?s.slice(0,l):null);e[c]=f.sort(e[c])}}return Hy.add(e)}const Hy=new le({combine(i,e){let t,n,o;for(;i||e;){if(!i||e&&i.depth>=e.depth?(o=e,e=e.next):(o=i,i=i.next),t&&t.mode==o.mode&&!o.context&&!t.context)continue;let s=new gs(o.tags,o.mode,o.context);t?t.next=s:n=s,t=s}return n}});class gs{constructor(e,t,n,o){this.tags=e,this.mode=t,this.context=n,this.next=o}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}}gs.empty=new gs([],2,null);function qy(i,e){let t=Object.create(null);for(let s of i)if(!Array.isArray(s.tag))t[s.tag.id]=s.class;else for(let r of s.tag)t[r.id]=s.class;let{scope:n,all:o=null}={};return{style:s=>{let r=o;for(let a of s)for(let l of a.set){let c=t[l.id];if(c){r=r?r+" "+c:c;break}}return r},scope:n}}const N=yt.define,Ro=N(),cn=N(),Mc=N(cn),Ac=N(cn),fn=N(),Bo=N(fn),rr=N(fn),$t=N(),In=N($t),Bt=N(),_t=N(),ga=N(),Di=N(ga),_o=N(),J={comment:Ro,lineComment:N(Ro),blockComment:N(Ro),docComment:N(Ro),name:cn,variableName:N(cn),typeName:Mc,tagName:N(Mc),propertyName:Ac,attributeName:N(Ac),className:N(cn),labelName:N(cn),namespace:N(cn),macroName:N(cn),literal:fn,string:Bo,docString:N(Bo),character:N(Bo),attributeValue:N(Bo),number:rr,integer:N(rr),float:N(rr),bool:N(fn),regexp:N(fn),escape:N(fn),color:N(fn),url:N(fn),keyword:Bt,self:N(Bt),null:N(Bt),atom:N(Bt),unit:N(Bt),modifier:N(Bt),operatorKeyword:N(Bt),controlKeyword:N(Bt),definitionKeyword:N(Bt),moduleKeyword:N(Bt),operator:_t,derefOperator:N(_t),arithmeticOperator:N(_t),logicOperator:N(_t),bitwiseOperator:N(_t),compareOperator:N(_t),updateOperator:N(_t),definitionOperator:N(_t),typeOperator:N(_t),controlOperator:N(_t),punctuation:ga,separator:N(ga),bracket:Di,angleBracket:N(Di),squareBracket:N(Di),paren:N(Di),brace:N(Di),content:$t,heading:In,heading1:N(In),heading2:N(In),heading3:N(In),heading4:N(In),heading5:N(In),heading6:N(In),contentSeparator:N($t),list:N($t),quote:N($t),emphasis:N($t),strong:N($t),link:N($t),monospace:N($t),strikethrough:N($t),inserted:N(),deleted:N(),changed:N(),invalid:N(),meta:_o,documentMeta:N(_o),annotation:N(_o),processingInstruction:N(_o),definition:yt.defineModifier("definition"),constant:yt.defineModifier("constant"),function:yt.defineModifier("function"),standard:yt.defineModifier("standard"),local:yt.defineModifier("local"),special:yt.defineModifier("special")};for(let i in J){let e=J[i];e instanceof yt&&(e.name=i)}qy([{tag:J.link,class:"tok-link"},{tag:J.heading,class:"tok-heading"},{tag:J.emphasis,class:"tok-emphasis"},{tag:J.strong,class:"tok-strong"},{tag:J.keyword,class:"tok-keyword"},{tag:J.atom,class:"tok-atom"},{tag:J.bool,class:"tok-bool"},{tag:J.url,class:"tok-url"},{tag:J.labelName,class:"tok-labelName"},{tag:J.inserted,class:"tok-inserted"},{tag:J.deleted,class:"tok-deleted"},{tag:J.literal,class:"tok-literal"},{tag:J.string,class:"tok-string"},{tag:J.number,class:"tok-number"},{tag:[J.regexp,J.escape,J.special(J.string)],class:"tok-string2"},{tag:J.variableName,class:"tok-variableName"},{tag:J.local(J.variableName),class:"tok-variableName tok-local"},{tag:J.definition(J.variableName),class:"tok-variableName tok-definition"},{tag:J.special(J.variableName),class:"tok-variableName2"},{tag:J.definition(J.propertyName),class:"tok-propertyName tok-definition"},{tag:J.typeName,class:"tok-typeName"},{tag:J.namespace,class:"tok-namespace"},{tag:J.className,class:"tok-className"},{tag:J.macroName,class:"tok-macroName"},{tag:J.propertyName,class:"tok-propertyName"},{tag:J.operator,class:"tok-operator"},{tag:J.comment,class:"tok-comment"},{tag:J.meta,class:"tok-meta"},{tag:J.invalid,class:"tok-invalid"},{tag:J.punctuation,class:"tok-punctuation"}]);var ar;const $o=new le,Wy=new le;class Zt{constructor(e,t,n=[],o=""){this.data=e,this.name=o,oe.prototype.hasOwnProperty("tree")||Object.defineProperty(oe.prototype,"tree",{get(){return bi(this)}}),this.parser=t,this.extension=[vi.of(this),oe.languageData.of((s,r,a)=>{let l=Ic(s,r,a),c=l.type.prop($o);if(!c)return[];let f=s.facet(c),h=l.type.prop(Wy);if(h){let d=l.resolve(r-l.from,a);for(let u of h)if(u.test(d,s)){let p=s.facet(u.facet);return u.type=="replace"?p:p.concat(f)}}return f})].concat(n)}isActiveAt(e,t,n=-1){return Ic(e,t,n).type.prop($o)==this.data}findRegions(e){let t=e.facet(vi);if(t?.data==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let n=[],o=(s,r)=>{if(s.prop($o)==this.data){n.push({from:r,to:r+s.length});return}let a=s.prop(le.mounted);if(a){if(a.tree.prop($o)==this.data){if(a.overlay)for(let l of a.overlay)n.push({from:l.from+r,to:l.to+r});else n.push({from:r,to:r+s.length});return}else if(a.overlay){let l=n.length;if(o(a.tree,a.overlay[0].from+r),n.length>l)return}}for(let l=0;l<s.children.length;l++){let c=s.children[l];c instanceof Ke&&o(c,s.positions[l]+r)}};return o(bi(e),0),n}get allowsNesting(){return!0}}Zt.setState=Se.define();function Ic(i,e,t){let n=i.facet(vi),o=bi(i).topNode;if(!n||n.allowsNesting)for(let s=o;s;s=s.enter(e,t,He.ExcludeBuffers))s.type.isTop&&(o=s);return o}function bi(i){let e=i.field(Zt.state,!1);return e?e.tree:Ke.empty}class jy{constructor(e){this.doc=e,this.cursorPos=0,this.string="",this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let n=this.cursorPos-this.string.length;return e<n||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-n,t-n)}}let Pi=null;class ms{constructor(e,t,n=[],o,s,r,a,l){this.parser=e,this.state=t,this.fragments=n,this.tree=o,this.treeLen=s,this.viewport=r,this.skipped=a,this.scheduleOn=l,this.parse=null,this.tempSkipped=[]}static create(e,t,n){return new ms(e,t,[],Ke.empty,0,n,[],null)}startParse(){return this.parser.startParse(new jy(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=Ke.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{var n;if(typeof e=="number"){let o=Date.now()+e;e=()=>Date.now()>o}for(this.parse||(this.parse=this.startParse()),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let o=this.parse.advance();if(o)if(this.fragments=this.withoutTempSkipped(Bn.addTree(o,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=(n=this.parse.stoppedAt)!==null&&n!==void 0?n:this.state.doc.length,this.tree=o,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0;if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(Bn.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=Pi;Pi=this;try{return e()}finally{Pi=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=Tc(e,t.from,t.to);return e}changes(e,t){let{fragments:n,tree:o,treeLen:s,viewport:r,skipped:a}=this;if(this.takeTree(),!e.empty){let l=[];if(e.iterChangedRanges((c,f,h,d)=>l.push({fromA:c,toA:f,fromB:h,toB:d})),n=Bn.applyChanges(n,l),o=Ke.empty,s=0,r={from:e.mapPos(r.from,-1),to:e.mapPos(r.to,1)},this.skipped.length){a=[];for(let c of this.skipped){let f=e.mapPos(c.from,1),h=e.mapPos(c.to,-1);f<h&&a.push({from:f,to:h})}}}return new ms(this.parser,t,n,o,s,r,a,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let n=0;n<this.skipped.length;n++){let{from:o,to:s}=this.skipped[n];o<e.to&&s>e.from&&(this.fragments=Tc(this.fragments,o,s),this.skipped.splice(n--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends Ry{createParse(t,n,o){let s=o[0].from,r=o[o.length-1].to;return{parsedPos:s,advance(){let l=Pi;if(l){for(let c of o)l.tempSkipped.push(c);e&&(l.scheduleOn=l.scheduleOn?Promise.all([l.scheduleOn,e]):e)}return this.parsedPos=r,new Ke(Ct.none,[],[],r-s)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return Pi}}function Tc(i,e,t){return Bn.applyChanges(i,[{fromA:e,toA:t,fromB:e,toB:t}])}class yi{constructor(e){this.context=e,this.tree=e.tree}apply(e){if(!e.docChanged&&this.tree==this.context.tree)return this;let t=this.context.changes(e.changes,e.state),n=this.context.treeLen==e.startState.doc.length?void 0:Math.max(e.changes.mapPos(this.context.treeLen),t.viewport.to);return t.work(20,n)||t.takeTree(),new yi(t)}static init(e){let t=Math.min(3e3,e.doc.length),n=ms.create(e.facet(vi).parser,e,{from:0,to:t});return n.work(20,t)||n.takeTree(),new yi(n)}}Zt.state=kn.define({create:yi.init,update(i,e){for(let t of e.effects)if(t.is(Zt.setState))return t.value;return e.startState.facet(vi)!=e.state.facet(vi)?yi.init(e.state):i.apply(e)}});let Yd=i=>{let e=setTimeout(()=>i(),500);return()=>clearTimeout(e)};typeof requestIdleCallback<"u"&&(Yd=i=>{let e=-1,t=setTimeout(()=>{e=requestIdleCallback(i,{timeout:400})},100);return()=>e<0?clearTimeout(t):cancelIdleCallback(e)});const lr=typeof navigator<"u"&&(!((ar=navigator.scheduling)===null||ar===void 0)&&ar.isInputPending)?()=>navigator.scheduling.isInputPending():null,Uy=sn.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(Zt.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(Zt.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=Yd(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:n,viewport:{to:o}}=this.view,s=n.field(Zt.state);if(s.tree==s.context.tree&&s.context.isDone(o+1e5))return;let r=Date.now()+Math.min(this.chunkBudget,100,e&&!lr?Math.max(25,e.timeRemaining()-5):1e9),a=s.context.treeLen<o&&n.doc.length>o+1e3,l=s.context.work(()=>lr&&lr()||Date.now()>r,o+(a?0:1e5));this.chunkBudget-=Date.now()-t,(l||this.chunkBudget<=0)&&(s.context.takeTree(),this.view.dispatch({effects:Zt.setState.of(new yi(s.context))})),this.chunkBudget>0&&!(l&&!a)&&this.scheduleWork(),this.checkAsyncSchedule(s.context)}checkAsyncSchedule(e){e.scheduleOn&&(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(t=>dt(this.view.state,t)).then(()=>this.workScheduled--),e.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),vi=q.define({combine(i){return i.length?i[0]:null},enables:i=>[Zt.state,Uy,G.contentAttributes.compute([i],e=>{let t=e.facet(i);return t&&t.name?{"data-language":t.name}:{}})]}),Gy=q.define(),Kd=q.define({combine:i=>{if(!i.length)return"  ";let e=i[0];if(!e||/\S/.test(e)||Array.from(e).some(t=>t!=e[0]))throw new Error("Invalid indent unit: "+JSON.stringify(i[0]));return e}});function ma(i){let e=i.facet(Kd);return e.charCodeAt(0)==9?i.tabSize*e.length:e.length}function Dc(i,e){let t="",n=i.tabSize,o=i.facet(Kd)[0];if(o=="	"){for(;e>=n;)t+="	",e-=n;o=" "}for(let s=0;s<e;s++)t+=o;return t}function Yy(i,e){i instanceof oe&&(i=new Za(i));for(let n of i.state.facet(Gy)){let o=n(i,e);if(o!==void 0)return o}let t=bi(i.state);return t.length>=e?Xy(i,t,e):null}class Za{constructor(e,t={}){this.state=e,this.options=t,this.unit=ma(e)}lineAt(e,t=1){let n=this.state.doc.lineAt(e),{simulateBreak:o,simulateDoubleBreak:s}=this.options;return o!=null&&o>=n.from&&o<=n.to?s&&o==e?{text:"",from:e}:(t<0?o<e:o<=e)?{text:n.text.slice(o-n.from),from:o}:{text:n.text.slice(0,o-n.from),from:n.from}:n}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return"";let{text:n,from:o}=this.lineAt(e,t);return n.slice(e-o,Math.min(n.length,e+100-o))}column(e,t=1){let{text:n,from:o}=this.lineAt(e,t),s=this.countColumn(n,e-o),r=this.options.overrideIndentation?this.options.overrideIndentation(o):-1;return r>-1&&(s+=r-this.countColumn(n,n.search(/\S|$/))),s}countColumn(e,t=e.length){return Fa(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:n,from:o}=this.lineAt(e,t),s=this.options.overrideIndentation;if(s){let r=s(o);if(r>-1)return r}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const Ky=new le;function Xy(i,e,t){let n=e.resolveStack(t),o=e.resolveInner(t,-1).resolve(t,0).enterUnfinishedNodesBefore(t);if(o!=n.node){let s=[];for(let r=o;r&&!(r.from<n.node.from||r.to>n.node.to||r.from==n.node.from&&r.type==n.node.type);r=r.parent)s.push(r);for(let r=s.length-1;r>=0;r--)n={node:s[r],next:n}}return Xd(n,i,t)}function Xd(i,e,t){for(let n=i;n;n=n.next){let o=Qy(n.node);if(o)return o(el.create(e,t,n))}return 0}function Jy(i){return i.pos==i.options.simulateBreak&&i.options.simulateDoubleBreak}function Qy(i){let e=i.type.prop(Ky);if(e)return e;let t=i.firstChild,n;if(t&&(n=t.type.prop(le.closedBy))){let o=i.lastChild,s=o&&n.indexOf(o.name)>-1;return r=>nv(r,!0,1,void 0,s&&!Jy(r)?o.from:void 0)}return i.parent==null?Zy:null}function Zy(){return 0}class el extends Za{constructor(e,t,n){super(e.state,e.options),this.base=e,this.pos=t,this.context=n}get node(){return this.context.node}static create(e,t,n){return new el(e,t,n)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let n=e.resolve(t.from);for(;n.parent&&n.parent.from==n.from;)n=n.parent;if(ev(n,e))break;t=this.state.doc.lineAt(n.from)}return this.lineIndent(t.from)}continue(){return Xd(this.context.next,this.base,this.pos)}}function ev(i,e){for(let t=e;t;t=t.parent)if(i==t)return!0;return!1}function tv(i){let e=i.node,t=e.childAfter(e.from),n=e.lastChild;if(!t)return null;let o=i.options.simulateBreak,s=i.state.doc.lineAt(t.from),r=o==null||o<=s.from?s.to:Math.min(s.to,o);for(let a=t.to;;){let l=e.childAfter(a);if(!l||l==n)return null;if(!l.type.isSkipped){if(l.from>=r)return null;let c=/^ */.exec(s.text.slice(t.to-s.from))[0].length;return{from:t.from,to:t.to+c}}a=l.to}}function nv(i,e,t,n,o){let s=i.textAfter,r=s.match(/^\s*/)[0].length,a=n&&s.slice(r,r+n.length)==n||o==i.pos+r,l=tv(i);return l?a?i.column(l.from):i.column(l.to):i.baseIndent+(a?0:i.unit*t)}const iv=Object.create(null),Pc=[Ct.none],Lc=[],Oc=Object.create(null),ov=Object.create(null);for(let[i,e]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])ov[i]=sv(iv,e);function cr(i,e){Lc.indexOf(i)>-1||(Lc.push(i),console.warn(e))}function sv(i,e){let t=[];for(let a of e.split(" ")){let l=[];for(let c of a.split(".")){let f=i[c]||J[c];f?typeof f=="function"?l.length?l=l.map(f):cr(c,`Modifier ${c} used at start of tag`):l.length?cr(c,`Tag ${c} used as modifier`):l=Array.isArray(f)?f:[f]:cr(c,`Unknown highlighting tag ${c}`)}for(let c of l)t.push(c)}if(!t.length)return 0;let n=e.replace(/ /g,"_"),o=n+" "+t.map(a=>a.id),s=Oc[o];if(s)return s.id;let r=Oc[o]=Ct.define({id:Pc.length,name:n,props:[zy({[n]:t})]});return Pc.push(r),r.id}Pe.RTL,Pe.LTR;class Jd{constructor(e,t,n,o){this.state=e,this.pos=t,this.explicit=n,this.view=o,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=bi(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),o=t.text.slice(n-t.from,this.pos-t.from),s=o.search(Qd(e,!1));return s<0?null:{from:n+s,to:this.pos,text:o.slice(s)}}get aborted(){return this.abortListeners==null}addEventListener(e,t,n){e=="abort"&&this.abortListeners&&(this.abortListeners.push(t),n&&n.onDocChange&&(this.abortOnDocChange=!0))}}function Ec(i){let e=Object.keys(i).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function rv(i){let e=Object.create(null),t=Object.create(null);for(let{label:o}of i){e[o[0]]=!0;for(let s=1;s<o.length;s++)t[o[s]]=!0}let n=Ec(e)+Ec(t)+"*$";return[new RegExp("^"+n),new RegExp(n)]}function av(i){let e=i.map(o=>typeof o=="string"?{label:o}:o),[t,n]=e.every(o=>/^\w+$/.test(o.label))?[/\w*$/,/\w+$/]:rv(e);return o=>{let s=o.matchBefore(n);return s||o.explicit?{from:s?s.from:o.pos,options:e,validFor:t}:null}}class Nc{constructor(e,t,n,o){this.completion=e,this.source=t,this.match=n,this.score=o}}function _n(i){return i.selection.main.from}function Qd(i,e){var t;let{source:n}=i,o=e&&n[0]!="^",s=n[n.length-1]!="$";return!o&&!s?i:new RegExp(`${o?"^":""}(?:${n})${s?"$":""}`,(t=i.flags)!==null&&t!==void 0?t:i.ignoreCase?"i":"")}const Zd=Gn.define();function lv(i,e,t,n){let{main:o}=i.selection,s=t-o.from,r=n-o.from;return{...i.changeByRange(a=>{if(a!=o&&t!=n&&i.sliceDoc(a.from+s,a.from+r)!=i.sliceDoc(t,n))return{range:a};let l=i.toText(e);return{changes:{from:a.from+s,to:n==o.from?a.to:a.from+r,insert:l},range:R.cursor(a.from+s+l.length)}}),scrollIntoView:!0,userEvent:"input.complete"}}const Rc=new WeakMap;function cv(i){if(!Array.isArray(i))return i;let e=Rc.get(i);return e||Rc.set(i,e=av(i)),e}const bs=Se.define(),oo=Se.define();class fv{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let n=Dn(e,t),o=Jn(n);this.chars.push(n);let s=e.slice(t,t+o),r=s.toUpperCase();this.folded.push(Dn(r==s?s.toLowerCase():r,0)),t+=o}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:o,precise:s,byWord:r}=this;if(t.length==1){let y=Dn(e,0),x=Jn(y),v=x==e.length?0:-100;if(y!=t[0])if(y==n[0])v+=-200;else return null;return this.ret(v,[0,x])}let a=e.indexOf(this.pattern);if(a==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let l=t.length,c=0;if(a<0){for(let y=0,x=Math.min(e.length,200);y<x&&c<l;){let v=Dn(e,y);(v==t[c]||v==n[c])&&(o[c++]=y),y+=Jn(v)}if(c<l)return null}let f=0,h=0,d=!1,u=0,p=-1,g=-1,m=/[a-z]/.test(e),b=!0;for(let y=0,x=Math.min(e.length,200),v=0;y<x&&h<l;){let C=Dn(e,y);a<0&&(f<l&&C==t[f]&&(s[f++]=y),u<l&&(C==t[u]||C==n[u]?(u==0&&(p=y),g=y+1,u++):u=0));let k,S=C<255?C>=48&&C<=57||C>=97&&C<=122?2:C>=65&&C<=90?1:0:(k=Sb(C))!=k.toLowerCase()?1:k!=k.toUpperCase()?2:0;(!y||S==1&&m||v==0&&S!=0)&&(t[h]==C||n[h]==C&&(d=!0)?r[h++]=y:r.length&&(b=!1)),v=S,y+=Jn(C)}return h==l&&r[0]==0&&b?this.result(-100+(d?-200:0),r,e):u==l&&p==0?this.ret(-200-e.length+(g==e.length?0:-100),[0,g]):a>-1?this.ret(-700-e.length,[a,a+this.pattern.length]):u==l?this.ret(-900-e.length,[p,g]):h==l?this.result(-100+(d?-200:0)+-700+(b?0:-1100),r,e):t.length==2?null:this.result((o[0]?-700:0)+-200+-1100,o,e)}result(e,t,n){let o=[],s=0;for(let r of t){let a=r+(this.astral?Jn(Dn(n,r)):1);s&&o[s-1]==r?o[s-1]=a:(o[s++]=r,o[s++]=a)}return this.ret(e-n.length,o)}}class hv{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),n=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return n==null?null:(this.matched=[0,t.length],this.score=n+(e.length==this.pattern.length?0:-100),this)}}const Be=q.define({combine(i){return Nb(i,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>"",optionClass:()=>"",aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:dv,filterStrict:!1,compareCompletions:(e,t)=>(e.sortText||e.label).localeCompare(t.sortText||t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>Bc(e(n),t(n)),optionClass:(e,t)=>n=>Bc(e(n),t(n)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function Bc(i,e){return i?e?i+" "+e:i:e}function dv(i,e,t,n,o,s){let r=i.textDirection==Pe.RTL,a=r,l=!1,c="top",f,h,d=e.left-o.left,u=o.right-e.right,p=n.right-n.left,g=n.bottom-n.top;if(a&&d<Math.min(p,u)?a=!1:!a&&u<Math.min(p,d)&&(a=!0),p<=(a?d:u))f=Math.max(o.top,Math.min(t.top,o.bottom-g))-e.top,h=Math.min(400,a?d:u);else{l=!0,h=Math.min(400,(r?e.right:o.right-e.left)-30);let y=o.bottom-e.bottom;y>=g||y>e.top?f=t.bottom-e.top:(c="bottom",f=e.bottom-t.top)}let m=(e.bottom-e.top)/s.offsetHeight,b=(e.right-e.left)/s.offsetWidth;return{style:`${c}: ${f/m}px; max-width: ${h/b}px`,class:"cm-completionInfo-"+(l?r?"left-narrow":"right-narrow":a?"left":"right")}}function uv(i){let e=i.addToOptions.slice();return i.icons&&e.push({render(t){let n=document.createElement("div");return n.classList.add("cm-completionIcon"),t.type&&n.classList.add(...t.type.split(/\s+/g).map(o=>"cm-completionIcon-"+o)),n.setAttribute("aria-hidden","true"),n},position:20}),e.push({render(t,n,o,s){let r=document.createElement("span");r.className="cm-completionLabel";let a=t.displayLabel||t.label,l=0;for(let c=0;c<s.length;){let f=s[c++],h=s[c++];f>l&&r.appendChild(document.createTextNode(a.slice(l,f)));let d=r.appendChild(document.createElement("span"));d.appendChild(document.createTextNode(a.slice(f,h))),d.className="cm-completionMatchedText",l=h}return l<a.length&&r.appendChild(document.createTextNode(a.slice(l))),r},position:50},{render(t){if(!t.detail)return null;let n=document.createElement("span");return n.className="cm-completionDetail",n.textContent=t.detail,n},position:80}),e.sort((t,n)=>t.position-n.position).map(t=>t.render)}function fr(i,e,t){if(i<=t)return{from:0,to:i};if(e<0&&(e=0),e<=i>>1){let o=Math.floor(e/t);return{from:o*t,to:(o+1)*t}}let n=Math.floor((i-e)/t);return{from:i-(n+1)*t,to:i-n*t}}class pv{constructor(e,t,n){this.view=e,this.stateField=t,this.applyCompletion=n,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:l=>this.placeInfo(l),key:this},this.space=null,this.currentClass="";let o=e.state.field(t),{options:s,selected:r}=o.open,a=e.state.facet(Be);this.optionContent=uv(a),this.optionClass=a.optionClass,this.tooltipClass=a.tooltipClass,this.range=fr(s.length,r,a.maxRenderedOptions),this.dom=document.createElement("div"),this.dom.className="cm-tooltip-autocomplete",this.updateTooltipClass(e.state),this.dom.addEventListener("mousedown",l=>{let{options:c}=e.state.field(t).open;for(let f=l.target,h;f&&f!=this.dom;f=f.parentNode)if(f.nodeName=="LI"&&(h=/-(\d+)$/.exec(f.id))&&+h[1]<c.length){this.applyCompletion(e,c[+h[1]]),l.preventDefault();return}}),this.dom.addEventListener("focusout",l=>{let c=e.state.field(this.stateField,!1);c&&c.tooltip&&e.state.facet(Be).closeOnBlur&&l.relatedTarget!=e.contentDOM&&e.dispatch({effects:oo.of(null)})}),this.showOptions(s,o.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener("scroll",()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){var t;let n=e.state.field(this.stateField),o=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),n!=o){let{options:s,selected:r,disabled:a}=n.open;(!o.open||o.open.options!=s)&&(this.range=fr(s.length,r,e.state.facet(Be).maxRenderedOptions),this.showOptions(s,n.id)),this.updateSel(),a!=((t=o.open)===null||t===void 0?void 0:t.disabled)&&this.dom.classList.toggle("cm-tooltip-autocomplete-disabled",!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let n of this.currentClass.split(" "))n&&this.dom.classList.remove(n);for(let n of t.split(" "))n&&this.dom.classList.add(n);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;(t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=fr(t.options.length,t.selected,this.view.state.facet(Be).maxRenderedOptions),this.showOptions(t.options,e.id));let n=this.updateSelectedOption(t.selected);if(n){this.destroyInfo();let{completion:o}=t.options[t.selected],{info:s}=o;if(!s)return;let r=typeof s=="string"?document.createTextNode(s):s(o);if(!r)return;"then"in r?r.then(a=>{a&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(a,o)}).catch(a=>dt(this.view.state,a,"completion info")):(this.addInfoPane(r,o),n.setAttribute("aria-describedby",this.info.id))}}addInfoPane(e,t){this.destroyInfo();let n=this.info=document.createElement("div");if(n.className="cm-tooltip cm-completionInfo",n.id="cm-completionInfo-"+Math.floor(Math.random()*65535).toString(16),e.nodeType!=null)n.appendChild(e),this.infoDestroy=null;else{let{dom:o,destroy:s}=e;n.appendChild(o),this.infoDestroy=s||null}this.dom.appendChild(n),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,o=this.range.from;n;n=n.nextSibling,o++)n.nodeName!="LI"||!n.id?o--:o==e?n.hasAttribute("aria-selected")||(n.setAttribute("aria-selected","true"),t=n):n.hasAttribute("aria-selected")&&(n.removeAttribute("aria-selected"),n.removeAttribute("aria-describedby"));return t&&mv(this.list,t),t}measureInfo(){let e=this.dom.querySelector("[aria-selected]");if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),o=e.getBoundingClientRect(),s=this.space;if(!s){let r=this.dom.ownerDocument.documentElement;s={left:0,top:0,right:r.clientWidth,bottom:r.clientHeight}}return o.top>Math.min(s.bottom,t.bottom)-10||o.bottom<Math.max(s.top,t.top)+10?null:this.view.state.facet(Be).positionInfo(this.view,t,o,n,s,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className="cm-tooltip cm-completionInfo "+(e.class||"")):this.info.style.cssText="top: -1e6px")}createListBox(e,t,n){const o=document.createElement("ul");o.id=t,o.setAttribute("role","listbox"),o.setAttribute("aria-expanded","true"),o.setAttribute("aria-label",this.view.state.phrase("Completions")),o.addEventListener("mousedown",r=>{r.target==o&&r.preventDefault()});let s=null;for(let r=n.from;r<n.to;r++){let{completion:a,match:l}=e[r],{section:c}=a;if(c){let d=typeof c=="string"?c:c.name;if(d!=s&&(r>n.from||n.from==0))if(s=d,typeof c!="string"&&c.header)o.appendChild(c.header(c));else{let u=o.appendChild(document.createElement("completion-section"));u.textContent=d}}const f=o.appendChild(document.createElement("li"));f.id=t+"-"+r,f.setAttribute("role","option");let h=this.optionClass(a);h&&(f.className=h);for(let d of this.optionContent){let u=d(a,this.view.state,this.view,l);u&&f.appendChild(u)}}return n.from&&o.classList.add("cm-completionListIncompleteTop"),n.to<e.length&&o.classList.add("cm-completionListIncompleteBottom"),o}destroyInfo(){this.info&&(this.infoDestroy&&this.infoDestroy(),this.info.remove(),this.info=null)}destroy(){this.destroyInfo()}}function gv(i,e){return t=>new pv(t,i,e)}function mv(i,e){let t=i.getBoundingClientRect(),n=e.getBoundingClientRect(),o=t.height/i.offsetHeight;n.top<t.top?i.scrollTop-=(t.top-n.top)/o:n.bottom>t.bottom&&(i.scrollTop+=(n.bottom-t.bottom)/o)}function _c(i){return(i.boost||0)*100+(i.apply?10:0)+(i.info?5:0)+(i.type?1:0)}function bv(i,e){let t=[],n=null,o=null,s=f=>{t.push(f);let{section:h}=f.completion;if(h){n||(n=[]);let d=typeof h=="string"?h:h.name;n.some(u=>u.name==d)||n.push(typeof h=="string"?{name:d}:h)}},r=e.facet(Be);for(let f of i)if(f.hasResult()){let h=f.result.getMatch;if(f.result.filter===!1)for(let d of f.result.options)s(new Nc(d,f.source,h?h(d):[],1e9-t.length));else{let d=e.sliceDoc(f.from,f.to),u,p=r.filterStrict?new hv(d):new fv(d);for(let g of f.result.options)if(u=p.match(g.label)){let m=g.displayLabel?h?h(g,u.matched):[]:u.matched,b=u.score+(g.boost||0);if(s(new Nc(g,f.source,m,b)),typeof g.section=="object"&&g.section.rank==="dynamic"){let{name:y}=g.section;o||(o=Object.create(null)),o[y]=Math.max(b,o[y]||-1e9)}}}}if(n){let f=Object.create(null),h=0,d=(u,p)=>(u.rank==="dynamic"&&p.rank==="dynamic"?o[p.name]-o[u.name]:0)||(typeof u.rank=="number"?u.rank:1e9)-(typeof p.rank=="number"?p.rank:1e9)||(u.name<p.name?-1:1);for(let u of n.sort(d))h-=1e5,f[u.name]=h;for(let u of t){let{section:p}=u.completion;p&&(u.score+=f[typeof p=="string"?p:p.name])}}let a=[],l=null,c=r.compareCompletions;for(let f of t.sort((h,d)=>d.score-h.score||c(h.completion,d.completion))){let h=f.completion;!l||l.label!=h.label||l.detail!=h.detail||l.type!=null&&h.type!=null&&l.type!=h.type||l.apply!=h.apply||l.boost!=h.boost?a.push(f):_c(f.completion)>_c(l)&&(a[a.length-1]=f),l=f.completion}return a}class Zn{constructor(e,t,n,o,s,r){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=o,this.selected=s,this.disabled=r}setSelected(e,t){return e==this.selected||e>=this.options.length?this:new Zn(this.options,$c(t,e),this.tooltip,this.timestamp,e,this.disabled)}static build(e,t,n,o,s,r){if(o&&!r&&e.some(c=>c.isPending))return o.setDisabled();let a=bv(e,t);if(!a.length)return o&&e.some(c=>c.isPending)?o.setDisabled():null;let l=t.facet(Be).selectOnOpen?0:-1;if(o&&o.selected!=l&&o.selected!=-1){let c=o.options[o.selected].completion;for(let f=0;f<a.length;f++)if(a[f].completion==c){l=f;break}}return new Zn(a,$c(n,l),{pos:e.reduce((c,f)=>f.hasResult()?Math.min(c,f.from):c,1e8),create:kv,above:s.aboveCursor},o?o.timestamp:Date.now(),l,!1)}map(e){return new Zn(this.options,this.attrs,{...this.tooltip,pos:e.mapPos(this.tooltip.pos)},this.timestamp,this.selected,this.disabled)}setDisabled(){return new Zn(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}}class ys{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new ys(xv,"cm-ac-"+Math.floor(Math.random()*2e6).toString(36),null)}update(e){let{state:t}=e,n=t.facet(Be),s=(n.override||t.languageDataAt("autocomplete",_n(t)).map(cv)).map(l=>(this.active.find(f=>f.source==l)||new wt(l,this.active.some(f=>f.state!=0)?1:0)).update(e,n));s.length==this.active.length&&s.every((l,c)=>l==this.active[c])&&(s=this.active);let r=this.open,a=e.effects.some(l=>l.is(tl));r&&e.docChanged&&(r=r.map(e.changes)),e.selection||s.some(l=>l.hasResult()&&e.changes.touchesRange(l.from,l.to))||!yv(s,this.active)||a?r=Zn.build(s,t,this.id,r,n,a):r&&r.disabled&&!s.some(l=>l.isPending)&&(r=null),!r&&s.every(l=>!l.isPending)&&s.some(l=>l.hasResult())&&(s=s.map(l=>l.hasResult()?new wt(l.source,0):l));for(let l of e.effects)l.is(tu)&&(r=r&&r.setSelected(l.value,this.id));return s==this.active&&r==this.open?this:new ys(s,this.id,r)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?vv:wv}}function yv(i,e){if(i==e)return!0;for(let t=0,n=0;;){for(;t<i.length&&!i[t].hasResult();)t++;for(;n<e.length&&!e[n].hasResult();)n++;let o=t==i.length,s=n==e.length;if(o||s)return o==s;if(i[t++].result!=e[n++].result)return!1}}const vv={"aria-autocomplete":"list"},wv={};function $c(i,e){let t={"aria-autocomplete":"list","aria-haspopup":"listbox","aria-controls":i};return e>-1&&(t["aria-activedescendant"]=i+"-"+e),t}const xv=[];function eu(i,e){if(i.isUserEvent("input.complete")){let n=i.annotation(Zd);if(n&&e.activateOnCompletion(n))return 12}let t=i.isUserEvent("input.type");return t&&e.activateOnTyping?5:t?1:i.isUserEvent("delete.backward")?2:i.selection?8:i.docChanged?16:0}class wt{constructor(e,t,n=!1){this.source=e,this.state=t,this.explicit=n}hasResult(){return!1}get isPending(){return this.state==1}update(e,t){let n=eu(e,t),o=this;(n&8||n&16&&this.touches(e))&&(o=new wt(o.source,0)),n&4&&o.state==0&&(o=new wt(this.source,1)),o=o.updateFor(e,n);for(let s of e.effects)if(s.is(bs))o=new wt(o.source,1,s.value);else if(s.is(oo))o=new wt(o.source,0);else if(s.is(tl))for(let r of s.value)r.source==o.source&&(o=r);return o}updateFor(e,t){return this.map(e.changes)}map(e){return this}touches(e){return e.changes.touchesRange(_n(e.state))}}class si extends wt{constructor(e,t,n,o,s,r){super(e,3,t),this.limit=n,this.result=o,this.from=s,this.to=r}hasResult(){return!0}updateFor(e,t){var n;if(!(t&3))return this.map(e.changes);let o=this.result;o.map&&!e.changes.empty&&(o=o.map(o,e.changes));let s=e.changes.mapPos(this.from),r=e.changes.mapPos(this.to,1),a=_n(e.state);if(a>r||!o||t&2&&(_n(e.startState)==this.from||a<this.limit))return new wt(this.source,t&4?1:0);let l=e.changes.mapPos(this.limit);return Sv(o.validFor,e.state,s,r)?new si(this.source,this.explicit,l,o,s,r):o.update&&(o=o.update(o,s,r,new Jd(e.state,a,!1)))?new si(this.source,this.explicit,l,o,o.from,(n=o.to)!==null&&n!==void 0?n:_n(e.state)):new wt(this.source,1,this.explicit)}map(e){return e.empty?this:(this.result.map?this.result.map(this.result,e):this.result)?new si(this.source,this.explicit,e.mapPos(this.limit),this.result,e.mapPos(this.from),e.mapPos(this.to,1)):new wt(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}}function Sv(i,e,t,n){if(!i)return!1;let o=e.sliceDoc(t,n);return typeof i=="function"?i(o,t,n,e):Qd(i,!0).test(o)}const tl=Se.define({map(i,e){return i.map(t=>t.map(e))}}),tu=Se.define(),ot=kn.define({create(){return ys.start()},update(i,e){return i.update(e)},provide:i=>[qd.from(i,e=>e.tooltip),G.contentAttributes.from(i,e=>e.attrs)]});function nl(i,e){const t=e.completion.apply||e.completion.label;let n=i.state.field(ot).active.find(o=>o.source==e.source);return n instanceof si?(typeof t=="string"?i.dispatch({...lv(i.state,t,n.from,n.to),annotations:Zd.of(e.completion)}):t(i,e.completion,n.from,n.to),!0):!1}const kv=gv(ot,nl);function Fo(i,e="option"){return t=>{let n=t.state.field(ot,!1);if(!n||!n.open||n.open.disabled||Date.now()-n.open.timestamp<t.state.facet(Be).interactionDelay)return!1;let o=1,s;e=="page"&&(s=Wd(t,n.open.tooltip))&&(o=Math.max(2,Math.floor(s.dom.offsetHeight/s.dom.querySelector("li").offsetHeight)-1));let{length:r}=n.open.options,a=n.open.selected>-1?n.open.selected+o*(i?1:-1):i?0:r-1;return a<0?a=e=="page"?0:r-1:a>=r&&(a=e=="page"?r-1:0),t.dispatch({effects:tu.of(a)}),!0}}const ba=i=>{let e=i.state.field(ot,!1);return i.state.readOnly||!e||!e.open||e.open.selected<0||e.open.disabled||Date.now()-e.open.timestamp<i.state.facet(Be).interactionDelay?!1:nl(i,e.open.options[e.open.selected])},ri=i=>i.state.field(ot,!1)?(i.dispatch({effects:bs.of(!0)}),!0):!1,nu=i=>{let e=i.state.field(ot,!1);return!e||!e.active.some(t=>t.state!=0)?!1:(i.dispatch({effects:oo.of(null)}),!0)};class Cv{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}}const Mv=50,Av=1e3,Iv=sn.fromClass(class{constructor(i){this.view=i,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let e of i.state.field(ot).active)e.isPending&&this.startQuery(e)}update(i){let e=i.state.field(ot),t=i.state.facet(Be);if(!i.selectionSet&&!i.docChanged&&i.startState.field(ot)==e)return;let n=i.transactions.some(s=>{let r=eu(s,t);return r&8||(s.selection||s.docChanged)&&!(r&3)});for(let s=0;s<this.running.length;s++){let r=this.running[s];if(n||r.context.abortOnDocChange&&i.docChanged||r.updates.length+i.transactions.length>Mv&&Date.now()-r.time>Av){for(let a of r.context.abortListeners)try{a()}catch(l){dt(this.view.state,l)}r.context.abortListeners=null,this.running.splice(s--,1)}else r.updates.push(...i.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),i.transactions.some(s=>s.effects.some(r=>r.is(bs)))&&(this.pendingStart=!0);let o=this.pendingStart?50:t.activateOnTypingDelay;if(this.debounceUpdate=e.active.some(s=>s.isPending&&!this.running.some(r=>r.active.source==s.source))?setTimeout(()=>this.startUpdate(),o):-1,this.composing!=0)for(let s of i.transactions)s.isUserEvent("input.type")?this.composing=2:this.composing==2&&s.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:i}=this.view,e=i.field(ot);for(let t of e.active)t.isPending&&!this.running.some(n=>n.active.source==t.source)&&this.startQuery(t);this.running.length&&e.open&&e.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(Be).updateSyncTime))}startQuery(i){let{state:e}=this.view,t=_n(e),n=new Jd(e,t,i.explicit,this.view),o=new Cv(i,n);this.running.push(o),Promise.resolve(i.source(n)).then(s=>{o.context.aborted||(o.done=s||null,this.scheduleAccept())},s=>{this.view.dispatch({effects:oo.of(null)}),dt(this.view.state,s)})}scheduleAccept(){this.running.every(i=>i.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(Be).updateSyncTime))}accept(){var i;this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(Be),n=this.view.state.field(ot);for(let o=0;o<this.running.length;o++){let s=this.running[o];if(s.done===void 0)continue;if(this.running.splice(o--,1),s.done){let a=_n(s.updates.length?s.updates[0].startState:this.view.state),l=Math.min(a,s.done.from+(s.active.explicit?0:1)),c=new si(s.active.source,s.active.explicit,l,s.done,s.done.from,(i=s.done.to)!==null&&i!==void 0?i:a);for(let f of s.updates)c=c.update(f,t);if(c.hasResult()){e.push(c);continue}}let r=n.active.find(a=>a.source==s.active.source);if(r&&r.isPending)if(s.done==null){let a=new wt(s.active.source,0);for(let l of s.updates)a=a.update(l,t);a.isPending||e.push(a)}else this.startQuery(r)}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:tl.of(e)})}},{eventHandlers:{blur(i){let e=this.view.state.field(ot,!1);if(e&&e.tooltip&&this.view.state.facet(Be).closeOnBlur){let t=e.open&&Wd(this.view,e.open.tooltip);(!t||!t.dom.contains(i.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:oo.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:bs.of(!1)}),20),this.composing=0}}}),Tv=typeof navigator=="object"&&/Win/.test(navigator.platform),Dv=Ds.highest(G.domEventHandlers({keydown(i,e){let t=e.state.field(ot,!1);if(!t||!t.open||t.open.disabled||t.open.selected<0||i.key.length>1||i.ctrlKey&&!(Tv&&i.altKey)||i.metaKey)return!1;let n=t.open.options[t.open.selected],o=t.active.find(r=>r.source==n.source),s=n.completion.commitCharacters||o.result.commitCharacters;return s&&s.indexOf(i.key)>-1&&nl(e,n),!1}})),Pv=G.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box",whiteSpace:"pre-line"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),iu=new class extends Fn{};iu.startSide=1;iu.endSide=-1;function Lv(i={}){return[Dv,ot,Be.of(i),Iv,Ov,Pv]}const ou=[{key:"Ctrl-Space",run:ri},{mac:"Alt-`",run:ri},{mac:"Alt-i",run:ri},{key:"Escape",run:nu},{key:"ArrowDown",run:Fo(!0)},{key:"ArrowUp",run:Fo(!1)},{key:"PageDown",run:Fo(!0,"page")},{key:"PageUp",run:Fo(!1,"page")},{key:"Enter",run:ba}],Ov=Ds.highest(Ka.computeN([Be],i=>i.facet(Be).defaultKeymap?[ou]:[]));function il(i,e){return R.create(i.ranges.map(e),i.mainIndex)}function Yn(i,e){return i.update({selection:e,scrollIntoView:!0,userEvent:"select"})}function an({state:i,dispatch:e},t){let n=il(i.selection,t);return n.eq(i.selection,!0)?!1:(e(Yn(i,n)),!0)}function Ns(i,e){return R.cursor(e?i.to:i.from)}function su(i,e){return an(i,t=>t.empty?i.moveByChar(t,e):Ns(t,e))}function Mt(i){return i.textDirectionAt(i.state.selection.main.head)==Pe.LTR}const ru=i=>su(i,!Mt(i)),au=i=>su(i,Mt(i));function lu(i,e){return an(i,t=>t.empty?i.moveByGroup(t,e):Ns(t,e))}const Ev=i=>lu(i,!Mt(i)),Nv=i=>lu(i,Mt(i));function cu(i,e){return an(i,t=>{if(!t.empty)return Ns(t,e);let n=i.moveVertically(t,e);return n.head!=t.head?n:i.moveToLineBoundary(t,e)})}const fu=i=>cu(i,!1),hu=i=>cu(i,!0);function du(i){let e=i.scrollDOM.clientHeight<i.scrollDOM.scrollHeight-2,t=0,n=0,o;if(e){for(let s of i.state.facet(G.scrollMargins)){let r=s(i);r?.top&&(t=Math.max(r?.top,t)),r?.bottom&&(n=Math.max(r?.bottom,n))}o=i.scrollDOM.clientHeight-t-n}else o=(i.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:t,marginBottom:n,selfScroll:e,height:Math.max(i.defaultLineHeight,o-5)}}function uu(i,e){let t=du(i),{state:n}=i,o=il(n.selection,r=>r.empty?i.moveVertically(r,e,t.height):Ns(r,e));if(o.eq(n.selection))return!1;let s;if(t.selfScroll){let r=i.coordsAtPos(n.selection.main.head),a=i.scrollDOM.getBoundingClientRect(),l=a.top+t.marginTop,c=a.bottom-t.marginBottom;r&&r.top>l&&r.bottom<c&&(s=G.scrollIntoView(o.main.head,{y:"start",yMargin:r.top-l}))}return i.dispatch(Yn(n,o),{effects:s}),!0}const Fc=i=>uu(i,!1),ya=i=>uu(i,!0);function Cn(i,e,t){let n=i.lineBlockAt(e.head),o=i.moveToLineBoundary(e,t);if(o.head==e.head&&o.head!=(t?n.to:n.from)&&(o=i.moveToLineBoundary(e,t,!1)),!t&&o.head==n.from&&n.length){let s=/^\s*/.exec(i.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length;s&&e.head!=n.from+s&&(o=R.cursor(n.from+s))}return o}const Rv=i=>an(i,e=>Cn(i,e,!0)),Bv=i=>an(i,e=>Cn(i,e,!1)),_v=i=>an(i,e=>Cn(i,e,!Mt(i))),$v=i=>an(i,e=>Cn(i,e,Mt(i))),Fv=i=>an(i,e=>R.cursor(i.lineBlockAt(e.head).from,1)),Vv=i=>an(i,e=>R.cursor(i.lineBlockAt(e.head).to,-1));function Yt(i,e){let t=il(i.state.selection,n=>{let o=e(n);return R.range(n.anchor,o.head,o.goalColumn,o.bidiLevel||void 0)});return t.eq(i.state.selection)?!1:(i.dispatch(Yn(i.state,t)),!0)}function pu(i,e){return Yt(i,t=>i.moveByChar(t,e))}const gu=i=>pu(i,!Mt(i)),mu=i=>pu(i,Mt(i));function bu(i,e){return Yt(i,t=>i.moveByGroup(t,e))}const zv=i=>bu(i,!Mt(i)),Hv=i=>bu(i,Mt(i));function yu(i,e){return Yt(i,t=>i.moveVertically(t,e))}const vu=i=>yu(i,!1),wu=i=>yu(i,!0);function xu(i,e){return Yt(i,t=>i.moveVertically(t,e,du(i).height))}const Vc=i=>xu(i,!1),zc=i=>xu(i,!0),qv=i=>Yt(i,e=>Cn(i,e,!0)),Wv=i=>Yt(i,e=>Cn(i,e,!1)),jv=i=>Yt(i,e=>Cn(i,e,!Mt(i))),Uv=i=>Yt(i,e=>Cn(i,e,Mt(i))),Gv=i=>Yt(i,e=>R.cursor(i.lineBlockAt(e.head).from)),Yv=i=>Yt(i,e=>R.cursor(i.lineBlockAt(e.head).to)),Hc=({state:i,dispatch:e})=>(e(Yn(i,{anchor:0})),!0),qc=({state:i,dispatch:e})=>(e(Yn(i,{anchor:i.doc.length})),!0),Wc=({state:i,dispatch:e})=>(e(Yn(i,{anchor:i.selection.main.anchor,head:0})),!0),jc=({state:i,dispatch:e})=>(e(Yn(i,{anchor:i.selection.main.anchor,head:i.doc.length})),!0),Kv=({state:i,dispatch:e})=>(e(i.update({selection:{anchor:0,head:i.doc.length},userEvent:"select"})),!0);function ho(i,e){if(i.state.readOnly)return!1;let t="delete.selection",{state:n}=i,o=n.changeByRange(s=>{let{from:r,to:a}=s;if(r==a){let l=e(s);l<r?(t="delete.backward",l=Vo(i,l,!1)):l>r&&(t="delete.forward",l=Vo(i,l,!0)),r=Math.min(r,l),a=Math.max(a,l)}else r=Vo(i,r,!1),a=Vo(i,a,!0);return r==a?{range:s}:{changes:{from:r,to:a},range:R.cursor(r,r<s.head?-1:1)}});return o.changes.empty?!1:(i.dispatch(n.update(o,{scrollIntoView:!0,userEvent:t,effects:t=="delete.selection"?G.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function Vo(i,e,t){if(i instanceof G)for(let n of i.state.facet(G.atomicRanges).map(o=>o(i)))n.between(e,e,(o,s)=>{o<e&&s>e&&(e=t?s:o)});return e}const Su=(i,e,t)=>ho(i,n=>{let o=n.from,{state:s}=i,r=s.doc.lineAt(o),a,l;if(t&&!e&&o>r.from&&o<r.from+200&&!/[^ \t]/.test(a=r.text.slice(0,o-r.from))){if(a[a.length-1]=="	")return o-1;let c=Fa(a,s.tabSize),f=c%ma(s)||ma(s);for(let h=0;h<f&&a[a.length-1-h]==" ";h++)o--;l=o}else l=Ze(r.text,o-r.from,e,e)+r.from,l==o&&r.number!=(e?s.doc.lines:1)?l+=e?1:-1:!e&&/[\ufe00-\ufe0f]/.test(r.text.slice(l-r.from,o-r.from))&&(l=Ze(r.text,l-r.from,!1,!1)+r.from);return l}),va=i=>Su(i,!1,!0),ku=i=>Su(i,!0,!1),Cu=(i,e)=>ho(i,t=>{let n=t.head,{state:o}=i,s=o.doc.lineAt(n),r=o.charCategorizer(n);for(let a=null;;){if(n==(e?s.to:s.from)){n==t.head&&s.number!=(e?o.doc.lines:1)&&(n+=e?1:-1);break}let l=Ze(s.text,n-s.from,e)+s.from,c=s.text.slice(Math.min(n,l)-s.from,Math.max(n,l)-s.from),f=r(c);if(a!=null&&f!=a)break;(c!=" "||n!=t.head)&&(a=f),n=l}return n}),Mu=i=>Cu(i,!1),Xv=i=>Cu(i,!0),Jv=i=>ho(i,e=>{let t=i.lineBlockAt(e.head).to;return e.head<t?t:Math.min(i.state.doc.length,e.head+1)}),Qv=i=>ho(i,e=>{let t=i.moveToLineBoundary(e,!1).head;return e.head>t?t:Math.max(0,e.head-1)}),Zv=i=>ho(i,e=>{let t=i.moveToLineBoundary(e,!0).head;return e.head<t?t:Math.min(i.state.doc.length,e.head+1)}),ew=({state:i,dispatch:e})=>{if(i.readOnly)return!1;let t=i.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:ee.of(["",""])},range:R.cursor(n.from)}));return e(i.update(t,{scrollIntoView:!0,userEvent:"input"})),!0},tw=({state:i,dispatch:e})=>{if(i.readOnly)return!1;let t=i.changeByRange(n=>{if(!n.empty||n.from==0||n.from==i.doc.length)return{range:n};let o=n.from,s=i.doc.lineAt(o),r=o==s.from?o-1:Ze(s.text,o-s.from,!1)+s.from,a=o==s.to?o+1:Ze(s.text,o-s.from,!0)+s.from;return{changes:{from:r,to:a,insert:i.doc.slice(o,a).append(i.doc.slice(r,o))},range:R.cursor(a)}});return t.changes.empty?!1:(e(i.update(t,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function nw(i,e){if(/\(\)|\[\]|\{\}/.test(i.sliceDoc(e-1,e+1)))return{from:e,to:e};let t=bi(i).resolveInner(e),n=t.childBefore(e),o=t.childAfter(e),s;return n&&o&&n.to<=e&&o.from>=e&&(s=n.type.prop(le.closedBy))&&s.indexOf(o.name)>-1&&i.doc.lineAt(n.to).from==i.doc.lineAt(o.from).from&&!/\S/.test(i.sliceDoc(n.to,o.from))?{from:n.to,to:o.from}:null}const Uc=iw(!1);function iw(i){return({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(o=>{let{from:s,to:r}=o,a=e.doc.lineAt(s),l=!i&&s==r&&nw(e,s);i&&(s=r=(r<=a.to?a:e.doc.lineAt(r)).to);let c=new Za(e,{simulateBreak:s,simulateDoubleBreak:!!l}),f=Yy(c,s);for(f==null&&(f=Fa(/^\s*/.exec(e.doc.lineAt(s).text)[0],e.tabSize));r<a.to&&/\s/.test(a.text[r-a.from]);)r++;l?{from:s,to:r}=l:s>a.from&&s<a.from+100&&!/\S/.test(a.text.slice(0,s))&&(s=a.from);let h=["",Dc(e,f)];return l&&h.push(Dc(e,c.lineIndent(a.from,-1))),{changes:{from:s,to:r,insert:ee.of(h)},range:R.cursor(s+1+h[1].length)}});return t(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}const ow=[{key:"Ctrl-b",run:ru,shift:gu,preventDefault:!0},{key:"Ctrl-f",run:au,shift:mu},{key:"Ctrl-p",run:fu,shift:vu},{key:"Ctrl-n",run:hu,shift:wu},{key:"Ctrl-a",run:Fv,shift:Gv},{key:"Ctrl-e",run:Vv,shift:Yv},{key:"Ctrl-d",run:ku},{key:"Ctrl-h",run:va},{key:"Ctrl-k",run:Jv},{key:"Ctrl-Alt-h",run:Mu},{key:"Ctrl-o",run:ew},{key:"Ctrl-t",run:tw},{key:"Ctrl-v",run:ya}],sw=[{key:"ArrowLeft",run:ru,shift:gu,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:Ev,shift:zv,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:_v,shift:jv,preventDefault:!0},{key:"ArrowRight",run:au,shift:mu,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:Nv,shift:Hv,preventDefault:!0},{mac:"Cmd-ArrowRight",run:$v,shift:Uv,preventDefault:!0},{key:"ArrowUp",run:fu,shift:vu,preventDefault:!0},{mac:"Cmd-ArrowUp",run:Hc,shift:Wc},{mac:"Ctrl-ArrowUp",run:Fc,shift:Vc},{key:"ArrowDown",run:hu,shift:wu,preventDefault:!0},{mac:"Cmd-ArrowDown",run:qc,shift:jc},{mac:"Ctrl-ArrowDown",run:ya,shift:zc},{key:"PageUp",run:Fc,shift:Vc},{key:"PageDown",run:ya,shift:zc},{key:"Home",run:Bv,shift:Wv,preventDefault:!0},{key:"Mod-Home",run:Hc,shift:Wc},{key:"End",run:Rv,shift:qv,preventDefault:!0},{key:"Mod-End",run:qc,shift:jc},{key:"Enter",run:Uc,shift:Uc},{key:"Mod-a",run:Kv},{key:"Backspace",run:va,shift:va,preventDefault:!0},{key:"Delete",run:ku,preventDefault:!0},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Mu,preventDefault:!0},{key:"Mod-Delete",mac:"Alt-Delete",run:Xv,preventDefault:!0},{mac:"Mod-Backspace",run:Qv,preventDefault:!0},{mac:"Mod-Delete",run:Zv,preventDefault:!0}].concat(ow.map(i=>({mac:i.key,run:i.run,shift:i.shift})));var rw=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,ki=(i,e,t,n)=>{for(var o=n>1?void 0:n?aw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&rw(e,t,o),o};let wn=class extends Sn{constructor(){super(...arguments),this.value="",this.placeholder="Type to search...",this.autofocus=!1,this.originalValue="",this.lastPreviewedId=null}firstUpdated(){this.initEditor()}initEditor(){if(!this.editorContainer)return;const i=G.theme({"&":{color:"#eee",backgroundColor:"#222"},".cm-content":{caretColor:"#fff"},"&.cm-focused .cm-cursor":{borderLeftColor:"#fff"},"&.cm-focused .cm-selectionBackground, ::selection":{backgroundColor:"#444"},".cm-gutters":{backgroundColor:"#222",color:"#ddd",border:"none"},".cm-tooltip":{backgroundColor:"#333",color:"#eee",border:"1px solid #555",position:"fixed",zIndex:"99999"},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:"#444",color:"#fff"}}},{dark:!0});this.originalValue=this.value;const e=[i,Ka.of([{key:"Tab",run:n=>(ba(n)||this.dispatchCommit(n.state.doc.toString()),!0)},{key:"Enter",run:n=>(ba(n)||this.dispatchCommit(n.state.doc.toString()),!0)},{key:"Escape",run:()=>(this.dispatchEvent(new CustomEvent("cancel")),!0)},...ou,...sw]),ky(this.placeholder),G.updateListener.of(n=>{if(n.docChanged&&(this.value=n.state.doc.toString(),this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.catalog&&n.transactions.some(s=>s.isUserEvent("input")||s.isUserEvent("delete")))){const s=this.catalog.search(this.value);let r=null;if(s.length>0){const a=s[0];a.type==="node"&&a.id&&(r=a.id)}r?(this.lastPreviewedId=r,this.dispatchEvent(new CustomEvent("preview-type",{detail:r}))):this.lastPreviewedId?this.dispatchEvent(new CustomEvent("preview-type",{detail:this.lastPreviewedId})):this.dispatchEvent(new CustomEvent("preview-type",{detail:this.value})),ri(this.editorView)}})];this.catalog&&e.push(Lv({override:[this.completionSource.bind(this)],icons:!1,defaultKeymap:!1,optionClass:n=>n.type==="no-suggestion"?"no-suggestion-option":""}));const t=oe.create({doc:this.value,extensions:e});if(this.editorView=new G({state:t,parent:this.editorContainer}),this.autofocus&&(this.editorView.focus(),this.editorView.dispatch({selection:{anchor:0,head:this.value.length}}),this.catalog&&ri(this.editorView)),this.catalog&&this.value){const n=this.catalog.search(this.value);n.length>0&&n[0].type==="node"&&n[0].id===this.value&&(this.lastPreviewedId=this.value)}this.editorView.contentDOM.addEventListener("blur",()=>{this.dispatchCommit(this.editorView.state.doc.toString())})}updated(i){if(i.has("value")&&this.editorView){if(this.lastPreviewedId&&this.value===this.lastPreviewedId)return;const e=this.editorView.state.doc.toString();e!==this.value&&this.editorView.dispatch({changes:{from:0,to:e.length,insert:this.value}})}}completionSource(i){if(!this.catalog)return null;const e=i.state.doc.toString();let t=this.catalog.search(e);return t.length===0?{from:0,options:[{label:"No suggestions",type:"no-suggestion",apply:n=>{this.dispatchCommit(n.state.doc.toString(),!1)}}],filter:!1}:{from:0,options:t.map(n=>({label:n.label,detail:n.detail,type:n.type,apply:(o,s,r,a)=>{const l=n.value;if(n.type==="node"){const c=n.id;this.dispatchCommit(c,!0)}else o.dispatch({changes:{from:r,to:a,insert:l},selection:{anchor:r+l.length}}),setTimeout(()=>{ri(o)},0)},boost:n.boost})),filter:!1}}commit(){this.dispatchCommit(this.editorView?.state.doc.toString()||this.value)}dispatchCommit(i,e=!1){if(this.editorView&&nu(this.editorView),!e&&this.catalog)if(this.lastPreviewedId)i=this.lastPreviewedId;else{const t=this.catalog.search(i);t.length>0&&t[0].type==="node"&&t[0].id===i||(i="util.hub")}this.dispatchEvent(new CustomEvent("commit",{detail:i}))}render(){return M`<div id="editor"></div>`}};wn.styles=pe`
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
  `;ki([H({type:Object})],wn.prototype,"catalog",2);ki([H({type:String})],wn.prototype,"value",2);ki([H({type:String})],wn.prototype,"placeholder",2);ki([H({type:Boolean})],wn.prototype,"autofocus",2);ki([Ot("#editor")],wn.prototype,"editorContainer",2);wn=ki([ke("smart-input")],wn);var lw=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,ln=(i,e,t,n)=>{for(var o=n>1?void 0:n?cw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&lw(e,t,o),o};let Pt=class extends Sn{constructor(){super(...arguments),this.value=0,this.min=0,this.max=1,this.step=.01,this.defaultValue=0,this.isDragging=!1,this.isEditing=!1,this.tempValue="",this.startValue=0,this.rect=null,this.dragOp=null}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this.handleHostKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.handleHostKeyDown),this.dragOp?.dispose()}render(){if(this.isEditing)return M`
        <input
          type="text"
          .value=${this.tempValue}
          @input=${this.handleInput}
          @keydown=${this.handleInputKeyDown}
          @blur=${this.commitEdit}
        />
      `;let i=0;return Number.isFinite(this.min)&&Number.isFinite(this.max)&&this.max>this.min&&(i=(Math.max(this.min,Math.min(this.max,this.value))-this.min)/(this.max-this.min)*100),M`
      <div class="bar" style="width: ${i}%"></div>
      <div
        class="value-display"
        @pointerdown=${this.handlePointerDown}
        @dblclick=${this.handleDoubleClick}
      >
        ${this.formatValue(this.value)}
      </div>
    `}formatValue(i){if(typeof i!="number"||isNaN(i))return"0";if(Number.isInteger(this.step))return i.toString();const e=this.step.toString().split(".")[1]?.length||0;return i.toFixed(e)}handlePointerDown(i){if(i.button===0){if(i.detail===2){this.handleDoubleClick();return}this.startValue=this.value,this.rect=this.getBoundingClientRect(),this.isDragging=!1,this.dragOp=new Ft(i,this,{threshold:0,move:(e,t)=>{this.updateValueFromDelta(e,t[0]),this.isDragging||(this.isDragging=!0,this.setAttribute("dragging",""))},accept:()=>{this.isDragging&&this.dispatchEvent(new CustomEvent("change",{detail:this.value})),this.cleanupDrag(),this.focus()},cancel:e=>{(e===Pr.UserAction||e===Pr.Programmatic)&&(this.value=this.startValue,this.dispatchEvent(new CustomEvent("change",{detail:this.value}))),this.cleanupDrag()}})}}updateValueFromDelta(i,e){let t=this.value;if(i.shiftKey){const s=this.max-this.min;if(!Number.isFinite(s))t=this.startValue+e*.1*this.step;else{const r=this.rect?.width||100,a=e/r*s*.1;t=this.startValue+a}}else if(this.rect&&Number.isFinite(this.min)&&Number.isFinite(this.max)){const s=i.clientX-this.rect.left,r=Math.max(0,Math.min(1,s/this.rect.width));t=this.min+r*(this.max-this.min)}else t=this.startValue+e*this.step;const n=this.step.toString().split(".")[1]?.length||0,o=Math.pow(10,n);t=Math.round(t*o)/o,i.ctrlKey||(t=Math.max(this.min,Math.min(this.max,t))),t!==this.value&&(this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:this.value})))}cleanupDrag(){this.removeAttribute("dragging"),this.isDragging=!1,this.rect=null,this.dragOp=null}async handleHostKeyDown(i){if(!this.isEditing)if(/^[0-9.\-]$/.test(i.key)||i.key==="Enter"){this.isEditing=!0,this.tempValue=i.key==="Enter"?this.value.toString():i.key,i.preventDefault(),await this.updateComplete;const e=this.shadowRoot?.querySelector("input");e&&(e.focus(),i.key==="Enter"?e.select():e.selectionStart=e.selectionEnd=e.value.length)}else(i.key==="Backspace"||i.key==="Delete")&&(this.value=this.defaultValue,this.dispatchEvent(new CustomEvent("change",{detail:this.value})))}async handleDoubleClick(i){i?.stopPropagation(),this.isEditing=!0,this.tempValue=this.value.toString(),await this.updateComplete;const e=this.shadowRoot?.querySelector("input");e&&(e.focus(),e.select())}handleInput(i){this.tempValue=i.target.value}handleInputKeyDown(i){i.key==="Enter"?(this.commitEdit(),i.stopPropagation()):i.key==="Escape"&&(this.isEditing=!1,this.focus(),i.stopPropagation()),i.stopPropagation()}commitEdit(){if(this.tempValue.trim()==="")this.value=this.defaultValue,this.dispatchEvent(new CustomEvent("change",{detail:this.value}));else{const i=parseFloat(this.tempValue);isNaN(i)||(this.value=i,this.dispatchEvent(new CustomEvent("change",{detail:this.value})))}this.isEditing=!1,this.focus()}};Pt.styles=pe`
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
  `;ln([H({type:Number})],Pt.prototype,"value",2);ln([H({type:Number})],Pt.prototype,"min",2);ln([H({type:Number})],Pt.prototype,"max",2);ln([H({type:Number})],Pt.prototype,"step",2);ln([H({type:Number})],Pt.prototype,"defaultValue",2);ln([Xe()],Pt.prototype,"isDragging",2);ln([Xe()],Pt.prototype,"isEditing",2);ln([Xe()],Pt.prototype,"tempValue",2);Pt=ln([ke("scalar-slider")],Pt);class Au{constructor(e,t){this.repository=e,this.subgraphProvider=t}search(e){const t=[],n=e.toLowerCase();if(n.endsWith("."))return this.getDrillDownResults(e.slice(0,-1));const o=Array.from(this.repository.getAllNodeTypes()),s=new Set,r=new Set,l=(this.subgraphProvider?this.subgraphProvider():[]).filter(c=>c.includes("/")).map(c=>{const h=c.replace(".json","").replace(/\//g,".");return{id:h,displayName:h.split(".").pop()}});for(const c of o){const f=c.id.split(".");f.length>1&&s.add(f[0]),c.definition.metadata?.category&&r.add(c.definition.metadata.category)}for(const c of l){const f=c.id.split(".");f.length>1&&s.add(f[0])}for(const c of s)c.toLowerCase().includes(n)&&t.push({label:c,type:"namespace",value:c+".",detail:"Namespace",boost:20});for(const c of r)c.toLowerCase().includes(n)&&t.push({label:c,type:"category",value:c+".",detail:"Category",boost:15});for(const c of o){let f=0;const h=c.id.toLowerCase(),d=c.displayName.toLowerCase(),u=(c.aliases||[]).map(p=>p.toLowerCase());h===n?f+=10:h.startsWith(n)?f+=5:h.includes(n)&&(f+=1),d===n?f+=5:d.startsWith(n)?f+=3:d.includes(n)&&(f+=1);for(const p of u)p===n?f+=5:p.startsWith(n)?f+=3:p.includes(n)&&(f+=1);f>0&&t.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:c.id,boost:f})}for(const c of l){let f=0;c.id.toLowerCase();const h=c.displayName.toLowerCase(),d=c.id;d===n?f+=12:d.startsWith(n)?f+=6:d.includes(n)&&(f+=2),h===n?f+=6:h.startsWith(n)?f+=4:h.includes(n)&&(f+=2),f>0&&t.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:"Subgraph",boost:f})}return t.sort((c,f)=>{const h=(f.boost||0)-(c.boost||0);return h!==0?h:c.value.length-f.value.length})}getDrillDownResults(e){const t=Array.from(this.repository.getAllNodeTypes()),n=[],o=new Set,s=e.toLowerCase(),a=(this.subgraphProvider?this.subgraphProvider():[]).filter(c=>c.includes("/")).map(c=>{const h=c.replace(".json","").replace(/\//g,".");return{id:h,displayName:h.split(".").pop()}}),l=[...t.map(c=>({id:c.id,displayName:c.displayName,category:c.definition.metadata?.category,isSubgraph:!1})),...a.map(c=>({id:c.id,displayName:c.displayName,category:void 0,isSubgraph:!0}))];for(const c of l){const f=c.id,h=c.category||"";let d=!1;if(f.toLowerCase().startsWith(s+".")&&(d=!0),d)n.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:c.isSubgraph?"Subgraph":c.id,boost:1}),h&&!o.has(h)&&(s.includes(h.toLowerCase())||(n.push({label:h,type:"category",value:e+"."+h+".",detail:"Category",boost:2}),o.add(h)));else{const u=s.split(".");if(u.length===2&&!c.isSubgraph){const p=u[0],g=u[1];f.toLowerCase().startsWith(p+".")&&h.toLowerCase()===g&&n.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:c.id,boost:1})}else u.length===1&&!c.isSubgraph&&h.toLowerCase()===s&&n.push({label:c.displayName,type:"node",id:c.id,value:c.id,detail:c.id,boost:1})}}return n}}class fw{constructor(e,t,n){this.host=e,this.appController=t,this.localController=n}handlePointerDown(e){e.stopPropagation();const t=e.composedPath();if(t.some(s=>{const r=s;return r.classList?r.tagName?.toLowerCase()==="graph-port"||r.classList.contains("virtual-inputs-container")||r.tagName?.toLowerCase()==="input"||r.tagName?.toLowerCase()==="select"||r.tagName?.toLowerCase()==="smart-input"||r.tagName?.toLowerCase()==="scalar-slider":!1})&&!t.some(s=>s.tagName==="GRAPH-PORT"))return;this.localController.observableState.selection.has(this.host.node.id)||this.localController.queueSelectPaths([this.host.node.id],e.shiftKey||e.ctrlKey||e.metaKey),this.localController.setAltKeyPressed(e.altKey),this.localController.setIsDraggingSelection(!0);const o=this.host.getRootNode()?.host;new Ft(e,this.host.element,{move:(s,r)=>{if(this.localController.setAltKeyPressed(s.altKey),this.host.addDragTransform(r[0],r[1]),o){const a=this.host.getBoundingClientRect(),l=o.getBoundingClientRect(),c=40;let f=a.left+a.width/2;r[0]<0?f=a.left+c:r[0]>0&&(f=a.right-c);let h=a.top+a.height/2;r[1]<0?h=a.top+c:r[1]>0&&(h=a.bottom-c);const d=f-l.left+o.scrollLeft,u=h-l.top+o.scrollTop,p=this.localController.getGridCellFromPixels(d,u);this.localController.setDragPreview({x:p.x,y:p.y,w:1,h:1})}},accept:(s,r)=>{this.localController.setDragPreview(null),this.localController.setIsDraggingSelection(!1),this.handleDragAccept(s,r,o)},cancel:()=>{this.localController.setDragPreview(null),this.localController.setIsDraggingSelection(!1),this.host.clearDragTransform()}})}handleDragAccept(e,t,n){if(!n)return;if(e.altKey){const b=[],y=this.localController.observableState.selection;for(const[de]of y)this.appController.getState().graph.inner.nodes[de]&&b.push(de);const x=this.host.getBoundingClientRect(),v=n.getBoundingClientRect(),C=40;let k=x.left+x.width/2;t[0]<0?k=x.left+C:t[0]>0&&(k=x.right-C);let S=x.top+x.height/2;t[1]<0?S=x.top+C:t[1]>0&&(S=x.bottom-C);const A=k-v.left+n.scrollLeft,I=S-v.top+n.scrollTop,O=this.localController.getGridCellFromPixels(A,I),L=this.host.node.x,D=this.host.node.y,F=O.x-L,$=O.y-D,z=this.appController.duplicateNodes(b,{x:F,y:$});this.host.clearDragTransform(),this.localController.queueSelectPaths(z);return}const o=this.host.getBoundingClientRect(),s=n.getBoundingClientRect(),r=40;let a=o.left+o.width/2;t[0]<0?a=o.left+r:t[0]>0&&(a=o.right-r);let l=o.top+o.height/2;t[1]<0?l=o.top+r:t[1]>0&&(l=o.bottom-r);const c=a-s.left+n.scrollLeft,f=l-s.top+n.scrollTop,h=this.localController.getGridCellFromPixels(c,f),d=h.x-this.host.node.x,u=h.y-this.host.node.y,p=Array.from(this.localController.observableState.selection.keys()).filter(b=>b.startsWith("node-")),{dx:g,dy:m}=this.appController.calculateConstrainedMove(p,d,u);this.appController.moveNodes(p,g,m),this.host.clearDragTransform(),this.host.setDragState(!0),setTimeout(()=>this.host.setDragState(!1),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:hw}=Vu,Gc=()=>document.createComment(""),Li=(i,e,t)=>{var n;const o=i._$AA.parentNode,s=e===void 0?i._$AB:e._$AA;if(t===void 0){const r=o.insertBefore(Gc(),s),a=o.insertBefore(Gc(),s);t=new hw(r,a,i,i.options)}else{const r=t._$AB.nextSibling,a=t._$AM,l=a!==i;if(l){let c;(n=t._$AQ)===null||n===void 0||n.call(t,i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==a._$AU&&t._$AP(c)}if(r!==s||l){let c=t._$AA;for(;c!==r;){const f=c.nextSibling;o.insertBefore(c,s),c=f}}}return t},Tn=(i,e,t=i)=>(i._$AI(e,t),i),dw={},uw=(i,e=dw)=>i._$AH=e,pw=i=>i._$AH,hr=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA;const n=i._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yc=(i,e,t)=>{const n=new Map;for(let o=e;o<=t;o++)n.set(i[o],o);return n},wa=kh(class extends Ch{constructor(i){if(super(i),i.type!==Sh.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);const o=[],s=[];let r=0;for(const a of i)o[r]=n?n(a,r):r,s[r]=t(a,r),r++;return{values:s,keys:o}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,n]){var o;const s=pw(i),{values:r,keys:a}=this.ct(e,t,n);if(!Array.isArray(s))return this.ut=a,r;const l=(o=this.ut)!==null&&o!==void 0?o:this.ut=[],c=[];let f,h,d=0,u=s.length-1,p=0,g=r.length-1;for(;d<=u&&p<=g;)if(s[d]===null)d++;else if(s[u]===null)u--;else if(l[d]===a[p])c[p]=Tn(s[d],r[p]),d++,p++;else if(l[u]===a[g])c[g]=Tn(s[u],r[g]),u--,g--;else if(l[d]===a[g])c[g]=Tn(s[d],r[g]),Li(i,c[g+1],s[d]),d++,g--;else if(l[u]===a[p])c[p]=Tn(s[u],r[p]),Li(i,s[d],s[u]),u--,p++;else if(f===void 0&&(f=Yc(a,p,g),h=Yc(l,d,u)),f.has(l[d]))if(f.has(l[u])){const m=h.get(a[p]),b=m!==void 0?s[m]:null;if(b===null){const y=Li(i,s[d]);Tn(y,r[p]),c[p]=y}else c[p]=Tn(b,r[p]),Li(i,s[d],b),s[m]=null;p++}else hr(s[u]),u--;else hr(s[d]),d++;for(;p<=g;){const m=Li(i,c[g+1]);Tn(m,r[p]),c[p++]=m}for(;d<=u;){const m=s[d++];m!==null&&hr(m)}return this.ut=a,uw(i,c),Zc}}),gw=24,mw=24;function bw(i,e){if(i!=="io.input"||e.length!==1)return!1;const t=e[0];return t.type.kind==="atomic"&&t.type.type==="number"}function Iu(i,e,t,n,o){if(e==="in"){const s=t.find(r=>r.name===i);if(s){if(s.suppressLabel)return!0;const r=o.has(s.name);if(Yi(s,r))return!0}}if(e==="out"){const s=n.find(a=>a.name===i);if(s&&s.suppressLabel)return!0;const r=n.findIndex(a=>a.name===i);if(r!==-1&&r<t.length){const a=t[r],l=o.has(a.name);if(Yi(a,l))return!0}}return!1}function yw(i,e,t,n,o,s){return wa(e,r=>r.name,(r,a)=>{const l=o?11:gw+a*mw;return M`
            <div class="port-wrapper" style="top: ${l}px; position: absolute; right: 0;">
              ${s(r.name)}
              <graph-port
                .nodeId=${i}
                .name=${r.name}
                type="out"
                .description=${r.description||""}
                ?hideLabel="${o?!0:Iu(r.name,"out",t,e,n)}"
              ></graph-port>
            </div>
          `})}var vw=Object.defineProperty,ww=Object.getOwnPropertyDescriptor,Ci=(i,e,t,n)=>{for(var o=n>1?void 0:n?ww(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&vw(e,t,o),o};let xn=class extends it{constructor(){super(...arguments),this.description="",this.hideLabel=!1}handlePointerDown(i){if(i.button!==0)return;i.stopPropagation(),P.observableState.inflightPortConnectionOperation||P.setInflightPortConnectionOperation({nodeId:this.nodeId,port:this.name,type:this.type})}handlePointerUp(i){i.stopPropagation();const e=P.observableState.inflightPortConnectionOperation;if(e)if(e.nodeId!==this.nodeId&&e.type!==this.type){const t=e.type==="out"?e:{nodeId:this.nodeId,port:this.name,type:this.type},n=e.type==="in"?e:{nodeId:this.nodeId,port:this.name,type:this.type};V.createConnection(t.nodeId,t.port,n.nodeId,n.port),P.setInflightPortConnectionOperation(null)}else e.nodeId===this.nodeId&&(e.port,this.name)}render(){const{inflightPortConnectionOperation:i}=P.observableState,e=i?.type===this.type&&i?.port===this.name&&i?.nodeId===this.nodeId;return M`
      ${this.type==="out"&&this.name!=="0"&&!this.hideLabel?M`<div class="port-label">${this.name}</div>`:""}
      <div
        class="port ${this.type}-port ${e?"connecting":""}"
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        title="${this.description}"
      ></div>
      ${this.type==="in"&&this.name&&!this.hideLabel?M`<div class="port-label">${this.name}</div>`:""}
    `}};xn.styles=pe`
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
      padding: 0 ${xp}px;
    }
  `;Ci([H({type:String})],xn.prototype,"nodeId",2);Ci([H({type:String,reflect:!0})],xn.prototype,"name",2);Ci([H({type:String,reflect:!0})],xn.prototype,"type",2);Ci([H({type:String})],xn.prototype,"description",2);Ci([H({type:Boolean})],xn.prototype,"hideLabel",2);xn=Ci([ke("graph-port")],xn);var xw=Object.defineProperty,Sw=Object.getOwnPropertyDescriptor,mt=(i,e,t,n)=>{for(var o=n>1?void 0:n?Sw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&xw(e,t,o),o};let nt=class extends it{constructor(){super(...arguments),this.incomingConnections=[],this.isQueued=!1,this.x=0,this.y=0,this.gridColumn="",this.gridRow="",this.parentZIndex=100,this.catalog=new Au(Q,()=>Ln.files.map(i=>i.name)),this.loadedBodyRenderer=null,this.loadedInspectorRenderer=null,this.loadedInputEditorRenderer=null,this.hasRequestedBodyLoad=!1,this.hasRequestedInspectorLoad=!1,this.hasRequestedInputEditorLoad=!1,this.editingField=null,this.typeLongEdit=null,this.sliderLongEdit=null,this.activeSliderPort=null,this.interaction=new fw({element:this,get node(){return this.element.node},getRootNode:()=>this.getRootNode(),getBoundingClientRect:()=>this.getBoundingClientRect(),addDragTransform:(i,e)=>{this.style.transform=`translate(${i}px, ${e}px)`},clearDragTransform:()=>{this.style.transform=""},setDragState:i=>{i?this.dataset.dragged="true":delete this.dataset.dragged}},V,P),this.debugDisposer=null,this.currentTypeId=null}renderDebugValue(i){if(!P.observableState.localSettings.showDebugValues)return null;const e=xe.outputs.get(this.node.id);if(!e)return null;let t,n;const o=Q.getNodeType(this.node.config.typeId);if(e.fields&&i in e.fields){t=e.fields[i];const s=P.observableState.inferredNodeTypes.get(this.node.id);if(s&&s.outputs&&s.outputs.kind==="record"&&s.outputs.fields&&i in s.outputs.fields&&(n=s.outputs.fields[i]),!n&&o&&o.outputs){const r=o.outputs.find(a=>a.name===i);r&&(n=r.type)}}else if(i===""&&e.untagged&&e.untagged.length>0)t=e.untagged[0];else{const s=xe.outputRemappings[this.node.id];if(s&&s[i]){const r=s[i],a=xe.outputs.get(r);a&&a.fields&&"value"in a.fields&&(t=a.fields.value)}}return t===void 0?null:M`<div class="debug-chip-wrapper">${Er(t,n)}</div>`}handlePointerUp(i){const{inflightPortConnectionOperation:e}=P.observableState;if(e&&e.nodeId!==this.node.id){const t=Q.getNodeType(this.node.config.typeId);let n=null,o=null;if(e.type==="out"){P.observableState.inferredNodeTypes.get(this.node.id);const s=t?.inputs||[];s.length>0&&(n=s[0].name,o="in")}else{const s=t?.outputs||[];s.length>0&&(n=s[0].name,o="out")}if(n&&o){i.stopPropagation(),e.type==="out"?V.createConnection(e.nodeId,e.port,this.node.id,n):V.createConnection(this.node.id,n,e.nodeId,e.port),P.setInflightPortConnectionOperation(null);return}}}handlePointerDown(i){this.interaction.handlePointerDown(i)}handleClick(i){if(i.composedPath().some(r=>{const a=r;return a.classList?a.tagName?.toLowerCase()==="graph-port"||a.classList.contains("virtual-inputs-container")||a.tagName?.toLowerCase()==="input"||a.tagName?.toLowerCase()==="select"||a.tagName?.toLowerCase()==="smart-input"||a.tagName?.toLowerCase()==="scalar-slider":!1})||this.dataset.dragged)return;const n=P.observableState.selection,o=n.has(this.node.id),s=Array.from(n.keys()).filter(r=>r.startsWith("node-")).length;o&&s>1?P.setLastGroupSelection(new Set(n.keys())):i.detail===1&&P.setLastGroupSelection(null),P.queueSelectPaths([this.node.id],i.shiftKey||i.ctrlKey||i.metaKey)}connectedCallback(){super.connectedCallback(),this.addEventListener("pointerdown",this.handlePointerDown),this.addEventListener("pointerup",this.handlePointerUp),this.addEventListener("click",this.handleClick),this.debugDisposer=qt(()=>[P.observableState.localSettings.showDebugValues,xe.outputs.get(this.node.id)],()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("pointerdown",this.handlePointerDown),this.removeEventListener("pointerup",this.handlePointerUp),this.removeEventListener("click",this.handleClick),this.debugDisposer&&(this.debugDisposer(),this.debugDisposer=null)}handleTypeChange(i){const e=i.target;V.setNodeConfig(this.node.id,{typeId:e.value})}handleSmartTypeChange(i){const e=i.detail;this.typeLongEdit?(this.typeLongEdit.applyAgain(t=>{t.setNodeConfig(this.node.id,{typeId:e})}),this.typeLongEdit.accept(),this.typeLongEdit=null):V.setNodeConfig(this.node.id,{typeId:e})}handleSmartTypePreview(i){const e=i.detail;let t=e,n={};!Q.getNodeType(e)&&e.includes(".")&&(t="core.subgraph",n={subgraphId:e}),this.typeLongEdit?this.typeLongEdit.applyAgain(o=>{o.setNodeConfig(this.node.id,{typeId:t,...n})}):this.typeLongEdit=V.beginLongEdit({apply:o=>{o.setNodeConfig(this.node.id,{typeId:t,...n})},cancel:()=>{this.typeLongEdit=null}})}handleSmartTypeCancel(i){this.typeLongEdit&&(this.typeLongEdit.cancel(),this.typeLongEdit=null),this.editingField=null}handleNameChange(i){const e=i.target;V.setNodeConfig(this.node.id,{name:e.value})}handleVirtualInputChange(i,e){const t=i.target,n=ub(t.value)??0;if(i.type==="input")!this.sliderLongEdit||this.activeSliderPort!==e?(this.sliderLongEdit&&this.sliderLongEdit.cancel(),this.activeSliderPort=e,this.sliderLongEdit=V.beginLongEdit({apply:o=>{const s=o.getState().graph.inner.nodes[this.node.id];s&&o.setNodeConfig(this.node.id,{values:{...s.config.values||{},[e]:n}})},cancel:()=>{this.sliderLongEdit=null,this.activeSliderPort=null}})):this.sliderLongEdit.applyAgain(o=>{const s=o.getState().graph.inner.nodes[this.node.id];s&&o.setNodeConfig(this.node.id,{values:{...s.config.values||{},[e]:n}})});else if(i.type==="change")if(this.sliderLongEdit)this.sliderLongEdit.accept(),this.sliderLongEdit=null,this.activeSliderPort=null;else{const o=V.getState().graph.inner.nodes[this.node.id];o&&V.setNodeConfig(this.node.id,{values:{...o.config.values||{},[e]:n}})}}handleDoubleClick(i,e){e.stopPropagation(),this.editingField=i}handleEditCommit(i,e){const t=e.detail;if(i==="name")V.setNodeConfig(this.node.id,{name:t});else{let n=t,o={};!Q.getNodeType(t)&&t.includes(".")&&(n="core.subgraph",o={subgraphId:t}),V.setNodeConfig(this.node.id,{typeId:n,...o})}this.editingField=null}handleEditCancel(){this.editingField=null}renderInspectorContent(){const i=Q.getNodeType(this.node.config.typeId),e=t=>V.setNodeConfig(this.node.id,t);return M`
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
    `}async loadUI(){const i=Q.getNodeType(this.node.config.typeId);if(!(!i||!i.ui)){if(i.ui.body&&!this.loadedBodyRenderer&&!this.hasRequestedBodyLoad){this.hasRequestedBodyLoad=!0;try{const e=await i.ui.body();this.loadedBodyRenderer=e,i.renderBody||(i.renderBody=e)}catch(e){console.error("Failed to load body renderer",e)}}if(i.ui.body&&!this.loadedBodyRenderer&&!this.hasRequestedBodyLoad){this.hasRequestedBodyLoad=!0;try{const e=await i.ui.body();this.loadedBodyRenderer=e,i.renderBody||(i.renderBody=e)}catch(e){console.error("Failed to load body renderer",e)}}if(i.ui.getBodyHeight&&!i.getBodyHeight)try{const e=await i.ui.getBodyHeight();i.getBodyHeight=e}catch(e){console.error("Failed to load getBodyHeight",e)}if(i.ui.inspector&&!this.loadedInspectorRenderer&&!this.hasRequestedInspectorLoad){this.hasRequestedInspectorLoad=!0;try{if(typeof i.ui.inspector=="function"){const e=await i.ui.inspector();this.loadedInspectorRenderer=e,i.renderInspector||(i.renderInspector=e)}else{const{createGenericInspector:e}=await Me(async()=>{const{createGenericInspector:o}=await import("./generic-inspector-DVnL9dLT.js");return{createGenericInspector:o}},__vite__mapDeps([10,1])),t=i.ui.inspector,n=e(t.fields);this.loadedInspectorRenderer=n,i.renderInspector||(i.renderInspector=n)}}catch(e){console.error("Failed to load inspector renderer",e)}}if(i.ui.inputEditor&&!this.loadedInputEditorRenderer&&!this.hasRequestedInputEditorLoad){this.hasRequestedInputEditorLoad=!0;try{const e=await i.ui.inputEditor();if(this.loadedInputEditorRenderer=e,i.renderInputEditor||(i.renderInputEditor=e),i.ui.getInputEditorHeight){const t=await i.ui.getInputEditorHeight();i.getInputEditorHeight||(i.getInputEditorHeight=t)}}catch(e){console.error("Failed to load input editor renderer",e)}}this.requestUpdate()}}updated(i){if(this.node&&this.node.config.typeId!==this.currentTypeId&&(this.currentTypeId=this.node.config.typeId,this.loadedBodyRenderer=null,this.loadedInspectorRenderer=null,this.loadedInputEditorRenderer=null,this.hasRequestedBodyLoad=!1,this.hasRequestedInspectorLoad=!1,this.hasRequestedInputEditorLoad=!1,this.loadUI()),this.node){this.dataset.id=this.node.id,this.style.gridColumn=this.gridColumn,this.style.gridRow=this.gridRow,this.style.zIndex=this.parentZIndex.toString();const e=Q.getNodeType(this.node.config.typeId),t=P.observableState.effectiveNodeTypes.get(this.node.id);let n=[],o=[];t?(n=t.inputs,o=t.outputs):e&&(n=[...e.inputs||[]],o=[...e.outputs||[]]);const s=this.incomingConnections||V.observableState.graph.auxiliary.incomingConnections.get(this.node.id)||[],r=new Set(s.map(p=>{const g=V.observableState.graph.inner.connections[p];return g?g.toPort:null}).filter(p=>p!==null)),a=!!(e?.renderBody||this.loadedBodyRenderer);let l="normal";l=Cr(n,o,r,a,this.node.config),this.dataset.state=l;let c=0;n.forEach(p=>{const g=r.has(p.name);let m=Kt;if(Yi(p,g)){const b=e?.getInputEditorHeight?.(this.node,p.name);b&&(m=Math.max(Kt,b))}c+=m});const f=o.length*Kt,h=e?.getBodyHeight?.(this.node)||0,d=Math.max(c,f,Kt);let u=vl+d+vp+h;l==="minimal"&&(u=80),this.style.height=`${u}px`,e||setTimeout(()=>this.requestUpdate(),200)}}render(){const{selection:i,inflightPortConnectionOperation:e,queuedSelection:t}=P.observableState,n=i.has(this.node.id);this.isQueued,e&&(e.nodeId,this.node.id),this.toggleAttribute("selected",n),P.defineSelectable({path:this.node.id,renderInspectorContent:()=>this.renderInspectorContent()});const o=Q.getNodeType(this.node.config.typeId),s=P.observableState.effectiveNodeTypes.get(this.node.id);let r=[],a=[],l=this.node.config.typeId;s?(r=s.inputs,a=s.outputs,l=Ml(this.node.config,o)):o&&(r=[...o.inputs||[]],a=[...o.outputs||[]],l=Ml(this.node.config,o));const c=V.observableState.graph.auxiliary.incomingConnections.get(this.node.id)||[],f=new Set(c.map(v=>{const C=V.observableState.graph.inner.connections[v];return C?C.toPort:null}).filter(v=>v!==null)),h=this.isQueued,d=os(this.node.config.typeId),u=!!(o?.renderBody||this.loadedBodyRenderer),p=Cr(r,a,f,u,this.node.config);this.dataset.state=p;const g=p==="pill";let m=g?11:vl;const b=[],y=[];r.forEach((v,C)=>{const k=f.has(v.name);let S=Kt;if(b.push(M`
        <div class="port-wrapper" style="top: ${m}px; position: absolute; left: 0; height: ${Kt}px;">
          <graph-port
            .nodeId=${this.node.id}
            .name=${v.name}
            type="in"
            .description=${v.description||""}
            ?hideLabel="${g?!0:Iu(v.name,"in",r,a,f)}"
          ></graph-port>
        </div>
      `),Yi(v,k)){const A=o?.getInputEditorHeight?.(this.node,v.name);A&&(S=Math.max(Kt,A));let I;if(o?.renderInputEditor&&(I=o.renderInputEditor(this.node,v.name,{handleVirtualInputChange:this.handleVirtualInputChange.bind(this)})),!I){let O=this.node.config.values&&this.node.config.values[v.name];O===void 0&&this.node.config[v.name]!==void 0&&(O=this.node.config[v.name]);const L=O!==void 0?O:v.defaultValue!==void 0?v.defaultValue:v.type.defaultValue!==void 0?v.type.defaultValue:"",D=v.type.kind==="atomic"&&v.type.type==="number",F=a[C]?.name||"";I=M`
                <div class="virtual-input-field-wrapper" style="height: var(--row-height);">
                  <div class="slider-label" title="${v.name}">${v.name}</div>
                  ${D?M`
                          <scalar-slider
                            .min=${v.range?.[0]??0}
                            .max=${v.range?.[1]??1}
                            .step=${v.step??(v.range?(v.range[1]-v.range[0])/100:.01)}
                            .value=${L}
                            .defaultValue=${v.defaultValue??Math.max(v.range?.[0]??0,Math.min(v.range?.[1]??1,0))}
                            @input=${$=>this.handleVirtualInputChange($,v.name)}
                            @change=${$=>this.handleVirtualInputChange($,v.name)}
                            id="${this.node.id}-${v.name}-virtual-input"
                            class="virtual-input-field"
                            title="${v.description}"
                          ></scalar-slider>
                        `:v.type.kind==="atomic"&&v.type.type==="string"?M`
                          <input
                            id="${this.node.id}-${v.name}-virtual-input"
                            type="text"
                            .value=${L.toString()}
                            @input=${$=>this.handleVirtualInputChange($,v.name)}
                            @change=${$=>this.handleVirtualInputChange($,v.name)}
                            class="virtual-input-field"
                            title="${v.description}"
                          />
                        `:M`
                          <div class="virtual-input-field" style="color: var(--text-muted); font-size: 10px; padding: 0 5px;">
                            ${v.type.hint||(v.type.kind==="atomic"?v.type.type:v.type.kind)}
                          </div>
                        `}
                    <div class="slider-label" title="${F}">${F}</div>
                  </div>
          `}I&&y.push(M`
            <div style="top: ${m}px; position: absolute; width: 100%; height: ${S}px; display: flex; align-items: center;">
              ${I}
            </div>
          `)}m+=S});const x=`transform: translate(0, 0); width: 100%; height: 100%; --node-accent-color: ${d};`;return M`
      <div
        class="node ${n?"selected":""} ${h?"queued":""} ${bw(this.node.config.typeId,r)?"has-io-slider":""}"
        style="${x}"
        data-state="${p}"
      >
        <div class="ports-wrapper">
          <div class="inputs">
            ${b}
          </div>
          <div class="outputs">
            ${yw(this.node.id,a,r,f,g,v=>this.renderDebugValue(v))}
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
              ${this.editingField==="name"?M`
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
              ${this.editingField==="type"?M`
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
    `}};nt.styles=[...Et,pe`
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
      width: ${Qo}px;
    }

    :host([data-state="compressed"]) {
      width: ${kr}px;
    }

    :host([data-state="minimal"]) {
      width: ${Ho}px;
      height: ${Ho}px;
      border-radius: 50%;
      min-height: ${Ho}px;
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
      border-left: ${xl}px solid var(--node-accent-color, var(--node-border));
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
      left: ${wl}px; /* Move pips out to hang off node */
    }

    .outputs {
      align-items: flex-end;
      position: relative;
      right: ${wl}px; /* Move pips out */
    }

    .virtual-inputs-container {
      position: absolute;
      top: 0;
      left: calc(var(--node-padding-x) - ${xl}px - 1px);
      width: ${ce}px;
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
      width: ${wp}px;
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
      padding-left: ${qs}px;
    }

    .slider-label:last-child {
      text-align: right;
      padding-right: ${qs}px;
    }

    .virtual-input-field {
      flex-grow: 1; /* Fill remaining space */
      width: auto; /* Let flex handle width */
      padding: 0;
      margin: 0 ${qs}px;
      /* height: ${Kt}px; Removed to allow slider to be 22px */
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

  `];mt([H({attribute:!1})],nt.prototype,"node",2);mt([H({attribute:!1})],nt.prototype,"incomingConnections",2);mt([H({type:Boolean})],nt.prototype,"isQueued",2);mt([H({type:Number})],nt.prototype,"x",2);mt([H({type:Number})],nt.prototype,"y",2);mt([H({type:String})],nt.prototype,"gridColumn",2);mt([H({type:String})],nt.prototype,"gridRow",2);mt([H({type:Number})],nt.prototype,"parentZIndex",2);mt([Xe()],nt.prototype,"loadedBodyRenderer",2);mt([Xe()],nt.prototype,"loadedInspectorRenderer",2);mt([Xe()],nt.prototype,"loadedInputEditorRenderer",2);mt([Xe()],nt.prototype,"editingField",2);nt=mt([ke("graph-node")],nt);class kw{constructor(e){this.ctx=e}render(e){return e.map(t=>{const s=Math.floor(t.y/32),r=t.y%32,a=this.ctx.gridMetrics.rows.get(s)!==void 0?this.ctx.gridMetrics.rows.get(s):80,l=this.ctx.gridMetrics.rowOffsets.get(s)??16+s*96;let c=8;r<31?c=16+r*24:c=a!==void 0&&a>0?a+9:9;const f=l+c;let h="#888",d;if(t.wireId){const E=this.ctx.connections[t.wireId];if(E){h=os(`${E.fromPort}-${E.toPort}`);const K=this.ctx.nodes[E.fromNodeId],ue=this.ctx.nodes[E.toNodeId];if(K&&ue){const ve=this.getAbsolutePortY(K,E.fromPort.toString(),!1),we=this.getAbsolutePortY(ue,E.toPort.toString(),!0),qe=f,At=12,po=t.type==="start",_s=t.type==="end";po&&ve!==void 0?d=ve:_s&&we!==void 0?d=we:ve!==void 0&&Math.abs(qe-ve)<=At?d=ve:we!==void 0&&Math.abs(qe-we)<=At&&(d=we)}}}const u=this.ctx.selection.has(t.wireId),p=h,g=t.x+2;let m=0,b=0;const y=s*2+2;r<31?(m=y,b=16+r*24):(m=y+1,b=9);let x=0;if(d!==void 0){const E=r===31,K=this.ctx.gridMetrics.rowOffsets.get(s);if(K!==void 0)E?x=K+(a||80):x=K;else{const ve=16+s*96;x=E?ve+80:ve}const ue=d-f;Math.abs(ue)<3&&(b=d-1-x)}if(t.laneH&&t.totalHLanes&&t.totalHLanes>1){const K=(t.laneH-(t.totalHLanes+1)/2)*4;b+=K}let v=0;if(t.laneV&&t.totalVLanes&&t.totalVLanes>1){const K=(t.laneV-(t.totalVLanes+1)/2)*4;v+=K}const C=b,k=0,S=0;let A=`grid-column: ${g} / span ${t.length}; grid-row: ${m} / span 1; position: relative; width: 100%; height: 100%;`,I=0,O=0;if(t.wireId){const E=this.ctx.connections[t.wireId];if(E){const K=this.ctx.nodes[E.fromNodeId],ue=this.ctx.nodes[E.toNodeId];if(K&&ue){const ve=K.x*2+1,we=ue.x*2+1,qe=K.y*2+2,At=ue.y*2+2,po=m,_s=Math.abs(po-qe)<1,Pu=Math.abs(po-At)<1,Lu=this.ctx.gridMetrics.rowOffsets.get(K.y)??16+K.y*96,Ou=this.ctx.gridMetrics.rowOffsets.get(ue.y)??16+ue.y*96,ol=this.getAbsolutePortY(K,E.fromPort.toString(),!1),sl=this.getAbsolutePortY(ue,E.toPort.toString(),!0),Eu=ol!==void 0?ol-Lu:-999,Nu=sl!==void 0?sl-Ou:-999,Ru=Math.abs(C-Eu)<10,Bu=Math.abs(C-Nu)<10,_u=K&&t.x===ve+1&&_s&&Ru,$u=ue&&t.x===we-1&&Pu&&Bu;_u&&(I=0),$u&&(O=0)}}}const L=(E,K)=>{if(E!==void 0)return K?E===31?8:0:E===-1?0:E<31?15+E*24:E===31?a!==void 0&&a>0?a+8:0:8},D=r===31,F=L(t.clipTopRem,D),$=L(t.clipBotRem,D),z=(E="")=>M`<div class="wire-line h" style="position: absolute; height: 2px; top: 0; transform: translateY(${b}px); --wire-color: ${p}; ${E}"></div>`,de=()=>{let E="0",K="100%";return F!==void 0?(E=`${F}px`,$!==void 0?K=`${$-F}px`:K=`calc(100% - ${F}px)`):$!==void 0&&(K=`${$}px`),M`<div class="wire-line vertical" style="position: absolute; width: 2px; height: ${K}; left: calc(50% - 1px); top: ${E}; transform: translateX(${v}px); --wire-color: ${p};"></div>`},Ae=E=>M`<div class="wire-line h" style="position: absolute; height: 2px; top: 0; transform: translateY(${b}px); --wire-color: ${p}; left: calc(50% + ${v}px); width: calc(50% - ${v}px - ${E}px);"></div>`,ye=E=>M`<div class="wire-line h" style="position: absolute; height: 2px; top: 0; transform: translateY(${b}px); --wire-color: ${p}; left: ${E}px; width: calc(50% + ${v}px - ${E}px);"></div>`,bt=()=>{let E="0",K=b;return F!==void 0&&(E=`${F}px`,K=b-F+2),M`<div class="wire-line vertical" style="position: absolute; width: 2px; height: ${K}px; left: calc(50% - 1px); top: ${E}; transform: translateX(${v}px); --wire-color: ${p};"></div>`},An=()=>{let E=`calc(100% - ${b}px)`;return $!==void 0&&(E=`${$-b+3}px`),M`<div class="wire-line vertical" style="position: absolute; width: 2px; height: ${E}; left: calc(50% - 1px); top: ${b}px; transform: translateX(${v}px); --wire-color: ${p};"></div>`},_e=(E,K)=>Math.min(E,7);let se=M``;const Je=E=>{if(d===void 0)return null;const K=d-f;if(Math.abs(K)<3)return null;const ue=b,ve=d-x,we=Math.min(ue,ve),qe=Math.abs(ue-ve);return M`<div class="wire-line vertical jog" style="position: absolute; width: 2px; height: ${qe}px; left: ${E?"0":"calc(100% - 2px)"}; top: ${we}px; --wire-color: ${p};"></div>`};if(t.type==="h")se=z(`width: calc(100% - ${I+O}px); left: ${I}px;`);else if(t.type==="v")se=de();else if(t.type==="start"){const E=Je(!1),K=(t.x-1)/2,ue=this.ctx.gridMetrics.columnWidths.get(K)||272;let ve=272;if(t.wireId){const we=this.ctx.connections[t.wireId];if(we){const qe=this.ctx.nodes[we.fromNodeId];if(qe){const At=this.ctx.gridMetrics.cells.get(`${qe.x},${qe.y}`);At&&(ve=At.width)}}}if(ue>ve){const we=ve/2;se=M`${E}${z(`left: calc(50% + ${we}px); width: calc(50% - ${we}px);`)}`}else E?se=E:se=M``}else if(t.type==="end"){const E=Je(!0),K=(t.x-1)/2,ue=this.ctx.gridMetrics.columnWidths.get(K)||272;let ve=272;if(t.wireId){const we=this.ctx.connections[t.wireId];if(we){const qe=this.ctx.nodes[we.toNodeId];if(qe){const At=this.ctx.gridMetrics.cells.get(`${qe.x},${qe.y}`);At&&(ve=At.width)}}}if(ue>ve){const we=ve/2;se=M`${E}${z(`left: 0; width: calc(50% - ${we}px);`)}`}else E?se=E:se=M``}else if(t.type==="ctl"){const E=_e(O);se=M`${Ae(E)}${An()}`}else if(t.type==="ctr"){const E=_e(I);se=M`${ye(E)}${An()}`}else if(t.type==="cbl"){const E=_e(O);se=M`${Ae(E)}${bt()}`}else if(t.type==="cbr"){const E=_e(I);se=M`${ye(E)}${bt()}`}const st=t.type==="start"||t.type==="end",Z=st?"pointer-events: none !important;":"";return M`
                <div class="wire-segment ${t.type} ${u?"selected":""}"
                     id="${t.id}"
                     data-wire-id="${t.wireId}"
                     data-jog="${k}"
                     data-wire-level="${C}"
                     data-port-level="${S}"
                     style="${A} ${Z}"
                     @click=${E=>{st||(E.stopPropagation(),this.ctx.onWireClick(t.wireId,E))}}
                     @dblclick=${E=>{st||(E.stopPropagation(),this.ctx.onWireDblClick(t.wireId,E))}}
                >
                    ${se}
                </div>
            `})}getAbsolutePortY(e,t,n){let o=-1;const s=Q.getNodeType(e.config.typeId),r=this.ctx.effectiveNodeTypes?.get(e.id);let a;if(r?(a=n?r.inputs:r.outputs,o=a.findIndex(p=>p.name===t)):(a=n?s?.inputs:s?.outputs,a&&Array.isArray(a)&&(o=a.findIndex(p=>p.name===t))),o===-1){if(a){const p=parseInt(t,10);!isNaN(p)&&p>=0&&p<a.length&&(o=p)}o===-1&&!isNaN(parseInt(t,10))&&(o=parseInt(t,10))}if(o===-1)return;const l=this.ctx.gridMetrics.rowOffsets.get(e.y);if(l===void 0)return;const c=this.ctx.gridMetrics.rows.get(e.y)||80,f=`${e.x},${e.y}`,h=this.ctx.gridMetrics.cells.get(f),d=h?h.height:80;let u=0;return c>d&&(u=(c-d)/2),e.config.typeId==="io.input"||e.config.typeId==="io.output"||e.config.typeId==="resolume.input"||e.config.typeId==="resolume.output"?l+u+20:l+u+Sp(o)}}class Cw{constructor(e){this.appController=e,this.popup=null,this.longEdit=null,jn(this)}startCreation(e,t,n,o,s,r){const a=Oi("node");this.longEdit=this.appController.beginLongEdit({apply:l=>{l.createNode(s,n,o,{id:a})},cancel:()=>{this.longEdit=null}}),this.popup={x:e,y:t,gridX:n,gridY:o,initialValue:s,nodeId:a,isNew:!0,connectionId:r}}updatePreview(e){if(!this.popup)return;let t=e,n={};!Q.getNodeType(e)&&e.includes(".")&&(t="core.subgraph",n={subgraphId:e});const o=s=>{if(this.popup.isNew?s.createNode(t,this.popup.gridX,this.popup.gridY,{id:this.popup.nodeId,...n}):s.setNodeConfig(this.popup.nodeId,{typeId:t,...n}),this.popup.connectionId){const r=this.popup.connectionId,a=this.appController.observableState.graph.inner.connections[r];if(a){const l=Q.getNodeType(e),c=l?.inputs?.[0]?.name||"in",f=l?.outputs?.[0]?.name||"out";s.deleteConnection(r),s.createConnection(a.fromNodeId,a.fromPort,this.popup.nodeId,c),s.createConnection(this.popup.nodeId,f,a.toNodeId,a.toPort)}}};this.longEdit?this.longEdit.applyAgain(o):this.longEdit=this.appController.beginLongEdit({apply:o,cancel:()=>{this.longEdit=null}})}commit(){this.longEdit&&(this.longEdit.accept&&this.longEdit.accept(),this.longEdit=null),this.popup=null}cancel(){this.longEdit&&(this.longEdit.cancel(),this.longEdit=null),this.popup=null}}class Mw{constructor(e){this.host=e,this.isAdditive=!1}start(e){const t=this.host.element.getBoundingClientRect(),{scrollLeft:n,scrollTop:o}=this.host.getScrollState(),s=e.clientX-t.left+n,r=e.clientY-t.top+o;this.isAdditive=!!(e.shiftKey||e.ctrlKey||e.metaKey);let a="";new Ft(e,this.host.element,{move:(l,c)=>{const{scrollLeft:f,scrollTop:h}=this.host.getScrollState(),d=l.clientX-t.left+f,u=l.clientY-t.top+h,p=Math.min(s,d),g=Math.min(r,u),m=Math.abs(d-s),b=Math.abs(u-r);this.host.setSelectionBox({x:p,y:g,w:m,h:b});const y=[];this.host.getNodes().forEach(C=>{const k=C.getBoundingClientRect(),S=k.left-t.left+f,A=k.top-t.top+h;if(p<S+k.width&&p+m>S&&g<A+k.height&&g+b>A){const I=C.dataset.id;I&&y.push(I)}}),y.sort();const v=y.join(",");v!==a&&(this.host.onSelectionChange(y,this.isAdditive),a=v)},accept:()=>{this.host.setSelectionBox(null)},cancel:()=>{this.host.setSelectionBox(null),this.host.onSelectionChange([],!1)}})}}class Aw{constructor(e,t,n,o,s,r){this.host=e,this.appController=t,this.localController=n,this.runtimeManager=o,this.selectionManager=s,this.popupManager=r}handlePointerDown(e){this.host.closePopup(),this.runtimeManager.resumeAudio();const t=e.composedPath(),n=t.some(f=>f.tagName==="GRAPH-NODE"),o=t.some(f=>f.tagName==="GRAPH-CONNECTION"),s=t.some(f=>f.classList?.contains("wire-segment"));if(n||o||s)return;const r=t.find(f=>f.classList?.contains("region-box")),a=t.find(f=>f.classList?.contains("border-rail")),l=t.find(f=>f.classList?.contains("resize-handle")),c=(f,h)=>{const d=`region-${f}`;this.localController.observableState.selection.has(d)||(!h.shiftKey&&!h.metaKey&&!h.ctrlKey?this.localController.queueSelectPaths([d],!1):this.localController.queueSelectPaths([d],!0))};if(l||a){const f=l||a,h=f.dataset.nodeId,d=f.dataset.handle||f.dataset.rail,u=this.appController.observableState.graph.inner.nodes[h];if(!u)return;c(h,e);const p=Q.getNodeType(u.config.typeId),g=p?.getRegion?p.getRegion(u.config):{width:1,height:1,x:0,y:0},m=g.width,b=g.height,y=g.x||0,x=g.y||0,v=e.clientX,C=e.clientY;new Ft(e,this.host.element,{move:k=>{const S=k.clientX-v,A=k.clientY-C,I=Math.round(S/96),O=Math.round(A/48);let L=m,D=b,F=y,$=x;if((d==="e"||d==="se")&&(L=Math.max(1,m+I)),d==="w"){const de=m-1,Ae=-(u.x+y),ye=Math.min(Math.max(I,Ae),de);L=m-ye,F=y+ye}if((d==="s"||d==="se")&&(D=Math.max(1,b+O)),d==="n"){const de=b-1,Ae=-(u.y+x),ye=Math.min(Math.max(O,Ae),de);D=b-ye,$=x+ye}const z={};L!==u.config.width&&(z.width=L),D!==u.config.height&&(z.height=D),F!==u.config.regionX&&(z.regionX=F),$!==u.config.regionY&&(z.regionY=$),Object.keys(z).length>0&&this.appController.setNodeConfig(h,z,{skipHistory:!0})},accept:()=>{const k=this.appController.observableState.graph.inner.nodes[h];if(k){const S={width:m,height:b,regionX:y,regionY:x},A={width:k.config.width,height:k.config.height,regionX:k.config.regionX||0,regionY:k.config.regionY||0};(A.width!==S.width||A.height!==S.height||A.regionX!==S.regionX||A.regionY!==S.regionY)&&this.appController.commitConfigHistory(h,S,A)}}});return}if(r){const f=r.dataset.regionNodeId,h=this.appController.observableState.graph.inner.nodes[f];if(!h)return;const d=Q.getNodeType(h.config.typeId),u=d?.getRegion?d.getRegion(h.config):{x:0,y:0},p=u.x||0,g=u.y||0,m=e.clientX,b=e.clientY,y={regionX:p,regionY:g};new Ft(e,this.host.element,{move:x=>{const v=x.clientX-m,C=x.clientY-b,k=Math.round(v/96),S=Math.round(C/48),A=p+k,I=g+S;h.x+A<0||h.y+I<0||(A!==h.config.regionX||I!==h.config.regionY)&&this.appController.setNodeConfig(f,{regionX:A,regionY:I},{skipHistory:!0})},accept:()=>{const x=this.appController.observableState.graph.inner.nodes[f];if(x){const v={regionX:x.config.regionX||0,regionY:x.config.regionY||0};(v.regionX!==y.regionX||v.regionY!==y.regionY)&&this.appController.commitConfigHistory(f,y,v)}}});return}this.selectionManager.start(e)}handleDblClick(e){const t=e.composedPath(),n=t[0];if(n.classList.contains("cell")){if(n.classList.contains("node-cell")){const s=n.dataset.x,r=parseInt(n.dataset.y||"0");let a="util.hub",l=0;if(s==="output"?(a="io.output",l=20):s==="input"?(a="io.input",l=0):l=parseInt(s||"0"),Object.values(this.appController.observableState.graph.inner.nodes).some(b=>b.x===l&&b.y===r))return;const h=n.getBoundingClientRect(),d=this.host.getBoundingClientRect(),{scrollLeft:u,scrollTop:p}=this.host.getScrollState(),g=h.left-d.left+u,m=h.top-d.top+p-40;this.popupManager.startCreation(g,m,l,r,a)}return}const o=t.find(s=>s.nodeName==="GRAPH-NODE");if(o){const s=o.getAttribute("data-id")||o.dataset?.id;s&&this.handleNodeDeletion(s)}}handleNodeDeletion(e){const t=this.localController.observableState.lastGroupSelection;if(t&&t.has(e)){const o=Array.from(t).filter(s=>s.startsWith("node-"));this.appController.transaction(()=>{o.forEach(s=>this.appController.deleteNode(s))}),this.localController.setLastGroupSelection(null);return}const n=this.appController.observableState.graph.inner.nodes[e];if(n){const o=Object.values(this.appController.observableState.graph.inner.connections),s=Q.getNodeType(n.config.typeId),r=s?.inputs?.[0]?.name,a=s?.outputs?.[0]?.name;if(r&&a){const l=o.filter(f=>f.toNodeId===e&&f.toPort===r),c=o.filter(f=>f.fromNodeId===e&&f.fromPort===a);if(l.length===1&&c.length===1){const f=l[0],h=c[0];this.appController.transaction(d=>{d.deleteNode(e),d.createConnection(f.fromNodeId,f.fromPort,h.toNodeId,h.toPort)});return}}}this.appController.deleteNode(e)}}var Iw=Object.defineProperty,Tw=Object.getOwnPropertyDescriptor,uo=(i,e,t,n)=>{for(var o=n>1?void 0:n?Tw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Iw(e,t,o),o};let qn=class extends it{constructor(){super(),this.selectionBox=null,this.popupManager=new Cw(V),this.selectionInteraction=new Mw({element:this,getScrollState:()=>({scrollLeft:this.scrollLeft,scrollTop:this.scrollTop}),getNodes:()=>Array.from(this.shadowRoot?.querySelectorAll("graph-node")||[]),setSelectionBox:i=>{this.selectionBox=i},onSelectionChange:(i,e)=>{e?P.setQueuedSelection(i):P.queueSelectPaths(i,!1)}}),this.inputLogic=new Aw({element:this,getScrollState:()=>({scrollLeft:this.scrollLeft,scrollTop:this.scrollTop}),getBoundingClientRect:()=>this.getBoundingClientRect(),closePopup:()=>{this.popupManager.commit()}},V,P,xe,this.selectionInteraction,this.popupManager),this.pendingWireInsert=null,this.catalog=new Au(Q,()=>Ln.files.map(i=>i.name)),this.clientWidth=0,this.regionSelectables=new Map,this.activeTool="select",this.ghostTarget=null,this._pointerMoveHandler=null,this._pointerUpHandler=null,this._keyDownHandler=null,this.disposers=[],this.connectionSelectables=new Map,this.resizeObserver=new ResizeObserver(i=>{for(const e of i)this.clientWidth=e.contentRect.width,this.updateViewport()}),qt(()=>P.observableState.selection.keys(),()=>{this.pendingWireInsert&&!P.observableState.selection.has(this.pendingWireInsert.wireId)&&(this.pendingWireInsert=null),this.requestUpdate()})}handlePointerDown(i){this.pendingWireInsert=null,this.inputLogic.handlePointerDown(i)}handleDblClick(i){this.inputLogic.handleDblClick(i)}handleConnectionDelete(i){V.deleteConnection(i.detail.connectionId)}handleScroll(i){const e=i.target;this.scrollLeft=e.scrollLeft,this.scrollTop=e.scrollTop,this.updateViewport()}updateViewport(){P.setViewport(this.scrollLeft||0,this.scrollTop||0,this.clientWidth||this.offsetWidth,this.clientHeight||this.offsetHeight)}updated(i){super.updated(i),this.registerRegionSelectables()}registerRegionSelectables(){const i=V.observableState.graph.inner.nodes;for(const e of Object.values(i))if(Q.getNodeType(e.config.typeId)?.getRegion){const n=`region-${e.id}`;let o=this.regionSelectables.get(n);o||(o={path:n},this.regionSelectables.set(n,o)),P.observableState.queuedSelection.has(n)&&P.defineSelectable(o)}}addDisposer(i){this.disposers.push(i)}connectedCallback(){super.connectedCallback(),this.addDisposer(qt(()=>P.observableState.inflightPortConnectionOperation,i=>{i?(requestAnimationFrame(()=>{const e=this.shadowRoot?.querySelector(`graph-node[data-id="${i.nodeId}"]`),t=this.shadowRoot?.querySelector("#ghost-wire-line");if(e&&t){const n=e.getBoundingClientRect(),o=this.getBoundingClientRect(),s=n.left-o.left+this.scrollLeft,r=n.top-o.top+this.scrollTop,a=this.getNodePortY(i.nodeId,i.port,i.type==="in");let l=s;i.type==="out"&&(l+=n.width);const c=r+a-8;t.setAttribute("x1",String(l)),t.setAttribute("y1",String(c)),t.setAttribute("x2",String(l)),t.setAttribute("y2",String(c))}}),this._pointerMoveHandler||(this._pointerMoveHandler=e=>{const t=this.shadowRoot?.querySelector("#ghost-wire-line");if(t){const n=this.getBoundingClientRect(),o=e.clientX-n.left+this.scrollLeft,s=e.clientY-n.top+this.scrollTop;t.setAttribute("x2",String(o)),t.setAttribute("y2",String(s))}},this.addEventListener("pointermove",this._pointerMoveHandler)),this._pointerUpHandler||(this._pointerUpHandler=e=>{P.setInflightPortConnectionOperation(null),this.ghostTarget=null},this.addEventListener("pointerup",this._pointerUpHandler)),this._keyDownHandler||(this._keyDownHandler=this.handleKeyDown.bind(this),window.addEventListener("keydown",this._keyDownHandler))):(this._pointerMoveHandler&&(this.removeEventListener("pointermove",this._pointerMoveHandler),this._pointerMoveHandler=null),this._pointerUpHandler&&(this.removeEventListener("pointerup",this._pointerUpHandler),this._pointerUpHandler=null),this.ghostTarget=null)},{fireImmediately:!0})),this._keyDownHandler||(this._keyDownHandler=this.handleKeyDown.bind(this),window.addEventListener("keydown",this._keyDownHandler)),this.addEventListener("pointerdown",this.handlePointerDown),this.addEventListener("dblclick",this.handleDblClick),this.addEventListener("connection-delete",this.handleConnectionDelete),this.addEventListener("scroll",this.handleScroll),this.resizeObserver.observe(this),this.clientWidth=this.offsetWidth,this.addEventListener("dragover",this.handleDragOver),this.addEventListener("drop",this.handleDrop)}disconnectedCallback(){super.disconnectedCallback(),this.disposers.forEach(i=>i()),this.disposers=[],this.removeEventListener("pointerdown",this.handlePointerDown),this.removeEventListener("dblclick",this.handleDblClick),this.removeEventListener("connection-delete",this.handleConnectionDelete),this.removeEventListener("scroll",this.handleScroll),this.removeEventListener("dragover",this.handleDragOver),this.removeEventListener("drop",this.handleDrop),this._keyDownHandler&&(window.removeEventListener("keydown",this._keyDownHandler),this._keyDownHandler=null),this.resizeObserver.disconnect()}handleDragOver(i){i.preventDefault(),i.dataTransfer.dropEffect="copy"}handleDrop(i){i.preventDefault();const t=i.composedPath().find(n=>n.classList?.contains("node-cell"));if(t){const n=parseInt(t.dataset.x||"0"),o=parseInt(t.dataset.y||"0"),s=i.dataTransfer?.getData("application/json");if(s)try{const r=JSON.parse(s);if(r.type==="resolume:parameter"){let a="resolume.input",l=n;const c=t.dataset.x;c==="output"?(a="resolume.output",l=20):(l=parseInt(c||"0"),l===0&&(a="resolume.input"));const f=V.createNode(a,l,o,{path:r.path});P.queueSelectPaths([f.id])}}catch(r){console.error(r)}}}handleKeyDown(i){if(!this.popupManager.popup&&!pb(i)){if(i.key==="a"&&!i.ctrlKey&&!i.metaKey&&!i.altKey&&!i.shiftKey){P.toggleRegionExpansion(),i.preventDefault();return}if(this.pendingWireInsert&&i.key.length===1&&/[a-zA-Z0-9]/.test(i.key)&&!i.ctrlKey&&!i.metaKey&&!i.altKey){const{gridX:e,gridY:t}=this.pendingWireInsert;if(e!==-1){if(!V.observableState.graph.inner.connections[this.pendingWireInsert.wireId]){this.pendingWireInsert=null;return}const o=i.key,s=this.pendingWireInsert.wireId;this.popupManager.startCreation(this.pendingWireInsert.x,this.pendingWireInsert.y-40,e,t,o,s),this.pendingWireInsert=null}}}}renderPendingWirePip(){if(!this.pendingWireInsert)return null;const{x:i,y:e,wireId:t}=this.pendingWireInsert;if(!P.observableState.selection.has(t))return null;let o="var(--accent-color)";const r=V.observableState.graph.inner.connections[t];r&&(o=os(`${r.fromPort}-${r.toPort}`));const a=this.pendingWireInsert.orientation||"vertical";return M`<div class="wire-insert-pip ${a}"
                     style="left: ${i}px; top: ${e}px; --pip-color: ${o};"></div>`}onWireClick(i,e){P.queueSelectPaths([i],e.shiftKey||e.ctrlKey||e.metaKey);const t=this.getBoundingClientRect(),n=e.clientX-t.left+this.scrollLeft,o=e.clientY-t.top+this.scrollTop,s=this.shadowRoot?.querySelectorAll(".cell");let r=1/0,a=n,l=o,c=-1,f=-1;s?.forEach(g=>{const m=g.getBoundingClientRect(),b=m.left-t.left+this.scrollLeft+m.width/2,y=m.top-t.top+this.scrollTop+m.height/2,x=Math.sqrt(Math.pow(n-b,2)+Math.pow(o-y,2));if(x<r){r=x,a=b,l=y;const v=g.dataset;v.x!==void 0&&v.y!==void 0&&(c=v.x==="output"?20:parseInt(v.x),f=parseInt(v.y))}});const d=e.target.getBoundingClientRect(),p=d.width>d.height?"vertical":"horizontal";this.pendingWireInsert={x:a,y:l,gridX:c,gridY:f,wireId:i,orientation:p},this.requestUpdate()}getRowHeight(i){return P.observableState?.gridMetrics?P.observableState.gridMetrics.rows.get(i)??80:80}getColWidth(i){return P.observableState?.gridMetrics?P.observableState.gridMetrics.columnWidths.get(i)??80:80}getNodePortY(i,e,t){const n=V.observableState.graph.inner.nodes[i];if(!n)return 40;const o=Q.getNodeType(n.config.typeId),s=P.observableState.effectiveNodeTypes.get(i);let r=t?o?.inputs||[]:o?.outputs||[];s&&(r=t?s.inputs:s.outputs);const a=r.findIndex(l=>l.name===e);return a===-1?40:32+a*24+12}getConnectionSelectable(i){return this.connectionSelectables.has(i)||this.connectionSelectables.set(i,{path:i,renderInspectorContent:()=>this.renderConnectionInspector(i)}),this.connectionSelectables.get(i)}renderConnectionInspector(i){const e=V.observableState.graph.inner.connections[i];if(e)return M`
              <h3>Connection</h3>
              <div class="field">
                  <label>From Port:</label>
                  <input
                      data-testid="from-port-input"
                      type="text"
                      .value=${e.fromPort.toString()}
                      @input=${t=>{const n=t.target;V.setConnectionPorts(e.id,{fromPort:n.value})}}
                  />
              </div>
              <div class="field">
                  <label>To Port:</label>
                  <input
                      data-testid="to-port-input"
                      type="text"
                      .value=${e.toPort.toString()}
                      @input=${t=>{const n=t.target;V.setConnectionPorts(e.id,{toPort:n.value})}}
                  />
              </div>
          `}renderGridCells(){const{nodes:i}=V.observableState.graph.inner,e=[],{boundingBox:t}=P.observableState.gridMetrics,n=t.width,o=t.height,s=Math.max(o+3,12),r=Math.max(n+3,8);for(let a=0;a<s;a++){const l=this.getRowHeight(a);e.push(M`<div class="cell node-cell" data-x="input" data-y="${a}" style="grid-column: 1; grid-row: ${2*a+2}; height: ${l}px;"></div>`),e.push(M`<div class="cell gap-cell gap-h" data-x="input" style="grid-column: 1; grid-row: ${2*a+3};"></div>`)}for(let a=0;a<=r;a++){const l=2*a+3;for(let c=0;c<s;c++){const f=2*c+2,h=this.getRowHeight(c),d=this.getColWidth(a),u=a===r,p=u?"output":a.toString();e.push(M`<div class="cell node-cell" data-x="${p}" data-y="${c}" style="grid-column: ${l}; grid-row: ${f}; height: ${h}px; width: ${d}px;"></div>`);const g=u?"output":void 0,m=h>0?16:0,b=m>0?"":"display: none;";e.push(M`<div class="cell gap-cell gap-h" data-x="${g}" style="grid-column: ${l}; grid-row: ${f+1}; width: ${d}px; height: ${m}px; overflow: hidden; ${b}"></div>`);let y=16;a>0&&(y=this.getColWidth(a-1)>0?16:0);const x=y>0?"":"display: none;";e.push(M`<div class="cell gap-cell gap-v" style="grid-column: ${l-1}; grid-row: ${f}; height: ${h}px; width: ${y}px; overflow: hidden; ${x}"></div>`);const v=y>0&&m>0?"":"display: none;";e.push(M`<div class="cell gap-cell gap-c" style="grid-column: ${l-1}; grid-row: ${f+1}; width: ${y}px; height: ${m}px; overflow: hidden; ${v}"></div>`)}}return e}renderGhostWire(){const i=P.observableState.inflightPortConnectionOperation;return M`
        <svg id="ghost-wire-svg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; overflow: visible; display: ${i?"block":"none"};">
            <line id="ghost-wire-line" x1="0" y1="0" x2="0" y2="0" stroke="rgba(255, 255, 255, 0.5)" stroke-width="2" stroke-dasharray="4" />
        </svg>
    `}render(){const{nodes:i,connections:e}=V.observableState.graph.inner;Object.values(e).forEach(u=>{P.defineSelectable({path:u.id,renderInspectorContent:()=>M`
                <h3>Connection</h3>
                <div class="field">
                    <label>From Port:</label>
                    <input
                        type="text"
                        .value=${u.fromPort.toString()}
                        @input=${p=>{const g=p.target;V.setConnectionPorts(u.id,{fromPort:g.value})}}
                    />
                </div>
                <div class="field">
                    <label>To Port:</label>
                    <input
                        type="text"
                        .value=${u.toPort.toString()}
                        @input=${p=>{const g=p.target;V.setConnectionPorts(u.id,{toPort:g.value})}}
                    />
                </div>
            `})});let t=0;for(const u of Object.values(i)){if(u.config.typeId==="io.output"||u.config.typeId==="resolume.output")continue;let p=u.x;const g=Q.getNodeType(u.config.typeId);if(g?.getRegion){const m=g.getRegion(u.config);m&&(p=u.x+m.width-1)}p>t&&(t=p)}const n=Math.max(t+hf,ff),o=2*n+3,s="minmax(80px, auto)",r="var(--grid-gap, 16px)",a=[];a.push(`[input] ${s}`),a.push(`[gap-start] ${r}`);for(let u=0;u<n;u++){const p=this.getColWidth(u),g=p>0?16:0;a.push(`[node] ${p}px`),a.push(`[gap] ${g}px`)}a.push("[output] minmax(80px, auto)");const l=a.join(" "),c=[];c.push("[gap-top] var(--grid-gap, 16px)");let f=0;for(const u of Object.values(i)){let p=u.y;const g=Q.getNodeType(u.config.typeId);if(g?.getRegion){const m=g.getRegion(u.config);m&&(p=u.y+m.height-1)}p>f&&(f=p)}const h=Math.max(12,f+1);for(let u=0;u<h;u++){const p=this.getRowHeight(u),g=p>0?16:0;c.push(`[node] minmax(${p}px, auto)`),c.push(`[gap] ${g}px`)}const d=c.join(" ");return M`
      ${this.renderGhostWire()}
      ${this.renderPendingWirePip()}
      ${this.selectionBox?M`
        <div class="selection-box" style="left: ${this.selectionBox.x}px; top: ${this.selectionBox.y}px; width: ${this.selectionBox.w}px; height: ${this.selectionBox.h}px;"></div>
      `:""}

      ${this.popupManager.popup?M`
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


    ${Object.values(e).map(u=>{const p=this.getConnectionSelectable(u.id);return P.defineSelectable(p),""})}

        ${(()=>{const u={nodes:i,connections:e,gridMetrics:P.observableState.gridMetrics,inferredNodeTypes:P.observableState.inferredNodeTypes,effectiveNodeTypes:P.observableState.effectiveNodeTypes,incomingConnections:V.observableState.graph.auxiliary.incomingConnections,selection:P.observableState.selection,onWireClick:this.onWireClick.bind(this),onWireDblClick:(m,b)=>{this.pendingWireInsert&&this.pendingWireInsert.wireId===m&&(this.pendingWireInsert=null),this.dispatchEvent(new CustomEvent("connection-delete",{detail:{connectionId:m}}))}},p=new kw(u),g=P.observableState.wireLayout.segments||[];return p.render(g)})()}




    ${this.renderRegions()}
    ${wa(Object.values(i),u=>u.id,u=>this.renderGraphNode(u,o))}
    ${this.renderGhosts(o)}
    ${this.renderDragPreview(o)}
      </div>
    `}renderDragPreview(i){const e=P.observableState.dragPreview;if(!e)return"";const t=2*e.x+3,n=2*e.y+2;return M`
      <div class="drag-preview" style="grid-column: ${t}; grid-row: ${n}; min-height: 80px;"></div>
    `}renderGhosts(i){const{selection:e,isDraggingSelection:t,altKeyPressed:n}=P.observableState;if(!t||!n)return"";const o=[];for(const[s]of e){const r=V.observableState.graph.inner.nodes[s];r&&(P.observableState.gridMetrics.cells.get(`${r.x},${r.y}`)?.isHidden||o.push(r))}return wa(o,s=>s.id+"-ghost",s=>{const r=V.observableState.graph.auxiliary.incomingConnections.get(s.id)||[];let a=0,l;s.config.typeId==="io.input"||s.config.typeId==="resolume.input"?(a=1,l="input"):s.config.typeId==="io.output"||s.config.typeId==="resolume.output"?(a=i,l="output"):a=2*s.x+3;const c=2*s.y+2,f=`${a} / span 1`,h=`${c}`;return M`
        <graph-node
          .node=${s}
          .incomingConnections=${r}
          .isQueued=${!1}
          .x=${s.x}
          .y=${s.y}
          .gridColumn=${f}
          .gridRow=${h}
          .parentZIndex=${90}
          data-io-type=${l||""}
          data-id=${s.id+"-ghost"}
          style="grid-column: ${f}; grid-row: ${h}; opacity: 0.5; filter: grayscale(1); pointer-events: none;"
        ></graph-node>
      `})}renderRegions(){const{nodes:i}=V.observableState.graph.inner,e=[],t=P.observableState.gridMetrics.regions;for(const n of Object.values(i)){const o=t.get(n.id);if(o){const s=o.x,r=o.y,a=o.width,l=o.height,c=2*s+3,f=2*r+2;let h=1;for(let v=a-1;v>=0;v--)if(this.getColWidth(s+v)>0){h=v+1;break}const d=Math.max(1,2*h-1);let u=1;for(let v=l-1;v>=0;v--)if(this.getRowHeight(r+v)>0){u=v+1;break}const p=Math.max(1,2*u-1),g=`region-${n.id}`,m=P.observableState.selection.has(g);let b=!1;if(a>1){for(let v=s;v<s+a;v++)if(v!==n.x&&this.getColWidth(v)>0){b=!0;break}}if(!b&&l>1){for(let v=r;v<r+l;v++)if(v!==n.y&&this.getRowHeight(v)>0){b=!0;break}}if(!b)continue;let y=os(n.config.name||n.config.typeId);const x=o.isCollapsed;x&&(y="var(--grid-line-color)"),e.push(M`
            <div class="region-box ${m?"selected":""} ${x?"collapsed":""}"
                 data-region-node-id="${n.id}"
                 style="
              grid-column: ${c} / span ${d};
              grid-row: ${f} / span ${p};
              background-color: ${m?y+"22":y+"11"};
              --region-color: ${y};
            ">
              <!-- Render Rails and Handles ONLY if not collapsed -->
              ${x?M`
                 <!-- Collapsed Region Border (Static) -->
                 <div style="position: absolute; inset: 0; pointer-events: none; border: 2px dashed ${y}; border-radius: 8px;"></div>
              `:M`
                <div class="border-rail n" data-rail="n" data-node-id="${n.id}" style="border-top: ${m?"4px":"2px"} dashed ${y};"></div>
                <div class="border-rail s" data-rail="s" data-node-id="${n.id}" style="border-bottom: ${m?"4px":"2px"} dashed ${y};"></div>
                <div class="border-rail w" data-rail="w" data-node-id="${n.id}" style="border-left: ${m?"4px":"2px"} dashed ${y};"></div>
                <div class="border-rail e" data-rail="e" data-node-id="${n.id}" style="border-right: ${m?"4px":"2px"} dashed ${y};"></div>

                <div class="resize-handle e" data-handle="e" data-node-id="${n.id}"></div>
                <div class="resize-handle s" data-handle="s" data-node-id="${n.id}"></div>
                <div class="resize-handle se" data-handle="se" data-node-id="${n.id}"></div>
              `}
            </div>
          `)}}return e}renderGraphNode(i,e){const t=P.observableState.queuedSelection.has(i.id),n=V.observableState.graph.auxiliary.incomingConnections.get(i.id)||[];let o=0,s;i.config.typeId==="io.input"||i.config.typeId==="resolume.input"?(o=1,s="input"):i.config.typeId==="io.output"||i.config.typeId==="resolume.output"?(o=e,s="output"):o=2*i.x+3;const r=2*i.y+2,a=1,l=P.observableState.selection.has(i.id),f=P.observableState.gridMetrics.cells.get(`${i.x},${i.y}`)?.isHidden;return M`
            <graph-node
              .node=${i}
              .incomingConnections=${n}
              .isQueued=${t}
              .x=${i.x}
              .y=${i.y}
              .gridColumn=${`${o} / span ${a}`}
              .gridRow=${`${r}`}
              .parentZIndex=${l?110:100}
              data-io-type=${s||""}
              data-id=${i.id}
              ?hidden=${f}
            ></graph-node>
          `}};qn.styles=[...Et,pe`
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
  `];uo([Xe()],qn.prototype,"selectionBox",2);uo([Xe()],qn.prototype,"pendingWireInsert",2);uo([H({attribute:!1})],qn.prototype,"clientWidth",2);uo([H({type:String})],qn.prototype,"activeTool",2);qn=uo([ke("graph-grid")],qn);var Dw=Object.defineProperty,Pw=Object.getOwnPropertyDescriptor,Mn=(i,e,t,n)=>{for(var o=n>1?void 0:n?Pw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Dw(e,t,o),o};let jt=class extends Sn{constructor(){super(...arguments),this.label="",this.value="",this.type="text",this.placeholder=""}handleInput(i){const e=i.target;this.value=e.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return M`
      ${this.label?M`<label>${this.label}</label>`:""}
      <input
        .type=${this.type}
        .value=${this.value}
        .placeholder=${this.placeholder}
        .min=${this.min?.toString()||""}
        .max=${this.max?.toString()||""}
        .step=${this.step?.toString()||""}
        @input=${this.handleInput}
      />
    `}};jt.styles=[...Et,pe`
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
    `];Mn([H({type:String})],jt.prototype,"label",2);Mn([H({type:String})],jt.prototype,"value",2);Mn([H({type:String})],jt.prototype,"type",2);Mn([H({type:String})],jt.prototype,"placeholder",2);Mn([H({type:Number})],jt.prototype,"min",2);Mn([H({type:Number})],jt.prototype,"max",2);Mn([H({type:Number})],jt.prototype,"step",2);jt=Mn([ke("ui-input")],jt);var Lw=Object.getOwnPropertyDescriptor,Ow=(i,e,t,n)=>{for(var o=n>1?void 0:n?Lw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=r(o)||o);return o};let xa=class extends it{render(){const i=P.observableState.selection,e=i.size>0;return M`
      <div class="header">
        <ui-button
          id="region-toggle-btn"
          icon=${P.observableState.localSettings.areRegionsExpanded?"la-compress":"la-expand"}
          @click=${()=>P.toggleRegionExpansion()}
          title=${P.observableState.localSettings.areRegionsExpanded?"Collapse Auto Regions":"Expand Auto Regions"}
        ></ui-button>
        <ui-button
          id="undo-btn"
          icon="la-undo"
          ?disabled=${!V.canUndo}
          @click=${()=>V.undo()}
        ></ui-button>
        <ui-button
          id="redo-btn"
          icon="la-redo"
          ?disabled=${!V.canRedo}
          @click=${()=>V.redo()}
        ></ui-button>
      </div>
      <div class="content">
        ${e?i.size>1?M`<div style="color: #ccc; text-align: center; margin-top: 20px;">${i.size} nodes selected</div>`:Array.from(i.values()).map(t=>t.renderInspectorContent?t.renderInspectorContent():""):M`
          <div style="color: #666; text-align: center; margin-top: 50px;">
            Select a node to inspect
          </div>
        `}
      </div>
    `}};xa.styles=[...Et,pe`
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
  `];xa=Ow([ke("inspector-popup")],xa);var Ew=Object.getOwnPropertyDescriptor,Nw=(i,e,t,n)=>{for(var o=n>1?void 0:n?Ew(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=r(o)||o);return o};let Sa=class extends it{render(){return M`
      <graph-grid></graph-grid>
      <inspector-popup></inspector-popup>
    `}};Sa.styles=pe`
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
  `;Sa=Nw([ke("graph-editor")],Sa);const Kc=6,Xc=1,Rw=2.5,zo=600,at=5,Xn=5,Jc=5;class Bw{constructor(e,t){this.rollingWaveformBuffer=null,this.externalClockSample=null,this.stabilizerSample=null,this.inferenceSample=null,this.latestPhase=0,this.latestBpm=0,this.latestMagnitude=0,this.lastPredictionTime=0,this.phaseHistory=[],this.bpmHistory=[],this.bestTrajPhaseHistory=[],this.externalClockHistory=[],this.lastPhase=0,this.lastBarPhase=0,this.phaseMarkPassTime=-1,this.barMarkPassTime=[-1,-1,-1,-1],this.lastBestTrajectoryId=-1,this.trajectorySwitchTime=-1,this.lastBestTrajectoryPhase=0,this.trajectoryMarkPassTime=-1,this.bpmGraphPrevBpmCenter=120,this.canvases=e,this.audioContext=t}get bpmGraphCenterBpm(){return this.bpmGraphPrevBpmCenter}get hasAudioContext(){return!!this.audioContext}setAudioContext(e){this.audioContext=e}updateExternalClock(e){this.externalClockSample=e}updateStabilizer(e){this.stabilizerSample=e}updateInference(e){this.inferenceSample=e,this.latestPhase=e.phase,this.latestBpm=e.bpm,this.latestMagnitude=e.phaseMagnitude,this.lastPredictionTime=e.inputTime}updateRollingWaveform(e){this.rollingWaveformBuffer=e}addExternalClockHistory(e){const t=this.externalClockHistory.at(-1);let n=e.phase,o=e.bpm;if(e.phase===void 0&&t){const r=(e.timestamp-t.timestamp)*t.bpm/60*2*Math.PI;n=t.phase+r}e.bpm===void 0&&t&&(o=t.bpm),n??=0,o??=120,this.externalClockHistory.push({...e,bpm:o,phase:n}),this.externalClockHistory.length>zo&&this.externalClockHistory.shift()}updateVisualizations(e,t,n){if(!this.audioContext)return;this.canvases.mainWaveformCanvas&&this.rollingWaveformBuffer&&this.drawWaveform(this.canvases.mainWaveformCanvas.getContext("2d"),this.rollingWaveformBuffer,"#ff4500");const o=this.inferenceSample?.odfWindow;this.canvases.odfCanvas&&o&&this.drawOdf(this.canvases.odfCanvas.getContext("2d"),o);const s=this.inferenceSample?.specWindow;this.canvases.specCanvas&&s&&this.drawSpectrogram(this.canvases.specCanvas.getContext("2d"),s);const r=this.audioContext.currentTime,a=r-this.lastPredictionTime;if(this.latestBpm>0){const f=60/this.latestBpm,h=a/f*2*Math.PI;let d=this.latestPhase+h;d=Math.atan2(Math.sin(d),Math.cos(d)),this.lastPhase>0&&d<=0&&(this.phaseMarkPassTime=r),this.lastPhase=d,this.phaseHistory.push({value:d,timestamp:r}),this.phaseHistory.length>zo&&this.phaseHistory.shift(),this.canvases.phaseClockCanvas&&this.drawRawPhaseClock(d,this.latestMagnitude,this.phaseHistory.map(u=>u.value),r)}const l=this.stabilizerSample?.trajectories??[],c=this.stabilizerSample?.bestTrajectory??null;if(c&&c.id!==this.lastBestTrajectoryId&&(this.trajectorySwitchTime=r,this.lastBestTrajectoryId=c.id,this.lastBestTrajectoryPhase=0),this.canvases.trajectoryClockCanvas&&this.drawTrajectories(this.canvases.trajectoryClockCanvas.getContext("2d"),l,c,r),c){this.bpmHistory.push({value:e,timestamp:r}),this.bpmHistory.length>zo&&this.bpmHistory.shift();const f=this.externalClockSample?Mr(this.externalClockSample,r):0,h=(Math.floor(f)%4+4)%4,d=Math.floor(this.lastBarPhase)%4,u=bo(c,r),p=Mr(c,r);h!==d&&(this.barMarkPassTime[h]=r),this.canvases.barClockCanvas&&this.drawBarPhaseClock(f,p,r),this.lastBarPhase=f;const g=Math.floor(this.lastBestTrajectoryPhase/(2*Math.PI));Math.floor(u/(2*Math.PI))>g&&(this.trajectoryMarkPassTime=r),this.lastBestTrajectoryPhase=u,this.bestTrajPhaseHistory.push({value:u,timestamp:r}),this.bestTrajPhaseHistory.length>zo&&this.bestTrajPhaseHistory.shift()}else this.canvases.barClockCanvas&&this.drawBarPhaseClock(0,0,r),this.lastBarPhase=0,this.lastBestTrajectoryPhase=0;this.canvases.bpmGraphCanvas&&this.drawBpmGraph(e),this.canvases.phaseGraphCanvas&&this.drawPhaseGraph(c)}drawBpmGraph(e){const t=this.canvases.bpmGraphCanvas.getContext("2d"),n=t.canvas;t.clearRect(0,0,n.width,n.height);const o=n.width/2;t.strokeStyle="#444",t.beginPath(),t.moveTo(o,0),t.lineTo(o,n.height),t.stroke();const s=this.audioContext.currentTime,r=this.bpmHistory.at(-1)?.value??this.bpmGraphPrevBpmCenter,a=Math.round(r/Xc)*Xc;Math.abs(this.bpmGraphPrevBpmCenter-a)>Rw&&(this.bpmGraphPrevBpmCenter=a);const l=this.bpmGraphPrevBpmCenter,c=l-Kc*.5,f=l+Kc*.5;if(this.bpmHistory.length>0){t.strokeStyle="#1ed760",t.beginPath();let d=!0;for(let u=this.bpmHistory.length-1;u>=0;u--){const p=this.bpmHistory[u],g=s-p.timestamp;if(g>at)break;const b=(p.value-c)/(f-c),y=o-g/at*o,x=(1-b)*n.height;d?(t.moveTo(y,x),d=!1):t.lineTo(y,x)}t.stroke()}if(this.externalClockHistory.length>0){t.strokeStyle="#ff00ff",t.beginPath();let d;for(let p=this.externalClockHistory.length-1;p>=0;p--){const g=this.externalClockHistory[p],m=s-g.timestamp;if(m>at)break;const y=(g.bpm-c)/(f-c),x=o-m/at*o,v=(1-y)*n.height;d===void 0?t.moveTo(x,v):(t.lineTo(x,d),t.lineTo(x,v)),d=v}const u=this.externalClockHistory[this.externalClockHistory.length-1];if(u){const p=s-u.timestamp,g=o-p/at*o,b=(1-(u.bpm-c)/(f-c))*n.height;t.moveTo(g,b),t.lineTo(o,b)}t.stroke()}if(e>0){const u=(1-(e-c)/(f-c))*n.height;t.strokeStyle="red",t.beginPath(),t.moveTo(o,u),t.lineTo(n.width,u),t.stroke()}const h=this.externalClockSample?.scheduledBpmCorrection;if(this.externalClockSample&&this.externalClockSample.bpm>0){t.strokeStyle="orange",t.setLineDash([5,5]),t.beginPath();const d=(1-(this.externalClockSample.bpm-c)/(f-c))*n.height;if(t.moveTo(o,d),h){const p=h.time-s;if(p>0&&p<Xn){const g=o+p/Xn*o;t.lineTo(g,d);const b=(1-(h.bpm-c)/(f-c))*n.height;t.lineTo(g,b),t.lineTo(n.width,b),t.stroke(),t.strokeStyle="yellow",t.setLineDash([2,3]),t.beginPath(),t.moveTo(g,0),t.lineTo(g,n.height)}else t.lineTo(n.width,d)}else t.lineTo(n.width,d);t.stroke(),t.setLineDash([])}this.drawSyncMarkers(t,s)}drawPhaseGraph(e){const t=this.canvases.phaseGraphCanvas.getContext("2d"),n=t.canvas;t.clearRect(0,0,n.width,n.height);const o=n.width/2;t.strokeStyle="#444",t.beginPath(),t.moveTo(o,0),t.lineTo(o,n.height),t.stroke();const s=this.audioContext.currentTime;if(this.bestTrajPhaseHistory.length>0){t.strokeStyle="#1ed760",t.beginPath();let a=!0;for(let l=this.bestTrajPhaseHistory.length-1;l>=0;l--){const c=this.bestTrajPhaseHistory[l],f=s-c.timestamp;if(f>at)break;const d=(c.value/(2*Math.PI)%1+1)%1,u=o-f/at*o,p=(1-d)*n.height;a?(t.moveTo(u,p),a=!1):t.lineTo(u,p)}t.stroke()}if(this.externalClockHistory.length>0){t.strokeStyle="#ff00ff",t.beginPath();let a=0;for(let c=0;c<this.externalClockHistory.length;c++){if(s-this.externalClockHistory[c].timestamp<at){a=c>0?c-1:0;break}a=c}let l=!0;for(let c=0;c<o;c++){const f=(o-c)/o*at,h=s-f;for(;a+1<this.externalClockHistory.length&&this.externalClockHistory[a+1].timestamp<=h;)a++;const d=this.externalClockHistory[a],p=(h-d.timestamp)*d.bpm/60*2*Math.PI,b=(1-((d.phase+p)/(2*Math.PI)%1+1)%1)*n.height;l?(t.moveTo(c,b),l=!1):t.lineTo(c,b)}t.stroke()}const r=this.externalClockHistory.at(-1);if(r&&this.externalClockSample){t.strokeStyle="orange",t.setLineDash([5,5]),t.beginPath();const a=this.externalClockSample.scheduledBpmCorrection,l=a?.time,c=this.externalClockSample.bpm,f=r.phase+(s-r.timestamp)*r.bpm/60*2*Math.PI;let h=!0;for(let d=o;d<n.width;d++){const u=(d-o)/o*Xn,p=s+u;let g;if(l&&p>=l){const x=l-s,v=p-l;g=(x*c+v*a.bpm)/60*2*Math.PI}else g=u*c/60*2*Math.PI;const y=(1-((f+g)/(2*Math.PI)%1+1)%1)*n.height;if(h){const v=(1-(f/(2*Math.PI)%1+1)%1)*n.height;t.moveTo(o,v),h=!1}t.lineTo(d,y)}if(t.stroke(),t.setLineDash([]),l){const d=l-s;if(d>0&&d<Xn){const u=o+d/Xn*o;t.strokeStyle="yellow",t.setLineDash([2,3]),t.beginPath(),t.moveTo(u,0),t.lineTo(u,n.height),t.stroke(),t.setLineDash([])}}}if(e){t.strokeStyle="#1ed760",t.setLineDash([5,5]),t.beginPath();let a=!0;for(let l=o;l<n.width;l++){const c=(l-o)/o*Xn,f=s+c,u=(1-(bo(e,f)/(2*Math.PI)%1+1)%1)*n.height;if(a){const m=(1-(bo(e,s)/(2*Math.PI)%1+1)%1)*n.height;t.moveTo(o,m),a=!1}else t.lineTo(l,u)}t.stroke(),t.setLineDash([])}this.drawSyncMarkers(t,s)}drawSyncMarkers(e,t){const n=e.canvas,o=n.width/2;e.fillStyle="yellow";for(const s of this.externalClockHistory){if(s.type!=="nudge")continue;const r=t-s.timestamp;if(r>=0&&r<at){const a=o-r/at*o;e.beginPath(),e.arc(a,n.height-5,5,0,2*Math.PI),e.fill()}}e.fillStyle="cyan";for(const s of this.externalClockHistory){if(s.type!=="sync")continue;const r=t-s.timestamp;if(r>=0&&r<at){const a=o-r/at*o;e.beginPath(),e.arc(a,n.height-5,5,0,2*Math.PI),e.fill()}}}drawBarPhaseClock(e,t,n){const o=this.canvases.barClockCanvas.getContext("2d"),s=o.canvas,r=s.width/2,a=s.height/2,l=Math.min(r,a)*.9;o.clearRect(0,0,s.width,s.height);const c=n-this.trajectorySwitchTime;let f=0;c>=0&&c<1&&(f=1-c,f=Math.pow(f,4)),o.beginPath(),o.strokeStyle=`rgba(${20*(1-f)+255*f}, ${20*(1-f)+0}, ${20*(1-f)+0}, 1.0)`,o.lineWidth=2,o.arc(r,a,l,0,2*Math.PI),o.stroke();const h=Math.max(2,l*.1),d=l*.3,u=1.5,p=8;o.lineWidth=h;for(let y=0;y<4;y++){const x=n-this.barMarkPassTime[y];let v=0;x>=0&&x<u&&(v=(u-x)/u,v=Math.pow(v,p));const C=y/4*2*Math.PI-Math.PI/2,k=r+l*Math.cos(C),S=a+l*Math.sin(C),A=r+(l-d)*Math.cos(C),I=a+(l-d)*Math.sin(C);o.beginPath(),o.moveTo(k,S),o.lineTo(A,I),o.strokeStyle=`rgba(${20*(1-v)+0}, ${20*(1-v)+255*v}, ${20*(1-v)+0}, ${.5+v*.5})`,o.stroke()}o.lineWidth=2;const g=l*.9,m=t%4/4*2*Math.PI-Math.PI/2;o.beginPath(),o.strokeStyle="red",o.lineWidth=3,o.moveTo(r,a),o.lineTo(r+g*Math.cos(m),a+g*Math.sin(m)),o.stroke();const b=e%4/4*2*Math.PI-Math.PI/2;o.beginPath(),o.strokeStyle="#ff00ff",o.lineWidth=3,o.moveTo(r,a),o.lineTo(r+g*Math.cos(b),a+g*Math.sin(b)),o.stroke()}drawTrajectories(e,t,n,o){const s=e.canvas,r=s.width/2,a=s.height/2,l=Math.min(r,a)*.9;e.clearRect(0,0,s.width,s.height);const c=o-this.trajectorySwitchTime;let f=0;c>=0&&c<1&&(f=1-c,f=Math.pow(f,4)),e.beginPath(),e.strokeStyle=`rgba(${20*(1-f)+255*f}, ${20*(1-f)+0}, ${20*(1-f)+0}, 1.0)`,e.lineWidth=2,e.arc(r,a,l,0,2*Math.PI),e.stroke();const h=o-this.trajectoryMarkPassTime;let d=0;const u=1.5;h>=0&&h<u&&(d=(u-h)/u,d=Math.pow(d,8)),e.beginPath(),e.fillStyle=`rgba(${20*(1-d)+0}, ${20*(1-d)+255*d}, ${20*(1-d)+0}, ${.5+d*.5})`,e.arc(r,a-l,5+15*d,0,2*Math.PI),e.fill(),t.forEach(g=>{const m=n?g.id===n.id:!1,b=Math.min(1,.2+g.weight/10);e.strokeStyle=m?`rgba(255, 0, 0, ${b})`:`rgba(255, 255, 255, ${b*.1*Math.atan(g.weight)})`,e.lineWidth=m?3:2;const y=l*.9,x=bo(g,this.audioContext.currentTime)-Math.PI/2,v=r+y*Math.cos(x),C=a+y*Math.sin(x);e.beginPath(),e.moveTo(r,a),e.lineTo(v,C),e.stroke()})}drawRawPhaseClock(e,t,n,o){const s=this.canvases.phaseClockCanvas.getContext("2d"),r=s.canvas,a=r.width/2,l=r.height/2,c=Math.min(a,l)*.9;s.clearRect(0,0,r.width,r.height);const f=o-this.trajectorySwitchTime;let h=0;f>=0&&f<1&&(h=1-f,h=Math.pow(h,4)),s.beginPath(),s.strokeStyle=`rgba(${20*(1-h)+255*h}, ${20*(1-h)+0}, ${20*(1-h)+0}, 1.0)`,s.lineWidth=2,s.arc(a,l,c,0,2*Math.PI),s.stroke();const d=o-this.phaseMarkPassTime;let u=0;d>=0&&d<1&&(u=1-d),s.beginPath(),s.fillStyle=`rgba(29, 185, 84, ${.5+u*.5})`,s.arc(a,l-c,5,0,2*Math.PI),s.fill(),n.slice(-32).forEach((x,v)=>{if(v===n.length-1)return;const C=.1+v/n.length*.4;s.strokeStyle=`rgba(255, 255, 255, ${C})`,s.lineWidth=2;const k=c*.9,S=x-Math.PI/2,A=a+k*Math.cos(S),I=l+k*Math.sin(S);s.beginPath(),s.moveTo(a,l),s.lineTo(A,I),s.stroke()});const p=c*.9,g=e-Math.PI/2,m=a+p*Math.cos(g),b=l+p*Math.sin(g);s.beginPath(),s.strokeStyle="red",s.lineWidth=3,s.moveTo(a,l),s.lineTo(m,b),s.stroke();const y=t*c;s.beginPath(),s.strokeStyle="#1ed760",s.lineWidth=2,s.arc(a,l,y,0,2*Math.PI),s.stroke()}drawOdf(e,t){const n=e.canvas;if(e.clearRect(0,0,n.width,n.height),!t||t.length===0)return;const o=t.length,s=t[0].length,r=["#ff4500","#1ed760","#007bff"];for(let a=0;a<o;a++){e.beginPath(),e.strokeStyle=r[a%r.length],e.lineWidth=1;const l=t[a];let c=0;for(let h=0;h<s;h++)l[h]>c&&(c=l[h]);const f=n.width/(s>1?s-1:1);for(let h=0;h<s;h++){const d=l[h],u=c>0?d/c:0,p=h*f,g=(1-u)*n.height;h===0?e.moveTo(p,g):e.lineTo(p,g)}e.stroke()}if(this.latestBpm>0){const a=60/this.latestBpm,l=this.audioContext.currentTime,c=-this.latestPhase/(2*Math.PI)*a,f=l+c;e.strokeStyle="rgba(255, 255, 255, 0.7)",e.lineWidth=1;const h=l-Jc;let d=f;for(;d>h;)d-=a;for(d+=a;d<l;){const u=l-d,p=n.width-u/Jc*n.width;p>=0&&p<=n.width&&(e.beginPath(),e.moveTo(p,0),e.lineTo(p,n.height),e.stroke()),d+=a}}}drawSpectrogram(e,t){const n=e.canvas;if(e.clearRect(0,0,n.width,n.height),!t||t.length===0)return;const o=t.length,s=t[0].length,r=e.createImageData(s,o),a=r.data;let l=1/0,c=-1/0;for(let u=0;u<o;u++)for(let p=0;p<s;p++){const g=t[u][p];g<l&&(l=g),g>c&&(c=g)}const f=c-l;for(let u=0;u<o;u++)for(let p=0;p<s;p++){const g=t[u][p],m=f>0?(g-l)/f:0,b=Math.floor(m*255),y=((o-1-u)*s+p)*4;a[y]=b,a[y+1]=b,a[y+2]=b,a[y+3]=255}const h=document.createElement("canvas");h.width=s,h.height=o,h.getContext("2d").putImageData(r,0,0),e.imageSmoothingEnabled=!1,e.drawImage(h,0,0,n.width,n.height)}drawWaveform(e,t,n="#1db954"){const o=e.canvas,{width:s,height:r}=o;e.clearRect(0,0,s,r),e.beginPath(),e.strokeStyle=n,e.lineWidth=1;const a=t.length,l=Math.floor(a/s),c=r/2;for(let f=0;f<s;f++){const h=f*l,d=h+l;let u=0,p=0;for(let b=h;b<d;b++){const y=t[b];y<u&&(u=y),y>p&&(p=y)}const g=(1-u*.5)*c,m=(1-p*.5)*c;e.moveTo(f,g),e.lineTo(f,m)}e.stroke()}}var _w=Object.defineProperty,$w=Object.getOwnPropertyDescriptor,Rs=(i,e,t,n)=>{for(var o=n>1?void 0:n?$w(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&_w(e,t,o),o};let wi=class extends Sn{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1}select(i){this.disabled||this.value!==i&&(this.value=i,this.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0,composed:!0})))}render(){return M`
      ${this.options.map(i=>M`
        <div
          class="option ${this.value===i.value?"active":""} ${this.disabled?"disabled":""}"
          @click=${()=>this.select(i.value)}
        >
          ${i.label}
        </div>
      `)}
    `}};wi.styles=pe`
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
  `;Rs([H({type:String})],wi.prototype,"value",2);Rs([H({type:Array})],wi.prototype,"options",2);Rs([H({type:Boolean})],wi.prototype,"disabled",2);wi=Rs([ke("ui-option-bar")],wi);var Fw=Object.defineProperty,Vw=Object.getOwnPropertyDescriptor,Nt=(i,e,t,n)=>{for(var o=n>1?void 0:n?Vw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Fw(e,t,o),o};let ut=class extends it{constructor(){super(...arguments),this.isDeviceListOpen=!1,this.resizeObserver=null,this.animationFrameId=null,this.loopDisposer=null,this.resyncDisposer=null}async firstUpdated(){this.visualizer=new Bw({mainWaveformCanvas:this.mainWaveformCanvas,odfCanvas:this.odfCanvas,specCanvas:this.specCanvas,phaseClockCanvas:this.phaseClockCanvas,barClockCanvas:this.barClockCanvas,trajectoryClockCanvas:this.trajectoryClockCanvas,bpmGraphCanvas:this.bpmGraphCanvas,phaseGraphCanvas:this.phaseGraphCanvas}),this.setupResizeObserver(),xe.beatSyncManager.isMicActive&&this.animationFrameId===null&&this.animationLoop()}setupResizeObserver(){this.resizeObserver=new ResizeObserver(e=>{for(const t of e){const n=t.target,{width:o}=t.contentRect,s=window.devicePixelRatio||1,r=o,a=n.clientHeight;n.width!==Math.round(r*s)&&(n.width=Math.round(r*s)),n.height!==Math.round(a*s)&&(n.height=Math.round(a*s))}}),[this.mainWaveformCanvas,this.odfCanvas,this.specCanvas,this.bpmGraphCanvas,this.phaseGraphCanvas].forEach(e=>{e&&this.resizeObserver?.observe(e)})}connectedCallback(){super.connectedCallback(),xe.beatSyncManager.setDebugDataEnabled(!0),this.loopDisposer=qt(()=>xe.beatSyncManager.isMicActive,i=>{i&&this.animationFrameId===null&&this.visualizer&&this.animationLoop()}),this.resyncDisposer=qt(()=>xe.beatSyncManager.lastResyncTime,()=>{if(this.resyncBtn){this.resyncBtn.classList.remove("flashing"),this.resyncBtn.offsetWidth,this.resyncBtn.classList.add("flashing");const i=()=>{this.resyncBtn.classList.remove("flashing"),this.resyncBtn.removeEventListener("animationend",i)};this.resyncBtn.addEventListener("animationend",i)}})}disconnectedCallback(){super.disconnectedCallback(),xe.beatSyncManager.setDebugDataEnabled(!1),this.loopDisposer&&(this.loopDisposer(),this.loopDisposer=null),this.resyncDisposer&&(this.resyncDisposer(),this.resyncDisposer=null),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.resizeObserver?.disconnect()}animationLoop(){const i=xe.beatSyncManager;if(!i.isMicActive){this.animationFrameId=null;return}!this.visualizer.hasAudioContext&&i.audioContextInstance&&this.visualizer.setAudioContext(i.audioContextInstance),i.lastInferenceUpdate&&this.visualizer.updateInference(i.lastInferenceUpdate),i.lastStabilizerUpdate&&this.visualizer.updateStabilizer(i.lastStabilizerUpdate),i.lastExternalClockUpdate&&this.visualizer.updateExternalClock(i.lastExternalClockUpdate),i.lastExternalClockEvent&&this.visualizer.addExternalClockHistory(i.lastExternalClockEvent),i.rollingWaveformBuffer&&this.visualizer.updateRollingWaveform(i.rollingWaveformBuffer),this.visualizer.updateVisualizations(i.bestBpm,i.overallConfidence,i.bestTrajectoryWeight),this.animationFrameId=requestAnimationFrame(()=>this.animationLoop())}renderMidiMapping(i){const e=i.midiMapping;if(!e)return null;let t="";return e.type==="note"?t=`Note ${e.index} (Ch${e.channel})`:t=`CC ${e.index} (Ch${e.channel})`,M`
      <span
        class="midi-mapping-label chip"
        @dblclick=${()=>i.clearMidiMapping()}
        title="Double click to clear"
      >
        ${t}
      </span>
    `}render(){const i=xe.beatSyncManager,{audioDevices:e,selectedDeviceId:t,isMicActive:n,systemEnabled:o,externalBpm:s,bestBpm:r,bestBarPhase:a,predictedBpm:l,overallConfidence:c,bpmVariance:f,bestTrajectoryWeight:h}=i,d=e.find(p=>p.deviceId===t),u=d?d.label||`Microphone ${d.deviceId.slice(0,5)}...`:"Select Input";return M`
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
        </div>
        <div>
             <!-- Resolume Toggle -->
             <ui-option-bar
                .value=${i.localControllerInstance.observableState.localSettings.beatSyncResolumeControlEnabled?"On":"Off"}
                .options=${[{label:"Resolume Off",value:"Off"},{label:"Resolume On",value:"On"}]}
                @change=${p=>i.setResolumeControlEnabled(p.detail.value==="On")}
            ></ui-option-bar>
        </div>

        <!-- Inline Device List -->
        ${this.isDeviceListOpen?M`
            <div class="inline-device-list">
                ${e.map(p=>M`
                    <div
                        class="chip ${t===p.deviceId?"selected":""}"
                        @click=${()=>{i.startMic(p.deviceId),this.isDeviceListOpen=!1}}
                    >
                        ${p.label||`Microphone ${p.deviceId.slice(0,5)}...`}
                    </div>
                `)}
                ${e.length===0?M`<div>No Inputs</div>`:""}
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
                      class="midi-learn-btn ${It({pulsing:i.isMidiMappingActive})}"
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
                <div><b>SEND BPM:</b> ${s.toFixed(1)}</div>
                <div><b>Best BPM:</b> ${r.toFixed(1)}</div>
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
            <label class="graph-label middle right">${s.toFixed(1)}</label>
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
    `}};ut.styles=[Et,qp,pe`
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
        font-size: var(--font-size-xs);
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
    `];Nt([Ot("#mainWaveform")],ut.prototype,"mainWaveformCanvas",2);Nt([Ot("#odfGraph")],ut.prototype,"odfCanvas",2);Nt([Ot("#specGraph")],ut.prototype,"specCanvas",2);Nt([Ot("#phaseClock")],ut.prototype,"phaseClockCanvas",2);Nt([Ot("#barClock")],ut.prototype,"barClockCanvas",2);Nt([Ot("#trajectoryClock")],ut.prototype,"trajectoryClockCanvas",2);Nt([Ot("#bpmGraph")],ut.prototype,"bpmGraphCanvas",2);Nt([Ot("#phaseGraph")],ut.prototype,"phaseGraphCanvas",2);Nt([Ot(".resync-btn")],ut.prototype,"resyncBtn",2);Nt([Xe()],ut.prototype,"isDeviceListOpen",2);ut=Nt([ke("beat-sync-view")],ut);var zw=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,Tu=(i,e,t,n)=>{for(var o=n>1?void 0:n?Hw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&zw(e,t,o),o};let vs=class extends it{constructor(){super(...arguments),this.activeTab="workspace"}connectedCallback(){super.connectedCallback(),this.activeTab=P.observableState.localSettings.activeTab}render(){return M`
      <app-sidebar
        .activeTab=${P.observableState.localSettings.activeTab}
        @switch-tab=${this.handleSwitchTab}
      ></app-sidebar>

      <div class="panels">
        ${P.observableState.localSettings.activeTab?M`
          <div class="sidebar-panel">
            ${this.renderActivePanel()}
          </div>
        `:""}

        <div class="editor-container">
          <graph-editor></graph-editor>
        </div>
      </div>
    `}renderActivePanel(){switch(P.observableState.localSettings.activeTab){case"workspace":return M`<workspace-panel></workspace-panel>`;case"io":return M`<io-tab></io-tab>`;case"debug":return M`<debug-tab></debug-tab>`;case"beatsync":return M`<beat-sync-view></beat-sync-view>`;default:return null}}handleSwitchTab(i){const e=i.detail.tab;P.observableState.localSettings.activeTab===e?P.setActiveTab(null):P.setActiveTab(e)}};vs.styles=pe`
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
  `;Tu([Xe()],vs.prototype,"activeTab",2);vs=Tu([ke("workspace-layout")],vs);function qw(){const i=[];i.push("// Auto-generated Standard Library Definitions"),i.push("// Do not edit manually"),i.push("");const e=[],t=[],n=[],o=[];for(const[s,r]of zu.entries())if(s.startsWith("Math.")){const a=r.match(/Math\.(\w+)(\(.*\): \w+)/);a&&e.push(`    ${a[1]}${a[2]};`)}else if(s.startsWith("Array.prototype.")||s.startsWith("Array.")&&r.includes("Array<T>")){const a=r.match(/Array<T>\.(\w+)(<.*>)?(\(.*\): .+)/);a&&t.push(`    ${a[1]}${a[2]||""}${a[3]};`)}else if(s.startsWith("Array.")){const a=r.match(/Array\.(\w+)(\(.*\): .+)/);a&&n.push(`    static ${a[1]}${a[2]};`)}else o.push(`declare ${r};`);return e.length>0&&(i.push("declare const Math: {"),i.push(...e),i.push("    PI: number;"),i.push("    E: number;"),i.push("};"),i.push("")),t.length>0&&(i.push("interface Array<T> {"),i.push("    length: number;"),i.push(...t),i.push("}"),i.push("")),n.length>0&&(i.push("declare var Array: {"),i.push("    new <T>(...len: any[]): Array<T>;"),i.push("    (len: number): any[];"),i.push(...n),i.push("};"),i.push("")),i.push(...o),i.join(`
`)}let Qc=!1;function Ww(i){if(Qc)return;Qc=!0;const e=i.typescript||i.languages.typescript;if(!e){console.warn("Monaco TypeScript language service not found.");return}const t=e.typescriptDefaults;t.setCompilerOptions({target:e.ScriptTarget?.ES2015||2,allowNonTsExtensions:!0,moduleResolution:e.ModuleResolutionKind?.NodeJs||2,module:e.ModuleKind?.CommonJS||1,noEmit:!0,typeRoots:[],noLib:!0});const n=qw();t.addExtraLib(n,"ts:filename/stdlib.d.ts")}const jw="/assets/editor.main-V89llD7x.css";function Uw(i){return new Worker("/assets/editor.worker-BDzEcYpU.js",{type:"module",name:i?.name})}function Gw(i){return new Worker("/assets/json.worker-CbPvaBPT.js",{type:"module",name:i?.name})}function Yw(i){return new Worker("/assets/css.worker-BL6kSyU1.js",{type:"module",name:i?.name})}function Kw(i){return new Worker("/assets/html.worker-BJUDQ4P_.js",{type:"module",name:i?.name})}function Xw(i){return new Worker("/assets/ts.worker-BU8T4Yx4.js",{type:"module",name:i?.name})}var Jw=Object.defineProperty,Qw=Object.getOwnPropertyDescriptor,Bs=(i,e,t,n)=>{for(var o=n>1?void 0:n?Qw(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Jw(e,t,o),o};self.MonacoEnvironment={getWorker:function(i,e){return e==="json"?new Gw:e==="css"||e==="scss"||e==="less"?new Yw:e==="html"||e==="handlebars"||e==="razor"?new Kw:e==="typescript"||e==="javascript"?new Xw:new Uw}};let xi=class extends Sn{constructor(){super(...arguments),this.value="",this.language="typescript",this.isLoading=!0,this.editor=null,this.monacoModule=null,this.container=null}render(){return M`
      <!-- Inject Monaco Styles into Shadow DOM -->
      <link rel="stylesheet" href="${jw}">
      <div class="editor-container"></div>
      ${this.isLoading?M`<div class="loading">Loading Editor...</div>`:""}
    `}async firstUpdated(){if(this.container=this.shadowRoot.querySelector(".editor-container"),this.container)try{if(this.monacoModule=await Me(()=>import("./editor.main-D9a-OtFd.js").then(i=>i.b),__vite__mapDeps([11,12])),Ww(this.monacoModule),this.isLoading=!1,!this.isConnected)return;this.editor=this.monacoModule.editor.create(this.container,{value:this.value,language:this.language,theme:"vs-dark",minimap:{enabled:!1},automaticLayout:!0,scrollBeyondLastLine:!0,fixedOverflowWidgets:!0,glyphMargin:!1,folding:!0,lineNumbersMinChars:3,lineDecorationsWidth:0,renderLineHighlight:"none",scrollbar:{useShadows:!1,vertical:"auto",horizontal:"auto",verticalScrollbarSize:10,horizontalScrollbarSize:10},overviewRulerLanes:0,hideCursorInOverviewRuler:!0}),setTimeout(()=>{this.editor?.layout()},100),this.editor.onDidChangeModelContent(()=>{const i=this.editor?.getValue()||"";this.value=i,this.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0,composed:!0}))})}catch(i){console.error("Failed to load Monaco Editor:",i),this.isLoading=!1}}updated(i){i.has("value")&&this.editor&&this.editor.getValue()!==this.value&&this.editor.setValue(this.value)}disconnectedCallback(){super.disconnectedCallback(),this.editor?.dispose()}};xi.styles=pe`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 200px;
      position: relative;
      outline: none; /* Prevent focus ring on the wrapper itself */
    }
    .editor-container {
      width: 100%;
      height: 100%;
      min-height: inherit;
      outline: none;
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
      pointer-events: none;
    }
  `;Bs([H({type:String})],xi.prototype,"value",2);Bs([H({type:String})],xi.prototype,"language",2);Bs([Xe()],xi.prototype,"isLoading",2);xi=Bs([ke("monaco-editor-wrapper")],xi);var Zw=Object.defineProperty,e1=Object.getOwnPropertyDescriptor,Du=(i,e,t,n)=>{for(var o=n>1?void 0:n?e1(e,t):e,s=i.length-1,r;s>=0;s--)(r=i[s])&&(o=(n?r(e,t,o):r(o))||o);return n&&o&&Zw(e,t,o),o};let ws=class extends it{constructor(){super(...arguments),this.isReady=!1}async connectedCallback(){super.connectedCallback(),await P.settingsLoaded,this.isReady=!0}render(){return this.isReady?M`
      <workspace-layout></workspace-layout>
    `:null}};ws.styles=[Et,pe`
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
`];Du([Xe()],ws.prototype,"isReady",2);ws=Du([ke("nano-repatch")],ws);export{Ft as P,Kt as R,Me as _,V as a,Q as d,Ot as i,P as l,xe as r};
//# sourceMappingURL=main-BvIeRv4f.js.map
