import { render, screen, fireEvent } from "@testing-library/react";

import Star from "./star";

describe("Test component:star", () => {
  test("renders a star", () => {
    render(<Star />);
    expect(screen.getByRole("star")).toBeVisible();
  });

  test("click a star then color is yellow", () => {
    render(<Star />);
    const target = screen.getByRole("star");
    fireEvent.click(target);
    expect(target).toHaveStyle("color: yellow;");
  });

  test("click twins a star then color is grey", () => {
    render(<Star />);
    const target = screen.getByRole("star");
    fireEvent.click(target);
    fireEvent.click(target);
    expect(target).toHaveStyle("color: grey;");
  });
});
