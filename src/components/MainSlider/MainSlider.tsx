import { FC, useRef, useState } from "react"
import Slider from "react-slick"

import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import Button from "@c/ui/Button/Button"

import P1 from "@/assets/png/banner/1/1.png"
import P2 from "@/assets/png/banner/1/2.png"

import styles from "./MainSlider.module.scss"

const MainSlider: FC = () => {
	const [slide, setSlide] = useState<number>(0)
	const slider = useRef<Slider | null>(null)

	const changeSlider = (index: number) => setSlide(index)
	const changeSlide = (index: number) => slider.current?.slickGoTo(index)

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
					className={styles.banner__slider}
					afterChange={changeSlider}
				>
					{Array(3)
						.fill(true)
						.map((item, index) => (
							<div className={styles.slide} key={index}>
								<div className={styles.slide__info}>
									<span
										className={styles["slide__info-title"]}
									>
										Ocean
									</span>
									<p
										className={
											styles["slide__info-description"]
										}
									>
										с длинными рукавами
									</p>
									<Button
										mode="stroke-white"
										className={styles["slide__info-buy"]}
									>
										Купить Ocean
									</Button>
								</div>
								<div className={styles.slide__images}>
									<img src={P1} alt="p1" />
									<img src={P2} alt="p2" />
								</div>
							</div>
						))}
				</Slider>
				<ul className={styles["banner__slider-dots"]}>
					{Array(3)
						.fill(true)
						.map((_, index) => (
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
			</section>
		</FullWidthLayout>
	)
}

export default MainSlider
