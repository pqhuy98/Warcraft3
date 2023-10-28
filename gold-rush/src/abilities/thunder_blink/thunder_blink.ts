import { ChainLightning } from 'abilities/chain_lightning/chain_lightning';
import { ABILITY_ID_LOCUST, BUFF_ID_GENERIC, UNIT_ID_DUMMY } from 'lib/constants';
import { getUnitLocation, locX, locY } from 'lib/location';
import { MODEL_BlinkCaster, MODEL_BlinkTarget, MODEL_ThunderclapCaster } from 'lib/resources/war3-models';
import { ORDER_chainlightning, ORDER_thunderclap } from 'lib/resources/war3-orders';
import { buildTrigger } from 'lib/trigger';
import { enumUnitGroupWithDelay, tieUnitToUnit } from 'lib/unit';
import { Unit } from 'w3ts';

const THUNDER_CLAP_ABILITY_ID = FourCC('AHtc');
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
    // Thunder Clap in place
    const dummy1 = new Unit(caster.owner, UNIT_ID_DUMMY, locX(targetLoc), locY(targetLoc), 0);
    dummy1.applyTimedLife(BUFF_ID_GENERIC, 5);
    dummy1.addAbility(THUNDER_CLAP_ABILITY_ID);
    dummy1.setAbilityLevel(THUNDER_CLAP_ABILITY_ID, abilityLevel);
    dummy1.addAbility(ABILITY_ID_LOCUST);
    // dummy1.setflyHeight(caster.getflyHeight(), 999999);
    tieUnitToUnit(dummy1.handle, caster.handle);
    IssueImmediateOrder(dummy1.handle, OrderId2String(ORDER_thunderclap));

    const casterLoc = getUnitLocation(caster);
    const blinkEffect1 = AddSpecialEffectLoc(MODEL_BlinkCaster, casterLoc);
    DestroyEffect(blinkEffect1);
    RemoveLocation(casterLoc);

    const blinkEffect2 = AddSpecialEffectLoc(MODEL_BlinkTarget, targetLoc);
    DestroyEffect(blinkEffect2);

    const effectCenter = AddSpecialEffectLoc(MODEL_ThunderclapCaster, targetLoc);
    BlzSetSpecialEffectScale(effectCenter, 2);
    BlzSetSpecialEffectTimeScale(effectCenter, 0.5);
    DestroyEffect(effectCenter);

    const numberEffects = GetRandomInt(3, 6);
    for (let i = 0; i < numberEffects; i++) {
      for (let j = 1; j < 2; j++) {
        const loc = PolarProjectionBJ(targetLoc, j * 250, i / numberEffects * 360 + j * 36);
        const effect = AddSpecialEffectLoc(MODEL_ThunderclapCaster, loc);
        DestroyEffect(effect);
        RemoveLocation(loc);
      }
    }

    // Chain lightning around
    const nearby = GetUnitsInRangeOfLocMatching(750, targetLoc, Condition(() => {
      const matchingUnit = Unit.fromFilter();
      return matchingUnit.isAlive()
            && matchingUnit.isEnemy(caster.owner)
            && !matchingUnit.getField(UNIT_BF_IS_A_BUILDING);
    }));

    const durationPerStep = Math.min(0.1, 2.0 / BlzGroupGetSize(nearby));
    enumUnitGroupWithDelay(nearby, (enumUnit) => {
      const dummy2 = new Unit(caster.owner, UNIT_ID_DUMMY, caster.x, caster.y, 0);
      ChainLightning.blackListCaster(dummy2);
      dummy2.applyTimedLife(BUFF_ID_GENERIC, 5);
      dummy2.addAbility(CHAIN_LIGHTNING_ABILITY_ID);
      dummy2.setAbilityLevel(CHAIN_LIGHTNING_ABILITY_ID, abilityLevel);
      dummy2.addAbility(ABILITY_ID_LOCUST);
      dummy2.setflyHeight(caster.getflyHeight(), 999999);
      tieUnitToUnit(dummy2.handle, caster.handle);
      IssueTargetOrder(dummy2.handle, OrderId2String(ORDER_chainlightning), enumUnit);
    }, durationPerStep);

    RemoveLocation(targetLoc);
    DestroyGroup(nearby);
  }
}
