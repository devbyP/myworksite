import { defineStore } from "pinia";

export interface Window {
  name: string,
  enable: boolean
}

interface BoardState {
  windows: Window[],
  configOpen: boolean,
}

export const useSetBoardStore = defineStore({
  id: "setBoard",
  state: (): BoardState => ({
    windows: [
      {
        name: "feed section",
        enable: true
      },
      {
        name: "project section",
        enable: false
      },
      {
        name: "budget section",
        enable: false
      },
      {
        name: "ideas section",
        enable: false
      },
      {
        name: "voting section",
        enable: false
      },
    ],
    configOpen: true,
  }),
  getters: {
    feedSection: (state) => state.windows[0],
    projectSection: (state) => state.windows[1],
    budgetSection: (state) => state.windows[2],
    ideasSection: (state) => state.windows[3],
    votingSection: (state) => state.windows[4],
  },
  actions: {
    toggleWindow(name: string): boolean {
      for (let i = 0; i < this.windows.length; i++) {
        if (name === this.windows[i].name) {
          this.windows[i].enable = !this.windows[i].enable
          return true
        }
      }
      return false
    },
    toggleAll(open: boolean) {
      for (let i = 0; i < this.windows.length; i++) {
        this.windows[i].enable = open
      }
    }
  }
})