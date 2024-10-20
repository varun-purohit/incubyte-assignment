import { add } from "../utils/string.ts";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the sum for comma-separated numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles newlines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("handles custom delimiters", () => {
  expect(add("//;\n1;2;3")).toBe(6);
});

test("throws error for negative numbers", () => {
  expect(() => add("-1,2,-3")).toThrow("Negative numbers not allowed: -1, -3");
});

test("should handle new lines and commas", () => {
  expect(add("1\n2,3")).toBe(6); // This should pass now
});
