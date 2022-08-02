import { FC, useEffect } from "react"
import { IPopupProps } from "./types"
import { stopPropagation } from "@/utilites/stopPropagation"

import { ReactComponent as Close } from '@/assets/svg/close.svg'

import styles from './Popup.module.scss'

const Popup: FC<IPopupProps> = ({ title, children, isOpen, changeOpen }) => {

    const closeHandler = () => changeOpen(false)

    useEffect(() => {
        setTimeout(() => document.addEventListener('click', closeHandler))
        return () => document.removeEventListener('click', closeHandler)
        //eslint-disable-next-line
    }, [isOpen])

    return (
        <div className={styles.popup} onClick={stopPropagation}>
            <div  className={[styles['popup-content'], isOpen ? styles['popup-content--open'] : ''].join(' ')}>
                <div className={styles['popup-content__header']}> { title } <Close onClick={closeHandler}/> </div>
                <div className={styles['popup-content__body']}> 
                    { children }
                </div>
            </div>
        </div>
  )
}

export default Popup