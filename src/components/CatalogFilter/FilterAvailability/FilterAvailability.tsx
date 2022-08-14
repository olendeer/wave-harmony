import { FC, useState } from "react"

import Sort from "@c/ui/Sort/Sort"

import Checkbox from "@c/ui/Checkbox/Checkbox"

import styles from "./FilterAvailability.module.scss"

const FilterAvailability: FC = () => {
	const [value, setValue] = useState<string>("")

	const changeValue = (value: string) => {
		setValue(value)
	}

	const applyValue = () => {
		//save to store
	}

	return (
		<Sort title={"Наличие"} className={styles.filter} onChange={applyValue}>
			<Checkbox
				title="В наличии"
				checked={value === "in_stock"}
				onChange={() => changeValue("in_stock")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="Нет в наличии"
				checked={value === "out_in_stock"}
				onChange={() => changeValue("out_in_stock")}
				className={styles.filter__checkbox}
			/>
		</Sort>
	)
}

export default FilterAvailability
