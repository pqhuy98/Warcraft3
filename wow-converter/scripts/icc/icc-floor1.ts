import { unlinkSync, writeFileSync } from 'fs';
import _ from 'lodash';
import { join, sep } from 'path';

import { distancePerTile } from '../../src/constants';
import {
  assetPrefix, dataHeightMin, defaultConvertOptions, wowExportPath,
} from '../../src/global-config';
import { radians } from '../../src/math/rotation';
import { V3 } from '../../src/math/vector';
import { dataHeightToGameZ, getInitialTerrain } from '../../src/utils';
import { DoodadsTranslator, ObjectsTranslator, TerrainTranslator } from '../../src/wc3maptranslator';
import { ObjectType } from '../../src/wc3maptranslator/data';
import { ConvertOptions } from '../../src/wowexport/common';
import { Wc3Converter } from '../../src/wowexport/wc3-converter';
import { WowObjectManager } from '../../src/wowexport/wow-object-manager';

const mapPath = './maps/test.w3x';

const mapPadding = 12;

async function main() {
  const wowObjectManager = new WowObjectManager({
    wowExportPath: wowExportPath.replace(sep, '/'),
    assetPrefix,
  });
  await wowObjectManager.parse('**/icecrowncitadel/adt_*.obj');
  wowObjectManager.rotateRootsAtCenter([0, 0, radians(-90 + 180)]);
  wowObjectManager.assetManager.exportModels(mapPath);
  wowObjectManager.assetManager.exportMaterials(mapPath);

  const war3Exporter = new Wc3Converter();

  const allDoodadsZ = wowObjectManager.doodads.map((d) => d.position[2]);
  const minZ = _.min(allDoodadsZ)!;
  const maxZ = _.max(allDoodadsZ)!;

  // Floor 1
  const iccModel = 'icecrownraid_set0';
  const icc = wowObjectManager.doodads.find((d) => d.id.includes(iccModel))!;
  const options: ConvertOptions = {
    ...defaultConvertOptions,
    waterZThreshold: -2000,
    terrainHeightClampPercent: {
      upper: 0.1,
      lower: 0,
    },
  };

  const { doodads, doodadsData } = war3Exporter.placeDoodads(
    [icc],
    war3Exporter.generateTerrainWithHeight([icc], options),
    options,
    (obj) => obj.position[2] < minZ + (maxZ - minZ) * 0.35 && ![
      'lightshaft', 'icecore', 'blue_fire', 'stormpeaks_fog',
    ].some((blacklisted) => obj.model!.relativePath.includes(blacklisted)),
  );

  const defaultDataHeight = dataHeightMin + 2000;

  // Update height
  const iccType = Object.keys(doodadsData.custom)
    .find((type) => (doodadsData.custom[type][0].value as string).includes(iccModel))!;
  const placedIcc = doodads[0].find((d) => d.type === iccType?.slice(0, 4))!;
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

  const noRoofPath = 'icecrownraid_set0.final.mdl';
  doodadsData.custom[iccType][0].value = noRoofPath;

  // Write floor 1
  writeFileSync(join(mapPath, 'war3map.w3e'), TerrainTranslator.jsonToWar(floor1Terrain).buffer);
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

void main();
