import { Model } from './model-manager';

export interface WowObject {
  id: string
  model?: Model
  position: [number, number, number]
  rotation: [number, number, number]
  scaleFactor: number
  children: WowObject[]
  type: string
}
