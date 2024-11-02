type UnitSet = SpawnableUnit[]
  
  interface SpawnableUnit {
    unitId: string,
    chance: number
  }
  
  export type { UnitSet, SpawnableUnit }
  