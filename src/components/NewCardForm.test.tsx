import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Board from "./Board";
import { addColumn } from "../test/helpers";

test("Focuses input when clicking add card button", async () => {
  const user = userEvent.setup();
  render(<Board />);
  const column = await addColumn(user, "Todo");
  await user.click(within(column).getByRole("button", { name: /add card/i }));
  const input = within(column).getByLabelText(/card name/i);
  expect(input).toHaveFocus();
});
