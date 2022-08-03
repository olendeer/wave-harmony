import { FC } from 'react'

import { Link, NavLink } from 'react-router-dom'

import IconDot from '@c/ui/IconDot/IconDot'
import ContainerLayout from '@c/layouts/ContainerLayout/ContainerLayout'

import { ReactComponent as Logo } from '@/assets/svg/logo.svg'
import { ReactComponent as Cart } from '@/assets/svg/cart.svg'
import { ReactComponent as Heart } from '@/assets/svg/heart.svg'
import { ReactComponent as Search } from '@/assets/svg/search.svg'
import { ReactComponent as User } from '@/assets/svg/user.svg'

import { ReactComponent as Gift } from '@/assets/svg/gift.svg'



import styles from './Header.module.scss'

const Header: FC = () => {
    return (
        <ContainerLayout>
            <header className={styles.header}>
                <div className={styles['header-nav']}>
                    <div className={styles['header-nav__contacts']}><span>8 (800) 511 36 39 </span> — бесплатно по России</div>
                    <Logo/>
                    <div className={styles['header-nav__buttons']}>
                        <IconDot icon={<Search/>} dot={false} />
                        <IconDot icon={<User/>} dot={false} />
                        <IconDot icon={<Heart/>} dot={true} />
                        <IconDot icon={<Cart/>} dot={true} />
                    </div>
                </div>
                <nav className={styles['header-links']}>
                    <ul className={styles['header-links__list']}>
                        <li>
                            <NavLink className={styles.link} to='/'>Каталог</NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to='/'>Блог</NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to='/'>О бренде</NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to='/'>Размеры</NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to='/'>Доставка и оплата</NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to='/'>Отзывы</NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to='/'>Создай свой купальник</NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to='/'>Сертификаты <Gift/> </NavLink>
                        </li>
                        <li>
                            <NavLink className={styles.link} to='/'>Контакты</NavLink>
                        </li>
                    </ul>
                    <Link to="/sales" className={styles['header-links__sale']}>Распродажа до -40%</Link>
                </nav>
            </header>
        </ContainerLayout>
    )
}

export default Header