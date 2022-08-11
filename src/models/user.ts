
export interface IUser {
    id: number
    name?: string
    sirname?: string
    image?: string
    wishList: number[]
    cart?: any[]
    lang?: string
    email: string
    phone?: string
    password?: string
    subscribe?: boolean
    birth?: Date
    orders?: any[]
}
