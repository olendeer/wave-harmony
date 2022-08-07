import { FC, useEffect, useRef } from "react"
import Slider from "react-slick"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"
import SectionHeader from "@c/ui/SectionHeader/SectionHeader"
import Button from "@c/ui/Button/Button"
import Card from "@c/Card/Card"

import { useActions, useAppSelector } from "@/store/hooks"
import { popularProductsSelector } from "@/store/selectors"

import { ReactComponent as Arrow } from "@/assets/svg/arrow-right.svg"

import styles from "./PopularProducts.module.scss"

const PopularProducts: FC = () => {
	const slider = useRef<Slider | null>(null)

	const { fetchPopularProducts } = useActions()

	const products = useAppSelector(popularProductsSelector)

	useEffect(() => {
		fetchPopularProducts()
	}, [])

	return (
		<ContainerLayout>
			<section className={styles.popular}>
				<div className={styles.popular__header}>
					<SectionHeader
						text="Самые популярные модели"
						className={styles.popular__title}
					/>
					<p className={styles.popular__description}>
						то что выбирают наши прекрасные клиентки
					</p>
					<div className={styles.popular__buttons}>
						<div className={styles["popular__buttons-slider"]}>
							<Button
								mode="stroke"
								padding="0px 22px 0px"
								onClick={() => slider.current?.slickPrev()}
							>
								<Arrow />
							</Button>
							<Button
								mode="stroke"
								padding="0px 22px 0px"
								onClick={() => slider.current?.slickNext()}
							>
								<Arrow />
							</Button>
						</div>
						<Button mode="stroke">Смотреть весь каталог</Button>
					</div>
				</div>
				<div className={styles.popular__body}>
					<Slider
						ref={slider}
						slidesToShow={4}
						slidesToScroll={1}
						lazyLoad={"ondemand"}
						infinite
					>
						{products.map((product) => (
							<Card
								key={product.id}
								size="small"
								product={product}
							/>
						))}
					</Slider>
				</div>
			</section>
		</ContainerLayout>
	)
}

export default PopularProducts
