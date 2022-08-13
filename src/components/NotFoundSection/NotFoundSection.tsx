import { FC } from "react"

import GradientBack from "@c/GradientBack/GradientBack"
import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import Image404 from "@/assets/png/404.png"

import styles from "./NotFoundSection.module.scss"
import Button from "@c/ui/Button/Button"

const NotFoundSection: FC = () => {
	return (
		<ContainerLayout>
			<section className={styles.notfound}>
				<img src={Image404} alt="404" />
				<div className={styles.notfound__info}>
					<h1>Упс...</h1>
					<p>
						мы опросили каждого серфера на побережье, но никто из
						них не знает куда уплыла эта страница
					</p>
					<Button link={"/"} className={styles.notfound__link}>
						Перейти в каталог
					</Button>
					<GradientBack />
				</div>
			</section>
		</ContainerLayout>
	)
}

export default NotFoundSection
