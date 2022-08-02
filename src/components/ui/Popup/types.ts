import { ChildrenProp } from "@/shared/types"

export interface IPopupProps {
    children: ChildrenProp
    title: string
    isOpen: boolean
    changeOpen: (value: boolean) => void
}