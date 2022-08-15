import { FC, useState } from "react"

import Sort from "@c/ui/Sort/Sort"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { FilterStyleType } from "@/store/types"
import { useActions } from "@/store/hooks"

import styles from "./FilterStyle.module.scss"

const FilterStyle: FC = () => {
	const { changeFilter } = useActions()

	const [value, setValue] = useState<FilterStyleType>(null)

	const changeValue = (value: FilterStyleType) => {
		setValue(value)
	}

	const applyValue = () => changeFilter({ style: value })

	return (
		<Sort title={"Фасон"} className={styles.filter} onChange={applyValue}>
			<Checkbox
				title="Раздельный"
				checked={value === "separate"}
				onChange={() => changeValue("separate")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="Слитный"
				checked={value === "conjoint"}
				onChange={() => changeValue("conjoint")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="Комбинезон"
				checked={value === "overall"}
				onChange={() => changeValue("overall")}
				className={styles.filter__checkbox}
			/>
			<Checkbox
				title="Лонгслив"
				checked={value === "longsleeve"}
				onChange={() => changeValue("longsleeve")}
				className={styles.filter__checkbox}
			/>
		</Sort>
	)
}

export default FilterStyle
