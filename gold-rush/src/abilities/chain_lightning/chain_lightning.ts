import { ABILITY_ID_LOCUST, BUFF_ID_GENERIC, UNIT_ID_DUMMY } from 'lib/constants';
import { getUnitLocation } from 'lib/location';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import { enumUnitGroupWithDelay, tieUnitToUnit } from 'lib/unit';
import {
  Group, Unit,
} from 'w3ts';

export class ChainLightning {
  static dummies: group;

  static register(abilityId: number) {
    ChainLightning.dummies = CreateGroup();
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId
        && !IsUnitInGroup(GetSpellAbilityUnit(), ChainLightning.dummies));
      t.addAction(() => {
        new ChainLightning(
          abilityId,
          Unit.fromHandle(GetSpellAbilityUnit()),
          Unit.fromHandle(GetSpellTargetUnit()),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), abilityId),
        );
      });
    });

    setIntervalIndefinite(1, () => {
      Group.fromHandle(ChainLightning.dummies).for(() => {
        if (!Unit.fromEnum().isAlive()) {
          GroupRemoveUnit(ChainLightning.dummies, GetEnumUnit());
        }
      });
    });
  }

  constructor(
    abilityId:number,
    caster: Unit,
    target: Unit,
    abilityLevel: number,
  ) {
    const targetLoc = getUnitLocation(target);
    const order = OrderId2String(GetUnitCurrentOrder(caster.handle));

    const nearby = GetUnitsInRangeOfLocMatching(500, targetLoc, Condition(() => {
      const matchingUnit = Unit.fromFilter();
      return matchingUnit.isAlive()
            && matchingUnit.isEnemy(caster.owner)
            && matchingUnit.handle !== target.handle
            && !matchingUnit.getField(UNIT_BF_IS_A_BUILDING);
    }));

    const durationPerStep = Math.min(0.1, 1.0 / BlzGroupGetSize(nearby));
    enumUnitGroupWithDelay(nearby, (enumUnit) => {
      const dummy = new Unit(caster.owner, UNIT_ID_DUMMY, caster.x, caster.y, 0);
      dummy.applyTimedLife(BUFF_ID_GENERIC, 5);
      GroupAddUnit(ChainLightning.dummies, dummy.handle);
      dummy.addAbility(abilityId);
      dummy.setAbilityLevel(abilityId, abilityLevel);
      dummy.addAbility(ABILITY_ID_LOCUST);
      tieUnitToUnit(dummy.handle, caster.handle);
      IssueTargetOrder(dummy.handle, order, enumUnit);
    }, durationPerStep);

    RemoveLocation(targetLoc);
    DestroyGroup(nearby);
  }

  public static blackListCaster(caster: Unit) {
    GroupAddUnit(ChainLightning.dummies, caster.handle);
  }
}
