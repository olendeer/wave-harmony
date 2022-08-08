import { FC, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs, Scrollbar, EffectCreative } from "swiper"

import SectionHeader from "@c/ui/SectionHeader/SectionHeader"
import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import Button from "@c/ui/Button/Button"

import { useActions, useAppSelector } from "@/store/hooks"
import { trustSelector } from "@/store/selectors"

import styles from "./Trust.module.scss"

const Trust: FC = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

	const { fetchTrust } = useActions()

	const trusts = useAppSelector(trustSelector)

	useEffect(() => {
		fetchTrust()
		//eslint-disable-next-line
	}, [])

	return (
		<FullWidthLayout className={styles.wrapper}>
			<section className={styles.trust}>
				<div className={styles.trust__header}>
					<SectionHeader text="Нам доверяют" />
					<Button mode="stroke">Больше о компании</Button>
				</div>
				<div className={styles.trust__body}>
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={15}
						slidesPerView={"auto"}
						direction={"vertical"}
						scrollbar={{ draggable: true, snapOnRelease: true }}
						watchSlidesProgress={true}
						modules={[Thumbs, Scrollbar]}
						className={"swiper-trust"}
					>
						{trusts.map((item) => (
							<SwiperSlide key={item.id}>
								<img
									src={item.image}
									className={styles["trust__slider-nav"]}
									alt="trust bloger"
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<Swiper
						spaceBetween={25}
						direction={"vertical"}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[Thumbs, EffectCreative]}
						effect={"creative"}
						creativeEffect={{
							prev: {
								translate: [0, 0, -400],
							},
							next: {
								translate: [0, "100%", 0],
							},
						}}
						className="swiper-trust-slider"
					>
						{trusts.map((item) => (
							<SwiperSlide key={item.id}>
								<div className={styles.card}>
									<img
										className={styles.card__image}
										src={item.image}
										alt="trust img"
									/>
									<div className={styles.card__info}>
										<div
											className={
												styles["card__info-name"]
											}
										>
											{item.name}
										</div>
										<a
											className={
												styles["card__info-inst"]
											}
											href={item.inst_link}
											target="_blank"
											rel="noreferrer"
										>
											@instagram
										</a>
										<span
											className={
												styles["card__info-followers"]
											}
										>
											{item.followers} подписчиков
										</span>
										<p
											className={
												styles["card__info-description"]
											}
										>
											{item.description}
										</p>
										<a
											className={
												styles["card__info-video"]
											}
											href={item.video_link}
											target="_blank"
											rel="noreferrer"
										>
											Смотреть видео
										</a>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<div className={styles.card__background}>
						<div className={styles.gradient}></div>
						<div className={styles.gradient}></div>
						<div className={styles.gradient}></div>
						<div className={styles.gradient}></div>
					</div>
				</div>
			</section>
		</FullWidthLayout>
	)
}

export default Trust
