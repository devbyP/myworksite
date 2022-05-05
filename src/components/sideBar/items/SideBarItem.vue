<template>
<li class="side-item">
  <slot></slot>
</li>
</template>

<script setup lang="ts">
const { hoverTitle, hoverDesc } = defineProps<{
  hoverTitle?: string
  hoverDesc?: string
}>()

</script>

<style scoped>

.side-item {
  margin: 5px 0;
  cursor: pointer;
}

.side-item:hover {
  background-color: rgb(255, 255, 255, .2);
}


</style>