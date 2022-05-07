<template>
  <div class="board-pin" :style="style">
    <div
      class="board-item"
      draggable="true"
      @dragstart="inBoardDrag"
    >
      <slot>
        <div>
          Simple Note
          <input type="text"/>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
const { style, pinId } = defineProps<{style: CSSProperties, pinId: number}>()

function inBoardDrag(e: DragEvent) {
  const dt = e.dataTransfer
  if (dt) {
    dt.setData("set", pinId.toString())
    dt.setDragImage(document.createElement("div"), 0, 0)
  }
}

</script>

<style scoped>
.board-item {
  background-color: white;
  padding: 15px 20px;
  color: black;
  cursor: pointer;
}
</style>