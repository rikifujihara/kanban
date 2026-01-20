import { ListsContext, ListsDispatchContext } from "@/context/ListsContext";
import listsReducer from "@/reducers/listsReducer";
import { useReducer } from "react";

export default function ListsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lists, dispatch] = useReducer(listsReducer, [
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

  return (
    <ListsContext value={lists}>
      <ListsDispatchContext value={dispatch}>{children}</ListsDispatchContext>
    </ListsContext>
  );
}
