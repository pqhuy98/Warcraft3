import { k0, k1 } from 'lib/debug/key_counter';
import { temp } from 'lib/location';
import { log } from 'lib/log';
import { setTimeout } from 'lib/trigger';
import { pickRandom } from 'lib/utils';
import { Rectangle, Timer, WeatherEffect } from 'w3ts';

export interface WeatherType {
  effectId: string
  name: string;
}

const weathers: WeatherType[] = [
  // { effectId: 'RAhr', name: 'WESTRING_WEATHER_ASHENVALEHEAVYRAIN' },
  // { effectId: 'RAlr', name: 'WESTRING_WEATHER_ASHENVALELIGHTRAIN' },
  // { effectId: 'MEds', name: 'WESTRING_WEATHER_DALARANSHIELD' },
  { effectId: 'FDbh', name: 'WESTRING_WEATHER_DUNGEONHEAVYBLUEFOG' },
  { effectId: 'FDbl', name: 'WESTRING_WEATHER_DUNGEONBLUEFOG' },
  // { effectId: 'FDgh', name: 'WESTRING_WEATHER_DUNGEONHEAVYGREENFOG' },
  // { effectId: 'FDgl', name: 'WESTRING_WEATHER_DUNGEONGREENFOG' },
  // { effectId: 'FDrh', name: 'WESTRING_WEATHER_DUNGEONHEAVYREDFOG' },
  // { effectId: 'FDrl', name: 'WESTRING_WEATHER_DUNGEONREDFOG' },
  // { effectId: 'FDwh', name: 'WESTRING_WEATHER_DUNGEONHEAVYWHITEFOG' },
  // { effectId: 'FDwl', name: 'WESTRING_WEATHER_DUNGEONWHITEFOG' },
  // { effectId: 'RLhr', name: 'WESTRING_WEATHER_LORDAERONHEAVYRAIN' },
  // { effectId: 'RLlr', name: 'WESTRING_WEATHER_LORDAERONLIGHTRAIN' },
  { effectId: 'SNbs', name: 'WESTRING_WEATHER_NORTHRENDBLIZZARD' },
  { effectId: 'SNhs', name: 'WESTRING_WEATHER_NORTHRENDHEAVYSNOW' },
  { effectId: 'SNls', name: 'WESTRING_WEATHER_NORTHRENDLIGHTSNOW' },
  // { effectId: 'LRaa', name: 'WESTRING_WEATHER_RAYSOFLIGHT' },
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

  static changeWeather(chosenWeatherType: WeatherType = pickRandom(weathers), duration: number = GetRandomReal(30, 120), noWeatherDelay: number = GetRandomReal(60, 180)): void {
    k0('cw0');
    k0('cw1');
    this.delayTimer.pause();
    this.activeTimer.pause();

    this.chosenWeatherType = null;
    this.destroyWeather();

    this.delayTimer.start(noWeatherDelay, false, () => {
      this.chosenWeatherType = chosenWeatherType;
      debug && log(`start weather ${chosenWeatherType.name}, enable: ${this.isShow ? 'true' : 'false'}`);
      if (this.isShow) {
        this.createWeather(this.chosenWeatherType);
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
    if (!this.isShow) {
      this.destroyWeather();
    } else if (this.isShow && this.currentWeather == null && this.chosenWeatherType) {
      this.createWeather(this.chosenWeatherType);
    }
  }

  static createWeather(chosenWeatherType: WeatherType): void {
    this.destroyWeather();
    this.currentWeather = WeatherEffect.create(
      temp(Rectangle.getWorldBounds()),
      FourCC(chosenWeatherType.effectId),
    );
    this.currentWeather.enable(true);
  }

  static destroyWeather(): void {
    if (this.currentWeather) {
      this.currentWeather.enable(false);
      const weather = this.currentWeather;
      setTimeout(3, () => weather.destroy());
      this.currentWeather = null;
    }
  }
}
