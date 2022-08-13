import { ChangeTextarea } from "@/shared/types";

export interface ITextareaProps{
    placeholder: string,
    defaultValue?: string,
    value: string,
    onChange: ChangeTextarea
    className?: string
    name?: string
}