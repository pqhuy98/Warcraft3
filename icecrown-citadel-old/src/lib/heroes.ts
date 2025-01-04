import { ALL_HEROES, Hero } from 'lib/resources/war3-heroes';

const heroMap = new Map<number, Hero>();
ALL_HEROES.forEach((hero) => {
  heroMap.set(FourCC(hero.code), hero);
});

export function getHero(typeId: number) {
  return heroMap.get(typeId);
}
