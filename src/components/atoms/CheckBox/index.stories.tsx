import Checkboxes from '.'
import { StoryObj } from '@storybook/react';
export default {
    title: 'Atoms/Checkbox',
    component: Checkboxes,
   };
type Story = StoryObj<typeof Checkboxes>;
export const CheckBox: Story = {
    args: {
         label:"checkbox ",
        },
  };
export const DisabledCheckBox: Story = {
    args: {
        disabled:true,
        label:"Disabled checkbox "
        },
  };
  export const IndeterminateCheckBox: Story = {
    args: {
        indeterminate:true,
        label:"Indeterminate checkbox "
        },
  };



