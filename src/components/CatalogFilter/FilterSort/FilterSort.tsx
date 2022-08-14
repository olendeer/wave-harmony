import { FC, useState } from "react"

import Sort from "@c/ui/Sort/Sort"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import styles from "./FilterSort.module.scss"

const FilterSort: FC = () => {
	const [value, setValue] = useState<string>("")

	const changeValue = (value: string) => {
		setValue(value)
	}

	const applyValue = () => {
		//save to store
	}

	return (
		<Sort
			title={"Сортировать по"}
			className={styles.filter}
			onChange={applyValue}
		>
			<Checkbox
				title="От дешевых"
				checked={value === "from_cheap"}
				onChange={() => changeValue("from_cheap")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="От дорогих"
				checked={value === "from_expensive"}
				onChange={() => changeValue("from_expensive")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="По ревелантности"
				checked={value === "by_relevance"}
				onChange={() => changeValue("by_relevance")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="По скидке"
				checked={value === "at_discount"}
				onChange={() => changeValue("at_discount")}
				className={styles.filter__checkbox}
			/>
		</Sort>
	)
}

export default FilterSort
