/* eslint-disable max-len */

import { mainPlayer } from 'lib/constants';
import { QuestLog } from 'lib/quests/quest_log';
import { ABILITY_ArchMageWaterElemental } from 'lib/resources/war3-abilities';
import { getUnitsInRangeOfLoc } from 'lib/unit';
import { waitUntil } from 'lib/utils';
import {
  sleep,
  Unit,
} from 'w3ts';

import { BaseQuest, BaseQuestProps } from '../base';

const questName = 'Hidden Energies';
const questDescription = 'ArchMage Landazar whispers, "Near the south watch tower of the farm, by the cliff, there\'s a hidden spot where the land’s energies restore mana. It\'s a secret known to few." Can you uncover this mystical place and harness its power?';
const questIcon = 'ReplaceableTextures\\CommandButtons\\BTNFountainOfMana.blp';
const questItems = [
  'Find the secret spot where the land’s energies restore mana',
];

const rewardXp = 1200;

export class HiddenEnergies extends BaseQuest {
  constructor(public globals: BaseQuestProps & {
    fountain: Unit
  }) {
    super(globals);
  }

  async register(): Promise<void> {
    const { fountain } = this.globals;
    fountain.name = 'Hidden Energy Vein';

    await this.waitDependenciesDone();
    await sleep(2);

    const questLog = await QuestLog.create({
      name: questName,
      description: questDescription,
      icon: questIcon,
      items: questItems,
    });

    await waitUntil(5, () => getUnitsInRangeOfLoc(
      500,
      fountain,
      (unit) => unit.isHero() && unit.owner === mainPlayer && !unit.isIllusion(),
    ).length > 0);

    const traveler = getUnitsInRangeOfLoc(
      500,
      fountain,
      (unit) => unit.isHero() && unit.owner === mainPlayer && !unit.isIllusion(),
    )[0];

    traveler.addExperience(rewardXp, true);
    const rewards = [
      `${rewardXp} experience`,
    ];

    if (traveler.getAbility(ABILITY_ArchMageWaterElemental.id)) {
      traveler.incAbilityLevel(ABILITY_ArchMageWaterElemental.id);
      rewards.splice(0, 0, `+1 level ${GetAbilityName(ABILITY_ArchMageWaterElemental.id)}`);
    }
    await questLog.completeWithRewards(rewards);
    this.complete();
  }

  onForceComplete(): void {
  }
}
