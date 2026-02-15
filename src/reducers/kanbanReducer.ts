import type { KanbanData } from "@/types/kanbanTypes";

export type KanbanAction =
  | {
      type: "ADD_CARD";
      payload: { boardId: string; columnId: string; cardTitle: string };
    }
  | {
      type: "ADD_COLUMN";
      payload: { boardId: string; columnTitle: string };
    };

export default function kanbanReducer(
  kanban: KanbanData,
  { type, payload }: KanbanAction,
): KanbanData {
  switch (type) {
    case "ADD_CARD": {
      return {
        ...kanban,
        boards: kanban.boards.map((b) => {
          return b.id === payload.boardId
            ? {
                ...b,
                columns: b.columns.map((col) =>
                  col.id === payload.columnId
                    ? {
                        ...col,
                        cards: [
                          ...col.cards,
                          {
                            id: String(col.cards.length + 1),
                            title: payload.cardTitle,
                            isComplete: false,
                          },
                        ],
                      }
                    : col,
                ),
              }
            : b;
        }),
      };
    }
    case "ADD_COLUMN": {
      return {
        ...kanban,
        boards: kanban.boards.map((b) =>
          b.id === payload.boardId
            ? {
                ...b,
                columns: [
                  ...b.columns,
                  {
                    id: String(b.columns.length + 1),
                    title: payload.columnTitle,
                    cards: [],
                  },
                ],
              }
            : b,
        ),
      };
    }
  }
}
