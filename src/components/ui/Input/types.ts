import { ChangeEvent, ReactElement } from "react";

export interface IInputProps{
    placeholder: string,
    require?: true,
    defaultValue?: string,
    type: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    icon?: ReactElement
}