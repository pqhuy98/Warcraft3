import { setAttention } from 'lib/systems/unit_interaction';
import { Effect, sleep, Unit } from 'w3ts';

import { MODEL_Chat_Bubble } from './constants';

export async function playSpeech(unit: Unit, sound: sound, target?: Unit): Promise<void> {
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

  SetSpeechVolumeGroupsBJ();
  const speakEffect = Effect.createAttachment(MODEL_Chat_Bubble, unit, 'overhead');
  PlayDialogueFromSpeakerEx(bj_FORCE_ALL_PLAYERS, unit.handle, GetUnitTypeId(unit.handle), sound, bj_TIMETYPE_ADD, 0, false);
  const duration = GetSoundDuration(sound);
  await sleep(duration / 1000);
  speakEffect.destroy();
  VolumeGroupReset();
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
