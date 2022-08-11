import { IdsFromParamsGenerate } from "@/shared/types"

export class UrlUtil {

    static generateParamsFromId: IdsFromParamsGenerate = (ids) => {
        return '?id=' + ids.join('&id=')
    }

}