import { FC } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import { useActions } from "@/store/hooks"
import { useData } from "@/hooks/useData"
import { partnersSelector } from "@/store/selectors"

import styles from "./Partners.module.scss"

const Partners: FC = () => {
	const { fetchPartners } = useActions()

	const partners = useData(fetchPartners, partnersSelector)

	return (
		<ContainerLayout>
			<section className={styles.partners}>
				<h2>Партнеры компании</h2>
				<div className={styles.partners__list}>
					{partners.map((item) => (
						<div className={styles.partner} key={item.id}>
							<div className={styles.partner__name}>
								{item.name}
							</div>
							<div className={styles.partner__address}>
								{item.address}
							</div>
							<div className={styles.partner__images}>
								<img src={item.images[0]} alt="" />
								<img src={item.images[1]} alt="" />
								<a
									href={item.site}
									target="_blank"
									rel="noreferer"
									className={styles["partner__images-link"]}
								>
									<span>Ещё</span>
								</a>
							</div>
							<div className={styles.partner__schedule}>
								<span>Время работы: </span>
								{item.schedule}
							</div>
							<div className={styles.partner__phone}>
								<span>Телефон: </span>
								<a
									className={styles.partner__link}
									href={`tel:${item.phone}`}
								>
									{item.phone}
								</a>
							</div>
							<div className={styles.partner__site}>
								<span>Сайт: </span>
								<a
									href={item.site}
									target="_blank"
									rel="noreferer"
									className={styles.partner__link}
								>
									{item.site}
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
		</ContainerLayout>
	)
}

export default Partners
