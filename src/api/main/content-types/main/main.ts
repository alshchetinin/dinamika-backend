// Interface automatically generated by schemas-to-ts

import { Seo } from '../../../../components/shared/interfaces/Seo';
import { Seo_Plain } from '../../../../components/shared/interfaces/Seo';
import { Seo_NoRelations } from '../../../../components/shared/interfaces/Seo';

export interface Main {
  id: number;
  attributes: {
    content: any;
    seo?: Seo;
  };
}
export interface Main_Plain {
  id: number;
  content: any;
  seo?: Seo_Plain;
}

export interface Main_NoRelations {
  id: number;
  content: any;
  seo?: Seo_NoRelations;
}

export interface Main_AdminPanelLifeCycle {
  id: number;
  content: any;
  seo?: Seo_Plain;
}