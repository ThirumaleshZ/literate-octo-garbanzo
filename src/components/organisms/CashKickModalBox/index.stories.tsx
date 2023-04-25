import { Meta, Story } from '@storybook/react';
import CashKickModalBox, { CashKickModalBoxProps } from '../../organisms/CashKickModalBox/index';

export default {
  title: 'Organisms/CashKickModalBox',
  component: CashKickModalBox,
  argTypes: {
    heading: { control: 'text' },
    subHeading: { control: 'text' },
    TextfieldLabel: { control: 'text' },
    bodytext: { control: 'text' },
    Cancelbuttonlabel: { control: 'text' },
    Clickbuttonlabel: { control: 'text' },
  },
} as Meta;

const Template: Story<CashKickModalBoxProps> = (args) => <CashKickModalBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    heading:'Cash kick launched successfully!',
    subHeading:'We are reviewing your cash kick',
    TextfieldLabel:'Your cash kick is under review',
    bodytext:'It will remain on pending state until we review it internally. This can take upto 5 mins to couple of hours. Once reviewed, the cash will be transferred to your account and you’ll be notified.',
    Cancelbuttonlabel:'Close',
    Clickbuttonlabel:'View cash kicks'
};