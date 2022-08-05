import { TrustApi } from "@/services/ApiService/TrustApi"
import { AxiosInstance } from "axios"
import { Trust } from "./trust"


// Тип клиента

export type ClientType = AxiosInstance


 
// Интерфейсы разных сервисов

export interface ITrustApi {
    fetchTrust: () => Trust[]
}



// Типы сервисов которые доступны к добавлению в апи

export type IService = typeof TrustApi // | что-то ещё.....




// Интерфейс общего сервиса

export type IApiClient = ITrustApi // & что-то ещё'



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