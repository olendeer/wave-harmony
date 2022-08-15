import { FC } from "react"

import Mailing from "@c/Mailing/Mailing"

import Breadcrumbs from "@c/ui/Breadcrumbs/Breadcrumbs"
import CatalogFilter from "@c/CatalogFilter/CatalogFilter"
import CatalogBody from "@c/CatalogBody/CatalogBody"

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
			<CatalogBody />
			<Mailing />
		</>
	)
}

export default Catalog
