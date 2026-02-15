export interface ChecklistItemData {
  id: string;
  name: string;
  isComplete: boolean;
}

export interface CardData {
  id: string;
  name: string;
  isComplete: boolean;
  checklistItems: string[];
}

export interface ColumnData {
  id: string;
  name: string;
  cards: string[];
}

export interface BoardData {
  id: string;
  name: string;
  columns: string[];
}

type ChecklistItems = {
  byId: Record<string, ChecklistItemData>;
  allIds: string[];
};

type NormalizedEntity<T> = {
  allIds: string[];
  byId: Record<string, T>;
};

type Cards = NormalizedEntity<CardData>;
type Columns = NormalizedEntity<ColumnData>;
type Boards = NormalizedEntity<BoardData>;

export interface KanbanEntity {
  id: string;
  boards: Boards;
  columns: Columns;
  cards: Cards;
  checklistItems: ChecklistItems;
}

export const kanban: KanbanEntity = {
  id: "id",
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
      },
    },
    allIds: ["1"],
  },
};
