import { FC, useEffect, useState } from "react"

import Sort from "@c/ui/Sort/Sort"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useActions, useAppSelector } from "@/store/hooks"
import { FilterColorType } from "@/store/types"

import styles from "./FilterColor.module.scss"
import { colorFilterSelector } from "@/store/selectors"

const FilterColor: FC = () => {
	const { changeFilter } = useActions()

	const filter = useAppSelector(colorFilterSelector)

	const [value, setValue] = useState<FilterColorType[]>([])

	const changeValue = (value: FilterColorType) => {
		setValue((prev) =>
			prev.includes(value)
				? prev.filter((item) => item !== value)
				: [...prev, value]
		)
	}

	const applyValue = () => changeFilter({ color: value })

	useEffect(() => {
		setValue(filter)
	}, [filter])

	return (
		<Sort title={"Цвет"} className={styles.filter} onChange={applyValue}>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--red"],
				].join(" ")}
			>
				<Checkbox
					title="Красный"
					checked={value.includes("red")}
					onChange={() => changeValue("red")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--blue"],
				].join(" ")}
			>
				<Checkbox
					title="Синий"
					checked={value.includes("blue")}
					onChange={() => changeValue("blue")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--violet"],
				].join(" ")}
			>
				<Checkbox
					title="Фиолетовый"
					checked={value.includes("violet")}
					onChange={() => changeValue("violet")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--lightgreen"],
				].join(" ")}
			>
				<Checkbox
					title="Светло-зеленый"
					checked={value.includes("lightgreen")}
					onChange={() => changeValue("lightgreen")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--orange"],
				].join(" ")}
			>
				<Checkbox
					title="Оранжевый"
					checked={value.includes("orange")}
					onChange={() => changeValue("orange")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--black"],
				].join(" ")}
			>
				<Checkbox
					title="Черный"
					checked={value.includes("black")}
					onChange={() => changeValue("black")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--grey"],
				].join(" ")}
			>
				<Checkbox
					title="Серый"
					checked={value.includes("grey")}
					onChange={() => changeValue("grey")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--pink"],
				].join(" ")}
			>
				<Checkbox
					title="Розовый"
					checked={value.includes("pink")}
					onChange={() => changeValue("pink")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--beige"],
				].join(" ")}
			>
				<Checkbox
					title="Бежевый"
					checked={value.includes("beige")}
					onChange={() => changeValue("beige")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--green"],
				].join(" ")}
			>
				<Checkbox
					title="Зеленый"
					checked={value.includes("green")}
					onChange={() => changeValue("green")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--white"],
				].join(" ")}
			>
				<Checkbox
					title="Белый"
					checked={value.includes("white")}
					onChange={() => changeValue("white")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
			<div
				className={[
					styles.filter__wrapper,
					styles["filter__wrapper--multiply"],
				].join(" ")}
			>
				<Checkbox
					title="Разноцветный"
					checked={value.length === 0}
					onChange={() => setValue([])}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
		</Sort>
	)
}

export default FilterColor
