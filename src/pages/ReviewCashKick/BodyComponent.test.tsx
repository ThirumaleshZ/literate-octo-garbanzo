import { render, screen, act, fireEvent } from '@testing-library/react';
import { BodyComponent } from './BodyComponent';
import axios from 'axios';
import { MemoryRouter } from "react-router-dom"; 
jest.mock("axios");

describe('BodyComponent', () => {
  test("renders correctly", async () => {
    const data = [
      {
        name: "Contract 1",
        type: "Monthly",
        status: "Available",
        perPayment: "12000.25",
        termLength: {
          termLength: "12 months",
          termPercentage: "2.0% fee"
        },
        paymentAmount: "126722.64"
      },
      {
        name: "Contract 6",
        type: "Monthly",
        status: "Available",
        perPayment: "6000.00",
        termLength: {
          termLength: "12 months",
          termPercentage: "2.0% fee"
        },
        paymentAmount: "63360.00"
      },
    ];

    jest.spyOn(axios, "get").mockResolvedValue({ data });
    await act(() => render(<MemoryRouter>
      <BodyComponent />
    </MemoryRouter>));
    const bodyComponent = await screen.findByTestId("bodyComponent");
    expect(bodyComponent).toBeInTheDocument();
  });
});
