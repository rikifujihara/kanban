import { SelectedCardInfoContext } from "@/context/selectedCardInfoContext";
import { useContext } from "react";

export default function useSelectedCardInfo() {
  const context = useContext(SelectedCardInfoContext);
  if (!context) {
    throw new Error(
      "useSelectedCardInfo must be used within SelectedCardInfoProvider",
    );
  }
  return context;
}
