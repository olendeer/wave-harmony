import { FC } from "react"

import { useActions, useAppSelector } from "@/store/hooks"
import { themeSelector } from "@/store/selectors"

import styles from "./ThemeButton.module.scss"

const ThemeButton: FC = () => {
	const { changeTheme } = useActions()

	const theme = useAppSelector(themeSelector)

	return (
		<div className={styles["theme-btn"]}>
			<input
				type="checkbox"
				id="theme-btn"
				checked={theme === "dark"}
				onChange={() => changeTheme()}
			/>
			<label htmlFor="theme-btn" className={styles.toggle}>
				<span className={styles.toggle__handler}>
					<span
						className={[styles.crater, styles["crater--1"]].join(
							" "
						)}
					></span>
					<span
						className={[styles.crater, styles["crater--2"]].join(
							" "
						)}
					></span>
					<span
						className={[styles.crater, styles["crater--3"]].join(
							" "
						)}
					></span>
				</span>
				<span
					className={[styles.star, styles["star--1"]].join(" ")}
				></span>
				<span
					className={[styles.star, styles["star--2"]].join(" ")}
				></span>
				<span
					className={[styles.star, styles["star--3"]].join(" ")}
				></span>
				<span
					className={[styles.star, styles["star--4"]].join(" ")}
				></span>
				<span
					className={[styles.star, styles["star--5"]].join(" ")}
				></span>
				<span
					className={[styles.star, styles["star--6"]].join(" ")}
				></span>
			</label>
		</div>
	)
}

export default ThemeButton
