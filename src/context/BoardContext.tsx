import type { BoardAction } from "@/reducers/boardReducer";
import { type BoardData } from "@/types/kanbanTypes";
import { createContext } from "react";

export const BoardContext = createContext<BoardData | null>(null);
export const BoardDispatchContext =
  createContext<React.Dispatch<BoardAction> | null>(null);
