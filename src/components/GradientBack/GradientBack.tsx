import { FC } from "react"
import { IGradientBackProps } from "./types"

import styles from "./GradientBack.module.scss"

const GradientBack: FC<IGradientBackProps> = ({ className }) => {
	return (
		<div className={[styles.background, className].join(" ")}>
			<div className={styles.gradient}></div>
			<div className={styles.gradient}></div>
			<div className={styles.gradient}></div>
			<div className={styles.gradient}></div>
		</div>
	)
}

export default GradientBack
