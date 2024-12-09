import { Y as fallback, Z as ensure_array_like, _ as bind_props, S as pop, $ as stringify, Q as push } from "../../../chunks/index.js";
import "jszip";
import "file-saver";
import "@emmetio/codemirror6-plugin";
import { e as escape_html } from "../../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Console($$payload, $$props) {
  push();
  let visible = fallback($$props["visible"], false);
  let x = 20;
  let y = 20;
  let consoleOutput = [];
  if (visible) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(consoleOutput);
    $$payload.out += `<div class="console svelte-w5s9ya"${attr("style", `left: ${stringify(x)}px; top: ${stringify(y)}px;`)}><div class="header svelte-w5s9ya">Console (drag me)</div> <div class="output svelte-w5s9ya"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let line = each_array[$$index];
      $$payload.out += `<div class="line svelte-w5s9ya">${escape_html(line)}</div>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { visible });
  pop();
}
function CodeEditor($$payload, $$props) {
  push();
  let previewContent;
  let showConsole = false;
  let splitPosition = 50;
  let htmlValue = "<!-- HTML here -->";
  let cssValue = "/* CSS here */";
  let jsValue = "// JS here";
  previewContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${cssValue}</style>
      </head>
      <body>
        ${htmlValue}
        <script>
          console.log = (...args) => {
            window.parent.console.log(...args);
          };
          ${jsValue}<\/script>
      </body>
    </html>
  `;
  $$payload.out += `<div id="tools" class="top_tools svelte-1ff72lm"><button class="svelte-1ff72lm">Toggle Console</button> <button class="svelte-1ff72lm">Export HTML</button> <button class="svelte-1ff72lm">Export CSS</button> <button class="svelte-1ff72lm">Export JS</button> <button class="svelte-1ff72lm">Export All</button> `;
  Console($$payload, { visible: showConsole });
  $$payload.out += `<!----></div> <div class="container svelte-1ff72lm"><div class="editors svelte-1ff72lm"${attr("style", `flex-basis: ${stringify(splitPosition)}%`)}><div class="editor svelte-1ff72lm"></div> <div class="editor svelte-1ff72lm"></div> <div class="editor svelte-1ff72lm"></div></div> <div class="resize-handle svelte-1ff72lm"></div> <div class="preview svelte-1ff72lm"${attr("style", `flex-basis: ${stringify(100 - splitPosition)}%`)}><iframe title="preview"${attr("srcdoc", previewContent)} class="svelte-1ff72lm"></iframe></div></div>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<section id="codeSpace" class="svelte-1bnnn4z">`;
  CodeEditor($$payload);
  $$payload.out += `<!----></section>`;
}
export {
  _page as default
};
