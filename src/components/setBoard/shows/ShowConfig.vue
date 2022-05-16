<template>
  <div class="window-show-config">
    <h3 class="box-title">Window Show Config</h3>
    <div v-for="(window, i) in windows"
      class="show-conf"
      :key="window.name"
      @click="trigger(window.name, i)"
    >
      <span class="name">{{ window.name }}</span>
      <Checkbox :checked="window.enable" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from '@/components/custom/Checkbox.vue'
import type { Window } from '../type';

const { windows } = defineProps<{
  windows: Window[]
}>()
const emit = defineEmits<{
  (e: 'toggle', window: string, index: number): void
}>()

function trigger(wName: string, i: number) {
  emit("toggle", wName, i)
}

</script>

<style lang="scss" scoped>
.box-title {
  margin-bottom: 10px;
}
.window-show-config {
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 10px 20px;
  z-index: 100;
}
$name-n-box-space: 25px;
.show-conf {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 4px;
  & .name {
    margin-right: $name-n-box-space;
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: calc(0px - $name-n-box-space - 2px);
      top: 50%;
      width: 0px;
      height: 1px;
      background-color: var(--color-text);
    }
  }
  &:hover .name::after {
    width: $name-n-box-space;
  }
}

</style>