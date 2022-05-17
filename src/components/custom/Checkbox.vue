<template>
  <div class="check-box" :class="{checked: checked}">
    <div class="switch"></div>
  </div>
</template>

<script setup lang="ts">
const { checked } = defineProps<{checked: boolean}>()

</script>

<style lang="scss" scoped>
.check-box {
  position: relative;
  width: 26px;
  height: 16px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  & .switch {
    position: absolute;
    top:1px;
    left: 1px;
    transform: translateX(0);
    transition: transform .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
  &.checked {
    background-color: greenyellow;
    & .switch {
      transform: translateX(10px);
    }
  }
}
</style>