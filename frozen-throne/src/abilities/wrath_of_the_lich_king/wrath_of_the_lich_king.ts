import Frostmourne from 'abilities/frostmourne/frostmourne';
import { Weather, weatherBlizzard } from 'events/weather/weather';
import {
  MODEL_Shadow_Tornado, MODEL_Water_Tornado, SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD,
  SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_SPELL_IMMUNITY, SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN,
} from 'lib/constants';
import { getDestructablesInRange } from 'lib/destructable';
import { PolarProjection } from 'lib/location';
import { getCircleCoordinates } from 'lib/maths/geometric_coordinates';
import { dialogue } from 'lib/quests/dialogue_sound';
import { MODEL_BlizzardTarget, MODEL_FreezingBreathMissile, MODEL_FrostNovaTarget } from 'lib/resources/war3-models';
import { playSoundIsolate, playSpeech } from 'lib/sound';
import { MovingTerrainEffect } from 'lib/systems/moving_terrain_effect';
import {
  buildTrigger, setIntervalForDuration, setTimeout,
} from 'lib/trigger';
import {
  createDummy, getUnitsInRangeOfLoc,
  isBuilding,
  isWard,
  safeRemoveDummy,
} from 'lib/unit';
import {
  Effect,
  Sound,
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
  FourCC('Ibkb'),
];

export const soundFrostmourneHunger = dialogue('Sounds/lichking_frostmourne_hungers.mp3', 'Lich King', 'Frostmourne hungers...');
const speechSound2 = dialogue('Sounds/lichking_freeze_icy_husk.mp3', 'Lich King', 'I will freeze you from within until all that remains is an icy husk!');
const spellSound = Sound.create('Sounds/lichking_wrath_sound.mp3', false, false, false, 1, 1, 'DefaultEAXON');

export default class WrathOfTheLichKing {
  static Data = {
    ABILITY_IDS: <number[]>[],
    getEffectRadius: (): number => (1500),
    targetMatching: (caster: Unit, unit: Unit): boolean => unit.isAlive()
      && unit.isEnemy(caster.getOwner())
      && !unit.invulnerable
      && !isBuilding(unit)
      && !isWard(unit),
  };

  static lastCachedEffectRange: number;

  static register(registeredAbilityId: number): void {
    WrathOfTheLichKing.Data.ABILITY_IDS.push(registeredAbilityId);
    getCircleCoordinates(this.Data.getEffectRadius() / 32);

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === registeredAbilityId);
      t.addAction(() => {
        const radius = WrathOfTheLichKing.Data.getEffectRadius();
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        const abilityId = GetSpellAbilityId();
        const abilityLevel = caster.getAbilityLevel(GetSpellAbilityId());
        caster.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_SPELL_IMMUNITY);

        caster.setAnimation(5);
        setTimeout(0, () => {
          void playSoundIsolate(spellSound);
        });

        caster.setTimeScale(8);
        setTimeout(0.03, () => {
          caster.setTimeScale(1);
        });

        const earlyStop = (): void => {
          caster.setTimeScale(1);
          spellSound.stop(false, false);
          VolumeGroupReset();
          SetMusicVolume(100);
          caster.removeAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_SPELL_IMMUNITY);
        };

        setTimeout(0.2, () => {
          if (caster.isAlive() && Frostmourne.Data.ABILITY_IDS.some((id) => caster.getAbilityLevel(id) > 0)) {
            const deadUnits = getUnitsInRangeOfLoc(
              radius,
              caster,
              (u) => Frostmourne.Data.targetMatching(caster, u),
            );
            for (const victim of deadUnits) {
              Frostmourne.collectSoul(caster, victim);
            }
          }
        });

        setTimeout(animationDurationSwordUp, () => {
          if (!caster.isAlive()) {
            earlyStop();
            return;
          }
          caster.setAnimation('cinematic swordupdown');
          caster.setTimeScale(3);
        });

        setTimeout(animationDurationSwordUp + animationDurationSwordSlam, () => {
          if (!caster.isAlive()) {
            earlyStop();
            return;
          }
          const casterLoc = PolarProjection(caster, (125), caster.facing);
          const ub = Ubersplat.create(casterLoc.x, casterLoc.y, 'THND', 255, 255, 255, 255, true, false);
          ub.render(true, true);
          ub.show(true);
          setTimeout(15, () => {
            ub.finish();
            ub.destroy();
          });
          caster.removeAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_SPELL_IMMUNITY);

          new WrathOfTheLichKing(
            abilityId,
            caster,
            abilityLevel,
          );
        });

        setTimeout(animationDurationSwordUp + animationDurationSwordSlam + 1, () => {
          if (caster.isAlive()) {
            void playSpeech(caster, soundFrostmourneHunger).then(() => {
              if (GetRandomInt(1, 5) === 5) {
                void playSpeech(caster, speechSound2);
              }
            });
          }
        });

        setTimeout(totalAnimationDuration, () => {
          caster.setTimeScale(1);
          if (caster.isAlive()) {
            caster.queueAnimation('stand');
          }
        });
      });
    });

    buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_ENDCAST);
      t.addCondition(() => GetSpellAbilityId() === registeredAbilityId);
      t.addAction(() => {
        const caster = Unit.fromHandle(GetSpellAbilityUnit());
        caster.setTimeScale(1);
        caster.removeAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_SPELL_IMMUNITY);
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

    const dummy1 = createDummy(caster.owner, caster.x, caster.y, caster, 0.5);
    dummy1.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN);
    dummy1.setAbilityLevel(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN, abilityLevel);
    dummy1.issueImmediateOrder(OrderId.Stomp);

    const dummy2 = createDummy(caster.owner, caster.x, caster.y, caster, effectDurationS);
    dummy2.addAbility(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD);
    dummy2.setAbilityLevel(SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD, abilityLevel);

    getDestructablesInRange(radius, caster, (d) => d.typeId === FourCC('B000'))
      .forEach((d) => {
        d.setAnimSpeed(0.5);
        d.kill();
        // setTimeout((16764 - 13731) / 1000 / 0.5, () => {
        //   d.setAnimSpeed(0);
        // });
      });

    const movingTerrainEffect = new MovingTerrainEffect({
      unit: caster,
      radius,
      durationS: 3,
      terrainTypes: snowyTerrainTypes,
      onSetTile: (x, y, isRenewal): void => {
        if (!isRenewal) {
          Effect.create(MODEL_FrostNovaTarget, x, y).destroy();
        } else if (GetRandomInt(1, 4) === 1) {
          const eff = Effect.create(MODEL_BlizzardTarget, x, y);
          eff.setRoll(Deg2Rad(GetRandomDirectionDeg()));
          eff.destroy();
        }
      },
      onUnsetTile: (x, y): void => {
        const eff = Effect.create(MODEL_FreezingBreathMissile, x, y);
        setTimeout(0.02, () => eff.destroy());
      },
    });

    const effects: effect[] = [];
    for (let i = 1; i < 2; i++) {
      const eff = AddSpecialEffect(i === 1 ? MODEL_Shadow_Tornado : MODEL_Water_Tornado, caster.x, caster.y);
      const scaleXy = 3 * (i + 1);
      BlzSetSpecialEffectMatrixScale(eff, scaleXy, scaleXy, 0.1);
      BlzSetSpecialEffectTime(eff, 0.51);
      BlzSetSpecialEffectTimeScale(eff, 0.15 + (2 - i) * 0.10);
      effects.push(eff);
    }

    let cleanUp: () => void;

    const t1 = setIntervalForDuration(0.05, effectDurationS, () => {
      if (caster.isAlive()) {
        for (const eff of effects) {
          BlzSetSpecialEffectPosition(eff, caster.x, caster.y, caster.z + 50);
        }
        dummy2.x = caster.x;
        dummy2.y = caster.y;
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

    cleanUp = (): void => {
      movingTerrainEffect.destroy();
      setTimeout(1, () => {
        for (const eff of effects) {
          DestroyEffect(eff);
        }
      });
      spellSound.stop(false, true);
      safeRemoveDummy(dummy2);
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
