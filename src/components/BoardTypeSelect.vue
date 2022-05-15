<template>
  <div class="type-select" :class="{open: state.open}" @click="trigger">
    <div class="selected">{{state.selected}}</div>
    <ul class="type-options" v-show="state.open">
      <li v-for="o in options" @click="selectType(o)">{{o}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { isAllowType } from '@/stores/board';

const emit = defineEmits<{(e: "clickSelect", type:string): void}>()
const { selectedType, options } = defineProps<{
  selectedType: string
  options: string[]
}>()

const state = reactive({
  selected:selectedType,
  open:false
})

if (!isAllowType(selectedType)) {
  state.selected = "set"
}

function trigger() {
  state.open = !state.open
}
function selectType (t: string) {
  emit("clickSelect", t)
  if (isAllowType(t)) {
    state.selected = t
  }
}
</script>

<style lang="scss" scoped>
$arrow-top: 44%;
$arrow-top-open: 20%;
$arrow-width: 12px;
.type-options {
  position: absolute;
  cursor: pointer;
  left:0;
  margin-top: 2px;
  width: 100%;
  background-color: #ffffff20;
  padding: 5px;
  & li{
    margin-top: 2px;
    &:hover {
      background-color: #ffffff50;
    }
  }
}
.type-select {
  position: absolute;
  display: block;
  cursor: pointer;
  top: 10px;
  right: 10px;
  background-color: transparent;
  width: calc(3rem + $arrow-width);
  text-align: right;
  padding-bottom: 3px;
  padding-right: 5px;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    top: $arrow-top;
    border: calc($arrow-width / 2) solid transparent;
    border-color: var(--color-text) transparent transparent transparent;
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: $arrow-width;
    border-bottom: 1px solid var(--color-text);
    bottom: 0;
    transition: width .2s ease-out;
  }
  &:hover::after {
    width: 50%;
  }
  &.open {
    &::before {
      border-color: transparent transparent transparent var(--color-text);
      top:$arrow-top-open; 
      left: 1px;
    }
    &::after {
      width: 100%;
    }
  }
}

</style>