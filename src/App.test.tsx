import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders bingo game header", () => {
  render(<App />);
  const appHeader = screen.getByTestId("app-header");
  expect(appHeader).toHaveTextContent("Bingo");
});
