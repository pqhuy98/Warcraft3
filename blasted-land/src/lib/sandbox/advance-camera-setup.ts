/* eslint-disable max-len */
/*
I want to implement an Warcraft 3 auto-camera system automatically choose the best cinematic camera angle that shows all units in the cinematic close-up. The project is in TypeScript, uses the w3ts library. There should be one main unit talking that the camera should try to show its face. But the camera should also show other units in the cinematic. The camera should try to show units in an angle that no units are occluded by other units, if that is not possible then prioritize showing the main unit's face. Units are in 3D world, assume them to be 3D cylinders with heights to be 2x their diameter. You can control the camera's target point (x/y on the ground), its rotation, distance to target point, attack angle.

Attack angle is quite strange, if it's 270 then the camera looks top down. If it's 270-360 then the camera looks slightly tilted down which what I want. If it's 0-270 then the camera looks very weird, so I want to avoid that.

Treat the units as 2:1 cylinders in 3D, which can map to rectangles in 2D (ratio changes depend on attack angle, e.g. 360 it's 2:1, but 270 then it's top down so square 1:1). Find the best rotation and distance so that occlusion is minimized, and the units cover as much of the screen as possible, while none are partially or completely outside of the screen.

Tackling occlusion minimization while ensuring all units are fully visible and
cover as much of the screen as possible requires simulating the camera's projection and
optimizing the camera parameters accordingly.

Here's a comprehensive solution that:

- **Treats units as 2:1 cylinders** in 3D space, projecting to rectangles in 2D.
- **Calculates the camera's position and orientation** based on the target point, rotation, attack angle, and distance.
- **Simulates the projection** of units onto the screen using a perspective projection.
- **Optimizes camera rotation and distance** to minimize occlusions, ensure all units are visible, and maximize screen coverage.
*/

import { log } from 'lib/log';
import { getUnitScale } from 'lib/unit';
import { Camera, Unit } from 'w3ts';

// First, let's define helper functions for vector and matrix operations since we won't be using external libraries.

// Vector operations
function vectorSubtract(a: Vector3, b: Vector3): Vector3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

// function vectorAdd(a: Vector3, b: Vector3): Vector3 {
//   return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
// }

function vectorScale(a: Vector3, scale: number): Vector3 {
  return { x: a.x * scale, y: a.y * scale, z: a.z * scale };
}

function vectorDot(a: Vector3, b: Vector3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

function vectorCross(a: Vector3, b: Vector3): Vector3 {
  return {
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  };
}

function vectorLength(a: Vector3): number {
  return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
}

function vectorNormalize(a: Vector3): Vector3 {
  const length = vectorLength(a);
  return { x: a.x / length, y: a.y / length, z: a.z / length };
}

// Types
interface Vector3 {
  x: number;
  y: number;
  z: number;
}

// Camera parameters interface
interface CameraParameters {
  rotation: number;
  attackAngle: number;
  distance: number;
  target: Vector3;
}

// Now, let's define the main `setCinematicCamera` function with occlusion minimization:

// Main function to set the cinematic camera with occlusion minimization
/*
**Explanation:**

- We iterate over a range of camera rotations around the main unit's facing direction.
- For each rotation, we incrementally adjust the camera distance until all units are fully visible.
- We project units onto the screen and check for occlusions and screen coverage.
- We calculate a total score that penalizes occlusions and rewards higher screen coverage.
- We keep track of the camera parameters with the best (lowest) score.
*/
export function setCinematicCamera(units: Unit[]): void {
  // Ensure there is at least one unit
  if (units.length === 0) return;

  const mainUnit = units[0];
  const target: Vector3 = {
    x: units.reduce((acc, unit) => acc + unit.x, 0) / units.length,
    y: units.reduce((acc, unit) => acc + unit.y, 0) / units.length,
    z: units.reduce((acc, unit) => acc + unit.z, 0) / units.length,
  };

  // Fixed camera parameters
  // const attackAngle = 315; // Between 270 (top-down) and 360 (horizontal)
  const fovY = 70; // Vertical field of view in degrees
  const aspectRatio = BlzGetLocalClientWidth() / BlzGetLocalClientHeight(); // Screen aspect ratio (width / height)
  log('aspectRatio', aspectRatio);

  // Candidate camera rotations (around the main unit's facing direction)
  const rotationRange = 20; // ±20 degrees around the main unit's facing
  const rotationStep = 5; // Step size in degrees

  const minDistance = 300; // Starting distance
  const maxDistance = 6000; // Maximum allowable distance
  const distanceStep = 200; // Step size for distance adjustments

  const minAttackAngle = 300; // Minimum attack angle
  const maxAttackAngle = 360; // Maximum attack angle
  const attackAngleStep = 10; // Step size for attack angle adjustments

  // Optimization variables
  let bestScore = Infinity;
  let bestCameraParams: CameraParameters | null = null;

  // Generate candidate camera rotations
  const baseRotation = (mainUnit.facing + 180) % 360; // Face the main unit's front

  const rotations: number[] = [];
  for (
    let rotation = baseRotation - rotationRange;
    rotation <= baseRotation + rotationRange;
    rotation += rotationStep
  ) {
    rotations.push((rotation + 360) % 360); // Ensure rotation is within [0, 360)
  }

  // Optimization loop
  for (let attackAngle = maxAttackAngle; attackAngle > minAttackAngle; attackAngle -= attackAngleStep) {
    for (const rotation of rotations) {
      let distance = minDistance;

      while (distance <= maxDistance) {
        const cameraParams: CameraParameters = {
          rotation,
          attackAngle,
          distance,
          target,
        };

        const projectionResult = projectUnitsToScreen(
          units,
          cameraParams,
          fovY,
          aspectRatio,
        );

        if (projectionResult.allUnitsVisible) {
          // Calculate score based on occlusion and screen coverage
          const occlusionScore = calculateOcclusionScore(projectionResult.projectedUnits);
          const screenCoverage = calculateScreenCoverage(projectionResult.projectedUnits);

          // Total score: minimize occlusion, maximize screen coverage
          const totalScore = occlusionScore - screenCoverage * 1000; // Weight screen coverage

          if (totalScore < bestScore) {
            bestScore = totalScore;
            bestCameraParams = cameraParams;

            // If occlusion is zero and screen coverage is high, break early
            if (occlusionScore === 0 && screenCoverage > 0.8) {
              break;
            }
          }
        }

        distance += distanceStep;
      }
    }
  }

  if (bestCameraParams) {
    // Set the camera to the best found parameters
    log('Found best:', bestCameraParams);
    applyCameraParameters(bestCameraParams);
  } else {
    // Fallback to default camera settings if no suitable parameters found
    applyCameraParameters({
      rotation: baseRotation,
      attackAngle: 330,
      distance: 1000,
      target,
    });
  }
}

/** Helper Functions:* */

// Now, let's define the functions used in the main function:

// 1. **Compute Camera Position and Orientation:**
// Computes the camera's position and orientation vectors
function computeCameraVectors(
  target: Vector3,
  rotation: number,
  attackAngle: number,
  distance: number,
): {
  position: Vector3;
  forward: Vector3;
  right: Vector3;
  up: Vector3;
} {
  const theta = (rotation * Math.PI) / 180;
  const phi = ((360 - attackAngle) * Math.PI) / 180;

  // Camera direction vector
  const dx = Math.cos(phi) * Math.sin(theta);
  const dy = Math.cos(phi) * Math.cos(theta);
  const dz = Math.sin(phi);

  const forward = vectorNormalize({ x: dx, y: dy, z: dz });

  // Camera position
  const position = vectorSubtract(target, vectorScale(forward, distance));

  // Compute right and up vectors
  const worldUp = { x: 0, y: 0, z: 1 };
  const right = vectorNormalize(vectorCross(forward, worldUp));
  const up = vectorCross(right, forward);

  return {
    position,
    forward,
    right,
    up,
  };
}

// 2. **Project Units onto Screen:**
interface ProjectedUnit {
  screenRect: { xMin: number; xMax: number; yMin: number; yMax: number };
  unit: Unit;
}

function projectUnitsToScreen(
  units: Unit[],
  cameraParams: CameraParameters,
  fovY: number,
  aspectRatio: number,
): {
  projectedUnits: ProjectedUnit[];
  allUnitsVisible: boolean;
} {
  const {
    position: camPos, forward, right, up,
  } = computeCameraVectors(
    cameraParams.target,
    cameraParams.rotation,
    cameraParams.attackAngle,
    cameraParams.distance,
  );

  const projectedUnits: ProjectedUnit[] = [];
  let allUnitsVisible = true;

  // Precompute projection parameters
  const fovYRad = (fovY * Math.PI) / 180;
  const tanHalfFovY = Math.tan(fovYRad / 2);
  const tanHalfFovX = tanHalfFovY * aspectRatio;

  for (const unit of units) {
    // Unit dimensions (2:1 cylinder)
    const radius = getUnitScale(unit) * 64; // Placeholder radius; adjust as needed
    const height = radius * 4;

    // Positions of unit base and top in world coordinates
    const unitBase = { x: unit.x, y: unit.y, z: unit.z };
    const unitTop = { x: unit.x, y: unit.y, z: unit.z + height };

    // Transform unit base and top to camera space
    const baseToCam = vectorSubtract(unitBase, camPos);
    const topToCam = vectorSubtract(unitTop, camPos);

    // Coordinates in camera space
    // const baseCamX = vectorDot(baseToCam, right);
    const baseCamY = vectorDot(baseToCam, up);
    const baseCamZ = vectorDot(baseToCam, forward);

    // const topCamX = vectorDot(topToCam, right);
    const topCamY = vectorDot(topToCam, up);
    const topCamZ = vectorDot(topToCam, forward);

    // If unit is behind the camera, it cannot be projected
    if (baseCamZ <= 0 || topCamZ <= 0) {
      allUnitsVisible = false;
      break;
    }

    // Project to normalized device coordinates (NDC)
    // const baseNDCX = baseCamX / (baseCamZ * tanHalfFovX);
    const baseNDCY = baseCamY / (baseCamZ * tanHalfFovY);

    // const topNDCX = topCamX / (topCamZ * tanHalfFovX);
    const topNDCY = topCamY / (topCamZ * tanHalfFovY);

    // Horizontal extent based on unit's radius
    const leftPoint = { x: unit.x - radius, y: unit.y, z: unit.z };
    const rightPoint = { x: unit.x + radius, y: unit.y, z: unit.z };

    const leftToCam = vectorSubtract(leftPoint, camPos);
    const rightToCam = vectorSubtract(rightPoint, camPos);

    const leftCamX = vectorDot(leftToCam, right);
    const leftCamZ = vectorDot(leftToCam, forward);

    const rightCamX = vectorDot(rightToCam, right);
    const rightCamZ = vectorDot(rightToCam, forward);

    if (leftCamZ <= 0 || rightCamZ <= 0) {
      allUnitsVisible = false;
      break;
    }

    const leftNDCX = leftCamX / (leftCamZ * tanHalfFovX);
    const rightNDCX = rightCamX / (rightCamZ * tanHalfFovX);

    const xMin = Math.min(leftNDCX, rightNDCX);
    const xMax = Math.max(leftNDCX, rightNDCX);

    const yMin = Math.min(baseNDCY, topNDCY);
    const yMax = Math.max(baseNDCY, topNDCY);

    // Check if the projected rectangle is within screen bounds [-1, 1]
    if (
      xMax < -1
      || xMin > 1
      || yMax < -1
      || yMin > 1
    ) {
      allUnitsVisible = false;
      break;
    }

    projectedUnits.push({
      screenRect: {
        xMin, xMax, yMin, yMax,
      },
      unit,
    });
  }

  return { projectedUnits, allUnitsVisible };
}

// 3. **Calculate Occlusion Score:**
// Calculates an occlusion score based on overlapping projected rectangles
function calculateOcclusionScore(projectedUnits: ProjectedUnit[]): number {
  let overlapScore = 0;

  for (let i = 0; i < projectedUnits.length; i++) {
    const rectA = projectedUnits[i].screenRect;
    for (let j = i + 1; j < projectedUnits.length; j++) {
      const rectB = projectedUnits[j].screenRect;

      const xOverlap = Math.max(
        0,
        Math.min(rectA.xMax, rectB.xMax) - Math.max(rectA.xMin, rectB.xMin),
      );
      const yOverlap = Math.max(
        0,
        Math.min(rectA.yMax, rectB.yMax) - Math.max(rectA.yMin, rectB.yMin),
      );

      const overlapArea = xOverlap * yOverlap;

      overlapScore += overlapArea;
    }
  }

  return overlapScore;
}

// 4. **Calculate Screen Coverage:**
// Calculates the screen coverage of all projected units
function calculateScreenCoverage(projectedUnits: ProjectedUnit[]): number {
  let xMin = Infinity;
  let xMax = -Infinity;
  let yMin = Infinity;
  let yMax = -Infinity;

  for (const projUnit of projectedUnits) {
    xMin = Math.min(xMin, projUnit.screenRect.xMin);
    xMax = Math.max(xMax, projUnit.screenRect.xMax);
    yMin = Math.min(yMin, projUnit.screenRect.yMin);
    yMax = Math.max(yMax, projUnit.screenRect.yMax);
  }

  const coverageArea = (xMax - xMin) * (yMax - yMin);

  // Screen area in NDC is 4 (from -1 to 1 in both x and y)
  const totalScreenArea = 4;

  // Clamp coverage area to the screen bounds
  const clampedCoverageArea = Math.max(0, Math.min(coverageArea, totalScreenArea));

  // Return the fraction of the screen covered
  return clampedCoverageArea / totalScreenArea;
}

// 5. **Apply Camera Parameters:**
// Applies the camera parameters to set the game camera
function applyCameraParameters(cameraParams: CameraParameters): void {
  const duration = 0; // Immediate change

  Camera.setField(CAMERA_FIELD_TARGET_DISTANCE, cameraParams.distance, duration);
  Camera.setField(CAMERA_FIELD_ANGLE_OF_ATTACK, cameraParams.attackAngle, duration);
  Camera.setField(CAMERA_FIELD_ROTATION, cameraParams.rotation % 360, duration);
  if (cameraParams.attackAngle > 350) {
    Camera.setField(CAMERA_FIELD_ZOFFSET, (cameraParams.attackAngle - 350) * 10, duration);
  }

  Camera.panTimed(cameraParams.target.x, cameraParams.target.y, duration, undefined);
}

/*
**Notes:**

- **Unit Size:** The unit radius and height are placeholders (`radius = 100`). Replace these with actual unit sizes if available.
- **Field of View and Aspect Ratio:** The `fovY` and `aspectRatio` are assumed values. Adjust them based on the actual game settings.
- **Occlusion Calculation:** The occlusion score sums the overlapping areas of projected rectangles. Lower values indicate less occlusion.
- **Screen Coverage:** We calculate the bounding rectangle of all projected units to determine how much of the screen they cover. We aim to maximize this value.
- **Optimization Loop:** We balance between minimizing occlusion and maximizing screen coverage.
Adjust the weights in the total score calculation (`- screenCoverage * 1000`) to fine-tune the importance of each factor.

**Further Improvements:**

- **Dynamic Attack Angle:** You can extend the optimization to include variations in the attack angle within the acceptable range (270 to 360 degrees).
- **Adaptive Step Sizes:** Implementing adaptive increments for rotation and distance can help find optimal parameters more efficiently.
- **Consider Unit Heights Variations:** If units have different heights, adjust the `height` variable accordingly during projection.

By implementing this solution, the camera should automatically adjust to show all units fully,
minimize occlusions, and ensure the units cover as much of the screen as possible while focusing on the main unit's face.

*/
