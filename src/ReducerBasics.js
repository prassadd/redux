import { useState } from 'react'
import {createStore,combineReducers} from 'redux'
import { productsList } from './productsList'
import CartReducer from './reducers/CartReducer'
import {removeItemFromCart,addItemToCart,increaseProdQtyInCart,deccreaseProdQtyInCart} from './reducers/CartReducer'
import ProductsReducer from './reducers/ProductsReducer'
import WishListReducer from './reducers/WishListReducer'
import {addTOWishlist,removeFromWishlist} from './reducers/WishListReducer'

const reducer = combineReducers({
    products:ProductsReducer,
    cart:CartReducer,
    wishList:WishListReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
store.subscribe( () => {
    console.log(store.getState())
})
// store.dispatch(addItemToCart(1))
// store.dispatch(addItemToCart(2,4))
// store.dispatch(addItemToCart(3))
// store.dispatch(removeItemFromCart(1))
// store.dispatch(increaseProdQtyInCart(3))
// store.dispatch(increaseProdQtyInCart(2))
// store.dispatch(deccreaseProdQtyInCart(2))

// store.dispatch(addTOWishlist(10))
// store.dispatch(addTOWishlist(12))
// store.dispatch(removeFromWishlist(10))
