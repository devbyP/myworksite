<template>
  <div class="status-tab">
    {{ title }}
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
  width: 500px;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 7px 7px 0 0;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: var(--color-text);
  background-color: blue;
  & .toggle-btn {
    width: 22px;
    height: 22px;
  }
  @media only screen and (max-width: $mobile-width) { 
    border-radius: 0px;
  }
}
</style>