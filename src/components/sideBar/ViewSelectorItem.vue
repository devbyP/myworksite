<template>
<li
  class="to-view" :class="{active: isActive}"
  @click.stop="toPage"
>
  {{ showPageName }}
</li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

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
.to-view {
  cursor: pointer;
  font-size: .8rem;
}
.active {
  cursor: default;
}
</style>