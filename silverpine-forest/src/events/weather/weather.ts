import { k0, k1 } from 'lib/debug/key_counter';
import { temp } from 'lib/location';
import { log } from 'lib/log';
import { pickRandom } from 'lib/utils';
import { Rectangle, Timer, WeatherEffect } from 'w3ts';

export interface WeatherType {
  effectId: string
  name: string;
}

const weathers: WeatherType[] = [
  { effectId: 'RAhr', name: 'WESTRING_WEATHER_ASHENVALEHEAVYRAIN' },
  { effectId: 'RAlr', name: 'WESTRING_WEATHER_ASHENVALELIGHTRAIN' },
  // { effectId: 'MEds', name: 'WESTRING_WEATHER_DALARANSHIELD' },
  // { effectId: 'FDbh', name: 'WESTRING_WEATHER_DUNGEONHEAVYBLUEFOG' },
  // { effectId: 'FDbl', name: 'WESTRING_WEATHER_DUNGEONBLUEFOG' },
  // { effectId: 'FDgh', name: 'WESTRING_WEATHER_DUNGEONHEAVYGREENFOG' },
  // { effectId: 'FDgl', name: 'WESTRING_WEATHER_DUNGEONGREENFOG' },
  // { effectId: 'FDrh', name: 'WESTRING_WEATHER_DUNGEONHEAVYREDFOG' },
  // { effectId: 'FDrl', name: 'WESTRING_WEATHER_DUNGEONREDFOG' },
  // { effectId: 'FDwh', name: 'WESTRING_WEATHER_DUNGEONHEAVYWHITEFOG' },
  { effectId: 'FDwl', name: 'WESTRING_WEATHER_DUNGEONWHITEFOG' },
  { effectId: 'RLhr', name: 'WESTRING_WEATHER_LORDAERONHEAVYRAIN' },
  { effectId: 'RLlr', name: 'WESTRING_WEATHER_LORDAERONLIGHTRAIN' },
  // { effectId: 'SNbs', name: 'WESTRING_WEATHER_NORTHRENDBLIZZARD' },
  // { effectId: 'SNhs', name: 'WESTRING_WEATHER_NORTHRENDHEAVYSNOW' },
  { effectId: 'SNls', name: 'WESTRING_WEATHER_NORTHRENDLIGHTSNOW' },
  { effectId: 'LRaa', name: 'WESTRING_WEATHER_RAYSOFLIGHT' },
  { effectId: 'LRma', name: 'WESTRING_WEATHER_RAYSOFMOONLIGHT' },
  // { effectId: 'WNcw', name: 'WESTRING_WEATHER_WIND' },
  // { effectId: 'WOcw', name: 'WESTRING_WEATHER_OUTLANDWIND' },
  // { effectId: 'WOlw', name: 'WESTRING_WEATHER_OUTLANDWINDLIGHT' },
] as const;

export const weatherBlizzard: WeatherType = { effectId: 'SNbs', name: 'WESTRING_WEATHER_NORTHRENDBLIZZARD' };

const debug = false;

export class Weather {
  static currentWeather: WeatherEffect = null;

  static delayTimer = Timer.create();

  static activeTimer = Timer.create();

  static isShow = true;

  static chosenWeatherType: typeof weathers[number] = null;

  static changeWeather(chosenWeatherType: WeatherType = pickRandom(weathers), duration: number = GetRandomReal(10, 60), noWeatherDelay: number = GetRandomReal(45, 120)): void {
    k0('cw0');
    k0('cw1');
    this.delayTimer.pause();
    this.activeTimer.pause();
    this.chosenWeatherType = null;

    if (this.currentWeather) {
      debug && log('stop current weather');
      this.currentWeather.enable(false);
      this.currentWeather = null;
    }

    this.delayTimer.start(noWeatherDelay, false, () => {
      this.chosenWeatherType = chosenWeatherType;
      if (this.currentWeather) {
        this.currentWeather.destroy();
      }
      debug && log(`start weather ${chosenWeatherType.name}, enable: ${this.isShow ? 'true' : 'false'}`);
      if (this.isShow) {
        this.currentWeather = createGlobalWeather(this.chosenWeatherType);
      }
      k1('cw0');
    });

    this.activeTimer.start(duration + noWeatherDelay, false, () => {
      this.changeWeather();
      k1('cw1');
    });
  }

  static show(state: boolean): void {
    this.isShow = state;
    if (this.currentWeather && !this.isShow) {
      this.currentWeather.destroy();
      this.currentWeather = null;
    } else if (!this.currentWeather && this.isShow && this.chosenWeatherType) {
      this.currentWeather = createGlobalWeather(this.chosenWeatherType);
    }
  }
}

function createGlobalWeather(chosenWeatherType: WeatherType): WeatherEffect {
  const weather = WeatherEffect.create(temp(Rectangle.getWorldBounds()), FourCC(chosenWeatherType.effectId));
  weather.enable(true);
  return weather;
}
