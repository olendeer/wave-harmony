import { FC } from "react"

import Mailing from "@c/Mailing/Mailing"
import Breadcrumbs from "@c/ui/Breadcrumbs/Breadcrumbs"
import DeliverySection from "@c/DeliverySection/DeliverySection"

const Delivery: FC = () => {
	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						name: "Главная",
						link: "/",
					},
					{
						name: "Доставка и оплата",
					},
				]}
			/>
			<DeliverySection />
			<Mailing />
		</>
	)
}

export default Delivery
