import { FC, useState } from "react"

import Sort from "@c/ui/Sort/Sort"

import Checkbox from "@c/ui/Checkbox/Checkbox"

import styles from "./FilterSizes.module.scss"

const FilterSizes: FC = () => {
	const [value, setValue] = useState<string>("")

	const changeValue = (value: string) => {
		setValue(value)
	}

	const applyValue = () => {
		//save to store
	}

	return (
		<Sort title={"Размер"} className={styles.filter} onChange={applyValue}>
			<Checkbox
				title="XS  40/42"
				checked={value === "xs"}
				onChange={() => changeValue("xs")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="S  42/44"
				checked={value === "s"}
				onChange={() => changeValue("s")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="M  44/46"
				checked={value === "m"}
				onChange={() => changeValue("m")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="L  46/48"
				checked={value === "l"}
				onChange={() => changeValue("l")}
				className={styles.filter__checkbox}
			/>
		</Sort>
	)
}

export default FilterSizes
