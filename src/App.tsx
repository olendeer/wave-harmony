import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"

import MainLayout from "@c/layouts/MainLayout/MainLayout"
import Home from "./views/Home/Home"

import store from "./store"

const App: FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainLayout>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</Provider>
	)
}

export default App
