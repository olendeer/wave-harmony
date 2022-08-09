import { FC } from "react"
import { IMainLayoutProps } from "./types"
import { useTheme } from "@/hooks/useTheme"

import Header from "@c/Header/Header"
import Footer from "@c/Footer/Footer"

import styles from "./MainLayout.module.scss"

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
	const theme = useTheme()

	return (
		<div className={[styles.app, styles[theme]].join(" ")}>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default MainLayout
