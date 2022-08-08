import { ChildrenProp } from "@/shared/types";

export interface IIconDotProps {
    icon: ChildrenProp
    dot: boolean
    pt?: number
    children?: ChildrenProp
    className?: string
    onClick?: () => void | null
}