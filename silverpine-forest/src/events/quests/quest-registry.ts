import { setTimeout } from 'lib/trigger';

import { GatherSheeps } from './gather_sheeps/GatherSheeps';
import { LumberMill } from './lumber_mill/LumberMill';

export class QuestRegistry {
  static register() {
    setTimeout(0, () => {
      GatherSheeps.register();
      LumberMill.register();
    });
  }
}
