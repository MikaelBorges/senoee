import { render, screen } from "@testing-library/react";
import { CenteredMessage } from "./centeredMessage";

test("Centered Message is Error", () => {
  render(<CenteredMessage isError text="error, something went wrong" />);
  const errorText = screen.getByText("error, something went wrong");
  expect(errorText).toBeInTheDocument();
});

test("Centered Message is loading", () => {
  render(<CenteredMessage isError={false} text="loading..." />);
  const loadingText = screen.getByText("loading...");
  expect(loadingText).toBeInTheDocument();
});
