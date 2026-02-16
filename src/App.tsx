import Board from "@/components/Board";
import HeaderSection from "@/components/HeaderSection";
import KanbanProviderNormalised from "@/providers/KanbanProviderNormalised";

export default function App() {
  return (
    <KanbanProviderNormalised>
      <div className="h-full w-full flex flex-col">
        <HeaderSection />
        <Board boardId={"1"} />
      </div>
    </KanbanProviderNormalised>
  );
}

// TODO:

// extract reusable component for NewColumnForm and NewCardForm
