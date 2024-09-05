import { neutralHostile, playerForsaken } from 'lib/constants';
import { setTimeout } from 'lib/trigger';
import { getUnitsInRect, isBuilding } from 'lib/unit';
import { Unit } from 'w3ts';

import { BanditBanish } from './bandit_banish/bandit_banish';
import { ElvenDrink } from './elven_drink/elven_drink';
import { GatherSheeps } from './gather_sheeps/gather_sheeps';
import { HiddenEnergies } from './hidden_energies/hidden_energies';
import { LumberMill } from './lumber_mill/lumber_mill';
import { LumberMillPart2 } from './lumber_mill/lumber_mill_part_2';
import { StrikeBack } from './lumber_mill/strike_back';
import { RabbitHunt } from './rabbit_hunt/rabbit_hunt';

export class QuestRegistry {
  static register() {
    setTimeout(0, () => {
      // GatherSheeps
      const gatherSheeps = new GatherSheeps({
        name: 'Gather Sheeps',
        sheepBoy: Unit.fromHandle(gg_unit_nvk2_0064),
        grassRects: [
          gg_rct_Sheeps,
          gg_rct_Sheeps_2,
          gg_rct_Sheeps_3,
        ],
        homeRect: gg_rct_Sheep_farm_entrance,
        dependencies: [],
        cheatName: 'gs',
      });
      gatherSheeps.register();

      // RabbitHunt
      const rabbitHunt = new RabbitHunt({
        name: 'Rabbit Hunt',
        jacob: Unit.fromHandle(gg_unit_nvil_0035),
        wheatFieldRects: [
          gg_rct_Wheat_field,
          gg_rct_Wheat_field_2,
        ],
        dependencies: [],
        cheatName: 'rh',
      });
      rabbitHunt.register();

      // LumberMill
      const lumberMill1 = new LumberMill({
        name: 'Lumber Mill 1',
        john: Unit.fromHandle(gg_unit_nvl2_0413),
        peter: Unit.fromHandle(gg_unit_nvil_0414),
        lumberMillCorpse1Rect: gg_rct_Lumber_mill_corpses_1,
        lumberMillCorpse2Rect: gg_rct_Lumber_mill_corpses_2,
        townRect1: gg_rct_LumberMill_road_to_town_1,
        townRect2: gg_rct_LumberMill_road_to_town_2,
        townKnight: Unit.fromHandle(gg_unit_hkni_0134),
        dependencies: [rabbitHunt],
        cheatName: 'lm',
      });
      lumberMill1.register();

      // LumberMillPart2
      const lumberMill2 = new LumberMillPart2({
        name: 'Lumber Mill 2',
        john: Unit.fromHandle(gg_unit_nvl2_0413),
        peter: Unit.fromHandle(gg_unit_nvil_0414),
        knight: Unit.fromHandle(gg_unit_hkni_0134),
        mayor: Unit.fromHandle(gg_unit_Hpb1_0145),
        footmen: [
          Unit.fromHandle(gg_unit_hfoo_0151),
          Unit.fromHandle(gg_unit_hfoo_0150),
          Unit.fromHandle(gg_unit_hfoo_0149),
          Unit.fromHandle(gg_unit_hfoo_0148),
        ],
        undeadAttackers: getUnitsInRect(gg_rct_Lumber_Mill_ambusher, (u) => u.isAlive()
          && u.owner === playerForsaken
          && !isBuilding(u)),
        lumberMillRect: gg_rct_Lumber_Mill,
        homeRect: gg_rct_Sheep_farm_entrance,
        dependencies: [lumberMill1],
        cheatName: 'lm2',
      });
      lumberMill2.register();

      // StrikeBack
      const strikeBack = new StrikeBack({
        name: 'Strike Back',
        knight: Unit.fromHandle(gg_unit_hkni_0134),
        mayor: Unit.fromHandle(gg_unit_Hpb1_0145),
        undeadBaseRect: gg_rct_Undead_ruin,
        humanBaseRect: gg_rct_Human_Town,
        knightRectAfterQuest: gg_rct_Knight_after_StrikeBack,
        dependencies: [lumberMill2],
        cheatName: 'sb',
      });
      strikeBack.register();

      // BanditBanish
      const banditBanish = new BanditBanish({
        name: 'Bandits Banish',
        john: Unit.fromHandle(gg_unit_nvl2_0413),
        peter: Unit.fromHandle(gg_unit_nvil_0414),
        archMage: Unit.fromHandle(gg_unit_Hamg_0109),
        banditLord: Unit.fromHandle(gg_unit_nbld_0128),
        bandits: getUnitsInRect(gg_rct_Bandit_camp, (u) => u.isAlive() && u.owner === neutralHostile),
        johnRect: gg_rct_John_after_undead,
        peterRect: gg_rct_Peter_after_undead,
        sightBlockersRect: gg_rct_Sight_blockers_farm,
        dependencies: [strikeBack],
        cheatName: 'bb',
      });
      banditBanish.register();

      // HiddenEnergies
      const hiddenEnergies = new HiddenEnergies({
        name: 'Hidden Energies',
        fountain: Unit.fromHandle(gg_unit_nmoo_0068),
        dependencies: [banditBanish],
        cheatName: 'he',
      });
      hiddenEnergies.register();

      // Elven Drink
      new ElvenDrink({
        name: 'Elven Drink',
        questGiver: Unit.fromHandle(gg_unit_nhem_0557),
        dependencies: [],
        cheatName: 'ed',
      }).register();
    });
  }
}
