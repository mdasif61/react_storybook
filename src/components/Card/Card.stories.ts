import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        bg: 'bg-blue-500'
    }
}

export const Secondary:Story={
    args:{
        bg:'bg-gray-800'
    }
}

export const Danger:Story={
    args:{
        bg:'bg-red-500'
    }
}