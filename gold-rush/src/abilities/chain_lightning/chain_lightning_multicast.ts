import { getUnitLocation } from 'lib/location';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import {
  createDummy, enumUnitGroupWithDelay, tieUnitToUnit,
} from 'lib/unit';
import {
  Group, Unit,
} from 'w3ts';

export class ChainLightningMulticast {
  private static dummies: group;

  static register(abilityId: number) {
    ChainLightningMulticast.dummies = CreateGroup();
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId
        && !IsUnitInGroup(GetSpellAbilityUnit(), ChainLightningMulticast.dummies));
      t.addAction(() => {
        new ChainLightningMulticast(
          abilityId,
          Unit.fromHandle(GetSpellAbilityUnit()),
          Unit.fromHandle(GetSpellTargetUnit()),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), abilityId),
        );
      });
    });

    setIntervalIndefinite(1, () => {
      Group.fromHandle(ChainLightningMulticast.dummies).for(() => {
        if (!Unit.fromEnum().isAlive()) {
          GroupRemoveUnit(ChainLightningMulticast.dummies, GetEnumUnit());
        }
      });
    });
  }

  constructor(
    abilityId: number,
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
      const dummy = createDummy(caster.owner, caster.x, caster.y, caster);
      GroupAddUnit(ChainLightningMulticast.dummies, dummy.handle);
      dummy.addAbility(abilityId);
      dummy.setAbilityLevel(abilityId, abilityLevel);
      tieUnitToUnit(dummy.handle, caster.handle);
      IssueTargetOrder(dummy.handle, order, enumUnit);
    }, durationPerStep);

    RemoveLocation(targetLoc);
    DestroyGroup(nearby);
  }

  public static blackListCaster(caster: Unit) {
    GroupAddUnit(ChainLightningMulticast.dummies, caster.handle);
  }
}
