import { FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { IHeaderLinksProps } from "./types"

import { ReactComponent as Gift } from "@/assets/svg/gift.svg"

import styles from "./HeaderLinks.module.scss"

const HeaderLinks: FC<IHeaderLinksProps> = ({ collapse }) => {
	return (
		<nav
			className={[
				styles["header-links"],
				collapse ? styles["header-links--collapse"] : "",
			].join(" ")}
		>
			<ul className={styles["header-links__list"]}>
				<li>
					<NavLink className={styles.link} to="/">
						Каталог
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/qwe">
						Блог
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/">
						О бренде
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/">
						Размеры
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/">
						Доставка и оплата
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/">
						Отзывы
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/">
						Создай свой купальник
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/">
						Сертификаты <Gift />{" "}
					</NavLink>
				</li>
				<li>
					<NavLink className={styles.link} to="/">
						Контакты
					</NavLink>
				</li>
			</ul>
			<Link to="/sales" className={styles["header-links__sale"]}>
				Распродажа до -40%
			</Link>
		</nav>
	)
}

export default HeaderLinks
