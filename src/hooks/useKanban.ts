import { KanbanContext } from "@/context/KanbanContext";
import { useContext } from "react";

export default function useKanban() {
  const context = useContext(KanbanContext);
  if (!context) throw new Error("useKanban must be used with KanbanProvider");
  return context;
}
