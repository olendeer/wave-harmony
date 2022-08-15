import { FC, useState } from "react"

import Sort from "@c/ui/Sort/Sort"
import Checkbox from "@c/ui/Checkbox/Checkbox"

import { useActions } from "@/store/hooks"
import { FilterColorType } from "@/store/types"

import styles from "./FilterColor.module.scss"

const FilterColor: FC = () => {
	const { changeFilter } = useActions()

	const [value, setValue] = useState<FilterColorType>("multiply")

	const changeValue = (value: FilterColorType) => {
		setValue(value)
	}

	const applyValue = () => changeFilter({ color: value })

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
					checked={value === "red"}
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
					checked={value === "blue"}
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
					checked={value === "violet"}
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
					checked={value === "lightgreen"}
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
					checked={value === "orange"}
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
					checked={value === "black"}
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
					checked={value === "grey"}
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
					checked={value === "pink"}
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
					checked={value === "beige"}
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
					checked={value === "green"}
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
					checked={value === "white"}
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
					checked={value === "multiply"}
					onChange={() => changeValue("multiply")}
					className={styles.filter__checkbox}
				/>
				<span className={styles.filter__color}></span>
			</div>
		</Sort>
	)
}

export default FilterColor
