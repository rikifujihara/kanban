import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Board from "./Board";

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

// TODO: does not allow adding new column with duplicate name
