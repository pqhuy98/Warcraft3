import { readFileSync, writeFileSync } from 'fs';
import {
  TerrainTranslator,
} from '../sandbox/wc3maptranslator';
import path from 'path';

const mapPaths = [
  "./maps/test-32.w3x",
  "./maps/test-64.w3x",
  "./maps/test-192.w3x",
  "./maps/test-192-layer-0.w3x",
]
async function main() {
  for (const mapPath of mapPaths) {
    const w3ePath = path.join(mapPath, "war3map.w3e")
    const data = TerrainTranslator.warToJson(readFileSync(w3ePath)).json
    writeFileSync("dist/" +path.basename(mapPath) + ".terrain.json", JSON.stringify(
      data,
      null, 2))
  
    console.log(mapPath) 
    console.log("Ground height min", Math.min(...data.groundHeight.flat()))
    console.log("Ground height max", Math.max(...data.groundHeight.flat()))
    console.log("-------") 
  }

}

main()