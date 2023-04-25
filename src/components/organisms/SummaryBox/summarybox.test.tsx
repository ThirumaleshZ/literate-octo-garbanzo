import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SummaryBox from "./index";
import React from "react";

describe("SummaryBox", () => {
  it("renders with a button", () => {
    render(
      <SummaryBox
        term={0}
        selectedcontract={0}
        paybackamount={"0"}
        rate={"0"}
        slider={false}
        buttonlabel={"Review You Credit"}
        totallabel={"Total Payable"}
        value={0} boxheight={""} ratepercentage={""} totalselectedvalue={""}      />
    );
    const chipElement = screen.getByRole("SummaryBox");
    expect(chipElement).toHaveClass("Review You Credit");
  });
});

describe("SummaryBox", () => {
  it("renders with a total amount", () => {
    render(
      <SummaryBox
        term={0}
        selectedcontract={0}
        paybackamount={"0"}
        rate={"0"}
        slider={false}
        buttonlabel={"Review You Credit"}
        totallabel={"Total Payable"}
        value={0}
        boxheight={""}
        ratepercentage={""}
        totalselectedvalue={""}
      />
    );
    const chipElement = screen.getByRole("SummaryBox");
    expect(chipElement).toHaveClass("Total Payable");
  });
});
