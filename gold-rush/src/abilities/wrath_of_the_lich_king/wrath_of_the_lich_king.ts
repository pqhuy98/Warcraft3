import { Weather, weatherBlizzard } from 'events/weather/weather';
import {
  MODEL_Shadow_Tornado,
  MODEL_Water_Tornado, SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD, SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN,
} from 'lib/constants';
import { getUnitXY, PolarProjection } from 'lib/location';
import { playSoundIsolate, playSpeech } from 'lib/sound';
import {
  buildTrigger, setIntervalForDuration, setTimeout,
} from 'lib/trigger';
import {
  createDummy, isBuilding,
  isWard,
} from 'lib/unit';
import {
  Ubersplat,
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

const animationDurationSwordUp = 2;
const animationDurationSwordSlam = 0.45;
const totalAnimationDuration = 5;
const musicDuration = 44.721;

export default class WrathOfTheLichKing {
  static Data = {
    ABILITY_IDS: <number[]>[],
    STUN_RANGE: 1500, // hard-coded
    targetMatching: (caster: Unit, unit: Unit) => unit.isAlive()
      && unit.isEnemy(caster.getOwner())
      && unit.isUnitType(UNIT_TYPE_GROUND)
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
        const abilityId = GetSpellAbilityId();
        const abilityLevel = caster.getAbilityLevel(GetSpellAbilityId());

        caster.setAnimation(4);
        setTimeout(0, () => {
          playSoundIsolate(gg_snd_lich_king_stab_out, 100, 0);
        });

        caster.setTimeScale(8);
        setTimeout(0.03, () => {
          caster.setTimeScale(1);
        });

        const earlyStop = () => {
          caster.setTimeScale(1);
          StopSoundBJ(gg_snd_lich_king_stab_out, false);
          VolumeGroupReset();
          SetMusicVolume(100);
        };

        setTimeout(animationDurationSwordUp, () => {
          if (!caster.isAlive()) {
            earlyStop();
            return;
          }
          caster.setAnimation('spell slam');
          caster.setTimeScale(3);
        });

        setTimeout(animationDurationSwordUp + animationDurationSwordSlam, () => {
          if (!caster.isAlive()) {
            earlyStop();
            return;
          }
          const loc = PolarProjection(caster, 125, caster.facing);
          const ub = Ubersplat.create(loc.x, loc.y, 'THND', 255, 255, 255, 255, true, false);
          ub.render(true, true);
          ub.show(true);
          setTimeout(15, () => {
            ub.finish();
            ub.destroy();
          });

          new WrathOfTheLichKing(
            abilityId,
            caster,
            abilityLevel,
          );

          PingMinimapEx(caster.x, caster.y, 6, 0, 0, 255, false);
        });

        setTimeout(animationDurationSwordUp + animationDurationSwordSlam + 1, () => {
          playSpeech(caster, gg_snd_lichking_frostmourne_hungers);
        });

        setTimeout(totalAnimationDuration, () => {
          caster.setTimeScale(1);
          caster.queueAnimation('stand');
        });
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
  }

  constructor(
    abilityId: number,
    caster: Unit,
    abilityLevel: number,
  ) {
    const effectDurationS = musicDuration - animationDurationSwordUp - animationDurationSwordSlam - 1;
    const casterLoc = getUnitXY(caster);

    const dummy1 = createDummy('WotLK-stun', caster.owner, casterLoc.x, casterLoc.y, caster, 0.5);
    dummy1.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN);
    dummy1.setAbilityLevel(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN, abilityLevel);
    dummy1.issueImmediateOrder(OrderId.Stomp);

    const dummy2 = createDummy('WotLK-blizzard', caster.owner, casterLoc.x, casterLoc.y, caster, effectDurationS);
    dummy2.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD);
    dummy2.setAbilityLevel(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD, abilityLevel);

    const effects: effect[] = [];
    for (let i = 1; i <= 2; i++) {
      const eff = AddSpecialEffect(i === 1 ? MODEL_Shadow_Tornado : MODEL_Water_Tornado, caster.x, caster.y);
      const scaleXy = 3.3 * i;
      BlzSetSpecialEffectMatrixScale(eff, scaleXy, scaleXy, 2);
      BlzSetSpecialEffectTime(eff, 0.51);
      BlzSetSpecialEffectTimeScale(eff, 0.10 + (2 - i) * 0.10);
      effects.push(eff);
    }

    let cleanUp: () => void;

    const t1 = setIntervalForDuration(0.05, effectDurationS, () => {
      if (caster.isAlive()) {
        const loc = getUnitXY(caster);
        for (const eff of effects) {
          BlzSetSpecialEffectPosition(eff, loc.x, loc.y, 100);
        }
        dummy2.x = loc.x;
        dummy2.y = loc.y;
      } else {
        cleanUp();
      }
    });

    const t2 = setIntervalForDuration(1, effectDurationS, () => {
      if (caster.isAlive()) {
        dummy2.issueOrderAt(OrderId.Blizzard, caster.x, caster.y);
      }
    });

    const t3 = setTimeout(effectDurationS, () => {
      cleanUp();
    });

    cleanUp = () => {
      setTimeout(1, () => {
        for (const eff of effects) {
          DestroyEffect(eff);
        }
      });
      StopSoundBJ(gg_snd_lich_king_stab_out, true);
      dummy2.kill();
      Weather.changeWeather();
      VolumeGroupReset();
      SetMusicVolume(100);
      t1.pause();
      t1.destroy();
      t2.pause();
      t2.destroy();
      t3.pause();
      t3.destroy();
    };

    Weather.changeWeather(weatherBlizzard, effectDurationS, 0);
  }
}
