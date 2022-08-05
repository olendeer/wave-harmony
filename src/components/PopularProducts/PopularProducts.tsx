import { useRef } from "react"
import Slider from "react-slick"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"
import SectionHeader from "@c/ui/SectionHeader/SectionHeader"
import Button from "@c/ui/Button/Button"
import Card from "@c/Card/Card"

import { ReactComponent as Arrow } from "@/assets/svg/arrow-right.svg"

import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"
import styles from "./PopularProducts.module.scss"

const PopularProducts = () => {
	const slider = useRef<Slider | null>(null)

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
						infinite={true}
					>
						{Array(8)
							.fill(true)
							.map((item, index) => (
								<Card
									key={index}
									size="small"
									product={{
										fav: false,
										type: "Unity",
										images: ["data/products/1/1.png"],
										price: 4000,
										sale: null,
										sizes: [
											"XS",
											"S",
											"M",
											"L",
											"По меркам",
										],
									}}
								/>
							))}
					</Slider>
				</div>
			</section>
		</ContainerLayout>
	)
}

export default PopularProducts
