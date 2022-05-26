<template>
  <div class="drag-board"
    @dragenter.prevent="enterZone"
    @dragover.prevent="moveAround"
    @drop="savePosition"
  >

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
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

<style lang="scss" scoped>
.drag-board {
  min-width: 100%;
  min-height: 100%;
  position: relative;
}

</style>