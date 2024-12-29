import {
  unlinkSync, writeFileSync,
} from 'fs';
import path from 'path';

import {
  assetPrefix, dataHeightMax, dataHeightMin, mapPath, terrainHeightClampPercent, updateDoodads, verticalHorizontalRatio,
  waterZThreshold,
} from './config';
import { MDL } from './src/objmdl/mdl';
import {
  dataAngleToGameAngle, dataHeightToGameZ, dataXyToGameXy, distancePerTile, generateFourCC,
  getInitialTerrain,
  maxGameHeightDiff,
  waterZToDataHeight,
} from './src/utils';
import {
  DoodadsTranslator,
  ObjectsTranslator,
  TerrainTranslator,
} from './src/wc3maptranslator';
import { ObjectModificationTable, ObjectType } from './src/wc3maptranslator/data/ObjectModificationTable';
import { extractWowExportData } from './src/wowexport/extract-wowexport';

const inGameLowestZ = dataHeightToGameZ(dataHeightMin);
const inGameHighestZ = dataHeightToGameZ(dataHeightMax);

console.log('inGameLowestZ', inGameLowestZ);
console.log('inGameHighestZ', inGameHighestZ);

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
      if (heightMap[i][j] === -1) {
        continue;
      } else {
        terrData.groundHeight[i][j] = Math.ceil(heightMap[i][j] * (dataHeightMax - dataHeightMin) + dataHeightMin);
      }
    }
  }

  const waterHeightThreshold = waterZToDataHeight(waterZThreshold);
  for (let i = 0; i < heightMap.length; i++) {
    for (let j = 0; j < heightMap[i].length; j++) {
      if (terrData.groundHeight[i][j] < waterHeightThreshold) {
        terrData.flags[i][j] |= 64;
        terrData.waterHeight[i][j] = waterHeightThreshold;
        terrData.groundHeight[i][j] = Math.min(terrData.groundHeight[i][j], waterHeightThreshold - 1);
        // Make sure we don't overflow the limit
        terrData.groundHeight[i][j] = Math.max(dataHeightMin, Math.min(dataHeightMax, terrData.groundHeight[i][j]));
      }
    }
  }

  console.log('groundHeight', terrData.groundHeight.length, 'min', Min(terrData.groundHeight), 'max', Max(terrData.groundHeight));
  writeFileSync(path.join(mapPath, 'war3map.w3e'), TerrainTranslator.jsonToWar(terrData).buffer);

  const mapSize = [height * distancePerTile, width * distancePerTile, maxGameHeightDiff];
  const scale = [
    mapSize[0] / terrainSize[0],
    mapSize[1] / terrainSize[1],
    mapSize[2] / (terrainSize[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)),
  ];
  console.log('mapSize', mapSize);
  console.log('terrainSize', terrainSize);
  console.log('scale', scale);

  // Doodads
  const doodadScale = (scale[0] + scale[1]) / 2;
  const doodadsData: ObjectModificationTable = {
    original: {},
    custom: {},
  };
  const doodads: ReturnType<DoodadsTranslator['warToJson']>['json'] = [[], []];

  // Prefix generated doodads with zzz so that they are shown last.
  // To avoid mixing with manually added custom doodads.
  const doodadName = (fileName: string) => `zzz ${path.basename(fileName)}`;

  terrainAdts.forEach(([mdl]) => {
    const id = `${generateFourCC().codeString}:YOtf`;
    const fileName = path.join(assetPrefix, mdl.model.name).replaceAll('\\', '/');
    doodadsData.custom[id] = [
      {
        id: 'dfil', type: 'string', level: 0, column: 0, value: fileName,
      },
      {
        id: 'dnam', type: 'string', level: 0, column: 0, value: doodadName(fileName),
      },
      {
        id: 'dmas', type: 'unreal', level: 0, column: 0, value: doodadScale * 10,
      },
      {
        id: 'dmis', type: 'unreal', level: 0, column: 0, value: doodadScale * 0.5,
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
      {
        id: 'danf', type: 'int', level: 0, column: 0, value: 1,
      },
      {
        id: 'dshf', type: 'int', level: 0, column: 0, value: 1,
      },
    ];
    const id4Chars = id.slice(0, 4);
    doodads[0].push({
      type: id4Chars,
      variation: 0,
      position: [
        0, 0,
        dataHeightToGameZ((dataHeightMax - dataHeightMin) / (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower) * (0.5 - terrainHeightClampPercent.lower) + dataHeightMin),
      ],
      angle: dataAngleToGameAngle(-90),
      scale: [scale[1], scale[0], scale[2]], // in-game X and Y are swapped.
      skinId: id4Chars,
      flags: {
        visible: true,
        solid: true,
        customHeight: true,
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
      const id = `${generateFourCC().codeString}:YOtf`;
      doodadName2Id.set(fileName, id);
      doodadsData.custom[id] = [
        {
          id: 'dfil', type: 'string', level: 0, column: 0, value: fileName,
        },
        {
          id: 'dnam', type: 'string', level: 0, column: 0, value: doodadName(fileName),
        },
        {
          id: 'dmas', type: 'unreal', level: 0, column: 0, value: doodadScale * 10,
        },
        {
          id: 'dmis', type: 'unreal', level: 0, column: 0, value: doodadScale * 0.5,
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
        {
          id: 'danf', type: 'int', level: 0, column: 0, value: 1,
        },
        {
          id: 'dshf', type: 'int', level: 0, column: 0, value: 1,
        },
      ];
    }
    const id = doodadName2Id.get(fileName)!;
    const id4Chars = id.slice(0, 4);
    const x = doodad.position[0] * scale[0];
    const y = doodad.position[1] * scale[1];
    const inGameZ = (doodad.position[2] * scale[2] + inGameLowestZ) + 3;

    doodads[0].push({
      type: id4Chars,
      variation: 0,
      position: [
        ...dataXyToGameXy([x, y]),
        inGameZ,
      ],
      angle: dataAngleToGameAngle(doodad.rotation),
      scale: [doodadScale, doodadScale, doodadScale],
      skinId: id4Chars,
      flags: {
        visible: true,
        solid: true,
        customHeight: true,
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
  console.log('========================================================');
  console.log('Generation completed. Map size (tiles):', height, 'x', width);
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

  const ratioZ = maxGameHeightDiff / (size[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower));
  const ratioXY = ratioZ / verticalHorizontalRatio;
  const h1 = size[0] / distancePerTile * ratioXY;
  const w1 = size[1] / distancePerTile * ratioXY;

  const height = Math.ceil(h1 / 4) * 4;
  const width = Math.ceil(w1 / 4) * 4;

  console.log({ ratio: ratioZ, width, height });

  const heightMap = Array.from({ length: height + 1 }, () => Array<number>(width + 1).fill(-1));
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
    heightMap, height, width, size,
  };
}

void main();
