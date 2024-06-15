import { getUnitXY } from 'lib/location';
import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import {
  createDummy, enumUnitsWithDelay, GetUnitsInRangeOfXYMatching,
  isBuilding,
  tieUnitToUnit,
} from 'lib/unit';
import {
  Group, Unit,
} from 'w3ts';

export class ChainLightningMulticast {
  private static dummies: group;

  static Data = {
    targetMatching: (caster: Unit, originalTargeT: Unit, matchingUnit: Unit) => matchingUnit.isAlive()
      && matchingUnit.isEnemy(caster.owner)
      && matchingUnit.handle !== originalTargeT.handle
      && !isBuilding(matchingUnit.handle),
  };

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
    const targetLoc = getUnitXY(target);
    const order = OrderId2String(GetUnitCurrentOrder(caster.handle));

    const nearby = GetUnitsInRangeOfXYMatching(
      500,
      targetLoc,
      () => ChainLightningMulticast.Data.targetMatching(caster, target, Unit.fromFilter()),
    );

    const durationPerStep = Math.min(0.1, 1.0 / nearby.length);
    enumUnitsWithDelay(nearby, (enumUnit) => {
      const dummy = createDummy(caster.owner, caster.x, caster.y, caster, 1);
      GroupAddUnit(ChainLightningMulticast.dummies, dummy.handle);
      dummy.addAbility(abilityId);
      dummy.setAbilityLevel(abilityId, abilityLevel);
      tieUnitToUnit(dummy.handle, caster.handle);
      dummy.issueTargetOrder(order, enumUnit);
    }, durationPerStep);
  }

  public static blackListCaster(caster: Unit) {
    GroupAddUnit(ChainLightningMulticast.dummies, caster.handle);
  }
}
