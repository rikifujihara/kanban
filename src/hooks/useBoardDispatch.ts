import { BoardDispatchContext } from "@/context/BoardContext";
import { useContext } from "react";

export default function useBoardDispatch() {
  const context = useContext(BoardDispatchContext);
  if (!context)
    throw new Error(
      "useBoardDispatch must be used within BoardDispatchProvider",
    );
  return context;
}
