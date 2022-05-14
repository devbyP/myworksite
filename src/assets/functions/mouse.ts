import type { Vector2 } from "../classes/Vector"

export function getRelativeMousePosition (e: MouseEvent): Vector2 | null {
  const target = e.currentTarget
  if (!(target instanceof Element)) {
    return null
  }
  const rect = target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  if (x < 0 || y < 0) {
    return null
  }
  return {x, y}
}