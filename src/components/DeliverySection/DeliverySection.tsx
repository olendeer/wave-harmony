import { FC } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import { useActions, useAppSelector } from "@/store/hooks"
import { useData } from "@/hooks/useData"
import {
	deliverySelectIndexSelector,
	deliverySelector,
	deliverySelectSelector,
} from "@/store/selectors"

import { ReactComponent as Arrow } from "@/assets/svg/arrow-down.svg"

import styles from "./DeliverySection.module.scss"

const DeliverySection: FC = () => {
	const { fetchDelivery, selectDelivery, selectQuestionInDelivery } =
		useActions()

	const delivery = useData(fetchDelivery, deliverySelector)

	const active = useAppSelector(deliverySelectSelector)
	const indexDelivery = useAppSelector(deliverySelectIndexSelector)

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
					<div className={styles.questions}>
						{active?.item.questions.map((item, index) => (
							<div
								className={[
									styles.questions__item,
									item.select
										? styles["questions__item--select"]
										: "",
								].join(" ")}
								key={index}
								onClick={() =>
									selectQuestionInDelivery([
										indexDelivery,
										index,
									])
								}
							>
								<span className={styles.name}>{item.name}</span>
								<div className={styles.answer}>
									{item.answer}
								</div>
								<Arrow />
							</div>
						))}
					</div>
				</div>
			</section>
		</ContainerLayout>
	)
}

export default DeliverySection
