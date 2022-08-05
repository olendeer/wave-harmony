import { Api, ITrustApi, ClientType } from "@/models/api";
import { Trust } from "@/models/trust";


class TrustApi<C extends ClientType> extends Api<ITrustApi, C> {
    
    fetchTrust = async () => await this.client.get<Trust[]>('/trust').then(res => res.data)

}

export { TrustApi }