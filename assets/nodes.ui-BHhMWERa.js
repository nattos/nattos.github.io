import{r as g,x as n}from"./index-NSZ1S18S.js";const a=(r,i,d)=>{const e=g.inputs.get(r.id);let t=0;return e&&(e.fields&&e.fields[i]!==void 0?t=e.fields[i]:e.untagged&&e.untagged.length>0&&(t=e.untagged[0])),n`
    <graph-widget
      .config=${{mode:"scope",autoRange:!0,showGrid:!0,historySize:100}}
      .value=${t}
      .tick=${g.frame}
    ></graph-widget>
  `};export{a as DebugScopeInputEditor};
//# sourceMappingURL=nodes.ui-BHhMWERa.js.map
