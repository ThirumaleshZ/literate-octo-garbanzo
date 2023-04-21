import { Meta, StoryFn } from "@storybook/react";
import { ProgressBar } from ".";
export default {
    title:'Atoms/Progress Bar',
    
} as Meta<typeof ProgressBar>

const Template: StoryFn<typeof ProgressBar> = (args) => <ProgressBar {...args}></ProgressBar>;

export const progressBar = Template.bind({});
progressBar.args={
    percentage:5,
}



