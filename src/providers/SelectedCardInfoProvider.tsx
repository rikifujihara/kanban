import {
  SelectedCardInfoContext,
  SetSelectedCardInfoContext,
} from "@/context/selectedCardInfoContext";
import type { SelectedCardInfo } from "@/types/kanbanTypes";
import { useState } from "react";

export default function SelectedCardInfoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCardInfo, setSelectedCardInfo] = useState<SelectedCardInfo>({
    selectedCardId: null,
    selectedCardParentListId: null,
  });

  return (
    <SelectedCardInfoContext value={selectedCardInfo}>
      <SetSelectedCardInfoContext value={setSelectedCardInfo}>
        {children}
      </SetSelectedCardInfoContext>
    </SelectedCardInfoContext>
  );
}
