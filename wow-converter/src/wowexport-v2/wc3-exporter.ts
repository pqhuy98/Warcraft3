import { unlinkSync, writeFileSync } from 'fs';
import * as path from 'path';

import {
  dataHeightMax, dataHeightMin, mapAngle, terrainHeightClampPercent, verticalHorizontalRatio,
  waterZThreshold,
} from '../../config';
import { DegToRad, RadToDeg } from '../math/math';
import { MDL } from '../objmdl/mdl';
import {
  dataAngleToGameAngle,
  dataHeightToGameZ,
  dataXyToGameXy,
  distancePerTile, generateFourCC, getInitialTerrain, maxGameHeightDiff, waterZToDataHeight,
} from '../utils';
import { DoodadsTranslator, ObjectsTranslator, TerrainTranslator } from '../wc3maptranslator';
import {
  DoodadList, ObjectModificationTable, ObjectType, Terrain,
} from '../wc3maptranslator/data';
import { WowObject } from './wow-object-manager';

export class Wc3Converter {
  terrain: Terrain;

  doodadsData: ObjectModificationTable = {
    original: {},
    custom: {},
  };

  doodads: DoodadList = [[], []];

  constructor() {
  }

  generateTerrainFromAdt(terrainMDLs: MDL[]) {
    console.log('Generating terrain from', terrainMDLs.length, 'ADT files');

    const {
      heightMap, height, width,
    } = computeTerrainHeightMap(terrainMDLs);

    console.log('Map size', { height, width });

    // Ground height
    const terrain = getInitialTerrain(height, width);
    for (let i = 0; i < heightMap.length; i++) {
      for (let j = 0; j < heightMap[i].length; j++) {
        if (heightMap[i][j] === -1) {
          continue;
        } else {
          terrain.groundHeight[i][j] = Math.ceil(heightMap[i][j] * (dataHeightMax - dataHeightMin) + dataHeightMin);
        }
      }
    }

    // Water height
    const waterHeightThreshold = waterZToDataHeight(waterZThreshold);
    for (let i = 0; i < heightMap.length; i++) {
      for (let j = 0; j < heightMap[i].length; j++) {
        if (terrain.groundHeight[i][j] < waterHeightThreshold) {
          terrain.flags[i][j] |= 64;
          terrain.waterHeight[i][j] = waterHeightThreshold;
          terrain.groundHeight[i][j] = Math.min(terrain.groundHeight[i][j], waterHeightThreshold - 1);
          // Make sure we don't overflow the limit
          terrain.groundHeight[i][j] = Math.max(dataHeightMin, Math.min(dataHeightMax, terrain.groundHeight[i][j]));
        }
      }
    }

    this.terrain = terrain;
  }

  placeDoodads(terrains: WowObject[], doodads: WowObject[]) {
    console.log('Placing', doodads.length, 'doodads');

    const { min, max } = computeMinMaxExtents(terrains.map((t) => t.model!.mdl));
    const mapMin = [
      this.terrain.map.offset.x,
      this.terrain.map.offset.y,
      dataHeightToGameZ(dataHeightMin),
    ];
    const mapMax = [
      this.terrain.map.offset.x + this.terrain.map.width * distancePerTile,
      this.terrain.map.offset.y + this.terrain.map.height * distancePerTile,
      dataHeightToGameZ(dataHeightMax),
    ];

    // console.log({ mapMin, mapMax });
    // console.log({ min, max });

    const { height, width } = this.terrain.map;
    const mapSize = [height * distancePerTile, width * distancePerTile, maxGameHeightDiff];
    const scale = [
      mapSize[0] / (max[0] - min[0]),
      mapSize[1] / (max[1] - min[1]),
      mapSize[2] / ((max[2] - min[2]) * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)),
    ];
    // console.log({ scale });

    const modelPathToId = new Map<string, string>();

    // Prefix generated doodads with z so that they are shown last in Object Editor.
    // To avoid mixing with manually added custom doodads.
    const doodadName = (obj: WowObject) => `z ${path.basename(obj.model!.relativePath)} (${obj.type})`;

    doodads.forEach((obj) => {
      const fileName = obj.model!.relativePath;

      // WC3 pitch and roll must be negative, required by World Editor
      const wc3Pitch = (-(obj.rotation[0] - Math.PI / 2)) % (Math.PI * 2) - Math.PI * 2;
      const wc3Roll = (-obj.rotation[1]) % (Math.PI * 2) - Math.PI * 2;

      const hasPitchRoll = !['adt', 'wmo'].includes(obj.type) && Math.abs(wc3Pitch) > DegToRad(5) && Math.abs(wc3Roll) > DegToRad(5);
      const hashKey = hasPitchRoll
        ? [fileName, obj.rotation[0].toFixed(4), obj.rotation[1].toFixed(4)].join(';')
        : fileName;

      // Insert new doodad type if not exists
      if (!modelPathToId.has(hashKey)) {
        const fullId = `${generateFourCC().codeString}:YOtf`;

        if (obj.id.includes('lumbermill_set0')) {
          console.log(obj.rotation, { wc3Pitch, wc3Roll });
        }

        const doodadType = [
          {
            id: 'dfil', type: 'string', level: 0, column: 0, value: fileName,
          },
          {
            id: 'dnam', type: 'string', level: 0, column: 0, value: `${doodadName(obj)} ${fullId.slice(0, 4)}`,
          },
          {
            id: 'dmas', type: 'unreal', level: 0, column: 0, value: obj.scaleFactor * Math.max(...scale) * 10,
          },
          {
            id: 'dmis', type: 'unreal', level: 0, column: 0, value: obj.scaleFactor * Math.min(...scale) * 0.5,
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
        if (hasPitchRoll) {
          doodadType.push(
            { // pitch, must be unreal even though in Editor it's always negative
              id: 'dmap', type: 'unreal', level: 0, column: 0, value: wc3Pitch,
            },
            { // roll, must be unreal even though in Editor it's always negative
              id: 'dmar', type: 'unreal', level: 0, column: 0, value: wc3Roll,
            },
          );
        }
        this.doodadsData.custom[fullId] = doodadType;
        modelPathToId.set(hashKey, fullId);
      }
      const id4Chars = modelPathToId.get(hashKey)!.slice(0, 4);

      // if (id4Chars === 'A699') {
      //   console.log(obj.rotation);
      //   console.log(this.doodadsData.custom[id4Chars]);
      // }

      // Calculate positions
      const [inGameX, inGameY] = dataXyToGameXy([
        obj.position[0] * scale[0],
        obj.position[1] * scale[1],
      ]);
      const zPercent = (obj.position[2] - min[2]) / (max[2] - min[2]);
      const inGameZ = dataHeightToGameZ(dataHeightMin
        + (dataHeightMax - dataHeightMin)
        / (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)
        * (zPercent - terrainHeightClampPercent.lower));

      if (inGameX < mapMin[0] || inGameX > mapMax[0] || inGameY < mapMin[1] || inGameY > mapMax[1]) {
        if (obj.id.includes('lightray')) {
          console.warn('Placing', obj.model?.relativePath, 'outside of map bounds', inGameX, inGameY);
        }
      }

      // Add doodad instance
      this.doodads[0].push({
        type: id4Chars,
        variation: 0,
        position: [inGameX, inGameY, inGameZ],
        angle: dataAngleToGameAngle(RadToDeg(obj.rotation[2])),
        scale: [
          // in-game X and Y are swapped.
          obj.scaleFactor * scale[1],
          obj.scaleFactor * scale[0],
          obj.scaleFactor * scale[2],
        ],
        skinId: id4Chars,
        flags: {
          visible: true,
          solid: true,
          customHeight: true,
        },
        life: 100,
        randomItemSetPtr: -1,
        droppedItemSets: [],
        id: this.doodads[0].length,
      });
    });

    console.log('Created', Object.keys(this.doodadsData.custom).length, 'custom doodad types');
    console.log('Placed', this.doodads[0].length, 'doodad instances');
  }

  writeTerrain(mapPath: string) {
    writeFileSync(
      path.join(mapPath, 'war3map.w3e'),
      TerrainTranslator.jsonToWar(this.terrain).buffer,
    );
    try {
      unlinkSync(path.join(mapPath, 'war3map.shd'));
    } catch (e) {
      // ignore
    }
  }

  writeDoodads(mapPath: string) {
    writeFileSync(
      path.join(mapPath, 'war3map.w3d'),
      ObjectsTranslator.jsonToWar(ObjectType.Doodads, this.doodadsData).buffer,
    );
    writeFileSync(
      path.join(mapPath, 'war3map.doo'),
      DoodadsTranslator.jsonToWar(this.doodads).buffer,
    );
  }
}

function computeTerrainHeightMap(terrains: MDL[]) {
  const { min, max } = computeMinMaxExtents(terrains);
  const terrainSize = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
  // console.log({ size: terrainSize });

  const ratioZ = maxGameHeightDiff / (terrainSize[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower));
  const ratioXY = ratioZ / verticalHorizontalRatio;
  const h1 = terrainSize[0] / distancePerTile * ratioXY;
  const w1 = terrainSize[1] / distancePerTile * ratioXY;

  const height = Math.ceil(h1 / 4) * 4;
  const width = Math.ceil(w1 / 4) * 4;

  // console.log({ ratio: ratioZ, width, height });

  const heightMap = Array.from({ length: height + 1 }, () => Array<number>(width + 1).fill(-1));
  terrains.forEach((terrain) => terrain.geosets
    .forEach((geoset) => geoset.vertices.forEach((v) => {
      const percent = [
        1 - (v[0] - min[0]) / terrainSize[0],
        1 - (v[1] - min[1]) / terrainSize[1],
        (v[2] - (min[2] + terrainSize[2] * terrainHeightClampPercent.lower)) / (terrainSize[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)),
      ];
      if (mapAngle === 180) {
        percent[0] = 1 - percent[0];
        percent[1] = 1 - percent[1];
      }
      const i = Math.round(percent[0] * height);
      const j = Math.round(percent[1] * width);
      heightMap[i][j] = Math.max(heightMap[i][j], Math.max(0, Math.min(1, percent[2])));
    })));

  return {
    heightMap, height, width,
  };
}

function computeMinMaxExtents(models: MDL[]) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];

  models.forEach((model) => {
    min[0] = Math.min(min[0], model.model.minimumExtent[0]);
    min[1] = Math.min(min[1], model.model.minimumExtent[1]);
    min[2] = Math.min(min[2], model.model.minimumExtent[2]);
    max[0] = Math.max(max[0], model.model.maximumExtent[0]);
    max[1] = Math.max(max[1], model.model.maximumExtent[1]);
    max[2] = Math.max(max[2], model.model.maximumExtent[2]);
  });

  return { min, max };
}
