import type DragableFree  from './DragableFree'
import type { Vector2, Vector3 } from './Vector'

export default class DragTool implements DragableFree {
  public position: Vector3
  public component: string

  constructor (component?: string, position?: Vector3) {
    this.position = position ? position : {x:0, y:0, z:0}
    this.component = component ? component: ""
  }

  public move (pos: Vector2) {
    this.position.x = pos.x
    this.position.y = pos.y
  }

  public arrangeZ (z: number) {
    this.position.z = z
  }
}
