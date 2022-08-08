import { IIconDotProps } from "./types"
import { FC } from "react"

import styles from "./IconDot.module.scss"

const IconDot: FC<IIconDotProps> = ({
	icon,
	dot,
	pt,
	children,
	className = "",
}) => {
	return (
		<div
			className={[styles.icon, className].join(" ")}
			style={{ paddingTop: pt + "px" }}
		>
			{icon} {dot && <span></span>} {children}
		</div>
	)
}

export default IconDot
