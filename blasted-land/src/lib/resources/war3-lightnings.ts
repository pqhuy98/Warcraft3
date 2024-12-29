export interface LIGHTNING_TYPE {
  code: string
}
export const LIGHTNING_INIT: LIGHTNING_TYPE = {
  code: 'INIT',
};
export const LIGHTNING_ChainLightningPrimaryBolt: LIGHTNING_TYPE = {
  code: 'CLPB',
};
export const LIGHTNING_ChainLightningSecondaryBolt: LIGHTNING_TYPE = {
  code: 'CLSB',
};
export const LIGHTNING_ManaBurnBolt: LIGHTNING_TYPE = {
  code: 'MBUR',
};
export const LIGHTNING_LightningAttackChimera: LIGHTNING_TYPE = {
  code: 'CHIM',
};
export const LIGHTNING_FingerOfDeath: LIGHTNING_TYPE = {
  code: 'AFOD',
};
export const LIGHTNING_HealingWavePrimaryBolt: LIGHTNING_TYPE = {
  code: 'HWPB',
};
export const LIGHTNING_HealingWaveSecondaryBolt: LIGHTNING_TYPE = {
  code: 'HWSB',
};
export const LIGHTNING_ManaFlarePrimaryBolt: LIGHTNING_TYPE = {
  code: 'MFPB',
};
export const LIGHTNING_Drain: LIGHTNING_TYPE = {
  code: 'DRAB',
};
export const LIGHTNING_LifeDrain: LIGHTNING_TYPE = {
  code: 'DRAL',
};
export const LIGHTNING_ManaDrain: LIGHTNING_TYPE = {
  code: 'DRAM',
};
export const LIGHTNING_ForkedLightning: LIGHTNING_TYPE = {
  code: 'FORK',
};
export const LIGHTNING_SpiritLink: LIGHTNING_TYPE = {
  code: 'SPLK',
};
export const LIGHTNING_MagicLeash: LIGHTNING_TYPE = {
  code: 'LEAS',
};
export const ALL_LIGHTNINGS = [
  LIGHTNING_INIT,
  LIGHTNING_ChainLightningPrimaryBolt,
  LIGHTNING_ChainLightningSecondaryBolt,
  LIGHTNING_ManaBurnBolt,
  LIGHTNING_LightningAttackChimera,
  LIGHTNING_FingerOfDeath,
  LIGHTNING_HealingWavePrimaryBolt,
  LIGHTNING_HealingWaveSecondaryBolt,
  LIGHTNING_ManaFlarePrimaryBolt,
  LIGHTNING_Drain,
  LIGHTNING_LifeDrain,
  LIGHTNING_ManaDrain,
  LIGHTNING_ForkedLightning,
  LIGHTNING_SpiritLink,
  LIGHTNING_MagicLeash,
];
