import { FC, useEffect, useState } from "react"

import Sort from "@c/ui/Sort/Sort"

import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useActions, useAppSelector } from "@/store/hooks"
import { FilterAvailabilityType } from "@/store/types"

import styles from "./FilterAvailability.module.scss"
import { availabilityFilterSelector } from "@/store/selectors"

const FilterAvailability: FC = () => {
	const { changeFilter } = useActions()

	const filter = useAppSelector(availabilityFilterSelector)

	const [value, setValue] = useState<FilterAvailabilityType>(null)

	const changeValue = (value: FilterAvailabilityType) => {
		setValue(value)
	}

	const applyValue = () => changeFilter({ availability: value })

	useEffect(() => {
		setValue(filter)
	}, [filter])

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
