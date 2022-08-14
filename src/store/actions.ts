import * as productActions from './slices/productSlice'
import * as productActionsAsync from './api/productApi'
import * as trustActions from './api/trustApi'
import * as mainSliderActions from './api/mainSliderApi'
import * as galleryActions from './api/galleryApi'
import * as appActions from './slices/appSlice'
import * as appActionsAsync from './api/appApi'
import * as modalActions from './slices/modalSlice'
import * as userActionsAsync from './api/userApi'
import * as infoActionsAsync from './api/infoApi'
import * as infoActions from './slices/infoSlice'
import * as filterActions from './slices/filterSlice'


const actions = {
    ...productActions.actions,
    ...productActionsAsync,
    ...trustActions,
    ...mainSliderActions,
    ...galleryActions,
    ...appActions.actions,
    ...appActionsAsync,
    ...modalActions.actions,
    ...userActionsAsync,
    ...infoActions.actions,
    ...infoActionsAsync,
    ...filterActions.actions
}


export default actions