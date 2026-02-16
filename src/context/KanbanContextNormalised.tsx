import { type KanbanAction } from "@/reducers/kanbanReducerNormalised";
import type { KanbanState } from "@/types/kanbanTypesNormalised";
import { createContext } from "react";

export const KanbanContextNormalised = createContext<KanbanState | null>(null);
export const KanbanDispatchContextNormalised =
  createContext<React.Dispatch<KanbanAction> | null>(null);
