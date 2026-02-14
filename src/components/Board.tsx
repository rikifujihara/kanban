import type { ColumnData } from "@/types/kanbanTypes";

import BoardProvider from "@/providers/BoardProvider";
import BoardContent from "@/components/BoardContent";

export default function Board({
  initialColumns = [],
}: {
  initialColumns?: ColumnData[];
}) {
  // const [columns, setColumns] = useState<ColumnData[]>(initialColumns);

  return (
    <BoardProvider initialColumns={initialColumns}>
      <BoardContent />
    </BoardProvider>
  );
}
