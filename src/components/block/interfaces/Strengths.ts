// Interface automatically generated by schemas-to-ts

import { Strength } from '../../../api/strength/content-types/strength/strength';
import { Strength_Plain } from '../../../api/strength/content-types/strength/strength';

export interface Strengths {
  title: string;
  subtile: string;
  strengths: { data: Strength[] };
}
export interface Strengths_Plain {
  title: string;
  subtile: string;
  strengths: Strength_Plain[];
}

export interface Strengths_NoRelations {
  title: string;
  subtile: string;
  strengths: number[];
}
