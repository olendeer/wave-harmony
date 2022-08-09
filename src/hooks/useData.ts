import { DataActionType, SelectorType } from "@/shared/types"
import { useAppSelector } from "@/store/hooks"
import { useEffect } from "react"


export const useData = <T>(action: DataActionType<T>, selector: SelectorType<T>) => {

    const data = useAppSelector(selector)

    useEffect(() => {
        action()
        //eslint-disable-next-line
    }, [])

    return data
}