import { getHero } from 'utils/heroes';
import { locX, locY } from 'utils/location';
import { buildTrigger } from 'utils/trigger';
import {
  MapPlayer, Unit,
} from 'w3ts';

export class AllHeroes {
  constructor(private player: player) {
    this.learnSkill();
    const startLoc = GetStartLocationLoc(GetPlayerId(player));

    ['hpea', 'opeo', 'uaco', 'ewsp'].forEach((workerId) => {
      new Unit(MapPlayer.fromHandle(player), FourCC(workerId), locX(startLoc), locY(startLoc), 0);
    });
  }

  learnSkill() {
    buildTrigger((t) => {
      t.registerPlayerUnitEvent(MapPlayer.fromHandle(this.player), EVENT_PLAYER_HERO_LEVEL, null);
      t.registerPlayerUnitEvent(MapPlayer.fromHandle(this.player), EVENT_PLAYER_UNIT_TRAIN_FINISH, null);
      t.addCondition(() => GetOwningPlayer(GetLevelingUnit() || GetTrainedUnit()) === this.player);
      t.addAction(() => {
        const hero = Unit.fromHandle(GetLevelingUnit() || GetTrainedUnit());
        const heroData = getHero(hero.typeId);
        while (hero.skillPoints > 0) {
          const abiId = FourCC(heroData.heroAbilities[GetRandomInt(0, heroData.heroAbilities.length - 1)]);
          SelectHeroSkill(hero.handle, abiId);
        }
      });
    });
  }
}
