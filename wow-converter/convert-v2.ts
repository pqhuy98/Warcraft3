import { generate } from './src/wowexport-v2';

async function main() {
  (await generate('**/adt_*.obj', 'wow')).write('maps/test.w3x');
}

void main();
