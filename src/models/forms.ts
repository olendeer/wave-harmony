import { ChangeInput } from "@/shared/types"
import { DeepRequired, FieldErrorsImpl, UseFormHandleSubmit, UseFormReset } from "react-hook-form"

export interface IAppFormField {
    default: string | boolean
    name: string
    rules?: object
} 

export interface IAppFormFieldReturn {
    name: string
    onChange: ChangeInput
}

export interface IAppFormFieldCheckboxReturn extends IAppFormFieldReturn{
    value: boolean
} 

export interface IAppFormFieldInputReturn extends IAppFormFieldReturn{
    value: string
}

export interface IAppFormFieldsReturn{
    [k: string]: IAppFormFieldInputReturn | IAppFormFieldCheckboxReturn
}

export type FormDataSubmitHandler<U extends IAppFormFieldsReturn> = {
    [k in keyof U ] : U[k]['value']
}



// forms

export interface IAuthForm extends IAppFormFieldsReturn{
    email: IAppFormFieldInputReturn
    password: IAppFormFieldInputReturn
    remind: IAppFormFieldCheckboxReturn
}

export interface IRegisterForm extends IAppFormFieldsReturn{
    name: IAppFormFieldInputReturn
    sirname: IAppFormFieldInputReturn
    email: IAppFormFieldInputReturn
    phone: IAppFormFieldInputReturn
    password: IAppFormFieldInputReturn
    subscribe: IAppFormFieldCheckboxReturn
}

export interface IRemindForm extends IAppFormFieldsReturn{
    phone: IAppFormFieldInputReturn
}