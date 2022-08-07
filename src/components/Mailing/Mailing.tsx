import { FC, useState } from "react"
import { IMailingProps } from "./types"
import { ChangeInput } from "@/shared/types"

import FullWidthLayout from "@c/layouts/FullWidthLayout/FullWidthLayout"
import Button from "@c/ui/Button/Button"
import Input from "@c/ui/Input/Input"

import { ReactComponent as Letter } from "@/assets/svg/letter.svg"
import { ReactComponent as ArrowRight } from "@/assets/svg/arrow-right.svg"

import styles from "./Mailing.module.scss"

const Mailing: FC<IMailingProps> = () => {
	const [email, setEmail] = useState<string>("")

	const changeHandler: ChangeInput = (event) => {
		setEmail(event.target.value)
	}

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
						value={email}
						onChange={changeHandler}
						height="50px"
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
