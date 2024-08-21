import { sleep, Unit } from 'w3ts';

import { MODEL_Chat_Bubble } from './constants';
import { setTimeout } from './trigger';

export async function playSpeech(unit: Unit, sound: sound, target?: Unit) {
  if (target) {
    SetUnitFacingToFaceUnitTimed(unit.handle, target.handle, 0.5);
  }
  const speakEffect = AddSpecialEffectTarget(MODEL_Chat_Bubble, unit.handle, 'overhead');
  PlayDialogueFromSpeakerEx(bj_FORCE_ALL_PLAYERS, unit.handle, GetUnitTypeId(unit.handle), sound, bj_TIMETYPE_ADD, 0, false);
  const duration = GetSoundDuration(sound);
  await sleep(duration / 1000);
  DestroyEffect(speakEffect);
}

export function playSoundIsolate(sound: sound, volume: number, startingOffset: number) {
  setTimeout(0, () => {
    StopSound(sound, false, false);
    SetMusicVolume(0);
    PlaySoundFromOffsetBJ(sound, volume, startingOffset);
    WaitForSoundBJ(sound, 0);
    SetMusicVolume(100);
  });
}
