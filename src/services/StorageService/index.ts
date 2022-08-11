import { IService, IStorageClient } from '@/models/storage'
import { AppStorage } from './AppStorage';


class StorageService {

    private static instance: StorageService

    private _service: IStorageClient = {} as IStorageClient
    
    constructor(){
        if ( StorageService.instance ) return StorageService.instance;

        StorageService.instance = this;
    }

    get service(): IStorageClient {
        return this._service
    }

    add(Service: IService) {
        const serviceInstance = new Service().service()

        this._service = {
            ...this._service,
            ...serviceInstance
        }

        return this
    }
}

const storageInstance = new StorageService()


storageInstance.add(AppStorage)


const Storage = storageInstance.service

export default Storage

