<script lang="ts">
  import { onMount } from 'svelte';
  import { EditorState } from '@codemirror/state';
  import { EditorView, keymap, lineNumbers } from '@codemirror/view';
  import { javascript } from '@codemirror/lang-javascript';
  import { html } from '@codemirror/lang-html';
  import { css } from '@codemirror/lang-css';
  import { history, historyKeymap, defaultKeymap } from '@codemirror/commands';
  import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';
  import {materialLight} from '@ddietr/codemirror-themes/material-light';
  import {materialDark} from '@ddietr/codemirror-themes/material-dark';
  import {solarizedLight} from '@ddietr/codemirror-themes/solarized-light';
  import {solarizedDark} from '@ddietr/codemirror-themes/solarized-dark';
  import {dracula} from '@ddietr/codemirror-themes/dracula';
  import {githubLight} from '@ddietr/codemirror-themes/github-light';
  import {githubDark} from '@ddietr/codemirror-themes/github-dark';
  import {aura} from '@ddietr/codemirror-themes/aura';
  import {tokyoNight} from '@ddietr/codemirror-themes/tokyo-night';
  import {tokyoNightStorm} from '@ddietr/codemirror-themes/tokyo-night-storm';
  import {tokyoNightDay} from '@ddietr/codemirror-themes/tokyo-night-day';
  import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete';
  import { browser } from '$app/environment';
  import JSZip from 'jszip';
  import FileSaver from 'file-saver';
  import { abbreviationTracker } from "@emmetio/codemirror6-plugin";
  import Console from "$lib/Console.svelte";
  let showConsole = false;

  let currentTheme = tokyoNight;
  // export functions:
  function exportSingle(content: string, filename: string) {
    const blob = new Blob([content], { type: 'text/plain' });
    FileSaver.saveAs(blob, filename);
  }

  async function exportAll() {
   const zip = new JSZip();
   zip.file("index.html", htmlValue);
   zip.file("styles.css", cssValue);
   zip.file("script.js", jsValue);
   
   const blob = await zip.generateAsync({ type: "blob" });
   saveAs(blob, "project.zip");
 }
  //resizing preview/code:
  let isResizing = false;
  let splitPosition = 50;

  function startResize(e: MouseEvent) {
    isResizing = true;
    e.preventDefault();
  }

  function handleResize(e: MouseEvent) {
    if (!isResizing) return;
    const container = document.querySelector('.container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      splitPosition = Math.min(Math.max(newPosition, 20), 80); // Limit range
    }
  }

  function stopResize() {
    isResizing = false;
  }

  let htmlElement: HTMLElement;
  let cssElement: HTMLElement;
  let jsElement: HTMLElement;
  
  let htmlValue = '<!-- HTML here -->';
  let cssValue = '/* CSS here */';
  let jsValue = '// JS here';

  function setupEditor(element: HTMLElement, language: any, initialValue: string, onChange: (value: string) => void, storageKey: string) {
    const state = EditorState.create({
      doc: initialValue,
      extensions: [
        currentTheme,
        language(),
        abbreviationTracker(),
        history(),
        keymap.of([...defaultKeymap, ...closeBracketsKeymap, ...historyKeymap]),
        lineNumbers(),
        syntaxHighlighting(defaultHighlightStyle),
        closeBrackets(),
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            const newValue = update.state.doc.toString();
            onChange(newValue);
            localStorage.setItem(storageKey, newValue);
          }
        }),
      ]
    });

    return new EditorView({ state, parent: element });
  }

  function changeTheme(theme: string) {
    currentTheme = theme;
    // Recreate editors with new theme
    htmlView?.destroy();
    cssView?.destroy();
    jsView?.destroy();
    
    htmlView = setupEditor(htmlElement, html, htmlValue, v => htmlValue = v, 'htmlCode');
    cssView = setupEditor(cssElement, css, cssValue, v => cssValue = v, 'cssCode');
    jsView = setupEditor(jsElement, javascript, jsValue, v => jsValue = v, 'jsCode');
  }

  $: previewContent = `
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

  onMount(() => {
    if(browser) {
      htmlValue = localStorage.getItem('htmlCode') || htmlValue;
      cssValue = localStorage.getItem('cssCode') || cssValue;
      jsValue = localStorage.getItem('jsCode') || jsValue;
    }


    const htmlView = setupEditor(htmlElement, html, htmlValue, v => {
      htmlValue = v;
      if (browser) localStorage.setItem('htmlCode', v);
    }, 'htmlCode');
    
    const cssView = setupEditor(cssElement, css, cssValue, v => {
      cssValue = v;
      if (browser) localStorage.setItem('cssCode', v);
    }, 'cssCode');

    const jsView = setupEditor(jsElement, javascript, jsValue, v => {
      jsValue = v;
      if (browser) localStorage.setItem('jsCode', v);
    }, 'jsCode');
    
    return () => {
      htmlView.destroy();
      cssView.destroy();
      jsView.destroy();
    };
  });
</script>
<div id="tools" class="top_tools">
  <button on:click={() => showConsole = !showConsole}>Toggle Console</button>
  <button on:click={() => exportSingle(htmlValue, 'index.html')}>Export HTML</button>
  <button on:click={() => exportSingle(cssValue, 'styles.css')}>Export CSS</button>
  <button on:click={() => exportSingle(jsValue, 'script.js')}>Export JS</button>
  <button on:click={exportAll}>Export All</button>
  <Console visible={showConsole} />
</div>

<!-- <div class="theme-selector">
  <select on:change={(e) => changeTheme(eval(e.target.value))}>
    <option value="oneDark">One Dark</option>
    <option value="materialDark">Material Dark</option>
    <option value="tokyoNightStorm">Tokyo Night Storm</option>
  </select>
</div> -->
<div class="container" 
     on:mousemove={handleResize} 
     on:mouseup={stopResize} 
     on:mouseleave={stopResize}>
  <div class="editors" style="flex-basis: {splitPosition}%">
    <div class="editor" bind:this={htmlElement} />
    <div class="editor" bind:this={cssElement} />
    <div class="editor" bind:this={jsElement} />
  </div>
  <div class="resize-handle" on:mousedown={startResize}></div>
  <div class="preview" style="flex-basis: {100 - splitPosition}%">
    <iframe title="preview" srcdoc={previewContent}></iframe>
  </div>
</div>

<style>
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #1e1e1e;
  }

  .editors {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    min-width: 0;
  }

  .editor {
    max-height: 33vh;
    overflow: scroll;
    border-bottom: 1px dotted #777;
    margin-bottom: 1rem;
  }
  .preview {
    min-width: 0;
    background: white;
  }

  .resize-handle {
    width: 6px;
    background: #333;
    cursor: col-resize;
    flex: 0 0 auto;
  }

  .resize-handle:hover {
    background: #444;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
 button {
   margin-left: 5px;
   padding: 5px 10px;
   background: #333;
   color: white;
   border: 1px solid #444;
   border-radius: 4px;
   cursor: pointer;
 }

 button:hover {
   background: #444;
 }
 .top_tools {
  display: none;
  margin-bottom: 1rem;
 }
</style>