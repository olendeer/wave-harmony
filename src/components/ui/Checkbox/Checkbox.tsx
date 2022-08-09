import { FC, useId } from "react"
import { ICheckbox } from "./types"

import styles from "./Checkbox.module.scss"

const Checkbox: FC<ICheckbox> = ({ className, checked, onChange, title }) => {
	const checkbox = useId()

	return (
		<label
			className={[styles.checkbox, className].join(" ")}
			htmlFor={checkbox}
		>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				id={checkbox}
			/>
			<span className={styles.checkbox__mark}></span>
			{title}
		</label>
	)
}

export default Checkbox
