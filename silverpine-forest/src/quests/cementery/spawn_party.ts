import { playerMain, neutralPassive } from 'lib/constants';
import { RandomSet } from 'lib/data_structures/random_set';
import { randomLocRect } from 'lib/location';
import { getUnitSounds } from 'lib/resources/unit-sounds';
import {
  ABILITY_AuraPlagueAbomination, ABILITY_PermanentInvisibility, ABILITY_ShadowMeld, ABILITY_ShadowMeldAkama, ABILITY_ShadowMeldInstant,
} from 'lib/resources/war3-abilities';
import {
  ALL_HEROES, HERO_akama, HERO_archimonde, HERO_cenarius, HERO_Mannoroth, HERO_tichondrius,
} from 'lib/resources/war3-heroes';
import {
  UNIT_Abomination, UNIT_Acolyte, UNIT_Archer, UNIT_Berserker, UNIT_BlackrockBlademaster,
  UNIT_BloodElfEngineer, UNIT_BloodElfLieutenant, UNIT_BloodElfSpellBreaker, UNIT_BloodElfWorker,
  UNIT_Chaplain, UNIT_DruidoftheClaw, UNIT_DruidoftheTalon, UNIT_Dryad, UNIT_Footman,
  UNIT_GhostlyArchmage, UNIT_Ghoul, UNIT_GiantSkeletonWarrior, UNIT_Grunt, UNIT_HighElvenArcher,
  UNIT_HighElvenSwordsman, UNIT_Huntress, UNIT_Hydromancer, UNIT_Knight, UNIT_MortarTeam,
  UNIT_MountainGiant, UNIT_Necromancer, UNIT_NightElfAssassin, UNIT_NightElfCourier,
  UNIT_OrcWarchief, UNIT_Priest, UNIT_Rifleman, UNIT_Shaman, UNIT_Shandris, UNIT_SkeletalOrc,
  UNIT_SkeletalOrcChampion, UNIT_SkeletalOrcGrunt, UNIT_Sorceress, UNIT_Spiritwalker,
  UNIT_SpiritWolfLevel3, UNIT_Tauren, UNIT_TheCaptain, UNIT_War2Warlock, UNIT_Watcher, UNIT_WitchDoctor,
} from 'lib/resources/war3-units';
import { pickRandomMany } from 'lib/utils';
import { Sound, Unit } from 'w3ts';

export const ghostR = 200;
export const ghostG = 200;
export const ghostB = 200;
export const ghostA = 75;

export function spawnParty(partySpawnRect: rect): {
  partyGoers: RandomSet<Unit>,
  chatSounds: Map<Unit, Sound[]>,
  attackSounds: Map<Unit, Sound[]>,
  } {
  const partyGoerTypes = [
    // Undead
    UNIT_Ghoul,
    UNIT_Abomination,
    UNIT_Acolyte,
    UNIT_Necromancer,
    UNIT_SkeletalOrc,
    UNIT_SkeletalOrcChampion,
    UNIT_SkeletalOrcGrunt,
    UNIT_GiantSkeletonWarrior,

    // Human
    UNIT_TheCaptain,
    UNIT_Footman,
    UNIT_HighElvenSwordsman,
    UNIT_Priest,
    UNIT_Sorceress,
    UNIT_BloodElfSpellBreaker,
    UNIT_HighElvenArcher,
    UNIT_MortarTeam,
    UNIT_Rifleman,
    UNIT_Knight,
    UNIT_Chaplain,
    UNIT_Hydromancer,
    UNIT_BloodElfEngineer,
    UNIT_BloodElfWorker,
    UNIT_BloodElfLieutenant,
    UNIT_GhostlyArchmage,

    // Orc
    UNIT_Grunt,
    UNIT_Tauren,
    UNIT_Berserker,
    UNIT_WitchDoctor,
    UNIT_Shaman,
    UNIT_Spiritwalker,
    UNIT_BlackrockBlademaster,
    UNIT_SpiritWolfLevel3,
    UNIT_OrcWarchief,
    UNIT_War2Warlock,

    // Night elf
    UNIT_Archer,
    UNIT_Huntress,
    UNIT_Dryad,
    UNIT_DruidoftheClaw,
    UNIT_DruidoftheTalon,
    UNIT_MountainGiant,
    UNIT_NightElfCourier,
    UNIT_Watcher,
    UNIT_NightElfAssassin,
    UNIT_Shandris,

    // Heroes
    ...pickRandomMany(ALL_HEROES, 15)
      // Ignore those are too strong, or Akama which has Lich King's voice
      .filter((hero) => ![HERO_archimonde, HERO_tichondrius, HERO_cenarius, HERO_Mannoroth, HERO_akama].includes(hero))
      .map((hero) => ({ code: hero.code, id: FourCC(hero.code) })),
  ];

  const partyGoers = new RandomSet<Unit>();
  const chatSounds = new Map<Unit, Sound[]>();
  const attackSounds = new Map<Unit, Sound[]>();

  for (const goerType of partyGoerTypes) {
    const loc = randomLocRect(partySpawnRect);
    // Create unit
    const unit = Unit.create(neutralPassive, goerType.id, loc.x, loc.y, GetRandomDirectionDeg());
    unit.setVertexColor(ghostR, ghostG, ghostB, ghostA);
    unit.shareVision(playerMain, true);
    unit.maxLife = Math.max(100, unit.maxLife);
    unit.life = unit.maxLife;
    unit.removeAbility(ABILITY_ShadowMeld.id);
    unit.removeAbility(ABILITY_PermanentInvisibility.id);
    unit.removeAbility(ABILITY_ShadowMeldInstant.id);
    unit.removeAbility(ABILITY_ShadowMeldAkama.id);
    unit.removeAbility(ABILITY_AuraPlagueAbomination.id); // avoid hitting other neutrals, e.g. player
    unit.setPathing(false);
    unit.show = false;
    partyGoers.insert(unit);

    // Unit chat sounds
    chatSounds.set(unit, []);
    attackSounds.set(unit, []);

    const unitChatSounds = getUnitSounds(unit.typeId, 'What', 'Pissed', 'Yes', 'Ready');
    for (const path of unitChatSounds) {
      const snd = Sound.create(path, false, false, false, 1, 1, 'DefaultEAXON');
      // snd.setDistances(1000, 3000);
      // AttachSoundToUnit(snd.handle, unit.handle);
      chatSounds.get(unit).push(snd);
    }
    const unitAttackSounds = getUnitSounds(unit.typeId, 'YesAttack', 'Warcry');
    for (const path of unitAttackSounds) {
      const snd = Sound.create(path, false, false, false, 1, 1, 'DefaultEAXON');
      // snd.setDistances(1000, 3000);
      // AttachSoundToUnit(snd.handle, unit.handle);
      attackSounds.get(unit).push(snd);
    }
  }

  return { partyGoers, chatSounds, attackSounds };
}
