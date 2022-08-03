import { FC } from 'react'
import { iFooterColumnProps } from './types'

import styles from './FooterColumn.module.scss'

const FooterColoumn: FC<iFooterColumnProps> = ({ title, children, columns = 1 }) => {
    return (
        <div className={styles['footer__column']}>
            <span>{ title }</span>
            <div className={styles['footer__content']} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                { children }
            </div>
        </div>
    )
}

export default FooterColoumn