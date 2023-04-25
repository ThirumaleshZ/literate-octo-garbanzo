import { Meta, StoryFn } from "@storybook/react";
import { MyButton } from ".";
export default {
    title:'Atoms/Buttons',
    argTypes:{
        onClick: { action: 'clicked' },
    }
} as Meta<typeof MyButton>

const Template: StoryFn<typeof MyButton> = (args) => <MyButton {...args}></MyButton>;

export const myPrimaryButton = Template.bind({});
myPrimaryButton.args={
    name:'New Cash Kick',
    variant:'contained',
    width:276,
    height:59,
    backgroundColor: '#6C5DD3',
    color:'#fff'
};

export const buttonWithBorder = Template.bind({});
buttonWithBorder.args={
    name:'New Cash Kick',
    variant:'contained',
    width:276,
    height:59,
    backgroundColor: '#6C5DD3',
    color:'#fff',
    border:'1px solid #393552'
};



