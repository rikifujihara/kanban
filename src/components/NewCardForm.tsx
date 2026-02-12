import { Plus } from "lucide-react";
import { useState, type FormEvent } from "react";
import Button from "./Button";

export default function NewCardForm({
  columnTitle,
  columnId,
  addCard,
}: {
  columnTitle: string;
  columnId: string;
  addCard: (title: string, columnId: string) => void;
}) {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  return (
    <>
      {" "}
      {isAddingCard ? (
        <form onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor={`new-card-name-${columnTitle}`}>
            Card name
          </label>
          <input
            id={`new-card-name-${columnTitle}`}
            type="text"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
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
    addCard(cardTitle, columnId);
    setIsAddingCard(false);
    setCardTitle("");
  }
}
