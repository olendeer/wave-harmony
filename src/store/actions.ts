import * as productActions from './slices/productSlice'
import * as productActionsAsync from './api/productApi'
import * as trustActions from './api/trustApi'
import * as mainSliderActions from './api/mainSliderApi'
import * as galleryActions from './api/galleryApi'
import * as appActions from './slices/appSlice'
import * as appActionsAsync from './api/appApi'
import * as modalActions from './slices/modalSlice'
import * as userActionsAsync from './api/userApi'


const actions = {
    ...productActions.actions,
    ...productActionsAsync,
    ...trustActions,
    ...mainSliderActions,
    ...galleryActions,
    ...appActions.actions,
    ...appActionsAsync,
    ...modalActions.actions,
    ...userActionsAsync
}


export default actions