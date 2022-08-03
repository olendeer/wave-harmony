import { FC, useState, useId } from 'react'
import { IInputProps } from './types'

import styles from './Input.module.scss'

const Input: FC<IInputProps> = ({ require, defaultValue, value, onChange, placeholder, height, icon }) => {

    const [ focus, setFocus ] = useState<boolean>(false)

    const label = useId()

    const focusHandler = () => setFocus(true)
    const blurHandler = () => setFocus(false)

    return (
        <div className={[styles.input, focus ? styles['input--focus'] : ''].join(' ')} style={{ height }}>
            <label htmlFor={label} className={[styles.input__label, focus || value ? styles['input__label--focus'] : ''].join(' ')}>
                {placeholder}
                {require && <span>*</span>}
            </label>
            <div className={styles.input__field}>
                <input id={label} defaultValue={defaultValue} value={value} onChange={onChange} type="text" className={styles.input__target} onFocus={focusHandler} onBlur={blurHandler} />
                {icon}
            </div>
        </div>
    )
}

export default Input