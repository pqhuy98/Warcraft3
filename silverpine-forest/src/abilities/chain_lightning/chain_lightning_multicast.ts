import { buildTrigger, setIntervalIndefinite } from 'lib/trigger';
import {
  createDummy, enumUnitsWithDelay, getUnitsInRangeOfLoc,
  isBuilding,
  tieUnitToUnit,
} from 'lib/unit';
import {
  Group, Unit,
} from 'w3ts';

export class ChainLightningMulticast {
  private static dummies: Group;

  static Data = {
    getEffectRadius: (): number => 500,
    targetMatching: (caster: Unit, originalTarget: Unit, matchingUnit: Unit): boolean => matchingUnit.isAlive()
      && matchingUnit.isEnemy(caster.owner)
      && !matchingUnit.invulnerable
      && matchingUnit !== originalTarget
      && !isBuilding(matchingUnit),
  };

  static register(abilityId: number): void {
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
    const order = caster.currentOrder;

    const nearby = getUnitsInRangeOfLoc(
      ChainLightningMulticast.Data.getEffectRadius(),
      target,
      (u) => ChainLightningMulticast.Data.targetMatching(caster, target, u),
    );

    const durationPerStep = Math.min(0.1, 1.0 / nearby.length);
    enumUnitsWithDelay(nearby, (enumUnit) => {
      const dummy = createDummy(caster.owner, caster.x, caster.y, caster, 1);
      ChainLightningMulticast.dummies.addUnit(dummy);
      dummy.addAbility(abilityId);
      dummy.setAbilityLevel(abilityId, abilityLevel);
      dummy.issueTargetOrder(order, enumUnit);
      tieUnitToUnit(dummy, caster);
    }, durationPerStep);
  }

  public static blackListCaster(caster: Unit): void {
    ChainLightningMulticast.dummies.addUnit(caster);
  }
}
