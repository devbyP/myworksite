<template>
<div class="side-bar">
  <div class="quick-action">
    <ul class="quick-ation-list">
      <SideBarItem>new project</SideBarItem>
      <SideBarItem>new note</SideBarItem>
    </ul>
  </div>

  <div class="section-divider"></div>

  <div class="quick-item">
    <RouterView name="sideBarTools" />
  </div>

</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideBarItem from './items/SideBarItem.vue';

</script>

<style lang="scss" scoped>
/***** spacing style ******/
.section-divider {
  margin: 5px 0;
}

/** local font size */
.side-bar {
  font-size: 15px;
}

/** general style(on this component) */
.section-divider {
  width: 50px;
  border-bottom: 1px solid $color-text;
}
.side-bar {
  padding: 0 10px;
  width: 70px;
  display: flex;
  flex-direction: column;
  background-color: $color-background-hard;
  border-top: 1px solid $color-border;
  border-right: 1px solid $color-border;
}

</style>
