import { ClientType, IApiClient, IService } from '@/models/api'
import { TrustApi } from './TrustApi'
import { ProductsApi } from './ProductsApi'
import { axiosClient } from './clients'
import { MainSliderApi } from './MainSliderApi'
import { GalleryApi } from './galleryApi'


class ApiService {

    private static instance: ApiService

    private _service: IApiClient = {} as IApiClient
    
    constructor(private _client: ClientType){
        if ( ApiService.instance ) return ApiService.instance;

        ApiService.instance = this;
    }

    get service(): IApiClient {
        return this._service
    }

    add(Service: IService) {
        const serviceInstance = new Service<ClientType>(this._client).service()

        this._service = {
            ...this._service,
            ...serviceInstance
        }

        return this
    }
}

const apiInstance = new ApiService(axiosClient)


apiInstance.add(TrustApi).add(ProductsApi).add(MainSliderApi).add(GalleryApi)

const Api = apiInstance.service


export default Api

