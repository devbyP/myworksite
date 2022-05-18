<template>
  <div class="view-nav">
    <ViewSelectItem
      v-for="(view, index) in settingJson.views"
      :key="index"
      :page-name="view"
    />
  </div>
</template>

<script setup lang="ts">
import settingJson from '../../settings/setting.json'
import ViewSelectItem from './items/ViewSelectItem.vue'

</script>

<style lang="scss" scoped>
.view-nav {
  display: flex;
  height: 30px;
  max-width: $site-max-width;
  margin: 0 auto;
}
</style>