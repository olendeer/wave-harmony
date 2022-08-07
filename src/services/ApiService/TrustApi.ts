import { Api, ITrustApi, ClientType } from "@/models/api";
import { ITrust } from "@/models/trust";


class TrustApi<C extends ClientType> extends Api<ITrustApi, C> implements ITrustApi {
    
    fetchTrust = async () => await this.client.get<ITrust[]>('/trust').then(res => res.data)

}

export { TrustApi }