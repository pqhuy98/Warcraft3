import { soundFrostmourneHunger } from 'abilities/wrath_of_the_lich_king/wrath_of_the_lich_king';
import { chatParamInt, chatParamReal } from 'events/chat_commands/chat_commands.model';
import { Weather } from 'events/weather/weather';
import {
  ABILITY_ID_ARMY_OF_DEATH,
  ABILITY_ID_CHANNEL_UNIT,
  ABILITY_ID_WRATH_OF_THE_LICH_KING,
  BUFF_ID_FROZEN,
  neutralPassive,
  playerHumanAlliance, playerLichKingNpc, playerMain, playerNightElf, playerOrcishHorde, playerUndeadForsaken,
} from 'lib/constants';
import {
  Angle, centerLocRect, Destroyable, Distance, Loc, locZ, PolarProjection, randomLocInRects,
} from 'lib/location';
import { angleDifference } from 'lib/maths/misc';
import { setAllianceState, setAllianceState2Way } from 'lib/player';
import { getDialogues } from 'lib/quests/dialogue_sound';
import { QuestLog } from 'lib/quests/quest_log';
import {
  cinematicFadeIn, cinematicFadeOut, cinematicMode, createMinimapIconLoc, setMinimapIconUnit,
} from 'lib/quests/utils';
import {
  ABILITY_ArchMageBrillianceAura,
  ABILITY_Bearform, ABILITY_CairneReincarnation, ABILITY_ChieftainEnduranceAura, ABILITY_ChieftainReincarnation, ABILITY_DeathKnightUnholyAura, ABILITY_DreadlordVampiricAura,
  ABILITY_KeeperThornsAura, ABILITY_Locust,
  ABILITY_MagicImmunityCreep, ABILITY_PaladinDevotionAura, ABILITY_PaladinResurrection,
  ABILITY_PriestessTrueshotAura, ABILITY_RavenFormDruid, ABILITY_ShadowMeld, ABILITY_ShadowMeldAkama, ABILITY_ShadowMeldInstant, ABILITY_Sphere, ABILITY_StoneForm,
} from 'lib/resources/war3-abilities';
import { ALL_LIGHTNINGS, LIGHTNING_ManaDrain } from 'lib/resources/war3-lightnings';
import {
  MODEL_AnimateDeadTarget,
  MODEL_BloodLustTarget,
  MODEL_DarkSummonTarget,
  MODEL_DivineShieldTarget, MODEL_FreezingBreathMissile, MODEL_MassTeleportCaster, MODEL_MassTeleportTarget, MODEL_MassTeleportTo,
  MODEL_Resurrecttarget,
  MODEL_ThunderclapCaster,
} from 'lib/resources/war3-models';
import { ORDER_attack, ORDER_move, ORDER_thunderbolt } from 'lib/resources/war3-orders';
import {
  UNIT_DruidoftheTalon, UNIT_EvilSylvanas, UNIT_Necromancer, UNIT_Shaman, UNIT_Sorceress,
  UNIT_TYPE,
} from 'lib/resources/war3-units';
import {
  playGlobalSound, playSpeech, speechQueue,
} from 'lib/sound';
import { removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { createTextTag, TTSetting } from 'lib/texttag';
import {
  buildTrigger, getTimeS, setIntervalForDuration, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  enumUnitsWithDelay,
  getUnitScale, getUnitsInRect, isUnitIdle, isUnitStunned, makeFlyable, setNeverDie,
  setUnitScale,
  transitionUnitColor,
} from 'lib/unit';
import {
  AsyncQueue,
  pickRandom, shuffleArray, waitUntil,
} from 'lib/utils';
import { IntroCinematic } from 'quests/intro-cinematic/intro-cinematic';
import {
  Camera, Effect, Leaderboard, MapPlayer, sleep, Sound, Timer, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';
import { ArmyManager } from './army_manager';

const dialogues = getDialogues(
  {
    questName: 'main-fight',
    dialogues: [
      {
        speaker: 'Highlord Tirion Fordring',
        text: 'Champion, attack! The Lich King must fall.',
        fileName: '0-tirion.mp3',
      },
      {
        speaker: 'The Lich King',
        text: "I'll keep you alive to witness the end, Fordring. I would not want the Light's greatest champion to miss seeing this wretched world remade in my image.",
        fileName: '1-lichking.mp3',
      },
      {
        speaker: 'The Lich King',
        // eslint-disable-next-line max-len
        text: "No questions remain unanswered. No doubts linger. You ARE Azeroth's greatest champions. You overcame every challenge I laid before you. My mightiest servants have fallen before you relentless onslaught... your unbridled fury...",
        fileName: '2-lichking.mp3',
      },
      {
        speaker: 'The Lich King',
        // eslint-disable-next-line quotes
        text: "Is it truly righteousness that drives you? I wonder...",
        fileName: '3-lichking.mp3',
      },
      {
        speaker: 'The Lich King',
        // eslint-disable-next-line max-len
        text: 'You trained them well, Fordring. You delivered the greatest fighting force this world has ever known... right into my hands - exactly as I intended! You shall be rewarded for your unwitting sacrifice.',
        fileName: '4-lichking.mp3',
      },
      {
        speaker: 'The Lich King',
        // eslint-disable-next-line max-len
        text: "Watch now as I raise them from the dead to become masters of the Scourge. They will shroud this world in chaos and destruction. Azeroth's fall will come at their hands -- and you will be the first to die.",
        fileName: '5-lichking.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'I delight in the irony.',
        fileName: '6-lichking.mp3',
      },
      {
        speaker: 'Highlord Tirion Fordring',
        text: 'LIGHT GRANT ME ONE FINAL BLESSING! GIVE ME THE STRENGTH... TO SHATTER THESE BONDS!',
        fileName: '7-tirion.mp3',
      },
      {
        speaker: 'The Lich King',
        text: '(dying)...',
        fileName: '8-lichking-death.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'Ravage the living, minions!',
        fileName: '9-lichking-animated-dead.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'Frostmourne, obey me!',
        fileName: '10-lichking-frostmourne-obey.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'Impossible!',
        fileName: '11-lichking-impossible.mp3',
      },
      {
        speaker: 'Highlord Tirion Fordring',
        text: 'No more, Arthas! No more lives will be consumed by your hatred!',
        fileName: '12-tirion.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'I will not make the same mistake again, Fordring. This time, there will be no escape.',
        fileName: '13-lichking.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'Very well, warriors of the frozen wastes, rise up. I command you to fight, kill, and die for your master.',
        fileName: '14-lichking.mp3',
      },
      {
        speaker: 'The Lich King',
        text: '...',
        fileName: '15-lichking.mp3',
      },
      {
        speaker: 'The Lich King',
        text: '(Laughing)...',
        fileName: '16-lichking.mp3',
      },
    ],
  },
);

const killDialogues = getDialogues(
  {
    questName: 'main-fight',
    dialogues: [
      {
        speaker: 'The Lich King',
        text: 'The end has come!',
        fileName: 'lichking-kill-0.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'Hope wanes...',
        fileName: 'lichking-kill-1.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'APOCALYSE!',
        fileName: 'lichking-kill-2.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'Die well, fool!',
        fileName: 'lichking-kill-3.mp3',
      },
      {
        speaker: 'The Lich King',
        text: 'Face now, your tragic end!',
        fileName: 'lichking-kill-4.mp3',
      },
    ],
  },
);

const customKillDialogues = getDialogues(
  {
    questName: 'main-fight',
    dialogues: [
      {
        speaker: 'The Lich King',
        text: 'I will not make the same mistake again, Sylvanas. This time, there will be no escape. You will all serve me in death!',
        fileName: 'lichking-kill-sylvanas.mp3',
      },
    ],
  },
);

const hints = [
  "Enemies slain restore the Lich King's health. Slay them quickly to sustain in battle.",
  "Frost Nova is extremely effective against clustered enemies. Its cooldown is very short, so cast often.",
  "Wrath of the Lich King is castable only after Tirion is frozen.",
  "The Lich King must keep moving to avoid being surrounded.",
  "Army of the Dead draws enemy focus away from the Lich King. Heal them with Death Coil",
  "Portal mages summon reinforcements. Slay them to slow the enemy assault.",
  "When under Dreadlord's Sleep, order nearby undeads to attack and awaken the Lich King."
]

function prepareCrusader(unit: Unit): void {
  unit.addAnimationProps('ready', true);
  unit.removeAbility(ABILITY_Bearform.id);
  unit.removeAbility(ABILITY_RavenFormDruid.id);
  unit.removeAbility(ABILITY_StoneForm.id);
  unit.removeAbility(ABILITY_ShadowMeld.id);
  unit.removeAbility(ABILITY_ShadowMeldInstant.id);
  unit.removeAbility(ABILITY_ShadowMeldAkama.id);
  unit.mana = unit.maxMana;
  unit.removeGuardPosition();
}

const requiredHeroSouls = 50;
const debugRaiseHeroes = false;
const debug1 = false;
const debug2 = false;
const debug3 = false;

export class MainFight extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    lichKing: Unit
    tirion: Unit
  }) {
    super(globals);
    void this.register();
  }

  heroSoulCollected = 0;

  asyncQueue = new AsyncQueue();

  private async register(): Promise<void> {
    const { lichKing, tirion } = this.globals;

    // Preserve preplaced units to restore later
    const armyManager = new ArmyManager();
    getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(lichKing.owner) && u.isAlive())
      .forEach((u) => {
        armyManager.saveUnit(u, () => {
          u.show = true;
          u.acquireRange = 500;
          prepareCrusader(u);
        });
      });

    await this.waitDependenciesDone();

    let questLog: QuestLog;
    let tirionUnfreeze: ReturnType<typeof this.tirionFrozen>;
    let reinforcements: ReturnType<typeof this.loopSpawnReinforcements>;
    const heroes = getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(lichKing.owner) && u.isAlive() && u.isHero() && u !== tirion);

    if (debugRaiseHeroes) {
      const raiseDeadSound = Sound.create('QuestSounds\\__refined\\main-fight\\lichking-animated-dead-effect.mp3', true, true, false, 1, 1, 'DefaultEAXON');
      raiseDeadSound.start();

      const soulEffect = Effect.create('Models\\BlueUnsummon\\BlueUnsummon.mdx', 0, 0);
      const effect2 = Effect.create(MODEL_BloodLustTarget, 0, 0);
      const effect3 = Effect.create(MODEL_BloodLustTarget, 0, 0);
      const lightningType = chatParamInt('lt', 0);
      const scale = chatParamReal('scale', getUnitScale(lichKing));

      setIntervalIndefinite(0.5, () => {
        if (!isUnitIdle(lichKing)) {
          soulEffect.x = 0;
          soulEffect.y = 0;
          soulEffect.z = 0;
          effect2.x = 0;
          effect2.y = 0;
          effect2.z = 0;
          effect3.x = 0;
          effect3.y = 0;
          effect3.z = 0;
          return;
        }
        const swordLoc = getLichKingSpellChannelSwordLoc(lichKing);

        lichKing.setAnimation('spell channel 1');
        setUnitScale(lichKing, scale.current);
        soulEffect.x = swordLoc.bottom.x;
        soulEffect.y = swordLoc.bottom.y;
        soulEffect.z = swordLoc.bottom.z;
        soulEffect.scale = scale.current;

        effect2.x = swordLoc.bottom.x;
        effect2.y = swordLoc.bottom.y;
        effect2.z = swordLoc.bottom.z;
        effect2.scale = scale.current;

        effect3.x = swordLoc.top.x;
        effect3.y = swordLoc.top.y;
        effect3.z = swordLoc.top.z;
        effect3.scale = scale.current;

        raiseDeadSound.setPosition(swordLoc.top.x, swordLoc.top.y, swordLoc.top.z);

        const lightnings: lightning[] = [];
        for (let i = 0; i < 6; i++) {
          const loc = PolarProjection(lichKing, GetRandomReal(300, 1000), GetRandomDirectionDeg());
          lightnings.push(AddLightningEx(
            ALL_LIGHTNINGS[lightningType.current % ALL_LIGHTNINGS.length].code,
            false,
            loc.x,
            loc.y,
            locZ(loc),
            swordLoc.top.x,
            swordLoc.top.y,
            swordLoc.top.z,
          ));
        }
        setTimeout(6, () => lightnings.forEach((l) => DestroyLightning(l)));
      });
    }

    let wotlkDisabled = false

    // Loop for infinite fight attempts
    for (let attempt = 0; ; attempt++) {
      // Initial UI setup
      IntroCinematic.lichKingSit(lichKing);
      await sleep(2);
      cinematicFadeIn(3);
      cinematicMode(false, 1);
      Camera.reset(0);
      Camera.panTimed(lichKing.x, lichKing.y, 0, undefined);
      Weather.changeWeather();
      setMinimapIconUnit(lichKing, 'boss');
      lichKing.resetCooldown();
      if (!wotlkDisabled) { // Blizzard bug: https://www.hiveworkshop.com/threads/blzunitdisableability-check-if-ability-is-disabled.355932/
        lichKing.disableAbility(ABILITY_ID_WRATH_OF_THE_LICH_KING, true, false);
        wotlkDisabled = true
      }
      speechQueue.clear();

      if (!debug1) {
        await sleep(2);
      }
      if (!questLog) {
        questLog = await QuestLog.create({
          name: 'Fall of the Lich King',
          // eslint-disable-next-line max-len
          description: "Champions of the Argent Tournament, led by Tirion Fordring, stormed Icecrown Citadel and defeated the Lich King's mightiest servants and ascended the Frozen Throne. Atop the spire, the Lich King had been long waiting for Tirion's assault, knowing that Tirion would bring with him Azeroth's greatest heroes, who could then be killed and resurrected as powerful masters of the Scourge.",
          icon: 'ReplaceableTextures/CommandButtons/BTNLichKing.blp',
          items: [
            'Freeze Tirion Fordring',
            `Collect ${requiredHeroSouls} souls of Azeroth's greatest heroes`,
          ],
        });
      }

      const cleanUp: Destroyable[] = [];

      // eslint-disable-next-line no-loop-func
      tirionUnfreeze = this.tirionFrozen(
        // eslint-disable-next-line no-loop-func
        () => questLog.completeItem(0),
        // Enable Lich King's ultimate when after Tirion is frozen and speech is done
        () => {
          if (wotlkDisabled) {
            lichKing.disableAbility(ABILITY_ID_WRATH_OF_THE_LICH_KING, false, false)
            wotlkDisabled = false
          }
        },
      );
      cleanUp.push(...this.lichKingDialogues());
      cleanUp.push(this.morphUnitsResetAcquireRange());
      cleanUp.push(this.collectSouls());

      if (debug1) {
        this.heroSoulCollected = requiredHeroSouls;
        lichKing.setPosition(0, 0);
        lichKing.select(true);
        Camera.pan(lichKing.x, lichKing.y, undefined);
        lichKing.paused = false;
        lichKing.issueTargetOrder(ORDER_thunderbolt, tirion);
        const hero = pickRandom(heroes.filter((h) => h.isAlive()));
        hero.kill();
        hero.revive(hero.x, hero.y, false);
        lichKing.life = 100;
      }

      if (attempt > 0 && attempt - 1 < hints.length) {
        void sleep(1).then(() => {
          questLog.hint(hints[attempt-1])
        })
      }

      // Wait till fight begins
      const crusaders = getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(lichKing.owner) && u.isAlive());
      await this.waitForBattle(crusaders);

      // Spawn reinforcements
      reinforcements = this.loopSpawnReinforcements([
        playerHumanAlliance,
        playerOrcishHorde,
        playerUndeadForsaken,
        playerNightElf,
      ], new Set(crusaders.map((u) => u.typeId)), crusaders.filter((c) => c.isHero()));

      // Wait till lich king dies or enough hero souls collected
      // eslint-disable-next-line no-loop-func
      await waitUntil(0.5, () => !lichKing.isAlive()
          || (this.heroSoulCollected >= requiredHeroSouls && tirionUnfreeze.hasFreezed()));

      if (lichKing.isAlive()
        && this.heroSoulCollected >= requiredHeroSouls
        && tirionUnfreeze.hasFreezed()
      ) {
        // quest completed
        cleanUp.forEach((t) => t.destroy());
        break;
      } else {
        // Quest failed, restore to initial state for next attempt
        await sleep(5);
        cinematicFadeOut(2);
        cinematicMode(true, 2);
        await sleep(2);

        // clean up
        cleanUp.forEach((t) => t.destroy());
        getUnitsInRect(GetWorldBounds()).forEach((u) => {
          if (!u.isHero() || u.isIllusion()) {
            u.destroy();
          } else {
            u.show = false;
            u.kill();
          }
        });
        armyManager.restoreAll();
        await sleep(1);
        lichKing.revive(lichKing.x, lichKing.y, false);
        lichKing.resetCooldown();
        tirionUnfreeze.destroy();
        reinforcements.destroy();
      }
    }

    setNeverDie(lichKing, true, Math.round(lichKing.maxLife * 0.03));
    if (!debug1) {
      await questLog.completeWithRewards([]);
    } else {
      void questLog.completeWithRewards([]);
    }

    // Revive dead heroes, wait until all heroes are alive and close to Lich King,
    // and Lich King is about to die
    await waitUntil(1, () => {
      const deadHeroes = heroes.filter((u) => !u.isAlive());
      if (deadHeroes.length > 0) {
        const hero = pickRandom(deadHeroes);
        setTimeout(GetRandomReal(0, 3), () => {
          hero.revive(hero.x, hero.y, true);
          hero.acquireRange = 10000;
        });
      }

      const isLichKingLowHp = lichKing.life <= lichKing.maxLife * 0.03 + 5;
      return !speechQueue.isRunning() && deadHeroes.length === 0
          && isLichKingLowHp && !lichKing.paused;
    });

    // King King prepare to kill everyone
    PlayThematicMusic('Sounds\\Invincible.mp3');
    lichKing.setPosition(lichKing.x, lichKing.y);
    lichKing.paused = true;
    lichKing.facing = 270;
    lichKing.setAnimation('spell channel 1');
    Camera.pan(lichKing.x, lichKing.y, undefined);
    lichKing.removeBuffs(false, true);
    const loc = getLichKingSpellChannelSwordLoc(lichKing, 270);
    const eff1 = Effect.create('Models\\BlueUnsummon\\BlueUnsummon.mdx', loc.bottom.x, loc.bottom.y);
    eff1.z = loc.bottom.z;

    if (!debug2) {
      await sleep(3);
    }

    eff1.destroy();
    lichKing.setAnimation('cinematic swordupdown');
    lichKing.setTimeScale(3);

    await sleep(0.45);
    void playGlobalSound('QuestSounds\\__refined\\main-fight\\lichking-slam.mp3');
    lichKing.setTimeScale(1);

    reinforcements.destroy();

    // Kill everyone
    const units = getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(lichKing.owner) && u.isAlive() && u !== tirion);
    const fakeCorpse = new Map<Unit, Unit>();
    units.sort((u1, u2) => Distance(u1, lichKing) - Distance(u2, lichKing));
    const delayPerUnit = Math.max(0.01, 1 / (units.length + 1));
    enumUnitsWithDelay(units, (u) => {
      const eff = Effect.createAttachment(MODEL_ThunderclapCaster, u, 'origin');
      eff.setTimeScale(0.5);
      eff.destroy();
      u.disableAbility(ABILITY_CairneReincarnation.id, true, false);
      u.disableAbility(ABILITY_ChieftainReincarnation.id, true, false);
      if (u.isHero() && !u.isIllusion()) {
        u.show = false;
        u.paused = true;
      }
      u.kill();
      u.disableAbility(ABILITY_CairneReincarnation.id, false, false);
      u.disableAbility(ABILITY_ChieftainReincarnation.id, false, false);

      if (u.isHero() && !u.isIllusion()) {
        const corpse = Unit.create(neutralPassive, u.typeId, u.x, u.y, u.facing);
        prepareCrusader(corpse);
        corpse.setAnimation('death');
        fakeCorpse.set(u, corpse);
        corpse.addAbility(ABILITY_Locust.id);
        corpse.invulnerable = true;
        corpse.color = u.owner.color;
        corpse.removeAbility(ABILITY_Sphere.id);
      }
    }, delayPerUnit);
    await sleep(units.length * delayPerUnit);

    // Kill all destructables
    [gg_unit_h003_0140,
      gg_unit_h003_0141,
      gg_unit_h003_0147,
      gg_unit_h003_0148,
    ].forEach((u) => {
      const unit = Unit.fromHandle(u);
      unit.setTimeScale(0.5);
      unit.setAnimation('death');
      setTimeout((16680 - 13731) / 1000 / 0.5, () => {
        unit.setTimeScale(0);
      });
    });

    // Lich King talks after killing everyone
    lichKing.paused = false;
    if (!debug2) {
      lichKing.removeBuffs(false, true);
      lichKing.queueAnimation('cinematic talk');
      lichKing.queueAnimation('stand 1');
      await playSpeech(lichKing, dialogues[2], null);
      lichKing.setAnimation('cinematic talk');
      lichKing.queueAnimation('stand 2');
      await playSpeech(lichKing, dialogues[3], null);
      setTimeout(12, () => {
        lichKing.setAnimation('cinematic LeftHand');
        lichKing.queueAnimation('stand 1');
      });

      lichKing.setAnimation('cinematic talk');
      lichKing.queueAnimation('stand 1');
      lichKing.facing = Angle(lichKing, tirion);
      await playSpeech(lichKing, dialogues[4], null);
    }

    const timescaleParam = chatParamInt('ts', 1.5);
    const breakPointParam = chatParamReal('bp', 0.4);
    const distance = chatParamReal('dis', 600);

    for (let i = 0; i < 1; i++) { // when debuging, change this 1 to higher to replay
      // Lich King runs to center
      const heroRaising = await this.lichKingGoToCenterRaiseHeroes(heroes);

      // Lich King speaks while raising
      if (!debug2) {
        await playSpeech(lichKing, dialogues[5], null);
        await playSpeech(lichKing, dialogues[6], null);
      }

      if (debug2) {
        const newLoc = PolarProjection(lichKing, GetRandomReal(0, 1000), GetRandomDirectionDeg());
        tirion.setPosition(newLoc.x, newLoc.y);
        tirion.moveSpeed = 522;
      }

      // Tirion wakes up
      if (!debug2) {
        await sleep(2);
        Camera.pan(tirion.x, tirion.y, null);
      } else {
        await sleep(1);
      }
      await tirionUnfreeze.unfreeze();
      tirion.disableAbility(ABILITY_PaladinResurrection.id, true, false);
      tirion.setHeroLevel(85, true);
      tirion.life = tirion.maxLife;
      tirion.mana = tirion.maxMana;
      setAllianceState(lichKing.owner, tirion.owner, 'neutral');

      tirion.facing = Angle(tirion, lichKing);
      removeGuardPosition(tirion);

      // Tirion runs to leap position
      const swordLoc = getLichKingSpellChannelSwordLoc(lichKing);
      const swordLocXy = swordLoc.bottom;
      const leapLoc = PolarProjection(lichKing, distance.current, Angle(swordLocXy, tirion));
      setGuardPosition(tirion, leapLoc, Angle(leapLoc, swordLocXy), { maxRadius: 50 });
      await waitUntil(0.1, () => Distance(tirion, leapLoc) < 50 && angleDifference(tirion.facing, Angle(tirion, swordLocXy)) < 5);

      // Tirion leap

      // frame indexes of animation "attack slam"
      const start = 473333 / 1000;
      const airborne = 473720 / 1000;
      const hit = 474266 / 1000;

      const timescale = 1 / timescaleParam.current; // slow motion
      tirion.setTimeScale(timescale);
      lichKing.setTimeScale(timescale);

      const intervalS = 0.01;
      const leapDurationS = 2 * (hit - airborne) / timescale;
      const leapDistance = Distance(tirion, swordLocXy) * 2;
      const leapAngle = Angle(tirion, swordLocXy);
      const leapHeight = 100;

      // Tirion prepare to leap
      makeFlyable(tirion);
      tirion.paused = true;
      tirion.setAnimation('attack slam');
      tirion.queueAnimation('stand ready');

      // Leap starts
      await sleep((airborne - start) / timescale);

      // Height function using parabola equation
      const calculateHeight = (currentDistance: number): number => {
        const a = -4 * leapHeight / (leapDistance * leapDistance);
        const height = a * (currentDistance - leapDistance / 2) ** 2 + leapHeight;
        return height;
      };

      // Distance offset function using cubic ease-in-out
      const calculateOffset = (idx: number): number => {
        const currentTime = idx * intervalS;
        return currentTime / leapDurationS * leapDistance;
      };

      // Leap loop
      setIntervalForDuration(intervalS, leapDurationS, (idx) => {
        const offsetDistance = calculateOffset(idx);
        const newLoc = PolarProjection(leapLoc, offsetDistance, leapAngle);
        tirion.x = newLoc.x;
        tirion.y = newLoc.y;
        tirion.setflyHeight(calculateHeight(offsetDistance), 0);
      });

      // Lich King's sword is hit
      const breakPoint = breakPointParam.current;
      await sleep(leapDurationS * breakPoint);
      lichKing.setAnimation('cinematic weaponbreak');
      if (!debug3) {
        setTimeout((181000 - 177430) / 1000 / timescale, () => {
          lichKing.setAnimation('ready');
          lichKing.queueAnimation('ready');
          lichKing.queueAnimation('ready');
          lichKing.queueAnimation('ready');
          lichKing.queueAnimation('ready');
        });
      }
      void playGlobalSound('QuestSounds\\__refined\\main-fight\\frostmourne-shatter.mp3');
      const effect4 = Effect.create(MODEL_FreezingBreathMissile, swordLoc.bottom.x, swordLoc.bottom.y);
      effect4.z = (swordLoc.bottom.z + swordLoc.top.z) / 2;
      setTimeout(0.02, () => effect4.destroy());

      heroRaising.destroy();
      lichKing.paused = true;

      // Tirion lands then faces Lich King
      await sleep(leapDurationS * (1 - breakPoint));
      tirion.facing = Angle(tirion, lichKing);

      if (!debug3) {
        await playSpeech(lichKing, dialogues[11]); // 5s
        PlayThematicMusic('Sound\\Music\\mp3Music\\Tension.mp3');
        await playSpeech(tirion, dialogues[12]); // 5s
        await playSpeech(lichKing, dialogues[15]); // 4s
        await playSpeech(lichKing, dialogues[10]); // 7s
        await sleep(16 - 5 - 4 - 7); // wait till Tension.mp3 ends
        Camera.pan(lichKing.x, lichKing.y, null);
        await playGlobalSound('Units\\Undead\\Acolyte\\AcolyteYes1.wav');
        await playGlobalSound('Units\\Undead\\Acolyte\\AcolyteYes2.wav');
        lichKing.setAnimation('spell channel 1');
        lichKing.queueAnimation('spell channel 1');
        lichKing.facing = Angle(lichKing, tirion);
        // await playSpeech(lichKing, dialogues[16]);
      }

      if (!debug3) {
        await playSpeech(lichKing, soundFrostmourneHunger);
      }
      ClearSelection();
      lichKing.select(true);
      lichKing.paused = false;
      tirion.paused = false;
      lichKing.setTimeScale(1);
      tirion.setTimeScale(1);
      removeGuardPosition(tirion);
      setAllianceState(lichKing.owner, tirion.owner, 'enemy');

      if (debug3) {
        lichKing.issueTargetOrder(ORDER_thunderbolt, tirion);
      } else {
        lichKing.issueTargetOrder(ORDER_attack, tirion);
      }

      // wait until Tirion is frozen again
      await waitUntil(0.03, () => isUnitStunned(tirion) && tirion.getAbilityLevel(BUFF_ID_FROZEN) > 0);
      if (!debug3) {
        void playSpeech(lichKing, dialogues[13]);
      }
      tirion.paused = true;
      tirion.setTimeScale(0);
      tirion.invulnerable = true;
      await waitUntil(0.1, () => !speechQueue.isRunning());
      if (!debug3) {
        await sleep(2);
      }

      const heroRaising2 = await this.lichKingGoToCenterRaiseHeroes(heroes);
      PlayThematicMusic('Sound\\Music\\mp3Music\\TragicConfrontation.mp3');
      void playSpeech(lichKing, dialogues[14]);
      tirion.invulnerable = false;

      const passives = [
        ABILITY_Sphere, ABILITY_PaladinDevotionAura, ABILITY_ArchMageBrillianceAura,
        ABILITY_KeeperThornsAura, ABILITY_PriestessTrueshotAura,
        ABILITY_DeathKnightUnholyAura, ABILITY_DreadlordVampiricAura,
        ABILITY_ChieftainEnduranceAura,
      ];

      for (const hero of heroes) {
        try {
          const corpse = fakeCorpse.get(hero);
          hero.setPathing(false);
          hero.show = true;
          hero.setOwner(playerLichKingNpc, false);

          if (corpse) {
            hero.revive(corpse.x, corpse.y, false);
            hero.setFacingEx(corpse.facing);
            corpse.destroy();
          } else {
            hero.revive(hero.x, hero.y, false);
          }
          passives.forEach((ability) => hero.disableAbility(ability.id, true, false));
          hero.paused = true;
          hero.invulnerable = true;
          hero.mana = hero.maxMana;
          hero.setAnimation('death');
          hero.setTimeScale(100);

          await sleep(1);
          const effect = Effect.create(MODEL_DarkSummonTarget, hero.x, hero.y);
          transitionUnitColor(
            hero,
            {
              r: 255, g: 255, b: 255, a: 255,
            },
            {
              r: 100, g: 50, b: 50, a: 255,
            },
            3,
          );
          hero.setTimeScale(-0.03);
          hero.queueAnimation('stand 1');
          setTimeout(5, () => {
            hero.paused = false;
            hero.invulnerable = false;
            hero.setPathing(true);
            hero.setTimeScale(1);
            removeGuardPosition(hero);
            hero.acquireRange = 10000;
            hero.issueOrderAt(OrderId.Attack, tirion.x, tirion.y);
            effect.destroy();
            passives.forEach((ability) => hero.disableAbility(ability.id, false, false));
          });
        } catch (e) {
          // log(`cannot raise ${hero.name}`);
        }
      }
      await sleep(6);
      heroRaising2.destroy();
      lichKing.setAnimation('stand 1');
      lichKing.queueAnimation('stand 2');
      lichKing.paused = false;
      lichKing.acquireRange = 10;
      setNeverDie(tirion, false);

      void waitUntil(0.1, () => {
        if (tirion.getAbilityLevel(BUFF_ID_FROZEN) === 0) {
          tirion.paused = false;
          tirion.setTimeScale(1);
          return true;
        }
        return false;
      });

      await waitUntil(1, () => !tirion.isAlive());
      await sleep(2);
      cinematicFadeOut(3);
      await sleep(4);
      MeleeVictoryDialogBJ(lichKing.owner.handle, true);
      await sleep(2);
      cinematicFadeIn(3);
      setAllianceState2Way(playerLichKingNpc, lichKing.owner, "allied share unit")
    }
  }

  private async waitForBattle(crusaders: Unit[]): Promise<void> {
    const { lichKing, tirion } = this.globals;

    let attackStarted = false;

    const attack = (): void => {
      crusaders.forEach((c) => {
        c.acquireRange = 10000;
        c.issueTargetOrder(OrderId.Attack, lichKing);
      });
      attackStarted = true;
      if (!debug1) {
        void playSpeech(tirion, dialogues[0], null);
      }
    };

    buildTrigger((t) => {
      crusaders.forEach((u) => {
        t.registerUnitEvent(u, EVENT_UNIT_ACQUIRED_TARGET);
        t.registerUnitEvent(u, EVENT_UNIT_ATTACKED);
        t.registerUnitEvent(u, EVENT_UNIT_DAMAGING);
      });
      t.addAction(() => {
        t.destroy();
        attack();
      });
    });

    await waitUntil(1, () => attackStarted);
  }

  private loopSpawnReinforcements(players: MapPlayer[], unitTypeSet: Set<number>, heroes: Unit[]): Destroyable {
    const { lichKing } = this.globals;
    const spawnRects = [
      gg_rct_Spawn_001,
      gg_rct_Spawn_002,
      gg_rct_Spawn_003,
      gg_rct_Spawn_004,
      gg_rct_Spawn_005,
      gg_rct_Spawn_006,
      gg_rct_Spawn_007,
    ];

    const cleanUp: Destroyable[] = [];

    // Spawn teleportations for players
    const teleportations: {
      maintainers: Unit[],
      owner: MapPlayer,
      effects: Effect[],
      loc: Loc
    }[] = [];
    const maintainerUnitTypes = new Map<race, UNIT_TYPE>(<[race, UNIT_TYPE][]>[
      [RACE_HUMAN, UNIT_Sorceress],
      [RACE_ORC, UNIT_Shaman],
      [RACE_NIGHTELF, UNIT_DruidoftheTalon],
      [RACE_UNDEAD, UNIT_Necromancer],
    ]);
    cleanUp.push(setIntervalIndefinite(20, () => {
      if (teleportations.length < players.length) {
        const okPlayers = teleportations.map((t) => t.owner);
        const missingPlayers = players.filter((p) => !okPlayers.includes(p));
        const loc = randomLocInRects(spawnRects);
        const player = pickRandom(missingPlayers);
        const maintainerUnitType = maintainerUnitTypes.get(player.race);

        const maintainers: Unit[] = [];
        const effects: Effect[] = [];
        const phaseAngle = GetRandomDirectionDeg();
        const maintainerCount = 1;
        for (let i = 0; i < maintainerCount; i++) {
          const spawnLoc = PolarProjection(loc, 200, phaseAngle + i * 360 / maintainerCount);
          const maintainer = Unit.create(
            player,
            maintainerUnitType.id,
            spawnLoc.x,
            spawnLoc.y,
            Angle(spawnLoc, loc),
          );
          maintainer.addAbility(ABILITY_ID_CHANNEL_UNIT);
          maintainer.issueImmediateOrder(OrderId.Channel);
          Effect.createAttachment(MODEL_MassTeleportTarget, maintainer, 'origin').destroy();
          maintainer.addAbility(ABILITY_MagicImmunityCreep.id);
          maintainers.push(maintainer);

          const shieldEffect = Effect.createAttachment(MODEL_DivineShieldTarget, maintainer, 'origin');

          buildTrigger((t) => {
            t.registerUnitEvent(maintainer, EVENT_UNIT_DEATH);
            t.addAction(() => {
              shieldEffect.destroy();
              t.destroy();
            });
          });
        }

        effects.push(Effect.create(MODEL_MassTeleportTo, loc.x, loc.y));
        const minimapIcon = createMinimapIconLoc(loc, 'enemyActive');

        const teleportData: typeof teleportations[number] = {
          maintainers,
          owner: player,
          effects,
          loc,
        };
        teleportations.push(teleportData);

        void waitUntil(2, () => {
          const allDead = maintainers.every((u) => !u.isAlive());
          if (allDead) {
            effects.forEach((e) => e.destroy());
            teleportations.splice(teleportations.indexOf(teleportData), 1);
            DestroyMinimapIcon(minimapIcon);
          }
          return allDead;
        });
      }
    }));

    // Append dead units to backlog for respawning
    const backlogUnits = new Map<MapPlayer, number[]>(players.map((p) => <[MapPlayer, number[]]>[p, []]));
    const backlogHeroes = new Map<MapPlayer, Unit[]>(players.map((p) => <[MapPlayer, Unit[]]>[p, []]));
    cleanUp.push(buildTrigger((t) => {
      players.forEach((p) => t.registerPlayerUnitEvent(p, EVENT_PLAYER_UNIT_DEATH, null));
      t.addCondition(() => {
        const unit = Unit.fromEvent();
        return heroes.includes(unit) || unitTypeSet.has(unit.typeId) && !unit.isUnitType(UNIT_TYPE_SUMMONED);
      });
      t.addAction(() => {
        const unit = Unit.fromEvent();
        if (unit.isHero()) {
          backlogHeroes.get(unit.owner).push(unit);
        } else {
          backlogUnits.get(unit.owner).push(unit.typeId);
        }
      });
    }));

    // Periodically spawn unit reinforcements
    const spawnHeroesOnly = false;
    const spawnHero = (hero: Unit, teleport: typeof teleportations[number]): void => {
      if (hero.isAlive()) return;
      const loc = PolarProjection(teleport.loc, GetRandomReal(0, 300), GetRandomDirectionDeg());
      hero.revive(loc.x, loc.y, false);
      hero.setPosition(loc.x, loc.y);
      hero.acquireRange = 10000;
      hero.resetCooldown();
      hero.setHeroLevel(hero.level + GetRandomInt(5, 8), true);
      prepareCrusader(hero);
      Effect.createAttachment(MODEL_MassTeleportCaster, hero, 'origin').destroy();
      hero.issueOrderAt(OrderId.Attack, lichKing.x, lichKing.y);
    };

    cleanUp.push(setIntervalIndefinite(5, () => {
      const spawnablePlayers = players.filter((p) => (
        backlogUnits.get(p).length > 0
        || backlogHeroes.get(p).length > 0
      ) && teleportations.some((t) => t.owner === p));

      if (spawnablePlayers.length > 0) {
        const player = pickRandom(spawnablePlayers);
        const teleport = teleportations.find((t) => t.owner === player);

        // Spawn non-Hero units
        if (!spawnHeroesOnly) {
          const unitTypes = backlogUnits.get(player);
          shuffleArray(unitTypes);
          const spawns = unitTypes.splice(0, 6);
          for (const typeId of spawns) {
            const loc = PolarProjection(teleport.loc, GetRandomReal(0, 300), GetRandomDirectionDeg());
            const unit = Unit.create(player, typeId, loc.x, loc.y, Angle(loc, lichKing));
            unit.acquireRange = 10000;
            prepareCrusader(unit);
            Effect.createAttachment(MODEL_MassTeleportCaster, unit, 'origin').destroy();
            unit.issueOrderAt(OrderId.Attack, lichKing.x, lichKing.y);
          }
        }

        // Spawn 1 hero unit
        const deadHeroes = backlogHeroes.get(player);
        if (deadHeroes.length > 0) {
          const revivedHeroes = spawnHeroesOnly ? deadHeroes : [pickRandom(deadHeroes)];
          for (const hero of revivedHeroes) {
            deadHeroes.splice(deadHeroes.indexOf(hero), 1);
            spawnHero(hero, teleport);
          }
        }
      }
    }));

    return {
      destroy: (): void => {
        teleportations.forEach((t) => {
          t.maintainers.forEach((u) => u.kill());
        });
        cleanUp.forEach((c) => c.destroy());
      },
    };
  }

  private collectSouls(): Destroyable {
    const { lichKing } = this.globals;
    this.heroSoulCollected = 0;
    // Leaderboard shows collected hero souls
    const board = Leaderboard.create();
    board.addItem(
      `Souls collected: ${this.heroSoulCollected}/${requiredHeroSouls}`,
      0,
      lichKing.owner,
    );
    board.display(true);
    board.setStyle(true, false, false, false);
    board.setItemStyle(0, true, false, false);
    board.setItemLabelColor(0, 255, 255, 255, 255);
    board.setItemValueColor(0, 255, 255, 255, 255);
    board.setPlayerBoard(lichKing.owner);

    // Collecting hero souls
    const trigger = buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const unit = Unit.fromEvent();
        return unit.owner.isPlayerEnemy(lichKing.owner) && unit.isHero() && !unit.isIllusion();
      });
      t.addAction(() => {
        createTextTag('+1', Unit.fromEvent(), TTSetting.heroSoul);
        this.heroSoulCollected = Math.min(this.heroSoulCollected + 1, requiredHeroSouls);
        board.setItemLabel(0, `Souls collected: ${this.heroSoulCollected}/${requiredHeroSouls}`);
      });
    });

    return {
      destroy: (): void => {
        board.display(false);
        board.destroy();
        trigger.destroy();
      },
    };
  }

  private tirionFrozen(onFrozen: () => unknown, afterFrozenSpeech: () => unknown): Destroyable & {unfreeze: () => Promise<void>, hasFreezed: () => boolean} {
    const { lichKing, tirion } = this.globals;
    const orderStunned = 851973; // https://www.hiveworkshop.com/threads/is-it-possible-to-detect-stun.322295/#post-3402696
    let freezed = false;
    let destroyed = false;
    setNeverDie(tirion, true);
    const trigger = buildTrigger((t) => {
      t.registerUnitEvent(tirion, EVENT_UNIT_ISSUED_ORDER);
      t.registerUnitEvent(tirion, EVENT_UNIT_DAMAGING);
      t.addCondition(() => tirion.currentOrder === orderStunned && tirion.getAbilityLevel(BUFF_ID_FROZEN) > 0);
      t.addAction(() => {
        t.destroy();
        tirion.paused = true;
        tirion.setTimeScale(0);
        tirion.invulnerable = true;
        freezed = true;
        void (async (): Promise<void> => {
          if (!debug1) {
            await playSpeech(lichKing, dialogues[1]);
          }
          if (!destroyed) afterFrozenSpeech();
        })();
        onFrozen();
      });
    });
    return {
      destroy: (): void => {
        destroyed = true;
        trigger.destroy();
        tirion.paused = false;
        tirion.setTimeScale(1);
        tirion.invulnerable = false;
      },
      unfreeze: async (): Promise<void> => {
        if (!debug2) {
          await playSpeech(tirion, dialogues[7]);
          await sleep(2);
        }

        tirion.removeBuffs(true, true);
        tirion.setTimeScale(1);
        tirion.setAnimation('spell slam');
        for (let i = 0; i < 4; i++) {
          const loc = PolarProjection(tirion, 50, i * 360 / 4);
          const eff1 = Effect.create(MODEL_FreezingBreathMissile, loc.x, loc.y);
          eff1.setTimeScale(0.7);
          eff1.scale = 2;
          eff1.z = GetRandomReal(50, 100);
          setTimeout(0.03, () => eff1.destroy());
        }
        const eff2 = Effect.create(MODEL_Resurrecttarget, tirion.x, tirion.y);
        eff2.destroy();
        PlaySound('Abilities\\Spells\\Undead\\FrostNova\\FrostNovaTarget1');

        await sleep(1);
        tirion.paused = false;
        tirion.invulnerable = false;
        setNeverDie(tirion, false);
      },
      hasFreezed: (): boolean => freezed,
    };
  }

  private lichKingDialogues(): Destroyable[] {
    const { lichKing } = this.globals;
    const cleanUp: Destroyable[] = [];

    // Lich King kills dialogue
    const customUnitPlayed = new Set<Unit>();
    let randomIdx = 0;
    let nextPlayAtS = getTimeS();
    cleanUp.push(buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const victim = Unit.fromEvent();
        const killer = Unit.fromHandle(GetKillingUnit());
        return victim.isHero() && !victim.isIllusion()
            && killer.owner === lichKing.owner
            && victim.owner.isPlayerEnemy(lichKing.owner)
            && !speechQueue.isRunning();
      });
      t.addAction(() => {
        const victim = Unit.fromEvent();
        if (victim.typeId === UNIT_EvilSylvanas.id
          && !customUnitPlayed.has(victim)
          && Distance(victim, lichKing) < 500
        ) {
          customUnitPlayed.add(victim);
          void playSpeech(lichKing, customKillDialogues[0]);
        } else if (nextPlayAtS < getTimeS()) {
          void playSpeech(lichKing, killDialogues[randomIdx % killDialogues.length]);
          randomIdx++;
          nextPlayAtS = getTimeS() + 60;
        }
      });
    }));

    // Lich King death dialogue
    cleanUp.push(buildTrigger((t) => {
      t.registerUnitEvent(lichKing, EVENT_UNIT_DEATH);
      t.addAction(() => {
        void playSpeech(lichKing, dialogues[8], null, { isQueue: false });
      });
    }));

    // Lich King animated dead
    cleanUp.push(buildTrigger((t) => {
      t.registerUnitEvent(lichKing, EVENT_UNIT_SPELL_EFFECT);
      t.addCondition(() => GetSpellAbilityId() === ABILITY_ID_ARMY_OF_DEATH && !speechQueue.isRunning());
      t.addAction(() => {
        if (getTimeS() < 60) return;
        void playSpeech(lichKing, dialogues[9]);
        t.enabled = false;
        setTimeout(120, () => t.enabled = true);
      });
    }));

    return cleanUp;
  }

  private morphUnitsResetAcquireRange(): Destroyable {
    const { lichKing } = this.globals;
    return buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SPELL_EFFECT);
      t.addCondition(() => Unit.fromEvent().owner.isPlayerEnemy(lichKing.owner));
      t.addAction(() => {
        Unit.fromEvent().acquireRange = 10000;
      });
    });
  }

  private async lichKingGoToCenterRaiseHeroes(heroes: Unit[]): Promise<Destroyable> {
    const { lichKing, tirion } = this.globals;
    // Lich King runs to center
    const arenaCenter = centerLocRect(gg_rct_Frozen_Throne_center);
    lichKing.paused = false;
    lichKing.setPathing(false);
    removeGuardPosition(lichKing);

    let restoreOwner = false;
    if (lichKing.owner === playerMain) {
      lichKing.owner = playerLichKingNpc;
      lichKing.disableAbility(ABILITY_ID_ARMY_OF_DEATH, true, false);
      restoreOwner = true;
    }

    // Lich King casts raise hero
    const lichKingFacing = 270;
    setGuardPosition(lichKing, arenaCenter, lichKingFacing, { maxRadius: 25 });
    lichKing.issueOrderAt(ORDER_move, arenaCenter.x, arenaCenter.y);
    await waitUntil(1, () => Distance(lichKing, arenaCenter) < 50);

    if (restoreOwner) {
      lichKing.owner = playerMain;
      lichKing.disableAbility(ABILITY_ID_ARMY_OF_DEATH, false, false);
    }

    lichKing.removeAbility(ABILITY_Locust.id);
    lichKing.paused = true;
    lichKing.facing = lichKingFacing;
    lichKing.setAnimation(21);

    const effect1 = Effect.create('Models\\BlueUnsummon\\BlueUnsummon.mdx', 0, 0);
    const effect2 = Effect.create(MODEL_BloodLustTarget, 0, 0);
    const effect3 = Effect.create(MODEL_BloodLustTarget, 0, 0);
    const effects: Effect[] = [effect1, effect2, effect3];
    const timers: Timer[] = [];

    const raiseDeadSound = Sound.create('QuestSounds\\__refined\\main-fight\\lichking-animated-dead-effect.mp3', true, true, false, 1, 1, 'DefaultEAXON');
    raiseDeadSound.setVolume(20);
    raiseDeadSound.setPosition(lichKing.x, lichKing.y, 450);
    raiseDeadSound.start();

    const lightnings = new Map<Unit, lightning>();
    timers.push(setIntervalIndefinite(1, () => {
      const swordLoc = getLichKingSpellChannelSwordLoc(lichKing, lichKingFacing);
      effect1.x = swordLoc.bottom.x;
      effect1.y = swordLoc.bottom.y;
      effect1.z = swordLoc.bottom.z;
      effect2.x = swordLoc.bottom.x;
      effect2.y = swordLoc.bottom.y;
      effect2.z = swordLoc.bottom.z;
      effect3.x = swordLoc.top.x;
      effect3.y = swordLoc.top.y;
      effect3.z = swordLoc.top.z;

      for (const hero of heroes) {
        if (hero === tirion) continue;
        if (!hero.isAlive() && GetRandomInt(1, 2) !== 1 || hero.isAlive() && !hero.paused) {
          if (lightnings.get(hero)) {
            DestroyLightning(lightnings.get(hero));
            lightnings.delete(hero);
          }
          continue;
        }

        Effect.create(MODEL_AnimateDeadTarget, hero.x, hero.y).destroy();
        if (lightnings.has(hero)) {
          continue;
        }
        const l = AddLightningEx(
          LIGHTNING_ManaDrain.code,
          false,
          hero.x,
          hero.y,
          hero.z,
          swordLoc.top.x,
          swordLoc.top.y,
          swordLoc.top.z,
        );
        lightnings.set(hero, l);
      }
    }));

    return {
      destroy: (): void => {
        effects.forEach((e) => e.destroy());
        timers.forEach((t) => {
          t.pause();
          t.destroy();
        });
        raiseDeadSound.stop(true, true);
        lichKing.setPathing(true);
        lichKing.paused = false;
        for (const l of lightnings.values()) {
          DestroyLightning(l);
        }
      },
    };
  }
}

interface LocXYZ extends Loc {
  z: number;
}

function getLichKingSpellChannelSwordLoc(lichKing: Unit, facing: number = lichKing.facing): { top: LocXYZ; bottom: LocXYZ } {
  const scale = getUnitScale(lichKing) / 1.2;
  const swordLocXy = PolarProjection(lichKing, scale * 100, facing - 10);
  const swordLocZ = locZ(lichKing) + scale * 450;
  return {
    top: { ...swordLocXy, z: swordLocZ },
    bottom: { ...swordLocXy, z: swordLocZ - scale * 150 },
  };
}
