
import { render, screen } from "@testing-library/react";
import { ReviewCashKick } from ".";
import { MemoryRouter } from "react-router-dom"; 
jest.mock("../../components/templates/templateDesign", () => ({
  __esModule: true,
  default: jest.fn(({ header, children }) => (
    <div>
      <div data-testid="header">{header}</div>
      <div data-testid="children">{children}</div>
    </div>
  )),
}));

describe("ReviewCashKick", () => {
  test("renders TemplateLayout with header and body components", () => {
    render(
      <MemoryRouter>
        <ReviewCashKick />
      </MemoryRouter>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("children")).toBeInTheDocument();
  });
});
