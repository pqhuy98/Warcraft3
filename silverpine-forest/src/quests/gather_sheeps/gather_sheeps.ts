/* eslint-disable max-len */
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { mainPlayer, neutralPassive } from 'lib/constants';
import {
  Angle, centerLocRect, Distance, isLocInRect, PolarProjection,
  randomLocRect,
} from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { TalkGroup } from 'lib/quests/talk_group';
import {
  disableQuestMarker, enableQuestMarker, giveItemReward, removeMinimapIcon,
  setMinimapIconUnit,
} from 'lib/quests/utils';
import { MODEL_SleepTarget } from 'lib/resources/war3-models';
import { UNIT_Sheep } from 'lib/resources/war3-units';
import { playSpeech } from 'lib/sound';
import { removeGuardPosition } from 'lib/systems/unit_guard_position';
import { setAttention } from 'lib/systems/unit_interaction';
import {
  enumUnitsWithDelay, getUnitsInRect, isUnitIdle, setNeverDie, setUnitFacingWithRate,
} from 'lib/unit';
import { pickRandom, waitUntil, waitUntil } from 'lib/utils';
import {
  Effect, sleep, Sound, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

const gatherRadius = 400;
const minimapIconMinRadius = 1500;

const scatterRadiuses: Record<number, number> = {
  1: 600,
  2: 900,
  3: 1200,
};

const questNames: Record<number, string> = {
  1: 'Gathering Sheeps',
  2: 'Gathering Sheeps, again',
  3: 'Gathering Sheeps, final',
};

const questDescriptions: Record<number, string> = {
  1: "Young shepherd boy Timmy fell asleep and lost his sheep. Help Timmy by rounding up his scattered flock and bring them back to him safely. You'll earn a small reward for your effort!",
  2: "Timmy is in trouble again! He fell asleep once more, and his sheep have scattered even further. He needs your help to gather them closer this time. The job is harder, but he'll reward you handsomely for your effort!",
  3: "Timmy is in a state of panic. His sheep have scattered farther than ever before! He desperately asks for your help to bring them all back. This time, he promises a legendary reward from his grandfather's treasure for your aid.",
};

const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNSheep.blp';
const questItem = "Gather all Timmy's sheep back to him";

const introDialogues: Record<number, string> = {
  1: "Huh? Who are you? Oh no, my sheep are everywhere! I must have fallen asleep... Can you please help me gather them back? I'll give you a small reward for your trouble.",
  2: "Oh dear, I fell asleep again and my sheep are scattered even further away! This time, could you please gather them closer to me? It's a tougher job, so I'll give you a bigger reward if you help me out.",
  3: "Oh no, not again! My sheep are everywhere! Can you gather them for me one last time? I'll give you a legendary reward - my grandfather's treasure is real. Please, help me!",
};

const outroDialogues: Record<number, string> = {
  1: "Thank you so much! Here's your reward.",
  2: "You're a lifesaver! I can't thank you enough. Here's a bigger reward.",
  3: "You're amazing! I don't know what I'd do without you. Here's the legendary reward I promised.",
};

const goHomeDialogue = "Now I'll lead the sheep home safely, thank you again!";

const rewards: Record<number, string> = {
  1: 'phea', // Portion of Healing
  2: 'texp', // Tome of Experience
  3: 'tcas', // Tiny Castle
};

const rewardsXp: Record<number, number> = {
  1: 600, // Portion of Healing
  2: 900, // Tome of Experience
  3: 1200, // Tiny Castle
};

const introSounds: Record<number, Sound> = {};
const outroSounds: Record<number, Sound> = {};
let goHomeSound: Sound;

export class GatherSheeps extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    sheepBoy: Unit,
    grassRects: rect[],
    homeRect: rect,
  }) {
    super(globals);
    // Timmy: ElevanLabs - Gigi
    introSounds[1] = createDialogSound('QuestSounds\\__refined\\gather-sheeps\\gather-sheeps-timmy-intro-1.mp3', 'Timmy', introDialogues[1]);
    introSounds[2] = createDialogSound('QuestSounds\\__refined\\gather-sheeps\\gather-sheeps-timmy-intro-2.mp3', 'Timmy', introDialogues[2]);
    introSounds[3] = createDialogSound('QuestSounds\\__refined\\gather-sheeps\\gather-sheeps-timmy-intro-3.mp3', 'Timmy', introDialogues[3]);

    outroSounds[1] = createDialogSound('QuestSounds\\__refined\\gather-sheeps\\gather-sheeps-timmy-outro-1.mp3', 'Timmy', outroDialogues[1]);
    outroSounds[2] = createDialogSound('QuestSounds\\__refined\\gather-sheeps\\gather-sheeps-timmy-outro-2.mp3', 'Timmy', outroDialogues[2]);
    outroSounds[3] = createDialogSound('QuestSounds\\__refined\\gather-sheeps\\gather-sheeps-timmy-outro-3.mp3', 'Timmy', outroDialogues[3]);

    goHomeSound = createDialogSound('QuestSounds\\__refined\\gather-sheeps\\gather-sheeps-timmy-go-home.mp3', 'Timmy', goHomeDialogue);
    void this.register();
  }

  private async register(): Promise<void> {
    const { sheepBoy, grassRects } = this.globals;
    let sheeps = grassRects
      .flatMap((rect) => getUnitsInRect(rect))
      .filter((u) => u.typeId === UNIT_Sheep.id);
    sheepBoy.name = 'Timmy';
    setNeverDie(sheepBoy);
    sheeps.forEach((u) => setNeverDie(u));

    onChatCommand('-cheat gs', true, () => {
      sheeps.forEach((u) => { u.owner = mainPlayer; });
    }, 'GameControl', "Grant control of all Timmy's sheeps.");

    await this.waitDependenciesDone();

    removeGuardPosition(sheepBoy);

    const maxLevel = 3;
    for (let level = 1; ; level++) {
      if (!sheepBoy.isAlive() || !sheeps.some((sheep) => sheep.isAlive())) {
        break;
      }

      sheeps = sheeps.filter((u) => u.isAlive());

      // If quest available
      if (level <= maxLevel && !this.isFailed()) {
        const sleepEffect = Effect.createAttachment(MODEL_SleepTarget, sheepBoy, 'overhead');
        // mimic sleep animation
        let canSleep = true;
        void waitUntil(5, () => {
          if (!sheepBoy.isAlive()) {
            sheepBoy.setTimeScale(1);
            sleepEffect.destroy();
            return true;
          }
          if (canSleep) {
            ResetUnitAnimation(sheepBoy.handle);
            sheepBoy.setAnimation('decay flesh');
            sheepBoy.setTimeScale(0.1);
            return false;
          }
          return true;
        });

        const traveler = await this.talkToQuestGiver(sheepBoy, false);
        canSleep = false;

        // wake up
        ResetUnitAnimation(sheepBoy.handle);
        sheepBoy.setTimeScale(1);
        sleepEffect.destroy();

        await this.runQuest(sheepBoy, sheeps, traveler, level);

        // Quest done, now go home
        if (!this.isFailed()) {
          void playSpeech(sheepBoy, goHomeSound, traveler);
        }

        if (level === maxLevel) {
          this.complete();
        }
        await sleep(1);
        sheeps = sheeps.filter((u) => u.isAlive());
        await this.sheepBoyGoHome(sheepBoy, sheeps);
      } else {
        // Quest is not available, wait until dark then go home
        await waitUntil(10, () => GetTimeOfDay() >= 17 && GetTimeOfDay() < 6);
        await this.sheepBoyGoHome(sheepBoy, sheeps);
      }

      // sleep awhile then leave home in the morning
      await sleep(GetRandomReal(60, 90));
      await waitUntil(10, () => GetTimeOfDay() >= 6 && GetTimeOfDay() <= 13);
      sheeps = sheeps.filter((u) => u.isAlive());

      await this.sheepBoyLeaveHome(sheepBoy, sheeps);
    }
  }

  async runQuest(sheepBoy: Unit, sheeps: Unit[], traveler: Unit, level: number): Promise<void> {
    sheepBoy.shareVision(traveler.owner, true);

    // Sheep initial scattering
    for (const sheep of sheeps) {
      sheep.shareVision(traveler.owner, true);
      const loc = PolarProjection(
        sheep,
        Math.max(GetRandomReal(gatherRadius + 100, scatterRadiuses[level]), Distance(sheep, sheepBoy)),
        GetRandomDirectionDeg(),
      );
      sheep.issueOrderAt(OrderId.Move, loc.x, loc.y);
      sheep.moveSpeed = 50 + 50 * level;
    }

    // sheep boy looks around at scattering sheeps
    enumUnitsWithDelay(sheeps, (sheep, i) => {
      const randomSheep = pickRandom(sheeps.filter((s) => s.isAlive()));
      if (randomSheep) {
        const dest = PolarProjection(sheepBoy, GetRandomReal(0, 25), Angle(sheepBoy, randomSheep));
        sheepBoy.issueOrderAt(OrderId.Move, dest.x, dest.y);
      }
      if (i === sheeps.length - 1) {
        setAttention(sheepBoy, traveler);
      }
    }, 4.2 / sheeps.length);

    const talkGroup = new TalkGroup([sheepBoy, traveler]);
    await talkGroup.speak(sheepBoy, introSounds[level], null, sheepBoy);
    talkGroup.finish();

    const questLog = await QuestLog.create({
      name: questNames[level],
      description: questDescriptions[level],
      icon: questIcon,
      items: [
        questItem,
      ],
    });

    // wait until all sheeps gathered
    await waitUntil(0.5, () => {
      let outCnt = 0;
      for (const sheep of sheeps) {
        if (!sheep.isAlive()) return true;
        if (sheep.isAlive() && Distance(sheep, sheepBoy) > (gatherRadius)) {
          outCnt++;
          enableQuestMarker(sheep, 'new');
        } else {
          disableQuestMarker(sheep);
        }
        if (sheep.isAlive() && Distance(sheep, sheepBoy) > minimapIconMinRadius) {
          setMinimapIconUnit(sheep, 'neutralActive');
        } else {
          removeMinimapIcon(sheep);
        }
      }
      return outCnt === 0;
    });

    // quest completed
    for (const sheep of sheeps) {
      sheep.moveSpeed = 100;
      sheep.shareVision(traveler.owner, false);
      removeMinimapIcon(sheep);
      disableQuestMarker(sheep);
    }
    removeMinimapIcon(sheepBoy);

    if (sheeps.every((u) => u.isAlive())) {
      await talkGroup.speak(sheepBoy, outroSounds[level], null, sheepBoy);
      talkGroup.finish();

      traveler.addExperience(rewardsXp[level], true);
      await questLog.completeWithRewards([
        giveItemReward(sheepBoy, FourCC(rewards[level])).name,
        `${rewardsXp[level]} experience`,
      ]);
    } else {
      await questLog.fail();
      this.fail();
    }
  }

  // not part of the quest's requirment
  async sheepBoyGoHome(sheepBoy: Unit, sheeps: Unit[]): Promise<void> {
    const homeRect = this.globals.homeRect;
    const homeLoc = centerLocRect(homeRect);

    this.updateHerdMovespeed(sheepBoy, sheeps);

    await waitUntil(0.5, () => {
      let notHomeSheeps = 0;
      // The sheeps go home if they are near sheep boy, else stop
      for (const sheep of sheeps) {
        if (!sheep.isAlive()) continue;
        if (!isLocInRect(sheep, homeRect)) {
          notHomeSheeps++;
          if (Distance(sheepBoy, sheep) < 300 && (isUnitIdle(sheep) || GetRandomInt(1, 8) === 1)) {
            sheep.issueOrderAt(OrderId.Move, homeLoc.x, homeLoc.y);
            sheep.moveSpeed = sheep.defaultMoveSpeed * 1.25;
          } else if (GetRandomInt(0, 8) === 0) {
            sheep.issueImmediateOrder(OrderId.Stop);
            sheep.moveSpeed = sheep.defaultMoveSpeed;
          }
        } else {
          // enter house
          sheep.show = false;
          sheep.setPathing(false);
          sheep.setPosition(homeLoc.x, homeLoc.y);
        }
      }

      // Sheep boy tries to chase the furthest sheep back to home
      if (notHomeSheeps === 0 && isLocInRect(sheepBoy, homeRect)) {
        sheepBoy.show = false;
        sheepBoy.setPosition(homeLoc.x, homeLoc.y);
        return true;
      }
      if (!sheepBoy.isAlive()) {
        return true;
      }

      const furthestSheep = sheeps.reduce(
        (best, current) => (best && Distance(best, homeLoc) > Distance(current, homeLoc) || !current.isAlive()
          ? best
          : current),
        null,
      );
      const dest = notHomeSheeps > 0 ? PolarProjection(furthestSheep, 50, Angle(homeLoc, furthestSheep)) : homeLoc;
      sheepBoy.issueOrderAt(OrderId.Move, dest.x, dest.y);
      return false;
    });
  }

  // not part of the quest's requirment
  async sheepBoyLeaveHome(sheepBoy: Unit, sheeps: Unit[]): Promise<void> {
    if (!sheepBoy.isAlive()) return;

    const grassRect = pickRandom(this.globals.grassRects);
    const grassCenter = centerLocRect(grassRect);
    const homeLoc = centerLocRect(this.globals.homeRect);

    if (sheeps.length < 10) {
      sheeps.push(Unit.create(neutralPassive, UNIT_Sheep.id, homeLoc.x, homeLoc.y));
    }
    this.updateHerdMovespeed(sheepBoy, sheeps);

    // Everyone gathers initally at front yard
    const frontYard = PolarProjection(homeLoc, 500, Angle(homeLoc, centerLocRect(grassRect)));
    for (const unit of [...sheeps, sheepBoy]) {
      unit.show = true;
      if (!unit.isAlive()) continue;
      const from = homeLoc;
      const dest = PolarProjection(frontYard, GetRandomReal(0, 300), GetRandomDirectionDeg());
      unit.setPosition(from.x, from.y);
      unit.issueOrderAt(OrderId.Move, dest.x, dest.y);
      await sleep(0.75);
    }

    // Sheep boy chases the sheeps to grass
    await waitUntil(0.25, () => {
      let notAtGrassSheeps = 0;
      // sheep go to grass if near sheep boy, else stop
      for (const sheep of sheeps) {
        if (!sheep.isAlive()) continue;
        if (!isLocInRect(sheep, grassRect)) {
          notAtGrassSheeps++;
          if (Distance(sheepBoy, sheep) < 300 && (isUnitIdle(sheep) || GetRandomInt(1, 16) === 1)) {
            const dest = randomLocRect(grassRect);
            sheep.issueOrderAt(OrderId.Move, dest.x, dest.y);
            sheep.moveSpeed = sheep.defaultMoveSpeed * 1.25;
          } else if (GetRandomInt(0, 8) === 0) {
            sheep.issueImmediateOrder(OrderId.Stop);
            sheep.moveSpeed = sheep.defaultMoveSpeed;
          }
        } else {
          sheep.moveSpeed = sheep.defaultMoveSpeed;
        }
      }

      // Sheep boy tries to chase the furthest sheep to grass
      if (notAtGrassSheeps === 0 && isLocInRect(sheepBoy, grassRect)) {
        return true;
      }
      if (!sheepBoy.isAlive()) {
        return true;
      }

      // Get furthest alive sheep from grass
      const furthestSheep = sheeps.reduce(
        (best, current) => (
          best && Distance(best, grassCenter) > Distance(current, grassCenter)
            || !current.isAlive()
            ? best
            : current),
        null,
      );

      // sheep boy chase the furthest sheep to grass, or go to grass if all are there
      const dest = notAtGrassSheeps > 0 ? PolarProjection(furthestSheep, 50, Angle(grassCenter, furthestSheep)) : randomLocRect(grassRect);
      sheepBoy.issueOrderAt(OrderId.Move, dest.x, dest.y);
      return false;
    });

    setUnitFacingWithRate(sheepBoy, Angle(sheepBoy, grassCenter));
  }

  updateHerdMovespeed(sheepBoy: Unit, sheeps: Unit[]): void {
    sheepBoy.moveSpeed = Math.max(200, 20 * sheeps.length);
    for (const sheep of sheeps) {
      sheep.moveSpeed = Math.max(100, 10 * sheeps.length);
    }
  }
}
