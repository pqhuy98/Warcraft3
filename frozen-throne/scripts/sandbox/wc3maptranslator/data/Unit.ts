import { type angle } from '../CommonInterfaces'
import { ItemSet } from './ItemSet'
import { UnitSet } from './UnitSet'

interface Unit {
  type: string
  variation: number
  position: number[]
  rotation: angle
  scale: number[]
  skin: string
  hero: Hero
  inventory: Inventory[]
  abilities: Abilities[]
  player: number
  hitpoints: number
  mana: number
  randomItemSetPtr: number
  droppedItemSets: ItemSet[]
  gold: number
  targetAcquisition: number // (-1 = normal, -2 = camp),
  random: RandomSpawn
  color: number
  waygate: number
  id: number
}

interface Hero {
  level: number
  str: number
  agi: number
  int: number
}

interface Inventory {
  slot: number // the int is 0-based, but json format wants 1-6
  type: string // Item ID
}

interface Abilities {
  ability: string // Ability ID
  active: boolean // autocast active? 0=no, 1=active
  level: number
}

interface RandomSpawn {
  type: number,
  level: number | undefined,
  itemClass: number | undefined,
  groupIndex: number | undefined,
  columnIndex: number | undefined,
  unitSet: UnitSet | undefined
}

export type { Unit, Hero, Inventory, Abilities, RandomSpawn }
