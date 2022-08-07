import { ChildrenProp } from "@/shared/types";

export interface IButtonProps{
    children: ChildrenProp,
    mode?: string,
    height?: string,
    padding?: string,
    className?: string
    onClick?: () => void
    ref?: any
}