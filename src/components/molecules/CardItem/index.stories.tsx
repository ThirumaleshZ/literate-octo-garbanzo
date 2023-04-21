
import CardItem from '.';
import { StoryFn, StoryObj } from '@storybook/react';
import theme from '../../../theme/theme';
import { ThemeProvider } from '@mui/material';
import calendar from "../../../../public/assets/icons/calendar.svg"
import document from "../../../../public/assets/icons/document-download.svg"
import percentage from "../../../../public/assets/icons/percentage-square.svg"
export default {
    title: 'Molecules/CardItem',
    component: CardItem
   };
type Story = StoryObj<typeof CardItem>;
const Template: StoryFn<typeof CardItem> = (args) =><ThemeProvider theme={theme}> <CardItem {...args}></CardItem></ThemeProvider>;

export const CardItem1= Template.bind({});
CardItem1.args={
    src:calendar,
    heading1:'Term cap',
 textdata:'12 months'
};
export const CardItem2= Template.bind({});
CardItem2.args={
    src:document,
    heading1:'Available credit',
 textdata:'$880.0K'
};
export const CardItem3= Template.bind({});
CardItem3.args={
    src:percentage,
    heading1:'Max interest rate',
 textdata:'12.00%'
};




