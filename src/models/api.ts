
import { ProductsApi } from "@/services/ApiService/ProductsApi"
import { TrustApi } from "@/services/ApiService/TrustApi"
import { AxiosInstance } from "axios"
import { ITrust } from "./trust"
import { IProduct } from '@/models/product'


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



// Типы сервисов которые доступны к добавлению в апи

export type IService = typeof TrustApi | typeof ProductsApi // | что-то ещё.....




// Интерфейс общего сервиса

export type IApiClient = ITrustApi & IProductsApi // & что-то ещё'



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