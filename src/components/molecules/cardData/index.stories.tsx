import CardData from ".";
import { StoryFn, StoryObj } from "@storybook/react";
import theme from "../../../theme/theme";
import { ThemeProvider } from "@mui/material";

export default {
  title: "Molecules/CardData",
  component: CardData,
};
type Story = StoryObj<typeof CardData>;
const Template: StoryFn<typeof CardData> = (args) => (
  <ThemeProvider theme={theme}>
    <CardData {...args}></CardData>
  </ThemeProvider>
);

export const cardData = Template.bind({});
cardData.args = {
  width: "45%",
};
