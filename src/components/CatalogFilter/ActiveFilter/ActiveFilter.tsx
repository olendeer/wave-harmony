import { FC } from "react"

import { ReactComponent as Close } from "@/assets/svg/close.svg"

import styles from "./ActiveFilter.module.scss"

const ActiveFilter: FC = () => {
	return (
		<div className={styles.filter}>
			<Close />
		</div>
	)
}

export default ActiveFilter
