import { Unit } from 'w3ts';

export function registerDialogues() {
}

export function playSpeech(unit: Unit, sound: sound) {
  SetSpeechVolumeGroupsBJ();
  PlayDialogueFromSpeakerEx(bj_FORCE_ALL_PLAYERS, unit.handle, GetUnitTypeId(unit.handle), sound, bj_TIMETYPE_ADD, 0, false);
  WaitForSoundBJ(sound, 0);
  VolumeGroupReset();
}

export function playSoundIsolate(sound: sound, volume: number, startingOffset: number) {
  StopSound(sound, false, false);
  SetMusicVolume(0);
  PlaySoundFromOffsetBJ(sound, volume, startingOffset);
  WaitForSoundBJ(sound, 0);
  SetMusicVolume(100);
}
