import { BoardContext, BoardDispatchContext } from "@/context/BoardContext";
import boardReducer from "@/reducers/boardReducer";
import type { ColumnData } from "@/types/kanbanTypes";
import { useReducer, type ReactNode } from "react";

export default function BoardProvider({
  children,
  initialColumns = [],
}: {
  children: ReactNode;
  initialColumns?: ColumnData[];
}) {
  const [board, dispatch] = useReducer(boardReducer, {
    id: "1",
    columns: initialColumns,
    title: "Life",
  });
  return (
    <BoardContext value={board}>
      <BoardDispatchContext value={dispatch}>{children}</BoardDispatchContext>
    </BoardContext>
  );
}
