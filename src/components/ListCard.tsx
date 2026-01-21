import { Circle, CircleCheck } from "lucide-react";
import type { Card } from "@/types/kanbanTypes";
import useListsDispatch from "@/hooks/useListsDispatch";
import useSetSelectedCardInfo from "@/hooks/useSetSelectedCardInfo";

interface ListCardProps {
  card: Card;
  listId: number;
}

// TODO: use context to know what the current list/card is (to get ids etc)

export default function ListCard({ card, listId }: ListCardProps) {
  const listsDispatch = useListsDispatch();
  const setSelectedCardInfo = useSetSelectedCardInfo();

  return (
    <div
      onClick={handleCardClick}
      className="bg-gray-800 rounded-md p-3 flex gap-2 cursor-pointer"
    >
      <CheckCircle onClick={handleCircleClick} isComplete={card.isComplete} />
      <h3
        className={`select-none ${
          card.isComplete ? "text-gray-400 line-through" : "text-gray-100"
        }`}
      >
        {card.title}
      </h3>
    </div>
  );

  function handleCardClick() {
    setSelectedCardInfo({
      selectedCardId: card.id,
      selectedCardParentListId: listId,
    });
  }

  function handleCircleClick() {
    markCompleteness({
      cardId: card.id,
      listId,
      isComplete: !card.isComplete,
    });
  }

  function markCompleteness({
    cardId,
    listId,
    isComplete,
  }: {
    cardId: number;
    listId: number;
    isComplete: boolean;
  }) {
    listsDispatch({
      type: "MARK_CARD_COMPLETENESS",
      payload: { cardId, listId, isComplete },
    });
  }
}

function CheckCircle({
  isComplete,
  onClick,
}: {
  isComplete: boolean;
  onClick: () => void;
}) {
  const circleBaseClasses = "";
  return (
    <div
      className="cursor-pointer rounded-full"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {isComplete ? (
        <CircleCheck className={`${circleBaseClasses} text-green-400`} />
      ) : (
        <Circle className={`${circleBaseClasses} text-gray-400`} />
      )}
    </div>
  );
}
