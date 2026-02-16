import Column from "@/components/Column";
import NewColumnForm from "@/components/NewColumnForm";
import useKanban from "@/hooks/useKanban";

export default function Board({ boardId }: { boardId: string }) {
  const board = useKanban().boards.byId[boardId];
  return board ? (
    <div className="flex gap-2 items-start p-2 overflow-x-auto h-full">
      {board.columns.map((columnId) => (
        <Column key={columnId} columnId={columnId} />
      ))}
      <NewColumnForm boardId={board.id} />
    </div>
  ) : (
    <div>Board not found!</div>
  );
}
