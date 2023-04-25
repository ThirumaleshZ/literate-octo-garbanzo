import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "./headerComponent";
import { BrowserRouter } from "react-router-dom";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from 'axios';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewCashKick from ".";
import { MyButton } from "../../components/atoms/Button";

jest.mock('axios');

describe("HeaderComponent", () => {
  test('renders HeaderComponent without crashing', () => {
    render(
      <BrowserRouter><HeaderComponent /></BrowserRouter>
      );
  });
  test('header Stack has a data-testid of "header"', () => {
    const { getByTestId } = render(<BrowserRouter><HeaderComponent /></BrowserRouter>);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  test('displays "New Cash Kick" and "Let\'s setup a new cash kick..." texts', () => {
    const { getByText } = render(<BrowserRouter><HeaderComponent /></BrowserRouter>);
    expect(getByText('New Cash Kick')).toBeInTheDocument();
    expect(getByText("Let’s setup a new cash kick to power your Saas")).toBeInTheDocument();
  });


  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders HeaderComponent component", () => {
    render(<BrowserRouter><HeaderComponent /></BrowserRouter>);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("NewCashKick page renders successfully", async () => {
    const data = [
      {
        "id": 1,
        "name": "Contract 1",
        "type": "Monthly",
        "status": "Available",
        "perPayment": "12000.25",
        "termLength": {
          "termLength": "12 months",
          "termPercentage": "2.0% fee"
        },
        "totalFinanced": "-",
        "paymentAmount": "126722.64"
      },
      {
        "id": 2,
        "name": "Contract 6",
        "type": "Monthly",
        "status": "Available",
        "perPayment": "6000.00",
        "termLength": {
          "termLength": "12 months",
          "termPercentage": "2.0% fee"
        },
        "totalFinanced": "-",
        "paymentAmount": "63360.00"
      }
    ];

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });

    await act(async () => {
      render(<BrowserRouter><NewCashKick /></BrowserRouter>);
 });
});
it('should call the navigate function with -1 when the button is clicked', () => {
  const navigateMock = jest.fn();
  render(
    <MyButton
      icon={<KeyboardBackspaceIcon />}
  
      name="Back"
      height={31}
      width={87}
      variant="contained"
      sx={{
        textTransform: "none",
        fontWeight: "600",
        fontSize: "16px",
        border: "1px solid #28272B",
      }}
      onClick={() => navigateMock(-1)}
    />
  );

  const button = screen.getByRole('button', { name: 'Back' });
  fireEvent.click(button);
  expect(navigateMock).toHaveBeenCalledWith(-1);
});
});