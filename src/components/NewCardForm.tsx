import { Plus } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Button from "@/components/Button";
import type { CardData } from "@/types/kanbanTypes";
import useBoardDispatch from "@/hooks/useBoardDispatch";

export default function NewCardForm({
  cards,
  columnTitle,
  columnId,
}: {
  columnTitle: string;
  columnId: string;
  cards: CardData[];
}) {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");

  const dispatch = useBoardDispatch();

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
          <label className="sr-only" htmlFor={`new-card-name-${columnTitle}`}>
            Card name
          </label>
          <input
            ref={inputRef}
            id={`new-card-name-${columnTitle}`}
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

    dispatch({ type: "ADD_CARD", payload: { title: cardTitle, columnId } });
    setIsAddingCard(false);
    setCardTitle("");
  }

  function isCardNameUnique(name: string) {
    const cardNames = cards.map((c) => c.title);
    return !cardNames.includes(name);
  }
}
