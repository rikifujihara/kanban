import ListsProvider from "./ListsProvider";
import SelectedCardInfoProvider from "./SelectedCardInfoProvider";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ListsProvider>
      <SelectedCardInfoProvider>{children}</SelectedCardInfoProvider>
    </ListsProvider>
  );
}
