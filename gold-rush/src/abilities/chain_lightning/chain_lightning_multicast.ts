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
  private static dummies: Group;

  static Data = {
    targetMatching: (caster: Unit, originalTargeT: Unit, matchingUnit: Unit) => matchingUnit.isAlive()
      && matchingUnit.isEnemy(caster.owner)
      && matchingUnit.handle !== originalTargeT.handle
      && !isBuilding(matchingUnit),
  };

  static register(abilityId: number) {
    ChainLightningMulticast.dummies = Group.create();
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId
        && !ChainLightningMulticast.dummies.hasUnit(Unit.fromHandle(GetSpellAbilityUnit())));
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
      ChainLightningMulticast.dummies.for(() => {
        if (!Unit.fromEnum().isAlive()) {
          ChainLightningMulticast.dummies.removeUnit(Unit.fromEnum());
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
    const order = caster.currentOrder;

    const nearby = GetUnitsInRangeOfXYMatching(
      500,
      targetLoc,
      () => ChainLightningMulticast.Data.targetMatching(caster, target, Unit.fromFilter()),
    );

    const durationPerStep = Math.min(0.1, 1.0 / nearby.length);
    enumUnitsWithDelay(nearby, (enumUnit) => {
      const dummy = createDummy('ChainLightning-multicast', caster.owner, caster.x, caster.y, caster, 1);
      ChainLightningMulticast.dummies.addUnit(dummy);
      dummy.addAbility(abilityId);
      dummy.setAbilityLevel(abilityId, abilityLevel);
      dummy.issueTargetOrder(order, enumUnit);
      tieUnitToUnit(dummy.handle, caster.handle);
    }, durationPerStep);
  }

  public static blackListCaster(caster: Unit) {
    ChainLightningMulticast.dummies.addUnit(caster);
  }
}
