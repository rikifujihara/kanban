import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Board from "./Board";
import { addColumn, addCard } from "../test/helpers";

test("Can mark a card as complete", async () => {
  const user = userEvent.setup();
  render(<Board />);
  await addColumn(user, "Todo");
  const card = await addCard(user, "Todo", "Walk the dog");
  const checkBox = within(card).getByRole("checkbox");
  await user.click(checkBox);
  expect(checkBox).toBeChecked();
});
