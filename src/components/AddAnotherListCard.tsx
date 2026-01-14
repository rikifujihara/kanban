import { Plus, X } from "lucide-react";
import type { List } from "../types/kanbanTypes";
import { useState, useRef, useEffect } from "react";

interface AddAnotherListCardProps {
  // TODO: narrow the interface so we ONLY add a list from here, not just set them to anything we want
  addList: (newList: List) => void;
}

export default function AddAnotherListCard({
  addList,
}: AddAnotherListCardProps) {
  const [isTypingListName, setIsTypingListName] = useState(false);
  const [listName, setListName] = useState("");
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleInputRef.current && isTypingListName) {
      titleInputRef.current.focus();
    }
  }, [isTypingListName]);

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg  p-4 min-w-70 h-auto flex gap-2 hover:cursor-pointer  ${
        isTypingListName
          ? "bg-gray-900"
          : "hover:bg-gray-400 active:bg-gray-500 bg-gray-300"
      }`}
    >
      {isTypingListName ? (
        <div className="flex flex-col gap-3">
          <input
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="Enter a list name..."
            ref={titleInputRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddList();
              }
            }}
            className="bg-gray-800 display-flex w-full p-2 text-white font-semibold rounded-md placeholder:font-bold placeholder:text-gray-200"
          />
          <div className="flex justify-start items-center gap-1">
            <button
              onClick={handleAddList}
              className="bg-blue-600 active:bg-blue-300 p-2 rounded-md hover:bg-blue-400"
            >
              Add List
            </button>
            <button
              onMouseDown={handleBlur}
              className="p-2 hover:bg-gray-600 active:bg-gray-700 rounded-md"
            >
              <X className="text-gray-300" />
            </button>
          </div>
        </div>
      ) : (
        <>
          <Plus /> Add another list
        </>
      )}
    </div>
  );

  function handleClick() {
    setIsTypingListName(true);
  }

  function handleBlur() {
    setIsTypingListName(false);
  }

  function handleAddList() {
    if (listName !== "") {
      addList({ id: 5, name: listName });
      setListName("");
      setIsTypingListName(false);
    } else {
      titleInputRef.current?.focus();
    }
  }
}
