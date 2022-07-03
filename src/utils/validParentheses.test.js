import ValidParentheses from "./validParentheses";

describe("Test of ValidParentheses", () => {
  test("should '{}([])' can be Valid", () => {
    let result = ValidParentheses("{}([])");
    expect(result).toBe(true);
  });

  test("should '{[]({})}' can be Valid", () => {
    let result = ValidParentheses("{[]({})}");
    expect(result).toBe(true);
  });

  test("should '(]' can be Invalid", () => {
    let result = ValidParentheses("(]");
    expect(result).toBe(false);
  });
});
