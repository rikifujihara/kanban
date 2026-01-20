import type { SetState } from "@/types/helperTypes";
import type { Card, SelectedCardInfo } from "@/types/kanbanTypes";
import { Circle, Text, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CardDetailsDropdown from "./CardDetailsDropdown";
import useListsDispatch from "@/hooks/useListsDispatch";

interface CardDetailModalProps {
  card: Card;
  listId: number;
  setSelectedCardInfo: SetState<SelectedCardInfo>;
}

export default function CardDetailsModal({
  card,
  listId,
  setSelectedCardInfo,
}: CardDetailModalProps) {
  const { description, title } = card;
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [wipDescription, setWipDescription] = useState(card.description);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const listsDispatch = useListsDispatch();

  useEffect(() => {
    if (isEditingDescription && textAreaRef.current) {
      const textArea = textAreaRef.current;
      const length = textArea.value.length;
      textArea.focus();
      textArea.setSelectionRange(length, length);
    }
  }, [isEditingDescription]);

  return (
    // modal background
    <div
      onClick={() => {
        setSelectedCardInfo({
          selectedCardId: null,
          selectedCardParentListId: null,
        });
      }}
      className="bg-gray-700/50 inset-0 fixed flex items-center justify-center z-50 px-15"
    >
      {/* modal container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-10 bg-gray-900 max-w-200 flex gap-3 flex-col min-h-120 w-full rounded-2xl"
      >
        {/* top section of modal */}
        <div className="flex gap-3 justify-between items-center">
          {/* heading and checkmark */}
          <div className="flex items-center gap-3">
            <Circle className="text-gray-400" />
            <h4 className="text-gray-50 text-4xl font-semibold">{title}</h4>
          </div>
          <div className="flex gap-5">
            <CardDetailsDropdown
              listId={listId}
              card={card}
              setSelectedCardInfo={setSelectedCardInfo}
            />
            <button
              onClick={() => {
                setSelectedCardInfo({
                  selectedCardId: null,
                  selectedCardParentListId: null,
                });
              }}
              className=" hover:bg-gray-700 rounded-full p-3"
            >
              <X className="text-gray-200" />
            </button>
          </div>
        </div>
        {/* description section */}
        <div className="flex gap-3">
          <Text className="text-gray-200" />
          {/* description title + textarea container */}
          <div className="flex-1 flex flex-col gap-5">
            <h5 className="text-gray-200 font-semibold">Description</h5>
            {/* render text area if there's no current description, otherwise render the description itself */}
            {description !== "" && !isEditingDescription ? (
              <p
                onClick={() => {
                  setIsEditingDescription(true);
                }}
                className="text-gray-300 font-medium cursor-pointer"
              >
                {description}
              </p>
            ) : (
              <textarea
                value={wipDescription}
                onChange={(e) => {
                  setWipDescription(e.target.value);
                }}
                ref={textAreaRef}
                onFocus={() => setIsEditingDescription(true)}
                placeholder="Add a more detailed description..."
                className="w-full placeholder:text-gray-400 text-gray-200 outline-[1.5px] outline-gray-600 p-2 rounded-md resize-none"
              />
            )}
            {isEditingDescription && (
              <div className="flex gap-3">
                <button
                  onClick={handleSaveDescription}
                  className="rounded px-4 py-2 bg-blue-300"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditingDescription(false)}
                  className="rounded px-4 py-2 text-gray-200 hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function handleSaveDescription() {
    listsDispatch({
      type: "UPDATE_CARD_DESCRIPTION",
      payload: { listId, cardId: card.id, description: wipDescription },
    });
    setIsEditingDescription(false);
  }
}
