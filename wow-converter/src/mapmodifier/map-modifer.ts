import { DoodadList, Terrain } from '../wc3maptranslator/data';

export interface Map {
  terrain: Terrain;
  doodads: DoodadList;
}
