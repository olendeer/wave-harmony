import { FC, useState, useId, cloneElement, memo } from "react"
import { IInputProps } from "./types"

import styles from "./Input.module.scss"

const Input: FC<IInputProps> = memo(
	({
		require,
		defaultValue,
		value,
		onChange,
		placeholder,
		height,
		icon,
		className,
		error,
		type = "text",
	}) => {
		const [focus, setFocus] = useState<boolean>(false)
		const [visible, setVisible] = useState<boolean>(false)

		const label = useId()

		const focusHandler = () => setFocus(true)
		const blurHandler = () => setFocus(false)

		return (
			<div
				className={[
					styles.input,
					focus || value ? styles["input--focus"] : "",
					error ? styles["input--error"] : "",
					className,
				].join(" ")}
				style={{ height }}
			>
				<label
					htmlFor={label}
					className={[
						styles.input__label,
						focus || value ? styles["input__label--focus"] : "",
					].join(" ")}
				>
					{placeholder}
					{require && <span>*</span>}
				</label>
				<div className={styles.input__field}>
					<input
						id={label}
						defaultValue={defaultValue}
						value={value}
						onChange={onChange}
						data-icon={!!icon}
						type={
							type === "password"
								? visible
									? "text"
									: type
								: type
						}
						className={styles.input__target}
						onFocus={focusHandler}
						onBlur={blurHandler}
					/>
					{type === "password" && icon
						? cloneElement(icon, {
								onClick: () => setVisible((prev) => !prev),
								className: visible ? styles["icon--hide"] : "",
						  })
						: icon}
				</div>
			</div>
		)
	}
)

export default Input
