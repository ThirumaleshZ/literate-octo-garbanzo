import { act, render, screen } from "@testing-library/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Home from ".";
import Greetings from "./greetings";

jest.mock("axios");

describe("Home", () => {
  test("renders correctly", async () => {
    const data = {
      totalAmount: "$1234567890",
    };
    jest.spyOn(axios, "get").mockResolvedValue({ data });
    await act(() =>
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
    );
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeInTheDocument();
  });

  test("renders home children correctly", async () => {
    const data = {
      totalAmount: "$1234567890",
    };
    jest.spyOn(axios, "get").mockResolvedValue({ data });
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

  test("renders Good morning correctly", () => {
    jest.spyOn(Date.prototype, "getHours").mockReturnValue(10);
    const { getByText } = render(
      <BrowserRouter>
        <Greetings />
      </BrowserRouter>
    );
    expect(getByText(/Good morning/i)).toBeInTheDocument();
  });

  test("renders Good afternoon correctly", () => {
    jest.spyOn(Date.prototype, "getHours").mockReturnValue(13);
    const { getByText } = render(
      <BrowserRouter>
        <Greetings />
      </BrowserRouter>
    );
    expect(getByText(/Good afternoon/i)).toBeInTheDocument();
  });
});
