import { ChildrenProp } from "@/shared/types";
import { JSXElementConstructor, ReactElement } from "react";

export interface IIconDotProps {
    icon: ReactElement<any, string | JSXElementConstructor<any>>
    dot: boolean
    pt?: number
    children?: ChildrenProp
    className?: string
    onClick?: () => void | null
}