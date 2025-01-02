import { ConvertOptions } from './converter/common';
import { radians } from './math/rotation';

export const wowExportPath = 'C:/Users/quang/wow.export/';
// export const mapPath = '../death-knight-starting\\maps\\death-knight-starting.w3x';
export const assetPrefix = 'wow';

export const defaultConvertOptions: ConvertOptions = {
  terrainHeightClampPercent: {
    upper: 1,
    lower: 0,
  },
  waterZThreshold: -2000,
  verticalHorizontalRatio: 1, // reducing this makes the map bigger, but doodads' position Z will become more wrong.
  pitchRollThresholdRadians: radians(5),
};

// Fine-tuned parameters
export const defaultFilterMode = 'None';
// export const defaultFilterMode = 'Transparent';

// Map generation configs
export const mapAngle: 0 | 90 | 180 | 270 = 0;
export const dataHeightMin = 256;
export const dataHeightMax = 13823; // Blizzard magic number
export const rawModelScaleUp = 1; // TODO: investigate why bigger values don't work yet.
export const infiniteExtentBoundRadiusThreshold = 2000 / 28 * rawModelScaleUp;

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
  'jlo_worc_grate',
  'sc_chain',
];
const additiveFilterPatterns = [
  'genericglow',
  'swordinice',
  '_fog_',
  'icecrown_rays',
  'blueglow',
  'treeweb01',
  '_web',
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
