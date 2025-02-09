import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../contact";

test("Test Contact Render", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  // Assertion
  expect(button).toBeInTheDocument();
});

test("Test Contact Render", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});
test("Test Contact Render", () => {
  render(<Contact />);

  const textbox = screen.getAllByRole("textbox");
  console.log(textbox);

  // Assertion
});

test("Test Contact Render", () => {
  render(<Contact />);

  const heading = screen.getByText("Contact Us Page");

  // Assertion
  expect(heading).toBeInTheDocument();
});
