import { defineStore } from "pinia";

export const allType = new Set(["set", "list", "slot", "drag"]);

export const useBoardStore = defineStore({
  id: "board",
  state: () => ({
    _type: "",
  }),
  getters: {
    viewType: (state) => state._type
  },
  actions: {
    setType(t: string) {
      if (allType.has(t)) {this._type = t}
    }
  }
})
