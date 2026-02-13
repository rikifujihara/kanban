import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Board from "./Board";
import { addCard, addColumn } from "../test/helpers";

test("Focuses input when clicking add card button", async () => {
  const user = userEvent.setup();
  render(<Board />);

  const column = await addColumn(user, "Todo");
  await user.click(within(column).getByRole("button", { name: /add card/i }));
  const input = within(column).getByLabelText(/card name/i);

  expect(input).toHaveFocus();
});

test("Does not allow duplicate card names within column", async () => {
  const user = userEvent.setup();
  render(<Board />);

  const column = await addColumn(user, "Todo");
  await addCard(user, "Todo", "Walk the dog");
  await user.click(within(column).getByRole("button", { name: /add card/i }));
  await user.type(within(column).getByLabelText(/card name/i), "Walk the dog");
  await user.click(within(column).getByRole("button", { name: /add card/i }));

  const cards = within(column).getAllByText("Walk the dog");
  expect(cards.length).toBe(1);
});
