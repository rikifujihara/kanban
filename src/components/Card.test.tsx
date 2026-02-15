import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { addColumn, addCard } from "@/test/helpers";
import App from "@/App";

test("Can mark a card as complete", async () => {
  const user = userEvent.setup();
  render(<App />);
  await addColumn(user, "Todo");
  const card = await addCard(user, "Todo", "Walk the dog");
  const checkBox = within(card).getByRole("checkbox");
  await user.click(checkBox);
  expect(checkBox).toBeChecked();
});
