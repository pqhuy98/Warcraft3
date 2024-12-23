import { k0, k1 } from 'lib/debug/key_counter';
import { Angle, Distance, PolarProjection } from 'lib/location';
import { MODEL_ZigguratMissile } from 'lib/resources/war3-models';
import { checkUnitFlag, Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import {
  buildTrigger, getTimeS, setIntervalIndefinite,
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
import { classic } from 'lib/utils';
import {
  Effect,
  Rectangle,
  Timer,
  Unit,
} from 'w3ts';

interface SoulData {
  target: Unit
  effect: Effect
  scale: number
  angle: number
  returnAtS: number
}

export default class Frostmourne {
  static Data = {
    ABILITY_IDS: <number[]>[],
    SOUL_MODEL: classic(MODEL_ZigguratMissile),
    LIFE_PERCENT_RESTORED_PER_SOUL: 0.02,
    MANA_PERCENT_RESTORED_PER_SOUL: 0.02,
    getSoulReturnSpeed: (): number => (700),
    getSoulEffectFinalHeight: (): number => (100),
    targetMatching: (killer: Unit, victim: Unit): boolean => !victim.isAlive()
      && !victim.isUnitType(UNIT_TYPE_MECHANICAL)
      && !victim.isIllusion()
      && !isBuilding(victim)
      && !isWard(victim)
      && victim.getField(UNIT_BF_RAISABLE) as boolean
      && victim !== killer,
  };

  static soulsMap = new Map<Unit, SoulData>();

  static timer: Timer = null;

  static isTimerPaused = false;

  static register(abilityId: number): void {
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

    this.startTimerIfStopped();
  }

  static startTimerIfStopped(): void {
    if (this.timer) return;

    const worldBounds = Rectangle.getWorldBounds();
    const interval = 0.03;
    this.timer = setIntervalIndefinite(interval, () => {
      if (this.soulsMap.size === 0) {
        this.timer.pause();
        this.timer.destroy();
        this.timer = null;
      }

      const distancePerStep = Frostmourne.Data.getSoulReturnSpeed() * interval;
      const now = getTimeS();

      for (const soul of this.soulsMap.keys()) {
        const data = this.soulsMap.get(soul);
        const { target, scale, effect } = data;
        if (!target || (Distance(soul, target) < distancePerStep && data.returnAtS < now)) {
          if (target.isAlive()) {
            target.life += target.maxLife * (0.25 + scale) * Frostmourne.Data.LIFE_PERCENT_RESTORED_PER_SOUL;
            target.mana += target.maxMana * (0.25 + scale) * Frostmourne.Data.MANA_PERCENT_RESTORED_PER_SOUL;
          }

          soul.x = worldBounds.maxX - 1;
          soul.y = worldBounds.maxY - 1;

          this.soulsMap.delete(soul);

          effect.destroy();
          safeRemoveDummy(soul);

          k1('fstm');
          k1('fstm2');
        } else {
          const newLoc = PolarProjection(soul, distancePerStep, data.angle);
          soul.x = newLoc.x;
          soul.y = newLoc.y;
          let expectAngle = Angle(soul, target);
          if (expectAngle - data.angle > 180) {
            expectAngle -= 360;
          }
          if (expectAngle - data.angle < -180) {
            expectAngle += 360;
          }
          if (Math.abs(data.angle - expectAngle) < 10 || data.returnAtS < now) {
            data.angle = expectAngle;
          } else {
            let delta = (expectAngle - data.angle) * 0.1;
            if (Math.abs(delta) < 10) {
              delta = Math.sign(delta) * 10;
            }
            data.angle += delta;
          }
        }
      }
    });
  }

  static collectSoul(killer: Unit, victim: Unit): void {
    if (checkUnitFlag(victim, Flag.FROSTMOURNE_SOUL_HARVESTED)) return;

    k0('fstm');
    setUnitFlag(victim, Flag.FROSTMOURNE_SOUL_HARVESTED, true);
    const scale = victim.level / 5;
    setTimeout(GetRandomReal(0, scale), () => {
      const soul = createDummy(killer.owner, victim.x, victim.y, killer, 0, GetRandomDirectionDeg());
      setUnitScale(soul, Math.max(0.5, Math.min(2, scale)));
      const effect = Effect.createAttachment(Frostmourne.Data.SOUL_MODEL, soul, 'origin');
      this.soulsMap.set(soul, {
        target: killer,
        effect,
        scale,
        angle: soul.facing,
        returnAtS: getTimeS() + GetRandomReal(1, 2),
      });
      const estimatedReturnTime = Distance(victim, killer) / Frostmourne.Data.getSoulReturnSpeed();
      const finalHeight = Frostmourne.Data.getSoulEffectFinalHeight();
      const zSpeed = finalHeight / estimatedReturnTime * Math.max(1, 1 / scale);
      soul.setflyHeight(finalHeight, zSpeed);
      k0('fstm2');
      this.startTimerIfStopped();
    });
  }
}
