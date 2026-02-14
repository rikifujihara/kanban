import type { ColumnData } from "../types/kanbanTypes";
import Card from "./Card";
import NewCardForm from "@/components/NewCardForm";

export default function Column({
  column,
  addCard,
}: {
  column: ColumnData;
  addCard: (title: string, columnId: string) => void;
}) {
  return (
    <div
      role="region"
      aria-label={column.title}
      className="flex flex-col gap-2 bg-gray-950 rounded-lg p-3 text-gray-100"
    >
      <h2>{column.title}</h2>
      {column.cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
      <NewCardForm
        cards={column.cards}
        columnId={column.id}
        addCard={addCard}
        columnTitle={column.title}
      />
    </div>
  );
}
