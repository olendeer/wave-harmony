/* eslint  react-hooks/rules-of-hooks: 0 */

import { IAppFormField, IAppFormFieldsReturn, FormDataSubmitHandler } from "@/models/forms"
import { DeepPartial, DeepRequired, FieldErrorsImpl, useController, UseControllerProps, useForm, UseFormHandleSubmit } from "react-hook-form"

export function useAppForm<T extends IAppFormFieldsReturn>(fields : IAppFormField[]) {
    const defaultValues = Object.fromEntries(fields.map(item => ([ item.name, item.default ]))) as FormDataSubmitHandler<T>

    const { formState: { errors },
    handleSubmit, reset, control } = useForm({ defaultValues: defaultValues as DeepPartial<T> })


    const formFields: T = {} as T

    for(let i = 0; i < fields.length; i++) {

        const fieldSetting = { control, name: fields[i].name } as unknown as UseControllerProps<{ [k: string]: string | boolean | undefined; }, string>
        if(fields[i].rules){
            fieldSetting.rules = fields[i].rules
        }

        const { name, onChange, value } = useController(fieldSetting).field
        
        const key: keyof T = fields[i].name as keyof T
        
        formFields[key] = { name, onChange, value } as T[keyof T]
    }

    return {
        fields: formFields,
        errors: errors as FieldErrorsImpl<DeepRequired<T>>,
        handleSubmit: handleSubmit  as unknown as UseFormHandleSubmit<FormDataSubmitHandler<T>>,
        reset
    }
}