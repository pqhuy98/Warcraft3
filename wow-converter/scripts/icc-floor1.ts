import _ from 'lodash';

import { assetPrefix } from '../config';
import { generate } from '../src/wowexport';

async function main() {
  const { war3Exporter, write } = await generate('**/adt_*.obj', assetPrefix);

  const allZ = war3Exporter.doodads[0].map((d) => d.position[2]);
  const minZ = _.min(allZ);
  const maxZ = _.max(allZ);
  const zThreshold = minZ + (maxZ - minZ) * 0.5;

  const commonDoodads = war3Exporter.doodads[0].filter(d => 
    [""] d.type)
  )

  const floor1Doodads = war3Exporter.doodads[0].filter(d => 
    d.position[2] < zThreshold
  )

  war3Exporter.doodads[0] = originalDoodads.filter((d) => d.model !== 'icc_floor1');
}

void main();
