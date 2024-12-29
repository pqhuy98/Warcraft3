import * as path from 'path';

import { wowExportPath } from '../global-config';
import { Wc3Converter } from './wc3-exporter';
import { WowObjectManager } from './wow-object-manager';

// eslint-disable-next-line @typescript-eslint/no-shadow
export async function generate(adtPatten: string, assetPrefix: string) {
  const wowObjectManager = new WowObjectManager({
    wowExportPath: wowExportPath.replace(path.sep, '/'),
    assetPrefix,
  });
  await wowObjectManager.parse(adtPatten);

  const terrains = wowObjectManager.terrains;

  wowObjectManager.centerByParents(terrains);
  // terrains.forEach((t) => {
  //   t.position[0] = 0;
  //   t.position[1] = 0;
  //   t.position[2] = 0;
  //   wowObjectManager.centerByParents([t]);
  // });

  const terrainMDLs = terrains.map((o) => o.model!.mdl);
  const war3Exporter = new Wc3Converter();
  war3Exporter.generateTerrainFromAdt(terrainMDLs);
  war3Exporter.placeDoodads(
    terrains,
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
