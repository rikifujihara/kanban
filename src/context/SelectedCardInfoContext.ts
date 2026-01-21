import type { SetState } from "@/types/helperTypes";
import type { SelectedCardInfo } from "@/types/kanbanTypes";
import { createContext } from "react";

export const SelectedCardInfoContext = createContext<SelectedCardInfo | null>(
  null,
);

export const SetSelectedCardInfoContext =
  createContext<SetState<SelectedCardInfo> | null>(null);
