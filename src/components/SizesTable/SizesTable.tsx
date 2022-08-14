import { FC } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import styles from "./SizesTable.module.scss"

const SizesTable: FC = () => {
	return (
		<ContainerLayout>
			<section className={styles.sizes}>
				<div className={styles.sizes__header}>
					<span>Российский</span>
					<span>Международный</span>
					<span>Грудь (см)</span>
					<span>Талия (см)</span>
					<span>Бедра (см)</span>
				</div>
				<div className={styles.sizes__item}>
					<span>40/42</span>
					<span>XS</span>
					<span>80-84</span>
					<span>60-65</span>
					<span>85-90</span>
				</div>
				<div className={styles.sizes__item}>
					<span>42/44</span>
					<span>S</span>
					<span>84-86</span>
					<span>65-68</span>
					<span>91-95</span>
				</div>
				<div className={styles.sizes__item}>
					<span>44/46</span>
					<span>M</span>
					<span>89-91</span>
					<span>68-74</span>
					<span>95-100</span>
				</div>
				<div className={styles.sizes__item}>
					<span>46/48</span>
					<span>L</span>
					<span>94-100</span>
					<span>74-80</span>
					<span>100-110</span>
				</div>
			</section>
		</ContainerLayout>
	)
}

export default SizesTable
