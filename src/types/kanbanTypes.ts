import type { MODAL_ACTION_TYPES } from "@/constants/kanbanConstants";

export interface Card {
  id: number;
  title: string;
  isComplete: boolean;
  description: string;
}

export interface List {
  id: number;
  title: string;
  cards: Card[];
}

export interface SelectedCardInfo {
  selectedCardId: number | null;
  selectedCardParentListId: number | null;
}

type ModalActions = typeof MODAL_ACTION_TYPES;

type ModalKeys = keyof ModalActions;

export type ActiveModalAction = ModalActions[ModalKeys] | null;
