import type { Card, List } from "@/types/kanbanTypes";

export type ListsAction =
  | { type: "ADD_CARD"; payload: { card: Card; listId: number } }
  | { type: "DELETE_CARD"; payload: { card: Card; listId: number } };

export default function listsReducer(lists: List[], action: ListsAction) {
  switch (action.type) {
    case "ADD_CARD": {
      return lists.map((l) =>
        l.id === action.payload.listId
          ? {
              ...l,
              cards: [
                ...l.cards,
                { ...action.payload.card, id: l.cards.length + 1 },
              ],
            }
          : l,
      );
    }
    case "DELETE_CARD": {
      return lists.map((l) => {
        return l.id === action.payload.listId
          ? {
              ...l,
              cards: l.cards.filter((c) => c.id !== action.payload.card.id),
            }
          : l;
      });
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
}

export type ListsReducer = typeof listsReducer;
