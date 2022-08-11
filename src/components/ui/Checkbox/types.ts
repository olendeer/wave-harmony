import { ChangeInput } from "@/shared/types"


export interface ICheckbox{
    className? : string
    title: string
    checked: boolean
    value?: string | boolean
    // onChange: () => void
    onChange: ChangeInput
}