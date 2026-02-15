import { KanbanDispatchContext } from "@/context/KanbanContext";
import { useContext } from "react";

export default function useKanbanDispatch() {
  const context = useContext(KanbanDispatchContext);
  if (!context)
    throw new Error("useKanban must be used with KanbanDispatchProvider");
  return context;
}
