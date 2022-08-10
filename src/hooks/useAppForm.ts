/* eslint  react-hooks/rules-of-hooks: 0 */

import { IAppFormField, IAppFormFieldsReturn, IAppFormReturn, IAuthForm } from "@/models/forms"
import { DeepRequired, FieldErrorsImpl, useController, UseControllerProps, useForm } from "react-hook-form"

export function useAppForm<T extends IAppFormFieldsReturn>(fields : IAppFormField[]) : IAppFormReturn<T>  {
    const defaultValues = Object.fromEntries(fields.map(item => ([ item.name, item.default ])))
    const { formState: { errors },
    handleSubmit, reset, control } = useForm({ defaultValues: defaultValues })

    const formFields: T = {} as T

    for(let i = 0; i < fields.length; i++) {

        const fieldSetting = { control, name: fields[i].name } as UseControllerProps<{ [k: string]: string | boolean | undefined; }, string>
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
        handleSubmit,
        reset
    }
}