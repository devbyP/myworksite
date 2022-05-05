<template>
  <main>
    <div 
      class="board-canvas" 
      @dragenter.prevent="enterZone"
      @dragleave.prevent="leaveZone"
      @dragover.prevent="moveAround"
      @drop.prevent="savePosition"
    ></div>
  </main>
</template>

<script setup lang="ts">
function enterZone(e: DragEvent) {}
function leaveZone(e: DragEvent) {}
function moveAround(e: DragEvent) {}
function savePosition(e: DragEvent) {}
</script>

<style scoped>
main {
  padding: 0;
  width: 100%;
  height: calc(100vh - var(--header-size));
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  overflow: auto;
}
.board-canvas {
  width: 100%;
  height: 100%;
  background-color: var(--color-board-background);
}
</style>