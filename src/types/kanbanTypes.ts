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
