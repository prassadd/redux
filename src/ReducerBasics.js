import CartReducer from './slices/CartSlice'
import ProductsReducer from './slices/ProductsSlice'
import WishListReducer from './slices/WishListSlice'
import {configureStore} from '@reduxjs/toolkit'
import {midd} from './middleware/middlewares'

export const store = configureStore({
    reducer:{
        products:ProductsReducer,
        cart:CartReducer,
        wishList:WishListReducer
    },
//  middleware: (getDeafaultMiddleware) => [...getDeafaultMiddleware(),midd],
})
store.subscribe( () => {
    console.log(store.getState())
})

function sendx(x){
    switch(x){
        case 'a':
        return 10;
        case 'b':
            return 20;
    }
}
// console.log(sendx('a'),'switch')
function getd(x){
    const getx = {
        a: 10,
        b:20
    }
    return getx[x]
}

// console.log(getd('b'))