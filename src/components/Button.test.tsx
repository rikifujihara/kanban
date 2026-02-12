import { expect, test } from "vitest";
import Button from "./Button";
import { render, screen } from "@testing-library/react";

test("Renders the text passed as a child", () => {
  render(<Button onClick={() => {}}>Button text</Button>);
  expect(screen.getByText("Button text")).toBeInTheDocument();
});
