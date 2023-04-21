import React from "react";
import { render, screen } from "@testing-library/react";

import AvatarComponent from ".";

describe("AvatarComponent", () => {
  test("image render correctly", () => {
    render(<AvatarComponent src="image" alt="avatar is here" />);

    const ImageElement = screen.getByRole("img");
    expect(ImageElement).toBeInTheDocument();
  });

  test("avatarid render correctly", () => {
    render(<AvatarComponent src="dd" alt="ss" />);
    const AvatarId = screen.getByTestId("avatarid");
    expect(AvatarId).toBeInTheDocument();
  });
});
