import{s as f,a as h,x as c,r as x,i as g,n as u,f as d,e as v}from"./index-NSZ1S18S.js";var b=Object.defineProperty,m=Object.getOwnPropertyDescriptor,l=(t,e,i,o)=>{for(var n=o>1?void 0:o?m(e,i):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(o?a(e,i,n):a(n))||n);return o&&n&&b(e,i,n),n};let r=class extends f{constructor(){super(...arguments),this.codes=[],this.activeIndex=0,this.channels=[0,0,0,0],this.rawChannels=[0,0,0,0],this.envelope=0,this.gateOpen=!1,this.cleanup=null,this.animationFrame=null}connectedCallback(){super.connectedCallback(),this.startLoop()}disconnectedCallback(){super.disconnectedCallback(),this.cleanup&&this.cleanup(),this.animationFrame&&cancelAnimationFrame(this.animationFrame)}startLoop(){const t=()=>{this.animationFrame=requestAnimationFrame(t);const e=x.uiStates.get(this.node.id);if(e){if(e.codes&&e.codes.length>0&&(this.codes=e.codes),this.envelope=e.env??0,this.channels=e.vec??[0,0,0,0],this.rawChannels=e.rawVec??[0,0,0,0],this.gateOpen=(e.gate??0)>.5,typeof e.activeCodeIndex=="number")this.activeIndex!==e.activeCodeIndex&&(this.activeIndex=e.activeCodeIndex);else{let i=1-this.envelope;i=Math.max(0,Math.min(.999,i));const o=Math.floor(i*this.codes.length);this.activeIndex!==o&&(this.activeIndex=o)}this.requestUpdate()}};t()}handleShuffle(){const t=Math.floor(Math.random()*1e5);h.setNodeConfig(this.node.id,{seed:t})}handleMatrixDown(t){t.preventDefault(),t.stopPropagation(),t.target.setPointerCapture(t.pointerId),this.updateScrub(t)}handleMatrixMove(t){t.target.hasPointerCapture(t.pointerId)&&this.updateScrub(t)}handleMatrixUp(t){t.target.releasePointerCapture(t.pointerId);const e=this.node.config.values||{};h.setNodeConfig(this.node.id,{values:{...e,manual_phase:-1}})}updateScrub(t){const e=this.shadowRoot?.querySelector(".matrix");if(!e)return;const i=e.getBoundingClientRect(),o=t.clientY-i.top,s=1-Math.max(0,Math.min(1,o/i.height)),a=this.node.config.values||{};h.setNodeConfig(this.node.id,{values:{...a,manual_phase:s}})}render(){this.codes[this.activeIndex];const t=this.envelope>.001;return c`
        <div class="container" @dblclick="${e=>e.stopPropagation()}">
        <div class="header">
            <div style="display:flex; align-items:center;">
                <span class="title">ORTHO<span class="highlight">MOD</span></span>
            </div>
            <div style="display:flex; align-items:center;">
                <div class="gate-led ${this.gateOpen?"on":""}"></div>
                <span class="title" style="color: #555;">GATE</span>
            </div>
        </div>

        <div class="visualizer">
            <!-- Channels (Top) -->
            <div class="channels">
                ${this.channels.map((e,i)=>{const o=this.codes[this.activeIndex]||[],n=o[i*2]||0,s=o[i*2+1]||0;let a="OFF";n===0&&s===0?a="OFF":n===1&&s===1?a="ON":n===1&&s===0?a="SQR":n===0&&s===1&&(a="SIN");const p=this.rawChannels[i]||0;return c`
                    <div class="channel">
                        <div class="channel-label">CH ${i+1}</div>
                        <!-- Ghost Bar (Raw / Unmodulated) -->
                        <div class="channel-ghost" style="height: ${Number.isNaN(p)?0:Math.min(100,Math.max(0,p*100))}%"></div>

                        <!-- Main Bar (Enveloped) -->
                        <div class="channel-fill" style="height: ${Number.isNaN(e)?0:Math.min(100,Math.max(0,e*100))}%"></div>

                        <div class="channel-type" style="color: ${t?"#000":"#555"}">${a}</div>
                    </div>
                `})}
            </div>

            <!-- Matrix (Bottom) -->
            <div class="matrix"
                @pointerdown="${this.handleMatrixDown}"
                @pointermove="${this.handleMatrixMove}"
                @pointerup="${this.handleMatrixUp}"
                @pointercancel="${this.handleMatrixUp}"
            >
                ${this.codes.map((e,i)=>c`
                    <div class="matrix-row ${i===this.activeIndex&&t?"active":""}">
                        <div class="bit" style="width:12px; border-right:1px solid #222;">${i}</div>
                        ${e.map(o=>c`
                            <div class="bit ${o?"on":""}">${o}</div>
                        `)}
                    </div>
                `)}
            </div>

            <!-- Channels -->
            <!-- Moved to top -->
        </div>

        <div class="footer">
             <button @click=${this.handleShuffle}>SHUFFLE CODES</button>
            </div>
        </div> <!-- container -->
      `}};r.styles=g`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #111;
      color: #eee;
      font-family: "JetBrains Mono", monospace;
      font-size: 10px;
      user-select: none;
      pointer-events: auto; /* Ensure interactivity */
    }

    /* Header */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 6px;
      border-bottom: 1px solid #222;
      background: #080808;
      height: 20px;
      flex-shrink: 0;
    }

    .title {
      font-weight: 800;
      color: #fff;
      font-size: 10px;
      letter-spacing: -0.5px;
      line-height: 1;
    }

    .highlight { color: #ffcc00; }

    .gate-led {
        width: 6px; height: 6px; background: #222; border-radius: 50%;
        margin-right: 4px;
    }
    .gate-led.on { background: #fff; box-shadow: 0 0 6px #fff; }

    /* Visualizer Area */
    .visualizer {
      flex: 1;
      display: flex;
      flex-direction: column; /* Stacked Vertically */
      border-bottom: 1px solid #222;
      min-height: 200px;
    }

    /* Matrix */
    .matrix {
      flex: 1; /* Take remaining space */
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #000;
    }

    .matrix-row {
      flex: 1;
      display: flex;
      border-bottom: 1px solid #111;
      opacity: 0.5;
      border-left: 2px solid transparent; /* Reserve space for active border */
      box-sizing: border-box;
    }
    .matrix-row.active {
      opacity: 1.0;
      background: rgba(255, 204, 0, 0.15);
      border-left: 2px solid #ffcc00;
    }

    .bit {
      flex: 1;
      border-right: 1px solid #111;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
    }
    .bit.on {
      background: #ffcc00;
      color: #000;
      font-weight: 800;
    }

    /* Channels */
    .channels {
      height: 80px; /* Fixed height for channels */
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #222;
    }

    .channel {
      flex: 1;
      border-right: 1px solid #222;
      position: relative;
      background: #000;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .channel:last-child { border-right: none; }



    .channel-ghost {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      background: rgba(255, 204, 0, 0.25); /* Faint Yellow */
      border-top: 1px solid rgba(255, 204, 0, 0.5); /* Rim */
      z-index: 0;
    }

    .channel-fill {
      width: 100%;
      background: #ffcc00; /* Solid punchy yellow */
      opacity: 1.0;
      z-index: 1;
      position: relative;
      box-shadow: 0 0 10px rgba(255, 204, 0, 0.3); /* Glow */
    }

    .channel-label {
        position: absolute;
        top: 4px;
        left: 0; right: 0;
        text-align: center;
        font-size: 9px;
        font-weight: 700;
        color: #666;
        z-index: 10;
        pointer-events: none;
        letter-spacing: 0.5px;
    }

    .channel-type {
        position: absolute;
        bottom: 4px;
        left: 0; right: 0;
        text-align: center;
        font-size: 9px;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.9);
        z-index: 11;
        pointer-events: none;
        opacity: 1.0;
    }

    /* Footer / Controls */
    .footer {
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #080808;
      border-top: 1px solid #222;
      padding: 0 4px;
    }

    button {
      background: #111;
      border: 1px solid #333;
      color: #777;
      font-size: 9px;
      cursor: pointer;
      padding: 2px 8px;
      font-family: inherit;
    }
    button:hover {
        border-color: #ffcc00;
        color: #ffcc00;
    }
  `;l([u({type:Object})],r.prototype,"node",2);l([d()],r.prototype,"codes",2);l([d()],r.prototype,"activeIndex",2);l([d()],r.prototype,"channels",2);l([d()],r.prototype,"rawChannels",2);l([d()],r.prototype,"envelope",2);l([d()],r.prototype,"gateOpen",2);r=l([v("nicepattern-orthomod-editor")],r);const w=t=>c`<nicepattern-orthomod-editor .node=${t}></nicepattern-orthomod-editor>`;export{r as OrthomodEditor,w as OrthomodEditorRenderer};
//# sourceMappingURL=orthomod-editor-C917s4ie.js.map
