export interface Card {
  id: number;
  title: string;
  isComplete: boolean;
}

export interface List {
  id: number;
  title: string;
  cards: Card[];
}
