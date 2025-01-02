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
    const w3dPath = path.join(mapPath, 'war3map.w3b');

    const doodads = DoodadsTranslator.warToJson(readFileSync(dooPath)).json;
    const doodadData = ObjectsTranslator.warToJson(ObjectType.Destructables, readFileSync(w3dPath)).json;
    console.log(f(doodads));
    console.log(f(doodadData));
  }
}

main();

function f(x: unknown) {
  return JSON.stringify(x, null, 2);
}
