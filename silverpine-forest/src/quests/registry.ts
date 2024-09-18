/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  mainPlayer, playerBlackTurban, playerForsaken,
  playerOrcishHorde,
} from 'lib/constants';
import { setTimeout } from 'lib/trigger';
import { getUnitsInRect, isBuilding } from 'lib/unit';
import { Unit } from 'w3ts';

import { BanditBanish } from './bandit_banish/bandit_banish';
import { BlackTurban } from './black_turban/black_turban';
import { Cementery } from './cementery/cementery';
import { ElvenDrink } from './elven_drink/elven_drink';
import { GatherSheeps } from './gather_sheeps/gather_sheeps';
import { HiddenEnergies } from './hidden_energies/hidden_energies';
import { LumberMill } from './lumber_mill/lumber_mill';
import { LumberMillPart2 } from './lumber_mill/lumber_mill_part_2';
import { StrikeBack } from './lumber_mill/strike_back';
import { OrcAttack } from './orc_attack/orc_attack';
import { RabbitHunt } from './rabbit_hunt/rabbit_hunt';
import { ShadowFangGate } from './shadow_fang_city/shadow_fang_gate';

export class QuestRegistry {
  static register(): void {
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
        humanBaseRect: gg_rct_AmberMill_region,
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
        bandits: getUnitsInRect(gg_rct_Bandit_camp, (u) => u.isAlive() && u.owner === playerBlackTurban),
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

      // Black Turban
      new BlackTurban({
        name: 'Black Turban',
        victimPlayer: mainPlayer,
        banditPlayer: playerBlackTurban,
        banditHomeEntranceRect: gg_rct_Waygate_island_back,
        banditHomeRect: gg_rct_Bandit_Base,
        safeRects: [
          gg_rct_Orc_shore_base, gg_rct_Orc_east_base, gg_rct_Bandit_Island, gg_rct_Bandit_Base,
          gg_rct_Thalandor_home, gg_rct_AmberMill_region, gg_rct_Farm_region,
          gg_rct_Shadowfang_region, gg_rct_Night_elf_shore_base,
          gg_rct_Keep_Fog, gg_rct_Human_shipyard,
        ],
        dependencies: [banditBanish],
        cheatName: 'bt',
      }).register();

      // Orc attacking
      new OrcAttack({
        name: 'Orc Attack',
        archmage: Unit.fromHandle(gg_unit_Hamg_0109),
        footman: Unit.fromHandle(gg_unit_hfoo_0941),
        captain: Unit.fromHandle(gg_unit_hcth_0943),
        footManNewLocRec: gg_rct_Orc_attack_footman_loc,
        corpsesRect: gg_rct_Orc_attack_corpses,
        humanShipyardRect: gg_rct_Human_shipyard,
        orcPlayer: playerOrcishHorde,
        orcBaseRect: gg_rct_Orc_east_base,
        orcGatherRect: gg_rct_Orc_base_attack_gathering,
        dependencies: [hiddenEnergies],
        cheatName: 'oa',
      }).register();

      // Shadow fang gate
      new ShadowFangGate({
        name: 'Shadow Fang Gate',
        gateKeepers: [
          Unit.fromHandle(gg_unit_hkni_0680),
          Unit.fromHandle(gg_unit_hmtm_0682),
        ],
        dependencies: [],
        cheatName: 'sfg',
      }).register();

      // Cementery
      new Cementery({
        name: 'Cementary\'s Ghost Party',
        ghostLadiesRect: gg_rct_Ghost_ladies_graveyard,
        cementeryEntryRect: gg_rct_Cementery_entry,
        partyRect: gg_rct_Cementery_area,
        partySpawnRect: gg_rct_Cemetery_spawns,
        partyStageRect: gg_rct_Cementery_Stage,
        partyActivateRect: gg_rct_Cementery_activate,
        dependencies: [],
        cheatName: 'cgp',
      }).register();
    });
  }
}
