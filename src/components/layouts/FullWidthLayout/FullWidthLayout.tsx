
import { FC } from 'react'
import { IFullWidthLayout } from './types'

import ContainerLayout from '@c/layouts/ContainerLayout/ContainerLayout'

import styles from './FullWidthLayout.module.scss'


const FullWidthLayout: FC<IFullWidthLayout> = ({ children, className }) => {
    return (
        <div className={[styles.wrapper, className].join(' ')}>
            <ContainerLayout>
                { children }
            </ContainerLayout>
        </div>
    )
}

export default FullWidthLayout