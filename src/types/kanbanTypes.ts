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

export interface KanbanData {
  id: string;
  boards: BoardData[];
}

export const futureKanbanStateStructure = {
  boards: {
    byId: { 1: { id: "1", name: "life", columns: ["1"] } },
    allIds: ["1"],
  },
  columns: {
    byId: { 1: { id: "1", name: "Todo", cards: ["1"] } },
    allIds: ["1"],
  },
  cards: {
    byId: {
      1: {
        id: "1",
        name: "Walk dog",
        isComplete: false,
        checklistItems: ["1"],
      },
    },
    allIds: ["1"],
  },
  checklistItems: {
    byId: {
      1: {
        id: "1",
        name: "Get leash",
        isComplete: false,
        checklistItems: ["1"],
      },
    },
    allIds: ["1"],
  },
};
