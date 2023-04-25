import { render, screen, act,waitFor, fireEvent } from '@testing-library/react';
import { BodyComponent } from './BodyComponent';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import axios from 'axios';
jest.mock("axios");
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => ({
    state: {
      selectedRows: [],
      sum: 222.22
    }
  }))
}));
describe('BodyComponent', () => {
    test("renders correctly with table data and summary box", async () => {
      const location={state:{sum:22.22}};
        const data = [
            {
                id: 1,
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
                id: 2,
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
        await act(() => render(
          <MemoryRouter>
        <BodyComponent />
        </MemoryRouter>
        ));
        const contracts = await screen.getByText(/Rate/);
        const summary = await screen.getByText(/Summary/);
        expect(contracts).toBeInTheDocument();
        expect(summary).toBeInTheDocument();
      });

      test("post request ", async () => {
        const payments = [
          {
            id: 1,
          dueDate: {
              dueDate: "Mar 03,2021",
              daysLeft: "31 day(s) from now"
            },
            status: "Upcoming",
            expectedAmount: "-14,204.55",
            outstanding: "156,250.05"
          },
          {
            id: 2,
            dueDate: {
              dueDate: "Jun 03,2021",
              daysLeft: "62 day(s) from now"
            },
            status: "Upcoming",
            expectedAmount: "-14,204.55",
            outstanding: "142,045.50"
          },
        ];
    
        jest.spyOn(axios, "post").mockResolvedValue({ payments });
        await act(() => render(
          <MemoryRouter>
        <BodyComponent />
        </MemoryRouter>
        ));
        const contracts = await screen.getByText(/Rate/);
        const summary = await screen.getByText(/Summary/);
        expect(contracts).toBeInTheDocument();
        expect(summary).toBeInTheDocument();
      });
  test('handleCreateCashOpen function', async () => {
    const mockPost = jest.fn(); 
    jest.spyOn(axios, "post").mockResolvedValue({ mockPost });
    const locationState = {
      sum: 1000,
      term: 12,
      selectedRows: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
      totalpayout: 1200,
    };
    const { getByTestId } = render(
      <MemoryRouter>
        <BodyComponent />
      </MemoryRouter>
    );
    const submitButton= await screen.getByText(/Submit Your Credit/)
    fireEvent.click(submitButton);
    const text = await screen.getByRole('button', { name: /Create Cash Kick/ });
    expect(text).toBeInTheDocument();
    fireEvent.click(text);
  });
  it("opens the cash kick modal when the submit button is clicked", async () => {
    const mockPost = jest.fn();
    jest.spyOn(axios, "post").mockResolvedValue({ mockPost });
    const locationState = {
      sum: 1000,
      term: 12,
      selectedRows: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
      totalpayout: 1200,
    };
    render(
      <MemoryRouter>
        <BodyComponent />
      </MemoryRouter>
    );
    const submitButton= await screen.getByText(/Submit Your Credit/)
    fireEvent.click(submitButton);
    const heading = await screen.findByText(/Name your cash kick/);
    const subHeading = await screen.findByText(/Add a name to identify your cash kick/);
    const createCashButton = await screen.getByRole('button', { name: /Create Cash Kick/ });
    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(createCashButton).toBeInTheDocument();
  });
});


