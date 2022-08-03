import { FC } from "react"
import { ISectionHeaderProps } from "./types"

import styles from './SectionHeader.module.scss'

const SectionHeader: FC<ISectionHeaderProps> = ({ text, className }) => {
    return (
        <h2 className={[styles.header, className].join(' ')}>{ text }</h2>
    )
}

export default SectionHeader