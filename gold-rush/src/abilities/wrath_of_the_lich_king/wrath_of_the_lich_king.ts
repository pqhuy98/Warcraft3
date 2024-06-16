import { Weather, weatherBlizzard } from 'events/weather/weather';
import {
  MODEL_Shadow_Tornado,
  MODEL_Water_Tornado, SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD, SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN,
} from 'lib/constants';
import { getUnitXY } from 'lib/location';
import {
  buildTrigger, setIntervalForDuration, setTimeout,
} from 'lib/trigger';
import {
  createDummy, isBuilding,
  isWard,
} from 'lib/unit';
import {
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

export default class WrathOfTheLichKing {
  static Data = {
    ABILITY_IDS: <number[]>[],
    STUN_RANGE: 2000, // hard-coded
    DURATION: 12, // hard-coded
    targetMatching: (caster: Unit, unit: Unit) => unit.isAlive()
      && unit.isEnemy(caster.getOwner())
      && !isBuilding(unit)
      && !isWard(unit),
  };

  static register(abilityId: number) {
    WrathOfTheLichKing.Data.ABILITY_IDS.push(abilityId);
    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        caster.setTimeScale(5);
      });
    });

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_ENDCAST);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        caster.setTimeScale(1);
      });
    });

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_FINISH);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        caster.setTimeScale(1);
        new WrathOfTheLichKing(
          GetSpellAbilityId(),
          caster,
          GetUnitAbilityLevel(GetSpellAbilityUnit(), GetSpellAbilityId()),
        );
      });
    });
  }

  constructor(
    abilityId: number,
    caster: Unit,
    abilityLevel: number,
  ) {
    const durationS = WrathOfTheLichKing.Data.DURATION;
    const casterLoc = getUnitXY(caster);

    const dummy1 = createDummy('WotLK-stun', caster.owner, casterLoc.x, casterLoc.y, caster, 0.5);
    dummy1.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN);
    dummy1.setAbilityLevel(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN, abilityLevel);
    dummy1.issueImmediateOrder(OrderId.Stomp);

    const dummy2 = createDummy('WotLK-blizzard', caster.owner, casterLoc.x, casterLoc.y, caster, durationS + 0.5);
    dummy2.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD);
    dummy2.setAbilityLevel(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD, abilityLevel);

    const effects: effect[] = [];
    for (let i = 1; i <= 2; i++) {
      const eff = AddSpecialEffect(i === 1 ? MODEL_Shadow_Tornado : MODEL_Water_Tornado, caster.x, caster.y);
      const scaleXy = 3.5 * i;
      BlzSetSpecialEffectMatrixScale(eff, scaleXy, scaleXy, 2);
      BlzSetSpecialEffectTime(eff, 0.51);
      BlzSetSpecialEffectTimeScale(eff, 0.10 + (2 - i) * 0.10);
      effects.push(eff);
    }

    setIntervalForDuration(0.05, durationS + 1.4, () => {
      if (caster.isAlive()) {
        const loc = getUnitXY(caster);
        for (const eff of effects) {
          BlzSetSpecialEffectPosition(eff, loc.x, loc.y, 0);
        }
      }
    });

    setIntervalForDuration(1, durationS, () => {
      dummy2.issueOrderAt(OrderId.Blizzard, caster.x, caster.y);
    });

    setTimeout(durationS + 1.5, () => {
      for (const eff of effects) {
        DestroyEffect(eff);
      }
    });

    Weather.changeWeather(weatherBlizzard, durationS, 0);
  }
}
