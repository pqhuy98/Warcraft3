import BladeDance from 'abilities/blade_dance/blade_dance';
import { ThunderBlink } from 'abilities/thunder_blink/thunder_blink';
import { LightForceAi } from 'ai/light_force_ai';
import { ABILITY_ID_THUNDER_BLINK } from 'lib/constants';
import { findBestCircleCoverMostUnits } from 'lib/maths/circle_cover_most_points';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import {
  Group,
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

export class ZeusAi extends LightForceAi {
  static register(player: player, unitTypeId: number) {
    const heroes = GetUnitsOfPlayerAndTypeId(player, unitTypeId);
    Group.fromHandle(heroes).for(() => {
      new ZeusAi(Unit.fromHandle(GetEnumUnit()));
    });
    DestroyGroup(heroes);
  }

  constructor(hero: Unit) {
    super(hero);
    // Pause AI during casting BladeDance
    buildTrigger((t) => {
      t.registerUnitEvent(hero, EVENT_UNIT_SPELL_EFFECT);
      t.addCondition(() => BladeDance.Data.ABILITY_IDS.includes(GetSpellAbilityId()));
      t.addAction(() => {
        this.setPause(true);
        const timer = setIntervalIndefinite(0.5, () => {
          if (!BladeDance.isUnitCasting(this.hero) && this.isPaused()) {
            this.setPause(false);
            timer.pause();
            timer.destroy();
          }
        });
      });
    });
  }

  thinkSlowExtra() {
    this.tryThunderBlink();
  }

  tryThunderBlink() {
    const { observer } = this;

    const abilityId = ABILITY_ID_THUNDER_BLINK;
    const level = this.hero.getAbilityLevel(abilityId) - 1;
    if (level < 0) {
      return;
    }

    if (!observer.getCanCastSpellNow(abilityId)) {
      return;
    }

    const maxRange = BlzGetAbilityRealLevelField(this.hero.getAbility(abilityId), ABILITY_RLF_MAXIMUM_RANGE, level);

    const currentState = observer.getState();

    if (currentState === 'retreat') {
      if (observer.getDistanceToHome() > maxRange) {
        const homeLoc = observer.getHome();
        this.hero.issueOrderAt(OrderId.Blink, homeLoc.x, homeLoc.y);
      }
      return;
    }

    if (currentState === 'attack') {
      if (observer.getCurrentOrder() === OrderId.Move) {
        if (observer.getDistanceToDestination() > maxRange) {
          const destinationLoc = observer.getDestination();
          this.hero.issueOrderAt(OrderId.Blink, destinationLoc.x, destinationLoc.y);
        }
      } else {
        const nearbyEnemies = observer.getUnitsInRangeMatching(maxRange, (u) => ThunderBlink.Data.targetMatching(this.hero, u));
        if (nearbyEnemies.length > 0) {
          const targetLoc = findBestCircleCoverMostUnits(nearbyEnemies, ThunderBlink.Data.EFFECT_RADIUS);
          this.hero.issueOrderAt(OrderId.Blink, targetLoc.x, targetLoc.y);
        }
      }
    }
  }
}
