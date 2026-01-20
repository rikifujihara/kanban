import { MODAL_ACTION_TYPES } from "@/constants/kanbanConstants";
import useListsDispatch from "@/hooks/useListsDispatch";
import type { SetState } from "@/types/helperTypes";
import type {
  ActiveModalAction,
  Card,
  SelectedCardInfo,
} from "@/types/kanbanTypes";
import { ArrowRight, ChevronLeft, Ellipsis, Trash, X } from "lucide-react";
import { useState } from "react";

interface CardDetailsDropdownProps {
  listId: number;
  card: Card;
  setSelectedCardInfo: SetState<SelectedCardInfo>;
}

export default function CardDetailsDropdown({
  listId,
  card,
  setSelectedCardInfo,
}: CardDetailsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModalAction, setActiveModalAction] =
    useState<ActiveModalAction>(null);
  const listsDispatch = useListsDispatch();
  return (
    <div className="relative">
      {/* dropdown trigger */}
      <button
        onClick={() => setIsOpen((openStatus) => !openStatus)}
        className=" hover:bg-gray-700 rounded-full p-3"
      >
        <Ellipsis className="text-gray-200" />
      </button>
      {true && (
        // dropdown content
        <div className="absolute p-4 gap-2 flex flex-col rounded-lg bg-gray-800 drop-shadow-gray-950 top-full mt-2 right-1/2 -translate-x-[-50%]">
          {activeModalAction === null && (
            <>
              {/* buttons */}
              <button
                onClick={() => setActiveModalAction(MODAL_ACTION_TYPES.MOVE)}
                className="flex w-full items-center p-2 hover:bg-gray-600 active:bg-gray-500 text-gray-200 gap-2 rounded-md"
              >
                <ArrowRight />
                Move
              </button>
              <button
                onClick={() => setActiveModalAction(MODAL_ACTION_TYPES.DELETE)}
                className="flex w-full items-center p-2 hover:bg-gray-600 active:bg-gray-500 text-gray-200 gap-2 rounded-md"
              >
                <Trash /> Delete
              </button>
            </>
          )}
          {activeModalAction !== null && (
            // modal navigation buttons
            <div className="flex justify-between items-center w-full min-w-60 text-gray-400">
              <button
                className="rounded-lg hover:bg-gray-700 p-1"
                onClick={() => setActiveModalAction(null)}
              >
                <ChevronLeft />
              </button>
              {activeModalAction === MODAL_ACTION_TYPES.DELETE && (
                <span className="font-semibold">Delete card?</span>
              )}
              {activeModalAction === MODAL_ACTION_TYPES.MOVE && (
                <span>Move card</span>
              )}
              <button
                className="rounded-lg hover:bg-gray-700 p-1"
                onClick={() => {
                  setIsOpen(false);
                  setActiveModalAction(null);
                }}
              >
                <X />
              </button>
            </div>
          )}
          {activeModalAction === MODAL_ACTION_TYPES.DELETE && (
            <>
              <p className="text-gray-100">
                This will permenantly delete this card. There is no undo.
              </p>
              <button
                onClick={handleDeleteCard}
                className="w-full bg-red-400 text-gray-900 font-semibold rounded-md p-1.5"
              >
                Delete
              </button>
            </>
          )}
          {activeModalAction === MODAL_ACTION_TYPES.MOVE && <></>}
        </div>
      )}
    </div>
  );

  function handleDeleteCard() {
    listsDispatch({
      type: "DELETE_CARD",
      payload: { cardId: card.id, listId },
    });
    setSelectedCardInfo({
      selectedCardId: null,
      selectedCardParentListId: null,
    });
  }
}
