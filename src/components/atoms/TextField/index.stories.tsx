import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../TextField";

const meta: Meta<typeof TextField> = {
  title: "Atoms/TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const DefaultTextField: Story = {
  args: {
    placeholder: "placeholder value",
  },
};

export const CustomWidthTextField: Story = {
  args: {
    placeholder: "placeholder text",
    width: 500,
  },
};
