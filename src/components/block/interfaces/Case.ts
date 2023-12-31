// Interface automatically generated by schemas-to-ts

import { Case } from '../../../api/case/content-types/case/case';
import { Case_Plain } from '../../../api/case/content-types/case/case';

export interface Case {
  subtitle: string;
  title: string;
  case: { data: Case[] };
}
export interface Case_Plain {
  subtitle: string;
  title: string;
  case: Case_Plain[];
}

export interface Case_NoRelations {
  subtitle: string;
  title: string;
  case: number[];
}

