import { ChildrenProp } from "@/shared/types";

export interface IModalProps {
    children: ChildrenProp,
    isOpen: boolean,
    changeOpen: (value: boolean) => void
}