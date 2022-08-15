import { FC } from "react"

import styles from "./CatalogNav.module.scss"

const CatalogNav: FC = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__header}>Купальники</div>
			<ul className={styles.nav__list}>
				<li>Все</li>
				<li>Для серфинга</li>
				<li>Слитные</li>
				<li>Раздельные</li>
				<li>С рукавами</li>
				<li>Без рукавов</li>
				<li>С чашечками</li>
				<li>С шортиками</li>
				<li>Для беременных</li>
				<li>Солнцезащитные</li>
				<li>Лосины и легинсы</li>
			</ul>
		</nav>
	)
}
export default CatalogNav
