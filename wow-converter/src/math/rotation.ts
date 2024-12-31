import { Vector3 } from './model';

export type QuaternionRotation = [number, number, number, number];
export type EulerRotation = Vector3;

export function radians(deg: number): number {
  return deg * (Math.PI / 180);
}

export function degrees(rad: number): number {
  return rad * (180 / Math.PI);
}

function quaternionMultiply(q1: QuaternionRotation, q2: QuaternionRotation): QuaternionRotation {
  const [x1, y1, z1, w1] = q1;
  const [x2, y2, z2, w2] = q2;

  const x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2;
  const y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2;
  const z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2;
  const w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;

  return [x, y, z, w];
}

function quaternionNormalize(q: QuaternionRotation): QuaternionRotation {
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

export function quaternionToEuler(quat: QuaternionRotation): EulerRotation {
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

export function eulerToQuaternion(eulerRad: EulerRotation): QuaternionRotation {
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
