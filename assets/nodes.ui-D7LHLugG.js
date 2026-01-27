import{x as n}from"./stdlib-aBcQoNak.js";import{r}from"./main-BvIeRv4f.js";const a=(g,i,o)=>{const e=r.inputs.get(g.id);let t=0;return e&&(e.fields&&e.fields[i]!==void 0?t=e.fields[i]:e.untagged&&e.untagged.length>0&&(t=e.untagged[0])),n`
    <graph-widget
      .config=${{mode:"scope",autoRange:!0,showGrid:!0,historySize:100}}
      .value=${t}
      .tick=${r.frame}
    ></graph-widget>
  `};export{a as DebugScopeInputEditor};
//# sourceMappingURL=nodes.ui-D7LHLugG.js.map
