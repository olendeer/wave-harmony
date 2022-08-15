import { FC } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import styles from "./CatalogBody.module.scss"
import CatalogNav from "./CatalogNav/CatalogNav"
import CatalogList from "./CatalogList/CatalogList"

const CatalogBody: FC = () => {
	return (
		<ContainerLayout>
			<section className={styles.catalog}>
				<CatalogNav />
				<CatalogList />
			</section>
		</ContainerLayout>
	)
}

export default CatalogBody
