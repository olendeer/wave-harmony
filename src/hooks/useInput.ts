import { useState } from "react"
import { ChangeInput } from "@/shared/types"

export const useInput = (defaultValue: string) => {

    const [value, setValue] = useState<string>(defaultValue)

    const onChange: ChangeInput = event => setValue(event.target.value)

    const clear = () => setValue('')

    return {
        value,
        clear,
        bind: {
            value,
            onChange
        }
    }
}