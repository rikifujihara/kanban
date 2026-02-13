import Board from "./components/Board";
import HeaderSection from "./components/HeaderSection";

export default function App() {
  return (
    <div className="h-full w-full flex flex-col">
      <HeaderSection />
      <Board
        initialColumns={[
          {
            id: "1",
            title: "Todo",
            cards: [{ id: "1", title: "Walk the dog" }],
          },
          { id: "2", title: "Doing", cards: [] },
          { id: "3", title: "Done", cards: [] },
        ]}
      />
    </div>
  );
}

// TODO:

// extract reusable component for NewColumnForm and NewCardForm
