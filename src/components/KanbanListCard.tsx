import { Ellipsis, Plus } from "lucide-react";
import type { List } from "../types/kanbanTypes";

interface KanbanListCardProps {
  list: List;
}

export default function KanbanListCard({ list }: KanbanListCardProps) {
  return (
    <div className="min-w-70 bg-gray-900 p-2 rounded-lg">
      <div className=" flex justify-between p-3">
        <button className="text-white flex-1 text-left">{list.name}</button>
        <button className="text-white">
          <Ellipsis />
        </button>
      </div>

      <button className="flex w-full rounded-md text-gray-400 p-2 font-medium hover:bg-gray-800">
        <Plus /> Add a card
      </button>
    </div>
  );
}
