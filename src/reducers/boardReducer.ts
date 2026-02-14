import type { BoardData } from "@/types/kanbanTypes";

export type BoardAction =
  | { type: "ADD_COLUMN"; payload: { title: string } }
  | { type: "ADD_CARD"; payload: { title: string; columnId: string } };

export default function boardReducer(
  board: BoardData,
  { type, payload }: BoardAction,
): BoardData {
  switch (type) {
    case "ADD_CARD": {
      return {
        ...board,
        columns: board.columns.map((col) =>
          col.id === payload.columnId
            ? {
                ...col,
                cards: [
                  ...col.cards,
                  {
                    id: String(col.cards.length + 1),
                    title: payload.title,
                    isComplete: false,
                  },
                ],
              }
            : col,
        ),
      };
    }
    case "ADD_COLUMN": {
      return {
        ...board,
        columns: [
          {
            id: String(board.columns.length + 1),
            title: payload.title,
            cards: [],
          },
          ...board.columns,
        ],
      };
    }
  }
}

export type BoardReducer = typeof boardReducer;
