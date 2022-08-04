import { FC } from "react"

import BestClothes from "@/components/BestClothes/BestClothes"
import MainLayout from "@/components/layouts/MainLayout/MainLayout"
import Mailing from "@/components/Mailing/Mailing"
import Gallery from "@/components/Gallery/Gallery"
import Card from "@/components/Card/Card"

// import styles from "./Home.module.scss"

const Home: FC = () => {
	return (
		<MainLayout>
			<Card
				size="small"
				product={{
					fav: false,
					type: "Unity",
					images: ["data/products/1/1.png"],
					price: 4000,
					sale: null,
					sizes: ["XS", "S", "M", "L", "По меркам"],
				}}
			/>
			<BestClothes />
			<Gallery />
			<Mailing />
		</MainLayout>
	)
}

export default Home
