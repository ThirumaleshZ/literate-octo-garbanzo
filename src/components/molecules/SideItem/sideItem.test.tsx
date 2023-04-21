import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Sideitem from ".";
import Home from "../../../../public/assets/Home.svg"
afterEach(cleanup);
describe("Sideitem Molecule  test case", () => {
  test("SideItem(Typography and Icon ) renders succesfully", () => {
    render(
      <Sideitem
        src={Home}
        variant="title"
        children="SideItem"
      />
    );
    const sideelement = screen.getByTestId("custom-sideelement");
    expect(sideelement).toBeInTheDocument();
  });
  test("SideItem  renders succesfully", () => {
    const handleClick = jest.fn();
    render(
      <Sideitem
      children="Home"
      src={Home}
      color="text.primary"
      variant="button2"
      handleClick={handleClick}
    />
    );
    const sideelement = screen.getByText("Home");
   
    fireEvent.click(sideelement);
    expect(sideelement).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalled()
  });
});
