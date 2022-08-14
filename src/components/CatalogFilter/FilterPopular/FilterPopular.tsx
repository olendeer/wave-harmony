import { FC } from "react"
import { Link } from "react-router-dom"

import Sort from "@c/ui/Sort/Sort"

import styles from "./FilterPopular.module.scss"

const FilterPopular: FC = () => {
	return (
		<Sort title={"Популярные запросы"} className={styles.filter}>
			<Link to="/catalog" className={styles.filter__link}>
				Черные купальники с рукавами
			</Link>
			<Link to="/catalog" className={styles.filter__link}>
				Закрытые купальники с рукавами
			</Link>
			<Link to="/catalog" className={styles.filter__link}>
				Купальники с сеткой
			</Link>
			<Link to="/catalog" className={styles.filter__link}>
				Спортиывные купальники для бассейна
			</Link>
			<Link to="/catalog" className={styles.filter__link}>
				Купальники с принтом
			</Link>
			<Link to="/catalog" className={styles.filter__link}>
				Купальники с закрытыми плечами
			</Link>
		</Sort>
	)
}

export default FilterPopular
