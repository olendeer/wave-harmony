import { FC } from "react"
import { IModalProps } from "./types"

import { stopPropagation } from "@/utilites/stopPropagation"

import { ReactComponent as Close } from '@/assets/svg/close.svg'

import styles from './Modal.module.scss'


const Modal: FC<IModalProps> = ({ children, isOpen, changeOpen }) => {

    const closeHandler = () => {
        changeOpen(false)
    }


    return (
        <div className={[styles.modal, isOpen ? styles['modal--open'] : ''].join(' ')} onClick={closeHandler}>
            <div className={styles.modal__content} onClick={stopPropagation}>
                {children}
                <Close onClick={closeHandler}/>
            </div>
        </div>
    )
}

export default Modal