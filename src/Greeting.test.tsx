import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders hello world", () => {
  render(<Greeting greeting="Hello, World!" />);
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});
