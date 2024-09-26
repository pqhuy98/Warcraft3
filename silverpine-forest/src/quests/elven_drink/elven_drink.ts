/* eslint-disable max-len */
import { MulticastNoTarget } from 'abilities/multicast/no-target';
import { MulticastPoint } from 'abilities/multicast/point';
import { MulticastUnit } from 'abilities/multicast/unit';
import { playerMonsters } from 'lib/constants';
import { generateFogLocsBehindTrees } from 'lib/destructable';
import {
  currentLoc, Destroyable, DistanceBetweenLocs,
} from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import { QuestLog } from 'lib/quests/quest_log';
import { TalkGroup } from 'lib/quests/talk_group';
import { cinematicFadeIn, cinematicFadeOut, setMinimapIconUnit } from 'lib/quests/utils';
import { neutralHostileTypes } from 'lib/resources/neutral_hostile';
import {
  ABILITY_MagicImmunity, ABILITY_MagicImmunityCreep, ABILITY_MagicImmunityDragons, ABILITY_ReincarnationCreep, ABILITY_ReincarnationGeneric,
} from 'lib/resources/war3-abilities';
import { removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import {
  buildTrigger, setIntervalFixedCount, setIntervalIndefinite, setTimeout,
} from 'lib/trigger';
import {
  BUFF_ID_GENERIC, enumUnitAbilities,
  getUnitsInRect,
  isBuilding,
  setNeverDie,
} from 'lib/unit';
import { shuffleArray, waitUntil } from 'lib/utils';
import {
  Group, sleep, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

type MonsterType = typeof neutralHostileTypes[number]

const hardestMinimumLife = 2000;
const hardestMinimumDamage = 100;

const elfFirstSound = createDialogSound(
  'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-1.mp3',
  'Thalandor',
  'Greetings, traveler! I am Thalandor, esteemed brewer of the finest elixirs in all of Silvermoon. You must try my latest creation—it\'s a blend so exquisite, it will make you see the world in a whole new light!',
);

const elfAgainSounds = [
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-3.mp3',
    'Thalandor',
    'Look who\'s back from their unexpected \'vacation\'! Ready to indulge in another taste of unparalleled brilliance—or should I say, visions?',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-2.mp3',
    'Thalandor',
    'Ah, you\'ve returned! I see my brew left a lasting impression... or a series of them. Care for another round of passionate, unforgettable dreams?',
  ),
  // createDialogSound(
  //   'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-4.mp3',
  //   'Thalandor',
  //   'Remarkable! You survived the soul-stirring experience last time. Naturally, you\'d crave more of my exquisite, reality-bending creation.',
  // ),
  // createDialogSound(
  //   'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-6.mp3',
  //   'Thalandor',
  //   'Well, you\'ve re-emerged from whatever dreams my concoction blessed you with! Eager for another round of ethereal escapades?',
  // ),
  // createDialogSound(
  //   'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-7.mp3',
  //   'Thalandor',
  //   'Ah, there you are again! My neighbor, Lyndor, sipped my brew and swore he spent an afternoon having tea with a dragon; shall we see where it takes you this time?',
  // ),
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-8.mp3',
    'Thalandor',
    'Ah, back for more, are we? You remind me of brave Sir Lorsan who, after one sip, claimed he single-handedly defeated an army of orcs—while safely tucked in his bed, of course. Care for another round?',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-9.mp3',
    'Thalandor',
    'Ah, welcome back, brave soul! You know, the last villager claimed he saw a dozen Hydras dancing in his garden after just one sip. Care to challenge your senses again?',
  ),
  // createDialogSound(
  //   'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-10.mp3',
  //   'Thalandor',
  //   'Look who\'s returned! A traveler from Lordaeron swore he conversed with an army of spectral orcs after enjoying my brew. Shall we see what marvels lie in store for you this time?',
  // ),
  // createDialogSound(
  //   'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-11.mp3',
  //   'Thalandor',
  //   'Welcome, brave soul! My drink apparently made an orc compose poetry about rainbows—wonder what it will inspire in you this time! Ready for another sip?',
  // ),
  // createDialogSound(
  //   'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-12.mp3',
  //   'Thalandor',
  //   'Well, if it isn\'t my most daring patron! One sip of my brew apparently convinced a paladin that his hammer was singing to him. Shall we toast to more enchanting experiences?',
  // ),
  // createDialogSound(
  //   'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-13.mp3',
  //   'Thalandor',
  //   'Ah, you\'ve returned! The last knight who tried my brew claimed he battled shadowy nightmares for three nights straight. Ready for another encounter with the surreal?',
  // ),
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-14.mp3',
    'Thalandor',
    'Ah, you\'ve returned, brave soul! Last time, you spoke of a harrowing dream, surrounded by endless horrors. Dare you face another round?',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-15.mp3',
    'Thalandor',
    'I see you seek more of my brew. Be cautious—your nightmares grow darker with each drink. Ready to face them again?',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-16.mp3',
    'Thalandor',
    'Each sip plunges you deeper into more terrifying dreams. Are you sure you want to continue?',
  ),
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-17.mp3',
    'Thalandor',
    'Beware—your last nightmares were enough to shake even the strongest. This next sip may be your most frightening yet.',
  ),
  // createDialogSound(
  //   'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-18.mp3',
  //   'Thalandor',
  //   'Each time you drink, the horrors you face become more dreadful. Ready to confront the darkness again?',
  // ),
  createDialogSound(
    'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-19.mp3',
    'Thalandor',
    'I must warn you—your nightmares have grown alarmingly intense. Each drink pulls you deeper into a world of unspeakable horrors. Tread carefully, for the terror that awaits is beyond anything you\'ve faced.',
  ),
];

const elfLastSound = createDialogSound(
  'QuestSounds\\__refined\\elven-drink\\elven-drink-elf-20.mp3',
  'Thalandor',
  'This is your final drink, brave soul. Your last nightmares were filled with relentless, swarming monsters. I fear the darkness you will encounter now may be too great to endure. Drink, if you must, but know this is the last time I can in good conscience offer you my elixir.',
);

shuffleArray(elfAgainSounds);

export class ElvenDrink extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    questGiver: Unit
  }) {
    super(globals);
    neutralHostileTypes.sort((u1, u2) => u1.hp - u2.hp);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.register();
  }

  private async register(): Promise<void> {
    const { questGiver } = this.globals;
    questGiver.name = 'Thalandor';
    questGiver.setField(UNIT_RF_CAST_POINT, 0);
    questGiver.setField(UNIT_RF_CAST_BACK_SWING, 0);
    questGiver.addAbility(FourCC('A00R'));
    setNeverDie(questGiver, true);

    await this.waitDependenciesDone();

    const maxLevel = 10;

    const questLogMap = new Map<number, QuestLog>();

    let firstElfSpeech = true;

    for (let level = 1; level <= maxLevel; level++) {
      const traveler = await this.talkToQuestGiver(questGiver, true);
      traveler.shareVision(questGiver.owner, true);

      const elfSpeech = firstElfSpeech
        ? elfFirstSound
        : (level < maxLevel)
          ? elfAgainSounds[level % elfAgainSounds.length]
          : elfLastSound;

      const talkGroup = new TalkGroup([traveler, questGiver]);
      await talkGroup.speak(questGiver, elfSpeech, traveler, traveler);
      firstElfSpeech = false;

      await sleep(0.5);

      setIntervalFixedCount(1.5 / level, level, () => questGiver.issueTargetOrder(OrderId.Drunkenhaze, traveler));
      await sleep(2);

      if (!questLogMap.has(level)) {
        const objective = `Remain standing until the effect of ${level} Elven's Brew${level > 1 ? 's' : ''} wear${level > 1 ? 's' : ''} off`;
        questLogMap.set(level, await QuestLog.create({
          name: `Elven drink${level > 1 ? `, part ${level}/${maxLevel}` : ''}`,
          description: 'Thalandor, esteemed brewer of the finest elixirs in all of Silvermoon, invited you to try his new elixir',
          icon: 'ReplaceableTextures\\CommandButtons\\BTNStrongDrink.blp',
          items: [objective],
        }));
      }

      const questLog = questLogMap.get(level);
      talkGroup.finish();

      const monsterTypesPerLevel = Math.ceil(neutralHostileTypes.length / maxLevel);
      const monsterTypes = neutralHostileTypes.slice((level - 1) * monsterTypesPerLevel, level * monsterTypesPerLevel);
      const completed = await this.start(level, maxLevel, traveler, monsterTypes, 6, 6);

      if (completed) {
        const rewards: string[] = [];

        const bonusLife = level * 50;
        traveler.maxLife += bonusLife;
        rewards.push(`+${bonusLife} max life`);

        const bonusDamage = 30;
        for (let i = 0; i < 2; i++) {
          traveler.setBaseDamage(traveler.getBaseDamage(i) + bonusDamage, i);
        }
        rewards.push(`+${bonusDamage} base damage`);

        await questLog.completeWithRewards(rewards);
      } else {
        level--;
      }
    }
  }

  start(
    level: number,
    maxLevel: number,
    traveler: Unit,
    monsterTypes: MonsterType[],
    unitPerType: number,
    spawnPerSec: number,
  ): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
    return new Promise(async (resolve) => {
      cinematicFadeOut(1);
      await sleep(3);

      AbortCinematicFadeBJ();
      dream(0, 0, 0, GetRandomInt(0, 100), GetRandomInt(0, 100), GetRandomInt(0, 100), 0, GetRandomInt(85, 90), 4);
      setTimeout(4, () => EnableUserUI(true));

      // Hide all units on map
      const mapUnits = getUnitsInRect(GetWorldBounds(), (u) => u !== traveler);
      mapUnits.forEach((u) => {
        if (!isBuilding(u)) {
          u.show = false;
          u.paused = true;
        } else {
          u.armor += 999;
        }
      });

      // Save traveler's stats for reset after death
      const oldPosition = currentLoc(traveler);
      const oldCooldowns = new Map<number, number>();
      enumUnitAbilities(traveler, (_, id) => {
        oldCooldowns.set(id, traveler.getAbilityCooldownRemaining(id));
        traveler.mana = traveler.maxMana;
      });

      // Character becomes more powerful
      traveler.life = traveler.maxLife;
      traveler.mana = traveler.maxMana;

      const toClean: Destroyable[] = [];

      enumUnitAbilities(traveler, (_, id) => {
        toClean.push(MulticastNoTarget.register(id, traveler));
        toClean.push(MulticastPoint.register(id, traveler));
        toClean.push(MulticastUnit.register(id, traveler));
      });

      const cooldownResetIntervalS = 3;
      toClean.push(
        setIntervalIndefinite(cooldownResetIntervalS, () => {
          traveler.resetCooldown();
          traveler.mana = traveler.maxMana;
        }),
      );

      toClean.push(
        buildTrigger((t) => {
          t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
          t.addCondition(() => GetKillingUnit() === traveler.handle);
          t.addAction(() => {
            traveler.life += 0.1 * Unit.fromEvent().maxLife;
          });
        }),
      );

      // Enemy spawns
      traveler.shareVision(playerMonsters, true);

      const summons = Group.create();
      const aliveSpawns = Group.create();
      const deadSpawns = Group.create();
      const farSpawns = Group.create();
      toClean.push(aliveSpawns);
      toClean.push(deadSpawns);

      const monsterCount: {typeId: number, count: number}[] = monsterTypes.map(({ id }) => ({
        typeId: id,
        count: unitPerType,
      }));

      // Spawn monsters
      const minimumLife = Math.round(level / maxLevel * hardestMinimumLife);
      const minimumDamage = Math.round(level / maxLevel * hardestMinimumDamage);

      let spawnDone = false;
      toClean.push(setIntervalIndefinite(1, () => {
        spawnDone = monsterCount.length === 0;
        if (monsterCount.length === 0 && farSpawns.size === 0) {
          spawnDone = true;
          return;
        }

        let neededLocCount = 1; // 1 for teleporting farSpawns
        if (monsterCount.length > 0) {
          neededLocCount = monsterCount[0].count;
        }

        // Find fog locations behind trees
        const locs = generateFogLocsBehindTrees(1000, traveler, traveler.owner, Math.min(spawnPerSec, neededLocCount));
        if (locs.length === 0) {
          return;
        }

        for (const loc of locs) {
          if (monsterCount.length > 0) {
            const { typeId } = monsterCount[0];
            const creep = Unit.create(playerMonsters, typeId, loc.x, loc.y);
            creep.removeAbility(ABILITY_ReincarnationCreep.id);
            creep.removeAbility(ABILITY_ReincarnationGeneric.id);
            creep.removeAbility(ABILITY_MagicImmunity.id);
            creep.removeAbility(ABILITY_MagicImmunityCreep.id);
            creep.removeAbility(ABILITY_MagicImmunityDragons.id);

            creep.canSleep = false;
            creep.maxLife = Math.max(minimumLife, creep.maxLife);
            creep.life = creep.maxLife;
            for (let idx = 0; idx < 2; idx++) {
              creep.setBaseDamage(Math.max(creep.getBaseDamage(idx), minimumDamage), idx);
            }

            creep.issueTargetOrder(OrderId.Attack, traveler);
            aliveSpawns.addUnit(creep);
          }

          if (farSpawns.size > 0) {
            // Also teleport all far creeps here
            farSpawns.for(() => {
              Unit.fromEnum().setPosition(loc.x, loc.y);
            });
            farSpawns.clear();
          }
        }
        if (monsterCount.length > 0) {
          monsterCount[0].count -= locs.length;
          if (monsterCount[0].count <= 0) {
            monsterCount.splice(0, 1);
          }
        }
      }));

      // Manage existing spawns
      toClean.push(setIntervalIndefinite(1.1, () => {
        // Manage existing spawns
        aliveSpawns.for(() => {
          const creep = Unit.fromEnum();
          if (!creep.isAlive()) {
            aliveSpawns.removeUnit(creep);
            deadSpawns.addUnit(creep);
            removeGuardPosition(creep);
          } else {
            setGuardPosition(creep, traveler, 0);
            if (DistanceBetweenLocs(creep, traveler) > 2000) {
              farSpawns.addUnit(creep);
            }
          }
        });
      }));

      // Also add summons to this list.
      toClean.push(buildTrigger((t) => {
        t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON);
        t.addCondition(() => [playerMonsters, traveler.owner].includes(Unit.fromHandle(GetSummoningUnit()).owner));
        t.addAction(() => {
          const summoned = Unit.fromHandle(GetSummonedUnit());
          summons.addUnit(summoned);
          summoned.applyTimedLife(BUFF_ID_GENERIC, cooldownResetIntervalS * 2);
        });
      }));

      // Common clean up function
      const cleanUp = (removeSpawns: boolean): void => {
        mapUnits.forEach((u) => {
          if (!isBuilding(u)) {
            u.show = true;
            u.paused = false;
          } else {
            u.armor -= 999;
          }
        });
        if (removeSpawns) {
          summons.for(() => Unit.fromEnum().destroy());
          aliveSpawns.for(() => Unit.fromEnum().destroy());
          deadSpawns.for(() => Unit.fromEnum().destroy());
        } else {
          summons.for(() => Unit.fromEnum().kill());
          aliveSpawns.for(() => Unit.fromEnum().kill());
        }
        toClean.forEach((t) => t.destroy());
      };

      // Traveler must not die
      let failed = false;
      toClean.push(buildTrigger((t) => {
        t.registerDeathEvent(traveler);
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        t.addAction(async () => {
          failed = true;
          cinematicFadeOut(3);

          await sleep(5);

          cleanUp(true);

          traveler.revive(oldPosition.x, oldPosition.y, false);
          traveler.mana = traveler.maxMana;

          PanCameraToTimed(oldPosition.x, oldPosition.y, 0);

          // restore cooldowns back to old
          for (const [abilityId, oldCooldown] of oldCooldowns) {
            traveler.startAbilityCooldown(abilityId, oldCooldown);
          }

          cinematicFadeIn(3);
          resolve(false);
        });
      }));

      await waitUntil(3, () => {
        if ((spawnDone && aliveSpawns.size === 0) || failed) return true;
        if (spawnDone && aliveSpawns.size > 0) {
          aliveSpawns.for(() => {
            Unit.fromEnum().shareVision(traveler.owner, true);
            setMinimapIconUnit(Unit.fromEnum(), 'enemyStatic');
          });
        }
        return false;
      });
      if (!failed) {
        cleanUp(false);
        CinematicFadeBJ(bj_CINEFADETYPE_FADEIN, 1, 'ReplaceableTextures\\CameraMasks\\DreamFilter_Mask.blp', 0, 0, 0, 50);
        resolve(true);
      }
    });
  }
}

function dream(
  r0: number,
  g0: number,
  b0: number,
  r1: number,
  g1: number,
  b1: number,
  trans0: number,
  trans1: number,
  duration: number,
): void {
  SetCineFilterTexture('ReplaceableTextures\\CameraMasks\\White_mask.blp');
  SetCineFilterBlendMode(BLEND_MODE_BLEND);
  SetCineFilterTexMapFlags(TEXMAP_FLAG_NONE);
  SetCineFilterStartUV(0, 0, 1, 1);
  SetCineFilterEndUV(0, 0, 1, 1);
  SetCineFilterStartColor(PercentTo255(r0), PercentTo255(g0), PercentTo255(b0), PercentTo255(100.0 - trans0));
  SetCineFilterEndColor(PercentTo255(r1), PercentTo255(g1), PercentTo255(b1), PercentTo255(100.0 - trans1));
  SetCineFilterDuration(duration);
  DisplayCineFilter(true);
}
