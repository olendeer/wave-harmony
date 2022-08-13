import { FC } from "react"

import { Link } from "react-router-dom"

import { IButtonProps } from "./types"
import { useTheme } from "@/hooks/useTheme"

import styles from "./Button.module.scss"

const Button: FC<IButtonProps> = ({
	children,
	mode = "fill",
	style = "primary",
	height,
	size = "normal",
	padding,
	className,
	link = undefined,
	...props
}) => {
	const theme = useTheme()

	return link ? (
		<Link
			to={link}
			className={[
				styles.button,
				styles["button--" + mode],
				styles["button--" + style],
				styles["button--" + size],
				className,
				styles[theme],
			].join(" ")}
			style={{ height, minHeight: height, padding }}
		>
			<span>{children}</span>
		</Link>
	) : (
		<button
			className={[
				styles.button,
				styles["button--" + mode],
				styles["button--" + style],
				styles["button--" + size],
				className,
				styles[theme],
			].join(" ")}
			style={{ height, minHeight: height, padding }}
			{...props}
		>
			<span>{children}</span>
		</button>
	)
}

export default Button
