import { render, screen } from "@testing-library/react";

import Star from "./star";

test("renders a star", () => {
  render(<Star />);
  expect(screen.getByRole("star")).toBeVisible();
});
