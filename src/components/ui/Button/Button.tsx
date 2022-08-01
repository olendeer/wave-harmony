import { FC } from 'react'

import { IButtonProps } from './types'

import styles from './Button.module.scss'

const Button: FC<IButtonProps> = ({ children, mode = 'fill', ...props }) => {

    console.log(styles)

    return (
        <button className={[styles.button, styles['button--' + mode]].join(' ')} {...props}>
            <span>{children}</span>
        </button>
    )
}

export default Button