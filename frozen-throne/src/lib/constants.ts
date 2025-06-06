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
export const SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_SPELL_IMMUNITY = FourCC('A00R');

export const ABILITY_ID_ARMY_OF_DEATH = FourCC('A007:AUan');
export const ABILITY_ID_DEATH_COIL_LICH_KING = FourCC('A00I:AUdc');
export const ABILITY_ID_FROST_NOVA_LICH_KING = FourCC('A00J:AUfn');
export const ABILITY_ID_DOMINATION_AURA = FourCC('A00G:AUau');
export const ABILITY_ID_FROST_BOLT_LICH_KING = FourCC('A00H:ACcb');
export const ABILITY_ID_HOWL_OF_TERROR_LICH_KING = FourCC('A00E:ANht');

export const ABILITY_ID_FROSTMOURNE_ARMOR_REDUCTION = FourCC('A00F:AIcb');
export const ABILITY_ID_BOOK_OF_TELEPORTATION = FourCC('A00K:AHmt');
export const ABILITY_ID_MONSOON_THRALL = FourCC('A00L:ACmo');

export const ABILITY_ID_PURGE_NO_GRAPHIC = FourCC('A00S:Aprg');
export const ABILITY_ID_CHANNEL_UNIT = FourCC('A00N');

// Custom buffs
export const BUFF_ID_FROZEN = FourCC('B000');

// Custom Models
export const MODEL_Sand_Tornado = 'Models\\Tornado\\SandTornado.mdx';
export const MODEL_Water_Tornado = 'Models\\Tornado\\WaterTornado.mdx';
export const MODEL_Shadow_Tornado = 'Models\\Tornado\\ShadowTornado.mdx';
export const MODEL_Chat_Bubble = 'Models\\ChatBubble\\ChatBubble.mdx';
export const MODEL_Quest_New = 'Models\\QuestMark\\QuestNew.mdx';
export const MODEL_Quest_TurnIn = 'Models\\QuestMark\\QuestTurnIn.mdx';

// Custom unit types
export const UNIT_TirionFordring = { code: 'H004', id: FourCC('H004') };
export const UNIT_LichKing = { code: 'H001', id: FourCC('H001') };
export const UNIT_Scortah = { code: 'U000', id: FourCC('U000') };
export const UNIT_Zeus = { code: 'H002', id: FourCC('H002') };
export const UNIT_DarionMograine = { code: 'U002', id: FourCC('U002') };

export const UNIT_IPR_TRANSMITTER = { code: 'h005', id: FourCC('h005') };
export const UNIT_IPR_RECEIVER = { code: 'h006', id: FourCC('h006') };

export const UNIT_Butcher = { code: 'u001', id: FourCC('u001') };

// Players
export const playerMain = MapPlayer.fromIndex(4);
export const playerOrcishHorde = MapPlayer.fromIndex(0);
export const playerUndeadForsaken = MapPlayer.fromIndex(1);
export const playerNightElf = MapPlayer.fromIndex(2);
export const playerHumanAlliance = MapPlayer.fromIndex(9);
export const playerLichKingNpc = MapPlayer.fromIndex(3);
export const neutralHostile = MapPlayer.fromIndex(PLAYER_NEUTRAL_AGGRESSIVE);
export const neutralPassive = MapPlayer.fromIndex(PLAYER_NEUTRAL_PASSIVE);
