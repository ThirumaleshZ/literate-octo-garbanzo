import { render, screen, cleanup } from "@testing-library/react";
import CardData from ".";

afterEach(cleanup);
describe("Card Data Molecule  test case", () => {
  test("Card Data renders succesfully", () => {
    render(
      <CardData
      width="55%"
    />
    );
    const cardelement = screen.getByTestId("carddata");
    expect(cardelement).toBeInTheDocument();
  });
});

