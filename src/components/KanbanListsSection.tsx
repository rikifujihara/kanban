import type { Card } from "@/types/kanbanTypes";
import AddAnotherListCard from "./AddAnotherListCard";
import KanbanColumnCard from "./KanbanColumnCard";
import CardDetailsModal from "./CardDetailsModal";
import useLists from "@/hooks/useLists";
import useSelectedCardInfo from "@/hooks/useSelectedCardInfo";

export default function KanbanListsSection() {
  const lists = useLists();
  const { selectedCardId, selectedCardParentListId } = useSelectedCardInfo();
  const selectedCard = findSelectedCard();

  return (
    <div className="h-full p-4 flex justify-start items-start gap-2 overflow-x-auto">
      {lists.map((list) => {
        return <KanbanColumnCard key={list.id} list={list} />;
      })}
      <AddAnotherListCard />
      {selectedCard && selectedCardParentListId && (
        <CardDetailsModal
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
