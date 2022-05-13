import type { Vector3 } from "./Vector";
import type { Component } from 'vue';

export default interface DragableFree {
  position: Vector3
  component: Component
}
