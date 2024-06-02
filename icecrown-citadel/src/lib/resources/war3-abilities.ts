export interface ABILITY_TYPE {
  code: string
  sort: 'hero' | 'unit' | 'item'
  race: 'human' | 'orc' | 'undead' | 'nightelf' | 'naga' | 'creeps' | 'other'
  levels: number
  requiredLevel: number
}
export const ABILITY_ArchMageBlizzard: ABILITY_TYPE = {
  code: 'AHbz',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ArchMageBrillianceAura: ABILITY_TYPE = {
  code: 'AHab',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ArchMageMassTeleport: ABILITY_TYPE = {
  code: 'AHmt',
  sort: 'hero',
  race: 'human',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_ArchMageWaterElemental: ABILITY_TYPE = {
  code: 'AHwe',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BeastMasterStampede: ABILITY_TYPE = {
  code: 'ANst',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_BeastMasterSummonBear: ABILITY_TYPE = {
  code: 'ANsg',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BeastMasterSummonQuilbeast: ABILITY_TYPE = {
  code: 'ANsq',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BeastMasterSummonHawk: ABILITY_TYPE = {
  code: 'ANsw',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BladeMasterBladestorm: ABILITY_TYPE = {
  code: 'AOww',
  sort: 'hero',
  race: 'orc',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_BladeMasterCriticalStrike: ABILITY_TYPE = {
  code: 'AOcr',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BladeMasterMirrorImage: ABILITY_TYPE = {
  code: 'AOmi',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BladeMasterWindWalk: ABILITY_TYPE = {
  code: 'AOwk',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BloodMageBanish: ABILITY_TYPE = {
  code: 'AHbn',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BloodMageFlameStrike: ABILITY_TYPE = {
  code: 'AHfs',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BloodMageSiphonMana: ABILITY_TYPE = {
  code: 'AHdr',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BloodMagePhoenix: ABILITY_TYPE = {
  code: 'AHpx',
  sort: 'hero',
  race: 'human',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_CryptLordCarrionScarabs: ABILITY_TYPE = {
  code: 'AUcb',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_CryptLordImpale: ABILITY_TYPE = {
  code: 'AUim',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_CryptLordLocustSwarm: ABILITY_TYPE = {
  code: 'AUls',
  sort: 'hero',
  race: 'undead',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_CryptLordSpikedCarapace: ABILITY_TYPE = {
  code: 'AUts',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DarkRangerBlackArrow: ABILITY_TYPE = {
  code: 'ANba',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DarkRangerCharm: ABILITY_TYPE = {
  code: 'ANch',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_DarkRangerDrain: ABILITY_TYPE = {
  code: 'ANdr',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DarkRangerSilence: ABILITY_TYPE = {
  code: 'ANsi',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DeathKnightAnimateDead: ABILITY_TYPE = {
  code: 'AUan',
  sort: 'hero',
  race: 'undead',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_DeathKnightDeathCoil: ABILITY_TYPE = {
  code: 'AUdc',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DeathKnightDeathPact: ABILITY_TYPE = {
  code: 'AUdp',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DeathKnightUnholyAura: ABILITY_TYPE = {
  code: 'AUau',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DemonHunterEvasion: ABILITY_TYPE = {
  code: 'AEev',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DemonHunterImmolation: ABILITY_TYPE = {
  code: 'AEim',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DemonHunterManaBurn: ABILITY_TYPE = {
  code: 'AEmb',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DemonHunterMetamorphosis: ABILITY_TYPE = {
  code: 'AEme',
  sort: 'hero',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_DreadlordSleep: ABILITY_TYPE = {
  code: 'AUsl',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DreadlordVampiricAura: ABILITY_TYPE = {
  code: 'AUav',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DreadlordCarrionSwarm: ABILITY_TYPE = {
  code: 'AUcs',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DreadlordInferno: ABILITY_TYPE = {
  code: 'AUin',
  sort: 'hero',
  race: 'undead',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_FarseerChainLightning: ABILITY_TYPE = {
  code: 'AOcl',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FarseerEarthquake: ABILITY_TYPE = {
  code: 'AOeq',
  sort: 'hero',
  race: 'orc',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_FarseerFarSight: ABILITY_TYPE = {
  code: 'AOfs',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FarseerSpiritWolf: ABILITY_TYPE = {
  code: 'AOsf',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_KeeperEntanglingRoots: ABILITY_TYPE = {
  code: 'AEer',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_KeeperForceOfNature: ABILITY_TYPE = {
  code: 'AEfn',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_KeeperThornsAura: ABILITY_TYPE = {
  code: 'AEah',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_KeeperTranquility: ABILITY_TYPE = {
  code: 'AEtq',
  sort: 'hero',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_LichDarkRitual: ABILITY_TYPE = {
  code: 'AUdr',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_LichDeathAndDecay: ABILITY_TYPE = {
  code: 'AUdd',
  sort: 'hero',
  race: 'undead',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_LichFrostArmor: ABILITY_TYPE = {
  code: 'AUfa',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_LichFrostArmorAutocast: ABILITY_TYPE = {
  code: 'AUfu',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_LichFrostNova: ABILITY_TYPE = {
  code: 'AUfn',
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_MountainKingAvatar: ABILITY_TYPE = {
  code: 'AHav',
  sort: 'hero',
  race: 'human',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_MountainKingBash: ABILITY_TYPE = {
  code: 'AHbh',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_MountainKingThunderBolt: ABILITY_TYPE = {
  code: 'AHtb',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_MountainKingThunderClap: ABILITY_TYPE = {
  code: 'AHtc',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_SeaWitchForkedLightning: ABILITY_TYPE = {
  code: 'ANfl',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_SeaWitchFrostArrows: ABILITY_TYPE = {
  code: 'ANfa',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_SeaWitchTornado: ABILITY_TYPE = {
  code: 'ANto',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_SeaWitchManaShield: ABILITY_TYPE = {
  code: 'ANms',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PaladinDevotionAura: ABILITY_TYPE = {
  code: 'AHad',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PaladinDivineShield: ABILITY_TYPE = {
  code: 'AHds',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PaladinHolyLight: ABILITY_TYPE = {
  code: 'AHhb',
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PaladinResurrection: ABILITY_TYPE = {
  code: 'AHre',
  sort: 'hero',
  race: 'human',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_BrewmasterBreathOfFire: ABILITY_TYPE = {
  code: 'ANbf',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BrewmasterDrunkenBrawler: ABILITY_TYPE = {
  code: 'ANdb',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BrewmasterDrunkenHaze: ABILITY_TYPE = {
  code: 'ANdh',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BrewmasterStormEarthAndFire: ABILITY_TYPE = {
  code: 'ANef',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_PitLordDoom: ABILITY_TYPE = {
  code: 'ANdo',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_PitLordHowlOfTerror: ABILITY_TYPE = {
  code: 'ANht',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PitLordCleavingAttack: ABILITY_TYPE = {
  code: 'ANca',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PitLordRainOfFire: ABILITY_TYPE = {
  code: 'ANrf',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PriestessSearingArrows: ABILITY_TYPE = {
  code: 'AHfa',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PriestessScout: ABILITY_TYPE = {
  code: 'AEst',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PriestessStarfall: ABILITY_TYPE = {
  code: 'AEsf',
  sort: 'hero',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_PriestessTrueshotAura: ABILITY_TYPE = {
  code: 'AEar',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ChieftainEnduranceAura: ABILITY_TYPE = {
  code: 'AOae',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ChieftainReincarnation: ABILITY_TYPE = {
  code: 'AOre',
  sort: 'hero',
  race: 'orc',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_ChieftainShockWave: ABILITY_TYPE = {
  code: 'AOsh',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ChieftainWarStomp: ABILITY_TYPE = {
  code: 'AOws',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ShadowHunterHealingWave: ABILITY_TYPE = {
  code: 'AOhw',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ShadowHunterHex: ABILITY_TYPE = {
  code: 'AOhx',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ShadowHunterSerpentWard: ABILITY_TYPE = {
  code: 'AOsw',
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ShadowHunterVoodooo: ABILITY_TYPE = {
  code: 'AOvd',
  sort: 'hero',
  race: 'orc',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_WardenBlink: ABILITY_TYPE = {
  code: 'AEbl',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_WardenFanOfKnives: ABILITY_TYPE = {
  code: 'AEfk',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_WardenShadowStrike: ABILITY_TYPE = {
  code: 'AEsh',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_WardenSpiritOfVengeance: ABILITY_TYPE = {
  code: 'AEsv',
  sort: 'hero',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_Inferno: ABILITY_TYPE = {
  code: 'ANin',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_TichondriusInferno: ABILITY_TYPE = {
  code: 'SNin',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_FireBolt: ABILITY_TYPE = {
  code: 'ANfb',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FingerOfDeath: ABILITY_TYPE = {
  code: 'ANfd',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_FingerOfPain: ABILITY_TYPE = {
  code: 'ACfd',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FingerOfPain21Button: ABILITY_TYPE = {
  code: 'ACf3',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DarkPortal: ABILITY_TYPE = {
  code: 'ANdp',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_RainOfChaos: ABILITY_TYPE = {
  code: 'ANrc',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_RainOfChaosButton02: ABILITY_TYPE = {
  code: 'ANr3',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_CenariusBeefyStarfall: ABILITY_TYPE = {
  code: 'AEsb',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_MannorothReincarnation: ABILITY_TYPE = {
  code: 'ANrn',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_MalganisDarkConversion: ABILITY_TYPE = {
  code: 'ANdc',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_DarkConversionFast: ABILITY_TYPE = {
  code: 'SNdc',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_MalganisSoulPreservation: ABILITY_TYPE = {
  code: 'ANsl',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_IllidanMetamorphosis: ABILITY_TYPE = {
  code: 'AEIl',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_EvilIllidanMetamorphosis: ABILITY_TYPE = {
  code: 'AEvi',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_SuperEarthquake: ABILITY_TYPE = {
  code: 'SNeq',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_SuperDeathAndDecay: ABILITY_TYPE = {
  code: 'SNdd',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_Monsoon: ABILITY_TYPE = {
  code: 'ANmo',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PoisonArrows: ABILITY_TYPE = {
  code: 'AEpa',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_WateryMinion: ABILITY_TYPE = {
  code: 'ANwm',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ColdArrows: ABILITY_TYPE = {
  code: 'AHca',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BattleRoar: ABILITY_TYPE = {
  code: 'ANbr',
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RexxarSummonBear: ABILITY_TYPE = {
  code: 'Arsg',
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_AttributeModifierSkill: ABILITY_TYPE = {
  code: 'Aamk',
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RexxarSummonQuilbeast: ABILITY_TYPE = {
  code: 'Arsq',
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RexxarStampede: ABILITY_TYPE = {
  code: 'Arsp',
  sort: 'hero',
  race: 'creeps',
  levels: 2,
  requiredLevel: 6,
};
export const ABILITY_RexxarStormBolt: ABILITY_TYPE = {
  code: 'ANsb',
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RokhanHealingWave: ABILITY_TYPE = {
  code: 'ANhw',
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RokhanSerpentWard: ABILITY_TYPE = {
  code: 'Arsw',
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RokhanHex: ABILITY_TYPE = {
  code: 'ANhx',
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RokhanVoodooSpirits: ABILITY_TYPE = {
  code: 'AOls',
  sort: 'hero',
  race: 'orc',
  levels: 2,
  requiredLevel: 6,
};
export const ABILITY_ChenBreathOfFire: ABILITY_TYPE = {
  code: 'ANcf',
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_ChenDrunkenBrawler: ABILITY_TYPE = {
  code: 'Acdb',
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_ChenDrunkenHaze: ABILITY_TYPE = {
  code: 'Acdh',
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_ChenStormEarthAndFire: ABILITY_TYPE = {
  code: 'Acef',
  sort: 'hero',
  race: 'creeps',
  levels: 2,
  requiredLevel: 6,
};
export const ABILITY_CairneEnduranceAura: ABILITY_TYPE = {
  code: 'AOr2',
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_CairneReincarnation: ABILITY_TYPE = {
  code: 'AOr3',
  sort: 'hero',
  race: 'orc',
  levels: 2,
  requiredLevel: 6,
};
export const ABILITY_CairneShockWave: ABILITY_TYPE = {
  code: 'AOs2',
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_CairneWarStomp: ABILITY_TYPE = {
  code: 'AOw2',
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_IllidanChannel: ABILITY_TYPE = {
  code: 'ANcl',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_AbolishMagic: ABILITY_TYPE = {
  code: 'Aadm',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AbolishMagicNaga: ABILITY_TYPE = {
  code: 'Andm',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AbolishMagicCreep: ABILITY_TYPE = {
  code: 'ACdm',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AbolishMagicCreep12Pos: ABILITY_TYPE = {
  code: 'ACd2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AbsorbMana: ABILITY_TYPE = {
  code: 'Aabs',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AcolyteHarvest: ABILITY_TYPE = {
  code: 'Aaha',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AvatarGarithos: ABILITY_TYPE = {
  code: 'ANav',
  sort: 'hero',
  race: 'other',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_Alarm: ABILITY_TYPE = {
  code: 'Aalr',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AlliedBuilding: ABILITY_TYPE = {
  code: 'Aall',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AncestralSpirit: ABILITY_TYPE = {
  code: 'Aast',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AnimateDeadCreep: ABILITY_TYPE = {
  code: 'ACad',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AntiMagicShield: ABILITY_TYPE = {
  code: 'Aams',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AntiMagicShieldCreep: ABILITY_TYPE = {
  code: 'ACam',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Attack: ABILITY_TYPE = {
  code: 'Aatk',
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_AuraBrillianceCreep: ABILITY_TYPE = {
  code: 'ACba',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraCommandCreep: ABILITY_TYPE = {
  code: 'ACac',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraDevotionCreep: ABILITY_TYPE = {
  code: 'ACav',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraEnduranceCreep: ABILITY_TYPE = {
  code: 'SCae',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraPlagueAbomination: ABILITY_TYPE = {
  code: 'Aap1',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraPlaguePlagueWard: ABILITY_TYPE = {
  code: 'Aap2',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraPlagueCreep: ABILITY_TYPE = {
  code: 'Aap3',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraPlagueCreepGfx: ABILITY_TYPE = {
  code: 'Aap4',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraRegenerationWard: ABILITY_TYPE = {
  code: 'Aoar',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraRegenerationStatue: ABILITY_TYPE = {
  code: 'Aabr',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraSlow: ABILITY_TYPE = {
  code: 'Aasl',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraTrueshotCreep: ABILITY_TYPE = {
  code: 'ACat',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraWarDrums: ABILITY_TYPE = {
  code: 'Aakb',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AvengerForm: ABILITY_TYPE = {
  code: 'Aave',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Awaken: ABILITY_TYPE = {
  code: 'Aawa',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BallsOfFire: ABILITY_TYPE = {
  code: 'Abof',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BanishCreep: ABILITY_TYPE = {
  code: 'ACbn',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BashCreep: ABILITY_TYPE = {
  code: 'ACbh',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BashBeastmasterBear: ABILITY_TYPE = {
  code: 'ANbh',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BashMaulSPBearLevel3: ABILITY_TYPE = {
  code: 'ANb2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Battlestations: ABILITY_TYPE = {
  code: 'Abtl',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BattlestationsChaos: ABILITY_TYPE = {
  code: 'Sbtl',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Bearform: ABILITY_TYPE = {
  code: 'Abrf',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Beserk: ABILITY_TYPE = {
  code: 'Absk',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BerserkerUpgrade: ABILITY_TYPE = {
  code: 'Sbsk',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlackArrowMeleeCreep: ABILITY_TYPE = {
  code: 'ACbk',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightDispelSmall: ABILITY_TYPE = {
  code: 'Abds',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightDispelLarge: ABILITY_TYPE = {
  code: 'Abdl',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightGrowthSmall: ABILITY_TYPE = {
  code: 'Abgs',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightGrowthLarge: ABILITY_TYPE = {
  code: 'Abgl',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightedGoldMine: ABILITY_TYPE = {
  code: 'Abgm',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlinkBeastmasterBear: ABILITY_TYPE = {
  code: 'ANbl',
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BlizzardCreep: ABILITY_TYPE = {
  code: 'ACbz',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Bloodlust: ABILITY_TYPE = {
  code: 'Ablo',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BloodlustCreep: ABILITY_TYPE = {
  code: 'ACbl',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BloodlustCreepHotkeyB: ABILITY_TYPE = {
  code: 'ACbb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BreathOfFireCreep: ABILITY_TYPE = {
  code: 'ACbc',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BreathOfFrostCreep: ABILITY_TYPE = {
  code: 'ACbf',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildNeutral: ABILITY_TYPE = {
  code: 'ANbu',
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildHuman: ABILITY_TYPE = {
  code: 'AHbu',
  sort: 'unit',
  race: 'human',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildOrc: ABILITY_TYPE = {
  code: 'AObu',
  sort: 'unit',
  race: 'orc',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildNightElf: ABILITY_TYPE = {
  code: 'AEbu',
  sort: 'unit',
  race: 'nightelf',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildUndead: ABILITY_TYPE = {
  code: 'AUbu',
  sort: 'unit',
  race: 'undead',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildNaga: ABILITY_TYPE = {
  code: 'AGbu',
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_Burrow: ABILITY_TYPE = {
  code: 'Abur',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BurrowScarabLvl2: ABILITY_TYPE = {
  code: 'Abu2',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BurrowScarabLvl3: ABILITY_TYPE = {
  code: 'Abu3',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BurrowBarbedArachnathid: ABILITY_TYPE = {
  code: 'Abu5',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BurrowDetectionFlyers: ABILITY_TYPE = {
  code: 'Abdt',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Cannibalize: ABILITY_TYPE = {
  code: 'Acan',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CannibalizeAbomination: ABILITY_TYPE = {
  code: 'Acn2',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CannibalizeCreep: ABILITY_TYPE = {
  code: 'ACcn',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldBurrow: ABILITY_TYPE = {
  code: 'Abun',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldDevour: ABILITY_TYPE = {
  code: 'Advc',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldMeatWagon: ABILITY_TYPE = {
  code: 'Sch2',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldShip: ABILITY_TYPE = {
  code: 'Sch5',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldTank: ABILITY_TYPE = {
  code: 'Sch4',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldTransport: ABILITY_TYPE = {
  code: 'Sch3',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldGoldMine: ABILITY_TYPE = {
  code: 'Aenc',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldDeath: ABILITY_TYPE = {
  code: 'Achd',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CarrionSwarmCreep: ABILITY_TYPE = {
  code: 'ACca',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrushingWave: ABILITY_TYPE = {
  code: 'ACcv',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrushingWaveDragonTurtle: ABILITY_TYPE = {
  code: 'ACc2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrushingWaveLesser: ABILITY_TYPE = {
  code: 'ACc3',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChainLightningCreep: ABILITY_TYPE = {
  code: 'ACcl',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChainDispel: ABILITY_TYPE = {
  code: 'Ache',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosGrunt: ABILITY_TYPE = {
  code: 'Sca1',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosRaider: ABILITY_TYPE = {
  code: 'Sca2',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosShaman: ABILITY_TYPE = {
  code: 'Sca3',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosKodo: ABILITY_TYPE = {
  code: 'Sca4',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosPeon: ABILITY_TYPE = {
  code: 'Sca5',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosGrom: ABILITY_TYPE = {
  code: 'Sca6',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosCargoLoad: ABILITY_TYPE = {
  code: 'Achl',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Charm: ABILITY_TYPE = {
  code: 'ACch',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CleavingAttackCreep: ABILITY_TYPE = {
  code: 'ACce',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CloudOfFog: ABILITY_TYPE = {
  code: 'Aclf',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ColdArrowsCreep: ABILITY_TYPE = {
  code: 'ACcw',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ControlMagic: ABILITY_TYPE = {
  code: 'Acmg',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CorporealForm: ABILITY_TYPE = {
  code: 'Acpf',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CorrosiveBreath: ABILITY_TYPE = {
  code: 'Acor',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CoupleArcher: ABILITY_TYPE = {
  code: 'Acoa',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CoupleHippogryph: ABILITY_TYPE = {
  code: 'Acoh',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CoupleInstantArcher: ABILITY_TYPE = {
  code: 'Aco2',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CoupleInstantHippogryph: ABILITY_TYPE = {
  code: 'Aco3',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CreepSleep: ABILITY_TYPE = {
  code: 'ACsp',
  sort: 'unit',
  race: 'creeps',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_Cripple: ABILITY_TYPE = {
  code: 'Acri',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrippleWarlock: ABILITY_TYPE = {
  code: 'Scri',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrippleCreep: ABILITY_TYPE = {
  code: 'ACcr',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CriticalStrikeCreep: ABILITY_TYPE = {
  code: 'ACct',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Curse: ABILITY_TYPE = {
  code: 'Acrs',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CurseCreep: ABILITY_TYPE = {
  code: 'ACcs',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Cyclone: ABILITY_TYPE = {
  code: 'Acyc',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CycloneNaga: ABILITY_TYPE = {
  code: 'Acny',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CycloneCreep: ABILITY_TYPE = {
  code: 'ACcy',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CycloneCenarius: ABILITY_TYPE = {
  code: 'SCc1',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathCoilCreep: ABILITY_TYPE = {
  code: 'ACdc',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathDamageSapper: ABILITY_TYPE = {
  code: 'Adda',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathDamageMine: ABILITY_TYPE = {
  code: 'Amnx',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathDamageMineBIG: ABILITY_TYPE = {
  code: 'Amnz',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Decouple: ABILITY_TYPE = {
  code: 'Adec',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Defend: ABILITY_TYPE = {
  code: 'Adef',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectSentryWard: ABILITY_TYPE = {
  code: 'Adt1',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectShade: ABILITY_TYPE = {
  code: 'Atru',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectGeneral: ABILITY_TYPE = {
  code: 'Adtg',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectWarEagle: ABILITY_TYPE = {
  code: 'ANtr',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectGyrocopter: ABILITY_TYPE = {
  code: 'Agyv',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectMagicSentinel: ABILITY_TYPE = {
  code: 'Adts',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Detonate: ABILITY_TYPE = {
  code: 'Adtn',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Devour: ABILITY_TYPE = {
  code: 'Adev',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DevourDragonCreep: ABILITY_TYPE = {
  code: 'ACdv',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DevourMagic: ABILITY_TYPE = {
  code: 'Advm',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DevourMagicCreep: ABILITY_TYPE = {
  code: 'ACde',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DisenchantOld: ABILITY_TYPE = {
  code: 'Adch',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DisenchantNew: ABILITY_TYPE = {
  code: 'Adcn',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DispelMagic: ABILITY_TYPE = {
  code: 'Adis',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DispelMagicCreep: ABILITY_TYPE = {
  code: 'Adsm',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DivineShieldCreep: ABILITY_TYPE = {
  code: 'ACds',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DrainLifeCreep: ABILITY_TYPE = {
  code: 'ACdr',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DropInstant: ABILITY_TYPE = {
  code: 'Adri',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Drop: ABILITY_TYPE = {
  code: 'Adro',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Drop_2: ABILITY_TYPE = {
  code: 'Sdro',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DropPilot: ABILITY_TYPE = {
  code: 'Atdp',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EatTree: ABILITY_TYPE = {
  code: 'Aeat',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EnsnareNaga: ABILITY_TYPE = {
  code: 'ANen',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Ensnare: ABILITY_TYPE = {
  code: 'Aens',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EnsnareCreep: ABILITY_TYPE = {
  code: 'ACen',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Entangle: ABILITY_TYPE = {
  code: 'Aent',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EntangledGoldMine: ABILITY_TYPE = {
  code: 'Aegm',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EntanglingRootsCreep: ABILITY_TYPE = {
  code: 'Aenr',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EntanglingSeaweed: ABILITY_TYPE = {
  code: 'Aenw',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Ethereal: ABILITY_TYPE = {
  code: 'Aetl',
  sort: 'unit',
  race: 'nightelf',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_EtherealForm: ABILITY_TYPE = {
  code: 'Aetf',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EvasionCreep: ABILITY_TYPE = {
  code: 'ACev',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EvasionCreep100: ABILITY_TYPE = {
  code: 'ACes',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Exhume: ABILITY_TYPE = {
  code: 'Aexh',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FaerieFire: ABILITY_TYPE = {
  code: 'Afae',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FaerieFire_2: ABILITY_TYPE = {
  code: 'Afa2',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FaerieFireCreep: ABILITY_TYPE = {
  code: 'ACff',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Feedback: ABILITY_TYPE = {
  code: 'Afbk',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeedbackArcaneTower: ABILITY_TYPE = {
  code: 'Afbt',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeedbackSpiritBeast: ABILITY_TYPE = {
  code: 'Afbb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeralSpiritCreep: ABILITY_TYPE = {
  code: 'ACsf',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeralSpiritCreepPig: ABILITY_TYPE = {
  code: 'ACs9',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeralSpiritSpiritBeast: ABILITY_TYPE = {
  code: 'ACs8',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FeralSpiritAkama: ABILITY_TYPE = {
  code: 'ACs7',
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FingerOfDeath_2: ABILITY_TYPE = {
  code: 'Afod',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FireBoltWarlock: ABILITY_TYPE = {
  code: 'Awfb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FireBoltCreep: ABILITY_TYPE = {
  code: 'ACfb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlakCannon: ABILITY_TYPE = {
  code: 'Aflk',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Flare: ABILITY_TYPE = {
  code: 'Afla',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlameStrikeCreep: ABILITY_TYPE = {
  code: 'ACfs',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlameStrikeImprovedCreep: ABILITY_TYPE = {
  code: 'ANfs',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ForceOfNatureCreep: ABILITY_TYPE = {
  code: 'ACfr',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ForkedLightningCreep: ABILITY_TYPE = {
  code: 'ACfl',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FragShards: ABILITY_TYPE = {
  code: 'Afsh',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FreezingBreath: ABILITY_TYPE = {
  code: 'Afrz',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Frenzy: ABILITY_TYPE = {
  code: 'Afzy',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostArmorCreepOld: ABILITY_TYPE = {
  code: 'ACfa',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostArmorCreepAutocast: ABILITY_TYPE = {
  code: 'ACf2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostArmorAutocastNaga: ABILITY_TYPE = {
  code: 'ACfu',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostAttack: ABILITY_TYPE = {
  code: 'Afra',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostBreath: ABILITY_TYPE = {
  code: 'Afrb',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostNovaCreep: ABILITY_TYPE = {
  code: 'ACfn',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostBolt: ABILITY_TYPE = {
  code: 'ACcb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Ghost: ABILITY_TYPE = {
  code: 'Agho',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GhostVisible: ABILITY_TYPE = {
  code: 'Aeth',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GoldMine: ABILITY_TYPE = {
  code: 'Agld',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GrabTree: ABILITY_TYPE = {
  code: 'Agra',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Graveyard: ABILITY_TYPE = {
  code: 'Agyd',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GyrocopterBombs: ABILITY_TYPE = {
  code: 'Agyb',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HardenedSkin: ABILITY_TYPE = {
  code: 'Assk',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HardenedSkinNagaTurtle: ABILITY_TYPE = {
  code: 'Ansk',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Harvest: ABILITY_TYPE = {
  code: 'Ahar',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HarvestNaga: ABILITY_TYPE = {
  code: 'ANha',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HarvestLumber: ABILITY_TYPE = {
  code: 'Ahrl',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HarvestLumberShredder: ABILITY_TYPE = {
  code: 'Ahr3',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HarvestLumberArchGhouls: ABILITY_TYPE = {
  code: 'Ahr2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Heal: ABILITY_TYPE = {
  code: 'Ahea',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealCreepNormal: ABILITY_TYPE = {
  code: 'Anhe',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealCreepNormal_2: ABILITY_TYPE = {
  code: 'Anh1',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealCreepHigh: ABILITY_TYPE = {
  code: 'Anh2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealingWard: ABILITY_TYPE = {
  code: 'Ahwd',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealingWardCreep: ABILITY_TYPE = {
  code: 'AChw',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealingWaveCreep: ABILITY_TYPE = {
  code: 'AChv',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NullRoarSummoner: ABILITY_TYPE = {
  code: 'Ahnl',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Hero: ABILITY_TYPE = {
  code: 'AHer',
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_HexCreep: ABILITY_TYPE = {
  code: 'AChx',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HowlOfTerror: ABILITY_TYPE = {
  code: 'Acht',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ImmolationCreep: ABILITY_TYPE = {
  code: 'ACim',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ImpaleCreep: ABILITY_TYPE = {
  code: 'ACmp',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ImpalingBolt: ABILITY_TYPE = {
  code: 'Aimp',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_InnerFire: ABILITY_TYPE = {
  code: 'Ainf',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_InnerFireCreep: ABILITY_TYPE = {
  code: 'ACif',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Invisibility: ABILITY_TYPE = {
  code: 'Aivs',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory: ABILITY_TYPE = {
  code: 'AInv',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_InventoryPackMule: ABILITY_TYPE = {
  code: 'Apak',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory2SlotUnitOrc: ABILITY_TYPE = {
  code: 'Aion',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory2SlotUnitHuman: ABILITY_TYPE = {
  code: 'Aihn',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory2SlotUnitNightElf: ABILITY_TYPE = {
  code: 'Aien',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory2SlotUnitUndead: ABILITY_TYPE = {
  code: 'Aiun',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Invulnerable: ABILITY_TYPE = {
  code: 'Avul',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningAttack: ABILITY_TYPE = {
  code: 'Alit',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningShield: ABILITY_TYPE = {
  code: 'Alsh',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningShieldCreep: ABILITY_TYPE = {
  code: 'ACls',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LiquidFire: ABILITY_TYPE = {
  code: 'Aliq',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Load: ABILITY_TYPE = {
  code: 'Aloa',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LoadBurrow: ABILITY_TYPE = {
  code: 'Sloa',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LoadEntangledGoldMine: ABILITY_TYPE = {
  code: 'Slo2',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LoadNavies: ABILITY_TYPE = {
  code: 'Slo3',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LoadPilot: ABILITY_TYPE = {
  code: 'Atlp',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Locust: ABILITY_TYPE = {
  code: 'Aloc',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicDefense: ABILITY_TYPE = {
  code: 'Amdf',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunity: ABILITY_TYPE = {
  code: 'Amim',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunityCreep: ABILITY_TYPE = {
  code: 'ACmi',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunityArchimonde: ABILITY_TYPE = {
  code: 'ACm2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunityDragons: ABILITY_TYPE = {
  code: 'ACm3',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AerialShackles: ABILITY_TYPE = {
  code: 'Amls',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBattery: ABILITY_TYPE = {
  code: 'Ambt',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBatteryObsidianStatue: ABILITY_TYPE = {
  code: 'Amb2',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBurnDemon: ABILITY_TYPE = {
  code: 'Amnb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBurnDemon_2: ABILITY_TYPE = {
  code: 'Ambd',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBurnHotkeyB: ABILITY_TYPE = {
  code: 'Ambb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaFlare: ABILITY_TYPE = {
  code: 'Amfl',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaShieldCreep: ABILITY_TYPE = {
  code: 'ACmf',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MeatDrop: ABILITY_TYPE = {
  code: 'Amed',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MeatLoad: ABILITY_TYPE = {
  code: 'Amel',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Militia: ABILITY_TYPE = {
  code: 'Amil',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MilitiaConversion: ABILITY_TYPE = {
  code: 'Amic',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MindRot: ABILITY_TYPE = {
  code: 'ANmr',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Mine: ABILITY_TYPE = {
  code: 'Amin',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MonsoonCreep: ABILITY_TYPE = {
  code: 'ACmo',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MoonGlaive: ABILITY_TYPE = {
  code: 'Amgl',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MoonGlaiveNoResearch: ABILITY_TYPE = {
  code: 'Amgr',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Move: ABILITY_TYPE = {
  code: 'Amov',
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_NeutralBuilding: ABILITY_TYPE = {
  code: 'Aneu',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralBuildingAnyUnit: ABILITY_TYPE = {
  code: 'Ane2',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralDetectionRevealAbility: ABILITY_TYPE = {
  code: 'Andt',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralRegenManaOnly: ABILITY_TYPE = {
  code: 'ANre',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralRegenHealthOnly: ABILITY_TYPE = {
  code: 'ACnr',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralSpies: ABILITY_TYPE = {
  code: 'Ansp',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfAnnihilation: ABILITY_TYPE = {
  code: 'Afak',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfAnnihilationQuillSpray: ABILITY_TYPE = {
  code: 'ANak',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OnFire: ABILITY_TYPE = {
  code: 'Afir',
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_OnFireHuman: ABILITY_TYPE = {
  code: 'Afih',
  sort: 'unit',
  race: 'human',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_OnFireOrc: ABILITY_TYPE = {
  code: 'Afio',
  sort: 'unit',
  race: 'orc',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_OnFireNightElf: ABILITY_TYPE = {
  code: 'Afin',
  sort: 'unit',
  race: 'nightelf',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_OnFireUndead: ABILITY_TYPE = {
  code: 'Afiu',
  sort: 'unit',
  race: 'undead',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_Parasite: ABILITY_TYPE = {
  code: 'ANpa',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ParasiteEredar: ABILITY_TYPE = {
  code: 'ACpa',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentImmolation: ABILITY_TYPE = {
  code: 'ANpi',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentImmolationFlying: ABILITY_TYPE = {
  code: 'Apmf',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentImmolationGraphic: ABILITY_TYPE = {
  code: 'Apig',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentInvisibility: ABILITY_TYPE = {
  code: 'Apiv',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PhaseShift: ABILITY_TYPE = {
  code: 'Apsh',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Phoenix: ABILITY_TYPE = {
  code: 'Aphx',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PhoenixFire: ABILITY_TYPE = {
  code: 'Apxf',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PlagueToss: ABILITY_TYPE = {
  code: 'Apts',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PoisonAttack: ABILITY_TYPE = {
  code: 'Apoi',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Polymorph: ABILITY_TYPE = {
  code: 'Aply',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PolymorphCreep: ABILITY_TYPE = {
  code: 'ACpy',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Possession: ABILITY_TYPE = {
  code: 'Apos',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PossessionCreep: ABILITY_TYPE = {
  code: 'ACps',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Pulverize: ABILITY_TYPE = {
  code: 'Awar',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PulverizeSeaGiant: ABILITY_TYPE = {
  code: 'ACpv',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PurchaseItem: ABILITY_TYPE = {
  code: 'Apit',
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_Purge: ABILITY_TYPE = {
  code: 'Aprg',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PurgeCreep: ABILITY_TYPE = {
  code: 'ACpu',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RainOfFireCreep: ABILITY_TYPE = {
  code: 'ACrf',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RainOfFireCreepGreater: ABILITY_TYPE = {
  code: 'ACrg',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RaiseDead: ABILITY_TYPE = {
  code: 'Arai',
  sort: 'unit',
  race: 'undead',
  levels: 2,
  requiredLevel: 0,
};
export const ABILITY_RaiseDeadCreep: ABILITY_TYPE = {
  code: 'ACrd',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Rally: ABILITY_TYPE = {
  code: 'ARal',
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_RavenFormDruid: ABILITY_TYPE = {
  code: 'Arav',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RavenFormMedivh: ABILITY_TYPE = {
  code: 'Amrf',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReincarnationCreep: ABILITY_TYPE = {
  code: 'ACrn',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReincarnationGeneric: ABILITY_TYPE = {
  code: 'ANr2',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_ReinforcedBurrows: ABILITY_TYPE = {
  code: 'Arbr',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Rejuvination: ABILITY_TYPE = {
  code: 'Arej',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RejuvinationCreep: ABILITY_TYPE = {
  code: 'ACrj',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RejuvinationFurbolg: ABILITY_TYPE = {
  code: 'ACr2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Renew: ABILITY_TYPE = {
  code: 'Aren',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RepairHuman: ABILITY_TYPE = {
  code: 'Ahrp',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RepairOrc: ABILITY_TYPE = {
  code: 'Arep',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReplenishLifeMana: ABILITY_TYPE = {
  code: 'Arpb',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReplenishLife: ABILITY_TYPE = {
  code: 'Arpl',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReplenishMana: ABILITY_TYPE = {
  code: 'Arpm',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ResistantSkin: ABILITY_TYPE = {
  code: 'Arsk',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ResistantSkinCreep: ABILITY_TYPE = {
  code: 'ACrk',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ResistantSkin31PosCreep: ABILITY_TYPE = {
  code: 'ACsk',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Restoration: ABILITY_TYPE = {
  code: 'Arst',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReturnGold: ABILITY_TYPE = {
  code: 'Argd',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReturnGoldLumber: ABILITY_TYPE = {
  code: 'Argl',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReturnLumber: ABILITY_TYPE = {
  code: 'Arlm',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RevealArcaneTower: ABILITY_TYPE = {
  code: 'AHta',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Revenge: ABILITY_TYPE = {
  code: 'Arng',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Revive: ABILITY_TYPE = {
  code: 'Arev',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Roar: ABILITY_TYPE = {
  code: 'Aroa',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Roar_2: ABILITY_TYPE = {
  code: 'Ara2',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RoarCreepSkeletalOrc: ABILITY_TYPE = {
  code: 'ACr1',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RoarCreep: ABILITY_TYPE = {
  code: 'ACro',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RocketAttack: ABILITY_TYPE = {
  code: 'Aroc',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RootAncients: ABILITY_TYPE = {
  code: 'Aro1',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RootAncientProtector: ABILITY_TYPE = {
  code: 'Aro2',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SacrificeSacrificialPit: ABILITY_TYPE = {
  code: 'Asac',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Pillage: ABILITY_TYPE = {
  code: 'Asal',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SacrificeAcolyte: ABILITY_TYPE = {
  code: 'Alam',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SearingArrowsCreep: ABILITY_TYPE = {
  code: 'ACsa',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SelfDestruct: ABILITY_TYPE = {
  code: 'Asds',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SellItem: ABILITY_TYPE = {
  code: 'Asid',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SellUnit: ABILITY_TYPE = {
  code: 'Asud',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Sentinel: ABILITY_TYPE = {
  code: 'Aesn',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SentinelNoResearch: ABILITY_TYPE = {
  code: 'Aesr',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SentryWard: ABILITY_TYPE = {
  code: 'Aeye',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SerpentWardTentacleForgottenOne: ABILITY_TYPE = {
  code: 'ACtn',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowMeld: ABILITY_TYPE = {
  code: 'Ashm',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowMeldInstant: ABILITY_TYPE = {
  code: 'Sshm',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowMeldAkama: ABILITY_TYPE = {
  code: 'Ahid',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowStrikeCreep: ABILITY_TYPE = {
  code: 'ACss',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShockwaveCreep: ABILITY_TYPE = {
  code: 'ACsh',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShockwaveTrap: ABILITY_TYPE = {
  code: 'ACst',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GarithosShockWave: ABILITY_TYPE = {
  code: 'ANsh',
  sort: 'hero',
  race: 'other',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_SilenceCreep: ABILITY_TYPE = {
  code: 'ACsi',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SiphonManaCreep: ABILITY_TYPE = {
  code: 'ACsm',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SleepCreep: ABILITY_TYPE = {
  code: 'ACsl',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SleepAlways: ABILITY_TYPE = {
  code: 'Asla',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Slow: ABILITY_TYPE = {
  code: 'Aslo',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SlowCreep: ABILITY_TYPE = {
  code: 'ACsw',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SlowPoison: ABILITY_TYPE = {
  code: 'Aspo',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnSkeleton: ABILITY_TYPE = {
  code: 'Asod',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnSpiderling: ABILITY_TYPE = {
  code: 'Assp',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnSpider: ABILITY_TYPE = {
  code: 'Aspd',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnHydra: ABILITY_TYPE = {
  code: 'Aspy',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnHydraHatchling: ABILITY_TYPE = {
  code: 'Aspt',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpellSteal: ABILITY_TYPE = {
  code: 'Asps',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Sphere: ABILITY_TYPE = {
  code: 'Asph',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel1: ABILITY_TYPE = {
  code: 'Asp1',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel2: ABILITY_TYPE = {
  code: 'Asp2',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel3: ABILITY_TYPE = {
  code: 'Asp3',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel4: ABILITY_TYPE = {
  code: 'Asp4',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel5: ABILITY_TYPE = {
  code: 'Asp5',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel6: ABILITY_TYPE = {
  code: 'Asp6',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpiderAttack: ABILITY_TYPE = {
  code: 'Aspa',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpikedBarricades: ABILITY_TYPE = {
  code: 'Aspi',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpiritLink: ABILITY_TYPE = {
  code: 'Aspl',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StandDown: ABILITY_TYPE = {
  code: 'Astd',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StasisTrap: ABILITY_TYPE = {
  code: 'Asta',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StoneForm: ABILITY_TYPE = {
  code: 'Astn',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StormHammers: ABILITY_TYPE = {
  code: 'Asth',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SubmergeMyrmidon: ABILITY_TYPE = {
  code: 'Asb1',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SubmergeRoyalGuard: ABILITY_TYPE = {
  code: 'Asb2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SubmergeSnapDragon: ABILITY_TYPE = {
  code: 'Asb3',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SummonLobstrokPrawns: ABILITY_TYPE = {
  code: 'Aslp',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SummonSeaElemental: ABILITY_TYPE = {
  code: 'ACwe',
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TankTurret: ABILITY_TYPE = {
  code: 'Attu',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TankUpgrade: ABILITY_TYPE = {
  code: 'Srtt',
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Taunt: ABILITY_TYPE = {
  code: 'Atau',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TauntCreep: ABILITY_TYPE = {
  code: 'ANta',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThornyShieldCreep: ABILITY_TYPE = {
  code: 'ANth',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThornyShieldDragonTurtle: ABILITY_TYPE = {
  code: 'ANt2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThornsAuraCreep: ABILITY_TYPE = {
  code: 'ACah',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThunderBoltCreep: ABILITY_TYPE = {
  code: 'ACtb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThunderClapCreep: ABILITY_TYPE = {
  code: 'ACtc',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThunderClapThunderLizard: ABILITY_TYPE = {
  code: 'ACt2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TornadoDamage: ABILITY_TYPE = {
  code: 'Atdg',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TornadoSpin: ABILITY_TYPE = {
  code: 'Atsp',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TornadoWander: ABILITY_TYPE = {
  code: 'Atwa',
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TreeOfLifeForAttachingArt: ABILITY_TYPE = {
  code: 'Atol',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Ultravision: ABILITY_TYPE = {
  code: 'Ault',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyAuraCreep: ABILITY_TYPE = {
  code: 'ACua',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyFrenzy: ABILITY_TYPE = {
  code: 'Auhf',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyFrenzyWarlock: ABILITY_TYPE = {
  code: 'Suhf',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyFrenzyCreep: ABILITY_TYPE = {
  code: 'ACuf',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnstableConcoction: ABILITY_TYPE = {
  code: 'Auco',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Unsummon: ABILITY_TYPE = {
  code: 'Auns',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VampiricAttack: ABILITY_TYPE = {
  code: 'SCva',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VampiricAuraCreep: ABILITY_TYPE = {
  code: 'ACvp',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Vengeance: ABILITY_TYPE = {
  code: 'Avng',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Wander: ABILITY_TYPE = {
  code: 'Awan',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WarStompCreep: ABILITY_TYPE = {
  code: 'Awrs',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WarStompSeaGiant: ABILITY_TYPE = {
  code: 'Awrg',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WarStompHydra: ABILITY_TYPE = {
  code: 'Awrh',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WindWalk: ABILITY_TYPE = {
  code: 'ANwk',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 1,
};
export const ABILITY_WispHarvest: ABILITY_TYPE = {
  code: 'Awha',
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WispHarvestInvulnerable: ABILITY_TYPE = {
  code: 'Awh2',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VenomSpears: ABILITY_TYPE = {
  code: 'Aven',
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VenomSpearsCreep: ABILITY_TYPE = {
  code: 'ACvs',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Warp: ABILITY_TYPE = {
  code: 'Awrp',
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Web: ABILITY_TYPE = {
  code: 'Aweb',
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WebCreep: ABILITY_TYPE = {
  code: 'ACwb',
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus1: ABILITY_TYPE = {
  code: 'AIa1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus3: ABILITY_TYPE = {
  code: 'AIa3',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus4: ABILITY_TYPE = {
  code: 'AIa4',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus6: ABILITY_TYPE = {
  code: 'AIa6',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrownOfKingsAll5: ABILITY_TYPE = {
  code: 'AIx5',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_All1: ABILITY_TYPE = {
  code: 'AIx1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_All2: ABILITY_TYPE = {
  code: 'AIx2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthBonus1: ABILITY_TYPE = {
  code: 'AIs1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthBonus3: ABILITY_TYPE = {
  code: 'AIs3',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthBonus4: ABILITY_TYPE = {
  code: 'AIs4',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthBonus6: ABILITY_TYPE = {
  code: 'AIs6',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceBonus1: ABILITY_TYPE = {
  code: 'AIi1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceBonus3: ABILITY_TYPE = {
  code: 'AIi3',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceBonus4: ABILITY_TYPE = {
  code: 'AIi4',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceBonus6: ABILITY_TYPE = {
  code: 'AIi6',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentAll1: ABILITY_TYPE = {
  code: 'AIxm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityMod: ABILITY_TYPE = {
  code: 'AIam',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceMod: ABILITY_TYPE = {
  code: 'AIim',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthMod: ABILITY_TYPE = {
  code: 'AIsm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityMod2: ABILITY_TYPE = {
  code: 'AIgm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceMod2: ABILITY_TYPE = {
  code: 'AItm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthMod2: ABILITY_TYPE = {
  code: 'AInm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackMod: ABILITY_TYPE = {
  code: 'AIaa',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus: ABILITY_TYPE = {
  code: 'AIat',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus_2: ABILITY_TYPE = {
  code: 'AIt6',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus_3: ABILITY_TYPE = {
  code: 'AIt9',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus_4: ABILITY_TYPE = {
  code: 'AItc',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus_5: ABILITY_TYPE = {
  code: 'AItf',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus1: ABILITY_TYPE = {
  code: 'AItg',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus2: ABILITY_TYPE = {
  code: 'AIth',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus4: ABILITY_TYPE = {
  code: 'AIti',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus5: ABILITY_TYPE = {
  code: 'AItj',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus7: ABILITY_TYPE = {
  code: 'AItk',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus8: ABILITY_TYPE = {
  code: 'AItl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus10: ABILITY_TYPE = {
  code: 'AItn',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VampiricAttack_2: ABILITY_TYPE = {
  code: 'AIva',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlinkItem: ABILITY_TYPE = {
  code: 'AIbk',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyCastle: ABILITY_TYPE = {
  code: 'AIbl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyGreatHall: ABILITY_TYPE = {
  code: 'AIbg',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyScoutTower: ABILITY_TYPE = {
  code: 'AIbt',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyBlacksmith: ABILITY_TYPE = {
  code: 'AIbb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyFarm: ABILITY_TYPE = {
  code: 'AIbf',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyLumberMill: ABILITY_TYPE = {
  code: 'AIbr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyBarracks: ABILITY_TYPE = {
  code: 'AIbs',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyAltar: ABILITY_TYPE = {
  code: 'AIbh',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Cyclone_2: ABILITY_TYPE = {
  code: 'AIcy',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus1: ABILITY_TYPE = {
  code: 'AId1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus2: ABILITY_TYPE = {
  code: 'AId2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus3: ABILITY_TYPE = {
  code: 'AId3',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus4: ABILITY_TYPE = {
  code: 'AId4',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus5: ABILITY_TYPE = {
  code: 'AId5',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FortificationGlyph: ABILITY_TYPE = {
  code: 'AIgf',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UltraVisionGlyph: ABILITY_TYPE = {
  code: 'AIgu',
  sort: 'item',
  race: 'other',
  levels: 2,
  requiredLevel: 0,
};
export const ABILITY_ExperienceMod: ABILITY_TYPE = {
  code: 'AIem',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ExperienceModGreater: ABILITY_TYPE = {
  code: 'AIe2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineRedDrake: ABILITY_TYPE = {
  code: 'AIfd',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineFurbolg: ABILITY_TYPE = {
  code: 'AIff',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineRockGolem: ABILITY_TYPE = {
  code: 'AIfr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineDoomGuard: ABILITY_TYPE = {
  code: 'AIfu',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineFelHound: ABILITY_TYPE = {
  code: 'AIfh',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineSkeleton: ABILITY_TYPE = {
  code: 'AIfs',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineIceRevenant: ABILITY_TYPE = {
  code: 'AIir',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineUrsaWarrior: ABILITY_TYPE = {
  code: 'AIuw',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Flag: ABILITY_TYPE = {
  code: 'AIfl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagHuman: ABILITY_TYPE = {
  code: 'AIfm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagOrc: ABILITY_TYPE = {
  code: 'AIfo',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagNightElf: ABILITY_TYPE = {
  code: 'AIfn',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagUndead: ABILITY_TYPE = {
  code: 'AIfe',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagOrcBattleStandard: ABILITY_TYPE = {
  code: 'AIfx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlareGun: ABILITY_TYPE = {
  code: 'AIfa',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInferno: ABILITY_TYPE = {
  code: 'AIin',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LevelMod: ABILITY_TYPE = {
  code: 'AIlm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningPurge: ABILITY_TYPE = {
  code: 'AIlp',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxLifeBonusLeast: ABILITY_TYPE = {
  code: 'AIlf',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxLifeBonusLesser: ABILITY_TYPE = {
  code: 'AIl1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxLifeBonusGreater: ABILITY_TYPE = {
  code: 'AIl2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MoveSpeedBonus: ABILITY_TYPE = {
  code: 'AIms',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfDarknessBlackArrow: ABILITY_TYPE = {
  code: 'ANbs',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfDarkness: ABILITY_TYPE = {
  code: 'AIdf',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfCorruption: ABILITY_TYPE = {
  code: 'AIcb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowOrbAbility: ABILITY_TYPE = {
  code: 'AIdn',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfFire: ABILITY_TYPE = {
  code: 'AIfb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfGuldan: ABILITY_TYPE = {
  code: 'AIgd',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfFreezing: ABILITY_TYPE = {
  code: 'AIzb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfFrost: ABILITY_TYPE = {
  code: 'AIob',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfLightning: ABILITY_TYPE = {
  code: 'AIll',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfLightningOld: ABILITY_TYPE = {
  code: 'AIlb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfSpells: ABILITY_TYPE = {
  code: 'AIsb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfVenom: ABILITY_TYPE = {
  code: 'AIpb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfVenomPoisonAttack: ABILITY_TYPE = {
  code: 'Apo2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AnimateDeadItemSpecial: ABILITY_TYPE = {
  code: 'AInd',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RegenLife: ABILITY_TYPE = {
  code: 'Arel',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RegenLife_2: ABILITY_TYPE = {
  code: 'Arll',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SightBonus: ABILITY_TYPE = {
  code: 'AIsi',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Slow_2: ABILITY_TYPE = {
  code: 'AIos',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SoulTrap: ABILITY_TYPE = {
  code: 'AIso',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SoulPossession: ABILITY_TYPE = {
  code: 'Asou',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemCloakOfFlames: ABILITY_TYPE = {
  code: 'AIcf',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemCommand: ABILITY_TYPE = {
  code: 'AIco',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDamageAoe: ABILITY_TYPE = {
  code: 'AIdm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDefenseAoe: ABILITY_TYPE = {
  code: 'AIda',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDefenseAoeHealing: ABILITY_TYPE = {
  code: 'AIdb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDetectAoe: ABILITY_TYPE = {
  code: 'AIta',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDispelAoe: ABILITY_TYPE = {
  code: 'AIdi',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDispelAoeWithCooldown: ABILITY_TYPE = {
  code: 'AIds',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PowerupDispelAoe: ABILITY_TYPE = {
  code: 'APdi',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealLesser: ABILITY_TYPE = {
  code: 'AIh1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealGreater: ABILITY_TYPE = {
  code: 'AIh2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealLeast: ABILITY_TYPE = {
  code: 'AIh3',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealAoe: ABILITY_TYPE = {
  code: 'AIha',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealAoeGreater: ABILITY_TYPE = {
  code: 'AIhb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PowerupHealAoeLesser: ABILITY_TYPE = {
  code: 'APh1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PowerupHealAoe: ABILITY_TYPE = {
  code: 'APh2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PowerupHealAoeGreater: ABILITY_TYPE = {
  code: 'APh3',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealingWard_2: ABILITY_TYPE = {
  code: 'AIhw',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SentryWard_2: ABILITY_TYPE = {
  code: 'AIsw',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemIllusion: ABILITY_TYPE = {
  code: 'AIil',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInvisLesser: ABILITY_TYPE = {
  code: 'AIv1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInvisGreater: ABILITY_TYPE = {
  code: 'AIv2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInvul: ABILITY_TYPE = {
  code: 'AIvu',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInvul_2: ABILITY_TYPE = {
  code: 'AIvl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemManaRestoreLesser: ABILITY_TYPE = {
  code: 'AIm1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemManaRestoreGreater: ABILITY_TYPE = {
  code: 'AIm2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemManaRestoreAoe: ABILITY_TYPE = {
  code: 'AImr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneManaRestoreAoe: ABILITY_TYPE = {
  code: 'APmr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneManaRestoreGreaterAoe: ABILITY_TYPE = {
  code: 'APmg',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemPlaceMine: ABILITY_TYPE = {
  code: 'AIpm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRecall: ABILITY_TYPE = {
  code: 'AIrt',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRegenMana: ABILITY_TYPE = {
  code: 'AIrm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRegenManaLesser: ABILITY_TYPE = {
  code: 'AIrn',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemReincarnation: ABILITY_TYPE = {
  code: 'AIrc',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRestore: ABILITY_TYPE = {
  code: 'AIre',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRestoreAoe: ABILITY_TYPE = {
  code: 'AIra',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneRestoreAoe: ABILITY_TYPE = {
  code: 'APra',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemSpeed: ABILITY_TYPE = {
  code: 'AIsp',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemSpeedAoe: ABILITY_TYPE = {
  code: 'AIsa',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneSpeedAoe: ABILITY_TYPE = {
  code: 'APsa',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemTownPortal: ABILITY_TYPE = {
  code: 'AItp',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraDevotion: ABILITY_TYPE = {
  code: 'AIad',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraCommand: ABILITY_TYPE = {
  code: 'AIcd',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraBrilliance: ABILITY_TYPE = {
  code: 'AIba',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraVampiric: ABILITY_TYPE = {
  code: 'AIav',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraTrueshot: ABILITY_TYPE = {
  code: 'AIar',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraEndurance: ABILITY_TYPE = {
  code: 'AIae',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraUnholy: ABILITY_TYPE = {
  code: 'AIau',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemUltravision: ABILITY_TYPE = {
  code: 'AIuv',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningShield_2: ABILITY_TYPE = {
  code: 'AIls',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AntiMagicShield_2: ABILITY_TYPE = {
  code: 'AIxs',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AnimateDead: ABILITY_TYPE = {
  code: 'AIan',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Resurrection: ABILITY_TYPE = {
  code: 'AIrs',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Roar_3: ABILITY_TYPE = {
  code: 'AIrr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Evasion: ABILITY_TYPE = {
  code: 'AIev',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunity_2: ABILITY_TYPE = {
  code: 'AImx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentHitPointBonus: ABILITY_TYPE = {
  code: 'AImh',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxManaBonusLeast: ABILITY_TYPE = {
  code: 'AImb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxManaBonusMost: ABILITY_TYPE = {
  code: 'AIbm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackSpeedIncrease: ABILITY_TYPE = {
  code: 'AIsx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackSpeedIncreaseGreater: ABILITY_TYPE = {
  code: 'AIs2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfLifeRegen: ABILITY_TYPE = {
  code: 'AIrl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfManaRegenGreater: ABILITY_TYPE = {
  code: 'AIpr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ScrollOfLifeRegen: ABILITY_TYPE = {
  code: 'AIsl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfManaRegenLesser: ABILITY_TYPE = {
  code: 'AIpl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfRejuvI: ABILITY_TYPE = {
  code: 'AIp1',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfRejuvII: ABILITY_TYPE = {
  code: 'AIp2',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfRejuvIII: ABILITY_TYPE = {
  code: 'AIp3',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfRejuvIV: ABILITY_TYPE = {
  code: 'AIp4',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ScrollOfRejuvI: ABILITY_TYPE = {
  code: 'AIp5',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ScrollOfRejuvII: ABILITY_TYPE = {
  code: 'AIp6',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GiveGold: ABILITY_TYPE = {
  code: 'AIgo',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GiveLumber: ABILITY_TYPE = {
  code: 'AIlu',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRevealMap: ABILITY_TYPE = {
  code: 'AIrv',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDispelChain: ABILITY_TYPE = {
  code: 'AIdc',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemWeb: ABILITY_TYPE = {
  code: 'AIwb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemMonsterLure: ABILITY_TYPE = {
  code: 'AImo',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemChangeTOD: ABILITY_TYPE = {
  code: 'AIct',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRandomItem: ABILITY_TYPE = {
  code: 'AIri',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RunedBracers: ABILITY_TYPE = {
  code: 'AIsr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightPlacement: ABILITY_TYPE = {
  code: 'Ablp',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemPotionVampirism: ABILITY_TYPE = {
  code: 'AIpv',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaSteal: ABILITY_TYPE = {
  code: 'Aste',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MechanicalCritter: ABILITY_TYPE = {
  code: 'Amec',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowSight: ABILITY_TYPE = {
  code: 'Ashs',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Preservation: ABILITY_TYPE = {
  code: 'ANpr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Sanctuary: ABILITY_TYPE = {
  code: 'ANsa',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpellShield: ABILITY_TYPE = {
  code: 'ANss',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpellShieldAOE: ABILITY_TYPE = {
  code: 'ANse',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Retrain: ABILITY_TYPE = {
  code: 'Aret',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StaffOTeleportation: ABILITY_TYPE = {
  code: 'AImt',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpellBook: ABILITY_TYPE = {
  code: 'Aspb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RaiseDeadItem: ABILITY_TYPE = {
  code: 'AIrd',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DustOfAppearance: ABILITY_TYPE = {
  code: 'AItb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DivineShieldItem: ABILITY_TYPE = {
  code: 'AIdv',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SilenceItem: ABILITY_TYPE = {
  code: 'AIse',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PurgeOrb: ABILITY_TYPE = {
  code: 'AIpg',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PurgeTotemSP: ABILITY_TYPE = {
  code: 'AIps',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CloudOfFogItem: ABILITY_TYPE = {
  code: 'AIfg',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfLesserResurrection: ABILITY_TYPE = {
  code: 'APrl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfGreaterResurrection: ABILITY_TYPE = {
  code: 'APrr',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfRebirth: ABILITY_TYPE = {
  code: 'AIrb',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfSpiritLink: ABILITY_TYPE = {
  code: 'Aspp',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DarkSummoning: ABILITY_TYPE = {
  code: 'AUds',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfTheWatcher: ABILITY_TYPE = {
  code: 'APwt',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyFrenzyItem: ABILITY_TYPE = {
  code: 'AIuf',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus10: ABILITY_TYPE = {
  code: 'AId0',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ControlMagicItem: ABILITY_TYPE = {
  code: 'AIcm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxManaBonusLeastest: ABILITY_TYPE = {
  code: 'AImz',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FingerOfDeathItem: ABILITY_TYPE = {
  code: 'AIfz',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathPactItem: ABILITY_TYPE = {
  code: 'AIdp',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxManaBonusLeastestReally: ABILITY_TYPE = {
  code: 'AImv',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentHitPointBonusSmall: ABILITY_TYPE = {
  code: 'AIpx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefendItem: ABILITY_TYPE = {
  code: 'AIdd',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus7: ABILITY_TYPE = {
  code: 'AId7',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus8: ABILITY_TYPE = {
  code: 'AId8',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxLifeBonusLeastest: ABILITY_TYPE = {
  code: 'AIlz',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealLeastest: ABILITY_TYPE = {
  code: 'AIhx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus10: ABILITY_TYPE = {
  code: 'AIaz',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ResurrectionItem: ABILITY_TYPE = {
  code: 'AIrx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BashItem: ABILITY_TYPE = {
  code: 'AIbx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus20: ABILITY_TYPE = {
  code: 'AItx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WateryMinionItem: ABILITY_TYPE = {
  code: 'AIwm',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SummonHeadhunterItem: ABILITY_TYPE = {
  code: 'AIsh',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_200ManaBonus: ABILITY_TYPE = {
  code: 'AI2m',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraRegenerationItem: ABILITY_TYPE = {
  code: 'AIgx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HolyLightItem: ABILITY_TYPE = {
  code: 'AIhl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SlowPoisonItem: ABILITY_TYPE = {
  code: 'AIsz',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PenguinSqueek: ABILITY_TYPE = {
  code: 'AIpz',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SearingBladeFireMelee: ABILITY_TYPE = {
  code: 'AIfw',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostguardFrostMelee: ABILITY_TYPE = {
  code: 'AIft',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShamanClawsLightningMelee: ABILITY_TYPE = {
  code: 'AIlx',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CriticalStrikeItem: ABILITY_TYPE = {
  code: 'AIcs',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChainLightningItem: ABILITY_TYPE = {
  code: 'AIcl',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_All3: ABILITY_TYPE = {
  code: 'AIx3',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_All4: ABILITY_TYPE = {
  code: 'AIx4',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BeserkItem: ABILITY_TYPE = {
  code: 'AIxk',
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ALL_ABILITIES = [
  ABILITY_ArchMageBlizzard,
  ABILITY_ArchMageBrillianceAura,
  ABILITY_ArchMageMassTeleport,
  ABILITY_ArchMageWaterElemental,
  ABILITY_BeastMasterStampede,
  ABILITY_BeastMasterSummonBear,
  ABILITY_BeastMasterSummonQuilbeast,
  ABILITY_BeastMasterSummonHawk,
  ABILITY_BladeMasterBladestorm,
  ABILITY_BladeMasterCriticalStrike,
  ABILITY_BladeMasterMirrorImage,
  ABILITY_BladeMasterWindWalk,
  ABILITY_BloodMageBanish,
  ABILITY_BloodMageFlameStrike,
  ABILITY_BloodMageSiphonMana,
  ABILITY_BloodMagePhoenix,
  ABILITY_CryptLordCarrionScarabs,
  ABILITY_CryptLordImpale,
  ABILITY_CryptLordLocustSwarm,
  ABILITY_CryptLordSpikedCarapace,
  ABILITY_DarkRangerBlackArrow,
  ABILITY_DarkRangerCharm,
  ABILITY_DarkRangerDrain,
  ABILITY_DarkRangerSilence,
  ABILITY_DeathKnightAnimateDead,
  ABILITY_DeathKnightDeathCoil,
  ABILITY_DeathKnightDeathPact,
  ABILITY_DeathKnightUnholyAura,
  ABILITY_DemonHunterEvasion,
  ABILITY_DemonHunterImmolation,
  ABILITY_DemonHunterManaBurn,
  ABILITY_DemonHunterMetamorphosis,
  ABILITY_DreadlordSleep,
  ABILITY_DreadlordVampiricAura,
  ABILITY_DreadlordCarrionSwarm,
  ABILITY_DreadlordInferno,
  ABILITY_FarseerChainLightning,
  ABILITY_FarseerEarthquake,
  ABILITY_FarseerFarSight,
  ABILITY_FarseerSpiritWolf,
  ABILITY_KeeperEntanglingRoots,
  ABILITY_KeeperForceOfNature,
  ABILITY_KeeperThornsAura,
  ABILITY_KeeperTranquility,
  ABILITY_LichDarkRitual,
  ABILITY_LichDeathAndDecay,
  ABILITY_LichFrostArmor,
  ABILITY_LichFrostArmorAutocast,
  ABILITY_LichFrostNova,
  ABILITY_MountainKingAvatar,
  ABILITY_MountainKingBash,
  ABILITY_MountainKingThunderBolt,
  ABILITY_MountainKingThunderClap,
  ABILITY_SeaWitchForkedLightning,
  ABILITY_SeaWitchFrostArrows,
  ABILITY_SeaWitchTornado,
  ABILITY_SeaWitchManaShield,
  ABILITY_PaladinDevotionAura,
  ABILITY_PaladinDivineShield,
  ABILITY_PaladinHolyLight,
  ABILITY_PaladinResurrection,
  ABILITY_BrewmasterBreathOfFire,
  ABILITY_BrewmasterDrunkenBrawler,
  ABILITY_BrewmasterDrunkenHaze,
  ABILITY_BrewmasterStormEarthAndFire,
  ABILITY_PitLordDoom,
  ABILITY_PitLordHowlOfTerror,
  ABILITY_PitLordCleavingAttack,
  ABILITY_PitLordRainOfFire,
  ABILITY_PriestessSearingArrows,
  ABILITY_PriestessScout,
  ABILITY_PriestessStarfall,
  ABILITY_PriestessTrueshotAura,
  ABILITY_ChieftainEnduranceAura,
  ABILITY_ChieftainReincarnation,
  ABILITY_ChieftainShockWave,
  ABILITY_ChieftainWarStomp,
  ABILITY_ShadowHunterHealingWave,
  ABILITY_ShadowHunterHex,
  ABILITY_ShadowHunterSerpentWard,
  ABILITY_ShadowHunterVoodooo,
  ABILITY_WardenBlink,
  ABILITY_WardenFanOfKnives,
  ABILITY_WardenShadowStrike,
  ABILITY_WardenSpiritOfVengeance,
  ABILITY_Inferno,
  ABILITY_TichondriusInferno,
  ABILITY_FireBolt,
  ABILITY_FingerOfDeath,
  ABILITY_FingerOfPain,
  ABILITY_FingerOfPain21Button,
  ABILITY_DarkPortal,
  ABILITY_RainOfChaos,
  ABILITY_RainOfChaosButton02,
  ABILITY_CenariusBeefyStarfall,
  ABILITY_MannorothReincarnation,
  ABILITY_MalganisDarkConversion,
  ABILITY_DarkConversionFast,
  ABILITY_MalganisSoulPreservation,
  ABILITY_IllidanMetamorphosis,
  ABILITY_EvilIllidanMetamorphosis,
  ABILITY_SuperEarthquake,
  ABILITY_SuperDeathAndDecay,
  ABILITY_Monsoon,
  ABILITY_PoisonArrows,
  ABILITY_WateryMinion,
  ABILITY_ColdArrows,
  ABILITY_BattleRoar,
  ABILITY_RexxarSummonBear,
  ABILITY_AttributeModifierSkill,
  ABILITY_RexxarSummonQuilbeast,
  ABILITY_RexxarStampede,
  ABILITY_RexxarStormBolt,
  ABILITY_RokhanHealingWave,
  ABILITY_RokhanSerpentWard,
  ABILITY_RokhanHex,
  ABILITY_RokhanVoodooSpirits,
  ABILITY_ChenBreathOfFire,
  ABILITY_ChenDrunkenBrawler,
  ABILITY_ChenDrunkenHaze,
  ABILITY_ChenStormEarthAndFire,
  ABILITY_CairneEnduranceAura,
  ABILITY_CairneReincarnation,
  ABILITY_CairneShockWave,
  ABILITY_CairneWarStomp,
  ABILITY_IllidanChannel,
  ABILITY_AbolishMagic,
  ABILITY_AbolishMagicNaga,
  ABILITY_AbolishMagicCreep,
  ABILITY_AbolishMagicCreep12Pos,
  ABILITY_AbsorbMana,
  ABILITY_AcolyteHarvest,
  ABILITY_AvatarGarithos,
  ABILITY_Alarm,
  ABILITY_AlliedBuilding,
  ABILITY_AncestralSpirit,
  ABILITY_AnimateDeadCreep,
  ABILITY_AntiMagicShield,
  ABILITY_AntiMagicShieldCreep,
  ABILITY_Attack,
  ABILITY_AuraBrillianceCreep,
  ABILITY_AuraCommandCreep,
  ABILITY_AuraDevotionCreep,
  ABILITY_AuraEnduranceCreep,
  ABILITY_AuraPlagueAbomination,
  ABILITY_AuraPlaguePlagueWard,
  ABILITY_AuraPlagueCreep,
  ABILITY_AuraPlagueCreepGfx,
  ABILITY_AuraRegenerationWard,
  ABILITY_AuraRegenerationStatue,
  ABILITY_AuraSlow,
  ABILITY_AuraTrueshotCreep,
  ABILITY_AuraWarDrums,
  ABILITY_AvengerForm,
  ABILITY_Awaken,
  ABILITY_BallsOfFire,
  ABILITY_BanishCreep,
  ABILITY_BashCreep,
  ABILITY_BashBeastmasterBear,
  ABILITY_BashMaulSPBearLevel3,
  ABILITY_Battlestations,
  ABILITY_BattlestationsChaos,
  ABILITY_Bearform,
  ABILITY_Beserk,
  ABILITY_BerserkerUpgrade,
  ABILITY_BlackArrowMeleeCreep,
  ABILITY_BlightDispelSmall,
  ABILITY_BlightDispelLarge,
  ABILITY_BlightGrowthSmall,
  ABILITY_BlightGrowthLarge,
  ABILITY_BlightedGoldMine,
  ABILITY_BlinkBeastmasterBear,
  ABILITY_BlizzardCreep,
  ABILITY_Bloodlust,
  ABILITY_BloodlustCreep,
  ABILITY_BloodlustCreepHotkeyB,
  ABILITY_BreathOfFireCreep,
  ABILITY_BreathOfFrostCreep,
  ABILITY_BuildNeutral,
  ABILITY_BuildHuman,
  ABILITY_BuildOrc,
  ABILITY_BuildNightElf,
  ABILITY_BuildUndead,
  ABILITY_BuildNaga,
  ABILITY_Burrow,
  ABILITY_BurrowScarabLvl2,
  ABILITY_BurrowScarabLvl3,
  ABILITY_BurrowBarbedArachnathid,
  ABILITY_BurrowDetectionFlyers,
  ABILITY_Cannibalize,
  ABILITY_CannibalizeAbomination,
  ABILITY_CannibalizeCreep,
  ABILITY_CargoHoldBurrow,
  ABILITY_CargoHoldDevour,
  ABILITY_CargoHoldMeatWagon,
  ABILITY_CargoHoldShip,
  ABILITY_CargoHoldTank,
  ABILITY_CargoHoldTransport,
  ABILITY_CargoHoldGoldMine,
  ABILITY_CargoHoldDeath,
  ABILITY_CarrionSwarmCreep,
  ABILITY_CrushingWave,
  ABILITY_CrushingWaveDragonTurtle,
  ABILITY_CrushingWaveLesser,
  ABILITY_ChainLightningCreep,
  ABILITY_ChainDispel,
  ABILITY_ChaosGrunt,
  ABILITY_ChaosRaider,
  ABILITY_ChaosShaman,
  ABILITY_ChaosKodo,
  ABILITY_ChaosPeon,
  ABILITY_ChaosGrom,
  ABILITY_ChaosCargoLoad,
  ABILITY_Charm,
  ABILITY_CleavingAttackCreep,
  ABILITY_CloudOfFog,
  ABILITY_ColdArrowsCreep,
  ABILITY_ControlMagic,
  ABILITY_CorporealForm,
  ABILITY_CorrosiveBreath,
  ABILITY_CoupleArcher,
  ABILITY_CoupleHippogryph,
  ABILITY_CoupleInstantArcher,
  ABILITY_CoupleInstantHippogryph,
  ABILITY_CreepSleep,
  ABILITY_Cripple,
  ABILITY_CrippleWarlock,
  ABILITY_CrippleCreep,
  ABILITY_CriticalStrikeCreep,
  ABILITY_Curse,
  ABILITY_CurseCreep,
  ABILITY_Cyclone,
  ABILITY_CycloneNaga,
  ABILITY_CycloneCreep,
  ABILITY_CycloneCenarius,
  ABILITY_DeathCoilCreep,
  ABILITY_DeathDamageSapper,
  ABILITY_DeathDamageMine,
  ABILITY_DeathDamageMineBIG,
  ABILITY_Decouple,
  ABILITY_Defend,
  ABILITY_DetectSentryWard,
  ABILITY_DetectShade,
  ABILITY_DetectGeneral,
  ABILITY_DetectWarEagle,
  ABILITY_DetectGyrocopter,
  ABILITY_DetectMagicSentinel,
  ABILITY_Detonate,
  ABILITY_Devour,
  ABILITY_DevourDragonCreep,
  ABILITY_DevourMagic,
  ABILITY_DevourMagicCreep,
  ABILITY_DisenchantOld,
  ABILITY_DisenchantNew,
  ABILITY_DispelMagic,
  ABILITY_DispelMagicCreep,
  ABILITY_DivineShieldCreep,
  ABILITY_DrainLifeCreep,
  ABILITY_DropInstant,
  ABILITY_Drop,
  ABILITY_Drop_2,
  ABILITY_DropPilot,
  ABILITY_EatTree,
  ABILITY_EnsnareNaga,
  ABILITY_Ensnare,
  ABILITY_EnsnareCreep,
  ABILITY_Entangle,
  ABILITY_EntangledGoldMine,
  ABILITY_EntanglingRootsCreep,
  ABILITY_EntanglingSeaweed,
  ABILITY_Ethereal,
  ABILITY_EtherealForm,
  ABILITY_EvasionCreep,
  ABILITY_EvasionCreep100,
  ABILITY_Exhume,
  ABILITY_FaerieFire,
  ABILITY_FaerieFire_2,
  ABILITY_FaerieFireCreep,
  ABILITY_Feedback,
  ABILITY_FeedbackArcaneTower,
  ABILITY_FeedbackSpiritBeast,
  ABILITY_FeralSpiritCreep,
  ABILITY_FeralSpiritCreepPig,
  ABILITY_FeralSpiritSpiritBeast,
  ABILITY_FeralSpiritAkama,
  ABILITY_FingerOfDeath_2,
  ABILITY_FireBoltWarlock,
  ABILITY_FireBoltCreep,
  ABILITY_FlakCannon,
  ABILITY_Flare,
  ABILITY_FlameStrikeCreep,
  ABILITY_FlameStrikeImprovedCreep,
  ABILITY_ForceOfNatureCreep,
  ABILITY_ForkedLightningCreep,
  ABILITY_FragShards,
  ABILITY_FreezingBreath,
  ABILITY_Frenzy,
  ABILITY_FrostArmorCreepOld,
  ABILITY_FrostArmorCreepAutocast,
  ABILITY_FrostArmorAutocastNaga,
  ABILITY_FrostAttack,
  ABILITY_FrostBreath,
  ABILITY_FrostNovaCreep,
  ABILITY_FrostBolt,
  ABILITY_Ghost,
  ABILITY_GhostVisible,
  ABILITY_GoldMine,
  ABILITY_GrabTree,
  ABILITY_Graveyard,
  ABILITY_GyrocopterBombs,
  ABILITY_HardenedSkin,
  ABILITY_HardenedSkinNagaTurtle,
  ABILITY_Harvest,
  ABILITY_HarvestNaga,
  ABILITY_HarvestLumber,
  ABILITY_HarvestLumberShredder,
  ABILITY_HarvestLumberArchGhouls,
  ABILITY_Heal,
  ABILITY_HealCreepNormal,
  ABILITY_HealCreepNormal_2,
  ABILITY_HealCreepHigh,
  ABILITY_HealingWard,
  ABILITY_HealingWardCreep,
  ABILITY_HealingWaveCreep,
  ABILITY_NullRoarSummoner,
  ABILITY_Hero,
  ABILITY_HexCreep,
  ABILITY_HowlOfTerror,
  ABILITY_ImmolationCreep,
  ABILITY_ImpaleCreep,
  ABILITY_ImpalingBolt,
  ABILITY_InnerFire,
  ABILITY_InnerFireCreep,
  ABILITY_Invisibility,
  ABILITY_Inventory,
  ABILITY_InventoryPackMule,
  ABILITY_Inventory2SlotUnitOrc,
  ABILITY_Inventory2SlotUnitHuman,
  ABILITY_Inventory2SlotUnitNightElf,
  ABILITY_Inventory2SlotUnitUndead,
  ABILITY_Invulnerable,
  ABILITY_LightningAttack,
  ABILITY_LightningShield,
  ABILITY_LightningShieldCreep,
  ABILITY_LiquidFire,
  ABILITY_Load,
  ABILITY_LoadBurrow,
  ABILITY_LoadEntangledGoldMine,
  ABILITY_LoadNavies,
  ABILITY_LoadPilot,
  ABILITY_Locust,
  ABILITY_MagicDefense,
  ABILITY_MagicImmunity,
  ABILITY_MagicImmunityCreep,
  ABILITY_MagicImmunityArchimonde,
  ABILITY_MagicImmunityDragons,
  ABILITY_AerialShackles,
  ABILITY_ManaBattery,
  ABILITY_ManaBatteryObsidianStatue,
  ABILITY_ManaBurnDemon,
  ABILITY_ManaBurnDemon_2,
  ABILITY_ManaBurnHotkeyB,
  ABILITY_ManaFlare,
  ABILITY_ManaShieldCreep,
  ABILITY_MeatDrop,
  ABILITY_MeatLoad,
  ABILITY_Militia,
  ABILITY_MilitiaConversion,
  ABILITY_MindRot,
  ABILITY_Mine,
  ABILITY_MonsoonCreep,
  ABILITY_MoonGlaive,
  ABILITY_MoonGlaiveNoResearch,
  ABILITY_Move,
  ABILITY_NeutralBuilding,
  ABILITY_NeutralBuildingAnyUnit,
  ABILITY_NeutralDetectionRevealAbility,
  ABILITY_NeutralRegenManaOnly,
  ABILITY_NeutralRegenHealthOnly,
  ABILITY_NeutralSpies,
  ABILITY_OrbOfAnnihilation,
  ABILITY_OrbOfAnnihilationQuillSpray,
  ABILITY_OnFire,
  ABILITY_OnFireHuman,
  ABILITY_OnFireOrc,
  ABILITY_OnFireNightElf,
  ABILITY_OnFireUndead,
  ABILITY_Parasite,
  ABILITY_ParasiteEredar,
  ABILITY_PermanentImmolation,
  ABILITY_PermanentImmolationFlying,
  ABILITY_PermanentImmolationGraphic,
  ABILITY_PermanentInvisibility,
  ABILITY_PhaseShift,
  ABILITY_Phoenix,
  ABILITY_PhoenixFire,
  ABILITY_PlagueToss,
  ABILITY_PoisonAttack,
  ABILITY_Polymorph,
  ABILITY_PolymorphCreep,
  ABILITY_Possession,
  ABILITY_PossessionCreep,
  ABILITY_Pulverize,
  ABILITY_PulverizeSeaGiant,
  ABILITY_PurchaseItem,
  ABILITY_Purge,
  ABILITY_PurgeCreep,
  ABILITY_RainOfFireCreep,
  ABILITY_RainOfFireCreepGreater,
  ABILITY_RaiseDead,
  ABILITY_RaiseDeadCreep,
  ABILITY_Rally,
  ABILITY_RavenFormDruid,
  ABILITY_RavenFormMedivh,
  ABILITY_ReincarnationCreep,
  ABILITY_ReincarnationGeneric,
  ABILITY_ReinforcedBurrows,
  ABILITY_Rejuvination,
  ABILITY_RejuvinationCreep,
  ABILITY_RejuvinationFurbolg,
  ABILITY_Renew,
  ABILITY_RepairHuman,
  ABILITY_RepairOrc,
  ABILITY_ReplenishLifeMana,
  ABILITY_ReplenishLife,
  ABILITY_ReplenishMana,
  ABILITY_ResistantSkin,
  ABILITY_ResistantSkinCreep,
  ABILITY_ResistantSkin31PosCreep,
  ABILITY_Restoration,
  ABILITY_ReturnGold,
  ABILITY_ReturnGoldLumber,
  ABILITY_ReturnLumber,
  ABILITY_RevealArcaneTower,
  ABILITY_Revenge,
  ABILITY_Revive,
  ABILITY_Roar,
  ABILITY_Roar_2,
  ABILITY_RoarCreepSkeletalOrc,
  ABILITY_RoarCreep,
  ABILITY_RocketAttack,
  ABILITY_RootAncients,
  ABILITY_RootAncientProtector,
  ABILITY_SacrificeSacrificialPit,
  ABILITY_Pillage,
  ABILITY_SacrificeAcolyte,
  ABILITY_SearingArrowsCreep,
  ABILITY_SelfDestruct,
  ABILITY_SellItem,
  ABILITY_SellUnit,
  ABILITY_Sentinel,
  ABILITY_SentinelNoResearch,
  ABILITY_SentryWard,
  ABILITY_SerpentWardTentacleForgottenOne,
  ABILITY_ShadowMeld,
  ABILITY_ShadowMeldInstant,
  ABILITY_ShadowMeldAkama,
  ABILITY_ShadowStrikeCreep,
  ABILITY_ShockwaveCreep,
  ABILITY_ShockwaveTrap,
  ABILITY_GarithosShockWave,
  ABILITY_SilenceCreep,
  ABILITY_SiphonManaCreep,
  ABILITY_SleepCreep,
  ABILITY_SleepAlways,
  ABILITY_Slow,
  ABILITY_SlowCreep,
  ABILITY_SlowPoison,
  ABILITY_SpawnSkeleton,
  ABILITY_SpawnSpiderling,
  ABILITY_SpawnSpider,
  ABILITY_SpawnHydra,
  ABILITY_SpawnHydraHatchling,
  ABILITY_SpellSteal,
  ABILITY_Sphere,
  ABILITY_SphereSoVLevel1,
  ABILITY_SphereSoVLevel2,
  ABILITY_SphereSoVLevel3,
  ABILITY_SphereSoVLevel4,
  ABILITY_SphereSoVLevel5,
  ABILITY_SphereSoVLevel6,
  ABILITY_SpiderAttack,
  ABILITY_SpikedBarricades,
  ABILITY_SpiritLink,
  ABILITY_StandDown,
  ABILITY_StasisTrap,
  ABILITY_StoneForm,
  ABILITY_StormHammers,
  ABILITY_SubmergeMyrmidon,
  ABILITY_SubmergeRoyalGuard,
  ABILITY_SubmergeSnapDragon,
  ABILITY_SummonLobstrokPrawns,
  ABILITY_SummonSeaElemental,
  ABILITY_TankTurret,
  ABILITY_TankUpgrade,
  ABILITY_Taunt,
  ABILITY_TauntCreep,
  ABILITY_ThornyShieldCreep,
  ABILITY_ThornyShieldDragonTurtle,
  ABILITY_ThornsAuraCreep,
  ABILITY_ThunderBoltCreep,
  ABILITY_ThunderClapCreep,
  ABILITY_ThunderClapThunderLizard,
  ABILITY_TornadoDamage,
  ABILITY_TornadoSpin,
  ABILITY_TornadoWander,
  ABILITY_TreeOfLifeForAttachingArt,
  ABILITY_Ultravision,
  ABILITY_UnholyAuraCreep,
  ABILITY_UnholyFrenzy,
  ABILITY_UnholyFrenzyWarlock,
  ABILITY_UnholyFrenzyCreep,
  ABILITY_UnstableConcoction,
  ABILITY_Unsummon,
  ABILITY_VampiricAttack,
  ABILITY_VampiricAuraCreep,
  ABILITY_Vengeance,
  ABILITY_Wander,
  ABILITY_WarStompCreep,
  ABILITY_WarStompSeaGiant,
  ABILITY_WarStompHydra,
  ABILITY_WindWalk,
  ABILITY_WispHarvest,
  ABILITY_WispHarvestInvulnerable,
  ABILITY_VenomSpears,
  ABILITY_VenomSpearsCreep,
  ABILITY_Warp,
  ABILITY_Web,
  ABILITY_WebCreep,
  ABILITY_AgilityBonus1,
  ABILITY_AgilityBonus3,
  ABILITY_AgilityBonus4,
  ABILITY_AgilityBonus6,
  ABILITY_CrownOfKingsAll5,
  ABILITY_All1,
  ABILITY_All2,
  ABILITY_StrengthBonus1,
  ABILITY_StrengthBonus3,
  ABILITY_StrengthBonus4,
  ABILITY_StrengthBonus6,
  ABILITY_IntelligenceBonus1,
  ABILITY_IntelligenceBonus3,
  ABILITY_IntelligenceBonus4,
  ABILITY_IntelligenceBonus6,
  ABILITY_PermanentAll1,
  ABILITY_AgilityMod,
  ABILITY_IntelligenceMod,
  ABILITY_StrengthMod,
  ABILITY_AgilityMod2,
  ABILITY_IntelligenceMod2,
  ABILITY_StrengthMod2,
  ABILITY_AttackMod,
  ABILITY_AttackBonus,
  ABILITY_AttackBonus_2,
  ABILITY_AttackBonus_3,
  ABILITY_AttackBonus_4,
  ABILITY_AttackBonus_5,
  ABILITY_AttackBonus1,
  ABILITY_AttackBonus2,
  ABILITY_AttackBonus4,
  ABILITY_AttackBonus5,
  ABILITY_AttackBonus7,
  ABILITY_AttackBonus8,
  ABILITY_AttackBonus10,
  ABILITY_VampiricAttack_2,
  ABILITY_BlinkItem,
  ABILITY_BuildTinyCastle,
  ABILITY_BuildTinyGreatHall,
  ABILITY_BuildTinyScoutTower,
  ABILITY_BuildTinyBlacksmith,
  ABILITY_BuildTinyFarm,
  ABILITY_BuildTinyLumberMill,
  ABILITY_BuildTinyBarracks,
  ABILITY_BuildTinyAltar,
  ABILITY_Cyclone_2,
  ABILITY_DefenseBonus1,
  ABILITY_DefenseBonus2,
  ABILITY_DefenseBonus3,
  ABILITY_DefenseBonus4,
  ABILITY_DefenseBonus5,
  ABILITY_FortificationGlyph,
  ABILITY_UltraVisionGlyph,
  ABILITY_ExperienceMod,
  ABILITY_ExperienceModGreater,
  ABILITY_FigurineRedDrake,
  ABILITY_FigurineFurbolg,
  ABILITY_FigurineRockGolem,
  ABILITY_FigurineDoomGuard,
  ABILITY_FigurineFelHound,
  ABILITY_FigurineSkeleton,
  ABILITY_FigurineIceRevenant,
  ABILITY_FigurineUrsaWarrior,
  ABILITY_Flag,
  ABILITY_FlagHuman,
  ABILITY_FlagOrc,
  ABILITY_FlagNightElf,
  ABILITY_FlagUndead,
  ABILITY_FlagOrcBattleStandard,
  ABILITY_FlareGun,
  ABILITY_ItemInferno,
  ABILITY_LevelMod,
  ABILITY_LightningPurge,
  ABILITY_MaxLifeBonusLeast,
  ABILITY_MaxLifeBonusLesser,
  ABILITY_MaxLifeBonusGreater,
  ABILITY_MoveSpeedBonus,
  ABILITY_OrbOfDarknessBlackArrow,
  ABILITY_OrbOfDarkness,
  ABILITY_OrbOfCorruption,
  ABILITY_ShadowOrbAbility,
  ABILITY_OrbOfFire,
  ABILITY_OrbOfGuldan,
  ABILITY_OrbOfFreezing,
  ABILITY_OrbOfFrost,
  ABILITY_OrbOfLightning,
  ABILITY_OrbOfLightningOld,
  ABILITY_OrbOfSpells,
  ABILITY_OrbOfVenom,
  ABILITY_OrbOfVenomPoisonAttack,
  ABILITY_AnimateDeadItemSpecial,
  ABILITY_RegenLife,
  ABILITY_RegenLife_2,
  ABILITY_SightBonus,
  ABILITY_Slow_2,
  ABILITY_SoulTrap,
  ABILITY_SoulPossession,
  ABILITY_ItemCloakOfFlames,
  ABILITY_ItemCommand,
  ABILITY_ItemDamageAoe,
  ABILITY_ItemDefenseAoe,
  ABILITY_ItemDefenseAoeHealing,
  ABILITY_ItemDetectAoe,
  ABILITY_ItemDispelAoe,
  ABILITY_ItemDispelAoeWithCooldown,
  ABILITY_PowerupDispelAoe,
  ABILITY_ItemHealLesser,
  ABILITY_ItemHealGreater,
  ABILITY_ItemHealLeast,
  ABILITY_ItemHealAoe,
  ABILITY_ItemHealAoeGreater,
  ABILITY_PowerupHealAoeLesser,
  ABILITY_PowerupHealAoe,
  ABILITY_PowerupHealAoeGreater,
  ABILITY_HealingWard_2,
  ABILITY_SentryWard_2,
  ABILITY_ItemIllusion,
  ABILITY_ItemInvisLesser,
  ABILITY_ItemInvisGreater,
  ABILITY_ItemInvul,
  ABILITY_ItemInvul_2,
  ABILITY_ItemManaRestoreLesser,
  ABILITY_ItemManaRestoreGreater,
  ABILITY_ItemManaRestoreAoe,
  ABILITY_RuneManaRestoreAoe,
  ABILITY_RuneManaRestoreGreaterAoe,
  ABILITY_ItemPlaceMine,
  ABILITY_ItemRecall,
  ABILITY_ItemRegenMana,
  ABILITY_ItemRegenManaLesser,
  ABILITY_ItemReincarnation,
  ABILITY_ItemRestore,
  ABILITY_ItemRestoreAoe,
  ABILITY_RuneRestoreAoe,
  ABILITY_ItemSpeed,
  ABILITY_ItemSpeedAoe,
  ABILITY_RuneSpeedAoe,
  ABILITY_ItemTownPortal,
  ABILITY_ItemAuraDevotion,
  ABILITY_ItemAuraCommand,
  ABILITY_ItemAuraBrilliance,
  ABILITY_ItemAuraVampiric,
  ABILITY_ItemAuraTrueshot,
  ABILITY_ItemAuraEndurance,
  ABILITY_ItemAuraUnholy,
  ABILITY_ItemUltravision,
  ABILITY_LightningShield_2,
  ABILITY_AntiMagicShield_2,
  ABILITY_AnimateDead,
  ABILITY_Resurrection,
  ABILITY_Roar_3,
  ABILITY_Evasion,
  ABILITY_MagicImmunity_2,
  ABILITY_PermanentHitPointBonus,
  ABILITY_MaxManaBonusLeast,
  ABILITY_MaxManaBonusMost,
  ABILITY_AttackSpeedIncrease,
  ABILITY_AttackSpeedIncreaseGreater,
  ABILITY_PotionOfLifeRegen,
  ABILITY_PotionOfManaRegenGreater,
  ABILITY_ScrollOfLifeRegen,
  ABILITY_PotionOfManaRegenLesser,
  ABILITY_PotionOfRejuvI,
  ABILITY_PotionOfRejuvII,
  ABILITY_PotionOfRejuvIII,
  ABILITY_PotionOfRejuvIV,
  ABILITY_ScrollOfRejuvI,
  ABILITY_ScrollOfRejuvII,
  ABILITY_GiveGold,
  ABILITY_GiveLumber,
  ABILITY_ItemRevealMap,
  ABILITY_ItemDispelChain,
  ABILITY_ItemWeb,
  ABILITY_ItemMonsterLure,
  ABILITY_ItemChangeTOD,
  ABILITY_ItemRandomItem,
  ABILITY_RunedBracers,
  ABILITY_BlightPlacement,
  ABILITY_ItemPotionVampirism,
  ABILITY_ManaSteal,
  ABILITY_MechanicalCritter,
  ABILITY_ShadowSight,
  ABILITY_Preservation,
  ABILITY_Sanctuary,
  ABILITY_SpellShield,
  ABILITY_SpellShieldAOE,
  ABILITY_Retrain,
  ABILITY_StaffOTeleportation,
  ABILITY_SpellBook,
  ABILITY_RaiseDeadItem,
  ABILITY_DustOfAppearance,
  ABILITY_DivineShieldItem,
  ABILITY_SilenceItem,
  ABILITY_PurgeOrb,
  ABILITY_PurgeTotemSP,
  ABILITY_CloudOfFogItem,
  ABILITY_RuneOfLesserResurrection,
  ABILITY_RuneOfGreaterResurrection,
  ABILITY_RuneOfRebirth,
  ABILITY_RuneOfSpiritLink,
  ABILITY_DarkSummoning,
  ABILITY_RuneOfTheWatcher,
  ABILITY_UnholyFrenzyItem,
  ABILITY_DefenseBonus10,
  ABILITY_ControlMagicItem,
  ABILITY_MaxManaBonusLeastest,
  ABILITY_FingerOfDeathItem,
  ABILITY_DeathPactItem,
  ABILITY_MaxManaBonusLeastestReally,
  ABILITY_PermanentHitPointBonusSmall,
  ABILITY_DefendItem,
  ABILITY_DefenseBonus7,
  ABILITY_DefenseBonus8,
  ABILITY_MaxLifeBonusLeastest,
  ABILITY_ItemHealLeastest,
  ABILITY_AgilityBonus10,
  ABILITY_ResurrectionItem,
  ABILITY_BashItem,
  ABILITY_AttackBonus20,
  ABILITY_WateryMinionItem,
  ABILITY_SummonHeadhunterItem,
  ABILITY_200ManaBonus,
  ABILITY_AuraRegenerationItem,
  ABILITY_HolyLightItem,
  ABILITY_SlowPoisonItem,
  ABILITY_PenguinSqueek,
  ABILITY_SearingBladeFireMelee,
  ABILITY_FrostguardFrostMelee,
  ABILITY_ShamanClawsLightningMelee,
  ABILITY_CriticalStrikeItem,
  ABILITY_ChainLightningItem,
  ABILITY_All3,
  ABILITY_All4,
  ABILITY_BeserkItem,
];
