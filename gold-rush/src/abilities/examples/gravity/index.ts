import { getUnitLocation, locX, locY } from 'lib/location';
import { buildTrigger, setInterval, setTimeout } from 'lib/trigger';
import { angleBetweenUnits, unitPolarProjection } from 'lib/unit';
import {
  Group, Timer, Unit,
} from 'w3ts';

type UnitData = {
  castTimes: number
  timer: Timer
}
const mp = new Map<number, UnitData>();

export class Gravity {
  static register(abilityId?: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      t.addAction(() => {
        new Gravity(
          GetSpellAbilityId(),
          Unit.fromHandle(GetSpellAbilityUnit()),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()),
        );
      });
    });
  }

  constructor(
    private abilityId:number,
    private caster: Unit,
    private abilityLevel: number,
  ) {
    const TICK_PER_SEC = 30;

    let ud: UnitData;
    if (mp.has(caster.id)) {
      ud = mp.get(caster.id);
      ud.castTimes++;
    } else {
      ud = {
        castTimes: 1,
        timer: null,
      } as UnitData;
    }
    mp.set(caster.id, ud);

    if (ud.timer === null) {
      ud.timer = setInterval(1.0 / TICK_PER_SEC, () => {
        const casterLoc = getUnitLocation(caster);

        const nearby = GetUnitsInRangeOfLocMatching(abilityLevel * 500, casterLoc, Condition(() => {
          const matchingUnit = Unit.fromFilter();
          return matchingUnit.handle !== caster.handle
            && matchingUnit.isAlive()
            && !matchingUnit.getField(UNIT_BF_IS_A_BUILDING);
        }));

        Group.fromHandle(nearby).for(() => {
          const u = Unit.fromEnum();
          const newLoc = unitPolarProjection(
            u,
            ud.castTimes * u.moveSpeed / 4 / TICK_PER_SEC,
            angleBetweenUnits(u, caster),
          );
          u.x = locX(newLoc);
          u.y = locY(newLoc);
          RemoveLocation(newLoc);
          u.getAbility(1);
        });
        RemoveLocation(casterLoc);
        DestroyGroup(nearby);
      });
    }

    setTimeout(5, () => {
      ud.castTimes--;
      if (ud.castTimes === 0) {
        mp.delete(caster.id);
        ud.timer.pause();
        ud.timer.destroy();
      }
    });
  }
}
