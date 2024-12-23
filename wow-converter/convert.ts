import {
  unlinkSync, writeFileSync,
} from 'fs';
import path from 'path';

import {
  assetPrefix, hMax, hMin, mapPath, terrainHeightClampPercent, updateDoodads, verticalHorizontalRatio, waterHeight,
} from './config';
import { MDL } from './src/objmdl/mdl';
import { generateFourCC } from './src/utils';
import {
  DoodadsTranslator,
  ObjectsTranslator,
  TerrainTranslator,
} from './src/wc3maptranslator';
import { ObjectModificationTable, ObjectType } from './src/wc3maptranslator/data/ObjectModificationTable';
import { Terrain } from './src/wc3maptranslator/data/Terrain';
import { extractWowExportData } from './src/wowexport/extract-wowexport';

const stepPerTile = 4096 / 32;
const maxGameHeightDiff = (hMax - hMin) / 4;

function gameHeightToDataHeight(gameHeight: number): number {
  return Math.floor((gameHeight + 2048) / (2048 * 2) * 16383);
  /*
  Code -> ingame
  -350 -> -400
  -300 -> -380
  -275 -> 349
  -250 -> -335
  */
}

function getInitialTerrain(height: number, width: number): Terrain {
  const fill = <T>(v: T): T[][] => Array.from({ length: (height + 1) }, () => Array<T>(width + 1).fill(v));

  return {
    tileset: 'L',
    customTileset: true,
    tilePalette: ['Ldrt', 'Ldro', 'Ldrg', 'Lrok', 'Lgrs', 'Lgrd'],
    cliffTilePalette: ['CLdi', 'CLgr'],
    map: {
      width,
      height,
      offset: { x: -2048 / 32 * width, y: -2048 / 32 * height },
    },
    // "Masks"

    groundHeight: fill(0),
    waterHeight: fill(192),

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

function Min(arr: number[][]) {
  return arr.flat().reduce((acc, v) => Math.min(acc, v), arr[0][0]);
}

function Max(arr: number[][]) {
  return arr.flat().reduce((acc, v) => Math.max(acc, v), arr[0][0]);
}

async function main() {
  const { terrainAdts, wowDoodads } = await extractWowExportData();

  // Terrain
  const {
    heightMap, height, width, size: terrainSize,
  } = computeTerrainHeightMap(terrainAdts.map((t) => t[0]));
  console.log('getInitialTerrain', { height, width });

  const terrData = getInitialTerrain(height, width);
  for (let i = 0; i < heightMap.length; i++) {
    for (let j = 0; j < heightMap[i].length; j++) {
      terrData.groundHeight[i][j] = Math.ceil(heightMap[i][j] * (hMax - hMin) + hMin);
    }
  }

  const waterHeightThreshold = gameHeightToDataHeight(waterHeight);
  for (let i = 0; i < heightMap.length; i++) {
    for (let j = 0; j < heightMap[i].length; j++) {
      if (terrData.groundHeight[i][j] < waterHeightThreshold) {
        terrData.flags[i][j] = 64;
        terrData.waterHeight[i][j] = waterHeightThreshold;
        terrData.groundHeight[i][j] = Math.min(terrData.groundHeight[i][j], waterHeightThreshold - 1);
      }
    }
  }

  console.log('groundHeight', terrData.groundHeight.length, 'min', Min(terrData.groundHeight), 'max', Max(terrData.groundHeight));
  writeFileSync(path.join(mapPath, 'war3map.w3e'), TerrainTranslator.jsonToWar(terrData).buffer);

  const mapSize = [height * stepPerTile, width * stepPerTile, maxGameHeightDiff];
  const scale = [
    mapSize[0] / terrainSize[0],
    mapSize[1] / terrainSize[1],
    mapSize[2] / (terrainSize[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)),
  ];
  console.log('mapSize', mapSize);
  console.log('terrainSize', terrainSize);

  // Doodads
  const doodadsData: ObjectModificationTable = {
    original: {},
    custom: {},
  };
  const doodads: ReturnType<DoodadsTranslator['warToJson']>['json'] = [[], []];

  terrainAdts.forEach(([mdl]) => {
    const id = `${generateFourCC('D').codeString}:YOtf`;
    const fileName = path.join(assetPrefix, mdl.model.name).replaceAll('\\', '/');
    doodadsData.custom[id] = [
      {
        id: 'dfil', type: 'string', level: 0, column: 0, value: fileName,
      },
      {
        id: 'dnam', type: 'string', level: 0, column: 0, value: path.basename(fileName),
      },
      {
        id: 'dmas', type: 'unreal', level: 0, column: 0, value: 100,
      },
      {
        id: 'dmis', type: 'unreal', level: 0, column: 0, value: 1,
      },
      {
        id: 'dvis', type: 'unreal', level: 0, column: 0, value: 99999,
      },
      {
        id: 'duch', type: 'int', level: 0, column: 0, value: 1,
      },
      {
        id: 'dsnd', type: 'string', level: 0, column: 0, value: '',
      },
    ];
    const id4Chars = id.slice(0, 4);
    doodads[0].push({
      type: id4Chars,
      variation: 0,
      position: [0, 0, 0],
      angle: 90,
      scale,
      skinId: id4Chars,
      flags: {
        visible: true,
        solid: true,
      },
      life: 100,
      randomItemSetPtr: -1,
      droppedItemSets: [],
      id: doodads[0].length,
    });
  });

  const doodadName2Id = new Map<string, string>();
  wowDoodads.forEach((doodad) => {
    const fileName = path.join(assetPrefix, doodad.model).replaceAll('\\', '/');
    if (!doodadName2Id.has(fileName)) {
      const id = `${generateFourCC('D').codeString}:YOtf`;
      doodadName2Id.set(fileName, id);
      doodadsData.custom[id] = [
        {
          id: 'dfil', type: 'string', level: 0, column: 0, value: fileName,
        },
        {
          id: 'dnam', type: 'string', level: 0, column: 0, value: path.basename(fileName),
        },
        {
          id: 'dmas', type: 'unreal', level: 0, column: 0, value: 100,
        },
        {
          id: 'dmis', type: 'unreal', level: 0, column: 0, value: 1,
        },
        {
          id: 'dvis', type: 'unreal', level: 0, column: 0, value: 99999,
        },
        {
          id: 'duch', type: 'int', level: 0, column: 0, value: 1,
        },
        {
          id: 'dsnd', type: 'string', level: 0, column: 0, value: '',
        },
      ];
    }
    const id = doodadName2Id.get(fileName)!;
    const id4Chars = id.slice(0, 4);
    const ddScale = (scale[0] + scale[1]) / 2;
    doodads[0].push({
      type: id4Chars,
      variation: 0,
      position: [
        -doodad.position[1] * scale[1],
        doodad.position[0] * scale[0],
        doodad.position[2] * scale[2], // doesn't seem to work
      ],
      angle: doodad.rotation + 180,
      scale: [ddScale, ddScale, ddScale],
      skinId: id4Chars,
      flags: {
        visible: true,
        solid: true,
      },
      life: 100,
      randomItemSetPtr: -1,
      droppedItemSets: [],
      id: doodads[0].length,
    });
  });

  if (updateDoodads) {
    const w3dPath = path.join(mapPath, 'war3map.w3d');
    const dooPath = path.join(mapPath, 'war3map.doo');
    writeFileSync(w3dPath, ObjectsTranslator.jsonToWar(ObjectType.Doodads, doodadsData).buffer);
    writeFileSync(dooPath, DoodadsTranslator.jsonToWar(doodads).buffer);
  }
  try {
    unlinkSync(path.join(mapPath, 'war3map.shd'));
  } catch (e) {
    // ignore
  }
}

function computeTerrainHeightMap(terrains: MDL[]) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];

  terrains.forEach((terrain) => {
    min[0] = Math.min(min[0], terrain.model.minimumExtent[0]);
    min[1] = Math.min(min[1], terrain.model.minimumExtent[1]);
    min[2] = Math.min(min[2], terrain.model.minimumExtent[2]);
    max[0] = Math.max(max[0], terrain.model.maximumExtent[0]);
    max[1] = Math.max(max[1], terrain.model.maximumExtent[1]);
    max[2] = Math.max(max[2], terrain.model.maximumExtent[2]);
  });
  const size = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
  console.log({ size });

  const ratio = (2047.8 - -2048) / (size[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower));
  const gameHeight = size[0] * ratio;
  const gameWidth = size[1] * ratio;
  const h1 = gameHeight / stepPerTile / verticalHorizontalRatio;
  const w1 = gameWidth / stepPerTile / verticalHorizontalRatio;

  const height = Math.ceil(h1 / 4) * 4;
  const width = Math.ceil(w1 / 4) * 4;

  console.log({ ratio, width, height });

  const heightMap = Array.from({ length: height + 1 }, () => Array<number>(width + 1).fill(0));
  terrains.forEach((terrain) => terrain.geosets
    .forEach((geoset) => geoset.vertices.forEach((v) => {
      const percent = [
        1 - (v[0] - min[0]) / size[0],
        1 - (v[1] - min[1]) / size[1],
        (v[2] - (min[2] + size[2] * terrainHeightClampPercent.lower)) / (size[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)),
      ];
      const i = Math.round(percent[0] * height);
      const j = Math.round(percent[1] * width);
      heightMap[i][j] = Math.max(heightMap[i][j], Math.max(0, Math.min(1, percent[2])));
    })));

  return {
    heightMap, height, width, ratio, size,
  };
}

void main();
