import { Weather } from 'events/weather/weather';
import {
  ABILITY_ID_CHANNEL_UNIT,
  playerHumanAlliance, playerNightElf, playerOrcishHorde, playerUndeadForsaken,
} from 'lib/constants';
import {
  Angle, Destroyable, Loc, PolarProjection, randomLocInRects,
} from 'lib/location';
import { log } from 'lib/log';
import { getDialogues } from 'lib/quests/dialogue_sound';
import { QuestLog } from 'lib/quests/quest_log';
import {
  cinematicFadeIn, cinematicFadeOut, cinematicMode, createMinimapIconLoc, setMinimapIconUnit,
} from 'lib/quests/utils';
import {
  ABILITY_Bearform, ABILITY_MagicImmunityCreep, ABILITY_RavenFormDruid, ABILITY_StoneForm,
} from 'lib/resources/war3-abilities';
import {
  MODEL_DivineShieldTarget, MODEL_FreezingBreathMissile, MODEL_MassTeleportCaster, MODEL_MassTeleportTarget, MODEL_MassTeleportTo,
  MODEL_Resurrecttarget,
} from 'lib/resources/war3-models';
import {
  UNIT_DruidoftheTalon, UNIT_Necromancer, UNIT_Shaman, UNIT_Sorceress,
  UNIT_TYPE,
} from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { createTextTag, TTSetting } from 'lib/texttag';
import { buildTrigger, setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { getUnitsInRect } from 'lib/unit';
import {
  AsyncQueue,
  pickRandom, shuffleArray, waitUntil,
} from 'lib/utils';
import { IntroCinematic } from 'quests/intro-cinematic/intro-cinematic';
import {
  Camera, Effect, Leaderboard, MapPlayer, sleep, Unit,
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
        speaker: 'Highlord Tirion Fordring',
        text: 'LIGHT GRANT ME ONE FINAL BLESSING! GIVE ME THE STRENGTH... TO SHATTER THESE BONDS!',
        fileName: '2-tirion.mp3',
      },
    ],
  },
);

function prepareCrusader(unit: Unit): void {
  unit.addAnimationProps('ready', true);
  unit.removeAbility(ABILITY_Bearform.id);
  unit.removeAbility(ABILITY_RavenFormDruid.id);
  unit.removeAbility(ABILITY_StoneForm.id);
  unit.mana = unit.maxMana;
}

const requiredHeroSouls = 20;

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

    // Loop for infinite fight attempts
    for (;;) {
      // Initial UI setup
      await sleep(2);
      cinematicFadeIn(3);
      cinematicMode(false, 1);
      Camera.reset(0);
      Camera.panTimed(lichKing.x, lichKing.y, 0, undefined);
      Weather.changeWeather();
      setMinimapIconUnit(lichKing, 'boss');

      await sleep(2);
      if (!questLog) {
        questLog = await QuestLog.create({
          name: 'Fall of the Lich King',
          // eslint-disable-next-line max-len
          description: "Champions of the Argent Tournament, led by Tirion Fordring, stormed Icecrown Citadel and defeated the Lich King's mightiest servants and ascended the Frozen Throne. Atop the spire, the Lich King had been long waiting for Tirion's assault, knowing that Tirion would bring with him Azeroth's greatest heroes, who could then be killed and resurrected as powerful masters of the Scourge.",
          icon: 'ReplaceableTextures/CommandButtons/BTNLichKing.blp',
          items: [`Collect ${requiredHeroSouls} souls of Azeroth's greatest heroes`],
        });
      }

      const cleanUp: Destroyable[] = [];
      cleanUp.push(this.collectSouls());

      tirionUnfreeze = this.tirionFrozen();

      // Wait till fight begins
      const crusaders = getUnitsInRect(GetWorldBounds(), (u) => u.owner.isPlayerEnemy(lichKing.owner) && u.isAlive());
      await this.waitForBattle(crusaders);

      cleanUp.push(this.loopSpawnReinforcements([
        playerHumanAlliance,
        playerOrcishHorde,
        playerUndeadForsaken,
        playerNightElf,
      ], new Set(crusaders.map((u) => u.typeId)), crusaders.filter((c) => c.isHero())));

      // Wait till lich king dies or enough hero souls collected
      await waitUntil(1, () => !lichKing.isAlive() || this.heroSoulCollected >= requiredHeroSouls);

      if (lichKing.isAlive() && this.heroSoulCollected >= requiredHeroSouls) {
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
        IntroCinematic.lichKingSit(lichKing);
        cleanUp.forEach((t) => t.destroy());
        tirionUnfreeze.destroy();
      }
    }

    await questLog.completeWithRewards([]);

    // Wait until all crusaders are dead
    await waitUntil(1, () => getUnitsInRect(
      GetWorldBounds(),
      (u) => u.owner.isPlayerEnemy(lichKing.owner) && u.isAlive() && u !== tirion,
    ).length === 0);

    await tirionUnfreeze.unfreeze();
    lichKing.setHeroLevel(80, true);
    lichKing.life = lichKing.maxLife;
    lichKing.mana = lichKing.maxMana;
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
      void this.asyncQueue.addJob(() => playSpeech(tirion, dialogues[0], null), '0-tirion');
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
        const maintainerCount = 3;
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
    cleanUp.push(setIntervalIndefinite(5, () => {
      const spawnablePlayers = players.filter((p) => (
        backlogUnits.get(p).length > 0
        || backlogHeroes.get(p).length > 0
      ) && teleportations.some((t) => t.owner === p));

      if (spawnablePlayers.length > 0) {
        const player = pickRandom(spawnablePlayers);

        // Spawn non-Hero units
        const unitTypes = backlogUnits.get(player);
        shuffleArray(unitTypes);
        const spawns = unitTypes.splice(0, 6);
        const teleport = teleportations.find((t) => t.owner === player);
        for (const typeId of spawns) {
          const loc = PolarProjection(teleport.loc, GetRandomReal(0, 300), GetRandomDirectionDeg());
          const unit = Unit.create(player, typeId, loc.x, loc.y, Angle(loc, lichKing));
          unit.acquireRange = 10000;
          prepareCrusader(unit);
          Effect.createAttachment(MODEL_MassTeleportCaster, unit, 'origin').destroy();
          unit.issueOrderAt(OrderId.Attack, lichKing.x, lichKing.y);
        }

        // Spawn 1 hero unit
        const deadHeroes = backlogHeroes.get(player);
        if (deadHeroes.length > 0) {
          const hero = pickRandom(deadHeroes);
          deadHeroes.splice(deadHeroes.indexOf(hero), 1);

          const loc = PolarProjection(teleport.loc, GetRandomReal(0, 300), GetRandomDirectionDeg());
          hero.revive(loc.x, loc.y, false);
          hero.setPosition(loc.x, loc.y);
          hero.acquireRange = 10000;
          hero.resetCooldown();
          hero.setHeroLevel(hero.level + 5, true);
          prepareCrusader(hero);
          Effect.createAttachment(MODEL_MassTeleportCaster, hero, 'origin').destroy();
          hero.issueOrderAt(OrderId.Attack, lichKing.x, lichKing.y);
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
    // Leaderboard shows collected hero souls
    const board = Leaderboard.create();
    board.addItem('Champion souls collected', this.heroSoulCollected, lichKing.owner);
    board.display(true);
    board.setStyle(true, false, true, false);
    board.setItemStyle(0, true, true, false);
    board.setItemLabelColor(0, 255, 255, 255, 255);
    board.setItemValueColor(0, 255, 255, 255, 255);
    board.setPlayerBoard(lichKing.owner);

    // Collecting hero souls
    this.heroSoulCollected = 0;
    const trigger = buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH);
      t.addCondition(() => {
        const unit = Unit.fromEvent();
        return unit.owner.isPlayerEnemy(lichKing.owner) && unit.isHero() && !unit.isIllusion();
      });
      t.addAction(() => {
        createTextTag('+1', Unit.fromEvent(), TTSetting.heroSoul);
        this.heroSoulCollected++;
        board.setItemValue(0, this.heroSoulCollected);
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

  private tirionFrozen(): Destroyable & {unfreeze: () => Promise<void>} {
    const { lichKing, tirion } = this.globals;
    const orderStunned = 851973; // https://www.hiveworkshop.com/threads/is-it-possible-to-detect-stun.322295/#post-3402696
    const frozenBuffId = FourCC('B000');
    const trigger = buildTrigger((t) => {
      t.registerUnitEvent(tirion, EVENT_UNIT_ISSUED_ORDER);
      t.registerUnitEvent(tirion, EVENT_UNIT_DAMAGING);
      t.addCondition(() => tirion.currentOrder === orderStunned && tirion.getAbilityLevel(frozenBuffId) > 0);
      t.addAction(() => {
        log('Tirion is frozen');
        t.destroy();
        tirion.paused = true;
        tirion.setTimeScale(0);
        tirion.invulnerable = true;
        void this.asyncQueue.addJob(() => playSpeech(lichKing, dialogues[1], null), '1-lichking');
      });
    });
    return {
      destroy: (): void => {
        trigger.destroy();
        tirion.paused = false;
        tirion.setTimeScale(1);
        tirion.invulnerable = false;
      },
      unfreeze: async (): Promise<void> => {
        Camera.pan(tirion.x, tirion.y, null);
        await this.asyncQueue.addJob(() => playSpeech(tirion, dialogues[2], null), '2-tirion');
        await sleep(2);

        tirion.removeAbility(frozenBuffId);
        tirion.setTimeScale(1);
        tirion.setAnimation('spell slam');
        const eff = Effect.create(MODEL_FreezingBreathMissile, tirion.x, tirion.y);
        setTimeout(0.02, () => eff.destroy());
        Effect.create(MODEL_Resurrecttarget, tirion.x, tirion.y).destroy();
        tirion.setHeroLevel(80, true);
        tirion.life = tirion.maxLife;
        tirion.mana = tirion.maxMana;
        // tirion.maxLife *= 10;
        // tirion.setAttackCooldown(tirion.getAttackCooldown(0) / 3, 0);
        // tirion.setBaseDamage(tirion.getBaseDamage(0) * 10, 0);

        await sleep(1);
        tirion.paused = false;
        tirion.invulnerable = false;
      },
    };
  }
}
