<template>
  <div class="product-mix">
    <h3>{{ props.productName }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{productName: string}>()
</script>

<style lang="scss" scoped>

</style>