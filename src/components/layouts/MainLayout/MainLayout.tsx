import { FC } from "react"
import { IMainLayoutProps } from "./types"

import Header from '@c/Header/Header'
import ContainerLayout from '@c/layouts/ContainerLayout/ContainerLayout'

const MainLayout: FC<IMainLayoutProps> = ({children}) => {
	return (
		<div className="app">
			<Header/>
			<ContainerLayout>{children}</ContainerLayout>
		</div>
	)
}

export default MainLayout