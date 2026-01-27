import{s as g,x as p,f,i as v,n as h,h as q}from"./stdlib-aBcQoNak.js";import{P as x,a as b,R as y}from"./main-BvIeRv4f.js";var m=Object.defineProperty,S=Object.getOwnPropertyDescriptor,c=(t,s,i,e)=>{for(var o=e>1?void 0:e?S(s,i):s,n=t.length-1,r;n>=0;n--)(r=t[n])&&(o=(e?r(s,i,o):r(o))||o);return e&&o&&m(s,i,o),o};let l=class extends g{constructor(){super(...arguments),this.nodeId="",this.config={},this.requestConfigUpdate=()=>{},this.lastHoveredStep=-1,this.dragOp=null}disconnectedCallback(){super.disconnectedCallback(),this.dragOp&&(this.dragOp.dispose(),this.dragOp=null)}getSequence(){const t=this.config.values||{};return t.sequence&&Array.isArray(t.sequence)?t.sequence:Array(16).fill({noteIndex:null,velocity:0,hold:!1})}toggleStep(t,s){const e={...t[s]||{noteIndex:null,velocity:0,hold:!1}};e.noteIndex!==null?(e.noteIndex=null,e.velocity=0,e.hold=!1):(e.noteIndex=60,e.velocity=1,e.hold=!1),t[s]=e}updateConfig(t){const s={...this.config,values:{...this.config.values||{},sequence:t}};this.config=s,this.requestConfigUpdate(s),this.requestUpdate()}handlePointerDown(t,s){this.lastHoveredStep=s;const i=[...this.getSequence()];this.toggleStep(i,s),this.updateConfig(i),this.dragOp=new x(t,this,{callMoveImmediately:!1,move:e=>this.handleDragMove(e),complete:()=>{this.dragOp=null,this.lastHoveredStep=-1}})}handleDragMove(t){const i=(this.shadowRoot?.elementsFromPoint(t.clientX,t.clientY)||[]).find(e=>e.classList.contains("step"));if(i){const e=i.dataset.index;if(e){const o=parseInt(e,10);if(o!==this.lastHoveredStep){const n=[...this.getSequence()],r=this.lastHoveredStep,u=o,d=Math.sign(u-r);if(d!==0){let a=r+d;for(;a!==u+d;)a>=0&&a<16&&this.toggleStep(n,a),a+=d}this.updateConfig(n),this.lastHoveredStep=o}}}}render(){const t=this.getSequence();return p`
      <div class="sequencer-grid" @dblclick=${s=>s.stopPropagation()}>
        ${t.map((s,i)=>{const e=s.noteIndex!==null,o=s.velocity??0,n=e?Math.max(10,o*100):0;return p`
            <div class="step ${e?"active":""}"
                 data-index="${i}"
                 @pointerdown=${r=>this.handlePointerDown(r,i)}
            >
              <div class="step-bar" style="height: ${n}%"></div>
            </div>
          `})}
      </div>
    `}};l.styles=v`
    :host {
      display: block;
      width: 100%;
      height: ${f(3*y+"px")};
      color: white;
      font-family: var(--font-family, sans-serif);
      background: #1e1e1e;
      border-radius: 4px;
      overflow: hidden;
      user-select: none;
      touch-action: none;
    }

    .sequencer-grid {
      display: flex;
      flex-direction: row;
      height: 100%;
      gap: 0;
      padding: 4px;
      box-sizing: border-box;
    }

    .step {
      flex: 1;
      background: #333;
      border-radius: 2px;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border-right: 1px solid #1e1e1e;
    }

    .step:last-child {
      border-right: none;
    }

    .step:hover {
      background: #444;
    }

    .step.active {
      background: rgba(100, 149, 237, 0.2);
    }

    .step-bar {
      width: 100%;
      background: var(--accent-color, #6495ed);
      border-radius: 1px;
    }
  `;c([h()],l.prototype,"nodeId",2);c([h({type:Object})],l.prototype,"config",2);c([h()],l.prototype,"requestConfigUpdate",2);l=c([q("seq-sequencer-editor")],l);const O=t=>p`<seq-sequencer-editor .nodeId=${t.id} .config=${t.config} .requestConfigUpdate=${s=>b.setNodeConfig(t.id,s)}></seq-sequencer-editor>`;export{l as SequencerEditor,O as SequencerEditorRenderer};
//# sourceMappingURL=sequencer-editor-7TyDEX8C.js.map
