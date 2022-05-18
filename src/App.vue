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
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

header {
  max-height: $header-size;
  background-color: $color-background;
}

.header-width-wrapper {
  max-width: $site-max-width;
  margin: 0 auto;
}

.site-wrapper {
  display: flex;
  max-width: $site-max-width;
  margin: 0 auto;
  background-color: $color-background-soft;
  min-height: calc(100vh - $header-size);
}

main {
  padding: 0;
  width: 100%;
  height: calc(100vh - $header-size);
  border: 1px solid $color-border;
  border-left: none;
  overflow: auto;
}

</style>
