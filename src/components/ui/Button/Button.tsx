import { FC } from "react"

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
	...props
}) => {
	const theme = useTheme()

	return (
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
