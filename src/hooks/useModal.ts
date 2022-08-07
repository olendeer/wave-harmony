import { useState } from "react"


export const useModal = () => {
    
    const [ isOpen, changeOpen ] = useState<boolean>(false)
    
    return {
        changeOpen,
        isOpen
    }
}