import { FC, useEffect, useState } from "react"

import Sort from "@c/ui/Sort/Sort"

import Checkbox from "@c/ui/Checkbox/Checkbox"

import { FilterSizeType } from "@/store/types"

import { sizeFilterSelector } from "@/store/selectors"
import { useActions, useAppSelector } from "@/store/hooks"

import styles from "./FilterSizes.module.scss"

const FilterSizes: FC = () => {
	const { changeFilter } = useActions()

	const filter = useAppSelector(sizeFilterSelector)

	const [value, setValue] = useState<FilterSizeType[]>([])

	const changeValue = (value: FilterSizeType) => {
		setValue((prev) =>
			prev.includes(value)
				? prev.filter((item) => item !== value)
				: [...prev, value]
		)
	}

	const applyValue = () => changeFilter({ size: value })

	useEffect(() => {
		setValue(filter)
	}, [filter])

	return (
		<Sort title={"Размер"} className={styles.filter} onChange={applyValue}>
			<Checkbox
				title="XS  40/42"
				checked={value.includes("xs")}
				onChange={() => changeValue("xs")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="S  42/44"
				checked={value.includes("s")}
				onChange={() => changeValue("s")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="M  44/46"
				checked={value.includes("m")}
				onChange={() => changeValue("m")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="L  46/48"
				checked={value.includes("l")}
				onChange={() => changeValue("l")}
				className={styles.filter__checkbox}
			/>
		</Sort>
	)
}

export default FilterSizes
