import { readFileSync } from 'fs';
import path from 'path';

import {
  DoodadsTranslator,
  ObjectsTranslator,
} from './src/wc3maptranslator';
import { ObjectType } from './src/wc3maptranslator/data';

const mapPaths = [
  './maps/test-small.w3x',
];
function main() {
  for (const mapPath of mapPaths) {
    const dooPath = path.join(mapPath, 'war3map.doo');
    const w3dPath = path.join(mapPath, 'war3map.w3d');

    const doodads = DoodadsTranslator.warToJson(readFileSync(dooPath)).json;
    const doodadData = ObjectsTranslator.warToJson(ObjectType.Doodads, readFileSync(w3dPath)).json;
    console.log(f(doodads));
    console.log(f(doodadData));

    // console.log('Save unchanged', f(doodads));
    // writeFileSync(dooPath2, DoodadsTranslator.jsonToWar(doodads).buffer);

    // doodads[0][0].position[2] += 500;
    // console.log('Save changed', f(doodads));
    // writeFileSync(dooPath1, DoodadsTranslator.jsonToWar(doodads).buffer);
  }
}

main();

function f(x: unknown) {
  return JSON.stringify(x, null, 2);
}
