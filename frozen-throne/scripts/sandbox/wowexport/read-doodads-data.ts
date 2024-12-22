import * as path from 'path';
import {glob} from 'glob';
import * as csv from 'csv-parser';
import { createReadStream, writeFileSync } from 'fs';

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

const readCSVFile = (file: string, separator: string): Promise<WowRow[]> => {
  const rows: WowRow[] = []
  return new Promise((resolve, reject) => {
    createReadStream(file)
      .pipe(csv({ separator }))
      .on('data', (row) => {
        if (Object.keys(row).length > 1) {
          rows.push(row)
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
  console.log(pattern)
  const files = await glob(pattern, {
    cwd: wowExportPath,
    absolute: true,
  });
  if (files.length === 0) {
    throw new Error('No files found matching the pattern.');
  }

  const rows = (await Promise.all(files.map(async file => {
    const doodads = (await readCSVFile(file, separator))
    .map(row => (<Doodad>{
      id: row.ModelId,
      model: path.relative(wowExportPath, path.join(file, row.ModelFile)),
      position: [parseFloat(row.PositionZ), parseFloat(row.PositionX), parseFloat(row.PositionY)],
      rotation: parseFloat(row.RotationY),
      scale: parseFloat(row.ScaleFactor)
    }))
    return doodads
  }))).flat();
  console.log(`Total rows of ${pattern}: ${rows.length}`);
  return rows
};

export async function readDoodadsCsv(wowExportPath: string) {
  const globPattern = path.join(wowExportPath, "**/*.csv")
    .replaceAll(path.sep, "/");
  const doodads: Doodad[] = await readAllCSVFiles(globPattern, ";", wowExportPath)

  const minX = doodads.reduce((acc, r) => Math.min(acc, r.position[0]), doodads[0].position[0])
  const maxX = doodads.reduce((acc, r) => Math.max(acc, r.position[0]), doodads[0].position[0])
  const minY = doodads.reduce((acc, r) => Math.min(acc, r.position[1]), doodads[0].position[1])
  const maxY = doodads.reduce((acc, r) => Math.max(acc, r.position[1]), doodads[0].position[1])
  const minZ = doodads.reduce((acc, r) => Math.min(acc, r.position[2]), doodads[0].position[2])
  const maxZ = doodads.reduce((acc, r) => Math.max(acc, r.position[2]), doodads[0].position[2])
  console.log(maxX - minX, {minX, maxX})
  console.log(maxY - minY, {minY, maxY})
  console.log(maxZ - minZ, {minZ, maxZ})
  return doodads

  // const addedObj = new Set<string>()
  // const result: DoodadPlacement[] = []
  // let unmapped = 0
  // let duped = 0
  // wowRows.forEach((row, i) => {
  //   // if (!row.ModelFile.includes("icecrown_citadel_exterior_set0") && !row.ModelFile.includes("icecrown_gate_01_set0")) {
  //   //   return
  //   // }

  //   const dedupKey = [row.FileDataID, row.ModelId, row.PositionX, row.PositionY, row.PositionZ].join(":")
  //   if (addedObj.has(dedupKey)) {
  //     duped++
  //     return
  //   } else {
  //     addedObj.add(dedupKey)
  //   }

  //   if (mapping[row.ModelFile].length === 0) {
  //     unmapped++
  //     return;
  //   }
  //   const chosenWc3 = mapping[row.ModelFile][Math.floor(mapping[row.ModelFile].length * Math.random())]
  //   const wc3Equiv = w3cRows.find(r => r.file === chosenWc3)!
  //   result.push({
  //     type: wc3Equiv.doodID,

  //     variation: Math.floor(Math.random() * wc3Equiv.numVar),
  //     position: [
  //       percent(row.PositionX, wowMinX, wowMaxX), // rotate 180deg
  //       1 - percent(row.PositionZ, wowMinZ, wowMaxZ), // rotate 180deg
  //       percent(row.PositionY, wowMinY, wowMaxY), // Exported data has Y to be height
  //     ],
  //     angle: parseFloat(row.RotationX),
  //     scale: [parseFloat(row.ScaleFactor), parseFloat(row.ScaleFactor), parseFloat(row.ScaleFactor)],
  //     skinId: wc3Equiv.doodID,
  //     flags: {
  //       visible: true,
  //       solid: true
  //     },
  //     life: 100,
  //     id: i + 1
  //   })
  // })
  // console.log("Unmapped WoW objects:", unmapped)
  // console.log("Mapped WoW objects:", addedObj.size)
  // console.log("Ignored duplicated WoW objects:", duped)
}

function f(s: string) {
  return parseFloat(s)
}

function percent(v: string, low: number, high: number) {
  return (f(v) - low) / (high - low)
}