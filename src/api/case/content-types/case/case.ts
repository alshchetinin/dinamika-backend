// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Case {
  id: number;
  attributes: {
    title: string;
    task: string;
    result: string;
    image: { data: Media };
    isMain: boolean;
  };
}
export interface Case_Plain {
  id: number;
  title: string;
  task: string;
  result: string;
  image: Media;
  isMain: boolean;
}

export interface Case_NoRelations {
  id: number;
  title: string;
  task: string;
  result: string;
  image: number;
  isMain: boolean;
}

export interface Case_AdminPanelLifeCycle {
  id: number;
  title: string;
  task: string;
  result: string;
  image: AdminPanelRelationPropertyModification<Media>;
  isMain: boolean;
}
