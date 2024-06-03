import { getUnitLocation } from 'lib/location';
import { buildTrigger } from 'lib/trigger';
import { angleBetweenUnits, getAttackRange, setAttackRange } from 'lib/unit';
import {
  Group, Timer, Trigger, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals/order';

const ATTACK_SCALING = 8;
const ATTACKS_PER_LEVEL = 10;
const ATTACK_DISTANCE = 100;
const EXTRA_ATTACK_RANGE = 99999;

export default class BladeDance {
  static register(abilityId?: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
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

  private target: Unit;

  private maxAtackCount: number;

  private attackCount = 0;

  private onAttack: Trigger;

  private onTargetDeath: Trigger;

  private timer: Timer;

  private timerIdle: Timer;

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

    this.maxAtackCount = (this.abilityLevel + 1) * ATTACKS_PER_LEVEL;
    this.attackCount = 0;

    // increase attack speed and range
    for (let weaponIndex = 0; weaponIndex < 2; weaponIndex++) {
      this.caster.setAttackCooldown(this.caster.getAttackCooldown(weaponIndex) / ATTACK_SCALING, weaponIndex);
      const currentAttackRange = getAttackRange(this.caster, weaponIndex);
      setAttackRange(this.caster, weaponIndex, currentAttackRange + EXTRA_ATTACK_RANGE);
    }

    this.caster.issueTargetOrder(OrderId.Attack, target);
    this.caster.setPathing(false);
    // this.caster.invulnerable = true;
    this.caster.removeBuffs(false, true);

    // watch for each attack
    this.onAttack = buildTrigger((t) => {
      t.addCondition(() => GetEventDamageSource() === caster.handle && BlzGetEventDamageType() === DAMAGE_TYPE_NORMAL);
      t.addAction(() => this.onEachAttack());
    });

    // watch for when target is dead
    this.onTargetDeath = buildTrigger((t) => {
      t.addAction(() => this.handleTargetDeath());
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
      // const distance = DistanceBetweenPoints(casterLoc, targetLoc);

      // if (distance >= ATTACK_DISTANCE * 1.5) {
      const newLoc = PolarProjectionBJ(targetLoc, ATTACK_DISTANCE, this.target.facing - 180);
      SetUnitX(this.caster.handle, GetLocationX(newLoc));
      SetUnitY(this.caster.handle, GetLocationY(newLoc));
      this.caster.setFacingEx(AngleBetweenPoints(casterLoc, targetLoc));
      RemoveLocation(casterLoc);
      RemoveLocation(targetLoc);
      RemoveLocation(newLoc);
      // }
    }
  }

  endSpell() {
    this.onAttack.destroy();
    this.onTargetDeath.destroy();
    this.timer.destroy();
    this.timerIdle.destroy();

    // restore to normal attack speed
    for (let weaponIndex = 0; weaponIndex < 2; weaponIndex++) {
      this.caster.setAttackCooldown(this.caster.getAttackCooldown(weaponIndex) * ATTACK_SCALING, weaponIndex);
      const currentAttackRange = getAttackRange(this.caster, weaponIndex);
      setAttackRange(this.caster, weaponIndex, currentAttackRange - EXTRA_ATTACK_RANGE);
    }
    this.caster.setPathing(true);
    // this.caster.invulnerable = false;
  }

  handleTargetDeath() {
    const nextTarget = this.findNextTarget();
    if (nextTarget !== null) {
      this.setTarget(Unit.fromHandle(nextTarget));
    } else {
      this.endSpell();
    }
  }

  findNextTarget(): unit {
    const casterLoc = getUnitLocation(this.caster);
    const candidates = GetUnitsInRangeOfLocMatching(500, casterLoc, Condition(() => {
      const matchingUnit = Group.getFilterUnit();
      return (
        matchingUnit.isAlive()
        && !matchingUnit.invulnerable
        && matchingUnit.isEnemy(this.caster.owner)
        && matchingUnit.handle !== this.target.handle
        && !matchingUnit.getField(UNIT_BF_IS_A_BUILDING)
        && !matchingUnit.isUnitType(UNIT_TYPE_ETHEREAL)
      );
    }));

    const result = GroupPickRandomUnit(candidates);

    DestroyGroup(candidates);
    RemoveLocation(casterLoc);
    return result;
  }
}
