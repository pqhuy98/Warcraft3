import { ALL_HEROES, Hero } from 'resources/war3-heroes';

const heroMap = new Map<number, Hero>();

export function importHeroes() {
  ALL_HEROES.forEach((hero) => {
    heroMap.set(FourCC(hero.code), hero);
  });
}

export function getHero(typeId: number) {
  return heroMap.get(typeId);
}
