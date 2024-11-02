import { createReadStream, readFileSync, writeFileSync } from 'fs';
import {
  CamerasTranslator,
  DoodadsTranslator,
  ImportsTranslator,
  InfoTranslator,
  ObjectsTranslator,
  RegionsTranslator,
  SoundsTranslator,
  StringsTranslator,
  TerrainTranslator,
  UnitsTranslator
} from './wc3maptranslator';
import { PNG } from "pngjs"
import * as sharp from 'sharp';
import * as path from 'path';

interface DoodadPlacement {
  type: string
  variation: number
  position: [number, number, number],
  angle: number,
  scale: [number, number, number],
  skinId: string,
  flags: {
    visible: boolean,
    solid: boolean
  },
  life: number,
  id: number
}

async function main() {
  const w3ePath = ".\\maps\\test.w3m\\war3map.w3e"
  const dooPath = ".\\maps\\test.w3m\\war3map.doo"

  const terrData = TerrainTranslator.warToJson(readFileSync(w3ePath)).json
  writeFileSync("dist/terrain.json", JSON.stringify(
    terrData,
    null, 2))

  function Min(arr: number[]) {
    return arr.reduce((acc, v) => Math.min(acc, v), arr[0])
  }

  function Max(arr: number[]) {
    return arr.reduce((acc, v) => Math.max(acc, v), arr[0])
  }


  console.log("groundHeight", terrData.groundHeight.length, "min", Min(terrData.groundHeight), "max", Max(terrData.groundHeight))
  console.log("waterHeight", terrData.waterHeight.length, "min", Min(terrData.waterHeight), "max", Max(terrData.waterHeight))
  console.log("boundaryFlag", terrData.boundaryFlag.length)
  console.log("flags", terrData.flags.length, "min", Min(terrData.flags), "max", Max(terrData.flags))
  console.log("groundTexture", terrData.groundTexture.length, "min", Min(terrData.groundTexture), "max", Max(terrData.groundTexture))
  console.log("groundVariation", terrData.groundVariation.length, "min", Min(terrData.groundVariation), "max", Max(terrData.groundVariation))
  console.log("cliffVariation", terrData.cliffVariation.length, "min", Min(terrData.cliffVariation), "max", Max(terrData.cliffVariation))
  console.log("cliffTexture", terrData.cliffTexture.length, "min", Min(terrData.cliffTexture), "max", Max(terrData.cliffTexture))
  console.log("layerHeight", terrData.layerHeight.length, "min", Min(terrData.layerHeight), "max", Max(terrData.layerHeight))


  const dirtTile = terrData.tilePalette.findIndex((code) => code === "Idrt")
  const snowTile = terrData.tilePalette.findIndex((code) => code === "Isnw")


  const heightPath = ".\\maps\\test.w3m\\gray-output-big.png"
  const floorPath = ".\\maps\\test.w3m\\gray-layeroutput-big.png"
  const edgePath = ".\\maps\\test.w3m\\gray-edge-big.png"
  const mapWidth = terrData.map.width + 1
  const mapHeight = terrData.map.height + 1

  const heightPng = PNG.sync.read(await sharp(heightPath)
    .resize(mapWidth, mapHeight)
    .toBuffer())
  console.log("heightPng width", heightPng.width)
  console.log("heightPng height", heightPng.height)
  console.log("heightPng data length", heightPng.data.length)

  const floorPng = PNG.sync.read(await sharp(floorPath)
    .resize(mapWidth, mapHeight)
    .toBuffer())
  console.log("floorPng width", floorPng.width)
  console.log("floorPng height", floorPng.height)
  console.log("floorPng data length", floorPng.data.length)

  const edgePng = PNG.sync.read(await sharp(edgePath)
    .resize(mapWidth, mapHeight)
    .toBuffer())
  console.log("edgePng width", edgePng.width)
  console.log("edgePng height", edgePng.height)
  console.log("edgePng data length", edgePng.data.length)

  const heightByteMin = Min(Array.from(heightPng.data.filter((_, i) => i % 4 === 0)))
  const heightByteMax = Max(Array.from(heightPng.data.filter((_, i) => i % 4 === 0)))
  console.log("heightPng data min", heightByteMin)
  console.log("heightPng data max", heightByteMax)

  terrData.cliffTilePalette = [
    "CIsn",
    "CIrb"
  ]

  // Height
  let hMin = 0
  let hMax = 8192 * 2 - 32

  // Layer height
  let lMin = 0
  let lMax = 12
  const threshold = 0
  for (let i = 0; i < terrData.layerHeight.length; i++) {
    const isFloor = floorPng.data[i * 4] * 2 < floorPng.data[i * 4 + 1]
      && floorPng.data[i * 4 + 2] * 2 < floorPng.data[i * 4 + 1]

    const edge = (edgePng.data[i * 4] + edgePng.data[i * 4 + 1] + edgePng.data[i * 4 + 2]) / (255 * 3)

    const heightByte = heightPng.data[i * 4]

    // let height = 100
    let height = Math.round((heightByte - heightByteMin) / (heightByteMax - heightByteMin) * (hMax - hMin)) + hMin
    let layerHeight = 0
    let groundTexture = snowTile

    layerHeight = Math.round(Math.max(0, heightByte - threshold) / (255 - threshold) * (lMax - lMin)) + lMin
    if (isFloor) {
      groundTexture = snowTile
    } else {
      // height += Math.round(Math.random() * 1024)
      groundTexture = Math.random() < 1 / 4 ? snowTile : dirtTile
    }

    terrData.groundHeight[i] = Math.max(hMin, Math.min(hMax, height))
    terrData.layerHeight[i] = Math.max(lMin, Math.min(lMax, layerHeight))
    terrData.groundTexture[i] = groundTexture
  }

  // Fill the matrix based on darkness threshold
  const D = 0.9
  const R = 2
  for (let x = 0; x < mapWidth; x++) {
    for (let y = 0; y < mapHeight; y++) {
      const idx = (y * mapWidth + x);
      const r = edgePng.data[idx * 4];
      const g = edgePng.data[idx * 4 + 1];
      const b = edgePng.data[idx * 4 + 2];
      const darkness = (r + g + b) / (3 * 255);

      // Check if the terrain is passable
      let isFlat = darkness >= D;
      if (isFlat) {
        for (let dy = -R; dy <= R; dy++) {
          for (let dx = -R; dx <= R; dx++) {
            if (x + dx >= 0 && x + dx < mapWidth
              && y + dy >= 0 && y + dy < mapHeight
              && (x + dx) ** 2 + (y + dy) ** 2 <= R ** 2
            ) {
              const idx2 = ((y + dy) * mapWidth + (x + dx));
              const r2 = edgePng.data[idx2 * 4];
              const g2 = edgePng.data[idx2 * 4 + 1];
              const b2 = edgePng.data[idx2 * 4 + 2];
              const darkness2 = (r2 + g2 + b2) / (3 * 255);
              if (darkness2 < D) {
                isFlat = false;
                break;
              }
            }
          }
          if (!isFlat) break;
        }
      }
      if (isFlat) {
        edgePng.data[idx * 4] = 0
        edgePng.data[idx * 4 + 1] = 255
        edgePng.data[idx * 4 + 2] = 0
        terrData.flags[idx] |= 0x0010
      } else {
        terrData.flags[idx] &= ~0x0010;
      }
    }
  }

  writeFileSync("dist/edge-bfs.png", PNG.sync.write(edgePng))

  console.log("floorPng length", floorPng.data.length)


  console.log("final groundHeight", terrData.groundHeight.length, "min", Min(terrData.groundHeight), "max", Max(terrData.groundHeight))
  console.log("final layerHeight", terrData.layerHeight.length, "min", Min(terrData.layerHeight), "max", Max(terrData.layerHeight))

  writeFileSync(w3ePath, TerrainTranslator.jsonToWar(terrData).buffer)

  const doodads: DoodadPlacement[] = JSON.parse(readFileSync(path.join(__dirname, "resources", "doodad-placement.json")).toString())
  doodads.forEach(d => {
    d.position[0] = d.position[0] * (mapWidth - 1) * 128 - (mapWidth - 1) * 128 / 2
    d.position[1] = d.position[1] * (mapHeight - 1) * 128 - (mapHeight - 1) * 128 / 2
    const tileX = Math.floor(d.position[0] / 128)
    const tileY = Math.floor(d.position[1] / 128)
    d.position[2] = (terrData.groundHeight[tileX + tileY * mapWidth] - 8192) / 512
  })

  writeFileSync(dooPath, DoodadsTranslator.jsonToWar(doodads).buffer)
}
main()