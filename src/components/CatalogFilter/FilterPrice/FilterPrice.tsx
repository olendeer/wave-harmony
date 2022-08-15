import { FC, useEffect, useState } from "react"
import { RangeType } from "./types"

import InputRange from "react-input-range"

import Sort from "@c/ui/Sort/Sort"
import Input from "@c/ui/Input/Input"

import { useInput } from "@/hooks/useInput"
import { useActions } from "@/store/hooks"

import styles from "./FilterPrice.module.scss"

const FilterPrice: FC = () => {
	const { changeFilter } = useActions()

	const [value, setValue] = useState<RangeType>({ min: 0, max: 20000 })

	const from = useInput("0")
	const to = useInput("20000")

	const applyValue = () => changeFilter({ price: value })

	useEffect(() => {
		const min = +from.value < 0 ? 0 : +from.value
		const max = +to.value > 20000 ? 20000 : +to.value
		setValue({ min, max })
	}, [from.value, to.value])

	return (
		<Sort
			title={"Стоимость"}
			className={styles.filter}
			onChange={applyValue}
		>
			<div className={styles.filter__fields}>
				<Input
					type="number"
					placeholder="От"
					{...from.bind}
					className={styles.field}
				/>
				<span>-</span>
				<Input
					type="number"
					placeholder="До"
					{...to.bind}
					className={styles.field}
				/>
			</div>
			<InputRange
				maxValue={20000}
				minValue={0}
				value={value}
				formatLabel={() => ""}
				onChange={(value) => {
					const min = (value as RangeType).min
					const max = (value as RangeType).max

					from.setValue(min.toString())
					to.setValue(max.toString())
				}}
			/>
		</Sort>
	)
}

export default FilterPrice
