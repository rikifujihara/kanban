import { screen, within } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";

export async function addColumn(user: UserEvent, title: string) {
  await user.click(screen.getByRole("button", { name: /add column/i }));
  await user.type(screen.getByLabelText(/column name/i), title);
  await user.click(screen.getByRole("button", { name: /create column/i }));
}

export async function addCard(
  user: UserEvent,
  columnTitle: string,
  cardTitle: string,
) {
  const column = screen.getByRole("region", { name: columnTitle });
  await user.click(within(column).getByRole("button", { name: /add card/i }));
  await user.type(within(column).getByLabelText(/card name/i), cardTitle);
  await user.click(within(column).getByRole("button", { name: /add card/i }));
}
