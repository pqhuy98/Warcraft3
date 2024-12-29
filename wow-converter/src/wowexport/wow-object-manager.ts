import csv from 'csv-parser';
import {
  createReadStream, existsSync, mkdirSync, writeFileSync,
} from 'fs';
import { glob } from 'glob';
import * as path from 'path';

import { rawModelScaleUp } from '../global-config';
import { DegToRad, quaternionToEuler } from '../math/math';
import { V3 } from '../math/vector';
import { WowObject } from './common';
import { Config } from './config';
import { AssetManager } from './model-manager';
import { computeModelMinMaxExtents } from './utils';

interface PlacementInfoRow {
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
  Type: string
}

// WoW coordinate system
const maxSize = 51200 / 3;

export class WowObjectManager {
  assetManager: AssetManager;

  objects = new Map<string, WowObject>();

  terrains: WowObject[] = [];

  doodads: WowObject[] = [];

  roots: WowObject[] = [];

  constructor(private config: Config) {
    this.assetManager = new AssetManager(config);
  }

  async parse(pattern: string) {
    const globPattern = path.join(this.config.wowExportPath, pattern)
      .replaceAll(path.sep, '/');

    const files = (await glob(globPattern, {
      cwd: this.config.wowExportPath,
      absolute: true,
    })).map((f) => f.replaceAll(path.sep, '/'));
    console.log('Parsing root files', files);

    mkdirSync('dist', { recursive: true });
    for (const file of files) {
      const fileName = this.relative(file).replaceAll('.obj', '');
      this.roots.push({
        id: fileName,
        model: undefined,
        position: [0, 0, 0],
        rotation: [0, 0, DegToRad(-90)],
        scaleFactor: 1,
        children: [],
        type: file.includes('adt') ? 'adt' : 'wmo',
      });
      await this.parseRecursive(fileName, this.roots[this.roots.length - 1]);
    }
  }

  private relative(fullPath: string) {
    return fullPath.replaceAll(this.config.wowExportPath, '');
  }

  private full(relativePath: string) {
    return path.join(this.config.wowExportPath, relativePath);
  }

  private async parseRecursive(objectPath: string, current: WowObject) {
    if (this.objects.has(current.id)) {
      return;
    }
    this.objects.set(current.id, current);
    if (current.id.includes('adt_')) {
      this.terrains.push(current);
    } else {
      this.doodads.push(current);
    }

    current.model = this.assetManager.parse(objectPath);
    current.position.forEach((_, i) => current.position[i] *= rawModelScaleUp);

    if (current.type === 'gobj') {
      console.log('Found gobj', current.id, current.position, current.rotation);
    }

    const childrenCsvPath = this.full(path.join(`${objectPath}_ModelPlacementInformation.csv`));
    if (existsSync(childrenCsvPath)) {
      const rows = await this.parsePlacementCsv(childrenCsvPath);
      writeFileSync(path.join('dist', path.basename(childrenCsvPath)).replace('.csv', '.json'), JSON.stringify(rows, null, 2));
      for (const row of rows) {
        const id = `${row.ModelId}:${row.FileDataID}:${row.ModelFile}:${row.PositionX}:${row.PositionY}:${row.PositionZ}`;

        if (this.objects.has(id)) {
          // do nothing
        } else {
          const child: WowObject = {
            id,
            model: undefined,
            ...convertRowPositionRotation(row),
            scaleFactor: parseFloat(row.ScaleFactor),
            children: [],
            type: row.Type ?? 'null',
          };
          current.children.push(child);

          const fileName = row.ModelFile.replaceAll('.obj', '');
          await this.parseRecursive(path.join(path.dirname(objectPath), fileName), child);
        }
      }
    }
  }

  private async parsePlacementCsv(file: string) {
    const separator = ';';
    const rows: PlacementInfoRow[] = [];
    return new Promise<PlacementInfoRow[]>((resolve, reject) => {
      createReadStream(file)
        .pipe(csv({ separator }))
        .on('data', (row: PlacementInfoRow) => {
          if (Object.keys(row).length > 1) {
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
  }

  centerByParentModels(parents: WowObject[]) {
    const { min, max } = computeModelMinMaxExtents(parents);

    const center = V3.mean(min, max);

    console.log('Initial terrain model min/max extents', min, max);
    console.log('Initial terrain model size', V3.sub(max, min));
    console.log('Initial terrain model center', center);

    let dmin = V3.all(Infinity);
    let dmax = V3.all(-Infinity);

    parents.forEach((parent) => parent.children.forEach((child) => {
      const childPos = child.position;
      // const childPos = rotateVector(child.position, parent.rotation);
      dmin = V3.min(dmin, childPos);
      dmax = V3.max(dmax, childPos);
    }));
    console.log('Initial doodad min/max position', dmin, dmax);
    console.log('Initial doodad position size', V3.sub(dmax, dmin));

    const delta = center;
    console.log('Delta', delta);
    parents.forEach((obj) => {
      obj.model!.mdl.geosets.forEach((geoset) => geoset.vertices.forEach((v) => {
        v[0] -= delta[0];
        v[1] -= delta[1];
        v[2] -= delta[2];
      }));
      obj.model!.mdl.sync();
      // obj.position[0] += delta[0];
      // obj.position[1] += delta[1];
      // obj.position[2] += delta[2];
    });

    // const { min: min2, max: max2 } = computeAbsoluteMinMaxExtents(parents);
    // console.log('After translation, terrain min/max extents:', min2, max2);
    // console.log('After translation, terrain size:', V3.sub(max2, min2));

    for (const parent of parents) {
      const childDelta = V3.rotate(delta, [0, 0, DegToRad(90)]);
      // const childDelta = delta;
      parent.children.forEach((child) => {
        // console.log('Translating child', child.id, child.position, { childDelta });
        child.position = V3.sub(child.position, childDelta);
        // console.log('Translated child', child.id, child.position);
      });
    }

    let dmin2 = V3.all(Infinity);
    let dmax2 = V3.all(-Infinity);
    parents.flatMap((p) => p.children).forEach((child) => {
      const childPos = child.position;
      dmin2 = V3.min(dmin2, childPos);
      dmax2 = V3.max(dmax2, childPos);
    });
    console.log('After centering, doodad min/max position', dmin2, dmax2);
    console.log('After centering, doodad position size', V3.sub(dmax2, dmin2));
  }
}

function convertRowPositionRotation(row: PlacementInfoRow): {
  position: [number, number, number],
  rotation: [number, number, number]
} {
  const getBlenderPositionRotation = () => {
    switch (row.Type) {
      case 'wmo': return {
        position: [
          (maxSize - parseFloat(row.PositionX)),
          -(maxSize - parseFloat(row.PositionZ)),
          parseFloat(row.PositionY),
        ],
        rotation: [
          DegToRad(parseFloat(row.RotationZ)),
          DegToRad(parseFloat(row.RotationX)),
          DegToRad(parseFloat(row.RotationY) + 90),
        ],
      };
      case 'm2': return {
        position: [
          (maxSize - parseFloat(row.PositionX)),
          -(maxSize - parseFloat(row.PositionZ)),
          parseFloat(row.PositionY),
        ],
        rotation: [
          DegToRad(parseFloat(row.RotationZ) + 90),
          DegToRad(parseFloat(row.RotationX)),
          DegToRad(parseFloat(row.RotationY) + 90),
        ],
      };
      case 'gobj': return {
        position: [
          parseFloat(row.PositionY),
          -parseFloat(row.PositionX),
          parseFloat(row.PositionZ),
        ],
        rotation: quaternionToEuler([
          parseFloat(row.RotationX),
          parseFloat(row.RotationY),
          -parseFloat(row.RotationZ),
          parseFloat(row.RotationW),
        ]),
      };
      default: {
        const rotation = quaternionToEuler([
          parseFloat(row.RotationX),
          parseFloat(row.RotationY),
          parseFloat(row.RotationZ),
          parseFloat(row.RotationW),
        ]);
        rotation[0] += DegToRad(90);
        return {
          position: [
            parseFloat(row.PositionX),
            parseFloat(row.PositionY),
            parseFloat(row.PositionZ),
          ],
          rotation,
        };
      }
    }
  };
  const blender = getBlenderPositionRotation();
  return {
    position: [
      -blender.position[0],
      -blender.position[1],
      blender.position[2],
    ],
    rotation: [
      blender.rotation[0],
      blender.rotation[1],
      blender.rotation[2],
    ],
  };
}
