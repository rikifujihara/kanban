import {
  KanbanContextNormalised,
  KanbanDispatchContextNormalised,
} from "@/context/KanbanContextNormalised";
import kanbanReducerNormalised from "@/reducers/kanbanReducerNormalised";
import {
  emptyKanbanData,
  type KanbanState,
} from "@/types/kanbanTypesNormalised";
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
    <KanbanContextNormalised value={kanban}>
      <KanbanDispatchContextNormalised value={dispatch}>
        {children}
      </KanbanDispatchContextNormalised>
    </KanbanContextNormalised>
  );
}
