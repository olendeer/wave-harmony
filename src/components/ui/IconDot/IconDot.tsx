import { IIconDotProps } from "./types"
import { FC } from "react"

import styles from "./IconDot.module.scss"

const IconDot: FC<IIconDotProps> = ({ icon, dot, pt }) => {
	return (
		<div className={styles.icon} style={{ paddingTop: pt + "px" }}>
			{icon} {dot && <span></span>}{" "}
		</div>
	)
}

export default IconDot
