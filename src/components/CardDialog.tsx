import useKanban from "@/hooks/useKanban";
import useKanbanDispatch from "@/hooks/useKanbanDispatch";
import { Ellipsis, X } from "lucide-react";
import { useState } from "react";

export default function Carddiv({
  cardId,
  columnId,
  closeModal,
}: {
  cardId: string;
  columnId: string;
  closeModal: () => void;
}) {
  // todo: implement hook which registers clicks outside this element

  const card = useKanban().cards.byId[cardId];

  return (
    // overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        role="dialog"
        aria-labelledby="card-name"
        className="w-full max-w-50 bg-gray-800 rounded-md"
      >
        {/* Modal heading section */}
        <div className="p-3 flex justify-between">
          <h3 id="card-name">{card.name}</h3>
          <div className="flex">
            <CardActionsDropdown cardId={card.id} columnId={columnId} />
            <button onClick={closeModal} aria-label="close card div">
              <X aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardActionsDropdown({
  cardId,
  columnId,
}: {
  cardId: string;
  columnId: string;
}) {
  const dispatch = useKanbanDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  return (
    <div className="relative inline-block">
      <button aria-label="card actions" onClick={() => setIsDropdownOpen(true)}>
        <Ellipsis aria-hidden />
      </button>
      {isDropdownOpen && (
        <div role="group" aria-label="card actions">
          <button onClick={() => setIsDeleteConfirmationOpen(true)}>
            Delete card
          </button>
        </div>
      )}
      {isDeleteConfirmationOpen && (
        <div role="alertdialog">
          <p>This card will be deleted along with it's checklist.</p>
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "DELETE_CARD", payload: { cardId, columnId } })
            }
          >
            confirm
          </button>
        </div>
      )}
    </div>
  );
}
