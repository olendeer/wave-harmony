import { FC } from "react"

import BestClothes from "@c/BestClothes/BestClothes"
import MainLayout from "@c/layouts/MainLayout/MainLayout"
import Mailing from "@c/Mailing/Mailing"
import Gallery from "@c/Gallery/Gallery"
import PopularProducts from "@c/PopularProducts/PopularProducts"
import MainSlider from "@c/MainSlider/MainSlider"
import Trust from "@c/Trust/Trust"

const Home: FC = () => {
	return (
		<MainLayout>
			<MainSlider />
			<PopularProducts />
			<Trust />
			<BestClothes />
			<Gallery />
			<Mailing />
		</MainLayout>
	)
}

export default Home
