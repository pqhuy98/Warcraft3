type Quaternion = [number, number, number, number];
type EulerRotation = [number, number, number];

export function DegToRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function RadToDeg(radians: number): number {
  return radians * (180 / Math.PI);
}

function quaternionMultiply(q1: Quaternion, q2: Quaternion): Quaternion {
  const [x1, y1, z1, w1] = q1;
  const [x2, y2, z2, w2] = q2;

  const x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2;
  const y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2;
  const z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2;
  const w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;

  return [x, y, z, w];
}

function quaternionNormalize(q: Quaternion): Quaternion {
  const [x, y, z, w] = q;
  const magnitude = Math.sqrt(x * x + y * y + z * z + w * w);
  if (magnitude === 0) {
    throw new Error('Cannot normalize a zero-length quaternion.');
  }
  return [x / magnitude, y / magnitude, z / magnitude, w / magnitude];
}

export function calculateChildAbsoluteEulerRotation(
  parentEuler: EulerRotation,
  childRelativeEuler: EulerRotation,
): EulerRotation {
  const parentQuat = eulerToQuaternion(parentEuler);
  const childRelativeQuat = eulerToQuaternion(childRelativeEuler);

  // Multiply parent quaternion by child relative quaternion
  const combinedQuat = quaternionNormalize(quaternionMultiply(parentQuat, childRelativeQuat));

  // Normalize the result to maintain a unit quaternion
  return quaternionToEuler(combinedQuat);
}

export function quaternionToEuler(quat: Quaternion): EulerRotation {
  const [x, y, z, w] = quat;

  // Roll (X-axis rotation)
  const sinr_cosp = 2 * (w * x + y * z);
  const cosr_cosp = 1 - 2 * (x * x + y * y);
  const roll = Math.atan2(sinr_cosp, cosr_cosp);

  // Pitch (Y-axis rotation)
  const sinp = 2 * (w * y - z * x);
  let pitch: number;
  if (Math.abs(sinp) >= 1) {
    pitch = Math.sign(sinp) * Math.PI / 2; // Use 90 degrees if out of range
  } else {
    pitch = Math.asin(sinp);
  }

  // Yaw (Z-axis rotation)
  const siny_cosp = 2 * (w * z + x * y);
  const cosy_cosp = 1 - 2 * (y * y + z * z);
  const yaw = Math.atan2(siny_cosp, cosy_cosp);

  return [roll, pitch, yaw];
}

export function eulerToQuaternion(eulerRad: EulerRotation): Quaternion {
  // Compute half angles
  const halfRoll = eulerRad[0] / 2;
  const halfPitch = eulerRad[1] / 2;
  const halfYaw = eulerRad[2] / 2;

  // Compute sine and cosine of half angles
  const sinRoll = Math.sin(halfRoll);
  const cosRoll = Math.cos(halfRoll);

  const sinPitch = Math.sin(halfPitch);
  const cosPitch = Math.cos(halfPitch);

  const sinYaw = Math.sin(halfYaw);
  const cosYaw = Math.cos(halfYaw);

  // Compute quaternion components
  const x = sinRoll * cosPitch * cosYaw - cosRoll * sinPitch * sinYaw;
  const y = cosRoll * sinPitch * cosYaw + sinRoll * cosPitch * sinYaw;
  const z = cosRoll * cosPitch * sinYaw - sinRoll * sinPitch * cosYaw;
  const w = cosRoll * cosPitch * cosYaw + sinRoll * sinPitch * sinYaw;

  return [x, y, z, w];
}

export function rotateVector(
  position: [number, number, number],
  angle: EulerRotation,
): [number, number, number] {
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
  function multiplyMatrixVector(matrix: number[][], vector: [number, number, number]): [number, number, number] {
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
