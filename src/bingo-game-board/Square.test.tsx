import { fireEvent, render, screen } from "@testing-library/react";
import Square from "./Square";

test("renders square with text content", () => {
  render(<Square tileText="test square" />);
  const tile = screen.getByTestId("square-tile");
  expect(tile).toHaveTextContent("test square");
});

test("Square is initially not occupied", () => {
  render(<Square tileText="test square" />);
  const tile = screen.getByTestId("square-tile");
  expect(tile).not.toHaveClass("occupied");
});

test("Square occupied class toggles on and off after click", () => {
  render(<Square tileText="test square" />);
  const tile = screen.getByTestId("square-tile");
  fireEvent(
    tile,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(tile).toHaveClass("occupied");
  fireEvent(
    tile,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(tile).not.toHaveClass("occupied");
});
