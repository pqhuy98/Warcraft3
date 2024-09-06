import { generateFogLocsBehindTrees } from 'lib/destructable';
import {
  centerLocRect, DistanceBetweenLocs, isLocInRect, Loc,
} from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import { neutralHostileMap } from 'lib/resources/neutral_hostile';
import {
  UNIT_Assassin, UNIT_Bandit, UNIT_BanditLord, UNIT_Brigand, UNIT_Enforcer, UNIT_Rogue,
  UNIT_TYPE,
} from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { removeGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { getTimeS } from 'lib/trigger';
import { getUnitsInRangeOfLoc, getUnitsOfPlayer } from 'lib/unit';
import {
  pickRandom, pickRandomWeighted, shuffleArray, waitUntil,
} from 'lib/utils';
import { MapPlayer, sleep, Unit } from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base';

const banditTypes: [UNIT_TYPE, number][] = [
  UNIT_Bandit,
  UNIT_Brigand,
  UNIT_Rogue,
  UNIT_Assassin,
  UNIT_Enforcer,
  UNIT_BanditLord,
].map((u) => [u, 1000 / neutralHostileMap.get(u.id).hp]);

const weakestBanditPower = banditTypes.reduce((acc, [{ id }]) => Math.min(acc, neutralHostileMap.get(id).hp), 999999999);

let banditFirstSounds: sound[];
let banditAgainSounds: sound[];

export class BlackTurban extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    banditPlayer: MapPlayer
    victimPlayer: MapPlayer
    banditHomeEntranceRect: rect
    banditHomeRect: rect
  }) {
    super(globals);
    banditFirstSounds = [
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-1.mp3',
        'Black Turban\'s bandit',
        'You thought you could wipe out one of our camps and face no consequences? The Black Turban Syndicate doesn\'t forgive, and today we avenge our fallen brothers!',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-12.mp3',
        'Black Turban\'s bandit',
        'We may have failed before, but the Black Turban Syndicate\'s vengeance always finds a way—ask those we drowned in the river; they\'ll tell you we never stop.',
      ),
    ];

    banditAgainSounds = [
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-2.mp3',
        'Black Turban\'s bandit',
        'We\'re back, and this time we won\'t fail—consider this your final warning from the Black Turban Syndicate!',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-3.mp3',
        'Black Turban\'s bandit',
        'Did you really believe you could escape our wrath? The Black Turban Syndicate always collects its debts!',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-4.mp3',
        'Black Turban\'s bandit',
        'Time and time again, you\'ve slipped through our grasp, but the Black Turban Syndicate is relentless—we won\'t stop until vengeance is ours!',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-5.mp3',
        'Black Turban\'s bandit',
        'You\'ve beaten us before, but the Black Turban Syndicate\'s resolve is unbreakable—we\'re here to settle this once and for all!',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-6.mp3',
        'Black Turban\'s bandit',
        'No matter how many times we fall, we rise stronger—this time, you\'ll pay for every defeat you\'ve handed the Black Turban Syndicate!',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-7.mp3',
        'Black Turban\'s bandit',
        'You\'ve escaped us before, but the shadows grow darker—the Black Turban Syndicate will haunt your every step until we have our revenge.',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-8.mp3',
        'Black Turban\'s bandit',
        'Every failure tightens our grip—tonight, the Black Turban Syndicate brings nightmares you can\'t escape.',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-9.mp3',
        'Black Turban\'s bandit',
        'You\'ve escaped our grasp before, but the Black Turban Syndicate will never relent—just like those who dared defy us in the past, whose screams still echo in the night!',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-10.mp3',
        'Black Turban\'s bandit',
        'Your luck won\'t save you forever—the Black Turban Syndicate has a dark history with its enemies, and soon, you\'ll join the ranks of those who vanished into the shadows.',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-11.mp3',
        'Black Turban\'s bandit',
        'You\'ve escaped us too many times, but the Black Turban Syndicate never forgets—ever heard the screams of those we buried alive? Your turn is coming!',
      ),
      createDialogSound(
        'QuestSounds\\black-turban\\black-turban-bandit-13.mp3',
        'Black Turban\'s bandit',
        'The Black Turban Syndicate flayed our last defector alive and left him for the vultures; your fate will be even worse.',
      ),
    ];
    shuffleArray(banditAgainSounds);
  }

  async register() {
    await this.waitDependenciesDone();

    const {
      banditPlayer, victimPlayer, banditHomeEntranceRect, banditHomeRect,
    } = this.globals;

    for (let attempt = 0; ; attempt++) {
      let victim: Unit;

      await waitUntil(10, () => {
        if (!isNightTime()) return false;
        if (victimPlayer.isPlayerAlly(banditPlayer)) return false;

        const victimUnits = getUnitsOfPlayer(victimPlayer, (u) => u.isAlive() && !u.invulnerable);
        if (victimUnits.length === 0) return false;

        victim = pickRandom(victimUnits);
        if (generateFogLocsBehindTrees(1000, victim, victim.owner, 1).length) {
          return true;
        }
        return false;
      });

      // victim is found
      victim.shareVision(banditPlayer, true);

      // Calculate power of nearby enemies
      const victimNearbyAllies = getUnitsInRangeOfLoc(
        1500,
        victim,
        (u) => u.isAlive() && u.owner === victimPlayer,
      );
      const victimTotalPower = victimNearbyAllies.reduce((acc, u) => acc + u.maxLife, 0);

      // Start the bandit squad attack
      const attackTimeS = getTimeS();

      const bandits: Unit[] = [];
      let squadTotalPower = 0;
      const squadDesiredPower = Math.min(10000, victimTotalPower * 2.5);
      const locs: Loc[] = [];

      while (squadTotalPower < squadDesiredPower) {
        if (locs.length === 0) {
          locs.push(...generateFogLocsBehindTrees(1000, victim, victim.owner, 3));
        }

        if (locs.length > 0) {
          const banditType = pickRandomWeighted(banditTypes);
          const banditPower = neutralHostileMap.get(banditType.id).hp;

          if (banditPower + squadTotalPower > squadDesiredPower + weakestBanditPower * 2) {
            continue;
          }

          const loc = locs.pop();
          const bandit = Unit.create(banditPlayer, pickRandomWeighted(banditTypes).id, loc.x, loc.y);
          bandits.push(bandit);
          setGuardPosition(bandit, victim, 0);
          squadTotalPower += bandit.maxLife;
        } else {
          await sleep(1);
        }
      }

      const leader = bandits.reduce((best, u) => (best.level > u.level ? best : u));
      const banditSound = attempt < 2 ? banditFirstSounds[attempt] : banditAgainSounds[attempt % banditAgainSounds.length];
      waitUntil(1, () => {
        if (DistanceBetweenLocs(leader, victim) < 550) {
          playSpeech(leader, banditSound);
          return true;
        }
        return false;
      });

      // Wait until victim is dead, or bandit squad are all dead
      await waitUntil(1, () => {
        let allBanditsDead = true;
        for (const bandit of bandits) {
          if (bandit.isAlive()) {
            allBanditsDead = false;
          } else {
            removeGuardPosition(bandit);
          }
        }
        return !victim.isAlive() || allBanditsDead;
      });

      let aliveBandits = bandits.filter((u) => u.isAlive());

      // Alive bandits go home
      if (aliveBandits.length > 0) {
        const banditEntrance = centerLocRect(banditHomeEntranceRect);
        const banditHome = centerLocRect(banditHomeRect);

        aliveBandits.forEach((u) => setGuardPosition(u, banditEntrance, 0));

        // Remove bandit when they reach home
        waitUntil(1, () => {
          let someReached = false;
          for (const bandit of aliveBandits) {
            if (isLocInRect(bandit, banditHomeEntranceRect)) {
              setGuardPosition(bandit, banditHome, 0);
            }
            if (isLocInRect(bandit, banditHomeRect)) {
              bandit.destroy();
              someReached = true;
            }
          }
          if (someReached) {
            aliveBandits = aliveBandits.filter((u) => u.isAlive());
          }
          return aliveBandits.length === 0;
        });
      }

      await waitUntil(2, () => getTimeS() - attackTimeS > 1);
    }
  }
}

function isNightTime() {
  return GetTimeOfDay() < 6 || GetTimeOfDay() > 18;
}
