import{M as l,x as g,i as c,n as b,h as p}from"./stdlib-aBcQoNak.js";import{a as u}from"./main-BvIeRv4f.js";var f=Object.defineProperty,h=Object.getOwnPropertyDescriptor,s=(r,e,o,n)=>{for(var t=n>1?void 0:n?h(e,o):e,a=r.length-1,d;a>=0;a--)(d=r[a])&&(t=(n?d(e,o,t):d(t))||t);return n&&t&&f(e,o,t),t};let i=class extends l{handlePointerDown(r){r.stopPropagation();const e=this.node.config.values||{},o=(e.trigger||0)+1;u.setNodeConfig(this.node.id,{values:{...e,trigger:o}},{skipHistory:!0})}render(){return g`
      <button class="trigger-btn"
        @pointerdown=${this.handlePointerDown}
        @dblclick=${r=>r.stopPropagation()}
      >
        TRIGGER
      </button>
    `}};i.styles=c`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      padding: 4px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      height: 100%;
      background: #2a2a2a;
      border: 1px solid #444;
      border-radius: 4px;
      color: #ccc;
      font-family: inherit;
      font-size: 11px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:hover {
      background: #3a3a3a;
      border-color: #666;
      color: #fff;
    }

    button:active {
      background: #666;
      transform: translateY(1px);
    }

    .trigger-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .trigger-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
    }
    .trigger-btn:active {
        background: rgba(255, 255, 255, 0.2);
    }
  `;s([b({attribute:!1})],i.prototype,"node",2);s([b({attribute:!1})],i.prototype,"handlers",2);i=s([p("midi-trigger-renderer")],i);const m=(r,e)=>g`<midi-trigger-renderer .node=${r} .handlers=${e}></midi-trigger-renderer>`,y=r=>48;export{y as MidiTriggerBodyHeight,m as MidiTriggerBodyRenderer,i as MidiTriggerRenderer};
//# sourceMappingURL=nodes.ui-C4JwC42u.js.map
