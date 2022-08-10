import { IProduct } from "@/models/product";
import { ITrust } from "@/models/trust";
import { IMainSlide } from "@/models/mainSlide";
import { Lang, Theme } from "@/shared/types";
import { IUser } from "@/models/user";

export interface IProductSlice {
    products: IProduct[]
    productsPopular: IProduct[]
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
}

export interface IModalSlice{
    auth: boolean
    register: boolean
    remind: boolean
}

export interface IUserSlice {
    
}