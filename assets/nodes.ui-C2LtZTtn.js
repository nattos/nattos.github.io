import{M as l,a as c,x as s,i as p,n as b,e as u}from"./index-NSZ1S18S.js";var f=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(r,e,o,i)=>{for(var t=i>1?void 0:i?h(e,o):e,a=r.length-1,d;a>=0;a--)(d=r[a])&&(t=(i?d(e,o,t):d(t))||t);return i&&t&&f(e,o,t),t};let n=class extends l{handlePointerDown(r){r.stopPropagation();const e=this.node.config.values||{},o=(e.trigger||0)+1;c.setNodeConfig(this.node.id,{values:{...e,trigger:o}},{skipHistory:!0})}render(){return s`
      <button class="trigger-btn"
        @pointerdown=${this.handlePointerDown}
        @dblclick=${r=>r.stopPropagation()}
      >
        TRIGGER
      </button>
    `}};n.styles=p`
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
  `;g([b({attribute:!1})],n.prototype,"node",2);g([b({attribute:!1})],n.prototype,"handlers",2);n=g([u("midi-trigger-renderer")],n);const v=(r,e)=>s`<midi-trigger-renderer .node=${r} .handlers=${e}></midi-trigger-renderer>`,y=r=>48;export{y as MidiTriggerBodyHeight,v as MidiTriggerBodyRenderer,n as MidiTriggerRenderer};
//# sourceMappingURL=nodes.ui-C2LtZTtn.js.map
