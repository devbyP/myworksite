<template>
  <main>
    <DragBoard></DragBoard>
  </main>
</template>

<script setup lang="ts">
import DragBoard from "../components/DragBoard/DragBoard.vue";

</script>

<style scoped>
main {
  padding: 0;
  width: 100%;
  height: calc(100vh - var(--header-size));
  border: 1px solid var(--color-border);
  border-left: none;
  overflow: auto;
}
</style>