import { ListsContext } from "@/context/ListsContext";
import { useContext } from "react";

export default function useLists() {
  const context = useContext(ListsContext);
  if (!context) {
    throw new Error("useLists must be used within ListsProvider.");
  }
  return context;
}
