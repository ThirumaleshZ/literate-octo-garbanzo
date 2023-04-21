import { render, screen, cleanup } from "@testing-library/react";
import CardItem from ".";
import percentage from "../../../../public/assets/icons/percentage-square.svg"
afterEach(cleanup);
describe("Card Item Molecule  test case", () => {
  test("Card Item renders succesfully", () => {
    render(
      <CardItem ischip={false}
      src={percentage}
      heading1="Term Cap"
   textdata="12 months"
    />
    );
    const cardelement = screen.getByTestId("custom-card");
    expect(cardelement).toBeInTheDocument();
  });
});

