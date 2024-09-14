import {
  AngleBetweenLocs, getUnitXY, Loc, PolarProjection,
} from 'lib/location';
import { ABILITY_BladeMasterBladestorm, ABILITY_BladeMasterMirrorImage } from 'lib/resources/war3-abilities';
import { buildTrigger, setTimeout } from 'lib/trigger';
import {
  getAttackRange, getUnitsInRangeOfLoc, isWard, setAttackRange,
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
    ATTACKS_PER_LEVEL: 10,
    getMeleeAttackDistance: (): number => 150,
    getExtraAttackRange: (): number => 2000,
    getFindNextRadius: (): number => 700,
    getFindIllusionRadius: (): number => 700,
    IS_INVULNERABLE_DURING_CAST: false,
  };

  static unitsInCast = Group.create();

  static register(registeredAbilityId: number): void {
    BladeDance.Data.ABILITY_IDS.push(registeredAbilityId);
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === registeredAbilityId);
      t.addAction(() => {
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const target = Unit.fromHandle(GetSpellTargetUnit());
        const abilityId = GetSpellAbilityId();
        const abilityLevel = caster.getAbilityLevel(abilityId);

        const nearbyCasterIllusions = getUnitsInRangeOfLoc(
          this.Data.getFindIllusionRadius(),
          getUnitXY(caster),
          (u) => u.typeId === caster.typeId
            && u.owner === caster.owner
            && u.isIllusion(),
        );

        const attackers: Unit[] = [
          caster,
          ...nearbyCasterIllusions,
        ];

        for (const attacker of attackers) {
          new BladeDance(
            abilityId,
            attacker,
            target,
            abilityLevel,
          );
        }
      });
    });
  }

  static isUnitCasting(unit: Unit): boolean {
    return unit.inGroup(this.unitsInCast);
  }

  private target: Unit;

  private maxAtackCount: number;

  private attackCount = 0;

  private onAttackTrigger: Trigger;

  private onTargetDeathTrigger: Trigger;

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
      setAttackRange(this.caster, weaponIndex, currentAttackRange + BladeDance.Data.getExtraAttackRange());
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
    this.onAttackTrigger = buildTrigger((t) => {
      t.addCondition(() => GetEventDamageSource() === caster.handle && BlzGetEventDamageType() === DAMAGE_TYPE_NORMAL);
      t.addAction(() => this.onEachAttack());
    });

    // watch for when target is dead
    this.onTargetDeathTrigger = buildTrigger((t) => {
      t.addAction(() => this.handleTargetUnattackable());
    });

    this.setTarget(target);

    // continuously monitor
    this.timerIdle1 = Timer.create();
    this.timerIdle2 = Timer.create();
    // these timer will be extended each attack, so if no attack happens then they will run.
    this.timerIdle1.start(0.75, false, () => this.handleTargetUnattackable());
    this.timerIdle2.start(3, false, () => this.endSpell());

    this.timerAttack = Timer.create();
    this.timerAttack.start(0.1, true, () => {
      if (this.target.invulnerable || !this.caster.isAlive()) {
        this.handleTargetUnattackable();
      }
      this.caster.setFacingEx(AngleBetweenLocs(this.caster, this.target));
      this.caster.issueTargetOrder(OrderId.Attack, this.target);
    });

    BladeDance.unitsInCast.addUnit(this.caster);
    this.caster.disableAbility(ABILITY_BladeMasterBladestorm.id, true, false);
    this.caster.disableAbility(ABILITY_BladeMasterMirrorImage.id, true, false);
  }

  setTarget(newTarget: Unit): void {
    this.target = newTarget;
    this.onAttackTrigger.registerUnitEvent(this.target, EVENT_UNIT_DAMAGED);
    this.onTargetDeathTrigger.registerUnitEvent(this.target, EVENT_UNIT_DEATH);
  }

  onEachAttack(): void {
    this.timerIdle1.pause();
    this.timerIdle1.destroy();
    this.timerIdle2.pause();
    this.timerIdle2.destroy();
    this.timerIdle1 = Timer.create();
    this.timerIdle2 = Timer.create();
    // these timer will be extended each attack, so if no attack happens then they will run.
    this.timerIdle1.start(0.75, false, () => this.handleTargetUnattackable());
    this.timerIdle2.start(3, false, () => this.endSpell());

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
        newLoc = PolarProjection(targetLoc, BladeDance.Data.getMeleeAttackDistance(), angle);
      } else {
        newLoc = PolarProjection(casterLoc, GetRandomReal(0, 50), GetRandomDirectionDeg());
      }
      SetUnitX(this.caster.handle, newLoc.x);
      SetUnitY(this.caster.handle, newLoc.y);
      this.caster.setFacingEx(AngleBetweenLocs(newLoc, targetLoc));
    }
  }

  endSpell(): void {
    this.onAttackTrigger.destroy();
    this.onTargetDeathTrigger.destroy();
    this.timerAttack.destroy();
    this.timerIdle1.pause();
    this.timerIdle1.destroy();
    this.timerIdle2.pause();
    this.timerIdle2.destroy();

    // restore to normal attack speed
    for (let weaponIndex = 0; weaponIndex < 2; weaponIndex++) {
      this.caster.setAttackCooldown(this.caster.getAttackCooldown(weaponIndex) * BladeDance.Data.ATTACK_SPEED_SCALING, weaponIndex);
      const currentAttackRange = getAttackRange(this.caster, weaponIndex);
      setAttackRange(this.caster, weaponIndex, currentAttackRange - BladeDance.Data.getExtraAttackRange());
    }
    this.caster.setPathing(true);
    if (BladeDance.Data.IS_INVULNERABLE_DURING_CAST) {
      this.caster.invulnerable = false;
    }
    BladeDance.unitsInCast.removeUnit(this.caster);
    this.caster.disableAbility(ABILITY_BladeMasterBladestorm.id, false, false);
    this.caster.disableAbility(ABILITY_BladeMasterMirrorImage.id, false, false);
    setTimeout(1, () => DestroyEffect(this.weaponEffect));
  }

  handleTargetUnattackable(): void {
    const targetLoc = getUnitXY(this.target);

    const nextTarget = this.findNextTarget(targetLoc);
    if (nextTarget !== null) {
      this.setTarget(nextTarget);
    } else {
      this.endSpell();
    }
  }

  findNextTarget(loc: Loc): Unit {
    const candidates = getUnitsInRangeOfLoc(BladeDance.Data.getFindNextRadius(), loc, () => {
      const matchingUnit = Group.getFilterUnit();
      return (
        matchingUnit.isAlive()
        && !matchingUnit.invulnerable
        && matchingUnit.isEnemy(this.caster.owner)
        && matchingUnit !== this.target
        && !matchingUnit.isUnitType(UNIT_TYPE_STRUCTURE)
        && !matchingUnit.isUnitType(UNIT_TYPE_ETHEREAL)
        && !isWard(matchingUnit)
      );
    });

    return pickRandom(candidates);
  }
}
