import { Ellipsis, Plus } from "lucide-react";
import type { List } from "../types/kanbanTypes";
import ListCard from "./ListCard";

interface KanbanListCardProps {
  list: List;
  setLists: React.Dispatch<React.SetStateAction<List[]>>;
}

export default function KanbanListCard({
  list,
  setLists,
}: KanbanListCardProps) {
  return (
    <div className="min-w-70 bg-gray-900 px-4 py-2 rounded-lg">
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
      <button className="flex w-full rounded-md text-gray-400 p-2 font-medium hover:bg-gray-800">
        <Plus /> Add a card
      </button>
    </div>
  );
}
