import assert from 'assert';

import { distancePerTile } from '../constants';
import { getInitialTerrain } from '../utils';
import { DoodadList, ObjectModificationTable, Terrain } from '../wc3maptranslator/data';

export interface Wc3Map {
  terrain: Terrain;
  doodads: DoodadList;
  doodadsData: ObjectModificationTable
}

export function mergeMapsLeftToRight(maps: [Wc3Map, Wc3Map], padding: number) {
  for (const map of maps) {
    assert.deepStrictEqual(map.terrain.tileset, maps[0].terrain.tileset);
    assert.deepStrictEqual(map.terrain.customTileset, maps[0].terrain.customTileset);
    assert.deepStrictEqual(map.terrain.tilePalette, maps[0].terrain.tilePalette);
    assert.deepStrictEqual(map.terrain.cliffTilePalette, maps[0].terrain.cliffTilePalette);
  }

  const newHeight = Math.max(maps[0].terrain.map.height, maps[1].terrain.map.height);
  const newWidth = Math.ceil((maps[0].terrain.map.width + maps[1].terrain.map.width + 1 + padding) / 4) * 4;
  console.log(newWidth);
  const terrain = getInitialTerrain(newHeight, newWidth);

  const xyDelta = [
    {
      x: -maps[0].terrain.map.offset.x + terrain.map.offset.x,
      y: -maps[0].terrain.map.offset.y + terrain.map.offset.y,
    },
    {
      x: -maps[1].terrain.map.offset.x + (maps[0].terrain.map.width + padding) * distancePerTile + terrain.map.offset.x,
      y: -maps[1].terrain.map.offset.y + terrain.map.offset.y,
    },
  ];
  const tileOffset = [
    { i: 0, j: 0 },
    { i: 0, j: maps[0].terrain.map.width + padding },
  ];
  const newMap: Wc3Map = {
    terrain,
    doodads: [[], []],
    doodadsData: {
      original: {},
      custom: {},
    },
  };
  maps.forEach((map, mapIdx) => {
    // merge terrain
    for (let i = 0; i < map.terrain.groundHeight.length; i++) {
      for (let j = 0; j < map.terrain.groundHeight[i].length; j++) {
        const newI = i + tileOffset[mapIdx].i;
        const newJ = j + tileOffset[mapIdx].j;
        newMap.terrain.groundHeight[newI][newJ] = map.terrain.groundHeight[i][j];
        newMap.terrain.waterHeight[newI][newJ] = map.terrain.waterHeight[i][j];
        newMap.terrain.boundaryFlag[newI][newJ] = map.terrain.boundaryFlag[i][j];
        newMap.terrain.flags[newI][newJ] = map.terrain.flags[i][j];
        newMap.terrain.groundTexture[newI][newJ] = map.terrain.groundTexture[i][j];
        newMap.terrain.groundVariation[newI][newJ] = map.terrain.groundVariation[i][j];
        newMap.terrain.cliffVariation[newI][newJ] = map.terrain.cliffVariation[i][j];
        newMap.terrain.cliffTexture[newI][newJ] = map.terrain.cliffTexture[i][j];
        newMap.terrain.layerHeight[newI][newJ] = map.terrain.layerHeight[i][j];
      }
    }
    // merge doodads
    map.doodads.forEach((doodads, idx) => {
      doodads.forEach((doodad) => {
        newMap.doodads[idx].push({
          ...doodad,
          position: [
            doodad.position[0] + xyDelta[mapIdx].x,
            doodad.position[1] + xyDelta[mapIdx].y,
            doodad.position[2],
          ],
        });
      });
    });
    // merge doodad types
    newMap.doodadsData.original = {
      ...newMap.doodadsData.original,
      ...map.doodadsData.original,
    };
    newMap.doodadsData.custom = {
      ...newMap.doodadsData.custom,
      ...map.doodadsData.custom,
    };
  });
  return newMap;
}
