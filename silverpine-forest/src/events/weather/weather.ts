import { k0, k1 } from 'lib/debug/key_counter';
import { temp } from 'lib/location';
import { pickRandom } from 'lib/utils';
import { Rectangle, Timer, WeatherEffect } from 'w3ts';

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

export const weatherBlizzard = { effectId: 'SNbs', name: 'WESTRING_WEATHER_NORTHRENDBLIZZARD' };

export class Weather {
  static currentWeather: WeatherEffect;

  static delayTimer = Timer.create();

  static activeTimer = Timer.create();

  static changeWeather(chosenWeatherType: typeof weathers[number] = pickRandom(weathers), duration: number = 60, noWeatherDelay: number = 10) {
    k0('cw0');
    k0('cw1');
    Weather.delayTimer.pause();
    Weather.activeTimer.pause();

    if (Weather.currentWeather) {
      Weather.currentWeather.enable(false);
    }

    Weather.delayTimer.start(noWeatherDelay, false, () => {
      if (Weather.currentWeather) {
        Weather.currentWeather.destroy();
      }
      Weather.currentWeather = WeatherEffect.create(temp(Rectangle.getWorldBounds()), FourCC(chosenWeatherType.effectId));
      Weather.currentWeather.enable(true);
      k1('cw0');
    });

    Weather.activeTimer.start(duration + noWeatherDelay, false, () => {
      Weather.changeWeather();
      k1('cw1');
    });
  }
}
