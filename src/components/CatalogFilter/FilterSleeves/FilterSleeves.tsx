import { FC, useEffect, useState } from "react"

import Sort from "@c/ui/Sort/Sort"

import Checkbox from "@c/ui/Checkbox/Checkbox"

import { FilterSleevesType } from "@/store/types"

import { sleevesFilterSelector } from "@/store/selectors"
import { useActions, useAppSelector } from "@/store/hooks"

import styles from "./FilterSleeves.module.scss"

const FilterSleeves: FC = () => {
	const { changeFilter } = useActions()

	const filter = useAppSelector(sleevesFilterSelector)

	const [value, setValue] = useState<FilterSleevesType>(null)

	const changeValue = (value: FilterSleevesType) => {
		setValue(value)
	}

	const applyValue = () => changeFilter({ sleeves: value })

	useEffect(() => {
		setValue(filter)
	}, [filter])

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
