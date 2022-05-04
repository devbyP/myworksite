<script setup lang="ts">
const { productName } = defineProps<{
  productName: string
}>()
</script>

<template>
  <div class="product-mix">
    <h3>{{ productName }}</h3>
  </div>
</template>

<style scoped>

</style>