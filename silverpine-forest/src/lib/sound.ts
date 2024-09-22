import { disableInteractSound, enableInteractSound, setAttention } from 'lib/systems/unit_interaction';
import { Effect, sleep, Unit } from 'w3ts';

import { MODEL_Chat_Bubble } from './constants';
import { Flag, setUnitFlag } from './systems/unit_user_data_flag';

/**
 * @param options.volumeGroupAdjustment
 */
export async function playSpeech(unit: Unit, sound: sound, target?: Unit, options?: {
  ignoreVolumeGroupAdjustment?: boolean
  disableInteraction?: boolean
}): Promise<void> {
  if (target) {
    setAttention(unit, target);
  }
  // white circle on ground
  UnitAddIndicator(
    unit.handle,
    bj_TRANSMISSION_IND_RED,
    bj_TRANSMISSION_IND_BLUE,
    bj_TRANSMISSION_IND_GREEN,
    bj_TRANSMISSION_IND_ALPHA,
  );

  const shouldDisableInteraction = !options || options?.disableInteraction;
  if (shouldDisableInteraction) {
    disableInteractSound(unit);
    setUnitFlag(unit, Flag.UNBREAKABLE_ATTENTION, true);
  }

  const shouldSetVolumeGroup = !options || !options?.ignoreVolumeGroupAdjustment;
  if (shouldSetVolumeGroup) {
    SetSpeechVolumeGroupsBJ();
  }
  const speakEffect = Effect.createAttachment(MODEL_Chat_Bubble, unit, 'overhead');
  PlayDialogueFromSpeakerEx(bj_FORCE_ALL_PLAYERS, unit.handle, GetUnitTypeId(unit.handle), sound, bj_TIMETYPE_ADD, 0, false);
  const duration = GetSoundDuration(sound);
  await sleep(duration / 1000);
  speakEffect.destroy();

  if (shouldSetVolumeGroup) {
    VolumeGroupReset();
  }
  if (shouldDisableInteraction) {
    setUnitFlag(unit, Flag.UNBREAKABLE_ATTENTION, false);
    enableInteractSound(unit);
  }
}

export async function playSoundIsolate(
  sound: sound,
  volume: number,
  startingOffset: number,
): Promise<void> {
  StopSound(sound, false, false);
  SetMusicVolume(0);
  PlaySoundFromOffsetBJ(sound, volume, startingOffset);
  const duration = GetSoundDuration(sound);
  await sleep(duration / 1000);
  SetMusicVolume(100);
}
