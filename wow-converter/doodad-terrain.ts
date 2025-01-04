import { readFileSync, writeFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';
import { parseMDL } from 'war3-model';

import { distancePerTile } from './src/constants';
import { dataHeightMax, dataHeightMin } from './src/global-config';
import { Vector3 } from './src/math/model';
import { radians } from './src/math/rotation';
import { V3 } from './src/math/vector';
import {
  dataHeightToGameZ, gameZToDataHeight, getInitialTerrain, maxGameHeightDiff,
  nArray,
} from './src/utils';
import { DoodadsTranslator, TerrainTranslator } from './src/wc3maptranslator';

const mapPath = 'maps/test.w3x';
const heightThreshold = 9999;
const floodBrushSize = 2;

const modelStr = readFileSync(path.join(mapPath, 'icecrownraid_set0.floor1.ground.mdl'), 'utf-8');
const mdl = parseMDL(modelStr);

const json = (x: unknown) => JSON.stringify(x, null, 2);

interface Face {
  vertices: [Vector3, Vector3, Vector3];
  geosetId: number
}

type Vertex2D = [number, number];

// Function to calculate the area of the triangle using vertices
function triangleArea(A: Vertex2D, B: Vertex2D, C: Vertex2D): number {
  return Math.abs((A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1])) / 2.0);
}

// Function to check if a point P is inside the triangle ABC
function isInsideTriangle(A: Vertex2D, B: Vertex2D, C: Vertex2D, P: Vertex2D): boolean {
  const fullArea = triangleArea(A, B, C);
  const area1 = triangleArea(P, B, C);
  const area2 = triangleArea(A, P, C);
  const area3 = triangleArea(A, B, P);

  // Check if the sum of P's area with the sides of the triangle equals the full area
  return fullArea === area1 + area2 + area3;
}

// Function to find integer points inside the triangle
function findIntegerPointsInTriangle(A: Vertex2D, B: Vertex2D, C: Vertex2D): Vertex2D[] {
  const points: Vertex2D[] = [];
  for (const p of [A, B, C]) {
    points.push([Math.round(p[0]), Math.round(p[1])]);
    points.push([Math.floor(p[0]), Math.floor(p[1])]);
    points.push([Math.floor(p[0]), Math.ceil(p[1])]);
    points.push([Math.ceil(p[0]), Math.floor(p[1])]);
    points.push([Math.ceil(p[0]), Math.ceil(p[1])]);
  }

  // Determine the bounding box of the triangle
  const minX = Math.min(A[0], B[0], C[0]);
  const maxX = Math.max(A[0], B[0], C[0]);
  const minY = Math.min(A[1], B[1], C[1]);
  const maxY = Math.max(A[1], B[1], C[1]);

  // Iterate over the bounding box and check each point
  for (let x = Math.floor(minX); x <= Math.ceil(maxX); x++) {
    for (let y = Math.floor(minY); y <= Math.ceil(maxY); y++) {
      const point: Vertex2D = [x, y];
      if (isInsideTriangle(A, B, C, point)) {
        points.push(point);
      }
    }
  }

  return points;
}

function calculateTriangleSlope(points: Vector3[]): number {
  if (points.length !== 3) {
    throw new Error('Exactly three points are required to form a triangle.');
  }

  // Destructure points for readability
  const [A, B, C] = points;

  // Calculate vectors AB and AC
  const AB = [B[0] - A[0], B[1] - A[1], B[2] - A[2]];
  const AC = [C[0] - A[0], C[1] - A[1], C[2] - A[2]];

  // Calculate the cross product AB x AC
  const crossProduct = [
    AB[1] * AC[2] - AB[2] * AC[1], // n_x
    AB[2] * AC[0] - AB[0] * AC[2], // n_y
    AB[0] * AC[1] - AB[1] * AC[0], // n_z
  ];

  // Length of the normal vector
  const normalLength = Math.sqrt(
    crossProduct[0] ** 2 + crossProduct[1] ** 2 + crossProduct[2] ** 2,
  );

  // Angle with respect to z-axis (vertical direction)
  const cosTheta = crossProduct[2] / normalLength;

  // Convert angle from radians to degrees
  const angleInRadians = Math.acos(cosTheta);
  const angleInDegrees = angleInRadians * (180 / Math.PI);

  return angleInDegrees;
}

function calculateZ(v1: Vector3, v2: Vector3, v3: Vector3, x: number, y: number): number {
  // Create vectors from v1 to v2 and v1 to v3
  const vectorA = {
    x: v2[0] - v1[0],
    y: v2[1] - v1[1],
    z: v2[2] - v1[2],
  };

  const vectorB = {
    x: v3[0] - v1[0],
    y: v3[1] - v1[1],
    z: v3[2] - v1[2],
  };

  // Compute the normal vector (a, b, c) via cross product of vectorA and vectorB
  const normal = {
    a: vectorA.y * vectorB.z - vectorA.z * vectorB.y,
    b: vectorA.z * vectorB.x - vectorA.x * vectorB.z,
    c: vectorA.x * vectorB.y - vectorA.y * vectorB.x,
  };

  // Check if the plane is vertical (c === 0)
  if (normal.c === 0) {
    throw new Error('The plane is vertical relative to the Z-axis; Z cannot be uniquely determined.');
  }

  // Calculate d using the plane equation: a*x + b*y + c*z + d = 0 => d = - (a*x0 + b*y0 + c*z0)
  const d = -(normal.a * v1[0] + normal.b * v1[1] + normal.c * v1[2]);

  // Solve for z: z = (-a*x - b*y - d) / c
  const z = (-normal.a * x - normal.b * y - d) / normal.c;

  return z;
}

const allFaces = mdl.Geosets.flatMap(((g, geosetId) => {
  const faces: Face[] = [];
  for (let i = 0; i < g.Faces.length; i += 3) {
    const id1 = g.Faces[i] * 3;
    const v1: Vector3 = [
      g.Vertices[id1],
      g.Vertices[id1 + 1],
      g.Vertices[id1 + 2],
    ];
    const id2 = g.Faces[i + 1] * 3;
    const v2: Vector3 = [
      g.Vertices[id2],
      g.Vertices[id2 + 1],
      g.Vertices[id2 + 2],
    ];
    const id3 = g.Faces[i + 2] * 3;
    const v3: Vector3 = [
      g.Vertices[id3],
      g.Vertices[id3 + 1],
      g.Vertices[id3 + 2],
    ];
    faces.push({
      vertices: [v1, v2, v3],
      geosetId,
    });
  }
  return faces;
}));

console.log('allFaces.length', allFaces.length);

const dooPath = path.join(mapPath, 'war3map.doo');
const doodads = DoodadsTranslator.warToJson(readFileSync(dooPath)).json;
console.log(json(doodads[0][0]));

const w3ePath = path.join(mapPath, 'war3map.w3e');
const { height, width } = TerrainTranslator.warToJson(readFileSync(w3ePath)).json.map;
const terrain = getInitialTerrain(height, width);

const iccDoodad = doodads[0].find((d) => d.type === 'A000')!;
const mapSize = [terrain.map.width * distancePerTile, terrain.map.height * distancePerTile, maxGameHeightDiff];
const mapMin = [
  terrain.map.offset.x,
  terrain.map.offset.y,
  dataHeightToGameZ(dataHeightMin),
];
const mapMax = [
  terrain.map.offset.x + terrain.map.width * distancePerTile,
  terrain.map.offset.y + terrain.map.height * distancePerTile,
  dataHeightToGameZ(dataHeightMax),
];

console.log({ mapSize });
console.log({ mapMin, mapMax });

const sumArray = nArray(terrain.groundHeight.length, terrain.groundHeight[0].length, 0);
const countArray = nArray(terrain.groundHeight.length, terrain.groundHeight[0].length, 0);

function update(i: number, j: number, newDataHeight: number) {
  countArray[i][j]++;
  if (countArray[i][j] > 1) {
    // max aggregating
    sumArray[i][j] = Math.max(sumArray[i][j], newDataHeight);
    countArray[i][j] = 1;

    /// sum aggregating
    // sumArray[i][j] += newDataHeight;
  } else {
    sumArray[i][j] = newDataHeight;
  }
  const dataHeight = Math.round(sumArray[i][j] / countArray[i][j]);
  terrain.groundHeight[i][j] = Math.max(dataHeightMin, Math.min(dataHeightMax, dataHeight));
}

for (let i = 0; i < terrain.groundHeight.length; i++) {
  for (let j = 0; j < terrain.groundHeight[i].length; j++) {
    terrain.layerHeight[i][j] = 7;
    terrain.groundHeight[i][j] = dataHeightMin;
  }
}

let minI = Infinity;
let maxI = -Infinity;

console.log('terrain.map', terrain.map);

allFaces.forEach((f) => {
  const tileVertices: Vector3[] = f.vertices.map((v) => {
    const [x, y, z] = V3.rotate(V3.mul(v, iccDoodad.scale), [0, 0, radians(iccDoodad.angle)]);
    const gameX = x + iccDoodad.position[0];
    const gameY = y + iccDoodad.position[1];
    const gameZ = z + iccDoodad.position[2];

    const percentX = (gameX - mapMin[0]) / mapSize[0];
    const percentY = (gameY - mapMin[1]) / mapSize[1];
    const tileI = percentY * terrain.map.height;
    const tileJ = percentX * terrain.map.width;
    return [tileI, tileJ, gameZ];
  });

  const points = findIntegerPointsInTriangle(
    <Vertex2D><unknown>tileVertices[0],
    <Vertex2D><unknown>tileVertices[1],
    <Vertex2D><unknown>tileVertices[2],
  );
  const slope = calculateTriangleSlope(f.vertices);

  points.forEach(([i, j]) => {
    if (i < 0 || i >= terrain.map.height || j < 0 || j >= terrain.map.width) {
      return;
    }
    if (slope > 45) {
      // terrain.flags[i][j] |= 128;
      // terrain.flags[i + 1][j + 1] |= 128;
      // terrain.flags[i][j + 1] |= 128;
      // terrain.flags[i + 1][j] |= 128;
      return;
    }
    const gameZ = Math.min(
      calculateZ(tileVertices[0], tileVertices[1], tileVertices[2], i, j),
      _.max(tileVertices.map((v) => v[2]))!,
    );
    if (gameZ > heightThreshold) return;

    minI = Math.min(minI, i);
    maxI = Math.max(maxI, i);
    // update(i, j, dataHeightMax);
    update(i, j, gameZToDataHeight(gameZ));
  });
});

for (let k = (floodBrushSize * 2 + 1) ** 2; k >= 1; k--) {
  for (let i = 0; i < terrain.groundHeight.length; i++) {
    for (let j = 0; j < terrain.groundHeight[i].length; j++) {
      if (countArray[i][j] === 0) {
        let sum = 0;
        let cnt = 0;
        for (let i2 = Math.max(0, i - floodBrushSize); i2 <= Math.min(terrain.map.height - 1, i + floodBrushSize); i2++) {
          for (let j2 = Math.max(0, j - floodBrushSize); j2 <= Math.min(terrain.map.width - 1, j + floodBrushSize); j2++) {
            if (countArray[i2][j2] > 0) {
              sum += terrain.groundHeight[i2][j2];
              cnt++;
            }
          }
        }
        if (cnt >= k) {
          const dataHeight = Math.round(sum / cnt);
          update(i, j, dataHeight);
        }
      }
    }
  }
}

for (let i = 0; i < terrain.groundHeight.length; i++) {
  for (let j = 0; j < terrain.groundHeight[i].length; j++) {
    if (countArray[i][j] === 0) {
      terrain.groundHeight[i][j] = dataHeightMin;
    }
  }
}

terrain.groundTexture[terrain.map.height][terrain.map.width] = 3;
terrain.groundTexture[0][0] = 3;

console.log(terrain.map);
console.log(terrain.groundTexture.length, terrain.groundTexture[0].length);
console.log(terrain.groundHeight.length, terrain.groundHeight[0].length);
console.log(terrain.layerHeight.length, terrain.groundHeight[0].length);

writeFileSync(w3ePath, TerrainTranslator.jsonToWar(terrain).buffer);
