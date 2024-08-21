/* eslint-disable max-len */
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { disableInteractSound, enableInteractSound, UnitInteraction } from 'events/unit_interaction';
import { mainPlayer } from 'lib/constants';
import { AngleBetweenLocs, DistanceBetweenLocs, PolarProjection } from 'lib/location';
import {
  completeQuest, createDialogSound, createMinimapIconUnit, createQuest,
  disableQuestMarker,
  enableQuestMarker,
} from 'lib/quest';
import { MODEL_SleepTarget } from 'lib/resources/war3-models';
import { playSpeech } from 'lib/sound';
import { getUnitsInRect, isUnitIdle } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import { MapPlayer, sleep, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

const gatherRadius = 400;

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

const introSounds: Record<number, sound> = {};
const outroSounds: Record<number, sound> = {};
let goHomeSound: sound;

export class GatherSheeps {
  static sheeps: Unit[] = [];

  static async register() {
    introSounds[1] = createDialogSound('Sounds\\gather-sheeps-timmy-intro-1.mp3', 'Timmy', introDialogues[1]);
    introSounds[2] = createDialogSound('Sounds\\gather-sheeps-timmy-intro-2.mp3', 'Timmy', introDialogues[2]);
    introSounds[3] = createDialogSound('Sounds\\gather-sheeps-timmy-intro-3.mp3', 'Timmy', introDialogues[3]);

    outroSounds[1] = createDialogSound('Sounds\\gather-sheeps-timmy-outro-1.mp3', 'Timmy', outroDialogues[1]);
    outroSounds[2] = createDialogSound('Sounds\\gather-sheeps-timmy-outro-2.mp3', 'Timmy', outroDialogues[2]);
    outroSounds[3] = createDialogSound('Sounds\\gather-sheeps-timmy-outro-3.mp3', 'Timmy', outroDialogues[3]);

    goHomeSound = createDialogSound('Sounds\\gather-sheeps-timmy-go-home.mp3', 'Timmy', goHomeDialogue);

    this.sheeps = getUnitsInRect(gg_rct_Sheeps);
    const sheepBoy = Unit.fromHandle(gg_unit_nvk2_0064);

    onChatCommand('-cheat sheep', true, () => {
      this.sheeps.forEach((u) => { u.owner = mainPlayer; });
    }, 'GameControl', "Cheat quest 'Gathering Sheeps'");

    const maxLevel = 3;
    for (let level = 1; level <= maxLevel; level++) {
      disableInteractSound(sheepBoy);
      sheepBoy.setAnimation('death');
      const sleepEffect = AddSpecialEffectTarget(MODEL_SleepTarget, sheepBoy.handle, 'overhead');
      await sleep(1);

      const { unit: traveler } = await UnitInteraction.waitUntilQuestTalk(sheepBoy);
      ResetUnitAnimation(sheepBoy.handle);
      DestroyEffect(sleepEffect);

      await this.runQuest(sheepBoy, traveler.owner, level);
      enableInteractSound(sheepBoy);

      if (level < maxLevel) {
        await sleep(GetRandomInt(45, 90));
      }
    }

    // All 3 levels completed
    await sleep(2);
    this.goHome(sheepBoy, this.sheeps);
  }

  static async runQuest(sheepBoy: Unit, player: MapPlayer, level: number) {
    const sheeps = GatherSheeps.sheeps;
    sheepBoy.shareVision(player, true);

    // Sheep initial scattering
    for (const sheep of sheeps) {
      sheep.shareVision(player, true);
      const loc = PolarProjection(
        sheep,
        Math.max(GetRandomReal(gatherRadius + 100, scatterRadiuses[level]), DistanceBetweenLocs(sheep, sheepBoy)),
        GetRandomDirectionDeg(),
      );
      sheep.issueOrderAt(OrderId.Move, loc.x, loc.y);
      sheep.moveSpeed = 50 + 50 * level;
    }

    await playSpeech(sheepBoy, introSounds[level]);

    const quest = createQuest({
      name: questNames[level],
      description: questDescriptions[level],
      icon: questIcon,
      items: [
        questItem,
      ],
    });

    const minimapIcon = createMinimapIconUnit(sheepBoy, 'neutralActive');

    // wait until all sheeps gathered
    await waitUntil(1.43, () => {
      let outCnt = 0;
      for (const sheep of sheeps) {
        if (sheep.isAlive() && DistanceBetweenLocs(sheep, sheepBoy) > (gatherRadius)) {
          outCnt++;
          enableQuestMarker(sheep);
        } else {
          disableQuestMarker(sheep);
        }
      }
      return outCnt === 0;
    });

    // quest completed
    for (const sheep of sheeps) {
      sheep.moveSpeed = 100;
    }
    completeQuest(quest);
    DestroyMinimapIcon(minimapIcon);
    await playSpeech(sheepBoy, outroSounds[level]);

    const itemLoc = PolarProjection(sheepBoy, 150, sheepBoy.facing);
    CreateItem(FourCC(rewards[level]), itemLoc.x, itemLoc.y);
  }

  static async goHome(sheepBoy: Unit, sheeps: Unit[]) {
    sheepBoy.shareVision(mainPlayer, true);

    playSpeech(sheepBoy, goHomeSound);
    const homeLoc = { x: GetRectCenterX(gg_rct_Sheep_farm_entrance), y: GetRectCenterY(gg_rct_Sheep_farm_entrance) };

    sheepBoy.moveSpeed = 200;
    for (const sheep of sheeps) {
      sheep.moveSpeed = 100;
    }

    await waitUntil(0.5, () => {
      let notHomeSheeps = 0;
      // The sheeps go home if they are near sheep boy, else stop
      for (const sheep of sheeps) {
        if (!sheep.isAlive()) continue;
        const distance = DistanceBetweenLocs(sheep, homeLoc);
        if (distance > 50) {
          notHomeSheeps++;
          if (DistanceBetweenLocs(sheepBoy, sheep) < 300 && (isUnitIdle(sheep) || GetRandomInt(1, 4) === 1)) {
            sheep.issueOrderAt(OrderId.Move, homeLoc.x, homeLoc.y);
            sheep.moveSpeed = sheep.defaultMoveSpeed * 1.5;
          } else if (GetRandomInt(0, 8) === 0) {
            sheep.issueImmediateOrder(OrderId.Stop);
            sheep.moveSpeed = sheep.defaultMoveSpeed;
          }
        } else {
          // enter house
          sheep.show = false;
        }
      }

      // Sheep boy tries to chase the furthest sheep back to home
      const sheepBoyDistance = DistanceBetweenLocs(sheepBoy, homeLoc);
      if (notHomeSheeps === 0 && sheepBoyDistance < 50) {
        sheepBoy.show = false;
        return true;
      }
      if (!sheepBoy.isAlive()) {
        return true;
      }

      const furthestSheep = sheeps.reduce(
        (best, current) => (best && DistanceBetweenLocs(best, homeLoc) > DistanceBetweenLocs(current, homeLoc) ? best : current),
        null,
      );
      const dest = notHomeSheeps > 0 ? PolarProjection(furthestSheep, 50, AngleBetweenLocs(homeLoc, furthestSheep)) : homeLoc;
      sheepBoy.issueOrderAt(OrderId.Move, dest.x, dest.y);
      return false;
    });

    sheepBoy.shareVision(mainPlayer, false);
  }
}
