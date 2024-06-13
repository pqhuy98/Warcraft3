import { getUnitLocation } from 'lib/location';
import { buildTrigger } from 'lib/trigger';
import { angleBetweenUnits, getAttackRange, setAttackRange } from 'lib/unit';
import {
  Group, Timer, Trigger, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals/order';

export default class BladeDance {
  static Data = {
    ABILITY_IDS: <number[]>[],
    ATTACK_SPEED_SCALING: 8,
    ATTACKS_PER_LEVEL: 20,
    ATTACK_MELEE_DISTANCE: 100,
    EXTRA_ATTACK_RANGE: 99999,
  };

  static unitsInCast = Group.create();

  static register(abilityId: number) {
    BladeDance.Data.ABILITY_IDS.push(abilityId);
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        new BladeDance(
          GetSpellAbilityId(),
          Unit.fromHandle(GetSpellAbilityUnit()),
          Unit.fromHandle(GetSpellTargetUnit()),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()),
        );
      });
    });
  }

  static isUnitCasting(unit: Unit): boolean {
    return unit.inGroup(this.unitsInCast);
  }

  private target: Unit;

  private maxAtackCount: number;

  private attackCount = 0;

  private onAttack: Trigger;

  private onTargetDeath: Trigger;

  private timer: Timer;

  private timerIdle: Timer;

  private isCasterMeleeUnit: boolean;

  private weaponEffect: effect;

  /**
   * Executed when the spell is casted.
   * @param caster
   * @param target
   * @param abilityLevel
   */
  constructor(
    private abilityId: number,
    private caster: Unit,
    target: Unit,
    private abilityLevel: number,
  ) {
    if (caster.isAlly(target.owner) || !target.isAlive()) {
      return;
    }

    this.maxAtackCount = (this.abilityLevel + 1) * BladeDance.Data.ATTACKS_PER_LEVEL;
    this.attackCount = 0;

    // increase attack speed and range
    for (let weaponIndex = 0; weaponIndex < 2; weaponIndex++) {
      this.caster.setAttackCooldown(this.caster.getAttackCooldown(weaponIndex) / BladeDance.Data.ATTACK_SPEED_SCALING, weaponIndex);
      const currentAttackRange = getAttackRange(this.caster, weaponIndex);
      setAttackRange(this.caster, weaponIndex, currentAttackRange + BladeDance.Data.EXTRA_ATTACK_RANGE);
    }
    this.isCasterMeleeUnit = this.caster.isUnitType(UNIT_TYPE_MELEE_ATTACKER);

    this.caster.issueTargetOrder(OrderId.Attack, target);
    this.caster.setPathing(false);
    this.caster.invulnerable = true;
    this.caster.removeBuffs(false, true);

    this.weaponEffect = AddSpellEffectTargetById(this.abilityId, EFFECT_TYPE_CASTER, this.caster.handle, 'weapon');
    BlzSetSpecialEffectScale(this.weaponEffect, 1);

    // watch for each attack
    this.onAttack = buildTrigger((t) => {
      t.addCondition(() => GetEventDamageSource() === caster.handle && BlzGetEventDamageType() === DAMAGE_TYPE_NORMAL);
      t.addAction(() => this.onEachAttack());
    });

    // watch for when target is dead
    this.onTargetDeath = buildTrigger((t) => {
      t.addAction(() => this.handleTargetDeath(GetDyingUnit()));
    });

    this.setTarget(target);

    // continuously monitor
    this.timerIdle = new Timer();
    this.timerIdle.start(1, false, () => this.endSpell());

    this.timer = new Timer();
    this.timer.start(0.1, true, () => {
      this.caster.setFacingEx(angleBetweenUnits(this.caster, this.target));
      this.caster.issueTargetOrder(OrderId.Attack, this.target);
      if (this.target.invulnerable || !this.caster.isAlive()) {
        this.endSpell();
      }
    });

    BladeDance.unitsInCast.addUnit(this.caster);
  }

  setTarget(newTarget: Unit) {
    this.target = newTarget;
    this.onAttack.registerUnitEvent(this.target, EVENT_UNIT_DAMAGED);
    this.onTargetDeath.registerUnitEvent(this.target, EVENT_UNIT_DEATH);
  }

  onEachAttack() {
    this.timerIdle.destroy();
    this.timerIdle = new Timer();
    this.timerIdle.start(2, false, () => this.endSpell());

    const effect = AddSpellEffectTargetById(this.abilityId, EFFECT_TYPE_TARGET, this.target.handle, 'chest');
    BlzSetSpecialEffectScale(effect, 1);
    DestroyEffect(effect);

    this.attackCount++;
    if (this.attackCount >= this.maxAtackCount) {
      this.endSpell();
    } else {
      // teleport if too far away
      const casterLoc = getUnitLocation(this.caster);
      const targetLoc = getUnitLocation(this.target);

      let newLoc: location;
      if (this.isCasterMeleeUnit) {
        const angle = AngleBetweenPoints(casterLoc, targetLoc) + GetRandomReal(-30, 30);
        newLoc = PolarProjectionBJ(targetLoc, BladeDance.Data.ATTACK_MELEE_DISTANCE, angle);
      } else {
        newLoc = PolarProjectionBJ(casterLoc, GetRandomReal(0, 50), GetRandomDirectionDeg());
      }
      SetUnitX(this.caster.handle, GetLocationX(newLoc));
      SetUnitY(this.caster.handle, GetLocationY(newLoc));
      this.caster.setFacingEx(AngleBetweenPoints(newLoc, targetLoc));
      RemoveLocation(casterLoc);
      RemoveLocation(targetLoc);
      RemoveLocation(newLoc);
    }
  }

  endSpell() {
    this.onAttack.destroy();
    this.onTargetDeath.destroy();
    this.timer.destroy();
    this.timerIdle.destroy();

    // restore to normal attack speed
    for (let weaponIndex = 0; weaponIndex < 2; weaponIndex++) {
      this.caster.setAttackCooldown(this.caster.getAttackCooldown(weaponIndex) * BladeDance.Data.ATTACK_SPEED_SCALING, weaponIndex);
      const currentAttackRange = getAttackRange(this.caster, weaponIndex);
      setAttackRange(this.caster, weaponIndex, currentAttackRange - BladeDance.Data.EXTRA_ATTACK_RANGE);
    }
    this.caster.setPathing(true);
    this.caster.invulnerable = false;
    BladeDance.unitsInCast.removeUnit(this.caster);
    DestroyEffect(this.weaponEffect);
  }

  handleTargetDeath(dyingUnit: unit) {
    const dyingLoc = getUnitLocation(Unit.fromHandle(dyingUnit));

    const nextTarget = this.findNextTarget(dyingLoc);
    if (nextTarget !== null) {
      this.setTarget(Unit.fromHandle(nextTarget));
    } else {
      this.endSpell();
    }

    RemoveLocation(dyingLoc);
  }

  findNextTarget(loc: location): unit {
    const candidates = GetUnitsInRangeOfLocMatching(500, loc, Condition(() => {
      const matchingUnit = Group.getFilterUnit();
      return (
        matchingUnit.isAlive()
        && !matchingUnit.invulnerable
        && matchingUnit.isEnemy(this.caster.owner)
        && matchingUnit.handle !== this.target.handle
        && !matchingUnit.isUnitType(UNIT_TYPE_STRUCTURE)
        && !matchingUnit.isUnitType(UNIT_TYPE_ETHEREAL)
        && (ConvertTargetFlag(matchingUnit.getField(UNIT_IF_TARGETED_AS) as number)) !== TARGET_FLAG_WARD
      );
    }));

    const result = GroupPickRandomUnit(candidates);

    DestroyGroup(candidates);
    return result;
  }
}
