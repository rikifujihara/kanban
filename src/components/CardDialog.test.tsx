import App from "@/App";
import { addCard, addColumn } from "@/test/helpers";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

test("Can delete a card via card modal", async () => {
  const user = userEvent.setup();
  render(<App />);

  // Add column + card
  const column = await addColumn(user, "Todo");
  await addCard(user, "Todo", "Walk the dog");

  // Open the card modal
  await user.click(
    within(column).getByRole("button", { name: /walk the dog/i }),
  );

  const cardDialog = await screen.findByRole("dialog", {
    name: /walk the dog/i,
  });

  // Open the actions dropdown
  await user.click(
    within(cardDialog).getByRole("button", {
      name: /card actions/i,
    }),
  );

  const actionsGroup = screen.getByRole("group", {
    name: /card actions/i,
  });

  // Click the delete option
  await user.click(
    within(actionsGroup).getByRole("button", {
      name: /delete card/i,
    }),
  );

  // Confirm deletion
  const confirmDialog = screen.getByRole("alertdialog");

  expect(
    screen.getByRole("button", {
      name: /confirm/i,
    }),
  ).toBeInTheDocument();
  console.log(
    "confirm button:",
    screen.getByRole("button", {
      name: /confirm/i,
    }).textContent,
  );
  await user.click(
    within(confirmDialog).getByRole("button", {
      name: /confirm/i,
    }),
  );

  expect(
    screen.queryByRole("article", {
      name: /walk the dog/i,
    }),
  ).not.toBeInTheDocument();
});
