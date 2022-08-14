import { ChangeInput } from "@/shared/types";
import { ReactElement } from "react";

export interface IInputProps{
    placeholder: string,
    require?: boolean,
    defaultValue?: string,
    type: string,
    value: string,
    onChange: ChangeInput
    icon?: ReactElement,
    height?: string
    className?: string
    error?: boolean
    name?: string
}