import type {
  CardData,
  ColumnData,
  KanbanState,
} from "@/types/kanbanTypesNormalised";

export type KanbanAction =
  | {
      type: "ADD_CARD";
      payload: { boardId: string; columnId: string; cardName: string };
    }
  | {
      type: "ADD_COLUMN";
      payload: { boardId: string; columnName: string };
    };

export default function kanbanReducer(
  kanban: KanbanState,
  { type, payload }: KanbanAction,
): KanbanState {
  switch (type) {
    case "ADD_CARD": {
      const { columns, cards } = kanban;
      const { columnId, cardName } = payload;
      const id = crypto.randomUUID();

      const newCard: CardData = {
        id,
        name: cardName,
        isComplete: false,
        checklistItems: [],
      };
      return {
        ...kanban,
        cards: {
          byId: { ...cards.byId, [id]: newCard },
          allIds: [...cards.allIds, id],
        },
        columns: {
          ...columns,
          byId: {
            ...columns.byId,
            [columnId]: {
              ...columns.byId[columnId],
              cards: [...columns.byId[columnId].cards, id],
            },
          },
        },
      };
    }
    case "ADD_COLUMN": {
      const { boardId, columnName } = payload;
      const { boards, columns } = kanban;
      const id = crypto.randomUUID();
      const newColumn: ColumnData = { id, name: columnName, cards: [] };
      return {
        ...kanban,
        columns: {
          byId: { ...columns.byId, [id]: newColumn },
          allIds: [...columns.allIds, id],
        },
        boards: {
          ...boards,
          byId: {
            ...boards.byId,
            [boardId]: {
              ...boards.byId[boardId],
              columns: [...boards.byId[boardId].columns, id],
            },
          },
        },
      };
    }
  }
}
