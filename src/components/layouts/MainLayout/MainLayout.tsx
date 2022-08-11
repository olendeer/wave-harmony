import { FC } from "react"
import { IMainLayoutProps } from "./types"
import { useTheme } from "@/hooks/useTheme"

import { useData } from "@/hooks/useData"
import { userSelector } from "@/store/selectors"
import { useActions } from "@/store/hooks"

import Header from "@c/Header/Header"
import Footer from "@c/Footer/Footer"

import ThemeButton from "@c/ui/ThemeButton/ThemeButton"
import LangButton from "@c/ui/LangButton/LangButton"
import ModalsList from "@c/ModalsList/ModalsList"
import WishList from "@c/WishList/WishList"

import styles from "./MainLayout.module.scss"

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
	const theme = useTheme()

	const { init } = useActions()

	const user = useData(init, userSelector)

	return (
		<div className={[styles.app, styles[theme]].join(" ")}>
			<Header />
			{children}
			<Footer />

			<ThemeButton />
			<LangButton />
			<WishList />
			<ModalsList />
		</div>
	)
}

export default MainLayout
