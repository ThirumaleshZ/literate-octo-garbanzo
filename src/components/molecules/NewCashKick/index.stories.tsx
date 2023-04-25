import { StoryFn, Meta } from '@storybook/react';
import { NewCashKick } from '.';

export default {
  title: 'Molecules/New Cash Kick',
  component: NewCashKick,
} as Meta;

const Template: StoryFn<typeof NewCashKick> = (args: any) => <NewCashKick {...args} />;

export const typographyWithButton = Template.bind({});
typographyWithButton.args = {
    boxWidth:340,
    boxHeight:257,
    buttonName:'New Cash Kick',
    buttonWidth:276,
    buttonHeight:59,
    headText:'Launch a new Cash Kick',
    headTypographyVariant:'heading1',
    cost:'$880,000.00',
    bodyTypographyVariant:'body1'
};

