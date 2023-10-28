import { getUnitLocation } from 'lib/location';
import {
  MODEL_AncientProtectorMissile, MODEL_EarthquakeTarget, MODEL_WarStompCaster,
} from 'lib/resources/war3-models';
import { buildTrigger } from 'lib/trigger';
import { Unit } from 'w3ts';

export class WarStomp {
  static register(abilityId?: number) {
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      if (abilityId) {
        t.addCondition(() => GetSpellAbilityId() === abilityId);
      }
      t.addAction(() => {
        const abiId = GetSpellAbilityId();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abiLevel = GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()) - 1;
        new WarStomp(abiId, caster, abiLevel);
      });
    });
  }

  constructor(
    private abilityId:number,
    private caster: Unit,
    private abilityLevel: number,
  ) {
    const loc = getUnitLocation(caster);
    const radius = BlzGetAbilityRealLevelField(caster.getAbility(abilityId), ABILITY_RLF_AREA_OF_EFFECT, abilityLevel);

    EnumDestructablesInCircleBJ(radius, loc, () => {
      const des = GetEnumDestructable();
      if (IsDestructableAliveBJ(des) && GetRandomInt(1, 4) <= 3) {
        KillDestructable(des);
      }
    });

    let eff: effect;

    for (let i = 1; i <= 5; i++) {
      eff = AddSpecialEffectLoc(MODEL_AncientProtectorMissile, loc);
      BlzSetSpecialEffectScale(eff, i * 2);
      BlzSetSpecialEffectTimeScale(eff, 0.5);
      DestroyEffect(eff);
    }

    const effectLength = 2;
    for (let j = 0; j <= effectLength; j++) {
      const randomPhase = GetRandomReal(0, 360);
      const numberEffect = 7;
      for (let i = 0; i < (j ? numberEffect : 1); i++) {
        const newLoc = PolarProjectionBJ(loc, j * 250, randomPhase + i * 360.0 / numberEffect);

        eff = AddSpecialEffectLoc(MODEL_WarStompCaster, newLoc);
        BlzSetSpecialEffectScale(eff, 0);
        DestroyEffect(eff);
        RemoveLocation(newLoc);
      }
    }

    const numberEffect = 15;
    for (let i = 0; i < numberEffect; i++) {
      const newLoc = PolarProjectionBJ(
        loc,
        GetRandomReal(0, 500),
        GetRandomDirectionDeg(),
      );

      eff = AddSpecialEffectLoc(MODEL_AncientProtectorMissile, newLoc);
      BlzSetSpecialEffectScale(eff, 3);
      BlzSetSpecialEffectTimeScale(eff, 0.5);
      DestroyEffect(eff);

      eff = AddSpecialEffectLoc(MODEL_EarthquakeTarget, newLoc);
      BlzSetSpecialEffectScale(eff, 1);
      BlzSetSpecialEffectTimeScale(eff, 1);
      DestroyEffect(eff);

      RemoveLocation(newLoc);
    }

    RemoveLocation(loc);
  }
}
