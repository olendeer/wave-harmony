import { FC } from "react"

import Mailing from "@c/Mailing/Mailing"
import Breadcrumbs from "@c/ui/Breadcrumbs/Breadcrumbs"
import CertificatesSection from "@c/CertificatesSection/CertificatesSection"

const Certificates: FC = () => {
	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						name: "Главная",
						link: "/",
					},
					{
						name: "Подарочные сертификаты",
					},
				]}
			/>
			<CertificatesSection />
			<Mailing />
		</>
	)
}

export default Certificates
