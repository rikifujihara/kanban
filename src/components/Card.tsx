import type { CardData } from "../types/kanbanTypes";

export default function Card({ card }: { card: CardData }) {
  return (
    <article aria-label={card.title} className="bg-gray-800 rounded-md p-3">
      <label>
        <input className="sr-only" type="checkbox"></input>
      </label>
      <h3>{card.title}</h3>
    </article>
  );
}
