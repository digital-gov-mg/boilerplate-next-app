import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from '@/components'
import { useArgs } from '@storybook/preview-api'

const meta = {
	title: 'ThemeSwitcher',
	component: ThemeSwitcher,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		defaultTheme: ["light", "dark", "system"]	
	},
	tags: ['autodocs']
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Light = {
	args: {
		defaultTheme: 'light'	
	},
} satisfies Story

export const Dark = {
	args: {
		defaultTheme: 'dark'	
	},
} satisfies Story
