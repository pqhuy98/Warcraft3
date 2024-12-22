import { mkdirSync, writeFileSync } from 'fs';
import { convertObjMdl } from "./objmdl";
import { readDoodadsCsv } from './wowexport/read-doodads-data';
import { glob } from 'glob';
import * as path from 'path';
import { blp2Image } from './blp/blp';
import { MDL } from './objmdl/mdl';

// const filePath = "scripts\\sandbox\\resources\\elwynnrock2.obj"
// const path = "scripts\\sandbox\\resources\\terrain-only.obj"

// const now =  new Date()
// const mdl = convertObjMdl(filePath)
// writeFileSync(filePath.replace(".obj", ".mdl"), mdl.toString())
// console.log("Finished in", new Date().getTime() - now.getTime(), "ms")

// true && process.exit(0)

const wowExportPath = "C:/Users/quang/wow.export/";
const mapPath = "maps/test-big.w3x/";

function isTerrainFile(filePath: string) {
  return path.basename(filePath).startsWith("adt_")
}

(async () => {
  let objFiles = await glob(wowExportPath + "/**/*.obj")
  objFiles = objFiles.filter(f => isTerrainFile(f))

  const processedMaterials = new Set<string>()
  const terrainAdts: [MDL, string][] = []

  // Convert all .obj to .mdl. Write doodads, but saving terrain files to list for post-processing
  objFiles.forEach((objFile) => {
    console.log("Converting", objFile)
    const {mdl, mtlPaths} = convertObjMdl(objFile, wowExportPath)

    const outputFile = objFile
      .replace(path.normalize(wowExportPath), path.normalize(mapPath))  
      .replace(".obj", ".mdl")

    if (!isTerrainFile(objFile)) {
      console.log("Converted doodad to", outputFile)
      mkdirSync(path.dirname(outputFile), { recursive: true })
      writeFileSync(outputFile, mdl.toString())
    } else {
      terrainAdts.push([mdl, outputFile])
      console.log("Store terrain for post-processing", outputFile)
    }

    false && mtlPaths.forEach(mtlPath => {
      if (processedMaterials.has(mtlPath)) {
        return
      }
      const fromPath = path.join(wowExportPath, mtlPath)
      const toPath = path.join(mapPath, mtlPath.replace(".png", ".blp"))
      console.log("Converting", fromPath, "to", toPath)
      blp2Image(fromPath, toPath, "blp")
      processedMaterials.add(mtlPath)
    })

    console.log("--------------------------------")
   
  })

  // Post-process terrain files. Conpute center point and translates all vertices
  console.log("Post-processing terrain files")
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  terrainAdts.forEach(([mdl]) => {
    mdl.sync();
    min[0] = Math.min(min[0], mdl.model.minimumExtent[0])
    min[1] = Math.min(min[1], mdl.model.minimumExtent[1])
    min[2] = Math.min(min[2], mdl.model.minimumExtent[2])
    max[0] = Math.max(max[0], mdl.model.maximumExtent[0])
    max[1] = Math.max(max[1], mdl.model.maximumExtent[1])
    max[2] = Math.max(max[2], mdl.model.maximumExtent[2])
  })

  const center = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2]
  
  console.log("Total min/max extents", min, max)
  console.log("Dimension", (max[0] - min[0]), (max[1] - min[1]), (max[2] - min[2]))
  console.log("Total center", center)

  terrainAdts.forEach(([mdl, outputFile]) => {
    mdl.geosets.forEach(geoset => {
      geoset.vertices.forEach(v => {
        v[0] -= center[0]
        v[1] -= center[1]
        v[2] -= center[2]
      })
    })
    mdl.sync()
    writeFileSync(outputFile, mdl.toString())
  })

  min[0] -= center[0]
  min[1] -= center[1]
  min[2] -= center[2]
  min[0] -= center[0]
  min[1] -= center[1]
  min[2] -= center[2]

  console.log("After translation, extents:", min, max)

  const wowRows = await readDoodadsCsv(wowExportPath)
  
  wowRows.forEach(row => {

  })

  writeFileSync(path.join(__dirname, "resources", "wowrows.json"), JSON.stringify(wowRows, null, 2))


})()