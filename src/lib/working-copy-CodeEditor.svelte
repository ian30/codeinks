<script lang="ts">
  import { onMount } from 'svelte';
  import { EditorState } from '@codemirror/state';
  import { EditorView, keymap, lineNumbers } from '@codemirror/view';
  import { javascript } from '@codemirror/lang-javascript';
  import { defaultKeymap } from '@codemirror/commands';
  import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';

  let element: HTMLElement;
  
  onMount(() => {
    const state = EditorState.create({
      doc: '// Write your code here',
      extensions: [
        javascript(),
        keymap.of(defaultKeymap),
        lineNumbers(),
        syntaxHighlighting(defaultHighlightStyle),
        EditorView.theme({
          "&": {
            height: "100%",
            fontSize: "14px"
          },
          ".cm-scroller": {
            fontFamily: "monospace"
          },
          ".cm-gutters": {
           backgroundColor: "#1e1e1e",
           color: "#858585",
           border: "none"
         }
        })
      ]
    });

    const view = new EditorView({
      state,
      parent: element
    });

    return () => view.destroy();
  });
</script>

<div bind:this={element} />

<style>
  div {
    height: 100vh;
    width: 100%;
    background: #1e1e1e;
    color: #fff;
    padding: 1rem;
  }

  :global(.cm-editor) {
    height: 100%;
  }
</style>