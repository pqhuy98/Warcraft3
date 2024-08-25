import { k0, k1 } from 'lib/debug/key_counter';
import {
  AngleBetweenLocs, DistanceBetweenLocs, PolarProjection,
} from 'lib/location';
import { MODEL_ZigguratMissile } from 'lib/resources/war3-models';
import { checkUnitFlag, Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import {
  buildTrigger, setIntervalIndefinite,
  setTimeout,
} from 'lib/trigger';
import {
  createDummy,
  getDummyMaster,
  isBuilding,
  isWard,
  safeRemoveDummy,
  setUnitScale,
} from 'lib/unit';
import {
  Effect,
  Rectangle,
  Timer,
  Unit,
} from 'w3ts';

export default class Frostmourne {
  static Data = {
    ABILITY_IDS: <number[]>[],
    SOUL_MODEL: MODEL_ZigguratMissile,
    LIFE_PERCENT_RESTORED_PER_SOUL: 0.02,
    MANA_PERCENT_RESTORED_PER_SOUL: 0.01,
    getSoulReturnSpeed: () => (700),
    getSoulEffectFinalHeight: () => (150),
    targetMatching: (killer: Unit, victim: Unit) => !victim.isAlive()
      && !victim.isUnitType(UNIT_TYPE_MECHANICAL)
      && !victim.isIllusion()
      && !isBuilding(victim)
      && !isWard(victim)
      && victim.getField(UNIT_BF_RAISABLE) as boolean
      && victim !== killer,
  };

  static soulTarget = new Map<Unit, Unit>();

  static soulEffect = new Map<Unit, Effect>();

  static soulScale = new Map<Unit, number>();

  static timer: Timer;

  static isTimerPaused = false;

  static register(abilityId: number) {
    Frostmourne.Data.ABILITY_IDS.push(abilityId);

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const victim = Unit.fromHandle(GetDyingUnit());
        const killer = getDummyMaster(GetKillingUnit());
        return killer.getAbilityLevel(abilityId) > 0
          && Frostmourne.Data.targetMatching(killer, victim);
      });
      t.addAction(() => {
        const killer = getDummyMaster(GetKillingUnit());
        const victim = Unit.fromHandle(GetDyingUnit());
        this.collectSoul(killer, victim);
      });
    });

    const worldBounds = Rectangle.getWorldBounds();

    const interval = 0.03;
    this.timer = setIntervalIndefinite(interval, () => {
      if (this.soulTarget.size === 0) {
        this.timer.pause();
        this.isTimerPaused = true;
      }

      const distancePerStep = Frostmourne.Data.getSoulReturnSpeed() * interval;

      for (const soul of this.soulTarget.keys()) {
        const target = this.soulTarget.get(soul);
        if (!target || DistanceBetweenLocs(soul, target) < distancePerStep) {
          if (target.isAlive()) {
            const scale = this.soulScale.get(soul) ?? 1;
            target.life += target.maxLife * (0.25 + scale) * Frostmourne.Data.LIFE_PERCENT_RESTORED_PER_SOUL;
            target.mana += target.maxMana * (0.25 + scale) * Frostmourne.Data.MANA_PERCENT_RESTORED_PER_SOUL;
          }

          soul.x = worldBounds.maxX - 1;
          soul.y = worldBounds.maxY - 1;

          const eff = this.soulEffect.get(soul);
          this.soulTarget.delete(soul);
          this.soulEffect.delete(soul);
          this.soulScale.delete(soul);

          eff.destroy();
          safeRemoveDummy(soul);

          k1('fstm');
          k1('fstm2');
        } else {
          const newLoc = PolarProjection(soul, distancePerStep, AngleBetweenLocs(soul, target));
          soul.x = newLoc.x;
          soul.y = newLoc.y;
        }
      }
    });
  }

  static collectSoul(killer: Unit, victim: Unit) {
    if (checkUnitFlag(victim, Flag.FROSTMOURNE_SOUL_HARVESTED)) return;

    k0('fstm');
    setUnitFlag(victim, Flag.FROSTMOURNE_SOUL_HARVESTED, true);
    const scale = Math.min(2, victim.level / 5);
    setTimeout(GetRandomReal(0, scale), () => {
      const soul = createDummy(killer.owner, victim.x, victim.y, killer, 0);
      setUnitScale(soul, (scale * 1.5));
      this.soulScale.set(soul, scale);
      const effect = Effect.createAttachment(Frostmourne.Data.SOUL_MODEL, soul, 'origin');

      this.soulTarget.set(soul, killer);
      this.soulEffect.set(soul, effect);
      const estimatedReturnTime = DistanceBetweenLocs(victim, killer) / Frostmourne.Data.getSoulReturnSpeed();
      const finalHeight = Frostmourne.Data.getSoulEffectFinalHeight();
      const speed = finalHeight / estimatedReturnTime;
      soul.setflyHeight(finalHeight, speed);
      k0('fstm2');
      if (this.isTimerPaused) {
        this.isTimerPaused = false;
        this.timer.resume();
      }
    });
  }
}
