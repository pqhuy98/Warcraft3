import { mainPlayer, playerForsaken } from 'lib/constants';
import {
  Angle,
  centerLocRect, isLocInRect, Loc,
  randomLocRect,
  templocation,
} from 'lib/location';
import { setAllianceState2Way } from 'lib/player';
import { dialogue } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { TalkGroup } from 'lib/quests/talk_group';
import { disableQuestMarker, enableQuestMarker } from 'lib/quests/utils';
import { UNIT_Ghoul, UNIT_Peasant } from 'lib/resources/war3-units';
import { guardCurrentPosition, pauseGuardPosition, setGuardPosition } from 'lib/systems/unit_guard_position';
import { setAttention } from 'lib/systems/unit_interaction';
import { setTimeout } from 'lib/trigger';
import { setNeverDie } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import {
  sleep, Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Lumber Mill';
const questDescription = 'Go to lumber mill';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNHumanLumberMill.blp';
const questItems = [
  'Find the southwest lumber mill',
  'Collect at least 750 lumbers',
  'Bring back the lumbers to John & Peter',
];
const rewardXp = 600;

const johnIntro = dialogue(
  'QuestSounds\\__refined\\lumber-mill\\lumber-mill-john-intro.mp3',
  'Villager John',
  "Ugh, we're never gonna fix this wheelbarrow without more lumber! The lumberjack team should've brought back wood hours ago.",
);
const peterIntro = dialogue(
  'QuestSounds\\__refined\\lumber-mill\\lumber-mill-peter-intro.mp3',
  'Villager Peter',
  "Something's not right. Could you head southwest to the lumber mill and see what's taking so long? We really need that wood.",
);

const peterOutro1 = dialogue(
  'QuestSounds\\__refined\\lumber-mill\\lumber-mill-peter-outro-1.mp3',
  'Villager Peter',
  "What?! The lumberjacks are dead and there's an undead base nearby? Forget the wheelbarrow, we need to report this to the army!",
);
const johnOutro1 = dialogue(
  'QuestSounds\\__refined\\lumber-mill\\lumber-mill-john-outro-1.mp3',
  'Villager John',
  "Thank you for bringing the lumber, but this is far more urgent. We're heading to town right away.",
);

const johnOutro2 = dialogue(
  'QuestSounds\\__refined\\lumber-mill\\lumber-mill-john-outro-2.mp3',
  'Villager John',
  'Oh my... Peter,... look at all the bodies!',
);
const peterOutro2 = dialogue(
  'QuestSounds\\__refined\\lumber-mill\\lumber-mill-peter-outro-2.mp3',
  'Villager Peter',
  'This... this is a massacre... We need to get out of here ... before they come back!',
);

export class LumberMill extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    john: Unit
    peter: Unit
    lumberMillCorpse1Rect: rect
    lumberMillCorpse2Rect: rect
    townRect1: rect
    townRect2: rect
    townKnight: Unit
  }) {
    super(globals);
    void this.register();
  }

  private async register(): Promise<void> {
    const {
      john, peter,
      lumberMillCorpse1Rect,
      lumberMillCorpse2Rect,
      townRect1,
      townRect2,
      townKnight,
    } = this.globals;
    john.name = 'Villager John';
    peter.name = 'Villager Peter';
    setNeverDie(john);
    setNeverDie(peter);

    await this.waitDependenciesDone();

    // Wait to start
    let traveler = await this.talkToQuestGiver(john, true);

    pauseGuardPosition([john, peter], true);
    john.shareVision(traveler.owner, true);
    peter.shareVision(traveler.owner, true);

    // Setup lumber mill corpses and lumbers and ghouls
    const fleshCorpses: Unit[] = this.createCorpsesLumberMill();
    const ghouls: Unit[] = [];
    fleshCorpses.slice(0, 3).forEach((corpse) => {
      const ghoul = Unit.create(playerForsaken, UNIT_Ghoul.id, corpse.x, corpse.y, GetRandomDirectionDeg());
      guardCurrentPosition(ghoul, { maxRadius: 1000, animation: 'stand channel' });
      ghouls.push(ghoul);
    });
    setAllianceState2Way(mainPlayer, playerForsaken, 'enemy');

    // Create lumber bundles
    CreateItemLoc(FourCC('lmbr'), templocation(GetRandomLocInRect(lumberMillCorpse1Rect)));
    CreateItemLoc(FourCC('lmbr'), templocation(GetRandomLocInRect(lumberMillCorpse1Rect)));
    CreateItemLoc(FourCC('lmbr'), templocation(GetRandomLocInRect(lumberMillCorpse2Rect)));

    john.issueTargetOrder(OrderId.Smart, traveler);
    peter.issueTargetOrder(OrderId.Smart, traveler);
    await sleep(0.5);

    const talkGroup = new TalkGroup([john, peter, traveler]);
    await talkGroup.speak(john, johnIntro, traveler, traveler);
    await talkGroup.speak(peter, peterIntro, traveler, traveler);
    talkGroup.finish();

    pauseGuardPosition([john, peter], false);

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: questItems,
    });

    // Wait player to reach lumber mill
    await waitUntil(0.456, () => isLocInRect(traveler, lumberMillCorpse1Rect) || isLocInRect(traveler, lumberMillCorpse2Rect));
    setTimeout(1, () => {
      ghouls.forEach((u) => u.issueTargetOrder(OrderId.Attack, traveler));
    });

    await questLog.completeItem(0);

    // Wait player to have enough lumber
    await waitUntil(0.213, () => traveler.owner.getState(PLAYER_STATE_RESOURCE_LUMBER) >= 750);
    await questLog.completeItem(1);

    // Wait player to return
    traveler = await this.waitForTurnIn(peter);
    ghouls.forEach((u) => { u.isAlive() && u.destroy(); });
    setAllianceState2Way(mainPlayer, playerForsaken, 'neutral');

    // John and Peter's dialogues after hearing the news
    john.issueTargetOrder(OrderId.Smart, traveler);
    peter.issueTargetOrder(OrderId.Smart, traveler);
    await sleep(0.5);

    await talkGroup.speak(peter, peterOutro1, traveler, traveler);
    await talkGroup.speak(john, johnOutro1, traveler, traveler);
    talkGroup.finish();

    await sleep(0.5);
    setAttention(john, peter);
    setAttention(peter, john);

    traveler.addExperience(rewardXp, true);
    await questLog.completeWithRewards([
      `${rewardXp} experience`,
    ]);

    // John and Peter travel to checkpoint 1 then look at Lumber Mill
    enableQuestMarker(john, 'new');

    async function travelToRect(unit: Unit, rect: rect, facingLoc: Loc): Promise<void> {
      await sleep(GetRandomReal(0, 0.5));
      const dest = centerLocRect(rect);
      setGuardPosition(unit, dest, Angle(dest, facingLoc));
      await waitUntil(1, () => isLocInRect(unit, rect));
      setGuardPosition(unit, unit, Angle(unit, facingLoc));
    }

    const lumberMillLoc = centerLocRect(lumberMillCorpse2Rect);

    await Promise.all([
      travelToRect(john, townRect1, lumberMillLoc),
      travelToRect(peter, townRect1, lumberMillLoc),
    ]);
    await talkGroup.speak(john, johnOutro2, null, null);
    await talkGroup.speak(peter, peterOutro2, null, null);
    talkGroup.finish();

    // Continue to travel to town
    await Promise.all([
      travelToRect(john, townRect2, townKnight),
      travelToRect(peter, townRect2, townKnight),
    ]);
    disableQuestMarker(john);
    this.complete();
  }

  createCorpsesLumberMill(): Unit[] {
    const { lumberMillCorpse1Rect, lumberMillCorpse2Rect } = this.globals;

    const fleshCorpses: Unit[] = [];
    [
      lumberMillCorpse1Rect,
      lumberMillCorpse2Rect,
    ].forEach((rect) => {
      for (let i = 0; i < 3; i++) {
        fleshCorpses.push(Unit.fromHandle(
          CreatePermanentCorpseLocBJ(bj_CORPSETYPE_FLESH, UNIT_Peasant.id, Player(1), templocation(GetRandomLocInRect(rect)), GetRandomDirectionDeg()),
        ));
      }
      CreatePermanentCorpseLocBJ(bj_CORPSETYPE_BONE, UNIT_Peasant.id, Player(1), templocation(GetRandomLocInRect(rect)), GetRandomDirectionDeg());
    });
    return fleshCorpses;
  }

  onForceComplete(): void {
    const {
      john, peter,
      townRect2,
      townKnight,
    } = this.globals;
    const loc = randomLocRect(townRect2);
    john.setPosition(loc.x, loc.y);
    peter.setPosition(loc.x, loc.y);
    setGuardPosition(john, loc, Angle(loc, townKnight));
    setGuardPosition(peter, loc, Angle(loc, townKnight));
    setAttention(john, townKnight);
    setAttention(peter, townKnight);
    this.createCorpsesLumberMill();
  }
}
