import { FC } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import Img1 from "@/assets/png/sizes/1.png"
import Img2 from "@/assets/png/sizes/2.png"
import Img3 from "@/assets/png/sizes/3.png"

import styles from "./HowSelectSize.module.scss"

const HowSelectSize: FC = () => {
	return (
		<ContainerLayout>
			<section className={styles.sizes}>
				<h1>Как выбрать размер</h1>
				<p>Вам понадобится снять мерки сантиметровой лентой</p>
				<div className={styles.sizes__list}>
					<div className={styles.size}>
						<div className={styles.size__name}>Талия</div>
						<div className={styles.size__image}>
							<img src={Img1} alt="" />
						</div>
						<div className={styles.size__info}>
							Измеряем строго горизонтально по самой узкой части
							тела, проходя через самую выступающую точку живота.
						</div>
					</div>
					<div className={styles.size}>
						<div className={styles.size__name}>Грудь</div>
						<div className={styles.size__image}>
							<img src={Img2} alt="" />
						</div>
						<div className={styles.size__info}>
							Спереди лента должна проходить по наиболее
							выступающим точкам, сбоку через подмышечные впадины,
							а сзади обхватывать лопатки.
						</div>
					</div>
					<div className={styles.size}>
						<div className={styles.size__name}>Бедра</div>
						<div className={styles.size__image}>
							<img src={Img3} alt="" />
						</div>
						<div className={styles.size__info}>
							Лента должна находиться горизонтально, проходя
							посредине бедра и сзади по наиболее выступающим
							точкам ягодиц
						</div>
					</div>
				</div>
			</section>
		</ContainerLayout>
	)
}

export default HowSelectSize
