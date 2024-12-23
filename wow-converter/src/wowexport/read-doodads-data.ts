import csv from 'csv-parser';
import { createReadStream } from 'fs';
import { glob } from 'glob';
import * as path from 'path';

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
      .on('data', (row: object) => {
        if (Object.keys(row).length > 1) {
          rows.push(row as WowRow);
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

  const allDoodads = (await Promise.all(files.map(async (file) => {
    const doodads = (await readCSVFile(file, separator))
      .map((row) => (<Doodad>{
        id: row.ModelId,
        model: path.relative(wowExportPath, path.join(path.dirname(file), row.ModelFile)),
        position: [maxSize - parseFloat(row.PositionZ), maxSize - parseFloat(row.PositionX), parseFloat(row.PositionY)],
        rotation: parseFloat(row.RotationY),
        scale: parseFloat(row.ScaleFactor),
      }));
    return doodads;
  }))).flat();
  console.log(`Total rows of ${pattern}: ${allDoodads.length}`);

  // Remove doodads with same ids
  const ids = new Set<string>();
  const result: Doodad[] = [];
  allDoodads.forEach((d) => {
    if (!ids.has(d.id)) {
      ids.add(d.id);
      result.push(d);
    }
  });

  return result;
}

export async function readDoodadsCsv(wowExportPath: string) {
  const globPattern = path.join(wowExportPath, '**/*.csv')
    .replaceAll(path.sep, '/');
  const doodads: Doodad[] = await readAllCSVFiles(globPattern, ';', wowExportPath);
  return doodads;
}
