import * as path from 'path';

import { wowExportPath } from '../../config';
import { Wc3Converter } from './wc3-exporter';
import { WowObjectManager } from './wow-object-manager';

// eslint-disable-next-line @typescript-eslint/no-shadow
export async function generate(adtPatten: string, assetPrefix: string) {
  const wowObjectManager = new WowObjectManager({
    wowExportPath: wowExportPath.replace(path.sep, '/'),
    assetPrefix,
  });
  await wowObjectManager.parse(adtPatten);

  const terrain = wowObjectManager.terrains;

  wowObjectManager.centerByParents(terrain);
  const war3Exporter = new Wc3Converter();

  const terrainMDLs = terrain.map((o) => o.model!.mdl);
  war3Exporter.generateTerrainFromAdt(terrainMDLs);
  war3Exporter.placeDoodads(
    terrain,
    [...wowObjectManager.objects.values()],
  );

  return {
    wowObjectManager,
    war3Exporter,
    write: (mapPathToWrite: string) => {
      wowObjectManager.assetManager.exportModels(mapPathToWrite);
      wowObjectManager.assetManager.exportMaterials(mapPathToWrite);
      war3Exporter.writeTerrain(mapPathToWrite);
      war3Exporter.writeDoodads(mapPathToWrite);
    },
  };
}
