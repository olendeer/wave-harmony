import { FC, useState } from "react"
import { IDatepickerProps } from "./types"

import styles from "./DatePicker.module.scss"
import DateModal from "@c/modals/DateModal/DateModal"

const DatePicker: FC<IDatepickerProps> = ({
	className,
	value,
	onChange,
	placeholder,
	require,
	error,
}) => {
	const [focus, setFocus] = useState<boolean>(false)

	const focusHandler = () => setFocus(true)
	const blurHandler = () => setFocus(false)

	return (
		<div
			className={[
				styles.datepicker,
				focus || value ? styles["datepicker--focus"] : "",
				error ? styles["datepicker--error"] : "",
				className,
			].join(" ")}
			onClick={focusHandler}
		>
			<label
				// htmlFor={label}
				className={[
					styles.datepicker__label,
					focus || value ? styles["datepicker__label--focus"] : "",
				].join(" ")}
			>
				{placeholder}
				{require && <span>*</span>}
			</label>
			<div className={styles.datepicker__field}>{value}</div>
			<DateModal
				changeOpen={setFocus}
				isOpen={focus}
				onChange={onChange}
				value={value}
			/>
		</div>
	)
}

export default DatePicker
