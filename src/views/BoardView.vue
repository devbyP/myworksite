<template>
  <main>
    <TestDrag>test A</TestDrag>
    <div 
      class="board-canvas" 
      @dragenter.prevent.stop="enterZone"
      @dragover.prevent.stop="moveAround"
      @drop="savePosition"
    >
      <TestDrag ref="draging" :style="pStyle">{{dragingItem.title}}</TestDrag>
      <TestDrag
        v-for="ele in boardChildren"
        :key="ele.id"
        :style="{top: ele.posY+'px', left: ele.posX+'px', zIndex:ele.zIndex, position:'absolute'}"
      >{{ele.title}}</TestDrag>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import TestDrag from "../components/TestDrag.vue";
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
const boardChildren = reactive<Item[]>([])
const countId = ref<number>(0)
const dragingItem = reactive<PrepareItem>({
  id: -1,
  title: "",
  posX: 0,
  posY: 0,
  zIndex: 100,
  isDrag: false
})

const pStyle = computed(() => {
  return {
    display: dragingItem.isDrag? "block": "none",
    left: `${dragingItem.posX}px`,
    top: `${dragingItem.posY}px`,
    zIndex: dragingItem.zIndex,
    position: "absolute",
  }
})

const draging = ref(null)

function enterZone(e: DragEvent) {
  const dt = e.dataTransfer
  if (dt) {
    dragingItem.title = dt.getData("title")
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
  dragingItem.posX = ox
  dragingItem.posY = oy
  console.log(ox, oy)
}

function savePosition(e: DragEvent) {
  const dt = e.dataTransfer
  if (dt) {
    const newItem: Item = {
      id: countId.value,
      title: dragingItem.title,
      posX: dragingItem.posX,
      posY: dragingItem.posY,
      zIndex: (countId.value + 1) * 10
    }
    boardChildren.push(newItem)
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