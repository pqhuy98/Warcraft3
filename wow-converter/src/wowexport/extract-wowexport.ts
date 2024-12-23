import { mkdirSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import path from 'path';

import {
  assetPrefix, mapPath, terrainHeightClampPercent, updateDoodadModels, updateTextures, wowExportPath,
} from '../../config';
import { blp2Image } from '../blp/blp';
import { convertObjMdl } from '../objmdl';
import { MDL } from '../objmdl/mdl';
import { readDoodadsCsv } from './read-doodads-data';

function isTerrainFile(filePath: string) {
  return path.basename(filePath).startsWith('adt_');
}

export async function extractWowExportData() {
  let objFiles = await glob(`${wowExportPath}/**/*.obj`);
  if (!updateDoodadModels) {
    objFiles = objFiles.filter((f) => isTerrainFile(f));
  }

  const processedMaterials = new Set<string>();
  const terrainAdts: [MDL, string][] = [];

  // Convert all .obj to .mdl. Write doodads, but saving terrain files to list for post-processing
  objFiles.forEach((objFile) => {
    console.log('Converting', objFile);
    const { mdl, mtlPaths } = convertObjMdl(objFile, wowExportPath);

    const outputFile = objFile
      .replace(path.normalize(wowExportPath), path.join(path.normalize(mapPath), assetPrefix))
      .replace('.obj', '.mdl');

    if (!isTerrainFile(objFile)) {
      console.log('Converted doodad to', outputFile);
      mkdirSync(path.dirname(outputFile), { recursive: true });
      writeFileSync(outputFile, mdl.toString());
    } else {
      terrainAdts.push([mdl, outputFile]);
      console.log('Store terrain for post-processing', outputFile);
    }

    if (updateTextures) {
      mtlPaths.forEach((mtlPath) => {
        if (processedMaterials.has(mtlPath)) {
          return;
        }
        const fromPath = path.join(wowExportPath, mtlPath);
        const toPath = path.join(mapPath, assetPrefix, mtlPath.replace('.png', '.blp'));
        console.log('Converting', fromPath, 'to', toPath);
        blp2Image(fromPath, toPath, 'blp');
        processedMaterials.add(mtlPath);
      });
    }

    console.log('--------------------------------');
  });

  // Post-process terrain files. Conpute center point and translates all vertices
  console.log('Post-processing terrain files');
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  terrainAdts.forEach(([mdl]) => {
    mdl.sync();
    min[0] = Math.min(min[0], mdl.model.minimumExtent[0]);
    min[1] = Math.min(min[1], mdl.model.minimumExtent[1]);
    min[2] = Math.min(min[2], mdl.model.minimumExtent[2]);
    max[0] = Math.max(max[0], mdl.model.maximumExtent[0]);
    max[1] = Math.max(max[1], mdl.model.maximumExtent[1]);
    max[2] = Math.max(max[2], mdl.model.maximumExtent[2]);
  });

  const center = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];

  console.log('Total min/max extents', min, max);
  console.log('Dimension', (max[0] - min[0]), (max[1] - min[1]), (max[2] - min[2]));
  console.log('Total center', center);

  // find vertex closest to center (only X, Y coordinates are used)
  let closestVertex = terrainAdts[0][0].geosets[0].vertices[0];
  const distance = (v: number[]) => Math.sqrt((v[0] - center[0]) ** 2 + (v[1] - center[1]) ** 2);
  const vertices = terrainAdts.flatMap((mdl) => mdl[0].geosets.flatMap((geoset) => geoset.vertices));
  vertices.forEach((v) => {
    const d = distance(v);
    if (d < distance(closestVertex)) {
      closestVertex = v;
    }
  });

  // For delta, X, Y are center, Z is the height of the closest vertex to center
  // so that after translation, the center is at (0, 0, 0)
  const zDiff = max[2] - min[2];
  let zLower = min[2] + zDiff * terrainHeightClampPercent.lower;
  let zUpper = min[2] + zDiff * terrainHeightClampPercent.upper;
  const delta = [
    center[0],
    center[1],
    Math.max(zLower, Math.min(zUpper, closestVertex[2])),
  ];
  console.log('Translation delta', delta);
  vertices.forEach((v) => {
    v[0] -= delta[0];
    v[1] -= delta[1];
    v[2] -= delta[2];
  });
  min[0] -= delta[0];
  min[1] -= delta[1];
  min[2] -= delta[2];
  max[0] -= delta[0];
  max[1] -= delta[1];
  max[2] -= delta[2];
  zLower -= delta[2];
  zUpper -= delta[2];

  terrainAdts.forEach(([mdl, outputFile]) => {
    mdl.sync();
    mdl.setInfiniteExtents();
    mkdirSync(path.dirname(outputFile), { recursive: true });
    writeFileSync(outputFile, mdl.toString());
    console.log('Wrote terrain file', outputFile);
    mdl.sync();
  });

  console.log('After translation, extents:', min, max);

  const wowDoodads = await readDoodadsCsv(wowExportPath);

  wowDoodads.forEach((row) => {
    row.model = row.model.replace('.obj', '.mdl');
    row.position[0] -= delta[0];
    row.position[1] -= delta[1];
    row.position[2] -= delta[2];
  });

  const dmin = [
    wowDoodads.reduce((acc, r) => Math.min(acc, r.position[0]), wowDoodads[0].position[0]),
    wowDoodads.reduce((acc, r) => Math.min(acc, r.position[1]), wowDoodads[0].position[1]),
    wowDoodads.reduce((acc, r) => Math.min(acc, r.position[2]), wowDoodads[0].position[2]),
  ];
  const dmax = [
    wowDoodads.reduce((acc, r) => Math.max(acc, r.position[0]), wowDoodads[0].position[0]),
    wowDoodads.reduce((acc, r) => Math.max(acc, r.position[1]), wowDoodads[0].position[1]),
    wowDoodads.reduce((acc, r) => Math.max(acc, r.position[2]), wowDoodads[0].position[2]),
  ];
  const ddiff = [
    dmax[0] - dmin[0],
    dmax[1] - dmin[1],
    dmax[2] - dmin[2],
  ];
  console.log('dmin', dmin, 'dmax', dmax, 'ddiff', ddiff);

  return { wowDoodads, terrainAdts };
}
