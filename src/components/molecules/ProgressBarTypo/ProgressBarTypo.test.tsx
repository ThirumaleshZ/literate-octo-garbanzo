import { render, screen } from "@testing-library/react";
import { ProgressBarWithTypo } from ".";

describe("ProgressBarWithTypo", () => {
  it("renders with given head and body text", () => {
    render(
      <ProgressBarWithTypo
        headTypographyVariant="heading1"
        headText="Head Text"
        bodyText="Body Text"
        bodyTypographyVariant="body1"
        percentage={50}
        boxWidth={340}
        boxHeight={259}
      />
    );
    expect(screen.getByText("Head Text")).toBeInTheDocument();
    expect(screen.getByText("Body Text")).toBeInTheDocument();
  });

  

  
});
