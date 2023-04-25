import { render, screen, cleanup, fireEvent, act } from "@testing-library/react";
import SideBar from ".";

import Home from "../../../../public/assets/Home.svg"
import SideItem from "../../molecules/SideItem";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../../../App";
afterEach(cleanup);

describe("SideBar Organism test case", () => {
  test("SideBar renders succesfully", () => {
    render(<BrowserRouter>
      <SideBar width="255px" height="98vh"/>
      </BrowserRouter>
    );
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
  });
  test("SideItem  renders succesfully", () => {
    const handleClick = jest.fn();
    render(
      <BrowserRouter>
      <SideItem
      children="Home"
      src={Home}
      color="text.primary"
      variant="button2"
      handleClick={handleClick}
    />
    </BrowserRouter>
    );
    const sideelement = screen.getByText("Home");
   
    fireEvent.click(sideelement);
    expect(sideelement).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalled()
  });
  test("handles click on side items", () => {
    const setIsActive = jest.fn();
    const navigate = jest.fn();
    const { getByText } = render(
      <UserContext.Provider value={[null, setIsActive]}>
        <BrowserRouter>
        <SideBar height="100vh" width="255px"/>
        </BrowserRouter>
      </UserContext.Provider>
    );
    
    // Find the Home and Cash Acceleration side items and simulate click on them
    const homeItem = getByText("Home");
    fireEvent.click(homeItem);
    expect(setIsActive).toHaveBeenCalledWith("home");
   
  
    const cashItem = getByText("Cash Accleration");
    fireEvent.click(cashItem);
    expect(setIsActive).toHaveBeenCalledWith("cash");
    const WatchItem = getByText("Watch How to");
    fireEvent.click(WatchItem);
    expect(setIsActive).toHaveBeenCalledTimes(3)
   
  });
  
});



