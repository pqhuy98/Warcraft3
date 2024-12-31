import { Vector3 } from './model';
import { EulerRotation } from './rotation';

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

  static negative(a: Vector3): Vector3 {
    return [-a[0], -a[1], -a[2]];
  }

  static scale(a: Vector3, b: number): Vector3 {
    return [a[0] * b, a[1] * b, a[2] * b];
  }

  static mul(a: Vector3, b: Vector3): Vector3 {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
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

export function rotateVector(
  position: Vector3,
  angle: EulerRotation,
): Vector3 {
  const [x, y, z] = position;
  const rx = angle[0];
  const ry = angle[1];
  const rz = angle[2];

  // Rotation matrices
  const R_x = [
    [1, 0, 0],
    [0, Math.cos(rx), -Math.sin(rx)],
    [0, Math.sin(rx), Math.cos(rx)],
  ];

  const R_y = [
    [Math.cos(ry), 0, Math.sin(ry)],
    [0, 1, 0],
    [-Math.sin(ry), 0, Math.cos(ry)],
  ];

  const R_z = [
    [Math.cos(rz), -Math.sin(rz), 0],
    [Math.sin(rz), Math.cos(rz), 0],
    [0, 0, 1],
  ];

  // Helper function to multiply matrices
  function multiplyMatrixVector(matrix: number[][], vector: Vector3): Vector3 {
    return [
      matrix[0][0] * vector[0] + matrix[0][1] * vector[1] + matrix[0][2] * vector[2],
      matrix[1][0] * vector[0] + matrix[1][1] * vector[1] + matrix[1][2] * vector[2],
      matrix[2][0] * vector[0] + matrix[2][1] * vector[1] + matrix[2][2] * vector[2],
    ];
  }

  // Combine rotations
  const intermediateVector1 = multiplyMatrixVector(R_x, [x, y, z]);
  const intermediateVector2 = multiplyMatrixVector(R_y, intermediateVector1);
  const rotatedVector = multiplyMatrixVector(R_z, intermediateVector2);

  return rotatedVector;
}
