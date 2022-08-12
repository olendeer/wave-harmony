import { FC } from "react"
import { ISocialProps } from "./types"

import styles from "./Social.module.scss"

const Social: FC<ISocialProps> = ({ children, link }) => {
	return (
		<a
			className={styles.social}
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	)
}

export default Social
