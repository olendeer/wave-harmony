import { FC } from "react"

import Mailing from "@c/Mailing/Mailing"

import Breadcrumbs from "@c/ui/Breadcrumbs/Breadcrumbs"
import CatalogFilter from "@c/CatalogFilter/CatalogFilter"

const Catalog: FC = () => {
	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						name: "Главная",
						link: "/",
					},
					{
						name: "Каталог",
					},
				]}
			/>
			<CatalogFilter />

			<Mailing />
		</>
	)
}

export default Catalog
