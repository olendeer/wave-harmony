import * as productActions from './api/productApi'
import * as trustActions from './api/trustApi'


const actions = {
    ...productActions,
    ...trustActions
}


export default actions