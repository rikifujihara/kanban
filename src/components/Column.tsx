import Card from "@/components/Card";
import NewCardForm from "@/components/NewCardForm";
import useKanban from "@/hooks/useKanban";

export default function Column({ columnId }: { columnId: string }) {
  const column = useKanban().columns.byId[columnId];

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
