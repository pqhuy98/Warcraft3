/* eslint-disable no-param-reassign */
export function angleDifference(angle1: number, angle2: number): number {
  // Normalize angles
  angle1 = ((angle1 % 360) + 360) % 360;
  angle2 = ((angle2 % 360) + 360) % 360;

  let diff = Math.abs(angle1 - angle2);
  if (diff > 180) {
    diff = 360 - diff;
  }
  return diff;
}

export function meanAngles(angles: number[]): number {
  // Normalize angles to the [0, 360) range
  const normalizedAngles = angles.map((angle) => (angle % 360 + 360) % 360);

  // Calculate the vector sum components in degrees
  let sumSin = 0;
  let sumCos = 0;
  for (const angle of normalizedAngles) {
    const radians = angle * DEG_TO_RAD;
    sumSin += Math.sin(radians);
    sumCos += Math.cos(radians);
  }

  // If the vector sum is zero, return a default angle as the mean
  if (sumSin === 0 && sumCos === 0) {
    return undefined; // Default mean angle
  }

  // Calculate the mean angle in degrees
  const meanRad = Math.atan2(sumSin, sumCos);
  let meanDeg = meanRad * RAD_TO_DEG;

  // Normalize the mean angle to the [0, 360) range
  if (meanDeg < 0) {
    meanDeg += 360;
  }

  return meanDeg;
}

export const DEG_TO_RAD = Math.PI / 180;
export const RAD_TO_DEG = 180 / Math.PI;
