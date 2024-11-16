import { useState } from 'react'
import {createStore,combineReducers} from 'redux'
import { productsList } from './productsList'
import CartReducer from './slices/CartSlice'
import {removeItemFromCart,addItemToCart,increaseProdQtyInCart,deccreaseProdQtyInCart} from './slices/CartSlice'
import ProductsReducer from './slices/ProductsSlice'
import WishListReducer from './slices/WishListSlice'
import {addTOWishlist,removeFromWishlist} from './slices/WishListSlice'
import {configureStore} from '@reduxjs/toolkit'
import {abc,midd,fd} from './middleware/middlewares'
const reducer = combineReducers({
    products:ProductsReducer,
    cart:CartReducer,
    wishList:WishListReducer
})

// export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
// store.subscribe( () => {
//     console.log(store.getState())
// })

export const store = configureStore({reducer:{
    products:ProductsReducer,
    cart:CartReducer,
    wishList:WishListReducer
},
// middleware:(getDefaultMiddleware=>getDefaultMiddleware().concat(midd).concat(abc).concat(fd))
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