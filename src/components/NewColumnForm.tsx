import { Plus, X } from "lucide-react";
import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import useKanbanDispatch from "@/hooks/useKanbanDispatch";
import useKanban from "@/hooks/useKanban";

export default function NewColumnForm({ boardId }: { boardId: string }) {
  const [isAddingColumn, setAddingColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useKanbanDispatch();
  const { boards } = useKanban();

  const error = !isUniqueColumnName(newColumnTitle)
    ? "This column name already exists"
    : "";

  useEffect(() => {
    if (isAddingColumn) {
      inputRef.current?.focus();
    }
  }, [isAddingColumn]);

  return (
    <form onSubmit={handleSubmit}>
      {isAddingColumn ? (
        <div className="flex flex-col items-start bg-gray-700 p-3 rounded-lg gap-2">
          <label className="sr-only" htmlFor="column-name">
            Column name
          </label>
          <input
            placeholder="Enter a column name..."
            ref={inputRef}
            aria-invalid={error !== ""}
            aria-describedby={error ? "column-name-error" : undefined}
            className="bg-gray-500 p-1 rounded-md"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            id="column-name"
            type="text"
          ></input>
          {error && (
            <p id="column-name-error" role="alert" className="text-gray-200">
              {error}
            </p>
          )}
          <div className="flex gap-2">
            <Button type="submit">Create Column</Button>
            <Button
              onClick={handleCancel}
              type="button"
              aria-label="Cancel new column"
              variant="secondary"
            >
              <X className="text-gray-100" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          className="bg-gray-500"
          variant="secondary"
          type="button"
          onClick={() => setAddingColumn(true)}
        >
          <Plus />
          Add column
        </Button>
      )}
    </form>
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newColumnTitle.trim() === "") return;
    if (error !== "") {
      return;
    }
    dispatch({
      type: "ADD_COLUMN",
      payload: { boardId, columnTitle: newColumnTitle },
    });
    setAddingColumn(false);
    setNewColumnTitle("");
  }

  function handleCancel() {
    setAddingColumn(false);
    setNewColumnTitle("");
  }

  function isUniqueColumnName(name: string) {
    const board = boards.find((b) => b.id === boardId);
    if (!board) throw new Error("no board found!");
    const columnNames = board.columns.map((c) => c.title);
    return !columnNames.includes(name);
  }
}
