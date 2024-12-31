import { Vector3 } from '../math/model';
import { EulerRotation } from '../math/rotation';
import { MDL } from '../objmdl/mdl';

export interface WowObject {
  id: string
  model?: Model
  position: Vector3
  rotation: EulerRotation
  scaleFactor: number
  children: WowObject[]
  type: string
}

export interface ConvertOptions {
  terrainHeightClampPercent: {
    upper: number,
    lower: number;
  }
  waterZThreshold: number;
  pitchRollThresholdRadians: number
  verticalHorizontalRatio: number
}

export interface Model {
  relativePath: string
  mdl: MDL
  materialPaths: string[]
}
