import { KanbanContext, KanbanDispatchContext } from "@/context/KanbanContext";
import kanbanReducerNormalised from "@/reducers/kanbanReducerNormalised";
import { emptyKanbanData, type KanbanState } from "@/types/kanbanTypes";
import { useReducer } from "react";

export default function KanbanProviderNormalised({
  initialState = emptyKanbanData,
  children,
}: {
  initialState?: KanbanState;
  children: React.ReactNode;
}) {
  const [kanban, dispatch] = useReducer(kanbanReducerNormalised, initialState);

  return (
    <KanbanContext value={kanban}>
      <KanbanDispatchContext value={dispatch}>{children}</KanbanDispatchContext>
    </KanbanContext>
  );
}
