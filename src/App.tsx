import Board from "@/components/Board";
import HeaderSection from "@/components/HeaderSection";
import KanbanProvider from "@/providers/KanbanProvider";

export default function App() {
  return (
    <KanbanProvider
      initialBoards={[
        {
          id: "1",
          title: "Test",
          columns: [
            {
              id: "1",
              title: "Test1",
              cards: [{ id: "1", title: "testtext", isComplete: false }],
            },
            { id: "2", title: "Test2", cards: [] },
            { id: "3", title: "Test3", cards: [] },
          ],
        },
      ]}
    >
      <div className="h-full w-full flex flex-col">
        <HeaderSection />
        <Board boardId={"1"} />
      </div>
    </KanbanProvider>
  );
}

// TODO:

// extract reusable component for NewColumnForm and NewCardForm
