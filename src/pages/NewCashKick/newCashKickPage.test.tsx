import { render, screen, fireEvent } from "@testing-library/react";
import TableData from "./tableData";
import HeaderComponent from "./headerComponent";
import NewCashKick from ".";
import axios, { AxiosResponse } from 'axios';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');
describe("NewCashKick  component test case", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  test("renders the component", async() => {
    render(<HeaderComponent />);
    const headerelement = screen.getByTestId("header");
    expect(headerelement).toBeInTheDocument();
    });
test("NewcashKick page renders successfully ",async ()=>{
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
jest.spyOn(axios,'get').mockResolvedValueOnce(data)

await act(() => render(<NewCashKick />));

expect(screen.getByText('New Cash Kick')).toBeInTheDocument()
const heading = screen.getByText( "Let’s setup a new cash kick to power your Saas");
expect(heading).toBeInTheDocument()
});

});