<template>
  <div>
    <select>
      <option value="set" :selected="type === 'set'">set</option>
      <option value="list" :selected="type === 'list'">list</option>
      <option value="slot" :selected="type === 'slot'">slot</option>
      <option value="drag" :selected="type === 'drag'">drag</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { allType } from '@/stores/board';

const { selectType } = defineProps<{selectType: string}>()
let type = selectType
if (!allType.has(selectType)) {
  type = "set"
}
</script>

<style scoped>

</style>