import React from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import HeaderContent from "./HeaderContent";
import BodyContent from "./BodyContent";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { MyButton } from "../../components/atoms/Button";

import { useNavigate } from "react-router-dom";

describe("HeaderComponent", () => {
  it("should render HeaderComponent with props", () => {
    render(<HeaderContent />);
    expect(screen.getByText("Cash accleration")).toBeInTheDocument();
    expect(
      screen.getByText("Place to create new cash kicks to run your buisness")
    ).toBeInTheDocument();
   });
})

describe("BodyContent", () => {
  it("should render BodyContent with props", () => {
    render(<BodyContent />, { wrapper: MemoryRouter });
    expect(screen.getByText("New Cash Kick")).toBeInTheDocument();
    expect(screen.getByText("Available credit")).toBeInTheDocument();
    expect(screen.getByText("Max interest rate")).toBeInTheDocument();
    expect(screen.getByText("12 months")).toBeInTheDocument();
    expect(screen.getByText("$880.0k")).toBeInTheDocument();
    expect(screen.getByText("12.00%")).toBeInTheDocument();
    expect(screen.getByText("Launch a new Cash Kick")).toBeInTheDocument();
    expect(screen.getByText("Cash accleration")).toBeInTheDocument();
    expect(screen.getByText("My Contract")).toBeInTheDocument();
    expect(screen.getByText("My Cash Kicks")).toBeInTheDocument();
  });
  it("renders without crashing", () => {
    render(<BodyContent />, { wrapper: MemoryRouter });
  });


})












