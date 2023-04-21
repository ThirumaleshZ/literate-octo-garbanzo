import { render, screen } from "@testing-library/react";
import TextField from ".";

describe("TextField", () => {
  test("renders correctly", () => {
    const onChangeHandler = jest.fn();
    render(
      <TextField
        placeholder="placeholder text"
        onChange={onChangeHandler}
        value="value"
      />
    );
    const textFieldElement = screen.getByTestId("textField");
    expect(textFieldElement).toBeInTheDocument();
  });
});
