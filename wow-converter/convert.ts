import { generate } from './src/converter';

async function main() {
  (await generate('**/adt_*.obj', 'wow1')).write('maps/test.w3x');
}

void main();
