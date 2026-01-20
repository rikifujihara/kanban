import { Plus, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import useListsDispatch from "@/hooks/useListsDispatch";

export default function AddAnotherListCard() {
  const [isTypingListTitle, setIsTypingListTitle] = useState(false);
  const [listTitle, setlistTitle] = useState("");
  const titleInputRef = useRef<HTMLInputElement>(null);
  const listsDispatch = useListsDispatch();

  useEffect(() => {
    if (titleInputRef.current && isTypingListTitle) {
      titleInputRef.current.focus();
    }
  }, [isTypingListTitle]);

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg  p-4 min-w-70 h-auto flex gap-2 hover:cursor-pointer  ${
        isTypingListTitle
          ? "bg-gray-900"
          : "hover:bg-gray-400 active:bg-gray-500 bg-gray-300"
      }`}
    >
      {isTypingListTitle ? (
        <div className="flex flex-col gap-3">
          <input
            value={listTitle}
            onChange={(e) => setlistTitle(e.target.value)}
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
    setIsTypingListTitle(true);
  }

  function handleBlur() {
    setIsTypingListTitle(false);
  }

  function handleAddList() {
    if (listTitle !== "") {
      listsDispatch({ type: "ADD_LIST", payload: { title: listTitle } });
      setlistTitle("");
      setIsTypingListTitle(false);
    } else {
      titleInputRef.current?.focus();
    }
  }
}
