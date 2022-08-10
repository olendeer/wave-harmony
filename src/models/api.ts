import { AxiosInstance } from "axios"

import { ProductsApi } from "@/services/ApiService/ProductsApi"
import { TrustApi } from "@/services/ApiService/TrustApi"
import { IAuthResponse, IRegisterUserRequest, ISingInUserRequest, UserApi } from "@/services/ApiService/UserApi"
import { GalleryApi } from "@/services/ApiService/GalleryApi"
import { MainSliderApi } from "@/services/ApiService/MainSliderApi"

import { ITrust } from "./trust"
import { IProduct } from './product'
import { IMainSlide } from "./mainSlide"
import { IUser } from "./user"


// Тип клиента

export type ClientType = AxiosInstance


 
// Интерфейсы разных сервисов

export interface ITrustApi {
    fetchTrust: () =>  Promise<ITrust[]>
}

export interface IProductsApi {
    fetchProducts: () => Promise<IProduct[]>
    fetchPopularProducts: () =>  Promise<IProduct[]>
}

export interface IMainSliderApi {
    fetchMainSlider: () => Promise<IMainSlide[]>
}

export interface IGalleryApi {
    fetchGallery: () => Promise<string[]>
}



export interface IUserApi {
    fetchUserById: (id: number) => Promise<IUser>
    authUser: (data: ISingInUserRequest) => Promise<IAuthResponse>
    registerUser: (data: IRegisterUserRequest) => Promise<IAuthResponse>
}

// Типы сервисов которые доступны к добавлению в апи

export type IService = typeof TrustApi | typeof ProductsApi | typeof MainSliderApi | typeof GalleryApi | typeof UserApi // | что-то ещё.....




// Интерфейс общего сервиса

export type IApiClient = ITrustApi & IProductsApi & IMainSliderApi & IGalleryApi & IUserApi // & что-то ещё'



// Интерфейс который должен реализовать каждый из сервисов

export interface IApiService<Service, Client> { 
    client: Client
    service: () => Service
}



// Базовый класс сервиса

export class Api<T, C> implements IApiService<T, C>{

    constructor(public client: C){

    }

    service () {
        const { client: other, ...methods  } = this
        return methods as unknown as T
    }
}