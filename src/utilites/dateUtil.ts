import { DateToDatepicker } from "@/shared/types"

export class DateUtil {


    static dateToDatepicker: DateToDatepicker = date => {
        const formatter = new Intl.DateTimeFormat('ru')
        return formatter.format(date)
    }

}