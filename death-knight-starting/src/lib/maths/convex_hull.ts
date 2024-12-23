import { Loc } from 'lib/location';

// Function to compute the cross product of the vector AB and AC
function crossProduct(p: Loc, q: Loc, r: Loc): number {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// Function to get the convex hull using the Graham scan algorithm
export function getConvexHull(points: Loc[]): Loc[] {
  if (points.length < 3) return points.slice();
  points.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
  const lowerHull: Loc[] = [];
  for (const point of points) {
    while (lowerHull.length >= 2 && crossProduct(lowerHull[lowerHull.length - 2], lowerHull[lowerHull.length - 1], point) <= 0) {
      lowerHull.pop();
    }
    lowerHull.push(point);
  }
  const upperHull: Loc[] = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const point = points[i];
    while (upperHull.length >= 2 && crossProduct(upperHull[upperHull.length - 2], upperHull[upperHull.length - 1], point) <= 0) {
      upperHull.pop();
    }
    upperHull.push(point);
  }
  lowerHull.pop();
  upperHull.pop();
  return lowerHull.concat(upperHull);
}

// Function to expand the convex hull
export function expandHull(hull: Loc[], distance: number): Loc[] {
  const expandedHull: Loc[] = [];
  for (let i = 0; i < hull.length; i++) {
    const p1: Loc = hull[i];
    const p2: Loc = hull[(i + 1) % hull.length];
    const dx: number = p2.x - p1.x;
    const dy: number = p2.y - p1.y;
    const len: number = Math.sqrt(dx * dx + dy * dy);
    const ux: number = dx / len;
    const uy: number = dy / len;
    expandedHull.push({ x: p1.x - uy * distance, y: p1.y + ux * distance });
    expandedHull.push({ x: p2.x - uy * distance, y: p2.y + ux * distance });
  }
  return getConvexHull(expandedHull);
}

// Function to place circles along the convex hull
export function placeCircles(hull: Loc[], circleDistance: number): Loc[] {
  const circles: Loc[] = [];
  let distCovered: number = 0;
  for (let i = 0; i < hull.length; i++) {
    const p1: Loc = hull[i];
    const p2: Loc = hull[(i + 1) % hull.length];
    const dx: number = p2.x - p1.x;
    const dy: number = p2.y - p1.y;
    const len: number = Math.sqrt(dx * dx + dy * dy);
    const steps: number = Math.floor((len - distCovered) / circleDistance);
    const ux: number = dx / len;
    const uy: number = dy / len;
    for (let j = 0; j < steps; j++) {
      circles.push({
        x: p1.x + (distCovered + j * circleDistance + circleDistance / 2) * ux,
        y: p1.y + (distCovered + j * circleDistance + circleDistance / 2) * uy,
      });
    }
    distCovered = (distCovered + steps * circleDistance) - len;
  }
  return circles;
}
