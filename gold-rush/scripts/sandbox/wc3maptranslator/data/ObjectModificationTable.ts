enum TableType {
  original = 'original',
  custom = 'custom'
}

enum ModificationType {
  int = 'int',
  real = 'real',
  unreal = 'unreal',
  string = 'string'
}

enum FileTypeExtension { // (*) - uses the two optional ints after variable type
  units = 'w3u',
  items = 'w3t',
  destructables = 'w3b',
  doodads = 'w3d', // (*)
  abilities = 'w3a', // (*)
  buffs = 'w3h',
  upgrades = 'w3q' // (*)
}

enum ObjectType {
  Units = 'units',
  Items = 'items',
  Destructables = 'destructables',
  Doodads = 'doodads',
  Abilities = 'abilities',
  Buffs = 'buffs',
  Upgrades = 'upgrades'
}

interface Modification {
  id: string
  type: ModificationType // 'int' | 'real' | 'unreal' | 'string',
  value: unknown

  // Marked optional because these fields are not needed on any table.
  // They can be specified for: Doodads, Abilities, Upgrades, but if
  // not specified, they default to the value 0.
  level?: number
  column?: number
  variation?: number
}

interface ObjectModificationTable {
  original: object
  custom: object
}

export { TableType, ModificationType, FileTypeExtension, ObjectType, type Modification, type ObjectModificationTable }
