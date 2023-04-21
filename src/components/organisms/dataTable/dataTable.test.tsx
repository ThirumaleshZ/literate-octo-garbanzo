import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DataTable from ".";
import dbData from "../../../../db.json";
import { columnsPayments } from "./columnHeaders";

const payments = dbData["payments"];

describe("Data Table", () => {
  test("renders correctly", () => {
    render(
      <DataTable checkBox={true} columns={columnsPayments} rows={payments} />
    );
    const dtElement = screen.getByTestId("dataTable");
    expect(dtElement).toBeInTheDocument();
  });

  test("column header renders correctly", async () => {
    await act(() =>
      render(
        <DataTable checkBox={true} columns={columnsPayments} rows={payments} />
      )
    );
    const headerElement = await screen.findByText(/due date/i);
    expect(headerElement).toBeInTheDocument();
  });
  it("renders an overlay with a cheque book icon", async () => {
    const { getByTestId } = await act(() =>
      render(
        <BrowserRouter>
          <DataTable columns={columnsPayments} rows={[]} checkBox={true} />
        </BrowserRouter>
      )
    );
    const noRowsOverlay = getByTestId("noRowsOverlay");
    const icon = noRowsOverlay.querySelector("img");
    expect(noRowsOverlay).toBeInTheDocument();
  });
  test("shows the custom no rows overlay when there are no rows", async () => {
    const { getByTestId } = await act(() =>
      render(
        <BrowserRouter>
          <DataTable columns={columnsPayments} rows={[]} checkBox={true} />
        </BrowserRouter>
      )
    );
    expect(screen.getByTestId("noRowsOverlay")).toBeInTheDocument();
  });
});
