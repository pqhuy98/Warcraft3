import { EulerRotation } from '../math/math';
import { Vector3 } from '../math/vector';
import { Model } from './model-manager';

export interface WowObject {
  id: string
  model?: Model
  position: Vector3
  rotation: EulerRotation
  scaleFactor: number
  children: WowObject[]
  type: string
}
