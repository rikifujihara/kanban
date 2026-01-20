import type { Card, List } from "@/types/kanbanTypes";

export type ListsAction =
  | { type: "ADD_CARD"; payload: { card: Omit<Card, "id">; listId: number } }
  | {
      type: "DELETE_CARD";
      payload: { cardId: number; listId: number };
    }
  | {
      type: "MARK_CARD_COMPLETENESS";
      payload: { cardId: number; listId: number; isComplete: boolean };
    }
  | {
      type: "ADD_LIST";
      payload: { title: string };
    }
  | {
      type: "UPDATE_CARD_DESCRIPTION";
      payload: { cardId: number; listId: number; description: string };
    };

export default function listsReducer(
  lists: List[],
  { type, payload }: ListsAction,
): List[] {
  switch (type) {
    case "ADD_CARD": {
      return lists.map((l) =>
        l.id === payload.listId
          ? {
              ...l,
              cards: [...l.cards, { ...payload.card, id: l.cards.length + 1 }],
            }
          : l,
      );
    }
    case "DELETE_CARD": {
      return lists.map((l) => {
        return l.id === payload.listId
          ? {
              ...l,
              cards: l.cards.filter((c) => c.id !== payload.cardId),
            }
          : l;
      });
    }
    case "MARK_CARD_COMPLETENESS": {
      return lists.map((l) => {
        return l.id === payload.listId
          ? {
              ...l,
              cards: l.cards.map((c) =>
                c.id === payload.cardId
                  ? { ...c, isComplete: payload.isComplete }
                  : c,
              ),
            }
          : l;
      });
    }
    case "UPDATE_CARD_DESCRIPTION": {
      return lists.map((l) => {
        return l.id === payload.listId
          ? {
              ...l,
              cards: l.cards.map((c) => {
                return c.id === payload.cardId
                  ? { ...c, description: payload.description }
                  : c;
              }),
            }
          : l;
      });
    }
    case "ADD_LIST": {
      return [
        ...lists,
        { title: payload.title, id: lists.length + 1, cards: [] },
      ];
    }
    default: {
      throw Error("Unknown action type: " + type);
    }
  }
}

export type ListsReducer = typeof listsReducer;
