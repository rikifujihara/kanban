import Board from "@/components/Board";
import HeaderSection from "@/components/HeaderSection";
import KanbanProvider from "@/providers/KanbanProvider";

export default function App() {
  return (
    <KanbanProvider
      initialBoards={[
        {
          id: "1",
          title: "life",
          columns: [
            {
              id: "1",
              title: "Todo",
              cards: [{ id: "1", title: "Walk the dog", isComplete: false }],
            },
            { id: "2", title: "Doing", cards: [] },
            { id: "3", title: "Done", cards: [] },
          ],
        },
      ]}
    >
      <div className="h-full w-full flex flex-col">
        <HeaderSection />
        <Board
          boardId={"1"}
          initialColumns={[
            {
              id: "1",
              title: "Todo",
              cards: [{ id: "1", title: "Walk the dog", isComplete: false }],
            },
            { id: "2", title: "Doing", cards: [] },
            { id: "3", title: "Done", cards: [] },
          ]}
        />
      </div>
    </KanbanProvider>
  );
}

// TODO:

// extract reusable component for NewColumnForm and NewCardForm
