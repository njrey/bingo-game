import { fireEvent, render, screen } from "@testing-library/react";
import { BoardSetup } from "./BoardSetup";

test("renders BoardSetup component", () => {
  render(<BoardSetup handleTilesTextChange={() => {}} />);
  const setup = screen.getByTestId("board-setup");
  expect(setup).toHaveTextContent("Setup");
});

test("When setup-btn is clicked and length !==25, alert", () => {
  jest.spyOn(window, "alert").mockImplementation(() => {});

  render(<BoardSetup handleTilesTextChange={() => {}} />);
  const setupBtn = screen.getByTestId("setup-btn");
  fireEvent(
    setupBtn,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(window.alert).toHaveBeenCalled();
});
