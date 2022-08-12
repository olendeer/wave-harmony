import { Api, IInfoApi, ClientType } from "@/models/api";
import { IAbout, IContacts, IDelivery, IPartner } from "@/models/info";


class InfoApi<C extends ClientType> extends Api<IInfoApi, C> implements IInfoApi {

    fetchContacts = async () => await this.client.get<IContacts>('/contacts').then(res => res.data)

    fetchDelivery = async () => await this.client.get<IDelivery[]>('/delivery').then(res => res.data)

    fetchAbout = async () => await this.client.get<IAbout>('/about').then(res => res.data)

    fetchPartners = async () => await this.client.get<IPartner[]>('/partners').then(res => res.data)

}

export { InfoApi }