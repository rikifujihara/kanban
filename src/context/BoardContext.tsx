import { type BoardData } from "@/types/kanbanTypes";
import { createContext } from "react";

export const BoardContext = createContext<BoardData | null>(null);
export const BoardReducerContext = createContext<null>(null);
