import { KanbanContext, KanbanDispatchContext } from "@/context/KanbanContext";
import kanbanReducer from "@/reducers/kanbanReducer";
import type { BoardData } from "@/types/kanbanTypes";
import { useReducer } from "react";

export default function KanbanProvider({
  initialBoards = [],
  children,
}: {
  initialBoards?: BoardData[];
  children: React.ReactNode;
}) {
  const [kanban, dispatch] = useReducer(kanbanReducer, {
    id: "1",
    boards: initialBoards,
  });
  return (
    <KanbanContext value={kanban}>
      <KanbanDispatchContext value={dispatch}>{children}</KanbanDispatchContext>
    </KanbanContext>
  );
}
