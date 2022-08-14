import { ChildrenProp } from "@/shared/types";

export type Type = 'submit' | 'reset' | 'button'

export interface IButtonProps{
    children: ChildrenProp,
    mode?: string,
    height?: string,
    padding?: string,
    className?: string
    size?: string
    style?: string
    onClick?: () => void
    type?: Type
    link?: string
}