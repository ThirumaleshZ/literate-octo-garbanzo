import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import HeaderContent from "./HeaderContent";
import BodyContent from "./BodyContent";
import axios from "axios";
import { BASE_URL } from "../../utils";


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
  it("should render HeaderComponent with props", () => {
    render(<BodyContent />);
    expect(screen.getByText("New Cash Kick")).toBeInTheDocument();
    expect(screen.getByText("Launch a new Cash Kick")).toBeInTheDocument();
    expect(screen.getByText("Cash accleration")).toBeInTheDocument();
    expect(screen.getByText("My Contract")).toBeInTheDocument();
    expect(screen.getByText("My Cash Kicks")).toBeInTheDocument();
   });

})


jest.mock("axios");
describe("BodyContent", () => {
  test("renders correctly", async () => {
    const data = [
      {
        id: 1,
        name: "Contract 1",
        type: "Monthly",
        status: "Available",
        perPayment: "12000.25",
        termLength: {
          termLength: "12 months",
          termPercentage: "2.0% fee",
        },
        totalFinanced: "-",
        paymentAmount: "126722.64",
      },
      {
        id: 2,
        name: "Contract 6",
        type: "Monthly",
        status: "Available",
        perPayment: "6000.00",
        termLength: {
          termLength: "12 months",
          termPercentage: "2.0% fee",
        },
        totalFinanced: "-",
        paymentAmount: "63360.00",
      },
      {
        id: 3,
        name: "Contract 5",
        type: "Monthly",
        status: "Available",
        perPayment: "6000.00",
        termLength: {
          termLength: "12 months",
          termPercentage: "2.0% fee",
        },
        totalFinanced: "-",
        paymentAmount: "63360.00",
      },
      {
        id: 4,
        name: "Contract 4",
        type: "Monthly",
        status: "Available",
        perPayment: "6000.00",
        termLength: {
          termLength: "12 months",
          termPercentage: "2.0% fee",
        },
        totalFinanced: "-",
        paymentAmount: "63360.00",
      },
      {
        id: 5,
        name: "Contract 3",
        type: "Monthly",
        status: "Available",
        perPayment: "6000.00",
        termLength: {
          termLength: "12 months",
          termPercentage: "2.0% fee",
        },
        totalFinanced: "-",
        paymentAmount: "63360.00",
      },
      {
        id: 6,
        name: "Contract 2",
        type: "Monthly",
        status: "Available",
        perPayment: "6000.00",
        termLength: {
          termLength: "12 months",
          termPercentage: "2.0% fee",
        },
        totalFinanced: "-",
        paymentAmount: "21120.00",
      },
    ];

    jest.spyOn(axios, "get").mockResolvedValue({ data });
    await act(() => render(<BodyContent />));
    const bodyElement = await screen.findByTestId("BodyContentTestId");
    expect(bodyElement).toBeInTheDocument();
  });

    test("decrement counter", () => {
      render(<BodyContent />);

      const btnDecrement = screen.getByText("My Contract");
      fireEvent.click(btnDecrement);

      expect(btnDecrement).toHaveTextContent("My Contract");
    });
    test("decrement counter", () => {
      render(<BodyContent />);

      const btnDecrement = screen.getByText("My Cash Kicks");
      fireEvent.click(btnDecrement);

      expect(btnDecrement).toHaveTextContent("My Cash Kicks");
    });

    jest.mock("axios");

    describe("Test Apis", () => {
      describe("getResource", () => {
        describe("with success", () => {
          const url = `${BASE_URL}contracts`;
          const onComplete = jest.fn();

          it("should call axios get with given url", () => {
            getResource(url, onComplete);
            expect(axios.get).toBeCalledWith(url);
          });
        });
      });
    });
});
function getResource(url: string, onComplete: jest.Mock<any, any, any>) {
  throw new Error("Function not implemented.");
}

