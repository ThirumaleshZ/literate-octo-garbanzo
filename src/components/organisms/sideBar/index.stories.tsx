import { ThemeProvider } from "@emotion/react";
import SideBar from ".";
import { StoryFn, StoryObj } from "@storybook/react";
import theme from "../../../theme/theme";

export default {
  title: "Organisms/SideBar",
  component: SideBar,
};
type Story = StoryObj<typeof SideBar>;
const Template: StoryFn<typeof SideBar> = (args) => (
  <ThemeProvider theme={theme}>
    <SideBar {...args}></SideBar>
  </ThemeProvider>
);

export const Sidebar = Template.bind({});
Sidebar.args = {
  height: "98vh",
  width:"200px"
};
