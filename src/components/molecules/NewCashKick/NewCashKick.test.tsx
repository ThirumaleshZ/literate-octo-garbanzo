import { render, screen } from "@testing-library/react";
import { NewCashKick } from ".";

describe("NewCashKick", () => {
  it("should render with the correct head text", () => {
    const props = {
      boxWidth: 500,
      boxHeight: 500,
      buttonName: "Get Cash",
      buttonWidth: 200,
      buttonHeight: 50,
      headText: "New Cash Advance",
      headTypographyVariant:'heading1',
      bodyTypographyVariant: "body1",
      cost: "$500"
    };
    render(<NewCashKick boxWidth={500}
        boxHeight={500}
        buttonName= "Get Cash"
        buttonWidth= {200}
        buttonHeight={ 50}
        headText= "New Cash Advance"
        headTypographyVariant='heading1'
        bodyTypographyVariant= "body1"
        handleClick={()=>{}}
        cost= "$500" />);
    const headText = screen.getByText(props.headText);
    expect(headText).toBeInTheDocument();
  });

  it("should render with the correct cost text", () => {
    const cost = "$880,000.00";
    render(
      <NewCashKick
        boxWidth={500}
        boxHeight={500}
        buttonName="Get Cash"
        buttonWidth={200}
        buttonHeight={50}
        headText="New Cash Advance"
        headTypographyVariant="heading1"
        bodyTypographyVariant="body1"
        handleClick={() => {}}
        cost={cost}
      />
    );
    const costElement = screen.getByTestId('new-cash-kick-cost');
    expect(costElement).toBeInTheDocument();
  });
  
  

  it("should render the button with the correct name", () => {
      const buttonName= "Get Cash";
    
    render(<NewCashKick boxWidth={500}
        boxHeight={500}
        buttonName= {buttonName}
        buttonWidth= {200}
        buttonHeight={ 50}
        headText= "New Cash Advance"
        headTypographyVariant='heading1'
        bodyTypographyVariant= "body1"
        handleClick={()=>{}}
        cost= "$500"  />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(buttonName);
  });
});
