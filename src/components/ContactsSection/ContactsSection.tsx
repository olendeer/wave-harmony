import { FC } from "react"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"
import SocialLinks from "@c/SocialLinks/SocialLinks"

import { useData } from "@/hooks/useData"
import { useActions } from "@/store/hooks"
import { contactsSelector } from "@/store/selectors"

import { ReactComponent as Ruble } from "@/assets/svg/ruble.svg"
import { ReactComponent as Email } from "@/assets/svg/email.svg"
import { ReactComponent as Phone } from "@/assets/svg/phone.svg"

import styles from "./ContactsSection.module.scss"

const ContactsSection: FC = () => {
	const { fetchContacts } = useActions()

	const contacts = useData(fetchContacts, contactsSelector)

	return (
		<ContainerLayout>
			<section className={styles.contacts}>
				<h1>Контактные данные</h1>
				<div className={styles.contacts__list}>
					<div className={styles.contact}>
						<div className={styles.contact__icon}>
							<Phone />
						</div>
						<span className={styles.contact__name}>
							Номер телефона
						</span>
						<p className={styles.contact__info}>
							{contacts?.phone} (бесплатно по России) <br />{" "}
							{contacts?.schedule}{" "}
						</p>
						<SocialLinks />
					</div>
					<div className={styles.contact}>
						<div className={styles.contact__icon}>
							<Email />
						</div>
						<span className={styles.contact__name}>
							E-mail для связи
						</span>
						<p className={styles.contact__info}>
							{contacts?.email}
						</p>
						<span className={styles.contact__name}>
							Хотите стать диллером?
						</span>
						<p className={styles.contact__info}>
							{contacts?.dealerEmail}
						</p>
					</div>
					<div className={styles.contact}>
						<div className={styles.contact__icon}>
							<Ruble />
						</div>
						<span className={styles.contact__name}>Реквизиты</span>
						<p className={styles.contact__info}>
							{contacts?.requisites}
						</p>
					</div>
				</div>
			</section>
		</ContainerLayout>
	)
}

export default ContactsSection
