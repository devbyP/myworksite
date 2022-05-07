<template>
  <main>
    <TestDrag>Simple Note</TestDrag>
    <div 
      class="board-canvas" 
      @dragenter.prevent="enterZone"
      @dragover.prevent="moveAround"
      @drop="savePosition"
    >
      <BoardPin ref="draging" :style="pStyle" :pinId="-1"></BoardPin>
      <BoardPin
        v-for="ele in boardChildren"
        :key="ele.id"
        :style="{top: ele.posY+'px', left: ele.posX+'px', zIndex:ele.zIndex, position:'absolute'}"
        :pinId="ele.id"
      ></BoardPin>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref, computed, type CSSProperties } from "vue";
import TestDrag from "../components/TestDrag.vue";
import BoardPin from "../components/BoardPin.vue";
interface Item {
  id: number
  title: string
  posX: number
  posY: number
  zIndex: number
}

interface PrepareItem extends Item {
  isDrag: boolean
}
const boardChildren = reactive<{[key: number]: Item}>({})
const countId = ref<number>(0)
const dragingItem = reactive<PrepareItem>({
  id: -1,
  title: "",
  posX: 0,
  posY: 0,
  zIndex: 100,
  isDrag: false
})

const pStyle = computed<CSSProperties>(() => {
  return {
    display: dragingItem.isDrag? "block": "none",
    left: `${dragingItem.posX}px`,
    top: `${dragingItem.posY}px`,
    zIndex: dragingItem.zIndex,
    position: "absolute",
  }
})
let pendingDelete: Item

const draging = ref(null)

function enterZone(e: DragEvent) {
  const dt = e.dataTransfer
  if (!dt) {
    return
  }
  const newData = dt.getData("new")
//  const setData = dt.getData("set")
  if (newData) {
    dragingItem.title = newData
    dragingItem.isDrag = true
  }
}

function moveAround(e: DragEvent) {
  if (!(e.currentTarget instanceof Element)) {
    return
  }
  const rect = e.currentTarget.getBoundingClientRect()
  const ox = e.clientX - rect.left
  const oy = e.clientY - rect.top
  if (ox < 0 || oy < 0) {
    return 
  }
  const dt = e.dataTransfer
  if (!dt) {
    return 
  }
  if (dt.getData("new")) {
    dragingItem.posX = ox
    dragingItem.posY = oy
  }
  if (dt.getData("set")) {
    const id = dt.getData("set")
    const bc = boardChildren[parseInt(id)]
    bc.posX = ox
    bc.posY = oy
  }
}

function savePosition(e: DragEvent) {
  const dt = e.dataTransfer
  if (!dt) {
    return
  }
  if (dt.getData("new")) {
    const newItem: Item = {
      id: countId.value,
      title: dragingItem.title,
      posX: dragingItem.posX,
      posY: dragingItem.posY,
      zIndex: (countId.value + 1) * 10
    }
    boardChildren[newItem.id] = newItem
    countId.value++
    dragingItem.title = ""
    dragingItem.isDrag = false
    dragingItem.posX = 0
    dragingItem.posY = 0
  }
}
</script>

<style scoped>
main {
  padding: 0;
  width: 100%;
  height: calc(100vh - var(--header-size));
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  overflow: auto;
}
.board-canvas {
  width: 100%;
  height: 100%;
  background-color: var(--color-board-background);
  position: relative;
}
</style>