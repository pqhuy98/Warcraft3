import { Unit, Timer, Group } from 'w3ts';
import { buildTrigger } from 'utils/trigger';
import { getUnitLocation, locY, locX } from 'utils/location';
import { angleBetweenUnits, unitPolarProjection } from 'utils/unit';

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
    const t1 = new Timer();
    const TICK_PER_SEC = 30;
    t1.start(1.0 / TICK_PER_SEC, true, () => {
      const casterLoc = getUnitLocation(caster);
      const nearby = GetUnitsInRangeOfLocMatching(abilityLevel * 500, casterLoc, Condition(() => {
        const matchingUnit = Unit.fromFilter();
        return matchingUnit.handle !== caster.handle
            && matchingUnit.isAlive()
            && !matchingUnit.getField(UNIT_BF_IS_A_BUILDING);
      }));

      Group.fromHandle(nearby).for(() => {
        const u = Unit.fromEnum();
        const newLoc = unitPolarProjection(u, u.moveSpeed / 4 / TICK_PER_SEC, angleBetweenUnits(u, caster));
        u.x = locX(newLoc);
        u.y = locY(newLoc);
        RemoveLocation(newLoc);
        u.getAbility(1);
      });
      RemoveLocation(casterLoc);
      DestroyGroup(nearby);
    });

    const t2 = new Timer();
    t2.start(5, false, () => {
      t1.destroy();
      t2.destroy();
    });
  }
}
