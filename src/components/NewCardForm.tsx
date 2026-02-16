import { Plus } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Button from "@/components/Button";
import useKanbanDispatchNormalised from "@/hooks/useKanbanDispatchNormalised";
import useKanbanNormalised from "@/hooks/useKanbanNormalised";

export default function NewCardForm({ columnId }: { columnId: string }) {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");

  const dispatch = useKanbanDispatchNormalised();
  const { columns, cards } = useKanbanNormalised();
  const column = columns.byId[columnId];
  const cardNames = column.cards.map((id) => cards.byId[id].name);

  const inputRef = useRef<HTMLInputElement>(null);

  const error = isCardNameUnique(cardTitle)
    ? ""
    : "This card name already exists";

  useEffect(() => {
    if (isAddingCard) {
      inputRef.current?.focus();
    }
  }, [isAddingCard]);

  return (
    <>
      {isAddingCard ? (
        <form onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor={`new-card-name-${column.name}`}>
            Card name
          </label>
          <input
            ref={inputRef}
            id={`new-card-name-${column.name}`}
            type="text"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            aria-invalid={error !== ""}
            aria-describedby={error ? "card-name-error" : undefined}
          />
          {error && (
            <p
              id="card-name-error-message"
              role="alert"
              className="text-gray-100"
            >
              {error}
            </p>
          )}
          <Button variant="primary" type="submit">
            Add card
          </Button>
        </form>
      ) : (
        <Button
          type="button"
          variant="secondary"
          onClick={() => setIsAddingCard(true)}
        >
          <Plus />
          Add card
        </Button>
      )}
    </>
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (error !== "") return;
    if (cardTitle.trim() === "") {
      inputRef.current?.focus();
      return;
    }

    dispatch({
      type: "ADD_CARD",
      payload: { cardName: cardTitle, columnId },
    });
    setIsAddingCard(false);
    setCardTitle("");
  }

  function isCardNameUnique(name: string) {
    return !cardNames.includes(name);
  }
}
