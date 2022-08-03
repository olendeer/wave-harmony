import { FC } from "react"
import { IFooterSocialProps } from "./types"

import styles from './FooterSocial.module.scss'

const FooterSocial: FC<IFooterSocialProps> = ({ children, link }) => {
    return (
        <a className={styles.social} href={link}>
            {children}
        </a>
    )
}

export default FooterSocial