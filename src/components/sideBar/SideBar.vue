<template>
<div class="side-bar">
  <ul class="quick-ation">
    <SideBarItem>new project</SideBarItem>
    <SideBarItem>new note</SideBarItem>
  </ul>

  <div class="section-divider"></div>

  <ul class="quick-item">
    <RouterView name="sideBarTools" />
  </ul>

  <div class="section-divider"></div>

  <ul class="view-selector">
    <ViewSelectItemVue page-name="board" />
    <ViewSelectItemVue page-name="project" />
  </ul>
</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import ViewSelectItemVue from './items/ViewSelectItem.vue';
import SideBarItem from './items/SideBarItem.vue';

</script>

<style scoped>
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
  border-bottom: 1px solid var(--color-text);
}
.side-bar {
  padding: 0 10px;
  width: 70px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-hard);
  border-right: 1px solid var(--color-border);
}

</style>
