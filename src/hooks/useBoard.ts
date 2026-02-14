import { BoardContext } from "@/context/BoardContext";
import { useContext } from "react";

export default function useBoard() {
  const context = useContext(BoardContext);
  if (!context) throw new Error("useBoard must be used within BoardProvider");
  return context;
}
