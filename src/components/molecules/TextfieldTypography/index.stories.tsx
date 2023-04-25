
import { StoryFn, Meta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import TextFieldTypography, { TextFieldTypographyProps } from '../../molecules/TextfieldTypography/index';

export default {
title: 'Molecules/TextFieldTypography',
component: TextFieldTypography,
} as Meta;

const Template: StoryFn<TextFieldTypographyProps> = (args) => <TextFieldTypography {...args} />;

export const TextFieldWithTypography = Template.bind({});
TextFieldWithTypography.args = {
    label: 'Contact Information',
    variant: 'heading1',
    placeholder : 'placeholder text',
};




