import { KanbanDispatchContextNormalised } from "@/context/KanbanContextNormalised";
import { useContext } from "react";

export default function useKanbanDispatchNormalised() {
  const context = useContext(KanbanDispatchContextNormalised);
  if (!context)
    throw new Error("useKanban must be used with KanbanDispatchProvider");
  return context;
}
