import { FC, useEffect, useState } from "react"

import Card from "@c/Card/Card"

import { useData } from "@/hooks/useData"
import { productsSelector, viewSelector } from "@/store/selectors"
import { useActions, useAppSelector } from "@/store/hooks"
import { IProduct } from "@/models/product"

import styles from "./CatalogList.module.scss"

const CatalogList: FC = () => {
	const { fetchProductsByFilter } = useActions()

	const view = useAppSelector(viewSelector)

	const [size, setSize] = useState<string>("")

	const products = useData<IProduct[]>(
		fetchProductsByFilter,
		productsSelector
	)

	useEffect(() => {
		setSize(
			view === 4
				? "smallest"
				: view === 3
				? "middle"
				: view === 2
				? "big"
				: ""
		)
	}, [view])

	return (
		<div
			className={[styles.products, styles[`products--view-${view}`]].join(
				" "
			)}
		>
			{products.map((item) => (
				<Card key={item.id} product={item} size={size} />
			))}
		</div>
	)
}

export default CatalogList
