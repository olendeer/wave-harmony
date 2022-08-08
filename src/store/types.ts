import { IProduct } from "@/models/product";
import { ITrust } from "@/models/trust";
import { IMainSlide } from "@/models/mainSlide";
import { Lang, Theme } from "@/shared/types";

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
}