import type { ColumnData } from "@/types/kanbanTypes";
import Card from "@/components/Card";
import NewCardForm from "@/components/NewCardForm";
import useKanban from "@/hooks/useKanban";

export default function Column({
  column,
  boardId,
}: {
  column: ColumnData;
  boardId: string;
}) {
  const { boards } = useKanban();
  const board = boards.find((b) => b.id === boardId);
  return board ? (
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
        boardId={boardId}
        cards={column.cards}
        columnId={column.id}
        columnTitle={column.title}
      />
    </div>
  ) : (
    <div>Board not found!</div>
  );
}
