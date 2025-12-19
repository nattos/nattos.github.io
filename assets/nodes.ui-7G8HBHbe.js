import{w as W,i as H,n as R,c as I,o as D,a as z,M as A,m as O,P as C,x as S,b as x,e as X,d as _,r as V,f as k,t as b}from"./index-e9XZ_EZ1.js";var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,w=(e,a,r,i)=>{for(var o=i>1?void 0:i?B(a,r):a,n=e.length-1,t;n>=0;n--)(t=e[n])&&(o=(i?t(a,r,o):t(o))||o);return i&&o&&T(a,r,o),o};let $=class extends A{constructor(){super(),this.tick=0,this.history=[],this.smoothedRange=1,this.smoothedAnchor=0,this.isSigned=!1,this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1,O(this)}updated(e){if((e.has("value")||e.has("tick"))&&this.value!==void 0){this.history.push(this.value);const a=this.config?.historySize||100;this.history.length>a&&this.history.shift(),this.config?.mode==="scope"&&this.config.autoRange&&this.updateAdaptiveRange(),this.requestUpdate()}}updateAdaptiveRange(){if(this.history.length===0)return;const e=this.history;let a=e[0],r=e[0],i=!1;for(const c of e)c<a&&(a=c),c>r&&(r=c),c<0&&(i=!0);i&&(this.isSigned=!0);const o=1.2;let n=1,t=0;if(this.isSigned){const c=(a+r)/2,s=r-a,h=Math.max(s*o,.001),f=Math.pow(2,Math.ceil(Math.log2(h))),d=f,u=Math.round(c/d)*d;n=f,t=u;const v=t-n/2,m=t+n/2;(a<v||r>m)&&(n*=2)}else{const c=Math.max(r-a,.001);let s=Math.pow(2,Math.ceil(Math.log2(c*o))),h=Math.floor(a/s)*s;h+s<r&&(s*=2,h=Math.floor(a/s)*s),n=s,t=h}n>this.smoothedRange?this.smoothedRange=n:(this.smoothedRange=this.smoothedRange*.95+n*.05,Math.abs(this.smoothedRange-n)<.01&&(this.smoothedRange=n));const p=this.getDisplayAnchor(),g=this.getDisplayRange();let l=!1;if(this.isSigned){const s=p-g*.9/2,h=p+g*.9/2;a>=s&&r<=h&&(l=!0)}else{const c=p,s=p+g*.9;a>=c&&r<=s&&(l=!0)}l?this.smoothedAnchor=this.smoothedAnchor*.99+t*.01:(this.smoothedAnchor=this.smoothedAnchor*.8+t*.2,Math.abs(this.smoothedAnchor-t)<.01&&(this.smoothedAnchor=t))}getDisplayRange(){return Math.pow(2,Math.ceil(Math.log2(this.smoothedRange)))}getDisplayAnchor(){const e=this.getDisplayRange();return Math.round(this.smoothedAnchor/e)*e}get totalWeight(){return this.config?.segments?.reduce((e,a)=>e+a.weight,0)||1}get segmentLayout(){if(!this.config||!this.config.segments)return[];const e=220;let a=0;const r=this.totalWeight;return this.config.segments.map((i,o)=>{const n=i.weight/r*e,t={segment:i,index:o,startX:a,endX:a+n,width:n};return a+=n,t})}get pathData(){if(!this.config)return"";if(this.config.mode==="scope"){const g=this.history,l=220,c=96,s=this.config.historySize||100,h=this.config.autoRange?this.getDisplayRange():(this.config.range?.[1]??1)-(this.config.range?.[0]??0),f=this.config.autoRange?this.getDisplayAnchor():this.config.range?.[0]??0;let d,u;this.config.autoRange?this.isSigned?(d=f-h/2,u=f+h/2):(d=f,u=f+h):(d=this.config.range?.[0]??0,u=this.config.range?.[1]??1);const v=y=>{const M=(y-d)/(u-d);return c-Math.max(0,Math.min(1,M))*c},m=g.map((y,M)=>{const L=M/(s-1)*l,Y=v(y);return`${L},${Y}`});return m.length>0?`M ${m.join(" L ")}`:""}const{domain:e,range:a}=this.config;if(!e||!a)return"";const[r,i]=a,o=96,n=(g,l,c)=>(g-l)/(c-l),t=[],p=20;return this.segmentLayout.forEach(g=>{const{segment:l,startX:c,endX:s}=g;let h=1;l.curve.type==="exponential"&&(h=Math.pow(10,-(l.curve.value??0)));const f=l.curve.type==="step"?l.curve.value??2:1;if(l.curve.type==="points"&&l.curve.points){l.curve.points.forEach(d=>{const u=d.x,v=r+d.y*(i-r),m=c+u*(s-c),y=o-n(v,r,i)*o;t.push([m,y])});return}for(let d=0;d<=p;d++){const u=d/p;let v=0;switch(l.curve.type){case"exponential":v=Math.pow(u,h);break;case"linear":v=u;break;case"step":f<=1?v=0:v=Math.floor(u*f)/(f-1),u>=.999&&(v=1);break;case"sin":v=-(Math.cos(Math.PI*u)-1)/2;break;case"quad":v=u*u;break;default:v=u}const m=r+v*(i-r),y=c+u*(s-c),M=o-n(m,r,i)*o;t.push([y,M])}}),`M ${t.map(g=>g.join(",")).join(" L ")}`}handlePointerDown(e){if(!this.config?.interactive)return;const a=this.getBoundingClientRect(),r=e.clientX-a.left,i=a.width,o=a.height,n=this.segmentLayout,t=10;let p=-1;for(let g=0;g<n.length-1;g++){const l=n[g].endX;if(Math.abs(r-l)<t){p=g;break}}if(p!==-1&&this.config.onSegmentResize){const g=n[p].width;this.config.onInteractionStart&&this.config.onInteractionStart(),new C(e,this,{move:(l,c)=>{const s=g+c[0],h=this.totalWeight/i,f=s*h;f>0&&this.config?.onSegmentResize&&this.config.onSegmentResize(p,f)},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}});return}if(this.config.onSegmentChange){const g=n.find(l=>r>=l.startX&&r<=l.endX);g&&g.segment.curve.type==="exponential"&&(this.config.onInteractionStart&&this.config.onInteractionStart(),new C(e,this,{move:(l,c)=>{const s=this.getBoundingClientRect(),h=l.clientY-s.top,u=1-2*(Math.max(0,Math.min(o,h))/o);this.config?.onSegmentChange&&this.config.onSegmentChange(g.segment.id,"value",u)},complete:()=>{this.config?.onInteractionEnd&&this.config.onInteractionEnd()}}))}}evaluateCurve(e){if(!this.config||!this.config.segments)return 0;const{range:a,segments:r}=this.config,[i,o]=a||[0,1],n=this.totalWeight,t=e*n;let p=0,g=r[r.length-1],l=0;for(const u of r){if(t>=p&&t<=p+u.weight){g=u,l=p;break}p+=u.weight}const c=g.weight,s=(t-l)/c;let h=0;const f=g.curve,d=f.type==="step"?f.value??2:1;switch(f.type){case"exponential":const u=Math.pow(10,-(f.value??0));h=Math.pow(s,u);break;case"linear":h=s;break;case"step":d<=1?h=0:h=Math.floor(s*d)/(d-1),s>=.999&&(h=1);break;case"sin":h=-(Math.cos(Math.PI*s)-1)/2;break;case"quad":h=s*s;break;case"points":if(f.points&&f.points.length>0){const v=f.points;if(s<=v[0].x)h=v[0].y;else if(s>=v[v.length-1].x)h=v[v.length-1].y;else for(let m=0;m<v.length-1;m++){const y=v[m],M=v[m+1];if(s>=y.x&&s<=M.x){const L=(s-y.x)/(M.x-y.x);h=y.y+L*(M.y-y.y);break}}}else h=s;break;default:h=s}return i+h*(o-i)}handlePointerMove(e){const a=this.getBoundingClientRect(),r=e.clientX-a.left,i=this.segmentLayout;this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1;const o=10;for(let t=0;t<i.length-1;t++){const p=i[t].endX;if(Math.abs(r-p)<o){this.hoveredSplitIndex=t;return}}const n=i.findIndex(t=>r>=t.startX&&r<=t.endX);n!==-1&&(this.hoveredSegmentIndex=n)}handlePointerLeave(){this.hoveredSegmentIndex=-1,this.hoveredSplitIndex=-1}render(){if(!this.config)return S``;const e=96;if(this.config.mode==="scope"){const i=this.config.autoRange?this.getDisplayRange():(this.config.range?.[1]??1)-(this.config.range?.[0]??0),o=this.config.autoRange?this.getDisplayAnchor():this.config.range?.[0]??0;let n,t;this.config.autoRange?this.isSigned?(n=o-i/2,t=o+i/2):(n=o,t=o+i):(n=this.config.range?.[0]??0,t=this.config.range?.[1]??1);const p=c=>{const s=(c-n)/(t-n);return e-Math.max(0,Math.min(1,s))*e},g=p(0),l=[];if(this.config.showGrid){const c=Math.max(Math.abs(n),Math.abs(t)),s=Math.ceil(Math.log2(c)),h=Math.floor(Math.log2(i))-4;for(let f=h;f<=s;f++){const d=Math.pow(2,f);d<=t&&d>=n&&l.push(p(d)),-d<=t&&-d>=n&&l.push(p(-d))}}return S`
          <svg viewBox="0 0 220 96" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid-x" width="24" height="96" patternUnits="userSpaceOnUse">
                        <path d="M 0 0 L 0 96" fill="none" class="grid-pattern" />
                    </pattern>
                    <pattern id="hash-pattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--accent-color)" stroke-width="4" opacity="0.1" />
                    </pattern>
                    ${this.config?.cursor!==void 0?x`
                        <clipPath id="clip-left">
                            <rect x="0" y="0" width="${this.config.cursor*220}" height="96" />
                        </clipPath>
                        <clipPath id="clip-right">
                            <rect x="${this.config.cursor*220}" y="0" width="${220-this.config.cursor*220}" height="96" />
                        </clipPath>
                    `:""}
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-x)" />
                ${l.map(c=>x`<line class="grid" x1="0" y1="${c}" x2="220" y2="${c}" />`)}
                <line class="zero-line" x1="0" y1="${g}" x2="220" y2="${g}" />

                <!-- Curve Fills -->
                ${this.config?.cursor!==void 0?x`
                    <!-- Left (Solid) -->
                    <path d="${this.pathData} L 220 ${e} L 0 ${e} Z"
                          fill="var(--accent-color)" fill-opacity="0.2"
                          clip-path="url(#clip-left)" />

                    <!-- Right (Hashed) -->
                    <path d="${this.pathData} L 220 ${e} L 0 ${e} Z"
                          fill="url(#hash-pattern)"
                          clip-path="url(#clip-right)" />
                `:x`
                    <!-- Default Fill if no cursor -->
                    <path d="${this.pathData} L 220 ${e} L 0 ${e} Z"
                          fill="var(--accent-color)" fill-opacity="0.1" />
                `}

                <!-- Curve Stroke -->
                <path class="curve" d="${this.pathData}" fill="none" stroke="#00ff88" stroke-width="2" vector-effect="non-scaling-stroke" />

                <!-- Parameter Handles -->
                ${this.config?.segments?.map((c,s)=>{if(!this.config?.interactive)return"";const h=this.segmentLayout[s];if(!h)return"";const{startX:f,endX:d}=h;let u=0,v=!1;return c.curve.type==="exponential"&&(u=(1-(c.curve.value??0))/2*e,v=!0),v?x`
                        <g class="parameter-control">
                            <!-- Vertical Sheer Bar -->
                            <rect class="parameter-bg" x="${f}" y="0" width="${d-f}" height="${e}" />

                            <!-- Horizontal Solid Line -->
                            <line class="parameter-line" x1="${f}" y1="${u}" x2="${d}" y2="${u}" />

                            <!-- Handle Circle -->
                            <circle class="parameter-handle" cx="${f+(d-f)/2}" cy="${u}" r="4" />
                        </g>
                    `:""})}
          </svg>
        `}const a=this.segmentLayout,r=10;return S`
            <svg viewBox="0 0 220 96" preserveAspectRatio="none"
                @pointerdown=${i=>this.handlePointerDown(i)}
                @pointermove=${i=>this.handlePointerMove(i)}
                @pointerleave=${()=>this.handlePointerLeave()}
            >
                <defs>
                    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" class="grid-pattern" />
                    </pattern>
                    <pattern id="hash-pattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="var(--accent-color)" stroke-width="4" opacity="0.1" />
                    </pattern>
                    ${this.config?.cursor!==void 0?x`
                        <clipPath id="clip-left">
                            <rect x="0" y="0" width="${this.config.cursor*220}" height="96" />
                        </clipPath>
                        <clipPath id="clip-right">
                            <rect x="${this.config.cursor*220}" y="0" width="${220-this.config.cursor*220}" height="96" />
                        </clipPath>
                    `:""}
                    <linearGradient id="curveGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="var(--accent-color)" stop-opacity="0.2" />
                        <stop offset="100%" stop-color="var(--accent-color)" stop-opacity="0.0" />
                    </linearGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#grid)" />

                <!-- Axis Lines -->
                <line class="axis-line" x1="0" y1="${e/2}" x2="220" y2="${e/2}" />

                <!-- Segments -->
                ${a.map(i=>{const{segment:o,startX:n,endX:t}=i,p=i.index===this.hoveredSegmentIndex,g=i.index===this.hoveredSplitIndex;let l=0,c=!1;return o.curve.type==="exponential"&&(l=(1-(o.curve.value??0))/2*e,c=!0),x`
                        <!-- Hover Highlight -->
                        ${p&&this.config?.interactive?x`
                            <rect x="${n}" y="0" width="${t-n}" height="${e}"
                                fill="var(--accent-color)" fill-opacity="0.05" pointer-events="none" />
                        `:""}

                        <!-- Segment Separator (if not last) -->
                        ${i.index<a.length-1?x`
                            <line class="split-handle" x1="${t}" y1="0" x2="${t}" y2="${e}"
                                style="${g?"opacity: 1; stroke-width: 2; stroke: var(--accent-color);":""}" />
                            <!-- Visual target matches resizeThreshold * 2 -->
                            <rect class="split-handle-target" x="${t-r}" y="0" width="${r*2}" height="${e}" />
                        `:""}

                        <!-- Parameter Handle -->
                        ${this.config?.interactive&&c?x`
                            <g class="parameter-control">
                                <!-- Vertical Sheer Bar (Fill from bottom) -->
                                <rect class="parameter-bg" x="${n}" y="${l}" width="${t-n}" height="${e-l}" />

                                <!-- Horizontal Solid Line -->
                                <line class="parameter-line" x1="${n}" y1="${l}" x2="${t}" y2="${l}" />
                            </g>
                        `:""}
                    `})}

                <!-- Curve Fills -->
                ${this.config?.cursor!==void 0?x`
                    <!-- Left (Solid) -->
                    <path d="${this.pathData} L 220 ${e} L 0 ${e} Z"
                          fill="var(--accent-color)" fill-opacity="0.2"
                          clip-path="url(#clip-left)" />

                    <!-- Right (Hashed) -->
                    <path d="${this.pathData} L 220 ${e} L 0 ${e} Z"
                          fill="url(#hash-pattern)"
                          clip-path="url(#clip-right)" />
                `:x`
                    <!-- Default Fill if no cursor -->
                    <path d="${this.pathData} L 220 ${e} L 0 ${e} Z"
                          fill="var(--accent-color)" fill-opacity="0.1" />
                `}

                <!-- Curve Stroke -->
                <path class="curve" d="${this.pathData}" fill="none" />

                <!-- Cursor -->
                ${this.config?.cursor!==void 0?(()=>{const i=this.config.cursor*220,o=this.evaluateCurve(this.config.cursor),[n,t]=this.config.range||[0,1],p=(o-n)/(t-n),g=e-Math.max(0,Math.min(1,p))*e;return x`
                        <!-- Vertical Line -->
                        <line class="cursor-line"
                            x1="${i}" y1="0"
                            x2="${i}" y2="${e}"
                            stroke="var(--accent-color)" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"
                            style="pointer-events: none;"
                        />
                        <!-- Intersection Point -->
                        <circle cx="${i}" cy="${g}" r="3" fill="var(--accent-color)" stroke="var(--node-bg)" stroke-width="1" style="pointer-events: none;" />
                    `})():""}
            </svg>
        `}};$.styles=[W,H`
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
        transition: opacity 0.2s;
      }
      .parameter-control:hover .parameter-bg {
        opacity: 0.15;
      }
      .parameter-line {
        stroke: var(--accent-color, #ff4500);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        opacity: 0.6;
        transition: all 0.2s;
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
    `];w([R({attribute:!1})],$.prototype,"config",2);w([R({type:Number})],$.prototype,"value",2);w([R({type:Number})],$.prototype,"tick",2);w([I],$.prototype,"totalWeight",1);w([I],$.prototype,"segmentLayout",1);w([I],$.prototype,"pathData",1);w([D],$.prototype,"hoveredSegmentIndex",2);w([D],$.prototype,"hoveredSplitIndex",2);w([z],$.prototype,"handlePointerMove",1);w([z],$.prototype,"handlePointerLeave",1);$=w([X("graph-widget")],$);var U=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,E=(e,a,r,i)=>{for(var o=i>1?void 0:i?Z(a,r):a,n=e.length-1,t;n>=0;n--)(t=e[n])&&(o=(i?t(a,r,o):t(o))||o);return i&&o&&U(a,r,o),o};let P=class extends A{constructor(){super(...arguments),this.longEdit=null}render(){if(!this.node)return S``;const e=_.getNodeType(this.node.config.typeId);let a={domain:[0,1],range:[0,1],segments:[{id:"s1",weight:1,curve:{type:"exponential",value:0}}]};if(e&&e.inputs){const t=e.inputs.find(p=>p.name==="easing");t&&t.defaultValue&&(a=t.defaultValue)}const r=this.node.config.values?.easing??a,i={domain:r.domain,range:r.range,segments:r.segments,interactive:!0,onInteractionStart:()=>{this.longEdit=k.beginLongEdit({apply:()=>{},cancel:()=>{this.longEdit=null}})},onInteractionEnd:()=>{this.longEdit&&(this.longEdit.accept(),this.longEdit=null)},onSegmentChange:(t,p,g)=>{const l=c=>{const s=b(r),h=b(this.node.config),f=(s.segments||[]).map(d=>d.id===t&&p==="value"?{...d,curve:{...d.curve,value:g}}:d);c.setNodeConfig(this.node.id,{values:{...h.values,easing:{...s,segments:f}}})};this.longEdit?this.longEdit.applyAgain(l):l(k)},onSegmentResize:(t,p)=>{const g=l=>{const c=b(r),s=b(this.node.config),h=[...c.segments||[]];h[t]&&(h[t]={...h[t],weight:p},l.setNodeConfig(this.node.id,{values:{...s.values,easing:{...c,segments:h}}}))};this.longEdit?this.longEdit.applyAgain(g):g(k)}},o=V.inputs.get(this.node.id);let n;if(o&&(o.fields&&o.fields.value!==void 0?n=o.fields.value:o.untagged&&o.untagged.length>0&&(n=o.untagged[0])),n!==void 0){const[t,p]=i.domain||[0,1];n=(n-t)/(p-t),n=Math.max(0,Math.min(1,n))}return i.cursor=n,S`
      <graph-widget style="pointer-events: auto;" .config=${i}></graph-widget>
    `}};E([R({attribute:!1})],P.prototype,"node",2);P=E([X("curve-inspector")],P);const j=(e,a)=>S`<curve-inspector .node=${e}></curve-inspector>`,N=(e,a)=>S`<div>Curve Inspector Placeholder</div>`,F=e=>100;export{F as CurveBodyHeight,j as CurveBodyRenderer,P as CurveInspector,N as CurveInspectorRenderer};
//# sourceMappingURL=nodes.ui-7G8HBHbe.js.map
