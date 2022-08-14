import { FC, useState } from "react"

import Sort from "@c/ui/Sort/Sort"

import Checkbox from "@c/ui/Checkbox/Checkbox"

import styles from "./FilterSleeves.module.scss"

const FilterSleeves: FC = () => {
	const [value, setValue] = useState<string>("")

	const changeValue = (value: string) => {
		setValue(value)
	}

	const applyValue = () => {
		//save to store
	}

	return (
		<Sort title={"Рукава"} className={styles.filter} onChange={applyValue}>
			<Checkbox
				title="Без рукавов"
				checked={value === "sleeveless"}
				onChange={() => changeValue("sleeveless")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="Длинный рукав"
				checked={value === "long_sleeve"}
				onChange={() => changeValue("long_sleeve")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="Короткий рукав"
				checked={value === "short_sleeve"}
				onChange={() => changeValue("short_sleeve")}
				className={styles.filter__checkbox}
			/>
		</Sort>
	)
}

export default FilterSleeves
