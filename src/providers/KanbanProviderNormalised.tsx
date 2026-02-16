import {
  KanbanContext,
  KanbanDispatchContext,
} from "@/context/KanbanContextNormalised";
import kanbanReducerNormalised from "@/reducers/kanbanReducerNormalised";
import {
  emptyKanbanData,
  type KanbanState,
} from "@/types/kanbanTypesNormalised";
import { useReducer } from "react";

export default function KanbanProvider({
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
