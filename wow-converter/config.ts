export const wowExportPath = 'C:/Users/quang/wow.export/';
export const mapPath = 'maps/test-64x64.w3x';
// export const mapPath = '../death-knight-starting\\maps\\death-knight-starting.w3x';
export const assetPrefix = 'wow';

// Fine-tuned parameters
export const terrainHeightClampPercent = {
  upper: 0.75,
  lower: 0.6,
};
export const verticalHorizontalRatio = 1;
export const waterZThreshold = -1400;
export const defaultFilterMode = 'None';
// export const defaultFilterMode = 'Transparent';

// Control parameters
export const updateDoodadModels = true; // false to skip this step
export const updateTextures = false;
export const updateDoodads = false;

// Map generation configs
export const dataHeightMin = 128;
// export const dataHeightMax = 16383; // Blizzard magic number
export const dataHeightMax = 13823; // Blizzard magic number
export const rawModelScaleUp = 28;
export const infiniteExtentBoundRadiusThreshold = 2000;

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
  'elwynnmiscrope03',
  'textures\\decoration',
  '_glow',
  'jlo_worc_chainsr',
  '\\hay\\',
];
const additiveFilterPatterns = [
  'genericglow',
  'swordinice',
];

export function getFilterMode(filePath: string): string {
  if (noneFilterPatterns.some((pattern) => filePath.includes(pattern))) {
    return 'None';
  }
  if (transparentFilterPatterns.some((pattern) => filePath.includes(pattern))) {
    return 'Transparent';
  }
  if (additiveFilterPatterns.some((pattern) => filePath.includes(pattern))) {
    return 'Additive';
  }
  return defaultFilterMode;
}
