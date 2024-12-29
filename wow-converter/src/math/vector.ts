import { rotateVector } from './math';

export type Vector3 = [number, number, number];

export class V3 {
  static all(value: number): Vector3 {
    return [value, value, value];
  }

  static sum(a: Vector3, b: Vector3): Vector3 {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  }

  static sub(a: Vector3, b: Vector3): Vector3 {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  }

  static mean(a: Vector3, b: Vector3): Vector3 {
    return [
      (a[0] + b[0]) / 2,
      (a[1] + b[1]) / 2,
      (a[2] + b[2]) / 2,
    ];
  }

  static scale(a: Vector3, b: number): Vector3 {
    return [a[0] * b, a[1] * b, a[2] * b];
  }

  static rotate(v: Vector3, eulerAngleRadians: Vector3): Vector3 {
    return rotateVector(v, eulerAngleRadians);
  }

  static min(a: Vector3, b: Vector3): Vector3 {
    return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2])];
  }

  static max(a: Vector3, b: Vector3): Vector3 {
    return [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2])];
  }
}
