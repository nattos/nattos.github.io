import{i as v,n as u,s as b,x as o,e as x,v as n,d as h}from"./index-e9XZ_EZ1.js";var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,d=(r,e,a,t)=>{for(var l=t>1?void 0:t?m(e,a):e,s=r.length-1,c;s>=0;s--)(c=r[s])&&(l=(t?c(e,a,l):c(l))||l);return t&&l&&y(e,a,l),l};let i=class extends b{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1}select(r){this.disabled||this.value!==r&&(this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:{value:r},bubbles:!0,composed:!0})))}render(){return o`
      ${this.options.map(r=>o`
        <div
          class="option ${this.value===r.value?"active":""} ${this.disabled?"disabled":""}"
          @click=${()=>this.select(r.value)}
        >
          ${r.label}
        </div>
      `)}
    `}};i.styles=v`
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
      transition: all 0.1s ease-out;
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
  `;d([u({type:String})],i.prototype,"value",2);d([u({type:Array})],i.prototype,"options",2);d([u({type:Boolean})],i.prototype,"disabled",2);i=d([x("ui-option-bar")],i);const p=(r,e,a)=>{const t=r.config?.[e];if(t!==void 0)return t;const l=h.getNodeType(r.config.typeId);if(l&&l.inputs){const s=l.inputs.find(c=>c.name===e);if(s&&s.defaultValue!==void 0)return s.defaultValue}return a},g=(r,e,a)=>o`
  <div class="field" style="height: ${n}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <input
      type="text"
      .value=${p(r,e.path,"")}
      placeholder=${e.placeholder||""}
      @input=${t=>a({[e.path]:t.target.value})}
      style="background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-color); border-radius: 4px; padding: 2px 4px; width: 120px; font-size: 0.8em;"
    />
  </div>
`,$=(r,e,a)=>o`
  <div class="field" style="height: ${n}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <input
      type="number"
      .value=${p(r,e.path,0)}
      min=${e.min}
      max=${e.max}
      step=${e.step}
      @input=${t=>a({[e.path]:parseFloat(t.target.value)})}
      style="background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-color); border-radius: 4px; padding: 2px 4px; width: 60px; font-size: 0.8em;"
    />
  </div>
`,f=(r,e,a)=>o`
  <div class="field" style="height: ${n}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <div style="flex: 1; margin-left: 8px; max-width: 120px;">
      <scalar-slider
        .value=${p(r,e.path,e.min)}
        .min=${e.min}
        .max=${e.max}
        .step=${e.step||.01}
        @change=${t=>a({[e.path]:t.detail})}
        style="width: 100%;"
      ></scalar-slider>
    </div>
  </div>
`,w=(r,e,a)=>o`
  <div class="field" style="height: ${n}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <input
      type="checkbox"
      .checked=${p(r,e.path,!1)}
      @change=${t=>a({[e.path]:t.target.checked})}
    />
  </div>
`,z=(r,e,a)=>o`
  <div class="field" style="height: ${n}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <select
      .value=${p(r,e.path,e.options[0]?.value)}
      @change=${t=>a({[e.path]:t.target.value})}
      style="background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-color); border-radius: 4px; padding: 2px 4px; font-size: 0.8em;"
    >
      ${e.options.map(t=>o`<option value=${t.value}>${t.label}</option>`)}
    </select>
  </div>
`,j=(r,e,a)=>o`
  <div class="field" style="height: ${n}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <div style="flex: 1; margin-left: 8px;">
      <ui-option-bar
        .value=${p(r,e.path,e.options[0]?.value)}
        .options=${e.options}
        @change=${t=>a({[e.path]:t.detail.value})}
      ></ui-option-bar>
    </div>
  </div>
`,_=r=>(e,a)=>o`
      <div class="generic-inspector" style="display: flex; flex-direction: column;">
        ${r.map(t=>{switch(t.type){case"string":return g(e,t,a);case"number":return $(e,t,a);case"slider":return f(e,t,a);case"boolean":return w(e,t,a);case"select":return z(e,t,a);case"tab-bar":return j(e,t,a);default:return o``}})}
      </div>
    `;export{_ as createGenericInspector};
//# sourceMappingURL=generic-inspector-Bvl9XjgN.js.map
