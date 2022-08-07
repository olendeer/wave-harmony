import { FC, useEffect } from "react"

import SectionHeader from "@c/ui/SectionHeader/SectionHeader"
import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import Button from "@c/ui/Button/Button"

import { useActions, useAppSelector } from "@/store/hooks"
import { trustSelector } from "@/store/selectors"

import styles from "./Trust.module.scss"

const Trust: FC = () => {
	const { fetchTrust } = useActions()

	const trusts = useAppSelector(trustSelector)

	useEffect(() => {
		fetchTrust()
	}, [])

	return (
		<FullWidthLayout className={styles.wrapper}>
			<section className={styles.trust}>
				<div className={styles.trust__header}>
					<SectionHeader text="Нам доверяют" />
					<Button mode="stroke">Больше о компании</Button>
				</div>
				<div className={styles.trust__body}>
					<div className={styles.list}>
						{trusts.map((item) => (
							<img
								key={item.id}
								src={item.image}
								alt="trust-image"
							/>
						))}
					</div>
					<div className={styles.card}>
						<img
							className={styles.card__image}
							src={trusts[0]?.image}
							alt="trust img"
						/>
						<div className={styles.card__info}>
							<div className={styles["card__info-name"]}>
								{trusts[0]?.name}
							</div>
							<a
								className={styles["card__info-inst"]}
								href={trusts[0]?.inst_link}
								target="_blank"
							>
								@instagram
							</a>
							<span className={styles["card__info-followers"]}>
								{trusts[0]?.followers} подписчиков
							</span>
							<p className={styles["card__info-description"]}>
								{trusts[0]?.description}
							</p>
							<a
								className={styles["card__info-video"]}
								href={trusts[0]?.video_link}
								target="_blank"
							>
								Смотреть видео
							</a>
						</div>
						<div className={styles.card__background}>
							<div className={styles.gradient}></div>
							<div className={styles.gradient}></div>
							<div className={styles.gradient}></div>
							<div className={styles.gradient}></div>
						</div>
					</div>
				</div>
			</section>
		</FullWidthLayout>
	)
}

export default Trust
