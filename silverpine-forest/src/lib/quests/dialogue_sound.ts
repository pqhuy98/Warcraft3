export function createDialogSound(filePath: string, speakerName: string, text: string): sound {
  const sound = CreateSound(filePath, false, false, false, 0, 0, 'DefaultEAXON');
  SetSoundChannel(sound, 0);
  SetDialogueSpeakerNameKey(sound, speakerName);
  SetDialogueTextKey(sound, text);
  return sound;
}
