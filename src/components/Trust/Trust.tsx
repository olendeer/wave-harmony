import { FC } from "react"
import SectionHeader from "@c/ui/SectionHeader/SectionHeader"

import styles from "./Trust.module.scss"
import FullWidthLayout from "../layouts/FullWidthLayout/FullWidthLayout"
import Button from "../ui/Button/Button"

const Trust: FC = () => {
	return (
		<FullWidthLayout className={styles.wrapper}>
			<section className={styles.trust}>
				<div className={styles.trust__header}>
					<SectionHeader text="Нам доверяют" />
					<Button mode="stroke">Больше о компании</Button>
				</div>
				<div className={styles.trust__body}>
					<div className={styles.list}>
						{/* {trust.map((item) => (
							<img src={item.image} alt="im" />
						))} */}
					</div>
					<div className={styles.trust_card}></div>
				</div>
			</section>
		</FullWidthLayout>
	)
}

export default Trust
