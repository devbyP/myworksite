<template>
<div
  draggable="true" 
  class="test"
  @dragstart="startDrag"
>
  <p><slot></slot></p>
</div>
</template>

<script setup lang="ts">
function startDrag(e: DragEvent) {
  const dt = e.dataTransfer
  if (dt !== null) {
    dt.setData("new", "this is title")
    dt.setDragImage(document.createElement('div'), 0, 0)
  }
}

</script>

<style scoped>
.test {
  z-index: 10;
  border: 1px solid green;
  width: 100px;
  height: 100px;
}
</style>