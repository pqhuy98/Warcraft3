import { ABILITY_ID_LOCUST, BUFF_ID_GENERIC, UNIT_ID_DUMMY } from 'lib/constants';
import { getUnitLocation, locX, locY } from 'lib/location';
import { LIGHTNING_FingerOfDeath } from 'lib/resources/war3-lightnings';
import { MODEL_BoltImpact, MODEL_ThunderclapCaster } from 'lib/resources/war3-models';
import { ORDER_chainlightning, ORDER_thunderclap } from 'lib/resources/war3-orders';
import { buildTrigger, setIntervalForDuration } from 'lib/trigger';
import { enumUnitGroupWithDelay, tieUnitToUnit } from 'lib/unit';
import { Unit } from 'w3ts';

const THUNDER_CLAP_ABILITY_ID = FourCC('A00C:AHtc');
const CHAIN_LIGHTNING_ABILITY_ID = FourCC('A003:AOcl');

export class ThunderBlink {
  static register(abilityId: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        new ThunderBlink(
          abilityId,
          Unit.fromHandle(GetSpellAbilityUnit()),
          GetSpellTargetLoc(),
          GetUnitAbilityLevel(GetSpellAbilityUnit(), abilityId),
        );
      });
    });
  }

  constructor(
    _abilityId:number,
    caster: Unit,
    targetLoc: location,
    abilityLevel: number,
  ) {
    const casterLoc = getUnitLocation(caster);
    const radius = 500;

    // Thunder Clap in place
    const dummy1 = new Unit(caster.owner, UNIT_ID_DUMMY, locX(casterLoc), locY(casterLoc), 0);
    dummy1.applyTimedLife(BUFF_ID_GENERIC, 1);
    dummy1.addAbility(THUNDER_CLAP_ABILITY_ID);
    dummy1.setAbilityLevel(THUNDER_CLAP_ABILITY_ID, abilityLevel);
    dummy1.addAbility(ABILITY_ID_LOCUST);
    IssueImmediateOrder(dummy1.handle, OrderId2String(ORDER_thunderclap));

    // Thunder Clap at target
    const dummy2 = new Unit(caster.owner, UNIT_ID_DUMMY, locX(targetLoc), locY(targetLoc), 0);
    dummy2.applyTimedLife(BUFF_ID_GENERIC, 1);
    dummy2.addAbility(THUNDER_CLAP_ABILITY_ID);
    dummy2.setAbilityLevel(THUNDER_CLAP_ABILITY_ID, abilityLevel);
    dummy2.addAbility(ABILITY_ID_LOCUST);
    IssueImmediateOrder(dummy2.handle, OrderId2String(ORDER_thunderclap));

    const blinkEffect1 = AddSpecialEffectLoc(MODEL_ThunderclapCaster, casterLoc);
    BlzSetSpecialEffectColor(blinkEffect1, 255, 0, 0);
    DestroyEffect(blinkEffect1);

    const effectCenter = AddSpecialEffectLoc(MODEL_ThunderclapCaster, targetLoc);
    BlzSetSpecialEffectScale(effectCenter, 4);
    BlzSetSpecialEffectColor(effectCenter, 255, 0, 0);
    DestroyEffect(effectCenter);

    const effectCenter2 = AddSpecialEffectLoc(MODEL_BoltImpact, targetLoc);
    BlzSetSpecialEffectScale(effectCenter2, 4);
    BlzSetSpecialEffectColor(effectCenter2, 255, 0, 0);
    DestroyEffect(effectCenter2);

    const anglePhase = GetRandomDirectionDeg();

    const numberEffects = GetRandomInt(4, 6);
    const layers = 2;
    const effectStep = radius / layers;
    for (let j = 0; j < layers; j++) {
      for (let i = 0; i < (j + 1) * numberEffects; i++) {
        const loc1 = PolarProjectionBJ(targetLoc, (j + 1) * effectStep, i * 360 / numberEffects + j * anglePhase);
        const effect1 = AddSpecialEffectLoc(MODEL_ThunderclapCaster, loc1);
        BlzSetSpecialEffectColor(effect1, 255, 0, 0);
        DestroyEffect(effect1);

        const loc2 = PolarProjectionBJ(targetLoc, (j + 1) * effectStep, i * 360 / numberEffects + j * anglePhase * 2);
        const effect2 = AddSpecialEffectLoc(MODEL_BoltImpact, loc2);
        BlzSetSpecialEffectColor(effect2, 255, 0, 0);
        DestroyEffect(effect2);

        RemoveLocation(loc1);
        RemoveLocation(loc2);
      }
    }

    const lightningsInner: lightning[] = [];
    const lightningsOuter: lightning[] = [];
    const lightningCount = 15;
    for (let i = 0; i < lightningCount; i++) {
      lightningsInner.push(AddLightning(LIGHTNING_FingerOfDeath.code, true, locX(targetLoc), locY(targetLoc), locX(targetLoc), locY(targetLoc)));
      // lightningsOuter.push(AddLightning(LIGHTNING_FingerOfDeath.code, true, locX(targetLoc), locY(targetLoc), locX(targetLoc), locY(targetLoc)))
    }
    const lightnings = [...lightningsInner, ...lightningsOuter];

    const lnRadius = radius;
    setIntervalForDuration(0.03, 0.5, (i, repeat) => {
      const distancePercent = i / repeat;
      // let distancePercent = i / (repeat / 2)
      // if (distancePercent > 1) {
      //   distancePercent = 2 - distancePercent
      // }

      const casterLoc = getUnitLocation(caster);
      lightningsInner.forEach((l, j) => {
        const loc = PolarProjectionBJ(casterLoc, distancePercent * lnRadius, j * 360 / lightningCount);// + i * anglePhase / repeat);
        MoveLightningLoc(l, casterLoc, loc);
        RemoveLocation(loc);
      });

      lightningsOuter.forEach((l, j) => {
        const loc1 = PolarProjectionBJ(casterLoc, distancePercent * lnRadius, j * 360 / lightningCount + i * anglePhase / repeat);
        const loc2 = PolarProjectionBJ(casterLoc, distancePercent * lnRadius, (j + 1) * 360 / lightningCount + i * anglePhase / repeat);
        MoveLightningLoc(l, loc1, loc2);
        RemoveLocation(loc1);
        RemoveLocation(loc2);
      });
      RemoveLocation(casterLoc);
    }, () => {
      // setTimeout(0.1, () => {
      setIntervalForDuration(0.03, 0.1, (i: number, repeat: number) => {
        lightnings.forEach((l) => SetLightningColor(l, 1, 1, 1, 1 - (i / repeat)));
      }, () => {
        lightnings.forEach((l) => DestroyLightning(l));
      });
      // });
    });

    // Chain lightning around
    const nearby = GetUnitsInRangeOfLocMatching(radius, targetLoc, Condition(() => {
      const matchingUnit = Unit.fromFilter();
      return matchingUnit.isAlive()
            && matchingUnit.isEnemy(caster.owner)
        && !matchingUnit.getField(UNIT_BF_IS_A_BUILDING);
    }));

    const durationPerStep = Math.min(0.1, 2.0 / BlzGroupGetSize(nearby));
    enumUnitGroupWithDelay(nearby, (enumUnit) => {
      const dummy2 = new Unit(caster.owner, UNIT_ID_DUMMY, caster.x, caster.y, 0);
      // ChainLightning.blackListCaster(dummy2);
      dummy2.applyTimedLife(BUFF_ID_GENERIC, 5);
      dummy2.addAbility(CHAIN_LIGHTNING_ABILITY_ID);
      dummy2.setAbilityLevel(CHAIN_LIGHTNING_ABILITY_ID, abilityLevel);
      dummy2.addAbility(ABILITY_ID_LOCUST);
      tieUnitToUnit(dummy2.handle, caster.handle);
      IssueTargetOrder(dummy2.handle, OrderId2String(ORDER_chainlightning), enumUnit);
    }, durationPerStep);

    RemoveLocation(casterLoc);
    RemoveLocation(targetLoc);
    DestroyGroup(nearby);
  }
}
