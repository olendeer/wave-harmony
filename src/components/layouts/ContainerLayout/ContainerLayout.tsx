import { FC } from "react"
import { IContainerLayoutProps } from "./types"

import styles from './ContainerLayout.module.scss'

const ContainerLayout: FC<IContainerLayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}

export default ContainerLayout