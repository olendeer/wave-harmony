
type ProductType = 'surfing' | 'conjoint' | 'separate' | 'with_sleeves' | 'without_sleeves' | 'with_cups' | 'with_shorts' | 'pregnant_women' | 'sunscreens' | 'leggings'

type SizesType = 'XS' | 'S' | 'M' | 'L' | 'По меркам'

type AvailabilityType = 'stock' | 'discontinued' | 'absent'

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
    colors: string[]
    sunProtection: string
    description: string
    params: string
    availability: AvailabilityType
    rate: number
}