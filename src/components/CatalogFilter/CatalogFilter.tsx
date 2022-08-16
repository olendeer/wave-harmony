import { FC } from "react"

import { useActions, useAppSelector } from "@/store/hooks"
import { isFilterSelector, viewSelector } from "@/store/selectors"

import Button from "@c/ui/Button/Button"
import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"

import FilterSort from "./FilterSort/FilterSort"
import FilterSleeves from "./FilterSleeves/FilterSleeves"
import FilterAvailability from "./FilterAvailability/FilterAvailability"
import FilterSizes from "./FilterSizes/FilterSizes"
import FilterStyle from "./FilterStyle/FilterStyle"
import FilterPopular from "./FilterPopular/FilterPopular"
import FilterPrice from "./FilterPrice/FilterPrice"
import FilterColor from "./FilterColor/FilterColor"

import styles from "./CatalogFilter.module.scss"

const CatalogFilter: FC = () => {
	const view = useAppSelector(viewSelector)

	const isFilter = useAppSelector(isFilterSelector)

	const { changeView, resetFilter } = useActions()

	return (
		<FullWidthLayout className={styles.wrapper}>
			<div className={styles.filter}>
				<h1>Каталог</h1>
				<div className={styles.filter__list}>
					<div className={styles.sort}>
						<FilterSort />
						<FilterAvailability />
						<FilterColor />
						<FilterStyle />
						<FilterSleeves />
						<FilterSizes />
						<FilterPrice />
						<FilterPopular />
					</div>
					<div className={styles.view}>
						Вид:
						<span
							onClick={() => changeView(2)}
							className={view === 2 ? styles.active : ""}
						>
							2
						</span>
						<span
							onClick={() => changeView(3)}
							className={view === 3 ? styles.active : ""}
						>
							3
						</span>
						<span
							onClick={() => changeView(4)}
							className={view === 4 ? styles.active : ""}
						>
							4
						</span>
					</div>
				</div>
				{isFilter && (
					<div className={styles.filters}>
						<Button
							style={"warning"}
							mode={"stroke"}
							size={"small"}
							onClick={() => resetFilter()}
						>
							Сбросить все
						</Button>
					</div>
				)}
			</div>
		</FullWidthLayout>
	)
}

export default CatalogFilter
