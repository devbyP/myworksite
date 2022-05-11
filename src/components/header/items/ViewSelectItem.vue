<template>
  <li
    @click.prevent="toPage"
    class="view-select" 
    :class="{active: isActive}">
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
.view-select {
  padding: 5px 10px;
  cursor: pointer;
}
.view-select:hover {
  background-color: rgb(255, 255, 255, .2);
}
.isActive {
  background-color: rgb(255, 255, 255, .2);
  cursor: initial;
}

</style>