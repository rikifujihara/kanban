import { Ellipsis, Plus, X } from "lucide-react";
import type { Card, List } from "@/types/kanbanTypes";
import type { SetState } from "@/types/helperTypes";
import ListCard from "./ListCard";
import { useState } from "react";

interface KanbanColumnCardProps {
  list: List;
  setLists: SetState<List[]>;
}

export default function KanbanColumnCard({
  list,
  setLists,
}: KanbanColumnCardProps) {
  return (
    <div className="min-w-70 bg-gray-900 p-4 rounded-lg flex flex-col gap-2">
      <div className=" flex justify-between p-3">
        <button className="text-white flex-1 text-left">
          <h2>{list.title}</h2>
        </button>
        <button className="text-white">
          <Ellipsis />
        </button>
      </div>
      {list.cards.map((card) => {
        return (
          <ListCard
            key={card.id}
            card={card}
            setLists={setLists}
            listId={list.id}
          />
        );
      })}
      <AddCardButton addCard={addCard} />
    </div>
  );

  function addCard(card: Omit<Card, "id">) {
    setLists((prevLists) => {
      const newLists = prevLists.map((l) =>
        l.id === list.id
          ? {
              ...l,
              cards: [...l.cards, { ...card, id: l.cards.length }],
            }
          : l
      );
      return newLists;
    });
  }
}

function AddCardButton({
  addCard,
}: {
  addCard: (card: Omit<Card, "id">) => void;
}) {
  const [title, setTitle] = useState("");
  const [isAddingCard, setIsAddingCard] = useState(false);

  return (
    <div onClick={() => setIsAddingCard(true)}>
      {isAddingCard ? (
        <div className="flex flex-col gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddCard();
              }
            }}
            className="w-full rounded-md text-gray-100 p-2 font-medium bg-gray-800"
          />
          <div className="flex justify-start items-center gap-1">
            <button
              onClick={handleAddCard}
              className="bg-blue-600 active:bg-blue-300 p-2 rounded-md hover:bg-blue-400"
            >
              Add card
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsAddingCard(false);
              }}
              className="p-2 hover:bg-gray-600 active:bg-gray-700 rounded-md"
            >
              <X className="text-gray-300" />
            </button>
          </div>
        </div>
      ) : (
        <button className="flex w-full rounded-md text-gray-400 p-2 font-medium hover:bg-gray-800 select-none">
          <Plus /> Add a card
        </button>
      )}
    </div>
  );

  function handleAddCard() {
    addCard({ title, isComplete: false });
    setTitle("");
    setIsAddingCard(false);
  }
}
