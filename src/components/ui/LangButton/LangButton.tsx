import { FC } from "react"

import { useActions, useAppSelector } from "@/store/hooks"
import { langSelector } from "@/store/selectors"

import styles from "./LangButton.module.scss"

const LangButton: FC = () => {
	const { changeLang } = useActions()

	const lang = useAppSelector(langSelector)

	return (
		<div className={styles["lang-btn"]}>
			<input
				className={styles["lang-btn__input"]}
				id="lang-btn"
				type="checkbox"
				checked={lang === "en"}
				onChange={() => changeLang()}
			/>
			<label
				className={styles["lang-btn__label"]}
				data-tg-off="RU"
				data-tg-on="EN"
				htmlFor="lang-btn"
			></label>
		</div>
	)
}

export default LangButton
