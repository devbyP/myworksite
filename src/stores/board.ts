import { defineStore } from 'pinia' 
import DragItem from '@/assets/classes/DragItem'
import type { Vector2, Vector3 } from '@/assets/classes/Vector'
import type { Component } from 'vue'

type ID = string

class PinItem extends DragItem {
  order: number
  constructor(component: Component, order: number, pos?: Vector3) {
    super(component, pos)
    this.order = order
  }
}

interface BoardState {
  pinItems: {[keys: ID]: PinItem},
  dragging?: DragItem
}

// list of allow element in board.
const componentList: Set<Component> = new Set([])

export const useBoardStore = defineStore({
  id: 'board',
  state: (): BoardState => ({
    pinItems: {},
  }),
  getters: {
    totalPin: (state) => Object.keys(state.pinItems).length,
  },
  actions: {
    newPin (id: ID, component: Component, pos: Vector2) {
      if (componentList.has(component)) {
        const pos3 = {x: pos.x, y: pos.y, z: this._getNextZIndex()}
        const item = new PinItem(component, this.totalPin + 1, pos3)
        this.pinItems[id] = item
      }
    },
    deletePin (id: ID) {
      delete this.pinItems[id]
    },
    movePin (id: ID, vec: Vector2) {
      const choosePin = this.pinItems[id]
      choosePin.move(vec)
      choosePin.arrangeZ(this._getCurrentZIndex())
      this._arrangeZ(id)
    },
    _getCurrentZIndex (): number {
      return this.totalPin * 10
    },
    _getNextZIndex (): number {
      return (this.totalPin + 1) * 10
    },
    _arrangeZ (id: ID) {
      const choosePin = this.pinItems[id]
      const keys = Object.keys(this.pinItems)
      for (let i = 0; i < keys.length; i++) {
        const currentId = keys[i]
        if (id === currentId) continue
        const current = this.pinItems[currentId]
        if (current.order > choosePin.order)  {
          current.order - 1
          current.arrangeZ((current.order) * 10)
        }
      }
      choosePin.arrangeZ(this._getCurrentZIndex())
      choosePin.order = this.totalPin
    },
  }
})
