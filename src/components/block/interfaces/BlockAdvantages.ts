// Interface automatically generated by schemas-to-ts

import { Advantage } from '../../../api/advantage/content-types/advantage/advantage';
import { Advantage_Plain } from '../../../api/advantage/content-types/advantage/advantage';

export interface BlockAdvantages {
  preimushhestva_napravleniyas: { data: Advantage[] };
}
export interface BlockAdvantages_Plain {
  preimushhestva_napravleniyas: Advantage_Plain[];
}

export interface BlockAdvantages_NoRelations {
  preimushhestva_napravleniyas: number[];
}

