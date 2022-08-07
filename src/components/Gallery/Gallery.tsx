import { FC } from "react"
import ContainerLayout from "../layouts/ContainerLayout/ContainerLayout"
import Button from "../ui/Button/Button"

import SectionHeader from "../ui/SectionHeader/SectionHeader"

import G1 from "@/assets/png/gallery/g1.png"
import G2 from "@/assets/png/gallery/g2.png"

import styles from "./Gallery.module.scss"

const Gallery: FC = () => {
	return (
		<ContainerLayout>
			<section className={styles.gallery}>
				<div className={styles.gallery__header}>
					<SectionHeader
						text="Нравятся яркие купальники и вдохновляющие пейзажи?"
						className={styles.gallery__title}
					/>
					<p className={styles.gallery__description}>
						Подписывайтесь на наш инстаграм, там все и даже больше
					</p>
					<Button mode="stroke" className={styles.gallery__button}>
						Подписаться на инстаграм
					</Button>
				</div>
				<div className={styles.gallery__body}>
					<img className={styles.gallery__image} src={G1} alt="" />
					<img className={styles.gallery__image} src={G2} alt="" />
					<img className={styles.gallery__image} src={G1} alt="" />
					<img className={styles.gallery__image} src={G2} alt="" />
					<img className={styles.gallery__image} src={G1} alt="" />
					<img className={styles.gallery__image} src={G2} alt="" />
					<img className={styles.gallery__image} src={G1} alt="" />
					<img className={styles.gallery__image} src={G2} alt="" />
					<img className={styles.gallery__image} src={G1} alt="" />
					<img className={styles.gallery__image} src={G2} alt="" />
					<img className={styles.gallery__image} src={G1} alt="" />
					<img className={styles.gallery__image} src={G2} alt="" />
					<img className={styles.gallery__image} src={G1} alt="" />
					<img className={styles.gallery__image} src={G2} alt="" />
				</div>
			</section>
		</ContainerLayout>
	)
}

export default Gallery
