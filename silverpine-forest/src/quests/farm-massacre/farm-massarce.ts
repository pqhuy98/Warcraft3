import { lockCameraBound, panCameraSmart, restoreCameraBound } from 'lib/camera';
import {
  mainPlayer, neutralPassive, playerForsaken, playerHumanAlliance,
} from 'lib/constants';
import {
  centerLocRect, isLocInRect, PolarProjection, tempLocation,
} from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import { cinematicFadeOut, cinematicMode } from 'lib/quests/utils';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import { ABILITY_DetectMagicSentinel, ABILITY_Locust } from 'lib/resources/war3-abilities';
import {
  UNIT_Abomination, UNIT_CryptFiend, UNIT_Gargoyle, UNIT_Ghoul, UNIT_Necromancer, UNIT_SkeletalArcher, UNIT_SkeletalMarksman, UNIT_SkeletalOrc,
  UNIT_Zombie,
} from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { removeRespawn } from 'lib/systems/hearth_stone';
import { removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { Flag, setUnitFlag } from 'lib/systems/unit_user_data_flag';
import { setIntervalIndefinite, setTimeout } from 'lib/trigger';
import {
  getUnitsInRangeOfLoc, getUnitsInRect, getUnitsOfPlayer, isBuilding,
} from 'lib/unit';
import { pickRandom, waitUntil, waitUntilAsync } from 'lib/utils';
import { sleep, Sound, Unit } from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base';

const footmanSound = createDialogSound(
  'QuestSounds\\__refined\\farm-massacre\\farm-massacre-footman-1.mp3',
  'Footman',
  'Arghh... They came... everyone... dead...',
);
footmanSound.setVolume(50);
const johnSound = createDialogSound(
  'QuestSounds\\__refined\\farm-massacre\\farm-massacre-john-1.mp3',
  'Villager John',
  'Run... before they get you...',
);
johnSound.setVolume(50);

const undeadSpawnTypes = [
  UNIT_Ghoul,
  UNIT_Ghoul,
  UNIT_Ghoul,
  UNIT_Ghoul,
  UNIT_Ghoul,
  UNIT_Zombie,
  UNIT_Zombie,
  UNIT_Zombie,
  UNIT_Zombie,
  UNIT_Zombie,
  UNIT_Abomination,
  UNIT_CryptFiend,
  UNIT_Gargoyle,
  UNIT_Necromancer,
  UNIT_SkeletalOrc,
  UNIT_SkeletalArcher,
  UNIT_SkeletalMarksman,
];

export class FarmMassacre extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    footman: Unit,
    john: Unit,
    johnRect: rect
    outpostRect: rect,
    farmRect: rect
    undeadSpawnRects: rect[],
  }) {
    super(globals);
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    this.register();
  }

  private async register(): Promise<void> {
    const {
      footman, john, johnRect, outpostRect, farmRect, undeadSpawnRects,
    } = this.globals;

    await this.waitDependenciesDone();

    // Create corpses at outpost and farm
    const survivors = [footman, john];
    const deadUnits = [
      ...getUnitsInRect(outpostRect),
      ...getUnitsInRect(farmRect),
    ].filter((u) => u.isAlive() && !survivors.includes(u) && (u.owner === playerHumanAlliance || u.owner === neutralPassive));
    this.replaceWithCorpses(deadUnits);
    survivors.forEach((u) => {
      removeGuardPosition(u);
      u.paused = true;
    });

    // Prepare dying footman and John
    survivors.forEach((u) => {
      setUnitFlag(u, Flag.UNBREAKABLE_ATTENTION, true);
      setUnitFlag(u, Flag.MUTE_INTERACTION_SOUND, true);
    });

    waitUntilAsync(5, () => {
      survivors.forEach((u) => {
        u.life = 1;
        u.setTimeScale(0.01);
        u.setAnimation('decay flesh');
      });
      return this.isCompleted();
    });

    // Play sound when player realized outtpost and farm are destroyed
    waitUntilAsync(1, () => {
      const canSongStart = getUnitsOfPlayer(mainPlayer, (u) => u.isHero() && (isLocInRect(u, outpostRect) || isLocInRect(u, farmRect))).length > 0;
      if (canSongStart) {
        PlayThematicMusic('Sound\\Music\\mp3Music\\TragicConfrontation.mp3');
      }
      return canSongStart;
    });

    const johnLoc = centerLocRect(johnRect);
    john.x = johnLoc.x;
    john.y = johnLoc.y;

    let traveler = await this.talkToQuestGiver(footman, true);
    lockCameraBound([outpostRect, farmRect], []);
    await playSpeech(footman, footmanSound);
    footman.addAbility(ABILITY_Locust.id);

    traveler = await this.talkToQuestGiver(john, true);

    await playSpeech(john, johnSound);
    john.addAbility(ABILITY_Locust.id);

    panCameraSmart(johnLoc, 0.5);
    setTimeout(0.5, () => lockCameraBound([], [johnLoc]));

    removeRespawn(traveler);

    // A horde of undead constantly infinitely spawns to attack the player
    let undeads: Unit[] = [];
    const intervalUndead = setIntervalIndefinite(3, () => {
      undeads = undeads.filter((unit) => unit.isAlive());
      undeads.forEach((u) => setGuardPosition(u, traveler, 0));
      if (undeads.length > 30) return;

      for (let i = 0; i < 3; i += 1) {
        const spawnLoc = centerLocRect(pickRandom(undeadSpawnRects));
        const newUndead = Unit.create(playerForsaken, pickRandom(undeadSpawnTypes).id, spawnLoc.x, spawnLoc.y);
        undeads.push(newUndead);
        setGuardPosition(newUndead, traveler, 0);
        const sound = Sound.create(pickRandom(getUnitSounds(newUndead.typeId, 'YesAttack')), false, true, false, 1, 1, 'DefaultEAXON');
        sound.setPosition(spawnLoc.x, spawnLoc.y, 0);
        sound.start();
        sound.killWhenDone();
      }
    });

    await waitUntil(1, () => getUnitsInRangeOfLoc(1000, traveler, (u) => u.owner === playerForsaken).length > 0);
    PlayThematicMusic('Sound\\Music\\mp3Music\\Doom.mp3');

    // Quest ends when the player is dead
    await waitUntil(1, () => !traveler.isAlive());
    intervalUndead.destroy();

    // Black screen fade out
    await sleep(3);
    cinematicFadeOut(1);
    await sleep(1);
    cinematicMode(true, 2);
    undeads.forEach((unit) => unit.destroy());
    await sleep(2);
    restoreCameraBound();
    EndThematicMusic();
    this.complete();
  }

  replaceWithCorpses(units: Unit[]): Unit[] {
    const corpses: Unit[] = [];
    units.forEach((unit) => {
      removeGuardPosition(unit);
      unit.paused = true;
      unit.invulnerable = true;

      if (isBuilding(unit)) {
        unit.setOwner(neutralPassive, false);
        if (GetRandomInt(1, 2) === 1) {
          unit.setAnimation('decay');
          unit.setTimeScale(0.01);
          unit.addAbility(ABILITY_Locust.id);
          unit.removeAbility(ABILITY_DetectMagicSentinel.id);
        } else {
          unit.life = GetRandomInt(1, 100);
        }
      } else {
        unit.show = false;
        if (!unit.isHero()) {
          const loc = PolarProjection(unit, GetRandomReal(0, 200), GetRandomDirectionDeg());
          const corpse = CreatePermanentCorpseLocBJ(bj_CORPSETYPE_FLESH, unit.typeId, unit.owner.handle, tempLocation(loc), GetRandomDirectionDeg());
          corpses.push(Unit.fromHandle(corpse));
          unit.destroy();
        }
      }
    });

    return corpses;
  }

  onForceComplete(): void {
    const {
      footman, john, johnRect, outpostRect, farmRect,
    } = this.globals;
    const johnLoc = centerLocRect(johnRect);
    john.x = johnLoc.x;
    john.y = johnLoc.y;

    const survivors = [footman, john];
    const deadUnits = [
      ...getUnitsInRect(outpostRect),
      ...getUnitsInRect(farmRect),
    ].filter((u) => u.isAlive() && !survivors.includes(u) && (u.owner === playerHumanAlliance || u.owner === neutralPassive));
    this.replaceWithCorpses(deadUnits);

    survivors.forEach((u) => {
      u.life = 1;
      u.setAnimation('decay flesh');
      u.addAbility(ABILITY_Locust.id);
      removeGuardPosition(u);
    });

    getUnitsOfPlayer(mainPlayer).forEach((u) => {
      if (u.isHero()) {
        removeRespawn(u);
        u.owner = neutralPassive;
      }
      u.kill();
    });

    cinematicFadeOut(0);
    cinematicMode(true, 0);
  }
}
