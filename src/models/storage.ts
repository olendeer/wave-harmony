
import { AppStorage } from '@/services/StorageService/AppStorage'


// Интерфейсы разных сервисов

export interface IAppStorage {
    setUser: (id: number) => void
    getUser: () => number | null
    setWishList: (wishlist: number[]) => void
    getWishList: () => number[]
}



// Типы сервисов которые доступны к добавлению в апи
export type IService = typeof AppStorage // | что-то ещё.....


// Интерфейс общего сервиса
export type IStorageClient = IAppStorage // & что-то ещё'




// Интерфейс который должен реализовать каждый из сервисов

export interface IStorageService<Service> { 
    service: () => Service
}


// Базовый класс сервиса

export class Storage<T> implements IStorageService<T>{

    client = localStorage

    service () {
        const { client: other, ...methods  } = this
        return methods as unknown as T
    }
}