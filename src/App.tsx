import Board from "@/components/Board";
import HeaderSection from "@/components/HeaderSection";
import KanbanProviderNormalised from "@/providers/KanbanProviderNormalised";
import { kanbanExampleData } from "@/types/kanbanTypes";

export default function App() {
  return (
    <KanbanProviderNormalised initialState={kanbanExampleData}>
      <div className="h-full w-full flex flex-col">
        <HeaderSection />
        <Board boardId={"1"} />
      </div>
    </KanbanProviderNormalised>
  );
}

// TODO:

// extract reusable component for NewColumnForm and NewCardForm
