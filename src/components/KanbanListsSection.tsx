import { useState } from "react";
import type { List } from "../types/kanbanTypes";
import AddAnotherListCard from "./AddAnotherListCard";
import KanbanListCard from "./KanbanListCard";

export default function KanbanListsSection() {
  const [lists, setLists] = useState<List[]>([
    {
      id: 1,
      title: "todo",
      cards: [{ id: 1, title: "Build Kanban", isComplete: false }],
    },
  ]);
  return (
    <div className="h-full p-4 flex justify-start items-start gap-2 overflow-x-auto">
      {lists.map((list) => {
        return <KanbanListCard setLists={setLists} key={list.id} list={list} />;
      })}
      <AddAnotherListCard
        addList={(newList: List) => setLists((lists) => [...lists, newList])}
      />
    </div>
  );
}
