import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "../components/StringCalculator";

test("displays the sum when calculate button is clicked", () => {
  render(<StringCalculator />);
  fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
    target: { value: "1,2,3" },
  });
  fireEvent.click(screen.getByText("Calculate"));
  expect(screen.getByText(/Result:/).textContent).toBe("Result: 6");
});
