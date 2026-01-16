import{x as d}from"./index-Df36ec5a.js";const p=(e,o)=>d`
  <div style="height: 300px; width: 100%; border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden;">
    <monaco-editor-wrapper
      .value=${e.config.code||""}
      @change=${r=>o({code:r.detail.value})}
    ></monaco-editor-wrapper>
  </div>
`;export{p as ExpressionInspectorRenderer};
//# sourceMappingURL=nodes.ui-fiTDFbTf.js.map
