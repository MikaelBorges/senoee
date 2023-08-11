import { render, screen } from "@testing-library/react";
import { Story } from "./story";

const fakeStory = {
  by: "Daniel",
  descendants: 2,
  id: "2352343",
  kids: [4354345, 436346],
  score: 3,
  time: 436347645,
  title: "Google imagine the future of medecine",
  type: "story",
  url: "https://example.com",
};

test("story", () => {
  render(<Story story={fakeStory} />);
  const authorText = screen.getByText("Daniel");
  expect(authorText).toBeInTheDocument();
});
