import { KanbanContextNormalised } from "@/context/KanbanContextNormalised";
import { useContext } from "react";

export default function useKanbanNormalised() {
  const context = useContext(KanbanContextNormalised);
  if (!context) throw new Error("useKanban must be used with KanbanProvider");
  return context;
}
