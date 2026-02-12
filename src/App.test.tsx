import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
// REQUIREMENTS:

// Renders a header

test("Displays the header 'Kanban' on the homepage", () => {
  render(<App />);
  expect(screen.getByText("Kanban")).toBeInTheDocument();
});
