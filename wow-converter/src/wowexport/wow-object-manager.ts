import csv from 'csv-parser';
import {
  createReadStream, existsSync, mkdirSync, writeFileSync,
} from 'fs';
import { glob } from 'glob';
import * as path from 'path';

import { rawModelScaleUp } from '../global-config';
import { calculateChildAbsoluteEulerRotation, quaternionToEuler, radians } from '../math/math';
import { V3, Vector3 } from '../math/vector';
import { WowObject } from './common';
import { Config } from './config';
import { AssetManager } from './model-manager';
import { computeAbsoluteMinMaxExtents } from './utils';

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
        rotation: [0, 0, radians(-90)],
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
    current.model = this.assetManager.parse(objectPath);
    current.position.forEach((_, i) => current.position[i] *= rawModelScaleUp);

    if (current.id.includes('adt_')) {
      this.terrains.push(current);
      // Center the terrain model and update its position
      const { min, max } = computeAbsoluteMinMaxExtents([current]);
      const center = V3.mean(min, max);
      current.model.mdl.geosets.forEach((geoset) => geoset.vertices.forEach((v) => {
        const vAbsolute = V3.rotate(v, current.rotation);
        const vAbsoluteCentered = V3.sum(vAbsolute, V3.negative(center));
        const vRelative = V3.rotate(vAbsoluteCentered, V3.negative(current.rotation));
        v[0] = vRelative[0];
        v[1] = vRelative[1];
        v[2] = vRelative[2];
      }));
      current.position = center;
    } else {
      this.doodads.push(current);
    }

    if (current.type === 'gobj') {
      console.warn('Found gobj', current.id, current.position, current.rotation);
    }

    const childrenCsvPath = this.full(path.join(`${objectPath}_ModelPlacementInformation.csv`));
    if (existsSync(childrenCsvPath)) {
      const rows = await this.parsePlacementCsv(childrenCsvPath);
      writeFileSync(path.join('dist', path.basename(childrenCsvPath)).replace('.csv', '.json'), JSON.stringify(rows, null, 2));
      for (const row of rows) {
        const id = `${row.FileDataID}:${row.ModelFile}:${row.PositionX}:${row.PositionY}:${row.PositionZ}`;

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
          if (current.type === 'adt') {
            // console.log('---------------');
            // console.log({ childId: child.id, parentId: current.id });
            // console.log('Parent absolute extents', computeAbsoluteMinMaxExtents([current]));
            // console.log('Parent model extents', computeModelMinMaxExtents([current]));
            // console.log('Parent position', current.position);
            // console.log('Child position before', child.position);

            const wmoParentFixedRotation: Vector3 = [0, 0, radians(-90)];

            const childAbsolutePosition = V3.rotate(child.position, wmoParentFixedRotation);
            // console.log('Child absolute position', childAbsolutePosition);

            const childAbsolutePositionDelta = V3.sub(childAbsolutePosition, current.position);
            // console.log('Child absolute position delta', childAbsolutePositionDelta);

            const childRelativePosition = V3.rotate(childAbsolutePositionDelta, V3.negative(wmoParentFixedRotation));
            // console.log('Child relative position', childRelativePosition);

            // console.log('Child relative position to absolute vs true absolute', V3.sub(V3.sum(current.position, V3.rotate(childRelativePosition, wmoParentFixedRotation)), childAbsolutePosition));
            child.position = childRelativePosition;
          }

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

  rotateRootsAtCenter(rotation: Vector3) {
    const { min, max } = computeAbsoluteMinMaxExtents(this.roots);
    const center = V3.mean(min, max);
    this.roots.forEach((obj) => {
      const diff = V3.sub(obj.position, center);
      const rotatedDiff = V3.rotate(diff, rotation);
      obj.position = V3.sum(center, rotatedDiff);
      obj.rotation = calculateChildAbsoluteEulerRotation(obj.rotation, rotation);
    });
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
          radians(parseFloat(row.RotationZ)),
          radians(parseFloat(row.RotationX)),
          radians(parseFloat(row.RotationY) + 90),
        ],
      };
      case 'm2': return {
        position: [
          (maxSize - parseFloat(row.PositionX)),
          -(maxSize - parseFloat(row.PositionZ)),
          parseFloat(row.PositionY),
        ],
        rotation: [
          radians(parseFloat(row.RotationZ)),
          radians(parseFloat(row.RotationX)),
          radians(parseFloat(row.RotationY) + 90),
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
      blender.position[0],
      blender.position[1],
      blender.position[2],
    ],
    rotation: [
      blender.rotation[0],
      blender.rotation[1],
      blender.rotation[2],
    ],
  };
}
