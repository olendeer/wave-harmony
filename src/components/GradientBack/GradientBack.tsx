import { FC } from "react"

import styles from "./GradientBack.module.scss"

const GradientBack: FC = () => {
	return (
		<div className={styles.background}>
			<div className={styles.gradient}></div>
			<div className={styles.gradient}></div>
			<div className={styles.gradient}></div>
			<div className={styles.gradient}></div>
		</div>
	)
}

export default GradientBack
