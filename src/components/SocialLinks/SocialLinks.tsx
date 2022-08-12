import { FC } from "react"
import Social from "./Social/Social"

import { ReactComponent as Vk } from "@/assets/svg/social/vk.svg"
import { ReactComponent as Fb } from "@/assets/svg/social/fb.svg"
import { ReactComponent as Wa } from "@/assets/svg/social/wa.svg"
import { ReactComponent as In } from "@/assets/svg/social/in.svg"

import styles from "./SocialLink.module.scss"

const SocialLinks: FC = () => {
	return (
		<div className={styles["social-list"]}>
			<Social link="/">
				<Vk />
			</Social>
			<Social link="/">
				<Wa />
			</Social>
			<Social link="/">
				<Fb />
			</Social>
			<Social link="/">
				<In />
			</Social>
		</div>
	)
}

export default SocialLinks
