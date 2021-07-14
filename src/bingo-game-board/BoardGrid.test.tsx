import { render, screen } from "@testing-library/react";
import { BoardGrid } from "./BoardGrid";

const testBoardWithFreeSpace = [
  "biology",
  "impress",
  "divorce",
  "refuse",
  "perform",
  "snow",
  "thick",
  "cheese",
  "chart",
  "concrete",
  "oven",
  "photograph",
  "commitment",
  "navy",
  "tumour",
  "cent",
  "cat",
  "civilization",
  "ministry",
  "marsh",
  "theorist",
  "charity",
  "bury",
  "banish",
  "free space",
];

test("renders each item in board array as square tile", () => {
  render(<BoardGrid tileList={testBoardWithFreeSpace} />);
  const squares = screen.getAllByTestId("square-tile");
  expect(squares).toHaveLength(testBoardWithFreeSpace.length);
});

test("Free space is center of board", () => {
  render(<BoardGrid tileList={testBoardWithFreeSpace} />);
  const squares = screen.getAllByTestId("square-tile");
  expect(squares[12]).toHaveTextContent("free space");
});
