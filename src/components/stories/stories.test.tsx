import { render, screen } from "@testing-library/react";
import { Stories } from "./stories";

const fakeStories = [
  {
    by: "Jack",
    descendants: 4,
    id: "3523534",
    kids: [35436, 345436],
    score: 2,
    time: 3634,
    title: "A new car is developed by Tesla",
    type: "story",
    url: "https://example.com",
  },
  {
    by: "Daniel",
    descendants: 2,
    id: "2352343",
    kids: [4354345, 436346],
    score: 3,
    time: 436347645,
    title: "Google imagine the future of medecine",
    type: "story",
    url: "https://example.com",
  },
];

const fakeFetch = jest.fn();

test("authors", () => {
  render(<Stories topStories={fakeStories} fetchData={fakeFetch} />);
  const authorTextOne = screen.getByText("Jack");
  expect(authorTextOne).toBeInTheDocument();
  const authorTextTwo = screen.getByText("Daniel");
  expect(authorTextTwo).toBeInTheDocument();
});
