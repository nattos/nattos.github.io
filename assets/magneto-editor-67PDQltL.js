import{s as L,r as R,a as _,x as $,i as N,n as W,c as A,e as H}from"./index-NSZ1S18S.js";var U=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,k=(t,s,i,e)=>{for(var a=e>1?void 0:e?Y(s,i):s,n=t.length-1,r;n>=0;n--)(r=t[n])&&(a=(e?r(s,i,a):r(a))||a);return e&&a&&U(s,i,a),a};let x=class extends L{constructor(){super(...arguments),this.cleanup=null,this.animationFrame=null,this.history=new Array(200).fill({t:0,e:0,fs:0,fm:0}),this.dragging=null,this.dragOrigin=null,this.longEdit=null,this.spheres=[],this.plateY=0,this.phase="IDLE",this.sustainProgress=0,this.adsr={attack:.2,decay:.25,sustain:.6,release:.3,peak:.9},this.handleDblClick=t=>{t.stopPropagation()},this.isSimDragging=!1}connectedCallback(){super.connectedCallback(),this.startLoop(),this.addEventListener("dblclick",this.handleDblClick)}disconnectedCallback(){super.disconnectedCallback(),this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.removeEventListener("dblclick",this.handleDblClick)}startLoop(){const t=()=>{if(!this.isConnected)return;this.animationFrame=requestAnimationFrame(t);const s=R.uiStates.get(this.node.id);s&&(s.spheres&&(this.spheres=s.spheres),typeof s.plateY=="number"&&(this.plateY=s.plateY),s.phase&&(this.phase=s.phase),typeof s.sustainProgress=="number"&&(this.sustainProgress=s.sustainProgress),!this.dragging&&s.adsr&&(this.adsr=s.adsr),this.updateHistory(),this.drawSim(),this.drawHistory(),this.drawADSR(),this.requestUpdate())};t()}updateHistory(){const t=R.outputs.get(this.node.id);t&&t.fields&&(this.history.push({t:t.fields.env??0,e:t.fields.ch2??0,fs:t.fields.ch3??0,fm:t.fields.ch4??0}),this.history.length>200&&this.history.shift())}firstUpdated(){this.resizeCanvases(),this.adsrCanvas}resizeCanvases(){const t=s=>{if(!s)return;const i=s.offsetWidth,e=s.offsetHeight;i>0&&e>0&&(s.width!==i||s.height!==e)&&(s.width=i,s.height=e)};t(this.simCanvas),t(this.adsrCanvas),t(this.historyCanvas)}handleADSRDown(t){t.preventDefault(),t.stopPropagation(),t.target.setPointerCapture(t.pointerId),this.handleADSRInput(t,!0)}handleADSRMove(t){t.preventDefault(),t.stopPropagation(),this.dragging&&this.handleADSRInput(t,!1)}handleADSRUp(t){t.stopPropagation(),this.dragging=null,this.dragOrigin=null,this.longEdit&&(this.longEdit.accept(),this.longEdit=null),t.target.releasePointerCapture(t.pointerId)}handleADSRInput(t,s){const i=this.adsrCanvas.getBoundingClientRect(),e=i.width,a=i.height;if(e===0||a===0)return;const n=(t.clientX-i.left)/e,r=(t.clientY-i.top)/a,{attack:f,decay:u,sustain:d,release:m,peak:p}=this.adsr,c=n*1.5,M=.05,y=Math.max(f,M),C=Math.max(u,M),S=.5,E=y,v=y+C,w=v+S;if(s){this.dragOrigin={peak:p,sustain:d};let l=.2,g=null;const P=Math.abs(c-E);P<l&&(l=P,g="attack");const T=Math.abs(c-v);T<l&&(l=T,g="decay");const O=Math.abs(c-w);O<l&&(l=O,g="release"),!g&&c>v&&c<w&&(g="sustain"),g||(c<E?g="attack":c<v?g="decay":c>w&&(g="release")),this.dragging=g}if(!this.dragging)return;const o={},D=this.node.config.values||{};if(this.dragging==="attack"){const h=Math.max(.01,c);o.attack=h;const l=Math.max(.1,Math.min(1,r));o.peak=l,d>l?o.sustain=l:this.dragOrigin&&(o.sustain=Math.min(l,this.dragOrigin.sustain))}else if(this.dragging==="decay"){const h=Math.max(.01,c-f);o.decay=h}else if(this.dragging==="sustain"){const h=Math.max(0,Math.min(1,r));o.sustain=h,h>p?o.peak=h:this.dragOrigin&&(o.peak=Math.max(h,this.dragOrigin.peak))}else if(this.dragging==="release"){const h=f+u+.5,l=Math.max(.01,c-h);o.release=l}const b=h=>{h.setNodeConfig(this.node.id,{values:{...D,...o}})};s?(this.longEdit&&(console.warn("Existing long edit found, accepting"),this.longEdit.accept()),this.longEdit=_.beginLongEdit({apply:b})):this.longEdit?this.longEdit.applyAgain(b):_.setNodeConfig(this.node.id,{values:{...D,...o}}),Object.assign(this.adsr,o)}handleSimDown(t){t.preventDefault(),t.stopPropagation(),t.target.setPointerCapture(t.pointerId),this.isSimDragging=!0,this.sendSimMessage(t)}handleSimMove(t){t.preventDefault(),t.stopPropagation(),this.isSimDragging&&this.sendSimMessage(t)}handleSimUp(t){t.stopPropagation(),this.isSimDragging=!1,this.longEdit&&(this.longEdit.accept(),this.longEdit=null),t.target.releasePointerCapture(t.pointerId),R.sendNodeMessage(this.node.id,{type:"manual_interaction",active:!1})}sendSimMessage(t){const s=this.simCanvas.getBoundingClientRect(),i=600/s.height,e=(t.clientY-s.top)*i;R.sendNodeMessage(this.node.id,{type:"manual_interaction",active:!0,y:e})}drawHistory(){if(!this.historyCanvas)return;const t=this.historyCanvas.getContext("2d");if(!t)return;this.historyCanvas.width!==this.historyCanvas.offsetWidth&&(this.historyCanvas.width=this.historyCanvas.offsetWidth,this.historyCanvas.height=this.historyCanvas.offsetHeight);const s=this.historyCanvas.width,i=this.historyCanvas.height;t.clearRect(0,0,s,i),t.fillStyle="#111",t.fillRect(0,0,s,i);const e=(a,n)=>{t.strokeStyle=n,t.lineWidth=1,t.beginPath();const r=s/this.history.length;this.history.forEach((f,u)=>{const d=i-f[a]*i;u===0?t.moveTo(0,d):t.lineTo(u*r,d)}),t.stroke()};e("fm","#0088ff"),e("fs","#ff0000"),e("e","#ffff00"),e("t","#00ffff")}drawSim(){const t=this.simCanvas?.getContext("2d");if(!t)return;this.simCanvas.width!==this.simCanvas.offsetWidth&&(this.simCanvas.width=this.simCanvas.offsetWidth,this.simCanvas.height=this.simCanvas.offsetHeight);const s=this.simCanvas.width,i=this.simCanvas.height,e=i/600;t.clearRect(0,0,s,i);const a=this.plateY*e;if(this.phase!=="IDLE"&&this.phase!=="RELEASE"){const n=t.createLinearGradient(0,a,0,a+100*e);n.addColorStop(0,"rgba(0, 255, 0, 0.2)"),n.addColorStop(1,"rgba(0, 255, 0, 0)"),t.fillStyle=n,t.fillRect(0,a,s,i-a)}t.fillStyle=this.phase!=="IDLE"&&this.phase!=="RELEASE"?"#00ff00":"#444",t.fillRect(0,a-2,s,4),this.spheres.forEach(n=>{const r=n.x/600*s,f=n.y*e,u=n.r*e,d=n.t||0;let m=255,p=255;d<.5?(m=Math.floor(d*2*255),p=255):(m=255,p=Math.floor((1-(d-.5)*2)*255)),t.fillStyle=n.l?`rgb(${m},${p},0)`:"#ccc",t.strokeStyle="#333",t.lineWidth=1,t.beginPath(),t.moveTo(r,i),t.moveTo(r,i),t.lineTo(r,f),t.stroke(),t.beginPath(),t.arc(r,f,Math.max(2,u),0,Math.PI*2),t.fill(),n.l&&(t.shadowBlur=10,t.shadowColor=`rgb(${m},${p},0)`,t.fill(),t.shadowBlur=0)})}drawADSR(){const t=this.adsrCanvas?.getContext("2d");if(!t)return;this.adsrCanvas.width!==this.adsrCanvas.offsetWidth&&(this.adsrCanvas.width=this.adsrCanvas.offsetWidth,this.adsrCanvas.height=this.adsrCanvas.offsetHeight);const s=this.adsrCanvas.width,i=this.adsrCanvas.height;t.clearRect(0,0,s,i);const{attack:e,decay:a,sustain:n,release:r,peak:f}=this.adsr,d=s/1.5,m=.05,p=Math.max(e,m),I=Math.max(a,m),c=.5,M=r,y=p*d,C=(p+I)*d,S=C+c*d,E=S+M*d,v=0,w=f*i,o=n*i;t.fillStyle="rgba(255, 255, 255, 0.05)",(this.dragging==="attack"||this.phase==="ATTACK")&&t.fillRect(0,0,y,i),(this.dragging==="decay"||this.phase==="DECAY")&&t.fillRect(y,0,C-y,i),(this.dragging==="sustain"||this.phase==="SUSTAIN")&&t.fillRect(C,0,S-C,i),(this.dragging==="release"||this.phase==="RELEASE")&&t.fillRect(S,0,s-S,i),t.strokeStyle="#00ffff",t.lineWidth=2,t.beginPath(),t.moveTo(0,v),t.lineTo(y,w),t.lineTo(C,o),t.lineTo(S,o),t.lineTo(E,v),t.stroke();const D=t.createLinearGradient(0,0,0,i);D.addColorStop(0,"rgba(0, 255, 255, 0)"),D.addColorStop(1,"rgba(0, 255, 255, 0.2)"),t.fillStyle=D,t.lineTo(0,v),t.fill(),t.fillStyle="#fff";const b=(h,l)=>{t.beginPath(),t.arc(h,l,3,0,Math.PI*2),t.fill()};b(y,w),b(C,o),b(S,o),b(E,v)}render(){return $`
            <div class="header" @pointerdown="${t=>t.stopPropagation()}">
                <div class="status ${this.phase!=="IDLE"?"active":""}">${this.phase}</div>
                <div style="font-size: 8px;">MAGNETO</div>
            </div>

            <div class="panel" style="height: 40px; flex-shrink: 0;" @pointerdown="${t=>t.stopPropagation()}">
                <canvas id="history-canvas"></canvas>
                <div class="legend">
                    <div style="color:#00ffff">TEN<div class="dot" style="background:#00ffff; display:inline-block"></div></div>
                    <div style="color:#ffff00">EXT<div class="dot" style="background:#ffff00; display:inline-block"></div></div>
                    <div style="color:#ff0000">SPR<div class="dot" style="background:#ff0000; display:inline-block"></div></div>
                    <div style="color:#0088ff">MAG<div class="dot" style="background:#0088ff; display:inline-block"></div></div>
                </div>
            </div>

            <div class="panel" style="height: 140px; flex-shrink: 0; pointer-events: auto;"
                 @pointerdown="${this.handleSimDown}"
                 @pointermove="${this.handleSimMove}"
                 @pointerup="${this.handleSimUp}"
                 @pointercancel="${this.handleSimUp}">
                <canvas id="sim-canvas"></canvas>
                <div class="param-label">SIMULATION</div>
            </div>

            <div class="panel" style="height: 80px; flex: 1; border-bottom: none;"
                 @pointerdown="${this.handleADSRDown}"
                 @pointermove="${this.handleADSRMove}"
                 @pointerup="${this.handleADSRUp}"
                 @pointercancel="${this.handleADSRUp}">
                <canvas id="adsr-canvas"></canvas>
                <div class="param-label">ELASTIC EDITOR</div>
            </div>
        `}};x.styles=N`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            background: #050505;
            color: #888;
            font-family: "Space Mono", "JetBrains Mono", monospace;
            font-size: 10px;
            user-select: none;
            position: relative;
            pointer-events: auto;
            touch-action: none; /* Prevent scrolling during interaction */
        }

        canvas {
            display: block;
            width: 100%;
            height: 100%;
            touch-action: none;
        }

        .panel {
            background: #0a0a0a;
            border-bottom: 1px solid #333;
            position: relative;
            width: 100%;
            overflow: hidden;
            touch-action: none;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4px 6px;
            background: #000;
            border-bottom: 1px solid #222;
            flex-shrink: 0;
            height: 20px;
            box-sizing: border-box;
        }

        .status {
            font-size: 9px;
            font-weight: bold;
            color: #444;
        }
        .status.active { color: #00ff00; }

        .param-label {
            position: absolute;
            top: 2px; right: 4px;
            font-size: 8px;
            color: #555;
            pointer-events: none;
        }

        .legend {
            position: absolute;
            top: 2px;
            left: 2px;
            display: flex;
            gap: 4px;
            pointer-events: none;
        }
        .dot { width: 4px; height: 4px; margin-top: 3px; }
    `;k([W({type:Object})],x.prototype,"node",2);k([A("#sim-canvas")],x.prototype,"simCanvas",2);k([A("#adsr-canvas")],x.prototype,"adsrCanvas",2);k([A("#history-canvas")],x.prototype,"historyCanvas",2);x=k([H("nicepattern-magneto-editor")],x);const F=t=>$`<nicepattern-magneto-editor .node=${t}></nicepattern-magneto-editor>`;export{x as MagnetoEditor,F as MagnetoEditorRenderer};
//# sourceMappingURL=magneto-editor-67PDQltL.js.map
