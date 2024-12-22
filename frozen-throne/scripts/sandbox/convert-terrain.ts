import { readFileSync, writeFileSync } from 'fs';
import {
  DoodadsTranslator,
  TerrainTranslator,
} from './wc3maptranslator';
import { Terrain } from './wc3maptranslator/data/Terrain';


function print(arr: unknown[][]) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].map(x => Number(x)).join(" "))
  }
}

const hMin = 0
const hMax = 16383

function gameHeightToDataHeight(gameHeight: number) {
  return (gameHeight + 2048) / (2048 * 2) * (hMax - hMin) + hMin
}

function getInitialTerrain(height: number, width: number): Terrain {
  const fill = (v) => Array.from({ length: (height + 1) }, () => Array(width+1).fill(v))

  return {
    tileset: 'L',
    customTileset: true,
    tilePalette: [ 'Ldrt', 'Ldro', 'Ldrg', 'Lrok', 'Lgrs', 'Lgrd' ],
    cliffTilePalette: [ 'CLdi', 'CLgr' ],
    map: {
      width, height,
      offset: { x: -2048 / 32 * width, y: -2048 / 32 * height }
    },
    // "Masks"

    groundHeight: fill(0),
    waterHeight: fill(192),
  
    // boundaryFlag: 0: not boundary, 1: boundary. Can be all 0
    boundaryFlag: fill(false),

    // flags: 32: blight, 64: water, 128: boundary
    flags: fill(0),

    // groundTexture: texture ID Can be all 0
    groundTexture: fill(0),

    // groundVariation: looks random 0, 8, 16
    groundVariation: fill(0),

    // cliffVariation: looks random 0-7
    cliffVariation: fill(0),

    // cliffTexture: all 240
    cliffTexture: fill(240),

    // layerHeight: all 7
    layerHeight: fill(7),
  }
}


function Min(arr: number[][]) {
  return arr.flat().reduce((acc, v) => Math.min(acc, v), arr[0][0])
}

function Max(arr: number[][]) {
  return arr.flat().reduce((acc, v) => Math.max(acc, v), arr[0][0])
}

async function main() {
  const w3ePathOutput = ".\\maps\\test-big.w3x\\war3map.w3e"
  // const w3ePathInput = ".\\maps\\test-small.w3x\\war3map.w3e"
  const dooPath = ".\\maps\\test-big.w3x\\war3map.doo"

  const doodads = DoodadsTranslator.warToJson(readFileSync(dooPath)).json
  console.log(JSON.stringify(doodads))

  // const terrData = TerrainTranslator.warToJson(readFileSync(w3ePathInput)).json
  // writeFileSync("dist/terrain.json", JSON.stringify(
  //   terrData,
  //   null, 2))





  // console.log("GroundHeight:", terrData.groundHeight.length, "x", terrData.groundHeight[0].length)
  // print(terrData.flags)

  // const stop = true
  // if (stop) {
  //   return;
  // }

  // console.log("groundHeight", terrData.groundHeight.length, "min", Min(terrData.groundHeight), "max", Max(terrData.groundHeight))
  // console.log("waterHeight", terrData.waterHeight.length, "min", Min(terrData.waterHeight), "max", Max(terrData.waterHeight))
  // console.log("boundaryFlag", terrData.boundaryFlag.length)
  // console.log("flags", terrData.flags.length, "min", Min(terrData.flags), "max", Max(terrData.flags))
  // console.log("groundTexture", terrData.groundTexture.length, "min", Min(terrData.groundTexture), "max", Max(terrData.groundTexture))
  // console.log("groundVariation", terrData.groundVariation.length, "min", Min(terrData.groundVariation), "max", Max(terrData.groundVariation))
  // console.log("cliffVariation", terrData.cliffVariation.length, "min", Min(terrData.cliffVariation), "max", Max(terrData.cliffVariation))
  // console.log("cliffTexture", terrData.cliffTexture.length, "min", Min(terrData.cliffTexture), "max", Max(terrData.cliffTexture))
  // console.log("layerHeight", terrData.layerHeight.length, "min", Min(terrData.layerHeight), "max", Max(terrData.layerHeight))

  // const width = terrData.groundHeight.length
  // const height = terrData.groundHeight[0].length


  
  const {heightMap, height, width} = readObjHeightMap()
  console.log("getInitialTerrain", {height, width})

  const terrData = getInitialTerrain(height, width)
  for(let i = 0; i < heightMap.length; i++) {
    for(let j = 0; j < heightMap[i].length; j++) {
      terrData.groundHeight[i][j] = Math.ceil(heightMap[i][j] * (hMax - hMin) + hMin)
    }
  }

  let waterHeightThreshold = gameHeightToDataHeight(-625)
  let waterHeight = gameHeightToDataHeight(-600)
  for(let i = 0; i < heightMap.length; i++) {
    for(let j = 0; j < heightMap[i].length; j++) {
      if (terrData.groundHeight[i][j] < waterHeightThreshold) {
        terrData.flags[i][j] = 64
        terrData.waterHeight[i][j] = waterHeight
        terrData.groundHeight[i][j] = Math.min(terrData.groundHeight[i][j], waterHeight - 1)
      }
    }
  }

  console.log("groundHeight", terrData.groundHeight.length, "min", Min(terrData.groundHeight), "max", Max(terrData.groundHeight))

  const ddSize = readTerrainMdl()
  const ddRatio = {
    x: height / 32 * 4096 / ddSize[0] * 100,
    y: width / 32 * 4096 / ddSize[1] * 100,
    z: (2047.8 - -2048) / ddSize[2] * 100,
  }
  console.log(ddRatio)

  writeFileSync(w3ePathOutput, TerrainTranslator.jsonToWar(terrData).buffer)
}

function readObjHeightMap() {
  const objPath = "scripts\\sandbox\\resources\\terrain-only.obj"
  const obj = readFileSync(objPath, "utf-8")
  const lines = obj.split("\n")
  const vertices: number[][] = []
  const faces = []
  for(let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith("v ")) {
      const vertex = line.split(" ")
      vertices.push([
        parseFloat(vertex[1]),
        parseFloat(vertex[2]),
        parseFloat(vertex[3]),
      ])
    }
  }


  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;

  vertices.forEach(vertex => {
    const x = vertex[0];
    const y = vertex[1];
    const z = vertex[2];
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    minZ = Math.min(minZ, z);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
    maxZ = Math.max(maxZ, z);
  });

  const dx = maxX - minX;
  const dy = maxY - minY;
  const dz = maxZ - minZ;
  console.log({dz, dx, dy })

  const ratio = (2047.8 - -2048) / dy;
  const gameHeight = dz * ratio;
  const gameWidth = dx * ratio;
  const stepPerTile = 4096/32
  const h1 = gameHeight / stepPerTile * 2
  const w1 = gameWidth / stepPerTile * 2

  const height = Math.ceil(h1);
  const width = Math.ceil(w1);

  console.log({ratio, width, height})

  const heightMap = Array.from({ length: height + 1 }, () => Array(width + 1).fill(0));
  vertices.forEach(vertex => {
    const x = vertex[0];
    const y = vertex[1];
    const z = vertex[2];
    // swap axes
    const x1 = 1-(z - minZ) / dz;
    const y1 = 1-(x - minX) / dx;
    const z1 = (y - minY) / dy;
    const i = Math.round(x1 * height);
    const j = Math.round(y1 * width);
    heightMap[i][j] = z1;
  })

  return {heightMap, height, width};
}

function readTerrainMdl() {
  const mdlPath = "maps\\test-big.w3x\\terrain-only2.mdl"
  const lines = readFileSync(mdlPath, "utf-8").split("\n").map(l => l.trim()) as string[]
  const minExtentLine = lines.filter(l => l.startsWith("MinimumExtent"))[0]; // 'MinimumExtent { -1132.0558, -953.8664, -207.44075 },'
  const maxExtentLine = lines.filter(l => l.startsWith("MaximumExtent"))[0];

  function extract(s) {
    return s.replace(",", "")
    .split(" ").slice(2, 5)
    .map(v => parseFloat(v))
  }

  const minExtent = extract(minExtentLine)
  const maxExtent = extract(maxExtentLine)

  return [maxExtent[0] - minExtent[0], maxExtent[1] - minExtent[1], maxExtent[2] - minExtent[2]]
}

main()