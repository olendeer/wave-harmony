import { FC, memo, useState } from "react"
import { ITextareaProps } from "./types"

import styles from "./Textarea.module.scss"

const Textarea: FC<ITextareaProps> = memo(
	({ defaultValue = "", value, onChange, placeholder, className, name }) => {
		const [focus, setFocus] = useState<boolean>(false)

		const focusHandler = () => setFocus(true)
		const blurHandler = () => setFocus(false)

		return (
			<textarea
				className={[
					styles.textarea,
					focus || value ? styles["textarea--focus"] : "",
					className,
				].join(" ")}
				name={name}
				cols={30}
				rows={10}
				value={value}
				onChange={onChange}
				onFocus={focusHandler}
				onBlur={blurHandler}
				placeholder={placeholder}
			>
				{defaultValue}
			</textarea>
		)
	}
)

export default Textarea
