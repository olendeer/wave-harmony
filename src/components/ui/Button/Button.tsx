import { FC } from "react";

import { IButtonProps } from "./types";

import styles from "./Button.module.scss";

const Button: FC<IButtonProps> = ({
	children,
	mode = "fill",
	height,
	padding,
	className,
	...props
}) => {
	return (
		<button
			className={[
				styles.button,
				styles["button--" + mode],
				className,
			].join(" ")}
			style={{ height, minHeight: height, padding }}
			{...props}
		>
			<span>{children}</span>
		</button>
	);
};

export default Button;
