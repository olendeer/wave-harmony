import { ChangeInput } from "@/shared/types";


export interface IDateModalProps{
    isOpen: boolean,
    changeOpen: (value: boolean) => void
    value: string,
    onChange: (value: string) => void
}