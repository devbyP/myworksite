<template>
  <div class="board-view">
    <div class="work-area">
      <SetBoard v-if="store.viewType === 'set'"/>
      <ListBoard v-if="store.viewType === 'list'"/>
      <SlotBoard v-if="store.viewType === 'slot'"/>
      <DragBoard v-if="store.viewType === 'drag'"/>
    </div>
    <div class="right-tools-bar">
      <BoardTypeSelect
        :selected-type="store.viewType"
        :options="typeOptions"
        @click-select="changeType"
        class="type-select-pos"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBoardStore, allType } from "@/stores/board";
import DragBoard from "../components/dragBoard/DragBoard.vue";
import SlotBoard from "../components/slotBoard/SlotBoard.vue";
import SetBoard from "../components/setBoard/SetBoard.vue";
import ListBoard from "../components/listBoard/ListBoard.vue";
import BoardTypeSelect from "../components/BoardTypeSelect.vue";

const startType = localStorage.getItem("boardType") || "set"
const store = useBoardStore()

const typeOptions: string[] = []
allType.forEach(t => {typeOptions.push(t)})

// set default type.
store.setType(startType)

function changeType(t: string) {
  if (store.setType(t)) {
    localStorage.setItem("boardType", t)
  }
}
</script>

<style lang="scss" scoped>
.board-view {
  display: flex;
}
.work-area {
  flex-grow: 1;
}
.right-tools-bar {
  height: $board-height;
  width: 70px;
  border-left: 1px solid $color-border;
  .type-select-pos{
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

</style>