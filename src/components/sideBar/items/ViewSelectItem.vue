<template>
<SideBarItem
  class="to-view" :class="{active: isActive}"
  @click.stop="toPage"
>
  {{ showPageName }}
</SideBarItem>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import SideBarItem from './SideBarItem.vue';

const router = useRouter()
const { pageName } = defineProps<{pageName: string}>()

function capitalize(str: string): string {
  return str.charAt(0).toLocaleUpperCase() + str.substring(1)
}
const showPageName = capitalize(pageName)

const isActive = computed(() => {
  return useRoute().name === pageName
})
function toPage() {
  if (isActive.value) {
    return
  }
  router.push({
    name: pageName
  })
}
</script>

<style scoped>
.active {
  cursor: default;
}
</style>