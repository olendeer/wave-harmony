import { ProductsCases } from "@/shared/types"

export class CasesUtil {

    static productCases: ProductsCases = ( word, count ) => {
        if(count === 1 || count % 10 === 1) return word
        if((count > 1 && count < 5) || ( count % 10 > 1 && count % 10 < 5 )) return word + 'a'

        return word + 'ов'
    }
}
