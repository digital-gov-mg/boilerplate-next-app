import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@/components'

const meta = {
    title: 'ThemeProvider',
    component: ThemeProvider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
} satisfies Meta<typeof ThemeProvider>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
