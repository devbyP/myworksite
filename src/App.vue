<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNavBarVue from './components/header/HeaderNavBar.vue';
import SideBar from './components/sideBar/SideBar.vue';
import ViewSelectNav from './components/header/ViewSelectNav.vue';
</script>

<template>
  <header>
    <div class="header-width-wrapper">
      <HeaderNavBarVue />
      <ViewSelectNav />
    </div>
  </header>
  <div class="site-wrapper">
    <SideBar />
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

header {
  max-height: var(--header-size);
  background-color: var(--color-background);
}

.header-width-wrapper {
  max-width: var(--site-max-width);
  margin: 0 auto;
}

.site-wrapper {
  display: flex;
  max-width: var(--site-max-width);
  margin: 0 auto;
  background-color: var(--color-background-soft);
  min-height: calc(100vh - var(--header-size));
}

</style>
