<template>
  <div class="board-view">
    <BoardTypeSelect
      :select-type="store.viewType"
      @change="changeType"
    />
    <SlotBoard v-if="store.viewType === 'slot'"
    
    />
    <DragBoard v-if="store.viewType === 'drag'"

    />
    <SetBoard v-if="store.viewType === 'set'"

    />
    <ListBoard v-if="store.viewType === 'list'"
    
    />
  </div>
</template>

<script setup lang="ts">
import { useBoardStore } from "@/stores/board";
import DragBoard from "../components/DragBoard/DragBoard.vue";
import SlotBoard from "../components/slotBoard/SlotBoard.vue";
import SetBoard from "../components/setBoard/SetBoard.vue";
import ListBoard from "../components/listBoard/ListBoard.vue";
import BoardTypeSelect from "../components/BoardTypeSelect.vue";

const startType = localStorage.getItem("boardType") || "set"
const store = useBoardStore()
store.setType(startType)
function changeType(e: Event) {
  const select = e.target as HTMLSelectElement
  const newValue = select.value
  store.setType(newValue)
  localStorage.setItem("boardType", newValue)
}
</script>

<style scoped>

</style>