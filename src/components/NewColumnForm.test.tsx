import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Board from "./Board";
import { addColumn } from "../test/helpers";

test("Focuses the column name input when the add column button is clicked", async () => {
  const user = userEvent.setup();
  render(<Board />);

  await user.click(screen.getByRole("button", { name: /add column/i }));
  const titleInput = screen.getByLabelText(/column name/i);
  expect(titleInput).toHaveFocus();
});

test("Does not submit unless a title has been entered", async () => {
  const user = userEvent.setup();
  render(<Board />);

  await user.click(screen.getByRole("button", { name: /add column/i }));
  const createColumnButton = screen.getByRole("button", {
    name: /create column/i,
  });
  await user.click(createColumnButton);
  expect(createColumnButton).toBeInTheDocument();
});

test("Cancel button hides the text input", async () => {
  const user = userEvent.setup();
  render(<Board />);

  await user.click(screen.getByRole("button", { name: /add column/i }));

  const titleInput = screen.getByLabelText(/column name/i);
  expect(titleInput).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /cancel new column/i }));
  expect(titleInput).not.toBeInTheDocument();
});

test("Does not allow duplicate column names", async () => {
  const user = userEvent.setup();
  render(<Board />);

  const firstColumn = await addColumn(user, "Todo");
  expect(firstColumn).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /add column/i }));
  await user.type(screen.getByLabelText(/column name/i), "Todo");
  await user.click(screen.getByRole("button", { name: /create column/i }));
  expect(screen.getAllByRole("region", { name: "Todo" }).length).toBe(1);

  const input = screen.getByLabelText(/column name/i);
  expect(screen.getByRole("alert")).toHaveTextContent(/already exists/i);
  expect(input).toBeInvalid();
});
