import { ChangeInput } from "@/shared/types"
import { DeepRequired, FieldErrorsImpl, UseFormHandleSubmit, UseFormReset } from "react-hook-form"

export interface IAppFormField {
    default?: string
    name: string
    rules: object
} 

export interface IAppFormFieldReturn {
    value: string
    name: string
    onChange: ChangeInput
} 

export interface IAppFormFieldsReturn{
    [k: string]: IAppFormFieldReturn
}

export interface IAppFormReturn<T> {
    handleSubmit: UseFormHandleSubmit<{
        [k: string]: string | undefined;
    }>
    errors: FieldErrorsImpl<DeepRequired<{
        [k: string]: string | undefined;
    }>>
    reset: UseFormReset<{
        [k: string]: string | undefined;
    }>

    fields: T
}

// export type IAppForm<T> = (fields: IAppFormField[]) => {
//     handleSubmit: UseFormHandleSubmit<{
//         [k: string]: string | undefined;
//     }>
//     errors: FieldErrorsImpl<DeepRequired<{
//         [k: string]: string | undefined;
//     }>>
//     reset: UseFormReset<{
//         [k: string]: string | undefined;
//     }>

//     fields: T

// } 


// forms

export interface IAuthForm {
    email: IAppFormFieldReturn
    password: IAppFormFieldReturn
}
