import useKanbanNormalised from "@/hooks/useKanbanNormalised";

export default function Card({ cardId }: { cardId: string }) {
  const card = useKanbanNormalised().cards.byId[cardId];
  return (
    <article aria-label={card.name} className="bg-gray-800 rounded-md p-3">
      <label>
        <input className="sr-only" type="checkbox"></input>
      </label>
      <h3>{card.name}</h3>
    </article>
  );
}
