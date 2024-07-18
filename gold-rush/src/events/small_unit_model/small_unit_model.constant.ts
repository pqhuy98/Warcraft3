import { Unit } from 'w3ts';

const defaultFactor = 0.5;

export const constants = {
  scalingFactor: defaultFactor,
  selectionScalingFactor: defaultFactor,
  movingFactor: defaultFactor,
  cameraDistanceFactor: defaultFactor,
};

export const originalScaleMap = new Map<number, {
  scale: number,
  selectionScale: number,
  flyHeight: number,
  speed: number,
  speedWalk: number,
  speedRun: number,
  attackRange: [number, number],
}>();

export const originalAbilityDataMap = new Map<number, Map<abilityreallevelfield, number>>();

export function getOriginalScale(unit: Unit): {
  scale: number,
  selectionScale: number,
} | undefined {
  return originalScaleMap.get(unit.typeId);
}

export function getScalingFactor() {
  return constants.scalingFactor;
}

export function getSelectionScalingFactor() {
  return constants.selectionScalingFactor;
}

export function toScale(value: number) {
  return value * constants.scalingFactor;
}

const modulo = 100;

export function toAbilityKey(abilityId: number, level: number) {
  return abilityId * modulo + level;
}

export function syncDummyAbilityEffectRange(dummy: Unit, master: Unit, abilityId: number, abilityLevel: number) {
  BlzSetAbilityRealLevelField(
    dummy.getAbility(abilityId),
    ABILITY_RLF_AREA_OF_EFFECT,
    abilityLevel - 1,
    BlzGetAbilityRealLevelField(master.getAbility(abilityId), ABILITY_RLF_AREA_OF_EFFECT, abilityLevel - 1),
  );
}

export function setAbilityEffectRange(unit: Unit, abilityId: number, abilityLevel: number, range: number) {
  BlzSetAbilityRealLevelField(
    unit.getAbility(abilityId),
    ABILITY_RLF_AREA_OF_EFFECT,
    abilityLevel - 1,
    range,
  );
}
