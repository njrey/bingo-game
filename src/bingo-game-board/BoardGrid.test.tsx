import { render, screen } from "@testing-library/react";
import { BoardGrid } from "./BoardGrid";
import { testBoardWithFreeSpace } from "./boards";

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
