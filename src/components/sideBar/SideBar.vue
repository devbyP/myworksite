<template>
<div class="side-bar">
  <ul class="quick-ation">
    <li>plus</li>
  </ul>
  <div class="section-divider"></div>
  <ul class="quick-item">
    <RouterView name="sideBarTools" />
  </ul>
  <div class="section-divider"></div>
  <ul class="view-selector">
    <ViewSelectorItemVue page-name="board" />
    <ViewSelectorItemVue page-name="project" />
  </ul>
</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import ViewSelectorItemVue from './ViewSelectorItem.vue';

</script>

<style scoped>
/***** spacing style ******/

/* gab on each item */
ul li {
  margin: 7px 0;
}
.section-divider {
  margin: 5px 0;
}

/** general style(on this component) */
.section-divider {
  width: 50px;
  border-bottom: 1px solid var(--color-text);
}

li:hover {
  background-color: rgb(255, 255, 255, .2);
}

.side-bar {
  padding: 0 10px;
  width: 70px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-soft);
  border-right: 1px solid var(--color-border);
}

</style>
