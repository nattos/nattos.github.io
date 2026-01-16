import{x as r,R as s,d as u}from"./index-DgNL3swE.js";const o=(l,e,a)=>{const t=l.config?.[e];if(t!==void 0)return t;const n=u.getNodeType(l.config.typeId);if(n&&n.inputs){const i=n.inputs.find(p=>p.name===e);if(i&&i.defaultValue!==void 0)return i.defaultValue}return a},c=(l,e,a)=>r`
  <div class="field" style="height: ${s}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <input
      type="text"
      .value=${o(l,e.path,e.default??"")}
      placeholder=${e.placeholder||""}
      @input=${t=>a({[e.path]:t.target.value})}
      style="background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-color); border-radius: 4px; padding: 2px 4px; width: 120px; font-size: 0.8em;"
    />
  </div>
`,d=(l,e,a)=>r`
  <div class="field" style="height: ${s}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <input
      type="number"
      .value=${o(l,e.path,e.default??0)}
      min=${e.min}
      max=${e.max}
      step=${e.step}
      @input=${t=>a({[e.path]:parseFloat(t.target.value)})}
      style="background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-color); border-radius: 4px; padding: 2px 4px; width: 60px; font-size: 0.8em;"
    />
  </div>
`,b=(l,e,a)=>r`
  <div class="field" style="height: ${s}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <div style="flex: 1; margin-left: 8px; max-width: 120px;">
      <scalar-slider
        .value=${o(l,e.path,e.default??e.min)}
        .min=${e.min}
        .max=${e.max}
        .step=${e.step||.01}
        @change=${t=>a({[e.path]:t.detail})}
        style="width: 100%;"
      ></scalar-slider>
    </div>
  </div>
`,v=(l,e,a)=>r`
  <div class="field" style="height: ${s}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <input
      type="checkbox"
      .checked=${o(l,e.path,e.default??!1)}
      @change=${t=>a({[e.path]:t.target.checked})}
    />
  </div>
`,x=(l,e,a)=>r`
  <div class="field" style="height: ${s}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <select
      .value=${o(l,e.path,e.default??e.options[0]?.value)}
      @change=${t=>a({[e.path]:t.target.value})}
      style="background: var(--input-bg); border: 1px solid var(--border-color); color: var(--text-color); border-radius: 4px; padding: 2px 4px; font-size: 0.8em;"
    >
      ${e.options.map(t=>r`<option value=${t.value}>${t.label}</option>`)}
    </select>
  </div>
`,m=(l,e,a)=>r`
  <div class="field" style="height: ${s}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <div style="flex: 1; margin-left: 8px;">
      <ui-option-bar
        .value=${o(l,e.path,e.default??"float")}
        .options=${[{label:"float",value:"float"},{label:"float2",value:"float2"},{label:"float3",value:"float3"},{label:"float4",value:"float4"},{label:"midi",value:"midi-stream"},{label:"string",value:"string"},{label:"any",value:"any"}]}
        @change=${t=>a({[e.path]:t.detail.value})}
      ></ui-option-bar>
    </div>
  </div>
`,y=(l,e,a)=>r`
  <div class="field" style="height: ${s}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <div style="flex: 1; margin-left: 8px;">
      <ui-option-bar
        .value=${o(l,e.path,e.default??e.options[0]?.value)}
        .options=${e.options}
        @change=${t=>a({[e.path]:t.detail.value})}
      ></ui-option-bar>
    </div>
  </div>
`,$=(l,e,a)=>r`
  <div class="field" style="height: ${s}px; display: flex; align-items: center; justify-content: space-between;">
    <label style="color: var(--text-muted); font-size: 0.7em;">${e.label}</label>
    <button
      @pointerdown=${()=>a({[e.path]:1})}
      @pointerup=${()=>a({[e.path]:0})}
      @pointerleave=${()=>a({[e.path]:0})}
      style="background: var(--button-bg, #444); color: var(--text-color); border: 1px solid var(--border-color); border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 0.8em; min-width: 60px;"
    >${e.text||"Trigger"}</button>
  </div>
`,h=l=>(e,a)=>r`
      <div class="generic-inspector" style="display: flex; flex-direction: column;">
        ${l.map(t=>{switch(t.type){case"string":return c(e,t,a);case"number":return d(e,t,a);case"slider":return b(e,t,a);case"boolean":return v(e,t,a);case"select":return x(e,t,a);case"tab-bar":return y(e,t,a);case"structor-type":return m(e,t,a);case"button":return $(e,t,a);default:return r``}})}
      </div>
    `;export{h as createGenericInspector};
//# sourceMappingURL=generic-inspector-BiKRhoEs.js.map
