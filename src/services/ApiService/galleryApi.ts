import { Api, IGalleryApi , ClientType } from "@/models/api";

class GalleryApi<C extends ClientType> extends Api<IGalleryApi, C> implements IGalleryApi{

    fetchGallery = async () => await this.client.get<string[]>('/gallery?_limit=14').then(res => res.data)

}

export { GalleryApi }