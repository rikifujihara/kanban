import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, test } from "vitest";
import Board from "./Board";
import { addColumn } from "../test/helpers";

test("Allows adding a new column", async () => {
  const user = userEvent.setup();
  render(<Board />);
  await addColumn(user, "Done");
  expect(screen.getByRole("region", { name: "Done" })).toBeInTheDocument();
  expect(screen.getByText("Done")).toBeInTheDocument();
});
