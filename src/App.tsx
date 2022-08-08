import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"

import Home from "./views/Home/Home"

import store from "./store"
import ThemeButton from "@c/ui/ThemeButton/ThemeButton"
import LangButton from "@c/ui/LangButton/LangButton"

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
		</Provider>
	)
}

export default App
