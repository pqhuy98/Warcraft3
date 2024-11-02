import { type angle } from '../CommonInterfaces'
import { ItemSet } from './ItemSet'

interface Doodad {
  type: string
  variation: number
  position: number[]
  angle: angle
  scale: number[]
  skinId: string
  flags: DoodadFlag
  life: number
  randomItemSetPtr: number
  droppedItemSets: ItemSet[]
  id: number
}

interface DoodadFlag {
  visible: boolean
  solid: boolean
}

interface SpecialDoodad {
  type: string,
  position: number[]
}

export type { Doodad, DoodadFlag, SpecialDoodad }
