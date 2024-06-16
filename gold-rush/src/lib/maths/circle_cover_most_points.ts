import { Loc } from 'lib/location';
import { Unit } from 'w3ts';

interface Point { x: number, y: number }

export function findBestCircle(x: number[], y: number[], radius: number): Point | null {
  if (x.length === 0 || y.length === 0 || x.length !== y.length) {
    return null;
  }

  if (x.length === 1) {
    return { x: x[0], y: y[0] };
  }

  const n = x.length;
  const radiusSquared = radius * radius;
  let bestCenter: Point = { x: x[0], y: y[0] };
  let maxCoveredPoints = 1;

  // Consider each point as a potential center
  for (let i = 0; i < n; i++) {
    const centerX = x[i];
    const centerY = y[i];
    let coveredPoints = 0;

    // Check how many points this center can cover
    for (let j = 0; j < n; j++) {
      if ((x[j] - centerX) * (x[j] - centerX) + (y[j] - centerY) * (y[j] - centerY) <= radiusSquared) {
        coveredPoints++;
      }
    }

    if (coveredPoints > maxCoveredPoints) {
      maxCoveredPoints = coveredPoints;
      bestCenter = { x: centerX, y: centerY };
    }
  }

  // random search near the best candidate
  for (let i = 0; i < 5; i++) {
    const angle = GetRandomDirectionDeg();
    const offset = GetRandomReal(0, radius / 2);
    const newX = bestCenter.x + Math.cos(angle) * offset;
    const newY = bestCenter.y + Math.sin(angle) * offset;
    let coveredPoints = 0;
    for (let j = 0; j < n; j++) {
      if ((x[j] - newX) * (x[j] - newX) + (y[j] - newY) * (y[j] - newY) <= radiusSquared) {
        coveredPoints++;
      }
    }

    if (coveredPoints >= maxCoveredPoints) {
      maxCoveredPoints = coveredPoints;
      bestCenter = { x: newX, y: newY };
    }
  }

  return bestCenter;
}

export function findBestCircleCoverMostUnits(units: Unit[], radius: number) {
  return findBestCircle(
    units.map((u) => u.x),
    units.map((u) => u.y),
    radius,
  );
}

export function findBestCircleCoverMostLocations(locs: Loc[], radius: number) {
  return findBestCircle(
    locs.map((l) => l.x),
    locs.map((l) => l.y),
    radius,
  );
}
