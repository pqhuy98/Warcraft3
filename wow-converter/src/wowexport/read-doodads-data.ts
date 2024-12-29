import csv from 'csv-parser';
import { createReadStream, writeFileSync } from 'fs';
import { glob } from 'glob';
import * as path from 'path';

import { rawModelScaleUp } from '../../config';

interface WowRow {
  ModelFile: string
  PositionX: string,
  PositionY: string,
  PositionZ: string,
  RotationX: string,
  RotationY: string,
  RotationZ: string,
  RotationW: string,
  ScaleFactor: string,
  ModelId: string,
  FileDataID: string,
  fileName: string
}

export interface Doodad {
  id: string
  model: string
  position: [number, number, number]
  rotation: number
  scale: number
}

// WoW coordinate system
const maxSize = 51200 / 3;

const readCSVFile = (file: string, separator: string): Promise<WowRow[]> => {
  const rows: WowRow[] = [];
  return new Promise((resolve, reject) => {
    createReadStream(file)
      .pipe(csv({ separator }))
      .on('data', (row: WowRow) => {
        if (Object.keys(row).length > 1) {
          row.fileName = file;
          rows.push(row);
        }
      })
      .on('end', () => {
        resolve(rows);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

async function readAllCSVFiles(pattern: string, separator: string, wowExportPath: string) {
  console.log(pattern);
  const files = await glob(pattern, {
    cwd: wowExportPath,
    absolute: true,
  });
  if (files.length === 0) {
    throw new Error('No files found matching the pattern.');
  }

  const allRows = (await Promise.all(files.map(async (file) => readCSVFile(file, separator)))).flat();
  writeFileSync('dist/wow-rows.json', JSON.stringify(allRows, null, 2));

  const allDoodads = allRows.map((row) => {
    if (row.ModelFile.includes('icecrownraid_set0')) {
      console.log('readAllCSVFiles raw', row);
    }
    return (<Doodad>{
      id: `${row.ModelId}:${row.FileDataID}:${row.ModelFile}:${row.PositionX}:${row.PositionY}:${row.PositionZ}`,
      model: path.relative(wowExportPath, path.join(path.dirname(row.fileName), row.ModelFile)),
      position: [maxSize - parseFloat(row.PositionZ), maxSize - parseFloat(row.PositionX), parseFloat(row.PositionY)],
      rotation: parseFloat(row.RotationY),
      scale: parseFloat(row.ScaleFactor),
    });
  });
  console.log(`Total rows of ${pattern}: ${allDoodads.length}`);

  // Remove doodads with same ids
  const ids = new Set<string>();
  const result: Doodad[] = [];
  allDoodads.forEach((d) => {
    if (!ids.has(d.id)) {
      if (d.model.includes('icecrownraid_set0')) {
        console.log('readAllCSVFiles', d.model, d.position);
      }

      ids.add(d.id);
      result.push(d);
      d.position[0] *= rawModelScaleUp;
      d.position[1] *= rawModelScaleUp;
      d.position[2] *= rawModelScaleUp;
      d.scale *= rawModelScaleUp;
    }
  });
  console.log(`Parsed doodads: ${allDoodads.length}`);
  console.log(`Used doodads: ${result.length}`);

  return result;
}

export async function readDoodadsCsv(wowExportPath: string) {
  const globPattern = path.join(wowExportPath, '**/*.csv')
    .replaceAll(path.sep, '/');
  const doodads: Doodad[] = await readAllCSVFiles(globPattern, ';', wowExportPath);
  return doodads;
}
