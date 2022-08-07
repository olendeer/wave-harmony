import { ChangeInput } from "@/shared/types"
import { useState } from "react"

export const useInput = (defaultValue: string) => {

    const [value, setValue] = useState<string>(defaultValue)

    const onChange: ChangeInput = event => setValue(event.target.value)

    return {
        value,
        bind: {
            value,
            onChange
        }
    }
}