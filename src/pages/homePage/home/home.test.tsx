import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from ".";
import Greetings from "./greetings";

describe("Home", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeInTheDocument();
  });

  test("renders greetings correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const greetingsElement = screen.getByTestId("greetings");
    expect(greetingsElement).toBeInTheDocument();
  });

  test("renders salutations correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const currentDate = new Date();

    let salutationElement;
    if (currentDate.getHours() >= 12) {
      salutationElement = screen.getByText(/good afternoon/i);
    } else {
      salutationElement = screen.getByText(/good morning/i);
    }

    expect(salutationElement).toBeInTheDocument();
  });

  test("renders home children correctly", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
    );
    const childrenElement = await screen.findByTestId("homeChildren");
    expect(childrenElement).toBeInTheDocument();
  });

  it("renders Good morning correctly", () => {
    jest.spyOn(Date.prototype, "getHours").mockReturnValue(10);
    const { getByText } = render(<Greetings />);
    expect(getByText(/Good morning/i)).toBeInTheDocument();
  });

  it("renders Good afternoon correctly", () => {
    jest.spyOn(Date.prototype, "getHours").mockReturnValue(13);
    const { getByText } = render(<Greetings />);
    expect(getByText(/Good afternoon/i)).toBeInTheDocument();
  });
});
