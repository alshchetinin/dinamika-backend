// Interface automatically generated by schemas-to-ts

import { Hero } from '../../../../components/block/interfaces/Hero';
import { Hero_Plain } from '../../../../components/block/interfaces/Hero';
import { Hero_NoRelations } from '../../../../components/block/interfaces/Hero';

export interface StraniczuKejsy {
  id: number;
  attributes: {
    hero: Hero;
  };
}
export interface StraniczuKejsy_Plain {
  id: number;
  hero: Hero_Plain;
}

export interface StraniczuKejsy_NoRelations {
  id: number;
  hero: Hero_NoRelations;
}

export interface StraniczuKejsy_AdminPanelLifeCycle {
  id: number;
  hero: Hero_Plain;
}