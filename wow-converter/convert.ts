import { generate } from './src/wowexport';

async function main() {
  (await generate('**/adt_*.obj', 'wow')).write('maps/test.w3x');
}

void main();
