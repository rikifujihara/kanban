import { useState } from "react";
import NewColumnForm from "@/components/NewColumnForm";
import type { ColumnData } from "@/types/kanbanTypes";
import Column from "@/components/Column";

export default function Board({
  initialColumns = [],
}: {
  initialColumns?: ColumnData[];
}) {
  const [columns, setColumns] = useState<ColumnData[]>(initialColumns);

  return (
    <div className="flex gap-2 items-start p-2 overflow-x-auto h-full">
      {columns.map((column) => (
        <Column addCard={addCard} key={column.id} column={column} />
      ))}
      <NewColumnForm columns={columns} addColumn={addColumn} />
    </div>
  );

  function addColumn(title: string) {
    setColumns((prev) => {
      return [
        { id: String(prev.length + 1), title: title, cards: [] },
        ...prev,
      ];
    });
  }

  function addCard(title: string, columnId: string) {
    setColumns((prev) => {
      return prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: [
                ...col.cards,
                { id: String(col.cards.length + 1), title, isComplete: false },
              ],
            }
          : col,
      );
    });
  }
}
