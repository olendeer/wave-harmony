
export interface IDatepickerProps{
    className?: string
    value: string
    placeholder: string
    require?: boolean 
    error?: boolean
    onChange: (value: string) => void
}