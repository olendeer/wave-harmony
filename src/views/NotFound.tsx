import { FC } from "react"

import Mailing from "@c/Mailing/Mailing"
import Breadcrumbs from "@c/ui/Breadcrumbs/Breadcrumbs"
import NotFoundSection from "@c/NotFoundSection/NotFoundSection"

const NotFound: FC = () => {
	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						name: "Главная",
						link: "/",
					},
					{
						name: "404",
					},
				]}
			/>
			<NotFoundSection />
			<Mailing />
		</>
	)
}

export default NotFound
