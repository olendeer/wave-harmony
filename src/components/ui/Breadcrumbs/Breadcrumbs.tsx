import { FC } from "react"
import { Link } from "react-router-dom"
import { IBreadcrumbsProps } from "./types"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import styles from "./Breadcrumbs.module.scss"

const Breadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbs }) => {
	return (
		<ContainerLayout>
			<ul className={styles.breadcrumbs}>
				{breadcrumbs.map((item) => (
					<li
						className={[
							styles.breadcrumbs__item,
							styles["breadcrumbs__item--last"],
						].join(" ")}
						key={item.name}
					>
						{item.link ? (
							<Link to={item.link}>
								{item.name}
								{"\u00A0"}
							</Link>
						) : (
							"/ " + item.name
						)}
					</li>
				))}
			</ul>
		</ContainerLayout>
	)
}

export default Breadcrumbs
