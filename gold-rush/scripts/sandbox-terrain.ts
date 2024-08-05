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
} from 'wc3maptranslator';
import { PNG } from "pngjs"
import * as sharp from 'sharp';

async function main() {
  const w3ePath = ".\\maps\\test.w3m\\war3map.w3e"
  const data = TerrainTranslator.warToJson(readFileSync(w3ePath)).json
  writeFileSync("dist/terrain.json", JSON.stringify(
    data,
    null, 2))

  function Min(arr: number[]) {
    return arr.reduce((acc, v) => Math.min(acc, v), arr[0])
  }

  function Max(arr: number[]) {
    return arr.reduce((acc, v) => Math.max(acc, v), arr[0])
  }


  console.log("groundHeight", data.groundHeight.length, "min", Min(data.groundHeight), "max", Max(data.groundHeight))
  console.log("waterHeight", data.waterHeight.length, "min", Min(data.waterHeight), "max", Max(data.waterHeight))
  console.log("boundaryFlag", data.boundaryFlag.length)
  console.log("flags", data.flags.length, "min", Min(data.flags), "max", Max(data.flags))
  console.log("groundTexture", data.groundTexture.length, "min", Min(data.groundTexture), "max", Max(data.groundTexture))
  console.log("groundVariation", data.groundVariation.length, "min", Min(data.groundVariation), "max", Max(data.groundVariation))
  console.log("cliffVariation", data.cliffVariation.length, "min", Min(data.cliffVariation), "max", Max(data.cliffVariation))
  console.log("cliffTexture", data.cliffTexture.length, "min", Min(data.cliffTexture), "max", Max(data.cliffTexture))
  console.log("layerHeight", data.layerHeight.length, "min", Min(data.layerHeight), "max", Max(data.layerHeight))


  const dirtTile = data.tilePalette.findIndex((code) => code === "Idrt")
  const snowTile = data.tilePalette.findIndex((code) => code === "Isnw")


  const heightPath = ".\\maps\\test.w3m\\gray-output-big.png"
  const floorPath = ".\\maps\\test.w3m\\gray-layeroutput-big.png"
  const edgePath = ".\\maps\\test.w3m\\gray-edge-big.png"
  const mapWidth = data.map.width + 1
  const mapHeight = data.map.height + 1

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

  data.cliffTilePalette = [
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
  for (let i = 0; i < data.layerHeight.length; i++) {
    const isFloor = floorPng.data[i * 4] * 2 < floorPng.data[i * 4 + 1]
      && floorPng.data[i * 4 + 2] * 2 < floorPng.data[i * 4 + 1]

    const edge = (edgePng.data[i * 4] + edgePng.data[i * 4 + 1] + edgePng.data[i * 4 + 2]) / (255 * 3)

    const heightByte = heightPng.data[i * 4]

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

    data.groundHeight[i] = Math.max(hMin, Math.min(hMax, height))
    data.layerHeight[i] = Math.max(lMin, Math.min(lMax, layerHeight))
    data.groundTexture[i] = groundTexture
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
        data.flags[idx] |= 0x0010
      } else {
        data.flags[idx] &= ~0x0010;
      }
    }
  }

  writeFileSync("dist/edge-bfs.png", PNG.sync.write(edgePng))

  console.log("floorPng length", floorPng.data.length)


  console.log("final groundHeight", data.groundHeight.length, "min", Min(data.groundHeight), "max", Max(data.groundHeight))
  console.log("final layerHeight", data.layerHeight.length, "min", Min(data.layerHeight), "max", Max(data.layerHeight))

  writeFileSync(w3ePath, TerrainTranslator.jsonToWar(data).buffer)
}
main()