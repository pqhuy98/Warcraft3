export interface ABILITY_TYPE {
  code: string
  id: number
  sort: 'hero' | 'unit' | 'item'
  race: 'human' | 'orc' | 'undead' | 'nightelf' | 'naga' | 'creeps' | 'other'
  levels: number
  requiredLevel: number
}
export const ABILITY_ArchMageBlizzard: ABILITY_TYPE = {
  code: 'AHbz',
  id: 1095262842,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ArchMageBrillianceAura: ABILITY_TYPE = {
  code: 'AHab',
  id: 1095262562,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ArchMageMassTeleport: ABILITY_TYPE = {
  code: 'AHmt',
  id: 1095265652,
  sort: 'hero',
  race: 'human',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_ArchMageWaterElemental: ABILITY_TYPE = {
  code: 'AHwe',
  id: 1095268197,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BeastMasterStampede: ABILITY_TYPE = {
  code: 'ANst',
  id: 1095660404,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_BeastMasterSummonBear: ABILITY_TYPE = {
  code: 'ANsg',
  id: 1095660391,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BeastMasterSummonQuilbeast: ABILITY_TYPE = {
  code: 'ANsq',
  id: 1095660401,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BeastMasterSummonHawk: ABILITY_TYPE = {
  code: 'ANsw',
  id: 1095660407,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BladeMasterBladestorm: ABILITY_TYPE = {
  code: 'AOww',
  id: 1095726967,
  sort: 'hero',
  race: 'orc',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_BladeMasterCriticalStrike: ABILITY_TYPE = {
  code: 'AOcr',
  id: 1095721842,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BladeMasterMirrorImage: ABILITY_TYPE = {
  code: 'AOmi',
  id: 1095724393,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BladeMasterWindWalk: ABILITY_TYPE = {
  code: 'AOwk',
  id: 1095726955,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BloodMageBanish: ABILITY_TYPE = {
  code: 'AHbn',
  id: 1095262830,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BloodMageFlameStrike: ABILITY_TYPE = {
  code: 'AHfs',
  id: 1095263859,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BloodMageSiphonMana: ABILITY_TYPE = {
  code: 'AHdr',
  id: 1095263346,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BloodMagePhoenix: ABILITY_TYPE = {
  code: 'AHpx',
  id: 1095266424,
  sort: 'hero',
  race: 'human',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_CryptLordCarrionScarabs: ABILITY_TYPE = {
  code: 'AUcb',
  id: 1096115042,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_CryptLordImpale: ABILITY_TYPE = {
  code: 'AUim',
  id: 1096116589,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_CryptLordLocustSwarm: ABILITY_TYPE = {
  code: 'AUls',
  id: 1096117363,
  sort: 'hero',
  race: 'undead',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_CryptLordSpikedCarapace: ABILITY_TYPE = {
  code: 'AUts',
  id: 1096119411,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DarkRangerBlackArrow: ABILITY_TYPE = {
  code: 'ANba',
  id: 1095656033,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DarkRangerCharm: ABILITY_TYPE = {
  code: 'ANch',
  id: 1095656296,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_DarkRangerDrain: ABILITY_TYPE = {
  code: 'ANdr',
  id: 1095656562,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DarkRangerSilence: ABILITY_TYPE = {
  code: 'ANsi',
  id: 1095660393,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DeathKnightAnimateDead: ABILITY_TYPE = {
  code: 'AUan',
  id: 1096114542,
  sort: 'hero',
  race: 'undead',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_DeathKnightDeathCoil: ABILITY_TYPE = {
  code: 'AUdc',
  id: 1096115299,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DeathKnightDeathPact: ABILITY_TYPE = {
  code: 'AUdp',
  id: 1096115312,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DeathKnightUnholyAura: ABILITY_TYPE = {
  code: 'AUau',
  id: 1096114549,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DemonHunterEvasion: ABILITY_TYPE = {
  code: 'AEev',
  id: 1095066998,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DemonHunterImmolation: ABILITY_TYPE = {
  code: 'AEim',
  id: 1095068013,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DemonHunterManaBurn: ABILITY_TYPE = {
  code: 'AEmb',
  id: 1095069026,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DemonHunterMetamorphosis: ABILITY_TYPE = {
  code: 'AEme',
  id: 1095069029,
  sort: 'hero',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_DreadlordSleep: ABILITY_TYPE = {
  code: 'AUsl',
  id: 1096119148,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DreadlordVampiricAura: ABILITY_TYPE = {
  code: 'AUav',
  id: 1096114550,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DreadlordCarrionSwarm: ABILITY_TYPE = {
  code: 'AUcs',
  id: 1096115059,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_DreadlordInferno: ABILITY_TYPE = {
  code: 'AUin',
  id: 1096116590,
  sort: 'hero',
  race: 'undead',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_FarseerChainLightning: ABILITY_TYPE = {
  code: 'AOcl',
  id: 1095721836,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FarseerEarthquake: ABILITY_TYPE = {
  code: 'AOeq',
  id: 1095722353,
  sort: 'hero',
  race: 'orc',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_FarseerFarSight: ABILITY_TYPE = {
  code: 'AOfs',
  id: 1095722611,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FarseerSpiritWolf: ABILITY_TYPE = {
  code: 'AOsf',
  id: 1095725926,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_KeeperEntanglingRoots: ABILITY_TYPE = {
  code: 'AEer',
  id: 1095066994,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_KeeperForceOfNature: ABILITY_TYPE = {
  code: 'AEfn',
  id: 1095067246,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_KeeperThornsAura: ABILITY_TYPE = {
  code: 'AEah',
  id: 1095065960,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_KeeperTranquility: ABILITY_TYPE = {
  code: 'AEtq',
  id: 1095070833,
  sort: 'hero',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_LichDarkRitual: ABILITY_TYPE = {
  code: 'AUdr',
  id: 1096115314,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_LichDeathAndDecay: ABILITY_TYPE = {
  code: 'AUdd',
  id: 1096115300,
  sort: 'hero',
  race: 'undead',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_LichFrostArmor: ABILITY_TYPE = {
  code: 'AUfa',
  id: 1096115809,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_LichFrostArmorAutocast: ABILITY_TYPE = {
  code: 'AUfu',
  id: 1096115829,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_LichFrostNova: ABILITY_TYPE = {
  code: 'AUfn',
  id: 1096115822,
  sort: 'hero',
  race: 'undead',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_MountainKingAvatar: ABILITY_TYPE = {
  code: 'AHav',
  id: 1095262582,
  sort: 'hero',
  race: 'human',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_MountainKingBash: ABILITY_TYPE = {
  code: 'AHbh',
  id: 1095262824,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_MountainKingThunderBolt: ABILITY_TYPE = {
  code: 'AHtb',
  id: 1095267426,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_MountainKingThunderClap: ABILITY_TYPE = {
  code: 'AHtc',
  id: 1095267427,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_SeaWitchForkedLightning: ABILITY_TYPE = {
  code: 'ANfl',
  id: 1095657068,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_SeaWitchFrostArrows: ABILITY_TYPE = {
  code: 'ANfa',
  id: 1095657057,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_SeaWitchTornado: ABILITY_TYPE = {
  code: 'ANto',
  id: 1095660655,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_SeaWitchManaShield: ABILITY_TYPE = {
  code: 'ANms',
  id: 1095658867,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PaladinDevotionAura: ABILITY_TYPE = {
  code: 'AHad',
  id: 1095262564,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PaladinDivineShield: ABILITY_TYPE = {
  code: 'AHds',
  id: 1095263347,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PaladinHolyLight: ABILITY_TYPE = {
  code: 'AHhb',
  id: 1095264354,
  sort: 'hero',
  race: 'human',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PaladinResurrection: ABILITY_TYPE = {
  code: 'AHre',
  id: 1095266917,
  sort: 'hero',
  race: 'human',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_BrewmasterBreathOfFire: ABILITY_TYPE = {
  code: 'ANbf',
  id: 1095656038,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BrewmasterDrunkenBrawler: ABILITY_TYPE = {
  code: 'ANdb',
  id: 1095656546,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BrewmasterDrunkenHaze: ABILITY_TYPE = {
  code: 'ANdh',
  id: 1095656552,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BrewmasterStormEarthAndFire: ABILITY_TYPE = {
  code: 'ANef',
  id: 1095656806,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_PitLordDoom: ABILITY_TYPE = {
  code: 'ANdo',
  id: 1095656559,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_PitLordHowlOfTerror: ABILITY_TYPE = {
  code: 'ANht',
  id: 1095657588,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PitLordCleavingAttack: ABILITY_TYPE = {
  code: 'ANca',
  id: 1095656289,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PitLordRainOfFire: ABILITY_TYPE = {
  code: 'ANrf',
  id: 1095660134,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PriestessSearingArrows: ABILITY_TYPE = {
  code: 'AHfa',
  id: 1095263841,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PriestessScout: ABILITY_TYPE = {
  code: 'AEst',
  id: 1095070580,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PriestessStarfall: ABILITY_TYPE = {
  code: 'AEsf',
  id: 1095070566,
  sort: 'hero',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_PriestessTrueshotAura: ABILITY_TYPE = {
  code: 'AEar',
  id: 1095065970,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ChieftainEnduranceAura: ABILITY_TYPE = {
  code: 'AOae',
  id: 1095721317,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ChieftainReincarnation: ABILITY_TYPE = {
  code: 'AOre',
  id: 1095725669,
  sort: 'hero',
  race: 'orc',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_ChieftainShockWave: ABILITY_TYPE = {
  code: 'AOsh',
  id: 1095725928,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ChieftainWarStomp: ABILITY_TYPE = {
  code: 'AOws',
  id: 1095726963,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ShadowHunterHealingWave: ABILITY_TYPE = {
  code: 'AOhw',
  id: 1095723127,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ShadowHunterHex: ABILITY_TYPE = {
  code: 'AOhx',
  id: 1095723128,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ShadowHunterSerpentWard: ABILITY_TYPE = {
  code: 'AOsw',
  id: 1095725943,
  sort: 'hero',
  race: 'orc',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ShadowHunterVoodooo: ABILITY_TYPE = {
  code: 'AOvd',
  id: 1095726692,
  sort: 'hero',
  race: 'orc',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_WardenBlink: ABILITY_TYPE = {
  code: 'AEbl',
  id: 1095066220,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_WardenFanOfKnives: ABILITY_TYPE = {
  code: 'AEfk',
  id: 1095067243,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_WardenShadowStrike: ABILITY_TYPE = {
  code: 'AEsh',
  id: 1095070568,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_WardenSpiritOfVengeance: ABILITY_TYPE = {
  code: 'AEsv',
  id: 1095070582,
  sort: 'hero',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_Inferno: ABILITY_TYPE = {
  code: 'ANin',
  id: 1095657838,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_TichondriusInferno: ABILITY_TYPE = {
  code: 'SNin',
  id: 1397647726,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_FireBolt: ABILITY_TYPE = {
  code: 'ANfb',
  id: 1095657058,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FingerOfDeath: ABILITY_TYPE = {
  code: 'ANfd',
  id: 1095657060,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_FingerOfPain: ABILITY_TYPE = {
  code: 'ACfd',
  id: 1094936164,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FingerOfPain21Button: ABILITY_TYPE = {
  code: 'ACf3',
  id: 1094936115,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DarkPortal: ABILITY_TYPE = {
  code: 'ANdp',
  id: 1095656560,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_RainOfChaos: ABILITY_TYPE = {
  code: 'ANrc',
  id: 1095660131,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_RainOfChaosButton02: ABILITY_TYPE = {
  code: 'ANr3',
  id: 1095660083,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_CenariusBeefyStarfall: ABILITY_TYPE = {
  code: 'AEsb',
  id: 1095070562,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_MannorothReincarnation: ABILITY_TYPE = {
  code: 'ANrn',
  id: 1095660142,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_MalganisDarkConversion: ABILITY_TYPE = {
  code: 'ANdc',
  id: 1095656547,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_DarkConversionFast: ABILITY_TYPE = {
  code: 'SNdc',
  id: 1397646435,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_MalganisSoulPreservation: ABILITY_TYPE = {
  code: 'ANsl',
  id: 1095660396,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_IllidanMetamorphosis: ABILITY_TYPE = {
  code: 'AEIl',
  id: 1095059820,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_EvilIllidanMetamorphosis: ABILITY_TYPE = {
  code: 'AEvi',
  id: 1095071337,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_SuperEarthquake: ABILITY_TYPE = {
  code: 'SNeq',
  id: 1397646705,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_SuperDeathAndDecay: ABILITY_TYPE = {
  code: 'SNdd',
  id: 1397646436,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_Monsoon: ABILITY_TYPE = {
  code: 'ANmo',
  id: 1095658863,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_PoisonArrows: ABILITY_TYPE = {
  code: 'AEpa',
  id: 1095069793,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_WateryMinion: ABILITY_TYPE = {
  code: 'ANwm',
  id: 1095661421,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_ColdArrows: ABILITY_TYPE = {
  code: 'AHca',
  id: 1095263073,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BattleRoar: ABILITY_TYPE = {
  code: 'ANbr',
  id: 1095656050,
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RexxarSummonBear: ABILITY_TYPE = {
  code: 'Arsg',
  id: 1098019687,
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_AttributeModifierSkill: ABILITY_TYPE = {
  code: 'Aamk',
  id: 1096904043,
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RexxarSummonQuilbeast: ABILITY_TYPE = {
  code: 'Arsq',
  id: 1098019697,
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RexxarStampede: ABILITY_TYPE = {
  code: 'Arsp',
  id: 1098019696,
  sort: 'hero',
  race: 'creeps',
  levels: 2,
  requiredLevel: 6,
};
export const ABILITY_RexxarStormBolt: ABILITY_TYPE = {
  code: 'ANsb',
  id: 1095660386,
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RokhanHealingWave: ABILITY_TYPE = {
  code: 'ANhw',
  id: 1095657591,
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RokhanSerpentWard: ABILITY_TYPE = {
  code: 'Arsw',
  id: 1098019703,
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RokhanHex: ABILITY_TYPE = {
  code: 'ANhx',
  id: 1095657592,
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_RokhanVoodooSpirits: ABILITY_TYPE = {
  code: 'AOls',
  id: 1095724147,
  sort: 'hero',
  race: 'orc',
  levels: 2,
  requiredLevel: 6,
};
export const ABILITY_ChenBreathOfFire: ABILITY_TYPE = {
  code: 'ANcf',
  id: 1095656294,
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_ChenDrunkenBrawler: ABILITY_TYPE = {
  code: 'Acdb',
  id: 1097032802,
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_ChenDrunkenHaze: ABILITY_TYPE = {
  code: 'Acdh',
  id: 1097032808,
  sort: 'hero',
  race: 'creeps',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_ChenStormEarthAndFire: ABILITY_TYPE = {
  code: 'Acef',
  id: 1097033062,
  sort: 'hero',
  race: 'creeps',
  levels: 2,
  requiredLevel: 6,
};
export const ABILITY_CairneEnduranceAura: ABILITY_TYPE = {
  code: 'AOr2',
  id: 1095725618,
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_CairneReincarnation: ABILITY_TYPE = {
  code: 'AOr3',
  id: 1095725619,
  sort: 'hero',
  race: 'orc',
  levels: 2,
  requiredLevel: 6,
};
export const ABILITY_CairneShockWave: ABILITY_TYPE = {
  code: 'AOs2',
  id: 1095725874,
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_CairneWarStomp: ABILITY_TYPE = {
  code: 'AOw2',
  id: 1095726898,
  sort: 'hero',
  race: 'orc',
  levels: 4,
  requiredLevel: 1,
};
export const ABILITY_IllidanChannel: ABILITY_TYPE = {
  code: 'ANcl',
  id: 1095656300,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_AbolishMagic: ABILITY_TYPE = {
  code: 'Aadm',
  id: 1096901741,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AbolishMagicNaga: ABILITY_TYPE = {
  code: 'Andm',
  id: 1097753709,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AbolishMagicCreep: ABILITY_TYPE = {
  code: 'ACdm',
  id: 1094935661,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AbolishMagicCreep12Pos: ABILITY_TYPE = {
  code: 'ACd2',
  id: 1094935602,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AbsorbMana: ABILITY_TYPE = {
  code: 'Aabs',
  id: 1096901235,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AcolyteHarvest: ABILITY_TYPE = {
  code: 'Aaha',
  id: 1096902753,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AvatarGarithos: ABILITY_TYPE = {
  code: 'ANav',
  id: 1095655798,
  sort: 'hero',
  race: 'other',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_Alarm: ABILITY_TYPE = {
  code: 'Aalr',
  id: 1096903794,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AlliedBuilding: ABILITY_TYPE = {
  code: 'Aall',
  id: 1096903788,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AncestralSpirit: ABILITY_TYPE = {
  code: 'Aast',
  id: 1096905588,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AnimateDeadCreep: ABILITY_TYPE = {
  code: 'ACad',
  id: 1094934884,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AntiMagicShield: ABILITY_TYPE = {
  code: 'Aams',
  id: 1096904051,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AntiMagicShieldCreep: ABILITY_TYPE = {
  code: 'ACam',
  id: 1094934893,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Attack: ABILITY_TYPE = {
  code: 'Aatk',
  id: 1096905835,
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_AuraBrillianceCreep: ABILITY_TYPE = {
  code: 'ACba',
  id: 1094935137,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraCommandCreep: ABILITY_TYPE = {
  code: 'ACac',
  id: 1094934883,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraDevotionCreep: ABILITY_TYPE = {
  code: 'ACav',
  id: 1094934902,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraEnduranceCreep: ABILITY_TYPE = {
  code: 'SCae',
  id: 1396924773,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraPlagueAbomination: ABILITY_TYPE = {
  code: 'Aap1',
  id: 1096904753,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraPlaguePlagueWard: ABILITY_TYPE = {
  code: 'Aap2',
  id: 1096904754,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraPlagueCreep: ABILITY_TYPE = {
  code: 'Aap3',
  id: 1096904755,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraPlagueCreepGfx: ABILITY_TYPE = {
  code: 'Aap4',
  id: 1096904756,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraRegenerationWard: ABILITY_TYPE = {
  code: 'Aoar',
  id: 1097818482,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraRegenerationStatue: ABILITY_TYPE = {
  code: 'Aabr',
  id: 1096901234,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraSlow: ABILITY_TYPE = {
  code: 'Aasl',
  id: 1096905580,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraTrueshotCreep: ABILITY_TYPE = {
  code: 'ACat',
  id: 1094934900,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraWarDrums: ABILITY_TYPE = {
  code: 'Aakb',
  id: 1096903522,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AvengerForm: ABILITY_TYPE = {
  code: 'Aave',
  id: 1096906341,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Awaken: ABILITY_TYPE = {
  code: 'Aawa',
  id: 1096906593,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BallsOfFire: ABILITY_TYPE = {
  code: 'Abof',
  id: 1096970086,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BanishCreep: ABILITY_TYPE = {
  code: 'ACbn',
  id: 1094935150,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BashCreep: ABILITY_TYPE = {
  code: 'ACbh',
  id: 1094935144,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BashBeastmasterBear: ABILITY_TYPE = {
  code: 'ANbh',
  id: 1095656040,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BashMaulSPBearLevel3: ABILITY_TYPE = {
  code: 'ANb2',
  id: 1095655986,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Battlestations: ABILITY_TYPE = {
  code: 'Abtl',
  id: 1096971372,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BattlestationsChaos: ABILITY_TYPE = {
  code: 'Sbtl',
  id: 1398961260,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Bearform: ABILITY_TYPE = {
  code: 'Abrf',
  id: 1096970854,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Beserk: ABILITY_TYPE = {
  code: 'Absk',
  id: 1096971115,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BerserkerUpgrade: ABILITY_TYPE = {
  code: 'Sbsk',
  id: 1398961003,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlackArrowMeleeCreep: ABILITY_TYPE = {
  code: 'ACbk',
  id: 1094935147,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightDispelSmall: ABILITY_TYPE = {
  code: 'Abds',
  id: 1096967283,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightDispelLarge: ABILITY_TYPE = {
  code: 'Abdl',
  id: 1096967276,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightGrowthSmall: ABILITY_TYPE = {
  code: 'Abgs',
  id: 1096968051,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightGrowthLarge: ABILITY_TYPE = {
  code: 'Abgl',
  id: 1096968044,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightedGoldMine: ABILITY_TYPE = {
  code: 'Abgm',
  id: 1096968045,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlinkBeastmasterBear: ABILITY_TYPE = {
  code: 'ANbl',
  id: 1095656044,
  sort: 'hero',
  race: 'nightelf',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_BlizzardCreep: ABILITY_TYPE = {
  code: 'ACbz',
  id: 1094935162,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Bloodlust: ABILITY_TYPE = {
  code: 'Ablo',
  id: 1096969327,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BloodlustCreep: ABILITY_TYPE = {
  code: 'ACbl',
  id: 1094935148,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BloodlustCreepHotkeyB: ABILITY_TYPE = {
  code: 'ACbb',
  id: 1094935138,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BreathOfFireCreep: ABILITY_TYPE = {
  code: 'ACbc',
  id: 1094935139,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BreathOfFrostCreep: ABILITY_TYPE = {
  code: 'ACbf',
  id: 1094935142,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildNeutral: ABILITY_TYPE = {
  code: 'ANbu',
  id: 1095656053,
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildHuman: ABILITY_TYPE = {
  code: 'AHbu',
  id: 1095262837,
  sort: 'unit',
  race: 'human',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildOrc: ABILITY_TYPE = {
  code: 'AObu',
  id: 1095721589,
  sort: 'unit',
  race: 'orc',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildNightElf: ABILITY_TYPE = {
  code: 'AEbu',
  id: 1095066229,
  sort: 'unit',
  race: 'nightelf',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildUndead: ABILITY_TYPE = {
  code: 'AUbu',
  id: 1096114805,
  sort: 'unit',
  race: 'undead',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_BuildNaga: ABILITY_TYPE = {
  code: 'AGbu',
  id: 1095197301,
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_Burrow: ABILITY_TYPE = {
  code: 'Abur',
  id: 1096971634,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BurrowScarabLvl2: ABILITY_TYPE = {
  code: 'Abu2',
  id: 1096971570,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BurrowScarabLvl3: ABILITY_TYPE = {
  code: 'Abu3',
  id: 1096971571,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BurrowBarbedArachnathid: ABILITY_TYPE = {
  code: 'Abu5',
  id: 1096971573,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BurrowDetectionFlyers: ABILITY_TYPE = {
  code: 'Abdt',
  id: 1096967284,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Cannibalize: ABILITY_TYPE = {
  code: 'Acan',
  id: 1097032046,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CannibalizeAbomination: ABILITY_TYPE = {
  code: 'Acn2',
  id: 1097035314,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CannibalizeCreep: ABILITY_TYPE = {
  code: 'ACcn',
  id: 1094935406,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldBurrow: ABILITY_TYPE = {
  code: 'Abun',
  id: 1096971630,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldDevour: ABILITY_TYPE = {
  code: 'Advc',
  id: 1097102947,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldMeatWagon: ABILITY_TYPE = {
  code: 'Sch2',
  id: 1399023666,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldShip: ABILITY_TYPE = {
  code: 'Sch5',
  id: 1399023669,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldTank: ABILITY_TYPE = {
  code: 'Sch4',
  id: 1399023668,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldTransport: ABILITY_TYPE = {
  code: 'Sch3',
  id: 1399023667,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldGoldMine: ABILITY_TYPE = {
  code: 'Aenc',
  id: 1097166435,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CargoHoldDeath: ABILITY_TYPE = {
  code: 'Achd',
  id: 1097033828,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CarrionSwarmCreep: ABILITY_TYPE = {
  code: 'ACca',
  id: 1094935393,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrushingWave: ABILITY_TYPE = {
  code: 'ACcv',
  id: 1094935414,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrushingWaveDragonTurtle: ABILITY_TYPE = {
  code: 'ACc2',
  id: 1094935346,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrushingWaveLesser: ABILITY_TYPE = {
  code: 'ACc3',
  id: 1094935347,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChainLightningCreep: ABILITY_TYPE = {
  code: 'ACcl',
  id: 1094935404,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChainDispel: ABILITY_TYPE = {
  code: 'Ache',
  id: 1097033829,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosGrunt: ABILITY_TYPE = {
  code: 'Sca1',
  id: 1399021873,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosRaider: ABILITY_TYPE = {
  code: 'Sca2',
  id: 1399021874,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosShaman: ABILITY_TYPE = {
  code: 'Sca3',
  id: 1399021875,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosKodo: ABILITY_TYPE = {
  code: 'Sca4',
  id: 1399021876,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosPeon: ABILITY_TYPE = {
  code: 'Sca5',
  id: 1399021877,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosGrom: ABILITY_TYPE = {
  code: 'Sca6',
  id: 1399021878,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChaosCargoLoad: ABILITY_TYPE = {
  code: 'Achl',
  id: 1097033836,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Charm: ABILITY_TYPE = {
  code: 'ACch',
  id: 1094935400,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CleavingAttackCreep: ABILITY_TYPE = {
  code: 'ACce',
  id: 1094935397,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CloudOfFog: ABILITY_TYPE = {
  code: 'Aclf',
  id: 1097034854,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ColdArrowsCreep: ABILITY_TYPE = {
  code: 'ACcw',
  id: 1094935415,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ControlMagic: ABILITY_TYPE = {
  code: 'Acmg',
  id: 1097035111,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CorporealForm: ABILITY_TYPE = {
  code: 'Acpf',
  id: 1097035878,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CorrosiveBreath: ABILITY_TYPE = {
  code: 'Acor',
  id: 1097035634,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CoupleArcher: ABILITY_TYPE = {
  code: 'Acoa',
  id: 1097035617,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CoupleHippogryph: ABILITY_TYPE = {
  code: 'Acoh',
  id: 1097035624,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CoupleInstantArcher: ABILITY_TYPE = {
  code: 'Aco2',
  id: 1097035570,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CoupleInstantHippogryph: ABILITY_TYPE = {
  code: 'Aco3',
  id: 1097035571,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CreepSleep: ABILITY_TYPE = {
  code: 'ACsp',
  id: 1094939504,
  sort: 'unit',
  race: 'creeps',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_Cripple: ABILITY_TYPE = {
  code: 'Acri',
  id: 1097036393,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrippleWarlock: ABILITY_TYPE = {
  code: 'Scri',
  id: 1399026281,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrippleCreep: ABILITY_TYPE = {
  code: 'ACcr',
  id: 1094935410,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CriticalStrikeCreep: ABILITY_TYPE = {
  code: 'ACct',
  id: 1094935412,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Curse: ABILITY_TYPE = {
  code: 'Acrs',
  id: 1097036403,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CurseCreep: ABILITY_TYPE = {
  code: 'ACcs',
  id: 1094935411,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Cyclone: ABILITY_TYPE = {
  code: 'Acyc',
  id: 1097038179,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CycloneNaga: ABILITY_TYPE = {
  code: 'Acny',
  id: 1097035385,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CycloneCreep: ABILITY_TYPE = {
  code: 'ACcy',
  id: 1094935417,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CycloneCenarius: ABILITY_TYPE = {
  code: 'SCc1',
  id: 1396925233,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathCoilCreep: ABILITY_TYPE = {
  code: 'ACdc',
  id: 1094935651,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathDamageSapper: ABILITY_TYPE = {
  code: 'Adda',
  id: 1097098337,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathDamageMine: ABILITY_TYPE = {
  code: 'Amnx',
  id: 1097690744,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathDamageMineBIG: ABILITY_TYPE = {
  code: 'Amnz',
  id: 1097690746,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Decouple: ABILITY_TYPE = {
  code: 'Adec',
  id: 1097098595,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Defend: ABILITY_TYPE = {
  code: 'Adef',
  id: 1097098598,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectSentryWard: ABILITY_TYPE = {
  code: 'Adt1',
  id: 1097102385,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectShade: ABILITY_TYPE = {
  code: 'Atru',
  id: 1098150517,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectGeneral: ABILITY_TYPE = {
  code: 'Adtg',
  id: 1097102439,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectWarEagle: ABILITY_TYPE = {
  code: 'ANtr',
  id: 1095660658,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectGyrocopter: ABILITY_TYPE = {
  code: 'Agyv',
  id: 1097300342,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DetectMagicSentinel: ABILITY_TYPE = {
  code: 'Adts',
  id: 1097102451,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Detonate: ABILITY_TYPE = {
  code: 'Adtn',
  id: 1097102446,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Devour: ABILITY_TYPE = {
  code: 'Adev',
  id: 1097098614,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DevourDragonCreep: ABILITY_TYPE = {
  code: 'ACdv',
  id: 1094935670,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DevourMagic: ABILITY_TYPE = {
  code: 'Advm',
  id: 1097102957,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DevourMagicCreep: ABILITY_TYPE = {
  code: 'ACde',
  id: 1094935653,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DisenchantOld: ABILITY_TYPE = {
  code: 'Adch',
  id: 1097098088,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DisenchantNew: ABILITY_TYPE = {
  code: 'Adcn',
  id: 1097098094,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DispelMagic: ABILITY_TYPE = {
  code: 'Adis',
  id: 1097099635,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DispelMagicCreep: ABILITY_TYPE = {
  code: 'Adsm',
  id: 1097102189,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DivineShieldCreep: ABILITY_TYPE = {
  code: 'ACds',
  id: 1094935667,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DrainLifeCreep: ABILITY_TYPE = {
  code: 'ACdr',
  id: 1094935666,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DropInstant: ABILITY_TYPE = {
  code: 'Adri',
  id: 1097101929,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Drop: ABILITY_TYPE = {
  code: 'Adro',
  id: 1097101935,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Drop_2: ABILITY_TYPE = {
  code: 'Sdro',
  id: 1399091823,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DropPilot: ABILITY_TYPE = {
  code: 'Atdp',
  id: 1098146928,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EatTree: ABILITY_TYPE = {
  code: 'Aeat',
  id: 1097163124,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EnsnareNaga: ABILITY_TYPE = {
  code: 'ANen',
  id: 1095656814,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Ensnare: ABILITY_TYPE = {
  code: 'Aens',
  id: 1097166451,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EnsnareCreep: ABILITY_TYPE = {
  code: 'ACen',
  id: 1094935918,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Entangle: ABILITY_TYPE = {
  code: 'Aent',
  id: 1097166452,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EntangledGoldMine: ABILITY_TYPE = {
  code: 'Aegm',
  id: 1097164653,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EntanglingRootsCreep: ABILITY_TYPE = {
  code: 'Aenr',
  id: 1097166450,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EntanglingSeaweed: ABILITY_TYPE = {
  code: 'Aenw',
  id: 1097166455,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Ethereal: ABILITY_TYPE = {
  code: 'Aetl',
  id: 1097167980,
  sort: 'unit',
  race: 'nightelf',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_EtherealForm: ABILITY_TYPE = {
  code: 'Aetf',
  id: 1097167974,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EvasionCreep: ABILITY_TYPE = {
  code: 'ACev',
  id: 1094935926,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_EvasionCreep100: ABILITY_TYPE = {
  code: 'ACes',
  id: 1094935923,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Exhume: ABILITY_TYPE = {
  code: 'Aexh',
  id: 1097169000,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FaerieFire: ABILITY_TYPE = {
  code: 'Afae',
  id: 1097228645,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FaerieFire_2: ABILITY_TYPE = {
  code: 'Afa2',
  id: 1097228594,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FaerieFireCreep: ABILITY_TYPE = {
  code: 'ACff',
  id: 1094936166,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Feedback: ABILITY_TYPE = {
  code: 'Afbk',
  id: 1097228907,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeedbackArcaneTower: ABILITY_TYPE = {
  code: 'Afbt',
  id: 1097228916,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeedbackSpiritBeast: ABILITY_TYPE = {
  code: 'Afbb',
  id: 1097228898,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeralSpiritCreep: ABILITY_TYPE = {
  code: 'ACsf',
  id: 1094939494,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeralSpiritCreepPig: ABILITY_TYPE = {
  code: 'ACs9',
  id: 1094939449,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FeralSpiritSpiritBeast: ABILITY_TYPE = {
  code: 'ACs8',
  id: 1094939448,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FeralSpiritAkama: ABILITY_TYPE = {
  code: 'ACs7',
  id: 1094939447,
  sort: 'hero',
  race: 'creeps',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_FingerOfDeath_2: ABILITY_TYPE = {
  code: 'Afod',
  id: 1097232228,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FireBoltWarlock: ABILITY_TYPE = {
  code: 'Awfb',
  id: 1098344034,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FireBoltCreep: ABILITY_TYPE = {
  code: 'ACfb',
  id: 1094936162,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlakCannon: ABILITY_TYPE = {
  code: 'Aflk',
  id: 1097231467,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Flare: ABILITY_TYPE = {
  code: 'Afla',
  id: 1097231457,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlameStrikeCreep: ABILITY_TYPE = {
  code: 'ACfs',
  id: 1094936179,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlameStrikeImprovedCreep: ABILITY_TYPE = {
  code: 'ANfs',
  id: 1095657075,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ForceOfNatureCreep: ABILITY_TYPE = {
  code: 'ACfr',
  id: 1094936178,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ForkedLightningCreep: ABILITY_TYPE = {
  code: 'ACfl',
  id: 1094936172,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FragShards: ABILITY_TYPE = {
  code: 'Afsh',
  id: 1097233256,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FreezingBreath: ABILITY_TYPE = {
  code: 'Afrz',
  id: 1097233018,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Frenzy: ABILITY_TYPE = {
  code: 'Afzy',
  id: 1097235065,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostArmorCreepOld: ABILITY_TYPE = {
  code: 'ACfa',
  id: 1094936161,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostArmorCreepAutocast: ABILITY_TYPE = {
  code: 'ACf2',
  id: 1094936114,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostArmorAutocastNaga: ABILITY_TYPE = {
  code: 'ACfu',
  id: 1094936181,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostAttack: ABILITY_TYPE = {
  code: 'Afra',
  id: 1097232993,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostBreath: ABILITY_TYPE = {
  code: 'Afrb',
  id: 1097232994,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostNovaCreep: ABILITY_TYPE = {
  code: 'ACfn',
  id: 1094936174,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostBolt: ABILITY_TYPE = {
  code: 'ACcb',
  id: 1094935394,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Ghost: ABILITY_TYPE = {
  code: 'Agho',
  id: 1097295983,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GhostVisible: ABILITY_TYPE = {
  code: 'Aeth',
  id: 1097167976,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GoldMine: ABILITY_TYPE = {
  code: 'Agld',
  id: 1097296996,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GrabTree: ABILITY_TYPE = {
  code: 'Agra',
  id: 1097298529,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Graveyard: ABILITY_TYPE = {
  code: 'Agyd',
  id: 1097300324,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GyrocopterBombs: ABILITY_TYPE = {
  code: 'Agyb',
  id: 1097300322,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HardenedSkin: ABILITY_TYPE = {
  code: 'Assk',
  id: 1098085227,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HardenedSkinNagaTurtle: ABILITY_TYPE = {
  code: 'Ansk',
  id: 1097757547,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Harvest: ABILITY_TYPE = {
  code: 'Ahar',
  id: 1097359730,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HarvestNaga: ABILITY_TYPE = {
  code: 'ANha',
  id: 1095657569,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HarvestLumber: ABILITY_TYPE = {
  code: 'Ahrl',
  id: 1097364076,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HarvestLumberShredder: ABILITY_TYPE = {
  code: 'Ahr3',
  id: 1097364019,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HarvestLumberArchGhouls: ABILITY_TYPE = {
  code: 'Ahr2',
  id: 1097364018,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Heal: ABILITY_TYPE = {
  code: 'Ahea',
  id: 1097360737,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealCreepNormal: ABILITY_TYPE = {
  code: 'Anhe',
  id: 1097754725,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealCreepNormal_2: ABILITY_TYPE = {
  code: 'Anh1',
  id: 1097754673,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealCreepHigh: ABILITY_TYPE = {
  code: 'Anh2',
  id: 1097754674,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealingWard: ABILITY_TYPE = {
  code: 'Ahwd',
  id: 1097365348,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealingWardCreep: ABILITY_TYPE = {
  code: 'AChw',
  id: 1094936695,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealingWaveCreep: ABILITY_TYPE = {
  code: 'AChv',
  id: 1094936694,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NullRoarSummoner: ABILITY_TYPE = {
  code: 'Ahnl',
  id: 1097363052,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Hero: ABILITY_TYPE = {
  code: 'AHer',
  id: 1095263602,
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_HexCreep: ABILITY_TYPE = {
  code: 'AChx',
  id: 1094936696,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HowlOfTerror: ABILITY_TYPE = {
  code: 'Acht',
  id: 1097033844,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ImmolationCreep: ABILITY_TYPE = {
  code: 'ACim',
  id: 1094936941,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ImpaleCreep: ABILITY_TYPE = {
  code: 'ACmp',
  id: 1094937968,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ImpalingBolt: ABILITY_TYPE = {
  code: 'Aimp',
  id: 1097428336,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_InnerFire: ABILITY_TYPE = {
  code: 'Ainf',
  id: 1097428582,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_InnerFireCreep: ABILITY_TYPE = {
  code: 'ACif',
  id: 1094936934,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Invisibility: ABILITY_TYPE = {
  code: 'Aivs',
  id: 1097430643,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory: ABILITY_TYPE = {
  code: 'AInv',
  id: 1095331446,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_InventoryPackMule: ABILITY_TYPE = {
  code: 'Apak',
  id: 1097884011,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory2SlotUnitOrc: ABILITY_TYPE = {
  code: 'Aion',
  id: 1097428846,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory2SlotUnitHuman: ABILITY_TYPE = {
  code: 'Aihn',
  id: 1097427054,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory2SlotUnitNightElf: ABILITY_TYPE = {
  code: 'Aien',
  id: 1097426286,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Inventory2SlotUnitUndead: ABILITY_TYPE = {
  code: 'Aiun',
  id: 1097430382,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Invulnerable: ABILITY_TYPE = {
  code: 'Avul',
  id: 1098282348,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningAttack: ABILITY_TYPE = {
  code: 'Alit',
  id: 1097623924,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningShield: ABILITY_TYPE = {
  code: 'Alsh',
  id: 1097626472,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningShieldCreep: ABILITY_TYPE = {
  code: 'ACls',
  id: 1094937715,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LiquidFire: ABILITY_TYPE = {
  code: 'Aliq',
  id: 1097623921,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Load: ABILITY_TYPE = {
  code: 'Aloa',
  id: 1097625441,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LoadBurrow: ABILITY_TYPE = {
  code: 'Sloa',
  id: 1399615329,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LoadEntangledGoldMine: ABILITY_TYPE = {
  code: 'Slo2',
  id: 1399615282,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LoadNavies: ABILITY_TYPE = {
  code: 'Slo3',
  id: 1399615283,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LoadPilot: ABILITY_TYPE = {
  code: 'Atlp',
  id: 1098148976,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Locust: ABILITY_TYPE = {
  code: 'Aloc',
  id: 1097625443,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicDefense: ABILITY_TYPE = {
  code: 'Amdf',
  id: 1097688166,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunity: ABILITY_TYPE = {
  code: 'Amim',
  id: 1097689453,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunityCreep: ABILITY_TYPE = {
  code: 'ACmi',
  id: 1094937961,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunityArchimonde: ABILITY_TYPE = {
  code: 'ACm2',
  id: 1094937906,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunityDragons: ABILITY_TYPE = {
  code: 'ACm3',
  id: 1094937907,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AerialShackles: ABILITY_TYPE = {
  code: 'Amls',
  id: 1097690227,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBattery: ABILITY_TYPE = {
  code: 'Ambt',
  id: 1097687668,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBatteryObsidianStatue: ABILITY_TYPE = {
  code: 'Amb2',
  id: 1097687602,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBurnDemon: ABILITY_TYPE = {
  code: 'Amnb',
  id: 1097690722,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBurnDemon_2: ABILITY_TYPE = {
  code: 'Ambd',
  id: 1097687652,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaBurnHotkeyB: ABILITY_TYPE = {
  code: 'Ambb',
  id: 1097687650,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaFlare: ABILITY_TYPE = {
  code: 'Amfl',
  id: 1097688684,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaShieldCreep: ABILITY_TYPE = {
  code: 'ACmf',
  id: 1094937958,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MeatDrop: ABILITY_TYPE = {
  code: 'Amed',
  id: 1097688420,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MeatLoad: ABILITY_TYPE = {
  code: 'Amel',
  id: 1097688428,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Militia: ABILITY_TYPE = {
  code: 'Amil',
  id: 1097689452,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MilitiaConversion: ABILITY_TYPE = {
  code: 'Amic',
  id: 1097689443,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MindRot: ABILITY_TYPE = {
  code: 'ANmr',
  id: 1095658866,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Mine: ABILITY_TYPE = {
  code: 'Amin',
  id: 1097689454,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MonsoonCreep: ABILITY_TYPE = {
  code: 'ACmo',
  id: 1094937967,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MoonGlaive: ABILITY_TYPE = {
  code: 'Amgl',
  id: 1097688940,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MoonGlaiveNoResearch: ABILITY_TYPE = {
  code: 'Amgr',
  id: 1097688946,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Move: ABILITY_TYPE = {
  code: 'Amov',
  id: 1097690998,
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_NeutralBuilding: ABILITY_TYPE = {
  code: 'Aneu',
  id: 1097753973,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralBuildingAnyUnit: ABILITY_TYPE = {
  code: 'Ane2',
  id: 1097753906,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralDetectionRevealAbility: ABILITY_TYPE = {
  code: 'Andt',
  id: 1097753716,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralRegenManaOnly: ABILITY_TYPE = {
  code: 'ANre',
  id: 1095660133,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralRegenHealthOnly: ABILITY_TYPE = {
  code: 'ACnr',
  id: 1094938226,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_NeutralSpies: ABILITY_TYPE = {
  code: 'Ansp',
  id: 1097757552,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfAnnihilation: ABILITY_TYPE = {
  code: 'Afak',
  id: 1097228651,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfAnnihilationQuillSpray: ABILITY_TYPE = {
  code: 'ANak',
  id: 1095655787,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OnFire: ABILITY_TYPE = {
  code: 'Afir',
  id: 1097230706,
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_OnFireHuman: ABILITY_TYPE = {
  code: 'Afih',
  id: 1097230696,
  sort: 'unit',
  race: 'human',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_OnFireOrc: ABILITY_TYPE = {
  code: 'Afio',
  id: 1097230703,
  sort: 'unit',
  race: 'orc',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_OnFireNightElf: ABILITY_TYPE = {
  code: 'Afin',
  id: 1097230702,
  sort: 'unit',
  race: 'nightelf',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_OnFireUndead: ABILITY_TYPE = {
  code: 'Afiu',
  id: 1097230709,
  sort: 'unit',
  race: 'undead',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_Parasite: ABILITY_TYPE = {
  code: 'ANpa',
  id: 1095659617,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ParasiteEredar: ABILITY_TYPE = {
  code: 'ACpa',
  id: 1094938721,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentImmolation: ABILITY_TYPE = {
  code: 'ANpi',
  id: 1095659625,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentImmolationFlying: ABILITY_TYPE = {
  code: 'Apmf',
  id: 1097887078,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentImmolationGraphic: ABILITY_TYPE = {
  code: 'Apig',
  id: 1097886055,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentInvisibility: ABILITY_TYPE = {
  code: 'Apiv',
  id: 1097886070,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PhaseShift: ABILITY_TYPE = {
  code: 'Apsh',
  id: 1097888616,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Phoenix: ABILITY_TYPE = {
  code: 'Aphx',
  id: 1097885816,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PhoenixFire: ABILITY_TYPE = {
  code: 'Apxf',
  id: 1097889894,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PlagueToss: ABILITY_TYPE = {
  code: 'Apts',
  id: 1097888883,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PoisonAttack: ABILITY_TYPE = {
  code: 'Apoi',
  id: 1097887593,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Polymorph: ABILITY_TYPE = {
  code: 'Aply',
  id: 1097886841,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PolymorphCreep: ABILITY_TYPE = {
  code: 'ACpy',
  id: 1094938745,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Possession: ABILITY_TYPE = {
  code: 'Apos',
  id: 1097887603,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PossessionCreep: ABILITY_TYPE = {
  code: 'ACps',
  id: 1094938739,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Pulverize: ABILITY_TYPE = {
  code: 'Awar',
  id: 1098342770,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PulverizeSeaGiant: ABILITY_TYPE = {
  code: 'ACpv',
  id: 1094938742,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PurchaseItem: ABILITY_TYPE = {
  code: 'Apit',
  id: 1097886068,
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_Purge: ABILITY_TYPE = {
  code: 'Aprg',
  id: 1097888359,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PurgeCreep: ABILITY_TYPE = {
  code: 'ACpu',
  id: 1094938741,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RainOfFireCreep: ABILITY_TYPE = {
  code: 'ACrf',
  id: 1094939238,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RainOfFireCreepGreater: ABILITY_TYPE = {
  code: 'ACrg',
  id: 1094939239,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RaiseDead: ABILITY_TYPE = {
  code: 'Arai',
  id: 1098015081,
  sort: 'unit',
  race: 'undead',
  levels: 2,
  requiredLevel: 0,
};
export const ABILITY_RaiseDeadCreep: ABILITY_TYPE = {
  code: 'ACrd',
  id: 1094939236,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Rally: ABILITY_TYPE = {
  code: 'ARal',
  id: 1095917932,
  sort: 'unit',
  race: 'other',
  levels: 0,
  requiredLevel: 0,
};
export const ABILITY_RavenFormDruid: ABILITY_TYPE = {
  code: 'Arav',
  id: 1098015094,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RavenFormMedivh: ABILITY_TYPE = {
  code: 'Amrf',
  id: 1097691750,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReincarnationCreep: ABILITY_TYPE = {
  code: 'ACrn',
  id: 1094939246,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReincarnationGeneric: ABILITY_TYPE = {
  code: 'ANr2',
  id: 1095660082,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 6,
};
export const ABILITY_ReinforcedBurrows: ABILITY_TYPE = {
  code: 'Arbr',
  id: 1098015346,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Rejuvination: ABILITY_TYPE = {
  code: 'Arej',
  id: 1098016106,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RejuvinationCreep: ABILITY_TYPE = {
  code: 'ACrj',
  id: 1094939242,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RejuvinationFurbolg: ABILITY_TYPE = {
  code: 'ACr2',
  id: 1094939186,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Renew: ABILITY_TYPE = {
  code: 'Aren',
  id: 1098016110,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RepairHuman: ABILITY_TYPE = {
  code: 'Ahrp',
  id: 1097364080,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RepairOrc: ABILITY_TYPE = {
  code: 'Arep',
  id: 1098016112,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReplenishLifeMana: ABILITY_TYPE = {
  code: 'Arpb',
  id: 1098018914,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReplenishLife: ABILITY_TYPE = {
  code: 'Arpl',
  id: 1098018924,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReplenishMana: ABILITY_TYPE = {
  code: 'Arpm',
  id: 1098018925,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ResistantSkin: ABILITY_TYPE = {
  code: 'Arsk',
  id: 1098019691,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ResistantSkinCreep: ABILITY_TYPE = {
  code: 'ACrk',
  id: 1094939243,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ResistantSkin31PosCreep: ABILITY_TYPE = {
  code: 'ACsk',
  id: 1094939499,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Restoration: ABILITY_TYPE = {
  code: 'Arst',
  id: 1098019700,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReturnGold: ABILITY_TYPE = {
  code: 'Argd',
  id: 1098016612,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReturnGoldLumber: ABILITY_TYPE = {
  code: 'Argl',
  id: 1098016620,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ReturnLumber: ABILITY_TYPE = {
  code: 'Arlm',
  id: 1098017901,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RevealArcaneTower: ABILITY_TYPE = {
  code: 'AHta',
  id: 1095267425,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Revenge: ABILITY_TYPE = {
  code: 'Arng',
  id: 1098018407,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Revive: ABILITY_TYPE = {
  code: 'Arev',
  id: 1098016118,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Roar: ABILITY_TYPE = {
  code: 'Aroa',
  id: 1098018657,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Roar_2: ABILITY_TYPE = {
  code: 'Ara2',
  id: 1098015026,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RoarCreepSkeletalOrc: ABILITY_TYPE = {
  code: 'ACr1',
  id: 1094939185,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RoarCreep: ABILITY_TYPE = {
  code: 'ACro',
  id: 1094939247,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RocketAttack: ABILITY_TYPE = {
  code: 'Aroc',
  id: 1098018659,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RootAncients: ABILITY_TYPE = {
  code: 'Aro1',
  id: 1098018609,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RootAncientProtector: ABILITY_TYPE = {
  code: 'Aro2',
  id: 1098018610,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SacrificeSacrificialPit: ABILITY_TYPE = {
  code: 'Asac',
  id: 1098080611,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Pillage: ABILITY_TYPE = {
  code: 'Asal',
  id: 1098080620,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SacrificeAcolyte: ABILITY_TYPE = {
  code: 'Alam',
  id: 1097621869,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SearingArrowsCreep: ABILITY_TYPE = {
  code: 'ACsa',
  id: 1094939489,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SelfDestruct: ABILITY_TYPE = {
  code: 'Asds',
  id: 1098081395,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SellItem: ABILITY_TYPE = {
  code: 'Asid',
  id: 1098082660,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SellUnit: ABILITY_TYPE = {
  code: 'Asud',
  id: 1098085732,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Sentinel: ABILITY_TYPE = {
  code: 'Aesn',
  id: 1097167726,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SentinelNoResearch: ABILITY_TYPE = {
  code: 'Aesr',
  id: 1097167730,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SentryWard: ABILITY_TYPE = {
  code: 'Aeye',
  id: 1097169253,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SerpentWardTentacleForgottenOne: ABILITY_TYPE = {
  code: 'ACtn',
  id: 1094939758,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowMeld: ABILITY_TYPE = {
  code: 'Ashm',
  id: 1098082413,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowMeldInstant: ABILITY_TYPE = {
  code: 'Sshm',
  id: 1400072301,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowMeldAkama: ABILITY_TYPE = {
  code: 'Ahid',
  id: 1097361764,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowStrikeCreep: ABILITY_TYPE = {
  code: 'ACss',
  id: 1094939507,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShockwaveCreep: ABILITY_TYPE = {
  code: 'ACsh',
  id: 1094939496,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShockwaveTrap: ABILITY_TYPE = {
  code: 'ACst',
  id: 1094939508,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GarithosShockWave: ABILITY_TYPE = {
  code: 'ANsh',
  id: 1095660392,
  sort: 'hero',
  race: 'other',
  levels: 3,
  requiredLevel: 1,
};
export const ABILITY_SilenceCreep: ABILITY_TYPE = {
  code: 'ACsi',
  id: 1094939497,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SiphonManaCreep: ABILITY_TYPE = {
  code: 'ACsm',
  id: 1094939501,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SleepCreep: ABILITY_TYPE = {
  code: 'ACsl',
  id: 1094939500,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SleepAlways: ABILITY_TYPE = {
  code: 'Asla',
  id: 1098083425,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Slow: ABILITY_TYPE = {
  code: 'Aslo',
  id: 1098083439,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SlowCreep: ABILITY_TYPE = {
  code: 'ACsw',
  id: 1094939511,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SlowPoison: ABILITY_TYPE = {
  code: 'Aspo',
  id: 1098084463,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnSkeleton: ABILITY_TYPE = {
  code: 'Asod',
  id: 1098084196,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnSpiderling: ABILITY_TYPE = {
  code: 'Assp',
  id: 1098085232,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnSpider: ABILITY_TYPE = {
  code: 'Aspd',
  id: 1098084452,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnHydra: ABILITY_TYPE = {
  code: 'Aspy',
  id: 1098084473,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpawnHydraHatchling: ABILITY_TYPE = {
  code: 'Aspt',
  id: 1098084468,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpellSteal: ABILITY_TYPE = {
  code: 'Asps',
  id: 1098084467,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Sphere: ABILITY_TYPE = {
  code: 'Asph',
  id: 1098084456,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel1: ABILITY_TYPE = {
  code: 'Asp1',
  id: 1098084401,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel2: ABILITY_TYPE = {
  code: 'Asp2',
  id: 1098084402,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel3: ABILITY_TYPE = {
  code: 'Asp3',
  id: 1098084403,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel4: ABILITY_TYPE = {
  code: 'Asp4',
  id: 1098084404,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel5: ABILITY_TYPE = {
  code: 'Asp5',
  id: 1098084405,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SphereSoVLevel6: ABILITY_TYPE = {
  code: 'Asp6',
  id: 1098084406,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpiderAttack: ABILITY_TYPE = {
  code: 'Aspa',
  id: 1098084449,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpikedBarricades: ABILITY_TYPE = {
  code: 'Aspi',
  id: 1098084457,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpiritLink: ABILITY_TYPE = {
  code: 'Aspl',
  id: 1098084460,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StandDown: ABILITY_TYPE = {
  code: 'Astd',
  id: 1098085476,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StasisTrap: ABILITY_TYPE = {
  code: 'Asta',
  id: 1098085473,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StoneForm: ABILITY_TYPE = {
  code: 'Astn',
  id: 1098085486,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StormHammers: ABILITY_TYPE = {
  code: 'Asth',
  id: 1098085480,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SubmergeMyrmidon: ABILITY_TYPE = {
  code: 'Asb1',
  id: 1098080817,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SubmergeRoyalGuard: ABILITY_TYPE = {
  code: 'Asb2',
  id: 1098080818,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SubmergeSnapDragon: ABILITY_TYPE = {
  code: 'Asb3',
  id: 1098080819,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SummonLobstrokPrawns: ABILITY_TYPE = {
  code: 'Aslp',
  id: 1098083440,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SummonSeaElemental: ABILITY_TYPE = {
  code: 'ACwe',
  id: 1094940517,
  sort: 'hero',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TankTurret: ABILITY_TYPE = {
  code: 'Attu',
  id: 1098151029,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TankUpgrade: ABILITY_TYPE = {
  code: 'Srtt',
  id: 1400009844,
  sort: 'unit',
  race: 'human',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Taunt: ABILITY_TYPE = {
  code: 'Atau',
  id: 1098146165,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TauntCreep: ABILITY_TYPE = {
  code: 'ANta',
  id: 1095660641,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThornyShieldCreep: ABILITY_TYPE = {
  code: 'ANth',
  id: 1095660648,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThornyShieldDragonTurtle: ABILITY_TYPE = {
  code: 'ANt2',
  id: 1095660594,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThornsAuraCreep: ABILITY_TYPE = {
  code: 'ACah',
  id: 1094934888,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThunderBoltCreep: ABILITY_TYPE = {
  code: 'ACtb',
  id: 1094939746,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThunderClapCreep: ABILITY_TYPE = {
  code: 'ACtc',
  id: 1094939747,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ThunderClapThunderLizard: ABILITY_TYPE = {
  code: 'ACt2',
  id: 1094939698,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TornadoDamage: ABILITY_TYPE = {
  code: 'Atdg',
  id: 1098146919,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TornadoSpin: ABILITY_TYPE = {
  code: 'Atsp',
  id: 1098150768,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TornadoWander: ABILITY_TYPE = {
  code: 'Atwa',
  id: 1098151777,
  sort: 'unit',
  race: 'naga',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_TreeOfLifeForAttachingArt: ABILITY_TYPE = {
  code: 'Atol',
  id: 1098149740,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Ultravision: ABILITY_TYPE = {
  code: 'Ault',
  id: 1098214516,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyAuraCreep: ABILITY_TYPE = {
  code: 'ACua',
  id: 1094940001,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyFrenzy: ABILITY_TYPE = {
  code: 'Auhf',
  id: 1098213478,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyFrenzyWarlock: ABILITY_TYPE = {
  code: 'Suhf',
  id: 1400203366,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyFrenzyCreep: ABILITY_TYPE = {
  code: 'ACuf',
  id: 1094940006,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnstableConcoction: ABILITY_TYPE = {
  code: 'Auco',
  id: 1098212207,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Unsummon: ABILITY_TYPE = {
  code: 'Auns',
  id: 1098215027,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VampiricAttack: ABILITY_TYPE = {
  code: 'SCva',
  id: 1396930145,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VampiricAuraCreep: ABILITY_TYPE = {
  code: 'ACvp',
  id: 1094940272,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Vengeance: ABILITY_TYPE = {
  code: 'Avng',
  id: 1098280551,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Wander: ABILITY_TYPE = {
  code: 'Awan',
  id: 1098342766,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WarStompCreep: ABILITY_TYPE = {
  code: 'Awrs',
  id: 1098347123,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WarStompSeaGiant: ABILITY_TYPE = {
  code: 'Awrg',
  id: 1098347111,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WarStompHydra: ABILITY_TYPE = {
  code: 'Awrh',
  id: 1098347112,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WindWalk: ABILITY_TYPE = {
  code: 'ANwk',
  id: 1095661419,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 1,
};
export const ABILITY_WispHarvest: ABILITY_TYPE = {
  code: 'Awha',
  id: 1098344545,
  sort: 'unit',
  race: 'nightelf',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WispHarvestInvulnerable: ABILITY_TYPE = {
  code: 'Awh2',
  id: 1098344498,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VenomSpears: ABILITY_TYPE = {
  code: 'Aven',
  id: 1098278254,
  sort: 'unit',
  race: 'orc',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VenomSpearsCreep: ABILITY_TYPE = {
  code: 'ACvs',
  id: 1094940275,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Warp: ABILITY_TYPE = {
  code: 'Awrp',
  id: 1098347120,
  sort: 'unit',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Web: ABILITY_TYPE = {
  code: 'Aweb',
  id: 1098343778,
  sort: 'unit',
  race: 'undead',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WebCreep: ABILITY_TYPE = {
  code: 'ACwb',
  id: 1094940514,
  sort: 'unit',
  race: 'creeps',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus1: ABILITY_TYPE = {
  code: 'AIa1',
  id: 1095328049,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus3: ABILITY_TYPE = {
  code: 'AIa3',
  id: 1095328051,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus4: ABILITY_TYPE = {
  code: 'AIa4',
  id: 1095328052,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus6: ABILITY_TYPE = {
  code: 'AIa6',
  id: 1095328054,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CrownOfKingsAll5: ABILITY_TYPE = {
  code: 'AIx5',
  id: 1095333941,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_All1: ABILITY_TYPE = {
  code: 'AIx1',
  id: 1095333937,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_All2: ABILITY_TYPE = {
  code: 'AIx2',
  id: 1095333938,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthBonus1: ABILITY_TYPE = {
  code: 'AIs1',
  id: 1095332657,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthBonus3: ABILITY_TYPE = {
  code: 'AIs3',
  id: 1095332659,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthBonus4: ABILITY_TYPE = {
  code: 'AIs4',
  id: 1095332660,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthBonus6: ABILITY_TYPE = {
  code: 'AIs6',
  id: 1095332662,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceBonus1: ABILITY_TYPE = {
  code: 'AIi1',
  id: 1095330097,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceBonus3: ABILITY_TYPE = {
  code: 'AIi3',
  id: 1095330099,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceBonus4: ABILITY_TYPE = {
  code: 'AIi4',
  id: 1095330100,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceBonus6: ABILITY_TYPE = {
  code: 'AIi6',
  id: 1095330102,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentAll1: ABILITY_TYPE = {
  code: 'AIxm',
  id: 1095333997,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityMod: ABILITY_TYPE = {
  code: 'AIam',
  id: 1095328109,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceMod: ABILITY_TYPE = {
  code: 'AIim',
  id: 1095330157,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthMod: ABILITY_TYPE = {
  code: 'AIsm',
  id: 1095332717,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityMod2: ABILITY_TYPE = {
  code: 'AIgm',
  id: 1095329645,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_IntelligenceMod2: ABILITY_TYPE = {
  code: 'AItm',
  id: 1095332973,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StrengthMod2: ABILITY_TYPE = {
  code: 'AInm',
  id: 1095331437,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackMod: ABILITY_TYPE = {
  code: 'AIaa',
  id: 1095328097,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus: ABILITY_TYPE = {
  code: 'AIat',
  id: 1095328116,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus_2: ABILITY_TYPE = {
  code: 'AIt6',
  id: 1095332918,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus_3: ABILITY_TYPE = {
  code: 'AIt9',
  id: 1095332921,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus_4: ABILITY_TYPE = {
  code: 'AItc',
  id: 1095332963,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus_5: ABILITY_TYPE = {
  code: 'AItf',
  id: 1095332966,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus1: ABILITY_TYPE = {
  code: 'AItg',
  id: 1095332967,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus2: ABILITY_TYPE = {
  code: 'AIth',
  id: 1095332968,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus4: ABILITY_TYPE = {
  code: 'AIti',
  id: 1095332969,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus5: ABILITY_TYPE = {
  code: 'AItj',
  id: 1095332970,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus7: ABILITY_TYPE = {
  code: 'AItk',
  id: 1095332971,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus8: ABILITY_TYPE = {
  code: 'AItl',
  id: 1095332972,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus10: ABILITY_TYPE = {
  code: 'AItn',
  id: 1095332974,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_VampiricAttack_2: ABILITY_TYPE = {
  code: 'AIva',
  id: 1095333473,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlinkItem: ABILITY_TYPE = {
  code: 'AIbk',
  id: 1095328363,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyCastle: ABILITY_TYPE = {
  code: 'AIbl',
  id: 1095328364,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyGreatHall: ABILITY_TYPE = {
  code: 'AIbg',
  id: 1095328359,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyScoutTower: ABILITY_TYPE = {
  code: 'AIbt',
  id: 1095328372,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyBlacksmith: ABILITY_TYPE = {
  code: 'AIbb',
  id: 1095328354,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyFarm: ABILITY_TYPE = {
  code: 'AIbf',
  id: 1095328358,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyLumberMill: ABILITY_TYPE = {
  code: 'AIbr',
  id: 1095328370,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyBarracks: ABILITY_TYPE = {
  code: 'AIbs',
  id: 1095328371,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BuildTinyAltar: ABILITY_TYPE = {
  code: 'AIbh',
  id: 1095328360,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Cyclone_2: ABILITY_TYPE = {
  code: 'AIcy',
  id: 1095328633,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus1: ABILITY_TYPE = {
  code: 'AId1',
  id: 1095328817,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus2: ABILITY_TYPE = {
  code: 'AId2',
  id: 1095328818,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus3: ABILITY_TYPE = {
  code: 'AId3',
  id: 1095328819,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus4: ABILITY_TYPE = {
  code: 'AId4',
  id: 1095328820,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus5: ABILITY_TYPE = {
  code: 'AId5',
  id: 1095328821,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FortificationGlyph: ABILITY_TYPE = {
  code: 'AIgf',
  id: 1095329638,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UltraVisionGlyph: ABILITY_TYPE = {
  code: 'AIgu',
  id: 1095329653,
  sort: 'item',
  race: 'other',
  levels: 2,
  requiredLevel: 0,
};
export const ABILITY_ExperienceMod: ABILITY_TYPE = {
  code: 'AIem',
  id: 1095329133,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ExperienceModGreater: ABILITY_TYPE = {
  code: 'AIe2',
  id: 1095329074,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineRedDrake: ABILITY_TYPE = {
  code: 'AIfd',
  id: 1095329380,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineFurbolg: ABILITY_TYPE = {
  code: 'AIff',
  id: 1095329382,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineRockGolem: ABILITY_TYPE = {
  code: 'AIfr',
  id: 1095329394,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineDoomGuard: ABILITY_TYPE = {
  code: 'AIfu',
  id: 1095329397,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineFelHound: ABILITY_TYPE = {
  code: 'AIfh',
  id: 1095329384,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineSkeleton: ABILITY_TYPE = {
  code: 'AIfs',
  id: 1095329395,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineIceRevenant: ABILITY_TYPE = {
  code: 'AIir',
  id: 1095330162,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FigurineUrsaWarrior: ABILITY_TYPE = {
  code: 'AIuw',
  id: 1095333239,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Flag: ABILITY_TYPE = {
  code: 'AIfl',
  id: 1095329388,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagHuman: ABILITY_TYPE = {
  code: 'AIfm',
  id: 1095329389,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagOrc: ABILITY_TYPE = {
  code: 'AIfo',
  id: 1095329391,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagNightElf: ABILITY_TYPE = {
  code: 'AIfn',
  id: 1095329390,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagUndead: ABILITY_TYPE = {
  code: 'AIfe',
  id: 1095329381,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlagOrcBattleStandard: ABILITY_TYPE = {
  code: 'AIfx',
  id: 1095329400,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FlareGun: ABILITY_TYPE = {
  code: 'AIfa',
  id: 1095329377,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInferno: ABILITY_TYPE = {
  code: 'AIin',
  id: 1095330158,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LevelMod: ABILITY_TYPE = {
  code: 'AIlm',
  id: 1095330925,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningPurge: ABILITY_TYPE = {
  code: 'AIlp',
  id: 1095330928,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxLifeBonusLeast: ABILITY_TYPE = {
  code: 'AIlf',
  id: 1095330918,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxLifeBonusLesser: ABILITY_TYPE = {
  code: 'AIl1',
  id: 1095330865,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxLifeBonusGreater: ABILITY_TYPE = {
  code: 'AIl2',
  id: 1095330866,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MoveSpeedBonus: ABILITY_TYPE = {
  code: 'AIms',
  id: 1095331187,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfDarknessBlackArrow: ABILITY_TYPE = {
  code: 'ANbs',
  id: 1095656051,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfDarkness: ABILITY_TYPE = {
  code: 'AIdf',
  id: 1095328870,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfCorruption: ABILITY_TYPE = {
  code: 'AIcb',
  id: 1095328610,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowOrbAbility: ABILITY_TYPE = {
  code: 'AIdn',
  id: 1095328878,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfFire: ABILITY_TYPE = {
  code: 'AIfb',
  id: 1095329378,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfGuldan: ABILITY_TYPE = {
  code: 'AIgd',
  id: 1095329636,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfFreezing: ABILITY_TYPE = {
  code: 'AIzb',
  id: 1095334498,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfFrost: ABILITY_TYPE = {
  code: 'AIob',
  id: 1095331682,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfLightning: ABILITY_TYPE = {
  code: 'AIll',
  id: 1095330924,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfLightningOld: ABILITY_TYPE = {
  code: 'AIlb',
  id: 1095330914,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfSpells: ABILITY_TYPE = {
  code: 'AIsb',
  id: 1095332706,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfVenom: ABILITY_TYPE = {
  code: 'AIpb',
  id: 1095331938,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_OrbOfVenomPoisonAttack: ABILITY_TYPE = {
  code: 'Apo2',
  id: 1097887538,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AnimateDeadItemSpecial: ABILITY_TYPE = {
  code: 'AInd',
  id: 1095331428,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RegenLife: ABILITY_TYPE = {
  code: 'Arel',
  id: 1098016108,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RegenLife_2: ABILITY_TYPE = {
  code: 'Arll',
  id: 1098017900,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SightBonus: ABILITY_TYPE = {
  code: 'AIsi',
  id: 1095332713,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Slow_2: ABILITY_TYPE = {
  code: 'AIos',
  id: 1095331699,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SoulTrap: ABILITY_TYPE = {
  code: 'AIso',
  id: 1095332719,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SoulPossession: ABILITY_TYPE = {
  code: 'Asou',
  id: 1098084213,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemCloakOfFlames: ABILITY_TYPE = {
  code: 'AIcf',
  id: 1095328614,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemCommand: ABILITY_TYPE = {
  code: 'AIco',
  id: 1095328623,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDamageAoe: ABILITY_TYPE = {
  code: 'AIdm',
  id: 1095328877,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDefenseAoe: ABILITY_TYPE = {
  code: 'AIda',
  id: 1095328865,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDefenseAoeHealing: ABILITY_TYPE = {
  code: 'AIdb',
  id: 1095328866,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDetectAoe: ABILITY_TYPE = {
  code: 'AIta',
  id: 1095332961,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDispelAoe: ABILITY_TYPE = {
  code: 'AIdi',
  id: 1095328873,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDispelAoeWithCooldown: ABILITY_TYPE = {
  code: 'AIds',
  id: 1095328883,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PowerupDispelAoe: ABILITY_TYPE = {
  code: 'APdi',
  id: 1095787625,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealLesser: ABILITY_TYPE = {
  code: 'AIh1',
  id: 1095329841,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealGreater: ABILITY_TYPE = {
  code: 'AIh2',
  id: 1095329842,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealLeast: ABILITY_TYPE = {
  code: 'AIh3',
  id: 1095329843,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealAoe: ABILITY_TYPE = {
  code: 'AIha',
  id: 1095329889,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealAoeGreater: ABILITY_TYPE = {
  code: 'AIhb',
  id: 1095329890,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PowerupHealAoeLesser: ABILITY_TYPE = {
  code: 'APh1',
  id: 1095788593,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PowerupHealAoe: ABILITY_TYPE = {
  code: 'APh2',
  id: 1095788594,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PowerupHealAoeGreater: ABILITY_TYPE = {
  code: 'APh3',
  id: 1095788595,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HealingWard_2: ABILITY_TYPE = {
  code: 'AIhw',
  id: 1095329911,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SentryWard_2: ABILITY_TYPE = {
  code: 'AIsw',
  id: 1095332727,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemIllusion: ABILITY_TYPE = {
  code: 'AIil',
  id: 1095330156,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInvisLesser: ABILITY_TYPE = {
  code: 'AIv1',
  id: 1095333425,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInvisGreater: ABILITY_TYPE = {
  code: 'AIv2',
  id: 1095333426,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInvul: ABILITY_TYPE = {
  code: 'AIvu',
  id: 1095333493,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemInvul_2: ABILITY_TYPE = {
  code: 'AIvl',
  id: 1095333484,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemManaRestoreLesser: ABILITY_TYPE = {
  code: 'AIm1',
  id: 1095331121,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemManaRestoreGreater: ABILITY_TYPE = {
  code: 'AIm2',
  id: 1095331122,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemManaRestoreAoe: ABILITY_TYPE = {
  code: 'AImr',
  id: 1095331186,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneManaRestoreAoe: ABILITY_TYPE = {
  code: 'APmr',
  id: 1095789938,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneManaRestoreGreaterAoe: ABILITY_TYPE = {
  code: 'APmg',
  id: 1095789927,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemPlaceMine: ABILITY_TYPE = {
  code: 'AIpm',
  id: 1095331949,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRecall: ABILITY_TYPE = {
  code: 'AIrt',
  id: 1095332468,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRegenMana: ABILITY_TYPE = {
  code: 'AIrm',
  id: 1095332461,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRegenManaLesser: ABILITY_TYPE = {
  code: 'AIrn',
  id: 1095332462,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemReincarnation: ABILITY_TYPE = {
  code: 'AIrc',
  id: 1095332451,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRestore: ABILITY_TYPE = {
  code: 'AIre',
  id: 1095332453,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRestoreAoe: ABILITY_TYPE = {
  code: 'AIra',
  id: 1095332449,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneRestoreAoe: ABILITY_TYPE = {
  code: 'APra',
  id: 1095791201,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemSpeed: ABILITY_TYPE = {
  code: 'AIsp',
  id: 1095332720,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemSpeedAoe: ABILITY_TYPE = {
  code: 'AIsa',
  id: 1095332705,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneSpeedAoe: ABILITY_TYPE = {
  code: 'APsa',
  id: 1095791457,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemTownPortal: ABILITY_TYPE = {
  code: 'AItp',
  id: 1095332976,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraDevotion: ABILITY_TYPE = {
  code: 'AIad',
  id: 1095328100,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraCommand: ABILITY_TYPE = {
  code: 'AIcd',
  id: 1095328612,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraBrilliance: ABILITY_TYPE = {
  code: 'AIba',
  id: 1095328353,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraVampiric: ABILITY_TYPE = {
  code: 'AIav',
  id: 1095328118,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraTrueshot: ABILITY_TYPE = {
  code: 'AIar',
  id: 1095328114,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraEndurance: ABILITY_TYPE = {
  code: 'AIae',
  id: 1095328101,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemAuraUnholy: ABILITY_TYPE = {
  code: 'AIau',
  id: 1095328117,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemUltravision: ABILITY_TYPE = {
  code: 'AIuv',
  id: 1095333238,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_LightningShield_2: ABILITY_TYPE = {
  code: 'AIls',
  id: 1095330931,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AntiMagicShield_2: ABILITY_TYPE = {
  code: 'AIxs',
  id: 1095334003,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AnimateDead: ABILITY_TYPE = {
  code: 'AIan',
  id: 1095328110,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Resurrection: ABILITY_TYPE = {
  code: 'AIrs',
  id: 1095332467,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Roar_3: ABILITY_TYPE = {
  code: 'AIrr',
  id: 1095332466,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Evasion: ABILITY_TYPE = {
  code: 'AIev',
  id: 1095329142,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MagicImmunity_2: ABILITY_TYPE = {
  code: 'AImx',
  id: 1095331192,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentHitPointBonus: ABILITY_TYPE = {
  code: 'AImh',
  id: 1095331176,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxManaBonusLeast: ABILITY_TYPE = {
  code: 'AImb',
  id: 1095331170,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxManaBonusMost: ABILITY_TYPE = {
  code: 'AIbm',
  id: 1095328365,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackSpeedIncrease: ABILITY_TYPE = {
  code: 'AIsx',
  id: 1095332728,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackSpeedIncreaseGreater: ABILITY_TYPE = {
  code: 'AIs2',
  id: 1095332658,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfLifeRegen: ABILITY_TYPE = {
  code: 'AIrl',
  id: 1095332460,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfManaRegenGreater: ABILITY_TYPE = {
  code: 'AIpr',
  id: 1095331954,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ScrollOfLifeRegen: ABILITY_TYPE = {
  code: 'AIsl',
  id: 1095332716,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfManaRegenLesser: ABILITY_TYPE = {
  code: 'AIpl',
  id: 1095331948,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfRejuvI: ABILITY_TYPE = {
  code: 'AIp1',
  id: 1095331889,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfRejuvII: ABILITY_TYPE = {
  code: 'AIp2',
  id: 1095331890,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfRejuvIII: ABILITY_TYPE = {
  code: 'AIp3',
  id: 1095331891,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PotionOfRejuvIV: ABILITY_TYPE = {
  code: 'AIp4',
  id: 1095331892,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ScrollOfRejuvI: ABILITY_TYPE = {
  code: 'AIp5',
  id: 1095331893,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ScrollOfRejuvII: ABILITY_TYPE = {
  code: 'AIp6',
  id: 1095331894,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GiveGold: ABILITY_TYPE = {
  code: 'AIgo',
  id: 1095329647,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_GiveLumber: ABILITY_TYPE = {
  code: 'AIlu',
  id: 1095330933,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRevealMap: ABILITY_TYPE = {
  code: 'AIrv',
  id: 1095332470,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemDispelChain: ABILITY_TYPE = {
  code: 'AIdc',
  id: 1095328867,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemWeb: ABILITY_TYPE = {
  code: 'AIwb',
  id: 1095333730,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemMonsterLure: ABILITY_TYPE = {
  code: 'AImo',
  id: 1095331183,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemChangeTOD: ABILITY_TYPE = {
  code: 'AIct',
  id: 1095328628,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemRandomItem: ABILITY_TYPE = {
  code: 'AIri',
  id: 1095332457,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RunedBracers: ABILITY_TYPE = {
  code: 'AIsr',
  id: 1095332722,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BlightPlacement: ABILITY_TYPE = {
  code: 'Ablp',
  id: 1096969328,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemPotionVampirism: ABILITY_TYPE = {
  code: 'AIpv',
  id: 1095331958,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ManaSteal: ABILITY_TYPE = {
  code: 'Aste',
  id: 1098085477,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MechanicalCritter: ABILITY_TYPE = {
  code: 'Amec',
  id: 1097688419,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShadowSight: ABILITY_TYPE = {
  code: 'Ashs',
  id: 1098082419,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Preservation: ABILITY_TYPE = {
  code: 'ANpr',
  id: 1095659634,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Sanctuary: ABILITY_TYPE = {
  code: 'ANsa',
  id: 1095660385,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpellShield: ABILITY_TYPE = {
  code: 'ANss',
  id: 1095660403,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpellShieldAOE: ABILITY_TYPE = {
  code: 'ANse',
  id: 1095660389,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_Retrain: ABILITY_TYPE = {
  code: 'Aret',
  id: 1098016116,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_StaffOTeleportation: ABILITY_TYPE = {
  code: 'AImt',
  id: 1095331188,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SpellBook: ABILITY_TYPE = {
  code: 'Aspb',
  id: 1098084450,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RaiseDeadItem: ABILITY_TYPE = {
  code: 'AIrd',
  id: 1095332452,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DustOfAppearance: ABILITY_TYPE = {
  code: 'AItb',
  id: 1095332962,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DivineShieldItem: ABILITY_TYPE = {
  code: 'AIdv',
  id: 1095328886,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SilenceItem: ABILITY_TYPE = {
  code: 'AIse',
  id: 1095332709,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PurgeOrb: ABILITY_TYPE = {
  code: 'AIpg',
  id: 1095331943,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PurgeTotemSP: ABILITY_TYPE = {
  code: 'AIps',
  id: 1095331955,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CloudOfFogItem: ABILITY_TYPE = {
  code: 'AIfg',
  id: 1095329383,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfLesserResurrection: ABILITY_TYPE = {
  code: 'APrl',
  id: 1095791212,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfGreaterResurrection: ABILITY_TYPE = {
  code: 'APrr',
  id: 1095791218,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfRebirth: ABILITY_TYPE = {
  code: 'AIrb',
  id: 1095332450,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfSpiritLink: ABILITY_TYPE = {
  code: 'Aspp',
  id: 1098084464,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DarkSummoning: ABILITY_TYPE = {
  code: 'AUds',
  id: 1096115315,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_RuneOfTheWatcher: ABILITY_TYPE = {
  code: 'APwt',
  id: 1095792500,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_UnholyFrenzyItem: ABILITY_TYPE = {
  code: 'AIuf',
  id: 1095333222,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus10: ABILITY_TYPE = {
  code: 'AId0',
  id: 1095328816,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ControlMagicItem: ABILITY_TYPE = {
  code: 'AIcm',
  id: 1095328621,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxManaBonusLeastest: ABILITY_TYPE = {
  code: 'AImz',
  id: 1095331194,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FingerOfDeathItem: ABILITY_TYPE = {
  code: 'AIfz',
  id: 1095329402,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DeathPactItem: ABILITY_TYPE = {
  code: 'AIdp',
  id: 1095328880,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxManaBonusLeastestReally: ABILITY_TYPE = {
  code: 'AImv',
  id: 1095331190,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PermanentHitPointBonusSmall: ABILITY_TYPE = {
  code: 'AIpx',
  id: 1095331960,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefendItem: ABILITY_TYPE = {
  code: 'AIdd',
  id: 1095328868,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus7: ABILITY_TYPE = {
  code: 'AId7',
  id: 1095328823,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_DefenseBonus8: ABILITY_TYPE = {
  code: 'AId8',
  id: 1095328824,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_MaxLifeBonusLeastest: ABILITY_TYPE = {
  code: 'AIlz',
  id: 1095330938,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ItemHealLeastest: ABILITY_TYPE = {
  code: 'AIhx',
  id: 1095329912,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AgilityBonus10: ABILITY_TYPE = {
  code: 'AIaz',
  id: 1095328122,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ResurrectionItem: ABILITY_TYPE = {
  code: 'AIrx',
  id: 1095332472,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BashItem: ABILITY_TYPE = {
  code: 'AIbx',
  id: 1095328376,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AttackBonus20: ABILITY_TYPE = {
  code: 'AItx',
  id: 1095332984,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_WateryMinionItem: ABILITY_TYPE = {
  code: 'AIwm',
  id: 1095333741,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SummonHeadhunterItem: ABILITY_TYPE = {
  code: 'AIsh',
  id: 1095332712,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_200ManaBonus: ABILITY_TYPE = {
  code: 'AI2m',
  id: 1095316077,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_AuraRegenerationItem: ABILITY_TYPE = {
  code: 'AIgx',
  id: 1095329656,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_HolyLightItem: ABILITY_TYPE = {
  code: 'AIhl',
  id: 1095329900,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SlowPoisonItem: ABILITY_TYPE = {
  code: 'AIsz',
  id: 1095332730,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_PenguinSqueek: ABILITY_TYPE = {
  code: 'AIpz',
  id: 1095331962,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_SearingBladeFireMelee: ABILITY_TYPE = {
  code: 'AIfw',
  id: 1095329399,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_FrostguardFrostMelee: ABILITY_TYPE = {
  code: 'AIft',
  id: 1095329396,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ShamanClawsLightningMelee: ABILITY_TYPE = {
  code: 'AIlx',
  id: 1095330936,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_CriticalStrikeItem: ABILITY_TYPE = {
  code: 'AIcs',
  id: 1095328627,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_ChainLightningItem: ABILITY_TYPE = {
  code: 'AIcl',
  id: 1095328620,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_All3: ABILITY_TYPE = {
  code: 'AIx3',
  id: 1095333939,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_All4: ABILITY_TYPE = {
  code: 'AIx4',
  id: 1095333940,
  sort: 'item',
  race: 'other',
  levels: 1,
  requiredLevel: 0,
};
export const ABILITY_BeserkItem: ABILITY_TYPE = {
  code: 'AIxk',
  id: 1095333995,
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
