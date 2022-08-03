import { FC } from 'react'

import BestClothes from '@/components/BestClothes/BestClothes'
import MainLayout from '@/components/layouts/MainLayout/MainLayout'
import Mailing from '@/components/Mailing/Mailing'
import Gallery from '@/components/Gallery/Gallery'

import styles from './Home.module.scss'

const Home: FC = () => {
    return (
        <MainLayout>
            <BestClothes/>
            <Gallery/>
            <Mailing/>
        </MainLayout>
    )
}

export default Home