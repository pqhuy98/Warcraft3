import { readFileSync, writeFileSync } from 'fs';
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

writeFileSync("dist/terrain.json", JSON.stringify(
  TerrainTranslator.warToJson(readFileSync(".\\maps\\emeraldgardens.w3x\\war3map.w3e")).json,
  null, 2))

// writeFileSync("dist/unit.json", JSON.stringify(
//   UnitsTranslator.warToJson(readFileSync(".\\maps\\emeraldgardens.w3x\\war3mapUnits.doo")).json,
//   null, 2))

// writeFileSync("dist/abilities.json", JSON.stringify(
//   ObjectsTranslator.warToJson(ObjectsTranslator.ObjectType.Abilities, readFileSync(".\\maps\\emeraldgardens.w3x\\war3mapSkin.w3a")).json,
//   null, 2))

// writeFileSync("dist/unitData.json", JSON.stringify(
//   ObjectsTranslator.warToJson(ObjectsTranslator.ObjectType.Units, readFileSync(".\\maps\\emeraldgardens.w3x\\war3map.w3u")).json,
//   null, 2))