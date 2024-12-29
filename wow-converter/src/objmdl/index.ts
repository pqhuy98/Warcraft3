import { readFileSync } from 'fs';
import * as path from 'path';

import { assetPrefix, getFilterMode, rawModelScaleUp } from '../../config';
import { MDL } from './mdl';
import { MTLFile } from './mtl';
import { IFace, OBJFile } from './obj';

export function convertObjMdl(objFilePath: string, assetRoot: string, texturePrefix = assetPrefix) {
  const obj = new OBJFile(readFileSync(objFilePath, 'utf-8')).parse();
  const mtl = new MTLFile(objFilePath.replace(/\.obj$/, '.mtl'));

  const mdl = new MDL({
    formatVersion: 800,
    name: path.relative(assetRoot, objFilePath).replace('.obj', '.mdl'),
  });

  const groups = new Map<string, IFace[]>();
  obj.models[0].faces.forEach((f) => {
    if (!groups.has(f.group)) {
      groups.set(f.group, []);
    }
    groups.get(f.group)!.push(f);
  });

  const parentDir = path.dirname(objFilePath);

  const matMap = new Map<string, number>();
  const materialPaths = new Set<string>();
  mtl.materials.forEach((material) => {
    matMap.set(material.name, mdl.materials.length);
    const materialRelativePath = path.relative(assetRoot, path.join(parentDir, material.map_Kd!));
    materialPaths.add(materialRelativePath);
    mdl.textures.push({
      image: path.join(texturePrefix, materialRelativePath.replace('.png', '.blp')),
      wrapHeight: true,
      wrapWidth: true,
    });
    mdl.materials.push({
      constantColor: true,
      layers: [
        { textureId: mdl.textures.length - 1, filterMode: getFilterMode(materialRelativePath), twoSided: true },
      ],
    });
  });

  groups.forEach((faces, group) => {
    mdl.bones.push({
      name: group,
      objectId: mdl.geosets.length,
      geosetId: mdl.geosets.length,
      geosetAnimId: 'None',
    });

    mdl.geosets.push({
      vertices: [],
      normals: [],
      tVertices: [],
      vertexGroup: [],
      faces: { triangles: [] },
      groups: [{ matrices: [mdl.geosets.length] }],
      minimumExtent: [0, 0, 0],
      maximumExtent: [0, 0, 0],
      boundsRadius: 0,
      anim: {
        minimumExtent: [0, 0, 0],
        maximumExtent: [0, 0, 0],
        boundsRadius: 0,
      },
      materialId: matMap.get(faces[0].material)!,
      selectionGroup: 0,
    });
    const geoset = mdl.geosets[mdl.geosets.length - 1];

    const vMap = new Map<number, number>();

    faces.forEach((face) => {
      face.vertices.forEach((v) => {
        const objV = obj.models[0].vertices[v.vertexIndex - 1];
        if (!vMap.has(v.vertexIndex)) {
          vMap.set(v.vertexIndex, geoset.vertices.length);
          geoset.vertices.push([objV.z, objV.x, objV.y]);
          geoset.vertexGroup.push(0);

          const objN = obj.models[0].vertexNormals[v.vertexNormalIndex - 1];
          geoset.normals.push([objN.z, objN.x, objN.y]);

          const objT = obj.models[0].textureCoords[v.textureCoordsIndex - 1];
          geoset.tVertices.push([objT.u, 1 - objT.v]);
        }
        geoset.faces.triangles.push(vMap.get(v.vertexIndex)!);
      });
    });
  });
  mdl.scale(rawModelScaleUp);
  mdl.sync();
  return { mdl, materialPaths };
}
