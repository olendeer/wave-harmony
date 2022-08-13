import { ChildrenProp } from "@/shared/types";

export interface IButtonProps{
    children: ChildrenProp,
    mode?: string,
    height?: string,
    padding?: string,
    className?: string
    size?: string
    style?: string
    onClick?: () => void
    link?: string
}