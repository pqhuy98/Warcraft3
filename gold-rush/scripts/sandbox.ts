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


const pngPath = ".\\maps\\test.w3m\\heightmap-wrathgate-481-481.png"
createReadStream(pngPath)
  .pipe(
    new PNG({

    })
  )
  .on("parsed", async function () {
    console.log("width", this.width)
    console.log("height", this.height)
    console.log("png length", this.data.length)

    const shp = sharp(pngPath, {
      raw: {
        width: this.width,
        height: this.height,
        channels: 4
      }
    }).resize(data.map.width + 1, data.map.height + 1)
    const resizedPngBuffer = await shp.toBuffer();
    const resizedPng = PNG.sync.read(resizedPngBuffer);
    console.log("resized width", resizedPng.width)
    console.log("resized height", resizedPng.height)
    console.log("resized png length", resizedPng.data.length)
    const pngMin = Min(Array.from(resizedPng.data.filter((_, i) => i % 4 === 0)))
    const pngMax = Max(Array.from(resizedPng.data.filter((_, i) => i % 4 === 0)))
    console.log("resized png min", pngMin)
    console.log("resized png max", pngMax)

    let arr = data.groundHeight
    let hMin = 0
    let hMax = 8192 * 2
    for (let i = 0; i < arr.length; i++) {
      const h = resizedPng.data[i * 4]
      let v = Math.round((h - pngMin) / (pngMax - pngMin) * (hMax - hMin)) + hMin
      arr[i] = v
    }

    console.log("final groundHeight", data.groundHeight.length, "min", Min(data.groundHeight), "max", Max(data.groundHeight))

    writeFileSync(w3ePath, TerrainTranslator.jsonToWar(data).buffer)
  })
