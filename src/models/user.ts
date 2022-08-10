
export interface IUser {
    id: number
    name?: string
    sirname?: string
    image?: string
    wishlist?: any[]
    cart?: any[]
    lang?: string
    email: string
    phone?: string
    password?: string
    subscribe?: boolean
    birth?: Date
    orders?: any[]
}
