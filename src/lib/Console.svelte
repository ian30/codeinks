<!-- Console.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    export let visible = false;
    let x = 20;
    let y = 20;
    let isDragging = false;
    let consoleOutput: string[] = [];
  
    function handleMouseDown(e: MouseEvent) {
      isDragging = true;
    }
  
    function handleMouseMove(e: MouseEvent) {
      if (isDragging) {
        x += e.movementX;
        y += e.movementY;
      }
    }
  
    function handleMouseUp() {
      isDragging = false;
    }
  
    onMount(() => {
      // Capture console.log
      const originalLog = console.log;
      console.log = (...args) => {
        consoleOutput = [...consoleOutput, args.join(' ')];
        originalLog(...args);
      };
  
      return () => {
        console.log = originalLog;
      };
    });
  </script>
  
  {#if visible}
    <div 
      class="console"
      style="left: {x}px; top: {y}px;"
      on:mousedown={handleMouseDown}
    >
      <div class="header">Console (drag me)</div>
      <div class="output">
        {#each consoleOutput as line}
          <div class="line">{line}</div>
        {/each}
      </div>
    </div>
  {/if}
  
  <svelte:window 
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
  />
  
  <style>
    .console {
      position: fixed;
      width: 300px;
      height: 200px;
      background: #1e1e1e;
      border: 1px solid #333;
      border-radius: 4px;
      z-index: 1000;
    }
  
    .header {
      padding: 8px;
      background: #333;
      cursor: move;
    }
  
    .output {
      padding: 8px;
      height: calc(100% - 40px);
      overflow-y: auto;
      color: #fff;
      font-family: monospace;
    }
  
    .line {
      margin: 4px 0;
    }
  </style>