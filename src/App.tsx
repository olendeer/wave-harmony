import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"

import ThemeButton from "@c/ui/ThemeButton/ThemeButton"
import LangButton from "@c/ui/LangButton/LangButton"
import ModalsList from "@c/ModalsList/ModalsList"

import Home from "./views/Home/Home"

import store from "./store"

const App: FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>

			<ThemeButton />
			<LangButton />
			<ModalsList />
		</Provider>
	)
}

export default App
