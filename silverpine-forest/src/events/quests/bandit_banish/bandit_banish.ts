/* eslint-disable max-len */

import { TalkGroup } from 'events/talk_group';
import { getDestructablesInRect } from 'lib/destructable';
import { centerLocRect } from 'lib/location';
import { createDialogSound } from 'lib/quests/dialogue_sound';
import {
  QuestLog,
} from 'lib/quests/quest_log';
import { removeMinimapIcon, setMinimapIconUnit } from 'lib/quests/utils';
import { ABILITY_ArchMageWaterElemental } from 'lib/resources/war3-abilities';
import { playSpeech } from 'lib/sound';
import { guardCurrentPosition } from 'lib/systems/unit_guard_position';
import { buildTrigger } from 'lib/trigger';
import { getUnitsInRangeOfLoc, isOrganic } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import {
  sleep,
  Unit,
} from 'w3ts';
import { OrderId } from 'w3ts/globals';

import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Bandit Banish';
const questDescription = 'John has requested your assistance one last time. He needs you to deliver an important item to the north outpost. Travel there and meet with the Archmage of the Northern Watch to ensure the safety of the area.';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNHeroArchMage.blp';
const questItems = [
  'Deliver the item to the Archmage at the north outpost',
  'Clear the bandit camp near the north outpost',
  'Return to the Archmage for your reward',
];

const rewardXp = 1200;

let johnSounds: sound[];
let archMageSounds: sound[];
let banditSounds: sound[];

const villagerName = 'John';
const archMageName = 'ArchMage Landazar';

export class BanditBanish extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    john: Unit
    peter: Unit
    archMage: Unit
    banditLord: Unit
    bandits: Unit[]
    johnRect: rect
    peterRect: rect
    sightBlockersRect: rect
  }) {
    super(globals);
    johnSounds = [
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-john-1.mp3',
        villagerName,
        'Thank the heavens you\'re back! You\'ve rid us of those dreadful undead, and the farm is safe once more. But there\'s still one more danger... up at the northern outpost.',
      ),
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-john-2.mp3',
        villagerName,
        'I need you to do me one last favor. Deliver this to the soldiers stationed there. They could use it in these troubling times.',
      ),
    ];

    archMageSounds = [
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-archmage-1.mp3',
        archMageName,
        'Ah, you must be the brave soul John mentioned. Our outpost is plagued by bandit threats, and we\'re too underpowered to fend them off alone.',
      ),
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-archmage-2.mp3',
        archMageName,
        'You would take on the bandit camp for us? Your courage is truly remarkable. Unfortunately, our troops are too injured to assist you directly. I can only offer a Water Elemental to aid in your quest. May it serve you well.',
      ),
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-archmage-3.mp3',
        archMageName,
        'You\'re back! I can\'t express how relieved we all are. You\'ve done something remarkable here.',
      ),
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-archmage-4.mp3',
        archMageName,
        'To show my gratitude, let me teach you something invaluable—a spell to summon a Water Elemental. It’s a rare gift, use it well.',
      ),
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-archmage-5.mp3',
        archMageName,
        'One more thing - near the south watch tower of the farm, by the cliff, there\'s a hidden spot where the land’s energies restore mana. It\'s a secret known to few.',
      ),
    ];

    banditSounds = [
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-bandit-1.mp3',
        'Bandit Lord',
        'Well, look at that. Someone from the battered outpost dares to show up. Bold move!',
      ),
      createDialogSound(
        'QuestSounds\\bandit-banish\\bandit-banish-bandit-2.mp3',
        'Bandit Lord',
        'You... you think this is over? The Black Turban Syndicate won\'t let you get away with this.',
      ),
    ];
  }

  async register() {
    const {
      archMage, john, peter, bandits, johnRect, peterRect, banditLord, sightBlockersRect,
    } = this.globals;
    archMage.nameProper = archMageName.replace('ArchMage ', '');
    archMage.name = 'Archmage of Northern Watch';

    await this.waitDependenciesDone();

    john.show = true;
    peter.show = true;
    const johnPos = centerLocRect(johnRect);
    const peterPos = centerLocRect(peterRect);
    john.setPosition(johnPos.x, johnPos.y);
    peter.setPosition(peterPos.x, peterPos.y);
    john.setFacingEx(270);
    peter.setFacingEx(0);
    guardCurrentPosition(john);
    guardCurrentPosition(peter);

    let traveler = await this.talkToQuestGiver(john, true);

    // outpost injured
    getUnitsInRangeOfLoc(700, archMage, (u) => u.isAlive())
      .forEach((u) => u.life = GetRandomReal(0.2, 0.6) * u.maxLife);

    // John asks to deliver item to outpost
    const talkGroup = new TalkGroup([john, peter, traveler]);
    await talkGroup.speak(john, johnSounds[0], traveler);
    await sleep(1);
    await talkGroup.speak(john, johnSounds[1], traveler);
    talkGroup.finish();

    // Destroy sight blockers
    getDestructablesInRect(sightBlockersRect, (d) => d.typeId === FourCC('YTlb'))
      .forEach((d) => d.kill());

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: [questItems[0]],
    });

    traveler = await this.waitForTurnIn(archMage);
    // Archmage asks for help
    const talkGroup2 = new TalkGroup([archMage, traveler,
      ...getUnitsInRangeOfLoc(800, archMage, (u) => u.isAlive() && isOrganic(u)),
    ]);
    await talkGroup2.speak(archMage, archMageSounds[0], traveler);
    await sleep(1.5);
    await talkGroup2.speak(archMage, archMageSounds[1], traveler);

    // Archmage summons water elemental to help
    const summonTrigger = buildTrigger((t) => {
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SUMMON);
      t.addCondition(() => Unit.fromHandle(GetSummoningUnit()) === archMage);
      t.addAction(() => {
        RescueUnitBJ(GetSummonedUnit(), traveler.owner.handle, false);
        summonTrigger.destroy();
      });
    });
    await sleep(0.1);
    archMage.issueImmediateOrder(OrderId.Waterelemental);

    talkGroup2.finish();

    await questLog.completeItem(0);
    await questLog.insertItem(questItems[1]);

    // Wait until approaching bandits nearby
    await waitUntil(0.25, () => bandits.some((bandit) => getUnitsInRangeOfLoc(
      600,
      bandit,
      (enemy) => enemy.isAlive() && enemy.owner === traveler.owner && enemy.isVisible(bandit.owner),
    ).length > 0));
    playSpeech(banditLord, banditSounds[0]);

    // Play last words when bandit lords is low
    waitUntil(1, () => {
      if (bandits.filter((u) => u.isAlive()).length <= 1) {
        playSpeech(banditLord, banditSounds[1]);
        return true;
      }
      return false;
    });

    // Mark bandits and wait for them all dead
    let banditIconUnit = bandits[0];
    setMinimapIconUnit(banditIconUnit, 'enemyActive');
    await waitUntil(1, () => {
      if (!banditIconUnit.isAlive()) {
        removeMinimapIcon(banditIconUnit);
        banditIconUnit = bandits.find((u) => u.isAlive());
        if (banditIconUnit) {
          setMinimapIconUnit(banditIconUnit, 'enemyActive');
        }
      }
      return bandits.every((u) => !u.isAlive());
    });

    // Quest is done, give reward
    await questLog.completeItem(1);
    await questLog.insertItem(questItems[2]);

    traveler = await this.waitForTurnIn(archMage);
    await talkGroup2.speak(archMage, archMageSounds[2], traveler);
    await sleep(0.5);
    await talkGroup2.speak(archMage, archMageSounds[3], traveler);

    traveler.addExperience(rewardXp, true);
    traveler.addAbility(ABILITY_ArchMageWaterElemental.id);
    await questLog.completeWithRewards([
      `${GetAbilityName(ABILITY_ArchMageWaterElemental.id)}`,
      `${rewardXp} experience`,
    ]);

    await sleep(1.5);
    await talkGroup2.speak(archMage, archMageSounds[4], traveler);

    talkGroup2.finish();
    this.complete();
  }

  onForceComplete() {
    const { bandits } = this.globals;
    bandits.forEach((u) => u.kill());
  }
}
