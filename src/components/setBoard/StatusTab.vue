<template>
  <div class="status-tab">
    <span class="title">{{ title }}</span>
    <slot></slot>
    <button class="toggle-btn" @click.prevent="emit('toggle')">{{ isOpen? "-": "+" }}</button>
  </div>
</template>

<script setup lang="ts">
const { title, isOpen } = defineProps<{title: string, isOpen: boolean}>()
const emit = defineEmits<{
  (e: "toggle"): void
}>()

</script>

<style lang="scss" scoped>
.status-tab {
  display: flex;
  width: 100%;
  height: 28px;
  justify-content: space-between;
  padding: 5px 10px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: $color-border;
  .toggle-btn {
    background-color: transparent;
    border: 1px solid $color-text;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    color: $color-text;
  }
}
</style>