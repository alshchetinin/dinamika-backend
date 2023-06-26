// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Strength {
  id: number;
  attributes: {
    title: string;
    description: string;
    image: { data: Media };
  };
}
export interface Strength_Plain {
  id: number;
  title: string;
  description: string;
  image: Media;
}

export interface Strength_NoRelations {
  id: number;
  title: string;
  description: string;
  image: number;
}

export interface Strength_AdminPanelLifeCycle {
  id: number;
  title: string;
  description: string;
  image: AdminPanelRelationPropertyModification<Media>;
}
