import HeaderSection from "./components/HeaderSection";
import KanbanListsSection from "./components/KanbanListsSection";

export default function App() {
  return (
    <div className="h-full w-full flex flex-col">
      <HeaderSection />
      <KanbanListsSection />
    </div>
  );
}
