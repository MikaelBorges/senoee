import { render, screen } from "@testing-library/react";
import { Button } from "./button";

const fakeActionClick = jest.fn();

test("Button Text", () => {
  render(
    <Button actionOnClick={fakeActionClick} classname="button-text">
      More
    </Button>
  );
  const moreText = screen.getByText("More");
  expect(moreText).toBeInTheDocument();
});
