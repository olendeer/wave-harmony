import { FC } from "react"
import { Link } from "react-router-dom"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"

import Img1 from "@/assets/png/sizes/link/1.png"
import Img2 from "@/assets/png/sizes/link/2.png"
import Img3 from "@/assets/png/sizes/link/3.png"

import styles from "./SizesInfo.module.scss"

const SizesInfo: FC = () => {
	return (
		<ContainerLayout>
			<section className={styles.sizes}>
				<div className={styles.sizes__info}>
					<p>
						<span>
							При росте выше 175 см, выбирайте + 1 размер. Девушка
							с параметрами 85×66×93 попадает в размер «S»,
							но в случае роста выше175 см, необходимо выбратиь
							размер «M».
						</span>{" "}
						<br />
						Также вы можете заказать индивидуальный пошив
						понравившегося купальника. Процесс обычно занимает 3-4
						рабочих дня, а его стоимость +1500 рублей к стоимости
						модели. <br />
						Если вознинут сложности с выбором, наши менеджеры с
						радостью помогут вам определеться с размером в
						телефоннорм режиме.
					</p>
				</div>
				<div className={styles.sizes__links}>
					<Link to="/" className={styles.link}>
						<img src={Img1} alt="" />
					</Link>
					<Link to="/catalog" className={styles.link}>
						<img src={Img2} alt="" />
					</Link>
					<Link to="/create" className={styles.link}>
						<img src={Img3} alt="" />
					</Link>
				</div>
			</section>
		</ContainerLayout>
	)
}

export default SizesInfo
