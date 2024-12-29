import csv from 'csv-parser';
import {
  createReadStream, existsSync, mkdirSync, writeFileSync,
} from 'fs';
import { glob } from 'glob';
import * as path from 'path';

import { rawModelScaleUp } from '../../config';
import {
  calculateChildAbsoluteEulerRotation, DegToRad, quaternionToEuler, rotateVector,
} from '../math/math';
import { Config } from './config';
import { AssetManager, Model } from './model-manager';

export interface WowObject {
  id: string
  model?: Model
  position: [number, number, number]
  rotation: [number, number, number]
  scaleFactor: number
  children: WowObject[]
  type: string
}

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
      await this.parseRecursive(fileName, this.roots[this.roots.length - 1], null);
    }
  }

  private relative(fullPath: string) {
    return fullPath.replaceAll(this.config.wowExportPath, '');
  }

  private full(relativePath: string) {
    return path.join(this.config.wowExportPath, relativePath);
  }

  private async parseRecursive(objectPath: string, current: WowObject, parent: WowObject | null) {
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
    if (parent) {
      const relativePos = rotateVector(current.position, parent.rotation);
      current.position.forEach((_, i) => current.position[i] = parent.position[i] + relativePos[i]);
      current.rotation = calculateChildAbsoluteEulerRotation(parent.rotation, current.rotation);
      current.scaleFactor *= parent.scaleFactor;
    }

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
          current.children.push({
            id,
            model: undefined,
            ...convertRowPositionRotation(row),
            scaleFactor: parseFloat(row.ScaleFactor),
            children: [],
            type: row.Type ?? 'null',
          });
          const child = current.children[current.children.length - 1];
          const fileName = row.ModelFile.replaceAll('.obj', '');
          await this.parseRecursive(path.join(path.dirname(objectPath), fileName), child, current);
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

  centerByParents(parents: WowObject[]) {
    const min = [Infinity, Infinity, Infinity];
    const max = [-Infinity, -Infinity, -Infinity];
    parents.forEach((wowObject) => {
      const mdl = wowObject.model!.mdl;
      mdl.sync();
      min[0] = Math.min(min[0], mdl.model.minimumExtent[0]);
      min[1] = Math.min(min[1], mdl.model.minimumExtent[1]);
      min[2] = Math.min(min[2], mdl.model.minimumExtent[2]);
      max[0] = Math.max(max[0], mdl.model.maximumExtent[0]);
      max[1] = Math.max(max[1], mdl.model.maximumExtent[1]);
      max[2] = Math.max(max[2], mdl.model.maximumExtent[2]);
    });
    const center = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];

    // console.log('Initial terrain min/max extents', min, max);
    // console.log('Initial terrain size', (max[0] - min[0]), (max[1] - min[1]), (max[2] - min[2]));
    // console.log('Initial terrain center', center);

    const dmin = [Infinity, Infinity, Infinity];
    const dmax = [-Infinity, -Infinity, -Infinity];
    this.doodads.forEach((dd) => {
      if (dd.type !== 'wmo') return;
      dmin[0] = Math.min(dmin[0], dd.position[0]);
      dmin[1] = Math.min(dmin[1], dd.position[1]);
      dmin[2] = Math.min(dmin[2], dd.position[2]);
      dmax[0] = Math.max(dmax[0], dd.position[0]);
      dmax[1] = Math.max(dmax[1], dd.position[1]);
      dmax[2] = Math.max(dmax[2], dd.position[2]);
    });
    // console.log('Initial doodad min/max extents', dmin, dmax);
    // console.log('Initial doodad size', [dmax[0] - dmin[0], dmax[1] - dmin[1], dmax[2] - dmin[2]]);

    // For delta, X, Y are center, Z is the height of the closest vertex to center
    // so that after translation, the center is at (0, 0, 0)
    const delta = [
      center[0],
      center[1],
      center[2],
    ];
    // console.log('Delta', delta);

    parents.forEach((obj) => {
      obj.model!.mdl.geosets.forEach((geoset) => geoset.vertices.forEach((v) => {
        v[0] -= delta[0];
        v[1] -= delta[1];
        v[2] -= delta[2];
      }));
      obj.model!.mdl.sync();
    });
    min[0] -= delta[0];
    min[1] -= delta[1];
    min[2] -= delta[2];
    max[0] -= delta[0];
    max[1] -= delta[1];
    max[2] -= delta[2];

    // console.log('After translation, extents:', min, max);

    const recursiveTranslate = (node: WowObject) => {
      node.children.forEach((child) => {
        // console.log('Translating child', child.id, child.position);
        child.position[0] -= delta[0];
        child.position[1] -= delta[1];
        child.position[2] -= delta[2];
        // console.log('Translated child', child.id, child.position);
        recursiveTranslate(child);
      });
    };

    for (const parent of parents) {
      recursiveTranslate(parent);
    }

    // const dmin2 = [Infinity, Infinity, Infinity];
    // const dmax2 = [-Infinity, -Infinity, -Infinity];
    // this.doodads.forEach((dd) => {
    //   if (dd.type !== 'wmo') return;
    //   dmin2[0] = Math.min(dmin2[0], dd.position[0]);
    //   dmin2[1] = Math.min(dmin2[1], dd.position[1]);
    //   dmin2[2] = Math.min(dmin2[2], dd.position[2]);
    //   dmax2[0] = Math.max(dmax2[0], dd.position[0]);
    //   dmax2[1] = Math.max(dmax2[1], dd.position[1]);
    //   dmax2[2] = Math.max(dmax2[2], dd.position[2]);
    // });
    // console.log('After centering, doodad min/max extents', dmin2, dmax2);
    // console.log('After centering, doodad size', [dmax2[0] - dmin2[0], dmax2[1] - dmin2[1], dmax2[2] - dmin2[2]]);
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
