import { k0, k1 } from 'lib/debug/key_counter';
import {
  AngleBetweenLocs, DistanceBetweenLocs, PolarProjection,
} from 'lib/location';
import { MODEL_ZigguratMissile } from 'lib/resources/war3-models';
import {
  buildTrigger, setIntervalIndefinite,
  setTimeout,
} from 'lib/trigger';
import {
  createDummy,
  getDummyMaster,
  isWard,
} from 'lib/unit';
import {
  Effect,
  Unit,
} from 'w3ts';

export default class Frostmourne {
  static Data = {
    ABILITY_IDS: <number[]>[],
    SOUL_RETURN_SPEED: 700,
    SOUL_MODEL: MODEL_ZigguratMissile,
    LIFE_PERCENT_RESTORED_PER_SOUL: 0.01,
    MANA_PERCENT_RESTORED_PER_SOUL: 0.01,
    SOUL_EFFECT_FINAL_HEIGHT: 200,
  };

  static register(abilityId: number) {
    Frostmourne.Data.ABILITY_IDS.push(abilityId);

    const soulTarget = new Map<Unit, Unit>();
    const soulEffect = new Map<Unit, Effect>();
    const soulScale = new Map<Unit, number>();

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const dead = Unit.fromHandle(GetDyingUnit());
        return getDummyMaster(GetKillingUnit()).getAbilityLevel(abilityId) > 0
          && !dead.isUnitType(UNIT_TYPE_STRUCTURE)
          && !dead.isIllusion()
          && !dead.isUnitType(UNIT_TYPE_MECHANICAL)
          && !isWard(dead)
          && dead.handle !== GetKillingUnit();
      });
      t.addAction(() => {
        k0('fstm');
        const killer = getDummyMaster(GetKillingUnit());
        const victim = Unit.fromHandle(GetDyingUnit());
        const scale = Math.min(2, victim.level / 5);
        setTimeout(GetRandomReal(0, scale), () => {
          const soul = createDummy(killer.owner, victim.x, victim.y, killer, 0);
          soul.setScale(scale, scale, scale);
          soulScale.set(soul, scale);
          const effect = Effect.createAttachment(Frostmourne.Data.SOUL_MODEL, soul, 'origin');

          soulTarget.set(soul, killer);
          soulEffect.set(soul, effect);

          const estimatedReturnTime = DistanceBetweenLocs(victim, killer) / Frostmourne.Data.SOUL_RETURN_SPEED;
          const speed = Frostmourne.Data.SOUL_EFFECT_FINAL_HEIGHT / estimatedReturnTime;
          soul.setflyHeight(Frostmourne.Data.SOUL_EFFECT_FINAL_HEIGHT, speed);
          k0('fstm2');
        });
      });
    });

    const interval = 0.03;
    setIntervalIndefinite(interval, () => {
      for (const soul of soulTarget.keys()) {
        const target = soulTarget.get(soul);
        if (!target || DistanceBetweenLocs(soul, target) < Frostmourne.Data.SOUL_RETURN_SPEED * interval) {
          if (target.isAlive()) {
            const scale = soulScale.get(soul) ?? 1;
            target.life += target.maxLife * (0.25 + scale) * Frostmourne.Data.LIFE_PERCENT_RESTORED_PER_SOUL;
            target.mana += target.maxMana * (0.25 + scale) * Frostmourne.Data.MANA_PERCENT_RESTORED_PER_SOUL;
          }

          soulEffect.get(soul).destroy();
          soul.kill();

          soulTarget.delete(soul);
          soulEffect.delete(soul);
          soulScale.delete(soul);

          k1('fstm');
          k1('fstm2');
        } else {
          const newLoc = PolarProjection(soul, Frostmourne.Data.SOUL_RETURN_SPEED * interval, AngleBetweenLocs(soul, target));
          soul.x = newLoc.x;
          soul.y = newLoc.y;
        }
      }
    });
  }
}
