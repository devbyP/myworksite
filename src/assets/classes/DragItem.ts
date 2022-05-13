import type DragableFree  from './DragableFree'
import type { Vector2, Vector3 } from './Vector'
import type { Component } from 'vue'
import DragItemVue from '@/components/DragBoard/dragablePin/DragItem.vue'

export default class DragItem implements DragableFree {
  public position: Vector3
  public component: Component

  constructor (component: Component, position?: Vector3) {
    this.position = position ? position : {x:0, y:0, z:0}
    this.component = component ? component: DragItemVue
  }

  public move (pos: Vector2) {
    this.position.x = pos.x
    this.position.y = pos.y
  }

  public arrangeZ (z: number) {
    this.position.z = z
  }
}
