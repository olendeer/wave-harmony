/* eslint  react-hooks/rules-of-hooks: 0 */

import { IAppFormField, IAppFormFieldsReturn, IAppFormReturn } from "@/models/forms"
import { useController, useForm } from "react-hook-form"

export function useAppForm<T>(fields : IAppFormField[]) : IAppFormReturn<T>  {
    const defaultValues = Object.fromEntries(fields.map(item => ([ item.name, item.default ])))

    const { formState: { errors },
    handleSubmit, reset, control } = useForm({ defaultValues: defaultValues })

    const formFields = {} as T

    // formFields

    for(let i = 0; i < fields.length; i++) {
        const { name, onChange, value } = useController({ control, name: fields[i].name, rules: fields[i].rules }).field
        formFields[fields[i].name] = {name, onChange, value}
    }


    return {
        fields: formFields,
        errors,
        handleSubmit,
        reset
    }
}

// export const useAppForm: IAppForm<T> = (fields) => {

//     const defaultValues = Object.fromEntries(fields.map(item => ([ item.name, item.default ])))

//     const { formState: { errors },
//     handleSubmit, reset, control } = useForm({ defaultValues: defaultValues })

//     const formFields = {} as T

//     for(let i = 0; i < fields.length; i++) {
//         const { name, onChange, value } = useController({ control, name: fields[i].name, rules: fields[i].rules }).field
//         formFields[fields[i].name] = {name, onChange, value}
//     }


//     return {
//         fields: formFields,
//         errors,
//         handleSubmit,
//         reset
//     }
// }