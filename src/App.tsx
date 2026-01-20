import HeaderSection from "./components/HeaderSection";
import KanbanListsSection from "./components/KanbanListsSection";
import RootProviders from "./providers/RootProviders";

export default function App() {
  return (
    <RootProviders>
      <div className="h-full w-full flex flex-col">
        <HeaderSection />
        <KanbanListsSection />
      </div>
    </RootProviders>
  );
}
