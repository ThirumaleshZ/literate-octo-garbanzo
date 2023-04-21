import type { Meta, StoryObj } from '@storybook/react'
import Chip from '.'

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'default'],
      control: { type: 'radio' },
    },
    variant : {
      options: ['filled','outlined'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    text: {
      control: { type: 'text', value: '' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    label: 'Default',
    color: 'default',
  },
}
