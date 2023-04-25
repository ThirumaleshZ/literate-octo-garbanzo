import { StoryFn, Meta } from '@storybook/react';
import { ProgressBarWithTypo } from '.';

export default {
  title: 'Molecules/ProgressBar with Typography',
  component: ProgressBarWithTypo,
} as Meta;

const Template: StoryFn<typeof ProgressBarWithTypo> = (args: any) => <ProgressBarWithTypo {...args} />;

export const progressbarWithTypo = Template.bind({});
progressbarWithTypo.args = {
    headText:'$170,454.55',
    bodyText:'Outstanding amount',
    bodyTypographyVariant:'body1',
    percentage:5,
    boxWidth:340,
    boxHeight:259
};

