<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>

    </nav>
  </header>
  <div class="site-wrapper">
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

header {
  min-height: var(--section-gap);
  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 1024px;
  border: 1px solid black;
}

.site-wrapper {
  width: 1024px;
  margin: 0 auto;
  border: 1px solid black;
}

</style>
