import { Circle, CircleCheck } from "lucide-react";
import type { Card, List } from "../types/kanbanTypes";

interface ListCardProps {
  card: Card;
  listId: number;
  setLists: React.Dispatch<React.SetStateAction<List[]>>;
}

// TODO: use context to know what the current list/card is (to get ids etc)

export default function ListCard({ card, listId, setLists }: ListCardProps) {
  return (
    <div className="bg-gray-800 rounded-md p-3 flex gap-2">
      <CheckCircle onClick={handleCircleClick} isComplete={card.isComplete} />
      <h3 className="text-gray-100 select-none">{card.title}</h3>
    </div>
  );

  function handleCircleClick() {
    markCompleteness({
      setLists,
      cardId: card.id,
      listId,
      isComplete: !card.isComplete,
    });
  }

  function markCompleteness({
    setLists,
    cardId,
    listId,
    isComplete,
  }: {
    setLists: React.Dispatch<React.SetStateAction<List[]>>;
    cardId: number;
    listId: number;
    isComplete: boolean;
  }) {
    setLists((prevLists) => {
      try {
        const newLists = [...prevLists];
        newLists.forEach((list) => (list.cards = [...list.cards]));
        const list = newLists.find((list) => list.id === listId);
        if (!list) {
          console.error(
            "can't find the list that contains the card to mark complete!"
          );
          return newLists;
        }
        const card = list.cards.find((card) => card.id === cardId);
        if (!card) {
          console.error("can't find the card to mark complete!");
          return newLists;
        }
        card.isComplete = isComplete;
        return newLists;
      } catch (e) {
        console.error("Error: " + e);
        return prevLists;
      }
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
    <div className="cursor-pointer rounded-full" onClick={onClick}>
      {isComplete ? (
        <CircleCheck className={`${circleBaseClasses} text-green-400`} />
      ) : (
        <Circle className={`${circleBaseClasses} text-gray-400`} />
      )}
    </div>
  );
}
