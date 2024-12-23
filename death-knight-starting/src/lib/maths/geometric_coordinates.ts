import { Loc } from 'lib/location';

const cache: Map<number, Loc[]> = new Map();

export function getCircleCoordinates(radius: number): Loc[] {
  // Check if the result is already in the cache
  if (cache.has(radius)) {
    return cache.get(radius);
  }

  const coordinates: Loc[] = [];
  const radiusSquared = radius * radius;

  for (let i = Math.ceil(-radius); i <= Math.floor(+radius); i++) {
    const dx = i;
    const maxDy = Math.sqrt(radiusSquared - dx * dx);
    const yMin = Math.ceil(-maxDy);
    const yMax = Math.floor(+maxDy);

    for (let j = yMin; j <= yMax; j++) {
      coordinates.push({ x: i, y: j });
    }
  }

  // Sort coordinates by distance to the origin (0, 0)
  coordinates.sort((a, b) => {
    const distance2A = a.x * a.x + a.y * a.y;
    const distance2B = b.x * b.x + b.y * b.y;
    return distance2A - distance2B;
  });

  // Cache the result
  cache.set(radius, coordinates);

  return coordinates;
}
