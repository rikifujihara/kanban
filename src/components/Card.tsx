import useKanban from "@/hooks/useKanban";
import useKanbanDispatch from "@/hooks/useKanbanDispatch";
import type { CardData } from "@/types/kanbanTypes";
import { Circle, CircleCheck } from "lucide-react";

export default function Card({ cardId }: { cardId: string }) {
  const card = useKanban().cards.byId[cardId];
  const dispatch = useKanbanDispatch();
  return (
    <article
      aria-label={card.name}
      className="flex flex-row gap-2 bg-gray-800 rounded-md p-3 w-70"
    >
      <label className="cursor-pointer">
        {card.isComplete ? (
          <CircleCheck className="text-green-500" />
        ) : (
          <Circle />
        )}
        <input
          onChange={toggleComplete}
          className="sr-only"
          type="checkbox"
        ></input>
      </label>
      <h3 className={`${card.isComplete && "line-through"}`}>{card.name}</h3>
    </article>
  );

  function toggleComplete() {
    const updatedCard: CardData = { ...card, isComplete: !card.isComplete };
    dispatch({ type: "UPDATE_CARD", payload: { card: updatedCard } });
  }
}
