import { FC } from "react"
import { IAdvantageProps } from "../types"

import styles from "./Advantage.module.scss"

const Advantage: FC<IAdvantageProps> = ({ title, text }) => {
	return (
		<div className={styles.advantage}>
			<span className={styles.advantage__title}>{title}</span>
			<p className={styles.advantage__text}>{text}</p>
		</div>
	)
}

export default Advantage
