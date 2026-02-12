import Board from "./components/Board";
import HeaderSection from "./components/HeaderSection";

export default function App() {
  return (
    <div className="h-full w-full flex flex-col">
      <HeaderSection />
      <Board initialColumns={[{ id: "1", title: "Todo", cards: [] }]} />
    </div>
  );
}
