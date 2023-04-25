import { Meta, StoryFn } from '@storybook/react';
import Profile from '../../molecules/Profile';

export default {
  title: 'Molecules/Profile',
  component: Profile,
} as Meta;

const Template: StoryFn = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {}