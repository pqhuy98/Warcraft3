import { setTimeout } from 'lib/trigger';
import { Unit } from 'w3ts';

import { IntroCinematic } from './intro-cinematic/intro-cinematic';
import { MainFight } from './main-fight/main-fight';

export class QuestRegistry {
  static register(): void {
    setTimeout(0, () => {
      const lichKing = Unit.fromHandle(gg_unit_H001_0052);
      const tirion = Unit.fromHandle(gg_unit_H004_0000);

      const intro = new IntroCinematic({
        name: 'Intro Cinematic',
        lichKing,
        tirion,
        dependencies: [],
        cheatName: 'ic',
      });

      new MainFight({
        name: 'Main Fight',
        lichKing,
        tirion,
        dependencies: [intro],
        cheatName: 'mf',
      });
    });
  }
}
