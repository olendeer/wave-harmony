import { useEffect } from "react"

import { UseOutClickHandlerType } from "@/shared/types"

export const useOutClick = (value: boolean, handler: UseOutClickHandlerType) => {

    const closeHandler = () => handler(false)

    useEffect(() => {
		setTimeout(() => document.addEventListener("click", closeHandler))
		return () => document.removeEventListener("click", closeHandler)
		//eslint-disable-next-line
	}, [value])

    return {
        closeHandler
    }
}