import { IIconDotProps } from "./types"
import React, { FC } from "react"

import styles from "./IconDot.module.scss"

const IconDot: FC<IIconDotProps> = ({
	icon,
	dot,
	pt,
	children,
	className = "",
	onClick = null,
}) => {
	return (
		<div
			className={[styles.icon, className].join(" ")}
			style={{ paddingTop: pt + "px" }}
		>
			{onClick ? React.cloneElement(icon, { onClick }) : icon}{" "}
			{dot && <span></span>} {children}
		</div>
	)
}

export default IconDot
