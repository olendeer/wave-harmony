import { Api, IProductsApi, ClientType } from "@/models/api";
import { IProduct } from "@/models/product";
import { UrlUtil } from "@/utilites/urlUtil";


class ProductsApi<C extends ClientType> extends Api<IProductsApi, C> implements IProductsApi{

    fetchProducts = async () => await this.client.get<IProduct[]>('/products').then(res => res.data)

    fetchPopularProducts = async () => await this.client.get<IProduct[]>('/products?popular=true').then(res => res.data)

    fetchWishProducts = async (ids: number[]) => await this.client.get<IProduct[]>('/products' + UrlUtil.generateParamsFromId(ids)).then(res => res.data)

}

export { ProductsApi }