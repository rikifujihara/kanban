import Column from "@/components/Column";
import NewColumnForm from "@/components/NewColumnForm";
import useBoard from "@/hooks/useBoard";

export default function BoardContent() {
  const { columns } = useBoard();
  return (
    <div className="flex gap-2 items-start p-2 overflow-x-auto h-full">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
      <NewColumnForm />
    </div>
  );
}
