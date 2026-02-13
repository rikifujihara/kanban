import type { ColumnData } from "../types/kanbanTypes";
import NewCardForm from "./NewCardForm";

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
      className="flex flex-col gap-2 bg-gray-800 rounded-lg p-3 text-gray-100"
    >
      <h2>{column.title}</h2>
      {column.cards.map((card) => (
        <div key={card.id}>
          <h3>{card.title}</h3>
        </div>
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
