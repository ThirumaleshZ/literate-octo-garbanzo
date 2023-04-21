import { render, screen, cleanup, fireEvent, act } from "@testing-library/react";
import SideBar from ".";

import Home from "../../../../public/assets/Home.svg"
import SideItem from "../../molecules/SideItem";
import React from "react";
afterEach(cleanup);

describe("SideBar Organism test case", () => {
  test("SideBar renders succesfully", () => {
    render(
      <SideBar width="255px" height="98vh"/>
    );
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
  });
  test("SideItem  renders succesfully", () => {
    const handleClick = jest.fn();
    render(
      <SideItem
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
  
  test("SideItem Home renders succesfully", () => {
    const setState = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce((initState)=> [initState, setState]);
  render(<SideBar width="255px" height="100vh"/>);
  const button = screen.getByText('Home');
  act(() => fireEvent.click(button));
  expect(setState).toHaveBeenCalled();
  }) 
  test("SideItem cash Acceleartion  renders succesfully", () => {
    const setState = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce((initState)=> [initState, setState]);
  render(<SideBar width="255px" height="100vh"/>);
  const button = screen.getByText('Cash Accleration');
  act(() => fireEvent.click(button));
  expect(setState).toHaveBeenCalled();
  }) 
  test("SideItem watch How to  renders succesfully", () => {
    const setState = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce((initState)=> [initState, setState]);
  render(<SideBar width="255px" height="100vh"/>);
  const button = screen.getByText('Watch How to');
  act(() => fireEvent.click(button));
  expect(setState).toHaveBeenCalled();
  })
  
 
});
