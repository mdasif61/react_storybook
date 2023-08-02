import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta={
    title:'Components/Title',
    component:Title,
    parameters:{
        layout:'centered'
    },
    tags:['autodocs']
} satisfies Meta<typeof Title>

export default meta;
type Story=StoryObj<typeof meta>

export const Bold:Story={
    args:{
        fw:"font-bold",
        label:'This is title'
    }
}
export const SemiBold:Story={
    args:{
        fw:"font-semibold",
        label:'This is title'
    }
}
export const Base:Story={
    args:{
        fw:"text-base",
        label:'This is title'
    }
}