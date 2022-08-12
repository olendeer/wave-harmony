import { FC } from "react"

import Trust from "@c/Trust/Trust"
import AboutSection from "@c/AboutSection/AboutSection"
import Mailing from "@c/Mailing/Mailing"
import Breadcrumbs from "@c/ui/Breadcrumbs/Breadcrumbs"

const About: FC = () => {
	return (
		<>
			<Breadcrumbs
				breadcrumbs={[
					{
						name: "Главная",
						link: "/",
					},
					{
						name: "О бренде",
					},
				]}
			/>
			<AboutSection />
			<Trust />
			<Mailing />
		</>
	)
}

export default About
