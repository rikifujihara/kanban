import { useState } from "react";
import type { Card, List, SelectedCardInfo } from "@/types/kanbanTypes";
import AddAnotherListCard from "./AddAnotherListCard";
import KanbanColumnCard from "./KanbanColumnCard";
import CardDetailsModal from "./CardDetailsModal";

export default function KanbanListsSection() {
  const [{ selectedCardParentListId, selectedCardId }, setSelectedCardInfo] =
    useState<SelectedCardInfo>({
      selectedCardId: null,
      selectedCardParentListId: null,
    });
  const [lists, setLists] = useState<List[]>([
    {
      id: 1,
      title: "todo",
      cards: [
        {
          id: 1,
          title: "Build Kanban",
          isComplete: false,
          description: "hello",
        },
        { id: 2, title: "Test Kanban", isComplete: true, description: "" },
      ],
    },
  ]);

  const selectedCard = findSelectedCard();

  return (
    <div className="h-full p-4 flex justify-start items-start gap-2 overflow-x-auto">
      {lists.map((list) => {
        return (
          <KanbanColumnCard
            setSelectedCardInfo={setSelectedCardInfo}
            setLists={setLists}
            key={list.id}
            list={list}
          />
        );
      })}
      <AddAnotherListCard
        addList={(newList: List) => setLists((lists) => [...lists, newList])}
      />
      {selectedCard && selectedCardParentListId && (
        <CardDetailsModal
          setSelectedCardInfo={setSelectedCardInfo}
          setLists={setLists}
          listId={selectedCardParentListId}
          card={selectedCard}
        />
      )}
    </div>
  );

  function findSelectedCard(): Card | null {
    if (!selectedCardId || !selectedCardParentListId) return null;
    const parentList = lists.find((l) => l.id === selectedCardParentListId);
    if (!parentList) return null;
    const selectedCard = parentList.cards.find((c) => c.id === selectedCardId);
    if (!selectedCard) return null;
    return selectedCard;
  }
}
