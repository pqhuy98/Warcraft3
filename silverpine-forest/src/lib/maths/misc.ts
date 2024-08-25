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
