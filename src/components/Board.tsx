import Column from "@/components/Column";
import NewColumnForm from "@/components/NewColumnForm";
import useKanban from "@/hooks/useKanban";

export default function Board({ boardId }: { boardId: string }) {
  // const [columns, setColumns] = useState<ColumnData[]>(initialColumns);
  const { boards } = useKanban();
  const board = boards.find((b) => b.id === boardId);

  return board ? (
    <div className="flex gap-2 items-start p-2 overflow-x-auto h-full">
      {board.columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
      <NewColumnForm />
    </div>
  ) : (
    <div>Board not found!</div>
  );
}
