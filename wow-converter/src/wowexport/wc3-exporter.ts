import * as path from 'path';

import { distancePerTile } from '../constants';
import {
  dataHeightMax, dataHeightMin, pitchRollThresholdRadians, terrainHeightClampPercent, verticalHorizontalRatio,
  waterZThreshold,
} from '../global-config';
import { calculateChildAbsoluteEulerRotation, RadToDeg, rotateVector } from '../math/math';
import { V3, Vector3 } from '../math/vector';
import {
  dataHeightToGameZ,
  generateFourCC, getInitialTerrain, maxGameHeightDiff, waterZToDataHeight,
} from '../utils';
import {
  DoodadList, ObjectModificationTable, Terrain,
} from '../wc3maptranslator/data';
import { WowObject } from './common';
import { computeAbsoluteMinMaxExtents } from './utils';

export class Wc3Converter {
  constructor() {
  }

  generateTerrain(terrainMDLs: WowObject[]): Terrain {
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
    return terrain;
  }

  placeDoodads(parents: WowObject[], terrain: Terrain) {
    const doodadsData: ObjectModificationTable = {
      original: {},
      custom: {},
    };

    const doodads: DoodadList = [[], []];

    console.log('Placing doodads');

    const { min, max } = computeAbsoluteMinMaxExtents(parents);
    const mapMin: Vector3 = [
      terrain.map.offset.x,
      terrain.map.offset.y,
      dataHeightToGameZ(dataHeightMin),
    ];
    const mapMax: Vector3 = [
      terrain.map.offset.x + terrain.map.width * distancePerTile,
      terrain.map.offset.y + terrain.map.height * distancePerTile,
      dataHeightToGameZ(dataHeightMax),
    ];
    const mapSize = V3.sub(mapMax, mapMin);
    const modelSize = V3.sub(max, min);

    console.log('Map', { mapMin, mapMax, mapSize });
    console.log('Parent model', { min, max, size: modelSize });

    const rootScale = [
      mapSize[0] / modelSize[0],
      mapSize[1] / modelSize[1],
      mapSize[2] / (modelSize[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)),
    ];
    // console.log({ rootScale });

    const modelPathToId = new Map<string, string>();

    // Prefix generated doodads with z so that they are shown last in Object Editor.
    // To avoid mixing with manually added custom doodads.
    const doodadName = (obj: WowObject) => `z ${path.basename(obj.model!.relativePath)} (${obj.type})`;
    let doodadTypesWithPitchRoll = 0;

    const placeDoodadsRecursive = (obj: WowObject, parent: WowObject | null) => {
      console.log('================================');
      const current = { ...obj };
      if (parent) {
        const relativePos = V3.rotate(obj.position, parent.rotation);
        current.position = V3.sum(parent.position, relativePos);
        console.log({
          objPos: obj.position,
          parentPos: parent.position,
          relativePos,
          currentPos: current.position,
        });
        current.rotation = calculateChildAbsoluteEulerRotation(parent.rotation, current.rotation);
        current.scaleFactor *= parent.scaleFactor;
      }

      // WC3 pitch and roll must be negative, required by World Editor
      const wc3Pitch = (-(current.rotation[0] - Math.PI / 2)) % (Math.PI * 2) - Math.PI * 2;
      const wc3Roll = (-current.rotation[1]) % (Math.PI * 2) - Math.PI * 2;

      const hasPitchRoll = !['adt', 'wmo'].includes(current.type)
        && Math.abs(wc3Pitch) > pitchRollThresholdRadians
        && Math.abs(wc3Roll) > pitchRollThresholdRadians;

      const fileName = obj.model!.relativePath;
      const hashKey = hasPitchRoll
        ? [fileName, current.rotation[0].toFixed(4), current.rotation[1].toFixed(4)].join(';')
        : fileName;

      // Insert new doodad type if not exists
      if (!modelPathToId.has(hashKey)) {
        const fullId = `${generateFourCC().codeString}:YOtf`;

        const doodadType = [
          {
            id: 'dfil', type: 'string', level: 0, column: 0, value: fileName,
          },
          {
            id: 'dnam', type: 'string', level: 0, column: 0, value: `${doodadName(current)} ${fullId.slice(0, 4)}`,
          },
          {
            id: 'dmas', type: 'unreal', level: 0, column: 0, value: current.scaleFactor * Math.max(...rootScale) * 10,
          },
          {
            id: 'dmis', type: 'unreal', level: 0, column: 0, value: current.scaleFactor * Math.min(...rootScale) * 0.5,
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
          doodadTypesWithPitchRoll++;
        }
        doodadsData.custom[fullId] = doodadType;
        modelPathToId.set(hashKey, fullId);
      }
      const id4Chars = modelPathToId.get(hashKey)!.slice(0, 4);

      // Calculate positions
      const percent = [
        (current.position[0] - min[0]) / modelSize[0],
        (current.position[1] - min[1]) / modelSize[1],
        (current.position[2] - min[2]) / modelSize[2],
      ];
      const inGameX = mapMin[0] + percent[0] * mapSize[0];
      const inGameY = mapMin[1] + percent[1] * mapSize[1];
      const inGameZ = dataHeightToGameZ(dataHeightMin
        + (dataHeightMax - dataHeightMin)
        / (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)
        * (percent[2] - terrainHeightClampPercent.lower));

      console.log(current.id, current.position, {
        percent, inGameX, inGameY, inGameZ,
      });

      if (inGameX < mapMin[0] || inGameX > mapMax[0] || inGameY < mapMin[1] || inGameY > mapMax[1]) {
        if (current.id.includes('lightray')) {
          console.warn('Placing', current.model?.relativePath, 'outside of map bounds', inGameX, inGameY);
        }
      }

      // Add doodad instance
      doodads[0].push({
        type: id4Chars,
        variation: 0,
        position: [inGameX, inGameY, inGameZ],
        angle: RadToDeg(current.rotation[2]),
        scale: [
          current.scaleFactor * rootScale[0],
          current.scaleFactor * rootScale[1],
          current.scaleFactor * rootScale[2],
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
        id: doodads[0].length,
      });

      current.children.forEach((child) => placeDoodadsRecursive(child, current));
    };

    parents.forEach((p) => placeDoodadsRecursive(p, null));

    console.log('Created', Object.keys(doodadsData.custom).length, `custom doodad types (${doodadTypesWithPitchRoll} with pitch&roll)`);
    console.log('Placed', doodads[0].length, 'doodad instances');
    return { doodadsData, doodads };
  }
}

function computeTerrainHeightMap(terrains: WowObject[]) {
  console.log('Computing terrain height map...');
  const { min, max } = computeAbsoluteMinMaxExtents(terrains);
  console.log({ min, max });

  const terrainSize = V3.sub(max, min);
  console.log({ size: terrainSize });

  const ratioZ = maxGameHeightDiff / (terrainSize[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower));
  const ratioXY = ratioZ / verticalHorizontalRatio;
  const w1 = terrainSize[0] / distancePerTile * ratioXY;
  const h1 = terrainSize[1] / distancePerTile * ratioXY;

  const height = Math.ceil(h1 / 4) * 4;
  const width = Math.ceil(w1 / 4) * 4;

  console.log({ ratio: ratioZ, width, height });

  const heightMap = Array.from({ length: height + 1 }, () => Array<number>(width + 1).fill(-1));
  terrains.forEach((terrain) => {
    terrain.model!.mdl.geosets
      .forEach((geoset) => geoset.vertices.forEach((v) => {
        const rotatedV = rotateVector(v, terrain.rotation);
        const position = V3.sum(terrain.position, rotatedV);

        // console.log({ position, min, max });

        const percent = [
          (position[0] - min[0]) / terrainSize[0],
          (position[1] - min[1]) / terrainSize[1],
          (position[2] - (min[2] + terrainSize[2] * terrainHeightClampPercent.lower)) / (terrainSize[2] * (terrainHeightClampPercent.upper - terrainHeightClampPercent.lower)),
        ];

        const i = Math.round((1 - percent[1]) * height);
        const j = Math.round(percent[0] * width);
        if (i < 0 || i > height || j < 0 || j > width) {
          console.error('Out of bounds', {
            i, j, percent, position,
          });
          throw new Error('Out of bounds');
        }

        heightMap[i][j] = Math.max(heightMap[i][j], Math.max(0, Math.min(1, percent[2])));
      }));
  });

  return {
    heightMap, height, width,
  };
}
