import { Plus, X } from "lucide-react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

interface NewColumnFormProps {
  addColumn: (newTitle: string) => void;
}

export default function NewColumnForm({ addColumn }: NewColumnFormProps) {
  const [isAddingColumn, setAddingColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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
            className="bg-gray-500 p-1 rounded-md"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            id="column-name"
            type="text"
          ></input>
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
    addColumn(newColumnTitle);
    setAddingColumn(false);
    setNewColumnTitle("");
  }

  function handleCancel() {
    setAddingColumn(false);
    setNewColumnTitle("");
  }
}
