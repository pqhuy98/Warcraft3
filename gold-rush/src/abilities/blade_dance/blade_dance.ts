import {
  AngleBetweenLocs, getUnitXY, Loc, PolarProjection,
} from 'lib/location';
import { ABILITY_BladeMasterBladestorm } from 'lib/resources/war3-abilities';
import { buildTrigger, setTimeout } from 'lib/trigger';
import {
  angleBetweenUnits, getAttackRange, GetUnitsInRangeOfXYMatching, isWard, setAttackRange,
} from 'lib/unit';
import { pickRandom } from 'lib/utils';
import {
  Group, Timer, Trigger, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals/order';

export default class BladeDance {
  static Data = {
    ABILITY_IDS: <number[]>[],
    ATTACK_SPEED_SCALING: 8,
    ATTACKS_PER_LEVEL: 15,
    ATTACK_MELEE_DISTANCE: 150,
    EXTRA_ATTACK_RANGE: 99999,
    IS_INVULNERABLE_DURING_CAST: false,
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

  private timerAttack: Timer;

  private timerIdle1: Timer;

  private timerIdle2: Timer;

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
    if (BladeDance.Data.IS_INVULNERABLE_DURING_CAST) {
      this.caster.invulnerable = true;
    }
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
      t.addAction(() => this.handleTargetUnattackable());
    });

    this.setTarget(target);

    // continuously monitor
    this.timerIdle1 = Timer.create();
    this.timerIdle2 = Timer.create();
    // these timer will be extended each attack, so if no attack happens then they will run.
    this.timerIdle1.start(0.75, false, () => this.handleTargetUnattackable());
    this.timerIdle2.start(1.5, false, () => this.endSpell());

    this.timerAttack = Timer.create();
    this.timerAttack.start(0.1, true, () => {
      if (this.target.invulnerable || !this.caster.isAlive()) {
        this.handleTargetUnattackable();
      }
      this.caster.setFacingEx(angleBetweenUnits(this.caster, this.target));
      this.caster.issueTargetOrder(OrderId.Attack, this.target);
    });

    BladeDance.unitsInCast.addUnit(this.caster);
    this.caster.disableAbility(FourCC(ABILITY_BladeMasterBladestorm.code), true, false);
  }

  setTarget(newTarget: Unit) {
    this.target = newTarget;
    this.onAttack.registerUnitEvent(this.target, EVENT_UNIT_DAMAGED);
    this.onTargetDeath.registerUnitEvent(this.target, EVENT_UNIT_DEATH);
  }

  onEachAttack() {
    this.timerIdle1.pause();
    this.timerIdle1.destroy();
    this.timerIdle2.pause();
    this.timerIdle2.destroy();
    this.timerIdle1 = Timer.create();
    this.timerIdle2 = Timer.create();
    // these timer will be extended each attack, so if no attack happens then they will run.
    this.timerIdle1.start(0.75, false, () => this.handleTargetUnattackable());
    this.timerIdle2.start(1.5, false, () => this.endSpell());

    const effect = AddSpellEffectTargetById(this.abilityId, EFFECT_TYPE_TARGET, this.target.handle, 'chest');
    BlzSetSpecialEffectScale(effect, 1);
    DestroyEffect(effect);

    this.attackCount++;
    if (this.attackCount >= this.maxAtackCount) {
      this.endSpell();
    } else {
      // teleport if too far away
      const casterLoc = getUnitXY(this.caster);
      const targetLoc = getUnitXY(this.target);

      let newLoc: Loc;
      if (this.isCasterMeleeUnit) {
        const angle = AngleBetweenLocs(casterLoc, targetLoc) + GetRandomReal(-30, 30);
        newLoc = PolarProjection(targetLoc, BladeDance.Data.ATTACK_MELEE_DISTANCE, angle);
      } else {
        newLoc = PolarProjection(casterLoc, GetRandomReal(0, 50), GetRandomDirectionDeg());
      }
      SetUnitX(this.caster.handle, newLoc.x);
      SetUnitY(this.caster.handle, newLoc.y);
      this.caster.setFacingEx(AngleBetweenLocs(newLoc, targetLoc));
    }
  }

  endSpell() {
    this.onAttack.destroy();
    this.onTargetDeath.destroy();
    this.timerAttack.destroy();
    this.timerIdle1.pause();
    this.timerIdle1.destroy();
    this.timerIdle2.pause();
    this.timerIdle2.destroy();

    // restore to normal attack speed
    for (let weaponIndex = 0; weaponIndex < 2; weaponIndex++) {
      this.caster.setAttackCooldown(this.caster.getAttackCooldown(weaponIndex) * BladeDance.Data.ATTACK_SPEED_SCALING, weaponIndex);
      const currentAttackRange = getAttackRange(this.caster, weaponIndex);
      setAttackRange(this.caster, weaponIndex, currentAttackRange - BladeDance.Data.EXTRA_ATTACK_RANGE);
    }
    this.caster.setPathing(true);
    if (BladeDance.Data.IS_INVULNERABLE_DURING_CAST) {
      this.caster.invulnerable = false;
    }
    BladeDance.unitsInCast.removeUnit(this.caster);
    this.caster.disableAbility(FourCC(ABILITY_BladeMasterBladestorm.code), false, false);
    setTimeout(1, () => DestroyEffect(this.weaponEffect));
  }

  handleTargetUnattackable() {
    const targetLoc = getUnitXY(this.target);

    const nextTarget = this.findNextTarget(targetLoc);
    if (nextTarget !== null) {
      this.setTarget(nextTarget);
    } else {
      this.endSpell();
    }
  }

  findNextTarget(loc: Loc): Unit {
    const candidates = GetUnitsInRangeOfXYMatching(500, loc, () => {
      const matchingUnit = Group.getFilterUnit();
      return (
        matchingUnit.isAlive()
        && !matchingUnit.invulnerable
        && matchingUnit.isEnemy(this.caster.owner)
        && matchingUnit.handle !== this.target.handle
        && !matchingUnit.isUnitType(UNIT_TYPE_STRUCTURE)
        && !matchingUnit.isUnitType(UNIT_TYPE_ETHEREAL)
        && !isWard(matchingUnit)
      );
    });

    return pickRandom(candidates);
  }
}
