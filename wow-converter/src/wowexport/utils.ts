import { rotateVector } from '../math/math';
import { V3 } from '../math/vector';
import { WowObject } from './common';

export function computeAbsoluteMinMaxExtents(objs: WowObject[]) {
  let min = V3.all(Infinity);
  let max = V3.all(-Infinity);
  objs.forEach((obj) => {
    obj.model!.mdl.geosets.forEach((geoset) => {
      geoset.vertices.forEach((v) => {
        const rotatedV = rotateVector(v, obj.rotation);
        const position = V3.sum(obj.position, rotatedV);
        min = V3.min(min, position);
        max = V3.max(max, position);
      });
    });
  });
  return { min, max };
}

export function computeModelMinMaxExtents(objs: WowObject[]) {
  let min = V3.all(Infinity);
  let max = V3.all(-Infinity);
  objs.forEach((obj) => {
    obj.model!.mdl.geosets.forEach((geoset) => {
      geoset.vertices.forEach((v) => {
        min = V3.min(min, v);
        max = V3.max(max, v);
      });
    });
  });
  return { min, max };
}
