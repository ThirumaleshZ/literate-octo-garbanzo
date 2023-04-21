import { render, screen, cleanup } from "@testing-library/react";
import CheckBox from ".";
import user from "@testing-library/user-event";

afterEach(cleanup);
describe("CheckBox test case", () => {
  test("CheckBox renders succesfully", () => {
    const handleChange = jest.fn();
    render(
      <CheckBox
        label="checkbox"
        disabled={false}
        indeterminate={false}
        isChecked={false}
        handleChange={handleChange}
      />
    );
    const checkboxelement = screen.getByLabelText("checkbox");
    expect(checkboxelement).toBeInTheDocument();
  });
  test("handlechange is called when clicked", async () => {
    const handleChange = jest.fn();
    user.setup();
    render(<CheckBox isChecked={false} handleChange={handleChange} />);
    const checkboxelement = screen.getByRole("checkbox");
    await user.click(checkboxelement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  test("CheckBox is checked when true value is passed", () => {
    const handleChange = jest.fn();
    render(
      <CheckBox
        label="TrueCheckbox"
        isChecked={true}
        handleChange={handleChange}
      />
    );
    const checkboxelement = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkboxelement.checked).toBe(true);
  });
  test("CheckBox is unchecked when false value is passed", () => {
    const handleChange = jest.fn();
    render(<CheckBox isChecked={false} handleChange={handleChange} />);
    const checkboxelement = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkboxelement.checked).toBe(false);
  });
  test("CheckBox is disabled  when disabled  value is passed true", () => {
    const handleChange = jest.fn();
    render(<CheckBox disabled={true} isChecked={false} handleChange={handleChange} />);
    const checkboxelement = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkboxelement).toBeDisabled();
  });
  test("CheckBox is in indeterminate form when indeterminate  value is passed true", () => {
    const handleChange = jest.fn();
    render(<CheckBox indeterminate={true} isChecked={false} handleChange={handleChange} />);
    const checkboxelement = screen.getByRole("checkbox") as HTMLInputElement;
    const actual_value=(checkboxelement.getAttribute("data-indeterminate"))==="true"
    expect(actual_value).toEqual(true)

  });
});
