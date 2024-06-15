import { Loc } from 'lib/location';
import { setTimeout } from 'lib/trigger';
import { Unit } from 'w3ts';

interface Point { x: number, y: number }

let lock = false;

export async function findBestCircle(x: number[], y: number[], radius: number): Promise<Point | null> {
  if (lock) {
    return null;
  }
  lock = true;

  if (x.length === 0 || y.length === 0 || x.length !== y.length) {
    lock = false;
    return null;
  }

  if (x.length === 1) {
    lock = false;
    return { x: x[0], y: y[0] };
  }

  const n = x.length;
  const radiusSquared = radius * radius;
  let bestCenter: Point = { x: x[0], y: y[0] };
  let maxCoveredPoints = 1;

  const chunkSize = 300;
  let operations = 0;

  const checkChunkInterrupt = async () => {
    operations++;
    if (operations >= chunkSize) {
      operations = 0;
      await new Promise<void>((resolve) => { setTimeout(0.03, () => resolve()); });
    }
  };

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
      await checkChunkInterrupt();
    }

    if (coveredPoints > maxCoveredPoints) {
      maxCoveredPoints = coveredPoints;
      bestCenter = { x: centerX, y: centerY };
    }
  }

  // random search near the best candidate
  for (let angle = 0; angle < 2 * Math.PI; angle += 2 * Math.PI / 16) {
    const newX = bestCenter.x + Math.cos(angle) * radius / 3;
    const newY = bestCenter.y + Math.sin(angle) * radius / 3;
    let coveredPoints = 0;
    for (let j = 0; j < n; j++) {
      if ((x[j] - newX) * (x[j] - newX) + (y[j] - newY) * (y[j] - newY) <= radiusSquared) {
        coveredPoints++;
      }
      await checkChunkInterrupt();
    }

    if (coveredPoints > maxCoveredPoints) {
      maxCoveredPoints = coveredPoints;
      bestCenter = { x: newX, y: newY };
    }
  }

  lock = false;
  return bestCenter;
}

export function isLocked() {
  return lock;
}

export async function findBestCircleCoverMostUnits(units: Unit[], radius: number) {
  return findBestCircle(
    units.map((u) => u.x),
    units.map((u) => u.y),
    radius,
  );
}

export async function findBestCircleCoverMostLocations(locs: Loc[], radius: number) {
  return findBestCircle(
    locs.map((l) => l.x),
    locs.map((l) => l.y),
    radius,
  );
}
