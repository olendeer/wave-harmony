import { FC, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs, Scrollbar, EffectCreative } from "swiper"

import SectionHeader from "@c/ui/SectionHeader/SectionHeader"
import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import Button from "@c/ui/Button/Button"

import { useActions } from "@/store/hooks"
import { trustSelector } from "@/store/selectors"
import { useData } from "@/hooks/useData"
import { ITrust } from "@/models/trust"

import styles from "./Trust.module.scss"
import GradientBack from "@c/GradientBack/GradientBack"

const Trust: FC = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

	const { fetchTrust } = useActions()

	const trusts = useData<ITrust[]>(fetchTrust, trustSelector)

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

					<GradientBack />
				</div>
			</section>
		</FullWidthLayout>
	)
}

export default Trust
