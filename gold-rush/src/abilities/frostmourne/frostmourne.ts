import {
  AngleBetweenLocs, DistanceBetweenLocs, PolarProjection,
} from 'lib/location';
import { MODEL_ZigguratMissile } from 'lib/resources/war3-models';
import {
  buildTrigger, setIntervalIndefinite,
  setTimeout,
} from 'lib/trigger';
import {
  getDamageSourceMaster,
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
  };

  static register(abilityId: number) {
    Frostmourne.Data.ABILITY_IDS.push(abilityId);

    const souls = new Map<effect, unit>();

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const dead = Unit.fromHandle(GetDyingUnit());
        return GetUnitAbilityLevel(getDamageSourceMaster(GetKillingUnit()), abilityId) > 0
          && !dead.isUnitType(UNIT_TYPE_STRUCTURE)
          && !dead.isIllusion()
          && !dead.isUnitType(UNIT_TYPE_MECHANICAL)
          && !dead.isUnitType(UNIT_TYPE_SUMMONED)
          && !isWard(dead)
          && dead.handle !== GetKillingUnit();
      });
      t.addAction(() => {
        const killer = Unit.fromHandle(getDamageSourceMaster(GetKillingUnit()));
        const victim = Unit.fromHandle(GetDyingUnit());
        const scale = Math.min(2, victim.level / 5);
        setTimeout(scale + GetRandomReal(0, 0.3), () => {
          const soul = AddSpecialEffect(Frostmourne.Data.SOUL_MODEL, victim.x, victim.y);
          BlzSetSpecialEffectHeight(soul, 200);
          BlzSetSpecialEffectScale(soul, scale);
          souls.set(soul, killer.handle);
        });
      });
    });

    const interval = 0.03;
    setIntervalIndefinite(interval, () => {
      for (const soul of souls.keys()) {
        const eff = Effect.fromHandle(soul);
        const target = Unit.fromHandle(souls.get(soul));
        if (!target.handle || DistanceBetweenLocs(eff, target) < Frostmourne.Data.SOUL_RETURN_SPEED * interval) {
          souls.delete(soul);
          // eff.x = GetCameraBoundMaxX() - 1;
          // eff.y = GetCameraBoundMaxY() - 1;
          if (target.isAlive()) {
            target.life += target.maxLife * (0.5 + eff.scale) * Frostmourne.Data.LIFE_PERCENT_RESTORED_PER_SOUL;
          }
          eff.destroy();
        } else {
          const newLoc = PolarProjection(eff, Frostmourne.Data.SOUL_RETURN_SPEED * interval, AngleBetweenLocs(eff, target));
          eff.x = newLoc.x;
          eff.y = newLoc.y;
        }
      }
    });
  }
}
