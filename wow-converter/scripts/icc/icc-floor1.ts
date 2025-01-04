import { readFileSync, unlinkSync, writeFileSync } from 'fs';
import _ from 'lodash';
import { join, sep } from 'path';

import { distancePerTile } from '../../src/constants';
import { ConvertOptions } from '../../src/converter/common';
import { Wc3Converter } from '../../src/converter/wc3-converter';
import { WowObjectManager } from '../../src/converter/wow-object-manager';
import {
  assetPrefix, dataHeightMin, defaultConvertOptions, wowExportPath,
} from '../../src/global-config';
import { mergeMapsLeftToRight, Wc3Map } from '../../src/mapmodifier/map-modifer';
import { matchTerrainToDoodadHeights } from '../../src/mapmodifier/terrain-height-matcher';
import { radians } from '../../src/math/rotation';
import { V3 } from '../../src/math/vector';
import { dataHeightToGameZ, getInitialTerrain } from '../../src/utils';
import { DoodadsTranslator, ObjectsTranslator, TerrainTranslator } from '../../src/wc3maptranslator';
import {
  Doodad, DoodadList, ModificationType, ObjectModificationTable, ObjectType,
} from '../../src/wc3maptranslator/data';

const mapPath = './maps/icc-floor12.w3x';

const mapPadding = 20;

const options: ConvertOptions = {
  ...defaultConvertOptions,
  waterZThreshold: -2000,
  terrainHeightClampPercent: {
    upper: 0.56,
    lower: 0.3,
  },
};
const war3Exporter = new Wc3Converter();

function getModelFile(id: string, doodadsData: ObjectModificationTable) {
  return doodadsData.custom[Object.keys(doodadsData.custom).find(((k) => k.startsWith(id)))!][0].value as string;
}

function buildFloor1Map(wowObjectManager: WowObjectManager) {
  const allDoodadsZ = wowObjectManager.doodads.map((d) => d.position[2]);
  const minZ = _.min(allDoodadsZ)!;
  const maxZ = _.max(allDoodadsZ)!;

  // Floor 1
  const iccModel = 'icecrownraid_set0';
  const { doodads, doodadsData } = war3Exporter.placeDoodads(
    wowObjectManager.roots,
    war3Exporter.generateTerrainWithHeight(wowObjectManager.roots, options),
    options,
    (obj) => obj.position[2] < minZ + (maxZ - minZ) * 0.35 && ![
      'lightshaft', 'icecore', 'blue_fire', 'stormpeaks_fog', 'adt_',
    ].some((blacklisted) => obj.model!.relativePath.includes(blacklisted)),
  );

  const defaultDataHeight = dataHeightMin + 2000;

  // Update height
  const iccType = Object.keys(doodadsData.custom)
    .find((type) => (doodadsData.custom[type][0].value as string).includes(iccModel))!;
  const placedIcc = doodads[0].find((d) => d.type === iccType.slice(0, 4))!;
  const zDelta = placedIcc.position[2] - dataHeightToGameZ(defaultDataHeight);
  console.log({ zDelta });
  doodads[0].forEach((d) => {
    d.position[2] -= zDelta;
  });

  // Generate map that fits
  const posMin = doodads[0].reduce((min, d) => V3.min(min, d.position), V3.all(Infinity));
  const posMax = doodads[0].reduce((max, d) => V3.max(max, d.position), V3.all(-Infinity));
  const posCenter = V3.mean(posMin, posMax);
  const posDiff = V3.sub(posMax, posMin);
  const width = Math.ceil((posDiff[0] / distancePerTile + mapPadding) / 4) * 4;
  const height = Math.ceil((posDiff[1] / distancePerTile + mapPadding) / 4) * 4;
  console.log('Final map size', { height, width });

  const floor1Terrain = getInitialTerrain(height, width, dataHeightMin + 2000);

  doodads[0].forEach((d) => {
    d.position[0] -= posCenter[0];
    d.position[1] -= posCenter[1];
  });

  // Tweak ICC model and color
  const noRoofPath = 'icecrownraid_set0.floor1.mdl';
  doodadsData.custom[iccType][0].value = noRoofPath;
  doodadsData.custom[iccType].push(
    // 150 190 235
    {
      id: 'dvr1', type: ModificationType.int, level: 0, column: 0, value: 210,
    },
    {
      id: 'dvg1', type: ModificationType.int, level: 0, column: 0, value: 230,
    },
    {
      id: 'dvb1', type: ModificationType.int, level: 0, column: 0, value: 255,
    },
  );

  // Raise terrain to match ICC
  const bonePiles = doodads[0].filter((d) => getModelFile(d.type, doodadsData).includes('bonepile'));
  const bonePilesGroundMdlStr = readFileSync(join(mapPath, '/wow/world/expansion02/doodads/icecrown/bones/icecrown_bonepile_light_01.mdl'), 'utf-8');

  matchTerrainToDoodadHeights(floor1Terrain, [
    [placedIcc, readFileSync(join(mapPath, 'icecrownraid_set0.floor1.ground.mdl'), 'utf-8')],
    ...bonePiles.map((d) => <[Doodad, string]>[d, bonePilesGroundMdlStr]),
  ]);

  placeBlueFireInBraziers(doodads, doodadsData);

  return <Wc3Map>{
    terrain: floor1Terrain,
    doodads,
    doodadsData,
  };
}

function buildFloor2Map(wowObjectManager: WowObjectManager) {
  const allDoodadsZ = wowObjectManager.doodads
    .filter((d) => !d.id.includes('adt_'))
    .map((d) => d.position[2]);
  const minZ = _.min(allDoodadsZ)!;
  const maxZ = _.max(allDoodadsZ)!;
  // wowObjectManager.rotateRootsAtCenter([0, 0, radians(180)]);

  const iccModel = 'icecrownraid_set0';
  const terrainWithHeight = war3Exporter.generateTerrainWithHeight(wowObjectManager.roots, options);
  const { doodads, doodadsData } = war3Exporter.placeDoodads(
    wowObjectManager.roots,
    terrainWithHeight,
    options,
    (obj) => obj.id.includes('adt_')
    || obj.id.includes(iccModel)
    || obj.position[2] > minZ + (maxZ - minZ) * 0.35
    && obj.position[2] < minZ + (maxZ - minZ) * 0.7
    && ![
      'lightshaft', 'icecore', 'blue_fire', 'stormpeaks_fog',
    ].some((blacklisted) => obj.model!.relativePath.includes(blacklisted)),
  );

  const defaultDataHeight = dataHeightMin + 2000;

  // Tweak ICC model and color
  const iccType = Object.keys(doodadsData.custom)
    .find((type) => (doodadsData.custom[type][0].value as string).includes(iccModel))!;
  const placedIcc = doodads[0].find((d) => d.type === iccType?.slice(0, 4))!;
  console.log(doodadsData.custom[iccType]);
  doodadsData.custom[iccType][0].value = 'icecrownraid_set0.floor2.mdl';
  doodadsData.custom[iccType].push(
    {
      id: 'dvr1', type: ModificationType.int, level: 0, column: 0, value: 210,
    },
    {
      id: 'dvg1', type: ModificationType.int, level: 0, column: 0, value: 230,
    },
    {
      id: 'dvb1', type: ModificationType.int, level: 0, column: 0, value: 255,
    },
  );

  // Update height
  const ddMap = new Map(Object.keys(doodadsData.custom).map((k) => [k.slice(0, 4), doodadsData.custom[k]]));
  const notIcc = doodads[0].find((d) => d !== placedIcc
    && !(ddMap.get(d.type)![0].value as string).includes('adt_'))!;
  const zDelta = notIcc.position[2] - dataHeightToGameZ(defaultDataHeight);
  console.log({ zDelta });
  doodads[0].forEach((d) => {
    d.position[2] -= zDelta;
  });

  // raise ADT doodads
  const adtDoodads = doodads[0].filter((d) => (ddMap.get(d.type)![0].value as string).includes('adt_'));
  const raiseAmount = (maxZ - minZ) * 0.195 * placedIcc.scale[2];
  console.log('Raise', adtDoodads.length, 'ADTs by', raiseAmount);
  adtDoodads.forEach((d) => d.position[2] += raiseAmount);

  const { height, width } = terrainWithHeight.map;
  console.log('Final map size', { height, width });

  const terrain = getInitialTerrain(height, width, defaultDataHeight);
  const groundModelStr = readFileSync(join(mapPath, 'icecrownraid_set0.floor2.ground.mdl'), 'utf-8');
  console.log(groundModelStr.slice(307708 - 10, 307708));

  const bonePiles = doodads[0].filter((d) => getModelFile(d.type, doodadsData).includes('bonepile'));
  const bonePilesGroundMdlStr = readFileSync(join(mapPath, 'wow/world/expansion02/doodads/icecrown/bones/icecrown_bonepile_light_01.mdl'), 'utf-8');

  const shipRamps = doodads[0].filter((d) => getModelFile(d.type, doodadsData).includes('shipramp_horde'));
  const shipRampGroundMdlStr = readFileSync(join(mapPath, 'shipramp_horde_01.ground.mdl'), 'utf-8');

  matchTerrainToDoodadHeights(terrain, [
    [placedIcc, readFileSync(join(mapPath, 'icecrownraid_set0.floor2.ground.mdl'), 'utf-8')],
    ...bonePiles.map((d) => <[Doodad, string]>[d, bonePilesGroundMdlStr]),
    ...shipRamps.map((d) => <[Doodad, string]>[d, shipRampGroundMdlStr]),
  ]);

  placeBlueFireInBraziers(doodads, doodadsData);

  return <Wc3Map>{
    terrain,
    doodads,
    doodadsData,
  };
}

async function main() {
  const wowObjectManager = new WowObjectManager({
    wowExportPath: wowExportPath.replace(sep, '/'),
    assetPrefix,
  });
  await wowObjectManager.parse('**/icecrowncitadel/adt_*.obj');
  wowObjectManager.rotateRootsAtCenter([0, 0, radians(-90 + 180)]);
  wowObjectManager.assetManager.exportModels(mapPath);
  wowObjectManager.assetManager.exportMaterials(mapPath);

  const floor1Map = buildFloor1Map(wowObjectManager);
  const floor2Map = buildFloor2Map(wowObjectManager);

  console.log('Combining maps');
  const { terrain, doodads, doodadsData } = mergeMapsLeftToRight([floor2Map, floor1Map], 10);
  console.log('Combined map', terrain.map);
  console.log('Combined doodads:', doodads[0].length);
  console.log('Combined custom doodad types:', Object.keys(doodadsData.custom).length);

  // Write WC3 data
  writeFileSync(join(mapPath, 'war3map.w3e'), TerrainTranslator.jsonToWar(terrain).buffer);
  writeFileSync(
    join(mapPath, 'war3map.w3d'),
    ObjectsTranslator.jsonToWar(ObjectType.Doodads, doodadsData).buffer,
  );
  writeFileSync(
    join(mapPath, 'war3map.doo'),
    DoodadsTranslator.jsonToWar(doodads).buffer,
  );
  try {
    unlinkSync(join(mapPath, 'war3map.shd'));
  } catch (e) {
    // ignore
  }
}

function placeBlueFireInBraziers(doodads: DoodadList, doodadsData: ObjectModificationTable) {
  // Place blue fire in brazier
  const braziers = doodads[0].filter((d) => getModelFile(d.type, doodadsData).includes('brazier'));
  const typeBlueFire = 'YOfb';
  braziers.forEach((d) => {
    doodads[0].push({
      type: typeBlueFire,
      variation: 0,
      position: [...d.position],
      angle: d.angle,
      scale: [...d.scale],
      skinId: typeBlueFire,
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
}

void main();
