import { FC } from "react"

import Advantage from "./Advantage/Advantage"
import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import SectionHeader from "@c/ui/SectionHeader/SectionHeader"

import Best from "@/assets/png/best.png"

import { ReactComponent as Quotes } from "@/assets/svg/quotes.svg"

import styles from "./BestClothes.module.scss"

const BestClothes: FC = () => {
	return (
		<FullWidthLayout className={styles.wrapper}>
			<section className={styles.best}>
				<SectionHeader text="Лучшая одежда для серфинга и других водных видов спорта" />
				<p className={styles.best__description}>
					<Quotes /> Люди, как волны — уникальны по своей природе.{" "}
					<br />
					Наши лайкры производятся в ограниченном количестве, это
					помогает подчеркнуть вашу индивидуальность. <br />
					Поймайте свою волну с купальниками Wave Harmony.
				</p>
				<img className={styles.best__image} src={Best} alt="" />
				<div className={styles.best__advantages}>
					<Advantage
						title="Сертифицированый товар"
						text="Все наши изделия сертифицированы и изготовлены в соответствии"
					/>
					<Advantage
						title="Доставка по России и Миру"
						text="Все наши изделия сертифицированы и изготовлены в соответствии"
					/>
					<Advantage
						title="Уникальный дизайн"
						text="Все наши изделия сертифицированы и изготовлены в соответствии"
					/>
					<Advantage
						title="Солнцезащита SPF 50+"
						text="Все наши изделия сертифицированы и изготовлены в соответствии"
					/>
					<Advantage
						title="Фурнируры от SBS"
						text="Все наши изделия сертифицированы и изготовлены в соответствии"
					/>
					<Advantage
						title="Пошив по вашим меркам"
						text="Все наши изделия сертифицированы и изготовлены в соответствии"
					/>
				</div>
			</section>
		</FullWidthLayout>
	)
}

export default BestClothes
