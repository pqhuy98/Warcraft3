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

const dooPath = ".\\maps\\test.w3m\\war3map.doo"
const dooData = DoodadsTranslator.warToJson(readFileSync(dooPath)).json
writeFileSync("dist/doodads-test.json", JSON.stringify(
  dooData,
  null, 2))

// const w3dPath = ".\\maps\\emeraldgardens.w3x\\war3map.w3d"
// const w3dData = ObjectsTranslator.warToJson(ObjectsTranslator.ObjectType.Doodads, readFileSync(w3dPath)).json
// writeFileSync("dist/doodads-data.json", JSON.stringify(
//   w3dData,
//   null, 2))

// const w3uPath = ".\\maps\\emeraldgardens.w3x\\war3map.w3u"
// const w3uData = ObjectsTranslator.warToJson(ObjectsTranslator.ObjectType.Units, readFileSync(w3uPath)).json
// writeFileSync("dist/units-data.json", JSON.stringify(
//   w3uData,
//   null, 2))