import { Unit } from 'w3ts';

export function registerDialogues() {
  SetDialogueTextKey(gg_snd_lichking_death1, 'Impossible!');
  SetDialogueSpeakerNameKey(gg_snd_lichking_death1, 'Lich King');

  SetDialogueTextKey(gg_snd_lichking_death2, 'What is this?');
  SetDialogueSpeakerNameKey(gg_snd_lichking_death2, 'Lich King');

  SetDialogueTextKey(gg_snd_lichking_death3, 'This is not over...');
  SetDialogueSpeakerNameKey(gg_snd_lichking_death3, 'Lich King');

  SetDialogueTextKey(gg_snd_lichking_frostmourne_hungers, 'Frostmourne hungers...');
  SetDialogueSpeakerNameKey(gg_snd_lichking_frostmourne_hungers, 'Lich King');
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
