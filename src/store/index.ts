import { configureStore } from '@reduxjs/toolkit'
import mainSliderSlice from './slices/mainSliderSlice';
import productSlice from './slices/productSlice';
import trustSlice from './slices/trustSlice';

// import { connectRouter, routerMiddleware } from 'connected-react-router'

// import { createBrowserHistory } from 'history';

// export const history = createBrowserHistory()


const store = configureStore({
    reducer: {
        products: productSlice,
        trust: trustSlice,
        mainSlider: mainSliderSlice
        // router: connectRouter<History>(history)
    },
    // middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(routerMiddleware(history))
})

export default store


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;