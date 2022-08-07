
type ProductType = 'surfing' | 'conjoint' | 'separate' | 'with_sleeves' | 'without_sleeves' | 'with_cups' | 'with_shorts' | 'pregnant_women' | 'sunscreens' | 'leggings'

type SizesType = 'XS' | 'S' | 'M' | 'L' | 'По меркам'

export interface IProduct {
    type: ProductType
    isNew: boolean
    id: number
    images: string[]
    price: number
    name: string
    sizes: SizesType[]
    popular: boolean
    sale: number | null
}