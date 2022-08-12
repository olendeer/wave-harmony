import { FC } from "react"

import { Link } from "react-router-dom"

import ContainerLayout from "@c/layouts/ContainerLayout/ContainerLayout"
import SocialLinks from "@c/SocialLinks/SocialLinks"
import FooterColumn from "./FooterColumn/FooterColomn"

import { ReactComponent as Delivery } from "@/assets/svg/delivery.svg"
import { ReactComponent as Certificate } from "@/assets/svg/certificate.svg"

import styles from "./Footer.module.scss"

const Footer: FC = () => {
	return (
		<ContainerLayout>
			<footer className={styles.footer}>
				<FooterColumn title="Полезные ссылки">
					<Link className={styles.footer__link} to="/">
						Каталог
					</Link>
					<Link className={styles.footer__link} to="/">
						Блок
					</Link>
					<Link className={styles.footer__link} to="/">
						О бренде
					</Link>
					<Link className={styles.footer__link} to="/">
						Калькулятор
					</Link>
					<Link className={styles.footer__link} to="/">
						Размеры
					</Link>
					<Link className={styles.footer__link} to="/">
						Доставка и оплата <Delivery />
					</Link>
					<Link className={styles.footer__link} to="/">
						Контакты
					</Link>
					<Link className={styles.footer__link} to="/">
						Подарочные сертификаты <Certificate />
					</Link>
					<Link
						className={[
							styles.footer__link,
							styles["footer__link--red"],
						].join(" ")}
						to="/"
					>
						Распродажа -40%
					</Link>
				</FooterColumn>
				<FooterColumn title="Категории товаров" columns={2}>
					<Link className={styles.footer__link} to="/">
						Новая коллекция 2021
					</Link>
					<Link className={styles.footer__link} to="/">
						Новая коллекция 2021
					</Link>
					<Link className={styles.footer__link} to="/">
						Распродажа купальников
					</Link>
					<Link className={styles.footer__link} to="/">
						Распродажа купальников
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники для серфинга
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники для серфинга
					</Link>
					<Link className={styles.footer__link} to="/">
						Лайкра для серфинга
					</Link>
					<Link className={styles.footer__link} to="/">
						Лайкра для серфинга
					</Link>
					<Link className={styles.footer__link} to="/">
						Слитные купальники
					</Link>
					<Link className={styles.footer__link} to="/">
						Слитные купальники
					</Link>
					<Link className={styles.footer__link} to="/">
						Раздельные купальники
					</Link>
					<Link className={styles.footer__link} to="/">
						Раздельные купальники
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники с рукавами
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники с рукавами
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники без рукавов
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники без рукавов
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники с чашечками
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники с чашечками
					</Link>
				</FooterColumn>
				<FooterColumn title="Часто ищут">
					<Link className={styles.footer__link} to="/">
						Черные купальники с рукавами
					</Link>
					<Link className={styles.footer__link} to="/">
						Закрытые купальники с рукавами
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники с сеткой
					</Link>
					<Link className={styles.footer__link} to="/">
						Спортивные купальники для бассейна
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники с принтом
					</Link>
					<Link className={styles.footer__link} to="/">
						Купальники с закрытыми плечами
					</Link>
				</FooterColumn>
				<FooterColumn title="Контактные данные">
					<a
						className={styles.footer__email}
						href="mailto:zakaz@waveharmony.com"
					>
						zakaz@waveharmony.com
					</a>
					<a
						className={styles.footer__phone}
						href="tel:8 (800) 511-36-39"
					>
						8 (800) 511-36-39
					</a>
					<SocialLinks />
					<p className={styles.footer__copyright}>
						Информация для покупателей Wave Harmony - женская одежда
						для серфинга и любых других, водных видов спорта. <br />
						Все права защищены. 2021
					</p>
				</FooterColumn>
			</footer>
		</ContainerLayout>
	)
}

export default Footer
