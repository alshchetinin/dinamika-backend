// Interface automatically generated by schemas-to-ts

import { Hero } from '../../../../components/block/interfaces/Hero';
import { BlokSOsnovatelemKompanii } from '../../../../components/block/interfaces/BlokSOsnovatelemKompanii';
import { MyKomanda } from '../../../../components/block/interfaces/MyKomanda';
import { Hero_Plain } from '../../../../components/block/interfaces/Hero';
import { BlokSOsnovatelemKompanii_Plain } from '../../../../components/block/interfaces/BlokSOsnovatelemKompanii';
import { MyKomanda_Plain } from '../../../../components/block/interfaces/MyKomanda';
import { Hero_NoRelations } from '../../../../components/block/interfaces/Hero';
import { BlokSOsnovatelemKompanii_NoRelations } from '../../../../components/block/interfaces/BlokSOsnovatelemKompanii';
import { MyKomanda_NoRelations } from '../../../../components/block/interfaces/MyKomanda';

export interface StraniczaOKompanii {
  id: number;
  attributes: {
    hero: Hero;
    CEO: BlokSOsnovatelemKompanii;
    team?: MyKomanda;
  };
}
export interface StraniczaOKompanii_Plain {
  id: number;
  hero: Hero_Plain;
  CEO: BlokSOsnovatelemKompanii_Plain;
  team?: MyKomanda_Plain;
}

export interface StraniczaOKompanii_NoRelations {
  id: number;
  hero: Hero_NoRelations;
  CEO: BlokSOsnovatelemKompanii_NoRelations;
  team?: MyKomanda_NoRelations;
}

export interface StraniczaOKompanii_AdminPanelLifeCycle {
  id: number;
  hero: Hero_Plain;
  CEO: BlokSOsnovatelemKompanii_Plain;
  team?: MyKomanda_Plain;
}
