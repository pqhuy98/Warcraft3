import { ChainLightningAttack } from './chain_lightning_attack';
import { ChainLightningLifesteal } from './chain_lightning_lifesteal';
import { ChainLightningMulticast } from './chain_lightning_multicast';

export class ChainLightning {
  static register(abilityId: number) {
    ChainLightningMulticast.register(abilityId);
    ChainLightningAttack.register(abilityId);
    ChainLightningLifesteal.register(abilityId);
  }
}
