import { ListsDispatchContext } from "@/context/ListsContext";
import { useContext } from "react";

export default function useListsDispatch() {
  const context = useContext(ListsDispatchContext);
  if (!context) {
    throw new Error("useListsDispatch must be used within ListsProvider");
  }
  return context;
}
