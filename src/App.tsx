import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"

import Home from "./views/Home"
import About from "./views/About"
import Contacts from "./views/Contacts"
import Delivery from "./views/Delivery"

import MainLayout from "@c/layouts/MainLayout/MainLayout"

import store from "./store"

const App: FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainLayout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/delivery-pay" element={<Delivery />} />
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</Provider>
	)
}

export default App
