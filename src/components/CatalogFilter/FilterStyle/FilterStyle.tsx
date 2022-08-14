import { FC, useState } from "react"

import Sort from "@c/ui/Sort/Sort"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import styles from "./FilterStyle.module.scss"

const FilterStyle: FC = () => {
	const [value, setValue] = useState<string>("")

	const changeValue = (value: string) => {
		setValue(value)
	}

	const applyValue = () => {
		//save to store
	}

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
