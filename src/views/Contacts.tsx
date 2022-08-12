import { FC } from "react"

import Mailing from "@c/Mailing/Mailing"
import Breadcrumbs from "@c/ui/Breadcrumbs/Breadcrumbs"
import ContactsSection from "@c/ContactsSection/ContactsSection"
import Partners from "@c/Partners/Partners"

const Contacts: FC = () => {
	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						name: "Главная",
						link: "/",
					},
					{
						name: "Контакты",
					},
				]}
			/>
			<ContactsSection />
			<Partners />
			<Mailing />
		</>
	)
}

export default Contacts
