import { render, screen } from "@testing-library/dom";
import Contact from "../contact";

test("Test Contact Render", () => {
  render(<Contact />);

  const heading = screen.getByText("Contact Us");
  expect(heading).toBeInTheDocument();
});
