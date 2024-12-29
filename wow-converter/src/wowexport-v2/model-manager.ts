import { existsSync, mkdirSync, writeFileSync } from 'fs';
import * as path from 'path';

import { infiniteExtentBoundRadiusThreshold } from '../../config';
import { blp2Image } from '../blp/blp';
import { convertObjMdl } from '../objmdl';
import { MDL } from '../objmdl/mdl';
import { Config } from './config';

export interface Model {
  relativePath: string
  mdl: MDL
  materialPaths: string[]
}

export class AssetManager {
  models = new Map<string, Model>();

  materials = new Set<string>();

  constructor(private config: Config) {
  }

  parse(objectPath: string): Model {
    if (this.models.has(objectPath)) {
      return this.models.get(objectPath)!;
    }

    const objRelativePath = `${objectPath}.obj`;
    const objFullPath = path.join(this.config.wowExportPath, objRelativePath);
    // console.log('Parsing model', objFullPath);
    const { mdl, materialPaths } = convertObjMdl(objFullPath, this.config.wowExportPath, this.config.assetPrefix);
    const model: Model = {
      relativePath: path.join(this.config.assetPrefix, `${objectPath}.mdl`),
      mdl,
      materialPaths: [...materialPaths],
    };
    this.models.set(objectPath, model);
    materialPaths.forEach((p) => this.materials.add(p));
    return model;
  }

  exportModels(assetPath: string) {
    console.log('Exporting models to', assetPath);
    mkdirSync(assetPath, { recursive: true });
    for (const [relativePath, model] of this.models.entries()) {
      const fullPath = `${path.join(assetPath, this.config.assetPrefix, relativePath)}.mdl`;
      const mdl = model.mdl;
      let inifiniteExtents = false;
      if (mdl.model.boundsRadius > infiniteExtentBoundRadiusThreshold) {
        mdl.setInfiniteExtents();
        inifiniteExtents = true;
      }
      mkdirSync(path.dirname(fullPath), { recursive: true });
      writeFileSync(fullPath, model.mdl.toString());
      if (inifiniteExtents) {
        mdl.sync();
      }
    }
  }

  exportMaterials(assetPath: string) {
    console.log('Exporting materials to', assetPath);
    mkdirSync(assetPath, { recursive: true });
    for (const materialPath of this.materials) {
      const toPath = path.join(assetPath, this.config.assetPrefix, materialPath.replace('.png', '.blp'));
      if (existsSync(toPath)) {
        continue;
      }
      const fromPath = path.join(this.config.wowExportPath, materialPath);
      blp2Image(fromPath, toPath, 'blp');
    }
  }
}
