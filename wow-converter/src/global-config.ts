import { radians } from './math/math';

export const wowExportPath = 'C:/Users/quang/wow.export/';
// export const mapPath = '../death-knight-starting\\maps\\death-knight-starting.w3x';
export const assetPrefix = 'wow';

// Fine-tuned parameters
export const terrainHeightClampPercent = {
  upper: 0.75,
  lower: 0.55,
};
export const waterZThreshold = -1166;
export const defaultFilterMode = 'None';
// export const defaultFilterMode = 'Transparent';

// Control parameters
export const updateDoodadModels = false; // false to skip this step
export const updateTextures = false;
export const updateDoodads = true;

// Map generation configs
export const verticalHorizontalRatio = 1; // reducing this makes the map bigger, but doodads' position Z will become more wrong.
export const mapAngle: 0 | 90 | 180 | 270 = 0;
export const dataHeightMin = 256;
export const dataHeightMax = 13823; // Blizzard magic number
export const rawModelScaleUp = 1; // TODO: investigate why bigger values don't work yet.
export const infiniteExtentBoundRadiusThreshold = 2000 / 28 * rawModelScaleUp;
export const pitchRollThresholdRadians = radians(5);

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
  '\\sc_brazier',
  'hangnets',
  'flare05',
  'lightbeam',
];
const additiveFilterPatterns = [
  'genericglow',
  'swordinice',
  '_fog_',
  'icecrown_rays',
  'blueglow',
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
