import { ChainLightningMulticast } from 'abilities/chain_lightning/chain_lightning_multicast';
import { ABILITY_ID_CHAIN_LIGHTNING, SUPPORT_ABILITY_ID_THUNDER_CLAP } from 'lib/constants';
import {
  fromTempLocation,
  getUnitXY, Loc, PolarProjection,
} from 'lib/location';
import { LIGHTNING_FingerOfDeath } from 'lib/resources/war3-lightnings';
import { MODEL_BoltImpact, MODEL_ThunderclapCaster } from 'lib/resources/war3-models';
import { ORDER_chainlightning, ORDER_thunderclap } from 'lib/resources/war3-orders';
import { buildTrigger, setIntervalForDuration } from 'lib/trigger';
import {
  createDummy, enumUnitsWithDelay, getUnitScale, getUnitsInRangeOfLoc,
  isBuilding, isWard, setUnitScale, tieUnitToUnit,
} from 'lib/unit';
import { classic } from 'lib/utils';
import { Unit } from 'w3ts';

const MODEL_ThunderclapCaster_classic = classic(MODEL_ThunderclapCaster);
const MODEL_BoltImpact_classic = classic(MODEL_BoltImpact);

export class ThunderBlink {
  static Data = {
    getEffectRadius: (): number => (600),
    targetMatching: (caster: Unit, matchingUnit: Unit): boolean => matchingUnit.isAlive()
      && !matchingUnit.invulnerable
      && matchingUnit.isEnemy(caster.getOwner())
      && !isBuilding(matchingUnit)
      && !isWard(matchingUnit),
  };

  static register(abilityId: number): void {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        new ThunderBlink(
          abilityId,
          Unit.fromHandle(GetSpellAbilityUnit()),
          fromTempLocation(GetSpellTargetLoc()),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), abilityId),
        );
      });
    });
  }

  constructor(
    _abilityId: number,
    caster: Unit,
    targetLoc: Loc,
    abilityLevel: number,
  ) {
    const casterLoc = getUnitXY(caster);
    const casterScale = getUnitScale(caster);
    const radius = ThunderBlink.Data.getEffectRadius();

    // Thunder Clap in place
    const dummy1 = createDummy(caster.owner, casterLoc.x, casterLoc.y, caster, 1);
    setUnitScale(dummy1, casterScale);
    dummy1.addAbility(SUPPORT_ABILITY_ID_THUNDER_CLAP);
    dummy1.setAbilityLevel(SUPPORT_ABILITY_ID_THUNDER_CLAP, abilityLevel);
    dummy1.issueImmediateOrder(ORDER_thunderclap);

    // Thunder Clap at target
    const dummy2 = createDummy(caster.owner, targetLoc.x, targetLoc.y, caster, 1);
    setUnitScale(dummy2, casterScale);
    dummy2.addAbility(SUPPORT_ABILITY_ID_THUNDER_CLAP);
    dummy2.setAbilityLevel(SUPPORT_ABILITY_ID_THUNDER_CLAP, abilityLevel);
    dummy2.issueImmediateOrder(ORDER_thunderclap);

    const blinkEffect1 = AddSpecialEffect(MODEL_ThunderclapCaster_classic, casterLoc.x, casterLoc.y);
    BlzSetSpecialEffectColor(blinkEffect1, 255, 0, 0);
    DestroyEffect(blinkEffect1);

    const effectCenter = AddSpecialEffect(MODEL_ThunderclapCaster_classic, targetLoc.x, targetLoc.y);
    BlzSetSpecialEffectScale(effectCenter, 4);
    BlzSetSpecialEffectColor(effectCenter, 255, 0, 0);
    DestroyEffect(effectCenter);

    const effectCenter2 = AddSpecialEffect(MODEL_BoltImpact_classic, targetLoc.x, targetLoc.y);
    BlzSetSpecialEffectScale(effectCenter2, 4);
    BlzSetSpecialEffectColor(effectCenter2, 255, 0, 0);
    DestroyEffect(effectCenter2);

    const anglePhase = GetRandomDirectionDeg();

    const numberEffects = GetRandomInt(4, 6);
    const layers = 2;
    const effectStep = (radius - (125)) / layers;
    for (let j = 0; j < layers; j++) {
      for (let i = 0; i < (j + 1) * numberEffects; i++) {
        const loc1 = PolarProjection(targetLoc, (j + 1) * effectStep, i * 360 / numberEffects + j * anglePhase);
        const effect1 = AddSpecialEffect(MODEL_ThunderclapCaster_classic, loc1.x, loc1.y);
        BlzSetSpecialEffectScale(effect1, (1));
        BlzSetSpecialEffectColor(effect1, 255, 0, 0);
        DestroyEffect(effect1);

        const loc2 = PolarProjection(targetLoc, (j + 1) * effectStep, i * 360 / numberEffects + j * anglePhase * 2);
        const effect2 = AddSpecialEffect(MODEL_BoltImpact_classic, loc2.x, loc2.y);
        BlzSetSpecialEffectScale(effect2, (1));
        BlzSetSpecialEffectColor(effect2, 255, 0, 0);
        DestroyEffect(effect2);
      }
    }

    const lightningsInner: lightning[] = [];
    const lightningsOuter: lightning[] = [];
    const lightningCount = 15;
    for (let i = 0; i < lightningCount; i++) {
      lightningsInner.push(AddLightning(LIGHTNING_FingerOfDeath.code, true, targetLoc.x, targetLoc.y, targetLoc.x, targetLoc.y));
      // lightningsOuter.push(AddLightning(LIGHTNING_FingerOfDeath.code, true, locX(targetLoc), locY(targetLoc), locX(targetLoc), locY(targetLoc)))
    }
    const lightnings = [...lightningsInner, ...lightningsOuter];

    const lnRadius = radius;
    setIntervalForDuration(0.05, 0.5, (i, repeat) => {
      const distancePercent = i / repeat;
      const currentCasterLoc = getUnitXY(caster);
      for (let j = 0; j < lightningsInner.length; j++) {
        const lightningLoc = PolarProjection(currentCasterLoc, distancePercent * lnRadius, j * 360 / lightningCount);// + i * anglePhase / repeat);
        MoveLightning(lightningsInner[j], true, currentCasterLoc.x, currentCasterLoc.y, lightningLoc.x, lightningLoc.y);
      }

      for (let j = 0; j < lightningsOuter.length; j++) {
        const loc1 = PolarProjection(currentCasterLoc, distancePercent * lnRadius, j * 360 / lightningCount + i * anglePhase / repeat);
        const loc2 = PolarProjection(currentCasterLoc, distancePercent * lnRadius, (j + 1) * 360 / lightningCount + i * anglePhase / repeat);
        MoveLightning(lightningsInner[j], true, loc1.x, loc1.y, loc2.x, loc2.y);
      }
    }, () => {
      setIntervalForDuration(0.03, 0.1, (i: number, repeat: number) => {
        for (const l of lightnings) {
          SetLightningColor(l, 1, 1, 1, 1 - (i / repeat));
        }
      }, () => {
        for (const l of lightnings) {
          DestroyLightning(l);
        }
      });
    });

    // Chain lightning around
    const nearby = getUnitsInRangeOfLoc(
      radius,
      targetLoc,
      (u) => ThunderBlink.Data.targetMatching(caster, u),
    );

    const durationPerStep = Math.min(0.1, 2.0 / nearby.length);
    enumUnitsWithDelay(nearby, (enumUnit) => {
      const dummyCl = createDummy(caster.owner, caster.x, caster.y, caster, 1);
      setUnitScale(dummyCl, (1));
      ChainLightningMulticast.blackListCaster(dummyCl);
      dummyCl.addAbility(ABILITY_ID_CHAIN_LIGHTNING);
      dummyCl.setAbilityLevel(ABILITY_ID_CHAIN_LIGHTNING, abilityLevel);
      dummyCl.issueTargetOrder(ORDER_chainlightning, enumUnit);
      tieUnitToUnit(dummyCl, caster);
    }, durationPerStep);
  }
}
