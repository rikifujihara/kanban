import { type KanbanAction } from "@/reducers/kanbanReducerNormalised";
import type { KanbanState } from "@/types/kanbanTypes";
import { createContext } from "react";

export const KanbanContext = createContext<KanbanState | null>(null);
export const KanbanDispatchContext =
  createContext<React.Dispatch<KanbanAction> | null>(null);
