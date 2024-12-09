import { T as slot } from "../../chunks/index.js";
function Navigation($$payload) {
  $$payload.out += `<nav class="svelte-1updx8o"><div class="logo">LOGO</div> <ul class="svelte-1updx8o"><li class="svelte-1updx8o"><a href="/" class="svelte-1updx8o">Home</a></li> <li class="svelte-1updx8o"><a href="/about" class="svelte-1updx8o">about</a></li> <li class="svelte-1updx8o"><a href="/codeinks" class="svelte-1updx8o">codeinks</a></li> <li class="svelte-1updx8o"><a href="/contact" class="svelte-1updx8o">contact</a></li></ul></nav>`;
}
function Header($$payload) {
  Navigation($$payload);
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-3tb9o6"><p class="svelte-3tb9o6"><a href="/" class="svelte-3tb9o6">Home</a> <a href="/about" class="svelte-3tb9o6">About</a> <a href="/codeinks" class="svelte-3tb9o6">CodeInks</a> <a href="/contact" class="svelte-3tb9o6">Contact</a></p> <p class="svelte-3tb9o6">All Rights belongs to us © ™ ®</p></footer>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
