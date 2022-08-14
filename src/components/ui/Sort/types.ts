import { ChildrenProp } from "@/shared/types"


export interface ISortProps{
    title: string
    children?: ChildrenProp
    onChange?: () => void
    className?: string
}