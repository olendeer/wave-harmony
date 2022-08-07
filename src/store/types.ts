import { IProduct } from "@/models/product";
import { ITrust } from "@/models/trust";

export interface IProductSlice {
    products: IProduct[]
    productsPopular: IProduct[]
}

export interface ITrustSlice {
    trusts: ITrust[]
}