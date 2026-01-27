import{i as g,n as u,s as h,x as i,h as x}from"./stdlib-aBcQoNak.js";import{l,r as b}from"./main-BvIeRv4f.js";var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p=(e,t,r,n)=>{for(var s=n>1?void 0:n?f(t,r):t,o=e.length-1,c;o>=0;o--)(c=e[o])&&(s=(n?c(t,r,s):c(s))||s);return n&&s&&v(t,r,s),s};let d=class extends h{constructor(){super(...arguments),this.status="idle",this.diagnostics=[]}handleClick(){this.dispatchEvent(new CustomEvent("show-diagnostics",{bubbles:!0,composed:!0}))}handleViewCode(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("view-code",{bubbles:!0,composed:!0}))}render(){const e=this.diagnostics.filter(r=>r.severity==="error").length,t=this.diagnostics.filter(r=>r.severity==="warning").length;return i`<ui-icon icon="la-check-circle" class="success"></ui-icon>`,i``,this.status==="pending"?(i`<ui-icon icon="la-circle-notch" class="pending"></ui-icon>`,i``):(e>0||t>0)&&(i``,i``),i`
      ${this.status==="success"&&e===0&&t===0?i`<ui-icon icon="la-check-circle" class="success"></ui-icon>`:""}
      ${this.status==="pending"?i`<ui-icon icon="la-circle-notch" class="pending"></ui-icon>`:""}

      <div class="counts" @click=${this.handleClick}>
        ${e>0?i`
          <div class="count-item error">
              <ui-icon icon="la-exclamation-circle"></ui-icon> ${e}
          </div>
        `:""}
        ${t>0?i`
          <div class="count-item warning">
              <ui-icon icon="la-exclamation-triangle"></ui-icon> ${t}
          </div>
        `:""}
      </div>

      <div class="view-code-btn" @click=${this.handleViewCode}>
        <ui-icon icon="la-code"></ui-icon> view code
      </div>
    `}};d.styles=g`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0px;
      font-family: 'JetBrains Mono', monospace;
      font-size: var(--font-size-xs);
      border-bottom: 1px solid var(--border-color);
      background: var(--panel-header-bg);
      color: var(--text-color);
      height: 24px;
      box-sizing: border-box;
    }

    ui-icon {
      font-size: 1.2em; /* Relative to xs font */
      --icon-size: 1.2em;
    }

    .success { color: #4caf50; }
    .error { color: #f44336; }
    .warning { color: #ff9800; }
    .pending { color: #2196f3; animation: spin 1s linear infinite; }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .counts {
      display: flex;
      gap: 4px;
      cursor: pointer;
    }

    .counts:hover .count-item {
      text-decoration: underline;
    }

    .count-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-weight: bold;
    }

    .view-code-btn {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      color: var(--text-muted);
    }

    .view-code-btn:hover {
      text-decoration: underline;
      color: var(--text-color);
    }
  `;p([u({type:String})],d.prototype,"status",2);p([u({type:Array})],d.prototype,"diagnostics",2);d=p([x("editor-status-bar")],d);const m=(e,t,r)=>{const n=o=>`${o.range?`[${o.range.startLineNumber}:${o.range.startColumn||0}] `:""}${o.severity.toUpperCase()}: ${o.message}`,s=t.map(n).join(`
`);return i`
    <div style="display: flex; flex-direction: column; height: 100%; min-height: 400px; box-sizing: border-box; gap: 8px;">

      <!-- Header with Back Button -->
      <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color);">
        <ui-button icon="la-arrow-left" @click=${r}>Back</ui-button>
        <h3 style="margin: 0; font-size: 1.17em; font-weight: bold;">Diagnostics</h3>
      </div>

      <!-- Content Area -->
      <div style="flex: 1; position: relative;">
        <textarea
          readonly
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            resize: none;
            background: var(--input-bg);
            color: var(--text-color);
            border: 1px solid var(--border-color);
            border-radius: 4px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            padding: 8px;
            box-sizing: border-box;
            outline: none;
            white-space: pre;
          "
        >${s}</textarea>
      </div>
    </div>
  `},y=(e,t)=>i`
    <div style="display: flex; flex-direction: column; height: 100%; min-height: 400px; box-sizing: border-box; gap: 8px;">

      <!-- Header with Back Button -->
      <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color);">
        <ui-button icon="la-arrow-left" @click=${t}>Back</ui-button>
        <h3 style="margin: 0; font-size: 1.17em; font-weight: bold;">Generated Code</h3>
      </div>

      <!-- Content Area -->
      <div style="flex: 1; position: relative;">
        <textarea
          readonly
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            resize: none;
            background: var(--input-bg);
            color: var(--text-color);
            border: 1px solid var(--border-color);
            border-radius: 4px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            padding: 8px;
            box-sizing: border-box;
            outline: none;
            white-space: pre;
          "
        >${e||"// No code generated"}</textarea>
      </div>
    </div>
  `,z=(e,t)=>{const r=l.observableState.nodeUIStates.get(e.id),n=r?.diagnostics||[],s=r?.jsCode||"";let o="success";return b.pendingDirtyNodeIds.has(e.id)?o="pending":n.some(a=>a.severity==="error")?o="error":n.some(a=>a.severity==="warning")&&(o="success"),i`
  <div style="display: flex; flex-direction: column; gap: 0;">
    <editor-status-bar
      .status=${o}
      .diagnostics=${n}
      @show-diagnostics=${()=>{const a=`diagnostics:${e.id}`;l.defineSelectable({path:a,renderInspectorContent:()=>m(e.id,n,()=>{l.queueSelectPaths([e.id])})}).select()}}
      @view-code=${()=>{const a=`code:${e.id}`;l.defineSelectable({path:a,renderInspectorContent:()=>y(s,()=>{l.queueSelectPaths([e.id])})}).select()}}
    ></editor-status-bar>
    <div style="height: 300px; width: 100%; border: 1px solid var(--border-color); border-top: none; border-radius: 0 0 4px 4px; overflow: hidden;">
      <monaco-editor-wrapper
        .value=${e.config.code||""}
        @change=${a=>t({code:a.detail.value})}
      ></monaco-editor-wrapper>
    </div>
  </div>
`};export{z as ExpressionInspectorRenderer};
//# sourceMappingURL=nodes.ui-dTlYe2bo.js.map
