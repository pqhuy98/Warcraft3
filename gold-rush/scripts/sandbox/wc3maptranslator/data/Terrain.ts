interface Terrain {
  tileset: string
  customTileset: boolean
  tilePalette: string[]
  cliffTilePalette: string[]
  map: MapSize
  // "Masks"
  groundHeight: number[][]
  waterHeight: number[][]
  boundaryFlag: boolean[][]
  flags: number[]
  groundTexture: number[][]
  groundVariation: number[][]
  cliffVariation: number[][]
  cliffTexture: number[][]
  layerHeight: number[][]
}

interface MapSize {
  width: number
  height: number
  offset: Offset
}

interface Offset {
  x: number
  y: number
}

export type { Terrain, MapSize, Offset }
