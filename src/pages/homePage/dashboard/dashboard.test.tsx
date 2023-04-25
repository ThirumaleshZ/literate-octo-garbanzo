
import { act, fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import Dashboard from "..";

import { BrowserRouter } from "react-router-dom";
import Greetings from "./Date";

jest.mock("axios");


describe("Dashboard Page", () => {
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

    await act(() => render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
      
    ));
    const dashboardElement = await screen.findByTestId("dashboard");
    expect(dashboardElement).toBeInTheDocument();
    const cashKick = await screen.getByText("New Cash Kick");
    fireEvent.click(cashKick)
  });
});



describe('GreetingComponent', () => {
  it('should render "Good morning" if current time is before 12pm', () => {
    
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);

   
    const { getByText } = render(<Greetings />);

 
    expect(getByText(/Good morning/i)).toBeInTheDocument();
  });

  it('should render "Good afternoon" if current time is 12pm or after', () => {
   
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(13);

    
    const { getByText } = render(<Greetings />);

    
    expect(getByText(/Good afternoon/i)).toBeInTheDocument();

  });
});
