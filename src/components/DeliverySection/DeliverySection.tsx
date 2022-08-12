import { FC } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import { useActions } from "@/store/hooks"
import { useData } from "@/hooks/useData"
import { deliverySelector } from "@/store/selectors"

import styles from "./DeliverySection.module.scss"

const DeliverySection: FC = () => {
	const { fetchDelivery, selectDelivery } = useActions()

	const delivery = useData(fetchDelivery, deliverySelector)

	return (
		<ContainerLayout>
			<section className={styles.delivery}>
				<div className={styles.delivery__nav}>
					{delivery.map(({ item, select }, index) => (
						<div
							className={[
								styles.delivery__item,
								select ? styles["delivery__item--select"] : "",
							].join(" ")}
							key={item.name}
							onClick={() => selectDelivery(index)}
						>
							<span className={styles["delivery__item-name"]}>
								{item.name}
							</span>
							<p className={styles["delivery__item-title"]}>
								{item.title}
							</p>
							<div className={styles["delivery__item-button"]}>
								<span></span>
								<span></span>
							</div>
						</div>
					))}
				</div>
				<div className={styles.delivery__content}>
					<h1>Доставка и оплата</h1>
					<p>
						Обработка заказов осуществляется с 09:00 до 20:00 по МСК
					</p>
				</div>
			</section>
		</ContainerLayout>
	)
}

export default DeliverySection
