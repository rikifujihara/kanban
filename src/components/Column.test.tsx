import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Board from "./Board";
import { addColumn, addCard } from "../test/helpers";

test("Allows adding new card", async () => {
  const user = userEvent.setup();
  render(<Board />);
  await addColumn(user, "Todo");
  await addColumn(user, "Done");
  await addCard(user, "Todo", "Walk dog");
  expect(screen.getByText("Walk dog")).toBeInTheDocument();
});
