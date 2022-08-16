import { IProduct } from "@/models/product";
import { ITrust } from "@/models/trust";
import { IMainSlide } from "@/models/mainSlide";
import { Lang, Theme } from "@/shared/types";
import { IUser } from "@/models/user";
import { IAbout, IContacts, IDelivery, IPartner } from "@/models/info";

export interface IProductSlice {
    products: IProduct[]
    productsPopular: IProduct[]
    productsWish: { select: boolean, product: IProduct }[]
}

export interface ITrustSlice {
    trusts: ITrust[]
}

export interface IMainSliderSlice {
    slides: IMainSlide[]
}

export interface IGallerySlice {
    images: string[]
}

export interface IAppSlice {
    theme: Theme
    lang: Lang
    user: IUser | null
    accessToken: string | null
    wishList: number[]
}

export interface IModalSlice{
    auth: boolean
    register: boolean
    remind: boolean
    wishList: boolean
    finishAuth: boolean
    cookie: boolean
}

export interface IUserSlice {
    
}

export interface IInfoSlice{
    about: IAbout | null
    contacts: IContacts | null
    delivery: { select: boolean, item: IDelivery }[]
    partners: IPartner[]
}




export type View = 2 | 3 | 4
export type SortType = 'from_cheap' | 'from_expensive' | 'by_relevance' | 'at_discount' | null
export type FilterAvailabilityType = 'in_stock' | 'out_in_stock' | null
export type FilterColorType = 'red' | 'blue' | 'violet' | 'lightgreen' | 'orange' | 'black' | 'grey' | 'pink' | 'beige' | 'green' | 'white'
export type FilterStyleType = 'separate' | 'conjoint' | 'overall' | 'longsleeve' | null
export type FilterSleevesType = 'sleeveless' | 'long_sleeve' | 'short_sleeve' | null
export type FilterSizeType = 'xs' | 's' | 'm' | 'l'

export interface IFilterSlice{
    view: View,
    sort: SortType
    filter: {
        availability: FilterAvailabilityType
        color: FilterColorType[] 
        style: FilterStyleType
        sleeves: FilterSleevesType
        size: FilterSizeType[]
        price: {
            min: number
            max: number
        }
    }
}