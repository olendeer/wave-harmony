import { FC, useRef, useState, useEffect } from "react"
import Slider from "react-slick"

import { useActions, useAppSelector } from "@/store/hooks"
import { mainSliderSelector } from "@/store/selectors"

import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import Button from "@c/ui/Button/Button"

import styles from "./MainSlider.module.scss"

const MainSlider: FC = () => {
	const [slide, setSlide] = useState<number>(0)
	const slider = useRef<Slider | null>(null)
	const [isChangingSlide, setIsChangingSlide] = useState<boolean>(false)

	const { fetchMainSlider } = useActions()

	const slides = useAppSelector(mainSliderSelector)

	const changedSlide = (index: number) => {
		setSlide(index)
		setIsChangingSlide(false)
	}

	const changingSlide = () => setIsChangingSlide(true)

	const changeSlide = (index: number) => slider.current?.slickGoTo(index)

	useEffect(() => {
		fetchMainSlider()
		//eslint-disable-next-line
	}, [])

	return (
		<FullWidthLayout className={styles.wrapper}>
			<section className={styles.banner}>
				<Slider
					ref={slider}
					slidesToShow={1}
					slidesToScroll={1}
					infinite
					draggable={false}
					autoplay
					autoplaySpeed={10000}
					arrows={false}
					className={[styles.banner__slider, "fade-slider"].join(" ")}
					afterChange={changedSlide}
					beforeChange={changingSlide}
					speed={1000}
				>
					{slides.map((item) => (
						<div className={styles.slide} key={item.id}>
							<div className={styles.slide__info}>
								<span className={styles["slide__info-title"]}>
									{item.name}
								</span>
								<p
									className={
										styles["slide__info-description"]
									}
								>
									{item.description}
								</p>
								<Button
									mode="stroke-white"
									className={styles["slide__info-buy"]}
								>
									Купить {item.name}
								</Button>
							</div>
							<div className={styles.slide__images}>
								{item.images.map((image) => (
									<img
										key={image}
										src={image}
										alt="product"
									/>
								))}
							</div>
						</div>
					))}
				</Slider>
				<ul className={styles["banner__slider-dots"]}>
					{slides.map((_, index) => (
						<li
							key={index}
							onClick={() => changeSlide(index)}
							className={[
								styles["banner__slider-dot"],
								index === slide
									? styles["banner__slider-dot--active"]
									: "",
							].join(" ")}
						></li>
					))}
				</ul>
				<div
					className={[
						styles.banner__hints,
						isChangingSlide ? styles["banner__hints--hidden"] : "",
					].join(" ")}
				>
					{[
						"Невидимые швы, идеально вписываются в дизайн",
						"Какой-то плюс",
						"Что-то ещё",
						"и ещё",
					].map((item) => (
						<div key={item} className={styles.hint}>
							<button className={styles.hint__button}>
								<div className={styles["hint__button-content"]}>
									<span></span>
									<span></span>
								</div>
							</button>
							<div className={styles.hint__text}>{item}</div>
						</div>
					))}
				</div>
			</section>
		</FullWidthLayout>
	)
}

export default MainSlider
