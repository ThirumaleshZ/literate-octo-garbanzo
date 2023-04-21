import { render, screen } from "@testing-library/react";
import Icon from ".";
import Logo from "../../../assets/icons/Seeder-Logo.svg";

describe("Icon", () => {
  test("renders correctly", () => {
    render(<Icon src={Logo} alt="Logo Icon" />);
    const iconElement = screen.getByTestId("imageIcon");
    expect(iconElement).toBeInTheDocument();
  });
});
