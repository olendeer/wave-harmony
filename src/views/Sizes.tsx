import { FC } from "react"

import Mailing from "@c/Mailing/Mailing"
import Breadcrumbs from "@c/ui/Breadcrumbs/Breadcrumbs"
import HowSelectSize from "@c/HowSelectSize/HowSelectSize"
import SizesTable from "@c/SizesTable/SizesTable"
import SizesInfo from "@c/SizesInfo/SizesInfo"

const Sizes: FC = () => {
	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						name: "Главная",
						link: "/",
					},
					{
						name: "Как выбрать размер",
					},
				]}
			/>
			<HowSelectSize />
			<SizesTable />
			<SizesInfo />
			<Mailing />
		</>
	)
}

export default Sizes
