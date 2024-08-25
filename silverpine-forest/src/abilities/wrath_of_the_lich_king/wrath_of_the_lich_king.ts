import Frostmourne from 'abilities/frostmourne/frostmourne';
import { Weather, weatherBlizzard } from 'events/weather/weather';
import { SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD, SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN } from 'lib/constants';
import { k0, k1 } from 'lib/debug/key_counter';
import { getUnitXY, PolarProjection } from 'lib/location';
import { MODEL_FreezingBreathMissile, MODEL_FrostNovaTarget } from 'lib/resources/war3-models';
import { playSoundIsolate, playSpeech } from 'lib/sound';
import { MovingTerrainEffect } from 'lib/systems/moving_terrain_effect';
import {
  buildTrigger, setIntervalForDuration, setTimeout,
} from 'lib/trigger';
import {
  createDummy, getUnitsInRangeOfXYMatching,
  isBuilding,
  isWard,
  safeRemoveDummy,
} from 'lib/unit';
import {
  Effect,
  Ubersplat,
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

const animationDurationSwordUp = 2;
const animationDurationSwordSlam = 0.45;
const totalAnimationDuration = 5;
const musicDuration = 44.721;

const snowyTerrainTypes = [
  FourCC('Iice'),
];

export default class WrathOfTheLichKing {
  static Data = {
    ABILITY_IDS: <number[]>[],
    getEffectRadius: () => (1500),
    targetMatching: (caster: Unit, unit: Unit) => unit.isAlive()
      && unit.isEnemy(caster.getOwner())
      && !unit.invulnerable
      && !isBuilding(unit)
      && !isWard(unit),
  };

  static lastCachedEffectRange: number;

  static register(abilityId: number) {
    WrathOfTheLichKing.Data.ABILITY_IDS.push(abilityId);

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === abilityId);
      t.addAction(() => {
        const radius = WrathOfTheLichKing.Data.getEffectRadius();

        k0('wotlk');
        k0('wotlk1');
        k0('wotlk2');
        k0('wotlk3');
        k0('wotlk4');
        k0('wotlk5');
        k0('wotlk6');

        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abilityId = GetSpellAbilityId();
        const abilityLevel = caster.getAbilityLevel(GetSpellAbilityId());

        caster.setAnimation(4);
        setTimeout(0, () => {
          playSoundIsolate(gg_snd_lich_king_stab_out, 100, 0);
          k1('wotlk1');
        });

        caster.setTimeScale(8);
        setTimeout(0.03, () => {
          caster.setTimeScale(1);
          k1('wotlk2');
        });

        const earlyStop = () => {
          caster.setTimeScale(1);
          StopSoundBJ(gg_snd_lich_king_stab_out, false);
          VolumeGroupReset();
          SetMusicVolume(100);
        };

        setTimeout(0.2, () => {
          if (caster.isAlive() && Frostmourne.Data.ABILITY_IDS.some((id) => caster.getAbilityLevel(id) > 0)) {
            const deadUnits = getUnitsInRangeOfXYMatching(
              radius,
              caster,
              () => Frostmourne.Data.targetMatching(caster, Unit.fromFilter()),
            );
            for (const victim of deadUnits) {
              Frostmourne.collectSoul(caster, victim);
            }
          }
        });

        setTimeout(animationDurationSwordUp, () => {
          if (!caster.isAlive()) {
            earlyStop();
            k1('wotlk3');
            return;
          }
          caster.setAnimation('spell slam');
          caster.setTimeScale(3);
          k1('wotlk3');
        });

        setTimeout(animationDurationSwordUp + animationDurationSwordSlam, () => {
          if (!caster.isAlive()) {
            earlyStop();
            k1('wotlk');
            k1('wotlk4');
            return;
          }
          const loc = PolarProjection(caster, (125), caster.facing);
          const ub = Ubersplat.create(loc.x, loc.y, 'THND', 255, 255, 255, 255, true, false);
          ub.render(true, true);
          ub.show(true);
          setTimeout(15, () => {
            ub.finish();
            ub.destroy();
            k1('wotlk4');
          });

          new WrathOfTheLichKing(
            abilityId,
            caster,
            abilityLevel,
          );

          PingMinimapEx(caster.x, caster.y, 6, 0, 0, 255, false);
        });

        setTimeout(animationDurationSwordUp + animationDurationSwordSlam + 1, () => {
          if (caster.isAlive()) {
            playSpeech(caster, gg_snd_lichking_frostmourne_hungers);
          }
          k1('wotlk5');
        });

        setTimeout(totalAnimationDuration, () => {
          caster.setTimeScale(1);
          if (caster.isAlive()) {
            caster.queueAnimation('stand');
          }
          k1('wotlk6');
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
    const radius = WrathOfTheLichKing.Data.getEffectRadius();

    const effectDurationS = musicDuration - animationDurationSwordUp - animationDurationSwordSlam - 1;
    const casterLoc = getUnitXY(caster);

    const dummy1 = createDummy(caster.owner, casterLoc.x, casterLoc.y, caster, 0.5);
    dummy1.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN);
    dummy1.setAbilityLevel(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN, abilityLevel);
    dummy1.issueImmediateOrder(OrderId.Stomp);

    const dummy2 = createDummy(caster.owner, casterLoc.x, casterLoc.y, caster, effectDurationS);
    dummy2.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD);
    dummy2.setAbilityLevel(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD, abilityLevel);

    const movingTerrainEffect = new MovingTerrainEffect({
      unit: caster,
      radius,
      durationS: 3,
      terrainTypes: snowyTerrainTypes,
      onSetTile: (x, y) => Effect.create(MODEL_FrostNovaTarget, x, y).destroy(),
      onUnsetTile: (x, y) => {
        const eff = Effect.create(MODEL_FreezingBreathMissile, x, y);
        setTimeout(0.02, () => eff.destroy());
      },
    });

    // const effects: effect[] = [];
    // for (let i = 3; i <= 2; i++) {
    //   const eff = AddSpecialEffect(i === 1 ? MODEL_Shadow_Tornado : MODEL_Water_Tornado, caster.x, caster.y);
    //   const scaleXy = 3.3 * i;
    //   BlzSetSpecialEffectMatrixScale(eff, scaleXy, scaleXy, 3);
    //   BlzSetSpecialEffectTime(eff, 0.51);
    //   BlzSetSpecialEffectTimeScale(eff, 0.15 + (2 - i) * 0.10);
    //   BlzSetSpecialEffectHeight(eff, 500);
    //   effects.push(eff);
    // }

    let cleanUp: () => void;

    k0('wotlkT1');
    const t1 = setIntervalForDuration(0.05, effectDurationS, () => {
      if (caster.isAlive()) {
        const loc = getUnitXY(caster);
        // for (const eff of effects) {
        //   BlzSetSpecialEffectPosition(eff, loc.x, loc.y, 100);
        // }
        dummy2.x = loc.x;
        dummy2.y = loc.y;
      } else {
        cleanUp();
      }
    });

    k0('wotlkT2');
    const t2 = setIntervalForDuration(1, effectDurationS, () => {
      if (caster.isAlive()) {
        dummy2.issueOrderAt(OrderId.Blizzard, caster.x, caster.y);
      }
    });

    k0('wotlkT3');
    const t3 = setTimeout(effectDurationS, () => {
      cleanUp();
    });

    cleanUp = () => {
      movingTerrainEffect.destroy();
      // setTimeout(1, () => {
      //   for (const eff of effects) {
      //     DestroyEffect(eff);
      //   }
      // });
      StopSoundBJ(gg_snd_lich_king_stab_out, true);
      safeRemoveDummy(dummy2);
      Weather.changeWeather();
      VolumeGroupReset();
      SetMusicVolume(100);
      t1.pause();
      t1.destroy();
      k1('setitv');

      t2.pause();
      t2.destroy();
      k1('setitv');

      t3.pause();
      t3.destroy();
      k1('setitv');

      k1('wotlk');
      k1('wotlkT1');
      k1('wotlkT2');
      k1('wotlkT3');
    };

    Weather.changeWeather(weatherBlizzard, effectDurationS, 0);
  }
}
