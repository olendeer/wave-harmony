
import { IAppStorage, Storage } from "@/models/storage";

class AppStorage extends Storage<IAppStorage> implements IAppStorage {

    setUser = (id: number) => this.client.setItem('userId', id.toString())

    getUser = () => {
        const userId = this.client.getItem('userId')
        return userId ? +userId : null
    }

    setWishList = (wishlist: number[]) => this.client.setItem('wishList', JSON.stringify(wishlist))

    getWishList = () => {
        const wishList = this.client.getItem('wishList')
        return wishList ? JSON.parse(wishList) : []
    }

}

export { AppStorage }