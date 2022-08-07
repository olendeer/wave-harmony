import * as productActions from './api/productApi'
import * as trustActions from './api/trustApi'
import * as mainSliderActions from './api/mainSliderApi'
import * as galleryActions from './api/galleryApi'


const actions = {
    ...productActions,
    ...trustActions,
    ...mainSliderActions,
    ...galleryActions
}


export default actions