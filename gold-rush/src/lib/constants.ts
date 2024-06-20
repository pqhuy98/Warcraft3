export const ABILITY_ID_CHAIN_LIGHTNING = FourCC('A003:AOcl');

export const ABILITY_ID_THUNDER_BLINK = FourCC('A00B:AEbl');
export const SUPPORT_ABILITY_ID_THUNDER_CLAP = FourCC('A00C:AHtc');

export const ABILITY_ID_BLADE_DANCE = FourCC('A000:AHtb');

export const ABILITY_ID_DIVINE_FURY = FourCC('A004:AHtb');

export const ABILITY_ID_SANDQUAKE = FourCC('A006:AOs2');
export const SUPPORT_ABILITY_ID_SANDQUAKE_IMPALE = FourCC('A005:ACmp');

export const ABILITY_ID_WRATH_OF_THE_LICH_KING = FourCC('A00A:ANcl');
export const SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_STUN = FourCC('A008:AOw2');
export const SUPPORT_ABILITY_ID_WRATH_OF_THE_LICH_KING_BLIZZARD = FourCC('A00D:AHbz');

export const MODEL_Sand_Tornado = 'SandTornado.mdx';
export const MODEL_Water_Tornado = 'WaterTornado.mdx';
export const MODEL_Shadow_Tornado = 'ShadowTornado.mdx';

export const globalUnits = {
  fountainLight: <unit>undefined,
  fountainDark: <unit>undefined,
  heroZeus: <unit>undefined,
  heroThrall: <unit>undefined,
  heroSamuro: <unit>undefined,
  heroJaina: <unit>undefined,
  heroLichKing: <unit>undefined,
  heroScortah: <unit>undefined,
};

export function registerUnits() {
  globalUnits.heroZeus = gg_unit_H002_0191;
  globalUnits.fountainLight = gg_unit_nfoh_0003;
  globalUnits.fountainDark = gg_unit_nfoh_0321;
  globalUnits.heroThrall = gg_unit_Othr_0324;
  globalUnits.heroSamuro = gg_unit_Osam_0326;
  globalUnits.heroJaina = gg_unit_Hjai_0327;
  globalUnits.heroLichKing = gg_unit_H001_0320;
  globalUnits.heroScortah = gg_unit_U000_0322;
}
