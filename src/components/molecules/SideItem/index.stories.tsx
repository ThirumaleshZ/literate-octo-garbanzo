
import Sideitem from '.';
import { StoryFn, StoryObj } from '@storybook/react';
import theme from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';

export default {
    title: 'Molecules/SideItem',
    component: Sideitem,
   };
type Story = StoryObj<typeof Sideitem>;
const Template: StoryFn<typeof Sideitem> = (args) =><ThemeProvider theme={theme}> <Sideitem {...args}></Sideitem></ThemeProvider>;

export const SideItem = Template.bind({});
SideItem.args={
children:"side item ",
variant:'title',
color:"text.primary"
};




