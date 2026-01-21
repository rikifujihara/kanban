import { SetSelectedCardInfoContext } from "@/context/selectedCardInfoContext";
import { useContext } from "react";

export default function useSetSelectedCardInfo() {
  const context = useContext(SetSelectedCardInfoContext);
  if (!context) {
    throw new Error(
      "useSetSelectedCardInfo must be used within SetSelectedCardInfoProvider",
    );
  }
  return context;
}
