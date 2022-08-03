import { FC } from "react"
import { IMainLayoutProps } from "./types"

import Header from '@c/Header/Header'
import Footer from "@/components/Footer/Footer"

const MainLayout: FC<IMainLayoutProps> = ({children}) => {
	return (
		<div className="app">
			<Header/>
			{children}
			<Footer/>
		</div>
	)
}

export default MainLayout