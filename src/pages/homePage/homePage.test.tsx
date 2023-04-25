import { act, render, screen } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from ".";

jest.mock("axios");

describe("Home Page", () => {
  test("renders correctly", async () => {
    const data = [
      {
        id: 1,
        dueDate: {
          dueDate: "Mar 03,2021",
          daysLeft: "31 day(s) from now",
        },
        status: "Upcoming",
        expectedAmount: "-14,204.55",
        outstanding: "156,250.05",
      },
      {
        id: 2,
        dueDate: {
          dueDate: "Jun 03,2021",
          daysLeft: "62 day(s) from now",
        },
        status: "Upcoming",
        expectedAmount: "-14,204.55",
        outstanding: "142,045.50",
      },
    ];

    jest.spyOn(axios, "get").mockResolvedValue({ data });
    const setState = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce((initState) => [initState, setState]);
    await act(() =>
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
    );
    const homePageElement = screen.getByTestId("homePage");
    expect(homePageElement).toBeInTheDocument();
  });

  test("renders dashboard correctly", async () => {
    const data = [
      {
        id: 1,
        dueDate: {
          dueDate: "Mar 03,2021",
          daysLeft: "31 day(s) from now",
        },
        status: "Upcoming",
        expectedAmount: "-14,204.55",
        outstanding: "156,250.05",
      },
      {
        id: 2,
        dueDate: {
          dueDate: "Jun 03,2021",
          daysLeft: "62 day(s) from now",
        },
        status: "Upcoming",
        expectedAmount: "-14,204.55",
        outstanding: "142,045.50",
      },
    ];

    jest.spyOn(axios, "get").mockResolvedValue({ data });
    await act(() =>
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
    );
    const dashboardElement = await screen.findByTestId("dashboard");
    expect(dashboardElement).toBeInTheDocument();
  });
});
