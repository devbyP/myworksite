import type { Component } from 'vue'

export default class DragTool {
  private generate: Component
  constructor(com: Component) {
    this.generate = com
  }

  getComponent(): Component {
    return this.generate
  }
}
