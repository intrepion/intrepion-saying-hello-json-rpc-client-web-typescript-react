import React from "react";
import { render, screen } from "@testing-library/react";
import GreetingForm from "./GreetingForm";

test("renders learn react link", () => {
  render(<GreetingForm />);
  const linkElement = screen.getByText(/Enter name:/i);
  expect(linkElement).toBeInTheDocument();
});
