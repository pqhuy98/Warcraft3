import {
  ABILITY_ID_BLADE_DANCE,
  ABILITY_ID_CHAIN_LIGHTNING,
  ABILITY_ID_CRITICAL_STRIKE_SAMURO,
  ABILITY_ID_DEATH_COIL_LICH_KING, ABILITY_ID_DIVINE_FURY, ABILITY_ID_DOMINATION_AURA, ABILITY_ID_FROST_BOLT_LICH_KING,
  ABILITY_ID_FROST_NOVA_LICH_KING, ABILITY_ID_SANDQUAKE, ABILITY_ID_THUNDER_BLINK, ABILITY_ID_WIND_WALK_SAMURO,
  ABILITY_ID_WRATH_OF_THE_LICH_KING, globalUnits,
} from 'lib/constants';
import {
  ABILITY_ArchMageBlizzard, ABILITY_ArchMageBrillianceAura, ABILITY_ArchMageMassTeleport, ABILITY_ArchMageWaterElemental,
  ABILITY_BladeMasterBladestorm, ABILITY_BladeMasterMirrorImage, ABILITY_CryptLordSpikedCarapace, ABILITY_FarseerChainLightning,
  ABILITY_FarseerEarthquake, ABILITY_FarseerSpiritWolf,
  ABILITY_KeeperEntanglingRoots,
  ABILITY_SeaWitchForkedLightning,
} from 'lib/resources/war3-abilities';
import { Unit } from 'w3ts';

export function getSkillBuilds(unit: Unit): number[] {
  if (unit === globalUnits.heroLichKing) {
    const skills = [
      ABILITY_ID_FROST_NOVA_LICH_KING,
      ABILITY_ID_DOMINATION_AURA,
      ABILITY_ID_FROST_NOVA_LICH_KING,
      ABILITY_ID_FROST_BOLT_LICH_KING,
      ABILITY_ID_FROST_NOVA_LICH_KING,
      ABILITY_ID_DEATH_COIL_LICH_KING,
      ABILITY_ID_DOMINATION_AURA,
      ABILITY_ID_FROST_BOLT_LICH_KING,
      ABILITY_ID_DOMINATION_AURA,
      ABILITY_ID_FROST_BOLT_LICH_KING,
      ABILITY_ID_DEATH_COIL_LICH_KING,
      ABILITY_ID_DEATH_COIL_LICH_KING,
    ];
    skills.splice(5, 0, ABILITY_ID_WRATH_OF_THE_LICH_KING);
    skills.splice(5 + 5, 0, ABILITY_ID_WRATH_OF_THE_LICH_KING);
    skills.splice(5 + 5 + 5, 0, ABILITY_ID_WRATH_OF_THE_LICH_KING);
    return skills;
  }

  if (unit === globalUnits.heroScortah) {
    const skills = [
      ABILITY_ID_SANDQUAKE,
      FourCC(ABILITY_CryptLordSpikedCarapace.code),
      ABILITY_ID_SANDQUAKE,
      FourCC(ABILITY_CryptLordSpikedCarapace.code),
      ABILITY_ID_SANDQUAKE,
      FourCC(ABILITY_CryptLordSpikedCarapace.code),
      ABILITY_ID_SANDQUAKE,
    ];
    return skills;
  }

  if (unit === globalUnits.heroZeus) {
    const skills = [
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
      ABILITY_ID_CHAIN_LIGHTNING,
      ABILITY_ID_THUNDER_BLINK,
    ];
    skills.splice(5, 0, ABILITY_ID_DIVINE_FURY);
    skills.splice(5 + 5, 0, ABILITY_ID_DIVINE_FURY);
    skills.splice(5 + 5 + 5, 0, ABILITY_ID_DIVINE_FURY);
    return skills;
  }

  if (unit === globalUnits.heroJaina) {
    const skills = [
      FourCC(ABILITY_ArchMageBlizzard.code),
      FourCC(ABILITY_ArchMageWaterElemental.code),
      FourCC(ABILITY_ArchMageBrillianceAura.code),
      FourCC(ABILITY_ArchMageBlizzard.code),
      FourCC(ABILITY_ArchMageWaterElemental.code),
      FourCC(ABILITY_ArchMageBlizzard.code),
      FourCC(ABILITY_ArchMageWaterElemental.code),
      FourCC(ABILITY_ArchMageBrillianceAura.code),
      FourCC(ABILITY_ArchMageBrillianceAura.code),
    ];
    skills.splice(5, 0, FourCC(ABILITY_ArchMageMassTeleport.code));
    return skills;
  }

  if (unit === globalUnits.heroThrall) {
    const skills = [
      FourCC(ABILITY_FarseerChainLightning.code),
      FourCC(ABILITY_SeaWitchForkedLightning.code),
      FourCC(ABILITY_KeeperEntanglingRoots.code),
      FourCC(ABILITY_FarseerSpiritWolf.code),
      FourCC(ABILITY_FarseerChainLightning.code),
      FourCC(ABILITY_SeaWitchForkedLightning.code),
      FourCC(ABILITY_KeeperEntanglingRoots.code),
      FourCC(ABILITY_FarseerSpiritWolf.code),
      FourCC(ABILITY_FarseerChainLightning.code),
      FourCC(ABILITY_SeaWitchForkedLightning.code),
      FourCC(ABILITY_KeeperEntanglingRoots.code),
      FourCC(ABILITY_FarseerSpiritWolf.code),
    ];
    skills.splice(5, 0, FourCC(ABILITY_FarseerEarthquake.code));
    return skills;
  }

  if (unit === globalUnits.heroSamuro) {
    const skills = [
      ABILITY_ID_CRITICAL_STRIKE_SAMURO,
      FourCC(ABILITY_BladeMasterMirrorImage.code),
      ABILITY_ID_CRITICAL_STRIKE_SAMURO,
      ABILITY_ID_WIND_WALK_SAMURO,
      FourCC(ABILITY_BladeMasterMirrorImage.code),
      ABILITY_ID_CRITICAL_STRIKE_SAMURO,
      FourCC(ABILITY_BladeMasterMirrorImage.code),
      ABILITY_ID_CRITICAL_STRIKE_SAMURO,
      ABILITY_ID_WIND_WALK_SAMURO,
      ABILITY_ID_WIND_WALK_SAMURO,
      ABILITY_ID_WIND_WALK_SAMURO,
    ];
    skills.splice(5, 0, ABILITY_ID_BLADE_DANCE);
    skills.splice(5 + 1, 0, FourCC(ABILITY_BladeMasterBladestorm.code));
    skills.splice(5 + 5, 0, ABILITY_ID_BLADE_DANCE);
    skills.splice(5 + 5 + 5, 0, ABILITY_ID_BLADE_DANCE);
    return skills;
  }

  return [];
}
