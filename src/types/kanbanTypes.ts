export interface CardData {
  id: string;
  title: string;
  isComplete: boolean;
}

export interface ColumnData {
  id: string;
  title: string;
  cards: CardData[];
}

export interface BoardData {
  id: string;
  title: string;
  columns: ColumnData[];
}
