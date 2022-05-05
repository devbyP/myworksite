<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import HeaderNavBarVue from './components/HeaderNavBar.vue';
import SideBar from './components/sideBar/SideBar.vue';
</script>

<template>
  <header>
    <HeaderNavBarVue/>
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

.site-wrapper {
  display: flex;
  max-width: var(--site-max-width);
  margin: 0 auto;
  background-color: var(--color-background-soft);
  min-height: calc(100vh - var(--header-size));
}

</style>
