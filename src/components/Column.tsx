import Card from "@/components/Card";
import NewCardForm from "@/components/NewCardForm";
import useKanbanNormalised from "@/hooks/useKanbanNormalised";

export default function Column({ columnId }: { columnId: string }) {
  const column = useKanbanNormalised().columns.byId[columnId];

  return column ? (
    <div
      role="region"
      aria-label={column.name}
      className="flex flex-col gap-2 bg-gray-950 rounded-lg p-3 text-gray-100"
    >
      <h2>{column.name}</h2>
      {column.cards.map((cardId) => (
        <Card cardId={cardId} key={cardId} />
      ))}
      <NewCardForm columnId={column.id} />
    </div>
  ) : (
    <div>Column not found!</div>
  );
}
