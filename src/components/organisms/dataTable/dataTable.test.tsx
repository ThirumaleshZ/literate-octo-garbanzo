import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DataTable, { customNoRowsOverlay } from ".";
import dbData from "../../../../db.json";
import { columnsPayments } from "./columnHeaders";

const payments = dbData["payments"];

describe("Data Table", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <DataTable checkBox={true} columns={columnsPayments} rows={payments} />
      </BrowserRouter>
    );
    const dtElement = screen.getByTestId("dataTable");
    expect(dtElement).toBeInTheDocument();
  });

  test("render noRowsOverlay correctly", () => {
    render(<BrowserRouter>{customNoRowsOverlay()}</BrowserRouter>);
    const noRowsOverlayElement = screen.getByTestId("noRowsOverlay");
    expect(noRowsOverlayElement).toBeInTheDocument();
  });

  test("renders onRowSelectionModelChange correctly", () => {
    const setSelectedContractsMock = jest.fn();
    render(
      <BrowserRouter>
        <DataTable
          checkBox={true}
          columns={columnsPayments}
          rows={payments}
          setSelectedContracts={setSelectedContractsMock}
        />
      </BrowserRouter>
    );
    const dtElement = screen.getByTestId("dataTable");
    expect(dtElement).toBeInTheDocument();
  });
});
