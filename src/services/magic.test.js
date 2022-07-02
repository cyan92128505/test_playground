import magicNumbers from "./magic";

test("should can be divided by 3", () => {
  let result = magicNumbers(3);
  expect(result).toContain(3);
});

test("should can be divided by 7", () => {
  let result = magicNumbers(7);
  expect(result).toContain(7);
});

test("should cannot be divided by both 3 and 7", () => {
  let result = magicNumbers(21);
  expect(result).not.toContain(21);
});