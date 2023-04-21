import type { Meta, StoryObj } from "@storybook/react";
import logo from "../../../../public/assets/icons/seederLogo.svg";
import Icon from "../Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const DefaultIcon: Story = {
  args: {
    src: logo,
    alt: "Default Logo",
  },
};

export const CustomSizeIcon: Story = {
  args: {
    src: logo,
    alt: "Custom Size Logo",
    height: 500,
    width: 500,
  },
};
