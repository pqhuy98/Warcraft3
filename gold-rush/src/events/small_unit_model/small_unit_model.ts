import BladeDance from 'abilities/blade_dance/blade_dance';
import { onChatCommand } from 'events/chat_commands/chat_commands.model';
import { temp } from 'lib/location';
import { log } from 'lib/log';
import {
  buildTrigger, setIntervalIndefinite,
} from 'lib/trigger';
import {
  getAttackRange, getUnitScale, isBuilding, isDummy, setAttackRange,
  setUnitScale,
} from 'lib/unit';
import { Group, Unit } from 'w3ts';

import {
  constants, originalAbilityDataMap, originalScaleMap, toAbilityKey,
} from './small_unit_model.constant';

const shouldScaleRangerAttackRange = true;
const shouldScaleStandardAbility = false;
const minScale = 0.3;
const maxScale = 1;

export class SmallUnitModel {
  static filterCondition = (unit: Unit) => !isBuilding(unit)
    && !isDummy(unit);

  static register() {
    onChatCommand('-scale', true, () => log('scalingFactor', constants.scalingFactor), 'UI & scaling', "Print current global unit's scaling factor.");
    onChatCommand('-scale $1', false, (msg) => {
      const factor = Math.max(minScale, Math.min(maxScale, parseFloat(msg.split(' ')[1])));
      constants.scalingFactor = factor;
      constants.selectionScalingFactor = factor;
      constants.movingFactor = factor;
      constants.cameraDistanceFactor = factor;

      temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds()))).for(() => {
        if (this.filterCondition(Unit.fromEnum())) {
          this.updateUnit(Unit.fromEnum());
        }
      });
    }, 'UI & scaling', `Set global unit's scaling factor, e.g. "-scale 0.5". Input is from ${minScale} to ${maxScale}. Default setting is 0.6.`);

    temp(Group.fromHandle(GetUnitsInRectAll(GetWorldBounds()))).for(() => {
      if (this.filterCondition(Unit.fromEnum())) {
        this.updateUnit(Unit.fromEnum());
      }
    });

    buildTrigger((t) => {
      TriggerRegisterEnterRectSimple(t.handle, GetEntireMapRect());
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ISSUED_ORDER);
      t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_SELECTED);
      t.addCondition(() => this.filterCondition(Unit.fromEvent()));
      t.addAction(() => {
        this.updateUnit(Unit.fromEvent());
      });
    });

    let isCameraFixed = true;
    const initialCameraDistance = GetCameraField(CAMERA_FIELD_TARGET_DISTANCE);
    setIntervalIndefinite(0.1, () => {
      if (isCameraFixed) {
        SetCameraField(CAMERA_FIELD_TARGET_DISTANCE, initialCameraDistance * constants.cameraDistanceFactor, 0.1);
      }
    });
    onChatCommand('-camlock', true, () => { isCameraFixed = !isCameraFixed; }, 'UI & scaling', 'Toggle camera height lock.');
  }

  private static updateUnit(unit: Unit) {
    this.updateUnitScale(unit);
    if (shouldScaleStandardAbility) {
      this.updateUnitStandardAbilityScale(unit);
    }
  }

  private static updateUnitScale(unit: Unit) {
    if (!originalScaleMap.has(unit.typeId)) {
      originalScaleMap.set(unit.typeId, {
        scale: getUnitScale(unit),
        selectionScale: unit.getField(UNIT_RF_SELECTION_SCALE) as number,
        flyHeight: unit.getField(UNIT_RF_FLY_HEIGHT) as number,
        speed: unit.getField(UNIT_RF_SPEED) as number,
        speedWalk: unit.getField(UNIT_RF_ANIMATION_WALK_SPEED) as number,
        speedRun: unit.getField(UNIT_RF_ANIMATION_RUN_SPEED) as number,
        attackRange: [getAttackRange(unit, 0), getAttackRange(unit, 1)],
      });
    }

    const original = originalScaleMap.get(unit.typeId);

    // movement
    unit.setField(UNIT_RF_SPEED, original.speed * constants.movingFactor);
    // unit.setField(UNIT_RF_ANIMATION_WALK_SPEED, original.speedWalk / constants.movingFactor);
    // unit.setField(UNIT_RF_ANIMATION_RUN_SPEED, original.speedRun / constants.movingFactor);

    if (unit.isUnitType(UNIT_TYPE_MECHANICAL) && unit.isUnitType(UNIT_TYPE_GROUND)) {
      return;
    }

    // model size
    const scale = original.scale * constants.scalingFactor;
    setUnitScale(unit, scale);

    for (let i = 0; i < 2; i++) {
      if (BladeDance.isUnitCasting(unit)) continue;
      const originalAttackRange = original.attackRange[i];
      if (originalAttackRange < 200 || shouldScaleRangerAttackRange) {
        setAttackRange(unit, i, originalAttackRange * constants.scalingFactor);
      }
    }

    // selection size
    unit.setField(UNIT_RF_SELECTION_SCALE, original.selectionScale * constants.selectionScalingFactor);

    // height
    unit.setField(UNIT_RF_FLY_HEIGHT, original.flyHeight * constants.movingFactor);
  }

  private static updateUnitStandardAbilityScale(unit: Unit) {
    for (let i = 0; ; i++) {
      const ability = unit.getAbilityByIndex(i);
      if (ability) {
        scaleAbility(ability);
      } else {
        break;
      }
    }
  }
}

export function getOriginalScale(unit: Unit): {
  scale: number,
  selectionScale: number,
} | undefined {
  return originalScaleMap.get(unit.typeId);
}

const abilityFields = <[abilityreallevelfield, string][]>[
  [ABILITY_RLF_CAST_RANGE, 'ABILITY_RLF_CAST_RANGE'],
  [ABILITY_RLF_AREA_OF_EFFECT, 'ABILITY_RLF_AREA_OF_EFFECT'],
  [ABILITY_RLF_WAVE_DISTANCE, 'ABILITY_RLF_WAVE_DISTANCE'],
];

function scaleAbility(ability: ability, withLog = false) {
  const levels = BlzGetAbilityIntegerField(ability, ABILITY_IF_LEVELS);
  const abilityId = BlzGetAbilityId(ability);
  const abilityName = `[${string.pack('>I4', abilityId)} ${GetAbilityName(abilityId)} ${levels}]`;

  for (let i = 0; i < levels; i++) {
    withLog && log(`start ${abilityName} ${i}`);
    const key = toAbilityKey(abilityId, i);

    if (!originalAbilityDataMap.has(key)) {
      originalAbilityDataMap.set(key, new Map<abilityreallevelfield, number>());
      for (const [field, fieldName] of <[abilityreallevelfield, string][]>[
        [ABILITY_RLF_CAST_RANGE, 'ABILITY_RLF_CAST_RANGE'],
        [ABILITY_RLF_AREA_OF_EFFECT, 'ABILITY_RLF_AREA_OF_EFFECT'],
        [ABILITY_RLF_WAVE_DISTANCE, 'ABILITY_RLF_WAVE_DISTANCE'],
      ]) {
        const value = BlzGetAbilityRealLevelField(ability, field, i);
        originalAbilityDataMap.get(key).set(field, value);
        withLog && log(`Store ${abilityName} - ${fieldName}: ${value}`);
      }
    }

    const originalData = originalAbilityDataMap.get(key);
    withLog && log(`got original ${abilityName} ABILITY_RLF_CAST_RANGE ${originalData.get(ABILITY_RLF_CAST_RANGE)}`);

    for (const [field, fieldName] of abilityFields) {
      // withLog && log(`interate ${abilityName} ${fieldName}`);

      const oldValue = originalData.get(field);
      // withLog && log(`interate ${abilityName} ${fieldName} ${i} oldValue ${oldValue}`);

      if (oldValue <= 0) continue;

      const newValue = oldValue * constants.scalingFactor;
      // withLog && log(`interate ${abilityName} ${fieldName} ${i} newValue ${newValue}`);

      BlzSetAbilityRealLevelField(ability, field, i, newValue);
      withLog && log(`scaled ${abilityName} level ${i} ${fieldName} from ${oldValue} to ${newValue}`);
    }

    // withLog && log(`done ${abilityName} ${i}`);
  }
  withLog && log(`completed ${abilityName}`);
}
