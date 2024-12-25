import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

import {
  DoodadsTranslator,
} from './src/wc3maptranslator';

const mapPaths = [
  './maps/test-64x64.w3x',
];
function main() {
  for (const mapPath of mapPaths) {
    const dooPath1 = path.join(mapPath, 'war3map.doo');
    const dooPath2 = path.join(mapPath, 'war3map save unchanged.doo');

    const doodads = DoodadsTranslator.warToJson(readFileSync(dooPath1)).json;

    console.log('Save unchanged', f(doodads));
    writeFileSync(dooPath2, DoodadsTranslator.jsonToWar(doodads).buffer);

    doodads[0][0].position[2] += 500;
    console.log('Save changed', f(doodads));
    writeFileSync(dooPath1, DoodadsTranslator.jsonToWar(doodads).buffer);
  }
}

main();

function f(x: unknown) {
  return JSON.stringify(x, null, 2);
}
