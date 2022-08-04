import { PriceConvert, PriceWithSaleConvert, SaleConvert } from "@/shared/types"

export class PriceUtil {

    static price: PriceConvert = price => {
        return price.toLocaleString("ru", {
            maximumFractionDigits: 0,
        }) + ' руб.'
    }

    static sale: SaleConvert = sale => {
        return (sale / 100 * -1).toLocaleString("en", {
            style: 'percent',
            minimumFractionDigits: 0
        })
    }

    static priceWithSale: PriceWithSaleConvert = (price, sale) => {
        return (price + (price / 100) * sale).toLocaleString("ru", {
            maximumFractionDigits: 0,
        }) + ' руб.'
    }

}