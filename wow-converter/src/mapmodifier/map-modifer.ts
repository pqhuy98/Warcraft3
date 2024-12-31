import assert from 'assert';

import { distancePerTile } from '../constants';
import { getInitialTerrain } from '../utils';
import { DoodadList, Terrain } from '../wc3maptranslator/data';

export interface Map {
  terrain: Terrain;
  doodads: DoodadList;
}

export function mergeMapsLeftToRight(maps: [Map, Map]) {
  for (const map of maps) {
    assert.strictEqual(map.terrain.tileset, maps[0].terrain.tileset);
    assert.strictEqual(map.terrain.customTileset, maps[0].terrain.customTileset);
    assert.strictEqual(map.terrain.tilePalette, maps[0].terrain.tilePalette);
    assert.strictEqual(map.terrain.cliffTilePalette, maps[0].terrain.cliffTilePalette);
  }

  const newHeight = Math.max(maps[0].terrain.map.height, maps[1].terrain.map.height);
  const newWidth = maps[0].terrain.map.width + maps[1].terrain.map.width + 1;

  const xyOffsets = [
    maps[0].terrain.map.offset,
    {
      x: maps[1].terrain.map.offset.x + maps[0].terrain.map.width * distancePerTile,
      y: maps[1].terrain.map.offset.y,
    },
  ];
  const tileOffset = [
    { i: 0, j: 0 },
    { i: 0, j: maps[0].terrain.map.width + 1 },
  ];
  const newMap: Map = {
    terrain: getInitialTerrain(newHeight, newWidth),
    doodads: [[], []],
  };
  maps.forEach((map, mapIdx) => {
    // merge terrain
    for (let i = 0; i < map.terrain.groundHeight.length; i++) {
      for (let j = 0; i < map.terrain.groundHeight[i].length; j++) {
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
            doodad.position[0] + xyOffsets[mapIdx].x,
            doodad.position[1] + xyOffsets[mapIdx].y,
            doodad.position[2],
          ],
        });
      });
    });
  });
  return newMap;
}
