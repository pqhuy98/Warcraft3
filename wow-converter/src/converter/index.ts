import { unlinkSync, writeFileSync } from 'fs';
import * as path from 'path';

import { defaultConvertOptions, mapAngle, wowExportPath } from '../global-config';
import { radians } from '../math/rotation';
import { DoodadsTranslator, ObjectsTranslator, TerrainTranslator } from '../wc3maptranslator';
import { ObjectType } from '../wc3maptranslator/data';
import { Wc3Converter } from './wc3-converter';
import { WowObjectManager } from './wow-object-manager';

// eslint-disable-next-line @typescript-eslint/no-shadow
export async function generate(adtPattern: string, assetPrefix: string) {
  const wowObjectManager = new WowObjectManager({
    wowExportPath: wowExportPath.replace(path.sep, '/'),
    assetPrefix,
  });
  await wowObjectManager.parse(adtPattern);

  const roots = wowObjectManager.roots;

  wowObjectManager.rotateRootsAtCenter([0, 0, radians(-90 + mapAngle)]);

  const war3Exporter = new Wc3Converter();

  const wc3Terrain = war3Exporter.generateTerrainWithHeight(roots, defaultConvertOptions);
  const { doodadsData, doodads } = war3Exporter.placeDoodads(roots, wc3Terrain, defaultConvertOptions);

  return {
    wowObjectManager,
    war3Exporter,
    write: (mapPathToWrite: string) => {
      wowObjectManager.assetManager.exportModels(mapPathToWrite);
      wowObjectManager.assetManager.exportMaterials(mapPathToWrite);
      writeFileSync(
        path.join(mapPathToWrite, 'war3map.w3e'),
        TerrainTranslator.jsonToWar(wc3Terrain).buffer,
      );
      writeFileSync(
        path.join(mapPathToWrite, 'war3map.w3d'),
        ObjectsTranslator.jsonToWar(ObjectType.Doodads, doodadsData).buffer,
      );
      writeFileSync(
        path.join(mapPathToWrite, 'war3map.doo'),
        DoodadsTranslator.jsonToWar(doodads).buffer,
      );
      try {
        unlinkSync(path.join(mapPathToWrite, 'war3map.shd'));
      } catch (e) {
        // ignore
      }
    },
  };
}
