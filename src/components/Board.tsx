import { useState } from "react";
import NewColumnForm from "./NewColumnForm";
import type { ColumnData } from "../types/kanbanTypes";
import Column from "./Column";

export default function Board({
  initialColumns = [],
}: {
  initialColumns?: ColumnData[];
}) {
  const [columns, setColumns] = useState<ColumnData[]>(initialColumns);

  return (
    <div className="flex gap-2 p-2 overflow-x-auto">
      {columns.map((column) => (
        <Column addCard={addCard} key={column.id} column={column} />
      ))}
      <NewColumnForm addColumn={addColumn} />
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
                { id: String(col.cards.length + 1), title },
              ],
            }
          : col,
      );
    });
  }
}
