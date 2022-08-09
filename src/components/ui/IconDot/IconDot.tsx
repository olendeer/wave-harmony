import { FC } from "react"

import { IIconDotProps } from "./types"

import { useTheme } from "@/hooks/useTheme"

import styles from "./IconDot.module.scss"

const IconDot: FC<IIconDotProps> = ({
	icon,
	dot,
	pt,
	children,
	className = "",
}) => {
	const theme = useTheme()

	return (
		<div
			className={[styles.icon, className, styles[theme]].join(" ")}
			style={{ paddingTop: pt + "px" }}
		>
			{icon} {dot && <span></span>} {children}
		</div>
	)
}

export default IconDot
