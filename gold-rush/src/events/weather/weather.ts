import { setIntervalIndefinite, setTimeout } from 'lib/trigger';
import { pickRandom } from 'lib/utils';
import { Rectangle, WeatherEffect } from 'w3ts';

const weathers = [
  { effectId: 'RAhr', name: 'WESTRING_WEATHER_ASHENVALEHEAVYRAIN' },
  { effectId: 'RAlr', name: 'WESTRING_WEATHER_ASHENVALELIGHTRAIN' },
  // { effectId: "MEds", name: "WESTRING_WEATHER_DALARANSHIELD" },
  // { effectId: "FDbh", name: "WESTRING_WEATHER_DUNGEONHEAVYBLUEFOG" },
  // { effectId: "FDbl", name: "WESTRING_WEATHER_DUNGEONBLUEFOG" },
  // { effectId: "FDgh", name: "WESTRING_WEATHER_DUNGEONHEAVYGREENFOG" },
  // { effectId: "FDgl", name: "WESTRING_WEATHER_DUNGEONGREENFOG" },
  // { effectId: "FDrh", name: "WESTRING_WEATHER_DUNGEONHEAVYREDFOG" },
  // { effectId: "FDrl", name: "WESTRING_WEATHER_DUNGEONREDFOG" },
  { effectId: 'FDwh', name: 'WESTRING_WEATHER_DUNGEONHEAVYWHITEFOG' },
  { effectId: 'FDwl', name: 'WESTRING_WEATHER_DUNGEONWHITEFOG' },
  { effectId: 'RLhr', name: 'WESTRING_WEATHER_LORDAERONHEAVYRAIN' },
  { effectId: 'RLlr', name: 'WESTRING_WEATHER_LORDAERONLIGHTRAIN' },
  // { effectId: "SNbs", name: "WESTRING_WEATHER_NORTHRENDBLIZZARD" },
  // { effectId: "SNhs", name: "WESTRING_WEATHER_NORTHRENDHEAVYSNOW" },
  // { effectId: "SNls", name: "WESTRING_WEATHER_NORTHRENDLIGHTSNOW" },
  { effectId: 'LRaa', name: 'WESTRING_WEATHER_RAYSOFLIGHT' },
  { effectId: 'LRma', name: 'WESTRING_WEATHER_RAYSOFMOONLIGHT' },
  { effectId: 'WNcw', name: 'WESTRING_WEATHER_WIND' },
  { effectId: 'WOcw', name: 'WESTRING_WEATHER_OUTLANDWIND' },
  { effectId: 'WOlw', name: 'WESTRING_WEATHER_OUTLANDWINDLIGHT' },
];

export class Weather {
  static register() {
    let weather: WeatherEffect;
    setIntervalIndefinite(60, () => {
      if (weather) {
        weather.enable(false);
      }
      const delay = GetRandomInt(0, 10);

      setTimeout(delay, () => {
        if (weather) {
          weather.destroy();
        }
        const chosenWeatherType = pickRandom(weathers);
        weather = WeatherEffect.create(Rectangle.getWorldBounds(), FourCC(chosenWeatherType.effectId));
        weather.enable(true);
      });
    });
  }
}
