import { MapPlayer, Unit } from 'w3ts';

import { setTimeout } from './trigger';

export const ABILITY_ID_CHAIN_LIGHTNING = FourCC('A003:AOcl');

export const ABILITY_ID_THUNDER_BLINK = FourCC('A00B:AEbl');
export const SUPPORT_ABILITY_ID_THUNDER_CLAP = FourCC('A00C:AHtc');

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

export const MODEL_Sand_Tornado = 'Models\\Tornado\\SandTornado.mdx';
export const MODEL_Water_Tornado = 'Models\\Tornado\\WaterTornado.mdx';
export const MODEL_Shadow_Tornado = 'Models\\Tornado\\ShadowTornado.mdx';

export const UNIT_TirionFordring = { code: 'H004' };

export const mainPlayer = MapPlayer.fromIndex(4);

export const globalUnits: Record<string, Unit> = {
};

const globalUnitColors = new Map<Unit, playercolor>();

export function registerGlobalUnits() {
  setTimeout(0, () => {
    // globalUnitColors.set(globalUnits.fountainLight, PLAYER_COLOR_BLUE);
    for (const [unit, color] of globalUnitColors) {
      unit.color = color;
    }
  });
}

export function getGlobalUnitColor(unit: Unit) {
  return globalUnitColors.get(unit) ?? PLAYER_COLOR_COAL;
}
