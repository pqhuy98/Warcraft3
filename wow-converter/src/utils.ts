import { distancePerTile } from './constants';
import { dataHeightMax, dataHeightMin } from './global-config';
import { Terrain } from './wc3maptranslator/data/Terrain';

const fourCCPrefixes = 'abcdefghijklmnopqrstuvwxyz'.split('');
fourCCPrefixes.push(...fourCCPrefixes.map((p) => p.toUpperCase()));
fourCCPrefixes.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

let prefixCounter = 0;
let globalCounter = 0;

export function generateFourCC() {
  if (prefixCounter >= fourCCPrefixes.length) {
    throw new Error('All FourCC prefixes exhausted');
  }

  const startLetter = fourCCPrefixes[prefixCounter];

  const numericPart = globalCounter.toString().padStart(3, '0'); // 3-digit zero-padded number
  const codeString = `${startLetter}${numericPart}`;

  // Convert codeString to FourCC integer
  const fourCC = codeString
    .split('')
    .reduce((acc, char, index) => acc | (char.charCodeAt(0) << (8 * (3 - index))), 0);

  // Increment the numeric counter
  globalCounter++;

  // If numeric part exceeds 999, reset it and move to the next prefix
  if (globalCounter > 999) {
    globalCounter = 0;
    prefixCounter++;
  }

  return { codeString, fourCC };
}

export function dataHeightToGameZ(dataHeight: number): number {
  return (dataHeight - 5632) / 4; // Blizzard magic number
}

export function gameZToDataHeight(gameZ: number): number {
  return Math.round(gameZ * 4 + 5632); // Blizzard magic number
}

export function waterZToDataHeight(waterZ: number): number {
  return Math.round((waterZ + 728) * 4) + 5632; // Blizzard magic numbers
}

export const maxGameHeightDiff = (dataHeightMax - dataHeightMin) / 4;

export const nArray = <T>(height: number, width: number, v: T): T[][] => Array.from({ length: (height + 1) }, () => Array<T>(width + 1).fill(v));

export function getInitialTerrain(height: number, width: number): Terrain {
  const fill = <T>(v: T): T[][] => nArray(height, width, v);

  return {
    tileset: 'L',
    customTileset: true,
    tilePalette: ['Ldrt', 'Ldro', 'Ldrg', 'Lrok', 'Lgrs', 'Lgrd'],
    cliffTilePalette: ['CLdi', 'CLgr'],
    map: {
      height,
      width,
      // 32x32 map has offset -2048,-2048.
      offset: { x: -distancePerTile / 2 * width, y: -distancePerTile / 2 * height }, // Scale it according to above.
    },
    // "Masks"

    groundHeight: fill((dataHeightMin + dataHeightMax) >> 1),
    waterHeight: fill(dataHeightMin + 728 / 4),

    // boundaryFlag: 0: not boundary, 1: boundary. Can be all 0
    boundaryFlag: fill(false),

    // flags: 32: blight, 64: water, 128: boundary
    flags: fill(0),

    // groundTexture: texture ID Can be all 0
    groundTexture: fill(0),

    // groundVariation: looks random 0, 8, 16
    groundVariation: fill(0),

    // cliffVariation: looks random 0-7
    cliffVariation: fill(0),

    // cliffTexture: all 240
    cliffTexture: fill(240),

    // layerHeight: all 7
    layerHeight: fill(7),
  };
}

export function reverseFourCC(code: number): string {
  // Extract each character from the 32-bit integer
  const char1 = String.fromCharCode((code >>> 24) & 0xFF);
  const char2 = String.fromCharCode((code >>> 16) & 0xFF);
  const char3 = String.fromCharCode((code >>> 8) & 0xFF);
  const char4 = String.fromCharCode(code & 0xFF);

  // Combine the characters into a string
  return char1 + char2 + char3 + char4;
}
