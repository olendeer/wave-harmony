import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import { useData } from "@/hooks/useData"
import { useActions } from "@/store/hooks"
import { aboutSelector } from "@/store/selectors"

import styles from "./AboutSection.module.scss"

const AboutSection = () => {
	const { fetchAbout } = useActions()

	const about = useData(fetchAbout, aboutSelector)

	return (
		<ContainerLayout>
			<section className={styles.about}>
				<h1>О бренде</h1>
				<p>{about?.text}</p>
				<div className={styles.about__content}>
					{about?.advantages.map((item, index) => (
						<div className={styles.advantage} key={index}>
							<span className={styles.advantage__number}>
								{"0" + (index + 1)}
							</span>
							<span className={styles.advantage__name}>
								{item.name}
							</span>
							<p className={styles.advantage__text}>
								{item.title}
							</p>
						</div>
					))}
				</div>
			</section>
		</ContainerLayout>
	)
}

export default AboutSection
