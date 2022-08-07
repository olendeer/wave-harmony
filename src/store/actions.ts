import * as productActions from './api/productApi'
import * as trustActions from './api/trustApi'
import * as mainSliderActions from './api/mainSliderApi'


const actions = {
    ...productActions,
    ...trustActions,
    ...mainSliderActions
}


export default actions