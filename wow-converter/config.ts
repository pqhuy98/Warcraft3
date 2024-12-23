export const wowExportPath = 'C:/Users/quang/wow.export/';
export const mapPath = '../death-knight-starting\\maps\\death-knight-starting.w3x';
export const assetPrefix = 'wow9\\';

// Fine-tuned parameters
export const terrainHeightClampPercent = {
  upper: 0.8,
  lower: 0.5,
};
export const verticalHorizontalRatio = 1;
export const waterHeight = -275;
export const defaultFilterMode = 'None';
// export const defaultFilterMode = "Transparent"

// Control parameters
export const updateDoodadModels = true;
export const updateTextures = false;
export const updateDoodads = false;

// Map generation configs
export const hMin = 256;
export const hMax = 14336;
// export const hMin = 7680
// export const hMax = 14336

const noneFilterPatterns = [
  'textures\\walls',
  'textures\\trim',
  'textures\\floor',
];
const transparentFilterPatterns = [
  '\\bush',
  '_bush',
  '\\branch',
  '_branch',
  '\\tree',
  '_tree',
  'treetall',
  '_vfx_fire_',
  'vines',
  'treebranch',
  'floornets',
  'spells\\',
  'environment\\doodad\\',
  '\\gate10.',
  'interface\\glues',
  'fence',
  'haypiles',
  // 'passivedoodads', -- too wide
  'plant',
  'alpha',
  'ash04',
  '\\glow',
  'genericglow',
  'elwynnmiscrope03',
  'textures\\decoration',
];

export function getFilterMode(filePath: string): string {
  if (noneFilterPatterns.some((pattern) => filePath.includes(pattern))) {
    return 'None';
  }
  if (transparentFilterPatterns.some((pattern) => filePath.includes(pattern))) {
    return 'Transparent';
  }
  return defaultFilterMode;
}
