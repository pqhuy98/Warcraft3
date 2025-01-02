import * as path from 'path';

import { distancePerTile } from '../constants';
import {
  dataHeightMax, dataHeightMin,
} from '../global-config';
import { Vector3 } from '../math/model';
import { calculateChildAbsoluteEulerRotation, degrees } from '../math/rotation';
import { V3 } from '../math/vector';
import {
  dataHeightToGameZ,
  generateFourCC, getInitialTerrain, maxGameHeightDiff, waterZToDataHeight,
} from '../utils';
import {
  DoodadList, Modification, ModificationType, ObjectModificationTable, Terrain,
} from '../wc3maptranslator/data';
import { ConvertOptions, WowObject } from './common';
import { computeAbsoluteMinMaxExtents } from './model-manager';

enum TerrainFlag {
  Unwalkable = 2,
  Unflyable = 4,
  Unbuildable = 8,
  Ramp = 16,
  Blight = 32,
  Water = 64,
  Boundary = 128,
}

const baseDoodadType = 'YOtf';

export class Wc3Converter {
  constructor() {
  }

  generateTerrainWithHeight(terrainObjs: WowObject[], options: ConvertOptions): Terrain {
    console.log('Generating terrain from', terrainObjs.length, 'ADT files');

    const {
      heightMap, height, width,
    } = computeTerrainHeightMap(terrainObjs, options);

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
    const waterHeightThreshold = waterZToDataHeight(options.waterZThreshold);
    for (let i = 0; i < heightMap.length; i++) {
      for (let j = 0; j < heightMap[i].length; j++) {
        if (terrain.groundHeight[i][j] < waterHeightThreshold) {
          terrain.flags[i][j] |= TerrainFlag.Water;
          terrain.waterHeight[i][j] = waterHeightThreshold;
          terrain.groundHeight[i][j] = Math.min(terrain.groundHeight[i][j], waterHeightThreshold - 1);
          // Make sure we don't overflow the limit
          terrain.groundHeight[i][j] = Math.max(dataHeightMin, Math.min(dataHeightMax, terrain.groundHeight[i][j]));
        }
      }
    }

    for (let i = 0; i < heightMap.length; i++) {
      for (let j = 0; j < heightMap[i].length; j++) {
        if (terrain.groundHeight[i][j] >= dataHeightMax) {
          terrain.flags[i][j] |= (TerrainFlag.Unflyable | TerrainFlag.Unwalkable | TerrainFlag.Unbuildable);
        }
      }
    }
    return terrain;
  }

  placeDoodads(roots: WowObject[], terrain: Terrain, options: ConvertOptions, filter: (obj: WowObject) => boolean = () => true) {
    const doodadsData: ObjectModificationTable = {
      original: {},
      custom: {},
    };

    const doodads: DoodadList = [[], []];

    console.log('Placing doodads');

    const { min, max } = computeAbsoluteMinMaxExtents(roots);
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

    // console.log('Map', { mapMin, mapMax, mapSize });
    // console.log('Parent model', { min, max, size: modelSize });

    const rootScale = [
      mapSize[0] / modelSize[0],
      mapSize[1] / modelSize[1],
      mapSize[2] / (modelSize[2] * (options.terrainHeightClampPercent.upper - options.terrainHeightClampPercent.lower)),
    ];
    console.log({ rootScale });

    const modelPathToId = new Map<string, string>();

    let doodadTypesWithPitchRoll = 0;
    const placeDoodadsRecursive = (obj: WowObject, parentAbsolute: WowObject | null) => {
      // console.log('================================');
      const objAbsolute = { ...obj };
      if (parentAbsolute) {
        const relativePos = V3.rotate(obj.position, parentAbsolute.rotation);
        objAbsolute.position = V3.sum(parentAbsolute.position, relativePos);
        objAbsolute.rotation = calculateChildAbsoluteEulerRotation(parentAbsolute.rotation, objAbsolute.rotation);
        objAbsolute.scaleFactor *= parentAbsolute.scaleFactor;
        // console.log('Translating', obj.id, 'based on parent', parentAbsolute.id);
        // console.log({ childOldPos: obj.position, parentAbsRot: parentAbsolute.rotation });
        // console.log({ relativePos, parentAbsPos: parentAbsolute.position, childAbsPos: objAbsolute.position });
      }

      if (filter(obj)) {
        // WC3 pitch and roll must be negative, required by World Editor
        const wc3Roll = (-objAbsolute.rotation[0]) % (Math.PI * 2) - Math.PI * 2;
        const wc3Pitch = (-objAbsolute.rotation[1]) % (Math.PI * 2) - Math.PI * 2;

        const hasRollPitch = (true || !['adt', 'wmo'].includes(objAbsolute.type))
        && Math.abs(wc3Roll) > options.pitchRollThresholdRadians
        && Math.abs(wc3Pitch) > options.pitchRollThresholdRadians;

        const fileName = obj.model!.relativePath;
        const hashKey = hasRollPitch
          ? [fileName, objAbsolute.rotation[0].toFixed(2), objAbsolute.rotation[1].toFixed(2)].join(';')
          : fileName;

        // Insert new doodad type if not exists
        if (!modelPathToId.has(hashKey)) {
          const fullId = `${generateFourCC().codeString}:${baseDoodadType}`;
          // Prefix generated doodads with z so that they are shown last in Object Editor.
          // To avoid mixing with manually added custom doodads. Also add FourCC id and obj.id for debugging.
          const doodadName = `z ${path.basename(obj.model!.relativePath)} -- ${obj.type} -- ${fullId.slice(0, 4)} -- ${obj.id}`;

          const doodadType: Modification[] = [
            {
              id: 'dfil', type: ModificationType.string, level: 0, column: 0, value: fileName,
            },
            {
              id: 'dnam', type: ModificationType.string, level: 0, column: 0, value: doodadName,
            },
            {
              id: 'dmas',
              type: ModificationType.unreal,
              level: 0,
              column: 0,
              value: objAbsolute.scaleFactor * Math.max(...rootScale) * 1.5,
            },
            {
              id: 'dmis',
              type: ModificationType.unreal,
              level: 0,
              column: 0,
              value: objAbsolute.scaleFactor * Math.min(...rootScale) / 1.5,
            },
            {
              id: 'dvis', type: ModificationType.unreal, level: 0, column: 0, value: 99999,
            },
            {
              id: 'duch', type: ModificationType.int, level: 0, column: 0, value: 0,
            },
            {
              id: 'dsnd', type: ModificationType.string, level: 0, column: 0, value: '',
            },
            {
              id: 'danf', type: ModificationType.int, level: 0, column: 0, value: 1,
            },
            {
              id: 'dshf', type: ModificationType.int, level: 0, column: 0, value: 1,
            },
          ];
          if (hasRollPitch) {
            doodadType.push(
              { // roll, must be unreal even though in Editor it's always negative
                id: 'dmar', type: ModificationType.unreal, level: 0, column: 0, value: wc3Roll,
              },
              { // pitch, must be unreal even though in Editor it's always negative
                id: 'dmap', type: ModificationType.unreal, level: 0, column: 0, value: wc3Pitch,
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
          (objAbsolute.position[0] - min[0]) / modelSize[0],
          (objAbsolute.position[1] - min[1]) / modelSize[1],
          (objAbsolute.position[2] - min[2]) / modelSize[2],
        ];
        const inGameX = mapMin[0] + percent[0] * mapSize[0];
        const inGameY = mapMin[1] + percent[1] * mapSize[1];
        const inGameZ = dataHeightToGameZ(dataHeightMin
        + (dataHeightMax - dataHeightMin)
        / (options.terrainHeightClampPercent.upper - options.terrainHeightClampPercent.lower)
        * (percent[2] - options.terrainHeightClampPercent.lower));

        if (inGameX < mapMin[0] || inGameX > mapMax[0] || inGameY < mapMin[1] || inGameY > mapMax[1]) {
          console.warn('Placing', objAbsolute.model?.relativePath, 'outside of map bounds.');
        // console.log(objAbsolute.id, objAbsolute.position, {
        //   percent, inGameX, inGameY, inGameZ,
        // }, { mapMin, mapMax });
        }

        // Add doodad instance
        doodads[0].push({
          type: id4Chars,
          variation: 0,
          position: [inGameX, inGameY, inGameZ],
          angle: degrees(objAbsolute.rotation[2]),
          scale: [
            objAbsolute.scaleFactor * rootScale[0] + 0.01,
            objAbsolute.scaleFactor * rootScale[1] + 0.01,
            objAbsolute.scaleFactor * rootScale[2],
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
      }

      objAbsolute.children.forEach((child) => placeDoodadsRecursive(child, objAbsolute));
    };

    roots.forEach((p) => placeDoodadsRecursive(p, null));

    console.log('Created', Object.keys(doodadsData.custom).length, `custom doodad types (${doodadTypesWithPitchRoll} with pitch&roll)`);
    console.log('Placed', doodads[0].length, 'doodad instances');
    return { doodadsData, doodads };
  }
}

function computeTerrainHeightMap(terrains: WowObject[], options: ConvertOptions) {
  // console.log('Computing terrain height map...');
  const { min, max } = computeAbsoluteMinMaxExtents(terrains);
  // console.log({ min, max });

  const terrainSize = V3.sub(max, min);
  // console.log({ terrainSize });

  const ratioZ = maxGameHeightDiff / (terrainSize[2] * (options.terrainHeightClampPercent.upper - options.terrainHeightClampPercent.lower));
  const ratioXY = ratioZ / options.verticalHorizontalRatio;
  const width = Math.ceil(terrainSize[0] / distancePerTile * ratioXY / 4) * 4;
  const height = Math.ceil(terrainSize[1] / distancePerTile * ratioXY / 4) * 4;

  // console.log({ ratio: ratioZ, height, width });

  const heightMap = Array.from({ length: height + 1 }, () => Array<number>(width + 1).fill(-1));
  terrains.forEach((terrain) => {
    terrain.model!.mdl.geosets
      .forEach((geoset) => geoset.vertices.forEach((v) => {
        const rotatedV = V3.rotate(v, terrain.rotation);
        const position = V3.sum(terrain.position, rotatedV);

        // console.log({ position, min, max });

        const percent = [
          (position[0] - min[0]) / terrainSize[0],
          (position[1] - min[1]) / terrainSize[1],
          (position[2] - (min[2] + terrainSize[2] * options.terrainHeightClampPercent.lower)) / (terrainSize[2] * (options.terrainHeightClampPercent.upper - options.terrainHeightClampPercent.lower)),
        ];

        if (percent[0] < 0 || percent[0] > 1 || percent[1] < 0 || percent[1] > 1) {
          console.error('Out of bounds', { percent, position });
          throw new Error('Out of bounds');
        }
        const iX = Math.round(percent[0] * width);
        const iY = Math.round(percent[1] * height);
        // [Y is height][X is width]
        heightMap[iY][iX] = Math.max(heightMap[iY][iX], Math.max(0, Math.min(1, percent[2])));
      }));
  });

  return {
    heightMap, height, width,
  };
}
