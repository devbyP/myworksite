<template>
  <div class="window-show-config">
    <h3 class="box-title">Window Show Config</h3>
    <div class="action-wrapper">
      <div class="action">
        <button class="action-btn"
          @click="triggerAll(false)"
          @mouseover="showDetail(0)"
          @mouseout="closeDetail(0)"
        >-</button>
        <div class="detail-box-wrapper" :class="{show: isShow[0]}">
          <span class="detail">collapse all</span>
        </div>
      </div>
      <div class="action">
        <button class="action-btn"
          @click="triggerAll(true)"
          @mouseover="showDetail(1)"
          @mouseout="closeDetail(1)"
        >+</button>
        <div class="detail-box-wrapper" :class="{show: isShow[1]}">
          <span class="detail">open all</span>
        </div>
      </div>
    </div>
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
import { reactive } from 'vue';
import type { Window } from '../type';

const { windows } = defineProps<{
  windows: Window[]
}>()
const emit = defineEmits<{
  (e: 'toggle', window: string, index: number): void
  (e: "openAll"): void
  (e: "closeAll"): void
}>()

function trigger(wName: string, i: number) {
  emit("toggle", wName, i)
}

function triggerAll(flag: boolean) {
  if (flag) {
    return emit("openAll")
  }
  emit("closeAll")
}

const isShow = reactive<[boolean, boolean]>([false, false])

function showDetail (index: number) {
  isShow[index] = true
}
function closeDetail (index: number) {
  isShow[index] = false
}

</script>

<style lang="scss" scoped>
.box-title {
  margin-bottom: 10px;
}
.window-show-config {
  display: flex;
  flex-direction: column;
  background-color: $color-background-soft;
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
      background-color: $color-text;
    }
  }
  &:hover .name::after {
    width: $name-n-box-space;
  }
}
.action-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  .action {
    & .detail-box-wrapper {
      position: absolute;
      width: 100px;
      top: -30px;
      left: 26px;
      & .detail {
        position: absolute;
        display: none;
        background-color: $color-background;
        border-radius: 6px;
        padding: 3px 7px;
        z-index: 120;
        pointer-events: none;
      }
      &.show .detail {
        display: block;
      }
    }
    .action-btn {
      background-color: transparent;
      color: $color-text;
      font-size: 1.2rem;
      cursor: pointer;
      border: 1px solid #ffffff63;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      width: 22px;
      height: 22px;
      margin-left: 8px;
    }
  }
}

</style>