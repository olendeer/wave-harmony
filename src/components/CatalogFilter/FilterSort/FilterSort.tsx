import { FC, useEffect, useState } from "react"

import Sort from "@c/ui/Sort/Sort"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useActions, useAppSelector } from "@/store/hooks"
import { SortType } from "@/store/types"

import styles from "./FilterSort.module.scss"
import { sortSelector } from "@/store/selectors"

const FilterSort: FC = () => {
	const { changeSort } = useActions()

	const sort = useAppSelector(sortSelector)

	const [value, setValue] = useState<SortType>(null)

	const changeValue = (value: SortType) => {
		setValue(value)
	}

	const applyValue = () => changeSort(value)

	useEffect(() => {
		setValue(sort)
	}, [sort])

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
