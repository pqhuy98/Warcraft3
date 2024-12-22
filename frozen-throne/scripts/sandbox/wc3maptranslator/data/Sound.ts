interface Sound {
  name: string
  variableName: string
  path: string
  eax: string
  flags: SoundFlags
  fadeRate: FadeRate
  volume: number
  pitch: number
  channel: number
  distance: Distance
}

interface FadeRate {
  in: number
  out: number
}

interface SoundFlags {
  looping: boolean // 0x00000001=looping
  '3dSound': boolean // 0x00000002=3D sound
  stopOutOfRange: boolean // 0x00000004=stop when out of range
  music: boolean // 0x00000008=music
}

interface Distance {
  min: number
  max: number
  cutoff: number
}

export type { Sound, FadeRate, SoundFlags, Distance }
