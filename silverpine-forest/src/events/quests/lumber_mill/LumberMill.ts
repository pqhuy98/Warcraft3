import { disableInteractSound, UnitInteraction } from 'events/unit_interaction';
import {
  AngleBetweenLocs,
  DistanceBetweenLocs,
  fromTempLocation, isLocInRect, PolarProjection,
} from 'lib/location';
import {
  completeQuest,
  completeQuestItem,
  createDialogSound, createQuest,
} from 'lib/quest';
import { playSpeech } from 'lib/sound';
import { isUnitIdle } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import { sleep, Unit } from 'w3ts';
import { OrderId } from 'w3ts/globals';

const questName = 'Lumber Mill';
const questDescription = 'Go to lumber mill';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNHumanLumberMill.blp';
const questItems = [
  'Find the southwest lumber mill.',
  'Collect at least 750 lumbers.',
  'Bring back the lumbers to John & Peter.',
];

export class LumberMill {
  static async register() {
    const johnIntro = createDialogSound(
      'Sounds\\lumber-mill-john-intro.mp3',
      'John',
      "Ugh, we're never gonna fix this wheelbarrow without more lumber! The lumberjack team should've brought back wood hours ago.",
    );
    const peterIntro = createDialogSound(
      'Sounds\\lumber-mill-peter-intro.mp3',
      'Peter',
      "Something's not right. Could you head southwest to the lumber mill and see what's taking so long? We really need that wood.",
    );

    const peterOutro = createDialogSound(
      'Sounds\\lumber-mill-peter-outro.mp3',
      'Peter',
      "What?! The lumberjacks are dead and there's an undead base nearby? Forget the wheelbarrow, we need to report this to the army!",
    );
    const johnOutro = createDialogSound(
      'Sounds\\lumber-mill-john-outro.mp3',
      'John',
      "Thank you for bringing the lumber, but this is far more urgent. We're heading to town right away.",
    );

    const john = Unit.fromHandle(gg_unit_nvl2_0413);
    const peter = Unit.fromHandle(gg_unit_nvl2_0414);
    john.name = 'John';
    peter.name = 'Peter';

    disableInteractSound(john);
    disableInteractSound(peter);

    const { unit: traveler } = await UnitInteraction.waitUntilQuestTalk(john);
    john.shareVision(traveler.owner, true);
    peter.shareVision(traveler.owner, true);

    async function getCloserToTraveler(unit: Unit) {
      const dest = PolarProjection(traveler, 200, AngleBetweenLocs(traveler, unit));
      unit.issueOrderAt(OrderId.Move, dest.x, dest.y);
      await waitUntil(0.234, () => DistanceBetweenLocs(unit, dest) <= 50);
      UnitInteraction.setAttention(unit, traveler);
    }

    getCloserToTraveler(john);
    getCloserToTraveler(peter);
    await playSpeech(john, johnIntro, traveler);
    await playSpeech(peter, peterIntro, traveler);

    const quest = createQuest({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: questItems,
    });

    // Wait player to reach lumber mill
    await waitUntil(0.456, () => isLocInRect(traveler, gg_rct_Lumber_mill_corpses_1) || isLocInRect(traveler, gg_rct_Lumber_mill_corpses_2));

    completeQuestItem(quest, 0);

    // Wait player to have enough lumber
    await waitUntil(0.213, () => traveler.owner.getState(PLAYER_STATE_RESOURCE_LUMBER) >= 750);
    completeQuestItem(quest, 1);

    // Wait player to return
    await UnitInteraction.waitUntilQuestTalk(peter);
    completeQuest(quest);

    // John and Peter's dialogues after hearing the news
    getCloserToTraveler(john);
    getCloserToTraveler(peter);
    await playSpeech(peter, peterOutro, traveler);
    await playSpeech(john, johnOutro, traveler);
    await sleep(0.5);
    UnitInteraction.setAttention(john, peter);
    UnitInteraction.setAttention(peter, john);

    // John and Peter travel to checkpoint 1 then look at Lumber Mill
    await sleep(5);
    async function travelToRect(unit: Unit, rect: rect) {
      await sleep(GetRandomReal(0.5, 1));
      await waitUntil(0.3434, () => {
        if (isUnitIdle(unit)) {
          const dest = fromTempLocation(GetRandomLocInRect(rect));
          unit.issueOrderAt(OrderId.Move, dest.x, dest.y);
        }
        return isLocInRect(unit, rect);
      });
      unit.issueImmediateOrder(OrderId.Stop);
    }

    const lumberMillLoc = {
      x: GetRectCenterX(gg_rct_Lumber_mill_corpses_2),
      y: GetRectCenterY(gg_rct_Lumber_mill_corpses_2),
    };

    await Promise.all([
      (async () => {
        await travelToRect(john, gg_rct_LumberMill_road_to_town_1);
        SetUnitFacingTimed(john.handle, AngleBetweenLocs(john, lumberMillLoc), 0.5);
      })(),
      (async () => {
        await travelToRect(peter, gg_rct_LumberMill_road_to_town_1);
        SetUnitFacingTimed(peter.handle, AngleBetweenLocs(peter, lumberMillLoc), 0.5);
      })(),
    ]);
    await sleep(3);

    // Continue to travel to town
    const townLord = gg_unit_Hpb1_0145;
    await Promise.all([
      (async () => {
        await travelToRect(john, gg_rct_LumberMill_road_to_town_2);
        SetUnitFacingToFaceUnitTimed(john.handle, townLord, 0.5);
      })(),
      (async () => {
        await travelToRect(peter, gg_rct_LumberMill_road_to_town_2);
        SetUnitFacingToFaceUnitTimed(peter.handle, townLord, 0.5);
      })(),
    ]);
  }
}
