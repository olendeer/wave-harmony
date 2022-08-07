import { ChildrenProp } from "@/shared/types";

export interface IModalProps {
    children: ChildrenProp,
    className?: string,
    isOpen: boolean,
    changeOpen: (value: boolean) => void
}