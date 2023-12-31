// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Requisite {
  id: number;
  attributes: {
    pdf: { data: Media };
  };
}
export interface Requisite_Plain {
  id: number;
  pdf: Media;
}

export interface Requisite_NoRelations {
  id: number;
  pdf: number;
}

export interface Requisite_AdminPanelLifeCycle {
  id: number;
  pdf: AdminPanelRelationPropertyModification<Media>;
}
