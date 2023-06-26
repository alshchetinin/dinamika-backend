// Interface automatically generated by schemas-to-ts

import { Button } from '../../shared/interfaces/Button';
import { Media } from '../../../common/schemas-to-ts/Media';
import { Button_Plain } from '../../shared/interfaces/Button';
import { Button_NoRelations } from '../../shared/interfaces/Button';

export interface Hero {
  title: string;
  button?: Button;
  image?: { data: Media };
  preview?: any;
}
export interface Hero_Plain {
  title: string;
  button?: Button_Plain;
  image?: Media;
  preview?: any;
}

export interface Hero_NoRelations {
  title: string;
  button?: Button_NoRelations;
  image?: number;
  preview?: any;
}
