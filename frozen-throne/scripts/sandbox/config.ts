export const terrainHeightClampPercent = 0.7
export const skipAssets = true
export const skipTerrainTexture = false
export const assetPrefix = "wow8\\"

export const hMin = 256
export const hMax = 14336
export const verticalHorizontalRatio = 0.5
// export const hMin = 7680
// export const hMax = 14336

export const defaultFilterMode = "None"
// export const defaultFilterMode = "Transparent"
const noneFilterPatterns = [
  "textures\\walls",
  "textures\\trim",
  "textures\\floor"
]
const transparentFilterPatterns = [
  "\\bush",
  "_bush",
  "\\branch",
  "_branch",
  "\\tree",
  "_tree",
  "treetall",
  "_vfx_fire_",
  "vines"
]

export function getFilterMode(filePath: string) {
  if (noneFilterPatterns.some(pattern => filePath.includes(pattern))) {
    return "None"
  }
  if (transparentFilterPatterns.some(pattern => filePath.includes(pattern))) {
    return "Transparent"
  }
  return defaultFilterMode
}