import WrathOfTheLichKing from 'abilities/wrath_of_the_lich_king/wrath_of_the_lich_king';
import { DarkForceAi } from 'ai/dark_force_ai';
import { ABILITY_ID_WRATH_OF_THE_LICH_KING } from 'lib/constants';
import {
  Group,
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

export class LichKingAi extends DarkForceAi {
  static register(player: player, unitTypeId: number) {
    const heroes = GetUnitsOfPlayerAndTypeId(player, unitTypeId);
    Group.fromHandle(heroes).for(() => {
      new LichKingAi(Unit.fromHandle(GetEnumUnit()));
    });
    DestroyGroup(heroes);
  }

  thinkSlowExtra(): void {
    this.tryWrathOfTheLichKing();
  }

  tryWrathOfTheLichKing() {
    const { observer } = this;

    const abilityId = ABILITY_ID_WRATH_OF_THE_LICH_KING;
    if (!observer.getCanCastSpellNow(abilityId)) {
      return;
    }

    const maxRange = WrathOfTheLichKing.Data.EFFECT_RANGE * 0.75;

    const nearbyEnemies = observer.getUnitsInRangeMatching(maxRange, (u) => WrathOfTheLichKing.Data.targetMatching(this.hero, u));
    const nearbyEnemyHeroes = observer.getUnitsInRangeMatching(maxRange, (u) => u.isHero()
      && WrathOfTheLichKing.Data.targetMatching(this.hero, u)
      && !u.isIllusion());
    if (nearbyEnemies.length >= 8 || nearbyEnemyHeroes.length >= 3) {
      this.hero.issueImmediateOrder(OrderId.Stomp);
    }
  }
}
