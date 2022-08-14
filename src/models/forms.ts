import { ChangeDatepicker, ChangeInput, ChangeTextarea } from "@/shared/types"
import { DeepRequired, FieldErrorsImpl, UseFormHandleSubmit, UseFormReset } from "react-hook-form"

export interface IAppFormField {
    default: string | boolean
    name: string
    rules?: object
} 

export interface IAppFormFieldReturn<T> {
    name: string
    onChange: T
}

export interface IAppFormFieldCheckboxReturn extends IAppFormFieldReturn<ChangeInput>{
    value: boolean
} 

export interface IAppFormFieldInputReturn extends IAppFormFieldReturn<ChangeInput>{
    value: string
}

export interface IAppFormFieldTextareaReturn extends IAppFormFieldReturn<ChangeTextarea>{
    value: string
}

export interface IAppFormFieldDatepickerReturn extends IAppFormFieldReturn<ChangeDatepicker>{
    value: string
}

export interface IAppFormFieldsReturn{
    [k: string]: IAppFormFieldInputReturn | IAppFormFieldCheckboxReturn | IAppFormFieldTextareaReturn | IAppFormFieldDatepickerReturn
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

export interface ICreateCertificateForm extends IAppFormFieldsReturn{
    price: IAppFormFieldInputReturn
    email: IAppFormFieldInputReturn
    get_email: IAppFormFieldInputReturn
    phone: IAppFormFieldInputReturn
    date: IAppFormFieldDatepickerReturn
    message: IAppFormFieldTextareaReturn
}