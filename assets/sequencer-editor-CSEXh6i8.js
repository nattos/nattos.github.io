import{s as g,P as f,x as p,a as v,b as q,R as x,i as b,n as h,e as y}from"./index-NSZ1S18S.js";var S=Object.defineProperty,m=Object.getOwnPropertyDescriptor,c=(t,s,n,e)=>{for(var o=e>1?void 0:e?m(s,n):s,i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=(e?r(s,n,o):r(o))||o);return e&&o&&S(s,n,o),o};let l=class extends g{constructor(){super(...arguments),this.nodeId="",this.config={},this.requestConfigUpdate=()=>{},this.lastHoveredStep=-1,this.dragOp=null}disconnectedCallback(){super.disconnectedCallback(),this.dragOp&&(this.dragOp.dispose(),this.dragOp=null)}getSequence(){const t=this.config.values||{};return t.sequence&&Array.isArray(t.sequence)?t.sequence:Array(16).fill({noteIndex:null,velocity:0,hold:!1})}toggleStep(t,s){const e={...t[s]||{noteIndex:null,velocity:0,hold:!1}};e.noteIndex!==null?(e.noteIndex=null,e.velocity=0,e.hold=!1):(e.noteIndex=60,e.velocity=1,e.hold=!1),t[s]=e}updateConfig(t){const s={...this.config,values:{...this.config.values||{},sequence:t}};this.config=s,this.requestConfigUpdate(s),this.requestUpdate()}handlePointerDown(t,s){this.lastHoveredStep=s;const n=[...this.getSequence()];this.toggleStep(n,s),this.updateConfig(n),this.dragOp=new f(t,this,{callMoveImmediately:!1,move:e=>this.handleDragMove(e),complete:()=>{this.dragOp=null,this.lastHoveredStep=-1}})}handleDragMove(t){const n=(this.shadowRoot?.elementsFromPoint(t.clientX,t.clientY)||[]).find(e=>e.classList.contains("step"));if(n){const e=n.dataset.index;if(e){const o=parseInt(e,10);if(o!==this.lastHoveredStep){const i=[...this.getSequence()],r=this.lastHoveredStep,u=o,a=Math.sign(u-r);if(a!==0){let d=r+a;for(;d!==u+a;)d>=0&&d<16&&this.toggleStep(i,d),d+=a}this.updateConfig(i),this.lastHoveredStep=o}}}}render(){const t=this.getSequence();return p`
      <div class="sequencer-grid" @dblclick=${s=>s.stopPropagation()}>
        ${t.map((s,n)=>{const e=s.noteIndex!==null,o=s.velocity??0,i=e?Math.max(10,o*100):0;return p`
            <div class="step ${e?"active":""}"
                 data-index="${n}"
                 @pointerdown=${r=>this.handlePointerDown(r,n)}
            >
              <div class="step-bar" style="height: ${i}%"></div>
            </div>
          `})}
      </div>
    `}};l.styles=b`
    :host {
      display: block;
      width: 100%;
      height: ${q(3*x+"px")};
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
  `;c([h()],l.prototype,"nodeId",2);c([h({type:Object})],l.prototype,"config",2);c([h()],l.prototype,"requestConfigUpdate",2);l=c([y("seq-sequencer-editor")],l);const C=t=>p`<seq-sequencer-editor .nodeId=${t.id} .config=${t.config} .requestConfigUpdate=${s=>v.setNodeConfig(t.id,s)}></seq-sequencer-editor>`;export{l as SequencerEditor,C as SequencerEditorRenderer};
//# sourceMappingURL=sequencer-editor-CSEXh6i8.js.map
