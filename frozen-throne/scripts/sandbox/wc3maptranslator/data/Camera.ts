import { type angle } from '../CommonInterfaces'

interface Camera {
  target: CameraTarget
  offsetZ: number
  rotation: angle
  aoa: angle // angle of attack
  distance: number
  roll: number
  fov: angle // field of view
  farClipping: number
  name: string
}

interface CameraTarget {
  x: number
  y: number
}

export type { Camera, CameraTarget }
