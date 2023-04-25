import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Slide, { SliderProps } from '../Slider';

export default {
  component: Slide,
  title: 'Atoms/Slide',
} as Meta;

const Template: StoryFn<SliderProps> = (args:any) => <Slide {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  maxValue: 100,
  onChange: (value: number) => `${value}%`,
  onSliderChange: (e: any) => console.log('Slider value changed', e.target.value),
};
