<template>
  <div class="project-tree">
    <ul
      class="structure-tree-list"
    >
      <li
        class="tree-item"
        v-for="(t, index) in tree"
        :key="index"
      >{{t}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const {tree} = defineProps<{tree: string[]}>()

</script>

<style scoped>
  
</style>