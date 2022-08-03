
import { IIconDotProps } from './types'
import { FC } from 'react'

import styles from './IconDot.module.scss'


const IconDot: FC<IIconDotProps> = ({ icon, dot }) => {
    return (
      	<div className={styles.icon}>{icon} {dot && <span></span> } </div>
    )
}

export default IconDot