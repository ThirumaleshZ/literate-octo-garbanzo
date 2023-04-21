import React from 'react'
import AvatarComponent from '.'
import { Meta, StoryFn} from '@storybook/react'
import avatar from "../../../../public/assests/avatar.svg"

export default {
    title: 'atoms/Avatar',
    component: AvatarComponent,
    
} as Meta<typeof AvatarComponent>;

const Template: StoryFn<typeof AvatarComponent> = (args) => (
    <AvatarComponent {...args} />
); 

export const avatar1 = Template.bind({});
avatar1.args = {
    src: avatar,
    alt: 'Avatar is here',
    
}



