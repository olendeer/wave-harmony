import { Api, ClientType, IUserApi } from "@/models/api";
import { IUser } from "@/models/user";


export interface ISingInUserRequest {
    email: string
    password: string
}

export interface IRegisterUserRequest{
    name: string
    sirname: string
    email: string
    phone: string
    password: string
    subscribe: boolean
}

export interface IAuthResponse {
    accessToken: string
    user: IUser
}


class UserApi<C extends ClientType> extends Api<IUserApi, C> implements IUserApi {
    
    fetchUserById = async (id: number) => await this.client.get<IUser>(`/users/${id}`).then(res => res.data)

    authUser = async (data: ISingInUserRequest) => await this.client.post<IAuthResponse>('/login', data).then(res => res.data)

    registerUser = async (data: IRegisterUserRequest) => await this.client.post<IAuthResponse>('/register', data).then(res => res.data)

    updateWishList = async (data: number[], id: number) => await this.client.patch<any>(`/users/${id}`, { wishList: data }).then(res => res.data)

}

export { UserApi }