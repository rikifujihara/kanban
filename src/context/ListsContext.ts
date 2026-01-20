import type { ListsAction } from "@/reducers/listsReducer";
import type { List } from "@/types/kanbanTypes";
import { createContext } from "react";

export const ListsContext = createContext<List[]>([]);
export const ListsDispatchContext =
  createContext<React.Dispatch<ListsAction> | null>(null);
