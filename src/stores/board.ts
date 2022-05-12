import { defineStore } from 'pinia'

interface Vector2 {
  posX: number
  posY: number
}

interface Vector3 extends Vector2 {
  posZ: number
}

interface PinItem {
  component: string
  type?: string
  size?: string
  position: Vector3
}

interface BoardState {
  pinItems: PinItem[],
}

export const useBoardStore = defineStore({
  id: 'board',
  state: (): BoardState => ({
    pinItems: [],
  }),
  getters: {
    pinCount: (state) => state.pinItems.length,
    getCurrentZIndex: (state) => state.pinItems.length * 10,
    getNextZIndex: (state) => (state.pinItems.length + 1) * 10,
  },
  actions: {
    newPin: (component: string) => {
      
    }
  }
})
