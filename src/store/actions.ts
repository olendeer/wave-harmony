import * as productActions from './api/productApi'
import * as trustActions from './api/trustApi'
import * as mainSliderActions from './api/mainSliderApi'
import * as galleryActions from './api/galleryApi'
import * as appActions from './slices/appSlice'
import * as modalActions from './slices/modalSlice'
import * as appActionsAsync from './api/appApi'


const actions = {
    ...productActions,
    ...trustActions,
    ...mainSliderActions,
    ...galleryActions,
    ...appActions.actions,
    ...appActionsAsync,
    ...modalActions.actions

}


export default actions