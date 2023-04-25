import { Meta, Story } from '@storybook/react';
import ModalBox, { ModalBoxProps } from '../../organisms/ModalBox/index';

export default {
  component: ModalBox,
  title: 'organisms/ModalBox',
} as Meta;

const Template: Story<ModalBoxProps> = (args) => <ModalBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Name your cash kick',
  subHeading: 'Add a name to identify your cash kick',
  TextfieldLabel: 'Cash kick name',
  Cancelbuttonlabel: 'Cancel',
  Clickbuttonlabel:'Create cash kick',
  // modalbuttonlabel: 'Submit your credit',
};