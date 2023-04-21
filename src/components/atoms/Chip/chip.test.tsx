import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MUIChip from "./index";

describe("MUIChip", () => {
  it("renders with a prop", () => {
    render(<MUIChip label="label" />);
    const chipElement = screen.getByRole("chip");
    expect(chipElement).toHaveTextContent("label");
  });
});

describe("MUIChip", () => {
  it("renders with a size", () => {
    render(<MUIChip label="label" size="small" />);
    const chipElement = screen.getByRole("chip");
    expect(chipElement).toHaveClass("small");
  });
});

describe("MUIChip", () => {
  it("renders with a variant", () => {
    render(<MUIChip label="label" size="small" variant="outlined" />);
    const chipElement = screen.getByRole("chip");
    expect(chipElement).toHaveClass("outlined");
  });
});
describe("MUIChip", () => {
  it("renders with a color", () => {
    render(<MUIChip label="label" size="small" color="primary" />);
    const chipElement = screen.getByRole("chip");
    expect(chipElement).toHaveClass("primary");
  });
});
