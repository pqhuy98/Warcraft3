import { MapPlayer } from 'w3ts';

// Custom abilities
export const ABILITY_ID_CHAIN_LIGHTNING_ZEUS = FourCC('A003:AOcl');

export const ABILITY_ID_THUNDER_BLINK = FourCC('A00B:AEbl');
export const SUPPORT_ABILITY_ID_THUNDER_CLAP_ZEUS = FourCC('A00C:AHtc');

export const ABILITY_ID_BLADE_DANCE = FourCC('A000:AHtb');
export const ABILITY_ID_CRITICAL_STRIKE_SAMURO = FourCC('A002:AOrc');
export const ABILITY_ID_WIND_WALK_SAMURO = FourCC('A001:AOwk');

export const ABILITY_ID_DIVINE_FURY = FourCC('A004:AHtb');

export const ABILITY_ID_SANDQUAKE = FourCC('A006:AOs2');

export const ABILITY_ID_WRATH_OF_THE_LICH_KING = FourCC('A00A:ANcl');
export const SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN = FourCC('A008:AOw2');
export const SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD = FourCC('A00D:AHbz');

export const ABILITY_ID_ARMY_OF_DEATH = FourCC('A007:AUan');
export const ABILITY_ID_DEATH_COIL_LICH_KING = FourCC('A00I:AUdc');
export const ABILITY_ID_FROST_NOVA_LICH_KING = FourCC('A00J:AUfn');
export const ABILITY_ID_DOMINATION_AURA = FourCC('A00G:AUau');
export const ABILITY_ID_FROST_BOLT_LICH_KING = FourCC('A00H:ACcb');

export const ABILITY_ID_FROSTMOURNE_ARMOR_REDUCTION = FourCC('A00F:AIcb');
export const ABILITY_ID_BOOK_OF_TELEPORTATION = FourCC('A00K:AHmt');
export const ABILITY_ID_MONSOON_THRALL = FourCC('A00L:ACmo');

export const ABILITY_ID_PURGE_NO_GRAPHIC = FourCC('A00S:Aprg');
export const ABILITY_ID_POSSESSION_TARGET_HERO = FourCC('A00T:Apos');
export const ABILITY_ID_DECONSTRUCT = FourCC('A00U:ANtm');

// Custom Models
export const MODEL_Sand_Tornado = 'Models\\Tornado\\SandTornado.mdx';
export const MODEL_Water_Tornado = 'Models\\Tornado\\WaterTornado.mdx';
export const MODEL_Shadow_Tornado = 'Models\\Tornado\\ShadowTornado.mdx';
export const MODEL_Chat_Bubble = 'Models\\ChatBubble\\ChatBubble.mdx';
export const MODEL_Quest_New = 'Models\\QuestMark\\QuestNew.mdx';
export const MODEL_Quest_TurnIn = 'Models\\QuestMark\\QuestTurnIn.mdx';

// Custom unit types
export const UNIT_TirionFordring = { code: 'H004', id: FourCC('H004') };
export const UNIT_IPR_TRANSMITTER = { code: 'h005', id: FourCC('h005') };
export const UNIT_IPR_RECEIVER = { code: 'h006', id: FourCC('h006') };
export const UNIT_Butcher = { code: 'u001', id: FourCC('u001') };
export const UNIT_HarvestGolem = { code: 'n008', id: FourCC('n008') };
export const UNIT_BigSludge_1 = { code: 'n009', id: FourCC('n009') };
export const UNIT_BigSludge_2 = { code: 'n00A', id: FourCC('n00A') };
export const UNIT_BigSludge_3 = { code: 'n00B', id: FourCC('n00B') };
export const UNIT_LumberMillQuest = { code: 'h007', id: FourCC('h007') };

export const UNIT_Child_1a = { code: 'n00V', id: FourCC('n00V') };
export const UNIT_Child_2a = { code: 'n00W', id: FourCC('n00W') };
export const UNIT_Child_girl1 = { code: 'n00Z', id: FourCC('n00Z') };
export const UNIT_Child_girl2 = { code: 'n010', id: FourCC('n010') };
export const UNIT_Child_girl3 = { code: 'n011', id: FourCC('n011') };
export const UNIT_Villager_AgedFemale = { code: 'n00X', id: FourCC('n00X') };
export const UNIT_Villager_AgedMale = { code: 'n00Y', id: FourCC('n00Y') };

export const UNIT_Villager_Female1 = { code: 'n00T', id: FourCC('n00T') };
export const UNIT_Villager_Female2 = { code: 'n00S', id: FourCC('n00S') };
export const UNIT_Villager_Female3 = { code: 'n00R', id: FourCC('n00R') };
export const UNIT_Villager_Female4 = { code: 'n00U', id: FourCC('n00U') };
export const UNIT_Villager_FemaleRich = { code: 'n012', id: FourCC('n012') };
export const UNIT_Villager_Male1a = { code: 'n00E', id: FourCC('n00E') };
export const UNIT_Villager_Male1b = { code: 'n00F', id: FourCC('n00F') };
export const UNIT_Villager_Male1c = { code: 'n00G', id: FourCC('n00G') };
export const UNIT_Villager_Male1d = { code: 'n00D', id: FourCC('n00D') };
export const UNIT_Villager_Male2a = { code: 'n00I', id: FourCC('n00I') };
export const UNIT_Villager_Male2b = { code: 'n00J', id: FourCC('n00J') };
export const UNIT_Villager_Male2c = { code: 'n00K', id: FourCC('n00K') };
export const UNIT_Villager_Male2d = { code: 'n00M', id: FourCC('n00M') };
export const UNIT_Villager_MaleRich = { code: 'n00L', id: FourCC('n00L') };
export const UNIT_Villager_oldguy1 = { code: 'n00P', id: FourCC('n00P') };
export const UNIT_Villager_oldguy2 = { code: 'n00Q', id: FourCC('n00Q') };
export const UNIT_Villager_oldguy3 = { code: 'n00N', id: FourCC('n00N') };
export const UNIT_Villager_oldguy4 = { code: 'n00O', id: FourCC('n00O') };
export const UNIT_Villager_oldguy5 = { code: 'n00H', id: FourCC('n00H') };

// Destructable type IDs
export const DESTRUCTABLE_TREE = FourCC('B000');

// Players
export const playerOrcishHorde = MapPlayer.fromIndex(0);
export const playerNightElfSentinels = MapPlayer.fromIndex(2);
export const playerHumanAlliance = MapPlayer.fromIndex(1);
export const playerForsaken = MapPlayer.fromIndex(3);
export const playerMain = MapPlayer.fromIndex(4);
export const playerUndeadInvader = MapPlayer.fromIndex(5);
export const playerShadowfangCity = MapPlayer.fromIndex(6);
export const playerBlackTurban = MapPlayer.fromIndex(20);
export const playerMonsters = MapPlayer.fromIndex(21);
export const neutralHostile = MapPlayer.fromIndex(PLAYER_NEUTRAL_AGGRESSIVE);
export const neutralPassive = MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE);
