import { FC } from "react"
import { IMailingProps } from "./types"

import { useInput } from "@/hooks/useInput"

import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import Button from "@c/ui/Button/Button"
import Input from "@c/ui/Input/Input"

import { ReactComponent as Letter } from "@/assets/svg/letter.svg"
import { ReactComponent as ArrowRight } from "@/assets/svg/arrow-right.svg"

import styles from "./Mailing.module.scss"

const Mailing: FC<IMailingProps> = () => {
	const email = useInput("")

	return (
		<FullWidthLayout className={styles.wrapper}>
			<div className={styles.mailing}>
				<div className={styles.mailing__info}>
					<Letter />
					Получайте актуальную информацию о всех скидках, распродажах
					и новых, трендовых коллекциях
				</div>
				<form className={styles.mailing__form}>
					<Input
						placeholder="Введите ваш E-mail"
						type="text"
						height="50px"
						{...email.bind}
					/>
					<Button height="50px" padding="0 21px">
						<ArrowRight />
					</Button>
				</form>
			</div>
		</FullWidthLayout>
	)
}

export default Mailing
