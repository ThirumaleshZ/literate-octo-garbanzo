import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TypoGraphy, { TypoGraphyProps } from '../../atoms/TypoGraphy/index';

export default {
  title: 'Atoms/TypoGraphy',
  component: TypoGraphy,
} as Meta;

const Template: StoryFn<TypoGraphyProps> = (args: any) => <TypoGraphy {...args} />;

export const typoGraphyAtom = Template.bind({});
typoGraphyAtom.args = {
  label: `I'm Typography Atom`
};

