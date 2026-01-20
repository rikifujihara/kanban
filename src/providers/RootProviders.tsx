import ListsProvider from "./ListsProvider";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ListsProvider>{children}</ListsProvider>;
}
